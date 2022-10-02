import{r as f,c as V,S as y,H as w,v as F,m as re,a as se,G as ie,f as oe,s as ae,i as H,D as M,b as A,d as ue,e as G,g as ce,h as le,j as q,M as U,I as de,A as pe,k as me,l as he,n as fe,o as ge,p as Ie,q as ye,t as we,u as Te,w as ve,x as xe,y as De,z as Pe,B as l,C as Ee,E as Ce,F as Se,J as Q,K as Ae,L as Le,N as $,Q as W,O as Y,P as _,R as j,V as J,T as K,U as X,W as Re,X as Ue,Y as He,Z as Me,_ as z,$ as be,a0 as R,a1 as Oe,a2 as Ne,a3 as Be,a4 as ze}from"./sanity.17237e3d.js";function Ve(r){const{projectId:e,dataset:n,schema:a,currentUser:o,getClient:u}=r;return f.exports.useMemo(()=>{const i=u({apiVersion:"2021-06-07"});return Object.defineProperty({projectId:e,dataset:n,schema:a,currentUser:o,getClient:u,client:i},"client",{get(){return console.warn('`configContext.client` is deprecated and will be removed in the next version! Use `configContext.getClient({apiVersion: "2021-06-07"})` instead.'),i}})},[e,n,a,o,u])}function Fe(r){const{projectId:e,dataset:n,schema:a,currentUser:o,getClient:u}=r,i=u({apiVersion:"2021-06-07"});return{projectId:e,dataset:n,schema:a,currentUser:o,getClient:u,client:i}}function Ge(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}class C{constructor(e){Ge(this,"spec",void 0),this.spec={options:{},...e||{}}}id(e){return this.clone({id:e})}getId(){return this.spec.id}title(e){return this.clone({title:e,id:this.spec.id||V(e)})}getTitle(){return this.spec.title}child(e){return this.clone({child:e})}getChild(){return this.spec.child}component(e){return this.clone({component:e})}getComponent(){return this.spec.component}options(e){return this.clone({options:e})}getOptions(){return this.spec.options||{}}menuItems(e){return this.clone({menuItems:e})}getMenuItems(){return this.spec.menuItems}menuItemGroups(e){return this.clone({menuItemGroups:e})}getMenuItemGroups(){return this.spec.menuItemGroups}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:[]};const{id:n,title:a,child:o,options:u,component:i}=this.spec;if(!n)throw new y("`id` is required for `component` structure item",e.path,e.index).withHelpUrl(w.ID_REQUIRED);if(!i)throw new y("`component` is required for `component` structure item",e.path,e.index).withHelpUrl(w.ID_REQUIRED);return{id:F(n,e.path,e.index),title:a,type:"component",child:o,component:i,options:u||{},menuItems:(this.spec.menuItems||[]).map((s,t)=>re(s,t,e.path)),menuItemGroups:(this.spec.menuItemGroups||[]).map((s,t)=>se(s,t,e.path))}}clone(e){const n=new C;return n.spec={...this.spec,...e||{}},n}}function qe(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}const Qe=r=>r instanceof D?"ListBuilder":je(r)?"Promise":Array.isArray(r)?"array":typeof r,$e=r=>r.type==="listItem",We=(r,e,n)=>(n.pane.items||[]).filter(Ze).some(u=>u.schemaType.name===e.type&&u._id===e.id)||ae(r,e,n),Ye=(r,e)=>{const o=(e.parent.items.filter($e).find(u=>u.id===r)||{child:void 0}).child;return!o||typeof o!="function"?o:typeof o=="function"?o(r,e):o};function _e(r,e,n){if(r instanceof P)return r.serialize({path:n,index:e});const a=r;if(a&&a.type==="divider")return r;if(!a||a.type!=="listItem"){const o=a&&a.type||Qe(a),u=o==="array"?" - did you forget to spread (...moreItems)?":"";throw new y('List items must be of type "listItem", got "'.concat(o,'"').concat(u),n,e).withHelpUrl(w.INVALID_LIST_ITEM)}return r}function je(r){return H(r)&&typeof r.then=="function"}class D extends ie{constructor(e,n){super(),this._context=e,qe(this,"spec",void 0),this.spec=n||{},this.initialValueTemplatesSpecified=Boolean(n&&n.initialValueTemplates)}items(e){return this.clone({items:e})}getItems(){return this.spec.items}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:[]};const n=this.spec.id;if(typeof n!="string"||!n)throw new y("`id` is required for lists",e.path,e.index).withHelpUrl(w.ID_REQUIRED);const a=typeof this.spec.items>"u"?[]:this.spec.items;if(!Array.isArray(a))throw new y("`items` must be an array of items",e.path,e.index).withHelpUrl(w.LIST_ITEMS_MUST_BE_ARRAY);const o=(e.path||[]).concat(n),u=a.map((s,t)=>_e(s,t,o)),i=u.filter((s,t)=>oe(u,{id:s.id},t+1));if(i.length>0){const s=i.map(c=>c.id).slice(0,5),t=i.length>5?"".concat(s.join(", "),"..."):s.join(", ");throw new y("List items with same ID found (".concat(t,")"),e.path,e.index).withHelpUrl(w.LIST_ITEM_IDS_MUST_BE_UNIQUE)}return{...super.serialize(e),type:"list",canHandleIntent:this.spec.canHandleIntent||We,child:this.spec.child||Ye,items:u}}clone(e){const n=new D(this._context);return n.spec={...this.spec,...e||{}},n}}function Je(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}class P{constructor(e,n){this._context=e,Je(this,"spec",void 0),this.spec=n||{}}id(e){return this.clone({id:e})}getId(){return this.spec.id}title(e){return this.clone({title:e,id:this.spec.id||V(e)})}getTitle(){return this.spec.title}icon(e){return this.clone({icon:e})}showIcon(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return this.clone({displayOptions:{...this.spec.displayOptions||{},showIcon:e}})}getShowIcon(){return this.spec.displayOptions?this.spec.displayOptions.showIcon:void 0}getIcon(){return this.spec.icon}child(e){return this.clone({child:e})}getChild(){return this.spec.child}schemaType(e){return this.clone({schemaType:e})}getSchemaType(){const e=this.spec.schemaType;return typeof e=="string"?this._context.schema.get(e):this.spec.schemaType}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:[]};const{id:n,title:a,child:o}=this.spec;if(typeof n!="string"||!n)throw new y("`id` is required for list items",e.path,e.index).withHelpUrl(w.ID_REQUIRED);if(!e.titleIsOptional&&(typeof a!="string"||!a))throw new y("`title` is required for list items",e.path,n).withHelpUrl(w.TITLE_REQUIRED);let u=this.spec.schemaType;if(typeof u=="string"){const t=this._context.schema.get(u);if(!t)throw new y('Could not find type "'.concat(u,'" in schema'),e.path,n).withHelpUrl(w.SCHEMA_TYPE_NOT_FOUND);u=t}const i={path:e.path.concat(n),hint:"child"};let s=o instanceof C||o instanceof M||o instanceof A||o instanceof D?o.serialize(i):o;if(typeof s=="function"){const t=s;s=(c,p)=>t(c,{...p,serializeOptions:i})}return{...this.spec,id:F(n,e.path,e.index),schemaType:u,child:s,title:a,type:"listItem"}}clone(e){const n=new P(this._context);return n.spec={...this.spec,...e||{}},n}}function Ke(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}const Xe=(r,e)=>n=>{const a=e.schemaType&&(typeof e.schemaType=="string"?e.schemaType:e.schemaType.name);return a?r.resolveDocumentNode({schemaType:a,documentId:n}):new A(r).id("documentEditor").documentId(n)};class b extends P{constructor(e,n){super(e,n),this._context=e,Ke(this,"spec",void 0),this.spec=n||{}}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:[]};const n=super.serialize({...e,titleIsOptional:!0});if(!n.schemaType)throw new y("`schemaType` is required for document list items",e.path,e.index).withHelpUrl(w.SCHEMA_TYPE_REQUIRED);const a=n.child||Xe(this._context,n);return{...n,child:a,schemaType:n.schemaType,_id:n.id}}clone(e){const n=new b(this._context);return n.spec={...this.spec,...e||{}},n}}function Ze(r){return H(r)&&typeof r.schemaType<"u"&&typeof r._id=="string"}function ke(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}class L extends M{constructor(e,n){super(e),this._context=e,ke(this,"spec",void 0),this.spec=n||{}}child(e){return this.cloneWithoutDefaultIntentHandler({child:e})}clone(e){const n=super.clone(e),a=new L(this._context);return a.spec={...this.spec,...n.getSpec(),...e||{}},a}cloneWithoutDefaultIntentHandler(e){const n=super.clone(e),a=new L(this._context),o=this.spec.canHandleIntent,i=o&&o.identity===ue?{canHandleIntent:void 0}:{};return a.spec={...n.getSpec(),...this.spec,...e||{},...i},a}}function et(r){const e=r.preview;return Boolean(e&&(e.prepare||e.select&&e.select.media))}const tt=["sanity.imageAsset","sanity.fileAsset"];function nt(r){return tt.includes(r)}function rt(r){var e;return((e=r.type)===null||e===void 0?void 0:e.name)==="document"}function st(r){return r.type==="list"}function it(r){let{schema:e}=r;return e.getTypeNames().filter(n=>{const a=e.get(n);return a&&rt(a)}).filter(n=>!nt(n))}function Z(r){return it(r).map(n=>k(r,n))}function k(r,e){const{schema:n}=r,a=n.get(e);if(!a)throw new Error('Schema type with name "'.concat(e,'" not found'));const o=a.title||G(e);return new P(r).id(e).title(o).schemaType(a).child((u,i)=>{const s=i.parent,t=st(s)?s.items.find(p=>p.id===u):null;let c=ee(r,e);return t&&t.title&&(c=c.title(t.title)),c})}function ee(r,e){const{schema:n,resolveDocumentNode:a}=r,o=typeof e=="string"?e:e.schemaType,u=typeof o=="string"?o:o.name,i=typeof e=="string"?{schemaType:o}:e,s=n.get(u);if(!s)throw new Error('Schema type with name "'.concat(u,'" not found'));const t=s.title||G(u),c=et(s);return new L(r).id(i.id||u).title(i.title||t).filter("_type == $type").params({type:u}).schemaType(s).showIcons(c).defaultOrdering(ce.by).menuItemGroups(i.menuItemGroups||[{id:"sorting",title:"Sort"},{id:"layout",title:"Layout"},{id:"actions",title:"Actions"}]).child(i.child||(p=>a({schemaType:u,documentId:p}))).canHandleIntent(i.canHandleIntent||le).menuItems(i.menuItems||[...q(r,s),new U(r).group("layout").title("Compact view").icon(de).action("setLayout").params({layout:"default"}),new U(r).group("layout").title("Detailed view").icon(pe).action("setLayout").params({layout:"detail"})])}function ot(r){return!r||typeof r=="string"?!1:Boolean(r.icon)}function at(r){const e=Z(r);return new D(r).id("__root__").title("Content").items(e).showIcons(e.some(n=>ot(n.getSchemaType())))}function ut(r){let{defaultDocumentNode:e,source:n}=r;const a=Fe(n),o={...n,getStructureBuilder:()=>u,resolveDocumentNode:i=>{let s=(e==null?void 0:e(u,{...i,...a}))||new A(o);return s.getId()||(s=s.id("documentEditor")),i.documentId&&(s=s.documentId(me(i.documentId))),s.schemaType(i.schemaType)}},u={defaults:()=>at(o),documentTypeList:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return ee(o,...s)},documentTypeListItem:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return k(o,...s)},documentTypeListItems:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return Z(o,...s)},document:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new A(o,...s)},documentWithInitialValueTemplate:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return he(o,...s)},defaultDocument:o.resolveDocumentNode,list:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new D(o,...s)},listItem:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new P(o,...s)},menuItem:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new U(o,...s)},menuItemGroup:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new fe(o,...s)},menuItemsFromInitialValueTemplateItems:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return ge(o,...s)},documentList:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new M(o,...s)},documentListItem:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return new b(o,...s)},orderingMenuItem:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return Ie(o,...s)},orderingMenuItemsForType:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return q(o,...s)},editor:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return ye(o,...s)},defaultInitialValueTemplateItems:function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return we(o,...s)},initialValueTemplateItem:(i,s)=>new Te(o,{id:i,parameters:s,templateId:i}),component:i=>ve.exports.isValidElementType(i)?new C().component(i):new C(i),divider:()=>({id:xe("__divider__"),type:"divider"}),view:De,context:o};return u}function ct(r){let{defaultDocumentNode:e,structure:n,children:a}=r;const[o,u]=f.exports.useState(!1),i=Pe(),s=Ve(i),t=f.exports.useMemo(()=>ut({defaultDocumentNode:e,source:i}),[e,i]),c=f.exports.useMemo(()=>n?n(t,s):t.defaults(),[t,n,s]);return l(Ee.Provider,{value:f.exports.useMemo(()=>({features:{backButton:o,reviewChanges:!o,splitPanes:!o,splitViews:!o},layoutCollapsed:o,setLayoutCollapsed:u,rootPaneNode:c,structureContext:t.context}),[o,c,t.context]),children:a})}async function lt(r){const e=new Map,a=Ce(t=>(c,p,m)=>{const g=c&&"".concat(Le(c),"-").concat(p.path.join("__")),h=g&&e.get(g);if(h)return h;const v=t(c,p,m);return g&&e.set(g,v),v}),o=[[{id:"__edit__".concat(r.params.id),params:{...Se(r.params,["id"]),type:r.params.type},payload:r.payload}]];async function u(t){var c;let{currentId:p,flatIndex:m,intent:g,params:h,parent:v,path:I,payload:E,unresolvedPane:x,levelIndex:S,structureContext:O}=t;if(!x)return[];const{id:N,type:te,...B}=h,d=await a(x,{id:p,splitIndex:0,parent:v,path:I,index:m,params:{},payload:void 0,structureContext:O},m).pipe(Q()).toPromise();return d.type==="document"&&d.id===N?[{panes:[...I.slice(0,I.length-1).map(T=>[{id:T}]),[{id:N,params:B,payload:E}]],depthIndex:I.length,levelIndex:S}]:(c=d.canHandleIntent)!==null&&c!==void 0&&c.call(d,g,h,{pane:d,index:m})||d.type==="documentList"&&d.schemaTypeName===te&&d.options.filter==="_type == $type"?[{panes:[...I.map(T=>[{id:T}]),[{id:h.id,params:B,payload:E}]],depthIndex:I.length,levelIndex:S}]:d.type==="list"&&d.child&&d.items?(await Promise.all(d.items.map((T,ne)=>T.type==="divider"?Promise.resolve([]):u({currentId:T._id||T.id,flatIndex:m+1,intent:g,params:h,parent:d,path:[...I,T.id],payload:E,unresolvedPane:typeof d.child=="function"?Ae(d,"child"):d.child,levelIndex:ne,structureContext:O})))).flat():[]}const s=(await u({currentId:"root",flatIndex:0,levelIndex:0,intent:r.intent,params:r.params,parent:null,path:[],payload:r.payload,unresolvedPane:r.rootPaneNode,structureContext:r.structureContext})).sort((t,c)=>t.depthIndex===c.depthIndex?t.levelIndex-c.levelIndex:t.depthIndex-c.depthIndex)[0];return s?s.panes:o}function dt(r){let{panes:e}=r;const{navigate:n}=$();return f.exports.useEffect(()=>{n({panes:e},{replace:!0})},[n,e]),l(W,{height:"fill",children:l(Y,{ms:300,children:_(j,{align:"center",direction:"column",height:"fill",justify:"center",children:[l(J,{muted:!0}),l(K,{marginTop:3,children:l(X,{muted:!0,size:1,children:"Redirecting\u2026"})})]})})})}async function pt(r,e,n){if(e&&n)return{id:e,type:n};if(!e&&n)return{id:Re(),type:n};if(e&&!n){const a=await r.resolveTypeForDocument(e).pipe(Q()).toPromise();return{id:e,type:a}}throw new Ue({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}function mt(r){let{intent:e,params:n={},payload:a}=r;const{rootPaneNode:o,structureContext:u}=He(),i=Me(),s=z(n),t=z(a),[c,p]=f.exports.useState(null),[m,g]=f.exports.useState(null),h=typeof s.id=="string"?s.id:void 0,v=typeof s.type=="string"?s.type:void 0;if(f.exports.useEffect(()=>{const I={current:!1};async function E(){const{id:x,type:S}=await pt(i,h,v);return lt({intent:e,params:{...s,id:x,type:S},payload:t,rootPaneNode:o,structureContext:u})}return E().then(x=>{I.current||p(x)}).catch(g),()=>{I.current=!0}},[i,h,e,s,t,o,u,v]),m)throw m;return c?l(dt,{panes:c}):l(W,{height:"fill",children:l(Y,{ms:300,children:_(j,{align:"center",direction:"column",height:"fill",justify:"center",children:[l(J,{muted:!0}),l(K,{marginTop:3,children:l(X,{align:"center",muted:!0,size:1,children:"Loading\u2026"})})]})})})}const ht={};function It(r){let{tool:{options:e}}=r;const{unstable_sources:n}=be(),[a]=n,{source:o,defaultDocumentNode:u,structure:i}=e||{},{state:s}=$(),t=f.exports.useMemo(()=>{const m=typeof s.intent=="string"?s.intent:void 0,g=H(s.params)?s.params:ht,h=s.payload;return m?{intent:m,params:g,payload:h}:void 0},[s]);f.exports.useEffect(()=>(R([]),()=>R([])),[]);const[{error:c},p]=f.exports.useState({error:null});return c?l(Oe,{error:c}):l(Ne,{onCatch:p,children:l(Be,{name:o||a.name,children:l(ct,{defaultDocumentNode:u,structure:i,children:t?l(mt,{...t}):l(ze,{onPaneChange:R})})})})}export{It as default};
