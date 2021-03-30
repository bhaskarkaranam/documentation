(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(221)),i={id:"document_cognition",title:"Document Cognition",description:"Answering queries from Documents.",featured:!0,rank:4},c={unversionedId:"cookbooks/document_cognition",id:"cookbooks/document_cognition",isDocsHomePage:!1,title:"Document Cognition",description:"Answering queries from Documents.",source:"@site/docs/cookbooks/document_cognition.md",slug:"/cookbooks/document_cognition",permalink:"/docs/cookbooks/document_cognition",version:"current",sidebar:"cookbooks",previous:{title:"Understanding Data Base Actions",permalink:"/docs/cookbooks/data-layer"},next:{title:'Getting Started with "Hello World!"',permalink:"/docs/cookbooks/getting_started"}},s=[{value:"When to use document cognition?",id:"when-to-use-document-cognition",children:[]},{value:"When to not use document cognition?",id:"when-to-not-use-document-cognition",children:[]},{value:"Supported Formats",id:"supported-formats",children:[]},{value:"Usage",id:"usage",children:[]},{value:"How does document cognition work?",id:"how-does-document-cognition-work",children:[{value:"Frequently asked questions",id:"frequently-asked-questions",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"when-to-use-document-cognition"},"When to use document cognition?"),Object(r.b)("p",null,"Document Cognition is a way to process unstructured textual data. When you have a lot of documents (20 or more) containing mostly (~70%) text, it is humanly not possible to convert this data into a structured format so that you can feed it to a chatbot. In such cases, we can still leverage this knowledge by feeding it to the NLP model, so that the model can directly search for the most relevant responses from within these documents. In such cases, we can expect the model to take us to the right page/paragraph with ~75-85% accuracy (depending on the type and size of documents)."),Object(r.b)("h2",{id:"when-to-not-use-document-cognition"},"When to not use document cognition?"),Object(r.b)("p",null,"Please note that document cognition is not a replacement for intent classification (journeys). Since it takes unstructured data as input, accuracy will always be lower than the intent classification model, and wherever possible, it is recommended to prefer intent classification (journeys) over document cognition."),Object(r.b)("p",null,"Following are some examples when intent classification is the right tool to use as opposed to document cognition -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Most of the data is already in a structured format (tabular data, excel files, etc.) - the right way to handle this is by uploading to the bot database.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We already have data in a FAQ-like structure instead of a lot of paragraphs - the right way to handle this is by creating intents.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"No. of documents are fewer and can be converted into structured data.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Documents are not clean and have a lot of images, scanned pages, complex charts, tables, and diagrams, etc."))),Object(r.b)("h2",{id:"supported-formats"},"Supported Formats"),Object(r.b)("p",null,"Currently, we support PDF, PPT, and .Docx formats. We do not support web scraping and HTML. However, you can export webpages as PDFs and feed them to the engine."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"We have recently launched a new version of document cognition which supports -"),Object(r.b)("p",null,"Option to perform a semantic-based search (the bot will look at the sentence structure and keywords, look at the sentence, and try to map it to the most relevant sections in the documents). It's recommended to use a keyword search if the total no. of words in the input query is>3."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"app.searchDocumentsNew({text:'query'}).then((resp)=> {\n    //Your logic goes here\n });\n")),Object(r.b)("p",null,"Automatic creation of questions and answers with the ability to add them to journeys -"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/HBXDGNGi4W2V1613543255114.png",alt:null}))),Object(r.b)("p",null,"Option to perform an only keyword search (the bot will simply do an ES match query in all the documents for that keyword). It's recommended to use keyword search if the total no. of words in input query is <=3."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"app.searchDocumentsNew(\n            {\n                text: app.data.message,\n                keyWordQuery: true\n            })\n")),Object(r.b)("p",null,"Option to search for files based on metadata tags. Think of it as a Google Drive search where you can search for all files with a specific name. Note that this does not search inside documents -"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"app.searchDocumentsNew(\n            {\n                text: fileName,\n                metadataQuery: true\n            })\n")),Object(r.b)("p",null,"Option to filter documents by metadata tags. Imagine if you have HR policies for U.S. and India based employees and for a U.S. based employees, you want to search in only specific documents, you can use this function to filter only U.S. based documents through a tag. A tag is just a key: value pair. Each document can have multiple tags which can be configured through the UI below."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/UuGk0fa581zw1613543990485.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'app.searchDocumentsNew(\n            {\n                text: app.data.message,\n                keyWordQuery: searchType,\n                resultsPerDocument: 5,\n                filterByMetadata: { "country": "India" }\n            })\n')),Object(r.b)("h2",{id:"how-does-document-cognition-work"},"How does document cognition work?"),Object(r.b)("p",null,"Document Cognition Model parses the entire document, tokenizes into headings and paragraphs, and maps each paragraph to a page number. It skips tables, images, and scanned pages wherever it finds them. It then indexes the textual data into our proprietary model, where it tries to predict the kind of questions that someone might ask by looking at a specific document. It primarily relies on -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"TF-IDF score")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Keyword frequency")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"entence structure"))),Object(r.b)("p",null,"When a new query is made, the model searches through the embeddings created during the above indexing process and suggests the most relevant paragraphs along with a score for each for ranking purposes."),Object(r.b)("h3",{id:"frequently-asked-questions"},"Frequently asked questions"),Object(r.b)("h4",{id:"what-does-a-good-document-format-look-like"},"What does a good document format look like?"),Object(r.b)("p",null,"The following are some of the characteristics of a document that\u2019ll be processed well during document cognition. It's recommended following these guidelines while pre-processing your document -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"It does not have scanned pages and images.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"80% of the content is textual and well-formatted (e.g. Wikipedia articles)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Always prefer the Word (.doc, .docx) version of the document if available, as some properties might get lost when converting it into PDF.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document."))),Object(r.b)("h4",{id:"why-am-i-not-getting-the-right-result-in-the-first-suggestion"},"Why am I not getting the right result in the first suggestion?"),Object(r.b)("p",null,"Because document cognition is a probabilistic model that is \u201cpredicting\u201d the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant result."),Object(r.b)("h4",{id:"why-am-i-getting-the-other-documents-in-suggestions-which-actually-dont-have-the-answer"},"Why am I getting the other documents in suggestions which actually don't have the answer?"),Object(r.b)("p",null,"Same answer as above. The model has no way of \u201cknowing\u201d which document is correct, it can, however, assign a score to all the results based on its assessment of the documents."),Object(r.b)("h4",{id:"why-am-i-getting-multiple-occurrences-of-the-same-document-in-the-results"},"Why am I getting multiple occurrences of the same document in the results?"),Object(r.b)("p",null,"Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control by passing the value of ",Object(r.b)("inlineCode",{parentName:"p"},"results_per_document")," in your search query."),Object(r.b)("h4",{id:"can-the-model-convert-tabular-data-into-faqs"},"Can the model convert tabular data into FAQs?"),Object(r.b)("p",null,"No, Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document. These tables can be uploaded/recreated in our bot database, where we can write business logic on top of them."),Object(r.b)("h4",{id:"why-am-i-not-able-to-access-a-document-link-from-a-conversation-i-had-yesterday"},"Why am I not able to access a document link, from a conversation I had yesterday?"),Object(r.b)("p",null,"Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per client request. You can generate a new link by asking the same query again in the bot."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/RL35X3mCozP81613544469236.png",alt:null}))),Object(r.b)("h4",{id:"how-do-i-ensure-that-the-bot-shows-only-relevant-documents"},"How do I ensure that the bot shows only relevant documents?"),Object(r.b)("p",null,"There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);