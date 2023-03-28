import{u as $e,d as Ae,c as et,l as tt,f as nt,i as ot,j as at,k as it,g as lt,o as ne,Q as rt,m as X,n as Z}from"./use-timeout.64029db9.js";import{c as M,h as I}from"./render.3fed357f.js";import{c as _,h as q,g as V,r as w,P as Le,q as ye,b as Be,m as be,w as $,o as st,a as D,u as ut,l as oe,U as _e,F as ct,V as dt,W as ft,y as mt,j as re,t as ht,T as Me,v as vt,_ as se,X as ae,I as k,J as A,K as v,L as h,S as y,Y as L,Z as ie,A as gt,M as z,$ as pt,a0 as Te,a1 as xt,a2 as yt,N as Qe}from"./index.bff18c19.js";import{Q as bt}from"./QPage.9eeadf51.js";import{e as ee,d as _t,f as Tt,h as wt,i as Ct,Q as F}from"./QBtn.db73345c.js";var ue=M({name:"QCard",props:{...$e,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:o}}=V(),t=Ae(e,o),i=_(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>q(e.tag,{class:i.value},I(n.default))}});const kt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function qt({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:i,emit:r}=V(),a=w(null);let s=null;function u(l){return a.value===null?!1:l===void 0||l.touches===void 0||l.touches.length<=1}const d={};o===void 0&&(Object.assign(d,{hide(l){i.hide(l)},toggle(l){i.toggle(l),l.qAnchorHandled=!0},toggleKey(l){Le(l,13)===!0&&d.toggle(l)},contextClick(l){i.hide(l),ye(l),Be(()=>{i.show(l),l.qAnchorHandled=!0})},prevent:ye,mobileTouch(l){if(d.mobileCleanup(l),u(l)!==!0)return;i.hide(l),a.value.classList.add("non-selectable");const x=l.target;be(d,"anchor",[[x,"touchmove","mobileCleanup","passive"],[x,"touchend","mobileCleanup","passive"],[x,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,i.show(l),l.qAnchorHandled=!0},300)},mobileCleanup(l){a.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&l!==void 0&&et()}}),o=function(l=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let x;l===!0?i.$q.platform.is.mobile===!0?x=[[a.value,"touchstart","mobileTouch","passive"]]:x=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:x=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],be(d,"anchor",x)});function f(){ut(d,"anchor")}function g(l){for(a.value=l;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function p(){if(t.target===!1||t.target===""||i.$el.parentNode===null)a.value=null;else if(t.target===!0)g(i.$el.parentNode);else{let l=t.target;if(typeof t.target=="string")try{l=document.querySelector(t.target)}catch{l=void 0}l!=null?(a.value=l.$el||l,o()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return $(()=>t.contextMenu,l=>{a.value!==null&&(f(),o(l))}),$(()=>t.target,()=>{a.value!==null&&f(),p()}),$(()=>t.noParentEvent,l=>{a.value!==null&&(l===!0?f():o())}),st(()=>{p(),n!==!0&&t.modelValue===!0&&a.value===null&&r("update:modelValue",!1)}),D(()=>{s!==null&&clearTimeout(s),f()}),{anchorEl:a,canShow:u,anchorEvents:d}}function St(e,n){const o=w(null);let t;function i(s,u){const d=`${u!==void 0?"add":"remove"}EventListener`,f=u!==void 0?u:t;s!==window&&s[d]("scroll",f,oe.passive),window[d]("scroll",f,oe.passive),t=u}function r(){o.value!==null&&(i(o.value),o.value=null)}const a=$(()=>e.noParentEvent,()=>{o.value!==null&&(r(),n())});return D(a),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:i}}let O=[],j=[];function Fe(e){j=j.filter(n=>n!==e)}function Et(e){Fe(e),j.push(e)}function we(e){Fe(e),j.length===0&&O.length>0&&(O[O.length-1](),O=[])}function Ht(e){j.length===0?e():O.push(e)}let Pt=1,$t=document.body;function At(e,n){const o=document.createElement("div");if(o.id=n!==void 0?`q-portal--${n}--${Pt++}`:e,_e.globalNodes!==void 0){const t=_e.globalNodes.class;t!==void 0&&(o.className=t)}return $t.appendChild(o),o}function Lt(e){e.remove()}const W=[];function Bt(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return ee(e)}else if(e.__qPortal===!0){const o=ee(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(n),o):e}e=ee(e)}while(e!=null)}function Mt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Qt(e,n,o,t){const i=w(!1),r=w(!1);let a=null;const s={},u=t==="dialog"&&Mt(e);function d(g){if(g===!0){we(s),r.value=!0;return}r.value=!1,i.value===!1&&(u===!1&&a===null&&(a=At(!1,t)),i.value=!0,W.push(e.proxy),Et(s))}function f(g){if(r.value=!1,g!==!0)return;we(s),i.value=!1;const p=W.indexOf(e.proxy);p!==-1&&W.splice(p,1),a!==null&&(Lt(a),a=null)}return ct(()=>{f(!0)}),e.proxy.__qPortal=!0,dt(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:f,portalIsActive:i,portalIsAccessible:r,renderPortal:()=>u===!0?o():i.value===!0?[q(ft,{to:a},o())]:void 0}}const Ft={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ot(e,n=()=>{},o=()=>{}){return{transitionProps:_(()=>{const t=`q-transition--${e.transitionShow||n()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:_(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Wt(){let e;const n=V();function o(){e=void 0}return mt(o),D(o),{removeTick:o,registerTick(t){e=t,Be(()=>{e===t&&(_t(n)===!1&&e(),e=void 0)})}}}const S=[];let B;function jt(e){B=e.keyCode===27}function Dt(){B===!0&&(B=!1)}function zt(e){B===!0&&(B=!1,Le(e,27)===!0&&S[S.length-1](e))}function Oe(e){window[e]("keydown",jt),window[e]("blur",Dt),window[e]("keyup",zt),B=!1}function Nt(e){re.is.desktop===!0&&(S.push(e),S.length===1&&Oe("addEventListener"))}function Ce(e){const n=S.indexOf(e);n>-1&&(S.splice(n,1),S.length===0&&Oe("removeEventListener"))}const E=[];function We(e){E[E.length-1](e)}function Rt(e){re.is.desktop===!0&&(E.push(e),E.length===1&&document.body.addEventListener("focusin",We))}function Kt(e){const n=E.indexOf(e);n>-1&&(E.splice(n,1),E.length===0&&document.body.removeEventListener("focusin",We))}const{notPassiveCapture:N}=oe,H=[];function R(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=W.length-1;for(;o>=0;){const t=W[o].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=H.length-1;t>=0;t--){const i=H[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(n)===!1)&&(n===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(n)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function It(e){H.push(e),H.length===1&&(document.addEventListener("mousedown",R,N),document.addEventListener("touchstart",R,N))}function ke(e){const n=H.findIndex(o=>o===e);n>-1&&(H.splice(n,1),H.length===0&&(document.removeEventListener("mousedown",R,N),document.removeEventListener("touchstart",R,N)))}let qe,Se;function Ee(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Vt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const le={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{le[`${e}#ltr`]=e,le[`${e}#rtl`]=e});function He(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:le[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function Jt(e,n){let{top:o,left:t,right:i,bottom:r,width:a,height:s}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],r+=n[1],i+=n[0],a+=n[0],s+=n[1]),{top:o,bottom:r,height:s,left:t,right:i,width:a,middle:t+(i-t)/2,center:o+(r-o)/2}}function Yt(e,n,o){let{top:t,left:i}=e.getBoundingClientRect();return t+=n.top,i+=n.left,o!==void 0&&(t+=o[1],i+=o[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function Gt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Pe(e,n,o){return{top:e[o.anchorOrigin.vertical]-n[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-n[o.selfOrigin.horizontal]}}function Ut(e){if(re.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:u,offsetTop:d}=window.visualViewport;u!==qe&&(s.setProperty("--q-pe-left",u+"px"),qe=u),d!==Se&&(s.setProperty("--q-pe-top",d+"px"),Se=d)}const{scrollLeft:n,scrollTop:o}=e.el,t=e.absoluteOffset===void 0?Jt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Yt(e.anchorEl,e.absoluteOffset,e.offset);let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const r=Gt(e.el);let a=Pe(t,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)te(a,t,r,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:u}=a;te(a,t,r,e.anchorOrigin,e.selfOrigin);let d=!1;if(a.top!==s){d=!0;const f=2*e.offset[1];t.center=t.top-=f,t.bottom-=f+2}if(a.left!==u){d=!0;const f=2*e.offset[0];t.middle=t.left-=f,t.right-=f+2}d===!0&&(a=Pe(t,r,e),te(a,t,r,e.anchorOrigin,e.selfOrigin))}i={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(i.maxHeight=a.maxHeight+"px",t.height>a.maxHeight&&(i.minHeight=i.maxHeight)),a.maxWidth!==void 0&&(i.maxWidth=a.maxWidth+"px",t.width>a.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function te(e,n,o,t,i){const r=o.bottom,a=o.right,s=tt(),u=window.innerHeight-s,d=document.body.clientWidth;if(e.top<0||e.top+r>u)if(i.vertical==="center")e.top=n[t.vertical]>u/2?Math.max(0,u-r):0,e.maxHeight=Math.min(r,u);else if(n[t.vertical]>u/2){const f=Math.min(u,t.vertical==="center"?n.center:t.vertical===i.vertical?n.bottom:n.top);e.maxHeight=Math.min(r,f),e.top=Math.max(0,f-r)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===i.vertical?n.top:n.bottom),e.maxHeight=Math.min(r,u-e.top);if(e.left<0||e.left+a>d)if(e.maxWidth=Math.min(a,d),i.horizontal==="middle")e.left=n[t.horizontal]>d/2?Math.max(0,d-a):0;else if(n[t.horizontal]>d/2){const f=Math.min(d,t.horizontal==="middle"?n.middle:t.horizontal===i.horizontal?n.right:n.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===i.horizontal?n.left:n.right),e.maxWidth=Math.min(a,d-e.left)}var Xt=M({name:"QMenu",inheritAttrs:!1,props:{...kt,...nt,...$e,...Ft,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ee},self:{type:String,validator:Ee},offset:{type:Array,validator:Vt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ot,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let i=null,r,a,s;const u=V(),{proxy:d}=u,{$q:f}=d,g=w(null),p=w(!1),l=_(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=Ae(e,f),{registerTick:m,removeTick:b}=Wt(),{registerTimeout:T}=at(),{transitionProps:C,transitionStyle:je}=Ot(e),{localScrollTarget:ce,changeScrollEvent:De,unconfigureScrollTarget:ze}=St(e,pe),{anchorEl:P,canShow:Ne}=qt({showing:p}),{hide:de}=it({showing:p,canShow:Ne,handleShow:Je,handleHide:Ye,hideOnRouteChange:l,processOnMount:!0}),{showPortal:fe,hidePortal:me,renderPortal:Re}=Qt(u,g,Ue,"menu"),J={anchorEl:P,innerRef:g,onClickOutside(c){if(e.persistent!==!0&&p.value===!0)return de(c),(c.type==="touchstart"||c.target.classList.contains("q-dialog__backdrop"))&&vt(c),!0}},he=_(()=>He(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),Ke=_(()=>e.cover===!0?he.value:He(e.self||"top start",f.lang.rtl)),Ie=_(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),Ve=_(()=>e.autoClose===!0?{onClick:Ge}:{}),ve=_(()=>p.value===!0&&e.persistent!==!0);$(ve,c=>{c===!0?(Nt(G),It(J)):(Ce(G),ke(J))});function Y(){Ht(()=>{let c=g.value;c&&c.contains(document.activeElement)!==!0&&(c=c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function Je(c){if(i=e.noRefocus===!1?document.activeElement:null,Rt(xe),fe(),pe(),r=void 0,c!==void 0&&(e.touchPosition||e.contextMenu)){const U=ht(c);if(U.left!==void 0){const{top:Xe,left:Ze}=P.value.getBoundingClientRect();r={left:U.left-Ze,top:U.top-Xe}}}a===void 0&&(a=$(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,Q)),e.noFocus!==!0&&document.activeElement.blur(),m(()=>{Q(),e.noFocus!==!0&&Y()}),T(()=>{f.platform.is.ios===!0&&(s=e.autoClose,g.value.click()),Q(),fe(!0),o("show",c)},e.transitionDuration)}function Ye(c){b(),me(),ge(!0),i!==null&&(c===void 0||c.qClickOutside!==!0)&&(((c&&c.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),T(()=>{me(!0),o("hide",c)},e.transitionDuration)}function ge(c){r=void 0,a!==void 0&&(a(),a=void 0),(c===!0||p.value===!0)&&(Kt(xe),ze(),ke(J),Ce(G)),c!==!0&&(i=null)}function pe(){(P.value!==null||e.scrollTarget!==void 0)&&(ce.value=lt(P.value,e.scrollTarget),De(ce.value,Q))}function Ge(c){s!==!0?(Bt(d,c),o("click",c)):s=!1}function xe(c){ve.value===!0&&e.noFocus!==!0&&Tt(g.value,c.target)!==!0&&Y()}function G(c){o("escapeKey"),de(c)}function Q(){const c=g.value;c===null||P.value===null||Ut({el:c,offset:e.offset,anchorEl:P.value,anchorOrigin:he.value,selfOrigin:Ke.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ue(){return q(Me,C.value,()=>p.value===!0?q("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,t.class],style:[t.style,je.value],...Ve.value},I(n.default)):null)}return D(ge),Object.assign(d,{focus:Y,updatePosition:Q}),Re}}),K=M({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const o=_(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>q(e.tag,{class:o.value},I(n.default))}});const Zt=q("div",{class:"q-space"});var en=M({name:"QSpace",setup(){return()=>Zt}}),tn=M({name:"QCardActions",props:{...wt,vertical:Boolean},setup(e,{slots:n}){const o=Ct(e),t=_(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>q("div",{class:t.value},I(n.default))}}),nn=M({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:o}){let t=!1,i,r,a=null,s=null,u,d;function f(){i&&i(),i=null,t=!1,a!==null&&(clearTimeout(a),a=null),s!==null&&(clearTimeout(s),s=null),r!==void 0&&r.removeEventListener("transitionend",u),u=null}function g(m,b,T){b!==void 0&&(m.style.height=`${b}px`),m.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,t=!0,i=T}function p(m,b){m.style.overflowY=null,m.style.height=null,m.style.transition=null,f(),b!==d&&o(b)}function l(m,b){let T=0;r=m,t===!0?(f(),T=m.offsetHeight===m.scrollHeight?0:void 0):(d="hide",m.style.overflowY="hidden"),g(m,T,b),a=setTimeout(()=>{a=null,m.style.height=`${m.scrollHeight}px`,u=C=>{s=null,(Object(C)!==C||C.target===m)&&p(m,"show")},m.addEventListener("transitionend",u),s=setTimeout(u,e.duration*1.1)},100)}function x(m,b){let T;r=m,t===!0?f():(d="show",m.style.overflowY="hidden",T=m.scrollHeight),g(m,T,b),a=setTimeout(()=>{a=null,m.style.height=0,u=C=>{s=null,(Object(C)!==C||C.target===m)&&p(m,"hide")},m.addEventListener("transitionend",u),s=setTimeout(u,e.duration*1.1)},100)}return D(()=>{t===!0&&f()}),()=>q(Me,{css:!1,appear:e.appear,onEnter:l,onLeave:x},n.default)}});const on={props:{info:{type:Object,default(){return{titulo:"",descripcion:"",encargado:"",estado:"porHacer"}}}},setup(e){return{datosTarjeta:ae(e,"info"),expanded:w(!1)}},components:{}},an={class:"row items-center no-wrap"},ln={class:"col"},rn={class:"text-h6"},sn={class:"text-caption"},un={class:"col-auto"};function cn(e,n,o,t,i,r){return k(),A(ue,{class:"text-white bg-grey-9 my-card q-pa-sm"},{default:v(()=>[h(K,null,{default:v(()=>[y("div",an,[y("div",ln,[y("div",rn,L(t.datosTarjeta.titulo),1),y("div",sn,"A Cargo de "+L(t.datosTarjeta.encargado),1)]),y("div",un,[h(F,{color:"grey-7",round:"",flat:"",icon:"mdi-delete"})])])]),_:1}),h(ne,{dark:"",inset:""}),h(tn,null,{default:v(()=>[t.datosTarjeta.estado!=="porHacer"?(k(),A(F,{key:0,flat:"",color:"grey",title:"anterior",icon:"mdi-page-previous"})):ie("",!0),t.datosTarjeta.estado!=="terminada"?(k(),A(F,{key:1,flat:"",color:"grey",titale:"siguiente",icon:"mdi-page-next"})):ie("",!0),h(en),h(F,{color:"grey",round:"",flat:"",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:n[0]||(n[0]=a=>t.expanded=!t.expanded)},null,8,["icon"])]),_:1}),h(nn,null,{default:v(()=>[gt(y("div",null,[h(ne,{dark:""}),h(K,{class:"text-subitle2"},{default:v(()=>[z(L(t.datosTarjeta.descripcion),1)]),_:1})],512),[[pt,t.expanded]])]),_:1})]),_:1})}var dn=se(on,[["render",cn]]);const fn={props:{info:{type:Object},lista:{type:Array}},setup(e){const n=ae(e,"info"),o=ae(e,"lista");return{infoColumna:n,listaTareas:o}},components:{TarjetaComp:dn}},mn={class:"q-pa-sm"},hn={class:"row items-center no-wrap"},vn={class:"col"},gn={class:"text-overline text-grey-7"},pn={class:"text-subtitle2 text-caption"},xn={class:"col-auto"},yn={class:"q-gutter-md"};function bn(e,n,o,t,i,r){const a=Qe("TarjetaComp");return k(),Te("div",mn,[h(ue,{flat:"",bordered:"",class:"my-card"},{default:v(()=>[h(K,null,{default:v(()=>[y("div",hn,[y("div",vn,[y("div",gn,L(t.infoColumna.nombre),1),y("div",pn,L(t.listaTareas.length)+" "+L(t.listaTareas.length===1?"tarea":"tareas"),1)]),y("div",xn,[t.infoColumna.tipo==="porHacer"?(k(),A(F,{key:0,color:"grey-7",round:"",flat:"",icon:"mdi-plus"},{default:v(()=>[h(Xt,{cover:"","auto-close":""},{default:v(()=>[h(rt,null,{default:v(()=>[h(X,{clickable:""},{default:v(()=>[h(Z,null,{default:v(()=>[z("Remove Card")]),_:1})]),_:1}),h(X,{clickable:""},{default:v(()=>[h(Z,null,{default:v(()=>[z("Send Feedback")]),_:1})]),_:1}),h(X,{clickable:""},{default:v(()=>[h(Z,null,{default:v(()=>[z("Share")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):ie("",!0)])])]),_:1}),h(ne),h(K,{class:""},{default:v(()=>[y("div",yn,[(k(!0),Te(xt,null,yt(t.listaTareas,(s,u)=>(k(),A(a,{key:u,info:s},null,8,["info"]))),128))])]),_:1})]),_:1})])}var _n=se(fn,[["render",bn]]);const Tn={setup(){const e=w([{titulo:"Tarea 3",descripcion:"Analisis de informacion",encargado:"Juan",estado:"porHacer"},{titulo:"Tarea 4",descripcion:"Analisis de informacion",encargado:"Juan",estado:"porHacer"},{titulo:"Tarea 5",descripcion:"Analisis de informacion",encargado:"Juan",estado:"porHacer"},{titulo:"Tarea 6",descripcion:"Analisis de informacion",encargado:"Juan",estado:"porHacer"}]),n=w([{titulo:"Tarea 2",descripcion:"Analisis de informacion",encargado:"Juan",estado:"enProgreso"}]),o=w([{titulo:"Tarea 1",descripcion:"Analisis de informacion",encargado:"Juan",estado:"terminada"}]);return{tareasPorHacer:e,tareasEnProgreso:n,tareasTerminadas:o}},components:{ColumnaTareas:_n}};function wn(e,n,o,t,i,r){const a=Qe("ColumnaTareas");return k(),A(bt,{padding:""},{default:v(()=>[h(ue,{flat:"",class:"row my-card q-pa-sm"},{default:v(()=>[h(a,{class:"col-12 col-sm-4",info:{nombre:"Por Hacer",tipo:"porHacer"},lista:t.tareasPorHacer},null,8,["lista"]),h(a,{class:"col-12 col-sm-4",info:{nombre:"En progreso",tipo:"enProgreso"},lista:t.tareasEnProgreso},null,8,["lista"]),h(a,{class:"col-12 col-sm-4",info:{nombre:"Terminado",tipo:"terminado"},lista:t.tareasTerminadas},null,8,["lista"])]),_:1})]),_:1})}var Hn=se(Tn,[["render",wn]]);export{Hn as default};
