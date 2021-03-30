(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),o=(a(0),a(221)),c={title:"Database Management",sidebar_label:"Database"},l={unversionedId:"howtos/create/database-management",id:"howtos/create/database-management",isDocsHomePage:!1,title:"Database Management",description:"Keywords :  create , edit, upload, modify, delete, index, note on indexing issue and red symbol",source:"@site/docs/howtos/create/database-management.md",slug:"/howtos/create/database-management",permalink:"/docs/howtos/create/database-management",version:"current",sidebar_label:"Database",sidebar:"howtos",previous:{title:"Cloud Function",permalink:"/docs/howtos/create/cloud-function"},next:{title:"API Management",permalink:"/docs/howtos/create/api-management"}},s=[{value:"How to access the Database on the Yellow Messenger platform?",id:"how-to-access-the-database-on-the-yellow-messenger-platform",children:[]},{value:"How to create a new database and make changes to it?",id:"how-to-create-a-new-database-and-make-changes-to-it",children:[]},{value:"How to do elastic search for database",id:"how-to-do-elastic-search-for-database",children:[]}],b={toc:s};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Keywords")," :  create , edit, upload, modify, delete, index, note on indexing issue and red symbol"),Object(o.b)("h3",{id:"how-to-access-the-database-on-the-yellow-messenger-platform"},"How to access the Database on the Yellow Messenger platform?"),Object(o.b)("p",null,"Headover to the ",Object(o.b)("inlineCode",{parentName:"p"},"Data")," tab from the left sidebar to access the database."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/OoM6M6mK2bAI1615891898315.png",alt:"how to access the database"}))),Object(o.b)("h3",{id:"how-to-create-a-new-database-and-make-changes-to-it"},"How to create a new database and make changes to it?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Adding a new table : You can add a new table by simply clicking on the \u2018create table\u2019 button. You can add fields here along with custom mapping of the fields if required. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/2fKv3p5foiAm1615891942921.png",alt:"how to add a new table 1"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/gG2nOWmdLsv81615892026783.png",alt:"how to add a new table 2"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Download the table and add/edit/remove any data from this table. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/geXLTc7saBDC1615892768708.png",alt:"Download the table"}))),Object(o.b)("p",null,"Edit the table as you want and save it in CSV format. Please make sure that the headers of the table are not changed. "),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Truncate the table in the database and upload the new updated table. Please make sure you don\u2019t Drop the table. Dropping the table will delete the table entirely. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/8sGWAKv3FORp1615892832779.png",alt:"Truncate table"}))),Object(o.b)("p",null,"Once changes are made, can upload the table in CSV format back on the same page using 'Upload' button. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/NGuXuTaP3lOE1615893169294.png",alt:"Upload CSV"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," : When willing to add single record without downloading and uploading, basically without making a fuss.",Object(o.b)("br",{parentName:"p"}),"\n","Click on \u2018Add Record\u2019 and you can add one record at a time."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/ISbs9PfBEf121615893406287.png",alt:"Add record"}))),Object(o.b)("h3",{id:"how-to-do-elastic-search-for-database"},"How to do elastic search for database"),Object(o.b)("h4",{id:"datastore"},"DataStore"),Object(o.b)("p",null,"The datastore is the local database that is available with each bot instance. It is stored inside MongoDB and is indexed with ElasticSearch."),Object(o.b)("p",null,"Each bot\u2019s table gets it\u2019s own index, by default. If needed, you can specify your own elasticsearch mapping to map the database as per your need."),Object(o.b)("h4",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"Each table in the bot gets its own space in MongoDB and gets indexed into elasticsearch."),Object(o.b)("p",null,"You can use the UI to create the table, but in order to query through your code, you will need to know how to write elasticsearch queries"),Object(o.b)("p",null,"A good place to start would be: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.7/getting-started.html"}),"Elastic Search Guide")),Object(o.b)("h4",{id:"datastore-ui"},"Datastore UI"),Object(o.b)("p",null,"The datastore in the UI can be accessed through Developer -> Database, herewith referred to as database section in this document"),Object(o.b)("p",null,"Datastore API\nThe datastore is available inside the app library and can be accessed with app.dataStore"),Object(o.b)("h4",{id:"datastore-methods"},"Datastore methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"search"),Object(o.b)("li",{parentName:"ul"},"insert"),Object(o.b)("li",{parentName:"ul"},"update"),Object(o.b)("li",{parentName:"ul"},"delete"),Object(o.b)("li",{parentName:"ul"},"find"),Object(o.b)("li",{parentName:"ul"},"aggregate"),Object(o.b)("li",{parentName:"ul"},"updateMany"),Object(o.b)("li",{parentName:"ul"},"get"),Object(o.b)("li",{parentName:"ul"},"getForm"),Object(o.b)("li",{parentName:"ul"},"search\nThe datastore search can be used to search for the record in the table")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.datastore.search({\n    table: tableName,\n    body: esQuery\n})\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"tableName"),": The table name that is present in the database section"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"esQuery"),": The elastic search query that is to be used to search for the records"),Object(o.b)("p",null,"This function is promisified and hence can be chained for success and reject cases. The chain would go into the reject block in-case of any errors. It is vital to handle this part."),Object(o.b)("h4",{id:"insert"},"insert"),Object(o.b)("p",null,"The datastore insert function can be used to add records to your table"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"app.datastore.insert({\n        table: tableName,\n        record: recordObject\n    })\n\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"tableName"),": The table name that is present in the database section"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"recordObject"),": The Object containing the key-value pairs of the record. The keys are the column names and the values are the values for the columns. The keys have to match the exact column name present in the table"))}i.isMDXComponent=!0},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),i=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(h,l(l({ref:t},b),{},{components:a})):r.a.createElement(h,l({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);