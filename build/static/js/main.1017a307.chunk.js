(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(15),a(2)),s=(a(16),a(17),function(){return r.a.createElement("div",{style:{width:"100%",padding:"2%",backgroundColor:"red",color:"white",textAlign:"center"}},r.a.createElement("h1",null,"React With NodeJS"))}),m=function(e){var t=e.users;if(console.log("users length:::",t.length),0===t.length)return null;var a=t.map((function(e,t){return function(e,t){return r.a.createElement("tr",{key:t,className:t%2===0?"odd":"even"},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email))}(e,t)}));return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Users"),r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User Id"),r.a.createElement("th",null,"Firstname"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,a)))},i=function(e){var t=e.numberOfUsers,a=e.getAllUsers;return r.a.createElement("div",{style:{backgroundColor:"green"},className:"display-board"},r.a.createElement("h4",{style:{color:"white"}},"Users Created"),r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-warning"},"Get all Users")))},u=function(e){var t=e.onChangeForm,a=e.createUser;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 mrgnbtm"},r.a.createElement("h2",null,"Create User"),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"First Name"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"firstname",id:"firstname","aria-describedby":"emailHelp",placeholder:"First Name"})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Last Name"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"lastname",id:"lastname",placeholder:"Last Name"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{type:"text",onChange:function(e){return t(e)},className:"form-control",name:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Email"}))),r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-danger"},"Create")))))},d=a(1),p=a.n(d),h=a(3);function E(){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function b(){return(b=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),d=Object(o.a)(c,2),p=d[0],h=d[1],f=Object(n.useState)(0),v=Object(o.a)(f,2),g=v[0],N=v[1];return Object(n.useEffect)((function(){E().then((function(e){console.log(e),h(e),N(e.length)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"container mrgnbtm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement(u,{user:a,onChangeForm:function(e){"firstname"===e.target.name?a.firstName=e.target.value:"lastname"===e.target.name?a.lastName=e.target.value:"email"===e.target.name&&(a.email=e.target.value),l(a)},createUser:function(e){(function(e){return b.apply(this,arguments)})(a).then((function(e){console.log(e),N(g+1)}))}})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement(i,{numberOfUsers:g,getAllUsers:function(){E().then((function(e){console.log(e),h(e),N(e.length)}))}})))),r.a.createElement("div",{className:"row mrgnbtm"},r.a.createElement(m,{users:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(6),N=a(7),y=a(9),w=a(8),O=function(){return r.a.createElement("h1",null,"Something went wrong")},j=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e.componentDidCatch=function(t,a){e.setState({error:t,info:a})},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement(O,null):t}}]),a}(r.a.Component);j.getDerivedStateFromError=function(e){return{hasError:!0}},c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null,r.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.1017a307.chunk.js.map