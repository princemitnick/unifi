(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[30],{1984:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(5),c=a(47),l=a(23),o=a(24);const s=Object(i.c)(o.a)`
  color: ${({theme:e})=>e.colors.subtlerText};
`,d=Object(i.c)(c.a)`
  margin-left: ${({theme:e})=>e.space[3]}px;
  white-space: nowrap;
`;function p({filterCount:e=0,filterTitleLabel:t="COMMON_CONTROL_PANEL_FILTER_TITLE"}){return r.a.createElement(s,{alignItems:"center"},r.a.createElement(l.T,null),r.a.createElement(d,{message:t,values:{count:e}}))}},1994:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return w})),a.d(t,"b",(function(){return j})),a.d(t,"f",(function(){return F})),a.d(t,"g",(function(){return k})),a.d(t,"h",(function(){return R})),a.d(t,"e",(function(){return E})),a.d(t,"d",(function(){return C}));var n=a(0),r=a.n(n),i=a(5),c=a(1925),l=a(24);const o=Object(i.c)(l.a)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme:e})=>e.space[4]}px;
  border-bottom: 1px ${({theme:e})=>e.colors.border} solid;
  height: 50px;
  box-sizing: content-box;
`,s=Object(i.c)(c.a)`
  bottom: -1px;
`;var d=({isLoading:e,children:t,...a})=>r.a.createElement(o,Object.assign({},a,{flex:"none",className:"base-control-panel"}),t,r.a.createElement(s,{isLoading:e,placement:"bottom"})),p=a(8),m=a(2003),u=a(803),b=a(2014),g=a(4),h=a(49),f=a(2009);const x=Object(i.c)(f.a)`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  div,
  button {
    height: 100% !important;
  }
`;var E=({routes:e})=>{const t=Object(n.useMemo)(()=>e&&e.map(({id:e,label:t,disabled:a,path:n,...r})=>({id:e,label:t,disabled:"function"==typeof a?a(r):a,path:n})),[e]);return t?r.a.createElement(x,{selectedTabBold:!0,items:t}):null},O=a(1984),_=a(170);var j=Object(i.c)(_.a)`
  padding-left: ${({theme:e})=>e.space[3]}px;
  padding-right: ${({theme:e})=>e.space[3]}px;
  color: ${({theme:e})=>e.colors.subtlerText};
  &:hover {
    color: ${({theme:e})=>e.colors.mediumText};
  }
`;const y=Object(i.c)(j)`
  z-index: 5;
`;var C=({filterCount:e,filterTitleLabel:t,items:a})=>{const n=Object(p.useDispatch)();return r.a.createElement(l.a,{height:"100%"},r.a.createElement(y,{onClick:()=>n(Object(u.b)(!0))},r.a.createElement(O.a,{filterCount:e,filterTitleLabel:t})),a)};const T=Object(i.c)(h.a,{shouldForwardProp:e=>"hideFilterButton"!==e})`
  font-size: 14px;
  ${({hideFilterButton:e})=>e&&"margin-left: 50%;"}
`;var v=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:n,filterCount:i,filterTitleLabel:c,items:o,title:s})=>{const p=(null==e?void 0:e.length)>1,m=!p&&1===e.length;return r.a.createElement(d,{isLoading:a},!t&&r.a.createElement(C,{filterCount:i,filterTitleLabel:c,items:o}),p&&r.a.createElement(E,{routes:e}),m&&r.a.createElement(T,{weight:"bold"},e[0].label),s&&r.a.createElement(T,{weight:"bold",hideFilterButton:t},r.a.createElement(g.c,{id:s})),r.a.createElement(l.a,{height:"100%",flex:p||s||m?"none":1,alignItems:"center",justifyContent:"flex-end"},n))};var w=({routes:e=[],hideFilterButton:t=!1,isLoading:a,children:i,filterCount:c,filterFooter:l,renderFilterDrawerContent:o,noFilterDrawerStyledContent:s,filterTitleLabel:d,items:g,title:h})=>{const f=Object(p.useDispatch)(),x=Object(p.useSelector)(m.a);return Object(n.useEffect)(()=>()=>{f(Object(u.b)(!1))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{isOpen:x,filterCount:c,filterTitleLabel:d,noStyledContainer:s,onClose:()=>f(Object(u.b)(!1)),renderFilterDrawerContent:()=>o(x),renderFooter:()=>l}),r.a.createElement(v,{routes:e,hideFilterButton:t,isLoading:a,filterCount:c,filterTitleLabel:d,items:g,title:h},i))},A=a(1935);var F=Object(i.c)(A.a)`
  padding-left: ${({theme:e})=>e.space[2]}px;
  padding-right: ${({theme:e})=>e.space[2]}px;
`;var k=Object(i.c)("span")`
  border-right: 1px ${({theme:e})=>e.colors.border} solid;
  margin: 0 ${({theme:e})=>e.space[4]}px;
  position: relative;
  height: 100%;
  display: block;
`,S=a(1837);const I=i.a`
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
  justify-content: flex-end;
  overflow-x: unset;

  > div {
    margin: initial;
  }
`,L=i.a`
  max-height: 30px;
  padding: 0 5px !important;
  margin: 0 5px;
`;function R(e){return r.a.createElement(S.a,Object.assign({className:I,tabClassName:L},e))}},2003:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{var t;return null===(t=null==e?void 0:e.filters)||void 0===t?void 0:t.isFilterOpen}},2009:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(31),c=a(1837);t.a=({items:e,...t})=>{const{params:a,path:n}=Object(i.n)(),l=Object(i.l)(),o=Object(i.k)(),s=e.find(({path:e})=>e===n)||((e,{pathname:t})=>e.find(({path:e})=>new RegExp(e.replace(/\/:\w+\?.*/g,"/?.*").replace(/:\w+/g,"\\w+").replace(/\//g,"\\$&")).test(t)))(e,l);return r.a.createElement(c.a,Object.assign({tabs:e,selectedTab:null==s?void 0:s.id,onSelectTab:({path:e,params:t={}})=>o.push(Object(i.i)(e,{...a,...t}))},t))}},2014:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),c=a(1926),l=a(24),o=a(1984);const s=Object(i.c)(c.a)`
  width: 260px !important;
`,d=Object(i.c)("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({theme:e})=>e.space[3]+"px 24px"};
  overflow: auto;
`,p=Object(i.c)("div")`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.motifPalette.ui04};
  padding: 38px 24px;
  flex: none;
`;t.a=({filterCount:e,filterTitleLabel:t,isOpen:a,noStyledContainer:n,onClose:i,renderFilterDrawerContent:c,renderFooter:m})=>{const u=c(),b=n?u:r.a.createElement(d,null,u);return r.a.createElement("div",null,r.a.createElement(s,{in:a,header:r.a.createElement(o.a,{filterCount:e,filterTitleLabel:t}),headerScale:"small",onClose:i,side:"left"},a&&r.a.createElement(l.a,{flex:1,flexDirection:"column",height:"100%"},b,m&&r.a.createElement(p,null,m()))))}},2051:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(339),c=a(86),l=a(1796);t.a=({left:e=0,top:t=0,hidden:a,...o})=>{const{top:s,left:d}=Object(i.e)(),[p,m]=Object(n.useState)(),[u,b]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{p||a||m(function(){if("undefined"!=typeof document){const e=document.createElement("div");return e.setAttribute("data-testid","tooltip-portal"),e}}())},[a,p,m]),Object(n.useEffect)(()=>{if(p&&"undefined"!=typeof document)return document.body.appendChild(p),b(!0),()=>{p.remove()}},[p]),u&&p?Object(c.createPortal)(r.a.createElement(l.a,Object.assign({top:t+s,left:e+d,hidden:a},o)),p):null}},2066:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(32),c=a(1),l=a(4),o=a(5),s=a(137),d=Object(o.a)("text-align:right;");function p(e){var t=e.start,a=e.end,n=e.intl,c=e.timezone,l="",o="";return Object(s.h)(t,c)&&Object(s.h)(a,c)?l=n.formatMessage({id:"COMMON_DATES_TODAY"}):Object(i.differenceInMonths)(a,t)>1?(l=Object(s.e)(t,c,"MMM Do, YYYY"),o=Object(s.e)(a,c,"MMM Do, YYYY")):Object(i.differenceInDays)(a,t)<1?l=Object(s.e)(t,c,"MMM Do, YYYY"):(l=Object(s.e)(t,c,"MMM Do"),o=Object(s.e)(a,c,"MMM Do")),r.a.createElement("div",{className:d},"".concat(l," ").concat(o&&" - ".concat(o)))}p.propTypes={start:c.PropTypes.instanceOf(Date).isRequired,end:c.PropTypes.instanceOf(Date).isRequired,timezone:c.PropTypes.string.isRequired,intl:l.g.isRequired},t.a=Object(l.f)(p)},2220:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n="https://static.ubnt.com/dpi/"},2368:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=a(7),o=a.n(l),s=a(41),d=a(824),p=a(73),m=a(339),u=a(58),b=a(25);Object(b.a)(".segment__YUxicmy8{fill:transparent;stroke-linecap:butt;transition:stroke-dasharray .5s,stroke-dashoffset .5s}.title__YUxicmy8{font-family:Lato,sans-serif;font-size:34px;font-weight:700;text-anchor:middle}.title-light__YUxicmy8{fill:#333543}.title-dark__YUxicmy8{fill:#a4a7b5}.description__YUxicmy8{font-family:Lato,sans-serif;font-size:11px;text-anchor:middle}.description-dark__YUxicmy8,.description-light__YUxicmy8{fill:#7e8190}.tooltip__YUxicmy8{pointer-events:none}");var g={segment:"segment__YUxicmy8",title:"title__YUxicmy8","title-light":"title-light__YUxicmy8","title-dark":"title-dark__YUxicmy8",description:"description__YUxicmy8","description-dark":"description-dark__YUxicmy8","description-light":"description-light__YUxicmy8",tooltip:"tooltip__YUxicmy8"};const h=({thickness:e,from:t,percentage:a,radius:n,cx:i,cy:c,...l})=>{const{x:o,y:s}=Object(m.a)(.02*Math.PI*t,n,i,c),{x:d,y:p}=Object(m.a)(.02*Math.PI*(t+a),n,i,c),u=`M ${o} ${s} A ${n} ${n} 0 ${a>50?1:0} 1 ${d} ${p}`;return r.a.createElement("path",Object.assign({},l,{fill:"none",stroke:"transparent",strokeWidth:e,d:u}))};var f=a(2051);const x=50/Math.PI,E=e=>{const{items:t=[],size:a=150,motif:i="light",title:c,description:l,titleClassName:p,descriptionClassName:u,forwardedRef:b,renderTooltipMessage:E,tooltipProps:O={},spacer:_=0,thickness:j,...y}=e,C=t.reduce((e,t)=>e+t.value,0),T=(.5*a-5-1)/x,v=d.a.getDiscreteColorScaler(t.length),w=Object(n.useRef)(null),[A,F]=Object(n.useState)(null),k=t.reduce((e,t,a)=>{const n=100*t.value/C,r=0===a?0:e[a-1].runningTotal||0,i=100*r/C,c=Math.max(n-_,.1);return e.push({item:t,strokeDasharray:`${c} ${100-n+_}`,strokeDashoffset:25-i,runningTotal:r+t.value,color:t.color||v(a),from:i,percentage:n}),e},[]);0===k.length&&k.push({item:{id:0},strokeDasharray:"100 0",strokeDashoffset:0,color:"light"===i?s.a["white-7"]:s.a["grey-0"],runningTotal:100,from:0,percentage:95});const S=j||10/T;return r.a.createElement("svg",Object.assign({style:{overflow:"visible"},height:a,width:a,ref:b},y),r.a.createElement("g",{style:{transform:`translate(${.5*a}px, ${.5*a}px) scale(${T})`},onMouseLeave:()=>F(null),ref:w},k.map(e=>{var t;return r.a.createElement("circle",{key:null===(t=e.item)||void 0===t?void 0:t.id,className:g.segment,stroke:e.color,strokeWidth:S,r:x,cx:0,cy:0,strokeDasharray:e.strokeDasharray,strokeDashoffset:e.strokeDashoffset})}),k.map(e=>{var t;return r.a.createElement(h,{key:null===(t=e.item)||void 0===t?void 0:t.id,from:e.from,percentage:e.percentage,radius:x,cx:0,cy:0,thickness:2*S,onMouseEnter:()=>F(e),role:"status","aria-describedby":"donut_tooltip"})})),r.a.createElement("g",{style:{transform:`translate(${.5*a}px, ${.5*a}px)`}},r.a.createElement("text",{y:5,className:o()(g.title,g["title-"+i],p)},c),r.a.createElement("text",{y:25,className:o()(g.description,g["description-"+i],u)},l)),function(e,t,a,n){const i=(null==t?void 0:t.item)&&e?e(t.item):"";if(!a.current)return null;const c=t?Object(m.a)(.02*Math.PI*(t.from+t.percentage/2),x,0,0):{x:0,y:0},{x:l,y:o}=Object(m.d)(a.current,c);return r.a.createElement(f.a,{hidden:!i,left:l,top:o,topMargin:0,message:r.a.createElement("div",{id:"donut_tooltip"},i),className:g.tooltip,tooltipProps:n,width:n.width})}(E,A,w,O))};E.propTypes={items:c.a.arrayOf(c.a.shape({id:c.a.oneOfType([c.a.string,c.a.number]).isRequired,color:c.a.string,value:c.a.number.isRequired}).isRequired),forwardedRef:u.d,size:c.a.number,title:c.a.oneOfType([c.a.string,c.a.number]),description:c.a.string,motif:c.a.oneOf(["light","dark"])};t.a=Object(p.a)(E)},2830:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),c=a.n(i),l=a(7),o=a.n(l),s=a(1863),d=a(73),p=a(58),m=a(2051),u=a(25);Object(u.a)(".StackedBarContainer__Zhxkgu7R{width:100%}.StackedBar__Zhxkgu7R{position:relative;display:flex;overflow:hidden;width:100%;margin:4px 0}.StackedBar-withTooltip__Zhxkgu7R:hover{cursor:pointer}.StackedBar-light__Zhxkgu7R{background-color:#d6d9e2}.StackedBar-dark__Zhxkgu7R{background-color:#333543}.primary__Zhxkgu7R{color:#006fff;background-color:#006fff}.success__Zhxkgu7R{color:#39cc64;background-color:#39cc64}.warning__Zhxkgu7R{color:#f7a631;background-color:#f7a631}.danger__Zhxkgu7R{color:#f03a3e;background-color:#f03a3e}.stripped-light__Zhxkgu7R{background:linear-gradient(90deg,#d6d9e2 75%,transparent 0)}.stripped-dark__Zhxkgu7R{background:linear-gradient(90deg,#333543 75%,transparent 0)}.stripped-dark__Zhxkgu7R,.stripped-light__Zhxkgu7R{background-size:4px 4px}.stripped__Zhxkgu7R .status__Zhxkgu7R{background:linear-gradient(90deg,currentColor 75%,transparent 0);background-size:4px 4px}");var b={StackedBarContainer:"StackedBarContainer__Zhxkgu7R",StackedBar:"StackedBar__Zhxkgu7R","StackedBar-withTooltip":"StackedBar-withTooltip__Zhxkgu7R","StackedBar-light":"StackedBar-light__Zhxkgu7R","StackedBar-dark":"StackedBar-dark__Zhxkgu7R",primary:"primary__Zhxkgu7R",success:"success__Zhxkgu7R",warning:"warning__Zhxkgu7R",danger:"danger__Zhxkgu7R","stripped-light":"stripped-light__Zhxkgu7R","stripped-dark":"stripped-dark__Zhxkgu7R",stripped:"stripped__Zhxkgu7R",status:"status__Zhxkgu7R"};const g=({className:e,itemTooltip:t,items:a=[],height:i=8,stripped:c=!1,motif:l="light",forwardedRef:d,...p})=>{const[u,g]=Object(n.useState)(null),h=Object(n.useRef)(null);return r.a.createElement("div",{className:b.StackedBarContainer,ref:h},r.a.createElement("div",Object.assign({ref:d,className:o()(e,b.StackedBar,b["StackedBar-"+l],{[b.stripped]:c,[b["stripped-"+l]]:c,[b["StackedBar-withTooltip"]]:!!t})},p),a.map(({value:e,color:n,variant:l,style:d},p)=>{const m=Object(s.a)([...a].splice(0,p),"value"),u=0===p?"StackedBar-item-first":p+1===a.length?"StackedBar-item-last":"";return r.a.createElement("div",{key:`${p}-${e}`,className:o()(u,!!l&&b[l],{[b.status]:c}),style:{...d,width:e+"%",height:i+"px",...n&&{background:c?`linear-gradient(to right, ${n} 75%, transparent 25%)`:n,color:n}},onMouseEnter:()=>((e,n)=>{if(t&&h.current){const r=h.current.firstChild,{width:i,top:c,left:l}=r.getBoundingClientRect();g({...t(a[e]),left:l+i/100*n,top:c})}})(p,m+e/2),onMouseLeave:()=>g(null)})})),!!t&&r.a.createElement(m.a,Object.assign({topMargin:0,hidden:!u},u)))};g.propTypes={items:c.a.arrayOf(c.a.oneOfType([c.a.shape({variant:c.a.oneOf(["primary","success","warning","danger"]),value:c.a.number.isRequired}),c.a.shape({color:c.a.string,value:c.a.number.isRequired})])).isRequired,height:c.a.number,stripped:c.a.bool,className:c.a.string,itemTooltip:c.a.func,motif:c.a.oneOf(["light","dark"]),forwardedRef:p.d};const h=Object(d.a)(g);t.a=r.a.memo(h)},2882:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a(615),l=a(626),o=a(232),s=a(809),d=a(64),p=a(164),m=a(614),u=a(5),b=a(31),g=a(458),h=a(764),f=a(95),x=a(4),E=a(23),O=a(1837),_=a(170),j=a(625),y=a(49),C=a(40);const T=Object(u.c)(f.g)`
  &:hover {
    background-color: ${({motif:e})=>"dark"===e?"#29292D":"#F6F6F8"};
  }
`,v=Object(u.c)(_.a)`
  padding: 0;
`,w=Object(u.c)(E.v)`
  ${({isSelected:e})=>e?"opacity: 1;":"opacity: 0;"}
  transition: opacity 150ms ease;
  margin: 10px 7px 0 7px;
`;var A=({children:e,isSelected:t,...a})=>{const{motif:n}=Object(C.a)();return r.a.createElement(T,{motif:n},r.a.createElement(w,{width:7,isSelected:t}),r.a.createElement(v,Object.assign({variant:"tertiary"},a),r.a.createElement(y.a,{size:"body",weight:t?"bold":"normal"},e)))};const F=Object(u.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
  position: relative;
`,k=Object(u.c)(O.a)`
  margin-left: 34px;
  width: fit-content;

  & > * > button {
    height: 39px !important;
  }
`,S=Object(u.c)(E.f,{shouldForwardProp:e=>"open"!==e})`
  transition: 200ms cubic-bezier(0.4, 0, 0, 1.3);
  transform: ${({open:e})=>e?"rotate(-180deg)":"rotate(0deg)"};
  margin-bottom: 4px;
`,I=Object(u.c)(E.Zb)`
  transform: rotate(90deg);
`,L=Object(u.c)("div")`
  @media (max-width: 1010px) and (min-width: 900px), (max-width: 700px) {
    display: none;
  }
`,R=Object(u.c)(_.a)`
  *:not(:first-child) {
    margin-left: 9px;
  }
  font-weight: bold;
`,D=Object(u.c)("div")`
  @media (min-width: 1010px) and (max-width: 900px), (min-width: 700px) {
    display: none;
  }
`,B=Object(u.c)(_.a)`
  width: 42px;
  height: 100%;
  border-right: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`,M=Object(u.c)(E.g)`
  color: #838691;
  height: 12px;
`,$=Object(u.c)(j.a)`
  position: absolute;
  right: 16px;
`,N=Object(u.c)(y.a)`
  position: absolute;
  left: 64px;

  @media (max-width: 1060px) and (min-width: 900px), (max-width: 750px) {
    display: none;
  }
`,P=Object(u.c)("div")`
  position: absolute;
  left: 0;
  height: 100%;

  & > div {
    height: 100%;
  }
`,U=u.a`
  padding: 0;
`,z=[{id:"overview",label:r.a.createElement(x.c,{id:"TRAFFIC_TAB_LABEL_OVERVIEW"})},{id:"topapplications",label:r.a.createElement(x.c,{id:"TRAFFIC_TAB_LABEL_TOP_APPLICATIONS"})}];var W=r.a.memo(({sorting:e,setSorting:t,categoryName:a})=>{const{site:i,subSection:c}=Object(b.m)(),l=Object(b.k)(),{path:o}=Object(b.n)(),s=Object(n.useCallback)(({open:t})=>{let a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC";switch(e){case"upload":a="TRAFFIC_SORTING_LABEL_BY_UPLOAD";break;case"download":a="TRAFFIC_SORTING_LABEL_BY_DOWNLOAD";break;default:a="TRAFFIC_SORTING_LABEL_BY_TRAFFIC"}return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(R,{variant:"link"},r.a.createElement(x.c,{id:a}),r.a.createElement(S,{size:"small",open:t}))),r.a.createElement(D,null,r.a.createElement(_.a,null,r.a.createElement(I,null))))},[e]),d=Object(n.useCallback)(e=>{const t=Object(b.i)(o,{subSection:e,section:"traffic",site:i});l.push(t)},[l,o,i]),p=Object(n.useCallback)(()=>{const e=Object(b.i)(o,{subSection:"overview",section:"traffic",site:i});l.push(e)},[l,o,i]),m=Object(n.useMemo)(()=>"topapplications"===c?c:"overview",[c]);return r.a.createElement(F,{justifyContent:"center",alignItems:"center"},"clients"===c&&r.a.createElement(P,null,r.a.createElement(B,{variant:"tertiary",onClick:p},r.a.createElement(M,null))),"clients"===c&&a&&r.a.createElement(N,{weight:"bold"},r.a.createElement(x.c,{id:a})),r.a.createElement(f.g,null,r.a.createElement(k,{selectedTabBold:!0,selectedTab:m,tabs:z,onSelectTab:({id:e})=>d(e)})),"overview"===c&&r.a.createElement($,{classNameCard:U,size:"small",align:"bottomLeft",renderToggle:s},r.a.createElement(A,{isSelected:"upload"===e,onClick:()=>t("upload")},r.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_UPLOAD"})),r.a.createElement(A,{isSelected:"download"===e,onClick:()=>t("download")},r.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_DOWNLOAD"})),r.a.createElement(A,{isSelected:"traffic"===e,onClick:()=>t("traffic")},r.a.createElement(x.c,{id:"TRAFFIC_SORTING_LABEL_TRAFFIC"}))))},(e,t)=>e.sorting===t.sorting&&e.setSorting===t.setSorting&&e.categoryName===t.categoryName),Y=a(78);const Z=(e,t=3,a=!1)=>{const n=Object(Y.d)(e),r=t-n.value.toString().split(".")[0].length;return`${n.value.toFixed(Math.max(0,r))} ${a?"":n.unit}`};var q=a(41),G=a(2368);const H=Object(u.c)(f.g)`
  height: 100%;
  max-height: 260px;
  padding: 0 24px 20px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 130px;
    height: 130px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 24px;
  }
  & * > text:last-of-type {
    font-size: 10px;
  }
`,V=Object(u.c)(y.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,J=Object(u.c)(f.g)`
  margin-bottom: 8px;
`,K=Object(u.c)(y.a)`
  color: ${q.a["purple-1"]};
`,Q=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{size:"body",weight:"bold"},e.name),r.a.createElement(J,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),r.a.createElement(y.a,null,Z(e.rx_bytes+e.tx_bytes))),r.a.createElement(J,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_UP"})),r.a.createElement(K,null,Z(e.tx_bytes))),r.a.createElement(J,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_DOWN"})),r.a.createElement(y.a,{color:"success"},Z(e.rx_bytes))),r.a.createElement(J,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),r.a.createElement(y.a,null,e.known_clients)));var X=({category:e,appsToShow:t,dpiDataTotal:a})=>{const i=Object(n.useMemo)(()=>{const t=e.traffic/a*100,n=2-t.toString().split(".")[0].length;return t.toFixed(Math.max(0,n))+"%"},[e.traffic,a]),c=Object(n.useMemo)(()=>t.map(e=>({...e,id:e.app,value:e.rx_bytes+e.tx_bytes,color:e.color})),[t]);return r.a.createElement(H,{justifyContent:"center",alignItems:"center"},r.a.createElement(G.a,{items:c,renderTooltipMessage:Q,tooltipProps:{position:"right"},title:i,description:Z(e.rx_bytes+e.tx_bytes),thickness:3,spacer:.5,size:115}))},ee=a(1199),te=a(1860);const ae=Object(u.c)(ee.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,ne=Object(u.c)(E.h)`
  position: absolute;
  right: 9px;
  height: 10px;
  width: 7px;
  color: #b6b9c4;
`,re=[{id:"name",label:"",renderCell:({name:e,color:t})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{customColor:t}),r.a.createElement(y.a,{size:"body",truncate:!0},e)),minWidth:80},{id:"traffic",label:"",renderCell:({rx_bytes:e,tx_bytes:t})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{size:"body"},Z(e+t)),r.a.createElement(ne,null)),minWidth:78,maxWidth:78}],ie=Object(u.c)("div")`
  margin: 0px 24px 18px auto;
  min-width: 150px;
  width: 100%;
  height: 168px;
  & > div > table > thead {
    display: none;
  }

  & tr {
    cursor: pointer;
  }
`;var ce=({appsToShow:e,category:t,updateCurrentClientUsageApps:a})=>{const{site:i}=Object(b.m)(),c=Object(b.k)(),{path:l}=Object(b.n)(),o=Object(n.useCallback)(e=>{a(t,[e.compoundAppId]);const n=Object(b.i)(l,{subSection:"clients",section:"traffic",site:i});c.push(n)},[t,c,l,i,a]);return r.a.createElement(ie,null,r.a.createElement(te.a,{columns:re,items:e,onRowClick:o,idField:"app",disableColumnFilters:!0,disableSelection:!0,rowHeight:42}))},le=a(765);const oe=Object(u.c)(f.g,{shouldForwardProp:e=>"leftMargin"!==e})`
  margin: ${({leftMargin:e})=>`9px 0px 9px ${null!=e?e:18}px`};
  white-space: nowrap;
`,se=Object(u.c)(E.eb)`
  color: ${q.a["blue-3"]};
`,de=Object(u.c)(E.fb)`
  color: ${q.a["purple-1"]};
`,pe=Object(u.c)(y.a)`
  margin-left: 3px;
`;var me=({up:e,down:t,upTotal:a,downTotal:i,leftMargin:c,...l})=>{const o=Object(n.useMemo)(()=>a?Z(a):void 0,[a]),s=Object(n.useMemo)(()=>i?Z(i):void 0,[i]),d=Object(n.useMemo)(()=>{const t=Object(Y.d)(e);return`${t.value<100?t.value.toFixed(1):t.value.toFixed()} ${o?"":""+t.unit}`},[o,e]),p=Object(n.useMemo)(()=>{const e=Object(Y.d)(t);return`${e.value<100?e.value.toFixed(1):e.value.toFixed()} ${s?"":""+e.unit}`},[t,s]);return r.a.createElement(f.g,null,r.a.createElement(oe,{alignItems:"center",leftMargin:c},r.a.createElement(de,null),r.a.createElement(y.a,Object.assign({size:"caption",weight:"bold"},l),d),o&&r.a.createElement(pe,{size:"caption",weight:"bold",color:"tertiary"}," / "+o)),r.a.createElement(oe,{alignItems:"center",leftMargin:c},r.a.createElement(se,null),r.a.createElement(y.a,Object.assign({size:"caption",weight:"bold"},l),p),s&&r.a.createElement(pe,{size:"caption",weight:"bold",color:"tertiary"}," / "+s)))};const ue=Object(u.c)("div")`
  display: grid;
  grid-template-columns: minmax(80px, 1fr) minmax(185px, 1fr) 42px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  height: 40px;
  max-height: 40px;
  padding-left: 24px;
`,be=Object(u.c)(ee.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,ge=Object(u.c)(f.g)`
  margin-right: 6%;
`,he=Object(u.c)(E.I)`
  margin: 0 6px 0 16px;
`,fe=Object(u.c)(_.a)`
  width: 42px;
  height: 100%;
  border-left: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 0;
`;var xe=({category:e,updateCurrentClientUsageApps:t})=>{const{site:a}=Object(b.m)(),i=Object(b.k)(),{path:c}=Object(b.n)(),l=Object(n.useCallback)(()=>{t(e,e.apps);const n=Object(b.i)(c,{subSection:"clients",section:"traffic",site:a});i.push(n)},[e,i,c,a,t]);return r.a.createElement(ue,null,r.a.createElement(f.g,{alignItems:"center"},r.a.createElement(be,{customColor:e.color}),r.a.createElement(y.a,{size:"body",truncate:!0},r.a.createElement(x.c,{id:Object(le.b)(e.cat)}))),r.a.createElement(ge,{alignItems:"center",justifyContent:"flex-end"},r.a.createElement(me,{up:e.tx_bytes,down:e.rx_bytes,leftMargin:6}),r.a.createElement(he,null),r.a.createElement(y.a,{size:"caption",weight:"bold"},e.clientsCount)),r.a.createElement(fe,{variant:"tertiary",onClick:l},r.a.createElement(E.h,null)))};const Ee=Object(u.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 343px;
  height: 270px;
  position: relative;
`,Oe=Object(u.c)("div")`
  position: absolute;
  bottom: 12px;
  right: 17px;
  width: auto;
`;var _e=r.a.memo(({category:e,dpiDataTotal:t,dpiDataByApp:a,updateCurrentClientUsageApps:i})=>{const[c,l]=Object(n.useState)(!1),o=Object(n.useMemo)(()=>a.filter(t=>t.cat===e.cat).sort((e,t)=>t.traffic-e.traffic),[e,a]),s=Object(n.useMemo)(()=>o.length,[o.length]),d=Object(n.useMemo)(()=>c?o.map((t,a)=>Object.assign(t,{color:Object(h.a)([...e.colorScheme.slice(4),...e.colorScheme.slice(0,4).reverse()],a)})):o.map((t,a)=>Object.assign(t,{color:a<4?Object(h.a)(e.colorScheme.slice(4),a):"#EDEDF0"})),[o,e.colorScheme,c]);return r.a.createElement(Ee,{flexWrap:"wrap"},r.a.createElement(xe,{category:e,updateCurrentClientUsageApps:i}),r.a.createElement(f.g,{flexDirection:"row",flex:1},r.a.createElement(X,{category:e,dpiDataTotal:t,appsToShow:d}),r.a.createElement(ce,{appsToShow:c?d:d.slice(0,4),category:e,updateCurrentClientUsageApps:i})),s>4&&r.a.createElement(Oe,null,r.a.createElement(_.a,{variant:"link",onClick:()=>l(e=>!e)},r.a.createElement(x.c,{id:c?"APP_TABLE_BUTTON_SHOW_TOP_USAGE":"APP_TABLE_BUTTON_SHOW_ALL"}))))},(e,t)=>Z(e.category.rx_bytes+e.category.tx_bytes)===Z(t.category.rx_bytes+t.category.tx_bytes)),je=a(2220),ye=a(1923);const Ce=Object(u.c)(ye.a)`
  height: 338px;
`;function Te(){return r.a.createElement(Ce,{title:r.a.createElement(x.c,{id:"DPI_NO_DATA"}),icon:"noSearchResults"})}const ve=Object(u.c)(f.g)`
  width: 100%;
  height: 100%;
  padding: 12px 12px 24px 12px;
  overflow: auto;
`,we=Object(u.c)(ee.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 16px;
`,Ae=Object(u.c)(y.a)`
  max-width: calc(100% - 18px);
`,Fe=Object(u.c)(E.eb)`
  color: ${q.a["green-1"]};
`,ke=Object(u.c)(E.fb)`
  color: ${q.a["purple-1"]};
`,Se=Object(u.c)(y.a)`
  color: ${q.a["purple-1"]};
`,Ie=Object(u.c)("img")`
  height: 20px;
  width: 20px;
  margin-right: 4px;
`,Le=Object(u.c)(E.Y)`
  margin: 0 9px 0 1px;
  color: #c2c4ce;
`,Re=({name:e,iconFileName:t})=>{const[a,i]=Object(n.useState)(r.a.createElement(Le,{width:18,height:18})),c=Object(n.useCallback)(()=>"this.style.display='none'",[]);return Object(n.useEffect)(()=>{i(r.a.createElement(Le,{width:18,height:18}));const a=new Image,n=t&&encodeURI(`${je.a}${t}`)||null;a.onload=()=>i(r.a.createElement(Ie,{src:n,alt:"Application "+e,onError:c})),a.onerror=()=>i(r.a.createElement(Le,{width:18,height:18})),a.src=n},[e,t,c]),a},De=[{id:"name",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t,icon:a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(we,{customColor:e}),a,r.a.createElement(Ae,{size:"body",truncate:!0},t)),minWidth:170,growthFactor:2e3},{id:"traffic",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>r.a.createElement(y.a,{size:"body"},Z(e)),minWidth:70,maxWidth:150},{id:"tx_bytes",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_UP"}))),sortable:!0,renderCell:({tx_bytes:e})=>r.a.createElement(Se,{size:"body"},Z(e)),minWidth:70,maxWidth:150},{id:"rx_bytes",label:r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe,null),r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_DOWN"}))),sortable:!0,renderCell:({rx_bytes:e})=>r.a.createElement(y.a,{size:"body",color:"success"},Z(e)),minWidth:70,maxWidth:150},{id:"known_clients",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>r.a.createElement(y.a,{size:"body"},e),minWidth:70,maxWidth:150}];var Be=({dpiDataByApp:e,dpiDataByCategory:t,currentCategories:a})=>{const i=Object(n.useMemo)(()=>e.filter(e=>a.includes(e.cat)),[a,e]),c=Object(n.useMemo)(()=>i.map(e=>{const{color:a}=t.find(t=>t.cat===e.cat),n=e.tx_bytes+e.rx_bytes,i=r.a.createElement(Re,{name:e.name,iconFileName:e.iconFileName});return{...e,color:a,traffic:n,icon:i}}),[t,i]);return r.a.createElement(ve,null,c.length?r.a.createElement(te.a,{items:c,columns:De,idField:"app",initialSortBy:"traffic",disableColumnFilters:!0,disableHover:!0,disableSelection:!0,disableTextPointer:!0,rowHeight:42}):r.a.createElement(Te,null))},Me=a(2830),$e=a(113),Ne=a(76);const Pe=Object(u.c)(f.g)`
  margin: 30px 24px 0;
  height: 100%;
  overflow-x: overlay;
`,Ue=Object(u.c)(f.g)`
  height: 30px;
  max-width: 30px;
  width: 100%;
  margin-right: 10px;
`,ze=Object(u.c)(E.eb)`
  color: #c2c4ce;
  height: 12px;
  margin-left: -5px;
`,We=Object(u.c)(E.fb)`
  color: #c2c4ce;
  height: 12px;
  margin-left: -5px;
`,Ye=Object(u.c)(y.a)`
  margin-left: 3px;
`,Ze=Object(u.c)(Me.a)`
  border-radius: 2px;
`,qe=(e,t,a)=>e.reduce((e,n)=>t.includes(n.compoundAppId)?e+n[a]:e,0),Ge=(e,t,a)=>{let n=null;return void 0!==a&&(n="down"===a?r.a.createElement(ze,null):r.a.createElement(We,null)),r.a.createElement(r.a.Fragment,null,n,r.a.createElement(y.a,{size:"body"},Z(e)),r.a.createElement(Ye,{size:"body",color:"tertiary"}," / "+Z(t)))},He=Object(u.c)(y.a)`
  max-width: 90%;
`;var Ve=({dpiClientsData:e,currentClientsUsageApps:t})=>{const a=Object(n.useMemo)(()=>t.apps.reduce((e,t)=>({...e,[t.compoundAppId]:t}),{}),[t.apps]),i=Object(n.useMemo)(()=>e.reduce((e,n)=>{let r=n.traffic;const i=t.appIds.reduce((e,t)=>{const i=n.by_app.find(e=>e.compoundAppId===t);return i?(r-=i.tx_bytes+i.rx_bytes,[...e,{...i,traffic:i.tx_bytes+i.rx_bytes,color:a[i.compoundAppId].color}]):e},[]);return i.length?[...e,{...n,by_app:i,remainingTrafficPercent:r/n.traffic*100}]:e},[]),[e,t.appIds,a]),c=Object(n.useMemo)(()=>{return e=t.appIds,[{id:"name",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENT"})),sortable:!0,renderCell:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{justifyContent:"center",alignItems:"center"},void 0!==e.model?r.a.createElement($e.c,{device:e}):r.a.createElement(f.d,{client:e})),r.a.createElement(He,{size:"body",truncate:!0},void 0!==e.model?Object(Ne.b)(e):e.name||e.hostname||e.mac)),minWidth:120},{id:"rx_bytes",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_DOWN"})),sortable:!0,renderCell:({by_app:t,rx_bytes:a})=>{const n=qe(t,e,"rx_bytes");return Ge(n,a,"down")},minWidth:115,growthFactor:50},{id:"tx_bytes",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_UP"})),sortable:!0,renderCell:({by_app:t,tx_bytes:a})=>{const n=qe(t,e,"tx_bytes");return Ge(n,a,"up")},minWidth:115,growthFactor:50},{id:"traffic",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({by_app:t,traffic:a})=>{const n=qe(t,e,"traffic");return Ge(n,a)},minWidth:115,growthFactor:50},{id:"remainingTrafficPercent",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_APPLICATION"})),sortable:!0,renderCell:({by_app:e,remainingTrafficPercent:t,traffic:a})=>{const n=e.map(({traffic:e,color:t})=>({value:e/a*100,color:t}));return r.a.createElement(Ze,{items:[...n,{value:t,color:"#EDEDF0"}]})},minWidth:120,compare:(e,t)=>t-e}];var e},[t.appIds]);return r.a.createElement(Pe,null,i.length?r.a.createElement(te.a,{items:i,columns:c,idField:"mac",disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,rowHeight:42}):r.a.createElement(Te,null))};const Je=Object(u.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 375px;
  min-height: 452px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-height: 296px;
  }
`,Ke=Object(u.c)("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, auto));
  width: 100%;
  padding: 20px 16px;
  overflow: auto; // For non webkit browsers
  overflow: overlay;
  grid-gap: 16px;

  @media (min-width: ${({theme:e})=>e.breakpoints.bp1600}px) {
    grid-template-columns: repeat(3, minmax(343px, auto));
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.bp2560}px) {
    grid-template-columns: repeat(4, minmax(343px, auto));
  }
`;var Qe=({dpiDataByCategory:e,currentCategories:t,dpiDataByApp:a,clients:i,currentClientsUsageApps:c,dpiDataTotal:l,updateCurrentClientUsageApps:o})=>{var s;const[d,p]=Object(n.useState)("traffic"),{subSection:m}=Object(b.m)(),u=e.filter(e=>t.includes(e.cat)),g=Object(n.useMemo)(()=>{const e=[...u];switch(d){case"upload":return e.sort((e,t)=>t.tx_bytes-e.tx_bytes);case"download":return e.sort((e,t)=>t.rx_bytes-e.rx_bytes);case"traffic":default:return u}},[u,d]);return r.a.createElement(Je,{flexDirection:"column"},r.a.createElement(W,{sorting:d,setSorting:p,categoryName:null===(s=c.cat)||void 0===s?void 0:s.name}),"overview"===m&&(g.length?r.a.createElement(Ke,null,g.map(e=>r.a.createElement(_e,{key:e.cat,category:e,dpiDataByApp:a,dpiDataTotal:l.rx_bytes+l.tx_bytes,updateCurrentClientUsageApps:o}))):r.a.createElement(Te,null)),"clients"===m&&r.a.createElement(Ve,{dpiClientsData:i,currentClientsUsageApps:c}),"topapplications"===m&&r.a.createElement(Be,{dpiDataByApp:a,dpiDataByCategory:e,currentCategories:t}))};const Xe=Object(u.c)(ee.a,{shouldForwardProp:e=>"customColor"!==e})`
  background-color: ${({customColor:e})=>e};
  margin-right: 8px;
`,et=Object(u.c)(y.a)`
  max-width: calc(100% - 18px);
`,tt=[{id:"name",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({color:e,name:t})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,{customColor:e}),r.a.createElement(et,{size:"body",truncate:!0},t)),minWidth:110},{id:"traffic",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({traffic:e})=>r.a.createElement(y.a,{size:"body"},Z(e,2)),minWidth:70,maxWidth:80},{id:"known_clients",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({known_clients:e})=>r.a.createElement(y.a,{size:"body"},e),minWidth:60,maxWidth:80}],at=Object(u.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
  & tbody > tr:last-child > td > div > div > input {
    display: none !important;
  }
  & tbody > tr:last-child > td:nth-child(2) > div {
    position: relative;
    left: -35px;
  }
  & tbody > tr:last-child {
    cursor: default !important;
    pointer-events: none !important;
  }
`;var nt=Object(x.f)(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,intl:i})=>{const c=Object(n.useMemo)(()=>((e,t)=>[{id:"name",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_NAME"})),sortable:!0,renderCell:({cat:t,color:a,name:n})=>{const i=e.includes(t)?a:"EDEDF0";return"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"!==n?r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,{customColor:i}),r.a.createElement(et,{size:"body",truncate:!0},r.a.createElement(x.c,{id:n}))):r.a.createElement(y.a,{size:"body",style:{fontWeight:"bold"}},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"}))},minWidth:110,compare:(e,a)=>t.formatMessage({id:e}).localeCompare(t.formatMessage({id:a}))},{id:"clientsCount",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_CLIENTS"})),sortable:!0,renderCell:({name:e,clientsCount:t})=>"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"!==e?r.a.createElement(y.a,{style:{marginLeft:"8px"},size:"body"},t):null,minWidth:75,maxWidth:80},{id:"traffic",label:r.a.createElement(y.a,{size:"body"},r.a.createElement(x.c,{id:"TRAFFIC_TABLE_LABEL_TRAFFIC"})),sortable:!0,renderCell:({name:e,traffic:t})=>r.a.createElement(y.a,{size:"body",style:"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC"!==e?{marginLeft:"8px"}:{marginLeft:"8px",fontWeight:"bold"}},Z(t,2)),minWidth:75,maxWidth:80}])(t,i),[t,i]);return r.a.createElement(at,null,r.a.createElement(te.a,{items:e,columns:c,idField:"cat",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:t,onChangeSelection:e=>a(e),rowHeight:42,divideTableByKey:"normalRow",disableBlankRowDivide:!0}))});const rt=Object(u.c)(f.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
  min-height: 40px;
  padding: 0 24px 0 24px;
`,it=Object(u.c)(y.a)`
  white-space: nowrap;
`;var ct=({dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:a})=>{const{subSection:n}=Object(b.m)(),i=e.filter(e=>t.includes(e.cat)),{catUp:c,catDown:l}=i.reduce((e,t)=>({catUp:e.catUp+t.tx_bytes,catDown:e.catDown+t.rx_bytes}),{catUp:0,catDown:0}),{appUp:o,appDown:s}=a.apps.reduce((e,t)=>a.appIds.includes(t.compoundAppId)?{appUp:e.appUp+t.tx_bytes,appDown:e.appDown+t.rx_bytes}:e,{appUp:0,appDown:0});return r.a.createElement(rt,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(it,{size:"body"},"clients"===n&&a.cat?r.a.createElement(x.c,{id:"TRAFFIC_SELECTED_APPS_COUNT",values:{value1:a.appIds.length,value2:a.cat.apps.length}}):r.a.createElement(x.c,{id:"TRAFFIC_CATEGORY_COUNT",values:{value1:i.length,value2:e.length}})),r.a.createElement(f.g,{justifyContent:"right"},r.a.createElement(me,{up:"clients"===n&&a.cat?o:c,down:"clients"===n&&a.cat?s:l,upTotal:"clients"===n&&a.cat&&a.cat.tx_bytes,downTotal:"clients"===n&&a.cat&&a.cat.rx_bytes,size:"body"})))};const lt=Object(u.c)(f.g)`
  height: 100%;
  max-height: 260px;
  padding: 26px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    border: 7px solid ${({theme:e})=>e.motifPalette.neutral02};
    border-radius: 100%;
    width: 172px;
    height: 172px;
    pointer-events: none;
  }

  & * > text:first-of-type {
    font-size: 28px;
  }
  & * > text:last-of-type {
    font-size: 12px;
  }
  .titleClassName {
    transform: translateY(12px);
  }
  .descriptionClassName {
    font-weight: bold;
    transform: translateY(-34px);
  }
`,ot=Object(u.c)(y.a)`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  width: 100%;
`,st=Object(u.c)(f.g)`
  margin-bottom: 8px;
`,dt=Object(u.c)(y.a)`
  color: ${q.a["purple-1"]};
`,pt=e=>0===(null==e?void 0:e.id)&&1===Object.keys(e).length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(ot,{size:"body",weight:"bold"},r.a.createElement(x.c,{id:e.name})),r.a.createElement(st,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_TRAFFIC"})),r.a.createElement(y.a,null,Z(e.traffic))),r.a.createElement(st,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_UP"})),r.a.createElement(dt,null,Z(e.tx_bytes))),r.a.createElement(st,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_DOWN"})),r.a.createElement(y.a,{color:"success"},Z(e.rx_bytes))),e.clients&&r.a.createElement(st,{justifyContent:"space-between"},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"TRAFFIC_TOOLTIP_CLIENTS"})),r.a.createElement(y.a,null,e.clients.length)));var mt=Object(x.f)(({dpiDataTotal:e,dpiDataByCategory:t,currentCategories:a,currentClientsUsageApps:i,intl:c})=>{const{motif:l}=Object(C.a)(),o="dark"===l,{subSection:s}=Object(b.m)(),[d,p]=Object(n.useMemo)(()=>{let e=0;const n=[];for(const r of t){if(255===r.cat&&!a.includes(255))break;a.includes(r.cat)&&(e+=r.traffic),n.push({...r,id:r.cat,value:r.traffic,color:a.includes(r.cat)?r.color:"#EDEDF0"})}return[e,n]},[a,t]),[m,u]=Object(n.useMemo)(()=>{let e=0;const t=[];for(const a of i.apps)i.appIds.includes(a.compoundAppId)&&(e+=a.traffic),t.push({...a,id:a.compoundAppId,value:a.traffic});return[e,t]},[i.appIds,i.apps]),g=Object(n.useMemo)(()=>Z("clients"===s?m:d),[m,d,s]);return r.a.createElement(lt,{justifyContent:"center",alignItems:"center",isDarkMode:o},r.a.createElement(G.a,{items:"clients"===s?u:p,renderTooltipMessage:pt,tooltipProps:{position:"right"},title:g,description:c.formatMessage({id:"TRAFFIC_DONUT_LABEL_IDENTIFIED_TRAFFIC"}),titleClassName:"titleClassName",descriptionClassName:"descriptionClassName",thickness:3.5,spacer:.5}))});const ut=Object(u.c)("div")`
  margin: 0 24px 24px;
  width: calc(100% - 48px);
  height: 100%;

  & > div > div > div > div {
    overflow-x: hidden !important;
  }

  & tr {
    background-color: transparent !important;
  }
`;var bt=({currentClientsUsageApps:e,updateCurrentClientUsageApps:t})=>{const a=Object(n.useCallback)(a=>{t(e.cat,a)},[e.cat,t]);return r.a.createElement(ut,null,r.a.createElement(te.a,{items:e.apps,columns:tt,idField:"compoundAppId",disableColumnFilters:!0,multiSelectMode:!0,selectedIds:e.appIds,onChangeSelection:e=>a(e),rowHeight:42}))};const gt=Object(u.c)(f.g)`
  border: 1px solid ${({theme:e})=>e.motifPalette.ui11};
  border-radius: 4px;
  min-width: 354px;
  min-height: 452px;
  height: 100%;
  box-shadow: 0px 4px 20px -13px #b8b8b8;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    min-width: 375px;
  }
`;var ht=r.a.memo(({dpiDataByCategory:e,currentCategories:t,updateCurrentCategories:a,currentClientsUsageApps:n,dpiDataTotal:i,subSection:c,updateCurrentClientUsageApps:l})=>{const o=(null==i?void 0:i.rx_bytes)+(null==i?void 0:i.tx_bytes),s=[...e,{name:"TRAFFIC_TABLE_LABEL_TOTAL_TRAFFIC",cat:0,apps:[],clients:[],clientsCount:0,rx_bytes:0,tx_bytes:0,rx_packets:0,tx_packets:0,traffic:o,color:"#",colorScheme:[],normalRow:!1}];return r.a.createElement(gt,{flexDirection:"column"},r.a.createElement(ct,{dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),r.a.createElement(mt,{dpiDataTotal:o,dpiDataByCategory:e,currentCategories:t,currentClientsUsageApps:n}),"clients"===c?r.a.createElement(bt,{currentClientsUsageApps:n,updateCurrentClientUsageApps:l}):r.a.createElement(nt,{currentCategories:t,dpiDataByCategory:s,updateCurrentCategories:a}))},(e,t)=>{var a,n,r,i;const c=(null===(a=e.dpiDataTotal)||void 0===a?void 0:a.rx_bytes)+(null===(n=e.dpiDataTotal)||void 0===n?void 0:n.tx_bytes),l=(null===(r=t.dpiDataTotal)||void 0===r?void 0:r.rx_bytes)+(null===(i=t.dpiDataTotal)||void 0===i?void 0:i.tx_bytes);return Z(c)===Z(l)&&e.subSection===t.subSection&&Object(g.a)(e.currentCategories,t.currentCategories)&&Object(g.a)(e.currentClientsUsageApps,t.currentClientsUsageApps)&&Object(g.a)(e.subSection,t.subSection)}),ft=a(763);const xt=Object(u.c)("div")`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 16px;
  width: 100%;
  height: calc(100% - 48px);
  padding: 20px;
  overflow: overlay;

  @media (max-width: ${({theme:e})=>e.breakpoints.bp1600}px) {
    grid-template-columns: 354px 1fr;
  }
  @media (max-width: ${({theme:e})=>e.breakpoints.bp900}px) {
    grid: minmax(452px, 60%) minmax(296px, calc(40% - 16px)) / minmax(375px, 100%);
  }
`;function Et(){const{site:e,id:t,subId:a,subSection:c}=Object(b.m)(),l=Object(b.k)(),{path:o}=Object(b.n)(),[s,d]=Object(n.useState)([]),[p,m]=Object(n.useState)(!0),[u,f]=Object(n.useState)([]),[x,E]=Object(n.useState)({cat:void 0,apps:[],appIds:[]}),[O,_,j,y]=Object(i.useSelector)(ft.c),C=Object(n.useCallback)(e=>{const t=O.map(e=>e.cat);Object(g.a)(e.sort(),t.sort())?m(!0):m(!1),d(e)},[O]);Object(n.useEffect)(()=>{const e=O.map(e=>e.cat);Object(g.a)(e.sort(),u.sort())||(p&&d(e.filter(e=>255!==e)),f(e))},[O]);const T=Object(n.useCallback)((e,t)=>{if(!e)return void E({cat:e,apps:[],appIds:[]});const a=_.filter(t=>t.cat===e.cat),n=Object(h.c)(a).map((e,a)=>{const n=t.includes(e.compoundAppId);return{...e,selected:n,color:n?Object(h.b)(a)[4]:"#EDEDF0"}}),r=n.reduce((e,t)=>t.selected?[...e,t.compoundAppId]:e,[]);E({cat:e,apps:n,appIds:r})},[_]);Object(n.useEffect)(()=>{const n=""!==t?Object(le.a)(Number(t)):void 0,r=n?O.find(e=>e.cat===Number(n)):void 0,i=a?a.split(",").map(e=>Number(e)):[];if(r&&i.length){T(r,i);const t=Object(b.i)(o,{subSection:"clients",section:"traffic",site:e});l.push(t)}if(!r&&!i.length&&!x.cat&&"clients"===c){const t=Object(b.i)(o,{subSection:"overview",section:"traffic",site:e});l.push(t)}},[t,a]);const v=e=>[...e].sort((e,t)=>255===e.cat?1:255===t.cat?-1:0);return r.a.createElement(xt,null,r.a.createElement(ht,{dpiDataByCategory:v(O),currentCategories:s,updateCurrentCategories:C,currentClientsUsageApps:x,updateCurrentClientUsageApps:T,dpiDataTotal:y,subSection:c}),r.a.createElement(Qe,{dpiDataByCategory:v(O),dpiDataByApp:_,currentCategories:s,clients:j,currentClientsUsageApps:x,updateCurrentClientUsageApps:T,dpiDataTotal:y}))}var Ot=a(1128),_t=a(464),jt=a(20),yt=a(21),Ct=a(1994),Tt=a(18),vt=a(32),wt=a(2892),At=a(13),Ft=a(42),kt=a(137),St=a(2066),It=a(47),Lt=a(467),Rt=a(97),Dt=a(203);const Bt=u.a`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-right: 12px;
  overflow-x: unset !important;

  > div {
    margin: initial;
  }
`,Mt=Object(u.c)(It.a)`
  text-transform: uppercase;
`,$t=Object(u.c)("div")`
  display: flex;
  align-items: center;
  white-space: nowrap;
`,Nt=Object(u.c)(O.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  @media (max-width: 720px) {
    padding: 0;
  }
  ${({hasCustomRange:e})=>e?"@media (max-width: 1000px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }":"@media (max-width: 850px) {\n    & > * > button {\n      display: none;\n      &:nth-last-of-type(1) {\n        display: flex;\n      }\n    }\n  }"}
`,Pt=u.a`
  overflow-y: auto;
  max-height: calc(90vh - 52px);
  padding: 0 !important;
  border: none;
`,Ut=u.a`
  background-color: transparent !important;
`,zt=(e,t,a,n,i,c)=>[...e.map(e=>({id:e.id,label:r.a.createElement(Mt,{size:"small",message:e.message,values:e.messageValues})})),{id:"Custom",className:Ut,label:r.a.createElement(j.a,{classNameCard:Pt,align:"bottomLeft",renderToggle:c},r.a.createElement(wt.a,{initialStartDate:Object(kt.a)(t.startDate,a),initialEndDate:Object(kt.a)(Object(vt.subSeconds)(t.endDate,1),a),numberOfMonths:2,disabledDays:{after:Object(kt.a)(new Date,a)},onRangeSelected:({startDate:e,endDate:t})=>{const r=Object(kt.i)(e,a),c=Object(kt.b)(t,a);n({startDate:r,endDate:c}),i(Object(Dt.l)({startDate:r,endDate:c,preset:null}))},showInputs:!0}))}];var Wt=({tabsVariant:e,customRange:t,setCustomRange:a})=>{const c=Object(i.useDispatch)(),l=Object(i.useSelector)(ft.b),o=Object(i.useSelector)(Ft.selectLocaleSettings),s=Object(i.useSelector)(At.N),d=Object(i.useSelector)(ft.a),p=Object(i.useSelector)(Rt.b),m=Object(kt.d)(s,o,p),[u,b]=Object(n.useState)(Lt.d),g=Object(n.useCallback)(()=>r.a.createElement($t,null,t?r.a.createElement(St.a,{start:t.startDate,end:t.endDate,timezone:m}):r.a.createElement(E.r,null)),[t,m]);return r.a.createElement(Nt,{tabs:zt(l,d,m,a,c,g),selectedTab:u,onSelectTab:({id:e})=>(e=>{const a=l.find(t=>t.id===e);if(a){const t=new Date,{startDate:n,endDate:r}=a.getRange(t);c(Object(Dt.l)({startDate:n,endDate:r,preset:e}))}else t&&c(Object(Dt.l)({...t,preset:null}));b(e)})(e),className:Bt,variant:e,hasCustomRange:t})};const Yt=Object(u.c)(Ct.a)`
  justify-content: center;
`,Zt=Object(u.c)(y.a,{shouldForwardProp:e=>"hasCustomRange"!==e})`
  font-size: 14px;
  ${({hasCustomRange:e})=>e?"@media (max-width: 650px) {\n    margin: 0 300px 0 auto;\n  }":"@media (max-width: 410px) {\n    margin: 0 180px 0 auto;\n  }"}
`,qt=Object(u.c)(f.g)`
  position: absolute;
  right: 36px;
`,Gt=e=>t=>t(Object(_t.a)({title:"STATISTICS_RESET_DATA_MODAL_TITLE",message:"STATISTICS_RESET_DATA_MODAL_MESSAGE",onConfirm:()=>t((e=>async t=>{t(Object(jt.e)());try{await Promise.all([t(Object(Ot.a)()),t(Object(m.b)())]),t(Object(yt.c)({icon:Tt.a.success,message:"STATISTICS_RESET_DATA_SUCCESS"})),Object(m.a)({timestampFrom:e.startDate.getTime(),timestampTo:e.endDate.getTime()}),Object(c.a)()}catch{t(Object(yt.c)({icon:Tt.a.danger,message:"STATISTICS_RESET_DATA_ERROR"}))}})(e)),confirmButtonText:"COMMON_ACTION_RESET",confirmButtonProps:{variant:"danger"}}));var Ht=()=>{const e=Object(i.useDispatch)(),t=Object(i.useSelector)(m.c),[a,c]=Object(n.useState)(null);return r.a.createElement(Yt,{isLoading:!1},r.a.createElement(Zt,{weight:"bold",hasCustomRange:a},r.a.createElement(x.c,{id:"STATISTICS_TABS_TRAFFIC"})),r.a.createElement(qt,null,r.a.createElement(Wt,{customRange:a,setCustomRange:c}),r.a.createElement(_.a,{variant:"link",onClick:()=>e(Gt(t))},r.a.createElement(y.a,null,r.a.createElement(x.c,{id:"STATISTICS_RESET_DATA_BUTTON_LABEL"})))))};const Vt=Object(u.c)("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;var Jt=()=>{const{site:e}=Object(b.m)(),{path:t}=Object(b.n)(),{section:a}=Object(b.m)(),i=Object(b.k)();return Object(n.useEffect)(()=>{if(`/${e}/statistics`===i.location.pathname){const a=Object(b.i)(t,{subSection:"overview",section:"traffic",site:e});i.push(a)}},[i,i.location.pathname,t,e]),r.a.createElement(Vt,null,r.a.createElement(Ht,null),"traffic"===a&&r.a.createElement(Et,null))};const Kt=a(92).a["24_HOURS"];t.default=()=>{const e=Object(i.useDispatch)(),t=Object(i.useSelector)(p.a),{startDate:a,endDate:u}=t[Kt].getRange(new Date),b=Kt;return Object(n.useEffect)(()=>()=>{e(Object(Dt.k)()),e(Object(Dt.j)())},[]),Object(d.e)([Object(o.c)("statistics"),Object(Dt.g)({startDate:a,endDate:u,preset:b}),Object(m.a)({timestampFrom:a.getTime(),timestampTo:u.getTime()}),Object(Dt.i)(),Object(l.a)(),Object(c.a)()],r.a.createElement(s.a,null,r.a.createElement(Jt,null)),{trackingName:"statistics"})}}}]);