var B=Object.defineProperty;var R=(t,n,e)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(R(t,typeof n!="symbol"?n+"":n,e),e);function O(){}const rt=t=>t;function F(t,n){for(const e in n)t[e]=n[e];return t}function lt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function G(t){return t()}function ot(){return Object.create(null)}function z(t){t.forEach(G)}function ut(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function _t(t){return Object.keys(t).length===0}function I(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(I(n,e))}function ht(t,n,e,i){if(t){const s=L(t,n,e,i);return t[0](s)}}function L(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(n.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|s[o];return l}return n.dirty|s}return n.dirty}function pt(t,n,e,i,s,l){if(s){const c=L(n,e,i,l);t.p(c,s)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function bt(t){return t??""}function xt(t,n,e){return t.set(e),n}function Et(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let y=!1;function Nt(){y=!0}function Tt(){y=!1}function W(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(s>0&&n[e[s]].claim_order<=u?s+1:W(1,s,q=>n[e[q]].claim_order,u))-1;i[r]=e[a]+1;const A=a+1;e[A]=r,s=Math.max(A,s)}const l=[],c=[];let o=n.length-1;for(let r=e[s]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<l.length&&c[r].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[r],a)}}function K(t,n){t.appendChild(n)}function Q(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function wt(t){const n=w("style");return n.textContent="/* empty */",U(Q(t),n),n.sheet}function U(t,n){return K(t.head||t,n),n.sheet}function V(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function X(t,n,e){t.insertBefore(n,e||null)}function Y(t,n,e){y&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function w(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function At(){return v(" ")}function kt(){return v("")}function Dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Ht(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Lt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function St(t){return t.dataset.svelteH}function Ct(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,s=!1){S(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function j(t,n,e,i){return C(t,s=>s.nodeName===n,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(n))}function Pt(t,n,e){return j(t,n,e,w)}function qt(t,n,e){return j(t,n,e,M)}function Z(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function Bt(t){return Z(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return-1}function Rt(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new D(n);S(t);const s=t.splice(e,i-e+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(n,l)}function Ot(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ft(t,n){t.value=n??""}function Gt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function zt(t,n,e){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===n){s.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function It(t){const n=t.querySelector(":checked");return n&&n.__value}function Wt(t,n,e){t.classList.toggle(n,!!e)}function $(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Jt(t,n){const e=[];let i=0;for(const s of n.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(s)):l===`HEAD_${t}_START`&&(i+=1,e.push(s))}else i>0&&e.push(s);return e}class tt{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=M(e.nodeName):this.e=w(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)X(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class D extends tt{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)Y(this.t,this.n[i],e)}}function Kt(t,n){return new t(n)}let p;function b(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Qt(t){g().$$.on_mount.push(t)}function Ut(t){g().$$.after_update.push(t)}function Vt(t){g().$$.on_destroy.push(t)}function Xt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[n];if(s){const l=$(n,e,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Yt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],H=[];let d=[];const N=[],P=Promise.resolve();let T=!1;function nt(){T||(T=!0,P.then(it))}function Zt(){return nt(),P}function et(t){d.push(t)}function $t(t){N.push(t)}const x=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,b(n),st(n.$$)}}catch(n){throw h.length=0,_=0,n}for(b(null),h.length=0,_=0;H.length;)H.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;N.length;)N.pop()();T=!1,x.clear(),b(t)}function st(t){if(t.fragment!==null){t.update(),z(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(et)}}function tn(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{M as $,yt as A,mt as B,dt as C,Xt as D,Ft as E,Dt as F,vt as G,z as H,ft as I,Lt as J,Vt as K,$t as L,Yt as M,Wt as N,xt as O,Ct as P,Et as Q,Ht as R,F as S,gt as T,et as U,D as V,Rt as W,lt as X,g as Y,b as Z,it as _,At as a,qt as a0,zt as a1,It as a2,Q as a3,wt as a4,ut as a5,$ as a6,rt as a7,ot as a8,_t as a9,tn as aa,p as ab,G as ac,h as ad,nt as ae,Nt as af,Tt as ag,Ut as b,Bt as c,E as d,kt as e,w as f,Pt as g,jt as h,Y as i,Mt as j,Gt as k,v as l,Z as m,Ot as n,Qt as o,H as p,Kt as q,bt as r,at as s,Zt as t,V as u,O as v,ht as w,Jt as x,St as y,pt as z};