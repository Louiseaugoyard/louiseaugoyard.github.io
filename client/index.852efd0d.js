import{S as e,i as a,s,M as t,e as r,a as i,c as o,q as c,b as l,d as n,f as d,j as h,k as p,l as u,m as g,n as f,p as m,r as j,u as v,v as $,t as b,g as k,h as M,o as H,z as E}from"./client.873e0f09.js";function L(e){let a,s,t,o,c,h,f,m,j,v,$,E,L,T,A,P,S,V,y,C,w,x,z,D=e[1].title[e[0].language]+"",F=e[1].projects.nachtigall.title[e[0].language]+"",I=e[1].projects.nachtigall.description[e[0].language]+"",q=e[1].projects["de-musica"].title[e[0].language]+"",K=e[1].projects["de-musica"].description[e[0].language]+"";return{c(){a=r("img"),t=i(),o=r("h1"),c=b(D),h=i(),f=r("div"),m=r("a"),v=i(),$=r("a"),E=r("h2"),L=i(),T=r("p"),A=b(I),S=i(),V=r("a"),y=r("h2"),C=b(q),w=i(),x=r("p"),this.h()},l(e){a=l(e,"IMG",{src:!0,alt:!0,class:!0}),t=d(e),o=l(e,"H1",{});var s=k(o);c=M(s,D),s.forEach(n),h=d(e),f=l(e,"DIV",{id:!0,class:!0});var r=k(f);m=l(r,"A",{id:!0,class:!0,href:!0}),k(m).forEach(n),v=d(r),$=l(r,"A",{id:!0,class:!0,href:!0});var i=k($);E=l(i,"H2",{id:!0,class:!0}),k(E).forEach(n),L=d(i),T=l(i,"P",{id:!0,class:!0});var p=k(T);A=M(p,I),p.forEach(n),i.forEach(n),S=d(r),V=l(r,"A",{id:!0,class:!0,href:!0});var u=k(V);y=l(u,"H2",{id:!0,class:!0});var g=k(y);C=M(g,q),g.forEach(n),w=d(u),x=l(u,"P",{id:!0,class:!0}),k(x).forEach(n),u.forEach(n),r.forEach(n),this.h()},h(){a.src!==(s="/images/projects-mobile.jpg")&&p(a,"src","/images/projects-mobile.jpg"),p(a,"alt","Bild einer Harfe."),p(a,"class","pic-mobile"),p(m,"id","trio-sophora"),p(m,"class","project-cell svelte-1o6s9hp"),p(m,"href",j=e[1].projects["trio-sophora"].route),p(E,"id","nachtigall--title"),p(E,"class","svelte-1o6s9hp"),p(T,"id","nachtigall--desc"),p(T,"class","svelte-1o6s9hp"),p($,"id","nachtigall"),p($,"class","project-cell svelte-1o6s9hp"),p($,"href",P=e[1].projects.nachtigall.route),p(y,"id","de-musica--title"),p(y,"class","svelte-1o6s9hp"),p(x,"id","de-musica--desc"),p(x,"class","svelte-1o6s9hp"),p(V,"id","de-musica"),p(V,"class","project-cell svelte-1o6s9hp"),p(V,"href",z=e[1].projects["de-musica"].route),p(f,"id","projects-table"),p(f,"class","svelte-1o6s9hp")},m(e,s){g(e,a,s),g(e,t,s),g(e,o,s),u(o,c),g(e,h,s),g(e,f,s),u(f,m),u(f,v),u(f,$),u($,E),E.innerHTML=F,u($,L),u($,T),u(T,A),u(f,S),u(f,V),u(V,y),u(y,C),u(V,w),u(V,x),x.innerHTML=K},p(e,a){1&a&&D!==(D=e[1].title[e[0].language]+"")&&H(c,D),1&a&&F!==(F=e[1].projects.nachtigall.title[e[0].language]+"")&&(E.innerHTML=F),1&a&&I!==(I=e[1].projects.nachtigall.description[e[0].language]+"")&&H(A,I),1&a&&q!==(q=e[1].projects["de-musica"].title[e[0].language]+"")&&H(C,q),1&a&&K!==(K=e[1].projects["de-musica"].description[e[0].language]+"")&&(x.innerHTML=K)},d(e){e&&n(a),e&&n(t),e&&n(o),e&&n(h),e&&n(f)}}}function T(e){let a,s,$,b,k;return document.title=a="Louise Augoyard | "+e[1].title[e[0].language],b=new t({props:{$$slots:{default:[L]},$$scope:{ctx:e}}}),{c(){s=r("meta"),$=i(),o(b.$$.fragment),this.h()},l(e){const a=c('[data-svelte="svelte-19kvw51"]',document.head);s=l(a,"META",{name:!0,content:!0}),a.forEach(n),$=d(e),h(b.$$.fragment,e),this.h()},h(){p(s,"name","description"),p(s,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,a){u(document.head,s),g(e,$,a),f(b,e,a),k=!0},p(e,[s]){(!k||3&s)&&a!==(a="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=a);const t={};5&s&&(t.$$scope={dirty:s,ctx:e}),b.$set(t)},i(e){k||(m(b.$$.fragment,e),k=!0)},o(e){j(b.$$.fragment,e),k=!1},d(e){n(s),e&&n($),v(b,e)}}}function A(e,a,s){let t;$(e,E,e=>s(0,t=e));return[t,{title:{de:"Projekte",fr:"Projets",en:"Projects"},projects:{"trio-sophora":{route:"projekte/trio-sophora",title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},description:{de:"Flöte, Viola und Harfe",fr:"Flûte, alto et harpe",en:"Flute, Viola and Harp"},image:"images/trio-sophora-logo.svg"},nachtigall:{route:"projekte/nachtigall",title:{de:"Ein Lied<br>für die Nachtigall",fr:"Une berceuse<br>pour le rossignol",en:"A Chant<br>for the Nightingale"},description:{de:"Kinderkonzert mit Harfe und Live-Malerei",fr:"Concert pour enfants avec harpe et dessin en direct",en:"Concert for children with Harp and Live Painting"},image:"images/lerche-512.jpg"},"de-musica":{route:"projekte/de-musica",title:{de:"De Musica",fr:"De Musica",en:"De Musica"},description:{de:"Konzertlektüre<br>mit Musik und Philosophie",fr:"Concert-lecture<br>musique & philosophie",en:"Concert Lecture<br>with Music and Philosophy"}}}}]}export default class extends e{constructor(e){super(),a(this,e,A,T,s,{})}}
