import{S as e,i as s,s as t,M as a,c as r,j as n,n as i,p as c,r as l,u as o,v as h,e as u,t as d,a as m,b as f,g,h as v,d as p,f as k,k as E,m as $,l as w,w as b,x as H,C as j,F as L,E as x,z as M}from"./client.58fad31b.js";function P(e,s,t){const a=e.slice();return a[2]=s[t],a[4]=t,a}function S(e){let s,t,a,r,n,i,c,l,o,h,b,H,j,L=e[2].title+"",x=e[2].date+"",M=e[2].time+"",P=e[2].location+"",S=e[2].description[e[0].language]+"";return{c(){s=u("li"),t=u("h2"),a=d(L),r=m(),n=u("p"),i=d(x),c=d(", "),l=d(M),o=d(", "),h=d(P),b=m(),H=u("p"),j=m(),this.h()},l(e){s=f(e,"LI",{class:!0});var u=g(s);t=f(u,"H2",{class:!0});var d=g(t);a=v(d,L),d.forEach(p),r=k(u),n=f(u,"P",{class:!0});var m=g(n);i=v(m,x),c=v(m,", "),l=v(m,M),o=v(m,", "),h=v(m,P),m.forEach(p),b=k(u),H=f(u,"P",{class:!0}),g(H).forEach(p),j=k(u),u.forEach(p),this.h()},h(){E(t,"class","event-list--title svelte-1ckms5w"),E(n,"class","event-list--time-location svelte-1ckms5w"),E(H,"class","event-list--description svelte-1ckms5w"),E(s,"class","event-list--item svelte-1ckms5w")},m(e,u){$(e,s,u),w(s,t),w(t,a),w(s,r),w(s,n),w(n,i),w(n,c),w(n,l),w(n,o),w(n,h),w(s,b),w(s,H),H.innerHTML=S,w(s,j)},p(e,s){1&s&&S!==(S=e[2].description[e[0].language]+"")&&(H.innerHTML=S)},d(e){e&&p(s)}}}function T(e){let s,t,a,r,n,i,c,l,o,h,M,T,I,B,U,z,A,C,G,K,R=e[1].intro[e[0].language]+"",y=e[1].events,D=[];for(let s=0;s<y.length;s+=1)D[s]=S(P(e,y,s));return{c(){s=u("img"),a=m(),r=u("h1"),n=d("Termine"),i=m(),c=u("p"),l=m(),o=u("div"),h=u("picture"),M=u("source"),T=m(),I=u("source"),B=m(),U=u("img"),C=m(),G=u("div"),K=u("ul");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){s=f(e,"IMG",{class:!0,src:!0,alt:!0}),a=k(e),r=f(e,"H1",{});var t=g(r);n=v(t,"Termine"),t.forEach(p),i=k(e),c=f(e,"P",{id:!0,class:!0}),g(c).forEach(p),l=k(e),o=f(e,"DIV",{id:!0,class:!0});var u=g(o);h=f(u,"PICTURE",{id:!0,class:!0});var d=g(h);M=f(d,"SOURCE",{srcset:!0}),T=k(d),I=f(d,"SOURCE",{srcset:!0}),B=k(d),U=f(d,"IMG",{src:!0,class:!0,alt:!0}),d.forEach(p),C=k(u),G=f(u,"DIV",{id:!0,class:!0});var m=g(G);K=f(m,"UL",{id:!0});var E=g(K);for(let e=0;e<D.length;e+=1)D[e].l(E);E.forEach(p),m.forEach(p),u.forEach(p),this.h()},h(){E(s,"class","pic-mobile"),s.src!==(t="/images/events-mobile.jpg")&&E(s,"src","/images/events-mobile.jpg"),E(s,"alt","Louise Augoyard steht neben ihrer Harfe."),E(c,"id","events-intro"),E(c,"class","svelte-1ckms5w"),E(M,"srcset","/images/events-512.jpg 512w"),E(I,"srcset","/images/events-1024.jpg 2x"),U.src!==(z="/images/events-1024.jpg")&&E(U,"src","/images/events-1024.jpg"),E(U,"class","pic-desktop"),E(U,"alt","Louise Augoyard steht neben ihrer Harfe."),E(h,"id","events-picture"),E(h,"class","svelte-1ckms5w"),E(K,"id","event-list"),E(G,"id","events-text"),E(G,"class","svelte-1ckms5w"),E(o,"id","events-container"),E(o,"class","svelte-1ckms5w")},m(e,t){$(e,s,t),$(e,a,t),$(e,r,t),w(r,n),$(e,i,t),$(e,c,t),c.innerHTML=R,$(e,l,t),$(e,o,t),w(o,h),w(h,M),w(h,T),w(h,I),w(h,B),w(h,U),w(o,C),w(o,G),w(G,K);for(let e=0;e<D.length;e+=1)D[e].m(K,null)},p(e,s){if(1&s&&R!==(R=e[1].intro[e[0].language]+"")&&(c.innerHTML=R),3&s){let t;for(y=e[1].events,t=0;t<y.length;t+=1){const a=P(e,y,t);D[t]?D[t].p(a,s):(D[t]=S(a),D[t].c(),D[t].m(K,null))}for(;t<D.length;t+=1)D[t].d(1);D.length=y.length}},i(e){A||b(()=>{A=H(U,x,{}),A.start()})},o:j,d(e){e&&p(s),e&&p(a),e&&p(r),e&&p(i),e&&p(c),e&&p(l),e&&p(o),L(D,e)}}}function I(e){let s,t;return s=new a({props:{$$slots:{default:[T]},$$scope:{ctx:e}}}),{c(){r(s.$$.fragment)},l(e){n(s.$$.fragment,e)},m(e,a){i(s,e,a),t=!0},p(e,[t]){const a={};33&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){t||(c(s.$$.fragment,e),t=!0)},o(e){l(s.$$.fragment,e),t=!1},d(e){o(s,e)}}}function B(e,s,t){let a;h(e,M,e=>t(0,a=e));return[a,{intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"???"},events:[{date:"21. April 2021",time:"10:30 Uhr",title:"Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Harfe solo mit Werken von Bach, Glinka, Berio...<br> Konzert für die Besucher der Bahnhofsmission. Gefördert durch <a href='https://neustartkultur.de/'>Neustart Kultur</a>."}}]}]}export default class extends e{constructor(e){super(),s(this,e,B,I,t,{})}}
