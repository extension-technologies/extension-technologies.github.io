"use strict";(self.webpackChunkextention_technologies_docs=self.webpackChunkextention_technologies_docs||[]).push([[959],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3253:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={},p="Ecom API Integrartion",s={unversionedId:"Courier Tracking/Ecom/ECOM_API",id:"Courier Tracking/Ecom/ECOM_API",isDocsHomePage:!1,title:"Ecom API Integrartion",description:"Introduction",source:"@site/docs/Courier Tracking/Ecom/ECOM_API.md",sourceDirName:"Courier Tracking/Ecom",slug:"/Courier Tracking/Ecom/ECOM_API",permalink:"/docs/Courier Tracking/Ecom/ECOM_API",editUrl:"https://github.com/extension-technologies/extension-technologies.github.io/docs/Courier Tracking/Ecom/ECOM_API.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Official Documentation",permalink:"/docs/Courier Tracking/Bluedart/Official Documentation"},next:{title:"Environment Setup",permalink:"/docs/React Native Starters/Environment Setup"}},m=[{value:"Introduction",id:"introduction",children:[]},{value:"WorkFlow",id:"workflow",children:[]},{value:"APIs List",id:"apis-list",children:[]},{value:"PINCODE SERVICEABLE API",id:"pincode-serviceable-api",children:[]},{value:"FETCH WAYBILL API",id:"fetch-waybill-api",children:[]},{value:"FORWARD MANIFEST API",id:"forward-manifest-api",children:[]},{value:"SHIPMENT CANCELLATION API",id:"shipment-cancellation-api",children:[]},{value:"NDR DATA API (Re-Attempt or Cancel)",id:"ndr-data-api-re-attempt-or-cancel",children:[]},{value:"SHIPMENT TRACKING API (Pull API)",id:"shipment-tracking-api-pull-api",children:[]},{value:"SHIPMENT STATUS API (PUSH)",id:"shipment-status-api-push",children:[]}],d={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ecom-api-integrartion"},"Ecom API Integrartion"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In order to automate the shipping process, API integration is required. Ecom provides APIs to cover\nevery business process involved in the whole life cycle of a shipment starting from manifestation\nuntil its closure. In order to use these APIs, customers should have API credentials and production\nserver IPS to be whitelisted in Ecom systems. For setting this up, customers are requested to get in\ntouch with Ecom IT team. "),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("p",null,"It Mainly involves 3 Steps that are-"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preparation")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fetching unused AWBs"),(0,i.kt)("li",{parentName:"ol"},"Pin code serviceability Check")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manifestation")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shipment creation"),(0,i.kt)("li",{parentName:"ol"},"Shipment Cancellation"),(0,i.kt)("li",{parentName:"ol"},"NDR Data Push")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracking")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Status updates(Push API)"),(0,i.kt)("li",{parentName:"ol"},"Realtime Updates(Pull API)")),(0,i.kt)("h2",{id:"apis-list"},"APIs List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pincode Serviceability API:\nPincode API allows Ecom Customers to retrieve list of pin codes that Ecom Express is servicing. "),(0,i.kt)("li",{parentName:"ul"},"Forward API:\nThe document provide insight on all the APIs available for Forward shipment integration with Ecom Express."),(0,i.kt)("li",{parentName:"ul"},"Reverse API:\nThe document provides insight on all the APIs available for Reverse shipment integration with Ecom Express."),(0,i.kt)("li",{parentName:"ul"},"Reverse - QC:\nThe document provides insight on all the APIs available for Reverse - QC shipment integration with Ecom Express"),(0,i.kt)("li",{parentName:"ul"},"EDS (Ecom Digital Services):\nThe document provides insight on all the APIs available for Reverse shipment integration with Ecom Express")),(0,i.kt)("h2",{id:"pincode-serviceable-api"},"PINCODE SERVICEABLE API"),(0,i.kt)("p",null,"   Pin code API allows Ecom Customers to retrieve list of pin codes that Ecom Express is currently servicing. In\nthe output Ecom\u2019s Route code is also there that need to be consumed by Ecom customers and to be printed on\nshipping label."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Fetch Pin code API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://api.ecomexpress.in/apiv2/pincodes/"},"https://api.ecomexpress.in/apiv2/pincodes/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request and Response Details\nRequest Parameter:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")))),(0,i.kt)("p",null,"Response format:\n| Field  |      Description|\n|----------|:-------------:|\n| Pincode |  6-digit Pin code   |\n| Dccode|  3 Letter Ecom Branch code   |",(0,i.kt)("br",{parentName:"p"}),"\n","| City|  Name of the city pin code is mapped to|\n| State |  Name of the state pin code is mapped to  |  "),(0,i.kt)("h2",{id:"fetch-waybill-api"},"FETCH WAYBILL API"),(0,i.kt)("p",null,"Fetch waybills API allows Ecom Customers to retrieve Pre-Allocated Waybills Tracking Id Series for\nmanifestation. Airwaybills series can be fetched for different Products (PPD/COD/REV)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Fetch Waybills API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://api.ecomexpress.in/apiv2/fetch_awb/"},"https://api.ecomexpress.in/apiv2/fetch_awb/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"PPD (For Prepaid Waybill Numbers) COD (For COD Waybill Numbers) REV (For Reverse Pickup Waybill Numbers)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"count"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enter the number of AWB to be fetched from the API in one go")))),(0,i.kt)("h2",{id:"forward-manifest-api"},"FORWARD MANIFEST API"),(0,i.kt)("p",null,"Forward shipment manifest API allows Ecom Customers to upload order details in Ecom system for\npickup and delivery. With this API, there is no need to register pickup separately. Pickup is automatically\nscheduled with Ecom Ops team. Using this API, multiple shipments can be manifested in one go. It is\nrecommended to keep order count in each API call limited to 05.\nAWB tracking numbers needs to be pre-fetched using fetch AWB API, Pre-allocated unused AWB number\nis a Mandatory field in this API. Customers can manifest Multi-Seller shipments as well i.e. single package\ncontaining multiple items from different sellers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Forward Shipment Manifest API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://api.ecomexpress.in/apiv2/manifest_awb/"},"https://api.ecomexpress.in/apiv2/manifest_awb/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"json_input"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the actual shipment information in JSON format. Multiple")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shipments can be passed through this JSON"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"shipment-cancellation-api"},"SHIPMENT CANCELLATION API"),(0,i.kt)("p",null,"Shipment cancellation API allows cancellation of already manifested shipments. If the shipment is not out for\ndelivery, Ecom system puts a lock to the shipment and no delivery attempts made after this. Wherever it is\nthere in Ecom network, reverse journey starts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Shipment Cancellation API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://api.ecomexpress.in/apiv2/cancel_awb/"},"https://api.ecomexpress.in/apiv2/cancel_awb/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"awbs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enter the waybill number for shipment cancellation")))),(0,i.kt)("h2",{id:"ndr-data-api-re-attempt-or-cancel"},"NDR DATA API (Re-Attempt or Cancel)"),(0,i.kt)("p",null,"This API will take NDR instructions which can be either RAD i.e. Re-Attempt and deliver OR RTO i.e. Cancellation.\nThe payload for this is fixed as per Ecom specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"NDR Data Pushing API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://api.ecomexpress.in/apiv2/ndr_resolutions/"},"https://api.ecomexpress.in/apiv2/ndr_resolutions/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"json_input"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the actual shipment information in JSON format. Multiple shipments can be passed through this JSON")))),(0,i.kt)("h2",{id:"shipment-tracking-api-pull-api"},"SHIPMENT TRACKING API (Pull API)"),(0,i.kt)("p",null,"Tracking API allows customers to fetch shipment status. Options are available to fetch only the header\ndetails with status or with all the scans. Multiple shipments can be tracked via AWB number or Order\nreference number in one go (maximum 25 awb no. in a request)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Details")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Head"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Shipment Tracking API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:"center"},"POST")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Format"),(0,i.kt)("td",{parentName:"tr",align:"center"},"JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://plapi.ecomexpress.in/track_me/api/mawbd/"},"https://plapi.ecomexpress.in/track_me/api/mawbd/"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:"center"},"This is the API username to access the APIs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Password corresponding to the username")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"awb"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enter the number of AWB to be Track (comma separated for multiple Airwaybill number e.g. 102019265,80005448)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Order"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Enter the number of order number to be Track (comma separated for multiple order number e.g. 671189, DW-23133)")))),(0,i.kt)("h2",{id:"shipment-status-api-push"},"SHIPMENT STATUS API (PUSH)"),(0,i.kt)("p",null,"Push API is used to push status changes for shipments as and when any update happens in Ecom system. This\nis achieved by pushing individual scans to web services developed and maintained by customers. To consume\nthe status information, Customers must develop and maintain web service.\nThis API validation is based upon the username/password or Key."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"API Details\nWill be provided by Client to Ecom Express.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Required Information from customer\nHTTPS Method: POST\nAuthentication Type: Protocol Basic Auth\nURL: Provided by Customer i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://Customerportal.com"},"https://Customerportal.com"),"\nUsername: Provided by Customer.\nPassword: Provided by Customer."))))}c.isMDXComponent=!0}}]);