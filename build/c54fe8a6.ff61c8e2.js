(window.webpackJsonp=window.webpackJsonp||[]).push([[1169],{1241:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(1583)),i={id:"VStack",title:"VStack"},o={unversionedId:"VStack",id:"version-3.0.0-next.25/VStack",isDocsHomePage:!1,title:"VStack",description:"VStack aligns items vertically.",source:"@site/versioned_docs/version-3.0.0-next.25/VStack.md",slug:"/VStack",permalink:"/3.0.0-next.25/VStack",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.25/VStack.md",version:"3.0.0-next.25",sidebar:"version-3.0.0-next.25/componentsSidebar",previous:{title:"View",permalink:"/3.0.0-next.25/view"},next:{title:"Wrap",permalink:"/3.0.0-next.25/wrap"}},l=[{value:"Implements",id:"implements",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"VStack",id:"vstack",children:[]}]}],b={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"VStack aligns items vertically."),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Stack")," from nativebase")),Object(c.b)("h2",{id:"import"},"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { VStack } from 'native-base';\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("div",{className:"snack-player","data-snack-name":"VStack Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20VStack%2C%20Text%2C%20Divider%2C%20Heading%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0A%0Afunction%20VStackComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%0A%20%20%20%20%20%20divider%3D%7B%3CDivider%20borderColor%3D%22red.200%22%20%2F%3E%7D%0A%20%20%20%20%20%20space%3D%7B4%7D%0A%20%20%20%20%20%20width%3D%22100%25%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CHeading%3EVStack%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CText%3ETest%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3ETesting%20this%20text%20with%20Stacks%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3ETesting%20this%20text%20with%20Stacks%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3ETesting%20this%20text%20with%20Stacks%3C%2FText%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CVStackComponent%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("h3",{id:"vstack"},"VStack"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"divider"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSX.Element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The divider element to use between elements."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"space"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MarginProps"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The space between each stack item."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reversed"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The direction to stack the elements."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}s.isMDXComponent=!0},1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);