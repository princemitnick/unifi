(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[38],{1953:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),i=a.n(n),r=a(8),l=a(32),c=a(13);const o=({date:e,dateFormat:t})=>i.a.createElement("span",null,Object(l.format)(e,t));t.b=({date:e,dateFormat:t})=>{const a=Object(r.useSelector)(c.n);return i.a.createElement(o,{date:e,dateFormat:t||a})}},1972:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(7),l=a.n(r),c=a(1752),o=a(73),s=a(795),d=a(27),m=a(796),u=a(688),b=a(231),E=a(112),h=a(798),f=a(794),p=a(390),g=a(797);t.a=Object(o.a)(class extends n.Component{constructor(e){super(e)}render(){const e=Object(c.a)({},this.props,E.a),{motif:t,renderFooter:a,className:r,width:o,tableClassName:O,renderPlaceholder:A,idField:N,forwardedRef:v}=e;return i.a.createElement(p.a,Object.assign({},e,{ref:v}),i.a.createElement(m.a,{className:r,motif:t,width:Object(E.g)(o)},i.a.createElement(b.a.Consumer,null,e=>{const{noItems:a,renderedItems:r}=e;return i.a.createElement(n.Fragment,null,i.a.createElement(u.a,{className:O,motif:t},i.a.createElement(h.a,null),i.a.createElement(f.a,null,r.map((t,a)=>i.a.createElement(g.a,{key:Object(E.h)(t[N]),row:t,rowIndex:a,context:e})))),a&&void 0!==A&&i.a.createElement("div",{className:d.a.placeholder},i.a.createElement(s.a,{className:d.a.placeholderIcon,size:"large"}),A()))}),void 0!==a&&i.a.createElement("div",{className:l()(d.a.footer,d.a[t])},a())))}})},1997:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),i=a.n(n),r=a(31),l=a(8),c=a(5),o=a(170),s=a(386),d=a(792),m=a(69),u=a(76);const b=Object(c.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
`,E=({device:e,...t})=>{const a=Object(r.k)(),n=Object(l.useDispatch)(),c=Object(l.useSelector)(m.a);return e?i.a.createElement(b,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${c}/devices/properties/${e.mac}`),n(Object(s.g)({type:d.b.DEVICE,mac:e.mac}))}},t),Object(u.b)(e)):null};t.b=E;const h=Object(c.c)(E)`
  font-size: 12px;
`},2016:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n),r=a(4),l=a(5),c=a(1198),o=a(1953),s=a(1997);const d=Object(l.c)(r.c)`
  font-style: italic;
`,m=["children","essid","bssid","security","radio","rssi","noise","channel","band","bw","oui","signal","date","ap_mac"],u=()=>[{id:"children",label:"",minWidth:50,maxWidth:50,renderCell:({children:e,hierarchy:t})=>!t&&(null==e?void 0:e.length)?i.a.createElement(c.a,{type:"primary",value:e.length+1}):null,hideCellBorder:({hierarchy:e})=>!!e},{id:"essid",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_NETWORK_NAME"}),minWidth:150,renderCell:({essid:e,hierarchy:t})=>!t&&(e||i.a.createElement(d,{id:"WIFI_SCANNER_HIDDEN_NETWORK_NAME"}))||null},{id:"bssid",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_BSSID"}),minWidth:150},{id:"security",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_SECURITY"}),minWidth:150},{id:"radio",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_PROTOCOL"}),renderCell:({radio:e})=>e?i.a.createElement(r.c,{id:"WIFI_SCANNER_PROTOCOL_"+e.toUpperCase()}):null,minWidth:90,maxWidth:120},{id:"rssi",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_RSSI"}),minWidth:60,maxWidth:60},{id:"noise",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_NOISE"}),minWidth:60,maxWidth:80},{id:"channel",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_CHANNEL"}),minWidth:60,maxWidth:90},{id:"band",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_BAND"}),renderCell:({band:e})=>e?i.a.createElement(r.c,{id:"WIFI_SCANNER_BAND_"+e.toUpperCase()}):null,minWidth:80,maxWidth:90},{id:"bw",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_WIDTH"}),renderCell:({bw:e})=>e?e+" MHz":null,minWidth:80,maxWidth:90},{id:"oui",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_VENDOR"}),minWidth:120},{id:"date",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_LAST_SEEN"}),renderCell:e=>i.a.createElement(o.b,{date:e.date}),minWidth:90,maxWidth:120},{id:"ap_mac",sortable:!0,label:i.a.createElement(r.c,{id:"WIFI_SCANNER_TABLE_HEADER_NEAREST_AP"}),minWidth:120,renderCell:({device:e})=>i.a.createElement(s.a,{device:e})}]},2017:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"5D",label:"5D",value:120},{id:"1M",label:"1M",value:720}]},2061:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return d}));var n=a(163),i=a(127),r=(a(2016),a(2017));const l=r.a.find(({isDefault:e})=>!!e)||r.a[0],c=e=>Object(n.i)({name:i.a.WIFI_SCANNER,value:e}),o=e=>Object(n.j)({name:i.a.WIFI_SCANNER,value:e}),s=e=>Object(n.f)({name:i.a.WIFI_SCANNER,value:e}),d=()=>s(l.value)},2150:function(e,t,a){"use strict";var n,i=a(0),r=a.n(i),l=a(5),c=a(1146),o=a(41),s=a(40),d=a(49),m=a(4),u=a(8),b=a(95),E=a(175),h=a(549),f=a(170);!function(e){e.DEFAULT="default",e.HOVER="hover",e.DISABLED="disabled",e.ACTIVE="active"}(n||(n={}));const p={[n.DEFAULT]:{light:"#d6d9e2",dark:"#3f3f3f"},[n.HOVER]:{light:"#7e8190",dark:"#9d9d9d"},[n.DISABLED]:{light:"#eeeff3",dark:"#1e1e1e"},[n.ACTIVE]:{light:"#a4a7b5",dark:"#2f2f2f"}},g=(e,t)=>p[t][e],O=(e,t)=>"1px 0px 0px 0px "+g(e,t),A=Object(l.c)(f.a,{shouldForwardProp:e=>"rotate"!==e})`
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
  border-color: ${({motif:e})=>""+g(e,n.DEFAULT)};
  box-shadow: ${({motif:e})=>""+O(e,n.DEFAULT)};
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
    box-shadow: ${({motif:e})=>""+O(e,n.DISABLED)};
    border-color: ${({motif:e})=>""+g(e,n.DISABLED)};
  }
  &:hover {
    z-index: 1;
    box-shadow: ${({motif:e})=>""+O(e,n.HOVER)};
    border-color: ${({motif:e})=>""+g(e,n.HOVER)};
    border-right: 0;
    background-color: transparent !important;
  }
  &:active {
    box-shadow: ${({motif:e})=>""+O(e,n.ACTIVE)};
    border-color: ${({motif:e})=>""+g(e,n.ACTIVE)};
  }
`;var N=({disabled:e,onClick:t,rotate:a,motif:n})=>r.a.createElement(A,{variant:"secondary",rotate:a,disabled:e,onClick:t,motif:n},r.a.createElement("svg",{width:"4",height:"8",viewBox:"0 0 4 8",fill:"none"},r.a.createElement("path",{d:"M3.75026 0.999386C3.75026 1.11739 3.70826 1.23639 3.62426 1.33138L1.25026 3.99939L1.27026 4.02039L3.62326 6.66739C3.80726 6.87339 3.78826 7.18939 3.58226 7.37339C3.37626 7.55739 3.06026 7.53839 2.87626 7.33239L0.530256 4.69439C0.156256 4.30739 0.156256 3.69139 0.530256 3.30439L2.87526 0.667385C3.05826 0.461386 3.37526 0.442385 3.58126 0.626385C3.69326 0.724385 3.75026 0.861386 3.75026 0.999386Z",fill:"#A4A7B5"})));const v=Object(l.c)(b.g)`
  overflow: auto;
  table {
    z-index: 1;
  }
`,C=Object(l.c)(c.a)`
  > div > div {
    height: 28px;
  }
  input {
    ${({theme:e,motif:t})=>`\n      margin-top: ${e.spacing["spacing-xs"]};\n      color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n      -webkit-text-fill-color: ${"dark"===t?"#c2c2c2":o.a["grey-2"]} !important;\n    `}
  }
`,_=[{value:"25",default:!0},{value:"50"},{value:"100"}];t.a=({onRenderTable:e,customContent:t,items:a,section:n,rowOptions:l,onRowsChanged:c,onPageChanged:o,tableType:f,totalItems:p,pageNumber:g})=>{const{motif:O}=Object(s.a)(),A=Object(u.useDispatch)(),I=Object(i.useMemo)(()=>l||_,[l]),j=Object(i.useMemo)(()=>I.map(({value:e})=>({label:e,value:e})),[l,I]),R=Object(u.useSelector)(Object(E.v)(f)),S=Object(i.useMemo)(()=>{var e,t;return Number((null==R?void 0:R.rowsPerPage)&&j.some(({value:e})=>Number(e)===R.rowsPerPage)?R.rowsPerPage:(null===(e=I.find(e=>null==e?void 0:e.default))||void 0===e?void 0:e.value)||(null===(t=null==I?void 0:I[0])||void 0===t?void 0:t.value))},[R,j,I]),W=Object(i.useMemo)(()=>Math.max(1,g||0),[g]),x=Object(i.useCallback)(e=>{null==o||o(e)},[o,A]),D=Object(i.useCallback)(()=>{x(W-1)},[W,x]),w=Object(i.useCallback)(()=>{x(W+1)},[W,x]),T=Object(i.useCallback)(({value:e})=>{const t=Number(e);A(Object(h.j)(f,{rowsPerPage:t})),null==c||c(t)},[A,c,f]),F=Object(i.useMemo)(()=>{let e=(W-1)*S+1;return e>(null==a?void 0:a.length)&&(e=(null==a?void 0:a.length)-S,x(Math.ceil(Math.ceil(e)/S+1))),e},[x,W,S,null==a?void 0:a.length]),y=Object(i.useMemo)(()=>{let e=F+S-1;return e>=(null==a?void 0:a.length)&&(e=null==a?void 0:a.length),e},[F,S,null==a?void 0:a.length]),L=Object(i.useMemo)(()=>({from:Math.max(0,F-1),rowsPerPage:S}),[F,S]),B=Object(i.useMemo)(()=>1===W,[W]),P=Object(i.useMemo)(()=>y>=(null==a?void 0:a.length),[y,null==a?void 0:a.length]);return r.a.createElement(v,{width:"100%",height:"100%",padding:"30px",flexDirection:"column"},e(L),r.a.createElement(b.g,{marginTop:30,justifyContent:"space-between"},r.a.createElement(b.g,{alignItems:"center"},r.a.createElement(b.g,{marginRight:8},r.a.createElement(d.a,{color:"secondary"},r.a.createElement(m.c,{id:"PAGINATION",values:{from:F,to:y,total:p,section:r.a.createElement(m.c,{id:n})}}))),r.a.createElement(b.g,{marginRight:24},r.a.createElement(d.a,{color:"secondary"},r.a.createElement(N,{disabled:B,onClick:D,motif:O})),r.a.createElement(d.a,{color:"secondary"},r.a.createElement(N,{disabled:P,rotate:!0,onClick:w,motif:O}))),r.a.createElement(b.g,{alignItems:"center"},r.a.createElement(b.g,{marginRight:8},r.a.createElement(d.a,{color:"secondary"},r.a.createElement(m.c,{id:"ROWS_PER_PAGE"}))),r.a.createElement(C,{value:null==S?void 0:S.toString(),width:48,options:j,onChange:T,motif:O}))),t))}},2898:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a(809),c=a(173),o=a(64),s=a(2),d=a(232),m=a(2332),u=a(5),b=a(7),E=a.n(b),h=a(4),f=a(1923),p=a(1200),g=a(1972),O=a(13),A=a(805),N=a(2150),v=a(2175),C=a(2016),_=a(16);const I=e=>Object(_.a)(e,["wifiScanner","pageNumber"],1);var j=a(1144);const R=Object(u.c)(f.a)`
  max-width: 310px !important;
  > svg {
    visibility: hidden;
  }
  > div {
    left: auto !important;
    background: transparent !important;
  }
  > h3 {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
  > p {
    font-size: ${({theme:e})=>e.fontSize["font-size-l2"]};
    letter-spacing: 0.27px;
    color: ${({theme:e})=>e.motifPalette.text03};
  }
`,S=u.a`
  z-index: 601;
`,W=Object(u.c)(p.a)`
  max-height: 100vh;
`;var x=()=>{const e=Object(r.useDispatch)(),t=Object(r.useSelector)(v.a),a=Object(r.useSelector)(I),n=(t,a)=>{e(Object(O.P)(A.a.WIFI_SCANNER,{sortBy:t.id,isAscending:a}))},l=({visibleColumns:t})=>{e(Object(O.P)(A.a.WIFI_SCANNER,{initialColumns:t.map(({id:e})=>e)}))},{sortBy:c,isAscending:o,initialColumns:s}=Object(r.useSelector)(Object(O.F)(A.a.WIFI_SCANNER))||{sortBy:"date",isAscending:!1,initialColumns:C.a};return i.a.createElement(i.a.Fragment,null,t.length>0?i.a.createElement(N.a,{section:"PAGINATION_SECTION",items:t,tableType:A.a.WIFI_SCANNER,onRenderTable:({from:e,rowsPerPage:a})=>i.a.createElement(g.a,{items:t,rowLimit:a,rowOffset:e,columns:Object(C.b)(),onColumnFilterChanged:l,onSort:n,initialSortBy:c,initiallySortAscending:o,initialColumns:s,rowHeight:32,hideHierarchyLines:!0,hideHierarchyCellBorder:({hierarchy:e})=>!!e,disableHover:!0,disableTextPointer:!0,disableSelection:!0,popoverProps:{align:"leftBottom",classNameCardWrap:S,renderCard:({className:e,open:t,size:a,align:n,motif:r,children:l})=>i.a.createElement(W,{className:E()(e),open:t,motif:r,align:n,size:a},l)}}),onPageChanged:t=>{e(Object(j.b)(t))},pageNumber:a}):i.a.createElement(R,{icon:"noSearchResults",title:i.a.createElement(h.c,{id:"WIFI_SCANNER_TABLE_EMPTY_HEADER"}),button:null}))};var D=function({hours:e}){const t=Object(r.useDispatch)();return Object(n.useEffect)(()=>()=>t(Object(s.c)(Object(m.fetchWiFiScannerListByTimeAction)(e))),[]),Object(o.e)([Object(m.fetchWiFiScannerListByTimeAction)(e)],i.a.createElement(x,null),{renderKey:e,pastDelay:0})},w=a(2085),T=a(2061);t.default=function(){const e=Object(r.useSelector)(w.a),t=Object(r.useDispatch)();return Object(n.useEffect)(()=>{e||t(Object(T.d)())},[t,e]),Object(o.e)([Object(d.c)("wifiScanner"),Object(c.fetchDevicesBasic)(void 0,{type:s.a.CACHE})],i.a.createElement(l.a,null,e&&i.a.createElement(D,{hours:e})))}}}]);