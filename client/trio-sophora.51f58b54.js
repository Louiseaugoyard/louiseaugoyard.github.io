import{S as e,i as r,s as t,M as s,e as a,a as o,c as n,q as i,b as l,d as c,f as u,j as d,k as m,l as p,m as h,n as g,p as f,r as v,u as S,v as k,g as E,t as b,h as T,o as $,w as V,x as I,C as z,F as C,E as D,z as q}from"./client.c3d98366.js";function y(e,r,t){const s=e.slice();return s[5]=r[t],s[7]=t,s}function L(e,r,t){const s=e.slice();return s[8]=r[t],s[7]=t,s}function P(e){let r,t=e[8]+"";return{c(){r=a("p")},l(e){r=l(e,"P",{}),E(r).forEach(c)},m(e,s){h(e,r,s),r.innerHTML=t},p(e,s){1&s&&t!==(t=e[8]+"")&&(r.innerHTML=t)},d(e){e&&c(r)}}}function w(e){let r,t,s,n,i,d,g,f,v,S=e[3](e[5],e[0].language)+"",k=e[4](e[5])+"",V=e[2](e[5],e[0].language)+"";return{c(){r=a("li"),t=a("span"),s=b(S),n=b("\r\n                        ("),i=b(k),d=b(")\r\n                        "),g=a("div"),f=b(V),v=o(),this.h()},l(e){r=l(e,"LI",{class:!0});var a=E(r);t=l(a,"SPAN",{class:!0});var o=E(t);s=T(o,S),o.forEach(c),n=T(a,"\r\n                        ("),i=T(a,k),d=T(a,")\r\n                        "),g=l(a,"DIV",{class:!0});var m=E(g);f=T(m,V),m.forEach(c),v=u(a),a.forEach(c),this.h()},h(){m(t,"class","repertoire--item-composer svelte-qhic3o"),m(g,"class","repertoire--item-title"),m(r,"class","repertoire--item svelte-qhic3o")},m(e,a){h(e,r,a),p(r,t),p(t,s),p(r,n),p(r,i),p(r,d),p(r,g),p(g,f),p(r,v)},p(e,r){1&r&&S!==(S=e[3](e[5],e[0].language)+"")&&$(s,S),1&r&&V!==(V=e[2](e[5],e[0].language)+"")&&$(f,V)},d(e){e&&c(r)}}}function x(e){let r,t,s,n,i,d,g,f,v,S,k,q,x,A,B,R,j,H,M,G,F,N,K,O,U,W,J,_=e[1].title[e[0].language]+"",Z=e[1].repertoire.title[e[0].language]+"",Q=e[1].text[e[0].language],X=[];for(let r=0;r<Q.length;r+=1)X[r]=P(L(e,Q,r));let Y=e[1].repertoire.pieces,ee=[];for(let r=0;r<Y.length;r+=1)ee[r]=w(y(e,Y,r));return{c(){r=a("img"),s=o(),n=a("div"),i=a("h1"),d=b(_),g=o(),f=a("div"),v=a("picture"),S=a("source"),k=o(),q=a("source"),x=o(),A=a("source"),B=o(),R=a("img"),M=o(),G=a("div"),F=a("section");for(let e=0;e<X.length;e+=1)X[e].c();N=o(),K=a("section"),O=a("h3"),U=b(Z),W=o(),J=a("ul");for(let e=0;e<ee.length;e+=1)ee[e].c();this.h()},l(e){r=l(e,"IMG",{src:!0,alt:!0,class:!0}),s=u(e),n=l(e,"DIV",{class:!0});var t=E(n);i=l(t,"H1",{});var a=E(i);d=T(a,_),a.forEach(c),t.forEach(c),g=u(e),f=l(e,"DIV",{id:!0,class:!0});var o=E(f);v=l(o,"PICTURE",{class:!0});var m=E(v);S=l(m,"SOURCE",{media:!0,srcset:!0}),k=u(m),q=l(m,"SOURCE",{srcset:!0}),x=u(m),A=l(m,"SOURCE",{srcset:!0}),B=u(m),R=l(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(c),o.forEach(c),M=u(e),G=l(e,"DIV",{id:!0,class:!0});var p=E(G);F=l(p,"SECTION",{id:!0,class:!0});var h=E(F);for(let e=0;e<X.length;e+=1)X[e].l(h);h.forEach(c),N=u(p),K=l(p,"SECTION",{id:!0,class:!0});var b=E(K);O=l(b,"H3",{class:!0});var $=E(O);U=T($,Z),$.forEach(c),W=u(b),J=l(b,"UL",{class:!0});var V=E(J);for(let e=0;e<ee.length;e+=1)ee[e].l(V);V.forEach(c),b.forEach(c),p.forEach(c),this.h()},h(){r.src!==(t="/images/trio-sophora-mobile.jpg")&&m(r,"src","/images/trio-sophora-mobile.jpg"),m(r,"alt","Das Trio Sophora."),m(r,"class","pic-mobile svelte-qhic3o"),m(n,"class","title-container"),m(S,"media","(max-width: 512px)"),m(S,"srcset","/images/trio-sophora-512.jpg"),m(q,"srcset","/images/trio-sophora-1024.jpg"),m(A,"srcset","/images/trio-sophora-1512.jpg 2x"),R.src!==(j="/images/trio-sophora-1512.jpg")&&m(R,"src","/images/trio-sophora-1512.jpg"),m(R,"alt","Das Trio Sophora."),m(R,"class","pic-desktop svelte-qhic3o"),m(v,"class","picture"),m(f,"id","picture-std"),m(f,"class","svelte-qhic3o"),m(F,"id","biography"),m(F,"class","svelte-qhic3o"),m(O,"class","svelte-qhic3o"),m(J,"class","repertoire-list"),m(K,"id","repertoire"),m(K,"class","svelte-qhic3o"),m(G,"id","content"),m(G,"class","svelte-qhic3o")},m(e,t){h(e,r,t),h(e,s,t),h(e,n,t),p(n,i),p(i,d),h(e,g,t),h(e,f,t),p(f,v),p(v,S),p(v,k),p(v,q),p(v,x),p(v,A),p(v,B),p(v,R),h(e,M,t),h(e,G,t),p(G,F);for(let e=0;e<X.length;e+=1)X[e].m(F,null);p(G,N),p(G,K),p(K,O),p(O,U),p(K,W),p(K,J);for(let e=0;e<ee.length;e+=1)ee[e].m(J,null)},p(e,r){if(1&r&&_!==(_=e[1].title[e[0].language]+"")&&$(d,_),3&r){let t;for(Q=e[1].text[e[0].language],t=0;t<Q.length;t+=1){const s=L(e,Q,t);X[t]?X[t].p(s,r):(X[t]=P(s),X[t].c(),X[t].m(F,null))}for(;t<X.length;t+=1)X[t].d(1);X.length=Q.length}if(1&r&&Z!==(Z=e[1].repertoire.title[e[0].language]+"")&&$(U,Z),31&r){let t;for(Y=e[1].repertoire.pieces,t=0;t<Y.length;t+=1){const s=y(e,Y,t);ee[t]?ee[t].p(s,r):(ee[t]=w(s),ee[t].c(),ee[t].m(J,null))}for(;t<ee.length;t+=1)ee[t].d(1);ee.length=Y.length}},i(e){H||V(()=>{H=I(R,D,{}),H.start()})},o:z,d(e){e&&c(r),e&&c(s),e&&c(n),e&&c(g),e&&c(f),e&&c(M),e&&c(G),C(X,e),C(ee,e)}}}function A(e){let r,t,k,E,b;return document.title=r="Louise Augoyard | "+e[1].title[e[0].language],E=new s({props:{$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){t=a("meta"),k=o(),n(E.$$.fragment),this.h()},l(e){const r=i('[data-svelte="svelte-19kvw51"]',document.head);t=l(r,"META",{name:!0,content:!0}),r.forEach(c),k=u(e),d(E.$$.fragment,e),this.h()},h(){m(t,"name","description"),m(t,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,r){p(document.head,t),h(e,k,r),g(E,e,r),b=!0},p(e,[t]){(!b||3&t)&&r!==(r="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=r);const s={};1025&t&&(s.$$scope={dirty:t,ctx:e}),E.$set(s)},i(e){b||(f(E.$$.fragment,e),b=!0)},o(e){v(E.$$.fragment,e),b=!1},d(e){c(t),e&&c(k),S(E,e)}}}function B(e,r,t){let s;k(e,q,e=>t(0,s=e));return[s,{title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},text:{fr:["Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun. <a href='https://www.trio-sophora.com' target='_blank'>Voir le site internet.</a>"],de:["Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen. <a href='https://www.trio-sophora.com' target='_blank'>Zur Webseite.</a>"],en:[]},repertoire:{title:{fr:"Répertoire",de:"Repertoire",en:"Repertoire"},pieces:[{composer:{name:"Arnold Bax",dates:[1883,1953]},title:"Elegiac Trio"},{composer:{name:"Ludwig van Beethoven",dates:[1770,1827]},arranger:{name:"Louise Augoyard"},title:{en:"Piano sonata in C-sharp minor op. 27 No. 1, first movement",de:"Klaviersonate cis-moll op. 27 Nr. 1, erster Satz",fr:"Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement"}},{composer:{name:"Georges Bizet",dates:[1838,1875]},title:"Entracte de l’Opéra Carmen"},{composer:{name:"Mel Bonis",dates:[1858,1937]},title:"Scènes de la Forêt"},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Prélude à l'après-midi d'un faune",de:"Prélude à l'après-midi d'un faune",en:"Prélude à l'après-midi d'un faune"}},{composer:{name:"Claude Debussy",dates:[1862,1918]},title:{fr:"Sonate pour flûte, alto et harpe",de:"Sonate für Flöte, Viola und Harfe",en:"Sonata for Flute, Viola and Harp"}},{composer:{name:"Sofia Goubaïdoulina",dates:[1931]},title:"Garten von Freuden und Traurigkeiten"},{composer:{name:"Sergueï Prokofiev",dates:[1891,1953]},arranger:{name:"Gilad Cohen"},title:"Suite du Ballet Romeo et Juliette"},{composer:{name:"Sergej Rachmaninoff",dates:[1873,1943]},title:"Vocalise op. 34 Nr. 14"},{composer:{name:"Ladislas de Rohozinski",dates:[1886,1938]},title:"Suite brève"}]}},(e,r)=>"string"==typeof e.title?e.title:e.title[r],(e,r)=>"string"==typeof e.composer.name?e.composer.name:e.composer.name[r],e=>2===e.composer.dates.length?`${e.composer.dates[0]}–${e.composer.dates[1]}`:"*"+e.composer.dates[0]]}export default class extends e{constructor(e){super(),r(this,e,B,A,t,{})}}
