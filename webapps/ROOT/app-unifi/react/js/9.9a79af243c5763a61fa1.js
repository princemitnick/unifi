(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[9],{1941:function(e,t,o){"use strict";var r=o(25);Object(r.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1949:function(e,t,o){e.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),a=o(1),u=(r=a)&&r.__esModule?r:{default:r},f=o(2);var s={action:null,isActive:!1,nextLocation:null},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._prevUserAction="",o._isMounted=!0,o.block=o.block.bind(o),o.onBeforeUnload=o.onBeforeUnload.bind(o),o.onCancel=o.onCancel.bind(o),o.onConfirm=o.onConfirm.bind(o),o.when=o.when.bind(o),o.state=n({},s,{unblock:function(){}}),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var o=this.when(e);return o&&this.setState({action:t,nextLocation:e,isActive:!0}),!o}},{key:"navigateToNextLocation",value:function(e){var t=this,o=this.state,r=o.action,i=o.nextLocation;r={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[r||"PUSH"],i||(i={pathname:"/"});var a=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===r){var u=a.listen((function(){u(),t._isMounted&&t.setState(n({},s,{unblock:a.block(t.block)}))}));a.goBack()}else a[r](i),this._isMounted&&this.setState(n({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(n({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?u.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(u.default.Component);t.default=(0,f.withRouter)(c)},function(e,t){e.exports=o(0)},function(e,t){e.exports=o(671)}])},1956:function(e,t,o){(t=o(290)(!1)).push([e.i,"._2CK7bYrzA61VHROCpc-Pto{color:var(--status-text-color);display:inline-block;font-size:10px;text-transform:uppercase}._2SLoFfvH9hW4rKKuaiBtO3{color:#39cc64}.Kmd1jQ00VlOZksCfvtOd7{color:#f5a623}._1n1-pNdSId4IXjH2NBBqQK{color:#f03a3e}._2TJXw0jvp8-Udl2edpOPsF{color:#006fff}.CwnkZfqYILIlAcLwGpeP6{color:#c2c4ce}",""]),t.locals={ubntStatusText:"_2CK7bYrzA61VHROCpc-Pto","ubntStatusText--success":"_2SLoFfvH9hW4rKKuaiBtO3","ubntStatusText--warning":"Kmd1jQ00VlOZksCfvtOd7","ubntStatusText--danger":"_1n1-pNdSId4IXjH2NBBqQK","ubntStatusText--primary":"_2TJXw0jvp8-Udl2edpOPsF","ubntStatusText--neutral":"CwnkZfqYILIlAcLwGpeP6"},e.exports=t},1972:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(7),a=o.n(i),u=o(1752),f=o(73),s=o(795),c=o(27),l=o(796),p=o(688),d=o(231),m=o(112),b=o(798),O=o(794),v=o(390),h=o(797);t.a=Object(f.a)(class extends r.Component{constructor(e){super(e)}render(){const e=Object(u.a)({},this.props,m.a),{motif:t,renderFooter:o,className:i,width:f,tableClassName:y,renderPlaceholder:_,idField:g,forwardedRef:S}=e;return n.a.createElement(v.a,Object.assign({},e,{ref:S}),n.a.createElement(l.a,{className:i,motif:t,width:Object(m.g)(f)},n.a.createElement(d.a.Consumer,null,e=>{const{noItems:o,renderedItems:i}=e;return n.a.createElement(r.Fragment,null,n.a.createElement(p.a,{className:y,motif:t},n.a.createElement(b.a,null),n.a.createElement(O.a,null,i.map((t,o)=>n.a.createElement(h.a,{key:Object(m.h)(t[g]),row:t,rowIndex:o,context:e})))),o&&void 0!==_&&n.a.createElement("div",{className:c.a.placeholder},n.a.createElement(s.a,{className:c.a.placeholderIcon,size:"large"}),_()))}),void 0!==o&&n.a.createElement("div",{className:a()(c.a.footer,c.a[t])},o())))}})},1973:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(7),a=o.n(i),u=o(523),f=o(40),s=o(235),c=o(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:o=!1,contentClassName:i,margin:l,marginX:p,marginY:d,marginTop:m,marginRight:b,marginBottom:O,marginLeft:v,padding:h="xxxxl",paddingX:y,paddingY:_,paddingTop:g,paddingRight:S,paddingBottom:j,paddingLeft:C,children:w,className:F,style:x,...k})=>{var P,B,E,N,A,M,T,U;const{motif:L}=Object(f.a)(),[D,z]=Object(r.useState)(0),I=Object(r.useRef)(null);return Object(r.useEffect)(()=>{if(I.current){const{height:e}=I.current.getBoundingClientRect();z(e)}},[]),Object(r.useEffect)(()=>{const e=Object(u.a)(()=>{if(I.current){const{height:e}=I.current.getBoundingClientRect();z(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),n.a.createElement("footer",Object.assign({className:a()(c.a.formFooter,s.a["margin-top-"+(null!==(B=null!==(P=null!=m?m:d)&&void 0!==P?P:l)&&void 0!==B?B:"")],s.a["margin-right-"+(null!==(N=null!==(E=null!=b?b:p)&&void 0!==E?E:l)&&void 0!==N?N:"")],s.a["margin-bottom-"+(null!==(M=null!==(A=null!=O?O:d)&&void 0!==A?A:l)&&void 0!==M?M:"")],s.a["margin-left-"+(null!==(U=null!==(T=null!=v?v:p)&&void 0!==T?T:l)&&void 0!==U?U:"")],F),style:{height:e?D:0,transform:`translateY(${e?0:D+"px"})`,...x}},k),n.a.createElement("div",{className:a()(c.a.formFooterContent,c.a["formFooterContent-align-"+t],c.a["formFooterContent-"+L],o&&c.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(g||_||h)],s.a["padding-right-"+(S||y||h)],s.a["padding-bottom-"+(j||_||h)],s.a["padding-left-"+(C||y||h)],i),ref:I},w))}},1974:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(7),a=o.n(i),u=o(800),f=o(170),s=o(1941);t.a=({size:e="medium",variant:t,wrapClassName:o,className:r,...i})=>n.a.createElement(f.a,Object.assign({className:a()(t===u.b[0]&&s.a["formFooterButton-default-size-"+e],r),size:e,wrapClassName:a()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,o),variant:t},i))},1981:function(e,t,o){var r=o(289),n=o(1956);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);e.exports=n.locals||{}},2159:function(e,t,o){var r,n,i;n=[t],void 0===(i="function"==typeof(r=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=(e.isDate=function(e){return e instanceof Date},e.isEmpty=function(e){return 0===Object.keys(e).length},e.isObject=function(e){return null!=e&&"object"===(void 0===e?"undefined":o(e))});e.properObject=function(e){return r(e)&&!e.hasOwnProperty?t({},e):e}})?r.apply(t,n):r)||(e.exports=i)},2292:function(e,t,o){var r,n,i;n=[t,o(2475),o(2293),o(2294),o(2295),o(2476)],void 0===(i="function"==typeof(r=function(e,t,o,r,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.detailedDiff=e.updatedDiff=e.deletedDiff=e.diff=e.addedDiff=void 0;var a=l(t),u=l(o),f=l(r),s=l(n),c=l(i);function l(e){return e&&e.__esModule?e:{default:e}}e.addedDiff=u.default,e.diff=a.default,e.deletedDiff=f.default,e.updatedDiff=s.default,e.detailedDiff=c.default})?r.apply(t,n):r)||(e.exports=i)},2293:function(e,t,o){var r,n,i;n=[e,t,o(2159)],void 0===(i="function"==typeof(r=function(e,t,o){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};t.default=function e(t,i){if(t===i||!(0,o.isObject)(t)||!(0,o.isObject)(i))return{};var a=(0,o.properObject)(t),u=(0,o.properObject)(i);return Object.keys(u).reduce((function(t,i){if(a.hasOwnProperty(i)){var f=e(a[i],u[i]);return(0,o.isObject)(f)&&(0,o.isEmpty)(f)?t:n({},t,r({},i,f))}return n({},t,r({},i,u[i]))}),{})},e.exports=t.default})?r.apply(t,n):r)||(e.exports=i)},2294:function(e,t,o){var r,n,i;n=[e,t,o(2159)],void 0===(i="function"==typeof(r=function(e,t,o){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};t.default=function e(t,i){if(t===i||!(0,o.isObject)(t)||!(0,o.isObject)(i))return{};var a=(0,o.properObject)(t),u=(0,o.properObject)(i);return Object.keys(a).reduce((function(t,i){if(u.hasOwnProperty(i)){var f=e(a[i],u[i]);return(0,o.isObject)(f)&&(0,o.isEmpty)(f)?t:n({},t,r({},i,f))}return n({},t,r({},i,void 0))}),{})},e.exports=t.default})?r.apply(t,n):r)||(e.exports=i)},2295:function(e,t,o){var r,n,i;n=[e,t,o(2159)],void 0===(i="function"==typeof(r=function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};t.default=function e(t,n){if(t===n)return{};if(!(0,o.isObject)(t)||!(0,o.isObject)(n))return n;var i=(0,o.properObject)(t),a=(0,o.properObject)(n);return(0,o.isDate)(i)||(0,o.isDate)(a)?i.valueOf()==a.valueOf()?{}:a:Object.keys(a).reduce((function(t,n){if(i.hasOwnProperty(n)){var u=e(i[n],a[n]);return(0,o.isObject)(u)&&(0,o.isEmpty)(u)&&!(0,o.isDate)(u)?t:r({},t,function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({},n,u))}return t}),{})},e.exports=t.default})?r.apply(t,n):r)||(e.exports=i)},2475:function(e,t,o){var r,n,i;n=[e,t,o(2159)],void 0===(i="function"==typeof(r=function(e,t,o){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};t.default=function e(t,i){if(t===i)return{};if(!(0,o.isObject)(t)||!(0,o.isObject)(i))return i;var a=(0,o.properObject)(t),u=(0,o.properObject)(i),f=Object.keys(a).reduce((function(e,t){return u.hasOwnProperty(t)?e:n({},e,r({},t,void 0))}),{});return(0,o.isDate)(a)||(0,o.isDate)(u)?a.valueOf()==u.valueOf()?{}:u:Object.keys(u).reduce((function(t,i){if(!a.hasOwnProperty(i))return n({},t,r({},i,u[i]));var f=e(a[i],u[i]);return(0,o.isObject)(f)&&(0,o.isEmpty)(f)&&!(0,o.isDate)(f)?t:n({},t,r({},i,f))}),f)},e.exports=t.default})?r.apply(t,n):r)||(e.exports=i)},2476:function(e,t,o){var r,n,i;n=[e,t,o(2293),o(2294),o(2295)],void 0===(i="function"==typeof(r=function(e,t,o,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=f(o),a=f(r),u=f(n);function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return{added:(0,i.default)(e,t),deleted:(0,a.default)(e,t),updated:(0,u.default)(e,t)}},e.exports=t.default})?r.apply(t,n):r)||(e.exports=i)}}]);