function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function f(t,e,n,r,s,o,a){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=u(e,n,r,a);t.p(s,c)}}function h(t){return null==t?"":t}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),g=d?t=>requestAnimationFrame(t):t;const m=new Set;function v(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&g(v)}function $(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function w(){return x(" ")}function S(){return x("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t){return Array.from(t.childNodes)}function L(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):_(e)}function C(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return x(e)}function R(t){return C(t," ")}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function N(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function T(t,e=document.body){return Array.from(e.querySelectorAll(t))}const U=new Set;let F,H=0;function q(t,e,n,r,s,o,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,h=t.ownerDocument;U.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(_("style")).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${f} ${r}ms linear ${s}ms 1 both`,H+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),H-=s,H||g(()=>{H||(U.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),U.clear())}))}function I(t){F=t}function V(){if(!F)throw new Error("Function called outside component initialization");return F}function z(){const t=V();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=N(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}const J=[],M=[],K=[],G=[],W=Promise.resolve();let Y=!1;function X(t){K.push(t)}let Q=!1;const Z=new Set;function tt(){if(!Q){Q=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];I(e),et(e.$$)}for(J.length=0;M.length;)M.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];Z.has(e)||(Z.add(e),e())}K.length=0}while(J.length);for(;G.length;)G.pop()();Y=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}let nt;function rt(t,e,n){t.dispatchEvent(N(`${e?"intro":"outro"}${n}`))}const st=new Set;let ot;function at(){ot={r:0,c:[],p:ot}}function ct(){ot.r||o(ot.c),ot=ot.p}function it(t,e){t&&t.i&&(st.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),ot.c.push(()=>{st.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ut={duration:0};function ft(n,r,s,c){let i=r(n,s),l=c?0:1,u=null,f=null,h=null;function d(){h&&B(n,h)}function $(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:s=0,duration:a=300,easing:c=e,tick:b=t,css:y}=i||ut,E={start:p()+s,b:r};r||(E.group=ot,ot.r+=1),u?f=E:(y&&(d(),h=q(n,l,r,a,s,c,y)),r&&b(0,1),u=$(E,a),X(()=>rt(n,r,"start")),function(t){let e;0===m.size&&g(v),new Promise(n=>{m.add(e={c:t,f:n})})}(t=>{if(f&&t>f.start&&(u=$(f,a),f=null,rt(n,u.b,"start"),y&&(d(),h=q(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)b(l=u.b,1-l),rt(n,u.b,"end"),f||(u.b?d():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),b(l,1-l)}return!(!u&&!f)}))}return{run(t){a(i)?(nt||(nt=Promise.resolve(),nt.then(()=>{nt=null})),nt).then(()=>{i=i(),b(t)}):b(t)},end(){d(),u=f=null}}}function ht(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function dt(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function gt(t,e){t&&t.l(e)}function mt(t,e,n){const{fragment:s,on_mount:c,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),X(()=>{const e=c.map(r).filter(a);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(X)}function vt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(J.push(t),Y||(Y=!0,W.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(e,n,r,a,c,i,l=[-1]){const u=F;I(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l};let d=!1;if(h.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),d&&$t(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=j(n.target);h.fragment&&h.fragment.l(t),t.forEach(y)}else h.fragment&&h.fragment.c();n.intro&&it(e.$$.fragment),mt(e,n.target,n.anchor),tt()}I(u)}class yt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Et=[];function _t(e,n=t){let r;const s=[];function o(t){if(c(e,t)&&(e=t,r)){const t=!Et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Et.push(n,e)}if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const xt={},wt=()=>({});function St(t){const e=t-1;return e*e*e+1}function At(t,{delay:e=0,duration:n=400,easing:r=St}){const s=getComputedStyle(t),o=+s.opacity,a=parseFloat(s.height),c=parseFloat(s.paddingTop),i=parseFloat(s.paddingBottom),l=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),h=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*a}px;padding-top: ${t*c}px;padding-bottom: ${t*i}px;margin-top: ${t*l}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*h}px;`}}const kt=_t({language:"de"});function Pt(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function jt(t){let e,n,r,s,o,a,c,i,l=t[9][t[2]]+"";return{c(){e=_("li"),n=_("a"),r=x(l),a=w(),this.h()},l(t){e=L(t,"LI",{class:!0});var s=j(e);n=L(s,"A",{"aria-current":!0,href:!0,class:!0});var o=j(n);r=C(o,l),o.forEach(y),a=R(s),s.forEach(y),this.h()},h(){P(n,"aria-current",s=t[1]===t[9].route?"page":void 0),P(n,"href",o=t[9].route),P(n,"class","svelte-198v8lt"),P(e,"class","nav-list-item svelte-198v8lt")},m(s,o){b(s,e,o),$(e,n),$(n,r),$(e,a),c||(i=A(n,"click",t[5]),c=!0)},p(t,e){4&e&&l!==(l=t[9][t[2]]+"")&&O(r,l),2&e&&s!==(s=t[1]===t[9].route?"page":void 0)&&P(n,"aria-current",s)},d(t){t&&y(e),c=!1,i()}}}function Lt(e){let n,r,s,o=e[4],a=[];for(let t=0;t<o.length;t+=1)a[t]=jt(Pt(e,o,t));return{c(){n=_("nav"),r=_("ul");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){n=L(t,"NAV",{class:!0});var e=j(n);r=L(e,"UL",{id:!0,class:!0});var s=j(r);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(y),e.forEach(y),this.h()},h(){P(r,"id","nav-list"),P(r,"class","svelte-198v8lt"),P(n,"class",s=h(e[0]?"nav-title":"nav-std")+" svelte-198v8lt")},m(t,e){b(t,n,e),$(n,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null)},p(t,[e]){if(30&e){let n;for(o=t[4],n=0;n<o.length;n+=1){const s=Pt(t,o,n);a[n]?a[n].p(s,e):(a[n]=jt(s),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}1&e&&s!==(s=h(t[0]?"nav-title":"nav-std")+" svelte-198v8lt")&&P(n,"class",s)},i:t,o:t,d(t){t&&y(n),E(a,t)}}}function Ct(t,e,n){const r=z();let s;kt.subscribe(({language:t})=>{n(2,s=t)});let{isTitle:o=!1}=e,{segment:a}=e;return t.$set=t=>{"isTitle"in t&&n(0,o=t.isTitle),"segment"in t&&n(1,a=t.segment)},[o,a,s,r,[{route:"biographie",de:"Biographie",fr:"Biographie"},{route:"projekte",de:"Projekte",fr:"Projets"},{route:"unterricht",de:"Unterricht",fr:"Enseignement"},{route:"kontakt",de:"Kontakt",fr:"Contact"}],()=>{r("navigate")}]}class Rt extends yt{constructor(t){super(),bt(this,t,Ct,Lt,c,{isTitle:0,segment:1})}}function Ot(t){let e,n,r,s,o,a,c,i,l,u,f,d,p,g="de"===t[2].language?"Harfenistin":"Harpiste";return f=new Rt({props:{segment:t[0]}}),f.$on("navigate",t[3]),{c(){e=_("header"),n=_("div"),r=_("a"),s=_("h1"),o=x("Louise Augoyard"),a=w(),c=_("h2"),i=x(g),u=w(),pt(f.$$.fragment),this.h()},l(t){e=L(t,"HEADER",{id:!0,class:!0});var l=j(e);n=L(l,"DIV",{id:!0,class:!0});var h=j(n);r=L(h,"A",{href:!0});var d=j(r);s=L(d,"H1",{id:!0,class:!0});var p=j(s);o=C(p,"Louise Augoyard"),p.forEach(y),a=R(d),c=L(d,"H2",{id:!0,class:!0});var m=j(c);i=C(m,g),m.forEach(y),d.forEach(y),h.forEach(y),u=R(l),gt(f.$$.fragment,l),l.forEach(y),this.h()},h(){P(s,"id","title"),P(s,"class","svelte-xgcv2k"),P(c,"id","subtitle"),P(c,"class",l=h("fr"===t[2].language?"subtitle-french":"subtitle-german")+" svelte-xgcv2k"),P(r,"href","/"),P(n,"id","header-mobile-title-container"),P(n,"class","svelte-xgcv2k"),P(e,"id","header-mobile"),P(e,"class","svelte-xgcv2k")},m(t,l){b(t,e,l),$(e,n),$(n,r),$(r,s),$(s,o),$(r,a),$(r,c),$(c,i),$(e,u),mt(f,e,null),p=!0},p(t,e){(!p||4&e)&&g!==(g="de"===t[2].language?"Harfenistin":"Harpiste")&&O(i,g),(!p||4&e&&l!==(l=h("fr"===t[2].language?"subtitle-french":"subtitle-german")+" svelte-xgcv2k"))&&P(c,"class",l);const n={};1&e&&(n.segment=t[0]),f.$set(n)},i(t){p||(it(f.$$.fragment,t),X(()=>{d||(d=ft(e,At,{y:-100,duration:1e3},!0)),d.run(1)}),p=!0)},o(t){lt(f.$$.fragment,t),d||(d=ft(e,At,{y:-100,duration:1e3},!1)),d.run(0),p=!1},d(t){t&&y(e),vt(f),t&&d&&d.end()}}}function Dt(t){let e,n,r,s,o,a,c,i,l,u,f,h,d,p,g,m,v,E=t[1]&&Ot(t);return p=new Rt({props:{segment:t[0]}}),{c(){e=_("button"),n=_("div"),r=w(),s=_("div"),o=w(),a=_("div"),c=w(),E&&E.c(),i=w(),l=_("header"),u=_("h1"),f=_("a"),h=x("LA"),d=w(),pt(p.$$.fragment),this.h()},l(t){e=L(t,"BUTTON",{id:!0,class:!0});var g=j(e);n=L(g,"DIV",{class:!0}),j(n).forEach(y),r=R(g),s=L(g,"DIV",{class:!0}),j(s).forEach(y),o=R(g),a=L(g,"DIV",{class:!0}),j(a).forEach(y),g.forEach(y),c=R(t),E&&E.l(t),i=R(t),l=L(t,"HEADER",{id:!0,class:!0});var m=j(l);u=L(m,"H1",{class:!0});var v=j(u);f=L(v,"A",{href:!0,class:!0});var $=j(f);h=C($,"LA"),$.forEach(y),v.forEach(y),d=R(m),gt(p.$$.fragment,m),m.forEach(y),this.h()},h(){P(n,"class","header-mobile-toggle-dot svelte-xgcv2k"),P(s,"class","header-mobile-toggle-dot svelte-xgcv2k"),P(a,"class","header-mobile-toggle-dot svelte-xgcv2k"),P(e,"id","header-mobile-toggle"),P(e,"class","svelte-xgcv2k"),P(f,"href","/"),P(f,"class","svelte-xgcv2k"),P(u,"class","logo svelte-xgcv2k"),P(l,"id","header-std"),P(l,"class","svelte-xgcv2k")},m(y,_){b(y,e,_),$(e,n),$(e,r),$(e,s),$(e,o),$(e,a),b(y,c,_),E&&E.m(y,_),b(y,i,_),b(y,l,_),$(l,u),$(u,f),$(f,h),$(l,d),mt(p,l,null),g=!0,m||(v=A(e,"click",t[3]),m=!0)},p(t,[e]){t[1]?E?(E.p(t,e),2&e&&it(E,1)):(E=Ot(t),E.c(),it(E,1),E.m(i.parentNode,i)):E&&(at(),lt(E,1,1,()=>{E=null}),ct());const n={};1&e&&(n.segment=t[0]),p.$set(n)},i(t){g||(it(E),it(p.$$.fragment,t),g=!0)},o(t){lt(E),lt(p.$$.fragment,t),g=!1},d(t){t&&y(e),t&&y(c),E&&E.d(t),t&&y(i),t&&y(l),vt(p),m=!1,v()}}}function Nt(t,e,n){let r;i(t,kt,t=>n(2,r=t));let{segment:s}=e,o=!1;return t.$set=t=>{"segment"in t&&n(0,s=t.segment)},[s,o,r,()=>{n(1,o=!o)}]}class Tt extends yt{constructor(t){super(),bt(this,t,Nt,Dt,c,{segment:0})}}function Ut(e){let n,r,s,a,c,i,l,u,f,h,d,p,g,m,v,E,S,k,O,D,N,T,U,F,H,q,B,I,V,z;return{c(){n=_("footer"),r=_("h1"),s=x("LA"),a=w(),c=_("p"),i=x("Sprachen:\r\n        "),l=_("button"),u=x("Deutsch"),f=x(" |\r\n        "),h=_("button"),d=x("Französisch"),p=w(),g=_("p"),m=x("Copyright 2020 Louise Augoyard | "),v=_("a"),E=x("Impressum"),S=x(" | "),k=_("a"),O=x("Datenschutzhinweise"),D=w(),N=_("p"),T=x("Fotos: "),U=_("a"),F=x("Jutta Jelinski"),H=x(" | Programmierung und Design: Florian Kretlow"),q=w(),B=_("p"),I=x("Verwendete Schriftarten: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),this.h()},l(t){n=L(t,"FOOTER",{class:!0});var e=j(n);r=L(e,"H1",{class:!0});var o=j(r);s=C(o,"LA"),o.forEach(y),a=R(e),c=L(e,"P",{id:!0,class:!0});var $=j(c);i=C($,"Sprachen:\r\n        "),l=L($,"BUTTON",{class:!0});var b=j(l);u=C(b,"Deutsch"),b.forEach(y),f=C($," |\r\n        "),h=L($,"BUTTON",{class:!0});var _=j(h);d=C(_,"Französisch"),_.forEach(y),$.forEach(y),p=R(e),g=L(e,"P",{id:!0,class:!0});var x=j(g);m=C(x,"Copyright 2020 Louise Augoyard | "),v=L(x,"A",{href:!0,class:!0});var w=j(v);E=C(w,"Impressum"),w.forEach(y),S=C(x," | "),k=L(x,"A",{href:!0,class:!0});var A=j(k);O=C(A,"Datenschutzhinweise"),A.forEach(y),x.forEach(y),D=R(e),N=L(e,"P",{class:!0});var P=j(N);T=C(P,"Fotos: "),U=L(P,"A",{href:!0,class:!0});var V=j(U);F=C(V,"Jutta Jelinski"),V.forEach(y),H=C(P," | Programmierung und Design: Florian Kretlow"),P.forEach(y),q=R(e),B=L(e,"P",{class:!0});var z=j(B);I=C(z,"Verwendete Schriftarten: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),z.forEach(y),e.forEach(y),this.h()},h(){P(r,"class","logo svelte-f7xtj"),P(l,"class","inline svelte-f7xtj"),P(h,"class","inline svelte-f7xtj"),P(c,"id","languages"),P(c,"class","svelte-f7xtj"),P(v,"href","impressum"),P(v,"class","svelte-f7xtj"),P(k,"href","datenschutz"),P(k,"class","svelte-f7xtj"),P(g,"id","copyright"),P(g,"class","svelte-f7xtj"),P(U,"href","https://www.fotografie-jelinski.de/"),P(U,"class","svelte-f7xtj"),P(N,"class","svelte-f7xtj"),P(B,"class","svelte-f7xtj"),P(n,"class","svelte-f7xtj")},m(t,o){b(t,n,o),$(n,r),$(r,s),$(n,a),$(n,c),$(c,i),$(c,l),$(l,u),$(c,f),$(c,h),$(h,d),$(n,p),$(n,g),$(g,m),$(g,v),$(v,E),$(g,S),$(g,k),$(k,O),$(n,D),$(n,N),$(N,T),$(N,U),$(U,F),$(N,H),$(n,q),$(n,B),$(B,I),V||(z=[A(l,"click",e[1]),A(h,"click",e[2])],V=!0)},p:t,i:t,o:t,d(t){t&&y(n),V=!1,o(z)}}}function Ft(t){const e=z();return[e,()=>{e("setGerman")},()=>{e("setFrench")}]}class Ht extends yt{constructor(t){super(),bt(this,t,Ft,Ut,c,{})}}function qt(t){let e;const n=t[4].default,r=l(n,t,t[3],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&8&e&&f(r,n,t,t[3],e,null,null)},i(t){e||(it(r,t),e=!0)},o(t){lt(r,t),e=!1},d(t){r&&r.d(t)}}}function Bt(t){let e,n,r,s,o,a;e=new Tt({props:{segment:t[0]}});const c=t[4].default,i=l(c,t,t[3],null);return o=new Ht({}),o.$on("setGerman",t[1]),o.$on("setFrench",t[2]),{c(){pt(e.$$.fragment),n=w(),r=_("main"),i&&i.c(),s=w(),pt(o.$$.fragment),this.h()},l(t){gt(e.$$.fragment,t),n=R(t),r=L(t,"MAIN",{class:!0});var a=j(r);i&&i.l(a),a.forEach(y),s=R(t),gt(o.$$.fragment,t),this.h()},h(){P(r,"class","svelte-lwid7l")},m(t,c){mt(e,t,c),b(t,n,c),b(t,r,c),i&&i.m(r,null),b(t,s,c),mt(o,t,c),a=!0},p(t,n){const r={};1&n&&(r.segment=t[0]),e.$set(r),i&&i.p&&8&n&&f(i,c,t,t[3],n,null,null)},i(t){a||(it(e.$$.fragment,t),it(i,t),it(o.$$.fragment,t),a=!0)},o(t){lt(e.$$.fragment,t),lt(i,t),lt(o.$$.fragment,t),a=!1},d(t){vt(e,t),t&&y(n),t&&y(r),i&&i.d(t),t&&y(s),vt(o,t)}}}function It(t){let e,n,r,s,o,a;document.title=e="\n\t\tLouise Augoyard"+(t[0]?" | "+t[0][0].toUpperCase()+t[0].slice(1):"")+"\n\t";const c=[Bt,qt],i=[];function l(t,e){return t[0]?0:1}return r=l(t),s=i[r]=c[r](t),{c(){n=w(),s.c(),o=S()},l(t){T('[data-svelte="svelte-1il8kkc"]',document.head).forEach(y),n=R(t),s.l(t),o=S()},m(t,e){b(t,n,e),i[r].m(t,e),b(t,o,e),a=!0},p(t,[n]){(!a||1&n)&&e!==(e="\n\t\tLouise Augoyard"+(t[0]?" | "+t[0][0].toUpperCase()+t[0].slice(1):"")+"\n\t")&&(document.title=e);let u=r;r=l(t),r===u?i[r].p(t,n):(at(),lt(i[u],1,1,()=>{i[u]=null}),ct(),s=i[r],s||(s=i[r]=c[r](t),s.c()),it(s,1),s.m(o.parentNode,o))},i(t){a||(it(s),a=!0)},o(t){lt(s),a=!1},d(t){t&&y(n),i[r].d(t),t&&y(o)}}}function Vt(t,e,n){kt.subscribe(({language:t})=>{});const r=()=>{kt.update(t=>({...t,language:"fr"}))};var s;s=()=>{navigator.language.match(/^fr\b/)&&r()},V().$$.on_mount.push(s);let{segment:o}=e,{$$slots:a={},$$scope:c}=e;return t.$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(3,c=t.$$scope)},[o,()=>{kt.update(t=>({...t,language:"de"}))},r,c,a]}class zt extends yt{constructor(t){super(),bt(this,t,Vt,It,c,{segment:0})}}function Jt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=x(r)},l(t){e=L(t,"PRE",{});var s=j(e);n=C(s,r),s.forEach(y)},m(t,r){b(t,e,r),$(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&O(n,r)},d(t){t&&y(e)}}}function Mt(e){let n,r,s,o,a,c,i,l,u,f=e[1].message+"";document.title=n="Louise Augoyard | "+e[0];let h=e[2]&&e[1].stack&&Jt(e);return{c(){r=w(),s=_("h1"),o=x(e[0]),a=w(),c=_("p"),i=x(f),l=w(),h&&h.c(),u=S(),this.h()},l(t){T('[data-svelte="svelte-10rivc5"]',document.head).forEach(y),r=R(t),s=L(t,"H1",{class:!0});var n=j(s);o=C(n,e[0]),n.forEach(y),a=R(t),c=L(t,"P",{class:!0});var d=j(c);i=C(d,f),d.forEach(y),l=R(t),h&&h.l(t),u=S(),this.h()},h(){P(s,"class","svelte-8od9u6"),P(c,"class","svelte-8od9u6")},m(t,e){b(t,r,e),b(t,s,e),$(s,o),b(t,a,e),b(t,c,e),$(c,i),b(t,l,e),h&&h.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n="Louise Augoyard | "+t[0])&&(document.title=n),1&e&&O(o,t[0]),2&e&&f!==(f=t[1].message+"")&&O(i,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Jt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(a),t&&y(c),t&&y(l),h&&h.d(t),t&&y(u)}}}function Kt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class Gt extends yt{constructor(t){super(),bt(this,t,Kt,Mt,c,{status:0,error:1})}}function Wt(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&pt(e.$$.fragment),r=S()},l(t){e&&gt(e.$$.fragment,t),r=S()},m(t,n){e&&mt(e,t,n),b(t,r,n),s=!0},p(t,n){const s=16&n?ht(o,[dt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();const t=e;lt(t.$$.fragment,1,0,()=>{vt(t,1)}),ct()}a?(e=new a(c()),pt(e.$$.fragment),it(e.$$.fragment,1),mt(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&it(e.$$.fragment,t),s=!0)},o(t){e&&lt(e.$$.fragment,t),s=!1},d(t){t&&y(r),e&&vt(e,t)}}}function Yt(t){let e,n;return e=new Gt({props:{error:t[0],status:t[1]}}),{c(){pt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,r){mt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function Xt(t){let e,n,r,s;const o=[Yt,Wt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){a[e].m(t,n),b(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(at(),lt(a[i],1,1,()=>{a[i]=null}),ct(),n=a[e],n||(n=a[e]=o[e](t),n.c()),it(n,1),n.m(r.parentNode,r))},i(t){s||(it(n),s=!0)},o(t){lt(n),s=!1},d(t){a[e].d(t),t&&y(r)}}}function Qt(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new zt({props:o}),{c(){pt(e.$$.fragment)},l(t){gt(e.$$.fragment,t)},m(t,n){mt(e,t,n),r=!0},p(t,[n]){const r=12&n?ht(s,[4&n&&{segment:t[2][0]},8&n&&dt(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(it(e.$$.fragment,t),r=!0)},o(t){lt(e.$$.fragment,t),r=!1},d(t){vt(e,t)}}}function Zt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,V().$$.after_update.push(u),f=xt,h=r,V().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class te extends yt{constructor(t){super(),bt(this,t,Zt,Qt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ee=[],ne=[{js:()=>import("./index.4b7a681f.js"),css:[]},{js:()=>import("./biographie.9ff105c5.js"),css:[]},{js:()=>import("./unterricht.4999ac23.js"),css:[]},{js:()=>import("./projekte.6b780277.js"),css:[]},{js:()=>import("./kontakt.ac806449.js"),css:[]},{js:()=>import("./termine.bc3190ff.js"),css:[]}],re=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/biographie\/?$/,parts:[{i:1}]},{pattern:/^\/unterricht\/?$/,parts:[{i:2}]},{pattern:/^\/projekte\/?$/,parts:[{i:3}]},{pattern:/^\/kontakt\/?$/,parts:[{i:4}]},{pattern:/^\/termine\/?$/,parts:[{i:5}]}];const se="undefined"!=typeof __SAPPER__&&__SAPPER__;let oe,ae,ce,ie=!1,le=[],ue="{}";const fe={page:function(t){const e=_t(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:_t(null),session:_t(se&&se.session)};let he,de;fe.session.subscribe(async t=>{if(he=t,!ie)return;de=!0;const e=Ee(new URL(location.href)),n=ae={},{redirect:r,props:s,branch:o}=await Se(e);n===ae&&await we(r,o,s,e.page)});let pe,ge=null;let me,ve=1;const $e="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},be={};function ye(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(se.baseUrl))return null;let e=t.pathname.slice(se.baseUrl.length);if(""===e&&(e="/"),!ee.some(t=>t.test(e)))for(let n=0;n<re.length;n+=1){const r=re[n],s=r.pattern.exec(e);if(s){const n=ye(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function _e(){return{x:pageXOffset,y:pageYOffset}}async function xe(t,e,n,r){if(e)me=e;else{const t=_e();be[me]=t,e=me=++ve,be[me]=n?t:{x:0,y:0}}me=e,oe&&fe.preloading.set(!0);const s=ge&&ge.href===t.href?ge.promise:Se(t);ge=null;const o=ae={},{redirect:a,props:c,branch:i}=await s;if(o===ae&&(await we(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=be[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}be[me]=t,t&&scrollTo(t.x,t.y)}}async function we(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ee(new URL(t,document.baseURI));return n?($e[e.replaceState?"replaceState":"pushState"]({id:me},"",t),xe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(fe.page.set(r),fe.preloading.set(!1),oe)oe.$set(n);else{n.stores={page:{subscribe:fe.page.subscribe},preloading:{subscribe:fe.preloading.subscribe},session:fe.session},n.level0={props:await ce},n.notify=fe.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ke(t.nextSibling);ke(t),ke(e)}oe=new te({target:pe,props:n,hydrate:!0})}le=e,ue=JSON.stringify(r.query),ie=!0,de=!1}async function Se(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;ce||(ce=se.preloaded[0]||wt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},he));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==ue)return!0;const s=le[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!de&&!u&&le[c]&&le[c].part===e.i)return le[c];u=!1;const{default:d,preload:p}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ae);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(ne[e.i]);let g;return g=ie||!se.preloaded[c+1]?p?await p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},he):{}:se.preloaded[c+1],o["level"+h]={component:d,props:g,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ae(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ke(t){t.parentNode.removeChild(t)}function Pe(t){const e=Ee(new URL(t,document.baseURI));if(e)return ge&&t===ge.href||function(t,e){ge={href:t,promise:e}}(t,Se(e)),ge.promise}let je;function Le(t){clearTimeout(je),je=setTimeout(()=>{Ce(t)},20)}function Ce(t){const e=Oe(t.target);e&&"prefetch"===e.rel&&Pe(e.href)}function Re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Oe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ee(s);if(o){xe(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),$e.pushState({id:me},"",s.href)}}function Oe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function De(t){if(be[me]=_e(),t.state){const e=Ee(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else ve=ve+1,function(t){me=t}(ve),$e.replaceState({id:me},"",location.href)}var Ne;Ne={target:document.querySelector("#sapper")},"scrollRestoration"in $e&&($e.scrollRestoration="manual"),addEventListener("beforeunload",()=>{$e.scrollRestoration="auto"}),addEventListener("load",()=>{$e.scrollRestoration="manual"}),function(t){pe=t}(Ne.target),addEventListener("click",Re),addEventListener("popstate",De),addEventListener("touchstart",Ce),addEventListener("mousemove",Le),Promise.resolve().then(()=>{const{hash:t,href:e}=location;$e.replaceState({id:ve},"",e);const n=new URL(location.href);if(se.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=se;ce||(ce=o&&o[0]),we(null,[],{error:c,status:a,session:s,level0:{props:ce},level1:{props:{status:a,error:c},component:Gt},segments:o},{host:e,path:n,query:ye(r),params:{}})}();const r=Ee(n);return r?xe(r,ve,!0,t):void 0});export{o as A,E as B,D as C,k as D,Rt as N,yt as S,w as a,L as b,pt as c,j as d,_ as e,C as f,y as g,R as h,bt as i,gt as j,P as k,b as l,$ as m,h as n,mt as o,O as p,it as q,lt as r,c as s,x as t,vt as u,i as v,kt as w,S as x,A as y,t as z};
