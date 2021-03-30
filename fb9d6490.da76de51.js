(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(221)),i={title:"Razorpay",sidebar_label:"Razorpay"},s={unversionedId:"documentation/appConfiguration/razorpay",id:"documentation/appConfiguration/razorpay",isDocsHomePage:!1,title:"Razorpay",description:"In this document, we will learn about how to integrate the razor payment gateway into a YM ChatBot.",source:"@site/docs/documentation/appConfiguration/razorpay.md",slug:"/documentation/appConfiguration/razorpay",permalink:"/docs/documentation/appConfiguration/razorpay",version:"current",sidebar_label:"Razorpay",sidebar:"documentation",previous:{title:"Power BI",permalink:"/docs/documentation/appConfiguration/power-bi"},next:{title:"Salesforce",permalink:"/docs/documentation/appConfiguration/salesforce"}},p=[],c={toc:p};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this document, we will learn about how to integrate the razor payment gateway into a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"%22https://yellowmessenger.com/"}),"YM")," ChatBot."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 1:")," Go to Razor Payment Website and create an Account ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://razorpay.com/"}),"https://razorpay.com/"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 2:")," Login to your account and Go to the Dashboard of RazorPay."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 3:")," By Default, you will be in Test Mode but make sure you are in it. We would be using ",Object(r.b)("strong",{parentName:"p"},"Test Mode")," as of now."),Object(r.b)("p",null,"NOTE: There are 2 modes in Razor Payment Gateway:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Test Mode:")," This mode is for testing and for developers who are just getting started in Razor Payment Integration. Test Mode is completely Free of Charge. No real charges will be made, even if we give our valid card details in the Razor Payment Gateway Page.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Live Mode:")," As the name suggests, In the Live Mode, we would be charged for real. In order to work on Live Mode, we have to give our bank account and KYC Details."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/IXlfsjfKEZHH1615286695115.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 4:")," In the Dashboard, Go to ",Object(r.b)("strong",{parentName:"p"},"Settings")," and click on ",Object(r.b)("strong",{parentName:"p"},"API Keys")," Tab. Generate a New Key. Click on the ",Object(r.b)("strong",{parentName:"p"},"Download Key Details")," and save the key details in a safe location. Click Ok."),Object(r.b)("p",null,"NOTE:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Only")," when you generate a new API key for the ",Object(r.b)("strong",{parentName:"p"},"first time"),", you can see the ",Object(r.b)("strong",{parentName:"p"},"Key Secret")," value. So make sure to save the key details in a safe accessible place."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/Semips2HoRUp1615286775032.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 5:")," For the API request of Razorpay Payment, we have to use ",Object(r.b)("strong",{parentName:"p"},"Basic Auth Authorization"),"."),Object(r.b)("p",null,"To get the Basic Auth Authorization value, we are gonna use the ",Object(r.b)("strong",{parentName:"p"},"POSTMAN"),"(v8.0.6) application.  "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open POSTMAN application, click on ",Object(r.b)("strong",{parentName:"p"},"New -> Collection")," and create a collection with a name.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on ",Object(r.b)("strong",{parentName:"p"},"New -> Request"),". Give a Request Name and save it to the collection which we created above.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on ",Object(r.b)("strong",{parentName:"p"},"Authorization")," Tab, click ",Object(r.b)("strong",{parentName:"p"},"Type")," and select ",Object(r.b)("strong",{parentName:"p"},"Basic Auth"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the downloaded file which contains your API keys.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Give ",Object(r.b)("strong",{parentName:"p"},"Key Id in Username")," Textbox and ",Object(r.b)("strong",{parentName:"p"},"Key Secret in Password")," Textbox."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/sbNOf0vjThpt1615286847630.png",alt:null}))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After giving the values in the username and password textboxes, go to ",Object(r.b)("strong",{parentName:"p"},"Headers")," tab.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If No Headers key value pairs are visible, Click on the hidden eye option and you would see all the key value pairs in the Headers.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on the ",Object(r.b)("strong",{parentName:"p"},"value of the Authorization")," key and Copy it."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/of0Z2sYaWqig1615286959513.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 6:")," Now let's go to the Developer Section of our ChatBot in the YM Platform. "),Object(r.b)("p",null,"NOTE:"),Object(r.b)("p",null,"The Recommended Step to Integrate a Payment Gateway is after the Step in which we get the cart details of the products which users want to buy from us. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"-> After the Successful Payment, we can store the cart details in our DataBase.\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 7:")," Let\u2019s create a New Function for the Razor Payment Gateway Integration API Code."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 8:")," We are going to use a POST request an API call to the Razor Payment Gateway with the required Details as below :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'    let dt = new Date();\n    let max = 10000, min = 100;\n \n    let totalPrice = 500;\n    let botId = app.bot;\n    //gives the ID of your bot\n \n    let config = {\n       method: \'POST\',\n       url: \'https://api.razorpay.com/v1/invoices\',\n       headers = {\n           \'Authorization\': \'Basic cnpwX3Rlc3RfNE4zeGZtTUTJcUkyQk46d3ZKQ3VodkFDa3VFaFlITjFkRnM2R09Q\',\n           \'Content-Type\': \'application/json\'\n       },\n       data: {\n        "customer": { //optional ; we can sent these details of user in this customer object\n            "name":\u201dXYZ\u201d,\n            "email":\u201dxyz@xyz.com\u201d,\n            "contact": 9678954326\n        },\n        "type": "link", //MANDATORY\n        "view_less": 1, //optional\n        "amount": totalPrice, //MANDATORY ; amount value should be in the smallest unit of the given currency value ; For INR, it should be \u2018paise\u2019\n        "currency": "INR",//MANDATORY\n        "description": "YM Restaurant Orders Payment",//MANDATORY\n        "receipt": "Receipt No : " + Math.floor(Math.random() * (max - min + 1) + min), //optional; IF PASSED, IT MUST BE UNIQUE FOR EACH TRANSACTION ; to display receipt string in the payment gateway\n        "sms_notify": 1, //optional ; 0 - No, 1- Yes ; If you want to send the Payment link via SMS\n        "email_notify": 1, //optional ;  0 - No, 1- Yes; If you want to send the Payment Link via EMAIL\n        "expire_by": Math.round(dt.getTime() / 1000), //optional; link expiry time ; IF PASSED, EXPIRY TIME MUST BE ATLEAST 16 MINUTES AWAY FROM THE CURRENT TIME !\n        "notes": { //MANDATORY ; SENDER,SOURCE AND BOT KEY ARE MANDATORY ! From these 3 keys, we are able to identify whom and from which bot is making the razor payment ! If we want to send any additional information, we use this notes object\n            "sender": app.sender,\n            "source": app.source,\n            "bot": botId\n            // "bot": "x5189765732960"\n        }\n       }\n    };\n\n    let response = await app.axios(config);\n    \n    //app.log(response.data, "THIS IS POST AXIOS data !");\n    //app.log(response.status,"THIS IS POST AXIOS STATUS !");\n    //app.log(response.statusText, "THIS IS POST AXIOS statusText !");\n    \n    if (response.data.short_url) {\n       //app.log(response.data.short_url, "THIS IS response.data.short_url !");\n       await app.sendTextMessage("PAYMENT LINK: ");\n       await app.sendTextMessage(response.data.short_url);\n       return resolve();\n    }\n    \n    return resolve({\n       success: false,\n       question: "THERE ARE SOME TECHNICAL ISSUES ! KINDLY TRY AFTER SOME TIME !"\n    });\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"BRIEF EXPLANATION:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We are creating an object with ",Object(r.b)("strong",{parentName:"li"},"method type"),", ",Object(r.b)("strong",{parentName:"li"},"url"),", ",Object(r.b)("strong",{parentName:"li"},"headers")," and ",Object(r.b)("strong",{parentName:"li"},"data"),". "),Object(r.b)("li",{parentName:"ol"},"Then, We are creating the required key value pairs (i.e) ",Object(r.b)("strong",{parentName:"li"},"Authorization Value")," and Content-Type for the ",Object(r.b)("strong",{parentName:"li"},"headers")," object."),Object(r.b)("li",{parentName:"ol"},"Then, We are passing the required data in the key value pair format to the data object."),Object(r.b)("li",{parentName:"ol"},"Then, We are passing that object which contains all the above information to the ",Object(r.b)("strong",{parentName:"li"},"app.axios()")," method and we are storing this result in a variable. ")),Object(r.b)("p",null,"NOTE:"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"To know about axios, go through this link : ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/"}),"Axios Blog")),Object(r.b)("li",{parentName:"ul"},"Our YM Platform ",Object(r.b)("strong",{parentName:"li"},"does not support")," Shorthand methods for Axios HTTP requests such as axios.get(), axios.post() etc."))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Once the above API Call is Successful, we would get some objects in the result variable."),Object(r.b)("li",{parentName:"ol"},"If we want to see or access the data in the result variable, we have to use ",Object(r.b)("strong",{parentName:"li"},".data")," along with the result variable."),Object(r.b)("li",{parentName:"ol"},"The payment link will be in the key called ",Object(r.b)("strong",{parentName:"li"},"short_url"),". So, To Access it, we use ",Object(r.b)("strong",{parentName:"li"},".data.short_url")," along with the result variable."),Object(r.b)("li",{parentName:"ol"},"We access it and show it to the user using app.sendTextMessage()."),Object(r.b)("li",{parentName:"ol"},"Now, The User has to click on this short_url. This will take them to the Razor Payment Gateway Page where they can complete the Payment via Debit/Credit Cards,\nNet Banking, UPI etc.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 9:")," We have to configure a Webhook so that upon Successful completion of the Payment, we can save the User\u2019s Order Details in our DataBase and show some response to the user such as ",Object(r.b)("inlineCode",{parentName:"p"},"YOUR ORDER HAS BEEN PLACED SUCCESSFULLY !"),"."),Object(r.b)("p",null,"NOTE:"),Object(r.b)("p",null,"To learn about Webhooks and the difference between them and API, I suggest you go through these medium articles:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@ishmeet1995/lets-talk-about-webhooks-part-1-theory-9fc66bd3413d"}),"Let\u2019s talk about Webhooks"),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/hackernoon/webhook-vs-api-whats-the-difference-8d41e6661652"}),"Webhook vs API: What\u2019s the Difference?")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 10:")," We have to configure the Webhook in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://razorpay.com/"}),"Razor Payment")," Gateway Dashboard. So, Go to Razor Payment and Sign in using your login credentials. Go to the Dashboard page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 11:")," Click on the Settings option and click on the Webhooks tab. Click on the Add New Webhook button."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 12:")," In the Webhook URL, give the following URL:\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/razorpay"}),"https://app.yellowmessenger.com/integrations/razorpay")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 13:")," For more or added security, you can use a Secret but this is Optional. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 14:")," In the Alert Email, You can give your email address."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 15:")," In the Active Events, Click on the ",Object(r.b)("strong",{parentName:"p"},"Invoice Events checkbox")," so that all the sub events in it get clicked. "),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/xYrfHt0Aw9Ck1615287138117.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 16:")," Click on ",Object(r.b)("strong",{parentName:"p"},"Create Webhook")," Button. Once this is Successful, For All the types of Payment Events which were mentioned in the Webhook, an event would get Triggered in our YM Chatbot. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"STEP 17:")," When the Invoice Paid Event gets triggered by the webhook defined in the razor pay dashboard, we want to capture it and then display an appropriate message to the user. To do this, we use the following code in the ",Object(r.b)("strong",{parentName:"p"},"main")," function on the developer section of our chatbot : "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'    if(app.data && app.data.event){\n        //app.log(app.data,"THIS IS APP.DATA INSIDE MAIN FUNCTION !");\n        if (app.data.event.code == \'razorpay-payment\' && app.data.event.data && app.data.event.data.status == "paid" && ((app.data.event.data.amount_paid / 100) > 0)) {\n           await app.sendTextMessage("\ud83e\udd73 PAYMENT SUCCESSFULL !");\n           //app.log("\ud83e\udd73 PAYMENT SUCCESSFULL !");\n        }\n    }\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"BRIEF EXPLANATION:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When the payment is successfully completed, the webhook we created in the razor pay dashboard gets triggered and it sends back the event code ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"razorpay-payment"))," to our chatbot.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"So, If an event code of ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"razorpay-payment"))," occurs with the event\u2019s data\u2019s status as ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"paid"))," and if the amount paid is greater than 0 INR (since we are using the smallest unit of the given currency i.e ",Object(r.b)("strong",{parentName:"p"},"Paise")," for the amount value, we are dividing it with 100 for converting back to INR ), we are sending a Text Message to the user such as \u2018Payment is Successful\u2019."))),Object(r.b)("p",null,"NOTE:"),Object(r.b)("p",null,"As Mentioned above in the first NOTE, inside this function, we can store the user\u2019s cart details to the DataBase as the Payment is Successfully made."))}l.isMDXComponent=!0},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(a),m=n,h=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return a?o.a.createElement(h,s(s({ref:t},c),{},{components:a})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);