import{_ as e,a as t,b as n,c as r,i as a,s as i,d as s,S as o,M as u,g as c,n as l,u as f,v as h,x as d,y as g,z as v,A as m,e as p,h as b,l as k,j as y,o as E,r as z,t as H,f as S,m as w,k as M,W as T,p as $,w as A,K as L,B as P,C as j,H as R,J as D,E as I}from"./client.51d6f165.js";function x(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=t(e);if(r){var s=t(this).constructor;a=Reflect.construct(i,arguments,s)}else a=i.apply(this,arguments);return n(this,a)}}function B(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t,n){var r=e.slice();return r[7]=t[n],r[9]=n,r}function C(e,t,n){var r=e.slice();return r[7]=t[n],r[9]=n,r}function J(e){var t,n,r,a,i,s,o,u,c,l,f,h=e[7].title+"",d=e[2](e[7].date,e[0].language)+"",g=e[7].location+"",v=e[7].description[e[0].language]+"";return{c:function(){t=p("li"),n=p("h2"),r=H(h),a=S(),i=p("p"),s=H(d),o=H(", "),c=S(),l=p("p"),f=S(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var u=k(t);n=b(u,"H2",{class:!0});var g=k(n);r=w(g,h),g.forEach(y),a=M(u),i=b(u,"P",{class:!0});var v=k(i);s=w(v,d),o=w(v,", "),v.forEach(y),c=M(u),l=b(u,"P",{class:!0}),k(l).forEach(y),f=M(u),u.forEach(y),this.h()},h:function(){E(n,"class","event-list--title svelte-kiduzh"),u=new T(null),E(i,"class","event-list--time-location svelte-kiduzh"),E(l,"class","event-list--description svelte-kiduzh"),E(t,"class","event-list--item svelte-kiduzh")},m:function(e,h){z(e,t,h),$(t,n),$(n,r),$(t,a),$(t,i),$(i,s),$(i,o),u.m(g,i),$(t,c),$(t,l),l.innerHTML=v,$(t,f)},p:function(e,t){1&t&&d!==(d=e[2](e[7].date,e[0].language)+"")&&A(s,d),1&t&&v!==(v=e[7].description[e[0].language]+"")&&(l.innerHTML=v)},d:function(e){e&&y(t)}}}function U(e){var t,n,r,a,i,s,o,u,c,l,f,h=e[7].title+"",d=e[2](e[7].date,e[0].language)+"",g=e[7].location+"",v=e[7].description[e[0].language]+"";return{c:function(){t=p("li"),n=p("h2"),r=H(h),a=S(),i=p("p"),s=H(d),o=H(", "),c=S(),l=p("p"),f=S(),this.h()},l:function(e){t=b(e,"LI",{class:!0});var u=k(t);n=b(u,"H2",{class:!0});var g=k(n);r=w(g,h),g.forEach(y),a=M(u),i=b(u,"P",{class:!0});var v=k(i);s=w(v,d),o=w(v,", "),v.forEach(y),c=M(u),l=b(u,"P",{class:!0}),k(l).forEach(y),f=M(u),u.forEach(y),this.h()},h:function(){E(n,"class","event-list--title svelte-kiduzh"),u=new T(null),E(i,"class","event-list--time-location svelte-kiduzh"),E(l,"class","event-list--description svelte-kiduzh"),E(t,"class","event-list--item svelte-kiduzh")},m:function(e,h){z(e,t,h),$(t,n),$(n,r),$(t,a),$(t,i),$(i,s),$(i,o),u.m(g,i),$(t,c),$(t,l),l.innerHTML=v,$(t,f)},p:function(e,t){1&t&&d!==(d=e[2](e[7].date,e[0].language)+"")&&A(s,d),1&t&&v!==(v=e[7].description[e[0].language]+"")&&(l.innerHTML=v)},d:function(e){e&&y(t)}}}function F(e){var t,n,r,a,i,s,o,u,c,l,f,h,d,g,v,m,T,I,x=e[1].title[e[0].language]+"",B=e[1].intro[e[0].language]+"",G=e[3].length>0&&function(e){for(var t,n=e[3],r=[],a=0;a<n.length;a+=1)r[a]=J(C(e,n,a));return{c:function(){t=p("ul");for(var e=0;e<r.length;e+=1)r[e].c();this.h()},l:function(e){t=b(e,"UL",{class:!0});for(var n=k(t),a=0;a<r.length;a+=1)r[a].l(n);n.forEach(y),this.h()},h:function(){E(t,"class","event-list")},m:function(e,n){z(e,t,n);for(var a=0;a<r.length;a+=1)r[a].m(t,null)},p:function(e,a){if(13&a){var i;for(n=e[3],i=0;i<n.length;i+=1){var s=C(e,n,i);r[i]?r[i].p(s,a):(r[i]=J(s),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d:function(e){e&&y(t),L(r,e)}}}(e),F=e[4].length>0&&function(e){for(var t,n,r,a,i=e[1].pastEventsHeading[e[0].language]+"",s=e[4],o=[],u=0;u<s.length;u+=1)o[u]=U(O(e,s,u));return{c:function(){t=p("h2"),n=H(i),r=S(),a=p("ul");for(var e=0;e<o.length;e+=1)o[e].c();this.h()},l:function(e){t=b(e,"H2",{class:!0});var s=k(t);n=w(s,i),s.forEach(y),r=M(e),a=b(e,"UL",{class:!0});for(var u=k(a),c=0;c<o.length;c+=1)o[c].l(u);u.forEach(y),this.h()},h:function(){E(t,"class","event-list--section-heading svelte-kiduzh"),E(a,"class","event-list past-events svelte-kiduzh")},m:function(e,i){z(e,t,i),$(t,n),z(e,r,i),z(e,a,i);for(var s=0;s<o.length;s+=1)o[s].m(a,null)},p:function(e,t){if(1&t&&i!==(i=e[1].pastEventsHeading[e[0].language]+"")&&A(n,i),21&t){var r;for(s=e[4],r=0;r<s.length;r+=1){var u=O(e,s,r);o[r]?o[r].p(u,t):(o[r]=U(u),o[r].c(),o[r].m(a,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},d:function(e){e&&y(t),e&&y(r),e&&y(a),L(o,e)}}}(e);return{c:function(){t=p("img"),n=S(),r=p("h1"),a=H(x),i=S(),s=p("p"),o=S(),u=p("div"),c=p("picture"),l=p("source"),f=S(),h=p("source"),d=S(),g=p("img"),m=S(),T=p("div"),G&&G.c(),I=S(),F&&F.c(),this.h()},l:function(e){t=b(e,"IMG",{class:!0,src:!0,alt:!0}),n=M(e),r=b(e,"H1",{});var v=k(r);a=w(v,x),v.forEach(y),i=M(e),s=b(e,"P",{id:!0,class:!0}),k(s).forEach(y),o=M(e),u=b(e,"DIV",{id:!0,class:!0});var p=k(u);c=b(p,"PICTURE",{id:!0,class:!0});var E=k(c);l=b(E,"SOURCE",{srcset:!0}),f=M(E),h=b(E,"SOURCE",{srcset:!0}),d=M(E),g=b(E,"IMG",{src:!0,class:!0,alt:!0}),E.forEach(y),m=M(p),T=b(p,"DIV",{id:!0,class:!0});var z=k(T);G&&G.l(z),I=M(z),F&&F.l(z),z.forEach(y),p.forEach(y),this.h()},h:function(){E(t,"class","pic-mobile"),t.src!=="/images/events-mobile.jpg"&&E(t,"src","/images/events-mobile.jpg"),E(t,"alt","Louise Augoyard steht neben ihrer Harfe."),E(s,"id","events-intro"),E(s,"class","svelte-kiduzh"),E(l,"srcset","/images/events-512.jpg 512w"),E(h,"srcset","/images/events-1024.jpg 2x"),g.src!=="/images/events-1024.jpg"&&E(g,"src","/images/events-1024.jpg"),E(g,"class","pic-desktop"),E(g,"alt","Louise Augoyard steht neben ihrer Harfe."),E(c,"id","events-picture"),E(c,"class","svelte-kiduzh"),E(T,"id","events-text"),E(T,"class","svelte-kiduzh"),E(u,"id","events-container"),E(u,"class","svelte-kiduzh")},m:function(e,v){z(e,t,v),z(e,n,v),z(e,r,v),$(r,a),z(e,i,v),z(e,s,v),s.innerHTML=B,z(e,o,v),z(e,u,v),$(u,c),$(c,l),$(c,f),$(c,h),$(c,d),$(c,g),$(u,m),$(u,T),G&&G.m(T,null),$(T,I),F&&F.m(T,null)},p:function(e,t){1&t&&x!==(x=e[1].title[e[0].language]+"")&&A(a,x),1&t&&B!==(B=e[1].intro[e[0].language]+"")&&(s.innerHTML=B),e[3].length>0&&G.p(e,t),e[4].length>0&&F.p(e,t)},i:function(e){v||P((function(){(v=j(g,D,{})).start()}))},o:R,d:function(e){e&&y(t),e&&y(n),e&&y(r),e&&y(i),e&&y(s),e&&y(o),e&&y(u),G&&G.d(),F&&F.d()}}}function K(e){var t,n;return t=new u({props:{$$slots:{default:[F]},$$scope:{ctx:e}}}),{c:function(){c(t.$$.fragment)},l:function(e){l(t.$$.fragment,e)},m:function(e,r){f(t,e,r),n=!0},p:function(e,n){var r=h(n,1)[0],a={};2049&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i:function(e){n||(d(t.$$.fragment,e),n=!0)},o:function(e){g(t.$$.fragment,e),n=!1},d:function(e){v(t,e)}}}function W(e,t,n){var r;m(e,I,(function(e){return n(0,r=e)}));var a,i={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{date:new Date(2021,3,21,10,30),title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a. Liturgische Leitung: Diakon Winfried Rottenecker. Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... Direction liturgique: Diakon Winfried Rottenecker. Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{date:new Date(2021,3,3,20),title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},s={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},o=[],u=[],c=B(i.events);try{for(c.s();!(a=c.n()).done;){var l=a.value;l.date.getTime()>(new Date).getTime()?o.push(l):u.push(l)}}catch(e){c.e(e)}finally{c.f()}return o.sort((function(e,t){return e.date.getTime()-t.date.getTime()})),u.sort((function(e,t){return t.date.getTime()-e.date.getTime()})),[r,i,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"de",n=String(e.getDate());return"de"==t&&(n+="."),n+=" ".concat(s[t][e.getMonth()-1]," ").concat(e.getFullYear(),", ").concat(e.getHours()),e.getMinutes()?n+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(n+="h"),"de"==t&&(n+=" Uhr"),n},o,u]}var _=function(t){e(u,o);var n=x(u);function u(e){var t;return r(this,u),t=n.call(this),a(s(t),e,W,K,i,{}),t}return u}();export default _;
