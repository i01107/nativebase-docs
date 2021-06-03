(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1583:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},599:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(1583)),c={id:"snackBar",title:"SnackBar"},i={unversionedId:"snackBar",id:"version-3.0.0-next.24/snackBar",isDocsHomePage:!1,title:"SnackBar",description:"Snackbars inform users about a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn\u2019t interrupt the user experience and don\u2019t require user input to disappear.",source:"@site/versioned_docs/version-3.0.0-next.24/snackBar.md",slug:"/snackBar",permalink:"/3.0.0-next.24/snackBar",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.24/snackBar.md",version:"3.0.0-next.24",sidebar:"version-3.0.0-next.24/componentsSidebar",previous:{title:"Skeleton",permalink:"/3.0.0-next.24/skeleton"},next:{title:"Spinner",permalink:"/3.0.0-next.24/spinner"}},s=[{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Using Hook",id:"using-hook",children:[]},{value:"Props",id:"props",children:[{value:"Actionsheet",id:"actionsheet",children:[]}]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Snackbars inform users about a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn\u2019t interrupt the user experience and don\u2019t require user input to disappear."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Snackbar } from 'native-base';\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("div",{className:"snack-player","data-snack-name":"SnackBar Usage","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Snackbar%2C%20VStack%2C%20Alert%2C%20AlertIcon%2C%20Text%2C%20Box%2C%20NativeBaseProvider%20%7D%20from%20'native-base'%3B%0Afunction%20SnackbarExample%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3ESnackbar%20will%20stay%20for%2010%20secs%2C%20default%20is%205%20sec.%3C%2FText%3E%0A%20%20%20%20%20%20%3CSnackbar%0A%20%20%20%20%20%20%20%20autoHideDuration%3D%7B10000%7D%0A%20%20%20%20%20%20%20%20accessibilityAnnouncement%3D%22Sample%20warning%20message%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20mx%3D%7B4%7D%20space%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3E%C2%A0Hello%20World%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Icon%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Title%3EAccount%20created%3C%2FAlert.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAlert.Description%20mt%3D%7B2%7D%20ml%3D%7B12%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20industry.%20Lorem%20Ipsum%20has%20been%20the%20industry%E2%80%99s%20standard%20dummy%20text%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20ever%20since%20the%201500s.%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FAlert.Description%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAlert%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FSnackbar%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSnackbarExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"using-hook"},"Using Hook"),Object(o.b)("div",{className:"snack-player","data-snack-name":"SnackBar Hooks","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Alert%2C%0A%20%20AlertIcon%2C%0A%20%20AlertDescription%2C%0A%20%20useSnackbar%2C%0A%20%20VStack%2C%0A%20%20NativeBaseProvider%0A%7D%20from%20'native-base'%3B%0Afunction%20SnackbarExample%20()%20%7B%0A%20%20const%20%7B%20setSnackbar%20%7D%20%3D%20useSnackbar()%3B%0A%20%20const%20template%20%3D%20(%0A%20%20%20%20%3CAlert%20status%3D%22success%22%3E%0A%20%20%20%20%20%20%3CAlertIcon%20%2F%3E%0A%20%20%20%20%20%20%3CAlertDescription%3EWelldone%2C%20we%20are%20proud%20of%20you.%3C%2FAlertDescription%3E%0A%20%20%20%20%3C%2FAlert%3E%0A%20%20)%3B%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B3%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20setSnackbar(template%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityAnnouncement%3A%20'Well%20done%2C%20we%20are%20proud%20of%20you.'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20autoHideDuration%3A%201000%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Get%20Default%20Snackbar%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20setSnackbar(template%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20'top'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20accessibilityAnnouncement%3A%20'Well%20done%2C%20we%20are%20proud%20of%20you.'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Get%20Snackbar%20With%20Overlay%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%3B%0A%7D%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CSnackbarExample%20%2F%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.37,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"actionsheet"},"Actionsheet"),Object(o.b)("p",null,"Implement ",Object(o.b)("inlineCode",{parentName:"p"},"Slide"),", all props of ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Slide")," can be passed."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoHideDuration"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of milliseconds to wait before dismissing snackbar."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessibilityAnnouncement"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String to be announced by the screen reader."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}p.isMDXComponent=!0}}]);