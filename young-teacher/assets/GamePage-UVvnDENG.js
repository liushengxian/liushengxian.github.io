import{A as e,B as t,C as n,D as r,E as i,G as a,H as o,I as s,J as c,K as l,L as u,M as d,N as f,O as p,P as m,R as h,U as g,_,a as v,b as y,c as b,d as x,f as S,g as C,h as w,i as T,j as ee,l as E,m as D,n as te,o as O,p as k,q as A,r as j,s as ne,u as re,v as M,w as ie,x as N,y as ae,z as P}from"./index-DDbOjlxV.js";import{$ as oe,B as F,C as se,Ct as ce,D as le,F as ue,G as de,J as fe,K as pe,L as me,M as I,O as he,P as ge,Q as L,R as _e,St as ve,T as R,U as z,V as ye,W as be,Y as xe,Z as Se,_t as B,a as V,at as H,bt as Ce,c as we,ct as Te,d as Ee,dt as De,et as U,ft as Oe,g as ke,gt as W,h as Ae,ht as G,i as je,it as K,k as Me,l as Ne,lt as Pe,m as Fe,mt as q,n as J,nt as Ie,o as Y,ot as Le,p as Re,pt as ze,q as X,r as Be,rt as Ve,s as He,st as Ue,t as We,tt as Ge,u as Z,ut as Ke,v as qe,vt as Je,w as Ye,xt as Xe,y as Ze,yt as Q,z as Qe}from"./useGameState-BEhCyCv8.js";import{n as $e,t as et}from"./use-merged-state-BoFWsfEL.js";import{a as tt,i as nt,n as rt,r as it,t as at}from"./Progress-DT_gJawr.js";import{t as $}from"./Tag-DtWShm4K.js";import{n as ot,t as st}from"./ListItem-BcQJR6RD.js";var ct=[],lt=new WeakMap;function ut(){ct.forEach(e=>e(...lt.get(e))),ct=[]}function dt(e,...t){lt.set(e,t),!ct.includes(e)&&ct.push(e)===1&&requestAnimationFrame(ut)}function ft(e){let t=g(!!e.value);if(t.value)return o(t);let n=s(e,e=>{e&&(t.value=!0,n())});return o(t)}function pt(){return ae()!==null}var mt=typeof window<`u`,ht=mt?document?.fonts?.ready:void 0,gt=!1;ht===void 0?gt=!0:ht.then(()=>{gt=!0});function _t(t){if(gt)return;let n=!1;e(()=>{gt||ht?.then(()=>{n||t()})}),r(()=>{n=!0})}var vt=g(null);function yt(e){if(e.clientX>0||e.clientY>0)vt.value={x:e.clientX,y:e.clientY};else{let{target:t}=e;if(t instanceof Element){let{left:e,top:n,width:r,height:i}=t.getBoundingClientRect();e>0||n>0?vt.value={x:e+r/2,y:n+i/2}:vt.value={x:0,y:0}}else vt.value=null}}var bt=0,xt=!0;function St(){if(!mt)return o(g(null));bt===0&&H(`click`,document,yt,!0);let e=()=>{bt+=1};return(xt&&=pt())?(i(e),r(()=>{--bt,bt===0&&K(`click`,document,yt,!0)})):e(),o(vt)}var Ct=g(void 0),wt=0;function Tt(){Ct.value=Date.now()}var Et=!0;function Dt(e){if(!mt)return o(g(!1));let t=g(!1),n=null;function a(){n!==null&&window.clearTimeout(n)}function s(){a(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}wt===0&&H(`click`,window,Tt,!0);let c=()=>{wt+=1,H(`click`,window,s,!0)};return(Et&&=pt())?(i(c),r(()=>{--wt,wt===0&&K(`click`,window,Tt,!0),K(`click`,window,s,!0),a()})):c(),o(t)}var Ot={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function kt(e){return`(min-width: ${e}px)`}var At={};function jt(e=Ot){if(!mt||typeof window.matchMedia!=`function`)return x(()=>[]);let t=g({}),n=Object.keys(e),i=(e,n)=>{e.matches?t.value[n]=!0:t.value[n]=!1};return n.forEach(t=>{let n=e[t],r,a;At[n]===void 0?(r=window.matchMedia(kt(n)),r.addEventListener?r.addEventListener(`change`,e=>{a.forEach(n=>{n(e,t)})}):r.addListener&&r.addListener(e=>{a.forEach(n=>{n(e,t)})}),a=new Set,At[n]={mql:r,cbs:a}):(r=At[n].mql,a=At[n].cbs),a.add(i),r.matches&&a.forEach(e=>{e(r,t)})}),r(()=>{n.forEach(t=>{let{cbs:n}=At[e[t]];n.has(i)&&n.delete(i)})}),x(()=>{let{value:e}=t;return n.filter(t=>e[t])})}U(`n-internal-select-menu`);var Mt=U(`n-internal-select-menu-body`),Nt=U(`n-drawer-body`);U(`n-drawer`);var Pt=U(`n-modal-body`),Ft=U(`n-modal-provider`),It=U(`n-modal`),Lt=U(`n-popover-body`),Rt=`__disabled__`;function zt(t){let n=N(Pt,null),i=N(Nt,null),a=N(Lt,null),o=N(Mt,null),s=g();if(typeof document<`u`){s.value=document.fullscreenElement;let t=()=>{s.value=document.fullscreenElement};e(()=>{H(`fullscreenchange`,document,t)}),r(()=>{K(`fullscreenchange`,document,t)})}return Ve(()=>{let{to:e}=t;return e===void 0?n?.value?n.value.$el??n.value:i?.value?i.value:a?.value?a.value:o?.value?o.value:e??(s.value||`body`):e===!1?Rt:e===!0?s.value||`body`:e})}zt.tdkey=Rt,zt.propTo={type:[String,Object,Boolean],default:void 0};var Bt=g(!1);function Vt(){Bt.value=!0}function Ht(){Bt.value=!1}var Ut=0;function Wt(){return oe&&(i(()=>{Ut||(window.addEventListener(`compositionstart`,Vt),window.addEventListener(`compositionend`,Ht)),Ut++}),r(()=>{Ut<=1?(window.removeEventListener(`compositionstart`,Vt),window.removeEventListener(`compositionend`,Ht),Ut=0):Ut--})),Bt}var Gt=0,Kt=``,qt=``,Jt=``,Yt=``,Xt=g(`0px`);function Zt(t){if(typeof document>`u`)return;let n=document.documentElement,i,a=!1,o=()=>{n.style.marginRight=Kt,n.style.overflow=qt,n.style.overflowX=Jt,n.style.overflowY=Yt,Xt.value=`0px`};e(()=>{i=s(t,e=>{if(e){if(!Gt){let e=window.innerWidth-n.offsetWidth;e>0&&(Kt=n.style.marginRight,n.style.marginRight=`${e}px`,Xt.value=`${e}px`),qt=n.style.overflow,Jt=n.style.overflowX,Yt=n.style.overflowY,n.style.overflow=`hidden`,n.style.overflowX=`hidden`,n.style.overflowY=`hidden`}a=!0,Gt++}else Gt--,Gt||o(),a=!1},{immediate:!0})}),r(()=>{i?.(),a&&=(Gt--,Gt||o(),!1)})}function Qt(e,t,n=`default`){let r=t[n];if(r===void 0)throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);return r()}function $t(e,t=!0,n=[]){return e.forEach(e=>{if(e!==null){if(typeof e!=`object`){(typeof e==`string`||typeof e==`number`)&&n.push(C(String(e)));return}if(Array.isArray(e)){$t(e,t,n);return}if(e.type===b){if(e.children===null)return;Array.isArray(e.children)&&$t(e.children,t,n)}else e.type!==ne&&n.push(e)}}),n}function en(e,t,n=`default`){let r=t[n];if(r===void 0)throw Error(`[vueuc/${e}]: slot[${n}] is empty.`);let i=$t(r());if(i.length===1)return i[0];throw Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}var tn=null;function nn(){if(tn===null&&(tn=document.getElementById(`v-binder-view-measurer`),tn===null)){tn=document.createElement(`div`),tn.id=`v-binder-view-measurer`;let{style:e}=tn;e.position=`fixed`,e.left=`0`,e.right=`0`,e.top=`0`,e.bottom=`0`,e.pointerEvents=`none`,e.visibility=`hidden`,document.body.appendChild(tn)}return tn.getBoundingClientRect()}function rn(e,t){let n=nn();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function an(e){let t=e.getBoundingClientRect(),n=nn();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function on(e){return e.nodeType===9?null:e.parentNode}function sn(e){if(e===null)return null;let t=on(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){let{overflow:e,overflowX:n,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(e+r+n))return t}return sn(t)}var cn=M({name:`Binder`,props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){f(`VBinder`,ae()?.proxy);let t=N(`VBinder`,null),n=g(null),i=r=>{n.value=r,t&&e.syncTargetWithParent&&t.setTargetRef(r)},a=[],o=()=>{let e=n.value;for(;e=sn(e),e!==null;)a.push(e);for(let e of a)H(`scroll`,e,d,!0)},s=()=>{for(let e of a)K(`scroll`,e,d,!0);a=[]},c=new Set,l=e=>{c.size===0&&o(),c.has(e)||c.add(e)},u=e=>{c.has(e)&&c.delete(e),c.size===0&&s()},d=()=>{dt(p)},p=()=>{c.forEach(e=>e())},m=new Set,h=e=>{m.size===0&&H(`resize`,window,v),m.has(e)||m.add(e)},_=e=>{m.has(e)&&m.delete(e),m.size===0&&K(`resize`,window,v)},v=()=>{m.forEach(e=>e())};return r(()=>{K(`resize`,window,v),s()}),{targetRef:n,setTargetRef:i,addScrollListener:l,removeScrollListener:u,addResizeListener:h,removeResizeListener:_}},render(){return Qt(`binder`,this.$slots)}}),ln=M({name:`Target`,setup(){let{setTargetRef:e,syncTarget:t}=N(`VBinder`);return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){let{syncTarget:e,setTargetDirective:t}=this;return e?P(en(`follower`,this.$slots),[[t]]):en(`follower`,this.$slots)}}),un=`@@coContext`,dn={mounted(e,{value:t,modifiers:n}){e[un]={handler:void 0},typeof t==`function`&&(e[un].handler=t,H(`clickoutside`,e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){let r=e[un];typeof t==`function`?r.handler?r.handler!==t&&(K(`clickoutside`,e,r.handler,{capture:n.capture}),r.handler=t,H(`clickoutside`,e,t,{capture:n.capture})):(e[un].handler=t,H(`clickoutside`,e,t,{capture:n.capture})):r.handler&&=(K(`clickoutside`,e,r.handler,{capture:n.capture}),void 0)},unmounted(e,{modifiers:t}){let{handler:n}=e[un];n&&K(`clickoutside`,e,n,{capture:t.capture}),e[un].handler=void 0}};function fn(e,t){console.error(`[vdirs/${e}]: ${t}`)}var pn=new class{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){let{elementZIndex:n}=this;if(t!==void 0){e.style.zIndex=`${t}`,n.delete(e);return}let{nextZIndex:r}=this;n.has(e)&&n.get(e)+1===this.nextZIndex||(e.style.zIndex=`${r}`,n.set(e,r),this.nextZIndex=r+1,this.squashState())}unregister(e,t){let{elementZIndex:n}=this;n.has(e)?n.delete(e):t===void 0&&fn(`z-index-manager/unregister-element`,`Element not found when unregistering.`),this.squashState()}squashState(){let{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){let e=Array.from(this.elementZIndex.entries());e.sort((e,t)=>e[1]-t[1]),this.nextZIndex=2e3,e.forEach(e=>{let t=e[0],n=this.nextZIndex++;`${n}`!==t.style.zIndex&&(t.style.zIndex=`${n}`)})}},mn=`@@ziContext`,hn={mounted(e,t){let{value:n={}}=t,{zIndex:r,enabled:i}=n;e[mn]={enabled:!!i,initialized:!1},i&&(pn.ensureZIndex(e,r),e[mn].initialized=!0)},updated(e,t){let{value:n={}}=t,{zIndex:r,enabled:i}=n,a=e[mn].enabled;i&&!a&&(pn.ensureZIndex(e,r),e[mn].initialized=!0),e[mn].enabled=!!i},unmounted(e,t){if(!e[mn].initialized)return;let{value:n={}}=t,{zIndex:r}=n;pn.unregister(e,r)}},{c:gn}=ve(),_n=`vueuc-style`;function vn(e){return typeof e==`string`?document.querySelector(e):e()||null}var yn=M({name:`LazyTeleport`,props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:ft(a(e,`show`)),mergedTo:x(()=>{let{to:t}=e;return t??`body`})}},render(){return this.showTeleport?this.disabled?Qt(`lazy-teleport`,this.$slots):y(E,{disabled:this.disabled,to:this.mergedTo},Qt(`lazy-teleport`,this.$slots)):null}}),bn={top:`bottom`,bottom:`top`,left:`right`,right:`left`},xn={start:`end`,center:`center`,end:`start`},Sn={top:`height`,bottom:`height`,left:`width`,right:`width`},Cn={"bottom-start":`top left`,bottom:`top center`,"bottom-end":`top right`,"top-start":`bottom left`,top:`bottom center`,"top-end":`bottom right`,"right-start":`top left`,right:`center left`,"right-end":`bottom left`,"left-start":`top right`,left:`center right`,"left-end":`bottom right`},wn={"bottom-start":`bottom left`,bottom:`bottom center`,"bottom-end":`bottom right`,"top-start":`top left`,top:`top center`,"top-end":`top right`,"right-start":`top right`,right:`center right`,"right-end":`bottom right`,"left-start":`top left`,left:`center left`,"left-end":`bottom left`},Tn={"bottom-start":`right`,"bottom-end":`left`,"top-start":`right`,"top-end":`left`,"right-start":`bottom`,"right-end":`top`,"left-start":`bottom`,"left-end":`top`},En={top:!0,bottom:!1,left:!0,right:!1},Dn={top:`end`,bottom:`start`,left:`end`,right:`start`};function On(e,t,n,r,i,a){if(!i||a)return{placement:e,top:0,left:0};let[o,s]=e.split(`-`),c=s??`center`,l={top:0,left:0},u=(e,i,a)=>{let o=0,s=0,c=n[e]-t[i]-t[e];return c>0&&r&&(a?s=En[i]?c:-c:o=En[i]?c:-c),{left:o,top:s}},d=o===`left`||o===`right`;if(c!==`center`){let r=Tn[e],i=bn[r],a=Sn[r];if(n[a]>t[a]){if(t[r]+t[a]<n[a]){let e=(n[a]-t[a])/2;t[r]<e||t[i]<e?t[r]<t[i]?(c=xn[s],l=u(a,i,d)):l=u(a,r,d):c=`center`}}else n[a]<t[a]&&t[i]<0&&t[r]>t[i]&&(c=xn[s])}else{let e=o===`bottom`||o===`top`?`left`:`top`,r=bn[e],i=Sn[e],a=(n[i]-t[i])/2;(t[e]<a||t[r]<a)&&(t[e]>t[r]?(c=Dn[e],l=u(i,e,d)):(c=Dn[r],l=u(i,r,d)))}let f=o;return t[o]<n[Sn[o]]&&t[o]<t[bn[o]]&&(f=bn[o]),{placement:c===`center`?f:`${f}-${c}`,left:l.left,top:l.top}}function kn(e,t){return t?wn[e]:Cn[e]}function An(e,t,n,r,i,a){if(a)switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`top-end`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%)`};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:``};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:`translateX(-100%) translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:`translateY(-50%)`};default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:`translateX(-50%) translateY(-100%)`}}switch(e){case`bottom-start`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:``};case`bottom-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%)`};case`top-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-100%)`};case`top-end`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`right-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:``};case`right-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-100%)`};case`left-start`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%)`};case`left-end`:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateX(-100%) translateY(-100%)`};case`top`:return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateY(-100%) translateX(-50%)`};case`right`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:`translateY(-50%)`};case`left`:return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:`translateY(-50%) translateX(-100%)`};default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:`translateX(-50%)`}}}var jn=gn([gn(`.v-binder-follower-container`,{position:`absolute`,left:`0`,right:`0`,top:`0`,height:`0`,pointerEvents:`none`,zIndex:`auto`}),gn(`.v-binder-follower-content`,{position:`absolute`,zIndex:`auto`},[gn(`> *`,{pointerEvents:`all`})])]),Mn=M({name:`Follower`,inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:`bottom`},syncTrigger:{type:Array,default:[`resize`,`scroll`]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(t){let n=N(`VBinder`),i=Ve(()=>t.enabled===void 0?t.show:t.enabled),o=g(null),c=g(null),l=()=>{let{syncTrigger:e}=t;e.includes(`scroll`)&&n.addScrollListener(f),e.includes(`resize`)&&n.addResizeListener(f)},u=()=>{n.removeScrollListener(f),n.removeResizeListener(f)};e(()=>{i.value&&(f(),l())});let d=L();jn.mount({id:`vueuc/binder`,head:!0,anchorMetaName:_n,ssr:d}),r(()=>{u()}),_t(()=>{i.value&&f()});let f=()=>{if(!i.value)return;let e=o.value;if(e===null)return;let r=n.targetRef,{x:a,y:s,overlap:l}=t,u=a!==void 0&&s!==void 0?rn(a,s):an(r);e.style.setProperty(`--v-target-width`,`${Math.round(u.width)}px`),e.style.setProperty(`--v-target-height`,`${Math.round(u.height)}px`);let{width:d,minWidth:f,placement:p,internalShift:m,flip:h}=t;e.setAttribute(`v-placement`,p),l?e.setAttribute(`v-overlap`,``):e.removeAttribute(`v-overlap`);let{style:g}=e;d===`target`?g.width=`${u.width}px`:d===void 0?g.width=``:g.width=d,f===`target`?g.minWidth=`${u.width}px`:f===void 0?g.minWidth=``:g.minWidth=f;let _=an(e),v=an(c.value),{left:y,top:b,placement:x}=On(p,u,_,m,h,l),S=kn(x,l),{left:C,top:w,transform:T}=An(x,v,u,b,y,l);e.setAttribute(`v-placement`,x),e.style.setProperty(`--v-offset-left`,`${Math.round(y)}px`),e.style.setProperty(`--v-offset-top`,`${Math.round(b)}px`),e.style.transform=`translateX(${C}) translateY(${w}) ${T}`,e.style.setProperty(`--v-transform-origin`,S),e.style.transformOrigin=S};s(i,e=>{e?(l(),p()):u()});let p=()=>{ie().then(f).catch(e=>console.error(e))};[`placement`,`x`,`y`,`internalShift`,`flip`,`width`,`overlap`,`minWidth`].forEach(e=>{s(a(t,e),f)}),[`teleportDisabled`].forEach(e=>{s(a(t,e),p)}),s(a(t,`syncTrigger`),e=>{e.includes(`resize`)?n.addResizeListener(f):n.removeResizeListener(f),e.includes(`scroll`)?n.addScrollListener(f):n.removeScrollListener(f)});let m=Ie();return{VBinder:n,mergedEnabled:i,offsetContainerRef:c,followerRef:o,mergedTo:Ve(()=>{let{to:e}=t;if(e!==void 0)return e;m.value}),syncPosition:f}},render(){return y(yn,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e;let t=y(`div`,{class:[`v-binder-follower-container`,this.containerClass],ref:`offsetContainerRef`},[y(`div`,{class:`v-binder-follower-content`,ref:`followerRef`},(e=this.$slots).default?.call(e))]);return this.zindexable?P(t,[[hn,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}}),Nn=gn(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[gn(`&::-webkit-scrollbar`,{width:0,height:0})]),Pn=M({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=g(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=L();return Nn.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:_n,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return y(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}});function Fn(e){return e instanceof HTMLElement}function In(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(Fn(n)&&(Rn(n)||In(n)))return!0}return!1}function Ln(e){for(let t=e.childNodes.length-1;t>=0;t--){let n=e.childNodes[t];if(Fn(n)&&(Rn(n)||Ln(n)))return!0}return!1}function Rn(e){if(!zn(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function zn(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute(`tabIndex`)!==null)return!0;if(e.getAttribute(`disabled`))return!1;switch(e.nodeName){case`A`:return!!e.href&&e.rel!==`ignore`;case`INPUT`:return e.type!==`hidden`&&e.type!==`file`;case`SELECT`:case`TEXTAREA`:return!0;default:return!1}}var Bn=[],Vn=M({name:`FocusTrap`,props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:[String,Function],finalFocusTo:[String,Function],returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(t){let n=$e(),i=g(null),a=g(null),o=!1,c=!1,l=typeof document>`u`?null:document.activeElement;function u(){return Bn[Bn.length-1]===n}function d(e){var n;e.code===`Escape`&&u()&&((n=t.onEsc)==null||n.call(t,e))}e(()=>{s(()=>t.active,e=>{e?(m(),H(`keydown`,document,d)):(K(`keydown`,document,d),o&&h())},{immediate:!0})}),r(()=>{K(`keydown`,document,d),o&&h()});function f(e){if(!c&&u()){let t=p();if(t===null||t.contains(Oe(e)))return;_(`first`)}}function p(){let e=i.value;if(e===null)return null;let t=e;for(;t=t.nextSibling,!(t===null||t instanceof Element&&t.tagName===`DIV`););return t}function m(){var e;if(!t.disabled){if(Bn.push(n),t.autoFocus){let{initialFocusTo:n}=t;n===void 0?_(`first`):(e=vn(n))==null||e.focus({preventScroll:!0})}o=!0,document.addEventListener(`focus`,f,!0)}}function h(){var e;if(t.disabled||(document.removeEventListener(`focus`,f,!0),Bn=Bn.filter(e=>e!==n),u()))return;let{finalFocusTo:r}=t;r===void 0?t.returnFocusOnDeactivated&&l instanceof HTMLElement&&(c=!0,l.focus({preventScroll:!0}),c=!1):(e=vn(r))==null||e.focus({preventScroll:!0})}function _(e){if(u()&&t.active){let t=i.value,n=a.value;if(t!==null&&n!==null){let r=p();if(r==null||r===n){c=!0,t.focus({preventScroll:!0}),c=!1;return}c=!0;let i=e===`first`?In(r):Ln(r);c=!1,i||(c=!0,t.focus({preventScroll:!0}),c=!1)}}}function v(e){if(c)return;let t=p();t!==null&&(e.relatedTarget!==null&&t.contains(e.relatedTarget)?_(`last`):_(`first`))}function y(e){c||(e.relatedTarget!==null&&e.relatedTarget===i.value?_(`last`):_(`first`))}return{focusableStartRef:i,focusableEndRef:a,focusableStyle:`position: absolute; height: 0; width: 0;`,handleStartFocus:v,handleEndFocus:y}},render(){let{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();let{active:t,focusableStyle:n}=this;return y(b,null,[y(`div`,{"aria-hidden":`true`,tabindex:t?`0`:`-1`,ref:`focusableStartRef`,style:n,onFocus:this.handleStartFocus}),e(),y(`div`,{"aria-hidden":`true`,style:n,ref:`focusableEndRef`,tabindex:t?`0`:`-1`,onFocus:this.handleEndFocus})])}}),Hn=new WeakSet;function Un(e){return!Hn.has(e)}function Wn(e,t,n){if(!t)return null;let r=pe(t(n));return r.length===1?r[0]:(xe(`getFirstSlotVNode`,`slot[${e}] should have exactly one child`),null)}function Gn(e){let t=e.dirs?.find(({dir:e})=>e===O);return!!(t&&t.value===!1)}function Kn(e,t=[],n){let r={};return t.forEach(t=>{r[t]=e[t]}),Object.assign(r,n)}function qn(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}function Jn(e,...t){return typeof e==`function`?e(...t):typeof e==`string`?C(e):typeof e==`number`?C(String(e)):null}var Yn=/\s/;function Xn(e){for(var t=e.length;t--&&Yn.test(e.charAt(t)););return t}var Zn=/^\s+/;function Qn(e){return e&&e.slice(0,Xn(e)+1).replace(Zn,``)}var $n=NaN,er=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,nr=/^0o[0-7]+$/i,rr=parseInt;function ir(e){if(typeof e==`number`)return e;if(ge(e))return $n;if(I(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=I(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Qn(e);var n=tr.test(e);return n||nr.test(e)?rr(e.slice(2),n?2:8):er.test(e)?$n:+e}var ar=function(){return ue.Date.now()},or=`Expected a function`,sr=Math.max,cr=Math.min;function lr(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(or);t=ir(t)||0,I(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?sr(ir(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?cr(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=ar();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(ar())}function x(){var e=ar(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var ur=`Expected a function`;function dr(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ur);return I(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),lr(e,t,{leading:r,maxWait:t,trailing:i})}var fr=M({name:`Add`,render(){return y(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},y(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`}))}}),{cubicBezierEaseIn:pr,cubicBezierEaseOut:mr}=le;function hr({transformOrigin:e=`inherit`,duration:t=`.2s`,enterScale:n=`.9`,originalTransform:r=``,originalTransition:i=``}={}){return[q(`&.fade-in-scale-up-transition-leave-active`,{transformOrigin:e,transition:`opacity ${t} ${pr}, transform ${t} ${pr} ${i&&`,${i}`}`}),q(`&.fade-in-scale-up-transition-enter-active`,{transformOrigin:e,transition:`opacity ${t} ${mr}, transform ${t} ${mr} ${i&&`,${i}`}`}),q(`&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to`,{opacity:0,transform:`${r} scale(${n})`}),q(`&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to`,{opacity:1,transform:`${r} scale(1)`})]}var gr={iconMargin:`11px 8px 0 12px`,iconMarginRtl:`11px 12px 0 8px`,iconSize:`24px`,closeIconSize:`16px`,closeSize:`20px`,closeMargin:`13px 14px 0 0`,closeMarginRtl:`13px 0 0 14px`,padding:`13px`};function _r(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColor:m,successColor:h,warningColor:g,errorColor:_,fontSize:v}=e;return Object.assign(Object.assign({},gr),{fontSize:v,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${Ue(i,Le(m,{alpha:.25}))}`,colorInfo:Ue(i,Le(m,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:m,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${Ue(i,Le(h,{alpha:.25}))}`,colorSuccess:Ue(i,Le(h,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:h,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${Ue(i,Le(g,{alpha:.33}))}`,colorWarning:Ue(i,Le(g,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:g,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${Ue(i,Le(_,{alpha:.25}))}`,colorError:Ue(i,Le(_,{alpha:.08})),titleTextColorError:s,iconColorError:_,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p})}var vr={name:`Alert`,common:Ae,self:_r},{cubicBezierEaseInOut:yr,cubicBezierEaseOut:br,cubicBezierEaseIn:xr}=le;function Sr({overflow:e=`hidden`,duration:t=`.3s`,originalTransition:n=``,leavingDelay:r=`0s`,foldPadding:i=!1,enterToProps:a=void 0,leaveToProps:o=void 0,reverse:s=!1}={}){let c=s?`leave`:`enter`,l=s?`enter`:`leave`;return[q(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,Object.assign(Object.assign({},a),{opacity:1})),q(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,Object.assign(Object.assign({},o),{opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:i?`0 !important`:void 0,paddingBottom:i?`0 !important`:void 0})),q(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${yr} ${r},
 opacity ${t} ${br} ${r},
 margin-top ${t} ${yr} ${r},
 margin-bottom ${t} ${yr} ${r},
 padding-top ${t} ${yr} ${r},
 padding-bottom ${t} ${yr} ${r}
 ${n?`,${n}`:``}
 `),q(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${yr},
 opacity ${t} ${xr},
 margin-top ${t} ${yr},
 margin-bottom ${t} ${yr},
 padding-top ${t} ${yr},
 padding-bottom ${t} ${yr}
 ${n?`,${n}`:``}
 `)]}var Cr=G(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[W(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),B(`closable`,[G(`alert-body`,[W(`title`,`
 padding-right: 24px;
 `)])]),W(`icon`,{color:`var(--n-icon-color)`}),G(`alert-body`,{padding:`var(--n-padding)`},[W(`title`,{color:`var(--n-title-text-color)`}),W(`content`,{color:`var(--n-content-text-color)`})]),Sr({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),W(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),W(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),B(`show-icon`,[G(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),B(`right-adjust`,[G(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),G(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[W(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[q(`& +`,[W(`content`,{marginTop:`9px`})])]),W(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),W(`icon`,{transition:`color .3s var(--n-bezier)`})]),wr=M({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},R.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Qe(e),a=R(`Alert`,`-alert`,Cr,vr,e,t),o=he(`Alert`,i,t),s=x(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value,{fontSize:r,borderRadius:i,titleFontWeight:o,lineHeight:s,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:m,closeMarginRtl:h,padding:g}=n,{type:_}=e,{left:v,right:y}=Pe(l);return{"--n-bezier":t,"--n-color":n[Q(`color`,_)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[Q(`closeColorHover`,_)],"--n-close-color-pressed":n[Q(`closeColorPressed`,_)],"--n-close-icon-color":n[Q(`closeIconColor`,_)],"--n-close-icon-color-hover":n[Q(`closeIconColorHover`,_)],"--n-close-icon-color-pressed":n[Q(`closeIconColorPressed`,_)],"--n-icon-color":n[Q(`iconColor`,_)],"--n-border":n[Q(`border`,_)],"--n-title-text-color":n[Q(`titleTextColor`,_)],"--n-content-text-color":n[Q(`contentTextColor`,_)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":m,"--n-close-margin-rtl":h,"--n-padding":g,"--n-icon-margin-left":v,"--n-icon-margin-right":y}}),c=r?_e(`alert`,x(()=>e.type[0]),s,e):void 0,l=g(!0),u=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:o,mergedClsPrefix:t,mergedBordered:n,visible:l,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(l.value=!1)})},handleAfterLeave:()=>{u()},mergedTheme:a,cssVars:r?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),y(qe,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,r={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?y(`div`,Object.assign({},n(this.$attrs,r)),this.closable&&y(Ze,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&y(`div`,{class:`${e}-alert__border`}),this.showIcon&&y(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},ye(t.icon,()=>[y(se,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return y(it,null);case`info`:return y(nt,null);case`warning`:return y(rt,null);case`error`:return y(tt,null);default:return null}}})])),y(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},z(t.header,t=>{let n=t||this.title;return n?y(`div`,{class:`${e}-alert-body__title`},n):null}),t.default&&y(`div`,{class:`${e}-alert-body__content`},t))):null}})}}),Tr=M({name:`ConfigProvider`,alias:[`App`],props:{abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:`div`},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(xe(`config-provider`,"`as` is deprecated, please use `tag` instead."),!0),default:void 0}},setup(e){let n=N(F,null),r=x(()=>{let{theme:t}=e;if(t===null)return;let r=n?.mergedThemeRef.value;return t===void 0?r:r===void 0?t:Object.assign({},r,t)}),i=x(()=>{let{themeOverrides:t}=e;if(t!==null){if(t===void 0)return n?.mergedThemeOverridesRef.value;{let e=n?.mergedThemeOverridesRef.value;return e===void 0?t:Me({},e,t)}}}),a=Ve(()=>{let{namespace:t}=e;return t===void 0?n?.mergedNamespaceRef.value:t}),o=Ve(()=>{let{bordered:t}=e;return t===void 0?n?.mergedBorderedRef.value:t}),s=x(()=>{let{icons:t}=e;return t===void 0?n?.mergedIconsRef.value:t}),c=x(()=>{let{componentOptions:t}=e;return t===void 0?n?.mergedComponentPropsRef.value:t}),l=x(()=>{let{clsPrefix:t}=e;return t===void 0?n?n.mergedClsPrefixRef.value:`n`:t}),u=x(()=>{var r;let{rtl:i}=e;if(i===void 0)return n?.mergedRtlRef.value;let a={};for(let e of i)a[e.name]=t(e),(r=e.peers)==null||r.forEach(e=>{e.name in a||(a[e.name]=t(e))});return a}),d=x(()=>e.breakpoints||n?.mergedBreakpointsRef.value),p=e.inlineThemeDisabled||n?.inlineThemeDisabled,m=e.preflightStyleDisabled||n?.preflightStyleDisabled,h=e.styleMountTarget||n?.styleMountTarget;return f(F,{mergedThemeHashRef:x(()=>{let{value:e}=r,{value:t}=i,n=t&&Object.keys(t).length!==0,a=e?.name;return a?n?`${a}-${ce(JSON.stringify(i.value))}`:a:n?ce(JSON.stringify(i.value)):``}),mergedBreakpointsRef:d,mergedRtlRef:u,mergedIconsRef:s,mergedComponentPropsRef:c,mergedBorderedRef:o,mergedNamespaceRef:a,mergedClsPrefixRef:l,mergedLocaleRef:x(()=>{let{locale:t}=e;if(t!==null)return t===void 0?n?.mergedLocaleRef.value:t}),mergedDateLocaleRef:x(()=>{let{dateLocale:t}=e;if(t!==null)return t===void 0?n?.mergedDateLocaleRef.value:t}),mergedHljsRef:x(()=>{let{hljs:t}=e;return t===void 0?n?.mergedHljsRef.value:t}),mergedKatexRef:x(()=>{let{katex:t}=e;return t===void 0?n?.mergedKatexRef.value:t}),mergedThemeRef:r,mergedThemeOverridesRef:i,inlineThemeDisabled:p||!1,preflightStyleDisabled:m||!1,styleMountTarget:h}),{mergedClsPrefix:l,mergedBordered:o,mergedNamespace:a,mergedTheme:r,mergedThemeOverrides:i}},render(){var e,t;return this.abstract?(t=this.$slots).default?.call(t):y(this.as||this.tag,{class:`${this.mergedClsPrefix||`n`}-config-provider`},(e=this.$slots).default?.call(e))}}),Er=U(`n-dialog-provider`);U(`n-dialog-api`),U(`n-dialog-reactive-list`);var Dr={titleFontSize:`18px`,padding:`16px 28px 20px 28px`,iconSize:`28px`,actionSpace:`12px`,contentMargin:`8px 0 16px 0`,iconMargin:`0 4px 0 0`,iconMarginIconTop:`4px 0 8px 0`,closeSize:`22px`,closeIconSize:`18px`,closeMargin:`20px 26px 0 0`,closeMarginIconTop:`10px 16px 0 0`};function Or(e){let{textColor1:t,textColor2:n,modalColor:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,infoColor:l,successColor:u,warningColor:d,errorColor:f,primaryColor:p,dividerColor:m,borderRadius:h,fontWeightStrong:g,lineHeight:_,fontSize:v}=e;return Object.assign(Object.assign({},Dr),{fontSize:v,lineHeight:_,border:`1px solid ${m}`,titleTextColor:t,textColor:n,color:r,closeColorHover:s,closeColorPressed:c,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeBorderRadius:h,iconColor:p,iconColorInfo:l,iconColorSuccess:u,iconColorWarning:d,iconColorError:f,borderRadius:h,titleFontWeight:g})}var kr=Ye({name:`Dialog`,common:Ae,peers:{Button:Ee},self:Or}),Ar={icon:Function,type:{type:String,default:`default`},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function,closeFocusable:Boolean},jr=be(Ar),Mr=q([G(`dialog`,`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[W(`icon`,`
 color: var(--n-icon-color);
 `),B(`bordered`,`
 border: var(--n-border);
 `),B(`icon-top`,[W(`close`,`
 margin: var(--n-close-margin);
 `),W(`icon`,`
 margin: var(--n-icon-margin);
 `),W(`content`,`
 text-align: center;
 `),W(`title`,`
 justify-content: center;
 `),W(`action`,`
 justify-content: center;
 `)]),B(`icon-left`,[W(`icon`,`
 margin: var(--n-icon-margin);
 `),B(`closable`,[W(`title`,`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),W(`close`,`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),W(`content`,`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[B(`last`,`margin-bottom: 0;`)]),W(`action`,`
 display: flex;
 justify-content: flex-end;
 `,[q(`> *:not(:last-child)`,`
 margin-right: var(--n-action-space);
 `)]),W(`icon`,`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),W(`title`,`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),G(`dialog-icon-container`,`
 display: flex;
 justify-content: center;
 `)]),Ce(G(`dialog`,`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),G(`dialog`,[ze(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Nr={default:()=>y(nt,null),info:()=>y(nt,null),success:()=>y(it,null),warning:()=>y(rt,null),error:()=>y(tt,null)},Pr=M({name:`Dialog`,alias:[`NimbusConfirmCard`,`Confirm`],props:Object.assign(Object.assign({},R.props),Ar),slots:Object,setup(e){let{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Qe(e),a=he(`Dialog`,i,n),o=x(()=>{let{iconPlacement:n}=e;return n||t?.value?.Dialog?.iconPlacement||`left`});function s(t){let{onPositiveClick:n}=e;n&&n(t)}function c(t){let{onNegativeClick:n}=e;n&&n(t)}function l(){let{onClose:t}=e;t&&t()}let u=R(`Dialog`,`-dialog`,Mr,kr,e,n),d=x(()=>{let{type:t}=e,n=o.value,{common:{cubicBezierEaseInOut:r},self:{fontSize:i,lineHeight:a,border:s,titleTextColor:c,textColor:l,color:d,closeBorderRadius:f,closeColorHover:p,closeColorPressed:m,closeIconColor:h,closeIconColorHover:g,closeIconColorPressed:_,closeIconSize:v,borderRadius:y,titleFontWeight:b,titleFontSize:x,padding:S,iconSize:C,actionSpace:w,contentMargin:T,closeSize:ee,[n===`top`?`iconMarginIconTop`:`iconMargin`]:E,[n===`top`?`closeMarginIconTop`:`closeMargin`]:D,[Q(`iconColor`,t)]:te}}=u.value,O=Pe(E);return{"--n-font-size":i,"--n-icon-color":te,"--n-bezier":r,"--n-close-margin":D,"--n-icon-margin-top":O.top,"--n-icon-margin-right":O.right,"--n-icon-margin-bottom":O.bottom,"--n-icon-margin-left":O.left,"--n-icon-size":C,"--n-close-size":ee,"--n-close-icon-size":v,"--n-close-border-radius":f,"--n-close-color-hover":p,"--n-close-color-pressed":m,"--n-close-icon-color":h,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":_,"--n-color":d,"--n-text-color":l,"--n-border-radius":y,"--n-padding":S,"--n-line-height":a,"--n-border":s,"--n-content-margin":T,"--n-title-font-size":x,"--n-title-font-weight":b,"--n-title-text-color":c,"--n-action-space":w}}),f=r?_e(`dialog`,x(()=>`${e.type[0]}${o.value[0]}`),d,e):void 0;return{mergedClsPrefix:n,rtlEnabled:a,mergedIconPlacement:o,mergedTheme:u,handlePositiveClick:s,handleNegativeClick:c,handleCloseClick:l,cssVars:r?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{bordered:t,mergedIconPlacement:n,cssVars:r,closable:i,showIcon:a,title:o,content:s,action:c,negativeText:l,positiveText:u,positiveButtonProps:d,negativeButtonProps:f,handlePositiveClick:p,handleNegativeClick:m,mergedTheme:h,loading:g,type:_,mergedClsPrefix:v}=this;(e=this.onRender)==null||e.call(this);let b=a?y(se,{clsPrefix:v,class:`${v}-dialog__icon`},{default:()=>z(this.$slots.icon,e=>e||(this.icon?Jn(this.icon):Nr[this.type]()))}):null,x=z(this.$slots.action,e=>e||u||l||c?y(`div`,{class:[`${v}-dialog__action`,this.actionClass],style:this.actionStyle},e||(c?[Jn(c)]:[this.negativeText&&y(Z,Object.assign({theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,ghost:!0,size:`small`,onClick:m},f),{default:()=>Jn(this.negativeText)}),this.positiveText&&y(Z,Object.assign({theme:h.peers.Button,themeOverrides:h.peerOverrides.Button,size:`small`,type:_===`default`?`primary`:_,disabled:g,loading:g,onClick:p},d),{default:()=>Jn(this.positiveText)})])):null);return y(`div`,{class:[`${v}-dialog`,this.themeClass,this.closable&&`${v}-dialog--closable`,`${v}-dialog--icon-${n}`,t&&`${v}-dialog--bordered`,this.rtlEnabled&&`${v}-dialog--rtl`],style:r,role:`dialog`},i?z(this.$slots.close,e=>{let t=[`${v}-dialog__close`,this.rtlEnabled&&`${v}-dialog--rtl`];return e?y(`div`,{class:t},e):y(Ze,{focusable:this.closeFocusable,clsPrefix:v,class:t,onClick:this.handleCloseClick})}):null,a&&n===`top`?y(`div`,{class:`${v}-dialog-icon-container`},b):null,y(`div`,{class:[`${v}-dialog__title`,this.titleClass],style:this.titleStyle},a&&n===`left`?b:null,ye(this.$slots.header,()=>[Jn(o)])),y(`div`,{class:[`${v}-dialog__content`,x?``:`${v}-dialog__content--last`,this.contentClass],style:this.contentStyle},ye(this.$slots.default,()=>[Jn(s)])),x)}});function Fr(e){let{modalColor:t,textColor2:n,boxShadow3:r}=e;return{color:t,textColor:n,boxShadow:r}}var Ir=Ye({name:`Modal`,common:Ae,peers:{Scrollbar:Fe,Dialog:kr,Card:Ne},self:Fr}),Lr=`n-draggable`;function Rr(e,t){let n,r=x(()=>e.value!==!1),i=x(()=>r.value?Lr:``),a=x(()=>{let t=e.value;return t===!0||t===!1?!0:t?t.bounds!==`none`:!0});function o(e){let r=e.querySelector(`.${Lr}`);if(!r||!i.value)return;let o=0,s=0,c=0,l=0,u=0,d=0,f,p=null,m=null;function h(t){t.preventDefault(),f=t;let{x:n,y:r,right:i,bottom:a}=e.getBoundingClientRect();s=n,l=r,o=window.innerWidth-i,c=window.innerHeight-a;let{left:p,top:m}=e.style;u=+m.slice(0,-2),d=+p.slice(0,-2)}function g(){m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),p=null}function _(e){if(!f)return;let{clientX:t,clientY:n}=f,r=e.clientX-t,i=e.clientY-n;a.value&&(r>o?r=o:-r>s&&(r=-s),i>c?i=c:-i>l&&(i=-l)),m={x:r+d,y:i+u},p||=requestAnimationFrame(g)}function v(){f=void 0,p&&=(cancelAnimationFrame(p),null),m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),t.onEnd(e)}H(`mousedown`,r,h),H(`mousemove`,window,_),H(`mouseup`,window,v),n=()=>{p&&cancelAnimationFrame(p),K(`mousedown`,r,h),K(`mousemove`,window,_),K(`mouseup`,window,v)}}function s(){n&&=(n(),void 0)}return ee(s),{stopDrag:s,startDrag:o,draggableRef:r,draggableClassRef:i}}var zr=Object.assign(Object.assign({},we),Ar),Br=be(zr),Vr=M({name:`ModalBody`,inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1},maskHidden:Boolean},zr),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){let t=g(null),n=g(null),r=g(e.show),i=g(null),o=g(null),c=N(It),l=null;s(a(e,`show`),e=>{e&&(l=c.getMousePosition())},{immediate:!0});let{stopDrag:u,startDrag:d,draggableRef:p,draggableClassRef:m}=Rr(a(e,`draggable`),{onEnd:e=>{y(e)}}),h=x(()=>A([e.titleClass,m.value])),_=x(()=>A([e.headerClass,m.value]));s(a(e,`show`),e=>{e&&(r.value=!0)}),Zt(x(()=>e.blockScroll&&r.value));function v(){if(c.transformOriginRef.value===`center`)return``;let{value:e}=i,{value:t}=o;return e===null||t===null?``:n.value?`${e}px ${t+n.value.containerScrollTop}px`:``}function y(e){if(c.transformOriginRef.value===`center`||!l||!n.value)return;let t=n.value.containerScrollTop,{offsetLeft:r,offsetTop:a}=e,s=l.y;i.value=-(r-l.x),o.value=-(a-s-t),e.style.transformOrigin=v()}function b(e){ie(()=>{y(e)})}function S(t){t.style.transformOrigin=v(),e.onBeforeLeave()}function C(t){let n=t;p.value&&d(n),e.onAfterEnter&&e.onAfterEnter(n)}function w(){r.value=!1,i.value=null,o.value=null,u(),e.onAfterLeave()}function T(){let{onClose:t}=e;t&&t()}function ee(){e.onNegativeClick()}function E(){e.onPositiveClick()}let D=g(null);return s(D,e=>{e&&ie(()=>{let n=e.el;n&&t.value!==n&&(t.value=n)})}),f(Pt,t),f(Nt,null),f(Lt,null),{mergedTheme:c.mergedThemeRef,appear:c.appearRef,isMounted:c.isMountedRef,mergedClsPrefix:c.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,draggableClass:m,displayed:r,childNodeRef:D,cardHeaderClass:_,dialogTitleClass:h,handlePositiveClick:E,handleNegativeClick:ee,handleCloseClick:T,handleAfterEnter:C,handleAfterLeave:w,handleBeforeLeave:S,handleEnter:b}},render(){let{$slots:e,$attrs:t,handleEnter:r,handleAfterEnter:i,handleAfterLeave:a,handleBeforeLeave:o,preset:s,mergedClsPrefix:c}=this,l=null;if(!s){if(l=Wn(`default`,e.default,{draggableClass:this.draggableClass}),!l){xe(`modal`,`default slot is empty`);return}l=re(l),l.props=n({class:`${c}-modal`},t,l.props||{})}return this.displayDirective===`show`||this.displayed||this.show?P(y(`div`,{role:`none`,class:[`${c}-modal-body-wrapper`,this.maskHidden&&`${c}-modal-body-wrapper--mask-hidden`]},y(Re,{ref:`scrollbarRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${c}-modal-scroll-content`},{default:()=>[this.renderMask?.call(this),y(Vn,{disabled:!this.trapFocus||this.maskHidden,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>y(T,{name:`fade-in-scale-up-transition`,appear:this.appear??this.isMounted,onEnter:r,onAfterEnter:i,onAfterLeave:a,onBeforeLeave:o},{default:()=>{let t=[[O,this.show]],{onClickoutside:n}=this;return n&&t.push([dn,this.onClickoutside,void 0,{capture:!0}]),P(this.preset===`confirm`||this.preset===`dialog`?y(Pr,Object.assign({},this.$attrs,{class:[`${c}-modal`,this.$attrs.class],ref:`bodyRef`,theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Kn(this.$props,jr),{titleClass:this.dialogTitleClass,"aria-modal":`true`}),e):this.preset===`card`?y(Y,Object.assign({},this.$attrs,{ref:`bodyRef`,class:[`${c}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Kn(this.$props,He),{headerClass:this.cardHeaderClass,"aria-modal":`true`,role:`dialog`}),e):this.childNodeRef=l,t)}})})]})),[[O,this.displayDirective===`if`||this.displayed||this.show]]):null}}),Hr=q([G(`modal-container`,`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),G(`modal-mask`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[ke({enterDuration:`.25s`,leaveDuration:`.25s`,enterCubicBezier:`var(--n-bezier-ease-out)`,leaveCubicBezier:`var(--n-bezier-ease-out)`})]),G(`modal-body-wrapper`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[G(`modal-scroll-content`,`
 min-height: 100%;
 display: flex;
 position: relative;
 `),B(`mask-hidden`,`pointer-events: none;`,[G(`modal-scroll-content`,[q(`> *`,`
 pointer-events: all;
 `)])])]),G(`modal`,`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[hr({duration:`.25s`,enterScale:`.5`}),q(`.${Lr}`,`
 cursor: move;
 user-select: none;
 `)])]),Ur=M({name:`Modal`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign(Object.assign({},R.props),{show:Boolean,showMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:`if`},transformOrigin:{type:String,default:`mouse`},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),zr),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function,unstableShowMask:{type:Boolean,default:void 0}}),slots:Object,setup(e){let t=g(null),{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:i}=Qe(e),o=R(`Modal`,`-modal`,Hr,Ir,e,n),s=Dt(64),c=St(),l=Ie(),u=e.internalDialog?N(Er,null):null,d=e.internalModal?N(Ft,null):null,p=Wt();function m(t){let{onUpdateShow:n,"onUpdate:show":r,onHide:i}=e;n&&X(n,t),r&&X(r,t),i&&!t&&i(t)}function h(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&m(!1)}):m(!1)}function _(){let{onPositiveClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&m(!1)}):m(!1)}function v(){let{onNegativeClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&m(!1)}):m(!1)}function y(){let{onBeforeLeave:t,onBeforeHide:n}=e;t&&X(t),n&&n()}function b(){let{onAfterLeave:t,onAfterHide:n}=e;t&&X(t),n&&n()}function S(n){let{onMaskClick:r}=e;r&&r(n),e.maskClosable&&t.value?.contains(Oe(n))&&m(!1)}function C(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&Un(t)&&(p.value||m(!1))}f(It,{getMousePosition:()=>{let e=u||d;if(e){let{clickedRef:t,clickedPositionRef:n}=e;if(t.value&&n.value)return n.value}return s.value?c.value:null},mergedClsPrefixRef:n,mergedThemeRef:o,isMountedRef:l,appearRef:a(e,`internalAppear`),transformOriginRef:a(e,`transformOrigin`)});let w=x(()=>{let{common:{cubicBezierEaseOut:e},self:{boxShadow:t,color:n,textColor:r}}=o.value;return{"--n-bezier-ease-out":e,"--n-box-shadow":t,"--n-color":n,"--n-text-color":r}}),T=i?_e(`theme-class`,void 0,w,e):void 0;return{mergedClsPrefix:n,namespace:r,isMounted:l,containerRef:t,presetProps:x(()=>Kn(e,Br)),handleEsc:C,handleAfterLeave:b,handleClickoutside:S,handleBeforeLeave:y,doUpdateShow:m,handleNegativeClick:v,handlePositiveClick:_,handleCloseClick:h,cssVars:i?void 0:w,themeClass:T?.themeClass,onRender:T?.onRender}},render(){let{mergedClsPrefix:e}=this;return y(yn,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)==null||t.call(this);let{showMask:n}=this;return P(y(`div`,{role:`none`,ref:`containerRef`,class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},y(Vr,Object.assign({style:this.overlayStyle},this.$attrs,{ref:`bodyWrapper`,displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll,maskHidden:!n},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>y(T,{name:`fade-in-transition`,key:`mask`,appear:this.internalAppear??this.isMounted},{default:()=>this.show?y(`div`,{"aria-hidden":!0,ref:`containerRef`,class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null}):void 0}),this.$slots)),[[hn,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Wr={railHeight:`4px`,railWidthVertical:`4px`,handleSize:`18px`,dotHeight:`8px`,dotWidth:`8px`,dotBorderRadius:`4px`};function Gr(e){let{railColor:t,primaryColor:n,baseColor:r,cardColor:i,modalColor:a,popoverColor:o,borderRadius:s,fontSize:c,opacityDisabled:l}=e;return Object.assign(Object.assign({},Wr),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:n,fillColorHover:n,opacityDisabled:l,handleColor:`#FFF`,dotColor:i,dotColorModal:a,dotColorPopover:o,handleBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowHover:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowActive:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowFocus:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,indicatorColor:`rgba(0, 0, 0, .85)`,indicatorBoxShadow:`0 2px 8px 0 rgba(0, 0, 0, 0.12)`,indicatorTextColor:r,indicatorBorderRadius:s,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:``})}var Kr={name:`Slider`,common:Ae,self:Gr},qr={tabFontSizeSmall:`14px`,tabFontSizeMedium:`14px`,tabFontSizeLarge:`16px`,tabGapSmallLine:`36px`,tabGapMediumLine:`36px`,tabGapLargeLine:`36px`,tabGapSmallLineVertical:`8px`,tabGapMediumLineVertical:`8px`,tabGapLargeLineVertical:`8px`,tabPaddingSmallLine:`6px 0`,tabPaddingMediumLine:`10px 0`,tabPaddingLargeLine:`14px 0`,tabPaddingVerticalSmallLine:`6px 12px`,tabPaddingVerticalMediumLine:`8px 16px`,tabPaddingVerticalLargeLine:`10px 20px`,tabGapSmallBar:`36px`,tabGapMediumBar:`36px`,tabGapLargeBar:`36px`,tabGapSmallBarVertical:`8px`,tabGapMediumBarVertical:`8px`,tabGapLargeBarVertical:`8px`,tabPaddingSmallBar:`4px 0`,tabPaddingMediumBar:`6px 0`,tabPaddingLargeBar:`10px 0`,tabPaddingVerticalSmallBar:`6px 12px`,tabPaddingVerticalMediumBar:`8px 16px`,tabPaddingVerticalLargeBar:`10px 20px`,tabGapSmallCard:`4px`,tabGapMediumCard:`4px`,tabGapLargeCard:`4px`,tabGapSmallCardVertical:`4px`,tabGapMediumCardVertical:`4px`,tabGapLargeCardVertical:`4px`,tabPaddingSmallCard:`8px 16px`,tabPaddingMediumCard:`10px 20px`,tabPaddingLargeCard:`12px 24px`,tabPaddingSmallSegment:`4px 0`,tabPaddingMediumSegment:`6px 0`,tabPaddingLargeSegment:`8px 0`,tabPaddingVerticalLargeSegment:`0 8px`,tabPaddingVerticalSmallCard:`8px 12px`,tabPaddingVerticalMediumCard:`10px 16px`,tabPaddingVerticalLargeCard:`12px 20px`,tabPaddingVerticalSmallSegment:`0 4px`,tabPaddingVerticalMediumSegment:`0 6px`,tabGapSmallSegment:`0`,tabGapMediumSegment:`0`,tabGapLargeSegment:`0`,tabGapSmallSegmentVertical:`0`,tabGapMediumSegmentVertical:`0`,tabGapLargeSegmentVertical:`0`,panePaddingSmall:`8px 0 0 0`,panePaddingMedium:`12px 0 0 0`,panePaddingLarge:`16px 0 0 0`,closeSize:`18px`,closeIconSize:`14px`};function Jr(e){let{textColor2:t,primaryColor:n,textColorDisabled:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,tabColor:l,baseColor:u,dividerColor:d,fontWeight:f,textColor1:p,borderRadius:m,fontSize:h,fontWeightStrong:g}=e;return Object.assign(Object.assign({},qr),{colorSegment:l,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:r,barColor:n,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,closeBorderRadius:m,tabColor:l,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:m,paneTextColor:t,fontWeightStrong:g})}var Yr={name:`Tabs`,common:Ae,self:Jr},Xr=U(`n-grid`),Zr={span:{type:[Number,String],default:1},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}};be(Zr);var Qr=M({__GRID_ITEM__:!0,name:`GridItem`,alias:[`Gi`],props:Zr,setup(){let{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:r,layoutShiftDisabledRef:i}=N(Xr),a=ae();return{overflow:r,itemStyle:n,layoutShiftDisabled:i,mergedXGap:x(()=>Ke(t.value||0)),deriveStyle:()=>{e.value;let{privateSpan:n=1,privateShow:r=!0,privateColStart:i=void 0,privateOffset:o=0}=a.vnode.props,{value:s}=t,c=Ke(s||0);return{display:r?``:`none`,gridColumn:`${i??`span ${n}`} / span ${n}`,marginLeft:o?`calc((100% - (${n} - 1) * ${c}) / ${n} * ${o} + ${c} * ${o})`:``}}}},render(){var e;if(this.layoutShiftDisabled){let{span:e,offset:t,mergedXGap:n}=this;return y(`div`,{style:{gridColumn:`span ${e} / span ${e}`,marginLeft:t?`calc((100% - (${e} - 1) * ${n}) / ${e} * ${t} + ${n} * ${t})`:``}},this.$slots)}return y(`div`,{style:[this.itemStyle,this.deriveStyle()]},(e=this.$slots).default?.call(e,{overflow:this.overflow}))}}),$r={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},ei=24,ti=`__ssr__`,ni=M({name:`Grid`,inheritAttrs:!1,props:{layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:`self`},cols:{type:[Number,String],default:ei},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},setup(t){let{mergedClsPrefixRef:n,mergedBreakpointsRef:r}=Qe(t),i=/^\d+$/,o=g(void 0),s=jt(r?.value||$r),c=Ve(()=>!!(t.itemResponsive||!i.test(t.cols.toString())||!i.test(t.xGap.toString())||!i.test(t.yGap.toString()))),l=x(()=>{if(c.value)return t.responsive===`self`?o.value:s.value}),u=Ve(()=>Number(De(t.cols.toString(),l.value))??ei),d=Ve(()=>De(t.xGap.toString(),l.value)),p=Ve(()=>De(t.yGap.toString(),l.value)),m=e=>{o.value=e.contentRect.width},h=e=>{dt(m,e)},_=g(!1),v=x(()=>{if(t.responsive===`self`)return h}),y=g(!1),b=g();return e(()=>{let{value:e}=b;e&&e.hasAttribute(ti)&&(e.removeAttribute(ti),y.value=!0)}),f(Xr,{layoutShiftDisabledRef:a(t,`layoutShiftDisabled`),isSsrRef:y,itemStyleRef:a(t,`itemStyle`),xGapRef:d,overflowRef:_}),{isSsr:!oe,contentEl:b,mergedClsPrefix:n,style:x(()=>t.layoutShiftDisabled?{width:`100%`,display:`grid`,gridTemplateColumns:`repeat(${t.cols}, minmax(0, 1fr))`,columnGap:Ke(t.xGap),rowGap:Ke(t.yGap)}:{width:`100%`,display:`grid`,gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:Ke(d.value),rowGap:Ke(p.value)}),isResponsive:c,responsiveQuery:l,responsiveCols:u,handleResize:v,overflow:_}},render(){if(this.layoutShiftDisabled)return y(`div`,n({ref:`contentEl`,class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);let e=()=>{this.overflow=!1;let e=pe(de(this)),t=[],{collapsed:r,collapsedRows:i,responsiveCols:a,responsiveQuery:o}=this;e.forEach(e=>{if(e?.type?.__GRID_ITEM__!==!0)return;if(Gn(e)){let n=re(e);n.props?n.props.privateShow=!1:n.props={privateShow:!1},t.push({child:n,rawChildSpan:0});return}e.dirs=e.dirs?.filter(({dir:e})=>e!==O)||null,e.dirs?.length===0&&(e.dirs=null);let n=re(e),r=Number(De(n.props?.span,o)??1);r!==0&&t.push({child:n,rawChildSpan:r})});let s=0,c=t[t.length-1]?.child;if(c?.props){let e=c.props?.suffix;e!==void 0&&e!==!1&&(s=Number(De(c.props?.span,o)??1),c.props.privateSpan=s,c.props.privateColStart=a+1-s,c.props.privateShow=c.props.privateShow??!0)}let l=0,u=!1;for(let{child:e,rawChildSpan:n}of t){if(u&&(this.overflow=!0),!u){let t=Number(De(e.props?.offset,o)??0),c=Math.min(n+t,a);if(e.props?(e.props.privateSpan=c,e.props.privateOffset=t):e.props={privateSpan:c,privateOffset:t},r){let e=l%a;c+e>a&&(l+=a-e),c+l+s>i*a?u=!0:l+=c}}u&&(e.props?e.props.privateShow!==!0&&(e.props.privateShow=!1):e.props={privateShow:!1})}return y(`div`,n({ref:`contentEl`,class:`${this.mergedClsPrefix}-grid`,style:this.style,[ti]:this.isSsr||void 0},this.$attrs),t.map(({child:e})=>e))};return this.isResponsive&&this.responsive===`self`?y(Se,{onResize:this.handleResize},{default:e}):e()}}),ri=q([G(`slider`,`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[B(`reverse`,[G(`slider-handles`,[G(`slider-handle-wrapper`,`
 transform: translate(50%, -50%);
 `)]),G(`slider-dots`,[G(`slider-dot`,`
 transform: translateX(50%, -50%);
 `)]),B(`vertical`,[G(`slider-handles`,[G(`slider-handle-wrapper`,`
 transform: translate(-50%, -50%);
 `)]),G(`slider-marks`,[G(`slider-mark`,`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),G(`slider-dots`,[G(`slider-dot`,`
 transform: translateX(-50%) translateY(0);
 `)])])]),B(`vertical`,`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[G(`slider-handles`,`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[G(`slider-handle-wrapper`,`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),G(`slider-rail`,`
 height: 100%;
 `,[W(`fill`,`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),B(`with-mark`,`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),G(`slider-marks`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[G(`slider-mark`,`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),G(`slider-dots`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[G(`slider-dot`,`
 transform: translateX(-50%) translateY(50%);
 `)])]),B(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[G(`slider-handle`,`
 cursor: not-allowed;
 `)]),B(`with-mark`,`
 width: 100%;
 margin: 8px 0 32px 0;
 `),q(`&:hover`,[G(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[W(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),G(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),B(`active`,[G(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[W(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),G(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),G(`slider-marks`,`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[G(`slider-mark`,`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),G(`slider-rail`,`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[W(`fill`,`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),G(`slider-handles`,`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[G(`slider-handle-wrapper`,`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[G(`slider-handle`,`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[q(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),q(`&:focus`,[G(`slider-handle`,`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[q(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),G(`slider-dots`,`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[B(`transition-disabled`,[G(`slider-dot`,`transition: none;`)]),G(`slider-dot`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[B(`active`,`border: var(--n-dot-border-active);`)])])]),G(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[hr()]),G(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[B(`top`,`
 margin-bottom: 12px;
 `),B(`right`,`
 margin-left: 12px;
 `),B(`bottom`,`
 margin-top: 12px;
 `),B(`left`,`
 margin-right: 12px;
 `),hr()]),Ce(G(`slider`,[G(`slider-dot`,`background-color: var(--n-dot-color-modal);`)])),Xe(G(`slider`,[G(`slider-dot`,`background-color: var(--n-dot-color-popover);`)]))]);function ii(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ai(){let e=new Map;return p(()=>{e.clear()}),[e,t=>n=>{e.set(t,n)}]}var oi=0,si=M({name:`Slider`,props:Object.assign(Object.assign({},R.props),{to:zt.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),slots:Object,setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:i}=Qe(e),o=R(`Slider`,`-slider`,ri,Kr,e,t),c=g(null),[l,u]=ai(),[d,f]=ai(),p=g(new Set),m=me(e),{mergedDisabledRef:h}=m,_=x(()=>{let{step:t}=e;if(Number(t)<=0||t===`mark`)return 0;let n=t.toString(),r=0;return n.includes(`.`)&&(r=n.length-n.indexOf(`.`)-1),r}),v=g(e.defaultValue),y=et(a(e,`value`),v),b=x(()=>{let{value:t}=y;return(e.range?t:[t]).map(se)}),S=x(()=>b.value.length>2),C=x(()=>e.placement===void 0?e.vertical?`right`:`top`:e.placement),w=x(()=>{let{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),T=g(-1),ee=g(-1),E=g(-1),D=g(!1),te=g(!1),O=x(()=>{let{vertical:t,reverse:n}=e;return t?n?`top`:`bottom`:n?`right`:`left`}),k=x(()=>{if(S.value)return;let t=b.value,n=ce(e.range?Math.min(...t):e.min),r=ce(e.range?Math.max(...t):t[0]),{value:i}=O;return e.vertical?{[i]:`${n}%`,height:`${r-n}%`}:{[i]:`${n}%`,width:`${r-n}%`}}),A=x(()=>{let t=[],{marks:n}=e;if(n){let r=b.value.slice();r.sort((e,t)=>e-t);let{value:i}=O,{value:a}=S,{range:o}=e,s=a?()=>!1:e=>o?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(let e of Object.keys(n)){let r=Number(e);t.push({active:s(r),key:r,label:n[e],style:{[i]:`${ce(r)}%`}})}}return t});function j(e,t){let n=ce(e),{value:r}=O;return{[r]:`${n}%`,zIndex:t===T.value?1:0}}function ne(t){return e.showTooltip||E.value===t||T.value===t&&D.value}function re(e){return D.value?!(T.value===e&&ee.value===e):!0}function M(e){var t;~e&&(T.value=e,(t=l.get(e))==null||t.focus())}function N(){d.forEach((e,t)=>{ne(t)&&e.syncPosition()})}function ae(t){let{"onUpdate:value":n,onUpdateValue:r}=e,{nTriggerFormInput:i,nTriggerFormChange:a}=m;r&&X(r,t),n&&X(n,t),v.value=t,i(),a()}function P(t){let{range:n}=e;if(n){if(Array.isArray(t)){let{value:e}=b;t.join()!==e.join()&&ae(t)}}else Array.isArray(t)||b.value[0]!==t&&ae(t)}function oe(t,n){if(e.range){let e=b.value.slice();e.splice(n,1,t),P(e)}else P(t)}function F(t,n,r){let i=r!==void 0;r||=t-n>0?1:-1;let a=w.value||[],{step:o}=e;if(o===`mark`){let e=de(t,a.concat(n),i?r:void 0);return e?e.value:n}if(o<=0)return n;let{value:s}=_,c;if(i){let e=Number((n/o).toFixed(s)),t=Math.floor(e),i=e>t?t:t-1,l=e<t?t:t+1;c=de(n,[Number((i*o).toFixed(s)),Number((l*o).toFixed(s)),...a],r)}else{let e=ue(t);c=de(t,[...a,e])}return c?se(c.value):n}function se(t){return Math.min(e.max,Math.max(e.min,t))}function ce(t){let{max:n,min:r}=e;return(t-r)/(n-r)*100}function le(t){let{max:n,min:r}=e;return r+(n-r)*t}function ue(t){let{step:n,min:r}=e;if(Number(n)<=0||n===`mark`)return t;let i=Math.round((t-r)/n)*n+r;return Number(i.toFixed(_.value))}function de(e,t=w.value,n){if(!t?.length)return null;let r=null,i=-1;for(;++i<t.length;){let a=t[i]-e,o=Math.abs(a);(n===void 0||a*n>0)&&(r===null||o<r.distance)&&(r={index:i,distance:o,value:t[i]})}return r}function fe(t){let n=c.value;if(!n)return;let r=ii(t)?t.touches[0]:t,i=n.getBoundingClientRect(),a;return a=e.vertical?(i.bottom-r.clientY)/i.height:(r.clientX-i.left)/i.width,e.reverse&&(a=1-a),le(a)}function pe(t){if(h.value||!e.keyboard)return;let{vertical:n,reverse:r}=e;switch(t.key){case`ArrowUp`:t.preventDefault(),I(n&&r?-1:1);break;case`ArrowRight`:t.preventDefault(),I(!n&&r?-1:1);break;case`ArrowDown`:t.preventDefault(),I(n&&r?1:-1);break;case`ArrowLeft`:t.preventDefault(),I(!n&&r?1:-1);break}}function I(t){let n=T.value;if(n===-1)return;let{step:r}=e,i=b.value[n];oe(F(Number(r)<=0||r===`mark`?i:i+r*t,i,t>0?1:-1),n)}function he(t){if(h.value||!ii(t)&&t.button!==oi)return;let n=fe(t);if(n===void 0)return;let r=b.value.slice(),i=e.range?de(n,r)?.index??-1:0;i!==-1&&(t.preventDefault(),M(i),ge(),oe(F(n,b.value[i]),i))}function ge(){D.value||(D.value=!0,e.onDragstart&&X(e.onDragstart),H(`touchend`,document,z),H(`mouseup`,document,z),H(`touchmove`,document,ve),H(`mousemove`,document,ve))}function L(){D.value&&(D.value=!1,e.onDragend&&X(e.onDragend),K(`touchend`,document,z),K(`mouseup`,document,z),K(`touchmove`,document,ve),K(`mousemove`,document,ve))}function ve(e){let{value:t}=T;if(!D.value||t===-1){L();return}let n=fe(e);n!==void 0&&oe(F(n,b.value[t]),t)}function z(){L()}function ye(e){T.value=e,h.value||(E.value=e)}function be(e){T.value===e&&(T.value=-1,L()),E.value===e&&(E.value=-1)}function xe(e){E.value=e}function Se(e){E.value===e&&(E.value=-1)}s(T,(e,t)=>void ie(()=>ee.value=t)),s(y,()=>{if(e.marks){if(te.value)return;te.value=!0,ie(()=>{te.value=!1})}ie(N)}),r(()=>{L()});let B=x(()=>{let{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:i,handleColor:a,opacityDisabled:s,dotColor:c,dotColorModal:l,handleBoxShadow:u,handleBoxShadowHover:d,handleBoxShadowActive:f,handleBoxShadowFocus:p,dotBorder:m,dotBoxShadow:h,railHeight:g,railWidthVertical:_,handleSize:v,dotHeight:y,dotWidth:b,dotBorderRadius:x,fontSize:S,dotBorderActive:C,dotColorPopover:w},common:{cubicBezierEaseInOut:T}}=o.value;return{"--n-bezier":T,"--n-dot-border":m,"--n-dot-border-active":C,"--n-dot-border-radius":x,"--n-dot-box-shadow":h,"--n-dot-color":c,"--n-dot-color-modal":l,"--n-dot-color-popover":w,"--n-dot-height":y,"--n-dot-width":b,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":S,"--n-handle-box-shadow":u,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":d,"--n-handle-color":a,"--n-handle-size":v,"--n-opacity-disabled":s,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":g,"--n-rail-width-vertical":_,"--n-mark-font-size":e}}),V=i?_e(`slider`,void 0,B,e):void 0,Ce=x(()=>{let{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:i}}=o.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),we=i?_e(`slider-indicator`,void 0,Ce,e):void 0;return{mergedClsPrefix:t,namespace:n,uncontrolledValue:v,mergedValue:y,mergedDisabled:h,mergedPlacement:C,isMounted:Ie(),adjustedTo:zt(e),dotTransitionDisabled:te,markInfos:A,isShowTooltip:ne,shouldKeepTooltipTransition:re,handleRailRef:c,setHandleRefs:u,setFollowerRefs:f,fillStyle:k,getHandleStyle:j,activeIndex:T,arrifiedValues:b,followerEnabledIndexSet:p,handleRailMouseDown:he,handleHandleFocus:ye,handleHandleBlur:be,handleHandleMouseEnter:xe,handleHandleMouseLeave:Se,handleRailKeyDown:pe,indicatorCssVars:i?void 0:Ce,indicatorThemeClass:we?.themeClass,indicatorOnRender:we?.onRender,cssVars:i?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){var e;let{mergedClsPrefix:t,themeClass:n,formatTooltip:r}=this;return(e=this.onRender)==null||e.call(this),y(`div`,{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},y(`div`,{class:`${t}-slider-rail`},y(`div`,{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?y(`div`,{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(e=>y(`div`,{key:e.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:e.active}],style:e.style}))):null,y(`div`,{ref:`handleRailRef`,class:`${t}-slider-handles`},this.arrifiedValues.map((e,n)=>{let i=this.isShowTooltip(n);return y(cn,null,{default:()=>[y(ln,null,{default:()=>y(`div`,{ref:this.setHandleRefs(n),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:`slider`,"aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?`vertical`:`horizontal`,"aria-disabled":this.disabled,style:this.getHandleStyle(e,n),onFocus:()=>{this.handleHandleFocus(n)},onBlur:()=>{this.handleHandleBlur(n)},onMouseenter:()=>{this.handleHandleMouseEnter(n)},onMouseleave:()=>{this.handleHandleMouseLeave(n)}},ye(this.$slots.thumb,()=>[y(`div`,{class:`${t}-slider-handle`})]))}),this.tooltip&&y(Mn,{ref:this.setFollowerRefs(n),show:i,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(n),teleportDisabled:this.adjustedTo===zt.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>y(T,{name:`fade-in-scale-up-transition`,appear:this.isMounted,css:this.shouldKeepTooltipTransition(n),onEnter:()=>{this.followerEnabledIndexSet.add(n)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(n)}},{default:()=>{var n;return i?((n=this.indicatorOnRender)==null||n.call(this),y(`div`,{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r==`function`?r(e):e)):null}})})]})})),this.marks?y(`div`,{class:`${t}-slider-marks`},this.markInfos.map(e=>y(`div`,{key:e.key,class:`${t}-slider-mark`,style:e.style},typeof e.label==`function`?e.label():e.label))):null))}}),ci=U(`n-tabs`),li={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ui=M({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:li,slots:Object,setup(e){let t=N(ci,null);return t||fe(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return y(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),di=M({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},qn(li,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=N(ci);return{trigger:d,mergedClosable:x(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:r,disabled:i,label:a,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=a??o;return y(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?y(`div`,{class:`${t}-tabs-tab-pad`}):null,y(`div`,Object.assign({key:r,"data-name":r,"data-disabled":i?!0:void 0},n({class:[`${t}-tabs-tab`,s===r&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),y(`span`,{class:`${t}-tabs-tab__label`},e?y(b,null,y(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),y(se,{clsPrefix:t},{default:()=>y(fr,null)})):u?u():typeof d==`object`?d:Jn(d??r)),c&&this.type===`card`?y(Ze,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),fi=G(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[B(`segment-type`,[G(`tabs-rail`,[q(`&.transition-disabled`,[G(`tabs-capsule`,`
 transition: none;
 `)])])]),B(`top`,[G(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),B(`left`,[G(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),B(`left, right`,`
 flex-direction: row;
 `,[G(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),G(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),B(`right`,`
 flex-direction: row-reverse;
 `,[G(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),G(`tabs-bar`,`
 left: 0;
 `)]),B(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[G(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),G(`tabs-bar`,`
 top: 0;
 `)]),G(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[G(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),G(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[G(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[B(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),q(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),B(`flex`,[G(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[G(`tabs-wrapper`,`
 width: 100%;
 `,[G(`tabs-tab`,`
 margin-right: 0;
 `)])])]),G(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[W(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),W(`prefix`,`padding-right: 16px;`),W(`suffix`,`padding-left: 16px;`)]),B(`top, bottom`,[q(`>`,[G(`tabs-nav`,[G(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),q(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),B(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),B(`shadow-end`,[q(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),B(`left, right`,[G(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),q(`>`,[G(`tabs-nav`,[G(`tabs-nav-scroll-wrapper`,[q(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),q(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B(`shadow-start`,[q(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),B(`shadow-end`,[q(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),G(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[G(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[q(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),q(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),G(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),G(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),G(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),G(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B(`disabled`,{cursor:`not-allowed`}),W(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),G(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[q(`&.transition-disabled`,`
 transition: none;
 `),B(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),G(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),G(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[q(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),q(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),q(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),q(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),q(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),G(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),B(`line-type, bar-type`,[G(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[q(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),B(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),B(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),G(`tabs-nav`,[B(`line-type`,[B(`top`,[W(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 bottom: -1px;
 `)]),B(`left`,[W(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 right: -1px;
 `)]),B(`right`,[W(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 left: -1px;
 `)]),B(`bottom`,[W(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-bar`,`
 top: -1px;
 `)]),W(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-bar`,`
 border-radius: 0;
 `)]),B(`card-type`,[W(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),G(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[B(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[W(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Je(`disabled`,[q(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),B(`closable`,`padding-right: 8px;`),B(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),B(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),B(`left, right`,`
 flex-direction: column; 
 `,[W(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),G(`tabs-wrapper`,`
 flex-direction: column;
 `),G(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[G(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),B(`top`,[B(`card-type`,[G(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),W(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[B(`active`,`
 border-bottom: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),B(`left`,[B(`card-type`,[G(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),W(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[B(`active`,`
 border-right: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),B(`right`,[B(`card-type`,[G(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),W(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[B(`active`,`
 border-left: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),B(`bottom`,[B(`card-type`,[G(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),W(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[B(`active`,`
 border-top: 1px solid #0000;
 `)]),G(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),G(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),pi=dr,mi=M({name:`Tabs`,props:Object.assign(Object.assign({},R.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=Qe(t),c=R(`Tabs`,`-tabs`,fi,Yr,t,r),l=g(null),d=g(null),p=g(null),m=g(null),h=g(null),_=g(null),v=g(!0),y=g(!0),b=Ge(t,[`labelSize`,`size`]),S=x(()=>b.value?b.value:o?.value?.Tabs?.size||`medium`),C=Ge(t,[`activeName`,`value`]),w=g(C.value??t.defaultValue??(n.default?pe(n.default())[0]?.props?.name:null)),T=et(C,w),ee={id:0},E=x(()=>{if(!(!t.justifyContent||t.type===`card`))return{display:`flex`,justifyContent:t.justifyContent}});s(T,()=>{ee.id=0,A(),j()});function D(){let{value:e}=T;return e===null?null:l.value?.querySelector(`[data-name="${e}"]`)}function te(e){if(t.type===`card`)return;let{value:n}=d;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=t;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(k([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(k([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function O(){if(t.type===`card`)return;let{value:e}=d;e&&(e.style.opacity=`0`)}function k(e){let{value:t}=d;if(t)for(let n of e)t.style[n]=``}function A(){if(t.type===`card`)return;let e=D();e?te(e):O()}function j(){let e=h.value?.$el;if(!e)return;let t=D();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let ne=g(null),re=0,M=null;function N(e){let t=ne.value;if(t){re=e.getBoundingClientRect().height;let n=`${re}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};M?(r(),M(),M=null):M=r}}function ae(e){let t=ne.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(re,n)}px`};M?(M(),M=null,r()):M=r}}function P(){let e=ne.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let oe={value:[]},F=g(`next`);function se(e){let t=T.value,n=`next`;for(let r of oe.value){if(r===t)break;if(r===e){n=`prev`;break}}F.value=n,ce(e)}function ce(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&X(n,e),r&&X(r,e),i&&X(i,e),w.value=e}function le(e){let{onClose:n}=t;n&&X(n,e)}let ue=!0;function de(){let{value:e}=d;if(!e)return;ue||=!1;let t=`transition-disabled`;e.classList.add(t),A(),e.classList.remove(t)}let fe=g(null);function me({transitionDisabled:e}){let t=l.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=D();n&&fe.value&&(fe.value.style.width=`${n.offsetWidth}px`,fe.value.style.height=`${n.offsetHeight}px`,fe.value.style.transform=`translateX(${n.offsetLeft-Te(getComputedStyle(t).paddingLeft)}px)`,e&&fe.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}s([T],()=>{t.type===`segment`&&ie(()=>{me({transitionDisabled:!1})})}),e(()=>{t.type===`segment`&&me({transitionDisabled:!0})});let I=0;function he(e){if(e.contentRect.width===0&&e.contentRect.height===0||I===e.contentRect.width)return;I=e.contentRect.width;let{type:n}=t;if((n===`line`||n===`bar`)&&(ue||t.justifyContent?.startsWith(`space`))&&de(),n!==`segment`){let{placement:e}=t;be((e===`top`||e===`bottom`?h.value?.$el:_.value)||null)}}let ge=pi(he,64);s([()=>t.justifyContent,()=>t.size],()=>{ie(()=>{let{type:e}=t;(e===`line`||e===`bar`)&&de()})});let L=g(!1);function ve(e){let{target:n,contentRect:{width:r,height:i}}=e,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=t;if(!L.value)s===`top`||s===`bottom`?a<r&&(L.value=!0):o<i&&(L.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(L.value=!1):o-i>e.$el.offsetHeight&&(L.value=!1)}be(h.value?.$el||null)}let z=pi(ve,64);function ye(){let{onAdd:e}=t;e&&e(),ie(()=>{let e=D(),{value:t}=h;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function be(e){if(!e)return;let{placement:n}=t;if(n===`top`||n===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e;v.value=t<=0,y.value=t+r>=n}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;v.value=t<=0,y.value=t+r>=n}}let xe=pi(e=>{be(e.target)},64);f(ci,{triggerRef:a(t,`trigger`),tabStyleRef:a(t,`tabStyle`),tabClassRef:a(t,`tabClass`),addTabStyleRef:a(t,`addTabStyle`),addTabClassRef:a(t,`addTabClass`),paneClassRef:a(t,`paneClass`),paneStyleRef:a(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:a(t,`type`),closableRef:a(t,`closable`),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:a(t,`onBeforeLeave`),activateTab:se,handleClose:le,handleAdd:ye}),_t(()=>{A(),j()}),u(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;v.value?e.classList.remove(n):e.classList.add(n),y.value?e.classList.remove(i):e.classList.add(i)});let Se={syncBarPosition:()=>{A()}},B=()=>{me({transitionDisabled:!0})},V=x(()=>{let{value:e}=S,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:C,[Q(`panePadding`,e)]:w,[Q(`tabPadding`,r)]:T,[Q(`tabPaddingVertical`,r)]:ee,[Q(`tabGap`,r)]:E,[Q(`tabGap`,`${r}Vertical`)]:D,[Q(`tabTextColor`,n)]:te,[Q(`tabTextColorActive`,n)]:O,[Q(`tabTextColorHover`,n)]:k,[Q(`tabTextColorDisabled`,n)]:A,[Q(`tabFontSize`,e)]:j},common:{cubicBezierEaseInOut:ne}}=c.value;return{"--n-bezier":ne,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":j,"--n-tab-text-color":te,"--n-tab-text-color-active":O,"--n-tab-text-color-disabled":A,"--n-tab-text-color-hover":k,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":C,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":ee,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":Pe(w,`left`),"--n-pane-padding-right":Pe(w,`right`),"--n-pane-padding-top":Pe(w,`top`),"--n-pane-padding-bottom":Pe(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),H=i?_e(`tabs`,x(()=>`${S.value[0]}${t.type[0]}`),V,t):void 0;return Object.assign({mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:fe,tabsPaneWrapperRef:ne,tabsElRef:l,barElRef:d,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:p,addTabFixed:L,tabWrapperStyle:E,handleNavResize:ge,mergedSize:S,handleScroll:xe,handleTabsResize:z,cssVars:i?void 0:V,themeClass:H?.themeClass,animationDirection:F,renderNameListRef:oe,yScrollElRef:_,handleSegmentResize:B,onAnimationBeforeLeave:N,onAnimationEnter:ae,onAnimationAfterEnter:P,onRender:H?.onRender},Se)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?pe(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?pe(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let b=()=>{let t=y(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:y(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),vi(y(di,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),vi(t!==0&&!v?_i(e):e))),!r&&i&&g?gi(i,(h?p.length:m.length)!==0):null,v?null:y(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return y(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?y(Se,{onResize:this.handleTabsResize},{default:()=>t}):t,g?y(`div`,{class:`${e}-tabs-pad`}):null,g?null:y(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=_?`top`:n;return y(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},y(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},z(d,t=>t&&y(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?y(Se,{onResize:this.handleSegmentResize},{default:()=>y(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},y(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},y(`div`,{class:`${e}-tabs-wrapper`},y(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),y(di,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:_i(e))))}):y(Se,{onResize:this.handleNavResize},{default:()=>y(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?y(Pn,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):y(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&g?gi(i,!0):null,z(f,t=>t&&y(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(x===`top`||x===`bottom`)?y(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},hi(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):hi(p,this.mergedValue,this.renderedNames)))}});function hi(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?P(e,[[O,c]]):e)}}),o?y(v,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function gi(e,t){return y(di,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function _i(e){let t=re(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function vi(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var yi={class:`energy-block`},bi=j(M({__name:`TopStatusBar`,props:{quarterText:{},remainingTurns:{},energy:{},energyMax:{},researchFunding:{},publishedPapers:{}},setup(e){let t=e,n=x(()=>{if(t.energyMax<=0)return 0;let e=t.energy/t.energyMax*100;return Math.max(0,Math.min(100,Math.round(e)))}),r=x(()=>n.value>=60?`#18a058`:n.value>=30?`#f0a020`:`#d03050`);return(t,i)=>(d(),k(l(Y),{size:`small`,class:`status-card`},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`,wrap:``},{default:h(()=>[_(l(V),null,{default:h(()=>[_(l($),{type:`info`},{default:h(()=>[C(c(e.quarterText),1)]),_:1}),_(l($),{type:`warning`},{default:h(()=>[C(`剩余 `+c(e.remainingTurns)+` 回合`,1)]),_:1})]),_:1}),_(l(V),{wrap:``},{default:h(()=>[S(`div`,yi,[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l(J),null,{default:h(()=>[...i[0]||=[C(`精力`,-1)]]),_:1}),_(l(J),null,{default:h(()=>[C(c(e.energy)+`/`+c(e.energyMax),1)]),_:1})]),_:1}),_(l(at),{type:`line`,percentage:n.value,"show-indicator":!1,color:r.value},null,8,[`percentage`,`color`])]),_(l(J),null,{default:h(()=>[C(`科研经费：¥`+c(e.researchFunding.toLocaleString()),1)]),_:1}),_(l(J),null,{default:h(()=>[C(`已发表：`+c(e.publishedPapers),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-41c62f9a`]]),xi={class:`user-profile-stack`},Si={class:`user-profile`},Ci={class:`avatar-block`},wi=j(M({__name:`UserProfile`,props:{name:{},gender:{},age:{},disciplineCategory:{},title:{}},setup(e){let t=e,n=x(()=>t.gender===`女`?`👩‍🏫`:`👨‍🏫`),r=x(()=>`${t.name}@abc.edu.cn`),i=x(()=>`☎️ 021-6789-XXXX`),a=x(()=>`📍 某市某校3号楼226室`),o=x(()=>({理学:`理学院`,工学:`工学院`,农学:`农学院`,文学:`文学院`,艺术学:`艺术学院`,经济学:`经济学院`,管理学:`管理学院`,法学:`法学院`,政治学:`政治与公共管理学院`,教育学:`教育学院`,医学:`医学院`,哲学:`哲学院`,历史学:`历史学院`})[t.disciplineCategory]??`通识教育学院`);return(t,s)=>(d(),w(`div`,xi,[_(l(Y),{size:`small`,class:`user-profile-card`},{default:h(()=>[S(`div`,Si,[S(`div`,Ci,c(n.value),1),_(l(V),{vertical:``,size:`small`,class:`profile-lines`},{default:h(()=>[_(l(J),{class:`profile-line profile-name`},{default:h(()=>[C(c(e.name),1)]),_:1}),_(l(J),{depth:`3`,class:`profile-line`},{default:h(()=>[C(c(e.gender)+` · `+c(e.age)+` 岁`,1)]),_:1}),_(l(J),{depth:`3`,class:`profile-line`},{default:h(()=>[C(c(e.title),1)]),_:1}),_(l(J),{depth:`3`,class:`profile-line`},{default:h(()=>[C(c(o.value),1)]),_:1})]),_:1})])]),_:1}),_(l(Y),{size:`small`,class:`contact-card`,title:`个人信息`},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),{class:`contact-line`},{default:h(()=>[C(`📧 `+c(r.value),1)]),_:1}),_(l(J),{class:`contact-line`},{default:h(()=>[C(c(i.value),1)]),_:1}),_(l(J),{class:`contact-line`},{default:h(()=>[C(c(a.value),1)]),_:1})]),_:1})]),_:1})]))}}),[[`__scopeId`,`data-v-a7c1e310`]]),Ti=j(M({__name:`RoleStatusPanel`,props:{health:{},stress:{},academicAbility:{},adminAbility:{},reputation:{}},setup(e){return(t,n)=>(d(),k(l(Y),{title:`🧑‍🏫 角色状态`,size:`small`,class:`status-panel`},{default:h(()=>[_(l(ni),{cols:10,"x-gap":12,"y-gap":10,responsive:`screen`},{default:h(()=>[_(l(Qr),{span:`10 s:5 m:2`},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[0]||=[C(`❤️ 健康度`,-1)]]),_:1}),_(l(J),{depth:`3`},{default:h(()=>[C(c(e.health)+`/100`,1)]),_:1})]),_:1}),_(l(at),{type:`line`,percentage:e.health,"show-indicator":!1},null,8,[`percentage`])]),_:1}),_(l(Qr),{span:`10 s:5 m:2`},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[1]||=[C(`😵 压力`,-1)]]),_:1}),_(l(J),{depth:`3`},{default:h(()=>[C(c(e.stress)+`/100`,1)]),_:1})]),_:1}),_(l(at),{type:`line`,percentage:e.stress,"show-indicator":!1},null,8,[`percentage`])]),_:1}),_(l(Qr),{span:`10 s:5 m:2`},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[2]||=[C(`🔬 学术能力`,-1)]]),_:1}),_(l(J),{depth:`3`},{default:h(()=>[C(c(e.academicAbility)+`/100`,1)]),_:1})]),_:1}),_(l(at),{type:`line`,percentage:e.academicAbility,"show-indicator":!1},null,8,[`percentage`])]),_:1}),_(l(Qr),{span:`10 s:5 m:2`},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[3]||=[C(`📋 行政能力`,-1)]]),_:1}),_(l(J),{depth:`3`},{default:h(()=>[C(c(e.adminAbility)+`/100`,1)]),_:1})]),_:1}),_(l(at),{type:`line`,percentage:e.adminAbility,"show-indicator":!1},null,8,[`percentage`])]),_:1}),_(l(Qr),{span:`10 s:10 m:2`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[4]||=[C(`⭐ 声望`,-1)]]),_:1}),_(l(J),{class:`reputation-value`},{default:h(()=>[C(c(e.reputation),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-6185e1c2`]]),Ei={class:`action-grid`},Di={class:`tile-label`},Oi={class:`tile-cost`},ki={class:`control-grid`},Ai=j(M({__name:`ActionPanel`,props:{energy:{}},emits:[`action`,`endTurn`,`openSettings`],setup(e,{emit:t}){let n=e,r=t,i=[{key:`research`,label:`科研攻关`,energyCost:20,note:`论文进度 +25%`},{key:`project`,label:`撰写项目本子`,energyCost:30,note:`触发项目申请判定`},{key:`promotion`,label:`职称申请`,energyCost:25,note:`提交职称评审材料`},{key:`teaching`,label:`授课/教学`,energyCost:15,note:`教学评价 +5`},{key:`guide`,label:`指导学生`,energyCost:10,note:`学生毕业进度 +15%`},{key:`conference`,label:`学术会议`,energyCost:20,note:`声望 +5（含随机）`},{key:`team`,label:`团建/减压`,energyCost:10,note:`全体学生压力 -10`}];function a(e){return n.energy>=e}return(e,t)=>(d(),k(l(Y),{title:`行动面板`,size:`small`},{default:h(()=>[_(l(V),{vertical:``},{default:h(()=>[S(`div`,Ei,[(d(),w(b,null,m(i,e=>_(l(Z),{key:e.key,secondary:``,class:`action-tile`,disabled:!a(e.energyCost),onClick:t=>r(`action`,e)},{default:h(()=>[S(`span`,Di,c(e.label),1),S(`span`,Oi,`-`+c(e.energyCost)+` 精力`,1)]),_:2},1032,[`disabled`,`onClick`])),64))]),_(l(V),{vertical:``,size:`small`,class:`hints`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...t[2]||=[C(`每回合精力会重置为上限，未使用不累积。`,-1)]]),_:1}),_(l(J),{depth:`3`},{default:h(()=>[...t[3]||=[C(`可扩展：招聘学生、投稿、项目管理等功能。`,-1)]]),_:1})]),_:1}),S(`div`,ki,[_(l(Z),{type:`primary`,class:`control-tile`,onClick:t[0]||=e=>r(`endTurn`)},{default:h(()=>[...t[4]||=[C(`下一回合`,-1)]]),_:1}),_(l(Z),{class:`control-tile`,onClick:t[1]||=e=>r(`openSettings`)},{default:h(()=>[...t[5]||=[C(`设置`,-1)]]),_:1})])]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-1d49d534`]]),ji=j(M({__name:`ProjectsPanel`,props:{projects:{},disciplineCategory:{},title:{},currentQuarter:{}},setup(e){let t=e,n=[`理学`,`工学`,`农学`,`医学`],r=x(()=>n.includes(t.disciplineCategory)),i={助理研究员:1,准聘副教授:2,长聘副教授:3,教授:4,院士:5,一级教授:5},a=x(()=>{let e=r.value?`国自然`:`国社科`;return[{name:`${e}青年项目`,funding:3e5,durationQuarters:12,submitQuarterText:`春季提交（Q3）`},{name:`${e}面上项目`,funding:6e5,durationQuarters:16,submitQuarterText:`春季提交（Q3）`},{name:`${e}重点项目`,funding:12e5,durationQuarters:20,submitQuarterText:`春季提交（Q3）`,minTitle:`准聘副教授`},{name:`企业横向课题（小型）`,funding:2e5,durationQuarters:4,submitQuarterText:`全年滚动受理`},{name:`企业横向课题（大型）`,funding:8e5,durationQuarters:8,submitQuarterText:`全年滚动受理`,minTitle:`准聘副教授`}]});function o(e){return e?(i[t.title]??0)>=(i[e]??0):!0}return(t,n)=>(d(),k(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(Y),{title:`在研项目`,size:`small`},{default:h(()=>[_(l(ot),{bordered:``},{default:h(()=>[e.projects.length===0?(d(),k(l(st),{key:0},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[0]||=[C(`暂无在研项目`,-1)]]),_:1})]),_:1})):D(``,!0),(d(!0),w(b,null,m(e.projects,e=>(d(),k(l(st),{key:e.id},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`,style:{width:`100%`}},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),null,{default:h(()=>[C(c(e.type),1)]),_:2},1024),_(l(J),{depth:`3`},{default:h(()=>[C(`经费 ¥`+c(e.funding.toLocaleString())+` · 剩余周期 `+c(e.remainingQuarters)+` 季`,1)]),_:2},1024)]),_:2},1024),_(l($),{type:`warning`},{default:h(()=>[C(`需论文 `+c(e.requiredPapers)+` 篇`,1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),_(l(Y),{title:r.value?`可申请项目：国自然 + 横向课题`:`可申请项目：国社科 + 横向课题`,size:`small`},{default:h(()=>[_(l(wr),{type:`info`,"show-icon":!1,class:`apply-note`},{default:h(()=>[C(` 当前季度：Q`+c(e.currentQuarter)+`。国自然/国社科项目在春季窗口提交，对应游戏内 Q3；重点项目需副教授及以上职称。 `,1)]),_:1}),_(l(ot),{bordered:``},{default:h(()=>[(d(!0),w(b,null,m(a.value,e=>(d(),k(l(st),{key:e.name},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`,style:{width:`100%`}},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),null,{default:h(()=>[C(c(e.name),1)]),_:2},1024),_(l(J),{depth:`3`},{default:h(()=>[C(` 经费 ¥`+c(e.funding.toLocaleString())+` · 项目周期 `+c(e.durationQuarters)+` 季 · `+c(e.submitQuarterText),1)]),_:2},1024)]),_:2},1024),_(l(V),null,{default:h(()=>[e.minTitle?(d(),k(l($),{key:0,type:o(e.minTitle)?`success`:`warning`},{default:h(()=>[C(c(e.minTitle)+`及以上 `,1)]),_:2},1032,[`type`])):D(``,!0),_(l($),{type:o(e.minTitle)?`success`:`default`},{default:h(()=>[C(c(o(e.minTitle)?`可申请`:`暂不可申请`),1)]),_:2},1032,[`type`])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,[`title`])]),_:1}))}}),[[`__scopeId`,`data-v-aba6847f`]]),Mi=j(M({__name:`CenterPanel`,props:{papers:{},students:{},projects:{},fixedAssets:{},canInterview:{type:Boolean},disciplineCategory:{},title:{},currentQuarter:{},name:{},major:{}},emits:[`openInterview`,`openPapers`],setup(e,{emit:t}){let n=e,r=t,i=x(()=>({理学:`今天证个引理，明天顺便证明人生只是边界条件。`,工学:`只要系统还能跑，就先把故障命名为特色设计。`,农学:`作物会说话，只是基金委暂时不承认它会写摘要。`,文学:`批评现实之前，先给现实写三版更好的修辞。`,艺术学:`灵感没来之前，先把甲方的灵感哄睡。`,经济学:`模型可以失灵，但气势必须保持显著性。`,管理学:`世界是一张流程图，而我负责给箭头加备注。`,法学:`法条背到深夜，连电热水壶都想先走程序。`,政治学:`凡事先看结构，再看结构如何假装不是结构。`,教育学:`一边研究成长规律，一边被成长规律追着改作业。`,医学:`先稳住生命体征，再稳住论文返修意见。`,哲学:`当我开始追问意义时，DDL 已经替我回答了。`,历史学:`把前人的旧档案翻透，再给今天留一份新素材。`})[n.disciplineCategory]??`先把咖啡续上，再和命运讨论学术路径。`),a=x(()=>`${n.name}，现任 ${n.title}，主攻 ${n.major}。常驻 ${n.disciplineCategory} 赛道，在开会、改稿和自我说服之间寻找一种体面的平衡。`);return(t,n)=>(d(),k(l(Y),{size:`small`,class:`center-tabs-card`},{default:h(()=>[_(l(mi),{type:`line`,animated:``},{default:h(()=>[_(l(ui),{name:`home`,tab:`🏠 首页`},{default:h(()=>[_(l(V),{vertical:``,size:`large`},{default:h(()=>[_(l(Y),{size:`small`,title:`座右铭`},{default:h(()=>[_(l(J),{class:`home-quote`},{default:h(()=>[C(c(i.value),1)]),_:1})]),_:1}),_(l(Y),{size:`small`,title:`个人简介`},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),null,{default:h(()=>[C(c(a.value),1)]),_:1}),_(l(V),{wrap:``},{default:h(()=>[_(l($),{type:`info`},{default:h(()=>[C(`当前季度 Q`+c(e.currentQuarter),1)]),_:1}),_(l($),{type:`success`},{default:h(()=>[C(`论文 `+c(e.papers.length)+` 篇`,1)]),_:1}),_(l($),null,{default:h(()=>[C(c(e.disciplineCategory),1)]),_:1})]),_:1})]),_:1})]),_:1}),_(l(Y),{size:`small`,title:`快捷入口`},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[2]||=[C(`论文列表已经独立成单独页面，适合集中查看所有在研、投稿和录用状态。`,-1)]]),_:1}),_(l(Z),{type:`primary`,onClick:n[0]||=e=>r(`openPapers`)},{default:h(()=>[...n[3]||=[C(`进入论文页`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),_(l(ui),{name:`students`,tab:`🎓 学生`},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(V),{justify:`end`},{default:h(()=>[_(l(Z),{size:`small`,disabled:!e.canInterview,onClick:n[1]||=e=>r(`openInterview`)},{default:h(()=>[...n[4]||=[C(`🧪 学生面试`,-1)]]),_:1},8,[`disabled`])]),_:1}),_(l(ot),{bordered:``},{default:h(()=>[(d(!0),w(b,null,m(e.students,e=>(d(),k(l(st),{key:e.id},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`,style:{width:`100%`}},{default:h(()=>[_(l(J),null,{default:h(()=>[C(c(e.name)+`（`+c(e.type)+`）`,1)]),_:2},1024),_(l(V),null,{default:h(()=>[_(l($),null,{default:h(()=>[C(`压力 `+c(e.stress),1)]),_:2},1024),_(l($),{type:`success`},{default:h(()=>[C(`毕业 `+c(e.graduationProgress)+`%`,1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),_(l(ui),{name:`projects`,tab:`📁 项目`},{default:h(()=>[_(ji,{projects:e.projects,"discipline-category":e.disciplineCategory,title:e.title,"current-quarter":e.currentQuarter},null,8,[`projects`,`discipline-category`,`title`,`current-quarter`])]),_:1}),_(l(ui),{name:`fixed-assets`,tab:`🖥️ 资产`},{default:h(()=>[_(l(ot),{bordered:``},{default:h(()=>[e.fixedAssets.length===0?(d(),k(l(st),{key:0},{default:h(()=>[_(l(J),{depth:`3`},{default:h(()=>[...n[5]||=[C(`暂无登记固定资产`,-1)]]),_:1})]),_:1})):D(``,!0),(d(!0),w(b,null,m(e.fixedAssets,e=>(d(),k(l(st),{key:e.id},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`,style:{width:`100%`}},{default:h(()=>[_(l(V),{vertical:``,size:`small`},{default:h(()=>[_(l(J),null,{default:h(()=>[C(c(e.name),1)]),_:2},1024),_(l(J),{depth:`3`},{default:h(()=>[C(c(e.location),1)]),_:2},1024)]),_:2},1024),_(l($),{type:e.condition===`优`?`success`:e.condition===`良`?`info`:`warning`},{default:h(()=>[C(c(e.condition),1)]),_:2},1032,[`type`])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-ad2d8da4`]]),Ni=j(M({__name:`LogPanel`,props:{logs:{}},setup(e){function t(e){return e===`success`?`success`:e===`warning`?`warning`:`info`}return(n,r)=>(d(),k(l(Y),{title:`事件 / 日志`,size:`small`,class:`log-panel`},{default:h(()=>[_(l(ot),{bordered:``,class:`log-list`},{default:h(()=>[(d(!0),w(b,null,m(e.logs,e=>(d(),k(l(st),{key:e.id},{default:h(()=>[_(l(V),{vertical:``,size:`small`,style:{width:`100%`}},{default:h(()=>[_(l(V),{justify:`space-between`,align:`center`},{default:h(()=>[_(l($),{size:`small`,type:t(e.level)},{default:h(()=>[C(`Q`+c(e.turn),1)]),_:2},1032,[`type`]),_(l($),{size:`small`,type:t(e.level)},{default:h(()=>[C(c(e.level),1)]),_:2},1032,[`type`])]),_:2},1024),_(l(J),null,{default:h(()=>[C(c(e.message),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-5b16decf`]]),Pi=M({__name:`SettingsModal`,props:{show:{type:Boolean},modifier:{}},emits:[`update:show`,`updateModifier`],setup(e,{emit:t}){let n=t,r={.5:`0.5`,1:`1.0`,1.5:`1.5`,2:`2.0`};return(t,i)=>(d(),k(l(Ur),{preset:`card`,show:e.show,title:`设置`,style:{width:`min(520px, calc(100vw - 24px))`},"onUpdate:show":i[1]||=e=>n(`update:show`,e)},{default:h(()=>[_(l(Y),{size:`small`,title:`论文成功率修正系数`},{default:h(()=>[_(l(si),{value:e.modifier,step:.1,min:.5,max:2,marks:r,"onUpdate:value":i[0]||=e=>n(`updateModifier`,e)},null,8,[`value`]),_(l(J),{depth:`3`},{default:h(()=>[C(`当前：`+c(e.modifier.toFixed(1)),1)]),_:1})]),_:1})]),_:1},8,[`show`]))}}),Fi={class:`mobile-bottom-bar`},Ii=j(M({__name:`GamePage`,setup(t){let n=te(),{state:i,quarterText:a,currentQuarter:o,remainingTurns:s,appendLog:u,consumeEnergy:f,endTurn:p,saveGame:m}=We(),v=g(!1),y=g(!1),T=g(!1);function ee(){return[`理学`,`工学`,`农学`,`医学`].includes(i.profile.disciplineCategory)?`院士`:`一级教授`}function E(){let e=i.profile.title,t=ee();if(e===t){u(`职称申请未通过：你已是最高头衔 ${t}。`,`warning`);return}let n={助理研究员:{nextTitle:`准聘副教授`,publishedPapers:3,reputation:20,researchFunding:5e4},准聘副教授:{nextTitle:`长聘副教授`,publishedPapers:6,reputation:40,researchFunding:1e5},长聘副教授:{nextTitle:`教授`,publishedPapers:10,reputation:60,researchFunding:18e4},教授:{nextTitle:t,publishedPapers:15,reputation:80,researchFunding:3e5}}[e];if(!n){u(`职称申请未通过：当前头衔状态异常。`,`warning`);return}let r=[];if(i.resources.publishedPapers<n.publishedPapers&&r.push(`论文需达到 ${n.publishedPapers} 篇`),i.resources.reputation<n.reputation&&r.push(`声望需达到 ${n.reputation}`),i.resources.researchFunding<n.researchFunding&&r.push(`科研经费需达到 ¥${n.researchFunding.toLocaleString()}`),r.length>0){u(`职称申请未通过：${r.join(`；`)}。`,`warning`);return}i.profile.title=n.nextTitle,u(`职称申请通过：你已晋升为 ${n.nextTitle}。`,`success`)}function O(e){f(e.energyCost)&&(u(`执行行动：${e.label}，${e.note}`),e.label===`授课/教学`&&(i.resources.teachingScore=Math.min(100,i.resources.teachingScore+5)),e.label===`学术会议`&&(i.resources.researchFunding=Math.max(0,i.resources.researchFunding-2e3),i.resources.reputation=Math.min(100,i.resources.reputation+5)),e.key===`promotion`&&E(),m())}function A(){let e=p();m(),e===`ended`&&n.push(`/ending`)}function j(){if(i.resources.energy>0){y.value=!0;return}A()}function ne(){y.value=!1,A()}function re(e){i.settings.paperSuccessModifier=Number(e.toFixed(1)),u(`已调整论文成功率修正系数为 ${i.settings.paperSuccessModifier.toFixed(1)}`),m()}function M(){T.value=window.innerWidth<=768}function ie(){n.push(`/`)}function N(){n.push(`/create-role?from=game`)}function ae(){if(!F.value){u(`学生面试仅在 Q1 和 Q3 开放。`,`warning`);return}n.push(`/student-interview`)}function P(){n.push(`/papers`)}e(()=>{M(),window.addEventListener(`resize`,M)}),r(()=>{window.removeEventListener(`resize`,M)});let oe=x(()=>i.resources.publishedPapers),F=x(()=>o.value===1||o.value===3);return(e,t)=>(d(),k(l(Tr),null,{default:h(()=>[_(l(je),{class:`app-shell`},{default:h(()=>[_(l(Be),{class:`app-content`},{default:h(()=>[T.value?D(``,!0):(d(),k(bi,{key:0,"quarter-text":l(a),"remaining-turns":l(s),energy:l(i).resources.energy,"energy-max":l(i).resources.energyMax,"research-funding":l(i).resources.researchFunding,"published-papers":oe.value},null,8,[`quarter-text`,`remaining-turns`,`energy`,`energy-max`,`research-funding`,`published-papers`])),_(wi,{name:l(i).profile.name,gender:l(i).profile.gender,age:l(i).profile.age,"discipline-category":l(i).profile.disciplineCategory,title:l(i).profile.title},null,8,[`name`,`gender`,`age`,`discipline-category`,`title`]),_(Ti,{health:l(i).resources.health,stress:l(i).resources.stress,"academic-ability":l(i).resources.academicAbility,"admin-ability":l(i).resources.adminAbility,reputation:l(i).resources.reputation},null,8,[`health`,`stress`,`academic-ability`,`admin-ability`,`reputation`]),T.value?(d(),w(b,{key:1},[_(Ai,{energy:l(i).resources.energy,onAction:O,onEndTurn:j,onOpenSettings:t[0]||=e=>v.value=!0},null,8,[`energy`]),_(Mi,{papers:l(i).papers,students:l(i).students,projects:l(i).projects,"fixed-assets":l(i).fixedAssets,"can-interview":F.value,"discipline-category":l(i).profile.disciplineCategory,title:l(i).profile.title,"current-quarter":l(o),name:l(i).profile.name,major:l(i).profile.major,onOpenInterview:ae,onOpenPapers:P},null,8,[`papers`,`students`,`projects`,`fixed-assets`,`can-interview`,`discipline-category`,`title`,`current-quarter`,`name`,`major`]),_(Ni,{logs:l(i).logs},null,8,[`logs`]),S(`div`,Fi,[_(bi,{"quarter-text":l(a),"remaining-turns":l(s),energy:l(i).resources.energy,"energy-max":l(i).resources.energyMax,"research-funding":l(i).resources.researchFunding,"published-papers":oe.value},null,8,[`quarter-text`,`remaining-turns`,`energy`,`energy-max`,`research-funding`,`published-papers`])])],64)):(d(),w(b,{key:2},[_(l(ni),{cols:24,"x-gap":12,"y-gap":12,responsive:`screen`},{default:h(()=>[_(l(Qr),{span:`24 s:24 m:24 l:5`},{default:h(()=>[_(Ai,{energy:l(i).resources.energy,onAction:O,onEndTurn:j,onOpenSettings:t[1]||=e=>v.value=!0},null,8,[`energy`])]),_:1}),_(l(Qr),{span:`24 s:24 m:24 l:13`},{default:h(()=>[_(Mi,{papers:l(i).papers,students:l(i).students,projects:l(i).projects,"fixed-assets":l(i).fixedAssets,"can-interview":F.value,"discipline-category":l(i).profile.disciplineCategory,title:l(i).profile.title,"current-quarter":l(o),name:l(i).profile.name,major:l(i).profile.major,onOpenInterview:ae,onOpenPapers:P},null,8,[`papers`,`students`,`projects`,`fixed-assets`,`can-interview`,`discipline-category`,`title`,`current-quarter`,`name`,`major`])]),_:1}),_(l(Qr),{span:`24 s:24 m:24 l:6`},{default:h(()=>[_(Ni,{logs:l(i).logs},null,8,[`logs`])]),_:1})]),_:1}),_(l(V),{justify:`end`,class:`footer-actions`},{default:h(()=>[_(l(Z),{onClick:N},{default:h(()=>[...t[6]||=[C(`🧑 角色信息`,-1)]]),_:1}),_(l(Z),{secondary:``,onClick:t[2]||=e=>v.value=!0},{default:h(()=>[...t[7]||=[C(`⚙️ 游戏设置`,-1)]]),_:1}),_(l(Z),{tertiary:``,onClick:ie},{default:h(()=>[...t[8]||=[C(`🏠 返回首屏`,-1)]]),_:1})]),_:1})],64)),_(Pi,{show:v.value,"onUpdate:show":t[3]||=e=>v.value=e,modifier:l(i).settings.paperSuccessModifier,onUpdateModifier:re},null,8,[`show`,`modifier`]),_(l(Ur),{show:y.value,"onUpdate:show":t[5]||=e=>y.value=e,preset:`card`,"mask-closable":!1,class:`end-turn-modal`},{default:h(()=>[_(l(Y),{title:`还有精力未使用`,bordered:!1,size:`small`,role:`dialog`,"aria-modal":`true`},{default:h(()=>[_(l(V),{vertical:``,size:`large`},{default:h(()=>[S(`span`,null,`当前还剩 `+c(l(i).resources.energy)+` 点精力，未使用的精力不会累计到下一回合。是否直接进入下一回合？`,1),_(l(V),{justify:`end`},{default:h(()=>[_(l(Z),{onClick:t[4]||=e=>y.value=!1},{default:h(()=>[...t[9]||=[C(`取消`,-1)]]),_:1}),_(l(Z),{type:`primary`,onClick:ne},{default:h(()=>[...t[10]||=[C(`直接进入下一回合`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`])]),_:1})]),_:1})]),_:1}))}}),[[`__scopeId`,`data-v-300274c6`]]);export{Ii as default};