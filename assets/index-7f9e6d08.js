(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function S(){}function $p(t,e){for(const n in e)t[n]=e[n];return t}function Op(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ku(t){return t()}function ac(){return Object.create(null)}function Fe(t){t.forEach(ku)}function Su(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let nr;function Tn(t,e){return nr||(nr=document.createElement("a")),nr.href=e,t===nr.href}function Pp(t){return Object.keys(t).length===0}function Mp(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function He(t,e,n){t.$$.on_destroy.push(Mp(e,n))}function Lp(t,e,n,s){if(t){const r=Au(t,e,n,s);return t[0](r)}}function Au(t,e,n,s){return t[1]&&s?$p(n.ctx.slice(),t[1](s(e))):n.ctx}function xp(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Up(t,e,n,s,r,i){if(r){const o=Au(e,n,s,i);t.p(o,r)}}function Fp(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ot(t){return t??""}function Vp(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function rn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function hn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function M(){return fe(" ")}function lt(){return fe("")}function W(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Vo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Cu(t){return t===""?null:+t}function Bp(t){return Array.from(t.childNodes)}function Ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e){t.value=e??""}function jp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function sr(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function cc(t){const e=t.querySelector(":checked");return e&&e.__value}function Ee(t,e,n){t.classList[n?"add":"remove"](e)}function qp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function lc(t,e){return new t(e)}let ls;function ht(t){ls=t}function Xr(){if(!ls)throw new Error("Function called outside component initialization");return ls}function Cs(t){Xr().$$.on_mount.push(t)}function Jr(t){Xr().$$.on_destroy.push(t)}function Ye(){const t=Xr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=qp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function zp(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const gn=[],kn=[];let _n=[];const io=[],Kp=Promise.resolve();let oo=!1;function Hp(){oo||(oo=!0,Kp.then(Bo))}function us(t){_n.push(t)}function Mk(t){io.push(t)}const xi=new Set;let dn=0;function Bo(){if(dn!==0)return;const t=ls;do{try{for(;dn<gn.length;){const e=gn[dn];dn++,ht(e),Gp(e.$$)}}catch(e){throw gn.length=0,dn=0,e}for(ht(null),gn.length=0,dn=0;kn.length;)kn.pop()();for(let e=0;e<_n.length;e+=1){const n=_n[e];xi.has(n)||(xi.add(n),n())}_n.length=0}while(gn.length);for(;io.length;)io.pop()();oo=!1,xi.clear(),ht(t)}function Gp(t){if(t.fragment!==null){t.update(),Fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(us)}}function Wp(t){const e=[],n=[];_n.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),_n=e}const fr=new Set;let Ft;function ce(){Ft={r:0,c:[],p:Ft}}function le(){Ft.r||Fe(Ft.c),Ft=Ft.p}function _(t,e){t&&t.i&&(fr.delete(t),t.i(e))}function b(t,e,n,s){if(t&&t.o){if(fr.has(t))return;fr.add(t),Ft.c.push(()=>{fr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function kr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ce(),b(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),le())}):e.block.d(1),l.c(),_(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Bo()}if(Op(t)){const r=Xr();if(t.then(i=>{ht(r),s(e.then,1,e.value,i),ht(null)},i=>{if(ht(r),s(e.catch,2,e.error,i),ht(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Du(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Lk(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function x(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||us(()=>{const o=t.$$.on_mount.map(ku).filter(Su);t.$$.on_destroy?t.$$.on_destroy.push(...o):Fe(o),t.$$.on_mount=[]}),i.forEach(us)}function U(t,e){const n=t.$$;n.fragment!==null&&(Wp(n.after_update),Fe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qp(t,e){t.$$.dirty[0]===-1&&(gn.push(t),Hp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,s,r,i,o,a=[-1]){const c=ls;ht(t);const l=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:r,bound:ac(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ac(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Qp(t,h)),d}):[],l.update(),u=!0,Fe(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Bp(e.target);l.fragment&&l.fragment.l(h),h.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&_(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),Bo()}ht(c)}class J{$destroy(){U(this,1),this.$destroy=S}$on(e,n){if(!Su(n))return S;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Pp(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn=[];function Ds(t,e=S){let n;const s=new Set;function r(a){if(Y(t,a)&&(t=a,n)){const c=!fn.length;for(const l of s)l[1](),fn.push(l,t);if(c){for(let l=0;l<fn.length;l+=2)fn[l][0](fn[l+1]);fn.length=0}}}function i(a){r(a(t))}function o(a,c=S){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||S),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Yp=Object.freeze(["search","account","settings","help"]),Xp=t=>Yp.includes(t),Jp=()=>{const{subscribe:t,set:e}=Ds("search");return{subscribe:t,navigateTo(n){if(!Xp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Vt=Jp();function Zp(t){let e,n,s,r,i,o;return{c(){e=hn("svg"),n=hn("g"),s=hn("path"),r=hn("defs"),i=hn("clipPath"),o=hn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){C(a,e,c),v(e,n),v(n,s),v(e,r),v(r,i),v(i,o)},p:S,i:S,o:S,d(a){a&&A(e)}}}class eg extends J{constructor(e){super(),X(this,e,null,Zp,Y,{})}}/**
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
 */const Nu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new ng;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=Nu(t);return Ru.encodeByteArray(e,!0)},Sr=function(t){return sg(t).replace(/\./g,"")},$u=function(t){try{return Ru.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ig=()=>rg().__FIREBASE_DEFAULTS__,og=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$u(t[1]);return e&&JSON.parse(e)},jo=()=>{try{return ig()||og()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ou=t=>{var e,n;return(n=(e=jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cg=t=>{const e=Ou(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},lg=()=>{var t;return(t=jo())===null||t===void 0?void 0:t.config},Pu=t=>{var e;return(e=jo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ug{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function hg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sr(JSON.stringify(n)),Sr(JSON.stringify(o)),a].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Mu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pg(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lu(){try{return typeof indexedDB=="object"}catch{return!1}}function xu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function gg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mg="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mg,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?yg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new et(r,a,s)}}function yg(t,e){return t.replace(vg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vg=/\{\$([^}]+)}/g;function _g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(uc(i)&&uc(o)){if(!hs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function uc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ns(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Qn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wg(t,e){const n=new bg(t,e);return n.subscribe.bind(n)}class bg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ig(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ui),r.error===void 0&&(r.error=Ui),r.complete===void 0&&(r.complete=Ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ig(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ui(){}/**
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
 */const Eg=1e3,Tg=2,kg=4*60*60*1e3,Sg=.5;function hc(t,e=Eg,n=Tg){const s=e*Math.pow(n,t),r=Math.round(Sg*s*(Math.random()-.5)*2);return Math.min(kg,s+r)}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Je{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class Ag{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ug;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(t){return t===xt?void 0:t}function Dg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ng{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ag(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Rg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},$g=re.INFO,Og={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Pg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Og[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=$g,this._logHandler=Pg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Mg=(t,e)=>e.some(n=>t instanceof n);let dc,fc;function Lg(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xg(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uu=new WeakMap,ao=new WeakMap,Fu=new WeakMap,Fi=new WeakMap,qo=new WeakMap;function Ug(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uu.set(n,t)}).catch(()=>{}),qo.set(e,t),e}function Fg(t){if(ao.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ao.set(t,e)}let co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ao.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vg(t){co=t(co)}function Bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vi(this),e,...n);return Fu.set(s,e.sort?e.sort():[e]),Ct(s)}:xg().includes(t)?function(...e){return t.apply(Vi(this),e),Ct(Uu.get(this))}:function(...e){return Ct(t.apply(Vi(this),e))}}function jg(t){return typeof t=="function"?Bg(t):(t instanceof IDBTransaction&&Fg(t),Mg(t,Lg())?new Proxy(t,co):t)}function Ct(t){if(t instanceof IDBRequest)return Ug(t);if(Fi.has(t))return Fi.get(t);const e=jg(t);return e!==t&&(Fi.set(t,e),qo.set(e,t)),e}const Vi=t=>qo.get(t);function Vu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qg=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],Bi=new Map;function pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Bi.set(e,i),i}Vg(t=>({...t,get:(e,n,s)=>pc(e,n)||t.get(e,n,s),has:(e,n)=>!!pc(e,n)||t.has(e,n)}));/**
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
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lo="@firebase/app",gc="0.9.5";/**
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
 */const Xt=new Zr("@firebase/app"),Gg="@firebase/app-compat",Wg="@firebase/analytics-compat",Qg="@firebase/analytics",Yg="@firebase/app-check-compat",Xg="@firebase/app-check",Jg="@firebase/auth",Zg="@firebase/auth-compat",em="@firebase/database",tm="@firebase/database-compat",nm="@firebase/functions",sm="@firebase/functions-compat",rm="@firebase/installations",im="@firebase/installations-compat",om="@firebase/messaging",am="@firebase/messaging-compat",cm="@firebase/performance",lm="@firebase/performance-compat",um="@firebase/remote-config",hm="@firebase/remote-config-compat",dm="@firebase/storage",fm="@firebase/storage-compat",pm="@firebase/firestore",gm="@firebase/firestore-compat",mm="firebase",ym="9.18.0";/**
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
 */const uo="[DEFAULT]",vm={[lo]:"fire-core",[Gg]:"fire-core-compat",[Qg]:"fire-analytics",[Wg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Jg]:"fire-auth",[Zg]:"fire-auth-compat",[em]:"fire-rtdb",[tm]:"fire-rtdb-compat",[nm]:"fire-fn",[sm]:"fire-fn-compat",[rm]:"fire-iid",[im]:"fire-iid-compat",[om]:"fire-fcm",[am]:"fire-fcm-compat",[cm]:"fire-perf",[lm]:"fire-perf-compat",[um]:"fire-rc",[hm]:"fire-rc-compat",[dm]:"fire-gcs",[fm]:"fire-gcs-compat",[pm]:"fire-fst",[gm]:"fire-fst-compat","fire-js":"fire-js",[mm]:"fire-js-all"};/**
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
 */const Ar=new Map,ho=new Map;function _m(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(ho.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;ho.set(e,t);for(const n of Ar.values())_m(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new on("app","Firebase",wm);/**
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
 */class bm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=ym;function Bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(n||(n=lg()),!n)throw Dt.create("no-options");const i=Ar.get(r);if(i){if(hs(n,i.options)&&hs(s,i.config))return i;throw Dt.create("duplicate-app",{appName:r})}const o=new Ng(r);for(const c of ho.values())o.addComponent(c);const a=new bm(n,s,o);return Ar.set(r,a),a}function zo(t=uo){const e=Ar.get(t);if(!e&&t===uo)return Bu();if(!e)throw Dt.create("no-app",{appName:t});return e}function Ge(t,e,n){var s;let r=(s=vm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}at(new Je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Im="firebase-heartbeat-database",Em=1,ds="firebase-heartbeat-store";let ji=null;function ju(){return ji||(ji=Vu(Im,Em,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),ji}async function Tm(t){try{return(await ju()).transaction(ds).objectStore(ds).get(qu(t))}catch(e){if(e instanceof et)Xt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function mc(t,e){try{const s=(await ju()).transaction(ds,"readwrite");return await s.objectStore(ds).put(e,qu(t)),s.done}catch(n){if(n instanceof et)Xt.warn(n.message);else{const s=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function qu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const km=1024,Sm=30*24*60*60*1e3;class Am{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Sm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yc(),{heartbeatsToSend:n,unsentEntries:s}=Cm(this._heartbeatsCache.heartbeats),r=Sr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yc(){return new Date().toISOString().substring(0,10)}function Cm(t,e=km){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lu()?xu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vc(t){return Sr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Nm(t){at(new Je("platform-logger",e=>new Kg(e),"PRIVATE")),at(new Je("heartbeat",e=>new Am(e),"PRIVATE")),Ge(lo,gc,t),Ge(lo,gc,"esm2017"),Ge("fire-js","")}Nm("");function Ko(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function zu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rm=zu,Ku=new on("auth","Firebase",zu());/**
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
 */const _c=new Zr("@firebase/auth");function pr(t,...e){_c.logLevel<=re.ERROR&&_c.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function Qe(t,...e){throw Ho(t,...e)}function nt(t,...e){return Ho(t,...e)}function Hu(t,e,n){const s=Object.assign(Object.assign({},Rm()),{[e]:n});return new on("auth","Firebase",s).create(e,{appName:t.name})}function $m(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qe(t,"argument-error"),Hu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ho(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ku.create(t,...e)}function V(t,e,...n){if(!t)throw Ho(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function mt(t,e){t||dt(e)}/**
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
 */const wc=new Map;function ft(t){mt(t instanceof Function,"Expected a class definition");let e=wc.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wc.set(t,e),e)}/**
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
 */function Om(t,e){const n=an(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(hs(i,e??{}))return r;Qe(r,"already-initialized")}return n.initialize({options:e})}function Pm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mm(){return bc()==="http:"||bc()==="https:"}function bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mm()||Mu()||"connection"in navigator)?navigator.onLine:!0}function xm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=dg()||fg()}get(){return Lm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Go(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Fm=new $s(3e4,6e4);function Os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,s,r={}){return Wu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Gu.fetch()(Qu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Um),e);try{const r=new Vm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hu(t,u,l);Qe(t,u)}}catch(r){if(r instanceof et)throw r;Qe(t,"internal-error",{message:String(r)})}}async function Ms(t,e,n,s,r={}){const i=await Ps(t,e,n,s,r);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Go(t.config,r):`${t.config.apiScheme}://${r}`}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),Fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Bm(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function jm(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qm(t,e=!1){const n=we(t),s=await n.getIdToken(e),r=Wo(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ns(qi(r.auth_time)),issuedAtTime:ns(qi(r.iat)),expirationTime:ns(qi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qi(t){return Number(t)*1e3}function Wo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const r=$u(n);return r?JSON.parse(r):(pr("Failed to decode base64 JWT payload"),null)}catch(r){return pr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zm(t){const e=Wo(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof et&&Km(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Km({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Hm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fs(t,jm(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qm(i.providerUserInfo):[],a=Wm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gm(t){const e=we(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wm(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Qm(t){return t.map(e=>{var{providerId:n}=e,s=Ko(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ym(t,e){const n=await Wu(t,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Qu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ym(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ps;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function Et(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qm(this,e)}reload(){return Gm(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fs(this,Bm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:j,isAnonymous:O,providerData:D,stsTokenManager:z}=n;V(k&&z,e,"internal-error");const oe=ps.fromJSON(this.name,z);V(typeof k=="string",e,"internal-error"),Et(h,e.name),Et(d,e.name),V(typeof j=="boolean",e,"internal-error"),V(typeof O=="boolean",e,"internal-error"),Et(p,e.name),Et(y,e.name),Et(g,e.name),Et(E,e.name),Et(m,e.name),Et(N,e.name);const ke=new Ht({uid:k,auth:e,email:d,emailVerified:j,displayName:h,isAnonymous:O,photoURL:y,phoneNumber:p,tenantId:g,stsTokenManager:oe,createdAt:m,lastLoginAt:N});return D&&Array.isArray(D)&&(ke.providerData=D.map(te=>Object.assign({},te))),E&&(ke._redirectEventId=E),ke}static async _fromIdTokenResponse(e,n,s=!1){const r=new ps;r.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Cr(i),i}}/**
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
 */class Xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xu.type="NONE";const Ic=Xu;/**
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
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gr(this.userKey,r.apiKey,i),this.fullPersistenceKey=gr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wn(ft(Ic),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(Ic);const o=gr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ht._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,s))}}/**
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
 */function Ec(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(sh(e))return"Webos";if(Qo(e))return"Safari";if((e.includes("chrome/")||Zu(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ju(t=xe()){return/firefox\//i.test(t)}function Qo(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zu(t=xe()){return/crios\//i.test(t)}function eh(t=xe()){return/iemobile/i.test(t)}function th(t=xe()){return/android/i.test(t)}function nh(t=xe()){return/blackberry/i.test(t)}function sh(t=xe()){return/webos/i.test(t)}function ei(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xm(t=xe()){var e;return ei(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jm(){return pg()&&document.documentMode===10}function rh(t=xe()){return ei(t)||th(t)||sh(t)||nh(t)||/windows phone/i.test(t)||eh(t)}function Zm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ih(t,e=[]){let n;switch(t){case"Browser":n=Ec(xe());break;case"Worker":n=`${Ec(xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${s}`}/**
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
 */class ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class ty{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tc(this),this.idTokenSubscription=new Tc(this),this.beforeStateQueue=new ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ku,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ln(t){return we(t)}class Tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=wg(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ny(t,e,n){const s=Ln(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=oh(e),{host:o,port:a}=sy(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ry()}function oh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sy(t){const e=oh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:kc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:kc(o)}}}function kc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ry(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function iy(t,e){return Ps(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oy(t,e){return Ms(t,"POST","/v1/accounts:signInWithPassword",Os(t,e))}/**
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
 */async function ay(t,e){return Ms(t,"POST","/v1/accounts:signInWithEmailLink",Os(t,e))}async function cy(t,e){return Ms(t,"POST","/v1/accounts:signInWithEmailLink",Os(t,e))}/**
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
 */class gs extends Yo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new gs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new gs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return oy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ay(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cy(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bn(t,e){return Ms(t,"POST","/v1/accounts:signInWithIdp",Os(t,e))}/**
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
 */const ly="http://localhost";class Jt extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ko(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Jt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:ly,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
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
 */function uy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hy(t){const e=Qn(Yn(t)).link,n=e?Qn(Yn(e)).deep_link_id:null,s=Qn(Yn(t)).deep_link_id;return(s?Qn(Yn(s)).link:null)||s||n||e||t}class Xo{constructor(e){var n,s,r,i,o,a;const c=Qn(Yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=uy((r=c.mode)!==null&&r!==void 0?r:null);V(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hy(e);try{return new Xo(n)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return gs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xo.parseLink(n);return V(s,"argument-error"),gs._fromEmailAndCode(e,s.code,s.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ls extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends Ls{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class ut extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ut.credential(n,s)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class kt extends Ls{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class St extends Ls{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return St.credential(n,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */async function dy(t,e){return Ms(t,"POST","/v1/accounts:signUp",Os(t,e))}/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ht._fromIdTokenResponse(e,s,r),o=Sc(s);return new Zt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Sc(s);return new Zt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dr extends et{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Dr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Dr(e,n,s,r)}}function ah(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Dr._fromErrorAndOperation(t,i,e,s):i})}async function fy(t,e,n=!1){const s=await fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",s)}/**
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
 */async function py(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await fs(t,ah(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Wo(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Zt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),i}}/**
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
 */async function ch(t,e,n=!1){const s="signIn",r=await ah(t,s,e),i=await Zt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function gy(t,e){return ch(Ln(t),e)}async function my(t,e,n){const s=Ln(t),r=await dy(s,{returnSecureToken:!0,email:e,password:n}),i=await Zt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function yy(t,e,n){return gy(we(t),xn.credential(e,n))}/**
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
 */function vy(t,e){return we(t).setPersistence(e)}function _y(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function wy(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function lh(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}function by(t){return we(t).signOut()}const Nr="__sak";/**
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
 */class uh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Iy(){const t=xe();return Qo(t)||ei(t)}const Ey=1e3,Ty=10;class hh extends uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Iy()&&Zm(),this.fallbackToPolling=rh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Jm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ty):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hh.type="LOCAL";const dh=hh;/**
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
 */class fh extends uh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fh.type="SESSION";const ph=fh;/**
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
 */function ky(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ti(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ky(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function Zo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Zo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function Ay(t){st().location.href=t}/**
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
 */function gh(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Cy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ny(){return gh()?self:null}/**
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
 */const mh="firebaseLocalStorageDb",Ry=1,Rr="firebaseLocalStorage",yh="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ni(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function $y(){const t=indexedDB.deleteDatabase(mh);return new xs(t).toPromise()}function po(){const t=indexedDB.open(mh,Ry);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rr,{keyPath:yh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rr)?e(s):(s.close(),await $y(),e(await po()))})})}async function Ac(t,e,n){const s=ni(t,!0).put({[yh]:e,value:n});return new xs(s).toPromise()}async function Oy(t,e){const n=ni(t,!1).get(e),s=await new xs(n).toPromise();return s===void 0?null:s.value}function Cc(t,e){const n=ni(t,!0).delete(e);return new xs(n).toPromise()}const Py=800,My=3;class vh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>My)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(Ny()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cy(),!this.activeServiceWorker)return;this.sender=new Sy(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await Ac(e,Nr,"1"),await Cc(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ac(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Oy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ni(r,!1).getAll();return new xs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vh.type="LOCAL";const Ly=vh;/**
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
 */function xy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Uy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xy().appendChild(s)})}function Fy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $s(3e4,6e4);/**
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
 */function _h(t,e){return e?ft(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ea extends Yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vy(t){return ch(t.auth,new ea(t),t.bypassAuthState)}function By(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),py(n,new ea(t),t.bypassAuthState)}async function jy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),fy(n,new ea(t),t.bypassAuthState)}/**
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
 */class wh{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return jy;case"reauthViaPopup":case"reauthViaRedirect":return By;default:Qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qy=new $s(2e3,1e4);async function zy(t,e,n){const s=Ln(t);$m(t,e,Jo);const r=_h(s,n);return new Bt(s,"signInViaPopup",e,r).executeNotNull()}class Bt extends wh{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qy.get())};e()}}Bt.currentPopupAction=null;/**
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
 */const Ky="pendingRedirect",mr=new Map;class Hy extends wh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const s=await Gy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gy(t,e){const n=Yy(e),s=Qy(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Wy(t,e){mr.set(t._key(),e)}function Qy(t){return ft(t._redirectPersistence)}function Yy(t){return gr(Ky,t.config.apiKey,t.name)}async function Xy(t,e,n=!1){const s=Ln(t),r=_h(s,e),o=await new Hy(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Jy=10*60*1e3;class Zy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ev(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!bh(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(e))}saveEventToCache(e){this.cachedEventUids.add(Dc(e)),this.lastProcessedEventTime=Date.now()}}function Dc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ev(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bh(t);default:return!1}}/**
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
 */async function tv(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
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
 */const nv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sv=/^https?/;async function rv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tv(t);for(const n of e)try{if(iv(n))return}catch{}Qe(t,"unauthorized-domain")}function iv(t){const e=fo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sv.test(n))return!1;if(nv.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ov=new $s(3e4,6e4);function Nc(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function av(t){return new Promise((e,n)=>{var s,r,i;function o(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),n(nt(t,"network-request-failed"))},timeout:ov.get()})}if(!((r=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=Fy("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Uy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yr=null,e})}let yr=null;function cv(t){return yr=yr||av(t),yr}/**
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
 */const lv=new $s(5e3,15e3),uv="__/auth/iframe",hv="emulator/auth/iframe",dv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pv(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Go(e,hv):`https://${t.config.authDomain}/${uv}`,s={apiKey:e.apiKey,appName:t.name,v:Rs},r=fv.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ns(s).slice(1)}`}async function gv(t){const e=await cv(t),n=st().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:pv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},lv.get());function c(){st().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yv=500,vv=600,_v="_blank",wv="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bv(t,e,n,s=yv,r=vv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=Zu(l)?_v:n),Ju(l)&&(e=e||wv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Xm(l)&&a!=="_self")return Iv(e||"",a),new Rc(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new Rc(h)}function Iv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ev="__/auth/handler",Tv="emulator/auth/handler";function $c(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Rs,eventId:r};if(e instanceof Jo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_g(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ls){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${kv(t)}?${Ns(a).slice(1)}`}function kv({config:t}){return t.emulator?Go(t,Tv):`https://${t.authDomain}/${Ev}`}/**
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
 */const zi="webStorageSupport";class Sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=Xy,this._overrideRedirectResult=Wy}async _openPopup(e,n,s,r){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=$c(e,n,s,fo(),r);return bv(e,o,Zo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Ay($c(e,n,s,fo(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(mt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gv(e),s=new Zy(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zi,{type:zi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[zi];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rh()||Qo()||ei()}}const Av=Sv;var Oc="@firebase/auth",Pc="0.21.5";/**
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
 */class Cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Nv(t){at(new Je("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(t)},u=new ty(a,c,l);return Pm(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),at(new Je("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(s=>new Cv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Oc,Pc,Dv(t)),Ge(Oc,Pc,"esm2017")}/**
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
 */const Rv=5*60,$v=Pu("authIdTokenMaxAge")||Rv;let Mc=null;const Ov=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$v)return;const r=n==null?void 0:n.token;Mc!==r&&(Mc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Pv(t=zo()){const e=an(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Om(t,{popupRedirectResolver:Av,persistence:[Ly,dh,ph]}),s=Pu("authTokenSyncURL");if(s){const i=Ov(s);wy(n,i,()=>i(n.currentUser)),_y(n,o=>i(o))}const r=Ou("auth");return r&&ny(n,`http://${r}`),n}Nv("Browser");const Ih="@firebase/installations",ta="0.6.4";/**
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
 */const Eh=1e4,Th=`w:${ta}`,kh="FIS_v2",Mv="https://firebaseinstallations.googleapis.com/v1",Lv=60*60*1e3,xv="installations",Uv="Installations";/**
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
 */const Fv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},en=new on(xv,Uv,Fv);function Sh(t){return t instanceof et&&t.code.includes("request-failed")}/**
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
 */function Ah({projectId:t}){return`${Mv}/projects/${t}/installations`}function Ch(t){return{token:t.token,requestStatus:2,expiresIn:Bv(t.expiresIn),creationTime:Date.now()}}async function Dh(t,e){const s=(await e.json()).error;return en.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Nh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vv(t,{refreshToken:e}){const n=Nh(t);return n.append("Authorization",jv(e)),n}async function Rh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bv(t){return Number(t.replace("s","000"))}function jv(t){return`${kh} ${t}`}/**
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
 */async function qv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ah(t),r=Nh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:kh,appId:t.appId,sdkVersion:Th},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Rh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ch(l.authToken)}}else throw await Dh("Create Installation",c)}/**
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
 */function $h(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function zv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Kv=/^[cdef][\w-]{21}$/,go="";function Hv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gv(t);return Kv.test(n)?n:go}catch{return go}}function Gv(t){return zv(t).substr(0,22)}/**
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
 */function si(t){return`${t.appName}!${t.appId}`}/**
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
 */const Oh=new Map;function Ph(t,e){const n=si(t);Mh(n,e),Wv(n,e)}function Mh(t,e){const n=Oh.get(t);if(n)for(const s of n)s(e)}function Wv(t,e){const n=Qv();n&&n.postMessage({key:t,fid:e}),Yv()}let jt=null;function Qv(){return!jt&&"BroadcastChannel"in self&&(jt=new BroadcastChannel("[Firebase] FID Change"),jt.onmessage=t=>{Mh(t.data.key,t.data.fid)}),jt}function Yv(){Oh.size===0&&jt&&(jt.close(),jt=null)}/**
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
 */const Xv="firebase-installations-database",Jv=1,tn="firebase-installations-store";let Ki=null;function na(){return Ki||(Ki=Vu(Xv,Jv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}})),Ki}async function $r(t,e){const n=si(t),r=(await na()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Ph(t,e.fid),e}async function Lh(t){const e=si(t),s=(await na()).transaction(tn,"readwrite");await s.objectStore(tn).delete(e),await s.done}async function ri(t,e){const n=si(t),r=(await na()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Ph(t,a.fid),a}/**
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
 */async function sa(t){let e;const n=await ri(t.appConfig,s=>{const r=Zv(s),i=e_(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===go?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Zv(t){const e=t||{fid:Hv(),registrationStatus:0};return xh(e)}function e_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(en.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=t_(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:n_(t)}:{installationEntry:e}}async function t_(t,e){try{const n=await qv(t,e);return $r(t.appConfig,n)}catch(n){throw Sh(n)&&n.customData.serverCode===409?await Lh(t.appConfig):await $r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function n_(t){let e=await Lc(t.appConfig);for(;e.registrationStatus===1;)await $h(100),e=await Lc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await sa(t);return s||n}return e}function Lc(t){return ri(t,e=>{if(!e)throw en.create("installation-not-found");return xh(e)})}function xh(t){return s_(t)?{fid:t.fid,registrationStatus:0}:t}function s_(t){return t.registrationStatus===1&&t.registrationTime+Eh<Date.now()}/**
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
 */async function r_({appConfig:t,heartbeatServiceProvider:e},n){const s=i_(t,n),r=Vv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Th,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Rh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Ch(l)}else throw await Dh("Generate Auth Token",c)}function i_(t,{fid:e}){return`${Ah(t)}/${e}/authTokens:generate`}/**
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
 */async function ra(t,e=!1){let n;const s=await ri(t.appConfig,i=>{if(!Uh(i))throw en.create("not-registered");const o=i.authToken;if(!e&&c_(o))return i;if(o.requestStatus===1)return n=o_(t,e),i;{if(!navigator.onLine)throw en.create("app-offline");const a=u_(i);return n=a_(t,a),a}});return n?await n:s.authToken}async function o_(t,e){let n=await xc(t.appConfig);for(;n.authToken.requestStatus===1;)await $h(100),n=await xc(t.appConfig);const s=n.authToken;return s.requestStatus===0?ra(t,e):s}function xc(t){return ri(t,e=>{if(!Uh(e))throw en.create("not-registered");const n=e.authToken;return h_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function a_(t,e){try{const n=await r_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await $r(t.appConfig,s),n}catch(n){if(Sh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $r(t.appConfig,s)}throw n}}function Uh(t){return t!==void 0&&t.registrationStatus===2}function c_(t){return t.requestStatus===2&&!l_(t)}function l_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Lv}function u_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function h_(t){return t.requestStatus===1&&t.requestTime+Eh<Date.now()}/**
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
 */async function d_(t){const e=t,{installationEntry:n,registrationPromise:s}=await sa(e);return s?s.catch(console.error):ra(e).catch(console.error),n.fid}/**
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
 */async function f_(t,e=!1){const n=t;return await p_(n),(await ra(n,e)).token}async function p_(t){const{registrationPromise:e}=await sa(t);e&&await e}/**
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
 */function g_(t){if(!t||!t.options)throw Hi("App Configuration");if(!t.name)throw Hi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hi(t){return en.create("missing-app-config-values",{valueName:t})}/**
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
 */const Fh="installations",m_="installations-internal",y_=t=>{const e=t.getProvider("app").getImmediate(),n=g_(e),s=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},v_=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,Fh).getImmediate();return{getId:()=>d_(n),getToken:r=>f_(n,r)}};function __(){at(new Je(Fh,y_,"PUBLIC")),at(new Je(m_,v_,"PRIVATE"))}__();Ge(Ih,ta);Ge(Ih,ta,"esm2017");/**
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
 */const Or="analytics",w_="firebase_id",b_="origin",I_=60*1e3,E_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vh="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new Zr("@firebase/analytics");/**
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
 */function Bh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function T_(t,e){const n=document.createElement("script");n.src=`${Vh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function k_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function S_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Bh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){qe.error(a)}t("config",r,i)}async function A_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Bh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){qe.error(i)}}function C_(t,e,n,s){async function r(i,o,a){try{i==="event"?await A_(t,e,n,o,a):i==="config"?await S_(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){qe.error(c)}}return r}function D_(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=C_(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function N_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vh)&&n.src.includes(t))return n;return null}/**
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
 */const R_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},We=new on("analytics","Analytics",R_);/**
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
 */const $_=30,O_=1e3;class P_{constructor(e={},n=O_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jh=new P_;function M_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function L_(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:M_(s)},i=E_.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function x_(t,e=jh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw We.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw We.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new V_;return setTimeout(async()=>{a.abort()},n!==void 0?n:I_),qh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function qh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=jh){var i;const{appId:o,measurementId:a}=t;try{await U_(s,e)}catch(c){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await L_(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!F_(l)){if(r.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?hc(n,r.intervalMillis,$_):hc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),qe.debug(`Calling attemptFetch again in ${u} millis`),qh(t,h,s,r)}}function U_(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F_(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class V_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function B_(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function j_(){if(Lu())try{await xu()}catch(t){return qe.warn(We.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function q_(t,e,n,s,r,i,o){var a;const c=x_(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>qe.error(p)),e.push(c);const l=j_().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);N_(i)||T_(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[b_]="firebase",d.update=!0,h!=null&&(d[w_]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class z_{constructor(e){this.app=e}_delete(){return delete ss[this.app.options.appId],Promise.resolve()}}let ss={},Uc=[];const Fc={};let Gi="dataLayer",K_="gtag",Vc,zh,Bc=!1;function H_(){const t=[];if(Mu()&&t.push("This is a browser extension environment."),gg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function G_(t,e,n){H_();const s=t.options.appId;if(!s)throw We.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(ss[s]!=null)throw We.create("already-exists",{id:s});if(!Bc){k_(Gi);const{wrappedGtag:i,gtagCore:o}=D_(ss,Uc,Fc,Gi,K_);zh=i,Vc=o,Bc=!0}return ss[s]=q_(t,Uc,Fc,e,Vc,Gi,n),new z_(t)}function W_(t=zo()){t=we(t);const e=an(t,Or);return e.isInitialized()?e.getImmediate():Q_(t)}function Q_(t,e={}){const n=an(t,Or);if(n.isInitialized()){const r=n.getImmediate();if(hs(e,n.getOptions()))return r;throw We.create("already-initialized")}return n.initialize({options:e})}function Y_(t,e,n,s){t=we(t),B_(zh,ss[t.app.options.appId],e,n,s).catch(r=>qe.error(r))}const jc="@firebase/analytics",qc="0.9.4";function X_(){at(new Je(Or,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return G_(s,r,n)},"PUBLIC")),at(new Je("analytics-internal",t,"PRIVATE")),Ge(jc,qc),Ge(jc,qc,"esm2017");function t(e){try{const n=e.getProvider(Or).getImmediate();return{logEvent:(s,r,i)=>Y_(n,s,r,i)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}X_();var J_="firebase",Z_="9.18.0";/**
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
 */Ge(J_,Z_,"app");var ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,ia=ia||{},q=ew||self;function Pr(){}function ii(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Us(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tw(t){return Object.prototype.hasOwnProperty.call(t,Wi)&&t[Wi]||(t[Wi]=++nw)}var Wi="closure_uid_"+(1e9*Math.random()>>>0),nw=0;function sw(t,e,n){return t.call.apply(t.bind,arguments)}function rw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=sw:Me=rw,Me.apply(null,arguments)}function ir(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Mt(){this.s=this.s,this.o=this.o}var iw=0;Mt.prototype.s=!1;Mt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),iw!=0)&&tw(this)};Mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function oa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function zc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ii(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var ow=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Pr,e),q.removeEventListener("test",Pr,e)}catch{}return t}();function Mr(t){return/^[\s\xa0]*$/.test(t)}var Kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Qi(t,e){return t<e?-1:t>e?1:0}function oi(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function tt(t){return oi().indexOf(t)!=-1}function aa(t){return aa[" "](t),t}aa[" "]=Pr;function aw(t){var e=uw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cw=tt("Opera"),Sn=tt("Trident")||tt("MSIE"),Hh=tt("Edge"),mo=Hh||Sn,Gh=tt("Gecko")&&!(oi().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge"))&&!(tt("Trident")||tt("MSIE"))&&!tt("Edge"),lw=oi().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge");function Wh(){var t=q.document;return t?t.documentMode:void 0}var Lr;e:{var Yi="",Xi=function(){var t=oi();if(Gh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hh)return/Edge\/([\d\.]+)/.exec(t);if(Sn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lw)return/WebKit\/(\S+)/.exec(t);if(cw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xi&&(Yi=Xi?Xi[1]:""),Sn){var Ji=Wh();if(Ji!=null&&Ji>parseFloat(Yi)){Lr=String(Ji);break e}}Lr=Yi}var uw={};function hw(){return aw(function(){let t=0;const e=Kc(String(Lr)).split("."),n=Kc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Qi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Qi(r[2].length==0,i[2].length==0)||Qi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var yo;if(q.document&&Sn){var Hc=Wh();yo=Hc||parseInt(Lr,10)||void 0}else yo=void 0;var dw=yo;function ms(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gh){e:{try{aa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}De(ms,Le);var fw={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fs="closure_listenable_"+(1e6*Math.random()|0),pw=0;function gw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++pw,this.ba=this.ea=!1}function ai(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ca(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Qh(t){const e={};for(const n in t)e[n]=t[n];return e}const Gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Gc.length;i++)n=Gc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ci(t){this.src=t,this.g={},this.h=0}ci.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_o(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new gw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function vo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Kh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ai(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _o(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var la="closure_lm_"+(1e6*Math.random()|0),Zi={};function Xh(t,e,n,s,r){if(s&&s.once)return Zh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xh(t,e[i],n,s,r);return null}return n=da(n),t&&t[Fs]?t.N(e,n,Us(s)?!!s.capture:!!s,r):Jh(t,e,n,!1,s,r)}function Jh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Us(r)?!!r.capture:!!r,a=ha(t);if(a||(t[la]=a=new ci(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=mw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ow||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(td(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mw(){function t(n){return e.call(t.src,t.listener,n)}const e=yw;return t}function Zh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zh(t,e[i],n,s,r);return null}return n=da(n),t&&t[Fs]?t.O(e,n,Us(s)?!!s.capture:!!s,r):Jh(t,e,n,!0,s,r)}function ed(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ed(t,e[i],n,s,r);else s=Us(s)?!!s.capture:!!s,n=da(n),t&&t[Fs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_o(i,n,s,r),-1<n&&(ai(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ha(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_o(e,n,s,r)),(n=-1<t?e[t]:null)&&ua(n))}function ua(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Fs])vo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(td(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ha(e))?(vo(n,t),n.h==0&&(n.src=null,e[la]=null)):ai(t)}}}function td(t){return t in Zi?Zi[t]:Zi[t]="on"+t}function yw(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ua(t),t=n.call(s,e)}return t}function ha(t){return t=t[la],t instanceof ci?t:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(t){return typeof t=="function"?t:(t[eo]||(t[eo]=function(e){return t.handleEvent(e)}),t[eo])}function Te(){Mt.call(this),this.i=new ci(this),this.P=this,this.I=null}De(Te,Mt);Te.prototype[Fs]=!0;Te.prototype.removeEventListener=function(t,e,n,s){ed(this,t,e,n,s)};function Ce(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),Yh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=or(o,s,!0,e)&&r}if(o=e.g=t,r=or(o,s,!0,e)&&r,r=or(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=or(o,s,!1,e)&&r}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ai(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&vo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var fa=q.JSON.stringify;function vw(){var t=rd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _w{constructor(){this.h=this.g=null}add(e,n){const s=nd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ww,t=>t.reset());class ww{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bw(t){q.setTimeout(()=>{throw t},0)}function sd(t,e){wo||Iw(),bo||(wo(),bo=!0),rd.add(t,e)}var wo;function Iw(){var t=q.Promise.resolve(void 0);wo=function(){t.then(Ew)}}var bo=!1,rd=new _w;function Ew(){for(var t;t=vw();){try{t.h.call(t.g)}catch(n){bw(n)}var e=nd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bo=!1}function li(t,e){Te.call(this),this.h=t||1,this.g=e||q,this.j=Me(this.lb,this),this.l=Date.now()}De(li,Te);$=li.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&(pa(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){li.X.M.call(this),pa(this),delete this.g};function ga(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function id(t){t.g=ga(()=>{t.g=null,t.i&&(t.i=!1,id(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Tw extends Mt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:id(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(t){Mt.call(this),this.h=t,this.g={}}De(ys,Mt);var Wc=[];function od(t,e,n,s){Array.isArray(n)||(n&&(Wc[0]=n.toString()),n=Wc);for(var r=0;r<n.length;r++){var i=Xh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ad(t){ca(t.g,function(e,n){this.g.hasOwnProperty(n)&&ua(e)},t),t.g={}}ys.prototype.M=function(){ys.X.M.call(this),ad(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ui(){this.g=!0}ui.prototype.Aa=function(){this.g=!1};function kw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Sw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Cw(t,n)+(s?" "+s:"")})}function Aw(t,e){t.info(function(){return"TIMEOUT: "+e})}ui.prototype.info=function(){};function Cw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return fa(n)}catch{return e}}var cn={},Qc=null;function hi(){return Qc=Qc||new Te}cn.Pa="serverreachability";function cd(t){Le.call(this,cn.Pa,t)}De(cd,Le);function vs(t){const e=hi();Ce(e,new cd(e))}cn.STAT_EVENT="statevent";function ld(t,e){Le.call(this,cn.STAT_EVENT,t),this.stat=e}De(ld,Le);function Be(t){const e=hi();Ce(e,new ld(e,t))}cn.Qa="timingevent";function ud(t,e){Le.call(this,cn.Qa,t),this.size=e}De(ud,Le);function Vs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var di={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ma(){}ma.prototype.h=null;function Yc(t){return t.h||(t.h=t.i())}function dd(){}var Bs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ya(){Le.call(this,"d")}De(ya,Le);function va(){Le.call(this,"c")}De(va,Le);var Io;function fi(){}De(fi,ma);fi.prototype.g=function(){return new XMLHttpRequest};fi.prototype.i=function(){return{}};Io=new fi;function js(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ys(this),this.O=Dw,t=mo?125:void 0,this.T=new li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fd}function fd(){this.i=null,this.g="",this.h=!1}var Dw=45e3,Eo={},xr={};$=js.prototype;$.setTimeout=function(t){this.O=t};function To(t,e,n){t.K=1,t.v=gi(yt(e)),t.s=n,t.P=!0,pd(t,null)}function pd(t,e){t.F=Date.now(),qs(t),t.A=yt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Id(n.i,"t",s),t.C=0,n=t.l.H,t.h=new fd,t.g=qd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Tw(Me(t.La,t,t.g),t.N)),od(t.S,t.g,"readystatechange",t.ib),e=t.H?Qh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vs(),kw(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&pt(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=pt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||mo||this.g&&(this.h.h||this.g.fa()||el(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vs(3):vs(2)),pi(this);var n=this.g.aa();this.Y=n;t:if(gd(this)){var s=el(this.g);t="";var r=s.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),rs(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Sw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mr(a)){var l=a;break t}}l=null}if(n=l)vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ko(this,n);else{this.i=!1,this.o=3,Be(12),qt(this),rs(this);break e}}this.P?(md(this,u,o),mo&&this.i&&u==3&&(od(this.S,this.T,"tick",this.hb),this.T.start())):(vn(this.j,this.m,o,null),ko(this,o)),u==4&&qt(this),this.i&&!this.I&&(u==4?Fd(this.l,this):(this.i=!1,qs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),qt(this),rs(this)}}}catch{}finally{}};function gd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function md(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Nw(t,n),r==xr){e==4&&(t.o=4,Be(14),s=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Eo){t.o=4,Be(15),vn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vn(t.j,t.m,r,null),ko(t,r);gd(t)&&r!=xr&&r!=Eo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ka(e),e.K=!0,Be(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),qt(t),rs(t))}$.hb=function(){if(this.g){var t=pt(this.g),e=this.g.fa();this.C<e.length&&(pi(this),md(this,t,e),this.i&&t!=4&&qs(this))}};function Nw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xr:(n=Number(e.substring(n,s)),isNaN(n)?Eo:(s+=1,s+n>e.length?xr:(e=e.substr(s,n),t.C=s+n,e)))}$.cancel=function(){this.I=!0,qt(this)};function qs(t){t.V=Date.now()+t.O,yd(t,t.O)}function yd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vs(Me(t.gb,t),e)}function pi(t){t.B&&(q.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Aw(this.j,this.A),this.K!=2&&(vs(),Be(17)),qt(this),this.o=2,rs(this)):yd(this,this.V-t)};function rs(t){t.l.G==0||t.I||Fd(t.l,t)}function qt(t){pi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,pa(t.T),ad(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ko(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||So(n.h,t))){if(!t.J&&So(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vr(n),vi(n);else break e;Ta(n),Be(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Vs(Me(n.cb,n),6e3));if(1>=kd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&Vr(n),!Mr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(_a(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,de(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=jd(s,s.H?s.ka:null,s.V),o.J){Sd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(pi(a),qs(a)),s.g=o}else xd(s);0<n.i.length&&_i(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):Ea(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}vs(4)}catch{}}function Rw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ii(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function $w(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ii(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ii(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$w(t),s=Rw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ow(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gt){this.h=e!==void 0?e:t.h,Ur(this,t.j),this.s=t.s,this.g=t.g,Fr(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xc(this,n),this.o=t.o}else t&&(n=String(t).match(_d))?(this.h=!!e,Ur(this,n[1]||"",!0),this.s=Xn(n[2]||""),this.g=Xn(n[3]||"",!0),Fr(this,n[4]),this.l=Xn(n[5]||"",!0),Xc(this,n[6]||"",!0),this.o=Xn(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}Gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jn(e,Jc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jn(e,Jc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jn(n,n.charAt(0)=="/"?Lw:Mw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jn(n,Uw)),t.join("")};function yt(t){return new Gt(t)}function Ur(t,e,n){t.j=n?Xn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xc(t,e,n){e instanceof _s?(t.i=e,Fw(t.i,t.h)):(n||(e=Jn(e,xw)),t.i=new _s(e,t.h))}function de(t,e,n){t.i.set(e,n)}function gi(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Pw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jc=/[#\/\?@]/g,Mw=/[#\?:]/g,Lw=/[#\?]/g,xw=/[#\?@]/g,Uw=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Ow(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=_s.prototype;$.add=function(t,e){Lt(this),this.i=null,t=Un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wd(t,e){Lt(t),e=Un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bd(t,e){return Lt(t),e=Un(t,e),t.g.has(e)}$.forEach=function(t,e){Lt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};$.oa=function(){Lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};$.W=function(t){Lt(this);let e=[];if(typeof t=="string")bd(this,t)&&(e=e.concat(this.g.get(Un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Lt(this),this.i=null,t=Un(this,t),bd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Id(t,e,n){wd(t,e),0<n.length&&(t.i=null,t.g.set(Un(t,e),oa(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Fw(t,e){e&&!t.j&&(Lt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wd(this,s),Id(this,r,n))},t)),t.j=e}var Vw=class{constructor(e,n){this.h=e,this.g=n}};function Ed(t){this.l=t||Bw,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bw=10;function Td(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kd(t){return t.h?1:t.g?t.g.size:0}function So(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _a(t,e){t.g?t.g.add(e):t.h=e}function Sd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ed.prototype.cancel=function(){if(this.i=Ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ad(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oa(t.i)}function wa(){}wa.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};wa.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function jw(){this.g=new wa}function qw(t,e,n){const s=n||"";try{vd(t,function(r,i){let o=r;Us(r)&&(o=fa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function zw(t,e){const n=new ui;if(q.Image){const s=new Image;s.onload=ir(ar,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ir(ar,n,s,"TestLoadImage: error",!1,e),s.onabort=ir(ar,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ir(ar,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ar(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function zs(t){this.l=t.ac||null,this.j=t.jb||!1}De(zs,ma);zs.prototype.g=function(){return new mi(this.l,this.j)};zs.prototype.i=function(t){return function(){return t}}({});function mi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ba,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(mi,Te);var ba=0;$=mi.prototype;$.open=function(t,e){if(this.readyState!=ba)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ws(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=ba};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Cd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):ws(this),this.readyState==3&&Cd(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};$.Ua=function(t){this.g&&(this.response=t,Ks(this))};$.ga=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ws(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ws(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kw=q.JSON.parse;function pe(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dd,this.K=this.L=!1}De(pe,Te);var Dd="",Hw=/^https?$/i,Gw=["POST","PUT"];$=pe.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Io.g(),this.C=this.u?Yc(this.u):Yc(Io),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Zc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=Kh(Gw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$d(this),0<this.B&&((this.K=Ww(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=ga(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Zc(this,i)}};function Ww(t){return Sn&&hw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof ia<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))};function Zc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nd(t),yi(t)}function Nd(t){t.D||(t.D=!0,Ce(t,"complete"),Ce(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),yi(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yi(this,!0)),pe.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?Rd(this):this.fb())};$.fb=function(){Rd(this)};function Rd(t){if(t.h&&typeof ia<"u"&&(!t.C[1]||pt(t)!=4||t.aa()!=2)){if(t.v&&pt(t)==4)ga(t.Ha,0,t);else if(Ce(t,"readystatechange"),pt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(_d)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!Hw.test(r?r.toLowerCase():"")}n=s}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var o=2<pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Nd(t)}}finally{yi(t)}}}}function yi(t,e){if(t.g){$d(t);const n=t.g,s=t.C[0]?Pr:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=s}catch{}}}function $d(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function pt(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kw(e)}};function el(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Dd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Od(t){let e="";return ca(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Od(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pd(t){this.Ca=0,this.i=[],this.j=new ui,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,t),this.bb=Gn("retryDelaySeedMs",1e4,t),this.$a=Gn("forwardChannelMaxRetries",2,t),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ed(t&&t.concurrentRequestLimit),this.Fa=new jw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=Pd.prototype;$.ma=8;$.G=1;function Ea(t){if(Md(t),t.G==3){var e=t.U++,n=yt(t.F);de(n,"SID",t.I),de(n,"RID",e),de(n,"TYPE","terminate"),Hs(t,n),e=new js(t,t.j,e,void 0),e.K=2,e.v=gi(yt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=qd(e.l,null),e.g.da(e.v)),e.F=Date.now(),qs(e)}Bd(t)}function vi(t){t.g&&(ka(t),t.g.cancel(),t.g=null)}function Md(t){vi(t),t.u&&(q.clearTimeout(t.u),t.u=null),Vr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function _i(t){Td(t.h)||t.m||(t.m=!0,sd(t.Ja,t),t.C=0)}function Qw(t,e){return kd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Vs(Me(t.Ja,t,e),Vd(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new js(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Qh(i),Yh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ld(this,r,e),n=yt(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),Hs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Od(i)))+"&"+e:this.o&&Ia(n,this.o,i)),_a(this.h,r),this.Ya&&de(n,"TYPE","init"),this.O?(de(n,"$req",e),de(n,"SID","null"),r.Z=!0,To(r,n,null)):To(r,n,e),this.G=2}}else this.G==3&&(t?tl(this,t):this.i.length==0||Td(this.h)||tl(this))};function tl(t,e){var n;e?n=e.m:n=t.U++;const s=yt(t.F);de(s,"SID",t.I),de(s,"RID",n),de(s,"AID",t.T),Hs(t,s),t.o&&t.s&&Ia(s,t.o,t.s),n=new js(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ld(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),_a(t.h,n),To(n,s,e)}function Hs(t,e){t.ia&&ca(t.ia,function(n,s){de(e,s,n)}),t.l&&vd({},function(n,s){de(e,s,n)})}function Ld(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{qw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function xd(t){t.g||t.u||(t.Z=1,sd(t.Ia,t),t.A=0)}function Ta(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Vs(Me(t.Ia,t),Vd(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,Ud(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Vs(Me(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Be(10),vi(this),Ud(this))};function ka(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Ud(t){t.g=new js(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yt(t.sa);de(e,"RID","rpc"),de(e,"SID",t.I),de(e,"CI",t.L?"0":"1"),de(e,"AID",t.T),de(e,"TYPE","xmlhttp"),Hs(t,e),t.o&&t.s&&Ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=gi(yt(e)),n.s=null,n.P=!0,pd(n,t)}$.cb=function(){this.v!=null&&(this.v=null,vi(this),Ta(this),Be(19))};function Vr(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Fd(t,e){var n=null;if(t.g==e){Vr(t),ka(t),t.g=null;var s=2}else if(So(t.h,e))n=e.D,Sd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=hi(),Ce(s,new ud(s,n)),_i(t)}else xd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Qw(t,e)||s==2&&Ta(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function Vd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new Gt("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ur(n,"https"),gi(n)),zw(n.toString(),s)}else Be(2);t.G=0,t.l&&t.l.va(e),Bd(t),Md(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Bd(t){if(t.G=0,t.la=[],t.l){const e=Ad(t.h);(e.length!=0||t.i.length!=0)&&(zc(t.la,e),zc(t.la,t.i),t.h.i.length=0,oa(t.i),t.i.length=0),t.l.ua()}}function jd(t,e,n){var s=n instanceof Gt?yt(n):new Gt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fr(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Gt(null,void 0);s&&Ur(i,s),e&&(i.g=e),r&&Fr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&de(s,n,e),de(s,"VER",t.ma),Hs(t,s),s}function qd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new pe(new zs({jb:!0})):new pe(t.ra),e.Ka(t.H),e}function zd(){}$=zd.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Br(){if(Sn&&!(10<=Number(dw)))throw Error("Environmental error: no available transport.")}Br.prototype.g=function(t,e){return new ze(t,e)};function ze(t,e){Te.call(this),this.g=new Pd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fn(this)}De(ze,Te);ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jd(t,null,t.V),_i(t)};ze.prototype.close=function(){Ea(this.g)};ze.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fa(t),t=n);e.i.push(new Vw(e.ab++,t)),e.G==3&&_i(e)};ze.prototype.M=function(){this.g.l=null,delete this.j,Ea(this.g),delete this.g,ze.X.M.call(this)};function Kd(t){ya.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Kd,ya);function Hd(){va.call(this),this.status=1}De(Hd,va);function Fn(t){this.g=t}De(Fn,zd);Fn.prototype.xa=function(){Ce(this.g,"a")};Fn.prototype.wa=function(t){Ce(this.g,new Kd(t))};Fn.prototype.va=function(t){Ce(this.g,new Hd)};Fn.prototype.ua=function(){Ce(this.g,"b")};Br.prototype.createWebChannel=Br.prototype.g;ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;di.NO_ERROR=0;di.TIMEOUT=8;di.HTTP_ERROR=6;hd.COMPLETE="complete";dd.EventType=Bs;Bs.OPEN="a";Bs.CLOSE="b";Bs.ERROR="c";Bs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.Oa;pe.prototype.getLastErrorCode=pe.prototype.Ea;pe.prototype.getStatus=pe.prototype.aa;pe.prototype.getResponseJson=pe.prototype.Sa;pe.prototype.getResponseText=pe.prototype.fa;pe.prototype.send=pe.prototype.da;pe.prototype.setWithCredentials=pe.prototype.Ka;var Yw=function(){return new Br},Xw=function(){return hi()},to=di,Jw=hd,Zw=cn,nl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},e0=zs,cr=dd,t0=pe;const sl="@firebase/firestore";/**
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
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
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
 */let Vn="9.18.0";/**
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
 */const nn=new Zr("@firebase/firestore");function rl(){return nn.logLevel}function P(t,...e){if(nn.logLevel<=re.DEBUG){const n=e.map(Sa);nn.debug(`Firestore (${Vn}): ${t}`,...n)}}function vt(t,...e){if(nn.logLevel<=re.ERROR){const n=e.map(Sa);nn.error(`Firestore (${Vn}): ${t}`,...n)}}function Ao(t,...e){if(nn.logLevel<=re.WARN){const n=e.map(Sa);nn.warn(`Firestore (${Vn}): ${t}`,...n)}}function Sa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function ae(t,e){t||B()}function G(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Gd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class s0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r0{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new Gd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new $e(e)}}class i0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class o0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new i0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.A=n.token,new a0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function l0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Wd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=l0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function An(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ve(0,0))}static max(){return new H(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bs{constructor(e,n,s){n===void 0?n=0:n>e.length&&B(),s===void 0?s=e.length-n:s>e.length-n&&B(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends bs{construct(e,n,s){return new he(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new he(n)}static emptyPath(){return new he([])}}const u0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends bs{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return u0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(he.fromString(e))}static fromName(e){return new L(he.fromString(e).popFirst(5))}static empty(){return new L(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new he(e.slice()))}}function h0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new Rt(r,L.empty(),e)}function d0(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(H.min(),L.empty(),-1)}static max(){return new Rt(H.max(),L.empty(),-1)}}function f0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const p0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gs(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==p0)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Aa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Aa.at=-1;/**
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
 */class m0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function il(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function wi(t){return t==null}function jr(t){return t===0&&1/t==-1/0}function y0(t){return typeof t=="number"&&Number.isInteger(t)&&!jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class v0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new v0("Invalid base64 string: "+r):r}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const _0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(ae(!!t),typeof t=="string"){let e=0;const n=_0.exec(t);if(ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cn(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
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
 */function Yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xd(t){const e=t.mapValue.fields.__previous_value__;return Yd(e)?Xd(e):e}function Es(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yd(t)?4:w0(t)?9007199254740991:10:B()}function ct(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Es(t).isEqual(Es(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$t(s.timestampValue),o=$t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Cn(s.bytesValue).isEqual(Cn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?jr(i)===jr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return An(t.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(il(i)!==il(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ct(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function Ts(t,e){return(t.values||[]).find(n=>ct(n,e))!==void 0}function Dn(t,e){if(t===e)return 0;const n=sn(t),s=sn(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ol(t.timestampValue,e.timestampValue);case 4:return ol(Es(t),Es(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Cn(r),a=Cn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(me(r.latitude),me(i.latitude));return o!==0?o:ie(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Dn(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===lr.mapValue&&i===lr.mapValue)return 0;if(r===lr.mapValue)return 1;if(i===lr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=Dn(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function ol(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=$t(t),s=$t(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function Nn(t){return Co(t)}function Co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$t(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Co(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Co(s.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function al(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Do(t){return!!t&&"integerValue"in t}function Ca(t){return!!t&&"arrayValue"in t}function cl(t){return!!t&&"nullValue"in t}function ll(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vr(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=is(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qr{constructor(e,n){this.position=e,this.inclusive=n}}function ul(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),n.key):s=Dn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ct(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jd{}class ye extends Jd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new I0(e,n,s):n==="array-contains"?new k0(e,s):n==="in"?new S0(e,s):n==="not-in"?new A0(e,s):n==="array-contains-any"?new C0(e,s):new ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new E0(e,s):new T0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Dn(n,this.value)):n!==null&&sn(this.value)===sn(n)&&this.matchesComparison(Dn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ze extends Jd{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ze(e,n)}matches(e){return Zd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zd(t){return t.op==="and"}function ef(t){return b0(t)&&Zd(t)}function b0(t){for(const e of t.filters)if(e instanceof Ze)return!1;return!0}function No(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Nn(t.value);if(ef(t))return t.filters.map(e=>No(e)).join(",");{const e=t.filters.map(n=>No(n)).join(",");return`${t.op}(${e})`}}function tf(t,e){return t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.field.isEqual(s.field)&&ct(n.value,s.value)}(t,e):t instanceof Ze?function(n,s){return s instanceof Ze&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&tf(i,s.filters[o]),!0):!1}(t,e):void B()}function nf(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Nn(e.value)}`}(t):t instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(nf).join(" ,")+"}"}(t):"Filter"}class I0 extends ye{constructor(e,n,s){super(e,n,s),this.key=L.fromName(s.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class E0 extends ye{constructor(e,n){super(e,"in",n),this.keys=sf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class T0 extends ye{constructor(e,n){super(e,"not-in",n),this.keys=sf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>L.fromName(s.referenceValue))}class k0 extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ca(n)&&Ts(n.arrayValue,this.value)}}class S0 extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class A0 extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class C0 extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ts(this.value.arrayValue,s))}}/**
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
 */class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function D0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ur(this.root,e,this.comparator,!0)}}class ur{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dl(this.data.getIterator())}getIteratorFrom(e){return new dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Xe([])}unionWith(e){let n=new _e(Pe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(n)}setAll(e){let n=Pe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=is(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];vr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Bn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(is(this.value))}}function rf(t){const e=[];return Bn(t.fields,(n,s)=>{const r=new Pe([n]);if(vr(s)){const i=rf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xe(e)}/**
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
 */class Oe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,H.min(),H.min(),H.min(),Ke.empty(),0)}static newFoundDocument(e,n,s,r){return new Oe(e,1,n,H.min(),s,r,0)}static newNoDocument(e,n){return new Oe(e,2,n,H.min(),H.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,H.min(),H.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class N0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function fl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new N0(t,e,n,s,r,i,o)}function Da(t){const e=G(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>No(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),wi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nn(s)).join(",")),e._t=n}return e._t}function Na(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!D0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hl(t.startAt,e.startAt)&&hl(t.endAt,e.endAt)}function Ro(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function R0(t,e,n,s,r,i,o,a){return new Qs(t,e,n,s,r,i,o,a)}function Ra(t){return new Qs(t)}function pl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function of(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $a(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function af(t){return t.collectionGroup!==null}function In(t){const e=G(t);if(e.wt===null){e.wt=[];const n=$a(e),s=of(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new os(n)),e.wt.push(new os(Pe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new os(Pe.keyField(),i))}}}return e.wt}function _t(t){const e=G(t);if(!e.gt)if(e.limitType==="F")e.gt=fl(e.path,e.collectionGroup,In(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of In(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new os(i.field,o))}const s=e.endAt?new qr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qr(e.startAt.position,e.startAt.inclusive):null;e.gt=fl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function $o(t,e){e.getFirstInequalityField(),$a(t);const n=t.filters.concat([e]);return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oo(t,e,n){return new Qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bi(t,e){return Na(_t(t),_t(e))&&t.limitType===e.limitType}function cf(t){return`${Da(_t(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>nf(s)).join(", ")}]`),wi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nn(s)).join(",")),`Target(${n})`}(_t(t))}; limitType=${t.limitType})`}function Ii(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):L.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of In(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ul(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,In(n),s)||n.endAt&&!function(r,i,o){const a=ul(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,In(n),s))}(t,e)}function $0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lf(t){return(e,n)=>{let s=!1;for(const r of In(t)){const i=O0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function O0(t,e,n){const s=t.field.isKeyField()?L.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Dn(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
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
 */function uf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function hf(t){return{integerValue:""+t}}function P0(t,e){return y0(e)?hf(e):uf(t,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function M0(t,e,n){return t instanceof zr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ks?ff(t,e):t instanceof Ss?pf(t,e):function(s,r){const i=df(s,r),o=gl(i)+gl(s.It);return Do(i)&&Do(s.It)?hf(o):uf(s.Tt,o)}(t,e)}function L0(t,e,n){return t instanceof ks?ff(t,e):t instanceof Ss?pf(t,e):n}function df(t,e){return t instanceof Kr?Do(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zr extends Ei{}class ks extends Ei{constructor(e){super(),this.elements=e}}function ff(t,e){const n=gf(e);for(const s of t.elements)n.some(r=>ct(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends Ei{constructor(e){super(),this.elements=e}}function pf(t,e){let n=gf(e);for(const s of t.elements)n=n.filter(r=>!ct(r,s));return{arrayValue:{values:n}}}class Kr extends Ei{constructor(e,n){super(),this.Tt=e,this.It=n}}function gl(t){return me(t.integerValue||t.doubleValue)}function gf(t){return Ca(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function x0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Ss&&s instanceof Ss?An(n.elements,s.elements,ct):n instanceof Kr&&s instanceof Kr?ct(n.It,s.It):n instanceof zr&&s instanceof zr}(t.transform,e.transform)}class U0{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ti{}function mf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oa(t.key,rt.none()):new Ys(t.key,t.data,rt.none());{const n=t.data,s=Ke.empty();let r=new _e(Pe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ln(t.key,s,new Xe(r.toArray()),rt.none())}}function F0(t,e,n){t instanceof Ys?function(s,r,i){const o=s.value.clone(),a=yl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ln?function(s,r,i){if(!_r(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=yl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(yf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function as(t,e,n,s){return t instanceof Ys?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=r.value.clone(),l=vl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ln?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=vl(r.fieldTransforms,a,i),l=i.data;return l.setAll(yf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _r(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function V0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=df(s.transform,r||null);i!=null&&(n===null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function ml(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&An(n,s,(r,i)=>x0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ys extends Ti{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ln extends Ti{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function yl(t,e,n){const s=new Map;ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,L0(o,a,n[r]))}return s}function vl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,M0(i,o,e))}return s}class Oa extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B0 extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class j0{constructor(e){this.count=e}}/**
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
 */var ge,ee;function q0(t){switch(t){default:return B();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vf(t){if(t===void 0)return vt("GRPC error has no .code"),I.UNKNOWN;switch(t){case ge.OK:return I.OK;case ge.CANCELLED:return I.CANCELLED;case ge.UNKNOWN:return I.UNKNOWN;case ge.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ge.INTERNAL:return I.INTERNAL;case ge.UNAVAILABLE:return I.UNAVAILABLE;case ge.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ge.NOT_FOUND:return I.NOT_FOUND;case ge.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ge.ABORTED:return I.ABORTED;case ge.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ge.DATA_LOSS:return I.DATA_LOSS;default:return B()}}(ee=ge||(ge={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class jn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Qd(this.inner)}size(){return this.innerSize}}/**
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
 */const z0=new be(L.comparator);function wt(){return z0}const _f=new be(L.comparator);function Zn(...t){let e=_f;for(const n of t)e=e.insert(n.key,n);return e}function wf(t){let e=_f;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kt(){return cs()}function bf(){return cs()}function cs(){return new jn(t=>t.toString(),(t,e)=>t.isEqual(e))}const K0=new be(L.comparator),H0=new _e(L.comparator);function Z(...t){let e=H0;for(const n of t)e=e.add(n);return e}const G0=new _e(ie);function If(){return G0}/**
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
 */class ki{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ki(H.min(),r,If(),wt(),Z())}}class Xs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Xs(s,n,Z(),Z(),Z())}}/**
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
 */class wr{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Ef{constructor(e,n){this.targetId=e,this.Rt=n}}class Tf{constructor(e,n,s=Ue.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _l{constructor(){this.Pt=0,this.vt=bl(),this.bt=Ue.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Z(),n=Z(),s=Z();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:B()}}),new Xs(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=bl()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class W0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=wt(),this.Kt=wl(),this.Gt=new _e(ie)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Ro(i))if(s===0){const o=new L(i.path);this.zt(n,o,Oe.newNoDocument(o,H.min()))}else ae(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ro(a.target)){const c=new L(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Oe.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=Z();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ki(e,n,this.Gt,this.Ut,s);return this.Ut=wt(),this.Kt=wl(),this.Gt=new _e(ie),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new _l,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new _e(ie),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new _l),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function wl(){return new be(L.comparator)}function bl(){return new be(L.comparator)}/**
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
 */const Q0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Y0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),X0=(()=>({and:"AND",or:"OR"}))();class J0{constructor(e,n){this.databaseId=e,this.yt=n}}function Hr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Z0(t,e){return Hr(t,e.toTimestamp())}function it(t){return ae(!!t),H.fromTimestamp(function(e){const n=$t(e);return new ve(n.seconds,n.nanos)}(t))}function Pa(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sf(t){const e=he.fromString(t);return ae(Nf(e)),e}function Mo(t,e){return Pa(t.databaseId,e.path)}function no(t,e){const n=Sf(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Af(n))}function Lo(t,e){return Pa(t.databaseId,e)}function eb(t){const e=Sf(t);return e.length===4?he.emptyPath():Af(e)}function xo(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Af(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Il(t,e,n){return{name:Mo(t,e),fields:n.value.mapValue.fields}}function tb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ae(l===void 0||typeof l=="string"),Ue.fromBase64String(l||"")):(ae(l===void 0||l instanceof Uint8Array),Ue.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vf(c.code);return new R(l,c.message||"")}(o);n=new Tf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=no(t,s.document.name),i=it(s.document.updateTime),o=s.document.createTime?it(s.document.createTime):H.min(),a=new Ke({mapValue:{fields:s.document.fields}}),c=Oe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new wr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=no(t,s.document),i=s.readTime?it(s.readTime):H.min(),o=Oe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=no(t,s.document),i=s.removedTargetIds||[];n=new wr([],i,r,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new j0(r),o=s.targetId;n=new Ef(o,i)}}return n}function nb(t,e){let n;if(e instanceof Ys)n={update:Il(t,e.key,e.value)};else if(e instanceof Oa)n={delete:Mo(t,e.key)};else if(e instanceof ln)n={update:Il(t,e.key,e.data),updateMask:hb(e.fieldMask)};else{if(!(e instanceof B0))return B();n={verify:Mo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof zr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Kr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw B()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Z0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function sb(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?it(s.updateTime):it(r);return i.isEqual(H.min())&&(i=it(r)),new U0(i,s.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[Lo(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Lo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Df(Ze.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:mn(u.field),direction:cb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||wi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ob(t){let e=eb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Cf(u);return h instanceof Ze&&ef(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new os(yn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,wi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new qr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new qr(d,h)}(n.endAt)),R0(e,r,o,i,a,"F",c,l)}function ab(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cf(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yn(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yn(e.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yn(e.unaryFilter.field);return ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(yn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(n=>Cf(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function cb(t){return Q0[t]}function lb(t){return Y0[t]}function ub(t){return X0[t]}function mn(t){return{fieldPath:t.canonicalString()}}function yn(t){return Pe.fromServerFormat(t.fieldPath)}function Df(t){return t instanceof ye?function(e){if(e.op==="=="){if(ll(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NAN"}};if(cl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ll(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NAN"}};if(cl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(e.field),op:lb(e.op),value:e.value}}}(t):t instanceof Ze?function(e){const n=e.getFilters().map(s=>Df(s));return n.length===1?n[0]:{compositeFilter:{op:ub(e.op),filters:n}}}(t):B()}function hb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class db{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&F0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=as(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=as(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(n,s)=>ml(n,s))&&An(this.baseMutations,e.baseMutations,(n,s)=>ml(n,s))}}class Ma{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ae(e.mutations.length===s.length);let r=K0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ma(e,n,s,r)}}/**
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
 */class fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qt{constructor(e,n,s,r,i=H.min(),o=H.min(),a=Ue.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class pb{constructor(e){this.oe=e}}function gb(t){const e=ob({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oo(e,e.limit,"L"):e}/**
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
 */class mb{constructor(){this.Ze=new yb}addToCollectionParentIndex(e,n){return this.Ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Rt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class yb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(he.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(he.comparator)).toArray()}}/**
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
 */class Rn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Rn(0)}static Sn(){return new Rn(-1)}}/**
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
 */class vb{constructor(){this.changes=new jn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&as(s.mutation,r,Xe.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=Kt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Zn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=wt();const o=cs(),a=cs();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ln)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),as(u.mutation,l,u.mutation.getFieldMask(),ve.now())):o.set(l.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new _b(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=cs();let r=new be((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Xe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bf();u.forEach(d=>{if(!i.has(d)){const p=mf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):af(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Kt());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:wf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(s=>{let r=Zn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Zn();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Qs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Oe.newInvalidDocument(l)))});let o=Zn();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&as(l.mutation,c,Xe.empty(),ve.now()),Ii(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return T.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:it(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:gb(s.bundledQuery),readTime:it(s.readTime)}}(n)),T.resolve()}}/**
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
 */class Ib{constructor(){this.overlays=new be(L.comparator),this.ss=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kt();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Kt(),i=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Kt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fb(n,s));let i=this.ss.get(n);i===void 0&&(i=Z(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class La{constructor(){this.rs=new _e(Ie.os),this.us=new _e(Ie.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ie(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new L(new he([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new L(new he([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=Z();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return L.comparator(e.key,n.key)||ie(e.gs,n.gs)}static cs(e,n){return ie(e.gs,n.gs)||L.comparator(e.key,n.key)}}/**
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
 */class Eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new _e(Ie.os)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new db(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(ie);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),T.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;L.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new L(i),0);let a=new _e(ie);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),T.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ae(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return T.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Ie(n,0),r=this.ps.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Tb{constructor(e){this.Rs=e,this.docs=new be(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let s=wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Oe.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=wt();const o=n.path,a=new L(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||f0(d0(u),s)<=0||(r.has(u.key)||Ii(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){B()}Ps(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new kb(this)}getSize(e){return T.resolve(this.size)}}class kb extends vb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class Sb{constructor(e){this.persistence=e,this.vs=new jn(n=>Da(n),Na),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Vs=new La,this.targetCount=0,this.Ss=Rn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Rn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.xn(n),T.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Vs.containsKey(n))}}/**
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
 */class Ab{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Aa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Sb(this),this.indexManager=new mb,this.remoteDocumentCache=function(s){return new Tb(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new pb(n),this.$s=new bb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ib,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Eb(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const r=new Cb(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return T.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Cb extends g0{constructor(e){super(),this.currentSequenceNumber=e}}class xa{constructor(e){this.persistence=e,this.Bs=new La,this.Ls=null}static qs(e){return new xa(e)}get Us(){if(this.Ls)return this.Ls;throw B()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),T.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Us,s=>{const r=L.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,H.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return T.or([()=>T.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
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
 */class Ua{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ua(e,n.fromCache,s,r)}}/**
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
 */class Db{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(pl(n))return T.resolve(null);let s=_t(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Oo(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Z(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Oo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return pl(n)||r.isEqual(H.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(rl()<=re.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Po(n)),this.qi(e,o,n,h0(r,-1)))})}Bi(e,n){let s=new _e(lf(e));return n.forEach((r,i)=>{Ii(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return rl()<=re.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Po(n)),this.$i.getDocumentsMatchingQuery(e,n,Rt.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Nb{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new be(ie),this.Gi=new jn(i=>Da(i),Na),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Rb(t,e,n,s){return new Nb(t,e,n,s)}async function Rf(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function $b(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const g=c.docVersions.get(p);ae(g!==null),y.version.compareTo(g)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function $f(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Ob(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ue.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(y,g,E){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=wt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Pb(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(H.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Pb(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Mb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Lb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Qt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Uo(t,e,n){const s=G(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ws(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function El(t,e,n){const s=G(t);let r=H.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Gi.get(l);return h!==void 0?T.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_t(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:H.min(),n?i:Z())).next(a=>(xb(s,$0(e),a),{documents:a,Yi:i})))}function xb(t,e,n){let s=t.Qi.get(e)||H.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Tl{constructor(){this.activeTargetIds=If()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ub{constructor(){this.Ur=new Tl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Tl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fb{Gr(e){}shutdown(){}}/**
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
 */class kl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hr=null;function so(){return hr===null?hr=268435456+Math.round(2147483648*Math.random()):hr++,"0x"+hr.toString(16)}/**
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
 */const Vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Bb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Re="WebChannelConnection";class jb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=so(),a=this.fo(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ao("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=Vb[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=so();return new Promise((o,a)=>{const c=new t0;c.setWithCredentials(!0),c.listenOnce(Jw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case to.NO_ERROR:const u=c.getResponseJson();P(Re,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case to.TIMEOUT:P(Re,`RPC '${e}' ${i} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const h=c.getStatus();if(P(Re,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(E)>=0?E:I.UNKNOWN}(p.status);a(new R(y,p.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{P(Re,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);P(Re,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=so(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yw(),a=Xw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new e0({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");P(Re,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new Bb({Yr:g=>{d?P(Re,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(P(Re,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),P(Re,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),y=(g,E,m)=>{g.listen(E,N=>{try{m(N)}catch(k){setTimeout(()=>{throw k},0)}})};return y(u,cr.EventType.OPEN,()=>{d||P(Re,`RPC '${e}' stream ${r} transport opened.`)}),y(u,cr.EventType.CLOSE,()=>{d||(d=!0,P(Re,`RPC '${e}' stream ${r} transport closed`),p.oo())}),y(u,cr.EventType.ERROR,g=>{d||(d=!0,Ao(Re,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new R(I.UNAVAILABLE,"The operation could not be completed")))}),y(u,cr.EventType.MESSAGE,g=>{var E;if(!d){const m=g.data[0];ae(!!m);const N=m,k=N.error||((E=N[0])===null||E===void 0?void 0:E.error);if(k){P(Re,`RPC '${e}' stream ${r} received error:`,k);const j=k.status;let O=function(z){const oe=ge[z];if(oe!==void 0)return vf(oe)}(j),D=k.message;O===void 0&&(O=I.INTERNAL,D="Unknown error status: "+j+" with message "+k.message),d=!0,p.oo(new R(O,D)),u.close()}else P(Re,`RPC '${e}' stream ${r} received:`,m),p.uo(m)}}),y(a,Zw.STAT_EVENT,g=>{g.stat===nl.PROXY?P(Re,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===nl.NOPROXY&&P(Re,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function ro(){return typeof document<"u"?document:null}/**
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
 */function Si(t){return new J0(t,!0)}/**
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
 */class Of{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Pf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Of(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new R(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qb extends Pf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=tb(this.Tt,e),s=function(r){if(!("targetChange"in r))return H.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?H.min():i.readTime?it(i.readTime):H.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=xo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ro(a)?{documents:rb(r,a)}:{query:ib(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=kf(r,i.resumeToken):i.snapshotVersion.compareTo(H.min())>0&&(o.readTime=Hr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ab(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=xo(this.Tt),n.removeTarget=e,this.qo(n)}}class zb extends Pf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=sb(e.writeResults,e.commitTime),s=it(e.commitTime);return this.listener.eu(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=xo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>nb(this.Tt,s))};this.qo(n)}}/**
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
 */class Kb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(I.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class Hb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(vt(n),this.cu=!1):P("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class Gb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{un(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.mu.add(4),await Js(c),c.pu.set("Unknown"),c.mu.delete(4),await Ai(c)}(this))})}),this.pu=new Hb(s,r)}}async function Ai(t){if(un(t))for(const e of t.gu)await e(!0)}async function Js(t){for(const e of t.gu)await e(!1)}function Mf(t,e){const n=G(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ba(n)?Va(n):qn(n).Mo()&&Fa(n,e))}function Lf(t,e){const n=G(t),s=qn(n);n.wu.delete(e),s.Mo()&&xf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():un(n)&&n.pu.set("Unknown"))}function Fa(t,e){t.Iu.Ot(e.targetId),qn(t).Jo(e)}function xf(t,e){t.Iu.Ot(e),qn(t).Yo(e)}function Va(t){t.Iu=new W0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),qn(t).start(),t.pu.au()}function Ba(t){return un(t)&&!qn(t).$o()&&t.wu.size>0}function un(t){return G(t).mu.size===0}function Uf(t){t.Iu=void 0}async function Wb(t){t.wu.forEach((e,n)=>{Fa(t,e)})}async function Qb(t,e){Uf(t),Ba(t)?(t.pu.fu(e),Va(t)):t.pu.set("Unknown")}async function Yb(t,e,n){if(t.pu.set("Online"),e instanceof Tf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gr(t,s)}else if(e instanceof wr?t.Iu.Qt(e):e instanceof Ef?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(H.min()))try{const s=await $f(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Ue.EMPTY_BYTE_STRING,c.snapshotVersion)),xf(r,a);const l=new Qt(c.target,a,1,c.sequenceNumber);Fa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await Gr(t,s)}}async function Gr(t,e,n){if(!Ws(e))throw e;t.mu.add(1),await Js(t),t.pu.set("Offline"),n||(n=()=>$f(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ai(t)})}function Ff(t,e){return e().catch(n=>Gr(t,n,e))}async function Ci(t){const e=G(t),n=Ot(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Xb(e);)try{const r=await Mb(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,Jb(e,r)}catch(r){await Gr(e,r)}Vf(e)&&Bf(e)}function Xb(t){return un(t)&&t._u.length<10}function Jb(t,e){t._u.push(e);const n=Ot(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Vf(t){return un(t)&&!Ot(t).$o()&&t._u.length>0}function Bf(t){Ot(t).start()}async function Zb(t){Ot(t).su()}async function eI(t){const e=Ot(t);for(const n of t._u)e.tu(n.mutations)}async function tI(t,e,n){const s=t._u.shift(),r=Ma.from(s,e,n);await Ff(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ci(t)}async function nI(t,e){e&&Ot(t).Xo&&await async function(n,s){if(r=s.code,q0(r)&&r!==I.ABORTED){const i=n._u.shift();Ot(n).Fo(),await Ff(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ci(n)}var r}(t,e),Vf(t)&&Bf(t)}async function Sl(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=un(n);n.mu.add(3),await Js(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ai(n)}async function sI(t,e){const n=G(t);e?(n.mu.delete(2),await Ai(n)):e||(n.mu.add(2),await Js(n),n.pu.set("Unknown"))}function qn(t){return t.Tu||(t.Tu=function(e,n,s){const r=G(e);return r.ru(),new qb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Wb.bind(null,t),no:Qb.bind(null,t),Ho:Yb.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Ba(t)?Va(t):t.pu.set("Unknown")):(await t.Tu.stop(),Uf(t))})),t.Tu}function Ot(t){return t.Eu||(t.Eu=function(e,n,s){const r=G(e);return r.ru(),new zb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Zb.bind(null,t),no:nI.bind(null,t),nu:eI.bind(null,t),eu:tI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ci(t)):(await t.Eu.stop(),t._u.length>0&&(P("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class ja{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ja(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qa(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Ws(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class En{constructor(e){this.comparator=e?(n,s)=>e(n,s)||L.comparator(n.key,s.key):(n,s)=>L.comparator(n.key,s.key),this.keyedMap=Zn(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new En(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof En)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new En;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Al{constructor(){this.Au=new be(L.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):B():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class $n{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,n,En.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class rI{constructor(){this.Pu=void 0,this.listeners=[]}}class iI{constructor(){this.queries=new jn(e=>cf(e),bi),this.onlineState="Unknown",this.vu=new Set}}async function oI(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new rI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=qa(o,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&za(n)}async function aI(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function cI(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&za(n)}function lI(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function za(t){t.vu.forEach(e=>{e.next()})}class uI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class jf{constructor(e){this.key=e}}class qf{constructor(e){this.key=e}}class hI{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Z(),this.mutatedKeys=Z(),this.ju=lf(e),this.zu=new En(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Al,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Ii(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?y!==g&&(s.track({type:3,doc:p}),E=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),E=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),E=!0):d&&!p&&(s.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new $n(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Al,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Z(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new qf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new jf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Z();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return $n.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class dI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class fI{constructor(e){this.key=e,this.ic=!1}}class pI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new jn(a=>cf(a),bi),this.uc=new Map,this.cc=new Set,this.ac=new be(L.comparator),this.hc=new Map,this.lc=new La,this.fc={},this.dc=new Map,this._c=Rn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function gI(t,e){const n=kI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Lb(n.localStore,_t(e));n.isPrimaryClient&&Mf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mI(n,e,s,a==="current",o.resumeToken)}return r}async function mI(t,e,n,s,r){t.mc=(h,d,p)=>async function(y,g,E,m){let N=g.view.Hu(E);N.Li&&(N=await El(y.localStore,g.query,!1).then(({documents:O})=>g.view.Hu(O,N)));const k=m&&m.targetChanges.get(g.targetId),j=g.view.applyChanges(N,y.isPrimaryClient,k);return Dl(y,g.targetId,j.tc),j.snapshot}(t,h,d,p);const i=await El(t.localStore,e,!0),o=new hI(e,i.Yi),a=o.Hu(i.documents),c=Xs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Dl(t,n,l.tc);const u=new dI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function yI(t,e){const n=G(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!bi(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Lf(n.remoteStore,s.targetId),Fo(n,s.targetId)}).catch(Gs)):(Fo(n,s.targetId),await Uo(n.localStore,s.targetId,!0))}async function vI(t,e,n){const s=SI(t);try{const r=await function(i,o){const a=G(i),c=ve.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=wt(),y=Z();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((E,m)=>{m.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const E=[];for(const m of o){const N=V0(m,u.get(m.key).overlayedDocument);N!=null&&E.push(new ln(m.key,N,rf(N.value.mapValue),rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(g=>{h=g;const E=g.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,g.batchId,E)})}).then(()=>({batchId:h.batchId,changes:wf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new be(ie)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Zs(s,r.changes),await Ci(s.remoteStore)}catch(r){const i=qa(r,"Failed to persist write");n.reject(i)}}async function zf(t,e){const n=G(t);try{const s=await Ob(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ae(o.ic):r.removedDocuments.size>0&&(ae(o.ic),o.ic=!1))}),await Zs(n,s,e)}catch(s){await Gs(s)}}function Cl(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&za(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _I(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new be(L.comparator);o=o.insert(i,Oe.newNoDocument(i,H.min()));const a=Z().add(i),c=new ki(H.min(),new Map,new _e(ie),o,a);await zf(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Ka(s)}else await Uo(s.localStore,e,!1).then(()=>Fo(s,e,n)).catch(Gs)}async function wI(t,e){const n=G(t),s=e.batch.batchId;try{const r=await $b(n.localStore,e);Hf(n,s,null),Kf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zs(n,r)}catch(r){await Gs(r)}}async function bI(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Hf(s,e,n),Kf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zs(s,r)}catch(r){await Gs(r)}}function Kf(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Hf(t,e,n){const s=G(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Gf(t,s)})}function Gf(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Lf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ka(t))}function Dl(t,e,n){for(const s of n)s instanceof jf?(t.lc.addReference(s.key,e),II(t,s)):s instanceof qf?(P("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Gf(t,s.key)):B()}function II(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ka(t))}function Ka(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new L(he.fromString(e)),s=t._c.next();t.hc.set(s,new fI(n)),t.ac=t.ac.insert(n,s),Mf(t.remoteStore,new Qt(_t(Ra(n.path)),s,2,Aa.at))}}async function Zs(t,e,n){const s=G(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ua.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ws(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,i))}async function EI(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await Rf(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zs(n,s.Wi)}}function TI(t,e){const n=G(t),s=n.hc.get(e);if(s&&s.ic)return Z().add(s.key);{let r=Z();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function kI(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_I.bind(null,e),e.rc.Ho=cI.bind(null,e.eventManager),e.rc.gc=lI.bind(null,e.eventManager),e}function SI(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bI.bind(null,e),e}class AI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Rb(this.persistence,new Db,e.initialUser,this.Tt)}Tc(e){return new Ab(xa.qs,this.Tt)}Ic(e){return new Ub}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=EI.bind(null,this.syncEngine),await sI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iI}createDatastore(e){const n=Si(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new jb(r));var r;return function(i,o,a,c){return new Kb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Cl(this.syncEngine,a,0),o=kl.C()?new kl:new Fb,new Gb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new pI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);P("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Js(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class DI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=$e.UNAUTHENTICATED,this.clientId=Wd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=qa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function RI(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Rf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $I(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OI(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Sl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sl(e.remoteStore,i)),t.onlineComponents=e}async function OI(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await RI(t,new AI)),t.offlineComponents}async function Wf(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await $I(t,new CI)),t.onlineComponents}function PI(t){return Wf(t).then(e=>e.syncEngine)}async function Nl(t){const e=await Wf(t),n=e.eventManager;return n.onListen=gI.bind(null,e.syncEngine),n.onUnlisten=yI.bind(null,e.syncEngine),n}const Rl=new Map;/**
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
 */function Qf(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MI(t,e,n,s){if(e===!0&&s===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $l(t){if(!L.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ol(t){if(L.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Di(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Di(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Pl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,MI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ni{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new n0;switch(n.type){case"gapi":const s=n.client;return new o0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rl.get(e);n&&(P("ComponentProvider","Removing Datastore"),Rl.delete(e),n.terminate())}(this),Promise.resolve()}}function LI(t,e,n,s={}){var r;const i=(t=Yt(t,Ni))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ao("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=$e.MOCK_USER;else{o=hg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new $e(c)}t._authCredentials=new s0(new Gd(o,a))}}/**
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
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class zn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class Nt extends zn{constructor(e,n,s){super(e,n,Ra(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new L(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function xI(t,e,...n){if(t=we(t),Qf("collection","path",e),t instanceof Ni){const s=he.fromString(e,...n);return Ol(s),new Nt(t,null,s)}{if(!(t instanceof je||t instanceof Nt))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return Ol(s),new Nt(t.firestore,null,s)}}function dr(t,e,...n){if(t=we(t),arguments.length===1&&(e=Wd.R()),Qf("doc","path",e),t instanceof Ni){const s=he.fromString(e,...n);return $l(s),new je(t,null,new L(s))}{if(!(t instanceof je||t instanceof Nt))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(he.fromString(e,...n));return $l(s),new je(t.firestore,t instanceof Nt?t.converter:null,new L(s))}}/**
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
 */class UI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Of(this,"async_queue_retry"),this.Hc=()=>{const n=ro();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=ro();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=ro();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Wt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ws(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=ja.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&B()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ml(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class As extends Ni{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new UI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xf(this),this._firestoreClient.terminate()}}function FI(t,e){const n=typeof t=="object"?t:zo(),s=typeof t=="string"?t:e||"(default)",r=an(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cg("firestore");i&&LI(r,...i)}return r}function Yf(t){return t._firestoreClient||Xf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new m0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Ue.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new On(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jf{constructor(e){this._methodName=e}}/**
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
 */class Ga{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const VI=/^__.*__$/;class BI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ys(e,this.data,n,this.fieldTransforms)}}function Zf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Wa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Wr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Zf(this.ra)&&VI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class jI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Si(e)}wa(e,n,s,r=!1){return new Wa({ra:e,methodName:n,_a:s,path:Pe.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ep(t){const e=t._freezeSettings(),n=Si(t._databaseId);return new jI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);sp("Data must be an object, but it was:",o,s);const a=tp(s,o);let c,l;if(i.merge)c=new Xe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=KI(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);GI(u,d)||u.push(d)}c=new Xe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new BI(new Ke(a),c,l)}function zI(t,e,n,s=!1){return Qa(n,t.wa(s?4:3,e))}function Qa(t,e){if(np(t=we(t)))return sp("Unsupported field value:",e,t),tp(t,e);if(t instanceof Jf)return function(n,s){if(!Zf(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qa(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=we(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return P0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:Hr(s.Tt,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hr(s.Tt,r)}}if(n instanceof Ga)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof On)return{bytesValue:kf(s.Tt,n._byteString)};if(n instanceof je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Pa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Di(n)}`)}(t,e)}function tp(t,e){const n={};return Qd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(t,(s,r)=>{const i=Qa(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function np(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Ga||t instanceof On||t instanceof je||t instanceof Jf)}function sp(t,e,n){if(!np(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Di(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function KI(t,e,n){if((e=we(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return rp(t,e);throw Wr("Field path arguments must be of type string or ",t,!1,void 0,n)}const HI=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(HI)>=0)throw Wr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw Wr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function GI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ip{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(op("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WI extends ip{data(){return super.data()}}function op(t,e){return typeof e=="string"?rp(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
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
 */function QI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ya{}class YI extends Ya{}function XI(t,e,...n){let s=[];e instanceof Ya&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ja).length,o=r.filter(a=>a instanceof Xa).length;if(i>1||i>0&&o>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Xa extends YI{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Xa(e,n,s)}_apply(e){const n=this._parse(e);return ap(e._query,n),new zn(e.firestore,e.converter,$o(e._query,n))}_parse(e){const n=ep(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xl(u,l);const d=[];for(const p of u)d.push(Ll(a,r,p));h={arrayValue:{values:d}}}else h=Ll(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xl(u,l),h=zI(o,i,u,l==="in"||l==="not-in");return ye.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ja extends Ya{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ja(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ze.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)ap(i,a),i=$o(i,a)}(e._query,n),new zn(e.firestore,e.converter,$o(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ll(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!af(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(he.fromString(n));if(!L.isDocumentKey(s))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return al(t,new L(s))}if(n instanceof je)return al(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Di(n)}.`)}function xl(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ap(t,e){if(e.isInequality()){const s=$a(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=of(t);i!==null&&JI(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JI(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ZI{convertValue(e,n="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const s={};return Bn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ga(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const n=$t(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=he.fromString(e);ae(Nf(s));const r=new Is(s.get(1),s.get(3)),i=new L(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function eE(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cp extends ip{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(op("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class br extends cp{data(e={}){return super.data(e)}}class tE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new es(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new br(this._firestore,this._userDataWriter,s.key,s,new es(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:nE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class lp extends ZI{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function Ul(t,e,n){t=Yt(t,je);const s=Yt(t.firestore,As),r=eE(t.converter,e,n);return up(s,[qI(ep(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,rt.none())])}function sE(t){return up(Yt(t.firestore,As),[new Oa(t._key,rt.none())])}function Fl(t,...e){var n,s,r;t=we(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ml(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ml(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof je)l=Yt(t.firestore,As),u=Ra(t._key.path),c={next:h=>{e[o]&&e[o](rE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Yt(t,zn);l=Yt(h.firestore,As),u=h._query;const d=new lp(l);c={next:p=>{e[o]&&e[o](new tE(l,d,h,p))},error:e[o+1],complete:e[o+2]},QI(t._query)}return function(h,d,p,y){const g=new DI(y),E=new uI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>oI(await Nl(h),E)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>aI(await Nl(h),E))}}(Yf(l),u,a,c)}function up(t,e){return function(n,s){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>vI(await PI(n),s,r)),r.promise}(Yf(t),e)}function rE(t,e,n){const s=n.docs.get(e._key),r=new lp(t);return new cp(t,r,e._key,s,new es(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Vn=n})(Rs),at(new Je("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new As(new r0(n.getProvider("auth-internal")),new c0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ge(sl,"3.9.0",t),Ge(sl,"3.9.0","esm2017")})();const iE={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},hp=Bu(iE),Ut=Pv(hp);vy(Ut,dh);const Wn=FI(hp);W_();const oE=new ut,aE=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Ds(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return lh(Ut,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return my(Ut,r,i)},async signInWithEmail(r,i){return yy(Ut,r,i)},async signInWithGoogle(){return zy(Ut,oE)},async signOut(){return by(Ut)}}},cE=aE(),Vl="/assets/default-user-a40c52dd.png";function lE(t){let e;return{c(){e=w("i"),f(e,"class","codicon codicon-account")},m(n,s){C(n,e,s)},p:S,d(n){n&&A(e)}}}function uE(t){let e,n;return{c(){e=w("img"),f(e,"class","profile-picture svelte-1m717b8"),Tn(e.src,n=t[0].user.photoURL??Vl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){C(s,e,r)},p(s,r){r&1&&!Tn(e.src,n=s[0].user.photoURL??Vl)&&f(e,"src",n)},d(s){s&&A(e)}}}function hE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,E,m,N;o=new eg({});function k(D,z){return D[0].loggedIn?uE:lE}let j=k(t),O=j(t);return{c(){e=w("header"),n=w("div"),s=w("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=M(),i=w("a"),F(o.$$.fragment),a=M(),c=w("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=M(),u=w("nav"),h=w("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=M(),p=w("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',y=M(),g=w("button"),O.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,z){C(D,e,z),v(e,n),v(n,s),v(n,r),v(n,i),x(o,i,null),v(n,a),v(n,c),v(e,l),v(e,u),v(u,h),v(u,d),v(u,p),v(u,y),v(u,g),O.m(g,null),E=!0,m||(N=[W(c,"click",t[1]),W(h,"click",t[2]),W(p,"click",t[3]),W(g,"click",t[4])],m=!0)},p(D,[z]){j===(j=k(D))&&O?O.p(D,z):(O.d(1),O=j(D),O&&(O.c(),O.m(g,null)))},i(D){E||(_(o.$$.fragment,D),E=!0)},o(D){b(o.$$.fragment,D),E=!1},d(D){D&&A(e),U(o),O.d(),m=!1,Fe(N)}}}function dE(t,e,n){let s;return He(t,cE,c=>n(0,s=c)),[s,()=>Vt.navigateTo("help"),()=>Vt.navigateTo("search"),()=>Vt.navigateTo("settings"),()=>Vt.navigateTo("account")]}class fE extends J{constructor(e){super(),X(this,e,dE,hE,Y,{})}}const pE="modulepreload",gE=function(t){return"/"+t},Bl={},Ri=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=gE(i),i in Bl)return;Bl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":pE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},er=t=>typeof t=="string"&&t!=="",$i=t=>typeof t=="number"&&t>=0;let mE=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,E,m){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=y,this.tags=g,this.width=E,this.type=m,Object.freeze(this)}};const yE=Object.freeze(["id","score","updated"]),vE=t=>typeof t=="string"&&yE.includes(t),Ir=Object.freeze(["+","-","~"]),Oi=t=>Ir.includes(t),dp=t=>{if(!Oi(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Ir.indexOf(t)+1)%Ir.length;return Ir[n]},_E=Object.freeze({"+":"","-":"-","~":""}),wE=t=>{if(!Oi(t))throw TypeError("Invalid modifier passed to serializeModifier");return _E[t]};class Pi{constructor(e,n){if(!Oi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!er(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${wE(this.modifier)}${encodeURIComponent(this.name)}`}}const Za=(t,e)=>{if(!fp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!bE(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},fp=t=>{try{return new URL(t),!0}catch{return!1}},bE=t=>t===null||t instanceof AbortController,pp=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),gp=t=>pp.includes(t),jl=t=>{const e=pp.indexOf(t);return e>=0?e:99},IE=Object.freeze(["artist","character","copyright","source","metadata","rating"]),EE=t=>IE.includes(t);let Mi=class{constructor(e,n,s,r){if(!Oi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!er(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!$i(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!gp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const mp=t=>new Pi(t.modifier,t.name);class ec{constructor(e,n,s){if(!er(e))throw TypeError("Invalid name passed to Tag constructor");if(!$i(n))throw TypeError("Invalid count passed to Tag constructor");if(!gp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const TE=(t,e)=>new Mi(e,t.name,t.count,t.type);let kE=null;const SE=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await Za(`${e}${n}`,kE);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new ec(yp(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},yp=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'"),vp=20;let _p=null;const wp=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},ql=async(t,e,n,s)=>{bp(t,e,n,s);const r=Ip(e,n,s),i=await Za(PE(t,r),_p);wp(i);const a=(await i.json()).map(CE);return LE(a),a},AE=async(t,e,n)=>{bp(0,t,e,n);const s=Ip(t,e,n),r=await Za(ME(s),_p);wp(r);const i=await r.text(),a=new DOMParser().parseFromString(i,"text/xml"),c=Number(a.getElementsByTagName("posts")[0].getAttribute("count"));return xE(c),c},CE=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,y=t.comment_count,g=t.status,E=t.source;return new mE(s,o,r,Number(y),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),E,g,DE(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},DE=t=>t.map(e=>new ec(yp(e.tag),e.count,e.type)).sort((e,n)=>jl(e.type)-jl(n.type)),bp=(t,e,n,s)=>{if(!NE(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!RE(e))throw new TypeError("Invalid array of tags passed to getPage");if(!vE(n))throw new TypeError("Invalid sort property passed to getPage");if(!$E(s))throw new TypeError("Invalid minimum score passed to getPage")},NE=t=>typeof t=="number"&&t>=0,RE=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Pi)),$E=t=>typeof t=="number"&&t>=0,OE=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Ip=(t,e,n)=>{const s=OE(t),r=[...zl([...s["+"],...s["-"]]),`score:>=${n}`,`sort:${e}:desc`].join("+");return s["~"].length===0?r:`${r}+( ${zl(s["~"]).join(" ~ ")} )`},zl=t=>t.map(e=>e.serialize()),PE=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${vp}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},ME=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},LE=t=>{if(!Array.isArray(t))throw new Error("Unexpected response received in getPage")},xE=t=>{if(!$i(t))throw new Error("Unexpected response received in getPage")};let UE=class{constructor(e,n,s){FE(e),BE(n),VE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const FE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},VE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},BE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Kl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Hl=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Kl:`${Kl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(jE(a.attributes));return o},jE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new UE(e.value,n.value,s.value)};class Ep{constructor(e,n,s){if(!er(e))throw new TypeError("Invalid name passed to Supertag");if(!qE(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const qE=t=>Array.isArray(t)&&t.every(e=>e instanceof Pi),zE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Ds(t);let s,r=null,i=null;return lh(Ut,async o=>{s=o,o?r=Fl(dr(Wn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=XI(xI(Wn,`users/${o.uid}/supertags`));i==null||i(),i=Fl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Ep(d.id,p.description,Object.entries(p.tags).map(y=>new Pi(y[1],y[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Ul(dr(Wn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return sE(dr(Wn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return Ul(dr(Wn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Qr=zE();function KE(t){let e,n,s,r;return{c(){e=w("button"),n=fe(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){C(i,e,o),v(e,n),s||(r=W(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Ae(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:S,o:S,d(i){i&&A(e),s=!1,r()}}}function HE(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ye(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class Tp extends J{constructor(e){super(),X(this,e,HE,KE,Y,{text:0,title:1,disabled:2})}}function Kn(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t(e))}}const GE=Intl.NumberFormat("en",{notation:"compact"}),Pt=t=>{if(!$i(t))throw new TypeError("Invalid value passed to formatCount");return GE.format(t)};function Pn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Gl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function WE(t){let e,n;return{c(){e=w("i"),f(e,"class",n=`codicon codicon-${Gl[t[0]]}`)},m(s,r){C(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${Gl[s[0]]}`)&&f(e,"class",n)},i:S,o:S,d(s){s&&A(e)}}}function QE(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class tc extends J{constructor(e){super(),X(this,e,QE,WE,Y,{type:0})}}const Wl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Ql=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Yl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Xl(t){let e,n;return e=new tc({props:{type:t[0].type}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Jl(t){let e,n=Pt(t[0].count)+"",s,r;return{c(){e=fe("("),s=fe(n),r=fe(")")},m(i,o){C(i,e,o),C(i,s,o),C(i,r,o)},p(i,o){o&1&&n!==(n=Pt(i[0].count)+"")&&Ae(s,n)},d(i){i&&A(e),i&&A(s),i&&A(r)}}}function YE(t){let e,n,s=Pn(t[0].name)+"",r,i,o,a,c,l,u=t[0].type=="supertag"&&Xl(t),h=t[0].count&&Jl(t);return{c(){e=w("li"),u&&u.c(),n=M(),r=fe(s),i=M(),h&&h.c(),f(e,"class",o=ot(Yl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),Ee(e,"no-icon",t[0].type!=="supertag")},m(d,p){C(d,e,p),u&&u.m(e,null),v(e,n),v(e,r),v(e,i),h&&h.m(e,null),a=!0,c||(l=[W(e,"click",t[2]),W(e,"contextmenu",Vo(t[3]))],c=!0)},p(d,[p]){d[0].type=="supertag"?u?(u.p(d,p),p&1&&_(u,1)):(u=Xl(d),u.c(),_(u,1),u.m(e,n)):u&&(ce(),b(u,1,1,()=>{u=null}),le()),(!a||p&1)&&s!==(s=Pn(d[0].name)+"")&&Ae(r,s),d[0].count?h?h.p(d,p):(h=Jl(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!a||p&1&&o!==(o=ot(Yl[d[0].modifier])+" svelte-13vl0re"))&&f(e,"class",o),(!a||p&1)&&Ee(e,"no-icon",d[0].type!=="supertag")},i(d){a||(_(u),a=!0)},o(d){b(u),a=!1},d(d){d&&A(e),u&&u.d(),h&&h.d(),c=!1,Fe(l)}}}function XE(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class kp extends J{constructor(e){super(),X(this,e,XE,YE,Y,{tag:0})}}function Zl(t,e,n){const s=t.slice();return s[9]=e[n],s}function eu(t){let e,n;return e=new kp({props:{tag:t[9]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function JE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,E,m,N,k,j,O,D,z,oe,ke=t[2],te=[];for(let ne=0;ne<ke.length;ne+=1)te[ne]=eu(Zl(t,ke,ne));const Hn=ne=>b(te[ne],1,1,()=>{te[ne]=null});return O=new Tp({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),O.$on("click",t[8]),{c(){e=w("dialog"),n=w("h3"),n.textContent="Create Supertag",s=M(),r=w("i"),i=M(),o=w("div"),a=w("label"),a.textContent="Name",c=M(),l=w("input"),u=M(),h=w("div"),d=w("label"),d.textContent="Description",p=M(),y=w("textarea"),g=M(),E=w("div"),m=w("span"),m.textContent="Tags",N=M(),k=w("ol");for(let ne=0;ne<te.length;ne+=1)te[ne].c();j=M(),F(O.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",ot("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(y,"type","text"),f(y,"placeholder","Short description"),f(y,"id","supertag-description"),f(y,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(m,"class","svelte-ax50wm"),f(k,"class","svelte-ax50wm"),f(E,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ne,se){C(ne,e,se),v(e,n),v(e,s),v(e,r),v(e,i),v(e,o),v(o,a),v(o,c),v(o,l),At(l,t[0]),v(e,u),v(e,h),v(h,d),v(h,p),v(h,y),At(y,t[1]),v(e,g),v(e,E),v(E,m),v(E,N),v(E,k);for(let Ne=0;Ne<te.length;Ne+=1)te[Ne]&&te[Ne].m(k,null);v(e,j),x(O,e,null),D=!0,z||(oe=[W(r,"click",t[5]),W(r,"keyup",Kn(t[5])),W(l,"input",t[6]),W(y,"input",t[7])],z=!0)},p(ne,[se]){if(se&1&&l.value!==ne[0]&&At(l,ne[0]),se&2&&At(y,ne[1]),se&4){ke=ne[2];let Q;for(Q=0;Q<ke.length;Q+=1){const tr=Zl(ne,ke,Q);te[Q]?(te[Q].p(tr,se),_(te[Q],1)):(te[Q]=eu(tr),te[Q].c(),_(te[Q],1),te[Q].m(k,null))}for(ce(),Q=ke.length;Q<te.length;Q+=1)Hn(Q);le()}const Ne={};se&8&&(Ne.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),se&8&&(Ne.disabled=!ne[3]),O.$set(Ne)},i(ne){if(!D){for(let se=0;se<ke.length;se+=1)_(te[se]);_(O.$$.fragment,ne),D=!0}},o(ne){te=te.filter(Boolean);for(let se=0;se<te.length;se+=1)b(te[se]);b(O.$$.fragment,ne),D=!1},d(ne){ne&&A(e),rn(te,ne),U(O),z=!1,Fe(oe)}}}function ZE(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ye(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Ep(r,i,o.map(mp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=er(r))},[r,i,o,s,a,c,l,u,h]}class eT extends J{constructor(e){super(),X(this,e,ZE,JE,Y,{name:0,description:1,tags:2})}}function tT(t){let e,n,s,r,i;return{c(){e=w("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class",n=ot(`codicon codicon-${Wl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=Ql[t[0]])},m(o,a){C(o,e,a),r||(i=[W(e,"click",t[1]),W(e,"keyup",Kn(t[1])),W(e,"touchend",Vo(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=ot(`codicon codicon-${Wl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=Ql[o[0]])&&f(e,"title",s)},i:S,o:S,d(o){o&&A(e),r=!1,Fe(i)}}}function nT(t,e,n){let s="+";const r=Ye();return[s,()=>{n(0,s=dp(s)),r("change",s)}]}class sT extends J{constructor(e){super(),X(this,e,nT,tT,Y,{})}}function rT(t){let e;return{c(){e=w("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class Li extends J{constructor(e){super(),X(this,e,null,rT,Y,{})}}function iT(t){let e,n,s,r,i=Pn(t[0].name)+"",o,a,c,l=Pt(t[0].count)+"",u,h,d,p,y;return n=new tc({props:{type:t[0].type}}),{c(){e=w("li"),F(n.$$.fragment),s=M(),r=w("span"),o=fe(i),a=M(),c=w("span"),u=fe(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(g,E){C(g,e,E),x(n,e,null),v(e,s),v(e,r),v(r,o),v(e,a),v(e,c),v(c,u),d=!0,p||(y=W(e,"click",t[2]),p=!0)},p(g,[E]){const m={};E&1&&(m.type=g[0].type),n.$set(m),(!d||E&1)&&i!==(i=Pn(g[0].name)+"")&&Ae(o,i),(!d||E&1)&&l!==(l=Pt(g[0].count)+"")&&Ae(u,l),(!d||E&1&&h!==(h=g[0].name))&&f(e,"title",h)},i(g){d||(_(n.$$.fragment,g),d=!0)},o(g){b(n.$$.fragment,g),d=!1},d(g){g&&A(e),U(n),p=!1,y()}}}function oT(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class aT extends J{constructor(e){super(),X(this,e,oT,iT,Y,{tag:0})}}function tu(t,e,n){const s=t.slice();return s[16]=e[n],s}function cT(t){let e,n,s,r,i=t[19].message+"",o;return{c(){e=w("div"),n=w("i"),s=M(),r=w("span"),o=fe(i),f(n,"class",ot("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){C(a,e,c),v(e,n),v(e,s),v(e,r),v(r,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&Ae(o,i)},i:S,o:S,d(a){a&&A(e)}}}function lT(t){let e,n,s,r=t[4],i=[];for(let a=0;a<r.length;a+=1)i[a]=nu(tu(t,r,a));const o=a=>b(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=M(),n=w("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);C(a,e,c),C(a,n,c),s=!0},p(a,c){if(c&116){r=a[4];let l;for(l=0;l<r.length;l+=1){const u=tu(a,r,l);i[l]?(i[l].p(u,c),_(i[l],1)):(i[l]=nu(u),i[l].c(),_(i[l],1),i[l].m(e.parentNode,e))}for(ce(),l=r.length;l<i.length;l+=1)o(l);le()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)_(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)b(i[c]);s=!1},d(a){rn(i,a),a&&A(e),a&&A(n)}}}function nu(t){let e,n;function s(){return t[12](t[16])}return e=new aT({props:{tag:t[16]}}),e.$on("click",s),{c(){F(e.$$.fragment)},m(r,i){x(e,r,i),n=!0},p(r,i){t=r;const o={};i&16&&(o.tag=t[16]),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){U(e,r)}}}function uT(t){let e,n,s;return n=new Li({}),{c(){e=w("div"),F(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){C(r,e,i),x(n,e,null),s=!0},p:S,i(r){s||(_(n.$$.fragment,r),s=!0)},o(r){b(n.$$.fragment,r),s=!1},d(r){r&&A(e),U(n)}}}function hT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y;o=new sT({}),o.$on("change",t[9]);let g={ctx:t,current:null,token:null,hasCatch:!0,pending:uT,then:lT,catch:cT,error:19,blocks:[,,,]};return kr(h=t[1],g),{c(){e=w("div"),n=w("i"),s=M(),r=w("input"),i=M(),F(o.$$.fragment),a=M(),c=w("i"),l=M(),u=w("ol"),g.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(c,"tabindex","0"),f(c,"role","button"),f(c,"class","codicon codicon-question spaced svelte-2fyyfo"),f(u,"class","svelte-2fyyfo"),Ee(u,"open",t[3]),f(e,"class","searchbar svelte-2fyyfo"),Ee(e,"open",t[3])},m(E,m){C(E,e,m),v(e,n),v(e,s),v(e,r),At(r,t[0]),v(e,i),x(o,e,null),v(e,a),v(e,c),v(e,l),v(e,u),g.block.m(u,g.anchor=null),g.mount=()=>u,g.anchor=null,d=!0,p||(y=[W(r,"input",t[7]),W(r,"blur",t[8]),W(c,"click",t[10]),W(c,"keyup",Kn(t[11])),W(e,"blur",t[13])],p=!0)},p(E,[m]){t=E,m&1&&r.value!==t[0]&&At(r,t[0]),g.ctx=t,m&2&&h!==(h=t[1])&&kr(h,g)||Du(g,t,m),(!d||m&8)&&Ee(u,"open",t[3]),(!d||m&8)&&Ee(e,"open",t[3])},i(E){d||(_(o.$$.fragment,E),_(g.block),d=!0)},o(E){b(o.$$.fragment,E);for(let m=0;m<3;m+=1){const N=g.blocks[m];b(N)}d=!1},d(E){E&&A(e),U(o),g.block.d(),g.token=null,g=null,p=!1,Fe(y)}}}function dT(t,e,n){let s;He(t,Qr,k=>n(14,s=k));const r=Ye();let i,o="",a="+",c=!1,l=[];async function u(k){n(3,c=!0),n(4,l=[...s.supertags.filter(j=>j.name.toLowerCase().includes(k.toLowerCase())).map(j=>new ec(j.name,Object.keys(j.tags).length,"supertag")),...await SE(k)])}const h=()=>{n(0,o=""),n(4,l=[]),n(3,c=!1)};function d(){o=this.value,n(0,o)}const p=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(3,c=!1)},y=k=>{n(2,a=k.detail)},g=()=>Vt.navigateTo("help"),E=()=>Vt.navigateTo("help"),m=k=>{r("pick",TE(k,a)),h()},N=()=>{n(3,c=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(4,l=[]),o!==""&&n(1,i=u(o)))},[o,i,a,c,l,r,h,d,p,y,g,E,m,N]}class fT extends J{constructor(e){super(),X(this,e,dT,hT,Y,{})}}const Sp=JSON.parse,Ap=JSON.stringify,Cp=(t,e,n=Ap,s=Sp)=>{const r=Dp(t,s),i=Ds(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},nc=(t,e,n=Ap,s=Sp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Dp(t,s):null,o=Ds(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Dp=(t,e)=>{try{return e(localStorage.getItem(t))}catch{return null}};function pT(){const t=[],{subscribe:e,update:n,set:s}=nc("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Mi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const gt=pT();function su(t){let e,n;return e=new tc({props:{type:t[0].type}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function gT(t){let e,n,s=Pn(t[0].name)+"",r,i,o,a,c,l=t[2]&&su(t);return{c(){e=w("li"),l&&l.c(),n=M(),r=fe(s),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to add tag"),f(e,"class",i=ot(t[0].type)+" svelte-19ya21f"),Ee(e,"active",t[3]),Ee(e,"icon",t[2])},m(u,h){C(u,e,h),l&&l.m(e,null),v(e,n),v(e,r),o=!0,a||(c=W(e,"click",t[5]),a=!0)},p(u,[h]){u[2]?l?(l.p(u,h),h&4&&_(l,1)):(l=su(u),l.c(),_(l,1),l.m(e,n)):l&&(ce(),b(l,1,1,()=>{l=null}),le()),(!o||h&1)&&s!==(s=Pn(u[0].name)+"")&&Ae(r,s),(!o||h&1&&i!==(i=ot(u[0].type)+" svelte-19ya21f"))&&f(e,"class",i),(!o||h&9)&&Ee(e,"active",u[3]),(!o||h&5)&&Ee(e,"icon",u[2])},i(u){o||(_(l),o=!0)},o(u){b(l),o=!1},d(u){u&&A(e),l&&l.d(),a=!1,c()}}}function mT(t,e,n){let s,r,i,o;He(t,gt,l=>n(4,o=l));let{tag:a}=e;const c=()=>r?gt.removeByIndex(s):gt.addByName(a.name);return t.$$set=l=>{"tag"in l&&n(0,a=l.tag)},t.$$.update=()=>{t.$$.dirty&17&&n(1,s=o.findIndex(l=>l.name===a.name)),t.$$.dirty&2&&n(3,r=s>=0),t.$$.dirty&1&&n(2,i=EE(a.type))},[a,s,i,r,o,c]}class yT extends J{constructor(e){super(),X(this,e,mT,gT,Y,{tag:0})}}function vT(t){let e,n,s,r,i;return{c(){e=w("i"),n=M(),s=w("a"),r=fe(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),v(s,r)},p(o,[a]){a&2&&Ae(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:S,o:S,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function _T(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class wT extends J{constructor(e){super(),X(this,e,_T,vT,Y,{url:0})}}function bT(t){let e,n,s,r;return{c(){e=w("i"),n=M(),s=w("span"),r=fe(t[0]),f(e,"class","codicon codicon-link")},m(i,o){C(i,e,o),C(i,n,o),C(i,s,o),v(s,r)},p(i,o){o&1&&Ae(r,i[0])},i:S,o:S,d(i){i&&A(e),i&&A(n),i&&A(s)}}}function IT(t){let e,n;return e=new wT({props:{url:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ET(t){let e,n,s,r;const i=[IT,bT],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function TT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=fp(r)?new URL(r):null)},[r,s]}class kT extends J{constructor(e){super(),X(this,e,TT,ET,Y,{source:0})}}function ST(t){let e,n;const s=t[1].default,r=Lp(s,t,t[0],null);return{c(){e=w("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){C(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Up(r,s,i,i[0],n?xp(s,i[0],o,null):Fp(i[0]),null)},i(i){n||(_(r,i),n=!0)},o(i){b(r,i),n=!1},d(i){i&&A(e),r&&r.d(i)}}}function AT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Er extends J{constructor(e){super(),X(this,e,AT,ST,Y,{})}}const ru=6e4,Yr=t=>{if(!CT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/ru,s=new Date().getTime()/ru-e;if(s<1)return"just now";if(s<60)return pn(s,"minute");const r=s/60;if(r<24)return pn(r,"hour");const i=r/24;if(i<7)return pn(i,"day");if(i<30.5)return pn(i/7,"week");if(i<365.25)return pn(i/30.5,"month");const o=i/365.25;return pn(o,"year")},CT=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",pn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function DT(t){let e,n,s,r=Yr(t[0])+"",i;return{c(){e=w("i"),n=M(),s=w("span"),i=fe(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),v(s,i)},p(o,[a]){a&1&&r!==(r=Yr(o[0])+"")&&Ae(i,r)},i:S,o:S,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function NT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class RT extends J{constructor(e){super(),X(this,e,NT,DT,Y,{value:0})}}function $T(t){let e,n,s,r=Pt(t[0])+"",i;return{c(){e=w("i"),n=M(),s=w("span"),i=fe(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),v(s,i)},p(o,[a]){a&1&&r!==(r=Pt(o[0])+"")&&Ae(i,r)},i:S,o:S,d(o){o&&A(e),o&&A(n),o&&A(s)}}}function OT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class PT extends J{constructor(e){super(),X(this,e,OT,$T,Y,{value:0})}}function MT(t){let e,n,s=t[0].author+"",r,i,o,a=Yr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=w("div"),n=w("span"),r=fe(s),i=M(),o=w("span"),c=fe(a),l=M(),u=w("span"),d=fe(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,y){C(p,e,y),v(e,n),v(n,r),v(e,i),v(e,o),v(o,c),v(e,l),v(e,u),v(u,d)},p(p,[y]){y&1&&s!==(s=p[0].author+"")&&Ae(r,s),y&1&&a!==(a=Yr(p[0].createdAt)+"")&&Ae(c,a),y&1&&h!==(h=p[0].content+"")&&Ae(d,h)},i:S,o:S,d(p){p&&A(e)}}}function LT(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class xT extends J{constructor(e){super(),X(this,e,LT,MT,Y,{comment:0})}}function UT(t){let e,n,s,r;return{c(){e=w("i"),n=M(),s=w("a"),r=fe("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){C(i,e,o),C(i,n,o),C(i,s,o),v(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:S,o:S,d(i){i&&A(e),i&&A(n),i&&A(s)}}}function FT(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class VT extends J{constructor(e){super(),X(this,e,FT,UT,Y,{url:0})}}function iu(t,e,n){const s=t.slice();return s[8]=e[n],s}function ou(t,e,n){const s=t.slice();return s[4]=e[n],s}function au(t){let e,n,s,r,i;return{c(){e=w("i"),n=M(),s=w("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),Ee(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),Ee(s,"active",t[1]==="comments")},m(o,a){C(o,e,a),C(o,n,a),C(o,s,a),r||(i=[W(e,"click",t[2]),W(s,"click",t[3])],r=!0)},p(o,a){a&2&&Ee(e,"active",o[1]==="tags"),a&2&&Ee(s,"active",o[1]==="comments")},d(o){o&&A(e),o&&A(n),o&&A(s),r=!1,Fe(i)}}}function BT(t){let e,n;return e=new RT({props:{value:t[0].change}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function jT(t){let e,n;return e=new PT({props:{value:t[0].score}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function qT(t){let e,n;return e=new VT({props:{url:t[0].file_url}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function cu(t){let e,n;return e=new Er({props:{$$slots:{default:[zT]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function zT(t){let e,n;return e=new kT({props:{source:t[0].source}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function KT(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:XT,then:WT,catch:GT,value:7,blocks:[,,,]};return kr(n=Hl(t[0].id),r),{c(){e=lt(),r.block.c()},m(i,o){C(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=Hl(t[0].id))&&kr(n,r)||Du(r,t,o)},i(i){s||(_(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];b(a)}s=!1},d(i){i&&A(e),r.block.d(i),r.token=null,r=null}}}function HT(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=uu(ou(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=ou(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=uu(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&A(e),rn(r,o)}}}function GT(t){return{c:S,m:S,p:S,i:S,o:S,d:S}}function WT(t){let e,n,s,r;const i=[YT,QT],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function QT(t){let e;return{c(){e=w("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}function YT(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=lu(iu(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=iu(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=lu(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&A(e),rn(r,o)}}}function lu(t){let e,n;return e=new xT({props:{comment:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function XT(t){let e,n;return e=new Li({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function uu(t){let e,n;return e=new yT({props:{tag:t[4]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function JT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y=t[0].comment_count>0&&au(t);r=new Er({props:{$$slots:{default:[BT]},$$scope:{ctx:t}}}),o=new Er({props:{$$slots:{default:[jT]},$$scope:{ctx:t}}}),c=new Er({props:{$$slots:{default:[qT]},$$scope:{ctx:t}}});let g=t[0].source&&cu(t);const E=[HT,KT],m=[];function N(k,j){return k[1]==="tags"?0:1}return h=N(t),d=m[h]=E[h](t),{c(){e=w("div"),n=w("div"),y&&y.c(),s=M(),F(r.$$.fragment),i=M(),F(o.$$.fragment),a=M(),F(c.$$.fragment),l=M(),g&&g.c(),u=M(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(k,j){C(k,e,j),v(e,n),y&&y.m(n,null),v(n,s),x(r,n,null),v(n,i),x(o,n,null),v(n,a),x(c,n,null),v(n,l),g&&g.m(n,null),v(e,u),m[h].m(e,null),p=!0},p(k,[j]){k[0].comment_count>0?y?y.p(k,j):(y=au(k),y.c(),y.m(n,s)):y&&(y.d(1),y=null);const O={};j&2049&&(O.$$scope={dirty:j,ctx:k}),r.$set(O);const D={};j&2049&&(D.$$scope={dirty:j,ctx:k}),o.$set(D);const z={};j&2049&&(z.$$scope={dirty:j,ctx:k}),c.$set(z),k[0].source?g?(g.p(k,j),j&1&&_(g,1)):(g=cu(k),g.c(),_(g,1),g.m(n,null)):g&&(ce(),b(g,1,1,()=>{g=null}),le());let oe=h;h=N(k),h===oe?m[h].p(k,j):(ce(),b(m[oe],1,1,()=>{m[oe]=null}),le(),d=m[h],d?d.p(k,j):(d=m[h]=E[h](k),d.c()),_(d,1),d.m(e,null))},i(k){p||(_(r.$$.fragment,k),_(o.$$.fragment,k),_(c.$$.fragment,k),_(g),_(d),p=!0)},o(k){b(r.$$.fragment,k),b(o.$$.fragment,k),b(c.$$.fragment,k),b(g),b(d),p=!1},d(k){k&&A(e),y&&y.d(),U(r),U(o),U(c),g&&g.d(),m[h].d()}}}function ZT(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class e1 extends J{constructor(e){super(),X(this,e,ZT,JT,Y,{post:0})}}const Mn=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function t1(t){let e,n,s,r,i,o,a,c;return{c(){e=w("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-4xosj1")},m(l,u){C(l,e,u),t[3](e),a||(c=[W(e,"click",t[4]),W(e,"keyup",Kn(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:S,o:S,d(l){l&&A(e),t[3](null),a=!1,Fe(c)}}}function n1(t,e,n){let{post:s}=e;const r=Ye();let i;Cs(()=>Mn.observe(i)),Jr(()=>Mn.unobserve(i));function o(l){kn[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let s1=class extends J{constructor(e){super(),X(this,e,n1,t1,Y,{post:0})}};function r1(t){let e,n,s,r,i,o,a,c;return{c(){e=w("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].file_url),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",r=t[0].width),f(e,"height",i=t[0].height),e.controls=!0,e.loop=o=t[0].tags.some(hu),f(e,"tabindex","0"),f(e,"class","svelte-1gwvoya")},m(l,u){C(l,e,u),t[5](e),a||(c=[W(e,"click",Vo(t[4])),W(e,"touchstart",t[2],{passive:!0}),W(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&r!==(r=l[0].width)&&f(e,"width",r),u&1&&i!==(i=l[0].height)&&f(e,"height",i),u&1&&o!==(o=l[0].tags.some(hu))&&(e.loop=o)},i:S,o:S,d(l){l&&A(e),t[5](null),a=!1,Fe(c)}}}const hu=t=>t.name=="loop";function i1(t,e,n){let{post:s}=e;const r=Ye();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};Cs(()=>Mn.observe(i)),Jr(()=>Mn.unobserve(i));function l(h){zp.call(this,t,h)}function u(h){kn[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},[s,i,a,c,l,u]}class o1 extends J{constructor(e){super(),X(this,e,i1,r1,Y,{post:0})}}const a1="/assets/play-f2f6faca.svg",c1="/assets/pause-6f7851a2.svg";function l1(t){let e,n;return{c(){e=w("img"),Tn(e.src,n=a1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),jp(e,"margin-left","4px")},m(s,r){C(s,e,r)},p:S,i:S,o:S,d(s){s&&A(e)}}}function u1(t){let e,n;return{c(){e=w("img"),Tn(e.src,n=c1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){C(s,e,r)},p:S,i:S,o:S,d(s){s&&A(e)}}}function h1(t){let e,n;return e=new Li({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function d1(t){let e,n,s,r,i,o,a,c,l,u,h,d,p;const y=[h1,u1,l1],g=[];function E(m,N){return m[3]?0:m[1]?1:2}return l=E(t),u=g[l]=y[l](t),{c(){e=w("div"),n=w("img"),a=M(),c=w("button"),u.c(),f(n,"class","media-img svelte-kk4axf"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(n,"width",i=t[0].width),f(n,"height",o=t[0].height),f(n,"tabindex","0"),f(c,"class","svelte-kk4axf"),Ee(c,"play",t[1]&&!t[3]),f(e,"class","svelte-kk4axf")},m(m,N){C(m,e,N),v(e,n),t[9](n),v(e,a),v(e,c),g[l].m(c,null),h=!0,d||(p=[W(n,"click",t[10]),W(n,"keyup",Kn(t[11])),W(n,"load",t[12]),W(c,"click",t[6])],d=!0)},p(m,[N]){(!h||N&16)&&f(n,"data-src",m[4]),(!h||N&1&&s!==(s=m[0].id.toString()))&&f(n,"alt",s),(!h||N&1&&r!==(r=`aspect-ratio: ${m[0].width} / ${m[0].height}`))&&f(n,"style",r),(!h||N&1&&i!==(i=m[0].width))&&f(n,"width",i),(!h||N&1&&o!==(o=m[0].height))&&f(n,"height",o);let k=l;l=E(m),l===k?g[l].p(m,N):(ce(),b(g[k],1,1,()=>{g[k]=null}),le(),u=g[l],u?u.p(m,N):(u=g[l]=y[l](m),u.c()),_(u,1),u.m(c,null)),(!h||N&10)&&Ee(c,"play",m[1]&&!m[3])},i(m){h||(_(u),h=!0)},o(m){b(u),h=!1},d(m){m&&A(e),t[9](null),g[l].d(),d=!1,Fe(p)}}}function f1(t,e,n){let s,r,i,{post:o}=e;const a=Ye();let c,l=!1,u=!1;const h=()=>{n(3,u=!0),n(1,l=!l),n(2,c.src=l?r:s,c)};Cs(()=>Mn.observe(c)),Jr(()=>Mn.unobserve(c));function d(E){kn[E?"unshift":"push"](()=>{c=E,n(2,c)})}const p=()=>a("click"),y=()=>a("click"),g=()=>n(3,u=!1);return t.$$set=E=>{"post"in E&&n(0,o=E.post)},t.$$.update=()=>{t.$$.dirty&1&&n(7,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(8,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&386&&n(4,i=l?r:s)},[o,l,c,u,i,a,h,s,r,d,p,y,g]}class p1 extends J{constructor(e){super(),X(this,e,f1,d1,Y,{post:0})}}function g1(t){let e,n;return e=new p1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function m1(t){let e,n;return e=new o1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function y1(t){let e,n;return e=new s1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function du(t){let e,n;return e=new e1({props:{post:t[0]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function v1(t){let e,n,s,r,i;const o=[y1,m1,g1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&du(t);return{c(){e=w("div"),s.c(),r=M(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){C(u,e,h),a[n].m(e,null),v(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ce(),b(a[d],1,1,()=>{a[d]=null}),le(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),_(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&_(l,1)):(l=du(u),l.c(),_(l,1),l.m(e,null)):l&&(ce(),b(l,1,1,()=>{l=null}),le())},i(u){i||(_(s),_(l),i=!0)},o(u){b(s),b(l),i=!1},d(u){u&&A(e),a[n].d(),l&&l.d()}}}function _1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class w1 extends J{constructor(e){super(),X(this,e,_1,v1,Y,{post:0})}}function fu(t,e,n){const s=t.slice();return s[1]=e[n],s}function pu(t){let e,n;return e=new w1({props:{post:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function b1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=pu(fu(t,s,o));const i=o=>b(r[o],1,1,()=>{r[o]=null});return{c(){e=w("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){C(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=fu(o,s,c);r[c]?(r[c].p(l,a),_(r[c],1)):(r[c]=pu(l),r[c].c(),_(r[c],1),r[c].m(e,null))}for(ce(),c=s.length;c<r.length;c+=1)i(c);le()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)_(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);n=!1},d(o){o&&A(e),rn(r,o)}}}function I1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class E1 extends J{constructor(e){super(),X(this,e,I1,b1,Y,{posts:0})}}function T1(t){let e;return{c(){e=w("div")},m(n,s){C(n,e,s),t[1](e)},p:S,i:S,o:S,d(n){n&&A(e),t[1](null)}}}function k1(t,e,n){const s=Ye(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){kn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class S1 extends J{constructor(e){super(),X(this,e,k1,T1,Y,{})}}const A1="/assets/shironeko-x-c28cad00.png";function C1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=M(),i=w("span"),i.textContent="You have reached the end",Tn(n.src,s=A1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){C(o,e,a),v(e,n),v(e,r),v(e,i)},p:S,i:S,o:S,d(o){o&&A(e)}}}class D1 extends J{constructor(e){super(),X(this,e,null,C1,Y,{})}}const N1="/assets/shironeko-confused-4071d5b2.png";function R1(t){let e,n,s,r,i;return{c(){e=w("div"),n=w("img"),r=M(),i=w("span"),i.textContent="No results found",Tn(n.src,s=N1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){C(o,e,a),v(e,n),v(e,r),v(e,i)},p:S,i:S,o:S,d(o){o&&A(e)}}}class $1 extends J{constructor(e){super(),X(this,e,null,R1,Y,{})}}const gu=()=>({pages:[],nextPage:0,ids:new Set}),O1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},P1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},M1=()=>{const{subscribe:t,update:e,set:n}=nc("results",gu(),O1,P1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(gu())}}},ts=M1(),L1={sortProperty:"id",minScore:0},x1=()=>{const{subscribe:t,set:e}=Cp("sort",L1);return{subscribe:t,set:e}},Tr=x1(),U1=()=>{const{subscribe:t,set:e}=nc("count",null);return{subscribe:t,set:e,reset(){e(0)}}},Np=U1();function mu(t,e,n){const s=t.slice();return s[16]=e[n],s}function F1(t){let e,n;return e=new $1({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function V1(t){let e,n,s=Pt(t[2])+"",r,i,o,a,c,l,u,h,d,p,y,g,E,m,N,k,j,O,D,z,oe,ke,te,Hn,ne,se=t[0]==="custom"&&yu(t),Ne=t[3].pages,Q=[];for(let K=0;K<Ne.length;K+=1)Q[K]=vu(mu(t,Ne,K));const tr=K=>b(Q[K],1,1,()=>{Q[K]=null}),rc=[j1,B1],bt=[];function ic(K,ue){return K[5]?0:1}return z=ic(t),oe=bt[z]=rc[z](t),{c(){e=w("div"),n=w("span"),r=fe(s),i=fe(" results"),a=M(),c=w("select"),l=w("option"),l.textContent="Date",u=w("option"),u.textContent="Score",h=w("option"),h.textContent="Updated",d=M(),p=w("select"),y=w("option"),y.textContent="Any Score",g=w("option"),g.textContent="Score > 10",E=w("option"),E.textContent="Score > 100",m=w("option"),m.textContent="Score > 1K",N=w("option"),N.textContent="Custom",k=M(),se&&se.c(),j=M(),O=w("ol");for(let K=0;K<Q.length;K+=1)Q[K].c();D=M(),oe.c(),ke=lt(),f(n,"title",o=`${t[2]} results`),f(n,"class","svelte-1yfgwr6"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1yfgwr6"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1yfgwr6"),h.__value="updated",h.value=h.__value,f(h,"class","svelte-1yfgwr6"),f(c,"title","Sort results by"),f(c,"class","svelte-1yfgwr6"),t[6].sortProperty===void 0&&us(()=>t[9].call(c)),y.__value=0,y.value=y.__value,f(y,"class","svelte-1yfgwr6"),g.__value=10,g.value=g.__value,f(g,"class","svelte-1yfgwr6"),E.__value=100,E.value=E.__value,f(E,"class","svelte-1yfgwr6"),m.__value=1e3,m.value=m.__value,f(m,"class","svelte-1yfgwr6"),N.__value="custom",N.value=N.__value,f(N,"class","svelte-1yfgwr6"),f(p,"title","Filter by score"),f(p,"class","svelte-1yfgwr6"),t[0]===void 0&&us(()=>t[11].call(p)),f(e,"class","header svelte-1yfgwr6"),f(O,"class","svelte-1yfgwr6")},m(K,ue){C(K,e,ue),v(e,n),v(n,r),v(n,i),v(e,a),v(e,c),v(c,l),v(c,u),v(c,h),sr(c,t[6].sortProperty,!0),v(e,d),v(e,p),v(p,y),v(p,g),v(p,E),v(p,m),v(p,N),sr(p,t[0],!0),v(e,k),se&&se.m(e,null),C(K,j,ue),C(K,O,ue);for(let It=0;It<Q.length;It+=1)Q[It]&&Q[It].m(O,null);C(K,D,ue),bt[z].m(K,ue),C(K,ke,ue),te=!0,Hn||(ne=[W(c,"change",t[9]),W(c,"change",t[10]),W(p,"change",t[11]),W(p,"change",t[12])],Hn=!0)},p(K,ue){if((!te||ue&4)&&s!==(s=Pt(K[2])+"")&&Ae(r,s),(!te||ue&4&&o!==(o=`${K[2]} results`))&&f(n,"title",o),ue&64&&sr(c,K[6].sortProperty),ue&1&&sr(p,K[0]),K[0]==="custom"?se?se.p(K,ue):(se=yu(K),se.c(),se.m(e,null)):se&&(se.d(1),se=null),ue&8){Ne=K[3].pages;let Ve;for(Ve=0;Ve<Ne.length;Ve+=1){const oc=mu(K,Ne,Ve);Q[Ve]?(Q[Ve].p(oc,ue),_(Q[Ve],1)):(Q[Ve]=vu(oc),Q[Ve].c(),_(Q[Ve],1),Q[Ve].m(O,null))}for(ce(),Ve=Ne.length;Ve<Q.length;Ve+=1)tr(Ve);le()}let It=z;z=ic(K),z===It?bt[z].p(K,ue):(ce(),b(bt[It],1,1,()=>{bt[It]=null}),le(),oe=bt[z],oe?oe.p(K,ue):(oe=bt[z]=rc[z](K),oe.c()),_(oe,1),oe.m(ke.parentNode,ke))},i(K){if(!te){for(let ue=0;ue<Ne.length;ue+=1)_(Q[ue]);_(oe),te=!0}},o(K){Q=Q.filter(Boolean);for(let ue=0;ue<Q.length;ue+=1)b(Q[ue]);b(oe),te=!1},d(K){K&&A(e),se&&se.d(),K&&A(j),K&&A(O),rn(Q,K),K&&A(D),bt[z].d(K),K&&A(ke),Hn=!1,Fe(ne)}}}function yu(t){let e,n,s;return{c(){e=w("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-1yfgwr6")},m(r,i){C(r,e,i),At(e,t[1]),n||(s=[W(e,"input",t[13]),W(e,"keyup",Kn(z1)),W(e,"blur",t[14])],n=!0)},p(r,i){i&2&&Cu(e.value)!==r[1]&&At(e,r[1])},d(r){r&&A(e),n=!1,Fe(s)}}}function vu(t){let e,n;return e=new E1({props:{posts:t[16]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.posts=s[16]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function B1(t){let e,n;return e=new D1({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function j1(t){let e,n;return e=new S1({}),e.$on("visible",t[15]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function q1(t){let e,n,s,r;const i=[V1,F1],o=[];function a(c,l){return c[2]?0:c[4]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=lt()},m(c,l){~e&&o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ce(),b(o[u],1,1,()=>{o[u]=null}),le()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){~e&&o[e].d(c),c&&A(s)}}}const z1=t=>t.target.blur();function K1(t,e,n){let s,r,i,o,a,c;He(t,Np,k=>n(2,o=k)),He(t,ts,k=>n(3,a=k)),He(t,Tr,k=>n(6,c=k));const l=Ye();let u=0,h=0;function d(){c.sortProperty=cc(this),Tr.set(c)}const p=()=>l("configchange");function y(){u=cc(this),n(0,u)}const g=()=>{u!=="custom"&&l("configchange")};function E(){h=Cu(this.value),n(1,h)}const m=()=>l("configchange"),N=()=>l("endreached");return t.$$.update=()=>{t.$$.dirty&3&&Vp(Tr,c.minScore=u!=="custom"?u:h,c),t.$$.dirty&4&&n(8,s=o/vp),t.$$.dirty&264&&n(5,r=a.pages.length<s),t.$$.dirty&4&&n(4,i=o===0)},[u,h,o,a,i,r,c,l,s,d,p,y,g,E,m,N]}class H1 extends J{constructor(e){super(),X(this,e,K1,q1,Y,{})}}function G1(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),Ee(e,"visible",t[0])},m(r,i){C(r,e,i),n||(s=W(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Ee(e,"visible",r[0])},i:S,o:S,d(r){r&&A(e),n=!1,s()}}}function W1(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Cs(()=>{document.addEventListener("scroll",i,{passive:!0})}),Jr(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class Q1 extends J{constructor(e){super(),X(this,e,W1,G1,Y,{})}}function Y1(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=w("div"),n=w("div"),s=w("i"),i=M(),o=w("div"),a=w("h3"),c=fe(t[2]),l=M(),u=w("span"),h=fe(t[1]),f(s,"class",r=ot(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){C(d,e,p),v(e,n),v(n,s),v(e,i),v(e,o),v(o,a),v(a,c),v(o,l),v(o,u),v(u,h)},p(d,[p]){p&1&&r!==(r=ot(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Ae(c,d[2]),p&2&&Ae(h,d[1])},i:S,o:S,d(d){d&&A(e)}}}function X1(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Rp extends J{constructor(e){super(),X(this,e,X1,Y1,Y,{icon:0,message:1,title:2})}}function J1(t){let e;return{c(){e=w("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class Z1 extends J{constructor(e){super(),X(this,e,null,J1,Y,{})}}function _u(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function wu(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=bu(_u(t,r,c));const o=c=>b(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&Iu(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=M(),a&&a.c(),n=lt()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);C(c,e,l),a&&a.m(c,l),C(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=_u(c,r,u);i[u]?(i[u].p(h,l),_(i[u],1)):(i[u]=bu(h),i[u].c(),_(i[u],1),i[u].m(e.parentNode,e))}for(ce(),u=r.length;u<i.length;u+=1)o(u);le()}c[0].length>1?a?a.p(c,l):(a=Iu(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)_(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)b(i[l]);s=!1},d(c){rn(i,c),c&&A(e),a&&a.d(c),c&&A(n)}}}function bu(t){let e,n;function s(){return t[2](t[7])}function r(){return t[3](t[5])}return e=new kp({props:{tag:t[5]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){F(e.$$.fragment)},m(i,o){x(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[5]),e.$set(a)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){b(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Iu(t){let e,n,s;return{c(){e=w("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1uhy4lk"></i>',f(e,"class","add-supertag svelte-1uhy4lk"),f(e,"title","Click to create a new supertag")},m(r,i){C(r,e,i),n||(s=W(e,"click",t[4]),n=!0)},p:S,d(r){r&&A(e),n=!1,s()}}}function ek(t){let e,n,s=t[0].length&&wu(t);return{c(){e=w("ul"),s&&s.c(),f(e,"class","svelte-1uhy4lk")},m(r,i){C(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&_(s,1)):(s=wu(r),s.c(),_(s,1),s.m(e,null)):s&&(ce(),b(s,1,1,()=>{s=null}),le())},i(r){n||(_(s),n=!0)},o(r){b(s),n=!1},d(r){r&&A(e),s&&s.d()}}}function tk(t,e,n){let s;He(t,gt,c=>n(0,s=c));const r=Ye();return[s,r,c=>gt.removeByIndex(c),c=>gt.addOrReplace(new Mi(dp(c.modifier),c.name,c.count,c.type)),()=>r("supertag")]}class nk extends J{constructor(e){super(),X(this,e,tk,ek,Y,{})}}function sk(t){let e,n;return e=new H1({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function rk(t){let e,n,s,r;const i=[ok,ik],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function ik(t){let e,n;return e=new Rp({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ok(t){let e,n;return e=new Rp({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Eu(t){let e,n;return e=new eT({props:{tags:t[2]}}),e.$on("submit",t[7]),e.$on("close",t[8]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ak(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,E,m;n=new Z1({}),r=new fT({}),r.$on("pick",t[5]),o=new nk({}),o.$on("supertag",t[6]),l=new Tp({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const N=[rk,sk],k=[];function j(D,z){return D[1]!==void 0?0:1}h=j(t),d=k[h]=N[h](t),y=new Q1({});let O=t[0]&&Eu(t);return{c(){e=w("div"),F(n.$$.fragment),s=M(),F(r.$$.fragment),i=M(),F(o.$$.fragment),a=M(),c=w("div"),F(l.$$.fragment),u=M(),d.c(),p=M(),F(y.$$.fragment),g=M(),O&&O.c(),E=lt(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,z){C(D,e,z),x(n,e,null),v(e,s),x(r,e,null),v(e,i),x(o,e,null),v(e,a),v(e,c),x(l,c,null),C(D,u,z),k[h].m(D,z),C(D,p,z),x(y,D,z),C(D,g,z),O&&O.m(D,z),C(D,E,z),m=!0},p(D,[z]){let oe=h;h=j(D),h===oe?k[h].p(D,z):(ce(),b(k[oe],1,1,()=>{k[oe]=null}),le(),d=k[h],d?d.p(D,z):(d=k[h]=N[h](D),d.c()),_(d,1),d.m(p.parentNode,p)),D[0]?O?(O.p(D,z),z&1&&_(O,1)):(O=Eu(D),O.c(),_(O,1),O.m(E.parentNode,E)):O&&(ce(),b(O,1,1,()=>{O=null}),le())},i(D){m||(_(n.$$.fragment,D),_(r.$$.fragment,D),_(o.$$.fragment,D),_(l.$$.fragment,D),_(d),_(y.$$.fragment,D),_(O),m=!0)},o(D){b(n.$$.fragment,D),b(r.$$.fragment,D),b(o.$$.fragment,D),b(l.$$.fragment,D),b(d),b(y.$$.fragment,D),b(O),m=!1},d(D){D&&A(e),U(n),U(r),U(o),U(l),D&&A(u),k[h].d(D),D&&A(p),U(y,D),D&&A(g),O&&O.d(D),D&&A(E)}}}function ck(t,e,n){let s,r,i,o;He(t,Qr,m=>n(10,s=m)),He(t,gt,m=>n(2,r=m)),He(t,Tr,m=>n(11,i=m)),He(t,ts,m=>n(12,o=m));let a=!1,c,l=!1;const u=async()=>{n(1,c=void 0),l=!0,ts.reset();try{const m=d(),N=AE(m,i.sortProperty,i.minScore),k=ql(o.nextPage,m,i.sortProperty,i.minScore),[j,O]=await Promise.all([N,k]);Np.set(j),ts.addPage(O)}catch(m){n(1,c=m),console.warn(m)}finally{l=!1}},h=async()=>{if(!l){n(1,c=void 0),l=!0;try{const m=d(),N=await ql(o.nextPage,m,i.sortProperty,i.minScore);ts.addPage(N)}catch(m){n(1,c=m),console.warn(m)}finally{l=!1}}},d=()=>r.flatMap(m=>m.type==="supertag"?s.supertags.find(N=>N.name===m.name).tags:mp(m));return[a,c,r,u,h,m=>gt.addOrReplace(m.detail),()=>{n(0,a=!0)},m=>{Qr.addSupertag(m.detail),gt.set([new Mi("+",m.detail.name,m.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class lk extends J{constructor(e){super(),X(this,e,ck,ak,Y,{})}}function uk(t){let e,n;return e=new Li({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function hk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=lc(r,i())),{c(){e&&F(e.$$.fragment),n=lt()},m(o,a){e&&x(e,o,a),C(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ce();const c=e;b(c.$$.fragment,1,0,()=>{U(c,1)}),le()}r?(e=lc(r,i()),F(e.$$.fragment),_(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}},i(o){s||(e&&_(e.$$.fragment,o),s=!0)},o(o){e&&b(e.$$.fragment,o),s=!1},d(o){o&&A(n),e&&U(e,o)}}}function dk(t){let e,n,s,r;const i=[hk,uk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),C(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){b(n),r=!1},d(c){o[e].d(c),c&&A(s)}}}function fk(t,e,n){let{loadComponent:s}=e,r;return Cs(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class sc extends J{constructor(e){super(),X(this,e,fk,dk,Y,{loadComponent:1})}}function pk(t){let e;return{c(){e=w("p"),e.textContent="You got lost..."},m(n,s){C(n,e,s)},i:S,o:S,d(n){n&&A(e)}}}function gk(t){let e,n;return e=new sc({props:{loadComponent:Ik}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function mk(t){let e,n;return e=new sc({props:{loadComponent:bk}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function yk(t){let e,n;return e=new sc({props:{loadComponent:wk}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function vk(t){let e,n;return e=new lk({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function _k(t){let e,n,s,r;const i=[vk,yk,mk,gk,pk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=w("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){C(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ce(),b(o[u],1,1,()=>{o[u]=null}),le(),s=o[n],s||(s=o[n]=i[n](c),s.c()),_(s,1),s.m(e,null))},i(c){r||(_(s),r=!0)},o(c){b(s),r=!1},d(c){c&&A(e),o[n].d()}}}const wk=()=>Ri(()=>import("./Account-ddd0c61b.js"),["assets/Account-ddd0c61b.js","assets/Account-72046986.css"]),bk=()=>Ri(()=>import("./Preferences-c1f404fa.js"),["assets/Preferences-c1f404fa.js","assets/ParagraphHeading-220b8aa1.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-e28acf3d.css"]),Ik=()=>Ri(()=>import("./Help-c2570d5f.js"),["assets/Help-c2570d5f.js","assets/ParagraphHeading-220b8aa1.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function Ek(t,e,n){let s;return He(t,Vt,r=>n(0,s=r)),[s]}class Tk extends J{constructor(e){super(),X(this,e,Ek,_k,Y,{})}}function kk(t){let e;return{c(){e=w("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){C(n,e,s)},p:S,i:S,o:S,d(n){n&&A(e)}}}class Sk extends J{constructor(e){super(),X(this,e,null,kk,Y,{})}}const{subscribe:Ak,set:Ck}=Cp("theme","dark"),Tu={subscribe:Ak,set(t){Ck(t),Dk(t),Qr.setTheme(t)}},Dk=t=>{document.documentElement.classList.replace(Nk(t),t)},Nk=t=>t==="dark"?"light":"dark";function Rk(t){let e,n,s,r,i,o;return e=new fE({}),s=new Tk({}),i=new Sk({}),{c(){F(e.$$.fragment),n=M(),F(s.$$.fragment),r=M(),F(i.$$.fragment)},m(a,c){x(e,a,c),C(a,n,c),x(s,a,c),C(a,r,c),x(i,a,c),o=!0},p:S,i(a){o||(_(e.$$.fragment,a),_(s.$$.fragment,a),_(i.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),b(s.$$.fragment,a),b(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&A(n),U(s,a),a&&A(r),U(i,a)}}}function $k(t){return Tu.subscribe(e=>Tu.set(e))(),[]}class Ok extends J{constructor(e){super(),X(this,e,$k,Rk,Y,{})}}function Pk(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Ri(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new Ok({target:document.getElementById("app")});Pk();export{ec as $,U as A,kn as B,Lk as C,Mk as D,Tp as E,At as F,Tn as G,cE as H,lt as I,He as J,Qr as K,Vl as L,Yl as M,Cp as N,Lp as O,Up as P,Fp as Q,xp as R,J as S,us as T,sr as U,cc as V,Tu as W,Vp as X,kp as Y,Mi as Z,yT as _,f as a,Q1 as a0,Wl as a1,C as b,S as c,A as d,w as e,Pn as f,fe as g,v as h,X as i,Ae as j,M as k,W as l,_ as m,ot as n,Kn as o,Vo as p,ce as q,Fe as r,Y as s,Ee as t,le as u,b as v,rn as w,Ye as x,F as y,x as z};
