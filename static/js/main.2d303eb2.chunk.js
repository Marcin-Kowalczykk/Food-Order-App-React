(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,l,d,s,b,u,j,m,h,x,O,p,f,g,v,w,k,y,C,I,H,A,S,M,E,N,z,F,V,B,T,D,R,P,_,J,$,L=t(1),Y=t.n(L),Q=t(7),W=t.n(Q),X=t(4),Z=t(2),q=t(3),G=Object(q.a)(r||(r=Object(Z.a)(['\n\n:root {\n  --main-background-color: #41403f;\n  --tomato-elements-color: #ff6347ca;\n  --error-color: red;\n  --white-font-color: white;\n  --black-font-color: black;\n  --white-background-color: white;\n  --bold-elements-color: #c72d12;\n  --dark-button-color: #5f3028;\n  --dark-button-hover: #ad3824;\n  --light-button-color: white;\n  --light-button-hover: #b6b6b66f;\n  --submit-button-color: #ccc;\n}\n\n* {\n  font-family: "Open Sans", sans-serif;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--main-background-color);\n  }\n']))),K=t(0),U=q.b.button(o||(o=Object(Z.a)(["\n  font-weight: bold;\n  color: var(--white-font-color);\n  width: 5rem;\n  padding: 0.5rem;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n  background-color: var(--dark-button-color);\n  cursor: pointer;\n  transition: background-color 0.5s;\n  &:hover {\n    background-color: var(--dark-button-hover);\n  }\n  &:focus {\n    background-color: var(--dark-button-hover);\n  }\n"]))),ee=function(e){var n=e.children,t=e.className,r=e.type,o=e.onClick,c=e.disabled;return Object(K.jsx)(U,{className:t,type:r||"button",onClick:o,disabled:c,children:n})},ne=Y.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCart:function(){}}),te=Object(q.b)(ee)(c||(c=Object(Z.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 9rem;\n  margin: 1rem;\n"]))),re=q.b.div(a||(a=Object(Z.a)(["\n  border-radius: 10px;\n  background-color: tomato;\n  width: 1.5rem;\n  padding: 0.1rem;\n"]))),oe=function(e){var n=e.onShowModalHandler,t=Object(L.useContext)(ne).items.reduce((function(e,n){return e+n.amount}),0);return Object(K.jsx)(L.Fragment,{children:Object(K.jsxs)(te,{onClick:n,children:[Object(K.jsx)("div",{children:Object(K.jsx)("i",{className:"fas fa-shopping-cart"})}),Object(K.jsx)("div",{children:"Cart"}),Object(K.jsx)(re,{children:t})]})})},ce=q.b.section(i||(i=Object(Z.a)(["\n  position: absolute;\n  top: 10rem;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  overflow: hidden;\n  width: 80%;\n  max-width: 40rem;\n  color: tomato;\n  background-color: #000000cf;\n  border-radius: 10px;\n  padding: 1rem;\n  text-align: center;\n\n  @media (max-width: 600px) {\n    padding: 0.5rem;\n    top: 8rem;\n    width: 85%;\n  }\n"]))),ae=q.b.p(l||(l=Object(Z.a)(["\n  font-size: 0.8rem;\n  color: white;\n"]))),ie=function(){return Object(K.jsxs)(ce,{children:[Object(K.jsx)("h3",{children:"Welcome to the best restaurant of the world"}),Object(K.jsx)(ae,{children:"Choose your dreaming food and add it to your cart !"}),Object(K.jsx)(ae,{children:"Our best chefs will make delicious dishes for you !"}),Object(K.jsx)(ae,{children:"Sit back and we will take care of your order as soon as possible !"})]})},le=q.b.nav(d||(d=Object(Z.a)(["\n  position: fixed;\n  bottom: 1;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  background-color: #000000;\n  z-index: 1;\n"]))),de=q.b.h1(s||(s=Object(Z.a)(["\n  margin-left: 1rem;\n  font-weight: 900;\n  color: tomato;\n"]))),se=q.b.section(b||(b=Object(Z.a)(["\n  width: 100%;\n  height: 22rem;\n  z-index: 0;\n  overflow: hidden;\n"]))),be=q.b.img(u||(u=Object(Z.a)(["\n  width: 110%;\n  height: 100%;\n  object-fit: cover;\n  transform: rotateZ(-4deg) translateY(-4rem) translateX(-1rem);\n"]))),ue=function(e){var n=e.onShowModalHandler;return Object(K.jsxs)(L.Fragment,{children:[Object(K.jsxs)(le,{children:[Object(K.jsx)(de,{children:"Food Order App"}),Object(K.jsx)(oe,{onShowModalHandler:n})]}),Object(K.jsx)(se,{children:Object(K.jsx)(be,{src:"https://nessarestaurant.com/wp-content/uploads/2018/11/Restaurant-Food.jpg",alt:"Restaurant Image"})}),Object(K.jsx)(ie,{})]})},je=t(6),me=t.n(je),he=t(11),xe=q.b.label(j||(j=Object(Z.a)(["\n  font-weight: bold;\n  color: var(--bold-elements-color);\n"]))),Oe=function(e){var n=e.children,t=e.className;return Object(K.jsx)(xe,{className:t,children:n})},pe=q.b.div(m||(m=Object(Z.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),fe=function(e){var n=e.children,t=e.className;return Object(K.jsx)(pe,{className:t,children:n})},ge=q.b.li(h||(h=Object(Z.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--white-background-color);\n  border-bottom: 2px solid tomato;\n  margin: 0 3em 1em 0;\n\n  @media (max-width: 600px) {\n    font-size: 12px;\n    margin: 0 1em 1em -2em;\n  }\n"]))),ve=q.b.div(x||(x=Object(Z.a)(["\n  font-size: 10px;\n  font-style: italic;\n"]))),we=t(5),ke=Object(q.b)(Oe)(O||(O=Object(Z.a)(["\n  margin-left: 0.5em;\n\n  @media (max-width: 600px) {\n    margin-left: 1em;\n  }\n"]))),ye=q.b.input(p||(p=Object(Z.a)(["\n  width: 3em;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: var(--tomato-elements-color);\n  color: var(--white-font-color);\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 1em;\n"]))),Ce=function(e){var n=e.input,t=e.children,r=e.id,o=e.label;return Object(K.jsxs)(fe,{children:[Object(K.jsx)(ke,{htmlFor:r,children:o}),Object(K.jsx)(ye,Object(we.a)(Object(we.a)({id:r},n),{},{children:t}))]})},Ie=Object(q.b)(fe)(f||(f=Object(Z.a)(["\n  align-items: center;\n  margin-bottom: 1em;\n"]))),He=function(e){var n=e.id,t=e.onAddItem,r=Object(L.useState)(1),o=Object(X.a)(r,2),c=o[0],a=o[1],i=Object(L.useState)(!0),l=Object(X.a)(i,2),d=l[0],s=l[1];return Object(K.jsx)("form",{action:"",children:Object(K.jsxs)(Ie,{children:[Object(K.jsx)(Ce,{label:"Amount:",input:{id:"totalAmount"+n,type:"number",min:"1",max:"5",step:"1",value:c,onChange:function(e){a(e.target.value)}}}),Object(K.jsx)(ee,{onClick:function(e){(e.preventDefault(),c<1||c>5)?s(!1):t(+c)},children:"Add"}),!d&&Object(K.jsx)("p",{children:"Amount have to be between 1-5"})]})})},Ae=function(e){var n=e.title,t=e.desc,r=e.price,o=e.id,c=Object(L.useContext)(ne),a="$".concat(r.toFixed(2));return Object(K.jsxs)(ge,{children:[Object(K.jsxs)(fe,{children:[Object(K.jsx)(Oe,{children:n}),Object(K.jsx)(ve,{children:t}),Object(K.jsx)(Oe,{children:a})]}),Object(K.jsx)(He,{id:o,onAddItem:function(e){c.addItem({key:o,id:o,title:n,price:r,amount:e})}})]})},Se=q.b.div(g||(g=Object(Z.a)(["\n  display: block;\n  margin: 7em 8em 1em 8em;\n  padding: 0.1em;\n  background: var(--white-background-color);\n  border-radius: 1em;\n\n  @media (max-width: 600px) {\n    margin: 7em 2em 1em 2em;\n  }\n"]))),Me=q.b.p(v||(v=Object(Z.a)(["\n  text-align: center;\n  color: var(--error-color);\n"]))),Ee=function(){var e=Object(L.useState)([]),n=Object(X.a)(e,2),t=n[0],r=n[1],o=Object(L.useState)(!0),c=Object(X.a)(o,2),a=c[0],i=c[1],l=Object(L.useState)(null),d=Object(X.a)(l,2),s=d[0],b=d[1],u=Object(L.useCallback)(Object(he.a)(me.a.mark((function e(){var n,t,o,c;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),b(null),e.prev=2,e.next=5,fetch("https://food-order-app-5f14c-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("something went wrong (try again)");case 8:return e.next=10,n.json();case 10:for(c in t=e.sent,o=[],t)o.push({id:c,title:t[c].title,desc:t[c].description,price:t[c].price});r(o),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),b(e.t0.message);case 19:i(!1),console.log("runnig");case 21:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);return Object(L.useEffect)((function(){u()}),[u]),Object(K.jsxs)(Se,{children:[s&&Object(K.jsx)(Me,{children:s}),a&&Object(K.jsx)(Me,{children:"Loading ... "}),Object(K.jsx)("ul",{children:t.map((function(e){return Object(K.jsx)(Ae,{id:e.id,title:e.title,desc:e.desc,price:e.price},e.id)}))})]})},Ne=Object(q.c)(w||(w=Object(Z.a)(["\n     from {opacity: 0;}\n     to {opacity: 1;}\n"]))),ze=q.b.div(k||(k=Object(Z.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 300%;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 5;\n  animation: "," 2s;\n"])),Ne),Fe=function(e){var n=e.onHideModalHandler;return Object(K.jsx)(ze,{onClick:n})},Ve=q.b.div(y||(y=Object(Z.a)(["\n  background: var(--white-background-color);\n  border-radius: 10px;\n  width: 80%;\n  margin-top: 7em;\n"]))),Be=function(e){var n=e.children,t=e.className,r=e.id;return Object(K.jsx)(Ve,{className:t,id:r,children:n})},Te=Object(q.c)(C||(C=Object(Z.a)(["\n    from {top: -300px;}\n    to {top: 5vh;}\n"]))),De=Object(q.b)(Be)(I||(I=Object(Z.a)(["\n  position: fixed;\n  top: 5vh;\n  left: 28%;\n  overflow: hidden;\n  width: 80%;\n  max-width: 35em;\n  z-index: 25;\n  animation: "," 1s;\n\n  @media (max-width: 600px) {\n    max-height: 35em;\n    left: 10%;\n  }\n"])),Te),Re=q.b.ul(H||(H=Object(Z.a)(["\n  max-height: 10em;\n  overflow: scroll;\n"]))),Pe=q.b.button(A||(A=Object(Z.a)(["\n  font-weight: bold;\n  width: 2.5rem;\n  padding: 0.2rem;\n  border-radius: 5px;\n  border: 1px solid brown;\n  outline: none;\n  background-color: var(--white-button-color);\n  cursor: pointer;\n  transition: background-color 0.5s;\n\n  &:hover {\n    background-color: var(--light-button-hover);\n  }\n\n  &:focus {\n    background-color: var(--light-button-hover);\n  }\n"]))),_e=function(e){var n=e.children,t=e.className,r=e.type,o=e.onClick;return Object(K.jsx)(Pe,{className:t,type:r||"button",onClick:o,children:n})},Je=q.b.section(S||(S=Object(Z.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 2em;\n  font-size: 1.2rem;\n  font-weight: bold;\n\n  @media (max-width: 600px) {\n    margin: 1em;\n  }\n"]))),$e=q.b.section(M||(M=Object(Z.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1em;\n"]))),Le=Object(q.b)(_e)(E||(E=Object(Z.a)(["\n  margin-right: 5px;\n  width: 5rem;\n  border-radius: 20px;\n"]))),Ye=q.b.p(N||(N=Object(Z.a)(["\n  color: var(--error-color);\n  text-align: center;\n  font-size: 12px;\n"]))),Qe=q.b.p(z||(z=Object(Z.a)(["\n  color: var(--tomato-elements-color);\n  text-align: center;\n"]))),We=Object(q.c)(F||(F=Object(Z.a)(["\n    from {opacity: 0;}\n    to {opacity: 1;}\n"]))),Xe=q.b.section(V||(V=Object(Z.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 2em 0 2em;\n  animation: "," 1s;\n\n  @media (max-width: 600px) {\n    font-size: 12px;\n  }\n"])),We),Ze=q.b.input(B||(B=Object(Z.a)(["\n  width: 70%;\n  outline: none;\n  border: ",";\n  background: ",";\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 5px;\n"])),(function(e){return e.error?"1px solid red":"1px solid rgba(197, 196, 196, 0.973)"}),(function(e){return e.error?"#ff00004e":"none"})),qe=q.b.p(T||(T=Object(Z.a)(["\n  color: var(--error-color);\n  font-size: 12px;\n  text-align: end;\n  margin: 0 3em 0 0;\n\n  @media (max-width: 600px) {\n    font-size: 7px;\n  }\n"]))),Ge=q.b.section(D||(D=Object(Z.a)(["\n  text-align: center;\n  margin: 1em 0 1em 0;\n  animation: "," 1s;\n"])),We),Ke=Object(q.b)(ee)(R||(R=Object(Z.a)(["\n  &:disabled {\n    background-color: var(--submit-button-color);\n    color: var(--black-font-color);\n    border-color: var(--submit-button-color);\n    cursor: not-allowed;\n  }\n"]))),Ue=function(e){var n=Object(L.useState)(""),t=Object(X.a)(n,2),r=t[0],o=t[1],c=Object(L.useState)(!1),a=Object(X.a)(c,2),i=a[0],l=a[1],d=e(r);return{inputValue:r,isTouched:i,isValid:d,hasError:!d&&i,onChangeInputHandler:function(e){o(e.target.value)},onBlurInputHandler:function(){l(!0)},clearInput:function(){o(""),l(!1)}}},en=function(e){var n=e.onAddNewOrder,t=/\d/,r=Ue((function(e){return""!==e.trim()&&e.length>2})),o=r.inputValue,c=r.isValid,a=r.hasError,i=r.onChangeInputHandler,l=r.onBlurInputHandler,d=r.clearInput,s=Ue((function(e){return""!==e.trim()&&e.length>3&&t.test(e)})),b=s.inputValue,u=s.isValid,j=s.hasError,m=s.onChangeInputHandler,h=s.onBlurInputHandler,x=s.clearInput,O=Ue((function(e){return 6==e.length&&e.includes("-")&&t.test(e)})),p=O.inputValue,f=O.isValid,g=O.hasError,v=O.onChangeInputHandler,w=O.onBlurInputHandler,k=O.clearInput,y=Ue((function(e){return 9==e.length})),C=y.inputValue,I=y.isValid,H=y.hasError,A=y.onChangeInputHandler,S=y.onBlurInputHandler,M=y.clearInput,E=!1;c&&u&&f&&I&&(E=!0);return Object(K.jsx)("form",{action:"",children:Object(K.jsxs)(fe,{children:[Object(K.jsxs)(Xe,{children:[Object(K.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(K.jsx)(Ze,{error:a,type:"text",id:"name",onChange:i,onBlur:l,value:o})]}),a&&Object(K.jsx)(qe,{children:"name must be longer than 2 letters"}),Object(K.jsxs)(Xe,{children:[Object(K.jsx)("label",{htmlFor:"adress",children:"Adress:"}),Object(K.jsx)(Ze,{error:j,type:"text",id:"adress",placeholder:"Street Number",onChange:m,onBlur:h,value:b})]}),j&&Object(K.jsx)(qe,{children:"Adress must be longer than 4 letters and must have number"}),Object(K.jsxs)(Xe,{children:[Object(K.jsx)("label",{htmlFor:"zip",children:"Post Code:"}),Object(K.jsx)(Ze,{error:g,type:"text",id:"zip",placeholder:"xx-xxx",onChange:v,onBlur:w,value:p})]}),g&&Object(K.jsx)(qe,{children:"Post code must contain 5 numbers"}),Object(K.jsxs)(Xe,{children:[Object(K.jsx)("label",{htmlFor:"telephone",children:"Telephone:"}),Object(K.jsx)(Ze,{error:H,type:"tel",id:"telephone",placeholder:"xxx-xxx-xxx",onChange:A,onBlur:S,value:C})]}),H&&Object(K.jsx)(qe,{children:"Phone number must contain 9 numbers"}),Object(K.jsx)(Ge,{children:Object(K.jsx)(Ke,{disabled:!E,onClick:function(e){(e.preventDefault(),c&&u&&f&&I)&&(n({userName:o,adress:b,zipCode:p,phoneNumber:C}),console.log("form is subbmited"),d(),x(),k(),M())},children:"Submit"})})]})})},nn=function(e){var n=e.onHideModalHandler,t=Object(L.useContext)(ne),r=Object(L.useState)(!1),o=Object(X.a)(r,2),c=o[0],a=o[1],i=Object(L.useState)(null),l=Object(X.a)(i,2),d=l[0],s=l[1],b=Object(L.useState)(!1),u=Object(X.a)(b,2),j=u[0],m=u[1],h=Object(L.useState)(!1),x=Object(X.a)(h,2),O=x[0],p=x[1],f=function(){var e=Object(he.a)(me.a.mark((function e(n){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(null),m(!1),!(t.totalAmount>0)){e.next=22;break}return p(!0),e.prev=4,e.next=7,fetch("https://food-order-app-5f14c-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({id:n.userName+" "+Math.random(),usersData:n,orderData:t.items}),headers:{"Content-Type":"application/json"}});case 7:if(e.sent.ok){e.next=12;break}throw new Error("something went wrong, try again");case 12:m(!0);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),s(e.t0.message);case 18:p(!1),t.clearCart(),e.next=24;break;case 22:m(!1),s("Add something to your Cart !");case 24:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(n){return e.apply(this,arguments)}}(),g="".concat(t.totalAmount.toFixed(2),"$"),v=Object(K.jsxs)($e,{children:[Object(K.jsx)(Le,{onClick:n,children:"Close"}),Object(K.jsx)(ee,{onClick:function(){a(!0)},children:"Order"})]}),w=Object(K.jsxs)(L.Fragment,{children:[Object(K.jsx)(Qe,{children:"Thank you for order !"}),Object(K.jsx)($e,{children:Object(K.jsx)(Le,{onClick:n,children:"Close"})})]}),k=Object(K.jsxs)(L.Fragment,{children:[Object(K.jsxs)(Je,{children:[Object(K.jsx)("span",{children:"Total:"}),Object(K.jsx)("span",{children:g})]}),d&&Object(K.jsx)(Ye,{children:d}),O&&Object(K.jsx)(Qe,{children:"Sending Your Order ..."}),c&&!j&&Object(K.jsx)(en,{onAddNewOrder:f}),!c&&v]});return Object(K.jsx)("footer",{children:j?w:k})},tn=q.b.li(P||(P=Object(Z.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--white-background-color);\n  border-bottom: 2px solid tomato;\n  margin: 1rem 2rem 1rem 0;\n\n  @media (max-width: 600px) {\n    font-size: 12px;\n    margin: 0.3rem 1.2rem 0.3rem -1rem;\n  }\n"]))),rn=Object(q.b)(fe)(_||(_=Object(Z.a)(["\n  flex-direction: row;\n  align-items: center;\n"]))),on=Object(q.b)(Oe)(J||(J=Object(Z.a)(["\n  color: var(--black-font-color);\n"]))),cn=q.b.div($||($=Object(Z.a)(["\n  border: 1px solid brown;\n  border-radius: 5px;\n  padding: 2.5px 5px;\n  font-size: 0.7rem;\n  font-weight: bold;\n  color: var(--bold-elements-color);\n"]))),an=function(e){var n=e.title,t=e.price,r=e.amount,o=e.onAdd,c=e.onRemove;return Object(K.jsxs)(tn,{children:[Object(K.jsxs)(fe,{children:[Object(K.jsx)(Oe,{children:n}),Object(K.jsx)(on,{children:"".concat(t,"$")})]}),Object(K.jsxs)(rn,{children:[Object(K.jsx)(Oe,{children:"Quantity:"}),Object(K.jsx)(cn,{children:r})]}),Object(K.jsxs)(rn,{children:[Object(K.jsx)(_e,{onClick:c,children:"-"}),Object(K.jsx)(_e,{onClick:o,children:"+"})]})]})},ln=function(e){var n=e.onHideModalHandler,t=Object(L.useContext)(ne),r=function(e){t.addItem(Object(we.a)(Object(we.a)({},e),{},{amount:1}))},o=function(e){t.removeItem(e)};return Object(K.jsxs)(De,{children:[Object(K.jsx)(Re,{children:t.items.map((function(e){return Object(K.jsx)(an,{id:e.id,title:e.title,price:e.price,amount:e.amount,onRemove:o.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))}),Object(K.jsx)(nn,{onHideModalHandler:n})]})},dn=function(e){var n=e.onHideModalHandler,t=document.getElementById("modal-root");return Object(K.jsxs)(L.Fragment,{children:[W.a.createPortal(Object(K.jsx)(Fe,{onHideModalHandler:n}),t),W.a.createPortal(Object(K.jsx)(ln,{onHideModalHandler:n}),t)]})},sn=t(14),bn={items:[],totalAmount:0},un=function(e,n){if("ADD_ITEM"===n.type){var t,r=e.totalAmount+n.item.price*n.item.amount,o=e.items.findIndex((function(e){return e.id===n.item.id})),c=e.items[o];if(c){var a=Object(we.a)(Object(we.a)({},c),{},{amount:c.amount+n.item.amount});(t=Object(sn.a)(e.items))[o]=a}else t=e.items.concat(n.item);return{items:t,totalAmount:r}}if("REMOVE_ITEM"===n.type){var i,l=e.items.findIndex((function(e){return e.id===n.id})),d=e.items[l],s=e.totalAmount-d.price;if(1===d.amount)i=e.items.filter((function(e){return e.id!==n.id}));else{var b=Object(we.a)(Object(we.a)({},d),{},{amount:d.amount-1});(i=Object(sn.a)(e.items))[l]=b}return{items:i,totalAmount:s}}return n.type,bn},jn=function(e){var n=Object(L.useReducer)(un,bn),t=Object(X.a)(n,2),r=t[0],o=t[1],c={items:r.items,totalAmount:r.totalAmount,addItem:function(e){o({type:"ADD_ITEM",item:e})},removeItem:function(e){o({type:"REMOVE_ITEM",id:e})},clearCart:function(){o({type:"CLEAR_ITEMS"})}};return Object(K.jsx)(ne.Provider,{value:c,children:e.children})};var mn=function(){var e=Object(L.useState)(!1),n=Object(X.a)(e,2),t=n[0],r=n[1];return Object(K.jsxs)(jn,{children:[Object(K.jsx)(G,{}),t&&Object(K.jsx)(dn,{onHideModalHandler:function(){r(!1)}}),Object(K.jsx)(ue,{onShowModalHandler:function(){r(!0)}}),Object(K.jsx)(Ee,{})]})};W.a.render(Object(K.jsx)(Y.a.StrictMode,{children:Object(K.jsx)(mn,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2d303eb2.chunk.js.map