import{d as P,hN as v,r as g,bd as j,x as z,b as w,o as y,K as E,u as o,i as K,w as a,e as n,n as S,z as A,B as G,g as M,E as H}from"./index-CucaxZT9.js";import{a as I,_ as J}from"./FormItem-Dc6zS2Y0.js";import{_ as O}from"./InputNumber-cu9bhpU_.js";const Y=P({__name:"DictModal",props:{modalName:{default:""},dictCode:{},isRoot:{type:Boolean,default:!1}},emits:["open","close"],setup(u,{expose:R,emit:C}){const c=C,{bool:i,setTrue:N,setFalse:k}=v(!1),{bool:T,setTrue:B,setFalse:x}=v(!1),p={label:"",code:""},t=g({...p}),d=j("add"),h=z(()=>`${{add:"添加",view:"查看",edit:"编辑"}[d.value]}${u.modalName}`);async function U(l="add",e){c("open"),d.value=l,N(),await{async add(){t.value={...p},t.value.isRoot=u.isRoot?1:0,u.dictCode&&(t.value.code=u.dictCode)},async view(){e&&(t.value={...e})},async edit(){e&&(t.value={...e})}}[l]()}function f(){k(),x(),c("close")}R({openModal:U});const _=g();async function V(){const l={async add(){return new Promise(e=>{setTimeout(()=>{window.$message.success("模拟新增成功"),e(!0)},2e3)})},async edit(){return new Promise(e=>{setTimeout(()=>{window.$message.success("模拟编辑成功"),e(!0)},2e3)})},async view(){return!0}};await _.value?.validate(),B(),await l[d.value]()&&f()}const $={label:{required:!0,message:"请输入字典名称",trigger:["input","blur"]},code:{required:!0,message:"请输入字典码",trigger:["input","blur"]},value:{required:!0,message:"请输入字典值",type:"number",trigger:["input","blur"]}};return(l,e)=>{const r=A,m=I,q=O,L=J,b=G,D=H,F=E;return y(),w(F,{show:o(i),"onUpdate:show":e[3]||(e[3]=s=>K(i)?i.value=s:null),"mask-closable":!1,preset:"card",title:o(h),class:"w-700px",segmented:{content:!0,action:!0}},{action:a(()=>[n(D,{justify:"center"},{default:a(()=>[n(b,{onClick:f},{default:a(()=>e[4]||(e[4]=[M(" 取消 ")])),_:1}),n(b,{type:"primary",loading:o(T),onClick:V},{default:a(()=>e[5]||(e[5]=[M(" 提交 ")])),_:1},8,["loading"])]),_:1})]),default:a(()=>[n(L,{ref_key:"formRef",ref:_,rules:$,"label-placement":"left",model:o(t),"label-width":100,disabled:o(d)==="view"},{default:a(()=>[n(m,{label:"字典名称",path:"label"},{default:a(()=>[n(r,{value:o(t).label,"onUpdate:value":e[0]||(e[0]=s=>o(t).label=s)},null,8,["value"])]),_:1}),n(m,{label:"字典码",path:"code"},{default:a(()=>[n(r,{value:o(t).code,"onUpdate:value":e[1]||(e[1]=s=>o(t).code=s),disabled:!l.isRoot},null,8,["value","disabled"])]),_:1}),l.isRoot?S("",!0):(y(),w(m,{key:0,label:"字典值",path:"value"},{default:a(()=>[n(q,{value:o(t).value,"onUpdate:value":e[2]||(e[2]=s=>o(t).value=s),min:0},null,8,["value"])]),_:1}))]),_:1},8,["model","disabled"])]),_:1},8,["show","title"])}}});export{Y as _};
