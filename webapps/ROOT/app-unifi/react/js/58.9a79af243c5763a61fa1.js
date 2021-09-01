(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[58],{1793:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),i=n(8),c=n(399),l=n(64),s=n(2),m=n(2147);const u={};t.default=()=>{const{id:e}=Object(r.m)(),t=Object(i.useSelector)(c.selectDynamicDnsData).find(t=>t._id===e),n=Object(l.g)();return Object(l.e)([Object(c.fetchDynamicDns)({crudCacheStrategy:{type:s.a.CACHE}})],o.a.createElement(m.a,{initialValues:t||u,onBack:n}))}},1939:function(e,t,n){"use strict";var a=n(0),o=n(31);t.a=()=>{const e=Object(o.l)(),[t]=Object(a.useState)(e.pathname),[n,r]=Object(a.useState)(!1),i=Object(a.useRef)();return Object(a.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),a=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===a[0].length&&n[1]===a[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var a=n(25);Object(a.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return G})),n.d(t,"a",(function(){return I}));var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(45),l=n(1973),s=n(1974),m=n(1948),u=n(799),p=n(95),f=n(1952),d=n(23),_=n(49),E=n(40),h=n(1848),b=n(793),g=n(1939);const S=r.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateX(15px);
  }
  &-appear-active,
  &-enter-active,
  &-appear-done,
  &-enter-done {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1) 130ms,
      transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1.4) 130ms;
  }
  &-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transform: translateX(15px);
    transition: opacity 100ms linear, transform 100ms linear;
  }
`;var O=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(b.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(h.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:S,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const N=r.a`
  &-appear,
  &-enter {
    border-bottom: transparent !important;
  }
  &-appear-active,
  &-enter-active,
  &-appear-done,
  &-enter-done {
    transition: border-bottom 150ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transition: opacity 100ms linear;
  }
`;var C=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(b.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(h.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:N,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const v=Object(r.c)(p.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,T=Object(r.c)(p.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,A=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,x=Object(r.c)(p.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,y=Object(r.c)(_.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var I=({title:e,showBack:t,goBack:n,onEscClicked:a,hideClose:r,ignoredPaths:i})=>{const{motif:c}=Object(E.a)();return o.a.createElement(C,{ignoredPaths:i},o.a.createElement(T,{flex:"none",height:"65px"},o.a.createElement(O,{ignoredPaths:i},o.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},o.a.createElement(v,{alignItems:"center",flex:"1",height:"100%"},t&&o.a.createElement(x,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:c},o.a.createElement(d.g,null))),o.a.createElement(A,null,o.a.createElement(y,{weight:"bold"},e.component)),o.a.createElement(v,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&o.a.createElement(x,{legacy:!1,name:"closeButton",type:"button",onClick:a},o.a.createElement(d.A,null)))))))};const F=Object(r.c)(p.g)`
  width: 100%;
  max-width: ${u.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,j=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,D=Object(r.c)(p.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,w=Object(r.c)(l.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,k=Object(r.c)(p.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,R=Object(r.c)(p.k)`
  height: 100%;
  width: 100%;
`;var G=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:a,isEdit:r,isView:l,showBack:u,title:d,unsavedChangesModalIgnoredPaths:_,onEscClicked:E,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:b=!1,customFooterButtons:g,...S})=>o.a.createElement(c.c,Object.assign({enableReinitialize:!0},S),({dirty:r,handleReset:c,handleSubmit:S,isSubmitting:O})=>o.a.createElement(j,{autoComplete:"off",onSubmit:S},o.a.createElement(R,{vertical:!0},o.a.createElement(I,{goBack:n,hideClose:a,showBack:u,title:d,onEscClicked:E,ignoredPaths:_}),o.a.createElement(f.a,{ignoredPaths:_},o.a.createElement(k,{flex:"1"},o.a.createElement(F,{flex:"none",flexDirection:"column"},e))),!t&&!l&&o.a.createElement(m.a,{ignoredPaths:_,when:r&&!O}),(!l||b)&&o.a.createElement(w,{active:r||b},o.a.createElement(p.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&o.a.createElement(D,null,g(O)),!l&&o.a.createElement(p.g,null,o.a.createElement(s.a,{disabled:!r||O,type:"button",variant:"default",onClick:c},o.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),o.a.createElement(s.a,{disabled:!r||O,type:"submit",variant:"primary"},o.a.createElement(i.c,{id:h}))))))))},1948:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(1949),l=n.n(c),s=n(1759),m=n(538),u=n(539);const p=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const c=Object(a.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),f=Object(u.a)(t),d=Object(a.useCallback)((e,t)=>t.pathname!==e.pathname,[]),_=Object(a.useCallback)(e=>(e={},t={})=>f(e,t)&&d(e,t),[f,d]);return!!e&&o.a.createElement(l.a,{when:_(t)},({onCancel:e,onConfirm:t})=>o.a.createElement(s.a,{actions:[{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:m.b,title:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},o.a.createElement(p,null,o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=(a=i)&&a.__esModule?a:{default:a},l=n(2);var s={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=o({},s,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,r=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var c=i.listen((function(){c(),t._isMounted&&t.setState(o({},s,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](r),this._isMounted&&this.setState(o({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(o({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,l.withRouter)(m)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1848),i=n(5),c=n(793),l=n(1939);const s=i.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateX(60px);
  }
  &-appear-active,
  &-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 100ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...m})=>{const u=Object(l.a)(),p=Object(c.a)(n),f=Object(a.useMemo)(()=>o.a.Children.map(i,n=>null===n?n:o.a.createElement(r.a,Object.assign({appear:t||!p||u,in:t||!p||u,timeout:e,classNames:s,mountOnEnter:!0},m),n)),[i,t,p,u,e,m]);return o.a.createElement(o.a.Fragment,null,f)}},1973:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(523),l=n(40),s=n(235),m=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:u,marginX:p,marginY:f,marginTop:d,marginRight:_,marginBottom:E,marginLeft:h,padding:b="xxxxl",paddingX:g,paddingY:S,paddingTop:O,paddingRight:N,paddingBottom:C,paddingLeft:v,children:T,className:A,style:x,...y})=>{var I,F,j,D,w,k,R,G;const{motif:M}=Object(l.a)(),[B,L]=Object(a.useState)(0),W=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(W.current){const{height:e}=W.current.getBoundingClientRect();L(e)}},[]),Object(a.useEffect)(()=>{const e=Object(c.a)(()=>{if(W.current){const{height:e}=W.current.getBoundingClientRect();L(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),o.a.createElement("footer",Object.assign({className:i()(m.a.formFooter,s.a["margin-top-"+(null!==(F=null!==(I=null!=d?d:f)&&void 0!==I?I:u)&&void 0!==F?F:"")],s.a["margin-right-"+(null!==(D=null!==(j=null!=_?_:p)&&void 0!==j?j:u)&&void 0!==D?D:"")],s.a["margin-bottom-"+(null!==(k=null!==(w=null!=E?E:f)&&void 0!==w?w:u)&&void 0!==k?k:"")],s.a["margin-left-"+(null!==(G=null!==(R=null!=h?h:p)&&void 0!==R?R:u)&&void 0!==G?G:"")],A),style:{height:e?B:0,transform:`translateY(${e?0:B+"px"})`,...x}},y),o.a.createElement("div",{className:i()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+M],n&&m.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(O||S||b)],s.a["padding-right-"+(N||g||b)],s.a["padding-bottom-"+(C||S||b)],s.a["padding-left-"+(v||g||b)],r),ref:W},T))}},1974:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(800),l=n(170),s=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:a,...r})=>o.a.createElement(l.a,Object.assign({className:i()(t===c.b[0]&&s.a["formFooterButton-default-size-"+e],a),size:e,wrapClassName:i()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,n),variant:t},r))},2147:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(8),i=n(4),c=n(44),l=n(170),s=n(399),m=n(28),u=n(1945),p=n(464),f=n(21),d=n(95),_=n(64),E=n(18),h=n(30),b=h.a.object().shape({interface:h.a.string(),service:h.a.string(),host_name:h.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),login:h.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),x_password:h.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_STATIC_ROUTES_NAME").required(),server:h.a.string()}),g={AFRAID:"afraid",DNS_PARK:"dnspark",DSL_REPORTS:"dslreports",DYN_DNS:"dyndns",EASY_DNS:"easydns",NAME_CHEAP:"namecheap",NO_IP:"noip",SITELUTIONS:"sitelutions",ZONE_EDIT:"zoneedit"},S=n(1753),O=n(1754),N=n(1924),C=n(1755),v=n(6),T=n(54);var A=()=>{const e=Object(r.useSelector)(v.selectWanInterfaceOptions),t=Object.values(g).map(e=>({value:e,label:e}));return o.a.createElement(S.a,null,o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"interface",alignWith:"select",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_INTERFACE"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,type:"dropdown",name:"interface",options:e}))),o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"service",alignWith:"select",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVICE"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,type:"dropdown",name:"service",options:t}))),o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"host_name",alignWith:"input",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,name:"host_name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_HOSTNAME"}))),o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"login",alignWith:"input",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,name:"login",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_USERNAME"}))),o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"x_password",alignWith:"input",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,passwordToggle:!0,type:"password",name:"x_password",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_PASSWORD"}))),o.a.createElement(O.a,null,o.a.createElement(N.a,{htmlFor:"server",alignWith:"input",label:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"})}),o.a.createElement(C.a,{column:!0},o.a.createElement(T.Field,{full:!0,name:"server",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_SERVER"}))))};const x=Object(c.a)(e=>({interface:m.NetworkPurpose.WAN,service:g.AFRAID,host_name:"",login:"",x_password:"",server:"",...e}));t.a=e=>{const{initialValues:t,onBack:n}=e,c=Object(r.useDispatch)(),m=Object(a.useContext)(d.l),h=Object(a.useCallback)((e,{setSubmitting:t})=>c(Object(s.saveDynamicDns)(e)).then(()=>{c(Object(f.c)({icon:E.a.success,message:"SETTINGS_GENERAL_SAVE_SUCCESS"})),n()}).catch(e=>{c(Object(f.c)({errorMessage:e.msg,errorValues:e,icon:E.a.danger,message:"SETTINGS_GENERAL_SAVE_ERROR"})),t(!1)}),[c,n]),g=!!t._id,S=Object(_.m)({component:o.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS"},m?"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_DYNAMIC_DNS_EDIT",t._id?t.host_name:void 0),O=Object(a.useCallback)(()=>{c(Object(p.b)({name:t.service,onConfirm:()=>c(Object(s.removeDynamicDns)(t)).then(n())}))},[c,t,n]);return o.a.createElement(u.b,{onSubmit:h,title:S,initialValues:x(t),isEdit:g,isView:m,onEscClicked:n,validationSchema:b,showBack:!0,goBack:n,footerActiveOverride:!!(null==t?void 0:t._id),customFooterButtons:e=>(null==t?void 0:t._id)&&o.a.createElement(l.a,{disabled:e,type:"button",variant:"default",onClick:O},o.a.createElement(i.c,{id:"COMMON_ACTION_REMOVE"}))},o.a.createElement(A,null))}}}]);