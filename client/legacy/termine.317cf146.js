import{_ as e,a as t,b as n,c as r,i as a,s,d as i,S as o,M as c,g as u,n as l,u as f,v,x as h,y as d,z as g,A as m,e as p,h as b,l as y,j as E,o as H,r as k,t as w,f as S,m as T,k as M,W as $,p as A,w as P,K as j,B as L,C as R,H as I,J as B,E as D}from"./client.e412700f.js";function x(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=t(e);if(r){var i=t(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return n(this,a)}}function z(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t,n){var r=e.slice();return r[7]=t[n],r[9]=n,r}function O(e,t,n){var r=e.slice();return r[7]=t[n],r[9]=n,r}function U(e){var t,n,r,a,s,i,o,c,u,l,f,v=e[7].title+"",h=e[2](e[7].date,e[0].language)+"",d=e[7].location+"",g=e[7].description[e[0].language]+"";return{c:function(){t=p("li"),n=p("h2"),r=w(v),a=S(),s=p("p"),i=w(h),o=w(", "),u=S(),l=p("p"),f=S(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var c=y(t);n=b(c,"H2",{class:!0});var d=y(n);r=T(d,v),d.forEach(E),a=M(c),s=b(c,"P",{class:!0});var g=y(s);i=T(g,h),o=T(g,", "),g.forEach(E),u=M(c),l=b(c,"P",{class:!0}),y(l).forEach(E),f=M(c),c.forEach(E),this.h()},h:function(){H(n,"class","event-list--title svelte-1emvd1a"),c=new $(null),H(s,"class","event-list--time-location svelte-1emvd1a"),H(l,"class","event-list--description svelte-1emvd1a"),H(t,"class","event-list--item svelte-1emvd1a")},m:function(e,v){k(e,t,v),A(t,n),A(n,r),A(t,a),A(t,s),A(s,i),A(s,o),c.m(d,s),A(t,u),A(t,l),l.innerHTML=g,A(t,f)},p:function(e,t){1&t&&h!==(h=e[2](e[7].date,e[0].language)+"")&&P(i,h),1&t&&g!==(g=e[7].description[e[0].language]+"")&&(l.innerHTML=g)},d:function(e){e&&E(t)}}}function F(e){var t,n,r,a,s,i,o,c,u,l,f,v=e[7].title+"",h=e[2](e[7].date,e[0].language)+"",d=e[7].location+"",g=e[7].description[e[0].language]+"";return{c:function(){t=p("li"),n=p("h2"),r=w(v),a=S(),s=p("p"),i=w(h),o=w(", "),u=S(),l=p("p"),f=S(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var c=y(t);n=b(c,"H2",{class:!0});var d=y(n);r=T(d,v),d.forEach(E),a=M(c),s=b(c,"P",{class:!0});var g=y(s);i=T(g,h),o=T(g,", "),g.forEach(E),u=M(c),l=b(c,"P",{class:!0}),y(l).forEach(E),f=M(c),c.forEach(E),this.h()},h:function(){H(n,"class","event-list--title svelte-1emvd1a"),c=new $(null),H(s,"class","event-list--time-location svelte-1emvd1a"),H(l,"class","event-list--description svelte-1emvd1a"),H(t,"class","event-list--item svelte-1emvd1a")},m:function(e,v){k(e,t,v),A(t,n),A(n,r),A(t,a),A(t,s),A(s,i),A(s,o),c.m(d,s),A(t,u),A(t,l),l.innerHTML=g,A(t,f)},p:function(e,t){1&t&&h!==(h=e[2](e[7].date,e[0].language)+"")&&P(i,h),1&t&&g!==(g=e[7].description[e[0].language]+"")&&(l.innerHTML=g)},d:function(e){e&&E(t)}}}function K(e){var t,n,r,a,s,i,o,c,u,l,f,v,h,d,g,m,$,D,x=e[1].title[e[0].language]+"",z=e[1].intro[e[0].language]+"",C=e[3].length>0&&function(e){for(var t,n=e[3],r=[],a=0;a<n.length;a+=1)r[a]=U(O(e,n,a));return{c:function(){t=p("ul");for(var e=0;e<r.length;e+=1)r[e].c();this.h()},l:function(e){t=b(e,"UL",{class:!0});for(var n=y(t),a=0;a<r.length;a+=1)r[a].l(n);n.forEach(E),this.h()},h:function(){H(t,"class","event-list")},m:function(e,n){k(e,t,n);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p:function(e,a){if(13&a){var s;for(n=e[3],s=0;s<n.length;s+=1){var i=O(e,n,s);r[s]?r[s].p(i,a):(r[s]=U(i),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d:function(e){e&&E(t),j(r,e)}}}(e),K=e[4].length>0&&function(e){for(var t,n,r,a,s=e[1].pastEventsHeading[e[0].language]+"",i=e[4],o=[],c=0;c<i.length;c+=1)o[c]=F(J(e,i,c));return{c:function(){t=p("h2"),n=w(s),r=S(),a=p("ul");for(var e=0;e<o.length;e+=1)o[e].c();this.h()},l:function(e){t=b(e,"H2",{class:!0});var i=y(t);n=T(i,s),i.forEach(E),r=M(e),a=b(e,"UL",{class:!0});for(var c=y(a),u=0;u<o.length;u+=1)o[u].l(c);c.forEach(E),this.h()},h:function(){H(t,"class","event-list--section-heading svelte-1emvd1a"),H(a,"class","event-list past-events svelte-1emvd1a")},m:function(e,s){k(e,t,s),A(t,n),k(e,r,s),k(e,a,s);for(var i=0;i<o.length;i+=1)o[i].m(a,null)},p:function(e,t){if(1&t&&s!==(s=e[1].pastEventsHeading[e[0].language]+"")&&P(n,s),21&t){var r;for(i=e[4],r=0;r<i.length;r+=1){var c=J(e,i,r);o[r]?o[r].p(c,t):(o[r]=F(c),o[r].c(),o[r].m(a,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}},d:function(e){e&&E(t),e&&E(r),e&&E(a),j(o,e)}}}(e);return{c:function(){t=p("img"),n=S(),r=p("h1"),a=w(x),s=S(),i=p("p"),o=S(),c=p("div"),u=p("picture"),l=p("source"),f=S(),v=p("source"),h=S(),d=p("img"),m=S(),$=p("div"),C&&C.c(),D=S(),K&&K.c(),this.h()},l:function(e){t=b(e,"IMG",{class:!0,src:!0,alt:!0}),n=M(e),r=b(e,"H1",{});var g=y(r);a=T(g,x),g.forEach(E),s=M(e),i=b(e,"P",{id:!0,class:!0}),y(i).forEach(E),o=M(e),c=b(e,"DIV",{id:!0,class:!0});var p=y(c);u=b(p,"PICTURE",{id:!0,class:!0});var H=y(u);l=b(H,"SOURCE",{srcset:!0}),f=M(H),v=b(H,"SOURCE",{srcset:!0}),h=M(H),d=b(H,"IMG",{src:!0,class:!0,alt:!0}),H.forEach(E),m=M(p),$=b(p,"DIV",{id:!0,class:!0});var k=y($);C&&C.l(k),D=M(k),K&&K.l(k),k.forEach(E),p.forEach(E),this.h()},h:function(){H(t,"class","pic-mobile"),t.src!=="/images/events-mobile.jpg"&&H(t,"src","/images/events-mobile.jpg"),H(t,"alt","Louise Augoyard steht neben ihrer Harfe."),H(i,"id","events-intro"),H(i,"class","svelte-1emvd1a"),H(l,"srcset","/images/events-512.jpg 512w"),H(v,"srcset","/images/events-1024.jpg 2x"),d.src!=="/images/events-1024.jpg"&&H(d,"src","/images/events-1024.jpg"),H(d,"class","pic-desktop"),H(d,"alt","Louise Augoyard steht neben ihrer Harfe."),H(u,"id","events-picture"),H(u,"class","svelte-1emvd1a"),H($,"id","events-text"),H($,"class","svelte-1emvd1a"),H(c,"id","events-container"),H(c,"class","svelte-1emvd1a")},m:function(e,g){k(e,t,g),k(e,n,g),k(e,r,g),A(r,a),k(e,s,g),k(e,i,g),i.innerHTML=z,k(e,o,g),k(e,c,g),A(c,u),A(u,l),A(u,f),A(u,v),A(u,h),A(u,d),A(c,m),A(c,$),C&&C.m($,null),A($,D),K&&K.m($,null)},p:function(e,t){1&t&&x!==(x=e[1].title[e[0].language]+"")&&P(a,x),1&t&&z!==(z=e[1].intro[e[0].language]+"")&&(i.innerHTML=z),e[3].length>0&&C.p(e,t),e[4].length>0&&K.p(e,t)},i:function(e){g||L((function(){(g=R(d,B,{})).start()}))},o:I,d:function(e){e&&E(t),e&&E(n),e&&E(r),e&&E(s),e&&E(i),e&&E(o),e&&E(c),C&&C.d(),K&&K.d()}}}function G(e){var t,n;return t=new c({props:{$$slots:{default:[K]},$$scope:{ctx:e}}}),{c:function(){u(t.$$.fragment)},l:function(e){l(t.$$.fragment,e)},m:function(e,r){f(t,e,r),n=!0},p:function(e,n){var r=v(n,1)[0],a={};2049&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i:function(e){n||(h(t.$$.fragment,e),n=!0)},o:function(e){d(t.$$.fragment,e),n=!1},d:function(e){g(t,e)}}}function _(e,t,n){var r;m(e,D,(function(e){return n(0,r=e)}));var a,s={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{date:new Date(2021,3,21,10,30),title:"Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Harfe solo mit Werken von Bach, Glinka, Berio...<br>Konzert für die Besucher der Bahnhofsmission. Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio...<br>Concert pour personnes sans-abri et en difficultés sociales et financières, soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{date:new Date(2021,3,3,20),title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Werke für Flöte und Harfe",fr:"Oeuvres pour flûte et harpe"}}]},i={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},o=[],c=[],u=z(s.events);try{for(u.s();!(a=u.n()).done;){var l=a.value;l.date.getTime()>(new Date).getTime()?o.push(l):c.push(l)}}catch(e){u.e(e)}finally{u.f()}return o.sort((function(e,t){return e.date.getTime()-t.date.getTime()})),c.sort((function(e,t){return t.date.getTime()-e.date.getTime()})),[r,s,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"de",n=String(e.getDate());return"de"==t&&(n+="."),n+=" ".concat(i[t][e.getMonth()-1]," ").concat(e.getFullYear(),", ").concat(e.getHours()),e.getMinutes()?n+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(n+="h"),"de"==t&&(n+=" Uhr"),n},o,c]}var N=function(t){e(c,o);var n=x(c);function c(e){var t;return r(this,c),t=n.call(this),a(i(t),e,_,G,s,{}),t}return c}();export default N;
