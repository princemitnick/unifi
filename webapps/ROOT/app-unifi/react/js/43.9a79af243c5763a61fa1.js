(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[43],{1953:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),c=n.n(a),i=n(8),l=n(32),r=n(13);const s=({date:e,dateFormat:t})=>c.a.createElement("span",null,Object(l.format)(e,t));t.b=({date:e,dateFormat:t})=>{const n=Object(i.useSelector)(r.n);return c.a.createElement(s,{date:e,dateFormat:t||n})}},1957:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(8),l=n(13),r=n(42),s=n(137),d=n(1970),o=n(97);t.a=({date:e,relativeToDate:t=new Date,spacer:n=" "})=>{const m=Object(i.useSelector)(l.N),u=Object(i.useSelector)(r.selectLocaleSettings),E=Object(i.useSelector)(o.b),_=Object(a.useMemo)(()=>Object(s.d)(m,u,E),[m,u,E]);return c.a.createElement(d.b,{date:e.toLocaleString("en-US",{timeZone:_}),spacer:n})}},1966:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(5),l=n(8),r=n(32),s=n(49),d=n(4),o=n(24),m=n(13),u=n(42),E=n(137),_=n(97);const b=Object(i.c)(o.a)`
  width: 55px;
  height: 55px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  margin: 12px 12px 0 0;
  padding: 9px 0 8px 0;
`,h=Object(i.c)(s.a)`
  font-size: 15px;
`,p=Object(i.c)(s.a)`
  text-transform: capitalize;
`,g=Object(i.c)(s.a)`
  font-size: 11px;
`;t.a=({expires:e,...t})=>{const[n,i]=Object(a.useState)({years:void 0,months:void 0,days:void 0,hours:void 0,minutes:void 0,seconds:void 0}),{years:s,months:f,days:O,hours:v,minutes:I,seconds:w}=n,A=Object(r.isAfter)(e,new Date);Object(a.useEffect)(()=>{const t=setInterval(()=>i(Object(E.g)(e,new Date)),100);return()=>clearInterval(t)},[e]);const N=Object(l.useSelector)(u.selectLocaleSettings),j=Object(l.useSelector)(m.N),M=Object(l.useSelector)(_.b),x=Object(E.d)(j,N,M),C=Object(E.a)(e,Object(E.f)(),x);return c.a.createElement("div",Object.assign({},t),c.a.createElement(g,{weight:"bold"},c.a.createElement(d.c,{id:A?"COMMON_DATETIME_EXPIRES_ON":"COMMON_DATETIME_EXPIRED_ON",values:{expirationDate:Object(r.format)(C,"MMMM D, YYYY")}})),A&&c.a.createElement(o.a,{flexDirection:"row",alignItems:"flex-start"},s>0&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},s||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_YEARS",values:{years:s}}))),(s>0||f>0)&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},f||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_MONTHS",values:{months:f}}))),(s>0||f>0||O>0)&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},O||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_DAYS",values:{days:O}}))),0===s&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},v||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_HOURS",values:{hours:v}}))),0===s&&0===f&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},I||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_MINUTES",values:{minutes:I}}))),0===s&&0===f&&0===O&&c.a.createElement(b,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},c.a.createElement(h,{weight:"bold"},w||0),c.a.createElement(p,{size:"label",color:"tertiary"},c.a.createElement(d.c,{id:"COMMON_DATETIME_LABEL_SECONDS",values:{seconds:w}})))))}},1970:function(e,t,n){"use strict";n.d(t,"a",(function(){return a.b})),n.d(t,"c",(function(){return a.a})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return E}));var a=n(1953),c=n(0),i=n.n(c),l=n(5),r=n(1),s=n.n(r),d=n(8),o=n(32),m=n(13);function u(e){var t=e.date,n=e.timeFormat;return i.a.createElement("span",null,Object(o.format)(t,n))}u.propTypes={date:s.a.string.isRequired,timeFormat:s.a.string.isRequired};var E=Object(d.connect)((function(e){return{timeFormat:Object(m.J)(e)}}))(u),_=Object(l.c)("span",{target:"e12p30cx0"})("white-space:nowrap;");function b(e){var t=e.date,n=e.spacer;return i.a.createElement(_,null,i.a.createElement(a.b,{date:t}),n||"&nbsp;",i.a.createElement(E,{date:t}))}b.propTypes={date:s.a.string.isRequired,spacer:s.a.string},b.defaultProps={spacer:" - "};n(1966)},1976:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(802);t.a=({item:e,className:t})=>{const{speed_tests:n}=e,a=n&&n.reduce((e,{download_speed_bytes:t})=>e+t,0);return c.a.createElement(i.a,{className:t,bytes:a,direction:"down",hideIcon:!0})}},1977:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(802);t.a=({item:e,className:t})=>{const{speed_tests:n}=e,a=n&&n.reduce((e,{upload_speed_bytes:t})=>e+t,0);return c.a.createElement(i.a,{className:t,bytes:a,direction:"up",hideIcon:!0})}},1980:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(537),l=n(5),r=n(77),s=n(24),d=n(806);const o=Object(l.c)(i.a,{shouldForwardProp:e=>!["width","height"].includes(e)})`
  float: left;
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
  ${({width:e})=>e&&`width: ${e}px;`}
  ${({height:e})=>e&&`height: ${e}px;`}
`;var m=({defaultName:e="",client:t=null,width:n,height:a,alt:i})=>c.a.createElement(s.a,{alignItems:"center"},c.a.createElement(o,{client:t,width:n,height:a,alt:i}),c.a.createElement(d.a,null,Object(r.getClientDisplayName)(t)||e));t.a=({data:{client_icon_device_id:e,client_icon_engine_id:t,client_name:n},name:a,withName:l=!1})=>{const r=l?m:i.a;return c.a.createElement(r,{client:{dev_id:e,fingerprint_source:t,name:a||n,is_wired:!1},alt:a})}},2004:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(146),l=n(113),r=n(801);t.a=({model:e,name:t,withName:n=!1,width:a=25,height:s=25,...d})=>{const o=i.deviceModels[e],m=n?r.a:l.c,u=n?t||(null==o?void 0:o.name):void 0;return c.a.createElement(m,Object.assign({device:{model:e,type:null==o?void 0:o.type,name:u},width:a,height:s},d))}},2005:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(78),l=n(806);t.a=({item:e})=>{const{client_link_download_rate_kbps:t,client_link_upload_rate_kbps:n}=e,a=`${Object(i.c)(1e3*t/8,"bitrate")} / ${Object(i.c)(1e3*n/8,"bitrate")}`;return c.a.createElement(l.a,null,a)}},2035:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f}));var a=n(0),c=n.n(a),i=n(4),l=n(49),r=n(1858),s=n(824),d=n(23),o=n(5),m=n(1957),u=n(1980),E=n(2004),_=n(1976),b=n(1977),h=n(2005);const p=Object(o.c)(l.a)`
  max-width: 90%;
`,g=["client_model","client_name","client_wifi_experience","device_model","device_name","wlan_essid","client_signal","wlan_channel_width","down","up","rate","date"],f=[{id:"client_model",sortable:!0,minWidth:120,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_CLIENT"}),renderCell:e=>c.a.createElement(u.a,{data:e,name:e.client_model,withName:!0})},{id:"client_name",sortable:!0,minWidth:120,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_NAME"}),renderCell:({client_name:e})=>c.a.createElement(p,{truncate:!0},e)},{id:"client_wifi_experience",sortable:!0,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_WIFI_EXP"}),minWidth:60,renderCell:({client_wifi_experience:e})=>c.a.createElement(r.a,{type:"percent",input:e/100,style:{color:s.a.getGradientColor(e/100)}})},{id:"device_model",sortable:!0,minWidth:110,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_AP_MODEL"}),renderCell:({device_model:e})=>c.a.createElement(E.a,{model:e,withName:!0,width:20,height:20})},{id:"device_name",sortable:!0,minWidth:100,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_AP_NAME"}),renderCell:({device_name:e})=>c.a.createElement(p,{truncate:!0},e)},{id:"wlan_essid",sortable:!0,minWidth:100,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_SSID"})},{id:"client_signal",sortable:!0,minWidth:60,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_SIGNAL"}),renderCell:({client_signal:e})=>c.a.createElement(c.a.Fragment,null,e," ",c.a.createElement(i.c,{id:"COMMON_UNIT_DBM"}))},{id:"wlan_channel_width",sortable:!0,minWidth:80,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_CHANNEL"}),renderCell:({wlan_channel_width:e,wlan_band:t})=>c.a.createElement(c.a.Fragment,null,`${e}${t&&` (${t})`}`)},{id:"down",sortable:!0,minWidth:110,label:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.eb,{width:12,height:12}),c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_DOWN"})),renderCell:e=>c.a.createElement(_.a,{item:e})},{id:"up",sortable:!0,minWidth:110,label:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.fb,{width:12,height:12}),c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_UP"})),renderCell:e=>c.a.createElement(b.a,{item:e})},{id:"rate",sortable:!0,minWidth:120,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_RATE"}),renderCell:e=>c.a.createElement(h.a,{item:e})},{id:"date",sortable:!0,minWidth:120,label:c.a.createElement(i.c,{id:"WIFI_MAN_TABLE_HEADER_DATE_TIME"}),renderCell:e=>c.a.createElement(m.a,{date:e.date})}]},2117:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s}));var a=n(163),c=n(127),i=(n(2035),n(1985));i.a.find(({isDefault:e})=>!!e)||i.a[0];const l=e=>Object(a.i)({name:c.a.WIFI_MAN,value:e}),r=e=>Object(a.j)({name:c.a.WIFI_MAN,value:e}),s=e=>Object(a.f)({name:c.a.WIFI_MAN,value:e})},2227:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),c=n.n(a),i=n(49),l=n(24),r=n(4),s=n(5);const d=Object(s.c)(i.a)`
  max-width: 90%;
`;function o({id:e,count:t,label:n,...a}){return c.a.createElement(l.a,Object.assign({direction:"row",alignItems:"center",justifyContent:"space-between"},a),n&&c.a.createElement(d,{truncate:!0},n)||c.a.createElement(r.c,{id:e}),c.a.createElement(i.a,{color:"secondary"},t))}},2229:function(e,t,n){"use strict";var a=n(0),c=n(8),i=n(127),l=n(337),r=n(13),s=n(163),d=n(2117);t.a=()=>{const e=Object(c.useDispatch)(),t=Object(a.useCallback)(()=>{e(Object(s.h)({name:i.a.WIFI_MAN})),e(Object(r.P)(l.a.WIFI_MAN,{filters:void 0}))},[]),n=Object(a.useCallback)(t=>{e(Object(d.b)(t)),e(Object(r.P)(l.a.WIFI_MAN,{filters:t}))},[]);return Object(a.useMemo)(()=>({onClearFilters:t,onUpdateFilters:n}),[t,n])}},2259:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(1),l=n.n(i),r=n(7),s=n.n(r),d=n(73),o=n(271),m=n(25);Object(m.a)(".checklist__xyXOsPkg{display:flex;flex-direction:column;margin-bottom:20px}.item__xyXOsPkg{margin-top:20px}.item-condensed__xyXOsPkg{margin-top:8px}");var u={checklist:"checklist__xyXOsPkg",item:"item__xyXOsPkg","item-condensed":"item-condensed__xyXOsPkg"};const E=({className:e,full:t,motif:n,items:a,spacing:i})=>c.a.createElement("div",{className:s()(u.checklist,e)},a.map(e=>c.a.createElement(o.a,Object.assign({full:t},e,{key:e.id,className:s()(e.className,u.item,i&&u["item-"+i]),motif:n}))));E.propTypes={className:l.a.string,motif:l.a.oneOf(["light","dark"]),items:l.a.arrayOf(l.a.shape({checked:l.a.bool.isRequired,id:l.a.string.isRequired,onChange:l.a.func.isRequired,className:l.a.string,children:l.a.node.isRequired})).isRequired,spacing:l.a.oneOf(["condensed"]),full:l.a.bool},E.defaultProps={className:"",motif:"light",spacing:void 0,full:!1};t.a=c.a.memo(Object(d.a)(E))},2900:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),l=n(4),r=n(5),s=n(1862),d=n(1917),o=n(2259),m=n(64),u=n(232),E=n(2227),_=n(811),b=n(1961),h=n(2229),p=n(2031),g=n(2032);var f,O=e=>{const t=Object(i.useSelector)(p.b);return Object(a.useMemo)(()=>Object.keys(e).reduce((n,a)=>(n[a]=t.filter(t=>Object(g.b)(t,e[a])).length,n),{}),[e,t])};!function(e){e.WLAN_ESSID="wlan_essid",e.DEVICE_NAME="device_name",e.EXPERIENCE="experience"}(f||(f={}));var v=n(1985);const I=Object(r.c)(d.a)`
  .contentClassName {
    padding: 0;
    margin: 0;
  }
`,w=(e,t)=>{if(t){const n=t.includes(e)?t.filter(t=>t!==e):[...t,e];return 0===n.length?void 0:n}return[e]},A=(e,t)=>{if(t){const n=t.includes(e)?t.filter(t=>t!==e):[...t,e];return 0===n.length?void 0:n}return[e]},N=(e,t)=>{const n=Object(s.a)(e,t);return Object.keys(n).map(e=>({id:e,label:e,count:n[e].length})).sort((e,t)=>e.label<t.label?-1:e.label>t.label?1:0)},j={success:{experience:["success"]},warning:{experience:["warning"]},danger:{experience:["danger"]}};t.default=()=>{const{onUpdateFilters:e}=Object(h.a)(),t=O(j),n=Object(i.useSelector)(b.b),r=Object(i.useSelector)(p.b),s=N(r,"wlan_essid"),d=N(r,"device_name"),g=Object(a.useCallback)((t,a)=>{const c={...n,[t]:a};void 0===a&&delete c[t],e(c)},[n,e]),M=[(null==s?void 0:s.length)&&{id:f.WLAN_ESSID,openByDefault:!!(null==n?void 0:n.wlan_essid),label:c.a.createElement(l.c,{id:"WIFI_MAN_FILTER_HEADER_SSID"}),renderContent:()=>c.a.createElement(o.a,{full:!0,spacing:"condensed",items:s.map(({id:e,label:t,count:a})=>{var i;return{id:e,checked:!!(null===(i=null==n?void 0:n.wlan_essid)||void 0===i?void 0:i.includes(e)),children:c.a.createElement(E.a,{label:t,count:a}),onChange:()=>g("wlan_essid",A(e,n.wlan_essid))}})})},(null==d?void 0:d.length)&&{id:f.DEVICE_NAME,openByDefault:!!(null==n?void 0:n.device_name),label:c.a.createElement(l.c,{id:"WIFI_MAN_FILTER_HEADER_ACCESS_POINT"}),renderContent:()=>c.a.createElement(o.a,{full:!0,spacing:"condensed",items:d.map(({id:e,label:t,count:a})=>{var i;return{id:e,checked:!!(null===(i=null==n?void 0:n.device_name)||void 0===i?void 0:i.includes(e)),children:c.a.createElement(E.a,{label:t&&Object(_.a)(t),count:a}),onChange:()=>g("device_name",A(e,n.device_name))}})})},{id:f.EXPERIENCE,openByDefault:!!(null==n?void 0:n.experience),label:c.a.createElement(l.c,{id:"WIFI_MAN_FILTER_HEADER_EXPERIENCE"}),renderContent:()=>{var e,a,i;return c.a.createElement(o.a,{full:!0,spacing:"condensed",items:[{id:"hasGoodExperience",checked:!!(null===(e=null==n?void 0:n.experience)||void 0===e?void 0:e.includes("success")),children:c.a.createElement(E.a,{label:`${v.b.success.lo}% - ${v.b.success.hi}%`,count:t.success}),onChange:()=>g("experience",w("success",n.experience))},{id:"hasFairExperience",checked:!!(null===(a=null==n?void 0:n.experience)||void 0===a?void 0:a.includes("warning")),children:c.a.createElement(E.a,{label:`${v.b.warning.lo}% - ${v.b.warning.hi}%`,count:t.warning}),onChange:()=>g("experience",w("warning",n.experience))},{id:"hasPoorExperience",checked:!!(null===(i=null==n?void 0:n.experience)||void 0===i?void 0:i.includes("danger")),children:c.a.createElement(E.a,{label:`<${v.b.danger.hi}%`,count:t.danger}),onChange:()=>g("experience",w("danger",n.experience))}]})}}].filter(Boolean);return Object(m.e)([Object(u.c)("wifiMan")],c.a.createElement(I,{multiOpen:!0,variant:"filters",items:M,contentClassName:"contentClassName"}),null)}}}]);