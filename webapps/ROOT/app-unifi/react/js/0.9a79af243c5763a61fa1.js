(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[0],{1948:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(4),r=a(1949),o=a.n(r),s=a(1759),m=a(538),d=a(539);const p=Object(c.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:c=null})=>{const r=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),u=Object(d.a)(t),h=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),g=Object(n.useCallback)(e=>(e={},t={})=>u(e,t)&&h(e,t),[u,h]);return!!e&&i.a.createElement(o.a,{when:g(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>c?c(e):e()},{type:"button",text:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:r,parentSelector:m.b,title:i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>c?c(e):e()},i.a.createElement(p,null,i.a.createElement(l.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1950:function(e,t,a){"use strict";a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c})),a.d(t,"e",(function(){return V})),a.d(t,"d",(function(){return W.a})),a.d(t,"f",(function(){return W.c})),a.d(t,"h",(function(){return W.e})),a.d(t,"g",(function(){return W.d})),a.d(t,"i",(function(){return J}));var n=a(2060);a(2062),a(2063);var i=a(0),c=a.n(i),l=a(5);var r=({children:e="",className:t=null,full:a=!1,offset:n=1,size:i=6,...r})=>{const o=a?12:i,s=a?0:n;return c.a.createElement("div",Object.assign({className:Object(l.b)("col-"+o,"offset-"+s,t)},r),e)};var o=({children:e="",offset:t=0,size:a=2})=>c.a.createElement("div",{className:Object(l.b)("col-"+a,"offset-"+t)},e),s=a(4),m=a(701),d=a.n(m),p=a(95),u=a(2149),h=a(276),g=a(2120);const b=Object(l.c)(p.g)`
  border: 1px solid ${h.b.colors.yellow};
  border-radius: 4px;
  cursor: initial;
  margin-left: 8px;
  user-select: none;
`,E=Object(l.c)(u.b)`
  font-size: 8px !important;
  letter-spacing: 0.2px;
  padding: 3px 3px;
  white-space: nowrap;
`;var O=({state:e,className:t=null,...a})=>c.a.createElement(b,Object.assign({alignItems:"center",className:t,height:14,inline:!0,justifyContent:"center"},a),c.a.createElement(E,{message:g.b[e],status:u.a.WARNING})),f=a(75),x=a(82),v=a(8),j=a(41),y=a(64),N=a(16);const T={BORDER_WIDTH:2},S={LEFT:-17,PADDING_BOTTOM:15,PADDING_TOP:15,PADDING_X:15,TOP:-17},w=({type:e,size:t,width:a,height:n})=>{switch(e){case f.SearchHighlightType.FIELD:default:{const{LEFT:e,PADDING_BOTTOM:a,PADDING_TOP:n,PADDING_X:i,TOP:c}=S;return{top:c,left:e,padding:`${n}px ${i}px ${a}px`,width:100+100*(12-t)/t+"%",height:"100%"}}}};function C({type:e,forId:t,highlightStyle:a,highlightDelay:n,size:c,width:r,height:o}){const s=Object(v.useSelector)(f.selectHighlight),[m,d]=Object(y.c)(0),[p,u]=Object(y.c)(!1),h=Object(i.useRef)(null),g=Object(i.useMemo)(()=>(({color:e,show:t,style:a})=>Object(l.a)({"&::before":{border:`${T.BORDER_WIDTH}px solid ${t?e:"rgba(255, 255, 255, 0)"}`,borderRadius:7.5,boxShadow:t?"0 0 10px 0 "+e:"none",boxSizing:"content-box",content:"''",display:"block",pointerEvents:"none",position:"absolute",transition:"border-color 200ms ease, box-shadow 200ms ease",...a}}))({color:j.a["blue-light-3"],show:p,style:{...w({type:e,size:c,width:r,height:o}),...a}}),[p,e,a,c,r,o]);return Object(i.useEffect)(()=>{if(Number.isFinite(n)&&n>m)d(m+1);else if(h.current&&t===s.id&&s.type===e){window.getComputedStyle(h.current).border,window.getComputedStyle(h.current).boxShadow;let t=h.current.parentElement,n=null;for(;null!==t;){if("auto"===window.getComputedStyle(t).overflow){n=t;break}t=t.parentElement}if(n){const{bottom:t,height:i,top:c}=(({height:e,highlightRef:t,type:a,highlightStyle:n})=>{if(!t||!t.current)return{bottom:0,height:0,top:0};const{height:i,top:c}=t.current.getBoundingClientRect();switch(a){case f.SearchHighlightType.FIELD:default:{const{PADDING_BOTTOM:e,PADDING_TOP:t,TOP:a}=S,l=c+Object(N.a)(n,"top",a),r=l+i+Object(N.a)(n,"paddingBottom",e)+Object(N.a)(n,"paddingTop",t)+2*T.BORDER_WIDTH;return{bottom:r,height:r-l,top:l}}}})({height:o,highlightRef:h,type:e,highlightStyle:a}),{bottom:l,height:r,top:s}=n.getBoundingClientRect(),m=t>l,d=i>r,p=15;c<s||d?n.scrollTo({behavior:"smooth",top:n.scrollTop-s+c-p}):m&&n.scrollTo({behavior:"smooth",top:n.scrollTop+t-l+p})}u(!0)}},[o,m]),Object(i.useEffect)(()=>{p||s.id!==t||d(e=>e+1),p&&s.id!==t&&u(!1)},[s.id,p]),{highlightClassName:g,highlightRef:h}}const A=Object(l.c)(d.a)`
  color: ${x.a} !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,D=Object(l.c)(d.a)`
  color: white;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 1.6 !important;
  opacity: 0.7;
  transition: opacity 200ms ease;
`,_=l.a`
  cursor: pointer;
  user-select: none;

  &:hover {
    // Made the class plain text instead of \${StyledDescription} because TypeScript compiler breaks the interpolation
    .settingsGridDescription {
      opacity: 1;
    }

    // Same here
    .settingsGridLabel {
      color: white;
      opacity: 1;
    }
  }
`;var I=({text:e,badge:t=null,children:a=null,description:n="",descriptionValues:i={},dontTranslateText:r=!1,highlightDelay:o=null,highlightStyle:m=null,htmlFor:d=null,offset:p=0,size:u=5,useHtml:h=!1})=>{const{highlightClassName:g,highlightRef:b}=C({type:f.SearchHighlightType.FIELD,forId:d,highlightStyle:m,highlightDelay:o,size:u}),E=!(!n&&!a),x={["col-"+u]:!0,["offset-"+p]:p>0},v=h?s.b:s.c;return c.a.createElement("div",{className:Object(l.b)(x,_,g),ref:b},c.a.createElement("div",{className:"mb-1"},c.a.createElement(D,{className:"settingsGridLabel",htmlFor:d,primary:!0},r?e:c.a.createElement(s.c,{id:e})),t&&c.a.createElement(O,{state:t})),E&&c.a.createElement("div",null,c.a.createElement(A,{className:"settingsGridDescription",htmlFor:d,secondary:!0},n?c.a.createElement(v,{id:n,values:i}):a)))};const $=l.a`
  max-width: 960px;
`,R=({children:e="",className:t="",forwardedRef:a,leaveSpaceForValidationMessage:n=!1,marginTop:i=8,noWidthLimit:r=!1})=>{const o=n?4:i;return c.a.createElement("div",{className:Object(l.b)("row","mt-"+o,r?null:$,t),ref:a},e)};var G=c.a.forwardRef((e,t)=>c.a.createElement(R,Object.assign({forwardedRef:t},e))),M=a(47);var k=e=>c.a.createElement("div",{className:"mt-2 mb-6"},c.a.createElement(M.a,Object.assign({color:"white",weight:"400",size:"large"},e)));const H=Object(l.c)("div")`
  flex: 0 1 480px;
`,P=Object(l.c)("h2")`
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;var L=({text:e,className:t="",description:a="",highlightDelay:n=null,highlightStyle:i=null,section:r=null})=>{const o=h.b.sectionColors.common;return c.a.createElement(G,{className:t,marginTop:0},c.a.createElement(H,null,c.a.createElement(P,{className:Object(l.b)("mt-8","type-larger"),style:{color:o}},c.a.createElement(s.c,{id:e})),a&&c.a.createElement(M.a,{message:a,className:"mt-3",lineHeight:2,display:"block",size:"small"})))};const z=Object(l.c)("div")`
  > * {
    border-bottom: ${({noDivider:e})=>e?0:"1px solid var(--ubnt-color-border-primary)"};
  }

  &:last-child > * {
    border-bottom: 0;
  }
`,F=({children:e,className:t="",noBottomMargin:a=!1,noDivider:n=!1})=>c.a.createElement(z,{className:Object(l.b)("container","px-8",t),noDivider:n},c.a.createElement("div",{className:Object(l.b)({"pb-8":!a})},e));F.Content=r,F.Icon=o,F.Label=I,F.Row=G,F.SectionHeader=k,F.Subheader=L;var U=a(242);const B=Object(l.c)(U.c,{shouldForwardProp:e=>"withStickyButton"!==e&&"noPadding"!==e})`
  padding: ${({noPadding:e=!1,theme:t,withStickyButton:a=!1})=>e?"0":`0 ${2*parseInt(t.spacing["spacing-xxxxl"],10)}px ${a?2*parseInt(t.spacing["spacing-xxxl"],10)+"px":"0"}`};
`;var V=e=>c.a.createElement(B,Object.assign({},e)),W=a(1969),Y=a(175),Q=a(24);const J=({lastQuery:e=0})=>{const t=Object(v.useSelector)(Y.B);return e>0?c.a.createElement(Q.a,{alignItems:"center"},c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_CHECK_QUERY_STATUS_LABEL"})," ",c.a.createElement(s.a,{value:new Date(1e3*e),year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!t})):c.a.createElement(s.c,{id:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_STATUS_QUERY_NONE"})};a(1948)},1969:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return H}));var n=a(0),i=a.n(n),c=a(5),l=a(671),r=a(660),o=a(135);const s=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,m=(Object(c.c)(l.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(c.c)(o.a)`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  width: 214px;
`),d=Object(c.c)(r.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,p=e=>i.a.createElement(m,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),u=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var h=a(1972),g=a(233);const b=Object(c.c)(h.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,E=e=>c.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(g.b)(({theme:e,...t})=>i.a.createElement(b,Object.assign({headerRowClassName:E(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(2029),f=a(458),x=a(1763),v=a(4),j=a(30),y=a(23),N=a(1860),T=a(45),S=a(95),w=a(54);const C=Object(c.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,A=Object(c.c)(S.c)`
  > * {
    vertical-align: middle;
  }
`,D=Object(c.c)(S.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,_=Object(c.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,I=Object(c.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,$=Object(c.c)(S.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,R=Object(c.c)(D,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,G=Object(c.c)(S.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,M=Object(c.c)(S.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,k=Object(c.c)("div")`
  table {
    td {
      max-width: 170px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        height: 12px;
      }
    }
  }
`;var H=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:c,onRemoveItem:l,validationSchema:r,initialValues:o,onEditSubmit:s,useValuesInSchema:m=!1,max:p,useWindowTable:u=!1,addButtonText:g="COMMON_ACTION_ADD",...b}){const E=Object(n.useContext)(S.l),[O,H]=Object(n.useState)(!0),P=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(d,null,i.a.createElement(A,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{H(!1),l(t),await Promise.resolve(),H(!0)}},i.a.createElement(v.c,{id:"COMMON_ACTION_REMOVE"}))),[e,H,l]),L=Object(n.useMemo)(()=>u?N.a:h.a,[u]);return i.a.createElement(T.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:o,validationSchema:()=>m?j.a.lazy(e=>r(e)):r},({values:n,setFieldValue:r,handleSubmit:s,handleReset:m,setTouched:d})=>i.a.createElement(i.a.Fragment,null,t.map((a,l)=>i.a.createElement(C,{inline:a.inline,isLast:l===t.length-1,key:a.name},i.a.createElement(D,{flexDirection:"column",width:"100%"},i.a.createElement(w.Field,Object.assign({disabled:n.editActive||n[e].length>=p,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!E&&c&&l===t.length-1&&i.a.createElement(_,null,i.a.createElement(A,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),H(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await d(a,!0);t.find(e=>i[e.name])||c(n),H(!0)},Icon:y.ub,disabled:n.editActive||n[e].length>=p},i.a.createElement(v.c,{id:g}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,c)=>i.a.createElement($,{key:n.id,width:"100%"},b.columns.map((n,l)=>t[l]?i.a.createElement(R,{key:n.id,isLast:l===b.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(w.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${c}][${n.id}]`,type:t[l].type},"dropdown"!==t[l].type?{}:{options:t[l].options,translateLabel:!0,translateOptions:t[l].translateOptions,translatePlaceholder:!0,type:t[l].type,validated:t[l].validated}))):null))),i.a.createElement(G,{justifyContent:"flex-end",width:"100%"},i.a.createElement(M,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),r("editActive",!1)}},i.a.createElement(v.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(S.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(f.a)(Object(x.a)(n,"editActive"),Object(x.a)(o,"editActive"))},i.a.createElement(v.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(C,null,i.a.createElement(I,null,i.a.createElement(A,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),r("editActive",!0)},Icon:y.sb},i.a.createElement(v.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&O&&i.a.createElement(k,null,i.a.createElement(L,{columns:b.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:l?P:void 0})))))}},2029:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}},2059:function(e,t,a){"use strict";a.d(t,"a",(function(){return y})),a.d(t,"b",(function(){return T})),a.d(t,"c",(function(){return S}));var n=a(0),i=a.n(n),c=a(5),l=a(1199),r=a(49),o=a(2062),s=a(8),m=a(23),d=a(41),p=a(20),u=a(188),h=a(38);const g=Object(c.c)(u.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;var b=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(p.g)({modalType:h.a[a],modalProps:{closeModal:()=>t(Object(p.e)())}}))},[t,e]);return i.a.createElement(g,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(m.tb,{color:d.a["blue-3"]}))},E=a(2063),O=a(95),f=a(238);const x=Object(c.c)(O.c)`
  flex: none;
  width: 96px;
  height: 54px;
  border-radius: ${({theme:e})=>e.spacing["spacing-xs"]};
  opacity: 0.8;
  transition: opacity 100ms ease;
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:focus,
  &:hover {
    opacity: 1;
  }
`,v=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,j=Object(c.c)(m.tb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;var y,N=({video:e})=>{const t=Object(s.useDispatch)(),a=Object(s.useSelector)(f.a),c=Object(n.useCallback)(()=>{const a=`SETTINGS_${e.toUpperCase()}_INTRO`;t(Object(p.g)({modalType:h.a[a],modalProps:{closeModal:()=>t(Object(p.e)())}}))},[t,e]);return i.a.createElement(x,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(v,{alt:e,src:`${a}/settingsIntro/previews/${e}/preview.png`}),i.a.createElement(j,{color:d.a["blue-3"],size:"large"}))};!function(e){e.BASIC="basic",e.CONFIGURED="configured",e.STATUS="status",e.UNCONFIGURED="unconfigured"}(y||(y={}));const T=Object(c.c)(O.g)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,S=Object(c.c)(O.g)`
  * {
    line-height: 1.4 !important;
  }
`,w=Object(c.c)(l.a)`
  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  }
`;t.d=({label:e,type:t,description:a,section:n,status:c,video:l,online:s})=>{let m;switch(t){default:case y.BASIC:m=e;break;case y.CONFIGURED:m=i.a.createElement(S,{alignItems:"center"},e,!!n&&i.a.createElement(o.a,{section:n}),!!l&&s&&i.a.createElement(b,{video:l}));break;case y.STATUS:m=i.a.createElement(S,{alignItems:"center"},i.a.createElement(w,{variant:c}),i.a.createElement(T,{flex:"1",flexDirection:"column"},e,a&&i.a.createElement(r.a,null,a)));break;case y.UNCONFIGURED:m=i.a.createElement(S,{alignItems:"center"},!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{section:n}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(N,{video:l}),i.a.createElement(O.g,{flex:"0 1 128px",flexDirection:"column"},e,i.a.createElement(r.a,null,a))),!!l&&!s&&i.a.createElement(S,{alignItems:"center"},e))}return m}},2060:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m.d})),a.d(t,"c",(function(){return m.a}));var n=a(0),i=a.n(n),c=a(5),l=a(23),r=a(95);const o=Object(c.c)(r.g)`
  > * {
    color: ${({theme:e})=>e.motifPalette.interactiveText02} !important;
    font-size: ${({theme:e})=>e.fontSize["font-size-m"]} !important;

    &:not(:first-child) {
      margin-left: ${({theme:e})=>e.spacing["spacing-s"]} !important;
    }
  }
`;var s=({children:e,...t})=>i.a.createElement(o,Object.assign({alignItems:"center"},t),e,i.a.createElement(l.h,null)),m=a(2059)},2062:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(23),o=a(41),s=a(822),m=a(188);const d=Object(c.c)(m.c)`
  margin-left: ${({theme:e})=>e.spacing["spacing-xs"]};
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(d,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:a},i.a.createElement(r.tb,{color:o.a["blue-3"]}))}},2063:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(5),l=a(8),r=a(23),o=a(41),s=a(822),m=a(95),d=a(33);const p=Object(c.c)(m.c)`
  flex: none;
  width: 96px;
  height: 54px;
  border-radius: ${({theme:e})=>e.spacing["spacing-xs"]};
  opacity: 0.8;
  transition: opacity 100ms ease;
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:focus,
  &:hover {
    opacity: 1;
  }
`,u=Object(c.c)("img")`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`,h=Object(c.c)(r.tb)`
  left: 50%;
  margin-left: 0 !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  circle {
    fill: rgba(255, 255, 255, 0.7);
    stroke: rgba(255, 255, 255, 0);
  }
`;t.a=({section:e})=>{const t=Object(l.useDispatch)(),a=Object(l.useSelector)(d.h),c=Object(n.useCallback)(()=>t(Object(s.a)(e)),[t,e]);return i.a.createElement(p,{legacy:!1,name:"learn-more-"+e,variant:"inline",onClick:c},i.a.createElement(u,{alt:e,src:`${a}data/animations/${e}/previews/preview.png`}),i.a.createElement(h,{color:o.a["blue-3"],size:"large"}))}},2120:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),function(e){e.alpha="ALPHA",e.beta="BETA",e.comingSoon="COMING_SOON"}(n||(n={}));const i={[n.alpha]:"COMMON_BADGE_ALPHA",[n.beta]:"COMMON_BADGE_BETA",[n.comingSoon]:"COMMON_BADGE_COMING_SOON"};t.a=n},2149:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return n}));var n,i=a(0),c=a.n(i),l=a(1981),r=a.n(l),o=a(96),s=a.n(o),m=a(47);!function(e){e.DANGER="danger",e.NEUTRAL="neutral",e.NONE="none",e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning"}(n||(n={}));const d=s.a.bind(r.a);var p=({className:e=null,status:t=n.NEUTRAL,...a})=>c.a.createElement(m.a,Object.assign({},a,{className:d("ubntStatusText","ubntStatusText--"+t,e)}))}}]);