import{_ as e,a as t,b as a,c as r,i as s,s as i,d as n,S as o,M as c,e as l,f as u,g as p,q as d,h,j as f,k as g,n as m,o as v,p as j,r as E,u as $,v as b,x as k,y as z,z as H,A as M,t as y,l as L,m as A,w as P,E as T}from"./client.3e30ecc6.js";function S(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=t(e);if(r){var n=t(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return a(this,s)}}function D(e){var t,a,r,s,i,n,o,c,p,d,m,$,b,k,z,H,M,T,S,D,V,w,x,C,R=e[1].title[e[0].language]+"",F=e[1].projects["trio-sophora"].title[e[0].language]+"",I=e[1].projects["trio-sophora"].description[e[0].language]+"",q=e[1].projects.nachtigall.title[e[0].language]+"",K=e[1].projects.nachtigall.description[e[0].language]+"",N=e[1].projects["de-musica"].title[e[0].language]+"",W=e[1].projects["de-musica"].description[e[0].language]+"";return{c:function(){t=l("img"),a=u(),r=l("h1"),s=y(R),i=u(),n=l("div"),o=l("a"),c=l("h2"),p=y(F),d=u(),m=l("p"),$=y(I),b=u(),k=l("a"),z=l("h2"),H=u(),M=l("p"),T=y(K),S=u(),D=l("a"),V=l("h2"),w=y(N),x=u(),C=l("p"),this.h()},l:function(e){t=h(e,"IMG",{src:!0,alt:!0,class:!0}),a=g(e),r=h(e,"H1",{});var l=L(r);s=A(l,R),l.forEach(f),i=g(e),n=h(e,"DIV",{id:!0,class:!0});var u=L(n);o=h(u,"A",{id:!0,class:!0,href:!0});var v=L(o);c=h(v,"H2",{id:!0,class:!0});var j=L(c);p=A(j,F),j.forEach(f),d=g(v),m=h(v,"P",{id:!0,class:!0});var E=L(m);$=A(E,I),E.forEach(f),v.forEach(f),b=g(u),k=h(u,"A",{id:!0,class:!0,href:!0});var y=L(k);z=h(y,"H2",{id:!0,class:!0}),L(z).forEach(f),H=g(y),M=h(y,"P",{id:!0,class:!0});var P=L(M);T=A(P,K),P.forEach(f),y.forEach(f),S=g(u),D=h(u,"A",{id:!0,class:!0,href:!0});var q=L(D);V=h(q,"H2",{id:!0,class:!0});var W=L(V);w=A(W,N),W.forEach(f),x=g(q),C=h(q,"P",{id:!0,class:!0}),L(C).forEach(f),q.forEach(f),u.forEach(f),this.h()},h:function(){t.src!=="/images/projects-mobile.jpg"&&v(t,"src","/images/projects-mobile.jpg"),v(t,"alt","Bild einer Harfe."),v(t,"class","pic-mobile"),v(c,"id","trio-sophora--title"),v(c,"class","svelte-z6n1gp"),v(m,"id","trio-sophora--desc"),v(m,"class","svelte-z6n1gp"),v(o,"id","trio-sophora"),v(o,"class","project-cell svelte-z6n1gp"),v(o,"href",e[1].projects["trio-sophora"].route),v(z,"id","nachtigall--title"),v(z,"class","svelte-z6n1gp"),v(M,"id","nachtigall--desc"),v(M,"class","svelte-z6n1gp"),v(k,"id","nachtigall"),v(k,"class","project-cell svelte-z6n1gp"),v(k,"href",e[1].projects.nachtigall.route),v(V,"id","de-musica--title"),v(V,"class","svelte-z6n1gp"),v(C,"id","de-musica--desc"),v(C,"class","svelte-z6n1gp"),v(D,"id","de-musica"),v(D,"class","project-cell svelte-z6n1gp"),v(D,"href",e[1].projects["de-musica"].route),v(n,"id","projects-table"),v(n,"class","svelte-z6n1gp")},m:function(e,l){E(e,t,l),E(e,a,l),E(e,r,l),j(r,s),E(e,i,l),E(e,n,l),j(n,o),j(o,c),j(c,p),j(o,d),j(o,m),j(m,$),j(n,b),j(n,k),j(k,z),z.innerHTML=q,j(k,H),j(k,M),j(M,T),j(n,S),j(n,D),j(D,V),j(V,w),j(D,x),j(D,C),C.innerHTML=W},p:function(e,t){1&t&&R!==(R=e[1].title[e[0].language]+"")&&P(s,R),1&t&&F!==(F=e[1].projects["trio-sophora"].title[e[0].language]+"")&&P(p,F),1&t&&I!==(I=e[1].projects["trio-sophora"].description[e[0].language]+"")&&P($,I),1&t&&q!==(q=e[1].projects.nachtigall.title[e[0].language]+"")&&(z.innerHTML=q),1&t&&K!==(K=e[1].projects.nachtigall.description[e[0].language]+"")&&P(T,K),1&t&&N!==(N=e[1].projects["de-musica"].title[e[0].language]+"")&&P(w,N),1&t&&W!==(W=e[1].projects["de-musica"].description[e[0].language]+"")&&(C.innerHTML=W)},d:function(e){e&&f(t),e&&f(a),e&&f(r),e&&f(i),e&&f(n)}}}function V(e){var t,a,r,s,i;return document.title=t="Louise Augoyard | "+e[1].title[e[0].language],s=new c({props:{$$slots:{default:[D]},$$scope:{ctx:e}}}),{c:function(){a=l("meta"),r=u(),p(s.$$.fragment),this.h()},l:function(e){var t=d('[data-svelte="svelte-19kvw51"]',document.head);a=h(t,"META",{name:!0,content:!0}),t.forEach(f),r=g(e),m(s.$$.fragment,e),this.h()},h:function(){v(a,"name","description"),v(a,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,t){j(document.head,a),E(e,r,t),$(s,e,t),i=!0},p:function(e,a){var r=b(a,1)[0];(!i||3&r)&&t!==(t="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=t);var n={};5&r&&(n.$$scope={dirty:r,ctx:e}),s.$set(n)},i:function(e){i||(k(s.$$.fragment,e),i=!0)},o:function(e){z(s.$$.fragment,e),i=!1},d:function(e){f(a),e&&f(r),H(s,e)}}}function w(e,t,a){var r;M(e,T,(function(e){return a(0,r=e)}));return[r,{title:{de:"Projekte",fr:"Projets",en:"Projects"},projects:{"trio-sophora":{route:"projekte/trio-sophora",title:{de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},description:{de:"Flöte, Viola und Harfe",fr:"Flûte, alto et harpe",en:"Flute, Viola and Harp"},image:"images/monet-nenuphars-512.jpg"},nachtigall:{route:"projekte/nachtigall",title:{de:"Ein Lied<br>für die Nachtigall",fr:"Une berceuse<br>pour le rossignol",en:"A Chant<br>for the Nightingale"},description:{de:"Kinderkonzert mit Harfe und Live-Malerei",fr:"Concert pour enfants avec harpe et dessin en direct",en:"Concert for children with Harp and Live Painting"},image:"images/lerche-512.jpg"},"de-musica":{route:"projekte/de-musica",title:{de:"De Musica",fr:"De Musica",en:"De Musica"},description:{de:"Konzertlektüre<br>mit Musik und Philosophie",fr:"Concert-lecture<br>musique & philosophie",en:"Concert Lecture<br>with Music and Philosophy"}}}}]}var x=function(t){e(c,o);var a=S(c);function c(e){var t;return r(this,c),t=a.call(this),s(n(t),e,w,V,i,{}),t}return c}();export default x;
