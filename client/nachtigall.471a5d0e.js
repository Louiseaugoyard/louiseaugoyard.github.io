<<<<<<< HEAD:client/nachtigall.0caa8c52.js
import{S as e,i as a,s,M as n,e as i,a as t,c as r,q as l,b as o,d as u,f as c,j as d,k as g,l as h,m as p,n as m,p as f,r as v,u as b,v as w,g as k,t as z,h as E,o as L,w as x,x as j,C as P,F as M,E as $,z as H}from"./client.163ebde1.js";function K(e,a,s){const n=e.slice();return n[2]=a[s],n[4]=s,n}function q(e){let a,s=e[2]+"";return{c(){a=i("p")},l(e){a=o(e,"P",{}),k(a).forEach(u)},m(e,n){p(e,a,n),a.innerHTML=s},p(e,n){1&n&&s!==(s=e[2]+"")&&(a.innerHTML=s)},d(e){e&&u(a)}}}function I(e){let a,s,n,r,l,d,m,f,v,b,w,H,I,T,C,N,A,B,V,y,S,U,R,W,D,G,F,O,_,J,Q,X=e[1].title[e[0].language]+"",Y=e[1].subtitle[e[0].language]+"",Z=e[1].intro[e[0].language]+"",ee=e[1].laura[e[0].language]+"",ae=e[1].text[e[0].language],se=[];for(let a=0;a<ae.length;a+=1)se[a]=q(K(e,ae,a));return{c(){a=i("img"),n=t(),r=i("h1"),l=z(X),d=t(),m=i("h2"),f=z(Y),v=t(),b=i("picture"),w=i("source"),H=t(),I=i("source"),T=t(),C=i("img"),B=t(),V=i("p"),y=z(Z),S=t(),U=i("picture"),R=i("source"),W=t(),D=i("img"),O=t();for(let e=0;e<se.length;e+=1)se[e].c();_=t(),J=i("div"),Q=i("p"),this.h()},l(e){a=o(e,"IMG",{src:!0,alt:!0,class:!0}),n=c(e),r=o(e,"H1",{id:!0,class:!0});var s=k(r);l=E(s,X),s.forEach(u),d=c(e),m=o(e,"H2",{id:!0,class:!0});var i=k(m);f=E(i,Y),i.forEach(u),v=c(e),b=o(e,"PICTURE",{id:!0,class:!0});var t=k(b);w=o(t,"SOURCE",{srcset:!0}),H=c(t),I=o(t,"SOURCE",{srcset:!0}),T=c(t),C=o(t,"IMG",{src:!0,class:!0,alt:!0}),t.forEach(u),B=c(e),V=o(e,"P",{id:!0,class:!0});var g=k(V);y=E(g,Z),g.forEach(u),S=c(e),U=o(e,"PICTURE",{});var h=k(U);R=o(h,"SOURCE",{srcset:!0}),W=c(h),D=o(h,"IMG",{src:!0,class:!0,alt:!0}),h.forEach(u),O=c(e);for(let a=0;a<se.length;a+=1)se[a].l(e);_=c(e),J=o(e,"DIV",{id:!0,class:!0});var p=k(J);Q=o(p,"P",{}),k(Q).forEach(u),p.forEach(u),this.h()},h(){a.src!==(s="/images/rossignol-mobile.jpg")&&g(a,"src","/images/rossignol-mobile.jpg"),g(a,"alt","Eine Nachtigall in Pastell"),g(a,"class","pic-mobile"),g(r,"id","title"),g(r,"class","svelte-1p8wuc3"),g(m,"id","subtitle"),g(m,"class","svelte-1p8wuc3"),g(w,"srcset","/images/rossignol-800.jpg 800w"),g(I,"srcset","/images/rossignol-1372.jpg 2x"),C.src!==(N="/images/rossignol-1372.jpg")&&g(C,"src","/images/rossignol-1372.jpg"),g(C,"class","pic-desktop pic-no-shadow"),g(C,"alt","Eine Nachtigall in Pastell"),g(b,"id","nightingale-picture"),g(b,"class","svelte-1p8wuc3"),g(V,"id","intro"),g(V,"class","svelte-1p8wuc3"),g(R,"srcset","/images/laura-louise-512.jpg 512w"),D.src!==(G="/images/laura-louise-512.jpg")&&g(D,"src","/images/laura-louise-512.jpg"),g(D,"class","pic-desktop pic-right svelte-1p8wuc3"),g(D,"alt","Laura Hedon."),g(J,"id","laura"),g(J,"class","svelte-1p8wuc3")},m(e,s){p(e,a,s),p(e,n,s),p(e,r,s),h(r,l),p(e,d,s),p(e,m,s),h(m,f),p(e,v,s),p(e,b,s),h(b,w),h(b,H),h(b,I),h(b,T),h(b,C),p(e,B,s),p(e,V,s),h(V,y),p(e,S,s),p(e,U,s),h(U,R),h(U,W),h(U,D),p(e,O,s);for(let a=0;a<se.length;a+=1)se[a].m(e,s);p(e,_,s),p(e,J,s),h(J,Q),Q.innerHTML=ee},p(e,a){if(1&a&&X!==(X=e[1].title[e[0].language]+"")&&L(l,X),1&a&&Y!==(Y=e[1].subtitle[e[0].language]+"")&&L(f,Y),1&a&&Z!==(Z=e[1].intro[e[0].language]+"")&&L(y,Z),3&a){let s;for(ae=e[1].text[e[0].language],s=0;s<ae.length;s+=1){const n=K(e,ae,s);se[s]?se[s].p(n,a):(se[s]=q(n),se[s].c(),se[s].m(_.parentNode,_))}for(;s<se.length;s+=1)se[s].d(1);se.length=ae.length}1&a&&ee!==(ee=e[1].laura[e[0].language]+"")&&(Q.innerHTML=ee)},i(e){A||x(()=>{A=j(C,$,{}),A.start()}),F||x(()=>{F=j(D,$,{}),F.start()})},o:P,d(e){e&&u(a),e&&u(n),e&&u(r),e&&u(d),e&&u(m),e&&u(v),e&&u(b),e&&u(B),e&&u(V),e&&u(S),e&&u(U),e&&u(O),M(se,e),e&&u(_),e&&u(J)}}}function T(e){let a,s,w,k,z;return document.title=a="Louise Augoyard | "+e[1].title[e[0].language],k=new n({props:{$$slots:{default:[I]},$$scope:{ctx:e}}}),{c(){s=i("meta"),w=t(),r(k.$$.fragment),this.h()},l(e){const a=l('[data-svelte="svelte-19kvw51"]',document.head);s=o(a,"META",{name:!0,content:!0}),a.forEach(u),w=c(e),d(k.$$.fragment,e),this.h()},h(){g(s,"name","description"),g(s,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,a){h(document.head,s),p(e,w,a),m(k,e,a),z=!0},p(e,[s]){(!z||3&s)&&a!==(a="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=a);const n={};33&s&&(n.$$scope={dirty:s,ctx:e}),k.$set(n)},i(e){z||(f(k.$$.fragment,e),z=!0)},o(e){v(k.$$.fragment,e),z=!1},d(e){u(s),e&&u(w),b(k,e)}}}function C(e,a,s){let n;w(e,H,e=>s(0,n=e));return[n,{title:{de:"Ein Lied für die Nachtigall",fr:"Une berceuse pour le rossignol",en:"A Chant for the Nightingale"},subtitle:{de:"Kinderkonzert mit Harfe und Live-Malerei",fr:"Concert pour enfants avec harpe et dessin en direct",en:"Concert for Children with Harp and Live Painting"},intro:{de:"Eine Nachtigall singt in der Nacht und schläft bei Tagesanbruch ein, in Schlaf gewiegt durch die Klänge der Natur und den Gesang der Vögel, die einer nach dem anderen sanft aufwachen.",fr:"Un rossignol chante dans la nuit et s’endort au lever du jour, bercé par les sons de la nature et le chant des oiseaux qui s’éveillent doucement les après les autres.",en:"???"},text:{fr:['« Une berceuse pour le rossignol » est un concert pour enfants original mêlant récit, musique et dessin au pastel. Les sons de la harpe évoquent tour à tour une forêt, un ruisseau et des oiseaux dessinés au fil de l’histoire sur trois grands tableaux. Dans ce concept, le dessin n’est pas une image figée, mais un art vivant où le geste de l’artiste accompagne les vibrations des cordes et rend visible les plus fines impressions musicales. Les enfants sont également invités participer au processus créatif en coloriant et assemblant des oiseaux en papier quelques jours avant le concert (matériel fourni par les artistes). Ces oiseaux personnalisés seront ensuite accrochés aux tableaux au cours de la représentation. (<a href="/nachtigall.pdf" target="_blank">Informations pratiques</a>)'],de:['„Ein Lied für die Nachtigall“ ist ein Konzert für Kinder, das Rezitation, Musik und Live-Malerei in Pastellkreide verbindet. Die Klänge der Harfe evozieren nach und nach einen Wald, einen Bach und verschiedene Vögel, die im Lauf der Geschichte auf drei große Bilder gemalt werden. In diesem Konzept ist die Malerei nicht ein fixiertes Bild, sondern lebendige Kunst, in der die Bewegungen der Künstlerin die Vibrationen der Saiten begleiten, und die feinsten musikalischen Impressionen sichtbar machen. Auch die Kinder sind eingeladen, am kreativen Prozess teilzunehmen, indem sie ein paar Tage vor dem Konzert Papiervögel anmalen und zusammensetzen (das Material dafür wird von den Künstlerinnen zur Verfügung gestellt). Die einzelnen Vögel werden dann im Lauf des Konzerts in die Bilder eingefügt. (<a href="/nachtigall.pdf" target="_blank">Praktische Informationen</a>)'],en:["???"]},laura:{fr:'<span style="font-weight: 600">Laura Hedon</span> est une auteure-illustratrice française qui travaille principalement pour l’édition jeunesse. Après des études dans le domaine de la biologie qui l’ont rendue amoureuse de la nature, elle se lance finalement dans la réalisation de livres illustrés pour représenter ce qu’elle aime : le monde du vivant. Pour ses illustrations, elle affectionne les techniques traditionnelles, et c’est en particulier le pastel sec qu’elle a choisi pour accompagner la harpe lors de ce concert-dessiné. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',de:'<span style="font-weight: 600">Laura Hedon</span> ist eine französische Buchillustratorin, die primär im Bereich der Jugendliteratur arbeitet. Nach einem Biologiestudium, das ihre Liebe zur Natur weckte, widmet sie sich nun ganz der Realisation von Buchillustrationen, in denen sie abbildet, was sie liebt: die Welt des Lebendigen. Für ihre Illustration bevorzugt sie traditionelle Techniken. Daraus hat sie die Pastellkreide gewählt, um bei diesem Bild-Konzert die Harfe zu begleiten. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',en:"???"}}]}export default class extends e{constructor(e){super(),a(this,e,C,T,s,{})}}
=======
import{S as e,i as a,s,M as n,e as i,a as t,c as r,q as l,b as o,d as u,f as c,j as d,k as g,l as h,m as p,n as m,p as f,r as v,u as b,v as w,g as k,t as z,h as E,o as L,w as x,x as j,C as P,F as M,E as $,z as H}from"./client.dd67361b.js";function K(e,a,s){const n=e.slice();return n[2]=a[s],n[4]=s,n}function q(e){let a,s=e[2]+"";return{c(){a=i("p")},l(e){a=o(e,"P",{}),k(a).forEach(u)},m(e,n){p(e,a,n),a.innerHTML=s},p(e,n){1&n&&s!==(s=e[2]+"")&&(a.innerHTML=s)},d(e){e&&u(a)}}}function I(e){let a,s,n,r,l,d,m,f,v,b,w,H,I,T,C,N,A,B,V,y,S,U,R,W,D,G,F,O,_,J,Q,X=e[1].title[e[0].language]+"",Y=e[1].subtitle[e[0].language]+"",Z=e[1].intro[e[0].language]+"",ee=e[1].laura[e[0].language]+"",ae=e[1].text[e[0].language],se=[];for(let a=0;a<ae.length;a+=1)se[a]=q(K(e,ae,a));return{c(){a=i("img"),n=t(),r=i("h1"),l=z(X),d=t(),m=i("h2"),f=z(Y),v=t(),b=i("picture"),w=i("source"),H=t(),I=i("source"),T=t(),C=i("img"),B=t(),V=i("p"),y=z(Z),S=t(),U=i("picture"),R=i("source"),W=t(),D=i("img"),O=t();for(let e=0;e<se.length;e+=1)se[e].c();_=t(),J=i("div"),Q=i("p"),this.h()},l(e){a=o(e,"IMG",{src:!0,alt:!0,class:!0}),n=c(e),r=o(e,"H1",{id:!0,class:!0});var s=k(r);l=E(s,X),s.forEach(u),d=c(e),m=o(e,"H2",{id:!0,class:!0});var i=k(m);f=E(i,Y),i.forEach(u),v=c(e),b=o(e,"PICTURE",{id:!0,class:!0});var t=k(b);w=o(t,"SOURCE",{srcset:!0}),H=c(t),I=o(t,"SOURCE",{srcset:!0}),T=c(t),C=o(t,"IMG",{src:!0,class:!0,alt:!0}),t.forEach(u),B=c(e),V=o(e,"P",{id:!0,class:!0});var g=k(V);y=E(g,Z),g.forEach(u),S=c(e),U=o(e,"PICTURE",{});var h=k(U);R=o(h,"SOURCE",{srcset:!0}),W=c(h),D=o(h,"IMG",{src:!0,class:!0,alt:!0}),h.forEach(u),O=c(e);for(let a=0;a<se.length;a+=1)se[a].l(e);_=c(e),J=o(e,"DIV",{id:!0,class:!0});var p=k(J);Q=o(p,"P",{}),k(Q).forEach(u),p.forEach(u),this.h()},h(){a.src!==(s="/images/rossignol-mobile.jpg")&&g(a,"src","/images/rossignol-mobile.jpg"),g(a,"alt","Eine Nachtigall in Pastell"),g(a,"class","pic-mobile"),g(r,"id","title"),g(r,"class","svelte-1p8wuc3"),g(m,"id","subtitle"),g(m,"class","svelte-1p8wuc3"),g(w,"srcset","/images/rossignol-800.jpg 800w"),g(I,"srcset","/images/rossignol-1372.jpg 2x"),C.src!==(N="/images/rossignol-1372.jpg")&&g(C,"src","/images/rossignol-1372.jpg"),g(C,"class","pic-desktop pic-no-shadow"),g(C,"alt","Eine Nachtigall in Pastell"),g(b,"id","nightingale-picture"),g(b,"class","svelte-1p8wuc3"),g(V,"id","intro"),g(V,"class","svelte-1p8wuc3"),g(R,"srcset","/images/laura-louise-512.jpg 512w"),D.src!==(G="/images/laura-louise-512.jpg")&&g(D,"src","/images/laura-louise-512.jpg"),g(D,"class","pic-desktop pic-right svelte-1p8wuc3"),g(D,"alt","Laura Hedon."),g(J,"id","laura"),g(J,"class","svelte-1p8wuc3")},m(e,s){p(e,a,s),p(e,n,s),p(e,r,s),h(r,l),p(e,d,s),p(e,m,s),h(m,f),p(e,v,s),p(e,b,s),h(b,w),h(b,H),h(b,I),h(b,T),h(b,C),p(e,B,s),p(e,V,s),h(V,y),p(e,S,s),p(e,U,s),h(U,R),h(U,W),h(U,D),p(e,O,s);for(let a=0;a<se.length;a+=1)se[a].m(e,s);p(e,_,s),p(e,J,s),h(J,Q),Q.innerHTML=ee},p(e,a){if(1&a&&X!==(X=e[1].title[e[0].language]+"")&&L(l,X),1&a&&Y!==(Y=e[1].subtitle[e[0].language]+"")&&L(f,Y),1&a&&Z!==(Z=e[1].intro[e[0].language]+"")&&L(y,Z),3&a){let s;for(ae=e[1].text[e[0].language],s=0;s<ae.length;s+=1){const n=K(e,ae,s);se[s]?se[s].p(n,a):(se[s]=q(n),se[s].c(),se[s].m(_.parentNode,_))}for(;s<se.length;s+=1)se[s].d(1);se.length=ae.length}1&a&&ee!==(ee=e[1].laura[e[0].language]+"")&&(Q.innerHTML=ee)},i(e){A||x(()=>{A=j(C,$,{}),A.start()}),F||x(()=>{F=j(D,$,{}),F.start()})},o:P,d(e){e&&u(a),e&&u(n),e&&u(r),e&&u(d),e&&u(m),e&&u(v),e&&u(b),e&&u(B),e&&u(V),e&&u(S),e&&u(U),e&&u(O),M(se,e),e&&u(_),e&&u(J)}}}function T(e){let a,s,w,k,z;return document.title=a="Louise Augoyard | "+e[1].title[e[0].language],k=new n({props:{$$slots:{default:[I]},$$scope:{ctx:e}}}),{c(){s=i("meta"),w=t(),r(k.$$.fragment),this.h()},l(e){const a=l('[data-svelte="svelte-19kvw51"]',document.head);s=o(a,"META",{name:!0,content:!0}),a.forEach(u),w=c(e),d(k.$$.fragment,e),this.h()},h(){g(s,"name","description"),g(s,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m(e,a){h(document.head,s),p(e,w,a),m(k,e,a),z=!0},p(e,[s]){(!z||3&s)&&a!==(a="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=a);const n={};33&s&&(n.$$scope={dirty:s,ctx:e}),k.$set(n)},i(e){z||(f(k.$$.fragment,e),z=!0)},o(e){v(k.$$.fragment,e),z=!1},d(e){u(s),e&&u(w),b(k,e)}}}function C(e,a,s){let n;w(e,H,e=>s(0,n=e));return[n,{title:{de:"Ein Lied für die Nachtigall",fr:"Une berceuse pour le rossignol",en:"A Chant for the Nightingale"},subtitle:{de:"Kinderkonzert mit Harfe und Live-Malerei",fr:"Concert pour enfants avec harpe et dessin en direct",en:"Concert for Children with Harp and Live Painting"},intro:{de:"Eine Nachtigall singt in der Nacht und schläft bei Tagesanbruch ein, in Schlaf gewiegt durch die Klänge der Natur und den Gesang der Vögel, die einer nach dem anderen sanft aufwachen.",fr:"Un rossignol chante dans la nuit et s’endort au lever du jour, bercé par les sons de la nature et le chant des oiseaux qui s’éveillent doucement les après les autres.",en:"???"},text:{fr:['« Une berceuse pour le rossignol » est un concert pour enfants original mêlant récit, musique et dessin au pastel. Les sons de la harpe évoquent tour à tour une forêt, un ruisseau et des oiseaux dessinés au fil de l’histoire sur trois grands tableaux. Dans ce concept, le dessin n’est pas une image figée, mais un art vivant où le geste de l’artiste accompagne les vibrations des cordes et rend visible les plus fines impressions musicales. Les enfants sont également invités participer au processus créatif en coloriant et assemblant des oiseaux en papier quelques jours avant le concert (matériel fourni par les artistes). Ces oiseaux personnalisés seront ensuite accrochés aux tableaux au cours de la représentation. (<a href="/nachtigall.pdf" target="_blank">Informations pratiques</a>)'],de:['„Ein Lied für die Nachtigall“ ist ein Konzert für Kinder, das Rezitation, Musik und Live-Malerei in Pastellkreide verbindet. Die Klänge der Harfe evozieren nach und nach einen Wald, einen Bach und verschiedene Vögel, die im Lauf der Geschichte auf drei große Bilder gemalt werden. In diesem Konzept ist die Malerei nicht ein fixiertes Bild, sondern lebendige Kunst, in der die Bewegungen der Künstlerin die Vibrationen der Saiten begleiten, und die feinsten musikalischen Impressionen sichtbar machen. Auch die Kinder sind eingeladen, am kreativen Prozess teilzunehmen, indem sie ein paar Tage vor dem Konzert Papiervögel anmalen und zusammensetzen (das Material dafür wird von den Künstlerinnen zur Verfügung gestellt). Die einzelnen Vögel werden dann im Lauf des Konzerts in die Bilder eingefügt. (<a href="/nachtigall.pdf" target="_blank">Praktische Informationen</a>)'],en:["???"]},laura:{fr:'<span style="font-weight: 600">Laura Hedon</span> est une auteure-illustratrice française qui travaille principalement pour l’édition jeunesse. Après des études dans le domaine de la biologie qui l’ont rendue amoureuse de la nature, elle se lance finalement dans la réalisation de livres illustrés pour représenter ce qu’elle aime : le monde du vivant. Pour ses illustrations, elle affectionne les techniques traditionnelles, et c’est en particulier le pastel sec qu’elle a choisi pour accompagner la harpe lors de ce concert-dessiné. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',de:'<span style="font-weight: 600">Laura Hedon</span> ist eine französische Buchillustratorin, die primär im Bereich der Jugendliteratur arbeitet. Nach einem Biologiestudium, das ihre Liebe zur Natur weckte, widmet sie sich nun ganz der Realisation von Buchillustrationen, in denen sie abbildet, was sie liebt: die Welt des Lebendigen. Für ihre Illustration bevorzugt sie traditionelle Techniken. Daraus hat sie die Pastellkreide gewählt, um bei diesem Bild-Konzert die Harfe zu begleiten. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',en:"???"}}]}export default class extends e{constructor(e){super(),a(this,e,C,T,s,{})}}
>>>>>>> 2f9bf703e90da7597e326eafeea8aa8cbec8fbe2:client/nachtigall.471a5d0e.js
