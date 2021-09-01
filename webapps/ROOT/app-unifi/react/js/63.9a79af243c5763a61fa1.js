(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[63],{1828:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),i=n(28),c=n(42),s=n(64),l=n(2),m=n(4),u=n(1753),f=n(1754),p=n(1755),d=n(1945),b=n(21),h=n(95),g=n(54),O=n(75),_=n(18),S=n(30),E=S.a.object().shape({mdns_enabled:S.a.boolean()});var v=e=>{const{initialValues:t,onBack:n}=e,i=Object(r.useDispatch)(),s=Object(o.useContext)(h.l),l=Object(o.useCallback)((e,{setSubmitting:t})=>i(Object(c.saveSettings)(e)).then(()=>{i(Object(b.c)({icon:_.a.success,message:"SETTINGS_GATEWAY_MDNS_SAVE_SUCCESS"})),n()}).catch(e=>{i(Object(b.c)({errorMessage:e.msg,errorValues:e,icon:_.a.danger,message:"SETTINGS_GATEWAY_MDNS_SAVE_ERROR"})),t(!1)}),[i,n]),S=Object(o.useMemo)(()=>({mdns_enabled:!1,...t}),[t]);return a.a.createElement(d.b,{onSubmit:l,title:{component:a.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"},initialValues:S,isEdit:!1,isView:s,onEscClicked:n,validationSchema:E,showBack:!0,goBack:n},a.a.createElement(u.a,null,a.a.createElement(f.a,null,a.a.createElement(O.SearchableGridLabel,{htmlFor:"mdns_enabled",alignWith:"toggle",label:a.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS"}),description:a.a.createElement(m.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_MDNS_DESCRIPTION"})}),a.a.createElement(p.a,{column:!0},a.a.createElement(g.Field,{type:"checkbox",name:"mdns_enabled"})))))};const C={};t.default=()=>{const e=Object(r.useSelector)(c.selectUsgSettings),t=Object(s.g)();return Object(s.e)([Object(c.fetchSettings)({type:l.a.CACHE}),Object(i.fetchNetworks)(void 0,{crudCacheStrategy:{type:l.a.CACHE}})],a.a.createElement(v,{initialValues:e||C,onBack:t}))}},1939:function(e,t,n){"use strict";var o=n(0),a=n(31);t.a=()=>{const e=Object(a.l)(),[t]=Object(o.useState)(e.pathname),[n,r]=Object(o.useState)(!1),i=Object(o.useRef)();return Object(o.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),o=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===o[0].length&&n[1]===o[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var o=n(25);Object(o.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return F}));var o=n(0),a=n.n(o),r=n(5),i=n(4),c=n(45),s=n(1973),l=n(1974),m=n(1948),u=n(799),f=n(95),p=n(1952),d=n(23),b=n(49),h=n(40),g=n(1848),O=n(793),_=n(1939);const S=r.a`
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
`;var E=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(_.a)(),s=Object(O.a)(r),l=Object(o.useMemo)(()=>a.a.Children.map(n,n=>null===n?n:a.a.createElement(g.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:S,mountOnEnter:!0},i),n)),[n,t,s,c,e,i]);return a.a.createElement(a.a.Fragment,null,l)};const v=r.a`
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
`;var C=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(_.a)(),s=Object(O.a)(r),l=Object(o.useMemo)(()=>a.a.Children.map(n,n=>null===n?n:a.a.createElement(g.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:v,mountOnEnter:!0},i),n)),[n,t,s,c,e,i]);return a.a.createElement(a.a.Fragment,null,l)};const x=Object(r.c)(f.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,y=Object(r.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,j=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,k=Object(r.c)(f.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,N=Object(r.c)(b.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var F=({title:e,showBack:t,goBack:n,onEscClicked:o,hideClose:r,ignoredPaths:i})=>{const{motif:c}=Object(h.a)();return a.a.createElement(C,{ignoredPaths:i},a.a.createElement(y,{flex:"none",height:"65px"},a.a.createElement(E,{ignoredPaths:i},a.a.createElement(f.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},a.a.createElement(x,{alignItems:"center",flex:"1",height:"100%"},t&&a.a.createElement(k,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:c},a.a.createElement(d.g,null))),a.a.createElement(j,null,a.a.createElement(N,{weight:"bold"},e.component)),a.a.createElement(x,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&a.a.createElement(k,{legacy:!1,name:"closeButton",type:"button",onClick:o},a.a.createElement(d.A,null)))))))};const w=Object(r.c)(f.g)`
  width: 100%;
  max-width: ${u.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,A=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,T=Object(r.c)(f.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,B=Object(r.c)(s.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,G=Object(r.c)(f.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,M=Object(r.c)(f.k)`
  height: 100%;
  width: 100%;
`;var P=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:o,isEdit:r,isView:s,showBack:u,title:d,unsavedChangesModalIgnoredPaths:b,onEscClicked:h,submitText:g="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:_,...S})=>a.a.createElement(c.c,Object.assign({enableReinitialize:!0},S),({dirty:r,handleReset:c,handleSubmit:S,isSubmitting:E})=>a.a.createElement(A,{autoComplete:"off",onSubmit:S},a.a.createElement(M,{vertical:!0},a.a.createElement(F,{goBack:n,hideClose:o,showBack:u,title:d,onEscClicked:h,ignoredPaths:b}),a.a.createElement(p.a,{ignoredPaths:b},a.a.createElement(G,{flex:"1"},a.a.createElement(w,{flex:"none",flexDirection:"column"},e))),!t&&!s&&a.a.createElement(m.a,{ignoredPaths:b,when:r&&!E}),(!s||O)&&a.a.createElement(B,{active:r||O},a.a.createElement(f.g,{justifyContent:_?"space-between":"flex-end",width:"100%",alignItems:"center"},_&&a.a.createElement(T,null,_(E)),!s&&a.a.createElement(f.g,null,a.a.createElement(l.a,{disabled:!r||E,type:"button",variant:"default",onClick:c},a.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),a.a.createElement(l.a,{disabled:!r||E,type:"submit",variant:"primary"},a.a.createElement(i.c,{id:g}))))))))},1948:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(5),i=n(4),c=n(1949),s=n.n(c),l=n(1759),m=n(538),u=n(539);const f=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const c=Object(o.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),p=Object(u.a)(t),d=Object(o.useCallback)((e,t)=>t.pathname!==e.pathname,[]),b=Object(o.useCallback)(e=>(e={},t={})=>p(e,t)&&d(e,t),[p,d]);return!!e&&a.a.createElement(s.a,{when:b(t)},({onCancel:e,onConfirm:t})=>a.a.createElement(l.a,{actions:[{type:"button",text:a.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:a.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:m.b,title:a.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},a.a.createElement(f,null,a.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=(o=i)&&o.__esModule?o:{default:o},s=n(2);var l={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=a({},l,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,o=n.action,r=n.nextLocation;o={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[o||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===o){var c=i.listen((function(){c(),t._isMounted&&t.setState(a({},l,{unblock:i.block(t.block)}))}));i.goBack()}else i[o](r),this._isMounted&&this.setState(a({},l,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(a({},l))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,s.withRouter)(m)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1848),i=n(5),c=n(793),s=n(1939);const l=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...m})=>{const u=Object(s.a)(),f=Object(c.a)(n),p=Object(o.useMemo)(()=>a.a.Children.map(i,n=>null===n?n:a.a.createElement(r.a,Object.assign({appear:t||!f||u,in:t||!f||u,timeout:e,classNames:l,mountOnEnter:!0},m),n)),[i,t,f,u,e,m]);return a.a.createElement(a.a.Fragment,null,p)}},1973:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=n(523),s=n(40),l=n(235),m=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:u,marginX:f,marginY:p,marginTop:d,marginRight:b,marginBottom:h,marginLeft:g,padding:O="xxxxl",paddingX:_,paddingY:S,paddingTop:E,paddingRight:v,paddingBottom:C,paddingLeft:x,children:y,className:j,style:k,...N})=>{var F,w,A,T,B,G,M,P;const{motif:I}=Object(s.a)(),[z,L]=Object(o.useState)(0),R=Object(o.useRef)(null);return Object(o.useEffect)(()=>{if(R.current){const{height:e}=R.current.getBoundingClientRect();L(e)}},[]),Object(o.useEffect)(()=>{const e=Object(c.a)(()=>{if(R.current){const{height:e}=R.current.getBoundingClientRect();L(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),a.a.createElement("footer",Object.assign({className:i()(m.a.formFooter,l.a["margin-top-"+(null!==(w=null!==(F=null!=d?d:p)&&void 0!==F?F:u)&&void 0!==w?w:"")],l.a["margin-right-"+(null!==(T=null!==(A=null!=b?b:f)&&void 0!==A?A:u)&&void 0!==T?T:"")],l.a["margin-bottom-"+(null!==(G=null!==(B=null!=h?h:p)&&void 0!==B?B:u)&&void 0!==G?G:"")],l.a["margin-left-"+(null!==(P=null!==(M=null!=g?g:f)&&void 0!==M?M:u)&&void 0!==P?P:"")],j),style:{height:e?z:0,transform:`translateY(${e?0:z+"px"})`,...k}},N),a.a.createElement("div",{className:i()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+I],n&&m.a["formFooterContent-backgroundGradient"],l.a["padding-top-"+(E||S||O)],l.a["padding-right-"+(v||_||O)],l.a["padding-bottom-"+(C||S||O)],l.a["padding-left-"+(x||_||O)],r),ref:R},y))}},1974:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=n(800),s=n(170),l=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:o,...r})=>a.a.createElement(s.a,Object.assign({className:i()(t===c.b[0]&&l.a["formFooterButton-default-size-"+e],o),size:e,wrapClassName:i()("tertiary"===t?l.a.formFooterTertiaryButtonWrap:l.a.formFooterButtonWrap,n),variant:t},r))}}]);