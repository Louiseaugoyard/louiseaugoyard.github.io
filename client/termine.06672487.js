import{S as e,i as t,s as r,M as a,c as n,j as s,n as i,p as o,r as l,u as d,v as c,e as u,b as h,g as f,d as m,k as p,m as g,t as k,a as b,A as v,h as w,f as D,O as j,l as M,o as A,F as N,P,z as K}from"./client.cd03ea4c.js";function H(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function E(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function L(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function S(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function G(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=k(a),r=k(", ")},l(e){t=w(e,a),r=w(e,", ")},m(e,a){g(e,t,a),g(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&A(t,a)},d(e){e&&m(t),e&&m(r)}}}function C(e){let t,r,a,n,s,i,o,l,d,c,A,K,H,E=e[9].title+"",S=e[9].location+"",C=e[9].description[e[0].language]+"",_=e[9].dates,B=[];for(let t=0;t<_.length;t+=1)B[t]=G(L(e,_,t));let W=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,s;return{c(){t=u("a"),r=u("img"),this.h()},l(e){t=h(e,"A",{class:!0,href:!0});var a=f(t);r=h(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(m),this.h()},h(){r.src!==(a=e[3][e[9].project])&&p(r,"src",a),p(r,"width","128px"),p(r,"height","128px"),p(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),p(r,"class","svelte-2mcoff"),p(t,"class","project-icon svelte-2mcoff"),p(t,"href",s=e[2][e[9].project])},m(e,a){g(e,t,a),M(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&p(r,"alt",n)},d(e){e&&m(t)}}}(e);return{c(){t=u("li"),r=u("div"),a=u("h2"),n=k(E),s=b(),i=u("p");for(let e=0;e<B.length;e+=1)B[e].c();o=v(),d=b(),c=u("p"),A=b(),W&&W.c(),K=b(),this.h()},l(e){t=h(e,"LI",{class:!0});var l=f(t);r=h(l,"DIV",{class:!0});var u=f(r);a=h(u,"H2",{class:!0});var p=f(a);n=w(p,E),p.forEach(m),s=D(u),i=h(u,"P",{class:!0});var g=f(i);for(let e=0;e<B.length;e+=1)B[e].l(g);o=v(),g.forEach(m),d=D(u),c=h(u,"P",{class:!0}),f(c).forEach(m),u.forEach(m),A=D(l),W&&W.l(l),K=D(l),l.forEach(m),this.h()},h(){p(a,"class","event-list--title svelte-2mcoff"),l=new P(null),p(i,"class","event-list--time-location svelte-2mcoff"),p(c,"class","event-list--description svelte-2mcoff"),p(r,"class","event-list--item--text svelte-2mcoff"),p(t,"class",H=j("event-list--item")+" svelte-2mcoff")},m(e,u){g(e,t,u),M(t,r),M(r,a),M(a,n),M(r,s),M(r,i);for(let e=0;e<B.length;e+=1)B[e].m(i,null);M(i,o),l.m(S,i),M(r,d),M(r,c),c.innerHTML=C,M(t,A),W&&W.m(t,null),M(t,K)},p(e,t){if(49&t){let r;for(_=e[9].dates,r=0;r<_.length;r+=1){const a=L(e,_,r);B[r]?B[r].p(a,t):(B[r]=G(a),B[r].c(),B[r].m(i,o))}for(;r<B.length;r+=1)B[r].d(1);B.length=_.length}1&t&&C!==(C=e[9].description[e[0].language]+"")&&(c.innerHTML=C),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&W.p(e,t)},d(e){e&&m(t),N(B,e),W&&W.d()}}}function _(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=k(a),r=k(", ")},l(e){t=w(e,a),r=w(e,", ")},m(e,a){g(e,t,a),g(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&A(t,a)},d(e){e&&m(t),e&&m(r)}}}function B(e){let t,r,a,n,s,i,o,l,d,c,j,A,K=e[9].title+"",E=e[9].location+"",L=e[9].description[e[0].language]+"",S=e[9].dates,G=[];for(let t=0;t<S.length;t+=1)G[t]=_(H(e,S,t));let C=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,s;return{c(){t=u("a"),r=u("img"),this.h()},l(e){t=h(e,"A",{class:!0,href:!0});var a=f(t);r=h(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(m),this.h()},h(){r.src!==(a=e[3][e[9].project])&&p(r,"src",a),p(r,"width","128px"),p(r,"height","128px"),p(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),p(r,"class","svelte-2mcoff"),p(t,"class","project-icon svelte-2mcoff"),p(t,"href",s=e[2][e[9].project])},m(e,a){g(e,t,a),M(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&p(r,"alt",n)},d(e){e&&m(t)}}}(e);return{c(){t=u("li"),r=u("div"),a=u("h2"),n=k(K),s=b(),i=u("p");for(let e=0;e<G.length;e+=1)G[e].c();o=v(),d=b(),c=u("p"),j=b(),C&&C.c(),A=b(),this.h()},l(e){t=h(e,"LI",{class:!0});var l=f(t);r=h(l,"DIV",{class:!0});var u=f(r);a=h(u,"H2",{class:!0});var p=f(a);n=w(p,K),p.forEach(m),s=D(u),i=h(u,"P",{class:!0});var g=f(i);for(let e=0;e<G.length;e+=1)G[e].l(g);o=v(),g.forEach(m),d=D(u),c=h(u,"P",{class:!0}),f(c).forEach(m),u.forEach(m),j=D(l),C&&C.l(l),A=D(l),l.forEach(m),this.h()},h(){p(a,"class","event-list--title svelte-2mcoff"),l=new P(null),p(i,"class","event-list--time-location svelte-2mcoff"),p(c,"class","event-list--description svelte-2mcoff"),p(r,"class","event-list--item--text svelte-2mcoff"),p(t,"class","event-list--item svelte-2mcoff")},m(e,u){g(e,t,u),M(t,r),M(r,a),M(a,n),M(r,s),M(r,i);for(let e=0;e<G.length;e+=1)G[e].m(i,null);M(i,o),l.m(E,i),M(r,d),M(r,c),c.innerHTML=L,M(t,j),C&&C.m(t,null),M(t,A)},p(e,t){if(81&t){let r;for(S=e[9].dates,r=0;r<S.length;r+=1){const a=H(e,S,r);G[r]?G[r].p(a,t):(G[r]=_(a),G[r].c(),G[r].m(i,o))}for(;r<G.length;r+=1)G[r].d(1);G.length=S.length}1&t&&L!==(L=e[9].description[e[0].language]+"")&&(c.innerHTML=L),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&C.p(e,t)},d(e){e&&m(t),N(G,e),C&&C.d()}}}function W(e){let t,r,a,n,s,i,o,l,d,c,v=e[1].title[e[0].language]+"",j=e[1].intro[e[0].language]+"",P=e[5].length>0&&function(e){let t,r=e[5],a=[];for(let t=0;t<r.length;t+=1)a[t]=C(S(e,r,t));return{c(){t=u("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=h(e,"UL",{class:!0});var r=f(t);for(let e=0;e<a.length;e+=1)a[e].l(r);r.forEach(m),this.h()},h(){p(t,"class","event-list svelte-2mcoff")},m(e,r){g(e,t,r);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(e,n){if(61&n){let s;for(r=e[5],s=0;s<r.length;s+=1){const i=S(e,r,s);a[s]?a[s].p(i,n):(a[s]=C(i),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},d(e){e&&m(t),N(a,e)}}}(e),K=e[6].length>0&&function(e){let t,r,a,n,s=e[1].pastEventsHeading[e[0].language]+"",i=e[6],o=[];for(let t=0;t<i.length;t+=1)o[t]=B(E(e,i,t));return{c(){t=u("h2"),r=k(s),a=b(),n=u("ul");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=h(e,"H2",{class:!0});var i=f(t);r=w(i,s),i.forEach(m),a=D(e),n=h(e,"UL",{class:!0});var l=f(n);for(let e=0;e<o.length;e+=1)o[e].l(l);l.forEach(m),this.h()},h(){p(t,"class","event-list--section-heading svelte-2mcoff"),p(n,"class","event-list past-events svelte-2mcoff")},m(e,s){g(e,t,s),M(t,r),g(e,a,s),g(e,n,s);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(e,t){if(1&t&&s!==(s=e[1].pastEventsHeading[e[0].language]+"")&&A(r,s),93&t){let r;for(i=e[6],r=0;r<i.length;r+=1){const a=E(e,i,r);o[r]?o[r].p(a,t):(o[r]=B(a),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}},d(e){e&&m(t),e&&m(a),e&&m(n),N(o,e)}}}(e);return{c(){t=u("img"),a=b(),n=u("h1"),s=k(v),i=b(),o=u("p"),l=b(),d=u("div"),P&&P.c(),c=b(),K&&K.c(),this.h()},l(e){t=h(e,"IMG",{class:!0,src:!0,alt:!0}),a=D(e),n=h(e,"H1",{});var r=f(n);s=w(r,v),r.forEach(m),i=D(e),o=h(e,"P",{id:!0,class:!0}),f(o).forEach(m),l=D(e),d=h(e,"DIV",{id:!0,class:!0});var u=f(d);P&&P.l(u),c=D(u),K&&K.l(u),u.forEach(m),this.h()},h(){p(t,"class","pic-mobile"),t.src!==(r="/images/events-mobile.jpg")&&p(t,"src","/images/events-mobile.jpg"),p(t,"alt","Louise Augoyard steht neben ihrer Harfe."),p(o,"id","events-intro"),p(o,"class","svelte-2mcoff"),p(d,"id","events-container"),p(d,"class","svelte-2mcoff")},m(e,r){g(e,t,r),g(e,a,r),g(e,n,r),M(n,s),g(e,i,r),g(e,o,r),o.innerHTML=j,g(e,l,r),g(e,d,r),P&&P.m(d,null),M(d,c),K&&K.m(d,null)},p(e,t){1&t&&v!==(v=e[1].title[e[0].language]+"")&&A(s,v),1&t&&j!==(j=e[1].intro[e[0].language]+"")&&(o.innerHTML=j),e[5].length>0&&P.p(e,t),e[6].length>0&&K.p(e,t)},d(e){e&&m(t),e&&m(a),e&&m(n),e&&m(i),e&&m(o),e&&m(l),e&&m(d),P&&P.d(),K&&K.d()}}}function z(e){let t,r;return t=new a({props:{$$slots:{default:[W]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,a){i(t,e,a),r=!0},p(e,[r]){const a={};131073&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){r||(o(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){d(t,e)}}}function R(e,t,r){let a;c(e,K,e=>r(0,a=e));const n={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2021,11,24,22,0)],title:"Christmette",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la Messe de minuit"}},{dates:[new Date(2021,11,22,16,0)],title:"Weihnachtsgottesdient",location:"Caroline Oetker Stift Bielefeld",project:"",description:{de:"Harfe solo, musikalische Gestaltung des Gottesdientes<br>Private Veranstaltung",fr:"Harpe seule, accompagnement musical de la messe de Noël<br>Manifestation Privée<br>"}},{dates:[new Date(2021,11,21,19,30)],title:"3. Abonnentenkonzert DKO",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"<a href='https://www.detmolder-kammerorchester.de/' target='_blank'>Detmolder Kammerorchester</a>",fr:"<a href='https://www.detmolder-kammerorchester.de/' target='_blank'>Orchestre de chambre de Detmold</a>"}},{dates:[new Date(2021,11,18,18,30)],title:"Britten: A Ceremony of Carols",location:"Propsteikirche St Peter und Paul, Bochum",project:"",description:{de:"Musik an den Weihnachtstagen<br>Vokalensemble Propsteimusik",fr:"Musique pour le temps de Noël<br>Ensemble vocal Propsteimusik"}},{dates:[new Date(2021,11,16,19,30)],title:"Britten: A Ceremony of Carols",location:"Propsteikirche St Peter und Paul, Bochum",project:"",description:{de:"Musik an den Weihnachtstagen<br>Vokalensemble Propsteimusik",fr:"Musique pour le temps de Noël<br>Ensemble vocal Propsteimusik"}},{dates:[new Date(2021,11,20,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,17,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,15,19,0)],title:"Roratemesse",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la veillée de Noël"}},{dates:[new Date(2021,11,12,15,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a><br>ABGESAGT",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a><br>ANNULE"}},{dates:[new Date(2021,11,11,17,0)],title:"Britten: A Ceremony of Carols",location:"Ev. Kirche Eichlinghofen St. Margareta, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,10,18,0)],title:"Absolventenveranstaltung",location:"Westfälische Hochschule, Recklinghausen",description:{de:"Harfe und Flöte (Tekla Varga)<br>Private Veranstaltung<br>ABGESAGT",fr:"Harpe et flûte (Tekla Varga)<br>Manifestation privée<br>ANNULE"}},{dates:[new Date(2021,11,8,18,0)],title:"Britten: A Ceremony of Carols",location:"St. Ewaldi, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,7,18,0)],title:"Britten: A Ceremony of Carols",location:"St. Ewaldi, Dortmund",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,10,29,16,0)],title:"Konzert Trio Sophora",location:"Caroline Oetker Stift Bielefeld",project:"trio-sophora",description:{de:"Französische Musik<br>Private Veranstaltung<br>ABGESAGT",fr:"Musique française<br>Manifestation Privée<br>ANNULE"}},{dates:[new Date(2021,10,24,20,0)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Elbeforum Brunsbüttel",project:"orchester",description:{de:"Veranstaltung des Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2021,10,21,16,0)],title:"Monsieur Croche",location:"Propsteikirche St Peter und Paul, Bochum",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,10,7,17,0)],title:"Monsieur Croche",location:"Heilig Geist Kirche, Bielefeld",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,9,30,18,0)],title:"Jubiläumsveranstaltung: 100 Jahre Bahnhofsmission Bochum",location:"Propsteikirche St Peter und Paul, Bochum",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,9,29,17,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Abtei Marienmünster",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a>.",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a>."}},{dates:[new Date(2021,9,17,19,30)],title:"My Fair Lady, Musical von Frederick Loewe",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,9,2,10,0)],title:"Absolventenveranstaltung",location:"Lehrinstitut Lübeck ZAP-Nord",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,8,26,17,0)],title:"FRAKZIONEN",location:"Zionskirche, Bielefeld",project:"kammermusik",description:{de:"Konzert mit dem Harfenquartett Arpalando",fr:"Concert avec le quatuor de harpe Arpalando"}},{dates:[new Date(2021,8,24,17,0)],title:"De Musica",location:"Atelier von Jürgen Heckmanns, Herford",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a><br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Private Veranstaltung.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée."}},{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus, Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,7,26,15,0)],title:"Eindrücke der Natur",location:"Senioreneinrichtung Haus an der Graf-Adolf-Straße, Bochum",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,6,18,18,30)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de l'Hôtel de Ville, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,20,18,0)],title:"Das Land des Lächelns, Operette in drei Akten von Franz Lehár",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,5,18,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Evangelische Kita Eislebener Str., Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,8,15,45)],title:"Eindrücke der Natur",location:"Belia Seniorenresidenz Wattenscheid",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,4,30,14)],title:"10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",location:"Autobahnkirche RUHR",description:{de:"Musikalische Gestaltung des ökumenischen Gottesdienstes",fr:"Accompagnement musical de la célébration œcuménique"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},s={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},i=e=>e.getTime()>(new Date).getTime();let o=[],l=[];for(let e of n.events){let t=!1;for(const r of e.dates)if(i(r)){t=!0;break}t?o.push(e):l.push(e)}return o.sort((e,t)=>e.dates[0].getTime()-t.dates[0].getTime()),l.sort((e,t)=>t.dates[0].getTime()-e.dates[0].getTime()),[a,n,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg","trio-sophora":"/images/trio-sophora-logo.svg","monsieur-croche":"/images/trio-sophora-logo.svg","de-musica":"/images/socrates-128.jpg"},(e,t="de")=>{let r=String(e.getDate());return"de"==t&&(r+="."),r+=` ${s[t][e.getMonth()]} ${e.getFullYear()} ${e.getHours()}`,e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},o,l]}export default class extends e{constructor(e){super(),t(this,e,R,z,r,{})}}