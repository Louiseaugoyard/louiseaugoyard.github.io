import{_ as e,a as t,b as r,c as n,i as a,s as o,d as s,S as i,M as c,e as l,f as u,g as d,q as f,h as p,j as m,k as h,n as g,o as v,p as S,r as E,u as k,v as y,x as b,y as R,z as T,A as D,t as I,l as V,m as $,w as z,B as C,C as P,H as q,K as A,J as B,E as x}from"./client.30e77a8f.js";function L(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=t(e);if(n){var s=t(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return r(this,a)}}function j(e,t,r){var n=e.slice();return n[5]=t[r],n[7]=r,n}function G(e,t,r){var n=e.slice();return n[8]=t[r],n[7]=r,n}function H(e){var t,r,n=e[8]+"";return{c:function(){t=l("p"),r=I(n)},l:function(e){t=p(e,"P",{});var a=V(t);r=$(a,n),a.forEach(m)},m:function(e,n){E(e,t,n),S(t,r)},p:function(e,t){1&t&&n!==(n=e[8]+"")&&z(r,n)},d:function(e){e&&m(t)}}}function K(e){var t,r,n,a,o,s,i,c,d,f=e[3](e[5],e[0].language)+"",g=e[4](e[5])+"",k=e[2](e[5],e[0].language)+"";return{c:function(){t=l("li"),r=l("span"),n=I(f),a=I("\n                        ("),o=I(g),s=I(")\n                        "),i=l("div"),c=I(k),d=u(),this.h()},l:function(e){t=p(e,"LI",{class:!0});var l=V(t);r=p(l,"SPAN",{class:!0});var u=V(r);n=$(u,f),u.forEach(m),a=$(l,"\n                        ("),o=$(l,g),s=$(l,")\n                        "),i=p(l,"DIV",{class:!0});var v=V(i);c=$(v,k),v.forEach(m),d=h(l),l.forEach(m),this.h()},h:function(){v(r,"class","repertoire--item-composer svelte-qhic3o"),v(i,"class","repertoire--item-title"),v(t,"class","repertoire--item svelte-qhic3o")},m:function(e,l){E(e,t,l),S(t,r),S(r,n),S(t,a),S(t,o),S(t,s),S(t,i),S(i,c),S(t,d)},p:function(e,t){1&t&&f!==(f=e[3](e[5],e[0].language)+"")&&z(n,f),1&t&&k!==(k=e[2](e[5],e[0].language)+"")&&z(c,k)},d:function(e){e&&m(t)}}}function M(e){for(var t,r,n,a,o,s,i,c,d,f,g,k,y,b,R,T,D,x,L,M,N,w,F,O,U,J=e[1].title[e[0].language]+"",W=e[1].repertoire.title[e[0].language]+"",_=e[1].text[e[0].language],Q=[],X=0;X<_.length;X+=1)Q[X]=H(G(e,_,X));for(var Y=e[1].repertoire.pieces,Z=[],ee=0;ee<Y.length;ee+=1)Z[ee]=K(j(e,Y,ee));return{c:function(){t=l("img"),r=u(),n=l("div"),a=l("h1"),o=I(J),s=u(),i=l("div"),c=l("picture"),d=l("source"),f=u(),g=l("source"),k=u(),y=l("source"),b=u(),R=l("img"),D=u(),x=l("div"),L=l("section");for(var e=0;e<Q.length;e+=1)Q[e].c();M=u(),N=l("section"),w=l("h3"),F=I(W),O=u(),U=l("ul");for(var p=0;p<Z.length;p+=1)Z[p].c();this.h()},l:function(e){t=p(e,"IMG",{src:!0,alt:!0,class:!0}),r=h(e),n=p(e,"DIV",{class:!0});var l=V(n);a=p(l,"H1",{});var u=V(a);o=$(u,J),u.forEach(m),l.forEach(m),s=h(e),i=p(e,"DIV",{id:!0,class:!0});var v=V(i);c=p(v,"PICTURE",{class:!0});var S=V(c);d=p(S,"SOURCE",{media:!0,srcset:!0}),f=h(S),g=p(S,"SOURCE",{srcset:!0}),k=h(S),y=p(S,"SOURCE",{srcset:!0}),b=h(S),R=p(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(m),v.forEach(m),D=h(e),x=p(e,"DIV",{id:!0,class:!0});var E=V(x);L=p(E,"SECTION",{id:!0,class:!0});for(var T=V(L),I=0;I<Q.length;I+=1)Q[I].l(T);T.forEach(m),M=h(E),N=p(E,"SECTION",{id:!0,class:!0});var z=V(N);w=p(z,"H3",{class:!0});var C=V(w);F=$(C,W),C.forEach(m),O=h(z),U=p(z,"UL",{class:!0});for(var P=V(U),q=0;q<Z.length;q+=1)Z[q].l(P);P.forEach(m),z.forEach(m),E.forEach(m),this.h()},h:function(){t.src!=="/images/trio-sophora-mobile.jpg"&&v(t,"src","/images/trio-sophora-mobile.jpg"),v(t,"alt","Das Trio Sophora."),v(t,"class","pic-mobile svelte-qhic3o"),v(n,"class","title-container"),v(d,"media","(max-width: 512px)"),v(d,"srcset","/images/trio-sophora-512.jpg"),v(g,"srcset","/images/trio-sophora-1024.jpg"),v(y,"srcset","/images/trio-sophora-1512.jpg 2x"),R.src!=="/images/trio-sophora-1512.jpg"&&v(R,"src","/images/trio-sophora-1512.jpg"),v(R,"alt","Das Trio Sophora."),v(R,"class","pic-desktop svelte-qhic3o"),v(c,"class","picture"),v(i,"id","picture-std"),v(i,"class","svelte-qhic3o"),v(L,"id","biography"),v(L,"class","svelte-qhic3o"),v(w,"class","svelte-qhic3o"),v(U,"class","repertoire-list"),v(N,"id","repertoire"),v(N,"class","svelte-qhic3o"),v(x,"id","content"),v(x,"class","svelte-qhic3o")},m:function(e,l){E(e,t,l),E(e,r,l),E(e,n,l),S(n,a),S(a,o),E(e,s,l),E(e,i,l),S(i,c),S(c,d),S(c,f),S(c,g),S(c,k),S(c,y),S(c,b),S(c,R),E(e,D,l),E(e,x,l),S(x,L);for(var u=0;u<Q.length;u+=1)Q[u].m(L,null);S(x,M),S(x,N),S(N,w),S(w,F),S(N,O),S(N,U);for(var p=0;p<Z.length;p+=1)Z[p].m(U,null)},p:function(e,t){if(1&t&&J!==(J=e[1].title[e[0].language]+"")&&z(o,J),3&t){var r;for(_=e[1].text[e[0].language],r=0;r<_.length;r+=1){var n=G(e,_,r);Q[r]?Q[r].p(n,t):(Q[r]=H(n),Q[r].c(),Q[r].m(L,null))}for(;r<Q.length;r+=1)Q[r].d(1);Q.length=_.length}if(1&t&&W!==(W=e[1].repertoire.title[e[0].language]+"")&&z(F,W),31&t){var a;for(Y=e[1].repertoire.pieces,a=0;a<Y.length;a+=1){var s=j(e,Y,a);Z[a]?Z[a].p(s,t):(Z[a]=K(s),Z[a].c(),Z[a].m(U,null))}for(;a<Z.length;a+=1)Z[a].d(1);Z.length=Y.length}},i:function(e){T||C((function(){(T=P(R,B,{})).start()}))},o:q,d:function(e){e&&m(t),e&&m(r),e&&m(n),e&&m(s),e&&m(i),e&&m(D),e&&m(x),A(Q,e),A(Z,e)}}}function N(e){var t,r,n,a,o;return document.title=t="Louise Augoyard | "+e[1].title[e[0].language],a=new c({props:{$$slots:{default:[M]},$$scope:{ctx:e}}}),{c:function(){r=l("meta"),n=u(),d(a.$$.fragment),this.h()},l:function(e){var t=f('[data-svelte="svelte-19kvw51"]',document.head);r=p(t,"META",{name:!0,content:!0}),t.forEach(m),n=h(e),g(a.$$.fragment,e),this.h()},h:function(){v(r,"name","description"),v(r,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,t){S(document.head,r),E(e,n,t),k(a,e,t),o=!0},p:function(e,r){var n=y(r,1)[0];(!o||3&n)&&t!==(t="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=t);var s={};1025&n&&(s.$$scope={dirty:n,ctx:e}),a.$set(s)},i:function(e){o||(b(a.$$.fragment,e),o=!0)},o:function(e){R(a.$$.fragment,e),o=!1},d:function(e){m(r),e&&m(n),T(a,e)}}}function w(e,t,r){var n;D(e,x,(function(e){return r(0,n=e)}));return[n,{title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun."],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen."],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Prélude à l'après-midi d'un faune",de:"Prélude à l'après-midi d'un faune",en:"Prélude à l'après-midi d'un faune"}},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour flûte, alto et harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},function(e,t){return"string"==typeof e.title?e.title:e.title[t]},function(e,t){return"string"==typeof e.composer.name?e.composer.name:e.composer.name[t]},function(e){return 2===e.composer.dates.length?"".concat(e.composer.dates[0],"–").concat(e.composer.dates[1]):"*".concat(e.composer.dates[0])}]}var F=function(t){e(c,i);var r=L(c);function c(e){var t;return n(this,c),t=r.call(this),a(s(t),e,w,N,o,{}),t}return c}();export default F;
