import{_ as n,a as t,b as e,c,i as a,s as o,d as i,S as r,e as u,f as s,t as l,h as f,j as h,m as d,k as m,l as p,o as v,q as g,r as b,v as y,w as z,y as E,K as S,x as k,A as N,L as w,B as P,C as T,G as I,M as x,O as B,F as R,P as A,H as K,D as $,E as j}from"./client.f67dc904.js";function C(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,o=t(n);if(c){var i=t(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return e(this,a)}}function F(n){var t,e;return{c:function(){t=u("p"),e=l("Wenn Sie Fragen zu Unterricht oder Konzerten haben, oder gern zu mir Kontakt aufnehmen möchten, schreiben Sie mir einfach!"),this.h()},l:function(n){t=f(n,"P",{id:!0,class:!0});var c=h(t);e=m(c,"Wenn Sie Fragen zu Unterricht oder Konzerten haben, oder gern zu mir Kontakt aufnehmen möchten, schreiben Sie mir einfach!"),c.forEach(p),this.h()},h:function(){v(t,"id","contact-intro"),v(t,"class","svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e)},d:function(n){n&&p(t)}}}function D(n){var t,e;return{c:function(){t=u("p"),e=l("Pour toute information concernant les cours ou les concerts, ou simplement pour prendre contact avec moi, vous povez m'écrire val le formulaire ci-dessous."),this.h()},l:function(n){t=f(n,"P",{id:!0,class:!0});var c=h(t);e=m(c,"Pour toute information concernant les cours ou les concerts, ou simplement pour prendre contact avec moi, vous povez m'écrire val le formulaire ci-dessous."),c.forEach(p),this.h()},h:function(){v(t,"id","contact-intro"),v(t,"class","svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e)},d:function(n){n&&p(t)}}}function O(n){var t,e;return{c:function(){t=u("p"),e=l("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal."),this.h()},l:function(n){t=f(n,"P",{class:!0});var c=h(t);e=m(c,"Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal."),c.forEach(p),this.h()},h:function(){v(t,"class","contact-feedback svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e)},p:I,i:I,o:I,d:function(n){n&&p(t)}}}function L(n){var t,e;return{c:function(){t=u("p"),e=l("Danke, ich habe Ihre Nachricht erhalten und werde so bald wie möglich antworten."),this.h()},l:function(n){t=f(n,"P",{class:!0});var c=h(t);e=m(c,"Danke, ich habe Ihre Nachricht erhalten und werde so bald wie möglich antworten."),c.forEach(p),this.h()},h:function(){v(t,"class","contact-feedback svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e)},p:I,i:I,o:I,d:function(n){n&&p(t)}}}function U(n){var t,e;return{c:function(){t=u("p"),e=l("Nachricht wird gesendet..."),this.h()},l:function(n){t=f(n,"P",{class:!0});var c=h(t);e=m(c,"Nachricht wird gesendet..."),c.forEach(p),this.h()},h:function(){v(t,"class","contact-feedback svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e)},p:I,i:I,o:I,d:function(n){n&&p(t)}}}function W(n){var t,e,c,a,o,i,r,y,N,P,T,I,x,$,j="fr"===n[6].language?"Envoyer":"Senden",C=n[1].body&&n[3]&&n[2]&&H(n),F=n[1].contact&&n[5]&&n[4]&&M(n);return{c:function(){t=u("textarea"),c=s(),C&&C.c(),a=s(),o=u("input"),r=s(),F&&F.c(),y=s(),N=u("button"),P=l(j),this.h()},l:function(n){t=f(n,"TEXTAREA",{id:!0,name:!0,placeholder:!0,class:!0}),h(t).forEach(p),c=d(n),C&&C.l(n),a=d(n),o=f(n,"INPUT",{id:!0,name:!0,type:!0,placeholder:!0,class:!0}),r=d(n),F&&F.l(n),y=d(n),N=f(n,"BUTTON",{id:!0,disabled:!0,class:!0});var e=h(N);P=m(e,j),e.forEach(p),this.h()},h:function(){v(t,"id","body"),v(t,"name","msg_body"),v(t,"placeholder",e="fr"===n[6].language?"Écrivez ici votre message.":"Schreiben Sie hier Ihre Nachricht."),v(t,"class","svelte-1faz3ad"),v(o,"id","contact"),v(o,"name","msg_contact"),v(o,"type","text"),v(o,"placeholder",(n[6].language,i="Email/Telefon")),v(o,"class","svelte-1faz3ad"),v(N,"id","submit"),N.disabled=T=n[3]||n[5],v(N,"class","svelte-1faz3ad")},m:function(e,i){g(e,t,i),B(t,n[1].body),g(e,c,i),C&&C.m(e,i),g(e,a,i),g(e,o,i),B(o,n[1].contact),g(e,r,i),F&&F.m(e,i),g(e,y,i),g(e,N,i),b(N,P),I=!0,x||($=[R(t,"input",n[9]),R(t,"focus",n[8]),R(t,"blur",n[10]),R(o,"input",n[11]),R(o,"blur",n[12]),R(N,"click",A(n[7]))],x=!0)},p:function(n,c){(!I||64&c&&e!==(e="fr"===n[6].language?"Écrivez ici votre message.":"Schreiben Sie hier Ihre Nachricht."))&&v(t,"placeholder",e),2&c&&B(t,n[1].body),n[1].body&&n[3]&&n[2]?C?(C.p(n,c),14&c&&k(C,1)):((C=H(n)).c(),k(C,1),C.m(a.parentNode,a)):C&&(w(),E(C,1,1,(function(){C=null})),S()),(!I||64&c&&i!==(n[6].language,i="Email/Telefon"))&&v(o,"placeholder",i),2&c&&o.value!==n[1].contact&&B(o,n[1].contact),n[1].contact&&n[5]&&n[4]?F?(F.p(n,c),50&c&&k(F,1)):((F=M(n)).c(),k(F,1),F.m(y.parentNode,y)):F&&(w(),E(F,1,1,(function(){F=null})),S()),(!I||64&c)&&j!==(j="fr"===n[6].language?"Envoyer":"Senden")&&z(P,j),(!I||40&c&&T!==(T=n[3]||n[5]))&&(N.disabled=T)},i:function(n){I||(k(C),k(F),I=!0)},o:function(n){E(C),E(F),I=!1},d:function(n){n&&p(t),n&&p(c),C&&C.d(n),n&&p(a),n&&p(o),n&&p(r),F&&F.d(n),n&&p(y),n&&p(N),x=!1,K($)}}}function H(n){var t,e,c,a;return{c:function(){t=u("p"),e=l(n[3]),this.h()},l:function(c){t=f(c,"P",{id:!0,class:!0});var a=h(t);e=m(a,n[3]),a.forEach(p),this.h()},h:function(){v(t,"id","message-error"),v(t,"class","contact-form--error svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e),a=!0},p:function(n,t){(!a||8&t)&&z(e,n[3])},i:function(n){a||(P((function(){c||(c=x(t,$,{x:100,duration:500},!0)),c.run(1)})),a=!0)},o:function(n){c||(c=x(t,$,{x:100,duration:500},!1)),c.run(0),a=!1},d:function(n){n&&p(t),n&&c&&c.end()}}}function M(n){var t,e,c,a;return{c:function(){t=u("p"),e=l(n[5]),this.h()},l:function(c){t=f(c,"P",{id:!0,class:!0});var a=h(t);e=m(a,n[5]),a.forEach(p),this.h()},h:function(){v(t,"id","contact-error"),v(t,"class","contact-form--error svelte-1faz3ad")},m:function(n,c){g(n,t,c),b(t,e),a=!0},p:function(n,t){(!a||32&t)&&z(e,n[5])},i:function(n){a||(P((function(){c||(c=x(t,$,{x:100,duration:500},!0)),c.run(1)})),a=!0)},o:function(n){c||(c=x(t,$,{x:100,duration:500},!1)),c.run(0),a=!1},d:function(n){n&&p(t),n&&c&&c.end()}}}function _(n){var t,e,c,a,o,i,r,N,I,x,B,R,A="fr"===n[6].language?"Contact":"Kontakt";function K(n,t){return"fr"===n[6].language?D:F}var j=K(n),C=j(n),H=[W,U,L,O],M=[];function _(n,t){return n[0]?"submitted"===n[0]?1:"sent"===n[0]?2:"error"===n[0]?3:-1:0}return~(I=_(n))&&(x=M[I]=H[I](n)),{c:function(){t=u("article"),e=u("img"),c=s(),a=u("h1"),o=l(A),i=s(),C.c(),r=s(),N=u("form"),x&&x.c(),this.h()},l:function(n){t=f(n,"ARTICLE",{});var u=h(t);e=f(u,"IMG",{class:!0,src:!0,alt:!0}),c=d(u),a=f(u,"H1",{});var s=h(a);o=m(s,A),s.forEach(p),i=d(u),C.l(u),r=d(u),N=f(u,"FORM",{id:!0,class:!0});var l=h(N);x&&x.l(l),l.forEach(p),u.forEach(p),this.h()},h:function(){v(e,"class","pic-mobile"),e.src!=="/images/contact-mobile.jpg"&&v(e,"src","/images/contact-mobile.jpg"),v(e,"alt","Louise Augoyard"),v(N,"id","contact-form"),v(N,"class","svelte-1faz3ad")},m:function(n,u){g(n,t,u),b(t,e),b(t,c),b(t,a),b(a,o),b(t,i),C.m(t,null),b(t,r),b(t,N),~I&&M[I].m(N,null),R=!0},p:function(n,e){var c=y(e,1)[0];(!R||64&c)&&A!==(A="fr"===n[6].language?"Contact":"Kontakt")&&z(o,A),j!==(j=K(n))&&(C.d(1),(C=j(n))&&(C.c(),C.m(t,r)));var a=I;(I=_(n))===a?~I&&M[I].p(n,c):(x&&(w(),E(M[a],1,1,(function(){M[a]=null})),S()),~I?((x=M[I])||(x=M[I]=H[I](n)).c(),k(x,1),x.m(N,null)):x=null)},i:function(n){R||(k(x),B||P((function(){(B=T(t,$,{y:-25,duration:1e3})).start()})),R=!0)},o:function(n){E(x),R=!1},d:function(n){n&&p(t),C.d(),~I&&M[I].d()}}}function G(n,t,e){var c;N(n,j,(function(n){return e(6,c=n)}));var a,o=null,i={body:"",contact:""},r=!1,u=null,s=!1;return n.$$.update=function(){var t,c,o;2&n.$$.dirty&&e(3,(t=i.body,c=[],t||c.push("Bitte geben Sie eine Nachricht ein."),t.split(/\W/).length<15&&c.push("Ihre Nachricht ist zu kurz."),/[a-z]+\.[a-z]+/.test(t)&&c.push("Ihre Nachricht darf keine Links enthalten."),u=c.join("\n")||null)),2&n.$$.dirty&&e(5,(o=i.contact,a=o.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||o.replace(/[^0-9}]/g,"").length>4?null:"Bitte geben Sie eine gültige Email-Adresse oder Telefonnummer an."))},[o,i,r,u,s,a,c,function(){e(0,o="submitted"),fetch("https://louise-mail.vercel.app/api/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(n){if(!n.ok)throw new Error("Something bad happened.");e(0,o="sent")})).catch((function(n){console.log(n),e(0,o="error")}))},function(){var n,t=document.documentElement.clientHeight,e=document.getElementById("contact-form").getBoundingClientRect(),c=document.documentElement.clientWidth>440?80:15;e.top<0?n=e.top-c:e.bottom-t>-14&&(n=e.bottom-t+15,e.top<n&&(n=e.top-15)),n&&window.scrollBy({left:0,top:n,behavior:"smooth"})},function(){i.body=this.value,e(1,i)},function(){e(2,r=!0)},function(){i.contact=this.value,e(1,i)},function(){e(4,s=!0)}]}var Z=function(t){n(u,r);var e=C(u);function u(n){var t;return c(this,u),t=e.call(this),a(i(t),n,G,_,o,{}),t}return u}();export default Z;
