function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(r)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e,n,r){if(t){const s=u(t,e,n,r);return t[0](s)}}function u(t,e,r,s){return t[1]&&s?n(r.ctx.slice(),t[1](s(e))):r.ctx}function f(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=u(e,n,r,a);t.p(s,i)}}function d(t){return null==t?"":t}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),g=p?t=>requestAnimationFrame(t):t;const m=new Set;function $(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&g($)}function v(t){let e;return 0===m.size&&g($),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}function b(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function A(){return w("")}function L(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t){return function(e){return e.preventDefault(),t.call(this,e)}}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function R(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):S(e)}function k(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return w(e)}function D(t){return k(t," ")}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function O(t,e){t.value=null==e?"":e}function N(t,e,n){t.classList[n?"add":"remove"](e)}function T(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}function H(t,e=document.body){return Array.from(e.querySelectorAll(t))}class U{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=S(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)y(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}const F=new Set;let I,B=0;function M(t,e,n,r,s,o,a,i=0){const l=16.666/r;let c="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*o(t);c+=100*t+`%{${a(r,1-r)}}\n`}const u=c+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,d=t.ownerDocument;F.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(S("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${f} ${r}ms linear ${s}ms 1 both`,B+=1,f}function V(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),B-=s,B||g(()=>{B||(F.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),F.clear())}))}function z(t){I=t}function J(){if(!I)throw new Error("Function called outside component initialization");return I}function K(){const t=J();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=T(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}const W=[],G=[],Y=[],X=[],Q=Promise.resolve();let Z=!1;function tt(t){Y.push(t)}let et=!1;const nt=new Set;function rt(){if(!et){et=!0;do{for(let t=0;t<W.length;t+=1){const e=W[t];z(e),st(e.$$)}for(W.length=0;G.length;)G.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];nt.has(e)||(nt.add(e),e())}Y.length=0}while(W.length);for(;X.length;)X.pop()();Z=!1,et=!1,nt.clear()}}function st(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}let ot;function at(){return ot||(ot=Promise.resolve(),ot.then(()=>{ot=null})),ot}function it(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const lt=new Set;let ct;function ut(){ct={r:0,c:[],p:ct}}function ft(){ct.r||o(ct.c),ct=ct.p}function dt(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(lt.has(t))return;lt.add(t),ct.c.push(()=>{lt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ht={duration:0};function gt(n,r,s){let o,i,l=r(n,s),c=!1,u=0;function f(){o&&V(n,o)}function d(){const{delay:r=0,duration:s=300,easing:a=e,tick:d=t,css:p}=l||ht;p&&(o=M(n,0,1,s,r,a,p,u++)),d(0,1);const g=h()+r,m=g+s;i&&i.abort(),c=!0,tt(()=>it(n,!0,"start")),i=v(t=>{if(c){if(t>=m)return d(1,0),it(n,!0,"end"),f(),c=!1;if(t>=g){const e=a((t-g)/s);d(e,1-e)}}return c})}let p=!1;return{start(){p||(V(n),a(l)?(l=l(),at().then(d)):d())},invalidate(){p=!1},end(){c&&(f(),c=!1)}}}function mt(n,r,s,i){let l=r(n,s),c=i?0:1,u=null,f=null,d=null;function p(){d&&V(n,d)}function g(t,e){const n=t.b-c;return e*=Math.abs(n),{a:c,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(r){const{delay:s=0,duration:a=300,easing:i=e,tick:m=t,css:$}=l||ht,b={start:h()+s,b:r};r||(b.group=ct,ct.r+=1),u?f=b:($&&(p(),d=M(n,c,r,a,s,i,$)),r&&m(0,1),u=g(b,a),tt(()=>it(n,r,"start")),v(t=>{if(f&&t>f.start&&(u=g(f,a),f=null,it(n,u.b,"start"),$&&(p(),d=M(n,c,u.b,u.duration,0,i,l.css))),u)if(t>=u.end)m(c=u.b,1-c),it(n,u.b,"end"),f||(u.b?p():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;c=u.a+u.d*i(e/u.duration),m(c,1-c)}return!(!u&&!f)}))}return{run(t){a(l)?at().then(()=>{l=l(),m(t)}):m(t)},end(){p(),u=f=null}}}const $t="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function vt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function bt(t){return"object"==typeof t&&null!==t?t:{}}function yt(t){t&&t.c()}function _t(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),tt(()=>{const e=i.map(r).filter(a);l?l.push(...e):o(e),t.$$.on_mount=[]}),c.forEach(tt)}function St(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){-1===t.$$.dirty[0]&&(W.push(t),Z||(Z=!0,Q.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,r,a,i,l,c=[-1]){const u=I;z(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c};let p=!1;if(d.ctx=r?r(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),p&&wt(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=C(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&dt(e.$$.fragment),Et(e,n.target,n.anchor),rt()}z(u)}class At{$destroy(){St(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Lt=[];function Pt(e,n=t){let r;const s=[];function o(t){if(i(e,t)&&(e=t,r)){const t=!Lt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Lt.push(n,e)}if(t){for(let t=0;t<Lt.length;t+=2)Lt[t][0](Lt[t+1]);Lt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const l=[a,i];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const jt={},Ct=()=>({});function Rt(t){const e=t-1;return e*e*e+1}function kt(t,{delay:n=0,duration:r=400,easing:s=e}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function Dt(t,{delay:e=0,duration:n=400,easing:r=Rt,x:s=0,y:o=0,opacity:a=0}){const i=getComputedStyle(t),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-a);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${l-u*e}`}}function qt(t,{delay:e=0,duration:n=400,easing:r=Rt}){const s=getComputedStyle(t),o=+s.opacity,a=parseFloat(s.height),i=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),f=parseFloat(s.borderTopWidth),d=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*o};height: ${t*a}px;padding-top: ${t*i}px;padding-bottom: ${t*l}px;margin-top: ${t*c}px;margin-bottom: ${t*u}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}const Ot=Pt({language:"de"});function Nt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Tt(t,e,n){const r=t.slice();return r[9]=e[n],r[10]=e,r[11]=n,r}function Ht(e){let n,r,s=e[9].subroutes,o=[];for(let t=0;t<s.length;t+=1)o[t]=Ut(Nt(e,s,t));return{c(){n=S("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){n=R(t,"UL",{class:!0});var e=C(n);for(let t=0;t<o.length;t+=1)o[t].l(e);e.forEach(_),this.h()},h(){j(n,"class","nav-sublist svelte-13dxgfu")},m(t,e){y(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,e){if(30&e){let r;for(s=t[9].subroutes,r=0;r<s.length;r+=1){const a=Nt(t,s,r);o[r]?o[r].p(a,e):(o[r]=Ut(a),o[r].c(),o[r].m(n,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=s.length}},i(t){r||tt(()=>{r=gt(n,Dt,{y:-100,duration:.5}),r.start()})},o:t,d(t){t&&_(n),E(o,t)}}}function Ut(t){let e,n,r,s,o,a,i,l=t[12][t[3].language]+"";return{c(){e=S("li"),n=S("a"),r=w(l),o=x(),this.h()},l(t){e=R(t,"LI",{class:!0});var s=C(e);n=R(s,"A",{rel:!0,href:!0,class:!0});var a=C(n);r=k(a,l),a.forEach(_),o=D(s),s.forEach(_),this.h()},h(){j(n,"rel","prefetch"),j(n,"href",s=t[12].route),j(n,"class","svelte-13dxgfu"),N(n,"current",t[1]===t[12].route),j(e,"class","nav-sublist--item svelte-13dxgfu")},m(s,l){y(s,e,l),b(e,n),b(n,r),b(e,o),a||(i=L(n,"click",t[6]),a=!0)},p(t,e){12&e&&l!==(l=t[12][t[3].language]+"")&&q(r,l),4&e&&s!==(s=t[12].route)&&j(n,"href",s),6&e&&N(n,"current",t[1]===t[12].route)},d(t){t&&_(e),a=!1,i()}}}function Ft(e){let n,r,s,a,i,l,c,u,f=e[9][e[3].language]+"",d=!e[0]&&e[9].subroutes&&e[9].subroutes_shown&&Ht(e);function p(...t){return e[7](e[9],e[10],e[11],...t)}function h(...t){return e[8](e[9],e[10],e[11],...t)}return{c(){n=S("li"),r=S("a"),s=w(f),i=x(),d&&d.c(),l=x(),this.h()},l(t){n=R(t,"LI",{class:!0});var e=C(n);r=R(e,"A",{rel:!0,href:!0,class:!0});var o=C(r);s=k(o,f),o.forEach(_),i=D(e),d&&d.l(e),l=D(e),e.forEach(_),this.h()},h(){j(r,"rel","prefetch"),j(r,"href",a=e[9].route),j(r,"class","svelte-13dxgfu"),N(r,"current",e[1]===e[9].route),N(r,"highlighted",e[9].subroutes_shown),j(n,"class","nav-list--item svelte-13dxgfu")},m(t,o){y(t,n,o),b(n,r),b(r,s),b(n,i),d&&d.m(n,null),b(n,l),c||(u=[L(r,"click",e[5]),L(n,"mouseenter",p),L(n,"mouseleave",h)],c=!0)},p(t,o){e=t,12&o&&f!==(f=e[9][e[3].language]+"")&&q(s,f),4&o&&a!==(a=e[9].route)&&j(r,"href",a),6&o&&N(r,"current",e[1]===e[9].route),4&o&&N(r,"highlighted",e[9].subroutes_shown),!e[0]&&e[9].subroutes&&e[9].subroutes_shown?d?(d.p(e,o),5&o&&dt(d,1)):(d=Ht(e),d.c(),dt(d,1),d.m(n,l)):d&&(d.d(1),d=null)},i(t){dt(d)},o:t,d(t){t&&_(n),d&&d.d(),c=!1,o(u)}}}function It(e){let n,r,s,o=e[2],a=[];for(let t=0;t<o.length;t+=1)a[t]=Ft(Tt(e,o,t));return{c(){n=S("nav"),r=S("ul");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){n=R(t,"NAV",{class:!0});var e=C(n);r=R(e,"UL",{id:!0,class:!0});var s=C(r);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(_),e.forEach(_),this.h()},h(){j(r,"id","nav-list"),j(r,"class","svelte-13dxgfu"),j(n,"class",s=d(e[0]?"nav-landing-page":"nav-std")+" svelte-13dxgfu")},m(t,e){y(t,n,e),b(n,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null)},p(t,[e]){if(31&e){let n;for(o=t[2],n=0;n<o.length;n+=1){const s=Tt(t,o,n);a[n]?(a[n].p(s,e),dt(a[n],1)):(a[n]=Ft(s),a[n].c(),dt(a[n],1),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}1&e&&s!==(s=d(t[0]?"nav-landing-page":"nav-std")+" svelte-13dxgfu")&&j(n,"class",s)},i(t){for(let t=0;t<o.length;t+=1)dt(a[t])},o:t,d(t){t&&_(n),E(a,t)}}}function Bt(t,e,n){let r;l(t,Ot,t=>n(3,r=t));const s=K();let{is_landing_page:o=!1}=e,{segment:a}=e,i=[{route:"biographie",de:"Biographie",fr:"Biographie",en:"Biography"},{route:"projekte",de:"Projekte",fr:"Projets",en:"Projects",subroutes_shown:!1,subroutes:[{route:"projekte/trio-sophora",de:"Trio Sophora",fr:"Trio Sophora",en:"Trio Sophora"},{route:"projekte/duo-esquisse",de:"Duo Esquisse",fr:"Duo Esquisse",en:"Duo Esquisse"},{route:"projekte/de-musica",de:"De Musica",fr:"De Musica",en:"De Musica"}]},{route:"unterricht",de:"Unterricht",fr:"Enseignement",en:"Lessons"},{route:"termine",de:"Termine",fr:"Agenda",en:"Dates"},{route:"kontakt",de:"Kontakt",fr:"Contact",en:"Contact"}];return t.$set=t=>{"is_landing_page"in t&&n(0,o=t.is_landing_page),"segment"in t&&n(1,a=t.segment)},[o,a,i,r,s,()=>{s("navigate")},()=>{s("navigate")},(t,e,r)=>{n(2,e[r].subroutes_shown=!0,i)},(t,e,r)=>{n(2,e[r].subroutes_shown=!1,i)}]}class Mt extends At{constructor(t){super(),xt(this,t,Bt,It,i,{is_landing_page:0,segment:1})}}function Vt(e){let n,r,s,o,a,i,l,c,u,f;return{c(){n=S("button"),r=S("div"),s=x(),o=S("div"),a=x(),i=S("div"),this.h()},l(t){n=R(t,"BUTTON",{id:!0,class:!0});var e=C(n);r=R(e,"DIV",{class:!0}),C(r).forEach(_),s=D(e),o=R(e,"DIV",{class:!0}),C(o).forEach(_),a=D(e),i=R(e,"DIV",{class:!0}),C(i).forEach(_),e.forEach(_),this.h()},h(){j(r,"class","header-mobile-toggle--dot svelte-1ddqm64"),j(o,"class","header-mobile-toggle--dot svelte-1ddqm64"),j(i,"class","header-mobile-toggle--dot svelte-1ddqm64"),j(n,"id","header-mobile-toggle"),j(n,"class","svelte-1ddqm64")},m(t,l){y(t,n,l),b(n,r),b(n,s),b(n,o),b(n,a),b(n,i),c=!0,u||(f=L(n,"click",e[3]),u=!0)},p:t,i(t){c||(tt(()=>{l||(l=mt(n,kt,{},!0)),l.run(1)}),c=!0)},o(t){l||(l=mt(n,kt,{},!1)),l.run(0),c=!1},d(t){t&&_(n),t&&l&&l.end(),u=!1,f()}}}function zt(t){let e,n,r,s,a,i,l,c,u,f,d,p,h,g,m,$,v,E,A=t[4][t[2].language].title+"",P=t[4][t[2].language].subtitle+"";return g=new Mt({props:{segment:t[0]}}),g.$on("navigate",t[3]),{c(){e=S("div"),r=x(),s=S("header"),a=S("div"),i=S("a"),l=S("h1"),c=w(A),u=x(),f=S("h2"),d=w(P),h=x(),yt(g.$$.fragment),this.h()},l(t){e=R(t,"DIV",{id:!0,class:!0}),C(e).forEach(_),r=D(t),s=R(t,"HEADER",{id:!0,class:!0});var n=C(s);a=R(n,"DIV",{id:!0,class:!0});var o=C(a);i=R(o,"A",{href:!0});var p=C(i);l=R(p,"H1",{class:!0});var m=C(l);c=k(m,A),m.forEach(_),u=D(p),f=R(p,"H2",{class:!0});var $=C(f);d=k($,P),$.forEach(_),p.forEach(_),o.forEach(_),h=D(n),_t(g.$$.fragment,n),n.forEach(_),this.h()},h(){j(e,"id","header-mobile--underlay"),j(e,"class","svelte-1ddqm64"),j(l,"class","title svelte-1ddqm64"),j(f,"class",p="subtitle subtitle-"+t[2].language+" svelte-1ddqm64"),j(i,"href","/"),j(a,"id","header-mobile--title-container"),j(a,"class","svelte-1ddqm64"),j(s,"id","header-mobile"),j(s,"class","svelte-1ddqm64")},m(n,o){y(n,e,o),y(n,r,o),y(n,s,o),b(s,a),b(a,i),b(i,l),b(l,c),b(i,u),b(i,f),b(f,d),b(s,h),Et(g,s,null),$=!0,v||(E=[L(e,"click",t[3]),L(i,"click",t[3])],v=!0)},p(t,e){(!$||4&e)&&A!==(A=t[4][t[2].language].title+"")&&q(c,A),(!$||4&e)&&P!==(P=t[4][t[2].language].subtitle+"")&&q(d,P),(!$||4&e&&p!==(p="subtitle subtitle-"+t[2].language+" svelte-1ddqm64"))&&j(f,"class",p);const n={};1&e&&(n.segment=t[0]),g.$set(n)},i(t){$||(tt(()=>{n||(n=mt(e,kt,{},!0)),n.run(1)}),dt(g.$$.fragment,t),tt(()=>{m||(m=mt(s,qt,{y:-100,duration:750},!0)),m.run(1)}),$=!0)},o(t){n||(n=mt(e,kt,{},!1)),n.run(0),pt(g.$$.fragment,t),m||(m=mt(s,qt,{y:-100,duration:750},!1)),m.run(0),$=!1},d(t){t&&_(e),t&&n&&n.end(),t&&_(r),t&&_(s),St(g),t&&m&&m.end(),v=!1,o(E)}}}function Jt(t){let e,n,r,s,o,a,i;return a=new Mt({props:{segment:t[0]}}),{c(){e=S("header"),n=S("h1"),r=S("a"),s=w("LA"),o=x(),yt(a.$$.fragment),this.h()},l(t){e=R(t,"HEADER",{id:!0,class:!0});var i=C(e);n=R(i,"H1",{class:!0});var l=C(n);r=R(l,"A",{href:!0,class:!0});var c=C(r);s=k(c,"LA"),c.forEach(_),l.forEach(_),o=D(i),_t(a.$$.fragment,i),i.forEach(_),this.h()},h(){j(r,"href","/"),j(r,"class","svelte-1ddqm64"),j(n,"class","logo svelte-1ddqm64"),j(e,"id","header-std"),j(e,"class","svelte-1ddqm64")},m(t,l){y(t,e,l),b(e,n),b(n,r),b(r,s),b(e,o),Et(a,e,null),i=!0},p(t,e){const n={};1&e&&(n.segment=t[0]),a.$set(n)},i(t){i||(dt(a.$$.fragment,t),i=!0)},o(t){pt(a.$$.fragment,t),i=!1},d(t){t&&_(e),St(a)}}}function Kt(t){let e,n,r,s,o=t[0]&&Vt(t),a=t[1]&&zt(t),i=t[0]&&Jt(t);return{c(){o&&o.c(),e=x(),a&&a.c(),n=x(),i&&i.c(),r=A()},l(t){o&&o.l(t),e=D(t),a&&a.l(t),n=D(t),i&&i.l(t),r=A()},m(t,l){o&&o.m(t,l),y(t,e,l),a&&a.m(t,l),y(t,n,l),i&&i.m(t,l),y(t,r,l),s=!0},p(t,[s]){t[0]?o?(o.p(t,s),1&s&&dt(o,1)):(o=Vt(t),o.c(),dt(o,1),o.m(e.parentNode,e)):o&&(ut(),pt(o,1,1,()=>{o=null}),ft()),t[1]?a?(a.p(t,s),2&s&&dt(a,1)):(a=zt(t),a.c(),dt(a,1),a.m(n.parentNode,n)):a&&(ut(),pt(a,1,1,()=>{a=null}),ft()),t[0]?i?(i.p(t,s),1&s&&dt(i,1)):(i=Jt(t),i.c(),dt(i,1),i.m(r.parentNode,r)):i&&(ut(),pt(i,1,1,()=>{i=null}),ft())},i(t){s||(dt(o),dt(a),dt(i),s=!0)},o(t){pt(o),pt(a),pt(i),s=!1},d(t){o&&o.d(t),t&&_(e),a&&a.d(t),t&&_(n),i&&i.d(t),t&&_(r)}}}function Wt(t,e,n){let r;l(t,Ot,t=>n(2,r=t));let{segment:s}=e,o=!1;return t.$set=t=>{"segment"in t&&n(0,s=t.segment)},[s,o,r,()=>{n(1,o=!o)},{de:{title:"Louise Augoyard",subtitle:"Harfenistin"},fr:{title:"Louise Augoyard",subtitle:"Harpiste"},en:{title:"Louise Augoyard",subtitle:"Harpist"}}]}class Gt extends At{constructor(t){super(),xt(this,t,Wt,Kt,i,{segment:0})}}function Yt(e){let n,r,s,a,i,l,c,u,f,d,p,h,g,m,$,v,E,A,P,O,N,T,H,U,F,I,B,M,V,z,J,K,W,G,Y,X,Q=e[2].languages[e[0].language]+"",Z=e[2].imprint[e[0].language]+"",tt=e[2].privacy[e[0].language]+"",et=e[2].pictures[e[0].language]+"",nt=e[2].design[e[0].language]+"",rt=e[2].fonts[e[0].language]+"";return{c(){n=S("footer"),r=S("h1"),s=S("a"),a=w("LA"),i=x(),l=S("p"),c=w(Q),u=w(":\r\n        "),f=S("button"),d=w("Deutsch"),p=w(" |\r\n\t\t"),h=S("button"),g=w("Français"),m=x(),$=S("p"),v=w("Copyright 2020 Louise Augoyard | "),E=S("a"),A=w(Z),P=w("\r\n\t                                                 | "),O=S("a"),N=w(tt),T=x(),H=S("p"),U=w(et),F=w(": "),I=S("a"),B=w("Jutta Jelinski"),M=w("\r\n\t\t| "),V=w(nt),z=w(": Florian Kretlow"),J=x(),K=S("p"),W=w(rt),G=w(": Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),this.h()},l(t){n=R(t,"FOOTER",{class:!0});var e=C(n);r=R(e,"H1",{class:!0});var o=C(r);s=R(o,"A",{href:!0,class:!0});var b=C(s);a=k(b,"LA"),b.forEach(_),o.forEach(_),i=D(e),l=R(e,"P",{id:!0,class:!0});var y=C(l);c=k(y,Q),u=k(y,":\r\n        "),f=R(y,"BUTTON",{class:!0});var S=C(f);d=k(S,"Deutsch"),S.forEach(_),p=k(y," |\r\n\t\t"),h=R(y,"BUTTON",{class:!0});var w=C(h);g=k(w,"Français"),w.forEach(_),y.forEach(_),m=D(e),$=R(e,"P",{id:!0,class:!0});var x=C($);v=k(x,"Copyright 2020 Louise Augoyard | "),E=R(x,"A",{href:!0,class:!0});var L=C(E);A=k(L,Z),L.forEach(_),P=k(x,"\r\n\t                                                 | "),O=R(x,"A",{href:!0,class:!0});var j=C(O);N=k(j,tt),j.forEach(_),x.forEach(_),T=D(e),H=R(e,"P",{class:!0});var q=C(H);U=k(q,et),F=k(q,": "),I=R(q,"A",{href:!0,target:!0,class:!0});var Y=C(I);B=k(Y,"Jutta Jelinski"),Y.forEach(_),M=k(q,"\r\n\t\t| "),V=k(q,nt),z=k(q,": Florian Kretlow"),q.forEach(_),J=D(e),K=R(e,"P",{class:!0});var X=C(K);W=k(X,rt),G=k(X,": Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)"),X.forEach(_),e.forEach(_),this.h()},h(){j(s,"href","/"),j(s,"class","svelte-ubp4t4"),j(r,"class","logo svelte-ubp4t4"),j(f,"class","inline svelte-ubp4t4"),j(h,"class","inline svelte-ubp4t4"),j(l,"id","languages"),j(l,"class","svelte-ubp4t4"),j(E,"href","impressum"),j(E,"class","svelte-ubp4t4"),j(O,"href","datenschutz"),j(O,"class","svelte-ubp4t4"),j($,"id","copyright"),j($,"class","svelte-ubp4t4"),j(I,"href","https://www.fotografie-jelinski.de/"),j(I,"target","_blank"),j(I,"class","svelte-ubp4t4"),j(H,"class","svelte-ubp4t4"),j(K,"class","svelte-ubp4t4"),j(n,"class","svelte-ubp4t4")},m(t,o){y(t,n,o),b(n,r),b(r,s),b(s,a),b(n,i),b(n,l),b(l,c),b(l,u),b(l,f),b(f,d),b(l,p),b(l,h),b(h,g),b(n,m),b(n,$),b($,v),b($,E),b(E,A),b($,P),b($,O),b(O,N),b(n,T),b(n,H),b(H,U),b(H,F),b(H,I),b(I,B),b(H,M),b(H,V),b(H,z),b(n,J),b(n,K),b(K,W),b(K,G),Y||(X=[L(f,"click",e[3]),L(h,"click",e[4])],Y=!0)},p(t,[e]){1&e&&Q!==(Q=t[2].languages[t[0].language]+"")&&q(c,Q),1&e&&Z!==(Z=t[2].imprint[t[0].language]+"")&&q(A,Z),1&e&&tt!==(tt=t[2].privacy[t[0].language]+"")&&q(N,tt),1&e&&et!==(et=t[2].pictures[t[0].language]+"")&&q(U,et),1&e&&nt!==(nt=t[2].design[t[0].language]+"")&&q(V,nt),1&e&&rt!==(rt=t[2].fonts[t[0].language]+"")&&q(W,rt)},i:t,o:t,d(t){t&&_(n),Y=!1,o(X)}}}function Xt(t,e,n){let r;l(t,Ot,t=>n(0,r=t));const s=K();return[r,s,{languages:{de:"Sprachen",fr:"Langues",en:"Languages"},imprint:{de:"Impressum",fr:"Mentions légales",en:"Imprint"},privacy:{de:"Datenschutzerklärung",fr:"Déclaration de protection des données",en:"Data protection declaration"},pictures:{de:"Fotos",fr:"Photos",en:"Pictures"},design:{de:"Design und Implementierung",fr:"Design et réalisation",en:"Design and implementation"},fonts:{de:"Verwendete Schriftarten",fr:"Polices utilisées",en:"Fonts"}},()=>{s("set-language",{language:"de"})},()=>{s("set-language",{language:"fr"})}]}class Qt extends At{constructor(t){super(),xt(this,t,Xt,Yt,i,{})}}function Zt(e){let n,r;return n=new Qt({}),n.$on("set-language",e[4]),{c(){yt(n.$$.fragment)},l(t){_t(n.$$.fragment,t)},m(t,e){Et(n,t,e),r=!0},p:t,i(t){r||(dt(n.$$.fragment,t),r=!0)},o(t){pt(n.$$.fragment,t),r=!1},d(t){St(n,t)}}}function te(t){let e,n,r,s,o;e=new Gt({props:{segment:t[0]}});const a=t[3].default,i=c(a,t,t[2],null);let l=t[0]&&Zt(t);return{c(){yt(e.$$.fragment),n=x(),i&&i.c(),r=x(),l&&l.c(),s=A()},l(t){_t(e.$$.fragment,t),n=D(t),i&&i.l(t),r=D(t),l&&l.l(t),s=A()},m(t,a){Et(e,t,a),y(t,n,a),i&&i.m(t,a),y(t,r,a),l&&l.m(t,a),y(t,s,a),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),i&&i.p&&4&n&&f(i,a,t,t[2],n,null,null),t[0]?l?(l.p(t,n),1&n&&dt(l,1)):(l=Zt(t),l.c(),dt(l,1),l.m(s.parentNode,s)):l&&(ut(),pt(l,1,1,()=>{l=null}),ft())},i(t){o||(dt(e.$$.fragment,t),dt(i,t),dt(l),o=!0)},o(t){pt(e.$$.fragment,t),pt(i,t),pt(l),o=!1},d(t){St(e,t),t&&_(n),i&&i.d(t),t&&_(r),l&&l.d(t),t&&_(s)}}}function ee(t,e,n){Ot.subscribe(()=>{});const r=t=>{let e=t.slice(0,2);["de","fr"].includes(e)||(e="de",console.log(`Language '${t}' is not supported. Using german instead.`)),Ot.update(t=>({...t,language:e}))};var s;s=()=>{r(navigator.language)},J().$$.on_mount.push(s);let{segment:o}=e,{$$slots:a={},$$scope:i}=e;return t.$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(2,i=t.$$scope)},[o,r,i,a,t=>{r(t.detail.language)}]}class ne extends At{constructor(t){super(),xt(this,t,ee,te,i,{segment:0})}}function re(t){let e,n,r;const s=t[1].default,o=c(s,t,t[0],null);return{c(){e=S("main"),o&&o.c(),this.h()},l(t){e=R(t,"MAIN",{class:!0});var n=C(e);o&&o.l(n),n.forEach(_),this.h()},h(){j(e,"class","svelte-1yxd4pf")},m(t,n){y(t,e,n),o&&o.m(e,null),r=!0},p(t,[e]){o&&o.p&&1&e&&f(o,s,t,t[0],e,null,null)},i(t){r||(dt(o,t),n||tt(()=>{n=gt(e,Dt,{y:-25,duration:1e3}),n.start()}),r=!0)},o(t){pt(o,t),r=!1},d(t){t&&_(e),o&&o.d(t)}}}function se(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class oe extends At{constructor(t){super(),xt(this,t,se,re,i,{})}}function ae(t){let e,n,r,s,o,a=t[1].message+"";return{c(){e=S("h1"),n=w(t[0]),r=x(),s=S("p"),o=w(a)},l(i){e=R(i,"H1",{});var l=C(e);n=k(l,t[0]),l.forEach(_),r=D(i),s=R(i,"P",{});var c=C(s);o=k(c,a),c.forEach(_)},m(t,a){y(t,e,a),b(e,n),y(t,r,a),y(t,s,a),b(s,o)},p(t,e){1&e&&q(n,t[0]),2&e&&a!==(a=t[1].message+"")&&q(o,a)},d(t){t&&_(e),t&&_(r),t&&_(s)}}}function ie(t){let e,n,r,s,o,a,i,l;return document.title=e="Louise Augoyard | "+t[0],r=new Gt({props:{segment:"error"}}),o=new oe({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),i=new Qt({}),i.$on("set-language",t[3]),{c(){n=x(),yt(r.$$.fragment),s=x(),yt(o.$$.fragment),a=x(),yt(i.$$.fragment)},l(t){H('[data-svelte="svelte-10rivc5"]',document.head).forEach(_),n=D(t),_t(r.$$.fragment,t),s=D(t),_t(o.$$.fragment,t),a=D(t),_t(i.$$.fragment,t)},m(t,e){y(t,n,e),Et(r,t,e),y(t,s,e),Et(o,t,e),y(t,a,e),Et(i,t,e),l=!0},p(t,[n]){(!l||1&n)&&e!==(e="Louise Augoyard | "+t[0])&&(document.title=e);const r={};67&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){l||(dt(r.$$.fragment,t),dt(o.$$.fragment,t),dt(i.$$.fragment,t),l=!0)},o(t){pt(r.$$.fragment,t),pt(o.$$.fragment,t),pt(i.$$.fragment,t),l=!1},d(t){t&&_(n),St(r,t),t&&_(s),St(o,t),t&&_(a),St(i,t)}}}function le(t,e,n){let{status:r}=e,{error:s}=e;Ot.subscribe(()=>{});const o=t=>{let e=t.slice(0,2);["de","fr"].includes(e)||(e="de",console.log(`Language '${t}' is not supported. Using german instead.`)),Ot.update(t=>({...t,language:e}))};return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,o,t=>{o(t.detail.language)}]}class ce extends At{constructor(t){super(),xt(this,t,le,ie,i,{status:0,error:1})}}function ue(t){let e,r,s;const o=[t[4].props];var a=t[4].component;function i(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(i())),{c(){e&&yt(e.$$.fragment),r=A()},l(t){e&&_t(e.$$.fragment,t),r=A()},m(t,n){e&&Et(e,t,n),y(t,r,n),s=!0},p(t,n){const s=16&n?vt(o,[bt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){ut();const t=e;pt(t.$$.fragment,1,0,()=>{St(t,1)}),ft()}a?(e=new a(i()),yt(e.$$.fragment),dt(e.$$.fragment,1),Et(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){s||(e&&dt(e.$$.fragment,t),s=!0)},o(t){e&&pt(e.$$.fragment,t),s=!1},d(t){t&&_(r),e&&St(e,t)}}}function fe(t){let e,n;return e=new ce({props:{error:t[0],status:t[1]}}),{c(){yt(e.$$.fragment)},l(t){_t(e.$$.fragment,t)},m(t,r){Et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(dt(e.$$.fragment,t),n=!0)},o(t){pt(e.$$.fragment,t),n=!1},d(t){St(e,t)}}}function de(t){let e,n,r,s;const o=[fe,ue],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=A()},l(t){n.l(t),r=A()},m(t,n){a[e].m(t,n),y(t,r,n),s=!0},p(t,s){let l=e;e=i(t),e===l?a[e].p(t,s):(ut(),pt(a[l],1,1,()=>{a[l]=null}),ft(),n=a[e],n||(n=a[e]=o[e](t),n.c()),dt(n,1),n.m(r.parentNode,r))},i(t){s||(dt(n),s=!0)},o(t){pt(n),s=!1},d(t){a[e].d(t),t&&_(r)}}}function pe(t){let e,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[de]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return e=new ne({props:o}),{c(){yt(e.$$.fragment)},l(t){_t(e.$$.fragment,t)},m(t,n){Et(e,t,n),r=!0},p(t,[n]){const r=12&n?vt(s,[4&n&&{segment:t[2][0]},8&n&&bt(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(dt(e.$$.fragment,t),r=!0)},o(t){pt(e.$$.fragment,t),r=!1},d(t){St(e,t)}}}function he(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:l=null}=e,{notify:c}=e;var u,f,d;return u=c,J().$$.after_update.push(u),f=jt,d=r,J().$$.context.set(f,d),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[s,o,a,i,l,r,c]}class ge extends At{constructor(t){super(),xt(this,t,he,pe,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const me=[/^\/kontakt\/api\/?$/],$e=[{js:()=>import("./index.e513c6dd.js"),css:[]},{js:()=>import("./datenschutz.8b8ef45d.js"),css:[]},{js:()=>import("./biographie.5cb48a9c.js"),css:[]},{js:()=>import("./unterricht.9f774398.js"),css:[]},{js:()=>import("./impressum.1303ae39.js"),css:[]},{js:()=>import("./index.a1e11467.js"),css:[]},{js:()=>import("./duo-esquisse.a03f1ed5.js"),css:[]},{js:()=>import("./trio-sophora.c03830e9.js"),css:[]},{js:()=>import("./de-musica.145d5e2e.js"),css:[]},{js:()=>import("./index.d84508ae.js"),css:[]},{js:()=>import("./termine.a77af6fd.js"),css:[]}],ve=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/datenschutz\/?$/,parts:[{i:1}]},{pattern:/^\/biographie\/?$/,parts:[{i:2}]},{pattern:/^\/unterricht\/?$/,parts:[{i:3}]},{pattern:/^\/impressum\/?$/,parts:[{i:4}]},{pattern:/^\/projekte\/?$/,parts:[{i:5}]},{pattern:/^\/projekte\/duo-esquisse\/?$/,parts:[null,{i:6}]},{pattern:/^\/projekte\/trio-sophora\/?$/,parts:[null,{i:7}]},{pattern:/^\/projekte\/de-musica\/?$/,parts:[null,{i:8}]},{pattern:/^\/kontakt\/?$/,parts:[{i:9}]},{pattern:/^\/termine\/?$/,parts:[{i:10}]}];const be="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,_e,Ee,Se=!1,we=[],xe="{}";const Ae={page:function(t){const e=Pt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:Pt(null),session:Pt(be&&be.session)};let Le,Pe;Ae.session.subscribe(async t=>{if(Le=t,!Se)return;Pe=!0;const e=Ne(new URL(location.href)),n=_e={},{redirect:r,props:s,branch:o}=await Fe(e);n===_e&&await Ue(r,o,s,e.page)});let je,Ce=null;let Re,ke=1;const De="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},qe={};function Oe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ne(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be.baseUrl))return null;let e=t.pathname.slice(be.baseUrl.length);if(""===e&&(e="/"),!me.some(t=>t.test(e)))for(let n=0;n<ve.length;n+=1){const r=ve[n],s=r.pattern.exec(e);if(s){const n=Oe(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:i}}}}function Te(){return{x:pageXOffset,y:pageYOffset}}async function He(t,e,n,r){if(e)Re=e;else{const t=Te();qe[Re]=t,e=Re=++ke,qe[Re]=n?t:{x:0,y:0}}Re=e,ye&&Ae.preloading.set(!0);const s=Ce&&Ce.href===t.href?Ce.promise:Fe(t);Ce=null;const o=_e={},{redirect:a,props:i,branch:l}=await s;if(o===_e&&(await Ue(a,l,i,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=qe[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}qe[Re]=t,t&&scrollTo(t.x,t.y)}}async function Ue(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ne(new URL(t,document.baseURI));return n?(De[e.replaceState?"replaceState":"pushState"]({id:Re},"",t),He(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ae.page.set(r),Ae.preloading.set(!1),ye)ye.$set(n);else{n.stores={page:{subscribe:Ae.page.subscribe},preloading:{subscribe:Ae.preloading.subscribe},session:Ae.session},n.level0={props:await Ee},n.notify=Ae.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Be(t.nextSibling);Be(t),Be(e)}ye=new ge({target:je,props:n,hydrate:!0})}we=e,xe=JSON.stringify(r.query),Se=!0,Pe=!1}async function Fe(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;Ee||(Ee=be.preloaded[0]||Ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Le));let l=1;try{const s=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==xe)return!0;const s=we[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,c,s)&&(u=!0),o.segments[l]=r[i+1],!e)return{segment:f};const d=l++;if(!Pe&&!u&&we[i]&&we[i].part===e.i)return we[i];u=!1;const{default:p,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ie);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}($e[e.i]);let g;return g=Se||!be.preloaded[i+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Le):{}:be.preloaded[i+1],o["level"+d]={component:p,props:g,segment:f,match:c,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}function Ie(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Be(t){t.parentNode.removeChild(t)}function Me(t){const e=Ne(new URL(t,document.baseURI));if(e)return Ce&&t===Ce.href||function(t,e){Ce={href:t,promise:e}}(t,Fe(e)),Ce.promise}let Ve;function ze(t){clearTimeout(Ve),Ve=setTimeout(()=>{Je(t)},20)}function Je(t){const e=We(t.target);e&&"prefetch"===e.rel&&Me(e.href)}function Ke(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=We(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ne(s);if(o){He(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),De.pushState({id:Re},"",s.href)}}function We(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ge(t){if(qe[Re]=Te(),t.state){const e=Ne(new URL(location.href));e?He(e,t.state.id):location.href=location.href}else ke=ke+1,function(t){Re=t}(ke),De.replaceState({id:Re},"",location.href)}var Ye;Ye={target:document.querySelector("body")},"scrollRestoration"in De&&(De.scrollRestoration="manual"),addEventListener("beforeunload",()=>{De.scrollRestoration="auto"}),addEventListener("load",()=>{De.scrollRestoration="manual"}),function(t){je=t}(Ye.target),addEventListener("click",Ke),addEventListener("popstate",Ge),addEventListener("touchstart",Je),addEventListener("mousemove",ze),Promise.resolve().then(()=>{const{hash:t,href:e}=location;De.replaceState({id:ke},"",e);const n=new URL(location.href);if(be.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:i}=be;Ee||(Ee=o&&o[0]),Ue(null,[],{error:i,status:a,session:s,level0:{props:Ee},level1:{props:{status:a,error:i},component:ce},segments:o},{host:e,path:n,query:Oe(r),params:{}})}();const r=Ne(n);return r?He(r,ke,!0,t):void 0});export{A,L as B,t as C,o as D,kt as E,E as F,$t as G,ut as H,ft as I,mt as J,O as K,P as L,oe as M,Mt as N,d as O,U as P,At as S,x as a,R as b,yt as c,_ as d,S as e,D as f,C as g,k as h,xt as i,_t as j,j as k,b as l,y as m,Et as n,q as o,dt as p,H as q,pt as r,i as s,w as t,St as u,l as v,tt as w,gt as x,Dt as y,Ot as z};