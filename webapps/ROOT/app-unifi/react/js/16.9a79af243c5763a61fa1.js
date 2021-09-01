(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[16],{1939:function(e,t,a){"use strict";var n=a(0),r=a(31);t.a=()=>{const e=Object(r.l)(),[t]=Object(n.useState)(e.pathname),[a,c]=Object(n.useState)(!1),i=Object(n.useRef)();return Object(n.useEffect)(()=>{c(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(i.current=setTimeout(()=>c(!0),500)),()=>clearTimeout(i.current)},[e.pathname,t]),a}},1945:function(e,t,a){"use strict";a.d(t,"b",(function(){return P})),a.d(t,"a",(function(){return C}));var n=a(0),r=a.n(n),c=a(5),i=a(4),o=a(45),E=a(1973),s=a(1974),l=a(1948),u=a(799),d=a(95),m=a(1952),b=a(23),p=a(49),A=a(40),O=a(1848),_=a(793),T=a(1939);const N=c.a`
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
`;var g=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const o=Object(T.a)(),E=Object(_.a)(c),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!E||o,in:t||!E||o,timeout:e,classNames:N,mountOnEnter:!0},i),a)),[a,t,E,o,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const D=c.a`
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
`;var f=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:c,...i})=>{const o=Object(T.a)(),E=Object(_.a)(c),s=Object(n.useMemo)(()=>r.a.Children.map(a,a=>null===a?a:r.a.createElement(O.a,Object.assign({appear:t||!E||o,in:t||!E||o,timeout:e,classNames:D,mountOnEnter:!0},i),a)),[a,t,E,o,e,i]);return r.a.createElement(r.a.Fragment,null,s)};const S=Object(c.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,h=Object(c.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,j=Object(c.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,y=Object(c.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,M=Object(c.c)(p.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var C=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:c,ignoredPaths:i})=>{const{motif:o}=Object(A.a)();return r.a.createElement(f,{ignoredPaths:i},r.a.createElement(h,{flex:"none",height:"65px"},r.a.createElement(g,{ignoredPaths:i},r.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},r.a.createElement(S,{alignItems:"center",flex:"1",height:"100%"},t&&r.a.createElement(y,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:o},r.a.createElement(b.g,null))),r.a.createElement(j,null,r.a.createElement(M,{weight:"bold"},e.component)),r.a.createElement(S,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!c&&r.a.createElement(y,{legacy:!1,name:"closeButton",type:"button",onClick:n},r.a.createElement(b.A,null)))))))};const R=Object(c.c)(d.g)`
  width: 100%;
  max-width: ${u.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,x=Object(c.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,v=Object(c.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,Y=Object(c.c)(E.a)`
  > :first-child {
    max-width: ${u.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,I=Object(c.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,L=Object(c.c)(d.k)`
  height: 100%;
  width: 100%;
`;var P=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:c,isView:E,showBack:u,title:b,unsavedChangesModalIgnoredPaths:p,onEscClicked:A,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:_=!1,customFooterButtons:T,...N})=>r.a.createElement(o.c,Object.assign({enableReinitialize:!0},N),({dirty:c,handleReset:o,handleSubmit:N,isSubmitting:g})=>r.a.createElement(x,{autoComplete:"off",onSubmit:N},r.a.createElement(L,{vertical:!0},r.a.createElement(C,{goBack:a,hideClose:n,showBack:u,title:b,onEscClicked:A,ignoredPaths:p}),r.a.createElement(m.a,{ignoredPaths:p},r.a.createElement(I,{flex:"1"},r.a.createElement(R,{flex:"none",flexDirection:"column"},e))),!t&&!E&&r.a.createElement(l.a,{ignoredPaths:p,when:c&&!g}),(!E||_)&&r.a.createElement(Y,{active:c||_},r.a.createElement(d.g,{justifyContent:T?"space-between":"flex-end",width:"100%",alignItems:"center"},T&&r.a.createElement(v,null,T(g)),!E&&r.a.createElement(d.g,null,r.a.createElement(s.a,{disabled:!c||g,type:"button",variant:"default",onClick:o},r.a.createElement(i.c,{id:"COMMON_ACTION_CANCEL"})),r.a.createElement(s.a,{disabled:!c||g,type:"submit",variant:"primary"},r.a.createElement(i.c,{id:O}))))))))},1946:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"m",(function(){return d})),a.d(t,"k",(function(){return m})),a.d(t,"h",(function(){return b})),a.d(t,"g",(function(){return p})),a.d(t,"j",(function(){return A})),a.d(t,"f",(function(){return O})),a.d(t,"i",(function(){return _})),a.d(t,"l",(function(){return T})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return D})),a.d(t,"n",(function(){return S})),a.d(t,"o",(function(){return h})),a.d(t,"c",(function(){return j})),a.d(t,"p",(function(){return M})),a.d(t,"q",(function(){return C}));var n=a(112);const r=e=>(t,a,r,c)=>Object(n.d)(e(r,t),e(c,a)),c=e=>t=>{const a=(e=>t=>e.formatMessage({id:t}))(e);return(e,n,r,c)=>{const[i,o]=[t(e,r),t(n,c)].map(a);return i.localeCompare(o)}};var i=a(16),o=a(133),E=a(6),s=a(138),l=a(76);const u={ugw:1,usw:2,uap:3},d=(e,t,a,r)=>{const c=E.DEVICE_STATE_IMPORTANCE[Object(E.getDeviceState)(a)],i=E.DEVICE_STATE_IMPORTANCE[Object(E.getDeviceState)(r)];if(c===i){if(a.adopted===r.adopted){if(a.type!==r.type)return((e,t)=>{const a=e.type,r=t.type;return a===r?Object(n.d)(Object(l.a)(e),Object(l.a)(t)):Object(n.d)(u[a],u[r])})(a,r);const e=a.originalName,t=r.originalName;return e&&t?Object(n.d)(e,t):e?-1:t?1:Object(n.d)(a.modelName,r.modelName)}return Object(n.d)(a.adopted?1:2,r.adopted?1:2)}return Object(n.d)(c,i)},m=(e,t,a,r)=>Object(n.d)(Object(l.a)(a),Object(l.a)(r)),b=(e,t,a,r)=>{const c=Object(s.d)(Object(E.getDeviceIp)(a))||0,i=Object(s.d)(Object(E.getDeviceIp)(r))||0;return Object(n.d)(c,i)},p=(e,t,a,r)=>{const{averageSatisfaction:c}=a.satisfactionByRadio,{averageSatisfaction:i}=r.satisfactionByRadio;let o=Object(E.getDeviceExperience)(a),s=Object(E.getDeviceExperience)(r);return a.type===E.DeviceType.AP&&c<0&&(o=-.5),r.type===E.DeviceType.AP&&i<0&&(s=-.5),Object(n.d)(o,s)},A=(e,t,a,r)=>{const c=Object(E.getDeviceMemoryUsage)(a)||0,i=Object(E.getDeviceMemoryUsage)(r)||0;return Object(n.d)(c,i)},O=(e,t,a,r)=>{const c=parseFloat(Object(i.a)(a,"system-stats.cpu",0)),o=parseFloat(Object(i.a)(r,"system-stats.cpu",0));return Object(n.d)(c,o)},_=(e,t,a,r)=>{const c=parseFloat(Object(i.a)(a,"sys_stats.loadavg_1",-1)),o=parseFloat(Object(i.a)(r,"sys_stats.loadavg_1",-1));return Object(n.d)(c,o)},T=(e,t,a)=>{const r=Object(E.getRadioByType)(e,a),c=Object(E.getRadioByType)(t,a),i=r?Object(E.getRadioStatsByName)(e,r.name):null,o=c?Object(E.getRadioStatsByName)(t,c.name):null;if(r&&c&&i&&o){let a,s;const l=(e,t)=>e&&t?Object(n.d)(e,t):(e?-1:t&&1)||0;return a=("auto"===r.channel?0:r.channel)||0,s=("auto"===c.channel?0:c.channel)||0,l(a,s)?l(a,s):(a=Object(E.getRadioStatsBindedChannel)(e,i)||r.channel||0,s=Object(E.getRadioStatsBindedChannel)(t,o)||c.channel||0,l(a,s)?l(a,s):(a=parseInt(Object(E.getRadioHt)(r),10),s=parseInt(Object(E.getRadioHt)(c),10),l(a,s)?l(a,s):(a=Object(E.getRadioStatsPrimaryChannel)(i)||r.channel||0,s=Object(E.getRadioStatsPrimaryChannel)(o)||r.channel||0,l(a,s)?l(a,s):(a=Object(E.getRadioStatsTransmitPower)(i),s=Object(E.getRadioStatsTransmitPower)(o),l(a,s)?l(a,s):0))))}if(r&&c){if(i)return 1;if(o)return-1}return r?1:c?-1:0},N=(e,t)=>{if(!e.radio_table_stats)return-1;return Object(E.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},g=(e,t,a,r)=>{const c=N(a,o.b.NG),i=N(r,o.b.NG);return Object(n.d)(c,i)},D=(e,t,a,r)=>{const c=N(a,o.b.NA),i=N(r,o.b.NA);return Object(n.d)(c,i)},f=(e,t)=>{const a=Object(E.getRadioStatsByType)(e,t);return a.length?a.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):-1},S=(e,t,a,r)=>{const c=f(a,o.b.NG),i=f(r,o.b.NG);return Object(n.d)(c,i)},h=(e,t,a,r)=>{const c=f(a,o.b.NA),i=f(r,o.b.NA);return Object(n.d)(c,i)},j=(e,t,a,r)=>{const c=Object(E.getChannelValue)(a),i=Object(E.getChannelValue)(r);return Object(n.d)(c,i)},y=(e,t)=>Object(E.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.cu_total||0,0),M=(e,t,a,r)=>{const c=y(a,o.b.NG),i=y(r,o.b.NG);return Object(n.d)(c,i)},C=(e,t,a,r)=>{const c=y(a,o.b.NA),i=y(r,o.b.NA);return Object(n.d)(c,i)}},1952:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1848),i=a(5),o=a(793),E=a(1939);const s=i.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:i,...l})=>{const u=Object(E.a)(),d=Object(o.a)(a),m=Object(n.useMemo)(()=>r.a.Children.map(i,a=>null===a?a:r.a.createElement(c.a,Object.assign({appear:t||!d||u,in:t||!d||u,timeout:e,classNames:s,mountOnEnter:!0},l),a)),[i,t,d,u,e,l]);return r.a.createElement(r.a.Fragment,null,m)}},2124:function(e,t,a){"use strict";var n,r,c,i,o;a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),function(e){e[e.SUNDAY=0]="SUNDAY",e[e.MONDAY=0]="MONDAY",e[e.TUESTDAY=0]="TUESTDAY",e[e.WEDNESDAY=0]="WEDNESDAY",e[e.THURSDAY=0]="THURSDAY",e[e.FRIDAY=0]="FRIDAY",e[e.SATURDAY=0]="SATURDAY"}(n||(n={})),function(e){e[e.JANUARY=1]="JANUARY",e[e.FEBRYARY=2]="FEBRYARY",e[e.MARCH=3]="MARCH",e[e.APRIL=4]="APRIL",e[e.MAY=5]="MAY",e[e.JUNE=6]="JUNE",e[e.JULY=7]="JULY",e[e.AUGUST=8]="AUGUST",e[e.SEPTEMBER=9]="SEPTEMBER",e[e.OCTOBER=10]="OCTOBER",e[e.NOVEMBER=11]="NOVEMBER",e[e.DECEMBER=12]="DECEMBER"}(r||(r={})),function(e){e.NEVER="Never",e.DAILY="Daily",e.WEEKLY="Weekly",e.MONTHLY="Monthly",e.ADVANCED="Advanced"}(c||(c={})),function(e){e.DAY="Day",e.WEEK="Week",e.MONTH="Month",e.YEAR="Year"}(i||(i={})),function(e){e.Hour="Hourly",e.Day="Daily",e.Week="Weekly",e.Month="Monthly",e.Year="Yearly"}(o||(o={}))},2168:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return p})),a.d(t,"f",(function(){return A})),a.d(t,"b",(function(){return O})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return T}));var n=a(0),r=a.n(n),c=a(4),i=a(49),o=a(1760),E=a(30),s=a(113),l=a(1946),u=a(76),d=a(2124);const m={name:"",execute_only_once:!1,cron_expr:"",upgrade_targets:[],dayInMonth:1,repeat:d.c.NEVER,repeatEveryCount:1,repeatEveryPeriod:d.a.DAY,startTime:0,weekDays:[]},b="schedule-upgrades",p=E.a.object().shape({name:E.a.string().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_NAME").required(),upgrade_targets:E.a.array().of(E.a.string()).label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_TARGET_DEVICES").min(1).required(),startTime:E.a.number().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_START_TIME").required(),repeat:E.a.string().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEATS").oneOf(Object.values(d.c)).required(),repeatEveryPeriod:E.a.string().when("repeat",{is:e=>e===d.c.ADVANCED,then:E.a.string().oneOf(Object.values(d.a)).required()}),repeatEveryCount:E.a.number().when(["repeat","repeatEveryPeriod"],(e,t)=>{if(e===d.c.ADVANCED)switch(t){case d.a.DAY:return E.a.number().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_EVERY").min(1).max(31).required();case d.a.WEEK:return E.a.number().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_EVERY").min(1).max(2).required();case d.a.MONTH:return E.a.number().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_EVERY").min(1).max(12).required()}return E.a.number()}),dayInMonth:E.a.number().when(["repeat","repeatEveryPeriod"],{is:(e,t)=>e===d.c.MONTHLY||e===d.c.ADVANCED&&t===d.a.MONTH,then:E.a.number().label("SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_ON_DAY_OF_MONTH").min(1).max(31).required()}),weekDays:E.a.array().of(E.a.number()).when(["repeat","repeatEveryPeriod"],{is:(e,t)=>e===d.c.WEEKLY||e===d.c.ADVANCED&&t===d.a.WEEK,then:E.a.array().of(E.a.number()).min(1,"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_VALIDATION_WEEK_DAYS_MIN").required()})}),A=[{compare:Object(l.a)(e=>Object(u.b)(e)),id:"icon",minWidth:32,renderCell:e=>r.a.createElement(s.c,{device:e}),renderLabel:()=>null},{compare:Object(l.a)(e=>Object(u.b)(e)),id:"name",minWidth:100,label:r.a.createElement(c.c,{id:"SETTINGS_DEVICE_SELECTOR_HEADER_NAME"}),renderCell:e=>r.a.createElement(i.a,{color:"tertiary",truncate:!0},Object(u.b)(e)),sortable:!0},{compare:Object(l.a)(e=>Object(u.a)(e)),id:"model",minWidth:130,label:r.a.createElement(c.c,{id:"SETTINGS_DEVICE_SELECTOR_HEADER_MODEL"}),renderCell:e=>r.a.createElement(i.a,{color:"tertiary",truncate:!0},Object(u.a)(e)),sortable:!0}],O=e=>Object(o.a)(0,24).map(t=>Object(o.a)(4).map(a=>{const n=String(15*a).padStart(2,"0");return{label:`${String(e?t:t%12||12).padStart(2,"0")}:${n}${e?"":""+(t>=12?"pm":"am")}`,value:60*t+ +n}})).flat(),_=Object.entries(d.c).map(([e,t])=>({label:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_"+e,value:t})),T=[{label:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_DAY",value:d.a.DAY},{label:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_WEEK",value:d.a.WEEK},{label:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_MONTH",value:d.a.MONTH},{label:"SETTINGS_SYSTEM_MAINTENANCE_UPDATE_FORM_SCHEDULED_LABEL_REPEAT_YEAR",value:d.a.YEAR}]},2213:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return E}));var n=a(1760),r=a(2168),c=a(2124);const i=(e,t)=>{let{dayInMonth:a,repeat:n,repeatEveryCount:i,repeatEveryPeriod:o,startTime:E,weekDays:s}=r.a;const[l,u,d,m,b]=null==e?void 0:e.split(" ");if(l&&u&&(E=60*(Number(u)||0)+(Number(l)||0)),!t)if(1==+d&&1==+m)n=c.c.ADVANCED,o=c.a.YEAR;else if("*"!==d)if("*"!==b)n=c.c.ADVANCED,i=2,o=c.a.WEEK,s=b.split(",").map(Number);else if("*"!==m){n=c.c.ADVANCED,o=c.a.MONTH;const e=m.split(",");i=+e[1]-+e[0]||1}else{const e=d.split(",");e.length>1?(n=c.c.ADVANCED,o=c.a.DAY,i=+e[1]-+e[0]||1):(n=c.c.MONTHLY,a=+d)}else"*"!==b?("*"!==d?(n=c.c.ADVANCED,i=2,o=c.a.WEEK):n=c.c.WEEKLY,s=b.split(",").map(Number)):n=c.c.DAILY;return{dayInMonth:a,repeat:n,repeatEveryCount:i,repeatEveryPeriod:o,startTime:E,weekDays:s}},o=(...e)=>e.map(e=>null!=e?e:"*").join(" "),E=({dayInMonth:e,repeat:t,repeatEveryCount:a,repeatEveryPeriod:r,startTime:i,weekDays:E})=>{const s=Math.floor(i/60),l=i%60;let u,d,m;switch(t){case c.c.NEVER:case c.c.DAILY:break;case c.c.WEEKLY:m=E.join(",");break;case c.c.MONTHLY:u=e;break;case c.c.ADVANCED:switch(r){case c.a.DAY:1!=+a&&(u=Object(n.a)(1,32,a).join(","));break;case c.a.WEEK:2==+a&&(u="1-7,15-21"),m=E.join(",");break;case c.a.MONTH:u=e,1!=+a&&(d=Object(n.a)(1,12,a).join(","));break;case c.a.YEAR:u=1,d=1}}return o(l,s,u,d,m)}}}]);