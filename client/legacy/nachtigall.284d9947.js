import{_ as e,a as n,b as a,c as i,i as t,s,d as r,S as l,M as o,e as u,f as c,g as d,q as g,h as f,j as h,k as p,n as m,o as v,p as b,r as w,u as k,v as z,x as E,y as L,z as x,A as P,l as j,t as y,m as H,w as M,B as $,C as K,H as q,K as I,J as R,E as T}from"./client.32c728e6.js";function A(e){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=n(e);if(i){var r=n(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return a(this,t)}}function B(e,n,a){var i=e.slice();return i[2]=n[a],i[4]=a,i}function C(e){var n,a=e[2]+"";return{c:function(){n=u("p")},l:function(e){n=f(e,"P",{}),j(n).forEach(h)},m:function(e,i){w(e,n,i),n.innerHTML=a},p:function(e,i){1&i&&a!==(a=e[2]+"")&&(n.innerHTML=a)},d:function(e){e&&h(n)}}}function N(e){for(var n,a,i,t,s,r,l,o,d,g,m,k,z,E,L,x,P,T,A,N,S,V,U,D,W,G,O,_,F=e[1].title[e[0].language]+"",J=e[1].subtitle[e[0].language]+"",Q=e[1].intro[e[0].language]+"",X=e[1].laura[e[0].language]+"",Y=e[1].text[e[0].language],Z=[],ee=0;ee<Y.length;ee+=1)Z[ee]=C(B(e,Y,ee));return{c:function(){n=u("img"),a=c(),i=u("h1"),t=y(F),s=c(),r=u("h2"),l=y(J),o=c(),d=u("picture"),g=u("source"),m=c(),k=u("source"),z=c(),E=u("img"),x=c(),P=u("p"),T=y(Q),A=c(),N=u("picture"),S=u("source"),V=c(),U=u("img"),W=c();for(var e=0;e<Z.length;e+=1)Z[e].c();G=c(),O=u("div"),_=u("p"),this.h()},l:function(e){n=f(e,"IMG",{src:!0,alt:!0,class:!0}),a=p(e),i=f(e,"H1",{id:!0,class:!0});var u=j(i);t=H(u,F),u.forEach(h),s=p(e),r=f(e,"H2",{id:!0,class:!0});var c=j(r);l=H(c,J),c.forEach(h),o=p(e),d=f(e,"PICTURE",{id:!0,class:!0});var v=j(d);g=f(v,"SOURCE",{srcset:!0}),m=p(v),k=f(v,"SOURCE",{srcset:!0}),z=p(v),E=f(v,"IMG",{src:!0,class:!0,alt:!0}),v.forEach(h),x=p(e),P=f(e,"P",{id:!0,class:!0});var b=j(P);T=H(b,Q),b.forEach(h),A=p(e),N=f(e,"PICTURE",{});var w=j(N);S=f(w,"SOURCE",{srcset:!0}),V=p(w),U=f(w,"IMG",{src:!0,class:!0,alt:!0}),w.forEach(h),W=p(e);for(var L=0;L<Z.length;L+=1)Z[L].l(e);G=p(e),O=f(e,"DIV",{id:!0,class:!0});var y=j(O);_=f(y,"P",{}),j(_).forEach(h),y.forEach(h),this.h()},h:function(){n.src!=="/images/rossignol-mobile.jpg"&&v(n,"src","/images/rossignol-mobile.jpg"),v(n,"alt","Eine Nachtigall in Pastell"),v(n,"class","pic-mobile"),v(i,"id","title"),v(i,"class","svelte-1p8wuc3"),v(r,"id","subtitle"),v(r,"class","svelte-1p8wuc3"),v(g,"srcset","/images/rossignol-800.jpg 800w"),v(k,"srcset","/images/rossignol-1372.jpg 2x"),E.src!=="/images/rossignol-1372.jpg"&&v(E,"src","/images/rossignol-1372.jpg"),v(E,"class","pic-desktop pic-no-shadow"),v(E,"alt","Eine Nachtigall in Pastell"),v(d,"id","nightingale-picture"),v(d,"class","svelte-1p8wuc3"),v(P,"id","intro"),v(P,"class","svelte-1p8wuc3"),v(S,"srcset","/images/laura-louise-512.jpg 512w"),U.src!=="/images/laura-louise-512.jpg"&&v(U,"src","/images/laura-louise-512.jpg"),v(U,"class","pic-desktop pic-right svelte-1p8wuc3"),v(U,"alt","Laura Hedon."),v(O,"id","laura"),v(O,"class","svelte-1p8wuc3")},m:function(e,u){w(e,n,u),w(e,a,u),w(e,i,u),b(i,t),w(e,s,u),w(e,r,u),b(r,l),w(e,o,u),w(e,d,u),b(d,g),b(d,m),b(d,k),b(d,z),b(d,E),w(e,x,u),w(e,P,u),b(P,T),w(e,A,u),w(e,N,u),b(N,S),b(N,V),b(N,U),w(e,W,u);for(var c=0;c<Z.length;c+=1)Z[c].m(e,u);w(e,G,u),w(e,O,u),b(O,_),_.innerHTML=X},p:function(e,n){if(1&n&&F!==(F=e[1].title[e[0].language]+"")&&M(t,F),1&n&&J!==(J=e[1].subtitle[e[0].language]+"")&&M(l,J),1&n&&Q!==(Q=e[1].intro[e[0].language]+"")&&M(T,Q),3&n){var a;for(Y=e[1].text[e[0].language],a=0;a<Y.length;a+=1){var i=B(e,Y,a);Z[a]?Z[a].p(i,n):(Z[a]=C(i),Z[a].c(),Z[a].m(G.parentNode,G))}for(;a<Z.length;a+=1)Z[a].d(1);Z.length=Y.length}1&n&&X!==(X=e[1].laura[e[0].language]+"")&&(_.innerHTML=X)},i:function(e){L||$((function(){(L=K(E,R,{})).start()})),D||$((function(){(D=K(U,R,{})).start()}))},o:q,d:function(e){e&&h(n),e&&h(a),e&&h(i),e&&h(s),e&&h(r),e&&h(o),e&&h(d),e&&h(x),e&&h(P),e&&h(A),e&&h(N),e&&h(W),I(Z,e),e&&h(G),e&&h(O)}}}function S(e){var n,a,i,t,s;return document.title=n="Louise Augoyard | "+e[1].title[e[0].language],t=new o({props:{$$slots:{default:[N]},$$scope:{ctx:e}}}),{c:function(){a=u("meta"),i=c(),d(t.$$.fragment),this.h()},l:function(e){var n=g('[data-svelte="svelte-19kvw51"]',document.head);a=f(n,"META",{name:!0,content:!0}),n.forEach(h),i=p(e),m(t.$$.fragment,e),this.h()},h:function(){v(a,"name","description"),v(a,"content","Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.")},m:function(e,n){b(document.head,a),w(e,i,n),k(t,e,n),s=!0},p:function(e,a){var i=z(a,1)[0];(!s||3&i)&&n!==(n="Louise Augoyard | "+e[1].title[e[0].language])&&(document.title=n);var r={};33&i&&(r.$$scope={dirty:i,ctx:e}),t.$set(r)},i:function(e){s||(E(t.$$.fragment,e),s=!0)},o:function(e){L(t.$$.fragment,e),s=!1},d:function(e){h(a),e&&h(i),x(t,e)}}}function V(e,n,a){var i;P(e,T,(function(e){return a(0,i=e)}));return[i,{title:{de:"Ein Lied für die Nachtigall",fr:"Une berceuse pour le rossignol",en:"A Chant for the Nightingale"},subtitle:{de:"Kinderkonzert mit Harfe und Live-Malerei",fr:"Concert pour enfants avec harpe et dessin en direct",en:"Concert for Children with Harp and Live Painting"},intro:{de:"Eine Nachtigall singt in der Nacht und schläft bei Tagesanbruch ein, in Schlaf gewiegt durch die Klänge der Natur und den Gesang der Vögel, die einer nach dem anderen sanft aufwachen.",fr:"Un rossignol chante dans la nuit et s’endort au lever du jour, bercé par les sons de la nature et le chant des oiseaux qui s’éveillent doucement les après les autres.",en:"???"},text:{fr:['« Une berceuse pour le rossignol » est un concert pour enfants original mêlant récit, musique et dessin au pastel. Les sons de la harpe évoquent tour à tour une forêt, un ruisseau et des oiseaux dessinés au fil de l’histoire sur trois grands tableaux. Dans ce concept, le dessin n’est pas une image figée, mais un art vivant où le geste de l’artiste accompagne les vibrations des cordes et rend visible les plus fines impressions musicales. Les enfants sont également invités participer au processus créatif en coloriant et assemblant des oiseaux en papier quelques jours avant le concert (matériel fourni par les artistes). Ces oiseaux personnalisés seront ensuite accrochés aux tableaux au cours de la représentation. (<a href="/nachtigall.pdf" target="_blank">Informations pratiques</a>)'],de:['„Ein Lied für die Nachtigall“ ist ein Konzert für Kinder, das Rezitation, Musik und Live-Malerei in Pastellkreide verbindet. Die Klänge der Harfe evozieren nach und nach einen Wald, einen Bach und verschiedene Vögel, die im Lauf der Geschichte auf drei große Bilder gemalt werden. In diesem Konzept ist die Malerei nicht ein fixiertes Bild, sondern lebendige Kunst, in der die Bewegungen der Künstlerin die Vibrationen der Saiten begleiten, und die feinsten musikalischen Impressionen sichtbar machen. Auch die Kinder sind eingeladen, am kreativen Prozess teilzunehmen, indem sie ein paar Tage vor dem Konzert Papiervögel anmalen und zusammensetzen (das Material dafür wird von den Künstlerinnen zur Verfügung gestellt). Die einzelnen Vögel werden dann im Lauf des Konzerts in die Bilder eingefügt. (<a href="/nachtigall.pdf" target="_blank">Praktische Informationen</a>)'],en:["???"]},laura:{fr:'<span style="font-weight: 600">Laura Hedon</span> est une auteure-illustratrice française qui travaille principalement pour l’édition jeunesse. Après des études dans le domaine de la biologie qui l’ont rendue amoureuse de la nature, elle se lance finalement dans la réalisation de livres illustrés pour représenter ce qu’elle aime : le monde du vivant. Pour ses illustrations, elle affectionne les techniques traditionnelles, et c’est en particulier le pastel sec qu’elle a choisi pour accompagner la harpe lors de ce concert-dessiné. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',de:'<span style="font-weight: 600">Laura Hedon</span> ist eine französische Buchillustratorin, die primär im Bereich der Jugendliteratur arbeitet. Nach einem Biologiestudium, das ihre Liebe zur Natur weckte, widmet sie sich nun ganz der Realisation von Buchillustrationen, in denen sie abbildet, was sie liebt: die Welt des Lebendigen. Für ihre Illustration bevorzugt sie traditionelle Techniken. Daraus hat sie die Pastellkreide gewählt, um bei diesem Bild-Konzert die Harfe zu begleiten. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',en:"???"}}]}var U=function(n){e(o,l);var a=A(o);function o(e){var n;return i(this,o),n=a.call(this),t(r(n),e,V,S,s,{}),n}return o}();export default U;
