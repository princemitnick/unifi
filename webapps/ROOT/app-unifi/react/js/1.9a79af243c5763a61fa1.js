(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[1],{1939:function(e,t,n){"use strict";var o=n(0),a=n(31);t.a=()=>{const e=Object(a.l)(),[t]=Object(o.useState)(e.pathname),[n,r]=Object(o.useState)(!1),i=Object(o.useRef)();return Object(o.useEffect)(()=>{r(!1);const n=/^(.*)\/[a-z0-9]*/i.exec(t),o=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return n[0].length===o[0].length&&n[1]===o[1]&&(i.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),n}},1941:function(e,t,n){"use strict";var o=n(25);Object(o.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,n){"use strict";n.d(t,"b",(function(){return M})),n.d(t,"a",(function(){return j}));var o=n(0),a=n.n(o),r=n(5),i=n(4),s=n(45),c=n(1973),l=n(1974),p=n(1948),u=n(799),d=n(95),m=n(1952),f=n(23),_=n(49),h=n(40),b=n(1848),g=n(793),v=n(1939);const O=r.a`
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
`;var y=({timeout:e={enter:300,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const s=Object(v.a)(),c=Object(g.a)(r),l=Object(o.useMemo)(()=>a.a.Children.map(n,n=>null===n?n:a.a.createElement(b.a,Object.assign({appear:t||!c||s,in:t||!c||s,timeout:e,classNames:O,mountOnEnter:!0},i),n)),[n,t,c,s,e,i]);return a.a.createElement(a.a.Fragment,null,l)};const x=r.a`
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
`;var S=({timeout:e={enter:150,exit:100},in:t,children:n,ignoredPaths:r,...i})=>{const s=Object(v.a)(),c=Object(g.a)(r),l=Object(o.useMemo)(()=>a.a.Children.map(n,n=>null===n?n:a.a.createElement(b.a,Object.assign({appear:t||!c||s,in:t||!c||s,timeout:e,classNames:x,mountOnEnter:!0},i),n)),[n,t,c,s,e,i]);return a.a.createElement(a.a.Fragment,null,l)};const w=Object(r.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,C=Object(r.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,k=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,E=Object(r.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,F=Object(r.c)(_.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var j=({title:e,showBack:t,goBack:n,onEscClicked:o,hideClose:r,ignoredPaths:i})=>{const{motif:s}=Object(h.a)();return a.a.createElement(S,{ignoredPaths:i},a.a.createElement(C,{flex:"none",height:"65px"},a.a.createElement(y,{ignoredPaths:i},a.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},a.a.createElement(w,{alignItems:"center",flex:"1",height:"100%"},t&&a.a.createElement(E,{legacy:!1,name:"backButton",type:"button",onClick:n,motif:s},a.a.createElement(f.g,null))),a.a.createElement(k,null,a.a.createElement(F,{weight:"bold"},e.component)),a.a.createElement(w,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&a.a.createElement(E,{legacy:!1,name:"closeButton",type:"button",onClick:o},a.a.createElement(f.A,null)))))))};const N=Object(r.c)(d.g)`
  width: 100%;
  max-width: ${u.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,P=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,B=Object(r.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,T=Object(r.c)(c.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,A=Object(r.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,z=Object(r.c)(d.k)`
  height: 100%;
  width: 100%;
`;var M=({children:e,disableUnsavedChangesModal:t,goBack:n,hideClose:o,isEdit:r,isView:c,showBack:u,title:f,unsavedChangesModalIgnoredPaths:_,onEscClicked:h,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:g=!1,customFooterButtons:v,...O})=>a.a.createElement(s.c,Object.assign({enableReinitialize:!0},O),({dirty:r,handleReset:s,handleSubmit:O,isSubmitting:y})=>a.a.createElement(P,{autoComplete:"off",onSubmit:O},a.a.createElement(z,{vertical:!0},a.a.createElement(j,{goBack:n,hideClose:o,showBack:u,title:f,onEscClicked:h,ignoredPaths:_}),a.a.createElement(m.a,{ignoredPaths:_},a.a.createElement(A,{flex:"1"},a.a.createElement(N,{flex:"none",flexDirection:"column"},e))),!t&&!c&&a.a.createElement(p.a,{ignoredPaths:_,when:r&&!y}),(!c||g)&&a.a.createElement(T,{active:r||g},a.a.createElement(d.g,{justifyContent:v?"space-between":"flex-end",width:"100%",alignItems:"center"},v&&a.a.createElement(B,null,v(y)),!c&&a.a.createElement(d.g,null,a.a.createElement(l.a,{disabled:!r||y,type:"button",variant:"default",onClick:s},a.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),a.a.createElement(l.a,{disabled:!r||y,type:"submit",variant:"primary"},a.a.createElement(i.c,{id:b}))))))))},1949:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=(o=i)&&o.__esModule?o:{default:o},c=n(2);var l={action:null,isActive:!1,nextLocation:null},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=a({},l,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,o=n.action,r=n.nextLocation;o={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[o||"PUSH"],r||(r={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===o){var s=i.listen((function(){s(),t._isMounted&&t.setState(a({},l,{unblock:i.block(t.block)}))}));i.goBack()}else i[o](r),this._isMounted&&this.setState(a({},l,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(a({},l))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?s.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(s.default.Component);t.default=(0,c.withRouter)(p)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1952:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1848),i=n(5),s=n(793),c=n(1939);const l=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:n,children:i,...p})=>{const u=Object(c.a)(),d=Object(s.a)(n),m=Object(o.useMemo)(()=>a.a.Children.map(i,n=>null===n?n:a.a.createElement(r.a,Object.assign({appear:t||!d||u,in:t||!d||u,timeout:e,classNames:l,mountOnEnter:!0},p),n)),[i,t,d,u,e,p]);return a.a.createElement(a.a.Fragment,null,m)}},1954:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1848),i=n(5);const s=(e,t)=>i.a`
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
`;t.a=a.a.memo(({timeout:e=300,in:t=!1,flexDirection:n,padding:i="0 0 32px",wrap:c=!1,children:l,...p})=>{const u=Object(o.useMemo)(()=>a.a.Children.map(l,(o,i)=>a.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:s(n,void 0),mountOnEnter:!0},p),null===o?a.a.createElement("div",null):o)),[l,n,t,p,e]);return c?a.a.createElement(r.a,Object.assign({appear:t,in:t,timeout:e,classNames:s(n,i),mountOnEnter:!0},p),a.a.createElement("div",null,l)):a.a.createElement(a.a.Fragment,null,u)})},1973:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(7),i=n.n(r),s=n(523),c=n(40),l=n(235),p=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:r,margin:u,marginX:d,marginY:m,marginTop:f,marginRight:_,marginBottom:h,marginLeft:b,padding:g="xxxxl",paddingX:v,paddingY:O,paddingTop:y,paddingRight:x,paddingBottom:S,paddingLeft:w,children:C,className:k,style:E,...F})=>{var j,N,P,B,T,A,z,M;const{motif:U}=Object(c.a)(),[I,L]=Object(o.useState)(0),$=Object(o.useRef)(null);return Object(o.useEffect)(()=>{if($.current){const{height:e}=$.current.getBoundingClientRect();L(e)}},[]),Object(o.useEffect)(()=>{const e=Object(s.a)(()=>{if($.current){const{height:e}=$.current.getBoundingClientRect();L(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),a.a.createElement("footer",Object.assign({className:i()(p.a.formFooter,l.a["margin-top-"+(null!==(N=null!==(j=null!=f?f:m)&&void 0!==j?j:u)&&void 0!==N?N:"")],l.a["margin-right-"+(null!==(B=null!==(P=null!=_?_:d)&&void 0!==P?P:u)&&void 0!==B?B:"")],l.a["margin-bottom-"+(null!==(A=null!==(T=null!=h?h:m)&&void 0!==T?T:u)&&void 0!==A?A:"")],l.a["margin-left-"+(null!==(M=null!==(z=null!=b?b:d)&&void 0!==z?z:u)&&void 0!==M?M:"")],k),style:{height:e?I:0,transform:`translateY(${e?0:I+"px"})`,...E}},F),a.a.createElement("div",{className:i()(p.a.formFooterContent,p.a["formFooterContent-align-"+t],p.a["formFooterContent-"+U],n&&p.a["formFooterContent-backgroundGradient"],l.a["padding-top-"+(y||O||g)],l.a["padding-right-"+(x||v||g)],l.a["padding-bottom-"+(S||O||g)],l.a["padding-left-"+(w||v||g)],r),ref:$},C))}},1974:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(7),i=n.n(r),s=n(800),c=n(170),l=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:o,...r})=>a.a.createElement(c.a,Object.assign({className:i()(t===s.b[0]&&l.a["formFooterButton-default-size-"+e],o),size:e,wrapClassName:i()("tertiary"===t?l.a.formFooterTertiaryButtonWrap:l.a.formFooterButtonWrap,n),variant:t},r))},1995:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e.K="k",e.M="M",e.G="G"}(o||(o={}))},2151:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var o=n(670),a=n(1763),r=n(28),i=n(804),s=n(2289);const c=e=>(e||[]).reduce((e,{wan_networkgroup:t=""})=>(t.toUpperCase().startsWith("WAN")&&e.push(t),e),[]),l=e=>{var t,n;const o=["cidr_prefix","gateway_ip"];return e.wan_smartq_enabled||(o.push("wan_smartq_up_rate"),o.push("wan_smartq_down_rate")),null!==(t=e.wan_dns1)&&void 0!==t||o.push("wan_dns1"),null!==(n=e.wan_dns2)&&void 0!==n||o.push("wan_dns2"),e.wan_type!==r.IpV4ConnectionType.PPPOE&&(o.push("wan_username"),o.push("x_wan_password")),e.wan_type!==r.IpV4ConnectionType.STATIC&&(o.push("wan_ip"),o.push("wan_netmask"),o.push("wan_gateway")),e.wan_provider_capabilities&&(e.wan_provider_capabilities.hasAtleastOneDefined?e.wan_provider_capabilities=(e=>Object(a.a)({...e,download_kilobits_per_second:Object(s.a)(e.download_kilobits_per_second,e.download_unit),upload_kilobits_per_second:Object(s.a)(e.upload_kilobits_per_second,e.upload_unit)},"download_unit","upload_unit","hasAtleastOneDefined"))(e.wan_provider_capabilities):delete e.wan_provider_capabilities),Object(a.a)(e,...o)},p=e=>{const t=["cidr_prefix","gateway_ip","dhcp_mode","contentFilter"],n=(e=>Object.entries(e).filter(([e,t])=>!!e.startsWith(i.DHCP_USER_OPTION_PREFIX)&&[void 0,null,""].some(e=>e===t)).map(([e])=>e))(e),{ipv6_interface_type:o,ipv6_pd_prefixid:s,vlan:c}=e;"none"===o&&t.push("ipv6_ra_priority","ipv6_ra_valid_lifetime","ipv6_ra_preferred_lifetime","dhcpdv6_enabled","dhcpdv6_start","dhcpdv6_stop","dhcpdv6_leasetime","dhcpdv6_dns_auto","dhcpdv6_dns_1","dhcpdv6_dns_2","dhcpdv6_dns_3","dhcpdv6_dns_4"),"static"!==o&&t.push("ipv6_subnet"),"pd"!==o&&t.push("ipv6_pd_interface","ipv6_pd_prefixid","ipv6_pd_start","ipv6_pd_stop");const l=e.nat_outbound_ip_addresses.filter(e=>e.ip_address);l.length||t.push("nat_outbound_ip_addresses");const p=Object(a.a)({...e,vlan_enabled:!!c,ipv6_pd_prefixid:null!=s?s:"",nat_outbound_ip_addresses:l},...t,...n),{gateway_device:u,gateway_type:d}=p;return u&&d!==r.NetworkGatewayType.default||(p.gateway_type=r.NetworkGatewayType.default,delete p.gateway_device),p},u=({...e})=>{switch(e.purpose){case r.NetworkPurpose.VLAN_ONLY:return(e=>({vlan_enabled:!0,...Object(o.a)(e,["_id","site_id","purpose","name","vlan","enabled","is_nat","igmp_snooping","dhcpguard_enabled","dhcpd_ip_1","dhcpd_ip_2","dhcpd_ip_3"])}))(e);case r.NetworkPurpose.WAN:return l(e);case r.NetworkPurpose.REMOTE_USER_VPN:return(e=>{const t=p(e),n=Object(o.a)(t,...r.vpnPickKeys.server);return n.vpn_type!==r.ServerVpnType.L2TP_SERVER&&(delete n.l2tp_interface,delete n.l2tp_local_wan_ip,delete n.x_ipsec_pre_shared_key),n})(e);case r.NetworkPurpose.SITE_VPN:return(e=>{const t=p(e);return Object(o.a)({...t,ipsec_dh_group:Number(e.ipsec_dh_group),ipsec_ike_dh_group:Number(e.ipsec_ike_dh_group),ipsec_esp_dh_group:Number(e.ipsec_esp_dh_group),openvpn_mode:"site-to-site"},...r.vpnPickKeys.siteToSite[e.vpn_type])})(e);case r.NetworkPurpose.VPN_CLIENT:return(e=>{const t=p(e);return Object(o.a)(t,...r.vpnPickKeys.client)})(e);default:return(e=>{const t=p(e),n=[...r.vpnSpecificFields.client,...r.vpnSpecificFields.server,...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.AUTO_IPSEC_VTI],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.MANUAL_IPSEC],...r.vpnSpecificFields.siteToSite[r.SiteToSiteVpnType.OPEN_VPN]].filter(e=>!r.networkAndVpnSharedKeys.includes(e));return Object(a.a)(t,...n)})(e)}}},2289:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var o=n(78),a=n(1995);const r=Object.values(a.a),i=e=>{const t=Math.min(r.length-1,Object(o.f)(e,1e3));return{value:Math.abs(e/1e3**t),unit:r[t]}},s=(e,t)=>{switch(t){case a.a.G:return Math.round(1e6*e);case a.a.M:return 1e3*e;case a.a.K:default:return e}},c=({download_kilobits_per_second:e,upload_kilobits_per_second:t})=>({download:i(e),upload:i(t)})}}]);