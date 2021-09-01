(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[64],{1823:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n(42),l=n(64),c=n(2),s=n(4),u=n(95),m=n(1945),p=n(21),d=n(18),_=n(28),f=n(30),b=f.a.object().shape({upnp_enabled:f.a.boolean(),upnp_nat_pmp_enabled:f.a.boolean(),upnp_secure_mode:f.a.boolean(),upnp_wan_interface:f.a.string().when("upnp_enabled",{is:!0,then:f.a.string().label("SETTINGS_GATEWAY_UPNP_LABEL_WAN_NETWORK_GROUP").required()})}),h=n(1753),g=n(1754),E=n(1755),O=n(54),S=n(45),N=n(75);var v=({wanNetworkGroupOptions:e})=>{const{values:t,setFieldValue:n}=Object(S.e)();return Object(l.e)([Object(_.fetchNetworks)(void 0,{crudCacheStrategy:{type:c.a.CACHE}})],o.a.createElement(h.a,null,o.a.createElement(g.a,null,o.a.createElement(N.SearchableGridLabel,{htmlFor:"upnp_enabled",alignWith:"toggleSmall",label:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),description:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_DESCRIPTION"})}),o.a.createElement(E.a,{column:!0},o.a.createElement(O.Field,{type:"checkbox",name:"upnp_enabled"}))),o.a.createElement(g.a,{disabled:!t.upnp_enabled},o.a.createElement(N.SearchableGridLabel,{htmlFor:"upnp_wan_interface",alignWith:"dropdown",label:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_INTERNET_NETWORK_GROUP_SEARCH_TEXT"}),o.a.createElement(E.a,{column:!0},o.a.createElement(O.Field,{disabled:!t.upnp_enabled,full:!0,type:"dropdown",name:"upnp_wan_interface",options:e,translateOptions:!0}))),o.a.createElement(g.a,{disabled:!t.upnp_enabled},o.a.createElement(N.SearchableGridLabel,{htmlFor:"upnp_nat_pmp_enabled",alignWith:"toggleSmall",label:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NAT_PORT_MAPPING_PROTOCOL_SEARCH_TEXT"}),o.a.createElement(E.a,{column:!0},o.a.createElement(O.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_nat_pmp_enabled"}))),o.a.createElement(g.a,{disabled:!t.upnp_enabled},o.a.createElement(N.SearchableGridLabel,{htmlFor:"upnp_secure_mode",alignWith:"toggleSmall",label:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE"}),searchText:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_SECURE_MODE_SEARCH_TEXT"}),o.a.createElement(E.a,{column:!0},o.a.createElement(O.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_secure_mode"}))),Object.values(t.upnpNetworks).map(e=>o.a.createElement(g.a,{disabled:!t.upnp_enabled,key:e._id},o.a.createElement(N.SearchableGridLabel,{htmlFor:"upnp_lan_enabled_"+e._id,alignWith:"toggleSmall",label:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_NETWORKS",values:{network:e.name}})}),o.a.createElement(E.a,{column:!0},o.a.createElement(O.Field,{disabled:!t.upnp_enabled,type:"checkbox",name:"upnp_lan_enabled_"+e._id,value:e.upnp_lan_enabled,onChange:a=>{const o={...e,upnp_lan_enabled:a.currentTarget.checked};n("upnpNetworks",{...t.upnpNetworks,[e._id]:o})}}))))))};const C={upnp_enabled:!1,upnp_wan_interface:"",upnp_nat_pmp_enabled:!1,upnp_secure_mode:!1};var T=e=>{const{initialValues:t,onBack:n}=e,l=Object(r.useDispatch)(),c=Object(a.useContext)(u.l),f=Object(r.useSelector)(_.selectNetworksData),h=Object(r.useSelector)(_.selectCorporateAndGuestNetworks),g=Object(a.useMemo)(()=>f.filter(e=>Object(_.isWanNetwork)(e)&&e.attr_hidden_id!==_.NetworkHiddenId.WAN_LTE_FAILOVER).map(({wan_networkgroup:e})=>({label:`SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP_${e}_OPTION`,value:e})).sort((e,t)=>e.label<t.label?-1:1),[f]),E=Object(a.useMemo)(()=>({...C,...t,upnp_wan_interface:t.upnp_wan_interface||(g.length?g[0].value:C.upnp_wan_interface),upnpNetworks:h.reduce((e,t)=>({...e,[t._id]:{...t,upnp_lan_enabled:t.upnp_lan_enabled||!1}}),{})}),[t,h,g]),O=Object(a.useCallback)(({upnpNetworks:e,...t},{setSubmitting:a})=>{const o=Object.values(e).filter(({_id:e,upnp_lan_enabled:t})=>t!==(h.find(t=>e===t._id)||{}).upnp_lan_enabled);return l(Object(i.saveSettings)({...t})).then(()=>Promise.all(o.map(e=>l(Object(_.updateNetwork)(e,{},{}))))).then(()=>{l(Object(p.c)({icon:d.a.success,message:"SETTINGS_GATEWAY_UPNP_SAVE_SUCCESS"})),n()}).catch(e=>{l(Object(p.c)({errorMessage:e.msg,errorValues:e,icon:d.a.danger,message:"SETTINGS_GATEWAY_UPNP_SAVE_ERROR"})),a(!1)})},[l,h,n]);return o.a.createElement(m.b,{onSubmit:O,title:{component:o.a.createElement(s.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_UPNP"},initialValues:E,isEdit:!1,isView:c,onEscClicked:n,validationSchema:b,showBack:!0,goBack:n},o.a.createElement(v,{wanNetworkGroupOptions:g}))};const x={};t.default=()=>{const e=Object(r.useSelector)(i.selectUsgSettings),t=Object(l.g)();return Object(l.e)([Object(i.fetchSettings)({type:c.a.CACHE})],o.a.createElement(T,{initialValues:e||x,onBack:t}))}},1939:function(e,t,n){"use strict";var a=n(0),o=n(31);t.a=()=>{const e=Object(o.l)(),[t]=Object(a.useState)(e.pathname),[n,r]=Object(a.useState)(!1),i=Object(a.useRef)();return Object(a.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),a=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===a[0].length&&n[1]===a[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var a=n(25);Object(a.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return k}));var a=n(0),o=n.n(a),r=n(5),i=n(4),l=n(45),c=n(1973),s=n(1974),u=n(1948),m=n(799),p=n(95),d=n(1952),_=n(23),f=n(49),b=n(40),h=n(1848),g=n(793),E=n(1939);const O=r.a`
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
`;var S=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const l=Object(E.a)(),c=Object(g.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(h.a,Object.assign({appear:t||!c||l,in:t||!c||l,timeout:e,classNames:O,mountOnEnter:!0},i),n)),[n,t,c,l,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const N=r.a`
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
`;var v=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const l=Object(E.a)(),c=Object(g.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(h.a,Object.assign({appear:t||!c||l,in:t||!c||l,timeout:e,classNames:N,mountOnEnter:!0},i),n)),[n,t,c,l,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const C=Object(r.c)(p.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,T=Object(r.c)(p.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,x=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(r.c)(p.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,w=Object(r.c)(f.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var k=({title:e,showBack:t,goBack:n,onEscClicked:a,hideClose:r,ignoredPaths:i})=>{const{motif:l}=Object(b.a)();return o.a.createElement(v,{ignoredPaths:i},o.a.createElement(T,{flex:"none",height:"65px"},o.a.createElement(S,{ignoredPaths:i},o.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},o.a.createElement(C,{alignItems:"center",flex:"1",height:"100%"},t&&o.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:l},o.a.createElement(_.g,null))),o.a.createElement(x,null,o.a.createElement(w,{weight:"bold"},e.component)),o.a.createElement(C,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&o.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:a},o.a.createElement(_.A,null)))))))};const A=Object(r.c)(p.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,j=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,F=Object(r.c)(p.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,P=Object(r.c)(c.a)`
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,G=Object(r.c)(p.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,R=Object(r.c)(p.k)`
  height: 100%;
  width: 100%;
`;var I=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:a,isEdit:r,isView:c,showBack:m,title:_,unsavedChangesModalIgnoredPaths:f,onEscClicked:b,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:E,...O})=>o.a.createElement(l.c,Object.assign({enableReinitialize:!0},O),({dirty:r,handleReset:l,handleSubmit:O,isSubmitting:S})=>o.a.createElement(j,{autoComplete:"off",onSubmit:O},o.a.createElement(R,{vertical:!0},o.a.createElement(k,{goBack:n,hideClose:a,showBack:m,title:_,onEscClicked:b,ignoredPaths:f}),o.a.createElement(d.a,{ignoredPaths:f},o.a.createElement(G,{flex:"1"},o.a.createElement(A,{flex:"none",flexDirection:"column"},e))),!t&&!c&&o.a.createElement(u.a,{ignoredPaths:f,when:r&&!S}),(!c||g)&&o.a.createElement(P,{active:r||g},o.a.createElement(p.g,{justifyContent:E?"space-between":"flex-end",width:"100%",alignItems:"center"},E&&o.a.createElement(F,null,E(S)),!c&&o.a.createElement(p.g,null,o.a.createElement(s.a,{disabled:!r||S,type:"button",variant:"default",onClick:l},o.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),o.a.createElement(s.a,{disabled:!r||S,type:"submit",variant:"primary"},o.a.createElement(i.c,{id:h}))))))))},1948:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n(4),l=n(1949),c=n.n(l),s=n(1759),u=n(538),m=n(539);const p=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const l=Object(a.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),d=Object(m.a)(t),_=Object(a.useCallback)((e,t)=>t.pathname!==e.pathname,[]),f=Object(a.useCallback)(e=>(e={},t={})=>d(e,t)&&_(e,t),[d,_]);return!!e&&o.a.createElement(c.a,{when:f(t)},({onCancel:e,onConfirm:t})=>o.a.createElement(s.a,{actions:[{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:u.b,title:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},o.a.createElement(p,null,o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),l=(a=i)&&a.__esModule?a:{default:a},c=n(2);var s={action:null,isActive:!1,nextLocation:null},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=o({},s,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,r=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var l=i.listen((function(){l(),t._isMounted&&t.setState(o({},s,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](r),this._isMounted&&this.setState(o({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(o({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?l.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(l.default.Component);t.default=(0,c.withRouter)(u)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1848),i=n(5),l=n(793),c=n(1939);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...u})=>{const m=Object(c.a)(),p=Object(l.a)(n),d=Object(a.useMemo)(()=>o.a.Children.map(i,n=>null===n?n:o.a.createElement(r.a,Object.assign({appear:t||!p||m,in:t||!p||m,timeout:e,classNames:s,mountOnEnter:!0},u),n)),[i,t,p,m,e,u]);return o.a.createElement(o.a.Fragment,null,d)}},1973:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=n(523),c=n(40),s=n(235),u=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:m,marginX:p,marginY:d,marginTop:_,marginRight:f,marginBottom:b,marginLeft:h,padding:g="xxxxl",paddingX:E,paddingY:O,paddingTop:S,paddingRight:N,paddingBottom:v,paddingLeft:C,children:T,className:x,style:y,...w})=>{var k,A,j,F,P,G,R,I;const{motif:B}=Object(c.a)(),[U,L]=Object(a.useState)(0),W=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(W.current){const{height:e}=W.current.getBoundingClientRect();L(e)}},[]),Object(a.useEffect)(()=>{const e=Object(l.a)(()=>{if(W.current){const{height:e}=W.current.getBoundingClientRect();L(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),o.a.createElement("footer",Object.assign({className:i()(u.a.formFooter,s.a["margin-top-"+(null!==(A=null!==(k=null!=_?_:d)&&void 0!==k?k:m)&&void 0!==A?A:"")],s.a["margin-right-"+(null!==(F=null!==(j=null!=f?f:p)&&void 0!==j?j:m)&&void 0!==F?F:"")],s.a["margin-bottom-"+(null!==(G=null!==(P=null!=b?b:d)&&void 0!==P?P:m)&&void 0!==G?G:"")],s.a["margin-left-"+(null!==(I=null!==(R=null!=h?h:p)&&void 0!==R?R:m)&&void 0!==I?I:"")],x),style:{height:e?U:0,transform:`translateY(${e?0:U+"px"})`,...y}},w),o.a.createElement("div",{className:i()(u.a.formFooterContent,u.a["formFooterContent-align-"+t],u.a["formFooterContent-"+B],n&&u.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(S||O||g)],s.a["padding-right-"+(N||E||g)],s.a["padding-bottom-"+(v||O||g)],s.a["padding-left-"+(C||E||g)],r),ref:W},T))}},1974:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=n(800),c=n(170),s=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:a,...r})=>o.a.createElement(c.a,Object.assign({className:i()(t===l.b[0]&&s.a["formFooterButton-default-size-"+e],a),size:e,wrapClassName:i()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,n),variant:t},r))}}]);