"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[9036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="Prefer Hooks to HOCs and Render Props",i={unversionedId:"clientside/react/state-management/prefer-hooks-to-hocs-and-render-props",id:"clientside/react/state-management/prefer-hooks-to-hocs-and-render-props",title:"Prefer Hooks to HOCs and Render Props",description:"In some cases we need to enhance a component or give it access to external state. In general there are three ways to do this - higher order components (HOCs), render props and hooks.",source:"@site/docs/clientside/react/state-management/prefer-hooks-to-hocs-and-render-props.md",sourceDirName:"clientside/react/state-management",slug:"/clientside/react/state-management/prefer-hooks-to-hocs-and-render-props",permalink:"/docs/clientside/react/state-management/prefer-hooks-to-hocs-and-render-props",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/state-management/prefer-hooks-to-hocs-and-render-props.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Watch The Bundle Size",permalink:"/docs/clientside/react/performance/watch-the-bundle-size"},next:{title:"State Management Libraries",permalink:"/docs/clientside/react/state-management/state-management-libraries"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prefer-hooks-to-hocs-and-render-props"},"Prefer Hooks to HOCs and Render Props"),(0,o.kt)("p",null,"In some cases we need to enhance a component or give it access to external state. In general there are three ways to do this - higher order components (HOCs), render props and hooks."),(0,o.kt)("p",null,"Hooks have proven to be the most efficient way to achieve such composition. From a philosophical standpoint, a component is a function that ",(0,o.kt)("strong",{parentName:"p"},"uses")," other functions. Hooks allow you to tap into multiple sources of external functionality without them conflicting with each other. No matter the number of hooks, you know where each value comes from."),(0,o.kt)("p",null,"With HOCs you get values as props. This makes it unclear wether they come from the parent component or the wrapping one. Also, chaining multiple props together is known to cause errors."),(0,o.kt)("p",null,"Render props lead to high indentation and bad readability. Nesting multiple components with render props in the same tree makes the markup look even worse. Also it only exposes the values in the markup itself so you have to write the logic there or pass it down."),(0,o.kt)("p",null,"With hooks you work with simple values, which are easy to track and don\u2019t interfere with the JSX."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \ud83d\udc4e Avoid using render props\nfunction Component() {\n  return (\n    <>\n      <Header />\n      <Form>\n        {({ values, setValue }) => (\n          <input\n            value={values.name}\n            onChange={e => setValue('name', e.target.value)}\n          />\n          <input\n            value={values.password}\n            onChange={e => setValue('password', e.target.value)}\n          />\n        )}\n      </Form>\n      <Footer />\n    </>\n  )\n}\n\n// \ud83d\udc4d Favor hooks for their simplicity and readability\nfunction Component() {\n  const [values, setValue] = useForm()\n\n  return (\n    <>\n      <Header />\n      <input\n        value={values.name}\n        onChange={e => setValue('name', e.target.value)}\n      />\n      <input\n        value={values.password}\n        onChange={e => setValue('password', e.target.value)}\n      />\n\n      <Footer />\n    </>\n  )\n}\n")))}u.isMDXComponent=!0}}]);