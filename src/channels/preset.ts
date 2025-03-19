import { AbstractShareable, SendMessageOption } from '../types/index'

/**
 * 对话模式预设，最终使用的
 */
export class ChatPreset extends AbstractShareable<ChatPreset> {
  constructor(params?: Partial<ChatPreset>) {
    super(params)
    if (params) {
      this.prefix = params.prefix || ''
      if (params.sendMessageOption) {
        this.sendMessageOption = params.sendMessageOption
      }
      this.local = params.local || false
      this.namespace = params.namespace
    }
  }

  prefix: string
  // channelId: string
  local: boolean
  namespace?: string
  sendMessageOption: SendMessageOption

  toString(): string {
    return JSON.stringify({
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      embedded: this.embedded,
      uploader: this.uploader,
      modelType: this.modelType,
      prefix: this.prefix,
      // channelId: this.channelId,
      name: this.name,
      local: this.local,
      namespace: this.namespace,
      description: this.description,
      sendMessageOption: this.sendMessageOption?.toString(), // 嵌套序列化
    })
  }

  fromString(str: string): ChatPreset {
    const raw = JSON.parse(str)
    const preset = new ChatPreset()

    preset.prefix = raw.prefix
    // preset.channelId = raw.channelId
    preset.name = raw.name
    preset.local = raw.local
    preset.namespace = raw.namespace
    preset.description = raw.description
    preset.id = raw.id
    preset.createdAt = raw.createdAt
    preset.updatedAt = raw.updatedAt
    preset.embedded = raw.embedded
    preset.uploader = raw.uploader
    preset.modelType = raw.modelType

    if (raw.sendMessageOption) {
      preset.sendMessageOption = typeof raw.sendMessageOption === 'string'
        ? SendMessageOption.create().fromString(raw.sendMessageOption)
        : SendMessageOption.create().fromString(JSON.stringify(raw.sendMessageOption))
    }

    return preset
  }

  toFormatedString(verbose?: boolean): string {
    let base = `预设ID：${this.id}`

    if (this.name) {
      base += `\n预设名称：${this.name}`
    }

    if (this.namespace) {
      base += `\nnamespace：${this.namespace}`
    }

    if (this.description) {
      base += `\n描述：${this.description}`
    }

    if (this.prefix) {
      base += `\n前缀：${this.prefix}`
    }

    if (this.createdAt) {
      base += `\n创建时间：${this.createdAt}`
    }

    if (this.updatedAt) {
      base += `\n最后更新时间：${this.updatedAt}`
    }

    if (this.uploader?.username) {
      base += `\n上传者：@${this.uploader.username}`
    }

    if (this.sendMessageOption) {
      if (this.sendMessageOption.model) {
        base += `\n模型：${this.sendMessageOption.model}`
      }
      if (this.sendMessageOption.temperature) {
        base += `\n温度：${this.sendMessageOption.temperature}`
      }
      if (this.sendMessageOption.maxToken) {
        base += `\n最大Token：${this.sendMessageOption.maxToken}`
      }
      if (verbose) {
        if (this.sendMessageOption.systemOverride) {
          base += `\n系统提示：${this.sendMessageOption.systemOverride}`
        }
      } else {
        base += '\n预设内容仅主人可查看'
      }
    }

    return base.trimEnd()
  }
}
