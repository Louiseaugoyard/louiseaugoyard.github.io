import{_ as e,a as t,b as r,c as n,i as a,s as o,d as s,S as i,M as c,e as l,f as u,g as f,q as p,h as d,j as m,k as h,n as g,o as v,p as S,r as E,u as k,v as b,x as y,y as R,z as T,A as D,t as I,l as V,m as $,w as z,B as A,C as q,H as B,K as C,J as x,E as L}from"./client.3acb9358.js";function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=t(e);if(n){var s=t(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return r(this,a)}}function j(e,t,r){var n=e.slice();return n[5]=t[r],n[7]=r,n}function H(e,t,r){var n=e.slice();return n[8]=t[r],n[7]=r,n}function G(e){var t,r,n=e[8]+"";return{c:function(){t=l("p"),r=I(n)},l:function(e){t=d(e,"P",{});var a=V(t);r=$(a,n),a.forEach(m)},m:function(e,n){E(e,t,n),S(t,r)},p:function(e,t){1&t&&n!==(n=e[8]+"")&&z(r,n)},d:function(e){e&&m(t)}}}function F(e){var t,r,n,a,o,s,i,c,f,p=e[3](e[5],e[0].language)+"",g=e[4](e[5])+"",k=e[2](e[5],e[0].language)+"";return{c:function(){t=l("li"),r=l("span"),n=I(p),a=I("\r\n                        ("),o=I(g),s=I(")\r\n                        "),i=l("div"),c=I(k),f=u(),this.h()},l:function(e){t=d(e,"LI",{class:!0});var l=V(t);r=d(l,"SPAN",{class:!0});var u=V(r);n=$(u,p),u.forEach(m),a=$(l,"\r\n                        ("),o=$(l,g),s=$(l,")\r\n                        "),i=d(l,"DIV",{class:!0});var v=V(i);c=$(v,k),v.forEach(m),f=h(l),l.forEach(m),this.h()},h:function(){v(r,"class","repertoire--item-composer svelte-qhic3o"),v(i,"class","repertoire--item-title"),v(t,"class","repertoire--item svelte-qhic3o")},m:function(e,l){E(e,t,l),S(t,r),S(r,n),S(t,a),S(t,o),S(t,s),S(t,i),S(i,c),S(t,f)},p:function(e,t){1&t&&p!==(p=e[3](e[5],e[0].language)+"")&&z(n,p),1&t&&k!==(k=e[2](e[5],e[0].language)+"")&&z(c,k)},d:function(e){e&&m(t)}}}function K(e){for(var t,r,n,a,o,s,i,c,f,p,g,k,b,y,R,T,D,L,P,K,M,N,w,O,U,J=e[1].title[e[0].language]+"",W=e[1].repertoire.title[e[0].language]+"",_=e[1].text[e[0].language],Q=[],X=0;X<_.length;X+=1)Q[X]=G(H(e,_,X));for(var Y=e[1].repertoire.pieces,Z=[],ee=0;ee<Y.length;ee+=1)Z[ee]=F(j(e,Y,ee));return{c:function(){t=l("img"),r=u(),n=l("div"),a=l("h1"),o=I(J),s=u(),i=l("div"),c=l("picture"),f=l("source"),p=u(),g=l("source"),k=u(),b=l("source"),y=u(),R=l("img"),D=u(),L=l("div"),P=l("section");for(var e=0;e<Q.length;e+=1)Q[e].c();K=u(),M=l("section"),N=l("h3"),w=I(W),O=u(),U=l("ul");for(var d=0;d<Z.length;d+=1)Z[d].c();this.h()},l:function(e){t=d(e,"IMG",{src:!0,alt:!0,class:!0}),r=h(e),n=d(e,"DIV",{class:!0});var l=V(n);a=d(l,"H1",{});var u=V(a);o=$(u,J),u.forEach(m),l.forEach(m),s=h(e),i=d(e,"DIV",{id:!0,class:!0});var v=V(i);c=d(v,"PICTURE",{class:!0});var S=V(c);f=d(S,"SOURCE",{media:!0,srcset:!0}),p=h(S),g=d(S,"SOURCE",{srcset:!0}),k=h(S),b=d(S,"SOURCE",{srcset:!0}),y=h(S),R=d(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(m),v.forEach(m),D=h(e),L=d(e,"DIV",{id:!0,class:!0});var E=V(L);P=d(E,"SECTION",{id:!0,class:!0});for(var T=V(P),I=0;I<Q.length;I+=1)Q[I].l(T);T.forEach(m),K=h(E),M=d(E,"SECTION",{id:!0,class:!0});var z=V(M);N=d(z,"H3",{class:!0});var A=V(N);w=$(A,W),A.forEach(m),O=h(z),U=d(z,"UL",{class:!0});for(var q=V(U),B=0;B<Z.length;B+=1)Z[B].l(q);q.forEach(m),z.forEach(m),E.forEach(m),this.h()},h:function(){t.src!=="/images/trio-sophora-mobile.jpg"&&v(t,"src","/images/trio-sophora-mobile.jpg"),v(t,"alt","Das Trio Sophora."),v(t,"class","pic-mobile svelte-qhic3o"),v(n,"class","title-container"),v(f,"media","(max-width: 512px)"),v(f,"srcset","/images/trio-sophora-512.jpg"),v(g,"srcset","/images/trio-sophora-1024.jpg"),v(b,"srcset","/images/trio-sophora-1512.jpg 2x"),R.src!=="/images/trio-sophora-1512.jpg"&&v(R,"src","/images/trio-sophora-1512.jpg"),v(R,"alt","Das Trio Sophora."),v(R,"class","pic-desktop svelte-qhic3o"),v(c,"class","picture"),v(i,"id","picture-std"),v(i,"class","svelte-qhic3o"),v(P,"id","biography"),v(P,"class","svelte-qhic3o"),v(N,"class","svelte-qhic3o"),v(U,"class","repertoire-list"),v(M,"id","repertoire"),v(M,"class","svelte-qhic3o"),v(L,"id","content"),v(L,"class","svelte-qhic3o")},m:function(e,l){E(e,t,l),E(e,r,l),E(e,n,l),S(n,a),S(a,o),E(e,s,l),E(e,i,l),S(i,c),S(c,f),S(c,p),S(c,g),S(c,k),S(c,b),S(c,y),S(c,R),E(e,D,l),E(e,L,l),S(L,P);for(var u=0;u<Q.length;u+=1)Q[u].m(P,null);S(L,K),S(L,M),S(M,N),S(N,w),S(M,O),S(M,U);for(var d=0;d<Z.length;d+=1)Z[d].m(U,null)},p:function(e,t){if(1&t&&J!==(J=e[1].title[e[0].language]+"")&&z(o,J),3&t){var r;for(_=e[1].text[e[0].language],r=0;r<_.length;r+=1){var n=H(e,_,r);Q[r]?Q[r].p(n,t):(Q[r]=G(n),Q[r].c(),Q[r].m(P,null))}for(;r<Q.length;r+=1)Q[r].d(1);Q.length=_.length}if(1&t&&W!==(W=e[1].repertoire.title[e[0].language]+"")&&z(w,W),31&t){var a;for(Y=e[1].repertoire.pieces,a=0;a<Y.length;a+=1){var s=j(e,Y,a);Z[a]?Z[a].p(s,t):(Z[a]=F(s),Z[a].c(),Z[a].m(U,null))}for(;a<Z.length;a+=1)Z[a].d(1);Z.length=Y.length}},i:function(e){T||A((function(){(T=q(R,x,{})).start()}))},o:B,d:function(e){e&&m(t),e&&m(r),e&&m(n),e&&m(s),e&&m(i),e&&m(D),e&&m(L),C(Q,e),C(Z,e)}}}function M(e){var t,r,n,a,o;return document.title=t="Louise Augoyard | "+e[1].title[e[0].language],a=new c({props:{$$slots:{default:[K]},$$scope:{ctx:e}}}),{c:function(){r=l("meta"),n=u(),f(a.$$.fragment),this.h()},l:function(e){var t=p('[data-svelte="svelte-19kvw51"]',document.head);r=d(t,"META",{name:!0,content:!0}),t.forEach(m),n=h(e),g(a.$$.fragment,e),this.h()},h:function(){v(r,"name","description"),v(r,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,t){S(document.head,r),E(e,n,t),k(a,e,t),o=!0},p:function(e,r){var n=b(r,1)[0];(!o||3&n)&&t!==(t="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=t);var s={};1025&n&&(s.$$scope={dirty:n,ctx:e}),a.$set(s)},i:function(e){o||(y(a.$$.fragment,e),o=!0)},o:function(e){R(a.$$.fragment,e),o=!1},d:function(e){m(r),e&&m(n),T(a,e)}}}function N(e,t,r){var n;D(e,L,(function(e){return r(0,n=e)}));return[n,{title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun."],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen."],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour Flûte, Alto et Harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},function(e,t){return"string"==typeof e.title?e.title:e.title[t]},function(e,t){return"string"==typeof e.composer.name?e.composer.name:e.composer.name[t]},function(e){return 2===e.composer.dates.length?"".concat(e.composer.dates[0],"–").concat(e.composer.dates[1]):"*".concat(e.composer.dates[0])}]}var w=function(t){e(c,i);var r=P(c);function c(e){var t;return n(this,c),t=r.call(this),a(s(t),e,N,M,o,{}),t}return c}();export default w;
