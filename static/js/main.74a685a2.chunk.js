(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a,l,d,s,u,b,m,j,h,x,f,p,O,g,v,w,k,y,C,S,I,H,T,B,A,z,E,M,N,F,D,V,R,q,P,L,U,W,_,$,Z,Y,J,G,Q,X,K,ee,ne,te,re,oe,ce,ie,ae,le,de,se,ue,be,me,je,he,xe,fe,pe,Oe,ge,ve=t(1),we=t.n(ve),ke=t(12),ye=t.n(ke),Ce=t(8),Se=t(5),Ie=t(4),He=t(3),Te=t(2),Be=Object(Te.b)(r||(r=Object(He.a)(["\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: ",";\n  }\n"])),(function(e){return e.theme.color.background})),Ae=Be,ze=t(0),Ee=Te.d.button(o||(o=Object(He.a)(["\n  font-weight: bold;\n  border-radius: 20px;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.5s;\n\n  background-color: ",";\n\n  ","\n\n  ","\n"])),(function(e){return e.theme.color.darkButtonColor}),(function(e){return"brown"===e.variant&&Object(Te.c)(c||(c=Object(He.a)(["\n      border: none;\n      color: white;\n      width: 5em;\n      padding: 0.5em;\n      border-radius: 20px;\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:focus {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.color.darkButtonColor}),(function(e){return e.theme.color.darkButtonColorHover}),(function(e){return e.theme.color.darkButtonColorHover}))}),(function(e){return"white"===e.variant&&Object(Te.c)(i||(i=Object(He.a)(["\n      border: 1px solid brown;\n      width: 2.5em;\n      padding: 0.2em;\n      border-radius: 5px;\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &:focus {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.color.lightButtonColor}),(function(e){return e.theme.color.lightButtonColorHover}),(function(e){return e.theme.color.lightButtonColorHover}))})),Me=function(e){var n=e.children,t=e.className,r=e.type,o=e.onClick,c=e.disabled,i=e.variant;return Object(ze.jsx)(Ee,{className:t,type:r||"button",onClick:o,disabled:c,variant:i,children:n})},Ne=function(){return Object(ze.jsx)(De,{})},Fe=Object(Te.e)(a||(a=Object(He.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),De=Te.d.div(l||(l=Object(He.a)(["\n  display: inline-block;\n  margin-bottom: 1em;\n  width: 80px;\n  height: 80px;\n\n  &:after {\n    content: ' ';\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid teal;\n    border-color: tomato transparent tomato transparent;\n    animation: "," 1.2s linear infinite;\n  }\n"])),Fe),Ve="/Food-Order-App-React/main",Re="/Food-Order-App-React/auth-sign-in",qe="/Food-Order-App-React/auth-sign-up",Pe=t(9),Le=t.n(Pe),Ue=t(11),We=we.a.createContext({token:"",isUserSignedIn:!1,loginHandler:function(){},logoutHandler:function(){}}),_e=function(e,n,t,r){var o=Object(ve.useContext)(We),c=Object(Ie.f)(),i=Object(ve.useState)(!1),a=Object(Se.a)(i,2),l=a[0],d=a[1],s=Object(ve.useState)(""),u=Object(Se.a)(s,2),b=u[0],m=u[1],j=Object(ve.useState)(""),h=Object(Se.a)(j,2),x=h[0],f=h[1];return{isLoading:l,errorMsg:b,feedBack:x,signUserRequest:function(){var i=Object(Ue.a)(Le.a.mark((function i(){var a,l,s,u,b,j,h;return Le.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return d(!0),m(null),f(null),i.prev=3,i.next=6,fetch(e,{method:"POST",body:JSON.stringify({email:n,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 6:return a=i.sent,i.next=9,a.json();case 9:if(l=i.sent,s=l.idToken,u=new Date((new Date).getTime()+1e3*+l.expiresIn),b=l.error,d(!1),a.ok){i.next=19;break}throw j=l&&b&&b.message?b.message:"Something went wrong!",new Error(j);case 19:return h=o.loginHandler(s,u.toISOString()),f("Success"),c(r),i.abrupt("return",h);case 23:i.next=28;break;case 25:i.prev=25,i.t0=i.catch(3),m(i.t0.message);case 28:case"end":return i.stop()}}),i,null,[[3,25]])})));return function(){return i.apply(this,arguments)}}()}},$e=function(){var e=Object(ve.useState)(""),n=Object(Se.a)(e,2),t=n[0],r=n[1],o=Object(ve.useState)(""),c=Object(Se.a)(o,2),i=c[0],a=c[1],l=_e("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0dWDknjdE7_Pz4WWv-dgcHENY738YHO4",t,i,Ve),d=l.isLoading,s=l.errorMsg,u=l.feedBack,b=l.signUserRequest;return Object(ze.jsx)("form",{children:Object(ze.jsxs)(Ge,{children:[Object(ze.jsx)(Xe,{children:Object(ze.jsx)(en,{children:"Sign in !"})}),Object(ze.jsxs)(Xe,{children:[Object(ze.jsx)(Qe,{htmlFor:"email",children:"e-mail"}),Object(ze.jsx)(Ke,{type:"email",id:"email",onChange:function(e){return r(e.target.value)},value:t})]}),Object(ze.jsxs)(Xe,{children:[Object(ze.jsx)(Qe,{htmlFor:"pass",children:"password"}),Object(ze.jsx)(Ke,{type:"password",id:"pass",onChange:function(e){return a(e.target.value)},value:i})]}),Object(ze.jsxs)(Xe,{children:[s&&!u&&Object(ze.jsxs)(rn,{children:["Error: ",s," !"]}),u&&!s&&Object(ze.jsx)(on,{children:u}),d&&Object(ze.jsx)(Ne,{}),!d&&Object(ze.jsx)(Me,{type:"submit",variant:"brown",onClick:function(e){e.preventDefault(),b(),r(""),a("")},children:"Login"}),Object(ze.jsx)(nn,{children:Object(ze.jsx)(tn,{to:qe,children:"Create new account !"})})]})]})})},Ze=Te.d.div(d||(d=Object(He.a)(["\n  border-radius: 10px;\n  width: 80%;\n  margin-top: 7em;\n"]))),Ye=function(e){var n=e.children,t=e.className,r=e.id;return Object(ze.jsx)(Ze,{className:t,id:r,children:n})},Je=Object(Te.e)(s||(s=Object(He.a)(["\n     from {opacity: 0;}\n     to {opacity: 1;}\n"]))),Ge=Object(Te.d)(Ye)(u||(u=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  margin: 1em 20% 10% 20%;\n  background: ",";\n  animation: "," 3s;\n"])),(function(e){return e.theme.color.normal}),Je),Qe=Te.d.label(b||(b=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1em;\n"]))),Xe=Te.d.section(m||(m=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.3em;\n"]))),Ke=Te.d.input(j||(j=Object(He.a)(["\n  padding: 0.4em;\n  width: 80%;\n  margin-top: 0.5em;\n  outline: none;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid gray;\n\n  &:focus {\n    background: ",";\n  }\n"])),(function(e){return e.theme.color.focusInput})),en=Te.d.header(h||(h=Object(He.a)(["\n  text-align: center;\n  margin-top: 0.5em;\n  color: ",";\n"])),(function(e){return e.theme.color.boldColor})),nn=Object(Te.d)(en)(x||(x=Object(He.a)(["\n  cursor: pointer;\n  margin: 1em;\n"]))),tn=Object(Te.d)(Ce.b)(f||(f=Object(He.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &.active,\n  &:visited {\n    border-bottom: 2px solid ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid ",";\n  }\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main})),rn=Te.d.p(p||(p=Object(He.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n  margin: 0.5em 0 1em 0;\n"])),(function(e){return e.theme.color.errorColor}),(function(e){return e.theme.font.extraSmall10})),on=Te.d.p(O||(O=Object(He.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n  margin: 0.5em 0 0.4em 0;\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.font.extraSmall})),cn=function(){return Object(ze.jsx)($e,{})},an=function(e){var n=Object(ve.useState)(""),t=Object(Se.a)(n,2),r=t[0],o=t[1],c=Object(ve.useState)(!1),i=Object(Se.a)(c,2),a=i[0],l=i[1],d=e(r);return{inputValue:r,isTouched:a,isValid:d,hasError:!d&&a,onChangeInputHandler:function(e){o(e.target.value)},onBlurInputHandler:function(){l(!0)},clearInput:function(){o(""),l(!1)}}},ln=function(){var e=an((function(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)&&!e.includes(" ")})),n=e.inputValue,t=e.isValid,r=e.hasError,o=e.onChangeInputHandler,c=e.onBlurInputHandler,i=e.clearInput,a=an((function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(e)&&!e.includes(" ")})),l=a.inputValue,d=a.isValid,s=a.hasError,u=a.onChangeInputHandler,b=a.onBlurInputHandler,m=a.clearInput,j=!1;t&&d&&(j=!0);var h=_e("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0dWDknjdE7_Pz4WWv-dgcHENY738YHO4",n,l),x=h.isLoading,f=h.errorMsg,p=h.feedBack,O=h.signUserRequest;return Object(ze.jsx)("form",{onSubmit:function(e){e.preventDefault(),j&&(O(),i(),m())},children:Object(ze.jsxs)(sn,{children:[Object(ze.jsx)(bn,{children:Object(ze.jsx)(xn,{children:"Welcome new user ! Sign up here."})}),Object(ze.jsxs)(bn,{children:[Object(ze.jsx)(un,{htmlFor:"email",children:"e-mail"}),Object(ze.jsx)(mn,{type:"email",id:"email",error:r,onChange:o,onBlur:c,value:n}),r&&Object(ze.jsx)(jn,{children:"email is wrong !"})]}),Object(ze.jsxs)(bn,{children:[Object(ze.jsx)(un,{htmlFor:"pass",children:"password"}),Object(ze.jsx)(mn,{type:"password",id:"pass",error:s,onChange:u,onBlur:b,value:l}),s&&Object(ze.jsx)(jn,{children:"Need one uppercase, one number, length must be longer than 7"})]}),Object(ze.jsxs)(bn,{children:[x&&Object(ze.jsx)(Ne,{}),p&&Object(ze.jsx)(hn,{children:p}),f&&0===n.length&&Object(ze.jsxs)(jn,{children:["Error: ",f," try again !"]}),!x&&Object(ze.jsx)(On,{disabled:!j,type:"submit",variant:"brown",children:"Sign Up"}),Object(ze.jsx)(fn,{children:Object(ze.jsx)(pn,{to:Re,children:"Have account? Go to Login!"})})]})]})})},dn=Object(Te.e)(g||(g=Object(He.a)(["\n     from {opacity: 0;}\n     to {opacity: 1;}\n"]))),sn=Object(Te.d)(Ye)(v||(v=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 60%;\n  margin: 1em 20% 10% 20%;\n  background: ",";\n  animation: "," 3s;\n"])),(function(e){return e.theme.color.normal}),dn),un=Te.d.label(w||(w=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 1em;\n"]))),bn=Te.d.section(k||(k=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.3em;\n"]))),mn=Te.d.input(y||(y=Object(He.a)(["\n  padding: 0.4em;\n  width: 80%;\n  margin-top: 0.5em;\n  outline: none;\n  font-weight: bold;\n  border-radius: 5px;\n  border: ",";\n  background: ",";\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.error?"1px solid red":"1px solid rgba(197, 196, 196, 0.973)"}),(function(e){return e.error?"#ff00004e":"none"}),(function(e){return e.theme.color.focusInput})),jn=Te.d.p(C||(C=Object(He.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n  margin: 0.5em 0 0.2em 0;\n"])),(function(e){return e.theme.color.errorColor}),(function(e){return e.theme.font.extraSmall10})),hn=Te.d.p(S||(S=Object(He.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: center;\n  margin: 0.5em 0 0.4em 0;\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.font.extraSmall})),xn=Te.d.header(I||(I=Object(He.a)(["\n  text-align: center;\n  margin-top: 0.5em;\n  color: ",";\n\n  @media (max-width: 600px) {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.color.boldColor}),(function(e){return e.theme.font.extraSmall})),fn=Object(Te.d)(xn)(H||(H=Object(He.a)(["\n  cursor: pointer;\n  margin: 1em;\n"]))),pn=Object(Te.d)(Ce.b)(T||(T=Object(He.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &.active,\n  &:visited {\n    border-bottom: 2px solid ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid ",";\n  }\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main})),On=Object(Te.d)(Me)(B||(B=Object(He.a)(["\n  &:disabled {\n    background-color: ",";\n    color: black;\n    border-color: ",";\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.theme.color.submitButtonColor}),(function(e){return e.theme.color.submitButtonColor})),gn=function(){return Object(ze.jsx)(ln,{})},vn=Te.d.label(A||(A=Object(He.a)(["\n  font-weight: bold;\n  color: ",";\n"])),(function(e){return e.theme.color.boldColor})),wn=function(e){var n=e.children,t=e.className;return Object(ze.jsx)(vn,{className:t,children:n})},kn=Te.d.div(z||(z=Object(He.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),yn=function(e){var n=e.children,t=e.className;return Object(ze.jsx)(kn,{className:t,children:n})},Cn=Te.d.li(E||(E=Object(He.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  border-bottom: 2px solid tomato;\n  margin: 1em;\n\n  @media (max-width: 600px) {\n    font-size: ",";\n    margin: 1em;\n  }\n"])),(function(e){return e.theme.color.normal}),(function(e){return e.theme.font.extraSmall})),Sn=Te.d.div(M||(M=Object(He.a)(["\n  font-size: ",";\n  font-style: italic;\n"])),(function(e){return e.theme.font.extraSmall10})),In=t(7),Hn=Object(Te.d)(wn)(N||(N=Object(He.a)(["\n  margin-left: 0.5em;\n\n  @media (max-width: 600px) {\n    margin-left: 1em;\n  }\n"]))),Tn=Te.d.input(F||(F=Object(He.a)(["\n  width: 3em;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: ",";\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 1em;\n"])),(function(e){return e.theme.color.main})),Bn=function(e){var n=e.input,t=e.children,r=e.id,o=e.label;return Object(ze.jsxs)(yn,{children:[Object(ze.jsx)(Hn,{htmlFor:r,children:o}),Object(ze.jsx)(Tn,Object(In.a)(Object(In.a)({id:r},n),{},{children:t}))]})},An=function(e){var n=e.id,t=e.onAddItem,r=Object(ve.useState)(1),o=Object(Se.a)(r,2),c=o[0],i=o[1],a=Object(ve.useState)(!0),l=Object(Se.a)(a,2),d=l[0],s=l[1];return Object(ze.jsx)("form",{action:"",children:Object(ze.jsxs)(zn,{children:[Object(ze.jsx)(Bn,{label:"Amount:",input:{id:"totalAmount"+n,type:"number",min:"1",max:"5",step:"1",value:c,onChange:function(e){i(e.target.value)}}}),Object(ze.jsx)(Me,{variant:"brown",onClick:function(e){(e.preventDefault(),c<1||c>5)?s(!1):t(+c)},children:"Add"}),!d&&Object(ze.jsx)("p",{children:"Amount have to be between 1-5"})]})})},zn=Object(Te.d)(yn)(D||(D=Object(He.a)(["\n  align-items: center;\n  margin-bottom: 1em;\n"]))),En=we.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCart:function(){}}),Mn=function(e){var n=e.title,t=e.desc,r=e.price,o=e.id,c=Object(ve.useContext)(En),i="$".concat(r.toFixed(2));return Object(ze.jsxs)(Cn,{children:[Object(ze.jsxs)(yn,{children:[Object(ze.jsx)(wn,{children:n}),Object(ze.jsx)(Sn,{children:t}),Object(ze.jsx)(wn,{children:i})]}),Object(ze.jsx)(An,{id:o,onAddItem:function(e){c.addItem({key:o,id:o,title:n,price:r,amount:e})}})]})},Nn=function(){var e=Object(ve.useState)([]),n=Object(Se.a)(e,2),t=n[0],r=n[1],o=Object(ve.useState)(!0),c=Object(Se.a)(o,2),i=c[0],a=c[1],l=Object(ve.useState)(null),d=Object(Se.a)(l,2),s=d[0],u=d[1],b=Object(ve.useCallback)(Object(Ue.a)(Le.a.mark((function e(){var n,t,o,c;return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),u(null),e.prev=2,e.next=5,fetch("https://food-order-app-5f14c-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("something went wrong (try again)");case 8:return e.next=10,n.json();case 10:for(c in t=e.sent,o=[],t)o.push({id:c,title:t[c].title,desc:t[c].description,price:t[c].price});r(o),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),u(e.t0.message);case 19:a(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);return Object(ve.useEffect)((function(){b()}),[b]),Object(ze.jsxs)(ve.Fragment,{children:[i&&Object(ze.jsx)(Vn,{children:Object(ze.jsx)(Ne,{})}),Object(ze.jsxs)(Fn,{children:[s&&Object(ze.jsx)(Dn,{children:s}),Object(ze.jsx)("ul",{children:t.map((function(e){return Object(ze.jsx)(Mn,{id:e.id,title:e.title,desc:e.desc,price:e.price},e.id)}))})]})]})},Fn=Te.d.div(V||(V=Object(He.a)(["\n  display: block;\n  margin: 3em 8em 5em 8em;\n  padding: 0.1em;\n  background: ",";\n  border-radius: 1em;\n\n  @media (max-width: 600px) {\n    margin: 1em;\n  }\n"])),(function(e){return e.theme.color.normal})),Dn=Te.d.p(R||(R=Object(He.a)(["\n  text-align: center;\n  color: ",";\n"])),(function(e){return e.theme.color.errorColor})),Vn=Te.d.div(q||(q=Object(He.a)(["\n  text-align: center;\n  margin-bottom: 1em;\n"]))),Rn=function(){return Object(ze.jsx)(Nn,{})},qn=function(e){var n=e.onShowModal,t=Object(ve.useContext)(En).items.reduce((function(e,n){return e+n.amount}),0);return Object(ze.jsx)(ve.Fragment,{children:Object(ze.jsxs)(Pn,{variant:"brown",onClick:n,children:[Object(ze.jsx)("div",{children:Object(ze.jsx)("i",{className:"fas fa-shopping-cart"})}),Object(ze.jsx)(Ln,{children:t})]})})},Pn=Object(Te.d)(Me)(P||(P=Object(He.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 5em;\n  margin: 1em;\n"]))),Ln=Te.d.div(L||(L=Object(He.a)(["\n  border-radius: 10px;\n  background-color: ",";\n  width: 1.5em;\n  padding: 0.1em;\n"])),(function(e){return e.theme.color.main})),Un=Te.d.section(U||(U=Object(He.a)(["\n  position: absolute;\n  top: 17vh;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  overflow: hidden;\n  width: 80%;\n  max-width: 40rem;\n  color: tomato;\n  background-color: #000000cf;\n  border-radius: 10px;\n  padding: 2em;\n  text-align: center;\n\n  @media (max-width: 600px) {\n    top: 14vh;\n    padding: 2em;\n    width: 70%;\n  }\n"]))),Wn=Te.d.p(W||(W=Object(He.a)(["\n  font-size: 15px;\n  margin: 0.5em;\n  color: white;\n\n  @media (max-width: 600px) {\n    font-size: 8px;\n  }\n"]))),_n=function(){return Object(ze.jsxs)(Un,{children:[Object(ze.jsx)("h3",{children:"Welcome to the best restaurant of the world"}),Object(ze.jsx)(Wn,{children:"Choose your dreaming food and add it to your cart !"}),Object(ze.jsx)(Wn,{children:"Our best chefs will make delicious dishes for you !"}),Object(ze.jsx)(Wn,{children:"Sit back and we will take care of your order as soon as possible !"})]})},$n=(t(30),function(e){var n=e.onToggleTheme;return Object(ze.jsx)("div",{className:"theme-switch-wrapper",children:Object(ze.jsxs)("label",{className:"theme-switch",children:[Object(ze.jsx)("input",{type:"checkbox"}),Object(ze.jsx)("div",{className:"slider round",onClick:n})]})})}),Zn=Te.d.nav(_||(_=Object(He.a)(["\n  position: fixed;\n  bottom: 1;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  z-index: 1;\n"])),(function(e){return e.theme.color.navBackground})),Yn=Te.d.section($||($=Object(He.a)(["\n  display: flex;\n"]))),Jn=Object(Te.d)(Ce.c)(Z||(Z=Object(He.a)(["\n  color: ",";\n  text-decoration: none;\n  /* &.active,\n  &:visited {\n    border-bottom: 2px solid ",";\n  } */\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ",";\n  }\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.main})),Gn=Object(Te.d)(Jn)(Y||(Y=Object(He.a)(["\n  color: white;\n"]))),Qn=Te.d.h1(J||(J=Object(He.a)(["\n  font-size: ",";\n  margin-left: 1em;\n  font-weight: 900;\n\n  @media (max-width: 600px) {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.font.large}),(function(e){return e.theme.font.small})),Xn=Te.d.section(G||(G=Object(He.a)(["\n  width: 100%;\n  height: 22em;\n  z-index: 0;\n  overflow: hidden;\n"]))),Kn=Te.d.img(Q||(Q=Object(He.a)(["\n  width: 110%;\n  height: 100%;\n  object-fit: cover;\n  transform: rotateZ(-4deg) translateY(-4rem) translateX(-1rem);\n"]))),et=Object(Te.d)(Me)(X||(X=Object(He.a)(["\n  width: 4em;\n  padding: 0;\n  margin: 1em 0 1em 0;\n"]))),nt=function(e){var n=e.onShowModal,t=e.onToggleTheme,r=Object(ve.useContext)(We),o=r.token;return Object(ze.jsxs)(ve.Fragment,{children:[Object(ze.jsxs)(Zn,{children:[Object(ze.jsx)(Qn,{children:Object(ze.jsx)(Jn,{to:Ve,children:"Food Order App"})}),Object(ze.jsxs)(Yn,{children:[!o&&Object(ze.jsx)(et,{variant:"brown",children:Object(ze.jsx)(Gn,{to:Re,children:"Login"})}),o&&Object(ze.jsx)(et,{variant:"brown",onClick:r.logoutHandler,children:"Logout"}),Object(ze.jsx)(qn,{onShowModal:n}),Object(ze.jsx)($n,{onToggleTheme:t})]})]}),Object(ze.jsx)(Xn,{children:Object(ze.jsx)(Kn,{src:"https://nessarestaurant.com/wp-content/uploads/2018/11/Restaurant-Food.jpg",alt:"Restaurant Image"})}),Object(ze.jsx)(_n,{})]})},tt=Object(Te.e)(K||(K=Object(He.a)(["\n     from {opacity: 0;}\n     to {opacity: 1;}\n"]))),rt=Te.d.div(ee||(ee=Object(He.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 300%;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 5;\n  animation: "," 2s;\n"])),tt),ot=function(e){var n=e.onHideModalHandler;return Object(ze.jsx)(rt,{onClick:n})},ct=function(e){return""!==e.trim()&&e.length>2&&!e.includes(" ")},it=function(e){return/^([A-Z]{3,})( [0-9]{1,})?$/i.test(e)},at=function(e){return/^([0-9]{2})(-[0-9]{3})?$/i.test(e)},lt=function(e){return/^([0-9]{3})( [0-9]{3})( [0-9]{3})?$/i.test(e)&&e.trim().length>9},dt=function(e){var n=e.onAddNewOrder,t=an(ct),r=t.inputValue,o=t.isValid,c=t.hasError,i=t.onChangeInputHandler,a=t.onBlurInputHandler,l=t.clearInput,d=an(it),s=d.inputValue,u=d.isValid,b=d.hasError,m=d.onChangeInputHandler,j=d.onBlurInputHandler,h=d.clearInput,x=an(at),f=x.inputValue,p=x.isValid,O=x.hasError,g=x.onChangeInputHandler,v=x.onBlurInputHandler,w=x.clearInput,k=an(lt),y=k.inputValue,C=k.isValid,S=k.hasError,I=k.onChangeInputHandler,H=k.onBlurInputHandler,T=k.clearInput,B=!1;o&&u&&p&&C&&(B=!0);return Object(ze.jsx)("form",{action:"",children:Object(ze.jsxs)(yn,{children:[Object(ze.jsxs)(ut,{children:[Object(ze.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(ze.jsx)(bt,{error:c,type:"text",id:"name",onChange:i,onBlur:a,value:r})]}),c&&Object(ze.jsx)(mt,{children:"name must be longer than 2 letters"}),Object(ze.jsxs)(ut,{children:[Object(ze.jsx)("label",{htmlFor:"adress",children:"Adress:"}),Object(ze.jsx)(bt,{error:b,type:"text",id:"adress",placeholder:"Street Number",onChange:m,onBlur:j,value:s})]}),b&&Object(ze.jsx)(mt,{children:"Adress must be longer than 3 letters and must contain number"}),Object(ze.jsxs)(ut,{children:[Object(ze.jsx)("label",{htmlFor:"zip",children:"Post Code:"}),Object(ze.jsx)(bt,{error:O,type:"text",id:"zip",placeholder:"xx-xxx",onChange:g,onBlur:v,value:f})]}),O&&Object(ze.jsx)(mt,{children:"Post code must contain 5 numbers"}),Object(ze.jsxs)(ut,{children:[Object(ze.jsx)("label",{htmlFor:"telephone",children:"Telephone:"}),Object(ze.jsx)(bt,{error:S,type:"tel",id:"telephone",placeholder:"xxx xxx xxx",onChange:I,onBlur:H,value:y})]}),S&&Object(ze.jsx)(mt,{children:"Phone number must contain 9 numbers (xxx xxx xxx)"}),Object(ze.jsx)(jt,{children:Object(ze.jsx)(ht,{variant:"brown",disabled:!B,onClick:function(e){(e.preventDefault(),B)&&(n({userName:r,adress:s,zipCode:f,phoneNumber:y}),l(),h(),w(),T())},children:"Submit"})})]})})},st=Object(Te.e)(ne||(ne=Object(He.a)(["\n    from {opacity: 0;}\n    to {opacity: 1;}\n"]))),ut=Te.d.section(te||(te=Object(He.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 2em 0 2em;\n  animation: "," 1s;\n\n  @media (max-width: 600px) {\n    font-size: ",";\n  }\n"])),st,(function(e){return e.theme.font.extraSmall})),bt=Te.d.input(re||(re=Object(He.a)(["\n  width: 70%;\n  outline: none;\n  border: ",";\n  background: ",";\n  border-radius: 5px;\n  font-weight: bold;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 5px;\n"])),(function(e){return e.error?"1px solid red":"1px solid rgba(197, 196, 196, 0.973)"}),(function(e){return e.error?"#ff00004e":"none"})),mt=Te.d.p(oe||(oe=Object(He.a)(["\n  color: ",";\n  font-size: ",";\n  text-align: end;\n  margin: 0 3em 0 0;\n\n  @media (max-width: 600px) {\n    font-size: 7px;\n  }\n"])),(function(e){return e.theme.color.errorColor}),(function(e){return e.theme.font.extraSmall})),jt=Te.d.section(ce||(ce=Object(He.a)(["\n  text-align: center;\n  margin: 1em 0 1em 0;\n  animation: "," 1s;\n"])),st),ht=Object(Te.d)(Me)(ie||(ie=Object(He.a)(["\n  &:disabled {\n    background-color: ",";\n    color: black;\n    border-color: ",";\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.theme.color.submitButtonColor}),(function(e){return e.theme.color.submitButtonColor})),xt=function(e){var n=e.onHideModalHandler,t=Object(ve.useContext)(En),r=Object(ve.useState)(!1),o=Object(Se.a)(r,2),c=o[0],i=o[1],a=Object(ve.useState)(null),l=Object(Se.a)(a,2),d=l[0],s=l[1],u=Object(ve.useState)(!1),b=Object(Se.a)(u,2),m=b[0],j=b[1],h=Object(ve.useState)(!1),x=Object(Se.a)(h,2),f=x[0],p=x[1],O=function(){var e=Object(Ue.a)(Le.a.mark((function e(n){return Le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(null),j(!1),!(t.totalAmount>0)){e.next=22;break}return p(!0),e.prev=4,e.next=7,fetch("https://food-order-app-5f14c-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({id:n.userName+" "+Math.random(),usersData:n,orderData:t.items}),headers:{"Content-Type":"application/json"}});case 7:if(e.sent.ok){e.next=12;break}throw new Error("something went wrong, try again");case 12:j(!0);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),s(e.t0.message);case 18:p(!1),t.clearCart(),e.next=24;break;case 22:j(!1),s("Add something to your Cart !");case 24:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(n){return e.apply(this,arguments)}}(),g="".concat(t.totalAmount.toFixed(2),"$"),v=Object(ze.jsxs)(pt,{children:[Object(ze.jsx)(Ot,{variant:"white",onClick:n,children:"Close"}),Object(ze.jsx)(Me,{variant:"brown",onClick:function(){i(!0)},children:"Order"})]}),w=Object(ze.jsxs)(ve.Fragment,{children:[Object(ze.jsx)(vt,{children:"Thank you for order !"}),Object(ze.jsx)(pt,{children:Object(ze.jsx)(Ot,{variant:"brown",onClick:n,children:"Close"})})]}),k=Object(ze.jsxs)(ve.Fragment,{children:[Object(ze.jsxs)(ft,{children:[Object(ze.jsx)("span",{children:"Total:"}),Object(ze.jsx)("span",{children:g})]}),d&&Object(ze.jsx)(gt,{children:d}),f&&Object(ze.jsx)(wt,{children:Object(ze.jsx)(Ne,{})}),c&&!m&&Object(ze.jsx)(dt,{onAddNewOrder:O}),!c&&v]});return Object(ze.jsx)("footer",{children:m?w:k})},ft=Te.d.section(ae||(ae=Object(He.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 2em;\n  font-size: 1.2rem;\n  font-weight: bold;\n\n  @media (max-width: 600px) {\n    margin: 1em;\n  }\n"]))),pt=Te.d.section(le||(le=Object(He.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1em;\n"]))),Ot=Object(Te.d)(Me)(de||(de=Object(He.a)(["\n  margin-right: 5px;\n  width: 5rem;\n  border-radius: 20px;\n"]))),gt=Te.d.p(se||(se=Object(He.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 12px;\n"])),(function(e){return e.theme.color.errorColor})),vt=Te.d.p(ue||(ue=Object(He.a)(["\n  margin-top: 1em;\n  color: ",";\n  text-align: center;\n"])),(function(e){return e.theme.color.main})),wt=Te.d.div(be||(be=Object(He.a)(["\n  text-align: center;\n"]))),kt=function(e){var n=e.title,t=e.price,r=e.amount,o=e.onAdd,c=e.onRemove;return Object(ze.jsxs)(yt,{children:[Object(ze.jsxs)(yn,{children:[Object(ze.jsx)(wn,{children:n}),Object(ze.jsx)(St,{children:"".concat(t,"$")})]}),Object(ze.jsxs)(Ct,{children:[Object(ze.jsx)(wn,{children:"Quantity:"}),Object(ze.jsx)(It,{children:r})]}),Object(ze.jsxs)(Ct,{children:[Object(ze.jsx)(Me,{variant:"white",onClick:c,children:"-"}),Object(ze.jsx)(Me,{variant:"white",onClick:o,children:"+"})]})]})},yt=Te.d.li(me||(me=Object(He.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  border-bottom: 2px solid ",";\n  margin: 1em;\n\n  @media (max-width: 600px) {\n    font-size: ",";\n    margin: 1em;\n  }\n"])),(function(e){return e.theme.color.normal}),(function(e){return e.theme.color.main}),(function(e){return e.theme.font.extraSmall})),Ct=Object(Te.d)(yn)(je||(je=Object(He.a)(["\n  flex-direction: row;\n  align-items: center;\n"]))),St=Object(Te.d)(wn)(he||(he=Object(He.a)(["\n  color: black;\n"]))),It=Te.d.div(xe||(xe=Object(He.a)(["\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 0.5em;\n  font-size: 0.7em;\n  font-weight: bold;\n  color: ",";\n"])),(function(e){return e.theme.color.main}),(function(e){return e.theme.color.boldColor})),Ht=function(e){var n=e.onHideModalHandler,t=Object(ve.useContext)(En),r=function(e){t.addItem(Object(In.a)(Object(In.a)({},e),{},{amount:1}))},o=function(e){t.removeItem(e)};return Object(ze.jsxs)(Bt,{children:[Object(ze.jsx)(At,{children:t.items.map((function(e){return Object(ze.jsx)(kt,{id:e.id,title:e.title,price:e.price,amount:e.amount,onRemove:o.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))}),Object(ze.jsx)(xt,{onHideModalHandler:n})]})},Tt=Object(Te.e)(fe||(fe=Object(He.a)(["\n    from {top: -300px;}\n    to {top: 5vh;}\n"]))),Bt=Object(Te.d)(Ye)(pe||(pe=Object(He.a)(["\n  position: fixed;\n  top: 5vh;\n  left: 28%;\n  overflow: hidden;\n  width: 80%;\n  max-width: 35em;\n  z-index: 25;\n  animation: "," 1s;\n  background: ",";\n\n  @media (max-width: 600px) {\n    max-height: 35em;\n    left: 10%;\n  }\n"])),Tt,(function(e){return e.theme.color.normal})),At=Te.d.ul(Oe||(Oe=Object(He.a)(["\n  max-height: 10em;\n  overflow: scroll;\n"]))),zt=function(e){var n=e.onHideModalHandler,t=document.getElementById("modal-root");return Object(ze.jsxs)(ve.Fragment,{children:[ye.a.createPortal(Object(ze.jsx)(ot,{onHideModalHandler:n}),t),ye.a.createPortal(Object(ze.jsx)(Ht,{onHideModalHandler:n}),t)]})},Et={color:{main:"#ff6347ca",normal:"white",background:"gray",navBackground:"black",boldColor:"#c72d12",focusInput:"#ff63476f",errorColor:"red",submitButtonColor:"#ccc",darkButtonColor:"#5f3028",darkButtonColorHover:"#ad3824",lightButtonColor:"white",lightButtonColorHover:"#b6b6b66f",fontColor:"white"},font:{extraSmall10:"10px",extraSmall:"12px",small:"18px",large:"20px",extraLarge:"24px"}},Mt={color:{main:"#ff6347ca",normal:"#e6e6e6",background:"white",navBackground:"rgba(255, 255, 255, 0.945)",boldColor:"#c72d12",focusInput:"#ff63476f",errorColor:"red",submitButtonColor:"#ccc",darkButtonColor:"#5f3028",darkButtonColorHover:"#ad3824",lightButtonColor:"white",lightButtonColorHover:"#b6b6b66f",fontColor:"black"},font:{extraSmall10:"10px",extraSmall:"12px",small:"18px",large:"20px",extraLarge:"24px"}},Nt=t(17),Ft={items:[],totalAmount:0},Dt=function(e,n){if("ADD_ITEM"===n.type){var t,r=e.totalAmount+n.item.price*n.item.amount,o=e.items.findIndex((function(e){return e.id===n.item.id})),c=e.items[o];if(c){var i=Object(In.a)(Object(In.a)({},c),{},{amount:c.amount+n.item.amount});(t=Object(Nt.a)(e.items))[o]=i}else t=e.items.concat(n.item);return{items:t,totalAmount:r}}if("REMOVE_ITEM"===n.type){var a,l=e.items.findIndex((function(e){return e.id===n.id})),d=e.items[l],s=e.totalAmount-d.price;if(1===d.amount)a=e.items.filter((function(e){return e.id!==n.id}));else{var u=Object(In.a)(Object(In.a)({},d),{},{amount:d.amount-1});(a=Object(Nt.a)(e.items))[l]=u}return{items:a,totalAmount:s}}return n.type,Ft},Vt=function(e){var n=Object(ve.useReducer)(Dt,Ft),t=Object(Se.a)(n,2),r=t[0],o=t[1],c={items:r.items,totalAmount:r.totalAmount,addItem:function(e){o({type:"ADD_ITEM",item:e})},removeItem:function(e){o({type:"REMOVE_ITEM",id:e})},clearCart:function(){o({type:"CLEAR_ITEMS"})}};return Object(ze.jsx)(En.Provider,{value:c,children:e.children})},Rt=function(e){var n=(new Date).getTime();return new Date(e).getTime()-n},qt=function(e){var n,t=e.children,r=Object(Ie.f)(),o=function(){var e=localStorage.getItem("userToken"),n=localStorage.getItem("expiresTime"),t=Rt(n);return n<=1e4?(localStorage.removeItem("userToken"),localStorage.removeItem("expiresTime"),null):{existToken:e,remainingUserTime:t}}();n=o?o.existToken:null;var c=Object(ve.useState)(n),i=Object(Se.a)(c,2),a=i[0],l=i[1],d=!!a,s=Object(ve.useCallback)((function(){l(null),localStorage.removeItem("userToken"),localStorage.removeItem("expiresTime"),ge&&clearTimeout(ge),r(Re)}));Object(ve.useEffect)((function(){o&&(console.log(o.remainingUserTime),ge=setTimeout(s,o.remainingUserTime))}),[o,s]);var u={token:a,isUserSignedIn:d,loginHandler:function(e,n){l(e),localStorage.setItem("userToken",e),localStorage.setItem("expiresTime",n);var t=Rt(n);ge=setTimeout(s,t)},logoutHandler:s};return Object(ze.jsx)(We.Provider,{value:u,children:t})};var Pt=function(){var e=Object(ve.useState)(!1),n=Object(Se.a)(e,2),t=n[0],r=n[1],o=Object(ve.useState)(!1),c=Object(Se.a)(o,2),i=c[0],a=c[1];return Object(ze.jsx)(qt,{children:Object(ze.jsx)(Vt,{children:Object(ze.jsxs)(Te.a,{theme:i?Mt:Et,children:[Object(ze.jsx)(Ae,{}),t&&Object(ze.jsx)(zt,{onHideModalHandler:function(){r(!1)}}),Object(ze.jsx)(nt,{onShowModal:function(){r(!0)},onToggleTheme:function(){a((function(e){return!e}))}}),Object(ze.jsxs)(Ie.c,{children:[Object(ze.jsx)(Ie.a,{path:Re,element:Object(ze.jsx)(cn,{})}),Object(ze.jsx)(Ie.a,{path:qe,element:Object(ze.jsx)(gn,{})}),Object(ze.jsx)(Ie.a,{path:Ve,exact:!0,element:Object(ze.jsx)(Rn,{})})]})]})})})};ye.a.render(Object(ze.jsx)(Ce.a,{children:Object(ze.jsx)(Pt,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.74a685a2.chunk.js.map