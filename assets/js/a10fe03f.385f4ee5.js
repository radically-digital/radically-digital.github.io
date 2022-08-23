"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[9417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="AHA (Avoid Hasty Abstractions)",c={unversionedId:"clientside/react/components/aha-avoid-hasty-abstractions",id:"clientside/react/components/aha-avoid-hasty-abstractions",title:"AHA (Avoid Hasty Abstractions)",description:"duplication is far cheaper than the wrong abstraction",source:"@site/docs/clientside/react/components/aha-avoid-hasty-abstractions.md",sourceDirName:"clientside/react/components",slug:"/clientside/react/components/aha-avoid-hasty-abstractions",permalink:"/docs/clientside/react/components/aha-avoid-hasty-abstractions",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/components/aha-avoid-hasty-abstractions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stateless & Stateful",permalink:"/docs/clientside/react/component-mental-models/stateless-stateful"},next:{title:"Avoid Nested Render Functions",permalink:"/docs/clientside/react/components/avoid-nested-render-functions"}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aha-avoid-hasty-abstractions"},"AHA (Avoid Hasty Abstractions)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"duplication is far cheaper than the wrong abstraction")),(0,a.kt)("p",null,"Summed up by ",(0,a.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/aha-programming"},"Kent Dodds' - AHA Programming \ud83d\udca1")," and ",(0,a.kt)("a",{parentName:"p",href:"https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction"},"Sandy Metz's - The Wrong Abstraction")," articles, don't create any abstractions until you've seen the code implemented a few times."))}p.isMDXComponent=!0}}]);