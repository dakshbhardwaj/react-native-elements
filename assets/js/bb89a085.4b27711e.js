"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7279],{3905:(t,e,A)=>{A.d(e,{Zo:()=>D,kt:()=>s});var n=A(67294);function r(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function o(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,n)}return A}function i(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?o(Object(A),!0).forEach((function(e){r(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function a(t,e){if(null==t)return{};var A,n,r=function(t,e){if(null==t)return{};var A,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)A=o[n],e.indexOf(A)>=0||(r[A]=t[A]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)A=o[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(r[A]=t[A])}return r}var l=n.createContext({}),C=function(t){var e=n.useContext(l),A=e;return t&&(A="function"==typeof t?t(e):i(i({},e),t)),A},D=function(t){var e=C(t.components);return n.createElement(l.Provider,{value:e},t.children)},B={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var A=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,D=a(t,["components","mdxType","originalType","parentName"]),c=C(A),s=r,d=c["".concat(l,".").concat(s)]||c[s]||B[s]||o;return A?n.createElement(d,i(i({ref:e},D),{},{components:A})):n.createElement(d,i({ref:e},D))}));function s(t,e){var A=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=A.length,i=new Array(o);i[0]=c;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var C=2;C<o;C++)i[C]=A[C];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}c.displayName="MDXCreateElement"},56356:(t,e,A)=>{A.r(e),A.d(e,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>C,toc:()=>D,default:()=>c});var n=A(87462),r=A(63366),o=(A(67294),A(3905)),i=["components"],a={},l=void 0,C={unversionedId:"main/usage/Button/snack/index",id:"version-4.0.0-beta.0/main/usage/Button/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Button/snack/index.md",sourceDirName:"main/usage/Button/snack",slug:"/main/usage/Button/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Button/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Button/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},D=[],B={toc:D};function c(t){var e=t.components,A=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},B,A,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Button","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20ButtonGroup%2C%20withTheme%2C%20Text%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20ButtonsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Buttons%3A%20React.FunctionComponent%3CButtonsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.contentView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBasic%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B'React%20Native%20Elements'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Basic%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Dark%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(39%2C%2039%2C%2039%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'white'%2C%20marginHorizontal%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Log%20in%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loadingProps%3D%7B%7B%20size%3A%20'small'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2023%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('aye')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Secondary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(127%2C%20220%2C%20103%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Warning%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(255%2C%20193%2C%207%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Danger%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20backgroundColor%3A%20'rgba(214%2C%2061%2C%2057%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'white'%2C%20marginHorizontal%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Request%20an%20agent%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'500'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(199%2C%2043%2C%2098%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2045%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ERounded%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22LOG%20IN%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'black'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22HOME%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'home'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(90%2C%20154%2C%20230%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22PROFILE%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'user'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(199%2C%2043%2C%2098%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7B%3CCustomTitle%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2018%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20linearGradientProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colors%3A%20%5B'%23FF9800'%2C%20'%23F44336'%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%3A%20%5B1%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%3A%20%5B0.2%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'arrow-right'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2015%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconContainerStyle%3D%7B%7B%20marginLeft%3A%2010%2C%20marginRight%3A%20-10%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELight%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22SIGN%20UP%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20disabled%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(92%2C%2099%2C216%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2045%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outline%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Raised%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20raised%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Clear%20Button%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22clear%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20color%3A%20'rgba(78%2C%20116%2C%20289%2C%201)'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Light%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(244%2C%20244%2C%20244%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20marginHorizontal%3A%2020%2C%20color%3A%20'black'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELoading%20Buttons%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22HOME%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22SIGN%20UP%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loadingProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%20'small'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'rgba(111%2C%20202%2C%20186%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'rgba(92%2C%2099%2C216%2C%201)'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'transparent'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20paddingVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20CustomTitle%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20flexDirection%3A%20'column'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20fontWeight%3A%20'bold'%2C%20fontSize%3A%2018%20%7D%7D%3EJohn%20Doe%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20fontStyle%3A%20'italic'%2C%20fontSize%3A%2012%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Minister%20of%20Magic%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20contentView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20buttonsContainer%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20flexWrap%3A%20'wrap'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20withTheme(Buttons%2C%20'')%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0}}]);