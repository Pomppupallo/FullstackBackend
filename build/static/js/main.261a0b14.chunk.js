(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(13),l=t.n(u),o=t(14),c=t(3),i=t(2),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d).then((function(e){return e.data}))},f=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e){var n=m.a.put("".concat(d,"/").concat(e.id),e);return console.log(n),n.then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,u=e.newNumber,l=e.handleNumberChange;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:n},a.a.createElement("div",null,a.a.createElement("p",null,"name:",a.a.createElement("input",{value:t,onChange:r})),a.a.createElement("p",null,"number:",a.a.createElement("input",{value:u,onChange:l}))),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},g=function(e){var n=e.message;if(null===n)return null;if(""===n.print)return null;var t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderColor:"green",borderRadius:5,padding:10,marginBottom:10};return n.error&&(t={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderColor:"red",borderRadius:5,padding:10,marginBottom:10}),a.a.createElement("div",{style:t},n.print)},E=function(e){var n=e.newFilter,t=e.handleFilterChange;return a.a.createElement("p",null,"filter shown with",a.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.person,t=e.deletePerson;return a.a.createElement("div",null,a.a.createElement("p",null,n.name," ",n.number," id ",n.id,a.a.createElement("button",{onClick:function(){return t(n.id)}}," delete")))},w=function(e){var n=e.persons,t=e.filter,r=e.deletePerson,u=t.toLowerCase(),l=n.filter((function(e){return e.name.toLowerCase().includes(u)}));return a.a.createElement("div",null,l.map((function(e){return a.a.createElement(v,{key:e.name,person:e,deletePerson:r})})))},y=function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(r.useState)(""),i=Object(c.a)(l,2),m=i[0],d=i[1],v=Object(r.useState)(""),y=Object(c.a)(v,2),C=y[0],j=y[1],O=Object(r.useState)(""),k=Object(c.a)(O,2),S=k[0],N=k[1],P=Object(r.useState)({print:"",error:!1}),F=Object(c.a)(P,2),B=F[0],T=F[1];Object(r.useEffect)((function(){s().then((function(e){return u(e)}))}),[u]);return a.a.createElement("div",null,a.a.createElement(g,{message:B}),a.a.createElement("h2",null,"Phonebook"),a.a.createElement(E,{newFilter:S,handleFilterChange:function(e){return N(e.target.value)}}),a.a.createElement("h3",null,"Add a new"),a.a.createElement(p,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(m)){if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===m}));h(Object(o.a)({},n,{number:C})).then((function(e){u(t.map((function(n){return n.name===m?e:n}))),d(""),j(""),T({print:"".concat(n.name," number is now successfully changed "),style:"ok"}),setTimeout((function(){return T(null)}),2e3)}))}}else{var r={name:m,number:C};f(r).then((function(e){u(t.concat(e)),d(""),j(""),T({print:"".concat(r.name," added successfully "),style:"ok"}),setTimeout((function(){return T(null)}),2e3)}))}},newName:m,newNumber:C,handleNumberChange:function(e){return j(e.target.value)},handleNameChange:function(e){return d(e.target.value)}}),a.a.createElement("h3",null,"Numbers"),a.a.createElement(w,{persons:t,filter:S,deletePerson:function(e){b(e).then((function(n){console.log("removed ".concat(n.name)),T({print:"".concat(n.name," was removed succesfully "),style:"ok"}),setTimeout((function(){return T(null)}),2e3),u(t.filter((function(n){return n.id!==e})))}))}}))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.261a0b14.chunk.js.map