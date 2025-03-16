import{d as N,r as _,x as h,J as O,c as U,o as B,e,u as s,K as k,w as a,y as A,a as C,z as i,E as y,G as M,A as x,B as m,g as v,k as I}from"./index-CucaxZT9.js";import{_ as q}from"./FormItem-Dc6zS2Y0.js";import{N as b}from"./Grid-KISfveeX.js";import{_ as n}from"./FormItemGridItem-Dp7BRbUe.js";import{_ as R}from"./InputNumber-cu9bhpU_.js";import{N as z,a as T}from"./CollapseItem-Dfyd-2UU.js";const j={style:{display:"flex","justify-content":"flex-end","margin-top":"24px"}},D=N({__name:"PresetFormModal",props:{show:Boolean,editMode:Boolean,initialData:{type:Object,default:()=>({})},preProcessorOptions:{type:Array,default:()=>[]},postProcessorOptions:{type:Array,default:()=>[]}},emits:["update:show","submit"],setup(d,{emit:c}){const p=d,f=c,g=_(),u=h({get:()=>p.show,set:r=>f("update:show",r)}),w={name:{required:!0,trigger:["blur","input"],message:"请输入预设名称"},description:{required:!0,trigger:["blur","change"],message:"请选择客户端类型"},prefix:{required:!0,trigger:["blur","input"],message:"请输入基础URL"},"sendMessageOption.model":{required:!0,trigger:["blur","input"],message:"请输入模型"}},l=_({modelType:"settings",name:"",embedded:!1,description:"",sendMessageOption:{systemOverride:"",temperature:.6,model:""},prefix:"",local:!0});O(()=>p.initialData,r=>{p.editMode&&r&&(l.value={...r})},{immediate:!0});function P(){g.value?.validate().then(r=>{if(Array.isArray(r)){console.error(r);return}f("submit",l.value),u.value=!1})}return O(u,r=>{!r&&!p.editMode&&(l.value={modelType:"settings",name:"",embedded:!1,description:"",sendMessageOption:{systemOverride:"",temperature:.6,model:""},prefix:"",local:!0})}),(r,t)=>(B(),U("div",null,[e(s(k),{show:u.value,"onUpdate:show":t[8]||(t[8]=o=>u.value=o),preset:"card",style:{width:"700px","max-width":"90vw"}},{default:a(()=>[e(s(A),{title:d.editMode?"编辑预设":"添加预设"},{default:a(()=>[e(s(q),{ref_key:"formRef",ref:g,rules:w,model:l.value},{default:a(()=>[e(s(b),{cols:24,"x-gap":12,"y-gap":16,responsive:"self","item-responsive":""},{default:a(()=>[e(s(n),{span:"12 s:8 m:4",label:"名称",path:"name"},{default:a(()=>[e(s(i),{value:l.value.name,"onUpdate:value":t[0]||(t[0]=o=>l.value.name=o),placeholder:"请输入预设名称"},null,8,["value"])]),_:1}),e(s(n),{span:"12 s:8 m:4",label:"前缀",path:"prefix"},{default:a(()=>[e(s(i),{value:l.value.prefix,"onUpdate:value":t[1]||(t[1]=o=>l.value.prefix=o),placeholder:"请输入前缀"},null,8,["value"])]),_:1}),e(s(n),{span:"12 s:8 m:4",label:"模型",path:"sendMessageOption.model"},{default:a(()=>[e(s(i),{value:l.value.sendMessageOption.model,"onUpdate:value":t[2]||(t[2]=o=>l.value.sendMessageOption.model=o),placeholder:"请输入模型"},null,8,["value"])]),_:1}),e(s(n),{span:"12 s:8 m:4",label:"温度",path:"sendMessageOption.temperature"},{default:a(()=>[e(s(R),{value:l.value.sendMessageOption.temperature,"onUpdate:value":t[3]||(t[3]=o=>l.value.sendMessageOption.temperature=o),placeholder:"请输入温度"},null,8,["value"])]),_:1}),e(s(n),{span:"24",label:"模型",path:"sendMessageOption.systemOverride"},{default:a(()=>[e(s(i),{value:l.value.sendMessageOption.systemOverride,"onUpdate:value":t[4]||(t[4]=o=>l.value.sendMessageOption.systemOverride=o),type:"textarea",placeholder:"请输入提示词"},null,8,["value"])]),_:1})]),_:1}),e(s(z),{class:"mt-4"},{default:a(()=>[e(s(T),{title:"高级设置",name:"advanced"},{default:a(()=>[e(s(b),{cols:24,"x-gap":12,"y-gap":16,responsive:"screen","item-responsive":""},{default:a(()=>[e(s(n),{span:"24 s:12 m:8",label:"处理器",path:"processors"},{default:a(()=>[e(s(y),null,{default:a(()=>[e(s(M),{trigger:"hover",placement:"bottom",width:260},{trigger:a(()=>[e(s(m),{size:"small"},{default:a(()=>t[9]||(t[9]=[v(" 前处理器 ")])),_:1})]),default:a(()=>[e(s(x),{value:l.value.sendMessageOption.preProcessorIds,"onUpdate:value":t[5]||(t[5]=o=>l.value.sendMessageOption.preProcessorIds=o),multiple:"",placeholder:"请选择前处理器",options:d.preProcessorOptions},null,8,["value","options"])]),_:1}),e(s(M),{trigger:"hover",placement:"bottom",width:260},{trigger:a(()=>[e(s(m),{size:"small"},{default:a(()=>t[10]||(t[10]=[v(" 后处理器 ")])),_:1})]),default:a(()=>[e(s(x),{value:l.value.sendMessageOption.postProcessorIds,"onUpdate:value":t[6]||(t[6]=o=>l.value.sendMessageOption.postProcessorIds=o),multiple:"",placeholder:"请选择后处理器",options:d.postProcessorOptions},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),C("div",j,[e(s(y),null,{default:a(()=>[e(s(m),{onClick:t[7]||(t[7]=o=>u.value=!1)},{default:a(()=>t[11]||(t[11]=[v(" 取消 ")])),_:1}),e(s(m),{type:"primary",onClick:P},{default:a(()=>t[12]||(t[12]=[v(" 确定 ")])),_:1})]),_:1})])]),_:1},8,["model"])]),_:1},8,["title"])]),_:1},8,["show"])]))}}),L=I(D,[["__scopeId","data-v-fadf3722"]]);export{L as default};
