import{S as e,i,s as r,M as s,e as t,a as n,c as a,q as l,b as o,d as u,f as c,j as d,k as h,l as m,m as g,n as p,p as f,r as b,u as v,v as k,t as S,A as z,g as M,h as A,B as P,o as q,w as B,x as E,C as H,D as I,E as x,z as y,y as G,F as L}from"./client.8215761e.js";function D(e,i,r){const s=e.slice();return s[5]=i[r],s[7]=r,s}function O(e,i,r){const s=e.slice();return s[5]=i[r],s[7]=r,s}function R(e){let i,r=e[2].short.text[e[1].language],s=[];for(let i=0;i<r.length;i+=1)s[i]=$(D(e,r,i));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();i=z()},l(e){for(let i=0;i<s.length;i+=1)s[i].l(e);i=z()},m(e,r){for(let i=0;i<s.length;i+=1)s[i].m(e,r);g(e,i,r)},p(e,t){if(6&t){let n;for(r=e[2].short.text[e[1].language],n=0;n<r.length;n+=1){const a=D(e,r,n);s[n]?(s[n].p(a,t),f(s[n],1)):(s[n]=$(a),s[n].c(),f(s[n],1),s[n].m(i.parentNode,i))}for(;n<s.length;n+=1)s[n].d(1);s.length=r.length}},i(e){for(let e=0;e<r.length;e+=1)f(s[e])},o:H,d(e){L(s,e),e&&u(i)}}}function C(e){let i,r=e[2].long.text[e[1].language],s=[];for(let i=0;i<r.length;i+=1)s[i]=w(O(e,r,i));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();i=z()},l(e){for(let i=0;i<s.length;i+=1)s[i].l(e);i=z()},m(e,r){for(let i=0;i<s.length;i+=1)s[i].m(e,r);g(e,i,r)},p(e,t){if(6&t){let n;for(r=e[2].long.text[e[1].language],n=0;n<r.length;n+=1){const a=O(e,r,n);s[n]?(s[n].p(a,t),f(s[n],1)):(s[n]=w(a),s[n].c(),f(s[n],1),s[n].m(i.parentNode,i))}for(;n<s.length;n+=1)s[n].d(1);s.length=r.length}},i(e){for(let e=0;e<r.length;e+=1)f(s[e])},o:H,d(e){L(s,e),e&&u(i)}}}function $(e){let i,r,s,n=e[5]+"";return{c(){i=t("p"),r=S(n)},l(e){i=o(e,"P",{});var s=M(i);r=A(s,n),s.forEach(u)},m(e,s){g(e,i,s),m(i,r)},p(e,i){2&i&&n!==(n=e[5]+"")&&q(r,n)},i(e){s||B(()=>{s=E(i,G,{y:-10,duration:500}),s.start()})},o:H,d(e){e&&u(i)}}}function w(e){let i,r,s,n=e[5]+"";return{c(){i=t("p"),r=S(n)},l(e){i=o(e,"P",{});var s=M(i);r=A(s,n),s.forEach(u)},m(e,s){g(e,i,s),m(i,r)},p(e,i){2&i&&n!==(n=e[5]+"")&&q(r,n)},i(e){s||B(()=>{s=E(i,G,{y:-10,duration:500}),s.start()})},o:H,d(e){e&&u(i)}}}function F(e){let i,r,s,a,l,d,p,b,v,k,y,G,L,D,O,$,w,F,T,N,j,U,J,V,K,X,W,Q,Y=e[2].title[e[1].language]+"",Z=e[2].short.button[e[1].language]+"",_=e[2].long.button[e[1].language]+"";function ee(e,i){return e[0]?C:R}let ie=ee(e),re=ie(e);return{c(){i=t("img"),s=n(),a=t("div"),l=t("h1"),d=S(Y),p=n(),b=t("div"),v=t("button"),k=S(Z),G=n(),L=t("button"),D=S(_),$=n(),w=t("picture"),F=t("source"),T=n(),N=t("source"),j=n(),U=t("img"),K=n(),re.c(),X=z(),this.h()},l(e){i=o(e,"IMG",{class:!0,src:!0,alt:!0}),s=c(e),a=o(e,"DIV",{class:!0});var r=M(a);l=o(r,"H1",{});var t=M(l);d=A(t,Y),t.forEach(u),p=c(r),b=o(r,"DIV",{class:!0});var n=M(b);v=o(n,"BUTTON",{class:!0});var h=M(v);k=A(h,Z),h.forEach(u),G=c(n),L=o(n,"BUTTON",{class:!0});var m=M(L);D=A(m,_),m.forEach(u),n.forEach(u),r.forEach(u),$=c(e),w=o(e,"PICTURE",{});var g=M(w);F=o(g,"SOURCE",{srcset:!0}),T=c(g),N=o(g,"SOURCE",{srcset:!0}),j=c(g),U=o(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(u),K=c(e),re.l(e),X=z(),this.h()},h(){h(i,"class","pic-mobile"),i.src!==(r="images/bio-mobile.jpg")&&h(i,"src","images/bio-mobile.jpg"),h(i,"alt","Louise Augoyard sitzt an der Harfe."),h(v,"class",y=e[0]?"button-inactive":"button-active"),h(L,"class",O=e[0]?"button-active":"button-inactive"),h(b,"class","button-row svelte-1t5fa8"),h(a,"class","title-container"),h(F,"srcset","images/bio-512.jpg 512w"),h(N,"srcset","images/bio-1024.jpg 2x"),h(U,"class","pic-right pic-desktop svelte-1t5fa8"),U.src!==(J="images/bio-1024.jpg")&&h(U,"src","images/bio-1024.jpg"),h(U,"alt","Louise Augoyard sitzt an der Harfe.")},m(r,t){g(r,i,t),g(r,s,t),g(r,a,t),m(a,l),m(l,d),m(a,p),m(a,b),m(b,v),m(v,k),m(b,G),m(b,L),m(L,D),g(r,$,t),g(r,w,t),m(w,F),m(w,T),m(w,N),m(w,j),m(w,U),g(r,K,t),re.m(r,t),g(r,X,t),W||(Q=[P(v,"click",e[3]),P(L,"click",e[4])],W=!0)},p(e,i){2&i&&Y!==(Y=e[2].title[e[1].language]+"")&&q(d,Y),2&i&&Z!==(Z=e[2].short.button[e[1].language]+"")&&q(k,Z),1&i&&y!==(y=e[0]?"button-inactive":"button-active")&&h(v,"class",y),2&i&&_!==(_=e[2].long.button[e[1].language]+"")&&q(D,_),1&i&&O!==(O=e[0]?"button-active":"button-inactive")&&h(L,"class",O),ie===(ie=ee(e))&&re?re.p(e,i):(re.d(1),re=ie(e),re&&(re.c(),f(re,1),re.m(X.parentNode,X)))},i(e){V||B(()=>{V=E(U,x,{}),V.start()}),f(re)},o:H,d(e){e&&u(i),e&&u(s),e&&u(a),e&&u($),e&&u(w),e&&u(K),re.d(e),e&&u(X),W=!1,I(Q)}}}function T(e){let i,r,k,S,z;return document.title=i="Louise Augoyard | "+e[2].title[e[1].language],S=new s({props:{$$slots:{default:[F]},$$scope:{ctx:e}}}),{c(){r=t("meta"),k=n(),a(S.$$.fragment),this.h()},l(e){const i=l('[data-svelte="svelte-wvgakb"]',document.head);r=o(i,"META",{name:!0,content:!0}),i.forEach(u),k=c(e),d(S.$$.fragment,e),this.h()},h(){h(r,"name","description"),h(r,"content","Louise Augoyard studierte Harfe in Paris, Detmold und Suzhou. Sie spielt als Orchesterharfenistin mit renommierten Dirigenten und ist Mitglied des Trios Sophora.")},m(e,i){m(document.head,r),g(e,k,i),p(S,e,i),z=!0},p(e,[r]){(!z||6&r)&&i!==(i="Louise Augoyard | "+e[2].title[e[1].language])&&(document.title=i);const s={};515&r&&(s.$$scope={dirty:r,ctx:e}),S.$set(s)},i(e){z||(f(S.$$.fragment,e),z=!0)},o(e){b(S.$$.fragment,e),z=!1},d(e){u(r),e&&u(k),v(S,e)}}}function N(e,i,r){let s;k(e,y,e=>r(1,s=e));let t=!1;return[t,s,{title:{en:"Biography",fr:"Biographie",de:"Biographie"},long:{button:{en:"comprehensive",fr:"approfondi",de:"ausführlich"},text:{en:[],fr:["Louise Augoyard commence la harpe à l’âge de sept ans au Conservatoire de Brive-la-Gaillarde dans la classe de Sigrid Blanpain. Après s’être perfectionnée auprès de Marie-Monique Popesco, elle intègre en 2012 le Pôle supérieur d’enseignement artistique Paris-Boulogne-Billancourt dans la classe d’Anne Ricquebourg. En 2014, elle obtient une bourse pour étudier pendant un an à la Soochow University, School of Music (Shanghai) avec le harpiste Nicolas Tulliez, Harpe solo de l’Orchestre Philharmonique de Radio-France. En 2015, elle poursuit ses études à la Hochschule für Musik de Detmold, dont elle ressort diplômée d’un Bachelor of Arts Orchestermusiker en 2018 et d’un Master of Arts Instrumentalpädagogik en 2020. Parallèlement à son cursus universitaire, elle suit les masterclasses de grands maîtres tels qu’Isabelle Moretti, Germaine Lorenzini, Fabrice Pierre…","Sa passion pour la musique d’ensemble l’amène à jouer au sein de divers orchestres, sous la direction de Maxime Pascal (Orchestre Impromptu de Paris), Hans Richter (Smetana Philharmonic Orchestra of Prag), Vahan Mardirossian (Orchestre National de Chambre d’Arménie) … Elle se produit également en musique de chambre et fonde en 2016 le trio Sophora avec la flûtiste Tekla Varga et l’altiste Verena Curuti. Son répertoire soliste s’étend de la période baroque aux œuvres les plus contemporaines, avec un intérêt tout particulier pour la musique française du XXème siècle.","L’enseignement tient une place essentielle dans son activité artistique. A Paris, elle propose des cours privés aux élèves du Conservatoire à Rayonnement Régional de Boulogne-Billancourt. En 2018, elle intègre le cursus pédagogique de la Hochschule de Detmold où elle est encadrée par la professeure de harpe de la Musikschule de Bielefeld, Christiana Rathmer. Depuis 2018, elle enseigne la harpe à la Musikschule de Lage et a accompagné les élèves du Detmolder Jungstudierende Institut lors d’une académie de musique de chambre en Grèce.","Soucieuse de participer à la vie artistique et culturelle en France, elle occupe le poste de secrétaire générale de l’Association des Amis du Festival d’été de Gargilesse depuis 2017."],de:["Louise Augoyard begann das Harfenspiel mit sieben Jahren in der Klasse von Sigrid Blanpain am Conservatoire de Brive-la-Gaillarde. Später nahm sie Unterricht bei Marie-Monique Popesco, ehe sie 2012 ihr Studium im Pôle supérieur d’enseignement artistique Paris-Boulogne-Billancourt in der Klasse von Anne Ricquebourg aufnahm. 2014 erlaubte ihr ein Stipendium, für ein Jahr nach Shanghai zu gehen, um an der School of Music der Soochow University bei Nicolas Tulliez zu studieren, dem Soloharfenisten des Orchestre Philharmonique de Radio-France. 2015 setzte sie ihre Studien bei Godelieve Schrama an der Hochschule für Musik Detmold fort, wo sie 2018 den Bachelor of Arts als Orchestermusikerin und 2020 den Master of Arts in der Studienrichtung Instrumentalpädagogik abschloss. Parallel zu ihrer Hochschulausbildung nahm sie an Meisterkursen bei so renommierten Harfenisten wie Isabelle Moretti, Germaine Lorenzini und Fabrice Pierre teil.","Ihre Leidenschaft für Ensemblemusik führte sie als Mitglied in verschiedene Orchester. Dabei arbeitete sie mit renommierten Dirigenten wie Maxime Pascal (Orchestre Impromptu de Paris), Hans Richter (Smetana Philharmonic Orchestra of Prag) und Vahan Mardirossian (Orchestre National de Chambre d’Arménie) zusammen. Gleichermaßen aktiv ist sie auf dem Gebiet der Kammermusik. 2016 gründete sie das Trio Sophora mit der Flötistin Tekla Varga und der Bratschistin Verena Curuti. Ihr solistisches Repertoire umfasst Werke aus dem Barock bis hin zu neuesten zeitgenössischen Kompositionen – ihr besonderes Interesse gilt dabei der französischen Musik des 20. Jahrhunderts.","Das Unterrichten nimmt einen zentralen Platz in ihrem künstlerischen Schaffen ein. In Paris gab sie Privatunterricht für Schüler des Conservatoire à Rayonnement Régional de Boulogne-Billancourt. 2018 nahm sie ihre pädagogischen Studien an der HfM Detmold auf, unter der Anleitung von Christiana Rathmer, Harfenlehrerin an der Musikschule Bielefeld. Im gleichen Jahr übernahm sie eine Harfenklasse an der Musikschule Lage. Im Herbst 2019 begleitete sie eine Studienreise des Instituts für Jungstudierende der HfM Detmold (DJI) als Lehrkraft.","Ihr Wunsch, am künstlerischen und kulturellen Leben ihres Heimatlandes Frankreich aktiv mitzuwirken, brachte sie dazu, 2017 den Posten des Generalsekretärs der Association des Amis du Festival d’été de Gargilesse zu übernehmen, den sie bis heute innehat."]}},short:{button:{en:"concise",fr:"court",de:"kurz"},text:{en:[],fr:["Louise Augoyard est une harpiste aux multiples facettes, riche d’expériences musicales aux quatre coins du monde (France, Chine, Allemagne). Elle a bénéficié de l’enseignement de professeurs de renommée internationale tels que Godelieve Schrama, Nicolas Tulliez… et se produit aussi bien en soliste qu’en orchestre et musique de chambre. Son répertoire s’étend de la période baroque aux œuvres les plus contemporaines, avec un intérêt particulier pour la musique française du XXème siècle. En tant qu’enseignante, elle cherche à transmettre sa passion pour la harpe à des musiciens de tous âges et de tous niveaux, à éveiller leur curiosité artistique et à leur permettre de développer leur potentiel musical. Secrétaire générale du Festival d’été de Gargilesse, elle participe activement à la programmation culturelle de son pays natal."],de:["Die Harfenistin Louise Augoyard kann auf vielfältige musikalische Erfahrungen zurückblicken. Engagements führten sie unter anderem nach Frankreich, China und Deutschland. Sie studierte bei renommierten Musikerpersönlichkeiten wie Godelieve Schrama und Nicolas Tulliez und ist heute als Solistin, versierte Kammermusikerin und Orchesterharfenistin aktiv. Ihr Repertoire umfasst Werke aus dem Barock bis hin zu neuesten zeitgenössischen Kompositionen – ihr besonderes Interesse gilt dabei der französischen Musik des 20. Jahrhunderts. Als Lehrerin ist es ihr ein Herzensanliegen, Schüler aller Alters- und Erfahrungsstufen mit ihrer eigenen Begeisterung für die Harfe anzustecken, ihre künstlerische Neugier zu wecken und ihnen dabei zu helfen, ihr musikalisches Potenzial zu entfalten. Als Generalsekretärin des Festival d’été in Gargilesse bringt sie sich aktiv in Entwicklung und Gestaltung des kulturellen Lebens in ihrem Heimatland ein."]}}},()=>{r(0,t=!1)},()=>{r(0,t=!0)}]}export default class extends e{constructor(e){super(),i(this,e,N,T,r,{})}}
