(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[32],{1961:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(127),r=a(299),i=a(337);const l={},o=e=>Object(r.b)(e,n.a.WIFI_MAN,i.a.WIFI_MAN,l),c=e=>Object(r.c)(e,n.a.WIFI_MAN),s=e=>Object(r.a)(e,n.a.WIFI_MAN)},1975:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return p}));var n=a(3),r=a(1862),i=a(2218),l=a(1765),o=a(2032),c=a(1961);const s=e=>({date:new Date(1e3*e.report_timestamp),...e}),m=e=>Object.values(Object(r.a)(e,"client_mac")).map(e=>Object(i.a)(e,({report_timestamp:e})=>e)),d=Object(n.a)(l.selectWifiManData,e=>e.map(e=>s(e))),u=Object(n.a)(l.selectWifiManData,c.c,c.a,(e,t,a)=>m(e.map(e=>s(e)).filter(e=>Object(o.c)(e,t)&&Object(o.a)(e,a)))),p=Object(n.a)(l.selectWifiManData,c.b,c.c,c.a,(e,t,a,n)=>m(e.map(e=>s(e)).filter(e=>Object(o.c)(e,a)&&Object(o.b)(e,t)&&Object(o.a)(e,n))))},1984:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),i=a(5),l=a(47),o=a(23),c=a(24);const s=Object(i.c)(c.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,m=Object(i.c)(l.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  white-space: nowrap;
`;function d({filterCount:e=0,filterTitleLabel:t="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return r.a.createElement(s,{alignItems:"center"},r.a.createElement(o.T,null),r.a.createElement(m,{message:t,values:{count:e}}))}},1985:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n={success:{lo:80,hi:100,within:!0},warning:{lo:60,hi:80,within:!0},danger:{lo:0,hi:60,within:!0}},r=[{id:"1D",label:"1D",value:24,isDefault:!0},{id:"5D",label:"5D",value:120},{id:"1M",label:"1M",value:720}]},1994:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return L})),a.d(t,"b",(function(){return w})),a.d(t,"f",(function(){return C})),a.d(t,"g",(function(){return k})),a.d(t,"h",(function(){return R})),a.d(t,"e",(function(){return O})),a.d(t,"d",(function(){return y}));var n=a(0),r=a.n(n),i=a(5),l=a(1925),o=a(24);const c=Object(i.c)(o.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,s=Object(i.c)(l.a)`
  bottom: -1px;
`;var m=({isLoading:e,children:t,...a})=>r.a.createElement(c,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,r.a.createElement(s,{isLoading:e,placement:"bottom"})),d=a(8),u=a(2003),p=a(803),g=a(2014),b=a(4),h=a(49),f=a(2009);const E=Object(i.c)(f.a)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var O=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...r})=>({id:e,label:t,disabled:"function"==typeof a?a(r):a,path:n})),[e]);return t?r.a.createElement(E,{selectedTabBold:!0,items:t}):null},x=a(1984),v=a(170);var w=Object(i.c)(v.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const j=Object(i.c)(w)`
  z-index: 5;
`;var y=({filterCount:e,filterTitleLabel:t,items:a})=>{const n=Object(d.useDispatch)();return r.a.createElement(o.a,{height:"100%"},r.a.createElement(j,{onClick:()=>n(Object(p.b)(!0))},r.a.createElement(x.a,{filterCount:e,filterTitleLabel:t})),a)};const S=Object(i.c)(h.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
`;var T=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterCount:i,filterTitleLabel:l,items:c,title:s})=>{const d=(null==e?void 0:e.length)>1,u=!d&&1===e.length;return r.a.createElement(m,{isLoading:a},!t&&r.a.createElement(y,{filterCount:i,filterTitleLabel:l,items:c}),d&&r.a.createElement(O,{routes:e}),u&&r.a.createElement(S,{weight:"bold"},e[0].label),s&&r.a.createElement(S,{weight:"bold",hideFilterButton:t},r.a.createElement(b.c,{id:s})),r.a.createElement(o.a,{height:"100%",flex:d||s||u?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var L=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:i,filterCount:l,filterFooter:o,renderFilterDrawerContent:c,noFilterDrawerStyledContent:s,filterTitleLabel:m,items:b,title:h})=>{const f=Object(d.useDispatch)(),E=Object(d.useSelector)(u.a);return Object(n.useEffect)(()=>()=>{f(Object(p.b)(!1))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{isOpen:E,filterCount:l,filterTitleLabel:m,noStyledContainer:s,onClose:()=>f(Object(p.b)(!1)),renderFilterDrawerContent:()=>c(E),renderFooter:()=>o}),r.a.createElement(T,{routes:e,hideFilterButton:t,isLoading:a,filterCount:l,filterTitleLabel:m,items:b,title:h},i))},_=a(1935);var C=Object(i.c)(_.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var k=Object(i.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`,D=a(1837);const N=i.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,P=i.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function R(e){return r.a.createElement(D.a,Object.assign({className:N,tabClassName:P},e))}},2003:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen}},2009:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(31),l=a(1837);t.a=({items:e,...t})=>{const{params:a,path:n}=Object(i.n)(),o=Object(i.l)(),c=Object(i.k)(),s=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,o);return r.a.createElement(l.a,Object.assign({tabs:e,selectedTab:null==s?void 0:s.id,onSelectTab:({path:e,params:t={}})=>c.push(Object(i.i)(e,{...a,...t}))},t))}},2014:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),l=a(1926),o=a(24),c=a(1984);const s=Object(i.c)(l.a)`
  width: 260px !important;
`,m=Object(i.c)("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({theme:e})=>e.space[3]+"px 24px"};
  overflow: auto;
`,d=Object(i.c)("div")`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 38px 24px;
  flex: none;
`;t.a=({filterCount:e,filterTitleLabel:t,isOpen:a,noStyledContainer:n,onClose:i,renderFilterDrawerContent:l,renderFooter:u})=>{const p=l(),g=n?p:r.a.createElement(m,null,p);return r.a.createElement("div",null,r.a.createElement(s,{in:a,header:r.a.createElement(c.a,{filterCount:e,filterTitleLabel:t}),headerScale:"small",onClose:i,side:"left"},a&&r.a.createElement(o.a,{flex:1,flexDirection:"column",height:"100%"},g,u&&r.a.createElement(d,null,u()))))}},2031:function(e,t,a){"use strict";var n=a(1975);a.d(t,"a",(function(){return n.a})),a.d(t,"b",(function(){return n.b})),a.d(t,"c",(function(){return n.c}));var r=a(1961);a.d(t,"d",(function(){return r.b}))},2032:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(62),r=a(292),i=a(1985);const l=(e,t)=>{if(void 0!==t&&""!==t){const a=t.toLowerCase().trim();return["client_model","client_name","device_model","device_name","isp_name","public_ip","wlan_essid"].some(t=>{var n,r;return null===(r=null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.toLowerCase)||void 0===r?void 0:r.call(n).includes(a)})}return!0},o=(e,t)=>Object.keys(t).every(a=>{switch(a){case"experience":return!t.experience.length||t.experience.some(t=>{const a=i.b[t];return Object(r.e)(a,e.client_wifi_experience)});default:return Object(n.a)(t[a])?t[a].includes(e[a]):void 0===e[a]||e[a]===t[a]}}),c=(e,t)=>{if(t){return(Date.now()/1e3-e.report_timestamp)/3600<=t}return!0}},2531:function(e,t,a){e.exports=a.p+"../images/f1810d16bd0ce70800a4e99a7aacfb7c.png"},2532:function(e,t,a){e.exports=a.p+"../images/9b79c5e098915662f9d35a24c5221009.png"},2886:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),i=a.n(r),l=a(31),o=a(95),c=a(64),s=a(354),m=a(2),d=a(77),u=a(13),p=a(232),g=a(241),b=a(1994),h=a(1761),f=a(170),E=a(2259),O=a(829),x=a(4),v=a(5),w=a(825),j=a(695),y=a(687);const S=Object(v.c)(o.p)`
  font-weight: bold;
  color: ${({theme:e})=>e.motifPalette.text01};
  margin-bottom: ${({theme:e})=>e.spacing["spacing-m"]};
  display: block;
`,T=Object(v.c)(o.p)`
  font-size: 14px;
  line-height: 24px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,L=Object(v.c)(h.a)`
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 15px;

  label {
    margin-left: 0;
  }
`,_=Object(v.c)("div")`
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,C=({updateTopologyViewSettings:e})=>{const t=Object(n.useSelector)(w.b),a=Object(n.useSelector)(w.c);return i.a.createElement(o.g,{alignItems:"center",justifyContent:"space-between"},i.a.createElement(o.p,null,i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_VISIBLE_OF",values:{visible:a,total:t}})),i.a.createElement(f.a,{variant:"link",onClick:()=>e(O.b.topologyViewSettings)},i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_RESET_ALL"})))},k=({topologyViewSettings:e,updateTopologyViewSettings:t})=>{const{showAllClients:a,show2GClients:n,show5GClients:r,showSSID:l,showWifiExperience:c,showRadioChannel:s,showWifiStandards:m,showWiredPorts:d,showWiredSpeed:u}=e;return i.a.createElement(o.g,{flexDirection:"column",padding:"16px 24px 0",height:"100%"},i.a.createElement(L,{checked:a,onChange:()=>{t(a?{...e,showAllClients:!1,show2GClients:!1,show5GClients:!1}:{...e,showAllClients:!0,show2GClients:!0,show5GClients:!0})},id:"showAllClients"},i.a.createElement(T,null,i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_TOGGLE_LABEL"}))),i.a.createElement(E.a,{spacing:"condensed",items:[{full:!0,id:"show2GClients",checked:n,disabled:!a,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_2G_CLIENTS"}),onChange:()=>t({...e,show2GClients:!n})},{full:!0,id:"show5GClients",checked:r,disabled:!a,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_5G_CLIENTS"}),onChange:()=>t({...e,show5GClients:!r})}]}),i.a.createElement(_,null),i.a.createElement(S,null,i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRELESS"})),i.a.createElement(E.a,{spacing:"condensed",items:[{full:!0,id:"showSSID",checked:l,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_SSID"}),onChange:()=>t({...e,showSSID:!l})},{full:!0,id:"showWifiExperience",checked:c,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_EXPERIENCE"}),onChange:()=>t({...e,showWifiExperience:!c})},{full:!0,id:"showRadioChannel",checked:s,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_RADIO_CHANNEL"}),onChange:()=>t({...e,showRadioChannel:!s})},{full:!0,id:"showWifiStandards",checked:m,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_WIFI_STANDARDS"}),onChange:()=>t({...e,showWifiStandards:!m})}]}),i.a.createElement(S,null,i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_CAPTION_WIRED"})),i.a.createElement(E.a,{spacing:"condensed",items:[{full:!0,id:"showWiredSpeed",checked:u,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_SPEED"}),onChange:()=>t({...e,showWiredSpeed:!u})},{full:!0,id:"showWiredPorts",checked:d,children:i.a.createElement(x.c,{id:"TOPOLOGY_FILTER_SHOW_WIRED_PORTS"}),onChange:()=>t({...e,showWiredPorts:!d})}]}),i.a.createElement(_,{style:{marginTop:"auto",marginBottom:0}}))},D=Object(v.c)("div")`
  .base-control-panel {
    position: fixed;
    left: 0;
    right: 0;
    background: ${({theme:e})=>e.motifPalette.uiBase};
    z-index: 11;
  }

  @media ${y.a.VIEWPORT_S_UP} {
    .base-control-panel {
      left: 50px;
    }
  }
`;var N=e=>{const{routes:t,updateTopologyViewSettings:a}=e,n=j.a.isSafari?D:i.a.Fragment;return i.a.createElement(n,null,i.a.createElement(b.c,{filterTitleLabel:"TOPOLOGY_FILTER_BUTTON_LABEL",filterCount:0,isLoading:!1,noFilterDrawerStyledContent:!0,routes:t,filterFooter:i.a.createElement(C,{updateTopologyViewSettings:a}),renderFilterDrawerContent:()=>i.a.createElement(k,Object.assign({},e))}))},P=a(49),R=a(40),I=a(2531),$=a.n(I),M=a(2532),G=a.n(M),F=a(159);const W=Object(v.c)("h2")`
  color: ${({theme:e})=>e.motifPalette.text01};
  margin: ${({theme:e})=>`${e.spacing["spacing-m"]} 0 ${e.spacing["spacing-xxl"]}`};
  font-size: 24px;
`,A=Object(v.c)(P.a)`
  color: ${({theme:e})=>e.motifPalette.text01};
  font-size: ${({theme:e})=>e.fontSize["font-size-l2"]};
  line-height: 1.7;
  text-align: center;

  a {
    text-decoration: underline;
  }
`,z=Object(v.c)("div")`
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
`,Y=Object(v.c)("div")`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
`,B=Object(v.c)("img")`
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,U=Object(v.c)("a")`
  font-weight: bold;
`,V=Object(v.c)(o.g)`
  margin-top: ${j.a.isSafari?"50px":"0"};
`;var H=()=>{const e=Object(l.k)(),t=Object(c.h)("system"),{motif:a}=Object(R.a)(),n=Object(r.useCallback)(()=>e.push(t),[e,t]);return i.a.createElement(V,{flexDirection:"column",alignItems:"center"},i.a.createElement(z,null,i.a.createElement(Y,null,i.a.createElement(B,{src:"light"===a?$.a:G.a,alt:"No floorplan available"}))),i.a.createElement(W,null,i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_TITLE"})),i.a.createElement(o.g,{marginBottom:16,flexDirection:"column"},i.a.createElement(A,null,i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_1"})),i.a.createElement(A,null,i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_2"})),i.a.createElement(A,null,i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_SENTENCE_3"}),i.a.createElement("a",{href:F.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_DESIGN_URL"})))),i.a.createElement(o.g,{marginBottom:16},i.a.createElement(f.a,{variant:"primary",onClick:n,motif:"dark"},i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_SETTINGS_LINK"}))),i.a.createElement(o.g,null,i.a.createElement(U,{href:F.a.uiDesign,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(x.c,{id:"TOPOLOGY_FLOORPLAN_VISIT_LINK"}))))},X=a(2827),K=a(1133),Z=a(808),J=a(826);const Q=(e,t)=>{const a=t.find(t=>t.downlinkMac===e);return null==a?void 0:a.uplinkMac},q=e=>({id:"invisibleNodeName",name:"invisibleNodeName",mac:"invisibleNodeMac",type:"invisibleNodeType",parentMac:void 0,children:e.map(e=>({...e,parentMac:"invisibleNodeMac"}))}),ee=(e,t,a,n)=>{if(n&&t&&a)return e;const{edges:r,vertices:i}=e,[l,o,c]=(e=>e.reduce((e,{type:t,radioBand:a,downlinkMac:n})=>(t===J.a.WIRELESS?(a===J.b.GHZ2&&e[0].add(n),a===J.b.GHZ5&&e[1].add(n)):e[2].add(n),e),[new Set,new Set,new Set]))(r),s=i.filter(e=>"DEVICE"===e.type||"invisibleNode"===e.type||n&&c.has(e.mac)||n&&t&&l.has(e.mac)||n&&a&&o.has(e.mac));return{...e,vertices:s}};var te=a(2860),ae=a(2825),ne=a(2861),re=a(2858),ie=a(1185),le=a(1202),oe=a(2831),ce=a(2111),se=a(1122),me=a(146),de=a(41),ue=a(1197),pe=a(23),ge=a(292),be=a(792),he=a(537),fe=a(113),Ee=a(2097),Oe=a(2048),xe=a(76),ve=a(2174),we=a(2026),je=a(2069),ye=a(811),Se=a(2098),Te=a(2057),Le=a(2034),_e=a(2099),Ce=a(2101),ke=a(2102),De=a(2100),Ne=a(2103),Pe=a(2115),Re=a(2118),Ie={[be.a.STA]:je.a,[be.a.UGW]:Se.a,[be.a.USW]:we.a,[be.a.UAP]:Te.a,[be.a.UAP6MP]:Re.a,[be.a.UDM]:Le.a,[be.a.UDMPRO]:Le.a,[be.a.UAP_USW]:Te.a,[be.a.UBB]:_e.a,[be.a.USPP]:De.a,[be.a.USPS]:Ce.a,[be.a.USPPDUP]:ke.a,[be.a.USAGGPRO]:Ne.a,[be.a.LTE]:Pe.a,[be.a.UXG]:Se.a,[be.a.UAP_IW]:Te.a,[be.a.USL8MP]:we.a};const $e=Object(v.c)(fe.c)`
  display: block;
  height: ${42}px;
  width: ${100}px;
  object-fit: contain;
  margin: 0 auto;

  img {
    width: auto;
  }
`,Me=Object(v.c)(he.a)`
  // !important needed to override default styling of fallback images
  display: block;
  height: ${42}px !important;
  width: ${100}px !important;
  object-fit: contain !important;
  margin: 0 auto !important;
  padding: 0 !important;

  img {
    width: auto;
  }
`,Ge=({nodeData:e})=>{const{data:t}=e,a=Object(n.useSelector)(Object(d.selectClientData)(t.mac));return i.a.createElement(Me,{grid:!0,client:a})},Fe=Object(v.c)("div")`
  padding-top: 8px;
  border-top: 1px solid ${de.a["white-7"]};
  text-align: center;

  & * {
    justify-content: center;
  }
`,We=Object(v.c)("div")`
  width: ${100}px;
  /** +40px will help won't cover top & bottom texts */
  height: ${82}px;
`,Ae=({children:e,triggerTooltipRerender:t})=>{const[a,n]=Object(r.useState)(!1);return t.current=()=>n(e=>!e),Object(r.useEffect)(()=>()=>{t.current=null},[t]),i.a.createElement(ue.a,{tooltipClassName:"topology-tooltip",portal:!0,position:"top",width:248,isHoverable:!1,isInteractive:!0,message:e},i.a.createElement(We,null))},ze=({nodeData:e,triggerTooltipRerender:t})=>{const{data:a}=e,r=Object(n.useSelector)(Object(Oe.c)(a.mac));return i.a.createElement(Ae,{triggerTooltipRerender:t},i.a.createElement(je.a,{activeItem:r,hideUplink:!0}),(null==r?void 0:r.experienceKnown)&&i.a.createElement(Fe,null,i.a.createElement(ve.a,{item:r,itemType:"client",message:"COMMON_REPORT_WIFI_SCORE_NOT_ACCURATE"})))},Ye=({nodeData:e})=>{const{data:t}=e,a=(({mac:e,internalChildren:t,model:a})=>{if("UBB"!==a)return e;if(t){const e=t.find(e=>"UBB"===e.model);if(e)return e.mac}return e})(t),r=Object(n.useSelector)(e=>Object(Z.j)(e,a)),{satisfaction:l}=r,o=Object(Ee.a)(r,be.b.DEVICE),c=Object(xe.b)(r,20),s={...r,name:c},m=Ie[o],d=Object(ge.c)(l),u=(e=>e===be.a.UDM||e===be.a.UAP||e===be.a.UAP_USW||e===be.a.UAP_IW)(o);return o===be.a.USW||o===be.a.USL8MP?i.a.createElement(we.a,{switchDeviceData:s}):i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{activeItem:s}),d&&u&&i.a.createElement(Fe,null,i.a.createElement(ve.a,{item:s,itemType:"ap",message:"COMMON_REPORT_WIFI_SCORE_NOT_ACCURATE"})))},Be=({nodeData:e,triggerTooltipRerender:t})=>i.a.createElement(Ae,{triggerTooltipRerender:t},i.a.createElement(Ye,{nodeData:e})),Ue=({nodeData:e,triggerTooltipRerender:t})=>{const{data:a,x:l,y:o}=e,c=Object(n.useDispatch)(),s=Object(r.useRef)(null);return Object(r.useEffect)(()=>{function e(e){const t=document.querySelector(".topology-tooltip");(null==s?void 0:s.current)&&!(null==t?void 0:t.contains(e.target))&&c(Object(se.c)({nodeData:null}))}return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[c]),i.a.createElement("g",{style:{cursor:"inherit"},transform:`translate(${o},${l})`},i.a.createElement("foreignObject",{ref:s,width:100,height:52,x:-50,y:-31,style:{overflow:"visible"}},"DEVICE"===a.type?i.a.createElement(Be,{nodeData:e,triggerTooltipRerender:t}):i.a.createElement(ze,{nodeData:e,triggerTooltipRerender:t})))},Ve=({nodeData:e})=>{var t;const{data:a}=e;return"DEVICE"===a.type?i.a.createElement($e,{filesMap:"TOPOLOGY",device:{model:a.model,type:null===(t=me.deviceModels[a.model])||void 0===t?void 0:t.type}}):i.a.createElement(Ge,{nodeData:e})},He=Object(v.c)(o.g)`
  /* Helps with safari bug*/
  position: fixed;
  white-space: nowrap;
  transform: translate(-50%, -100%) scale(var(--d3-zoom-scale));
  transform-origin: bottom center;
  color: ${({theme:e})=>e.motifPalette.text01};
`,Xe=({wifiRadios:e})=>i.a.createElement("foreignObject",{x:0,y:-22,width:"1",height:"1",style:{overflow:"visible"}},i.a.createElement(He,{alignItems:"center",center:!0},i.a.createElement(pe.Db,null),i.a.createElement(P.a,{style:{marginLeft:4}},e.map(({protocol:e,channel:t})=>`${t} (${e.toUpperCase()})`).join(", ")))),Ke=Object(v.c)("g")`
  cursor: pointer;

  text {
    fill: ${({theme:e})=>e.motifPalette.text01};
    transition: fill 0.2s linear;
    font-weight: bold;
  }

  &:hover {
    text {
      fill: ${de.a["blue-3"]};
    }
  }
`,Ze=Object(v.c)("text")`
  fill: ${({experienceState:e})=>de.a["color-"+e]} !important;
`;function Je(e,t=!1){var a,n;const{x:r,y:i,parent:l}=e;if(t){const e=null!==(a=null==l?void 0:l.x)&&void 0!==a?a:0;return`translate(${null!==(n=null==l?void 0:l.y)&&void 0!==n?n:0},${e})`}return`translate(${i},${r})`}var Qe=({nodeData:e,experienceScore:t,onClick:a,transitionDuration:l,...o})=>{var c,s;const[m]=Object(r.useState)(Je(e,!0)),[d]=Object(r.useState)({opacity:0}),p=Object(r.useRef)(null),g=Object(r.useRef)(!0),b=Object(r.useRef)(!0),{showWifiExperience:h,showRadioChannel:f}=Object(n.useSelector)(u.K),E=Object(n.useDispatch)(),{x:O,y:x}=e,v=(e,t,a=1)=>{Object(re.a)(p.current).transition().duration(t).attr("transform",e).style("opacity",a).on("end",()=>{b.current=!1})};Object(r.useEffect)(()=>{g.current?g.current=!1:v(`translate(${x},${O})`,l,1)},[O,x,l]);const w=(null===(s=null===(c=null==e?void 0:e.data)||void 0===c?void 0:c.internalChildren)||void 0===s?void 0:s.length)>0;return"invisibleNodeType"===e.data.type?null:i.a.createElement(le.a,Object.assign({},o,{timeout:{enter:l,exit:l},onExit:()=>{((e,t)=>{const a=Je(e,!0);v(a,t,0)})(e,l)},onEnter:()=>{((e,t)=>{const a=Je(e);v(a,t,1)})(e,l)},unmountOnExit:!0,mountOnEnter:!0}),i.a.createElement("g",{id:e.data.id,ref:p,style:{...d,cursor:"inherit"},transform:m},e.data.wifiRadios&&f&&i.a.createElement(Xe,{wifiRadios:e.data.wifiRadios}),i.a.createElement("foreignObject",{width:100,height:42,x:-50,y:-21,style:{overflow:"visible",cursor:w?"pointer":"inherit"},onClick:t=>a(e.data.id,t)},i.a.createElement(Ve,{nodeData:e})),i.a.createElement(Ke,{onClick:()=>E(Object(se.c)({nodeData:e}))},i.a.createElement("text",{y:42*.85,textAnchor:"middle"},e.data.name&&Object(ye.a)(e.data.name)||e.data.mac),t&&h&&i.a.createElement(Ze,{y:42*.85+16,textAnchor:"middle",experienceState:Object(ge.b)(t)},t," %"))))},qe=a(2859);const et=Object(v.c)("path")`
  stroke: ${e=>(({type:e,radioBand:t})=>e===J.a.WIRELESS&&t===J.b.GHZ2?de.a["blue-light-4"]:de.a["blue-3"])(e)};
  stroke-width: 1.5;
  fill: none;
  stroke-dasharray: ${({type:e})=>e===J.a.WIRELESS?5:0};
`,tt=Object(v.c)("span")``,at=Object(v.c)("div")`
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  // This is to help with foreignObject issues in Safari. Without "fixed", the objects will
  // move to the top left of the page. We need the static positioning for LabelCalipers
  // component to measure correctly the label width before layouting the tree.
  position: ${({measuring:e})=>e?"static":"fixed"};
  color: ${({theme:e})=>e.motifPalette.text01};
`,nt=Object(v.c)(pe.Zb)`
  path {
    fill: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`,rt=({transform:e,children:t})=>i.a.createElement("g",{transform:e},i.a.createElement("foreignObject",{x:0,y:0,width:"1",height:"1",style:{overflow:"visible"}},t)),it=({protocol:e})=>{if(!(e=>e===J.c.A||e===J.c.B||e===J.c.G)(e)){if(e===J.c.NA||e===J.c.NG)return i.a.createElement(pe.tc,null);if(e===J.c.AC||e===J.c.AD)return i.a.createElement(pe.uc,null);if(e===J.c.AX)return i.a.createElement(pe.vc,null)}return null},lt=({networkData:e,measuring:t=!1})=>{const{protocol:a}=e;return i.a.createElement(at,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},i.a.createElement(it,{protocol:a}),i.a.createElement(tt,{style:{marginLeft:4}},a.toUpperCase()))},ot=({networkData:e,target:t})=>i.a.createElement(rt,{transform:`translate(${t.y-50-32}, ${t.x-8})`},i.a.createElement(lt,{networkData:e})),ct=({essid:e,measuring:t=!1})=>{const a=e.length>14?e.substring(0,12).concat("..."):e;return i.a.createElement(at,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingLeft:16,transformOrigin:"right top"},measuring:t},i.a.createElement(pe.xc,null),i.a.createElement(tt,{style:{marginLeft:4}},a))},st=({essid:e,target:t})=>i.a.createElement(rt,{transform:`translate(${t.y-50-32}, ${t.x+8})`},i.a.createElement(ct,{essid:e})),mt=({uplinkPortNumber:e,style:t,measuring:a=!1})=>{const n=null==t?void 0:t.transform;return i.a.createElement(at,{style:{...t,transform:n+" scale(var(--d3-zoom-scale))"},measuring:a},i.a.createElement(pe.i,{size:"small"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8,marginRight:3}}),i.a.createElement(tt,null,e))},dt=({downlinkPortNumber:e,measuring:t=!1})=>i.a.createElement(at,{style:{transform:"translate(-100%,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"bottom right"},measuring:t},i.a.createElement(pe.j,{size:"small"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8,marginRight:3}}),i.a.createElement(tt,null,e)),ut=({measuring:e=!1})=>i.a.createElement(at,{style:{transform:"translate(0,-100%) scale(var(--d3-zoom-scale))",transformOrigin:"left bottom"},measuring:e},i.a.createElement(pe.m,{width:"10",height:"10"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8}})),pt=({rateMbps:e,measuring:t=!1})=>i.a.createElement(at,{style:{transform:"translate(-100%,0) scale(var(--d3-zoom-scale))",paddingRight:32,transformOrigin:"right top"},measuring:t},i.a.createElement(nt,null),i.a.createElement(tt,{style:{marginLeft:4}},(e=>e<1e3?e+" MbE":e/1e3+" GbE")(e))),gt=({target:e,rateMbps:t})=>i.a.createElement(rt,{transform:`translate(${e.y-50}, ${e.x+8})`},i.a.createElement(pt,{rateMbps:t})),bt=({target:e,downlinkPortNumber:t})=>i.a.createElement(rt,{transform:`translate(${e.y-50}, ${e.x-8})`},i.a.createElement(dt,{downlinkPortNumber:t})),ht=({source:e,target:t,networkData:a})=>{var n;const{uplinkPortNumber:r}=a;if((null===(n=null==e?void 0:e.children)||void 0===n?void 0:n.length)>1){const n=a.downlinkMac===e.children[0].data.mac;return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(rt,{transform:`translate(${e.y+50}, ${e.x-8})`},i.a.createElement(ut,null)),i.a.createElement(rt,{transform:`translate(${e.y+(t.y-e.y)/2-8}, ${t.x-8})`},i.a.createElement(mt,{uplinkPortNumber:r,style:{transform:"translate(-100%,-100%)",transformOrigin:"bottom right"}})))}return i.a.createElement(rt,{transform:`translate(${e.y+50}, ${e.x-8})`},i.a.createElement(mt,{uplinkPortNumber:r,style:{transform:"translate(0,-100%)",transformOrigin:"bottom left"}}))},ft=({source:e,target:t,networkData:a})=>{const{downlinkPortNumber:r,uplinkPortNumber:l,rateMbps:o}=a,{showWiredSpeed:c,showWiredPorts:s}=Object(n.useSelector)(u.K);return r&&l?i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(bt,{target:t,downlinkPortNumber:r}),s&&i.a.createElement(ht,{source:e,target:t,networkData:a}),o&&c&&i.a.createElement(gt,{rateMbps:o,target:t})):l?i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(ht,{source:e,target:t,networkData:a}),o&&c&&i.a.createElement(gt,{rateMbps:o,target:t})):r?i.a.createElement(i.a.Fragment,null,s&&i.a.createElement(bt,{target:t,downlinkPortNumber:r}),o&&c&&i.a.createElement(gt,{rateMbps:o,target:t})):null},Et=({networkData:e,target:t})=>{const{essid:a,type:r,channel:l}=e,{showSSID:o,showWifiStandards:c}=Object(n.useSelector)(u.K),s=r===J.a.WIRELESS;return i.a.createElement(i.a.Fragment,null,s&&c&&l&&i.a.createElement(ot,{networkData:e,target:t}),s&&o&&a&&i.a.createElement(st,{essid:a,target:t}))},Ot=(e,t,a,n)=>{const r=t,i=e,l=n,o=a,c=r+(l-r)/2,s=Object(qe.a)();return s.moveTo(r,i),o!==i?(s.lineTo(c-16,i),o>i?(s.bezierCurveTo(c-8,i,c,i+8,c,i+16),s.lineTo(c,o-16),s.bezierCurveTo(c,o-8,c+8,o,c+16,o)):(s.bezierCurveTo(c-8,i,c,i-8,c,i-16),s.lineTo(c,o+16),s.bezierCurveTo(c,o+8,c+8,o,c+16,o))):(s.lineTo(c,i),s.bezierCurveTo(c,i,c,i,c,i),s.lineTo(c,o),s.bezierCurveTo(c,o,c,o,c,o)),s.lineTo(l,o),s.toString()};var xt=({transitionDuration:e,linkData:t,networkData:a,nextNodeListRef:n,prevNodeListRef:l,...o})=>{const[c]=Object(r.useState)({opacity:1}),s=Object(r.useRef)(null),m=Object(r.useRef)(null),d=Object(r.useRef)(!0),{source:u,target:p}=t;Object(r.useEffect)(()=>{d.current?d.current=!1:Object(re.a)(m.current).transition().duration(e).attr("d",()=>Ot(u.x,u.y,p.x,p.y))},[u.x,u.y,p.x,p.y,e]);const g=`pathId-${u.data.mac}-${p.data.mac}`;return i.a.createElement(le.a,Object.assign({},o,{timeout:{enter:e,exit:e},onExit:()=>{var t;const a=(null===(t=null==n?void 0:n.current)||void 0===t?void 0:t.find(e=>e.data.mac===u.data.mac))||u;Object(re.a)(s.current).transition().duration(e).style("opacity",0),Object(re.a)(m.current).transition().duration(e).attr("d",()=>Ot(a.x,a.y,a.x,a.y))},onEnter:()=>{var t;const a=(null===(t=null==l?void 0:l.current)||void 0===t?void 0:t.find(e=>e.data.mac===u.data.mac))||u;Object(re.a)(s.current).transition().duration(e).style("opacity",1),Object(re.a)(m.current).attr("d",Ot(a.x,a.y,a.x,a.y)).transition().duration(e).attr("d",()=>Ot(u.x,u.y,p.x,p.y))}}),i.a.createElement("g",{style:{...c},ref:s},i.a.createElement(et,{innerRef:m,id:g,type:a.type,radioBand:a.radioBand}),i.a.createElement(ft,{source:u,target:p,networkData:a}),i.a.createElement(Et,{target:p,networkData:a})))};const vt=Object(v.c)("div")`
  position: fixed;
  bottom: 36px;
  margin-left: 32px;

  .fitToScreenButton {
    border-radius: 4px;

    &:hover {
      box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);
    }
  }

  Button {
    border: 1px solid ${({theme:e})=>e.motifPalette.checkboxBorder};
    width: 36px;
    height: 36px;
    color: ${({theme:e})=>e.motifPalette.neutral08};

    &:focus {
      color: ${({theme:e})=>e.motifPalette.neutral10};
    }
  }

  .plus Button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .customGroup {
    border-radius: 4px;
    margin-top: 16px;
    position: relative;

    &:hover {
      box-shadow: 0px 4px 12px 0px rgb(0 0 0 / 15%);

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        transform: translateY(-1px);
      }
    }
  }

  .minus Button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }
`;var wt=({onZoomInClick:e,onZoomOutClick:t,onResetZoomClick:a})=>i.a.createElement(vt,null,i.a.createElement(f.a,{variant:"tertiary",Icon:pe.V,wrapClassName:"fitToScreenButton",onClick:a}),i.a.createElement("div",{className:"customGroup"},i.a.createElement(f.a,{variant:"tertiary",Icon:pe.wb,wrapClassName:"plus",onClick:e}),i.a.createElement(f.a,{variant:"tertiary",Icon:pe.kb,wrapClassName:"minus",onClick:t})));const jt=Object(v.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;

  cursor: move; // fallback if the grab cursor is not supported
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  /* d3-zoom-scale is used in safari to correctly scale transformed nodes
    inside foreignObject */
  .${"topology-svg-container"} {
    --d3-zoom-scale: 1;
  }
`,yt=(e,t,a,n)=>{const r="invisibleNodeType"===a[0].data.type?n:0,i=a.reduce((e,t)=>("invisibleNodeType"===t.data.type||(e.minX=Math.min(e.minX,t.x),e.maxX=Math.max(e.maxX,t.x),e.minY=Math.min(e.minY,t.y),e.maxY=Math.max(e.maxY,t.y)),e),{minX:0,maxX:0,minY:0,maxY:0}),l=i.maxX-i.minX+42+45,o=i.maxY-i.minY+100-r,c=Object(ce.a)().range([.3,2.5]).domain([.3,2.5]).clamp(!0);let s=Math.min(t/l,e/o);s=c(.8*s);return{x:(e-(i.maxY+r)*s)/2,y:Math.max(0,t/2-(i.minX+(l-42)/2)*s),k:s}},St=e=>(Array.isArray(e)?e:[e]).map(e=>(e.id=e.mac,(null==e?void 0:e.children)&&e.children.length>0&&(e.children=St(e.children),e.internalChildren=e.children),e)),Tt=(e,t)=>Object(ae.a)().scaleExtent([e.min,e.max]).on("zoom",t).filter(e=>!e.button&&"dblclick"!==e.type),Lt=e=>{const t=e.attr("stroke");e.attr("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)"),Object(ne.a)("nav").style("stroke","rgba(0,0,0,0)"===t?"rgba(255,255,255,0)":"rgba(0,0,0,0)")},_t=(e,t)=>{e.style("--d3-zoom-scale",t.toString())},Ct=(e,t,a)=>Math.min(Math.max(e,t),a),kt=(e,t,a)=>{const n=""+a.current,r=""+t;e.current.transition("zoom-out").styleTween("--d3-zoom-scale",()=>Object(ie.a)(n,r)).call(()=>Lt(e.current))},Dt=e=>({transition:`all ${e}ms cubic-bezier(0.25, 0, 0.25, 1)`,opacity:0,position:"absolute",left:"-50px"}),Nt={entered:{opacity:1,left:0}};var Pt=e=>{const{data:t,containerSize:a,nodeSize:l,transform:o,scaleExtent:c}=e,m=Object(r.useRef)(!0),d=Object(r.useRef)(!1),u=Object(n.useSelector)(se.b),p=Object(r.useRef)(null),g=Object(r.useRef)(o.k),b=Object(r.useRef)(),h=Object(n.useDispatch)(),{width:f,height:E}=a,{isSafari:O}=j.a,x=Object(r.useRef)(null),[v,w]=Object(r.useState)(new Set),[y,S]=Object(r.useState)(!1),T=St(t),L=Object(r.useRef)(null),_=Object(r.useRef)(null);Object(r.useEffect)(()=>{((e,t,a,n,r)=>{const{scaleExtent:i,transform:l}=e;a.current=Object(re.a)(".topology-svg-container");const o=Object(re.a)(".topology-g"),c=Tt(i,({transform:e})=>{n&&(Lt(a.current),_t(a.current,e.k),r.current=e.k),o.attr("transform",e.toString()),t.current&&t.current()});a.current.call(c).call(c.transform,ae.b.translate(l.x,l.y).scale(l.k))})(e,p,b,O,g)},[]);const C=({source:t,target:a})=>{const{edgeData:n}=e;return n.find(e=>e.uplinkMac===t.data.mac&&e.downlinkMac===a.data.mac)},k=({mac:t})=>{var a;const{edgeData:n}=e;return null===(a=n.find(e=>e.downlinkMac===t))||void 0===a?void 0:a.experienceScore},D=(t,a)=>{const{transitionDuration:n}=e;if(a.persist(),!d.current){if(v.has(t)){const e=new Set(v);e.delete(t),d.current=!0,w(e)}else{const e=new Set(v);e.add(t),d.current=!0,w(e)}setTimeout(()=>{d.current=!1,O&&Lt(b.current)},n+10)}},{nodes:N,links:P}=(()=>{const{separation:t,nodeSize:a}=e,n=Object(te.a)().nodeSize([a.y,a.x]).separation((e,a)=>{var n,r;return(null===(n=null==e?void 0:e.parent)||void 0===n?void 0:n.id)===(null===(r=null==a?void 0:a.parent)||void 0===r?void 0:r.id)?t.siblings:t.nonSiblings})(Object(X.b)(T[0],e=>e.id&&v.has(e.id)?null:e.internalChildren)),r=n.descendants();m.current||(_.current=[...L.current]),L.current=[...r];return{nodes:r,links:n.links().filter(e=>"invisibleNodeMac"!==e.source.data.mac)}})(),{transitionDuration:R}=e;return Object(r.useEffect)(()=>{const e="invisibleNodeType"===N[0].data.type?1:0;h(Object(s.e)({visibleNodes:N.length-e}))}),Object(r.useEffect)(()=>{O&&Lt(b.current)}),Object(r.useEffect)(()=>{if(j.a.isSafari){const e=Object(re.a)(".topology-g"),t=Object(re.a)(".topology-svg-container"),a=Tt(c,({transform:t})=>{e.attr("transform",t.toString()),_t(b.current,t.k),Lt(b.current),g.current=t.k,p.current&&p.current()}),n=e=>{e.preventDefault();const n=e.scale-x.current;if(x.current&&Math.abs(n)>.085){const r=1+n,i=Ct(g.current*r,c.min,c.max);t.call(a.scaleTo,i),x.current=e.scale}},r=e=>{e.preventDefault(),x.current=e.scale},i=e=>{e.preventDefault(),x.current=null};return document.addEventListener("gesturestart",r),document.addEventListener("gesturechange",n),document.addEventListener("gestureend",i),()=>{document.removeEventListener("gesturestart",r),document.removeEventListener("gesturechange",n),document.removeEventListener("gestureend",i)}}return()=>{}},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(le.a,{in:!0,appear:!0,timeout:0},e=>("entered"!==e||y||S(!0),i.a.createElement(jt,{style:{...Dt(R),...Nt[e]}},i.a.createElement("svg",{className:"topology-svg-container",width:f+"px",height:E+"px",strokeWidth:0,style:{position:"absolute"}},i.a.createElement("rect",{x:0,y:0,width:"100%",height:"100%",fill:"transparent"}),i.a.createElement("g",{className:"topology-g",strokeWidth:0},i.a.createElement(oe.a,{appear:!0,exit:!0,component:null},P.map(e=>i.a.createElement(xt,{key:`${e.source.data.id}-${e.target.data.id}`,nextNodeListRef:L,prevNodeListRef:_,linkData:e,networkData:C(e),transitionDuration:y?R:0}))),i.a.createElement(oe.a,{appear:!0,exit:!0,component:null},N.map(e=>i.a.createElement(Qe,{key:e.data.id,transitionDuration:y?R:0,experienceScore:k(e.data),nodeData:e,onClick:D}))),u&&i.a.createElement(Ue,{nodeData:u,triggerTooltipRerender:p})))))),i.a.createElement(wt,{onZoomInClick:()=>(()=>{const{scaleExtent:t}=e,a=Object(re.a)(".topology-g"),n=Object(re.a)(".topology-svg-container"),r=Tt(t,({transform:e})=>{a.attr("transform",e.toString()),g.current=e.k});if(n.transition().call(r.scaleBy,1.25),O){const e=Ct(1.25*g.current,t.min,t.max);kt(b,e,g)}})(),onZoomOutClick:()=>(()=>{const{scaleExtent:t}=e,a=Object(re.a)(".topology-g"),n=Object(re.a)(".topology-svg-container"),r=Tt(t,({transform:e})=>{a.attr("transform",e.toString()),g.current=e.k});if(n.transition().call(r.scaleBy,.75).on("end",()=>O&&Lt(b.current)),O){const e=Ct(.75*g.current,t.min,t.max);kt(b,e,g)}})(),onResetZoomClick:()=>(t=>{const a=yt(f,E,t,l.x),{scaleExtent:n}=e,r=Object(re.a)(".topology-g"),i=Object(re.a)(".topology-svg-container"),o=Tt(n,({transform:e})=>{r.attr("transform",e.toString()),g.current=e.k});i.transition().call(o.transform,ae.b.translate(a.x,a.y).scale(a.k)).on("end",()=>O&&Lt(b.current)),O&&kt(b,a.k,g)})(N)}))};const Rt=Object(v.c)(o.g)`
  align-items: center;
  margin-left: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
  font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
  color: ${({theme:e})=>e.motifPalette.text01};

  &:first-child {
    margin-left: 0;
  }
`,It=Object(v.c)(Rt)`
  font-weight: bold;
`,$t=Object(v.c)("span")`
  margin-left: ${({theme:e})=>e.spacing["spacing-s"]};
`,Mt=()=>i.a.createElement("svg",{width:"20",height:"2",viewBox:"0 0 18 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M0 1H18",stroke:"#006FFF"})),Gt=()=>i.a.createElement("svg",{width:"20",height:"2",viewBox:"0 0 18 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M0 1H18",stroke:"#006FFF",strokeDasharray:"3 3"})),Ft=Object(v.c)(o.g)`
  position: fixed;
  top: 101px;
  left: 50px;
  right: 0;
  z-index: 11;
  background-color: ${({theme:e})=>e.motifPalette.uiBase};
`;var Wt=()=>{const e=j.a.isSafari?Ft:o.g;return i.a.createElement(e,{alignItems:"center",justifyContent:"space-between",padding:"16px"},i.a.createElement(o.g,{alignItems:"center"},i.a.createElement(Rt,null,i.a.createElement(o.g,{alignItems:"center"},i.a.createElement(pe.m,{width:"10",height:"10"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8}})),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_MULTIPLE_CONNECTIONS"}))),i.a.createElement(Rt,null,i.a.createElement(o.g,{alignItems:"center"},i.a.createElement(pe.i,{size:"small"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8,marginRight:3}}),"#"),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_UPLINK_CONNECTION"}))),i.a.createElement(Rt,null,i.a.createElement(o.g,{alignItems:"center"},i.a.createElement(pe.j,{size:"small"}),i.a.createElement(pe.M,{width:"14",height:"14",style:{marginLeft:8,marginRight:3}}),"#"),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_DOWNLINK_CONNECTION"})))),i.a.createElement(o.g,{alignItems:"center"},i.a.createElement(It,null,i.a.createElement(Mt,null),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_WIRED"}))),i.a.createElement(It,null,i.a.createElement(Gt,null),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_WIRELESS"}))),i.a.createElement(It,null,i.a.createElement(pe.Ab,{width:"20",height:"20",color:de.a["blue-light-4"]}),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_2G"}))),i.a.createElement(It,null,i.a.createElement(pe.Bb,{width:"20",height:"20",color:de.a["blue-3"]}),i.a.createElement($t,null,i.a.createElement(x.c,{id:"TOPOLOGY_LEGEND_5G"})))))};const At={siblings:1.5,nonSiblings:2},zt=Object(v.c)("div")`
  width: 100%;
  height: 100%;
  position: relative;

  @media ${y.a.VIEWPORT_S_UP} {
    margin-top: ${j.a.isSafari?"50px":0};
  }
`,Yt=({topologyData:e,topologyViewSettings:t,width:a,height:n,labelWidth:l})=>{const{showAllClients:o,show2GClients:c,show5GClients:s}=t,m=Object(r.useMemo)(()=>(({edges:e,vertices:t})=>{const a=[],n=t.map(t=>({...t,parentMac:Q(t.mac,e)})).filter(e=>void 0!==e),r=n.reduce((e,t)=>(e[t.mac]=t,e),{});return n.forEach(e=>{const t=r[e.parentMac];t?(t.children||(t.children=[])).push(e):a.push(e)}),a.length>1||0===a.length?q(a):a[0]})(ee(e,c,s,o)),[e,c,s,o]),[{nodeWidth:d,nodeHeight:u,transform:p}]=Object(r.useState)(()=>{const e=Object(X.b)(m),t="invisibleNodeType"===e.data.type?e.height-1:e.height,r=101+600/Math.max(Math.min(t,5),1),i=Math.max(r,2*(16+l+64));var o,c;const s=(o={x:i,y:80},c=At,Object(te.a)().nodeSize([o.y,o.x]).separation((e,t)=>{var a,n;return(null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a.id)===(null===(n=null==t?void 0:t.parent)||void 0===n?void 0:n.id)?c.siblings:c.nonSiblings}))(e).descendants();return{nodeWidth:i,nodeHeight:80,rootHeight:t,transform:yt(a,n,s,i)}});return i.a.createElement(Pt,{scaleExtent:{min:.3,max:2.5},data:m,edgeData:e.edges,separation:At,containerSize:{width:a,height:n},transitionDuration:400,transform:p,nodeSize:{x:d,y:u}})},Bt=Object(v.c)("div")`
  // Important to fixing caliper sizing. If nodes are only 1 level deep (no children) then the width
  // would be 0px as there are no labels. This fixes this issue without introducing any other ones.
  min-width: 1px;
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  top: -10000px;
  left: -10000px;
  visibility: hidden;
  user-select: none;
  z-index: -1000;
`,Ut=i.a.forwardRef((e,t)=>{const{topologyData:a}=e;return i.a.createElement(Bt,{innerRef:t},a.edges.map(e=>i.a.createElement(r.Fragment,{key:`${e.uplinkMac}-${e.downlinkMac}`},(e=>{const{type:t,rateMbps:a}=e;return t===J.a.WIRELESS?i.a.createElement(lt,{networkData:e,measuring:!0}):t===J.a.WIRED&&a?i.a.createElement(pt,{rateMbps:a,measuring:!0}):null})(e),(e=>{const{uplinkPortNumber:t,downlinkPortNumber:a,type:n,essid:r}=e;return n===J.a.WIRELESS&&r?i.a.createElement(ct,{essid:r,measuring:!0}):t&&a?i.a.createElement(i.a.Fragment,null,i.a.createElement(dt,{downlinkPortNumber:a,measuring:!0}),i.a.createElement(mt,{uplinkPortNumber:t,measuring:!0})):t?i.a.createElement(mt,{uplinkPortNumber:t,measuring:!0}):a?i.a.createElement(dt,{downlinkPortNumber:a,measuring:!0}):null})(e))))}),Vt=()=>i.a.createElement(K.a,null,i.a.createElement("style",null,'\n        #root > header {\n          position: fixed;\n          top: 0;\n        }\n        #root > main {\n          margin-top: 50px;\n        }\n        #root #app-main nav[class^="nav"] {\n          position: fixed;\n          top: 50px;\n          left: 0;\n          z-index: 12;\n        }\n        #root #app-main > div > .main-panel {\n          margin-left: 50px;\n        }\n    ')),Ht={updateTopologyViewSettings:u.Q};var Xt=Object(n.connect)(e=>({topologyData:Object(w.d)(e),topologyViewSettings:Object(u.K)(e),clients:Object(d.selectBasicClientsInfo)(e),devices:Object(Z.p)(e)}),Ht)(e=>{const{topologyData:t}=e,a=Object(r.useRef)(null),{width:n,height:l}=Object(c.j)(a),o=Object(r.useRef)(null),s=Object(c.j)(o);return i.a.createElement(i.a.Fragment,null,j.a.isSafari&&i.a.createElement(Vt,null),i.a.createElement(Ut,{topologyData:t,ref:o}),i.a.createElement(Wt,null),i.a.createElement(zt,{innerRef:a},a&&n&&l&&s.width&&i.a.createElement(Yt,Object.assign({width:n,height:l,labelWidth:s.width},e))))}),Kt=[{id:"topology",label:i.a.createElement(x.c,{id:"TOPOLOGY_SECTION_TOPOLOGY"}),path:"map",component:i.a.createElement(Xt,null)},{id:"floorplan",label:i.a.createElement(x.c,{id:"TOPOLOGY_SECTION_FLOORPLAN"}),path:"floorplan",component:i.a.createElement(H,null)}],Zt=a(769),Jt=a(69);const Qt={updateTopologyViewSettings:u.Q},qt=Object(n.connect)(e=>({topologyViewSettings:Object(u.K)(e),site:Object(Jt.a)(e)}),Qt)(({topologyViewSettings:e,updateTopologyViewSettings:t,site:a,match:c})=>{const{path:s}=c,m=Object(l.i)(s,{site:a})+"/map",d=Object(n.useDispatch)();return Object(r.useEffect)(()=>()=>{d(Object(Zt.d)())},[d]),i.a.createElement(o.j,null,i.a.createElement(N,{routes:Kt,topologyViewSettings:e,updateTopologyViewSettings:t}),i.a.createElement(l.g,null,Object.values(Kt).map(({id:e,path:t,component:a})=>i.a.createElement(g.a,{key:e,path:`${s}/${t}`,render:()=>a})),i.a.createElement(g.a,{path:s,exact:!0},i.a.createElement(l.c,{to:m}))))});t.default=e=>Object(c.e)([Object(s.c)(),Object(d.fetchClients)(void 0,{crudCacheStrategy:{type:m.a.CACHE}}),Object(p.c)("topology"),Object(p.c)("devices"),Object(p.c)("clients"),Object(Zt.c)()],i.a.createElement(qt,Object.assign({},e)),{trackingName:"topology"})}}]);