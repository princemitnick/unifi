(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[65],{1814:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(64),i=n(4),c=n(8),l=n(13),s=n(2);const m="alert/setting",u="/v2/api/site/{site}/"+m;var p=n(669),E=n(1152);var f=function(e,t){return null==e||Object(E.a)(e,t)};const d=(e,t)=>Object(s.q)(m,u,"alertSetting",e,t),_=e=>Object(s.y)(m,"alertSetting",u,(e=>{const t=Object(p.a)(e.alert_type_settings);return Object.keys(t).forEach(e=>{f(t,[e,"label"]),f(t,[e,"level"]),f(t,[e,"description"])}),{...e,alert_type_settings:t}})(e),{},{extend:!0,mergeAndOverrideKeys:[]});var S=n(3);const b=Object(S.a)(e=>Object(s.t)(d(),e.models),e=>{var t;return null!==(t=null==e?void 0:e.data)&&void 0!==t?t:{}});var g,O,h;!function(e){e.AUTO="AUTO",e.CUSTOM="CUSTOM",e.OFF="OFF"}(g||(g={})),function(e){e.BASIC="BASIC",e.ADVANCED="ADVANCED"}(O||(O={})),function(e){e.DEVICE_CONNECTION="DEVICE_CONNECTION",e.BACKUP_CONNECTION_IN_USE="BACKUP_CONNECTION_IN_USE",e.CLIENT_WIFI_CONNECTION_ISSUE="CLIENT_WIFI_CONNECTION_ISSUE",e.FIRMWARE_UPDATE="FIRMWARE_UPDATE",e.CLIENT_CONNECTION="CLIENT_CONNECTION",e.VPN_CLIENT_CONNECTION="VPN_CLIENT_CONNECTION",e.HOTSPOT_CLIENT_CONNECTION="HOTSPOT_CLIENT_CONNECTION",e.UNASSIGNED_DEVICE_IP_ADDRESS="UNASSIGNED_DEVICE_IP_ADDRESS",e.ROGUE_ACCESS_POINT="ROGUE_ACCESS_POINT",e.AP_CHANNEL_CHANGE="AP_CHANNEL_CHANGE",e.BLOCKED_CLIENT_CONNECTION_ATTEMPT="BLOCKED_CLIENT_CONNECTION_ATTEMPT",e.RADIUS_SERVER_ISSUE="RADIUS_SERVER_ISSUE",e.AP_RADAR_DETECTION="AP_RADAR_DETECTION",e.DNS_SERVER_ISSUE="DNS_SERVER_ISSUE"}(h||(h={}));var C=n(1945),T=n(21),N=n(18),v=n(1917),x=n(1753),y=n(1754),A=n(1755),I=n(1924),F=n(5),j=n(45),R=n(845),k=n(95),L=n(126);const w=Object(F.c)(v.a)`
  margin-top: 23px;

  > li > div:first-child {
    span {
      text-transform: capitalize;
      font-size: 14px;
    }
  }
`,P=Object(F.c)("div")`
  margin-top: 42px;
`,U=Object(F.c)(x.a)`
  padding: 32px 0px !important;
`,B=Object(F.c)(y.a)`
  margin-bottom: 61px !important;
`,M=Object(F.c)(L.a)`
  margin-right: 8px;
`,D=Object(F.c)(A.a)`
  justify-content: flex-end;
`,G=Object(F.c)(L.a)`
  width: auto !important;
  margin-left: 36px;

  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  > label {
    margin-right: 12px;
    color: ${({theme:e})=>e.motifPalette.text03};
  }
`;var z=()=>{const{values:{alert_type_settings:e,setting_preference:t}}=Object(j.e)();return o.a.createElement(U,null,o.a.createElement(B,null,o.a.createElement(R.f,{htmlFor:"setting_preference",label:o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_LABEL"}),description:t!==g.CUSTOM?o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_DESCRIPTION"}):null,alignWith:"toggle"}),o.a.createElement(A.a,{column:!0},o.a.createElement(k.g,null,o.a.createElement(M,{value:g.OFF,type:"togglebox",toggleboxType:"radio",name:"setting_preference"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_OFF"})),o.a.createElement(M,{value:g.AUTO,type:"togglebox",toggleboxType:"radio",name:"setting_preference"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_AUTO"})),o.a.createElement(M,{value:g.CUSTOM,type:"togglebox",toggleboxType:"radio",name:"setting_preference"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_CUSTOM"}))))),t===g.CUSTOM&&o.a.createElement(o.a.Fragment,null,Object.keys(e).map(t=>e[t].level===O.ADVANCED?null:o.a.createElement(y.a,{key:t},o.a.createElement(I.a,{label:o.a.createElement("span",null,e[t].label),description:o.a.createElement("span",null,e[t].description),alignWith:"toggleSmall"}),o.a.createElement(D,{unlimitedWidth:!0},o.a.createElement(G,{name:`alert_type_settings.${t}.send_mobile_push_notification`,type:"checkbox"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_PUSH_NOTIFICATIONS"})),o.a.createElement(G,{name:`alert_type_settings.${t}.send_email`,type:"checkbox"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_EMAIL_NOTIFICATIONS"}))))),o.a.createElement(w,{items:[{id:"advancedAlerts",label:o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ADVANCED_ACCORDION_LABEL"}),renderContent:()=>Object.keys(e).map(t=>e[t].level===O.BASIC?null:o.a.createElement(P,null,o.a.createElement(y.a,{key:t},o.a.createElement(I.a,{label:o.a.createElement("span",null,e[t].label),description:o.a.createElement("span",null,e[t].description),alignWith:"toggleSmall"}),o.a.createElement(D,{unlimitedWidth:!0},o.a.createElement(G,{name:`alert_type_settings.${t}.show_in_alert_page`,type:"checkbox"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_ALERTS_PAGE"})),o.a.createElement(G,{name:`alert_type_settings.${t}.send_mobile_push_notification`,type:"checkbox"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_PUSH_NOTIFICATIONS"})),o.a.createElement(G,{name:`alert_type_settings.${t}.send_email`,type:"checkbox"},o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_ALERT_PREFERENCE_EMAIL_NOTIFICATIONS"}))))))}],variant:"tertiary"})))};const V={isSubmitted:!1};var W=({onBack:e})=>{const t=Object(c.useDispatch)(),n=Object(c.useSelector)(b),m=Object(c.useSelector)(l.u),u=Object(a.useMemo)(()=>({...n}),[n]),p=Object(a.useCallback)((e,{setStatus:n,setSubmitting:a})=>t(_(e)).then(()=>{t(Object(T.c)({icon:N.a.success,message:"SETTINGS_SYSTEM_ALERTS_SAVE_SUCCESS"})),n({isSubmitted:!0})}).catch(e=>{t(Object(T.c)({errorMessage:e.msg,errorValues:e,icon:N.a.danger,message:"SETTINGS_SYSTEM_ALERTS_SAVE_ERROR"})),a(!1)}),[t]);return Object(r.e)([d(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],o.a.createElement(C.b,{goBack:e,hideClose:!0,initialStatus:V,initialValues:u,isEdit:!m,isView:m,showBack:!0,title:{component:o.a.createElement(i.c,{id:"SETTINGS_SYSTEM_ALERTS_FORM_TITLE"}),message:"alerts"},validationSchema:void 0,onEscClicked:e,onSubmit:p},o.a.createElement(z,null)))};t.default=()=>{const e=Object(r.g)();return o.a.createElement(W,{onBack:e})}},1939:function(e,t,n){"use strict";var a=n(0),o=n(31);t.a=()=>{const e=Object(o.l)(),[t]=Object(a.useState)(e.pathname),[n,r]=Object(a.useState)(!1),i=Object(a.useRef)();return Object(a.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),a=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===a[0].length&&n[1]===a[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var a=n(25);Object(a.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return I}));var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(45),l=n(1973),s=n(1974),m=n(1948),u=n(799),p=n(95),E=n(1952),f=n(23),d=n(49),_=n(40),S=n(1848),b=n(793),g=n(1939);const O=r.a`
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
`;var h=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(b.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(S.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:O,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const C=r.a`
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
`;var T=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(b.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(S.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:C,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const N=Object(r.c)(p.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,v=Object(r.c)(p.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,x=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(r.c)(p.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,A=Object(r.c)(d.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var I=({title:e,showBack:t,goBack:n,onEscClicked:a,hideClose:r,ignoredPaths:i})=>{const{motif:c}=Object(_.a)();return o.a.createElement(T,{ignoredPaths:i},o.a.createElement(v,{flex:"none",height:"65px"},o.a.createElement(h,{ignoredPaths:i},o.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},o.a.createElement(N,{alignItems:"center",flex:"1",height:"100%"},t&&o.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:c},o.a.createElement(f.g,null))),o.a.createElement(x,null,o.a.createElement(A,{weight:"bold"},e.component)),o.a.createElement(N,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&o.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:a},o.a.createElement(f.A,null)))))))};const F=Object(r.c)(p.g)`
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
`,R=Object(r.c)(p.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,k=Object(r.c)(l.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,L=Object(r.c)(p.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,w=Object(r.c)(p.k)`
  height: 100%;
  width: 100%;
`;var P=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:a,isEdit:r,isView:l,showBack:u,title:f,unsavedChangesModalIgnoredPaths:d,onEscClicked:_,submitText:S="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:b=!1,customFooterButtons:g,...O})=>o.a.createElement(c.c,Object.assign({enableReinitialize:!0},O),({dirty:r,handleReset:c,handleSubmit:O,isSubmitting:h})=>o.a.createElement(j,{autoComplete:"off",onSubmit:O},o.a.createElement(w,{vertical:!0},o.a.createElement(I,{goBack:n,hideClose:a,showBack:u,title:f,onEscClicked:_,ignoredPaths:d}),o.a.createElement(E.a,{ignoredPaths:d},o.a.createElement(L,{flex:"1"},o.a.createElement(F,{flex:"none",flexDirection:"column"},e))),!t&&!l&&o.a.createElement(m.a,{ignoredPaths:d,when:r&&!h}),(!l||b)&&o.a.createElement(k,{active:r||b},o.a.createElement(p.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&o.a.createElement(R,null,g(h)),!l&&o.a.createElement(p.g,null,o.a.createElement(s.a,{disabled:!r||h,type:"button",variant:"default",onClick:c},o.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),o.a.createElement(s.a,{disabled:!r||h,type:"submit",variant:"primary"},o.a.createElement(i.c,{id:S}))))))))},1948:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(1949),l=n.n(c),s=n(1759),m=n(538),u=n(539);const p=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const c=Object(a.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),E=Object(u.a)(t),f=Object(a.useCallback)((e,t)=>t.pathname!==e.pathname,[]),d=Object(a.useCallback)(e=>(e={},t={})=>E(e,t)&&f(e,t),[E,f]);return!!e&&o.a.createElement(l.a,{when:d(t)},({onCancel:e,onConfirm:t})=>o.a.createElement(s.a,{actions:[{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:m.b,title:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},o.a.createElement(p,null,o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=(a=i)&&a.__esModule?a:{default:a},l=n(2);var s={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=o({},s,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,r=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var c=i.listen((function(){c(),t._isMounted&&t.setState(o({},s,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](r),this._isMounted&&this.setState(o({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(o({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,l.withRouter)(m)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1848),i=n(5),c=n(793),l=n(1939);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...m})=>{const u=Object(l.a)(),p=Object(c.a)(n),E=Object(a.useMemo)(()=>o.a.Children.map(i,n=>null===n?n:o.a.createElement(r.a,Object.assign({appear:t||!p||u,in:t||!p||u,timeout:e,classNames:s,mountOnEnter:!0},m),n)),[i,t,p,u,e,m]);return o.a.createElement(o.a.Fragment,null,E)}},1973:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(523),l=n(40),s=n(235),m=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:u,marginX:p,marginY:E,marginTop:f,marginRight:d,marginBottom:_,marginLeft:S,padding:b="xxxxl",paddingX:g,paddingY:O,paddingTop:h,paddingRight:C,paddingBottom:T,paddingLeft:N,children:v,className:x,style:y,...A})=>{var I,F,j,R,k,L,w,P;const{motif:U}=Object(l.a)(),[B,M]=Object(a.useState)(0),D=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(D.current){const{height:e}=D.current.getBoundingClientRect();M(e)}},[]),Object(a.useEffect)(()=>{const e=Object(c.a)(()=>{if(D.current){const{height:e}=D.current.getBoundingClientRect();M(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),o.a.createElement("footer",Object.assign({className:i()(m.a.formFooter,s.a["margin-top-"+(null!==(F=null!==(I=null!=f?f:E)&&void 0!==I?I:u)&&void 0!==F?F:"")],s.a["margin-right-"+(null!==(R=null!==(j=null!=d?d:p)&&void 0!==j?j:u)&&void 0!==R?R:"")],s.a["margin-bottom-"+(null!==(L=null!==(k=null!=_?_:E)&&void 0!==k?k:u)&&void 0!==L?L:"")],s.a["margin-left-"+(null!==(P=null!==(w=null!=S?S:p)&&void 0!==w?w:u)&&void 0!==P?P:"")],x),style:{height:e?B:0,transform:`translateY(${e?0:B+"px"})`,...y}},A),o.a.createElement("div",{className:i()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+U],n&&m.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(h||O||b)],s.a["padding-right-"+(C||g||b)],s.a["padding-bottom-"+(T||O||b)],s.a["padding-left-"+(N||g||b)],r),ref:D},v))}},1974:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(800),l=n(170),s=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:a,...r})=>o.a.createElement(l.a,Object.assign({className:i()(t===c.b[0]&&s.a["formFooterButton-default-size-"+e],a),size:e,wrapClassName:i()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,n),variant:t},r))}}]);