import{K as e,P as t,W as n,f as r,x as i,y as a}from"./index-TNNjk9SB.js";import{At as o,Ht as s,Nt as c,O as l,Rt as u,T as d,Ut as f,Vt as p,Wt as m,at as h,ft as g,g as _,gt as v,ot as y,wt as b,y as x,yt as S,zt as C}from"./useGameState-DpgkaksX.js";var w={closeIconSizeTiny:`12px`,closeIconSizeSmall:`12px`,closeIconSizeMedium:`14px`,closeIconSizeLarge:`14px`,closeSizeTiny:`16px`,closeSizeSmall:`16px`,closeSizeMedium:`18px`,closeSizeLarge:`18px`,padding:`0 7px`,closeMargin:`0 0 0 4px`};function T(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:s,warningColor:c,errorColor:l,baseColor:u,borderColor:d,opacityDisabled:f,tagColor:p,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,borderRadiusSmall:_,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:T,heightMedium:E,closeColorHover:D,closeColorPressed:O,buttonColor2Hover:k,buttonColor2Pressed:A,fontWeightStrong:j}=e;return Object.assign(Object.assign({},w),{closeBorderRadius:_,heightTiny:S,heightSmall:C,heightMedium:T,heightLarge:E,borderRadius:_,opacityDisabled:f,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:u,colorCheckable:`#0000`,colorHoverCheckable:k,colorPressedCheckable:A,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${d}`,textColor:t,color:p,colorBordered:`rgb(250, 250, 252)`,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,closeColorHover:D,closeColorPressed:O,borderPrimary:`1px solid ${o(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:o(i,{alpha:.12}),colorBorderedPrimary:o(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:o(i,{alpha:.12}),closeColorPressedPrimary:o(i,{alpha:.18}),borderInfo:`1px solid ${o(a,{alpha:.3})}`,textColorInfo:a,colorInfo:o(a,{alpha:.12}),colorBorderedInfo:o(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:o(a,{alpha:.12}),closeColorPressedInfo:o(a,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(c,{alpha:.35})}`,textColorWarning:c,colorWarning:o(c,{alpha:.15}),colorBorderedWarning:o(c,{alpha:.12}),closeIconColorWarning:c,closeIconColorHoverWarning:c,closeIconColorPressedWarning:c,closeColorHoverWarning:o(c,{alpha:.12}),closeColorPressedWarning:o(c,{alpha:.18}),borderError:`1px solid ${o(l,{alpha:.23})}`,textColorError:l,colorError:o(l,{alpha:.1}),colorBorderedError:o(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:o(l,{alpha:.12}),closeColorPressedError:o(l,{alpha:.18})})}var E={name:`Tag`,common:_,self:T},D={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},O=C(`tag`,`
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
`,[s(`strong`,`
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
 `),s(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[p(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),p(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),s(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),s(`icon, avatar`,[s(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),s(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),s(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[f(`disabled`,[u(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[f(`checked`,`color: var(--n-text-color-hover-checkable);`)]),u(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[f(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),s(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[f(`disabled`,[u(`&:hover`,`background-color: var(--n-color-checked-hover);`),u(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),k=Object.assign(Object.assign(Object.assign({},d.props),D),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),A=b(`n-tag`),j=a({name:`Tag`,props:k,slots:Object,setup(i){let a=n(null),{mergedBorderedRef:o,mergedClsPrefixRef:s,inlineThemeDisabled:u,mergedRtlRef:f,mergedComponentPropsRef:p}=y(i),g=r(()=>i.size||p?.value?.Tag?.size||`medium`),_=d(`Tag`,`-tag`,O,E,i,s);t(A,{roundRef:e(i,`round`)});function b(){if(!i.disabled&&i.checkable){let{checked:e,onCheckedChange:t,onUpdateChecked:n,"onUpdate:checked":r}=i;n&&n(!e),r&&r(!e),t&&t(!e)}}function x(e){if(i.triggerClickOnClose||e.stopPropagation(),!i.disabled){let{onClose:t}=i;t&&v(t,e)}}let C={setTextContent(e){let{value:t}=a;t&&(t.textContent=e)}},w=l(`Tag`,f,s),T=r(()=>{let{type:e,color:{color:t,textColor:n}={}}=i,r=g.value,{common:{cubicBezierEaseInOut:a},self:{padding:s,closeMargin:l,borderRadius:u,opacityDisabled:d,textColorCheckable:f,textColorHoverCheckable:p,textColorPressedCheckable:h,textColorChecked:v,colorCheckable:y,colorHoverCheckable:b,colorPressedCheckable:x,colorChecked:S,colorCheckedHover:C,colorCheckedPressed:w,closeBorderRadius:T,fontWeightStrong:E,[m(`colorBordered`,e)]:D,[m(`closeSize`,r)]:O,[m(`closeIconSize`,r)]:k,[m(`fontSize`,r)]:A,[m(`height`,r)]:j,[m(`color`,e)]:M,[m(`textColor`,e)]:N,[m(`border`,e)]:P,[m(`closeIconColor`,e)]:F,[m(`closeIconColorHover`,e)]:I,[m(`closeIconColorPressed`,e)]:L,[m(`closeColorHover`,e)]:R,[m(`closeColorPressed`,e)]:z}}=_.value,B=c(l);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":a,"--n-border-radius":u,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":t||(o.value?D:M),"--n-color-checkable":y,"--n-color-checked":S,"--n-color-checked-hover":C,"--n-color-checked-pressed":w,"--n-color-hover-checkable":b,"--n-color-pressed-checkable":x,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":d,"--n-padding":s,"--n-text-color":n||N,"--n-text-color-checkable":f,"--n-text-color-checked":v,"--n-text-color-hover-checkable":p,"--n-text-color-pressed-checkable":h}}),D=u?h(`tag`,r(()=>{let e=``,{type:t,color:{color:n,textColor:r}={}}=i;return e+=t[0],e+=g.value[0],n&&(e+=`a${S(n)}`),r&&(e+=`b${S(r)}`),o.value&&(e+=`c`),e}),T,i):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:w,mergedClsPrefix:s,contentRef:a,mergedBordered:o,handleClick:b,handleCloseClick:x,cssVars:u?void 0:T,themeClass:D?.themeClass,onRender:D?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let l=g(c.avatar,e=>e&&i(`div`,{class:`${t}-tag__avatar`},e)),u=g(c.icon,e=>e&&i(`div`,{class:`${t}-tag__icon`},e));return i(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:o,[`${t}-tag--avatar`]:l,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||l,i(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&r?i(x,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?i(`div`,{class:`${t}-tag__border`,style:{borderColor:a}}):null)}});export{j as t};