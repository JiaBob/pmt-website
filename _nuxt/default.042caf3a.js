import{u as k}from"./composables.62ecb5fe.js";import{R as s,S as H,l as x,U as _,V as q,W as E,q as L,j as C,s as f,t as g,A as S,u as p,o as c,G as j,z,N as m,O as h,c as y,X as D}from"./entry.55188f77.js";const M=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),l=(e,t)=>(i,r)=>(k(()=>e({...M(i),...r.attrs},r)),()=>{var o,n;return t?(n=(o=r.slots).default)==null?void 0:n.call(o):null}),d={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};s({name:"NoScript",inheritAttrs:!1,props:{...d,title:String,body:Boolean,renderPriority:[String,Number]},setup:l((e,{slots:t})=>{var o;const i={...e},r=(((o=t.default)==null?void 0:o.call(t))||[]).filter(({children:n})=>n).map(({children:n})=>n).join("");return r&&(i.children=r),{noscript:[i]}})});const O=s({name:"Link",inheritAttrs:!1,props:{...d,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:l(e=>({link:[e]}))});s({name:"Base",inheritAttrs:!1,props:{...d,href:String,target:String},setup:l(e=>({base:e}))});const R=s({name:"Title",inheritAttrs:!1,setup:l((e,{slots:t})=>{var r,o,n;return{title:((n=(o=(r=t.default)==null?void 0:r.call(t))==null?void 0:o[0])==null?void 0:n.children)||null}})}),T=s({name:"Meta",inheritAttrs:!1,props:{...d,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:l(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})});s({name:"Style",inheritAttrs:!1,props:{...d,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:l((e,{slots:t})=>{var o,n,u;const i={...e},r=(u=(n=(o=t.default)==null?void 0:o.call(t))==null?void 0:n[0])==null?void 0:u.children;return r&&(i.children=r),{style:[i]}})});const U=s({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var i,r;return(r=(i=t.slots).default)==null?void 0:r.call(i)}}),V=s({name:"Html",inheritAttrs:!1,props:{...d,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:l(e=>({htmlAttrs:e}),!0)}),$=s({name:"Body",inheritAttrs:!1,props:{...d,renderPriority:[String,Number]},setup:l(e=>({bodyAttrs:e}),!0)});function F(e={addDirAttribute:!1,addSeoAttributes:!1,identifierAttribute:"hid"}){const{addDirAttribute:t,addSeoAttributes:i,identifierAttribute:r}=e,o=e.i18n||H(x().$i18n),n=_(),u=q();return E({addDirAttribute:t,addSeoAttributes:i,identifierAttribute:r,router:u,route:n,i18n:o})}const w={id:"app"},W={__name:"default",setup(e){const t=_(),{t:i}=L(),r=F({identifierAttribute:"id",addDirAttribute:!0,addSeoAttributes:!0}),o=C(()=>(t.meta.title?i(t.meta.title)+" | ":"")+"PrivacyPRO");return(n,u)=>{const b=R,A=T,B=O,v=U,N=$,P=V;return c(),f("div",w,[g(P,{lang:p(r).htmlAttrs.lang,dir:p(r).htmlAttrs.dir,class:"scroll-smooth"},{default:S(()=>[g(v,null,{default:S(()=>[g(b,null,{default:S(()=>[j(z(p(o)),1)]),_:1}),(c(!0),f(m,null,h(p(r).meta,a=>(c(),y(A,{key:a.id,id:a.id,property:a.property,content:a.content},null,8,["id","property","content"]))),128)),(c(!0),f(m,null,h(p(r).link,a=>(c(),y(B,{key:a.id,id:a.id,rel:a.rel,href:a.href,hreflang:a.hreflang},null,8,["id","rel","href","hreflang"]))),128))]),_:1}),g(N,null,{default:S(()=>[D(n.$slots,"default")]),_:3})]),_:3},8,["lang","dir"])])}}};export{W as default};