import{S as e,i as t,s as r,M as a,c as n,j as s,n as i,p as l,r as o,u as c,v as d,e as u,b as h,g as f,d as p,k as g,m,t as k,a as b,A as v,h as w,f as j,O as D,l as M,o as A,F as N,P as H,z as K}from"./client.15c696cc.js";function L(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function P(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function E(e,t,r){const a=e.slice();return a[12]=t[r],a[14]=r,a}function G(e,t,r){const a=e.slice();return a[9]=t[r],a[11]=r,a}function S(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=k(a),r=k(", ")},l(e){t=w(e,a),r=w(e,", ")},m(e,a){m(e,t,a),m(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&A(t,a)},d(e){e&&p(t),e&&p(r)}}}function _(e){let t,r,a,n,s,i,l,o,c,d,A,K,L,P=e[9].title+"",G=e[9].location+"",_=e[9].description[e[0].language]+"",B=e[9].dates,C=[];for(let t=0;t<B.length;t+=1)C[t]=S(E(e,B,t));let z=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,s;return{c(){t=u("a"),r=u("img"),this.h()},l(e){t=h(e,"A",{class:!0,href:!0});var a=f(t);r=h(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(p),this.h()},h(){r.src!==(a=e[3][e[9].project])&&g(r,"src",a),g(r,"width","128px"),g(r,"height","128px"),g(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),g(r,"class","svelte-2mcoff"),g(t,"class","project-icon svelte-2mcoff"),g(t,"href",s=e[2][e[9].project])},m(e,a){m(e,t,a),M(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&g(r,"alt",n)},d(e){e&&p(t)}}}(e);return{c(){t=u("li"),r=u("div"),a=u("h2"),n=k(P),s=b(),i=u("p");for(let e=0;e<C.length;e+=1)C[e].c();l=v(),c=b(),d=u("p"),A=b(),z&&z.c(),K=b(),this.h()},l(e){t=h(e,"LI",{class:!0});var o=f(t);r=h(o,"DIV",{class:!0});var u=f(r);a=h(u,"H2",{class:!0});var g=f(a);n=w(g,P),g.forEach(p),s=j(u),i=h(u,"P",{class:!0});var m=f(i);for(let e=0;e<C.length;e+=1)C[e].l(m);l=v(),m.forEach(p),c=j(u),d=h(u,"P",{class:!0}),f(d).forEach(p),u.forEach(p),A=j(o),z&&z.l(o),K=j(o),o.forEach(p),this.h()},h(){g(a,"class","event-list--title svelte-2mcoff"),o=new H(null),g(i,"class","event-list--time-location svelte-2mcoff"),g(d,"class","event-list--description svelte-2mcoff"),g(r,"class","event-list--item--text svelte-2mcoff"),g(t,"class",L=D("event-list--item")+" svelte-2mcoff")},m(e,u){m(e,t,u),M(t,r),M(r,a),M(a,n),M(r,s),M(r,i);for(let e=0;e<C.length;e+=1)C[e].m(i,null);M(i,l),o.m(G,i),M(r,c),M(r,d),d.innerHTML=_,M(t,A),z&&z.m(t,null),M(t,K)},p(e,t){if(49&t){let r;for(B=e[9].dates,r=0;r<B.length;r+=1){const a=E(e,B,r);C[r]?C[r].p(a,t):(C[r]=S(a),C[r].c(),C[r].m(i,l))}for(;r<C.length;r+=1)C[r].d(1);C.length=B.length}1&t&&_!==(_=e[9].description[e[0].language]+"")&&(d.innerHTML=_),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&z.p(e,t)},d(e){e&&p(t),N(C,e),z&&z.d()}}}function B(e){let t,r,a=e[4](e[12],e[0].language)+"";return{c(){t=k(a),r=k(", ")},l(e){t=w(e,a),r=w(e,", ")},m(e,a){m(e,t,a),m(e,r,a)},p(e,r){1&r&&a!==(a=e[4](e[12],e[0].language)+"")&&A(t,a)},d(e){e&&p(t),e&&p(r)}}}function C(e){let t,r,a,n,s,i,l,o,c,d,D,A,K=e[9].title+"",P=e[9].location+"",E=e[9].description[e[0].language]+"",G=e[9].dates,S=[];for(let t=0;t<G.length;t+=1)S[t]=B(L(e,G,t));let _=void 0!==e[9].project&&void 0!==e[3][e[9].project]&&function(e){let t,r,a,n,s;return{c(){t=u("a"),r=u("img"),this.h()},l(e){t=h(e,"A",{class:!0,href:!0});var a=f(t);r=h(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),a.forEach(p),this.h()},h(){r.src!==(a=e[3][e[9].project])&&g(r,"src",a),g(r,"width","128px"),g(r,"height","128px"),g(r,"alt",n="de"===e[0].language?"Projektinfo":"Info sur le projet"),g(r,"class","svelte-2mcoff"),g(t,"class","project-icon svelte-2mcoff"),g(t,"href",s=e[2][e[9].project])},m(e,a){m(e,t,a),M(t,r)},p(e,t){1&t&&n!==(n="de"===e[0].language?"Projektinfo":"Info sur le projet")&&g(r,"alt",n)},d(e){e&&p(t)}}}(e);return{c(){t=u("li"),r=u("div"),a=u("h2"),n=k(K),s=b(),i=u("p");for(let e=0;e<S.length;e+=1)S[e].c();l=v(),c=b(),d=u("p"),D=b(),_&&_.c(),A=b(),this.h()},l(e){t=h(e,"LI",{class:!0});var o=f(t);r=h(o,"DIV",{class:!0});var u=f(r);a=h(u,"H2",{class:!0});var g=f(a);n=w(g,K),g.forEach(p),s=j(u),i=h(u,"P",{class:!0});var m=f(i);for(let e=0;e<S.length;e+=1)S[e].l(m);l=v(),m.forEach(p),c=j(u),d=h(u,"P",{class:!0}),f(d).forEach(p),u.forEach(p),D=j(o),_&&_.l(o),A=j(o),o.forEach(p),this.h()},h(){g(a,"class","event-list--title svelte-2mcoff"),o=new H(null),g(i,"class","event-list--time-location svelte-2mcoff"),g(d,"class","event-list--description svelte-2mcoff"),g(r,"class","event-list--item--text svelte-2mcoff"),g(t,"class","event-list--item svelte-2mcoff")},m(e,u){m(e,t,u),M(t,r),M(r,a),M(a,n),M(r,s),M(r,i);for(let e=0;e<S.length;e+=1)S[e].m(i,null);M(i,l),o.m(P,i),M(r,c),M(r,d),d.innerHTML=E,M(t,D),_&&_.m(t,null),M(t,A)},p(e,t){if(81&t){let r;for(G=e[9].dates,r=0;r<G.length;r+=1){const a=L(e,G,r);S[r]?S[r].p(a,t):(S[r]=B(a),S[r].c(),S[r].m(i,l))}for(;r<S.length;r+=1)S[r].d(1);S.length=G.length}1&t&&E!==(E=e[9].description[e[0].language]+"")&&(d.innerHTML=E),void 0!==e[9].project&&void 0!==e[3][e[9].project]&&_.p(e,t)},d(e){e&&p(t),N(S,e),_&&_.d()}}}function z(e){let t,r,a,n,s,i,l,o,c,d,v=e[1].title[e[0].language]+"",D=e[1].intro[e[0].language]+"",H=e[5].length>0&&function(e){let t,r=e[5],a=[];for(let t=0;t<r.length;t+=1)a[t]=_(G(e,r,t));return{c(){t=u("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=h(e,"UL",{class:!0});var r=f(t);for(let e=0;e<a.length;e+=1)a[e].l(r);r.forEach(p),this.h()},h(){g(t,"class","event-list svelte-2mcoff")},m(e,r){m(e,t,r);for(let e=0;e<a.length;e+=1)a[e].m(t,null)},p(e,n){if(61&n){let s;for(r=e[5],s=0;s<r.length;s+=1){const i=G(e,r,s);a[s]?a[s].p(i,n):(a[s]=_(i),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},d(e){e&&p(t),N(a,e)}}}(e),K=e[6].length>0&&function(e){let t,r,a,n,s=e[1].pastEventsHeading[e[0].language]+"",i=e[6],l=[];for(let t=0;t<i.length;t+=1)l[t]=C(P(e,i,t));return{c(){t=u("h2"),r=k(s),a=b(),n=u("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=h(e,"H2",{class:!0});var i=f(t);r=w(i,s),i.forEach(p),a=j(e),n=h(e,"UL",{class:!0});var o=f(n);for(let e=0;e<l.length;e+=1)l[e].l(o);o.forEach(p),this.h()},h(){g(t,"class","event-list--section-heading svelte-2mcoff"),g(n,"class","event-list past-events svelte-2mcoff")},m(e,s){m(e,t,s),M(t,r),m(e,a,s),m(e,n,s);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(e,t){if(1&t&&s!==(s=e[1].pastEventsHeading[e[0].language]+"")&&A(r,s),93&t){let r;for(i=e[6],r=0;r<i.length;r+=1){const a=P(e,i,r);l[r]?l[r].p(a,t):(l[r]=C(a),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=i.length}},d(e){e&&p(t),e&&p(a),e&&p(n),N(l,e)}}}(e);return{c(){t=u("img"),a=b(),n=u("h1"),s=k(v),i=b(),l=u("p"),o=b(),c=u("div"),H&&H.c(),d=b(),K&&K.c(),this.h()},l(e){t=h(e,"IMG",{class:!0,src:!0,alt:!0}),a=j(e),n=h(e,"H1",{});var r=f(n);s=w(r,v),r.forEach(p),i=j(e),l=h(e,"P",{id:!0,class:!0}),f(l).forEach(p),o=j(e),c=h(e,"DIV",{id:!0,class:!0});var u=f(c);H&&H.l(u),d=j(u),K&&K.l(u),u.forEach(p),this.h()},h(){g(t,"class","pic-mobile"),t.src!==(r="/images/events-mobile.jpg")&&g(t,"src","/images/events-mobile.jpg"),g(t,"alt","Louise Augoyard steht neben ihrer Harfe."),g(l,"id","events-intro"),g(l,"class","svelte-2mcoff"),g(c,"id","events-container"),g(c,"class","svelte-2mcoff")},m(e,r){m(e,t,r),m(e,a,r),m(e,n,r),M(n,s),m(e,i,r),m(e,l,r),l.innerHTML=D,m(e,o,r),m(e,c,r),H&&H.m(c,null),M(c,d),K&&K.m(c,null)},p(e,t){1&t&&v!==(v=e[1].title[e[0].language]+"")&&A(s,v),1&t&&D!==(D=e[1].intro[e[0].language]+"")&&(l.innerHTML=D),e[5].length>0&&H.p(e,t),e[6].length>0&&K.p(e,t)},d(e){e&&p(t),e&&p(a),e&&p(n),e&&p(i),e&&p(l),e&&p(o),e&&p(c),H&&H.d(),K&&K.d()}}}function W(e){let t,r;return t=new a({props:{$$slots:{default:[z]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,a){i(t,e,a),r=!0},p(e,[r]){const a={};131073&r&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){r||(l(t.$$.fragment,e),r=!0)},o(e){o(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function R(e,t,r){let a;d(e,K,e=>r(0,a=e));const n={title:{de:"Termine",fr:"Agenda",en:"Events"},pastEventsHeading:{de:"Vergangene Termine",fr:"Représentations passées",en:"Past Events"},intro:{de:"Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",fr:"Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>."},events:[{dates:[new Date(2021,11,24,22,0)],title:"Heilig Abend",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la Messe de minuit"}},{dates:[new Date(2021,11,18,18,30)],title:"Britten: A Ceremony of Carols",location:"Propsteikirche St Peter und Paul, Bochum",project:"",description:{de:"Musik an den Weihnachtstagen<br>Vokalensemble Propsteimusik",fr:"Musique pour le temps de Noël<br>Ensemble vocal Propsteimusik"}},{dates:[new Date(2021,11,20,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,17,18,0)],title:"Britten: A Ceremony of Carols",location:"Herz-Jesu Kirche, Dortmund-Hörde",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,15,19,0)],title:"Roratemesse",location:"Kath. Kirchengemeinde zu den Heiligen Schutzengeln, Castrop-Rauxel",project:"",description:{de:"Musikalische Gestaltung des Gottesdienstes",fr:"Accompagnement musical de la veillée de Noël"}},{dates:[new Date(2021,11,12,15,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Konzerthaus der HfM Detmold",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a><br>ABGESAGT",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a><br>ANNULE"}},{dates:[new Date(2021,11,10,18,0)],title:"Absolventenveranstaltung",location:"Westfälische Hochschule, Recklinghausen",description:{de:"Harfe und Flöte (Tekla Varga)<br>Private Veranstaltung<br>ABGESAGT",fr:"Harpe et flûte (Tekla Varga)<br>Manifestation privée<br>ANNULE"}},{dates:[new Date(2021,11,8,18,0)],title:"Britten: A Ceremony of Carols",location:"Dortmund-Aplerbeck",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,11,7,18,0)],title:"Britten: A Ceremony of Carols",location:"Dortmund-Aplerbeck",project:"",description:{de:"Weihnachtskonzert der <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>",fr:"Concert de Noël : <a href='https://www.akademie-gesang.de/' target='_blank'>Akademie für Gesang NRW</a>"}},{dates:[new Date(2021,10,29,16,0)],title:"Konzert Trio Sophora",location:"Carolinen Oetkerstift Bielefeld",project:"trio-sophora",description:{de:"Französische Musik<br>Private Veranstaltung<br>ABGESAGT",fr:"Musique française<br>Manifestation Privée<br>ANNULE"}},{dates:[new Date(2021,10,24,20,0)],title:"Das Land des Lächelns, Operette von Franz Lehár",location:"Elbeforum Brunsbüttel",project:"orchester",description:{de:"Veranstaltung des Kammeroper Köln<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Mehr Informationen</a>",fr:"Manifestation de l'Opéra de chambre de Cologne<br><a href='https://www.kammeroper-koeln.de/alle-produktionen/das-land-des-laechelns/' target='_blank'>Informations</a>"}},{dates:[new Date(2021,10,21,16,0)],title:"Monsieur Croche",location:"Propsteikirche St Peter und Paul, Bochum",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,10,7,17,0)],title:"Monsieur Croche",location:"Heilig Geist Kirche, Bielefeld",project:"monsieur-croche",description:{de:"Konzert-Lektüre, Artikel und Interviews von Claude Debussy.<br>Trio Sophora, Florian Kretlow (Sprecher)<br>Gefördert durch <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>",fr:"Concert-lecture, articles et interviews de Claude Debussy<br>Trio Sophora, Florian Kretlow (lecteur)<br>Soutenu par le programme <a href='https://www.mkw.nrw/kultur/foerderungen/auf-gehts' target='_blank'>Auf geht's NRW</a>."}},{dates:[new Date(2021,9,30,18,0)],title:"Jubiläumsveranstaltung: 100 Jahre Bahnhofsmission Bochum",location:"Propsteikirche St Peter und Paul, Bochum",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,9,29,17,0)],title:"I got Music! - Familienkonzert",project:"orchester",location:"Abtei Marienmünster",description:{de:"Musikvermittlung: <a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Detmolder Kammerorchester</a>.",fr:"Manifestation de l'<a href='https://www.detmolder-kammerorchester.de/musikvermittlung' target='_blank'>Orchestre de chambre de Detmold</a>."}},{dates:[new Date(2021,9,17,19,30)],title:"My Fair Lady, Musical von Frederick Loewe",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,9,2,10,0)],title:"Absolventenveranstaltung",location:"Lehrinstitut Lübeck ZAP-Nord",description:{de:"Harfe Solo<br>Private Veranstaltung",fr:"Harpe seule<br>Manifestation privée"}},{dates:[new Date(2021,8,26,17,0)],title:"FRAKZIONEN",location:"Zionskirche, Bielefeld",project:"kammermusik",description:{de:"Konzert mit dem Harfenquartett Arpalando",fr:"Concert avec le quatuor de harpe Arpalando"}},{dates:[new Date(2021,8,24,17,0)],title:"De Musica",location:"Atelier von Jürgen Heckmanns, Herford",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a><br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Private Veranstaltung.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée."}},{dates:[new Date(2021,8,19,19,30)],title:"Richard Strauss - Eine Alpensinfonie",location:"Bühnenhaus, Kevelear",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,8,18,17,0)],title:"Richard Strauss - Eine Alpensinfonie",location:"Marien-Gymnasium, Essen",project:"orchester",description:{de:"Landesbläserphilharmonie Nordrhein-Westfalen",fr:"Landesbläserphilharmonie Nordrhein-Westfalen"}},{dates:[new Date(2021,7,26,15,0)],title:"Eindrücke der Natur",location:"Senioreneinrichtung Haus an der Graf-Adolf-Straße, Bochum",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,6,18,18,30)],title:"De Musica",location:"Eglise Notre-Dame de l'Assomption, Domme (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,13,18,0)],title:"De Musica",location:"Cour d'honneur de l'Hôtel de Ville, Brive-la-Gaillarde (France)",project:"de-musica",description:{de:"Konzert-Lektüre, Musik und Philosophie.<br><a href='/projekte/de-musica'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Concert-lecture, musique et philosophie<br><a href='/projekte/de-musica'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,6,1,15,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Frauenhaus, Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,24,9,30),new Date(2021,5,25,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-Kindergarten Gedulderweg, Sprockhövel",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."}},{dates:[new Date(2021,5,20,18,0)],title:"Das Land des Lächelns, Operette in drei Akten von Franz Lehár",project:"orchester",location:"Landestheater Detmold",description:{de:"Veranstaltung des <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheaters Detmold</a>.",fr:"Manifestation du <a href='https://www.landestheater-detmold.de/de/' target='_blank'>Landestheater Detmold</a>."}},{dates:[new Date(2021,5,18,9,30)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Evangelische Kita Eislebener Str., Bochum",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,5,8,15,45)],title:"Eindrücke der Natur",location:"Belia Seniorenresidenz Wattenscheid",description:{de:"Harfe solo, Werke von Bach, Beethoven, Fauré...",fr:"Harpe seule, œuvres de Bach, Beethoven, Fauré..."}},{dates:[new Date(2021,5,1,9,0)],title:"Ein Lied für die Nachtigall",project:"nachtigall",location:"Musik-KiTa, Detmold",description:{de:"Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",fr:"Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"}},{dates:[new Date(2021,4,30,14)],title:"10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",location:"Autobahnkirche RUHR",description:{de:"Musikalische Gestaltung des ökumenischen Gottesdienstes",fr:"Accompagnement musical de la célébration œcuménique"}},{dates:[new Date(2021,3,21,10,30)],title:"Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",location:"Propsteikirche St. Peter und Paul, Bochum",description:{de:"Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",fr:"Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."}},{dates:[new Date(2021,3,3,20)],title:"Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",location:"Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",description:{de:"Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",fr:"Chant, flûte et harpe"}}]},s={de:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],fr:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]},i=e=>e.getTime()>(new Date).getTime();let l=[],o=[];for(let e of n.events){let t=!1;for(const r of e.dates)if(i(r)){t=!0;break}t?l.push(e):o.push(e)}return l.sort((e,t)=>e.dates[0].getTime()-t.dates[0].getTime()),o.sort((e,t)=>t.dates[0].getTime()-e.dates[0].getTime()),[a,n,{nachtigall:"/projekte/nachtigall"},{nachtigall:"/images/lerche-128.jpg",kirche:"/images/kirche-128.jpg",altenheim:"/images/baum-128.jpg","trio-sophora":"/images/trio-sophora-logo.svg","monsieur-croche":"/images/trio-sophora-logo.svg","de-musica":"/images/socrates-128.jpg"},(e,t="de")=>{let r=String(e.getDate());return"de"==t&&(r+="."),r+=` ${s[t][e.getMonth()]} ${e.getFullYear()} ${e.getHours()}`,e.getMinutes()?r+=("fr"==t?"h":":")+e.getMinutes():"fr"==t&&(r+="h"),"de"==t&&(r+=" Uhr"),r},l,o]}export default class extends e{constructor(e){super(),t(this,e,R,W,r,{})}}
