(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[44],{1830:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),i=n(8),c=n(211),l=n(64),s=n(2),u=n(2114),m=n(4),d=n(16),_=n(170),p=n(1753),f=n(1754),b=n(1924),O=n(1755),h=n(13),g=n(1945),E=n(464),S=n(21),v=n(54),x=n(1982),C=n(2190),A=n(41),T=n(5),w=n(24),N=n(1983),F=n(1995),y=n(2047);const D=Object(T.c)(w.a)`
  margin-left: ${A.a["spacing-xxxxl"]};
`,I=N.a.slice(0,2).map(({label:e,value:t,values:n})=>({label:e,value:y.a[t===F.a.K?"Kbps":"Mbps"],values:n})),j=({download:e})=>{const t=e?"qos_rate_max_down":"qos_rate_max_up",n=e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_LIMIT_DOWNLOAD_BANDWIDTH":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_LIMIT_UPLOAD_BANDWIDTH";return o.a.createElement(f.a,null,o.a.createElement(b.a,{htmlFor:t+"_value",alignWith:"input",label:o.a.createElement(m.c,{id:n}),description:o.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_DESCRIPTION_LIMIT_BANDWIDTH",values:{minKbps:u.c,maxKbps:u.b,minMbps:u.c/1e3,maxMbps:u.b/1e3}})}),o.a.createElement(O.a,null,o.a.createElement(w.a,{justifyContent:"space-between",width:"100%"},o.a.createElement(w.a,{width:"100%",flexFlow:"column"},o.a.createElement(v.Field,{full:!0,name:t+"_value",placeholder:"COMMON_WORD_UNLIMITED",type:"number"})),o.a.createElement(D,{width:"100%"},o.a.createElement(v.Field,{full:!0,name:t+"_unit",type:"dropdown",options:I,translateOptions:!0})))))};var B=e=>{const{initialValues:t,onBack:n}=e,r=Object(i.useDispatch)(),s=Object(i.useSelector)(h.u),A=!!Object(d.a)(t,"_id",!1),T=Object(l.m)({component:o.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_TITLE_CREATE"}),message:"bandwidth-profiles-create"},"bandwidth-profiles-edit-view",t._id?t.name:void 0),w=Object(a.useCallback)((...e)=>r(Object(S.c)(...e)),[]),N=Object(a.useCallback)(Object(x.c)({...e,createToast:w})(async e=>{const n={name:e.name,qos_rate_max_down:Object(C.e)(e,{download:!0}),qos_rate_max_up:Object(C.e)(e,{upload:!0})};return t._id?r(Object(c.updateUserGroup)(t._id,n)):r(Object(c.createUserGroup)(n))},({_id:e,name:t})=>({successMessage:e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_UPDATE_SUCCESS_TOAST":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_CREATE_SUCCESS_TOAST",failureMessage:e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_UPDATE_FAILURE_TOAST":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_CREATE_FAILURE_TOAST",msgValues:{name:t}})),[r,t,c.createUserGroup,c.updateUserGroup]),F=Object(a.useCallback)(()=>r(Object(E.b)({name:t.name,onConfirm:()=>r(Object(c.removeUserGroup)(t)).then(n())})),[r,t,n]);return o.a.createElement(g.b,{goBack:n,initialValues:t,isEdit:A,isView:s,showBack:!0,title:T,validationSchema:u.d,onEscClicked:n,onSubmit:N,footerActiveOverride:!!(null==t?void 0:t._id)&&!t.attr_no_delete,customFooterButtons:e=>(null==t?void 0:t._id)&&!t.attr_no_delete&&o.a.createElement(_.a,{disabled:e,type:"button",variant:"default",onClick:F},o.a.createElement(m.c,{id:"COMMON_ACTION_REMOVE"}))},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(b.a,{htmlFor:"name",alignWith:"input",label:o.a.createElement(m.c,{id:"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME"})}),o.a.createElement(O.a,{column:!0},o.a.createElement(v.Field,{full:!0,name:"name"}))),o.a.createElement(j,{download:!0}),o.a.createElement(j,{upload:!0})))};t.default=()=>{const{groupId:e}=Object(r.m)(),t=Object(i.useSelector)(c.selectUserGroupsData).find(({_id:t})=>t===e),n=Object(l.g)(),m=Object(a.useMemo)(()=>(null==t?void 0:t._id)?{...u.a,...t,qos_rate_max_down_toggle:Object(C.b)(t,{download:!0}),qos_rate_max_down_unit:Object(C.c)(t,{download:!0}),qos_rate_max_down_value:Object(C.d)(t,{download:!0}),qos_rate_max_up_toggle:Object(C.b)(t,{upload:!0}),qos_rate_max_up_unit:Object(C.c)(t,{upload:!0}),qos_rate_max_up_value:Object(C.d)(t,{upload:!0})}:{...u.a},[t]);return Object(l.e)([Object(c.fetchUserGroups)(void 0,{crudCacheStrategy:{type:s.a.CACHE}})],o.a.createElement(B,{initialValues:m,onBack:n}))}},1939:function(e,t,n){"use strict";var a=n(0),o=n(31);t.a=()=>{const e=Object(o.l)(),[t]=Object(a.useState)(e.pathname),[n,r]=Object(a.useState)(!1),i=Object(a.useRef)();return Object(a.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),a=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===a[0].length&&n[1]===a[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var a=n(25);Object(a.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return F}));var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(45),l=n(1973),s=n(1974),u=n(1948),m=n(799),d=n(95),_=n(1952),p=n(23),f=n(49),b=n(40),O=n(1848),h=n(793),g=n(1939);const E=r.a`
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
`;var S=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(h.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(O.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:E,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const v=r.a`
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
`;var x=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const c=Object(g.a)(),l=Object(h.a)(r),s=Object(a.useMemo)(()=>o.a.Children.map(n,n=>null===n?n:o.a.createElement(O.a,Object.assign({appear:t||!l||c,in:t||!l||c,timeout:e,classNames:v,mountOnEnter:!0},i),n)),[n,t,l,c,e,i]);return o.a.createElement(o.a.Fragment,null,s)};const C=Object(r.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,A=Object(r.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,T=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,w=Object(r.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,N=Object(r.c)(f.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var F=({title:e,showBack:t,goBack:n,onEscClicked:a,hideClose:r,ignoredPaths:i})=>{const{motif:c}=Object(b.a)();return o.a.createElement(x,{ignoredPaths:i},o.a.createElement(A,{flex:"none",height:"65px"},o.a.createElement(S,{ignoredPaths:i},o.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},o.a.createElement(C,{alignItems:"center",flex:"1",height:"100%"},t&&o.a.createElement(w,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:c},o.a.createElement(p.g,null))),o.a.createElement(T,null,o.a.createElement(N,{weight:"bold"},e.component)),o.a.createElement(C,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&o.a.createElement(w,{legacy:!1,name:"closeButton",type:"button",onClick:a},o.a.createElement(p.A,null)))))))};const y=Object(r.c)(d.g)`
  width: 100%;
  max-width: ${m.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,D=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,I=Object(r.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(r.c)(l.a)`
  > :first-child {
    max-width: ${m.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,B=Object(r.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,M=Object(r.c)(d.k)`
  height: 100%;
  width: 100%;
`;var k=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:a,isEdit:r,isView:l,showBack:m,title:p,unsavedChangesModalIgnoredPaths:f,onEscClicked:b,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:h=!1,customFooterButtons:g,...E})=>o.a.createElement(c.c,Object.assign({enableReinitialize:!0},E),({dirty:r,handleReset:c,handleSubmit:E,isSubmitting:S})=>o.a.createElement(D,{autoComplete:"off",onSubmit:E},o.a.createElement(M,{vertical:!0},o.a.createElement(F,{goBack:n,hideClose:a,showBack:m,title:p,onEscClicked:b,ignoredPaths:f}),o.a.createElement(_.a,{ignoredPaths:f},o.a.createElement(B,{flex:"1"},o.a.createElement(y,{flex:"none",flexDirection:"column"},e))),!t&&!l&&o.a.createElement(u.a,{ignoredPaths:f,when:r&&!S}),(!l||h)&&o.a.createElement(j,{active:r||h},o.a.createElement(d.g,{justifyContent:g?"space-between":"flex-end",width:"100%",alignItems:"center"},g&&o.a.createElement(I,null,g(S)),!l&&o.a.createElement(d.g,null,o.a.createElement(s.a,{disabled:!r||S,type:"button",variant:"default",onClick:c},o.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),o.a.createElement(s.a,{disabled:!r||S,type:"submit",variant:"primary"},o.a.createElement(i.c,{id:O}))))))))},1948:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(5),i=n(4),c=n(1949),l=n.n(c),s=n(1759),u=n(538),m=n(539);const d=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:n=null,onStay:r=null})=>{const c=Object(a.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),_=Object(m.a)(t),p=Object(a.useCallback)((e,t)=>t.pathname!==e.pathname,[]),f=Object(a.useCallback)(e=>(e={},t={})=>_(e,t)&&p(e,t),[_,p]);return!!e&&o.a.createElement(l.a,{when:f(t)},({onCancel:e,onConfirm:t})=>o.a.createElement(s.a,{actions:[{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>n?n(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:c,parentSelector:u.b,title:o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},o.a.createElement(d,null,o.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=(a=i)&&a.__esModule?a:{default:a},l=n(2);var s={action:null,isActive:!1,nextLocation:null},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=o({},s,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,r=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var c=i.listen((function(){c(),t._isMounted&&t.setState(o({},s,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](r),this._isMounted&&this.setState(o({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(o({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,l.withRouter)(u)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1848),i=n(5),c=n(793),l=n(1939);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...u})=>{const m=Object(l.a)(),d=Object(c.a)(n),_=Object(a.useMemo)(()=>o.a.Children.map(i,n=>null===n?n:o.a.createElement(r.a,Object.assign({appear:t||!d||m,in:t||!d||m,timeout:e,classNames:s,mountOnEnter:!0},u),n)),[i,t,d,m,e,u]);return o.a.createElement(o.a.Fragment,null,_)}},1973:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(523),l=n(40),s=n(235),u=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:m,marginX:d,marginY:_,marginTop:p,marginRight:f,marginBottom:b,marginLeft:O,padding:h="xxxxl",paddingX:g,paddingY:E,paddingTop:S,paddingRight:v,paddingBottom:x,paddingLeft:C,children:A,className:T,style:w,...N})=>{var F,y,D,I,j,B,M,k;const{motif:L}=Object(l.a)(),[U,R]=Object(a.useState)(0),P=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(P.current){const{height:e}=P.current.getBoundingClientRect();R(e)}},[]),Object(a.useEffect)(()=>{const e=Object(c.a)(()=>{if(P.current){const{height:e}=P.current.getBoundingClientRect();R(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),o.a.createElement("footer",Object.assign({className:i()(u.a.formFooter,s.a["margin-top-"+(null!==(y=null!==(F=null!=p?p:_)&&void 0!==F?F:m)&&void 0!==y?y:"")],s.a["margin-right-"+(null!==(I=null!==(D=null!=f?f:d)&&void 0!==D?D:m)&&void 0!==I?I:"")],s.a["margin-bottom-"+(null!==(B=null!==(j=null!=b?b:_)&&void 0!==j?j:m)&&void 0!==B?B:"")],s.a["margin-left-"+(null!==(k=null!==(M=null!=O?O:d)&&void 0!==M?M:m)&&void 0!==k?k:"")],T),style:{height:e?U:0,transform:`translateY(${e?0:U+"px"})`,...w}},N),o.a.createElement("div",{className:i()(u.a.formFooterContent,u.a["formFooterContent-align-"+t],u.a["formFooterContent-"+L],n&&u.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(S||E||h)],s.a["padding-right-"+(v||g||h)],s.a["padding-bottom-"+(x||E||h)],s.a["padding-left-"+(C||g||h)],r),ref:P},A))}},1974:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=n(800),l=n(170),s=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:a,...r})=>o.a.createElement(l.a,Object.assign({className:i()(t===c.b[0]&&s.a["formFooterButton-default-size-"+e],a),size:e,wrapClassName:i()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,n),variant:t},r))},1982:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));var a=n(18),o=function(e,t){var n=t.successMessage,a=t.failureMessage;if((n||a)&&!e.createToast)throw new Error("formSubmit util requires createToast action as a prop. Please add it to mapDispatchToProps")},r=function(e){return function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(i,c){var l=c.props||t;o(l,r);var s=l.createToast,u="function"==typeof r?r(i):r,m=u.msgValues,d=u.successMessage,_=u.failureMessage;n(i,l,c).then((function(){return d&&s({icon:a.a.success,message:d,values:m}),e(c,t)})).catch((function(e){_&&s({icon:a.a.danger,message:_,values:m,errorMessage:e.msg,errorValues:e}),c.setSubmitting(!1)}))}}}},i=r((function(e){return e.setStatus({isSubmitted:!0})}))(),c=r((function(e){return e.setStatus({isSubmitted:!0})})),l=(r((function(e){return e.props.onClose()}))(),r((function(e,t){return t.onBack()})))},1983:function(e,t,n){"use strict";var a=n(1995);const o=[{value:a.a.K,label:"COMMON_UNIT_BPS",values:{prefix:a.a.K}},{value:a.a.M,label:"COMMON_UNIT_BPS",values:{prefix:a.a.M}},{value:a.a.G,label:"COMMON_UNIT_BPS",values:{prefix:a.a.G}}];t.a=o},1995:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.K="k",e.M="M",e.G="G"}(a||(a={}))},2047:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.Kbps="1",e.Mbps="1000"}(a||(a={}))},2114:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c}));var a=n(2047),o={name:"",qos_rate_max_down_toggle:!1,qos_rate_max_down_unit:a.a.Kbps,qos_rate_max_down_value:"",qos_rate_max_up_toggle:!1,qos_rate_max_up_unit:a.a.Kbps,qos_rate_max_up_value:""},r=n(30);const i=1e5,c=2,l=({download:e,upload:t})=>{const n=e?"qos_rate_max_down":"qos_rate_max_up",o=e?"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD":"SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD";return r.a.number().label(o).when(n+"_unit",{is:e=>e===a.a.Kbps,then:r.a.number().max(i).min(c)}).when(n+"_unit",{is:e=>e===a.a.Mbps,then:r.a.number().max(i/1e3).min(c/1e3)})};var s=r.a.object().shape({name:r.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_TABLE_LABEL_NAME").required(),qos_rate_max_down_toggle:r.a.boolean().required(),qos_rate_max_down_unit:r.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_DOWNLOAD").oneOf(Object.values(a.a)).required(),qos_rate_max_down_value:l({download:!0}),qos_rate_max_up_toggle:r.a.boolean().required(),qos_rate_max_up_unit:r.a.string().label("SETTINGS_ADVANCED_FEATURES_BANDWIDTH_PROFILE_FORM_LABEL_BANDWIDTH_LIMIT_UPLOAD").oneOf(Object.values(a.a)).required(),qos_rate_max_up_value:l({upload:!0})})},2190:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return p}));var a=n(1187),o=n(2114),r=n(2047);const i=({download:e,upload:t})=>{if(e)return"qos_rate_max_down";if(t)return"qos_rate_max_up";throw new Error("No limit bandwidth field specified (download/upload) in Bandwidth Profile form getter")},c=(e,{download:t,upload:n})=>e[i({download:t,upload:n})]>-1,l=(e,{download:t,upload:n})=>e[i({download:t,upload:n})]%1e3?r.a.Kbps:r.a.Mbps,s=(e,{download:t,upload:n})=>{const a=i({download:t,upload:n});return e[a]>-1?e[a]%1e3?e[a]:e[a]/1e3:o.a[a+"_value"]},u=(e,{download:t,upload:n})=>{const o=i({download:t,upload:n});return Object(a.a)(e[o+"_value"])?e[o+"_value"]*Number(e[o+"_unit"]):-1};var m=n(0),d=n.n(m),_=n(4);const p=({userGroup:e,download:t,upload:n})=>{const a=i({download:t,upload:n});return e[a]<0?d.a.createElement(_.c,{id:"COMMON_WORD_UNLIMITED"}):d.a.createElement(_.c,{id:"COMMON_UNIT_BPS",values:{prefix:`${e[a]%1e3?e[a]:e[a]/1e3} ${e[a]%1e3?"K":"M"}`}})}}}]);