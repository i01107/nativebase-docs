(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{577:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(741)),o={id:"wrap",title:"Wrap"},c={unversionedId:"wrap",id:"version-3.0.0-next.40/wrap",isDocsHomePage:!1,title:"Wrap",description:"Wrap is a layout component that adds a defined space between its children and 'wraps' its children automatically if there's not enough space to fit any child.",source:"@site/versioned_docs/version-3.0.0-next.40/wrap.md",slug:"/wrap",permalink:"/wrap",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/wrap.md",version:"3.0.0-next.40"},l=[{value:"<strong>Import</strong>",id:"import",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Spacing",id:"spacing",children:[]},{value:"Alignment and Justify",id:"alignment-and-justify",children:[]}]},{value:"Props",id:"props",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Wrap")," is a layout component that adds a defined space between its children and 'wraps' its children automatically if there's not enough space to fit any child."),Object(i.b)("h2",{id:"import"},Object(i.b)("strong",{parentName:"h2"},"Import")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Wrap } from 'native-base';\n")),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/flex"}),Object(i.b)("inlineCode",{parentName:"a"},"Flex")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("h3",{id:"basic"},"Basic"),Object(i.b)("p",null,"You can see that the Box gets wrapped to the next line."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Wrap Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Wrap%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20WrapComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CWrap%20direction%3D%22row%22%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20bg%3D%22lightBlue.400%22%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22violet.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22rose.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%204%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FWrap%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CWrapComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"spacing"},"Spacing"),Object(i.b)("p",null,"You can pass spacing prop to add consistent spacing between its child components."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Wrap Spacing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Wrap%2C%20Center%2C%20NativeBaseProvider%20%20%7D%20from%20'native-base'%3B%0Afunction%20WrapComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CWrap%20spacing%3D%7B10%7D%20direction%3D%22row%22%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20bg%3D%22lightBlue.400%22%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22violet.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22rose.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%204%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22red.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%205%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FWrap%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CWrapComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h3",{id:"alignment-and-justify"},"Alignment and Justify"),Object(i.b)("p",null,"You can pass shorthands for ",Object(i.b)("inlineCode",{parentName:"p"},"alignItems")," and ",Object(i.b)("inlineCode",{parentName:"p"},"justifyContent")," as ",Object(i.b)("inlineCode",{parentName:"p"},"align")," and ",Object(i.b)("inlineCode",{parentName:"p"},"justify")," respectively."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"align")," prop changes the alignment of the child along the main axis."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Wrap Align","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Wrap%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20WrapComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CWrap%20spacing%3D%7B10%7D%20align%3D%22center%22%20direction%3D%22row%22%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20bg%3D%22lightBlue.400%22%0A%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22violet.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B24%7D%20bg%3D%22rose.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%204%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22red.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%205%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FWrap%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CWrapComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"justify")," prop changes the alignment of the child along the cross axis."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Wrap Justify","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Wrap%2C%20Center%2C%20NativeBaseProvider%20%20%7D%20from%20'native-base'%3B%0Afunction%20WrapComponent%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CWrap%20spacing%3D%7B10%7D%20justify%3D%22center%22%20direction%3D%22row%22%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%201%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%0A%20%20%20%20%20%20%20%20bg%3D%22lightBlue.400%22%0A%20%20%20%20%20%20%20%20size%3D%7B16%7D%0A%20%20%20%20%20%20%20%20rounded%3D%22xl%22%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Box%202%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22violet.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%203%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22rose.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%204%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%20%20%3CCenter%20size%3D%7B16%7D%20bg%3D%22red.400%22%20rounded%3D%22xl%22%20_text%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Box%205%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FWrap%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20Example%20template%20which%20wraps%20component%20with%20NativeBaseProvider%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CWrapComponent%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"In addition to this, all the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"/flex"}),"Flex"))," Props can be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"Wrap"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spacing"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string, number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The divider element to use between elements."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"justify"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"justifyContent"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The justifyContent value (for cross axis alignment)."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"align"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"alignItems"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The alignItems value (for main axis alignment)."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"direction"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flexDirection"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The flexDirection value."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0},741:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,A=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return a?r.a.createElement(A,c(c({ref:t},s),{},{components:a})):r.a.createElement(A,c({ref:t},s))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);