import{S as e,i as t,s as r,M as a,c as n,j as l,n as s,p as i,r as o,u,v as c,e as h,b as d,g as f,d as g,k as p,m,t as v,a as b,A as k,h as j,f as E,O as M,l as D,o as H,F as L,P,z as w}from"./client.b990c13e.js";function K(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function N(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function S(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function G(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function $(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=v(a),r=v(", ")},l(e){t=j(e,a),r=j(e,", ")},m(e,a){m(e,t,a),m(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&H(t,a)},d(e){e&&g(t),e&&g(r)}}}function A(e){let t,r,a,n,l,s,i,o,u,c,H,w,K,N=e[9].title+"",G=e[9].location+"",A=e[9].description[e[0].language]+"",I=e[9].dates,T=[];for(let t=0;t<I.length;t+=1)T[t]=$(S(e,I,t));let B=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,l;return{c(){t=h("a"),r=h("img"),this.h()},l(e){t=d(e,"A",{class:!0,href:!0});var a=f(t);r=d(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(g),this.h()},h(){r.src!==(a=e[3][e[9].project])&&p(r,"src",a),p(r,"width","128px"),p(r,"height","128px"),p(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),p(r,"class","svelte-1jovf47"),p(t,"class","project-icon svelte-1jovf47"),p(t,"href",l=e[2][e[9].project])},m(e,a){m(e,t,a),D(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&p(r,"alt",n)},d(e){e&&g(t)}}}(e);return{c(){t=h("li"),r=h("div"),a=h("h2"),n=v(N),l=b(),s=h("p");for(let e=0;e<T.length;e+=1)T[e].c();i=k(),u=b(),c=h("p"),H=b(),B&&B.c(),w=b(),this.h()},l(e){t=d(e,"LI",{class:!0});var o=f(t);r=d(o,"DIV",{class:!0});var h=f(r);a=d(h,"H2",{class:!0});var p=f(a);n=j(p,N),p.forEach(g),l=E(h),s=d(h,"P",{class:!0});var m=f(s);for(let e=0;e<T.length;e+=1)T[e].l(m);i=k(),m.forEach(g),u=E(h),c=d(h,"P",{class:!0}),f(c).forEach(g),h.forEach(g),H=E(o),B&&B.l(o),w=E(o),o.forEach(g),this.h()},h(){p(a,"class","event-list--title svelte-1jovf47"),o=new P(null),p(s,"class","event-list--time-location svelte-1jovf47"),p(c,"class","event-list--description svelte-1jovf47"),p(r,"class","event-list--item--text svelte-1jovf47"),p(t,"class",K=M("event-list--item")+" svelte-1jovf47")},m(e,h){m(e,t,h),D(t,r),D(r,a),D(a,n),D(r,l),D(r,s);for(let e=0;e<T.length;e+=1)T[e].m(s,null);D(s,i),o.m(G,s),D(r,u),D(r,c),c.innerHTML=A,D(t,H),B&&B.m(t,null),D(t,w)},p(e,t){if(49&t){let r;for(I=e[9].dates,r=0;r<I.length;r+=1){const a=S(e,I,r);T[r]?T[r].p(a,t):(T[r]=$(a),T[r].c(),T[r].m(s,i))}for(;r<T.length;r+=1)T[r].d(1);T.length=I.length}1&t&&A!==(A=e[9].description[e[0].language]+"")&&(c.innerHTML=A),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&B.p(e,t)},d(e){e&&g(t),L(T,e),B&&B.d()}}}function I(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=v(a),r=v(", ")},l(e){t=j(e,a),r=j(e,", ")},m(e,a){m(e,t,a),m(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&H(t,a)},d(e){e&&g(t),e&&g(r)}}}function T(e){let t,r,a,n,l,s,i,o,u,c,M,H,w=e[9].title+"",N=e[9].location+"",S=e[9].description[e[0].language]+"",G=e[9].dates,$=[];for(let t=0;t<G.length;t+=1)$[t]=I(K(e,G,t));let A=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,l;return{c(){t=h("a"),r=h("img"),this.h()},l(e){t=d(e,"A",{class:!0,href:!0});var a=f(t);r=d(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(g),this.h()},h(){r.src!==(a=e[3][e[9].project])&&p(r,"src",a),p(r,"width","128px"),p(r,"height","128px"),p(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),p(r,"class","svelte-1jovf47"),p(t,"class","project-icon svelte-1jovf47"),p(t,"href",l=e[2][e[9].project])},m(e,a){m(e,t,a),D(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&p(r,"alt",n)},d(e){e&&g(t)}}}(e);return{c(){t=h("li"),r=h("div"),a=h("h2"),n=v(w),l=b(),s=h("p");for(let e=0;e<$.length;e+=1)$[e].c();i=k(),u=b(),c=h("p"),M=b(),A&&A.c(),H=b(),this.h()},l(e){t=d(e,"LI",{class:!0});var o=f(t);r=d(o,"DIV",{class:!0});var h=f(r);a=d(h,"H2",{class:!0});var p=f(a);n=j(p,w),p.forEach(g),l=E(h),s=d(h,"P",{class:!0});var m=f(s);for(let e=0;e<$.length;e+=1)$[e].l(m);i=k(),m.forEach(g),u=E(h),c=d(h,"P",{class:!0}),f(c).forEach(g),h.forEach(g),M=E(o),A&&A.l(o),H=E(o),o.forEach(g),this.h()},h(){p(a,"class","event-list--title svelte-1jovf47"),o=new P(null),p(s,"class","event-list--time-location svelte-1jovf47"),p(c,"class","event-list--description svelte-1jovf47"),p(r,"class","event-list--item--text svelte-1jovf47"),p(t,"class","event-list--item svelte-1jovf47")},m(e,h){m(e,t,h),D(t,r),D(r,a),D(a,n),D(r,l),D(r,s);for(let e=0;e<$.length;e+=1)$[e].m(s,null);D(s,i),o.m(N,s),D(r,u),D(r,c),c.innerHTML=S,D(t,M),A&&A.m(t,null),D(t,H)},p(e,t){if(81&t){let r;for(G=e[9].dates,r=0;r<G.length;r+=1){const a=K(e,G,r);$[r]?$[r].p(a,t):($[r]=I(a),$[r].c(),$[r].m(s,i))}for(;r<$.length;r+=1)$[r].d(1);$.length=G.length}1&t&&S!==(S=e[9].description[e[0].language]+"")&&(c.innerHTML=S),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&A.p(e,t)},d(e){e&&g(t),L($,e),A&&A.d()}}}function B(e){let t,r,a,n,l,s,i,o,u,c,k=e[1].title[e[0].language]+"",M=e[1].intro[e[0].language]+"",P=e[5].length>0&&function(e){let t,r=e[5],a=[];for(let t=0;t<r.length;t+=1)a[t]=A(G(e,r,t));return{c(){t=h("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=d(e,"UL",{class:!0});var r=f(t);for(let e=0;e<a.length;e+=1)a[e].l(r);r.forEach(g),this.h()},h(){p(t,"class","event-list svelte-1jovf47")},m(e,r){m(e,t,r);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(e,n){if(61&n){let l;for(r=e[5],l=0;l<r.length;l+=1){const s=G(e,r,l);a[l]?a[l].p(s,n):(a[l]=A(s),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(e){e&&g(t),L(a,e)}}}(e),w=e[6].length>0&&function(e){let t,r,a,n,l=e[1].pastEventsHeading[e[0].language]+"",s=e[6],i=[];for(let t=0;t<s.length;t+=1)i[t]=T(N(e,s,t));return{c(){t=h("h2"),r=v(l),a=b(),n=h("ul");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=d(e,"H2",{class:!0});var s=f(t);r=j(s,l),s.forEach(g),a=E(e),n=d(e,"UL",{class:!0});var o=f(n);for(let e=0;e<i.length;e+=1)i[e].l(o);o.forEach(g),this.h()},h(){p(t,"class","event-list--section-heading svelte-1jovf47"),p(n,"class","event-list past-events svelte-1jovf47")},m(e,l){m(e,t,l),D(t,r),m(e,a,l),m(e,n,l);for(let e=0;e<i.length;e+=1)i[e].m(n,null)},p(e,t){if(1&t&&l!==(l=e[1].pastEventsHeading[e[0].language]+"")&&H(r,l),93&t){let r;for(s=e[6],r=0;r<s.length;r+=1){const a=N(e,s,r);i[r]?i[r].p(a,t):(i[r]=T(a),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},d(e){e&&g(t),e&&g(a),e&&g(n),L(i,e)}}}(e);return{c(){t=h("img"),a=b(),n=h("h1"),l=v(k),s=b(),i=h("p"),o=b(),u=h("div"),P&&P.c(),c=b(),w&&w.c(),this.h()},l(e){t=d(e,"IMG",{class:!0,src:!0,alt:!0}),a=E(e),n=d(e,"H1",{});var r=f(n);l=j(r,k),r.forEach(g),s=E(e),i=d(e,"P",{id:!0,class:!0}),f(i).forEach(g),o=E(e),u=d(e,"DIV",{id:!0,class:!0});var h=f(u);P&&P.l(h),c=E(h),w&&w.l(h),h.forEach(g),this.h()},h(){p(t,"class","pic-mobile"),t.src!==(r="/images/events-mobile.jpg")&&p(t,"src","/images/events-mobile.jpg"),p(t,"alt","Louise Augoyard steht neben ihrer Harfe."),p(i,"id","events-intro"),p(i,"class","svelte-1jovf47"),p(u,"id","events-container"),p(u,"class","svelte-1jovf47")},m(e,r){m(e,t,r),m(e,a,r),m(e,n,r),D(n,l),m(e,s,r),m(e,i,r),i.innerHTML=M,m(e,o,r),m(e,u,r),P&&P.m(u,null),D(u,c),w&&w.m(u,null)},p(e,t){1&t&&k!==(k=e[1].title[e[0].language]+"")&&H(l,k),1&t&&M!==(M=e[1].intro[e[0].language]+"")&&(i.innerHTML=M),e[5].length>0&&P.p(e,t),e[6].length>0&&w.p(e,t)},d(e){e&&g(t),e&&g(a),e&&g(n),e&&g(s),e&&g(i),e&&g(o),e&&g(u),P&&P.d(),w&&w.d()}}}function _(e){let t,r;return t=new a({props:{$$slots:{default:[B]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){l(t.$$.fragment,e)},m(e,a){s(t,e,a),r=!0},p(e,[r]){const a={};131073&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){o(t.$$.fragment,e),r=!1},d(e){u(t,e)}}}function z(e,t,r){let a;c(e,w,e=>r(0,a=e));const n={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,6,18,18,0)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de la mairie, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,18,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Evangelische Kita Eislebener Str., Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,8,15,45)],title:"Eindrücke der Natur",location:"Belia Seniorenresidenz Wattenscheid",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,4,30,14)],title:"10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",location:"Autobahnkirche RUHR",description:{de:"Musikalische Gestaltung des ökumenischen Gottesdienstes",fr:"Accompagnement musical de la célébration œcuménique"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},l={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},s=e=>e.getTime()>(new Date).getTime();let i=[],o=[];for(let e of n.events){let t=!1;for(const r of e.dates)if(s(r)){t=!0;break}t?i.push(e):o.push(e)}return i.sort((e,t)=>e.dates[0].getTime()-t.dates[0].getTime()),o.sort((e,t)=>t.dates[0].getTime()-e.dates[0].getTime()),[a,n,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg","de-musica":"/images/socrates-128.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg"},(e,t="de")=>{let r=String(e.getDate());return"de"==t&&(r+="."),r+=` ${l[t][e.getMonth()]} ${e.getFullYear()} ${e.getHours()}`,e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},i,o]}export default class extends e{constructor(e){super(),t(this,e,z,_,r,{})}}