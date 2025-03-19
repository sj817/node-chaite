import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import { CloudSharingService, Filter, SearchOption, Shareable } from '../types/index'
import { BasicStorage } from '../types/storage'
import { getLogger } from '../index'

// todo
export type ExecutableSShareableType = 'tool' | 'processor'

/**
 * T是DTO
 * C是T对应的可执行的实例类型
 * @interface ExecutableShareableManager
 */
export abstract class ExecutableShareableManager<T extends Shareable<T>, C> {
  private watcher: fs.FSWatcher | null = null
  /**
   * 存储示例名称和文件名的映射
   * @private
   */
  protected instanceMap: Map<string, string> = new Map()
  /**
   * codeDirectory是存放实际代码的目录
   * @private
   */
  protected codeDirectory: string
  cloudService?: CloudSharingService<T>

  protected constructor(private type: ExecutableSShareableType, codeDirectory: string, private storage: BasicStorage<T>) {
    this.codeDirectory = codeDirectory
  }
  public setCloudService (cloudService: CloudSharingService<T>) {
    this.cloudService = cloudService
  }

  /**
   * 只有可执行类型的实例才需要，如工具、处理器等。设置类不需要
   * @private
   */
  async initialize(): Promise<void> {
    // 初始扫描加载所有实例
    await this.scanInstances()

    // 设置文件监听
    this.setupFileWatcher()
  }

  private setupFileWatcher(): void {
    if (this.watcher) {
      this.watcher.close()
    }

    this.watcher = fs.watch(this.codeDirectory, { recursive: true }, async (eventType, filename) => {
      if (!filename) return
      if (path.extname(filename) !== '') return
      
      // 文件变化时重新扫描代码目录
      await this.scanInstances()
    })

    getLogger().debug(`File watcher set up for directory: ${this.codeDirectory}`)
  }

  private async scanInstances(): Promise<void> {
    try {
      const files = await fsPromises.readdir(this.codeDirectory)
      const newInstanceMap = new Map<string, string>()

      for (const file of files) {
        if (path.extname(file) === '.js') {
          try {
            const filePath = path.join(this.codeDirectory, file)
            const fileURL = `file://${path.resolve(filePath).replace(/\\/g, '/')}`
            // 清除模块缓存以确保获取最新版本
            const module = await import(fileURL)
            if (module.default && typeof module.default === 'object' && module.default.name) {
              // 使用示例自己的name作为键，文件名作为值
              getLogger().debug(`Loaded ${this.type} '${module.default.name}' from file '${file}'`)
              newInstanceMap.set(module.default.name, file)
            }
          } catch (error) {
            getLogger().error(`Error loading ${this.type} from file '${file}':`, error as never)
          }
        }
      }
      this.instanceMap = newInstanceMap
      getLogger().info(`Scanned ${this.instanceMap.size} ${this.type}: [${[...this.instanceMap.keys()].join(', ')}]`)
    } catch (error) {
      getLogger().error(`Error scanning ${this.type} directory:`, error as never)
    }
  }

  /**
   * 返回实例名字们
   * @returns 实例名字列表
   */
  public async listInstanceNames(): Promise<string[]> {
    return Array.from(this.instanceMap.keys())
  }

  public async listInstances(): Promise<T[]> {
    return this.storage.listItems()
  }

  public async getInstanceT(id: string): Promise<T | null> {
    return this.storage.getItem(id)
  }


  /**
   * 获取实例对象而非Shareable DTO
   * @param name
   */
  public async getInstance(name: string): Promise<C | undefined> {
    const filename = this.instanceMap.get(name)

    if (!filename) return undefined

    const filePath = path.join(this.codeDirectory, filename)
    try {
      // 清除模块缓存，确保获取最新版本
      const module = await import(filePath)
      return module.default as C
    } catch (error) {
      console.error(`Error loading tool '${name}':`, error)
      return undefined
    }
  }

  /**
   * 新增或更新
   * 有id就是更新，靠storage实现去控制，这里不管
   * @param instance
   */
  public async addInstance(instance: T): Promise<void> {
    await this.storage.setItem(instance.id, instance)
    await this.addInstanceCode(instance.name, instance.code as string)
  }

  public async addInstanceCode(name: string, code: string): Promise<void> {
    const filename = `${name.replace(/[^a-zA-Z0-9_]/g, '_')}.js`
    const filePath = path.join(this.codeDirectory, filename)

    await fsPromises.writeFile(filePath, code)
    // 文件监听器会自动触发扫描
  }

  public async updateInstance(name: string, code: string): Promise<void> {
    const filename = this.instanceMap.get(name)

    if (!filename) {
      // 如果实例不存在，创建一个新的
      return this.addInstance({
        name, code,
      } as T)
    }

    const filePath = path.join(this.codeDirectory, filename)
    await fsPromises.writeFile(filePath, code)
    // 文件监听器会自动触发扫描
  }

  public async renameFile (id: string, oldName: string, newName: string) {
    const filename = `${oldName.replace(/[^a-zA-Z0-9_]/g, '_')}.js`
    if (filename) {
      const filePath = path.join(this.codeDirectory, filename)
      const newFilename = `${newName.replace(/[^a-zA-Z0-9_]/g, '_')}.js`
      const newFilePath = path.join(this.codeDirectory, newFilename)
      await fsPromises.rename(filePath, newFilePath)
      // 文件监听器会自动触发扫描
    }
  }

  public async deleteInstance(id: string): Promise<void> {
    const t = await this.storage.getItem(id)
    if (!t) {
      return
    }

    const filename = this.instanceMap.get(t.name)

    if (filename) {
      const filePath = path.join(this.codeDirectory, filename)
      await fsPromises.unlink(filePath)
      // 文件监听器会自动触发扫描
    }

    await this.storage.removeItem(id)
    // todo transactional?
  }
  
  // Sharing methods
  /**
   * 序列化实例，返回DTO
   * @param name
   */
  abstract serializeInstance(name: string): Promise<T | null>

  public async deserializeExecutableInstance(serialized: T): Promise<C> {
    await this.addInstance(serialized)
    const tool = await this.getInstance(serialized.name)
    if (!tool) throw new Error(`Failed to deserialize ${this.type} '${serialized.name}'`)
    return tool
  }

  // Cloud sharing methods

  private checkCloudService(): CloudSharingService<T> {
    if (!this.cloudService) {
      throw new Error('Cloud service is not initialized')
    }
    return this.cloudService as CloudSharingService<T>
  }
  
  public async shareToCloud(name: string): Promise<string | undefined> {
    const service = this.checkCloudService()
    const serialized = await this.serializeInstance(name)
    if (!serialized) throw new Error(`${this.type} not found`)
    const instance = await service.upload(serialized)
    return instance?.id
  }

  public async listFromCloud(filter: Filter, query: string, searchOption: SearchOption): Promise<T[] | null> {
    const service = this.checkCloudService()
    return await service.list(filter, query, searchOption)
  }

  public async getFromCloud(shareId: string): Promise<C | null> {
    const service = this.checkCloudService()
    const serialized = await service.download(shareId)
    return serialized ? this.deserializeExecutableInstance(serialized) : null
  }

  public async shareP2P(name: string): Promise<string | null> {
    const service = this.checkCloudService()
    const serialized = await this.serializeInstance(name)
    if (!serialized) throw new Error(`${this.type} not found`)
    return service.initializeTransfer(serialized)
  }

  public async dispose(): Promise<void> {
    if (this.watcher) {
      this.watcher.close()
      this.watcher = null
    }
  }
}

export type NonExecutableSShareableType = 'chat-preset' | 'tool-settings' | 'channel'

export abstract class NonExecutableShareableManager<T extends Shareable<T>> {
  cloudService?: CloudSharingService<T>

  protected constructor(protected type: NonExecutableSShareableType, protected storage: BasicStorage<T>) {
  }

  public setCloudService (cloudService: CloudSharingService<T>) {
    this.cloudService = cloudService
  }

  async addInstance(instance: T) {
    await this.storage.setItem(instance.id, instance)
  }

  async deleteInstance(key: string) {
    await this.storage.removeItem(key)
  }

  async listInstances(): Promise<T[]> {
    return await this.storage.listItems()
  }

  async getInstance(key: string): Promise<T | null> {
    return await this.storage.getItem(key)
  }

  private checkCloudService(): CloudSharingService<T> {
    if (!this.cloudService) {
      throw new Error('Cloud service is not initialized')
    }
    return this.cloudService as CloudSharingService<T>
  }

  public async shareToCloud(key: string): Promise<string | undefined> {
    const service = this.checkCloudService()
    const item = await this.storage.getItem(key)
    if (!item) throw new Error(`${this.type} not found`)
    const instance = await service.upload(item)
    return instance?.id
  }

  public async shareP2P(key: string): Promise<string | null> {
    const service = this.checkCloudService()
    const item = await this.storage.getItem(key)
    if (!item) throw new Error(`${this.type} not found`)
    return service.initializeTransfer(item)
  }

  public async getFromCloud(shareId: string): Promise<T | null> {
    const service = this.checkCloudService()
    return await service.download(shareId)
  }

  public async listFromCloud(filter: Filter, query: string, searchOption: SearchOption): Promise<T[] | null> {
    const service = this.checkCloudService()
    return await service.list(filter, query, searchOption)
  }

  public async deleteFromCloud(key: string): Promise<void> {
    const service = this.checkCloudService()
    await service.delete(key)
  }
}
