import{_ as e,a as t,b as r,c as n,i as a,s as i,d as o,S as s,M as l,g as u,n as c,u as f,v as h,x as d,y as g,z as p,A as v,e as m,h as b,l as j,j as k,o as y,r as E,t as M,f as w,F as D,m as L,k as P,U as S,V as H,p as K,w as N,K as A,E as I}from"./client.0102e15b.js";function T(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=t(e);if(n){var o=t(this).constructor;a=Reflect.construct(i,arguments,o)}else a=i.apply(this,arguments);return r(this,a)}}function G(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t,r){var n=e.slice();return n[12]=t[r],n[14]=r,n}function z(e,t,r){var n=e.slice();return n[9]=t[r],n[11]=r,n}function R(e,t,r){var n=e.slice();return n[12]=t[r],n[14]=r,n}function x(e,t,r){var n=e.slice();return n[9]=t[r],n[11]=r,n}function W(e){var t,r,n=e[4](e[12],e[0].language)+"";return{c:function(){t=M(n),r=M(", ")},l:function(e){t=L(e,n),r=L(e,", ")},m:function(e,n){E(e,t,n),E(e,r,n)},p:function(e,r){1&r&&n!==(n=e[4](e[12],e[0].language)+"")&&N(t,n)},d:function(e){e&&k(t),e&&k(r)}}}function B(e){for(var t,r,n,a,i,o,s,l,u,c,f,h,d=e[9].title+"",g=e[9].location+"",p=e[9].description[e[0].language]+"",v=e[9].dates,N=[],I=0;I<v.length;I+=1)N[I]=W(R(e,v,I));var T=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,n,a;return{c:function(){t=m("a"),r=m("img"),this.h()},l:function(e){t=b(e,"A",{class:!0,href:!0});var n=j(t);r=b(n,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),n.forEach(k),this.h()},h:function(){r.src!==(n=e[3][e[9].project])&&y(r,"src",n),y(r,"width","128px"),y(r,"height","128px"),y(r,"alt",a="de"===e[0].language?"Projektinfo":"Info sur le projet"),y(r,"class","svelte-1jovf47"),y(t,"class","project-icon svelte-1jovf47"),y(t,"href",e[2][e[9].project])},m:function(e,n){E(e,t,n),K(t,r)},p:function(e,t){1&t&&a!==(a="de"===e[0].language?"Projektinfo":"Info sur le projet")&&y(r,"alt",a)},d:function(e){e&&k(t)}}}(e);return{c:function(){t=m("li"),r=m("div"),n=m("h2"),a=M(d),i=w(),o=m("p");for(var e=0;e<N.length;e+=1)N[e].c();s=D(),u=w(),c=m("p"),f=w(),T&&T.c(),h=w(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var l=j(t);r=b(l,"DIV",{class:!0});var g=j(r);n=b(g,"H2",{class:!0});var p=j(n);a=L(p,d),p.forEach(k),i=P(g),o=b(g,"P",{class:!0});for(var v=j(o),m=0;m<N.length;m+=1)N[m].l(v);s=D(),v.forEach(k),u=P(g),c=b(g,"P",{class:!0}),j(c).forEach(k),g.forEach(k),f=P(l),T&&T.l(l),h=P(l),l.forEach(k),this.h()},h:function(){y(n,"class","event-list--title svelte-1jovf47"),l=new S(null),y(o,"class","event-list--time-location svelte-1jovf47"),y(c,"class","event-list--description svelte-1jovf47"),y(r,"class","event-list--item--text svelte-1jovf47"),y(t,"class",H("event-list--item")+" svelte-1jovf47")},m:function(e,d){E(e,t,d),K(t,r),K(r,n),K(n,a),K(r,i),K(r,o);for(var v=0;v<N.length;v+=1)N[v].m(o,null);K(o,s),l.m(g,o),K(r,u),K(r,c),c.innerHTML=p,K(t,f),T&&T.m(t,null),K(t,h)},p:function(e,t){if(49&t){var r;for(v=e[9].dates,r=0;r<v.length;r+=1){var n=R(e,v,r);N[r]?N[r].p(n,t):(N[r]=W(n),N[r].c(),N[r].m(o,s))}for(;r<N.length;r+=1)N[r].d(1);N.length=v.length}1&t&&p!==(p=e[9].description[e[0].language]+"")&&(c.innerHTML=p),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&T.p(e,t)},d:function(e){e&&k(t),A(N,e),T&&T.d()}}}function F(e){var t,r,n=e[4](e[12],e[0].language)+"";return{c:function(){t=M(n),r=M(", ")},l:function(e){t=L(e,n),r=L(e,", ")},m:function(e,n){E(e,t,n),E(e,r,n)},p:function(e,r){1&r&&n!==(n=e[4](e[12],e[0].language)+"")&&N(t,n)},d:function(e){e&&k(t),e&&k(r)}}}function C(e){for(var t,r,n,a,i,o,s,l,u,c,f,h,d=e[9].title+"",g=e[9].location+"",p=e[9].description[e[0].language]+"",v=e[9].dates,H=[],N=0;N<v.length;N+=1)H[N]=F(_(e,v,N));var I=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,n,a;return{c:function(){t=m("a"),r=m("img"),this.h()},l:function(e){t=b(e,"A",{class:!0,href:!0});var n=j(t);r=b(n,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),n.forEach(k),this.h()},h:function(){r.src!==(n=e[3][e[9].project])&&y(r,"src",n),y(r,"width","128px"),y(r,"height","128px"),y(r,"alt",a="de"===e[0].language?"Projektinfo":"Info sur le projet"),y(r,"class","svelte-1jovf47"),y(t,"class","project-icon svelte-1jovf47"),y(t,"href",e[2][e[9].project])},m:function(e,n){E(e,t,n),K(t,r)},p:function(e,t){1&t&&a!==(a="de"===e[0].language?"Projektinfo":"Info sur le projet")&&y(r,"alt",a)},d:function(e){e&&k(t)}}}(e);return{c:function(){t=m("li"),r=m("div"),n=m("h2"),a=M(d),i=w(),o=m("p");for(var e=0;e<H.length;e+=1)H[e].c();s=D(),u=w(),c=m("p"),f=w(),I&&I.c(),h=w(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var l=j(t);r=b(l,"DIV",{class:!0});var g=j(r);n=b(g,"H2",{class:!0});var p=j(n);a=L(p,d),p.forEach(k),i=P(g),o=b(g,"P",{class:!0});for(var v=j(o),m=0;m<H.length;m+=1)H[m].l(v);s=D(),v.forEach(k),u=P(g),c=b(g,"P",{class:!0}),j(c).forEach(k),g.forEach(k),f=P(l),I&&I.l(l),h=P(l),l.forEach(k),this.h()},h:function(){y(n,"class","event-list--title svelte-1jovf47"),l=new S(null),y(o,"class","event-list--time-location svelte-1jovf47"),y(c,"class","event-list--description svelte-1jovf47"),y(r,"class","event-list--item--text svelte-1jovf47"),y(t,"class","event-list--item svelte-1jovf47")},m:function(e,d){E(e,t,d),K(t,r),K(r,n),K(n,a),K(r,i),K(r,o);for(var v=0;v<H.length;v+=1)H[v].m(o,null);K(o,s),l.m(g,o),K(r,u),K(r,c),c.innerHTML=p,K(t,f),I&&I.m(t,null),K(t,h)},p:function(e,t){if(81&t){var r;for(v=e[9].dates,r=0;r<v.length;r+=1){var n=_(e,v,r);H[r]?H[r].p(n,t):(H[r]=F(n),H[r].c(),H[r].m(o,s))}for(;r<H.length;r+=1)H[r].d(1);H.length=v.length}1&t&&p!==(p=e[9].description[e[0].language]+"")&&(c.innerHTML=p),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&I.p(e,t)},d:function(e){e&&k(t),A(H,e),I&&I.d()}}}function V(e){var t,r,n,a,i,o,s,l,u,c=e[1].title[e[0].language]+"",f=e[1].intro[e[0].language]+"",h=e[5].length>0&&function(e){for(var t,r=e[5],n=[],a=0;a<r.length;a+=1)n[a]=B(x(e,r,a));return{c:function(){t=m("ul");for(var e=0;e<n.length;e+=1)n[e].c();this.h()},l:function(e){t=b(e,"UL",{class:!0});for(var r=j(t),a=0;a<n.length;a+=1)n[a].l(r);r.forEach(k),this.h()},h:function(){y(t,"class","event-list svelte-1jovf47")},m:function(e,r){E(e,t,r);for(var a=0;a<n.length;a+=1)n[a].m(t,null)},p:function(e,a){if(61&a){var i;for(r=e[5],i=0;i<r.length;i+=1){var o=x(e,r,i);n[i]?n[i].p(o,a):(n[i]=B(o),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d:function(e){e&&k(t),A(n,e)}}}(e),d=e[6].length>0&&function(e){for(var t,r,n,a,i=e[1].pastEventsHeading[e[0].language]+"",o=e[6],s=[],l=0;l<o.length;l+=1)s[l]=C(z(e,o,l));return{c:function(){t=m("h2"),r=M(i),n=w(),a=m("ul");for(var e=0;e<s.length;e+=1)s[e].c();this.h()},l:function(e){t=b(e,"H2",{class:!0});var o=j(t);r=L(o,i),o.forEach(k),n=P(e),a=b(e,"UL",{class:!0});for(var l=j(a),u=0;u<s.length;u+=1)s[u].l(l);l.forEach(k),this.h()},h:function(){y(t,"class","event-list--section-heading svelte-1jovf47"),y(a,"class","event-list past-events svelte-1jovf47")},m:function(e,i){E(e,t,i),K(t,r),E(e,n,i),E(e,a,i);for(var o=0;o<s.length;o+=1)s[o].m(a,null)},p:function(e,t){if(1&t&&i!==(i=e[1].pastEventsHeading[e[0].language]+"")&&N(r,i),93&t){var n;for(o=e[6],n=0;n<o.length;n+=1){var l=z(e,o,n);s[n]?s[n].p(l,t):(s[n]=C(l),s[n].c(),s[n].m(a,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=o.length}},d:function(e){e&&k(t),e&&k(n),e&&k(a),A(s,e)}}}(e);return{c:function(){t=m("img"),r=w(),n=m("h1"),a=M(c),i=w(),o=m("p"),s=w(),l=m("div"),h&&h.c(),u=w(),d&&d.c(),this.h()},l:function(e){t=b(e,"IMG",{class:!0,src:!0,alt:!0}),r=P(e),n=b(e,"H1",{});var f=j(n);a=L(f,c),f.forEach(k),i=P(e),o=b(e,"P",{id:!0,class:!0}),j(o).forEach(k),s=P(e),l=b(e,"DIV",{id:!0,class:!0});var g=j(l);h&&h.l(g),u=P(g),d&&d.l(g),g.forEach(k),this.h()},h:function(){y(t,"class","pic-mobile"),t.src!=="/images/events-mobile.jpg"&&y(t,"src","/images/events-mobile.jpg"),y(t,"alt","Louise Augoyard steht neben ihrer Harfe."),y(o,"id","events-intro"),y(o,"class","svelte-1jovf47"),y(l,"id","events-container"),y(l,"class","svelte-1jovf47")},m:function(e,c){E(e,t,c),E(e,r,c),E(e,n,c),K(n,a),E(e,i,c),E(e,o,c),o.innerHTML=f,E(e,s,c),E(e,l,c),h&&h.m(l,null),K(l,u),d&&d.m(l,null)},p:function(e,t){1&t&&c!==(c=e[1].title[e[0].language]+"")&&N(a,c),1&t&&f!==(f=e[1].intro[e[0].language]+"")&&(o.innerHTML=f),e[5].length>0&&h.p(e,t),e[6].length>0&&d.p(e,t)},d:function(e){e&&k(t),e&&k(r),e&&k(n),e&&k(i),e&&k(o),e&&k(s),e&&k(l),h&&h.d(),d&&d.d()}}}function J(e){var t,r;return t=new l({props:{$$slots:{default:[V]},$$scope:{ctx:e}}}),{c:function(){u(t.$$.fragment)},l:function(e){c(t.$$.fragment,e)},m:function(e,n){f(t,e,n),r=!0},p:function(e,r){var n=h(r,1)[0],a={};131073&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i:function(e){r||(d(t.$$.fragment,e),r=!0)},o:function(e){g(t.$$.fragment,e),r=!1},d:function(e){p(t,e)}}}function O(e,t,r){var n;v(e,I,(function(e){return r(0,n=e)}));var a,i={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,6,18,18,0)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de la mairie, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},o={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},s=function(e){return e.getTime()>(new Date).getTime()},l=[],u=[],c=G(i.events);try{for(c.s();!(a=c.n()).done;){var f,h=a.value,d=!1,g=G(h.dates);try{for(g.s();!(f=g.n()).done;){if(s(f.value)){d=!0;break}}}catch(e){g.e(e)}finally{g.f()}d?l.push(h):u.push(h)}}catch(e){c.e(e)}finally{c.f()}return l.sort((function(e,t){return e.dates[0].getTime()-t.dates[0].getTime()})),u.sort((function(e,t){return t.dates[0].getTime()-e.dates[0].getTime()})),[n,i,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg","de-musica":"/images/socrates-128.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"de",r=String(e.getDate());return"de"==t&&(r+="."),r+=" ".concat(o[t][e.getMonth()]," ").concat(e.getFullYear()," ").concat(e.getHours()),e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},l,u]}var U=function(t){e(l,s);var r=T(l);function l(e){var t;return n(this,l),t=r.call(this),a(o(t),e,O,J,i,{}),t}return l}();export default U;
