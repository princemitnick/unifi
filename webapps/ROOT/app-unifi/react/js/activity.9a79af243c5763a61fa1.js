(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[18],{1946:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return b})),n.d(t,"h",(function(){return E})),n.d(t,"g",(function(){return O})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return p})),n.d(t,"i",(function(){return v})),n.d(t,"l",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return T})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return A})),n.d(t,"c",(function(){return I})),n.d(t,"p",(function(){return R})),n.d(t,"q",(function(){return N}));var a=n(112);const i=e=>(t,n,i,r)=>Object(a.d)(e(i,t),e(r,n)),r=e=>t=>{const n=(e=>t=>e.formatMessage({id:t}))(e);return(e,a,i,r)=>{const[c,l]=[t(e,i),t(a,r)].map(n);return c.localeCompare(l)}};var c=n(16),l=n(133),o=n(6),s=n(138),u=n(76);const d={ugw:1,usw:2,uap:3},m=(e,t,n,i)=>{const r=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(n)],c=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(i)];if(r===c){if(n.adopted===i.adopted){if(n.type!==i.type)return((e,t)=>{const n=e.type,i=t.type;return n===i?Object(a.d)(Object(u.a)(e),Object(u.a)(t)):Object(a.d)(d[n],d[i])})(n,i);const e=n.originalName,t=i.originalName;return e&&t?Object(a.d)(e,t):e?-1:t?1:Object(a.d)(n.modelName,i.modelName)}return Object(a.d)(n.adopted?1:2,i.adopted?1:2)}return Object(a.d)(r,c)},b=(e,t,n,i)=>Object(a.d)(Object(u.a)(n),Object(u.a)(i)),E=(e,t,n,i)=>{const r=Object(s.d)(Object(o.getDeviceIp)(n))||0,c=Object(s.d)(Object(o.getDeviceIp)(i))||0;return Object(a.d)(r,c)},O=(e,t,n,i)=>{const{averageSatisfaction:r}=n.satisfactionByRadio,{averageSatisfaction:c}=i.satisfactionByRadio;let l=Object(o.getDeviceExperience)(n),s=Object(o.getDeviceExperience)(i);return n.type===o.DeviceType.AP&&r<0&&(l=-.5),i.type===o.DeviceType.AP&&c<0&&(s=-.5),Object(a.d)(l,s)},g=(e,t,n,i)=>{const r=Object(o.getDeviceMemoryUsage)(n)||0,c=Object(o.getDeviceMemoryUsage)(i)||0;return Object(a.d)(r,c)},p=(e,t,n,i)=>{const r=parseFloat(Object(c.a)(n,"system-stats.cpu",0)),l=parseFloat(Object(c.a)(i,"system-stats.cpu",0));return Object(a.d)(r,l)},v=(e,t,n,i)=>{const r=parseFloat(Object(c.a)(n,"sys_stats.loadavg_1",-1)),l=parseFloat(Object(c.a)(i,"sys_stats.loadavg_1",-1));return Object(a.d)(r,l)},f=(e,t,n)=>{const i=Object(o.getRadioByType)(e,n),r=Object(o.getRadioByType)(t,n),c=i?Object(o.getRadioStatsByName)(e,i.name):null,l=r?Object(o.getRadioStatsByName)(t,r.name):null;if(i&&r&&c&&l){let n,s;const u=(e,t)=>e&&t?Object(a.d)(e,t):(e?-1:t&&1)||0;return n=("auto"===i.channel?0:i.channel)||0,s=("auto"===r.channel?0:r.channel)||0,u(n,s)?u(n,s):(n=Object(o.getRadioStatsBindedChannel)(e,c)||i.channel||0,s=Object(o.getRadioStatsBindedChannel)(t,l)||r.channel||0,u(n,s)?u(n,s):(n=parseInt(Object(o.getRadioHt)(i),10),s=parseInt(Object(o.getRadioHt)(r),10),u(n,s)?u(n,s):(n=Object(o.getRadioStatsPrimaryChannel)(c)||i.channel||0,s=Object(o.getRadioStatsPrimaryChannel)(l)||i.channel||0,u(n,s)?u(n,s):(n=Object(o.getRadioStatsTransmitPower)(c),s=Object(o.getRadioStatsTransmitPower)(l),u(n,s)?u(n,s):0))))}if(i&&r){if(c)return 1;if(l)return-1}return i?1:r?-1:0},j=(e,t)=>{if(!e.radio_table_stats)return-1;return Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},h=(e,t,n,i)=>{const r=j(n,l.b.NG),c=j(i,l.b.NG);return Object(a.d)(r,c)},T=(e,t,n,i)=>{const r=j(n,l.b.NA),c=j(i,l.b.NA);return Object(a.d)(r,c)},C=(e,t)=>{const n=Object(o.getRadioStatsByType)(e,t);return n.length?n.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):-1},_=(e,t,n,i)=>{const r=C(n,l.b.NG),c=C(i,l.b.NG);return Object(a.d)(r,c)},A=(e,t,n,i)=>{const r=C(n,l.b.NA),c=C(i,l.b.NA);return Object(a.d)(r,c)},I=(e,t,n,i)=>{const r=Object(o.getChannelValue)(n),c=Object(o.getChannelValue)(i);return Object(a.d)(r,c)},S=(e,t)=>Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.cu_total||0,0),R=(e,t,n,i)=>{const r=S(n,l.b.NG),c=S(i,l.b.NG);return Object(a.d)(r,c)},N=(e,t,n,i)=>{const r=S(n,l.b.NA),c=S(i,l.b.NA);return Object(a.d)(r,c)}},1984:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),i=n.n(a),r=n(5),c=n(47),l=n(23),o=n(24);const s=Object(r.c)(o.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,u=Object(r.c)(c.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  white-space: nowrap;
`;function d({filterCount:e=0,filterTitleLabel:t="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return i.a.createElement(s,{alignItems:"center"},i.a.createElement(l.T,null),i.a.createElement(u,{message:t,values:{count:e}}))}},1994:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return T})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return x})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return _}));var a=n(0),i=n.n(a),r=n(5),c=n(1925),l=n(24);const o=Object(r.c)(l.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,s=Object(r.c)(c.a)`
  bottom: -1px;
`;var u=({isLoading:e,children:t,...n})=>i.a.createElement(o,Object.assign({},n,{flex:"none",className:"base-control-panel"}),t,i.a.createElement(s,{isLoading:e,placement:"bottom"})),d=n(8),m=n(2003),b=n(803),E=n(2014),O=n(4),g=n(49),p=n(2009);const v=Object(r.c)(p.a)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var f=({routes:e})=>{const t=Object(a.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:n,path:a,...i})=>({id:e,label:t,disabled:"function"==typeof n?n(i):n,path:a})),[e]);return t?i.a.createElement(v,{selectedTabBold:!0,items:t}):null},j=n(1984),h=n(170);var T=Object(r.c)(h.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const C=Object(r.c)(T)`
  z-index: 5;
`;var _=({filterCount:e,filterTitleLabel:t,items:n})=>{const a=Object(d.useDispatch)();return i.a.createElement(l.a,{height:"100%"},i.a.createElement(C,{onClick:()=>a(Object(b.b)(!0))},i.a.createElement(j.a,{filterCount:e,filterTitleLabel:t})),n)};const A=Object(r.c)(g.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
`;var I=({routes:e=[],hideFilterButton:t=!1,isLoading:n,children:a,filterCount:r,filterTitleLabel:c,items:o,title:s})=>{const d=(null==e?void 0:e.length)>1,m=!d&&1===e.length;return i.a.createElement(u,{isLoading:n},!t&&i.a.createElement(_,{filterCount:r,filterTitleLabel:c,items:o}),d&&i.a.createElement(f,{routes:e}),m&&i.a.createElement(A,{weight:"bold"},e[0].label),s&&i.a.createElement(A,{weight:"bold",hideFilterButton:t},i.a.createElement(O.c,{id:s})),i.a.createElement(l.a,{height:"100%",flex:d||s||m?"none":1,alignItems:"center",justifyContent:"flex-end"},a))};var S=({routes:e=[],hideFilterButton:t=!1,isLoading:n,children:r,filterCount:c,filterFooter:l,renderFilterDrawerContent:o,noFilterDrawerStyledContent:s,filterTitleLabel:u,items:O,title:g})=>{const p=Object(d.useDispatch)(),v=Object(d.useSelector)(m.a);return Object(a.useEffect)(()=>()=>{p(Object(b.b)(!1))},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{isOpen:v,filterCount:c,filterTitleLabel:u,noStyledContainer:s,onClose:()=>p(Object(b.b)(!1)),renderFilterDrawerContent:()=>o(v),renderFooter:()=>l}),i.a.createElement(I,{routes:e,hideFilterButton:t,isLoading:n,filterCount:c,filterTitleLabel:u,items:O,title:g},r))},R=n(1935);var N=Object(r.c)(R.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var D=Object(r.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`,y=n(1837);const L=r.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,w=r.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function x(e){return i.a.createElement(y.a,Object.assign({className:L,tabClassName:w},e))}},2003:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen}},2009:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(31),c=n(1837);t.a=({items:e,...t})=>{const{params:n,path:a}=Object(r.n)(),l=Object(r.l)(),o=Object(r.k)(),s=e.find(({path:e})=>e===a)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,l);return i.a.createElement(c.a,Object.assign({tabs:e,selectedTab:null==s?void 0:s.id,onSelectTab:({path:e,params:t={}})=>o.push(Object(r.i)(e,{...n,...t}))},t))}},2014:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(1926),l=n(24),o=n(1984);const s=Object(r.c)(c.a)`
  width: 260px !important;
`,u=Object(r.c)("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({theme:e})=>e.space[3]+"px 24px"};
  overflow: auto;
`,d=Object(r.c)("div")`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 38px 24px;
  flex: none;
`;t.a=({filterCount:e,filterTitleLabel:t,isOpen:n,noStyledContainer:a,onClose:r,renderFilterDrawerContent:c,renderFooter:m})=>{const b=c(),E=a?b:i.a.createElement(u,null,b);return i.a.createElement("div",null,i.a.createElement(s,{in:n,header:i.a.createElement(o.a,{filterCount:e,filterTitleLabel:t}),headerScale:"small",onClose:r,side:"left"},n&&i.a.createElement(l.a,{flex:1,flexDirection:"column",height:"100%"},E,m&&i.a.createElement(d,null,m()))))}},2040:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(170),l=n(49),o=n(24),s=n(4);const u=Object(r.c)(c.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
`;t.a=i.a.memo((function({countLabel:e="COMMON_CONTROL_PANEL_FILTER_FOOTER_COUNTS",numVisible:t,numTotal:n,numFilters:a,onClear:r,showResetButton:c,withReset:d}){const m=void 0!==t&&void 0!==n,b=r&&a>0;return i.a.createElement(o.a,{direction:"column",alignItems:"center",justifyContent:m&&b?"space-between":b?"flex-end":void 0},m&&i.a.createElement(l.a,{size:"caption"},i.a.createElement(s.c,{id:e,values:{numVisible:t,numTotal:n}})),d?i.a.createElement(i.a.Fragment,null,c&&i.a.createElement(u,{size:"small",variant:"link",onClick:r},i.a.createElement(s.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESET"}))):i.a.createElement(i.a.Fragment,null,b&&i.a.createElement(u,{size:"small",variant:"link",onClick:r},i.a.createElement(s.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_CLEAR",values:{count:a}}))))}))},2066:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(32),c=n(1),l=n(4),o=n(5),s=n(137),u=Object(o.a)("text-align:right;");function d(e){var t=e.start,n=e.end,a=e.intl,c=e.timezone,l="",o="";return Object(s.h)(t,c)&&Object(s.h)(n,c)?l=a.formatMessage({id:"COMMON_DATES_TODAY"}):Object(r.differenceInMonths)(n,t)>1?(l=Object(s.e)(t,c,"MMM Do, YYYY"),o=Object(s.e)(n,c,"MMM Do, YYYY")):Object(r.differenceInDays)(n,t)<1?l=Object(s.e)(t,c,"MMM Do, YYYY"):(l=Object(s.e)(t,c,"MMM Do"),o=Object(s.e)(n,c,"MMM Do")),i.a.createElement("div",{className:u},"".concat(l," ").concat(o&&" - ".concat(o)))}d.propTypes={start:c.PropTypes.instanceOf(Date).isRequired,end:c.PropTypes.instanceOf(Date).isRequired,timezone:c.PropTypes.string.isRequired,intl:l.g.isRequired},t.a=Object(l.f)(d)},2068:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(5),c=n(295),l=n.n(c),o=n(1199),s=n(82);const u=Object(r.c)(o.a,{shouldForwardProp:e=>!["marginLeft","marginRight","statusSize"].includes(e)})`
  ${({statusSize:e=6})=>`\n    width: ${e}px;\n    height: ${e}px;\n  `}
  ${({marginLeft:e})=>e&&`margin-left: ${e}px;`}
  ${({marginRight:e})=>e&&`margin-right: ${e}px;`}
`,d=e=>r.a`
  animation: ${(e=>{const t=l()(s.q[e]).alpha(0).css(),n=l()(s.q[e]).alpha(.3).css();return r.e`
      0% {
        box-shadow: 0 0 0 4px ${t};
      }
      50% {
        box-shadow: 0 0 0 4px ${n};
      }
      100% {
        box-shadow: 0 0 0 4px ${t};
      }
    `})(e)} 1.2s ease-in-out 0s infinite;
`;t.a=({status:e,statusPulse:t,marginLeft:n,marginRight:a,statusSize:r})=>i.a.createElement(u,{variant:e,className:t?d(e):"",marginLeft:n,marginRight:a,statusSize:r})},2096:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(271),c=n(49),l=n(40),o=n(24);const s=e=>{const{motif:t,filteredCount:n,...a}=e;return i.a.createElement(o.a,{justifyContent:"space-between",marginTop:16},i.a.createElement(r.a,Object.assign({},a,{key:a.id,motif:t})),i.a.createElement(c.a,{color:"secondary"},n))};t.a=({items:e})=>{const{motif:t}=Object(l.a)();return i.a.createElement(o.a,{flexDirection:"column",marginBottom:20},e.map(e=>i.a.createElement(s,Object.assign({key:e.id,motif:t},e))))}},2127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));const a=({filterType:e,filter:t,filters:n,checked:a,onChangeFilter:i})=>{var r,c,l,o;const s={...n};a?e in s?(null===(r=s[e])||void 0===r?void 0:r.includes(t))||null===(c=s[e])||void 0===c||c.push(t):s[e]=[t]:(s[e]=null===(l=s[e])||void 0===l?void 0:l.filter(e=>e!==t),(null===(o=s[e])||void 0===o?void 0:o.length)||delete s[e]),i(s)},i=(e,t,n)=>{var a;return null===(a=e[t])||void 0===a?void 0:a.includes(n)}},2150:function(e,t,n){"use strict";var a,i=n(0),r=n.n(i),c=n(5),l=n(1146),o=n(41),s=n(40),u=n(49),d=n(4),m=n(8),b=n(95),E=n(175),O=n(549),g=n(170);!function(e){e.DEFAULT="default",e.HOVER="hover",e.DISABLED="disabled",e.ACTIVE="active"}(a||(a={}));const p={[a.DEFAULT]:{light:"#d6d9e2",dark:"#3f3f3f"},[a.HOVER]:{light:"#7e8190",dark:"#9d9d9d"},[a.DISABLED]:{light:"#eeeff3",dark:"#1e1e1e"},[a.ACTIVE]:{light:"#a4a7b5",dark:"#2f2f2f"}},v=(e,t)=>p[t][e],f=(e,t)=>"1px 0px 0px 0px "+v(e,t),j=Object(c.c)(g.a,{shouldForwardProp:e=>"rotate"!==e})`
  margin: 0;
  padding: 0;
  width: 26px;
  height: 24px;
  color: inherit;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
  border-right: 0;
  border-color: transparent;
  border-color: ${({motif:e})=>""+v(e,a.DEFAULT)};
  box-shadow: ${({motif:e})=>""+f(e,a.DEFAULT)};
  ${({rotate:e=!1})=>e?"\n    transform: rotate(-180deg);\n  ":"\n  position: relative; \n  left: -1px;\n    "}
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      display: flex;
    }
  }
  &:disabled {
    z-index: 0;
    box-shadow: ${({motif:e})=>""+f(e,a.DISABLED)};
    border-color: ${({motif:e})=>""+v(e,a.DISABLED)};
  }
  &:hover {
    z-index: 1;
    box-shadow: ${({motif:e})=>""+f(e,a.HOVER)};
    border-color: ${({motif:e})=>""+v(e,a.HOVER)};
    border-right: 0;
    background-color: transparent !important;
  }
  &:active {
    box-shadow: ${({motif:e})=>""+f(e,a.ACTIVE)};
    border-color: ${({motif:e})=>""+v(e,a.ACTIVE)};
  }
`;var h=({disabled:e,onClick:t,rotate:n,motif:a})=>r.a.createElement(j,{variant:"secondary",rotate:n,disabled:e,onClick:t,motif:a},r.a.createElement("svg",{width:"4",height:"8",viewBox:"0 0 4 8",fill:"none"},r.a.createElement("path",{d:"M3.75026 0.999386C3.75026 1.11739 3.70826 1.23639 3.62426 1.33138L1.25026 3.99939L1.27026 4.02039L3.62326 6.66739C3.80726 6.87339 3.78826 7.18939 3.58226 7.37339C3.37626 7.55739 3.06026 7.53839 2.87626 7.33239L0.530256 4.69439C0.156256 4.30739 0.156256 3.69139 0.530256 3.30439L2.87526 0.667385C3.05826 0.461386 3.37526 0.442385 3.58126 0.626385C3.69326 0.724385 3.75026 0.861386 3.75026 0.999386Z",fill:"#A4A7B5"})));const T=Object(c.c)(b.g)`
  overflow: auto;
  table {
    z-index: 1;
  }
`,C=Object(c.c)(l.a)`
  > div > div {
    height: 28px;
  }
  input {
    ${({theme:e,motif:t})=>`\n      margin-top: ${e.spacing["spacing-xs"]};\n      color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n      -webkit-text-fill-color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n    `}
  }
`,_=[{value:"25",default:!0},{value:"50"},{value:"100"}];t.a=({onRenderTable:e,customContent:t,items:n,section:a,rowOptions:c,onRowsChanged:l,onPageChanged:o,tableType:g,totalItems:p,pageNumber:v})=>{const{motif:f}=Object(s.a)(),j=Object(m.useDispatch)(),A=Object(i.useMemo)(()=>c||_,[c]),I=Object(i.useMemo)(()=>A.map(({value:e})=>({label:e,value:e})),[c,A]),S=Object(m.useSelector)(Object(E.v)(g)),R=Object(i.useMemo)(()=>{var e,t;return Number((null==S?void 0:S.rowsPerPage)&&I.some(({value:e})=>Number(e)===S.rowsPerPage)?S.rowsPerPage:(null===(e=A.find(e=>null==e?void 0:e.default))||void 0===e?void 0:e.value)||(null===(t=null==A?void 0:A[0])||void 0===t?void 0:t.value))},[S,I,A]),N=Object(i.useMemo)(()=>Math.max(1,v||0),[v]),D=Object(i.useCallback)(e=>{null==o||o(e)},[o,j]),y=Object(i.useCallback)(()=>{D(N-1)},[N,D]),L=Object(i.useCallback)(()=>{D(N+1)},[N,D]),w=Object(i.useCallback)(({value:e})=>{const t=Number(e);j(Object(O.j)(g,{rowsPerPage:t})),null==l||l(t)},[j,l,g]),x=Object(i.useMemo)(()=>{let e=(N-1)*R+1;return e>(null==n?void 0:n.length)&&(e=(null==n?void 0:n.length)-R,D(Math.ceil(Math.ceil(e)/R+1))),e},[D,N,R,null==n?void 0:n.length]),M=Object(i.useMemo)(()=>{let e=x+R-1;return e>=(null==n?void 0:n.length)&&(e=null==n?void 0:n.length),e},[x,R,null==n?void 0:n.length]),F=Object(i.useMemo)(()=>({from:Math.max(0,x-1),rowsPerPage:R}),[x,R]),P=Object(i.useMemo)(()=>1===N,[N]),k=Object(i.useMemo)(()=>M>=(null==n?void 0:n.length),[M,null==n?void 0:n.length]);return r.a.createElement(T,{width:"100%",height:"100%",padding:"30px",flexDirection:"column"},e(F),r.a.createElement(b.g,{marginTop:30,justifyContent:"space-between"},r.a.createElement(b.g,{alignItems:"center"},r.a.createElement(b.g,{marginRight:8},r.a.createElement(u.a,{color:"secondary"},r.a.createElement(d.c,{id:"PAGINATION",values:{from:x,to:M,total:p,section:r.a.createElement(d.c,{id:a})}}))),r.a.createElement(b.g,{marginRight:24},r.a.createElement(u.a,{color:"secondary"},r.a.createElement(h,{disabled:P,onClick:y,motif:f})),r.a.createElement(u.a,{color:"secondary"},r.a.createElement(h,{disabled:k,rotate:!0,onClick:L,motif:f}))),r.a.createElement(b.g,{alignItems:"center"},r.a.createElement(b.g,{marginRight:8},r.a.createElement(u.a,{color:"secondary"},r.a.createElement(d.c,{id:"ROWS_PER_PAGE"}))),r.a.createElement(C,{value:null==R?void 0:R.toString(),width:48,options:I,onChange:w,motif:f}))),t))}},2217:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);function i(e,t,n=[]){const i=n=>{e&&e.current&&n.target!==e.current&&!e.current.contains(n.target)&&t(n)};Object(a.useEffect)(()=>(document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}),n)}},2300:function(e,t,n){var a={"./en-au":2160,"./en-au.js":2160,"./en-ca":2161,"./en-ca.js":2161,"./en-gb":2162,"./en-gb.js":2162,"./en-ie":2163,"./en-ie.js":2163,"./en-il":2164,"./en-il.js":2164,"./en-in":2165,"./en-in.js":2165,"./en-nz":2166,"./en-nz.js":2166,"./en-sg":2167,"./en-sg.js":2167};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=2300},2883:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n(2);const l="/v2/api/site/{site}/alert";var o,s,u;!function(e){e.KEY="KEY",e.TIMESTAMP="TIMESTAMP",e.STATUS="STATUS"}(o||(o={})),function(e){e.ASCENDING="ASCENDING",e.DESCENDING="DESCENDING"}(s||(s={})),function(e){e.total_element_count="total_element_count",e.total_page_count="total_page_count",e.page_number="page_number"}(u||(u={}));const d=(e={},t={},n={})=>Object(c.o)("alerts",l,{queryParams:{timestampFrom:e.timestampFrom,timestampTo:e.timestampTo,pageSize:250,pageNumber:0,sortByField:o.TIMESTAMP,sortDirection:(null==e?void 0:e.isAscending)?s.ASCENDING:s.DESCENDING,...e},...t},{idField:"id",additionalPayloadSelector:[u.total_element_count,u.total_page_count,u.page_number],extend:!0,compareFunction:(e,t)=>{var n,a,i,r;return(null===(n=e.queryParams)||void 0===n?void 0:n.timestampFrom)===(null===(a=t.queryParams)||void 0===a?void 0:a.timestampFrom)&&(null===(i=e.queryParams)||void 0===i?void 0:i.timestampTo)===(null===(r=t.queryParams)||void 0===r?void 0:r.timestampTo)},...n});var m=n(3),b=n(22),E=n(299),O=n(127);const g=e=>Object(E.c)(e,O.a.ACTIVITY),p=e=>{var t;return(null===(t=null==e?void 0:e.activity)||void 0===t?void 0:t.markedAsRead)||[]},v=e=>{var t;return(null===(t=null==e?void 0:e.activity)||void 0===t?void 0:t.pageNumber)||1},f=e=>{var t,n;return null!==(n=null===(t=null==e?void 0:e.activity)||void 0===t?void 0:t.batchIndex)&&void 0!==n?n:0};var j,h,T,C=n(13),_=n(337),A=n(42),I=n(137),S=n(1205);!function(e){e.DEVICE="DEVICE",e.CLIENT="CLIENT",e.ADMIN="ADMIN",e.NETWORK="NETWORK",e.WLAN="WLAN",e.NETWORK_OR_LAN="NETWORK_OR_LAN",e.CHANNEL="CHANNEL"}(j||(j={})),function(e){e.NEW="NEW",e.READ="READ"}(h||(h={})),function(e){e.INFO="INFO",e.WARNING="WARNING"}(T||(T={}));var R,N,D,y=n(6);!function(e){e.ALERT_TYPE="alert_type",e.DEVICE_TYPE="device_type"}(R||(R={})),function(e){e.INFO="info",e.WARNING="warning"}(N||(N={})),function(e){e.GATEWAY="gateway",e.SWITCH="switch",e.ACCESS_POINT="access_point",e.SMART_POWER="smart_power",e.BUILDING_BRIDGE="building_bridge",e.ULTE="ulte"}(D||(D={}));const L={[R.ALERT_TYPE]:{[N.INFO]:e=>(null==e?void 0:e.severity)===T.INFO,[N.WARNING]:e=>(null==e?void 0:e.severity)===T.WARNING},[R.DEVICE_TYPE]:{[D.GATEWAY]:e=>Object(y.isGateway)(e),[D.SWITCH]:e=>Object(y.isSwitch)(e)&&!Object(y.isSmartPower)(e),[D.ACCESS_POINT]:e=>Object(y.isAp)(e)&&!Object(y.isSmartPower)(e)&&!Object(y.isUlte)(e),[D.SMART_POWER]:e=>Object(y.isSmartPower)(e),[D.BUILDING_BRIDGE]:e=>Object(y.isUBB)(e),[D.ULTE]:e=>Object(y.isUlte)(e)}},w=(e,t)=>{const n={};return Object.entries(e).forEach(([e,a])=>{n[e]=a.some(n=>{var a,i,r;return null!==(r=null===(i=(a=L[e])[n])||void 0===i?void 0:i.call(a,t))&&void 0!==r&&r})}),Object.values(n)},x={},M=e=>Object(E.b)(e,O.a.ACTIVITY,_.a.ALERTS,x);var F=n(200),P=n(97),k=n(146);const Y=Object.fromEntries(Object.values(k.deviceModels).map(e=>[null==e?void 0:e.name,null==e?void 0:e.type])),V=e=>{var t;return null!==(t=null==e?void 0:e.activity)&&void 0!==t?t:{}},$=(Object(m.a)(V,e=>{var t;return null!==(t=null==e?void 0:e.filters)&&void 0!==t?t:{}}),Object(m.a)(V,C.N,A.selectLocaleSettings,P.b,(e,t,n,a)=>{const i=Object(I.d)(t,n,a);return{start:(null==e?void 0:e.dateRangeStart)||Object(I.i)(new Date,i).toString(),end:(null==e?void 0:e.dateRangeEnd)||Object(I.b)(new Date,i).toString()}})),B=Object(m.a)(e=>{var t;return Object(c.x)(d({isAscending:null===(t=Object(C.F)(_.a.ALERTS)(e))||void 0===t?void 0:t.isAscending,timestampFrom:Date.parse($(e).start),timestampTo:Date.parse($(e).end)}))(e)},e=>e),G=Object(m.a)(B,b.c),z=Object(m.a)(B,b.b),W=Object(F.b)()(Object(m.a)(G,$,(e,{start:t,end:n})=>e.filter(e=>!(t&&n&&(+t>e.timestamp||+n<e.timestamp)))),e=>e),U=Object(F.b)()(Object(m.a)(W,p,(e,t)=>e.map(({id:e,severity:n,message:a,status:i,parameters:r,target:c,timestamp:l})=>{var o,s,u,d,m,b,E;return{id:e,name:null===(o=r[c])||void 0===o?void 0:o.name,...(null===(s=null==r?void 0:r[j.DEVICE])||void 0===s?void 0:s.model)&&{model:r[j.DEVICE].model,type:null==Y?void 0:Y[r[j.DEVICE].model]},event:a,timestamp:l,severity:n,parameters:r,target:c,...(c===j.DEVICE||c===j.CLIENT)&&{mac:null===(u=r[c])||void 0===u?void 0:u.id,device_fingerprint_id:null===(d=r[c])||void 0===d?void 0:d.device_fingerprint_id,fingerprint_source:null===(m=r[c])||void 0===m?void 0:m.fingerprint_source},...c===j.CLIENT&&{unifi_device_fingerprint_icon_filename:null===(b=r[c])||void 0===b?void 0:b.unifi_device_fingerprint_icon_filename,unifi_device_fingerprint_icon_resolutions:null===(E=r[c])||void 0===E?void 0:E.unifi_device_fingerprint_icon_resolutions},isRead:i===h.READ||t.includes(e)}})),e=>e),H=Object(F.b)()(Object(m.a)(U,g,M,(e,t,n)=>e.reduce((e,a)=>void 0===t||""===t||["id","name","model","event"].some(e=>{var n;return(null!==(n=null==a?void 0:a[e])&&void 0!==n?n:"").toLowerCase().includes(t.toLowerCase().trim())})?(((e,t)=>!Object(S.a)(e)&&!w(e,t).every(Boolean))(n,a)||e.push(a),e):e,[])),e=>e),q=Object(m.a)(G,e=>{const t={};return e.reduce((e,n)=>{const{timestamp:a,type:i}=n,r=new Date(a);if(r&&i){const n=`${r.getDate()}-${r.getMonth()}/${r.getFullYear()}`;t[n]&&t[n][i]||(t[n]=t[n]||{},t[n][i]=1,e.push({type:"",date:r}))}return e},[])});var K=n(809),J=n(77),Z=n(232),Q=n(64),X=n(241),ee=n(86),te=n(5),ne=n(1926),ae=n(2892),ie=n(2066),re=n(2217),ce=n(379);const le=Object(te.c)(ne.a)`
  > div {
    overflow: auto;
  }
`,oe=Object(te.c)(ae.a)`
  border: 0;
  box-shadow: none;
`;var se=({isOpen:e,onClose:t,containerRef:n})=>{const c=Object(r.useSelector)(A.selectLocaleSettings),l=Object(r.useSelector)(C.N),o=Object(r.useSelector)(q),s=Object(r.useSelector)($),u=Object(r.useSelector)(P.b),m=Object(r.useDispatch)(),b=Object(I.d)(l,c,u),E=Object(a.useMemo)(()=>i.a.createElement(ie.a,{start:s.start,end:s.end,timezone:b}),[s,b]),O=Object(r.useSelector)(Object(C.F)(_.a.ALERTS));Object(re.a)(n,()=>{e&&t()},[n,e]);const g=i.a.createElement(le,{header:E,in:e,onClose:t,width:303},e&&i.a.createElement(oe,{showInputs:!0,numberOfMonths:2,onRangeSelected:({startDate:e,endDate:t})=>{const n=Object(I.i)(e,b),a=Object(I.b)(t,b);m(Object(ce.h)({startDate:n,endDate:a})),m(d({isAscending:null==O?void 0:O.isAscending,timestampFrom:n.getTime(),timestampTo:a.getTime()}))},alerts:o,initialStartDate:Object(I.a)(s.start,b),initialEndDate:Object(I.a)(s.end,b)}));return(null==n?void 0:n.current)?Object(ee.createPortal)(g,n.current):g},ue=n(23),de=n(1994),me=n(2040),be=n(163);const Ee=e=>Object(be.j)({name:O.a.ACTIVITY,value:e});var Oe=n(1917),ge=n(4),pe=n(2127),ve=n(2096),fe=n(95),je=n(2068);var he=({onChangeActivityFilter:e,filters:t})=>{const n=Object(r.useSelector)(H),c=Object(a.useCallback)((e,n)=>Object(pe.b)(t,e,n),[t]),l=(e,t)=>{var a;return null===(a=(n||[]).map(n=>w({[e]:[t]},n)).filter(e=>e.every(Boolean)))||void 0===a?void 0:a.length},o=Object(a.useMemo)(()=>Object.values(N).map(n=>({key:n,id:n,checked:c(R.ALERT_TYPE,n),children:i.a.createElement(fe.g,{alignItems:"center"},i.a.createElement(je.a,{status:n,marginRight:8}),i.a.createElement(ge.c,{id:"ACTIVITY_FILTER_ALERT_TYPE_"+n.toUpperCase()})),onChange:({target:{checked:a}})=>Object(pe.a)({filterType:R.ALERT_TYPE,filter:n,filters:t,checked:a,onChangeFilter:e}),filteredCount:l(R.ALERT_TYPE,n)})),[l,pe.a,c,t]),s=Object(a.useMemo)(()=>Object.values(D).map(n=>({key:n,id:n,checked:c(R.DEVICE_TYPE,n),children:i.a.createElement(ge.c,{id:"ACTIVITY_FILTER_DEVICE_TYPE_"+n.toUpperCase()}),onChange:({target:{checked:a}})=>Object(pe.a)({filterType:R.DEVICE_TYPE,filter:n,filters:t,checked:a,onChangeFilter:e}),filteredCount:l(R.DEVICE_TYPE,n)})),[l,pe.a,c,t]),u=Object(a.useMemo)(()=>[{id:R.ALERT_TYPE,openByDefault:!!(null==t?void 0:t.alert_type),label:i.a.createElement(ge.c,{id:"ACTIVITY_FILTER_HEADER_ALERT_TYPE"}),renderContent:()=>i.a.createElement(ve.a,{items:o})},{id:R.DEVICE_TYPE,openByDefault:!!(null==t?void 0:t.device_type),label:i.a.createElement(ge.c,{id:"ACTIVITY_FILTER_HEADER_DEVICE_TYPE"}),renderContent:()=>i.a.createElement(ve.a,{items:s})}],[o,s]);return i.a.createElement(Oe.a,{variant:"tertiary",multiOpen:!0,items:u,renderOnlyExpandedContent:!0})};var Te=({onCalendarClick:e})=>{const t=Object(r.useSelector)(H),n=Object(r.useSelector)(W),c=Object(r.useSelector)(g),[l,o]=Object(a.useState)(c),s=Object(r.useDispatch)(),u=Object(r.useSelector)(M),d=Object(a.useMemo)(()=>{var e,t;return null===(t=null===(e=Object.values(u))||void 0===e?void 0:e.flat())||void 0===t?void 0:t.length},[u]),m=Object(a.useCallback)(e=>{var t;s((t=e,Object(be.i)({name:O.a.ACTIVITY,value:t}))),s(Object(C.P)(_.a.ALERTS,{filters:e}))},[s]);return i.a.createElement(de.c,{title:"ACTIVITY_SECTION_ALERTS",filterCount:d,isLoading:!1,renderFilterDrawerContent:e=>e&&i.a.createElement(he,{onChangeActivityFilter:m,filters:u}),filterFooter:i.a.createElement(me.a,{countLabel:"ACTIVITY_FILTER_NUMBER_OF_ELEMENTS",numVisible:(null==t?void 0:t.length)||0,numTotal:(null==n?void 0:n.length)||0,numFilters:d,onClear:()=>m({})})},i.a.createElement(de.f,{value:l,onChange:({target:{value:e}})=>{o(e),s(Ee(e))},onClear:()=>{o(""),s(Ee(""))},onSubmit:(e,t)=>{s(Ee(t))}}),i.a.createElement(de.b,{onClick:()=>e(!0)},i.a.createElement(ue.r,null)))},Ce=n(523),_e=n(1972),Ae=n(1923),Ie=n(31),Se=n(2013),Re=n.n(Se),Ne=n(1762),De=n(1197),ye=n(49),Le=n(1946);var we=n(373),xe=n(185);var Me;!function(e){e.SEVERITY="severity",e.NAME="name",e.EVENT="event",e.TIMESTAMP="timestamp"}(Me||(Me={}));var Fe=n(91);const Pe=Object(te.c)(Ne.a)`
  margin: 0 !important;
`,ke=Object(te.c)("img")`
  max-width: 100%;
  height: inherit;
  object-fit: contain;
`,Ye=Object(te.c)(De.a)`
  .tooltipClassName {
    padding: ${({theme:e})=>e.spacing["spacing-xl"]};
    margin-left: -${({theme:e})=>e.spacing["spacing-xl"]};
  }
`,Ve=Object(te.c)(ye.a)`
  text-transform: none;
`,$e=Object(te.c)(Ve)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  padding-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  width: 100%;
`,Be=Object(te.c)(ue.cb)`
  left: -${({theme:e})=>e.spacing["spacing-xs"]};
  position: relative;
`,Ge=({name:e,fingerprintSource:t,deviceFingerprintId:n,unifiDeviceFingerprintIconFilename:r,unifiDeviceFingerprintIconResolutions:c})=>{const[l,o]=Object(a.useState)(null),{src:s,srcSet:u}=Object(a.useMemo)(()=>{if(r&&(null==c?void 0:c.length)){const e=Object(we.e)({icon_filename:r,icon_resolutions:c},!1,"standard");if((null==e?void 0:e.src)&&(null==e?void 0:e.srcSet))return{src:e.src,srcSet:e.srcSet}}const e=Object(we.d)({sourceId:Fe.b.includes(t)?t:0,deviceId:n||0}),a=xe.b.STANDARD.map((t,n)=>`${e[t]} ${2**n}x`).join(",");return{src:Object(we.b)(a),srcSet:a}},[t,n,r,c]);return Object(a.useEffect)(()=>{const t=new Image;t.onload=()=>o(i.a.createElement(ke,{src:s,srcSet:u})),t.onerror=()=>o(i.a.createElement(Pe,{name:e||"unknown",size:"small"})),t.src=s},[]),i.a.createElement(i.a.Fragment,null,l)},ze=({isRead:e,children:t})=>i.a.createElement(ye.a,Object.assign({truncate:!0},!e&&{weight:"bold"}),t),We=(e,t)=>(e?(e=>Re()().diff(e,"seconds"))(t):(e=>Re()().diff(e,"minutes"))(t))||1,Ue=({timestamp:e})=>{const t=(e=>Re()(e).isAfter(Re()().subtract(1,"minutes")))(e),n=(e=>Re()(e).isAfter(Re()().subtract(1,"hours")))(e),[r,c]=Object(a.useState)(We(t,e)),l=Object(a.useRef)(null),o=()=>{l.current&&(l.current.stopInterval(),l.current=null)};return Object(a.useEffect)(()=>{if(t||n){const a=new Date(e).getMilliseconds();let i=null;t?i=1e3-a:n&&(i=l.current?0:6e4-a),o(),setTimeout(()=>{c(We(t,e)),l.current=((e,t)=>{let n=Date.now()-t,a=null;const i=()=>{const r=Date.now()-n,c=Math.max(1,1+Math.round(r/t));null==e||e();const l=t*c;n+=l,a=setTimeout(i,l-r)};return a=setTimeout(i,t),{stopInterval:()=>{clearInterval(a),a=null}}})(()=>{c(We(t,e))},1e3*(t?.25:60))},i)}else o()},[t,n,e]),Object(a.useEffect)(()=>o,[]),t?i.a.createElement(ge.c,{id:"ACTIVITY_ALERT_DATE_TIME_SECONDS_AGO",values:{seconds:r}}):n?i.a.createElement(ge.c,{id:"ACTIVITY_ALERT_DATE_TIME_MINUTES_AGO",values:{minutes:r}}):(e=>Re()().isSame(Re()(e),"day"))(e)?i.a.createElement(ge.c,{id:"ACTIVITY_ALERT_DATE_TIME_TODAY",values:{time:Re()(e).format("hh:mma")}}):i.a.createElement(i.a.Fragment,null,Re()(e).format("MMM D, YYYY h:mma"))},He=[{id:Me.SEVERITY,minWidth:10,renderLabel:()=>i.a.createElement(Ye,{position:"bottomLeft",width:176,tooltipClassName:"tooltipClassName",message:i.a.createElement(i.a.Fragment,null,i.a.createElement($e,{color:"header",size:"caption"},i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_TABLE_HEADER_STATUS_ALERT_NOTIFICATIONS"})),Object.values(T).map(e=>i.a.createElement(fe.g,{alignItems:"center",marginTop:12,key:e},i.a.createElement(je.a,{status:e.toLowerCase(),marginLeft:5,marginRight:12,statusSize:8}),i.a.createElement(Ve,{color:"tertiary",size:"label"},i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_TABLE_NOTIFICATION_"+e})))))},i.a.createElement(Be,{isActive:!0})),renderCell:({severity:e})=>{var t;return i.a.createElement(je.a,{status:null===(t=e||T.INFO)||void 0===t?void 0:t.toLowerCase()})}},{id:Me.NAME,sortable:!0,minWidth:80,label:i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_TABLE_HEADER_NAME"}),renderCell:({name:e,isRead:t,device_fingerprint_id:n,fingerprint_source:a,unifi_device_fingerprint_icon_filename:r,unifi_device_fingerprint_icon_resolutions:c})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(fe.g,{alignItems:"center",justifyContent:"center",width:"100%",height:32,minWidth:32,maxWidth:32,marginRight:8},r&&(null==c?void 0:c.length)||[n,a].some(e=>!Number.isNaN(Math.sign(e))&&Math.sign(e)>=0)?i.a.createElement(Ge,{name:e,deviceFingerprintId:n,fingerprintSource:a,unifiDeviceFingerprintIconFilename:r,unifiDeviceFingerprintIconResolutions:c}):i.a.createElement(Pe,{name:e||"unknown",size:"small"})),i.a.createElement(ze,{color:"secondary",isRead:t},e))},{id:Me.EVENT,minWidth:240,label:i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_TABLE_HEADER_EVENT"}),renderCell:({event:e,isRead:t})=>i.a.createElement(ze,{isRead:t,color:"secondary"},e)},{compare:Object(Le.a)(({timestamp:e})=>e),id:Me.TIMESTAMP,sortable:!0,minWidth:140,label:i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_TABLE_HEADER_DATE_TIME"}),renderCell:({timestamp:e,isRead:t})=>i.a.createElement(ze,{isRead:t,color:"secondary"},i.a.createElement(Ue,{timestamp:e}))}];var qe=n(805),Ke=n(2150);const Je=({updateCallback:e,children:t})=>{const n=Object(a.useRef)();return Object(a.useEffect)(()=>{e(),n.current||(n.current=!0)}),i.a.createElement(i.a.Fragment,null,t)},Ze=[{value:"25",default:!0},{value:"50"},{value:"100"}];var Qe=()=>{const[e,t]=Object(a.useState)([]),[n,o]=Object(a.useState)([]),s=Object(r.useSelector)(H),u=Object(r.useSelector)(W),m=Object(r.useSelector)(z),b=Object(r.useSelector)(v),E=Object(r.useSelector)(f),O=Object(r.useSelector)(Object(C.F)(qe.a.ALERTS)),g=Object(a.useMemo)(()=>{var e;return(null==O?void 0:O.rowsPerPage)||Number((null===(e=Ze.find(e=>null==e?void 0:e.default))||void 0===e?void 0:e.value)||Ze[0].value)},[null==O?void 0:O.rowsPerPage]),h=Object(Ie.k)(),T=Object(r.useSelector)(M),_=Object(r.useDispatch)(),A=Object(Q.a)("/devices"),I=Object(Q.a)("/clients"),S=Object(Q.a)("/devices/properties/:mac/overview"),R=Object(Q.a)("/clients/properties/:mac/overview"),{sortBy:N,isAscending:D}=Object(r.useSelector)(Object(C.F)(qe.a.ALERTS))||{sortBy:"timestamp",isAscending:!1},y=Object(a.useRef)(),L=Object(r.useSelector)(p),w=Object(a.useCallback)(Object(Ce.a)(e=>{(null==e?void 0:e.length)&&(_(((e,t={},n={})=>Object(c.y)(null,null,l+"/mark-as-read",{alert_ids:e},t,n))(e)),o([]))},500),[]),x=Object(r.useSelector)($);Object(a.useEffect)(()=>{(null==u?void 0:u.length)<(null==m?void 0:m.total_element_count)&&g*b>(null==u?void 0:u.length)/2&&(_(d({isAscending:D,timestampFrom:Date.parse(x.start),timestampTo:Date.parse(x.end),pageNumber:E+1})),_(Object(ce.g)(E+1)))},[g,b,E,null==m?void 0:m.total_element_count,null==u?void 0:u.length,x,_]);const F=Object(a.useCallback)(()=>{_(Object(ce.i)(e))},[e,ce.i,_]);Object(a.useEffect)(()=>{F()},[x.end,x.start,T]);const P=Object(a.useCallback)((e,t)=>{_(Object(C.P)(qe.a.ALERTS,{sortBy:e.id,isAscending:t})),F()},[_,F]),k=({target:e,mac:t})=>{var n;const a={[j.DEVICE]:{specific:S.replace(":mac",t),general:A},[j.CLIENT]:{specific:R.replace(":mac",t),general:I}};h.push(null===(n=null==a?void 0:a[e])||void 0===n?void 0:n[t?"specific":"general"])},Y=Object(a.useCallback)(()=>{var a,i,r;const c=[...new Set([...e,...L,...n])],l=null===(r=(null===(i=null===(a=null==y?void 0:y.current)||void 0===a?void 0:a.renderedItems)||void 0===i?void 0:i.call(a))||[])||void 0===r?void 0:r.filter(({isRead:e,id:t})=>!e&&!c.includes(t)).map(({id:e})=>e);if(null==l?void 0:l.length){const e=[...n,...l];t(l),o(e),w(e)}},[e,L,n]),V=Object(a.useCallback)(({from:e,rowsPerPage:t})=>i.a.createElement(Je,{updateCallback:Y},i.a.createElement(_e.a,{ref:y,items:s,rowLimit:t,rowOffset:e,onSort:P,onRowClick:k,columns:He,rowHeight:34,initialSortBy:N,initiallySortAscending:D,disableColumnFilters:!0})),[s,D,N,P,Y]);return(null==s?void 0:s.length)?i.a.createElement(Ke.a,{section:"ACTIVITY_SECTION_ALERTS",items:s,totalItems:null==u?void 0:u.length,tableType:qe.a.ALERTS,onRenderTable:V,onRowsChanged:F,onPageChanged:e=>{_(Object(ce.j)(e)),F()},pageNumber:b,rowOptions:Ze}):i.a.createElement(Ae.a,{title:i.a.createElement(ge.c,{id:"ACTIVITY_ALERTS_NO_CONTENT_TITLE"}),icon:"noNotifications"})};t.default=({match:{path:e}})=>{const[t,n]=Object(a.useState)(!1),c=Object(a.createRef)(),l=Object(a.useCallback)((e=!1)=>n(e),[n]),o=Object(r.useSelector)($),s=Object(r.useSelector)(Object(C.F)(_.a.ALERTS));return Object(Q.e)([Object(Z.c)("pagination"),Object(Z.c)("activity"),Object(Z.c)("eventStrings"),Object(J.fetchClients)(),Object(y.fetchDevices)(),d({isAscending:null==s?void 0:s.isAscending,timestampFrom:Date.parse(o.start),timestampTo:Date.parse(o.end)}),Object(P.a)(),Object(A.fetchSettings)()],i.a.createElement(K.a,{mainPanelClassName:"ActivityMainPanel"},i.a.createElement(Te,{onCalendarClick:()=>l(!0)}),i.a.createElement("div",{ref:c},i.a.createElement(se,{isOpen:t,onClose:()=>l(),containerRef:c})),i.a.createElement(X.a,{path:""+e,render:()=>i.a.createElement(Qe,null)})),{trackingName:"activity-page"})}}}]);