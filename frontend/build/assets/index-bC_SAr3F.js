import{m as U,c as h,o as g,a as n,Q as A,p as I,d as G,q as K,r as P,s as $,v as V,e as l,w as s,R as j,i as _,u as e,t as T,S as H,U as y,y as p,A as x,z as r,L as M,g as B,E as Z,B as q,F as C,V as z,k as E}from"./index-DZraatOt.js";import{_ as v}from"./FormItem-CMLIekqh.js";import{N as f,_ as d}from"./Grid-DbT1yFGD.js";import{N as w}from"./InputNumber-BwMZVu6O.js";import{N as m}from"./DynamicTags-BaKUK5EU.js";import"./prop-BjyUHhTu.js";const O={style:{display:"inline-block"},viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"};function F(b,i){return g(),h("svg",O,i[0]||(i[0]=[n("path",{fill:"currentColor","fill-rule":"evenodd",d:"m16.871 33.044l-.873 11.66c-.062.82.667 1.383 1.318 1.018c4.613-2.584 19.062-12.074 26.386-32.932c.336-.957-.567-1.82-1.337-1.28c-4.326 3.03-13.78 9.29-19.623 10.484c0 0 3.742-2.6 5.981-6.588a1.2 1.2 0 0 0-.043-1.245L20.513 2.389c-.484-.697-1.478-.408-1.652.481l-2.543 12.937L4.384 26.223c-.598.522-.476 1.577.215 1.856zm21.104-4.596c-.756 1.055-2.384 3.224-3.887 4.55c-.3.265-.26.709.084.925l7.943 4.986c.478.3 1.123-.056 1.043-.576c-.37-2.383-1.434-7.351-4.125-9.959c-.3-.29-.819-.26-1.059.074","clip-rule":"evenodd"},null,-1)]))}const Q=U({name:"icon-park-outline-star-one",render:F}),J={style:{display:"inline-block"},viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"};function X(b,i){return g(),h("svg",J,i[0]||(i[0]=[n("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"4",d:"M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"},null,-1)]))}const Y=U({name:"icon-park-outline-system",render:X}),ee={style:{display:"inline-block"},viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"};function le(b,i){return g(),h("svg",ee,i[0]||(i[0]=[A('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path stroke-linejoin="round" d="M20 10H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-2.5"></path><path d="M10 23h8m-8 8h24"></path><circle cx="34" cy="16" r="6" stroke-linejoin="round"></circle><path stroke-linejoin="round" d="M44 28.419C42.047 24.602 38 22 34 22s-5.993 1.133-8.05 3"></path></g>',1)]))}const ae=U({name:"icon-park-outline-permissions",render:le}),te={style:{display:"inline-block"},viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"};function se(b,i){return g(),h("svg",te,i[0]||(i[0]=[n("g",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"4"},[n("rect",{width:"24",height:"18",x:"12",y:"20",rx:"2"}),n("path",{"stroke-linecap":"round",d:"M18 20v-6c0-3.682 2.686-6 6-6c1.85 0 3.503.722 4.604 2a5.6 5.6 0 0 1 1.102 2M24 28v2M6 18v12m36-12v12"})],-1)]))}const oe=U({name:"icon-park-outline-electronic-locks-open",render:se});function ne(){return I.Get("/api/config/")}function de(b){return I.Post("/api/config/",b)}const ie={class:"config-container"},re={class:"layout-container"},ue={class:"sidebar"},pe={class:"version-info"},me={class:"content-area"},ce={class:"action-bar"},ve=G({__name:"index",setup(b){const i=K(),c=P("basic"),L=P(null);function k(u){return()=>C(z,null,{default:()=>C(u)})}const D=[{label:"基础设置",key:"basic",icon:k(Y)},{label:"模型与对话",key:"llm",icon:k(ae)},{label:"权限管理",key:"management",icon:k(oe)},{label:"Chaite配置",key:"chaite",icon:k(Q)}];function N(u){c.value=u}const t=$({version:"3.0.0",basic:{toggleMode:"at",togglePrefix:"#chat",debug:!1,commandPrefix:"^#chatgpt"},llm:{defaultModel:"",embeddingModel:"gemini-embedding-exp-03-07",dimensions:0,defaultChatPresetId:"",enableCustomPreset:!1,customPresetUserWhiteList:[],customPresetUserBlackList:[],promptBlockWords:[],responseBlockWords:[],blockStrategy:"full",blockWordMask:"**"},management:{blackGroups:[],whiteGroups:[],blackUsers:[],whiteUsers:[],defaultRateLimit:0},chaite:{dataDir:"data",processorsDirPath:"utils/processors",toolsDirPath:"utils/tools",cloudBaseUrl:"",cloudApiKey:"",authKey:"",host:"",port:48370}});async function W(){const u=await ne();return u.isSuccess?i.success("配置保存成功"):i.error("配置保存失败"),Object.assign(t,u.data),u.data}async function S(){(await de(t)).isSuccess?i.success("配置保存成功"):i.error("配置保存失败")}return V(async()=>{try{await W()}catch(u){console.error("加载配置失败:",u),i.error("配置加载失败")}}),(u,a)=>{const R=j;return g(),h("div",ie,[l(e(p),{title:"系统配置",class:"main-card"},{default:s(()=>[n("div",re,[n("div",ue,[l(R,{value:e(c),"onUpdate:value":[a[0]||(a[0]=o=>_(c)?c.value=o:null),N],options:D},null,8,["value"]),n("div",pe,[n("span",null,"版本: "+T(t.version),1)])]),n("div",me,[l(e(H),{ref_key:"tabsRef",ref:L,value:e(c),"onUpdate:value":a[29]||(a[29]=o=>_(c)?c.value=o:null),type:"line",animated:"",class:"responsive-tabs"},{default:s(()=>[l(e(y),{name:"basic",tab:"基础设置"},{default:s(()=>[l(e(p),{class:"inner-card"},{header:s(()=>a[30]||(a[30]=[n("div",{class:"card-header"},[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 触发与命令 "),n("div",{class:"card-subtitle"}," 设置机器人的触发方式和基本命令 ")])],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.basic},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24 s:24 m:12",label:"触发方式",path:"toggleMode"},{default:s(()=>[l(e(x),{value:t.basic.toggleMode,"onUpdate:value":a[1]||(a[1]=o=>t.basic.toggleMode=o),options:[{label:"@ 触发",value:"at"},{label:"前缀触发",value:"prefix"}]},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"触发前缀",path:"togglePrefix"},{default:s(()=>[l(e(r),{value:t.basic.togglePrefix,"onUpdate:value":a[2]||(a[2]=o=>t.basic.togglePrefix=o),placeholder:"仅前缀触发时有效",disabled:t.basic.toggleMode!=="prefix"},null,8,["value","disabled"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"命令前缀",path:"commandPrefix"},{default:s(()=>[l(e(r),{value:t.basic.commandPrefix,"onUpdate:value":a[3]||(a[3]=o=>t.basic.commandPrefix=o),placeholder:"例如: ^#chatgpt"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"调试模式",path:"debug"},{default:s(()=>[l(e(M),{value:t.basic.debug,"onUpdate:value":a[4]||(a[4]=o=>t.basic.debug=o)},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(e(y),{name:"llm",tab:"模型与对话"},{default:s(()=>[l(e(p),{class:"inner-card mb-4"},{header:s(()=>a[31]||(a[31]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 模型配置 "),n("div",{class:"card-subtitle"}," 设置默认使用的模型和嵌入模型 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.llm},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24 s:24 m:12",label:"默认模型",path:"defaultModel"},{default:s(()=>[l(e(r),{value:t.llm.defaultModel,"onUpdate:value":a[5]||(a[5]=o=>t.llm.defaultModel=o),placeholder:"输入默认模型名称"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"嵌入模型",path:"embeddingModel"},{default:s(()=>[l(e(r),{value:t.llm.embeddingModel,"onUpdate:value":a[6]||(a[6]=o=>t.llm.embeddingModel=o),placeholder:"输入嵌入模型名称"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"嵌入维度",path:"dimensions"},{default:s(()=>[l(e(w),{value:t.llm.dimensions,"onUpdate:value":a[7]||(a[7]=o=>t.llm.dimensions=o),clearable:"",placeholder:"0表示自动",min:0,style:{width:"100%"}},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"默认对话预设",path:"defaultChatPresetId"},{default:s(()=>[l(e(r),{value:t.llm.defaultChatPresetId,"onUpdate:value":a[8]||(a[8]=o=>t.llm.defaultChatPresetId=o),placeholder:"输入默认对话预设ID"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(e(p),{class:"inner-card mb-4"},{header:s(()=>a[32]||(a[32]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 预设控制 "),n("div",{class:"card-subtitle"}," 设置用户预设切换权限 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.llm},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24 s:24 m:12",label:"允许切换预设",path:"enableCustomPreset"},{default:s(()=>[l(e(M),{value:t.llm.enableCustomPreset,"onUpdate:value":a[9]||(a[9]=o=>t.llm.enableCustomPreset=o)},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"预设白名单用户",path:"customPresetUserWhiteList"},{default:s(()=>[l(e(m),{value:t.llm.customPresetUserWhiteList,"onUpdate:value":a[10]||(a[10]=o=>t.llm.customPresetUserWhiteList=o),placeholder:"输入用户ID并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"预设黑名单用户",path:"customPresetUserBlackList"},{default:s(()=>[l(e(m),{value:t.llm.customPresetUserBlackList,"onUpdate:value":a[11]||(a[11]=o=>t.llm.customPresetUserBlackList=o),placeholder:"输入用户ID并按回车添加"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(e(p),{class:"inner-card"},{header:s(()=>a[33]||(a[33]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 内容过滤 "),n("div",{class:"card-subtitle"}," 设置敏感词过滤规则 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.llm},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24",label:"用户输入屏蔽词",path:"promptBlockWords"},{default:s(()=>[l(e(m),{value:t.llm.promptBlockWords,"onUpdate:value":a[12]||(a[12]=o=>t.llm.promptBlockWords=o),placeholder:"输入屏蔽词并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"回复屏蔽词",path:"responseBlockWords"},{default:s(()=>[l(e(m),{value:t.llm.responseBlockWords,"onUpdate:value":a[13]||(a[13]=o=>t.llm.responseBlockWords=o),placeholder:"输入屏蔽词并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"屏蔽策略",path:"blockStrategy"},{default:s(()=>[l(e(x),{value:t.llm.blockStrategy,"onUpdate:value":a[14]||(a[14]=o=>t.llm.blockStrategy=o),options:[{label:"完全屏蔽消息",value:"full"},{label:"仅屏蔽关键词",value:"mask"}]},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"屏蔽替换字符",path:"blockWordMask",disabled:t.llm.blockStrategy!=="mask"},{default:s(()=>[l(e(r),{value:t.llm.blockWordMask,"onUpdate:value":a[15]||(a[15]=o=>t.llm.blockWordMask=o),placeholder:"例如: ***",disabled:t.llm.blockStrategy!=="mask"},null,8,["value","disabled"])]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(e(y),{name:"management",tab:"权限管理"},{default:s(()=>[l(e(p),{class:"inner-card mb-4"},{header:s(()=>a[34]||(a[34]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 访问控制 "),n("div",{class:"card-subtitle"}," 设置黑白名单控制机器人访问权限 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.management},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24 s:24 m:12",label:"黑名单群组",path:"blackGroups"},{default:s(()=>[l(e(m),{value:t.management.blackGroups,"onUpdate:value":a[16]||(a[16]=o=>t.management.blackGroups=o),placeholder:"输入群号并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"白名单群组",path:"whiteGroups"},{default:s(()=>[l(e(m),{value:t.management.whiteGroups,"onUpdate:value":a[17]||(a[17]=o=>t.management.whiteGroups=o),placeholder:"输入群号并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"黑名单用户",path:"blackUsers"},{default:s(()=>[l(e(m),{value:t.management.blackUsers,"onUpdate:value":a[18]||(a[18]=o=>t.management.blackUsers=o),placeholder:"输入用户ID并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"白名单用户",path:"whiteUsers"},{default:s(()=>[l(e(m),{value:t.management.whiteUsers,"onUpdate:value":a[19]||(a[19]=o=>t.management.whiteUsers=o),placeholder:"输入用户ID并按回车添加"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"对话速率限制",path:"defaultRateLimit"},{default:s(()=>[l(e(w),{value:t.management.defaultRateLimit,"onUpdate:value":a[20]||(a[20]=o=>t.management.defaultRateLimit=o),placeholder:"0表示不限制",min:0,style:{width:"100%"}},{suffix:s(()=>a[35]||(a[35]=[B(" 次/分钟 ")])),_:1},8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(e(y),{name:"chaite",tab:"Chaite配置"},{default:s(()=>[l(e(p),{class:"inner-card mb-4"},{header:s(()=>a[36]||(a[36]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," 文件与目录 "),n("div",{class:"card-subtitle"}," 设置Chaite相关文件目录 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.chaite},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24 s:24 m:12",label:"数据目录",path:"dataDir"},{default:s(()=>[l(e(r),{value:t.chaite.dataDir,"onUpdate:value":a[21]||(a[21]=o=>t.chaite.dataDir=o),placeholder:"相对于插件目录"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"处理器目录",path:"processorsDirPath"},{default:s(()=>[l(e(r),{value:t.chaite.processorsDirPath,"onUpdate:value":a[22]||(a[22]=o=>t.chaite.processorsDirPath=o),placeholder:"相对于插件目录"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"工具目录",path:"toolsDirPath"},{default:s(()=>[l(e(r),{value:t.chaite.toolsDirPath,"onUpdate:value":a[23]||(a[23]=o=>t.chaite.toolsDirPath=o),placeholder:"相对于插件目录"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(e(p),{class:"inner-card"},{header:s(()=>a[37]||(a[37]=[n("div",{class:"card-header"},[n("div",{class:"card-title"}," API与管理面板 "),n("div",{class:"card-subtitle"}," 设置云端API和管理面板配置 ")],-1)])),default:s(()=>[l(e(v),{"label-placement":"left","label-width":"auto",model:t.chaite},{default:s(()=>[l(e(f),{cols:24,"x-gap":12,"y-gap":16},{default:s(()=>[l(e(d),{span:"24",label:"云端API URL",path:"cloudBaseUrl"},{default:s(()=>[l(e(r),{value:t.chaite.cloudBaseUrl,"onUpdate:value":a[24]||(a[24]=o=>t.chaite.cloudBaseUrl=o),placeholder:"输入云端API URL"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"云端API Key",path:"cloudApiKey"},{default:s(()=>[l(e(r),{value:t.chaite.cloudApiKey,"onUpdate:value":a[25]||(a[25]=o=>t.chaite.cloudApiKey=o),type:"password","show-password-on":"click",placeholder:"输入云端API Key"},null,8,["value"])]),_:1}),l(e(d),{span:"24",label:"认证密钥",path:"authKey"},{default:s(()=>[l(e(r),{value:t.chaite.authKey,"onUpdate:value":a[26]||(a[26]=o=>t.chaite.authKey=o),type:"password","show-password-on":"click",placeholder:"非必要勿修改"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"监听地址",path:"host"},{default:s(()=>[l(e(r),{value:t.chaite.host,"onUpdate:value":a[27]||(a[27]=o=>t.chaite.host=o),placeholder:"管理面板监听地址"},null,8,["value"])]),_:1}),l(e(d),{span:"24 s:24 m:12",label:"监听端口",path:"port"},{default:s(()=>[l(e(w),{value:t.chaite.port,"onUpdate:value":a[28]||(a[28]=o=>t.chaite.port=o),min:1,max:65535,style:{width:"100%"},placeholder:"输入监听端口"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1},8,["value"]),n("div",ce,[l(e(Z),null,{default:s(()=>[l(e(q),{type:"primary",onClick:S},{default:s(()=>a[38]||(a[38]=[B(" 保存配置 ")])),_:1})]),_:1})])])])]),_:1})])}}}),Ue=E(ve,[["__scopeId","data-v-a673135b"]]);export{Ue as default};
