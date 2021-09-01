(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[53],{1791:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a(8),l=a(6),c=a(28),s=a(391),m=a(64),_=a(2),u=a(2145);const E={};t.default=()=>{const{id:e}=Object(o.m)(),t=Object(i.useSelector)(s.selectPortForwardData).find(t=>t._id===e),a=Object(m.g)();return Object(m.e)([Object(s.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:_.a.CACHE}}),Object(l.fetchSiteGateway)(),Object(c.fetchNetworks)(void 0,{crudCacheStrategy:{type:_.a.CACHE}})],r.a.createElement(u.a,{initialValues:t||E,onBack:a}))}},1939:function(e,t,a){"use strict";var n=a(0),r=a(31);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,o]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{o(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>o(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1941:function(e,t,a){"use strict";var n=a(25);Object(n.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,a){"use strict";a.d(t,"b",(function(){return W})),a.d(t,"a",(function(){return G}));var n=a(0),r=a.n(n),o=a(5),i=a(4),l=a(45),c=a(1973),s=a(1974),m=a(1948),_=a(799),u=a(95),E=a(1952),p=a(23),d=a(49),f=a(40),O=a(1848),T=a(793),b=a(1939);const h=o.a`
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
`;var R=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:o,...i})=>{const l=Object(b.a)(),c=Object(T.a)(o),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!c||l,in:t||!c||l,timeout:e,classNames:h,mountOnEnter:!0},i),a)),[a,t,c,l,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const g=o.a`
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
`;var N=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:o,...i})=>{const l=Object(b.a)(),c=Object(T.a)(o),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!c||l,in:t||!c||l,timeout:e,classNames:g,mountOnEnter:!0},i),a)),[a,t,c,l,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const S=Object(o.c)(u.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,A=Object(o.c)(u.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,I=Object(o.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,F=Object(o.c)(u.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,v=Object(o.c)(d.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var G=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:o,ignoredPaths:i})=>{const{motif:l}=Object(f.a)();return r.a.createElement(N,{ignoredPaths:i},r.a.createElement(A,{flex:"none",height:"65px"},r.a.createElement(R,{ignoredPaths:i},r.a.createElement(u.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(S,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(F,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},r.a.createElement(p.g,null))),r.a.createElement(I,null,r.a.createElement(v,{weight:"bold"},e.component)),r.a.createElement(S,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!o&&r.a.createElement(F,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(p.A,null)))))))};const y=Object(o.c)(u.g)`
  width: 100%;
  max-width: ${_.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,C=Object(o.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(o.c)(u.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,w=Object(o.c)(c.a)`
  > :first-child {
    max-width: ${_.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,D=Object(o.c)(u.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,P=Object(o.c)(u.k)`
  height: 100%;
  width: 100%;
`;var W=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:o,isView:c,showBack:_,title:p,unsavedChangesModalIgnoredPaths:d,onEscClicked:f,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:T=!1,customFooterButtons:b,...h})=>r.a.createElement(l.c,Object.assign({enableReinitialize:!0},h),({dirty:o,handleReset:l,handleSubmit:h,isSubmitting:R})=>r.a.createElement(C,{autoComplete:"off",onSubmit:h},r.a.createElement(P,{vertical:!0},r.a.createElement(G,{goBack:a,hideClose:n,showBack:_,title:p,onEscClicked:f,ignoredPaths:d}),r.a.createElement(E.a,{ignoredPaths:d},r.a.createElement(D,{flex:"1"},r.a.createElement(y,{flex:"none",flexDirection:"column"},e))),!t&&!c&&r.a.createElement(m.a,{ignoredPaths:d,when:o&&!R}),(!c||T)&&r.a.createElement(w,{active:o||T},r.a.createElement(u.g,{justifyContent:b?"space-between":"flex-end",width:"100%",alignItems:"center"},b&&r.a.createElement(x,null,b(R)),!c&&r.a.createElement(u.g,null,r.a.createElement(s.a,{disabled:!o||R,type:"button",variant:"default",onClick:l},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(s.a,{disabled:!o||R,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:O}))))))))},1948:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a(4),l=a(1949),c=a.n(l),s=a(1759),m=a(538),_=a(539);const u=Object(o.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:o=null})=>{const l=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),E=Object(_.a)(t),p=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),d=Object(n.useCallback)(e=>(e={},t={})=>E(e,t)&&p(e,t),[E,p]);return!!e&&r.a.createElement(c.a,{when:d(t)},({onCancel:e,onConfirm:t})=>r.a.createElement(s.a,{actions:[{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>o?o(e):e()},{type:"button",text:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:l,parentSelector:m.b,title:r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>o?o(e):e()},r.a.createElement(u,null,r.a.createElement(i.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,a){e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(1),l=(n=i)&&n.__esModule?n:{default:n},c=a(2);var s={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._prevUserAction="",a._isMounted=!0,a.block=a.block.bind(a),a.onBeforeUnload=a.onBeforeUnload.bind(a),a.onCancel=a.onCancel.bind(a),a.onConfirm=a.onConfirm.bind(a),a.when=a.when.bind(a),a.state=r({},s,{unblock:function(){}}),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var a=this.when(e);return a&&this.setState({action:t,nextLocation:e,isActive:!0}),!a}},{key:"navigateToNextLocation",value:function(e){var t=this,a=this.state,n=a.action,o=a.nextLocation;n={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[n||"PUSH"],o||(o={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===n){var l=i.listen((function(){l(),t._isMounted&&t.setState(r({},s,{unblock:i.block(t.block)}))}));i.goBack()}else i[n](o),this._isMounted&&this.setState(r({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(r({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?l.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(l.default.Component);t.default=(0,c.withRouter)(m)},function(e,t){e.exports=a(0)},function(e,t){e.exports=a(671)}])},1952:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1848),i=a(5),l=a(793),c=a(1939);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,...m})=>{const _=Object(c.a)(),u=Object(l.a)(a),E=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(o.a,Object.assign({appear:t||!u||_,in:t||!u||_,timeout:e,classNames:s,mountOnEnter:!0},m),a)),[i,t,u,_,e,m]);return r.a.createElement(r.a.Fragment,null,E)}},1954:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1848),i=a(5);const l=(e,t)=>i.a`
  &-appear,
  &-enter {
    opacity: 0;
    display: flex !important;
    transform: translateY(-10px);
  }
  &-appear-active,
  &-enter-active {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 150ms ease-in-out, transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-appear-done,
  &-enter-done {
    display: flex !important;
    ${e&&`flex-direction: ${e};`}
    ${t&&`padding: ${t};`}
    opacity: 1;
  }
  &-exit {
    display: flex !important;
    opacity: 0;
    height: 0;
    box-sizing: border-box;
    margin: 10px 0 0 !important;
    & > * {
      display: none;
    }
  }
  &-exit-active {
    display: flex !important;
    margin: 0 !important;
    transition: margin 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit-done {
    display: none;
  }
`;t.a=r.a.memo(({timeout:e=300,in:t=!1,flexDirection:a,padding:i="0 0 32px",wrap:c=!1,children:s,...m})=>{const _=Object(n.useMemo)(()=>r.a.Children.map(s,(n,i)=>r.a.createElement(o.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,void 0),mountOnEnter:!0},m),null===n?r.a.createElement("div",null):n)),[s,a,t,m,e]);return c?r.a.createElement(o.a,Object.assign({appear:t,in:t,timeout:e,classNames:l(a,i),mountOnEnter:!0},m),r.a.createElement("div",null,s)):r.a.createElement(r.a.Fragment,null,_)})},1973:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(523),c=a(40),s=a(235),m=a(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:a=!1,contentClassName:o,margin:_,marginX:u,marginY:E,marginTop:p,marginRight:d,marginBottom:f,marginLeft:O,padding:T="xxxxl",paddingX:b,paddingY:h,paddingTop:R,paddingRight:g,paddingBottom:N,paddingLeft:S,children:A,className:I,style:F,...v})=>{var G,y,C,x,w,D,P,W;const{motif:j}=Object(c.a)(),[L,k]=Object(n.useState)(0),V=Object(n.useRef)(null);return Object(n.useEffect)(()=>{if(V.current){const{height:e}=V.current.getBoundingClientRect();k(e)}},[]),Object(n.useEffect)(()=>{const e=Object(l.a)(()=>{if(V.current){const{height:e}=V.current.getBoundingClientRect();k(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),r.a.createElement("footer",Object.assign({className:i()(m.a.formFooter,s.a["margin-top-"+(null!==(y=null!==(G=null!=p?p:E)&&void 0!==G?G:_)&&void 0!==y?y:"")],s.a["margin-right-"+(null!==(x=null!==(C=null!=d?d:u)&&void 0!==C?C:_)&&void 0!==x?x:"")],s.a["margin-bottom-"+(null!==(D=null!==(w=null!=f?f:E)&&void 0!==w?w:_)&&void 0!==D?D:"")],s.a["margin-left-"+(null!==(W=null!==(P=null!=O?O:u)&&void 0!==P?P:_)&&void 0!==W?W:"")],I),style:{height:e?L:0,transform:`translateY(${e?0:L+"px"})`,...F}},v),r.a.createElement("div",{className:i()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+j],a&&m.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(R||h||T)],s.a["padding-right-"+(g||b||T)],s.a["padding-bottom-"+(N||h||T)],s.a["padding-left-"+(S||b||T)],o),ref:V},A))}},1974:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=a(800),c=a(170),s=a(1941);t.a=({size:e="medium",variant:t,wrapClassName:a,className:n,...o})=>r.a.createElement(c.a,Object.assign({className:i()(t===l.b[0]&&s.a["formFooterButton-default-size-"+e],n),size:e,wrapClassName:i()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,a),variant:t},o))},2145:function(e,t,a){"use strict";var n,r=a(0),o=a.n(r),i=a(8),l=a(4),c=a(44),s=a(170),m=a(1945),_=a(28),u=a(13),E=a(391),p=a(464),d=a(64),f=a(2262),O=a(30),T=a(98),b=[500,4500];!function(e){e.ANY="any",e.LIMITED="limited"}(n||(n={}));const h=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_ANY",value:n.ANY},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM_VALUES_LIMITED",value:n.LIMITED}],R=e=>!/^[0-9]*$/.test(e),g=e=>function(t){return!e||(t||"").trim().split(",").every(e=>{if(e.includes("-")){const[t,a]=e.split("-").map(e=>Number(e.trim()));return b.every(e=>!Object(f.a)(e,t,a+1))}return!b.includes(parseInt(e,10))})};var N=Object(c.a)(e=>O.a.object().shape({name:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME").required(),srcType:O.a.string(),src:O.a.string().when("srcType",{is:n.LIMITED,then:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE").required().unifiIpv4Range(o.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IP_SUBNET_RANGE",values:{name:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}}))}),dst_port:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT").unifiPortRange(o.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("port-fwd-overlaps-ipsec",o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_PORT_FWD_OVERLAPS_IPSEC"}),g(e)).required(),fwd:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP").matches(T.h,o.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).required(),fwd_port:O.a.string().label("SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT").unifiPortRange(o.a.createElement(l.c,{id:"COMMON_VALIDATION_VALID_PORT_RANGE"})).test("incorrect-multiport-fwd-port",o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_VALIDATION_INCORRECT_MULTIPORT_FWD_PORT"}),(function(e){const{dst_port:t}=this.parent;return!(R(t)||R(e))||(t||"").trim()===(e||"").trim()})).required(),pfwd_interface:O.a.string().oneOf([...Object.values(E.PortForwardInterface)]).required()})),S=[{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_BOTH",value:"tcp_udp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_TCP",value:"tcp"},{label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL_VALUES_UDP",value:"udp"}],A={name:"",enabled:!1,pfwd_interface:E.PortForwardInterface.WAN,srcType:n.ANY,src:"",dst_port:"",fwd:"",fwd_port:"",proto:S[0].value,log:!1},I=a(1197),F=a(1753),v=a(1754),G=a(1924),y=a(1755),C=a(5),x=a(45),w=a(23),D=a(6),P=a(95),W=a(1954),j=a(54),L=a(49),k=a(815);const V=Object(C.c)("label")`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,B=Object(C.c)("div")`
  margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-right: 0;
  }
`,M=Object(C.c)("div")`
  min-width: 100%;
  flex: 1 0;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};

  &:last-child {
    margin-bottom: 0;
  }
`;var U=Object(l.f)(({intl:e})=>{const t=Object(i.useSelector)(_.selectWanNetworks),a=Object(i.useSelector)(k.D),{values:n,setFieldValue:c}=Object(x.e)(),{destination_ip:s,pfwd_interface:m}=n,u=m===E.PortForwardInterface.BOTH?[E.PortForwardInterface.WAN,E.PortForwardInterface.WAN2]:[m],p=Object(r.useMemo)(()=>u.map(e=>t.find(({wan_networkgroup:t})=>(null==t?void 0:t.toLowerCase())===e.toLowerCase())),[m]),d=Object(r.useMemo)(()=>p.reduce((t,a)=>{const{wan_ip:n,wan_ip_aliases:r=[],wan_networkgroup:i,wan_type:c,_id:s}=null!=a?a:{},u=[n,...r].reduce((e,t)=>{const a=null==t?void 0:t.replace(/\/\d{1,2}/,"");return a?[...e,{label:a,value:a}]:e},[{label:e.formatMessage({id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP_AUTO_DEFINED"}),value:"any"}]);let p;switch(u.length>2?m!==E.PortForwardInterface.BOTH&&(p="dropdown"):c===_.IpV4ConnectionType.STATIC&&(p="text"),p){case"dropdown":return[...t,o.a.createElement(M,{key:s},o.a.createElement(V,null,o.a.createElement(j.Field,{full:!0,label:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i,name:"destination_ip",options:u,translateLabel:!0,type:"dropdown"})))];case"text":{const e=null!=n?n:c===_.IpV4ConnectionType.DHCP?"DHCP":"PPPoE";return[...t,o.a.createElement(B,{key:s},o.a.createElement(V,null,o.a.createElement(L.a,{color:"tertiary",size:"label"},o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+i}))),o.a.createElement(L.a,null,e))]}default:return t}},[]),[m,e]);return Object(r.useEffect)(()=>{m===E.PortForwardInterface.BOTH&&"any"!==s&&c("destination_ip","any")},[s,m,c]),a?d.length===u.length&&o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"destination_ip",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_DESTINATION_IP"})}),o.a.createElement(y.a,null,o.a.createElement(P.g,{flexWrap:"wrap",width:"100%"},d))):null});const z=Object(C.c)(I.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,$=Object(C.c)(j.Field)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  &:last-child {
    margin-right: ${({theme:e})=>e.spacing["spacing-xl"]};
  }
`;var H=()=>{const{values:e,errors:t,setFieldValue:a,setValues:c,touched:s,setFieldTouched:m}=Object(x.e)(),_=Object(i.useSelector)(D.selectWanInterfaceOptions);Object(r.useEffect)(()=>{e.srcType===n.LIMITED&&e.src===n.ANY&&a("src","")},[a,e.src,e.srcType]);return o.a.createElement(F.a,null,o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"name",alignWith:"input",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{full:!0,name:"name",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_NAME"}))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"enabled",alignWith:"toggle",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_ENABLE"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{type:"checkbox",name:"enabled"}))),_.length>1&&o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"pfwd_interface",alignWith:"input",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE"})}),o.a.createElement(y.a,null,_.map(({label:e,value:t})=>o.a.createElement($,{value:E.PortForwardInterface[e],type:"togglebox",toggleboxType:"radio",name:"pfwd_interface",key:"pfwd-interface-"+t},o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_"+e}))),o.a.createElement($,{value:E.PortForwardInterface.BOTH,type:"togglebox",toggleboxType:"radio",name:"pfwd_interface"},o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_INTERFACE_BOTH"})))),o.a.createElement(U,null),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"srcType",alignWith:"dropdown",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FROM"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{type:"dropdown",name:"srcType",full:!0,translateOptions:!0,options:h}))),o.a.createElement(W.a,{in:e.srcType===n.LIMITED},o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"src",alignWith:"input",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{name:"src",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_SOURCE",full:!0})))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"dst_port",alignWith:"input",label:o.a.createElement(P.g,null,o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT"}),o.a.createElement(z,{message:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT_TOOLTIP"}),position:"bottom",width:140},o.a.createElement(w.cb,{isActive:!0})))}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{full:!0,name:"dst_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PORT",onBlur:()=>{s.dst_port||m("dst_port",!0),!s.fwd_port&&e.fwd_port&&m("fwd_port",!0,!0)},onChange:(t,a)=>{const n={...e,dst_port:a};e.fwd_port&&e.dst_port!==e.fwd_port||(n.fwd_port=a),c(n,!0)}}),!t.dst_port&&e.dst_port&&e.dst_port!==e.fwd_port&&o.a.createElement(P.c,{legacy:!1,name:"port-forward-update-forward-port",size:"small",variant:"link",onClick:()=>{a("fwd_port",e.dst_port,!0)}},o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_UPDATE_FORWARD_PORT"})))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"fwd",alignWith:"input",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{full:!0,name:"fwd",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_IP"}))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"fwd_port",alignWith:"input",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{full:!0,name:"fwd_port",placeholder:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_FORWARD_PORT"}))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"proto",alignWith:"dropdown",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_PROTOCOL"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{full:!0,name:"proto",type:"dropdown",translateOptions:!0,options:S}))),o.a.createElement(v.a,null,o.a.createElement(G.a,{htmlFor:"log",alignWith:"toggle",label:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING"}),description:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARD_LOGGING_DESCRIPTION"})}),o.a.createElement(y.a,{column:!0},o.a.createElement(j.Field,{type:"checkbox",name:"log"}))))};const Y=Object(c.a)(e=>{const t={...A,...e},a=t.src&&t.src!==n.ANY?n.LIMITED:n.ANY;return{...t,srcType:a}});t.a=e=>{const t=Object(i.useSelector)(_.selectIsIpsecInUse),a=Object(i.useDispatch)(),c=Object(i.useSelector)(u.u),{initialValues:f,onBack:O}=e,T=!!f._id,b=Object(r.useCallback)((e,{setSubmitting:t})=>{const{srcType:r,...o}=e,i=r===n.ANY?{...o,src:n.ANY}:o;return a(Object(E.savePortForwardRule)(i)).then(()=>O()).catch(()=>t(!1))},[a,O]),h=Object(d.m)({component:o.a.createElement(l.c,{id:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING"}),message:"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_BUTTON"},c?"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_VIEW":"SETTINGS_INTERNET_GENERAL_ADV_GW_PORT_FORWARDING_EDIT",f._id?f.name:void 0),R=Object(r.useCallback)(()=>{a(Object(p.b)({name:f.name,onConfirm:()=>a(Object(E.removePortForwardRule)(f)).then(O())}))},[a,f,O]);return o.a.createElement(m.b,{onSubmit:b,title:h,initialValues:Y(f),isEdit:T,isView:c,onEscClicked:O,validationSchema:N(t),showBack:!0,goBack:O,footerActiveOverride:!!(null==f?void 0:f._id),customFooterButtons:e=>(null==f?void 0:f._id)&&o.a.createElement(s.a,{disabled:e,type:"button",variant:"default",onClick:R},o.a.createElement(l.c,{id:"COMMON_ACTION_REMOVE"}))},o.a.createElement(H,null))}},2262:function(e,t,a){"use strict";var n=Math.max,r=Math.min;var o=function(e,t,a){return e>=r(t,a)&&e<n(t,a)},i=a(409),l=a(218);t.a=function(e,t,a){return t=Object(i.a)(t),void 0===a?(a=t,t=0):a=Object(i.a)(a),e=Object(l.a)(e),o(e,t,a)}}}]);