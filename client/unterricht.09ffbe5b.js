import{S as e,i as n,s,M as t,e as i,a as r,c as a,q as u,b as l,d as o,f as c,j as d,k as m,l as h,m as p,n as g,p as f,r as v,u as k,v as b,g as z,t as w,A as E,h as I,o as q,w as S,x as $,C as L,F as j,E as x,z as A}from"./client.3766dc10.js";function H(e,n,s){const t=e.slice();return t[2]=n[s],t[4]=s,t}function B(e){let n,s=e[2]+"";return{c(){n=i("p")},l(e){n=l(e,"P",{}),z(n).forEach(o)},m(e,t){p(e,n,t),n.innerHTML=s},p(e,t){1&t&&s!==(s=e[2]+"")&&(n.innerHTML=s)},d(e){e&&o(n)}}}function M(e){let n,s,t,a,u,d,g,f,v,k,b,A,M,P,K,U,y,G,C,F=e[1].title[e[0].language]+"",R=e[1].quote[e[0].language]+"",T=e[1].text[e[0].language],N=[];for(let n=0;n<T.length;n+=1)N[n]=B(H(e,T,n));return{c(){n=i("img"),t=r(),a=i("h1"),u=w(F),d=r(),g=i("blockquote"),f=w(R),v=r(),k=i("picture"),b=i("source"),A=r(),M=i("source"),P=r(),K=i("img"),G=r();for(let e=0;e<N.length;e+=1)N[e].c();C=E(),this.h()},l(e){n=l(e,"IMG",{class:!0,src:!0,alt:!0}),t=c(e),a=l(e,"H1",{class:!0});var s=z(a);u=I(s,F),s.forEach(o),d=c(e),g=l(e,"BLOCKQUOTE",{class:!0});var i=z(g);f=I(i,R),i.forEach(o),v=c(e),k=l(e,"PICTURE",{});var r=z(k);b=l(r,"SOURCE",{srcset:!0}),A=c(r),M=l(r,"SOURCE",{srcset:!0}),P=c(r),K=l(r,"IMG",{src:!0,class:!0,alt:!0}),r.forEach(o),G=c(e);for(let n=0;n<N.length;n+=1)N[n].l(e);C=E(),this.h()},h(){m(n,"class","pic-mobile"),n.src!==(s="/images/lessons-mobile.jpg")&&m(n,"src","/images/lessons-mobile.jpg"),m(n,"alt","Louise Augoyard sitzt vor ihrer Harfe."),m(a,"class","svelte-p90kbk"),m(g,"class","svelte-p90kbk"),m(b,"srcset","/images/lessons-512.jpg 512w"),m(M,"srcset","/images/lessons-1024.jpg 2x"),K.src!==(U="/images/lessons-1024.jpg")&&m(K,"src","/images/lessons-1024.jpg"),m(K,"class","pic-right pic-desktop svelte-p90kbk"),m(K,"alt","Louise Augoyard sitzt vor ihrer Harfe.")},m(e,s){p(e,n,s),p(e,t,s),p(e,a,s),h(a,u),p(e,d,s),p(e,g,s),h(g,f),p(e,v,s),p(e,k,s),h(k,b),h(k,A),h(k,M),h(k,P),h(k,K),p(e,G,s);for(let n=0;n<N.length;n+=1)N[n].m(e,s);p(e,C,s)},p(e,n){if(1&n&&F!==(F=e[1].title[e[0].language]+"")&&q(u,F),1&n&&R!==(R=e[1].quote[e[0].language]+"")&&q(f,R),3&n){let s;for(T=e[1].text[e[0].language],s=0;s<T.length;s+=1){const t=H(e,T,s);N[s]?N[s].p(t,n):(N[s]=B(t),N[s].c(),N[s].m(C.parentNode,C))}for(;s<N.length;s+=1)N[s].d(1);N.length=T.length}},i(e){y||S(()=>{y=$(K,x,{}),y.start()})},o:L,d(e){e&&o(n),e&&o(t),e&&o(a),e&&o(d),e&&o(g),e&&o(v),e&&o(k),e&&o(G),j(N,e),e&&o(C)}}}function P(e){let n,s,b,z,w;return document.title=n="Louise Augoyard | "+e[1].title[e[0].language],z=new t({props:{$$slots:{default:[M]},$$scope:{ctx:e}}}),{c(){s=i("meta"),b=r(),a(z.$$.fragment),this.h()},l(e){const n=u('[data-svelte="svelte-25l38i"]',document.head);s=l(n,"META",{name:!0,content:!0}),n.forEach(o),b=c(e),d(z.$$.fragment,e),this.h()},h(){m(s,"name","description"),m(s,"content","Louise Augoyard bietet Harfenunterricht in Bochum für Kinder und Erwachsene, Anfänger und Fortgeschrittene.")},m(e,n){h(document.head,s),p(e,b,n),g(z,e,n),w=!0},p(e,[s]){(!w||3&s)&&n!==(n="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=n);const t={};33&s&&(t.$$scope={dirty:s,ctx:e}),z.$set(t)},i(e){w||(f(z.$$.fragment,e),w=!0)},o(e){v(z.$$.fragment,e),w=!1},d(e){o(s),e&&o(b),k(z,e)}}}function K(e,n,s){let t;b(e,A,e=>s(0,t=e));return[t,{title:{de:"Unterricht",fr:"Enseignement",en:"Lessons"},quote:{de:"Musik gibt dem Herzen Seele, verleiht den Gedanken Flügel und lässt die Phantasie erblühen. – Platon",fr:"La musique donne une âme à nos cœurs, des ailes à la pensée, un essor à l’imagination. – Platon",en:"???"},text:{de:["Ein Instrument zu spielen ist die beste Möglichkeit, das eigene künstlerische Potenzial und die Kreativität zu entfalten, und Gefühle und den Reichtum der eigenen Vorstellungskraft auszudrücken. Mich hat das Harfenspiel mit leidenschaftlichen Künstlern zusammengebracht, es hat mir ermöglicht, fremde Kulturen zu erkunden, und intensive Erfahrungen mit meinem Publikum, meinen Schülern und meinen musikalischen Partnern zu teilen!","Es ist nie zu früh oder zu spät, ein Instrument zu lernen! Die Arbeitsmethoden und Ziele sind immer individuell auf die Bedürfnisse und Wünsche des Schülers abgestimmt. Ich kann Ihnen beibringen, Noten zu lesen, eine solide Spieltechnik zu erlernen und Ihre musikalische Kreativität zu verfeinern. Eine gesunde Haltung am Instrument wird Ihnen erlauben, mit Leichtigkeit zu spielen und ihren Körper in dieser anspruchsvollen Aktivität respektvoll und bewusst einzusetzen.","Wenn Sie das wünschen, können wir zusammen die Grundlagen der Harmonielehre erarbeiten und eine Basis fürs Improvisieren legen. Gemeinsam werden wir das Repertoire suchen, das Ihnen am meisten Freude bereitet, und Ihre eigenen Ziele für den Unterricht definieren. Dann können wir effiziente Übemethoden entwickeln, auf Basis derer sich eine langfristige kreative und bereichernde Beziehung mit dem Instrument entwickeln kann. Natürlich kann ich Sie auch beraten, wenn Sie ein Instrument kaufen oder mieten wollen, und Ihnen helfen, wann immer Sie etwa neue Saiten oder Noten brauchen.",'Ich unterrichte in Bochum. Bitte zögern Sie nicht, <a href="/kontakt">mich anzusprechen</a>, wenn Sie weitere Fragen haben!'],fr:["Jouer d’un instrument de musique est l’occasion privilégiée de développer son potentiel artistique, d’épanouir sa créativité, de se connecter à ses sentiments et à son imagination… La pratique de la harpe m’a amenée à rencontrer des artistes passionnés, à découvrir de nouvelles cultures et à vivre d’intenses moments de partage avec mon public, mes élèves et mes partenaires de jeu. ","Il n’est jamais ni trop tôt ni trop tard pour s’initier à la pratique d’un instrument ! Les méthodes de travail et les objectifs seront définis en fonction des besoins et des désirs de chacun. Je peux vous apprendre à lire une partition, à construire une technique solide et à affiner votre créativité musicale. Une bonne posture à l’instrument vous permettra de jouer avec aisance et dans le respect de votre corps.","Selon vos souhaits, vous pouvez vous familiariser avec les principes harmoniques élémentaires et acquérir des bases d’improvisation. Ensemble, nous pouvons chercher le répertoire qui vous procure le plus de plaisir, définir vos objectifs d’apprentissage et réfléchir à une organisation de travail aussi efficace que satisfaisante. Je suis naturellement disposée à vous conseiller dans vos recherches pour l’acquisition d’un instrument, l’achat de partitions, de cordes de harpe...","Les cours se déroulent à Bochum. Pour de plus amples renseignements, vous pouvez <a href='/kontakt'>m'écrire via la page contact.</a>"],en:["???"]}}]}export default class extends e{constructor(e){super(),n(this,e,K,P,s,{})}}