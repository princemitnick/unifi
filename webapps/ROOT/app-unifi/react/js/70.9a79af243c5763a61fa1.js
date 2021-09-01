(window.webpackJsonpunifiNetworkUi=window.webpackJsonpunifiNetworkUi||[]).push([[70],{1817:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),r=a(42),l=a(64),o=a(2),s=a(8),_=a(4),E=a(95),d=a(1945),m=a(21),u=a(18),b=a(98),p=a(2008),O=Object(p.e)([Object(p.c)(Object(p.a)("(",Object(p.b)(b.c),`)(:${Object(p.d)(Object(p.b)(b.r))})?`)),Object(p.c)(Object(p.a)("(",Object(p.b)(b.h),`)(:${Object(p.d)(Object(p.b)(b.r))})?`))],"i"),S=a(30),A=S.a.object().shape({enabled:S.a.boolean(),server:S.a.string().when("enabled",{is:!0,then:S.a.string().required(c.a.createElement(_.c,{id:"COMMON_VALIDATION_FIELD_REQUIRED"})).matches(O,c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_VALIDATION_HOST_FORMAT",values:{name:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER"})}}))}),outbound_proxy:S.a.string().matches(O,c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_VALIDATION_HOST_FORMAT",values:{name:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY"})}}))}),T=a(31),g=a(45),N=a(1753),D=a(1754),I=a(1755),h=a(54),j=a(75),f=a(5),C=a(23),R=a(1834),x=a(1972),P=a(1950),V=a(464),v=a(1946),G=a(76);const y=Object(f.c)(C.ub)`
  + span {
    margin-left: 8px !important;
  }
`,F=[{compare:Object(v.a)(e=>Object(G.b)(e).toLocaleLowerCase()),id:"sip-endpoint-name",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_NAME"}),renderCell:e=>Object(G.b)(e),sortable:!0,minWidth:150},{compare:Object(v.a)(({baresip_extension:e})=>(e||"").toLowerCase()),id:"sip-endpoint-baresip_extension",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_BARESIP_EXTENSION"}),renderCell:({baresip_extension:e})=>e||"-",sortable:!0,minWidth:170},{compare:Object(v.a)(({baresip_auth_user:e})=>(e||"").toLowerCase()),id:"sip-endpoint-baresip_auth_user",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_BARESIP_AUTH_USER"}),renderCell:({baresip_auth_user:e})=>e||"-",sortable:!0,minWidth:130},{compare:Object(v.a)(({volume:e})=>e||0),id:"sip-endpoint-volume",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_TABLE_VOLUME"}),renderCell:({volume:e})=>c.a.createElement(R.a,{value:e||0}),sortable:!0,minWidth:130}];var U=()=>{const e=Object(T.k)(),t=Object(l.h)("advanced/gateway/sip/form/sip-endpoint"),a=Object(s.useDispatch)(),r=Object(s.useSelector)(i.selectSipEnabledDevices),o=Object(n.useCallback)(n=>c.a.createElement(P.h,null,c.a.createElement(E.b,null,c.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-edit",type:"button",variant:"inline",onClick:()=>e.push(`${t}/${n._id}`)},c.a.createElement(_.c,{id:"COMMON_ACTION_EDIT"})),c.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-remove",type:"button",variant:"inline",onClick:()=>a(Object(V.b)({name:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_MODAL_NAME",values:{name:Object(G.b)(n)}}),onConfirm:()=>a(Object(i.updateDevice)({...n,baresip_enabled:!1},n._id,{failureToast:(e,t)=>({errorMessage:t.msg,errorValues:t,icon:u.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_TOAST_FAILURE",values:{name:Object(G.b)(n)}}),successToast:{icon:u.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_REMOVE_TOAST_SUCCESS",values:{name:Object(G.b)(n)}}}))}))},c.a.createElement(_.c,{id:"COMMON_ACTION_REMOVE"}))),c.a.createElement(E.m,null,c.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-view",type:"button",variant:"inline",onClick:()=>e.push(`${t}/${n._id}`)},c.a.createElement(_.c,{id:"COMMON_ACTION_VIEW"})))),[a,e,t]);return c.a.createElement(N.a,{padding:"none"},c.a.createElement(D.a,null,c.a.createElement(x.a,{columns:F,disableColumnFilters:!0,disableSelection:!0,disableTextPointer:!0,idField:"_id",items:r,renderRowPopoverContent:o})),c.a.createElement(D.a,null,c.a.createElement(E.c,{legacy:!1,name:"sip-endpoint-create",type:"button",variant:"inline",onClick:()=>e.push(t)},c.a.createElement(E.g,{alignItems:"center"},c.a.createElement(y,null),c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_BUTTON_CREATE"})))))},M=a(2366),w=a(41),W=a(2094);const B=Object(f.c)(M.a)`
  > :last-child {
    margin-top: ${({theme:e})=>e.spacing["spacing-s"]};
    padding-top: ${({theme:e})=>e.spacing["spacing-xl"]};
    label {
      font-size: ${({theme:e})=>e.fontSize["font-size-m"]};
      color: ${w.a["grey-5"]};
    }
  }
`,L=e=>e+"%";var k=Object(_.f)(({intl:e})=>{const t=Object(l.h)("advanced/gateway/sip/form"),a=Object(T.k)(),{sipEndpoint:r,sipEndpointId:o}=Object(T.m)();Object(n.useEffect)(()=>{r&&"sip-endpoint"!==r&&a.replace(t)},[a,r,t]);const E=Object(s.useDispatch)(),d=Object(s.useSelector)(i.selectSipCompatibleDevices),p=Object(s.useSelector)(i.selectSipEnabledDevices),O=Object(n.useMemo)(()=>d.find(({_id:e})=>e===o,[]),[d,o]),A=!!(null==O?void 0:O._id),j=Object(n.useMemo)(()=>{var e,t,a,n,c;return{_id:null!==(e=null==O?void 0:O._id)&&void 0!==e?e:"",baresip_auth_user:null!==(t=null==O?void 0:O.baresip_auth_user)&&void 0!==t?t:"",baresip_extension:null!==(a=null==O?void 0:O.baresip_extension)&&void 0!==a?a:"",volume:null!==(n=null==O?void 0:O.volume)&&void 0!==n?n:25,x_baresip_password:null!==(c=null==O?void 0:O.x_baresip_password)&&void 0!==c?c:""}},[O]),f=Object(n.useMemo)(()=>d.filter(e=>p.every(({_id:t})=>t!==e._id)).map(e=>({label:Object(G.b)(e),value:e._id})),[d,p]),C=Object(n.useMemo)(()=>S.a.object().shape({_id:S.a.string().oneOf(A?[null==O?void 0:O._id]:f.map(({value:e})=>e)).label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_NAME").required(),baresip_auth_user:S.a.string().matches(b.t,c.a.createElement(_.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_AUTH_USER_VALIDATION"})),baresip_extension:S.a.string().label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_LABEL").matches(b.t,c.a.createElement(_.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_VALIDATION"})).required(),x_baresip_password:S.a.string().label("SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_LABEL").matches(b.s,c.a.createElement(_.b,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_VALIDATION"})).required()}),[O,f,A]),R=Object(n.useCallback)((e,{setSubmitting:n})=>E(Object(i.updateDevice)({...O,...e,baresip_enabled:!0},e._id)).then(()=>{E(Object(m.c)({icon:u.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TOAST_SAVE_SUCCESS",values:{name:Object(G.b)(O)}})),a.push(t)}).catch(e=>{E(Object(m.c)({errorMessage:e.msg,errorValues:e,icon:u.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TOAST_SAVE_FAILURE",values:{name:Object(G.b)(O)}})),n(!1)}),[O,E,a,t]),x=Object(n.useCallback)(()=>a.push(t),[a,t]),P=A?Object(G.b)(O):c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_TITLE"}),V=e.formatMessage({id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_SEARCH_EMPTY_MESSAGE"});return"sip-endpoint"===r?c.a.createElement(g.c,{enableReinitialize:!0,initialValues:j,validationSchema:C,onSubmit:R},({handleChange:n,handleSubmit:i,values:r})=>c.a.createElement(W.a,{actions:[{text:c.a.createElement(_.c,{id:"COMMON_ACTION_CANCEL"}),type:"button",onClick:()=>a.push(t)},{text:A?c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BUTTON_SAVE"}):c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BUTTON_CREATE"}),type:"submit",variant:"primary",onClick:()=>i()}],title:P,onRequestClose:x},c.a.createElement("form",{onSubmit:i},c.a.createElement(N.a,{padding:"none"},c.a.createElement(D.a,null,c.a.createElement(I.a,{column:!0,unlimitedWidth:!0},c.a.createElement(h.Field,{disabled:A,full:!0,name:"_id",options:f,type:"dropdown",label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_LABEL",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_ID_PLACEHOLDER",searchable:!0,searchEmptyMessage:V,translatePlaceholder:!0,translateLabel:!0,validated:!0}))),c.a.createElement(D.a,null,c.a.createElement(I.a,{column:!0,unlimitedWidth:!0},c.a.createElement(h.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_EXTENSION_LABEL",name:"baresip_extension"}))),c.a.createElement(D.a,null,c.a.createElement(I.a,{column:!0,unlimitedWidth:!0},c.a.createElement(h.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_BARESIP_AUTH_USER_LABEL",name:"baresip_auth_user"}))),c.a.createElement(D.a,null,c.a.createElement(I.a,{column:!0,unlimitedWidth:!0},c.a.createElement(h.Field,{full:!0,label:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_X_BARESIP_PASSWORD_LABEL",name:"x_baresip_password",passwordToggle:!0,type:"password"}))),c.a.createElement(D.a,null,c.a.createElement(B,{formatValueIndicatorContent:L,id:"volume",name:"volume",size:"small",label:e.formatMessage({id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_FORM_VOLUME_LABEL"}),labelDistance:20,step:1,value:r.volume,valueIndicatorPosition:"right",withValueIndicator:!0,onChange:n})))))):null});var $=()=>{const{sipEndpoint:e}=Object(T.m)(),{values:t}=Object(g.e)(),a=Object(n.useMemo)(()=>[{id:"sip-endpoint",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_ENDPOINT_ACCORDION_LABEL"}),openByDefault:"sip-endpoint"===e,renderContent:()=>c.a.createElement(U,null)}],[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,null,c.a.createElement(D.a,null,c.a.createElement(j.SearchableGridLabel,{htmlFor:"enabled",alignWith:"toggleSmall",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_EDU_CLIENT"})}),c.a.createElement(I.a,{column:!0},c.a.createElement(h.Field,{type:"checkbox",name:"enabled"}))),c.a.createElement(D.a,{disabled:!t.enabled},c.a.createElement(j.SearchableGridLabel,{htmlFor:"server",alignWith:"input",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER"}),description:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER_DESCRIPTION"})}),c.a.createElement(I.a,{column:!0},c.a.createElement(h.Field,{disabled:!t.enabled,full:!0,name:"server",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_SERVER_PLACEHOLDER"}))),c.a.createElement(D.a,{disabled:!t.enabled},c.a.createElement(j.SearchableGridLabel,{htmlFor:"outbound_proxy",alignWith:"input",label:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY"}),description:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_DESCRIPTION"}),searchText:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_SEARCH_TEXT"}),c.a.createElement(I.a,{column:!0},c.a.createElement(h.Field,{disabled:!t.enabled,full:!0,name:"outbound_proxy",placeholder:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_OUTBOUND_PROXY_PLACEHOLDER"})))),c.a.createElement(j.SearchableAccordion,{items:a}),c.a.createElement(k,null))};var X=e=>{const{onBack:t}=e,a=Object(s.useSelector)(r.selectSipSettings),i=Object(s.useDispatch)(),l=Object(n.useContext)(E.l),o=Object(n.useCallback)((e,{setSubmitting:a})=>i(Object(r.saveSettings)({key:"baresip",...e})).then(()=>{i(Object(m.c)({icon:u.a.success,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TOAST_SAVE_SUCCESS"})),t()}).catch(e=>{i(Object(m.c)({errorMessage:e.msg,errorValues:e,icon:u.a.danger,message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TOAST_SAVE_ERROR"})),a(!1)}),[i,t]),b=Object(n.useMemo)(()=>({enabled:!1,server:"",outbound_proxy:"",...a}),[a]);return c.a.createElement(d.b,{onSubmit:o,title:{component:c.a.createElement(_.c,{id:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TITLE"}),message:"SETTINGS_ADVANCED_FEATURES_ADV_GW_SIP_TITLE"},initialValues:b,isEdit:!1,isView:l,onEscClicked:t,validationSchema:A,showBack:!0,goBack:t,unsavedChangesModalIgnoredPaths:/\/sip-endpoint((\/)|(\/[a-zA-Z0-9_-]+\/?))?$/},c.a.createElement($,null))};t.default=()=>{const e=Object(l.g)();return Object(l.e)([Object(r.fetchSettings)({type:o.a.CACHE}),Object(i.fetchSipCompatibleDevices)({type:o.a.CACHE})],c.a.createElement(X,{onBack:e}))}},1939:function(e,t,a){"use strict";var n=a(0),c=a(31);t.a=()=>{const e=Object(c.l)(),[t]=Object(n.useState)(e.pathname),[a,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)(()=>{i(!1);const a=/^(.*)\/[a-z0-9]*/i.exec(t),n=/^(.*)\/[a-z0-9]*/i.exec(e.pathname);return a[0].length===n[0].length&&a[1]===n[1]&&(r.current=setTimeout(()=>i(!0),500)),()=>clearTimeout(r.current)},[e.pathname,t]),a}},1945:function(e,t,a){"use strict";a.d(t,"b",(function(){return F})),a.d(t,"a",(function(){return R}));var n=a(0),c=a.n(n),i=a(5),r=a(4),l=a(45),o=a(1973),s=a(1974),_=a(1948),E=a(799),d=a(95),m=a(1952),u=a(23),b=a(49),p=a(40),O=a(1848),S=a(793),A=a(1939);const T=i.a`
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
`;var g=({timeout:e={enter:300,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(A.a)(),o=Object(S.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(O.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:T,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const N=i.a`
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
`;var D=({timeout:e={enter:150,exit:100},in:t,children:a,ignoredPaths:i,...r})=>{const l=Object(A.a)(),o=Object(S.a)(i),s=Object(n.useMemo)(()=>c.a.Children.map(a,a=>null===a?a:c.a.createElement(O.a,Object.assign({appear:t||!o||l,in:t||!o||l,timeout:e,classNames:N,mountOnEnter:!0},r),a)),[a,t,o,l,e,r]);return c.a.createElement(c.a.Fragment,null,s)};const I=Object(i.c)(d.g)`
  > * {
    /* Use margin on child rather than padding on self not to occupy space when no button is shown */
    margin-left: ${({theme:e})=>e.spacing["spacing-xxl"]};
    margin-right: ${({theme:e})=>e.spacing["spacing-xxl"]};
  }
`,h=Object(i.c)(d.g)`
  border-bottom: 1px solid ${({theme:e})=>e.motifPalette.ui03};
`,j=Object(i.c)("h1")`
  font-size: 16px;
  font-weight: normal;
`,f=Object(i.c)(d.c)`
  padding: ${({theme:e})=>e.spacing["spacing-s"]};
`,C=Object(i.c)(b.a)`
  color: ${({theme:e})=>e.motifPalette.text01} !important;
  font-size: 16px !important;
`;var R=({title:e,showBack:t,goBack:a,onEscClicked:n,hideClose:i,ignoredPaths:r})=>{const{motif:l}=Object(p.a)();return c.a.createElement(D,{ignoredPaths:r},c.a.createElement(h,{flex:"none",height:"65px"},c.a.createElement(g,{ignoredPaths:r},c.a.createElement(d.g,{alignItems:"center",flex:"1",justifyContent:"space-between"},c.a.createElement(I,{alignItems:"center",flex:"1",height:"100%"},t&&c.a.createElement(f,{legacy:!1,name:"backButton",type:"button",onClick:a,motif:l},c.a.createElement(u.g,null))),c.a.createElement(j,null,c.a.createElement(C,{weight:"bold"},e.component)),c.a.createElement(I,{alignItems:"center",flex:"1",height:"100%",justifyContent:"flex-end"},!i&&c.a.createElement(f,{legacy:!1,name:"closeButton",type:"button",onClick:n},c.a.createElement(u.A,null)))))))};const x=Object(i.c)(d.g)`
  width: 100%;
  max-width: ${E.a};
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing["spacing-xxxxl"]}
    ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px;
`,P=Object(i.c)("form")`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,V=Object(i.c)(d.g)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`,v=Object(i.c)(o.a)`
  > :first-child {
    max-width: ${E.a};
    padding-left: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    padding-right: ${({theme:e})=>2*parseInt(e.spacing["spacing-xxxxl"],10)}px !important;
    position: relative;
    margin: 0 auto;
  }
`,G=Object(i.c)(d.h)`
  background: transparent;
  overflow: scroll !important;
  margin-right: -${({theme:e})=>e.scrollBarWidth}px;
`,y=Object(i.c)(d.k)`
  height: 100%;
  width: 100%;
`;var F=({children:e,disableUnsavedChangesModal:t,goBack:a,hideClose:n,isEdit:i,isView:o,showBack:E,title:u,unsavedChangesModalIgnoredPaths:b,onEscClicked:p,submitText:O="COMMON_ACTION_APPLY_CHANGES",footerActiveOverride:S=!1,customFooterButtons:A,...T})=>c.a.createElement(l.c,Object.assign({enableReinitialize:!0},T),({dirty:i,handleReset:l,handleSubmit:T,isSubmitting:g})=>c.a.createElement(P,{autoComplete:"off",onSubmit:T},c.a.createElement(y,{vertical:!0},c.a.createElement(R,{goBack:a,hideClose:n,showBack:E,title:u,onEscClicked:p,ignoredPaths:b}),c.a.createElement(m.a,{ignoredPaths:b},c.a.createElement(G,{flex:"1"},c.a.createElement(x,{flex:"none",flexDirection:"column"},e))),!t&&!o&&c.a.createElement(_.a,{ignoredPaths:b,when:i&&!g}),(!o||S)&&c.a.createElement(v,{active:i||S},c.a.createElement(d.g,{justifyContent:A?"space-between":"flex-end",width:"100%",alignItems:"center"},A&&c.a.createElement(V,null,A(g)),!o&&c.a.createElement(d.g,null,c.a.createElement(s.a,{disabled:!i||g,type:"button",variant:"default",onClick:l},c.a.createElement(r.c,{id:"COMMON_ACTION_CANCEL"})),c.a.createElement(s.a,{disabled:!i||g,type:"submit",variant:"primary"},c.a.createElement(r.c,{id:O}))))))))},1946:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"m",(function(){return d})),a.d(t,"k",(function(){return m})),a.d(t,"h",(function(){return u})),a.d(t,"g",(function(){return b})),a.d(t,"j",(function(){return p})),a.d(t,"f",(function(){return O})),a.d(t,"i",(function(){return S})),a.d(t,"l",(function(){return A})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return N})),a.d(t,"n",(function(){return I})),a.d(t,"o",(function(){return h})),a.d(t,"c",(function(){return j})),a.d(t,"p",(function(){return C})),a.d(t,"q",(function(){return R}));var n=a(112);const c=e=>(t,a,c,i)=>Object(n.d)(e(c,t),e(i,a)),i=e=>t=>{const a=(e=>t=>e.formatMessage({id:t}))(e);return(e,n,c,i)=>{const[r,l]=[t(e,c),t(n,i)].map(a);return r.localeCompare(l)}};var r=a(16),l=a(133),o=a(6),s=a(138),_=a(76);const E={ugw:1,usw:2,uap:3},d=(e,t,a,c)=>{const i=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(a)],r=o.DEVICE_STATE_IMPORTANCE[Object(o.getDeviceState)(c)];if(i===r){if(a.adopted===c.adopted){if(a.type!==c.type)return((e,t)=>{const a=e.type,c=t.type;return a===c?Object(n.d)(Object(_.a)(e),Object(_.a)(t)):Object(n.d)(E[a],E[c])})(a,c);const e=a.originalName,t=c.originalName;return e&&t?Object(n.d)(e,t):e?-1:t?1:Object(n.d)(a.modelName,c.modelName)}return Object(n.d)(a.adopted?1:2,c.adopted?1:2)}return Object(n.d)(i,r)},m=(e,t,a,c)=>Object(n.d)(Object(_.a)(a),Object(_.a)(c)),u=(e,t,a,c)=>{const i=Object(s.d)(Object(o.getDeviceIp)(a))||0,r=Object(s.d)(Object(o.getDeviceIp)(c))||0;return Object(n.d)(i,r)},b=(e,t,a,c)=>{const{averageSatisfaction:i}=a.satisfactionByRadio,{averageSatisfaction:r}=c.satisfactionByRadio;let l=Object(o.getDeviceExperience)(a),s=Object(o.getDeviceExperience)(c);return a.type===o.DeviceType.AP&&i<0&&(l=-.5),c.type===o.DeviceType.AP&&r<0&&(s=-.5),Object(n.d)(l,s)},p=(e,t,a,c)=>{const i=Object(o.getDeviceMemoryUsage)(a)||0,r=Object(o.getDeviceMemoryUsage)(c)||0;return Object(n.d)(i,r)},O=(e,t,a,c)=>{const i=parseFloat(Object(r.a)(a,"system-stats.cpu",0)),l=parseFloat(Object(r.a)(c,"system-stats.cpu",0));return Object(n.d)(i,l)},S=(e,t,a,c)=>{const i=parseFloat(Object(r.a)(a,"sys_stats.loadavg_1",-1)),l=parseFloat(Object(r.a)(c,"sys_stats.loadavg_1",-1));return Object(n.d)(i,l)},A=(e,t,a)=>{const c=Object(o.getRadioByType)(e,a),i=Object(o.getRadioByType)(t,a),r=c?Object(o.getRadioStatsByName)(e,c.name):null,l=i?Object(o.getRadioStatsByName)(t,i.name):null;if(c&&i&&r&&l){let a,s;const _=(e,t)=>e&&t?Object(n.d)(e,t):(e?-1:t&&1)||0;return a=("auto"===c.channel?0:c.channel)||0,s=("auto"===i.channel?0:i.channel)||0,_(a,s)?_(a,s):(a=Object(o.getRadioStatsBindedChannel)(e,r)||c.channel||0,s=Object(o.getRadioStatsBindedChannel)(t,l)||i.channel||0,_(a,s)?_(a,s):(a=parseInt(Object(o.getRadioHt)(c),10),s=parseInt(Object(o.getRadioHt)(i),10),_(a,s)?_(a,s):(a=Object(o.getRadioStatsPrimaryChannel)(r)||c.channel||0,s=Object(o.getRadioStatsPrimaryChannel)(l)||c.channel||0,_(a,s)?_(a,s):(a=Object(o.getRadioStatsTransmitPower)(r),s=Object(o.getRadioStatsTransmitPower)(l),_(a,s)?_(a,s):0))))}if(c&&i){if(r)return 1;if(l)return-1}return c?1:i?-1:0},T=(e,t)=>{if(!e.radio_table_stats)return-1;return Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.num_sta||0,0)},g=(e,t,a,c)=>{const i=T(a,l.b.NG),r=T(c,l.b.NG);return Object(n.d)(i,r)},N=(e,t,a,c)=>{const i=T(a,l.b.NA),r=T(c,l.b.NA);return Object(n.d)(i,r)},D=(e,t)=>{const a=Object(o.getRadioStatsByType)(e,t);return a.length?a.reduce((e,t)=>e+(t.ast_be_xmit||0)+(t.tx_packets||0),0):-1},I=(e,t,a,c)=>{const i=D(a,l.b.NG),r=D(c,l.b.NG);return Object(n.d)(i,r)},h=(e,t,a,c)=>{const i=D(a,l.b.NA),r=D(c,l.b.NA);return Object(n.d)(i,r)},j=(e,t,a,c)=>{const i=Object(o.getChannelValue)(a),r=Object(o.getChannelValue)(c);return Object(n.d)(i,r)},f=(e,t)=>Object(o.getRadioStatsByType)(e,t).reduce((e,t)=>e+t.cu_total||0,0),C=(e,t,a,c)=>{const i=f(a,l.b.NG),r=f(c,l.b.NG);return Object(n.d)(i,r)},R=(e,t,a,c)=>{const i=f(a,l.b.NA),r=f(c,l.b.NA);return Object(n.d)(i,r)}},1952:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(1848),r=a(5),l=a(793),o=a(1939);const s=r.a`
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
`;t.a=({timeout:e={enter:300,exit:100},in:t,ignoredPaths:a,children:r,..._})=>{const E=Object(o.a)(),d=Object(l.a)(a),m=Object(n.useMemo)(()=>c.a.Children.map(r,a=>null===a?a:c.a.createElement(i.a,Object.assign({appear:t||!d||E,in:t||!d||E,timeout:e,classNames:s,mountOnEnter:!0},_),a)),[r,t,d,E,e,_]);return c.a.createElement(c.a.Fragment,null,m)}},2008:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return s}));var n=function(e){return e.toString().substring(1).split(/\/([^/]*)$/)},c=function(e,t){var a=n(e),c=a[0],i=a[1];return new RegExp(t.call(t,c),i)},i=function(e){return c(e,(function(e){var t="^"===e.substring(0,1),a="$"===e.substring(e.length-1);if(!t&&!a)throw new Error("Unable to modify - regex does not contain modifiers to remove");return e.substring(t?1:0,e.length-(a?1:0))}))},r=function(e){return n(e)[0]},l=function(e){return c(e,(function(e){if("^"===e.substring(0,1)||"$"===e.substring(e.length-1))throw new Error("Unable to modify - regex already contains one or more modifiers");return"^".concat(e,"$")}))},o=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("Unable to combine - missing source regexes");var a=e.map((function(e){return"(".concat(n(e)[0],")")})).join("|");return new RegExp(a,t)},s=function(e,t,a,c){return new RegExp((e||"")+n(t)[0]+(a||""),c)}},2094:function(e,t,a){"use strict";var n=a(5),c=a(52);t.a=Object(n.c)(c.a)`
  width: 385px;
  ${({theme:e})=>`padding: ${e.spacing["spacing-xxl"]} ${e.spacing["spacing-xxxxxl"]} ${e.spacing["spacing-xxxxl"]} `};

  header {
    > div {
      margin-bottom: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }
  footer {
    border-top: 1px solid ${({theme:e})=>e.motifPalette.ui07};
    margin-top: ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    button {
      padding: 0 ${({theme:e})=>e.spacing["spacing-xxxxl"]};
    }
  }
`}}]);