(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[22],{1946:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"m",(function(){return d})),a.d(t,"k",(function(){return _})),a.d(t,"h",(function(){return u})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return O})),a.d(t,"f",(function(){return b})),a.d(t,"i",(function(){return I})),a.d(t,"l",(function(){return g})),a.d(t,"d",(function(){return C})),a.d(t,"e",(function(){return T})),a.d(t,"n",(function(){return v})),a.d(t,"o",(function(){return D})),a.d(t,"c",(function(){return f})),a.d(t,"p",(function(){return S})),a.d(t,"q",(function(){return A}));var n=a(112);const c=e=>(t,a,c,r)=>Object(n.d)(e(c,t),e(r,a)),r=e=>t=>{const a=(e=>t=>e.formatMessage({id:t}))(e);return(e,n,c,r)=>{const[l,i]=[t(e,c),t(n,r)].map(a);return l.localeCompare(i)}};var l=a(16),i=a(133),o=a(6),E=a(138),s=a(76);const m={ugw:1,usw:2,uap:3},d=(e,t,a,c)=>{const r=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(a)],l=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(c)];if(r===l){if(a.adopted===c.adopted){if(a.type!==c.type)return((e,t)=>{const a=e.type,c=t.type;return a===c?Object(n.d)(Object(s.a)(e),Object(s.a)(t)):Object(n.d)(m[a],m[c])})(a,c);const e=a.originalName,t=c.originalName;return e&&t?Object(n.d)(e,t):e?-1:t?1:Object(n.d)(a.modelName,c.modelName)}return Object(n.d)(a.adopted?1:2,c.adopted?1:2)}return Object(n.d)(r,l)},_=(e,t,a,c)=>Object(n.d)(Object(s.a)(a),Object(s.a)(c)),u=(e,t,a,c)=>{const r=Object(E.d)(Object(o.getDeviceIp)(a))||0,l=Object(E.d)(Object(o.getDeviceIp)(c))||0;return Object(n.d)(r,l)},p=(e,t,a,c)=>{const{averageSatisfaction:r}=a.satisfactionByRadio,{averageSatisfaction:l}=c.satisfactionByRadio;let i=Object(o.getDeviceExperience)(a),E=Object(o.getDeviceExperience)(c);return a.type===o.DeviceType.AP&&r<0&&(i=-.5),c.type===o.DeviceType.AP&&l<0&&(E=-.5),Object(n.d)(i,E)},O=(e,t,a,c)=>{const r=Object(o.getDeviceMemoryUsage)(a)||0,l=Object(o.getDeviceMemoryUsage)(c)||0;return Object(n.d)(r,l)},b=(e,t,a,c)=>{const r=parseFloat(Object(l.a)(a,"system-stats.cpu",0)),i=parseFloat(Object(l.a)(c,"system-stats.cpu",0));return Object(n.d)(r,i)},I=(e,t,a,c)=>{const r=parseFloat(Object(l.a)(a,"sys_stats.loadavg_1",-1)),i=parseFloat(Object(l.a)(c,"sys_stats.loadavg_1",-1));return Object(n.d)(r,i)},g=(e,t,a)=>{const c=Object(o.getRadioByType)(e,a),r=Object(o.getRadioByType)(t,a),l=c?Object(o.getRadioStatsByName)(e,c.name):null,i=r?Object(o.getRadioStatsByName)(t,r.name):null;if(c&&r&&l&&i){let a,E;const s=(e,t)=>e&&t?Object(n.d)(e,t):(e?-1:t&&1)||0;return a=("auto"===c.channel?0:c.channel)||0,E=("auto"===r.channel?0:r.channel)||0,s(a,E)?s(a,E):(a=Object(o.getRadioStatsBindedChannel)(e,l)||c.channel||0,E=Object(o.getRadioStatsBindedChannel)(t,i)||r.channel||0,s(a,E)?s(a,E):(a=parseInt(Object(o.getRadioHt)(c),10),E=parseInt(Object(o.getRadioHt)(r),10),s(a,E)?s(a,E):(a=Object(o.getRadioStatsPrimaryChannel)(l)||c.channel||0,E=Object(o.getRadioStatsPrimaryChannel)(i)||c.channel||0,s(a,E)?s(a,E):(a=Object(o.getRadioStatsTransmitPower)(l),E=Object(o.getRadioStatsTransmitPower)(i),s(a,E)?s(a,E):0))))}if(c&&r){if(l)return 1;if(i)return-1}return c?1:r?-1:0},R=(e,t)=>{if(!e.radio_table_stats)return-1;return Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},C=(e,t,a,c)=>{const r=R(a,i.b.NG),l=R(c,i.b.NG);return Object(n.d)(r,l)},T=(e,t,a,c)=>{const r=R(a,i.b.NA),l=R(c,i.b.NA);return Object(n.d)(r,l)},h=(e,t)=>{const a=Object(o.getRadioStatsByType)(e,t);return a.length?a.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):-1},v=(e,t,a,c)=>{const r=h(a,i.b.NG),l=h(c,i.b.NG);return Object(n.d)(r,l)},D=(e,t,a,c)=>{const r=h(a,i.b.NA),l=h(c,i.b.NA);return Object(n.d)(r,l)},f=(e,t,a,c)=>{const r=Object(o.getChannelValue)(a),l=Object(o.getChannelValue)(c);return Object(n.d)(r,l)},P=(e,t)=>Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.cu_total||0,0),S=(e,t,a,c)=>{const r=P(a,i.b.NG),l=P(c,i.b.NG);return Object(n.d)(r,l)},A=(e,t,a,c)=>{const r=P(a,i.b.NA),l=P(c,i.b.NA);return Object(n.d)(r,l)}},1957:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(8),l=a(13),i=a(42),o=a(137),E=a(1970),s=a(97);t.a=({date:e,relativeToDate:t=new Date,spacer:a=" "})=>{const m=Object(r.useSelector)(l.N),d=Object(r.useSelector)(i.selectLocaleSettings),_=Object(r.useSelector)(s.b),u=Object(n.useMemo)(()=>Object(o.d)(m,d,_),[m,d,_]);return c.a.createElement(E.b,{date:e.toLocaleString("en-US",{timeZone:u}),spacer:a})}},1961:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return E}));var n=a(127),c=a(299),r=a(337);const l={},i=e=>Object(c.b)(e,n.a.WIFI_MAN,r.a.WIFI_MAN,l),o=e=>Object(c.c)(e,n.a.WIFI_MAN),E=e=>Object(c.a)(e,n.a.WIFI_MAN)},1975:function(e,t,a){"use strict";a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return _}));var n=a(3),c=a(1862),r=a(2218),l=a(1765),i=a(2032),o=a(1961);const E=e=>({date:new Date(1e3*e.report_timestamp),...e}),s=e=>Object.values(Object(c.a)(e,"client_mac")).map(e=>Object(r.a)(e,({report_timestamp:e})=>e)),m=Object(n.a)(l.selectWifiManData,e=>e.map(e=>E(e))),d=Object(n.a)(l.selectWifiManData,o.c,o.a,(e,t,a)=>s(e.map(e=>E(e)).filter(e=>Object(i.c)(e,t)&&Object(i.a)(e,a)))),_=Object(n.a)(l.selectWifiManData,o.b,o.c,o.a,(e,t,a,n)=>s(e.map(e=>E(e)).filter(e=>Object(i.c)(e,a)&&Object(i.b)(e,t)&&Object(i.a)(e,n))))},1976:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(802);t.a=({item:e,className:t})=>{const{speed_tests:a}=e,n=a&&a.reduce((e,{download_speed_bytes:t})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:n,direction:"down",hideIcon:!0})}},1977:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(802);t.a=({item:e,className:t})=>{const{speed_tests:a}=e,n=a&&a.reduce((e,{upload_speed_bytes:t})=>e+t,0);return c.a.createElement(r.a,{className:t,bytes:n,direction:"up",hideIcon:!0})}},1980:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(537),l=a(5),i=a(77),o=a(24),E=a(806);const s=Object(l.c)(r.a,{shouldForwardProp:e=>!["width","height"].includes(e)})`
  float: left;
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  ${({width:e})=>e&&`width: ${e}px;`}
  ${({height:e})=>e&&`height: ${e}px;`}
`;var m=({defaultName:e="",client:t=null,width:a,height:n,alt:r})=>c.a.createElement(o.a,{alignItems:"center"},c.a.createElement(s,{client:t,width:a,height:n,alt:r}),c.a.createElement(E.a,null,Object(i.getClientDisplayName)(t)||e));t.a=({data:{client_icon_device_id:e,client_icon_engine_id:t,client_name:a},name:n,withName:l=!1})=>{const i=l?m:r.a;return c.a.createElement(i,{client:{dev_id:e,fingerprint_source:t,name:n||a,is_wired:!1},alt:n})}},1983:function(e,t,a){"use strict";var n=a(1995);const c=[{value:n.a.K,label:"COMMON_UNIT_BPS",values:{prefix:n.a.K}},{value:n.a.M,label:"COMMON_UNIT_BPS",values:{prefix:n.a.M}},{value:n.a.G,label:"COMMON_UNIT_BPS",values:{prefix:n.a.G}}];t.a=c},1984:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),c=a.n(n),r=a(5),l=a(47),i=a(23),o=a(24);const E=Object(r.c)(o.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,s=Object(r.c)(l.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  white-space: nowrap;
`;function m({filterCount:e=0,filterTitleLabel:t="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return c.a.createElement(E,{alignItems:"center"},c.a.createElement(i.T,null),c.a.createElement(s,{message:t,values:{count:e}}))}},1985:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));const n={success:{lo:80,hi:100,within:!0},warning:{lo:60,hi:80,within:!0},danger:{lo:0,hi:60,within:!0}},c=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"5D",label:"5D",value:120},{id:"1M",label:"1M",value:720}]},1994:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return P})),a.d(t,"b",(function(){return T})),a.d(t,"f",(function(){return A})),a.d(t,"g",(function(){return j})),a.d(t,"h",(function(){return x})),a.d(t,"e",(function(){return g})),a.d(t,"d",(function(){return v}));var n=a(0),c=a.n(n),r=a(5),l=a(1925),i=a(24);const o=Object(r.c)(i.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,E=Object(r.c)(l.a)`
  bottom: -1px;
`;var s=({isLoading:e,children:t,...a})=>c.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,c.a.createElement(E,{isLoading:e,placement:"bottom"})),m=a(8),d=a(2003),_=a(803),u=a(2014),p=a(4),O=a(49),b=a(2009);const I=Object(r.c)(b.a)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var g=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...c})=>({id:e,label:t,disabled:"function"==typeof a?a(c):a,path:n})),[e]);return t?c.a.createElement(I,{selectedTabBold:!0,items:t}):null},R=a(1984),C=a(170);var T=Object(r.c)(C.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const h=Object(r.c)(T)`
  z-index: 5;
`;var v=({filterCount:e,filterTitleLabel:t,items:a})=>{const n=Object(m.useDispatch)();return c.a.createElement(i.a,{height:"100%"},c.a.createElement(h,{onClick:()=>n(Object(_.b)(!0))},c.a.createElement(R.a,{filterCount:e,filterTitleLabel:t})),a)};const D=Object(r.c)(O.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
`;var f=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterCount:r,filterTitleLabel:l,items:o,title:E})=>{const m=(null==e?void 0:e.length)>1,d=!m&&1===e.length;return c.a.createElement(s,{isLoading:a},!t&&c.a.createElement(v,{filterCount:r,filterTitleLabel:l,items:o}),m&&c.a.createElement(g,{routes:e}),d&&c.a.createElement(D,{weight:"bold"},e[0].label),E&&c.a.createElement(D,{weight:"bold",hideFilterButton:t},c.a.createElement(p.c,{id:E})),c.a.createElement(i.a,{height:"100%",flex:m||E||d?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var P=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:r,filterCount:l,filterFooter:i,renderFilterDrawerContent:o,noFilterDrawerStyledContent:E,filterTitleLabel:s,items:p,title:O})=>{const b=Object(m.useDispatch)(),I=Object(m.useSelector)(d.a);return Object(n.useEffect)(()=>()=>{b(Object(_.b)(!1))},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{isOpen:I,filterCount:l,filterTitleLabel:s,noStyledContainer:E,onClose:()=>b(Object(_.b)(!1)),renderFilterDrawerContent:()=>o(I),renderFooter:()=>i}),c.a.createElement(f,{routes:e,hideFilterButton:t,isLoading:a,filterCount:l,filterTitleLabel:s,items:p,title:O},r))},S=a(1935);var A=Object(r.c)(S.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var j=Object(r.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`,N=a(1837);const y=r.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,L=r.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function x(e){return c.a.createElement(N.a,Object.assign({className:y,tabClassName:L},e))}},1995:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.K="k",e.M="M",e.G="G"}(n||(n={}))},1997:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),c=a.n(n),r=a(31),l=a(8),i=a(5),o=a(170),E=a(386),s=a(792),m=a(69),d=a(76);const _=Object(i.c)(o.a)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
`,u=({device:e,...t})=>{const a=Object(r.k)(),n=Object(l.useDispatch)(),i=Object(l.useSelector)(m.a);return e?c.a.createElement(_,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${i}/devices/properties/${e.mac}`),n(Object(E.g)({type:s.b.DEVICE,mac:e.mac}))}},t),Object(d.b)(e)):null};t.b=u;const p=Object(i.c)(u)`
  font-size: 12px;
`},1998:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),c=a(2002);const r={method:"post",fetchConfig:{getAllPostData:!0},idField:c.a},l=(e,t)=>Object(n.o)(c.b,c.c,((e,t)=>({data:{[t?"ap_mac":"mac"]:e,_limit:t?20:5,_sort:"-assoc_time"}}))(e,t),r)},1999:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return u}));var n=a(16),c=a(1205),r=a(32),l=a(13),i=a(1998),o=a(42),E=a(2),s=a(1971),m=a(137),d=a(97);const _=(e,t,a,n=[])=>{const{data:c,..._}=((e,t,a)=>Object(E.t)(Object(i.a)(t,a),e.models))(e,t,a),u=Object(d.b)(e),p=Object(m.d)(Object(l.N)(e),Object(o.selectLocaleSettings)(e),u),O=Object(l.n)(e),b=Object(l.J)(e);return{..._,data:c.map(({assoc_time:e,duration:t,_id:a,mac:c,satisfaction:l,hostname:i=""})=>{const o=Object(m.a)(1e3*e,"UTC",p),E=Object(m.a)(1e3*e-t,"UTC",p);return{id:a,date:Object(r.format)(o,O),start:Object(r.format)(E,b),duration:Object(s.c)(t,!0),experience:l,mac:c,hostname:i,client:n.find(e=>e.mac===c)}})}},u=(e,t,a,_)=>{const u=((e,t,a,c)=>{const{meta:{model:r}}=Object(i.a)(a,c);return Object(n.a)(Object(E.w)(r,t,e.models),"data",{})})(e,t,a,_);if(!Object(c.a)(u)){const t=Object(d.b)(e),a=Object(m.d)(Object(l.N)(e),Object(o.selectLocaleSettings)(e),t),n=Object(l.n)(e),c=Object(l.J)(e),{assoc_time:i,duration:E,sw_port:_,mac:p,ip:O,satisfaction:b,hostname:I="",is_wired:g,name:R,_id:C}=u,T=Object(m.a)(1e3*i,"UTC",a),h=Object(m.a)(1e3*i-E,"UTC",a);return{id:C,date:i?Object(r.format)(T,n):"",duration:E?Object(s.c)(E,!0):"",start:i?Object(r.format)(h,c):"",mac:p,ip:O,port:_,experience:b,hostname:I,is_wired:g,name:R}}return u}},2e3:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return _})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return O}));var n=a(32),c=a(1207),r=a(137);const l=(e,t)=>Object(r.i)(Object(n.startOfMonth)(Object(n.addMonths)(e,1)),t),i=(e,t)=>Object(n.differenceInMinutes)(e,t)/5,o=(e,t)=>Object(n.subMinutes)(e,5*t),E=(e,t)=>new Date(e-1e3*t*60*60*24);function s(e,t,a,c,s=!1){function m(t,c,l,i){const o=Math.ceil(c(t,e))||0,E=o>8,s=o>32?o/32:1;return Array(Math.min(32,o)+1).fill(t).map((e,t)=>{const c=l(e,t*s),o=Object(r.a)(c,a);return{value:c.getTime(),label:E&&t%2==1?null:Object(n.format)(o,i)}}).reverse()}if(Object(n.differenceInYears)(t,e)>1)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM YYYY");if(Object(n.differenceInMonths)(t,e)>2)return m(l(t,a),n.differenceInMonths,n.subMonths,"MMM");if(Object(n.differenceInDays)(t,e)>10){const e=Date.now(),a=t.getTime()>e,l=Object(r.i)(new Date,"UTC"),i=c>l.getTime()?new Date(c):l;return m(a?i:t,n.differenceInDays,E,"MMM D")}if(Object(n.differenceInDays)(t,e)>2){const e=m(t,n.differenceInDays,n.subDays,"ddd"),l=Date.now(),i=t.getTime()>l,o=Object(r.i)(new Date,a);return i&&c>o.getTime()&&(e[e.length-1]={value:c,label:null}),e}return Object(n.differenceInHours)(t,e)>1?m(t,n.differenceInHours,n.subHours,s?"H:mm":"hA"):m(t,i,o,"h:mma")}function m(e,t){function a(a,c,r,l,i=null){const o=a(t,e)||0,E=o>8;return Array(o+1).fill(e).map((t,a)=>{const o=r(c(e),a);return{value:o.getTime(),label:E&&a%2==1?null:Object(n.format)(o,l),tooltipLabel:Object(n.format)(o,i||l)}})}return Object(n.differenceInYears)(t,e)>1?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM YYYY"):Object(n.differenceInMonths)(t,e)>2?a(n.differenceInMonths,n.startOfMonth,n.addMonths,"MMM"):Object(n.differenceInDays)(t,e)>10?a(n.differenceInDays,n.startOfDay,n.addDays,"MMM D"):Object(n.differenceInDays)(t,e)>2?a(n.differenceInDays,n.startOfDay,n.addDays,"ddd","ddd ha"):Object(n.differenceInHours)(t,e)>1?a(n.differenceInHours,n.startOfHour,n.addHours,"ha","ddd ha"):a(n.differenceInMinutes,n.startOfMinute,n.addMinutes,"h:ma","ddd h:ma")}function d(e,t){return[{label:Object(n.format)(e,t),value:e},{label:Object(n.format)(Object(n.subHours)(e,4),t),value:Object(n.subHours)(e,4).getTime()},{label:Object(n.format)(Object(n.subHours)(e,8),t),value:Object(n.subHours)(e,8).getTime()},{label:Object(n.format)(Object(n.subHours)(e,12),t),value:Object(n.subHours)(e,12).getTime()},{label:Object(n.format)(Object(n.subHours)(e,16),t),value:Object(n.subHours)(e,16).getTime()},{label:Object(n.format)(Object(n.subHours)(e,20),t),value:Object(n.subHours)(e,20).getTime()},{label:Object(n.format)(Object(n.subHours)(e,24),t),value:Object(n.subHours)(e,24).getTime()}].reverse()}const _=(e,t,a,l=!1)=>{const i=l?"H:mm":"h:mm A",o=Object(n.startOfHour)(Object(n.addMinutes)(t,55));return Object(c.a)(25,t=>{const c=Object(n.subHours)(o,t).getTime(),l=0===t?e.formatMessage({id:"COMMON_GRANUALITY_0"}):Object(r.e)(c,a,i);return{label:t%6==0?l:null,value:c}}).reverse()};function u(e,t,a){const n=(c=10,r=t-e,Math.log(r)/Math.log(c)-1);var c,r;const l=n>0?Math.ceil(n):Math.floor(n),i=10**l,o=Math.ceil((t-e)/i)/(a-2)*i,E=Math.abs(l),s=[];let m=Math.round(e/i)*i;for(;m<t+2*o;m+=o)s.push({label:0===m?"0":m.toFixed(E),value:m});return s.reverse()}const p=(e,t)=>{const a=t-1;let n=Math.ceil(e);for(;n%a!=0;)n+=1;return Object(c.a)(t,e=>{const t=e?Math.ceil(e*(n/a)):0;return{value:t,label:String(t)}}).reverse()},O=(e,t)=>{let a=e;return t?a=a.replace(/a/i,""):(a=a.replace(/H/g,"h"),a.search(/a/i)<0&&(a+="A")),a}},2002:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n="session",c="/api/s/{site}/stat/session",r="_id"},2003:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen}},2004:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(146),l=a(113),i=a(801);t.a=({model:e,name:t,withName:a=!1,width:n=25,height:o=25,...E})=>{const s=r.deviceModels[e],m=a?i.a:l.c,d=a?t||(null==s?void 0:s.name):void 0;return c.a.createElement(m,Object.assign({device:{model:e,type:null==s?void 0:s.type,name:d},width:n,height:o},E))}},2005:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(78),l=a(806);t.a=({item:e})=>{const{client_link_download_rate_kbps:t,client_link_upload_rate_kbps:a}=e,n=`${Object(r.c)(1e3*t/8,"bitrate")} / ${Object(r.c)(1e3*a/8,"bitrate")}`;return c.a.createElement(l.a,null,n)}},2009:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(31),l=a(1837);t.a=({items:e,...t})=>{const{params:a,path:n}=Object(r.n)(),i=Object(r.l)(),o=Object(r.k)(),E=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,i);return c.a.createElement(l.a,Object.assign({tabs:e,selectedTab:null==E?void 0:E.id,onSelectTab:({path:e,params:t={}})=>o.push(Object(r.i)(e,{...a,...t}))},t))}},2014:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(1926),i=a(24),o=a(1984);const E=Object(r.c)(l.a)`
  width: 260px !important;
`,s=Object(r.c)("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({theme:e})=>e.space[3]+"px 24px"};
  overflow: auto;
`,m=Object(r.c)("div")`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 38px 24px;
  flex: none;
`;t.a=({filterCount:e,filterTitleLabel:t,isOpen:a,noStyledContainer:n,onClose:r,renderFilterDrawerContent:l,renderFooter:d})=>{const _=l(),u=n?_:c.a.createElement(s,null,_);return c.a.createElement("div",null,c.a.createElement(E,{in:a,header:c.a.createElement(o.a,{filterCount:e,filterTitleLabel:t}),headerScale:"small",onClose:r,side:"left"},a&&c.a.createElement(i.a,{flex:1,flexDirection:"column",height:"100%"},u,d&&c.a.createElement(m,null,d()))))}},2018:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{fetch(e,{mode:"no-cors"}).then(()=>{a(!0)}).catch(()=>a(!1))},[e]),t}},2021:function(e,t,a){"use strict";var n=a(1998);a.d(t,"fetchSession",(function(){return n.a}));a(2002);var c=a(1999);a.d(t,"selectFormattedSessionData",(function(){return c.a}));a(2022)},2022:function(e,t){},2031:function(e,t,a){"use strict";var n=a(1975);a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}));var c=a(1961);a.d(t,"d",(function(){return c.b}))},2032:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(62),c=a(292),r=a(1985);const l=(e,t)=>{if(void 0!==t&&""!==t){const a=t.toLowerCase().trim();return["client_model","client_name","device_model","device_name","isp_name","public_ip","wlan_essid"].some(t=>{var n,c;return null===(c=null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.toLowerCase)||void 0===c?void 0:c.call(n).includes(a)})}return!0},i=(e,t)=>Object.keys(t).every(a=>{switch(a){case"experience":return!t.experience.length||t.experience.some(t=>{const a=r.b[t];return Object(c.e)(a,e.client_wifi_experience)});default:return Object(n.a)(t[a])?t[a].includes(e[a]):void 0===e[a]||e[a]===t[a]}}),o=(e,t)=>{if(t){return(Date.now()/1e3-e.report_timestamp)/3600<=t}return!0}},2033:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(28),c=a(42);const r=e=>{const t=Object(c.selectIsIpsDisabled)(e),a=Object(n.selectWanNetworks)(e).every(({wan_smartq_enabled:e})=>!e);return t&&a}},2040:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(170),i=a(49),o=a(24),E=a(4);const s=Object(r.c)(l.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
`;t.a=c.a.memo((function({countLabel:e="COMMON_CONTROL_PANEL_FILTER_FOOTER_COUNTS",numVisible:t,numTotal:a,numFilters:n,onClear:r,showResetButton:l,withReset:m}){const d=void 0!==t&&void 0!==a,_=r&&n>0;return c.a.createElement(o.a,{direction:"column",alignItems:"center",justifyContent:d&&_?"space-between":_?"flex-end":void 0},d&&c.a.createElement(i.a,{size:"caption"},c.a.createElement(E.c,{id:e,values:{numVisible:t,numTotal:a}})),m?c.a.createElement(c.a.Fragment,null,l&&c.a.createElement(s,{size:"small",variant:"link",onClick:r},c.a.createElement(E.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_RESET"}))):c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(s,{size:"small",variant:"link",onClick:r},c.a.createElement(E.c,{id:"COMMON_CONTROL_PANEL_FILTER_FOOTER_CLEAR",values:{count:n}}))))}))},2049:function(e,t,a){"use strict";var n=a(205);t.a=function(e,t,a){for(var c=-1,r=e.length;++c<r;){var l=e[c],i=t(l);if(null!=i&&(void 0===o?i==i&&!Object(n.a)(i):a(i,o)))var o=i,E=l}return E}},2050:function(e,t,a){"use strict";t.a=function(e,t){return e>t}},2052:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=({strength:e,color:t,inactiveColor:a="currentColor",width:n,height:r})=>c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",width:n,height:r},c.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{fill:e>=1?t:a,x:"0",y:"16",width:"3",height:"10"}),c.a.createElement("rect",{fill:e>=2?t:a,x:"6",y:"12",width:"3",height:"14"}),c.a.createElement("rect",{fill:e>=3?t:a,x:"12",y:"8",width:"3",height:"18"}),c.a.createElement("rect",{fill:e>=4?t:a,x:"18",y:"4",width:"3",height:"22"}),c.a.createElement("rect",{fill:e>=5?t:a,x:"24",y:"0",width:"3",height:"26"})))},2053:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(8),l=a(4),i=a(16),o=a(5),E=a(170),s=a(49),m=a(23),d=a(12),_=a(6),u=a(20),p=a(95);const O=Object(o.c)(E.a)`
  font-size: ${({theme:e})=>e.fontSize["font-size-s"]};
  padding: 0;
`;t.a=({device:e,icon:t,label:a,...o})=>{const{upgradable:E,upgrade_to_firmware:b,version:I,adopted:g}=e,R=Object(n.useMemo)(()=>Object(i.a)(e,"uplink.type")!==d.UplinkType.WIRELESS,[e]),C=Object(n.useMemo)(()=>Object(_.getDeviceState)(e),[e]),[T,h]=Object(n.useState)(C===_.DeviceState.UPGRADING),v=Object(n.useMemo)(()=>T||E&&(C===_.DeviceState.CONNECTED||C===_.DeviceState.PENDING&&R),[E,T,C,R]),D=Object(r.useDispatch)(),f=Object(n.useMemo)(()=>Object(_.isDeviceDowngradable)(e),[null==e?void 0:e.version,null==e?void 0:e.upgrade_to_firmware]);return v&&g?c.a.createElement(O,{variant:"inline",onClick:t=>{t.preventDefault(),t.stopPropagation(),D(Object(_.confirmDeviceUpgrade)({titleValues:{deviceName:e.name},messageValues:{deviceName:e.name,fromVersion:I,toVersion:b},onConfirm:()=>{h(!0),D(Object(_.upgradeDevice)(e,f)),h(!0)},onCancel:()=>{D(Object(u.e)()),h(!1)},isDowngrade:f}))},disabled:T,iconPosition:"right",Icon:t&&c.a.createElement(m.U,{isActive:!0})},c.a.createElement(p.g,{alignItems:"center"},c.a.createElement(s.a,Object.assign({size:"body",weight:"normal",color:"info"},o),c.a.createElement(l.c,{id:T?"DEVICE_ACTIONS_UPDATE_FIRMWARE":a||"DEVICE_ACTIONS_UPGRADE"})))):null}},2058:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"g",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return _})),a.d(t,"d",(function(){return u}));var n=a(2);const c="/api/s/{site}/rest/tag",r=()=>Object(n.o)("tags",c),l=(e,t)=>Object(n.h)("tags",c,{name:e,member_table:t}),i=(e,t)=>Object(n.y)("tags",e,`${c}/${e}`,{member_table:t}),o=e=>Object(n.l)("tags",e,`${c}/${e}`);var E=a(16),s=a(3);const m=Object(n.x)(r()),d=Object(s.a)(m,e=>Object(E.a)(e,"data",[])),_=Object(s.a)(d,e=>e.map(({name:e,_id:t})=>({label:e,value:t}))),u=Object(s.a)(d,(e,t)=>t,(e,t)=>e.filter(({member_table:e})=>e.includes(t)))},2068:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(5),l=a(295),i=a.n(l),o=a(1199),E=a(82);const s=Object(r.c)(o.a,{shouldForwardProp:e=>!["marginLeft","marginRight","statusSize"].includes(e)})`
  ${({statusSize:e=6})=>`\n    width: ${e}px;\n    height: ${e}px;\n  `}
  ${({marginLeft:e})=>e&&`margin-left: ${e}px;`}
  ${({marginRight:e})=>e&&`margin-right: ${e}px;`}
`,m=e=>r.a`
  animation: ${(e=>{const t=i()(E.q[e]).alpha(0).css(),a=i()(E.q[e]).alpha(.3).css();return r.e`
      0% {
        box-shadow: 0 0 0 4px ${t};
      }
      50% {
        box-shadow: 0 0 0 4px ${a};
      }
      100% {
        box-shadow: 0 0 0 4px ${t};
      }
    `})(e)} 1.2s ease-in-out 0s infinite;
`;t.a=({status:e,statusPulse:t,marginLeft:a,marginRight:n,statusSize:r})=>c.a.createElement(s,{variant:e,className:t?m(e):"",marginLeft:a,marginRight:n,statusSize:r})},2081:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2082:function(e,t,a){e.exports=a.p+"../images/c717a41d3f6a2424d8ce9bf0666d4c78.png"},2087:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(31),l=a(5),i=a(1926),o=a(8),E=a(241),s=a(548),m=a(33),d=a(1996),_=a(386),u=a(49),p=a(23),O=a(4),b=a(24),I=a(113),g=a(537),R=a(810),C=a(792),T=a(1980),h=a(77),v=a(6),D=a(76),f=a(2041);const P=Object(l.c)("div")`
  margin-left: 8px;
`,S=Object(l.c)(u.a)`
  max-width: 200px;
`,A=Object(l.c)(u.a)`
  margin-left: 8px;
`,j=Object(l.c)(u.a)`
  margin-left: -8px;
`,N=Object(l.c)("div")`
  max-height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,y=Object(l.c)(R.a)`
  margin-right: 8px;
`,L=Object(l.c)(p.vc)`
  margin-left: 8px;
`,x=c.a.memo(({activeItem:{data:e,data:{displayName:t=Object(h.getClientDisplayName)(e)}}})=>c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(N,null,c.a.createElement(g.a,{client:e,alt:t})),c.a.createElement(P,null,c.a.createElement(S,{size:"caption",weight:"bold",truncate:!0},Object(f.b)(e)))),(e,t)=>{var a,n,c,r,l,i,o,E,s,m,d,_;return(null===(a=e.activeItem.data)||void 0===a?void 0:a.mac)===(null===(n=t.activeItem.data)||void 0===n?void 0:n.mac)&&(null===(c=e.activeItem.data)||void 0===c?void 0:c.name)===(null===(r=t.activeItem.data)||void 0===r?void 0:r.name)&&(null===(l=e.activeItem.data)||void 0===l?void 0:l.dev_id_override)===(null===(i=t.activeItem.data)||void 0===i?void 0:i.dev_id_override)&&(null===(o=e.activeItem.data)||void 0===o?void 0:o.dev_id)===(null===(E=t.activeItem.data)||void 0===E?void 0:E.dev_id)&&(null===(s=e.activeItem.data)||void 0===s?void 0:s.fingerprint_override)===(null===(m=t.activeItem.data)||void 0===m?void 0:m.fingerprint_override)&&(null===(d=e.activeItem.data)||void 0===d?void 0:d.fingerprint_source)===(null===(_=t.activeItem.data)||void 0===_?void 0:_.fingerprint_source)}),V=c.a.memo(({activeItem:e})=>{var t,a;return c.a.createElement(b.a,{alignItems:"center"},Object(v.hasActiveUnifiCare)(e.data)&&c.a.createElement(y,{width:30,height:30}),c.a.createElement(N,null,c.a.createElement(I.c,{device:e.data})),c.a.createElement(P,null,c.a.createElement(S,{size:"caption",weight:"bold",truncate:!0},Object(D.c)(e.data))),(null===(t=e.data)||void 0===t?void 0:t.model_in_eol)&&c.a.createElement(A,{color:"danger",weight:"bold"},"EOL"),(null===(a=e.data)||void 0===a?void 0:a.model_in_lts)&&c.a.createElement(A,{color:"warning",weight:"bold"},"LTS"),Object(v.isU6)(e.data)&&c.a.createElement(L,{size:"medium",isActive:!0}))},(e,t)=>{var a,n,c,r;return(null===(a=e.activeItem.data)||void 0===a?void 0:a.mac)===(null===(n=t.activeItem.data)||void 0===n?void 0:n.mac)&&(null===(c=e.activeItem.data)||void 0===c?void 0:c.name)===(null===(r=t.activeItem.data)||void 0===r?void 0:r.name)}),w=({activeItem:{data:e,data:{client_name:t}}})=>c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(N,null,c.a.createElement(T.a,{data:e})),c.a.createElement(P,null,c.a.createElement(S,{truncate:!0},t)));var F,M=({activeItem:e})=>{switch(e.type){case C.b.CLIENT:return c.a.createElement(x,{activeItem:e});case C.b.DEVICE:return c.a.createElement(V,{activeItem:e});case C.b.WIFI_MAN:return c.a.createElement(w,{activeItem:e});case C.b.ISP_DETAILS:return c.a.createElement(j,{weight:"bold",size:"caption"},c.a.createElement(O.c,{id:"COMMON_WORD_INTERNET"}));default:return null}},U=a(97),B=a(2097);!function(e){e.WAN="wan",e.ALL="all"}(F||(F={}));var k=a(1917),W=a(540),H=a(1858),G=a(170),Y=a(159);const $=Object(l.c)(b.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`,z=Object(l.c)(b.a)`
  margin-top: 7px;
`;var K=({activeItem:e})=>{const t=Object(r.k)(),{site:a}=Object(r.m)(),n=Object(o.useSelector)(m.i),{name:l,uptime:i,ip:E,port_idx:s,configuration:{wan_provider_capabilities:d,wan_dns1:_,wan_dns2:p},details:{service_provider:I}}=e,{download_kilobits_per_second:g=0,upload_kilobits_per_second:R=0}=d,C=1e3*g/8,T=1e3*R/8;return c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_SERVICE_PROVIDER"})),c.a.createElement(u.a,{color:"secondary",size:"caption"},l)),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"COMMON_LABEL_LOCATION"})),c.a.createElement(u.a,{color:"secondary",size:"caption"},null==I?void 0:I.city)),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_DOWNLOAD_CAPACITY"})),c.a.createElement(H.a,{type:"bytes",input:C,options:"bitrate",color:"secondary",size:"caption"})),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_UPLOAD_CAPACITY"})),c.a.createElement(H.a,{type:"bytes",input:T,options:"bitrate",color:"secondary",size:"caption"})),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"COMMON_WORD_UPTIME"})),c.a.createElement(H.a,{type:"uptime",input:i,color:"secondary",size:"caption"})),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_WAN_IP",values:{port_idx:s}})),c.a.createElement(u.a,{color:"secondary",size:"caption"},E)),(_||p)&&c.a.createElement(c.a.Fragment,null,c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_1"})),c.a.createElement(u.a,{color:"secondary",size:"caption"},_)),c.a.createElement($,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_DNS_SERVER_2"})),c.a.createElement(u.a,{color:"secondary",size:"caption"},p))),c.a.createElement(z,null,c.a.createElement(G.a,{size:"small",type:"button",variant:"inline",onClick:()=>{const e=Object(r.i)(n,{site:a});t.push(`${e}${Y.a.internetSettings}`)}},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_LINK_INTERNET_SETTINGS"}))))},X=a(1997),q=a(69);const Z=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
`;var J=({device:e,...t})=>{const a=Object(o.useSelector)(t=>Object(v.getUplink)(Object(v.selectDevicesData)(t),e)),n=Object(o.useSelector)(q.a),l=Object(r.k)(),i=Object(o.useDispatch)(),E=Object(v.getUplinkDisplayName)(e,a);return E?c.a.createElement(Z,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:e=>{e.preventDefault(),e.stopPropagation(),l.push(`/${n}/devices/properties/${a.mac}`),i(Object(_.g)({type:C.b.DEVICE,mac:a.mac}))}},t),E):null};const Q=Object(l.c)(b.a)`
  margin-bottom: 4px;
  justify-content: space-between;
`;var ee=()=>{const e=Object(o.useSelector)(v.selectAvailableUlteDevice);return c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(Q,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_LTE_BACKUP"})),c.a.createElement(X.b,{device:e})),c.a.createElement(Q,null,c.a.createElement(u.a,{color:"secondary",size:"caption"},c.a.createElement(O.c,{id:"COMMON_UPLINK"})),c.a.createElement(J,{device:e})))};const te=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var ae=({activeItem:e})=>{const t=Object(o.useSelector)(W.d);return c.a.createElement(te,{variant:"tertiary",items:[{id:"overview",label:c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(K,{activeItem:e})},...t?[{id:"wanFailover",label:c.a.createElement(O.c,{id:"DASHBOARD_ISP_ACCORDION_TITLE_WAN_FAILOVER"}),renderContent:()=>c.a.createElement(ee,null)}]:[]],multiOpen:!0})},ne=a(1972),ce=a(261),re=a(95),le=a(1957);const ie=Object(l.c)("div")`
  padding: 28px 30px;

  table {
    th {
      text-transform: none;
      font-size: ${({theme:e})=>e.fontSizes[1]}px;
    }
  }
`,oe=Object(l.c)(H.a)`
  color: ${({theme:e})=>e.motifPalette.uBlue06};
`,Ee=Object(l.c)(H.a)`
  color: ${({theme:e})=>e.motifPalette.purple06};
`,se=Object(l.c)(p.eb)`
  margin-right: 3px;
  color: ${({theme:e})=>e.motifPalette.text03};
`,me=Object(l.c)(p.fb)`
  margin-right: 3px;
  color: ${({theme:e})=>e.motifPalette.text03};
`,de=Object(l.c)(u.a)`
  color: inherit;
`,_e=Object(l.c)("div")`
  margin: 20px 0;
`,ue=[{id:"time",label:c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_HEADER_TIME"}),renderCell:({time:e})=>c.a.createElement(le.a,{date:new Date(e)})},{id:"xput_download",maxWidth:100,renderLabel:()=>c.a.createElement(re.g,{alignItems:"center"},c.a.createElement(se,{width:9,height:11}),c.a.createElement(de,{weight:"bold"},c.a.createElement(O.c,{id:"COMMON_STATUS_DOWNLOAD"}))),renderCell:({xput_download:e})=>c.a.createElement(oe,{type:"bytes",options:"bitrate",input:1e6*e/8})},{id:"xput_upload",maxWidth:100,renderLabel:()=>c.a.createElement(re.g,{alignItems:"center"},c.a.createElement(me,{width:9,height:11}),c.a.createElement(de,{weight:"bold"},c.a.createElement(O.c,{id:"COMMON_STATUS_UPLOAD"}))),renderCell:({xput_upload:e})=>c.a.createElement(Ee,{type:"bytes",options:"bitrate",input:1e6*e/8})}];var pe=({activeItem:e})=>{const t=Object(o.useDispatch)(),a=Object(o.useSelector)(ce.selectSpeedTestReportData);return Object(n.useEffect)(()=>{t(Object(ce.fetchSpeedTestReport)())},[e.mac,t]),c.a.createElement(ie,null,c.a.createElement(ne.a,{idField:"_id",hideCellOverflow:!1,columns:ue,disableColumnFilters:!0,items:a,renderFooter:()=>a.length>0?c.a.createElement(_e,null,c.a.createElement(O.c,{id:"COMMON_TABLE_FOOTER",values:{length:a.length}})):c.a.createElement(O.c,{id:"DASHBOARD_ISP_PROPERTY_TABLE_NO_SPEED_TESTS"})}))},Oe=a(41),be=a(824),Ie=a(146),ge=a(2004);const Re={width:25,height:25},Ce=Object(l.c)(b.a)`
  margin-top: 10px;
  ${({bordered:e})=>e&&`box-shadow: 0px 24px 2px -24px ${Oe.a["white-8"]};`}
`,Te=Object(l.c)("div")`
  display: block;
  position: absolute;
  border-bottom: ${({theme:e,wired:t})=>`2px ${t?"solid":"dotted"} ${e.motifPalette.uBlue06}`};
  width: 100%;
  top: 37px;
  left: -50%;
  z-index: 0;
  padding: 0 25px;
`,he=Object(l.c)("div")`
  position: relative;
  width: 100%;
  max-width: 70px;
`,ve=Object(l.c)(b.a)`
  height: 100px;
  > * {
    &:not(:last-child) {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
    }
  }
`,De=Object(l.c)(b.a)`
  width: 70px;
  min-height: ${Re.height}px;
  height: ${Re.height}px;
  position: relative;
  z-index: 1;
`,fe=Object(l.c)(u.a)`
  width: 70px;
`,Pe=Object(l.c)(p.y)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]};
`,Se=Object(l.c)(b.a)`
  > * {
    color: ${Oe.a["grey-2"]};
  }
`,Ae=Object(l.c)(b.a)`
  overflow: auto hidden;
  padding-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
  padding: 20px 0 20px 20px;
`,je=Object(l.c)(G.a)`
  border: 2px solid ${({theme:e})=>e.motifPalette.uBlue06};
  background: ${({theme:e})=>e.colors.navBackground};
  border-radius: 50%;
  color: ${({theme:e})=>e.motifPalette.uBlue06};
  font-weight: bold;
  width: 36px;
  z-index: 999;
  :hover {
    color: ${({theme:e})=>e.motifPalette.uBlue06};
    background-color: ${({theme:e})=>e.motifPalette.uBlue01};
  }
`,Ne=e=>{const{isInternet:t,isClient:a,client_wifi_experience:n,number_of_clients:r,wireless_uplink:l=!1,expandButton:i,devicesCount:o,onClick:E}=e,s=!!t||!a&&!l;return c.a.createElement(he,null,!t&&c.a.createElement(Te,{wired:s}),c.a.createElement(ve,{flexDirection:"column",alignItems:"center",justifyContent:"center"},t||a||!r?c.a.createElement(b.a,{flex:"1"}):c.a.createElement(Se,{flex:"1",alignItems:"center",justifyContent:"space-between"},c.a.createElement(Pe,null),c.a.createElement(u.a,null,r)),!i&&c.a.createElement(De,{flex:"1",alignItems:"center",justifyContent:"center"},(e=>{const{isInternet:t,isClient:a,model:n}=e;return t?c.a.createElement(p.L,{size:"large"}):a?c.a.createElement(T.a,Object.assign({data:e},Re)):c.a.createElement(ge.a,{model:n,name:n})})(e)),i&&E&&o&&c.a.createElement(je,{iconSize:"logo",onClick:E},o),c.a.createElement(b.a,{flex:"1",alignItems:"center",justifyContent:"center"},c.a.createElement(fe,{centered:!0,truncate:!0},(e=>{var t;const{isInternet:a,isClient:n,client_model:r,client_name:l,model:i}=e;return a?c.a.createElement(O.c,{id:"COMMON_WORD_INTERNET"}):n?r||l:(null===(t=Ie.deviceModels[i])||void 0===t?void 0:t.name)||i})(e))),c.a.createElement(b.a,{flex:"1",alignItems:"center",justifyContent:"center"},a&&c.a.createElement(u.a,{style:{color:be.a.getGradientColor(n/100)}},n,"%"))))};var ye=({item:e,variant:t})=>{const[a,r]=Object(n.useState)(!1),{uplink_devices:l=[],report_timestamp:i,...o}=e,E=[...l].reverse(),s=E[0],m=E[(null==E?void 0:E.length)-1],d=E.slice(1,(null==E?void 0:E.length)-1),_=Object(n.useCallback)(()=>{r(!a)},[a]),u=a?E.map(e=>c.a.createElement(Ne,Object.assign({key:e.mac},e))):c.a.createElement(c.a.Fragment,null,c.a.createElement(Ne,Object.assign({key:s.mac},s)),d.length>1?c.a.createElement(Ne,{expandButton:!0,onClick:_,devicesCount:(null==E?void 0:E.length)-2}):d.map(e=>c.a.createElement(Ne,Object.assign({key:e.mac},e))),(null==E?void 0:E.length)>1&&c.a.createElement(Ne,Object.assign({key:m.mac},m)));return c.a.createElement(Ce,{flexDirection:"column",flex:"0 0 auto",bordered:"secondary"===t},c.a.createElement(Ae,null,c.a.createElement(Ne,{isInternet:!0}),u,c.a.createElement(Ne,Object.assign({isClient:!0},o))))},Le=a(1976),xe=a(1977),Ve=a(2005),we=a(292),Fe=a(801),Me=a(12),Ue=a(811);var Be=({item:e})=>{const{client_signal:t,client_wifi_experience:a,device_model:r,device_name:l,speed_tests:i,wlan_band:o,wlan_channel_width:E,wlan_essid:s}=e,m=Object(n.useMemo)(()=>Object(we.c)(a),[a]),d=Object(n.useMemo)(()=>i.reduce((e,t)=>{const{test_server_name:a}=t;return a&&!e.includes(a)&&e.push(a),e},[]),[i]),_=Object(n.useMemo)(()=>(null==d?void 0:d.length)?d.join(", "):"-",[null==d?void 0:d.length]),p=Object(n.useMemo)(()=>{var e;return(null===(e=Ie.deviceModels[r])||void 0===e?void 0:e.name)||r},[r]);return c.a.createElement(re.g,{flexDirection:"column",padding:"26px 32px 0"},m&&c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_WIFI_EXP"})),c.a.createElement(H.a,{type:"percent",input:a/100,style:{color:be.a.getGradientColor(a/100)}})),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_AP_MODEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(Fe.a,{width:20,height:20,device:{model:r,type:Me.DeviceType.AP,name:p}}))),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_AP_NAME"})),c.a.createElement(u.a,{color:"secondary"},Object(Ue.a)(l))),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_SSID"})),c.a.createElement(u.a,{color:"secondary"},s)),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_SIGNAL"})),c.a.createElement(u.a,{color:"secondary"},t," ",c.a.createElement(O.c,{id:"COMMON_UNIT_DBM"}))),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_CHANNEL"})),c.a.createElement(u.a,{color:"secondary"},`${E}${o&&` (${o})`}`)),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(re.g,{justifyContent:"flex-start",alignItems:"center"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_DOWN"}))),c.a.createElement(Le.a,{item:e})),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(re.g,{justifyContent:"flex-start",alignItems:"center"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_UP"}))),c.a.createElement(xe.a,{item:e})),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_RATE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(Ve.a,{item:e}))),c.a.createElement(re.g,{width:"100%",marginBottom:8,justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"WIFI_MAN_OVERVIEW_TEST_SERVER"})),c.a.createElement(u.a,{color:"secondary"},_)))},ke=a(1975);const We=Object(l.c)("div")`
  width: 100%;
  max-height: 300px;
  margin-bottom: 25px;
  table {
    th {
      text-transform: none;
      padding-left: 0 !important;
    }
    tbody {
      tr {
        cursor: pointer;
      }
      td {
        text-align: left;
        padding: 5px 10px 5px 0px !important;
      }
    }
  }
`,He=Object(l.c)("div")`
  margin: 20px 0;
`,Ge=Object(l.c)(b.a)`
  padding-right: 12px;
`,Ye=[{id:"date",sortable:!0,minWidth:100,maxWidth:115,label:c.a.createElement(O.c,{id:"WIFI_MAN_TABLE_HEADER_DATE_TIME"}),renderCell:e=>c.a.createElement(le.a,{date:e.date,spacer:" "})},{id:"down",minWidth:70,maxWidth:80,sortable:!0,label:c.a.createElement(c.a.Fragment,null,c.a.createElement(p.eb,{width:12,height:12}),c.a.createElement(O.c,{id:"WIFI_MAN_TABLE_HEADER_DOWN"})),renderCell:e=>c.a.createElement(Le.a,{item:e})},{id:"up",sortable:!0,minWidth:70,maxWidth:80,label:c.a.createElement(c.a.Fragment,null,c.a.createElement(p.fb,{width:12,height:12}),c.a.createElement(O.c,{id:"WIFI_MAN_TABLE_HEADER_UP"})),renderCell:e=>c.a.createElement(xe.a,{item:e})},{id:"client_wifi_experience",sortable:!0,minWidth:40,maxWidth:60,label:c.a.createElement(O.c,{id:"WIFI_MAN_TABLE_HEADER_WIFI_EXP"}),renderCell:e=>c.a.createElement(H.a,{type:"percent",input:e.client_wifi_experience/100,style:{color:be.a.getGradientColor(e.client_wifi_experience/100)}})}];var $e=({item:e})=>{const{id:t,client_mac:a}=e,n=Object(o.useSelector)(ke.c).filter(e=>e.client_mac===a&&e.id!==t),l=Object(r.k)(),{pathname:i}=Object(r.l)();return c.a.createElement(We,null,c.a.createElement(ne.a,{items:n,disableColumnFilters:!0,initialSortBy:"report_timestamp",idField:"id",columns:Ye,onRowClick:({id:e})=>{l.push(`${i}/${e}`)},renderRowPopoverContent:e=>c.a.createElement(Ge,{height:"100%",alignItems:"center"},c.a.createElement(p.h,{size:"small"})),renderFooter:()=>n.length>0?c.a.createElement(He,null,c.a.createElement(O.c,{id:"WIFI_MAN_HISTORY_TABLE_FOOTER",values:{length:n.length}})):c.a.createElement(O.c,{id:"WIFI_MAN_HISTORY_TABLE_NO_HISTORY"})}))};const ze=Object(l.c)(u.a)`
  margin-right: 4px;
`,Ke=Object(l.c)("div")`
  width: 18px;
  border: 1px solid ${({theme:e})=>e.motifPalette.uBlue06};
  margin: 0 8px;
`,Xe=Object(l.c)("div")`
  width: 18px;
  margin: 0 8px;
  border: 1px dashed ${({theme:e})=>e.motifPalette.uBlue06};
`,qe=Object(l.c)(b.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 8px;
`;var Ze=({timestamp:e})=>c.a.createElement(qe,{alignItems:"center",justifyContent:"space-around"},c.a.createElement(b.a,{alignItems:"center",justifyContent:"space-around"},c.a.createElement(ze,{weight:"bold"},c.a.createElement(O.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_TEST"})),c.a.createElement(le.a,{date:new Date(1e3*e),spacer:" "})),c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Ke,null),c.a.createElement(O.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRED"}),c.a.createElement(Xe,null),c.a.createElement(O.c,{id:"WIFI_MAN_LATEST_SPEED_OVERVIEW_WIRELESS"})));const Je=Object(l.c)("div")`
  width: 100%;
  background: ${({theme:e})=>e.colors.navBackground};
`,Qe=Object(l.c)(k.a)`
  .contentClassName {
    padding: 0;
    margin: 0;
  }
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"} !important;
`;var et=function({activeItem:e,...t}){const a=[{id:"history",label:c.a.createElement(O.c,{id:"WIFI_MAN_ACCORDION_HEADER_HISTORY"}),renderContent:()=>c.a.createElement($e,Object.assign({item:e},t))}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(Je,null,c.a.createElement(ye,{item:e,variant:"primary"}),c.a.createElement(Ze,{timestamp:e.report_timestamp})),c.a.createElement(Be,{item:e}),c.a.createElement(Qe,{variant:"tertiary",items:a,contentClassName:"contentClassName",renderOnlyExpandedContent:!0}))},tt=a(16),at=a(1765),nt=a(188);const ct=Object(l.c)(b.a)`
  position: relative;
  width: 100%;
  margin: ${({theme:e})=>e.spacing["spacing-l"]} 0 ${({theme:e})=>e.spacing["spacing-xxl"]};

  button {
    padding: 0;
    position: absolute;
    left: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  }
`,rt=Object(l.c)(u.a)`
  width: 100%;
  letter-spacing: 0.55px;
  line-height: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var lt=({timestamp:e,onBack:t})=>c.a.createElement(ct,null,c.a.createElement(nt.c,{name:"backButton",onClick:t},c.a.createElement(p.g,null)),c.a.createElement(rt,{size:"body",weight:"bold",centered:!0},c.a.createElement(le.a,{date:new Date(1e3*e)})));var it=()=>{const e=Object(r.k)(),t=Object(r.n)(),a=Object(tt.a)(t,"params.subPanel"),n=Object(o.useSelector)(Object(at.selectSpecificWifiManData)(a));return a&&n?c.a.createElement(c.a.Fragment,null,c.a.createElement(lt,{timestamp:n.report_timestamp,onBack:()=>e.push("../history")}),c.a.createElement(ye,{item:n,variant:"secondary"}),c.a.createElement(Be,{item:n})):null},ot=a(2027),Et=a(2069),st=a(39),mt=a(814),dt=a(359),_t=a(91),ut=a(21),pt=a(145),Ot=a(18);const bt=Object(l.c)(b.a)`
  padding: ${({theme:e})=>e.space[5]+"px"} ${({theme:e})=>e.space[5]+"px"} 0 !important;
  flex-shrink: 0;
`,It=Object(l.c)("div")`
  flex: 1;
`,gt=Object(l.c)("div")`
  vertical-align: top;
  flex: 1;
`,Rt=Object(l.c)("span")`
  padding-left: 12px;
  padding-bottom: 8px;
  vertical-align: top;
`,Ct=l.a`
  padding: 3px 0;
  margin: 0;
  height: auto;
  font-size: 12px;
  display: inline-block;
`;const Tt={showReportClientIcon:mt.g,resetDeviceIcon:dt.c,createToast:ut.c,fetchFingerprintDeviceMapById:_t.f};var ht=Object(st.compose)(Object(o.connect)((e,{activeItem:t})=>({clientFingerprint:Object(h.selectClientFingerprint)(e,t),fingerprintSourceId:Object(h.getFingerprintSourceId)(t)}),Tt),Object(pt.c)(({fingerprintSourceId:e,fetchFingerprintDeviceMapById:t})=>e&&t(e)))((function({activeItem:e,showReportClientIcon:t,resetDeviceIcon:a,createToast:n,clientFingerprint:r}){const{hostname:l,mac:i,name:E,oui:s}=e,{vendor:m,type:d,os:_,device_name:p}=r,I=Object(h.isFingerprintIncorrect)(e),R=Object(h.hasFingerprintFromLibrary)(e),C=Object(h.isFingerPrintFromUiDb)(e),T=Object(o.useDispatch)(),v=Object(o.useSelector)(q.a);return c.a.createElement(bt,null,c.a.createElement(b.a,{maxWidth:"33%",paddingRight:"16px",paddingBottom:"40px",alignItems:"center",justifyContent:"center"},c.a.createElement(g.a,{client:e,alt:E,grid:!0})),c.a.createElement(It,null,d&&c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_HEADER_MODEL"}))),c.a.createElement(Rt,null,c.a.createElement(u.a,{color:"secondary"},p))),l&&c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_HEADER_HOSTNAME"}))),c.a.createElement(Rt,null,c.a.createElement(u.a,{color:"secondary"},l))),c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_HEADER_MAC"}))),c.a.createElement(Rt,null,c.a.createElement(u.a,{color:"secondary"},i))),(m||s)&&c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_HEADER_MANUFACTURER"}))),c.a.createElement(Rt,null,c.a.createElement(u.a,{color:"secondary"},m||s))),_&&c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_HEADER_OS"}))),c.a.createElement(Rt,null,c.a.createElement(u.a,{color:"secondary"},_))),!I&&!C&&c.a.createElement(b.a,null,c.a.createElement(gt,null),c.a.createElement(u.a,{color:"secondary"}),c.a.createElement(Rt,null,c.a.createElement(G.a,{variant:"link",className:Ct,onClick:()=>{t(i)}},c.a.createElement(O.c,{id:R?"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_WRONG":"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REPORT_MISSING"})))),I&&c.a.createElement(b.a,null,c.a.createElement(gt,null,c.a.createElement(u.a,{color:"secondary"})),c.a.createElement(Rt,null,c.a.createElement(G.a,{variant:"link",className:Ct,onClick:()=>{const t=Object(h.getClientDisplayName)(e);a(i,v).then(()=>{let a=h.ClientType.ACTIVE;(null==e?void 0:e.blocked)?a=h.ClientType.BLOCKED:(null==e?void 0:e.uptime)||(a=h.ClientType.OFFLINE),T(Object(h.updateClientDataInStore)(i,{dev_id_override:void 0,dev_vendor_override:void 0,fingerprint_override:!1},a)),n({icon:Ot.a.success,message:"REPORT_CLIENT_FINGERPRINT_REVERT_SUCCESS",values:{clientName:t}})}).catch(()=>{n({icon:Ot.a.danger,message:"REPORT_CLIENT_FINGERPRINT_REVERT_ERROR",values:{clientName:t}})})}},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_VALUES_FINGERPRINT_ACTION_REVERT"}))))))})),vt=a(1199),Dt=a(2368),ft=a(78),Pt=a(2);const St="/api/s/{site}/stat/stadpi",At=(e,t)=>Object(Pt.q)("stadpi",St,"stadpi",e,{...t,idField:"mac"});var jt=a(44),Nt=a(2854);const yt=Ie.dpi.ruleMap,Lt=e=>{const t=(a=e,yt.applications[a]);var a;return t?t.name:void 0};var xt=a(669),Vt=a(2911),wt=a(1862);const Ft=(e,t,a)=>(t&&t.constructor===Object&&Object.keys(t).forEach(n=>{void 0===e[n]||a&&a.includes(n)?e[n]=t[n]:Number.isFinite(e[n])?e[n]=(e[n]||0)+t[n]:Array.isArray(e[n])?e[n]=e[n].concat(t[n]):e[n]&&e[n].constructor===Object&&Ft(e[n],t[n])}),e),Mt=(e,t)=>Object(xt.a)(e).reduce((e,a)=>e?Ft(e,a,t):a,void 0);class Ut{constructor(e){this.data=e}dedeuplicatedBy(e,t){return this.data=((e,t,a)=>Object(Vt.a)(Object(wt.a)(e,t)).map(e=>Mt(e,a)))(this.data,e,t),this}sortedBy(e,t){return this.data.sort((a,n)=>{const c=a[e]-n[e];return t?-c:c}),this}withLimit(e,t){let a=e;return this.data.length>=a&&(a-=1,this.other=Mt(this.data.slice(a),t),this.other.generated=!0),this.data=this.data.splice(0,a),this}countTotal(e){const t=this.other?[...this.data,this.other]:this.data;return this.total=Mt(t,e)||{},this}withMap(e,t){return this.mapFunction=a=>{const n=t?a:{};return Object.keys(e).forEach(t=>{n[t]=e[t](a)}),n},this}withOtherDefaults(e){return this.other={...this.other,...e},this}getData(e=!1){let t;return t=this.other.generated?[...this.data,this.other].map(this.mapFunction):this.data.map(this.mapFunction),t=t.map((t,a)=>({index:a,...e?{id:a.toString()}:[],...t})),{data:t,total:this.total}}}const Bt=Object(jt.a)(e=>{if(0===e.length)return{data:[],total:{}};const t=e.map(e=>{return{label:Lt((t=e.cat,a=e.app,+a+(+t<<16)))||c.a.createElement(O.c,{id:"CLIENT_PROPERTY_DPI_UNKNOWN_LABEL"}),packets:e.rx_packets+e.tx_packets,bytes:e.rx_bytes+e.tx_bytes,...e};var t,a}),a={bytesParsed:e=>Object(ft.c)(e.bytes),pkts:e=>Object(Nt.a)(e.packets,{spacer:" "})};return new Ut(t).dedeuplicatedBy("label").sortedBy("bytes",!0).withLimit(8).countTotal().withMap(a,!0).withOtherDefaults({label:c.a.createElement(O.c,{id:"CLIENT_PROPERTY_DPI_OTHER"})}).getData(!0)}),kt=(e,t,a)=>{const n=((e,t,a)=>{var n;const c=Object(Pt.t)(At(t,a),e.models);return(null===(n=null==c?void 0:c.data)||void 0===n?void 0:n.by_app)||[]})(e,t,a);return Bt(n)},Wt=[{id:"labelInfo",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_NAME"}),renderCell:({label:e,index:t})=>c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Yt,{index:t}),e),growthFactor:3,minWidth:169},{id:"bytesParsed",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_BYTES"}),growthFactor:1,minWidth:77},{id:"pkts",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_PACKETS"}),growthFactor:1,minWidth:77}],Ht=be.a.getDiscreteColorScaler(8),Gt=Object(l.c)(b.a)`
  width: 100%;
  margin-top: 30px;
`,Yt=Object(l.c)(vt.a,{shouldForwardProp:e=>"index"!==e})`
  background-color: ${({index:e})=>Ht(e)} !important;
  margin-right: 8px;
`,$t=Object(l.c)(b.a)`
  padding: 10px ${({contentPaddingX:e=30})=>e}px 30px;
  font-size: 24px;

  table {
    color: ${({theme:e})=>e.motifPalette.text02};

    th,
    td {
      text-transform: none;
      padding-left: 0;
      padding-right: 20px;
    }
  }
`,zt=Object(l.c)("div")`
  padding-top: 10px;
`,Kt=Object(l.c)(b.a)`
  padding: 30px;
`,Xt=Object(l.c)(p.cb)`
  margin-right: ${({theme:e})=>e.spacing["spacing-l"]};
  color: ${({theme:e})=>e.motifPalette.icon01};
`;var qt=Object(O.f)(({contentPaddingX:e,intl:t,mac:a})=>{const r={data:{macs:[a],type:"by_app"}},l={method:"post",crudCacheStrategy:{interval:3e4,type:Pt.a.COMBINED}},{data:i,total:E}=Object(o.useSelector)(e=>kt(e,r,l)),s=Object(o.useDispatch)();Object(n.useEffect)(()=>(a&&s(At(r,l)),()=>s(Object(Pt.c)(At(r,l)))),[a]);const[m,d]=Object(ft.c)(E.rx_bytes).split(" "),[_,u]=Object(ft.c)(E.tx_bytes).split(" "),p=i.map(({id:e,index:t,rx_bytes:a})=>({id:e,value:a,color:Ht(t)})),b=i.map(({id:e,index:t,tx_bytes:a})=>({id:e,value:a,color:Ht(t)}));return c.a.createElement(c.a.Fragment,null,i.length?c.a.createElement(c.a.Fragment,null,m&&_&&c.a.createElement(Gt,{alignItems:"center",justifyContent:"space-around"},c.a.createElement(Dt.a,{items:p,title:m,description:`${d} ${t.formatMessage({id:"CLIENT_PROPERTY_TRAFFIC_TAB_DOWN"})}`}),c.a.createElement(Dt.a,{items:b,title:_,description:`${u} ${t.formatMessage({id:"CLIENT_PROPERTY_TRAFFIC_TAB_UP"})}`})),c.a.createElement($t,{contentPaddingX:e,justifyContent:"flex-start",alignItems:"center"},c.a.createElement(ne.a,{items:i,disableColumnFilters:!0,renderFooter:()=>i.length>0&&c.a.createElement(zt,null,c.a.createElement(O.c,{id:"CLIENT_PROPERTY_FOOTER_RECORDS",values:{length:i.length}})),columns:Wt,rowHeight:30,disableTextPointer:!0,disableSelection:!0}))):c.a.createElement(Kt,{alignItems:"center",justifyContent:"center"},c.a.createElement(Xt,null),c.a.createElement(O.c,{id:"CLIENT_PROPERTY_TRAFFIC_TAB_EMPTY"})))});const Zt=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`,Jt=Object(l.c)("div")`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-between;
`;function Qt({activeItem:e}){const{rx_bytes:t,rx_packets:a,tx_bytes:n,tx_packets:r,activity:l,activityDown:i,activityUp:o,is_wired:E}=e,s=E?e["wired-tx_packets"]:r,m=E?e["wired-rx_packets"]:a;return c.a.createElement(Zt,null,c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_INTERNET"})),c.a.createElement(H.a,{type:"bytes",input:l,options:"bitrate",color:"secondary"})),!!s&&c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_DOWN_PKTS_BYTES_INTERNET"})),c.a.createElement(u.a,{color:"secondary"},s?s.toLocaleString():null," / ",c.a.createElement(H.a,{type:"bytes",input:i,color:"secondary"}))),!!m&&!!o&&c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_UP_PKTS_BYTES_INTERNET"})),c.a.createElement(u.a,{color:"secondary"},m?m.toLocaleString():null," / ",c.a.createElement(H.a,{type:"bytes",input:o,color:"secondary"}))),c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_NETWORK"})),c.a.createElement(H.a,{type:"bytes",input:e["bytes-r"]||0,options:"bitrate",color:"secondary"})),c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_DOWN_PKTS_BYTES_NETWORK"})),c.a.createElement(u.a,{color:"secondary"},r?r.toLocaleString():null," / ",c.a.createElement(H.a,{type:"bytes",input:n,color:"secondary"}))),c.a.createElement(Jt,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"CLIENT_PROPERTIES_LABEL_ACTIVITY_UP_PKTS_BYTES_NETWORK"})),c.a.createElement(u.a,{color:"secondary"},a?a.toLocaleString():null," / ",c.a.createElement(H.a,{type:"bytes",input:t,color:"secondary"}))))}const ea=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"} !important;
`,ta=l.a`
  padding: 0;
  margin: 0;
`;var aa=({activeItem:e,...t})=>{const{connected:a,is_wired:n,experienceKnown:r,uptime:l}=e,i=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(Et.a,Object.assign({activeItem:e},t))},...a?[{id:"statistics",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_STATISTICS"}),renderContent:()=>c.a.createElement(Qt,{activeItem:e})}]:[],{id:"dpi",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_TRAFFIC_ID"}),renderContent:()=>c.a.createElement(qt,Object.assign({mac:null==e?void 0:e.mac,contentPaddingX:0},t,{key:null==e?void 0:e.mac}))}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ht,{activeItem:e}),l&&c.a.createElement(ot.a,{item:e,headerTitle:n?"CLIENT_HEADER_WIRED_EXPERIENCE":"CLIENT_HEADER_WIFI_EXPERIENCE",showGraph:r&&a,itemType:"client",canReport:!0}),c.a.createElement(ea,{variant:"tertiary",items:i,contentClassName:ta,renderOnlyExpandedContent:!0}))};const na=e=>Object(tt.a)(e,"shared.propertypanel.tabGetDataFunction",{}),ca=e=>Object(tt.a)(e,"shared.propertypanel.tabSubmitFunction",{}),ra=e=>Object(tt.a)(e,"shared.propertypanel.tabResetFunction",{});var la=function(e){return function(t){return class extends c.a.Component{constructor(){super(...arguments),this.state=e.reduce((e,t)=>({...e,dirty:{...e.dirty,[t]:!1},invalid:{...e.invalid,[t]:!1}}),{dirty:{},invalid:{}}),this.setFormDirty=(e,t)=>{const{dirty:a}=this.state;a[e]!==t&&this.setState({dirty:{...a,[e]:t}})},this.setFormInvalid=(e,t)=>{const{invalid:a}=this.state;a[e]!==t&&this.setState({invalid:{...a,[e]:t}})}}render(){const{dirty:e,invalid:a}=this.state,n=!!Object.values(e).find(e=>e),r=!!Object.values(a).find(e=>e);return c.a.createElement(t,Object.assign({isDirty:n,isInvalid:r,formStates:e,setFormDirty:this.setFormDirty,setFormInvalid:this.setFormInvalid},this.props))}}}},ia=a(45),oa=a(148),Ea=a(30),sa=a(211),ma=a(388),da=a(126),_a=a(47);const ua=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,pa=Object(l.c)(da.a)`
  margin-top: 20px;
`,Oa=Object(l.c)("div")`
  margin-top: 15px;
  display: flex;
`,ba=l.a`
  margin-left: 10px;
`,Ia=l.a`
  display: none;
`;class ga extends n.PureComponent{componentDidMount(){const{handleSubmit:e,tabSubmitFunction:t,tabResetFunction:a,fetchUserGroups:n,resetForm:c}=this.props;n(),t({details:e}),a({details:c})}componentDidUpdate(){const{dirty:e,setFormDirty:t}=this.props;t("details",e)}render(){const{userGroups:e,values:{usergroup_id:t},intl:a}=this.props,n=[{label:a.formatMessage({id:"CLIENT_MODAL_INPUT_BANDWIDTH_PROFILE_DEFAULT"}),value:""},...e];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ua,{marginBottom:10},c.a.createElement(da.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_NAME",validationMessageClassName:Ia,name:"name",full:!0})),c.a.createElement(ua,{marginBottom:5},c.a.createElement(da.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_NOTE",name:"note",full:!0})),c.a.createElement(ua,null,c.a.createElement(pa,{label:a.formatMessage({id:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_BANDWIDTH_PROFILE"}),name:"usergroup_id",type:"dropdown",full:!0,validated:!0,options:n})),t&&c.a.createElement(Oa,null,c.a.createElement(ma.InfoSecondaryIcon,null),c.a.createElement(_a.a,{message:"CLIENT_PROPERTY_GENERAL_TAB_GROUP_NOTE",className:ba})))}}const Ra=Object(ia.g)({mapPropsToValues:({hostname:e,name:t,note:a,usergroup_id:n})=>({name:e===t?"":t,note:a||"",usergroup_id:n||""}),validationSchema:Ea.a.object().shape({name:Ea.a.string(),note:Ea.a.string(),usergroup_id:Ea.a.string()}),handleSubmit:(e,{props:{id:t,mac:a,createToast:n,updateClient:c},setSubmitting:r,resetForm:l})=>{c(e,a,t).then(t=>{t.data&&n({icon:Ot.a.success,message:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS_SUCCESS_MESSAGE"}),l({values:e})}).catch(e=>{n({icon:Ot.a.danger,message:oa.a[null==e?void 0:e.apiMsg]||(null==e?void 0:e.msg)}),l()}).finally(()=>{r(!1)})}}),Ca={createToast:ut.c,updateClient:h.updateClient,fetchUserGroups:sa.fetchUserGroups,tabSubmitFunction:_.j,tabResetFunction:_.i};var Ta=Object(st.compose)(Object(o.connect)(e=>({userGroups:Object(sa.selectUserGroupOptions)(e)}),Ca),O.f,Ra)(ga),ha=a(233),va=a(28),Da=a(466),fa=a(1197);const Pa=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }

  > * {
    vertical-align: middle;
  }
`,Sa=Object(l.c)("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
`,Aa=Object(l.c)("label")`
  cursor: pointer;
  color: ${({theme:e})=>e.motifPalette.text02};
`;class ja extends n.PureComponent{componentDidMount(){const{fetchNetworks:e,tabResetFunction:t,tabSubmitFunction:a,resetForm:n,handleSubmit:c}=this.props;e(),a({network:c}),t({network:n})}componentDidUpdate(){const{dirty:e,setFormDirty:t}=this.props;t("network",e)}render(){const{canAssignFixedIp:e,isDeviceGateway:t,values:a,networkData:n,theme:{colors:{subtleText:r}},intl:l}=this.props,i=!e;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Pa,{marginBottom:20},c.a.createElement(Sa,null,c.a.createElement("div",null,c.a.createElement(Aa,{htmlFor:"use_fixedip",color:r},c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_USE_FIXED_IP"})),c.a.createElement(fa.a,{message:c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_FIXED_IP_TOOLTIP"}),width:200,className:"ml-2",position:"bottom",style:{display:"inline-block"}},c.a.createElement(ma.InfoSecondaryIcon,{hidden:t,width:20,height:20}))),c.a.createElement(da.a,{type:"checkbox",id:"use_fixedip",name:"use_fixedip",disabled:i}))),a.use_fixedip&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Pa,{marginBottom:25},c.a.createElement(da.a,{type:"dropdown",full:!0,validated:!0,name:"network_id",label:l.formatMessage({id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_NETWORK"}),options:n})),c.a.createElement(Pa,null,c.a.createElement(da.a,{label:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS",name:"fixed_ip"}))))}}var Na=a(88),ya=a(98);const La=Object(ia.g)({mapPropsToValues:({defaultNetworkDataId:e,ip:t,fixed_ip:a,use_fixedip:n,network_id:c,clients:r})=>({use_fixedip:!!n,network_id:c||e,fixed_ip:a||t,clients:r}),validationSchema:({networkData:e,id:t})=>Na.a.lazy(({network_id:a,fixed_ip:n,clients:r})=>{const l=e&&e.find(e=>e.value===a),i=l&&l.ipSubnet;return Na.a.object().shape({use_fixedip:Na.a.bool(),network_id:Na.a.string(),fixed_ip:Na.a.string().when("use_fixedip",{is:!0,then:Na.a.string().label("CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS").matches(ya.h,c.a.createElement(O.c,{id:"COMMON_VALIDATION_VALID_IPV4"})).unifiIpv4InSubnet(i,c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_VALIDATION",values:{value:n,subnet:i}})).test("isFixedIPUnique",c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_INPUT_IP_ADDRESS_UNIQUE"}),e=>!e||r.filter(({_id:e})=>e!==t).every(t=>e!==t.fixed_ip)).required()})})}),handleSubmit:(e,{props:{id:t,mac:a,createToast:n,updateClient:c},setSubmitting:r,resetForm:l})=>{c(e.use_fixedip?{...e}:{use_fixedip:!1},a,t).then(t=>{t.data&&n({icon:Ot.a.success,message:"CLIENT_PROPERTY_GENERAL_TAB_NETWORK_SUCCESS_MESSAGE"}),l({values:e})}).catch(e=>{n({icon:Ot.a.danger,message:oa.a[null==e?void 0:e.apiMsg]||(null==e?void 0:e.msg)}),l()}).finally(()=>{r(!1)})}}),xa={createToast:ut.c,fetchNetworks:va.fetchNetworks,updateClient:h.updateClient,tabSubmitFunction:_.j,tabResetFunction:_.i};var Va=Object(st.compose)(ha.b,Object(o.connect)(e=>({networkData:Object(Da.i)(e),defaultNetworkDataId:Object(Da.g)(e),isDeviceGateway:Object(Da.h)(e),canAssignFixedIp:Object(Da.b)(e),clients:Object(h.selectClientsData)(e)}),xa),O.f,La)(ja);const wa=Object(l.c)("footer",{shouldForwardProp:e=>"hasFormResetButton"!==e})`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: flex;
  justify-content: ${({hasFormResetButton:e})=>e?"space-between":"flex-end"};
  padding: 30px;
`,Fa=Object(l.c)(nt.c)`
  font-weight: normal;
`;var Ma=({allowCancel:e,isDirty:t,isInvalid:a,onFormSubmit:n,onFormReset:r,onFormCancel:l,className:i,submitButtonText:o})=>c.a.createElement(wa,{className:i,hasFormResetButton:!!r},c.a.createElement(Fa,{name:"cancel",type:"button",onClick:l,disabled:!e&&!t},c.a.createElement(_a.a,{message:"COMMON_ACTION_CANCEL"})),r&&c.a.createElement(Fa,{name:"reset",variant:"primary",type:"button",pill:!1,onClick:r,disabled:!t},c.a.createElement(_a.a,{message:"COMMON_ACTION_RESET_TO_DEFAULTS"})),c.a.createElement(Fa,{name:"submit",variant:"primary",type:"submit",pill:!1,onClick:n,disabled:!t||a},c.a.createElement(_a.a,{message:o||"COMMON_ACTION_APPLY_CHANGES"})));const Ua=Object(l.c)(b.a)`
  width: 100%;
  padding: 30px;
`,Ba=l.a`
  padding: 0 0 40px;
  min-height: 90px;
  margin: 0;
`;var ka=c.a.memo(la(["details","networks"])(e=>{const{activeItem:t,isDirty:a,setFormDirty:n,formStates:r}=e,l=Object(o.useSelector)(ca),i=Object(o.useSelector)(ra),{hostname:E,name:s,note:m,usergroup_id:d,_id:_,mac:u,ip:p,fixed_ip:b,use_fixedip:I,network_id:g}=t;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ua,{alignItems:"center",flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",renderOnlyExpandedContent:!0,contentClassName:Ba,items:[{id:"details",openByDefault:!0,label:c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_DETAILS"}),renderContent:()=>c.a.createElement(Ta,{id:_,mac:u,hostname:E,name:s,note:m,usergroup_id:d,setFormDirty:n})},{id:"network",label:c.a.createElement(O.c,{id:"CLIENT_PROPERTY_GENERAL_TAB_NETWORK"}),renderContent:()=>c.a.createElement(Va,{id:_,mac:u,ip:p,fixed_ip:b,use_fixedip:I,network_id:g,setFormDirty:n})}]})),c.a.createElement(Ma,{isDirty:a,onFormSubmit:()=>{r.details&&l.details(),r.network&&l.network()},onFormCancel:()=>{i.details(),i.network()}}))}));const Wa=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
  white-space: nowrap;
`;var Ha=({device:e})=>{const{locating:t}=e,a=Object(o.useDispatch)(),n=Object(v.getDeviceState)(e);return c.a.createElement(Wa,{size:"small",variant:"link",onClick:t=>{if(t.preventDefault(),t.stopPropagation(),Object(v.isUBB)(e)){const{peer_ubb:t}=e;t&&a(Object(v.locateDevice)(t))}a(Object(v.locateDevice)(e))},disabled:n!==v.DeviceState.CONNECTED},c.a.createElement(O.c,{id:t?"DEVICE_ACTIONS_LOCATE_STOP":"DEVICE_ACTIONS_LOCATE_DEVICE"}))},Ga=a(13),Ya=a(20),$a=a(296);const za=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var Ka=({device:e})=>{const t=Object(v.getDeviceState)(e),a=Object(o.useSelector)(Ga.A)("API_DEVICE_RESTART"),n=Object(o.useDispatch)();return a&&c.a.createElement(za,{variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation();const a=Object(v.isSwitch)(e)&&Object($a.isPoeSupported)(e),c=a||Object(v.isGateway)(e),r=!e.bypassConfirmRestart;n(c||r?Object(v.confirmDeviceRestart)({name:e.name||e.mac,withHardReboot:a,onConfirm:(t="soft")=>{n(Object(v.restartDevice)(e,t))},onCancel:()=>{n(Object(Ya.e)())}}):Object(v.restartDevice)(e))},disabled:t!==v.DeviceState.CONNECTED},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_RESTART"}))};const Xa=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var qa=({device:e})=>{const t=Object(v.getDeviceState)(e),a=Object(o.useDispatch)();return c.a.createElement(Xa,{variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation(),a(Object(v.confirmDeviceProvision)({name:e.name||e.mac,onConfirm:()=>{a(Object(v.forceProvisionDevice)(e))},onCancel:()=>{a(Object(Ya.e)())}}))},loader:t===v.DeviceState.PROVISIONING?"spinner":null},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_PROVISION"}))},Za=a(395);const Ja=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var Qa=Object(r.o)(({device:e,history:t,location:a})=>{const r=Object(o.useDispatch)(),[l,i]=Object(n.useState)(!1),E=Object(n.useCallback)(n=>{n.preventDefault(),n.stopPropagation(),r(Object(v.confirmDeviceForget)({name:e.name||e.mac,onConfirm:async()=>{i(!0);try{await r(Object(Za.c)(e.mac)),r(Object(v.deleteDeviceFromStore)(e.mac)),i(!1),r(Object(_.f)()),t.push(a.pathname.split("/properties")[0])}catch(n){i(!1)}},onCancel:()=>{r(Object(Ya.e)()),i(!1)}}))},[e.mac,e.name,r,t,a.pathname]);return c.a.createElement(Ja,{variant:"link",onClick:E,loader:l?"spinner":null},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"}))});const en=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var tn=({device:e})=>{const t=Object(o.useDispatch)(),[a,r]=Object(n.useState)(!1);return c.a.createElement(en,{variant:"link",onClick:async()=>{r(!0),await t(Object(v.openDeviceDebugTerminal)({device:e})),r(!1)},disabled:a},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DEBUG"}))};const an=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var nn=({device:e})=>{const t=Object(o.useDispatch)();return c.a.createElement(an,{size:"small",variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(v.downloadDeviceInfo)(e))}},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO"}))},cn=a(464),rn=a(65),ln=a(238),on=a(99);const En=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`,sn=Object(l.c)("div")`
  margin-top: ${({theme:e})=>e.space[4]}px;
  line-height: 1.5;
`,mn=Object(l.c)(I.b)`
  width: auto !important;
  padding: 0 8px;
`,dn=l.a`
  button {
    border-radius: 0;
    font-size: 12px;
  }
`;var _n=Object(O.f)(({device:e,showOnlyIfInactive:t,intl:a})=>{const{mac:r,name:l,adopted:i}=e,E=Object(o.useDispatch)(),[s,m]=Object(n.useState)(!1),d=Object(o.useSelector)(rn.selectEnv),u=Object(o.useSelector)(ln.a),p=Object(on.a)(d),b=Object(v.isUlte)(e),I=Object(v.isDeactivatedForNonPayment)(e),g=Object(v.getDeviceState)(e),R=b&&(!t||[v.DeviceState.UNKNOWN,v.DeviceState.FIRMWARE_MISMATCH,v.DeviceState.ADOPTION_FAILED,v.DeviceState.DISCONNECTED].includes(g)),C=Object(n.useCallback)(async()=>{try{await E(Object(Za.c)(r,{successToast:{icon:Ot.a.success,message:"DEVICE_ULTE_REMOVED_SUCCESS"}})),E(Object(v.deleteDeviceFromStore)(r)),E(Object(_.f)()),I||setTimeout(()=>{E(Object(ut.c)({duration:0,type:Ot.a.warning,title:a.formatMessage({id:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_TITLE"}),message:"ON_LOAD_WARNING_SUBSCRIPTION_NEEDS_ATTENTION_BODY",icon:c.a.createElement(mn,{deviceType:Me.DeviceType.AP,deviceModel:Me.DeviceModel.ULTE,publicImagePath:u,filesMap:"SETUP"}),showStatusBall:!0,primaryButton:{label:a.formatMessage({id:"ON_LOAD_WARNING_PAYMENT_ACTION_CANCEL_SUBSCRIPTIONS"}),onClick:()=>window.open(`https://${p}/subscriptions`,"_blank")},className:dn},"LTE_SUBSCRIPTION_NEEDS_ATTENTION"))},10),E(Object(Ya.e)())}catch(e){m(!1)}},[r,I]),T=Object(n.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),m(!0);const t={name:l&&l!==r?l:a.formatMessage({id:"DEVICE_TYPE_ULTE"})};I?C():E(Object(cn.a)({title:"DEVICE_ULTE_REMOVE_HEADER",titleValues:t,message:"DEVICE_ULTE_REMOVE_DETAILS",messageValues:t,confirmButtonProps:{text:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_REMOVE"}),variant:"primary"},children:c.a.createElement(sn,null,c.a.createElement(O.c,{id:"DEVICE_ULTE_REMOVE_INFO"})),onConfirm:C,onCancel:()=>{E(Object(Ya.e)()),m(!1)}}))},[r,l,I]);return R&&i?c.a.createElement(En,{variant:"link",onClick:T,loader:s?"spinner":null},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_REMOVE_LABEL"})):null}),un=a(38),pn=a(2018);const On=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;function bn({device:e}){const{isUbbAlignmentToolModalClosed:t}=Object(o.useSelector)(Ga.M),{is_aligning:a}=e,n=Object(o.useDispatch)(),r=Object(v.getDeviceState)(e),l=Object(pn.a)(Y.a.feStaticAssets+"/videos");return c.a.createElement(On,{size:"small",variant:"link",onClick:c=>{c.preventDefault(),c.stopPropagation(),a||t||!l||n(Object(Ya.g)({modalType:un.a.UBB_ALIGNMENT_TOOL,modalProps:{closeModal:()=>{n(Object(Ga.i)({isUbbAlignmentToolModalClosed:!0})),n(Object(Ya.e)())}}})),n(Object(v.alignDevice)(e))},disabled:r!==v.DeviceState.CONNECTED},c.a.createElement(O.c,{id:a?"DEVICE_ACTIONS_ALIGNMENT_DISABLE":"DEVICE_ACTIONS_ALIGNMENT_ENABLE"}))}var In=a(82);const gn=Object(l.c)(b.a)`
  background-color: ${({theme:e})=>e.colors.whiteoutBackground};
  bottom: 0;
  left: 0;
  top: 0;
  opacity: 0.96;
  padding: 0 24px;
  position: absolute;
  right: 0;
  z-index: 1;
`,Rn=Object(l.c)(p.Vb)`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  path {
    fill: ${In.m};
  }
`;var Cn=()=>c.a.createElement(gn,null,c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Rn,null),c.a.createElement(O.c,{id:"DEVICE_STATE_UPGRADING_INFO_WARNING"})));const Tn=Object(l.c)("div")`
  position: relative;
`,hn=Object(l.c)(u.a)`
  margin: 17px 0 20px 0;
  display: block;
`;var vn=({actionName:e,Button:t,whiteOutActive:a})=>c.a.createElement(Tn,null,a&&c.a.createElement(Cn,null),c.a.createElement(hn,{color:"secondary"},c.a.createElement(O.c,{id:`DEVICE_ACTIONS_${e.toUpperCase()}_INFO`})),c.a.createElement(b.a,{justifyContent:"flex-end"},t)),Dn=a(42);const fn=Object(l.c)("div")`
  position: relative;
`,Pn=Object(l.c)(u.a,{shouldForwardProp:e=>"removeTopMargin"!==e})`
  margin: ${({removeTopMargin:e})=>(e?"0":"17px")+" 0 20px 0;"};
  display: block;
`,Sn=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  justify-content: flex-end;
  padding: 0 8px;
`,An=Object(l.c)(b.a)`
  margin-top: 15px;
`,jn=Ea.a.object().shape({url:Ea.a.string().label("COMMON_LABEL_LOCATION_URL").url(c.a.createElement(O.c,{id:"COMMON_VALIDATION_VALID_URL"})).required()});var Nn=Object(st.compose)(Object(o.connect)(e=>({mgmtSettings:Object(Dn.selectMgmtSettings)(e)}),{confirmDeviceCustomUpgrade:v.confirmDeviceCustomUpgrade,upgradeExternalDevice:v.upgradeExternalDevice,hideModal:Ya.e}),Object(ia.g)({validationSchema:jn,handleSubmit:({url:e},{props:{confirmDeviceCustomUpgrade:t,upgradeExternalDevice:a,device:n,hideModal:c}})=>{t({onConfirm:()=>{a(n,e)},onCancel:()=>{c()}})}}))(({handleSubmit:e,whiteOutActive:t,mgmtSettings:{auto_upgrade:a},removeTopMargin:n=!1})=>c.a.createElement(fn,null,t&&c.a.createElement(Cn,null),c.a.createElement(Pn,{color:"secondary",removeTopMargin:n},c.a.createElement(O.c,{id:a?"DEVICE_ACTIONS_CUSTOM_UPGRADE_NOT_AVAILABLE":"DEVICE_ACTIONS_CUSTOM_UPGRADE_INFO"})),c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(da.a,{full:!0,name:"url",label:"COMMON_LABEL_LOCATION_URL",placeholder:"DEVICE_ACTIONS_CUSTOM_UPGRADE_PLACEHOLDER",disabled:a,type:"input"}),c.a.createElement(An,{justifyContent:"flex-end"},c.a.createElement(Sn,{name:"customUpgrade",variant:"link",type:"submit",onClick:e,disabled:!!a},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE"})))))),yn=a(1146);const Ln=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  justify-content: flex-end;
  margin-top: 17px;
  padding: 0 8px;
`;var xn=({device:e,sourceDevice:t})=>{const a=Object(o.useDispatch)(),[r,l]=Object(n.useState)(!1);return c.a.createElement(Ln,{variant:"link",onClick:n=>{n.preventDefault(),n.stopPropagation(),a(Object(v.confirmDeviceCloneConfig)({name:e.name||e.mac,sourceName:t.name||t.mac,onConfirm:async()=>{l(!0),await a(Object(v.cloneConfig)(e,t)),l(!1)},onCancel:()=>{l(!1),a(Object(Ya.e)())}}))},disabled:r||!t.mac},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION"}))};const Vn=l.a`
  min-height: 40px;
`,wn=l.a`
  li {
    pointer-events: none;
    div {
      display: block !important;
    }
  }
`,Fn=Object(l.c)(p.cb)`
  color: ${In.p};
  margin-right: 10px;
`;var Mn=Object(O.f)(({intl:e,device:t})=>{const a=Object(o.useSelector)(v.selectDevicesData),[r,l]=Object(n.useState)(""),i=a.find(e=>e.mac===r)||{mac:null,name:null},E=a.reduce((e,a)=>(a.adopted&&a.state!==v.DEVICE_STATE_IDS.ADOPTING&&a.mac!==t.mac&&a.model===t.model&&e.push({label:a.name||a.mac,value:a.mac}),e),[]);return E.length||E.push({image:Fn,label:c.a.createElement(O.c,{id:"COMMON_DEVICES_NOT_FOUND"}),value:"notFound"}),c.a.createElement("div",null,c.a.createElement(yn.a,{searchable:!0,placeholder:e.formatMessage({id:"DEVICE_ACTIONS_COPY_CONFIGURATION_PLACEHOLDER"}),value:r,onChange:(e,t)=>{l(t)},options:E,width:"100%",className:Vn,optionContainerClassName:wn}),c.a.createElement(b.a,{justifyContent:"flex-end"},c.a.createElement(xn,{device:t,sourceDevice:i})))}),Un=a(2855),Bn=a(1184);var kn=({device:e,isOwner:t,...a})=>{const n=Object(o.useSelector)(rn.selectEnv),r=Object(tt.a)(e,"unifi_care.state");let l,i;if(r===Me.DeviceUnifiCareState.REPLACING?(l=Object(tt.a)(e,"unifi_care.tracking_url"),i=t?"DEVICE_ACTIONS_UNIFI_CARE_TRACK":"DEVICE_ACTIONS_UNIFI_CARE_SHIPPED"):r===Me.DeviceUnifiCareState.RMA_IN_PROGRESS?(l=Object(tt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_RMA"):t&&(l=Object(tt.a)(e,"unifi_care.rma_url"),i="DEVICE_ACTIONS_UNIFI_CARE_REPLACE"),!t)return i?c.a.createElement(O.c,{id:i}):null;return c.a.createElement(G.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(l||"https://"+Object(on.a)(n),"_blank")}},a),c.a.createElement(O.c,{id:i}))},Wn=a(64),Hn=a(812);var Gn=({device:e,...t})=>{const a=Object(o.useDispatch)(),n=Object(o.useSelector)(rn.selectEnv),r=Object(o.useSelector)(Hn.selectUnifiCareDetails);return Object(Wn.e)(()=>Promise.resolve(a(Object(Hn.fetchUnifiCareDetails)())).catch(()=>{}),c.a.createElement(G.a,Object.assign({size:"small",variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(Object(tt.a)(r,"links.covered_devices_url")||"https://"+Object(on.a)(n))}},t),c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_VIEW"})))};var Yn=({device:e,...t})=>{const a=Object(o.useSelector)(rn.selectEnv);return c.a.createElement(G.a,Object.assign({size:"small",variant:"link",onClick:t=>{t.preventDefault(),t.stopPropagation();const n=Object(tt.a)(e,"unifi_care.activation_url");window.open(n||"https://"+Object(on.a)(a))}},t),c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVATE"}))},$n=a(1966),zn=a(1951),Kn=a(545);const Xn=Object(l.c)("div")`
  margin-top: 8px;
`,qn=Object(l.c)("div")`
  &:not(:empty) {
    padding-bottom: 12px;
  }
`,Zn=Object(l.c)(b.a)`
  margin-left: 18px;
`,Jn=Object(l.c)(b.a)`
  margin-top: 16px;
  margin-left: -8px;
`,Qn=Object(l.c)(b.a)`
  margin-top: 10px;
  margin-left: -8px;
`,ec=Object(l.c)($n.a)`
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,tc=Object(l.c)(kn)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
  padding: 0 8px;
`,ac=Object(l.c)(Gn)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
  padding: 0 8px;
`,nc=Object(l.c)(Yn)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: bold;
  padding: 0 8px;
`,cc=Object(l.c)(Un.a)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: bold;
  padding: 0 8px;
  line-height: 1.15;
`,rc=Object(l.c)(b.a)`
  padding: 17px;
  border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-radius: 8px;
  margin: 16px 32px 24px 32px;
`,lc=Object(l.c)(R.a)`
  margin-right: 17px;
`,ic=Object(l.c)(b.a)`
  margin-bottom: 15px;
`;var oc=({device:e,hideWarning:t})=>{const a=Object(o.useDispatch)(),r=Object(Kn.c)(e),l=!r&&Object(Kn.d)(e),i=Object(Kn.a)(e),E=null==i?void 0:i.getTime(),s=l&&i||r&&Object(Kn.b)(e),[m,d]=Object(n.useState)(E-(new Date).getTime()),_=Object(o.useSelector)(Ga.C);return Object(n.useEffect)(()=>{let e;return m&&(e=setInterval(()=>{d(E-(new Date).getTime())},200)),()=>e&&clearInterval(e)},[E]),Object(Wn.e)(()=>Promise.resolve(a(Object(Hn.fetchUnifiCareDetails)())).catch(()=>{}),c.a.createElement(Xn,null,r&&!t&&c.a.createElement(qn,null,c.a.createElement(zn.e,{activeItem:e,standalone:!0}),c.a.createElement(zn.d,{activeItem:e,standalone:!0})),l&&m>0&&c.a.createElement(rc,{flexDirection:"column"},c.a.createElement(ic,{flexDirection:"row"},c.a.createElement("div",null,c.a.createElement(lc,{width:44,height:48})),c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(u.a,{weight:"bold",size:"body",color:"primary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_OFFER_ENDS",values:{eligibleExpirationTime:Object(Bn.a)(Math.floor(m/1e3)).join(" ")}})))),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_AVAILABLE_INFO"})),c.a.createElement(Qn,{flexDirection:"row",alignItems:"center"},_&&c.a.createElement(nc,{device:e}),c.a.createElement(cc,{href:Y.a.unifiCare,target:"_blank"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_LEARN_MORE"})))),r&&c.a.createElement(b.a,{flexDirection:"row",alignItems:"flex-start"},c.a.createElement("div",null,c.a.createElement(R.a,{width:54,height:54})),c.a.createElement(Zn,{flexDirection:"column"},c.a.createElement(u.a,{size:"label"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE_ACTIVE_INFO"})),c.a.createElement(Jn,{flexDirection:"row",alignItems:"center"},c.a.createElement(ac,{device:e}),c.a.createElement(tc,{isOwner:_,device:e})),s&&c.a.createElement(ec,{expires:s})))))};const Ec=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,sc=l.a`
  padding: 0;
  margin: 0;
`;var mc=({activeItem:e})=>{const t=Object(o.useSelector)(t=>Object(v.selectDeviceData)(t,e.mac)),a=Object(v.getRawDeviceState)(t),n=Object(v.isUlte)(t),r=a===v.DeviceState.UPGRADING,l=[{id:"locate",openByDefault:!0,label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE"}),renderContent:()=>c.a.createElement(vn,{actionName:"locate",Button:c.a.createElement(Ha,{device:t})})},{id:"restart",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_RESTART"}),renderContent:()=>c.a.createElement(vn,{actionName:"restart",Button:c.a.createElement(Ka,{device:t})})},{id:"customUpgrade",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"}),renderContent:()=>c.a.createElement(Nn,{device:t,whiteOutActive:r})},{id:"provision",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_PROVISION_LABEL"}),renderContent:()=>c.a.createElement(vn,{actionName:"provision",Button:c.a.createElement(qa,{device:t}),whiteOutActive:r})},{id:"forget",label:c.a.createElement(O.c,{id:n?"DEVICE_ACTIONS_REMOVE_LABEL":"DEVICE_ACTIONS_FORGET_LABEL"}),renderContent:()=>c.a.createElement(vn,{actionName:"forget",Button:n?c.a.createElement(_n,{device:t}):c.a.createElement(Qa,{device:t}),whiteOutActive:r})}];return t.type!==Me.DeviceType.AP&&t.type!==Me.DeviceType.SWITCH||l.splice(2,0,{id:"copyConfig",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"}),renderContent:()=>c.a.createElement(Mn,{device:t})}),t.type!==Me.DeviceType.AP&&t.type!==Me.DeviceType.SWITCH&&t.type!==Me.DeviceType.UBB||l.push({id:"downloadInfo",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL"}),renderContent:()=>c.a.createElement(vn,{actionName:"download_device_info",Button:c.a.createElement(nn,{device:t})})},{id:"debug",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DEBUG_LABEL"}),renderContent:()=>c.a.createElement(vn,{actionName:"debug",Button:c.a.createElement(tn,{device:t})})}),t.type===Me.DeviceType.UBB&&l.splice(1,0,{id:"alignmentTool",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_ALIGNMENT"}),renderContent:()=>c.a.createElement(vn,{actionName:"alignment",Button:c.a.createElement(bn,{device:t})})}),(Object(v.hasActiveUnifiCare)(t)||Object(v.isUnifiCareEligible)(t))&&l.unshift({id:"unifiCare",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>c.a.createElement(oc,{device:t}),openByDefault:!0}),c.a.createElement(Ec,{variant:"tertiary",items:l,contentClassName:sc,multiOpen:!0,renderOnlyExpandedContent:!0})},dc=a(2021);const _c=Object(l.c)(b.a)`
  padding: 10px 30px 30px;

  table {
    th {
      text-transform: none;
      padding-left: 0;
    }
    tr {
      :hover {
        cursor: pointer;
      }
    }
    td {
      padding-left: 0;
      padding-right: 25px;
    }
  }
`,uc=Object(l.c)("div")`
  padding-top: 20px;
`,pc=Object(l.c)("span")`
  padding-left: 6px;
`,Oc=Object(l.c)(p.cb)`
  margin-right: 10px;
`,bc=Object(l.c)(p.h)`
  position: absolute;
  right: 0;
`,Ic=Object(l.c)("div")`
  padding-top: 10px;
`,gc=[{id:"date",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DATE"}),renderCell:({date:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:80},{id:"start",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"}),renderCell:({start:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:60},{id:"duration",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"}),renderCell:({duration:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:150},{id:"Arrow",renderLabel:()=>"",renderCell:()=>c.a.createElement(p.h,{size:"small"}),minWidth:20}],Rc=[{id:"date",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DATE"}),renderCell:({date:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:80},{id:"start",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_START"}),renderCell:({start:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:60},{id:"duration",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"}),renderCell:({duration:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:80},{id:"wifiExperience",renderLabel:()=>c.a.createElement(O.c,{id:"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXP"}),renderCell:({experience:e})=>c.a.createElement(c.a.Fragment,null,e>=0?c.a.createElement(u.a,{truncate:!0,color:"secondary"},c.a.createElement("span",{style:{color:Oe.a["color-"+Object(we.b)(e)]}},e),"/100"):c.a.createElement(u.a,{truncate:!0,color:"secondary"},c.a.createElement(O.c,{id:"COMMON_NA"}))),minWidth:80},{id:"Arrow",renderLabel:()=>"",renderCell:()=>c.a.createElement(p.h,{size:"small"}),minWidth:20}],Cc=[{id:"hostnameInfo",renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_CLIENT"}),renderCell:({hostname:e,client:t,mac:a,name:n})=>c.a.createElement(c.a.Fragment,null,t?c.a.createElement(g.a,{client:t}):null,c.a.createElement(u.a,{truncate:!0,color:"secondary"},c.a.createElement(pc,null,n||e||a))),minWidth:100},{id:"date",renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_DATE"}),renderCell:({date:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:80},{id:"start",renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HISTORY_HEADER_TIME"}),renderCell:({start:e})=>c.a.createElement(u.a,{truncate:!0,color:"secondary"},e),minWidth:60},{id:"experienceInfo",renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_HEADER_WIFI_EXPERIENCE"}),renderCell:({experience:e})=>c.a.createElement(c.a.Fragment,null,e>=0?c.a.createElement(u.a,{truncate:!0,color:"secondary"},c.a.createElement("span",{style:{color:Oe.a["color-"+Object(we.b)(e)]}},e,"%")):c.a.createElement(O.c,{id:"COMMON_NA"}),c.a.createElement(bc,{size:"small"})),minWidth:90}];var Tc=({activeItem:{mac:e},activeItem:t})=>{const a="inform_url"in t,l=Object(o.useSelector)(h.selectClientsData),{data:i,isLoading:E,error:s}=Object(o.useSelector)(t=>Object(dc.selectFormattedSessionData)(t,e,a,l)),m=Object(o.useDispatch)(),d=Object(r.k)(),{is_wired:_}=t,u=_?gc:Rc;Object(n.useEffect)(()=>{i&&i.length||m(Object(dc.fetchSession)(e,a)),l&&l.length||m(h.fetchClients)},[]);const p=Object(n.useCallback)(()=>c.a.createElement(Ic,null,i.length>0&&c.a.createElement(O.c,{id:"COMMON_TABLE_FOOTER",values:{length:i.length}})),[i.length]);return c.a.createElement(_c,{justifyContent:"flex-start",alignItems:"center"},!E&&i.length>0&&c.a.createElement(ne.a,{items:i,disableColumnFilters:!0,columns:a?Cc:u,onRowClick:({id:e})=>d.push(a?"overview/history/"+e:"history/"+e),rowHeight:30,renderFooter:p}),(!E||s)&&0===i.length&&c.a.createElement(uc,null,c.a.createElement(Oc,null),c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HISTORY_TAB_EMPTY"})))},hc=a(1999);const vc=Object(l.c)(b.a)`
  padding: 15px 30px 0;
`,Dc=Object(l.c)(b.a)`
  position: relative;
  padding-bottom: 25px;
  width: 100%;

  button {
    padding: 0;
    position: absolute;
    left: 0;
  }

  span {
    width: 100%;
    padding: 1px 0;
    text-align: center;
  }
`,fc=Object(l.c)(b.a)`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Pc=Object(l.c)(b.a)`
  margin-bottom: 15px;
  justify-content: space-between;
  color: ${({theme:e})=>e.motifPalette.text02};
`;var Sc=({activeItem:{mac:e},activeItem:t})=>{const a="inform_url"in t,l=Object(o.useDispatch)(),i=Object(r.k)(),{subPanelId:E,subPanel:s}=Object(r.m)(),{uplink:m}=t,d=Object(o.useSelector)(e=>Object(v.selectDeviceData)(e,m&&m.mac)),_=Object(o.useSelector)(t=>Object(hc.b)(t,E||s,e,a));Object(n.useEffect)(()=>{Object.keys(_).length||l(Object(dc.fetchSession)(e,a))},[]);const u=a&&(_.name||_.hostname||_.mac)+" | ";return c.a.createElement(c.a.Fragment,null,c.a.createElement(vc,{flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},c.a.createElement(Dc,null,c.a.createElement(nt.c,{name:"backButton",onClick:()=>i.push(a?"../../overview":"../history")},c.a.createElement(p.g,null)),c.a.createElement(_a.a,{size:"large",weight:"700"},u,_.date)),c.a.createElement(fc,{flexDirection:"column"},c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:"CLIENT_PROPERTY_HISTORY_TAB_DURATION"}),c.a.createElement(_a.a,null,_.duration)),c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:"CLIENT_PROPERTY_HISTORY_TAB_START"}),c.a.createElement(_a.a,null,_.start)),c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:"CLIENT_PROPERTY_HISTORY_TAB_MAC_ADDRESS"}),c.a.createElement(_a.a,null,a?_.mac:d.mac)),c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:"CLIENT_PROPERTY_HISTORY_TAB_IP_ADDRESS"}),c.a.createElement(_a.a,null,a?_.ip:d.ip)),_.is_wired&&c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:"CLIENT_HEADER_PORT"}),c.a.createElement(_a.a,null,_.port)),c.a.createElement(Pc,null,c.a.createElement(_a.a,{message:_.is_wired?"CLIENT_PROPERTY_HISTORY_TAB_CLIENT_EXPERIENCE":"CLIENT_PROPERTY_HISTORY_TAB_WIFI_EXPERIENCE"}),c.a.createElement(_a.a,null,_.experience>=0?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{color:Oe.a["color-"+Object(we.b)(_.experience)]}},_.experience,"%")):c.a.createElement(O.c,{id:"COMMON_NA"}))))),!!_.mac&&c.a.createElement(qt,{mac:_.mac,key:_.mac}))},Ac=a(691),jc=a(1766),Nc=a(1205),yc=a(690),Lc=a(160),xc=a(59),Vc=a(808),wc=a(161);const Fc=Object(l.c)("div")`
  display: table;
`,Mc=Object(l.c)("div")`
  display: table-row;

  > * {
    font-size: 11px;
    display: table-cell;
    white-space: nowrap;

    &:last-of-type {
      padding-left: 10px;
    }
  }
`;var Uc=Object(O.f)((function({deviceData:e,intl:t,portData:a,portData:{ifname:n,port_idx:r,portName:l,tx_bytes:i,rx_bytes:E,poe_mode:s,sfp_txfault:m,sfp_rxfault:d,sfp_vendor:_,sfp_serial:p,sfp_part:b,sfp_rev:I,sfp_compliance:g,sfp_voltage:R,sfp_current:C,sfp_txpower:T,sfp_rxpower:h,sfp_temperature:v}}){const f=Object(o.useSelector)(wc.selectPortConf),P=Object(xc.ob)(a,t,f),S=Object(o.useSelector)(Vc.q),A=Object(xc.fb)(a,e,S),j=Object(xc.sb)(a,e,S),N=a&&["SFP","SFP+"].includes(a.media)&&a.sfp_found,y=Object(xc.rb)(a,t),L=Object(xc.nb)(a),x=[];return N&&(m&&x.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX_FAULT"})),d&&x.push(t.formatMessage({id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX_FAULT"}))),c.a.createElement(Fc,null,(r||n)&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PORT"})),c.a.createElement(u.a,null,Object(xc.ib)(a))),l&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_NAME"})),c.a.createElement(u.a,null,l)),(y||x.length>0)&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_STATUS"})),c.a.createElement(u.a,null,y,x.length>0&&r%2==0&&c.a.createElement(u.a,{color:"danger"},x.join(", ")))),i>0&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_TX"})),c.a.createElement(H.a,{type:"bytes",input:i})),E>0&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_RX"})),c.a.createElement(H.a,{type:"bytes",input:E})),L&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_DEVICE_POE_MODE_POE"})),c.a.createElement(u.a,null,L)),P&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PROFILE"})),c.a.createElement(u.a,null,P)),A&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_DOWNLINK"})),c.a.createElement(u.a,null,Object(D.b)(A))),j&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_UPLINK"})),c.a.createElement(u.a,null,Object(D.b)(j))),N&&c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VENDOR"})),c.a.createElement(u.a,null,_)),p&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_SERIAL"})),c.a.createElement(u.a,null,p)),b&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_PART_NUMBER"})),c.a.createElement(u.a,null,b)),I&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_REV"})),c.a.createElement(u.a,null,I)),g&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_COMPLIANCE"})),c.a.createElement(u.a,null,g)),R&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_VOLTAGE"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_VOLTAGE",values:{voltage:R}}))),C&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_CURRENT"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_CURRENT",values:{current:C}}))),v&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:v}}))),T&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_OUTPUT_POWER"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:T}}))),h&&c.a.createElement(Mc,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_LABEL_INPUT_POWER"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_SWITCH_TOOLTIP_VALUES_IO_POWER",values:{power:h}})))))}));const Bc={large:{threshold:12,size:"20px",spacing:"8px",tooltipOffset:"15px"},medium:{threshold:15,size:"16px",spacing:"6px",tooltipOffset:"17px"},small:{threshold:20,size:"12px",spacing:"4px",tooltipOffset:"19px"},xsmall:{threshold:28,size:"10px",spacing:"2px",tooltipOffset:"20px"}};var kc=a(353);const Wc=l.e`
  0% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 0; }
`,Hc=l.a`
  &:nth-child(1) {
    animation: ${Wc} 2s 0s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${Wc} 2s -1s infinite ease-in-out;
  }
`,Gc=l.e`
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  33%  { opacity: 1; }
  53%  { opacity: 0; }
  100% { opacity: 0; }
`,Yc=l.a`
  &:nth-child(1) {
    animation: ${Gc} 3s -1s infinite ease-in-out;
  }

  &:nth-child(2) {
    animation: ${Gc} 3s -2s infinite ease-in-out;
  }

  &:nth-child(3) {
    animation: ${Gc} 3s 0s infinite ease-in-out;
  }
`,$c=Object(l.c)("div",{shouldForwardProp:e=>"iconsLength"!==e})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 80%;
    max-height: 80%;
  }
  ${({iconsLength:e})=>2===e&&`\n  &:nth-child(1) {\n    animation: ${Wc} 2s 0s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${Wc} 2s -1s infinite ease-in-out;\n  }`}

  ${({iconsLength:e})=>3===e&&`&:nth-child(1) {\n    animation: ${Gc} 3s -1s infinite ease-in-out;\n  }\n\n  &:nth-child(2) {\n    animation: ${Gc} 3s -2s infinite ease-in-out;\n  }\n\n  &:nth-child(3) {\n    animation: ${Gc} 3s 0s infinite ease-in-out;\n  }`}
`;function zc({icon:e}){const t={[kc.a.DISCARDING]:p.x,[kc.a.WAN]:p.Z,[kc.a.MIRROR]:p.R,[kc.a.NETWORK]:p.zc,[kc.a.POE]:p.zb,[kc.a.POE_PLUS]:p.vb,[kc.a.POE_PLUS_PLUS]:p.xb,[kc.a.POWER_DELIVERING]:p.zb,[kc.a.SHIELD]:p.Kb,[kc.a.UPLINK]:p.l,[kc.a.WAN_POE]:p.qc,[kc.a.WARNING]:p.b}[e];return t?c.a.createElement(t,{size:"small"}):null}var Kc=({icons:e,...t})=>{let a="";return 2===e.length?a=Hc:3===e.length&&(a=Yc),c.a.createElement(c.a.Fragment,null,e.map(n=>n&&c.a.createElement($c,Object.assign({},t,{className:a,iconsLength:e.length,key:n}),c.a.createElement(zc,{icon:n}))))};const Xc=Object(l.c)(fa.a,{shouldForwardProp:e=>!["color","portSize","portSizeOverride","isDisabled"].includes(e)})`
  height: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||Bc.large.size};
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||Bc.large.size};
  align-items: center;
  background-color: ${({theme:e,color:t,isDisabled:a})=>a?"transparent":e.motifPalette[t]};
  ${({isDisabled:e,theme:t})=>e&&`border: ${t.motifPalette[v.SWITCH_PORT_SPEED_COLORS.DEFAULT]} 1px solid;`}
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;
  pointer-events: auto;

  &:not(:first-child) {
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||Bc.large.spacing};
  }
`,qc=Object(l.c)("div",{shouldForwardProp:e=>!["portSize","portSizeOverride"].includes(e)})`
  width: ${({portSizeOverride:e,portSize:t})=>e||(null==t?void 0:t.size)||Bc.large.size};
  &:not(:first-child) {
    margin-left: ${({portSize:e})=>(null==e?void 0:e.spacing)||Bc.large.spacing};
  }
`,Zc=({tooltipOffset:e}=Bc.large)=>l.a`
  margin-left: ${e};
`;var Jc=({cellData:e,deviceData:t,key:a,portSize:n,navigateTo:r,history:l,portSizeOverride:i,...E})=>{const s=Object(xc.ic)(Object(o.useSelector)(v.selectDevicesData),t),m=Object(xc.hb)(e,t,Object(o.useSelector)(va.selectNetworkGroups),s),d=Object(xc.eb)(t,e);if(!e)return Object(v.isUdmBase)(t)||Object(v.isUdr)(t)?null:c.a.createElement(qc,{key:a,portSize:n,portSizeOverride:i});return c.a.createElement(Xc,Object.assign({color:d,portSize:n,portSizeOverride:i,isDisabled:!e.enable,message:c.a.createElement(Uc,{deviceData:t,portData:e||{}}),position:"bottomRight",tooltipClassName:Zc(n),onClick:()=>{r&&l.push(r)},portal:!0,key:a},E),c.a.createElement(Kc,{icons:m}))};const Qc=Object(l.c)(u.a)`
  padding-left: 10px;
  color: inherit;
  font-size: inherit;
`,er=(e,t,a)=>{const{diagram:n,ports:r}=Object(v.getDeviceSpecs)(e),l=[Object(v.isUdm)(e),Object(v.isUsAggPro)(e),Object(v.getIsInWallAp)(e)],i=n?Object(v.determineRowLayoutsFromDiagramConfig)(n,e):Object(v.determineRowLayoutsFromPortConfig)(e);return i?i.flat().reduce((n,i)=>{var o,E;if(!i)return n;const s=Object(v.getCurrentPortData)(i.portNumber,e);if(Object(Nc.a)(s))return n;const m=c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Jc,Object.assign({cellData:s,deviceData:e,style:{minWidth:20}},a)),c.a.createElement(Qc,{truncate:!0},((e,t)=>{const a=Object(yc.a)(t,v.switchAnomaliesMap),n=a.length;return n>1?c.a.createElement(O.c,{id:"COMMON_ERRORS",values:{errorCount:n}}):n?c.a.createElement(O.c,{id:a[0]+"_PROBLEM"}):!Object(v.isPoeSupported)(e)&&!t.poe_caps||Object(v.getIsUsl8Mp)(e)?t.up?Object(ft.c)(1e3*(null==t?void 0:t.speed)*1e3/8,"bitrate")||c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_CONNECTED"}):t.enable?c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"}):c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISABLED"}):Object(v.getPortPoeModeText)(t)})(e,s))),d=Object(Lc.h)(s.ifname,e,t),_=r[s.ifname],u={...s,id:(null===(o=s.port_idx)||void 0===o?void 0:o.toString())||s.ifname,isWanPort:null==_?void 0:_.startsWith("WAN"),defaultNetworkGroupLabel:Object(v.getPortGroupLabel)(e,s),networkGroup:null==d?void 0:d.id,portStatus:m,disabled:s.masked};return l.every(e=>!e)&&(u.macFilters=null===(E=s.port_security_mac_address)||void 0===E?void 0:E.length),n.push(u),n},[]).sort(({port_idx:e},{port_idx:t})=>e-t):[]},tr=l.a`
  th {
    text-transform: none;
  }
`,ar=Object(l.c)(G.a)`
  margin-top: 16px;
  justify-content: flex-end;
  span {
    font-size: 12px;
  }
  svg {
    height: 14px;
    width: 13px;
  }
`,nr=Object(l.c)(p.h)`
  margin-right: 8px;
  color: inherit;
`,cr=Object(l.c)(u.a)`
  color: inherit;
`,rr=e=>[{id:"portName",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})},{id:"portStatus",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"}),renderCell:({portStatus:t})=>c.a.createElement(re.g,{justifyContent:"space-between",width:"100%",alignItems:"center"},c.a.createElement(cr,{truncate:!0},t),!e&&c.a.createElement(nr,{size:"small"}))}];var lr=function({deviceData:e,...t}){const a=Object(r.k)(),l=Object(v.isUdmPro)(e)||Object(v.isUdmProSe)(e),i=Object(v.isUdm)(e),E=Object(o.useSelector)(va.selectNetworkGroups),s=Object(n.useCallback)(({port_idx:e,masked:t})=>!t&&a.push("ports/"+e.toString()),[a]),m=Object(n.useMemo)(()=>rr(),[]),d=Object(n.useMemo)(()=>er(e,E,t),[e,E,t]);if(i){const n=((e,t,a)=>er(e,t,a).filter(e=>!e.isWanPort))(e,E,t),r=((e,t,a)=>er(e,t,a).filter(e=>e.isWanPort))(e,E,t),i=rr(l);return c.a.createElement(k.a,{variant:"tertiary",renderOnlyExpandedContent:!0,items:[{id:"udmLanTable",openByDefault:!0,label:c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_LAN_PORTS"}),renderContent:()=>c.a.createElement(ne.a,{hideCellOverflow:!1,columns:m,headerRowClassName:tr,rowHeight:35,disableColumnFilters:!0,items:n,onRowClick:s})},{id:"udmWanTable",label:c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_WAN_PORTS"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(ne.a,{hideCellOverflow:!1,columns:i,headerRowClassName:tr,rowHeight:35,disableColumnFilters:!0,disableTextPointer:l,disableSelection:l,items:r,onRowClick:l?null:()=>a.push("ports/"+F.WAN)}),l&&c.a.createElement(ar,{variant:"link",onClick:()=>a.push("ports/"+F.WAN),Icon:c.a.createElement(p.sb,{isActive:!0})},c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"})))}]})}return c.a.createElement(ne.a,{hideCellOverflow:!1,columns:m,headerRowClassName:tr,rowHeight:35,disableColumnFilters:!0,items:d,onRowClick:s})};const ir=Object(l.c)("div",{shouldForwardProp:e=>"portsTable"!==e})`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-gap: 0 15px;
  ${({theme:e,portsTable:t})=>t?`\n  border-bottom: 1px solid ${e.motifPalette.ui04};\n  padding-bottom: 15px;\n  margin: 15px 0 20px;\n  `:`\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid ${e.motifPalette.ui04};\n  `}
`,or=Object(l.c)(u.a)`
  padding-bottom: 6px;
  padding-top: 6px;
  color: ${({theme:e})=>e.motifPalette.text02};
  display: flex;
  align-items: center;
  white-space: nowrap;

  > span {
    margin-left: 4px;
  }
`,Er=Object(l.c)(vt.a,{shouldForwardProp:e=>!["background","color"].includes(e)})`
  background-color: ${e=>"transparent"!==e.background?e.theme.motifPalette[e.background]:e.background};
  border-radius: 2px;
  border: ${({color:e,theme:t})=>e&&"1px solid "+t.motifPalette[e]};
`;function sr({stp_version:e}){switch(e){case"rstp":return c.a.createElement(or,{size:"label"},c.a.createElement(p.x,{style:{width:9,height:9}}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_RSTP_DISCARDING"}));case"stp":return c.a.createElement(or,{size:"label"},c.a.createElement(p.x,{style:{width:9,height:9}}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_STP_BLOCKING"}));case"disabled":return c.a.createElement(or,{size:"label"},c.a.createElement(p.x,{style:{width:9,height:9}}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISABLED"}));default:return""}}function mr({deviceData:e,portsTable:t=!1}){const{model:a,port_table:r,stp_version:l}=e;return Object(n.useMemo)(()=>{const a=Object(v.getPortSpeeds)(e),{isPoePlusPlusSupported:n,isPoePlusSupported:r,isPoeAutoSupported:i,isPoePassthroughSupported:o,isPoePassive24Supported:E}=Object(v.getDevicePoeAvailability)(e),s=Object(v.getIsInWallAp)(e),m=e=>v.SWITCH_PORT_SPEED_COLORS[e]||"transparent",d=Object(v.getCanBePoweredByPoe)(e),_=Object(v.isUdmBase)(e)||Object(v.isUdr)(e);return c.a.createElement(ir,{portsTable:t},a.sort((e,t)=>t-e).map(e=>c.a.createElement(or,{size:"label",key:e},c.a.createElement(Er,{background:m(e)}),c.a.createElement(O.c,{id:Object(v.hasGbpsSpeedsOnly)([e])?"DEVICE_PORT_STATE_GBE":"DEVICE_PORT_STATE_MBE",values:{speed:Object(v.getPortLedSpeedsParsed)(e)}}))),c.a.createElement(or,{size:"label"},c.a.createElement(Er,{background:v.SWITCH_PORT_SPEED_COLORS.DEFAULT}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})),c.a.createElement(or,{size:"label"},c.a.createElement(Er,{background:"transparent",color:v.SWITCH_PORT_SPEED_COLORS.DEFAULT}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISABLED"})),Object(v.hasSwitch)(e)&&c.a.createElement(or,{size:"label"},c.a.createElement(p.R,{style:{width:9,height:9}}),c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_MIRROR"})),(s||Object($a.isPoeSupported)(e)||d)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(or,{size:"label"},c.a.createElement(p.zb,{style:{width:9,height:9}}),n&&c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_POE_PLUS_PLUS"}),r||d&&c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_POE_PLUS"}),(i&&!r||o)&&c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_POE"}),E&&c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_POE_PASSIVE"}))),!_&&c.a.createElement(sr,{stp_version:l}))},[r,a,l])}var dr=a(2856);const _r=Object(l.c)(b.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,ur=({spacing:e})=>l.a`
  &:not(:first-child) {
    margin-top: ${e};
  }
`;function pr({deviceData:e,portSizeOverride:t,...a}){const{port_table:n}=e,{diagram:r}=Object(xc.C)(e),l=r?Object(xc.c)(r,e):Object(xc.f)(e);if(!l||0===l.length)return c.a.createElement(_r,null,c.a.createElement(p.cb,{isActive:!0,className:"mr-2"}),c.a.createElement(O.c,{id:"DEVICE_DIAGRAM_MISSING"}));const i=Object(dr.a)(l.map(e=>e.length)),o=Object.values(Bc).find(e=>i<=e.threshold);return l.map((r,l)=>c.a.createElement(b.a,{"align-items":"flex-end",key:"PortLayoutRow-"+(l+1),className:ur(o),flex:"1 1 "+(t||o.size)},r.map((r,i)=>{const E=`Port-${l+1}-${i+1}`,s=r&&n&&Object(xc.s)(r.portNumber,e);return c.a.createElement(Jc,Object.assign({cellData:s,deviceData:e,key:E},a,{portSize:o,portSizeOverride:t}))})))}const Or=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.neutral01};
  display: flex;
  flex: none;
  flex-direction: column;
`,br=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`,Ir=Object(l.c)("div")`
  padding: 32px 32px 16px 32px;
`,gr=Object(l.c)(b.a)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,Rr=Object(l.c)(p.u)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,Cr=Object(l.c)(p.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,Tr=Object(l.c)(G.a)`
  margin-left: 2px;
`;function hr({deviceData:e,hideAnomalies:t,...a}){const l=Object(r.k)(),{portAnomalies:i,totalAnomalies:o}=Object(yc.b)(e.port_table,v.switchAnomaliesMap),E=1===o,s=Object(n.useCallback)(e=>l.push("ports/"+e.toString()),[l]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Or,null,c.a.createElement(br,null,c.a.createElement(pr,Object.assign({deviceData:e},a))),c.a.createElement(mr,{deviceData:e})),!t&&!!o&&c.a.createElement(Ir,null,E?c.a.createElement(c.a.Fragment,null,c.a.createElement(gr,{alignItems:"center"},c.a.createElement(Cr,null),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:i[0].anomalies[0]+"_PROBLEM"}),c.a.createElement(Tr,{variant:"inline",onClick:()=>s(i[0].portNumber)},c.a.createElement(O.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:i[0].portNumber}})))),c.a.createElement(gr,{alignItems:"center"},c.a.createElement(Rr,null),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:i[0].anomalies[0]+"_SOLUTION"})))):c.a.createElement(gr,{alignItems:"center"},c.a.createElement(Cr,null),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_MULTIPLE_ANOMALIES",values:{count:o}}),i.map((e,t)=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Tr,{variant:"inline",onClick:()=>s(e.portNumber)},c.a.createElement(O.c,{id:"COMMON_PORT_NUMBER",values:{portNumber:e.portNumber}})),t===i.length-1?".":","))))))}const vr=Object(l.c)("div")`
  margin: 16px 32px 0 32px;
`;function Dr({activeItem:e,hideDiagramKeys:t,...a}){const[r]=Object(n.useState)("DevicePorts-"+Date.now()),l=Object(o.useDispatch)();return Object(n.useEffect)(()=>{const e={style:jc.a.overflow,styleName:"overflow",dependant:r};return l(Object(Ac.c)(e)),()=>l(Object(Ac.b)(e))},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(hr,{deviceData:e,hideAnomalies:!0}),c.a.createElement(vr,null,c.a.createElement(lr,Object.assign({deviceData:e},a))))}var fr=a(2907),Pr=a(158),Sr=a(689),Ar=a(1983),jr=a(775),Nr=a(54),yr=a(135),Lr=a(1950);const xr=(e,t,a,n)=>{const c=e.find(e=>e.mac===a),r=Object(D.b)(c),l=Object(D.a)(c);if(r&&r!==a)return r;if(l)return l;const i=t.find(e=>e.mac===a),o=Object(h.getClientDisplayName)(i);return o&&o!==a?o:n.formatMessage({id:"DEVICE_UNKNOWN_HOSTNAME"})},Vr=Object(l.c)("div")`
  table {
    th {
      text-transform: none;
    }
  }
  > div:first-child {
    width: 80%;
    > div:first-child {
      width: 80%;
    }
  }
`,wr=(e,t,a,n)=>Array.from(e,(e,c)=>({id:"port_security_mac_address-"+c,port_security_mac_address:e,port_security_mac_address_name:xr(t,a,e,n)})),Fr=[{id:"port_security_mac_address",label:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_MAC_ADDRESS_LABEL"}),sortable:!1},{id:"port_security_mac_address_name",label:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_NAME_LABEL"}),sortable:!1}],Mr={port_security_mac_addresses:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"};var Ur=Object(O.f)(({formValues:e,intl:t,setFieldValue:a})=>{const{port_security_mac_address:r}=e,l=Object(o.useSelector)(v.selectDevicesData),i=Object(o.useSelector)(h.selectClientsData),E=Object(n.useMemo)(()=>({editActive:!1,port_security_mac_address:wr(r,l,i,t)}),[r,l,i,t]),s=Object(n.useMemo)(()=>wr(r,l,i,t),[r,l,i,t]),m=Object(n.useMemo)(()=>[{name:"new_port_security_mac_address",label:"DEVICE_PORT_FORM_ENTER_MAC_ID",placeholder:"DEVICE_PORT_FORM_ENTER_MAC_ID",type:"text"}],[]),d=Object(n.useCallback)(e=>{a("port_security_mac_address",e)},[a]),_=Object(n.useCallback)(({port_security_mac_address:e,new_port_security_mac_address:t})=>{t&&d([...e.map(({port_security_mac_address:e})=>e),t])},[d]),u=Object(n.useCallback)(({port_security_mac_address:t})=>{d(e.port_security_mac_address.filter(e=>e!==t))},[e,d]),p=Object(n.useCallback)(e=>{d([...e.map(({port_security_mac_address:e})=>e)])},[d]);return c.a.createElement(Vr,null,c.a.createElement(Lr.d,{fieldName:"port_security_mac_address",items:s,columns:Fr,fieldLabels:Mr,newFields:m,onAddItem:_,onRemoveItem:u,onEditSubmit:p,initialValues:E,useValuesInSchema:!0,validationSchema:e=>(e=>{const t=()=>Na.a.string().label("DEVICE_PORT_FORM_MAC_ADDRESS_LABEL").matches(ya.p,c.a.createElement(O.c,{id:"COMMON_VALIDATION_VALID_MAC"})),a={arrayFieldName:"port_security_mac_address",stringFieldName:"port_security_mac_address",errorMessage:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_MAC_MUST_BE_UNIQUE"})};return Na.a.object().shape({editActive:Na.a.bool(),new_port_security_mac_address:t().isMacUnique({formValues:null,...a}),port_security_mac_address:Na.a.array().of(Na.a.object().shape({port_security_mac_address:t().isMacUnique({formValues:e,...a}).required()}))})})(e),addButtonText:"DEVICE_PORT_FORM_MAC_FILTER_BUTTON"}))}),Br=a(1929),kr=a(2897);const Wr=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e||16}px;
  justify-content: space-between;
  :last-child {
    margin-bottom: 0;
  }
`,Hr=Object(l.c)(u.a)`
  display: flex;
  flex: 1;
  margin-right: 12px;
`,Gr=Object(l.c)(u.a)`
  font-size: 11px;
`,Yr=Object(l.c)(p.cb)`
  margin: 0 6px;
`,$r=Object(l.c)(p.b)`
  margin-right: 9px;
  color: ${({theme:e})=>e.motifPalette.warning};
`,zr=l.a`
  margin-left: 11px;
`,Kr=Object(l.c)("div")`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,Xr=Object(l.c)("div")`
  > div:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,qr=Object(l.c)(b.a)`
  width: 100%;
`,Zr=Object(l.c)(Nr.Field)`
  width: unset !important;
  margin-right: ${({theme:e})=>e.spacing["spacing-m"]};
  input {
    width: 100%;
  }
`,Jr=Object(l.c)(Nr.Field)`
  width: 20% !important;
  > div > div {
    width: 100% !important;
  }
`,Qr=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,el=Object(l.c)(u.a)`
  margin-bottom: 5px;
`,tl=Object(l.c)("div")`
  padding-bottom: 10px;
  border-bottom: 1px solid ${Oe.a["white-6"]};

  span {
    margin-left: 5px;
  }
`,al=Object(l.c)(b.a)`
  > * {
    width: 100%;
  }
`;var nl=Object(O.f)((function({activeItem:e,portData:t,formValues:a,setFieldValue:r,setFieldTouched:l,initialValues:i,intl:o}){var E,s,m;const{port_table:d=[]}=e,{lldpmed_enabled:_,stormctrl_enabled:u,op_mode:I,egress_rate_limit_kbps_enabled:g,speed:R}=a,{op_mode:C,port_idx:T,port_poe:h}=t,D=e.dot1x_portctrl_enabled,f=1===T,P=Object(v.hasSwitch)(e)||(Object(v.isInWallHd)(e)||Object(v.isUaiw6)(e))&&(f||D),S=Object(v.isInWallHd)(e),A=Object(v.getIsInWallAp)(e),j=Object(v.isUdmBase)(e),N=Object(v.isUdr)(e),y=Object(v.isSwitch)(e),L=Object(Pr.s)(e),x=Object(Pr.r)(e),V=Object(Pr.q)(e),w=Object(Pr.u)(e),F=Object(v.getPortPoeAvailability)(t),M=F.isPoePassthroughSupported&&!F.isPoeOffSupported,U="switch"===C&&(h||Object(v.isUaiw6)(e))&&P,B=Object(n.useMemo)(()=>{var e;try{return null===(e=JSON.parse(R))||void 0===e?void 0:e.speed}catch(t){return null}},[R]),k=Object(n.useMemo)(()=>Object($a.getSupportedSpeeds)(t).map(({autoneg:e,speed:t=0,full_duplex:a=!1})=>{const{value:n,unit:c}=Object(ft.d)(1e6*t/8,"bitrate"),r=`${Object(Br.a)(n,1)}${c}`;return{full_duplex:a,label:e?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!e&&{speed:r}}}),[t]),W=Object(n.useMemo)(()=>{if(e){const t="mirror"===C;let a=Object(tt.a)(e,"switch_caps.max_mirror_sessions",void 0);if(a||0===a||(a=1),t||e.port_table.filter(e=>"mirror"===e.op_mode).length<a)return!0}return!1},[e,C]),{isAggregateAllowed:H,aggregatePortOptions:G}=Object(n.useMemo)(()=>{const a=Object(v.getPortNumbers)(e),n=Object.keys(a).reduce((e,t)=>a[t].length+e,0)||0,{port_idx:c}=t;let r=Object(tt.a)(e,"switch_caps.max_aggregate_sessions",void 0);r||0===r||(r=4);const l=((e,t)=>t.map(e=>e.port_idx).filter((t,a)=>e+a+1===t))(c,((e,t,a)=>{const n=e.findIndex(e=>e.port_idx===t.port_idx),c=-1!==n?e.slice(n+1,n+a):[],r=(null==t?void 0:t.speed_caps)&~v.SPEED_CAPS.PORTSPEED_AUTO_NEG;return c.filter(({speed_caps:e,op_mode:t})=>e&r&&"switch"===t)})(d,t,r)),i=l[0],o=l[l.length-1]||i;return{isAggregateAllowed:i<=o&&o<=n,aggregatePortOptions:l.map(e=>({label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN",value:e,values:{port:e}}))}},[e,t,d]),Y=Object(n.useMemo)(()=>{const{isPoeOffSupported:e,isPoePassthroughSupported:t,isPoePassive24Supported:a,isPoeAutoSupported:n,isPoePlusPlusSupported:c,isPoePlusSupported:r}=F,l=[];if(e&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_OFF"}),value:"off"}),t&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSTHROUGH"}),value:"passthrough"}),!t&&a&&l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_PASSIVE"}),value:"pasv24"}),!t&&n){const e=[];c?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS_PLUS"})):r?e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE_PLUS"})):e.push(o.formatMessage({id:"COMMON_DEVICE_POE_MODE_POE"})),e.push(o.formatMessage({id:"DEVICE_PORT_FORM_AUTO_DETECT"})),l.push({label:o.formatMessage({id:"COMMON_DEVICE_POE_MODE_AUTO"}),value:"auto"})}return l},[o,F]);return c.a.createElement(c.a.Fragment,null,U&&c.a.createElement(Kr,{marginBottom:24},M?c.a.createElement(al,{alignItems:"center",flexDirection:"column"},c.a.createElement(el,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_POE_MODE_LABEL"})),c.a.createElement(tl,null,c.a.createElement(p.cb,{isActive:!0})," ",c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_NOTICE_POE_PASSTHROUGH_ONLY"}))):c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_POE_MODE_LABEL",name:"poe_mode",type:"dropdown",full:!0,translateLabel:!0,options:Y})),!j&&!A&&c.a.createElement(Kr,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_OPERATIONS_LABEL",name:"op_mode",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:[{label:"DEVICE_PORT_FORM_SWITCHING_LABEL",value:"switch"},...W?[{label:"DEVICE_PORT_FORM_MIRRORING_LABEL",value:"mirror"}]:[],...H?[{label:"DEVICE_PORT_FORM_AGGREGATE_LABEL",value:"aggregate"}]:[]]})),"mirror"===I&&c.a.createElement(Kr,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_MIRRORING_PORT",full:!0,type:"number",name:"mirror_port_idx"})),"aggregate"===I&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Wr,{marginBottom:24,alignItems:"baseline"},c.a.createElement(Qr,null,c.a.createElement(Nr.Field,{full:!0,name:"port_idx",label:"DEVICE_PORT_FORM_AGGREGATE_PORTS_LABEL",value:o.formatMessage({id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_HYPHEN"},{port:T}),disabled:!0})),c.a.createElement("div",null,"-"),c.a.createElement(Qr,null,c.a.createElement(Nr.Field,{full:!0,name:"aggregatePortStop",type:"dropdown",options:G,translateOptions:!0,validated:!0}))),c.a.createElement(Wr,{marginBottom:24,alignItems:"center"},c.a.createElement($r,{height:17,width:17}),(null===(E=e.downlink_table)||void 0===E?void 0:E.length)?c.a.createElement(Gr,null,c.a.createElement(O.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_UPLINK"})):c.a.createElement(Gr,null,c.a.createElement(O.b,{id:"DEVICE_PROPERTIES_WARNING_PORT_AGGREGATION_DOWNLINK"})))),e.dot1x_portctrl_enabled&&["mirror","aggregate"].includes(I)&&c.a.createElement(Kr,{marginBottom:24}),!A&&t.media&&c.a.createElement(Kr,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_LINK_SPEED_LABEL",name:"speed",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:k})),y&&B===Sr.c.PORTSPEED_FULL_25G.speed&&c.a.createElement(Kr,{marginBottom:24},c.a.createElement(kr.a,{text:o.formatMessage({id:"DEVICE_PORT_FORM_LINK_SPEED_SFP28_ALERT"})})),L&&"aggregate"!==I&&!S&&c.a.createElement(Wr,null,c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL"}),c.a.createElement(fa.a,{portal:!0,tooltipClassName:zr,position:"topRight",width:230,message:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_PORT_ISOLATION_NOTIFICATION"})},c.a.createElement(Yr,{isActive:!0}))),c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_PORT_ISOLATION_LABEL",name:"isolation",type:"checkbox"})),"switch"===I&&!A&&!j&&!N&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Wr,{marginBottom:16},c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_STORM_CONTROL_LABEL",name:"stormctrl_enabled",afterChange:e=>{r("stormctrl_enabled",e),e||["stormctrl_ucast_rate","stormctrl_mcast_rate","stormctrl_bcast_rate"].forEach(e=>{r(e,i[e]),l(e,!1)})},type:"checkbox"})),u&&c.a.createElement(Xr,null,c.a.createElement(Kr,{marginBottom:10},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_UNICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",min:Sr.e.MIN,max:Sr.e.MAX,name:"stormctrl_ucast_rate"})),c.a.createElement(Kr,{marginBottom:10},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_MULTICAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_mcast_rate",min:Sr.e.MIN,max:Sr.e.MAX})),c.a.createElement(Kr,{marginBottom:20},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_UNKNOWN_BROADCAST",placeholder:"COMMON_ENTER_PACKETS_PER_SECOND",full:!0,type:"number",name:"stormctrl_bcast_rate",min:Sr.e.MIN,max:Sr.e.MAX})))),x&&"switch"===I&&!S&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Wr,null,c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_LLDP_MED_LABEL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_LLDP_MED_LABEL",name:"lldpmed_enabled",afterChange:e=>{r("lldpmed_enabled",e),e||r("lldpmed_notify_enabled",i.lldpmed_notify_enabled)},type:"checkbox"})),_&&c.a.createElement(Wr,null,c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_TOPOLOGY_LABEL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_TOPOLOGY_LABEL",name:"lldpmed_notify_enabled",type:"checkbox"}))),w&&"switch"===I&&!S&&c.a.createElement(Wr,null,c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_STP_LABEL"}),c.a.createElement(fa.a,{portal:!0,tooltipClassName:zr,position:"topRight",width:230,message:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_STP_TOOLTIP"})},c.a.createElement(Yr,{isActive:!0}))),c.a.createElement(Nr.Field,{name:"stp_port_mode",type:"checkbox"})),V&&"switch"===I&&!S&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Wr,null,c.a.createElement(Hr,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_EGRESS_LABEL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_EGRESS_LABEL",name:"egress_rate_limit_kbps_enabled",afterChange:e=>{r("egress_rate_limit_kbps_enabled",e),e||(r("egress_rate_limit_kbps",i.egress_rate_limit_kbps),l("egress_rate_limit_kbps",!1))},type:"checkbox"})),g&&c.a.createElement(b.a,{flexDirection:"row"},c.a.createElement(qr,{flexDirection:"column"},c.a.createElement(Zr,{full:!0,label:"DEVICE_PORT_FORM_RATE_LIMIT_LABEL",type:"number",min:null===(s=Sr.b[a.egress_rate_limit_unit])||void 0===s?void 0:s.MIN,max:null===(m=Sr.b[a.egress_rate_limit_unit])||void 0===m?void 0:m.MAX,name:"egress_rate_limit_kbps"})),c.a.createElement(Jr,{type:"dropdown",options:Ar.a.slice(0,2),name:"egress_rate_limit_unit",translateOptions:!0}))))}));const cl=Object(l.c)("div")`
  padding: 0 0 48px 0;

  li {
    &[aria-expanded='true'] {
      border-bottom: none;
    }
    > div {
      margin-bottom: 0;
    }
  }
`,rl=Object(l.c)("div")`
  &:not(:first-child) {
    border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    padding-top 8px;
    margin-top: 16px;
  }
`,ll=Object(l.c)(re.g)`
  &:not(:last-child) {
    padding: 8px 0;
  }
`,il=Object(l.c)(p.u)`
  color: ${({theme:e})=>e.motifPalette.success};
  margin-right: 9px;
  width: 17px;
  height: 17px;
`,ol=Object(l.c)(p.e)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: 9px;
  width: 18px;
  height: 18px;
`,El=({anomalies:e})=>e.map(e=>c.a.createElement(rl,{key:e},c.a.createElement(ll,{alignItems:"center"},c.a.createElement(ol,null),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:e+"_PROBLEM"}))),c.a.createElement(ll,{alignItems:"center"},c.a.createElement(il,null),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:e+"_SOLUTION"})))));function sl({port:e}){const t=Object(yc.a)(e,v.switchAnomaliesMap),a=t.length;return a?c.a.createElement(cl,null,a>1?c.a.createElement(k.a,{variant:"tertiary",items:[{id:"anomalies",openByDefault:!0,label:c.a.createElement(O.c,{id:"COMMON_ERRORS",values:{errorCount:a}}),renderContent:()=>c.a.createElement(El,{anomalies:t})}]}):c.a.createElement(El,{anomalies:t})):null}const ml=Object(l.c)(b.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,dl=Object(l.c)(u.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,_l=Object(l.c)(k.a)`
  > li {
    :last-child {
      border-bottom: none;

      > div {
        margin-bottom: 0;
      }
    }
  }
`,ul=Object(l.c)(b.a)`
  width: 100%;
  padding: 30px;
`,pl=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,Ol=Object(l.c)("li")`
  ${({isGroup:e})=>e?"\n    pointer-events: none;\n    opacity: 0.4;\n  ":"margin-left: 16px;"}
`,bl=Object(l.c)(b.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`,Il=Object(l.c)(G.a)`
  span {
    margin-left: 3px !important;
  }
`;const gl=()=>{const e=c.a.createElement(O.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Sr.e.MIN,max:Sr.e.MAX}});return Ea.a.number().min(Sr.e.MIN,e).max(Sr.e.MAX,e)},Rl=Object(ia.g)({mapPropsToValues:({currentPort:e})=>{const{autoneg:t,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r=!1,stormctrl_bcast_rate:l="",stormctrl_mcast_enabled:i=!1,stormctrl_mcast_rate:o="",stormctrl_ucast_enabled:E=!1,stormctrl_ucast_rate:s="",isolation:m=!1,lldpmed_enabled:d,lldpmed_notify_enabled:_=!1,speed:u,full_duplex:p,op_mode:O,mirror_port_idx:b,port_security_mac_address:I=[],egress_rate_limit_kbps_enabled:g=!1,egress_rate_limit_kbps:R="",stp_port_mode:C=!0,nameOverride:T="",aggregate_num_ports:h=null}=e;return{name:T,speed:t?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:u,full_duplex:p}),lldpmed_enabled:!1!==d,stormctrl_enabled:r||i||E,aggregatePortStop:h?a+h-1:null,port_idx:a,poe_mode:n,portconf_id:c,stormctrl_bcast_enabled:r,stormctrl_bcast_rate:l,stormctrl_mcast_enabled:i,stormctrl_mcast_rate:o,stormctrl_ucast_enabled:E,stormctrl_ucast_rate:s,isolation:m,lldpmed_notify_enabled:_,full_duplex:p,mirror_port_idx:b,op_mode:O,port_security_mac_address:I,egress_rate_limit_kbps:R,egress_rate_limit_unit:Ar.a[0].value,egress_rate_limit_kbps_enabled:g,stp_port_mode:C}},validationSchema:({activeItem:e})=>{const t=Object(v.getPortNumbers)(e),a=Math.min(t.standard[0]||1,t.sfp[0]||1,t.plus[0]||1),n=Math.max(t.standard[t.standard.length-1]||1,t.sfp[t.sfp.length-1]||1,t.plus[t.plus.length-1]||1),r=c.a.createElement(O.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:a,max:n}}),l=(e=!1)=>c.a.createElement(O.c,{id:"DEVICE_VALIDATION_HINT_RANGE",values:{min:Sr.b[Ar.a[e?1:0].value].MIN,max:Sr.b[Ar.a[e?1:0].value].MAX}});return Ea.a.object().shape({port_idx:Ea.a.number(),name:Ea.a.string(),poe_mode:Ea.a.string(),portconf_id:Ea.a.string(),stormctrl_enabled:Ea.a.boolean(),stormctrl_bcast_enabled:Ea.a.boolean(),stormctrl_bcast_rate:gl(),stormctrl_mcast_enabled:Ea.a.boolean(),stormctrl_mcast_rate:gl(),stormctrl_ucast_enabled:Ea.a.boolean(),stormctrl_ucast_rate:gl(),isolation:Ea.a.boolean(),full_duplex:Ea.a.boolean(),lldpmed_enabled:Ea.a.boolean(),lldpmed_notify_enabled:Ea.a.boolean(),op_mode:Ea.a.string(),mirror_port_idx:Ea.a.number().when("op_mode",{is:"mirror",then:Ea.a.number().required(r).min(a,r).max(n,r)}),aggregatePortStop:Ea.a.number().nullable().when("op_mode",{is:"aggregate",then:Ea.a.number().required().label("DEVICE_PORT_FORM_AGGREGATE_PORT_LABEL")}),port_security_mac_address:Ea.a.array().of(Ea.a.string()),egress_rate_limit_kbps_enabled:Ea.a.boolean(),stp_port_mode:Ea.a.boolean(),egress_rate_limit_kbps:Ea.a.number().when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Ar.a[0].value&&t,then:Ea.a.number().required(l()).min(Sr.b.k.MIN,l()).max(Sr.b.k.MAX,l()).integer()}).when(["egress_rate_limit_unit","egress_rate_limit_kbps_enabled"],{is:(e,t)=>e===Ar.a[1].value&&t,then:Ea.a.number().required(l(!0)).min(Sr.b.M.MIN,l(!0)).max(Sr.b.M.MAX,l(!0))})})},handleSubmit:(e,{props:{updateDeviceWithIdEndpoint:t,activeItem:{_id:a,port_overrides:n,mac:c},activeItem:r,currentPort:l,intl:i,history:o}})=>{const E=i.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),s=Object(v.getIsPortConfDisabled)(r,l),{stormctrl_enabled:m,stormctrl_bcast_rate:d,stormctrl_mcast_rate:_,lldpmed_enabled:u,lldpmed_notify_enabled:p,stormctrl_ucast_rate:O,egress_rate_limit_kbps:b,egress_rate_limit_kbps_enabled:I,op_mode:g,mirror_port_idx:R,stp_port_mode:C,aggregatePortStop:T}=e,{speed:h,full_duplex:D}=JSON.parse(e.speed);let f=null;I&&(f=e.egress_rate_limit_unit===Ar.a[1].value?1e3*b:b),delete e.egress_rate_limit_unit;const P={...e,speed:h,full_duplex:D,stp_port_mode:C,autoneg:!h,lldpmed_notify_enabled:!!u&&p,stormctrl_bcast_enabled:!!m&&!!d,stormctrl_bcast_rate:m?d:null,stormctrl_mcast_enabled:!!m&&!!_,stormctrl_mcast_rate:m?_:null,stormctrl_ucast_enabled:!!m&&!!O,stormctrl_ucast_rate:m?O:null,egress_rate_limit_kbps:f,mirror_port_idx:"mirror"===g?R.toString():null,aggregate_num_ports:"aggregate"===g?T-l.port_idx+1:null},S=Object(fr.a)(P,(e,t)=>"portconf_id"===t?s:"stormctrl_enabled"===t||("op_mode"===t&&"switch"===e||("lldpmed_enabled"===t?e:("full_duplex"!==t||!P.speed)&&("autoneg"!==t&&("poe_mode"===t&&"mirror"===P.op_mode||("stp_port_mode"===t?!("switch"===P.op_mode&&Object(Pr.u)(r)&&!Object(v.isInWallHd)(r)):"aggregatePortStop"===t||!e))))));let A=[S];n&&(A=[S,...n.filter(e=>e.port_idx!==S.port_idx)]),t({port_overrides:A},a,c,{successToast:{icon:Ot.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:E}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{o.goBack()})}}),Cl={updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint};var Tl=Object(st.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a,subPanelId:n}})=>({portConfig:Object(wc.selectPortConf)(e),currentPort:Object(v.getCurrentPortData)(n?+n:+a,t)}),Cl),O.f,Rl)((function({portConfig:e,activeItem:t,history:a,currentPort:l,submitForm:i,resetForm:E,setFieldValue:s,setFieldTouched:d,values:_,values:{op_mode:u,portconf_id:I},intl:g,dirty:R,initialValues:C}){const T=Object(v.getIsInWallAp)(t),h=Object(v.getIsSwitchMini)(t),D=Object(v.getIsUapUswHybrid)(t),f=Object(Pr.t)(t),P=Object(v.getHasSwitchFullFeatures)(t,l),S=Object(v.getIsPortConfDisabled)(t,l),A=Object(o.useSelector)(q.a),j=Object(o.useSelector)(m.i),N=Object(r.i)(j,{site:A}),y="switch"===u&&f&&!T&&!Object(v.isUdm)(t),L=T?"../device":"../services",x=Object(n.useMemo)(()=>{const t=e.map(e=>({...e,groupLabel:Object(v.getPortProfileGroup)(e)})),a=Object(wt.a)(t,"groupLabel");return Object.entries(a).reduce((e,[t,a])=>{const n=a.filter(e=>D?e.attr_hidden_id!==v.SWITCH_PROFILE.ALL_ID:!h||"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"!==e.groupLabel).map(({name:e,_id:t})=>({label:e,value:t}));return"undefined"===t||h&&"DEVICE_PROPERTIES_VALUES_SWITCH_PORT_PROFILE_GROUP_CUSTOM"===t?(e.push(...n),e):(e.push({groupLabel:g.formatMessage({id:t}),items:n}),e)},[])},[g,e,D]),V=Object(n.useMemo)(()=>Object(jr.a)(x.map(({groupLabel:e,items:t})=>[{isGroup:!0,label:e,value:e},...t])),[x]),w=Object(n.useMemo)(()=>c.a.createElement(Nr.Field,{label:P?"DEVICE_PORT_FORM_PORT_PROFILE_LABEL":"DEVICE_PORT_FORM_PORT_NETWORKS_VLAN_LABEL",name:"portconf_id",type:"dropdown",full:!0,translateLabel:!0,options:V,renderOption:({id:e,onClick:t,className:a,isSelected:n,option:{isGroup:r=!1,label:l}})=>c.a.createElement(Ol,{key:`${e}-${l}`,id:e,onClick:t,className:a,"aria-selected":n,role:"option",isGroup:r},l),disabled:S}),[P,S,V]),F=()=>{E(),a.goBack()};return c.a.createElement(c.a.Fragment,null,c.a.createElement(ul,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(ml,{alignItems:"center"},c.a.createElement(p.g,{onClick:F,style:{cursor:"pointer"}}),c.a.createElement(dl,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER",values:{port:l.portIdx}}))),c.a.createElement(sl,{port:l}),c.a.createElement(pl,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),c.a.createElement(pl,{marginBottom:24},w),c.a.createElement(bl,{alignSelf:"flex-end"},c.a.createElement(Il,{size:"small",type:"button",variant:"inline",onClick:()=>{a.push(`${N}${Y.a.ucoreAdvancedSettings}`)}},c.a.createElement(p.s,{height:20,width:20}),c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_MANAGE_PORT_PROFILES"}))),!!l.portconf_id&&I!==l.portconf_id&&c.a.createElement(pl,{marginBottom:24},c.a.createElement(b.a,null,c.a.createElement(p.cb,{style:{color:Oe.a["scale-5"],marginRight:8}}),c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_NOTICE_OVERRIDE_RESET"}))),S&&c.a.createElement(pl,{marginBottom:24},c.a.createElement(b.a,null,c.a.createElement(p.cb,{isActive:!0,style:{marginRight:8}}),c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_NOTICE_PORT_CONF_DISABLED"})),c.a.createElement(yr.a,{name:"configureLink",variant:"link",size:"small",onClick:()=>a.push(L),style:{marginTop:5}},c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_BUTTON_PORT_CONF_CONFIGURE"}))),!Object(v.isUdmBase)(t)&&c.a.createElement(_l,{variant:"tertiary",multiOpen:!0,items:[...y?[{id:"macFilter",label:c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_MAC_FILTER_LABEL"}),renderContent:()=>c.a.createElement(Ur,{setFieldValue:s,formValues:_})}]:[],...P?[{id:"advancedPortConfig",label:c.a.createElement(O.c,{id:"DEVICE_PORT_PROFILE_OVERRIDE"}),renderContent:()=>c.a.createElement(nl,{initialValues:C,setFieldValue:s,setFieldTouched:d,portData:l,activeItem:t,formValues:_})}]:[]]})),c.a.createElement(Ma,{isDirty:R,onFormSubmit:i,onFormCancel:F,allowCancel:!0}))})),hl={op_mode:"switch",dot1x_ctrl:"force_authorized",autoneg:!0,dot1x_idle_timeout:300,full_duplex:void 0,speed:void 0,lldpmed_enabled:!0,stp_port_mode:!0,stp_bpdu_guard:!1,stp_loopback_detection:!1,stp_root_guard:!1,egress_rate_limit_kbps_enabled:!1,port_security_enabled:!1,port_security_mac_address:[],linkNegotiationOptions:{autoneg:{id:"autoneg",label:"DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO",autoneg:!0,speed:void 0,full_duplex:void 0},"10000 FDX":{id:"10000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e4,full_duplex:!0},"1000 FDX":{id:"1000 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:1e3,full_duplex:!0},"100 FDX":{id:"100 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:100,full_duplex:!0},"100 HDX":{id:"100 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:100,full_duplex:!1},"10 FDX":{id:"10 FDX",label:"DEVICE_STATE_FLAG_WIRED_FULL_DUPLEX",autoneg:!1,speed:10,full_duplex:!0},"10 HDX":{id:"10 HDX",label:"DEVICE_STATE_FLAG_WIRED_HALF_DUPLEX",autoneg:!1,speed:10,full_duplex:!1}}};const vl=Object(l.c)(b.a)`
  margin-bottom: 24px;
  &:nth-of-type(3) {
    padding-top: 24px;
  }
`,Dl=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`;var fl=({port:e,groupOptions:t,speedOptions:a,group:n})=>c.a.createElement(vl,{justifyContent:"space-between"},c.a.createElement(Dl,null,c.a.createElement(Nr.Field,{type:"dropdown",name:`ports[${e.portIdx-1}].networkGroup`,label:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",translateLabel:!0,translateLabelValues:{port:e.portIdx,networkGroup:n},options:t,validated:!0,full:!0})),a.length>0&&c.a.createElement(Dl,null,c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_GATEWAY_PORTS_SPEED_DUPLEX",name:`ports[${e.portIdx-1}].speed`,type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:a})));var Pl=Object(O.f)(({activeItem:e,ports:t,intl:a})=>{const{subPanel:l}=Object(r.m)(),i=Object(o.useSelector)(va.selectNetworkGroups),E=t=>{const{supportedValues:a=[]}=Object(Lc.d)(e,t.ifname);return a.map(e=>{const{speed:t=0,full_duplex:a=!1,autoneg:n}=hl.linkNegotiationOptions[e],{value:c,unit:r}=Object(ft.d)(1e6*t/8,"bitrate"),l=`${c}${r}`;return{label:n?"COMMON_DEVICE_AUTONEG_FULL":`COMMON_DEVICE_DUPLEX_${a?"FULL":"HALF"}_STRING`,value:JSON.stringify({speed:t,full_duplex:a}),values:!n&&{speed:l}}})},s=Object(n.useMemo)(()=>l===F.WAN?[]:i.filter(({id:e})=>e.startsWith("LAN")),[l,i]),m=e=>[...[...i.filter(({id:e})=>e.startsWith("WAN")&&e!==va.NetworkHiddenId.WAN_LTE_FAILOVER),...s].filter(({id:a})=>((e,t,a)=>!t.some(({networkGroup:t})=>t===e)||e===a.networkGroup)(a,t,e)).map(({id:e})=>({value:e,label:e})),{value:v.DISABLED_PORT,label:a.formatMessage({id:"COMMON_DISABLED"})}],d=t.filter(({isWanPort:e,media:t})=>l===F.WAN?e:!v.SFP_MEDIA_TYPES.includes(t)),_=t.filter(({media:e})=>l!==F.WAN&&v.SFP_MEDIA_TYPES.includes(e));return c.a.createElement(c.a.Fragment,null,d.map(e=>c.a.createElement(fl,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.defaultNetworkGroupLabel,key:e.portIdx})),_.map(e=>c.a.createElement(fl,{port:e,groupOptions:m(e),speedOptions:E(e),group:e.media||e.defaultNetworkGroupLabel,key:e.portIdx})))});const Sl=Object(l.c)(u.a)`
  margin-bottom: 24px;
`,Al=Object(l.c)(b.a)`
  width: 100%;
  padding: 16px 30px;
`,jl=Object(l.c)(b.a)`
  margin-bottom: 24px;
`,Nl=Object(l.c)(p.c)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.warning};
`;const yl=Object(l.c)(b.a)`
  margin-bottom: 24px;
`,Ll=Object(l.c)(p.c)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.danger};
`,xl=Object(ia.g)({mapPropsToValues:e=>{const{networkGroups:t,activeItem:a}=e;return{ports:er(a,t).map((e,t)=>{const{supportedValues:n=[]}=Object(Lc.d)(a,e.ifname),c=e.autoneg?JSON.stringify({speed:0,full_duplex:!1}):JSON.stringify({speed:e.speed,full_duplex:e.full_duplex});return{...e,networkGroup:e.networkGroup||v.DISABLED_PORT,...n.length?{speed:c}:{},itemIndex:t}})}},validationSchema:({intl:e,activeItem:t,params:a})=>{const n=(null==a?void 0:a.subPanel)===F.ALL;return Ea.a.object().shape({ports:Ea.a.array().of(Ea.a.object().shape({networkGroup:Ea.a.string().label(e.formatMessage({id:"COMMON_WORD_INTERFACE"})).oneOf([W.a.WAN,W.a.WAN2,v.DISABLED_PORT,...Object(Lc.a)(t)]).required()})).test("has-default-network-groups",c.a.createElement(yl,null,c.a.createElement(Ll,{width:19,height:19}),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:n?"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_OR_LAN_WARNING":"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_NO_WAN_WARNING"}))),e=>e.some(e=>e.networkGroup===W.a.WAN)&&(!n||e.some(e=>e.networkGroup===va.NetworkHiddenId.LAN)))})},handleSubmit:({ports:e},{props:{networkGroups:t,updateDeviceWithIdEndpoint:a,activeItem:{_id:n,port_overrides:c=[],ethernet_table:r,mac:l},activeItem:i,history:o,intl:E}})=>{const s=er(i,t),m=E.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"}),d=[...e.map(e=>{const{speed:t,full_duplex:a}=JSON.parse(e.speed),{speed:n,full_duplex:r,...l}=(null==c?void 0:c.find(t=>t.port_idx===e.portIdx))||{};return{...l,...t?{speed:t,full_duplex:a}:{},port_idx:e.portIdx,autoneg:!t}}),...null==c?void 0:c.filter(t=>!e.some(e=>e.portIdx===t.port_idx))],_=[];s.forEach(t=>{const a=e.find(e=>e.ifname===t.ifname);if(a){if(a.networkGroup===v.DISABLED_PORT)return;_.push({ifname:a.ifname,networkgroup:a.networkGroup})}else _.push({ifname:t.ifname,networkgroup:t.networkGroup})}),a({port_overrides:d,ethernet_overrides:_},n,l,{successToast:{icon:Ot.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:m}},mergeAndOverrideKeys:["port_overrides","ethernet_overrides"],extend:!0}).then(()=>{o.goBack()})}}),Vl={updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint};var wl=Object(st.compose)(Object(o.connect)(e=>({networkGroups:Object(va.selectNetworkGroups)(e)}),Vl),O.f,xl)((function({activeItem:e,history:t,submitForm:a,resetForm:r,values:l,dirty:i,setFieldValue:E,errors:s}){const m=Object(o.useSelector)(va.selectNetworkGroups),{networkGroups:d}=Object(v.getDeviceSpecs)(e),_=Object(v.isAdopted)(e),p=Object(n.useMemo)(()=>l.ports.some(e=>JSON.parse(e.speed).speed),[l.ports]);return c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(hr,{deviceData:e,hideAnomalies:!0}),c.a.createElement(Al,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Sl,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"})),c.a.createElement(Pl,{activeItem:e,ports:l.ports}),c.a.isValidElement(s.ports)&&s.ports,p&&c.a.createElement(jl,null,c.a.createElement(Nl,{width:19,height:19}),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES_SPEED_WARNING"})))),c.a.createElement(Ma,{isDirty:i,onFormSubmit:a,onFormCancel:()=>{r(),t.goBack()},onFormReset:()=>{E("ports",l.ports.map(e=>{const t=m.find(t=>t.id===d[e.ifname]);return{...e,networkGroup:(null==t?void 0:t.id)||v.DISABLED_PORT,autoneg:!0,speed:JSON.stringify({speed:0,full_duplex:!1})}}))},submitButtonText:"COMMON_ACTION_APPLY",allowCancel:!0}))})),Fl=a(1756),Ml=a(133),Ul=a(387),Bl=a(336),kl=a(454),Wl=a(2366),Hl=a(1967),Gl=a(1979);const Yl=Object(l.c)("div")`
  height: 100%;
`,$l=l.a`
  th {
    text-transform: none;
    padding-left: 0;
    padding-right: 0;
  }
`,zl=l.a`
  :hover {
    cursor: pointer;
  }
  td {
    padding-left: 0;
    padding-right: 25px;
  }
`,Kl=Object(l.c)("div")`
  white-space: pre;
`,Xl=Object(l.c)("div")`
  color: ${({theme:e})=>e.colors.primary};
`,ql=Object(l.c)("div")`
  margin-top: 16px;
`,Zl=({device:e})=>{const t=Object(o.useDispatch)();return c.a.createElement(Xl,{onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(_.g)({type:C.b.DEVICE,mac:e.mac}))}},c.a.createElement(Fe.a,{device:e}))},Jl=[{id:"nameInfo",sortable:!0,minWidth:40,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_AP"}),renderCell:e=>c.a.createElement(Zl,{device:e})},{id:"channel",sortable:!0,minWidth:30,maxWidth:90,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_CHANNEL"})},{id:"rssiInfo",sortable:!0,minWidth:40,maxWidth:80,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_HEADER_SIGNAL"}),renderCell:({rssi:e})=>c.a.createElement(Kl,null,Object(Gl.a)(e)," (",Object(Hl.a)(e)," ",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];var Ql=function({items:e}){return c.a.createElement(Yl,null,c.a.createElement(ne.a,{items:e,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:$l,rowClassName:zl,columns:Jl,idField:"mac",rowHeight:30}),!e.length&&c.a.createElement(ql,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_UPLINKS_TABLE_EMPTY"})))};const ei=-67,ti=-90,ai=Object(l.c)(b.a)`
  margin-bottom: 16px;

  > span {
    text-transform: none;
  }
`,ni=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,ci=Object(l.c)(b.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,ri=Object(l.c)("div")`
  flex: 1;
  max-width: ${({width:e})=>e||"calc(50% - 6px)"};
`,li=Object(l.c)(u.a)`
  flex: 1;
  margin-right: 12px;
`,ii=Object(l.c)(b.a)`
  > div {
    + div {
      margin-left: 18px;
    }
  }
`,oi=Object(l.c)(da.a)`
  > div > div > div:first-child {
    display: none;
  }
`,Ei=Object(l.c)(p.Ab)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua08};
`,si=Object(l.c)(p.Bb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${({theme:e})=>e.motifPalette.aqua07};
`,mi=Object(l.c)(p.Cb)`
  padding-right: ${({theme:e})=>e.spacing["spacing-xs"]};
  color: ${Oe.a["purple-1"]};
`,di=[{value:"auto",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_AUTO"},{value:"high",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_HIGH"},{value:"medium",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_MEDIUM"},{value:"low",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_LOW"},{value:"custom",label:"DEVICE_PROPERTIES_AP_RADIO_POWER_OPTION_CUSTOM"}];class _i extends n.PureComponent{constructor(){super(...arguments),this.getRadioSubsection=e=>"DEVICE_PROPERTIES_SECTION_CONFIGURE_RADIOS_SUBSECTION_"+e.toUpperCase(),this.executePriorityUplinkAction=(e,t,a,n)=>{const{setPriorityUplink:c,unsetPriorityUplink:r}=this.props;return"SET"===e?c(t,a,n):r(t)},this.updateUplinkPriorities=()=>{const{values:e,activeItem:t}=this.props,{uplinkPriority1:a,uplinkPriority2:n}=e,{mesh_uplink_1:c,mesh_uplink_2:r}=t;if(!((c||"")!==a||(r||"")!==n))return;const l=!(!c&&!r)?"SET":"UNSET";this.executePriorityUplinkAction(l,t,a,n)},this.handleMeshingModeChange=e=>{const{setFieldValue:t}=this.props;e.target.checked&&t("meshingMode",e.target.name)},this.handlePriorityChange=(e,t)=>{const{values:a,setFieldValue:n}=this.props;let{uplinkPriority1:c,uplinkPriority2:r}=a;if("uplinkPriority1"===e&&!t.value&&r)return c=r,r="",n("uplinkPriority1",c),void n("uplinkPriority2",r);n(e,t.value)},this.handleEnableMeshingChange=()=>{const{setValues:e,values:t}=this.props,a=!t.meshingEnabled;e({...t,meshingEnabled:a,uplinkMeshEnable:a,radios:t.radios.map(e=>e.type===Bl.a.NA.type?{...e,vwire_enabled:a}:e)})},this.getSaveData=()=>{const{values:e,activeItem:t,dirty:a}=this.props;if(!a)return{};const n=Object(Pr.d)(t,v.WIFI_CAPS.HIDE_CH_WIDTH),c=Object(v.getRadios)(t),r=Object(v.isPureAp)(t);return{atf_enabled:e.atf_enabled||!1,mesh_sta_vap_enabled:r&&e.meshingEnabled&&("auto"===e.meshingMode||e.uplinkMeshEnable),radio_table:c.map(a=>{const{name:c,radio:r,antenna_gain:l,antenna_id:i,sens_level:o,sens_level_enabled:E}=a,{type:s,...m}=e.radios.find(e=>e.type===r&&e.name===c),d={...m,antenna_gain:l,antenna_id:i,sens_level_enabled:E,sens_level:o,radio:s};if("custom"!==m.tx_power_mode&&delete d.tx_power,d.antenna_id){const e=Object(v.getAntennaById)(t,d.antenna_id);e&&(d.antenna_gain=Object(v.getAntennaGainForRadioName)(e,c))}else delete d.antenna_id;return Object(v.isMinRssiStrictModeSupported)(a)||d.min_rssi_enabled||delete d.hard_noise_floor_enabled,d.min_rssi_enabled||delete d.min_rssi,d.sens_level_enabled||delete d.sens_level,n&&(delete d.channel,delete d.ht),r===Bl.a.NA.type&&(d.vwire_enabled=e.meshingEnabled&&("auto"===e.meshingMode||d.vwire_enabled)),d})}}}componentDidMount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a,resetForm:n}=this.props;e({radios:this.getSaveData}),t({radios:e=>{var t,a;this.updateUplinkPriorities();const{atf_enabled:c,mesh_uplink_1:r,mesh_uplink_2:l,mesh_sta_vap_enabled:i}=e,o=Object(v.getRadios)(e),E=null===(a=null===(t=o.find(({radio:e})=>e===Bl.a.NA.type))||void 0===t?void 0:t.vwire_enabled)||void 0===a||a,s=null==i||i,m=E||s,d=m&&E!==s||s&&(r||l)?"manual":"auto",_={radios:o.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,min_txpower:l,tx_power:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:n||"20",channel:c||"auto",tx_power_mode:r||"auto",tx_power:i||l||0,vwire_enabled:null!=o?o:a===Bl.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||ei,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:c||!1,meshingEnabled:m,meshingMode:d,uplinkMeshEnable:s,uplinkPriority1:r||"",uplinkPriority2:l||""};n({values:_})}}),a({radios:n})}componentWillUnmount(){const{tabGetDataFunction:e,tabSubmitFunction:t,tabResetFunction:a}=this.props;e({radios:null}),t({radios:null}),a({radios:null})}componentDidUpdate(){const{dirty:e,setFormDirty:t,setFormInvalid:a,errors:n}=this.props;t("radios",e),a("radios",!!Object.keys(n).length)}getRadioFields(e,t=!1){const{activeItem:a,countryChannels:n,mgmtSettings:r,isConnectivityMonitorEnabled:l,intl:i,isUbbXg:o,values:E,setFieldValue:s,priorityUplinkOptions:m,uplinkItems:d}=this.props,{name:_,radio:p,min_txpower:b,max_txpower:I}=e,{meshingEnabled:g,meshingMode:R,uplinkMeshEnable:C,uplinkPriority1:T,uplinkPriority2:h}=E,D=E.radios.findIndex(e=>e.type===p&&e.name===_),f=E.radios[D],P=Object(v.getRadioHtOptions)(a,e,n,i),S=Object(Pr.d)(a,v.WIFI_CAPS.HIDE_CH_WIDTH),A=r.outdoor_mode_enabled,j=Object(v.isMinRssiStrictModeSupported)(e)&&f.min_rssi_enabled,N=p===Bl.a.NA.type,y=Object(Pr.e)(a)&&N,L=Object(Ul.b)(n,i,a,p,_,f&&f.ht||20,{isOutdoorModeEnabled:A}),x=[{value:"auto",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})},...L];x.some(e=>e.value===f.channel)||s(`radios.${D}.channel`,"auto");const V="custom"===(null==f?void 0:f.tx_power_mode),w=Object(v.isPureAp)(a),F=!Object(v.isUBB)(a),M=[{value:"",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})}].concat(...m.filter(e=>!e.value||e.value!==h)),U=[{value:"",label:i.formatMessage({id:"COMMON_VALUE_AUTO"})}].concat(...m.filter(e=>!e.value||e.value!==T));return c.a.createElement(ni,{key:_,marginBottom:16},c.a.createElement(ai,{alignItems:"center"},p===Bl.a.NG.type&&c.a.createElement(Ei,{height:"20",width:"20"}),p===Bl.a.NA.type&&c.a.createElement(si,{height:"20",width:"23"}),p===Bl.a.AD.type&&c.a.createElement(mi,{height:"20",width:"20"}),c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:this.getRadioSubsection(p)}))),!S&&(o&&p===Bl.a.AD.type?c.a.createElement(ci,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${D}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})):c.a.createElement(ci,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ri,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH",name:`radios.${D}.ht`,type:"dropdown",options:P,translateLabel:!0,validated:!0,full:!0})),c.a.createElement(ri,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CHANNEL",name:`radios.${D}.channel`,type:"dropdown",options:x,translateLabel:!0,validated:!0,full:!0})))),!o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ci,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ri,{width:V?"":"100%"},c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER",name:`radios.${D}.tx_power_mode`,type:"dropdown",options:di,validated:!0,full:!0,translateLabel:!0,translateOptions:!0,disabled:Object(v.isUBB)(a)})),V&&c.a.createElement(ri,null,c.a.createElement(da.a,{label:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM",name:`radios.${D}.tx_power`,value:E.radios[D].tx_power,min:b,max:I,type:"number",full:!0}))),l&&N&&t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING",name:"meshingEnabled",type:"checkbox",onChange:this.handleEnableMeshingChange})),g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ci,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ii,null,c.a.createElement(kl.a,{id:"uplink-auto",checked:"auto"===R,name:"auto",onChange:this.handleMeshingModeChange},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_AUTO"})),c.a.createElement(kl.a,{id:"uplink-manual",checked:"manual"===R,name:"manual",onChange:this.handleMeshingModeChange},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_MANUAL"})))),"manual"===R&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_DOWNLINK",name:`radios.${D}.vwire_enabled`,type:"checkbox"})),w&&c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MESHING_UPLINK",name:"uplinkMeshEnable",type:"checkbox"})),w&&C&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ni,{marginBottom:24},c.a.createElement(oi,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:1},name:"uplinkPriority1",type:"dropdown",options:M,searchable:!0,value:T,onChange:e=>this.handlePriorityChange("uplinkPriority1",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),!!T&&c.a.createElement(ni,{marginBottom:24},c.a.createElement(oi,{full:!0,label:"DEVICE_PROPERTIES_LABEL_PRIORITY_NUMBER",translateLabel:!0,translateLabelValues:{number:2},name:"uplinkPriority2",type:"dropdown",options:U,searchable:!0,value:h,onChange:e=>this.handlePriorityChange("uplinkPriority2",e),placeholder:"COMMON_PLACEHOLDER_SELECT_DEVICE",translatePlaceholder:!0})),c.a.createElement(ni,{marginBottom:24},c.a.createElement(Ql,{items:d})))))),y&&c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_AIRTIME_FAIRNESS",name:"atf_enabled",type:"checkbox",disabled:Object(v.getDeviceModelFeature)(a,"atfDisabled")})),F&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ENABLE_MIN_RSSI",name:`radios.${D}.min_rssi_enabled`,type:"checkbox"})),f.min_rssi_enabled&&c.a.createElement(ni,{marginBottom:16},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_MIN_RSSI"})),c.a.createElement(Wl.a,{min:-ei,max:-ti,size:"large",value:-f.min_rssi,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(u.a,{color:"secondary"},"-",e),onChange:e=>{s(`radios.${D}.min_rssi`,-e.target.value)}})),j&&c.a.createElement(ci,{marginBottom:16,justifyContent:"space-between",alignItems:"center"},c.a.createElement(li,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER"})),c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_INTERFERENCE_BLOCKER",name:`radios.${D}.hard_noise_floor_enabled`,type:"checkbox"})))))}render(){const{activeItem:e}=this.props,t=Object(v.getRadios)(e).sort(v.sortRadios).reverse(),a=t.map(({radio:e})=>e===Bl.a.NA.type).lastIndexOf(!0);return t.map((e,t)=>{const n=t===a;return this.getRadioFields(e,n)})}}const ui=Object(ia.g)({mapPropsToValues:({activeItem:e})=>{var t,a;const{atf_enabled:n,mesh_uplink_1:c,mesh_uplink_2:r,mesh_sta_vap_enabled:l}=e,i=Object(v.getRadios)(e),o=null===(a=null===(t=i.find(({radio:e})=>e===Bl.a.NA.type))||void 0===t?void 0:t.vwire_enabled)||void 0===a||a,E=null==l||l,s=o||E,m=s&&o!==E||E&&(c||r)?"manual":"auto";return{radios:i.reduce((e,{name:t,radio:a,ht:n,channel:c,tx_power_mode:r,tx_power:l,min_txpower:i,vwire_enabled:o,min_rssi_enabled:E,min_rssi:s,hard_noise_floor_enabled:m})=>(e.push({name:t,type:a,ht:Number(n)||Number(v.DEFAULT_HT[a]),channel:c||"auto",tx_power_mode:r||"auto",tx_power:l||i||0,vwire_enabled:null!=o?o:a===Bl.a.NA.type,min_rssi_enabled:E||!1,min_rssi:+s||ei,hard_noise_floor_enabled:m||!1}),e),[]),atf_enabled:n||!1,meshingEnabled:s,meshingMode:m,uplinkMeshEnable:E,uplinkPriority1:c||"",uplinkPriority2:r||""}},validate:(e,{activeItem:{radio_table:t},intl:a})=>{const n={};return e.radios.forEach((e,c)=>{const{tx_power_mode:r,tx_power:l,name:i,type:o}=e;if("custom"===r){const e=t.find(e=>e.radio===o&&e.name===i);if(e){const{min_txpower:t,max_txpower:r}=e;(l<t||l>r)&&(n.radios||(n.radios=[]),n.radios[c]={tx_power:a.formatMessage({id:"DEVICE_VALIDATION_HINT_RANGE"},{min:t,max:r})})}}}),n},handleSubmit:()=>{}}),pi={createToast:ut.c,tabGetDataFunction:_.h,tabSubmitFunction:_.j,tabResetFunction:_.i,setPriorityUplink:v.setPriorityUplink,unsetPriorityUplink:v.unsetPriorityUplink};var Oi=Object(st.compose)(Object(o.connect)((e,{activeItem:t})=>({countryChannels:Object(Ul.d)(e),mgmtSettings:Object(Dn.selectMgmtSettings)(e),priorityUplinkOptions:Object(d.e)(e),uplinkItems:Object(v.selectDeviceEnhancedUplinkTable)(e,t)}),pi),O.f,ui)(_i);const bi=Object(l.c)(vt.a)`
  margin-right: 4px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0;
`,Ii=e=>l.a`
  background-color: ${e};
`;var gi=({ChannelBars:e})=>c.a.createElement(c.a.Fragment,null,e,c.a.createElement(b.a,{justifyContent:"flex-start"},c.a.createElement(b.a,{flex:"0 1 27%"},c.a.createElement(bi,{className:Ii(In.n.blue)}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_RX_FRAMES"})),c.a.createElement(b.a,{flex:"0 1 27%"},c.a.createElement(bi,{className:Ii(In.j)}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_TX_FRAMES"})),c.a.createElement(b.a,{flex:"0 1 27%"},c.a.createElement(bi,{className:Ii(In.k)}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})))),Ri=a(32);const Ci=e=>Object(Pt.q)("spectrumScan","/api/s/{site}/stat/spectrum-scan/"+e,e,void 0,{idField:"mac"}),Ti=(e,t)=>Object(tt.a)(((e,t)=>Object(Pt.t)(Ci(t),e.models))(e,t),"data",[]);var hi=a(813),vi=a(458);const Di=[{from:-96,to:-92,color:"#fda839"},{from:-92,to:-88,color:"#fda839"},{from:-88,to:-84,color:"#fda129"},{from:-84,to:-80,color:"#fd9a19"},{from:-80,to:-76,color:"#fd930b"},{from:-76,to:-72,color:"#f87f0c"},{from:-72,to:-68,color:"#f26a13"},{from:-68,to:-64,color:"#f26a13"},{from:-64,to:-60,color:"#ec5619"},{from:-60,to:-56,color:"#d44515"},{from:-56,to:-52,color:"#c64013"},{from:-52,to:-48,color:"#bf3d12"}],fi={ng:16,na:42},Pi={ng:8,na:0},Si={ng:[{from:2400,to:2500}],na:[{from:5170,to:5330},{from:5490,to:5730},{from:5735,to:5850}]},Ai={domain:[0,23.3,35,46.6,58.3,100],values:["#fda93a","#fda93a","#fd9208","#ea4e1a","#bf3d12","#bf3d12"]},ji={20:{domain:[0,6.2,28.1,49.9,71.9,100],values:Ai.values},40:{domain:[0,1.6,24.6,47.4,70.5,100],values:Ai.values},80:{domain:[23.3,35,46.6,58.3,100],values:Ai.values.slice(1)},160:{domain:[23.3,35,46.6,58.3,100],values:Ai.values.slice(1)}},Ni=Object(l.c)(u.a)`
  margin-bottom: 16px;
  font-weight: bold;
`,yi=Object(l.c)(b.a)`
  margin-bottom: 56px;
`,Li=Object(l.c)("div")`
  padding: 21px 0;
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.legendText};
  position: relative;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
`,xi=Object(l.c)("div")`
  padding: 21px 0;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  opacity: 0;
  visibility: hidden;
`,Vi=(Object(l.c)(b.a)`
  padding: 21px 0;
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.legendText};
  position: relative;
  width: ${({width:e})=>e};
`,Object(l.c)("div")`
  height: 100%;
  width: 0;
  left: -1px;
  top: 0;
  position: absolute;
  border-left: 1px dashed ${({theme:e})=>e.colors.legendText};
  margin-left: ${({marginLeft:e})=>e}%;
`);var wi=({count:e,offset:t})=>c.a.createElement(c.a.Fragment,null,[...Array(e)].map((e,a)=>c.a.createElement(Vi,{key:"divider-"+a.toString(),marginLeft:(a+1)*t})));const Fi=Object(l.c)("div")`
  height: 100%;
  width: 0;
  left: 0;
  top: calc(100% + 4px);
  position: absolute;
  margin-left: ${({marginLeft:e})=>e};
  font-size: 10px;
`,Mi=Object(l.c)("div")`
  transform: rotate(90deg);
`;var Ui=({count:e,offset:t,start:a,end:n,step:r})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(Fi,{key:"start-legend",marginLeft:"4px"},c.a.createElement(Mi,null,a)),[...Array(e)].map((e,n)=>c.a.createElement(Fi,{key:"divider-legend-"+n.toString(),marginLeft:(n+1)*t+"%"},c.a.createElement(Mi,null,a+(n+1)*r))),c.a.createElement(Fi,{key:"end-legend",marginLeft:"calc(100% - 4px)"},c.a.createElement(Mi,null,n))),Bi=a(2262),ki=a(295),Wi=a.n(ki),Hi=a(73);const Gi=Object(l.c)("div")`
  margin: 16px 0;
`,Yi=Object(l.c)(b.a)`
  height: 50px;
`,$i=Object(l.c)("div")`
  margin: 1px 0 4px;
  height: 2px;
`,zi=e=>l.a`
  background: linear-gradient(
    90deg,
    ${ji[e].values.map((t,a)=>`${t} ${ji[e].domain[a]}%`).join(",")}
  );
`,Ki=Object(l.c)("div")`
  margin: 0 0.5px;
  width: ${({width:e})=>e};
  position: relative;
  background: ${({motif:e})=>Oe.a["dark"===e?"grey-1":"white-3"]};
`,Xi=Object(l.c)("div")`
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
  position: absolute;
  bottom: 0;
  border-radius: 1px;
`;var qi=Object(Hi.a)(({data:e,width:t,motif:a})=>{if(!e||!e.length)return null;const n=e.length;return c.a.createElement(Gi,null,c.a.createElement(Yi,null,e.map((e,r)=>{const l=r/n*100,i=Wi.a.scale(ji[t].values).domain(ji[t].domain)(l).css();return c.a.createElement(Ki,{width:n+"%",key:"rssi-bar-"+(r+1),motif:a},c.a.createElement(Xi,{height:e+"%",background:i}))})),c.a.createElement($i,{className:zi(t)}))});const Zi=Object(l.c)(ma.StatisticsIcon)`
  margin-top: -4px;
  margin-right: 4px;
`,Ji=Object(l.c)("div")`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  padding: 8px 0;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Qi=Object(l.c)("div")`
  text-transform: uppercase;
  margin: 16px 0 8px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,eo=Object(l.c)(b.a)`
  margin-bottom: 4px;
`,to=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
  min-width: 50%;
`,ao=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  min-width: 50%;
`;var no=Object(O.f)(({isAc:e=!1,spectrumEntry:t,data:a,radioType:n,width:r,intl:l})=>{if(!a)return null;const{interference:i,utilization:o,rssi_histogram:E}=t||{},{lowerFrequency:s,upperFrequency:m,subChannels:d,channel:_}=a,u=`${s} - ${m} ${l.formatMessage({id:"COMMON_UNIT_MHZ"})}`,p=`DEVICE_PROPERTIES_SECTION_RADIOS_SUBSECTION_${n.toUpperCase()}${e&&"na"===n?"_AC":""}`;return c.a.createElement("div",null,c.a.createElement(Ji,null,c.a.createElement(Zi,null),c.a.createElement(O.c,{id:"DEVICE_HEADER_CHANNEL"})," ",_),c.a.createElement(Qi,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"})),c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_RADIO"})),c.a.createElement(ao,null,c.a.createElement(O.c,{id:p}))),c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_WIDTH"})),c.a.createElement(ao,null,r," ",c.a.createElement(O.c,{id:"COMMON_UNIT_MHZ"}))),+r>20&&c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_USED_CHANNELS"})),c.a.createElement(ao,null,d.join(", "))),c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_FREQUENCY_RANGE"})),c.a.createElement(ao,null,u)),!!t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Qi,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_RF_SCAN_DETAILS"})),c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_HEADER_UTILIZATION"})),c.a.createElement(ao,null,o,"%")),c.a.createElement(eo,null,c.a.createElement(to,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_INTERFERENCE"})),c.a.createElement(ao,null,i," ",c.a.createElement(O.c,{id:"COMMON_UNIT_DBM"}))),E&&E.length&&c.a.createElement(qi,{data:E,width:r})))});const co=Object(l.c)(fa.a)`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
  top: ${({top:e})=>e};
  left: ${({left:e})=>e};
  border: 1px solid ${({theme:e})=>e.motifPalette.text02};
  border-radius: 3px;
  position: absolute;
  background: ${({theme:e})=>e.motifPalette.hoverUi01};
  z-index: 3;
  overflow: hidden;
`,ro=Object(l.c)("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({height:e})=>e};
  background-color: ${({background:e})=>e};
`,lo=l.a`
  width: 240px !important;
  transform: translateX(18px) !important;
`;var io=({spectrumData:e,channels:t,channelWidth:a,rowCount:n,lowerFrequency:r,singleFrqeuencyWidth:l,type:i,className:o=null})=>c.a.createElement(c.a.Fragment,null,t.map((t,E)=>{const s=e&&e.spectrum_table&&(e=>{const t=e.length,a=t&&e.reduce((e,t)=>(e.interference+=t.interference,e.utilization+=t.utilization,e.rssi_histogram&&t.rssi_histogram&&(e.rssi_histogram=e.rssi_histogram.map((e,a)=>e+(t.rssi_histogram&&t.rssi_histogram[a]||0))),e));return a&&a.interference&&(a.interference=Math.round(a.interference/t),a.utilization=Math.round(a.utilization/t),a.rssi_histogram=a.rssi_histogram&&a.rssi_histogram.map(e=>Math.round(e/t))),a})(e.spectrum_table.filter(e=>e.width===parseInt(a,10)&&t.subChannels.includes(e.channel))),m=s&&s.utilization||0,d=s&&s.interference||-96,_=e&&(Di.find(e=>Object(Bi.a)(d,e.from,e.to))||{}).color||"transparent",u=t.upperFrequency-t.lowerFrequency,p=21+(fi[i]+Pi[i])*(E%n),O=(t.lowerFrequency-r)*l;return c.a.createElement(co,{key:`rf-${i}-${a}-channel-${t.subChannels.toString()}`,width:l*u+"%",height:fi[i]+"px",top:p+"px",left:O+"%",className:o,message:c.a.createElement(no,{width:a,data:t,spectrumEntry:s,radioType:i}),position:"bottomRight",tooltipClassName:lo,portal:!0},c.a.createElement(ro,{height:m+"%",background:_}))}));var oo=c.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a})=>{const n=e.scans&&e.scans.find(e=>e.radio===Bl.a.NG.type),r=[20];Object(v.isHt40Supported)(t,a,Bl.a.NG.type)&&r.push(40);const l=r.reduce((e,n)=>{const c=Object(Ul.c)(t,a,Bl.a.NG.type,n);return e[n]=Object.entries(v.WIFI_CHANNELS.ng[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),i=10*Math.floor(Math.min(l[20][0].lowerFrequency,l[40][0].lowerFrequency)/10),o=10*Math.ceil(Math.max(l[20][l[20].length-1].upperFrequency,l[40][l[40].length-1].upperFrequency)/10),E=o-i,s=E/10-1,m=100/(s+1),d=100/E;return c.a.createElement("div",null,Object.keys(l).map(e=>{const t=l[e],a="20"===e?5:10,r=Math.min(a,t.length)*(fi.ng+Pi.ng)-Pi.ng+42;return c.a.createElement("div",{key:"channel-width-"+e},c.a.createElement(Ni,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:e}})),c.a.createElement(yi,null,Si.ng.map(l=>c.a.createElement(Li,{key:`widths-${l.from}-${l.to}`,width:"100%",height:r+"px"},c.a.createElement(wi,{count:s,offset:m}),c.a.createElement(Ui,{count:s,offset:m,start:i,end:o,step:10}),c.a.createElement(io,{spectrumData:n,channels:t,channelWidth:e,rowCount:a,lowerFrequency:i,singleFrqeuencyWidth:d,type:Bl.a.NG.type})))))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(vi.a)(Object(tt.a)(e,a),Object(tt.a)(t,a))));const Eo=l.a`
  + div {
    border-left: none;
  }
`;var so=c.a.memo(({spectrumScan:e,countryChannels:t,deviceData:a,intl:n})=>{const r=e.scans&&e.scans.find(e=>e.radio===Bl.a.NA.type),l=[20];Object(v.isHt40Supported)(t,a,Bl.a.NA.type)&&l.push(40),Object(v.isHt80Supported)(t,a)&&l.push(80),Object(v.isHt160Supported)(t,n,a,"rai0")&&l.push(160);const i=l.reduce((e,n)=>{const c=Object(Ul.c)(t,a,Bl.a.NA.type,n);return e[n]=Object.entries(v.WIFI_CHANNELS.na[n]).reduce((e,[t,a])=>(a.subChannels.some(e=>c.includes(e))&&e.push({...a,channel:+t}),e),[]),e},{}),o=Object(wt.a)(i[20],e=>Si.na.findIndex(t=>Object(Bi.a)(e.centerFrequency,t.from,t.to))),E=o[1]&&o[1].length,s=o[2]&&o[2].length,m=100/(i[20].length+(E?1:0)+(s?1:0));return c.a.createElement("div",null,Object.keys(i).map(e=>{const t=i[e],a=+e;return c.a.createElement("div",{key:"channel-width-"+e},c.a.createElement(Ni,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_MHZ_CHANNELS",values:{frequency:a}})),c.a.createElement(yi,{justifyContent:"space-between"},Si.na.map((a,n)=>{const l=t.filter(({centerFrequency:e})=>Object(Bi.a)(e,a.from,a.to)),i=o[n]&&o[n].length||0,E=i*m,s=100/i/20,d=20*s*4,_=Math.floor((i-1)/4);return l.length?c.a.createElement(Li,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+fi.na+"px"},c.a.createElement(wi,{count:_,offset:d}),c.a.createElement(Ui,{count:_,offset:d,start:a.from,end:a.to,step:80}),c.a.createElement(io,{spectrumData:r,channels:l,channelWidth:e,rowCount:1,lowerFrequency:a.from,singleFrqeuencyWidth:s,type:Bl.a.NA.type,className:Eo})):c.a.createElement(xi,{key:`widths-${a.from}-${a.to}`,width:E+"%",height:42+fi.na+"px"})})))}))},(e,t)=>["spectrumScan","countryChannels","deviceData.radio_table"].some(a=>!Object(vi.a)(Object(tt.a)(e,a),Object(tt.a)(t,a))));const mo=Object(l.c)(yn.a)`
  width: 100% !important;
  margin-bottom: 16px;
`,_o=Object(l.c)(b.a)`
  margin-bottom: 32px;
`,uo=Object(l.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  color: ${({theme:e})=>e.motifPalette.text02};
`,po=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 0 0 8px;
`,Oo=Object(l.c)(u.a)`
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  display: block;
`,bo=Object(l.c)("div")`
  width: ${({width:e})=>e}%;
  background-color: ${({background:e})=>e};
  height: 7px;
`,Io=Object(l.c)("div")`
  position: relative;
  font-size: 10px;
  height: 14px;
`,go=Object(l.c)(b.a)`
  margin: 4px 0;
`,Ro=Object(l.c)("div")`
  padding: 4px 0;
  font-size: 10px;
`,Co=Object(l.c)("div")`
  position: absolute;
  ${({right:e})=>e&&`right: ${e};`}
  ${({left:e})=>e&&`left: ${e};`}
`;var To=Object(st.compose)(Object(o.connect)((e,{activeItem:{mac:t}})=>({spectrumScan:Ti(e,t),countryChannels:Object(Ul.d)(e)}),{fetchSpectrumScan:Ci,confirm:cn.a,scanDeviceRFEnvironments:v.scanDeviceRFEnvironments,hideModal:Ya.e}),Object(pt.c)(({activeItem:{mac:e},fetchSpectrumScan:t})=>t(e)),O.f)(({activeItem:e,confirm:t,scanDeviceRFEnvironments:a,hideModal:r,spectrumScan:l,countryChannels:i,intl:E})=>{const s=Object(o.useDispatch)(),m=Object(n.useMemo)(()=>Object(v.getRadios)(e),[e]),d=Object(n.useMemo)(()=>null==m?void 0:m.find(e=>e.radio===Bl.a.NG.type),[m]),_=Object(n.useMemo)(()=>null==m?void 0:m.find(e=>e.radio===Bl.a.NA.type),[m]),[u,p]=Object(n.useState)(d?Bl.a.NG.type:Bl.a.NA.type),b=Object(hi.a)(null==e?void 0:e.spectrum_scanning);Object(n.useEffect)(()=>{b&&!(null==e?void 0:e.spectrum_scanning)&&s(Ci(null==e?void 0:e.mac))},[null==e?void 0:e.mac,null==e?void 0:e.spectrum_scanning,b,s]);const I=Object(n.useCallback)((e,t)=>{p(t)},[p]),g=Object(n.useCallback)(()=>{t({message:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_MESSAGE",title:"DEVICE_PROPERTIES_RF_ENVIRONMENT_START_SCAN_CONFIRM_TITLE",onConfirm:()=>{a(e),r()}})},[e,t,a,r]),R=Object(n.useMemo)(()=>"wire"===Object(tt.a)(e,"uplink.type",""),[e]),C=Object(n.useMemo)(()=>{var e;return null===(e=null==l?void 0:l.scans)||void 0===e?void 0:e.find(({radio:e})=>e===u)},[null==l?void 0:l.scans,u]),T=Object(n.useMemo)(()=>[...d?[{label:E.formatMessage({id:"DEVICE_PROPERTIES_RF_2G_RF_ENV"}),value:Bl.a.NG.type}]:[],..._?[{label:E.formatMessage({id:"DEVICE_PROPERTIES_RF_5G_RF_ENV"}),value:Bl.a.NA.type}]:[]],[d,_,E]),h=Object(n.useMemo)(()=>(null==e?void 0:e.spectrum_scanning)?c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_IN_PROGRESS"}):(null==C?void 0:C.spectrum_table_time)?c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_TIME_AGO",values:{time:Object(Ri.distanceInWordsToNow)(1e3*C.spectrum_table_time)}}):c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_NEVER_SCANNED"}),[null==e?void 0:e.spectrum_scanning,null==C?void 0:C.spectrum_table_time]);return R&&(null==T?void 0:T.length)?c.a.createElement(c.a.Fragment,null,c.a.createElement(mo,{id:"rf_type",value:u,options:T,onChange:I,inputProps:{full:!0}}),c.a.createElement(_o,{justifyContent:"space-between"},c.a.createElement(uo,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_SCAN_STATUS_LAST_SCAN"})," ",h),c.a.createElement(po,{variant:"link",disabled:e.spectrum_scanning,onClick:g},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_ACTION_START_SCAN"}))),u===Bl.a.NA.type?c.a.createElement(so,{deviceData:e,spectrumScan:l,countryChannels:i,intl:E}):c.a.createElement(oo,{deviceData:e,spectrumScan:l,countryChannels:i}),c.a.createElement(Oo,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_RF_LEGEND"})),c.a.createElement(Io,null,c.a.createElement(Co,null,"-96"),c.a.createElement(Co,{left:"30%"},"-80"),c.a.createElement(Co,{left:"64%"},"-64"),c.a.createElement(Co,{right:"0"},"-48 ",c.a.createElement(O.c,{id:"COMMON_UNIT_DBM"}))),c.a.createElement(go,{justifyContent:"space-between"},Di.map(({color:e,from:t,to:a})=>c.a.createElement(bo,{width:7.5,background:e,key:`dbm-${t}-${a}`}))),c.a.createElement(Ro,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_LEGEND_UTILIZATION"}))):c.a.createElement(_o,{justifyContent:"space-between"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RF_ENVIRONMENT_DISABLED_MESSAGE"}))});const ho=Object(l.c)(b.a)`
  margin-bottom: 16px;
`,vo=Object(l.c)(b.a)`
  > div {
    + div {
      margin-left: 18px;
    }
  }
`;var Do=Object(ia.g)({mapPropsToValues:({activeItem:{bandsteering_mode:e}={}})=>({bandsteering_mode:e||Me.BandsteeringMode.OFF}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({setFormDirty:e,dirty:t,values:a,resetForm:r,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(n.useEffect)(()=>{e("bandSteering",t)},[e,t]),Object(n.useEffect)(()=>(i(Object(_.h)({bandSteering:()=>a})),i(Object(_.j)({bandSteering:()=>r({values:a})})),i(Object(_.i)({bandSteering:r})),()=>{i(Object(_.h)({bandSteering:null})),i(Object(_.j)({bandSteering:null})),i(Object(_.i)({bandSteering:null}))}),[i,r,a]);const E=Object(n.useCallback)(e=>e.target.checked&&l("bandsteering_mode",e.target.name),[l]);return c.a.createElement(ho,null,c.a.createElement(vo,null,c.a.createElement(kl.a,{id:"band-steer-off",checked:a.bandsteering_mode===Me.BandsteeringMode.OFF,name:Me.BandsteeringMode.OFF,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_OFF"})),c.a.createElement(kl.a,{id:"band-steer-prefer-5g",checked:a.bandsteering_mode===Me.BandsteeringMode.PREFER_5G,name:Me.BandsteeringMode.PREFER_5G,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_PREFER_5G"})),c.a.createElement(kl.a,{id:"band-steer-equal",checked:a.bandsteering_mode===Me.BandsteeringMode.EQUAL,name:Me.BandsteeringMode.EQUAL,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_BAND_STEER_BALANCED"}))))}),fo=a(2830),Po=a(2010);const So=Object(l.c)("tr")`
  white-space: nowrap;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`,Ao=Object(l.c)("td")`
  vertical-align: top;
`,jo=Object(l.c)("td")`
  padding-left: 12px;
  padding-bottom: 2px;
  text-align: right;
  vertical-align: top;
`;var No=({device:e,radio:t,channelUtilization:a})=>{const{totalPackets:n,totalBytes:r,droppedPercentage:l,retryPercentage:i}=Object(v.getApRadioStats)(e,t,"rx"),{totalPackets:o,totalBytes:E,droppedPercentage:s,retryPercentage:m}=Object(v.getApRadioStats)(e,t,"tx");return c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement(So,null,c.a.createElement(Ao,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),c.a.createElement(jo,null,c.a.createElement(u.a,{color:"secondary"},o," / ",E))),c.a.createElement(So,null,c.a.createElement(Ao,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),c.a.createElement(jo,null,c.a.createElement(u.a,{color:"secondary"},n," / ",r))),c.a.createElement(So,null,c.a.createElement(Ao,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),c.a.createElement(jo,null,c.a.createElement(u.a,{color:"secondary"},m,"% / ",s,"%"))),c.a.createElement(So,null,c.a.createElement(Ao,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),c.a.createElement(jo,null,c.a.createElement(u.a,{color:"secondary"},i,"% / ",l,"%"))),a&&c.a.createElement(So,null,c.a.createElement(Ao,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),c.a.createElement(jo,null,c.a.createElement(u.a,{color:"secondary"},`${a.total}% / ${a.selfRx}% / ${a.selfTx}%`)))))};const yo=Object(l.c)("div")`
  &:first-child {
    margin-bottom: 24px;
  }
`,Lo=Object(l.c)("div")`
  flex: 1;
`,xo=Object(l.c)("span")`
  display: inline-block;
  margin: -2px 6px 0;
  width: 8px;
  height: 1px;
  vertical-align: middle;
  background: ${({theme:e})=>e.motifPalette.text02};
`,Vo=Object(l.c)(u.a)`
  margin-left: 4px;
`,wo=Object(l.c)("div")`
  width: 100%;
  margin-bottom: 16px;
`,Fo=(e,t)=>{const a="DEVICE_RADIO_PROTOCOL_"+t.toUpperCase();if(t===Ml.b.NA){if(Object(v.isAxRadio)(e,t))return a.concat("_AX");if(Object(v.isAcRadio)(e,t))return a.concat("_AC")}return a};var Mo=e=>((null==e?void 0:e.radio_table)||[]).reduce((t,a)=>{const n=Object(v.getRadioChannelUtilization)(e,a),{radio:r}=a;if(n){const{selfRx:l,selfTx:i,interference:o,total:E}=n;t.push(c.a.createElement(yo,{key:a.name},c.a.createElement(re.g,{justifyContent:"space-between"},c.a.createElement(Lo,null,c.a.createElement(Po.a,{device:e,radio:a,hideDfsInfo:!0,hideHtInfo:!0,hidePowerInfo:!0,hideChannelTooltip:!0,textColor:"primary",textSize:"caption",textWeight:"bold"}),c.a.createElement(xo,null),c.a.createElement(u.a,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:Fo(e,r)}))),c.a.createElement(H.a,{color:"secondary",type:"percent",input:Math.min(E,100)/100}),c.a.createElement(Vo,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_UTILIZED"}))),c.a.createElement(wo,null,c.a.createElement(fa.a,{message:c.a.createElement(No,{device:e,radio:a,channelUtilization:n})},c.a.createElement(fo.a,{items:[{color:In.n.blue,value:l},{color:In.j,value:i},{color:In.k,value:o}],height:10})))))}return t},[]);const Uo=Object(l.c)(b.a)`
  width: 100%;
  padding: 10px 30px;
`;class Bo extends n.PureComponent{constructor(){super(...arguments),this.onFormSubmit=()=>{const{getFormData:e,onFormSubmit:t,activeItem:a,updateDeviceWithIdEndpoint:n,intl:c}=this.props,r=[],l=Object.entries(e).reduce((e,[t,a])=>{if("function"==typeof a){const n=a();if("object"==typeof n&&Object.keys(n).length)return r.push(c.formatMessage({id:"DEVICE_HEADER_"+Object(Fl.a)(t).toUpperCase()})),{...e,...n}}return e},{});n(l,a._id,a.mac,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:r.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:r.join(", ")}},extend:!0}).then(({data:e=[l]})=>{Object.values(t).forEach(t=>{"function"==typeof t&&t(e[0])})})},this.onFormCancel=()=>{const{onFormCancel:e}=this.props;Object.values(e).forEach(e=>{"function"==typeof e&&e()})},this.getRadioProtocol=(e,t)=>{const a="DEVICE_RADIO_PROTOCOL_"+t.toUpperCase();if(t===Ml.b.NA){if(Object(v.isAxRadio)(e,t))return a.concat("_AX");if(Object(v.isAcRadio)(e,t))return a.concat("_AC")}return a}}render(){const{activeItem:e,isDirty:t,isInvalid:a,setFormDirty:n,setFormInvalid:r,isConnectivityMonitorEnabled:l}=this.props,i=Mo(e),o=[{id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(Oi,{activeItem:e,setFormDirty:n,setFormInvalid:r,isConnectivityMonitorEnabled:l})}];return Object(Pr.f)(e)&&o.push({id:"bandsteer",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_BAND_STEERING"}),renderContent:()=>c.a.createElement(Do,{activeItem:e,setFormDirty:n})}),i.length&&o.push({id:"channelUsage",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>c.a.createElement(gi,{ChannelBars:i})}),Object(v.isDeviceConnected)(e)&&Object(Pr.d)(e,v.WIFI_CAPS.RF_SCAN)&&o.push({id:"rfEvironment",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_RF_ENVIRONMENT"}),renderContent:()=>c.a.createElement(To,{activeItem:e})}),c.a.createElement(c.a.Fragment,null,c.a.createElement(Uo,{alignItems:"center",flexDirection:"column",flex:"1 1 85%",key:"ap-radios"},c.a.createElement(k.a,{variant:"tertiary",items:o,renderOnlyExpandedContent:!0,multiOpen:!0})),c.a.createElement(Ma,{isDirty:t,isInvalid:a,onFormSubmit:this.onFormSubmit,onFormCancel:this.onFormCancel}))}}var ko=Object(st.compose)(Object(o.connect)((e,{activeItem:t})=>({getFormData:na(e),onFormSubmit:ca(e),onFormCancel:ra(e),isConnectivityMonitorEnabled:Object(Dn.selectConnectivityMonitorEnabled)(e)&&Object(Pr.d)(t,v.WIFI_CAPS.VWIRE)}),{updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint}),la(["radios","bandsteer"]),O.f)(Bo);const Wo=Object(l.c)(fa.a,{shouldForwardProp:e=>!["cellSize","isEnabled","marginSize"].includes(e)})`
  width: ${({cellSize:e})=>e||"20px"};
  height: ${({cellSize:e})=>e||"20px"};
  align-items: center;
  background-color: ${({isEnabled:e,theme:t})=>e?t.motifPalette.success:Oe.a["grey-4"]};
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;

  &:not(:first-child) {
    margin-left: ${({marginSize:e})=>e||"10px"};
  }

  div:last-child {
    right: -15px;
  }
`,Ho=l.a`
  margin-left: 15px;
`,Go=Object(l.c)("div",{shouldForwardProp:e=>"rotateIcon"!==e})`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transform: rotate(${({rotateIcon:e})=>e?"-90deg":0});
    max-width: 70%;
    max-height: 70%;
  }
`,Yo=Object(l.c)(p.jc)`
  max-width: 100% !important;
  max-height: 100% !important;
`,$o=Object(l.c)(b.a,{shouldForwardProp:e=>"isPowerMeterSupported"!==e})`
  width: ${({isPowerMeterSupported:e})=>e?"134px":"100px"};
`;var zo=({cellData:e,marginSize:t,cellSize:a,rotateIcon:n,tooltipPosition:l="bottomRight"})=>{const i=Object(r.k)(),o=Object(Pr.o)(e,"POWER_METER");return c.a.createElement(Wo,{isEnabled:e.relay_state,tooltipClassName:Ho,marginSize:t,cellSize:a,onClick:()=>i.push("outlets"),message:o&&e.outletType===v.OutletType.STANDARD?c.a.createElement($o,{flexDirection:"column",justifyContent:"space-between",isPowerMeterSupported:!0},c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},e.index)),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.outlet_power||0).toFixed(2)}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_ENERGY"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},"0.00 ",c.a.createElement(O.c,{id:"COMMON_UNIT_KWH"}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.outlet_current||0).toFixed(2)}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.outlet_voltage||0).toFixed(2)}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},Number(e.outlet_power_factor||0).toFixed(2)))):c.a.createElement($o,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},e.index)),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_ENABLED"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},e.cycle_enabled&&c.a.createElement(p.w,{size:"small"}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},e.relay_state&&c.a.createElement(p.w,{size:"small"})))),position:l,portal:!0},c.a.createElement(Go,{rotateIcon:n},"usb"===e.outletType?c.a.createElement(Yo,null):c.a.createElement(p.ob,null)))};const Ko=Object(l.c)("div")`
  padding-left: 10px;
`,Xo=Object(l.c)("div")`
  table {
    th {
      text-transform: none;
    }

    tr {
      cursor: pointer;
    }
  }
`,qo=Object(l.c)(p.h)`
  position: absolute;
  right: 8px;
  color: inherit;
`;var Zo=c.a.memo((function({deviceData:e,deviceData:{outlet_table:t},hidePorts:a}){const l=Object(r.k)(),i=Object(v.getOutletNumbers)(e),{outletsDiagram:o,primaryOutletGroupCount:E}=Object(v.getDeviceSpecs)(e),s=t.some(e=>Object(Pr.o)(e,"POWER_METER")),m=Object(n.useMemo)(()=>(e=>[{id:"name",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})},...e?[{id:"power",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_POWER"}),renderCell:({outlet_power:e})=>e?Number(e).toFixed(2):"-"}]:[],{id:"outletStatus",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"}),renderCell:e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{alignItems:"center"},e.portStatus?e.portStatus:c.a.createElement(c.a.Fragment,null,c.a.createElement(zo,{cellData:e,rotateIcon:e.rotateIcon,tooltipPosition:"topRight"}),c.a.createElement(Ko,null,c.a.createElement(O.c,{id:e.relay_state?"DEVICE_OUTLET_STATE_ENABLED":"DEVICE_OUTLET_STATE_DISABLED"})))),c.a.createElement(qo,{size:"small"}))}])(s),[s]),d=o?Object(v.determineRowLayoutsFromOutletDiagramConfig)(o,e):Object(v.determineRowLayoutsFromOutletConfig)(E,e),_=Object(n.useMemo)(()=>er(e,[],{position:"topRight"}),[e]),u=Object(n.useMemo)(()=>[...d.flat().filter(e=>!!e).sort(({outletNumber:e},{outletNumber:t})=>e-t),...a?[]:_],[a,_,d]).map((t,a)=>{const n=Object(v.getActiveOutletInfo)(e,t.outletNumber-1);return{...t.portStatus?t:n,id:t.portStatus?"port-"+t.id:t.outletNumber+a,outletType:t.portStatus?null:Object(v.getOutletTypeByNumber)(i,t.outletNumber),rotateIcon:null==t?void 0:t.rotateIcon}}),p=Object(n.useCallback)(e=>l.push(e.index?"outlets/"+e.index:"outlets/port/"+e.port_idx),[l]);return c.a.createElement(Xo,null,c.a.createElement(ne.a,{columns:m,rowHeight:35,disableColumnFilters:!0,items:u,hideCellOverflow:!1,onRowClick:p}))}),({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);const Jo=Object(l.c)("div")`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-gap: 0 15px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,Qo=Object(l.c)("div")`
  padding-bottom: 6px;
  padding-top: 6px;
  font-size: 9px;
  color: ${({theme:e})=>e.motifPalette.text02};
  display: flex;
  align-items: center;
  flex: 0 0 25%;
  max-width: 25%;

  > span {
    white-space: nowrap;
    margin-left: 4px;
  }
`,eE=Object(l.c)(vt.a,{shouldForwardProp:e=>"background"!==e})`
  background-color: ${e=>e.background};
  border-radius: 1px;
`;var tE=c.a.memo(({isForDiagram:e,deviceData:t})=>{const a=Object(xc.Td)(t),n=Object(xc.X)(t),r=Object(Wn.l)();return c.a.createElement(Jo,null,c.a.createElement(Qo,null,c.a.createElement(eE,{variant:"success"}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_ENABLED"}))),c.a.createElement(Qo,null,c.a.createElement(eE,{background:r.motifPalette.neutral04}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_OUTLET_STATE_DISABLED"}))),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Qo,null,c.a.createElement(eE,{variant:"warning"}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_MBPS",values:{speed:"100/10"}}))),c.a.createElement(Qo,null,c.a.createElement(eE,{background:r.motifPalette.neutral07}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))),n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Qo,null,c.a.createElement(p.zb,{width:12,height:12}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_OUTLET_STATE_DELIVERING"}))),c.a.createElement(Qo,null,c.a.createElement(eE,{background:r.motifPalette.neutral07}),c.a.createElement(u.a,{size:"label",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PORT_STATE_DISCONNECTED"})))))});const aE=Object(l.c)(b.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,nE=Object(l.c)(b.a)`
  &:not(:first-child) {
    margin-top: 10px;
  }
`,cE=Object(l.c)(p.cb)`
  margin-right: 12px;
`,rE=Object(l.c)("div")`
  width: 5px;
`;var lE=c.a.memo(({deviceData:e})=>{const{outletsDiagram:t,primaryOutletGroupCount:a}=Object(v.getDeviceSpecs)(e),n=Object(v.isUspPduPro)(e),r=t?Object(v.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(v.determineRowLayoutsFromOutletConfig)(a,e),l=Object(dr.a)(r.map(e=>e.length));let i=l>10?"3px":"10px";const o=l>10?"19px":"20px";return r&&0!==r.length?c.a.createElement(c.a.Fragment,null,r.map((t,a)=>c.a.createElement(nE,{"align-items":"flex-end",key:"OutletLayoutRow-"+(a+1)},t.map((t,r)=>{if(!t)return c.a.createElement(rE,{key:`OutletSpacer-${a+1}-${r+1}`});const l=`Outlet-${a+1}-${r+1}`,E=Object(v.getActiveOutletInfo)(e,void 0,t.outletNumber),s=t&&E&&{outletType:t.outletType,...E};return n&&1===a&&r>2&&(i="16px"),n&&1===a&&r>3&&(i="54px"),c.a.createElement(zo,{cellData:s,key:l,marginSize:i,cellSize:o,rotateIcon:t.rotateIcon})})))):c.a.createElement(aE,null,c.a.createElement(cE,{isActive:!0}),c.a.createElement(O.c,{id:"DEVICE_DIAGRAM_MISSING"}))},({deviceData:e},{deviceData:t})=>e.model===t.model&&e.outlet_table===t.outlet_table&&e.outlet_overrides===t.outlet_overrides);const iE=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`,oE=Object(l.c)("div")`
  margin-top: 1px;
  margin-left: 10px;
`,EE=Object(l.c)("div")`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  div:first-child {
    margin-bottom: 12px;
  }
`,sE=Object(l.c)(p.b)`
  color: ${({theme:e})=>e.motifPalette.warning};
  height: 18px;
  width: 18px;
  margin-right: 10px;
`,mE=Object(l.c)(p.u)`
  color: ${({theme:e})=>e.motifPalette.success};
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;var dE=({deviceData:e,hidePorts:t})=>{const{usedPower:a,maxPower:n}=Object(v.getUspPduOutletUtilization)(e),l=Object(r.k)();return c.a.createElement(iE,null,c.a.createElement(b.a,{justifyContent:"center"},c.a.createElement("div",null,c.a.createElement(lE,{deviceData:e})),e.port_table&&!t&&c.a.createElement(oE,null,c.a.createElement(pr,{deviceData:e,portSizeOverride:"19px",navigateTo:"outlets",history:l}))),c.a.createElement(tE,{isForDiagram:!0,deviceData:e}),a>n&&c.a.createElement(EE,null,c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(sE,null),c.a.createElement(u.a,{size:"caption"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_WARNING"}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(mE,null),c.a.createElement(u.a,{size:"caption"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_POWER_OVERLOAD_INFO"})))))};const _E=Object(l.c)("div")`
  margin: 16px 32px 0 32px;
`;var uE=({activeItem:e,hidePorts:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(dE,{deviceData:e,hidePorts:t}),c.a.createElement(_E,null,c.a.createElement(Zo,{deviceData:e,hidePorts:t})));const pE=Object(l.c)(b.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,OE=Object(l.c)(u.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,bE=Object(l.c)(b.a)`
  padding: 30px;
`,IE=Object(l.c)(b.a)`
  margin-bottom: 24px;
`,gE=Object(l.c)(IE)`
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
`,RE=Object(l.c)(u.a)`
  display: flex;
`,CE=Object(l.c)(u.a)`
  margin-bottom: 3px;
`,TE=Object(l.c)(fa.a)`
  margin-left: 8px;
  margin-top: -2px;
`,hE=l.a`
  margin-left: 15px;
`,vE=Object(l.c)(p.yb)`
  margin-top: -3px;
  margin-right: -6px;
`,DE=Object(l.c)(G.a)`
  margin-top: 12px;
  justify-content: flex-end;
`,fE=Object(ia.g)({mapPropsToValues:({outletInfo:{name:e,cycle_enabled:t,relay_state:a}})=>({name:e||"",cycle_enabled:t,relay_state:a}),validationSchema:Ea.a.object().shape({name:Ea.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),cycle_enabled:Ea.a.boolean(),relay_state:Ea.a.boolean()}),handleSubmit:(e,{props:{outletInfo:t,updateDeviceWithIdEndpoint:a,history:n,activeItem:c,activeItem:{mac:r,_id:l,outlet_overrides:i}}})=>{const o=Object(v.isUspPduPro)(c);a({outlet_overrides:[...i.filter(e=>e.index!==t.index),{index:t.index,...e}].map(a=>t.index===Object(v.getTwinOutletIndex)(a,o)?{...a,relay_state:e.relay_state}:a).sort((e,t)=>e.index-t.index)},l,r,{successToast:{icon:Ot.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:Ot.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["outlet_overrides"],extend:!0}).then(()=>{n.goBack()})}}),PE={updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint};var SE=Object(st.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a}})=>({outletInfo:Object(v.getActiveOutletInfo)(t,void 0,+a)}),PE),fE)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:r,activeItem:l})=>{const i=Object(o.useDispatch)(),E=()=>{n(),r.goBack()},s=Object(v.isUspPduPro)(l),m=Object(v.getTwinOutletIndex)(a,s),d=Object(Pr.o)(a,"POWER_METER");return c.a.createElement(c.a.Fragment,null,c.a.createElement(bE,{flexDirection:"column",width:"100%",height:"100%"},c.a.createElement(pE,{alignItems:"center"},c.a.createElement(p.g,{onClick:E,style:{cursor:"pointer"}}),c.a.createElement(OE,{weight:"bold"},a.name)),c.a.createElement(IE,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(da.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(IE,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(RE,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"}),m&&c.a.createElement(TE,{position:"topRight",portal:!0,width:150,tooltipClassName:hE,message:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_TOOLTIP_LABEL_TWIN_RELAY_STATE",values:{index:m}})},c.a.createElement(p.cb,{isActive:!0}))),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(da.a,{type:"checkbox",name:"relay_state"})),c.a.createElement(IE,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(da.a,{type:"checkbox",name:"cycle_enabled"})),c.a.createElement(IE,{flexDirection:"column"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),c.a.createElement(u.a,{color:"tertiary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"})),c.a.createElement(DE,{variant:"link",onClick:()=>i(Object(v.powerCycleOutlet)(l,a))},c.a.createElement(vE,null),c.a.createElement(O.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))),d&&c.a.createElement(gE,{flexDirection:"column"},a.outlet_power&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(CE,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(a.outlet_power).toFixed(2)}}))),!1,a.outlet_current&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(CE,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(a.outlet_current||0).toFixed(2)}}))),a.outlet_voltage&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(CE,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(a.outlet_voltage).toFixed(2)}}))),a.outlet_power_factor&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(CE,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_FACTOR"})),c.a.createElement(u.a,{color:"secondary"},Number(a.outlet_power_factor).toFixed(2))))),c.a.createElement(Ma,{isDirty:e,onFormSubmit:t,onFormCancel:E,allowCancel:!0}))});const AE=Object(l.c)(b.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  svg {
    position: absolute;
    left: 24px;
  }
`,jE=Object(l.c)(u.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,NE=Object(l.c)(b.a)`
  padding: 30px;
`,yE=Object(l.c)(b.a)`
  margin-bottom: 24px;
`,LE=Object(l.c)(u.a)`
  display: flex;
`,xE=Object(ia.g)({mapPropsToValues:({outletInfo:{name:e,port_mode:t}})=>({name:e||"",portModeAuto:t===v.RpsPortMode.AUTO}),validationSchema:Ea.a.object().shape({name:Ea.a.string().label("DEVICE_PROPERTIES_LABEL_NAME"),portModeAuto:Ea.a.boolean()}),handleSubmit:({portModeAuto:e,...t},{props:{outletInfo:a,updateDeviceWithIdEndpoint:n,history:c,activeItem:{rps_override:r,mac:l,_id:i}}})=>{var o;const E=[{port_idx:a.port_idx,port_mode:e?v.RpsPortMode.AUTO:v.RpsPortMode.DISABLED,...t},...null!==(o=null==r?void 0:r.rps_port_table.filter(e=>e.port_idx!==a.port_idx))&&void 0!==o?o:[]];n({rps_override:{...r,rps_port_table:E}},i,l,{successToast:{icon:Ot.a.success,message:"DEVICE_OUTLET_FORM_SAVE_SUCCESS"},failureToast:{icon:Ot.a.danger,message:"DEVICE_OUTLET_FORM_SAVE_ERROR"},mergeAndOverrideKeys:["rps_override"],extend:!0}).then(()=>{c.goBack()})}}),VE={updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint};var wE=Object(st.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a}})=>({outletInfo:Object(v.getActiveRpsOutletInfo)(t,+a)}),VE),xE)(({dirty:e,submitForm:t,outletInfo:a,resetForm:n,history:r,setFieldValue:l,values:i})=>{const o=()=>{n(),r.goBack()};return c.a.createElement(c.a.Fragment,null,c.a.createElement(NE,{flexDirection:"column",width:"100%",height:"100%"},c.a.createElement(AE,{alignItems:"center"},c.a.createElement(p.g,{onClick:o,style:{cursor:"pointer"}}),c.a.createElement(jE,{weight:"bold"},a.name)),c.a.createElement(yE,{flexDirection:"column",justifyContent:"space-between"},c.a.createElement(da.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(yE,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(LE,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(da.a,{type:"checkbox",name:"portModeAuto"}))),c.a.createElement(Ma,{isDirty:e,onFormSubmit:t,onFormCancel:o,allowCancel:!0}))});const FE=(e,t)=>e?e.map(e=>{const a=t.find(t=>t.mac===e.mac);return{...e,id:null==a?void 0:a._id,name:Object(D.b)(a),deviceData:a,model:Object(D.d)(null==a?void 0:a.model)}}):[],ME=Object(l.c)(b.a)`
  th {
    text-transform: none;
    padding-right: 0;

    &:first-child {
      color: ${({theme:e})=>e.motifPalette.text01};
    }
  }
  tr:hover {
    cursor: pointer;
  }
`,UE=Object(l.c)(u.a)`
  color: inherit;
  color: ${({theme:e})=>e.colors.blue};
`;function BE({activeItem:{downlink_table:e},params:t,path:a,history:n}){const{site:l,page:i,subPage:E}=t,s=Object(o.useSelector)(v.selectDevicesData),m=Object(o.useDispatch)(),d=[{id:"port_idx",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK_PORT"}),maxWidth:40},{id:"name",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK_DEVICE"}),renderCell:e=>c.a.createElement(UE,{truncate:!0},e.name===e.mac&&e.model?e.model:e.name),maxWidth:77},{id:"statusInfo",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK_SPEED"}),renderCell:e=>c.a.createElement(O.c,{id:"COMMON_DEVICE_DUPLEX_FULL",values:{speed:e.speed}}),maxWidth:73},{id:"model",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK_MODEL"}),maxWidth:144}];return c.a.createElement(ME,null,c.a.createElement(ne.a,{items:FE(e,s),disableColumnFilters:!0,initialSortBy:"port_idx",columns:d,renderFooter:()=>c.a.createElement("div",null,e&&e.length>0?c.a.createElement(O.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}}):c.a.createElement(O.c,{id:"COMMON_DEVICES_NOT_FOUND"})),rowHeight:30,onRowClick:({mac:e})=>{const t=Object(r.i)(a,{id:e,site:l,page:i,panel:"overview",subPage:E});n.push(t),m(Object(_.g)({type:C.b.DEVICE,mac:e}))}}))}var kE=a(2026);const WE=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`,HE=Object(l.c)("div")`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-between;
`,GE=Object(l.c)(G.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`,YE=Object(l.c)("div")`
  margin-bottom: 8px;
`;function $E({switchDeviceData:e,showSimplifiedActivity:t,params:a,path:n,history:l}){const i=Object(o.useSelector)(v.selectDevicesData),{site:E,page:s,subPage:m}=a,{speed:d,full_duplex:p,rx_packets:b,rx_bytes:I,tx_packets:g,tx_bytes:R,port_idx:T,"rx_bytes-r":h,"tx_bytes-r":D}=Object(v.getUplinkAttrs)(e)||{},f=Object(o.useSelector)(t=>Object(v.getUplink)(Object(v.selectDevicesData)(t),e)),P=Object(v.getUplinkRemotePort)(i,e),S=Object(v.getUplinkDisplayName)(e,f),A=Object(o.useDispatch)();return c.a.createElement(WE,null,c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_UPLINK"})),(null==f?void 0:f.mac)?c.a.createElement(GE,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(r.i)(n,{id:f.mac,site:E,page:s,panel:"overview",subPage:m});l.push(t),A(Object(_.g)({type:C.b.DEVICE,mac:f.mac}))}},S):c.a.createElement(O.c,{id:"COMMON_HYPHEN"})),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),c.a.createElement(u.a,{color:"secondary"},T)),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),c.a.createElement(u.a,{color:"secondary"},d)),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DUPLEX"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:p?"DEVICE_PROPERTY_UPLINK_DUPLEX_FULL":"DEVICE_PROPERTY_UPLINK_DUPLEX_HALF"}))),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==P?void 0:P.poe_power)||0}}))),c.a.createElement(YE,null),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},b&&I?c.a.createElement(c.a.Fragment,null,c.a.createElement(H.a,{type:"number",input:b,color:"secondary"})," / ",Object(ft.c)(I)):"- / -")),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},g&&R?c.a.createElement(c.a.Fragment,null,c.a.createElement(H.a,{type:"number",input:g,color:"secondary"})," / ",Object(ft.c)(R)):"- / -")),t?c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_ACTIVITY"})),c.a.createElement(H.a,{color:"secondary",type:"bytes",input:D+h||0,options:"bitrate"})):c.a.createElement(c.a.Fragment,null,c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(H.a,{type:"bytes",input:h||0,options:"bitrate",color:"secondary"}))),c.a.createElement(HE,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(H.a,{type:"bytes",input:D||0,options:"bitrate",color:"secondary"})))))}var zE=a(339),KE=a(1931),XE=a(1920),qE=a(1207),ZE=a(213),JE=a(2e3);const QE=Object(l.c)(u.a)`
  display: block;
  position: relative;
  padding-left: 20px;
  margin-left: 15px;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1px;
    width: 12px;
    border-bottom: 1px ${e=>`${e.bordertype} ${e.legendcolor}`};
  }
`,es=l.a`
  margin-bottom: 32px;
`,ts=Object(qE.a)(6,e=>({value:e,label:e.toString()})).reverse(),as=(e,t,a,n,r)=>0!==t&&5!==t?null:c.a.createElement("line",{x1:a,x2:n,y1:0,y2:0,className:r}),ns=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var cs=Object(ha.b)(c.a.memo(({gwMac:e,keys:t,pickDatumsWithKey:a,heading:n,forUdm:r,theme:l})=>{const i=Object(o.useSelector)(Object(ce.selectDeviceStatReport)(e,ce.fetchDeviceUsageReport,ce.OBJECT.GW)),E=Object(o.useSelector)(Object(ce.selectDeviceStatReport)(e,ce.fetchDeviceUsageReport)),s=Object(o.useSelector)(Ga.L),m="ap"===a?"gradientArea":"line",d=Date.now(),_=Object(Ri.startOfHour)(Object(Ri.addHours)(d,1)).getTime(),p=s?"H:ss":"ha",I=Object(JE.b)(_,p);I[I.length-1].label="";const g=I[0].value,R={};let C=0,T=i;r&&(T=E.reduce((e,t)=>{const a={...t};return a.gw?e:a.sw?(e[C].num_sta+=a.num_sta,C+=1,e):(e.push(a),e)},[])),a&&(T=E.filter(e=>e[a]));Object(zE.g)(T.filter(e=>e.time>g).map(e=>({...e,x:e.time})),ZE.a.MINUTES.grain).forEach(e=>{t.forEach(t=>{R[t]||(R[t]={key:t,isDashed:"mem"===t,variant:"mem"===t?m:"gradientArea",lineColor:"mem"===t?"purple":"blue",maxY:0,data:[]}),R[t].data.push({x:e.x,y:e[t]})})});const h=t.map(e=>R[e]?R[e].data.map(e=>e.y||0):0),v=Math.max(...h.flat(),4);let D=ts;return v>5&&(D=Object(JE.e)(v,6)),c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{justifyContent:"space-between",className:es,marginTop:"10px"},c.a.createElement(u.a,{weight:"bold",color:"primary"},c.a.createElement(O.c,{id:n})),t.length>1&&c.a.createElement(b.a,null,c.a.createElement(QE,{legendcolor:l.colors.blue,bordertype:"solid"},c.a.createElement(O.c,{id:"COMMON_WORD_CPU"})),c.a.createElement(QE,{legendcolor:l.colors.purple,bordertype:"dotted"},c.a.createElement(O.c,{id:"COMMON_WORD_MEMORY"})))),c.a.createElement(KE.a,{xAxis:I,yAxis:D,width:336,height:120,margin:[0,0,20,30],xLabelsBetween:!0,renderYGridLine:as,labelClassName:ns(l),renderChartElements:(e,a,n)=>c.a.createElement(c.a.Fragment,null,t.map(t=>R[t]&&R[t].data.length&&c.a.createElement(XE.a,{key:R[t].key,data:R[t].data,maxY:n,mouseData:a,getCoordinates:e,variant:R[t].variant,lineColor:l.colors[R[t].lineColor],dashed:R[t].isDashed,hideMissingData:!0})))}))},(e,t)=>e.gwMac===t.gwMac));var rs=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(n.useEffect)(()=>{t(Object(ce.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(cs,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})},ls=a(1978);const is=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var os=a(2058);const Es=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||-5}px;
  text-align: left;
  width: 100%;
`,ss=Object(l.c)(u.a)`
  color: ${({theme:e})=>e.motifPalette.text03};
`,ms=l.a`
  width: 100% !important;
`,ds=l.a`
  margin: 0 -4px;
`,_s=(e,t)=>!!e.find(({label:e})=>e.toLowerCase()===t.toLowerCase());class us extends c.a.Component{constructor(){super(...arguments),this.state={addedTags:[],currentTags:[],searchInputValue:""},this.resetState=()=>{const{deviceTags:e}=this.props,t=e.map(({_id:e})=>e);this.setState({addedTags:[],currentTags:t,searchInputValue:""})},this.handleSaveTags=()=>{const{mac:e,deviceTags:t,tags:a,removeTag:n,addTag:c,updateTagMembers:r}=this.props,{currentTags:l}=this.state,i=t.reduce((t,{_id:a,member_table:c,name:i})=>(l.some(e=>{const t=e.replace("_new_","");return a===e||i===t})||(1===c.length&&c[0]===e?t.push(n(a)):t.push(r(a,c.filter(t=>t!==e)))),t),[]),o=l.reduce((t,n)=>{const l=n.replace("_new_",""),i=a.find(({_id:e,name:t})=>e===n||t===l);return i?i.member_table.find(t=>t===e)||t.push(r(i._id,[...i.member_table,e])):t.push(c(l,[e])),t},i);return Promise.all(o).finally(()=>{this.resetState()})},this.handleChange=({label:e,value:t},a)=>{const{addedTags:n}=this.state,c={};if(0===t.search("_new_"))if(a.includes(t)){!!n.find(e=>e.value===t)||(c.addedTags=[...n,{label:e,value:t}])}else c.addedTags=n.filter(e=>e.value!==t);this.setState({...c,currentTags:a,searchInputValue:""})},this.handleSearchInput=(e,t="")=>{this.setState({searchInputValue:t})},this.handleInputKeyUp=e=>{const{tagsOptions:t}=this.props,{addedTags:a,currentTags:n,searchInputValue:c}=this.state,r=c.trim();13===e.keyCode&&!_s([...t,...a],r)&&r&&this.handleChange({label:r,value:"_new_"+r},[...n,"_new_"+r])}}componentDidMount(){this.resetState();const{tabSubmitFunction:e,tabResetFunction:t}=this.props;e&&e({tags:this.handleSaveTags}),t&&t({tags:this.resetState})}componentDidUpdate(e,{currentTags:t}){const{setFormDirty:a,deviceTags:n}=this.props;if(!a)return;const{currentTags:c}=this.state;if(c!==t){a("tags",n.length!==c.length||!!n.find(({_id:e})=>!c.includes(e)))}}render(){const{tagsOptions:e,intl:t}=this.props,{addedTags:a,currentTags:n,searchInputValue:r}=this.state,l=[...e.filter(({value:e})=>n.includes(e)),...a];return r.trim()&&!_s(l,r)&&l.push({label:r,value:"_new_"+r}),c.a.createElement(c.a.Fragment,null,c.a.createElement(Es,null,c.a.createElement(ss,{size:"label"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_DEVICE_TAGS"}))),c.a.createElement(yn.a,{multi:!0,searchable:!0,className:ms,options:l,value:n,onChange:this.handleChange,inputProps:{full:!0,onKeyUp:this.handleInputKeyUp,value:r},onInputChange:this.handleSearchInput,placeholder:t.formatMessage({id:"DEVICE_PROPERTIES_LABEL_DEVICE_TAGS_PLACEHOLDER"}),selectionContainerClassName:ds,selectionItemWidth:"auto"}))}}const ps={addTag:os.a,updateTagMembers:os.g,removeTag:os.c,tabSubmitFunction:_.j,tabResetFunction:_.i};var Os=Object(st.compose)(Object(o.connect)((e,{mac:t})=>({deviceTags:Object(os.d)(e,t),tagsOptions:Object(os.f)(e),tags:Object(os.e)(e)}),ps),O.f)(us);const bs=Object(l.c)("div")`
  margin-bottom: 20px;
`,Is=Object(l.c)(p.cb)`
  margin-right: 5px;
  color: ${({theme:e})=>e.motifPalette.info};
`,gs=Object(l.c)("div")`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;var Rs=Object(ia.g)({mapPropsToValues:({activeItem:{name:e,mac:t}={}})=>({name:e!==t?e:""}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:r,isValid:l,values:i,resetForm:E,formName:s="general"})=>{const d=Object(o.useDispatch)(),u=Object(o.useSelector)(m.b),p=Object(v.isUdm)(e);Object(n.useEffect)(()=>(d(Object(_.h)({[s]:()=>p?{}:i})),d(Object(_.j)({[s]:()=>E({values:i})})),d(Object(_.i)({[s]:E})),()=>{d(Object(_.h)({[s]:null})),d(Object(_.j)({[s]:null})),d(Object(_.i)({[s]:null}))}),[d,E,i,p,s]),Object(n.useEffect)(()=>{t(s,r),a(s,!l)},[t,r,a,l,s]);const b=u.replace(/\/network\/?/,Y.a.ucoreSettings);return c.a.createElement(c.a.Fragment,null,c.a.createElement(bs,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DEVICE_NAME",name:"name",full:!0,disabled:p}),p&&c.a.createElement(gs,null,c.a.createElement(Is,null),c.a.createElement(O.b,{id:"DEVICE_PROPERTIES_NAME_LINK_UNIFI_OS",values:{link:b}}))),c.a.createElement(Os,{mac:e.mac,setFormDirty:t}))});const Cs=Object(l.c)(re.g)`
  margin-bottom: 24px;
`,Ts=Object(l.c)(re.g)`
  margin-bottom: 8px;
`,hs=Object(l.c)(u.a)`
  display: flex;
  flex: 1;
  margin-right: 12px;
`,vs=l.a`
  margin-left: 11px;
`,Ds=Object(l.c)(p.cb)`
  margin: 0 6px;
`,fs=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 8px);
`,Ps=e=>({hour:Number(e.split(":")[0]),min:Number(e.split(":")[1])}),Ss=e=>`${e.hour.toString().padStart(2,"0")}:${e.min.toString().padStart(2,"0")}`,As=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e,activeItem:{lcm_brightness:t=v.DEFAULT_LCM_BRIGHTNESS,lcm_brightness_override:a=!1,lcm_night_mode_begins:n=v.DEFAULT_LCM_NIGHT_MODE_BEGINS,lcm_night_mode_ends:c=v.DEFAULT_LCM_NIGHT_MODE_ENDS}})=>({lcm:e,lcm_brightness:t,lcm_brightness_override:a,lcm_night_mode_begins:Ps(n),lcm_night_mode_ends:Ps(c)}),validationSchema:Na.a.object().shape({lcm:Na.a.object().shape({sync:Na.a.boolean()}),lcm_brightness_override:Na.a.boolean(),lcm_brightness:Na.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required(),lcm_night_mode_begins:Na.a.object().shape({hour:Na.a.number(),min:Na.a.number()}),lcm_night_mode_ends:Na.a.object().shape({hour:Na.a.number(),min:Na.a.number()})}),handleSubmit:()=>null}),js={saveSettings:Dn.saveSettings};var Ns=Object(st.compose)(Object(o.connect)(e=>({lcmSettings:Object(Dn.selectLcmSettings)(e)}),js),As)(({values:e,setFieldValue:t,resetForm:a,setFormDirty:r,setFormInvalid:l,dirty:i,isValid:E,initialValues:s})=>{const m=Object(o.useDispatch)();return Object(n.useEffect)(()=>{r("lcmScreen",i),l("lcmScreen",!E)},[r,l,E,i]),Object(n.useEffect)(()=>(m(Object(_.h)({lcmScreen:()=>({...e,lcm_brightness_override:e.lcm_brightness!==v.DEFAULT_LCM_BRIGHTNESS,lcm_night_mode_begins:Ss(e.lcm_night_mode_begins),lcm_night_mode_ends:Ss(e.lcm_night_mode_ends)})})),m(Object(_.j)({lcmScreen:()=>{Object(vi.a)(s.lcm,e.lcm)||m(Object(Dn.saveSettings)(e.lcm)),a({values:e})}})),m(Object(_.i)({lcmScreen:a})),()=>{m(Object(_.h)({lcmScreen:null})),m(Object(_.j)({lcmScreen:null})),m(Object(_.i)({lcmScreen:null}))}),[m,a,e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(Ts,null,c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"}))),c.a.createElement(Cs,null,c.a.createElement(Wl.a,{size:"large",value:e.lcm_brightness||v.DEFAULT_LCM_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(u.a,{color:"secondary"},e,"%"),onChange:e=>{t("lcm_brightness",+e.target.value)}})),c.a.createElement(Cs,{flexDirection:"column"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_MODE_DESCRIPTION"}))),c.a.createElement(Cs,{justifyContent:"space-between"},c.a.createElement(fs,null,c.a.createElement(Nr.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_BEGINS",name:"lcm_night_mode_begins",full:!0})),c.a.createElement(fs,null,c.a.createElement(Nr.Field,{type:"timeInput",label:"DEVICE_PROPERTIES_LABEL_LCM_NIGHT_ENDS",name:"lcm_night_mode_ends",full:!0}))),c.a.createElement(Cs,{justifyContent:"space-between"},c.a.createElement(hs,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"}),c.a.createElement(fa.a,{portal:!0,tooltipClassName:vs,position:"topRight",width:200,message:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION_TOOLTIP"})},c.a.createElement(Ds,{isActive:!0}))),c.a.createElement(Nr.Field,{type:"checkbox",name:"lcm.sync"})))}),ys=a(171);const Ls=Object(l.c)(u.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`,xs=Object(l.c)(u.a)`
  flex: 1;
  margin-right: 12px;
`,Vs=Object(l.c)("div")`
  margin-bottom: ${e=>e.marginBottom||0}px;
`,ws=Object(l.c)(b.a)`
  margin-bottom: ${e=>e.marginBottom||0}px;
  justify-content: space-between;
`,Fs=Object(l.c)(G.a)`
  span {
    margin-left: 3px !important;
  }
`,Ms=Object(ia.g)({mapPropsToValues:({switchDeviceData:e,nativeNetworks:t,radiusProfiles:a,radiusSettings:n})=>{const{jumboframe_enabled:c=!1,flowctrl_enabled:r=!1,stp_version:l="rstp",stp_priority:i="32768",dot1x_portctrl_enabled:o=!1,radiusprofile_id:E="",dot1x_fallback_networkconf_id:s="",snmp_location:m="",snmp_contact:d="",outdoor_mode_override:_=v.OutdoorModeOverride.DEFAULT}=e;return{mgmt_network_id:Object(v.getDeviceNetworkId)(t,e),jumboframe_enabled:c,flowctrl_enabled:r,stp_version:l,stp_priority:i,dot1x_portctrl_enabled:o,radiusprofile_id:E,radiusProfiles:a,radiusSettings:n,dot1x_fallback_networkconf_id:s,snmp_location:m,snmp_contact:d,outdoor_mode_override:_}},validationSchema:Ea.a.object().shape({mgmt_network_id:Ea.a.string(),flowctrl_enabled:Ea.a.boolean(),stp_version:Ea.a.string(),stp_priority:Ea.a.string(),dot1x_portctrl_enabled:Ea.a.boolean(),snmp_contact:Ea.a.string(),snmp_location:Ea.a.string(),radiusprofile_id:Ea.a.string().when("dot1x_portctrl_enabled",{is:!0,then:Ea.a.string().isAllowedDefaultRadiusProfile("COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE").required("COMMON_VALIDATION_FIELD_REQUIRED")}),radiusProfiles:Ea.a.array().of(Ea.a.object()),radiusSettings:Ea.a.object(),dot1x_fallback_networkconf_id:Ea.a.string(),outdoor_mode_override:Ea.a.string()}),handleSubmit:()=>null}),Us=[{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_STP",value:"stp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_RSTP",value:"rstp"},{label:"DEVICE_PROPERTIES_VALUES_SPANNING_TREE_DISABLED",value:"disabled"}];var Bs=Object(st.compose)(Object(o.connect)((e,{activeItem:t})=>({nativeNetworks:Object(va.selectNativeNetworks)(e),switchDeviceData:Object(v.selectDeviceData)(e,t.mac),radiusOptions:Object(ys.selectRadiusOptions)(e),radiusProfiles:Object(ys.selectRadiusProfiles)(e),radiusSettings:Object(Dn.selectRadiusSettings)(e)}),{updateDevice:v.updateDevice,fetchRadiusProfiles:ys.fetchRadiusProfiles}),O.f,Ms,Object(pt.c)(({fetchRadiusProfiles:e})=>e()))(({activeItem:e,values:t,errors:a,resetForm:l,dirty:i,setFormDirty:E,setFormInvalid:s,setFieldValue:d,nativeNetworks:I=[],initialValues:g,radiusOptions:R,radiusProfiles:C,isValid:T,hideFlowControl:h,intl:D,formName:f="services"})=>{const P=Object(o.useDispatch)(),S=Object(r.k)(),A=Object(o.useSelector)(q.a),j=Object(o.useSelector)(m.i),N=Object(r.i)(j,{site:A}),y=Object(Pr.u)(e),L=Object(Pr.p)(e),x=Object(o.useSelector)(Ul.f),V=Object(v.getDeviceModelFeature)(e,"outdoorModeSupport")&&x,w=null==C?void 0:C.length;Object(n.useEffect)(()=>{if((!t.radiusProfiles||!t.radiusProfiles.length)&&w){let{radiusprofile_id:e}=t;t.radiusprofile_id||R.find(e=>e.value===t.radiusprofile_id)||(e=R[0].value),l({values:{...g,radiusprofile_id:e,radiusProfiles:C}})}},[C]),Object(n.useEffect)(()=>{E(f,i),s(f,!T)},[s,E,i,T,f]),Object(n.useEffect)(()=>(P(Object(_.h)({[f]:()=>({mgmt_network_id:t.mgmt_network_id,snmp_contact:t.snmp_contact,snmp_location:t.snmp_location,...!h&&{jumboframe_enabled:t.jumboframe_enabled,flowctrl_enabled:t.flowctrl_enabled},...y&&{stp_version:t.stp_version,stp_priority:t.stp_priority},...L&&{dot1x_portctrl_enabled:t.dot1x_portctrl_enabled},...t.dot1x_portctrl_enabled&&L&&{radiusprofile_id:t.radiusprofile_id,dot1x_fallback_networkconf_id:t.dot1x_fallback_networkconf_id},...V&&{outdoor_mode_override:t.outdoor_mode_override}})})),P(Object(_.j)({[f]:()=>l({values:t})})),P(Object(_.i)({[f]:l})),()=>{P(Object(_.h)({[f]:null})),P(Object(_.j)({[f]:null})),P(Object(_.i)({[f]:null}))}),[e._id,P,l,t,f,L,y,h,V]);const F=Object(n.useMemo)(()=>I.map(e=>({value:e._id,label:e.name})),[I]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{width:"100%",flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Vs,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:F,translateLabel:!0})),!h&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ws,{marginBottom:8},c.a.createElement(xs,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAMES"})),c.a.createElement(Nr.Field,{name:"jumboframe_enabled",type:"checkbox"})),c.a.createElement(ws,{marginBottom:16},c.a.createElement(xs,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL"})),c.a.createElement(Nr.Field,{name:"flowctrl_enabled",type:"checkbox"}))),y&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Vs,{marginBottom:32},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_SPANNING_TREE",name:"stp_version",full:!0,type:"dropdown",translateOptions:!0,translateLabel:!0,options:Us})),c.a.createElement(Ls,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SECURITY"})),"disabled"!==t.stp_version&&c.a.createElement(Vs,{marginBottom:16},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_PRIORITY",name:"stp_priority",type:"dropdown",full:!0,validated:!0,options:v.SPANNING_TREES.map(e=>({label:e,value:e})),translateLabel:!0}))),L&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ws,{marginBottom:32},c.a.createElement(xs,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_8021X_CONTROL",name:"dot1x_portctrl_enabled",type:"checkbox"})),t.dot1x_portctrl_enabled&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Vs,{marginBottom:16},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_RADIUS_PROFILE",name:"radiusprofile_id",type:"dropdown",full:!0,options:R,invalid:!!a.radiusprofile_id,translateLabel:!0}),!!a.radiusprofile_id&&c.a.createElement(Nr.ValidationMessage,{align:"left",visible:!0,translation:"COMMON_VALIDATION_VALID_DEFAULT_RADIUS_PROFILE"})),c.a.createElement(ws,{alignSelf:"flex-end"},c.a.createElement(Fs,{size:"small",type:"button",variant:"inline",onClick:()=>{S.push(`${N}${Y.a.advancedSettingsRadiusProfileForm}`)}},c.a.createElement(p.s,{height:20,width:20}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CREATE_RADIUS_PROFILE"}))),c.a.createElement(Vs,{marginBottom:16},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_FALLBACK_VLAN",name:"dot1x_fallback_networkconf_id",type:"dropdown",full:!0,validated:!0,options:[{label:D.formatMessage({id:"COMMON_NONE"}),value:""},...F],translateLabel:!0})),c.a.createElement(ws,{alignSelf:"flex-end"},c.a.createElement(Fs,{size:"small",type:"button",variant:"inline",onClick:()=>{S.push(`${N}${Y.a.networkSettingsForm}`)}},c.a.createElement(p.s,{height:20,width:20}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CREATE_FALLBACK_VLAN"}))))),Object(Pr.l)(e)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Ls,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SNMP"})),c.a.createElement(Vs,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_LOCATION",name:"snmp_location",full:!0})),c.a.createElement(Vs,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_SNMP_ENTER_CONTACT",name:"snmp_contact",full:!0}))),V&&c.a.createElement(b.a,{justifyContent:"space-between",alignItems:"flex-start"},c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(xs,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_OUTDOOR_MODE_DESCRIPTION"}))),c.a.createElement(Nr.Field,{type:"checkbox",name:"outdoor_mode_override",value:t.outdoor_mode_override===v.OutdoorModeOverride.ON,afterChange:e=>{d("outdoor_mode_override",e?v.OutdoorModeOverride.ON:v.OutdoorModeOverride.OFF)}}))))}),ks=a(138);const Ws=Na.a.object().shape({type:Na.a.string(),ip:Na.a.string().when("type",{is:"static",then:Ea.b.required(c.a.createElement(O.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),netmask:Na.a.string().when("type",{is:"static",then:Ea.c.required(c.a.createElement(O.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}).when("ip",(e,t)=>e?t.test("is-valid-subnet-mask",c.a.createElement(O.c,{id:"COMMON_VALIDATION_VALID_IPV4_MASK"}),t=>Object(ks.h)(e,t)):t),gateway:Na.a.string().when("type",{is:"static",then:Ea.b.required(c.a.createElement(O.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns1:Na.a.string().when("type",{is:"static",then:Ea.b.required(c.a.createElement(O.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"}))}),dns2:Ea.b.when("dns1",{is:e=>!!e,then:Ea.b}),bonding_enabled:Na.a.boolean(),dnssuffix:Na.a.string(),mgmt_network_id:Na.a.string(),snmp_location:Na.a.string(),snmp_contact:Na.a.string()}),Hs=Object(l.c)("div")`
  margin-bottom: 24px;
`,Gs=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,Ys=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,$s=Object(l.c)(u.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,zs=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Ks=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{Object(v.getIsUsl8Mp)(e);const{config_network:t,ip:a,switch_vlan_enabled:n,lte_limit_enabled:c,lte_limit:r}=e,{type:l="dhcp",ip:i=a||"",netmask:o="",gateway:E="",dns1:s="",dns2:m="",dnssuffix:d="",bonding_enabled:_=!1}=t;return{config_network:{type:l,ip:i,netmask:o,gateway:E,dns1:s,dns2:m,dnssuffix:d,bonding_enabled:_},switch_vlan_enabled:n||!1}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Ea.a.object().shape({config_network:Ws,lte_limit_enabled:Ea.a.boolean().label("DEVICE_PROPERTIES_LTE_DATA_LIMIT"),lte_limit:Ea.a.number().integer().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT").when("lte_limit_enabled",{is:!0,then:Ea.a.number().min(1).required().label("DEVICE_ULTE_PRO_SETUP_DATA_LIMIT")})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:r,resetForm:l,isValid:i,initialValues:E,activeItem:s,formName:m="network"})=>{const d=Object(o.useDispatch)(),p=Object(v.getIsUapUswHybrid)(s),b=Object(v.getIsUsl8Mp)(s),I=Object(v.isUap6mp)(s);return Object(n.useEffect)(()=>{e("network",a),t("network",!i)},[e,t,a,i]),Object(n.useEffect)(()=>(d(Object(_.h)({[m]:()=>{var e;const t={config_network:"static"===r.config_network.type?r.config_network:{type:"dhcp"}};return p&&(t.switch_vlan_enabled=r.switch_vlan_enabled,E.switch_vlan_enabled&&!r.switch_vlan_enabled&&(null===(e=s.port_overrides)||void 0===e?void 0:e.length)&&(t.port_overrides=s.port_overrides.map(({portconf_id:e,...t})=>t))),t}})),d(Object(_.j)({[m]:()=>l({values:r})})),d(Object(_.i)({[m]:l})),()=>{d(Object(_.h)({[m]:null})),d(Object(_.j)({[m]:null})),d(Object(_.i)({[m]:null}))}),[d,l,r,m,s.port_overrides,E.switch_vlan_enabled,p]),c.a.createElement(c.a.Fragment,null,c.a.createElement(Hs,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:zs})),"static"===r.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Gs,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),c.a.createElement(Gs,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),c.a.createElement(Gs,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),c.a.createElement(Ys,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0})))),I&&c.a.createElement(Gs,{marginBottom:16,justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_AGGREGATION"})),c.a.createElement(da.a,{name:"config_network.bonding_enabled",type:"checkbox"})),p&&c.a.createElement(c.a.Fragment,null,c.a.createElement($s,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_VLAN"})),c.a.createElement(Gs,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_PORT_VLAN"})),c.a.createElement(da.a,{type:"checkbox",name:"switch_vlan_enabled"}))),b&&!1)}),Xs=a(2893),qs=a(1763);const Zs=Object(l.c)(b.a)`
  margin-bottom: 20px;
`,Js=Object(l.c)(u.a)`
  margin-bottom: 6px;
`,Qs=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e,formName:t="screen"})=>({[t]:{led_override:e.led_override||v.LedOverride.ON,led_override_color_brightness:e.led_override_color_brightness||v.DEFAULT_LED_BRIGHTNESS,led_override_color:e.led_override_color||v.DEFAULT_LED_COLOR}}),validationSchema:Ea.a.object().shape({led_override:Ea.a.string(),led_override_color_brightness:Ea.a.number(),led_override_color:Ea.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var em=Object(st.compose)(O.f,Qs)(({activeItem:e,setFormDirty:t,values:a,dirty:r,resetForm:l,setFieldValue:i,formName:E="screen",disableLedOverrideField:s,disableLedOverrideColor:m,disableLedBrightnessField:d,intl:p})=>{const I=Object(o.useDispatch)(),g=Object(Pr.j)(e);return Object(n.useEffect)(()=>{t(E,r)},[t,r,E]),Object(n.useEffect)(()=>(I(Object(_.h)({[E]:()=>{const e=Object(qs.a)(a,E);return{...a[E],...e}}})),I(Object(_.j)({[E]:()=>{l({values:a})}})),I(Object(_.i)({[E]:l})),()=>{I(Object(_.h)({[E]:null})),I(Object(_.j)({[E]:null})),I(Object(_.i)({[E]:null}))}),[I,E,l,a]),c.a.createElement(c.a.Fragment,null,!s&&c.a.createElement(Zs,{justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ENABLE_LED"}))),c.a.createElement(da.a,{type:"checkbox",name:E+".led_override",value:a[E].led_override===v.LedOverride.ON,afterChange:e=>{i(E+".led_override",e?v.LedOverride.ON:v.LedOverride.OFF)}})),!d&&g&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),c.a.createElement(Zs,null,c.a.createElement(Wl.a,{size:"large",value:a[E].led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(u.a,{color:"secondary"},e,"%"),onChange:e=>{i(E+".led_override_color_brightness",+e.target.value)}}))),!m&&g&&c.a.createElement(Zs,{justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(Js,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"})),c.a.createElement(Xs.a,{color:a[E].led_override_color,variant:"block",onChange:e=>{i(E+".led_override_color","hex"in e?e.hex:void 0)},hexLabel:p.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(G.a,{variant:"inline",onClick:()=>{i(E+".led_override_color",v.DEFAULT_LED_COLOR)}},c.a.createElement(O.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))});const tm=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 8px;
`;var am=({device:e})=>{const t=Object(o.useDispatch)(),a=Object(n.useMemo)(()=>Object(v.getDeviceState)(e),[e]),[r,l]=Object(n.useState)(!1);return c.a.createElement(tm,{variant:"link",onClick:a=>{a.preventDefault(),a.stopPropagation(),t(Object(v.confirmDeviceUpgrade)({titleValues:{deviceName:e.name},messageValues:{deviceName:e.name,fromVersion:e.version,toVersion:e.upgrade_to_firmware},onConfirm:()=>{l(!0),t(Object(v.upgradeDevice)(e,!0)),l(!0)},onCancel:()=>{t(Object(Ya.e)()),l(!1)},isDowngrade:!0}))},disabled:r||a!==v.DeviceState.CONNECTED},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DEVICE"}))};const nm=Object(l.c)(u.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`,cm=Object(l.c)(b.a)`
  ${({theme:e})=>`\n    border-bottom: 1px solid ${e.motifPalette.ui04};\n    margin-bottom: ${e.spacing["spacing-xl"]};\n    padding-bottom: ${e.spacing["spacing-xl"]};\n  `};
`,rm=Object(l.c)(b.a)`
  ${({noMargin:e=!1,theme:t})=>!e&&"margin-top: "+t.spacing["spacing-m"]};
`;var lm=({activeItem:e,disableLocate:t,disableRestart:a,disableDebug:r,disableForget:l})=>{const i=Object(o.useSelector)(t=>Object(v.selectDeviceData)(t,e.mac)),E=Object(o.useSelector)(Object(v.selectIsUcoreDevice)(e)),s=Object(v.getRawDeviceState)(i)===Me.DeviceState.UPGRADING,m=Object(v.isUlte)(i),d=Object(v.isLteWithSubscription)(i),_=Object(v.isUap6mp)(i),p=Object(n.useMemo)(()=>Object(v.isDeviceDowngradable)(i),[null==i?void 0:i.version,null==i?void 0:i.upgrade_to_firmware]);return c.a.createElement(c.a.Fragment,null,!t&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_LOCATE_DEVICE_DESCRIPTION"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(Ha,{device:i}))),i.type===Me.DeviceType.UBB&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_ALIGNMENT"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_ALIGNMENT_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(bn,{device:i}))),!a&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_RESTART"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_RESTART_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(Ka,{device:i}))),(i.type===Me.DeviceType.AP||i.type===Me.DeviceType.SWITCH)&&!m&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"})),c.a.createElement(Mn,{device:i})),!E&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"})),c.a.createElement(rm,{noMargin:!0,alignSelf:"flex-end"},c.a.createElement(Nn,{whiteOutActive:s,device:i,removeTopMargin:!0}))),p&&_&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNGRADE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNGRADE_DESCRIPTION"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(am,{device:i}))),c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_PROVISION_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_PROVISION_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(qa,{device:i}))),c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(nn,{device:i}))),!r&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DEBUG_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_DEBUG_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},c.a.createElement(tn,{device:i}))),!l&&c.a.createElement(cm,{flexDirection:"column"},c.a.createElement(nm,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_FORGET_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_FORGET_INFO"})),c.a.createElement(rm,{alignSelf:"flex-end"},d?c.a.createElement(_n,{device:i}):c.a.createElement(Qa,{device:i}))))};const im=Object(l.c)(b.a)`
  padding: 0 32px;
`;var om=Object(st.compose)(la(["general","lcmScreen","screen","services","network"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=Object(Pr.i)(e),p=u?"lcmScreen":"screen",b=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:p,label:u?c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}):c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_LED"}),renderContent:()=>u?c.a.createElement(Ns,{activeItem:e,setFormDirty:t,setFormInvalid:a}):c.a.createElement(em,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(im,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:b})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{lcm:a,...n}=t;_(Object(v.updateDeviceWithIdEndpoint)(n,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const Em=Object(l.c)("div")`
  margin-bottom: 32px;
  th {
    text-transform: none;
    padding-right: 0;

    &:first-child {
      margin-left: 0px;
    }
  }
`,sm=Object(l.c)("div")`
  margin-top: 12px;
`,mm=Object(l.c)(H.a)`
  color: inherit;
`,dm=[{id:"name",label:c.a.createElement(O.c,{id:"COMMON_NETWORK"}),maxWidth:66},{id:"ip",label:c.a.createElement(O.c,{id:"COMMON_WORD_IP"}),maxWidth:76},{id:"tx_bytesInfo",label:c.a.createElement(O.c,{id:"COMMON_WORD_SENT"}),renderCell:e=>c.a.createElement(mm,{size:"caption",type:"bytes",input:e.tx_bytes}),maxWidth:66},{id:"rx_bytesInfo",label:c.a.createElement(O.c,{id:"COMMON_WORD_RECEIVED"}),renderCell:e=>c.a.createElement(mm,{size:"caption",type:"bytes",input:e.rx_bytes}),maxWidth:66},{id:"num_sta",label:c.a.createElement(O.c,{id:"COMMON_WORD_CLIENTS"}),maxWidth:60}];var _m=({activeItem:e})=>{const{network_table:t}=e;return c.a.createElement(Em,null,c.a.createElement(ne.a,{items:t,disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,idField:"_id",columns:dm,renderFooter:()=>t.length>0?c.a.createElement(sm,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:t.length}})):c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"})}))},um=a(2098);var pm=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(n.useEffect)(()=>{t(Object(ce.fetchDeviceUsageReport)(e.mac,ce.OBJECT.GW))},[e.mac,t]),c.a.createElement(cs,{gwMac:e.mac,keys:["mem","cpu"],heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})},Om=a(598);const bm=Object(l.c)("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
`,Im=Object(l.c)("div")`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-between;
`;function gm({uplinkAttrs:e}){const{ip:t,speed:a,full_duplex:n,rx_packets:r,rx_bytes:l,tx_packets:i,tx_bytes:o,"rx_bytes-r":E,"tx_bytes-r":s}=e;return c.a.createElement(bm,null,c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),c.a.createElement(u.a,{color:"secondary"},t)),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),c.a.createElement(u.a,{color:"secondary"},a)),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DUPLEX"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:n?"DEVICE_PROPERTY_UPLINK_DUPLEX_FULL":"DEVICE_PROPERTY_UPLINK_DUPLEX_HALF"}))),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},r&&l?c.a.createElement(c.a.Fragment,null,Object(Nt.a)(r,{spacer:" "})," / ",Object(ft.c)(l,"bytes","IEC")):"- / -")),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_UP_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},i&&o?c.a.createElement(c.a.Fragment,null,Object(Nt.a)(i,{spacer:" "})," / ",Object(ft.c)(o,"bytes","IEC")):"- / -")),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DOWN_ACTIVITY"})),c.a.createElement(u.a,{color:"secondary"},void 0!==E?c.a.createElement(H.a,{type:"bytes",input:E,options:"bitrate",color:"secondary"}):"-")),c.a.createElement(Im,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_UP_ACTIVITY"})),c.a.createElement(u.a,{color:"secondary"},void 0!==s?c.a.createElement(H.a,{type:"bytes",input:s,options:"bitrate",color:"secondary"}):"-")))}function Rm(e){return Object.values(Om.a).reduce((t,a)=>{const n=e.port_table&&e.port_table.filter(e=>e.up),r="wan1"===a?"WAN":"WAN2",l="wan1"===a?"WAN":"WAN 2",i=Object(Lc.f)(r,e)||"",o=n&&n.find(e=>e.ifname===i),E=Object(xc.gc)(e,a);return o&&E&&t.push({id:a,label:c.a.createElement("span",null,l),renderContent:()=>c.a.createElement(gm,{uplinkAttrs:E})}),t},[])}const Cm=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;function Tm({activeItem:e}){const[t]=Object(n.useState)("SwitchPorts-"+Date.now()),a=Object(o.useDispatch)(),r={style:jc.a.overflow,styleName:"overflow",dependant:t};Object(n.useEffect)(()=>(a(Object(Ac.c)(r)),()=>a(Object(Ac.b)(r))),[]);const l=Rm(e),i=Object(v.isAdopted)(e),E=[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(um.a,{activeItem:e})},...l];return i&&E.push({id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(_m,{activeItem:e})},{id:"stats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(pm,{activeItem:e})}),c.a.createElement(c.a.Fragment,null,i&&c.a.createElement(hr,{deviceData:e}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(Cm,{variant:"tertiary",items:E,renderOnlyExpandedContent:!0}))}const hm=Object(l.c)("div")`
  position: relative;
  margin: 0 0 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
`,vm=Object(l.c)(u.a)`
  margin: 17px 0 20px 0;
  display: block;
`,Dm=({actionName:e,Button:t,title:a,whiteOutActive:n})=>c.a.createElement(hm,null,n&&c.a.createElement(Cn,null),c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_ACTIONS_"+a})),c.a.createElement(vm,{color:"secondary"},c.a.createElement(O.c,{id:`DEVICE_ACTIONS_${e}_INFO`})),c.a.createElement(b.a,{justifyContent:"flex-end"},t));var fm=({activeItem:e})=>{const t=Object(o.useSelector)(t=>Object(v.selectDeviceData)(t,e.mac)),a=Object(v.getRawDeviceState)(t),n=Object(v.isUlte)(t),r=a===v.DeviceState.UPGRADING;return c.a.createElement(c.a.Fragment,null,(Object(v.hasActiveUnifiCare)(t)||Object(v.isUnifiCareEligible)(t))&&c.a.createElement(hm,null,c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),c.a.createElement(oc,{device:t})),c.a.createElement(Dm,{actionName:"LOCATE",title:"LOCATE",Button:c.a.createElement(Ha,{device:t})}),t.type===Me.DeviceType.UBB&&c.a.createElement(Dm,{title:"ALIGNMENT",actionName:"ALIGNMENT",Button:c.a.createElement(bn,{device:t})}),c.a.createElement(Dm,{actionName:"RESTART",title:"RESTART",Button:c.a.createElement(Ka,{device:t})}),c.a.createElement(hm,null,c.a.createElement(O.c,{id:"DEVICE_ACTIONS_CUSTOM_UPGRADE_LABEL"}),c.a.createElement(Nn,{device:t,whiteOutActive:r})),c.a.createElement(Dm,{title:"PROVISION_LABEL",actionName:"PROVISION",Button:c.a.createElement(qa,{device:t}),whiteOutActive:r}),n?c.a.createElement(Dm,{title:"REMOVE",actionName:"REMOVE",Button:c.a.createElement(_n,{device:t})}):c.a.createElement(Dm,{title:"FORGET",actionName:"FORGET",Button:c.a.createElement(Qa,{device:t})}),(t.type===Me.DeviceType.AP||t.type===Me.DeviceType.SWITCH)&&c.a.createElement(hm,null,c.a.createElement(O.c,{id:"DEVICE_ACTIONS_COPY_CONFIGURATION_LABEL"}),c.a.createElement(Mn,{device:t})),(t.type===Me.DeviceType.AP||t.type===Me.DeviceType.SWITCH||t.type===Me.DeviceType.UBB)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Dm,{title:"DEVICE_ACTIONS_DOWNLOAD_DEVICE_INFO_LABEL",actionName:"DOWNLOAD_DEVICE_INFO",Button:c.a.createElement(nn,{device:t})}),c.a.createElement(Dm,{title:"DEBUG",actionName:"DEBUG",Button:c.a.createElement(tn,{device:t})})))},Pm=a(668),Sm=a(1761),Am=a(2033),jm=a(216);const Nm=Object(l.c)("div")`
  width: 100%;
  margin-top: ${e=>e.marginTop||0}px;
  margin-bottom: ${e=>e.marginBottom||0}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ym=Object(l.c)(Pm.a)`
  color: ${({theme:e})=>e.motifPalette.text02};
  opacity: 0.4;
  margin-right: auto;
`,Lm=Object(l.c)(p.cb)`
  margin-right: auto;
  margin-left: 5px;
  height: 14px;
  width: 14px;
`,xm=Object(l.c)(fa.a)`
  margin-left: 0 !important;
`,Vm=l.a`
  flex-direction: column;
  align-items: flex-start;
`,wm=Object(l.c)("div")`
  display: flex;

  > div {
    + div {
      margin-left: 18px;
    }
  }
`;var Fm=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({usgSettings:{key:e,mss_clamp_mss:t,mss_clamp:a,offload_accounting:n,echo_server:c,offload_sch:r,offload_l2_blocking:l,lldp_enable_all:i}})=>({key:e,mss_clamp:a||Dn.USG_DEFAULTS.mss_clamp,mss_clamp_mss:t||Dn.USG_DEFAULTS.mss_clamp_mss,offload_accounting:n||Dn.USG_DEFAULTS.offload_accounting,offload_sch:r,offload_l2_blocking:l,echo_server:c||Dn.USG_DEFAULTS.echo_server,lldp_enable_all:i}),validationSchema:Ea.a.object().shape({mss_clamp:Ea.a.string(),mss_clamp_mss:Ea.a.number().when("mss_clamp",{is:jm.o.CUSTOM,then:Ea.a.number().label("DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING").required().min(Dn.USG_DEFAULTS.min_mss_clamp_mss).max(Dn.USG_DEFAULTS.mss_clamp_mss)}),offload_accounting:Ea.a.boolean(),offload_sch:Ea.a.boolean(),offload_l2_blocking:Ea.a.boolean(),echo_server:Ea.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(ya.f,c.a.createElement(O.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}})),lldp_enable_all:Ea.a.boolean()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(e=>{const{values:t,initialValues:a,setFieldValue:r,dirty:l,isValid:i,setFormDirty:E,setFormInvalid:s,resetForm:m,usgSettings:d,activeItem:p}=e,b=Object(o.useDispatch)(),I=Object(o.useSelector)(Am.a);Object(n.useEffect)(()=>{b(Object(_.j)({services:()=>{Object(vi.a)(a,t)||b(Object(Dn.saveSettings)({key:Dn.USG_DEFAULTS.key,...t},p._id,void 0,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:"services"}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:"services"}}})),m({values:t})}})),b(Object(_.i)({services:m}))},[a,t]),Object(n.useEffect)(()=>{E("services",l),s("services",!i)},[t,d,l,i]);const g=e=>{e.target.checked&&r("mss_clamp",e.target.name)},R=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?r("echo_server",""):r("echo_server",e.target.name))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),c.a.createElement(Nm,{marginBottom:16},c.a.createElement(wm,null,c.a.createElement(kl.a,{id:"mssClampingAuto",checked:t.mss_clamp===jm.o.AUTO,name:jm.o.AUTO,onChange:g},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"})),c.a.createElement(kl.a,{id:"mssClampingCustom",checked:t.mss_clamp===jm.o.CUSTOM,name:jm.o.CUSTOM,onChange:g},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"})),c.a.createElement(kl.a,{id:"mssClampingDisabled",checked:t.mss_clamp===jm.o.DISABLED,name:jm.o.DISABLED,onChange:g},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"})))),t.mss_clamp===jm.o.CUSTOM&&c.a.createElement(Nm,{marginBottom:12,className:Vm},c.a.createElement(ym,{htmlFor:"mss_clamp_mss"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING"})),c.a.createElement(Nr.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",name:"mss_clamp_mss",id:"mss_clamp_mss"})),c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_HARDWARE_OFFLOAD"}))),c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_OFFLOAD"})),c.a.createElement(Sm.a,{id:"offload_accounting",disabled:!I,onChange:()=>{r("offload_accounting",!t.offload_accounting)},checked:!!I&&t.offload_accounting})),c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_HARDWARE_SCHEDULE"})),c.a.createElement(Sm.a,{id:"offload_sch",onChange:()=>{r("offload_sch",!t.offload_sch)},checked:t.offload_sch})),c.a.createElement(Nm,{marginBottom:28},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_OFFLOAD_L2_BLOCKING"})),c.a.createElement(Sm.a,{id:"offload_l2_blocking",onChange:()=>{r("offload_l2_blocking",!t.offload_l2_blocking)},checked:t.offload_l2_blocking})),c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LLDP"}))),c.a.createElement(Nm,{marginBottom:28},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_LLDP_ON_ALL_INTERFACES"})),c.a.createElement(Sm.a,{id:"lldp_enable_all",onChange:()=>{r("lldp_enable_all",!t.lldp_enable_all)},checked:t.lldp_enable_all})),c.a.createElement(Nm,{marginBottom:12},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),c.a.createElement(Nm,{marginBottom:0},c.a.createElement(wm,null,c.a.createElement(kl.a,{id:"echoServerDefault",checked:t.echo_server===Dn.USG_DEFAULTS.echo_server,name:Dn.USG_DEFAULTS.echo_server,onChange:R},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"})),c.a.createElement(kl.a,{id:"echoServerIpOrHostname",checked:t.echo_server!==Dn.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:R},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})),c.a.createElement(xm,{message:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},c.a.createElement(Lm,{isActive:!0})))),t.echo_server!==Dn.USG_DEFAULTS.echo_server&&c.a.createElement(Nm,{marginBottom:0,marginTop:14,className:Vm},c.a.createElement(ym,{htmlFor:"echo_server"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})),c.a.createElement(Nr.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"echo_server",id:"echo_server"})))});const Mm=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,Um=Object(l.c)("div")`
  display: flex;

  > div {
    + div {
      margin-left: 18px;
    }
  }
`,Bm=Object(l.c)(b.a)`
  margin-bottom: 16px;
  width: 100%;
`,km=Object(ia.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a,lcm_brightness_override:n,lcm_brightness:c,lcm_idle_timeout_override:r,lcm_idle_timeout:l,outdoor_mode_override:i,power_source_ctrl:o}={}})=>({led_override:e!==v.LedOverride.OFF,led_override_color:t||v.DEFAULT_LED_COLOR,led_override_color_brightness:a>=0?a:v.DEFAULT_LED_BRIGHTNESS,lcm_brightness_override:n||!1,lcm_brightness:c>=0?c:100,lcm_idle_timeout_override:r||!1,lcm_idle_timeout:l||0,outdoor_mode_override:i||"default",power_source_ctrl:o||"auto"}),validationSchema:Ea.a.object().shape({led_override:Ea.a.string(),led_override_color:Ea.a.string(),led_override_color_brightness:Ea.a.number(),lcm_brightness_override:Ea.a.boolean(),lcm_brightness:Ea.a.number(),lcm_idle_timeout_override:Ea.a.boolean(),lcm_idle_timeout:Ea.a.number(),outdoor_mode_override:Ea.a.string(),power_source_ctrl:Ea.a.string()}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Wm=Object(st.compose)(O.f,km)(({activeItem:e,setFormDirty:t,dirty:a,values:r,resetForm:l,setFieldValue:i,disableLedOverrideFields:E,intl:s})=>{var m;const d=Object(o.useDispatch)(),{led_override:p}=e,b=Object(o.useSelector)(Dn.selectMgmtSettings),I=Object(Pr.i)(e),g=Object(Pr.j)(e),R=(null!==(m=null==b?void 0:b.led_enabled)&&void 0!==m&&m&&p!==v.LedOverride.OFF||p===v.LedOverride.ON)&&g;Object(n.useEffect)(()=>(d(Object(_.h)({screen:()=>{if(!a)return{};const e={...r,led_override:r.led_override?v.LedOverride.ON:v.LedOverride.OFF,lcm_brightness_override:I&&r.lcm_brightness_override,lcm_idle_timeout_override:I&&r.lcm_idle_timeout_override};return e.lcm_brightness_override||delete e.lcm_brightness,e.lcm_idle_timeout_override||delete e.lcm_idle_timeout,I||(delete e.lcm_brightness_override,delete e.lcm_idle_timeout_override),e}})),d(Object(_.j)({screen:()=>l({values:r})})),d(Object(_.i)({screen:l})),()=>{d(Object(_.h)({screen:null})),d(Object(_.j)({screen:null})),d(Object(_.i)({screen:null}))}),[d,l,r,a,e.mac,I]),Object(n.useEffect)(()=>{t("screen",a)},[t,a]);const C=Object(n.useCallback)((e,t,a)=>{e.target.checked&&i(t,a?"override"===e.target.name:e.target.name)},[i]),T=Object(n.useCallback)(e=>C(e,"lcm_brightness_override",!0),[C]),h=Object(n.useCallback)(e=>C(e,"lcm_idle_timeout_override",!0),[C]);return c.a.createElement(c.a.Fragment,null,!E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Bm,{justifyContent:"space-between"},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED"})),c.a.createElement(da.a,{type:"checkbox",name:"led_override"}))),R&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Mm,{marginBottom:12},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),c.a.createElement(Mm,{marginBottom:12},c.a.createElement(Wl.a,{size:"large",value:+r.led_override_color_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>i("led_override_color_brightness",e.target.value)})),c.a.createElement(Mm,{marginBottom:12},c.a.createElement(u.a,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),c.a.createElement(Mm,{marginBottom:12},c.a.createElement(Xs.a,{color:r.led_override_color,variant:"block",onChange:e=>{i("led_override_color","hex"in e?e.hex:void 0)},hexLabel:s.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(G.a,{variant:"inline",onClick:()=>{i("led_override_color",v.DEFAULT_LED_COLOR)}},c.a.createElement(O.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))),I&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Mm,{marginBottom:12},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_BRIGHTNESS"}))),c.a.createElement(Mm,{marginBottom:16},c.a.createElement(Um,null,c.a.createElement(kl.a,{id:"lcmBrigthnessDefault",checked:!r.lcm_brightness_override,name:"default",onChange:T},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"})),c.a.createElement(kl.a,{id:"lcmBrigthnessOverride",checked:r.lcm_brightness_override,name:"override",onChange:T},c.a.createElement(O.c,{id:"COMMON_ACTIONS_OVERRIDE"})))),r.lcm_brightness_override&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Mm,{marginBottom:12},c.a.createElement(Wl.a,{size:"large",value:+r.lcm_brightness,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>i("lcm_brightness",e.target.value)}))),c.a.createElement(Mm,{marginBottom:12},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_IDLE_TIMEOUT"}))),c.a.createElement(Mm,{marginBottom:16},c.a.createElement(Um,null,c.a.createElement(kl.a,{id:"lcmIdleTimeoutDefault",checked:!r.lcm_idle_timeout_override,name:"default",onChange:h},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_LED_DEFAULT_SETTINGS"})),c.a.createElement(kl.a,{id:"lcmIdleTimeoutOverride",checked:r.lcm_idle_timeout_override,name:"override",onChange:h},c.a.createElement(O.c,{id:"COMMON_ACTIONS_OVERRIDE"}))))))});const Hm=Object(l.c)("div")`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 30px;
  flex: 1 1 85%;
`,Gm=Object(l.c)("div")`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`;var Ym=Object(st.compose)(O.f,la(["general","screen","services"]))(({activeItem:e,isDirty:t,isInvalid:a,setFormDirty:n,setFormInvalid:r,intl:l})=>{const{_id:i,mac:E}=e,s=Object(o.useSelector)(ca),m=Object(o.useSelector)(ra),d=Object(o.useSelector)(na),_=Object(o.useSelector)(Dn.selectUsgSettings),u=Object(o.useSelector)(Ga.q)&&!e.unsupported,p=Object(o.useDispatch)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(Hm,null,u&&c.a.createElement(k.a,{variant:"tertiary",renderOnlyExpandedContent:!0,items:[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Gm,null,c.a.createElement(Rs,{activeItem:e,setFormDirty:n,setFormInvalid:r}))},{id:"screen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Gm,null,c.a.createElement(Wm,{activeItem:e,setFormDirty:n}))},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Gm,null,c.a.createElement(Fm,{activeItem:e,usgSettings:_,setFormDirty:n,setFormInvalid:r}))},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(fm,{activeItem:e})}]})),c.a.createElement(Ma,{isDirty:t,isInvalid:a,onFormSubmit:()=>{const e=[],t=Object.entries(d).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});(Object(Nc.a)(t)?Promise.resolve():p(Object(v.updateDeviceWithIdEndpoint)(t,i,E,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0}))).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{var e,t,a;null===(e=m.general)||void 0===e||e.call(m),null===(t=m.screen)||void 0===t||t.call(m),null===(a=m.services)||void 0===a||a.call(m)}}))});const $m=Object(l.c)(b.a)`
  margin: 16px 32px 0 32px;

  thead th {
    text-transform: none;
  }
`,zm=Object(l.c)("div")`
  table {
    th {
      text-transform: none;
    }

    tr {
      cursor: pointer;
    }
  }
`,Km=Object(l.c)(p.h)`
  position: absolute;
  right: 8px;
  color: inherit;
`,Xm=Object(l.c)("div")`
  margin-left: 10px;
`,qm=Object(l.c)(G.a)`
  margin-top: 16px;
  justify-content: flex-end;
  span {
    font-size: 12px;
  }
  svg {
    height: 14px;
    width: 13px;
  }
`,Zm=null,Jm="COMMON_DISABLED",Qm=[{id:"portName",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"})},{id:"portStatus",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"}),renderCell:({portStatus:e})=>c.a.createElement(c.a.Fragment,null,e,c.a.createElement(Km,{size:"small"}))}];var ed=({activeItem:e,children:t})=>{const{ethernet_overrides:a,port_overrides:l}=e,i=Object(o.useSelector)(va.selectNetworkGroups),E=Object(r.k)(),s=Object(v.getDeviceSpecs)(e),m=Object(n.useMemo)(()=>{const t=Object(tt.a)(e,"port_table",[]);if(t.length>0)return t;return Object.keys(s.ports).map(e=>({ifname:e,up:!1,enable:!1}))},[e,s.ports]),d=Object(n.useMemo)(()=>m.map(t=>{const{ifname:n}=t,r=t.port_idx,o=a.find(({ifname:e})=>e===n),E=o&&i.find(e=>e.id===o.networkgroup),{nameOverride:s}=Object(v.getCurrentPortData)(r-1,e),m=Object(Lc.d)(e,n),d=l&&l.find(({port_idx:e})=>m.portIdx===e),_=Object.values(hl.linkNegotiationOptions).find(({speed:e,full_duplex:t,autoneg:a})=>d&&d.speed&&!d.autoneg?d.speed===e&&d.full_duplex===t:a),u=s||c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:r,networkGroup:Object(v.getPortGroupLabel)(e,t,null==E?void 0:E.id)}}),p={...Object(xt.a)(t),networkGroup:E?E.id:Zm,networkGroupLabel:E?E.label:Jm,linkNegotiation:_.id,linkNegotiationLabel:_.label,linkNegotiationSpeed:_.speed,portName:u,portStatus:void 0,id:r,portIdx:r};return m.supportedValues&&0!==m.supportedValues.length||(p.linkNegotiationLabel="DEVICE_PROPERTIES_LINK_NEGOTIATION_AUTO"),p.portStatus=c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Jc,{cellData:p,deviceData:e,style:{minWidth:20}}),c.a.createElement(Xm,null,c.a.createElement(O.c,{id:p.networkGroup?p.linkNegotiationLabel:p.networkGroupLabel,values:{speed:Object(ft.c)(1e6*p.linkNegotiationSpeed/8,"bitrate")}}))),p}),[m]),_=Object(n.useCallback)(({ifname:e})=>E.push("ports/"+e),[E]);return c.a.createElement(zm,null,c.a.createElement(hr,{deviceData:e,hideAnomalies:!0}),c.a.createElement($m,{flexDirection:"column"},c.a.createElement(ne.a,{columns:Qm,rowHeight:35,disableColumnFilters:!0,items:d,onRowClick:_,hideCellOverflow:!1}),c.a.createElement(qm,{variant:"link",onClick:()=>E.push("ports/"+F.ALL),Icon:c.a.createElement(p.sb,{isActive:!0})},c.a.createElement(O.c,{id:"DEVICE_PORTS_TABLE_CONFIGURE_INTERFACES"}))))};const td=Object(l.c)(b.a)`
  position: relative;
  margin: -18px -30px 25px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};

  svg {
    position: absolute;
    left: 24px;
  }
`,ad=Object(l.c)(u.a)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`,nd=Object(l.c)(b.a)`
  width: 100%;
  padding: 30px;
`,cd=Object(l.c)(u.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`,rd=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`;const ld=Object(ia.g)({mapPropsToValues:({port:e})=>{const{nameOverride:t,enable:a}=e;return{name:t,enable:null==a||a}},validationSchema:Ea.a.object().shape({enable:Ea.a.boolean(),name:Ea.a.string()}),handleSubmit:(e,{props:{activeItem:{_id:t,port_overrides:a,mac:n},port:c,intl:r,history:l,updateDeviceWithIdEndpoint:i}})=>{const o=r.formatMessage({id:"DEVICE_PROPERTY_HEADER_PORTS"});i({port_overrides:[...(null==a?void 0:a.filter(({port_idx:e})=>e!==c.portIdx))||[],{port_idx:c.portIdx,...e}]},t,n,{successToast:{icon:Ot.a.success,message:"DEVICE_PORT_FORM_SAVE_SUCCESS"},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:o}},mergeAndOverrideKeys:["port_overrides"],extend:!0}).then(()=>{l.goBack()})}});var id=Object(st.compose)(Object(o.connect)((e,{activeItem:t,params:{subPanel:a}})=>({port:Object(v.getCurrentPortData)(+a.replace(/\D/g,""),t)}),{updateDeviceWithIdEndpoint:v.updateDeviceWithIdEndpoint}),O.f,ld)((function({activeItem:e,port:t,history:a,submitForm:r,resetForm:l,dirty:i}){const E=Object(n.useCallback)(()=>{l(),a.goBack()},[l,a]),s=Object(o.useSelector)(va.selectNetworkGroups),m=Object(Lc.h)(t.ifname,e,s),d=Object(v.getDeviceModelFeature)(e,"poe");return c.a.createElement(c.a.Fragment,null,c.a.createElement(nd,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(td,{alignItems:"center"},c.a.createElement(p.g,{onClick:E,style:{cursor:"pointer"}}),c.a.createElement(ad,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_PORT_WITH_NUMBER_AND_NETWORK_GROUP",values:{port:t.portIdx,networkGroup:null==m?void 0:m.label}}))),c.a.createElement(rd,{marginBottom:24},c.a.createElement(Nr.Field,{label:"DEVICE_PORT_FORM_NAME_LABEL",full:!0,name:"name"})),d&&c.a.createElement(rd,{marginBottom:24},c.a.createElement(b.a,{flexDirection:"column",flex:"1"},c.a.createElement(cd,null,c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_PORT_POWER_LABEL"})),c.a.createElement(u.a,{color:"tertiary"},c.a.createElement(O.c,{id:"DEVICE_PORT_FORM_PORT_POWER_DESCRIPTION"}))),c.a.createElement(Nr.Field,{name:"enable",type:"checkbox"}))),c.a.createElement(Ma,{isDirty:i,onFormSubmit:r,onFormCancel:E,allowCancel:!0}))})),od=a(2057);const Ed=Object(l.c)("div")`
  height: 100%;
`,sd=Object(l.c)("div")`
  margin: ${({theme:e})=>e.spacing["spacing-xl"]} 0;
`,md=[{id:"name",sortable:!0,minWidth:20,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_NAME"})},{id:"bssid",sortable:!0,minWidth:30,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_BSSID"})},{id:"essid",sortable:!0,minWidth:30,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_ESSID"})},{id:"channel",sortable:!0,minWidth:20,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_HEADER_CHANNEL"})}];function dd({activeItem:{vap_table:e}}){return c.a.createElement(Ed,null,c.a.createElement(ne.a,{items:e||[],disableColumnFilters:!0,disableTextPointer:!0,disableSelection:!0,columns:md,renderFooter:()=>e&&e.length?c.a.createElement(sd,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}})):c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_WLANS_TABLE_NO_WLAN"}),rowHeight:30,idField:"name"}))}var _d=a(293),ud=a(3),pd=a(36);const Od=Object(ud.a)(_d.selectAPGroupsData,pd.selectWifiNetworksData,d.c,(e,t,a)=>e.filter(e=>e.device_macs.includes(a)).map(e=>{const a=t.filter(t=>t.ap_group_ids.includes(e._id)),n=[];return a.forEach(t=>{t.wlan_band===pd.WlanBand.BOTH?n.push({...t,id:t._id+e._id+pd.WlanBand.NA,wlan_band:pd.WlanBand.NA},{...t,id:t._id+e._id+pd.WlanBand.NG,wlan_band:pd.WlanBand.NG}):n.push({...t,id:t._id+e._id})}),{...e,id:e._id,children:n}})),bd=Object(l.c)(p.yc)`
  margin-right: 7px;
  margin-bottom: 2px;
`,Id=[{id:"name",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_GROUP_TABLE_HEADER_NAME"}),renderCell:({name:e,attr_no_delete:t,children:a,wlan_band:n})=>a?c.a.createElement(u.a,{truncate:!0,color:"secondary"},t?c.a.createElement(c.a.Fragment,null,e," (",c.a.createElement(O.c,{id:"COMMON_WORD_DEFAULT"}),")"):e):c.a.createElement(u.a,{truncate:!0,color:"secondary"},n===pd.WlanBand.NG?c.a.createElement(c.a.Fragment,null,c.a.createElement(bd,{isActive:!0}),e," (",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_BAND_2GHZ"}),")"):c.a.createElement(c.a.Fragment,null,c.a.createElement(bd,{isActive:!0}),e," (",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_BAND_5GHZ"}),")"))}];var gd=()=>{const e=Object(o.useSelector)(Od);return Object(Wn.e)([Object(_d.fetchAPGroups)(void 0,{crudCacheStrategy:{type:Pt.a.CACHE}})],c.a.createElement(ne.a,{items:e,columns:Id,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0}))},Rd=a(2071),Cd=a(2088),Td=a(2089);const hd=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,vd=Object(l.c)("div")`
  > div {
    padding: 0;
  }
`;var Dd=function({activeItem:e,...t}){var a,n;const r=Object(v.isAdopted)(e),l=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(od.a,{activeItem:e})}];if(r){(null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.mac)&&l.push({id:"uplink",label:"wire"===e.uplink.type?c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}):c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK_WIRELESS"}),renderContent:()=>c.a.createElement(Td.a,Object.assign({activeItem:e},t))});const r=[...null!==(n=null==e?void 0:e.radio_table)&&void 0!==n?n:[]].sort(v.sortRadios).reverse();(null==r?void 0:r.length)&&l.push({id:"airStats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_AIR_STATS"}),renderContent:()=>((null==e?void 0:e.radio_table)||[]).map(({radio:t})=>c.a.createElement(Cd.a,{activeItem:e,radio:t,key:t}))}),l.push({id:"downlinks",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_DOWNLINKS"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))}),l.push({id:"apGroups",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>c.a.createElement(gd,null)}),l.push({id:"clients",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(ls.a,Object.assign({activeItem:e},t))}),l.push({id:"history",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_HISTORY"}),renderContent:()=>c.a.createElement(vd,null,c.a.createElement(Tc,Object.assign({activeItem:e},t)))}),l.push({id:"wlan",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_WLAN"}),renderContent:()=>c.a.createElement(dd,{activeItem:e})})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(Rd.a,{activeItem:e}),c.a.createElement(hd,{variant:"tertiary",items:l,renderOnlyExpandedContent:!0}))};const fd=Object(l.c)("div")`
  width: 100%;
  margin-bottom: ${e=>e.marginBottom||0}px;

  input {
    width: 100% !important;
  }
`,Pd=Object(l.c)(re.g)`
  margin-bottom: 16px;
  width: 100%;
`,Sd=Object(ia.g)({mapPropsToValues:({activeItem:{led_override:e,led_override_color:t,led_override_color_brightness:a}={}})=>({led_override:e,led_override_color:t,led_override_color_brightness:a}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var Ad=Object(O.f)(Sd(({activeItem:e,setFormDirty:t,setFormInvalid:a,dirty:r,isValid:l,values:i,resetForm:E,setFieldValue:s,intl:m,formName:d="led"})=>{const p=Object(o.useDispatch)(),{led_override:b}=e,I=Object(o.useSelector)(Dn.selectMgmtSettings),g=Object(Pr.j)(e),R=(Object(tt.a)(I,"led_enabled",!1)&&b!==v.LedOverride.OFF||b===v.LedOverride.ON)&&g;Object(n.useEffect)(()=>(p(Object(_.h)({[d]:()=>i})),p(Object(_.j)({[d]:()=>E({values:i})})),p(Object(_.i)({[d]:E})),()=>{p(Object(_.h)({[d]:null})),p(Object(_.j)({[d]:null})),p(Object(_.i)({[d]:null}))}),[p,E,i,d]),Object(n.useEffect)(()=>{t(d,r),a(d,!l)},[t,r,a,l,d]);const C=Object(n.useCallback)(()=>["on","default"].includes(i.led_override)?s("led_override","off"):s("led_override","on"),[s,i.led_override]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(Pd,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_LED_ENABLE"})),c.a.createElement(Sm.a,{checked:["on","default"].includes(i.led_override),onChange:C}))),R&&c.a.createElement(c.a.Fragment,null,c.a.createElement(fd,{marginBottom:12},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED_BRIGHTNESS"})),c.a.createElement(fd,{marginBottom:12},c.a.createElement(Wl.a,{size:"large",value:+i.led_override_color_brightness||100,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement("span",null,e,"%"),onChange:e=>s("led_override_color_brightness",e.target.value)})),c.a.createElement(fd,{marginBottom:12},c.a.createElement(u.a,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_COLOR"}))),c.a.createElement(fd,{marginBottom:12},c.a.createElement(Xs.a,{color:(null==i?void 0:i.led_override_color)||v.DEFAULT_LED_COLOR,variant:"block",onChange:e=>{s("led_override_color","hex"in e?e.hex:void 0)},hexLabel:m.formatMessage({id:"DEVICE_PROPERTIES_LABEL_HEX"}),actionButton:c.a.createElement(G.a,{variant:"inline",onClick:()=>{s("led_override_color",v.DEFAULT_LED_COLOR)}},c.a.createElement(O.c,{id:"COMMON_VALUE_REVERT_BUTTON"}))}))))}));const jd=Object(l.c)(b.a)`
  padding: 0 32px;
`;var Nd=Object(st.compose)(la(["general","led","services","network"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"led",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(Ad,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(jd,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});_(Object(v.updateDeviceWithIdEndpoint)(t,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),yd=a(2034);const Ld=Object(l.c)("div")`
  height: 100%;
`,xd=Object(l.c)("div")`
  display: table;
  width: 100%;
`,Vd=Object(l.c)("div")`
  display: table-row;
`,wd=Object(l.c)("div")`
  display: table-cell;
  vertical-align: top;
`,Fd=Object(l.c)("span")`
  display: table-cell;
  padding-left: 12px;
  padding-bottom: 8px;
  text-align: right;
  vertical-align: top;
`,Md=Object(l.c)("div")`
  margin-bottom: 8px;
`;var Ud=Object(O.f)((function({activeItem:e,radioType:t,radioName:a,intl:n,hideChUtil:r=!1}){const{radio_table:l,radio_table_stats:i,type:o}=e,E=l.find(e=>e.radio===t&&(!a||e.name===a)),s=null==i?void 0:i.find(e=>e.radio===t),m=Object(v.getRadioChannelUtilization)(e,s),{totalPackets:d,totalBytes:_,droppedPercentage:p,retryPercentage:b}=Object(v.getApRadioStats)(e,E,"rx"),{totalPackets:I,totalBytes:g,droppedPercentage:R,retryPercentage:C}=Object(v.getApRadioStats)(e,E,"tx"),T=Object(v.getRadioStatsTransmitPowerString)(e,s,n);return c.a.createElement(Ld,null,c.a.createElement(xd,null,c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(Po.a,{device:e,radio:E,hidePowerInfo:!0,textSize:"caption"})))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TRANSMIT_POWER"}))),c.a.createElement(Fd,null,T?c.a.createElement(u.a,{color:"secondary"},T):c.a.createElement(u.a,{color:"secondary"}," "))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TX_PKTS_BYTES"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},I," / ",g))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RX_PKTS_BYTES"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},d," / ",_))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RETRY_DROPPED"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},C,"% / ",R,"%"))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RETRY_DROPPED"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},b,"% / ",p,"%"))),!r&&m&&c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_CHANNEL_UTILIZATION"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},`${m.total}% / ${m.selfRx}% / ${m.selfTx}%`))),s&&o!==v.DeviceType.UBB&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Md,null),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_CLIENTS"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},s["user-num_sta"]))),c.a.createElement(Vd,null,c.a.createElement(wd,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_GUESTS"}))),c.a.createElement(Fd,null,c.a.createElement(u.a,{color:"secondary"},s["guest-num_sta"]))))))}));const Bd=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,kd=Object(l.c)(u.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-s"]};
`;function Wd({activeItem:e}){return c.a.createElement(Bd,null,c.a.createElement(kd,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO2G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.NG}),c.a.createElement(kd,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.NA}))}var Hd=({activeItem:e,forUdm:t,forUdmPro:a})=>{const r=Object(o.useDispatch)();return Object(n.useEffect)(()=>{r(Object(ce.fetchDeviceUsageReport)(e.mac))},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(cs,{gwMac:e.mac,keys:["mem","cpu"],forUdm:t,pickDatumsWithKey:a?"gw":null,heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"}),t&&c.a.createElement(cs,{gwMac:e.mac,keys:["num_sta"],forUdm:t,heading:"DEVICE_GATEWAY_CLIENTS_STAT_CHART_HEADER"}))};const Gd=Object(l.c)("div")`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`,Yd=l.a`
  th {
    text-transform: none;
    padding-left: 0;
    padding-right: 0;
  }
`,$d=l.a`
  :hover {
    cursor: pointer;
  }

  td {
    padding-left: 0;
    padding-right: 25px;
  }
`,zd=Object(l.c)("div")`
  white-space: pre;
`,Kd=Object(l.c)("div")`
  margin: 20px 0;
`,Xd=Object(l.c)(u.a)`
  color: ${({theme:e})=>e.colors.blue};
`,qd=[{id:"nameInfo",minWidth:85,growthFactor:1,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_HEADER_NAME"}),renderCell:e=>c.a.createElement(Xd,{truncate:!0},Object(h.getClientDisplayName)(e))},{id:"connectionInfo",minWidth:50,growthFactor:2,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_CONNECTION"}),renderCell:({is_wired:e,network:t,essid:a})=>c.a.createElement(u.a,{truncate:!0},e?t:a)},{id:"signalInfo",minWidth:50,growthFactor:1,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_SIGNAL"}),renderCell:({is_wired:e,rssi:t})=>!e&&c.a.createElement(zd,null,Object(Hl.a)(t)," ",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}))},{id:"txRateInfo",minWidth:50,growthFactor:1,renderLabel:()=>c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_TABLE_HEADER_TX_RATE"}),renderCell:({is_wired:e,tx_rate:t})=>!e&&c.a.createElement(H.a,{type:"bytes",input:1e3*t,options:"bitrate"})}];var Zd=Object(st.compose)(Object(o.connect)(e=>({clientsExist:Object(h.selectClientsDataExist)(e)}),{fetchClients:h.fetchClients}),Object(pt.c)(({clientsExist:e,fetchClients:t})=>e||t()))((function({activeItem:e,params:t,path:a,history:n}){const{site:l,page:i,subPage:E}=t,s=Object(o.useDispatch)(),m=Object(o.useSelector)(t=>Object(h.selectClientsByDevice)(t,e));return c.a.createElement(Gd,null,c.a.createElement(ne.a,{items:m,disableColumnFilters:!0,headerRowClassName:Yd,rowClassName:$d,columns:qd,initialSortBy:"ip",renderFooter:()=>m.length>0?c.a.createElement(Kd,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:m.length}})):c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_AP_DOWNLINKS_TABLE_NO_CLIENTS"}),rowHeight:30,onRowClick:e=>{const t=Object(r.i)(a,{id:e._id,site:l,page:i,panel:"about",subPage:E});n.push(t),s(Object(_.g)({type:C.b.CLIENT,mac:e.mac}))},idField:"_id"}))}));const Jd=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,Qd=l.a`
  padding: 0;
  margin: 0;
`;var e_=function({activeItem:e,...t}){const a=Rm(e),n=Object(v.isAdopted)(e),r=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(yd.a,{activeItem:e})},...a];return n&&r.push({id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(Wd,{activeItem:e})},{id:"apGroups",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AP_GROUP"}),renderContent:()=>c.a.createElement(gd,null)},{id:"downlinks",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>c.a.createElement(Zd,Object.assign({activeItem:e},t))},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>c.a.createElement(_m,Object.assign({activeItem:e},t))},{id:"statistics",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(Hd,Object.assign({activeItem:e,forUdm:!0},t))}),c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(ot.a,{item:e,headerTitle:"DEVICE_HEADER_WIFI_EXPERIENCE",showGraph:e&&Object(we.c)(e.satisfaction),itemType:"ap",canReport:!0}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(Jd,{variant:"tertiary",items:r,contentClassName:Qd,renderOnlyExpandedContent:!0}))};const t_=Object(l.c)(u.a)`
  flex: 1;
  margin-right: 12px;
`,a_=Object(l.c)(b.a,{shouldForwardProp:e=>!["marginTop","marginBottom"].includes(e)})`
  width: 100%;
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
  justify-content: space-between;
  align-items: center;
`,n_=Object(l.c)(p.cb)`
  margin-right: auto;
  margin-left: 5px;
  height: 14px;
  width: 14px;
`,c_=Object(l.c)(fa.a)`
  margin-left: 0 !important;
`,r_=Object(l.c)("div")`
  display: flex;

  > div {
    + div {
      margin-left: 18px;
    }
  }
`,l_=Object(ia.g)({mapPropsToValues:({usgSettings:{mss_clamp_mss:e,mss_clamp:t,arp_cache_timeout:a,arp_cache_base_reachable:n,echo_server:c},activeItem:{jumboframe_enabled:r=!1,flowctrl_enabled:l=!1}})=>({jumboframe_enabled:r,flowctrl_enabled:l,usgSettings:{mss_clamp:t||Dn.USG_DEFAULTS.mss_clamp,mss_clamp_mss:e||Dn.USG_DEFAULTS.mss_clamp_mss,arp_cache_timeout:a||"normal",arp_cache_base_reachable:n||Dn.USG_DEFAULTS.arp_cache_base_reachable,echo_server:c||Dn.USG_DEFAULTS.echo_server}}),validationSchema:Ea.a.object().shape({jumboframe_enabled:Ea.a.boolean(),flowctrl_enabled:Ea.a.boolean(),usgSettings:Ea.a.object().shape({mss_clamp:Ea.a.string(),mss_clamp_mss:Ea.a.number().when("mss_clamp",{is:Dn.MssClamp.CUSTOM,then:Ea.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP").required().min(Dn.USG_DEFAULTS.min_mss_clamp_mss).max(Dn.USG_DEFAULTS.mss_clamp_mss)}),arp_cache_timeout:Ea.a.string(),arp_cache_base_reachable:Ea.a.number().when("arp_cache_timeout",{is:"custom",then:Ea.a.number().label("DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT").required().min(1).max(Dn.USG_DEFAULTS.max_arp_cache_base_reachable)}),echo_server:Ea.a.string().label("DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME").required().matches(ya.f,c.a.createElement(O.c,{id:"COMMON_VALIDATION_HOSTNAME_OR_IPV4",values:{name:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME"})}}))})}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}});var i_=Object(st.compose)(Object(o.connect)(e=>({usgSettings:Object(Dn.selectUsgSettings)(e)})),l_)(({values:e,dirty:t,resetForm:a,setFormDirty:r,setFieldValue:l})=>{const i=Object(o.useDispatch)();Object(n.useEffect)(()=>{const{usgSettings:t,...n}=e;i(Object(_.h)({services:()=>n})),i(Object(_.j)({services:()=>{i(Object(Dn.saveSettings)({key:Dn.USG_DEFAULTS.key,...t})),a({values:e})}})),i(Object(_.i)({services:a}))},[e]),Object(n.useEffect)(()=>{r("services",t)},[t]);const E=e=>{e.target.checked&&l("usgSettings.mss_clamp",e.target.name)},s=e=>{e.target.checked&&l("usgSettings.arp_cache_timeout",e.target.name)},m=e=>{e.target.checked&&("echoServerIpOrHostname"===e.target.name?l("usgSettings.echo_server",""):l("usgSettings.echo_server",e.target.name))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(a_,{marginBottom:10},c.a.createElement(u.a,{weight:"bold",color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_MSS_CLAMPING"}))),c.a.createElement(a_,{marginBottom:24},c.a.createElement(r_,null,c.a.createElement(kl.a,{id:"mssClampingAuto",checked:e.usgSettings.mss_clamp===Dn.MssClamp.AUTO,name:Dn.MssClamp.AUTO,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_AUTO"})),c.a.createElement(kl.a,{id:"mssClampingCustom",checked:e.usgSettings.mss_clamp===Dn.MssClamp.CUSTOM,name:Dn.MssClamp.CUSTOM,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_CUSTOM"})),c.a.createElement(kl.a,{id:"mssClampingDisabled",checked:e.usgSettings.mss_clamp===Dn.MssClamp.DISABLED,name:Dn.MssClamp.DISABLED,onChange:E},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_VALUE_MSS_CLAMPING_DISABLED"})))),e.usgSettings.mss_clamp===Dn.MssClamp.CUSTOM&&c.a.createElement(a_,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Nr.Field,{full:!0,placeholder:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING_PLACEHOLDER",label:"DEVICE_PROPERTIES_LABEL_CUSTOM_MSS_CLAMPING",name:"usgSettings.mss_clamp_mss"})),c.a.createElement(a_,{marginBottom:10},c.a.createElement(u.a,{weight:"bold",color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT"}))),c.a.createElement(a_,{marginBottom:24},c.a.createElement(r_,null,c.a.createElement(kl.a,{id:"normal",checked:"normal"===e.usgSettings.arp_cache_timeout,name:"normal",onChange:s},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_NORMAL"})),c.a.createElement(kl.a,{id:"min-dhcp-lease",checked:"min-dhcp-lease"===e.usgSettings.arp_cache_timeout,name:"min-dhcp-lease",onChange:s},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_MIN_DHCP_LEASE"})),c.a.createElement(kl.a,{id:"custom",checked:"custom"===e.usgSettings.arp_cache_timeout,name:"custom",onChange:s},c.a.createElement(O.c,{id:"COMMON_LABEL_CUSTOM"})),c.a.createElement(c_,{message:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_CUSTOM_TOOLTIP"}),width:180,position:"left"},c.a.createElement(n_,{isActive:!0})))),"custom"===e.usgSettings.arp_cache_timeout&&c.a.createElement(a_,{marginBottom:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Nr.Field,{full:!0,label:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_LABEL",placeholder:"DEVICE_PROPERTIES_LABEL_ARP_CACHE_TIMEOUT_PLACEHOLDER",name:"usgSettings.arp_cache_base_reachable"})),c.a.createElement(a_,{marginBottom:16},c.a.createElement(t_,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAME"})),c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_JUMBO_FRAME",name:"jumboframe_enabled",type:"checkbox"})),c.a.createElement(a_,{marginBottom:24},c.a.createElement(t_,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL"})),c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_VALUES_ENABLE_FLOW_CONTROL",name:"flowctrl_enabled",type:"checkbox"})),c.a.createElement(a_,{marginBottom:10},c.a.createElement(u.a,{weight:"bold",color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ECHO_SERVER"}))),c.a.createElement(a_,{marginBottom:0},c.a.createElement(r_,null,c.a.createElement(kl.a,{id:"echoServerDefault",checked:e.usgSettings.echo_server===Dn.USG_DEFAULTS.echo_server,name:Dn.USG_DEFAULTS.echo_server,onChange:m},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_DEFAULT"})),c.a.createElement(kl.a,{id:"echoServerIpOrHostname",checked:e.usgSettings.echo_server!==Dn.USG_DEFAULTS.echo_server,name:"echoServerIpOrHostname",onChange:m},c.a.createElement(O.c,{id:"COMMON_LABEL_CUSTOM"})),c.a.createElement(c_,{message:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_IP_OR_HOSTNAME_TOOLTIP"}),width:180},c.a.createElement(n_,{isActive:!0})))),e.usgSettings.echo_server!==Dn.USG_DEFAULTS.echo_server&&c.a.createElement(a_,{marginBottom:0,marginTop:24,alignItems:"flex-start",flexDirection:"column"},c.a.createElement(Nr.Field,{full:!0,label:"DEVICE_PROPERTIES_VALUES_ECHO_SERVER_PLACEHOLDER",name:"usgSettings.echo_server"})))});const o_=Object(l.c)(b.a)`
  width: 100%;
`,E_=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,s_=l.a`
  padding: 0;
  margin: 0;
`;var m_=Object(st.compose)(la(["general","screen","network","services"]),O.f)((function({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l,...i}){const E=Object(o.useSelector)(na),s=Object(o.useSelector)(ca),m=Object(o.useSelector)(ra),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"screen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(em,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(i_,{activeItem:e,setFormDirty:t})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e,disableForget:!0})}];return(Object(v.hasActiveUnifiCare)(e)||Object(v.isUnifiCareEligible)(e))&&(p.forEach(e=>{e.openByDefault=!1}),p.unshift({id:"unifiCare",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>c.a.createElement(oc,{device:e}),openByDefault:!0})),c.a.createElement(c.a.Fragment,null,c.a.createElement(o_,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(E_,{variant:"tertiary",renderOnlyExpandedContent:!0,items:p,contentClassName:s_})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(E).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});u(Object(v.updateDeviceWithIdEndpoint)(t,d,_,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))}));const d_=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var __=({activeItem:e,...t})=>{const a=Rm(e),n=Object(v.isAdopted)(e),r=!Object(v.hasActiveUnifiCare)(e)&&Object(v.isUnifiCareEligible)(e),l=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(yd.a,{activeItem:e})},...a,...n?[{id:"downlinks",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(ls.a,Object.assign({activeItem:e},t))},{id:"networks",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(_m,{activeItem:e})},{id:"stats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(Hd,{activeItem:e,forUdmPro:!0})}]:[],...Object(v.hasActiveUnifiCare)(e)?[{id:"unifiCare",label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_UNIFI_CARE"}),renderContent:()=>c.a.createElement(oc,{device:e,hideWarning:!0})}]:[]];return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(hr,Object.assign({deviceData:e,navigateTo:"ports"},t)),c.a.createElement(zn.a,{activeItem:e}),r&&c.a.createElement(oc,{device:e,hideWarning:!0}),c.a.createElement(d_,{variant:"tertiary",items:l,renderOnlyExpandedContent:!0}))};const u_=Object(l.c)(b.a)`
  padding: 0 32px;
`;var p_=Object(st.compose)(la(["general","lcmScreen","services","network"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"lcmScreen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ns,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(_m,{activeItem:e}),c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a}))},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e,disableForget:!0})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u_,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{lcm:a,...n}=t;_(Object(v.updateDeviceWithIdEndpoint)(n,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const O_=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,b_=Object(l.c)(u.a)`
  margin-bottom: 4px;
`;function I_({activeItem:e}){return Object(v.isAdopted)(e)?c.a.createElement(O_,null,c.a.createElement(b_,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.NA}),c.a.createElement(b_,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.AD})):null}var g_=a(2099);const R_=Object(l.c)(b.a)`
  margin-bottom: 8px;
  justify-content: space-between;
`,C_=Object(l.c)(u.a)`
  margin-top: 16px; // 16
  margin-bottom: 4px; // 4
`,T_=l.a`
  margin-right: -17px;
`,h_=Object(l.c)(fa.a)`
  margin-left: 4px; // 4
  display: inline-block;
  vertical-align: text-bottom;
`;function v_({deviceData:e={},ubbDeviceType:t,pendingAdoption:a}){const{mac:n,ip:r,link_capacity:l,uptime:i,has_temperature:o,general_temperature:E,sys_stats:s,uplink:m}=e,{rssi:d,tx_rate:_,tx_packets:I,rx_rate:g,tx_bytes:R,"tx_bytes-r":C,rx_packets:T,rx_bytes:h,"rx_bytes-r":v,speed:D,full_duplex:f}=m||{},P=v+C,S=Object(xc.w)(e);return c.a.createElement(b.a,{flexDirection:"column"},n&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_MAC"})),c.a.createElement(u.a,{color:"secondary"},n)),r&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_IP_ADDRESS"})),c.a.createElement(u.a,{color:"secondary"},r)),!a&&c.a.createElement(c.a.Fragment,null,l>0&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_CAPACITY"})),c.a.createElement(H.a,{type:"bytes",color:"secondary",input:1e6*l/8,options:"bitrate"})),o&&!!E&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TEMPERATURE_VALUE",values:{temperature:E}}))),i&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_UPTIME"})),c.a.createElement(H.a,{type:"uptime",color:"secondary",input:i})),s&&s.mem_total&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_MEMORY_USAGE"})),c.a.createElement(H.a,{type:"percent",input:s.mem_used/s.mem_total,color:"secondary"})),S&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE"})),c.a.createElement("span",null,c.a.createElement(u.a,{color:"secondary"},Object(xc.w)(e)),c.a.createElement(h_,{message:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LOAD_AVERAGE_TOOLTIP"}),width:200,position:"bottomRight",tooltipClassName:T_,portal:!0},c.a.createElement(p.cb,{isActive:!0})))),!!m&&c.a.createElement(c.a.Fragment,null,c.a.createElement(C_,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:t===G_.STATION?"DEVICE_PROPERTY_UPLINK_WIRELESS":"DEVICE_PROPERTY_UPLINK_WIRED"})),t===G_.STATION&&c.a.createElement(c.a.Fragment,null,d&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"})),c.a.createElement(u.a,{color:"secondary"},Object(Gl.a)(d)," (",Object(Hl.a)(d)," ",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")),_&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_TX_RATE"})),c.a.createElement(H.a,{type:"bytes",color:"secondary",input:1e3*_/8,options:"bitrate"})),g&&c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RX_RATE"})),c.a.createElement(H.a,{type:"bytes",color:"secondary",input:1e3*g/8,options:"bitrate"}))),t===G_.ACCESS_POINT&&c.a.createElement(c.a.Fragment,null,c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_SPEED"})),c.a.createElement(u.a,{color:"secondary"},D)),c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_DUPLEX"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:f?"DEVICE_PROPERTY_UPLINK_DUPLEX_FULL":"DEVICE_PROPERTY_UPLINK_DUPLEX_HALF"})))),c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_DOWN_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},T&&h?c.a.createElement(c.a.Fragment,null,T.toLocaleString()," / ",c.a.createElement(H.a,{type:"bytes",input:h,color:"secondary"})):"0.00 / 0.00")),c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_UP_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},I&&R?c.a.createElement(c.a.Fragment,null,I.toLocaleString()," / ",c.a.createElement(H.a,{type:"bytes",input:R,color:"secondary"})):"0.00 / 0.00")),c.a.createElement(R_,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_ACTIVITY"})),c.a.createElement(H.a,{type:"bytes",color:"secondary",input:P,options:"bitrate"})))))}var D_=a(2081),f_=a.n(D_);const P_=Object(l.c)(b.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,S_=Object(l.c)(b.a)`
  text-align: center;
  width: 122px;
`,A_=Object(l.c)(b.a)`
  padding-top: 50px;
  width: 100%;
`,j_=l.e`
  0% {
    width: 5%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }  
`,N_=l.e`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }  
  50% {
    opacity: 0;
  }
`,y_=Object(l.c)("div")`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.neutralBackground};
`,L_=Object(l.c)("div")`
  animation: ${j_} 5s infinite;
  width: 100%;
  opacity: 1;
  height: 5px;
  margin-top: -1px;
  position: absolute;
  background-image: linear-gradient(
    to right,
    ${({linkAnimationColor:e})=>e},
    transparent 30%,
    transparent 70%,
    ${({linkAnimationColor:e})=>e}
  );
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;

  &:after {
    content: '';
    display: block;
    background-color: ${({linkAnimationColor:e})=>e};
    width: 100%;
    position: absolute;
    border-radius: 3px;
    height: 100%;
    opacity: 0;
    animation: ${N_} 5s infinite;
  }
`,x_=Object(l.c)(b.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,V_=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,w_=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,F_=Object(l.c)(b.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,M_=Object(l.c)(H.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,U_=Object(l.c)(u.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,B_=Object(l.c)(b.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,k_=Object(l.c)(p.ab)`
  margin-right: 12px;
`;function W_({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},link_quality:n,led_override_color:r}=e,l=Object(we.b)(n),i=!t&&Object(xc.Bd)(e),o=!t&&Object(xc.Ad)(e),E=Object(tt.a)(Bl.a[Object(tt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?Oe.a["color-danger"]:t||"warning"===l?Oe.a["color-warning"]:Oe.a["color-success"],c.a.createElement(c.a.Fragment,null,c.a.createElement(P_,{justifyContent:"space-between"},c.a.createElement(S_,{flexDirection:"column"},c.a.createElement(F_,null,c.a.createElement(V_,{src:f_.a}),c.a.createElement(w_,{color:r||Oe.a["blue-0"],left:23})),c.a.createElement(U_,{color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP"})),c.a.createElement(U_,{color:"secondary"},E)),c.a.createElement(A_,{flexDirection:"column",alignItems:"center"},c.a.createElement(y_,null,c.a.createElement(L_,{linkAnimationColor:s})),c.a.createElement(x_,{flexDirection:"column"},i&&c.a.createElement(M_,{type:"percent",input:n/100,style:{color:be.a.getGradientColor(n/100)}}),c.a.createElement(U_,{color:"primary",weight:"bold"},i&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),c.a.createElement(S_,{flexDirection:"column"},c.a.createElement(F_,null,c.a.createElement(V_,{src:f_.a,flip:!0}),c.a.createElement(w_,{color:a.led_override_color||Oe.a["blue-0"],right:23})),c.a.createElement(U_,{color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"})),c.a.createElement(U_,{color:"secondary"},E))),(t||o)&&c.a.createElement(B_,{alignItems:"center"},c.a.createElement(k_,{width:24,height:24}),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const H_=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var G_;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(G_||(G_={}));var Y_=function({activeItem:e}){const{peer_ubb:t,adopted:a}=e,n=Object(v.getUplinkAttrs)(e)||{},r=null==t?void 0:t.uplink,l=t&&(!Object(v.getIsUbbPeerAdopted)(e)||!a),i=[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(g_.a,{activeItem:e})},...t?[{id:"station",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"}),"  (",c.a.createElement(O.c,{id:"wireless"===(null==r?void 0:r.type)?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>c.a.createElement(v_,{deviceData:t,ubbDeviceType:G_.STATION,pendingAdoption:l})}]:[],{id:"accessPoint",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP"}),"  (",c.a.createElement(O.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"}),")"),renderContent:()=>c.a.createElement(v_,{deviceData:e,ubbDeviceType:G_.ACCESS_POINT,pendingAdoption:l})},...l?[]:[{id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(I_,{activeItem:e})}]];return c.a.createElement(c.a.Fragment,null,c.a.createElement(W_,{activeItem:e,pendingAdoption:l}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(H_,{variant:"tertiary",items:i,renderOnlyExpandedContent:!0}))};const $_=Object(l.c)("div")`
  margin-bottom: 20px;
`,z_=Object(l.c)(u.a)`
  margin-bottom: 10px;
`,K_=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,X_=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,q_=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var Z_=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{const{config_network:t,peer_ubb:a,ip:n}=e,{type:c="dhcp",ip:r=n||"",netmask:l,gateway:i="",dns1:o="",dns2:E="",dnssuffix:s=""}=t,{type:m="dhcp",ip:d=a.ip||"",netmask:_,gateway:u="",dns1:p="",dns2:O="",dnssuffix:b=""}=a.config_network;return{config_network:{type:c,ip:r,netmask:l,gateway:i,dns1:o,dns2:E,dnssuffix:s},peer_ubb:{config_network:{type:m,ip:d,netmask:_,gateway:u,dns1:p,dns2:O,dnssuffix:b}}}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Ea.a.object().shape({config_network:Ws,peer_ubb:Ea.a.object().shape({config_network:Ws})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:r,resetForm:l,isValid:i})=>{const E=Object(o.useDispatch)();return Object(n.useEffect)(()=>(E(Object(_.h)({[iu]:()=>{const{config_network:e,peer_ubb:{config_network:t}}=r,a={config_network:{type:e.type},peer_ubb:{config_network:{type:t.type}}};return"dhcp"!==e.type&&(a.config_network={...e}),"dhcp"!==t.type&&(a.peer_ubb.config_network={...t}),a}})),E(Object(_.j)({[iu]:()=>l({values:r})})),E(Object(_.i)({[iu]:l})),()=>{E(Object(_.h)({[iu]:null})),E(Object(_.j)({[iu]:null})),E(Object(_.i)({[iu]:null}))}),[E,l,r]),Object(n.useEffect)(()=>{e(iu,a),t(iu,!i)},[e,t,a,i]),c.a.createElement(c.a.Fragment,null,c.a.createElement(z_,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"})),c.a.createElement($_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:q_})),"static"===r.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(K_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),c.a.createElement(K_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),c.a.createElement(K_,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0})))),c.a.createElement(z_,{color:"primary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP_SHORT"})),c.a.createElement($_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"peer_ubb.config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:q_})),"static"===r.peer_ubb.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(K_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"peer_ubb.config_network.ip",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"peer_ubb.config_network.dns1",full:!0}))),c.a.createElement(K_,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"peer_ubb.config_network.netmask",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"peer_ubb.config_network.dns2",full:!0}))),c.a.createElement(K_,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"peer_ubb.config_network.gateway",full:!0})),c.a.createElement(X_,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"peer_ubb.config_network.dnssuffix",full:!0})))))});const J_=Object(l.c)(b.a)`
  margin-top: -15px;
`,Q_=l.a`
  th {
    text-transform: none;
    padding-left: 0;
    padding-right: 10px;
  }
`,eu=l.a`
  text-align: left;
  padding-left: 0;
  padding-right: 10px;
`,tu=l.a`
  padding: 0;
  margin: 0;
  text-align: left;
`;function au({activeItem:{downlink_table:e}}){const t=Object(o.useSelector)(v.selectDevicesData),a=Object(o.useDispatch)(),n=[{id:"mac",sortable:!0,label:c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP_SHORT"}),renderCell:e=>{if(!e)return null;const n=t.find(t=>t.mac===e.mac);return n?c.a.createElement(G.a,{name:"propertyPanelButton",onClick:()=>a(Object(_.g)({type:C.b.DEVICE,mac:e.mac})),size:"small",className:tu,variant:"link"},Object(D.b)(n)):e.mac}},{id:"rssi",sortable:!0,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SIGNAL"}),renderCell:e=>c.a.createElement(u.a,{color:"secondary"},Object(Gl.a)(e.rssi)," (",Object(Hl.a)(e.rssi)," ",c.a.createElement(O.c,{id:"COMMON_DEVICE_RADIO_TRANSMIT_POWER_DBM"}),")")}];return c.a.createElement(J_,null,c.a.createElement(ne.a,{items:e,idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,headerRowClassName:Q_,cellClassName:eu,columns:n,renderFooter:()=>c.a.createElement("div",null,e&&e.length>0?c.a.createElement(O.c,{id:"DEVICE_PROPERTY_TABLE_FOOTER",values:{length:e.length}}):c.a.createElement(O.c,{id:"COMMON_DEVICES_NOT_FOUND"})),rowHeight:30}))}const nu=Object(ia.g)({mapPropsToValues:({activeItem:e,nativeNetworks:t})=>({mgmt_network_id:Object(v.getDeviceNetworkId)(t,e)}),validationSchema:Ea.a.object().shape({mgmt_network_id:Ea.a.string()}),handleSubmit:()=>null});var cu=Object(st.compose)(Object(o.connect)(e=>({nativeNetworks:Object(va.selectNativeNetworks)(e)}),{}),nu)(({nativeNetworks:e=[],values:t,resetForm:a,dirty:r,setFormDirty:l,setFormInvalid:i,isValid:E})=>{const s=Object(o.useDispatch)();Object(n.useEffect)(()=>(s(Object(_.h)({vlan:()=>t})),s(Object(_.j)({vlan:()=>a({values:t})})),s(Object(_.i)({vlan:a})),()=>{s(Object(_.h)({vlan:null})),s(Object(_.j)({vlan:null})),s(Object(_.i)({vlan:null}))}),[s,a,t.mgmt_network_id]),Object(n.useEffect)(()=>{l("vlan",r),i("vlan",!E)},[l,i,r,E]);const m=e.map(e=>({value:e._id,label:e.name}));return c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_LABEL_MGMT_VLAN",name:"mgmt_network_id",type:"dropdown",full:!0,validated:!0,options:m,translateLabel:!0})});const ru=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,lu=Object(l.c)(b.a)`
  width: 100%;
`,iu="network";var ou=Object(st.compose)(la(["general","tags","screen","peerUbbScreen",iu,"vlan","radios"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,formStates:l,intl:i})=>{const E=Object(o.useSelector)(na),s=Object(o.useSelector)(ca),m=Object(o.useSelector)(ra),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"stationLed",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_STATION_LED"}),renderContent:()=>c.a.createElement(em,{activeItem:e.peer_ubb,formName:"peerUbbScreen",setFormDirty:t})},{id:"apLed",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AP_LED"}),renderContent:()=>c.a.createElement(em,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Z_,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>c.a.createElement(cu,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"downlink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(au,{activeItem:e})},{id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIOS"}),renderContent:()=>c.a.createElement(Oi,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(lu,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(ru,{variant:"tertiary",items:p})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(E).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length&&l[a])return e.push(i.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),a=Object(qs.a)(t,"peerUbbScreen"),n={...a,peer_ubb:{...a.peer_ubb,...t.peerUbbScreen,...a.mgmt_network_id?{mgmt_network_id:a.mgmt_network_id}:{}}};u(Object(v.updateDeviceWithIdEndpoint)(n,d,_,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const Eu=Object(l.c)(u.a)`
  display: block;
  position: relative;
  padding-right: 20px;
  margin-right: 15px;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 12px;
    border-bottom: 2px solid ${({legendcolor:e})=>e};
  }

  :last-of-type {
    margin-right: 0;
  }
`,su=Object(l.c)(u.a)`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  padding-left: 10px;
  padding-top: 10px;
`,mu=Object(l.c)(b.a)`
  margin-bottom: 20px;
`,du=Object(qE.a)(6,e=>({value:e,label:String(e)})).reverse(),_u=e=>l.a`
  fill: ${e.motifPalette.text02};
  font-size: 11px;
`;var uu=Object(ha.b)(c.a.memo(e=>{const{mac:t,keys:a,heading:n,theme:r,colors:l,noLegend:i=!1,fetchReport:E,legend:s}=e,m=Object(o.useSelector)(Object(ce.selectDeviceStatReport)(t,E,ce.OBJECT.UBB,a)),d=Object(o.useSelector)(Ga.L),_={},u=Date.now(),p=Object(Ri.startOfHour)(Object(Ri.addHours)(u,1)).getTime(),I=d?"H:ss":"ha",g=Object(JE.b)(p,I),R=g[0].value,C=Object(zE.g)(m.filter(e=>e.time>R).map(e=>({...e,x:e.time})),ZE.a.MINUTES.grain);C[0]&&a[0]in C[0]&&C.forEach(e=>{a.forEach((t,a)=>{_[t]||(_[t]={key:t,lineColor:l[a],maxY:0,data:[]}),_[t].data.push({x:e.x,y:e[t]})})});const T=a.map(e=>_[e]?_[e].data.map(e=>e.y||0):0),h=Math.max(...T.flat(),4);let v=du;return h>5&&(v=Object(JE.e)(h,6)),c.a.createElement(c.a.Fragment,null,!i&&c.a.createElement(mu,{justifyContent:"flex-end"},c.a.createElement(b.a,null,s.map((e,t)=>c.a.createElement(Eu,{legendcolor:l[t],key:e},c.a.createElement(O.c,{id:e}))))),c.a.createElement(b.a,null,c.a.createElement(su,{color:"primary"},c.a.createElement(O.c,{id:n})),c.a.createElement(KE.a,{xAxis:g,yAxis:v,width:305,height:150,margin:[0,0,20,25],labelClassName:_u(r),renderChartElements:(e,t,n)=>c.a.createElement(c.a.Fragment,null,a.map(a=>_[a]&&_[a].data.length&&c.a.createElement(XE.a,{key:_[a].key,data:_[a].data,maxY:n,mouseData:t,getCoordinates:e,variant:"line",lineColor:_[a].lineColor,dashed:!1,hideMissingData:!0})))})))},(e,t)=>e.mac===t.mac&&Object(vi.a)(e.keys,t.keys)));const pu=Object(l.c)("div")`
  padding: 16px 32px 32px 32px;
`,Ou=Object(l.c)("div")`
  margin-top: ${({marginTop:e})=>e||0}px;
  margin-bottom: ${({marginBottom:e})=>e||0}px;
`,bu=[{value:G_.ACCESS_POINT,label:"DEVICE_TYPE_UBB_AP"},{value:G_.STATION,label:"DEVICE_TYPE_UBB_STATION"}];const Iu=Object(ia.g)({mapPropsToValues:()=>({device:G_.ACCESS_POINT,channel:"wlan0"}),handleSubmit:null});var gu=Object(st.compose)(O.f,Iu)((function({activeItem:e,values:{device:t,channel:a},intl:r}){const l=Object(o.useDispatch)(),{mac:i,peer_ubb:E={}}=e,s=t===G_.ACCESS_POINT?i:E.mac,m=[a+"-rx_dropped",a+"-tx_dropped"],d=[a+"-tx_retries"],_=Object(n.useMemo)(()=>Object(v.getRadios)(e).map(e=>({value:e.name,label:`${r.formatMessage({id:"DEVICE_LABEL_RADIO_"+e.radio.toUpperCase()})} (${e.name})`})),[e.radio_table]);return Object(n.useEffect)(()=>{l(Object(ce.fetchDeviceUsageReport)(s,ce.OBJECT.UBB))},[t]),Object(n.useEffect)(()=>{l(Object(ce.fetchDeviceDroppedReport)(s,ce.OBJECT.UBB,m)),l(Object(ce.fetchDeviceRetriesReport)(s,ce.OBJECT.UBB,d))},[a,t]),c.a.createElement(pu,null,c.a.createElement(Ou,{marginTop:9,marginBottom:28},c.a.createElement(da.a,{type:"dropdown",name:"device",label:"DEVICE_PROPERTIES_LABEL_SELECT_DEVICE",options:bu,full:!0,translateLabel:!0,translateOptions:!0})),c.a.createElement(uu,{mac:s,keys:["cpu","mem"],colors:[Oe.a["orange-1"],Oe.a["blue-3"]],heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT",fetchReport:ce.fetchDeviceUsageReport,legend:["COMMON_WORD_CPU","COMMON_WORD_MEMORY"]}),c.a.createElement(Ou,{marginTop:35,marginBottom:30},c.a.createElement(da.a,{type:"dropdown",full:!0,name:"channel",translateLabel:!0,label:"DEVICE_PROPERTIES_LABEL_SELECT_CHANNEL",options:_})),c.a.createElement(uu,{mac:s,keys:m,colors:[Oe.a["purple-1"],Oe.a["purple-1"]],noLegend:!0,fetchReport:ce.fetchDeviceDroppedReport,heading:"DEVICE_PROPERTIES_LABEL_DROPPED"}),c.a.createElement(Ou,{marginBottom:30}),c.a.createElement(uu,{mac:s,keys:d,colors:[Oe.a["purple-1"]],noLegend:!0,fetchReport:ce.fetchDeviceRetriesReport,heading:"DEVICE_PROPERTIES_LABEL_RETRIES"}))}));const Ru=Object(l.c)("div")`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
  }
`,Cu=Object(l.c)(u.a)`
  margin-bottom: 4px;
`;function Tu({activeItem:e}){return Object(v.isAdopted)(e)?c.a.createElement(Ru,null,c.a.createElement(Cu,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO5G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.NA}),c.a.createElement(Cu,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIO60G_SHORT"})),c.a.createElement(Ud,{activeItem:e,radioType:Ml.b.AD})):null}var hu=a(1964),vu=a(2078),Du=a(2079),fu=a(2080),Pu=a(2023);function Su({activeItem:e}){return c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(hu.a,{activeItem:e}),c.a.createElement(vu.a,{activeItem:e}),c.a.createElement(Du.a,{activeItem:e}),c.a.createElement(fu.a,{activeItem:e}),c.a.createElement(Pu.a,{activeItem:e}))}var Au=a(2082),ju=a.n(Au);const Nu=Object(l.c)(b.a)`
  width: 100%;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 16px; // 16
`,yu=Object(l.c)(b.a)`
  text-align: center;
  width: 122px;
`,Lu=Object(l.c)(b.a)`
  padding-top: 50px;
  width: 100%;
`,xu=l.e`
  0% {
    width: 5%;
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }  
`,Vu=l.e`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }  
  50% {
    opacity: 0;
  }
`,wu=Object(l.c)("div")`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${({theme:e})=>e.colors.neutralBackground};
`,Fu=Object(l.c)("div")`
  animation: ${xu} 5s infinite;
  width: 100%;
  opacity: 1;
  height: 5px;
  margin-top: -1px;
  position: absolute;
  background-image: linear-gradient(
    to right,
    ${({linkAnimationColor:e})=>e},
    transparent 30%,
    transparent 70%,
    ${({linkAnimationColor:e})=>e}
  );
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;

  &:after {
    content: '';
    display: block;
    background-color: ${({linkAnimationColor:e})=>e};
    width: 100%;
    position: absolute;
    border-radius: 3px;
    height: 100%;
    opacity: 0;
    animation: ${Vu} 5s infinite;
  }
`,Mu=Object(l.c)(b.a)`
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`,Uu=Object(l.c)("img")`
  height: 120px;
  transform: scaleX(${({flip:e})=>e?-1:1});
`,Bu=Object(l.c)("div")`
  position: absolute;
  ${({left:e})=>e?`left: ${e}px`:""};
  ${({right:e})=>e?`right: ${e}px`:""};
  width: 3px;
  height: 107px;
  border-radius: 1px;
  background-image: radial-gradient(transparent 0%, ${({color:e})=>e} 60%, transparent 100%);
  filter: drop-shadow(0px 0px 0.5px ${({color:e})=>e}) opacity(0.6);
`,ku=Object(l.c)(b.a)`
  margin: 0 32px 16px; // 0 32 16 32
  position: relative;
`,Wu=Object(l.c)(H.a)`
  font-size: 34px;
  font-weight: ${({theme:e})=>e.fontWeights.bold};
`,Hu=Object(l.c)(u.a)`
  font-size: ${({theme:e})=>e.fontSizes[2]}px; // 14
  line-height: 17px;
`,Gu=Object(l.c)(b.a)`
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 16px 32px 16px 22px;
`,Yu=Object(l.c)(p.ab)`
  margin-right: 12px;
`;function $u({activeItem:e,pendingAdoption:t}){const{peer_ubb:a={},led_override_color:n}=e,r=Object(xc.Y)(e),l=Object(we.b)(r),i=!t&&Object(xc.Bd)(e),o=!t&&Object(xc.Ad)(e),E=Object(tt.a)(Bl.a[Object(tt.a)(a,"uplink.radio","").toUpperCase()],"frequency","");let s;return s=!t&&!i||"danger"===l?Oe.a["color-danger"]:t||"warning"===l?Oe.a["color-warning"]:Oe.a["color-success"],c.a.createElement(c.a.Fragment,null,c.a.createElement(Nu,{justifyContent:"space-between"},c.a.createElement(yu,{flexDirection:"column"},c.a.createElement(ku,null,c.a.createElement(Uu,{src:ju.a}),c.a.createElement(Bu,{color:n||Oe.a["blue-0"],left:23})),c.a.createElement(Hu,{color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP"})),c.a.createElement(Hu,{color:"secondary"},E)),c.a.createElement(Lu,{flexDirection:"column",alignItems:"center"},c.a.createElement(wu,null,c.a.createElement(Fu,{linkAnimationColor:s})),c.a.createElement(Mu,{flexDirection:"column"},i&&c.a.createElement(Wu,{type:"percent",input:r/100,style:{color:be.a.getGradientColor(r/100)}}),c.a.createElement(Hu,{color:"primary",weight:"bold"},i&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_QUALITY"}),!i&&t&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_LINK_INACTIVE"}),!i&&!t&&c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_NO_LINK"})))),c.a.createElement(yu,{flexDirection:"column"},c.a.createElement(ku,null,c.a.createElement(Uu,{src:ju.a,flip:!0}),c.a.createElement(Bu,{color:a.led_override_color||Oe.a["blue-0"],right:23})),c.a.createElement(Hu,{color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"})),c.a.createElement(Hu,{color:"secondary"},E))),(t||o)&&c.a.createElement(Gu,{alignItems:"center"},c.a.createElement(Yu,{width:24,height:24}),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:t?"DEVICE_UBB_LINK_INACTIVE_WARNING_MESSAGE":"DEVICE_UBB_LINK_DOWN_WARNING_MESSAGE"}))))}const zu=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Ku;!function(e){e.STATION="station",e.ACCESS_POINT="access_point"}(Ku||(Ku={}));var Xu,qu=function({activeItem:e}){const{peer_ubb:t,adopted:a}=e,n=Object(v.getUplinkAttrs)(e),r=null==t?void 0:t.uplink,l=t&&(!Object(v.getIsUbbPeerAdopted)(e)||!a),i=[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(Su,{activeItem:e})},...t?[{id:"station",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"})," "," ",!!r&&c.a.createElement(O.c,{id:"wireless"===r.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>c.a.createElement(v_,{deviceData:e,ubbDeviceType:Ku.STATION,pendingAdoption:l})}]:[],{id:"accessPoint",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP"})," "," ",!!n&&c.a.createElement(O.c,{id:"wireless"===n.type?"DEVICE_CONNECTION_WIRELESS":"DEVICE_CONNECTION_WIRED"})),renderContent:()=>c.a.createElement(v_,{deviceData:t,ubbDeviceType:Ku.ACCESS_POINT,pendingAdoption:l})},...l?[]:[{id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_AIR_STATS"}),renderContent:()=>c.a.createElement(Tu,{activeItem:e})}]];return c.a.createElement(c.a.Fragment,null,c.a.createElement($u,{activeItem:e,pendingAdoption:l}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(zu,{variant:"tertiary",items:i,renderOnlyExpandedContent:!0}))};!function(e){e.ACCESS_POINT="ap",e.STATION="sta"}(Xu||(Xu={}));const Zu=Object(l.c)("div")`
  margin-bottom: 16px;
`,Ju=Object(l.c)("div",{shouldForwardProp:e=>"visible"!==e})`
  ${({visible:e})=>e?"":"display: none;"}
`;var Qu=({ap:e,sta:t,formName:a})=>{const[r,l]=Object(n.useState)(Xu.ACCESS_POINT),i=e=>l(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(Zu,null,c.a.createElement(b.a,{marginBottom:"12px"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_UBB_CHOOSE_DEVICE"}))),c.a.createElement(b.a,{marginBottom:"16px"},c.a.createElement(b.a,{marginRight:"18px"},c.a.createElement(kl.a,{checked:r===Xu.ACCESS_POINT,name:`ubb-device-select-${a}-${Xu.ACCESS_POINT}`,onChange:()=>i(Xu.ACCESS_POINT)}),c.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${Xu.ACCESS_POINT}`},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_AP"})))),c.a.createElement(b.a,null,c.a.createElement(kl.a,{checked:r===Xu.STATION,name:`ubb-device-select-${a}-${Xu.STATION}`,onChange:()=>i(Xu.STATION)}),c.a.createElement("label",{htmlFor:`ubb-device-select-${a}-${Xu.STATION}`},c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_TYPE_UBB_STATION"})))))),c.a.createElement(Ju,{visible:r===Xu.ACCESS_POINT},e),c.a.createElement(Ju,{visible:r===Xu.STATION},t))};const ep=Object(l.c)("div")`
  margin-bottom: 20px;
`,tp=Object(l.c)(b.a)`
  margin-bottom: ${({marginBottom:e})=>e}px;
`,ap=Object(l.c)("div")`
  flex: 1;
  max-width: calc(50% - 6px);
`,np=[{value:"dhcp",label:"DEVICE_PROPERTIES_VALUES_NETWORK_USING_DHCP"},{value:"static",label:"DEVICE_PROPERTIES_VALUES_NETWORK_STATIC_IP"}];var cp=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({activeItem:e})=>{const{config_network:t,peer_ubb:a,ip:n}=e,{type:c="dhcp",ip:r=n||"",netmask:l="",gateway:i="",dns1:o="",dns2:E="",dnssuffix:s=""}=t,{type:m="dhcp",ip:d=a.ip||"",netmask:_="",gateway:u="",dns1:p="",dns2:O="",dnssuffix:b=""}=a.config_network;return{config_network:{type:c,ip:r,netmask:l,gateway:i,dns1:o,dns2:E,dnssuffix:s},peer_ubb:{config_network:{type:m,ip:d,netmask:_,gateway:u,dns1:p,dns2:O,dnssuffix:b}}}},handleSubmit:(e,{resetForm:t})=>{t({values:e})},validationSchema:Ea.a.object().shape({config_network:Ws,peer_ubb:Ea.a.object().shape({config_network:Ws})})})(({setFormDirty:e,setFormInvalid:t,dirty:a,values:r,resetForm:l,isValid:i})=>{const E=Object(o.useDispatch)();return Object(n.useEffect)(()=>(E(Object(_.h)({[ip]:()=>{const{config_network:e,peer_ubb:{config_network:t}}=r,a={config_network:{type:e.type},peer_ubb:{config_network:{type:t.type}}};return"dhcp"!==e.type&&(a.config_network={...e}),"dhcp"!==t.type&&(a.peer_ubb.config_network={...t}),a}})),E(Object(_.j)({[ip]:()=>l({values:r})})),E(Object(_.i)({[ip]:l})),()=>{E(Object(_.h)({[ip]:null})),E(Object(_.j)({[ip]:null})),E(Object(_.i)({[ip]:null}))}),[E,l,r]),Object(n.useEffect)(()=>{e(ip,a),t(ip,!i)},[e,t,a,i]),c.a.createElement(Qu,{formName:"network",sta:c.a.createElement(c.a.Fragment,null,c.a.createElement(ep,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:np})),"static"===r.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(tp,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"config_network.ip",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"config_network.dns1",full:!0}))),c.a.createElement(tp,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"config_network.netmask",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"config_network.dns2",full:!0}))),c.a.createElement(tp,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"config_network.gateway",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"config_network.dnssuffix",full:!0}))))),ap:c.a.createElement(c.a.Fragment,null,c.a.createElement(ep,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_CONFIGURE_IP",name:"peer_ubb.config_network.type",type:"dropdown",full:!0,translateLabel:!0,translateOptions:!0,options:np})),"static"===r.peer_ubb.config_network.type&&c.a.createElement(c.a.Fragment,null,c.a.createElement(tp,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_IP_ADDRESS",name:"peer_ubb.config_network.ip",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_PREFERRED_DNS",name:"peer_ubb.config_network.dns1",full:!0}))),c.a.createElement(tp,{marginBottom:24,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_SUBNET_MASK",name:"peer_ubb.config_network.netmask",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_ALTERNATE_DNS",name:"peer_ubb.config_network.dns2",full:!0}))),c.a.createElement(tp,{marginBottom:20,justifyContent:"space-between"},c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_GATEWAY",name:"peer_ubb.config_network.gateway",full:!0})),c.a.createElement(ap,null,c.a.createElement(da.a,{label:"DEVICE_PROPERTIES_LABEL_DNS_SUFFIX",name:"peer_ubb.config_network.dnssuffix",full:!0})))))})});const rp=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,lp=Object(l.c)(b.a)`
  width: 100%;
`,ip="network";var op=Object(st.compose)(la(["general","tags",ip,"vlan"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,formStates:l,intl:i})=>{const E=Object(o.useSelector)(na),s=Object(o.useSelector)(ca),m=Object(o.useSelector)(ra),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(cp,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"vlan",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_VLAN"}),renderContent:()=>c.a.createElement(cu,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e,disableDebug:!0})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(lp,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(rp,{variant:"tertiary",items:p})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(E).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length&&l[a])return"peerUbbLed"===a?{...t,peerUbbLed:c}:(e.push(i.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c})}return t},{}),a=Object(qs.a)(t,"peerUbbLed"),n={...a,peer_ubb:{...a.peer_ubb,...a.mgmt_network_id?{mgmt_network_id:a.mgmt_network_id}:{}}};return u(Object(v.updateDeviceWithIdEndpoint)(n,d,_,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(({data:e})=>{Object.values(s).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))});const Ep=Object(l.c)(k.a)`
  transition: none;
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
  flex: 1 1 100%;
`,sp=Object(l.c)(b.a)`
  width: 100%;
`;var mp=Object(st.compose)(la(["radios"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=Mo(e),p=[{id:"radios",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_RADIOS"}),openByDefault:!0,renderContent:()=>c.a.createElement(Oi,{activeItem:e,setFormDirty:t,setFormInvalid:a,isConnectivityMonitorEnabled:!1,isUbbXg:!0})}];return u.length&&p.push({id:"channelUsage",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_CHANNEL_USAGE"}),renderContent:()=>c.a.createElement(gi,{ChannelBars:u})}),c.a.createElement(c.a.Fragment,null,c.a.createElement(sp,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(Ep,{variant:"tertiary",items:p})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});_(Object(v.updateDeviceWithIdEndpoint)(t,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(({data:e})=>{Object.values(E).forEach(t=>{"function"==typeof t&&t(null==e?void 0:e[0])})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),dp=a(2100);const _p=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var up=({activeItem:e})=>{const t=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(dp.a,{activeItem:e})}];return c.a.createElement(_p,{variant:"tertiary",items:t,renderOnlyExpandedContent:!0})};const pp=Object(l.c)(b.a)`
  margin-bottom: 24px;
  justify-content: space-between;
`,Op=Object(l.c)(p.yb)`
  margin-top: -3px;
  margin-right: -6px;
`,bp=Object(l.c)(G.a)`
  margin-top: 12px;
  justify-content: flex-end;
`;var Ip=Object(ia.g)({mapPropsToValues:({activeItem:{outlet_table:e=[],outlet_overrides:t=[]}})=>({...e[0],...t[0]}),handleSubmit:(e,{resetForm:t})=>{t({values:e})}})(({activeItem:e,submitForm:t,values:a,dirty:r,isValid:l,resetForm:i,setFormDirty:E,setFormInvalid:s})=>{const m=Object(o.useDispatch)();return Object(n.useEffect)(()=>{E("general",r),s("general",!l)},[E,s,r,l]),Object(n.useEffect)(()=>(m(Object(_.h)({general:()=>({outlet_overrides:[{...a}]})})),m(Object(_.j)({general:t})),m(Object(_.i)({general:i})),()=>{m(Object(_.h)({general:null})),m(Object(_.j)({general:null})),m(Object(_.i)({general:null}))}),[m,i,t,a]),c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(pp,{flexDirection:"column"},c.a.createElement(da.a,{full:!0,name:"name",label:"DEVICE_PROPERTIES_LABEL_NAME",placeholder:"DEVICE_PROPERTIES_LABEL_NAME"})),c.a.createElement(pp,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_RELAY_STATE_LABEL_DESCRIPTION"}))),c.a.createElement(da.a,{type:"checkbox",name:"relay_state"})),c.a.createElement(pp,{flexDirection:"column"},c.a.createElement(Os,{mac:e.mac,setFormDirty:E})),c.a.createElement(pp,{alignItems:"flex-start",justifyContent:"space-between"},c.a.createElement(b.a,{flexDirection:"column",flex:"0 1 65%"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(da.a,{type:"checkbox",name:"cycle_enabled"})),c.a.createElement(pp,{flexDirection:"column"},c.a.createElement(b.a,{flexDirection:"column",width:"65%"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_MANUAL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(bp,{variant:"link",onClick:()=>m(Object(v.powerCycleOutlet)(e,a))},c.a.createElement(Op,null),c.a.createElement(O.c,{id:"DEVICE_ACTIONS_POWER_CYCLE"}))))});const gp=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`;var Rp=Object(st.compose)(la(["general","screen"]),O.f)(({activeItem:{mac:e,_id:t},activeItem:a,setFormDirty:n,setFormInvalid:r,isDirty:l,isInvalid:i,intl:E})=>{const s=Object(o.useDispatch)(),m=Object(o.useSelector)(na),d=Object(o.useSelector)(ca),_=Object(o.useSelector)(ra),u=[{id:"general",openByDefault:!0,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(Ip,{activeItem:a,setFormDirty:n,setFormInvalid:r})},{id:"screen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(em,{activeItem:a,setFormDirty:n,disableLedBrightnessField:!0,disableLedOverrideColor:!0})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:a,disableDebug:!0,disableLocate:!0,disableRestart:!0})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(gp,{variant:"tertiary",items:u,multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:l,isInvalid:i,onFormSubmit:()=>{const a=[],n=Object.entries(m).reduce((e,[t,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return a.push(E.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(t).toUpperCase()})),{...e,...c}}return e},{});s(Object(v.updateDeviceWithIdEndpoint)(n,t,e,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:a.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:a.join(", ")}},extend:!0})).then(()=>{Object.values(d).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(_).forEach(e=>{"function"==typeof e&&e()})}}))}),Cp=a(2101);const Tp=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var hp=({activeItem:e})=>{const t=Object(n.useMemo)(()=>[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(Cp.a,{activeItem:e})}],[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(dE,{deviceData:e,hidePorts:!0}),c.a.createElement(Tp,{variant:"tertiary",items:t,renderOnlyExpandedContent:!0}))};const vp=Object(l.c)(b.a)`
  padding: 0 32px;
`;var Dp=Object(st.compose)(la(["general","led"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"led",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(Ad,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(vp,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});_(Object(v.updateDeviceWithIdEndpoint)(t,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),fp=a(2102);const Pp=Object(l.c)(p.c)`
  color: ${({theme:e})=>e.motifPalette.warning};
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  margin-bottom: 2px;
`;var Sp=({activeItem:e})=>{const{usedPower:t,maxPower:a,usedPowerPercentage:n,barVariant:r}=Object(v.getUspPduOutletUtilization)(e),l="warning"===r;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS"})),c.a.createElement(u.a,{color:l?"warning":"secondary"},l&&c.a.createElement(Pp,{size:"medium"}),c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:t,max:a}}))),c.a.createElement(fo.a,{items:[{value:n,variant:r}]}))};const Ap=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var jp=c.a.memo(({activeItem:e,...t})=>{const a=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(fp.a,{activeItem:e})},{id:"powerUtilization",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"}),renderContent:()=>c.a.createElement(Sp,{activeItem:e})},{id:"uplink",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK"}),renderContent:()=>c.a.createElement($E,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(dE,{deviceData:e}),c.a.createElement(Ap,{variant:"tertiary",items:a,renderOnlyExpandedContent:!0}))});const Np=Object(l.c)(b.a)`
  padding: 16px 32px;
`;var yp=Object(st.compose)(la(["general","lcmScreen"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"lcmScreen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ns,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e,disableLocate:!0,disableRestart:!0})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(Np,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{lcm:a,...n}=t;_(Object(v.updateDeviceWithIdEndpoint)(n,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),Lp=a(2115),xp=a(1834),Vp=a(541);const wp=Object(l.c)(fa.a)`
  width: fit-content;

  & > div > button > span > div {
    display: flex;

    & > span {
      margin: 0 !important;
    }
  }
`,Fp=Object(l.c)(G.a)`
  display: block;
  white-space: nowrap;
  height: 31px;
  padding: 0;
  color: ${({color:e})=>e};
  line-height: 14px;
`,Mp=Object(l.c)(p.c)`
  margin-right: 8px;
  color: ${In.q.warning};
`,Up=Object(l.c)("div")`
  width: 170px;
  line-height: 18px;
`;var Bp=({mac:e,isUnreachable:t,isUnavailable:a})=>{const r=Object(o.useDispatch)(),l=t||a,i=t?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNREACHABLE_TOOLTIP":a?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE_TOOLTIP":"LTE_ACTIONS_SUBSCRIPTION_CHECK_TOOLTIP",E=l?"LTE_ACTIONS_SUBSCRIPTION_CHECK_UNAVAILABLE":"LTE_ACTIONS_SUBSCRIPTION_CHECK",s=Object(n.useCallback)(()=>{l||r(Object(Vp.f)([e]))},[l]);return c.a.createElement(wp,{position:"topRight",portal:!0,message:c.a.createElement(Up,null,c.a.createElement(O.c,{id:i}))},c.a.createElement(Fp,{variant:"inline",onClick:s,disabled:l},c.a.createElement(Mp,null),c.a.createElement(u.a,{size:"caption",color:l?"secondary":"info"},c.a.createElement(O.c,{id:E}))))},kp=a(1796),Wp=a(1182);const Hp=Object(l.c)("div")`
  margin-top: 16px;

  > div {
    position: relative;
  }
`,Gp=Object(l.c)("div")`
  position: absolute;
  top: 0;
  left: 0;

  > svg {
    overflow: visible;
    min-width: 1px;
  }
`,Yp=Object(l.c)("div")`
  color: ${({color:e})=>e};
  width: 100%;
  text-align: center;
`,$p=l.a`
  fill: ${Oe.a["grey-3"]};
  font-size: 12px;
`,zp=l.a`
  text-align: center;
  padding: 12px 0;
`,Kp=e=>{const{start:t,end:a}=Object(ce.getMonthlyGranularity)(),n=a-t,c=[{label:Object(Ri.format)(t,"MMM D"),value:t},{label:e.formatMessage({id:"COMMON_DATES_TODAY"}),value:a}];if(n>2*ZE.a.DAILY.grain){const e=new Date(t+n/2);c.splice(1,0,{label:Object(Ri.format)(e,"MMM D"),value:e.getTime()})}return c};var Xp=Object(O.f)(({mac:e,usage:t,intl:a})=>{const r=Object(n.useRef)(null),l=Object(n.useRef)(null),[i,E]=Object(n.useState)(0),s=Object(o.useDispatch)(),m=Object(o.useSelector)(t=>Object(ce.selectLTEMonthlyDataUsageReportData)(t,[e]));Object(n.useEffect)(()=>{s(Object(ce.fetchLTEMonthlyDataUsageReport)([e]))},[s,e]),Object(n.useEffect)(()=>{r.current&&E(r.current.scrollWidth)},[]);const d=m.map(e=>({x:e.time,y:e.lte_txbytes>=0?e.lte_txbytes:null}));if(d[0]&&d[0].x&&1!==new Date(d[0].x).getDate()){const e=new Date(d[0].x).setDate(1);d.unshift({x:e,y:0})}const _=Object(ZE.c)(d,ZE.a.DAILY.grain,"x"),u=(e=>{const{availableBytes:t,softLimitBytes:a,hasOverages:n}=e,c=[{label:0,value:0}];if(n){const e=1024**3,a=Math.floor(t/e);for(let t=1;t<=a;t+=1)c.push({label:Object(ft.c)(e*t,"bytes","JEDEC"),value:e*t})}else c.push({label:Object(ft.c)(a,"bytes","JEDEC"),value:a});return c.sort((e,t)=>t.value-e.value)})(t),p=Math.max(20*u.length+50,140),O=(null==t?void 0:t.availableBytes)||0;return c.a.createElement(Hp,null,c.a.createElement("div",{ref:r},r.current&&d.length>0&&c.a.createElement(KE.a,{xAxis:Kp(a),yAxis:u,width:i,height:p,hideXGridLines:!0,hideYGridLines:!0,labelClassName:$p,renderChartElements:(e,t,a)=>c.a.createElement(XE.a,{variant:"gradientArea",interpolation:"curved",dashed:!1,data:_,getCoordinates:e,maxY:a,mouseData:t,hideMissingData:!0,tooltipPortal:l?l.current:void 0,renderTooltip:({hidden:e,left:t,top:a,y:n})=>{const r=Math.round(n/O*100)||0,l=In.q[Object(v.getUtilizationLevel)(v.DeviceType.LTE,"data",r)||"danger"];return c.a.createElement(c.a.Fragment,null,c.a.createElement(kp.a,{left:t-8,top:a+4,message:c.a.createElement(Yp,{color:l},n?Object(ft.c)(n,"bytes","JEDEC"):0),hidden:e,topMargin:4,width:60,tooltipProps:{position:"left",tooltipClassName:zp}}),c.a.createElement(Gp,null,c.a.createElement("svg",{width:r,height:p},t&&a&&c.a.createElement(Wp.a,{x:t,y:a,color:l}))))}})}),c.a.createElement("div",{ref:l})))});const qp=Object(l.c)("div")`
  text-align: center;
  background: ${({theme:e})=>e.motifPalette.ui12};
  padding: 32px 40px;
`,Zp=Object(l.c)(u.a)`
  font-size: 16px;
`,Jp=Object(l.c)("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Qp=Object(l.c)(b.a)`
  margin-bottom: 8px;
  line-height: 1.5;
  text-align: left;
`,eO=Object(l.c)(p.c)`
  margin-right: 8px;
  color: ${In.q.warning};
`,tO=Object(l.c)("div")`
  width: 16px;
  min-width: 16px;
  margin-right: 8px;
`;var aO=({device:e})=>{const{license_state:t,mac:a}=e,r=Object(v.isAdopted)(e),l=Object(o.useDispatch)(),i=Object(v.isUlte)(e)&&Object(tt.a)(e,"lte_subscription_status")===v.BILLING_SUBSCRIPTION_STATUS.PAST_DUE,E=Object(v.isUlte)(e)&&Object(tt.a)(e,"lte_subscription_status")===v.BILLING_SUBSCRIPTION_STATUS.CANCELED,s=Object(o.useSelector)(rn.selectEnv),m=`https://${Object(on.a)(s)}/payments`,d="https://"+Object(on.b)(s),_=Object(v.calculateUsage)(e),p=In.q[_.state],b="warning"===_.state||"danger"===_.state&&!_.hasOverages,I=_.hasOverages&&!_.isSuspended,g=Object(o.useSelector)(Ul.d),R=Object(v.isDeviceWithCountryLockedWarning)(g,e),C=Object(v.isLicenseWithWarning)(e),T=Object(v.isUlteDeviceNotConnectedToUlte)(e),h=Object(v.isUlteDeviceNotRegisteredWithUlte)(e),D=Object(o.useSelector)(Ga.E),f=Object(o.useSelector)(Ga.q),P=Object(o.useSelector)(Ga.v),S=Object(n.useMemo)(()=>f||P,[f,P]),A=Object(n.useMemo)(()=>Object(v.isSubscriptionCheckRequired)(e),[e]),j=Object(n.useMemo)(()=>Object(v.isSubscriptionApiUnreachable)(e),[e]),N=Object(n.useMemo)(()=>Object(v.isUlte)(e)&&!!D&&!Object(v.isDeviceOwner)(e,D),[e,D]),y=Object(n.useMemo)(()=>r&&S&&(A||j||N),[r,S,A,j,N]);return Object(n.useEffect)(()=>{Object.keys(g).length||l(Ul.a)},[g,l]),r&&c.a.createElement(qp,null,c.a.createElement(Jp,null,c.a.createElement(Zp,null,c.a.createElement(O.c,{id:"DEVICE_DATA_USAGE_HEADER_LABEL"})),c.a.createElement(u.a,{color:"secondary",size:"header-l"},c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{color:p}},Object(ft.c)(_.usedBytes,"bytes","JEDEC")),e.lte_soft_limit>0&&"/ ",e.lte_soft_limit>0&&Object(ft.c)(_.softLimitBytes,"bytes","JEDEC")))),c.a.createElement(Jp,null,e.lte_soft_limit>0&&c.a.createElement(xp.a,{variant:_.state,value:_.width,size:"medium"})),b&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.c,{id:"DEVICE_DATA_USAGE_LTE_APPROACHING_LIMIT",values:{amount:_.width+"%"}})),I&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement("div",null,c.a.createElement(O.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_SOFT_LIMIT",values:{softLimit:Object(ft.c)(_.softLimitBytes,"bytes","JEDEC"),hardLimit:Object(ft.c)(_.hardLimitBytes,"bytes","JEDEC")}}))),_.isSuspended&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.c,{id:"DEVICE_DATA_USAGE_LTE_OVER_HARD_LIMIT"})),"success"!==_.state&&c.a.createElement(Qp,null,c.a.createElement(tO,null),c.a.createElement(O.b,{id:"DEVICE_DATA_USAGE_LTE_INCREASE_LIMIT",values:{url:"#"}})),(i||E)&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.b,{id:E?"DEVICE_DATA_USAGE_LTE_SERVICE_CANCELED":"DEVICE_DATA_USAGE_LTE_PAYMENT_OVERDUE",values:{billingUrl:m}})),R&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_NOTICE_COUNTRY_LOCKED_WARNING_BODY"})),C&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.b,{id:`DEVICE_PROPERTIES_NOTICE_LICENSE_${t.toUpperCase()}_BODY`,values:{url:d}})),T&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_CONNECTED_WARNING_BODY"})),h&&c.a.createElement(Qp,null,c.a.createElement(eO,null),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_NOTICE_ULTE_NOT_REGISTERED_WARNING_BODY"})),y&&c.a.createElement(Bp,{mac:e.mac,isApplicable:A,isUnreachable:j,isUnavailable:N}),c.a.createElement(Xp,{mac:a,usage:_}))};const nO=Object(l.c)(b.a)`
  margin-bottom: 8px;
`,cO=Object(l.c)(b.a)`
  margin-bottom: 8px;
  justify-content: space-between;
`,rO=({value:e,valueUnit:t,translationId:a})=>void 0!==e&&c.a.createElement(cO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:a})),"boolean"==typeof e?c.a.createElement(u.a,{color:"secondary"},e?c.a.createElement(O.c,{id:"COMMON_ENABLED"}):c.a.createElement(O.c,{id:"COMMON_DISABLED"})):c.a.createElement(u.a,{color:"secondary"},e,t&&" "+t));var lO=({activeItem:e,isUltePro:t})=>{const{lte_radio_mode:a,lte_rssi:n,lte_ecio:r,lte_io:l,lte_ip:i,lte_sinr:o,lte_rsrq:E,lte_rsrp:s,lte_snr:m,lte_rx_chan:d,lte_tx_chan:_,lte_rscp:p,lte_apn:I,lte_connected:g,lte_pdptype:R,lte_band:C,lte_networkoperator:T,lte_rat:h,lte_state:v,lte_signal:D,lte_imei:f,lte_iccid:P,lte_cell_id:S,lte_hard_limit:A,lte_soft_limit:j,total_tx_bytes:N,total_rx_bytes:y}=e,L=(a||"").toUpperCase(),x=new ft.a(A,"bytes","IEC").value,V=new ft.a(j,"bytes","IEC").value;return c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(cO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_UNIFI_LTE_IP"})),c.a.createElement(u.a,{color:"secondary"},i))),c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(rO,{value:I,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_APN"}),c.a.createElement(rO,{value:R,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_PDP_TYPE"}),c.a.createElement(rO,{value:g,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CONNECTED"})),c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(rO,{value:C,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_BAND"}),c.a.createElement(rO,{value:S,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_CELL_ID"})),c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(rO,{value:c.a.createElement(H.a,{type:"bytes",input:N,color:"secondary"}),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_TRANSMITTED"}),c.a.createElement(rO,{value:c.a.createElement(H.a,{type:"bytes",input:y,color:"secondary"}),translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_RECEIVED"})),c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(rO,{value:T,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_NETWORK_OPERATOR"}),c.a.createElement(rO,{value:h,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RAT"}),c.a.createElement(rO,{value:v,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_STATUS"}),c.a.createElement(rO,{value:D,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SIGNAL"})),c.a.createElement(nO,{flexDirection:"column"},L===Me.LteRadioMode.Lte&&c.a.createElement(c.a.Fragment,null,c.a.createElement(rO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),c.a.createElement(rO,{value:E,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRQ"}),c.a.createElement(rO,{value:s,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSRP"}),c.a.createElement(rO,{value:m,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SNR"}),c.a.createElement(rO,{value:d,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RX_CHANNEL"}),c.a.createElement(rO,{value:_,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_TX_CHANNEL"})),(L===Me.LteRadioMode.Cdma||L===Me.LteRadioMode.Hdr)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(rO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),c.a.createElement(rO,{value:r,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ECIO"})),L===Me.LteRadioMode.Hdr&&c.a.createElement(c.a.Fragment,null,c.a.createElement(rO,{value:l,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IO"}),c.a.createElement(rO,{value:o,valueUnit:"dB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_SINR"})),L===Me.LteRadioMode.Gsm&&c.a.createElement(rO,{value:n,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSSI"}),L===Me.LteRadioMode.Tdma&&c.a.createElement(rO,{value:p,valueUnit:"dBm",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_RSCP"})),c.a.createElement(nO,{flexDirection:"column"},c.a.createElement(rO,{value:f,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_IMEI"}),c.a.createElement(rO,{value:P,translationId:"DEVICE_PROPERTIES_UNIFI_LTE_ICCID"})),c.a.createElement(nO,{flexDirection:"column"},Number(x)>0&&c.a.createElement(rO,{value:x,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_LIMIT"}),Number(x)>0&&c.a.createElement(rO,{value:V,valueUnit:"GB",translationId:"DEVICE_PROPERTIES_UNIFI_LTE_DATA_WARNING"})))};const iO=Object(l.c)(b.a)`
  margin-bottom: 8px;
  justify-content: space-between;
`,oO=Object(l.c)(G.a)`
  padding: 0;
  margin: 0;
  height: initial;
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
`;var EO=function({activeItem:{uplink:{full_duplex:e,rx_bytes:t,"rx_bytes-r":a,rx_packets:n,speed:l,tx_bytes:i,"tx_bytes-r":E,tx_packets:s}={}},activeItem:m,isUltePro:d,params:p,path:I,history:g}){const{site:R,page:T,subPage:h}=p,D=Object(o.useSelector)(v.selectDevicesData),f=a+E,P=Object(o.useSelector)(e=>Object(v.getUplink)(Object(v.selectDevicesData)(e),m)),S=Object(v.getUplinkDisplayName)(m,P),A=Object(o.useDispatch)(),j=Object(v.getUplinkRemotePort)(D,m);return c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK"})),c.a.createElement(oO,{variant:"link",onClick:e=>{e.preventDefault(),e.stopPropagation();const t=Object(r.i)(I,{id:P.mac,site:R,page:T,panel:"overview",subPage:h});g.push(t),A(Object(_.g)({type:C.b.DEVICE,mac:P.mac}))}},S)),c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_SPEED"})),c.a.createElement(u.a,{color:"secondary"},l)),c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_DUPLEX"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:e?"DEVICE_PROPERTY_UPLINK_DUPLEX_FULL":"DEVICE_PROPERTY_UPLINK_DUPLEX_HALF",values:{speed:l}}))),d&&c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_POWER"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:(null==j?void 0:j.poe_power)||0}}))),c.a.createElement(iO,{marginTop:12},c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_ACTIVITY_DOWN_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},n?n.toLocaleString():null,"/",c.a.createElement(H.a,{type:"bytes",input:t,color:"secondary"}))),c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_ACTIVITY_UP_PKTS_BYTES"})),c.a.createElement(u.a,{color:"secondary"},s?s.toLocaleString():null,"/",c.a.createElement(H.a,{type:"bytes",input:i,color:"secondary"}))),d&&c.a.createElement(iO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_HEADER_ACTIVITY"})),c.a.createElement(H.a,{type:"bytes",input:f,options:"bitrate",color:"secondary"})))};var sO=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(n.useEffect)(()=>{t(Object(ce.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(cs,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"ap",heading:"DEVICE_PROPERTIES_LABEL_USAGE_PERCENT"})};const mO=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.space[5]+"px"};
`,dO=l.a`
  padding: 0;
  margin: 0;
`;var _O=({activeItem:e,...t})=>{var a;const r=Object(v.isAdopted)(e),l=Object(n.useMemo)(()=>Object(v.isUltePro)(e),[e.type]),i=[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_UNIFI_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(Lp.a,{activeItem:e})},{id:"lte",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_UNIFI_ACCORDION_HEADER_LTE"}),renderContent:()=>c.a.createElement(lO,{activeItem:e,isUltePro:l})}];return r&&((null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.mac)&&i.push({id:"uplink",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK_WIRED"}),renderContent:()=>c.a.createElement(EO,Object.assign({activeItem:e,isUltePro:l},t))}),i.push({id:"stats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(sO,{activeItem:e})})),c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(aO,{device:e}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(mO,{variant:"tertiary",items:i,contentClassName:dO,renderOnlyExpandedContent:!0,multiOpen:!0}))},uO=a(29);const pO=[...Array(uO.n.SOFT_LIMIT_MAX_GB)].map((e,t)=>({value:t+1,label:t+1+" GB"})),OO=Object.values(Me.LteAuthTypes).map(e=>({label:e,value:e})),bO=Object(l.c)(b.a)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xl"]};
`,IO=Object(l.c)(u.a)`
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
`,gO=Object(l.c)(p.cb)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,RO=Object(l.c)(u.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xs"]};
`,CO=Object(ia.g)({mapPropsToValues:({isUltePro:e,activeItem:{lte_ext_ant:t,lte_poe:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:s,lte_soft_limit:m=(e?0:pO[0].value),lte_data_warning_enabled:d,lte_hard_limit:_=0}})=>({lte_ext_ant:"string"==typeof t?"enabled"===t:t,lte_poe:"string"==typeof a?"enabled"===a:a,lte_apn:n,lte_is_sim_pin_required:c,lte_sim_pin_tries_left:r,lte_sim_pin:l,lte_username:i,lte_password:o,lte_auth_type:E,lte_data_limit_enabled:!e||s,lte_soft_limit:new ft.a(m,"bytes","IEC").value,lte_data_warning_enabled:d,lte_hard_limit:new ft.a(_,"bytes","IEC").value}),validationSchema:Ea.a.lazy(({isUltePro:e})=>Ea.a.object().shape({lte_ext_ant:Ea.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA").required(),lte_poe:Ea.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH").required(),lte_apn:Ea.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS").matches(ya.n).required(),lte_sim_pin:Ea.a.string().when("lte_is_sim_pin_required",{is:!0,then:Ea.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN").matches(ya.o).required()}),lte_username:Ea.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME"),lte_password:Ea.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD"),lte_auth_type:Ea.a.string().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE").oneOf([Me.LteAuthTypes.Pap,Me.LteAuthTypes.Chap,Me.LteAuthTypes.PapChap,Me.LteAuthTypes.None]),lte_data_limit_enabled:Ea.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"),lte_soft_limit:Ea.a.number().when("lte_data_limit_enabled",{is:!0,then:e?Ea.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").oneOf(pO.map(({value:e})=>e)).required():Ea.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING").min(0).required()}),lte_data_warning_enabled:Ea.a.boolean().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"),lte_hard_limit:Ea.a.number().when("lte_data_limit_enabled",{is:!0,then:Ea.a.number().label("DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT").min(0).required()})})),handleSubmit:()=>null});var TO=Object(st.compose)(Object(o.connect)(null,{updateDevice:v.updateDevice}),CO)(({activeItem:e,isUltePro:t,values:a,dirty:r,isValid:l,resetForm:i,setFormDirty:E,setFormInvalid:s})=>{const m=Object(o.useDispatch)();return Object(n.useEffect)(()=>{m(Object(_.h)({[vO.UNIFI_LTE]:()=>{const e={...a,lte_soft_limit:Object(v.GiBToBytes)(a.lte_soft_limit),lte_hard_limit:t?Object(v.GiBToBytes)(a.lte_hard_limit):Object(v.GiBToBytes)(a.lte_soft_limit+2),lte_data_warning_enabled:a.lte_data_limit_enabled};return a.lte_data_limit_enabled||(e.lte_soft_limit=0,e.lte_hard_limit=0),e}})),m(Object(_.j)({[vO.UNIFI_LTE]:()=>i({values:a})})),m(Object(_.i)({[vO.UNIFI_LTE]:i}))},[m,i,a,e._id]),Object(n.useEffect)(()=>{E(vO.UNIFI_LTE,r),s(vO.UNIFI_LTE,!l)},[r,E,s,l]),c.a.createElement(c.a.Fragment,null,c.a.createElement(bO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_EXTERNAL_ANTENNA"})),c.a.createElement(Nr.Field,{type:"checkbox",name:"lte_ext_ant"})),c.a.createElement(bO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_POE_PASSTHROUGH"})),c.a.createElement(Nr.Field,{type:"checkbox",name:"lte_poe"})),t?c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement(IO,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD"}))),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_APN_ADDRESS",name:"lte_apn",full:!0})),a.lte_is_sim_pin_required&&c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PIN",name:"lte_sim_pin",type:"password",full:!0}),c.a.createElement(b.a,{alignItems:"center",marginTop:4},c.a.createElement(gO,{isActive:!0}),c.a.createElement(u.a,{color:"secondary",size:"label"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_SIM_CARD_TRIES",values:{count:a.lte_sim_pin_tries_left}})))),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_USERNAME",name:"lte_username",full:!0})),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_PASSWORD",name:"lte_password",type:"password",passwordToggle:!0,full:!0})),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{name:"lte_auth_type",type:"dropdown",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_AUTHENTICATION_TYPE",options:OO,validated:!0,translateLabel:!0,full:!0})),c.a.createElement(bO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"})),c.a.createElement(Nr.Field,{type:"checkbox",name:"lte_data_limit_enabled"})),a.lte_data_limit_enabled&&c.a.createElement(c.a.Fragment,null,c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{name:"lte_hard_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT",type:"number",min:0,full:!0})),c.a.createElement(bO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_WARNING"}))),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{name:"lte_soft_limit",label:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_WARNING",type:"number",min:0,max:new ft.a(a.lte_hard_limit,"bytes","IEC").value,full:!0})))):c.a.createElement(c.a.Fragment,null,c.a.createElement(bO,null,c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_LTE_DATA_LIMIT"}))),c.a.createElement(bO,{flexDirection:"column"},c.a.createElement(Nr.Field,{label:"DEVICE_ULTE_SETUP_DATA_LIMIT_VALUE_FIELD",translateLabel:!0,full:!0,validated:!0,options:pO,type:"dropdown",name:"lte_soft_limit"}),c.a.createElement(RO,{color:"secondary",size:"label"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_CONFIGURE_UNIFI_LTE_DATA_LIMIT_DESCRIPTION"})))))});const hO=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  > li:last-child {
    border-bottom: 0;
  }
`;var vO;!function(e){e.GENERAL="general",e.UNIFI_LTE="unifi-lte",e.NETWORK="network",e.MANAGE_DEVICE="manage-device"}(vO||(vO={}));var DO=Object(st.compose)(la([vO.GENERAL,vO.UNIFI_LTE,vO.NETWORK,vO.MANAGE_DEVICE]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:r,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),m=Object(o.useSelector)(na),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=Object(n.useMemo)(()=>Object(v.isUltePro)(e),[e.type]),b=Object(n.useMemo)(()=>[{id:vO.GENERAL,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:vO.GENERAL})},{id:vO.UNIFI_LTE,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_LTE"}),renderContent:()=>c.a.createElement(TO,{activeItem:e,setFormDirty:t,setFormInvalid:a,isUltePro:p})},{id:vO.NETWORK,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:vO.NETWORK})},{id:vO.MANAGE_DEVICE,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}],[e,t,a,p]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(re.g,{flex:"1"},c.a.createElement(hO,{variant:"tertiary",items:b,multiOpen:!0,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:r,isInvalid:l,onFormSubmit:()=>{const e=[],t=Object.entries(m).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(i.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});u(Object(v.updateDeviceWithIdEndpoint)(t,d,_,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const fO=Object(l.c)(b.a)`
  padding: 30px;
`,PO=Object(l.c)(b.a)`
  margin-bottom: 28px;
`;var SO=({activeItem:e})=>{var t;const a=Object(Pr.k)(e),r=Object(o.useDispatch)(),l=Object(n.useCallback)((t,{resetForm:a})=>{r(Object(v.updateDevice)(t,e._id,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:"general"}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:"general"}}})).then(()=>a({values:t}))},[e._id,r]);return c.a.createElement(ia.c,{initialValues:{outlet_power_cycle_enabled:null!==(t=null==e?void 0:e.outlet_power_cycle_enabled)&&void 0!==t&&t},onSubmit:l},({dirty:e,submitForm:t,resetForm:n})=>c.a.createElement(c.a.Fragment,null,c.a.createElement(fO,{flexDirection:"column",width:"100%",height:"100%"},a&&c.a.createElement(PO,null,c.a.createElement(b.a,{flexDirection:"column"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE"})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET_CTL_POWER_CYCLE_DESCRIPTION"}))),c.a.createElement(b.a,{flex:"0 1 50%",justifyContent:"flex-end"},c.a.createElement(da.a,{type:"checkbox",name:"outlet_power_cycle_enabled"})))),c.a.createElement(Ma,{isDirty:e,onFormSubmit:t,onFormCancel:n,allowCancel:!0})))},AO=a(2103),jO=a(1938);var NO=({uplink:{port_idx:e}})=>c.a.createElement(jO.a,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_PORT"})),c.a.createElement(u.a,{color:"secondary"},e)),yO=a(2072),LO=a(2073),xO=a(2074),VO=a(2075),wO=a(2076),FO=a(2077),MO=a(2001);var UO=({activeItem:e,uplinkDevice:t,...a})=>{const r=Object(n.useMemo)(()=>Object(v.getUplinkAttrs)(e)||{},[e]),l=Object(v.getUplinkDisplayName)(e,t.uplink),i=Object(n.useMemo)(()=>[NO,yO.b,LO.a,xO.a,VO.a,wO.a,FO.a],[e]);return c.a.createElement(MO.a,null,i.map(e=>c.a.createElement(e,Object.assign({uplink:r,uplinkDevice:t,uplinkName:l},a))))};const BO=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var kO=({activeItem:e,...t})=>{const a=Object(o.useSelector)(t=>Object(v.getUplink)(Object(v.selectDevicesData)(t),e)),r=Object(v.isAdopted)(e),l=Object(n.useMemo)(()=>[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),renderContent:()=>c.a.createElement(AO.a,{activeItem:e})},...a?[{id:"uplink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK"}),renderContent:()=>c.a.createElement(UO,Object.assign({activeItem:e,uplinkDevice:a},t))}]:[],{id:"downlink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))}],[e,a]);return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(hr,{deviceData:e,navigateTo:"ports"}),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(BO,{variant:"tertiary",items:l,multiOpen:!0,renderOnlyExpandedContent:!0}))};const WO=10,HO=3600,GO=Object(l.c)(re.g)`
  margin-bottom: 16px;
`,YO=Object(ia.g)({isInitialValid:!0,mapPropsToValues:({lcmSettings:e})=>({lcm:e}),validationSchema:Na.a.object().shape({lcm:Na.a.object().shape({enabled:Na.a.boolean(),sync:Na.a.boolean(),idle_timeout:Na.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT").min(WO).max(HO).required(),brightness:Na.a.number().label("DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS").min(0).max(100).required()})}),handleSubmit:()=>null});const $O={saveSettings:Dn.saveSettings};var zO=Object(st.compose)(Object(o.connect)(e=>({lcmSettings:Object(Dn.selectLcmSettings)(e)}),$O),YO)((function({values:e,setFieldValue:t,resetForm:a,setFormDirty:r,dirty:l,initialValues:i}){const E=Object(o.useDispatch)();Object(n.useEffect)(()=>{r(XO.SCREEN,l)},[r,l]),Object(n.useEffect)(()=>{E(Object(_.h)({[XO.SCREEN]:()=>e})),E(Object(_.j)({[XO.SCREEN]:()=>{Object(vi.a)(i.lcm,e.lcm)||E(Object(Dn.saveSettings)(e.lcm)),a({values:e})}})),E(Object(_.i)({[XO.SCREEN]:a}))},[E,a,e]);const[s,m]=Object(n.useState)(!1);return c.a.createElement(c.a.Fragment,null,c.a.createElement(GO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LCM_SCREEN"})),c.a.createElement(Nr.Field,{type:"checkbox",name:"lcm.enabled"})),c.a.createElement(GO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_RACK_MULTI_SCREEN_SYNCHRONIZATION"})),c.a.createElement(Nr.Field,{type:"checkbox",name:"lcm.sync"})),c.a.createElement(GO,{justifyContent:"space-between"},c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT"})),c.a.createElement(Sm.a,{checked:s,onChange:()=>{m(!s)}})),s&&c.a.createElement(GO,{flexDirection:"column"},c.a.createElement(Nr.Field,{name:"lcm.idle_timeout",label:"DEVICE_PROPERTIES_LABEL_SCREEN_TIMEOUT",type:"number",min:WO,max:HO,full:!0})),c.a.createElement(u.a,{color:"primary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_SCREEN_BRIGHTNESS"})),c.a.createElement(GO,null,c.a.createElement(Wl.a,{size:"large",value:e.lcm.brightness||v.DEFAULT_LED_BRIGHTNESS,withValueIndicator:!0,valueIndicatorPosition:"right",formatValueIndicatorContent:e=>c.a.createElement(u.a,{color:"secondary"},e,"%"),onChange:e=>{t("lcm.brightness",+e.target.value)}})))}));const KO=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var XO;!function(e){e.GENERAL="general",e.SCREEN="screen",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage"}(XO||(XO={}));var qO=Object(st.compose)(la([XO.GENERAL,XO.SCREEN,XO.SERVICES,XO.NETWORK,XO.MANAGE]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:r,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),m=Object(o.useSelector)(na),d=Object(o.useDispatch)(),{_id:_,mac:u}=e,p=Object(n.useMemo)(()=>[{id:XO.GENERAL,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:XO.GENERAL})},{id:XO.SCREEN,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(zO,{setFormDirty:t})},{id:XO.SERVICES,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:XO.SERVICES})},{id:XO.NETWORK,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:XO.NETWORK})},{id:XO.MANAGE,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}],[e,t,a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(KO,{variant:"tertiary",items:p,multiOpen:!0,renderOnlyExpandedContent:!0}),c.a.createElement(Ma,{isDirty:r,isInvalid:l,onFormSubmit:()=>{const e=[],t=Object.entries(m).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(i.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});d(Object(v.updateDeviceWithIdEndpoint)(t,_,u,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const ZO=Object(l.c)(b.a)`
  padding: 0 32px;
`;var JO=Object(st.compose)(la(["general","screen","network","services"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"screen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(em,{activeItem:e,setFormDirty:t})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ZO,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{});_(Object(v.updateDeviceWithIdEndpoint)(t,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const QO=Object(l.c)(b.a)`
  margin-bottom: 8px;
  justify-content: space-between;
`;var eb=({activeItem:e})=>{const{source:t,status:a,statusColor:n}=Object(v.getActivePsuText)(e);return c.a.createElement(QO,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:t})),c.a.createElement(u.a,{color:n},c.a.createElement(O.c,{id:a})))};const tb=Object(l.c)(b.a)`
  position: relative;
  border-bottom: 4px;
`,ab=Object(l.c)(b.a)`
  margin-bottom: 16px;
  svg g:nth-child(2) {
    transform: translate(58px, 53px) !important;
  }
  g {
    > circle {
      transform: rotateX(180deg) rotateY(180deg);
    }
    text:nth-child(1) {
      font-size: 24px;
    }
    text:nth-child(2) {
      font-weight: 900;
    }
    circle:nth-child(2) {
      stroke: ${({theme:e})=>e.motifPalette.ui03};
    }
  }
`,nb=Object(l.c)("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,cb=Object(l.c)("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: ${({theme:e})=>e.motifPalette.ui04};
`,rb=Object(l.c)(u.a)`
  margin: 14px 0px;
`;var lb=({activeItem:e})=>{const{total:t,outlets:a,internalBattery:n,externalBattery:r}=Object(v.getPsuUtilization)(e);return c.a.createElement(tb,{flexFlow:"wrap"},c.a.createElement(nb,null),c.a.createElement(cb,null),c.a.createElement(ab,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(rb,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_TOTAL"})),c.a.createElement(Dt.a,{title:t.usedPowerPercentage+"%",description:`${t.usedPower}/${t.maxPower}W`,size:116,items:[{id:"free",color:t.statusColor,value:t.usedPowerPercentage},{id:"used",color:Oe.a["white-6"],value:100-t.usedPowerPercentage}]})),c.a.createElement(ab,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(rb,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_UTILIZATION_OUTLETS"})),c.a.createElement(Dt.a,{title:a.usedPowerPercentage+"%",description:`${a.usedPower}/${a.maxPower}W`,size:116,items:[{id:"free",color:a.statusColor,value:a.usedPowerPercentage},{id:"used",color:Oe.a["white-6"],value:100-a.usedPowerPercentage}]})),c.a.createElement(ab,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(rb,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})),c.a.createElement(Dt.a,{title:n.usedPowerPercentage+"%",description:`${n.usedPower}/${n.maxPower}W`,size:116,items:[{id:"used",color:n.statusColor,value:n.usedPowerPercentage},{id:"free",color:Oe.a["white-6"],value:100-n.usedPowerPercentage}]})),c.a.createElement(ab,{flexDirection:"column",flex:"1 1 50%",alignItems:"center"},c.a.createElement(rb,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),c.a.createElement(Dt.a,{title:r.usedPowerPercentage+"%",description:`${r.usedPower}/${r.maxPower}W`,size:116,items:[{id:"used",color:r.statusColor,value:r.usedPowerPercentage},{id:"free",color:Oe.a["white-6"],value:100-n.usedPowerPercentage}]})))};const ib=Object(l.c)(b.a)`
  margin-bottom: 8px;
  justify-content: space-between;
`,ob=Object(l.c)(u.a)`
  margin-bottom: 8px;
`,Eb=Object(l.c)(u.a)`
  margin-top 16px;
  margin-bottom: 8px;
`;var sb=({activeItem:e})=>{const t=[Object(v.getPsuInternalBattery)(e),Object(v.getPsuExternalBattery)(e)];return c.a.createElement(c.a.Fragment,null,t.map(e=>c.a.createElement("div",{key:e.index},Object(v.getIsPsuInternalBattery)(e)?c.a.createElement(ob,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_INTERNAL_BATTERY"})):c.a.createElement(Eb,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_EXTERNAL_BATTERY"})),c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STATUS"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:e.charge_status?"DEVICE_USW_MC_PSU_BATTERY_STATE_"+e.charge_status.replace(" ","_").toUpperCase():"DEVICE_USW_MC_PSU_BATTERY_STATE_UNKNOWN"}))),e.capacity&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_CAPACITY"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement("span",{style:{color:be.a.getGradientColor(e.capacity/100)}},e.capacity,"%"))),e.technology&&"Unknown"!==e.technology&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TYPE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_BATTERY_TYPE_"+e.technology.replace("-","_").toUpperCase()}))),e.charge_full_design&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_STORAGE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_AMPERE_HOURS",values:{value:e.charge_full_design}}))),c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_POWER_USAGE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:Number(e.power).toFixed(1)}}))),c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:Number(e.current).toFixed(1)}}))),c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:Number(e.voltage).toFixed(1)}}))),!!e.time_to_empty_avg&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_TIME"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(H.a,{type:"uptime",color:"secondary",input:e.time_to_empty_avg}))),e.installation_time&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_INSTALLATION_DATE"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(H.a,{type:"uptime",color:"secondary",input:e.installation_time}))),e.health&&c.a.createElement(ib,null,c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY_HEALTH_STATUS"})),c.a.createElement(u.a,{color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_USW_MC_PSU_HEALTH_"+e.health.replace(" ","_").toUpperCase()}))))))};var mb=({activeItem:e})=>{const t=Object(o.useDispatch)();return Object(n.useEffect)(()=>{t(Object(ce.fetchDeviceUsageReport)(e.mac))},[e.mac,t]),c.a.createElement(cs,{gwMac:e.mac,keys:["mem","cpu"],pickDatumsWithKey:"sw",heading:"DEVICE_GATEWAY_USAGE_STAT_CHART_HEADER"})};const db=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var _b=c.a.memo(({activeItem:e,...t})=>{var a,n;const r=null===(a=null==e?void 0:e.uplink)||void 0===a?void 0:a.type,l=r&&(r===v.UplinkType.WIRE?"DEVICE_CONNECTION_WIRED":"DEVICE_CONNECTION_WIRELESS"),i=[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),renderContent:()=>c.a.createElement(kE.a,{switchDeviceData:e})},...(null===(n=e.psu_table)||void 0===n?void 0:n.length)?[{id:"powerSource",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER_SOURCE"}),renderContent:()=>c.a.createElement(eb,{activeItem:e})},{id:"powerUtilization",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"}),renderContent:()=>c.a.createElement(lb,{activeItem:e})},{id:"battery",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_BATTERY"}),renderContent:()=>c.a.createElement(sb,{activeItem:e})}]:[],{id:"uplink",label:c.a.createElement(c.a.Fragment,null,c.a.createElement(O.c,{id:"DEVICE_HEADER_UPLINK"}),l&&c.a.createElement(c.a.Fragment,null," ","(",c.a.createElement(O.c,{id:l}),")")),renderContent:()=>c.a.createElement($E,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))},{id:"clients",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_CLIENTS_AND_GUESTS"}),renderContent:()=>c.a.createElement(ls.a,Object.assign({activeItem:e},t))},{id:"stats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(mb,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(hr,{deviceData:e}),c.a.createElement(db,{variant:"tertiary",items:i,renderOnlyExpandedContent:!0}))});const ub=Object(l.c)(b.a)`
  padding: 0 32px;
`;var pb=Object(st.compose)(la(["general","lcmScreen","services","network"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"lcmScreen",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>c.a.createElement(Ns,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"network",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"services",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(ub,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:u,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{lcm:a,...n}=t;_(Object(v.updateDeviceWithIdEndpoint)(n,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))}),Ob=a(2118);const bb=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  li:last-child {
    border-bottom: none;
  }
`;var Ib;!function(e){e.GENERAL="general",e.LED="led",e.SERVICES="services",e.NETWORK="network",e.MANAGE="manage"}(Ib||(Ib={}));var gb=Object(st.compose)(la([Ib.GENERAL,Ib.LED,Ib.SERVICES,Ib.NETWORK,Ib.MANAGE]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:r,isInvalid:l,intl:i})=>{const E=Object(o.useSelector)(na),s=Object(o.useSelector)(ca),m=Object(o.useSelector)(ra),{_id:d,mac:_}=e,u=Object(o.useDispatch)(),p=Object(n.useMemo)(()=>[{id:Ib.GENERAL,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:Ib.GENERAL})},{id:Ib.LED,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_LED"}),renderContent:()=>c.a.createElement(em,{activeItem:e,setFormDirty:t,formName:Ib.LED})},{id:Ib.SERVICES,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SERVICES"}),renderContent:()=>c.a.createElement(Bs,{activeItem:e,setFormDirty:t,setFormInvalid:a,hideFlowControl:!0,formName:Ib.SERVICES})},{id:Ib.NETWORK,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_NETWORK"}),renderContent:()=>c.a.createElement(Ks,{activeItem:e,setFormDirty:t,setFormInvalid:a,formName:Ib.NETWORK})},{id:Ib.MANAGE,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e})}],[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(bb,{variant:"tertiary",items:p,multiOpen:!0,renderOnlyExpandedContent:!0}),c.a.createElement(Ma,{isDirty:r,isInvalid:l,onFormSubmit:()=>{const e=[],t=Object.entries(E).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(i.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{led:a,...n}=t;u(Object(v.updateDeviceWithIdEndpoint)({...n,...a},d,_,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(m).forEach(e=>{"function"==typeof e&&e()})}}))}),Rb=a(1986),Cb=a(1987),Tb=a(1988),hb=a(1963),vb=a(1989),Db=a(2083),fb=a(2084),Pb=a(2024),Sb=a(2025);const Ab=Object(l.c)("div")`
  margin-bottom: 8px;
`;function jb({activeItem:e}){const t=[{Comp:Rb.a,key:"Name"},{Comp:Cb.a,key:"MacAddress"},{Comp:Tb.a,key:"Model"},{Comp:hb.a,key:"Version"},{Comp:vb.a,key:"IpAddress"},{spacer:!0,key:"spacer"},{Comp:Db.a,key:"Temperature"},{Comp:fb.a,key:"FanLevel"},{Comp:hu.a,key:"Uptime"},{Comp:Pb.a,key:"MemoryUsage"},{Comp:Sb.a,key:"LoadAverage"}];return c.a.createElement(b.a,{flexDirection:"column"},t.map(({Comp:t,spacer:a,key:n})=>a?c.a.createElement(Ab,{key:n}):c.a.createElement(t,{key:n,activeItem:e})))}const Nb=Object(l.c)("div")`
  margin-bottom: 12px;
`,yb=["backup","delivering"];var Lb=({activeItem:e})=>{const t=Object(v.getRpsPortUtilization)(null==e?void 0:e.rps);return c.a.createElement(c.a.Fragment,null,t.map(e=>c.a.createElement("div",{key:e.voltage},yb.map(t=>c.a.createElement("div",{key:t},e[t].ports.map(a=>c.a.createElement(Nb,{key:a.id},c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_UTILIZATION_BAR_HEADING_"+t.toUpperCase(),values:{voltage:e.voltage,mode:"delivering",portId:a.id}})),c.a.createElement(u.a,null,c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_TOTAL_WATTS_VALUE",values:{sum:a.powerRequired,max:e[t].total}}))),c.a.createElement(fo.a,{items:[{variant:"primary",value:a.powerRequired/e[t].total*100}]}))))))))},xb=a(1196);const Vb=Object(l.c)(fa.a,{shouldForwardProp:e=>"color"!==e&&"isTableItem"!==e})`
  width: ${({isTableItem:e})=>e?"20px":"90px"};
  height: 20px;
  align-items: center;
  background-color: ${({color:e,theme:t})=>t.motifPalette[e]};
  border-radius: 2px;
  color: #fff;
  justify-content: center;
  display: flex;
  position: relative;
  ${({isTableItem:e})=>e&&"margin-right: 8px;"}

  &:not(:first-child) {
    margin-left: 8px;
  }

  div:last-child {
    right: -15px;
  }
`,wb=l.a`
  margin-left: 15px;
`,Fb=Object(l.c)("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 70%;
    max-height: 70%;
  }
`,Mb=Object(l.c)(u.a)`
  max-width: 140px;
`;var Ub=({cellData:e,isTableItem:t=!1,tooltipPosition:a="bottomRight"})=>{const n=Object(r.k)(),l=Object(o.useSelector)(v.selectDevicesData),{peer:i}=e,E=l.find(e=>e.mac===(null==i?void 0:i.mac)),s=Object(D.b)(E),m=Object(D.a)(E),d=Object(v.getRspOutletIcons)(e),_=Object(v.getRspOutletColor)(e);return c.a.createElement(Vb,{color:_,tooltipClassName:wb,onClick:()=>n.push("outlets"),width:E?240:200,isTableItem:t,message:c.a.createElement(b.a,{flexDirection:"column",justifyContent:"space-between",width:"100%"},c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_OUTLET"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},e.port_idx)),(null==e?void 0:e.port_mode)&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODE"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},Object(xb.a)(e.port_mode))),(null==e?void 0:e.port_state)&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_STATE"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+e.port_state.toUpperCase()}))),(null==e?void 0:e.up)&&v.RPS_VOLTAGES.map(t=>c.a.createElement("div",{key:t},c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:t}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_CURRENT"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_AMPERES_SHORT",values:{value:e[`power_${t}v_current`]}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_VOLTAGE"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:e[`power_${t}v_voltage`]}}))),c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW_POWER"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_WATTS_SHORT",values:{value:e[`power_${t}v_power`]}}))))),E&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER"}))),(s||(null==i?void 0:i.hostname))&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_NAME"})),c.a.createElement(Mb,{size:"caption",color:"secondary",truncate:!0},s||(null==i?void 0:i.hostname))),(null==E?void 0:E.mac)&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MAC"})),c.a.createElement(u.a,{size:"caption",color:"secondary"},null==E?void 0:E.mac)),m&&c.a.createElement(b.a,{justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_MODEL"})),c.a.createElement(Mb,{size:"caption",color:"secondary",truncate:!0},m)),v.RPS_VOLTAGES.map(e=>c.a.createElement(b.a,{key:e,justifyContent:"space-between"},c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_PEER_POWER_REQUIRED",values:{voltage:e}})),c.a.createElement(u.a,{size:"caption",color:"secondary"},c.a.createElement(O.c,{id:"COMMON_UNIT_VOLTAGE_SHORT",values:{value:null==i?void 0:i[`power_required_${e}v`]}})))))),position:a,portal:!0},c.a.createElement(Fb,null,e.port_mode!==v.RpsPortMode.DISABLED&&c.a.createElement(Kc,{icons:d})))};const Bb=Object(l.c)(b.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
`,kb=Object(l.c)(b.a)`
  &:not(:first-child) {
    margin-top: 8px;
  }
`,Wb=Object(l.c)(p.cb)`
  margin-right: 12px;
`,Hb=Object(l.c)("div")`
  width: 5px;
`;var Gb=({deviceData:e})=>{const{rps:{diagram:t,primaryPortGroupCount:a}}=Object(v.getDeviceSpecs)(e),n=t?Object(v.determineRowLayoutsFromOutletDiagramConfig)(t,e):Object(v.determineRowLayoutsFromOutletConfig)(a,e);return n&&0!==n.length?c.a.createElement(c.a.Fragment,null,n.map((t,a)=>c.a.createElement(kb,{justifyContent:"center",width:"100%",key:"RpsOutletLayoutRow-"+(a+1)},t.map((t,n)=>{if(!t)return c.a.createElement(Hb,{key:`RpsOutletSpacer-${a+1}-${n+1}`});const r=`RpsOutlet-${a+1}-${n+1}`,l=Object(v.getActiveRpsOutletInfo)(e,t.outletNumber);return c.a.createElement(Ub,{cellData:l,key:r})})))):c.a.createElement(Bb,null,c.a.createElement(Wb,{isActive:!0}),c.a.createElement(O.c,{id:"DEVICE_DIAGRAM_MISSING"}))};const Yb=Object(l.c)("div")`
  padding: 24px 32px;
  background: ${({theme:e})=>e.motifPalette.ui11};
  display: flex;
  flex: none;
  flex-direction: column;
`;var $b=({deviceData:e})=>c.a.createElement(Yb,null,c.a.createElement(b.a,{flexDirection:"column",alignItems:"center"},c.a.createElement(Gb,{deviceData:e})),c.a.createElement(tE,{isForDiagram:!0,deviceData:e}));const zb=Object(l.c)(k.a)`
  padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;var Kb=c.a.memo(({activeItem:e})=>{const t=Object(v.isAdopted)(e),a=Object(v.getRpsPortUtilizationActive)(null==e?void 0:e.rps),n=[{id:"overview",label:c.a.createElement(O.c,{id:"CLIENT_ACCORDION_HEADER_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(jb,{activeItem:e})},...a?[{id:"powerUtilization",label:c.a.createElement(O.c,{id:"DEVICE_HEADER_POWER_UTILIZATION"}),renderContent:()=>c.a.createElement(Lb,{activeItem:e})}]:[]];return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement($b,{deviceData:e}),c.a.createElement(zb,{variant:"tertiary",items:n,renderOnlyExpandedContent:!0}))});const Xb=Object(l.c)(b.a)`
  padding: 0 32px;
`;var qb=Object(st.compose)(la(["general","lcmScreen","screen","manage"]),O.f)(({activeItem:e,setFormDirty:t,setFormInvalid:a,isDirty:n,isInvalid:r,intl:l})=>{const i=Object(o.useSelector)(na),E=Object(o.useSelector)(ca),s=Object(o.useSelector)(ra),{_id:m,mac:d}=e,_=Object(o.useDispatch)(),u=Object(Pr.i)(e),p=u?"lcmScreen":"screen",b=[{id:"general",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_GENERAL"}),openByDefault:!0,renderContent:()=>c.a.createElement(Rs,{activeItem:e,setFormDirty:t,setFormInvalid:a})},{id:p,label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_SCREEN"}),renderContent:()=>u?c.a.createElement(Ns,{activeItem:e,setFormDirty:t,setFormInvalid:a}):c.a.createElement(em,{activeItem:e,setFormDirty:t})},{id:"manage",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_MANAGE"}),renderContent:()=>c.a.createElement(lm,{activeItem:e,disableLocate:!0,disableRestart:!0,disableDebug:!0})}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(Xb,{flexDirection:"column",flex:"1 1 85%"},c.a.createElement(k.a,{variant:"tertiary",items:b,renderOnlyExpandedContent:!0})),c.a.createElement(Ma,{isDirty:n,isInvalid:r,onFormSubmit:()=>{const e=[],t=Object.entries(i).reduce((t,[a,n])=>{if("function"==typeof n){const c=n();if("object"==typeof c&&Object.keys(c).length)return e.push(l.formatMessage({id:"DEVICE_PROPERTY_HEADER_"+Object(Fl.a)(a).toUpperCase()})),{...t,...c}}return t},{}),{lcm:a,...n}=t;_(Object(v.updateDeviceWithIdEndpoint)(n,m,d,{successToast:{icon:Ot.a.success,message:"DEVICE_NOTICE_SAVE_SUCCESS",values:{section:e.join(", ")}},failureToast:{icon:Ot.a.danger,message:"DEVICE_NOTICE_SAVE_ERROR",values:{section:e.join(", ")}},extend:!0})).then(()=>{Object.values(E).forEach(e=>{"function"==typeof e&&e()})})},onFormCancel:()=>{Object.values(s).forEach(e=>{"function"==typeof e&&e()})}}))});const Zb=Object(l.c)(p.h)`
  position: absolute;
  right: 8px;
  color: inherit;
`,Jb=Object(l.c)("div")`
  table {
    th {
      text-transform: none;
    }

    tr {
      cursor: pointer;
    }
  }
`,Qb=[{id:"name",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_NAME"}),renderCell:e=>e.name},{id:"outletStatus",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS"}),renderCell:e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(Ub,{cellData:e,isTableItem:!0}),c.a.createElement(O.c,{id:"DEVICE_PROPERTIES_RPS_TOOLTIP_VALUE_STATE_"+("disabled"===e.port_mode?e.port_mode.toUpperCase():e.port_state.toUpperCase())})),c.a.createElement(Zb,{size:"small"}))}];var eI=({deviceData:e,deviceData:{rps:t}})=>{const a=Object(r.k)(),l=t.rps_port_table.map(t=>({...Object(v.getActiveRpsOutletInfo)(e,t.port_idx),id:t.port_idx})),i=Object(n.useCallback)(e=>a.push("outlets/"+e.id),[a]);return c.a.createElement(Jb,null,c.a.createElement(ne.a,{columns:Qb,rowHeight:35,items:l,disableColumnFilters:!0,hideCellOverflow:!1,onRowClick:i}))};const tI=Object(l.c)("div")`
  margin: 16px 32px 0 32px;
`;var aI=({activeItem:e})=>c.a.createElement(c.a.Fragment,null,c.a.createElement($b,{deviceData:e}),c.a.createElement(tI,null,c.a.createElement(eI,{deviceData:e}))),nI={[C.b.ISP_DETAILS]:{default:"overview",panels:{overview:{path:"/overview",title:"DASHBOARD_ISP_PROPERTY_OVERVIEW",icon:p.a,component:ae},speedTests:{path:"/speedTests",title:"DASHBOARD_ISP_PROPERTY_SPEED_TESTS",icon:p.Ob,component:pe}}},[C.b.WIFI_MAN]:{default:"tests",singlePanel:!0,panels:{tests:{path:"/tests",component:et,subpanel:{path:"/:subPanel",component:it}}}},[C.a.STA]:{default:"overview",panels:{overview:{path:"/overview",title:"CLIENT_PROPERTY_HEADER_OVERVIEW",icon:p.a,component:aa},configuration:{path:"/configuration",title:"CLIENT_PROPERTY_HEADER_CONFIGURATION",icon:p.X,component:ka},history:{path:"/history",title:"CLIENT_PROPERTY_HEADER_HISTORY",icon:p.bb,component:Tc,subpanel:{path:"/:subPanel",component:Sc}}}},[C.a.UGW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:Tm},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.mc,component:Ym},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:ed,subpanel:{path:"/:subPanel",component:({activeItem:e,params:t,...a})=>t.subPanel===F.ALL?c.a.createElement(wl,Object.assign({activeItem:e,params:t},a)):c.a.createElement(id,Object.assign({activeItem:e,params:t},a))}}}},[C.a.USW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:function({activeItem:e,...t}){const[a]=Object(n.useState)("SwitchAbout-"+Date.now()),r=Object(v.isAdopted)(e),l=Object(o.useDispatch)(),i={style:jc.a.overflow,styleName:"overflow",dependant:a};Object(n.useEffect)(()=>(l(Object(Ac.c)(i)),()=>l(Object(Ac.b)(i))),[]);const E=Object(n.useMemo)(()=>[{id:"overview",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_OVERVIEW"}),openByDefault:!0,renderContent:()=>c.a.createElement(kE.a,{switchDeviceData:e})},{id:"uplink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_UPLINK_WIRED"}),renderContent:()=>c.a.createElement($E,Object.assign({switchDeviceData:e,showSimplifiedActivity:!0},t))},{id:"downlink",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_DOWNLINK"}),renderContent:()=>c.a.createElement(BE,Object.assign({activeItem:e},t))},...r?[{id:"clientsGuests",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_CLIENTS_GUESTS"}),renderContent:()=>c.a.createElement(ls.a,Object.assign({activeItem:e},t))},{id:"stats",label:c.a.createElement(O.c,{id:"DEVICE_PROPERTY_HEADER_STATS"}),renderContent:()=>c.a.createElement(rs,{activeItem:e})}]:[]],[e,t]);return c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(hr,Object.assign({deviceData:e},t,{navigateTo:"ports"})),c.a.createElement(zn.a,{activeItem:e}),c.a.createElement(is,{variant:"tertiary",items:E,renderOnlyExpandedContent:!0}))}},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.Tb,component:om},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:Tl}}}},[C.a.UAP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:Dd,subpanel:{path:"/:subPanel/:subPanelId",component:Sc}},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.F,component:Nd},radio:{path:"/radio",title:"DEVICE_PROPERTY_HEADER_RADIO_SHORT",icon:p.Db,component:ko}}},[C.a.UAP6MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:Ob.a},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.F,component:gb},rf:{path:"/rf",title:"DEVICE_PROPERTY_HEADER_RADIO_SHORT",icon:p.Db,component:ko}}},[C.a.UDM]:{default:"about",panels:{about:{path:"/about",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:e_},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.dc,component:m_},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:({params:e,activeItem:t,...a})=>e.subPanel===F.WAN?c.a.createElement(wl,Object.assign({params:e,activeItem:t},a)):c.a.createElement(Tl,Object.assign({params:e,activeItem:t},a))}},radio:{path:"/radio",title:"DEVICE_PROPERTY_HEADER_RADIO_SHORT",icon:p.Db,component:ko}}},[C.a.UDMPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:__},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.ec,component:p_},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:({params:e,activeItem:t,...a})=>e.subPanel===F.WAN?c.a.createElement(wl,Object.assign({params:e,activeItem:t},a)):c.a.createElement(Tl,Object.assign({params:e,activeItem:t},a))}}}},[C.a.UAP_USW]:{default:"about",panels:{about:{path:"/about",title:"DEVICE_PROPERTY_HEADER_ABOUT",icon:p.a,component:Dd}}},[C.a.UBB]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.a,component:Y_},config:{path:"/config",title:"DEVICE_PROPERTY_HEADER_CONFIG",icon:p.X,component:ou},manage:{path:"/manage",title:"DEVICE_PROPERTY_HEADER_MANAGE",icon:p.Ac,component:mc},stats:{path:"/stats",title:"DEVICE_PROPERTY_HEADER_STATS",icon:p.Qb,component:gu}}},[C.a.UBBXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.a,component:qu},config:{path:"/config",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.F,component:op},manage:{path:"/manage",title:"DEVICE_PROPERTY_HEADER_RADIO_SHORT",icon:p.Db,component:mp}}},[C.a.USPP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:up},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.nb,component:Rp}}},[C.a.USPS]:{default:"about",panels:{about:{path:"/about",title:"DEVICE_PROPERTY_HEADER_ABOUT",icon:p.a,component:hp},general:{path:"/general",title:"DEVICE_PROPERTY_HEADER_GENERAL",icon:p.nc,component:Dp},outlets:{path:"/outlets",title:"DEVICE_PROPERTY_HEADER_OUTLETS",icon:p.nb,component:e=>c.a.createElement(uE,Object.assign({hidePorts:!0},e)),subpanel:{path:"/:subPanel",component:SE}}}},[C.a.USPPDUP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:jp},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.Tb,component:yp},outlets:{path:"/outlets",title:"DEVICE_PROPERTY_HEADER_OUTLETS",icon:p.nb,component:uE,subpanel:{path:"/:subPanel/:subPanelId",component:({params:e,...t})=>"port"===e.subPanel?c.a.createElement(Tl,Object.assign({params:e},t)):c.a.createElement(SE,Object.assign({params:e},t))}}}},[C.a.USAGGPRO]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.a,component:kO},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.Tb,component:qO},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:Tl}}}},[C.a.LTE]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:_O},configure:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.G,component:DO}}},[C.a.UXG]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:Tm},general:{path:"/general",title:"DEVICE_PROPERTY_HEADER_GENERAL",icon:p.mc,component:SO},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:ed,subpanel:{path:"/:subPanel",component:({activeItem:e,params:t,...a})=>t.subPanel===F.ALL?c.a.createElement(wl,Object.assign({activeItem:e,params:t},a)):c.a.createElement(id,Object.assign({activeItem:e,params:t},a))}},manage:{path:"/manage",title:"DEVICE_PROPERTY_HEADER_MANAGE",icon:p.Ac,component:mc}}},[C.a.UAP_IW]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.a,component:Dd,subpanel:{path:"/:subPanel/:subPanelId",component:Sc}},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.Tb,component:JO},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:Tl}},radio:{path:"/radio",title:"DEVICE_PROPERTY_HEADER_RADIO_SHORT",icon:p.Db,component:ko}}},[C.a.USL8MP]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:_b},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.Tb,component:pb},ports:{path:"/ports",title:"DEVICE_PROPERTY_HEADER_PORTS",icon:p.H,component:Dr,subpanel:{path:"/:subPanel",component:Tl}},outlets:{path:"/outlets",title:"DEVICE_PROPERTY_HEADER_OUTLETS",icon:p.nb,component:e=>c.a.createElement(uE,Object.assign({hidePorts:!0},e)),subpanel:{path:"/:subPanel",component:SE}}}},[C.a.USPRPS]:{default:"overview",panels:{overview:{path:"/overview",title:"DEVICE_PROPERTY_HEADER_OVERVIEW",icon:p.pb,component:Kb},device:{path:"/device",title:"DEVICE_PROPERTY_HEADER_DEVICE",icon:p.G,component:qb},outlets:{path:"/outlets",title:"DEVICE_PROPERTY_HEADER_OUTLETS",icon:p.nb,component:aI,subpanel:{path:"/:subPanel",component:wE}}}}},cI=a(1837),rI=a(230),lI=a.n(rI),iI=a(704),oI=a(189);const EI=Object(l.c)(fa.a)`
  display: flex;
`,sI=Object(l.c)(G.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 ${({theme:e})=>e.space[3]}px;
  line-height: 14px;
  white-space: nowrap;
`,mI=Object(l.c)(G.a,{shouldForwardProp:e=>"color"!==e})`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  padding: 0 ${({theme:e})=>e.space[3]}px;
  color: ${({color:e})=>e};
  line-height: 14px;
  white-space: nowrap;
`,dI=Object(l.c)(p.c)`
  display: inline-block;
  vertical-align: middle;
  margin-right: -8px;
  margin-top: -3px;
  color: ${({theme:e})=>e.motifPalette.warning};
`,_I=Object(l.c)(p.c)`
  margin-right: 8px;
  color: ${({theme:e})=>e.motifPalette.warning};
`,uI=Object(l.c)("div")`
  width: 170px;
  line-height: 18px;
`,pI=Object(l.c)(p.X)`
  position: absolute;
  top: 55px;
  left: 45px;
  width: 25px;
  height: 25px;
  color: ${({theme:e})=>e.motifPalette.icon01};
`,OI=Object(l.c)(u.a)`
  white-space: nowrap;
`;var bI=({device:e,showForNonAdoptableGateway:t,buttonProps:{...a}={}})=>{const{wrapClassName:l,variant:i,...E}=a||{},s=Object(o.useSelector)(Ga.A)("API_DEVICE_ADOPT"),m=Object(o.useSelector)(v.selectDevicesData),d=Object(o.useSelector)(oI.g),_=Object(o.useSelector)(ln.a),u=Object(o.useDispatch)(),p=Object(r.k)(),g=Object(v.getDeviceState)(e),R=Object(v.isAdoptApplicable)(e),C=!!e.adoptable_when_upgraded,T=Object(v.isGateway)(e)&&!Object(v.isGatewayAdoptable)(m,e),h=Object(v.isUlte)(e),D=h&&!Object(v.isUlteAdoptable)(m,e),f=h&&!e.lte_imei,P=!e.adopted&&R&&s&&(t||!T||!D),[S,A]=Object(n.useState)(g===v.DeviceState.ADOPTING),j=h&&!d,N=S||j,y=Object(Wn.h)("wifi/network/form"),L=Object(v.isUBB)(e)&&!Object(v.getIsUbbPeerAdoptable)(e);Object(n.useEffect)(()=>{A(g===v.DeviceState.ADOPTING)},[g]);const x=t=>{function a(){h?(u(Object(Vp.d)(e.mac,Object(v.isUltePro)(e)?"LTE_PRO_ADOPTION":"LTE_ADOPTION")),A(!1)):function(){if(e.discovered_by===iI.a.PROTOCOL_V2_ID)A(!1);else if(u(Object(v.adoptDevice)(e)).then(A(!0)),Object(v.isPureAp)(e)){const t=lI()();u(Object(ut.c)({icon:c.a.createElement("div",null,c.a.createElement(I.b,{deviceType:null==e?void 0:e.type,deviceModel:null==e?void 0:e.model,publicImagePath:_,width:53,height:53}),c.a.createElement(pI,null)),title:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_TITLE"}),message:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_MESSAGE",primaryButton:{label:c.a.createElement(O.c,{id:"DEVICE_ACTIONS_ADOPT_ACCESS_POINT_ACTION"}),onClick:()=>{p.push(y),u(Object(ut.d)(t))}}},t))}}()}function n(){const{elite:t}=e;if(t&&t.replacement_for_mac){const e=m.find(e=>e.mac===t.replacement_for_mac);u(Object(cn.a)({title:"DEVICE_APPLY_CONFIGURATION_HEADER",titleValues:{deviceName:e.name},message:"DEVICE_APPLY_CONFIGURATION_MESSAGE",messageValues:{deviceName:e.name},size:"small",onConfirm:()=>{u(Object(Ya.e)())},onCancel:()=>{u(Object(Ya.e)()),a()}}))}else a()}t.preventDefault(),t.stopPropagation(),C?u(Object(cn.a)({title:"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_TITLE",titleValues:{deviceName:e.name},message:e.upgrade_to_firmware?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_VERSION_MESSAGE":"DEVICE_ACTIONS_ADOPT_AND_UPGRADE_CONFIRM_MESSAGE",messageValues:{fromVersion:e.version,toVersion:e.upgrade_to_firmware},size:"small",onConfirm:()=>{u(Object(Ya.e)()),n()},onCancel:()=>{u(Object(Ya.e)()),A(!1)}})):n()};return!P||f?null:j?c.a.createElement(EI,{position:"topRight",portal:!0,message:c.a.createElement(uI,null,c.a.createElement(O.c,{id:"DEVICE_ULTE_USG_REQUIRED"})),className:l},c.a.createElement(mI,Object.assign({variant:"link",onClick:x,disabled:N},E,{color:j?In.q.warning:""}),c.a.createElement(dI,{size:"medium"}),c.a.createElement(O.c,{id:C?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE":"DEVICE_ACTIONS_ADOPT"}))):L?c.a.createElement(EI,{position:"top",portal:!0,message:c.a.createElement(uI,null,c.a.createElement(O.c,{id:"DEVICE_UBB_ADOPT_WARNING_MESSAGE_TOOLTIP"})),className:l},c.a.createElement(b.a,{alignItems:"center"},c.a.createElement(_I,{size:"medium"}),c.a.createElement(OI,{color:"warning",weight:"bold"},c.a.createElement(O.c,{id:"DEVICE_UBB_ADOPT_WARNING_MESSAGE"})))):c.a.createElement(sI,Object.assign({variant:"link",onClick:x,disabled:N},a),c.a.createElement(O.c,{id:C?"DEVICE_ACTIONS_ADOPT_AND_UPGRADE":"DEVICE_ACTIONS_ADOPT"}))};const II=Object(l.c)("div")`
  position: relative;
`,gI=Object(l.c)(u.a,{shouldForwardProp:e=>"isActive"!==e})`
  margin-top: 4px;
  height: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: pre-wrap;
  line-height: 1;
  ${({theme:e,isActive:t})=>t?"color: "+e.motifPalette.uBlue06:""};
`,RI=Object(l.c)(cI.a)`
  background: ${({theme:e})=>e.motifPalette.ui12};
  border-bottom: 1px ${({theme:e})=>e.motifPalette.ui04} solid;
  overflow: visible;

  & > div {
    width: 100%;
    ${({tabs:e})=>e.length>1&&"justify-content: space-evenly;"}
  }
`,CI=l.a`
  padding: 0 !important;
  max-width: 50%;
  flex: 1;

  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,TI=({title:e,icon:t,active:a})=>{const n=t,r=Object(Wn.k)(()=>"\n    color: transparent;\n  ").replace(/^\./,"");return c.a.createElement(c.a.Fragment,null,c.a.createElement(n,{width:20,height:20,isActive:a,svgFillClassname:r}),c.a.createElement(gI,{isActive:a,size:"label",color:"secondary"},c.a.createElement(O.c,{id:e})))};var hI=({activeItem:e,history:t,match:{params:a},tabs:n})=>{const{site:r,id:l,panel:i,page:E,subPage:s}=a,d=Object(o.useSelector)(Object(m.j)(r)),_=Object(Wn.k)(()=>"\n    position: absolute;\n    top: calc(50% - 15px);\n    right: 32px;\n    bottom: 0;\n    height: 30px;\n  ").replace(/^\./,""),u=Object(Wn.k)(()=>"\n    min-width: 80px;\n    height: 30px;\n  ").replace(/^\./,"");return n&&n.length?c.a.createElement(II,null,c.a.createElement(RI,{tabs:n,selectedTab:i,onSelectTab:e=>t.push(`${d}/${E}/${s?s+"/":""}properties/${l}/${e.id}`),tabClassName:CI}),c.a.createElement(bI,{device:e,showForNonAdoptableGateway:!0,buttonProps:{variant:"primary",wrapClassName:_,className:u}})):null},vI=a(2052);const DI=Object(l.c)("div")`
  background-color: ${In.q.success};
  color: ${In.f};
  display: flex;
  flex: none;
  font-size: 11px;
  height: 50px;
  min-height: 50px;
  padding: 8px 32px;
  position: relative;
`,fI=Object(l.c)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`,PI=Object(l.c)("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`,SI=Object(l.c)("div")`
  font-weight: bold;
  margin-bottom: 4px;
`;var AI=({activeItem:e})=>{if(Object(xc.Jd)(e)&&Object(xc.Nd)(e)){const t=Object(xc.cc)(e);return c.a.createElement(DI,null,c.a.createElement(fI,null,c.a.createElement(vI.a,{width:18,height:18,strength:t,color:"currentColor",inactiveColor:In.d})),c.a.createElement(PI,null,c.a.createElement(SI,null,c.a.createElement(O.c,{id:"DEVICE_ULTE_IS_ACTIVE_TITLE"})),c.a.createElement(O.c,{id:"DEVICE_ULTE_IS_ACTIVE_DETAILS"})))}return null},jI=a(37),NI=a(22);const yI=Object(l.c)(re.g)`
  padding: 24px 32px 0;
`,LI=Object(l.c)("div")`
  margin-bottom: 16px;
`;var xI=({activeItem:e})=>{const t=Object(o.useDispatch)(),a=Object(n.useCallback)(({displayName:e,mac:a,uptime:n})=>{t(Object(cn.a)({title:"CLIENT_ACTIONS_BLOCK_CONFIRM_TITLE",titleValues:{clientName:e},message:"CLIENT_ACTIONS_BLOCK_CONFIRM_MESSAGE",messageValues:{clientName:e},onConfirm:()=>{t(((e,t,a={})=>Object(Pt.n)(jI.a.BLOCK_STA,"/api/s/{site}/cmd/stamgr",{mac:e},{...Object(NI.a)("CLIENT_ACTIONS_BLOCK_ERROR","CLIENT_ACTIONS_BLOCK_NOTICE",{clientName:t}),...a}))(a,e)).then(()=>t(Object(Ya.e)())).then(()=>{t(Object(h.deleteClientFromStore)(a,n?h.ClientType.ACTIVE:h.ClientType.OFFLINE)),t(Object(h.fetchBlockedClients)()),t(Object(h.fetchOfflineClients)())})}}))},[t]),r=Object(n.useCallback)(({displayName:e,mac:a})=>{t(Object(cn.a)({title:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_TITLE",titleValues:{clientName:e},message:"CLIENT_ACTIONS_UNBLOCK_CONFIRM_MESSAGE",messageValues:{clientName:e},onConfirm:()=>{t(((e,t,a={})=>Object(Pt.n)(jI.a.UNBLOCK_STA,"/api/s/{site}/cmd/stamgr",{mac:e},{...Object(NI.a)("CLIENT_ACTIONS_UNBLOCK_ERROR","CLIENT_ACTIONS_UNBLOCK_NOTICE",{clientName:t}),...a}))(a,e)).then(()=>t(Object(Ya.e)())).then(()=>{t(Object(h.deleteClientFromStore)(a,h.ClientType.BLOCKED)),t(Object(h.fetchOfflineClients)()),t(Object(h.fetchBlockedClients)())})}}))},[t]),l=Object(n.useCallback)(({displayName:e,mac:a})=>{t(((e,t,a={})=>Object(Pt.n)(jI.a.KICK_STA,"/api/s/{site}/cmd/stamgr",{mac:e},{...Object(NI.a)("CLIENT_ACTIONS_RECONNECT_ERROR","CLIENT_ACTIONS_RECONNECT_NOTICE",{clientName:t}),...a}))(a,e))},[t]),i=Object(n.useCallback)(({displayName:e,mac:a})=>{t(((e,t,a={})=>Object(Pt.n)(jI.a.AUTHORIZE_GUEST,"/api/s/{site}/cmd/stamgr",{mac:e},{...Object(NI.a)("CLIENT_ACTIONS_AUTHORIZE_ERROR","CLIENT_ACTIONS_AUTHORIZE_NOTICE",{clientName:t}),...a}))(a,e))},[t]),E=Object(n.useCallback)(({displayName:e,mac:a})=>{t(((e,t,a={})=>Object(Pt.n)(jI.a.UNAUTHORIZE_GUEST,"/api/s/{site}/cmd/stamgr",{mac:e},{...Object(NI.a)("CLIENT_ACTIONS_UNAUTHORIZE_ERROR","CLIENT_ACTIONS_UNAUTHORIZE_NOTICE",{clientName:t}),...a}))(a,e))},[t]);return c.a.createElement(re.b,null,c.a.createElement(yI,{flexDirection:"column"},e.blocked?c.a.createElement(LI,null,c.a.createElement(G.a,{name:"block-client",size:"small",variant:"inline",onClick:()=>r(e)},c.a.createElement(O.c,{id:"COMMON_ACTION_UNBLOCK"}))):c.a.createElement(LI,null,c.a.createElement(G.a,{name:"block-client",size:"small",variant:"inline",onClick:()=>a(e)},c.a.createElement(O.c,{id:"COMMON_ACTION_BLOCK"}))),e.canReconnect&&c.a.createElement(LI,null,c.a.createElement(G.a,{name:"reconnect-client",size:"small",variant:"inline",onClick:()=>l(e)},c.a.createElement(O.c,{id:"CLIENT_ACTIONS_RECONNECT"}))),e.canAuthorize&&c.a.createElement(LI,null,c.a.createElement(G.a,{name:"authorize-guest",size:"small",variant:"inline",onClick:()=>i(e)},c.a.createElement(O.c,{id:"CLIENT_ACTIONS_AUTHORIZE"}))),e.canUnauthorize&&c.a.createElement(LI,null,c.a.createElement(G.a,{name:"unauthorize-guest",size:"small",variant:"inline",onClick:()=>E(e)},c.a.createElement(O.c,{id:"CLIENT_ACTIONS_UNAUTHORIZE"})))))},VI=a(2053);const wI=Object(l.c)(re.g)`
  padding: 24px 32px 0;
`,FI=Object(l.c)("div")`
  margin-bottom: 16px;
`;var MI=({activeItem:e})=>c.a.createElement(wI,{flexDirection:"column"},c.a.createElement(FI,null,c.a.createElement(VI.a,{device:e,size:"caption"})));const UI=Object(l.c)(b.a)`
  height: 100%;
`,BI=Object(l.c)(b.a,{shouldForwardProp:e=>"isDefaultPanel"!==e})`
  ${({isDefaultPanel:e})=>!e&&"height: 100%;"}
  overflow-x: auto;
  overflow-y: scroll;
  overflow-y: overlay;
`,kI=Object(O.f)(e=>{const{match:{path:t,params:a},activeItem:{type:n,data:l},location:i,match:E,history:s}=e,m=Object(o.useSelector)(U.k),d=n===C.b.DEVICE&&!Object(v.isAdopted)(l),{id:_,site:u,panel:p,page:O,subPanel:b,subPage:I}=a,g=Object(B.a)(l,n),R=nI[g],T=p===(null==R?void 0:R.default);if(!R)return null;const h=d?[{id:R.default,label:c.a.createElement(TI,{title:R.panels[R.default].title,icon:R.panels[R.default].icon,active:!0})}]:Object.keys(R.panels).reduce((t,n)=>{const{disabled:r,title:l,icon:i}=R.panels[n],o=a.panel===R.panels[n].path.replace("/","");return r&&"function"==typeof r&&r({...e,isUdm:m})||t.push({id:n,label:c.a.createElement(TI,{title:l,icon:i,active:o})}),t},[]),D=Object(r.i)(t,{id:_,site:u,page:O,panel:R.default,subPage:I});return c.a.createElement(UI,{flexDirection:"column"},!R.singlePanel&&c.a.createElement(hI,{activeItem:l,tabs:h,history:s,match:E,location:i}),c.a.createElement(AI,{activeItem:l}),c.a.createElement(BI,{isDefaultPanel:T,flexDirection:"column"},(()=>{const n=R.panels[p];if(!n)return c.a.createElement(r.c,{to:D});const{component:i,disabled:o}=n;if(!0===o||"function"==typeof o&&o({...e,isUdm:m})||d&&p!==R.default)return c.a.createElement(r.c,{to:D});if(b&&n.subpanel){const{component:e}=n.subpanel;return c.a.createElement(e,{activeItem:l,params:a,path:t,history:s})}return c.a.createElement(i,{activeItem:l,params:a,path:t,history:s,key:`${p}${b&&n.subpanel?"-subpanel":""}`})})()),T&&"clients"===O&&c.a.createElement(xI,{activeItem:l}),T&&"devices"===O&&c.a.createElement(MI,{activeItem:l}))});var WI=c.a.memo(e=>e.match&&c.a.createElement(kI,Object.assign({},e)),(e,t)=>null===t.match);const HI=l.a`
  & > div {
    overflow: hidden;
  }
`;var GI=({location:e,history:t,panelType:a})=>{const l=Object(o.useSelector)(m.i),[u,p]=Object(n.useState)(!1),O=Object(o.useSelector)(d.a),b=Object(o.useSelector)(d.d),I=Object(o.useDispatch)(),{path:g}=Object(r.n)(),{site:R,id:C}=Object(r.m)(),T=Object(o.useSelector)(Object(d.b)(a,C)),h={type:b,data:O||u?T:{}},v=()=>{p(!0),t.push(e.pathname.split("/properties")[0])};Object(s.a)(()=>O&&v(),[O]),Object(n.useEffect)(()=>{O&&!e.pathname.includes("/properties")&&I(Object(_.f)())},[e]),Object(n.useEffect)(()=>{O&&!h.type&&v()},[O,h]);const D=Object(n.useCallback)(()=>{p(!1)},[]);return Object(n.useEffect)(()=>{var n,c;a&&(null===(n=null==e?void 0:e.pathname)||void 0===n?void 0:n.includes("properties/"))&&((null===(c=Object.keys(T||{}))||void 0===c?void 0:c.length)?I(Object(_.g)({type:a,mac:C,id:C})):t.push(Object(r.i)(g,{site:R})))},[]),c.a.createElement("div",null,h.type&&h.data&&c.a.createElement(i.a,{in:O,header:c.a.createElement(M,{activeItem:h}),onClose:v,onEntered:D,onExited:D,className:HI,style:{border:"none"}},(O||u)&&c.a.createElement(E.a,{path:l+"/:page/:subPage?/properties/:id/:panel?/:subPanel?/:subPanelId?"},e=>c.a.createElement(WI,Object.assign({activeItem:h},e)))))};t.a=c.a.memo(Object(r.o)(GI))},2096:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(271),l=a(49),i=a(40),o=a(24);const E=e=>{const{motif:t,filteredCount:a,...n}=e;return c.a.createElement(o.a,{justifyContent:"space-between",marginTop:16},c.a.createElement(r.a,Object.assign({},n,{key:n.id,motif:t})),c.a.createElement(l.a,{color:"secondary"},a))};t.a=({items:e})=>{const{motif:t}=Object(i.a)();return c.a.createElement(o.a,{flexDirection:"column",marginBottom:20},e.map(e=>c.a.createElement(E,Object.assign({key:e.id,motif:t},e))))}},2127:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));const n=({filterType:e,filter:t,filters:a,checked:n,onChangeFilter:c})=>{var r,l,i,o;const E={...a};n?e in E?(null===(r=E[e])||void 0===r?void 0:r.includes(t))||null===(l=E[e])||void 0===l||l.push(t):E[e]=[t]:(E[e]=null===(i=E[e])||void 0===i?void 0:i.filter(e=>e!==t),(null===(o=E[e])||void 0===o?void 0:o.length)||delete E[e]),c(E)},c=(e,t,a)=>{var n;return null===(n=e[t])||void 0===n?void 0:n.includes(a)}},2218:function(e,t,a){"use strict";var n=a(2049),c=a(2050),r=a(128);t.a=function(e,t){return e&&e.length?Object(n.a)(e,Object(r.a)(t,2),c.a):void 0}},2222:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(8),l=a(458),i=a(4),o=a(40),E=a(271),s=a(13),m=a(24);t.a=({columns:e,columnLabels:t,tableType:a})=>{var d;const _=Object(r.useDispatch)(),{motif:u}=Object(o.a)(),p=(null===(d=Object(r.useSelector)(Object(s.F)(a)))||void 0===d?void 0:d.initialColumns)||[],O=Object(n.useRef)(p);Object(n.useEffect)(()=>()=>{Object(l.a)(O.current,p)||_(Object(s.P)(a,{initialColumns:O.current}))},[]);const b=Object(n.useMemo)(()=>Object.values(e).map(e=>({key:e,id:e,checked:O.current.includes(e),children:(null==t?void 0:t[e])?c.a.createElement(i.c,{id:t[e]}):e,onChange:({target:{checked:t}})=>{O.current=t?[...O.current,e]:O.current.filter(t=>t!==e),_(Object(s.P)(a,{initialColumns:O.current},!0))}})),[O.current]);return c.a.createElement(m.a,{flexDirection:"column",marginBottom:20},b.map(e=>c.a.createElement(m.a,{key:e.id,justifyContent:"space-between",marginTop:16},c.a.createElement(E.a,Object.assign({key:e.id,motif:u},e)))))}},2884:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),l=a(39),i=a(4),o=a(809),E=a(145),s=a(293),m=a(189),d=a(97),_=a(42),u=a(232),p=a(387),O=a(2058),b=a(28),I=a(13),g=a(36),R=a(161),C=a(6),T=a(2),h=a(241),v=a(792),D=a(2087),f=a(23),P=a(458),S=a(669),A=a(337),j=a(1994),N=a(127),y=a(2040),L=a(547),x=a(541),V=a(1917),w=a(2096),F=a(2127),M=a(2222),U=a(639),B=a(125),k=a(1205);const W={[B.d.ELEMENTS]:{[B.b.GATEWAY]:e=>Object(C.isGateway)(e),[B.b.SWITCH]:e=>Object(C.isSwitch)(e)&&!Object(C.isSmartPower)(e),[B.b.ACCESS_POINT]:e=>Object(C.isAp)(e)&&!Object(C.isSmartPower)(e)&&!Object(C.isUlte)(e),[B.b.SMART_POWER]:e=>Object(C.isSmartPower)(e),[B.b.BUILDING_BRIDGE]:e=>Object(C.isUBB)(e),[B.b.ULTE]:e=>Object(C.isUlte)(e)},[B.d.CONNECTION_TYPE]:{[B.a.WIRED]:e=>!Object(C.isDeviceWireless)(e),[B.a.WIRELESS]:e=>Object(C.isDeviceWireless)(e)},[B.d.STATUS]:{[B.c.READY_TO_ADD]:e=>Object(C.getDeviceState)(e)===C.DeviceState.PENDING,[B.c.CONNECTED]:e=>{const t=Object(C.getDeviceState)(e);return[C.DeviceState.CONNECTED,C.DeviceState.ADOPTING,C.DeviceState.PROVISIONING,C.DeviceState.RFSCANNING,C.DeviceState.DELETING].some(e=>e===t)},[B.c.DISCONNECTED]:e=>{const t=Object(C.getDeviceState)(e);return t===C.DeviceState.DISCONNECTED||t===C.DeviceState.UNKNOWN},[B.c.MANAGED_BY_OTHER]:e=>Object(C.getDeviceState)(e)===C.DeviceState.MANAGED_BY_OTHER,[B.c.UPDATING]:e=>Object(C.getDeviceState)(e)===C.DeviceState.UPGRADING,[B.c.ISOALTED_OR_RESTARTING]:e=>{const t=Object(C.getDeviceState)(e);return[C.DeviceState.ISOLATED,C.DeviceState.RESTARTING].some(e=>e===t)},[B.c.ERROR_OR_WARNING]:e=>{const t=Object(C.getDeviceState)(e);return[C.DeviceState.INFORM_ERROR,C.DeviceState.ADOPTION_FAILED,C.DeviceState.HEARTBEAT_MISSED,C.DeviceState.ADOPTION_REQUIRED,C.DeviceState.FIRMWARE_MISMATCH].some(e=>e===t)}}},H=(e,t)=>{const a={};return Object.entries(e).forEach(([e,n])=>{a[e]=n.some(a=>{var n,c,r;return null!==(r=null===(c=(n=W[e])[a])||void 0===c?void 0:c.call(n,t))&&void 0!==r&&r})}),Object.values(a)};var G=c.a.memo(({onChangeDeviceFilter:e})=>{const t=Object(r.useSelector)(L.b),a=Object(r.useSelector)(C.memoSelectFilterDeviceData),l=Object(n.useCallback)((e,a)=>Object(F.b)(t,e,a),[t]),o=(e,t)=>{var n;return null===(n=(a||[]).map(a=>H({[e]:[t]},a)).filter(e=>e.every(Boolean)))||void 0===n?void 0:n.length};return c.a.createElement(V.a,{variant:"tertiary",multiOpen:!0,renderOnlyExpandedContent:!0,items:[{id:B.d.ELEMENTS,openByDefault:!!(null==t?void 0:t.elements),label:c.a.createElement(i.c,{id:"DEVICE_HEADER_ELEMENTS"}),renderContent:()=>c.a.createElement(w.a,{items:Object.values(B.b).map(a=>({key:a,id:a,checked:l(B.d.ELEMENTS,a),children:c.a.createElement(i.c,{id:"DEVICE_FILTER_ELEMENT_"+a.toUpperCase()}),onChange:({target:{checked:n}})=>Object(F.a)({filterType:B.d.ELEMENTS,filter:a,filters:t,checked:n,onChangeFilter:e}),filteredCount:o(B.d.ELEMENTS,a)}))})},{id:B.d.CONNECTION_TYPE,openByDefault:!!(null==t?void 0:t.connection_type),label:c.a.createElement(i.c,{id:"DEVICE_HEADER_CONNECTION_TYPE"}),renderContent:()=>c.a.createElement(w.a,{items:Object.values(B.a).map(a=>({key:a,id:a,checked:l(B.d.CONNECTION_TYPE,a),children:c.a.createElement(i.c,{id:"DEVICE_FILTER_CONNECTION_"+a.toUpperCase()}),onChange:({target:{checked:n}})=>Object(F.a)({filterType:B.d.CONNECTION_TYPE,filter:a,filters:t,checked:n,onChangeFilter:e}),filteredCount:o(B.d.CONNECTION_TYPE,a)}))})},{id:B.d.STATUS,openByDefault:!!(null==t?void 0:t.status),label:c.a.createElement(i.c,{id:"DEVICE_HEADER_STATUS"}),renderContent:()=>c.a.createElement(w.a,{items:Object.values(B.c).map(a=>({key:a,id:a,checked:l(B.d.STATUS,a),children:c.a.createElement(i.c,{id:"DEVICE_FILTER_STATUS_"+a.toUpperCase()}),onChange:({target:{checked:n}})=>Object(F.a)({filterType:B.d.STATUS,filter:a,filters:t,checked:n,onChangeFilter:e}),filteredCount:o(B.d.STATUS,a)}))})},{id:A.a.DEVICE,openByDefault:!!(null==t?void 0:t.device),label:c.a.createElement(i.c,{id:"COMMON_COLUMN_VISIBILITY"}),renderContent:()=>c.a.createElement(M.a,{columns:Object.values(U.b),columnLabels:U.c,tableType:A.a.DEVICE})}]})});var Y=c.a.memo(({devicesTableDataLength:e})=>{const t=Object(r.useSelector)(C.selectDevicesDataLength),a=Object(r.useSelector)(L.b),l=Object(r.useSelector)(L.c),[i,o]=Object(n.useState)(l),E=Object(r.useDispatch)(),s=Object(n.useMemo)(()=>{var e,t;return null===(t=null===(e=Object.values(a))||void 0===e?void 0:e.flat())||void 0===t?void 0:t.length},[a]),m=Object(n.useMemo)(()=>!Object(P.a)(a,L.a),[a]),d=Object(n.useCallback)(e=>{E(Object(x.a)(e)),E(Object(I.P)(A.a.DEVICE,{filters:e}))},[E]),_=Object(n.useCallback)(()=>{d(Object(S.a)(L.a))},[d]);return c.a.createElement(j.c,{filterCount:s,isLoading:!1,title:"DEVICE_HEADER_DEVICES",renderFilterDrawerContent:e=>e&&c.a.createElement(G,{onChangeDeviceFilter:d}),filterFooter:c.a.createElement(y.a,{countLabel:"DEVICE_FILTER_NUMBER_OF_ELEMENTS",numVisible:e,numTotal:t,numFilters:s,onClear:_,showResetButton:m,withReset:!0})},c.a.createElement(c.a.Fragment,null,c.a.createElement(j.f,{value:i,onChange:({target:{value:e}})=>{o(e),E(Object(x.b)(e))},onClear:()=>{o(""),E(Object(x.b)(""))},onSubmit:(e,t)=>{E(Object(x.b)(t))}}),c.a.createElement(j.b,{onClick:()=>E(Object(x.c)(N.b.LIST))},c.a.createElement(f.ib,null)),c.a.createElement(j.b,{onClick:()=>E(Object(x.c)(N.b.GRID))},c.a.createElement(f.gb,null))))}),$=a(16),z=a(3),K=a(76),X=a(818);const q=e=>e["bytes-r"],Z=Object(z.a)((e,{intl:t})=>t,d.k,p.d,C.selectDevicesData,e=>e,g.selectWifiNetworksData,s.selectAPGroupsData,L.b,L.c,(e,t,a,n,c,r,l,i,o)=>n.reduce((E,m)=>{if(Object(C.isUlte)(m)&&!m.lte_imei)return E;if(void 0!==o&&""!==o){const e=o.toLowerCase().trim();if(!["name","mac","ip","model","type"].some(t=>{var a;return(null!==(a=null==m?void 0:m[t])&&void 0!==a?a:"").toLowerCase().includes(e)})){if(!Object(K.a)(m).toLowerCase().includes(e))return E}}if(((e,t)=>Object(k.a)(e)||!H(e,t).every(Boolean))(i,m))return E;const d=Object(C.getWarningsCount)(t,a,m),_=Object(C.getUplink)(n,m),u=Object(C.getDeviceSpecs)(m),p=m.uplink_table&&m.uplink_table.map(e=>{const{mac:t}=e,a=n.find(e=>e.mac===t);return{...e,model:Object($.a)(a,"model","")}}),O=Object(s.getDeviceWlanStats)(m,r,l),b=Object(C.getDeviceStatus)(m),I=Object(C.getDeviceState)(m)===C.DeviceState.PENDING||"success"===b;return E.push({...m,id:m._id||m.mac,name:Object(K.b)(m),originalName:m.name,modelName:Object(K.a)(m),activity:q(m),status:b,statusString:Object(C.getDeviceStateString)(t,m,e),statusPulse:Object(C.getDeviceStatusPulse)(m),warningCount:d,hasWarning:d>0,specs:u,loadAvg:Object(C.getDeviceLoadAverage)(m),uplinkName:Object(C.getUplinkDisplayName)(m,_),uplinkDevice:_,uplinkId:_&&_.device_id,wlan2g:m.adopted?O.wlanNames[g.WlanBand.NG].join("\n"):"",wlan5g:m.adopted?O.wlanNames[g.WlanBand.NA].join("\n"):"",satisfactionByRadio:Object(C.getSatisfactionByRadio)(m),problemPorts:Object(C.getProblemPorts)(m),portsUtilization:Object(C.getPortsUtilization)(m),pendingAdoption:Object(C.getPendingAdoption)(m),uplinkTable:p,bssid:Object($.a)(m,"vap_table[0].bssid",""),deviceUsageReport:Object(X.b)(m.mac,c),showRowPopover:I}),E},[])),J=Object(z.a)(C.selectDevicesData,e=>e.map(({mac:e})=>e));var Q=a(31),ee=a(5),te=a(1200),ae=a(1972),ne=a(1918),ce=a(24),re=a(1858),le=a(49),ie=a(1197),oe=a(133),Ee=a(1971),se=a(810),me=a(113),de=a(103),_e=a.n(de),ue=a(9),pe=function(e){return c.a.createElement(ue.a,e,c.a.createElement("svg",_e()({viewBox:"0 0 6 11"},e),c.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:1},c.a.createElement("path",{fill:"none",d:"M-1053-205H313v768h-1366z"}),c.a.createElement("path",{fill:"#A4A7B5",d:"M3.544 8.557l1.593-1.593.707.708-2.121 2.12-.707.708L.187 7.672l.708-.708 1.65 1.65V.5h1v8.057z"}))))},Oe=function(e){return c.a.createElement(ue.a,e,c.a.createElement("svg",{viewBox:"0 0 7 11"},c.a.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:1},c.a.createElement("path",{fill:"none",d:"M-941-172H425v768H-941z"}),c.a.createElement("path",{fill:"#A4A7B5",d:"M3.175 2.443L1.582 4.036l-.707-.708 2.121-2.12L3.703.5l2.829 2.828-.707.708-1.65-1.65V10.5h-1V2.443z"}))))},be=a(2010),Ie=a(1946),ge=a(12),Re=a(95),Ce=a(78),Te=a(146),he=a(1929);const ve=Object(ee.c)(ce.a)`
  white-space: nowrap;
`,De=Object(ee.c)(f.M,{shouldForwardProp:e=>"connected"!==e})`
  margin-right: 7px;
  color: ${({connected:e,theme:t})=>e?t.motifPalette.success:t.motifPalette.icon02};
`,fe=Object(ee.c)(f.xc,{shouldForwardProp:e=>"color"!==e})`
  margin-right: 7px;
  color: ${({color:e,theme:t})=>t.motifPalette[e]};
`;var Pe=({device:e})=>{const{satisfactionByRadio:t}=e;if(!Te.deviceModels[e.model])return null;const{deviceCapabilities:a}=Te.deviceModels[e.model];switch(!0){case a.includes(Te.DeviceCapability.ACCESS_POINT):case a.includes(Te.DeviceCapability.BUILDING_BRIDGE):{const{averageSatisfaction:e,naNumSta:a,ngNumSta:n}=t,r=a+n,l=Object(C.getWifiExperienceStatusColor)(e,r);return c.a.createElement(ve,{alignItems:"center"},c.a.createElement(fe,{height:15,width:15,color:l}),0!==r&&e?c.a.createElement(le.a,{size:"body"},e+"%"):c.a.createElement(le.a,{size:"body",color:"disabled"},c.a.createElement(i.c,{id:"COMMON_NO_CLIENTS"})))}case a.includes(Te.DeviceCapability.GATEWAY):case a.includes(Te.DeviceCapability.SWITCH):{const{speed:t=0}=Object(C.getUplinkAttrs)(e)||{},{value:a,unit:n}=Object(Ce.d)(1e6*t/8,"frames");return c.a.createElement(ve,{alignItems:"center"},c.a.createElement(De,{height:14,width:14,connected:!!t}),a>0?c.a.createElement(le.a,{size:"body"},Object(he.a)(a,1)," ",n):c.a.createElement(le.a,{size:"body",color:"disabled"},c.a.createElement(i.c,{id:"COMMON_HYPHEN"})))}default:return c.a.createElement(le.a,{size:"body",color:"disabled"},c.a.createElement(i.c,{id:"COMMON_HYPHEN"}))}},Se=a(2830),Ae=a(82);const je=Object(ee.c)("div")`
  white-space: nowrap;
`,Ne=Object(ee.c)(ce.a)`
  white-space: nowrap;
`,ye=Object(ee.c)("div")`
  flex: 1 0 auto;
  margin-right: 10px;
  font-size: ${({theme:e})=>e.fontSizes[0]}px;

  > span {
    line-height: 19px;
  }
`,Le=Object(ee.c)(ie.a)`
  width: 100%;
`;var xe=({device:e,radioType:t=null})=>{const a=Object(C.getRadioStats)(e).sort(C.sortRadios).reverse();if(!a||!a.length)return c.a.createElement(i.c,{id:"COMMON_HYPHEN"});const n=[c.a.createElement(je,{key:"title"},c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:"DEVICE_CHANNEL_UTILIZATION"})))],r=a.reduce((a,r)=>{if(!t||r.radio===t){const t=Object(C.getRadioChannelUtilization)(e,r);if(t){const l=Object(C.getUtilizationLevel)(ge.DeviceType.AP,"channel",t.total),{radio:o}=r;let E=o===oe.b.NG?"DEVICE_RADIO_PROTOCOL_NG":"";o===oe.b.NA&&(E=Object(C.isAxRadio)(e,r.name)?"DEVICE_RADIO_PROTOCOL_NA_AX":Object(C.isAcRadio)(e,r.name)?"DEVICE_RADIO_PROTOCOL_NA_AC":"DEVICE_RADIO_PROTOCOL_NA"),n.push(c.a.createElement(Ne,{key:r.name},c.a.createElement(ye,null,c.a.createElement(be.a,{device:e,radio:r,hideAutoInfo:!0,hideDfsInfo:!0,hideHtInfo:!0,hidePowerInfo:!0}),!!E&&c.a.createElement(i.c,{id:E})),c.a.createElement("div",null,c.a.createElement(le.a,{color:l},t.total,"%"))));const{selfRx:s,selfTx:m,interference:d}=t;a.push(c.a.createElement(Se.a,{items:[{variant:"success",value:s},{color:Ae.l,value:m},{variant:"warning",value:d}],height:2,key:r.name}))}}return a},[]);return c.a.createElement(Le,{portal:!0,position:"bottom",message:n},r)},Ve=a(824),we=a(1199),Fe=a(40),Me=a(41);const Ue=Object(ee.c)("div")`
  white-space: nowrap;
`,Be=Object(ee.c)("div")`
  white-space: nowrap;
  display: flex;
`,ke=Object(ee.c)(we.a,{shouldForwardProp:e=>"color"!==e})`
  background-color: ${({color:e,theme:t})=>"empty"===e?t.motifPalette.neutral10:t.motifPalette[e]};
`;var We=({portsUtilization:e,hideBar:t,barOnly:a})=>{const{motif:r}=Object(Fe.a)();return Object(n.useMemo)(()=>{const n=[],l=Object.entries(e.colors).reduce((t,[a,l])=>{if(l){const o={value:l/e.total*100,color:"empty"===a?Me.a.motifs[r].neutral10:Me.a.motifs[r][a]};t.push(o),n.push(c.a.createElement(Be,{key:a},c.a.createElement("div",{style:{marginRight:"6px"}},c.a.createElement(ke,{color:a})),c.a.createElement("div",{style:{flexGrow:1}},c.a.createElement(i.c,{id:e.labels[a].key,values:e.labels[a].values||{}})),c.a.createElement("div",null,l)))}return t},[]);return c.a.createElement(c.a.Fragment,null,!a&&c.a.createElement(Ue,null,c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:"DEVICE_SWITCH_PORT_UTILIZATION"}))),c.a.createElement(Ue,null,(a||!t)&&c.a.createElement(Se.a,{items:l,height:2}),!a&&n))},[e,t])};const He=Object(ee.c)("div")`
  white-space: nowrap;
  display: flex;
`,Ge=Object(ee.c)(ie.a)`
  width: 100%;
`;var Ye=({device:e})=>{const{satisfaction:t,problemPorts:a}=e;if(!t)return c.a.createElement(i.c,{id:"COMMON_HYPHEN"});const n=c.a.createElement("span",{style:{color:Ve.a.getGradientColor(t/100)}},t,"%"),r=c.a.createElement(c.a.Fragment,null,a&&!!a.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:a.length>1?"DEVICE_SWITCH_PORT_PROBLEM_PORTS":"DEVICE_SWITCH_PORT_PROBLEM_PORT"})),a.map(e=>c.a.createElement(He,{key:e.name},c.a.createElement("div",{style:{flexGrow:1}},e.name),c.a.createElement("div",null,c.a.createElement("span",{style:{color:Ve.a.getGradientColor(e.satisfaction/100)}},e.satisfaction,"%"))))),c.a.createElement(We,Object.assign({},e,{hideBar:!0})),c.a.createElement(He,null,c.a.createElement("div",{style:{flexGrow:1,marginRight:"10px"}},c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:"DEVICE_SWITCH_EXPERIENCE"}))),c.a.createElement("div",null,c.a.createElement(le.a,{heading:"primary"},n))));return c.a.createElement(Ge,{portal:!0,position:"bottom",message:r},c.a.createElement(We,Object.assign({},e,{barOnly:!0})))};const $e=e=>{const{type:t}=e;switch(t){case ge.DeviceType.GATEWAY:return"";case ge.DeviceType.SWITCH:return c.a.createElement(Ye,{device:e});case ge.DeviceType.AP:return c.a.createElement(xe,{device:e});default:return c.a.createElement(le.a,{size:"body"},c.a.createElement(i.c,{id:"COMMON_HYPHEN"}))}},ze=Object(ee.c)("div")`
  display: inline-block;
  margin-left: 8px;
`,Ke=({device:e})=>{const{model_in_eol:t}=e;return t?c.a.createElement(ze,null,c.a.createElement(f.Xb,null)):null},Xe=Object(ee.c)("div")`
  white-space: nowrap;
  display: flex;
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
`,qe=Object(ee.c)(ie.a)`
  width: 100%;
`;var Ze=c.a.memo(({device:e,radioType:t=null})=>{const a=Object(C.getRadioTable)(e,t),n=[],r=a.map(a=>{const r=Object(C.getRadioTxStatus)(e,a);return r.length?(r.forEach(e=>{n.push(c.a.createElement(Xe,{key:`${t}-${a.name}-${e.variant}`},c.a.createElement("div",{style:{flexGrow:1,marginRight:"10px"}},c.a.createElement(i.c,{id:e.label})),c.a.createElement("div",null,e.originalValue)))}),c.a.createElement(Se.a,{items:r,height:2,key:a.name})):null});return c.a.createElement(qe,{portal:!0,message:n},r)}),Je=a(2053),Qe=a(2068);const et=Object(ee.c)(re.a)`
  color: ${({theme:e})=>e.colors.primary};
`,tt=Object(ee.c)(le.a)`
  max-width: 90%;
`,at=Object(ee.c)("div")`
  white-space: nowrap;
`,nt=Object(ee.c)("div")`
  font-size: ${({theme:e})=>e.fontSizes[2]}px;
  font-weight: ${({theme:e})=>e.fontWeights.normal};
  text-transform: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  padding: 0 0 ${({theme:e})=>e.space[4]}px;
`,ct=Object(ee.c)(Re.g)`
  color: ${({theme:e})=>e.colors.subtleText};
  align-items: center;
  margin-top: ${({theme:e})=>e.space[4]}px;
`,rt=Object(ee.c)("div")`
  margin-left: ${({theme:e})=>e.space[3]}px;
`,lt=Object(ee.c)("div")`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: none;
  font-weight: ${({theme:e})=>e.fontWeights.normal};
  font-size: 11px;
`,it=Object(ee.c)(f.vc)`
  margin-left: 8px;
`,ot=Object(ee.c)("div")`
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
  opacity: ${({isHidden:e})=>e?"0":"1"};
  ${({isAbsolute:e})=>e?"position: absolute;":""}
  ${({isItalic:e})=>e?"font-style: italic;":""}
`,Et=Object(ee.c)("span")`
  margin-left: ${({marginLeft:e=0})=>e}px;
  font-style: italic;
  font-size: ${({theme:e})=>e.fontSize["font-size-body"]};
`,st=Object(ee.c)(Re.g)`
  margin-left: ${({theme:e})=>e.space[2]}px;
`,mt=Object(ee.c)(se.a)`
  margin-right: ${({theme:e})=>e.space[2]}px;
`,dt=Object(ee.c)("div")`
  margin-right: ${({theme:e})=>e.space[2]}px;
  width: 14px;
`,_t=ee.a`
  padding: 24px;
  margin-left: -18px;
`,ut=[{status:"info",text:[ge.DeviceState.PENDING]},{status:"success",text:[ge.DeviceState.CONNECTED]},{status:"neutral",text:[ge.DeviceState.MANAGED_BY_OTHER]},{status:"danger",text:[ge.DeviceState.DISCONNECTED,"COMMON_DEVICE_STATE_ERROR"]},{status:"info",pulse:!0,text:[ge.DeviceState.UPGRADING,ge.DeviceState.ADOPTING]},{status:"success",pulse:!0,text:[ge.DeviceState.PROVISIONING]},{status:"warning",pulse:!0,text:[ge.DeviceState.ISOLATED,ge.DeviceState.RESTARTING,ge.DeviceState.RFSCANNING]},{status:"danger",pulse:!0,text:[ge.DeviceState.DELETING]}],pt=c.a.memo(()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(nt,null,c.a.createElement(i.c,{id:"DEVICE_PROPERTIES_LABEL_STATUS_INDICATORS"})),ut.map(({status:e,pulse:t,text:a})=>c.a.createElement(ct,{key:`${e}-${t?"pulse":""}`},c.a.createElement(Qe.a,{status:e,statusPulse:t,marginLeft:5,marginRight:12}),c.a.createElement(lt,null,a.map((n,r)=>c.a.createElement("span",{key:`${e}-${t?"pulse":""}-translation-${r.toString()}`},c.a.createElement(i.c,{id:n}),r+1!==a.length&&" / "))))))),Ot=({showUnifiCareBadge:e})=>[{id:U.b.STATUS,sortable:!0,minWidth:80,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:"DEVICE_HEADER_STATUS"})),renderLabel:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(ie.a,{message:c.a.createElement(pt,null),position:"bottomLeft",tooltipClassName:_t},c.a.createElement(f.cb,{isActive:!0})),c.a.createElement(rt,null,c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:"DEVICE_HEADER_TYPE"})))),renderCell:t=>{const{status:a,statusPulse:n,...r}=t,l=Object(C.hasActiveUnifiCare)(r);return c.a.createElement(Re.g,{alignItems:"center"},c.a.createElement(Qe.a,{status:a,statusPulse:n,marginLeft:5,marginRight:12}),c.a.createElement(st,{alignItems:"center"},e&&(l?c.a.createElement(mt,{width:14,height:14}):c.a.createElement(dt,null)),c.a.createElement(me.c,{device:t})))},compare:Ie.m},{id:U.b.DEVICE_NAME,sortable:!0,minWidth:180,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.DEVICE_NAME]})),renderCell:(e,t,a,{rowHovered:n})=>{const{statusString:r}=e,l=c.a.createElement(tt,{size:"body",truncate:!0},Object(K.c)(e));switch(Object(C.getDeviceState)(e)){case ge.DeviceState.PROVISIONING:case ge.DeviceState.UPGRADING:case ge.DeviceState.RESTARTING:case ge.DeviceState.RFSCANNING:case ge.DeviceState.ISOLATED:case ge.DeviceState.DELETING:return c.a.createElement(ot,null,l," - ",c.a.createElement(Et,{marginLeft:4},r,"..."),c.a.createElement(Ke,{device:e}));case ge.DeviceState.UNKNOWN:case ge.DeviceState.FIRMWARE_MISMATCH:return c.a.createElement(ot,null,l," - ",c.a.createElement(Et,{marginLeft:4},r),c.a.createElement(Ke,{device:e}));case ge.DeviceState.PENDING:case ge.DeviceState.ADOPTING:case ge.DeviceState.ADOPTION_FAILED:case ge.DeviceState.MANAGED_BY_OTHER:case ge.DeviceState.HEARTBEAT_MISSED:case ge.DeviceState.DISCONNECTED:return c.a.createElement(c.a.Fragment,null,c.a.createElement(ot,{isHidden:n},l),c.a.createElement(ot,{isHidden:!n,isAbsolute:!0,isItalic:!0},r),c.a.createElement(Ke,{device:e}))}return c.a.createElement(ot,null,l,c.a.createElement(Ke,{device:e}))},compare:Object(Ie.a)(({name:e})=>e)},{id:U.b.MAC_ADDRESS,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.MAC_ADDRESS]})),renderCell:({mac:e})=>c.a.createElement(le.a,{size:"body"},e)},{id:U.b.MODEL,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.MODEL]})),renderCell:e=>c.a.createElement(le.a,{size:"body"},null==e?void 0:e.modelName,Object(C.isU6)(e)&&c.a.createElement(it,{size:"small",isActive:!0})),compare:Ie.k},{id:U.b.IP_ADDRESS,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.IP_ADDRESS]})),renderCell:e=>c.a.createElement(le.a,{size:"body"},Object(C.getDeviceIp)(e)),compare:Ie.h},{id:U.b.EXPERIENCE,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.EXPERIENCE]})),renderCell:e=>c.a.createElement(Pe,{device:e}),compare:Ie.g},{id:U.b.FIRMWARE_STATUS,sortable:!0,minWidth:160,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.FIRMWARE_STATUS]})),renderCell:e=>e.upgradable?c.a.createElement(Je.a,{device:e,icon:!0,label:"COMMON_UPDATE_AVAILABLE"}):c.a.createElement(le.a,{size:"body"},c.a.createElement(i.c,{id:"COMMON_UP_TO_DATE"})),compare:Object(Ie.a)(({upgradable:e})=>e)},{id:U.b.FIRMWARE_VERSION,sortable:!0,minWidth:170,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.FIRMWARE_VERSION]})),renderCell:({displayable_version:e})=>c.a.createElement(le.a,{size:"body"},e),compare:Object(Ie.a)(({upgradable:e})=>e)},{id:U.b.MEMORY_USAGE,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.MEMORY_USAGE]})),renderCell:e=>{const t=Object($.a)(e,"system-stats.mem");return c.a.createElement(le.a,{size:"body"},t?t+"%":c.a.createElement(i.c,{id:"COMMON_HYPHEN"}))},compare:Ie.j},{id:U.b.CPU_USAGE,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CPU_USAGE]})),renderCell:e=>{const t=Object($.a)(e,"system-stats.cpu");return c.a.createElement(le.a,{size:"body"},t?t+"%":c.a.createElement(i.c,{id:"COMMON_HYPHEN"}))},compare:Ie.f},{id:U.b.LOAD_AVERAGE,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.LOAD_AVERAGE]})),renderCell:({loadAvg:e})=>c.a.createElement(at,null,c.a.createElement(le.a,{size:"body"},e||c.a.createElement(i.c,{id:"COMMON_HYPHEN"}))),compare:Ie.i},{id:U.b.UTILIZATION,minWidth:180,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.UTILIZATION]})),renderCell:$e},{id:U.b.CLIENTS,sortable:!0,minWidth:100,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CLIENTS]})),renderCell:({num_sta:e})=>c.a.createElement(le.a,{size:"body",color:"secondary"},e)},{id:U.b.DAILY_USAGE,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.DAILY_USAGE]})),renderCell:({deviceUsageReport:e})=>c.a.createElement(re.a,{size:"body",type:"bytes",input:((null==e?void 0:e.tx_bytes)||0)+(null==e?void 0:e.rx_bytes)||0})},{id:U.b.DOWNLINK,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.DOWNLINK]})),renderCell:({uplink:e})=>c.a.createElement(at,null,c.a.createElement(Re.r,{bytes:null==e?void 0:e["rx_bytes-r"],direction:"down",size:"body",iconStyle:{width:"10px",height:"16px",margin:"0 16px 2px 0"}})),compare:Object(Ie.a)(({uplink:e})=>(null==e?void 0:e["rx_bytes-r"])||0)},{id:U.b.UPLINK,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.UPLINK]})),renderCell:({uplink:e})=>c.a.createElement(at,null,c.a.createElement(Re.r,{bytes:null==e?void 0:e["tx_bytes-r"],direction:"up",size:"body",iconStyle:{width:"10px",height:"16px",margin:"0 16px 2px 0"}})),compare:Object(Ie.a)(({uplink:e})=>(null==e?void 0:e["tx_bytes-r"])||0)},{id:U.b.UPTIME,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.UPTIME]})),renderCell:({uptime:e})=>c.a.createElement(at,null,c.a.createElement(le.a,{size:"body"},Object(Ee.a)(e))),compare:Object(Ie.a)(({uptime:e})=>e||0)},{id:U.b.WLAN2G,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.WLAN2G]})),renderCell:({wlan2g:e})=>c.a.createElement(le.a,{size:"body"},e)},{id:U.b.WLAN5G,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.WLAN5G]})),renderCell:({wlan5g:e})=>c.a.createElement(le.a,{size:"body"},e)},{id:U.b.RADIO2G,sortable:!0,minWidth:180,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.RADIO2G]})),renderCell:e=>{const{radio_table:t=[]}=e;return t.reduce((t,a)=>("ng"===a.radio&&t.push(c.a.createElement(at,{key:a.name},c.a.createElement(be.a,{device:e,radio:a,hideHtInfo:!0,key:a.name}))),t),[])},compare:(e,t,a,n)=>Object(Ie.l)(a,n,oe.b.NG)},{id:U.b.RADIO5G,sortable:!0,minWidth:180,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.RADIO5G]})),renderCell:e=>{const{radio_table:t=[]}=e;return t.reduce((t,a)=>("na"===a.radio&&t.push(c.a.createElement(at,{key:a.name},c.a.createElement(be.a,{device:e,radio:a,hideHtInfo:!0,key:a.name}))),t),[])},compare:(e,t,a,n)=>Object(Ie.l)(a,n,oe.b.NA)},{id:U.b.CLIENTS2G,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CLIENTS2G]})),renderCell:({radio_table_stats:e})=>c.a.createElement(le.a,{size:"body"},e?e.reduce((e,t)=>"ng"===t.radio?e+(t.num_sta||0):e,0):""),compare:Ie.d},{id:U.b.CLIENTS5G,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CLIENTS5G]})),renderCell:({radio_table_stats:e})=>c.a.createElement(le.a,{size:"body"},e?e.reduce((e,t)=>"na"===t.radio?e+(t.num_sta||0):e,0):""),compare:Ie.e},{id:U.b.BSSID,sortable:!0,minWidth:180,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.BSSID]})),renderCell:({vap_table:e,bssid:t})=>{if(t){const a=c.a.createElement(c.a.Fragment,null,e.slice(0,16).map(e=>c.a.createElement("div",{key:e.bssid},e.bssid)),e.length>16&&c.a.createElement("div",null,"..."));return c.a.createElement(ie.a,{message:a},c.a.createElement(le.a,{size:"body"},t+"..."||""))}return""}},{id:U.b.TX,sortable:!0,minWidth:100,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.TX]})),renderCell:e=>e["tx_bytes-d"]?c.a.createElement(at,null,c.a.createElement(pe,null),c.a.createElement(re.a,{size:"body",type:"bytes",input:e["tx_bytes-d"],color:"success"})):"",compare:Object(Ie.a)(({"tx_bytes-d":e})=>e||0)},{id:U.b.RX,sortable:!0,minWidth:100,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.RX]})),renderCell:e=>e["rx_bytes-d"]?c.a.createElement(at,null,c.a.createElement(Oe,null),c.a.createElement(et,{size:"body",type:"bytes",input:e["rx_bytes-d"]})):"",compare:Object(Ie.a)(({"rx_bytes-d":e})=>e||0)},{id:U.b.TX2G,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.TX2G]})),renderCell:e=>c.a.createElement(Ze,{device:e,radioType:oe.b.NG}),compare:Ie.n},{id:U.b.TX5G,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.TX5G]})),renderCell:e=>c.a.createElement(Ze,{device:e,radioType:oe.b.NA}),compare:Ie.o},{id:U.b.CHANNEL,sortable:!0,minWidth:120,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CHANNEL]})),renderCell:e=>c.a.createElement(le.a,{size:"body"},Object(C.getDeviceRadioChannels)(e)||""),compare:Ie.c},{id:U.b.CHANNEL2G,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CHANNEL2G]})),renderCell:e=>c.a.createElement(xe,{device:e,radioType:oe.b.NG}),compare:Ie.p},{id:U.b.CHANNEL5G,sortable:!0,minWidth:150,label:c.a.createElement(le.a,{size:"body",weight:"bold"},c.a.createElement(i.c,{id:U.c[U.b.CHANNEL5G]})),renderCell:e=>c.a.createElement(xe,{device:e,radioType:oe.b.NA}),compare:Ie.q}];var bt=a(805),It=a(386),gt=a(64),Rt=a(261),Ct=a(672),Tt=a(1834);const ht=Object(ee.c)("div")`
  white-space: nowrap;
`,vt=Object(ee.c)("div")`
  white-space: nowrap;
  display: flex;
  align-items: center;
`,Dt=Object(ee.c)("div")`
  min-width: 35px;
  margin-left: ${({theme:e})=>e.space[3]}px;
`,ft=Object(ee.c)(ie.a)`
  width: 100%;
  min-width: 110px;
`,Pt=Object(ee.c)("div")`
  width: 100%;
`,St=Object(ee.c)(Re.g)`
  height: 120px;
  background: ${({theme:e})=>e.motifPalette.disabled01};

  > picture {
    width: calc(100% - 10px) !important;
    height: 110px;
    text-align: center;
  }
`,At=Object(ee.c)(me.c)`
  max-width: 100%;
  max-height: 100%;
`,jt=Object(ee.c)(Re.g)`
  width: 100%;
  height: 100%;
  ${({theme:{spacing:e}})=>`padding: ${e["spacing-l"]} 0 ${e["spacing-s"]}`};
`,Nt=Object(ee.c)(Re.g)`
  > div:nth-child(2) {
    max-width: 90%;

    > span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,yt=Object(ee.c)(le.a)`
  height: 18px;
`,Lt=Object(ee.c)(Ct.a)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xs"]};
`,xt=Object(ee.c)(le.a)`
  flex: 1;
`,Vt=Object(ee.c)("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    color: ${({theme:e})=>e.motifPalette.icon02};
  }
`,wt=Object(ee.c)(({device:e,noPercentage:t,className:a,alwaysShowStatusBar:r})=>{const{satisfaction:l,type:o,satisfactionByRadio:E,problemPorts:s}=e;return Object(n.useMemo)(()=>{switch(o){case ge.DeviceType.GATEWAY:case ge.DeviceType.UXG:{const n=100-+(e["system-stats"]&&e["system-stats"].cpu||0);return c.a.createElement(ft,{position:"bottom",portal:!0,className:a,message:c.a.createElement(ht,null,c.a.createElement(i.c,{id:"DEVICE_UTILIZATION_INVERTED"}))},c.a.createElement(vt,null,c.a.createElement(Tt.a,{variant:"gradient",value:n}),!t&&c.a.createElement(Dt,null,c.a.createElement(re.a,{type:"percent",input:n/100,style:{color:Ve.a.getGradientColor(n/100)}}))))}case ge.DeviceType.SWITCH:{if(!l||l<0)return r?c.a.createElement(Pt,{className:a},c.a.createElement(Tt.a,{value:0})):c.a.createElement(i.c,{id:"COMMON_NA"});const n=c.a.createElement(re.a,{type:"percent",input:l/100,style:{color:Ve.a.getGradientColor(l/100)}}),o=c.a.createElement(c.a.Fragment,null,c.a.createElement(vt,null,c.a.createElement("div",{style:{flexGrow:1,marginRight:"10px"}},c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:"DEVICE_SWITCH_EXPERIENCE"}))),c.a.createElement("div",null,c.a.createElement(le.a,{heading:"primary"},n))),s&&s.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:s.length>1?"DEVICE_SWITCH_PORT_PROBLEM_PORTS":"DEVICE_SWITCH_PORT_PROBLEM_PORT"})),s.map(e=>c.a.createElement(vt,{key:e.name},c.a.createElement("div",{style:{flexGrow:1}},e.name),c.a.createElement("div",null,c.a.createElement("span",{style:{color:Ve.a.getGradientColor(e.satisfaction/100)}},e.satisfaction,"%"))))):null,c.a.createElement(We,Object.assign({},e)));return c.a.createElement(ft,{position:"bottom",message:o,portal:!0,className:a},c.a.createElement(vt,null,c.a.createElement(Tt.a,{variant:"gradient",value:l}),!t&&c.a.createElement(Dt,null,n)))}case ge.DeviceType.AP:{const{averageSatisfaction:e,byRadio:n}=E;if(!e)return r?c.a.createElement(Pt,{className:a},c.a.createElement(Tt.a,{value:0})):c.a.createElement(i.c,{id:"COMMON_NA"});if(e<0)return r?c.a.createElement(Pt,{className:a},c.a.createElement(Tt.a,{value:0})):c.a.createElement(i.c,{id:"COMMON_NO_CLIENT"});const l=Object.entries(n).reduce((e,[t,a])=>(e.push(c.a.createElement(ht,null,c.a.createElement(le.a,{heading:"primary"},c.a.createElement(i.c,{id:"na"===t?"DEVICE_WIFI_EXPERIENCE_5G":"DEVICE_WIFI_EXPERIENCE_2G"})))),Object.values(a).forEach(t=>{t.forEach(({essid:t,satisfaction:a})=>{e.push(c.a.createElement(vt,null,c.a.createElement("div",{style:{flexGrow:1}},t),c.a.createElement("div",null,c.a.createElement("span",{style:a>=0?{color:Ve.a.getGradientColor(a/100)}:{}},a>=0?a+"%":"-"))))})}),e),[]);return c.a.createElement(ft,{position:"bottom",message:c.a.createElement(c.a.Fragment,null,l),portal:!0,className:a},c.a.createElement(vt,null,c.a.createElement(Tt.a,{variant:"gradient",value:e}),!t&&c.a.createElement(Dt,null,c.a.createElement(re.a,{type:"percent",input:e/100,style:{color:Ve.a.getGradientColor(e/100)}}))))}default:return r?c.a.createElement(Pt,{className:a},c.a.createElement(Tt.a,{value:0})):c.a.createElement(i.c,{id:"COMMON_NA"})}},[o,e,a,t,l,s,r,E])})`
  height: 10px;
  ${({theme:e})=>`margin: ${e.spacing["spacing-s"]} 0 6px`};
`,Ft=Object(ee.c)(se.a)`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
`,Mt=Object(ee.c)(f.vc)`
  position: absolute;
  left: 0;
  bottom: 0;
`,Ut=Object(ee.c)(le.a)`
  max-width: 165px;
`;var Bt=e=>e.map(e=>{const{ip:t,status:a,statusPulse:n,uplink:r}=e;return{id:e._id,image:c.a.createElement(St,{justifyContent:"center",alignItems:"center",width:"100%"},Object(C.isU6)(e)&&c.a.createElement(Mt,{isActive:!0,size:"large"}),c.a.createElement(At,{device:e,filesMap:"GRID",width:"auto"})),children:c.a.createElement(jt,{flexDirection:"column",justifyContent:"center"},c.a.createElement(Nt,{justifyContent:"center",alignItems:"center"},c.a.createElement(Qe.a,{status:a,statusPulse:n,marginRight:6}),c.a.createElement(Ut,{truncate:!0},Object(K.b)(e))),c.a.createElement(yt,{centered:!0,color:"tertiary",size:"caption"},t||""),c.a.createElement(wt,{device:e,noPercentage:!0,alwaysShowStatusBar:!0}),c.a.createElement(Vt,null,c.a.createElement(Lt,null),c.a.createElement(xt,{color:"tertiary",size:"caption"},e.num_sta||0),c.a.createElement(Re.r,{bytes:null==r?void 0:r["tx_bytes-r"],direction:"down"}),c.a.createElement(Re.r,{bytes:null==r?void 0:r["rx_bytes-r"],direction:"up",iconStyle:{marginLeft:"8px"}})),Object(C.hasActiveUnifiCare)(e)&&c.a.createElement(Ft,{width:32,height:32}))}}),kt=a(1923),Wt=a(170),Ht=a(803),Gt=a(2003);var Yt=()=>{var e;const t=Object(r.useSelector)(L.b),a=Object(r.useDispatch)(),n=Object(r.useSelector)(Gt.a);return c.a.createElement(Re.g,{width:"100%",flexDirection:"column"},(null===(e=Object.keys(t))||void 0===e?void 0:e.length)?c.a.createElement(kt.a,{icon:"noElements",maxWidth:386,detailPadding:35,title:c.a.createElement(i.c,{id:"DEVICE_EMPTY_FILTER_HEADER"}),details:c.a.createElement(i.c,{id:"DEVICE_EMPTY_FILTER_NO_DEVICES_DETAILS"}),button:c.a.createElement(Wt.a,{variant:"primary"},c.a.createElement(i.c,{id:"DEVICE_EMPTY_ADJUST_FILTER_BUTTON"})),onClick:()=>a(Object(Ht.b)(!n))}):c.a.createElement(kt.a,{icon:"noElements",maxWidth:386,detailPadding:35,title:c.a.createElement(i.c,{id:"DEVICE_EMPTY_HEADER"}),details:c.a.createElement(i.c,{id:"DEVICE_EMPTY_NO_DEVICES_DETAILS"}),button:null}))};const $t=Object(ee.c)(ce.a)`
  height: 100%;
  padding: 30px;
  overflow: auto;
`,zt=Object(ee.c)("div")`
  width: 100%;
  height: 100%;

  > div > div > div > div {
    /* This is Tile */

    border: 1px solid ${({theme:e})=>e.motifPalette.ui04};
    border-radius: 8px;

    > div {
      width: 100% !important; // first container is image container
    }
  }
`,Kt=(ee.a`
  z-index: 601;
`,Object(ee.c)(te.a)`
  max-height: 100vh;
`,ee.a`
  cursor: pointer;
`);var Xt=({devicesTableData:e,location:{pathname:t},history:a,isLoading:l})=>{const i=Object(r.useDispatch)(),{path:o}=Object(Q.n)(),{site:E}=Object(Q.m)(),s=Object(r.useSelector)(L.d)!==N.b.GRID,{sortBy:m,isAscending:d,initialColumns:_}=Object(r.useSelector)(Object(I.F)(bt.a.DEVICE)),u=Object(r.useSelector)(J),p=e&&e.length>0,O=p&&!l,b=!p&&!l,g=Object(n.useMemo)(()=>O&&e.some(e=>Object(C.hasActiveUnifiCare)(e)),[O,e]),R=Object(n.useCallback)(e=>{const{mac:t}=e,n=Object(Q.i)(o,{id:t,section:"properties",site:E});a.push(n),i(Object(It.g)({type:v.b.DEVICE,mac:t}))},[a,o,t,E,i]),T=Object(n.useCallback)(({id:e},t)=>{i(Object(I.P)(bt.a.DEVICE,{sortBy:e,isAscending:t}))},[i]);return Object(gt.e)([Object(Rt.fetchDeviceDailyUsageReport)(u)],c.a.createElement(c.a.Fragment,null,O&&c.a.createElement($t,null,s?c.a.createElement(ae.a,{items:e,columns:Ot({showUnifiCareBadge:g}),onRowClick:R,onSort:T,rowHeight:32,rowClassName:Kt,initialSortBy:m,initiallySortAscending:d,columnOverride:_,divideTableByKey:"pendingAdoption",disableBlankRowDivide:!0,disableColumnFilters:!0}):c.a.createElement(zt,null,c.a.createElement(ne.a,{gutterSize:16,tileSize:"medium",selectType:"none",onTileClick:(t,a,n)=>R(e[n]),items:Bt(e)}))),b&&c.a.createElement(Yt,null)))},qt=a(20);function Zt(e){const{devicesTableData:t,history:a,location:c,match:l}=e,i=t.find(e=>e.mac===l.params.id),o=Object(r.useDispatch)(),E=()=>{a.push(c.pathname.split("/device-upgrade")[0]),o(Object(qt.e)())},s=Object(n.useMemo)(()=>i&&Object(C.isDeviceDowngradable)(i),[null==i?void 0:i.version,null==i?void 0:i.upgrade_to_firmware]);return Object(n.useEffect)(()=>((null==i?void 0:i.upgrade_to_firmware)?o(Object(C.confirmDeviceUpgrade)({titleValues:{deviceName:null==i?void 0:i.name},messageValues:{deviceName:null==i?void 0:i.name,fromVersion:null==i?void 0:i.version,toVersion:null==i?void 0:i.upgrade_to_firmware},onConfirm:()=>{o(Object(C.upgradeDevice)(i,s))},onCancel:()=>{E()},isDowngrade:s})):E(),()=>{E()}),[]),null}const Jt={fetchAPGroups:s.fetchAPGroups,fetchDevices:C.fetchDevices,fetchHealth:m.a,loadTranslations:u.c,fetchSysInfo:d.a,fetchSettings:_.fetchSettings,fetchSelf:I.g,fetchCountryChannels:p.a,fetchTags:O.b,fetchPortConf:R.fetchPortConf,fetchNetworks:b.fetchNetworks,fetchWifiNetworks:g.fetchWifiNetworks};t.default=Object(l.compose)(i.f,Object(r.connect)((e,t)=>({devicesTableData:Z(e,t)}),Jt),Object(E.c)(({fetchAPGroups:e,fetchDevices:t,fetchSysInfo:a,fetchHealth:n,loadTranslations:c,fetchSettings:r,fetchCountryChannels:l,fetchWifiNetworks:i,fetchNetworks:o,fetchPortConf:E,fetchTags:s,fetchSelf:m})=>Promise.all([e(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),t(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),a(),n(),c("devices"),c("clients"),r(),l(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),i(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),o(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),E(void 0,{crudCacheStrategy:{type:T.a.CACHE}}),s(),m({crudCacheStrategy:{type:T.a.CACHE}})]),void 0,"devices-page"))((function(e){const{devicesTableData:t,match:{path:a}}=e,n=(null==t?void 0:t.length)||0;return c.a.createElement(o.a,null,c.a.createElement(Y,{devicesTableDataLength:n}),c.a.createElement(h.a,{path:""+a,render:()=>c.a.createElement(Xt,Object.assign({},e))}),c.a.createElement(h.a,{path:"/:site/devices/device-upgrade/:id/",render:e=>c.a.createElement(Zt,Object.assign({devicesTableData:t},e))}),c.a.createElement(D.a,{panelType:v.b.DEVICE}))}))}}]);