import{S as e,i as s,s as t,M as n,e as a,a as i,c as r,q as l,b as o,d as u,f as c,j as d,k as h,m,n as g,o as p,r as f,v,w as k,x as b,t as x,C as M,g as $,h as L,l as q,p as A,G as D,A as T}from"./client.67cc8e92.js";function w(e,s,t){const n=e.slice();return n[2]=s[t],n[4]=t,n}function P(e){let s,t=e[2]+"";return{c(){s=a("p")},l(e){s=o(e,"P",{}),$(s).forEach(u)},m(e,n){g(e,s,n),s.innerHTML=t},p(e,n){1&n&&t!==(t=e[2]+"")&&(s.innerHTML=t)},d(e){e&&u(s)}}}function S(e){let s,t,n,r,l,d,p,f,v,k,b,T,S,B=e[1].title[e[0].language]+"",y=e[1].subtitle[e[0].language]+"",z=e[1].intro[e[0].language]+"",E=e[1].text[e[0].language],H=[];for(let s=0;s<E.length;s+=1)H[s]=P(w(e,E,s));return{c(){s=a("img"),n=i(),r=a("h1"),l=x(B),d=i(),p=a("h2"),f=x(y),v=i(),k=a("p"),b=x(z),T=i();for(let e=0;e<H.length;e+=1)H[e].c();S=M(),this.h()},l(e){s=o(e,"IMG",{src:!0,alt:!0,class:!0}),n=c(e),r=o(e,"H1",{id:!0,class:!0});var t=$(r);l=L(t,B),t.forEach(u),d=c(e),p=o(e,"H2",{id:!0,class:!0});var a=$(p);f=L(a,y),a.forEach(u),v=c(e),k=o(e,"P",{id:!0,class:!0});var i=$(k);b=L(i,z),i.forEach(u),T=c(e);for(let s=0;s<H.length;s+=1)H[s].l(e);S=M(),this.h()},h(){q(s.src,t="/images/socrates-mobile.jpg")||h(s,"src","/images/socrates-mobile.jpg"),h(s,"alt","Zeichnung von Sokrates"),h(s,"class","pic-mobile"),h(r,"id","title"),h(r,"class","svelte-s05sct"),h(p,"id","subtitle"),h(p,"class","svelte-s05sct"),h(k,"id","intro"),h(k,"class","svelte-s05sct")},m(e,t){g(e,s,t),g(e,n,t),g(e,r,t),m(r,l),g(e,d,t),g(e,p,t),m(p,f),g(e,v,t),g(e,k,t),m(k,b),g(e,T,t);for(let s=0;s<H.length;s+=1)H[s].m(e,t);g(e,S,t)},p(e,s){if(1&s&&B!==(B=e[1].title[e[0].language]+"")&&A(l,B),1&s&&y!==(y=e[1].subtitle[e[0].language]+"")&&A(f,y),1&s&&z!==(z=e[1].intro[e[0].language]+"")&&A(b,z),3&s){let t;for(E=e[1].text[e[0].language],t=0;t<E.length;t+=1){const n=w(e,E,t);H[t]?H[t].p(n,s):(H[t]=P(n),H[t].c(),H[t].m(S.parentNode,S))}for(;t<H.length;t+=1)H[t].d(1);H.length=E.length}},d(e){e&&u(s),e&&u(n),e&&u(r),e&&u(d),e&&u(p),e&&u(v),e&&u(k),e&&u(T),D(H,e),e&&u(S)}}}function B(e){let s,t,b,x,M;return document.title=s="Louise Augoyard | "+e[1].title[e[0].language],x=new n({props:{$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){t=a("meta"),b=i(),r(x.$$.fragment),this.h()},l(e){const s=l('[data-svelte="svelte-148br04"]',document.head);t=o(s,"META",{name:!0,content:!0}),s.forEach(u),b=c(e),d(x.$$.fragment,e),this.h()},h(){h(t,"name","description"),h(t,"content","Die Konzert-Lektüre De Musica verbindet Literatur für Harfe\n    Solo mit philosophischen Texten über Musik.")},m(e,s){m(document.head,t),g(e,b,s),p(x,e,s),M=!0},p(e,[t]){(!M||3&t)&&s!==(s="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=s);const n={};33&t&&(n.$$scope={dirty:t,ctx:e}),x.$set(n)},i(e){M||(f(x.$$.fragment,e),M=!0)},o(e){v(x.$$.fragment,e),M=!1},d(e){u(t),e&&u(b),k(x,e)}}}function y(e,s,t){let n;b(e,T,e=>t(0,n=e));return[n,{title:{de:"De Musica",fr:"De Musica",en:"De Musica"},subtitle:{de:"Konzertlektüre mit Musik und Philosophie",fr:"Concert-lecture musique & philosophie",en:"Concert for Children with Harp and Live Painting"},intro:{de:"Das Konzert De Musica verbindet Werke für Soloharfe mit der Lektüre von Auszügen aus philosophischen Texten über Natur und Sinn der Musik.",fr:"Le concert De Musica allie la performance d’œuvres pour harpe seule à la lecture d’extraits de textes philosophiques sur la nature et le sens de la musique.",en:"???"},text:{fr:["De l’Antiquité à nos jours, la musique a été l’objet de nombreuses réflexions et théories sur sa forme, ses symboles et sa signification. Les grands philosophes grecs voyaient dans l’accord des sons et des intervalles une représentation de l’harmonie céleste ; Rousseau considérait le chant comme l’expression la plus pure des passions de l’homme à l’état de nature ; pour les romantiques allemands, la musique instrumentale était le lieu privilégié de l’expression de sentiments ineffables.","Le programme comprend entre autres des œuvres de Bach, Beethoven, Fauré, Berio, et des textes de Platon, Rousseau, Adorno, Jankélévitch… Bien que les œuvres ne soient pas nécessairement contemporaines des textes lus et que les philosophes aient avant tout réfléchi sur la musique de leur temps, l’intemporalité des thèses développées permet de mettre en lumière des pièces de pays et d’époques très variés."],de:["Seit der Antike ist die Musik Gegenstand zahlreicher Gedanken und Theorien gewesen: zu ihrer Form, ihren Symbolen und ihrer Bedeutung. Die großen griechischen Philosophen sahen im Zusammenklang der Töne und Intervalle eine Representation der himmlischen Harmonie; für Rousseau war das Singen der reinste Ausdruck der menschlichen Leidenschaften; für die deutschen Romantiker war die Instrumentalmusik das privilegierte Medium für den Ausdruck unaussprechlicher Gefühle.","Auf dem Programm stehen unter anderem Werke von Bach, Beethoven, Fauré, Berio, und Texte von Platon, Rousseau, Adorno und Jankélévitch. Obwohl die musikalischen Werke nicht unbedingt aus derselben Zeit stammen wie die gelesenen Texte, und die Philosophen vor allem über die Musik ihrer eigenen Zeit nachgedacht haben, erlaubt es die Zeitlosigkeit der entwickelten Thesen, Stücke aus sehr unterschiedlichen Ländern und Epochen zu beleuchten."],en:["???"]}}]}class z extends e{constructor(e){super(),s(this,e,y,B,t,{})}}export{z as default};
