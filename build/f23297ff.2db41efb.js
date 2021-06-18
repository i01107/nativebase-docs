(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{698:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),o=(a(0),a(741)),l=a(753),i={id:"formControl",title:"Form Control"},d={unversionedId:"formControl",id:"formControl",isDocsHomePage:!1,title:"Form Control",description:"FormControl provides context such as isInvalid, isDisabled, and isRequired to form elements.",source:"@site/docs/formControl.md",slug:"/formControl",permalink:"/next/formControl",editUrl:"https://github.com/nativebase/website/tree/main/docs/formControl.md",version:"current",sidebar:"componentsSidebar",previous:{title:"CheckBox",permalink:"/next/checkBox"},next:{title:"IconButton",permalink:"/next/iconButton"}},c=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Custom Style",id:"custom-style",children:[]}]},{value:"Props",id:"props",children:[{value:"FormControl",id:"formcontrol",children:[]},{value:"FormControl.Label",id:"formcontrollabel",children:[]},{value:"FormControl.ErrorMessage",id:"formcontrolerrormessage",children:[]},{value:"FormControl.HelperText",id:"formcontrolhelpertext",children:[]}]},{value:"Styling",id:"styling",children:[]}],s={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FormControl")," provides context such as ",Object(o.b)("inlineCode",{parentName:"p"},"isInvalid"),", ",Object(o.b)("inlineCode",{parentName:"p"},"isDisabled"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"isRequired")," to form elements."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20Stack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%3CStack%20mx%3D%7B4%7D%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EFavorite%20framework%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20p%3D%7B2%7D%20placeholder%3D%22Is%20it%20react%3F%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FStack%3E%0A%20%20%20%20%3C%2FFormControl%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h3",{id:"custom-style"},"Custom Style"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20FormControl%2C%0A%20%20Input%2C%0A%20%20Stack%2C%0A%20%20Text%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CStack%20width%3D%2290%25%22%20space%3D%7B4%7D%20px%3D%7B4%7D%3E%0A%20%20%20%20%20%20%3CText%20bold%20underline%3E%0A%20%20%20%20%20%20%20%20Default%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%3EFavorite%20framework%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%20%20%3CText%20bold%20underline%3E%0A%20%20%20%20%20%20%20%20Custom%20style%20for%20disable%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%20isDisabled%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%0A%20%20%20%20%20%20%20%20%20%20_disabled%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22gray.400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Favorite%20framework%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%0A%20%20%20%20%20%20%20%20%20%20_disabled%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20borderLeftWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20mt%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20px%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20pl%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20%22gray.400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%20%20%3CText%20bold%20underline%3E%0A%20%20%20%20%20%20%20%20Custom%20style%20for%20invalid%3A%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFormControl%20isRequired%20isInvalid%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.Label%0A%20%20%20%20%20%20%20%20%20%20_invalid%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22rose.500%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Favorite%20framework%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.Label%3E%0A%20%20%20%20%20%20%20%20%3CInput%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.HelperText%0A%20%20%20%20%20%20%20%20%20%20_invalid%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22red.400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20underline%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20We'll%20keep%20this%20between%20us.%0A%20%20%20%20%20%20%20%20%3C%2FFormControl.HelperText%3E%0A%20%20%20%20%20%20%20%20%3CFormControl.ErrorMessage%3ESomething%20is%20wrong.%3C%2FFormControl.ErrorMessage%3E%0A%20%20%20%20%20%20%3C%2FFormControl%3E%0A%20%20%20%20%3C%2FStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"formcontrol"},"FormControl"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        nativeID\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If provided, this prop is passed to its children.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isInvalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, this prop is passed to its children.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isRequired\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, this prop is passed to its children.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isDisabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, this prop is passed to its children.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        isReadOnly\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        If true, this prop is passed to its children.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"FormControl implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h3",{id:"formcontrollabel"},"FormControl.Label"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on disabled state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _invalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on invalid state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        htmlFor\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Reflects the value of the 'for' content property.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"FormControlLabel implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"formControl#formcontrol"}),"FormControl"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h3",{id:"formcontrolerrormessage"},"FormControl.ErrorMessage"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on disabled state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"FormControlErrorMessage implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"formControl#formcontrol"}),"FormControl"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h3",{id:"formcontrolhelpertext"},"FormControl.HelperText"),Object(o.b)("undefined",null,Object(o.b)("table",null,"\n  ",Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(o.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _disabled\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on disabled state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(o.b)("tr",{parentName:"tbody"},"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        _invalid\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"box#props"}),"IBoxProps"),"\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        Passed props will be applied on invalid state.\n      "),"\n      ",Object(o.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(o.b)("p",null,"FormControlHelperText implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"formControl#formcontrol"}),"FormControl"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(o.b)("h2",{id:"styling"},"Styling"),Object(o.b)(l.c,{name:"formControl",fileName:"form-control",mdxType:"ComponentTheme"}))}m.isMDXComponent=!0},753:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"h",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"f",(function(){return u})),a.d(t,"i",(function(){return x})),a.d(t,"g",(function(){return v})),a.d(t,"e",(function(){return E})),a.d(t,"j",(function(){return g})),a.d(t,"c",(function(){return O}));var n=a(0),r=a.n(n);var o=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map((a,n)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),r.a.createElement("div",null,t[a])))))));const l={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var i=({})=>r.a.createElement("div",null,Object.keys(l).map((e,t)=>r.a.createElement(o,{variants:l[e],name:e,key:`space-block-${e}-${t}`})));var d=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"600px",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const c={xxs:10,xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":60,"7xl":72,"8xl":96,"9xl":128};var s=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(c).map((e,t)=>r.a.createElement(d,{name:e,value:c[e],key:`space-component-${e}-${t}`})));var m=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const b={px:"1px",.5:"2px",1:"4px",1.5:"6px",2:"8px",2.5:"10px",3:"12px",3.5:"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var p=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(b).map((e,t)=>r.a.createElement(m,{name:e,value:b[e],key:`space-component-${e}-${t}`}))));var f=()=>r.a.createElement("div",{className:"label android"},"Android");function u(){return r.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},r.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},r.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),r.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var h=a(756);function x({title:e,description:t,className:a="",url:n,imgSrc:o,imgStyle:l,titleClassName:i="text-white",descriptionClassName:d="text-gray-100"}){return r.a.createElement(h.a,{to:n,className:"relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 "+a},r.a.createElement("div",{className:"font-bold text-md mb-2 "+i},e),r.a.createElement("p",{className:" text-sm leading-5 "+d},t),r.a.createElement("div",{className:"absolute h-20 w-20",style:l||{right:-20,top:-10}},o&&r.a.createElement("img",{src:o})))}var C=a(749);function v(){const{isDarkTheme:e}=Object(C.a)(),t=e?"":"text-white",a=e?"border-blueGray-100":"border-blueGray-200",n=e?"bg-blueGray-600":"bg-blueGray-500",o=e?"bg-cyan-700":"bg-cyan-500";return r.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+a},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"w-5 h-5 rounded-full "+o,style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+o,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v3"),r.a.createElement("span",null,"We wanted to make NativeBase the go-to component library for anyone building with React Native. This version is accessible, highly customisable and consistent across android, iOS & web. That's not all though, read on for the full benefits of using v3."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v2"),r.a.createElement("span",null,"The second version was released with new components, preset themes, unified icons & more. The main focus of v2 was to make components easy to theme with very few modifications. From v2.4.1 onwards, NativeBase also included support for the web."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"NativeBase v1"),r.a.createElement("span",null,"NativeBase started out as an open source framework that enabled developers to build high-quality mobile apps using React Native. The first version included UITabBar on iOS and Drawer on Android. NativeBase v1 was very well-received by the dev community."))))}function E(){const{isDarkTheme:e}=Object(C.a)(),t=e?"bg-blueGray-700":"bg-gray-600";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row -m-2"},r.a.createElement(x,{title:"Install in Expo project",url:"install-expo",description:"Follow this guide to install NativeBase in your existing or new Expo project",className:"mt-2 "+t,imgSrc:"/img/expo.svg",imgStyle:{top:50,right:-310,width:400,height:400,opacity:.1}}),r.a.createElement(x,{title:"Install in React Native CLI project",url:"install-rn",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/react-native.svg",imgStyle:{bottom:-50,right:-40,height:140,width:140,opacity:.1}})),r.a.createElement("div",{className:"mt-2 -m-2 row"},r.a.createElement(x,{title:"Install in NextJS project",url:"install-next",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/next.svg",imgStyle:{bottom:-180,right:-90,height:260,width:260,opacity:.1}}),r.a.createElement(x,{title:"Install in Create React App project",url:"install-cra",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/cra.svg",imgStyle:{bottom:-62,right:-45,height:165,width:165,opacity:.1}})))}var N=a(752);function g(){return n.createElement(N.NativeBaseProvider,null,n.createElement(N.Box,{bg:"primary.600",py:4,px:3,rounded:"md",alignSelf:"center",width:375,maxWidth:"100%"},n.createElement(N.HStack,{justifyContent:"space-between"},n.createElement(N.Box,{justifyContent:"space-between"},n.createElement(N.VStack,{space:2},n.createElement(N.Text,{fontSize:"sm",color:"white"},"Today @ 9PM"),n.createElement(N.Text,{color:"white",fontSize:"lg"},"Let's talk about avatar!")),n.createElement(N.Pressable,{rounded:"sm",bg:"primary.500",alignSelf:"flex-start",py:2,px:3},n.createElement(N.Text,{textTransform:"uppercase",fontSize:"sm",fontWeight:"bold",color:"white"},"Remind me"))),n.createElement(N.Image,{source:{uri:"https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg"},alt:"Aang flying and surrounded by clouds",height:100,rounded:"full",width:100}))))}var y=a(763),j=a(754);const A=j.REPO_LINK+"/tree/"+j.REPO_BRANCH;function O({name:e,componentName:t,fileName:a}){var n;return a=null!==(n=a)&&void 0!==n?n:e,r.a.createElement(N.VStack,{space:4,style:{"--ifm-link-hover-decoration":"none"}},r.a.createElement(N.Box,{rounded:"md"},r.a.createElement(N.Text,null,"NativeBase ships with a default theme for each component."," ",r.a.createElement(N.Link,{_text:{textDecorationLine:"none"},href:A+"/src/theme/components/"+a+".ts",isExternal:!0},r.a.createElement(N.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300"},"Checkout the default theme of ",e)))),r.a.createElement(N.Heading,{size:"sm"},"We can easily extend the ",e," component theme using extendTheme function as shown below."),r.a.createElement(y.a,{className:"language-jsx"},(e=>`\nimport { extendTheme, NativeBaseProvider } from "native-base";\n\nconst theme = extendTheme({\n    components: {\n        ${e}: {\n            baseStyle: {},\n            defaultProps: {},\n            variants: {},\n            sizes: {},\n        }\n    } \n});\n\nfunction MyApp() {\n    return (\n        <NativeBaseProvider theme={theme}>\n            {/* Rest of the app goes here */}\n        </NativeBaseProvider>\n    )\n}\n`)(null!=t?t:e[0].toUpperCase()+e.slice(1,e.length))),r.a.createElement(N.Link,{_text:{textDecorationLine:"none"},href:"customizingComponents"},r.a.createElement(N.Text,{borderBottomWidth:"2px",_hover:{bg:"secondary.200",color:"black",borderColor:"gray.900"},borderStyle:"dashed",rounded:"md",p:1,borderColor:"secondary.300",fontWeight:"bold"},"Read more about extending component theme here.")))}},754:function(e,t){e.exports={REPO_LINK:"https://github.com/GeekyAnts/NativeBase",REPO_BRANCH:"v3-pre-beta"}},759:function(e,t){}}]);