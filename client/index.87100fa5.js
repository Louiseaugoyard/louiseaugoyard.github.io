import{S as e,i as s,s as a,M as t,e as r,a as i,c as o,q as c,b as l,d as n,f as u,j as d,k as p,m as h,n as g,o as m,r as f,v as j,w as v,x as q,t as $,g as k,h as M,l as E,p as y,A as b}from"./client.67cc8e92.js";function A(e){let s,a,t,o,c,d,m,f,j,v,q,b,A,H,T,D,L=e[1].title[e[0].language]+"",P=e[1].projects["de-musica"].title[e[0].language]+"",S=e[1].projects["de-musica"].description[e[0].language]+"";return{c(){s=r("img"),t=i(),o=r("h1"),c=$(L),d=i(),m=r("div"),f=r("a"),j=i(),v=r("a"),q=i(),b=r("a"),A=r("h2"),H=$(P),T=i(),D=r("p"),this.h()},l(e){s=l(e,"IMG",{src:!0,alt:!0,class:!0}),t=u(e),o=l(e,"H1",{});var a=k(o);c=M(a,L),a.forEach(n),d=u(e),m=l(e,"DIV",{id:!0,class:!0});var r=k(m);f=l(r,"A",{id:!0,class:!0,href:!0}),k(f).forEach(n),j=u(r),v=l(r,"A",{id:!0,class:!0,href:!0}),k(v).forEach(n),q=u(r),b=l(r,"A",{id:!0,class:!0,href:!0});var i=k(b);A=l(i,"H2",{id:!0,class:!0});var p=k(A);H=M(p,P),p.forEach(n),T=u(i),D=l(i,"P",{id:!0,class:!0}),k(D).forEach(n),i.forEach(n),r.forEach(n),this.h()},h(){E(s.src,a="/images/projects-mobile.jpg")||p(s,"src","/images/projects-mobile.jpg"),p(s,"alt","Bild einer Harfe."),p(s,"class","pic-mobile"),p(f,"id","trio-sophora"),p(f,"class","project-cell svelte-argcqy"),p(f,"href",e[1].projects["trio-sophora"].route),p(v,"id","duo-esquisse"),p(v,"class","project-cell svelte-argcqy"),p(v,"href",e[1].projects["duo-esquisse"].route),p(A,"id","de-musica--title"),p(A,"class","svelte-argcqy"),p(D,"id","de-musica--desc"),p(D,"class","svelte-argcqy"),p(b,"id","de-musica"),p(b,"class","project-cell svelte-argcqy"),p(b,"href",e[1].projects["de-musica"].route),p(m,"id","projects-table"),p(m,"class","svelte-argcqy")},m(e,a){g(e,s,a),g(e,t,a),g(e,o,a),h(o,c),g(e,d,a),g(e,m,a),h(m,f),h(m,j),h(m,v),h(m,q),h(m,b),h(b,A),h(A,H),h(b,T),h(b,D),D.innerHTML=S},p(e,s){1&s&&L!==(L=e[1].title[e[0].language]+"")&&y(c,L),1&s&&P!==(P=e[1].projects["de-musica"].title[e[0].language]+"")&&y(H,P),1&s&&S!==(S=e[1].projects["de-musica"].description[e[0].language]+"")&&(D.innerHTML=S)},d(e){e&&n(s),e&&n(t),e&&n(o),e&&n(d),e&&n(m)}}}function H(e){let s,a,q,$,k;return document.title=s="Louise Augoyard | "+e[1].title[e[0].language],$=new t({props:{$$slots:{default:[A]},$$scope:{ctx:e}}}),{c(){a=r("meta"),q=i(),o($.$$.fragment),this.h()},l(e){const s=c('[data-svelte="svelte-19kvw51"]',document.head);a=l(s,"META",{name:!0,content:!0}),s.forEach(n),q=u(e),d($.$$.fragment,e),this.h()},h(){p(a,"name","description"),p(a,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,s){h(document.head,a),g(e,q,s),m($,e,s),k=!0},p(e,[a]){(!k||3&a)&&s!==(s="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=s);const t={};5&a&&(t.$$scope={dirty:a,ctx:e}),$.$set(t)},i(e){k||(f($.$$.fragment,e),k=!0)},o(e){j($.$$.fragment,e),k=!1},d(e){n(a),e&&n(q),v($,e)}}}function T(e,s,a){let t;q(e,b,e=>a(0,t=e));return[t,{title:{de:"Projekte",fr:"Projets",en:"Projects"},projects:{"trio-sophora":{route:"projekte/trio-sophora",title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},description:{de:"Flöte, Viola und Harfe",fr:"Flûte, alto et harpe",en:"Flute, Viola and Harp"},image:"images/trio-sophora-logo.svg"},"duo-esquisse":{route:"projekte/duo-esquisse",title:{de:"Duo Esquisse",fr:"Duo Esquisse",en:"Duo Esquisse"},description:{de:"Rezitation, Musik und Live-Malerei",fr:"Récitation, musique et peinture en direct",en:"Recitation, music and live painting"},image:"images/lerche-512.jpg"},"de-musica":{route:"projekte/de-musica",title:{de:"De Musica",fr:"De Musica",en:"De Musica"},description:{de:"Konzertlektüre<br>mit Musik und Philosophie",fr:"Concert-lecture<br>musique & philosophie",en:"Concert Lecture<br>with Music and Philosophy"}}}}]}class D extends e{constructor(e){super(),s(this,e,T,H,a,{})}}export{D as default};
