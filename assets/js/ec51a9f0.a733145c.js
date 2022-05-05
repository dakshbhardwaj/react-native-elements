(self.webpackChunk=self.webpackChunk||[]).push([[84399],{54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),r=n(67294),o=n(91262),l=n(18421),i=n(77356),m=n(41652),p=n(24309),d=n(16042),s=n(20346),c=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return r.createElement(o.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(s.X9.Provider,null,r.createElement(s.PK,{initialMetrics:c.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(l.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(m.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(p.Z,e.knobProps),r.createElement(m.Z,e.errorProps),r.createElement(d.E,e.actions)))}))}},27967:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var a=n(87462),r=n(63366),o=n(67294),l=n(3905),i=(n(9877),n(72360),n(19617)),m=n(54236),p=n(40318),d=n(62290);const s=function(){var t=(0,p.Z)({componentName:"BottomSheet",props:{children:{type:d.n.ReactNode,value:"<Text>Some Content</Text>"},isVisible:{type:d.n.Boolean,value:!1},modalProps:{type:d.n.Object,value:'{ presentationStyle: "fullScreen" , visible:true}',description:"Modal Props -> https://reactnative.dev/docs/modal"},containerStyle:{value:"{}",type:d.n.Object}},scope:{BottomSheet:i.BottomSheet,Text:i.Text},imports:{"@rneui/base":{named:["BottomSheet","Text"]}}});return o.createElement(o.Fragment,null,o.createElement(m.Z,{params:t}))};var c=["components"],u={id:"bottomsheet",title:"BottomSheet"},k=void 0,h={unversionedId:"components/bottomsheet",id:"components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/docs/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/next/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/BottomSheet.mdx",tags:[],version:"current",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/next/components/badge"},next:{title:"Button",permalink:"/docs/next/components/button"}},N={},g=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:g};function v(t){var e=t.components,n=(0,r.Z)(t,c);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { BottomSheet } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"backdropStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isVisible")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"modalProps")),(0,l.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,l.kt)("inlineCode",{parentName:"td"},"Modal"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,l.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}")),(0,l.kt)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(s,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);