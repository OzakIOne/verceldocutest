"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15158],{24239:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(24246),r=(n(27378),n(40624)),c=n(41876),i=n(13415),s=n(64149),a=n(36712),d=n(52615);const l={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:e,children:t}){return(0,o.jsx)(i.Z,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:t})}function m({href:e,icon:t,title:n,description:c}){return(0,o.jsxs)(u,{href:e,children:[(0,o.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:n,children:[t," ",n]}),c&&(0,o.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function h({item:e}){const t=(0,c.LM)(e);return t?(0,o.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function g({item:e}){const t=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const r=(0,c.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var i;return(0,o.jsx)(m,{href:e.href,icon:t,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==r?void 0:r.description})}function p({item:e}){switch(e.type){case"link":return(0,o.jsx)(g,{item:e});case"category":return(0,o.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y({className:e}){const t=(0,c.jA)();return(0,o.jsx)(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return(0,o.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){f(e,t,n[t])}))}return e}({},e));const i=(0,c.MN)(t);return(0,o.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(p,{item:e})},t)))})}},99977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=n(24246),r=n(71670),c=n(24239),i=n(41876);const s={},a="Category with a doc of category's name",d={id:"tests/category-links/with-category-name-doc/with-category-name-doc",title:"Category with a doc of category's name",description:"You should be able to click on the category and browse this /.md doc",source:"@site/_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx",sourceDirName:"tests/category-links/with-category-name-doc",slug:"/tests/category-links/with-category-name-doc/",permalink:"/tests/docs/tests/category-links/with-category-name-doc/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1672858796,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{},sidebar:"sidebar",previous:{title:"Sample doc",permalink:"/tests/docs/tests/category-links/regular-category/sample-doc"},next:{title:"Sample doc",permalink:"/tests/docs/tests/category-links/with-category-name-doc/sample-doc"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"Category content",id:"category-content",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"category-with-a-doc-of-categorys-name",children:"Category with a doc of category's name"}),"\n",(0,o.jsxs)(t.p,{children:["You should be able to click on the category and browse this ",(0,o.jsx)(t.code,{children:"<categoryName>/<categoryName>.md"})," doc"]}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(t.p,{children:"Some intro text"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"It is also possible to render the card items for that category thanks to MDX:"})}),"\n",(0,o.jsx)(t.h2,{id:"category-content",children:"Category content"}),"\n","\n","\n",(0,o.jsx)(c.Z,{items:(0,i.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(27378);const r={},c=o.createContext(r);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);