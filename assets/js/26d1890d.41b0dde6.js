"use strict";(self.webpackChunkextention_technologies_docs=self.webpackChunkextention_technologies_docs||[]).push([[9639],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:1},l="Environment Setup",s={unversionedId:"React Native Starters/Environment Setup",id:"React Native Starters/Environment Setup",isDocsHomePage:!1,title:"Environment Setup",description:"- Step 1:",source:"@site/docs/React Native Starters/Environment Setup.md",sourceDirName:"React Native Starters",slug:"/React Native Starters/Environment Setup",permalink:"/docs/React Native Starters/Environment Setup",editUrl:"https://github.com/extension-technologies/extension-technologies.github.io/docs/React Native Starters/Environment Setup.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ecom API Integrartion",permalink:"/docs/Courier Tracking/Ecom/ECOM_API"},next:{title:"React Patterns",permalink:"/docs/React Native Starters/React Patterns"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1:\nFirst Download and Install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2:\nAfter install node.js open your CMD and install expo cli."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and Paste in Command Prompt"',title:'"Copy',and:!0,Paste:!0,in:!0,Command:!0,'Prompt"':!0},"expo install expo-sqlite\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 3:\nNow , Create React Native Project in Visual Studio\nusing expo below cammand you can create new project."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and Paste in Terminal of Visual Studio"',title:'"Copy',and:!0,Paste:!0,in:!0,Terminal:!0,of:!0,Visual:!0,'Studio"':!0},"expo init my-new-project\n")),(0,o.kt)("p",{parentName:"li"},"   You will be asked to choose a template. Press Enter to choose Blank.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 4:\nRun Expo Project\nbelow command, change your current dir."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and Paste in Terminal of Visual Studio"',title:'"Copy',and:!0,Paste:!0,in:!0,Terminal:!0,of:!0,Visual:!0,'Studio"':!0},"cd my-new-project\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 5:\nRun your project, using expo start command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and Paste in Terminal of Visual Studio"',title:'"Copy',and:!0,Paste:!0,in:!0,Terminal:!0,of:!0,Visual:!0,'Studio"':!0},"npm start # you can also use: expo start\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 6:\nYou should see something like with a QR code generated in the terminal\nDownload Expo client from playStore for Android & AppStore for IOS"),(0,o.kt)("p",{parentName:"li"},"  Download Now",".","\n",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en"},"Android Expo"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/expo-client/id982107779"},"IOS Expo"),".   ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 7:\n",(0,o.kt)("strong",{parentName:"p"},"Final Step"),"-\nAs soon as the QR code got scanned, it\u2019ll automatically load and bundle/compile your project to run it in your device.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Alternate way:\nInstead of using Step 6 & 7 You can run in ",(0,o.kt)("strong",{parentName:"p"},"Your Physical Device")," by Turning on Usb tethering.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if You Want To ",(0,o.kt)("strong",{parentName:"p"},"Run In web")," then "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and Paste in Terminal of Visual Studio"',title:'"Copy',and:!0,Paste:!0,in:!0,Terminal:!0,of:!0,Visual:!0,'Studio"':!0},"   npm run web\n")))))}m.isMDXComponent=!0}}]);