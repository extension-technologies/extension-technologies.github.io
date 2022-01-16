"use strict";(self.webpackChunkextention_technologies_docs=self.webpackChunkextention_technologies_docs||[]).push([[2288],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=u(n),m=o,d=k["".concat(i,".").concat(m)]||k[m]||s[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={},i=void 0,u={unversionedId:"tech-stack/docker/Docker manual frappe",id:"tech-stack/docker/Docker manual frappe",isDocsHomePage:!1,title:"Docker manual frappe",description:"How to install & use docker in ubuntu",source:"@site/docs/tech-stack/docker/Docker manual frappe.md",sourceDirName:"tech-stack/docker",slug:"/tech-stack/docker/Docker manual frappe",permalink:"/docs/tech-stack/docker/Docker manual frappe",editUrl:"https://github.com/extension-technologies/extension-technologies.github.io/docs/tech-stack/docker/Docker manual frappe.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"output",permalink:"/docs/tech-stack/bash/output"},next:{title:"docker",permalink:"/docs/tech-stack/docker/docker"}},p=[],s={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to install & use docker in ubuntu"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"COMMAND TO INSTALL DOCKER ")),(0,a.kt)("p",null,"apt-get install docker.io -y"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"COMMAND TO CHECK STATUS OF RUNNING CONTAINERS")),(0,a.kt)("p",null,"docker ps"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"COMMAND TO CHECK STATUS OF ALL RUNNING AND STOP CONTIANERS")),(0,a.kt)("p",null,"docker ps -a"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"COMMAND TO CREATE NEW CONTAINER")),(0,a.kt)("p",null,'docker run -it -d -p xx:xx --name container-name image-name --memory="1g"'),(0,a.kt)("p",null,"-p = this annotation use for port\nxx:xx - port\nxx = before dot represent host-port\nxx = after dot represent container-port\ncontainer-name = name of the container\nimage-name = name of image from you want to build container"),(0,a.kt)("p",null,"EXAMPLES TO CREATE CONTAINERS"),(0,a.kt)("p",null,"4.1. How to create ubuntu container"),(0,a.kt)("p",null,"docker run -it -d --name ubuntu_container ubuntu - this will create conatiner of latest ubuntu image"),(0,a.kt)("p",null,"docker run -it -d --name ubuntu-container ubuntu:18.04 - this will create ubuntu 18.04 container "),(0,a.kt)("p",null,"4.2 How to create erpnext container"),(0,a.kt)("p",null,"docker run -it -d --name erpcont deep77/erp:latest "),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"How to pull image from docker-hub")),(0,a.kt)("p",null,"docker pull image-name"),(0,a.kt)("p",null,"for eg - docker pull ubuntu\ndocker pull extensiontech/frappe"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"How to check docker images")),(0,a.kt)("p",null,"docker images"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"How to go inside the container")),(0,a.kt)("p",null,"docker exec -it container-name/id /bin/bash"),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"How to start stopped container")),(0,a.kt)("p",null,"docker start conatiner-name/id"),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"How to stop running container ")),(0,a.kt)("p",null,"docker stop container-name/id"),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"How to delete running container forcefully ( for deleting container you have to stop container first but you can delete forcefully by this coomand)")),(0,a.kt)("p",null,"docker rm -f container-name/id"),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"How to delete stop ")),(0,a.kt)("p",null,"docker rm container-name/id"),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"How to delete image")),(0,a.kt)("p",null,"docker rmi image-name"),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"if image is in use and you want to delete ")),(0,a.kt)("p",null,"docker rmi -f image-name"))}k.isMDXComponent=!0}}]);