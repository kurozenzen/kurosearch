var R=Object.defineProperty;var O=(t,n,e)=>n in t?R(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(O(t,typeof n!="symbol"?n+"":n,e),e);function L(){}const lt=t=>t;function F(t,n){for(const e in n)t[e]=n[e];return t}function ot(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function G(t){return t()}function at(){return Object.create(null)}function I(t){t.forEach(G)}function z(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function _t(t){return Object.keys(t).length===0}function U(t,...n){if(t==null){for(const i of n)i(void 0);return L}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(U(n,e))}function ht(t,n,e,i){if(t){const s=M(t,n,e,i);return t[0](s)}}function M(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(n.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=n.dirty[o]|s[o];return l}return n.dirty|s}return n.dirty}function pt(t,n,e,i,s,l){if(s){const r=M(n,e,i,l);t.p(r,s)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function bt(t){return t??""}function xt(t,n,e){return t.set(e),n}function Et(t){return t&&z(t.destroy)?t.destroy:L}function Nt(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let y=!1;function Tt(){y=!0}function wt(){y=!1}function W(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&c.push(u)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let c=0;c<n.length;c++){const a=n[c].claim_order,u=(s>0&&n[e[s]].claim_order<=a?s+1:W(1,s,B=>n[e[B]].claim_order,a))-1;i[c]=e[u]+1;const A=u+1;e[A]=c,s=Math.max(A,s)}const l=[],r=[];let o=n.length-1;for(let c=e[s]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)r.push(n[o]);o--}for(;o>=0;o--)r.push(n[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(r[c],u)}}function K(t,n){t.appendChild(n)}function Q(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function vt(t){const n=w("style");return n.textContent="/* empty */",V(Q(t),n),n.sheet}function V(t,n){return K(t.head||t,n),n.sheet}function X(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Y(t,n,e){t.insertBefore(n,e||null)}function Z(t,n,e){y&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function w(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function kt(){return v(" ")}function Dt(){return v("")}function Ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Lt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Mt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function St(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function jt(t){return t.dataset.svelteH}function Ct(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,s=!1){j(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(n(o)){const c=e(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(n(o)){const c=e(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,n,e,i){return C(t,s=>s.nodeName===n,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];e[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(n))}function qt(t,n,e){return P(t,n,e,w)}function Bt(t,n,e){return P(t,n,e,S)}function $(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function Rt(t){return $(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return-1}function Ot(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new D(n);j(t);const s=t.splice(e,i-e+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(n,l)}function Ft(t,n){n=""+n,t.data!==n&&(t.data=n)}function Gt(t,n){t.value=n??""}function It(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function zt(t,n,e){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===n){s.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Ut(t){const n=t.querySelector(":checked");return n&&n.__value}function Wt(t,n,e){t.classList.toggle(n,!!e)}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Jt(t,n){const e=[];let i=0;for(const s of n.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(s)):l===`HEAD_${t}_START`&&(i+=1,e.push(s))}else i>0&&e.push(s);return e}class nt{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=S(e.nodeName):this.e=w(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Y(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class D extends nt{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],e)}}function Kt(t,n){return new t(n)}let p;function b(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Qt(t){g().$$.on_mount.push(t)}function Vt(t){g().$$.after_update.push(t)}function Xt(t){g().$$.on_destroy.push(t)}function Yt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[n];if(s){const l=tt(n,e,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Zt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],H=[];let d=[];const N=[],q=Promise.resolve();let T=!1;function et(){T||(T=!0,q.then(st))}function $t(){return et(),q}function it(t){d.push(t)}function tn(t){N.push(t)}const x=new Set;let _=0;function st(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,b(n),rt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(b(null),h.length=0,_=0;H.length;)H.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;N.length;)N.pop()();T=!1,x.clear(),b(t)}function rt(t){if(t.fragment!==null){t.update(),I(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(it)}}function nn(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{st as $,yt as A,mt as B,dt as C,tn as D,Yt as E,Gt as F,Ht as G,At as H,I,ft as J,Mt as K,Xt as L,Zt as M,Wt as N,xt as O,Ct as P,Nt as Q,Lt as R,F as S,gt as T,it as U,Et as V,D as W,Ot as X,ot as Y,g as Z,b as _,kt as a,S as a0,Bt as a1,zt as a2,Ut as a3,Q as a4,vt as a5,z as a6,tt as a7,lt as a8,at as a9,_t as aa,nn as ab,p as ac,G as ad,h as ae,et as af,Tt as ag,wt as ah,Vt as b,Rt as c,E as d,Dt as e,w as f,qt as g,Pt as h,Z as i,St as j,It as k,v as l,$ as m,Ft as n,Qt as o,H as p,Kt as q,bt as r,ut as s,$t as t,X as u,L as v,ht as w,Jt as x,jt as y,pt as z};
