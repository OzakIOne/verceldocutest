"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78645],{61132:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(24246),o=(n(27378),n(40624));const c={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(24246),o=n(27378),c=n(40624),s=n(75527),i=n(3620),a=n(44479),l=n(62821),u=n(52196),p=n(53589);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function b(e){var t,n;return null!==(n=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function f(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return b(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function j({queryString:e=!1,groupId:t}){const n=(0,i.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,l._X)(r),s=(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[r,n]);return[c,s]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,c=f(e),[s,i]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:c}))),[l,u]=j({queryString:n,groupId:r}),[d,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,p.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:r}),b=(()=>{const e=null!=l?l:d;return h({value:e,tabValues:c})?e:null})();(0,a.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,c]),tabValues:c}}var m=n(29088);const O={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function P({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),c=i[r].value;c!==n&&(l(t),o(c))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;var n;t=null!==(n=a[r])&&void 0!==n?n:a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;var r;t=null!==(r=a[n])&&void 0!==r?r:a[a.length-1];break}}null==t||t.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:i.map((({value:e,label:t,attributes:o})=>(0,r.jsx)("li",x(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>a.push(e),onKeyDown:p,onClick:u},o),{className:(0,c.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:n}){const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=c.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function S(e){const t=y(e);return(0,r.jsxs)("div",{className:(0,c.Z)("tabs-container",O.tabList),children:[(0,r.jsx)(P,w({},e,t)),(0,r.jsx)(k,w({},e,t))]})}function E(e){const t=(0,m.Z)();return(0,r.jsx)(S,x(w({},e),{children:b(e.children)}),String(t))}},94544:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24246),o=(n(27378),n(29088));function c({children:e,fallback:t}){return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},52605:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(24246),o=n(27378),c=n(3620);const s={apiTable:"apiTable_e8hp"};function i({name:e,children:t},n){const s=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);return t}(t),i=e?`${e}-${s}`:s,a=`#${i}`,l=(0,c.k6)();return(0,r.jsx)("tr",{id:i,tabIndex:0,ref:l.location.hash===a?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||l.push(a)},onKeyDown:e=>{"Enter"===e.key&&l.push(a)},children:t.props.children})}const a=o.forwardRef(i);function l({children:e,name:t}){const[n,c]=o.Children.toArray(e.props.children),i=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;null===(e=i.current)||void 0===e||e.focus()}),[i]);const l=o.Children.map(c.props.children,(e=>(0,r.jsx)(a,{name:t,ref:i,children:e})));return(0,r.jsxs)("table",{className:s.apiTable,children:[n,(0,r.jsx)("tbody",{children:l})]})}},82064:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(24246),o=(n(27378),n(13415)),c=n(92053),s=n(36712),i=n(97555),a=n(61132),l=n(38112);const u=void 0;function p({code:e,pluginName:t,presetOptionName:n}){const p=(0,c.zu)(u).path;return(0,r.jsxs)(i.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(a.Z,{value:"preset",label:(0,s.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(s.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(o.Z,{to:`${p}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(s.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(l.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${n}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,r.jsxs)(a.Z,{value:"plugin",label:(0,s.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(s.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(l.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},38112:(e,t,n)=>{n.d(t,{Z:()=>Be});var r={};n.r(r),n.d(r,{ButtonExample:()=>L});var o=n(24246),c=n(27378),s=n(40624),i=n(29088),a=n(32711),l=n(36712),u=n(4423),p=n(94544),d=n(30691),g=n(78844),b=n(73919);function f(){const{prism:e}=(0,b.L)(),{colorMode:t}=(0,g.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var h=n(88941);const j={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function w({children:e}){return(0,o.jsx)("div",{className:(0,s.Z)(j.playgroundHeader),children:e})}function x(){return(0,o.jsx)("div",{children:"Loading..."})}function P(){return(0,o.jsx)(p.Z,{fallback:(0,o.jsx)(x,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{fallback:e=>(0,o.jsx)(d.Ac,m({},e)),children:(0,o.jsx)(a.i5,{})}),(0,o.jsx)(a.IF,{})]})})}function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:j.playgroundPreview,children:(0,o.jsx)(P,{})})]})}function S(){const e=(0,i.Z)();return(0,o.jsx)(a.uz,{className:j.playgroundEditor},String(e))}function E(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}const N=e=>`${e};`;function D(e){var t,{children:n,transformCode:r}=e,c=v(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:i}}=s,l=f();var p;const d=null!==(p=null===(t=c.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==p&&p;return(0,o.jsx)("div",{className:j.playgroundContainer,children:(0,o.jsx)(a.nu,O(m({code:n.replace(/\n$/,""),noInline:d,transformCode:null!=r?r:N,theme:l},c),{children:"top"===i?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(E,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{}),(0,o.jsx)(k,{})]})}))})}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function I(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function L(e){return(0,o.jsx)("button",I(B({type:"button"},e),{style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Z=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}({React:c},c,r);var _,A,V=n(89583),$=n(6324),M=n.n($);const q=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),R=RegExp("\\{(?<range>[\\d,-]+)\\}"),H={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function W(e,t){const n=e.map((e=>{const{start:n,end:r}=H[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function F(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:c}=t;if(c&&R.test(c)){const e=c.match(R).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=M()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return W(["js","jsBlock"],t);case"jsx":case"tsx":return W(["js","jsBlock","jsx"],t);case"html":return W(["js","jsBlock","html"],t);case"python":case"py":case"bash":return W(["bash"],t);case"markdown":case"md":return W(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return W(["tex"],t);case"lua":case"haskell":case"sql":return W(["lua"],t);case"wasm":return W(["wasm"],t);default:return W(Object.keys(H).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(r,o),i=n.split("\n"),a=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let g=0;g<i.length;){const e=i[g].match(s);if(!e){g+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?a[l[t]].range+=`${g},`:u[t]?a[u[t]].start=g:p[t]&&(a[p[t]].range+=`${a[p[t]].start}-${g-1},`),i.splice(g,1)}n=i.join("\n");const d={};return Object.entries(a).forEach((([e,{range:t}])=>{M()(t).forEach((t=>{var n;null!==(n=(_=d)[A=t])&&void 0!==n||(_[A]=[]),d[t].push(e)}))})),{lineClassNames:d,code:n}}const U={codeBlockContainer:"codeBlockContainer_jDV4"};function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function Y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Q(e){var{as:t}=e,n=Y(e,["as"]);const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(f());return(0,o.jsx)(t,z(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({},n),{style:r,className:(0,s.Z)(n.className,U.codeBlockContainer,V.k.common.codeBlock)}))}const X={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function J({children:e,className:t}){return(0,o.jsx)(Q,{as:"pre",tabIndex:0,className:(0,s.Z)(X.codeBlockStandalone,"thin-scrollbar",t),children:(0,o.jsx)("code",{className:X.codeBlockLines,children:e})})}var K=n(51114);const ee={attributes:!0,characterData:!0,childList:!0,subtree:!0};function te(e,t){const[n,r]=(0,c.useState)(),o=(0,c.useCallback)((()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,c.useEffect)((()=>{o()}),[o]),function(e,t,n=ee){const r=(0,K.zX)(t),o=(0,K.Ql)(n);(0,c.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var ne=n(26101);const re={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){oe(e,t,n[t])}))}return e}function se(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ie({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=r({line:e,className:(0,s.Z)(t,n&&re.codeLine)}),a=e.map(((e,t)=>(0,o.jsx)("span",ce({},c({token:e,key:t})),t)));return(0,o.jsxs)("span",se(ce({},i),{children:[n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:re.codeLineNumber}),(0,o.jsx)("span",{className:re.codeLineContent,children:a})]}):a,(0,o.jsx)("br",{})]}))}var ae=n(34370);function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function pe(e){return(0,o.jsx)("svg",ue(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function be(e){return(0,o.jsx)("svg",ge(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){de(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const fe={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function he({code:e,className:t}){const[n,r]=(0,c.useState)(!1),i=(0,c.useRef)(void 0),a=(0,c.useCallback)((()=>{(0,ae.Z)(e),r(!0),i.current=window.setTimeout((()=>{r(!1)}),1e3)}),[e]);return(0,c.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":n?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,fe.copyButton,n&&fe.copyButtonCopied),onClick:a,children:(0,o.jsxs)("span",{className:fe.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(pe,{className:fe.copyButtonIcon}),(0,o.jsx)(be,{className:fe.copyButtonSuccessIcon})]})})}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function me(e){return(0,o.jsx)("svg",ye(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){je(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const Oe={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function ve({className:e,onClick:t,isEnabled:n}){const r=(0,l.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,n&&Oe.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,o.jsx)(me,{className:Oe.wordWrapButtonIcon,"aria-hidden":"true"})})}function we({children:e,className:t="",metastring:n,title:r,showLineNumbers:i,language:a}){const{prism:{defaultLanguage:l,magicComments:u}}=(0,b.L)();var p;const d=function(e){return null==e?void 0:e.toLowerCase()}(null!==(p=null!=a?a:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==p?p:l),g=f(),h=function(){const[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1),o=(0,c.useRef)(null),s=(0,c.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,c.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return te(o,i),(0,c.useEffect)((()=>{i()}),[e,i]),(0,c.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:s}}(),j=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(q))||void 0===t?void 0:t.groups.title)&&void 0!==n?n:""}(n)||r,{lineClassNames:y,code:m}=F(e,{metastring:n,language:d,magicComments:u}),O=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return(0,o.jsxs)(Q,{as:"div",className:(0,s.Z)(t,d&&!t.includes(`language-${d}`)&&`language-${d}`),children:[j&&(0,o.jsx)("div",{className:X.codeBlockTitle,children:j}),(0,o.jsxs)("div",{className:X.codeBlockContent,children:[(0,o.jsx)(ne.y$,{theme:g,code:m,language:null!=d?d:"text",children:({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:c})=>(0,o.jsx)("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.Z)(e,X.codeBlock,"thin-scrollbar"),style:t,children:(0,o.jsx)("code",{className:(0,s.Z)(X.codeBlockLines,O&&X.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,o.jsx)(ie,{line:e,getLineProps:r,getTokenProps:c,classNames:y[t],showLineNumbers:O},t)))})})}),(0,o.jsxs)("div",{className:X.buttonGroup,children:[(h.isEnabled||h.isCodeScrollable)&&(0,o.jsx)(ve,{className:X.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),(0,o.jsx)(he,{className:X.codeButton,code:m})]})]})]})}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ke(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Se(e,t,n[t])}))}return e}const Ne=(De=function(e){var{children:t}=e,n=ke(e,["children"]);const r=(0,i.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof s?we:J;return(0,o.jsx)(a,Pe(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){xe(e,t,n[t])}))}return e}({},n),{children:s}),String(r))},function(e){return e.live?(0,o.jsx)(D,Ee({scope:Z},e)):(0,o.jsx)(De,Ee({},e))});var De;function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e){return(0,o.jsx)(Ne,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ce(e,t,n[t])}))}return e}({},e))}},19531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var r=n(24246),o=n(71670),c=n(97555),s=n(61132),i=n(52605),a=n(82064);const l={sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-google-tag-manager"},u="\ud83d\udce6 plugin-google-tag-manager",p={id:"api/plugins/plugin-google-tag-manager",title:"\ud83d\udce6 plugin-google-tag-manager",description:"A plugin for adding Google Tag Manager (gtm.js) to a Docusaurus site. Use this plugin in conjunction with the standard gtag plugin for in-depth analysis of how users are using your site.",source:"@site/docs/api/plugins/plugin-google-tag-manager.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-tag-manager",permalink:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-tag-manager.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1694767701,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/api/plugins/@docusaurus/plugin-google-tag-manager"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag"},next:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docs/api/plugins/@docusaurus/plugin-ideal-image"}},d={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-plugin-google-tag-manager",children:"\ud83d\udce6 plugin-google-tag-manager"}),"\n","\n","\n",(0,r.jsxs)(t.p,{children:["A plugin for adding ",(0,r.jsx)(t.a,{href:"https://developers.google.com/tag-platform/tag-manager",children:"Google Tag Manager (gtm.js)"})," to a Docusaurus site. Use this plugin in conjunction with the standard ",(0,r.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"gtag plugin"})," for in-depth analysis of how users are using your site."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"https://tagassistant.google.com/",children:"Google's Tag Assistant"})," tool to check if tag manager is set up correctly!"]})}),"\n",(0,r.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(c.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-tag-manager\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-tag-manager\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-tag-manager\n"})})})]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["If you use the preset ",(0,r.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsx)(t.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"containerId"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Required"})}),(0,r.jsxs)(t.td,{children:["Your Tag Manager container Id (usually starts with ",(0,r.jsx)(t.code,{children:"GTM-"}),")."]})]})})]})}),"\n",(0,r.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(a.Z,{pluginName:"@docusaurus/plugin-google-tag-manager",presetOptionName:"googleTagManager",code:"{\n  containerId: 'GTM-12345',\n}"})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);