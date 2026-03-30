import{G as e,N as t,b as n,d as r,v as i,x as a}from"./index-DDbOjlxV.js";import{J as o,O as s,R as c,T as l,_t as u,bt as d,et as f,gt as p,h as m,ht as h,mt as g,st as _,xt as v,z as y}from"./useGameState-BEhCyCv8.js";function b(e){let{textColor2:t,cardColor:n,modalColor:r,popoverColor:i,dividerColor:a,borderRadius:o,fontSize:s,hoverColor:c}=e;return{textColor:t,color:n,colorHover:c,colorModal:r,colorHoverModal:_(r,c),colorPopover:i,colorHoverPopover:_(i,c),borderColor:a,borderColorModal:_(r,a),borderColorPopover:_(i,a),borderRadius:o,fontSize:s}}var x={name:`List`,common:m,self:b},S=g([h(`list`,`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[u(`show-divider`,[h(`list-item`,[g(`&:not(:last-child)`,[p(`divider`,`
 background-color: var(--n-merged-border-color);
 `)])])]),u(`clickable`,[h(`list-item`,`
 cursor: pointer;
 `)]),u(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),u(`hoverable`,[h(`list-item`,`
 border-radius: var(--n-border-radius);
 `,[g(`&:hover`,`
 background-color: var(--n-merged-color-hover);
 `,[p(`divider`,`
 background-color: transparent;
 `)])])]),u(`bordered, hoverable`,[h(`list-item`,`
 padding: 12px 20px;
 `),p(`header, footer`,`
 padding: 12px 20px;
 `)]),p(`header, footer`,`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g(`&:not(:last-child)`,`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),h(`list-item`,`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p(`prefix`,`
 margin-right: 20px;
 flex: 0;
 `),p(`suffix`,`
 margin-left: 20px;
 flex: 0;
 `),p(`main`,`
 flex: 1;
 `),p(`divider`,`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),d(h(`list`,`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),v(h(`list`,`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),C=Object.assign(Object.assign({},l.props),{size:{type:String,default:`medium`},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),w=f(`n-list`),T=i({name:`List`,props:C,slots:Object,setup(n){let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedRtlRef:o}=y(n),u=s(`List`,o,i),d=l(`List`,`-list`,S,x,n,i);t(w,{showDividerRef:e(n,`showDivider`),mergedClsPrefixRef:i});let f=r(()=>{let{common:{cubicBezierEaseInOut:e},self:{fontSize:t,textColor:n,color:r,colorModal:i,colorPopover:a,borderColor:o,borderColorModal:s,borderColorPopover:c,borderRadius:l,colorHover:u,colorHoverModal:f,colorHoverPopover:p}}=d.value;return{"--n-font-size":t,"--n-bezier":e,"--n-text-color":n,"--n-color":r,"--n-border-radius":l,"--n-border-color":o,"--n-border-color-modal":s,"--n-border-color-popover":c,"--n-color-modal":i,"--n-color-popover":a,"--n-color-hover":u,"--n-color-hover-modal":f,"--n-color-hover-popover":p}}),p=a?c(`list`,void 0,f,n):void 0;return{mergedClsPrefix:i,rtlEnabled:u,cssVars:a?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r?.(),n(`ul`,{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},e.header?n(`div`,{class:`${t}-list__header`},e.header()):null,e.default?.call(e),e.footer?n(`div`,{class:`${t}-list__footer`},e.footer()):null)}}),E=i({name:`ListItem`,slots:Object,setup(){let e=a(w,null);return e||o(`list-item`,"`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{$slots:e,mergedClsPrefix:t}=this;return n(`li`,{class:`${t}-list-item`},e.prefix?n(`div`,{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?n(`div`,{class:`${t}-list-item__main`},e):null,e.suffix?n(`div`,{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&n(`div`,{class:`${t}-list-item__divider`}))}});export{T as n,E as t};