(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[52],{1812:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),c=a(8),o=a(13),l=a(42),s=a(1945),m=a(21),d=a(64),p=a(18),E=a(2),u=a(820),_=a(28),S=a(36),b=a(270),O=a(1753),I=a(1754),T=a(1755),g=a(5),h=a(45),f=a(1128),C=a(97),N=a(54),R=a(95),j=a(140),A=a(75),D=a(1137);const y=Object(g.c)(j.a)`
  mark {
    background: initial;
    color: ${({theme:e})=>e.motifPalette.danger};
  }
`;var v=()=>{const{setFieldValue:e,initialValues:t}=Object(h.e)(),[a,l]=Object(n.useState)(!1),s=Object(c.useSelector)(C.k),m=Object(c.useSelector)(o.u),d=Object(c.useSelector)(f.b),p=Object(c.useDispatch)(),E=Object(n.useCallback)(e=>{!e&&t.enabled&&l(!0)},[t.enabled]),u=Object(n.useCallback)(()=>{e("enabled",!0),l(!1)},[e]),_=Object(n.useCallback)(()=>{l(!1)},[]);return i.a.createElement(O.a,null,i.a.createElement(y,{isOpen:a,onCancel:u,onConfirm:_,title:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_DISABLE_CONFIRM_MODAL_TEXT",confirmButtonProps:{variant:"danger",children:i.a.createElement(r.c,{id:"COMMON_ACTION_DISABLE"})}}),i.a.createElement(I.a,null,i.a.createElement(A.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"enabled",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_DPI"}),description:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_DPI",values:{isUDM:s}}),searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_DPI",searchTags:["dpi"]}),i.a.createElement(T.a,null,i.a.createElement(N.Field,{name:"enabled",type:"checkbox",afterChange:E}))),s&&i.a.createElement(I.a,null,i.a.createElement(A.SearchableGridLabel,{alignWith:"toggleSmall",htmlFor:"fingerprintingEnabled",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_LABEL_ENABLE_FINGERPRINTING"}),description:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_DESCRIPTION_ENABLE_FINGERPRINTING"}),searchIsApplicable:"isUdm",searchText:"SETTINGS_SECURITY_DPI_SEARCH_LABEL_ENABLE_FINGERPRINTING"}),i.a.createElement(T.a,null,i.a.createElement(N.Field,{name:"fingerprintingEnabled",type:"checkbox"}))),i.a.createElement(I.a,{disabled:m},i.a.createElement(A.SearchableGridLabel,{label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_LABEL_CLEAR_DPI_COUNTERS"}),searchIgnore:!0}),i.a.createElement(T.a,null,i.a.createElement(R.c,{name:"clear-dpi-counters",type:"button",variant:"inline",legacy:!1,disabled:d,onClick:()=>p(Object(D.a)())},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_LABEL_CLEAR_DPI_COUNTERS"})))))},x=a(1917),G=a(31),P=a(23),L=a(1972),w=a(16),k=a(22),U=a(188),M=a(24),F=a(1969),B=a(146);const Y=B.dpi.ruleMap.categories,W=B.dpi.ruleMap.applications,$=Object.keys(Y).reduce((e,t)=>{const{name:a}=Y[t];return e[a]?e[a].push(t):e[a]=[t],e},{}),V=Object.entries($).map(([e,t])=>({categoryIds:t,name:e,id:e})).sort((e,t)=>e.name.localeCompare(t.name)),H=(e,t)=>t?e?i.a.createElement(P.v,{width:12,height:12}):"-":null,z=V.map(({name:e})=>({value:e,label:e})),X=Object(g.c)(P.Jb)`
  margin-right: ${({theme:e})=>e.spacing["spacing-s"]};
`,K=[{id:"name",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_NAME"}),renderCell:({name:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(X,{height:18,width:16})," ",e),minWidth:110},{id:"categoryNames",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_CATEGORIES"}),renderCell:({cats:e})=>e&&e.length,minWidth:100},{id:"apps",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_APPS"}),renderCell:({apps:e})=>e&&e.length,minWidth:65},{id:"enabled",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_ENABLED"}),renderCell:({enabled:e,child:t})=>H(e,t),align:"center",minWidth:75},{id:"blocked",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_BLOCKED"}),renderCell:({blocked:e,child:t})=>H(e,t),align:"center",minWidth:90},{id:"log",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_TABLE_HEADER_LOG_TRAFFIC"}),renderCell:({log:e,child:t})=>H(e,t),align:"center",minWidth:90}],q=[{id:"name",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"ip_subnet",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET"}),minWidth:80},{id:"ipv6_subnet",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SUBNET_IPV6"}),minWidth:130},{id:"vlan",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}],J=[{id:"name",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_WIRELESS_NETWORK"}),minWidth:140},{id:"dpiGroupName",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GROUP_NAME"}),minWidth:110},{id:"security",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_SECURITY"}),renderCell:({security:e})=>i.a.createElement(r.c,{id:Object(S.getWlanSecurityTypeTranslationKey)(e)}),minWidth:80},{id:"is_guest",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_GUEST_NETWORK"}),renderCell:({is_guest:e})=>H(e,!0),minWidth:130},{id:"vlan",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TABLE_HEADER_VLAN"}),minWidth:80}];var Q=a(3),Z=a(1861),ee=a(775);const te=e=>({value:e.toString(),label:W[e].name,appIds:[e.toString()],...W[e]}),ae=e=>V.find(t=>t.name===e),ne=e=>Object(Z.a)(e.map(e=>V.find(t=>t.categoryIds.includes(e)).name)),ie=e=>Object(Z.a)(e.map(e=>V.find(t=>t.categoryIds.includes(e)).name)),re=(e,t)=>e.filter(e=>((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)).map((e=>t=>{const{dpigroup_id:a}=t,{name:n}=e.find(({_id:e})=>a===e);return{...t,dpiGroupName:n}})(t)),ce=(e,t)=>e.find(e=>e.dpiapp_ids&&e.dpiapp_ids.some(e=>e===t)),oe=e=>e.map(({name:e,_id:t})=>({label:e,value:t})),le=(e,t)=>!!e.find(e=>!((e,t)=>{const{dpigroup_id:a}=t,n=!!a,i=!!e.find(({_id:e})=>a===e);return n&&i})(t,e)),se=(e,t,a)=>e.map(e=>{const n=t.find(({_id:t})=>t===e),i=[...n.cats.reduce((e,t)=>{const a=V.find(e=>e.categoryIds.includes(t));return e.add(a.name)},new Set)];return{...n,parentId:a,categoryNames:i}}),me=Object(Q.a)(b.selectDpiGroups,u.selectDpiApps,(e,t)=>e.reduce((e,a)=>{const{dpiapp_ids:n}=a,i={...a,children:[]};return n&&n.length&&(i.children=se(n,t,a._id)),e.push(i),e},[])),de=Object(Q.a)(_.selectNetworksData,b.selectDpiGroups,(e,t)=>le(e.filter(_.isCorporateOrGuestNetwork),t)),pe=Object(Q.a)(S.selectWifiNetworksData,b.selectDpiGroups,le),Ee=Object(Q.a)(b.selectDpiGroups,oe),ue=Object(Q.a)(S.selectWifiNetworksData,b.selectDpiGroups,re),_e=Object(Q.a)(_.selectNetworksData,b.selectDpiGroups,re),Se=Object(Q.a)(_.selectNetworksData,b.selectDpiGroups,(e,t)=>oe(e.filter(_.isCorporateOrGuestNetwork))),be=Object(Q.a)(S.selectWifiNetworksData,b.selectDpiGroups,oe);var Oe=a(170),Ie=a(52);const Te=Object(g.c)(R.g)`
  font-size: 18px !important;
  padding: 25px 40px 0 40px;
  color: ${({theme:e})=>e.motifPalette.text01};
`,ge=Object(g.c)("div")`
  position: absolute;
  right: 40px;
`,he=Object(g.c)(R.c)`
  width: 20px;
  color: ${({theme:e})=>e.motifPalette.icon02} !important;
`;var fe,Ce=({onClose:e,title:t,closeActionName:a})=>i.a.createElement(Te,{justifyContent:"center"},t,i.a.createElement(ge,null,i.a.createElement(he,{variant:"inline",name:a,legacy:!1,onClick:e},i.a.createElement(P.A,null))));!function(e){e.RESTRICTION="restriction",e.RESTRICTION_GROUP="restrictionGroup",e.WIRELESS_ASSIGNMENTS="wirelessAssignments",e.WIRED_ASSIGNMENTS="wiredAssignments"}(fe||(fe={}));const Ne=Object(g.c)("footer")`
  padding: 0 40px 32px 40px;
`,Re=Object(g.c)(O.a)`
  padding: 32px 40px !important;
`,je=Object(g.c)(T.a)`
  flex: 1;
`,Ae=Object(g.c)(Ie.a)`
  padding: 0 !important;
  width: 476px !important;
`,De=Object(g.c)(Oe.a)`
  width: 128px !important;
`,ye=Object(g.c)("div")`
  margin-right: auto;
`;var ve=({onOpenConfirmModal:e,setCurrentOnClose:t})=>{const a=Object(c.useDispatch)(),l=Object(G.k)(),{formName:s,primaryId:m}=Object(G.m)(),p=Object(c.useSelector)(Se),E=Object(c.useSelector)(be),u=Object(c.useSelector)(Ee),b=Object(c.useSelector)(_.selectNetworksData),O=Object(c.useSelector)(S.selectWifiNetworksData),T=Object(d.h)("security/traffic"),g=Object(c.useSelector)(o.u),f=s===fe.WIRED_ASSIGNMENTS,C=s===fe.WIRELESS_ASSIGNMENTS,j=f||C,A=()=>l.push(T),D=Object(n.useMemo)(()=>{const e=f?p:E,t=f?b:O;let a=e.length?e[0].value:"",n=u[0].value;return j&&m&&(a=e.find(e=>e.value===m).value,n=t.find(e=>e._id===m).dpigroup_id),{networkId:a,restrictionGroupId:n}},[f,p,E,b,O,u,j,m]);return i.a.createElement(h.c,{initialValues:D,onSubmit:async({networkId:e,restrictionGroupId:t},{setSubmitting:n})=>{try{const n=Object(k.a)("SETTINGS_SECURITY_DPI_ASSIGN_SAVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_SAVE_SUCCESS"),i=O.find(t=>t._id===e);if(i&&i._id){const r={...i,dpi_enabled:!0,dpigroup_id:t};await a(Object(S.updateWifiNetwork)(e,r,void 0,n))}const r=b.find(t=>t._id===e);if(r&&r._id){const e={...r,dpi_enabled:!0,dpigroup_id:t};await a(Object(_.updateNetwork)(e,{},n))}A()}catch(i){n(!1)}},enableReinitialize:!0},i.a.createElement(Ae,{footer:()=>{const{handleSubmit:a,isSubmitting:n}=Object(h.e)();return i.a.createElement(Ne,null,i.a.createElement(R.g,{alignItems:"center",justifyContent:"flex-end"},!g&&m&&i.a.createElement(ye,null,i.a.createElement(Oe.a,{type:"button",disabled:n,variant:"default",onClick:()=>{e(D.networkId),t(()=>A)}},i.a.createElement(r.c,{id:"COMMON_ACTION_REMOVE"}))),i.a.createElement(De,{legacy:!1,name:"restrictionAssignmentModal-close",onClick:()=>A,disabled:n},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(Oe.a,{type:"submit",variant:"primary",name:"restrictionAssignmentModal-assign-dpi-group",onClick:()=>a(),disabled:n},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_BUTTON"}))))},isOpen:j,header:i.a.createElement(Ce,{title:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ASSIGN_TITLE"}),onClose:A,closeActionName:"restrictionAssignmentModal-close"}),onRequestClose:A},i.a.createElement(Re,null,i.a.createElement(I.a,null,i.a.createElement(je,null,i.a.createElement(N.Field,{name:"networkId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_NETWORK",type:"dropdown",options:f?p:E,disabled:!!m,full:!0}))),i.a.createElement(I.a,null,i.a.createElement(je,null,i.a.createElement(N.Field,{name:"restrictionGroupId",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ASSIGN_LABEL_RESTRICTION_GROUP",type:"dropdown",options:u,full:!0}))))))},xe=a(30);const Ge=Object(g.c)("footer")`
  padding: 0 40px 32px 40px;
`,Pe=Object(g.c)(O.a)`
  padding: 32px 40px !important;
`,Le=Object(g.c)(Ie.a)`
  padding: 0 !important;
  width: 342px !important;
`,we=Object(g.c)(R.c)`
  width: 128px !important;
`,ke=xe.a.object().shape({name:xe.a.string().label("SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL").required()});var Ue=()=>{const e=Object(c.useDispatch)(),t=Object(G.k)(),{formName:a,primaryId:o}=Object(G.m)(),l=Object(d.h)("security/traffic"),s=()=>t.push(l),m=Object(c.useSelector)(Object(b.selectDpiGroup)(o)),p=Object(n.useMemo)(()=>({name:"",...m}),[m]);return i.a.createElement(h.c,{initialValues:p,validationSchema:ke,onSubmit:async(t,{setSubmitting:a})=>{try{await e(Object(b.saveDpiGroup)(t,{withToast:!0})),s()}catch(n){a(!1)}},enableReinitialize:!0},i.a.createElement(Le,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(h.e)();return i.a.createElement(Ge,null,i.a.createElement(R.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(we,{legacy:!1,name:"restrictionDpiGroupModal-close",onClick:()=>s(),disabled:t},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(R.c,{type:"submit",variant:"primary",legacy:!1,name:"restrictionDpiGroupModal-save-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_SAVE"}))))},isOpen:a===fe.RESTRICTION_GROUP,header:i.a.createElement(Ce,{title:i.a.createElement(r.c,{id:o?"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_EDIT_TITLE":"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_TITLE"}),onClose:s,closeActionName:"restrictionDpiGroupModal-close"}),onRequestClose:s},i.a.createElement(Pe,null,i.a.createElement(I.a,null,i.a.createElement(T.a,{column:!0},i.a.createElement(N.Field,{name:"name",label:"SETTINGS_SECURITY_DPI_MODAL_CREATE_RESTRICTION_GROUP_LABEL",full:!0}))))))},Me=a(44),Fe=a(1205),Be=a(6),Ye=a(1194),We=a(1204),$e=a(1850),Ve=a(1924);const He=Object(g.c)(O.a)`
  padding: 32px 40px !important;
`,ze=Object(g.c)(I.a)`
  justify-content: space-between !important;
`,Xe=Object(g.c)(Ye.a)`
  background: ${({theme:e})=>e.motifPalette.ui04} !important;
`,Ke=Object(g.c)(N.Field)`
  label {
    color: ${({theme:e})=>e.motifPalette.ui05} !important;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`,qe=Object(g.c)(T.a)`
  flex: 0 !important;
  justify-content: flex-end !important;
`,Je=Object(g.c)(N.Field,{shouldForwardProp:e=>"hideChips"!==e})`
  // hide multi Dropdown chips, show our own chips, because 'apps' values can be different than 'options' prop
  >div: nth-child(2) {
    display: ${({hideChips:e})=>e?"none":"flex"};
  }

  label {
    left: -24px;
  }

  input::placeholder {
    color: ${({theme:e})=>e.motifPalette.text01} !important;
  }
`;var Qe=Object(r.f)(({intl:e})=>{var t;const{values:a,setFieldValue:o,submitCount:l,errors:s}=Object(h.e)(),m=Object(c.useSelector)(Be.selectIsDpiSupportedByGateway),d=Object(n.useCallback)((e,t)=>{let n=[...t];if(e.categoryIds){const i=!t.find(t=>t===e.value),r=a.cats.filter(t=>!e.categoryIds.includes(t)),c=i?r:[...a.cats,...e.categoryIds],l=V.find(e=>e.name===a.selectedCategoryName);i||(n=n.filter(e=>!l.categoryIds.some(t=>Number(t)===Object(w.a)(W[e],"category_id"))),o("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!e.categoryIds})))),i&&e.categoryIds===l.categoryIds&&o("applicationOptions",a.applicationOptions.map(e=>({...e,disabled:!1}))),o("cats",c)}o("apps",n)},[o,a.applicationOptions,a.cats,a.selectedCategoryName]),p=Object(n.useMemo)(()=>a.apps.map(e=>{const t=ae(e),n=Object(w.a)(W[e],"name")||t.name;return i.a.createElement(Xe,{key:e,label:n,onClose:()=>{d(W[e]||t,a.apps.filter(t=>t!==e))}})}),[a.apps,d]);return Object(n.useEffect)(()=>{a.selectedCategoryName&&o("applicationOptions",((e,t)=>{const a=ae(e);return[{...a,value:a.id,label:t.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ALL_APPLICATIONS_VALUE"})},...$[e].reduce((e,t)=>[...e,...Y[t].applications],[]).map(te)]})(a.selectedCategoryName,e))},[a.selectedCategoryName]),i.a.createElement(He,null,m?i.a.createElement(I.a,null,i.a.createElement(T.a,{column:!0},i.a.createElement(Ke,{name:"selectedCategoryName",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",options:z,width:"100%",searchable:!0}))):i.a.createElement(I.a,null,i.a.createElement(T.a,{column:!0},i.a.createElement(Je,{name:"cats",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL",multi:!0,options:z,width:"100%",validated:!0,searchable:!0}))),m&&i.a.createElement(I.a,null,i.a.createElement(T.a,{column:!0},i.a.createElement(Je,{name:"apps",type:"dropdown",translateLabel:!0,label:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL",searchable:!0,multi:!0,options:a.applicationOptions||[],onChange:d,width:"100%",hideChips:!0,disabled:!(null===(t=a.applicationOptions)||void 0===t?void 0:t.length)}),!!Object(w.a)(s,"apps")&&!!l&&i.a.createElement(N.ValidationMessage,{visible:!0},Object(w.a)(s,"apps")),i.a.createElement(We.a,null,p))),i.a.createElement($e.a,{marginBottom:"xxxxl"}),i.a.createElement(ze,{unlimitedWidth:!0},i.a.createElement(Ve.a,{htmlFor:"blocked",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_LABEL"}),description:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_BLOCKED_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(qe,null,i.a.createElement(N.Field,{name:"blocked",type:"checkbox"}))),i.a.createElement(ze,{unlimitedWidth:!0},i.a.createElement(Ve.a,{htmlFor:"log",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_LABEL"}),description:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_LOG_DESCRIPTION"}),alignWith:"toggleSmall"}),i.a.createElement(qe,null,i.a.createElement(N.Field,{name:"log",type:"checkbox"}))),i.a.createElement(ze,{unlimitedWidth:!0},i.a.createElement(Ve.a,{htmlFor:"groupEnabled",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_ENABLED_LABEL"}),alignWith:"toggleSmall"}),i.a.createElement(qe,null,i.a.createElement(N.Field,{name:"groupEnabled",type:"checkbox"}))),i.a.createElement($e.a,null))});const Ze=Object(g.c)("footer")`
  padding: 0 40px 32px 40px;
`,et=Object(g.c)(Ie.a)`
  padding: 0 !important;
  width: 378px !important;
`,tt=Object(g.c)(Oe.a)`
  width: 128px !important;
`,at=Object(Me.a)((e,t,a,n)=>{const i=Object(Z.a)(Object(w.a)(t,"cats",[])),r=Object(w.a)(t,"apps",[]);return{_id:null==t?void 0:t._id,group:a&&a._id||e[0].value,groupEnabled:Object(w.a)(t,"enabled",!1),cats:n?i:ie(i),apps:[...r.map(Number),...ne(i)],blocked:Object(w.a)(t,"blocked",!1),log:Object(w.a)(t,"log",!1)}}),nt=Object(Me.a)((e,t)=>t?xe.a.object().shape({cats:xe.a.array(),apps:xe.a.array().when("cats",{is:e=>!e.length,then:xe.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_APPLICATION_LABEL"})),otherwise:xe.a.array()})}):xe.a.object().shape({cats:xe.a.array().min(1).label(e.formatMessage({id:"SETTINGS_SECURITY_DPI_ADD_RESTRICTION_SELECT_CATEGORY_LABEL"}))}));var it=Object(r.f)(({intl:e})=>{const t=Object(c.useDispatch)(),a=Object(G.k)(),o=Object(c.useSelector)(Be.selectIsDpiSupportedByGateway),{formName:l,primaryId:s,secondaryId:m}=Object(G.m)(),p=Object(c.useSelector)(Object(u.selectDpiApp)(m)),E=Object(c.useSelector)(Object(b.selectDpiGroup)(s)),_=Object(c.useSelector)(Ee),S=Object(d.h)("security/traffic"),O=()=>a.push(S),I=Object(n.useMemo)(()=>({...at(_,p,E,o)}),[_,p,E,o]);return l===fe.RESTRICTION&&i.a.createElement(h.c,{initialValues:I,validationSchema:nt(e,o),onSubmit:async(e,a)=>{const n=at(_,p,E,o),{apps:i,blocked:r,cats:c,groupEnabled:l,log:s,group:m}=e,d={apps:i.filter(Number).map(Number),blocked:r,cats:o?c:(S=c,Object(ee.a)(S.map(e=>V.find(t=>t.name===e).categoryIds))),enabled:l,log:s};var S;const b={...p,...d};try{await t(Object(u.saveDpiAppToDpiGroup)(b,m,n.group)),O()}catch(I){a(!1)}},enableReinitialize:!0},i.a.createElement(et,{footer:()=>{const{handleSubmit:e,isSubmitting:t}=Object(h.e)();return i.a.createElement(Ze,null,i.a.createElement(R.g,{alignItems:"center",justifyContent:"flex-end"},i.a.createElement(tt,{legacy:!1,name:"restrictionModal-close",onClick:()=>O(),disabled:t},i.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(Oe.a,{type:"submit",variant:"primary",name:"restrictionModal-save-dpi-app-to-dpi-group",onClick:()=>e(),disabled:t},i.a.createElement(r.c,{id:!Object(Fe.a)(p)&&E?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}))))},isOpen:!0,header:i.a.createElement(Ce,{title:i.a.createElement(r.c,{id:!Object(Fe.a)(p)&&E?"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_EDIT_RESTRICTION":"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"}),onClose:O,closeActionName:"restrictionModal-close"}),onRequestClose:O},i.a.createElement(Qe,null)))});const rt=Object(g.c)(M.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,ct=Object(g.c)("div")`
  margin-top: 15px;
  padding-bottom: 28px;
`;var ot=()=>{const e=Object(G.k)(),t=Object(c.useDispatch)(),a=Object(c.useSelector)(me),o=Object(c.useSelector)(b.selectDpiGroups),l=Object(n.useContext)(R.l),[s,p]=Object(n.useState)(!1),[E,_]=Object(n.useState)(null),S=Object(d.h)("security/traffic/restrictionGroup"),O=Object(d.h)("security/traffic/restriction"),I=Object(w.a)(E,"children",null),T=Object(n.useCallback)(e=>{_(e),p(!0)},[p]),g=Object(n.useCallback)(async()=>{if(s){p(!1);const a={...ce(o,E._id)};a.dpiapp_ids=a.dpiapp_ids.filter(e=>e!==E._id);const{successToast:n,failureToast:i}=Object(k.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_SUCCESS");try{await t(Object(b.saveDpiGroup)(a)),await t(Object(u.removeDpiApp)(E._id)),t(Object(m.c)(n))}catch(e){t(Object(m.c)(i(void 0,e)))}}},[t,o,E,s]),h=Object(n.useCallback)(async()=>{const{successToast:e,failureToast:a}=Object(k.a)("SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_ERROR","SETTINGS_SECURITY_DPI_MODAL_REMOVE_GROUP_SUCCESS");try{if(await t(Object(b.removeDpiGroup)(E._id)),E.dpiapp_ids){const e=E.dpiapp_ids.map(e=>t(Object(u.removeDpiApp)(e)));await Promise.all(e)}p(!1),t(Object(m.c)(e))}catch(n){t(Object(m.c)(a(null,n)))}},[t,E]),f=Object(n.useCallback)(()=>{I?h():g()},[I,h,g]);return i.a.createElement(ct,null,i.a.createElement(L.a,{idField:"_id",columns:K,items:a,disableColumnFilters:!0,disableTextPointer:!0,renderRowPopoverContent:t=>i.a.createElement(F.e,null,!l&&!t.parent&&i.a.createElement(U.c,{legacy:!1,name:"security-dpi-restriction-edit",type:"button",variant:"inline",onClick:()=>e.push(`${O}/${ce(o,t._id)._id}/${t._id}`)},i.a.createElement(r.c,{id:"COMMON_ACTION_EDIT"})),!l&&!t.attr_no_delete&&t.parent&&i.a.createElement(U.c,{legacy:!1,name:"security-dpi-restriction-group-edit",type:"button",variant:"inline",onClick:()=>e.push(`${S}/${t._id}`)},i.a.createElement(r.c,{id:"COMMON_ACTION_EDIT"})),!l&&!t.attr_no_delete&&i.a.createElement(U.c,{legacy:!1,name:"security-dpi-restriction-remove",onClick:()=>T(t),type:"button",variant:"inline"},i.a.createElement(r.c,{id:"COMMON_ACTION_REMOVE"})),!l&&t.parent&&i.a.createElement(U.c,{legacy:!1,name:"security-dpi-restriction-add",type:"button",variant:"inline",onClick:()=>e.push(`${O}/${t._id}`)},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_ADD_RESTRICTION"})))}),i.a.createElement(rt,{alignItems:"center"},i.a.createElement(U.c,{name:"security-dpi-restriction-group-add",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(S),Icon:i.a.createElement(P.ub,null)},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_BUTTON_CREATE_NEW"}))),i.a.createElement(it,null),i.a.createElement(Ue,null),i.a.createElement(j.a,{isOpen:s,title:I?"COMMON_QUESTION_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_TITLE",message:I?"COMMON_QUESTION_ARE_YOU_SURE_YOU_WANT_TO_REMOVE":"SETTINGS_SECURITY_DPI_MODAL_REMOVE_APP_DESCR",messageValues:{name:Object(w.a)(E,"name")},titleValues:{name:Object(w.a)(E,"name")},onConfirm:f,onCancel:()=>p(!1)}))};const lt=Object(g.c)(M.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,st=Object(g.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var mt=()=>{const e=Object(G.k)(),t=Object(c.useSelector)(_e),a=Object(c.useSelector)(de),n=Object(d.h)("security/traffic/"+fe.WIRED_ASSIGNMENTS);return i.a.createElement(st,null,i.a.createElement(L.a,{idField:"_id",columns:q,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${n}/${t}`)}),i.a.createElement(lt,{alignItems:"center"},a&&i.a.createElement(U.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(n),Icon:i.a.createElement(P.n,null)},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_BUTTON"}))))};const dt=Object(g.c)(M.a)`
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,pt=Object(g.c)("div")`
  margin-top: 35px;
  padding-bottom: 3px;
`;var Et=()=>{const e=Object(G.k)(),t=Object(c.useSelector)(ue),a=Object(d.h)("security/traffic/"+fe.WIRELESS_ASSIGNMENTS),n=Object(c.useSelector)(pe);return i.a.createElement(pt,null,i.a.createElement(L.a,{idField:"_id",columns:J,items:t,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,onRowClick:({_id:t})=>e.push(`${a}/${t}`)}),i.a.createElement(dt,{alignItems:"center"},n&&i.a.createElement(U.c,{name:"dpi-assign-restriction",variant:"inline",legacy:!1,type:"button",onClick:()=>e.push(a),Icon:i.a.createElement(P.n,null)},i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_BUTTON"}))))};var ut=()=>{const e=Object(c.useDispatch)(),{formName:t}=Object(G.m)(),a=Object(c.useSelector)(_.selectNetworksData),o=Object(c.useSelector)(S.selectWifiNetworksData),[l,s]=Object(n.useState)(!1),[m,d]=Object(n.useState)(null),[p,E]=Object(n.useState)(void 0);return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{items:[{id:"networkRestrictions",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(mt,null),openByDefault:t===fe.WIRED_ASSIGNMENTS},{id:"wifiNetworkRestrictions",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_WIFI_NETWORK_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(Et,null),openByDefault:t===fe.WIRELESS_ASSIGNMENTS}],variant:"secondary",multiOpen:!0}),i.a.createElement(ve,{onOpenConfirmModal:e=>{s(!0),d(e)},setCurrentOnClose:E}),i.a.createElement(j.a,{isOpen:l,title:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_TITLE",message:"SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_MODAL_DESCR",onConfirm:()=>{(()=>{const t=Object(k.a)("SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_ERROR","SETTINGS_SECURITY_DPI_ASSIGN_REMOVE_SUCCESS"),n=o.find(e=>e._id===m);if(n&&n._id){const a={...n,dpi_enabled:!1,dpigroup_id:""};e(Object(S.updateWifiNetwork)(m,a,void 0,t)).then(()=>p?p():null)}const i=a.find(e=>e._id===m);if(i&&i._id){const a={...i,dpi_enabled:!1,dpigroup_id:""};e(Object(_.updateNetwork)(a,{},t)).then(()=>p?p():null)}s(!1)})()},onCancel:()=>{E(void 0),s(!1)}}))};const _t=Object(g.c)(x.a)`
  > li {
    margin-top: 28px !important;
  }
`;var St=()=>{const{formName:e}=Object(G.m)();return i.a.createElement(_t,{items:[{id:"dpiRestrictionDefinitions",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_DEFINITIONS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(ot,null),openByDefault:e===fe.RESTRICTION||e===fe.RESTRICTION_GROUP},{id:"dpiRestrictionAssignments",label:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_REST_ASSIGNMENTS_ACCORDION_LABEL"}),renderContent:()=>i.a.createElement(ut,null),openByDefault:e===fe.WIRED_ASSIGNMENTS||e===fe.WIRELESS_ASSIGNMENTS}],multiOpen:!0})};var bt=()=>Object(d.e)([Object(u.fetchDpiApps)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(b.fetchDpiGroups)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(_.fetchNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}}),Object(S.fetchWifiNetworks)(void 0,{crudCacheStrategy:{type:E.a.CACHE}})],i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(St,null)));t.default=()=>{const e=Object(c.useDispatch)(),t=Object(c.useSelector)(l.selectDpiSettings),a=Object(c.useSelector)(o.u),E=Object(d.g)(),u=Object(n.useMemo)(()=>({isSubmitted:!1}),[]),_=Object(n.useMemo)(()=>({enabled:!1,fingerprintingEnabled:!1,...t}),[t]),S=Object(n.useMemo)(()=>({component:i.a.createElement(r.c,{id:"SETTINGS_SECURITY_DPI_TITLE"}),message:"security-settings-dpi"}),[]),b=Object(n.useCallback)((t,{setStatus:a,setSubmitting:n,resetForm:i})=>e(Object(l.saveSettings)(t)).then(()=>{e(Object(m.c)({icon:p.a.success,message:"SETTINGS_SECURITY_DPI_SAVE_SUCCESS"})),a({isSubmitted:!0}),i({values:t})}).catch(t=>{e(Object(m.c)({errorMessage:t.msg,errorValues:t,icon:p.a.danger,message:"SETTINGS_SECURITY_DPI_SAVE_ERROR"})),n(!1)}),[e]);return i.a.createElement(s.b,{title:S,validationSchema:void 0,initialStatus:u,initialValues:_,isView:a,onSubmit:b,onEscClicked:E,goBack:E,isEdit:!0,showBack:!0,unsavedChangesModalIgnoredPaths:/\/(restrictionGroup|wiredAssignments|wirelessAssignments|restriction)((\/)|((\/[\w_-]+\/?))+)?$/},i.a.createElement(bt,null))}},1939:function(e,t,a){"use strict";var n=a(0),i=a(31);t.a=()=>{const e=Object(i.l)(),[t]=Object(n.useState)(e.pathname),[a,r]=Object(n.useState)(!1),c=Object(n.useRef)();return Object(n.useEffect)(()=>{r(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(c.current=setTimeout(()=>r(!0),500)),()=>clearTimeout(c.current)},[e.pathname,t]),a}},1941:function(e,t,a){"use strict";var n=a(25);Object(n.a)(".formFooter__beOiSeOS{position:relative;overflow:hidden;width:100%;flex:none;transition:height .1s ease,transform .1s ease}.formFooterContent__beOiSeOS{position:absolute;display:flex;width:100%;align-items:flex-start}.formFooterContent-align-left__beOiSeOS{justify-content:flex-start}.formFooterContent-align-center__beOiSeOS{justify-content:center}.formFooterContent-align-right__beOiSeOS{justify-content:flex-end}.formFooterContent-light__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#fff,#f4f4f5)}.formFooterContent-dark__beOiSeOS.formFooterContent-backgroundGradient__beOiSeOS{background:linear-gradient(90deg,#151725,#242635)}.formFooterButtonWrap__beOiSeOS{flex:0 1 100px}.formFooterButtonWrap__beOiSeOS:not(:last-child){margin-right:16px}.formFooterTertiaryButtonWrap__beOiSeOS:not(:last-child){margin-right:28px}button.formFooterButton-default-size-small__beOiSeOS{height:30px}button.formFooterButton-default-size-medium__beOiSeOS{height:34px}button.formFooterButton-default-size-large__beOiSeOS{height:50px}.formFooterSummary__beOiSeOS{flex:1}.formFooterSummary__beOiSeOS:not(:last-child){margin-right:16px}.formFooterSummaryTitle__beOiSeOS{margin-bottom:8px;margin-top:0}.formFooterSummaryParagraph__beOiSeOS{margin-bottom:0;margin-top:0}"),t.a={formFooter:"formFooter__beOiSeOS",formFooterContent:"formFooterContent__beOiSeOS","formFooterContent-align-left":"formFooterContent-align-left__beOiSeOS","formFooterContent-align-center":"formFooterContent-align-center__beOiSeOS","formFooterContent-align-right":"formFooterContent-align-right__beOiSeOS","formFooterContent-light":"formFooterContent-light__beOiSeOS","formFooterContent-backgroundGradient":"formFooterContent-backgroundGradient__beOiSeOS","formFooterContent-dark":"formFooterContent-dark__beOiSeOS",formFooterButtonWrap:"formFooterButtonWrap__beOiSeOS",formFooterTertiaryButtonWrap:"formFooterTertiaryButtonWrap__beOiSeOS","formFooterButton-default-size-small":"formFooterButton-default-size-small__beOiSeOS","formFooterButton-default-size-medium":"formFooterButton-default-size-medium__beOiSeOS","formFooterButton-default-size-large":"formFooterButton-default-size-large__beOiSeOS",formFooterSummary:"formFooterSummary__beOiSeOS",formFooterSummaryTitle:"formFooterSummaryTitle__beOiSeOS",formFooterSummaryParagraph:"formFooterSummaryParagraph__beOiSeOS"}},1945:function(e,t,a){"use strict";a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return D}));var n=a(0),i=a.n(n),r=a(5),c=a(4),o=a(45),l=a(1973),s=a(1974),m=a(1948),d=a(799),p=a(95),E=a(1952),u=a(23),_=a(49),S=a(40),b=a(1848),O=a(793),I=a(1939);const T=r.a`
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
`;var g=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(I.a)(),l=Object(O.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!l||o,in:t||!l||o,timeout:e,classNames:T,mountOnEnter:!0},c),a)),[a,t,l,o,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const h=r.a`
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
`;var f=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:r,...c})=>{const o=Object(I.a)(),l=Object(O.a)(r),s=Object(n.useMemo)(()=>i.a.Children.map(a,a=>null===a?a:i.a.createElement(b.a,Object.assign({appear:t||!l||o,in:t||!l||o,timeout:e,classNames:h,mountOnEnter:!0},c),a)),[a,t,l,o,e,c]);return i.a.createElement(i.a.Fragment,null,s)};const C=Object(r.c)(p.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,N=Object(r.c)(p.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,R=Object(r.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,j=Object(r.c)(p.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,A=Object(r.c)(_.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var D=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:r,ignoredPaths:c})=>{const{motif:o}=Object(S.a)();return i.a.createElement(f,{ignoredPaths:c},i.a.createElement(N,{flex:"none",height:"65px"},i.a.createElement(g,{ignoredPaths:c},i.a.createElement(p.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},i.a.createElement(C,{alignItems:"center",flex:"1",height:"100%"},t&&i.a.createElement(j,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:o},i.a.createElement(u.g,null))),i.a.createElement(R,null,i.a.createElement(A,{weight:"bold"},e.component)),i.a.createElement(C,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!r&&i.a.createElement(j,{legacy:!1,name:"closeButton",type:"button",onClick:n},i.a.createElement(u.A,null)))))))};const y=Object(r.c)(p.g)`
  width: 100%;
  max-width: ${d.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,v=Object(r.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,x=Object(r.c)(p.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,G=Object(r.c)(l.a)`
  > :first-child {
    max-width: ${d.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,P=Object(r.c)(p.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,L=Object(r.c)(p.k)`
  height: 100%;
  width: 100%;
`;var w=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:r,isView:l,showBack:d,title:u,unsavedChangesModalIgnoredPaths:_,onEscClicked:S,submitText:b="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:O=!1,customFooterButtons:I,...T})=>i.a.createElement(o.c,Object.assign({enableReinitialize:!0},T),({dirty:r,handleReset:o,handleSubmit:T,isSubmitting:g})=>i.a.createElement(v,{autoComplete:"off",onSubmit:T},i.a.createElement(L,{vertical:!0},i.a.createElement(D,{goBack:a,hideClose:n,showBack:d,title:u,onEscClicked:S,ignoredPaths:_}),i.a.createElement(E.a,{ignoredPaths:_},i.a.createElement(P,{flex:"1"},i.a.createElement(y,{flex:"none",flexDirection:"column"},e))),!t&&!l&&i.a.createElement(m.a,{ignoredPaths:_,when:r&&!g}),(!l||O)&&i.a.createElement(G,{active:r||O},i.a.createElement(p.g,{justifyContent:I?"space-between":"flex-end",width:"100%",alignItems:"center"},I&&i.a.createElement(x,null,I(g)),!l&&i.a.createElement(p.g,null,i.a.createElement(s.a,{disabled:!r||g,type:"button",variant:"default",onClick:o},i.a.createElement(c.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(s.a,{disabled:!r||g,type:"submit",variant:"primary"},i.a.createElement(c.c,{id:b}))))))))},1948:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(5),c=a(4),o=a(1949),l=a.n(o),s=a(1759),m=a(538),d=a(539);const p=Object(r.c)("span")`
  line-height: 1.5;
  margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`;t.a=({when:e,ignoredPaths:t=null,onLeave:a=null,onStay:r=null})=>{const o=Object(n.useMemo)(()=>({overlay:{"--modal-z-index":2e3}}),[]),E=Object(d.a)(t),u=Object(n.useCallback)((e,t)=>t.pathname!==e.pathname,[]),_=Object(n.useCallback)(e=>(e={},t={})=>E(e,t)&&u(e,t),[E,u]);return!!e&&i.a.createElement(l.a,{when:_(t)},({onCancel:e,onConfirm:t})=>i.a.createElement(s.a,{actions:[{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_STAY"}),onClick:()=>r?r(e):e()},{type:"button",text:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_LEAVE"}),onClick:()=>a?a(t):t(),variant:"primary"}],isOpen:!0,size:"small",style:o,parentSelector:m.b,title:i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_TITLE"}),onRequestClose:()=>r?r(e):e()},i.a.createElement(p,null,i.a.createElement(c.c,{id:"SETTINGS_MODAL_UNSAVED_CHANGES_CONTENT"}))))}},1949:function(e,t,a){e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),o=(n=c)&&n.__esModule?n:{default:n},l=a(2);var s={action:null,isActive:!1,nextLocation:null},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._prevUserAction="",a._isMounted=!0,a.block=a.block.bind(a),a.onBeforeUnload=a.onBeforeUnload.bind(a),a.onCancel=a.onCancel.bind(a),a.onConfirm=a.onConfirm.bind(a),a.when=a.when.bind(a),a.state=i({},s,{unblock:function(){}}),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var a=this.when(e);return a&&this.setState({action:t,nextLocation:e,isActive:!0}),!a}},{key:"navigateToNextLocation",value:function(e){var t=this,a=this.state,n=a.action,r=a.nextLocation;n={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[n||"PUSH"],r||(r={pathname:"/"});var c=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===n){var o=c.listen((function(){o(),t._isMounted&&t.setState(i({},s,{unblock:c.block(t.block)}))}));c.goBack()}else c[n](r),this._isMounted&&this.setState(i({},s,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(i({},s))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e){return"function"==typeof this.props.when?this.props.when(this.props.location,e):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?o.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(o.default.Component);t.default=(0,l.withRouter)(m)},function(e,t){e.exports=a(0)},function(e,t){e.exports=a(671)}])},1952:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1848),c=a(5),o=a(793),l=a(1939);const s=c.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:c,...m})=>{const d=Object(l.a)(),p=Object(o.a)(a),E=Object(n.useMemo)(()=>i.a.Children.map(c,a=>null===a?a:i.a.createElement(r.a,Object.assign({appear:t||!p||d,in:t||!p||d,timeout:e,classNames:s,mountOnEnter:!0},m),a)),[c,t,p,d,e,m]);return i.a.createElement(i.a.Fragment,null,E)}},1969:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return O.a})),a.d(t,"a",(function(){return U}));var n=a(0),i=a.n(n),r=a(5),c=a(671),o=a(660),l=a(135);const s=Object(r.c)(l.a)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }
  span {
    white-space: nowrap;
  }
`,m=(Object(r.c)(c.Link)`
  font-size: ${({theme:e})=>e.fontSizes[0]}px;
  white-space: nowrap;
  margin-bottom: 1px;

  :last-child {
    margin-left: ${({theme:e})=>e.space[2]}px;
  }

  &:hover {
    color: ${({theme:e})=>e.motifPalette.hoverLink01};
  }
`,Object(r.c)(l.a)`
  padding: 0 ${({theme:e})=>e.space[3]}px;
  width: 214px;
`),d=Object(r.c)(o.a)`
  flex-direction: column;
  align-items: flex-start;

  > div {
    margin-left: 0px;
  }

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`,p=e=>i.a.createElement(m,Object.assign({legacy:!1,variant:"secondary",type:"button"},e)),E=e=>i.a.createElement(s,Object.assign({legacy:!1,type:"button",variant:"inline"},e));var u=a(1972),_=a(233);const S=Object(r.c)(u.a)`
  max-width: 445px;
  margin-bottom: ${({theme:e})=>e.space[3]}px;
`,b=e=>r.a`
  padding-top: 0;
  color: ${e.colors.white};
  > th {
    height: 30px !important;
  }
`;Object(_.b)(({theme:e,...t})=>i.a.createElement(S,Object.assign({headerRowClassName:b(e),disableColumnFilters:!0,disableSelection:!0,rowHeight:30},t)));var O=a(2029),I=a(458),T=a(1763),g=a(4),h=a(30),f=a(23),C=a(1860),N=a(45),R=a(95),j=a(54);const A=Object(r.c)("div")`
  flex: ${({inline:e})=>e?"1 1 0":"0 0 100%"};
  margin-right: ${({inline:e,isLast:t,theme:a})=>e&&!t?""+a.spacing["spacing-l"]:0};
  position: relative;
`,D=Object(r.c)(R.c)`
  > * {
    vertical-align: middle;
  }
`,y=Object(r.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-l"]};
`,v=Object(r.c)("div")`
  position: absolute;
  right: -65px;
  top: 12px;
`,x=Object(r.c)("div")`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 1;
`,G=Object(r.c)(R.g)`
  margin-bottom: ${({theme:e})=>e.spacing["spacing-xs"]};
`,P=Object(r.c)(y,{shouldForwardProp:e=>"isLast"!==e})`
  margin-right: ${({theme:e,isLast:t})=>t?0:e.spacing["spacing-l"]};
`,L=Object(r.c)(R.g)`
  margin-top: ${({theme:e})=>e.spacing["spacing-l"]};
`,w=Object(r.c)(R.c)`
  margin-right: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
`,k=Object(r.c)("div")`
  table {
    td {
      max-width: 170px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        height: 12px;
      }
    }
  }
`;var U=function({fieldName:e,newFields:t,fieldLabels:a,onAddItem:r,onRemoveItem:c,validationSchema:o,initialValues:l,onEditSubmit:s,useValuesInSchema:m=!1,max:p,useWindowTable:E=!1,addButtonText:_="COMMON_ACTION_ADD",...S}){const b=Object(n.useContext)(R.l),[O,U]=Object(n.useState)(!0),M=Object(n.useCallback)(t=>!t.disableRemove&&i.a.createElement(d,null,i.a.createElement(D,{name:`remove-${e}-${t.id}`,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async()=>{U(!1),c(t),await Promise.resolve(),U(!0)}},i.a.createElement(g.c,{id:"COMMON_ACTION_REMOVE"}))),[e,U,c]),F=Object(n.useMemo)(()=>E?C.a:u.a,[E]);return i.a.createElement(N.c,{enableReinitialize:!0,onSubmit:t=>{s(t[e])},initialValues:l,validationSchema:()=>m?h.a.lazy(e=>o(e)):o},({values:n,setFieldValue:o,handleSubmit:s,handleReset:m,setTouched:d})=>i.a.createElement(i.a.Fragment,null,t.map((a,c)=>i.a.createElement(A,{inline:a.inline,isLast:c===t.length-1,key:a.name},i.a.createElement(y,{flexDirection:"column",width:"100%"},i.a.createElement(j.Field,Object.assign({disabled:n.editActive||n[e].length>=p,full:!0,name:a.name,placeholder:a.placeholder,type:a.type,label:a.label},"dropdown"!==a.type?{autoComplete:a.autoComplete}:{options:a.options,translateOptions:a.translateOptions,translatePlaceholder:!0,validated:a.validated}))),!b&&r&&c===t.length-1&&i.a.createElement(v,null,i.a.createElement(D,{name:"add-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:async e=>{e.preventDefault(),U(!1);const a=t.reduce((e,t)=>(e[t.name]=!0,e),{}),i=await d(a,!0);t.find(e=>i[e.name])||r(n),U(!0)},Icon:f.ub,disabled:n.editActive||n[e].length>=p},i.a.createElement(g.c,{id:_}))))),n.editActive?i.a.createElement(i.a.Fragment,null,n[e].map((n,r)=>i.a.createElement(G,{key:n.id,width:"100%"},S.columns.map((n,c)=>t[c]?i.a.createElement(P,{key:n.id,isLast:c===S.columns.length-1,flexDirection:"column",flex:"1 1 50%"},i.a.createElement(j.Field,Object.assign({full:!0,label:a[n.id],name:`${e}[${r}][${n.id}]`,type:t[c].type},"dropdown"!==t[c].type?{}:{options:t[c].options,translateLabel:!0,translateOptions:t[c].translateOptions,translatePlaceholder:!0,type:t[c].type,validated:t[c].validated}))):null))),i.a.createElement(L,{justifyContent:"flex-end",width:"100%"},i.a.createElement(w,{name:"edit-cancel-"+e,size:"large",type:"button",variant:"default",legacy:!1,onClick:()=>{m(),o("editActive",!1)}},i.a.createElement(g.c,{id:"COMMON_ACTION_CANCEL"})),i.a.createElement(R.c,{name:"edit-submit-"+e,type:"button",variant:"primary",legacy:!1,onClick:s,disabled:Object(I.a)(Object(T.a)(n,"editActive"),Object(T.a)(l,"editActive"))},i.a.createElement(g.c,{id:"COMMON_ACTION_SAVE_CHANGES"})))):n[e].length>0&&i.a.createElement(A,null,i.a.createElement(x,null,i.a.createElement(D,{name:"edit-"+e,size:"small",type:"button",variant:"inline",legacy:!1,onClick:()=>{m(),o("editActive",!0)},Icon:f.sb},i.a.createElement(g.c,{id:"COMMON_ACTION_EDIT"}))),n[e].length&&O&&i.a.createElement(k,null,i.a.createElement(F,{columns:S.columns,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,items:n[e],renderRowPopoverContent:c?M:void 0})))))}},1972:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=a(1752),l=a(73),s=a(795),m=a(27),d=a(796),p=a(688),E=a(231),u=a(112),_=a(798),S=a(794),b=a(390),O=a(797);t.a=Object(l.a)(class extends n.Component{constructor(e){super(e)}render(){const e=Object(o.a)({},this.props,u.a),{motif:t,renderFooter:a,className:r,width:l,tableClassName:I,renderPlaceholder:T,idField:g,forwardedRef:h}=e;return i.a.createElement(b.a,Object.assign({},e,{ref:h}),i.a.createElement(d.a,{className:r,motif:t,width:Object(u.g)(l)},i.a.createElement(E.a.Consumer,null,e=>{const{noItems:a,renderedItems:r}=e;return i.a.createElement(n.Fragment,null,i.a.createElement(p.a,{className:I,motif:t},i.a.createElement(_.a,null),i.a.createElement(S.a,null,r.map((t,a)=>i.a.createElement(O.a,{key:Object(u.h)(t[g]),row:t,rowIndex:a,context:e})))),a&&void 0!==T&&i.a.createElement("div",{className:m.a.placeholder},i.a.createElement(s.a,{className:m.a.placeholderIcon,size:"large"}),T()))}),void 0!==a&&i.a.createElement("div",{className:c()(m.a.footer,m.a[t])},a())))}})},1973:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=a(523),l=a(40),s=a(235),m=a(1941);t.a=({active:e=!0,align:t="right",backgroundGradient:a=!1,contentClassName:r,margin:d,marginX:p,marginY:E,marginTop:u,marginRight:_,marginBottom:S,marginLeft:b,padding:O="xxxxl",paddingX:I,paddingY:T,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:C,children:N,className:R,style:j,...A})=>{var D,y,v,x,G,P,L,w;const{motif:k}=Object(l.a)(),[U,M]=Object(n.useState)(0),F=Object(n.useRef)(null);return Object(n.useEffect)(()=>{if(F.current){const{height:e}=F.current.getBoundingClientRect();M(e)}},[]),Object(n.useEffect)(()=>{const e=Object(o.a)(()=>{if(F.current){const{height:e}=F.current.getBoundingClientRect();M(e)}},100);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),i.a.createElement("footer",Object.assign({className:c()(m.a.formFooter,s.a["margin-top-"+(null!==(y=null!==(D=null!=u?u:E)&&void 0!==D?D:d)&&void 0!==y?y:"")],s.a["margin-right-"+(null!==(x=null!==(v=null!=_?_:p)&&void 0!==v?v:d)&&void 0!==x?x:"")],s.a["margin-bottom-"+(null!==(P=null!==(G=null!=S?S:E)&&void 0!==G?G:d)&&void 0!==P?P:"")],s.a["margin-left-"+(null!==(w=null!==(L=null!=b?b:p)&&void 0!==L?L:d)&&void 0!==w?w:"")],R),style:{height:e?U:0,transform:`translateY(${e?0:U+"px"})`,...j}},A),i.a.createElement("div",{className:c()(m.a.formFooterContent,m.a["formFooterContent-align-"+t],m.a["formFooterContent-"+k],a&&m.a["formFooterContent-backgroundGradient"],s.a["padding-top-"+(g||T||O)],s.a["padding-right-"+(h||I||O)],s.a["padding-bottom-"+(f||T||O)],s.a["padding-left-"+(C||I||O)],r),ref:F},N))}},1974:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(7),c=a.n(r),o=a(800),l=a(170),s=a(1941);t.a=({size:e="medium",variant:t,wrapClassName:a,className:n,...r})=>i.a.createElement(l.a,Object.assign({className:c()(t===o.b[0]&&s.a["formFooterButton-default-size-"+e],n),size:e,wrapClassName:c()("tertiary"===t?s.a.formFooterTertiaryButtonWrap:s.a.formFooterButtonWrap,a),variant:t},r))},2029:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={HEADER_HEIGHT:49,ROW_HEIGHT:32,getHeight(e,t,a,n){return Math.min((n||this.ROW_HEIGHT)*e+(null!=a?a:this.HEADER_HEIGHT),(n||this.ROW_HEIGHT)*t+(null!=a?a:this.HEADER_HEIGHT))}}}}]);