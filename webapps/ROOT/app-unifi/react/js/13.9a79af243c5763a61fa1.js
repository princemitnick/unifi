(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[13],{1939:function(e,t,n){"use strict";var a=n(0),r=n(31);t.a=()=>{const e=Object(r.l)(),[t]=Object(a.useState)(e.pathname),[n,o]=Object(a.useState)(!1),i=Object(a.useRef)();return Object(a.useEffect)(()=>{o(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),a=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===a[0].length&&n[1]===a[1]&&(i.current=setTimeout(()=>o(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var a=n(25);Object(a.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return F}));var a=n(0),r=n.n(a),o=n(5),i=n(4),c=n(45),s=n(1973),l=n(1974),m=n(1948),u=n(799),f=n(95),p=n(1952),d=n(23),b=n(49),_=n(40),h=n(1848),g=n(793),O=n(1939);const S=o.a`
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
`;var E=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:o,...i})=>{const c=Object(O.a)(),s=Object(g.a)(o),l=Object(a.useMemo)(()=>r.a.Children.map(n,n=>null===n?n:r.a.createElement(h.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:S,mountOnEnter:!0},i),n)),[n,t,s,c,e,i]);return r.a.createElement(r.a.Fragment,null,l)};const v=o.a`
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
`;var x=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:o,...i})=>{const c=Object(O.a)(),s=Object(g.a)(o),l=Object(a.useMemo)(()=>r.a.Children.map(n,n=>null===n?n:r.a.createElement(h.a,Object.assign({appear:t||!s||c,in:t||!s||c,timeout:e,classNames:v,mountOnEnter:!0},i),n)),[n,t,s,c,e,i]);return r.a.createElement(r.a.Fragment,null,l)};const C=Object(o.c)(f.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,I=Object(o.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,A=Object(o.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(o.c)(f.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,R=Object(o.c)(b.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var F=({title:e,showBack:t,goBack:n,onEscClicked:a,hideClose:o,ignoredPaths:i})=>{const{motif:c}=Object(_.a)();return r.a.createElement(x,{ignoredPaths:i},r.a.createElement(I,{flex:"none",height:"65px"},r.a.createElement(E,{ignoredPaths:i},r.a.createElement(f.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(C,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:c},r.a.createElement(d.g,null))),r.a.createElement(A,null,r.a.createElement(R,{weight:"bold"},e.component)),r.a.createElement(C,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!o&&r.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:a},r.a.createElement(d.A,null)))))))};const N=Object(o.c)(f.g)`
  width: 100%;
  max-width: ${u.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,T=Object(o.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,w=Object(o.c)(f.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,j=Object(o.c)(s.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,k=Object(o.c)(f.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,D=Object(o.c)(f.k)`
  height: 100%;
  width: 100%;
`;var M=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:a,isEdit:o,isView:s,showBack:u,title:d,unsavedChangesModalIgnoredPaths:b,onEscClicked:_,submitText:h="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:O,...S})=>r.a.createElement(c.c,Object.assign({enableReinitialize:!0},S),({dirty:o,handleReset:c,handleSubmit:S,isSubmitting:E})=>r.a.createElement(T,{autoComplete:"off",onSubmit:S},r.a.createElement(D,{vertical:!0},r.a.createElement(F,{goBack:n,hideClose:a,showBack:u,title:d,onEscClicked:_,ignoredPaths:b}),r.a.createElement(p.a,{ignoredPaths:b},r.a.createElement(k,{flex:"1"},r.a.createElement(N,{flex:"none",flexDirection:"column"},e))),!t&&!s&&r.a.createElement(m.a,{ignoredPaths:b,when:o&&!E}),(!s||g)&&r.a.createElement(j,{active:o||g},r.a.createElement(f.g,{justifyContent:O?"space-between":"flex-end",width:"100%",alignItems:"center"},O&&r.a.createElement(w,null,O(E)),!s&&r.a.createElement(f.g,null,r.a.createElement(l.a,{disabled:!o||E,type:"button",variant:"default",onClick:c},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(l.a,{disabled:!o||E,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:h}))))))))},1949:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),c=(a=i)&&a.__esModule?a:{default:a},s=n(2);var l={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=r({},l,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,o=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],o||(o={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var c=i.listen((function(){c(),t._isMounted&&t.setState(r({},l,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](o),this._isMounted&&this.setState(r({},l,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(r({},l))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,s.withRouter)(m)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1848),i=n(5),c=n(793),s=n(1939);const l=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...m})=>{const u=Object(s.a)(),f=Object(c.a)(n),p=Object(a.useMemo)(()=>r.a.Children.map(i,n=>null===n?n:r.a.createElement(o.a,Object.assign({appear:t||!f||u,in:t||!f||u,timeout:e,classNames:l,mountOnEnter:!0},m),n)),[i,t,f,u,e,m]);return r.a.createElement(r.a.Fragment,null,p)}},1972:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(1752),s=n(73),l=n(795),m=n(27),u=n(796),f=n(688),p=n(231),d=n(112),b=n(798),_=n(794),h=n(390),g=n(797);t.a=Object(s.a)(class extends a.Component{constructor(e){super(e)}render(){const e=Object(c.a)({},this.props,d.a),{motif:t,renderFooter:n,className:o,width:s,tableClassName:O,renderPlaceholder:S,idField:E,forwardedRef:v}=e;return r.a.createElement(h.a,Object.assign({},e,{ref:v}),r.a.createElement(u.a,{className:o,motif:t,width:Object(d.g)(s)},r.a.createElement(p.a.Consumer,null,e=>{const{noItems:n,renderedItems:o}=e;return r.a.createElement(a.Fragment,null,r.a.createElement(f.a,{className:O,motif:t},r.a.createElement(b.a,null),r.a.createElement(_.a,null,o.map((t,n)=>r.a.createElement(g.a,{key:Object(d.h)(t[E]),row:t,rowIndex:n,context:e})))),n&&void 0!==S&&r.a.createElement("div",{className:m.a.placeholder},r.a.createElement(l.a,{className:m.a.placeholderIcon,size:"large"}),S()))}),void 0!==n&&r.a.createElement("div",{className:i()(m.a.footer,m.a[t])},n())))}})},1973:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(523),s=n(40),l=n(235),m=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:o,margin:u,marginX:f,marginY:p,marginTop:d,marginRight:b,marginBottom:_,marginLeft:h,padding:g="xxxxl",paddingX:O,paddingY:S,paddingTop:E,paddingRight:v,paddingBottom:x,paddingLeft:C,children:I,className:A,style:y,...R})=>{var F,N,T,w,j,k,D,M;const{motif:L}=Object(s.a)(),[P,B]=Object(a.useState)(0),U=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(U.current){const{height:e}=U.current.getBoundingClientRect();B(e)}},[]),Object(a.useEffect)(()=>{const e=Object(c.a)(()=>{if(U.current){const{height:e}=U.current.getBoundingClientRect();B(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),r.a.createElement("footer",Object.assign({className:i()(m.a.formFooter,l.a["margin-top-"+(null!==(N=null!==(F=null!=d?d:p)&&void 0!==F?F:u)&&void 0!==N?N:"")],l.a["margin-right-"+(null!==(w=null!==(T=null!=b?b:f)&&void 0!==T?T:u)&&void 0!==w?w:"")],l.a["margin-bottom-"+(null!==(k=null!==(j=null!=_?_:p)&&void 0!==j?j:u)&&void 0!==k?k:"")],l.a["margin-left-"+(null!==(M=null!==(D=null!=h?h:f)&&void 0!==D?D:u)&&void 0!==M?M:"")],A),style:{height:e?P:0,transform:`translateY(${e?0:P+"px"})`,...y}},R),r.a.createElement("div",{className:i()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+L],n&&m.a["formFooterContent-backgroundGradient"],l.a["padding-top-"+(E||S||g)],l.a["padding-right-"+(v||O||g)],l.a["padding-bottom-"+(x||S||g)],l.a["padding-left-"+(C||O||g)],o),ref:U},I))}},1974:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(800),s=n(170),l=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:a,...o})=>r.a.createElement(s.a,Object.assign({className:i()(t===c.b[0]&&l.a["formFooterButton-default-size-"+e],a),size:e,wrapClassName:i()("tertiary"===t?l.a.formFooterTertiaryButtonWrap:l.a.formFooterButtonWrap,n),variant:t},o))},2216:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),o=n(4),i=n(98),c=n(171),s=n(30);const l=s.a.object().shape({enabled:s.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SERVER"),x_secret:s.a.string().when("enabled",{is:!0,then:s.a.string().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_RADIUS_SECRET").required()}),auth_port:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_AUTHENTICATION_PORT").required().min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT)}),acct_port:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_PORT").required().min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT)}),interim_update_interval:s.a.number().when("enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_ACCOUNTING_INTERIM_INTERVAL").required().min(c.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(c.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),tunneled_reply:s.a.bool().label("SETTINGS_ADVANCED_RADIUS_SERVER_FORM_LABEL_TUNNELED_REPLY")}),m=s.a.object().shape({ip:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_IP_ADDRESS").required().matches(i.h,r.a.createElement(o.c,{id:"COMMON_VALIDATION_VALID_IPV4"})),port:s.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PORT").min(c.RADIUS_LIMITS.MIN_PORT).max(c.RADIUS_LIMITS.MAX_PORT),x_secret:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_PASSWORD").required()}),u=s.a.object().shape({name:s.a.string().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_NAME").required(),auth_servers:s.a.array().of(m),accounting_enabled:s.a.bool(),interim_update_enabled:s.a.bool(),interim_update_interval:s.a.number().when("interim_update_enabled",{is:!0,then:s.a.number().label("SETTINGS_ADVANCED_RADIUS_PROFILE_FORM_LABEL_INTERIM_UPDATE_INTERVAL").required().min(c.RADIUS_LIMITS.INTERIM_UPDATE_MIN).max(c.RADIUS_LIMITS.INTERIM_UPDATE_MAX)}),acct_servers:s.a.array().when("accounting_enabled",{is:!0,then:s.a.array().of(m)})})}}]);