"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89387],{25728:(e,n,t)=>{t.d(n,{Z:()=>r});const r="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\nconst sidebars: SidebarsConfig = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Upgrading',\n      link: {\n        type: 'doc',\n        id: 'migration/index',\n      },\n      items: [\n        'migration/v3',\n        // TODO do we want to keep upgrade docs for older Docusaurus versions?\n        // It contains links to docs of current version :/\n        {\n          type: 'category',\n          label: 'To Docusaurus v2',\n          items: [\n            'migration/v2/migration-overview',\n            'migration/v2/migration-automated',\n            'migration/v2/migration-manual',\n            'migration/v2/migration-versioned-sites',\n            'migration/v2/migration-translated-sites',\n          ],\n        },\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\n\nexport default sidebars;\n"},24239:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(24246),o=(t(27378),t(40624)),s=t(41876),i=t(13415),c=t(64149),a=t(36712),l=t(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function u({href:e,children:n}){return(0,r.jsx)(i.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function p({href:e,icon:n,title:t,description:s}){return(0,r.jsxs)(u,{href:e,children:[(0,r.jsxs)(l.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:t,children:[n," ",t]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function b({item:e}){const n=(0,s.LM)(e);return n?(0,r.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var t}function f({item:e}){const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var t;const o=(0,s.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);var i;return(0,r.jsx)(p,{href:e.href,icon:n,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return(0,r.jsx)(f,{item:e});case"category":return(0,r.jsx)(b,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h({className:e}){const n=(0,s.jA)();return(0,r.jsx)(y,{items:n.items,className:e})}function y(e){const{items:n,className:t}=e;if(!n)return(0,r.jsx)(h,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({},e));const i=(0,s.MN)(n);return(0,r.jsx)("section",{className:(0,o.Z)("row",t),children:i.map(((e,n)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},n)))})}},94544:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(24246),o=(t(27378),t(29088));function s({children:e,fallback:n}){return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e()}):null!=n?n:null}},38112:(e,n,t)=>{t.d(n,{Z:()=>Ee});var r={};t.r(r),t.d(r,{ButtonExample:()=>T});var o=t(24246),s=t(27378),i=t(40624),c=t(29088),a=t(32711),l=t(36712),d=t(4423),u=t(94544),p=t(30691),b=t(78844),f=t(73919);function g(){const{prism:e}=(0,f.L)(),{colorMode:n}=(0,b.I)(),t=e.theme,r=e.darkTheme||t;return"dark"===n?r:t}var m=t(88941);const h={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function x(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function v({children:e}){return(0,o.jsx)("div",{className:(0,i.Z)(h.playgroundHeader),children:e})}function w(){return(0,o.jsx)("div",{children:"Loading..."})}function k(){return(0,o.jsx)(u.Z,{fallback:(0,o.jsx)(w,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Z,{fallback:e=>(0,o.jsx)(p.Ac,j({},e)),children:(0,o.jsx)(a.i5,{})}),(0,o.jsx)(a.IF,{})]})})}function P(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:h.playgroundPreview,children:(0,o.jsx)(k,{})})]})}function S(){const e=(0,c.Z)();return(0,o.jsx)(a.uz,{className:h.playgroundEditor},String(e))}function C(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}const N=e=>`${e};`;function B(e){var n,{children:t,transformCode:r}=e,s=x(e,["children","transformCode"]);const{siteConfig:{themeConfig:i}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:c}}=i,l=g();var u;const p=null!==(u=null===(n=s.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==u&&u;return(0,o.jsx)("div",{className:h.playgroundContainer,children:(0,o.jsx)(a.nu,O(j({code:t.replace(/\n$/,""),noInline:p,transformCode:null!=r?r:N,theme:l},s),{children:"top"===c?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(C,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(P,{})]})}))})}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){D(e,n,t[n])}))}return e}function L(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function T(e){return(0,o.jsx)("button",L(E({type:"button"},e),{style:E({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const Z=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){I(e,n,t[n])}))}return e}({React:s},s,r);var _,A,H=t(89583),W=t(6324),F=t.n(W);const M=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),$=RegExp("\\{(?<range>[\\d,-]+)\\}"),z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function R(e,n){const t=e.map((e=>{const{start:t,end:r}=z[e];return`(?:${t}\\s*(${n.flatMap((e=>{var n,t;return[e.line,null===(n=e.block)||void 0===n?void 0:n.start,null===(t=e.block)||void 0===t?void 0:t.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)}function G(e,n){let t=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:s}=n;if(s&&$.test(s)){const e=s.match($).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const n=o[0].className,r=F()(e).filter((e=>e>0)).map((e=>[e-1,[n]]));return{lineClassNames:Object.fromEntries(r),code:t}}if(void 0===r)return{lineClassNames:{},code:t};const i=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],n);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],n);case"html":return R(["js","jsBlock","html"],n);case"python":case"py":case"bash":return R(["bash"],n);case"markdown":case"md":return R(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return R(["tex"],n);case"lua":case"haskell":case"sql":return R(["lua"],n);case"wasm":return R(["wasm"],n);default:return R(Object.keys(z).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),n)}}(r,o),c=t.split("\n"),a=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:n})=>[n,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:n})=>[n.start,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:n})=>[n.end,e])));for(let b=0;b<c.length;){const e=c[b].match(i);if(!e){b+=1;continue}const n=e.slice(1).find((e=>void 0!==e));l[n]?a[l[n]].range+=`${b},`:d[n]?a[d[n]].start=b:u[n]&&(a[u[n]].range+=`${a[u[n]].start}-${b-1},`),c.splice(b,1)}t=c.join("\n");const p={};return Object.entries(a).forEach((([e,{range:n}])=>{F()(n).forEach((n=>{var t;null!==(t=(_=p)[A=n])&&void 0!==t||(_[A]=[]),p[n].push(e)}))})),{lineClassNames:p,code:t}}const U={codeBlockContainer:"codeBlockContainer_jDV4"};function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function Q(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function J(e){var{as:n}=e,t=Q(e,["as"]);const r=function(e){const n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((([e,r])=>{const o=n[e];o&&"string"==typeof r&&(t[o]=r)})),t}(g());return(0,o.jsx)(n,q(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}({},t),{style:r,className:(0,i.Z)(t.className,U.codeBlockContainer,H.k.common.codeBlock)}))}const X={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function Y({children:e,className:n}){return(0,o.jsx)(J,{as:"pre",tabIndex:0,className:(0,i.Z)(X.codeBlockStandalone,"thin-scrollbar",n),children:(0,o.jsx)("code",{className:X.codeBlockLines,children:e})})}var K=t(51114);const ee={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ne(e,n){const[t,r]=(0,s.useState)(),o=(0,s.useCallback)((()=>{var n;r(null===(n=e.current)||void 0===n?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,s.useEffect)((()=>{o()}),[o]),function(e,n,t=ee){const r=(0,K.zX)(n),o=(0,K.Ql)(t);(0,s.useEffect)((()=>{const n=new MutationObserver(r);return e&&n.observe(e,o),()=>n.disconnect()}),[e,r,o])}(t,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(n(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var te=t(26101);const re={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){oe(e,n,t[n])}))}return e}function ie(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function ce({line:e,classNames:n,showLineNumbers:t,getLineProps:r,getTokenProps:s}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const c=r({line:e,className:(0,i.Z)(n,t&&re.codeLine)}),a=e.map(((e,n)=>(0,o.jsx)("span",se({},s({token:e,key:n})),n)));return(0,o.jsxs)("span",ie(se({},c),{children:[t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:re.codeLineNumber}),(0,o.jsx)("span",{className:re.codeLineContent,children:a})]}):a,(0,o.jsx)("br",{})]}))}var ae=t(34370);function le(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function ue(e){return(0,o.jsx)("svg",de(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){le(e,n,t[n])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function be(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function fe(e){return(0,o.jsx)("svg",be(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const ge={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function me({code:e,className:n}){const[t,r]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),a=(0,s.useCallback)((()=>{(0,ae.Z)(e),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":t?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,ge.copyButton,t&&ge.copyButtonCopied),onClick:a,children:(0,o.jsxs)("span",{className:ge.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(ue,{className:ge.copyButtonIcon}),(0,o.jsx)(fe,{className:ge.copyButtonSuccessIcon})]})})}function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ye(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function je(e){return(0,o.jsx)("svg",ye(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){he(e,n,t[n])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const Oe={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function xe({className:e,onClick:n,isEnabled:t}){const r=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",e,t&&Oe.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)(je,{className:Oe.wordWrapButtonIcon,"aria-hidden":"true"})})}function ve({children:e,className:n="",metastring:t,title:r,showLineNumbers:c,language:a}){const{prism:{defaultLanguage:l,magicComments:d}}=(0,f.L)();var u;const p=function(e){return null==e?void 0:e.toLowerCase()}(null!==(u=null!=a?a:function(e){const n=e.split(" ").find((e=>e.startsWith("language-")));return null==n?void 0:n.replace(/language-/,"")}(n))&&void 0!==u?u:l),b=g(),m=function(){const[e,n]=(0,s.useState)(!1),[t,r]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const t=o.current.querySelector("code");e?t.removeAttribute("style"):(t.style.whiteSpace="pre-wrap",t.style.overflowWrap="anywhere"),n((e=>!e))}),[o,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:n}=o.current,t=e>n||o.current.querySelector("code").hasAttribute("style");r(t)}),[o]);return ne(o,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:t,toggle:i}}(),h=function(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(M))||void 0===n?void 0:n.groups.title)&&void 0!==t?t:""}(t)||r,{lineClassNames:y,code:j}=G(e,{metastring:t,language:p,magicComments:d}),O=null!=c?c:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(t);return(0,o.jsxs)(J,{as:"div",className:(0,i.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[h&&(0,o.jsx)("div",{className:X.codeBlockTitle,children:h}),(0,o.jsxs)("div",{className:X.codeBlockContent,children:[(0,o.jsx)(te.y$,{theme:b,code:j,language:null!=p?p:"text",children:({className:e,style:n,tokens:t,getLineProps:r,getTokenProps:s})=>(0,o.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,i.Z)(e,X.codeBlock,"thin-scrollbar"),style:n,children:(0,o.jsx)("code",{className:(0,i.Z)(X.codeBlockLines,O&&X.codeBlockLinesWithNumbering),children:t.map(((e,n)=>(0,o.jsx)(ce,{line:e,getLineProps:r,getTokenProps:s,classNames:y[n],showLineNumbers:O},n)))})})}),(0,o.jsxs)("div",{className:X.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,o.jsx)(xe,{className:X.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,o.jsx)(me,{className:X.codeButton,code:j})]})]})]})}function we(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ke(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function Pe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function Se(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Se(e,n,t[n])}))}return e}const Ne=(Be=function(e){var{children:n}=e,t=Pe(e,["children"]);const r=(0,c.Z)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),a="string"==typeof i?ve:Y;return(0,o.jsx)(a,ke(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){we(e,n,t[n])}))}return e}({},t),{children:i}),String(r))},function(e){return e.live?(0,o.jsx)(B,Ce({scope:Z},e)):(0,o.jsx)(Be,Ce({},e))});var Be;function De(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ee(e){return(0,o.jsx)(Ne,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){De(e,n,t[n])}))}return e}({},e))}},2230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=t(24246),o=t(71670),s=t(24239),i=t(38112);const c={slug:"/sidebar"},a="Sidebar",l={id:"guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/docs/guides/docs/sidebar/index.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/index.mdx",tags:[],version:"current",lastUpdatedBy:"Chongyi Zheng",lastUpdatedAt:1697244363,formattedLastUpdatedAt:"Oct 14, 2023",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docs/create-doc"},next:{title:"Sidebar items",permalink:"/docs/sidebar/items"}},d={},u=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,r.jsx)(n.p,{children:"Creating a sidebar is useful to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Group multiple ",(0,r.jsx)(n.strong,{children:"related documents"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Display a sidebar"})," on each of those documents"]}),"\n",(0,r.jsxs)(n.li,{children:["Provide ",(0,r.jsx)(n.strong,{children:"paginated navigation"}),", with next/previous button"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To use sidebars on your Docusaurus site:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Define a file that exports a dictionary of ",(0,r.jsx)(n.a,{href:"#sidebar-object",children:"sidebar objects"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Pass this object into the ",(0,r.jsx)(n.code,{children:"@docusaurus/plugin-docs"})," plugin directly or via ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: './sidebars.js',\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"}),"\n","\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(n.h2,{id:"default-sidebar",children:"Default sidebar"}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"sidebarPath"})," is unspecified, Docusaurus ",(0,r.jsx)(n.a,{href:"/docs/sidebar/autogenerated",children:"automatically generates a sidebar"})," for you, by using the filesystem structure of the ",(0,r.jsx)(n.code,{children:"docs"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also define your sidebars explicitly."}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-object",children:"Sidebar object"}),"\n",(0,r.jsx)(n.p,{children:"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is a sidebars file that exports one sidebar, called ",(0,r.jsx)(n.code,{children:"mySidebar"}),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."]}),"\n",(0,r.jsxs)(n.p,{children:["A sidebars file can contain ",(0,r.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars",children:(0,r.jsx)(n.strong,{children:"multiple sidebar objects"})}),", identified by their object keys."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-configuration",children:"Theme configuration"}),"\n",(0,r.jsx)(n.h3,{id:"hideable-sidebar",children:"Hideable sidebar"}),"\n",(0,r.jsxs)(n.p,{children:["By enabling the ",(0,r.jsx)(n.code,{children:"themeConfig.docs.sidebar.hideable"})," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"auto-collapse-sidebar-categories",children:"Auto-collapse sidebar categories"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"themeConfig.docs.sidebar.autoCollapseCategories"})," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"passing-custom-props",children:"Passing custom props"}),"\n",(0,r.jsxs)(n.p,{children:["To pass in custom props to a sidebar item, add the optional ",(0,r.jsx)(n.code,{children:"customProps"})," object to any of the items. This is useful to apply site customizations by swizzling React components rendering sidebar items."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  type: 'doc',\n  id: 'doc1',\n  // highlight-start\n  customProps: {\n    badges: ['new', 'green'],\n    featured: true,\n  },\n  // highlight-end\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sidebar-breadcrumbs",children:"Sidebar Breadcrumbs"}),"\n",(0,r.jsx)(n.p,{children:'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'}),"\n",(0,r.jsx)(n.p,{children:"This behavior can be disabled with plugin options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complex-sidebars-example",children:"Complex sidebars example"}),"\n",(0,r.jsx)(n.p,{children:"A real-world example from the Docusaurus site:"}),"\n","\n","\n",(0,r.jsx)(i.Z,{language:"js",title:"sidebars.js",children:t(25728).Z.split("\n").map((e=>!["//","/*","*"].some((n=>e.trim().startsWith(n)))&&e)).filter(Boolean).join("\n")})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);