var ec=Object.defineProperty,tc=Object.defineProperties;var nc=Object.getOwnPropertyDescriptors;var Wr=Object.getOwnPropertySymbols;var ic=Object.prototype.hasOwnProperty,rc=Object.prototype.propertyIsEnumerable;var qr=(t,e,n)=>e in t?ec(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Gr=(t,e)=>{for(var n in e||(e={}))ic.call(e,n)&&qr(t,n,e[n]);if(Wr)for(var n of Wr(e))rc.call(e,n)&&qr(t,n,e[n]);return t},Kr=(t,e)=>tc(t,nc(e));const sc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};sc();function C(){}function oc(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ro(t){return t()}function Xr(){return Object.create(null)}function Ee(t){t.forEach(ro)}function so(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let un;function Tn(t,e){return un||(un=document.createElement("a")),un.href=e,t===un.href}function ac(t){return Object.keys(t).length===0}function cc(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function je(t,e,n){t.$$.on_destroy.push(cc(e,n))}function Fe(t){return t==null?"":t}function Ci(t,e,n){return t.set(n),e}function p(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function $(){return J(" ")}function xn(){return J("")}function X(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lc(t){return Array.from(t.childNodes)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Jr(t,e){t.value=e==null?"":e}function st(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Ri(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function uc(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}let Pt;function be(t){Pt=t}function Hn(){if(!Pt)throw new Error("Function called outside component initialization");return Pt}function hc(t){Hn().$$.on_mount.push(t)}function dc(t){Hn().$$.on_destroy.push(t)}function mt(){const t=Hn();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=uc(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const kt=[],at=[],_n=[],Yr=[],fc=Promise.resolve();let Oi=!1;function pc(){Oi||(Oi=!0,fc.then(Yi))}function ft(t){_n.push(t)}const ai=new Set;let hn=0;function Yi(){const t=Pt;do{for(;hn<kt.length;){const e=kt[hn];hn++,be(e),gc(e.$$)}for(be(null),kt.length=0,hn=0;at.length;)at.pop()();for(let e=0;e<_n.length;e+=1){const n=_n[e];ai.has(n)||(ai.add(n),n())}_n.length=0}while(kt.length);for(;Yr.length;)Yr.pop()();Oi=!1,ai.clear(),be(t)}function gc(t){if(t.fragment!==null){t.update(),Ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}const yn=new Set;let Ve;function de(){Ve={r:0,c:[],p:Ve}}function fe(){Ve.r||Ee(Ve.c),Ve=Ve.p}function b(t,e){t&&t.i&&(yn.delete(t),t.i(e))}function S(t,e,n,i){if(t&&t.o){if(yn.has(t))return;yn.add(t),Ve.c.push(()=>{yn.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Qr(t,e){const n=e.token={};function i(r,s,o,c){if(e.token!==n)return;e.resolved=c;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=c);const l=r&&(e.current=r)(a);let u=!1;e.block&&(e.blocks?e.blocks.forEach((d,f)=>{f!==s&&d&&(de(),S(d,1,1,()=>{e.blocks[f]===d&&(e.blocks[f]=null)}),fe())}):e.block.d(1),l.c(),b(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&Yi()}if(oc(t)){const r=Hn();if(t.then(s=>{be(r),i(e.then,1,e.value,s),be(null)},s=>{if(be(r),i(e.catch,2,e.error,s),be(null),!e.hasCatch)throw s}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function mc(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function V(t){t&&t.c()}function H(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:c}=t.$$;r&&r.m(e,n),i||ft(()=>{const a=s.map(ro).filter(so);o?o.push(...a):Ee(a),t.$$.on_mount=[]}),c.forEach(ft)}function z(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vc(t,e){t.$$.dirty[0]===-1&&(kt.push(t),pc(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,i,r,s,o,c=[-1]){const a=Pt;be(t);const l=t.$$={fragment:null,ctx:null,props:s,update:C,not_equal:r,bound:Xr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Xr(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(d,f,...g)=>{const w=g.length?g[0]:f;return l.ctx&&r(l.ctx[d],l.ctx[d]=w)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](w),u&&vc(t,d)),f}):[],l.update(),u=!0,Ee(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const d=lc(e.target);l.fragment&&l.fragment.l(d),d.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),Yi()}be(a)}class K{$destroy(){z(this,1),this.$destroy=C}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ac(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it=[];function zn(t,e=C){let n;const i=new Set;function r(c){if(q(t,c)&&(t=c,n)){const a=!it.length;for(const l of i)l[1](),it.push(l,t);if(a){for(let l=0;l<it.length;l+=2)it[l][0](it[l+1]);it.length=0}}}function s(c){r(c(t))}function o(c,a=C){const l=[c,a];return i.add(l),i.size===1&&(n=e(r)||C),c(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}const ct=zn("search");function _c(t){let e,n,i,r,s,o;return{c(){e=nt("svg"),n=nt("g"),i=nt("path"),r=nt("defs"),s=nt("clipPath"),o=nt("path"),h(i,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),h(i,"fill","currentcolor"),h(n,"clip-path","url(#prefix__clip0)"),h(o,"fill","currentcolor"),h(o,"d","M0 0h71v55H0z"),h(s,"id","prefix__clip0"),h(e,"width","16"),h(e,"height","16"),h(e,"viewBox","0 0 71 55"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(c,a){R(c,e,a),p(e,n),p(n,i),p(e,r),p(r,s),p(s,o)},p:C,i:C,o:C,d(c){c&&A(e)}}}class yc extends K{constructor(e){super(),G(this,e,null,_c,q,{})}}function wc(t){let e,n,i,r,s,o,c,a,l,u,d,f,g,w,T,O,k,m;return a=new yc({}),{c(){e=v("header"),n=v("div"),i=v("a"),i.innerHTML='<i class="codicon codicon-github"></i>',r=$(),s=v("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',o=$(),c=v("a"),V(a.$$.fragment),l=$(),u=v("nav"),d=v("button"),d.innerHTML='<i class="codicon codicon-search"></i>',f=$(),g=v("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',w=$(),T=v("button"),T.innerHTML='<i class="codicon codicon-account"></i>',h(i,"title","Source Code"),h(i,"href","https://github.com/kurozenzen/kurosearch"),h(i,"target","_newtab"),h(i,"class","svelte-14qdyaf"),h(s,"title","Sponsor"),h(s,"href","https://ko-fi.com/kurozenzen"),h(s,"target","_newtab"),h(s,"class","svelte-14qdyaf"),h(c,"title","Discord Server"),h(c,"href","https://discord.gg/yyJFG5PVBZ"),h(c,"target","_newtab"),h(c,"class","svelte-14qdyaf"),h(n,"class","svelte-14qdyaf"),h(d,"title","Search"),h(d,"class","svelte-14qdyaf"),h(g,"title","Settings"),h(g,"class","svelte-14qdyaf"),h(T,"title","Account"),h(T,"class","svelte-14qdyaf"),h(u,"class","svelte-14qdyaf"),h(e,"role","navigation"),h(e,"class","svelte-14qdyaf")},m(y,M){R(y,e,M),p(e,n),p(n,i),p(n,r),p(n,s),p(n,o),p(n,c),H(a,c,null),p(e,l),p(e,u),p(u,d),p(u,f),p(u,g),p(u,w),p(u,T),O=!0,k||(m=[X(d,"click",t[0]("search")),X(g,"click",t[0]("settings")),X(T,"click",t[0]("account"))],k=!0)},p:C,i(y){O||(b(a.$$.fragment,y),O=!0)},o(y){S(a.$$.fragment,y),O=!1},d(y){y&&A(e),z(a),k=!1,Ee(m)}}}function Ic(t,e,n){let i;return je(t,ct,s=>n(1,i=s)),[s=>()=>{Ci(ct,i=s,i)}]}class Ec extends K{constructor(e){super(),G(this,e,Ic,wc,q,{})}}const bc=new IntersectionObserver(t=>{for(const e of t){if(e.target.src===void 0){console.warn("PostObserver is observing an invalid element",e.target);continue}e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):""}},{rootMargin:"1250px"}),Be=t=>t/1e6>=1?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString();function rt(t,e){const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`}function Zr(t){const e=new Date(t),n=new Date,i=n.getFullYear()-e.getFullYear();if(i)return rt(i,"year");const r=n.getMonth()-e.getMonth();if(r)return rt(r,"month");const s=(n.getTime()-e.getTime())/6e4;if(s===0)return"just now";if(s<60)return rt(s,"minute");const o=s/60;if(o<24)return rt(o,"hour");const c=o/24;if(c<7)return rt(c,"day");const a=c/7;return a<5?rt(a,"week"):"rip"}function pt(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Tc=Object.freeze(["+","-","~"]),Qi=t=>Tc.includes(t),kc=Object.freeze({"+":"","-":"-","~":""}),Sc=t=>{if(!Qi(t))throw TypeError("Invalid modifier passed to serializeModifier");return kc[t]},Ac=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),oo=t=>Ac.includes(t),Zi=t=>typeof t=="string"&&t!=="",ao=t=>typeof t=="number"&&t>=0;class co{constructor(e,n){if(!Qi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Zi(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${Sc(this.modifier)}${this.name}`}}class lo{constructor(e,n,i,r){if(!Qi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Zi(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!ao(i))throw TypeError("Invalid count passed to ActiveTag constructor");if(!oo(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=i,this.type=r,Object.freeze(this)}toSearchableTag(){return new co(this.modifier,this.name)}}function Cc(){const t=[],{subscribe:e,update:n}=zn(t);return{subscribe:e,addOrReplace:i=>n(r=>{const s=r.findIndex(o=>o.name===i.name);return s===-1?r.push(i):r[s]=i,r}),addByName:i=>n(r=>(r.push(new lo("+",i,0,"general")),r)),removeByIndex:i=>n(r=>(r.splice(i,1),r))}}var lt=Cc();function Rc(t){let e,n=pt(t[0])+"",i,r,s;return{c(){e=v("li"),i=J(n),h(e,"tabindex","0"),h(e,"title","Click to add tag"),h(e,"class","svelte-1r7mf3i"),pe(e,"active",t[2])},m(o,c){R(o,e,c),p(e,i),r||(s=X(e,"click",t[4]),r=!0)},p(o,[c]){c&1&&n!==(n=pt(o[0])+"")&&le(i,n),c&4&&pe(e,"active",o[2])},i:C,o:C,d(o){o&&A(e),r=!1,s()}}}function Oc(t,e,n){let i,r,s;je(t,lt,a=>n(3,s=a));let{name:o}=e;const c=()=>r?lt.removeByIndex(i):lt.addByName(o);return t.$$set=a=>{"name"in a&&n(0,o=a.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,i=s.findIndex(a=>a.name===o)),t.$$.dirty&2&&n(2,r=i>=0)},[o,i,r,s,c]}class Dc extends K{constructor(e){super(),G(this,e,Oc,Rc,q,{name:0})}}const uo=(t,e)=>{if(!ho(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!Pc(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},ho=t=>{try{return new URL(t),!0}catch{return!1}},Pc=t=>t===null||t instanceof AbortController;function Nc(t){let e,n;return{c(){e=v("span"),n=J(t[0])},m(i,r){R(i,e,r),p(e,n)},p(i,r){r&1&&le(n,i[0])},d(i){i&&A(e)}}}function Lc(t){let e,n=t[1].hostname+"",i,r;return{c(){e=v("a"),i=J(n),h(e,"href",r=t[1].toString()),h(e,"target","_newtab"),h(e,"class","svelte-1qmyyls")},m(s,o){R(s,e,o),p(e,i)},p(s,o){o&2&&n!==(n=s[1].hostname+"")&&le(i,n),o&2&&r!==(r=s[1].toString())&&h(e,"href",r)},d(s){s&&A(e)}}}function $c(t){let e,n,i;function r(c,a){return c[1]?Lc:Nc}let s=r(t),o=s(t);return{c(){e=v("i"),n=$(),o.c(),i=xn(),h(e,"class","codicon codicon-link")},m(c,a){R(c,e,a),R(c,n,a),o.m(c,a),R(c,i,a)},p(c,[a]){s===(s=r(c))&&o?o.p(c,a):(o.d(1),o=s(c),o&&(o.c(),o.m(i.parentNode,i)))},i:C,o:C,d(c){c&&A(e),c&&A(n),o.d(c),c&&A(i)}}}function Mc(t,e,n){let i,{source:r}=e;return t.$$set=s=>{"source"in s&&n(0,r=s.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,i=ho(r)?new URL(r):null)},[r,i]}class Uc extends K{constructor(e){super(),G(this,e,Mc,$c,q,{source:0})}}function es(t,e,n){const i=t.slice();return i[1]=e[n],i}function ts(t){let e,n,i;return n=new Uc({props:{source:t[0].source}}),{c(){e=v("div"),V(n.$$.fragment),h(e,"class","svelte-5x11c6")},m(r,s){R(r,e,s),H(n,e,null),i=!0},p(r,s){const o={};s&1&&(o.source=r[0].source),n.$set(o)},i(r){i||(b(n.$$.fragment,r),i=!0)},o(r){S(n.$$.fragment,r),i=!1},d(r){r&&A(e),z(n)}}}function ns(t){let e,n;return e=new Dc({props:{name:t[1]}}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p(i,r){const s={};r&1&&(s.name=i[1]),e.$set(s)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function jc(t){let e,n,i,r,s,o=Zr(t[0].created_at)+"",c,a,l,u,d,f,g=Be(t[0].score)+"",w,T,O,k,m,y=t[0].source&&ts(t),M=t[0].tags,I=[];for(let P=0;P<M.length;P+=1)I[P]=ns(es(t,M,P));const D=P=>S(I[P],1,1,()=>{I[P]=null});return{c(){e=v("div"),n=v("div"),i=v("i"),r=$(),s=v("span"),c=J(o),a=$(),l=v("div"),u=v("i"),d=$(),f=v("span"),w=J(g),T=$(),y&&y.c(),O=$(),k=v("ul");for(let P=0;P<I.length;P+=1)I[P].c();h(i,"class","codicon codicon-calendar"),h(s,"class","svelte-5x11c6"),h(n,"class","svelte-5x11c6"),h(u,"class","codicon codicon-heart"),h(f,"class","svelte-5x11c6"),h(l,"class","svelte-5x11c6"),h(e,"class","summary svelte-5x11c6"),h(k,"class","svelte-5x11c6")},m(P,x){R(P,e,x),p(e,n),p(n,i),p(n,r),p(n,s),p(s,c),p(e,a),p(e,l),p(l,u),p(l,d),p(l,f),p(f,w),p(e,T),y&&y.m(e,null),R(P,O,x),R(P,k,x);for(let F=0;F<I.length;F+=1)I[F].m(k,null);m=!0},p(P,[x]){if((!m||x&1)&&o!==(o=Zr(P[0].created_at)+"")&&le(c,o),(!m||x&1)&&g!==(g=Be(P[0].score)+"")&&le(w,g),P[0].source?y?(y.p(P,x),x&1&&b(y,1)):(y=ts(P),y.c(),b(y,1),y.m(e,null)):y&&(de(),S(y,1,1,()=>{y=null}),fe()),x&1){M=P[0].tags;let F;for(F=0;F<M.length;F+=1){const Oe=es(P,M,F);I[F]?(I[F].p(Oe,x),b(I[F],1)):(I[F]=ns(Oe),I[F].c(),b(I[F],1),I[F].m(k,null))}for(de(),F=M.length;F<I.length;F+=1)D(F);fe()}},i(P){if(!m){b(y);for(let x=0;x<M.length;x+=1)b(I[x]);m=!0}},o(P){S(y),I=I.filter(Boolean);for(let x=0;x<I.length;x+=1)S(I[x]);m=!1},d(P){P&&A(e),y&&y.d(),P&&A(O),P&&A(k),Vt(I,P)}}}function Fc(t,e,n){let{post:i}=e;return t.$$set=r=>{"post"in r&&n(0,i=r.post)},[i]}class Bc extends K{constructor(e){super(),G(this,e,Fc,jc,q,{post:0})}}function xc(t){let e,n,i,r,s,o;return{c(){e=v("img"),h(e,"loading","lazy"),h(e,"data-src",n=t[0].sample_url),h(e,"alt",i=t[0].id.toString()),h(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),h(e,"width",s=t[0].width),h(e,"height",o=t[0].height),h(e,"class","svelte-1xnjrgd")},m(c,a){R(c,e,a),t[6](e)},p(c,a){a&1&&n!==(n=c[0].sample_url)&&h(e,"data-src",n),a&1&&i!==(i=c[0].id.toString())&&h(e,"alt",i),a&1&&r!==(r=`aspect-ratio: ${c[0].width} / ${c[0].height}`)&&h(e,"style",r),a&1&&s!==(s=c[0].width)&&h(e,"width",s),a&1&&o!==(o=c[0].height)&&h(e,"height",o)},d(c){c&&A(e),t[6](null)}}}function Hc(t){let e,n,i,r,s,o;return{c(){e=v("video"),h(e,"preload","metadata"),h(e,"loading","lazy"),h(e,"data-src",n=t[0].sample_url),h(e,"alt",i=t[0].id.toString()),h(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),h(e,"width",s=t[0].width),h(e,"height",o=t[0].height),e.controls=!0,h(e,"class","svelte-1xnjrgd")},m(c,a){R(c,e,a),t[5](e)},p(c,a){a&1&&n!==(n=c[0].sample_url)&&h(e,"data-src",n),a&1&&i!==(i=c[0].id.toString())&&h(e,"alt",i),a&1&&r!==(r=`aspect-ratio: ${c[0].width} / ${c[0].height}`)&&h(e,"style",r),a&1&&s!==(s=c[0].width)&&h(e,"width",s),a&1&&o!==(o=c[0].height)&&h(e,"height",o)},d(c){c&&A(e),t[5](null)}}}function zc(t){let e,n,i,r,s,o;return{c(){e=v("img"),h(e,"loading","lazy"),h(e,"data-src",n=t[0].sample_url),h(e,"alt",i=t[0].id.toString()),h(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),h(e,"width",s=t[0].width),h(e,"height",o=t[0].height),h(e,"class","svelte-1xnjrgd")},m(c,a){R(c,e,a),t[4](e)},p(c,a){a&1&&n!==(n=c[0].sample_url)&&h(e,"data-src",n),a&1&&i!==(i=c[0].id.toString())&&h(e,"alt",i),a&1&&r!==(r=`aspect-ratio: ${c[0].width} / ${c[0].height}`)&&h(e,"style",r),a&1&&s!==(s=c[0].width)&&h(e,"width",s),a&1&&o!==(o=c[0].height)&&h(e,"height",o)},d(c){c&&A(e),t[4](null)}}}function is(t){let e,n;return e=new Bc({props:{post:t[0]}}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p(i,r){const s={};r&1&&(s.post=i[0]),e.$set(s)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function Vc(t){let e,n,i,r,s,o;function c(d,f){return d[0].type==="image"?zc:d[0].type==="video"?Hc:xc}let a=c(t),l=a(t),u=t[2]&&is(t);return{c(){e=v("div"),n=v("div"),l.c(),i=$(),u&&u.c(),h(n,"class","content"),h(e,"class","post svelte-1xnjrgd"),h(e,"tabindex","0")},m(d,f){R(d,e,f),p(e,n),l.m(n,null),p(e,i),u&&u.m(e,null),r=!0,s||(o=X(n,"click",t[3]),s=!0)},p(d,[f]){a===(a=c(d))&&l?l.p(d,f):(l.d(1),l=a(d),l&&(l.c(),l.m(n,null))),d[2]?u?(u.p(d,f),f&4&&b(u,1)):(u=is(d),u.c(),b(u,1),u.m(e,null)):u&&(de(),S(u,1,1,()=>{u=null}),fe())},i(d){r||(b(u),r=!0)},o(d){S(u),r=!1},d(d){d&&A(e),l.d(),u&&u.d(),s=!1,o()}}}function Wc(t,e,n){let{post:i}=e,r,s=!1;const o=()=>{n(2,s=!s)};function c(u){at[u?"unshift":"push"](()=>{r=u,n(1,r)})}function a(u){at[u?"unshift":"push"](()=>{r=u,n(1,r)})}function l(u){at[u?"unshift":"push"](()=>{r=u,n(1,r)})}return t.$$set=u=>{"post"in u&&n(0,i=u.post)},t.$$.update=()=>{t.$$.dirty&2&&r&&bc.observe(r)},[i,r,s,o,c,a,l]}class qc extends K{constructor(e){super(),G(this,e,Wc,Vc,q,{post:0})}}function rs(t,e,n){const i=t.slice();return i[1]=e[n],i}function ss(t){let e,n;return e=new qc({props:{post:t[1]}}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p(i,r){const s={};r&1&&(s.post=i[1]),e.$set(s)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function Gc(t){let e,n,i=t[0],r=[];for(let o=0;o<i.length;o+=1)r[o]=ss(rs(t,i,o));const s=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){e=v("ol");for(let o=0;o<r.length;o+=1)r[o].c();h(e,"class","page svelte-5hdzo")},m(o,c){R(o,e,c);for(let a=0;a<r.length;a+=1)r[a].m(e,null);n=!0},p(o,[c]){if(c&1){i=o[0];let a;for(a=0;a<i.length;a+=1){const l=rs(o,i,a);r[a]?(r[a].p(l,c),b(r[a],1)):(r[a]=ss(l),r[a].c(),b(r[a],1),r[a].m(e,null))}for(de(),a=i.length;a<r.length;a+=1)s(a);fe()}},i(o){if(!n){for(let c=0;c<i.length;c+=1)b(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)S(r[c]);n=!1},d(o){o&&A(e),Vt(r,o)}}}function Kc(t,e,n){let{posts:i}=e;return t.$$set=r=>{"posts"in r&&n(0,i=r.posts)},[i]}class Xc extends K{constructor(e){super(),G(this,e,Kc,Gc,q,{posts:0})}}function Jc(t){let e,n,i,r,s,o,c;return{c(){e=v("button"),n=v("i"),r=$(),s=J(t[1]),h(n,"class",i=`codicon codicon-${t[0]}`),h(e,"title",t[2]),h(e,"class","svelte-4ivxow")},m(a,l){R(a,e,l),p(e,n),p(e,r),p(e,s),o||(c=X(e,"click",t[4]),o=!0)},p(a,[l]){l&1&&i!==(i=`codicon codicon-${a[0]}`)&&h(n,"class",i),l&2&&le(s,a[1]),l&4&&h(e,"title",a[2])},i:C,o:C,d(a){a&&A(e),o=!1,c()}}}function Yc(t,e,n){let{icon:i}=e,{text:r}=e,{title:s}=e;const o=mt(),c=()=>o("click");return t.$$set=a=>{"icon"in a&&n(0,i=a.icon),"text"in a&&n(1,r=a.text),"title"in a&&n(2,s=a.title)},[i,r,s,o,c]}class er extends K{constructor(e){super(),G(this,e,Yc,Jc,q,{icon:0,text:1,title:2})}}function kn(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}function Qc(t){let e,n,i,r;return{c(){e=v("i"),h(e,"title",t[0]),h(e,"class",n=Fe(`codicon codicon-${t[1]}`)+" svelte-182enqy"),h(e,"tabindex","0"),pe(e,"active",t[2])},m(s,o){R(s,e,o),i||(r=[X(e,"click",t[3]),X(e,"keydown",kn(t[3]))],i=!0)},p(s,[o]){o&1&&h(e,"title",s[0]),o&2&&n!==(n=Fe(`codicon codicon-${s[1]}`)+" svelte-182enqy")&&h(e,"class",n),o&6&&pe(e,"active",s[2])},i:C,o:C,d(s){s&&A(e),i=!1,Ee(r)}}}function Zc(t,e,n){let{title:i=void 0}=e,{icon:r}=e,{active:s}=e;const o=mt(),c=()=>o("click");return t.$$set=a=>{"title"in a&&n(0,i=a.title),"icon"in a&&n(1,r=a.icon),"active"in a&&n(2,s=a.active)},[i,r,s,c]}class el extends K{constructor(e){super(),G(this,e,Zc,Qc,q,{title:0,icon:1,active:2})}}function tl(t){let e,n;return{c(){e=v("i"),h(e,"class",n=`codicon codicon-${t[1][t[0]]}`)},m(i,r){R(i,e,r)},p(i,[r]){r&1&&n!==(n=`codicon codicon-${i[1][i[0]]}`)&&h(e,"class",n)},i:C,o:C,d(i){i&&A(e)}}}function nl(t,e,n){let{type:i}=e;const r={artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"};return t.$$set=s=>{"type"in s&&n(0,i=s.type)},[i,r]}class fo extends K{constructor(e){super(),G(this,e,nl,tl,q,{type:0})}}const Di=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),os=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),ci=Object.freeze(Object.keys(Di)),as=Object.freeze({"+":"include","-":"exclude","~":"optional"});function il(t){let e,n,i,r,s;return{c(){e=v("i"),h(e,"tabindex","0"),h(e,"class",n=Fe(`codicon codicon-${Di[t[0]]}`)+" svelte-htt49j"),h(e,"title",i=os[t[0]])},m(o,c){R(o,e,c),r||(s=[X(e,"click",t[1]),X(e,"keydown",kn(t[1]))],r=!0)},p(o,[c]){c&1&&n!==(n=Fe(`codicon codicon-${Di[o[0]]}`)+" svelte-htt49j")&&h(e,"class",n),c&1&&i!==(i=os[o[0]])&&h(e,"title",i)},i:C,o:C,d(o){o&&A(e),r=!1,Ee(s)}}}function rl(t,e,n){let i="+";const r=mt();function s(){const o=(ci.indexOf(i)+1)%ci.length;n(0,i=ci[o]),r("change",i)}return[i,s]}class sl extends K{constructor(e){super(),G(this,e,rl,il,q,{})}}function ol(t){let e;return{c(){e=v("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,i){R(n,e,i)},p:C,i:C,o:C,d(n){n&&A(e)}}}class al extends K{constructor(e){super(),G(this,e,null,ol,q,{})}}class cl{constructor(e,n,i){if(!Zi(e))throw TypeError("Invalid name passed to Tag constructor");if(!ao(n))throw TypeError("Invalid count passed to Tag constructor");if(!oo(i))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=i,Object.freeze(this)}toActiveTag(e){return new lo(e,this.name,this.count,this.type)}}let ll=null;const ul=async(t,e)=>{const n=e?`*${t}*`:t,i=await uo(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,ll);if(i.ok){const r=await i.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(o=>new cl(o.name,o.count,hl(o.types)))}else throw r.message?new Error(r.message):new Error("Cannot display tag suggestions")}else throw new Error("Failed to get tag suggestions")};function hl(t){for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"}function dl(t){let e,n,i,r=pt(t[0].name)+"",s,o,c=Be(t[0].count)+"",a,l,u,d,f,g;return n=new fo({props:{type:t[0].type}}),{c(){e=v("li"),V(n.$$.fragment),i=$(),s=J(r),o=J(`
  (`),a=J(c),l=J(")"),h(e,"class",u=Fe(as[t[0].modifier])+" svelte-vwi8d8"),h(e,"tabindex","0"),h(e,"title","Click to remove tag"),pe(e,"no-icon",t[0].type==="general")},m(w,T){R(w,e,T),H(n,e,null),p(e,i),p(e,s),p(e,o),p(e,a),p(e,l),d=!0,f||(g=X(e,"click",t[2]),f=!0)},p(w,[T]){const O={};T&1&&(O.type=w[0].type),n.$set(O),(!d||T&1)&&r!==(r=pt(w[0].name)+"")&&le(s,r),(!d||T&1)&&c!==(c=Be(w[0].count)+"")&&le(a,c),(!d||T&1&&u!==(u=Fe(as[w[0].modifier])+" svelte-vwi8d8"))&&h(e,"class",u),T&1&&pe(e,"no-icon",w[0].type==="general")},i(w){d||(b(n.$$.fragment,w),d=!0)},o(w){S(n.$$.fragment,w),d=!1},d(w){w&&A(e),z(n),f=!1,g()}}}function fl(t,e,n){let{tag:i}=e;const r=mt(),s=()=>r("click");return t.$$set=o=>{"tag"in o&&n(0,i=o.tag)},[i,r,s]}class pl extends K{constructor(e){super(),G(this,e,fl,dl,q,{tag:0})}}function cs(t,e,n){const i=t.slice();return i[19]=e[n],i}function gl(t){let e,n,i,r,s=t[22].message+"",o;return{c(){e=v("div"),n=v("i"),i=$(),r=v("span"),o=J(s),h(n,"class",Fe("codicon codicon-error")+" svelte-2611ev"),h(e,"class","error-container svelte-2611ev")},m(c,a){R(c,e,a),p(e,n),p(e,i),p(e,r),p(r,o)},p(c,a){a&8&&s!==(s=c[22].message+"")&&le(o,s)},i:C,o:C,d(c){c&&A(e)}}}function ml(t){let e,n,i=t[5],r=[];for(let o=0;o<i.length;o+=1)r[o]=ls(cs(t,i,o));const s=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=xn()},m(o,c){for(let a=0;a<r.length;a+=1)r[a].m(o,c);R(o,e,c),n=!0},p(o,c){if(c&309){i=o[5];let a;for(a=0;a<i.length;a+=1){const l=cs(o,i,a);r[a]?(r[a].p(l,c),b(r[a],1)):(r[a]=ls(l),r[a].c(),b(r[a],1),r[a].m(e.parentNode,e))}for(de(),a=i.length;a<r.length;a+=1)s(a);fe()}},i(o){if(!n){for(let c=0;c<i.length;c+=1)b(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)S(r[c]);n=!1},d(o){Vt(r,o),o&&A(e)}}}function ls(t){let e,n,i,r,s=pt(t[19].name)+"",o,c,a,l,u=Be(t[19].count)+"",d,f,g,w,T;n=new fo({props:{type:t[19].type}});function O(){return t[16](t[19])}return{c(){e=v("li"),V(n.$$.fragment),i=$(),r=v("span"),o=J(s),a=$(),l=v("span"),d=J(u),f=$(),h(r,"title",c=t[19].name),h(r,"class","tag-name svelte-2611ev"),h(l,"class","tag-count"),h(e,"tabindex","0"),h(e,"class","svelte-2611ev")},m(k,m){R(k,e,m),H(n,e,null),p(e,i),p(e,r),p(r,o),p(e,a),p(e,l),p(l,d),p(e,f),g=!0,w||(T=X(e,"click",O),w=!0)},p(k,m){t=k;const y={};m&32&&(y.type=t[19].type),n.$set(y),(!g||m&32)&&s!==(s=pt(t[19].name)+"")&&le(o,s),(!g||m&32&&c!==(c=t[19].name))&&h(r,"title",c),(!g||m&32)&&u!==(u=Be(t[19].count)+"")&&le(d,u)},i(k){g||(b(n.$$.fragment,k),g=!0)},o(k){S(n.$$.fragment,k),g=!1},d(k){k&&A(e),z(n),w=!1,T()}}}function vl(t){let e,n,i;return n=new al({}),{c(){e=v("div"),V(n.$$.fragment),h(e,"class","hint-container svelte-2611ev")},m(r,s){R(r,e,s),H(n,e,null),i=!0},p:C,i(r){i||(b(n.$$.fragment,r),i=!0)},o(r){S(n.$$.fragment,r),i=!1},d(r){r&&A(e),z(n)}}}function _l(t){let e,n,i,r,s,o,c,a,l,u,d,f,g,w,T,O;o=new sl({}),o.$on("change",t[12]),a=new el({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),a.$on("click",t[13]);let k={ctx:t,current:null,token:null,hasCatch:!0,pending:vl,then:ml,catch:gl,error:22,blocks:[,,,]};return Qr(g=t[3],k),{c(){e=v("div"),n=v("i"),i=$(),r=v("input"),s=$(),V(o.$$.fragment),c=$(),V(a.$$.fragment),l=$(),u=v("i"),d=$(),f=v("ol"),k.block.c(),h(n,"class","codicon codicon-search"),h(r,"type","text"),h(r,"aria-label","Search for tags."),h(r,"class","svelte-2611ev"),h(u,"tabindex","0"),h(u,"class",Fe("codicon codicon-question")+" svelte-2611ev"),h(f,"class","svelte-2611ev"),pe(f,"open",t[6]),h(e,"class","searchbar svelte-2611ev"),pe(e,"open",t[6])},m(m,y){R(m,e,y),p(e,n),p(e,i),p(e,r),Jr(r,t[0]),p(e,s),H(o,e,null),p(e,c),H(a,e,null),p(e,l),p(e,u),p(e,d),p(e,f),k.block.m(f,k.anchor=null),k.mount=()=>f,k.anchor=null,w=!0,T||(O=[X(r,"input",t[9]),X(r,"blur",t[10]),X(r,"focus",t[11]),X(u,"click",t[14]),X(u,"keydown",function(){so(kn(t[15]))&&kn(t[15]).apply(this,arguments)}),X(e,"blur",t[17])],T=!0)},p(m,[y]){t=m,y&1&&r.value!==t[0]&&Jr(r,t[0]);const M={};y&2&&(M.active=!t[1]),a.$set(M),k.ctx=t,y&8&&g!==(g=t[3])&&Qr(g,k)||mc(k,t,y),y&64&&pe(f,"open",t[6]),y&64&&pe(e,"open",t[6])},i(m){w||(b(o.$$.fragment,m),b(a.$$.fragment,m),b(k.block),w=!0)},o(m){S(o.$$.fragment,m),S(a.$$.fragment,m);for(let y=0;y<3;y+=1){const M=k.blocks[y];S(M)}w=!1},d(m){m&&A(e),z(o),z(a),k.block.d(),k.token=null,k=null,T=!1,Ee(O)}}}function yl(t,e,n){let i,r;je(t,ct,D=>n(7,r=D));const s=mt();let o,c="",a=!0,l="+",u=!1,d=[];async function f(D,P){n(2,u=!0),n(5,d=await ul(P,D))}function g(){c=this.value,n(0,c)}const w=D=>{(!D.relatedTarget||!D.target.parentNode.contains(D.relatedTarget))&&n(2,u=!1)},T=()=>{n(2,u=!0)},O=D=>{n(4,l=D.detail)},k=()=>{n(1,a=!a)},m=()=>{Ci(ct,r="help",r)},y=()=>{Ci(ct,r="help",r)},M=D=>{s("pick",D.toActiveTag(l)),n(0,c=""),n(5,d=[]),n(2,u=!1)},I=()=>{n(2,u=!1)};return t.$$.update=()=>{t.$$.dirty&4&&n(6,i=u),t.$$.dirty&3&&(n(5,d=[]),c!==""&&n(3,o=f(a,c)))},[c,a,u,o,l,d,i,r,s,g,w,T,O,k,m,y,M,I]}class wl extends K{constructor(e){super(),G(this,e,yl,_l,q,{})}}function Il(t){let e;return{c(){e=v("div")},m(n,i){R(n,e,i),t[1](e)},p:C,i:C,o:C,d(n){n&&A(e),t[1](null)}}}function El(t,e,n){const i=mt(),r=new IntersectionObserver(c=>{c[0].isIntersecting&&(console.debug("Triggered infinite loading"),i("visible"))},{rootMargin:"1250px"});let s;function o(c){at[c?"unshift":"push"](()=>{s=c,n(0,s)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),s&&r.observe(s))},[s,o]}class bl extends K{constructor(e){super(),G(this,e,El,Il,q,{})}}var Tl="/kurosearch/assets/shironeko-confused.4071d5b2.png";function kl(t){let e,n,i,r,s;return{c(){e=v("div"),n=v("img"),r=$(),s=v("span"),s.textContent="No results found",Tn(n.src,i=Tl)||h(n,"src",i),h(n,"alt","No results."),h(s,"class","svelte-10fem3h"),h(e,"class","svelte-10fem3h")},m(o,c){R(o,e,c),p(e,n),p(e,r),p(e,s)},p:C,i:C,o:C,d(o){o&&A(e)}}}class Sl extends K{constructor(e){super(),G(this,e,null,kl,q,{})}}var Al="/kurosearch/assets/shironeko-x.c28cad00.png";function Cl(t){let e,n,i,r,s;return{c(){e=v("div"),n=v("img"),r=$(),s=v("span"),s.textContent="You have reached the end",Tn(n.src,i=Al)||h(n,"src",i),h(n,"alt","No results."),h(s,"class","svelte-1rtbqa7"),h(e,"class","svelte-1rtbqa7")},m(o,c){R(o,e,c),p(e,n),p(e,r),p(e,s)},p:C,i:C,o:C,d(o){o&&A(e)}}}class Rl extends K{constructor(e){super(),G(this,e,null,Cl,q,{})}}const Ol=Object.freeze(["id","score"]),Dl=t=>Ol.includes(t),Pl=20,Nl="https://r34-json.herokuapp.com/v2";let Ll=null;const $l=async(t,e,n,i)=>{if(!Ml(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!Ul(e))throw new TypeError("Invalid array of tags passed to getPage");if(!Dl(n))throw new TypeError("Invalid sort property passed to getPage");if(!jl(i))throw new TypeError("Invalid minimum score passed to getPage");const r=await uo(Bl(t,Fl(e,n,i)),Ll);if(!r.ok)throw new Error(`getPage failed with http status ${r.status}`);return await r.json()},Ml=t=>typeof t=="number"&&t>=0,Ul=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof co)),jl=t=>typeof t=="number"&&t>=0,Fl=(t,e,n)=>{const i=t.reduce((s,o)=>(o.modifier==="~"?s.optional.push(o):s.other.push(o),s),{optional:[],other:[]}),r=[...i.other.map(s=>s.serialize()),`sort:${e}:desc`,`score:>=${n}`].join("+");return i.optional.length==0?r:`${r}+( ${i.optional.map(s=>s.serialize()).join(" ~ ")} )`},Bl=(t,e)=>{const n=`${Nl}/posts?limit=${Pl}&pid=${t}`;return e===""?n:`${n}&tags=${e}`};function xl(t){let e,n,i;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',h(e,"class","svelte-2tve8k"),pe(e,"visible",t[0])},m(r,s){R(r,e,s),n||(i=X(e,"click",t[1]),n=!0)},p(r,[s]){s&1&&pe(e,"visible",r[0])},i:C,o:C,d(r){r&&A(e),n=!1,i()}}}function Hl(t,e,n){let i=0,r=!1;const s=()=>{const c=window.scrollY;n(0,r=c<i&&c>1e3),i=c};return hc(()=>{document.addEventListener("scroll",s,{passive:!0})}),dc(()=>{document.removeEventListener("scroll",s)}),[r,()=>window.scrollTo(0,0)]}class zl extends K{constructor(e){super(),G(this,e,Hl,xl,q,{})}}function us(t,e,n){const i=t.slice();return i[15]=e[n],i}function hs(t,e,n){const i=t.slice();return i[18]=e[n],i[20]=n,i}function ds(t){let e,n,i=[...t[5]],r=[];for(let o=0;o<i.length;o+=1)r[o]=fs(hs(t,i,o));const s=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){e=v("ul");for(let o=0;o<r.length;o+=1)r[o].c();h(e,"class","svelte-1vz5vln")},m(o,c){R(o,e,c);for(let a=0;a<r.length;a+=1)r[a].m(e,null);n=!0},p(o,c){if(c&32){i=[...o[5]];let a;for(a=0;a<i.length;a+=1){const l=hs(o,i,a);r[a]?(r[a].p(l,c),b(r[a],1)):(r[a]=fs(l),r[a].c(),b(r[a],1),r[a].m(e,null))}for(de(),a=i.length;a<r.length;a+=1)s(a);fe()}},i(o){if(!n){for(let c=0;c<i.length;c+=1)b(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)S(r[c]);n=!1},d(o){o&&A(e),Vt(r,o)}}}function fs(t){let e,n;function i(){return t[9](t[20])}return e=new pl({props:{tag:t[18]}}),e.$on("click",i),{c(){V(e.$$.fragment)},m(r,s){H(e,r,s),n=!0},p(r,s){t=r;const o={};s&32&&(o.tag=t[18]),e.$set(o)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){z(e,r)}}}function Vl(t){let e,n;return e=new Sl({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p:C,i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function Wl(t){let e,n=Be(t[0])+"",i,r,s,o,c,a,l,u,d,f=t[1],g=[];for(let m=0;m<f.length;m+=1)g[m]=ps(us(t,f,m));const w=m=>S(g[m],1,1,()=>{g[m]=null}),T=[Gl,ql],O=[];function k(m,y){return m[1].length<m[4]?0:1}return a=k(t),l=O[a]=T[a](t),{c(){e=v("p"),i=J(n),r=J(" results"),s=$(),o=v("ol");for(let m=0;m<g.length;m+=1)g[m].c();c=$(),l.c(),u=xn(),h(e,"class","count svelte-1vz5vln"),h(o,"class","svelte-1vz5vln")},m(m,y){R(m,e,y),p(e,i),p(e,r),R(m,s,y),R(m,o,y);for(let M=0;M<g.length;M+=1)g[M].m(o,null);R(m,c,y),O[a].m(m,y),R(m,u,y),d=!0},p(m,y){if((!d||y&1)&&n!==(n=Be(m[0])+"")&&le(i,n),y&2){f=m[1];let I;for(I=0;I<f.length;I+=1){const D=us(m,f,I);g[I]?(g[I].p(D,y),b(g[I],1)):(g[I]=ps(D),g[I].c(),b(g[I],1),g[I].m(o,null))}for(de(),I=f.length;I<g.length;I+=1)w(I);fe()}let M=a;a=k(m),a===M?O[a].p(m,y):(de(),S(O[M],1,1,()=>{O[M]=null}),fe(),l=O[a],l?l.p(m,y):(l=O[a]=T[a](m),l.c()),b(l,1),l.m(u.parentNode,u))},i(m){if(!d){for(let y=0;y<f.length;y+=1)b(g[y]);b(l),d=!0}},o(m){g=g.filter(Boolean);for(let y=0;y<g.length;y+=1)S(g[y]);S(l),d=!1},d(m){m&&A(e),m&&A(s),m&&A(o),Vt(g,m),m&&A(c),O[a].d(m),m&&A(u)}}}function ps(t){let e,n;return e=new Xc({props:{posts:t[15]}}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p(i,r){const s={};r&2&&(s.posts=i[15]),e.$set(s)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function ql(t){let e,n;return e=new Rl({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p:C,i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function Gl(t){let e,n;return e=new bl({}),e.$on("visible",t[7]),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},p:C,i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function Kl(t){let e,n,i,r,s,o,c,a,l,u,d,f,g,w,T,O,k,m,y,M,I,D,P,x,F,Oe,Hr;r=new wl({}),r.$on("pick",t[8]);let Q=t[5].length&&ds(t);a=new er({props:{title:"Click to search with active tags",icon:"search",text:"Search"}}),a.$on("click",t[10]);const zr=[Wl,Vl],De=[];function Vr(j,ue){return j[0]?0:j[0]===0?1:-1}return~(I=Vr(t))&&(D=De[I]=zr[I](t)),x=new zl({}),{c(){e=v("div"),n=v("h1"),n.textContent="kurosearch",i=$(),V(r.$$.fragment),s=$(),Q&&Q.c(),o=$(),c=v("div"),V(a.$$.fragment),l=$(),u=v("div"),d=v("select"),f=v("option"),f.textContent="New posts",g=v("option"),g.textContent="Popular posts",w=$(),T=v("select"),O=v("option"),O.textContent="No minimum score",k=v("option"),k.textContent="Min 10 likes",m=v("option"),m.textContent="Min 100 likes",y=v("option"),y.textContent="Min 1000 likes",M=$(),D&&D.c(),P=$(),V(x.$$.fragment),h(n,"class","svelte-1vz5vln"),h(c,"class","sort-row svelte-1vz5vln"),f.__value="id",f.value=f.__value,g.__value="score",g.value=g.__value,h(d,"class","svelte-1vz5vln"),t[2]===void 0&&ft(()=>t[11].call(d)),O.__value=0,O.value=O.__value,k.__value=10,k.value=k.__value,m.__value=100,m.value=m.__value,y.__value=1e3,y.value=y.__value,h(T,"class","svelte-1vz5vln"),t[3]===void 0&&ft(()=>t[12].call(T)),h(u,"class","sort-row svelte-1vz5vln"),h(e,"class","search-config svelte-1vz5vln")},m(j,ue){R(j,e,ue),p(e,n),p(e,i),H(r,e,null),p(e,s),Q&&Q.m(e,null),p(e,o),p(e,c),H(a,c,null),p(e,l),p(e,u),p(u,d),p(d,f),p(d,g),st(d,t[2]),p(u,w),p(u,T),p(T,O),p(T,k),p(T,m),p(T,y),st(T,t[3]),R(j,M,ue),~I&&De[I].m(j,ue),R(j,P,ue),H(x,j,ue),F=!0,Oe||(Hr=[X(d,"change",t[11]),X(T,"change",t[12])],Oe=!0)},p(j,[ue]){j[5].length?Q?(Q.p(j,ue),ue&32&&b(Q,1)):(Q=ds(j),Q.c(),b(Q,1),Q.m(e,o)):Q&&(de(),S(Q,1,1,()=>{Q=null}),fe()),ue&4&&st(d,j[2]),ue&8&&st(T,j[3]);let oi=I;I=Vr(j),I===oi?~I&&De[I].p(j,ue):(D&&(de(),S(De[oi],1,1,()=>{De[oi]=null}),fe()),~I?(D=De[I],D?D.p(j,ue):(D=De[I]=zr[I](j),D.c()),b(D,1),D.m(P.parentNode,P)):D=null)},i(j){F||(b(r.$$.fragment,j),b(Q),b(a.$$.fragment,j),b(D),b(x.$$.fragment,j),F=!0)},o(j){S(r.$$.fragment,j),S(Q),S(a.$$.fragment,j),S(D),S(x.$$.fragment,j),F=!1},d(j){j&&A(e),z(r),Q&&Q.d(),z(a),j&&A(M),~I&&De[I].d(j),j&&A(P),z(x,j),Oe=!1,Ee(Hr)}}}const Xl=20;function Jl(t,e,n){let i,r;je(t,lt,m=>n(5,r=m));let s=[],o="id",c=0,a=null,l=0;const u=()=>{n(1,s=[]),n(0,a=null),l=0},d=async()=>(u(),f()),f=async()=>{try{const m=r.map(M=>M.toSearchableTag()),y=await $l(l++,m,o,c);n(1,s=[...s,y.posts]),n(0,a=y.count)}catch(m){console.warn(m)}},g=m=>lt.addOrReplace(m.detail),w=m=>lt.removeByIndex(m),T=()=>d();function O(){o=Ri(this),n(2,o)}function k(){c=Ri(this),n(3,c)}return t.$$.update=()=>{t.$$.dirty&1&&n(4,i=a/Xl)},[a,s,o,c,i,r,d,f,g,w,T,O,k]}class Yl extends K{constructor(e){super(),G(this,e,Jl,Kl,q,{})}}const Pi=zn("dark");function Ql(t){let e,n,i,r,s;return{c(){e=v("select"),n=v("option"),n.textContent="Dark",i=v("option"),i.textContent="Light",n.__value="dark",n.value=n.__value,i.__value="light",i.value=i.__value,t[0]===void 0&&ft(()=>t[1].call(e))},m(o,c){R(o,e,c),p(e,n),p(e,i),st(e,t[0]),r||(s=X(e,"change",t[1]),r=!0)},p(o,[c]){c&1&&st(e,o[0])},i:C,o:C,d(o){o&&A(e),r=!1,s()}}}function Zl(t,e,n){let i;je(t,Pi,s=>n(0,i=s));function r(){i=Ri(this),Pi.set(i)}return[i,r]}class eu extends K{constructor(e){super(),G(this,e,Zl,Ql,q,{})}}function tu(t){let e;return{c(){e=v("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,h(e,"id","tags")},m(n,i){R(n,e,i)},p:C,i:C,o:C,d(n){n&&A(e)}}}class nu extends K{constructor(e){super(),G(this,e,null,tu,q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},iu=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,u=s>>2,d=(s&3)<<4|c>>4;let f=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(f=64)),i.push(n[u],n[d],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(po(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||c==null||l==null||d==null)throw Error();const f=s<<2|c>>4;if(i.push(f),l!==64){const g=c<<4&240|l>>2;if(i.push(g),d!==64){const w=l<<6&192|d;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ru=function(t){const e=po(t);return go.encodeByteArray(e,!0)},mo=function(t){return ru(t).replace(/\./g,"")},su=function(t){try{return go.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function au(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function cu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uu(){const t=re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hu(){return typeof indexedDB=="object"}function du(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class Re extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=fu,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?pu(s,i):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new Re(r,c,i)}}function pu(t,e){return t.replace(gu,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const gu=/\{\$([^}]+)}/g;function mu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(gs(s)&&gs(o)){if(!Sn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function gs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function St(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function At(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vu(t,e){const n=new _u(t,e);return n.subscribe.bind(n)}class _u{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yu(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=li),r.error===void 0&&(r.error=li),r.complete===void 0&&(r.complete=li);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function li(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Xe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ou;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eu(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Iu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iu(t){return t===ze?void 0:t}function Eu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Tu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},ku=B.INFO,Su={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Au=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Su[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tr{constructor(e){this.name=e,this._logLevel=ku,this._logHandler=Au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Cu=(t,e)=>e.some(n=>t instanceof n);let ms,vs;function Ru(){return ms||(ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ou(){return vs||(vs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vo=new WeakMap,Ni=new WeakMap,_o=new WeakMap,ui=new WeakMap,nr=new WeakMap;function Du(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Me(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vo.set(n,t)}).catch(()=>{}),nr.set(e,t),e}function Pu(t){if(Ni.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ni.set(t,e)}let Li={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_o.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nu(t){Li=t(Li)}function Lu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(hi(this),e,...n);return _o.set(i,e.sort?e.sort():[e]),Me(i)}:Ou().includes(t)?function(...e){return t.apply(hi(this),e),Me(vo.get(this))}:function(...e){return Me(t.apply(hi(this),e))}}function $u(t){return typeof t=="function"?Lu(t):(t instanceof IDBTransaction&&Pu(t),Cu(t,Ru())?new Proxy(t,Li):t)}function Me(t){if(t instanceof IDBRequest)return Du(t);if(ui.has(t))return ui.get(t);const e=$u(t);return e!==t&&(ui.set(t,e),nr.set(e,t)),e}const hi=t=>nr.get(t);function Mu(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),c=Me(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Me(o.result),a.oldVersion,a.newVersion,Me(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{s&&a.addEventListener("close",()=>s()),r&&a.addEventListener("versionchange",()=>r())}).catch(()=>{}),c}const Uu=["get","getKey","getAll","getAllKeys","count"],ju=["put","add","delete","clear"],di=new Map;function _s(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=ju.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Uu.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return i&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return di.set(e,s),s}Nu(t=>Kr(Gr({},t),{get:(e,n,i)=>_s(e,n)||t.get(e,n,i),has:(e,n)=>!!_s(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Bu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",ys="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new tr("@firebase/app"),xu="@firebase/app-compat",Hu="@firebase/analytics-compat",zu="@firebase/analytics",Vu="@firebase/app-check-compat",Wu="@firebase/app-check",qu="@firebase/auth",Gu="@firebase/auth-compat",Ku="@firebase/database",Xu="@firebase/database-compat",Ju="@firebase/functions",Yu="@firebase/functions-compat",Qu="@firebase/installations",Zu="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",ih="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/firestore-compat",uh="firebase",hh="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="[DEFAULT]",dh={[$i]:"fire-core",[xu]:"fire-core-compat",[zu]:"fire-analytics",[Hu]:"fire-analytics-compat",[Wu]:"fire-app-check",[Vu]:"fire-app-check-compat",[qu]:"fire-auth",[Gu]:"fire-auth-compat",[Ku]:"fire-rtdb",[Xu]:"fire-rtdb-compat",[Ju]:"fire-fn",[Yu]:"fire-fn-compat",[Qu]:"fire-iid",[Zu]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[ih]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[lh]:"fire-fst-compat","fire-js":"fire-js",[uh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Mi=new Map;function fh(t,e){try{t.container.addComponent(e)}catch(n){Je.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gt(t){const e=t.name;if(Mi.has(e))return Je.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,t);for(const n of An.values())fh(n,t);return!0}function ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ye=new Wt("app","Firebase",ph);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=hh;function mh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:yo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ye.create("bad-app-name",{appName:String(i)});const r=An.get(i);if(r){if(Sn(t,r.options)&&Sn(n,r.config))return r;throw Ye.create("duplicate-app",{appName:i})}const s=new bu(i);for(const c of Mi.values())s.addComponent(c);const o=new gh(t,n,s);return An.set(i,o),o}function wo(t=yo){const e=An.get(t);if(!e)throw Ye.create("no-app",{appName:t});return e}function Ue(t,e,n){var i;let r=(i=dh[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Je.warn(c.join(" "));return}gt(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="firebase-heartbeat-database",_h=1,Nt="firebase-heartbeat-store";let fi=null;function Io(){return fi||(fi=Mu(vh,_h,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nt)}}}).catch(t=>{throw Ye.create("idb-open",{originalErrorMessage:t.message})})),fi}async function yh(t){var e;try{return(await Io()).transaction(Nt).objectStore(Nt).get(Eo(t))}catch(n){if(n instanceof Re)Je.warn(n.message);else{const i=Ye.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Je.warn(i.message)}}}async function ws(t,e){var n;try{const r=(await Io()).transaction(Nt,"readwrite");return await r.objectStore(Nt).put(e,Eo(t)),r.done}catch(i){if(i instanceof Re)Je.warn(i.message);else{const r=Ye.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Je.warn(r.message)}}}function Eo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=1024,Ih=30*24*60*60*1e3;class Eh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Th(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Is();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Ih}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Is(),{heartbeatsToSend:n,unsentEntries:i}=bh(this._heartbeatsCache.heartbeats),r=mo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Is(){return new Date().toISOString().substring(0,10)}function bh(t,e=wh){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Es(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Es(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hu()?du().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ws(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ws(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Es(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){gt(new Xe("platform-logger",e=>new Fu(e),"PRIVATE")),gt(new Xe("heartbeat",e=>new Eh(e),"PRIVATE")),Ue($i,ys,t),Ue($i,ys,"esm2017"),Ue("fire-js","")}kh("");function rr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function bo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sh=bo,To=new Wt("auth","Firebase",bo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new tr("@firebase/auth");function wn(t,...e){bs.logLevel<=B.ERROR&&bs.error(`Auth (${Gt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,...e){throw sr(t,...e)}function we(t,...e){return sr(t,...e)}function ko(t,e,n){const i=Object.assign(Object.assign({},Sh()),{[e]:n});return new Wt("auth","Firebase",i).create(e,{appName:t.name})}function Ah(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ge(t,"argument-error"),ko(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return To.create(t,...e)}function N(t,e,...n){if(!t)throw sr(e,...n)}function Te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wn(e),new Error(e)}function Ae(t,e){t||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map;function ke(t){Ae(t instanceof Function,"Expected a class definition");let e=Ts.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ts.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){const n=ir(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Sn(s,e!=null?e:{}))return r;ge(r,"already-initialized")}return n.initialize({options:e})}function Rh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Oh(){return ks()==="http:"||ks()==="https:"}function ks(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oh()||cu()||"connection"in navigator)?navigator.onLine:!0}function Ph(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ae(n>e,"Short delay should be less than long delay!"),this.isMobile=au()||lu()}get(){return Dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Kt(3e4,6e4);function Xt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jt(t,e,n,i,r={}){return Ao(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const c=qt(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),So.fetch()(Co(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Ao(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Nh),e);try{const r=new $h(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw dn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw dn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw dn(t,"user-disabled",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ko(t,u,l);ge(t,u)}}catch(r){if(r instanceof Re)throw r;ge(t,"network-request-failed")}}async function Yt(t,e,n,i,r={}){const s=await Jt(t,e,n,i,r);return"mfaPendingCredential"in s&&ge(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Co(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?or(t.config,r):`${t.config.apiScheme}://${r}`}class $h{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(we(this.auth,"network-request-failed")),Lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=we(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t,e){return Jt(t,"POST","/v1/accounts:delete",e)}async function Uh(t,e){return Jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jh(t,e=!1){const n=vt(t),i=await n.getIdToken(e),r=ar(i);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rt(pi(r.auth_time)),issuedAtTime:Rt(pi(r.iat)),expirationTime:Rt(pi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pi(t){return Number(t)*1e3}function ar(t){var e;const[n,i,r]=t.split(".");if(n===void 0||i===void 0||r===void 0)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=su(i);return s?JSON.parse(s):(wn("Failed to decode base64 JWT payload"),null)}catch(s){return wn("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Fh(t){const e=ar(t);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Re&&Bh(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Bh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rt(this.lastLoginAt),this.creationTime=Rt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Lt(t,Uh(n,{idToken:i}));N(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vh(s.providerUserInfo):[],c=zh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ro(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Hh(t){const e=vt(t);await Cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zh(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Vh(t){return t.map(e=>{var{providerId:n}=e,i=rr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e){const n=await Ao(t,{},async()=>{const i=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Co(t,r,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",So.fetch()(o,{method:"POST",headers:c,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Wh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new $t;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){N(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ke{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=rr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ro(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lt(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jh(this,e)}reload(){return Hh(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Cn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lt(this,Mh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,c,a,l,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:M,isAnonymous:I,providerData:D,stsTokenManager:P}=n;N(y&&P,e,"internal-error");const x=$t.fromJSON(this.name,P);N(typeof y=="string",e,"internal-error"),Pe(d,e.name),Pe(f,e.name),N(typeof M=="boolean",e,"internal-error"),N(typeof I=="boolean",e,"internal-error"),Pe(g,e.name),Pe(w,e.name),Pe(T,e.name),Pe(O,e.name),Pe(k,e.name),Pe(m,e.name);const F=new Ke({uid:y,auth:e,email:f,emailVerified:M,displayName:d,isAnonymous:I,photoURL:w,phoneNumber:g,tenantId:T,stsTokenManager:x,createdAt:k,lastLoginAt:m});return D&&Array.isArray(D)&&(F.providerData=D.map(Oe=>Object.assign({},Oe))),O&&(F._redirectEventId=O),F}static async _fromIdTokenResponse(e,n,i=!1){const r=new $t;r.updateFromServerResponse(n);const s=new Ke({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Cn(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oo.type="NONE";const Ss=Oo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=In(this.userKey,r.apiKey,s),this.fullPersistenceKey=In("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ut(ke(Ss),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||ke(Ss);const o=In(i,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ke._fromJSON(e,u);l!==s&&(c=d),s=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ut(s,e,i):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ut(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(No(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Do(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($o(e))return"Blackberry";if(Mo(e))return"Webos";if(cr(e))return"Safari";if((e.includes("chrome/")||Po(e))&&!e.includes("edge/"))return"Chrome";if(Lo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Do(t=re()){return/firefox\//i.test(t)}function cr(t=re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Po(t=re()){return/crios\//i.test(t)}function No(t=re()){return/iemobile/i.test(t)}function Lo(t=re()){return/android/i.test(t)}function $o(t=re()){return/blackberry/i.test(t)}function Mo(t=re()){return/webos/i.test(t)}function Vn(t=re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qh(t=re()){var e;return Vn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gh(){return uu()&&document.documentMode===10}function Uo(t=re()){return Vn(t)||Lo(t)||Mo(t)||$o(t)||/windows phone/i.test(t)||No(t)}function Kh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e=[]){let n;switch(t){case"Browser":n=As(re());break;case"Worker":n=`${As(re())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cs(this),this.idTokenSubscription=new Cs(this),this.beforeStateQueue=new Xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=To,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ke(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Cn(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ph()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ke(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function Qt(t){return vt(t)}class Cs{constructor(e){this.auth=e,this.observer=null,this.addObserver=vu(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,n){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}async function Yh(t,e){return Jt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(t,e){return Yt(t,"POST","/v1/accounts:signInWithPassword",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t,e){return Yt(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}async function ed(t,e){return Yt(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends lr{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mt(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Mt(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Qh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zh(e,{email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Yh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ed(e,{idToken:n,email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(t,e){return Yt(t,"POST","/v1/accounts:signInWithIdp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="http://localhost";class Qe extends lr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=rr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Qe(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ht(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ht(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ht(e,n)}buildRequest(){const e={requestUri:td,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function id(t){const e=St(At(t)).link,n=e?St(At(e)).deep_link_id:null,i=St(At(t)).deep_link_id;return(i?St(At(i)).link:null)||i||n||e||t}class ur{constructor(e){var n,i,r,s,o,c;const a=St(At(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(i=a.oobCode)!==null&&i!==void 0?i:null,d=nd((r=a.mode)!==null&&r!==void 0?r:null);N(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=id(e);try{return new ur(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.providerId=_t.PROVIDER_ID}static credential(e,n){return Mt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ur.parseLink(n);return N(i,"argument-error"),Mt._fromEmailAndCode(e,i.code,i.tenantId)}}_t.PROVIDER_ID="password";_t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Zt{constructor(){super("facebook.com")}static credential(e){return Qe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qe._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ve.credential(n,i)}catch{return null}}}ve.GOOGLE_SIGN_IN_METHOD="google.com";ve.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Zt{constructor(){super("github.com")}static credential(e){return Qe._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Zt{constructor(){super("twitter.com")}static credential(e,n){return Qe._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return $e.credential(n,i)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(t,e){return Yt(t,"POST","/v1/accounts:signUp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ke._fromIdTokenResponse(e,i,r),o=Rs(i);return new Ze({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Rs(i);return new Ze({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Rs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Re{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Rn(e,n,i,r)}}function Fo(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(t,s,e,i):s})}async function sd(t,e,n=!1){const i=await Lt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ze._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const o=await Lt(t,Fo(r,s,e,t),n);N(o.idToken,r,"internal-error");const c=ar(o.idToken);N(c,r,"internal-error");const{sub:a}=c;return N(t.uid===a,r,"user-mismatch"),Ze._forOperation(t,s,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e,n=!1){const i="signIn",r=await Fo(t,i,e),s=await Ze._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ad(t,e){return Bo(Qt(t),e)}async function cd(t,e,n){const i=Qt(t),r=await rd(i,{returnSecureToken:!0,email:e,password:n}),s=await Ze._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ld(t,e,n){return ad(vt(t),_t.credential(e,n))}function ud(t){return vt(t).signOut()}const On="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(On,"1"),this.storage.removeItem(On),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){const t=re();return cr(t)||Vn(t)}const dd=1e3,fd=10;class Ho extends xo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hd()&&Kh(),this.fallbackToPolling=Uo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Gh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fd):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},dd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ho.type="LOCAL";const pd=Ho;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends xo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zo.type="SESSION";const Vo=zo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Wn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(o).map(async l=>l(n.origin,s)),a=await gd(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const l=dr("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(f.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function vd(t){Ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return typeof Ie().WorkerGlobalScope!="undefined"&&typeof Ie().importScripts=="function"}async function _d(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wd(){return Wo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="firebaseLocalStorageDb",Id=1,Dn="firebaseLocalStorage",Go="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qn(t,e){return t.transaction([Dn],e?"readwrite":"readonly").objectStore(Dn)}function Ed(){const t=indexedDB.deleteDatabase(qo);return new en(t).toPromise()}function ji(){const t=indexedDB.open(qo,Id);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Dn,{keyPath:Go})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Dn)?e(i):(i.close(),await Ed(),e(await ji()))})})}async function Os(t,e,n){const i=qn(t,!0).put({[Go]:e,value:n});return new en(i).toPromise()}async function bd(t,e){const n=qn(t,!1).get(e),i=await new en(n).toPromise();return i===void 0?null:i.value}function Ds(t,e){const n=qn(t,!0).delete(e);return new en(n).toPromise()}const Td=800,kd=3;class Ko{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ji(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>kd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wn._getInstance(wd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _d(),!this.activeServiceWorker)return;this.sender=new md(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ji();return await Os(e,On,"1"),await Ds(e,On),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Os(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>bd(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ds(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=qn(r,!1).getAll();return new en(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Td)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ko.type="LOCAL";const Sd=Ko;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Cd(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=we("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Ad().appendChild(i)})}function Rd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Kt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t,e){return e?ke(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends lr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ht(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Od(t){return Bo(t.auth,new fr(t),t.bypassAuthState)}function Dd(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),od(n,new fr(t),t.bypassAuthState)}async function Pd(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),sd(n,new fr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Od;case"linkViaPopup":case"linkViaRedirect":return Pd;case"reauthViaPopup":case"reauthViaRedirect":return Dd;default:ge(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Kt(2e3,1e4);async function Ld(t,e,n){const i=Qt(t);Ah(t,e,hr);const r=Xo(i,n);return new We(i,"signInViaPopup",e,r).executeNotNull()}class We extends Jo{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,We.currentPopupAction&&We.currentPopupAction.cancel(),We.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=dr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,We.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Nd.get())};e()}}We.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="pendingRedirect",En=new Map;class Md extends Jo{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const i=await Ud(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ud(t,e){const n=Bd(e),i=Fd(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function jd(t,e){En.set(t._key(),e)}function Fd(t){return ke(t._redirectPersistence)}function Bd(t){return In($d,t.config.apiKey,t.name)}async function xd(t,e,n=!1){const i=Qt(t),r=Xo(i,e),o=await new Md(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=10*60*1e3;class zd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Yo(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(we(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ps(e))}saveEventToCache(e){this.cachedEventUids.add(Ps(e)),this.lastProcessedEventTime=Date.now()}}function Ps(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t,e={}){return Jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gd=/^https?/;async function Kd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wd(t);for(const n of e)try{if(Xd(n))return}catch{}ge(t,"unauthorized-domain")}function Xd(t){const e=Ui(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Gd.test(n))return!1;if(qd.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new Kt(3e4,6e4);function Ns(){const t=Ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yd(t){return new Promise((e,n)=>{var i,r,s;function o(){Ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ns(),n(we(t,"network-request-failed"))},timeout:Jd.get()})}if(!((r=(i=Ie().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Ie().gapi)===null||s===void 0)&&s.load)o();else{const c=Rd("iframefcb");return Ie()[c]=()=>{gapi.load?o():n(we(t,"network-request-failed"))},Cd(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw bn=null,e})}let bn=null;function Qd(t){return bn=bn||Yd(t),bn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Kt(5e3,15e3),ef="__/auth/iframe",tf="emulator/auth/iframe",nf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sf(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?or(e,tf):`https://${t.config.authDomain}/${ef}`,i={apiKey:e.apiKey,appName:t.name,v:Gt},r=rf.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${qt(i).slice(1)}`}async function of(t){const e=await Qd(t),n=Ie().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:sf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nf,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=we(t,"network-request-failed"),c=Ie().setTimeout(()=>{s(o)},Zd.get());function a(){Ie().clearTimeout(c),r(i)}i.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cf=500,lf=600,uf="_blank",hf="http://localhost";class Ls{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function df(t,e,n,i=cf,r=lf){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const a=Object.assign(Object.assign({},af),{width:i.toString(),height:r.toString(),top:s,left:o}),l=re().toLowerCase();n&&(c=Po(l)?uf:n),Do(l)&&(e=e||hf,a.scrollbars="yes");const u=Object.entries(a).reduce((f,[g,w])=>`${f}${g}=${w},`,"");if(qh(l)&&c!=="_self")return ff(e||"",c),new Ls(null);const d=window.open(e||"",c,u);N(d,t,"popup-blocked");try{d.focus()}catch{}return new Ls(d)}function ff(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="__/auth/handler",gf="emulator/auth/handler";function $s(t,e,n,i,r,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Gt,eventId:r};if(e instanceof hr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,l]of Object.entries(s||{}))o[a]=l}if(e instanceof Zt){const a=e.getScopes().filter(l=>l!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const a of Object.keys(c))c[a]===void 0&&delete c[a];return`${mf(t)}?${qt(c).slice(1)}`}function mf({config:t}){return t.emulator?or(t,gf):`https://${t.authDomain}/${pf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="webStorageSupport";class vf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vo,this._completeRedirectFn=xd,this._overrideRedirectResult=jd}async _openPopup(e,n,i,r){var s;Ae((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$s(e,n,i,Ui(),r);return df(e,o,dr())}async _openRedirect(e,n,i,r){return await this._originValidation(e),vd($s(e,n,i,Ui(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ae(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await of(e),i=new zd(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gi,{type:gi},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[gi];o!==void 0&&n(!!o),ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uo()||cr()||Vn()}}const _f=vf;var Ms="@firebase/auth",Us="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function If(t){gt(new Xe("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((c,a)=>{N(s&&!s.includes(":"),"invalid-api-key",{appName:c.name}),N(!(o!=null&&o.includes(":")),"argument-error",{appName:c.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jo(t)},u=new Jh(c,a,l);return Rh(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),gt(new Xe("auth-internal",e=>{const n=Qt(e.getProvider("auth").getImmediate());return(i=>new yf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Ms,Us,wf(t)),Ue(Ms,Us,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t=wo()){const e=ir(t,"auth");return e.isInitialized()?e.getImmediate():Ch(t,{popupRedirectResolver:_f,persistence:[Sd,pd,Vo]})}If("Browser");var bf="firebase",Tf="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(bf,Tf,"app");var kf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,pr=pr||{},L=kf||self;function Pn(){}function Fi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Sf(t){return Object.prototype.hasOwnProperty.call(t,mi)&&t[mi]||(t[mi]=++Af)}var mi="closure_uid_"+(1e9*Math.random()>>>0),Af=0;function Cf(t,e,n){return t.call.apply(t.bind,arguments)}function Rf(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ee(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=Cf:ee=Rf,ee.apply(null,arguments)}function fn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ne(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[r].apply(i,o)}}function xe(){this.s=this.s,this.o=this.o}var Of=0;xe.prototype.s=!1;xe.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Of!=0)&&Sf(this)};xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qo=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Zo=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function Df(t){e:{var e=bp;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function js(t){return Array.prototype.concat.apply([],arguments)}function gr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Nn(t){return/^[\s\xa0]*$/.test(t)}var Fs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function se(t,e){return t.indexOf(e)!=-1}function vi(t,e){return t<e?-1:t>e?1:0}var oe;e:{var Bs=L.navigator;if(Bs){var xs=Bs.userAgent;if(xs){oe=xs;break e}}oe=""}function mr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ea(t){const e={};for(const n in t)e[n]=t[n];return e}var Hs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ta(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Hs.length;s++)n=Hs[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function vr(t){return vr[" "](t),t}vr[" "]=Pn;function Pf(t){var e=$f;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Nf=se(oe,"Opera"),Ut=se(oe,"Trident")||se(oe,"MSIE"),na=se(oe,"Edge"),Bi=na||Ut,ia=se(oe,"Gecko")&&!(se(oe.toLowerCase(),"webkit")&&!se(oe,"Edge"))&&!(se(oe,"Trident")||se(oe,"MSIE"))&&!se(oe,"Edge"),Lf=se(oe.toLowerCase(),"webkit")&&!se(oe,"Edge");function ra(){var t=L.document;return t?t.documentMode:void 0}var xi;e:{var _i="",yi=function(){var t=oe;if(ia)return/rv:([^\);]+)(\)|;)/.exec(t);if(na)return/Edge\/([\d\.]+)/.exec(t);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Lf)return/WebKit\/(\S+)/.exec(t);if(Nf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yi&&(_i=yi?yi[1]:""),Ut){var wi=ra();if(wi!=null&&wi>parseFloat(_i)){xi=String(wi);break e}}xi=_i}var $f={};function Mf(){return Pf(function(){let t=0;const e=Fs(String(xi)).split("."),n=Fs("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=vi(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||vi(r[2].length==0,s[2].length==0)||vi(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}L.document&&Ut&&ra();var Uf=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Pn,e),L.removeEventListener("test",Pn,e)}catch{}return t}();function ie(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};function jt(t,e){if(ie.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ia){e:{try{vr(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jt.Z.h.call(this)}}ne(jt,ie);var jf={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),Ff=0;function Bf(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Ff,this.ca=this.fa=!1}function Gn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Kn(t){this.src=t,this.g={},this.h=0}Kn.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zi(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Bf(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function Hi(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Qo(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Gn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zi(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),Ii={};function sa(t,e,n,i,r){if(i&&i.once)return aa(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)sa(t,e[s],n,i,r);return null}return n=Ir(n),t&&t[nn]?t.N(e,n,tn(i)?!!i.capture:!!i,r):oa(t,e,n,!1,i,r)}function oa(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=tn(r)?!!r.capture:!!r,c=wr(t);if(c||(t[_r]=c=new Kn(t)),n=c.add(e,n,i,o,s),n.proxy)return n;if(i=xf(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Uf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(la(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xf(){function t(n){return e.call(t.src,t.listener,n)}var e=Hf;return t}function aa(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)aa(t,e[s],n,i,r);return null}return n=Ir(n),t&&t[nn]?t.O(e,n,tn(i)?!!i.capture:!!i,r):oa(t,e,n,!0,i,r)}function ca(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ca(t,e[s],n,i,r);else i=tn(i)?!!i.capture:!!i,n=Ir(n),t&&t[nn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zi(s,n,i,r),-1<n&&(Gn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zi(e,n,i,r)),(n=-1<t?e[t]:null)&&yr(n))}function yr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[nn])Hi(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(la(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wr(e))?(Hi(n,t),n.h==0&&(n.src=null,e[_r]=null)):Gn(t)}}}function la(t){return t in Ii?Ii[t]:Ii[t]="on"+t}function Hf(t,e){if(t.ca)t=!0;else{e=new jt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&yr(t),t=n.call(i,e)}return t}function wr(t){return t=t[_r],t instanceof Kn?t:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ir(t){return typeof t=="function"?t:(t[Ei]||(t[Ei]=function(e){return t.handleEvent(e)}),t[Ei])}function Z(){xe.call(this),this.i=new Kn(this),this.P=this,this.I=null}ne(Z,xe);Z.prototype[nn]=!0;Z.prototype.removeEventListener=function(t,e,n,i){ca(this,t,e,n,i)};function te(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new ie(e,t);else if(e instanceof ie)e.target=e.target||t;else{var r=e;e=new ie(i,t),ta(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=pn(o,i,!0,e)&&r}if(o=e.g=t,r=pn(o,i,!0,e)&&r,r=pn(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=pn(o,i,!1,e)&&r}Z.prototype.M=function(){if(Z.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Gn(n[i]);delete t.g[e],t.h--}}this.I=null};Z.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Z.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function pn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var c=o.listener,a=o.ia||o.src;o.fa&&Hi(t.i,o),r=c.call(a,i)!==!1&&r}}return r&&!i.defaultPrevented}var Er=L.JSON.stringify;function zf(){var t=ha;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Vf{constructor(){this.h=this.g=null}add(e,n){const i=ua.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ua=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Wf,t=>t.reset());class Wf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qf(t){L.setTimeout(()=>{throw t},0)}function br(t,e){Vi||Gf(),Wi||(Vi(),Wi=!0),ha.add(t,e)}var Vi;function Gf(){var t=L.Promise.resolve(void 0);Vi=function(){t.then(Kf)}}var Wi=!1,ha=new Vf;function Kf(){for(var t;t=zf();){try{t.h.call(t.g)}catch(n){qf(n)}var e=ua;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wi=!1}function Xn(t,e){Z.call(this),this.h=t||1,this.g=e||L,this.j=ee(this.kb,this),this.l=Date.now()}ne(Xn,Z);E=Xn.prototype;E.da=!1;E.S=null;E.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),te(this,"tick"),this.da&&(Tr(this),this.start()))}};E.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}E.M=function(){Xn.Z.M.call(this),Tr(this),delete this.g};function kr(t,e,n){if(typeof t=="function")n&&(t=ee(t,n));else if(t&&typeof t.handleEvent=="function")t=ee(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function da(t){t.g=kr(()=>{t.g=null,t.i&&(t.i=!1,da(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Xf extends xe{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:da(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){xe.call(this),this.h=t,this.g={}}ne(Ft,xe);var zs=[];function fa(t,e,n,i){Array.isArray(n)||(n&&(zs[0]=n.toString()),n=zs);for(var r=0;r<n.length;r++){var s=sa(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function pa(t){mr(t.g,function(e,n){this.g.hasOwnProperty(n)&&yr(e)},t),t.g={}}Ft.prototype.M=function(){Ft.Z.M.call(this),pa(this)};Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jn(){this.g=!0}Jn.prototype.Aa=function(){this.g=!1};function Jf(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",c=s.split("&"),a=0;a<c.length;a++){var l=c[a].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Yf(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ot(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Zf(t,n)+(i?" "+i:"")})}function Qf(t,e){t.info(function(){return"TIMEOUT: "+e})}Jn.prototype.info=function(){};function Zf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Er(n)}catch{return e}}var yt={},Vs=null;function Sr(){return Vs=Vs||new Z}yt.Ma="serverreachability";function ga(t){ie.call(this,yt.Ma,t)}ne(ga,ie);function Bt(t){const e=Sr();te(e,new ga(e,t))}yt.STAT_EVENT="statevent";function ma(t,e){ie.call(this,yt.STAT_EVENT,t),this.stat=e}ne(ma,ie);function ae(t){const e=Sr();te(e,new ma(e,t))}yt.Na="timingevent";function va(t,e){ie.call(this,yt.Na,t),this.size=e}ne(va,ie);function rn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Ar={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ep={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Cr(){}Cr.prototype.h=null;function Ws(t){return t.h||(t.h=t.i())}function tp(){}var sn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Rr(){ie.call(this,"d")}ne(Rr,ie);function Or(){ie.call(this,"c")}ne(Or,ie);var qi;function Yn(){}ne(Yn,Cr);Yn.prototype.g=function(){return new XMLHttpRequest};Yn.prototype.i=function(){return{}};qi=new Yn;function on(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Ft(this),this.P=np,t=Bi?125:void 0,this.W=new Xn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _a}function _a(){this.i=null,this.g="",this.h=!1}var np=45e3,Gi={},Ln={};E=on.prototype;E.setTimeout=function(t){this.P=t};function Ki(t,e,n){t.K=1,t.v=Zn(Ce(e)),t.s=n,t.U=!0,ya(t,null)}function ya(t,e){t.F=Date.now(),an(t),t.A=Ce(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Sa(n.h,"t",i),t.C=0,n=t.l.H,t.h=new _a,t.g=qa(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xf(ee(t.Ia,t,t.g),t.O)),fa(t.V,t.g,"readystatechange",t.gb),e=t.H?ea(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Bt(1),Jf(t.j,t.u,t.A,t.m,t.X,t.s)}E.gb=function(t){t=t.target;const e=this.L;e&&Se(t)==3?e.l():this.Ia(t)};E.Ia=function(t){try{if(t==this.g)e:{const u=Se(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||Bi||this.g&&(this.h.h||this.g.ga()||Xs(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Bt(3):Bt(2)),Qn(this);var n=this.g.ba();this.N=n;t:if(wa(this)){var i=Xs(this.g);t="";var r=i.length,s=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){qe(this),Ot(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Yf(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,a=this.g;if((c=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nn(c)){var l=c;break t}}l=null}if(n=l)ot(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xi(this,n);else{this.i=!1,this.o=3,ae(12),qe(this),Ot(this);break e}}this.U?(Ia(this,u,o),Bi&&this.i&&u==3&&(fa(this.V,this.W,"tick",this.fb),this.W.start())):(ot(this.j,this.m,o,null),Xi(this,o)),u==4&&qe(this),this.i&&!this.I&&(u==4?Ha(this.l,this):(this.i=!1,an(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),qe(this),Ot(this)}}}catch{}finally{}};function wa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ia(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=ip(t,n),r==Ln){e==4&&(t.o=4,ae(14),i=!1),ot(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Gi){t.o=4,ae(15),ot(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ot(t.j,t.m,r,null),Xi(t,r);wa(t)&&r!=Ln&&r!=Gi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fr(e),e.L=!0,ae(11))):(ot(t.j,t.m,n,"[Invalid Chunked Response]"),qe(t),Ot(t))}E.fb=function(){if(this.g){var t=Se(this.g),e=this.g.ga();this.C<e.length&&(Qn(this),Ia(this,t,e),this.i&&t!=4&&an(this))}};function ip(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ln:(n=Number(e.substring(n,i)),isNaN(n)?Gi:(i+=1,i+n>e.length?Ln:(e=e.substr(i,n),t.C=i+n,e)))}E.cancel=function(){this.I=!0,qe(this)};function an(t){t.Y=Date.now()+t.P,Ea(t,t.P)}function Ea(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rn(ee(t.eb,t),e)}function Qn(t){t.B&&(L.clearTimeout(t.B),t.B=null)}E.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qf(this.j,this.A),this.K!=2&&(Bt(3),ae(17)),qe(this),this.o=2,Ot(this)):Ea(this,this.Y-t)};function Ot(t){t.l.G==0||t.I||Ha(t.l,t)}function qe(t){Qn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tr(t.W),pa(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ji(n.i,t))){if(n.I=t.N,!t.J&&Ji(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)jn(n),ii(n);else break e;jr(n),ae(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=rn(ee(n.ab,n),6e3));if(1>=Ra(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ge(n,11)}else if((t.J||n.g==t)&&jn(n),!Nn(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=l[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=i.i;!s.g&&(se(w,"spdy")||se(w,"quic")||se(w,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Nr(s,s.h),s.h=null))}if(i.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(i.sa=T,W(i.F,i.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Wa(i,i.H?i.la:null,i.W),o.J){Oa(i.i,o);var c=o,a=i.K;a&&c.setTimeout(a),c.B&&(Qn(c),an(c)),i.g=o}else Ba(i);0<n.l.length&&ri(n)}else l[0]!="stop"&&l[0]!="close"||Ge(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ge(n,7):Ur(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Bt(4)}catch{}}function rp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Fi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Dr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fi(t)||typeof t=="string")Zo(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Fi(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=rp(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function wt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof wt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}E=wt.prototype;E.R=function(){Pr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};E.T=function(){return Pr(this),this.g.concat()};function Pr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];et(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],et(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}E.get=function(t,e){return et(this.h,t)?this.h[t]:e};E.set=function(t,e){et(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};E.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ba=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function tt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof tt){this.g=e!==void 0?e:t.g,$n(this,t.j),this.s=t.s,Mn(this,t.i),Un(this,t.m),this.l=t.l,e=t.h;var n=new xt;n.i=e.i,e.g&&(n.g=new wt(e.g),n.h=e.h),qs(this,n),this.o=t.o}else t&&(n=String(t).match(ba))?(this.g=!!e,$n(this,n[1]||"",!0),this.s=Dt(n[2]||""),Mn(this,n[3]||"",!0),Un(this,n[4]),this.l=Dt(n[5]||"",!0),qs(this,n[6]||"",!0),this.o=Dt(n[7]||"")):(this.g=!!e,this.h=new xt(null,this.g))}tt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ct(e,Gs,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ct(e,Gs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ct(n,n.charAt(0)=="/"?up:lp,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ct(n,dp)),t.join("")};function Ce(t){return new tt(t)}function $n(t,e,n){t.j=n?Dt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mn(t,e,n){t.i=n?Dt(e,!0):e}function Un(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qs(t,e,n){e instanceof xt?(t.h=e,fp(t.h,t.g)):(n||(e=Ct(e,hp)),t.h=new xt(e,t.g))}function W(t,e,n){t.h.set(e,n)}function Zn(t){return W(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function op(t){return t instanceof tt?Ce(t):new tt(t,void 0)}function ap(t,e,n,i){var r=new tt(null,void 0);return t&&$n(r,t),e&&Mn(r,e),n&&Un(r,n),i&&(r.l=i),r}function Dt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ct(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gs=/[#\/\?@]/g,lp=/[#\?:]/g,up=/[#\?]/g,hp=/[#\?@]/g,dp=/#/g;function xt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new wt,t.h=0,t.i&&sp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}E=xt.prototype;E.add=function(t,e){He(this),this.i=null,t=It(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ta(t,e){He(t),e=It(t,e),et(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,et(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Pr(t)))}function ka(t,e){return He(t),e=It(t,e),et(t.g.h,e)}E.forEach=function(t,e){He(this),this.g.forEach(function(n,i){Zo(n,function(r){t.call(e,r,i,this)},this)},this)};E.T=function(){He(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};E.R=function(t){He(this);var e=[];if(typeof t=="string")ka(this,t)&&(e=js(e,this.g.get(It(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=js(e,t[n])}return e};E.set=function(t,e){return He(this),this.i=null,t=It(this,t),ka(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};E.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Sa(t,e,n){Ta(t,e),0<n.length&&(t.i=null,t.g.set(It(t,e),gr(n)),t.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function It(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fp(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Ta(this,i),Sa(this,r,n))},t)),t.j=e}var pp=class{constructor(t,e){this.h=t,this.g=e}};function Aa(t){this.l=t||gp,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gp=10;function Ca(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ra(t){return t.h?1:t.g?t.g.size:0}function Ji(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Nr(t,e){t.g?t.g.add(e):t.h=e}function Oa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Aa.prototype.cancel=function(){if(this.i=Da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Da(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gr(t.i)}function Lr(){}Lr.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Lr.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function mp(){this.g=new Lr}function vp(t,e,n){const i=n||"";try{Dr(t,function(r,s){let o=r;tn(r)&&(o=Er(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function _p(t,e){const n=new Jn;if(L.Image){const i=new Image;i.onload=fn(gn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=fn(gn,n,i,"TestLoadImage: error",!1,e),i.onabort=fn(gn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=fn(gn,n,i,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function gn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function ei(t){this.l=t.$b||null,this.j=t.ib||!1}ne(ei,Cr);ei.prototype.g=function(){return new ti(this.l,this.j)};ei.prototype.i=function(t){return function(){return t}}({});function ti(t,e){Z.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$r,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ne(ti,Z);var $r=0;E=ti.prototype;E.open=function(t,e){if(this.readyState!=$r)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ht(this)};E.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=$r};E.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ht(this)),this.g&&(this.readyState=3,Ht(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pa(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Pa(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}E.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):Ht(this),this.readyState==3&&Pa(this)}};E.Ua=function(t){this.g&&(this.response=this.responseText=t,cn(this))};E.Ta=function(t){this.g&&(this.response=t,cn(this))};E.ha=function(){this.g&&cn(this)};function cn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ht(t)}E.setRequestHeader=function(t,e){this.v.append(t,e)};E.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ht(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yp=L.JSON.parse;function Y(t){Z.call(this),this.headers=new wt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Na,this.K=this.L=!1}ne(Y,Z);var Na="",wp=/^https?$/i,Ip=["POST","PUT"];E=Y.prototype;E.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qi.g(),this.C=this.u?Ws(this.u):Ws(qi),this.g.onreadystatechange=ee(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ks(this,s);return}t=n||"";const r=new wt(this.headers);i&&Dr(i,function(s,o){r.set(o,s)}),i=Df(r.T()),n=L.FormData&&t instanceof L.FormData,!(0<=Qo(Ip,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ma(this),0<this.B&&((this.K=Ep(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.pa,this)):this.A=kr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ks(this,s)}};function Ep(t){return Ut&&Mf()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function bp(t){return t.toLowerCase()=="content-type"}E.pa=function(){typeof pr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Ks(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,La(t),ni(t)}function La(t){t.D||(t.D=!0,te(t,"complete"),te(t,"error"))}E.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,te(this,"complete"),te(this,"abort"),ni(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ni(this,!0)),Y.Z.M.call(this)};E.Fa=function(){this.s||(this.F||this.v||this.l?$a(this):this.cb())};E.cb=function(){$a(this)};function $a(t){if(t.h&&typeof pr!="undefined"&&(!t.C[1]||Se(t)!=4||t.ba()!=2)){if(t.v&&Se(t)==4)kr(t.Fa,0,t);else if(te(t,"readystatechange"),Se(t)==4){t.h=!1;try{const c=t.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=c===0){var r=String(t.H).match(ba)[1]||null;if(!r&&L.self&&L.self.location){var s=L.self.location.protocol;r=s.substr(0,s.length-1)}i=!wp.test(r?r.toLowerCase():"")}n=i}if(n)te(t,"complete"),te(t,"success");else{t.m=6;try{var o=2<Se(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",La(t)}}finally{ni(t)}}}}function ni(t,e){if(t.g){Ma(t);const n=t.g,i=t.C[0]?Pn:null;t.g=null,t.C=null,e||te(t,"ready");try{n.onreadystatechange=i}catch{}}}function Ma(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Se(t){return t.g?t.g.readyState:0}E.ba=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};E.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yp(e)}};function Xs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Na:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}E.Da=function(){return this.m};E.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tp(t){let e="";return mr(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Mr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Tp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):W(t,e,n))}function bt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ua(t){this.za=0,this.l=[],this.h=new Jn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=bt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=bt("baseRetryDelayMs",5e3,t),this.$a=bt("retryDelaySeedMs",1e4,t),this.Ya=bt("forwardChannelMaxRetries",2,t),this.ra=bt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Aa(t&&t.concurrentRequestLimit),this.Ca=new mp,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}E=Ua.prototype;E.ma=8;E.G=1;function Ur(t){if(ja(t),t.G==3){var e=t.V++,n=Ce(t.F);W(n,"SID",t.J),W(n,"RID",e),W(n,"TYPE","terminate"),ln(t,n),e=new on(t,t.h,e,void 0),e.K=2,e.v=Zn(Ce(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=qa(e.l,null),e.g.ea(e.v)),e.F=Date.now(),an(e)}Va(t)}E.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ii(t){t.g&&(Fr(t),t.g.cancel(),t.g=null)}function ja(t){ii(t),t.u&&(L.clearTimeout(t.u),t.u=null),jn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function bi(t,e){t.l.push(new pp(t.Za++,e)),t.G==3&&ri(t)}function ri(t){Ca(t.i)||t.m||(t.m=!0,br(t.Ha,t),t.C=0)}function kp(t,e){return Ra(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=rn(ee(t.Ha,t,e),za(t,t.C)),t.C++,!0)}E.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new on(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=ea(s),ta(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fa(this,r,e),n=Ce(this.F),W(n,"RID",t),W(n,"CVER",22),this.D&&W(n,"X-HTTP-Session-Id",this.D),ln(this,n),this.o&&s&&Mr(n,this.o,s),Nr(this.i,r),this.Ra&&W(n,"TYPE","init"),this.ja?(W(n,"$req",e),W(n,"SID","null"),r.$=!0,Ki(r,n,null)):Ki(r,n,e),this.G=2}}else this.G==3&&(t?Js(this,t):this.l.length==0||Ca(this.i)||Js(this))};function Js(t,e){var n;e?n=e.m:n=t.V++;const i=Ce(t.F);W(i,"SID",t.J),W(i,"RID",n),W(i,"AID",t.U),ln(t,i),t.o&&t.s&&Mr(i,t.o,t.s),n=new on(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Fa(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Nr(t.i,n),Ki(n,i,e)}function ln(t,e){t.j&&Dr({},function(n,i){W(e,i,n)})}function Fa(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ee(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let c=!0;for(let a=0;a<n;a++){let l=r[a].h;const u=r[a].g;if(l-=s,0>l)s=Math.max(0,r[a].h-100),c=!1;else try{vp(u,o,"req"+l+"_")}catch{i&&i(u)}}if(c){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Ba(t){t.g||t.u||(t.Y=1,br(t.Ga,t),t.A=0)}function jr(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=rn(ee(t.Ga,t),za(t,t.A)),t.A++,!0)}E.Ga=function(){if(this.u=null,xa(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=rn(ee(this.bb,this),t)}};E.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ae(10),ii(this),xa(this))};function Fr(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function xa(t){t.g=new on(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ce(t.oa);W(e,"RID","rpc"),W(e,"SID",t.J),W(e,"CI",t.N?"0":"1"),W(e,"AID",t.U),ln(t,e),W(e,"TYPE","xmlhttp"),t.o&&t.s&&Mr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Zn(Ce(e)),n.s=null,n.U=!0,ya(n,t)}E.ab=function(){this.v!=null&&(this.v=null,ii(this),jr(this),ae(19))};function jn(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Ha(t,e){var n=null;if(t.g==e){jn(t),Fr(t),t.g=null;var i=2}else if(Ji(t.i,e))n=e.D,Oa(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Sr(),te(i,new va(i,n,e,r)),ri(t)}else Ba(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&kp(t,e)||i==2&&jr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ge(t,5);break;case 4:Ge(t,10);break;case 3:Ge(t,6);break;default:Ge(t,2)}}}function za(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ge(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=ee(t.jb,t);n||(n=new tt("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||$n(n,"https"),Zn(n)),_p(n.toString(),i)}else ae(2);t.G=0,t.j&&t.j.va(e),Va(t),ja(t)}E.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ae(2)):(this.h.info("Failed to ping google.com"),ae(1))};function Va(t){t.G=0,t.I=-1,t.j&&((Da(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,gr(t.l),t.l.length=0),t.j.ua())}function Wa(t,e,n){let i=op(n);if(i.i!="")e&&Mn(i,e+"."+i.i),Un(i,i.m);else{const r=L.location;i=ap(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&mr(t.aa,function(r,s){W(i,s,r)}),e=t.D,n=t.sa,e&&n&&W(i,e,n),W(i,"VER",t.ma),ln(t,i),i}function qa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Y(new ei({ib:!0})):new Y(t.qa),e.L=t.H,e}function Ga(){}E=Ga.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Oa=function(){};function me(t,e){Z.call(this),this.g=new Ua(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Nn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}ne(me,Z);me.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),br(ee(t.hb,t,e))),ae(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Wa(t,null,t.W),ri(t)};me.prototype.close=function(){Ur(this.g)};me.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,bi(this.g,e)}else this.v?(e={},e.__data__=Er(t),bi(this.g,e)):bi(this.g,t)};me.prototype.M=function(){this.g.j=null,delete this.j,Ur(this.g),delete this.g,me.Z.M.call(this)};function Ka(t){Rr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ne(Ka,Rr);function Xa(){Or.call(this),this.status=1}ne(Xa,Or);function Et(t){this.g=t}ne(Et,Ga);Et.prototype.xa=function(){te(this.g,"a")};Et.prototype.wa=function(t){te(this.g,new Ka(t))};Et.prototype.va=function(t){te(this.g,new Xa(t))};Et.prototype.ua=function(){te(this.g,"b")};me.prototype.send=me.prototype.u;me.prototype.open=me.prototype.m;me.prototype.close=me.prototype.close;Ar.NO_ERROR=0;Ar.TIMEOUT=8;Ar.HTTP_ERROR=6;ep.COMPLETE="complete";tp.EventType=sn;sn.OPEN="a";sn.CLOSE="b";sn.ERROR="c";sn.MESSAGE="d";Z.prototype.listen=Z.prototype.N;Y.prototype.listenOnce=Y.prototype.O;Y.prototype.getLastError=Y.prototype.La;Y.prototype.getLastErrorCode=Y.prototype.Da;Y.prototype.getStatus=Y.prototype.ba;Y.prototype.getResponseJson=Y.prototype.Qa;Y.prototype.getResponseText=Y.prototype.ga;Y.prototype.send=Y.prototype.ea;const Ys="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new tr("@firebase/firestore");function he(t,...e){if(Fn.logLevel<=B.DEBUG){const n=e.map(Ja);Fn.debug(`Firestore (${si}): ${t}`,...n)}}function Br(t,...e){if(Fn.logLevel<=B.ERROR){const n=e.map(Ja);Fn.error(`Firestore (${si}): ${t}`,...n)}}function Ja(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+t;throw Br(e),new Error(e)}function Bn(t,e){t||Ya()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Re{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ap{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ce.UNAUTHENTICATED))}shutdown(){}}class Cp{constructor(e){this.t=e,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let s=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await r(this.currentUser)})},c=a=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>c(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?c(a):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Bn(typeof i.accessToken=="string"),new Sp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Bn(e===null||typeof e=="string"),new ce(e)}}class Rp{constructor(e,n,i){this.type="FirstParty",this.user=ce.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Op{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Rp(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pp{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=s=>{s.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,he("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Bn(typeof n.token=="string"),this.p=n.token,new Dp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Np(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Qa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,i,r,s,o,c,a){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.useFetchStreams=a}}class zt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qs,U;(U=Qs||(Qs={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";function Ti(){return typeof document!="undefined"?document:null}class Mp{constructor(e,n,i=1e3,r=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-i);r>0&&he("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,c=new xr(e,n,o,r,s);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(_e.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(Br("AsyncQueue",`${e}: ${t}`),Qa(t))return new ye(_e.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=ce.UNAUTHENTICATED,this.clientId=Lp.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{he("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(he("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ye(_e.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Up(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const Zs=new Map;function Fp(t,e,n,i){if(e===!0&&i===!0)throw new ye(_e.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(_e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(_e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eo({}),this._settingsFrozen=!1,e instanceof zt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ye(_e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zt(r.options.projectId)}(e))}get app(){if(!this._app)throw new ye(_e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ye(_e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ap;switch(n.type){case"gapi":const i=n.client;return Bn(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Op(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ye(_e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zs.get(e);n&&(he("ComponentProvider","Removing Datastore"),Zs.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Mp(this,"async_queue_retry"),this.Kc=()=>{const n=Ti();n&&he("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ti();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new dt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Qa(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Br("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Lc=!1,i))));return this.Mc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=xr.createAndSchedule(this,e,n,i,s=>this.Wc(s));return this.$c.push(r),r}Gc(){this.Bc&&Ya()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Hp extends Bp{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new xp,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vp(this),this._firestoreClient.terminate()}}function zp(t=wo()){return ir(t,"firestore").getImmediate()}function Vp(t){var e;const n=t._freezeSettings(),i=function(r,s,o,c){return new $p(r,s,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jp(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){si=n})(Gt),gt(new Xe("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new Hp(r,new Cp(n.getProvider("auth-internal")),new Pp(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),Ue(Ys,"3.4.14",t),Ue(Ys,"3.4.14","esm2017")})();const Wp={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:11fa1fda0e14f1ac2dd021",measurementId:"G-27J3QXZ8YR"},Za=mh(Wp),mn=Ef(Za);zp(Za);const qp=new ve;function Gp(){const t={loggedIn:!1,user:null},{subscribe:e,update:n}=zn(t);return{subscribe:e,async signUpWithEmail(i,r){const s=await cd(mn,i,r);n(o=>(o.loggedIn=!0,o.user=s.user,o))},async signInWithEmail(i,r){const s=await ld(mn,i,r);n(o=>(o.loggedIn=!0,o.user=s.user,o))},async signInWithGoogle(){const i=await Ld(mn,qp);ve.credentialFromResult(i).accessToken,i.user,n(s=>(s.loggedIn=!0,s.user=i.user,s))},async signOut(){await ud(mn),n(i=>(i.loggedIn=!1,i.user=null,i))}}}var ki=Gp();function Kp(t){let e,n,i,r,s,o,c;return o=new er({props:{icon:"sign-in",text:"Sign in with Google",title:"Click to sign in with your Google account"}}),o.$on("click",t[2]),{c(){e=v("div"),n=v("p"),n.textContent="You are currently not signed in.",i=$(),r=v("br"),s=$(),V(o.$$.fragment)},m(a,l){R(a,e,l),p(e,n),p(e,i),p(e,r),p(e,s),H(o,e,null),c=!0},p:C,i(a){c||(b(o.$$.fragment,a),c=!0)},o(a){S(o.$$.fragment,a),c=!1},d(a){a&&A(e),z(o)}}}function Xp(t){let e,n,i,r,s,o,c,a,l,u,d=t[0].user.displayName+"",f,g,w,T,O,k=t[0].user.email+"",m,y,M,I;return w=new er({props:{icon:"sign-out",text:"Sign out",title:"Click to sign out"}}),w.$on("click",t[1]),{c(){e=v("div"),n=v("div"),i=v("h2"),i.textContent="Signed in as",r=$(),s=v("div"),o=v("img"),a=$(),l=v("div"),u=v("span"),f=J(d),g=$(),V(w.$$.fragment),T=$(),O=v("span"),m=J(k),y=$(),M=v("div"),M.innerHTML=`<h2>Your supertags</h2> 
      <div class="supertags"></div>`,h(o,"class","profile-picture svelte-7akv9c"),Tn(o.src,c=t[0].user.photoURL)||h(o,"src",c),h(o,"alt","Profile"),h(u,"class","svelte-7akv9c"),h(l,"class","name-area svelte-7akv9c"),h(s,"class","overview svelte-7akv9c"),h(e,"class","account-view svelte-7akv9c")},m(D,P){R(D,e,P),p(e,n),p(n,i),p(n,r),p(n,s),p(s,o),p(s,a),p(s,l),p(l,u),p(u,f),p(l,g),H(w,l,null),p(s,T),p(s,O),p(O,m),p(e,y),p(e,M),I=!0},p(D,P){(!I||P&1&&!Tn(o.src,c=D[0].user.photoURL))&&h(o,"src",c),(!I||P&1)&&d!==(d=D[0].user.displayName+"")&&le(f,d),(!I||P&1)&&k!==(k=D[0].user.email+"")&&le(m,k)},i(D){I||(b(w.$$.fragment,D),I=!0)},o(D){S(w.$$.fragment,D),I=!1},d(D){D&&A(e),z(w)}}}function Jp(t){let e,n,i,r;const s=[Xp,Kp],o=[];function c(a,l){return a[0].loggedIn?0:1}return e=c(t),n=o[e]=s[e](t),{c(){n.c(),i=xn()},m(a,l){o[e].m(a,l),R(a,i,l),r=!0},p(a,[l]){let u=e;e=c(a),e===u?o[e].p(a,l):(de(),S(o[u],1,1,()=>{o[u]=null}),fe(),n=o[e],n?n.p(a,l):(n=o[e]=s[e](a),n.c()),b(n,1),n.m(i.parentNode,i))},i(a){r||(b(n),r=!0)},o(a){S(n),r=!1},d(a){o[e].d(a),a&&A(i)}}}function Yp(t,e,n){let i;return je(t,ki,o=>n(0,i=o)),[i,()=>ki.signOut(),()=>ki.signInWithGoogle()]}class Qp extends K{constructor(e){super(),G(this,e,Yp,Jp,q,{})}}function Zp(t){let e;return{c(){e=v("p"),e.textContent="You got lost..."},m(n,i){R(n,e,i)},i:C,o:C,d(n){n&&A(e)}}}function eg(t){let e,n;return e=new nu({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function tg(t){let e,n;return e=new eu({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function ng(t){let e,n;return e=new Qp({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function ig(t){let e,n;return e=new Yl({}),{c(){V(e.$$.fragment)},m(i,r){H(e,i,r),n=!0},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){z(e,i)}}}function rg(t){let e,n,i,r,s,o;e=new Ec({});const c=[ig,ng,tg,eg,Zp],a=[];function l(u,d){return u[0]==="search"?0:u[0]==="account"?1:u[0]==="settings"?2:u[0]==="help"?3:4}return r=l(t),s=a[r]=c[r](t),{c(){V(e.$$.fragment),n=$(),i=v("main"),s.c(),h(i,"class","svelte-10lp10b")},m(u,d){H(e,u,d),R(u,n,d),R(u,i,d),a[r].m(i,null),o=!0},p(u,[d]){let f=r;r=l(u),r!==f&&(de(),S(a[f],1,1,()=>{a[f]=null}),fe(),s=a[r],s||(s=a[r]=c[r](u),s.c()),b(s,1),s.m(i,null))},i(u){o||(b(e.$$.fragment,u),b(s),o=!0)},o(u){S(e.$$.fragment,u),S(s),o=!1},d(u){z(e,u),u&&A(n),u&&A(i),a[r].d()}}}function sg(t,e,n){let i,r;je(t,Pi,o=>n(1,i=o)),je(t,ct,o=>n(0,r=o));const s=o=>o==="dark"?"light":"dark";return t.$$.update=()=>{t.$$.dirty&2&&document.body.classList.replace(s(i),i)},[r,i]}class og extends K{constructor(e){super(),G(this,e,sg,rg,q,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function to(t,e){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(r){n(r.data)},t.postMessage(e,[i.port2])})}function ag(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function no(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function cg(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(r,s){if(r){if(typeof r=="string")return no(r,s);var o=Object.prototype.toString.call(r).slice(8,-1);return o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set"?Array.from(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?no(r,s):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Si=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Ai(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Tt=function(t,e){this.type=t,Object.assign(this,e)};function vn(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function lg(){}var ug={type:"SKIP_WAITING"};function io(t,e){if(!e)return t&&t.then?t.then(lg):Promise.resolve()}var hg=function(t){var e,n;function i(c,a){var l,u;return a===void 0&&(a={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Si,l.en=new Si,l.on=new Si,l.un=0,l.an=new Set,l.cn=function(){var d=l.fn,f=d.installing;l.tn>0||!Ai(f.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=f,d.removeEventListener("updatefound",l.cn)):(l.hn=f,l.an.add(f),l.rn.resolve(f)),++l.tn,f.addEventListener("statechange",l.ln)},l.ln=function(d){var f=l.fn,g=d.target,w=g.state,T=g===l.vn,O={sw:g,isExternal:T,originalEvent:d};!T&&l.mn&&(O.isUpdate=!0),l.dispatchEvent(new Tt(w,O)),w==="installed"?l.wn=self.setTimeout(function(){w==="installed"&&f.waiting===g&&l.dispatchEvent(new Tt("waiting",O))},200):w==="activating"&&(clearTimeout(l.wn),T||l.en.resolve(g))},l.dn=function(d){var f=l.hn,g=f!==navigator.serviceWorker.controller;l.dispatchEvent(new Tt("controlling",{isExternal:g,originalEvent:d,sw:f,isUpdate:l.mn})),g||l.on.resolve(f)},l.gn=(u=function(d){var f=d.data,g=d.ports,w=d.source;return vn(l.getSW(),function(){l.an.has(w)&&l.dispatchEvent(new Tt("message",{data:f,originalEvent:d,ports:g,sw:w}))})},function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];try{return Promise.resolve(u.apply(this,d))}catch(g){return Promise.reject(g)}}),l.sn=c,l.nn=a,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r,s,o=i.prototype;return o.register=function(c){var a=(c===void 0?{}:c).immediate,l=a!==void 0&&a;try{var u=this;return function(d,f){var g=d();return g&&g.then?g.then(f):f(g)}(function(){if(!l&&document.readyState!=="complete")return io(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),vn(u.bn(),function(d){u.fn=d,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var f=u.fn.waiting;return f&&Ai(f.scriptURL,u.sn.toString())&&(u.hn=f,Promise.resolve().then(function(){u.dispatchEvent(new Tt("waiting",{sw:f,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(d){return Promise.reject(d)}},o.update=function(){try{return this.fn?io(this.fn.update()):void 0}catch(c){return Promise.reject(c)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(c){try{return vn(this.getSW(),function(a){return to(a,c)})}catch(a){return Promise.reject(a)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&to(this.fn.waiting,ug)},o.pn=function(){var c=navigator.serviceWorker.controller;return c&&Ai(c.scriptURL,this.sn.toString())?c:void 0},o.bn=function(){try{var c=this;return function(a,l){try{var u=a()}catch(d){return l(d)}return u&&u.then?u.then(void 0,l):u}(function(){return vn(navigator.serviceWorker.register(c.sn,c.nn),function(a){return c.un=performance.now(),a})},function(a){throw a})}catch(a){return Promise.reject(a)}},r=i,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&ag(r.prototype,s),i}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,i){this.Sn(n).add(i)},e.removeEventListener=function(n,i){this.Sn(n).delete(i)},e.dispatchEvent=function(n){n.target=this;for(var i,r=cg(this.Sn(n.type));!(i=r()).done;)(0,i.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function dg(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:r,onRegisterError:s}=t;let o;const c=async(a=!0)=>{};return"serviceWorker"in navigator&&(o=new hg("/kurosearch/sw.js",{scope:"/kurosearch/",type:"classic"}),o.addEventListener("activated",a=>{a.isUpdate?window.location.reload():i==null||i()}),o.register({immediate:e}).then(a=>{r==null||r(a)}).catch(a=>{s==null||s(a)})),c}new og({target:document.getElementById("app")});dg();
