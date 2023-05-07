(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function E(){}function Op(t,e){for(const n in e)t[n]=e[n];return t}function Pp(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Tu(t){return t()}function oc(){return Object.create(null)}function me(t){t.forEach(Tu)}function Gr(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Zs;function Qt(t,e){return Zs||(Zs=document.createElement("a")),Zs.href=e,t===Zs.href}function Lp(t){return Object.keys(t).length===0}function Mp(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(t,e,n){t.$$.on_destroy.push(Mp(e,n))}function Eu(t,e,n,s){if(t){const r=ku(t,e,n,s);return t[0](r)}}function ku(t,e,n,s){return t[1]&&s?Op(n.ctx.slice(),t[1](s(e))):n.ctx}function Su(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Au(t,e,n,s,r,i){if(r){const o=ku(e,n,s,i);t.p(o,r)}}function Cu(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function it(t){return t??""}function oS(t,e,n){return t.set(n),e}function y(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function ln(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function re(t){return document.createTextNode(t)}function O(){return re(" ")}function Je(){return re("")}function B(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Du(t){return function(e){return e.preventDefault(),t.call(this,e)}}function xp(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ru(t){return t===""?null:+t}function Up(t){return Array.from(t.childNodes)}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e){t.value=e??""}function Fp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ac(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Vp(t){const e=t.querySelector(":checked");return e&&e.__value}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function jp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function cc(t,e){return new t(e)}let as;function ut(t){as=t}function Wr(){if(!as)throw new Error("Function called outside component initialization");return as}function Ss(t){Wr().$$.on_mount.push(t)}function Qr(t){Wr().$$.on_destroy.push(t)}function Ke(){const t=Wr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=jp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Bp(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const fn=[],Qe=[];let _n=[];const io=[],qp=Promise.resolve();let oo=!1;function zp(){oo||(oo=!0,qp.then(Vo))}function wr(t){_n.push(t)}function Jn(t){io.push(t)}const Li=new Set;let un=0;function Vo(){if(un!==0)return;const t=as;do{try{for(;un<fn.length;){const e=fn[un];un++,ut(e),Hp(e.$$)}}catch(e){throw fn.length=0,un=0,e}for(ut(null),fn.length=0,un=0;Qe.length;)Qe.pop()();for(let e=0;e<_n.length;e+=1){const n=_n[e];Li.has(n)||(Li.add(n),n())}_n.length=0}while(fn.length);for(;io.length;)io.pop()();oo=!1,Li.clear(),ut(t)}function Hp(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(wr)}}function Kp(t){const e=[],n=[];_n.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),_n=e}const lr=new Set;let Ut;function ce(){Ut={r:0,c:[],p:Ut}}function le(){Ut.r||me(Ut.c),Ut=Ut.p}function _(t,e){t&&t.i&&(lr.delete(t),t.i(e))}function b(t,e,n,s){if(t&&t.o){if(lr.has(t))return;lr.add(t),Ut.c.push(()=>{lr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function br(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ce(),b(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),le())}):e.block.d(1),l.c(),_(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Vo()}if(Pp(t)){const r=Wr();if(t.then(i=>{ut(r),s(e.then,1,e.value,i),ut(null)},i=>{if(ut(r),s(e.catch,2,e.error,i),ut(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Nu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Zn(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function M(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||wr(()=>{const o=t.$$.on_mount.map(Tu).filter(Gr);t.$$.on_destroy?t.$$.on_destroy.push(...o):me(o),t.$$.on_mount=[]}),i.forEach(wr)}function x(t,e){const n=t.$$;n.fragment!==null&&(Kp(n.after_update),me(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gp(t,e){t.$$.dirty[0]===-1&&(fn.push(t),zp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,r,i,o,a=[-1]){const c=as;ut(t);const l=t.$$={fragment:null,ctx:[],props:i,update:E,not_equal:r,bound:oc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:oc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const v=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=v)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](v),u&&Gp(t,h)),d}):[],l.update(),u=!0,me(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Up(e.target);l.fragment&&l.fragment.l(h),h.forEach(S)}else l.fragment&&l.fragment.c();e.intro&&_(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),Vo()}ut(c)}class W{$destroy(){x(this,1),this.$destroy=E}$on(e,n){if(!Gr(n))return E;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Lp(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hn=[];function As(t,e=E){let n;const s=new Set;function r(a){if(H(t,a)&&(t=a,n)){const c=!hn.length;for(const l of s)l[1](),hn.push(l,t);if(c){for(let l=0;l<hn.length;l+=2)hn[l][0](hn[l+1]);hn.length=0}}}function i(a){r(a(t))}function o(a,c=E){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||E),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Wp=Object.freeze(["search","account","settings","help"]),Qp=t=>Wp.includes(t),Yp=()=>{const{subscribe:t,set:e}=As("search");return{subscribe:t,navigateTo(n){if(!Qp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},yn=Yp();function Xp(t){let e,n,s,r,i,o;return{c(){e=ln("svg"),n=ln("g"),s=ln("path"),r=ln("defs"),i=ln("clipPath"),o=ln("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){A(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:E,i:E,o:E,d(a){a&&S(e)}}}class Jp extends W{constructor(e){super(),G(this,e,null,Xp,H,{})}}/**
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
 */const $u=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($u(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new eg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(t){const e=$u(t);return Ou.encodeByteArray(e,!0)},Ir=function(t){return tg(t).replace(/\./g,"")},Pu=function(t){try{return Ou.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ng(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sg=()=>ng().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ig=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},jo=()=>{try{return sg()||rg()||ig()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lu=t=>{var e,n;return(n=(e=jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},og=t=>{const e=Lu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var t;return(t=jo())===null||t===void 0?void 0:t.config},Mu=t=>{var e;return(e=jo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ir(JSON.stringify(n)),Ir(JSON.stringify(o)),a].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function xu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function fg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pg="FirebaseError";class Ze extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pg,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ze(r,a,s)}}function gg(t,e){return t.replace(mg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const mg=/\{\$([^}]+)}/g;function yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lc(i)&&lc(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lc(t){return t!==null&&typeof t=="object"}/**
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
 */function Cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vg(t,e){const n=new _g(t,e);return n.subscribe.bind(n)}class _g{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Mi),r.error===void 0&&(r.error=Mi),r.complete===void 0&&(r.complete=Mi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mi(){}/**
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
 */const bg=1e3,Ig=2,Tg=4*60*60*1e3,Eg=.5;function uc(t,e=bg,n=Ig){const s=e*Math.pow(n,t),r=Math.round(Eg*s*(Math.random()-.5)*2);return Math.min(Tg,s+r)}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class Ye{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class kg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===Mt?void 0:t}function Ag(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Dg={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Rg=te.INFO,Ng={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},$g=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ng[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yr{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Og=(t,e)=>e.some(n=>t instanceof n);let hc,dc;function Pg(){return hc||(hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lg(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vu=new WeakMap,ao=new WeakMap,ju=new WeakMap,xi=new WeakMap,Bo=new WeakMap;function Mg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vu.set(n,t)}).catch(()=>{}),Bo.set(e,t),e}function xg(t){if(ao.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ao.set(t,e)}let co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ao.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ju.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ug(t){co=t(co)}function Fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ui(this),e,...n);return ju.set(s,e.sort?e.sort():[e]),At(s)}:Lg().includes(t)?function(...e){return t.apply(Ui(this),e),At(Vu.get(this))}:function(...e){return At(t.apply(Ui(this),e))}}function Vg(t){return typeof t=="function"?Fg(t):(t instanceof IDBTransaction&&xg(t),Og(t,Pg())?new Proxy(t,co):t)}function At(t){if(t instanceof IDBRequest)return Mg(t);if(xi.has(t))return xi.get(t);const e=Vg(t);return e!==t&&(xi.set(t,e),Bo.set(e,t)),e}const Ui=t=>Bo.get(t);function Bu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return s&&o.addEventListener("upgradeneeded",c=>{s(At(o.result),c.oldVersion,c.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const jg=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],Fi=new Map;function fc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Bg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Fi.set(e,i),i}Ug(t=>({...t,get:(e,n,s)=>fc(e,n)||t.get(e,n,s),has:(e,n)=>!!fc(e,n)||t.has(e,n)}));/**
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
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",pc="0.9.5";/**
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
 */const Yt=new Yr("@firebase/app"),Hg="@firebase/app-compat",Kg="@firebase/analytics-compat",Gg="@firebase/analytics",Wg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Xg="@firebase/auth-compat",Jg="@firebase/database",Zg="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",sm="@firebase/installations-compat",rm="@firebase/messaging",im="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",cm="@firebase/remote-config",lm="@firebase/remote-config-compat",um="@firebase/storage",hm="@firebase/storage-compat",dm="@firebase/firestore",fm="@firebase/firestore-compat",pm="firebase",gm="9.18.0";/**
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
 */const uo="[DEFAULT]",mm={[lo]:"fire-core",[Hg]:"fire-core-compat",[Gg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Wg]:"fire-app-check-compat",[Yg]:"fire-auth",[Xg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Zg]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[sm]:"fire-iid-compat",[rm]:"fire-fcm",[im]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[cm]:"fire-rc",[lm]:"fire-rc-compat",[um]:"fire-gcs",[hm]:"fire-gcs-compat",[dm]:"fire-fst",[fm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
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
 */const Tr=new Map,ho=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ot(t){const e=t.name;if(ho.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,t);for(const n of Tr.values())ym(n,t);return!0}function rn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new sn("app","Firebase",vm);/**
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
 */class _m{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=gm;function qu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=ag()),!n)throw Ct.create("no-options");const i=Tr.get(r);if(i){if(cs(n,i.options)&&cs(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new Cg(r);for(const c of ho.values())o.addComponent(c);const a=new _m(n,s,o);return Tr.set(r,a),a}function qo(t=uo){const e=Tr.get(t);if(!e&&t===uo)return qu();if(!e)throw Ct.create("no-app",{appName:t});return e}function qe(t,e,n){var s;let r=(s=mm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}ot(new Ye(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wm="firebase-heartbeat-database",bm=1,ls="firebase-heartbeat-store";let Vi=null;function zu(){return Vi||(Vi=Bu(wm,bm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ls)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),Vi}async function Im(t){try{return(await zu()).transaction(ls).objectStore(ls).get(Hu(t))}catch(e){if(e instanceof Ze)Yt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function gc(t,e){try{const s=(await zu()).transaction(ls,"readwrite");return await s.objectStore(ls).put(e,Hu(t)),s.done}catch(n){if(n instanceof Ze)Yt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function Hu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tm=1024,Em=30*24*60*60*1e3;class km{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Am(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mc(),{heartbeatsToSend:n,unsentEntries:s}=Sm(this._heartbeatsCache.heartbeats),r=Ir(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function mc(){return new Date().toISOString().substring(0,10)}function Sm(t,e=Tm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Im(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yc(t){return Ir(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cm(t){ot(new Ye("platform-logger",e=>new qg(e),"PRIVATE")),ot(new Ye("heartbeat",e=>new km(e),"PRIVATE")),qe(lo,pc,t),qe(lo,pc,"esm2017"),qe("fire-js","")}Cm("");function zo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=Ku,Gu=new sn("auth","Firebase",Ku());/**
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
 */const vc=new Yr("@firebase/auth");function ur(t,...e){vc.logLevel<=te.ERROR&&vc.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function He(t,...e){throw Ho(t,...e)}function tt(t,...e){return Ho(t,...e)}function Wu(t,e,n){const s=Object.assign(Object.assign({},Dm()),{[e]:n});return new sn("auth","Firebase",s).create(e,{appName:t.name})}function Rm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&He(t,"argument-error"),Wu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ho(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Gu.create(t,...e)}function j(t,e,...n){if(!t)throw Ho(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function gt(t,e){t||ht(e)}/**
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
 */const _c=new Map;function dt(t){gt(t instanceof Function,"Expected a class definition");let e=_c.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_c.set(t,e),e)}/**
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
 */function Nm(t,e){const n=rn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(cs(i,e??{}))return r;He(r,"already-initialized")}return n.initialize({options:e})}function $m(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Om(){return wc()==="http:"||wc()==="https:"}function wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Pm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Om()||xu()||"connection"in navigator)?navigator.onLine:!0}function Lm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rs{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=ug()||hg()}get(){return Pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ko(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xm=new Rs(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $s(t,e,n,s,r={}){return Yu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Cs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qu.fetch()(Xu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mm),e);try{const r=new Um(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw er(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw er(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw er(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw er(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wu(t,u,l);He(t,u)}}catch(r){if(r instanceof Ze)throw r;He(t,"internal-error",{message:String(r)})}}async function Os(t,e,n,s,r={}){const i=await $s(t,e,n,s,r);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ko(t.config,r):`${t.config.apiScheme}://${r}`}class Um{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function er(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Fm(t,e){return $s(t,"POST","/v1/accounts:delete",e)}async function Vm(t,e){return $s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jm(t,e=!1){const n=_e(t),s=await n.getIdToken(e),r=Go(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:es(ji(r.auth_time)),issuedAtTime:es(ji(r.iat)),expirationTime:es(ji(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(t){return Number(t)*1e3}function Go(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pu(n);return r?JSON.parse(r):(ur("Failed to decode base64 JWT payload"),null)}catch(r){return ur("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Bm(t){const e=Go(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ze&&qm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,s=await t.getIdToken(),r=await us(t,Vm(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gm(i.providerUserInfo):[],a=Km(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ju(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hm(t){const e=_e(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Km(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gm(t){return t.map(e=>{var{providerId:n}=e,s=zo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Wm(t,e){const n=await Yu(t,{},async()=>{const s=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Xu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Wm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new hs;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function It(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ju(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jm(this,e)}reload(){return Hm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await us(this,Fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:$,isAnonymous:N,providerData:R,stsTokenManager:J}=n;j(k&&J,e,"internal-error");const be=hs.fromJSON(this.name,J);j(typeof k=="string",e,"internal-error"),It(h,e.name),It(d,e.name),j(typeof $=="boolean",e,"internal-error"),j(typeof N=="boolean",e,"internal-error"),It(p,e.name),It(v,e.name),It(g,e.name),It(m,e.name),It(D,e.name),It(I,e.name);const Fe=new zt({uid:k,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:p,tenantId:g,stsTokenManager:be,createdAt:D,lastLoginAt:I});return R&&Array.isArray(R)&&(Fe.providerData=R.map(se=>Object.assign({},se))),m&&(Fe._redirectEventId=m),Fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new hs;r.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Er(i),i}}/**
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
 */class Zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zu.type="NONE";const bc=Zu;/**
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
 */function hr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=hr(this.userKey,r.apiKey,i),this.fullPersistenceKey=hr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wn(dt(bc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||dt(bc);const o=hr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,s))}}/**
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
 */function Ic(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rh(e))return"Blackberry";if(ih(e))return"Webos";if(Wo(e))return"Safari";if((e.includes("chrome/")||th(e))&&!e.includes("edge/"))return"Chrome";if(sh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function eh(t=Le()){return/firefox\//i.test(t)}function Wo(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function th(t=Le()){return/crios\//i.test(t)}function nh(t=Le()){return/iemobile/i.test(t)}function sh(t=Le()){return/android/i.test(t)}function rh(t=Le()){return/blackberry/i.test(t)}function ih(t=Le()){return/webos/i.test(t)}function Xr(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qm(t=Le()){var e;return Xr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ym(){return dg()&&document.documentMode===10}function oh(t=Le()){return Xr(t)||sh(t)||ih(t)||rh(t)||/windows phone/i.test(t)||nh(t)}function Xm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ah(t,e=[]){let n;switch(t){case"Browser":n=Ic(Le());break;case"Worker":n=`${Ic(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${s}`}/**
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
 */class Jm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Zm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tc(this),this.idTokenSubscription=new Tc(this),this.beforeStateQueue=new Jm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_e(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Pn(t){return _e(t)}class Tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=vg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ey(t,e,n){const s=Pn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ch(e),{host:o,port:a}=ty(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ny()}function ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ty(t){const e=ch(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ec(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ec(o)}}}function Ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ny(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function sy(t,e){return $s(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ry(t,e){return Os(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
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
 */async function iy(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function oy(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
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
 */class ds extends Qo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ds(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ds(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ry(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oy(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bn(t,e){return Os(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
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
 */const ay="http://localhost";class Xt extends Qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=zo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:ay,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cs(n)}return e}}/**
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
 */function cy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(t){const e=Hn(Kn(t)).link,n=e?Hn(Kn(e)).deep_link_id:null,s=Hn(Kn(t)).deep_link_id;return(s?Hn(Kn(s)).link:null)||s||n||e||t}class Yo{constructor(e){var n,s,r,i,o,a;const c=Hn(Kn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=cy((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ly(e);try{return new Yo(n)}catch{return null}}}/**
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
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,n){return ds._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Yo.parseLink(n);return j(s,"argument-error"),ds._fromEmailAndCode(e,s.code,s.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ps extends Xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends Ps{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return lt.credential(n,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class Et extends Ps{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class kt extends Ps{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function uy(t,e){return Os(t,"POST","/v1/accounts:signUp",Ns(t,e))}/**
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
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zt._fromIdTokenResponse(e,s,r),o=kc(s);return new Jt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=kc(s);return new Jt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function kc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kr extends Ze{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new kr(e,n,s,r)}}function lh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,s):i})}async function hy(t,e,n=!1){const s=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",s)}/**
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
 */async function dy(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await us(t,lh(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Go(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Jt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(s,"user-mismatch"),i}}/**
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
 */async function uh(t,e,n=!1){const s="signIn",r=await lh(t,s,e),i=await Jt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function fy(t,e){return uh(Pn(t),e)}async function py(t,e,n){const s=Pn(t),r=await uy(s,{returnSecureToken:!0,email:e,password:n}),i=await Jt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gy(t,e,n){return fy(_e(t),Ln.credential(e,n))}/**
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
 */function my(t,e){return _e(t).setPersistence(e)}function yy(t,e,n,s){return _e(t).onIdTokenChanged(e,n,s)}function vy(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function hh(t,e,n,s){return _e(t).onAuthStateChanged(e,n,s)}function _y(t){return _e(t).signOut()}const Sr="__sak";/**
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
 */class dh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wy(){const t=Le();return Wo(t)||Xr(t)}const by=1e3,Iy=10;class fh extends dh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wy()&&Xm(),this.fallbackToPolling=oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Ym()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Iy):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},by)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fh.type="LOCAL";const ph=fh;/**
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
 */class gh extends dh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gh.type="SESSION";const mh=gh;/**
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
 */function Ty(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ty(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jr.receivers=[];/**
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
 */function Jo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ey{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Jo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function ky(t){nt().location.href=t}/**
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
 */function yh(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ay(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cy(){return yh()?self:null}/**
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
 */const vh="firebaseLocalStorageDb",Dy=1,Ar="firebaseLocalStorage",_h="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(t,e){return t.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function Ry(){const t=indexedDB.deleteDatabase(vh);return new Ls(t).toPromise()}function po(){const t=indexedDB.open(vh,Dy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ar,{keyPath:_h})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ar)?e(s):(s.close(),await Ry(),e(await po()))})})}async function Sc(t,e,n){const s=Zr(t,!0).put({[_h]:e,value:n});return new Ls(s).toPromise()}async function Ny(t,e){const n=Zr(t,!1).get(e),s=await new Ls(n).toPromise();return s===void 0?null:s.value}function Ac(t,e){const n=Zr(t,!0).delete(e);return new Ls(n).toPromise()}const $y=800,Oy=3;class wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Oy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jr._getInstance(Cy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sy(),!this.activeServiceWorker)return;this.sender=new Ey(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ay()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await Sc(e,Sr,"1"),await Ac(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ny(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ac(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Zr(r,!1).getAll();return new Ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wh.type="LOCAL";const Py=wh;/**
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
 */function Ly(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function My(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ly().appendChild(s)})}function xy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rs(3e4,6e4);/**
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
 */function bh(t,e){return e?dt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zo extends Qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uy(t){return uh(t.auth,new Zo(t),t.bypassAuthState)}function Fy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),dy(n,new Zo(t),t.bypassAuthState)}async function Vy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),hy(n,new Zo(t),t.bypassAuthState)}/**
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
 */class Ih{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uy;case"linkViaPopup":case"linkViaRedirect":return Vy;case"reauthViaPopup":case"reauthViaRedirect":return Fy;default:He(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jy=new Rs(2e3,1e4);async function By(t,e,n){const s=Pn(t);Rm(t,e,Xo);const r=bh(s,n);return new Ft(s,"signInViaPopup",e,r).executeNotNull()}class Ft extends Ih{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jy.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const qy="pendingRedirect",dr=new Map;class zy extends Ih{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const s=await Hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hy(t,e){const n=Wy(e),s=Gy(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Ky(t,e){dr.set(t._key(),e)}function Gy(t){return dt(t._redirectPersistence)}function Wy(t){return hr(qy,t.config.apiKey,t.name)}async function Qy(t,e,n=!1){const s=Pn(t),r=bh(s,e),o=await new zy(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Yy=10*60*1e3;class Xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Th(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cc(e))}saveEventToCache(e){this.cachedEventUids.add(Cc(e)),this.lastProcessedEventTime=Date.now()}}function Cc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Th({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Th(t);default:return!1}}/**
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
 */async function Zy(t,e={}){return $s(t,"GET","/v1/projects",e)}/**
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
 */const ev=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tv=/^https?/;async function nv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zy(t);for(const n of e)try{if(sv(n))return}catch{}He(t,"unauthorized-domain")}function sv(t){const e=fo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tv.test(n))return!1;if(ev.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const rv=new Rs(3e4,6e4);function Dc(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iv(t){return new Promise((e,n)=>{var s,r,i;function o(){Dc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dc(),n(tt(t,"network-request-failed"))},timeout:rv.get()})}if(!((r=(s=nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=xy("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},My(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fr=null,e})}let fr=null;function ov(t){return fr=fr||iv(t),fr}/**
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
 */const av=new Rs(5e3,15e3),cv="__/auth/iframe",lv="emulator/auth/iframe",uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dv(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ko(e,lv):`https://${t.config.authDomain}/${cv}`,s={apiKey:e.apiKey,appName:t.name,v:Ds},r=hv.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Cs(s).slice(1)}`}async function fv(t){const e=await ov(t),n=nt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:dv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},av.get());function c(){nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,mv=600,yv="_blank",vv="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _v(t,e,n,s=gv,r=mv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Le().toLowerCase();n&&(a=th(l)?yv:n),eh(l)&&(e=e||vv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(Qm(l)&&a!=="_self")return wv(e||"",a),new Rc(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Rc(h)}function wv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const bv="__/auth/handler",Iv="emulator/auth/handler";function Nc(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ds,eventId:r};if(e instanceof Xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ps){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Tv(t)}?${Cs(a).slice(1)}`}function Tv({config:t}){return t.emulator?Ko(t,Iv):`https://${t.authDomain}/${bv}`}/**
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
 */const Bi="webStorageSupport";class Ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mh,this._completeRedirectFn=Qy,this._overrideRedirectResult=Ky}async _openPopup(e,n,s,r){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nc(e,n,s,fo(),r);return _v(e,o,Jo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),ky(Nc(e,n,s,fo(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fv(e),s=new Xy(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bi,{type:Bi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Bi];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oh()||Wo()||Xr()}}const kv=Ev;var $c="@firebase/auth",Oc="0.21.5";/**
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
 */class Sv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Av(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cv(t){ot(new Ye("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ah(t)},u=new Zm(a,c,l);return $m(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ot(new Ye("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(s=>new Sv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe($c,Oc,Av(t)),qe($c,Oc,"esm2017")}/**
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
 */const Dv=5*60,Rv=Mu("authIdTokenMaxAge")||Dv;let Pc=null;const Nv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Rv)return;const r=n==null?void 0:n.token;Pc!==r&&(Pc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $v(t=qo()){const e=rn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nm(t,{popupRedirectResolver:kv,persistence:[Py,ph,mh]}),s=Mu("authTokenSyncURL");if(s){const i=Nv(s);vy(n,i,()=>i(n.currentUser)),yy(n,o=>i(o))}const r=Lu("auth");return r&&ey(n,`http://${r}`),n}Cv("Browser");const Eh="@firebase/installations",ea="0.6.4";/**
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
 */const kh=1e4,Sh=`w:${ea}`,Ah="FIS_v2",Ov="https://firebaseinstallations.googleapis.com/v1",Pv=60*60*1e3,Lv="installations",Mv="Installations";/**
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
 */const xv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Zt=new sn(Lv,Mv,xv);function Ch(t){return t instanceof Ze&&t.code.includes("request-failed")}/**
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
 */function Dh({projectId:t}){return`${Ov}/projects/${t}/installations`}function Rh(t){return{token:t.token,requestStatus:2,expiresIn:Fv(t.expiresIn),creationTime:Date.now()}}async function Nh(t,e){const s=(await e.json()).error;return Zt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $h({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Uv(t,{refreshToken:e}){const n=$h(t);return n.append("Authorization",Vv(e)),n}async function Oh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Fv(t){return Number(t.replace("s","000"))}function Vv(t){return`${Ah} ${t}`}/**
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
 */async function jv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Dh(t),r=$h(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ah,appId:t.appId,sdkVersion:Sh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Oh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Rh(l.authToken)}}else throw await Nh("Create Installation",c)}/**
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
 */function Ph(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Bv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qv=/^[cdef][\w-]{21}$/,go="";function zv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Hv(t);return qv.test(n)?n:go}catch{return go}}function Hv(t){return Bv(t).substr(0,22)}/**
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
 */function ei(t){return`${t.appName}!${t.appId}`}/**
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
 */const Lh=new Map;function Mh(t,e){const n=ei(t);xh(n,e),Kv(n,e)}function xh(t,e){const n=Lh.get(t);if(n)for(const s of n)s(e)}function Kv(t,e){const n=Gv();n&&n.postMessage({key:t,fid:e}),Wv()}let Vt=null;function Gv(){return!Vt&&"BroadcastChannel"in self&&(Vt=new BroadcastChannel("[Firebase] FID Change"),Vt.onmessage=t=>{xh(t.data.key,t.data.fid)}),Vt}function Wv(){Lh.size===0&&Vt&&(Vt.close(),Vt=null)}/**
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
 */const Qv="firebase-installations-database",Yv=1,en="firebase-installations-store";let qi=null;function ta(){return qi||(qi=Bu(Qv,Yv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(en)}}})),qi}async function Cr(t,e){const n=ei(t),r=(await ta()).transaction(en,"readwrite"),i=r.objectStore(en),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Mh(t,e.fid),e}async function Uh(t){const e=ei(t),s=(await ta()).transaction(en,"readwrite");await s.objectStore(en).delete(e),await s.done}async function ti(t,e){const n=ei(t),r=(await ta()).transaction(en,"readwrite"),i=r.objectStore(en),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Mh(t,a.fid),a}/**
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
 */async function na(t){let e;const n=await ti(t.appConfig,s=>{const r=Xv(s),i=Jv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===go?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Xv(t){const e=t||{fid:zv(),registrationStatus:0};return Fh(e)}function Jv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Zt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Zv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:e_(t)}:{installationEntry:e}}async function Zv(t,e){try{const n=await jv(t,e);return Cr(t.appConfig,n)}catch(n){throw Ch(n)&&n.customData.serverCode===409?await Uh(t.appConfig):await Cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function e_(t){let e=await Lc(t.appConfig);for(;e.registrationStatus===1;)await Ph(100),e=await Lc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await na(t);return s||n}return e}function Lc(t){return ti(t,e=>{if(!e)throw Zt.create("installation-not-found");return Fh(e)})}function Fh(t){return t_(t)?{fid:t.fid,registrationStatus:0}:t}function t_(t){return t.registrationStatus===1&&t.registrationTime+kh<Date.now()}/**
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
 */async function n_({appConfig:t,heartbeatServiceProvider:e},n){const s=s_(t,n),r=Uv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Sh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Oh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Rh(l)}else throw await Nh("Generate Auth Token",c)}function s_(t,{fid:e}){return`${Dh(t)}/${e}/authTokens:generate`}/**
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
 */async function sa(t,e=!1){let n;const s=await ti(t.appConfig,i=>{if(!Vh(i))throw Zt.create("not-registered");const o=i.authToken;if(!e&&o_(o))return i;if(o.requestStatus===1)return n=r_(t,e),i;{if(!navigator.onLine)throw Zt.create("app-offline");const a=c_(i);return n=i_(t,a),a}});return n?await n:s.authToken}async function r_(t,e){let n=await Mc(t.appConfig);for(;n.authToken.requestStatus===1;)await Ph(100),n=await Mc(t.appConfig);const s=n.authToken;return s.requestStatus===0?sa(t,e):s}function Mc(t){return ti(t,e=>{if(!Vh(e))throw Zt.create("not-registered");const n=e.authToken;return l_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function i_(t,e){try{const n=await n_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Cr(t.appConfig,s),n}catch(n){if(Ch(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Uh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cr(t.appConfig,s)}throw n}}function Vh(t){return t!==void 0&&t.registrationStatus===2}function o_(t){return t.requestStatus===2&&!a_(t)}function a_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Pv}function c_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function l_(t){return t.requestStatus===1&&t.requestTime+kh<Date.now()}/**
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
 */async function u_(t){const e=t,{installationEntry:n,registrationPromise:s}=await na(e);return s?s.catch(console.error):sa(e).catch(console.error),n.fid}/**
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
 */async function h_(t,e=!1){const n=t;return await d_(n),(await sa(n,e)).token}async function d_(t){const{registrationPromise:e}=await na(t);e&&await e}/**
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
 */function f_(t){if(!t||!t.options)throw zi("App Configuration");if(!t.name)throw zi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw zi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function zi(t){return Zt.create("missing-app-config-values",{valueName:t})}/**
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
 */const jh="installations",p_="installations-internal",g_=t=>{const e=t.getProvider("app").getImmediate(),n=f_(e),s=rn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},m_=t=>{const e=t.getProvider("app").getImmediate(),n=rn(e,jh).getImmediate();return{getId:()=>u_(n),getToken:r=>h_(n,r)}};function y_(){ot(new Ye(jh,g_,"PUBLIC")),ot(new Ye(p_,m_,"PRIVATE"))}y_();qe(Eh,ea);qe(Eh,ea,"esm2017");/**
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
 */const Dr="analytics",v_="firebase_id",__="origin",w_=60*1e3,b_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ve=new Yr("@firebase/analytics");/**
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
 */function qh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function I_(t,e){const n=document.createElement("script");n.src=`${Bh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function T_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function E_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await qh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ve.error(a)}t("config",r,i)}async function k_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await qh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ve.error(i)}}function S_(t,e,n,s){async function r(i,o,a){try{i==="event"?await k_(t,e,n,o,a):i==="config"?await E_(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ve.error(c)}}return r}function A_(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=S_(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function C_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bh)&&n.src.includes(t))return n;return null}/**
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
 */const D_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ze=new sn("analytics","Analytics",D_);/**
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
 */const R_=30,N_=1e3;class $_{constructor(e={},n=N_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zh=new $_;function O_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function P_(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:O_(s)},i=b_.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function L_(t,e=zh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw ze.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ze.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new U_;return setTimeout(async()=>{a.abort()},n!==void 0?n:w_),Hh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Hh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=zh){var i;const{appId:o,measurementId:a}=t;try{await M_(s,e)}catch(c){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await P_(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!x_(l)){if(r.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?uc(n,r.intervalMillis,R_):uc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ve.debug(`Calling attemptFetch again in ${u} millis`),Hh(t,h,s,r)}}function M_(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function x_(t){if(!(t instanceof Ze)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class U_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function F_(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function V_(){if(Uu())try{await Fu()}catch(t){return Ve.warn(ze.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j_(t,e,n,s,r,i,o){var a;const c=L_(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ve.error(p)),e.push(c);const l=V_().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);C_(i)||I_(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[__]="firebase",d.update=!0,h!=null&&(d[v_]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class B_{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},xc=[];const Uc={};let Hi="dataLayer",q_="gtag",Fc,Kh,Vc=!1;function z_(){const t=[];if(xu()&&t.push("This is a browser extension environment."),fg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ze.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function H_(t,e,n){z_();const s=t.options.appId;if(!s)throw ze.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(ts[s]!=null)throw ze.create("already-exists",{id:s});if(!Vc){T_(Hi);const{wrappedGtag:i,gtagCore:o}=A_(ts,xc,Uc,Hi,q_);Kh=i,Fc=o,Vc=!0}return ts[s]=j_(t,xc,Uc,e,Fc,Hi,n),new B_(t)}function K_(t=qo()){t=_e(t);const e=rn(t,Dr);return e.isInitialized()?e.getImmediate():G_(t)}function G_(t,e={}){const n=rn(t,Dr);if(n.isInitialized()){const r=n.getImmediate();if(cs(e,n.getOptions()))return r;throw ze.create("already-initialized")}return n.initialize({options:e})}function W_(t,e,n,s){t=_e(t),F_(Kh,ts[t.app.options.appId],e,n,s).catch(r=>Ve.error(r))}const jc="@firebase/analytics",Bc="0.9.4";function Q_(){ot(new Ye(Dr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return H_(s,r,n)},"PUBLIC")),ot(new Ye("analytics-internal",t,"PRIVATE")),qe(jc,Bc),qe(jc,Bc,"esm2017");function t(e){try{const n=e.getProvider(Dr).getImmediate();return{logEvent:(s,r,i)=>W_(n,s,r,i)}}catch(n){throw ze.create("interop-component-reg-failed",{reason:n})}}}Q_();var Y_="firebase",X_="9.18.0";/**
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
 */qe(Y_,X_,"app");var J_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,ra=ra||{},z=J_||self;function Rr(){}function ni(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ms(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z_(t){return Object.prototype.hasOwnProperty.call(t,Ki)&&t[Ki]||(t[Ki]=++ew)}var Ki="closure_uid_"+(1e9*Math.random()>>>0),ew=0;function tw(t,e,n){return t.call.apply(t.bind,arguments)}function nw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=tw:Oe=nw,Oe.apply(null,arguments)}function tr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Pt(){this.s=this.s,this.o=this.o}var sw=0;Pt.prototype.s=!1;Pt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),sw!=0)&&Z_(this)};Pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ia(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function qc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ni(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var rw=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Rr,e),z.removeEventListener("test",Rr,e)}catch{}return t}();function Nr(t){return/^[\s\xa0]*$/.test(t)}var zc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Gi(t,e){return t<e?-1:t>e?1:0}function si(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function et(t){return si().indexOf(t)!=-1}function oa(t){return oa[" "](t),t}oa[" "]=Rr;function iw(t){var e=cw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ow=et("Opera"),En=et("Trident")||et("MSIE"),Wh=et("Edge"),mo=Wh||En,Qh=et("Gecko")&&!(si().toLowerCase().indexOf("webkit")!=-1&&!et("Edge"))&&!(et("Trident")||et("MSIE"))&&!et("Edge"),aw=si().toLowerCase().indexOf("webkit")!=-1&&!et("Edge");function Yh(){var t=z.document;return t?t.documentMode:void 0}var $r;e:{var Wi="",Qi=function(){var t=si();if(Qh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wh)return/Edge\/([\d\.]+)/.exec(t);if(En)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aw)return/WebKit\/(\S+)/.exec(t);if(ow)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qi&&(Wi=Qi?Qi[1]:""),En){var Yi=Yh();if(Yi!=null&&Yi>parseFloat(Wi)){$r=String(Yi);break e}}$r=Wi}var cw={};function lw(){return iw(function(){let t=0;const e=zc(String($r)).split("."),n=zc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Gi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Gi(r[2].length==0,i[2].length==0)||Gi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var yo;if(z.document&&En){var Hc=Yh();yo=Hc||parseInt($r,10)||void 0}else yo=void 0;var uw=yo;function fs(t,e){if(Pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qh){e:{try{oa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fs.X.h.call(this)}}Ae(fs,Pe);var hw={2:"touch",3:"pen",4:"mouse"};fs.prototype.h=function(){fs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),dw=0;function fw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++dw,this.ba=this.ea=!1}function ri(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function aa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xh(t){const e={};for(const n in t)e[n]=t[n];return e}const Kc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Kc.length;i++)n=Kc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ii(t){this.src=t,this.g={},this.h=0}ii.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_o(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function vo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Gh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ri(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _o(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),Xi={};function Zh(t,e,n,s,r){if(s&&s.once)return td(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zh(t,e[i],n,s,r);return null}return n=ha(n),t&&t[xs]?t.N(e,n,Ms(s)?!!s.capture:!!s,r):ed(t,e,n,!1,s,r)}function ed(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ms(r)?!!r.capture:!!r,a=ua(t);if(a||(t[ca]=a=new ii(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=pw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(sd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pw(){function t(n){return e.call(t.src,t.listener,n)}const e=gw;return t}function td(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)td(t,e[i],n,s,r);return null}return n=ha(n),t&&t[xs]?t.O(e,n,Ms(s)?!!s.capture:!!s,r):ed(t,e,n,!0,s,r)}function nd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)nd(t,e[i],n,s,r);else s=Ms(s)?!!s.capture:!!s,n=ha(n),t&&t[xs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_o(i,n,s,r),-1<n&&(ri(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ua(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_o(e,n,s,r)),(n=-1<t?e[t]:null)&&la(n))}function la(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xs])vo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(sd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ua(e))?(vo(n,t),n.h==0&&(n.src=null,e[ca]=null)):ri(t)}}}function sd(t){return t in Xi?Xi[t]:Xi[t]="on"+t}function gw(t,e){if(t.ba)t=!0;else{e=new fs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&la(t),t=n.call(s,e)}return t}function ua(t){return t=t[ca],t instanceof ii?t:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function ha(t){return typeof t=="function"?t:(t[Ji]||(t[Ji]=function(e){return t.handleEvent(e)}),t[Ji])}function Ee(){Pt.call(this),this.i=new ii(this),this.P=this,this.I=null}Ae(Ee,Pt);Ee.prototype[xs]=!0;Ee.prototype.removeEventListener=function(t,e,n,s){nd(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Pe(e,t);else if(e instanceof Pe)e.target=e.target||t;else{var r=e;e=new Pe(s,t),Jh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=nr(o,s,!0,e)&&r}if(o=e.g=t,r=nr(o,s,!0,e)&&r,r=nr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=nr(o,s,!1,e)&&r}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ri(n[s]);delete t.g[e],t.h--}}this.I=null};Ee.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ee.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function nr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&vo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var da=z.JSON.stringify;function mw(){var t=od;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yw{constructor(){this.h=this.g=null}add(e,n){const s=rd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var rd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vw,t=>t.reset());class vw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _w(t){z.setTimeout(()=>{throw t},0)}function id(t,e){wo||ww(),bo||(wo(),bo=!0),od.add(t,e)}var wo;function ww(){var t=z.Promise.resolve(void 0);wo=function(){t.then(bw)}}var bo=!1,od=new yw;function bw(){for(var t;t=mw();){try{t.h.call(t.g)}catch(n){_w(n)}var e=rd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bo=!1}function oi(t,e){Ee.call(this),this.h=t||1,this.g=e||z,this.j=Oe(this.lb,this),this.l=Date.now()}Ae(oi,Ee);L=oi.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(fa(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){oi.X.M.call(this),fa(this),delete this.g};function pa(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ad(t){t.g=pa(()=>{t.g=null,t.i&&(t.i=!1,ad(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Iw extends Pt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ad(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(t){Pt.call(this),this.h=t,this.g={}}Ae(ps,Pt);var Gc=[];function cd(t,e,n,s){Array.isArray(n)||(n&&(Gc[0]=n.toString()),n=Gc);for(var r=0;r<n.length;r++){var i=Zh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ld(t){aa(t.g,function(e,n){this.g.hasOwnProperty(n)&&la(e)},t),t.g={}}ps.prototype.M=function(){ps.X.M.call(this),ld(this)};ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ai(){this.g=!0}ai.prototype.Aa=function(){this.g=!1};function Tw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Ew(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sw(t,n)+(s?" "+s:"")})}function kw(t,e){t.info(function(){return"TIMEOUT: "+e})}ai.prototype.info=function(){};function Sw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return da(n)}catch{return e}}var on={},Wc=null;function ci(){return Wc=Wc||new Ee}on.Pa="serverreachability";function ud(t){Pe.call(this,on.Pa,t)}Ae(ud,Pe);function gs(t){const e=ci();Se(e,new ud(e))}on.STAT_EVENT="statevent";function hd(t,e){Pe.call(this,on.STAT_EVENT,t),this.stat=e}Ae(hd,Pe);function xe(t){const e=ci();Se(e,new hd(e,t))}on.Qa="timingevent";function dd(t,e){Pe.call(this,on.Qa,t),this.size=e}Ae(dd,Pe);function Us(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var li={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ga(){}ga.prototype.h=null;function Qc(t){return t.h||(t.h=t.i())}function pd(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ma(){Pe.call(this,"d")}Ae(ma,Pe);function ya(){Pe.call(this,"c")}Ae(ya,Pe);var Io;function ui(){}Ae(ui,ga);ui.prototype.g=function(){return new XMLHttpRequest};ui.prototype.i=function(){return{}};Io=new ui;function Vs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ps(this),this.O=Aw,t=mo?125:void 0,this.T=new oi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new gd}function gd(){this.i=null,this.g="",this.h=!1}var Aw=45e3,To={},Or={};L=Vs.prototype;L.setTimeout=function(t){this.O=t};function Eo(t,e,n){t.K=1,t.v=di(mt(e)),t.s=n,t.P=!0,md(t,null)}function md(t,e){t.F=Date.now(),js(t),t.A=mt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ed(n.i,"t",s),t.C=0,n=t.l.H,t.h=new gd,t.g=Hd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Iw(Oe(t.La,t,t.g),t.N)),cd(t.S,t.g,"readystatechange",t.ib),e=t.H?Xh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),gs(),Tw(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&ft(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const u=ft(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||mo||this.g&&(this.h.h||this.g.fa()||Zc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?gs(3):gs(2)),hi(this);var n=this.g.aa();this.Y=n;t:if(yd(this)){var s=Zc(this.g);t="";var r=s.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),ns(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ew(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nr(a)){var l=a;break t}}l=null}if(n=l)vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ko(this,n);else{this.i=!1,this.o=3,xe(12),jt(this),ns(this);break e}}this.P?(vd(this,u,o),mo&&this.i&&u==3&&(cd(this.S,this.T,"tick",this.hb),this.T.start())):(vn(this.j,this.m,o,null),ko(this,o)),u==4&&jt(this),this.i&&!this.I&&(u==4?jd(this.l,this):(this.i=!1,js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xe(12)):(this.o=0,xe(13)),jt(this),ns(this)}}}catch{}finally{}};function yd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function vd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Cw(t,n),r==Or){e==4&&(t.o=4,xe(14),s=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==To){t.o=4,xe(15),vn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vn(t.j,t.m,r,null),ko(t,r);yd(t)&&r!=Or&&r!=To&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ea(e),e.K=!0,xe(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),jt(t),ns(t))}L.hb=function(){if(this.g){var t=ft(this.g),e=this.g.fa();this.C<e.length&&(hi(this),vd(this,t,e),this.i&&t!=4&&js(this))}};function Cw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Or:(n=Number(e.substring(n,s)),isNaN(n)?To:(s+=1,s+n>e.length?Or:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,jt(this)};function js(t){t.V=Date.now()+t.O,_d(t,t.O)}function _d(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Us(Oe(t.gb,t),e)}function hi(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kw(this.j,this.A),this.K!=2&&(gs(),xe(17)),jt(this),this.o=2,ns(this)):_d(this,this.V-t)};function ns(t){t.l.G==0||t.I||jd(t.l,t)}function jt(t){hi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fa(t.T),ld(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ko(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||So(n.h,t))){if(!t.J&&So(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mr(n),gi(n);else break e;Ta(n),xe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Us(Oe(n.cb,n),6e3));if(1>=Ad(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((t.J||n.g==t)&&Mr(n),!Nr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(va(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,ae(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=zd(s,s.H?s.ka:null,s.V),o.J){Cd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(hi(a),js(a)),s.g=o}else Fd(s);0<n.i.length&&mi(n)}else l[0]!="stop"&&l[0]!="close"||Bt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bt(n,7):Ia(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}gs(4)}catch{}}function Dw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ni(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Rw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ni(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function wd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ni(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rw(t),s=Dw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ht){this.h=e!==void 0?e:t.h,Pr(this,t.j),this.s=t.s,this.g=t.g,Lr(this,t.m),this.l=t.l,e=t.i;var n=new ms;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yc(this,n),this.o=t.o}else t&&(n=String(t).match(bd))?(this.h=!!e,Pr(this,n[1]||"",!0),this.s=Gn(n[2]||""),this.g=Gn(n[3]||"",!0),Lr(this,n[4]),this.l=Gn(n[5]||"",!0),Yc(this,n[6]||"",!0),this.o=Gn(n[7]||"")):(this.h=!!e,this.i=new ms(null,this.h))}Ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wn(e,Xc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wn(e,Xc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wn(n,n.charAt(0)=="/"?Pw:Ow,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wn(n,Mw)),t.join("")};function mt(t){return new Ht(t)}function Pr(t,e,n){t.j=n?Gn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yc(t,e,n){e instanceof ms?(t.i=e,xw(t.i,t.h)):(n||(e=Wn(e,Lw)),t.i=new ms(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function di(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$w),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $w(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xc=/[#\/\?@]/g,Ow=/[#\?:]/g,Pw=/[#\?]/g,Lw=/[#\?@]/g,Mw=/#/g;function ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Nw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ms.prototype;L.add=function(t,e){Lt(this),this.i=null,t=Mn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Id(t,e){Lt(t),e=Mn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Td(t,e){return Lt(t),e=Mn(t,e),t.g.has(e)}L.forEach=function(t,e){Lt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){Lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){Lt(this);let e=[];if(typeof t=="string")Td(this,t)&&(e=e.concat(this.g.get(Mn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Lt(this),this.i=null,t=Mn(this,t),Td(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ed(t,e,n){Id(t,e),0<n.length&&(t.i=null,t.g.set(Mn(t,e),ia(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Mn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xw(t,e){e&&!t.j&&(Lt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Id(this,s),Ed(this,r,n))},t)),t.j=e}var Uw=class{constructor(e,n){this.h=e,this.g=n}};function kd(t){this.l=t||Fw,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fw=10;function Sd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ad(t){return t.h?1:t.g?t.g.size:0}function So(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function va(t,e){t.g?t.g.add(e):t.h=e}function Cd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kd.prototype.cancel=function(){if(this.i=Dd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ia(t.i)}function _a(){}_a.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};_a.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function Vw(){this.g=new _a}function jw(t,e,n){const s=n||"";try{wd(t,function(r,i){let o=r;Ms(r)&&(o=da(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Bw(t,e){const n=new ai;if(z.Image){const s=new Image;s.onload=tr(sr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=tr(sr,n,s,"TestLoadImage: error",!1,e),s.onabort=tr(sr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=tr(sr,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function sr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Bs(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(Bs,ga);Bs.prototype.g=function(){return new fi(this.l,this.j)};Bs.prototype.i=function(t){return function(){return t}}({});function fi(t,e){Ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(fi,Ee);var wa=0;L=fi.prototype;L.open=function(t,e){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ys(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=wa};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Rd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):ys(this),this.readyState==3&&Rd(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,qs(this))};L.Ua=function(t){this.g&&(this.response=t,qs(this))};L.ga=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ys(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ys(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qw=z.JSON.parse;function he(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nd,this.K=this.L=!1}Ae(he,Ee);var Nd="",zw=/^https?$/i,Hw=["POST","PUT"];L=he.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Io.g(),this.C=this.u?Qc(this.u):Qc(Io),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Jc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Gh(Hw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pd(this),0<this.B&&((this.K=Kw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=pa(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jc(this,i)}};function Kw(t){return En&&lw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof ra<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Jc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$d(t),pi(t)}function $d(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),pi(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pi(this,!0)),he.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?Od(this):this.fb())};L.fb=function(){Od(this)};function Od(t){if(t.h&&typeof ra<"u"&&(!t.C[1]||ft(t)!=4||t.aa()!=2)){if(t.v&&ft(t)==4)pa(t.Ha,0,t);else if(Se(t,"readystatechange"),ft(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(bd)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!zw.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$d(t)}}finally{pi(t)}}}}function pi(t,e){if(t.g){Pd(t);const n=t.g,s=t.C[0]?Rr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Pd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function ft(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qw(e)}};function Zc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ld(t){let e="";return aa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ba(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ld(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Md(t){this.Ca=0,this.i=[],this.j=new ai,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qn("baseRetryDelayMs",5e3,t),this.bb=qn("retryDelaySeedMs",1e4,t),this.$a=qn("forwardChannelMaxRetries",2,t),this.ta=qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kd(t&&t.concurrentRequestLimit),this.Fa=new Vw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=Md.prototype;L.ma=8;L.G=1;function Ia(t){if(xd(t),t.G==3){var e=t.U++,n=mt(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),zs(t,n),e=new Vs(t,t.j,e,void 0),e.K=2,e.v=di(mt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hd(e.l,null),e.g.da(e.v)),e.F=Date.now(),js(e)}qd(t)}function gi(t){t.g&&(Ea(t),t.g.cancel(),t.g=null)}function xd(t){gi(t),t.u&&(z.clearTimeout(t.u),t.u=null),Mr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function mi(t){Sd(t.h)||t.m||(t.m=!0,id(t.Ja,t),t.C=0)}function Gw(t,e){return Ad(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Us(Oe(t.Ja,t,e),Bd(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Vs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Xh(i),Jh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ud(this,r,e),n=mt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),zs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ld(i)))+"&"+e:this.o&&ba(n,this.o,i)),va(this.h,r),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,Eo(r,n,null)):Eo(r,n,e),this.G=2}}else this.G==3&&(t?el(this,t):this.i.length==0||Sd(this.h)||el(this))};function el(t,e){var n;e?n=e.m:n=t.U++;const s=mt(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),zs(t,s),t.o&&t.s&&ba(s,t.o,t.s),n=new Vs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ud(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),va(t.h,n),Eo(n,s,e)}function zs(t,e){t.ia&&aa(t.ia,function(n,s){ae(e,s,n)}),t.l&&wd({},function(n,s){ae(e,s,n)})}function Ud(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Oe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{jw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Fd(t){t.g||t.u||(t.Z=1,id(t.Ia,t),t.A=0)}function Ta(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Us(Oe(t.Ia,t),Bd(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,Vd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Us(Oe(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xe(10),gi(this),Vd(this))};function Ea(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Vd(t){t.g=new Vs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=mt(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),zs(t,e),t.o&&t.s&&ba(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=di(mt(e)),n.s=null,n.P=!0,md(n,t)}L.cb=function(){this.v!=null&&(this.v=null,gi(this),Ta(this),xe(19))};function Mr(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function jd(t,e){var n=null;if(t.g==e){Mr(t),Ea(t),t.g=null;var s=2}else if(So(t.h,e))n=e.D,Cd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ci(),Se(s,new dd(s,n)),mi(t)}else Fd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Gw(t,e)||s==2&&Ta(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bt(t,5);break;case 4:Bt(t,10);break;case 3:Bt(t,6);break;default:Bt(t,2)}}}function Bd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Oe(t.kb,t);n||(n=new Ht("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Pr(n,"https"),di(n)),Bw(n.toString(),s)}else xe(2);t.G=0,t.l&&t.l.va(e),qd(t),xd(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function qd(t){if(t.G=0,t.la=[],t.l){const e=Dd(t.h);(e.length!=0||t.i.length!=0)&&(qc(t.la,e),qc(t.la,t.i),t.h.i.length=0,ia(t.i),t.i.length=0),t.l.ua()}}function zd(t,e,n){var s=n instanceof Ht?mt(n):new Ht(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Lr(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ht(null,void 0);s&&Pr(i,s),e&&(i.g=e),r&&Lr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),zs(t,s),s}function Hd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new he(new Bs({jb:!0})):new he(t.ra),e.Ka(t.H),e}function Kd(){}L=Kd.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function xr(){if(En&&!(10<=Number(uw)))throw Error("Environmental error: no available transport.")}xr.prototype.g=function(t,e){return new je(t,e)};function je(t,e){Ee.call(this),this.g=new Md(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Nr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xn(this)}Ae(je,Ee);je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zd(t,null,t.V),mi(t)};je.prototype.close=function(){Ia(this.g)};je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=da(t),t=n);e.i.push(new Uw(e.ab++,t)),e.G==3&&mi(e)};je.prototype.M=function(){this.g.l=null,delete this.j,Ia(this.g),delete this.g,je.X.M.call(this)};function Gd(t){ma.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(Gd,ma);function Wd(){ya.call(this),this.status=1}Ae(Wd,ya);function xn(t){this.g=t}Ae(xn,Kd);xn.prototype.xa=function(){Se(this.g,"a")};xn.prototype.wa=function(t){Se(this.g,new Gd(t))};xn.prototype.va=function(t){Se(this.g,new Wd)};xn.prototype.ua=function(){Se(this.g,"b")};xr.prototype.createWebChannel=xr.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;li.NO_ERROR=0;li.TIMEOUT=8;li.HTTP_ERROR=6;fd.COMPLETE="complete";pd.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.Oa;he.prototype.getLastErrorCode=he.prototype.Ea;he.prototype.getStatus=he.prototype.aa;he.prototype.getResponseJson=he.prototype.Sa;he.prototype.getResponseText=he.prototype.fa;he.prototype.send=he.prototype.da;he.prototype.setWithCredentials=he.prototype.Ka;var Ww=function(){return new xr},Qw=function(){return ci()},Zi=li,Yw=fd,Xw=on,tl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jw=Bs,rr=pd,Zw=he;const nl="@firebase/firestore";/**
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
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
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
 */let Un="9.18.0";/**
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
 */const tn=new Yr("@firebase/firestore");function sl(){return tn.logLevel}function U(t,...e){if(tn.logLevel<=te.DEBUG){const n=e.map(ka);tn.debug(`Firestore (${Un}): ${t}`,...n)}}function yt(t,...e){if(tn.logLevel<=te.ERROR){const n=e.map(ka);tn.error(`Firestore (${Un}): ${t}`,...n)}}function Ao(t,...e){if(tn.logLevel<=te.WARN){const n=e.map(ka);tn.warn(`Firestore (${Un}): ${t}`,...n)}}function ka(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+t;throw yt(e),new Error(e)}function ie(t,e){t||q()}function Q(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Ze{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class e0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(De.UNAUTHENTICATED))}shutdown(){}}class t0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class n0{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ie(typeof s.accessToken=="string"),new Qd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new De(e)}}class s0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class r0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new s0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class o0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.A=n.token,new i0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function a0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Yd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=a0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function kn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new ye(0,0))}static max(){return new K(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vs{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends vs{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const c0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends vs{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return c0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(oe.fromString(e))}static fromName(e){return new V(oe.fromString(e).popFirst(5))}static empty(){return new V(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new oe(e.slice()))}}function l0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Rt(r,V.empty(),e)}function u0(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(K.min(),V.empty(),-1)}static max(){return new Rt(K.max(),V.empty(),-1)}}function h0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const d0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hs(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==d0)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Sa.at=-1;/**
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
 */class p0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function rl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function yi(t){return t==null}function Ur(t){return t===0&&1/t==-1/0}function g0(t){return typeof t=="number"&&Number.isInteger(t)&&!Ur(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new m0("Invalid base64 string: "+r):r}}(e);return new Me(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(t){if(ie(!!t),typeof t=="string"){let e=0;const n=y0.exec(t);if(ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sn(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
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
 */function Jd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zd(t){const e=t.mapValue.fields.__previous_value__;return Jd(e)?Zd(e):e}function ws(t){const e=Nt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */const ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jd(t)?4:v0(t)?9007199254740991:10:q()}function at(t,e){if(t===e)return!0;const n=nn(t);if(n!==nn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ws(t).isEqual(ws(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Nt(s.timestampValue),o=Nt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Sn(s.bytesValue).isEqual(Sn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return pe(s.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return pe(s.integerValue)===pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=pe(s.doubleValue),o=pe(r.doubleValue);return i===o?Ur(i)===Ur(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return kn(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(rl(i)!==rl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!at(i[a],o[a])))return!1;return!0}(t,e);default:return q()}}function bs(t,e){return(t.values||[]).find(n=>at(n,e))!==void 0}function An(t,e){if(t===e)return 0;const n=nn(t),s=nn(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=pe(r.integerValue||r.doubleValue),a=pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return il(t.timestampValue,e.timestampValue);case 4:return il(ws(t),ws(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Sn(r),a=Sn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ne(pe(r.latitude),pe(i.latitude));return o!==0?o:ne(pe(r.longitude),pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=An(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ir.mapValue&&i===ir.mapValue)return 0;if(r===ir.mapValue)return 1;if(i===ir.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=An(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function il(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Nt(t),s=Nt(e),r=ne(n.seconds,s.seconds);return r!==0?r:ne(n.nanos,s.nanos)}function Cn(t){return Co(t)}function Co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Nt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Sn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Co(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Co(s.fields[a])}`;return i+"}"}(t.mapValue):q();var e,n}function ol(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Do(t){return!!t&&"integerValue"in t}function Aa(t){return!!t&&"arrayValue"in t}function al(t){return!!t&&"nullValue"in t}function cl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pr(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ss(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function v0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Fr{constructor(e,n){this.position=e,this.inclusive=n}}function ll(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=An(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ul(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ef{}class ge extends ef{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new w0(e,n,s):n==="array-contains"?new T0(e,s):n==="in"?new E0(e,s):n==="not-in"?new k0(e,s):n==="array-contains-any"?new S0(e,s):new ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new b0(e,s):new I0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(An(n,this.value)):n!==null&&nn(this.value)===nn(n)&&this.matchesComparison(An(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xe extends ef{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Xe(e,n)}matches(e){return tf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function tf(t){return t.op==="and"}function nf(t){return _0(t)&&tf(t)}function _0(t){for(const e of t.filters)if(e instanceof Xe)return!1;return!0}function Ro(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+Cn(t.value);if(nf(t))return t.filters.map(e=>Ro(e)).join(",");{const e=t.filters.map(n=>Ro(n)).join(",");return`${t.op}(${e})`}}function sf(t,e){return t instanceof ge?function(n,s){return s instanceof ge&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)}(t,e):t instanceof Xe?function(n,s){return s instanceof Xe&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&sf(i,s.filters[o]),!0):!1}(t,e):void q()}function rf(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${Cn(e.value)}`}(t):t instanceof Xe?function(e){return e.op.toString()+" {"+e.getFilters().map(rf).join(" ,")+"}"}(t):"Filter"}class w0 extends ge{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class b0 extends ge{constructor(e,n){super(e,"in",n),this.keys=of("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class I0 extends ge{constructor(e,n){super(e,"not-in",n),this.keys=of("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function of(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class T0 extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Aa(n)&&bs(n.arrayValue,this.value)}}class E0 extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bs(this.value.arrayValue,n)}}class k0 extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bs(this.value.arrayValue,n)}}class S0 extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Aa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bs(this.value.arrayValue,s))}}/**
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
 */class rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function A0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new or(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new or(this.root,e,this.comparator,!1)}getReverseIterator(){return new or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new or(this.root,e,this.comparator,!0)}}class or{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hl(this.data.getIterator())}getIteratorFrom(e){return new hl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class hl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class We{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new We([])}unionWith(e){let n=new ve($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new We(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ss(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());pr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];pr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Fn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Be(ss(this.value))}}function af(t){const e=[];return Fn(t.fields,(n,s)=>{const r=new $e([n]);if(pr(s)){const i=af(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new We(e)}/**
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
 */class Re{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,K.min(),K.min(),K.min(),Be.empty(),0)}static newFoundDocument(e,n,s,r){return new Re(e,1,n,K.min(),s,r,0)}static newNoDocument(e,n){return new Re(e,2,n,K.min(),K.min(),Be.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,K.min(),K.min(),Be.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class C0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function dl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new C0(t,e,n,s,r,i,o)}function Ca(t){const e=Q(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ro(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),yi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cn(s)).join(",")),e._t=n}return e._t}function Da(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ul(t.startAt,e.startAt)&&ul(t.endAt,e.endAt)}function No(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function D0(t,e,n,s,r,i,o,a){return new Gs(t,e,n,s,r,i,o,a)}function Ra(t){return new Gs(t)}function fl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Na(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lf(t){return t.collectionGroup!==null}function In(t){const e=Q(t);if(e.wt===null){e.wt=[];const n=Na(e),s=cf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new rs(n)),e.wt.push(new rs($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new rs($e.keyField(),i))}}}return e.wt}function vt(t){const e=Q(t);if(!e.gt)if(e.limitType==="F")e.gt=dl(e.path,e.collectionGroup,In(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of In(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rs(i.field,o))}const s=e.endAt?new Fr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fr(e.startAt.position,e.startAt.inclusive):null;e.gt=dl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function $o(t,e){e.getFirstInequalityField(),Na(t);const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oo(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vi(t,e){return Da(vt(t),vt(e))&&t.limitType===e.limitType}function uf(t){return`${Ca(vt(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>rf(s)).join(", ")}]`),yi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Cn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Cn(s)).join(",")),`Target(${n})`}(vt(t))}; limitType=${t.limitType})`}function _i(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of In(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ll(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,In(n),s)||n.endAt&&!function(r,i,o){const a=ll(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,In(n),s))}(t,e)}function R0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hf(t){return(e,n)=>{let s=!1;for(const r of In(t)){const i=N0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function N0(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?An(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
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
 */function df(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(e)?"-0":e}}function ff(t){return{integerValue:""+t}}function $0(t,e){return g0(e)?ff(e):df(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class wi{constructor(){this._=void 0}}function O0(t,e,n){return t instanceof Vr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Is?gf(t,e):t instanceof Ts?mf(t,e):function(s,r){const i=pf(s,r),o=pl(i)+pl(s.It);return Do(i)&&Do(s.It)?ff(o):df(s.Tt,o)}(t,e)}function P0(t,e,n){return t instanceof Is?gf(t,e):t instanceof Ts?mf(t,e):n}function pf(t,e){return t instanceof jr?Do(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Vr extends wi{}class Is extends wi{constructor(e){super(),this.elements=e}}function gf(t,e){const n=yf(e);for(const s of t.elements)n.some(r=>at(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ts extends wi{constructor(e){super(),this.elements=e}}function mf(t,e){let n=yf(e);for(const s of t.elements)n=n.filter(r=>!at(r,s));return{arrayValue:{values:n}}}class jr extends wi{constructor(e,n){super(),this.Tt=e,this.It=n}}function pl(t){return pe(t.integerValue||t.doubleValue)}function yf(t){return Aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function L0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Is&&s instanceof Is||n instanceof Ts&&s instanceof Ts?kn(n.elements,s.elements,at):n instanceof jr&&s instanceof jr?at(n.It,s.It):n instanceof Vr&&s instanceof Vr}(t.transform,e.transform)}class M0{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bi{}function vf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $a(t.key,st.none()):new Ws(t.key,t.data,st.none());{const n=t.data,s=Be.empty();let r=new ve($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new an(t.key,s,new We(r.toArray()),st.none())}}function x0(t,e,n){t instanceof Ws?function(s,r,i){const o=s.value.clone(),a=ml(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof an?function(s,r,i){if(!gr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ml(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(_f(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function is(t,e,n,s){return t instanceof Ws?function(r,i,o,a){if(!gr(r.precondition,i))return o;const c=r.value.clone(),l=yl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof an?function(r,i,o,a){if(!gr(r.precondition,i))return o;const c=yl(r.fieldTransforms,a,i),l=i.data;return l.setAll(_f(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return gr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function U0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=pf(s.transform,r||null);i!=null&&(n===null&&(n=Be.empty()),n.set(s.field,i))}return n||null}function gl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kn(n,s,(r,i)=>L0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ws extends bi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class an extends bi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _f(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ml(t,e,n){const s=new Map;ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,P0(o,a,n[r]))}return s}function yl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,O0(i,o,e))}return s}class $a extends bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F0 extends bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class V0{constructor(e){this.count=e}}/**
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
 */var fe,Z;function j0(t){switch(t){default:return q();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function wf(t){if(t===void 0)return yt("GRPC error has no .code"),T.UNKNOWN;switch(t){case fe.OK:return T.OK;case fe.CANCELLED:return T.CANCELLED;case fe.UNKNOWN:return T.UNKNOWN;case fe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case fe.INTERNAL:return T.INTERNAL;case fe.UNAVAILABLE:return T.UNAVAILABLE;case fe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case fe.NOT_FOUND:return T.NOT_FOUND;case fe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case fe.ABORTED:return T.ABORTED;case fe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case fe.DATA_LOSS:return T.DATA_LOSS;default:return q()}}(Z=fe||(fe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Xd(this.inner)}size(){return this.innerSize}}/**
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
 */const B0=new we(V.comparator);function _t(){return B0}const bf=new we(V.comparator);function Qn(...t){let e=bf;for(const n of t)e=e.insert(n.key,n);return e}function If(t){let e=bf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qt(){return os()}function Tf(){return os()}function os(){return new Vn(t=>t.toString(),(t,e)=>t.isEqual(e))}const q0=new we(V.comparator),z0=new ve(V.comparator);function X(...t){let e=z0;for(const n of t)e=e.add(n);return e}const H0=new ve(ne);function Ef(){return H0}/**
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
 */class Ii{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ii(K.min(),r,Ef(),_t(),X())}}class Qs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qs(s,n,X(),X(),X())}}/**
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
 */class mr{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class kf{constructor(e,n){this.targetId=e,this.Rt=n}}class Sf{constructor(e,n,s=Me.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class vl{constructor(){this.Pt=0,this.vt=wl(),this.bt=Me.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=X(),n=X(),s=X();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:q()}}),new Qs(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=wl()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class K0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=_t(),this.Kt=_l(),this.Gt=new ve(ne)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(No(i))if(s===0){const o=new V(i.path);this.zt(n,o,Re.newNoDocument(o,K.min()))}else ie(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&No(a.target)){const c=new V(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Re.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=X();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ii(e,n,this.Gt,this.Ut,s);return this.Ut=_t(),this.Kt=_l(),this.Gt=new ve(ne),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new vl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(ne),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new vl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function _l(){return new we(V.comparator)}function wl(){return new we(V.comparator)}/**
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
 */const G0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q0=(()=>({and:"AND",or:"OR"}))();class Y0{constructor(e,n){this.databaseId=e,this.yt=n}}function Br(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Af(t,e){return t.yt?e.toBase64():e.toUint8Array()}function X0(t,e){return Br(t,e.toTimestamp())}function rt(t){return ie(!!t),K.fromTimestamp(function(e){const n=Nt(e);return new ye(n.seconds,n.nanos)}(t))}function Oa(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cf(t){const e=oe.fromString(t);return ie($f(e)),e}function Lo(t,e){return Oa(t.databaseId,e.path)}function eo(t,e){const n=Cf(e);if(n.get(1)!==t.databaseId.projectId)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Df(n))}function Mo(t,e){return Oa(t.databaseId,e)}function J0(t){const e=Cf(t);return e.length===4?oe.emptyPath():Df(e)}function xo(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Df(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bl(t,e,n){return{name:Lo(t,e),fields:n.value.mapValue.fields}}function Z0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ie(l===void 0||typeof l=="string"),Me.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Me.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:wf(c.code);return new P(l,c.message||"")}(o);n=new Sf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=eo(t,s.document.name),i=rt(s.document.updateTime),o=s.document.createTime?rt(s.document.createTime):K.min(),a=new Be({mapValue:{fields:s.document.fields}}),c=Re.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new mr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=eo(t,s.document),i=s.readTime?rt(s.readTime):K.min(),o=Re.newNoDocument(r,i),a=s.removedTargetIds||[];n=new mr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=eo(t,s.document),i=s.removedTargetIds||[];n=new mr([],i,r,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new V0(r),o=s.targetId;n=new kf(o,i)}}return n}function eb(t,e){let n;if(e instanceof Ws)n={update:bl(t,e.key,e.value)};else if(e instanceof $a)n={delete:Lo(t,e.key)};else if(e instanceof an)n={update:bl(t,e.key,e.data),updateMask:lb(e.fieldMask)};else{if(!(e instanceof F0))return q();n={verify:Lo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Is)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ts)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:X0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q()}(t,e.precondition)),n}function tb(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?rt(s.updateTime):rt(r);return i.isEqual(K.min())&&(i=rt(r)),new M0(i,s.transformResults||[])}(n,e))):[]}function nb(t,e){return{documents:[Mo(t,e.path)]}}function sb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Nf(Xe.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pn(u.field),direction:ob(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||yi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rb(t){let e=J0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Rf(u);return h instanceof Xe&&nf(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rs(gn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,yi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Fr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Fr(d,h)}(n.endAt)),D0(e,r,o,i,a,"F",c,l)}function ib(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gn(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=gn(e.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gn(e.unaryFilter.field);return ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gn(e.unaryFilter.field);return ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(gn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Xe.create(e.compositeFilter.filters.map(n=>Rf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function ob(t){return G0[t]}function ab(t){return W0[t]}function cb(t){return Q0[t]}function pn(t){return{fieldPath:t.canonicalString()}}function gn(t){return $e.fromServerFormat(t.fieldPath)}function Nf(t){return t instanceof ge?function(e){if(e.op==="=="){if(cl(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NAN"}};if(al(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cl(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NAN"}};if(al(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(e.field),op:ab(e.op),value:e.value}}}(t):t instanceof Xe?function(e){const n=e.getFilters().map(s=>Nf(s));return n.length===1?n[0]:{compositeFilter:{op:cb(e.op),filters:n}}}(t):q()}function lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $f(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ub{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&x0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=vf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(n,s)=>gl(n,s))&&kn(this.baseMutations,e.baseMutations,(n,s)=>gl(n,s))}}class Pa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ie(e.mutations.length===s.length);let r=q0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Pa(e,n,s,r)}}/**
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
 */class hb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Gt{constructor(e,n,s,r,i=K.min(),o=K.min(),a=Me.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class db{constructor(e){this.oe=e}}function fb(t){const e=rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oo(e,e.limit,"L"):e}/**
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
 */class pb{constructor(){this.Ze=new gb}addToCollectionParentIndex(e,n){return this.Ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Rt.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class gb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ve(oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
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
 */class Dn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Dn(0)}static Sn(){return new Dn(-1)}}/**
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
 */class mb{constructor(){this.changes=new Vn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&is(s.mutation,r,We.empty(),ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,X()).next(()=>s))}getLocalViewOfDocuments(e,n,s=X()){const r=qt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Qn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,X()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=_t();const o=os(),a=os();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof an)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),is(u.mutation,l,u.mutation.getFieldMask(),ye.now())):o.set(l.key,We.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new yb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=os();let r=new we((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||We.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||X()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Tf();u.forEach(d=>{if(!i.has(d)){const p=vf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(qt());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,X())).next(u=>({batchId:a,changes:If(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(s=>{let r=Qn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Qn();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new Gs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Re.newInvalidDocument(l)))});let o=Qn();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&is(l.mutation,c,We.empty(),ye.now()),_i(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class _b{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return C.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:rt(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:fb(s.bundledQuery),readTime:rt(s.readTime)}}(n)),C.resolve()}}/**
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
 */class wb{constructor(){this.overlays=new we(V.comparator),this.ss=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qt();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=qt(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=qt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hb(n,s));let i=this.ss.get(n);i===void 0&&(i=X(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class La{constructor(){this.rs=new ve(Te.os),this.us=new ve(Te.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Te(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Te(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new V(new oe([])),s=new Te(n,e),r=new Te(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new V(new oe([])),s=new Te(n,e),r=new Te(n,e+1);let i=X();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Te(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return V.comparator(e.key,n.key)||ne(e.gs,n.gs)}static cs(e,n){return ne(e.gs,n.gs)||V.comparator(e.key,n.key)}}/**
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
 */class bb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(Te.os)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ub(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),r=new Te(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(ne);return n.forEach(r=>{const i=new Te(r,0),o=new Te(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),C.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new Te(new V(i),0);let a=new ve(ne);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),C.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ie(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return C.forEach(n.mutations,r=>{const i=new Te(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Te(n,0),r=this.ps.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ib{constructor(e){this.Rs=e,this.docs=new we(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=_t();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=_t();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||h0(u0(u),s)<=0||(r.has(u.key)||_i(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){q()}Ps(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Tb(this)}getSize(e){return C.resolve(this.size)}}class Tb extends mb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class Eb{constructor(e){this.persistence=e,this.vs=new Vn(n=>Ca(n),Da),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.bs=0,this.Vs=new La,this.targetCount=0,this.Ss=Dn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),C.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Dn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.xn(n),C.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Vs.containsKey(n))}}/**
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
 */class kb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Sa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Eb(this),this.indexManager=new pb,this.remoteDocumentCache=function(s){return new Ib(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new db(n),this.$s=new _b(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new bb(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new Sb(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return C.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Sb extends f0{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Bs=new La,this.Ls=null}static qs(e){return new Ma(e)}get Us(){if(this.Ls)return this.Ls;throw q()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),C.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Us,s=>{const r=V.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,K.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return C.or([()=>C.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
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
 */class xa{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=X(),r=X();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xa(e,n.fromCache,s,r)}}/**
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
 */class Ab{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(fl(n))return C.resolve(null);let s=vt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Oo(n,null,"F"),s=vt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=X(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Oo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return fl(n)||r.isEqual(K.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(sl()<=te.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Po(n)),this.qi(e,o,n,l0(r,-1)))})}Bi(e,n){let s=new ve(hf(e));return n.forEach((r,i)=>{_i(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return sl()<=te.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Po(n)),this.$i.getDocumentsMatchingQuery(e,n,Rt.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Cb{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new we(ne),this.Gi=new Vn(i=>Ca(i),Da),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vb(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Db(t,e,n,s){return new Cb(t,e,n,s)}async function Of(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=X();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Rb(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=C.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(v=>{const g=c.docVersions.get(p);ie(g!==null),v.version.compareTo(g)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=X();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Pf(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Nb(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Me.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(v,g,m){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=_t(),l=X();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($b(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(K.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function $b(t,e,n){let s=X(),r=X();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=_t();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Ob(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Pb(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Gt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Uo(t,e,n){const s=Q(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ks(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Il(t,e,n){const s=Q(t);let r=K.min(),i=X();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.Gi.get(l);return h!==void 0?C.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,vt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:K.min(),n?i:X())).next(a=>(Lb(s,R0(e),a),{documents:a,Yi:i})))}function Lb(t,e,n){let s=t.Qi.get(e)||K.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Tl{constructor(){this.activeTargetIds=Ef()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mb{constructor(){this.Ur=new Tl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Tl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xb{Gr(e){}shutdown(){}}/**
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
 */class El{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ar=null;function to(){return ar===null?ar=268435456+Math.round(2147483648*Math.random()):ar++,"0x"+ar.toString(16)}/**
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
 */const Ub={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Ce="WebChannelConnection";class Vb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=to(),a=this.fo(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(U("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ao("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Un,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=Ub[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=to();return new Promise((o,a)=>{const c=new Zw;c.setWithCredentials(!0),c.listenOnce(Yw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Zi.NO_ERROR:const u=c.getResponseJson();U(Ce,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Zi.TIMEOUT:U(Ce,`RPC '${e}' ${i} timed out`),a(new P(T.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const h=c.getStatus();if(U(Ce,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new P(v,p.message))}else a(new P(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new P(T.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{U(Ce,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);U(Ce,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=to(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ww(),a=Qw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Jw({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");U(Ce,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new Fb({Yr:g=>{d?U(Ce,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(U(Ce,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),U(Ce,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),v=(g,m,D)=>{g.listen(m,I=>{try{D(I)}catch(k){setTimeout(()=>{throw k},0)}})};return v(u,rr.EventType.OPEN,()=>{d||U(Ce,`RPC '${e}' stream ${r} transport opened.`)}),v(u,rr.EventType.CLOSE,()=>{d||(d=!0,U(Ce,`RPC '${e}' stream ${r} transport closed`),p.oo())}),v(u,rr.EventType.ERROR,g=>{d||(d=!0,Ao(Ce,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new P(T.UNAVAILABLE,"The operation could not be completed")))}),v(u,rr.EventType.MESSAGE,g=>{var m;if(!d){const D=g.data[0];ie(!!D);const I=D,k=I.error||((m=I[0])===null||m===void 0?void 0:m.error);if(k){U(Ce,`RPC '${e}' stream ${r} received error:`,k);const $=k.status;let N=function(J){const be=fe[J];if(be!==void 0)return wf(be)}($),R=k.message;N===void 0&&(N=T.INTERNAL,R="Unknown error status: "+$+" with message "+k.message),d=!0,p.oo(new P(N,R)),u.close()}else U(Ce,`RPC '${e}' stream ${r} received:`,D),p.uo(D)}}),v(a,Xw.STAT_EVENT,g=>{g.stat===tl.PROXY?U(Ce,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===tl.NOPROXY&&U(Ce,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function no(){return typeof document<"u"?document:null}/**
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
 */function Ti(t){return new Y0(t,!0)}/**
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
 */class Lf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Mf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Lf(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new P(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jb extends Mf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Z0(this.Tt,e),s=function(r){if(!("targetChange"in r))return K.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?K.min():i.readTime?rt(i.readTime):K.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=xo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=No(a)?{documents:nb(r,a)}:{query:sb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Af(r,i.resumeToken):i.snapshotVersion.compareTo(K.min())>0&&(o.readTime=Br(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ib(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=xo(this.Tt),n.removeTarget=e,this.qo(n)}}class Bb extends Mf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=tb(e.writeResults,e.commitTime),s=rt(e.commitTime);return this.listener.eu(s,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=xo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eb(this.Tt,s))};this.qo(n)}}/**
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
 */class qb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(T.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(T.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(yt(n),this.cu=!1):U("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class Hb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{cn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.mu.add(4),await Ys(c),c.pu.set("Unknown"),c.mu.delete(4),await Ei(c)}(this))})}),this.pu=new zb(s,r)}}async function Ei(t){if(cn(t))for(const e of t.gu)await e(!0)}async function Ys(t){for(const e of t.gu)await e(!1)}function xf(t,e){const n=Q(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Va(n)?Fa(n):jn(n).Mo()&&Ua(n,e))}function Uf(t,e){const n=Q(t),s=jn(n);n.wu.delete(e),s.Mo()&&Ff(n,e),n.wu.size===0&&(s.Mo()?s.Bo():cn(n)&&n.pu.set("Unknown"))}function Ua(t,e){t.Iu.Ot(e.targetId),jn(t).Jo(e)}function Ff(t,e){t.Iu.Ot(e),jn(t).Yo(e)}function Fa(t){t.Iu=new K0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),jn(t).start(),t.pu.au()}function Va(t){return cn(t)&&!jn(t).$o()&&t.wu.size>0}function cn(t){return Q(t).mu.size===0}function Vf(t){t.Iu=void 0}async function Kb(t){t.wu.forEach((e,n)=>{Ua(t,e)})}async function Gb(t,e){Vf(t),Va(t)?(t.pu.fu(e),Fa(t)):t.pu.set("Unknown")}async function Wb(t,e,n){if(t.pu.set("Online"),e instanceof Sf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qr(t,s)}else if(e instanceof mr?t.Iu.Qt(e):e instanceof kf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(K.min()))try{const s=await Pf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Me.EMPTY_BYTE_STRING,c.snapshotVersion)),Ff(r,a);const l=new Gt(c.target,a,1,c.sequenceNumber);Ua(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await qr(t,s)}}async function qr(t,e,n){if(!Ks(e))throw e;t.mu.add(1),await Ys(t),t.pu.set("Offline"),n||(n=()=>Pf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ei(t)})}function jf(t,e){return e().catch(n=>qr(t,n,e))}async function ki(t){const e=Q(t),n=$t(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Qb(e);)try{const r=await Ob(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,Yb(e,r)}catch(r){await qr(e,r)}Bf(e)&&qf(e)}function Qb(t){return cn(t)&&t._u.length<10}function Yb(t,e){t._u.push(e);const n=$t(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Bf(t){return cn(t)&&!$t(t).$o()&&t._u.length>0}function qf(t){$t(t).start()}async function Xb(t){$t(t).su()}async function Jb(t){const e=$t(t);for(const n of t._u)e.tu(n.mutations)}async function Zb(t,e,n){const s=t._u.shift(),r=Pa.from(s,e,n);await jf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ki(t)}async function eI(t,e){e&&$t(t).Xo&&await async function(n,s){if(r=s.code,j0(r)&&r!==T.ABORTED){const i=n._u.shift();$t(n).Fo(),await jf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ki(n)}var r}(t,e),Bf(t)&&qf(t)}async function kl(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=cn(n);n.mu.add(3),await Ys(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ei(n)}async function tI(t,e){const n=Q(t);e?(n.mu.delete(2),await Ei(n)):e||(n.mu.add(2),await Ys(n),n.pu.set("Unknown"))}function jn(t){return t.Tu||(t.Tu=function(e,n,s){const r=Q(e);return r.ru(),new jb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Kb.bind(null,t),no:Gb.bind(null,t),Ho:Wb.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Va(t)?Fa(t):t.pu.set("Unknown")):(await t.Tu.stop(),Vf(t))})),t.Tu}function $t(t){return t.Eu||(t.Eu=function(e,n,s){const r=Q(e);return r.ru(),new Bb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Xb.bind(null,t),no:eI.bind(null,t),nu:Jb.bind(null,t),eu:Zb.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await ki(t)):(await t.Eu.stop(),t._u.length>0&&(U("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class ja{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ja(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(t,e){if(yt("AsyncQueue",`${e}: ${t}`),Ks(t))return new P(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Tn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=Qn(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Tn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Sl{constructor(){this.Au=new we(V.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):q():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rn(e,n,Tn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class nI{constructor(){this.Pu=void 0,this.listeners=[]}}class sI{constructor(){this.queries=new Vn(e=>uf(e),vi),this.onlineState="Unknown",this.vu=new Set}}async function rI(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Ba(o,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&qa(n)}async function iI(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function oI(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&qa(n)}function aI(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function qa(t){t.vu.forEach(e=>{e.next()})}class cI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class zf{constructor(e){this.key=e}}class Hf{constructor(e){this.key=e}}class lI{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=X(),this.mutatedKeys=X(),this.ju=hf(e),this.zu=new Tn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Sl,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=_i(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?v!==g&&(s.track({type:3,doc:p}),m=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),m=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),m=!0):d&&!p&&(s.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Rn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Sl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=X(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Hf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new zf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=X();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class uI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hI{constructor(e){this.key=e,this.ic=!1}}class dI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Vn(a=>uf(a),vi),this.uc=new Map,this.cc=new Set,this.ac=new we(V.comparator),this.hc=new Map,this.lc=new La,this.fc={},this.dc=new Map,this._c=Dn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function fI(t,e){const n=TI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Pb(n.localStore,vt(e));n.isPrimaryClient&&xf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await pI(n,e,s,a==="current",o.resumeToken)}return r}async function pI(t,e,n,s,r){t.mc=(h,d,p)=>async function(v,g,m,D){let I=g.view.Hu(m);I.Li&&(I=await Il(v.localStore,g.query,!1).then(({documents:N})=>g.view.Hu(N,I)));const k=D&&D.targetChanges.get(g.targetId),$=g.view.applyChanges(I,v.isPrimaryClient,k);return Cl(v,g.targetId,$.tc),$.snapshot}(t,h,d,p);const i=await Il(t.localStore,e,!0),o=new lI(e,i.Yi),a=o.Hu(i.documents),c=Qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Cl(t,n,l.tc);const u=new uI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function gI(t,e){const n=Q(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!vi(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Uf(n.remoteStore,s.targetId),Fo(n,s.targetId)}).catch(Hs)):(Fo(n,s.targetId),await Uo(n.localStore,s.targetId,!0))}async function mI(t,e,n){const s=EI(t);try{const r=await function(i,o){const a=Q(i),c=ye.now(),l=o.reduce((d,p)=>d.add(p.key),X());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=_t(),v=X();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((m,D)=>{D.isValidDocument()||(v=v.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const m=[];for(const D of o){const I=U0(D,u.get(D.key).overlayedDocument);I!=null&&m.push(new an(D.key,I,af(I.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(g=>{h=g;const m=g.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,g.batchId,m)})}).then(()=>({batchId:h.batchId,changes:If(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new we(ne)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Xs(s,r.changes),await ki(s.remoteStore)}catch(r){const i=Ba(r,"Failed to persist write");n.reject(i)}}async function Kf(t,e){const n=Q(t);try{const s=await Nb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ie(o.ic):r.removedDocuments.size>0&&(ie(o.ic),o.ic=!1))}),await Xs(n,s,e)}catch(s){await Hs(s)}}function Al(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&qa(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yI(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new we(V.comparator);o=o.insert(i,Re.newNoDocument(i,K.min()));const a=X().add(i),c=new Ii(K.min(),new Map,new ve(ne),o,a);await Kf(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),za(s)}else await Uo(s.localStore,e,!1).then(()=>Fo(s,e,n)).catch(Hs)}async function vI(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await Rb(n.localStore,e);Wf(n,s,null),Gf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xs(n,r)}catch(r){await Hs(r)}}async function _I(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Wf(s,e,n),Gf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xs(s,r)}catch(r){await Hs(r)}}function Gf(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Wf(t,e,n){const s=Q(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Qf(t,s)})}function Qf(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Uf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),za(t))}function Cl(t,e,n){for(const s of n)s instanceof zf?(t.lc.addReference(s.key,e),wI(t,s)):s instanceof Hf?(U("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Qf(t,s.key)):q()}function wI(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.cc.add(s),za(t))}function za(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new V(oe.fromString(e)),s=t._c.next();t.hc.set(s,new hI(n)),t.ac=t.ac.insert(n,s),xf(t.remoteStore,new Gt(vt(Ra(n.path)),s,2,Sa.at))}}async function Xs(t,e,n){const s=Q(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=xa.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>C.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ks(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,v)}}}(s.localStore,i))}async function bI(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Of(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(T.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xs(n,s.Wi)}}function II(t,e){const n=Q(t),s=n.hc.get(e);if(s&&s.ic)return X().add(s.key);{let r=X();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function TI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=II.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yI.bind(null,e),e.rc.Ho=oI.bind(null,e.eventManager),e.rc.gc=aI.bind(null,e.eventManager),e}function EI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}class kI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Db(this.persistence,new Ab,e.initialUser,this.Tt)}Tc(e){return new kb(Ma.qs,this.Tt)}Ic(e){return new Mb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Al(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bI.bind(null,this.syncEngine),await tI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sI}createDatastore(e){const n=Ti(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Vb(r));var r;return function(i,o,a,c){return new qb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Al(this.syncEngine,a,0),o=El.C()?new El:new xb,new Hb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new dI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ys(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class AI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=De.UNAUTHENTICATED,this.clientId=Yd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function DI(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Of(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function RI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NI(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>kl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>kl(e.remoteStore,i)),t.onlineComponents=e}async function NI(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await DI(t,new kI)),t.offlineComponents}async function Yf(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await RI(t,new SI)),t.onlineComponents}function $I(t){return Yf(t).then(e=>e.syncEngine)}async function Dl(t){const e=await Yf(t),n=e.eventManager;return n.onListen=fI.bind(null,e.syncEngine),n.onUnlisten=gI.bind(null,e.syncEngine),n}const Rl=new Map;/**
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
 */function Xf(t,e,n){if(!n)throw new P(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OI(t,e,n,s){if(e===!0&&s===!0)throw new P(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nl(t){if(!V.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $l(t){if(V.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Si(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Si(t);throw new P(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ol{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,OI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ai{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new e0;switch(n.type){case"gapi":const s=n.client;return new r0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rl.get(e);n&&(U("ComponentProvider","Removing Datastore"),Rl.delete(e),n.terminate())}(this),Promise.resolve()}}function PI(t,e,n,s={}){var r;const i=(t=Wt(t,Ai))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ao("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=De.MOCK_USER;else{o=lg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new P(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new De(c)}t._authCredentials=new t0(new Qd(o,a))}}/**
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
 */class Ue{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Bn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class Dt extends Bn{constructor(e,n,s){super(e,n,Ra(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new V(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function LI(t,e,...n){if(t=_e(t),Xf("collection","path",e),t instanceof Ai){const s=oe.fromString(e,...n);return $l(s),new Dt(t,null,s)}{if(!(t instanceof Ue||t instanceof Dt))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return $l(s),new Dt(t.firestore,null,s)}}function cr(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Yd.R()),Xf("doc","path",e),t instanceof Ai){const s=oe.fromString(e,...n);return Nl(s),new Ue(t,null,new V(s))}{if(!(t instanceof Ue||t instanceof Dt))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Nl(s),new Ue(t.firestore,t instanceof Dt?t.converter:null,new V(s))}}/**
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
 */class MI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Lf(this,"async_queue_retry"),this.Hc=()=>{const n=no();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=no();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=no();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Kt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ks(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=ja.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&q()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Pl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Es extends Ai{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new MI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zf(this),this._firestoreClient.terminate()}}function xI(t,e){const n=typeof t=="object"?t:qo(),s=typeof t=="string"?t:e||"(default)",r=rn(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=og("firestore");i&&PI(r,...i)}return r}function Jf(t){return t._firestoreClient||Zf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new p0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Me.fromBase64String(e))}catch(n){throw new P(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nn(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ep{constructor(e){this._methodName=e}}/**
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
 */class Ka{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const UI=/^__.*__$/;class FI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new an(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ws(e,this.data,n,this.fieldTransforms)}}function tp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ga{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return zr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(tp(this.ra)&&UI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class VI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Ti(e)}wa(e,n,s,r=!1){return new Ga({ra:e,methodName:n,_a:s,path:$e.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function np(t){const e=t._freezeSettings(),n=Ti(t._databaseId);return new VI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);ip("Data must be an object, but it was:",o,s);const a=sp(s,o);let c,l;if(i.merge)c=new We(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=qI(e,h,n);if(!o.contains(d))throw new P(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HI(u,d)||u.push(d)}c=new We(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new FI(new Be(a),c,l)}function BI(t,e,n,s=!1){return Wa(n,t.wa(s?4:3,e))}function Wa(t,e){if(rp(t=_e(t)))return ip("Unsupported field value:",e,t),sp(t,e);if(t instanceof ep)return function(n,s){if(!tp(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Wa(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ye.fromDate(n);return{timestampValue:Br(s.Tt,r)}}if(n instanceof ye){const r=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Br(s.Tt,r)}}if(n instanceof Ka)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nn)return{bytesValue:Af(s.Tt,n._byteString)};if(n instanceof Ue){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Oa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Si(n)}`)}(t,e)}function sp(t,e){const n={};return Xd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(t,(s,r)=>{const i=Wa(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function rp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Ka||t instanceof Nn||t instanceof Ue||t instanceof ep)}function ip(t,e,n){if(!rp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Si(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function qI(t,e,n){if((e=_e(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return op(t,e);throw zr("Field path arguments must be of type string or ",t,!1,void 0,n)}const zI=new RegExp("[~\\*/\\[\\]]");function op(t,e,n){if(e.search(zI)>=0)throw zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(T.INVALID_ARGUMENT,a+t+c)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ap{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KI extends ap{data(){return super.data()}}function cp(t,e){return typeof e=="string"?op(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
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
 */function GI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qa{}class WI extends Qa{}function QI(t,e,...n){let s=[];e instanceof Qa&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Xa).length,o=r.filter(a=>a instanceof Ya).length;if(i>1||i>0&&o>0)throw new P(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ya extends WI{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ya(e,n,s)}_apply(e){const n=this._parse(e);return lp(e._query,n),new Bn(e.firestore,e.converter,$o(e._query,n))}_parse(e){const n=np(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ml(u,l);const d=[];for(const p of u)d.push(Ll(a,r,p));h={arrayValue:{values:d}}}else h=Ll(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ml(u,l),h=BI(o,i,u,l==="in"||l==="not-in");return ge.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Xa extends Qa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Xe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)lp(i,a),i=$o(i,a)}(e._query,n),new Bn(e.firestore,e.converter,$o(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ll(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new P(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lf(e)&&n.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!V.isDocumentKey(s))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ol(t,new V(s))}if(n instanceof Ue)return ol(t,n._key);throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Si(n)}.`)}function Ml(t,e){if(!Array.isArray(t)||t.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lp(t,e){if(e.isInequality()){const s=Na(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new P(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=cf(t);i!==null&&YI(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function YI(t,e,n){if(!n.isEqual(e))throw new P(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class XI{convertValue(e,n="none"){switch(nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const s={};return Fn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ka(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Zd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ws(e));default:return null}}convertTimestamp(e){const n=Nt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);ie($f(s));const r=new _s(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function JI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Yn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class up extends ap{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class yr extends up{data(e={}){return super.data(e)}}class ZI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Yn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new yr(this._firestore,this._userDataWriter,s.key,s,new Yn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new yr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new yr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:eT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class hp extends XI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function xl(t,e,n){t=Wt(t,Ue);const s=Wt(t.firestore,Es),r=JI(t.converter,e,n);return dp(s,[jI(np(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,st.none())])}function tT(t){return dp(Wt(t.firestore,Es),[new $a(t._key,st.none())])}function Ul(t,...e){var n,s,r;t=_e(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Pl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Pl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ue)l=Wt(t.firestore,Es),u=Ra(t._key.path),c={next:h=>{e[o]&&e[o](nT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Wt(t,Bn);l=Wt(h.firestore,Es),u=h._query;const d=new hp(l);c={next:p=>{e[o]&&e[o](new ZI(l,d,h,p))},error:e[o+1],complete:e[o+2]},GI(t._query)}return function(h,d,p,v){const g=new AI(v),m=new cI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>rI(await Dl(h),m)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>iI(await Dl(h),m))}}(Jf(l),u,a,c)}function dp(t,e){return function(n,s){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>mI(await $I(n),s,r)),r.promise}(Jf(t),e)}function nT(t,e,n){const s=n.docs.get(e._key),r=new hp(t);return new up(t,r,e._key,s,new Yn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Un=n})(Ds),ot(new Ye("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Es(new n0(n.getProvider("auth-internal")),new o0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),qe(nl,"3.9.0",t),qe(nl,"3.9.0","esm2017")})();const sT={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},fp=qu(sT),xt=$v(fp);my(xt,ph);const zn=xI(fp);K_();const rT=new lt,iT=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=As(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return hh(xt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return py(xt,r,i)},async signInWithEmail(r,i){return gy(xt,r,i)},async signInWithGoogle(){return By(xt,rT)},async signOut(){return _y(xt)}}},pp=iT(),Fl="/assets/default-user-a40c52dd.png";function oT(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-account")},m(n,s){A(n,e,s)},p:E,d(n){n&&S(e)}}}function aT(t){let e,n;return{c(){e=w("img"),f(e,"class","profile-picture svelte-1m717b8"),Qt(e.src,n=t[0].user.photoURL??Fl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){A(s,e,r)},p(s,r){r&1&&!Qt(e.src,n=s[0].user.photoURL??Fl)&&f(e,"src",n)},d(s){s&&S(e)}}}function cT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m,D,I;o=new Jp({});function k(R,J){return R[0].loggedIn?aT:oT}let $=k(t),N=$(t);return{c(){e=w("header"),n=w("div"),s=w("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=O(),i=w("a"),F(o.$$.fragment),a=O(),c=w("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=O(),u=w("nav"),h=w("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=O(),p=w("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',v=O(),g=w("button"),N.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(R,J){A(R,e,J),y(e,n),y(n,s),y(n,r),y(n,i),M(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,v),y(u,g),N.m(g,null),m=!0,D||(I=[B(c,"click",t[1]),B(h,"click",t[2]),B(p,"click",t[3]),B(g,"click",t[4])],D=!0)},p(R,[J]){$===($=k(R))&&N?N.p(R,J):(N.d(1),N=$(R),N&&(N.c(),N.m(g,null)))},i(R){m||(_(o.$$.fragment,R),m=!0)},o(R){b(o.$$.fragment,R),m=!1},d(R){R&&S(e),x(o),N.d(),D=!1,me(I)}}}function lT(t,e,n){let s;return Ne(t,pp,c=>n(0,s=c)),[s,()=>yn.navigateTo("help"),()=>yn.navigateTo("search"),()=>yn.navigateTo("settings"),()=>yn.navigateTo("account")]}class uT extends W{constructor(e){super(),G(this,e,lT,cT,H,{})}}const hT="modulepreload",dT=function(t){return"/"+t},Vl={},Ci=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=dT(i),i in Vl)return;Vl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":hT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},vr=Object.freeze(["+","-","~"]),Di=t=>vr.includes(t),fT=t=>{if(!Di(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(vr.indexOf(t)+1)%vr.length;return vr[n]},pT=Object.freeze({"+":"","-":"-","~":""}),gT=t=>{if(!Di(t))throw TypeError("Invalid modifier passed to serializeModifier");return pT[t]},Js=t=>typeof t=="string"&&t!=="",Ri=t=>typeof t=="number";class Ni{constructor(e,n){if(!Di(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Js(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${gT(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const gp=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),mp=t=>gp.includes(t),jl=t=>{const e=gp.indexOf(t);return e>=0?e:99},mT=Object.freeze(["artist","character","copyright","source","metadata","rating"]),yT=t=>mT.includes(t);let $i=class{constructor(e,n,s,r){if(!Di(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Js(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Ri(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!mp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const yp=t=>new Ni(t.modifier,t.name);class vp{constructor(e,n,s){if(!Js(e))throw new TypeError("Invalid name passed to Supertag");if(!vT(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const vT=t=>Array.isArray(t)&&t.every(e=>e instanceof Ni),_T=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=As(t);let s,r=null,i=null;return hh(xt,async o=>{s=o,o?r=Ul(cr(zn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=QI(LI(zn,`users/${o.uid}/supertags`));i==null||i(),i=Ul(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new vp(d.id,p.description,Object.entries(p.tags).map(v=>new Ni(v[1],v[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return xl(cr(zn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return tT(cr(zn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return xl(cr(zn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},ks=_T();function wT(t){let e,n,s,r;return{c(){e=w("button"),n=re(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){A(i,e,o),y(e,n),s||(r=B(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&de(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:E,o:E,d(i){i&&S(e),s=!1,r()}}}function bT(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ke(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class Ja extends W{constructor(e){super(),G(this,e,bT,wT,H,{text:0,title:1,disabled:2})}}const bt=t=>e=>{(_p(e)||IT(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},IT=t=>t.code==="Space",_p=t=>t.code==="Enter"||t.key==="Enter",TT=Intl.NumberFormat("en",{notation:"compact"}),wt=t=>{if(!Ri(t))throw new TypeError(`Invalid value passed to formatCount: ${t}`);return TT.format(t)};function $n(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const ET=Object.freeze({"+":"codicon codicon-plus","-":"codicon codicon-circle-slash","~":"codicon codicon-record"}),Bl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function ql(t){let e,n=wt(t[0].count)+"",s,r;return{c(){e=re("("),s=re(n),r=re(")")},m(i,o){A(i,e,o),A(i,s,o),A(i,r,o)},p(i,o){o&1&&n!==(n=wt(i[0].count)+"")&&de(s,n)},d(i){i&&S(e),i&&S(s),i&&S(r)}}}function kT(t){let e,n=$n(t[0].name)+"",s,r,i,o,a,c=t[0].count&&ql(t);return{c(){e=w("li"),s=re(n),r=O(),c&&c.c(),f(e,"class",i=it(Bl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),ue(e,"no-icon",t[0].type!=="supertag")},m(l,u){A(l,e,u),y(e,s),y(e,r),c&&c.m(e,null),o||(a=[B(e,"click",t[2]),B(e,"contextmenu",Du(t[3]))],o=!0)},p(l,[u]){u&1&&n!==(n=$n(l[0].name)+"")&&de(s,n),l[0].count?c?c.p(l,u):(c=ql(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null),u&1&&i!==(i=it(Bl[l[0].modifier])+" svelte-13vl0re")&&f(e,"class",i),u&1&&ue(e,"no-icon",l[0].type!=="supertag")},i:E,o:E,d(l){l&&S(e),c&&c.d(),o=!1,me(a)}}}function ST(t,e,n){let{tag:s}=e;const r=Ke(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class wp extends W{constructor(e){super(),G(this,e,ST,kT,H,{tag:0})}}function AT(t){let e,n,s,r,i;const o=t[2].default,a=Eu(o,t,t[1],null);return{c(){e=w("div"),n=w("div"),a&&a.c(),f(n,"class","dialog svelte-upm3o"),f(e,"class","backdrop svelte-upm3o")},m(c,l){A(c,e,l),y(e,n),a&&a.m(n,null),s=!0,r||(i=[B(n,"click",xp(CT)),B(e,"click",t[0]),B(e,"keyup",t[3])],r=!0)},p(c,[l]){a&&a.p&&(!s||l&2)&&Au(a,o,c,c[1],s?Su(o,c[1],l,null):Cu(c[1]),null)},i(c){s||(_(a,c),s=!0)},o(c){b(a,c),s=!1},d(c){c&&S(e),a&&a.d(c),r=!1,me(i)}}}const CT=()=>{};function DT(t,e,n){let{$$slots:s={},$$scope:r}=e;const i=Ke(),o=()=>i("close"),a=c=>{c.code==="Escape"&&o()};return t.$$set=c=>{"$$scope"in c&&n(1,r=c.$$scope)},[o,r,s,a]}class bp extends W{constructor(e){super(),G(this,e,DT,AT,H,{})}}function zl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Hl(t){let e,n;return e=new wp({props:{tag:t[9]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function RT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m,D,I,k,$,N,R,J,be,Fe=t[2],se=[];for(let ee=0;ee<Fe.length;ee+=1)se[ee]=Hl(zl(t,Fe,ee));const Pi=ee=>b(se[ee],1,1,()=>{se[ee]=null});return N=new Ja({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),N.$on("click",t[8]),{c(){e=w("section"),n=w("h3"),n.textContent="Create Supertag",s=O(),r=w("i"),i=O(),o=w("div"),a=w("label"),a.textContent="Name",c=O(),l=w("input"),u=O(),h=w("div"),d=w("label"),d.textContent="Description",p=O(),v=w("textarea"),g=O(),m=w("div"),D=w("span"),D.textContent="Tags",I=O(),k=w("ol");for(let ee=0;ee<se.length;ee+=1)se[ee].c();$=O(),F(N.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",it("codicon codicon-close")+" svelte-1rs0p3f"),f(a,"for","supertag-name"),f(a,"class","svelte-1rs0p3f"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-1rs0p3f"),f(o,"class","svelte-1rs0p3f"),f(d,"for","supertag-description"),f(d,"class","svelte-1rs0p3f"),f(v,"type","text"),f(v,"placeholder","Short description"),f(v,"id","supertag-description"),f(v,"class","svelte-1rs0p3f"),f(h,"class","svelte-1rs0p3f"),f(D,"class","svelte-1rs0p3f"),f(k,"class","svelte-1rs0p3f"),f(m,"class","svelte-1rs0p3f"),f(e,"class","svelte-1rs0p3f")},m(ee,Ie){A(ee,e,Ie),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),St(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,v),St(v,t[1]),y(e,g),y(e,m),y(m,D),y(m,I),y(m,k);for(let Ge=0;Ge<se.length;Ge+=1)se[Ge]&&se[Ge].m(k,null);y(e,$),M(N,e,null),R=!0,J||(be=[B(r,"click",t[5]),B(r,"keyup",bt(t[5])),B(l,"input",t[6]),B(v,"input",t[7])],J=!0)},p(ee,Ie){if(Ie&1&&l.value!==ee[0]&&St(l,ee[0]),Ie&2&&St(v,ee[1]),Ie&4){Fe=ee[2];let Y;for(Y=0;Y<Fe.length;Y+=1){const ct=zl(ee,Fe,Y);se[Y]?(se[Y].p(ct,Ie),_(se[Y],1)):(se[Y]=Hl(ct),se[Y].c(),_(se[Y],1),se[Y].m(k,null))}for(ce(),Y=Fe.length;Y<se.length;Y+=1)Pi(Y);le()}const Ge={};Ie&8&&(Ge.title=ee[3]?"Click to create supertag":"Enter a valid name to continue"),Ie&8&&(Ge.disabled=!ee[3]),N.$set(Ge)},i(ee){if(!R){for(let Ie=0;Ie<Fe.length;Ie+=1)_(se[Ie]);_(N.$$.fragment,ee),R=!0}},o(ee){se=se.filter(Boolean);for(let Ie=0;Ie<se.length;Ie+=1)b(se[Ie]);b(N.$$.fragment,ee),R=!1},d(ee){ee&&S(e),Ot(se,ee),x(N),J=!1,me(be)}}}function NT(t){let e,n;return e=new bp({props:{$$slots:{default:[RT]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,[r]){const i={};r&4111&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function $T(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ke(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new vp(r,i,o.map(yp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Js(r))},[r,i,o,s,a,c,l,u,h]}class OT extends W{constructor(e){super(),G(this,e,$T,NT,H,{name:0,description:1,tags:2})}}function PT(t){let e,n,s,r;return{c(){e=w("button"),f(e,"class",n=it(t[0])+" svelte-17m158f")},m(i,o){A(i,e,o),s||(r=[B(e,"click",t[1]),B(e,"keyup",bt(t[1]))],s=!0)},p(i,[o]){o&1&&n!==(n=it(i[0])+" svelte-17m158f")&&f(e,"class",n)},i:E,o:E,d(i){i&&S(e),s=!1,me(r)}}}function LT(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class Ip extends W{constructor(e){super(),G(this,e,LT,PT,H,{options:3,value:2})}}function MT(t){let e,n,s;function r(o){t[1](o)}let i={options:ET};return t[0]!==void 0&&(i.value=t[0]),e=new Ip({props:i}),Qe.push(()=>Zn(e,"value",r)),{c(){F(e.$$.fragment)},m(o,a){M(e,o,a),s=!0},p(o,[a]){const c={};!n&&a&1&&(n=!0,c.value=o[0],Jn(()=>n=!1)),e.$set(c)},i(o){s||(_(e.$$.fragment,o),s=!0)},o(o){b(e.$$.fragment,o),s=!1},d(o){x(e,o)}}}function xT(t,e,n){let{modifier:s}=e;function r(i){s=i,n(0,s)}return t.$$set=i=>{"modifier"in i&&n(0,s=i.modifier)},[s,r]}class UT extends W{constructor(e){super(),G(this,e,xT,MT,H,{modifier:0})}}function FT(t){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){A(n,e,s)},p:E,i:E,o:E,d(n){n&&S(e)}}}class Za extends W{constructor(e){super(),G(this,e,null,FT,H,{})}}let VT=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m,D){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=v,this.tags=g,this.width=m,this.type=D,Object.freeze(this)}};const ec=(t,e)=>{if(!Tp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!jT(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Tp=t=>{try{return new URL(t),!0}catch{return!1}},jT=t=>t===null||t instanceof AbortController;class Hr{constructor(e,n,s){if(!Js(e))throw TypeError("Invalid name passed to Tag constructor");if(!Ri(n))throw TypeError("Invalid count passed to Tag constructor");if(!mp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const BT=(t,e)=>new $i(e,t.name,t.count,t.type);let qT=null;const zT=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await ec(`${e}${n}`,qT);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Hr(Ep(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Ep=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'").replaceAll("&eacute;","é"),kp=20;let Sp=null;const Ap=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},HT=async(t,e)=>{const n=await ec(QT(t,e),Sp);Ap(n);try{return(await n.json()).map(GT)}catch{return[]}},KT=async t=>{const e=await ec(YT(t),Sp);Ap(e);const n=await e.text(),r=new DOMParser().parseFromString(n,"text/xml"),i=Number(r.getElementsByTagName("posts")[0].getAttribute("count"));return XT(i),i},GT=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,v=t.comment_count,g=t.status,m=t.source;return new VT(s,o,r,Number(v),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),m,g,WT(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},WT=t=>t.map(e=>new Hr(Ep(e.tag),e.count,e.type)).sort((e,n)=>jl(e.type)-jl(n.type)),QT=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${kp}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},YT=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},XT=t=>{if(!Ri(t))throw new Error("Unexpected response received in getPage")};let JT=class{constructor(e,n,s){ZT(e),tE(n),eE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const ZT=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},eE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},tE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Kl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Gl=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Kl:`${Kl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(nE(a.attributes));return o},nE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new JT(e.value,n.value,s.value)};function sE(t){let e,n,s=$n(t[0].name)+"",r,i,o,a=wt(t[0].count)+"",c,l,u,h;return{c(){e=w("li"),n=w("span"),r=re(s),i=O(),o=w("span"),c=re(a),f(n,"class","tag-name svelte-1gc0x48"),f(o,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",l=t[0].name),f(e,"class","svelte-1gc0x48"),ue(e,"selected",t[1])},m(d,p){A(d,e,p),y(e,n),y(n,r),y(e,i),y(e,o),y(o,c),u||(h=[B(e,"click",t[2]),B(e,"keypress",bt(t[2]))],u=!0)},p(d,[p]){p&1&&s!==(s=$n(d[0].name)+"")&&de(r,s),p&1&&a!==(a=wt(d[0].count)+"")&&de(c,a),p&1&&l!==(l=d[0].name)&&f(e,"title",l),p&2&&ue(e,"selected",d[1])},i:E,o:E,d(d){d&&S(e),u=!1,me(h)}}}function rE(t,e,n){let{tag:s}=e,{selected:r=!1}=e;const i=Ke(),o=()=>i("click",s);return t.$$set=a=>{"tag"in a&&n(0,s=a.tag),"selected"in a&&n(1,r=a.selected)},[s,r,o]}class iE extends W{constructor(e){super(),G(this,e,rE,sE,H,{tag:0,selected:1})}}function oE(t){let e,n,s;return{c(){e=w("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class","codicon codicon-question spaced svelte-akp9se")},m(r,i){A(r,e,i),n||(s=[B(e,"click",t[0]),B(e,"keyup",bt(t[0]))],n=!0)},p:E,i:E,o:E,d(r){r&&S(e),n=!1,me(s)}}}function aE(t){return[()=>yn.navigateTo("help")]}class cE extends W{constructor(e){super(),G(this,e,aE,oE,H,{})}}function Wl(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function lE(t){let e,n,s,r,i=t[20].message+"",o;return{c(){e=w("div"),n=w("i"),s=O(),r=w("span"),o=re(i),f(n,"class",it("codicon codicon-error")+" svelte-9l8t0y"),f(e,"class","suggestion-footer svelte-9l8t0y")},m(a,c){A(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&2&&i!==(i=a[20].message+"")&&de(o,i)},i:E,o:E,d(a){a&&S(e)}}}function uE(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=Ql(Wl(t,r,a));const o=a=>b(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=O(),n=w("div"),f(n,"class","suggestion-footer svelte-9l8t0y")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);A(a,e,c),A(a,n,c),s=!0},p(a,c){if(c&100){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=Wl(a,r,l);i[l]?(i[l].p(u,c),_(i[l],1)):(i[l]=Ql(u),i[l].c(),_(i[l],1),i[l].m(e.parentNode,e))}for(ce(),l=r.length;l<i.length;l+=1)o(l);le()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)_(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);s=!1},d(a){Ot(i,a),a&&S(e),a&&S(n)}}}function Ql(t){let e,n;return e=new iE({props:{tag:t[17],selected:t[19]===t[2]}}),e.$on("click",function(){Gr(t[6](t[17]))&&t[6](t[17]).apply(this,arguments)}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){t=s;const i={};r&32&&(i.tag=t[17]),r&4&&(i.selected=t[19]===t[2]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function hE(t){let e,n,s;return n=new Za({}),{c(){e=w("div"),F(n.$$.fragment),f(e,"class","suggestion-footer svelte-9l8t0y")},m(r,i){A(r,e,i),M(n,e,null),s=!0},p:E,i(r){s||(_(n.$$.fragment,r),s=!0)},o(r){b(n.$$.fragment,r),s=!1},d(r){r&&S(e),x(n)}}}function dE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g;function m(k){t[11](k)}let D={};t[3]!==void 0&&(D.modifier=t[3]),o=new UT({props:D}),Qe.push(()=>Zn(o,"modifier",m)),l=new cE({});let I={ctx:t,current:null,token:null,hasCatch:!0,pending:hE,then:uE,catch:lE,error:20,blocks:[,,,]};return br(d=t[1],I),{c(){e=w("div"),n=w("i"),s=O(),r=w("input"),i=O(),F(o.$$.fragment),c=O(),F(l.$$.fragment),u=O(),h=w("ol"),I.block.c(),f(n,"class","codicon codicon-search spaced svelte-9l8t0y"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-9l8t0y"),f(h,"class","svelte-9l8t0y"),ue(h,"open",t[4]),f(e,"class","searchbar svelte-9l8t0y"),ue(e,"open",t[4])},m(k,$){A(k,e,$),y(e,n),y(e,s),y(e,r),St(r,t[0]),y(e,i),M(o,e,null),y(e,c),M(l,e,null),y(e,u),y(e,h),I.block.m(h,I.anchor=null),I.mount=()=>h,I.anchor=null,p=!0,v||(g=[B(r,"input",t[7]),B(r,"focus",t[8]),B(r,"blur",t[9]),B(r,"keyup",t[10]),B(e,"blur",t[12])],v=!0)},p(k,[$]){t=k,$&1&&r.value!==t[0]&&St(r,t[0]);const N={};!a&&$&8&&(a=!0,N.modifier=t[3],Jn(()=>a=!1)),o.$set(N),I.ctx=t,$&2&&d!==(d=t[1])&&br(d,I)||Nu(I,t,$),(!p||$&16)&&ue(h,"open",t[4]),(!p||$&16)&&ue(e,"open",t[4])},i(k){p||(_(o.$$.fragment,k),_(l.$$.fragment,k),_(I.block),p=!0)},o(k){b(o.$$.fragment,k),b(l.$$.fragment,k);for(let $=0;$<3;$+=1){const N=I.blocks[$];b(N)}p=!1},d(k){k&&S(e),x(o),x(l),I.block.d(),I.token=null,I=null,v=!1,me(g)}}}function fE(t,e,n){let s;Ne(t,ks,$=>n(13,s=$));const r=Ke();let i,o="",a=0,c="+",l=!1,u=[];const h=$=>()=>{r("pick",BT($,c)),p()};async function d($){n(4,l=!0),n(5,u=[...s.supertags.filter(N=>N.name.toLowerCase().includes($.toLowerCase())).map(N=>new Hr(N.name,Object.keys(N.tags).length,"supertag")),...await zT($)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function v(){o=this.value,n(0,o)}const g=()=>{document.getElementById("title").scrollIntoView()},m=$=>{(!$.relatedTarget||!$.target.parentNode.contains($.relatedTarget))&&n(4,l=!1)},D=$=>{_p($)?h(u.length>a?u[a]:new Hr(o,0,"ambiguous"))():$.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):$.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)};function I($){c=$,n(3,c)}const k=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,v,g,m,D,I,k]}class pE extends W{constructor(e){super(),G(this,e,fE,dE,H,{})}}const Cp=JSON.parse,Dp=JSON.stringify,Rp=(t,e,n=Dp,s=Cp)=>{const r=Np(t,s,e),i=As(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},Oi=(t,e,n=Dp,s=Cp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Np(t,s):null,o=As(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Np=(t,e,n)=>{try{const s=e(localStorage.getItem(t));return typeof s=="object"&&typeof n=="object"?{...n,...s}:s}catch{return null}};function gE(){const t=[],{subscribe:e,update:n,set:s}=Oi("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new $i("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const pt=gE(),mE=Object.freeze({artist:"codicon codicon-edit",character:"codicon codicon-person",copyright:"codicon codicon-folder",metadata:"codicon codicon-info",rating:"codicon codicon-unverified",source:"codicon codicon-link",supertag:"codicon codicon-star-full"}),Yl=t=>mE[t]??"";function yE(t){let e,n=$n(t[0].name)+"",s,r,i,o;return{c(){e=w("button"),s=re(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class",r=it(Yl(t[0].type))+" svelte-d6seti"),ue(e,"active",t[3]),ue(e,"icon",t[2]),ue(e,"supertag",t[4])},m(a,c){A(a,e,c),y(e,s),i||(o=B(e,"click",function(){Gr(t[4]?Xl:t[8])&&(t[4]?Xl:t[8]).apply(this,arguments)}),i=!0)},p(a,[c]){t=a,c&1&&n!==(n=$n(t[0].name)+"")&&de(s,n),c&1&&r!==(r=it(Yl(t[0].type))+" svelte-d6seti")&&f(e,"class",r),c&9&&ue(e,"active",t[3]),c&5&&ue(e,"icon",t[2]),c&17&&ue(e,"supertag",t[4])},i:E,o:E,d(a){a&&S(e),i=!1,o()}}}const Xl=()=>{};function vE(t,e,n){let s,r,i,o,a,c,l;Ne(t,pt,d=>n(6,c=d)),Ne(t,ks,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?pt.removeByIndex(r):pt.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,s=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,r=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=s.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=r>=0),t.$$.dirty&1&&n(2,a=yT(u.type))},[u,r,a,o,i,s,c,l,h]}class _E extends W{constructor(e){super(),G(this,e,vE,yE,H,{tag:0})}}function wE(t){let e,n,s,r,i;return{c(){e=w("i"),n=O(),s=w("a"),r=re(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),y(s,r)},p(o,[a]){a&2&&de(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:E,o:E,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function bE(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class IE extends W{constructor(e){super(),G(this,e,bE,wE,H,{url:0})}}function TE(t){let e,n,s,r;return{c(){e=w("i"),n=O(),s=w("span"),r=re(t[0]),f(e,"class","codicon codicon-link")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),y(s,r)},p(i,o){o&1&&de(r,i[0])},i:E,o:E,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function EE(t){let e,n;return e=new IE({props:{url:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function kE(t){let e,n,s,r;const i=[EE,TE],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Je()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function SE(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=Tp(r)?new URL(r):null)},[r,s]}class AE extends W{constructor(e){super(),G(this,e,SE,kE,H,{source:0})}}function CE(t){let e,n;const s=t[1].default,r=Eu(s,t,t[0],null);return{c(){e=w("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){A(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Au(r,s,i,i[0],n?Su(s,i[0],o,null):Cu(i[0]),null)},i(i){n||(_(r,i),n=!0)},o(i){b(r,i),n=!1},d(i){i&&S(e),r&&r.d(i)}}}function DE(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class _r extends W{constructor(e){super(),G(this,e,DE,CE,H,{})}}const Jl=6e4,Kr=t=>{if(!RE(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Jl,s=new Date().getTime()/Jl-e;if(s<1)return"just now";if(s<60)return dn(s,"minute");const r=s/60;if(r<24)return dn(r,"hour");const i=r/24;if(i<7)return dn(i,"day");if(i<30.5)return dn(i/7,"week");if(i<365.25)return dn(i/30.5,"month");const o=i/365.25;return dn(o,"year")},RE=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",dn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function NE(t){let e,n,s,r=Kr(t[0])+"",i;return{c(){e=w("i"),n=O(),s=w("span"),i=re(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Kr(o[0])+"")&&de(i,r)},i:E,o:E,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function $E(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class OE extends W{constructor(e){super(),G(this,e,$E,NE,H,{value:0})}}function PE(t){let e,n,s,r=wt(t[0])+"",i;return{c(){e=w("i"),n=O(),s=w("span"),i=re(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=wt(o[0])+"")&&de(i,r)},i:E,o:E,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function LE(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class ME extends W{constructor(e){super(),G(this,e,LE,PE,H,{value:0})}}function xE(t){let e,n,s=t[0].author+"",r,i,o,a=Kr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=w("div"),n=w("span"),r=re(s),i=O(),o=w("span"),c=re(a),l=O(),u=w("span"),d=re(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,v){A(p,e,v),y(e,n),y(n,r),y(e,i),y(e,o),y(o,c),y(e,l),y(e,u),y(u,d)},p(p,[v]){v&1&&s!==(s=p[0].author+"")&&de(r,s),v&1&&a!==(a=Kr(p[0].createdAt)+"")&&de(c,a),v&1&&h!==(h=p[0].content+"")&&de(d,h)},i:E,o:E,d(p){p&&S(e)}}}function UE(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class FE extends W{constructor(e){super(),G(this,e,UE,xE,H,{comment:0})}}function VE(t){let e,n,s,r;return{c(){e=w("i"),n=O(),s=w("a"),r=re("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),y(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:E,o:E,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function jE(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class BE extends W{constructor(e){super(),G(this,e,jE,VE,H,{url:0})}}function Zl(t,e,n){const s=t.slice();return s[8]=e[n],s}function eu(t,e,n){const s=t.slice();return s[4]=e[n],s}function tu(t){let e,n,s,r,i;return{c(){e=w("i"),n=O(),s=w("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),ue(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),ue(s,"active",t[1]==="comments")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),r||(i=[B(e,"click",t[2]),B(s,"click",t[3])],r=!0)},p(o,a){a&2&&ue(e,"active",o[1]==="tags"),a&2&&ue(s,"active",o[1]==="comments")},d(o){o&&S(e),o&&S(n),o&&S(s),r=!1,me(i)}}}function qE(t){let e,n;return e=new OE({props:{value:t[0].change}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function zE(t){let e,n;return e=new ME({props:{value:t[0].score}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function HE(t){let e,n;return e=new BE({props:{url:t[0].file_url}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function nu(t){let e,n;return e=new _r({props:{$$slots:{default:[KE]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function KE(t){let e,n;return e=new AE({props:{source:t[0].source}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function GE(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:ZE,then:YE,catch:QE,value:7,blocks:[,,,]};return br(n=Gl(t[0].id),r),{c(){e=Je(),r.block.c()},m(i,o){A(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=Gl(t[0].id))&&br(n,r)||Nu(r,t,o)},i(i){s||(_(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];b(a)}s=!1},d(i){i&&S(e),r.block.d(i),r.token=null,r=null}}}function WE(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=ru(eu(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=eu(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=ru(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&S(e),Ot(r,o)}}}function QE(t){return{c:E,m:E,p:E,i:E,o:E,d:E}}function YE(t){let e,n,s,r;const i=[JE,XE],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Je()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function XE(t){let e;return{c(){e=w("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){A(n,e,s)},p:E,i:E,o:E,d(n){n&&S(e)}}}function JE(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=su(Zl(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=Zl(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=su(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&S(e),Ot(r,o)}}}function su(t){let e,n;return e=new FE({props:{comment:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ZE(t){let e,n;return e=new Za({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ru(t){let e,n;return e=new _E({props:{tag:t[4]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function e1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v=t[0].comment_count>0&&tu(t);r=new _r({props:{$$slots:{default:[qE]},$$scope:{ctx:t}}}),o=new _r({props:{$$slots:{default:[zE]},$$scope:{ctx:t}}}),c=new _r({props:{$$slots:{default:[HE]},$$scope:{ctx:t}}});let g=t[0].source&&nu(t);const m=[WE,GE],D=[];function I(k,$){return k[1]==="tags"?0:1}return h=I(t),d=D[h]=m[h](t),{c(){e=w("div"),n=w("div"),v&&v.c(),s=O(),F(r.$$.fragment),i=O(),F(o.$$.fragment),a=O(),F(c.$$.fragment),l=O(),g&&g.c(),u=O(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(k,$){A(k,e,$),y(e,n),v&&v.m(n,null),y(n,s),M(r,n,null),y(n,i),M(o,n,null),y(n,a),M(c,n,null),y(n,l),g&&g.m(n,null),y(e,u),D[h].m(e,null),p=!0},p(k,[$]){k[0].comment_count>0?v?v.p(k,$):(v=tu(k),v.c(),v.m(n,s)):v&&(v.d(1),v=null);const N={};$&2049&&(N.$$scope={dirty:$,ctx:k}),r.$set(N);const R={};$&2049&&(R.$$scope={dirty:$,ctx:k}),o.$set(R);const J={};$&2049&&(J.$$scope={dirty:$,ctx:k}),c.$set(J),k[0].source?g?(g.p(k,$),$&1&&_(g,1)):(g=nu(k),g.c(),_(g,1),g.m(n,null)):g&&(ce(),b(g,1,1,()=>{g=null}),le());let be=h;h=I(k),h===be?D[h].p(k,$):(ce(),b(D[be],1,1,()=>{D[be]=null}),le(),d=D[h],d?d.p(k,$):(d=D[h]=m[h](k),d.c()),_(d,1),d.m(e,null))},i(k){p||(_(r.$$.fragment,k),_(o.$$.fragment,k),_(c.$$.fragment,k),_(g),_(d),p=!0)},o(k){b(r.$$.fragment,k),b(o.$$.fragment,k),b(c.$$.fragment,k),b(g),b(d),p=!1},d(k){k&&S(e),v&&v.d(),x(r),x(o),x(c),g&&g.d(),D[h].d()}}}function t1(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class n1 extends W{constructor(e){super(),G(this,e,t1,e1,H,{post:0})}}const On=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function s1(t){let e,n,s,r,i,o,a,c;return{c(){e=w("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=[B(e,"click",t[4]),B(e,"keyup",bt(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:E,o:E,d(l){l&&S(e),t[3](null),a=!1,me(c)}}}function r1(t,e,n){let{post:s}=e;const r=Ke();let i;Ss(()=>On.observe(i)),Qr(()=>On.unobserve(i));function o(l){Qe[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let i1=class extends W{constructor(e){super(),G(this,e,r1,s1,H,{post:0})}};function o1(t){let e,n,s,r,i,o,a,c;return{c(){e=w("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].file_url),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",r=t[0].width),f(e,"height",i=t[0].height),e.controls=!0,e.loop=o=t[0].tags.some(iu),f(e,"tabindex","0"),f(e,"class","svelte-1gwvoya")},m(l,u){A(l,e,u),t[5](e),a||(c=[B(e,"click",Du(t[4])),B(e,"touchstart",t[2],{passive:!0}),B(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&r!==(r=l[0].width)&&f(e,"width",r),u&1&&i!==(i=l[0].height)&&f(e,"height",i),u&1&&o!==(o=l[0].tags.some(iu))&&(e.loop=o)},i:E,o:E,d(l){l&&S(e),t[5](null),a=!1,me(c)}}}const iu=t=>t.name=="loop";function a1(t,e,n){let{post:s}=e;const r=Ke();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};Ss(()=>On.observe(i)),Qr(()=>On.unobserve(i));function l(h){Bp.call(this,t,h)}function u(h){Qe[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},[s,i,a,c,l,u]}class c1 extends W{constructor(e){super(),G(this,e,a1,o1,H,{post:0})}}const l1="/assets/play-f2f6faca.svg",u1="/assets/load-8440afed.svg",h1="/assets/pause-6f7851a2.svg";function d1(t){let e,n;return{c(){e=w("img"),Qt(e.src,n=l1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Fp(e,"margin-left","4px")},m(s,r){A(s,e,r)},p:E,d(s){s&&S(e)}}}function f1(t){let e,n;return{c(){e=w("img"),Qt(e.src,n=h1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:E,d(s){s&&S(e)}}}function p1(t){let e,n;return{c(){e=w("img"),Qt(e.src,n=u1)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:E,d(s){s&&S(e)}}}function g1(t){let e,n,s,r,i,o,a,c,l,u,h;function d(g,m){return g[3]?p1:g[1]?f1:d1}let p=d(t),v=p(t);return{c(){e=w("div"),n=w("img"),a=O(),c=w("button"),l=w("div"),v.c(),f(n,"class","media-img svelte-2oxidf"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(n,"width",i=t[0].width),f(n,"height",o=t[0].height),f(n,"tabindex","0"),f(l,"class","circle svelte-2oxidf"),f(c,"class","svelte-2oxidf"),ue(c,"play",t[1]&&!t[3]),f(e,"class","container svelte-2oxidf")},m(g,m){A(g,e,m),y(e,n),t[9](n),y(e,a),y(e,c),y(c,l),v.m(l,null),u||(h=[B(n,"click",t[10]),B(n,"keyup",bt(t[11])),B(n,"load",t[12]),B(c,"click",t[6])],u=!0)},p(g,[m]){m&16&&f(n,"data-src",g[4]),m&1&&s!==(s=g[0].id.toString())&&f(n,"alt",s),m&1&&r!==(r=`aspect-ratio: ${g[0].width} / ${g[0].height}`)&&f(n,"style",r),m&1&&i!==(i=g[0].width)&&f(n,"width",i),m&1&&o!==(o=g[0].height)&&f(n,"height",o),p===(p=d(g))&&v?v.p(g,m):(v.d(1),v=p(g),v&&(v.c(),v.m(l,null))),m&10&&ue(c,"play",g[1]&&!g[3])},i:E,o:E,d(g){g&&S(e),t[9](null),v.d(),u=!1,me(h)}}}function m1(t,e,n){let s,r,i,{post:o}=e;const a=Ke();let c,l=!1,u=!1;const h=()=>{n(3,u=!0),n(1,l=!l),n(2,c.src=l?r:s,c)};Ss(()=>On.observe(c)),Qr(()=>On.unobserve(c));function d(m){Qe[m?"unshift":"push"](()=>{c=m,n(2,c)})}const p=()=>a("click"),v=()=>a("click"),g=()=>n(3,u=!1);return t.$$set=m=>{"post"in m&&n(0,o=m.post)},t.$$.update=()=>{t.$$.dirty&1&&n(7,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(8,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&386&&n(4,i=l?r:s)},[o,l,c,u,i,a,h,s,r,d,p,v,g]}class y1 extends W{constructor(e){super(),G(this,e,m1,g1,H,{post:0})}}function v1(t){let e,n;return e=new y1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function _1(t){let e,n;return e=new c1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function w1(t){let e,n;return e=new i1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ou(t){let e,n;return e=new n1({props:{post:t[0]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function b1(t){let e,n,s,r,i;const o=[w1,_1,v1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&ou(t);return{c(){e=w("div"),s.c(),r=O(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){A(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ce(),b(a[d],1,1,()=>{a[d]=null}),le(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),_(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&_(l,1)):(l=ou(u),l.c(),_(l,1),l.m(e,null)):l&&(ce(),b(l,1,1,()=>{l=null}),le())},i(u){i||(_(s),_(l),i=!0)},o(u){b(s),b(l),i=!1},d(u){u&&S(e),a[n].d(),l&&l.d()}}}function I1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class T1 extends W{constructor(e){super(),G(this,e,I1,b1,H,{post:0})}}function au(t,e,n){const s=t.slice();return s[1]=e[n],s}function cu(t){let e,n;return e=new T1({props:{post:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function E1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=cu(au(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=au(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=cu(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&S(e),Ot(r,o)}}}function k1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class S1 extends W{constructor(e){super(),G(this,e,k1,E1,H,{posts:0})}}function A1(t){let e;return{c(){e=w("div")},m(n,s){A(n,e,s),t[1](e)},p:E,i:E,o:E,d(n){n&&S(e),t[1](null)}}}function C1(t,e,n){const s=Ke(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Qe[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class D1 extends W{constructor(e){super(),G(this,e,C1,A1,H,{})}}const R1="/assets/shironeko-x-c28cad00.png";function N1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=O(),i=w("span"),i.textContent="You have reached the end",Qt(n.src,s=R1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){A(o,e,a),y(e,n),y(e,r),y(e,i)},p:E,i:E,o:E,d(o){o&&S(e)}}}class $1 extends W{constructor(e){super(),G(this,e,null,N1,H,{})}}const O1="/assets/shironeko-confused-4071d5b2.png";function P1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=O(),i=w("span"),i.textContent="No results found",Qt(n.src,s=O1)||f(n,"src",s),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){A(o,e,a),y(e,n),y(e,r),y(e,i)},p:E,i:E,o:E,d(o){o&&S(e)}}}class L1 extends W{constructor(e){super(),G(this,e,null,P1,H,{})}}const lu=()=>({pages:[],nextPage:0,ids:new Set}),M1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},x1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},U1=()=>{const{subscribe:t,update:e,set:n}=Oi("results",lu(),M1,x1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(lu())}}},Xn=U1(),F1=()=>{const{subscribe:t,set:e}=Oi("count",null);return{subscribe:t,set:e,reset(){e(0)}}},tc=F1(),V1={sortProperty:"id",scoreValue:0,scoreComparator:">=",sortDirection:"desc"},j1=()=>{const{subscribe:t,set:e}=Rp("sort",V1);return{subscribe:t,set:e}},mn=j1();function uu(t,e,n){const s=t.slice();return s[0]=e[n][0],s[3]=e[n][1],s}function hu(t){let e,n=t[3]+"",s,r;return{c(){e=w("option"),s=re(n),e.__value=r=t[0],e.value=e.__value,f(e,"class","svelte-q7wjrm")},m(i,o){A(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&de(s,n),o&2&&r!==(r=i[0])&&(e.__value=r,e.value=e.__value)},d(i){i&&S(e)}}}function B1(t){let e,n,s,r=Object.entries(t[1]),i=[];for(let o=0;o<r.length;o+=1)i[o]=hu(uu(t,r,o));return{c(){e=w("select");for(let o=0;o<i.length;o+=1)i[o].c();f(e,"class","svelte-q7wjrm"),t[0]===void 0&&wr(()=>t[2].call(e))},m(o,a){A(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);ac(e,t[0],!0),n||(s=B(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=Object.entries(o[1]);let c;for(c=0;c<r.length;c+=1){const l=uu(o,r,c);i[c]?i[c].p(l,a):(i[c]=hu(l),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&ac(e,o[0])},i:E,o:E,d(o){o&&S(e),Ot(i,o),n=!1,s()}}}function q1(t,e,n){let{options:s}=e,{value:r}=e;function i(){r=Vp(this),n(0,r),n(1,s)}return t.$$set=o=>{"options"in o&&n(1,s=o.options),"value"in o&&n(0,r=o.value)},[r,s,i]}class z1 extends W{constructor(e){super(),G(this,e,q1,B1,H,{options:1,value:0})}}function H1(t){let e,n,s,r;return{c(){e=w("button"),n=re(t[0]),f(e,"class","svelte-17m158f")},m(i,o){A(i,e,o),y(e,n),s||(r=[B(e,"click",t[1]),B(e,"keyup",bt(t[1]))],s=!0)},p(i,[o]){o&1&&de(n,i[0])},i:E,o:E,d(i){i&&S(e),s=!1,me(r)}}}function K1(t,e,n){let s,r,{options:i}=e,{value:o}=e,a=Object.keys(i).indexOf(o);const c=()=>{n(4,a=(a+1)%s.length),n(2,o=s[a][0])};return t.$$set=l=>{"options"in l&&n(3,i=l.options),"value"in l&&n(2,o=l.value)},t.$$.update=()=>{t.$$.dirty&8&&n(5,s=Object.entries(i)),t.$$.dirty&48&&n(0,r=s[a][1])},[r,c,o,i,a,s]}class G1 extends W{constructor(e){super(),G(this,e,K1,H1,H,{options:3,value:2})}}function du(t){let e,n;return e=new bp({props:{$$slots:{default:[W1]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&1025&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function W1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m,D,I,k,$,N,R,J,be;function Fe(Y){t[6](Y)}let se={options:X1};t[0].sortDirection!==void 0&&(se.value=t[0].sortDirection),o=new Ip({props:se}),Qe.push(()=>Zn(o,"value",Fe));function Pi(Y){t[7](Y)}let ee={options:Y1};t[0].sortProperty!==void 0&&(ee.value=t[0].sortProperty),l=new z1({props:ee}),Qe.push(()=>Zn(l,"value",Pi));function Ie(Y){t[8](Y)}let Ge={options:J1};return t[0].scoreComparator!==void 0&&(Ge.value=t[0].scoreComparator),m=new G1({props:Ge}),Qe.push(()=>Zn(m,"value",Ie)),N=new Ja({props:{text:"Done",title:"Return to searching."}}),N.$on("click",t[5]),{c(){e=w("div"),n=w("label"),s=w("b"),s.textContent="Sorting",r=O(),i=w("div"),F(o.$$.fragment),c=O(),F(l.$$.fragment),h=O(),d=w("label"),p=w("b"),p.textContent="Score Filtering",v=O(),g=w("div"),F(m.$$.fragment),I=O(),k=w("input"),$=O(),F(N.$$.fragment),f(i,"class","row svelte-1k7zufl"),f(n,"class","svelte-1k7zufl"),f(k,"type","number"),f(k,"min",0),f(k,"max",1e5),f(k,"step",1),f(k,"class","svelte-1k7zufl"),f(g,"class","row svelte-1k7zufl"),f(d,"class","svelte-1k7zufl"),f(e,"class","container svelte-1k7zufl")},m(Y,ct){A(Y,e,ct),y(e,n),y(n,s),y(n,r),y(n,i),M(o,i,null),y(i,c),M(l,i,null),y(e,h),y(e,d),y(d,p),y(d,v),y(d,g),M(m,g,null),y(g,I),y(g,k),St(k,t[0].scoreValue),y(e,$),M(N,e,null),R=!0,J||(be=[B(k,"input",t[9]),B(k,"keyup",bt(ek))],J=!0)},p(Y,ct){const sc={};!a&&ct&1&&(a=!0,sc.value=Y[0].sortDirection,Jn(()=>a=!1)),o.$set(sc);const rc={};!u&&ct&1&&(u=!0,rc.value=Y[0].sortProperty,Jn(()=>u=!1)),l.$set(rc);const ic={};!D&&ct&1&&(D=!0,ic.value=Y[0].scoreComparator,Jn(()=>D=!1)),m.$set(ic),ct&1&&Ru(k.value)!==Y[0].scoreValue&&St(k,Y[0].scoreValue)},i(Y){R||(_(o.$$.fragment,Y),_(l.$$.fragment,Y),_(m.$$.fragment,Y),_(N.$$.fragment,Y),R=!0)},o(Y){b(o.$$.fragment,Y),b(l.$$.fragment,Y),b(m.$$.fragment,Y),b(N.$$.fragment,Y),R=!1},d(Y){Y&&S(e),x(o),x(l),x(m),x(N),J=!1,me(be)}}}function Q1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m=t[1]&&du(t);return{c(){e=w("button"),n=w("i"),s=O(),r=w("span"),i=re(t[3]),o=O(),a=w("i"),c=O(),l=w("span"),u=re(t[2]),h=O(),m&&m.c(),d=Je(),f(n,"class","codicon codicon-filter svelte-1k7zufl"),f(a,"class","codicon codicon-arrow-swap svelte-1k7zufl"),f(e,"class","svelte-1k7zufl")},m(D,I){A(D,e,I),y(e,n),y(e,s),y(e,r),y(r,i),y(e,o),y(e,a),y(e,c),y(e,l),y(l,u),A(D,h,I),m&&m.m(D,I),A(D,d,I),p=!0,v||(g=[B(e,"click",t[4]),B(e,"keypress",bt(t[4]))],v=!0)},p(D,[I]){(!p||I&8)&&de(i,D[3]),(!p||I&4)&&de(u,D[2]),D[1]?m?(m.p(D,I),I&2&&_(m,1)):(m=du(D),m.c(),_(m,1),m.m(d.parentNode,d)):m&&(ce(),b(m,1,1,()=>{m=null}),le())},i(D){p||(_(m),p=!0)},o(D){b(m),p=!1},d(D){D&&S(e),D&&S(h),m&&m.d(D),D&&S(d),v=!1,me(g)}}}const Y1=Object.freeze({id:"Upload",score:"Score",updated:"Change"}),X1=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),J1=Object.freeze({">=":"≥","<=":"≤"}),Z1=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),ek=t=>t.target.blur();function tk(t,e,n){let s,r,i;Ne(t,mn,p=>n(0,i=p));let o=!1;const a=()=>n(1,o=!0),c=()=>n(1,o=!1);function l(p){t.$$.not_equal(i.sortDirection,p)&&(i.sortDirection=p,mn.set(i))}function u(p){t.$$.not_equal(i.sortProperty,p)&&(i.sortProperty=p,mn.set(i))}function h(p){t.$$.not_equal(i.scoreComparator,p)&&(i.scoreComparator=p,mn.set(i))}function d(){i.scoreValue=Ru(this.value),mn.set(i)}return t.$$.update=()=>{t.$$.dirty&1&&n(3,s=i.scoreValue===0&&i.scoreComparator===">="?"All":`Score${i.scoreComparator}${wt(i.scoreValue)}`),t.$$.dirty&1&&n(2,r=Z1[i.sortProperty][i.sortDirection])},[i,o,r,s,a,c,l,u,h,d]}class nk extends W{constructor(e){super(),G(this,e,tk,Q1,H,{})}}function sk(t){let e,n,s=wt(t[0])+"",r,i,o,a,c,l;return c=new nk({}),{c(){e=w("div"),n=w("span"),r=re(s),i=re(" results"),a=O(),F(c.$$.fragment),f(n,"title",o=`${t[0]} results`),f(n,"class","svelte-1rplsy"),f(e,"class","container svelte-1rplsy")},m(u,h){A(u,e,h),y(e,n),y(n,r),y(n,i),y(e,a),M(c,e,null),l=!0},p(u,[h]){(!l||h&1)&&s!==(s=wt(u[0])+"")&&de(r,s),(!l||h&1&&o!==(o=`${u[0]} results`))&&f(n,"title",o)},i(u){l||(_(c.$$.fragment,u),l=!0)},o(u){b(c.$$.fragment,u),l=!1},d(u){u&&S(e),x(c)}}}function rk(t,e,n){let s;return Ne(t,tc,r=>n(0,s=r)),[s]}class ik extends W{constructor(e){super(),G(this,e,rk,sk,H,{})}}function fu(t,e,n){const s=t.slice();return s[8]=e[n],s}function ok(t){let e,n;return e=new L1({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ak(t){let e,n,s,r,i,o,a,c;e=new ik({}),e.$on("configchange",t[6]);let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=pu(fu(t,l,g));const h=g=>b(u[g],1,1,()=>{u[g]=null}),d=[lk,ck],p=[];function v(g,m){return g[3]?0:1}return i=v(t),o=p[i]=d[i](t),{c(){F(e.$$.fragment),n=O(),s=w("ol");for(let g=0;g<u.length;g+=1)u[g].c();r=O(),o.c(),a=Je(),f(s,"class","svelte-dsypei")},m(g,m){M(e,g,m),A(g,n,m),A(g,s,m);for(let D=0;D<u.length;D+=1)u[D]&&u[D].m(s,null);A(g,r,m),p[i].m(g,m),A(g,a,m),c=!0},p(g,m){if(m&2){l=g[1].pages;let I;for(I=0;I<l.length;I+=1){const k=fu(g,l,I);u[I]?(u[I].p(k,m),_(u[I],1)):(u[I]=pu(k),u[I].c(),_(u[I],1),u[I].m(s,null))}for(ce(),I=l.length;I<u.length;I+=1)h(I);le()}let D=i;i=v(g),i===D?p[i].p(g,m):(ce(),b(p[D],1,1,()=>{p[D]=null}),le(),o=p[i],o?o.p(g,m):(o=p[i]=d[i](g),o.c()),_(o,1),o.m(a.parentNode,a))},i(g){if(!c){_(e.$$.fragment,g);for(let m=0;m<l.length;m+=1)_(u[m]);_(o),c=!0}},o(g){b(e.$$.fragment,g),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)b(u[m]);b(o),c=!1},d(g){x(e,g),g&&S(n),g&&S(s),Ot(u,g),g&&S(r),p[i].d(g),g&&S(a)}}}function pu(t){let e,n;return e=new S1({props:{posts:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.posts=s[8]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ck(t){let e,n;return e=new $1({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function lk(t){let e,n;return e=new D1({}),e.$on("visible",t[7]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function uk(t){let e,n,s,r;const i=[ak,ok],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Je()},m(c,l){~e&&o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ce(),b(o[u],1,1,()=>{o[u]=null}),le()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){~e&&o[e].d(c),c&&S(s)}}}function hk(t,e,n){let s,r,i,o,a;Ne(t,tc,h=>n(0,o=h)),Ne(t,Xn,h=>n(1,a=h));const c=Ke(),l=()=>c("configchange"),u=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o/kp),t.$$.dirty&34&&n(3,r=a.pages.length<s),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,r,c,s,l,u]}class dk extends W{constructor(e){super(),G(this,e,hk,uk,H,{})}}function fk(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-1b7u605"),ue(e,"visible",t[0])},m(r,i){A(r,e,i),n||(s=B(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&ue(e,"visible",r[0])},i:E,o:E,d(r){r&&S(e),n=!1,s()}}}function pk(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Ss(()=>{document.addEventListener("scroll",i,{passive:!0})}),Qr(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class gk extends W{constructor(e){super(),G(this,e,pk,fk,H,{})}}function mk(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=w("div"),n=w("div"),s=w("i"),i=O(),o=w("div"),a=w("h3"),c=re(t[2]),l=O(),u=w("span"),h=re(t[1]),f(s,"class",r=it(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){A(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=it(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&de(c,d[2]),p&2&&de(h,d[1])},i:E,o:E,d(d){d&&S(e)}}}function yk(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class $p extends W{constructor(e){super(),G(this,e,yk,mk,H,{icon:0,message:1,title:2})}}function vk(t){let e;return{c(){e=w("h1"),e.textContent="kurosearch",f(e,"id","title"),f(e,"class","svelte-1qsrrgo")},m(n,s){A(n,e,s)},p:E,i:E,o:E,d(n){n&&S(e)}}}class _k extends W{constructor(e){super(),G(this,e,null,vk,H,{})}}function gu(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function mu(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=yu(gu(t,r,c));const o=c=>b(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&t[1].loggedIn&&vu(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=O(),a&&a.c(),n=Je()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);A(c,e,l),a&&a.m(c,l),A(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=gu(c,r,u);i[u]?(i[u].p(h,l),_(i[u],1)):(i[u]=yu(h),i[u].c(),_(i[u],1),i[u].m(e.parentNode,e))}for(ce(),u=r.length;u<i.length;u+=1)o(u);le()}c[0].length>1&&c[1].loggedIn?a?a.p(c,l):(a=vu(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)_(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);s=!1},d(c){Ot(i,c),c&&S(e),a&&a.d(c),c&&S(n)}}}function yu(t){let e,n;function s(){return t[3](t[8])}function r(){return t[4](t[6])}return e=new wp({props:{tag:t[6]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){F(e.$$.fragment)},m(i,o){M(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[6]),e.$set(a)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){x(e,i)}}}function vu(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-lsipoc"></i>',f(e,"class","add-supertag svelte-lsipoc"),f(e,"title","Click to create a new supertag")},m(r,i){A(r,e,i),n||(s=B(e,"click",t[5]),n=!0)},p:E,d(r){r&&S(e),n=!1,s()}}}function wk(t){let e,n,s=t[0].length&&mu(t);return{c(){e=w("ul"),s&&s.c(),f(e,"class","svelte-lsipoc")},m(r,i){A(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&_(s,1)):(s=mu(r),s.c(),_(s,1),s.m(e,null)):s&&(ce(),b(s,1,1,()=>{s=null}),le())},i(r){n||(_(s),n=!0)},o(r){b(s),n=!1},d(r){r&&S(e),s&&s.d()}}}function bk(t,e,n){let s,r;Ne(t,pt,l=>n(0,s=l)),Ne(t,pp,l=>n(1,r=l));const i=Ke();return[s,r,i,l=>pt.removeByIndex(l),l=>pt.addOrReplace(new $i(fT(l.modifier),l.name,l.count,l.type)),()=>i("supertag")]}class Ik extends W{constructor(e){super(),G(this,e,bk,wk,H,{})}}const dS=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),Tk=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class Ek{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.scoreValue=0,this.scoreComparator=">=",this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withScoreValue(e){return this.scoreValue=e,this}withScoreComparator(e){return this.scoreComparator=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=so(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=so(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),HT(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=so(this.tags,this.sortProperty,this.sortDirection,this.scoreValue,this.scoreComparator,this.blockedContent,this.supertags)),KT(this.tagString)}}const _u=()=>new Ek,so=(t,e,n,s,r,i,o)=>{const a=t.filter(h=>h.type==="supertag"),c=t.filter(h=>h.type!=="supertag"),l=[`score:${r}${s}`,`sort:${e}:${n}`];if(c.length>0){const h=ro(c.map(d=>yp(d)));l.push(h)}if(a.length>0){const h=a.map(d=>o.find(p=>d.name===p.name).tags).map(d=>`${ro(d)}`).join("+");l.push(h)}if(i.length>0){const h=i.flatMap(p=>Tk[p]).map(p=>new Ni("-",p)),d=ro(h);l.push(d)}const u=l.join("+");return console.log("searching for",u),u},ro=t=>{const e=kk(t);let n=[...wu([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${wu(e["~"]).join(" ~ ")} )`),n.join("+")},kk=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},wu=t=>t.map(e=>e.serialize()),Sk=()=>{const t=[],{subscribe:e,update:n}=Oi("blockedContent",t);return{subscribe:e,toggle(s){n(r=>r.includes(s)?r.filter(i=>i!==s):[...r,s])}}},Ak=Sk();function Ck(t){let e,n;return e=new dk({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Dk(t){let e,n,s,r;const i=[Nk,Rk],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Je()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function Rk(t){let e,n;return e=new $p({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Nk(t){let e,n;return e=new $p({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function bu(t){let e,n;return e=new OT({props:{tags:t[2]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function $k(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,v,g,m,D;n=new _k({}),r=new pE({}),r.$on("pick",t[7]),o=new Ik({}),o.$on("supertag",t[8]),l=new Ja({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const I=[Dk,Ck],k=[];function $(R,J){return R[1]!==void 0?0:1}h=$(t),d=k[h]=I[h](t),v=new gk({});let N=t[0]&&bu(t);return{c(){e=w("div"),F(n.$$.fragment),s=O(),F(r.$$.fragment),i=O(),F(o.$$.fragment),a=O(),c=w("div"),F(l.$$.fragment),u=O(),d.c(),p=O(),F(v.$$.fragment),g=O(),N&&N.c(),m=Je(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(R,J){A(R,e,J),M(n,e,null),y(e,s),M(r,e,null),y(e,i),M(o,e,null),y(e,a),y(e,c),M(l,c,null),A(R,u,J),k[h].m(R,J),A(R,p,J),M(v,R,J),A(R,g,J),N&&N.m(R,J),A(R,m,J),D=!0},p(R,[J]){let be=h;h=$(R),h===be?k[h].p(R,J):(ce(),b(k[be],1,1,()=>{k[be]=null}),le(),d=k[h],d?d.p(R,J):(d=k[h]=I[h](R),d.c()),_(d,1),d.m(p.parentNode,p)),R[0]?N?(N.p(R,J),J&1&&_(N,1)):(N=bu(R),N.c(),_(N,1),N.m(m.parentNode,m)):N&&(ce(),b(N,1,1,()=>{N=null}),le())},i(R){D||(_(n.$$.fragment,R),_(r.$$.fragment,R),_(o.$$.fragment,R),_(l.$$.fragment,R),_(d),_(v.$$.fragment,R),_(N),D=!0)},o(R){b(n.$$.fragment,R),b(r.$$.fragment,R),b(o.$$.fragment,R),b(l.$$.fragment,R),b(d),b(v.$$.fragment,R),b(N),D=!1},d(R){R&&S(e),x(n),x(r),x(o),x(l),R&&S(u),k[h].d(R),R&&S(p),x(v,R),R&&S(g),N&&N.d(R),R&&S(m)}}}function Ok(t,e,n){let s,r,i,o,a;Ne(t,mn,I=>n(6,s=I)),Ne(t,Ak,I=>n(12,r=I)),Ne(t,ks,I=>n(13,i=I)),Ne(t,pt,I=>n(2,o=I)),Ne(t,Xn,I=>n(14,a=I));let c=!1,l,u=!1,h=JSON.stringify(s);const d=async()=>{n(1,l=void 0),u=!0,Xn.reset();try{const[I,k]=await _u().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPageAndCount();Xn.addPage(I),tc.set(k)}catch(I){n(1,l=I),console.warn(I)}finally{u=!1}},p=async()=>{if(!u){n(1,l=void 0),u=!0;try{const I=await _u().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(s.sortProperty).withSortDirection(s.sortDirection).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withBlockedContent(r).getPage();Xn.addPage(I)}catch(I){n(1,l=I),console.warn(I)}finally{u=!1}}},v=I=>pt.addOrReplace(I.detail),g=()=>{n(0,c=!0)},m=I=>{ks.addSupertag(I.detail),pt.set([new $i("+",I.detail.name,I.detail.tags.length,"supertag")])},D=()=>{n(0,c=!1)};return t.$$.update=()=>{if(t.$$.dirty&96){const I=JSON.stringify(s);h!==I&&(n(5,h=I),d())}},[c,l,o,d,p,h,s,v,g,m,D]}class Pk extends W{constructor(e){super(),G(this,e,Ok,$k,H,{})}}function Lk(t){let e,n;return e=new Za({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:E,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Mk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=cc(r,i())),{c(){e&&F(e.$$.fragment),n=Je()},m(o,a){e&&M(e,o,a),A(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ce();const c=e;b(c.$$.fragment,1,0,()=>{x(c,1)}),le()}r?(e=cc(r,i()),F(e.$$.fragment),_(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}},i(o){s||(e&&_(e.$$.fragment,o),s=!0)},o(o){e&&b(e.$$.fragment,o),s=!1},d(o){o&&S(n),e&&x(e,o)}}}function xk(t){let e,n,s,r;const i=[Mk,Lk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Je()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function Uk(t,e,n){let{loadComponent:s}=e,r;return Ss(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class nc extends W{constructor(e){super(),G(this,e,Uk,xk,H,{loadComponent:1})}}function Fk(t){let e;return{c(){e=w("p"),e.textContent="You got lost..."},m(n,s){A(n,e,s)},i:E,o:E,d(n){n&&S(e)}}}function Vk(t){let e,n;return e=new nc({props:{loadComponent:Gk}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function jk(t){let e,n;return e=new nc({props:{loadComponent:Kk}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Bk(t){let e,n;return e=new nc({props:{loadComponent:Hk}}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function qk(t){let e,n;return e=new Pk({}),{c(){F(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function zk(t){let e,n,s,r;const i=[qk,Bk,jk,Vk,Fk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=w("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){A(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),s=o[n],s||(s=o[n]=i[n](c),s.c()),_(s,1),s.m(e,null))},i(c){r||(_(s),r=!0)},o(c){b(s),r=!1},d(c){c&&S(e),o[n].d()}}}const Hk=()=>Ci(()=>import("./Account-555b5190.js"),["assets/Account-555b5190.js","assets/Account-529474a3.css"]),Kk=()=>Ci(()=>import("./Preferences-61c2dec4.js"),["assets/Preferences-61c2dec4.js","assets/ParagraphHeading-8ad253f9.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-f3816ec2.css"]),Gk=()=>Ci(()=>import("./Help-45d4d53b.js"),["assets/Help-45d4d53b.js","assets/ParagraphHeading-8ad253f9.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function Wk(t,e,n){let s;return Ne(t,yn,r=>n(0,s=r)),[s]}class Qk extends W{constructor(e){super(),G(this,e,Wk,zk,H,{})}}function Yk(t){let e;return{c(){e=w("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){A(n,e,s)},p:E,i:E,o:E,d(n){n&&S(e)}}}class Xk extends W{constructor(e){super(),G(this,e,null,Yk,H,{})}}const{subscribe:Jk,set:Zk}=Rp("theme","dark"),Iu={subscribe:Jk,set(t){Zk(t),eS(t),ks.setTheme(t)}},eS=t=>{document.documentElement.classList.replace(tS(t),t)},tS=t=>t==="dark"?"light":"dark";function nS(t){let e,n,s,r,i,o;return e=new uT({}),s=new Qk({}),i=new Xk({}),{c(){F(e.$$.fragment),n=O(),F(s.$$.fragment),r=O(),F(i.$$.fragment)},m(a,c){M(e,a,c),A(a,n,c),M(s,a,c),A(a,r,c),M(i,a,c),o=!0},p:E,i(a){o||(_(e.$$.fragment,a),_(s.$$.fragment,a),_(i.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),b(s.$$.fragment,a),b(i.$$.fragment,a),o=!1},d(a){x(e,a),a&&S(n),x(s,a),a&&S(r),x(i,a)}}}function sS(t){return Iu.subscribe(e=>Iu.set(e))(),[]}class rS extends W{constructor(e){super(),G(this,e,sS,nS,H,{})}}function iS(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Ci(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new rS({target:document.getElementById("app")});iS();export{Hr as $,Du as A,Qe as B,Zn as C,Jn as D,Ja as E,St as F,Qt as G,pp as H,Je as I,Ne as J,ks as K,Fl as L,Bl as M,Rp as N,Eu as O,Au as P,Cu as Q,Su as R,W as S,Iu as T,Ak as U,oS as V,z1 as W,dS as X,wp as Y,$i as Z,_E as _,f as a,gk as a0,ET as a1,A as b,y as c,de as d,w as e,$n as f,E as g,S as h,G as i,O as j,_ as k,B as l,ce as m,it as n,bt as o,le as p,b as q,Ot as r,H as s,re as t,me as u,Ke as v,F as w,M as x,x as y,ue as z};
