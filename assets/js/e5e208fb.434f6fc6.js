(self.webpackChunk=self.webpackChunk||[]).push([[76693],{94137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),o=n(13925),r=n(54236),i=n(40318),s=n(62290);const c=function(){var e=(0,i.Z)({componentName:"Switch",props:{color:{value:o.defaultTheme.colors.primary,type:s.n.String,description:"Color"},value:{value:!1,type:s.n.Boolean,description:"Value",stateful:!0},onValueChange:{value:"() => setValue(!value)",propHook:{what:"!value",into:"value"},type:s.n.Function,description:"Function called when switch state is changed."}},scope:{Switch:o.Switch},imports:{"@rneui/base":{named:["Switch"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:e}))}},37047:(e,t,n)=>{"use strict";n.d(t,{w:()=>c});var a=n(67294),o=n(35742),r=n(14330),i=n(98576),s=n(61720),c=function(){return a.createElement(o.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+s.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),o=n(67294),r=n(91262),i=n(18421),s=n(77356),c=n(41652),l=n(24309),p=n(16042),d=n(20346),m=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return o.createElement(r.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.X9.Provider,null,o.createElement(d.PK,{initialMetrics:m.o},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},o.createElement(i.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:s.Z}))),o.createElement(c.Z,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(l.Z,t.knobProps),o.createElement(c.Z,t.errorProps),o.createElement(p.E,t.actions)))}))}},68415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(37047),s=(n(9877),n(72360),["components"]),c={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Switch%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SwitchComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSwitchComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleSwitch%20%3D%20()%20%3D%3E%20%7B%0A%20%20setChecked(!checked)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%3CSwitch%0A%20%20%20%20%20%20value%3D%7Bchecked%7D%0A%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setChecked(value)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}l.isMDXComponent=!0;var p=n(94137),d=["components"],m={id:"switch",title:"Switch"},u=void 0,h={unversionedId:"components/switch",id:"version-4.0.0-rc.4/components/switch",title:"Switch",description:"Switch represents user's decision of a process and indicates whether a state is on/off.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/Switch.mdx",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/4.0.0-rc.4/components/switch",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/Switch.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"switch",title:"Switch"},sidebar:"docs",previous:{title:"SpeedDial.Action",permalink:"/docs/4.0.0-rc.4/components/speeddial_action"},next:{title:"Tab",permalink:"/docs/4.0.0-rc.4/components/tab"}},v={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],w={toc:k};function f(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"Switch represents user's decision of a process and indicates whether a state is on/off.\nSwitch is a controlled component that requires an ",(0,r.kt)("inlineCode",{parentName:"p"},"onValueChange")," to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," prop.\nThis renders a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," value. React native elements provide you with additional ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," support in the Switch Button.\nThis component inherits ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html"},"all native Switch props that come with a standard React Native Switch element"),"."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Switch } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Includes all ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"primary")),(0,r.kt)("td",{parentName:"tr",align:null},"The color of the Switch component."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(p.Z,{mdxType:"Play"}))}f.isMDXComponent=!0},61720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);