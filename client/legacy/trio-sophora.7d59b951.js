import{_ as e,a as r,b as t,c as a,i as n,s as o,d as s,S as i,M as c,e as l,f as u,g as d,q as f,h as p,j as m,k as h,n as g,o as v,p as S,r as k,u as E,v as b,x as y,y as T,z as R,A as D,l as V,t as I,m as $,w as z,B as C,C as P,H as q,K as A,J as B,E as L}from"./client.b49d5a1a.js";function w(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(a){var s=r(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return t(this,n)}}function x(e,r,t){var a=e.slice();return a[5]=r[t],a[7]=t,a}function j(e,r,t){var a=e.slice();return a[8]=r[t],a[7]=t,a}function H(e){var r,t=e[8]+"";return{c:function(){r=l("p")},l:function(e){r=p(e,"P",{}),V(r).forEach(m)},m:function(e,a){k(e,r,a),r.innerHTML=t},p:function(e,a){1&a&&t!==(t=e[8]+"")&&(r.innerHTML=t)},d:function(e){e&&m(r)}}}function M(e){var r,t,a,n,o,s,i,c,d,f=e[3](e[5],e[0].language)+"",g=e[4](e[5])+"",E=e[2](e[5],e[0].language)+"";return{c:function(){r=l("li"),t=l("span"),a=I(f),n=I("\r\n                        ("),o=I(g),s=I(")\r\n                        "),i=l("div"),c=I(E),d=u(),this.h()},l:function(e){r=p(e,"LI",{class:!0});var l=V(r);t=p(l,"SPAN",{class:!0});var u=V(t);a=$(u,f),u.forEach(m),n=$(l,"\r\n                        ("),o=$(l,g),s=$(l,")\r\n                        "),i=p(l,"DIV",{class:!0});var v=V(i);c=$(v,E),v.forEach(m),d=h(l),l.forEach(m),this.h()},h:function(){v(t,"class","repertoire--item-composer svelte-qhic3o"),v(i,"class","repertoire--item-title"),v(r,"class","repertoire--item svelte-qhic3o")},m:function(e,l){k(e,r,l),S(r,t),S(t,a),S(r,n),S(r,o),S(r,s),S(r,i),S(i,c),S(r,d)},p:function(e,r){1&r&&f!==(f=e[3](e[5],e[0].language)+"")&&z(a,f),1&r&&E!==(E=e[2](e[5],e[0].language)+"")&&z(c,E)},d:function(e){e&&m(r)}}}function G(e){for(var r,t,a,n,o,s,i,c,d,f,g,E,b,y,T,R,D,L,w,G,K,N,F,O,U,W=e[1].title[e[0].language]+"",J=e[1].repertoire.title[e[0].language]+"",_=e[1].text[e[0].language],Z=[],Q=0;Q<_.length;Q+=1)Z[Q]=H(j(e,_,Q));for(var X=e[1].repertoire.pieces,Y=[],ee=0;ee<X.length;ee+=1)Y[ee]=M(x(e,X,ee));return{c:function(){r=l("img"),t=u(),a=l("div"),n=l("h1"),o=I(W),s=u(),i=l("div"),c=l("picture"),d=l("source"),f=u(),g=l("source"),E=u(),b=l("source"),y=u(),T=l("img"),D=u(),L=l("div"),w=l("section");for(var e=0;e<Z.length;e+=1)Z[e].c();G=u(),K=l("section"),N=l("h3"),F=I(J),O=u(),U=l("ul");for(var p=0;p<Y.length;p+=1)Y[p].c();this.h()},l:function(e){r=p(e,"IMG",{src:!0,alt:!0,class:!0}),t=h(e),a=p(e,"DIV",{class:!0});var l=V(a);n=p(l,"H1",{});var u=V(n);o=$(u,W),u.forEach(m),l.forEach(m),s=h(e),i=p(e,"DIV",{id:!0,class:!0});var v=V(i);c=p(v,"PICTURE",{class:!0});var S=V(c);d=p(S,"SOURCE",{media:!0,srcset:!0}),f=h(S),g=p(S,"SOURCE",{srcset:!0}),E=h(S),b=p(S,"SOURCE",{srcset:!0}),y=h(S),T=p(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(m),v.forEach(m),D=h(e),L=p(e,"DIV",{id:!0,class:!0});var k=V(L);w=p(k,"SECTION",{id:!0,class:!0});for(var R=V(w),I=0;I<Z.length;I+=1)Z[I].l(R);R.forEach(m),G=h(k),K=p(k,"SECTION",{id:!0,class:!0});var z=V(K);N=p(z,"H3",{class:!0});var C=V(N);F=$(C,J),C.forEach(m),O=h(z),U=p(z,"UL",{class:!0});for(var P=V(U),q=0;q<Y.length;q+=1)Y[q].l(P);P.forEach(m),z.forEach(m),k.forEach(m),this.h()},h:function(){r.src!=="/images/trio-sophora-mobile.jpg"&&v(r,"src","/images/trio-sophora-mobile.jpg"),v(r,"alt","Das Trio Sophora."),v(r,"class","pic-mobile svelte-qhic3o"),v(a,"class","title-container"),v(d,"media","(max-width: 512px)"),v(d,"srcset","/images/trio-sophora-512.jpg"),v(g,"srcset","/images/trio-sophora-1024.jpg"),v(b,"srcset","/images/trio-sophora-1512.jpg 2x"),T.src!=="/images/trio-sophora-1512.jpg"&&v(T,"src","/images/trio-sophora-1512.jpg"),v(T,"alt","Das Trio Sophora."),v(T,"class","pic-desktop svelte-qhic3o"),v(c,"class","picture"),v(i,"id","picture-std"),v(i,"class","svelte-qhic3o"),v(w,"id","biography"),v(w,"class","svelte-qhic3o"),v(N,"class","svelte-qhic3o"),v(U,"class","repertoire-list"),v(K,"id","repertoire"),v(K,"class","svelte-qhic3o"),v(L,"id","content"),v(L,"class","svelte-qhic3o")},m:function(e,l){k(e,r,l),k(e,t,l),k(e,a,l),S(a,n),S(n,o),k(e,s,l),k(e,i,l),S(i,c),S(c,d),S(c,f),S(c,g),S(c,E),S(c,b),S(c,y),S(c,T),k(e,D,l),k(e,L,l),S(L,w);for(var u=0;u<Z.length;u+=1)Z[u].m(w,null);S(L,G),S(L,K),S(K,N),S(N,F),S(K,O),S(K,U);for(var p=0;p<Y.length;p+=1)Y[p].m(U,null)},p:function(e,r){if(1&r&&W!==(W=e[1].title[e[0].language]+"")&&z(o,W),3&r){var t;for(_=e[1].text[e[0].language],t=0;t<_.length;t+=1){var a=j(e,_,t);Z[t]?Z[t].p(a,r):(Z[t]=H(a),Z[t].c(),Z[t].m(w,null))}for(;t<Z.length;t+=1)Z[t].d(1);Z.length=_.length}if(1&r&&J!==(J=e[1].repertoire.title[e[0].language]+"")&&z(F,J),31&r){var n;for(X=e[1].repertoire.pieces,n=0;n<X.length;n+=1){var s=x(e,X,n);Y[n]?Y[n].p(s,r):(Y[n]=M(s),Y[n].c(),Y[n].m(U,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=X.length}},i:function(e){R||C((function(){(R=P(T,B,{})).start()}))},o:q,d:function(e){e&&m(r),e&&m(t),e&&m(a),e&&m(s),e&&m(i),e&&m(D),e&&m(L),A(Z,e),A(Y,e)}}}function K(e){var r,t,a,n,o;return document.title=r="Louise Augoyard | "+e[1].title[e[0].language],n=new c({props:{$$slots:{default:[G]},$$scope:{ctx:e}}}),{c:function(){t=l("meta"),a=u(),d(n.$$.fragment),this.h()},l:function(e){var r=f('[data-svelte="svelte-19kvw51"]',document.head);t=p(r,"META",{name:!0,content:!0}),r.forEach(m),a=h(e),g(n.$$.fragment,e),this.h()},h:function(){v(t,"name","description"),v(t,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,r){S(document.head,t),k(e,a,r),E(n,e,r),o=!0},p:function(e,t){var a=b(t,1)[0];(!o||3&a)&&r!==(r="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=r);var s={};1025&a&&(s.$$scope={dirty:a,ctx:e}),n.$set(s)},i:function(e){o||(y(n.$$.fragment,e),o=!0)},o:function(e){T(n.$$.fragment,e),o=!1},d:function(e){m(t),e&&m(a),R(n,e)}}}function N(e,r,t){var a;D(e,L,(function(e){return t(0,a=e)}));return[a,{title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun. <a href='https://www.trio-sophora.com' target='_blank'>Voir le site internet.</a>"],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen. <a href='https://www.trio-sophora.com' target='_blank'>Zur Webseite.</a>"],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Prélude à l'après-midi d'un faune",de:"Prélude à l'après-midi d'un faune",en:"Prélude à l'après-midi d'un faune"}},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour flûte, alto et harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},function(e,r){return"string"==typeof e.title?e.title:e.title[r]},function(e,r){return"string"==typeof e.composer.name?e.composer.name:e.composer.name[r]},function(e){return 2===e.composer.dates.length?"".concat(e.composer.dates[0],"–").concat(e.composer.dates[1]):"*".concat(e.composer.dates[0])}]}var F=function(r){e(c,i);var t=w(c);function c(e){var r;return a(this,c),r=t.call(this),n(s(r),e,N,K,o,{}),r}return c}();export default F;