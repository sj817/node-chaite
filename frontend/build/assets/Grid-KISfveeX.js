import{g_ as F,x as S,r as C,aL as z,g$ as V,aw as U,gP as Y,d as L,F as E,ax as H,gN as J,h0 as x,h1 as A,h2 as W,a4 as Z,aP as B,v as K,av as ee,a8 as P,ap as te,h3 as se,h4 as ne,gj as j,h5 as re}from"./index-CucaxZT9.js";function ie(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,s]=r.split(":");s===void 0?t[""]=n:t[n]=s}),t}function _(e,t){var r;if(e==null)return;const n=ie(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let s=t.length-1;s>=0;--s){const i=t[s];if(i in n)return n[i]}return n[""]}else{let s,i=-1;return Object.keys(n).forEach(a=>{const l=Number(a);!Number.isNaN(l)&&t>=l&&l>=i&&(i=l,s=n[a])}),s}}const oe={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function ae(e){return`(min-width: ${e}px)`}const N={};function le(e=oe){if(!F)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=C({}),r=Object.keys(e),n=(s,i)=>{s.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(s=>{const i=e[s];let a,l;N[i]===void 0?(a=window.matchMedia(ae(i)),a.addEventListener?a.addEventListener("change",d=>{l.forEach(f=>{f(d,s)})}):a.addListener&&a.addListener(d=>{l.forEach(f=>{f(d,s)})}),l=new Set,N[i]={mql:a,cbs:l}):(a=N[i].mql,l=N[i].cbs),l.add(n),a.matches&&l.forEach(d=>{d(a,s)})}),z(()=>{r.forEach(s=>{const{cbs:i}=N[e[s]];i.has(n)&&i.delete(n)})}),S(()=>{const{value:s}=t;return r.filter(i=>s[i])})}function fe(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===V);return!!(r&&r.value===!1)}const O=1,T=U("n-grid"),Q=1,X={span:{type:[Number,String],default:Q},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},ce=Y(X),ve=L({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:X,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:s}=H(T),i=J();return{overflow:n,itemStyle:r,layoutShiftDisabled:s,mergedXGap:S(()=>x(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=Q,privateShow:l=!0,privateColStart:d=void 0,privateOffset:f=0}=i.vnode.props,{value:$}=t,g=x($||0);return{display:l?"":"none",gridColumn:`${d??`span ${a}`} / span ${a}`,marginLeft:f?`calc((100% - (${a} - 1) * ${g}) / ${a} * ${f} + ${g} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:s}=this;return E("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${s}) / ${r} * ${n} + ${s} * ${n})`:""}},this.$slots)}return E("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),ue={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},q=24,I="__ssr__",de={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:q},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},he=L({name:"Grid",inheritAttrs:!1,props:de,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=Z(e),n=/^\d+$/,s=C(void 0),i=le(r?.value||ue),a=B(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),l=S(()=>{if(a.value)return e.responsive==="self"?s.value:i.value}),d=B(()=>{var u;return(u=Number(_(e.cols.toString(),l.value)))!==null&&u!==void 0?u:q}),f=B(()=>_(e.xGap.toString(),l.value)),$=B(()=>_(e.yGap.toString(),l.value)),g=u=>{s.value=u.contentRect.width},v=u=>{re(g,u)},y=C(!1),R=S(()=>{if(e.responsive==="self")return v}),p=C(!1),h=C();return K(()=>{const{value:u}=h;u&&u.hasAttribute(I)&&(u.removeAttribute(I),p.value=!0)}),ee(T,{layoutShiftDisabledRef:P(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:P(e,"itemStyle"),xGapRef:f,overflowRef:y}),{isSsr:!te,contentEl:h,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:x(e.xGap),rowGap:x(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:x(f.value),rowGap:x($.value)}),isResponsive:a,responsiveQuery:l,responsiveCols:d,handleResize:R,overflow:y}},render(){if(this.layoutShiftDisabled)return E("div",A({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,s,i,a,l;this.overflow=!1;const d=se(ne(this)),f=[],{collapsed:$,collapsedRows:g,responsiveCols:v,responsiveQuery:y}=this;d.forEach(o=>{var G,m,c,b,D;if(((G=o?.type)===null||G===void 0?void 0:G.__GRID_ITEM__)!==!0)return;if(fe(o)){const w=j(o);w.props?w.props.privateShow=!1:w.props={privateShow:!1},f.push({child:w,rawChildSpan:0});return}o.dirs=((m=o.dirs)===null||m===void 0?void 0:m.filter(({dir:w})=>w!==V))||null,((c=o.dirs)===null||c===void 0?void 0:c.length)===0&&(o.dirs=null);const M=j(o),k=Number((D=_((b=M.props)===null||b===void 0?void 0:b.span,y))!==null&&D!==void 0?D:O);k!==0&&f.push({child:M,rawChildSpan:k})});let R=0;const p=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(p?.props){const o=(r=p.props)===null||r===void 0?void 0:r.suffix;o!==void 0&&o!==!1&&(R=Number((s=_((n=p.props)===null||n===void 0?void 0:n.span,y))!==null&&s!==void 0?s:O),p.props.privateSpan=R,p.props.privateColStart=v+1-R,p.props.privateShow=(i=p.props.privateShow)!==null&&i!==void 0?i:!0)}let h=0,u=!1;for(const{child:o,rawChildSpan:G}of f){if(u&&(this.overflow=!0),!u){const m=Number((l=_((a=o.props)===null||a===void 0?void 0:a.offset,y))!==null&&l!==void 0?l:0),c=Math.min(G+m,v);if(o.props?(o.props.privateSpan=c,o.props.privateOffset=m):o.props={privateSpan:c,privateOffset:m},$){const b=h%v;c+b>v&&(h+=v-b),c+h+R>g*v?u=!0:h+=c}}u&&(o.props?o.props.privateShow!==!0&&(o.props.privateShow=!1):o.props={privateShow:!1})}return E("div",A({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[I]:this.isSsr||void 0},this.$attrs),f.map(({child:o})=>o))};return this.isResponsive&&this.responsive==="self"?E(W,{onResize:this.handleResize},{default:e}):e()}});export{he as N,ve as _,X as a,ce as g};
