(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),i=a.n(s),r=(a(27),a(2)),l=(a(18),a(28),a(3)),o=a.p+"static/media/logo.cf4fb52e.png",j=a(0),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:"#",children:Object(j.jsx)("img",{src:o,alt:"logo",height:"100px",width:"120px"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsx)(l.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/learning",children:"Learning"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/signup",children:"Registration"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{className:"nav-link",to:"/logout",children:"Logout"})})]})})]})})},m=a(5),b=a.n(m),h=a(9),u=a(10),p=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),n(a.name),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"home-page",children:Object(j.jsx)("div",{className:"home-div d-flex flex-col justify-content-center ",children:Object(j.jsx)("h1",{children:Object(j.jsxs)("p",{className:"pt-5",children:["Welcome To Soham Learning ",a]})})})})})},x=function(){var e=Object(r.f)(),t=Object(c.useState)({}),a=Object(u.a)(t,2),n=a[0],s=a[1],i=function(){var t=Object(h.a)(b.a.mark((function t(){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/about",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:if(c=t.sent,console.log(c),s(c),200!==!a.status){t.next=12;break}throw new Error(a.error);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.push("/login");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container emp-profile",children:Object(j.jsxs)("form",{method:"GET",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("img",{src:"Soham Das"===n.name?"data:image/png;base64,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":"data:image/png;base64,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",alt:"dp"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"profile-head",children:[Object(j.jsx)("h5",{children:n.name}),Object(j.jsx)("h6",{children:n.work}),Object(j.jsxs)("p",{className:"profile-rating mt-3 mb-5",children:[" Ranking : ",Object(j.jsx)("b",{children:"55"})]}),Object(j.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link","aria-current":"page",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab",children:"Timeline"})})]})]})}),Object(j.jsx)("div",{className:"col-md-2",children:Object(j.jsx)("input",{type:"submit",className:"profile-edit-btn",name:"btnAddMore",value:"Edit info"})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"profile-work",children:[Object(j.jsx)("p",{children:"Work link"}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/soham-das-674035220/",target:"Soham",children:"LinkedIn"})]})}),Object(j.jsxs)("div",{className:"col-md-8 pl-5 about-info",children:[Object(j.jsx)("div",{className:"tab-content profile-tab",id:"myTabContent"}),Object(j.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("label",{children:"User ID"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("p",{children:"874548476548"})})]}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("label",{children:"Name"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("p",{children:n.name})})]}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("label",{children:"Email"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("p",{children:n.email})})]}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("label",{children:"Phone"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("p",{children:n.phone})})]}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("label",{children:"Proffesion"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("p",{children:n.work})})]})]})]})]})]})})})},g=a(13),O=a(11),f=function(){var e=Object(c.useState)({name:"",email:"",phone:"",message:""}),t=Object(u.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/getdata",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(c=e.sent,console.log(c),n(Object(O.a)(Object(O.a)({},a),{},{name:c.name,email:c.email,phone:c.phone})),200!==!t.status){e.next=12;break}throw new Error(t.error);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){s()}),[]);var i=function(e){var t=e.target.name,c=e.target.value;n(Object(O.a)(Object(O.a)({},a),{},Object(g.a)({},t,c)))},r=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s,i,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=a.name,s=a.email,i=a.phone,r=a.message,e.next=4,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:s,phone:i,message:r})});case 4:return l=e.sent,e.next=7,l.json();case 7:e.sent?(alert("message sent!"),n(Object(O.a)(Object(O.a)({},a),{},{message:""}))):console.log("message not sent!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"contact_info",children:Object(j.jsx)("div",{className:"container_fuid",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-10 offset-lg-1 d-flex justify-content-between",children:[Object(j.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center pt-5",children:[Object(j.jsx)("img",{src:"https://pic.onlinewebfonts.com/svg/img_503524.png",height:"36px",length:"36px",alt:"phone"}),Object(j.jsxs)("div",{className:"contact_info_content p-3",children:[Object(j.jsx)("div",{className:"contact_info_title",children:"Phone"}),Object(j.jsx)("div",{className:"contact_info_text",children:"+91 8745 654 541"})]})]}),Object(j.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center pt-5",children:[Object(j.jsx)("img",{src:"https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-email-1.png",height:"36px",length:"36px",alt:"phone"}),Object(j.jsxs)("div",{className:"contact_info_content p-3",children:[Object(j.jsx)("div",{className:"contact_info_title",children:"Email"}),Object(j.jsx)("div",{className:"contact_info_text",children:"example@gmail.com"})]})]}),Object(j.jsxs)("div",{className:"contact_info_item d-flex justify-content-start align-items-center pt-5",children:[Object(j.jsx)("img",{src:"https://pic.onlinewebfonts.com/svg/img_288659.png",height:"36px",length:"36px",alt:"phone"}),Object(j.jsxs)("div",{className:"contact_info_content p-3",children:[Object(j.jsx)("div",{className:"contact_info_title",children:"Address"}),Object(j.jsx)("div",{className:"contact_info_text",children:"Howrah,WB,India"})]})]})]})})})}),Object(j.jsx)("div",{className:"contact_form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-10 offset-lg-1",children:Object(j.jsxs)("div",{className:"contact_form_container py-5",children:[Object(j.jsx)("div",{className:"Contact_form_title",children:"Get in touch"}),Object(j.jsxs)("form",{method:"POST",id:"contact_form",children:[Object(j.jsxs)("div",{className:"contact_form_name d-flex justify-content-between align-items-between",children:[Object(j.jsx)("input",{type:"text",id:"contact_form_name",className:"contact_form_name input_field",name:"name",value:a.name,onChange:i,placeholder:"Your Name",required:"true"}),Object(j.jsx)("input",{type:"email",id:"contact_form_email",className:"contact_form_email input_field",name:"email",value:a.email,onChange:i,placeholder:"Your Email",required:"true"}),Object(j.jsx)("input",{type:"number",id:"contact_form_phone",className:"contact_form_phone input_field",name:"phone",value:a.phone,onChange:i,placeholder:"Your Phone number",required:"true"})]}),Object(j.jsxs)("div",{className:"contact_form_text pt-4",children:[Object(j.jsx)("textarea",{className:"text_field contact_form_message",name:"message",value:a.message,onChange:i,placeholder:"Type here",cols:"140",rows:"10"}),Object(j.jsx)("div",{className:"contact_form_button",children:Object(j.jsx)("button",{type:"submit",className:"button contact_submit_button",onClick:r,children:"Send Message"})})]})]})]})})})})})]})},A=function(){var e=Object(r.f)(),t=Object(c.useState)(""),a=Object(u.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),d=o[0],m=o[1],p=function(){var t=Object(h.a)(b.a.mark((function t(a){var c,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:d})});case 3:c=t.sent,s=c.json(),400!==c.status&&s?(window.alert("Login is successfull"),e.push("/")):window.alert("Invalid Credentials");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"signin",children:Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsxs)("div",{className:"signin-content",children:[Object(j.jsx)("div",{className:"signin-image",children:Object(j.jsx)(l.b,{to:"/signup",className:"signup-image-link",children:"Create an Account"})}),Object(j.jsxs)("div",{className:"signin form",children:[Object(j.jsx)("h2",{className:"form-title",children:"Sign in"}),Object(j.jsxs)("form",{method:"POST",className:"register-form",id:"register-form",children:[Object(j.jsxs)("div",{className:"form-group  pb-5",children:[Object(j.jsx)("label",{htmlFor:"email",children:Object(j.jsx)("i",{class:"zmdi zmdi-email"})}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",autoComplete:"off",value:n,onChange:function(e){return s(e.target.value)},placeholder:"Your email"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:["                        ",Object(j.jsx)("label",{htmlFor:"password",children:Object(j.jsx)("i",{class:"zmdi zmdi-lock"})}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",autoComplete:"off",value:d,onChange:function(e){return m(e.target.value)},placeholder:"Give a password"})]}),Object(j.jsx)("div",{className:"form-group form-button pb-5",children:Object(j.jsx)("input",{type:"submit",name:"signin",id:"signin",className:"form-submit",value:"Log in!",onClick:p})})]})]})]})})})})},v=function(){var e,t,a=Object(r.f)(),n=Object(c.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],d=function(a){console.log(a),e=a.target.name,t=a.target.value,o(Object(O.a)(Object(O.a)({},i),{},Object(g.a)({},e,t)))},m=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,n,s,r,l,o,j,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=i.name,n=i.email,s=i.phone,r=i.work,l=i.password,o=i.cpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:n,phone:s,work:r,password:l,cpassword:o})});case 4:return j=e.sent,e.next=7,j.json();case 7:422!==(d=e.sent).status&&d?(window.alert("Registration Successfull"),console.log("Registration Successfull"),a.push("/login")):(window.alert("Invalid registration"),console.log("Invalid registration"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"signup",children:Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsxs)("div",{className:"signup-content",children:[Object(j.jsxs)("div",{className:"signup form",children:[Object(j.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(j.jsxs)("form",{method:"POST",className:"register-form",id:"register-form",children:[Object(j.jsxs)("div",{className:"form-group pt-5 pb-5",children:[Object(j.jsx)("label",{htmlFor:"name",children:Object(j.jsx)("i",{class:"zmdi zmdi-account-add"})}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",autoComplete:"off",value:i.name,onChange:d,placeholder:"Your Name"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:[Object(j.jsx)("label",{htmlFor:"email",children:Object(j.jsx)("i",{class:"zmdi zmdi-email"})}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",autoComplete:"off",value:i.email,onChange:d,placeholder:"Your email"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:["                        ",Object(j.jsx)("label",{htmlFor:"phone",children:Object(j.jsx)("i",{class:"zmdi zmdi-phone"})}),Object(j.jsx)("input",{type:"text",name:"phone",id:"phone",autoComplete:"off",value:i.phone,onChange:d,placeholder:"Your phone number"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:["                        ",Object(j.jsx)("label",{htmlFor:"work",children:Object(j.jsx)("i",{class:"zmdi zmdi-slideshow"})}),Object(j.jsx)("input",{type:"text",name:"work",id:"work",autoComplete:"off",value:i.work,onChange:d,placeholder:"Your Profession"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:["                        ",Object(j.jsx)("label",{htmlFor:"password",children:Object(j.jsx)("i",{class:"zmdi zmdi-lock"})}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",autoComplete:"off",value:i.password,onChange:d,placeholder:"Give a password"})]}),Object(j.jsxs)("div",{className:"form-group  pb-5",children:["                        ",Object(j.jsx)("label",{htmlFor:"cpassword",children:Object(j.jsx)("i",{class:"zmdi zmdi-lock"})}),Object(j.jsx)("input",{type:"password",name:"cpassword",id:"cpassword",autoComplete:"off",value:i.cpassword,onChange:d,placeholder:"Confirm your password"})]}),Object(j.jsx)("div",{className:"form-group form-button pb-5",children:Object(j.jsx)("input",{type:"submit",name:"signup",id:"signup",className:"form-submit",value:"Sign Up!",onClick:m})})]})]}),Object(j.jsx)("div",{className:"signup-image",children:Object(j.jsx)(l.b,{to:"/login",className:"signup-image-link",children:"I have an Acount"})})]})})})})},N=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Welcome"}),Object(j.jsx)("h1",{children:"No courses enrolled"})]})},w=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"notfound",children:Object(j.jsx)("div",{className:"notfounf",children:Object(j.jsx)("div",{className:"notfound-404",children:Object(j.jsx)("h1",{children:"404, Sorry page not found!"})})})}),Object(j.jsx)(l.b,{to:"/",children:"Go back to Homepage"})]})},Q=function(){var e=Object(r.f)();return Object(c.useEffect)((function(){fetch("/logout",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(t){if(e.push("/login",{replace:!0}),200!==t.status)throw new Error(t.error)})).catch((function(e){console.log(e)}))})),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:"logout page"})})},E=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})}),Object(j.jsx)(r.a,{path:"/about",children:Object(j.jsx)(x,{})}),Object(j.jsx)(r.a,{path:"/contact",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/login",children:Object(j.jsx)(A,{})}),Object(j.jsx)(r.a,{path:"/signup",children:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{path:"/logout",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(r.a,{path:"/learning",children:Object(j.jsx)(N,{})}),Object(j.jsx)(r.a,{children:Object(j.jsx)(w,{})})]})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(E,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.e3e1771d.chunk.js.map