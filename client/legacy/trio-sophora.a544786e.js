import{_ as e,a as t,b as r,c as a,i as n,s as o,d as s,S as i,M as c,e as l,f as u,g as d,q as f,h as p,j as m,k as h,n as g,o as v,p as k,r as S,u as b,v as E,x,y,z as T,A as R,l as D,t as V,m as I,w as $,B as z,C,H as P,K as A,J as B,E as L}from"./client.816e3df5.js";function w(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=t(e);if(a){var s=t(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return r(this,n)}}function j(e,t,r){var a=e.slice();return a[5]=t[r],a[7]=r,a}function H(e,t,r){var a=e.slice();return a[8]=t[r],a[7]=r,a}function M(e){var t,r=e[8]+"";return{c:function(){t=l("p")},l:function(e){t=p(e,"P",{}),D(t).forEach(m)},m:function(e,a){S(e,t,a),t.innerHTML=r},p:function(e,a){1&a&&r!==(r=e[8]+"")&&(t.innerHTML=r)},d:function(e){e&&m(t)}}}function G(e){var t,r,a,n,o,s,i,c,d,f=e[3](e[5],e[0].language)+"",g=e[4](e[5])+"",b=e[2](e[5],e[0].language)+"";return{c:function(){t=l("li"),r=l("span"),a=V(f),n=V("\n                        ("),o=V(g),s=V(")\n                        "),i=l("div"),c=V(b),d=u(),this.h()},l:function(e){t=p(e,"LI",{class:!0});var l=D(t);r=p(l,"SPAN",{class:!0});var u=D(r);a=I(u,f),u.forEach(m),n=I(l,"\n                        ("),o=I(l,g),s=I(l,")\n                        "),i=p(l,"DIV",{class:!0});var v=D(i);c=I(v,b),v.forEach(m),d=h(l),l.forEach(m),this.h()},h:function(){v(r,"class","repertoire--item-composer svelte-1ak7bex"),v(i,"class","repertoire--item-title"),v(t,"class","repertoire--item svelte-1ak7bex")},m:function(e,l){S(e,t,l),k(t,r),k(r,a),k(t,n),k(t,o),k(t,s),k(t,i),k(i,c),k(t,d)},p:function(e,t){1&t&&f!==(f=e[3](e[5],e[0].language)+"")&&$(a,f),1&t&&b!==(b=e[2](e[5],e[0].language)+"")&&$(c,b)},d:function(e){e&&m(t)}}}function K(e){for(var t,r,a,n,o,s,i,c,d,f,g,b,E,x,y,T,R,L,w,K,N,F,O,U,W,q=e[1].title[e[0].language]+"",J=e[1].repertoire.title[e[0].language]+"",_=e[1].text[e[0].language],Z=[],Q=0;Q<_.length;Q+=1)Z[Q]=M(H(e,_,Q));for(var X=e[1].repertoire.pieces,Y=[],ee=0;ee<X.length;ee+=1)Y[ee]=G(j(e,X,ee));return{c:function(){t=l("img"),r=u(),a=l("div"),n=l("h1"),o=V(q),s=u(),i=l("div"),c=l("picture"),d=l("source"),f=u(),g=l("source"),b=u(),E=l("source"),x=u(),y=l("img"),R=u(),L=l("div"),w=l("section");for(var e=0;e<Z.length;e+=1)Z[e].c();K=u(),N=l("section"),F=l("h3"),O=V(J),U=u(),W=l("ul");for(var p=0;p<Y.length;p+=1)Y[p].c();this.h()},l:function(e){t=p(e,"IMG",{src:!0,alt:!0,class:!0}),r=h(e),a=p(e,"DIV",{class:!0});var l=D(a);n=p(l,"H1",{});var u=D(n);o=I(u,q),u.forEach(m),l.forEach(m),s=h(e),i=p(e,"DIV",{id:!0,class:!0});var v=D(i);c=p(v,"PICTURE",{class:!0});var k=D(c);d=p(k,"SOURCE",{media:!0,srcset:!0}),f=h(k),g=p(k,"SOURCE",{srcset:!0}),b=h(k),E=p(k,"SOURCE",{srcset:!0}),x=h(k),y=p(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(m),v.forEach(m),R=h(e),L=p(e,"DIV",{id:!0,class:!0});var S=D(L);w=p(S,"SECTION",{id:!0,class:!0});for(var T=D(w),V=0;V<Z.length;V+=1)Z[V].l(T);T.forEach(m),K=h(S),N=p(S,"SECTION",{id:!0,class:!0});var $=D(N);F=p($,"H3",{class:!0});var z=D(F);O=I(z,J),z.forEach(m),U=h($),W=p($,"UL",{class:!0});for(var C=D(W),P=0;P<Y.length;P+=1)Y[P].l(C);C.forEach(m),$.forEach(m),S.forEach(m),this.h()},h:function(){t.src!=="/images/trio-sophora-mobile.jpg"&&v(t,"src","/images/trio-sophora-mobile.jpg"),v(t,"alt","Das Trio Sophora."),v(t,"class","pic-mobile svelte-1ak7bex"),v(a,"class","title-container"),v(d,"media","(max-width: 512px)"),v(d,"srcset","/images/trio-sophora-512.jpg"),v(g,"srcset","/images/trio-sophora-1024.jpg"),v(E,"srcset","/images/trio-sophora-1512.jpg 2x"),y.src!=="/images/trio-sophora-1512.jpg"&&v(y,"src","/images/trio-sophora-1512.jpg"),v(y,"alt","Das Trio Sophora."),v(y,"class","pic-desktop svelte-1ak7bex"),v(c,"class","picture"),v(i,"id","picture-std"),v(i,"class","svelte-1ak7bex"),v(w,"id","biography"),v(w,"class","svelte-1ak7bex"),v(F,"class","svelte-1ak7bex"),v(W,"class","repertoire-list"),v(N,"id","repertoire"),v(N,"class","svelte-1ak7bex"),v(L,"id","content"),v(L,"class","svelte-1ak7bex")},m:function(e,l){S(e,t,l),S(e,r,l),S(e,a,l),k(a,n),k(n,o),S(e,s,l),S(e,i,l),k(i,c),k(c,d),k(c,f),k(c,g),k(c,b),k(c,E),k(c,x),k(c,y),S(e,R,l),S(e,L,l),k(L,w);for(var u=0;u<Z.length;u+=1)Z[u].m(w,null);k(L,K),k(L,N),k(N,F),k(F,O),k(N,U),k(N,W);for(var p=0;p<Y.length;p+=1)Y[p].m(W,null)},p:function(e,t){if(1&t&&q!==(q=e[1].title[e[0].language]+"")&&$(o,q),3&t){var r;for(_=e[1].text[e[0].language],r=0;r<_.length;r+=1){var a=H(e,_,r);Z[r]?Z[r].p(a,t):(Z[r]=M(a),Z[r].c(),Z[r].m(w,null))}for(;r<Z.length;r+=1)Z[r].d(1);Z.length=_.length}if(1&t&&J!==(J=e[1].repertoire.title[e[0].language]+"")&&$(O,J),31&t){var n;for(X=e[1].repertoire.pieces,n=0;n<X.length;n+=1){var s=j(e,X,n);Y[n]?Y[n].p(s,t):(Y[n]=G(s),Y[n].c(),Y[n].m(W,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=X.length}},i:function(e){T||z((function(){(T=C(y,B,{})).start()}))},o:P,d:function(e){e&&m(t),e&&m(r),e&&m(a),e&&m(s),e&&m(i),e&&m(R),e&&m(L),A(Z,e),A(Y,e)}}}function N(e){var t,r,a,n,o;return document.title=t="Louise Augoyard | "+e[1].title[e[0].language],n=new c({props:{$$slots:{default:[K]},$$scope:{ctx:e}}}),{c:function(){r=l("meta"),a=u(),d(n.$$.fragment),this.h()},l:function(e){var t=f('[data-svelte="svelte-19kvw51"]',document.head);r=p(t,"META",{name:!0,content:!0}),t.forEach(m),a=h(e),g(n.$$.fragment,e),this.h()},h:function(){v(r,"name","description"),v(r,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,t){k(document.head,r),S(e,a,t),b(n,e,t),o=!0},p:function(e,r){var a=E(r,1)[0];(!o||3&a)&&t!==(t="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=t);var s={};1025&a&&(s.$$scope={dirty:a,ctx:e}),n.$set(s)},i:function(e){o||(x(n.$$.fragment,e),o=!0)},o:function(e){y(n.$$.fragment,e),o=!1},d:function(e){m(r),e&&m(a),T(n,e)}}}function F(e,t,r){var a;R(e,L,(function(e){return r(0,a=e)}));return[a,{title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun. <a href='https://www.trio-sophora.com' target='_blank'>Voir le site internet.</a>"],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen. <a href='https://www.trio-sophora.com' target='_blank'>Zur Webseite.</a>"],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Prélude à l'après-midi d'un faune",de:"Prélude à l'après-midi d'un faune",en:"Prélude à l'après-midi d'un faune"}},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour flûte, alto et harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},function(e,t){return"string"==typeof e.title?e.title:e.title[t]},function(e,t){return"string"==typeof e.composer.name?e.composer.name:e.composer.name[t]},function(e){return 2===e.composer.dates.length?"".concat(e.composer.dates[0],"–").concat(e.composer.dates[1]):"*".concat(e.composer.dates[0])}]}var O=function(t){e(c,i);var r=w(c);function c(e){var t;return a(this,c),t=r.call(this),n(s(t),e,F,N,o,{}),t}return c}();export default O;
