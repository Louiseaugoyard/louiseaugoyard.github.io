!function(){"use strict";const e=["client/index.5008bf17.js","client/unterricht.0608bd0e.js","client/impressum.3be911d4.js","client/index.5f9ac6bb.js","client/biographie.a21993d4.js","client/duo-esquisse.e56e172d.js","client/de-musica.7e67650b.js","client/datenschutz.b6ef13b8.js","client/trio-sophora.2dc82320.js","client/index.969a5966.js","client/termine.40f3d8d3.js","client/client.15c696cc.js"].concat(["service-worker-index.html","audio/renie_legende.mp3","de-musica-de.pdf","favicon.png","fonts/Cormorant-Bold-webfont.eot","fonts/Cormorant-Bold-webfont.ttf","fonts/Cormorant-Bold-webfont.woff","fonts/Cormorant-Light-webfont.eot","fonts/Cormorant-Light-webfont.ttf","fonts/Cormorant-Light-webfont.woff","fonts/Cormorant-LightItalic-webfont.eot","fonts/Cormorant-LightItalic-webfont.ttf","fonts/Cormorant-LightItalic-webfont.woff","fonts/OpenSans-Light-webfont.eot","fonts/OpenSans-Light-webfont.ttf","fonts/OpenSans-Light-webfont.woff","fonts/OpenSans-LightItalic-webfont.eot","fonts/OpenSans-LightItalic-webfont.ttf","fonts/OpenSans-LightItalic-webfont.woff","fonts/OpenSans-Regular-webfont.eot","fonts/OpenSans-Regular-webfont.ttf","fonts/OpenSans-Regular-webfont.woff","fonts/OpenSans-Semibold-webfont.eot","fonts/OpenSans-Semibold-webfont.ttf","fonts/OpenSans-Semibold-webfont.woff","fonts.css","global.css","images/baum-128.jpg","images/bio-1024.jpg","images/bio-512.jpg","images/bio-mobile.jpg","images/contact-mobile.jpg","images/duo-esquisse-1024.jpg","images/duo-esquisse-1372.jpg","images/duo-esquisse-logo.jpg","images/duo-esquisse-mobile.jpg","images/ecureuil-1372.jpg","images/ecureuil-800.jpg","images/events-1024.jpg","images/events-512.jpg","images/events-mobile.jpg","images/kirche-128.jpg","images/landing-page-1024.jpg","images/landing-page-1366.jpg","images/landing-page-1680.jpg","images/landing-page-1920.jpg","images/landing-page-mobile.jpg","images/laura-512.jpg","images/laura-louise-512.jpg","images/lerche-128.jpg","images/lerche-512.jpg","images/lessons-1024.jpg","images/lessons-512.jpg","images/lessons-mobile.jpg","images/louise-augoyard-1024.jpg","images/louise-augoyard-512.jpg","images/louise-augoyard-portrait-128.jpg","images/louise-augoyard-portrait-384.jpg","images/monet-nenuphars-512.jpg","images/projects-mobile.jpg","images/rossignol-1372.jpg","images/rossignol-800.jpg","images/rossignol-mobile.jpg","images/rossignol.jpg","images/socrates-128.jpg","images/socrates-mobile.jpg","images/tekla-varga-1024.jpg","images/tekla-varga-512.jpg","images/tekla-varga-portrait-128.jpg","images/tekla-varga-portrait-384.jpg","images/trio-sophora-1024.jpg","images/trio-sophora-1512.jpg","images/trio-sophora-512.jpg","images/trio-sophora-logo.svg","images/trio-sophora-mobile.jpg","images/verena-weber-1024.jpg","images/verena-weber-512.jpg","images/verena-weber-portrait-128.jpg","images/verena-weber-portrait-384.jpg","nachtigall.pdf"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1638701855734").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1638701855734"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1638701855734").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const a=await t.match(e.request);if(a)return a;throw s}}))))})}();
