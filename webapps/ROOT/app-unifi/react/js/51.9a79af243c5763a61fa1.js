(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[51],{1824:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a(28),c=a(42),l=a(391),_=a(393),s=a(804),u=a(399),d=a(6),E=a(540),b=a(1950),m=a(64),h=a(95),N=a(2012),T=a(2),p=a(5),I=a(4),A=a(31),f=a(2038),O=a(1972),S=a(13),y=a(805),C=a(836),v=a(3),g=a(78),L=a(76);const w=Object(v.a)(d.selectSiteGateway,E.f,d.selectIsUlteInFailover,(e,t,a)=>t.map(t=>{const{details:{service_provider:n},statistics:{uptime_percentage:r,peak_usage:{download_percentage:i,upload_percentage:c}},configuration:{_id:l,name:_,attr_no_delete:s,attr_hidden_id:u}}=t,d=u===o.NetworkHiddenId.WAN?null==e?void 0:e.wan1:null==e?void 0:e.wan2;return{id:l,name:_,ip:(null==d?void 0:d.ip)||"-",isp:(null==n?void 0:n.name)||"-",location:(null==n?void 0:n.city)||"-",uptime:r>=0?(null==r?void 0:r.toFixed(0))+"%":"-",peakUseDownload:null!=i?i:-1,peakUseUpload:null!=c?c:-1,attr_no_delete:s,isWanPortUp:!a&&(null==d?void 0:d.up)}})),R=Object(v.a)(d.selectUlteDevice,o.selectWanNetworks,E.e,(e,{intl:t})=>t,(e,t,a,n)=>e?t.filter(e=>Object(o.isUlteFailoverNetwork)(e)).map(t=>{var r,i,o;const{availableBytes:c,softLimitBytes:l}=Object(d.calculateUsage)(e),_=n.formatMessage({id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_DATA_REMAINING"},{available:Object(g.c)(c),softLimit:Object(g.c)(l)}),s=a.find(e=>e.configuration._id===t._id),u=a.find(e=>"WAN"===e.configuration.attr_hidden_id);return{id:t._id,name:Object(L.b)(e)||t.name,device:e,ip:t.wan_ip,isp:(null==e?void 0:e.lte_networkoperator)||"-",location:(null===(r=null==u?void 0:u.details)||void 0===r?void 0:r.service_provider.city)||"-",uptime:(null===(i=null==s?void 0:s.statistics)||void 0===i?void 0:i.uptime_percentage)>=0?(null===(o=null==s?void 0:s.statistics)||void 0===o?void 0:o.uptime_percentage.toFixed(0))+"%":"-",dataRemaining:_}}):[]);var j=a(2112);const x=Object(p.c)(f.a)`
  min-width: 480px;
`,M=Object(p.c)("div")`
  table {
    tr th,
    tr td {
      padding-right: ${({theme:e})=>e.spacing["spacing-m"]} !important;
    }
  }
`;var k=()=>{const e=Object(m.h)("internet/wan/form"),t=Object(A.k)(),a=Object(i.useSelector)(w),o=Object(i.useSelector)(d.selectSiteGateway),c=Object(i.useDispatch)(),{sortBy:l,isAscending:_}=Object(i.useSelector)(Object(S.F)(y.a.SETTINGS_WAN))||{sortBy:"wan-networks-table-name",isAscending:!0},s=Object(n.useCallback)(()=>t.push(e),[e,t]),u=Object(n.useMemo)(()=>{if(null==o?void 0:o.model){const{networkGroups:e,ports:t}=Object(d.getDeviceSpecs)(o);if([...Object.values(e),...Object.values(t)].filter(e=>{var t;return null===(t=null==e?void 0:e.includes)||void 0===t?void 0:t.call(e,"WAN")}).some(e=>e.replace(" ","").includes("WAN2"))&&a.length<2)return!0}return!1},[null==o?void 0:o.model,a.length]);return r.a.createElement(x,{headerTitle:r.a.createElement(b.b,{label:r.a.createElement(I.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADING"})}),headerButton:u?r.a.createElement(h.b,null,r.a.createElement(b.g,{name:"networks-create",variant:"secondary",onClick:s},r.a.createElement(I.c,{id:"SETTINGS_INTERNET_BUTTON_ADD_INTERNET_CONNECTION"}))):void 0},0!==a.length&&r.a.createElement(M,null,r.a.createElement(C.a,{horizontal:!0},r.a.createElement(O.a,{columns:j.e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:a,onSort:(e,t)=>{c(Object(S.P)(y.a.SETTINGS_WAN,{sortBy:e.id,isAscending:t}))},initialSortBy:l,initiallySortAscending:_,onRowClick:({id:a})=>t.push(`${e}/${a}`)}))))};const D=Object(p.c)(f.a)`
  min-width: 480px;
`,P=Object(p.c)("div")`
  table {
    tr th,
    tr td {
      padding-right: ${({theme:e})=>e.spacing["spacing-m"]} !important;
    }
  }
`;var B=Object(I.f)(({intl:e})=>{const t=Object(i.useSelector)(t=>R(t,{intl:e}));return t.length>0&&r.a.createElement(D,{headerTitle:r.a.createElement(b.b,{label:r.a.createElement(I.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADING"})})},r.a.createElement(P,null,r.a.createElement(h.i,{horizontal:!0},r.a.createElement(O.a,{columns:j.b,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))))});const G={fetchNetworks:o.fetchNetworks};t.default=Object(i.connect)(e=>({wanNetworks:Object(o.selectWanNetworks)(e),portForwardRules:Object(l.selectPortForwardData)(e),routing:Object(_.selectRouting)(e),dhcpOptions:Object(s.selectDhcpOptionsData)(e),dynamicDns:Object(u.selectDynamicDnsData)(e),usgSettings:Object(c.selectUsgSettings)(e)}),G)(()=>{const e=Object(i.useDispatch)();return Object(n.useEffect)(()=>()=>e(Object(T.c)(E.c)),[]),Object(m.e)([Object(o.fetchNetworks)(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),Object(d.fetchDevices)(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),Object(l.fetchPortForwardRules)(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),Object(_.fetchRouting)(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),Object(s.fetchDhcpOptions)({crudCacheStrategy:{type:T.a.CACHE}}),Object(u.fetchDynamicDns)({crudCacheStrategy:{type:T.a.CACHE}}),E.c],r.a.createElement(h.j,null,r.a.createElement(b.e,{scrollable:!0},r.a.createElement(N.a,null,r.a.createElement(h.n,{padding:"none"},r.a.createElement(k,null)),r.a.createElement(h.n,{padding:"none"},r.a.createElement(B,null))))))})},1946:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"m",(function(){return d})),a.d(t,"k",(function(){return E})),a.d(t,"h",(function(){return b})),a.d(t,"g",(function(){return m})),a.d(t,"j",(function(){return h})),a.d(t,"f",(function(){return N})),a.d(t,"i",(function(){return T})),a.d(t,"l",(function(){return p})),a.d(t,"d",(function(){return A})),a.d(t,"e",(function(){return f})),a.d(t,"n",(function(){return S})),a.d(t,"o",(function(){return y})),a.d(t,"c",(function(){return C})),a.d(t,"p",(function(){return g})),a.d(t,"q",(function(){return L}));var n=a(112);const r=e=>(t,a,r,i)=>Object(n.d)(e(r,t),e(i,a)),i=e=>t=>{const a=(e=>t=>e.formatMessage({id:t}))(e);return(e,n,r,i)=>{const[o,c]=[t(e,r),t(n,i)].map(a);return o.localeCompare(c)}};var o=a(16),c=a(133),l=a(6),_=a(138),s=a(76);const u={ugw:1,usw:2,uap:3},d=(e,t,a,r)=>{const i=l.DEVICE_STATE_IMPORTANCE[Object(l.getDeviceState)(a)],o=l.DEVICE_STATE_IMPORTANCE[Object(l.getDeviceState)(r)];if(i===o){if(a.adopted===r.adopted){if(a.type!==r.type)return((e,t)=>{const a=e.type,r=t.type;return a===r?Object(n.d)(Object(s.a)(e),Object(s.a)(t)):Object(n.d)(u[a],u[r])})(a,r);const e=a.originalName,t=r.originalName;return e&&t?Object(n.d)(e,t):e?-1:t?1:Object(n.d)(a.modelName,r.modelName)}return Object(n.d)(a.adopted?1:2,r.adopted?1:2)}return Object(n.d)(i,o)},E=(e,t,a,r)=>Object(n.d)(Object(s.a)(a),Object(s.a)(r)),b=(e,t,a,r)=>{const i=Object(_.d)(Object(l.getDeviceIp)(a))||0,o=Object(_.d)(Object(l.getDeviceIp)(r))||0;return Object(n.d)(i,o)},m=(e,t,a,r)=>{const{averageSatisfaction:i}=a.satisfactionByRadio,{averageSatisfaction:o}=r.satisfactionByRadio;let c=Object(l.getDeviceExperience)(a),_=Object(l.getDeviceExperience)(r);return a.type===l.DeviceType.AP&&i<0&&(c=-.5),r.type===l.DeviceType.AP&&o<0&&(_=-.5),Object(n.d)(c,_)},h=(e,t,a,r)=>{const i=Object(l.getDeviceMemoryUsage)(a)||0,o=Object(l.getDeviceMemoryUsage)(r)||0;return Object(n.d)(i,o)},N=(e,t,a,r)=>{const i=parseFloat(Object(o.a)(a,"system-stats.cpu",0)),c=parseFloat(Object(o.a)(r,"system-stats.cpu",0));return Object(n.d)(i,c)},T=(e,t,a,r)=>{const i=parseFloat(Object(o.a)(a,"sys_stats.loadavg_1",-1)),c=parseFloat(Object(o.a)(r,"sys_stats.loadavg_1",-1));return Object(n.d)(i,c)},p=(e,t,a)=>{const r=Object(l.getRadioByType)(e,a),i=Object(l.getRadioByType)(t,a),o=r?Object(l.getRadioStatsByName)(e,r.name):null,c=i?Object(l.getRadioStatsByName)(t,i.name):null;if(r&&i&&o&&c){let a,_;const s=(e,t)=>e&&t?Object(n.d)(e,t):(e?-1:t&&1)||0;return a=("auto"===r.channel?0:r.channel)||0,_=("auto"===i.channel?0:i.channel)||0,s(a,_)?s(a,_):(a=Object(l.getRadioStatsBindedChannel)(e,o)||r.channel||0,_=Object(l.getRadioStatsBindedChannel)(t,c)||i.channel||0,s(a,_)?s(a,_):(a=parseInt(Object(l.getRadioHt)(r),10),_=parseInt(Object(l.getRadioHt)(i),10),s(a,_)?s(a,_):(a=Object(l.getRadioStatsPrimaryChannel)(o)||r.channel||0,_=Object(l.getRadioStatsPrimaryChannel)(c)||r.channel||0,s(a,_)?s(a,_):(a=Object(l.getRadioStatsTransmitPower)(o),_=Object(l.getRadioStatsTransmitPower)(c),s(a,_)?s(a,_):0))))}if(r&&i){if(o)return 1;if(c)return-1}return r?1:i?-1:0},I=(e,t)=>{if(!e.radio_table_stats)return-1;return Object(l.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},A=(e,t,a,r)=>{const i=I(a,c.b.NG),o=I(r,c.b.NG);return Object(n.d)(i,o)},f=(e,t,a,r)=>{const i=I(a,c.b.NA),o=I(r,c.b.NA);return Object(n.d)(i,o)},O=(e,t)=>{const a=Object(l.getRadioStatsByType)(e,t);return a.length?a.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):-1},S=(e,t,a,r)=>{const i=O(a,c.b.NG),o=O(r,c.b.NG);return Object(n.d)(i,o)},y=(e,t,a,r)=>{const i=O(a,c.b.NA),o=O(r,c.b.NA);return Object(n.d)(i,o)},C=(e,t,a,r)=>{const i=Object(l.getChannelValue)(a),o=Object(l.getChannelValue)(r);return Object(n.d)(i,o)},v=(e,t)=>Object(l.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.cu_total||0,0),g=(e,t,a,r)=>{const i=v(a,c.b.NG),o=v(r,c.b.NG);return Object(n.d)(i,o)},L=(e,t,a,r)=>{const i=v(a,c.b.NA),o=v(r,c.b.NA);return Object(n.d)(i,o)}},1949:function(e,t,a){e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),c=(n=o)&&n.__esModule?n:{default:n},l=a(2);var _={action:null,isActive:!1,nextLocation:null},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._prevUserAction="",a._isMounted=!0,a.block=a.block.bind(a),a.onBeforeUnload=a.onBeforeUnload.bind(a),a.onCancel=a.onCancel.bind(a),a.onConfirm=a.onConfirm.bind(a),a.when=a.when.bind(a),a.state=r({},_,{unblock:function(){}}),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var a=this.when(e);return a&&this.setState({action:t,nextLocation:e,isActive:!0}),!a}},{key:"navigateToNextLocation",value:function(e){var t=this,a=this.state,n=a.action,i=a.nextLocation;n={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[n||"PUSH"],i||(i={pathname:"/"});var o=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===n){var c=o.listen((function(){c(),t._isMounted&&t.setState(r({},_,{unblock:o.block(t.block)}))}));o.goBack()}else o[n](i),this._isMounted&&this.setState(r({},_,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(r({},_))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?c.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(c.default.Component);t.default=(0,l.withRouter)(s)},function(e,t){e.exports=a(0)},function(e,t){e.exports=a(671)}])},1956:function(e,t,a){(t=a(290)(!1)).push([e.i,"._2CK7bYrzA61VHROCpc-Pto{color:var(--status-text-color);display:inline-block;font-size:10px;text-transform:uppercase}._2SLoFfvH9hW4rKKuaiBtO3{color:#39cc64}.Kmd1jQ00VlOZksCfvtOd7{color:#f5a623}._1n1-pNdSId4IXjH2NBBqQK{color:#f03a3e}._2TJXw0jvp8-Udl2edpOPsF{color:#006fff}.CwnkZfqYILIlAcLwGpeP6{color:#c2c4ce}",""]),t.locals={ubntStatusText:"_2CK7bYrzA61VHROCpc-Pto","ubntStatusText--success":"_2SLoFfvH9hW4rKKuaiBtO3","ubntStatusText--warning":"Kmd1jQ00VlOZksCfvtOd7","ubntStatusText--danger":"_1n1-pNdSId4IXjH2NBBqQK","ubntStatusText--primary":"_2TJXw0jvp8-Udl2edpOPsF","ubntStatusText--neutral":"CwnkZfqYILIlAcLwGpeP6"},e.exports=t},1972:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(1752),l=a(73),_=a(795),s=a(27),u=a(796),d=a(688),E=a(231),b=a(112),m=a(798),h=a(794),N=a(390),T=a(797);t.a=Object(l.a)(class extends n.Component{constructor(e){super(e)}render(){const e=Object(c.a)({},this.props,b.a),{motif:t,renderFooter:a,className:i,width:l,tableClassName:p,renderPlaceholder:I,idField:A,forwardedRef:f}=e;return r.a.createElement(N.a,Object.assign({},e,{ref:f}),r.a.createElement(u.a,{className:i,motif:t,width:Object(b.g)(l)},r.a.createElement(E.a.Consumer,null,e=>{const{noItems:a,renderedItems:i}=e;return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{className:p,motif:t},r.a.createElement(m.a,null),r.a.createElement(h.a,null,i.map((t,a)=>r.a.createElement(T.a,{key:Object(b.h)(t[A]),row:t,rowIndex:a,context:e})))),a&&void 0!==I&&r.a.createElement("div",{className:s.a.placeholder},r.a.createElement(_.a,{className:s.a.placeholderIcon,size:"large"}),I()))}),void 0!==a&&r.a.createElement("div",{className:o()(s.a.footer,s.a[t])},a())))}})},1981:function(e,t,a){var n=a(289),r=a(1956);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},1992:function(e,t,a){"use strict";var n=a(25);Object(n.a)(".container__myzJhMx8{width:100%;padding:32px;border-radius:8px}.container-dark__myzJhMx8{background-color:#1e1e1e}.container-light__myzJhMx8{background-color:#fff;background-color:#f8f8f9}.container__myzJhMx8.bubbleContainerClickable__myzJhMx8{transition:background-color .1s ease}.container__myzJhMx8.bubbleContainerClickable-dark__myzJhMx8:hover{background-color:#353535}.container__myzJhMx8.bubbleContainerClickable-dark__myzJhMx8 .headerButton__myzJhMx8 *,.container__myzJhMx8.bubbleContainerClickable-dark__myzJhMx8:focus .headerButton__myzJhMx8 *,.container__myzJhMx8.bubbleContainerClickable-dark__myzJhMx8:hover .headerButton__myzJhMx8 *{color:#9d9d9d}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8:hover{background-color:#e5e5e5}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8 .headerButton__myzJhMx8 *{color:#525461}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8:focus .headerButton__myzJhMx8 *,.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8:hover .headerButton__myzJhMx8 *{color:#7e8190}.container__myzJhMx8.bubbleContainerClickable__myzJhMx8,.container__myzJhMx8.bubbleContainerClickable__myzJhMx8 *{text-align:left}.container__myzJhMx8.bubbleContainerClickable__myzJhMx8 :not(:first-child),.container__myzJhMx8.bubbleContainerClickable__myzJhMx8:not(:first-child){margin-left:0}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8 .header__myzJhMx8,.container__myzJhMx8.bubbleContainerClickable__myzJhMx8 .headerButton__myzJhMx8{transition:color .1s ease}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8:hover{background-color:#f8f8f9}.container__myzJhMx8.bubbleContainerClickable-light__myzJhMx8:hover .header__myzJhMx8{color:#7e8190}.header__myzJhMx8{display:flex;font-size:14px;align-items:center;justify-content:space-between;padding-bottom:32px}.header-dark__myzJhMx8{color:hsla(0,0%,100%,.85)}.header-light__myzJhMx8{color:rgba(0,0,0,.85)}.header__myzJhMx8.noChildren__myzJhMx8{padding-bottom:0}.bubbleButton__myzJhMx8{outline:none}.bubbleButton-dark__myzJhMx8.is-accessible__myzJhMx8:focus{outline:1px solid #fff}.bubbleButton-light__myzJhMx8.is-accessible__myzJhMx8:focus{outline:1px solid #006fff}"),t.a={container:"container__myzJhMx8","container-dark":"container-dark__myzJhMx8","container-light":"container-light__myzJhMx8",bubbleContainerClickable:"bubbleContainerClickable__myzJhMx8","bubbleContainerClickable-dark":"bubbleContainerClickable-dark__myzJhMx8",headerButton:"headerButton__myzJhMx8","bubbleContainerClickable-light":"bubbleContainerClickable-light__myzJhMx8",header:"header__myzJhMx8","header-dark":"header-dark__myzJhMx8","header-light":"header-light__myzJhMx8",noChildren:"noChildren__myzJhMx8",bubbleButton:"bubbleButton__myzJhMx8","bubbleButton-dark":"bubbleButton-dark__myzJhMx8","is-accessible":"is-accessible__myzJhMx8","bubbleButton-light":"bubbleButton-light__myzJhMx8"}},2012:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1848),o=a(5),c=a(793);const l=(e,t,a)=>o.a`
  &-appear,
  &-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  &-appear-active,
  &-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${e*t+a+70}ms cubic-bezier(0.25, 0.1, 0.25, 1),
      transform 300ms ${e*t+a+70}ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active,
  &-exit-done {
    opacity: 0;
    transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`,_=r.a.forwardRef(e=>{const{timeout:t={enter:300,exit:100},in:a=!0,delay:o=70,initialDelay:_=0,children:s,...u}=e,d=Object(c.a)(),E=Object(n.useMemo)(()=>r.a.Children.map(s,(e,n)=>null===e?e:r.a.createElement(i.a,Object.assign({appear:a||!d,in:a||!d,timeout:t,classNames:l(n,o,_),mountOnEnter:!0},u),e)),[s,o,_,a,d,u,t]);return r.a.createElement(r.a.Fragment,null,E)});t.a=_},2038:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(7),o=a.n(i),c=a(40),l=a(1992);t.a=({className:e,containerClassName:t,headerContentClassName:a,headerTitle:n,headerButton:i,children:_})=>{const{motif:s}=Object(c.a)();return r.a.createElement("div",{className:o()(l.a.container,l.a["container-"+s],e,t)},r.a.createElement("div",{className:o()(l.a.header,l.a["header-"+s],!_&&l.a.noChildren,a)},n&&r.a.createElement("div",{className:o()(l.a.headerTitle)},n),i&&r.a.createElement("div",{className:o()(l.a.headerButton)},i)),_)}},2095:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return E}));var n=a(0),r=a.n(n),i=a(4),o=a(30),c=a(98),l=a(2123);const _=()=>o.a.string().label("SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_FIELD_LABEL").matches(c.j,r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"})),s=(e,t)=>{const a={arrayFieldName:"wan_ip_aliases",stringFieldName:"wan_ip_alias",errorMessage:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_WAN_ADDITIONAL_IP_ADDRESSES_PLACEHOLDER_SUBNET_UNIQUE"})};return o.a.object().shape({editActive:o.a.bool(),...t===l.a.ADD_IP_RANGE?{new_wan_ip_alias_start:_().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange(),new_wan_ip_alias_stop:_().isIPUnique({formValues:null,...a}).CIDRMaskMatch().CIDRCorrectRange()}:{new_wan_ip_alias:_().isIPUnique({formValues:null,...a})},wan_ip_aliases:o.a.array().of(o.a.object().shape({wan_ip_alias:_().isIPUnique({formValues:e,...a}).required()}))})},u={DOWNLOAD:{MIN:1},UPLOAD:{MIN:1}},d=[{value:"failover-only",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_FAILOVER"},{value:"weighted",label:"SETTINGS_WAN_VALUES_LOAD_BALANCE_WEIGHTED"}],E=[{value:"",label:"None"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"}]},2112:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return y})),a.d(t,"b",(function(){return C})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return g}));var n=a(0),r=a.n(n),i=a(4),o=a(574),c=a(98),l=a(30),_=a(79),s=a(88),u=a(2095);var d=e=>s.a.object().shape({name:l.e,...e&&{mac_override_enabled:s.a.boolean().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS_CLONE").required(),mac_override:s.a.string().when("mac_override_enabled",{is:!0,then:s.a.string().label("SETTINGS_INTERNET_WAN_LABEL_MAC_ADDRESS").matches(c.p,r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_MAC"})).unicastMAC().required()})},wan_type_v6:s.a.string(),wan_type:s.a.string(),wan_netmask:s.a.string().when("wan_type",{is:_.e.STATIC,then:s.a.string().label("SETTINGS_INTERNET_WAN_LABEL_SUBNET_MASK").matches(c.i,r.a.createElement(i.c,{id:"COMMON_VALIDATION_VALID_SUBNET"})).required()}),wan_ip:s.a.string().when("wan_type",{is:_.e.STATIC,then:l.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_IP_ADDRESS").required()}),wan_gateway:l.b.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER"),wan_gateway_v6:l.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_ROUTER"),wan_dhcpv6_pd_size:s.a.number().when("wan_type_v6",{is:"dhcpv6",then:s.a.number().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_DHCP_PD_SIZE").required().min(48).max(64)}),wan_ipv6:s.a.string().when("wan_type_v6",{is:"static",then:l.d.clone().label("SETTINGS_INTERNET_WAN_LABEL_IPV6_ADDRESS").required()}),wan_prefixlen:s.a.number().when("wan_type_v6",{is:"static",then:s.a.number().label("SETTINGS_INTERNET_WAN_LABEL_PREFIX_LENGTH").required()}),wan_vlan_enabled:s.a.boolean().label("SETTINGS_WIFI_ADVANCED_SPECIFY_VLAN_LABEL").required(),wan_vlan:s.a.number().when("wan_vlan_enabled",{is:!0,then:s.a.number().label("SETTINGS_INTERNET_WAN_LABEL_VLAN_ID").min(0).max(o.a.MAX_VLAN)}),wan_load_balance_type:s.a.string(),wan_load_balance_weight:s.a.number().when("wan_load_balance_type",{is:"weighted",then:s.a.number().label("SETTINGS_INTERNET_WAN_LABEL_LOAD_BALANCING_WEIGHT").required().min(1).max(100)}),wan_smartq_enabled:s.a.bool(),wan_smartq_up_rate:s.a.string().when("wan_smartq_enabled",{is:!0,then:s.a.string().required(r.a.createElement(i.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_UP_RATE_REQUIRED"}))}),wan_smartq_down_rate:s.a.string().when("wan_smartq_enabled",{is:!0,then:s.a.string().required(r.a.createElement(i.c,{id:"SETTINGS_INTERNET_WAN_LABEL_SMART_QUEUES_DOWN_RATE_REQUIRED"}))}),wan_dns1:l.b,wan_dns2:l.b,wan_username:s.a.string().when("wan_type",{is:_.e.PPPOE,then:s.a.string().label("SETTINGS_INTERNET_WAN_LABEL_USERNAME").required()}),x_wan_password:s.a.string().when("wan_type",{is:_.e.PPPOE,then:s.a.string().label("SETTINGS_INTERNET_WAN_LABEL_PASSWORD").required()}),wan_provider_capabilities:s.a.object().shape({hasAtleastOneDefined:s.a.bool(),download_kilobits_per_second:s.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:s.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_DOWNLOAD_LABEL").min(u.a.DOWNLOAD.MIN).required()}),upload_kilobits_per_second:s.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").when("hasAtleastOneDefined",{is:!0,then:s.a.number().label("SETTINGS_INTERNET_VALUES_ISP_CAPABILITIES_UPLOAD_LABEL").min(u.a.UPLOAD.MIN).required()})})}),E=a(1199),b=a(49),m=a(1197),h=a(5),N=a(113),T=a(24),p=a(1946),I=a(59);const A=Object(h.c)(N.c)`
  margin: 0 ${({theme:e})=>e.space[2]}px;
`,f=Object(h.c)(E.a)`
  margin-right: ${({theme:e})=>e.space[3]}px;
`,O=Object(h.c)(b.a)`
  display: flex;
  flex-direction: row;
`,S=(e,t,a)=>e>=100?r.a.createElement(m.a,{portal:!0,width:150,message:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,t),r.a.createElement(b.a,{color:"secondary"},a))},r.a.createElement(b.a,{truncate:!0,color:"danger"},"100%")):e.toFixed(0)+"%",y=[{id:"wan-networks-table-name",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_NAME"}),renderCell:({name:e,isWanPortUp:t})=>r.a.createElement(T.a,{alignItems:"center",width:"100%"},r.a.createElement(f,{variant:t?"success":"neutral"}),r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e)),sortable:!0,compare:Object(p.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-networks-table-ip",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_IP"}),renderCell:({ip:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-networks-table-isp",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-networks-table-location",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-networks-table-uptime",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({uptime:e})=>e),minWidth:80,maxWidth:100},{id:"wan-networks-table-peakUse",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_HEADER_PEAK"}),renderCell:({peakUseDownload:e,peakUseUpload:t})=>{if(-1===Math.sign(e)&&-1===Math.sign(t))return r.a.createElement(b.a,{truncate:!0,color:"tertiary"},"-");const a=-1!==Math.sign(e)?S(e,r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_DOWNLOAD_TITLE"}),r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-",n=-1!==Math.sign(t)?S(t,r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_UPLOAD_TITLE"}),r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_INTERNET_TABLE_PEAK_TOOLTIP_MESSAGE"})):"-";return r.a.createElement(O,{truncate:!0,color:"tertiary"},a,"/",n)},sortable:!0,compare:Object(p.a)(({peakUse:e})=>e),minWidth:170}],C=[{id:"wan-backup-table-name",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_NAME"}),renderCell:({name:e,device:t})=>t?r.a.createElement(T.a,{alignItems:"center",width:"100%"},r.a.createElement(E.a,{variant:Object(I.F)(t)}),r.a.createElement(A,{device:t}),r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e)):e,sortable:!0,compare:Object(p.a)(({name:e})=>e.toLowerCase()),minWidth:140,maxWidth:140},{id:"wan-backup-table-ip",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_IP"}),renderCell:({ip:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({ip:e})=>e),minWidth:120,maxWidth:130},{id:"wan-backup-table-isp",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_ISP"}),renderCell:({isp:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({isp:e})=>e.toLowerCase()),minWidth:140,maxWidth:160},{id:"wan-backup-table-location",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_LOCATION"}),renderCell:({location:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({location:e})=>e.toLowerCase()),minWidth:100,maxWidth:120},{id:"wan-backup-table-uptime",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_UPTIME"}),renderCell:({uptime:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({uptime:e})=>e.toLowerCase()),minWidth:80,maxWidth:100},{id:"wan-backup-table-dataRemaining",label:r.a.createElement(i.c,{id:"SETTINGS_INTERNET_GENERAL_UNIFI_LTE_FAILOVER_TABLE_HEADER_DATA_REMAINING"}),renderCell:({dataRemaining:e})=>r.a.createElement(b.a,{truncate:!0,color:"tertiary"},e),sortable:!0,compare:Object(p.a)(({dataRemaining:e})=>e),minWidth:170}];var v=[{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_DHCP_V4",value:_.e.DHCP},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_STATIC_IP",value:_.e.STATIC},{label:"SETTINGS_INTERNET_VALUES_IPV4_CONNECTION_TYPE_PPPOE",value:_.e.PPPOE}],g=[{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DISABLED",value:_.c.DISABLED},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_DHCP",value:_.c.DHCPV6},{label:"SETTINGS_INTERNET_VALUES_IPV6_CONNECTION_TYPE_STATIC_IP",value:_.c.STATIC}]},2123:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.ADD_IP="add_ip",e.ADD_IP_RANGE="add_ip_range"}(n||(n={}))}}]);