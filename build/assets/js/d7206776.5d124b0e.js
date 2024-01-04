"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96939],{24239:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(24246),i=(n(27378),n(40624)),c=n(41876),o=n(13415),s=n(64149),a=n(36712),d=n(52615);const l={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:e,children:t}){return(0,r.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",l.cardContainer),children:t})}function h({href:e,icon:t,title:n,description:c}){return(0,r.jsxs)(u,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:n,children:[t," ",n]}),c&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function p({item:e}){const t=(0,c.LM)(e);return t?(0,r.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function m({item:e}){const t=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const i=(0,c.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var o;return(0,r.jsx)(h,{href:e.href,icon:t,title:e.label,description:null!==(o=e.description)&&void 0!==o?o:null==i?void 0:i.description})}function f({item:e}){switch(e.type){case"link":return(0,r.jsx)(m,{item:e});case"category":return(0,r.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v({className:e}){const t=(0,c.jA)();return(0,r.jsx)(g,{items:t.items,className:e})}function g(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({},e));const o=(0,c.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(f,{item:e})},t)))})}},31565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(24246),i=n(71670),c=n(24239);const o={},s="Advanced Tutorials",a={id:"advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/docs/advanced/index.mdx",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docs/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1672409308,formattedLastUpdatedAt:"Dec 30, 2022",frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docs/guides/whats-next"},next:{title:"Architecture",permalink:"/docs/advanced/architecture"}},d={},l=[];function u(e){const t={a:"a",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"}),"\n",(0,r.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n","\n",(0,r.jsx)(c.Z,{}),"\n",(0,r.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,r.jsx)(t.a,{href:"/docs/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(27378);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);