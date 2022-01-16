"use strict";(self.webpackChunkextention_technologies_docs=self.webpackChunkextention_technologies_docs||[]).push([[6335],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},750:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},l=void 0,s={unversionedId:"tech-stack/mariadb/clusters",id:"tech-stack/mariadb/clusters",isDocsHomePage:!1,title:"clusters",description:"1. Install and setup mariadb",source:"@site/docs/tech-stack/mariadb/clusters.md",sourceDirName:"tech-stack/mariadb",slug:"/tech-stack/mariadb/clusters",permalink:"/docs/tech-stack/mariadb/clusters",editUrl:"https://github.com/extension-technologies/extension-technologies.github.io/docs/tech-stack/mariadb/clusters.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K6 scripts",permalink:"/docs/tech-stack/k6-scripts/README"},next:{title:"externalDB",permalink:"/docs/tech-stack/mariadb/externalDB"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install and setup mariadb")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"check for rsync installation\nsystemctl stop mariadb")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then paste the following in mysql my.cnf "))),(0,a.kt)("p",null,"binlog_format=ROW\ndefault-storage-engine=innodb\ninnodb_autoinc_lock_mode=2"),(0,a.kt)("h1",{id:"galera-provider-configuration"},"Galera Provider Configuration"),(0,a.kt)("p",null,"wsrep_on=ON\nwsrep_provider=/usr/lib/galera/libgalera_smm.so"),(0,a.kt)("h1",{id:"galera-cluster-configuration"},"Galera Cluster Configuration"),(0,a.kt)("p",null,'wsrep_cluster_name="deepak-testing"\nwsrep_cluster_address="gcomm://10.122.0.17,10.122.0.23,10.122.0.24"'),(0,a.kt)("h1",{id:"galera-synchronization-configuration"},"Galera Synchronization Configuration"),(0,a.kt)("p",null,"wsrep_sst_method=rsync"),(0,a.kt)("h1",{id:"galera-node-configuration"},"Galera Node Configuration"),(0,a.kt)("p",null,'wsrep_node_address="10.122.0.24"\nwsrep_node_name="db-3"'),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"bring up the first node")),(0,a.kt)("p",null,"sudo galera_new_cluster"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"check on each one by one turning them on using ssytemctl or service")),(0,a.kt)("p",null,"mysql -u root -p -e \"SHOW STATUS LIKE 'wsrep_cluster_size'\""))}d.isMDXComponent=!0}}]);