import{S as e,i as s,s as a,M as t,e as r,a as i,c as o,q as c,b as l,d as n,f as u,j as d,k as p,l as h,m as g,n as m,p as f,r as j,u as v,v as q,t as $,g as k,h as M,o as E,z as b}from"./client.9fb6ed32.js";function y(e){let s,a,t,o,c,d,m,f,j,v,q,b,y,A,H,T,D,L,P,S=e[1].title[e[0].language]+"",V=e[1].projects["de-musica"].title[e[0].language]+"",x=e[1].projects["de-musica"].description[e[0].language]+"";return{c(){s=r("img"),t=i(),o=r("h1"),c=$(S),d=i(),m=r("div"),f=r("a"),v=i(),q=r("a"),y=i(),A=r("a"),H=r("h2"),T=$(V),D=i(),L=r("p"),this.h()},l(e){s=l(e,"IMG",{src:!0,alt:!0,class:!0}),t=u(e),o=l(e,"H1",{});var a=k(o);c=M(a,S),a.forEach(n),d=u(e),m=l(e,"DIV",{id:!0,class:!0});var r=k(m);f=l(r,"A",{id:!0,class:!0,href:!0}),k(f).forEach(n),v=u(r),q=l(r,"A",{id:!0,class:!0,href:!0}),k(q).forEach(n),y=u(r),A=l(r,"A",{id:!0,class:!0,href:!0});var i=k(A);H=l(i,"H2",{id:!0,class:!0});var p=k(H);T=M(p,V),p.forEach(n),D=u(i),L=l(i,"P",{id:!0,class:!0}),k(L).forEach(n),i.forEach(n),r.forEach(n),this.h()},h(){s.src!==(a="/images/projects-mobile.jpg")&&p(s,"src","/images/projects-mobile.jpg"),p(s,"alt","Bild einer Harfe."),p(s,"class","pic-mobile"),p(f,"id","trio-sophora"),p(f,"class","project-cell svelte-argcqy"),p(f,"href",j=e[1].projects["trio-sophora"].route),p(q,"id","duo-esquisse"),p(q,"class","project-cell svelte-argcqy"),p(q,"href",b=e[1].projects["duo-esquisse"].route),p(H,"id","de-musica--title"),p(H,"class","svelte-argcqy"),p(L,"id","de-musica--desc"),p(L,"class","svelte-argcqy"),p(A,"id","de-musica"),p(A,"class","project-cell svelte-argcqy"),p(A,"href",P=e[1].projects["de-musica"].route),p(m,"id","projects-table"),p(m,"class","svelte-argcqy")},m(e,a){g(e,s,a),g(e,t,a),g(e,o,a),h(o,c),g(e,d,a),g(e,m,a),h(m,f),h(m,v),h(m,q),h(m,y),h(m,A),h(A,H),h(H,T),h(A,D),h(A,L),L.innerHTML=x},p(e,s){1&s&&S!==(S=e[1].title[e[0].language]+"")&&E(c,S),1&s&&V!==(V=e[1].projects["de-musica"].title[e[0].language]+"")&&E(T,V),1&s&&x!==(x=e[1].projects["de-musica"].description[e[0].language]+"")&&(L.innerHTML=x)},d(e){e&&n(s),e&&n(t),e&&n(o),e&&n(d),e&&n(m)}}}function A(e){let s,a,q,$,k;return document.title=s="Louise Augoyard | "+e[1].title[e[0].language],$=new t({props:{$$slots:{default:[y]},$$scope:{ctx:e}}}),{c(){a=r("meta"),q=i(),o($.$$.fragment),this.h()},l(e){const s=c('[data-svelte="svelte-19kvw51"]',document.head);a=l(s,"META",{name:!0,content:!0}),s.forEach(n),q=u(e),d($.$$.fragment,e),this.h()},h(){p(a,"name","description"),p(a,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,s){h(document.head,a),g(e,q,s),m($,e,s),k=!0},p(e,[a]){(!k||3&a)&&s!==(s="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=s);const t={};5&a&&(t.$$scope={dirty:a,ctx:e}),$.$set(t)},i(e){k||(f($.$$.fragment,e),k=!0)},o(e){j($.$$.fragment,e),k=!1},d(e){n(a),e&&n(q),v($,e)}}}function H(e,s,a){let t;q(e,b,e=>a(0,t=e));return[t,{title:{de:"Projekte",fr:"Projets",en:"Projects"},projects:{"trio-sophora":{route:"projekte/trio-sophora",title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},description:{de:"Flöte, Viola und Harfe",fr:"Flûte, alto et harpe",en:"Flute, Viola and Harp"},image:"images/trio-sophora-logo.svg"},"duo-esquisse":{route:"projekte/duo-esquisse",title:{de:"Duo Esquisse",fr:"Duo Esquisse",en:"Duo Esquisse"},description:{de:"Rezitation, Musik und Live-Malerei",fr:"Récitation, musique et peinture en direct",en:"Recitation, music and live painting"},image:"images/lerche-512.jpg"},"de-musica":{route:"projekte/de-musica",title:{de:"De Musica",fr:"De Musica",en:"De Musica"},description:{de:"Konzertlektüre<br>mit Musik und Philosophie",fr:"Concert-lecture<br>musique & philosophie",en:"Concert Lecture<br>with Music and Philosophy"}}}}]}export default class extends e{constructor(e){super(),s(this,e,H,A,a,{})}}
