import{_ as e,a as t,b as r,c as a,i as n,s,d as o,S as i,L as c,e as l,h as u,l as f,j as p,r as g,v as m,O as d,x as h,y as v,g as $,n as b,u as E,z as y,A as R,E as k,t as S,m as j,p as I,w as C,f as D,k as P,o as T,B as V,C as w,J as A,H as B,K as L,M as z,q as x}from"./client.fdf0d182.js";function G(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=t(e);if(a){var o=t(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return r(this,n)}}function H(e){var t,r,a=e[1].default,n=c(a,e,e[0],null);return{c:function(){t=l("article"),n&&n.c()},l:function(e){t=u(e,"ARTICLE",{});var r=f(t);n&&n.l(r),r.forEach(p)},m:function(e,a){g(e,t,a),n&&n.m(t,null),r=!0},p:function(e,t){var r=m(t,1)[0];n&&n.p&&1&r&&d(n,a,e,e[0],r,null,null)},i:function(e){r||(h(n,e),r=!0)},o:function(e){v(n,e),r=!1},d:function(e){e&&p(t),n&&n.d(e)}}}function U(e,t,r){var a=t.$$slots,n=void 0===a?{}:a,s=t.$$scope;return e.$set=function(e){"$$scope"in e&&r(0,s=e.$$scope)},[s,n]}var M=function(t){e(c,i);var r=G(c);function c(e){var t;return a(this,c),t=r.call(this),n(o(t),e,U,H,s,{}),t}return c}();function O(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=t(e);if(a){var o=t(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return r(this,n)}}function F(e,t,r){var a=e.slice();return a[5]=t[r],a[7]=r,a}function K(e,t,r){var a=e.slice();return a[8]=t[r],a[7]=r,a}function N(e){var t,r,a=e[8]+"";return{c:function(){t=l("p"),r=S(a)},l:function(e){t=u(e,"P",{});var n=f(t);r=j(n,a),n.forEach(p)},m:function(e,a){g(e,t,a),I(t,r)},p:function(e,t){1&t&&a!==(a=e[8]+"")&&C(r,a)},d:function(e){e&&p(t)}}}function W(e){var t,r,a,n,s,o,i,c,m,d=e[3](e[5],e[0].language)+"",h=e[4](e[5])+"",v=e[2](e[5],e[0].language)+"";return{c:function(){t=l("li"),r=l("span"),a=S(d),n=S("\r\n                        ("),s=S(h),o=S(")\r\n                        "),i=l("div"),c=S(v),m=D(),this.h()},l:function(e){t=u(e,"LI",{class:!0});var l=f(t);r=u(l,"SPAN",{class:!0});var g=f(r);a=j(g,d),g.forEach(p),n=j(l,"\r\n                        ("),s=j(l,h),o=j(l,")\r\n                        "),i=u(l,"DIV",{class:!0});var $=f(i);c=j($,v),$.forEach(p),m=P(l),l.forEach(p),this.h()},h:function(){T(r,"class","repertoire--item-composer svelte-bhpra8"),T(i,"class","repertoire--item-title"),T(t,"class","repertoire--item svelte-bhpra8")},m:function(e,l){g(e,t,l),I(t,r),I(r,a),I(t,n),I(t,s),I(t,o),I(t,i),I(i,c),I(t,m)},p:function(e,t){1&t&&d!==(d=e[3](e[5],e[0].language)+"")&&C(a,d),1&t&&v!==(v=e[2](e[5],e[0].language)+"")&&C(c,v)},d:function(e){e&&p(t)}}}function q(e){for(var t,r,a,n,s,o,i,c,m,d,h,v,$,b,E,y,R,k,z,x,G,H,U,M,O,q,J,_,Q,X,Y,Z,ee,te,re,ae,ne,se,oe,ie,ce,le,ue,fe,pe,ge,me,de,he,ve=e[1].title+"",$e=e[1].repertoire.title[e[0].language]+"",be=e[1].text[e[0].language],Ee=[],ye=0;ye<be.length;ye+=1)Ee[ye]=N(K(e,be,ye));for(var Re=e[1].repertoire.pieces,ke=[],Se=0;Se<Re.length;Se+=1)ke[Se]=W(F(e,Re,Se));return{c:function(){t=l("div"),r=l("picture"),a=l("source"),n=D(),s=l("img"),i=D(),c=l("picture"),m=l("source"),d=D(),h=l("img"),$=D(),b=l("picture"),E=l("source"),y=D(),R=l("img"),z=D(),x=l("div"),G=l("section"),H=l("h2"),U=S(ve),M=D();for(var e=0;e<Ee.length;e+=1)Ee[e].c();O=D(),q=l("div"),J=l("picture"),_=l("source"),Q=D(),X=l("img"),Z=D(),ee=l("picture"),te=l("source"),re=D(),ae=l("img"),se=D(),oe=l("picture"),ie=l("source"),ce=D(),le=l("img"),fe=D(),pe=l("section"),ge=l("h3"),me=S($e),de=D(),he=l("ul");for(var o=0;o<ke.length;o+=1)ke[o].c();this.h()},l:function(e){t=u(e,"DIV",{id:!0,class:!0});var o=f(t);r=u(o,"PICTURE",{class:!0});var l=f(r);a=u(l,"SOURCE",{srcset:!0}),n=P(l),s=u(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(p),i=P(o),c=u(o,"PICTURE",{class:!0});var g=f(c);m=u(g,"SOURCE",{srcset:!0}),d=P(g),h=u(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(p),$=P(o),b=u(o,"PICTURE",{class:!0});var v=f(b);E=u(v,"SOURCE",{srcset:!0}),y=P(v),R=u(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(p),o.forEach(p),z=P(e),x=u(e,"DIV",{id:!0,class:!0});var k=f(x);G=u(k,"SECTION",{id:!0,class:!0});var S=f(G);H=u(S,"H2",{class:!0});var I=f(H);U=j(I,ve),I.forEach(p),M=P(S);for(var C=0;C<Ee.length;C+=1)Ee[C].l(S);S.forEach(p),O=P(k),q=u(k,"DIV",{id:!0,class:!0});var D=f(q);J=u(D,"PICTURE",{class:!0});var T=f(J);_=u(T,"SOURCE",{srcset:!0}),Q=P(T),X=u(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(p),Z=P(D),ee=u(D,"PICTURE",{class:!0});var V=f(ee);te=u(V,"SOURCE",{scrset:!0}),re=P(V),ae=u(V,"IMG",{src:!0,alt:!0,class:!0}),V.forEach(p),se=P(D),oe=u(D,"PICTURE",{class:!0});var w=f(oe);ie=u(w,"SOURCE",{srcset:!0}),ce=P(w),le=u(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(p),D.forEach(p),fe=P(k),pe=u(k,"SECTION",{id:!0,class:!0});var A=f(pe);ge=u(A,"H3",{class:!0});var B=f(ge);me=j(B,$e),B.forEach(p),de=P(A),he=u(A,"UL",{class:!0});for(var L=f(he),F=0;F<ke.length;F+=1)ke[F].l(L);L.forEach(p),A.forEach(p),k.forEach(p),this.h()},h:function(){T(a,"srcset","/images/tekla-varga-512.jpg 512w"),s.src!=="/images/tekla-varga-1024.jpg"&&T(s,"src","/images/tekla-varga-1024.jpg"),T(s,"alt","Die Flötistin Tekla Varga."),T(s,"class","pic-desktop"),T(r,"class","svelte-bhpra8"),T(m,"srcset","/images/verena-weber-512.jpg 512w"),h.src!=="/images/verena-weber-1024.jpg"&&T(h,"src","/images/verena-weber-1024.jpg"),T(h,"alt","Die Bratschistin Verena Weber."),T(h,"class","pic-desktop"),T(c,"class","svelte-bhpra8"),T(E,"srcset","/images/louise-augoyard-512.jpg 512w"),R.src!=="/images/louise-augoyard-1024.jpg"&&T(R,"src","/images/louise-augoyard-1024.jpg"),T(R,"alt","Die Harfenistin Louise Augoyard."),T(R,"class","pic-desktop"),T(b,"class","svelte-bhpra8"),T(t,"id","pictures-std"),T(t,"class","svelte-bhpra8"),T(H,"class","svelte-bhpra8"),T(G,"id","biography"),T(G,"class","svelte-bhpra8"),T(_,"srcset","/images/tekla-varga-portrait-128.jpg 128w"),X.src!=="/images/tekla-varga-portrait-384.jpg"&&T(X,"src","/images/tekla-varga-portrait-384.jpg"),T(X,"alt","Tekla Varga, Flöte"),T(X,"class","picture svelte-bhpra8"),T(J,"class","svelte-bhpra8"),T(te,"scrset","/images/verena-weber-portrait-128.jpg 128w"),ae.src!=="/images/verena-weber-portrait-384.jpg"&&T(ae,"src","/images/verena-weber-portrait-384.jpg"),T(ae,"alt","Verena Weber, Bratsche"),T(ae,"class","picture svelte-bhpra8"),T(ee,"class","svelte-bhpra8"),T(ie,"srcset","/images/louise-augoyard-portrait-128.jpg 128w"),le.src!=="/images/louise-augoyard-portrait-384.jpg"&&T(le,"src","/images/louise-augoyard-portrait-384.jpg"),T(le,"alt","Louise Augoyard, Harfe"),T(le,"class","picture svelte-bhpra8"),T(oe,"class","svelte-bhpra8"),T(q,"id","pictures-mobile"),T(q,"class","svelte-bhpra8"),T(ge,"class","svelte-bhpra8"),T(he,"class","repertoire-list"),T(pe,"id","repertoire"),T(pe,"class","svelte-bhpra8"),T(x,"id","content"),T(x,"class","svelte-bhpra8")},m:function(e,o){g(e,t,o),I(t,r),I(r,a),I(r,n),I(r,s),I(t,i),I(t,c),I(c,m),I(c,d),I(c,h),I(t,$),I(t,b),I(b,E),I(b,y),I(b,R),g(e,z,o),g(e,x,o),I(x,G),I(G,H),I(H,U),I(G,M);for(var l=0;l<Ee.length;l+=1)Ee[l].m(G,null);I(x,O),I(x,q),I(q,J),I(J,_),I(J,Q),I(J,X),I(q,Z),I(q,ee),I(ee,te),I(ee,re),I(ee,ae),I(q,se),I(q,oe),I(oe,ie),I(oe,ce),I(oe,le),I(x,fe),I(x,pe),I(pe,ge),I(ge,me),I(pe,de),I(pe,he);for(var u=0;u<ke.length;u+=1)ke[u].m(he,null)},p:function(e,t){if(3&t){var r;for(be=e[1].text[e[0].language],r=0;r<be.length;r+=1){var a=K(e,be,r);Ee[r]?Ee[r].p(a,t):(Ee[r]=N(a),Ee[r].c(),Ee[r].m(G,null))}for(;r<Ee.length;r+=1)Ee[r].d(1);Ee.length=be.length}if(1&t&&$e!==($e=e[1].repertoire.title[e[0].language]+"")&&C(me,$e),31&t){var n;for(Re=e[1].repertoire.pieces,n=0;n<Re.length;n+=1){var s=F(e,Re,n);ke[n]?ke[n].p(s,t):(ke[n]=W(s),ke[n].c(),ke[n].m(he,null))}for(;n<ke.length;n+=1)ke[n].d(1);ke.length=Re.length}},i:function(e){o||V((function(){(o=w(s,A,{})).start()})),v||V((function(){(v=w(h,A,{})).start()})),k||V((function(){(k=w(R,A,{})).start()})),Y||V((function(){(Y=w(X,A,{})).start()})),ne||V((function(){(ne=w(ae,A,{})).start()})),ue||V((function(){(ue=w(le,A,{})).start()}))},o:B,d:function(e){e&&p(t),e&&p(z),e&&p(x),L(Ee,e),L(ke,e)}}}function J(e){var t,r;return t=new M({props:{$$slots:{default:[q]},$$scope:{ctx:e}}}),{c:function(){$(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,a){E(t,e,a),r=!0},p:function(e,r){var a=m(r,1)[0],n={};1025&a&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i:function(e){r||(h(t.$$.fragment,e),r=!0)},o:function(e){v(t.$$.fragment,e),r=!1},d:function(e){y(t,e)}}}function _(e,t,r){var a;R(e,k,(function(e){return r(0,a=e)}));return[a,{title:"Trio Sophora",text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun."],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen."],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour Flûte, Alto et Harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},function(e,t){return"string"==typeof e.title?e.title:e.title[t]},function(e,t){return"string"==typeof e.composer.name?e.composer.name:e.composer.name[t]},function(e){return 2===e.composer.dates.length?"".concat(e.composer.dates[0],"–").concat(e.composer.dates[1]):"*".concat(e.composer.dates[0])}]}var Q=function(t){e(c,i);var r=O(c);function c(e){var t;return a(this,c),t=r.call(this),n(o(t),e,_,J,s,{}),t}return c}();function X(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=t(e);if(a){var o=t(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return r(this,n)}}function Y(e){var t,r,a,n,s,o,i,c,m=e[1].title[e[0].language]+"";return i=new Q({}),{c:function(){t=l("img"),r=D(),a=l("div"),n=l("h1"),s=S(m),o=D(),$(i.$$.fragment),this.h()},l:function(e){t=u(e,"IMG",{src:!0,alt:!0,class:!0}),r=P(e),a=u(e,"DIV",{class:!0});var c=f(a);n=u(c,"H1",{});var l=f(n);s=j(l,m),l.forEach(p),c.forEach(p),o=P(e),b(i.$$.fragment,e),this.h()},h:function(){t.src!=="/images/projects-mobile.jpg"&&T(t,"src","/images/projects-mobile.jpg"),T(t,"alt","Bild einer Harfe."),T(t,"class","pic-mobile"),T(a,"class","title-container")},m:function(e,l){g(e,t,l),g(e,r,l),g(e,a,l),I(a,n),I(n,s),g(e,o,l),E(i,e,l),c=!0},p:function(e,t){(!c||1&t)&&m!==(m=e[1].title[e[0].language]+"")&&C(s,m)},i:function(e){c||(h(i.$$.fragment,e),c=!0)},o:function(e){v(i.$$.fragment,e),c=!1},d:function(e){e&&p(t),e&&p(r),e&&p(a),e&&p(o),y(i,e)}}}function Z(e){var t,r,a,n,s;return document.title=t="Louise Augoyard | "+e[1].title[e[0].language],n=new z({props:{$$slots:{default:[Y]},$$scope:{ctx:e}}}),{c:function(){r=l("meta"),a=D(),$(n.$$.fragment),this.h()},l:function(e){var t=x('[data-svelte="svelte-19kvw51"]',document.head);r=u(t,"META",{name:!0,content:!0}),t.forEach(p),a=P(e),b(n.$$.fragment,e),this.h()},h:function(){T(r,"name","description"),T(r,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,t){I(document.head,r),g(e,a,t),E(n,e,t),s=!0},p:function(e,r){var a=m(r,1)[0];(!s||3&a)&&t!==(t="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=t);var o={};5&a&&(o.$$scope={dirty:a,ctx:e}),n.$set(o)},i:function(e){s||(h(n.$$.fragment,e),s=!0)},o:function(e){v(n.$$.fragment,e),s=!1},d:function(e){p(r),e&&p(a),y(n,e)}}}function ee(e,t,r){var a;R(e,k,(function(e){return r(0,a=e)}));return[a,{title:{de:"Projekte",fr:"Projets",en:"Projects"}}]}var te=function(t){e(c,i);var r=X(c);function c(e){var t;return a(this,c),t=r.call(this),n(o(t),e,ee,Z,s,{}),t}return c}();export default te;
