import{_ as e,a as n,b as t,c as i,i as s,s as r,d as a,S as u,M as o,e as c,f as l,g as d,q as f,h,j as m,k as p,n as g,o as v,p as k,r as b,u as z,v as w,x as E,y as I,z as q,A as S,l as $,t as L,F as j,m as y,w as H,B as x,C as A,H as B,K as P,J as R,E as M}from"./client.fe9feabf.js";function K(e){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=n(e);if(i){var a=n(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return t(this,s)}}function U(e,n,t){var i=e.slice();return i[2]=n[t],i[4]=t,i}function G(e){var n,t=e[2]+"";return{c:function(){n=c("p")},l:function(e){n=h(e,"P",{}),$(n).forEach(m)},m:function(e,i){b(e,n,i),n.innerHTML=t},p:function(e,i){1&i&&t!==(t=e[2]+"")&&(n.innerHTML=t)},d:function(e){e&&m(n)}}}function C(e){for(var n,t,i,s,r,a,u,o,d,f,g,z,w,E,I,q,S,M=e[1].title[e[0].language]+"",K=e[1].quote[e[0].language]+"",C=e[1].text[e[0].language],F=[],T=0;T<C.length;T+=1)F[T]=G(U(e,C,T));return{c:function(){n=c("img"),t=l(),i=c("h1"),s=L(M),r=l(),a=c("blockquote"),u=L(K),o=l(),d=c("picture"),f=c("source"),g=l(),z=c("source"),w=l(),E=c("img"),q=l();for(var e=0;e<F.length;e+=1)F[e].c();S=j(),this.h()},l:function(e){n=h(e,"IMG",{class:!0,src:!0,alt:!0}),t=p(e),i=h(e,"H1",{class:!0});var c=$(i);s=y(c,M),c.forEach(m),r=p(e),a=h(e,"BLOCKQUOTE",{class:!0});var l=$(a);u=y(l,K),l.forEach(m),o=p(e),d=h(e,"PICTURE",{});var v=$(d);f=h(v,"SOURCE",{srcset:!0}),g=p(v),z=h(v,"SOURCE",{srcset:!0}),w=p(v),E=h(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(m),q=p(e);for(var k=0;k<F.length;k+=1)F[k].l(e);S=j(),this.h()},h:function(){v(n,"class","pic-mobile"),n.src!=="/images/lessons-mobile.jpg"&&v(n,"src","/images/lessons-mobile.jpg"),v(n,"alt","Louise Augoyard sitzt vor ihrer Harfe."),v(i,"class","svelte-p90kbk"),v(a,"class","svelte-p90kbk"),v(f,"srcset","/images/lessons-512.jpg 512w"),v(z,"srcset","/images/lessons-1024.jpg 2x"),E.src!=="/images/lessons-1024.jpg"&&v(E,"src","/images/lessons-1024.jpg"),v(E,"class","pic-right pic-desktop svelte-p90kbk"),v(E,"alt","Louise Augoyard sitzt vor ihrer Harfe.")},m:function(e,c){b(e,n,c),b(e,t,c),b(e,i,c),k(i,s),b(e,r,c),b(e,a,c),k(a,u),b(e,o,c),b(e,d,c),k(d,f),k(d,g),k(d,z),k(d,w),k(d,E),b(e,q,c);for(var l=0;l<F.length;l+=1)F[l].m(e,c);b(e,S,c)},p:function(e,n){if(1&n&&M!==(M=e[1].title[e[0].language]+"")&&H(s,M),1&n&&K!==(K=e[1].quote[e[0].language]+"")&&H(u,K),3&n){var t;for(C=e[1].text[e[0].language],t=0;t<C.length;t+=1){var i=U(e,C,t);F[t]?F[t].p(i,n):(F[t]=G(i),F[t].c(),F[t].m(S.parentNode,S))}for(;t<F.length;t+=1)F[t].d(1);F.length=C.length}},i:function(e){I||x((function(){(I=A(E,R,{})).start()}))},o:B,d:function(e){e&&m(n),e&&m(t),e&&m(i),e&&m(r),e&&m(a),e&&m(o),e&&m(d),e&&m(q),P(F,e),e&&m(S)}}}function F(e){var n,t,i,s,r;return document.title=n="Louise Augoyard | "+e[1].title[e[0].language],s=new o({props:{$$slots:{default:[C]},$$scope:{ctx:e}}}),{c:function(){t=c("meta"),i=l(),d(s.$$.fragment),this.h()},l:function(e){var n=f('[data-svelte="svelte-25l38i"]',document.head);t=h(n,"META",{name:!0,content:!0}),n.forEach(m),i=p(e),g(s.$$.fragment,e),this.h()},h:function(){v(t,"name","description"),v(t,"content","Louise Augoyard bietet Harfenunterricht in Bochum für Kinder und Erwachsene, Anfänger und Fortgeschrittene.")},m:function(e,n){k(document.head,t),b(e,i,n),z(s,e,n),r=!0},p:function(e,t){var i=w(t,1)[0];(!r||3&i)&&n!==(n="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=n);var a={};33&i&&(a.$$scope={dirty:i,ctx:e}),s.$set(a)},i:function(e){r||(E(s.$$.fragment,e),r=!0)},o:function(e){I(s.$$.fragment,e),r=!1},d:function(e){m(t),e&&m(i),q(s,e)}}}function T(e,n,t){var i;S(e,M,(function(e){return t(0,i=e)}));return[i,{title:{de:"Unterricht",fr:"Enseignement",en:"Lessons"},quote:{de:"Musik gibt dem Herzen Seele, verleiht den Gedanken Flügel und lässt die Phantasie erblühen. – Platon",fr:"La musique donne une âme à nos cœurs, des ailes à la pensée, un essor à l’imagination. – Platon",en:"???"},text:{de:["Ein Instrument zu spielen ist die beste Möglichkeit, das eigene künstlerische Potenzial und die Kreativität zu entfalten, und Gefühle und den Reichtum der eigenen Vorstellungskraft auszudrücken. Mich hat das Harfenspiel mit leidenschaftlichen Künstlern zusammengebracht, es hat mir ermöglicht, fremde Kulturen zu erkunden, und intensive Erfahrungen mit meinem Publikum, meinen Schülern und meinen musikalischen Partnern zu teilen!","Es ist nie zu früh oder zu spät, ein Instrument zu lernen! Die Arbeitsmethoden und Ziele sind immer individuell auf die Bedürfnisse und Wünsche des Schülers abgestimmt. Ich kann Ihnen beibringen, Noten zu lesen, eine solide Spieltechnik zu erlernen und Ihre musikalische Kreativität zu verfeinern. Eine gesunde Haltung am Instrument wird Ihnen erlauben, mit Leichtigkeit zu spielen und ihren Körper in dieser anspruchsvollen Aktivität respektvoll und bewusst einzusetzen.","Wenn Sie das wünschen, können wir zusammen die Grundlagen der Harmonielehre erarbeiten und eine Basis fürs Improvisieren legen. Gemeinsam werden wir das Repertoire suchen, das Ihnen am meisten Freude bereitet, und Ihre eigenen Ziele für den Unterricht definieren. Dann können wir effiziente Übemethoden entwickeln, auf Basis derer sich eine langfristige kreative und bereichernde Beziehung mit dem Instrument entwickeln kann. Natürlich kann ich Sie auch beraten, wenn Sie ein Instrument kaufen oder mieten wollen, und Ihnen helfen, wann immer Sie etwa neue Saiten oder Noten brauchen.",'Ich unterrichte in Bochum. Bitte zögern Sie nicht, <a href="/kontakt">mich anzusprechen</a>, wenn Sie weitere Fragen haben!'],fr:["Jouer d’un instrument de musique est l’occasion privilégiée de développer son potentiel artistique, d’épanouir sa créativité, de se connecter à ses sentiments et à son imagination… La pratique de la harpe m’a amenée à rencontrer des artistes passionnés, à découvrir de nouvelles cultures et à vivre d’intenses moments de partage avec mon public, mes élèves et mes partenaires de jeu. ","Il n’est jamais ni trop tôt ni trop tard pour s’initier à la pratique d’un instrument ! Les méthodes de travail et les objectifs seront définis en fonction des besoins et des désirs de chacun. Je peux vous apprendre à lire une partition, à construire une technique solide et à affiner votre créativité musicale. Une bonne posture à l’instrument vous permettra de jouer avec aisance et dans le respect de votre corps.","Selon vos souhaits, vous pouvez vous familiariser avec les principes harmoniques élémentaires et acquérir des bases d’improvisation. Ensemble, nous pouvons chercher le répertoire qui vous procure le plus de plaisir, définir vos objectifs d’apprentissage et réfléchir à une organisation de travail aussi efficace que satisfaisante. Je suis naturellement disposée à vous conseiller dans vos recherches pour l’acquisition d’un instrument, l’achat de partitions, de cordes de harpe...","Les cours se déroulent à Bochum. Pour de plus amples renseignements, vous pouvez <a href='/kontakt'>m'écrire via la page contact.</a>"],en:["???"]}}]}var D=function(n){e(o,u);var t=K(o);function o(e){var n;return i(this,o),n=t.call(this),s(a(n),e,T,F,r,{}),n}return o}();export default D;
