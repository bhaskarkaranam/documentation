(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{221:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(221)),c={title:"Facebook Workplace",sidebar_label:"Facebook Workplace"},i={unversionedId:"documentation/channelConfiguration/fb-workplace",id:"documentation/channelConfiguration/fb-workplace",isDocsHomePage:!1,title:"Facebook Workplace",description:"On Workplace, bots are represented as pages. A page is automatically created when you create a custom integration app. Only System Administrators of a Workplace community can create apps and generate access tokens in that community.",source:"@site/docs/documentation/channelConfiguration/fb-workplace.md",slug:"/documentation/channelConfiguration/fb-workplace",permalink:"/docs/documentation/channelConfiguration/fb-workplace",version:"current",sidebar_label:"Facebook Workplace",sidebar:"documentation",previous:{title:"Generic Webhook",permalink:"/docs/documentation/channelConfiguration/generic-webhook"},next:{title:"Telegram",permalink:"/docs/documentation/channelConfiguration/telegram"}},l=[{value:"Overall Workflow",id:"overall-workflow",children:[]},{value:"Creating Custom Integrations",id:"creating-custom-integrations",children:[]},{value:"General List of permissions required",id:"general-list-of-permissions-required",children:[]},{value:"Configuring workplace as a channel in the Portal",id:"configuring-workplace-as-a-channel-in-the-portal",children:[{value:"Documentations References",id:"documentations-references",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On Workplace, bots are represented as pages. A page is automatically created when you create a custom integration app. Only System Administrators of a Workplace community can create apps and generate access tokens in that community."),Object(r.b)("h2",{id:"overall-workflow"},"Overall Workflow"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Each YM Bot is considered as a custom integration for the workplace (page). "),Object(r.b)("li",{parentName:"ol"},"The workplace custom integration interacts with the YM Bot through webhooks which can be configured from within the workplace settings."),Object(r.b)("li",{parentName:"ol"},"The YM Bot consumes workplace APIs to send messages across. ")),Object(r.b)("h2",{id:"creating-custom-integrations"},"Creating Custom Integrations"),Object(r.b)("p",null,"You will be needing a Super Administrator role.\nTo create an app for Workplace, follow the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the Admin Panel, open the Integrations tab."),Object(r.b)("li",{parentName:"ol"},"Click on the Create Custom Integration button.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/SfBlkFwlUjXn1612757417910.png",alt:null}))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Choose a relevant name and description for the app."),Object(r.b)("li",{parentName:"ol"},"Add a profile picture for the app. This will be used any time the app is visually represented, for instance if it makes a post to a group."),Object(r.b)("li",{parentName:"ol"},"Choose the required permissions for the app, based on the integration functionality you require."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Create Access Token")," once you are landed to the Integration details page")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/3JEzEJQmYnte1612757515594.png",alt:null}))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Copy and safely store the access token that is shown to you. You will need this when making API calls and configuring in the YM Portal.")),Object(r.b)("h2",{id:"general-list-of-permissions-required"},"General List of permissions required"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Message any member")," - ",Object(r.b)("em",{parentName:"p"},"This permission is used to send a message to any member in the workplace team."),"\n",Object(r.b)("strong",{parentName:"p"},"Real all messages")," - ",Object(r.b)("em",{parentName:"p"},"See messages sent to anyone in the workplace team.")),Object(r.b)("h2",{id:"configuring-workplace-as-a-channel-in-the-portal"},"Configuring workplace as a channel in the Portal"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the portal, go to Configuration and then select Channels."),Object(r.b)("li",{parentName:"ol"},"Now select Facebook workplace form the list of channels, there paste the App ID from the workplace integration page, and the access token which was generated earlier, and click on connect.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/W14rzpSfqCPY1612757606237.png",alt:null}))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Now, post successful connection, copy the Webhook configuration, both callback URL and the verify token and paste under the \u201cPage\u201d tab of the \u201cConfigure Webhooks\u201d section in the workplace integrations page. ")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/v014KVvMnf9h1612757653829.png",alt:null}))),Object(r.b)("p",null,"Making sure that all the checkboxes are selected under the Page tab, click on save.\nNow the created workplace integration is successfully configured with the YM Bot as a channel, and all the messages can be exchanged between."),Object(r.b)("h3",{id:"documentations-references"},"Documentations References"),Object(r.b)("p",null,"Permission Reference : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/workplace/reference/permissions"}),"Permission Documents"),"\nFor official documentation : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/workplace/integrations/custom-integrations/bots/"}),"read more")))}p.isMDXComponent=!0}}]);