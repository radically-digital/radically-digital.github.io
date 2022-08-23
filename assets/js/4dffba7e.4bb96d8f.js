"use strict";(self.webpackChunkengineering_standards=self.webpackChunkengineering_standards||[]).push([[4454],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(7462),o=(t(7294),t(3905));const r={},a="Organize Utility Functions",s={unversionedId:"clientside/react/components/organize-utility-functions",id:"clientside/react/components/organize-utility-functions",title:"Organize Utility Functions",description:"- See Maintain a utility function directory",source:"@site/docs/clientside/react/components/organize-utility-functions.md",sourceDirName:"clientside/react/components",slug:"/clientside/react/components/organize-utility-functions",permalink:"/docs/clientside/react/components/organize-utility-functions",draft:!1,editUrl:"https://github.com/radically-digital/radically-digital.github.io/tree/main/docs/docs/clientside/react/components/organize-utility-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Number of Props",permalink:"/docs/clientside/react/components/number-of-props"},next:{title:"Pass Objects Instead of Primitives",permalink:"/docs/clientside/react/components/pass-objects-instead-of-primitives"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organize-utility-functions"},"Organize Utility Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"#maintain-a-utility-function-directory"},"Maintain a utility function directory"))),(0,o.kt)("p",null,"Utility functions that don\u2019t need to hold a closure over the components should be moved outside. The ideal place is before the component definition so the file can be readable from top to bottom."),(0,o.kt)("p",null,"That reduces the noise in the component and leaves inside only those that need to be there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \ud83d\udc4e Avoid nesting functions which don't need to hold a closure.\nfunction Component({ date }) {\n  function parseDate(rawDate) {\n    ...\n  }\n\n  return <div>Date is {parseDate(date)}</div>\n}\n\n// \ud83d\udc4d Place the utility functions before the component\nfunction parseDate(date) {\n  ...\n}\n\nfunction Component({ date }) {\n  return <div>Date is {parseDate(date)}</div>\n}\n")),(0,o.kt)("p",null,"You want to keep the least amount of utility functions inside the definition. Move as many as possible outside and pass the values from state as arguments."),(0,o.kt)("p",null,"Composing your logic out of pure functions that rely only on input makes it easier to track bugs and extend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// \ud83d\udc4e Utility functions shouldn\'t read from the component\'s state\nexport function Component() {\n  const [value, setValue] = useState("");\n\n  function isValid() {\n    // ...\n  }\n\n  return (\n    <>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        onBlur={validateInput}\n      />\n      <button\n        onClick={() => {\n          if (isValid) {\n            // ...\n          }\n        }}\n      >\n        Submit\n      </button>\n    </>\n  );\n}\n\n// \ud83d\udc4d Extract them and pass only the values they need\nfunction isValid(value) {\n  // ...\n}\n\nexport function Component() {\n  const [value, setValue] = useState("");\n\n  return (\n    <>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        onBlur={validateInput}\n      />\n      <button\n        onClick={() => {\n          if (isValid(value)) {\n            // ...\n          }\n        }}\n      >\n        Submit\n      </button>\n    </>\n  );\n}\n')))}p.isMDXComponent=!0}}]);