function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function f(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=u(e,n,r,a);t.p(s,i)}}function d(t){return null==t?"":t}const h="undefined"!=typeof window;let p=h?()=>window.performance.now():()=>Date.now(),m=h?t=>requestAnimationFrame(t):t;const g=new Set;function $(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&m($)}function v(t){let e;return 0===g.size&&m($),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}function y(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function A(){return S(" ")}function x(){return S("")}function P(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t){return Array.from(t.childNodes)}function R(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):w(e)}function j(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return S(e)}function O(t){return j(t," ")}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function D(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function F(t,e=document.body){return Array.from(e.querySelectorAll(t))}const U=new Set;let z,H=0;function q(t,e,n,r,s,o,a,i=0){const l=16.666/r;let c="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*o(t);c+=100*t+`%{${a(r,1-r)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=t.ownerDocument;U.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${s}ms 1 both`,H+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),H-=s,H||m(()=>{H||(U.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),U.clear())}))}function I(t){z=t}function J(){if(!z)throw new Error("Function called outside component initialization");return z}function M(t){J().$$.on_mount.push(t)}function V(){const t=J();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=D(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}const K=[],G=[],W=[],Y=[],X=Promise.resolve();let Q=!1;function Z(t){W.push(t)}let tt=!1;const et=new Set;function nt(){if(!tt){tt=!0;do{for(let t=0;t<K.length;t+=1){const e=K[t];I(e),rt(e.$$)}for(K.length=0;G.length;)G.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];et.has(e)||(et.add(e),e())}W.length=0}while(K.length);for(;Y.length;)Y.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let st;function ot(){return st||(st=Promise.resolve(),st.then(()=>{st=null})),st}function at(t,e,n){t.dispatchEvent(D(`${e?"intro":"outro"}${n}`))}const it=new Set;let lt;function ct(){lt={r:0,c:[],p:lt}}function ut(){lt.r||o(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(it.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),lt.c.push(()=>{it.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ht={duration:0};function pt(n,r,s){let o,i,l=r(n,s),c=!1,u=0;function f(){o&&B(n,o)}function d(){const{delay:r=0,duration:s=300,easing:a=e,tick:d=t,css:h}=l||ht;h&&(o=q(n,0,1,s,r,a,h,u++)),d(0,1);const m=p()+r,g=m+s;i&&i.abort(),c=!0,Z(()=>at(n,!0,"start")),i=v(t=>{if(c){if(t>=g)return d(1,0),at(n,!0,"end"),f(),c=!1;if(t>=m){const e=a((t-m)/s);d(e,1-e)}}return c})}let h=!1;return{start(){h||(B(n),a(l)?(l=l(),ot().then(d)):d())},invalidate(){h=!1},end(){c&&(f(),c=!1)}}}function mt(n,r,s,i){let l=r(n,s),c=i?0:1,u=null,f=null,d=null;function h(){d&&B(n,d)}function m(t,e){const n=t.b-c;return e*=Math.abs(n),{a:c,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:s=0,duration:a=300,easing:i=e,tick:g=t,css:$}=l||ht,y={start:p()+s,b:r};r||(y.group=lt,lt.r+=1),u?f=y:($&&(h(),d=q(n,c,r,a,s,i,$)),r&&g(0,1),u=m(y,a),Z(()=>at(n,r,"start")),v(t=>{if(f&&t>f.start&&(u=m(f,a),f=null,at(n,u.b,"start"),$&&(h(),d=q(n,c,u.b,u.duration,0,i,l.css))),u)if(t>=u.end)g(c=u.b,1-c),at(n,u.b,"end"),f||(u.b?h():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;c=u.a+u.d*i(e/u.duration),g(c,1-c)}return!(!u&&!f)}))}return{run(t){a(l)?ot().then(()=>{l=l(),g(t)}):g(t)},end(){h(),u=f=null}}}function gt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function $t(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function yt(t,e){t&&t.l(e)}function bt(t,e,n){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),Z(()=>{const e=i.map(r).filter(a);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(Z)}function Et(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(K.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,r,a,i,l,c=[-1]){const u=z;I(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c};let h=!1;if(d.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&_t(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=L(n.target);d.fragment&&d.fragment.l(t),t.forEach(E)}else d.fragment&&d.fragment.c();n.intro&&ft(e.$$.fragment),bt(e,n.target,n.anchor),nt()}I(u)}class St{$destroy(){Et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const At=[];function xt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!At.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),At.push(n,e)}if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const l=[a,i];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const Pt={},kt=()=>({});function Ct(t){const e=t-1;return e*e*e+1}function Lt(t,{delay:n=0,duration:r=400,easing:s=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function Rt(t,{delay:e=0,duration:n=400,easing:r=Ct,x:s=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function jt(t,{delay:e=0,duration:n=400,easing:r=Ct}){const s=getComputedStyle(t),o=+s.opacity,a=parseFloat(s.height),i=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*a}px;padding-top: ${t*i}px;padding-bottom: ${t*l}px;margin-top: ${t*c}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}const Ot=xt({language:"de"});function Tt(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function Nt(t){let e,n,r,s,o,a,i,l,c,u=t[9][t[2]]+"";return{c(){e=w("li"),n=w("a"),r=S(u),i=A(),this.h()},l(t){e=R(t,"LI",{class:!0});var s=L(e);n=R(s,"A",{"aria-current":!0,"aria-disabled":!0,href:!0,class:!0});var o=L(n);r=j(o,u),o.forEach(E),i=O(s),s.forEach(E),this.h()},h(){C(n,"aria-current",s=t[1]===t[9].route?"page":void 0),C(n,"aria-disabled",o=t[1]===t[9].route),C(n,"href",a=t[9].route),C(n,"class","svelte-bekg4p"),C(e,"class","nav-list-item svelte-bekg4p")},m(s,o){b(s,e,o),y(e,n),y(n,r),y(e,i),l||(c=P(n,"click",t[5]),l=!0)},p(t,e){4&e&&u!==(u=t[9][t[2]]+"")&&T(r,u),2&e&&s!==(s=t[1]===t[9].route?"page":void 0)&&C(n,"aria-current",s),2&e&&o!==(o=t[1]===t[9].route)&&C(n,"aria-disabled",o)},d(t){t&&E(e),l=!1,c()}}}function Dt(e){let n,r,s,o=e[4],a=[];for(let t=0;t<o.length;t+=1)a[t]=Nt(Tt(e,o,t));return{c(){n=w("nav"),r=w("ul");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){n=R(t,"NAV",{class:!0});var e=L(n);r=R(e,"UL",{id:!0,class:!0});var s=L(r);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(E),e.forEach(E),this.h()},h(){C(r,"id","nav-list"),C(r,"class","svelte-bekg4p"),C(n,"class",s=d(e[0]?"nav-title":"nav-std")+" svelte-bekg4p")},m(t,e){b(t,n,e),y(n,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null)},p(t,[e]){if(30&e){let n;for(o=t[4],n=0;n<o.length;n+=1){const s=Tt(t,o,n);a[n]?a[n].p(s,e):(a[n]=Nt(s),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}1&e&&s!==(s=d(t[0]?"nav-title":"nav-std")+" svelte-bekg4p")&&C(n,"class",s)},i:t,o:t,d(t){t&&E(n),_(a,t)}}}function Ft(t,e,n){const r=V();let s;Ot.subscribe(({language:t})=>{n(2,s=t)});let{isTitle:o=!1}=e,{segment:a}=e;return t.$set=t=>{"isTitle"in t&&n(0,o=t.isTitle),"segment"in t&&n(1,a=t.segment)},[o,a,s,r,[{route:"biographie",de:"Biographie",fr:"Biographie"},{route:"projekte",de:"Projekte",fr:"Projets"},{route:"unterricht",de:"Unterricht",fr:"Enseignement"},{route:"kontakt",de:"Kontakt",fr:"Contact"}],()=>{r("navigate")}]}class Ut extends St{constructor(t){super(),wt(this,t,Ft,Dt,i,{isTitle:0,segment:1})}}function zt(e){let n,r,s,o,a,i,l,c,u,f;return{c(){n=w("button"),r=w("div"),s=A(),o=w("div"),a=A(),i=w("div"),this.h()},l(t){n=R(t,"BUTTON",{id:!0,class:!0});var e=L(n);r=R(e,"DIV",{class:!0}),L(r).forEach(E),s=O(e),o=R(e,"DIV",{class:!0}),L(o).forEach(E),a=O(e),i=R(e,"DIV",{class:!0}),L(i).forEach(E),e.forEach(E),this.h()},h(){C(r,"class","header-mobile-toggle-dot svelte-y6ntzs"),C(o,"class","header-mobile-toggle-dot svelte-y6ntzs"),C(i,"class","header-mobile-toggle-dot svelte-y6ntzs"),C(n,"id","header-mobile-toggle"),C(n,"class","svelte-y6ntzs")},m(t,l){b(t,n,l),y(n,r),y(n,s),y(n,o),y(n,a),y(n,i),c=!0,u||(f=P(n,"click",e[3]),u=!0)},p:t,i(t){c||(Z(()=>{l||(l=mt(n,Lt,{},!0)),l.run(1)}),c=!0)},o(t){l||(l=mt(n,Lt,{},!1)),l.run(0),c=!1},d(t){t&&E(n),t&&l&&l.end(),u=!1,f()}}}function Ht(t){let e,n,r,s,a,i,l,c,u,f,h,p,m,g,$,v,_,x,k="de"===t[2].language?"Harfenistin":"Harpiste";return g=new Ut({props:{segment:t[0]}}),g.$on("navigate",t[3]),{c(){e=w("div"),r=A(),s=w("header"),a=w("div"),i=w("a"),l=w("h1"),c=S("Louise Augoyard"),u=A(),f=w("h2"),h=S(k),m=A(),vt(g.$$.fragment),this.h()},l(t){e=R(t,"DIV",{id:!0,class:!0}),L(e).forEach(E),r=O(t),s=R(t,"HEADER",{id:!0,class:!0});var n=L(s);a=R(n,"DIV",{id:!0,class:!0});var o=L(a);i=R(o,"A",{href:!0});var d=L(i);l=R(d,"H1",{id:!0,class:!0});var p=L(l);c=j(p,"Louise Augoyard"),p.forEach(E),u=O(d),f=R(d,"H2",{id:!0,class:!0});var $=L(f);h=j($,k),$.forEach(E),d.forEach(E),o.forEach(E),m=O(n),yt(g.$$.fragment,n),n.forEach(E),this.h()},h(){C(e,"id","header-mobile--underlay"),C(e,"class","svelte-y6ntzs"),C(l,"id","title"),C(l,"class","svelte-y6ntzs"),C(f,"id","subtitle"),C(f,"class",p=d("fr"===t[2].language?"subtitle-french":"subtitle-german")+" svelte-y6ntzs"),C(i,"href","/"),C(a,"id","header-mobile-title-container"),C(a,"class","svelte-y6ntzs"),C(s,"id","header-mobile"),C(s,"class","svelte-y6ntzs")},m(n,o){b(n,e,o),b(n,r,o),b(n,s,o),y(s,a),y(a,i),y(i,l),y(l,c),y(i,u),y(i,f),y(f,h),y(s,m),bt(g,s,null),v=!0,_||(x=[P(e,"click",t[3]),P(i,"click",t[3])],_=!0)},p(t,e){(!v||4&e)&&k!==(k="de"===t[2].language?"Harfenistin":"Harpiste")&&T(h,k),(!v||4&e&&p!==(p=d("fr"===t[2].language?"subtitle-french":"subtitle-german")+" svelte-y6ntzs"))&&C(f,"class",p);const n={};1&e&&(n.segment=t[0]),g.$set(n)},i(t){v||(Z(()=>{n||(n=mt(e,Lt,{},!0)),n.run(1)}),ft(g.$$.fragment,t),Z(()=>{$||($=mt(s,jt,{y:-100,duration:750},!0)),$.run(1)}),v=!0)},o(t){n||(n=mt(e,Lt,{},!1)),n.run(0),dt(g.$$.fragment,t),$||($=mt(s,jt,{y:-100,duration:750},!1)),$.run(0),v=!1},d(t){t&&E(e),t&&n&&n.end(),t&&E(r),t&&E(s),Et(g),t&&$&&$.end(),_=!1,o(x)}}}function qt(t){let e,n,r,s,o,a,i;return a=new Ut({props:{segment:t[0]}}),{c(){e=w("header"),n=w("h1"),r=w("a"),s=S("LA"),o=A(),vt(a.$$.fragment),this.h()},l(t){e=R(t,"HEADER",{id:!0,class:!0});var i=L(e);n=R(i,"H1",{class:!0});var l=L(n);r=R(l,"A",{href:!0,class:!0});var c=L(r);s=j(c,"LA"),c.forEach(E),l.forEach(E),o=O(i),yt(a.$$.fragment,i),i.forEach(E),this.h()},h(){C(r,"href","/"),C(r,"class","svelte-y6ntzs"),C(n,"class","logo svelte-y6ntzs"),C(e,"id","header-std"),C(e,"class","svelte-y6ntzs")},m(t,l){b(t,e,l),y(e,n),y(n,r),y(r,s),y(e,o),bt(a,e,null),i=!0},p(t,e){const n={};1&e&&(n.segment=t[0]),a.$set(n)},i(t){i||(ft(a.$$.fragment,t),i=!0)},o(t){dt(a.$$.fragment,t),i=!1},d(t){t&&E(e),Et(a)}}}function Bt(t){let e,n,r,s,o=t[0]&&zt(t),a=t[1]&&Ht(t),i=t[0]&&qt(t);return{c(){o&&o.c(),e=A(),a&&a.c(),n=A(),i&&i.c(),r=x()},l(t){o&&o.l(t),e=O(t),a&&a.l(t),n=O(t),i&&i.l(t),r=x()},m(t,l){o&&o.m(t,l),b(t,e,l),a&&a.m(t,l),b(t,n,l),i&&i.m(t,l),b(t,r,l),s=!0},p(t,[s]){t[0]?o?(o.p(t,s),1&s&&ft(o,1)):(o=zt(t),o.c(),ft(o,1),o.m(e.parentNode,e)):o&&(ct(),dt(o,1,1,()=>{o=null}),ut()),t[1]?a?(a.p(t,s),2&s&&ft(a,1)):(a=Ht(t),a.c(),ft(a,1),a.m(n.parentNode,n)):a&&(ct(),dt(a,1,1,()=>{a=null}),ut()),t[0]?i?(i.p(t,s),1&s&&ft(i,1)):(i=qt(t),i.c(),ft(i,1),i.m(r.parentNode,r)):i&&(ct(),dt(i,1,1,()=>{i=null}),ut())},i(t){s||(ft(o),ft(a),ft(i),s=!0)},o(t){dt(o),dt(a),dt(i),s=!1},d(t){o&&o.d(t),t&&E(e),a&&a.d(t),t&&E(n),i&&i.d(t),t&&E(r)}}}function It(t,e,n){let r;l(t,Ot,t=>n(2,r=t));let{segment:s}=e,o=!1;return t.$set=t=>{"segment"in t&&n(0,s=t.segment)},[s,o,r,()=>{n(1,o=!o)}]}class Jt extends St{constructor(t){super(),wt(this,t,It,Bt,i,{segment:0})}}function Mt(e){let n,r,s,a,i,l,c,u,f,d,h,p,m,g,$,v,_,x,k,T,N,D,F;return{c(){n=w("p"),r=S("Sprachen:\r\n    \t    "),s=w("button"),a=S("Deutsch"),i=S(" |\r\n    \t    "),l=w("button"),c=S("Français"),u=A(),f=w("p"),d=S("Copyright 2020 Louise Augoyard | "),h=w("a"),p=S("Impressum"),m=A(),g=w("p"),$=S("Fotos: "),v=w("a"),_=S("Jutta Jelinski"),x=S(" | Programmierung und Design: Florian Kretlow"),k=A(),T=w("p"),N=S("Verwendete Schriftarten: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),this.h()},l(t){n=R(t,"P",{id:!0,class:!0});var e=L(n);r=j(e,"Sprachen:\r\n    \t    "),s=R(e,"BUTTON",{class:!0});var o=L(s);a=j(o,"Deutsch"),o.forEach(E),i=j(e," |\r\n    \t    "),l=R(e,"BUTTON",{class:!0});var y=L(l);c=j(y,"Français"),y.forEach(E),e.forEach(E),u=O(t),f=R(t,"P",{id:!0,class:!0});var b=L(f);d=j(b,"Copyright 2020 Louise Augoyard | "),h=R(b,"A",{href:!0,class:!0});var w=L(h);p=j(w,"Impressum"),w.forEach(E),b.forEach(E),m=O(t),g=R(t,"P",{class:!0});var S=L(g);$=j(S,"Fotos: "),v=R(S,"A",{href:!0,target:!0,class:!0});var A=L(v);_=j(A,"Jutta Jelinski"),A.forEach(E),x=j(S," | Programmierung und Design: Florian Kretlow"),S.forEach(E),k=O(t),T=R(t,"P",{class:!0});var P=L(T);N=j(P,"Verwendete Schriftarten: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),P.forEach(E),this.h()},h(){C(s,"class","inline svelte-10ign0m"),C(l,"class","inline svelte-10ign0m"),C(n,"id","languages"),C(n,"class","svelte-10ign0m"),C(h,"href","impressum"),C(h,"class","svelte-10ign0m"),C(f,"id","copyright"),C(f,"class","svelte-10ign0m"),C(v,"href","https://www.fotografie-jelinski.de/"),C(v,"target","_blank"),C(v,"class","svelte-10ign0m"),C(g,"class","svelte-10ign0m"),C(T,"class","svelte-10ign0m")},m(t,o){b(t,n,o),y(n,r),y(n,s),y(s,a),y(n,i),y(n,l),y(l,c),b(t,u,o),b(t,f,o),y(f,d),y(f,h),y(h,p),b(t,m,o),b(t,g,o),y(g,$),y(g,v),y(v,_),y(g,x),b(t,k,o),b(t,T,o),y(T,N),D||(F=[P(s,"click",e[4]),P(l,"click",e[5])],D=!0)},p:t,d(t){t&&E(n),t&&E(u),t&&E(f),t&&E(m),t&&E(g),t&&E(k),t&&E(T),D=!1,o(F)}}}function Vt(e){let n,r,s,a,i,l,c,u,f,d,h,p,m,g,$,v,_,x,k,T,N,D,F;return{c(){n=w("p"),r=S("Langues:\r\n    \t    "),s=w("button"),a=S("Deutsch"),i=S(" |\r\n    \t    "),l=w("button"),c=S("Français"),u=A(),f=w("p"),d=S("Copyright 2020 Louise Augoyard | "),h=w("a"),p=S("Mentions légales"),m=A(),g=w("p"),$=S("Photos: "),v=w("a"),_=S("Jutta Jelinski"),x=S(" | Programmation et design: Florian Kretlow"),k=A(),T=w("p"),N=S("Polices utilisées: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),this.h()},l(t){n=R(t,"P",{id:!0,class:!0});var e=L(n);r=j(e,"Langues:\r\n    \t    "),s=R(e,"BUTTON",{class:!0});var o=L(s);a=j(o,"Deutsch"),o.forEach(E),i=j(e," |\r\n    \t    "),l=R(e,"BUTTON",{class:!0});var y=L(l);c=j(y,"Français"),y.forEach(E),e.forEach(E),u=O(t),f=R(t,"P",{id:!0,class:!0});var b=L(f);d=j(b,"Copyright 2020 Louise Augoyard | "),h=R(b,"A",{href:!0,class:!0});var w=L(h);p=j(w,"Mentions légales"),w.forEach(E),b.forEach(E),m=O(t),g=R(t,"P",{class:!0});var S=L(g);$=j(S,"Photos: "),v=R(S,"A",{href:!0,target:!0,class:!0});var A=L(v);_=j(A,"Jutta Jelinski"),A.forEach(E),x=j(S," | Programmation et design: Florian Kretlow"),S.forEach(E),k=O(t),T=R(t,"P",{class:!0});var P=L(T);N=j(P,"Polices utilisées: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),P.forEach(E),this.h()},h(){C(s,"class","inline svelte-10ign0m"),C(l,"class","inline svelte-10ign0m"),C(n,"id","languages"),C(n,"class","svelte-10ign0m"),C(h,"href","impressum"),C(h,"class","svelte-10ign0m"),C(f,"id","copyright"),C(f,"class","svelte-10ign0m"),C(v,"href","https://www.fotografie-jelinski.de/"),C(v,"target","_blank"),C(v,"class","svelte-10ign0m"),C(g,"class","svelte-10ign0m"),C(T,"class","svelte-10ign0m")},m(t,o){b(t,n,o),y(n,r),y(n,s),y(s,a),y(n,i),y(n,l),y(l,c),b(t,u,o),b(t,f,o),y(f,d),y(f,h),y(h,p),b(t,m,o),b(t,g,o),y(g,$),y(g,v),y(v,_),y(g,x),b(t,k,o),b(t,T,o),y(T,N),D||(F=[P(s,"click",e[2]),P(l,"click",e[3])],D=!0)},p:t,d(t){t&&E(n),t&&E(u),t&&E(f),t&&E(m),t&&E(g),t&&E(k),t&&E(T),D=!1,o(F)}}}function Kt(e){let n,r,s,o;function a(t,e){return"fr"===t[0].language?Vt:Mt}let i=a(e),l=i(e);return{c(){n=w("footer"),r=w("h1"),s=S("LA"),o=A(),l.c(),this.h()},l(t){n=R(t,"FOOTER",{class:!0});var e=L(n);r=R(e,"H1",{class:!0});var a=L(r);s=j(a,"LA"),a.forEach(E),o=O(e),l.l(e),e.forEach(E),this.h()},h(){C(r,"class","logo svelte-10ign0m"),C(n,"class","svelte-10ign0m")},m(t,e){b(t,n,e),y(n,r),y(r,s),y(n,o),l.m(n,null)},p(t,[e]){i===(i=a(t))&&l?l.p(t,e):(l.d(1),l=i(t),l&&(l.c(),l.m(n,null)))},i:t,o:t,d(t){t&&E(n),l.d()}}}function Gt(t,e,n){let r;l(t,Ot,t=>n(0,r=t));const s=V();return[r,s,()=>{s("setGerman")},()=>{s("setFrench")},()=>{s("setGerman")},()=>{s("setFrench")}]}class Wt extends St{constructor(t){super(),wt(this,t,Gt,Kt,i,{})}}function Yt(t){let e;const n=t[4].default,r=c(n,t,t[3],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&8&e&&f(r,n,t,t[3],e,null,null)},i(t){e||(ft(r,t),e=!0)},o(t){dt(r,t),e=!1},d(t){r&&r.d(t)}}}function Xt(t){let e,n,r,s;const o=t[4].default,a=c(o,t,t[3],null);return r=new Wt({}),r.$on("setGerman",t[1]),r.$on("setFrench",t[2]),{c(){e=w("main"),a&&a.c(),n=A(),vt(r.$$.fragment),this.h()},l(t){e=R(t,"MAIN",{class:!0});var s=L(e);a&&a.l(s),s.forEach(E),n=O(t),yt(r.$$.fragment,t),this.h()},h(){C(e,"class","svelte-szp2py")},m(t,o){b(t,e,o),a&&a.m(e,null),b(t,n,o),bt(r,t,o),s=!0},p(t,e){a&&a.p&&8&e&&f(a,o,t,t[3],e,null,null)},i(t){s||(ft(a,t),ft(r.$$.fragment,t),s=!0)},o(t){dt(a,t),dt(r.$$.fragment,t),s=!1},d(t){t&&E(e),a&&a.d(t),t&&E(n),Et(r,t)}}}function Qt(t){let e,n,r,s,o,a,i,l;document.title=e="\n\t\tLouise Augoyard"+(t[0]?" | "+t[0][0].toUpperCase()+t[0].slice(1):"")+"\n\t",r=new Jt({props:{segment:t[0]}});const c=[Xt,Yt],u=[];function f(t,e){return t[0]?0:1}return o=f(t),a=u[o]=c[o](t),{c(){n=A(),vt(r.$$.fragment),s=A(),a.c(),i=x()},l(t){F('[data-svelte="svelte-1il8kkc"]',document.head).forEach(E),n=O(t),yt(r.$$.fragment,t),s=O(t),a.l(t),i=x()},m(t,e){b(t,n,e),bt(r,t,e),b(t,s,e),u[o].m(t,e),b(t,i,e),l=!0},p(t,[n]){(!l||1&n)&&e!==(e="\n\t\tLouise Augoyard"+(t[0]?" | "+t[0][0].toUpperCase()+t[0].slice(1):"")+"\n\t")&&(document.title=e);const s={};1&n&&(s.segment=t[0]),r.$set(s);let d=o;o=f(t),o===d?u[o].p(t,n):(ct(),dt(u[d],1,1,()=>{u[d]=null}),ut(),a=u[o],a||(a=u[o]=c[o](t),a.c()),ft(a,1),a.m(i.parentNode,i))},i(t){l||(ft(r.$$.fragment,t),ft(a),l=!0)},o(t){dt(r.$$.fragment,t),dt(a),l=!1},d(t){t&&E(n),Et(r,t),t&&E(s),u[o].d(t),t&&E(i)}}}function Zt(t,e,n){Ot.subscribe(({language:t})=>{});const r=()=>{Ot.update(t=>({...t,language:"fr"}))};M(()=>{navigator.language.match(/^fr\b/)&&r()});let{segment:s}=e,{$$slots:o={},$$scope:a}=e;return t.$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(3,a=t.$$scope)},[s,()=>{Ot.update(t=>({...t,language:"de"}))},r,a,o]}class te extends St{constructor(t){super(),wt(this,t,Zt,Qt,i,{segment:0})}}function ee(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=S(r)},l(t){e=R(t,"PRE",{});var s=L(e);n=j(s,r),s.forEach(E)},m(t,r){b(t,e,r),y(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&T(n,r)},d(t){t&&E(e)}}}function ne(t){let e,n,r,s,o,a,i,l,c,u,f,d,h,p,m=t[1].message+"";document.title=e="Louise Augoyard | "+t[0],r=new Jt({props:{segment:t[2]}});let g=t[3]&&t[1].stack&&ee(t);return h=new Wt({}),h.$on("setGerman",t[4]),h.$on("setFrench",t[5]),{c(){n=A(),vt(r.$$.fragment),s=A(),o=w("main"),a=w("h1"),i=S(t[0]),l=A(),c=w("p"),u=S(m),f=A(),g&&g.c(),d=A(),vt(h.$$.fragment),this.h()},l(e){F('[data-svelte="svelte-10rivc5"]',document.head).forEach(E),n=O(e),yt(r.$$.fragment,e),s=O(e),o=R(e,"MAIN",{class:!0});var p=L(o);a=R(p,"H1",{});var $=L(a);i=j($,t[0]),$.forEach(E),l=O(p),c=R(p,"P",{});var v=L(c);u=j(v,m),v.forEach(E),f=O(p),g&&g.l(p),p.forEach(E),d=O(e),yt(h.$$.fragment,e),this.h()},h(){C(o,"class","svelte-szp2py")},m(t,e){b(t,n,e),bt(r,t,e),b(t,s,e),b(t,o,e),y(o,a),y(a,i),y(o,l),y(o,c),y(c,u),y(o,f),g&&g.m(o,null),b(t,d,e),bt(h,t,e),p=!0},p(t,[n]){(!p||1&n)&&e!==(e="Louise Augoyard | "+t[0])&&(document.title=e);const s={};4&n&&(s.segment=t[2]),r.$set(s),(!p||1&n)&&T(i,t[0]),(!p||2&n)&&m!==(m=t[1].message+"")&&T(u,m),t[3]&&t[1].stack?g?g.p(t,n):(g=ee(t),g.c(),g.m(o,null)):g&&(g.d(1),g=null)},i(t){p||(ft(r.$$.fragment,t),ft(h.$$.fragment,t),p=!0)},o(t){dt(r.$$.fragment,t),dt(h.$$.fragment,t),p=!1},d(t){t&&E(n),Et(r,t),t&&E(s),t&&E(o),g&&g.d(),t&&E(d),Et(h,t)}}}function re(t,e,n){let{status:r}=e,{error:s}=e;Ot.subscribe(({language:t})=>{});const o=()=>{Ot.update(t=>({...t,language:"fr"}))};M(()=>{navigator.language.match(/^fr\b/)&&o()});let{segment:a}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error),"segment"in t&&n(2,a=t.segment)},[r,s,a,!1,()=>{Ot.update(t=>({...t,language:"de"}))},o]}class se extends St{constructor(t){super(),wt(this,t,re,ne,i,{status:0,error:1,segment:2})}}function oe(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(i())),{c(){e&&vt(e.$$.fragment),r=x()},l(t){e&&yt(e.$$.fragment,t),r=x()},m(t,n){e&&bt(e,t,n),b(t,r,n),s=!0},p(t,n){const s=16&n?gt(o,[$t(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ct();const t=e;dt(t.$$.fragment,1,0,()=>{Et(t,1)}),ut()}a?(e=new a(i()),vt(e.$$.fragment),ft(e.$$.fragment,1),bt(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&ft(e.$$.fragment,t),s=!0)},o(t){e&&dt(e.$$.fragment,t),s=!1},d(t){t&&E(r),e&&Et(e,t)}}}function ae(t){let e,n;return e=new se({props:{error:t[0],status:t[1]}}),{c(){vt(e.$$.fragment)},l(t){yt(e.$$.fragment,t)},m(t,r){bt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){dt(e.$$.fragment,t),n=!1},d(t){Et(e,t)}}}function ie(t){let e,n,r,s;const o=[ae,oe],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){a[e].m(t,n),b(t,r,n),s=!0},p(t,s){let l=e;e=i(t),e===l?a[e].p(t,s):(ct(),dt(a[l],1,1,()=>{a[l]=null}),ut(),n=a[e],n||(n=a[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){dt(n),s=!1},d(t){a[e].d(t),t&&E(r)}}}function le(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ie]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new te({props:o}),{c(){vt(e.$$.fragment)},l(t){yt(e.$$.fragment,t)},m(t,n){bt(e,t,n),r=!0},p(t,[n]){const r=12&n?gt(s,[4&n&&{segment:t[2][0]},8&n&&$t(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(ft(e.$$.fragment,t),r=!0)},o(t){dt(e.$$.fragment,t),r=!1},d(t){Et(e,t)}}}function ce(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:l=null}=e,{notify:c}=e;var u,f,d;return u=c,J().$$.after_update.push(u),f=Pt,d=r,J().$$.context.set(f,d),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[s,o,a,i,l,r,c]}class ue extends St{constructor(t){super(),wt(this,t,ce,le,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const fe=[],de=[{js:()=>import("./index.63ae12af.js"),css:[]},{js:()=>import("./biographie.6cc1afe2.js"),css:[]},{js:()=>import("./unterricht.1a79cbc8.js"),css:[]},{js:()=>import("./impressum.f18f94d8.js"),css:[]},{js:()=>import("./projekte.f5177a49.js"),css:[]},{js:()=>import("./index.d1c88a44.js"),css:[]},{js:()=>import("./termine.c9506ace.js"),css:[]}],he=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/biographie\/?$/,parts:[{i:1}]},{pattern:/^\/unterricht\/?$/,parts:[{i:2}]},{pattern:/^\/impressum\/?$/,parts:[{i:3}]},{pattern:/^\/projekte\/?$/,parts:[{i:4}]},{pattern:/^\/kontakt\/?$/,parts:[{i:5}]},{pattern:/^\/termine\/?$/,parts:[{i:6}]}];const pe="undefined"!=typeof __SAPPER__&&__SAPPER__;let me,ge,$e,ve=!1,ye=[],be="{}";const Ee={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:xt(null),session:xt(pe&&pe.session)};let _e,we;Ee.session.subscribe(async t=>{if(_e=t,!ve)return;we=!0;const e=Re(new URL(location.href)),n=ge={},{redirect:r,props:s,branch:o}=await Ne(e);n===ge&&await Te(r,o,s,e.page)});let Se,Ae=null;let xe,Pe=1;const ke="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ce={};function Le(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Re(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe.baseUrl))return null;let e=t.pathname.slice(pe.baseUrl.length);if(""===e&&(e="/"),!fe.some(t=>t.test(e)))for(let n=0;n<he.length;n+=1){const r=he[n],s=r.pattern.exec(e);if(s){const n=Le(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function je(){return{x:pageXOffset,y:pageYOffset}}async function Oe(t,e,n,r){if(e)xe=e;else{const t=je();Ce[xe]=t,e=xe=++Pe,Ce[xe]=n?t:{x:0,y:0}}xe=e,me&&Ee.preloading.set(!0);const s=Ae&&Ae.href===t.href?Ae.promise:Ne(t);Ae=null;const o=ge={},{redirect:a,props:i,branch:l}=await s;if(o===ge&&(await Te(a,l,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ce[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ce[xe]=t,t&&scrollTo(t.x,t.y)}}async function Te(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Re(new URL(t,document.baseURI));return n?(ke[e.replaceState?"replaceState":"pushState"]({id:xe},"",t),Oe(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ee.page.set(r),Ee.preloading.set(!1),me)me.$set(n);else{n.stores={page:{subscribe:Ee.page.subscribe},preloading:{subscribe:Ee.preloading.subscribe},session:Ee.session},n.level0={props:await $e},n.notify=Ee.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Fe(t.nextSibling);Fe(t),Fe(e)}me=new ue({target:Se,props:n,hydrate:!0})}ye=e,be=JSON.stringify(r.query),ve=!0,we=!1}async function Ne(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;$e||($e=pe.preloaded[0]||kt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},_e));let l=1;try{const s=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==be)return!0;const s=ye[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,c,s)&&(u=!0),o.segments[l]=r[i+1],!e)return{segment:f};const d=l++;if(!we&&!u&&ye[i]&&ye[i].part===e.i)return ye[i];u=!1;const{default:h,preload:p}=await function(t){const e="string"==typeof t.css?[]:t.css.map(De);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(de[e.i]);let m;return m=ve||!pe.preloaded[i+1]?p?await p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},_e):{}:pe.preloaded[i+1],o["level"+d]={component:h,props:m,segment:f,match:c,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function De(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Fe(t){t.parentNode.removeChild(t)}function Ue(t){const e=Re(new URL(t,document.baseURI));if(e)return Ae&&t===Ae.href||function(t,e){Ae={href:t,promise:e}}(t,Ne(e)),Ae.promise}let ze;function He(t){clearTimeout(ze),ze=setTimeout(()=>{qe(t)},20)}function qe(t){const e=Ie(t.target);e&&"prefetch"===e.rel&&Ue(e.href)}function Be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Ie(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Re(s);if(o){Oe(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),ke.pushState({id:xe},"",s.href)}}function Ie(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Je(t){if(Ce[xe]=je(),t.state){const e=Re(new URL(location.href));e?Oe(e,t.state.id):location.href=location.href}else Pe=Pe+1,function(t){xe=t}(Pe),ke.replaceState({id:xe},"",location.href)}var Me;Me={target:document.querySelector("body")},"scrollRestoration"in ke&&(ke.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ke.scrollRestoration="auto"}),addEventListener("load",()=>{ke.scrollRestoration="manual"}),function(t){Se=t}(Me.target),addEventListener("click",Be),addEventListener("popstate",Je),addEventListener("touchstart",qe),addEventListener("mousemove",He),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ke.replaceState({id:Pe},"",e);const n=new URL(location.href);if(pe.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=pe;$e||($e=o&&o[0]),Te(null,[],{error:i,status:a,session:s,level0:{props:$e},level1:{props:{status:a,error:i},component:se},segments:o},{host:e,path:n,query:Le(r),params:{}})}();const r=Re(n);return r?Oe(r,Pe,!0,t):void 0});export{P as A,t as B,o as C,x as D,_ as E,ut as F,ct as G,mt as H,N as I,k as J,Ut as N,St as S,A as a,R as b,vt as c,L as d,w as e,j as f,E as g,O as h,wt as i,yt as j,C as k,b as l,y as m,d as n,bt as o,T as p,ft as q,dt as r,i as s,S as t,Et as u,l as v,Z as w,pt as x,Rt as y,Ot as z};
