(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[71],{1953:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),i=a.n(n),l=a(8),c=a(32),r=a(13);const d=({date:e,dateFormat:t})=>i.a.createElement("span",null,Object(c.format)(e,t));t.b=({date:e,dateFormat:t})=>{const a=Object(l.useSelector)(r.n);return i.a.createElement(d,{date:e,dateFormat:t||a})}},1997:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),l=a(31),c=a(8),r=a(5),d=a(170),E=a(386),s=a(792),o=a(69),u=a(76);const b=Object(r.c)(d.a)`
  font-size: ${({theme:e})=>e.fontSizes[1]}px;
  font-weight: normal;
`,_=({device:e,...t})=>{const a=Object(l.k)(),n=Object(c.useDispatch)(),r=Object(c.useSelector)(o.a);return e?i.a.createElement(b,Object.assign({noWrap:!0,variant:"link",size:"small",onClick:t=>{t.preventDefault(),t.stopPropagation(),a.push(`/${r}/devices/properties/${e.mac}`),n(Object(E.g)({type:s.b.DEVICE,mac:e.mac}))}},t),Object(u.b)(e)):null};t.b=_;const m=Object(r.c)(_)`
  font-size: 12px;
`},2016:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n),l=a(4),c=a(5),r=a(1198),d=a(1953),E=a(1997);const s=Object(c.c)(l.c)`
  font-style: italic;
`,o=["children","essid","bssid","security","radio","rssi","noise","channel","band","bw","oui","signal","date","ap_mac"],u=()=>[{id:"children",label:"",minWidth:50,maxWidth:50,renderCell:({children:e,hierarchy:t})=>!t&&(null==e?void 0:e.length)?i.a.createElement(r.a,{type:"primary",value:e.length+1}):null,hideCellBorder:({hierarchy:e})=>!!e},{id:"essid",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_NETWORK_NAME"}),minWidth:150,renderCell:({essid:e,hierarchy:t})=>!t&&(e||i.a.createElement(s,{id:"WIFI_SCANNER_HIDDEN_NETWORK_NAME"}))||null},{id:"bssid",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_BSSID"}),minWidth:150},{id:"security",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_SECURITY"}),minWidth:150},{id:"radio",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_PROTOCOL"}),renderCell:({radio:e})=>e?i.a.createElement(l.c,{id:"WIFI_SCANNER_PROTOCOL_"+e.toUpperCase()}):null,minWidth:90,maxWidth:120},{id:"rssi",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_RSSI"}),minWidth:60,maxWidth:60},{id:"noise",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_NOISE"}),minWidth:60,maxWidth:80},{id:"channel",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_CHANNEL"}),minWidth:60,maxWidth:90},{id:"band",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_BAND"}),renderCell:({band:e})=>e?i.a.createElement(l.c,{id:"WIFI_SCANNER_BAND_"+e.toUpperCase()}):null,minWidth:80,maxWidth:90},{id:"bw",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_WIDTH"}),renderCell:({bw:e})=>e?e+" MHz":null,minWidth:80,maxWidth:90},{id:"oui",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_VENDOR"}),minWidth:120},{id:"date",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_LAST_SEEN"}),renderCell:e=>i.a.createElement(d.b,{date:e.date}),minWidth:90,maxWidth:120},{id:"ap_mac",sortable:!0,label:i.a.createElement(l.c,{id:"WIFI_SCANNER_TABLE_HEADER_NEAREST_AP"}),minWidth:120,renderCell:({device:e})=>i.a.createElement(E.a,{device:e})}]},2017:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"5D",label:"5D",value:120},{id:"1M",label:"1M",value:720}]},2061:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return E})),a.d(t,"d",(function(){return s}));var n=a(163),i=a(127),l=(a(2016),a(2017));const c=l.a.find(({isDefault:e})=>!!e)||l.a[0],r=e=>Object(n.i)({name:i.a.WIFI_SCANNER,value:e}),d=e=>Object(n.j)({name:i.a.WIFI_SCANNER,value:e}),E=e=>Object(n.f)({name:i.a.WIFI_SCANNER,value:e}),s=()=>E(c.value)},2908:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),c=a(1994),r=a(64),d=a(232),E=a(2061),s=a(2085),o=a(2017);const u=o.a.map(({isDefault:e,...t})=>t);var b=()=>{var e,t;const a=Object(l.useDispatch)(),r=Object(l.useSelector)(s.a),d=(null===(e=u.find(({value:e})=>e===r))||void 0===e?void 0:e.id)||(null===(t=o.a.find(({isDefault:e})=>e))||void 0===t?void 0:t.id),b=Object(n.useCallback)(({value:e})=>a(Object(E.a)(e)),[a]);return i.a.createElement(c.h,{tabs:u,selectedTab:d,onSelectTab:b,variant:"tertiary"})};t.default=()=>{const e=Object(l.useDispatch)(),t=Object(l.useSelector)(s.c),[a,o]=Object(n.useState)(t);return Object(r.e)([Object(d.c)("wifiScanner")],i.a.createElement(i.a.Fragment,null,i.a.createElement(c.f,{value:a,onChange:({target:{value:t}})=>{o(t),e(Object(E.c)(t))},onClear:()=>{o(""),e(Object(E.c)(""))},onSubmit:(t,a)=>{e(Object(E.c)(a))}}),i.a.createElement(b,null)),null)}}}]);