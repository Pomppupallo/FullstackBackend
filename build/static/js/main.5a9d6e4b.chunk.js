(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(13),u=t.n(l),o=t(3),c=t(2),i=t.n(c),d="/api/persons",m=function(){return i.a.get(d).then((function(e){return e.data}))},s=function(e){return i.a.post(d,e).then((function(e){return e.data}))},f=function(e){var n=i.a.post(d);return console.log(n),n.then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,l=e.newNumber,u=e.handleNumberChange;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:n},a.a.createElement("div",null,a.a.createElement("p",null,"name:",a.a.createElement("input",{value:t,onChange:r})),a.a.createElement("p",null,"number:",a.a.createElement("input",{value:l,onChange:u}))),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},p=function(e){var n=e.message;if(null===n)return null;if(""===n.print)return null;var t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderColor:"green",borderRadius:5,padding:10,marginBottom:10};return n.error&&(t={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderColor:"red",borderRadius:5,padding:10,marginBottom:10}),a.a.createElement("div",{style:t},n.print)},g=function(e){var n=e.newFilter,t=e.handleFilterChange;return a.a.createElement("p",null,"filter shown with",a.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.person,t=e.deletePerson;return a.a.createElement("div",null,a.a.createElement("p",null,n.name," ",n.number," id ",n.id,a.a.createElement("button",{onClick:function(){return t(n.id)}}," delete")))},v=function(e){var n=e.persons,t=e.filter,r=e.deletePerson,l=t.toLowerCase(),u=n.filter((function(e){return e.name.toLowerCase().includes(l)}));return a.a.createElement("div",null,u.map((function(e){return a.a.createElement(E,{key:e.name,person:e,deletePerson:r})})))},w=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],u=Object(r.useState)(""),c=Object(o.a)(u,2),i=c[0],d=c[1],E=Object(r.useState)(""),w=Object(o.a)(E,2),y=w[0],C=w[1],j=Object(r.useState)(""),O=Object(o.a)(j,2),S=O[0],k=O[1],N=Object(r.useState)({print:"",error:!1}),P=Object(o.a)(N,2),F=P[0],B=P[1];Object(r.useEffect)((function(){m().then((function(e){return l(e)}))}),[l]);return a.a.createElement("div",null,a.a.createElement(p,{message:F}),a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{newFilter:S,handleFilterChange:function(e){return k(e.target.value)}}),a.a.createElement("h3",null,"Add a new"),a.a.createElement(b,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(i)){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===i}));f(n).then((function(e){console.log("succesfully changed ".concat(e.name))}))}}else{var r={name:i,number:y};s(r).then((function(e){l(t.concat(e)),d(""),C(""),B({print:"".concat(r.name," added successfully "),style:"ok"}),setTimeout((function(){return B(null)}),2e3)}))}},newName:i,newNumber:y,handleNumberChange:function(e){return C(e.target.value)},handleNameChange:function(e){return d(e.target.value)}}),a.a.createElement("h3",null,"Numbers"),a.a.createElement(v,{persons:t,filter:S,deletePerson:function(e){h(e).then((function(n){B({print:"".concat(n.name," was removed succesfully "),style:"ok"}),setTimeout((function(){return B(null)}),2e3),l(t.filter((function(n){return n.id!==e})))}))}}))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5a9d6e4b.chunk.js.map