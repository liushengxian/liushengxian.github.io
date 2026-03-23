import{G as e,N as t,U as n,b as r,d as i,v as a}from"./index-X-kpf5ZD.js";import{O as o,R as s,T as c,U as l,X as u,_t as d,et as f,gt as p,h as m,ht as h,lt as g,mt as _,ot as v,q as y,vt as b,y as x,yt as S,z as C}from"./useGameState-CgcZhkar.js";var w={closeIconSizeTiny:`12px`,closeIconSizeSmall:`12px`,closeIconSizeMedium:`14px`,closeIconSizeLarge:`14px`,closeSizeTiny:`16px`,closeSizeSmall:`16px`,closeSizeMedium:`18px`,closeSizeLarge:`18px`,padding:`0 7px`,closeMargin:`0 0 0 4px`};function T(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:_,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:T,heightMedium:E,closeColorHover:D,closeColorPressed:O,buttonColor2Hover:k,buttonColor2Pressed:A,fontWeightStrong:j}=e;return Object.assign(Object.assign({},w),{closeBorderRadius:g,heightTiny:S,heightSmall:C,heightMedium:T,heightLarge:E,borderRadius:g,opacityDisabled:d,fontSizeTiny:_,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:k,colorPressedCheckable:A,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:D,closeColorPressed:O,borderPrimary:`1px solid ${v(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:v(i,{alpha:.12}),colorBorderedPrimary:v(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:v(i,{alpha:.12}),closeColorPressedPrimary:v(i,{alpha:.18}),borderInfo:`1px solid ${v(a,{alpha:.3})}`,textColorInfo:a,colorInfo:v(a,{alpha:.12}),colorBorderedInfo:v(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:v(a,{alpha:.12}),closeColorPressedInfo:v(a,{alpha:.18}),borderSuccess:`1px solid ${v(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:v(o,{alpha:.12}),colorBorderedSuccess:v(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:v(o,{alpha:.12}),closeColorPressedSuccess:v(o,{alpha:.18}),borderWarning:`1px solid ${v(s,{alpha:.35})}`,textColorWarning:s,colorWarning:v(s,{alpha:.15}),colorBorderedWarning:v(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:v(s,{alpha:.12}),closeColorPressedWarning:v(s,{alpha:.18}),borderError:`1px solid ${v(c,{alpha:.23})}`,textColorError:c,colorError:v(c,{alpha:.1}),colorBorderedError:v(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:v(c,{alpha:.12}),closeColorPressedError:v(c,{alpha:.18})})}var E={name:`Tag`,common:m,self:T},D={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},O=h(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[d(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),p(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),p(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),p(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),p(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),d(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[p(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),p(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),d(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),d(`icon, avatar`,[d(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),d(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),d(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[b(`disabled`,[_(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[b(`checked`,`color: var(--n-text-color-hover-checkable);`)]),_(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[b(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),d(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[b(`disabled`,[_(`&:hover`,`background-color: var(--n-color-checked-hover);`),_(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),k=Object.assign(Object.assign(Object.assign({},c.props),D),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),A=f(`n-tag`),j=a({name:`Tag`,props:k,slots:Object,setup(r){let a=n(null),{mergedBorderedRef:l,mergedClsPrefixRef:d,inlineThemeDisabled:f,mergedRtlRef:p,mergedComponentPropsRef:m}=C(r),h=i(()=>r.size||m?.value?.Tag?.size||`medium`),_=c(`Tag`,`-tag`,O,E,r,d);t(A,{roundRef:e(r,`round`)});function v(){if(!r.disabled&&r.checkable){let{checked:e,onCheckedChange:t,onUpdateChecked:n,"onUpdate:checked":i}=r;n&&n(!e),i&&i(!e),t&&t(!e)}}function b(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){let{onClose:t}=r;t&&y(t,e)}}let x={setTextContent(e){let{value:t}=a;t&&(t.textContent=e)}},w=o(`Tag`,p,d),T=i(()=>{let{type:e,color:{color:t,textColor:n}={}}=r,i=h.value,{common:{cubicBezierEaseInOut:a},self:{padding:o,closeMargin:s,borderRadius:c,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:f,textColorPressedCheckable:p,textColorChecked:m,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[S(`colorBordered`,e)]:D,[S(`closeSize`,i)]:O,[S(`closeIconSize`,i)]:k,[S(`fontSize`,i)]:A,[S(`height`,i)]:j,[S(`color`,e)]:M,[S(`textColor`,e)]:N,[S(`border`,e)]:P,[S(`closeIconColor`,e)]:F,[S(`closeIconColorHover`,e)]:I,[S(`closeIconColorPressed`,e)]:L,[S(`closeColorHover`,e)]:R,[S(`closeColorPressed`,e)]:z}}=_.value,B=g(s);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":a,"--n-border-radius":c,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":t||(l.value?D:M),"--n-color-checkable":v,"--n-color-checked":x,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":b,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":o,"--n-text-color":n||N,"--n-text-color-checkable":d,"--n-text-color-checked":m,"--n-text-color-hover-checkable":f,"--n-text-color-pressed-checkable":p}}),D=f?s(`tag`,i(()=>{let e=``,{type:t,color:{color:n,textColor:i}={}}=r;return e+=t[0],e+=h.value[0],n&&(e+=`a${u(n)}`),i&&(e+=`b${u(i)}`),l.value&&(e+=`c`),e}),T,r):void 0;return Object.assign(Object.assign({},x),{rtlEnabled:w,mergedClsPrefix:d,contentRef:a,mergedBordered:l,handleClick:v,handleCloseClick:b,cssVars:f?void 0:T,themeClass:D?.themeClass,onRender:D?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:n,closable:i,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let u=l(c.avatar,e=>e&&r(`div`,{class:`${t}-tag__avatar`},e)),d=l(c.icon,e=>e&&r(`div`,{class:`${t}-tag__icon`},e));return r(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:o,[`${t}-tag--avatar`]:u,[`${t}-tag--icon`]:d,[`${t}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||u,r(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&i?r(x,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?r(`div`,{class:`${t}-tag__border`,style:{borderColor:a}}):null)}});export{j as t};