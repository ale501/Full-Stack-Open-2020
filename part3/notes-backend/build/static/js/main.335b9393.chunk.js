(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),o=n(6),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"Make not important":"Make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},l=n(4),j=n.n(l),f="/api/notes",b={getAll:function(){return j.a.get(f)},create:function(t){return j.a.post(f,t)},update:function(t,e){return j.a.put("".concat(f,"/").concat(t),e)}},d=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},p=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(""),l=Object(a.a)(r,2),j=l[0],f=l[1],p=Object(i.useState)(!0),O=Object(a.a)(p,2),m=O[0],h=O[1],x=Object(i.useState)(null),v=Object(a.a)(x,2),g=v[0],S=v[1];Object(i.useEffect)((function(){b.getAll().then((function(t){c(t.data)}))}),[]);var k=m?n:n.filter((function(t){return t.important})),y=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",contSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Departament of Computer Science, University of Helsinki 2021"})]})};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(d,{message:g}),Object(u.jsxs)("button",{onClick:function(){return h(!m)},children:["show ",m?"important":"all"]}),Object(u.jsx)("ul",{children:k.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});b.update(t,r).then((function(t){c(t.data)})).catch((function(){S("Note '".concat(e.content,"' was already removed")),setTimeout((function(){S(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),n.find((function(t){return t.content===j})))S("".concat(j," already exists")),setTimeout((function(){S(null)}),5e3);else{var e={content:j,date:(new Date).toISOString(),important:Math.random()>.5};b.create(e).then((function(t){c(t.data),f("")}))}},children:[Object(u.jsx)("input",{value:j,onChange:function(t){f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(y,{})]})};n(39);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.335b9393.chunk.js.map