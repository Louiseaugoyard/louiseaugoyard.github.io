import{_ as e,a as t,b as r,c as a,i as n,s as o,d as i,S as s,M as l,g as d,n as u,u as h,v as c,x as f,y as m,z as p,A as g,e as b,h as k,l as w,j as v,o as j,r as D,t as M,f as H,F as P,m as L,k as _,U as y,V as K,p as S,w as E,K as z,E as A}from"./client.2d583625.js";function B(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=t(e);if(a){var i=t(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function C(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function G(e,t,r){var a=e.slice();return a[12]=t[r],a[14]=r,a}function V(e,t,r){var a=e.slice();return a[9]=t[r],a[11]=r,a}function I(e,t,r){var a=e.slice();return a[12]=t[r],a[14]=r,a}function W(e,t,r){var a=e.slice();return a[9]=t[r],a[11]=r,a}function T(e){var t,r,a=e[4](e[12],e[0].language)+"";return{c:function(){t=M(a),r=M(", ")},l:function(e){t=L(e,a),r=L(e,", ")},m:function(e,a){D(e,t,a),D(e,r,a)},p:function(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&E(t,a)},d:function(e){e&&v(t),e&&v(r)}}}function q(e){for(var t,r,a,n,o,i,s,l,d,u,h,c,f=e[9].title+"",m=e[9].location+"",p=e[9].description[e[0].language]+"",g=e[9].dates,E=[],A=0;A<g.length;A+=1)E[A]=T(I(e,g,A));var B=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,a,n;return{c:function(){t=b("a"),r=b("img"),this.h()},l:function(e){t=k(e,"A",{class:!0,href:!0});var a=w(t);r=k(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(v),this.h()},h:function(){r.src!==(a=e[3][e[9].project])&&j(r,"src",a),j(r,"width","128px"),j(r,"height","128px"),j(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),j(r,"class","svelte-1fyi2j9"),j(t,"class","project-icon svelte-1fyi2j9"),j(t,"href",e[2][e[9].project])},m:function(e,a){D(e,t,a),S(t,r)},p:function(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&j(r,"alt",n)},d:function(e){e&&v(t)}}}(e);return{c:function(){t=b("li"),r=b("div"),a=b("h2"),n=M(f),o=H(),i=b("p");for(var e=0;e<E.length;e+=1)E[e].c();s=P(),d=H(),u=b("p"),h=H(),B&&B.c(),c=H(),this.h()},l:function(e){t=k(e,"LI",{class:!0});var l=w(t);r=k(l,"DIV",{class:!0});var m=w(r);a=k(m,"H2",{class:!0});var p=w(a);n=L(p,f),p.forEach(v),o=_(m),i=k(m,"P",{class:!0});for(var g=w(i),b=0;b<E.length;b+=1)E[b].l(g);s=P(),g.forEach(v),d=_(m),u=k(m,"P",{class:!0}),w(u).forEach(v),m.forEach(v),h=_(l),B&&B.l(l),c=_(l),l.forEach(v),this.h()},h:function(){j(a,"class","event-list--title svelte-1fyi2j9"),l=new y(null),j(i,"class","event-list--time-location svelte-1fyi2j9"),j(u,"class","event-list--description svelte-1fyi2j9"),j(r,"class","event-list--item--text svelte-1fyi2j9"),j(t,"class",K("event-list--item")+" svelte-1fyi2j9")},m:function(e,f){D(e,t,f),S(t,r),S(r,a),S(a,n),S(r,o),S(r,i);for(var g=0;g<E.length;g+=1)E[g].m(i,null);S(i,s),l.m(m,i),S(r,d),S(r,u),u.innerHTML=p,S(t,h),B&&B.m(t,null),S(t,c)},p:function(e,t){if(49&t){var r;for(g=e[9].dates,r=0;r<g.length;r+=1){var a=I(e,g,r);E[r]?E[r].p(a,t):(E[r]=T(a),E[r].c(),E[r].m(i,s))}for(;r<E.length;r+=1)E[r].d(1);E.length=g.length}1&t&&p!==(p=e[9].description[e[0].language]+"")&&(u.innerHTML=p),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&B.p(e,t)},d:function(e){e&&v(t),z(E,e),B&&B.d()}}}function F(e){var t,r,a=e[4](e[12],e[0].language)+"";return{c:function(){t=M(a),r=M(", ")},l:function(e){t=L(e,a),r=L(e,", ")},m:function(e,a){D(e,t,a),D(e,r,a)},p:function(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&E(t,a)},d:function(e){e&&v(t),e&&v(r)}}}function O(e){for(var t,r,a,n,o,i,s,l,d,u,h,c,f=e[9].title+"",m=e[9].location+"",p=e[9].description[e[0].language]+"",g=e[9].dates,K=[],E=0;E<g.length;E+=1)K[E]=F(G(e,g,E));var A=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){var t,r,a,n;return{c:function(){t=b("a"),r=b("img"),this.h()},l:function(e){t=k(e,"A",{class:!0,href:!0});var a=w(t);r=k(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(v),this.h()},h:function(){r.src!==(a=e[3][e[9].project])&&j(r,"src",a),j(r,"width","128px"),j(r,"height","128px"),j(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),j(r,"class","svelte-1fyi2j9"),j(t,"class","project-icon svelte-1fyi2j9"),j(t,"href",e[2][e[9].project])},m:function(e,a){D(e,t,a),S(t,r)},p:function(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&j(r,"alt",n)},d:function(e){e&&v(t)}}}(e);return{c:function(){t=b("li"),r=b("div"),a=b("h2"),n=M(f),o=H(),i=b("p");for(var e=0;e<K.length;e+=1)K[e].c();s=P(),d=H(),u=b("p"),h=H(),A&&A.c(),c=H(),this.h()},l:function(e){t=k(e,"LI",{class:!0});var l=w(t);r=k(l,"DIV",{class:!0});var m=w(r);a=k(m,"H2",{class:!0});var p=w(a);n=L(p,f),p.forEach(v),o=_(m),i=k(m,"P",{class:!0});for(var g=w(i),b=0;b<K.length;b+=1)K[b].l(g);s=P(),g.forEach(v),d=_(m),u=k(m,"P",{class:!0}),w(u).forEach(v),m.forEach(v),h=_(l),A&&A.l(l),c=_(l),l.forEach(v),this.h()},h:function(){j(a,"class","event-list--title svelte-1fyi2j9"),l=new y(null),j(i,"class","event-list--time-location svelte-1fyi2j9"),j(u,"class","event-list--description svelte-1fyi2j9"),j(r,"class","event-list--item--text svelte-1fyi2j9"),j(t,"class","event-list--item svelte-1fyi2j9")},m:function(e,f){D(e,t,f),S(t,r),S(r,a),S(a,n),S(r,o),S(r,i);for(var g=0;g<K.length;g+=1)K[g].m(i,null);S(i,s),l.m(m,i),S(r,d),S(r,u),u.innerHTML=p,S(t,h),A&&A.m(t,null),S(t,c)},p:function(e,t){if(81&t){var r;for(g=e[9].dates,r=0;r<g.length;r+=1){var a=G(e,g,r);K[r]?K[r].p(a,t):(K[r]=F(a),K[r].c(),K[r].m(i,s))}for(;r<K.length;r+=1)K[r].d(1);K.length=g.length}1&t&&p!==(p=e[9].description[e[0].language]+"")&&(u.innerHTML=p),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&A.p(e,t)},d:function(e){e&&v(t),z(K,e),A&&A.d()}}}function R(e){var t,r,a,n,o,i,s,l,d,u=e[1].title[e[0].language]+"",h=e[1].intro[e[0].language]+"",c=e[5].length>0&&function(e){for(var t,r=e[5],a=[],n=0;n<r.length;n+=1)a[n]=q(W(e,r,n));return{c:function(){t=b("ul");for(var e=0;e<a.length;e+=1)a[e].c();this.h()},l:function(e){t=k(e,"UL",{class:!0});for(var r=w(t),n=0;n<a.length;n+=1)a[n].l(r);r.forEach(v),this.h()},h:function(){j(t,"class","event-list svelte-1fyi2j9")},m:function(e,r){D(e,t,r);for(var n=0;n<a.length;n+=1)a[n].m(t,null)},p:function(e,n){if(61&n){var o;for(r=e[5],o=0;o<r.length;o+=1){var i=W(e,r,o);a[o]?a[o].p(i,n):(a[o]=q(i),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},d:function(e){e&&v(t),z(a,e)}}}(e),f=e[6].length>0&&function(e){for(var t,r,a,n,o=e[1].pastEventsHeading[e[0].language]+"",i=e[6],s=[],l=0;l<i.length;l+=1)s[l]=O(V(e,i,l));return{c:function(){t=b("h2"),r=M(o),a=H(),n=b("ul");for(var e=0;e<s.length;e+=1)s[e].c();this.h()},l:function(e){t=k(e,"H2",{class:!0});var i=w(t);r=L(i,o),i.forEach(v),a=_(e),n=k(e,"UL",{class:!0});for(var l=w(n),d=0;d<s.length;d+=1)s[d].l(l);l.forEach(v),this.h()},h:function(){j(t,"class","event-list--section-heading svelte-1fyi2j9"),j(n,"class","event-list past-events svelte-1fyi2j9")},m:function(e,o){D(e,t,o),S(t,r),D(e,a,o),D(e,n,o);for(var i=0;i<s.length;i+=1)s[i].m(n,null)},p:function(e,t){if(1&t&&o!==(o=e[1].pastEventsHeading[e[0].language]+"")&&E(r,o),93&t){var a;for(i=e[6],a=0;a<i.length;a+=1){var l=V(e,i,a);s[a]?s[a].p(l,t):(s[a]=O(l),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=i.length}},d:function(e){e&&v(t),e&&v(a),e&&v(n),z(s,e)}}}(e);return{c:function(){t=b("img"),r=H(),a=b("h1"),n=M(u),o=H(),i=b("p"),s=H(),l=b("div"),c&&c.c(),d=H(),f&&f.c(),this.h()},l:function(e){t=k(e,"IMG",{class:!0,src:!0,alt:!0}),r=_(e),a=k(e,"H1",{});var h=w(a);n=L(h,u),h.forEach(v),o=_(e),i=k(e,"P",{id:!0,class:!0}),w(i).forEach(v),s=_(e),l=k(e,"DIV",{id:!0,class:!0});var m=w(l);c&&c.l(m),d=_(m),f&&f.l(m),m.forEach(v),this.h()},h:function(){j(t,"class","pic-mobile"),t.src!=="/images/events-mobile.jpg"&&j(t,"src","/images/events-mobile.jpg"),j(t,"alt","Louise Augoyard steht neben ihrer Harfe."),j(i,"id","events-intro"),j(i,"class","svelte-1fyi2j9"),j(l,"id","events-container"),j(l,"class","svelte-1fyi2j9")},m:function(e,u){D(e,t,u),D(e,r,u),D(e,a,u),S(a,n),D(e,o,u),D(e,i,u),i.innerHTML=h,D(e,s,u),D(e,l,u),c&&c.m(l,null),S(l,d),f&&f.m(l,null)},p:function(e,t){1&t&&u!==(u=e[1].title[e[0].language]+"")&&E(n,u),1&t&&h!==(h=e[1].intro[e[0].language]+"")&&(i.innerHTML=h),e[5].length>0&&c.p(e,t),e[6].length>0&&f.p(e,t)},d:function(e){e&&v(t),e&&v(r),e&&v(a),e&&v(o),e&&v(i),e&&v(s),e&&v(l),c&&c.d(),f&&f.d()}}}function $(e){var t,r;return t=new l({props:{$$slots:{default:[R]},$$scope:{ctx:e}}}),{c:function(){d(t.$$.fragment)},l:function(e){u(t.$$.fragment,e)},m:function(e,a){h(t,e,a),r=!0},p:function(e,r){var a=c(r,1)[0],n={};131073&a&&(n.$$scope={dirty:a,ctx:e}),t.$set(n)},i:function(e){r||(f(t.$$.fragment,e),r=!0)},o:function(e){m(t.$$.fragment,e),r=!1},d:function(e){p(t,e)}}}function x(e,t,r){var a;g(e,A,(function(e){return r(0,a=e)}));var n,o={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2022,4,5,16,0)],title:"Spiele mir einen Baum",location:"Frauenhaus, Bochum",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a><br>NACHHOLTERMIN",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,4,5,9,0)],title:"Spiele mir einen Baum",location:"Städt. Musikkindergarten Gedulderweg, Sprockhövel",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a>",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,3,28,9,30)],title:"Spiele mir einen Baum",location:"Ev. KiTa Eislebener Straße, Bochum",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a>",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,3,4,9,30)],title:"Spiele mir einen Baum",location:"Carolinengrundschule, Bochum",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a>",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,3,3,15,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a>",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a>"}},{dates:[new Date(2022,2,24,9,30)],title:"Spiele mir einen Baum",location:"Caritas-Kindergarten St. Viktoria, Bochum",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a>",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,2,21,15,30)],title:"Konzert Flöte und Harfe",location:"Caroline Oetker Stift Bielefeld",project:"trio-sophora",description:{de:"Werke von Marais, Cras, Bartók und Piazzolla<br>Private Veranstaltung",fr:"Œuvres de Marais, Cras, Bartók et Piazzolla<br>Manifestation Privée"}},{dates:[new Date(2022,2,18,17,0)],title:"Finissage Retrospektive Jürgen Heckmanns",location:"Elsbachhaus, Herford",project:"",description:{de:"Harfe solo",fr:"Harpe seule"}},{dates:[new Date(2022,2,14,19,30)],title:"5. Philharmonisches Konzert",location:"Große Bühne, Theater Greifswald",project:"orchester",description:{de:"Veranstaltung des <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>Philharmonischen Orchesters Vorpommern</a>",fr:"Manifestation de <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>l'Orchestre Philharmonique de Vorpommern</a>"}},{dates:[new Date(2022,2,13,18,0)],title:"My Fair Lady, Musical von Frederick Loewe",location:"Theater Magdeburg, Opernhaus Bühne",project:"orchester",description:{de:"Veranstaltung des Theaters Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/my-fair-lady/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation du Théâtre de Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/my-fair-lady/' target='_blank'>Informations</a>"}},{dates:[new Date(2022,2,6,18,0)],title:"5. Philharmonisches Konzert",location:"Große Bühne, Theater Stralsund",project:"orchester",description:{de:"Veranstaltung des <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>Philharmonischen Orchesters Vorpommern</a>",fr:"Manifestation de <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>l'Orchestre Philharmonique de Vorpommern</a>"}},{dates:[new Date(2022,2,3,19,30)],title:"5. Philharmonisches Konzert",location:"Große Bühne, Theater Stralsund",project:"orchester",description:{de:"Veranstaltung des <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>Philharmonischen Orchesters Vorpommern</a>",fr:"Manifestation de <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>l'Orchestre Philharmonique de Vorpommern</a>"}},{dates:[new Date(2022,2,2,19,30)],title:"5. Philharmonisches Konzert",location:"Große Bühne, Theater Stralsund",project:"orchester",description:{de:"Veranstaltung des <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>Philharmonischen Orchesters Vorpommern</a>",fr:"Manifestation de <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>l'Orchestre Philharmonique de Vorpommern</a>"}},{dates:[new Date(2022,2,1,19,30)],title:"5. Philharmonisches Konzert",location:"Große Bühne, Theater Greifswald",project:"orchester",description:{de:"Veranstaltung des <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>Philharmonischen Orchesters Vorpommern</a>",fr:"Manifestation de <a href='https://www.theater-vorpommern.de/de/ensemble/philharmonisches-orchester-vorpommern' target='_blank'>l'Orchestre Philharmonique de Vorpommern</a>"}},{dates:[new Date(2022,1,17,16,0)],title:"Spiele mir einen Baum",location:"Frauenhaus, Bochum",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a><br>VERSCHOBEN (5.05.2022)",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a><br>REPORTÉ (5 mai 2022)"}},{dates:[new Date(2022,1,10,9,30)],title:"Emil und die Detektive, Hörspiel für Kinder von Guido Rennert",location:"Waldkaserne, Hilden",project:"",description:{de:"Ausbildungsmusikkorps der Bundeswehr<br>Private Veranstaltung",fr:"Ausbildungsmusikkorps der Bundeswehr<br>Manifestation privée"}},{dates:[new Date(2022,1,5,19,30)],title:"My Fair Lady, Musical von Frederick Loewe",location:"Theater Magdeburg, Opernhaus Bühne",project:"orchester",description:{de:"Veranstaltung des Theaters Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/my-fair-lady/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation du Théâtre de Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/my-fair-lady/' target='_blank'>Informations</a>"}},{dates:[new Date(2022,1,4,19,30)],title:"Falstaff, Oper von Giuseppe Verdi",location:"Theater Magdeburg, Opernhaus Bühne",project:"orchester",description:{de:"Veranstaltung des Theaters Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/falstaff/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation du Théâtre de Magdeburg<br><a href='https://www.theater-magdeburg.de/spielplan/musiktheater/sz-20212022/premieren-2122/falstaff/' target='_blank'>Informations</a>"}},{dates:[new Date(2022,0,31,18,30)],title:"Künstlerische Masterprüfung Polychronis Karamatidis",location:"Konzerthaus, Detmold",project:"",description:{de:"Claude Debussy, Sonate für Flöte, Viola und Harfe<br><a href='https://youtu.be/M9eVGfaSeq4' target='_blank'>Livestream</a>",fr:"Claude Debussy, Sonate pour flûte, alto et harpe<br><a href='https://youtu.be/M9eVGfaSeq4' target='_blank'>Livestream</a>"}},{dates:[new Date(2022,0,25,9,0)],title:"Spiele mir einen Baum",location:"Musik-KiTa, Detmold",project:"baum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Weitere Informationen</a>",fr:"Concert pour enfants avec harpe et dessin en direct<br>Duo Esquisse (<a href='https://www.laurahedon.com/' target='_blank'>Laura Hedon</a>)<br><a href='/projekte/duo-esquisse'>Plus d'informations</a>"}},{dates:[new Date(2022,0,21,20,0)],title:"Dialoge - Grenzenlos",location:"St. Petrikirche, Minden",project:"",description:{de:"Musik u.a. von Sprenger, Fallah, Pärt und Guth<br><a href='http://www.ensemblehorizonte.de/' target='_blank'>Ensemble Horizonte</a>",fr:"Compositions de Sprenger, Fallah, Pärt, Guth...<br><a href='http://www.ensemblehorizonte.de/' target='_blank'>Ensemble Horizonte</a>"}},{dates:[new Date(2022,0,16,17,0)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Stadthalle Balingen",project:"orchester",description:{de:"Veranstaltung der Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2022,0,15,19,30)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Kultur- und Kongresszentrum Oberschwaben",project:"orchester",description:{de:"Veranstaltung der Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2022,0,12,20,0)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Heinz-Hilpert-Theater, Lünen",project:"orchester",description:{de:"Veranstaltung der Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2021,11,24,22,0)],title:"Christmette",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la Messe de minuit"}},{dates:[new Date(2021,11,22,16,0)],title:"Weihnachtsgottesdient",location:"Caroline Oetker Stift Bielefeld",project:"",description:{de:"Harfe solo, musikalische Gestaltung des Gottesdientes<br>Private Veranstaltung",fr:"Harpe seule, accompagnement musical de la messe de Noël<br>Manifestation Privée<br>"}},{dates:[new Date(2021,11,21,19,30)],title:"3. Abonnentenkonzert DKO",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"<a href='https://www.detmolder-kammerorchester.de/' target='_blank'>Detmolder Kammerorchester</a>",fr:"<a href='https://www.detmolder-kammerorchester.de/' target='_blank'>Orchestre de chambre de Detmold</a>"}},{dates:[new Date(2021,11,18,18,30)],title:"Britten: A Ceremony of Carols",location:"Propsteikirche St Peter und Paul, Bochum",project:"",description:{de:"Musik an den Weihnachtstagen<br>Vokalensemble Propsteimusik",fr:"Musique pour le temps de Noël<br>Ensemble vocal Propsteimusik"}},{dates:[new Date(2021,11,16,19,30)],title:"Britten: A Ceremony of Carols",location:"Propsteikirche St Peter und Paul, Bochum",project:"",description:{de:"Musik an den Weihnachtstagen<br>Vokalensemble Propsteimusik",fr:"Musique pour le temps de Noël<br>Ensemble vocal Propsteimusik"}},{dates:[new Date(2021,11,20,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,17,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,15,19,0)],title:"Roratemesse",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la veillée de Noël"}},{dates:[new Date(2021,11,12,15,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a><br>ABGESAGT",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a><br>ANNULE"}},{dates:[new Date(2021,11,11,17,0)],title:"Britten: A Ceremony of Carols",location:"Ev. Kirche Eichlinghofen St. Margareta, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,10,18,0)],title:"Absolventenveranstaltung",location:"Westfälische Hochschule, Recklinghausen",description:{de:"Harfe und Flöte (Tekla Varga)<br>Private Veranstaltung<br>ABGESAGT",fr:"Harpe et flûte (Tekla Varga)<br>Manifestation privée<br>ANNULE"}},{dates:[new Date(2021,11,8,18,0)],title:"Britten: A Ceremony of Carols",location:"St. Ewaldi, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,7,18,0)],title:"Britten: A Ceremony of Carols",location:"St. Ewaldi, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,10,29,16,0)],title:"Konzert Trio Sophora",location:"Caroline Oetker Stift Bielefeld",project:"trio-sophora",description:{de:"Französische Musik<br>Private Veranstaltung<br>ABGESAGT",fr:"Musique française<br>Manifestation Privée<br>ANNULE"}},{dates:[new Date(2021,10,24,20,0)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Elbeforum Brunsbüttel",project:"orchester",description:{de:"Veranstaltung des Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2021,10,21,16,0)],title:"Monsieur Croche",location:"Propsteikirche St Peter und Paul, Bochum",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,10,7,17,0)],title:"Monsieur Croche",location:"Heilig Geist Kirche, Bielefeld",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,9,30,18,0)],title:"Jubiläumsveranstaltung: 100 Jahre Bahnhofsmission Bochum",location:"Propsteikirche St Peter und Paul, Bochum",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,9,29,17,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Abtei Marienmünster",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a>.",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a>."}},{dates:[new Date(2021,9,17,19,30)],title:"My Fair Lady, Musical von Frederick Loewe",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,9,2,10,0)],title:"Absolventenveranstaltung",location:"Lehrinstitut Lübeck ZAP-Nord",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,8,26,17,0)],title:"FRAKZIONEN",location:"Zionskirche, Bielefeld",project:"kammermusik",description:{de:"Konzert mit dem Harfenquartett Arpalando",fr:"Concert avec le quatuor de harpe Arpalando"}},{dates:[new Date(2021,8,24,17,0)],title:"De Musica",location:"Atelier von Jürgen Heckmanns, Herford",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a><br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Private Veranstaltung.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée."}},{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus, Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,7,26,15,0)],title:"Eindrücke der Natur",location:"Senioreneinrichtung Haus an der Graf-Adolf-Straße, Bochum",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,6,18,18,30)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de l'Hôtel de Ville, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,20,18,0)],title:"Das Land des Lächelns, Operette in drei Akten von Franz Lehár",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,5,18,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Evangelische Kita Eislebener Str., Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,8,15,45)],title:"Eindrücke der Natur",location:"Belia Seniorenresidenz Wattenscheid",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,4,30,14)],title:"10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",location:"Autobahnkirche RUHR",description:{de:"Musikalische Gestaltung des ökumenischen Gottesdienstes",fr:"Accompagnement musical de la célébration œcuménique"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},i={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},s=function(e){return e.getTime()>(new Date).getTime()},l=[],d=[],u=C(o.events);try{for(u.s();!(n=u.n()).done;){var h,c=n.value,f=!1,m=C(c.dates);try{for(m.s();!(h=m.n()).done;){if(s(h.value)){f=!0;break}}}catch(e){m.e(e)}finally{m.f()}f?l.push(c):d.push(c)}}catch(e){u.e(e)}finally{u.f()}return l.sort((function(e,t){return e.dates[0].getTime()-t.dates[0].getTime()})),d.sort((function(e,t){return t.dates[0].getTime()-e.dates[0].getTime()})),[a,o,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg",baum:"/images/ecureuil-800.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg","trio-sophora":"/images/trio-sophora-logo.svg","monsieur-croche":"/images/trio-sophora-logo.svg","de-musica":"/images/socrates-128.jpg"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"de",r=String(e.getDate());return"de"==t&&(r+="."),r+=" ".concat(i[t][e.getMonth()]," ").concat(e.getFullYear()," ").concat(e.getHours()),e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},l,d]}var J=function(t){e(l,s);var r=B(l);function l(e){var t;return a(this,l),t=r.call(this),n(i(t),e,x,$,o,{}),t}return l}();export default J;
