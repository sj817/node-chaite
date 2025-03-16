import{aw as S,gP as j,d as b,aA as g,F as a,B as m,az as w,a2 as B,hy as R,a5 as P,a4 as _,ax as I,x as f,aa as $,a8 as C,a1 as x,at as h,ae as k,h6 as F,hO as U,G as E,a7 as z,hP as K,r as V,ac as T,hQ as q,av as L}from"./index-CucaxZT9.js";const N=S("n-popconfirm"),O={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},y=j(O),M=b({name:"NPopconfirmPanel",props:O,setup(o){const{localeRef:n}=P("Popconfirm"),{inlineThemeDisabled:s}=_(),{mergedClsPrefixRef:t,mergedThemeRef:v,props:r}=I(N),u=f(()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:l,iconSize:c,iconColor:d}}=v.value;return{"--n-bezier":e,"--n-font-size":l,"--n-icon-size":c,"--n-icon-color":d}}),i=s?$("popconfirm-panel",void 0,u,r):void 0;return Object.assign(Object.assign({},P("Popconfirm")),{mergedClsPrefix:t,cssVars:s?void 0:u,localizedPositiveText:f(()=>o.positiveText||n.value.positiveText),localizedNegativeText:f(()=>o.negativeText||n.value.negativeText),positiveButtonProps:C(r,"positiveButtonProps"),negativeButtonProps:C(r,"negativeButtonProps"),handlePositiveClick(e){o.onPositiveClick(e)},handleNegativeClick(e){o.onNegativeClick(e)},themeClass:i?.themeClass,onRender:i?.onRender})},render(){var o;const{mergedClsPrefix:n,showIcon:s,$slots:t}=this,v=g(t.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(m,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(m,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(o=this.onRender)===null||o===void 0||o.call(this),a("div",{class:[`${n}-popconfirm__panel`,this.themeClass],style:this.cssVars},w(t.default,r=>s||r?a("div",{class:`${n}-popconfirm__body`},s?a("div",{class:`${n}-popconfirm__icon`},g(t.icon,()=>[a(B,{clsPrefix:n},{default:()=>a(R,null)})])):null,r):null),v?a("div",{class:[`${n}-popconfirm__action`]},v):null)}}),W=x("popconfirm",[h("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[h("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),h("action",`
 display: flex;
 justify-content: flex-end;
 `,[k("&:not(:first-child)","margin-top: 8px"),x("button",[k("&:not(:last-child)","margin-right: 8px;")])])]),A=Object.assign(Object.assign(Object.assign({},z.props),q),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),G=b({name:"Popconfirm",props:A,slots:Object,__popover__:!0,setup(o){const{mergedClsPrefixRef:n}=_(),s=z("Popconfirm","-popconfirm",W,K,o,n),t=V(null);function v(i){var e;if(!(!((e=t.value)===null||e===void 0)&&e.getMergedShow()))return;const{onPositiveClick:l,"onUpdate:show":c}=o;Promise.resolve(l?l(i):!0).then(d=>{var p;d!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),c&&T(c,!1))})}function r(i){var e;if(!(!((e=t.value)===null||e===void 0)&&e.getMergedShow()))return;const{onNegativeClick:l,"onUpdate:show":c}=o;Promise.resolve(l?l(i):!0).then(d=>{var p;d!==!1&&((p=t.value)===null||p===void 0||p.setShow(!1),c&&T(c,!1))})}return L(N,{mergedThemeRef:s,mergedClsPrefixRef:n,props:o}),{setShow(i){var e;(e=t.value)===null||e===void 0||e.setShow(i)},syncPosition(){var i;(i=t.value)===null||i===void 0||i.syncPosition()},mergedTheme:s,popoverInstRef:t,handlePositiveClick:v,handleNegativeClick:r}},render(){const{$slots:o,$props:n,mergedTheme:s}=this;return a(E,U(n,y,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:o.trigger,default:()=>{const t=F(n,y);return a(M,Object.assign(Object.assign({},t),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),o)}})}});export{G as N};
