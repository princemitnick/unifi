(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[67],{1941:function(e,t,n){"use strict";var o=n(25);Object(o.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1949:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),l=(o=r)&&o.__esModule?o:{default:o},s=n(2);var c={action:null,isActive:!1,nextLocation:null},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=i({},c,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,o=n.action,a=n.nextLocation;o={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[o||"PUSH"],a||(a={pathname:"/"});var r=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===o){var l=r.listen((function(){l(),t._isMounted&&t.setState(i({},c,{unblock:r.block(t.block)}))}));r.goBack()}else r[o](a),this._isMounted&&this.setState(i({},c,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(i({},c))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?l.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(l.default.Component);t.default=(0,s.withRouter)(f)},function(e,t){e.exports=n(0)},function(e,t){e.exports=n(671)}])},1956:function(e,t,n){(t=n(290)(!1)).push([e.i,"._2CK7bYrzA61VHROCpc-Pto{color:var(--status-text-color);display:inline-block;font-size:10px;text-transform:uppercase}._2SLoFfvH9hW4rKKuaiBtO3{color:#39cc64}.Kmd1jQ00VlOZksCfvtOd7{color:#f5a623}._1n1-pNdSId4IXjH2NBBqQK{color:#f03a3e}._2TJXw0jvp8-Udl2edpOPsF{color:#006fff}.CwnkZfqYILIlAcLwGpeP6{color:#c2c4ce}",""]),t.locals={ubntStatusText:"_2CK7bYrzA61VHROCpc-Pto","ubntStatusText--success":"_2SLoFfvH9hW4rKKuaiBtO3","ubntStatusText--warning":"Kmd1jQ00VlOZksCfvtOd7","ubntStatusText--danger":"_1n1-pNdSId4IXjH2NBBqQK","ubntStatusText--primary":"_2TJXw0jvp8-Udl2edpOPsF","ubntStatusText--neutral":"CwnkZfqYILIlAcLwGpeP6"},e.exports=t},1972:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(7),r=n.n(a),l=n(1752),s=n(73),c=n(795),f=n(27),d=n(796),m=n(688),b=n(231),u=n(112),p=n(798),_=n(794),h=n(390),g=n(797);t.a=Object(s.a)(class extends o.Component{constructor(e){super(e)}render(){const e=Object(l.a)({},this.props,u.a),{motif:t,renderFooter:n,className:a,width:s,tableClassName:N,renderPlaceholder:v,idField:E,forwardedRef:D}=e;return i.a.createElement(h.a,Object.assign({},e,{ref:D}),i.a.createElement(d.a,{className:a,motif:t,width:Object(u.g)(s)},i.a.createElement(b.a.Consumer,null,e=>{const{noItems:n,renderedItems:a}=e;return i.a.createElement(o.Fragment,null,i.a.createElement(m.a,{className:N,motif:t},i.a.createElement(p.a,null),i.a.createElement(_.a,null,a.map((t,n)=>i.a.createElement(g.a,{key:Object(u.h)(t[E]),row:t,rowIndex:n,context:e})))),n&&void 0!==v&&i.a.createElement("div",{className:f.a.placeholder},i.a.createElement(c.a,{className:f.a.placeholderIcon,size:"large"}),v()))}),void 0!==n&&i.a.createElement("div",{className:r()(f.a.footer,f.a[t])},n())))}})},1973:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(7),r=n.n(a),l=n(523),s=n(40),c=n(235),f=n(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:n=!1,contentClassName:a,margin:d,marginX:m,marginY:b,marginTop:u,marginRight:p,marginBottom:_,marginLeft:h,padding:g="xxxxl",paddingX:N,paddingY:v,paddingTop:E,paddingRight:D,paddingBottom:x,paddingLeft:O,children:w,className:S,style:k,...y})=>{var C,I,j,F,P,B,M,z;const{motif:A}=Object(s.a)(),[Z,G]=Object(o.useState)(0),L=Object(o.useRef)(null);return Object(o.useEffect)(()=>{if(L.current){const{height:e}=L.current.getBoundingClientRect();G(e)}},[]),Object(o.useEffect)(()=>{const e=Object(l.a)(()=>{if(L.current){const{height:e}=L.current.getBoundingClientRect();G(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),i.a.createElement("footer",Object.assign({className:r()(f.a.formFooter,c.a["margin-top-"+(null!==(I=null!==(C=null!=u?u:b)&&void 0!==C?C:d)&&void 0!==I?I:"")],c.a["margin-right-"+(null!==(F=null!==(j=null!=p?p:m)&&void 0!==j?j:d)&&void 0!==F?F:"")],c.a["margin-bottom-"+(null!==(B=null!==(P=null!=_?_:b)&&void 0!==P?P:d)&&void 0!==B?B:"")],c.a["margin-left-"+(null!==(z=null!==(M=null!=h?h:m)&&void 0!==M?M:d)&&void 0!==z?z:"")],S),style:{height:e?Z:0,transform:`translateY(${e?0:Z+"px"})`,...k}},y),i.a.createElement("div",{className:r()(f.a.formFooterContent,f.a["formFooterContent-align-"+t],f.a["formFooterContent-"+A],n&&f.a["formFooterContent-backgroundGradient"],c.a["padding-top-"+(E||v||g)],c.a["padding-right-"+(D||N||g)],c.a["padding-bottom-"+(x||v||g)],c.a["padding-left-"+(O||N||g)],a),ref:L},w))}},1974:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(7),r=n.n(a),l=n(800),s=n(170),c=n(1941);t.a=({size:e="medium",variant:t,wrapClassName:n,className:o,...a})=>i.a.createElement(s.a,Object.assign({className:r()(t===l.b[0]&&c.a["formFooterButton-default-size-"+e],o),size:e,wrapClassName:r()("tertiary"===t?c.a.formFooterTertiaryButtonWrap:c.a.formFooterButtonWrap,n),variant:t},a))},1981:function(e,t,n){var o=n(289),i=n(1956);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);e.exports=i.locals||{}},2366:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a=n(1),r=n.n(a),l=n(7),s=n.n(l),c=n(73),f=n(58),d=n(149),m=n(25);Object(m.a)(".slider__3EffDbN1{position:relative;display:flex;width:100%;align-items:flex-end}.slider-with-value-indicator-right__3EffDbN1{flex-direction:row-reverse}.slider__3EffDbN1.vertical__3EffDbN1{left:-50%;transform:rotate(-90deg)}.slider__3EffDbN1.horizontal__3EffDbN1{transform:rotate(0deg)}.slider-content__3EffDbN1{position:relative;display:flex;width:100%;align-items:center}.slider-content-with-value-indicator-top__3EffDbN1{padding-top:20px}.slider-content-with-value-indicator-bottom__3EffDbN1{padding-bottom:20px}.slider-content-with-label__3EffDbN1{padding-top:35px}.slider-content-with-val-label__3EffDbN1{padding-bottom:35px}.input__3EffDbN1{width:100%;height:16px;margin:0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0;outline:none}.input__3EffDbN1:focus+.thumb-circle__3EffDbN1.is-accessible-dark__3EffDbN1{border-color:#fff}.input__3EffDbN1:focus+.thumb-circle__3EffDbN1.is-accessible-light__3EffDbN1{border-color:#006fff}.label__3EffDbN1{position:absolute;top:0;left:0;color:#c2c4ce;font-size:14px}.value-indicator__3EffDbN1{white-space:nowrap}.value-indicator-top__3EffDbN1{position:absolute;top:0;right:0;left:0;text-align:center}.value-indicator-right__3EffDbN1{margin-left:8px}.value-indicator-bottom__3EffDbN1{position:absolute;right:0;bottom:0;left:0;text-align:center}.value-indicator-left__3EffDbN1{margin-right:8px}.value-indicator-light__3EffDbN1{color:#c2c4ce}.value-indicator-dark__3EffDbN1{color:#d8d8d8}.val-label__3EffDbN1{position:absolute;font-size:12px}.val-label-light__3EffDbN1{color:#c2c4ce}.val-label-dark__3EffDbN1{color:#525461}.min-val-label__3EffDbN1{bottom:0;left:0}.max-val-label__3EffDbN1{right:0;bottom:0}.icon-before__3EffDbN1{margin-right:8px}.icon-after__3EffDbN1{margin-left:8px}.thumb__3EffDbN1{position:absolute;z-index:1;pointer-events:none;transform:translateX(-50%) scale(1);transition:transform .2s ease}.thumb__3EffDbN1.active__3EffDbN1{transform:translateX(-50%) scale(1.2)}.thumb-circle__3EffDbN1{border:1px solid #c2c4ce;background-color:#fff;border-radius:100%;box-shadow:0 2px 3px 0 rgba(0,0,0,.2)}.thumb-circle-medium__3EffDbN1,.thumb-circle-small__3EffDbN1{width:10px;height:10px}.thumb-circle-large__3EffDbN1{width:12px;height:12px}.thumb-pentagon__3EffDbN1{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgeD0iLTQ2LjclIiB5PSItNjYuNyUiIHdpZHRoPSIxOTMuMyUiIGhlaWdodD0iMjE2LjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVNb3JwaG9sb2d5IHJhZGl1cz0iLjUiIG9wZXJhdG9yPSJkaWxhdGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRPdXRlcjEiLz48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0ic2hhZG93U3ByZWFkT3V0ZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMDgyMzUyOTQxMiAwIDAgMCAwIDAuMDkwMTk2MDc4NCAwIDAgMCAwIDAuMTQ1MDk4MDM5IDAgMCAwIDAuMiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0xNjEgMmgxMWEyIDIgMCAwMTIgMnYuNTk1YTYgNiAwIDAxLTEuODUyIDQuMzM1bC00Ljk5OSA0Ljc4NGExIDEgMCAwMS0xLjM4Ny0uMDA0bC00LjkzNy00Ljc4NEE2IDYgMCAwMTE1OSA0LjYxN1Y0YTIgMiAwIDAxMi0yeiIgaWQ9ImIiLz48L2RlZnM+PGcgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA4OSA4LjUpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2Ugc3Ryb2tlPSIjQTRBN0I1IiBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=);background-size:100%}.thumb-pentagon-small__3EffDbN1,.thumb-pentagon__3EffDbN1{width:15px;height:12px}.thumb-pentagon-medium__3EffDbN1{width:17px;height:14px}.thumb-pentagon-large__3EffDbN1{width:20px;height:15px}.track__3EffDbN1{position:absolute;display:flex;width:100%;height:100%;align-items:center;pointer-events:none;transition:transform .2s ease}.track__3EffDbN1.active__3EffDbN1{transform:scaleY(1.2)}.track-light__3EffDbN1{background-color:#e5e7ed}.track-dark__3EffDbN1{background-color:#525461}.track-small__3EffDbN1{height:1px;border-radius:1px}.track-medium__3EffDbN1{height:2px;border-radius:2px}.track-large__3EffDbN1{height:3px;border-radius:3px}.endpoints__3EffDbN1{position:absolute;display:flex;width:100%;padding:0;margin:0;justify-content:space-between;list-style:none}.endpoint__3EffDbN1{background-color:#a4a7b5}.endpoint-small__3EffDbN1{width:3px;height:3px;margin:0 -1.5px}.endpoint-medium__3EffDbN1{width:6px;height:6px;margin:0 -3px}.endpoint-large__3EffDbN1{width:8px;height:8px;margin:0 -4px}.endpoint-circle__3EffDbN1{border-radius:100%;transition:transform .2s ease}.endpoint-circle-active__3EffDbN1{transform:scaleX(1.2)}.endpoint-line__3EffDbN1{width:2px;height:20px;margin:0 -1px}.endpoint-circle-light__3EffDbN1,.endpoint-line-light__3EffDbN1{background-color:#e5e7ed}.endpoint-circle-dark__3EffDbN1,.endpoint-line-dark__3EffDbN1{background-color:#525461}.endpoint-circle-overlapped__3EffDbN1,.endpoint-line-overlapped__3EffDbN1,.progress__3EffDbN1{background-color:#006fff}.progress__3EffDbN1{width:0;height:100%}.progress-small__3EffDbN1{border-radius:1px}.progress-medium__3EffDbN1{border-radius:2px}.progress-large__3EffDbN1{border-radius:3px}");var b={slider:"slider__3EffDbN1","slider-with-value-indicator-right":"slider-with-value-indicator-right__3EffDbN1",vertical:"vertical__3EffDbN1",horizontal:"horizontal__3EffDbN1","slider-content":"slider-content__3EffDbN1","slider-content-with-value-indicator-top":"slider-content-with-value-indicator-top__3EffDbN1","slider-content-with-value-indicator-bottom":"slider-content-with-value-indicator-bottom__3EffDbN1","slider-content-with-label":"slider-content-with-label__3EffDbN1","slider-content-with-val-label":"slider-content-with-val-label__3EffDbN1",input:"input__3EffDbN1","thumb-circle":"thumb-circle__3EffDbN1","is-accessible-dark":"is-accessible-dark__3EffDbN1","is-accessible-light":"is-accessible-light__3EffDbN1",label:"label__3EffDbN1","value-indicator":"value-indicator__3EffDbN1","value-indicator-top":"value-indicator-top__3EffDbN1","value-indicator-right":"value-indicator-right__3EffDbN1","value-indicator-bottom":"value-indicator-bottom__3EffDbN1","value-indicator-left":"value-indicator-left__3EffDbN1","value-indicator-light":"value-indicator-light__3EffDbN1","value-indicator-dark":"value-indicator-dark__3EffDbN1","val-label":"val-label__3EffDbN1","val-label-light":"val-label-light__3EffDbN1","val-label-dark":"val-label-dark__3EffDbN1","min-val-label":"min-val-label__3EffDbN1","max-val-label":"max-val-label__3EffDbN1","icon-before":"icon-before__3EffDbN1","icon-after":"icon-after__3EffDbN1",thumb:"thumb__3EffDbN1",active:"active__3EffDbN1","thumb-circle-medium":"thumb-circle-medium__3EffDbN1","thumb-circle-small":"thumb-circle-small__3EffDbN1","thumb-circle-large":"thumb-circle-large__3EffDbN1","thumb-pentagon":"thumb-pentagon__3EffDbN1","thumb-pentagon-small":"thumb-pentagon-small__3EffDbN1","thumb-pentagon-medium":"thumb-pentagon-medium__3EffDbN1","thumb-pentagon-large":"thumb-pentagon-large__3EffDbN1",track:"track__3EffDbN1","track-light":"track-light__3EffDbN1","track-dark":"track-dark__3EffDbN1","track-small":"track-small__3EffDbN1","track-medium":"track-medium__3EffDbN1","track-large":"track-large__3EffDbN1",endpoints:"endpoints__3EffDbN1",endpoint:"endpoint__3EffDbN1","endpoint-small":"endpoint-small__3EffDbN1","endpoint-medium":"endpoint-medium__3EffDbN1","endpoint-large":"endpoint-large__3EffDbN1","endpoint-circle":"endpoint-circle__3EffDbN1","endpoint-circle-active":"endpoint-circle-active__3EffDbN1","endpoint-line":"endpoint-line__3EffDbN1","endpoint-circle-light":"endpoint-circle-light__3EffDbN1","endpoint-line-light":"endpoint-line-light__3EffDbN1","endpoint-circle-dark":"endpoint-circle-dark__3EffDbN1","endpoint-line-dark":"endpoint-line-dark__3EffDbN1","endpoint-circle-overlapped":"endpoint-circle-overlapped__3EffDbN1","endpoint-line-overlapped":"endpoint-line-overlapped__3EffDbN1",progress:"progress__3EffDbN1","progress-small":"progress-small__3EffDbN1","progress-medium":"progress-medium__3EffDbN1","progress-large":"progress-large__3EffDbN1"},u=i.a.memo(({icon:e,iconPositionClassName:t,position:n,iconClassName:o})=>{const a=s()(b.icon,t,b["icon-"+n],o);if("function"==typeof e){const t=e;return i.a.createElement(t,{className:a})}if(i.a.isValidElement(e)){const t={className:s()(e.props.className,a)};return i.a.cloneElement(e,t)}return null}),p=i.a.memo(({segments:e,min:t,max:n,value:o,size:a,endpointVariant:r,motif:l,isActive:c})=>{if(e<=0)return null;const f=(n-t)/e,d=o-t,m=[];for(let u=0;u<e+1;u++){const e=u*f<=d;m.push(i.a.createElement("div",{key:u,className:s()(b.endpoint,b["endpoint-"+a],b["endpoint-"+r],b[`endpoint-${r}-${l}`],{[b[`endpoint-${r}-overlapped`]]:e,[b[`endpoint-${r}-active`]]:c})}))}return i.a.createElement("div",{className:b.endpoints},m)}),_=i.a.memo(({valueIndicatorPosition:e,motif:t,formatValueIndicatorContent:n,value:o,max:a})=>i.a.createElement("div",{className:s()(b["value-indicator"],b["value-indicator-"+e],b["value-indicator-"+t])},n(o,a)));const h=(e,t)=>!(e&&!t)&&(!(e||!t)||e),g=({value:e=0,motif:t="light",direction:n="horizontal",size:a="medium",width:r="100%",min:l=0,max:c=100,step:f=0,segments:m=0,thumbVariant:g="circle",endpointVariant:N="circle",valueIndicatorPosition:v="left",formatValueIndicatorContent:E=(e=>i.a.createElement("span",null,e)),style:D={},withValueIndicator:x,iconClassName:O,iconAfterClassName:w="",iconBeforeClassName:S="",thumbClassName:k,className:y,contentClassName:C,onChange:I,label:j,minValLabel:F,maxValLabel:P,iconBefore:B,iconAfter:M,forwardedRef:z,...A})=>{const[Z,G]=Object(o.useReducer)(h,!1),{isAccessible:L}=Object(d.c)(),V=Object(o.useCallback)(()=>{G(!0)},[]),T=Object(o.useCallback)(()=>{G(!1)},[]),R=Object(o.useMemo)(()=>F||P,[F,P]),U=Object(o.useMemo)(()=>{const t=(e-l)/(c-l)*100;return t>0?t+"%":0},[e,l,c]);return i.a.createElement("div",{ref:z,className:s()(b.slider,b[n],b["slider-"+a],y,{[b["slider-with-label"]]:j,[b["slider-with-val-label"]]:R,[b["slider-with-value-indicator"]]:x,[b["slider-with-value-indicator-"+v]]:x}),style:{width:r,...D}},B&&i.a.createElement(u,{icon:B,iconPositionClassName:S,position:"before",iconClassName:O}),x&&i.a.createElement(_,{valueIndicatorPosition:v,value:e,motif:t,max:c,formatValueIndicatorContent:E}),i.a.createElement("div",{className:s()(b["slider-content"],C,{[b["slider-content-with-label"]]:j,[b["slider-content-with-val-label"]]:R,[b["slider-content-with-value-indicator"]]:x,[b["slider-content-with-value-indicator-"+v]]:x})},j&&i.a.createElement("label",{className:s()(b.label)},j),i.a.createElement("input",Object.assign({type:"range",min:l,max:c,value:e,step:f,className:b.input,onChange:I,onMouseDown:V,onMouseUp:T},A)),i.a.createElement("div",{className:s()(k,b.thumb,b["thumb-"+g],b[`thumb-${g}-${a}`],L&&b["is-accessible-"+t],{[b.active]:Z}),style:{left:U}}),i.a.createElement("div",{className:s()(b.track,b["track-"+t],b["track-"+a],{[b.active]:Z})},i.a.createElement(p,{segments:m,min:l,max:c,value:e,size:a,endpointVariant:N,motif:t,isActive:Z}),i.a.createElement("div",{className:s()(b.progress,b["progress-"+a]),style:{width:U}})),F&&i.a.createElement("span",{className:s()(b["val-label"],b["min-val-label"],b["val-label-"+t])},F),P&&i.a.createElement("span",{className:s()(b["val-label"],b["max-val-label"],b["val-label-"+t])},P)),M&&i.a.createElement(u,{icon:M,iconPositionClassName:w,position:"after",iconClassName:O}))};g.propTypes={value:r.a.number.isRequired,motif:r.a.oneOf(["light","dark"]),direction:r.a.oneOf(["horizontal","vertical"]),size:r.a.oneOf(["small","medium","large"]),width:r.a.oneOfType([r.a.number,r.a.string]),min:r.a.number,max:r.a.number,style:r.a.object,thumbClassName:r.a.string,thumbVariant:r.a.oneOf(["circle","pentagon"]),className:r.a.string,contentClassName:r.a.string,label:r.a.string,minValLabel:r.a.string,maxValLabel:r.a.string,endpointVariant:r.a.oneOf(["circle","line"]),segments:r.a.number,step:r.a.number,withValueIndicator:r.a.bool,valueIndicatorPosition:r.a.oneOf(["top","right","bottom","left"]),formatValueIndicatorContent:r.a.func,iconClassName:r.a.string,iconBeforeClassName:r.a.string,iconAfterClassName:r.a.string,iconBefore:r.a.oneOfType([r.a.func,r.a.node]),iconAfter:r.a.oneOfType([r.a.func,r.a.node]),onChange:r.a.func.isRequired,forwardedRef:f.d};t.a=Object(c.a)(g)}}]);