(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(1),r=n(3),a=n.n(r),i=n(8),o=(n(36),n(12)),u=n.n(o),l=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("https://immense-scrubland-20832.herokuapp.com/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={login:l},d=n(0),b=function(e){var t=e.message;if(!t)return null;var n=t?t.type:"",c="notification ".concat(n);return Object(d.jsx)("div",{className:c,children:t.msg})};var h=function(e){var t=e.setUser,n=Object(s.useState)(""),r=Object(c.a)(n,2),o=r[0],u=r[1],l=Object(s.useState)(""),h=Object(c.a)(l,2),m=h[0],O=h[1],f=Object(s.useState)(null),x=Object(c.a)(f,2),p=x[0],v=x[1],g=function(){var e=Object(i.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,j.login({username:o,password:m});case 4:c=e.sent,t(c),window.localStorage.setItem("loggedUserP1",JSON.stringify(c)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),v({type:"error-notification",msg:"User or password incorrect, please try again or contact the administrator"}),setTimeout((function(){return v(null)}),3e3);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"login-page",children:[Object(d.jsx)("div",{className:"login-header",children:Object(d.jsx)("h2",{className:"titles",children:"Login"})}),Object(d.jsxs)("div",{className:"login-card",children:[Object(d.jsxs)("form",{onSubmit:g,className:"login-form",children:[Object(d.jsxs)("div",{className:"login-fields",children:[Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("input",{className:"login-input",placeholder:"user",value:o,onChange:function(e){var t=e.target;return u(t.value)}})}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("input",{className:"login-input",placeholder:"password",type:"password",value:m,onChange:function(e){var t=e.target;return O(t.value)}})})]}),Object(d.jsx)("button",{type:"submit",style:{display:"none"},children:"submit"})]}),Object(d.jsxs)("div",{className:"login-buttons",children:[Object(d.jsx)("div",{type:"submit",role:"button",className:"login-button",onClick:g,children:"login"}),Object(d.jsx)("div",{role:"button",className:"login-clear",onClick:function(e){e.preventDefault(),u(""),O("")},children:"clear"})]})]}),Object(d.jsx)(b,{message:p})]})},m=n(11),O=n(4);n(56);var f=function(e){var t=e.title,n=e.logout;return"All Items"===t?Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"title",children:[t," ",Object(d.jsx)("button",{onClick:n,children:"Logout"})," "]}),Object(d.jsx)("hr",{className:"divider"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"title",children:t}),Object(d.jsx)("hr",{className:"divider"})]})},x="https://immense-scrubland-20832.herokuapp.com/api/users",p=null,v=function(){return{headers:{Authorization:p}}},g=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(),e.next=3,u.a.put(x+"/".concat(t.id),t,n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(),e.next=3,u.a.post(x,t,n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={update:g,create:w,setToken:function(e){p="bearer ".concat(e)}};n(57);var y=function(e){var t=e.user,n=t;N.setToken(t.token);var r=Object(s.useState)(""),a=Object(c.a)(r,2),i=a[0],o=a[1],u=Object(s.useState)(""),l=Object(c.a)(u,2),j=l[0],h=l[1],m=Object(s.useState)(!1),O=Object(c.a)(m,2),x=O[0],p=O[1],v=Object(s.useState)(""),g=Object(c.a)(v,2),w=g[0],y=g[1],k=Object(s.useState)(""),T=Object(c.a)(k,2),S=T[0],C=T[1],I=Object(s.useState)(null),U=Object(c.a)(I,2),A=U[0],F=U[1],D=function(e){if(0===i.length||0===j)F({type:"error-notification",msg:"Fill the Username and Password"}),setTimeout((function(){return F(null)}),3e3);else if(j.length<5)F({type:"error-notification",msg:"The password should have 5 characters or more"}),setTimeout((function(){return F(null)}),3e3);else if(-1!==i.indexOf(" ")||-1!==j.indexOf(" "))F({type:"error-notification",msg:"The user / password should not have empty spaces"}),setTimeout((function(){return F(null)}),3e3);else{var t={username:i,name:i,password:j,admin:x};N.create(t).then((function(e){document.getElementsByClassName("checkbox")[0].checked=!1,o(""),h(""),p(!1),F({type:"success-notification",msg:"User created successfully"}),setTimeout((function(){return F(null)}),3e3)})).catch((function(e){"This username is already taken"===e.response.data.error&&(F({type:"error-notification",msg:"Username already taken, create a new one"}),setTimeout((function(){return F(null)}),3e3))}))}};return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Settings"}),Object(d.jsxs)("div",{className:"config-users-box",children:[n.admin?Object(d.jsxs)("div",{className:"new-user-box",children:[Object(d.jsx)("p",{children:"Create new user"}),Object(d.jsxs)("div",{className:"new-user",children:[Object(d.jsxs)("div",{children:["Username: ",Object(d.jsx)("br",{}),"Password: ",Object(d.jsx)("hr",{className:"half-break"}),"Admin:"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password",value:j,onChange:function(e){return h(e.target.value)}})," ",Object(d.jsx)("hr",{className:"half-break"}),Object(d.jsx)("input",{className:"checkbox",type:"checkbox",value:x,onChange:function(e){return p(e.target.checked)}}),Object(d.jsx)("button",{onClick:D,children:"Create"})]})]}),Object(d.jsx)("hr",{})]}):null,Object(d.jsx)("p",{children:"Change your password "}),Object(d.jsxs)("div",{className:"change-password",children:[Object(d.jsxs)("div",{children:["New password: ",Object(d.jsx)("br",{}),"Confirm:"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"password",value:w,onChange:function(e){return y(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password",value:S,onChange:function(e){return C(e.target.value)}}),Object(d.jsx)("button",{onClick:function(e){w!==S?(F({type:"error-notification",msg:"The fields must have the same password"}),setTimeout((function(){return F(null)}),3e3)):w.length<5?(F({type:"error-notification",msg:"The password should have 5 characters or more"}),setTimeout((function(){return F(null)}),3e3)):-1!==w.indexOf(" ")?(F({type:"error-notification",msg:"The password should not have empty spaces"}),setTimeout((function(){return F(null)}),3e3)):(n.newPass=w,N.update(n).then((function(e){F({type:"success-notification",msg:"Password changed successfully"}),setTimeout((function(){return F(null)}),3e3),y(""),C("")})))},children:"Save"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(b,{message:A}),Object(d.jsx)("div",{className:"change-language"})]})]})},k="https://immense-scrubland-20832.herokuapp.com/api/items",T=null,S=function(){return{headers:{Authorization:T}}},C=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(k,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:T}},e.next=3,u.a.get("".concat(k),n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(),e.next=3,u.a.post("".concat(k),t,n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(),e.next=3,u.a.put("".concat(k,"/").concat(t.id),t,n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(),e.next=3,u.a.delete("".concat(k,"/").concat(t),n);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D={getItem:C,getAll:I,createItem:U,setToken:function(e){T="bearer ".concat(e)},updateItem:A,deleteItem:F},R=(n(58),n(14));var P=function(e){var t=e.items,n=e.setAllItems,r=e.user,a=Object(s.useState)(null),i=Object(c.a)(a,2),o=i[0],u=i[1],l=r;D.setToken(l.token);return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{message:o}),Object(d.jsx)("table",{className:"items-table",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"table-id",children:"ID"}),Object(d.jsx)("th",{children:"Item"}),Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{children:"Delete"}),Object(d.jsx)("th",{children:"Details / Edit"})]}),t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{className:"table-id",children:[" ",e.id," "]}),Object(d.jsxs)("td",{children:[" ",e.content,"  "]}),Object(d.jsxs)("td",{children:[" ",e.user," "]}),Object(d.jsxs)("td",{className:"items-delete-column",children:[" ",Object(d.jsx)(R.c,{className:"item-icon",onClick:function(){return function(e,c){if(c!==l.username&&"admin"!==l.username)return u({type:"error-notification items-page-notification",msg:"Only the owner can delete an item"}),void setTimeout((function(){return u(null)}),2e3);window.confirm("Are you sure you want to delete the item with ID ".concat(e,"?"))&&D.deleteItem(e).then((function(c){n(t.filter((function(t){return t.id!==e}))),u({type:"success-notification items-page-notification",msg:"The item was deleted"}),setTimeout((function(){return u(null)}),2e3)}))}(e.id,e.user)}})," "]}),Object(d.jsxs)("td",{className:"items-edit-column",children:[" ",Object(d.jsxs)(m.b,{to:"/crudReactFrontend/item/".concat(e.id),children:[Object(d.jsx)(R.a,{className:"item-icon"})," "]})," "]})]},e.id)}))]})})]})},E=function(e){var t=e.user,n=function(){window.localStorage.clear(),window.location.reload()},r=Object(s.useState)([]),a=Object(c.a)(r,2),i=a[0],o=a[1],u=t;return D.setToken(u.token),Object(s.useEffect)((function(){D.getAll(u.username).then((function(e){o(e)}))}),[u.username]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:n,children:"logout"}),Object(d.jsx)(f,{title:"All Items",logout:n}),Object(d.jsx)(P,{items:i,setAllItems:o,user:t})]})},z=n(21);n(64);var J=function(e){var t=e.user,n=Object(O.g)().id,r=Object(s.useState)({content:"",id:"",private:"",user:""}),a=Object(c.a)(r,2),i=a[0],o=a[1],u=Object(s.useState)(""),l=Object(c.a)(u,2),j=l[0],h=l[1],x=Object(s.useState)("public"),p=Object(c.a)(x,2),v=p[0],g=p[1],w=Object(s.useState)(null),N=Object(c.a)(w,2),y=N[0],k=N[1],T=Object(s.useState)("Back"),S=Object(c.a)(T,2),C=S[0],I=S[1],U=t.username;D.setToken(t.token),Object(s.useEffect)((function(){D.getItem(n).then((function(e){o(e),h(e.content),g(e.private)}))}),[n]);var A=Object(O.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Edit Item"}),Object(d.jsxs)("div",{className:"edit-box",children:[Object(d.jsxs)("div",{className:"edit-id",children:[Object(d.jsxs)("div",{children:["Item Id ",Object(d.jsx)("input",{type:"text",defaultValue:i.id,readOnly:!0})]}),Object(d.jsxs)("div",{children:["User ",Object(d.jsx)("input",{type:"text",defaultValue:i.user,readOnly:!0})]})]}),Object(d.jsxs)("div",{className:"editable-fields",children:[Object(d.jsxs)("div",{className:"item-content",children:[Object(d.jsx)("p",{children:"Item content"}),Object(d.jsx)("textarea",{rows:"8",placeholder:"Item text",value:j,onChange:function(e){h(e.target.value),I("Discard Changes")}})]}),U===i.user?Object(d.jsxs)("div",{className:"user-rights",children:["User rights",Object(d.jsxs)("select",{value:v,onChange:function(e){g(e.target.value)},children:[Object(d.jsx)("option",{value:"public",children:"Public"}),Object(d.jsx)("option",{value:"private",children:"Private"})]})]}):null]}),Object(d.jsx)(b,{message:y})]}),Object(d.jsxs)("div",{className:"edit-buttons",children:[Object(d.jsx)(m.b,{to:"/",children:Object(d.jsx)("button",{className:"login-clear",children:C})}),Object(d.jsx)("button",{className:"login-button",onClick:function(){if(j.length<5)k({type:"error-notification",msg:"The item should have 5 characters or more"}),setTimeout((function(){return k(null)}),2e3);else{var e=Object(z.a)(Object(z.a)({},i),{},{content:j,private:v});D.updateItem(e).then((function(e){k({type:"success-notification",msg:"Item successfully updated"}),setTimeout((function(){k(null),A.push("/crudReactFrontend")}),2e3)}))}},children:"Save"})]})]})};n(65),n(66);var B=function(e){var t=e.user,n=Object(s.useState)(""),r=Object(c.a)(n,2),a=r[0],i=r[1],o=Object(s.useState)("public"),u=Object(c.a)(o,2),l=u[0],j=u[1],h=Object(s.useState)(null),x=Object(c.a)(h,2),p=x[0],v=x[1],g=t,w=Object(O.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{title:"Add a new item"}),Object(d.jsxs)("div",{className:"new-item-box",children:[Object(d.jsxs)("div",{className:"editable-fields",children:[Object(d.jsxs)("div",{className:"item-content",children:[Object(d.jsx)("p",{children:"Item content"}),Object(d.jsx)("textarea",{rows:"8",placeholder:"Item text",value:a,onChange:function(e){i(e.target.value)}})]}),Object(d.jsxs)("div",{className:"user-rights",children:["User rights",Object(d.jsxs)("select",{value:l,onChange:function(e){j(e.target.value)},children:[Object(d.jsx)("option",{value:"public",children:"Public"}),Object(d.jsx)("option",{value:"private",children:"Private"})]})]}),Object(d.jsx)(b,{message:p})]}),Object(d.jsxs)("div",{className:"edit-buttons",children:[Object(d.jsx)(m.b,{to:"/",children:Object(d.jsx)("button",{className:"login-clear",children:"Cancel"})}),Object(d.jsx)("button",{className:"login-button",onClick:function(){if(a.length<5)return v({type:"error-notification",msg:"The item should have 5 characters or more"}),void setTimeout((function(){return v(null)}),2e3);D.setToken(g.token),D.createItem({text:a,rights:l,user:g.username}).then((function(e){v({type:"success-notification",msg:"Item successfully created"}),setTimeout((function(){v(null),w.push("/crudReactFrontend")}),2e3)}))},children:"Create New"})]})]})]})};var L=function(e){var t=e.user;return Object(d.jsxs)("div",{className:"main-page",children:[Object(d.jsxs)(m.a,{children:[Object(d.jsxs)("div",{className:"main-navbar",children:[Object(d.jsxs)("div",{className:"main-menu",children:[Object(d.jsx)(m.b,{to:"/crudReactFrontend",style:{textDecoration:"none",color:"black"},className:"main-menu-home",children:Object(d.jsx)(R.b,{size:50,className:"menu-home"})}),Object(d.jsx)("span",{style:{fontSize:"42px"},children:"|"}),Object(d.jsx)("div",{className:"main-menu-test",children:Object(d.jsx)(m.b,{to:"/crudReactFrontend/new",style:{textDecoration:"none"},children:"New item"})})]}),Object(d.jsxs)("div",{className:"main-menu-logout",children:[Object(d.jsxs)(m.b,{className:"main-menu-cog",to:"/crudReactFrontend/config",style:{textDecoration:"none",textDecorationColor:"none"},children:[" ",Object(d.jsx)(R.d,{size:42})," "]}),Object(d.jsx)("div",{onClick:function(){window.localStorage.clear(),window.location.href="/crudReactFrontend",window.location.reload()},className:"main-menu-card logout",children:"Logout"})]})]}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{path:"/crudReactFrontend/item/:id",children:Object(d.jsx)(J,{user:t})}),Object(d.jsx)(O.a,{path:"/crudReactFrontend/config",children:Object(d.jsx)(y,{user:t})}),Object(d.jsx)(O.a,{path:"/crudReactFrontend/new",children:Object(d.jsx)(B,{user:t})}),Object(d.jsx)(O.a,{path:"/crudReactFrontend",children:Object(d.jsx)(E,{user:t})})]})]}),Object(d.jsxs)("footer",{children:[" ",Object(d.jsxs)("p",{children:["User: ",t.name]})]})]})},V=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){var e=window.localStorage.getItem("loggedUserP1");if(e){var t=JSON.parse(e);r(t)}}),[]),Object(d.jsx)("div",{children:null===n?Object(d.jsx)(h,{setUser:r}):Object(d.jsx)(L,{user:n})})},q=n(33);n.n(q).a.render(Object(d.jsx)(V,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.157f1c88.chunk.js.map