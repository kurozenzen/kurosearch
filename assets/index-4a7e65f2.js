(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function S(){}function Rp(t,e){for(const n in e)t[n]=e[n];return t}function $p(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Au(t){return t()}function lc(){return Object.create(null)}function Se(t){t.forEach(Au)}function Yr(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let sr;function Yt(t,e){return sr||(sr=document.createElement("a")),sr.href=e,t===sr.href}function Op(t){return Object.keys(t).length===0}function Pp(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xe(t,e,n){t.$$.on_destroy.push(Pp(e,n))}function Mp(t,e,n,s){if(t){const r=Cu(t,e,n,s);return t[0](r)}}function Cu(t,e,n,s){return t[1]&&s?Rp(n.ctx.slice(),t[1](s(e))):n.ctx}function Lp(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function xp(t,e,n,s,r,i){if(r){const o=Cu(e,n,s,i);t.p(o,r)}}function Up(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function it(t){return t??""}function Fp(t,e,n){return t.set(n),e}function m(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function rn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function dn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ue(t){return document.createTextNode(t)}function R(){return ue(" ")}function ct(){return ue("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function zo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Du(t){return t===""?null:+t}function Vp(t){return Array.from(t.childNodes)}function Te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e){t.value=e??""}function Bp(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function fn(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ui(t){const e=t.querySelector(":checked");return e&&e.__value}function he(t,e,n){t.classList[n?"add":"remove"](e)}function jp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function uc(t,e){return new t(e)}let hs;function ht(t){hs=t}function Xr(){if(!hs)throw new Error("Function called outside component initialization");return hs}function Ns(t){Xr().$$.on_mount.push(t)}function Jr(t){Xr().$$.on_destroy.push(t)}function ze(){const t=Xr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=jp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function qp(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const yn=[],An=[];let bn=[];const lo=[],zp=Promise.resolve();let uo=!1;function Kp(){uo||(uo=!0,zp.then(Ko))}function In(t){bn.push(t)}function Uk(t){lo.push(t)}const Fi=new Set;let pn=0;function Ko(){if(pn!==0)return;const t=hs;do{try{for(;pn<yn.length;){const e=yn[pn];pn++,ht(e),Hp(e.$$)}}catch(e){throw yn.length=0,pn=0,e}for(ht(null),yn.length=0,pn=0;An.length;)An.pop()();for(let e=0;e<bn.length;e+=1){const n=bn[e];Fi.has(n)||(Fi.add(n),n())}bn.length=0}while(yn.length);for(;lo.length;)lo.pop()();uo=!1,Fi.clear(),ht(t)}function Hp(t){if(t.fragment!==null){t.update(),Se(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(In)}}function Gp(t){const e=[],n=[];bn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),bn=e}const fr=new Set;let Ut;function ie(){Ut={r:0,c:[],p:Ut}}function oe(){Ut.r||Se(Ut.c),Ut=Ut.p}function w(t,e){t&&t.i&&(fr.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(fr.has(t))return;fr.add(t),Ut.c.push(()=>{fr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Tr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ie(),I(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),oe())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Ko()}if($p(t)){const r=Xr();if(t.then(i=>{ht(r),s(e.then,1,e.value,i),ht(null)},i=>{if(ht(r),s(e.catch,2,e.error,i),ht(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Nu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Fk(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function F(t){t&&t.c()}function x(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||In(()=>{const o=t.$$.on_mount.map(Au).filter(Yr);t.$$.on_destroy?t.$$.on_destroy.push(...o):Se(o),t.$$.on_mount=[]}),i.forEach(In)}function U(t,e){const n=t.$$;n.fragment!==null&&(Gp(n.after_update),Se(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wp(t,e){t.$$.dirty[0]===-1&&(yn.push(t),Kp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,s,r,i,o,a=[-1]){const c=hs;ht(t);const l=t.$$={fragment:null,ctx:[],props:i,update:S,not_equal:r,bound:lc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:lc(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Wp(t,h)),d}):[],l.update(),u=!0,Se(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Vp(e.target);l.fragment&&l.fragment.l(h),h.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),Ko()}ht(c)}class X{$destroy(){U(this,1),this.$destroy=S}$on(e,n){if(!Yr(n))return S;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Op(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gn=[];function Rs(t,e=S){let n;const s=new Set;function r(a){if(W(t,a)&&(t=a,n)){const c=!gn.length;for(const l of s)l[1](),gn.push(l,t);if(c){for(let l=0;l<gn.length;l+=2)gn[l][0](gn[l+1]);gn.length=0}}}function i(a){r(a(t))}function o(a,c=S){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||S),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Qp=Object.freeze(["search","account","settings","help"]),Yp=t=>Qp.includes(t),Xp=()=>{const{subscribe:t,set:e}=Rs("search");return{subscribe:t,navigateTo(n){if(!Yp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Ft=Xp();function Jp(t){let e,n,s,r,i,o;return{c(){e=dn("svg"),n=dn("g"),s=dn("path"),r=dn("defs"),i=dn("clipPath"),o=dn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){A(a,e,c),m(e,n),m(n,s),m(e,r),m(r,i),m(i,o)},p:S,i:S,o:S,d(a){a&&k(e)}}}class Zp extends X{constructor(e){super(),Y(this,e,null,Jp,W,{})}}/**
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
 */const Ru=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},eg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ru(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new tg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(t){const e=Ru(t);return $u.encodeByteArray(e,!0)},kr=function(t){return ng(t).replace(/\./g,"")},Ou=function(t){try{return $u.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rg=()=>sg().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},og=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ou(t[1]);return e&&JSON.parse(e)},Ho=()=>{try{return rg()||ig()||og()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pu=t=>{var e,n;return(n=(e=Ho())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ag=t=>{const e=Pu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},cg=()=>{var t;return(t=Ho())===null||t===void 0?void 0:t.config},Mu=t=>{var e;return(e=Ho())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ug(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),a].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Lu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xu(){try{return typeof indexedDB=="object"}catch{return!1}}function Uu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function pg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gg="FirebaseError";class Ze extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gg,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?mg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ze(r,a,s)}}function mg(t,e){return t.replace(yg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const yg=/\{\$([^}]+)}/g;function vg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(hc(i)&&hc(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function hc(t){return t!==null&&typeof t=="object"}/**
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
 */function $s(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _g(t,e){const n=new wg(t,e);return n.subscribe.bind(n)}class wg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Vi),r.error===void 0&&(r.error=Vi),r.complete===void 0&&(r.complete=Vi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vi(){}/**
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
 */const Ig=1e3,Eg=2,Tg=4*60*60*1e3,kg=.5;function dc(t,e=Ig,n=Eg){const s=e*Math.pow(n,t),r=Math.round(kg*s*(Math.random()-.5)*2);return Math.min(Tg,s+r)}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class Xe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class Sg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cg(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ag(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ag(t){return t===Lt?void 0:t}function Cg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Ng={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Rg=te.INFO,$g={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Og=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$g[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=Og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Pg=(t,e)=>e.some(n=>t instanceof n);let fc,pc;function Mg(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lg(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fu=new WeakMap,ho=new WeakMap,Vu=new WeakMap,Bi=new WeakMap,Go=new WeakMap;function xg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fu.set(n,t)}).catch(()=>{}),Go.set(e,t),e}function Ug(t){if(ho.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ho.set(t,e)}let fo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ho.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fg(t){fo=t(fo)}function Vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return Vu.set(s,e.sort?e.sort():[e]),At(s)}:Lg().includes(t)?function(...e){return t.apply(ji(this),e),At(Fu.get(this))}:function(...e){return At(t.apply(ji(this),e))}}function Bg(t){return typeof t=="function"?Vg(t):(t instanceof IDBTransaction&&Ug(t),Pg(t,Mg())?new Proxy(t,fo):t)}function At(t){if(t instanceof IDBRequest)return xg(t);if(Bi.has(t))return Bi.get(t);const e=Bg(t);return e!==t&&(Bi.set(t,e),Go.set(e,t)),e}const ji=t=>Go.get(t);function Bu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return s&&o.addEventListener("upgradeneeded",c=>{s(At(o.result),c.oldVersion,c.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const jg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],qi=new Map;function gc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qi.get(e))return qi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=qg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qi.set(e,i),i}Fg(t=>({...t,get:(e,n,s)=>gc(e,n)||t.get(e,n,s),has:(e,n)=>!!gc(e,n)||t.has(e,n)}));/**
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
 */class zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const po="@firebase/app",mc="0.9.5";/**
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
 */const Xt=new Zr("@firebase/app"),Hg="@firebase/app-compat",Gg="@firebase/analytics-compat",Wg="@firebase/analytics",Qg="@firebase/app-check-compat",Yg="@firebase/app-check",Xg="@firebase/auth",Jg="@firebase/auth-compat",Zg="@firebase/database",em="@firebase/database-compat",tm="@firebase/functions",nm="@firebase/functions-compat",sm="@firebase/installations",rm="@firebase/installations-compat",im="@firebase/messaging",om="@firebase/messaging-compat",am="@firebase/performance",cm="@firebase/performance-compat",lm="@firebase/remote-config",um="@firebase/remote-config-compat",hm="@firebase/storage",dm="@firebase/storage-compat",fm="@firebase/firestore",pm="@firebase/firestore-compat",gm="firebase",mm="9.18.0";/**
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
 */const go="[DEFAULT]",ym={[po]:"fire-core",[Hg]:"fire-core-compat",[Wg]:"fire-analytics",[Gg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Qg]:"fire-app-check-compat",[Xg]:"fire-auth",[Jg]:"fire-auth-compat",[Zg]:"fire-rtdb",[em]:"fire-rtdb-compat",[tm]:"fire-fn",[nm]:"fire-fn-compat",[sm]:"fire-iid",[rm]:"fire-iid-compat",[im]:"fire-fcm",[om]:"fire-fcm-compat",[am]:"fire-perf",[cm]:"fire-perf-compat",[lm]:"fire-rc",[um]:"fire-rc-compat",[hm]:"fire-gcs",[dm]:"fire-gcs-compat",[fm]:"fire-fst",[pm]:"fire-fst-compat","fire-js":"fire-js",[gm]:"fire-js-all"};/**
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
 */const Sr=new Map,mo=new Map;function vm(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ot(t){const e=t.name;if(mo.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,t);for(const n of Sr.values())vm(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _m={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new on("app","Firebase",_m);/**
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
 */class wm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=mm;function ju(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:go,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=cg()),!n)throw Ct.create("no-options");const i=Sr.get(r);if(i){if(ds(n,i.options)&&ds(s,i.config))return i;throw Ct.create("duplicate-app",{appName:r})}const o=new Dg(r);for(const c of mo.values())o.addComponent(c);const a=new wm(n,s,o);return Sr.set(r,a),a}function Wo(t=go){const e=Sr.get(t);if(!e&&t===go)return ju();if(!e)throw Ct.create("no-app",{appName:t});return e}function Ge(t,e,n){var s;let r=(s=ym[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}ot(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bm="firebase-heartbeat-database",Im=1,fs="firebase-heartbeat-store";let zi=null;function qu(){return zi||(zi=Bu(bm,Im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fs)}}}).catch(t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})})),zi}async function Em(t){try{return(await qu()).transaction(fs).objectStore(fs).get(zu(t))}catch(e){if(e instanceof Ze)Xt.warn(e.message);else{const n=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function yc(t,e){try{const s=(await qu()).transaction(fs,"readwrite");return await s.objectStore(fs).put(e,zu(t)),s.done}catch(n){if(n instanceof Ze)Xt.warn(n.message);else{const s=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function zu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tm=1024,km=30*24*60*60*1e3;class Sm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=km}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vc(),{heartbeatsToSend:n,unsentEntries:s}=Am(this._heartbeatsCache.heartbeats),r=kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vc(){return new Date().toISOString().substring(0,10)}function Am(t,e=Tm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_c(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_c(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Cm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xu()?Uu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Em(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _c(t){return kr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Dm(t){ot(new Xe("platform-logger",e=>new zg(e),"PRIVATE")),ot(new Xe("heartbeat",e=>new Sm(e),"PRIVATE")),Ge(po,mc,t),Ge(po,mc,"esm2017"),Ge("fire-js","")}Dm("");function Qo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ku(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nm=Ku,Hu=new on("auth","Firebase",Ku());/**
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
 */const wc=new Zr("@firebase/auth");function pr(t,...e){wc.logLevel<=te.ERROR&&wc.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function Qe(t,...e){throw Yo(t,...e)}function tt(t,...e){return Yo(t,...e)}function Gu(t,e,n){const s=Object.assign(Object.assign({},Nm()),{[e]:n});return new on("auth","Firebase",s).create(e,{appName:t.name})}function Rm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qe(t,"argument-error"),Gu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hu.create(t,...e)}function V(t,e,...n){if(!t)throw Yo(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function mt(t,e){t||dt(e)}/**
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
 */const bc=new Map;function ft(t){mt(t instanceof Function,"Expected a class definition");let e=bc.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bc.set(t,e),e)}/**
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
 */function $m(t,e){const n=an(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return r;Qe(r,"already-initialized")}return n.initialize({options:e})}function Om(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pm(){return Ic()==="http:"||Ic()==="https:"}function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Mm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pm()||Lu()||"connection"in navigator)?navigator.onLine:!0}function Lm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=hg()||dg()}get(){return Mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xo(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Um=new Ps(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,s,r={}){return Qu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wu.fetch()(Yu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},xm),e);try{const r=new Fm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gu(t,u,l);Qe(t,u)}}catch(r){if(r instanceof Ze)throw r;Qe(t,"internal-error",{message:String(r)})}}async function xs(t,e,n,s,r={}){const i=await Ls(t,e,n,s,r);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Xo(t.config,r):`${t.config.apiScheme}://${r}`}class Fm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Vm(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function Bm(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jm(t,e=!1){const n=_e(t),s=await n.getIdToken(e),r=Jo(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:rs(Ki(r.auth_time)),issuedAtTime:rs(Ki(r.iat)),expirationTime:rs(Ki(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ki(t){return Number(t)*1e3}function Jo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ou(n);return r?JSON.parse(r):(pr("Failed to decode base64 JWT payload"),null)}catch(r){return pr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function qm(t){const e=Jo(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ze&&zm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function zm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Km{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ar(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ps(t,Bm(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wm(i.providerUserInfo):[],a=Gm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hm(t){const e=_e(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gm(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Wm(t){return t.map(e=>{var{providerId:n}=e,s=Qo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Qm(t,e){const n=await Qu(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Yu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Qm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new gs;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function It(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Km(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jm(this,e)}reload(){return Hm(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ps(this,Vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:z,isAnonymous:N,providerData:D,stsTokenManager:Q}=n;V(C&&Q,e,"internal-error");const me=gs.fromJSON(this.name,Q);V(typeof C=="string",e,"internal-error"),It(h,e.name),It(d,e.name),V(typeof z=="boolean",e,"internal-error"),V(typeof N=="boolean",e,"internal-error"),It(p,e.name),It(y,e.name),It(g,e.name),It(v,e.name),It(E,e.name),It(L,e.name);const Fe=new Kt({uid:C,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:p,tenantId:g,stsTokenManager:me,createdAt:E,lastLoginAt:L});return D&&Array.isArray(D)&&(Fe.providerData=D.map(G=>Object.assign({},G))),v&&(Fe._redirectEventId=v),Fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new gs;r.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ar(i),i}}/**
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
 */class Ju{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ju.type="NONE";const Ec=Ju;/**
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
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gr(this.userKey,r.apiKey,i),this.fullPersistenceKey=gr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new En(ft(Ec),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(Ec);const o=gr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,e,s))}}/**
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
 */function Tc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sh(e))return"Blackberry";if(rh(e))return"Webos";if(Zo(e))return"Safari";if((e.includes("chrome/")||eh(e))&&!e.includes("edge/"))return"Chrome";if(nh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zu(t=Me()){return/firefox\//i.test(t)}function Zo(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eh(t=Me()){return/crios\//i.test(t)}function th(t=Me()){return/iemobile/i.test(t)}function nh(t=Me()){return/android/i.test(t)}function sh(t=Me()){return/blackberry/i.test(t)}function rh(t=Me()){return/webos/i.test(t)}function ei(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ym(t=Me()){var e;return ei(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xm(){return fg()&&document.documentMode===10}function ih(t=Me()){return ei(t)||nh(t)||rh(t)||sh(t)||/windows phone/i.test(t)||th(t)}function Jm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oh(t,e=[]){let n;switch(t){case"Browser":n=Tc(Me());break;case"Worker":n=`${Tc(Me())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${s}`}/**
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
 */class Zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class ey{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new Zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_e(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Un(t){return _e(t)}class kc{constructor(e){this.auth=e,this.observer=null,this.addObserver=_g(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ty(t,e,n){const s=Un(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ah(e),{host:o,port:a}=ny(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||sy()}function ah(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ny(t){const e=ah(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Sc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Sc(o)}}}function Sc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function ry(t,e){return Ls(t,"POST","/v1/accounts:update",e)}/**
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
 */async function iy(t,e){return xs(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
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
 */async function oy(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function ay(t,e){return xs(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
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
 */class ms extends ea{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ms(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oy(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ry(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ay(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Tn(t,e){return xs(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
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
 */const cy="http://localhost";class Jt extends ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Qo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Jt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Tn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tn(e,n)}buildRequest(){const e={requestUri:cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
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
 */function ly(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uy(t){const e=Yn(Xn(t)).link,n=e?Yn(Xn(e)).deep_link_id:null,s=Yn(Xn(t)).deep_link_id;return(s?Yn(Xn(s)).link:null)||s||n||e||t}class ta{constructor(e){var n,s,r,i,o,a;const c=Yn(Xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=ly((r=c.mode)!==null&&r!==void 0?r:null);V(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uy(e);try{return new ta(n)}catch{return null}}}/**
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
 */class Fn{constructor(){this.providerId=Fn.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ta.parseLink(n);return V(s,"argument-error"),ms._fromEmailAndCode(e,s.code,s.tenantId)}}Fn.PROVIDER_ID="password";Fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class na{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends na{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Us{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class ut extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ut.credential(n,s)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class Tt extends Us{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class kt extends Us{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function hy(t,e){return xs(t,"POST","/v1/accounts:signUp",Ms(t,e))}/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Kt._fromIdTokenResponse(e,s,r),o=Ac(s);return new Zt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ac(s);return new Zt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ac(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cr extends Ze{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Cr(e,n,s,r)}}function ch(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,i,e,s):i})}async function dy(t,e,n=!1){const s=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",s)}/**
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
 */async function fy(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ps(t,ch(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Jo(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Zt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),i}}/**
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
 */async function lh(t,e,n=!1){const s="signIn",r=await ch(t,s,e),i=await Zt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function py(t,e){return lh(Un(t),e)}async function gy(t,e,n){const s=Un(t),r=await hy(s,{returnSecureToken:!0,email:e,password:n}),i=await Zt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function my(t,e,n){return py(_e(t),Fn.credential(e,n))}/**
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
 */function yy(t,e){return _e(t).setPersistence(e)}function vy(t,e,n,s){return _e(t).onIdTokenChanged(e,n,s)}function _y(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function uh(t,e,n,s){return _e(t).onAuthStateChanged(e,n,s)}function wy(t){return _e(t).signOut()}const Dr="__sak";/**
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
 */class hh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function by(){const t=Me();return Zo(t)||ei(t)}const Iy=1e3,Ey=10;class dh extends hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=by()&&Jm(),this.fallbackToPolling=ih(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Xm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ey):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Iy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dh.type="LOCAL";const fh=dh;/**
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
 */class ph extends hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ph.type="SESSION";const gh=ph;/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ti(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ty(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function sa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=sa("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Sy(t){nt().location.href=t}/**
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
 */function mh(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Ay(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dy(){return mh()?self:null}/**
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
 */const yh="firebaseLocalStorageDb",Ny=1,Nr="firebaseLocalStorage",vh="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ni(t,e){return t.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function Ry(){const t=indexedDB.deleteDatabase(yh);return new Fs(t).toPromise()}function vo(){const t=indexedDB.open(yh,Ny);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Nr,{keyPath:vh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Nr)?e(s):(s.close(),await Ry(),e(await vo()))})})}async function Cc(t,e,n){const s=ni(t,!0).put({[vh]:e,value:n});return new Fs(s).toPromise()}async function $y(t,e){const n=ni(t,!1).get(e),s=await new Fs(n).toPromise();return s===void 0?null:s.value}function Dc(t,e){const n=ni(t,!0).delete(e);return new Fs(n).toPromise()}const Oy=800,Py=3;class _h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Py)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(Dy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ay(),!this.activeServiceWorker)return;this.sender=new ky(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vo();return await Cc(e,Dr,"1"),await Dc(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$y(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ni(r,!1).getAll();return new Fs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_h.type="LOCAL";const My=_h;/**
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
 */function Ly(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xy(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ly().appendChild(s)})}function Uy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ps(3e4,6e4);/**
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
 */function wh(t,e){return e?ft(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ra extends ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fy(t){return lh(t.auth,new ra(t),t.bypassAuthState)}function Vy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),fy(n,new ra(t),t.bypassAuthState)}async function By(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),dy(n,new ra(t),t.bypassAuthState)}/**
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
 */class bh{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fy;case"linkViaPopup":case"linkViaRedirect":return By;case"reauthViaPopup":case"reauthViaRedirect":return Vy;default:Qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jy=new Ps(2e3,1e4);async function qy(t,e,n){const s=Un(t);Rm(t,e,na);const r=wh(s,n);return new Vt(s,"signInViaPopup",e,r).executeNotNull()}class Vt extends bh{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jy.get())};e()}}Vt.currentPopupAction=null;/**
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
 */const zy="pendingRedirect",mr=new Map;class Ky extends bh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const s=await Hy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hy(t,e){const n=Qy(e),s=Wy(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Gy(t,e){mr.set(t._key(),e)}function Wy(t){return ft(t._redirectPersistence)}function Qy(t){return gr(zy,t.config.apiKey,t.name)}async function Yy(t,e,n=!1){const s=Un(t),r=wh(s,e),o=await new Ky(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Xy=10*60*1e3;class Jy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ih(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nc(e))}saveEventToCache(e){this.cachedEventUids.add(Nc(e)),this.lastProcessedEventTime=Date.now()}}function Nc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ih(t);default:return!1}}/**
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
 */async function ev(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nv=/^https?/;async function sv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ev(t);for(const n of e)try{if(rv(n))return}catch{}Qe(t,"unauthorized-domain")}function rv(t){const e=yo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nv.test(n))return!1;if(tv.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const iv=new Ps(3e4,6e4);function Rc(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ov(t){return new Promise((e,n)=>{var s,r,i;function o(){Rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rc(),n(tt(t,"network-request-failed"))},timeout:iv.get()})}if(!((r=(s=nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=Uy("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},xy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yr=null,e})}let yr=null;function av(t){return yr=yr||ov(t),yr}/**
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
 */const cv=new Ps(5e3,15e3),lv="__/auth/iframe",uv="emulator/auth/iframe",hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fv(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xo(e,uv):`https://${t.config.authDomain}/${lv}`,s={apiKey:e.apiKey,appName:t.name,v:Os},r=dv.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$s(s).slice(1)}`}async function pv(t){const e=await av(t),n=nt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:fv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},cv.get());function c(){nt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const gv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mv=500,yv=600,vv="_blank",_v="http://localhost";class $c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wv(t,e,n,s=mv,r=yv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Me().toLowerCase();n&&(a=eh(l)?vv:n),Zu(l)&&(e=e||_v,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Ym(l)&&a!=="_self")return bv(e||"",a),new $c(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new $c(h)}function bv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Iv="__/auth/handler",Ev="emulator/auth/handler";function Oc(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Os,eventId:r};if(e instanceof na){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Us){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Tv(t)}?${$s(a).slice(1)}`}function Tv({config:t}){return t.emulator?Xo(t,Ev):`https://${t.authDomain}/${Iv}`}/**
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
 */const Hi="webStorageSupport";class kv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=Yy,this._overrideRedirectResult=Gy}async _openPopup(e,n,s,r){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Oc(e,n,s,yo(),r);return wv(e,o,sa())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Sy(Oc(e,n,s,yo(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(mt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pv(e),s=new Jy(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hi,{type:Hi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Hi];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ih()||Zo()||ei()}}const Sv=kv;var Pc="@firebase/auth",Mc="0.21.5";/**
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
 */class Av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dv(t){ot(new Xe("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oh(t)},u=new ey(a,c,l);return Om(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ot(new Xe("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(s=>new Av(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Pc,Mc,Cv(t)),Ge(Pc,Mc,"esm2017")}/**
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
 */const Nv=5*60,Rv=Mu("authIdTokenMaxAge")||Nv;let Lc=null;const $v=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Rv)return;const r=n==null?void 0:n.token;Lc!==r&&(Lc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ov(t=Wo()){const e=an(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$m(t,{popupRedirectResolver:Sv,persistence:[My,fh,gh]}),s=Mu("authTokenSyncURL");if(s){const i=$v(s);_y(n,i,()=>i(n.currentUser)),vy(n,o=>i(o))}const r=Pu("auth");return r&&ty(n,`http://${r}`),n}Dv("Browser");const Eh="@firebase/installations",ia="0.6.4";/**
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
 */const Th=1e4,kh=`w:${ia}`,Sh="FIS_v2",Pv="https://firebaseinstallations.googleapis.com/v1",Mv=60*60*1e3,Lv="installations",xv="Installations";/**
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
 */const Uv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},en=new on(Lv,xv,Uv);function Ah(t){return t instanceof Ze&&t.code.includes("request-failed")}/**
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
 */function Ch({projectId:t}){return`${Pv}/projects/${t}/installations`}function Dh(t){return{token:t.token,requestStatus:2,expiresIn:Vv(t.expiresIn),creationTime:Date.now()}}async function Nh(t,e){const s=(await e.json()).error;return en.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Rh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Fv(t,{refreshToken:e}){const n=Rh(t);return n.append("Authorization",Bv(e)),n}async function $h(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vv(t){return Number(t.replace("s","000"))}function Bv(t){return`${Sh} ${t}`}/**
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
 */async function jv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ch(t),r=Rh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Sh,appId:t.appId,sdkVersion:kh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $h(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Dh(l.authToken)}}else throw await Nh("Create Installation",c)}/**
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
 */function Oh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zv=/^[cdef][\w-]{21}$/,_o="";function Kv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Hv(t);return zv.test(n)?n:_o}catch{return _o}}function Hv(t){return qv(t).substr(0,22)}/**
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
 */const Ph=new Map;function Mh(t,e){const n=si(t);Lh(n,e),Gv(n,e)}function Lh(t,e){const n=Ph.get(t);if(n)for(const s of n)s(e)}function Gv(t,e){const n=Wv();n&&n.postMessage({key:t,fid:e}),Qv()}let Bt=null;function Wv(){return!Bt&&"BroadcastChannel"in self&&(Bt=new BroadcastChannel("[Firebase] FID Change"),Bt.onmessage=t=>{Lh(t.data.key,t.data.fid)}),Bt}function Qv(){Ph.size===0&&Bt&&(Bt.close(),Bt=null)}/**
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
 */const Yv="firebase-installations-database",Xv=1,tn="firebase-installations-store";let Gi=null;function oa(){return Gi||(Gi=Bu(Yv,Xv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}})),Gi}async function Rr(t,e){const n=si(t),r=(await oa()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Mh(t,e.fid),e}async function xh(t){const e=si(t),s=(await oa()).transaction(tn,"readwrite");await s.objectStore(tn).delete(e),await s.done}async function ri(t,e){const n=si(t),r=(await oa()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Mh(t,a.fid),a}/**
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
 */async function aa(t){let e;const n=await ri(t.appConfig,s=>{const r=Jv(s),i=Zv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===_o?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jv(t){const e=t||{fid:Kv(),registrationStatus:0};return Uh(e)}function Zv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(en.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=e_(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:t_(t)}:{installationEntry:e}}async function e_(t,e){try{const n=await jv(t,e);return Rr(t.appConfig,n)}catch(n){throw Ah(n)&&n.customData.serverCode===409?await xh(t.appConfig):await Rr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function t_(t){let e=await xc(t.appConfig);for(;e.registrationStatus===1;)await Oh(100),e=await xc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await aa(t);return s||n}return e}function xc(t){return ri(t,e=>{if(!e)throw en.create("installation-not-found");return Uh(e)})}function Uh(t){return n_(t)?{fid:t.fid,registrationStatus:0}:t}function n_(t){return t.registrationStatus===1&&t.registrationTime+Th<Date.now()}/**
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
 */async function s_({appConfig:t,heartbeatServiceProvider:e},n){const s=r_(t,n),r=Fv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:kh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $h(()=>fetch(s,a));if(c.ok){const l=await c.json();return Dh(l)}else throw await Nh("Generate Auth Token",c)}function r_(t,{fid:e}){return`${Ch(t)}/${e}/authTokens:generate`}/**
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
 */async function ca(t,e=!1){let n;const s=await ri(t.appConfig,i=>{if(!Fh(i))throw en.create("not-registered");const o=i.authToken;if(!e&&a_(o))return i;if(o.requestStatus===1)return n=i_(t,e),i;{if(!navigator.onLine)throw en.create("app-offline");const a=l_(i);return n=o_(t,a),a}});return n?await n:s.authToken}async function i_(t,e){let n=await Uc(t.appConfig);for(;n.authToken.requestStatus===1;)await Oh(100),n=await Uc(t.appConfig);const s=n.authToken;return s.requestStatus===0?ca(t,e):s}function Uc(t){return ri(t,e=>{if(!Fh(e))throw en.create("not-registered");const n=e.authToken;return u_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function o_(t,e){try{const n=await s_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Rr(t.appConfig,s),n}catch(n){if(Ah(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rr(t.appConfig,s)}throw n}}function Fh(t){return t!==void 0&&t.registrationStatus===2}function a_(t){return t.requestStatus===2&&!c_(t)}function c_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mv}function l_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function u_(t){return t.requestStatus===1&&t.requestTime+Th<Date.now()}/**
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
 */async function h_(t){const e=t,{installationEntry:n,registrationPromise:s}=await aa(e);return s?s.catch(console.error):ca(e).catch(console.error),n.fid}/**
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
 */async function d_(t,e=!1){const n=t;return await f_(n),(await ca(n,e)).token}async function f_(t){const{registrationPromise:e}=await aa(t);e&&await e}/**
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
 */function p_(t){if(!t||!t.options)throw Wi("App Configuration");if(!t.name)throw Wi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wi(t){return en.create("missing-app-config-values",{valueName:t})}/**
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
 */const Vh="installations",g_="installations-internal",m_=t=>{const e=t.getProvider("app").getImmediate(),n=p_(e),s=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},y_=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,Vh).getImmediate();return{getId:()=>h_(n),getToken:r=>d_(n,r)}};function v_(){ot(new Xe(Vh,m_,"PUBLIC")),ot(new Xe(g_,y_,"PRIVATE"))}v_();Ge(Eh,ia);Ge(Eh,ia,"esm2017");/**
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
 */const $r="analytics",__="firebase_id",w_="origin",b_=60*1e3,I_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bh="https://www.googletagmanager.com/gtag/js";/**
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
 */const je=new Zr("@firebase/analytics");/**
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
 */function jh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function E_(t,e){const n=document.createElement("script");n.src=`${Bh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function T_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function k_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await jh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){je.error(a)}t("config",r,i)}async function S_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await jh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){je.error(i)}}function A_(t,e,n,s){async function r(i,o,a){try{i==="event"?await S_(t,e,n,o,a):i==="config"?await k_(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){je.error(c)}}return r}function C_(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=A_(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function D_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bh)&&n.src.includes(t))return n;return null}/**
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
 */const N_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},We=new on("analytics","Analytics",N_);/**
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
 */const R_=30,$_=1e3;class O_{constructor(e={},n=$_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qh=new O_;function P_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function M_(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:P_(s)},i=I_.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function L_(t,e=qh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw We.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw We.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new F_;return setTimeout(async()=>{a.abort()},n!==void 0?n:b_),zh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function zh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=qh){var i;const{appId:o,measurementId:a}=t;try{await x_(s,e)}catch(c){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await M_(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!U_(l)){if(r.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?dc(n,r.intervalMillis,R_):dc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),je.debug(`Calling attemptFetch again in ${u} millis`),zh(t,h,s,r)}}function x_(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function U_(t){if(!(t instanceof Ze)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class F_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function V_(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function B_(){if(xu())try{await Uu()}catch(t){return je.warn(We.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j_(t,e,n,s,r,i,o){var a;const c=L_(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>je.error(p)),e.push(c);const l=B_().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);D_(i)||E_(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[w_]="firebase",d.update=!0,h!=null&&(d[__]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class q_{constructor(e){this.app=e}_delete(){return delete is[this.app.options.appId],Promise.resolve()}}let is={},Fc=[];const Vc={};let Qi="dataLayer",z_="gtag",Bc,Kh,jc=!1;function K_(){const t=[];if(Lu()&&t.push("This is a browser extension environment."),pg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function H_(t,e,n){K_();const s=t.options.appId;if(!s)throw We.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(is[s]!=null)throw We.create("already-exists",{id:s});if(!jc){T_(Qi);const{wrappedGtag:i,gtagCore:o}=C_(is,Fc,Vc,Qi,z_);Kh=i,Bc=o,jc=!0}return is[s]=j_(t,Fc,Vc,e,Bc,Qi,n),new q_(t)}function G_(t=Wo()){t=_e(t);const e=an(t,$r);return e.isInitialized()?e.getImmediate():W_(t)}function W_(t,e={}){const n=an(t,$r);if(n.isInitialized()){const r=n.getImmediate();if(ds(e,n.getOptions()))return r;throw We.create("already-initialized")}return n.initialize({options:e})}function Q_(t,e,n,s){t=_e(t),V_(Kh,is[t.app.options.appId],e,n,s).catch(r=>je.error(r))}const qc="@firebase/analytics",zc="0.9.4";function Y_(){ot(new Xe($r,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return H_(s,r,n)},"PUBLIC")),ot(new Xe("analytics-internal",t,"PRIVATE")),Ge(qc,zc),Ge(qc,zc,"esm2017");function t(e){try{const n=e.getProvider($r).getImmediate();return{logEvent:(s,r,i)=>Q_(n,s,r,i)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}Y_();var X_="firebase",J_="9.18.0";/**
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
 */Ge(X_,J_,"app");var Z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,la=la||{},q=Z_||self;function Or(){}function ii(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ew(t){return Object.prototype.hasOwnProperty.call(t,Yi)&&t[Yi]||(t[Yi]=++tw)}var Yi="closure_uid_"+(1e9*Math.random()>>>0),tw=0;function nw(t,e,n){return t.call.apply(t.bind,arguments)}function sw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=nw:Oe=sw,Oe.apply(null,arguments)}function ir(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Pt(){this.s=this.s,this.o=this.o}var rw=0;Pt.prototype.s=!1;Pt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),rw!=0)&&ew(this)};Pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ua(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Kc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ii(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var iw=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Or,e),q.removeEventListener("test",Or,e)}catch{}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}var Hc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xi(t,e){return t<e?-1:t>e?1:0}function oi(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function et(t){return oi().indexOf(t)!=-1}function ha(t){return ha[" "](t),t}ha[" "]=Or;function ow(t){var e=lw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var aw=et("Opera"),Cn=et("Trident")||et("MSIE"),Gh=et("Edge"),wo=Gh||Cn,Wh=et("Gecko")&&!(oi().toLowerCase().indexOf("webkit")!=-1&&!et("Edge"))&&!(et("Trident")||et("MSIE"))&&!et("Edge"),cw=oi().toLowerCase().indexOf("webkit")!=-1&&!et("Edge");function Qh(){var t=q.document;return t?t.documentMode:void 0}var Mr;e:{var Ji="",Zi=function(){var t=oi();if(Wh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gh)return/Edge\/([\d\.]+)/.exec(t);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cw)return/WebKit\/(\S+)/.exec(t);if(aw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zi&&(Ji=Zi?Zi[1]:""),Cn){var eo=Qh();if(eo!=null&&eo>parseFloat(Ji)){Mr=String(eo);break e}}Mr=Ji}var lw={};function uw(){return ow(function(){let t=0;const e=Hc(String(Mr)).split("."),n=Hc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Xi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Xi(r[2].length==0,i[2].length==0)||Xi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var bo;if(q.document&&Cn){var Gc=Qh();bo=Gc||parseInt(Mr,10)||void 0}else bo=void 0;var hw=bo;function ys(t,e){if(Pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wh){e:{try{ha(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ys.X.h.call(this)}}Ae(ys,Pe);var dw={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),fw=0;function pw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++fw,this.ba=this.ea=!1}function ai(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function da(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Yh(t){const e={};for(const n in t)e[n]=t[n];return e}const Wc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Wc.length;i++)n=Wc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ci(t){this.src=t,this.g={},this.h=0}ci.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Eo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new pw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Hh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ai(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Eo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var fa="closure_lm_"+(1e6*Math.random()|0),to={};function Jh(t,e,n,s,r){if(s&&s.once)return ed(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jh(t,e[i],n,s,r);return null}return n=ma(n),t&&t[Bs]?t.N(e,n,Vs(s)?!!s.capture:!!s,r):Zh(t,e,n,!1,s,r)}function Zh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Vs(r)?!!r.capture:!!r,a=ga(t);if(a||(t[fa]=a=new ci(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=gw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)iw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(nd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gw(){function t(n){return e.call(t.src,t.listener,n)}const e=mw;return t}function ed(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ed(t,e[i],n,s,r);return null}return n=ma(n),t&&t[Bs]?t.O(e,n,Vs(s)?!!s.capture:!!s,r):Zh(t,e,n,!0,s,r)}function td(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)td(t,e[i],n,s,r);else s=Vs(s)?!!s.capture:!!s,n=ma(n),t&&t[Bs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Eo(i,n,s,r),-1<n&&(ai(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ga(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Eo(e,n,s,r)),(n=-1<t?e[t]:null)&&pa(n))}function pa(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Bs])Io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(nd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ga(e))?(Io(n,t),n.h==0&&(n.src=null,e[fa]=null)):ai(t)}}}function nd(t){return t in to?to[t]:to[t]="on"+t}function mw(t,e){if(t.ba)t=!0;else{e=new ys(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&pa(t),t=n.call(s,e)}return t}function ga(t){return t=t[fa],t instanceof ci?t:null}var no="__closure_events_fn_"+(1e9*Math.random()>>>0);function ma(t){return typeof t=="function"?t:(t[no]||(t[no]=function(e){return t.handleEvent(e)}),t[no])}function Ie(){Pt.call(this),this.i=new ci(this),this.P=this,this.I=null}Ae(Ie,Pt);Ie.prototype[Bs]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){td(this,t,e,n,s)};function ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Pe(e,t);else if(e instanceof Pe)e.target=e.target||t;else{var r=e;e=new Pe(s,t),Xh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=or(o,s,!0,e)&&r}if(o=e.g=t,r=or(o,s,!0,e)&&r,r=or(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=or(o,s,!1,e)&&r}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ai(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Io(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ya=q.JSON.stringify;function yw(){var t=id;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vw{constructor(){this.h=this.g=null}add(e,n){const s=sd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new _w,t=>t.reset());class _w{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ww(t){q.setTimeout(()=>{throw t},0)}function rd(t,e){To||bw(),ko||(To(),ko=!0),id.add(t,e)}var To;function bw(){var t=q.Promise.resolve(void 0);To=function(){t.then(Iw)}}var ko=!1,id=new vw;function Iw(){for(var t;t=yw();){try{t.h.call(t.g)}catch(n){ww(n)}var e=sd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ko=!1}function li(t,e){Ie.call(this),this.h=t||1,this.g=e||q,this.j=Oe(this.lb,this),this.l=Date.now()}Ae(li,Ie);O=li.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(va(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function va(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}O.M=function(){li.X.M.call(this),va(this),delete this.g};function _a(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function od(t){t.g=_a(()=>{t.g=null,t.i&&(t.i=!1,od(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ew extends Pt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:od(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Pt.call(this),this.h=t,this.g={}}Ae(vs,Pt);var Qc=[];function ad(t,e,n,s){Array.isArray(n)||(n&&(Qc[0]=n.toString()),n=Qc);for(var r=0;r<n.length;r++){var i=Jh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cd(t){da(t.g,function(e,n){this.g.hasOwnProperty(n)&&pa(e)},t),t.g={}}vs.prototype.M=function(){vs.X.M.call(this),cd(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ui(){this.g=!0}ui.prototype.Aa=function(){this.g=!1};function Tw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function wn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Aw(t,n)+(s?" "+s:"")})}function Sw(t,e){t.info(function(){return"TIMEOUT: "+e})}ui.prototype.info=function(){};function Aw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ya(n)}catch{return e}}var cn={},Yc=null;function hi(){return Yc=Yc||new Ie}cn.Pa="serverreachability";function ld(t){Pe.call(this,cn.Pa,t)}Ae(ld,Pe);function _s(t){const e=hi();ke(e,new ld(e))}cn.STAT_EVENT="statevent";function ud(t,e){Pe.call(this,cn.STAT_EVENT,t),this.stat=e}Ae(ud,Pe);function Ue(t){const e=hi();ke(e,new ud(e,t))}cn.Qa="timingevent";function hd(t,e){Pe.call(this,cn.Qa,t),this.size=e}Ae(hd,Pe);function js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var di={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wa(){}wa.prototype.h=null;function Xc(t){return t.h||(t.h=t.i())}function fd(){}var qs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ba(){Pe.call(this,"d")}Ae(ba,Pe);function Ia(){Pe.call(this,"c")}Ae(Ia,Pe);var So;function fi(){}Ae(fi,wa);fi.prototype.g=function(){return new XMLHttpRequest};fi.prototype.i=function(){return{}};So=new fi;function zs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new vs(this),this.O=Cw,t=wo?125:void 0,this.T=new li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pd}function pd(){this.i=null,this.g="",this.h=!1}var Cw=45e3,Ao={},Lr={};O=zs.prototype;O.setTimeout=function(t){this.O=t};function Co(t,e,n){t.K=1,t.v=gi(yt(e)),t.s=n,t.P=!0,gd(t,null)}function gd(t,e){t.F=Date.now(),Ks(t),t.A=yt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ed(n.i,"t",s),t.C=0,n=t.l.H,t.h=new pd,t.g=zd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ew(Oe(t.La,t,t.g),t.N)),ad(t.S,t.g,"readystatechange",t.ib),e=t.H?Yh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_s(),Tw(t.j,t.u,t.A,t.m,t.U,t.s)}O.ib=function(t){t=t.target;const e=this.L;e&&pt(t)==3?e.l():this.La(t)};O.La=function(t){try{if(t==this.g)e:{const u=pt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||wo||this.g&&(this.h.h||this.g.fa()||tl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_s(3):_s(2)),pi(this);var n=this.g.aa();this.Y=n;t:if(md(this)){var s=tl(this.g);t="";var r=s.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),os(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var l=a;break t}}l=null}if(n=l)wn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Do(this,n);else{this.i=!1,this.o=3,Ue(12),jt(this),os(this);break e}}this.P?(yd(this,u,o),wo&&this.i&&u==3&&(ad(this.S,this.T,"tick",this.hb),this.T.start())):(wn(this.j,this.m,o,null),Do(this,o)),u==4&&jt(this),this.i&&!this.I&&(u==4?Vd(this.l,this):(this.i=!1,Ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),jt(this),os(this)}}}catch{}finally{}};function md(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function yd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Dw(t,n),r==Lr){e==4&&(t.o=4,Ue(14),s=!1),wn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ao){t.o=4,Ue(15),wn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else wn(t.j,t.m,r,null),Do(t,r);md(t)&&r!=Lr&&r!=Ao&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ue(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Da(e),e.K=!0,Ue(11))):(wn(t.j,t.m,n,"[Invalid Chunked Response]"),jt(t),os(t))}O.hb=function(){if(this.g){var t=pt(this.g),e=this.g.fa();this.C<e.length&&(pi(this),yd(this,t,e),this.i&&t!=4&&Ks(this))}};function Dw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Lr:(n=Number(e.substring(n,s)),isNaN(n)?Ao:(s+=1,s+n>e.length?Lr:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,jt(this)};function Ks(t){t.V=Date.now()+t.O,vd(t,t.O)}function vd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=js(Oe(t.gb,t),e)}function pi(t){t.B&&(q.clearTimeout(t.B),t.B=null)}O.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Sw(this.j,this.A),this.K!=2&&(_s(),Ue(17)),jt(this),this.o=2,os(this)):vd(this,this.V-t)};function os(t){t.l.G==0||t.I||Vd(t.l,t)}function jt(t){pi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,va(t.T),cd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Do(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||No(n.h,t))){if(!t.J&&No(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fr(n),vi(n);else break e;Ca(n),Ue(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=js(Oe(n.cb,n),6e3));if(1>=Sd(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qt(n,11)}else if((t.J||n.g==t)&&Fr(n),!Pr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ea(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,ce(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=qd(s,s.H?s.ka:null,s.V),o.J){Ad(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(pi(a),Ks(a)),s.g=o}else Ud(s);0<n.i.length&&_i(n)}else l[0]!="stop"&&l[0]!="close"||qt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qt(n,7):Aa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}_s(4)}catch{}}function Nw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ii(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Rw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ii(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function _d(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ii(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Rw(t),s=Nw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $w(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ht){this.h=e!==void 0?e:t.h,xr(this,t.j),this.s=t.s,this.g=t.g,Ur(this,t.m),this.l=t.l,e=t.i;var n=new ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jc(this,n),this.o=t.o}else t&&(n=String(t).match(wd))?(this.h=!!e,xr(this,n[1]||"",!0),this.s=Jn(n[2]||""),this.g=Jn(n[3]||"",!0),Ur(this,n[4]),this.l=Jn(n[5]||"",!0),Jc(this,n[6]||"",!0),this.o=Jn(n[7]||"")):(this.h=!!e,this.i=new ws(null,this.h))}Ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zn(e,Zc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zn(e,Zc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zn(n,n.charAt(0)=="/"?Mw:Pw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zn(n,xw)),t.join("")};function yt(t){return new Ht(t)}function xr(t,e,n){t.j=n?Jn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ur(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jc(t,e,n){e instanceof ws?(t.i=e,Uw(t.i,t.h)):(n||(e=Zn(e,Lw)),t.i=new ws(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function gi(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ow),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ow(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zc=/[#\/\?@]/g,Pw=/[#\?:]/g,Mw=/[#\?]/g,Lw=/[#\?@]/g,xw=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mt(t){t.g||(t.g=new Map,t.h=0,t.i&&$w(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ws.prototype;O.add=function(t,e){Mt(this),this.i=null,t=Vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bd(t,e){Mt(t),e=Vn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Id(t,e){return Mt(t),e=Vn(t,e),t.g.has(e)}O.forEach=function(t,e){Mt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};O.oa=function(){Mt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};O.W=function(t){Mt(this);let e=[];if(typeof t=="string")Id(this,t)&&(e=e.concat(this.g.get(Vn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Mt(this),this.i=null,t=Vn(this,t),Id(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ed(t,e,n){bd(t,e),0<n.length&&(t.i=null,t.g.set(Vn(t,e),ua(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Uw(t,e){e&&!t.j&&(Mt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(bd(this,s),Ed(this,r,n))},t)),t.j=e}var Fw=class{constructor(e,n){this.h=e,this.g=n}};function Td(t){this.l=t||Vw,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vw=10;function kd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Sd(t){return t.h?1:t.g?t.g.size:0}function No(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ea(t,e){t.g?t.g.add(e):t.h=e}function Ad(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Td.prototype.cancel=function(){if(this.i=Cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ua(t.i)}function Ta(){}Ta.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Ta.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function Bw(){this.g=new Ta}function jw(t,e,n){const s=n||"";try{_d(t,function(r,i){let o=r;Vs(r)&&(o=ya(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function qw(t,e){const n=new ui;if(q.Image){const s=new Image;s.onload=ir(ar,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ir(ar,n,s,"TestLoadImage: error",!1,e),s.onabort=ir(ar,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ir(ar,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ar(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hs(t){this.l=t.ac||null,this.j=t.jb||!1}Ae(Hs,wa);Hs.prototype.g=function(){return new mi(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function mi(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ka,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(mi,Ie);var ka=0;O=mi.prototype;O.open=function(t,e){if(this.readyState!=ka)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=ka};O.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dd(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Dd(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}O.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gs(this):bs(this),this.readyState==3&&Dd(this)}};O.Va=function(t){this.g&&(this.response=this.responseText=t,Gs(this))};O.Ua=function(t){this.g&&(this.response=t,Gs(this))};O.ga=function(){this.g&&Gs(this)};function Gs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var zw=q.JSON.parse;function de(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nd,this.K=this.L=!1}Ae(de,Ie);var Nd="",Kw=/^https?$/i,Hw=["POST","PUT"];O=de.prototype;O.Ka=function(t){this.L=t};O.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():So.g(),this.C=this.u?Xc(this.u):Xc(So),this.g.onreadystatechange=Oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){el(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=Hh(Hw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Od(this),0<this.B&&((this.K=Gw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.qa,this)):this.A=_a(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){el(this,i)}};function Gw(t){return Cn&&uw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.qa=function(){typeof la<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function el(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rd(t),yi(t)}function Rd(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),yi(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yi(this,!0)),de.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?$d(this):this.fb())};O.fb=function(){$d(this)};function $d(t){if(t.h&&typeof la<"u"&&(!t.C[1]||pt(t)!=4||t.aa()!=2)){if(t.v&&pt(t)==4)_a(t.Ha,0,t);else if(ke(t,"readystatechange"),pt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(wd)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!Kw.test(r?r.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rd(t)}}finally{yi(t)}}}}function yi(t,e){if(t.g){Od(t);const n=t.g,s=t.C[0]?Or:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function Od(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function pt(t){return t.g?t.g.readyState:0}O.aa=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),zw(e)}};function tl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pd(t){let e="";return da(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Sa(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Md(t){this.Ca=0,this.i=[],this.j=new ui,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wn("baseRetryDelayMs",5e3,t),this.bb=Wn("retryDelaySeedMs",1e4,t),this.$a=Wn("forwardChannelMaxRetries",2,t),this.ta=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Td(t&&t.concurrentRequestLimit),this.Fa=new Bw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=Md.prototype;O.ma=8;O.G=1;function Aa(t){if(Ld(t),t.G==3){var e=t.U++,n=yt(t.F);ce(n,"SID",t.I),ce(n,"RID",e),ce(n,"TYPE","terminate"),Ws(t,n),e=new zs(t,t.j,e,void 0),e.K=2,e.v=gi(yt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=zd(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ks(e)}jd(t)}function vi(t){t.g&&(Da(t),t.g.cancel(),t.g=null)}function Ld(t){vi(t),t.u&&(q.clearTimeout(t.u),t.u=null),Fr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function _i(t){kd(t.h)||t.m||(t.m=!0,rd(t.Ja,t),t.C=0)}function Ww(t,e){return Sd(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=js(Oe(t.Ja,t,e),Bd(t,t.C)),t.C++,!0)}O.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new zs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Yh(i),Xh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xd(this,r,e),n=yt(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Ws(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Pd(i)))+"&"+e:this.o&&Sa(n,this.o,i)),Ea(this.h,r),this.Ya&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",e),ce(n,"SID","null"),r.Z=!0,Co(r,n,null)):Co(r,n,e),this.G=2}}else this.G==3&&(t?nl(this,t):this.i.length==0||kd(this.h)||nl(this))};function nl(t,e){var n;e?n=e.m:n=t.U++;const s=yt(t.F);ce(s,"SID",t.I),ce(s,"RID",n),ce(s,"AID",t.T),Ws(t,s),t.o&&t.s&&Sa(s,t.o,t.s),n=new zs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xd(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ea(t.h,n),Co(n,s,e)}function Ws(t,e){t.ia&&da(t.ia,function(n,s){ce(e,s,n)}),t.l&&_d({},function(n,s){ce(e,s,n)})}function xd(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Oe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{jw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ud(t){t.g||t.u||(t.Z=1,rd(t.Ia,t),t.A=0)}function Ca(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=js(Oe(t.Ia,t),Bd(t,t.A)),t.A++,!0)}O.Ia=function(){if(this.u=null,Fd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=js(Oe(this.eb,this),t)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ue(10),vi(this),Fd(this))};function Da(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function Fd(t){t.g=new zs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yt(t.sa);ce(e,"RID","rpc"),ce(e,"SID",t.I),ce(e,"CI",t.L?"0":"1"),ce(e,"AID",t.T),ce(e,"TYPE","xmlhttp"),Ws(t,e),t.o&&t.s&&Sa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=gi(yt(e)),n.s=null,n.P=!0,gd(n,t)}O.cb=function(){this.v!=null&&(this.v=null,vi(this),Ca(this),Ue(19))};function Fr(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Vd(t,e){var n=null;if(t.g==e){Fr(t),Da(t),t.g=null;var s=2}else if(No(t.h,e))n=e.D,Ad(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=hi(),ke(s,new hd(s,n)),_i(t)}else Ud(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Ww(t,e)||s==2&&Ca(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qt(t,5);break;case 4:qt(t,10);break;case 3:qt(t,6);break;default:qt(t,2)}}}function Bd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Oe(t.kb,t);n||(n=new Ht("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||xr(n,"https"),gi(n)),qw(n.toString(),s)}else Ue(2);t.G=0,t.l&&t.l.va(e),jd(t),Ld(t)}O.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function jd(t){if(t.G=0,t.la=[],t.l){const e=Cd(t.h);(e.length!=0||t.i.length!=0)&&(Kc(t.la,e),Kc(t.la,t.i),t.h.i.length=0,ua(t.i),t.i.length=0),t.l.ua()}}function qd(t,e,n){var s=n instanceof Ht?yt(n):new Ht(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ur(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ht(null,void 0);s&&xr(i,s),e&&(i.g=e),r&&Ur(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ce(s,n,e),ce(s,"VER",t.ma),Ws(t,s),s}function zd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new Hs({jb:!0})):new de(t.ra),e.Ka(t.H),e}function Kd(){}O=Kd.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function Vr(){if(Cn&&!(10<=Number(hw)))throw Error("Environmental error: no available transport.")}Vr.prototype.g=function(t,e){return new qe(t,e)};function qe(t,e){Ie.call(this),this.g=new Md(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}Ae(qe,Ie);qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ue(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=qd(t,null,t.V),_i(t)};qe.prototype.close=function(){Aa(this.g)};qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ya(t),t=n);e.i.push(new Fw(e.ab++,t)),e.G==3&&_i(e)};qe.prototype.M=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,qe.X.M.call(this)};function Hd(t){ba.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(Hd,ba);function Gd(){Ia.call(this),this.status=1}Ae(Gd,Ia);function Bn(t){this.g=t}Ae(Bn,Kd);Bn.prototype.xa=function(){ke(this.g,"a")};Bn.prototype.wa=function(t){ke(this.g,new Hd(t))};Bn.prototype.va=function(t){ke(this.g,new Gd)};Bn.prototype.ua=function(){ke(this.g,"b")};Vr.prototype.createWebChannel=Vr.prototype.g;qe.prototype.send=qe.prototype.u;qe.prototype.open=qe.prototype.m;qe.prototype.close=qe.prototype.close;di.NO_ERROR=0;di.TIMEOUT=8;di.HTTP_ERROR=6;dd.COMPLETE="complete";fd.EventType=qs;qs.OPEN="a";qs.CLOSE="b";qs.ERROR="c";qs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Oa;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Sa;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;de.prototype.setWithCredentials=de.prototype.Ka;var Qw=function(){return new Vr},Yw=function(){return hi()},so=di,Xw=dd,Jw=cn,sl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Zw=Hs,cr=fd,e0=de;const rl="@firebase/firestore";/**
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
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
 */let jn="9.18.0";/**
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
 */const nn=new Zr("@firebase/firestore");function il(){return nn.logLevel}function P(t,...e){if(nn.logLevel<=te.DEBUG){const n=e.map(Na);nn.debug(`Firestore (${jn}): ${t}`,...n)}}function vt(t,...e){if(nn.logLevel<=te.ERROR){const n=e.map(Na);nn.error(`Firestore (${jn}): ${t}`,...n)}}function Ro(t,...e){if(nn.logLevel<=te.WARN){const n=e.map(Na);nn.warn(`Firestore (${jn}): ${t}`,...n)}}function Na(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function se(t,e){t||B()}function H(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Ze{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Wd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class n0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s0{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string"),new Wd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new Ne(e)}}class r0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class i0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new r0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.A=n.token,new o0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function c0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Qd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=c0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function Dn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Is{constructor(e,n,s){n===void 0?n=0:n>e.length&&B(),s===void 0?s=e.length-n:s>e.length-n&&B(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Is.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Is?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Is{construct(e,n,s){return new re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new re(n)}static emptyPath(){return new re([])}}const l0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Is{construct(e,n,s){return new $e(e,n,s)}static isValidIdentifier(e){return l0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(re.fromString(e))}static fromName(e){return new M(re.fromString(e).popFirst(5))}static empty(){return new M(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new re(e.slice()))}}function u0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Nt(r,M.empty(),e)}function h0(t){return new Nt(t.readTime,t.key,-1)}class Nt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Nt(K.min(),M.empty(),-1)}static max(){return new Nt(K.max(),M.empty(),-1)}}function d0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const f0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==f0)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ra.at=-1;/**
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
 */class g0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Es{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ol(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function wi(t){return t==null}function Br(t){return t===0&&1/t==-1/0}function m0(t){return typeof t=="number"&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new y0("Invalid base64 string: "+r):r}}(e);return new Le(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const v0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(t){if(se(!!t),typeof t=="string"){let e=0;const n=v0.exec(t);if(se(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nn(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
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
 */function Xd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jd(t){const e=t.mapValue.fields.__previous_value__;return Xd(e)?Jd(e):e}function Ts(t){const e=Rt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xd(t)?4:_0(t)?9007199254740991:10:B()}function at(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Rt(s.timestampValue),o=Rt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Nn(s.bytesValue).isEqual(Nn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return pe(s.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return pe(s.integerValue)===pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=pe(s.doubleValue),o=pe(r.doubleValue);return i===o?Br(i)===Br(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dn(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ol(i)!==ol(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!at(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function ks(t,e){return(t.values||[]).find(n=>at(n,e))!==void 0}function Rn(t,e){if(t===e)return 0;const n=sn(t),s=sn(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=pe(r.integerValue||r.doubleValue),a=pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return al(t.timestampValue,e.timestampValue);case 4:return al(Ts(t),Ts(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Nn(r),a=Nn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ne(pe(r.latitude),pe(i.latitude));return o!==0?o:ne(pe(r.longitude),pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Rn(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===lr.mapValue&&i===lr.mapValue)return 0;if(r===lr.mapValue)return 1;if(i===lr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=Rn(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function al(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Rt(t),s=Rt(e),r=ne(n.seconds,s.seconds);return r!==0?r:ne(n.nanos,s.nanos)}function $n(t){return $o(t)}function $o(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Rt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Nn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$o(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$o(s.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function cl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oo(t){return!!t&&"integerValue"in t}function $a(t){return!!t&&"arrayValue"in t}function ll(t){return!!t&&"nullValue"in t}function ul(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vr(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jr{constructor(e,n){this.position=e,this.inclusive=n}}function hl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=Rn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function dl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zd{}class ge extends Zd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new b0(e,n,s):n==="array-contains"?new T0(e,s):n==="in"?new k0(e,s):n==="not-in"?new S0(e,s):n==="array-contains-any"?new A0(e,s):new ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new I0(e,s):new E0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rn(n,this.value)):n!==null&&sn(this.value)===sn(n)&&this.matchesComparison(Rn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Je extends Zd{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Je(e,n)}matches(e){return ef(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ef(t){return t.op==="and"}function tf(t){return w0(t)&&ef(t)}function w0(t){for(const e of t.filters)if(e instanceof Je)return!1;return!0}function Po(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+$n(t.value);if(tf(t))return t.filters.map(e=>Po(e)).join(",");{const e=t.filters.map(n=>Po(n)).join(",");return`${t.op}(${e})`}}function nf(t,e){return t instanceof ge?function(n,s){return s instanceof ge&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)}(t,e):t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&nf(i,s.filters[o]),!0):!1}(t,e):void B()}function sf(t){return t instanceof ge?function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`}(t):t instanceof Je?function(e){return e.op.toString()+" {"+e.getFilters().map(sf).join(" ,")+"}"}(t):"Filter"}class b0 extends ge{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class I0 extends ge{constructor(e,n){super(e,"in",n),this.keys=rf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class E0 extends ge{constructor(e,n){super(e,"not-in",n),this.keys=rf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class T0 extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $a(n)&&ks(n.arrayValue,this.value)}}class k0 extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class S0 extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class A0 extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ks(this.value.arrayValue,s))}}/**
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
 */class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function C0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ee.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ur(this.root,e,this.comparator,!0)}}class ur{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=r??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ee(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ee.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ee(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fl(this.data.getIterator())}getIteratorFrom(e){return new fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ye{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Ye([])}unionWith(e){let n=new ve($e.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ye(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=$e.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];vr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){qn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new He(as(this.value))}}function of(t){const e=[];return qn(t.fields,(n,s)=>{const r=new $e([n]);if(vr(s)){const i=of(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ye(e)}/**
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
 */class Re{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,K.min(),K.min(),K.min(),He.empty(),0)}static newFoundDocument(e,n,s,r){return new Re(e,1,n,K.min(),s,r,0)}static newNoDocument(e,n){return new Re(e,2,n,K.min(),K.min(),He.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,K.min(),K.min(),He.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class D0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function pl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new D0(t,e,n,s,r,i,o)}function Oa(t){const e=H(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Po(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),wi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),e._t=n}return e._t}function Pa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!C0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dl(t.startAt,e.startAt)&&dl(t.endAt,e.endAt)}function Mo(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function N0(t,e,n,s,r,i,o,a){return new Xs(t,e,n,s,r,i,o,a)}function Ma(t){return new Xs(t)}function gl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function af(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function La(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function cf(t){return t.collectionGroup!==null}function kn(t){const e=H(t);if(e.wt===null){e.wt=[];const n=La(e),s=af(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new cs(n)),e.wt.push(new cs($e.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new cs($e.keyField(),i))}}}return e.wt}function _t(t){const e=H(t);if(!e.gt)if(e.limitType==="F")e.gt=pl(e.path,e.collectionGroup,kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of kn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cs(i.field,o))}const s=e.endAt?new jr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new jr(e.startAt.position,e.startAt.inclusive):null;e.gt=pl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Lo(t,e){e.getFirstInequalityField(),La(t);const n=t.filters.concat([e]);return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xo(t,e,n){return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bi(t,e){return Pa(_t(t),_t(e))&&t.limitType===e.limitType}function lf(t){return`${Oa(_t(t))}|lt:${t.limitType}`}function Uo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>sf(s)).join(", ")}]`),wi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),`Target(${n})`}(_t(t))}; limitType=${t.limitType})`}function Ii(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of kn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=hl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,kn(n),s)||n.endAt&&!function(r,i,o){const a=hl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,kn(n),s))}(t,e)}function R0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uf(t){return(e,n)=>{let s=!1;for(const r of kn(t)){const i=$0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function $0(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Rn(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
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
 */function hf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function df(t){return{integerValue:""+t}}function O0(t,e){return m0(e)?df(e):hf(t,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function P0(t,e,n){return t instanceof qr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ss?pf(t,e):t instanceof As?gf(t,e):function(s,r){const i=ff(s,r),o=ml(i)+ml(s.It);return Oo(i)&&Oo(s.It)?df(o):hf(s.Tt,o)}(t,e)}function M0(t,e,n){return t instanceof Ss?pf(t,e):t instanceof As?gf(t,e):n}function ff(t,e){return t instanceof zr?Oo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class qr extends Ei{}class Ss extends Ei{constructor(e){super(),this.elements=e}}function pf(t,e){const n=mf(e);for(const s of t.elements)n.some(r=>at(r,s))||n.push(s);return{arrayValue:{values:n}}}class As extends Ei{constructor(e){super(),this.elements=e}}function gf(t,e){let n=mf(e);for(const s of t.elements)n=n.filter(r=>!at(r,s));return{arrayValue:{values:n}}}class zr extends Ei{constructor(e,n){super(),this.Tt=e,this.It=n}}function ml(t){return pe(t.integerValue||t.doubleValue)}function mf(t){return $a(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function L0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ss&&s instanceof Ss||n instanceof As&&s instanceof As?Dn(n.elements,s.elements,at):n instanceof zr&&s instanceof zr?at(n.It,s.It):n instanceof qr&&s instanceof qr}(t.transform,e.transform)}class x0{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ti{}function yf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xa(t.key,st.none()):new Js(t.key,t.data,st.none());{const n=t.data,s=He.empty();let r=new ve($e.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ln(t.key,s,new Ye(r.toArray()),st.none())}}function U0(t,e,n){t instanceof Js?function(s,r,i){const o=s.value.clone(),a=vl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ln?function(s,r,i){if(!_r(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=vl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(vf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof Js?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=r.value.clone(),l=_l(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ln?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=_l(r.fieldTransforms,a,i),l=i.data;return l.setAll(vf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _r(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function F0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ff(s.transform,r||null);i!=null&&(n===null&&(n=He.empty()),n.set(s.field,i))}return n||null}function yl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Dn(n,s,(r,i)=>L0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Js extends Ti{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ln extends Ti{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vl(t,e,n){const s=new Map;se(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,M0(o,a,n[r]))}return s}function _l(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,P0(i,o,e))}return s}class xa extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class V0 extends Ti{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class B0{constructor(e){this.count=e}}/**
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
 */var fe,ee;function j0(t){switch(t){default:return B();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function _f(t){if(t===void 0)return vt("GRPC error has no .code"),b.UNKNOWN;switch(t){case fe.OK:return b.OK;case fe.CANCELLED:return b.CANCELLED;case fe.UNKNOWN:return b.UNKNOWN;case fe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case fe.INTERNAL:return b.INTERNAL;case fe.UNAVAILABLE:return b.UNAVAILABLE;case fe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case fe.NOT_FOUND:return b.NOT_FOUND;case fe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case fe.ABORTED:return b.ABORTED;case fe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case fe.DATA_LOSS:return b.DATA_LOSS;default:return B()}}(ee=fe||(fe={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){qn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yd(this.inner)}size(){return this.innerSize}}/**
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
 */const q0=new we(M.comparator);function wt(){return q0}const wf=new we(M.comparator);function es(...t){let e=wf;for(const n of t)e=e.insert(n.key,n);return e}function bf(t){let e=wf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function zt(){return us()}function If(){return us()}function us(){return new zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const z0=new we(M.comparator),K0=new ve(M.comparator);function Z(...t){let e=K0;for(const n of t)e=e.add(n);return e}const H0=new ve(ne);function Ef(){return H0}/**
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
 */class ki{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ki(K.min(),r,Ef(),wt(),Z())}}class Zs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Zs(s,n,Z(),Z(),Z())}}/**
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
 */class wr{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Tf{constructor(e,n){this.targetId=e,this.Rt=n}}class kf{constructor(e,n,s=Le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class wl{constructor(){this.Pt=0,this.vt=Il(),this.bt=Le.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Z(),n=Z(),s=Z();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:B()}}),new Zs(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Il()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class G0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=wt(),this.Kt=bl(),this.Gt=new ve(ne)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Mo(i))if(s===0){const o=new M(i.path);this.zt(n,o,Re.newNoDocument(o,K.min()))}else se(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Mo(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Re.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=Z();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ki(e,n,this.Gt,this.Ut,s);return this.Ut=wt(),this.Kt=bl(),this.Gt=new ve(ne),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new wl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(ne),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new wl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function bl(){return new we(M.comparator)}function Il(){return new we(M.comparator)}/**
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
 */const W0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Q0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Y0=(()=>({and:"AND",or:"OR"}))();class X0{constructor(e,n){this.databaseId=e,this.yt=n}}function Kr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function J0(t,e){return Kr(t,e.toTimestamp())}function rt(t){return se(!!t),K.fromTimestamp(function(e){const n=Rt(e);return new ye(n.seconds,n.nanos)}(t))}function Ua(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Af(t){const e=re.fromString(t);return se(Rf(e)),e}function Fo(t,e){return Ua(t.databaseId,e.path)}function ro(t,e){const n=Af(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Cf(n))}function Vo(t,e){return Ua(t.databaseId,e)}function Z0(t){const e=Af(t);return e.length===4?re.emptyPath():Cf(e)}function Bo(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cf(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function El(t,e,n){return{name:Fo(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(se(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(se(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:_f(c.code);return new $(l,c.message||"")}(o);n=new kf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ro(t,s.document.name),i=rt(s.document.updateTime),o=s.document.createTime?rt(s.document.createTime):K.min(),a=new He({mapValue:{fields:s.document.fields}}),c=Re.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new wr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ro(t,s.document),i=s.readTime?rt(s.readTime):K.min(),o=Re.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ro(t,s.document),i=s.removedTargetIds||[];n=new wr([],i,r,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new B0(r),o=s.targetId;n=new Tf(o,i)}}return n}function tb(t,e){let n;if(e instanceof Js)n={update:El(t,e.key,e.value)};else if(e instanceof xa)n={delete:Fo(t,e.key)};else if(e instanceof ln)n={update:El(t,e.key,e.data),updateMask:ub(e.fieldMask)};else{if(!(e instanceof V0))return B();n={verify:Fo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof qr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ss)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw B()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:J0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?rt(s.updateTime):rt(r);return i.isEqual(K.min())&&(i=rt(r)),new x0(i,s.transformResults||[])}(n,e))):[]}function sb(t,e){return{documents:[Vo(t,e.path)]}}function rb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Vo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Nf(Je.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vn(u.field),direction:ab(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||wi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ib(t){let e=Z0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){se(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Df(u);return h instanceof Je&&tf(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cs(_n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,wi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new jr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new jr(d,h)}(n.endAt)),N0(e,r,o,i,a,"F",c,l)}function ob(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Df(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_n(e.unaryFilter.field);return ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(e.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_n(e.unaryFilter.field);return ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_n(e.unaryFilter.field);return ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ge.create(_n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Je.create(e.compositeFilter.filters.map(n=>Df(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function ab(t){return W0[t]}function cb(t){return Q0[t]}function lb(t){return Y0[t]}function vn(t){return{fieldPath:t.canonicalString()}}function _n(t){return $e.fromServerFormat(t.fieldPath)}function Nf(t){return t instanceof ge?function(e){if(e.op==="=="){if(ul(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NAN"}};if(ll(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ul(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NOT_NAN"}};if(ll(e.value))return{unaryFilter:{field:vn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(e.field),op:cb(e.op),value:e.value}}}(t):t instanceof Je?function(e){const n=e.getFilters().map(s=>Nf(s));return n.length===1?n[0]:{compositeFilter:{op:lb(e.op),filters:n}}}(t):B()}function ub(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&U0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=If();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=yf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(n,s)=>yl(n,s))&&Dn(this.baseMutations,e.baseMutations,(n,s)=>yl(n,s))}}class Fa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){se(e.mutations.length===s.length);let r=z0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fa(e,n,s,r)}}/**
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
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,n,s,r,i=K.min(),o=K.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class fb{constructor(e){this.oe=e}}function pb(t){const e=ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xo(e,e.limit,"L"):e}/**
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
 */class gb{constructor(){this.Ze=new mb}addToCollectionParentIndex(e,n){return this.Ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Nt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Nt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class mb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ve(re.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(re.comparator)).toArray()}}/**
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
 */class On{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new On(0)}static Sn(){return new On(-1)}}/**
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
 */class yb{constructor(){this.changes=new zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _b{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ls(s.mutation,r,Ye.empty(),ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=zt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=es();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=zt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=wt();const o=us(),a=us();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ln)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ls(u.mutation,l,u.mutation.getFieldMask(),ye.now())):o.set(l.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new vb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let r=new we((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ye.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=If();u.forEach(d=>{if(!i.has(d)){const p=yf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(zt());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:bf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=es();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=es();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Xs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Re.newInvalidDocument(l)))});let o=es();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ls(l.mutation,c,Ye.empty(),ye.now()),Ii(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class wb{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return T.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:rt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:pb(s.bundledQuery),readTime:rt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class bb{constructor(){this.overlays=new we(M.comparator),this.ss=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zt();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=zt(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=zt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=zt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new db(n,s));let i=this.ss.get(n);i===void 0&&(i=Z(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class Va{constructor(){this.rs=new ve(be.os),this.us=new ve(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new M(new re([])),s=new be(n,e),r=new be(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new M(new re([])),s=new be(n,e),r=new be(n,e+1);let i=Z();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return M.comparator(e.key,n.key)||ne(e.gs,n.gs)}static cs(e,n){return ne(e.gs,n.gs)||M.comparator(e.key,n.key)}}/**
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
 */class Ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(be.os)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),r=new be(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(ne);return n.forEach(r=>{const i=new be(r,0),o=new be(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),T.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new be(new M(i),0);let a=new ve(ne);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),T.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){se(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return T.forEach(n.mutations,r=>{const i=new be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new be(n,0),r=this.ps.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Eb{constructor(e){this.Rs=e,this.docs=new we(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=wt();const o=n.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||d0(h0(u),s)<=0||(r.has(u.key)||Ii(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){B()}Ps(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Tb(this)}getSize(e){return T.resolve(this.size)}}class Tb extends yb{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class kb{constructor(e){this.persistence=e,this.vs=new zn(n=>Oa(n),Pa),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Va,this.targetCount=0,this.Ss=On.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new On(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.xn(n),T.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Vs.containsKey(n))}}/**
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
 */class Sb{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ra(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new kb(this),this.indexManager=new gb,this.remoteDocumentCache=function(s){return new Eb(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new fb(n),this.$s=new wb(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Ib(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const r=new Ab(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return T.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Ab extends p0{constructor(e){super(),this.currentSequenceNumber=e}}class Ba{constructor(e){this.persistence=e,this.Bs=new Va,this.Ls=null}static qs(e){return new Ba(e)}get Us(){if(this.Ls)return this.Ls;throw B()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),T.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Us,s=>{const r=M.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,K.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return T.or([()=>T.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
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
 */class ja{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ja(e,n.fromCache,s,r)}}/**
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
 */class Cb{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(gl(n))return T.resolve(null);let s=_t(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xo(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Z(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,xo(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return gl(n)||r.isEqual(K.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(il()<=te.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Uo(n)),this.qi(e,o,n,u0(r,-1)))})}Bi(e,n){let s=new ve(uf(e));return n.forEach((r,i)=>{Ii(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return il()<=te.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Uo(n)),this.$i.getDocumentsMatchingQuery(e,n,Nt.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Db{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new we(ne),this.Gi=new zn(i=>Oa(i),Pa),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _b(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Nb(t,e,n,s){return new Db(t,e,n,s)}async function $f(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Rb(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const g=c.docVersions.get(p);se(g!==null),y.version.compareTo(g)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Of(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function $b(t,e){const n=H(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Le.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(y,g,v){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=wt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Ob(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(K.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Ob(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Pb(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Mb(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Wt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function jo(t,e,n){const s=H(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ys(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Tl(t,e,n){const s=H(t);let r=K.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=H(a),h=u.Gi.get(l);return h!==void 0?T.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_t(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:K.min(),n?i:Z())).next(a=>(Lb(s,R0(e),a),{documents:a,Yi:i})))}function Lb(t,e,n){let s=t.Qi.get(e)||K.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class kl{constructor(){this.activeTargetIds=Ef()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xb{constructor(){this.Ur=new kl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new kl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ub{Gr(e){}shutdown(){}}/**
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
 */class Sl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hr=null;function io(){return hr===null?hr=268435456+Math.round(2147483648*Math.random()):hr++,"0x"+hr.toString(16)}/**
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
 */const Fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Vb{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const De="WebChannelConnection";class Bb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=io(),a=this.fo(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(P("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ro("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=Fb[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=io();return new Promise((o,a)=>{const c=new e0;c.setWithCredentials(!0),c.listenOnce(Xw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case so.NO_ERROR:const u=c.getResponseJson();P(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case so.TIMEOUT:P(De,`RPC '${e}' ${i} timed out`),a(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const h=c.getStatus();if(P(De,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(p.status);a(new $(y,p.message))}else a(new $(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(b.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{P(De,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);P(De,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=io(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qw(),a=Yw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Zw({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");P(De,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new Vb({Yr:g=>{d?P(De,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(P(De,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),P(De,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),y=(g,v,E)=>{g.listen(v,L=>{try{E(L)}catch(C){setTimeout(()=>{throw C},0)}})};return y(u,cr.EventType.OPEN,()=>{d||P(De,`RPC '${e}' stream ${r} transport opened.`)}),y(u,cr.EventType.CLOSE,()=>{d||(d=!0,P(De,`RPC '${e}' stream ${r} transport closed`),p.oo())}),y(u,cr.EventType.ERROR,g=>{d||(d=!0,Ro(De,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new $(b.UNAVAILABLE,"The operation could not be completed")))}),y(u,cr.EventType.MESSAGE,g=>{var v;if(!d){const E=g.data[0];se(!!E);const L=E,C=L.error||((v=L[0])===null||v===void 0?void 0:v.error);if(C){P(De,`RPC '${e}' stream ${r} received error:`,C);const z=C.status;let N=function(Q){const me=fe[Q];if(me!==void 0)return _f(me)}(z),D=C.message;N===void 0&&(N=b.INTERNAL,D="Unknown error status: "+z+" with message "+C.message),d=!0,p.oo(new $(N,D)),u.close()}else P(De,`RPC '${e}' stream ${r} received:`,E),p.uo(E)}}),y(a,Jw.STAT_EVENT,g=>{g.stat===sl.PROXY?P(De,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===sl.NOPROXY&&P(De,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function oo(){return typeof document<"u"?document:null}/**
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
 */function Si(t){return new X0(t,!0)}/**
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
 */class Pf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Mf{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Pf(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new $(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jb extends Mf{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=eb(this.Tt,e),s=function(r){if(!("targetChange"in r))return K.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?K.min():i.readTime?rt(i.readTime):K.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Bo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Mo(a)?{documents:sb(r,a)}:{query:rb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Sf(r,i.resumeToken):i.snapshotVersion.compareTo(K.min())>0&&(o.readTime=Kr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ob(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Bo(this.Tt),n.removeTarget=e,this.qo(n)}}class qb extends Mf{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=nb(e.writeResults,e.commitTime),s=rt(e.commitTime);return this.listener.eu(s,n)}return se(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Bo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>tb(this.Tt,s))};this.qo(n)}}/**
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
 */class zb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(b.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(b.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class Kb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Hb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{un(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=H(a);c.mu.add(4),await er(c),c.pu.set("Unknown"),c.mu.delete(4),await Ai(c)}(this))})}),this.pu=new Kb(s,r)}}async function Ai(t){if(un(t))for(const e of t.gu)await e(!0)}async function er(t){for(const e of t.gu)await e(!1)}function Lf(t,e){const n=H(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ka(n)?za(n):Kn(n).Mo()&&qa(n,e))}function xf(t,e){const n=H(t),s=Kn(n);n.wu.delete(e),s.Mo()&&Uf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():un(n)&&n.pu.set("Unknown"))}function qa(t,e){t.Iu.Ot(e.targetId),Kn(t).Jo(e)}function Uf(t,e){t.Iu.Ot(e),Kn(t).Yo(e)}function za(t){t.Iu=new G0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Kn(t).start(),t.pu.au()}function Ka(t){return un(t)&&!Kn(t).$o()&&t.wu.size>0}function un(t){return H(t).mu.size===0}function Ff(t){t.Iu=void 0}async function Gb(t){t.wu.forEach((e,n)=>{qa(t,e)})}async function Wb(t,e){Ff(t),Ka(t)?(t.pu.fu(e),za(t)):t.pu.set("Unknown")}async function Qb(t,e,n){if(t.pu.set("Online"),e instanceof kf&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Hr(t,s)}else if(e instanceof wr?t.Iu.Qt(e):e instanceof Tf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(K.min()))try{const s=await Of(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Uf(r,a);const l=new Wt(c.target,a,1,c.sequenceNumber);qa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await Hr(t,s)}}async function Hr(t,e,n){if(!Ys(e))throw e;t.mu.add(1),await er(t),t.pu.set("Offline"),n||(n=()=>Of(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ai(t)})}function Vf(t,e){return e().catch(n=>Hr(t,n,e))}async function Ci(t){const e=H(t),n=$t(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Yb(e);)try{const r=await Pb(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,Xb(e,r)}catch(r){await Hr(e,r)}Bf(e)&&jf(e)}function Yb(t){return un(t)&&t._u.length<10}function Xb(t,e){t._u.push(e);const n=$t(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Bf(t){return un(t)&&!$t(t).$o()&&t._u.length>0}function jf(t){$t(t).start()}async function Jb(t){$t(t).su()}async function Zb(t){const e=$t(t);for(const n of t._u)e.tu(n.mutations)}async function eI(t,e,n){const s=t._u.shift(),r=Fa.from(s,e,n);await Vf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ci(t)}async function tI(t,e){e&&$t(t).Xo&&await async function(n,s){if(r=s.code,j0(r)&&r!==b.ABORTED){const i=n._u.shift();$t(n).Fo(),await Vf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ci(n)}var r}(t,e),Bf(t)&&jf(t)}async function Al(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=un(n);n.mu.add(3),await er(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ai(n)}async function nI(t,e){const n=H(t);e?(n.mu.delete(2),await Ai(n)):e||(n.mu.add(2),await er(n),n.pu.set("Unknown"))}function Kn(t){return t.Tu||(t.Tu=function(e,n,s){const r=H(e);return r.ru(),new jb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Gb.bind(null,t),no:Wb.bind(null,t),Ho:Qb.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Ka(t)?za(t):t.pu.set("Unknown")):(await t.Tu.stop(),Ff(t))})),t.Tu}function $t(t){return t.Eu||(t.Eu=function(e,n,s){const r=H(e);return r.ru(),new qb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Jb.bind(null,t),no:tI.bind(null,t),nu:Zb.bind(null,t),eu:eI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ci(t)):(await t.Eu.stop(),t._u.length>0&&(P("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Ha{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ha(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ga(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Ys(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Sn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=es(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Sn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Sn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Cl{constructor(){this.Au=new we(M.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):B():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Pn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pn(e,n,Sn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class sI{constructor(){this.Pu=void 0,this.listeners=[]}}class rI{constructor(){this.queries=new zn(e=>lf(e),bi),this.onlineState="Unknown",this.vu=new Set}}async function iI(t,e){const n=H(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sI),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Ga(o,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&Wa(n)}async function oI(t,e){const n=H(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function aI(t,e){const n=H(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&Wa(n)}function cI(t,e,n){const s=H(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wa(t){t.vu.forEach(e=>{e.next()})}class lI{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Pn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class qf{constructor(e){this.key=e}}class zf{constructor(e){this.key=e}}class uI{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Z(),this.mutatedKeys=Z(),this.ju=uf(e),this.zu=new Sn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Cl,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Ii(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?y!==g&&(s.track({type:3,doc:p}),v=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Pn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Cl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Z(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new zf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new qf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Z();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Pn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class hI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dI{constructor(e){this.key=e,this.ic=!1}}class fI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new zn(a=>lf(a),bi),this.uc=new Map,this.cc=new Set,this.ac=new we(M.comparator),this.hc=new Map,this.lc=new Va,this.fc={},this.dc=new Map,this._c=On.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function pI(t,e){const n=TI(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Mb(n.localStore,_t(e));n.isPrimaryClient&&Lf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await gI(n,e,s,a==="current",o.resumeToken)}return r}async function gI(t,e,n,s,r){t.mc=(h,d,p)=>async function(y,g,v,E){let L=g.view.Hu(v);L.Li&&(L=await Tl(y.localStore,g.query,!1).then(({documents:N})=>g.view.Hu(N,L)));const C=E&&E.targetChanges.get(g.targetId),z=g.view.applyChanges(L,y.isPrimaryClient,C);return Nl(y,g.targetId,z.tc),z.snapshot}(t,h,d,p);const i=await Tl(t.localStore,e,!0),o=new uI(e,i.Yi),a=o.Hu(i.documents),c=Zs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Nl(t,n,l.tc);const u=new hI(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function mI(t,e){const n=H(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!bi(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),xf(n.remoteStore,s.targetId),qo(n,s.targetId)}).catch(Qs)):(qo(n,s.targetId),await jo(n.localStore,s.targetId,!0))}async function yI(t,e,n){const s=kI(t);try{const r=await function(i,o){const a=H(i),c=ye.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=wt(),y=Z();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((v,E)=>{E.isValidDocument()||(y=y.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const v=[];for(const E of o){const L=F0(E,u.get(E.key).overlayedDocument);L!=null&&v.push(new ln(E.key,L,of(L.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(g=>{h=g;const v=g.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,g.batchId,v)})}).then(()=>({batchId:h.batchId,changes:bf(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new we(ne)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await tr(s,r.changes),await Ci(s.remoteStore)}catch(r){const i=Ga(r,"Failed to persist write");n.reject(i)}}async function Kf(t,e){const n=H(t);try{const s=await $b(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?se(o.ic):r.removedDocuments.size>0&&(se(o.ic),o.ic=!1))}),await tr(n,s,e)}catch(s){await Qs(s)}}function Dl(t,e,n){const s=H(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=H(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Wa(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vI(t,e,n){const s=H(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new we(M.comparator);o=o.insert(i,Re.newNoDocument(i,K.min()));const a=Z().add(i),c=new ki(K.min(),new Map,new ve(ne),o,a);await Kf(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Qa(s)}else await jo(s.localStore,e,!1).then(()=>qo(s,e,n)).catch(Qs)}async function _I(t,e){const n=H(t),s=e.batch.batchId;try{const r=await Rb(n.localStore,e);Gf(n,s,null),Hf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tr(n,r)}catch(r){await Qs(r)}}async function wI(t,e,n){const s=H(t);try{const r=await function(i,o){const a=H(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Gf(s,e,n),Hf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await tr(s,r)}catch(r){await Qs(r)}}function Hf(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Gf(t,e,n){const s=H(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function qo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Wf(t,s)})}function Wf(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(xf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Qa(t))}function Nl(t,e,n){for(const s of n)s instanceof qf?(t.lc.addReference(s.key,e),bI(t,s)):s instanceof zf?(P("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Wf(t,s.key)):B()}function bI(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.cc.add(s),Qa(t))}function Qa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new M(re.fromString(e)),s=t._c.next();t.hc.set(s,new dI(n)),t.ac=t.ac.insert(n,s),Lf(t.remoteStore,new Wt(_t(Ma(n.path)),s,2,Ra.at))}}async function tr(t,e,n){const s=H(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ja.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=H(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ys(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,i))}async function II(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await $f(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new $(b.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await tr(n,s.Wi)}}function EI(t,e){const n=H(t),s=n.hc.get(e);if(s&&s.ic)return Z().add(s.key);{let r=Z();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function TI(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vI.bind(null,e),e.rc.Ho=aI.bind(null,e.eventManager),e.rc.gc=cI.bind(null,e.eventManager),e}function kI(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_I.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wI.bind(null,e),e}class SI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Nb(this.persistence,new Cb,e.initialUser,this.Tt)}Tc(e){return new Sb(Ba.qs,this.Tt)}Ic(e){return new xb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=II.bind(null,this.syncEngine),await nI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rI}createDatastore(e){const n=Si(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Bb(r));var r;return function(i,o,a,c){return new zb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Dl(this.syncEngine,a,0),o=Sl.C()?new Sl:new Ub,new Hb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new fI(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);P("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await er(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class CI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class DI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=Qd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ga(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function NI(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await $f(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function RI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $I(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Al(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Al(e.remoteStore,i)),t.onlineComponents=e}async function $I(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await NI(t,new SI)),t.offlineComponents}async function Qf(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await RI(t,new AI)),t.onlineComponents}function OI(t){return Qf(t).then(e=>e.syncEngine)}async function Rl(t){const e=await Qf(t),n=e.eventManager;return n.onListen=pI.bind(null,e.syncEngine),n.onUnlisten=mI.bind(null,e.syncEngine),n}const $l=new Map;/**
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
 */function Yf(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PI(t,e,n,s){if(e===!0&&s===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ol(t){if(!M.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pl(t){if(M.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Di(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Di(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ml{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,PI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ni{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ml({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ml(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new t0;switch(n.type){case"gapi":const s=n.client;return new i0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$l.get(e);n&&(P("ComponentProvider","Removing Datastore"),$l.delete(e),n.terminate())}(this),Promise.resolve()}}function MI(t,e,n,s={}){var r;const i=(t=Qt(t,Ni))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ro("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=ug(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new n0(new Wd(o,a))}}/**
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
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class Hn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class Dt extends Hn{constructor(e,n,s){super(e,n,Ma(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new M(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function LI(t,e,...n){if(t=_e(t),Yf("collection","path",e),t instanceof Ni){const s=re.fromString(e,...n);return Pl(s),new Dt(t,null,s)}{if(!(t instanceof Be||t instanceof Dt))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Pl(s),new Dt(t.firestore,null,s)}}function dr(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Qd.R()),Yf("doc","path",e),t instanceof Ni){const s=re.fromString(e,...n);return Ol(s),new Be(t,null,new M(s))}{if(!(t instanceof Be||t instanceof Dt))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Ol(s),new Be(t.firestore,t instanceof Dt?t.converter:null,new M(s))}}/**
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
 */class xI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Pf(this,"async_queue_retry"),this.Hc=()=>{const n=oo();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=oo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=oo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Gt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ys(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ha.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&B()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ll(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Ni{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new xI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jf(this),this._firestoreClient.terminate()}}function UI(t,e){const n=typeof t=="object"?t:Wo(),s=typeof t=="string"?t:e||"(default)",r=an(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ag("firestore");i&&MI(r,...i)}return r}function Xf(t){return t._firestoreClient||Jf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new g0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new DI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(Le.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ya{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zf{constructor(e){this._methodName=e}}/**
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
 */class Xa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const FI=/^__.*__$/;class VI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new Js(e,this.data,n,this.fieldTransforms)}}function ep(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Ja{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ja(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Gr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(ep(this.ra)&&FI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class BI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||Si(e)}wa(e,n,s,r=!1){return new Ja({ra:e,methodName:n,_a:s,path:$e.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function tp(t){const e=t._freezeSettings(),n=Si(t._databaseId);return new BI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jI(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);rp("Data must be an object, but it was:",o,s);const a=np(s,o);let c,l;if(i.merge)c=new Ye(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=zI(e,h,n);if(!o.contains(d))throw new $(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HI(u,d)||u.push(d)}c=new Ye(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new VI(new He(a),c,l)}function qI(t,e,n,s=!1){return Za(n,t.wa(s?4:3,e))}function Za(t,e){if(sp(t=_e(t)))return rp("Unsupported field value:",e,t),np(t,e);if(t instanceof Zf)return function(n,s){if(!ep(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Za(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return O0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ye.fromDate(n);return{timestampValue:Kr(s.Tt,r)}}if(n instanceof ye){const r=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Kr(s.Tt,r)}}if(n instanceof Xa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:Sf(s.Tt,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ua(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Di(n)}`)}(t,e)}function np(t,e){const n={};return Yd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(t,(s,r)=>{const i=Za(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Xa||t instanceof Mn||t instanceof Be||t instanceof Zf)}function rp(t,e,n){if(!sp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Di(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function zI(t,e,n){if((e=_e(e))instanceof Ya)return e._internalPath;if(typeof e=="string")return ip(t,e);throw Gr("Field path arguments must be of type string or ",t,!1,void 0,n)}const KI=new RegExp("[~\\*/\\[\\]]");function ip(t,e,n){if(e.search(KI)>=0)throw Gr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ya(...e.split("."))._internalPath}catch{throw Gr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(b.INVALID_ARGUMENT,a+t+c)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class op{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ap("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GI extends op{data(){return super.data()}}function ap(t,e){return typeof e=="string"?ip(t,e):e instanceof Ya?e._internalPath:e._delegate._internalPath}/**
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
 */function WI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ec{}class QI extends ec{}function YI(t,e,...n){let s=[];e instanceof ec&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof nc).length,o=r.filter(a=>a instanceof tc).length;if(i>1||i>0&&o>0)throw new $(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class tc extends QI{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new tc(e,n,s)}_apply(e){const n=this._parse(e);return cp(e._query,n),new Hn(e.firestore,e.converter,Lo(e._query,n))}_parse(e){const n=tp(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new $(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ul(u,l);const d=[];for(const p of u)d.push(xl(a,r,p));h={arrayValue:{values:d}}}else h=xl(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ul(u,l),h=qI(o,i,u,l==="in"||l==="not-in");return ge.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class nc extends ec{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Je.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)cp(i,a),i=Lo(i,a)}(e._query,n),new Hn(e.firestore,e.converter,Lo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xl(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new $(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cf(e)&&n.indexOf("/")!==-1)throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(re.fromString(n));if(!M.isDocumentKey(s))throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return cl(t,new M(s))}if(n instanceof Be)return cl(t,n._key);throw new $(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Di(n)}.`)}function Ul(t,e){if(!Array.isArray(t)||t.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cp(t,e){if(e.isInequality()){const s=La(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new $(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=af(t);i!==null&&XI(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function XI(t,e,n){if(!n.isEqual(e))throw new $(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class JI{convertValue(e,n="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const s={};return qn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Xa(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Jd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=Rt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=re.fromString(e);se(Rf(s));const r=new Es(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ZI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lp extends op{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ap("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class br extends lp{data(e={}){return super.data(e)}}class eE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ts(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new br(this._firestore,this._userDataWriter,s.key,s,new ts(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ts(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:tE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class up extends JI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function Fl(t,e,n){t=Qt(t,Be);const s=Qt(t.firestore,Cs),r=ZI(t.converter,e,n);return hp(s,[jI(tp(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,st.none())])}function nE(t){return hp(Qt(t.firestore,Cs),[new xa(t._key,st.none())])}function Vl(t,...e){var n,s,r;t=_e(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ll(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ll(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=Qt(t.firestore,Cs),u=Ma(t._key.path),c={next:h=>{e[o]&&e[o](sE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Qt(t,Hn);l=Qt(h.firestore,Cs),u=h._query;const d=new up(l);c={next:p=>{e[o]&&e[o](new eE(l,d,h,p))},error:e[o+1],complete:e[o+2]},WI(t._query)}return function(h,d,p,y){const g=new CI(y),v=new lI(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>iI(await Rl(h),v)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>oI(await Rl(h),v))}}(Xf(l),u,a,c)}function hp(t,e){return function(n,s){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>yI(await OI(n),s,r)),r.promise}(Xf(t),e)}function sE(t,e,n){const s=n.docs.get(e._key),r=new up(t);return new lp(t,r,e._key,s,new ts(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){jn=n})(Os),ot(new Xe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Cs(new s0(n.getProvider("auth-internal")),new a0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ge(rl,"3.9.0",t),Ge(rl,"3.9.0","esm2017")})();const rE={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},dp=ju(rE),xt=Ov(dp);yy(xt,fh);const Qn=UI(dp);G_();const iE=new ut,oE=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Rs(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return uh(xt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return gy(xt,r,i)},async signInWithEmail(r,i){return my(xt,r,i)},async signInWithGoogle(){return qy(xt,iE)},async signOut(){return wy(xt)}}},aE=oE(),Bl="/assets/default-user-a40c52dd.png";function cE(t){let e;return{c(){e=_("i"),f(e,"class","codicon codicon-account")},m(n,s){A(n,e,s)},p:S,d(n){n&&k(e)}}}function lE(t){let e,n;return{c(){e=_("img"),f(e,"class","profile-picture svelte-1m717b8"),Yt(e.src,n=t[0].user.photoURL??Bl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){A(s,e,r)},p(s,r){r&1&&!Yt(e.src,n=s[0].user.photoURL??Bl)&&f(e,"src",n)},d(s){s&&k(e)}}}function uE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,v,E,L;o=new Zp({});function C(D,Q){return D[0].loggedIn?lE:cE}let z=C(t),N=z(t);return{c(){e=_("header"),n=_("div"),s=_("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=R(),i=_("a"),F(o.$$.fragment),a=R(),c=_("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=R(),u=_("nav"),h=_("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=R(),p=_("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',y=R(),g=_("button"),N.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,Q){A(D,e,Q),m(e,n),m(n,s),m(n,r),m(n,i),x(o,i,null),m(n,a),m(n,c),m(e,l),m(e,u),m(u,h),m(u,d),m(u,p),m(u,y),m(u,g),N.m(g,null),v=!0,E||(L=[j(c,"click",t[1]),j(h,"click",t[2]),j(p,"click",t[3]),j(g,"click",t[4])],E=!0)},p(D,[Q]){z===(z=C(D))&&N?N.p(D,Q):(N.d(1),N=z(D),N&&(N.c(),N.m(g,null)))},i(D){v||(w(o.$$.fragment,D),v=!0)},o(D){I(o.$$.fragment,D),v=!1},d(D){D&&k(e),U(o),N.d(),E=!1,Se(L)}}}function hE(t,e,n){let s;return xe(t,aE,c=>n(0,s=c)),[s,()=>Ft.navigateTo("help"),()=>Ft.navigateTo("search"),()=>Ft.navigateTo("settings"),()=>Ft.navigateTo("account")]}class dE extends X{constructor(e){super(),Y(this,e,hE,uE,W,{})}}const fE="modulepreload",pE=function(t){return"/"+t},jl={},Ri=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=pE(i),i in jl)return;jl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":fE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Ir=Object.freeze(["+","-","~"]),$i=t=>Ir.includes(t),fp=t=>{if(!$i(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Ir.indexOf(t)+1)%Ir.length;return Ir[n]},gE=Object.freeze({"+":"","-":"-","~":""}),mE=t=>{if(!$i(t))throw TypeError("Invalid modifier passed to serializeModifier");return gE[t]},nr=t=>typeof t=="string"&&t!=="",Oi=t=>typeof t=="number"&&t>=0;class Pi{constructor(e,n){if(!$i(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!nr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${mE(this.modifier)}${encodeURIComponent(this.name.replaceAll(" ","_"))}`}}const pp=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),gp=t=>pp.includes(t),ql=t=>{const e=pp.indexOf(t);return e>=0?e:99},yE=Object.freeze(["artist","character","copyright","source","metadata","rating"]),vE=t=>yE.includes(t);let Mi=class{constructor(e,n,s,r){if(!$i(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!nr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Oi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!gp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const mp=t=>new Pi(t.modifier,t.name);class yp{constructor(e,n,s){if(!nr(e))throw new TypeError("Invalid name passed to Supertag");if(!_E(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const _E=t=>Array.isArray(t)&&t.every(e=>e instanceof Pi),wE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Rs(t);let s,r=null,i=null;return uh(xt,async o=>{s=o,o?r=Vl(dr(Qn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=YI(LI(Qn,`users/${o.uid}/supertags`));i==null||i(),i=Vl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new yp(d.id,p.description,Object.entries(p.tags).map(y=>new Pi(y[1],y[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Fl(dr(Qn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return nE(dr(Qn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return Fl(dr(Qn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Ds=wE();function bE(t){let e,n,s,r;return{c(){e=_("button"),n=ue(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){A(i,e,o),m(e,n),s||(r=j(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Te(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:S,o:S,d(i){i&&k(e),s=!1,r()}}}function IE(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=ze(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class vp extends X{constructor(e){super(),Y(this,e,IE,bE,W,{text:0,title:1,disabled:2})}}const hn=t=>e=>{(_p(e)||EE(e))&&(e.preventDefault(),e.stopPropagation(),t(e))},EE=t=>t.code==="Space",_p=t=>t.code==="Enter"||t.key==="Enter",TE=Intl.NumberFormat("en",{notation:"compact"}),Ot=t=>{if(!Oi(t))throw new TypeError("Invalid value passed to formatCount");return TE.format(t)};function Ln(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const zl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function kE(t){let e,n;return{c(){e=_("i"),f(e,"class",n=`codicon codicon-${zl[t[0]]}`)},m(s,r){A(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${zl[s[0]]}`)&&f(e,"class",n)},i:S,o:S,d(s){s&&k(e)}}}function SE(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class sc extends X{constructor(e){super(),Y(this,e,SE,kE,W,{type:0})}}const Kl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Hl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Gl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Wl(t){let e,n;return e=new sc({props:{type:t[0].type}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Ql(t){let e,n=Ot(t[0].count)+"",s,r;return{c(){e=ue("("),s=ue(n),r=ue(")")},m(i,o){A(i,e,o),A(i,s,o),A(i,r,o)},p(i,o){o&1&&n!==(n=Ot(i[0].count)+"")&&Te(s,n)},d(i){i&&k(e),i&&k(s),i&&k(r)}}}function AE(t){let e,n,s=Ln(t[0].name)+"",r,i,o,a,c,l,u=t[0].type=="supertag"&&Wl(t),h=t[0].count&&Ql(t);return{c(){e=_("li"),u&&u.c(),n=R(),r=ue(s),i=R(),h&&h.c(),f(e,"class",o=it(Gl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),he(e,"no-icon",t[0].type!=="supertag")},m(d,p){A(d,e,p),u&&u.m(e,null),m(e,n),m(e,r),m(e,i),h&&h.m(e,null),a=!0,c||(l=[j(e,"click",t[2]),j(e,"contextmenu",zo(t[3]))],c=!0)},p(d,[p]){d[0].type=="supertag"?u?(u.p(d,p),p&1&&w(u,1)):(u=Wl(d),u.c(),w(u,1),u.m(e,n)):u&&(ie(),I(u,1,1,()=>{u=null}),oe()),(!a||p&1)&&s!==(s=Ln(d[0].name)+"")&&Te(r,s),d[0].count?h?h.p(d,p):(h=Ql(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!a||p&1&&o!==(o=it(Gl[d[0].modifier])+" svelte-13vl0re"))&&f(e,"class",o),(!a||p&1)&&he(e,"no-icon",d[0].type!=="supertag")},i(d){a||(w(u),a=!0)},o(d){I(u),a=!1},d(d){d&&k(e),u&&u.d(),h&&h.d(),c=!1,Se(l)}}}function CE(t,e,n){let{tag:s}=e;const r=ze(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class wp extends X{constructor(e){super(),Y(this,e,CE,AE,W,{tag:0})}}function Yl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Xl(t){let e,n;return e=new wp({props:{tag:t[9]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function DE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,v,E,L,C,z,N,D,Q,me,Fe=t[2],G=[];for(let J=0;J<Fe.length;J+=1)G[J]=Xl(Yl(t,Fe,J));const lt=J=>I(G[J],1,1,()=>{G[J]=null});return N=new vp({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),N.$on("click",t[8]),{c(){e=_("dialog"),n=_("h3"),n.textContent="Create Supertag",s=R(),r=_("i"),i=R(),o=_("div"),a=_("label"),a.textContent="Name",c=R(),l=_("input"),u=R(),h=_("div"),d=_("label"),d.textContent="Description",p=R(),y=_("textarea"),g=R(),v=_("div"),E=_("span"),E.textContent="Tags",L=R(),C=_("ol");for(let J=0;J<G.length;J+=1)G[J].c();z=R(),F(N.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",it("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(y,"type","text"),f(y,"placeholder","Short description"),f(y,"id","supertag-description"),f(y,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(E,"class","svelte-ax50wm"),f(C,"class","svelte-ax50wm"),f(v,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(J,ae){A(J,e,ae),m(e,n),m(e,s),m(e,r),m(e,i),m(e,o),m(o,a),m(o,c),m(o,l),St(l,t[0]),m(e,u),m(e,h),m(h,d),m(h,p),m(h,y),St(y,t[1]),m(e,g),m(e,v),m(v,E),m(v,L),m(v,C);for(let Ce=0;Ce<G.length;Ce+=1)G[Ce]&&G[Ce].m(C,null);m(e,z),x(N,e,null),D=!0,Q||(me=[j(r,"click",t[5]),j(r,"keyup",hn(t[5])),j(l,"input",t[6]),j(y,"input",t[7])],Q=!0)},p(J,[ae]){if(ae&1&&l.value!==J[0]&&St(l,J[0]),ae&2&&St(y,J[1]),ae&4){Fe=J[2];let le;for(le=0;le<Fe.length;le+=1){const Gn=Yl(J,Fe,le);G[le]?(G[le].p(Gn,ae),w(G[le],1)):(G[le]=Xl(Gn),G[le].c(),w(G[le],1),G[le].m(C,null))}for(ie(),le=Fe.length;le<G.length;le+=1)lt(le);oe()}const Ce={};ae&8&&(Ce.title=J[3]?"Click to create supertag":"Enter a valid name to continue"),ae&8&&(Ce.disabled=!J[3]),N.$set(Ce)},i(J){if(!D){for(let ae=0;ae<Fe.length;ae+=1)w(G[ae]);w(N.$$.fragment,J),D=!0}},o(J){G=G.filter(Boolean);for(let ae=0;ae<G.length;ae+=1)I(G[ae]);I(N.$$.fragment,J),D=!1},d(J){J&&k(e),rn(G,J),U(N),Q=!1,Se(me)}}}function NE(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=ze(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new yp(r,i,o.map(mp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=nr(r))},[r,i,o,s,a,c,l,u,h]}class RE extends X{constructor(e){super(),Y(this,e,NE,DE,W,{name:0,description:1,tags:2})}}function $E(t){let e,n,s,r,i;return{c(){e=_("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class",n=it(`codicon codicon-${Kl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=Hl[t[0]])},m(o,a){A(o,e,a),r||(i=[j(e,"click",t[1]),j(e,"keyup",hn(t[1])),j(e,"touchend",zo(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=it(`codicon codicon-${Kl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=Hl[o[0]])&&f(e,"title",s)},i:S,o:S,d(o){o&&k(e),r=!1,Se(i)}}}function OE(t,e,n){let s="+";const r=ze();return[s,()=>{n(0,s=fp(s)),r("change",s)}]}class PE extends X{constructor(e){super(),Y(this,e,OE,$E,W,{})}}function ME(t){let e;return{c(){e=_("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){A(n,e,s)},p:S,i:S,o:S,d(n){n&&k(e)}}}class rc extends X{constructor(e){super(),Y(this,e,null,ME,W,{})}}let LE=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,v,E){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=y,this.tags=g,this.width=v,this.type=E,Object.freeze(this)}};const ic=(t,e)=>{if(!bp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!xE(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},bp=t=>{try{return new URL(t),!0}catch{return!1}},xE=t=>t===null||t instanceof AbortController;class Wr{constructor(e,n,s){if(!nr(e))throw TypeError("Invalid name passed to Tag constructor");if(!Oi(n))throw TypeError("Invalid count passed to Tag constructor");if(!gp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const UE=(t,e)=>new Mi(e,t.name,t.count,t.type);let FE=null;const VE=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await ic(`${e}${n}`,FE);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Wr(Ip(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},Ip=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'"),Ep=20;let Tp=null;const kp=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},BE=async(t,e)=>{const n=await ic(KE(t,e),Tp);kp(n);try{return(await n.json()).map(qE)}catch{return[]}},jE=async t=>{const e=await ic(HE(t),Tp);kp(e);const n=await e.text(),r=new DOMParser().parseFromString(n,"text/xml"),i=Number(r.getElementsByTagName("posts")[0].getAttribute("count"));return GE(i),i},qE=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,y=t.comment_count,g=t.status,v=t.source;return new LE(s,o,r,Number(y),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),v,g,zE(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},zE=t=>t.map(e=>new Wr(Ip(e.tag),e.count,e.type)).sort((e,n)=>ql(e.type)-ql(n.type)),KE=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${Ep}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},HE=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},GE=t=>{if(!Oi(t))throw new Error("Unexpected response received in getPage")};let WE=class{constructor(e,n,s){QE(e),XE(n),YE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const QE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},YE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},XE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Jl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Zl=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Jl:`${Jl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(JE(a.attributes));return o},JE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new WE(e.value,n.value,s.value)};function ZE(t){let e,n,s,r,i=Ln(t[0].name)+"",o,a,c,l=Ot(t[0].count)+"",u,h,d,p,y;return n=new sc({props:{type:t[0].type}}),{c(){e=_("li"),F(n.$$.fragment),s=R(),r=_("span"),o=ue(i),a=R(),c=_("span"),u=ue(l),f(r,"class","tag-name svelte-eche7i"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-eche7i"),he(e,"selected",t[1])},m(g,v){A(g,e,v),x(n,e,null),m(e,s),m(e,r),m(r,o),m(e,a),m(e,c),m(c,u),d=!0,p||(y=[j(e,"click",t[2]),j(e,"keypress",hn(t[2]))],p=!0)},p(g,[v]){const E={};v&1&&(E.type=g[0].type),n.$set(E),(!d||v&1)&&i!==(i=Ln(g[0].name)+"")&&Te(o,i),(!d||v&1)&&l!==(l=Ot(g[0].count)+"")&&Te(u,l),(!d||v&1&&h!==(h=g[0].name))&&f(e,"title",h),(!d||v&2)&&he(e,"selected",g[1])},i(g){d||(w(n.$$.fragment,g),d=!0)},o(g){I(n.$$.fragment,g),d=!1},d(g){g&&k(e),U(n),p=!1,Se(y)}}}function eT(t,e,n){let{tag:s}=e,{selected:r=!1}=e;const i=ze(),o=()=>i("click",s);return t.$$set=a=>{"tag"in a&&n(0,s=a.tag),"selected"in a&&n(1,r=a.selected)},[s,r,o]}class tT extends X{constructor(e){super(),Y(this,e,eT,ZE,W,{tag:0,selected:1})}}function eu(t,e,n){const s=t.slice();return s[18]=e[n],s[20]=n,s}function nT(t){let e,n,s,r,i=t[21].message+"",o;return{c(){e=_("div"),n=_("i"),s=R(),r=_("span"),o=ue(i),f(n,"class",it("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){A(a,e,c),m(e,n),m(e,s),m(e,r),m(r,o)},p(a,c){c&2&&i!==(i=a[21].message+"")&&Te(o,i)},i:S,o:S,d(a){a&&k(e)}}}function sT(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=tu(eu(t,r,a));const o=a=>I(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=R(),n=_("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);A(a,e,c),A(a,n,c),s=!0},p(a,c){if(c&100){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=eu(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=tu(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(ie(),l=r.length;l<i.length;l+=1)o(l);oe()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)I(i[c]);s=!1},d(a){rn(i,a),a&&k(e),a&&k(n)}}}function tu(t){let e,n;return e=new tT({props:{tag:t[18],selected:t[20]===t[2]}}),e.$on("click",function(){Yr(t[6](t[18]))&&t[6](t[18]).apply(this,arguments)}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){t=s;const i={};r&32&&(i.tag=t[18]),r&4&&(i.selected=t[20]===t[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function rT(t){let e,n,s;return n=new rc({}),{c(){e=_("div"),F(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){A(r,e,i),x(n,e,null),s=!0},p:S,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){I(n.$$.fragment,r),s=!1},d(r){r&&k(e),U(n)}}}function iT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y;o=new PE({}),o.$on("change",t[10]);let g={ctx:t,current:null,token:null,hasCatch:!0,pending:rT,then:sT,catch:nT,error:21,blocks:[,,,]};return Tr(h=t[1],g),{c(){e=_("div"),n=_("i"),s=R(),r=_("input"),i=R(),F(o.$$.fragment),a=R(),c=_("i"),l=R(),u=_("ol"),g.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(c,"tabindex","0"),f(c,"role","button"),f(c,"class","codicon codicon-question spaced svelte-2fyyfo"),f(u,"class","svelte-2fyyfo"),he(u,"open",t[4]),f(e,"class","searchbar svelte-2fyyfo"),he(e,"open",t[4])},m(v,E){A(v,e,E),m(e,n),m(e,s),m(e,r),St(r,t[0]),m(e,i),x(o,e,null),m(e,a),m(e,c),m(e,l),m(e,u),g.block.m(u,g.anchor=null),g.mount=()=>u,g.anchor=null,d=!0,p||(y=[j(r,"input",t[7]),j(r,"blur",t[8]),j(r,"keyup",t[9]),j(c,"click",t[11]),j(c,"keyup",hn(t[12])),j(e,"blur",t[13])],p=!0)},p(v,[E]){t=v,E&1&&r.value!==t[0]&&St(r,t[0]),g.ctx=t,E&2&&h!==(h=t[1])&&Tr(h,g)||Nu(g,t,E),(!d||E&16)&&he(u,"open",t[4]),(!d||E&16)&&he(e,"open",t[4])},i(v){d||(w(o.$$.fragment,v),w(g.block),d=!0)},o(v){I(o.$$.fragment,v);for(let E=0;E<3;E+=1){const L=g.blocks[E];I(L)}d=!1},d(v){v&&k(e),U(o),g.block.d(),g.token=null,g=null,p=!1,Se(y)}}}function oT(t,e,n){let s;xe(t,Ds,N=>n(14,s=N));const r=ze();let i,o="",a=0,c="+",l=!1,u=[];const h=N=>()=>{r("pick",UE(N,c)),p()};async function d(N){n(4,l=!0),n(5,u=[...s.supertags.filter(D=>D.name.toLowerCase().includes(N.toLowerCase())).map(D=>new Wr(D.name,Object.keys(D.tags).length,"supertag")),...await VE(N)])}const p=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function y(){o=this.value,n(0,o)}const g=N=>{(!N.relatedTarget||!N.target.parentNode.contains(N.relatedTarget))&&n(4,l=!1)},v=N=>{_p(N)?h(u.length>a?u[a]:new Wr(o,0,"ambiguous"))():N.code==="ArrowUp"&&u.length>0?n(2,a=(a+u.length-1)%u.length):N.code==="ArrowDown"&&u.length>0&&n(2,a=(a+1)%u.length)},E=N=>{n(3,c=N.detail)},L=()=>Ft.navigateTo("help"),C=()=>Ft.navigateTo("help"),z=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(5,u=[]),n(2,a=0),o!==""&&n(1,i=d(o)))},[o,i,a,c,l,u,h,y,g,v,E,L,C,z]}class aT extends X{constructor(e){super(),Y(this,e,oT,iT,W,{})}}const Sp=JSON.parse,Ap=JSON.stringify,Cp=(t,e,n=Ap,s=Sp)=>{const r=Dp(t,s),i=Rs(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},Li=(t,e,n=Ap,s=Sp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Dp(t,s):null,o=Rs(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Dp=(t,e)=>{try{return e(localStorage.getItem(t))}catch{return null}};function cT(){const t=[],{subscribe:e,update:n,set:s}=Li("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Mi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const gt=cT();function nu(t){let e,n;return e=new sc({props:{type:t[0].type}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function lT(t){let e,n,s=Ln(t[0].name)+"",r,i,o,a,c,l=t[2]&&nu(t);return{c(){e=_("li"),l&&l.c(),n=R(),r=ue(s),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to add tag"),f(e,"class",i=it(t[0].type)+" svelte-15395as"),he(e,"active",t[3]),he(e,"supertag",t[4]),he(e,"icon",t[2])},m(u,h){A(u,e,h),l&&l.m(e,null),m(e,n),m(e,r),o=!0,a||(c=j(e,"click",function(){Yr(t[4]?su:t[8])&&(t[4]?su:t[8]).apply(this,arguments)}),a=!0)},p(u,[h]){t=u,t[2]?l?(l.p(t,h),h&4&&w(l,1)):(l=nu(t),l.c(),w(l,1),l.m(e,n)):l&&(ie(),I(l,1,1,()=>{l=null}),oe()),(!o||h&1)&&s!==(s=Ln(t[0].name)+"")&&Te(r,s),(!o||h&1&&i!==(i=it(t[0].type)+" svelte-15395as"))&&f(e,"class",i),(!o||h&9)&&he(e,"active",t[3]),(!o||h&17)&&he(e,"supertag",t[4]),(!o||h&5)&&he(e,"icon",t[2])},i(u){o||(w(l),o=!0)},o(u){I(l),o=!1},d(u){u&&k(e),l&&l.d(),a=!1,c()}}}const su=()=>{};function uT(t,e,n){let s,r,i,o,a,c,l;xe(t,gt,d=>n(6,c=d)),xe(t,Ds,d=>n(7,l=d));let{tag:u}=e;const h=()=>o?gt.removeByIndex(r):gt.addByName(u.name);return t.$$set=d=>{"tag"in d&&n(0,u=d.tag)},t.$$.update=()=>{t.$$.dirty&192&&n(5,s=l.supertags.filter(d=>c.find(p=>d.name===p.name)).flatMap(d=>d.tags)),t.$$.dirty&65&&n(1,r=c.findIndex(d=>d.name===u.name)),t.$$.dirty&33&&n(4,i=s.find(d=>d.name===u.name)!==void 0),t.$$.dirty&2&&n(3,o=r>=0),t.$$.dirty&1&&n(2,a=vE(u.type))},[u,r,a,o,i,s,c,l,h]}class hT extends X{constructor(e){super(),Y(this,e,uT,lT,W,{tag:0})}}function dT(t){let e,n,s,r,i;return{c(){e=_("i"),n=R(),s=_("a"),r=ue(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,r)},p(o,[a]){a&2&&Te(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:S,o:S,d(o){o&&k(e),o&&k(n),o&&k(s)}}}function fT(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class pT extends X{constructor(e){super(),Y(this,e,fT,dT,W,{url:0})}}function gT(t){let e,n,s,r;return{c(){e=_("i"),n=R(),s=_("span"),r=ue(t[0]),f(e,"class","codicon codicon-link")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),m(s,r)},p(i,o){o&1&&Te(r,i[0])},i:S,o:S,d(i){i&&k(e),i&&k(n),i&&k(s)}}}function mT(t){let e,n;return e=new pT({props:{url:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function yT(t){let e,n,s,r;const i=[mT,gT],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=ct()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ie(),I(o[u],1,1,()=>{o[u]=null}),oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function vT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=bp(r)?new URL(r):null)},[r,s]}class _T extends X{constructor(e){super(),Y(this,e,vT,yT,W,{source:0})}}function wT(t){let e,n;const s=t[1].default,r=Mp(s,t,t[0],null);return{c(){e=_("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){A(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&xp(r,s,i,i[0],n?Lp(s,i[0],o,null):Up(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){I(r,i),n=!1},d(i){i&&k(e),r&&r.d(i)}}}function bT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Er extends X{constructor(e){super(),Y(this,e,bT,wT,W,{})}}const ru=6e4,Qr=t=>{if(!IT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/ru,s=new Date().getTime()/ru-e;if(s<1)return"just now";if(s<60)return mn(s,"minute");const r=s/60;if(r<24)return mn(r,"hour");const i=r/24;if(i<7)return mn(i,"day");if(i<30.5)return mn(i/7,"week");if(i<365.25)return mn(i/30.5,"month");const o=i/365.25;return mn(o,"year")},IT=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",mn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function ET(t){let e,n,s,r=Qr(t[0])+"",i;return{c(){e=_("i"),n=R(),s=_("span"),i=ue(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,i)},p(o,[a]){a&1&&r!==(r=Qr(o[0])+"")&&Te(i,r)},i:S,o:S,d(o){o&&k(e),o&&k(n),o&&k(s)}}}function TT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class kT extends X{constructor(e){super(),Y(this,e,TT,ET,W,{value:0})}}function ST(t){let e,n,s,r=Ot(t[0])+"",i;return{c(){e=_("i"),n=R(),s=_("span"),i=ue(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,i)},p(o,[a]){a&1&&r!==(r=Ot(o[0])+"")&&Te(i,r)},i:S,o:S,d(o){o&&k(e),o&&k(n),o&&k(s)}}}function AT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class CT extends X{constructor(e){super(),Y(this,e,AT,ST,W,{value:0})}}function DT(t){let e,n,s=t[0].author+"",r,i,o,a=Qr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=_("div"),n=_("span"),r=ue(s),i=R(),o=_("span"),c=ue(a),l=R(),u=_("span"),d=ue(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,y){A(p,e,y),m(e,n),m(n,r),m(e,i),m(e,o),m(o,c),m(e,l),m(e,u),m(u,d)},p(p,[y]){y&1&&s!==(s=p[0].author+"")&&Te(r,s),y&1&&a!==(a=Qr(p[0].createdAt)+"")&&Te(c,a),y&1&&h!==(h=p[0].content+"")&&Te(d,h)},i:S,o:S,d(p){p&&k(e)}}}function NT(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class RT extends X{constructor(e){super(),Y(this,e,NT,DT,W,{comment:0})}}function $T(t){let e,n,s,r;return{c(){e=_("i"),n=R(),s=_("a"),r=ue("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),m(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:S,o:S,d(i){i&&k(e),i&&k(n),i&&k(s)}}}function OT(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class PT extends X{constructor(e){super(),Y(this,e,OT,$T,W,{url:0})}}function iu(t,e,n){const s=t.slice();return s[8]=e[n],s}function ou(t,e,n){const s=t.slice();return s[4]=e[n],s}function au(t){let e,n,s,r,i;return{c(){e=_("i"),n=R(),s=_("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),he(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),he(s,"active",t[1]==="comments")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),r||(i=[j(e,"click",t[2]),j(s,"click",t[3])],r=!0)},p(o,a){a&2&&he(e,"active",o[1]==="tags"),a&2&&he(s,"active",o[1]==="comments")},d(o){o&&k(e),o&&k(n),o&&k(s),r=!1,Se(i)}}}function MT(t){let e,n;return e=new kT({props:{value:t[0].change}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function LT(t){let e,n;return e=new CT({props:{value:t[0].score}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function xT(t){let e,n;return e=new PT({props:{url:t[0].file_url}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function cu(t){let e,n;return e=new Er({props:{$$slots:{default:[UT]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function UT(t){let e,n;return e=new _T({props:{source:t[0].source}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function FT(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:KT,then:jT,catch:BT,value:7,blocks:[,,,]};return Tr(n=Zl(t[0].id),r),{c(){e=ct(),r.block.c()},m(i,o){A(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=Zl(t[0].id))&&Tr(n,r)||Nu(r,t,o)},i(i){s||(w(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];I(a)}s=!1},d(i){i&&k(e),r.block.d(i),r.token=null,r=null}}}function VT(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=uu(ou(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=ou(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=uu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ie(),c=s.length;c<r.length;c+=1)i(c);oe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&k(e),rn(r,o)}}}function BT(t){return{c:S,m:S,p:S,i:S,o:S,d:S}}function jT(t){let e,n,s,r;const i=[zT,qT],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=ct()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ie(),I(o[u],1,1,()=>{o[u]=null}),oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function qT(t){let e;return{c(){e=_("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){A(n,e,s)},p:S,i:S,o:S,d(n){n&&k(e)}}}function zT(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=lu(iu(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=iu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=lu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ie(),c=s.length;c<r.length;c+=1)i(c);oe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&k(e),rn(r,o)}}}function lu(t){let e,n;return e=new RT({props:{comment:t[8]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function KT(t){let e,n;return e=new rc({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function uu(t){let e,n;return e=new hT({props:{tag:t[4]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function HT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y=t[0].comment_count>0&&au(t);r=new Er({props:{$$slots:{default:[MT]},$$scope:{ctx:t}}}),o=new Er({props:{$$slots:{default:[LT]},$$scope:{ctx:t}}}),c=new Er({props:{$$slots:{default:[xT]},$$scope:{ctx:t}}});let g=t[0].source&&cu(t);const v=[VT,FT],E=[];function L(C,z){return C[1]==="tags"?0:1}return h=L(t),d=E[h]=v[h](t),{c(){e=_("div"),n=_("div"),y&&y.c(),s=R(),F(r.$$.fragment),i=R(),F(o.$$.fragment),a=R(),F(c.$$.fragment),l=R(),g&&g.c(),u=R(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(C,z){A(C,e,z),m(e,n),y&&y.m(n,null),m(n,s),x(r,n,null),m(n,i),x(o,n,null),m(n,a),x(c,n,null),m(n,l),g&&g.m(n,null),m(e,u),E[h].m(e,null),p=!0},p(C,[z]){C[0].comment_count>0?y?y.p(C,z):(y=au(C),y.c(),y.m(n,s)):y&&(y.d(1),y=null);const N={};z&2049&&(N.$$scope={dirty:z,ctx:C}),r.$set(N);const D={};z&2049&&(D.$$scope={dirty:z,ctx:C}),o.$set(D);const Q={};z&2049&&(Q.$$scope={dirty:z,ctx:C}),c.$set(Q),C[0].source?g?(g.p(C,z),z&1&&w(g,1)):(g=cu(C),g.c(),w(g,1),g.m(n,null)):g&&(ie(),I(g,1,1,()=>{g=null}),oe());let me=h;h=L(C),h===me?E[h].p(C,z):(ie(),I(E[me],1,1,()=>{E[me]=null}),oe(),d=E[h],d?d.p(C,z):(d=E[h]=v[h](C),d.c()),w(d,1),d.m(e,null))},i(C){p||(w(r.$$.fragment,C),w(o.$$.fragment,C),w(c.$$.fragment,C),w(g),w(d),p=!0)},o(C){I(r.$$.fragment,C),I(o.$$.fragment,C),I(c.$$.fragment,C),I(g),I(d),p=!1},d(C){C&&k(e),y&&y.d(),U(r),U(o),U(c),g&&g.d(),E[h].d()}}}function GT(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class WT extends X{constructor(e){super(),Y(this,e,GT,HT,W,{post:0})}}const xn=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function QT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"tabindex","0"),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=[j(e,"click",t[4]),j(e,"keyup",hn(t[5]))],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:S,o:S,d(l){l&&k(e),t[3](null),a=!1,Se(c)}}}function YT(t,e,n){let{post:s}=e;const r=ze();let i;Ns(()=>xn.observe(i)),Jr(()=>xn.unobserve(i));function o(l){An[l?"unshift":"push"](()=>{i=l,n(1,i)})}const a=()=>r("click"),c=()=>r("click");return t.$$set=l=>{"post"in l&&n(0,s=l.post)},[s,i,r,o,a,c]}let XT=class extends X{constructor(e){super(),Y(this,e,YT,QT,W,{post:0})}};function JT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].file_url),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",r=t[0].width),f(e,"height",i=t[0].height),e.controls=!0,e.loop=o=t[0].tags.some(hu),f(e,"tabindex","0"),f(e,"class","svelte-1gwvoya")},m(l,u){A(l,e,u),t[5](e),a||(c=[j(e,"click",zo(t[4])),j(e,"touchstart",t[2],{passive:!0}),j(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&r!==(r=l[0].width)&&f(e,"width",r),u&1&&i!==(i=l[0].height)&&f(e,"height",i),u&1&&o!==(o=l[0].tags.some(hu))&&(e.loop=o)},i:S,o:S,d(l){l&&k(e),t[5](null),a=!1,Se(c)}}}const hu=t=>t.name=="loop";function ZT(t,e,n){let{post:s}=e;const r=ze();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};Ns(()=>xn.observe(i)),Jr(()=>xn.unobserve(i));function l(h){qp.call(this,t,h)}function u(h){An[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},[s,i,a,c,l,u]}class e1 extends X{constructor(e){super(),Y(this,e,ZT,JT,W,{post:0})}}const t1="/assets/play-f2f6faca.svg",n1="/assets/load-8440afed.svg",s1="/assets/pause-6f7851a2.svg";function r1(t){let e,n;return{c(){e=_("img"),Yt(e.src,n=t1)||f(e,"src",n),f(e,"alt","Start GIF"),f(e,"width","16"),f(e,"height","32"),Bp(e,"margin-left","4px")},m(s,r){A(s,e,r)},p:S,d(s){s&&k(e)}}}function i1(t){let e,n;return{c(){e=_("img"),Yt(e.src,n=s1)||f(e,"src",n),f(e,"alt","Stop GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:S,d(s){s&&k(e)}}}function o1(t){let e,n;return{c(){e=_("img"),Yt(e.src,n=n1)||f(e,"src",n),f(e,"alt","Loading GIF"),f(e,"width","16"),f(e,"height","32")},m(s,r){A(s,e,r)},p:S,d(s){s&&k(e)}}}function a1(t){let e,n,s,r,i,o,a,c,l,u,h;function d(g,v){return g[3]?o1:g[1]?i1:r1}let p=d(t),y=p(t);return{c(){e=_("div"),n=_("img"),a=R(),c=_("button"),l=_("div"),y.c(),f(n,"class","media-img svelte-2oxidf"),f(n,"loading","lazy"),f(n,"data-src",t[4]),f(n,"alt",s=t[0].id.toString()),f(n,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(n,"width",i=t[0].width),f(n,"height",o=t[0].height),f(n,"tabindex","0"),f(l,"class","circle svelte-2oxidf"),f(c,"class","svelte-2oxidf"),he(c,"play",t[1]&&!t[3]),f(e,"class","container svelte-2oxidf")},m(g,v){A(g,e,v),m(e,n),t[9](n),m(e,a),m(e,c),m(c,l),y.m(l,null),u||(h=[j(n,"click",t[10]),j(n,"keyup",hn(t[11])),j(n,"load",t[12]),j(c,"click",t[6])],u=!0)},p(g,[v]){v&16&&f(n,"data-src",g[4]),v&1&&s!==(s=g[0].id.toString())&&f(n,"alt",s),v&1&&r!==(r=`aspect-ratio: ${g[0].width} / ${g[0].height}`)&&f(n,"style",r),v&1&&i!==(i=g[0].width)&&f(n,"width",i),v&1&&o!==(o=g[0].height)&&f(n,"height",o),p===(p=d(g))&&y?y.p(g,v):(y.d(1),y=p(g),y&&(y.c(),y.m(l,null))),v&10&&he(c,"play",g[1]&&!g[3])},i:S,o:S,d(g){g&&k(e),t[9](null),y.d(),u=!1,Se(h)}}}function c1(t,e,n){let s,r,i,{post:o}=e;const a=ze();let c,l=!1,u=!1;const h=()=>{n(3,u=!0),n(1,l=!l),n(2,c.src=l?r:s,c)};Ns(()=>xn.observe(c)),Jr(()=>xn.unobserve(c));function d(v){An[v?"unshift":"push"](()=>{c=v,n(2,c)})}const p=()=>a("click"),y=()=>a("click"),g=()=>n(3,u=!1);return t.$$set=v=>{"post"in v&&n(0,o=v.post)},t.$$.update=()=>{t.$$.dirty&1&&n(7,s=o.sample_url.endsWith(".gif")?o.preview_url:o.sample_url),t.$$.dirty&1&&n(8,r=o.sample_url.endsWith(".gif")?o.sample_url:o.file_url),t.$$.dirty&386&&n(4,i=l?r:s)},[o,l,c,u,i,a,h,s,r,d,p,y,g]}class l1 extends X{constructor(e){super(),Y(this,e,c1,a1,W,{post:0})}}function u1(t){let e,n;return e=new l1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function h1(t){let e,n;return e=new e1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function d1(t){let e,n;return e=new XT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function du(t){let e,n;return e=new WT({props:{post:t[0]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function f1(t){let e,n,s,r,i;const o=[d1,h1,u1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&du(t);return{c(){e=_("div"),s.c(),r=R(),l&&l.c(),f(e,"class","post svelte-1b8286y")},m(u,h){A(u,e,h),a[n].m(e,null),m(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ie(),I(a[d],1,1,()=>{a[d]=null}),oe(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=du(u),l.c(),w(l,1),l.m(e,null)):l&&(ie(),I(l,1,1,()=>{l=null}),oe())},i(u){i||(w(s),w(l),i=!0)},o(u){I(s),I(l),i=!1},d(u){u&&k(e),a[n].d(),l&&l.d()}}}function p1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class g1 extends X{constructor(e){super(),Y(this,e,p1,f1,W,{post:0})}}function fu(t,e,n){const s=t.slice();return s[1]=e[n],s}function pu(t){let e,n;return e=new g1({props:{post:t[1]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function m1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=pu(fu(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=fu(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=pu(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(ie(),c=s.length;c<r.length;c+=1)i(c);oe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&k(e),rn(r,o)}}}function y1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class v1 extends X{constructor(e){super(),Y(this,e,y1,m1,W,{posts:0})}}function _1(t){let e;return{c(){e=_("div")},m(n,s){A(n,e,s),t[1](e)},p:S,i:S,o:S,d(n){n&&k(e),t[1](null)}}}function w1(t,e,n){const s=ze(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){An[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class b1 extends X{constructor(e){super(),Y(this,e,w1,_1,W,{})}}const I1="/assets/shironeko-x-c28cad00.png";function E1(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=R(),i=_("span"),i.textContent="You have reached the end",Yt(n.src,s=I1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){A(o,e,a),m(e,n),m(e,r),m(e,i)},p:S,i:S,o:S,d(o){o&&k(e)}}}class T1 extends X{constructor(e){super(),Y(this,e,null,E1,W,{})}}const k1="/assets/shironeko-confused-4071d5b2.png";function S1(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=R(),i=_("span"),i.textContent="No results found",Yt(n.src,s=k1)||f(n,"src",s),f(n,"alt","No results"),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){A(o,e,a),m(e,n),m(e,r),m(e,i)},p:S,i:S,o:S,d(o){o&&k(e)}}}class A1 extends X{constructor(e){super(),Y(this,e,null,S1,W,{})}}const gu=()=>({pages:[],nextPage:0,ids:new Set}),C1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},D1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},N1=()=>{const{subscribe:t,update:e,set:n}=Li("results",gu(),C1,D1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(gu())}}},ns=N1(),R1=()=>{const{subscribe:t,set:e}=Li("count",null);return{subscribe:t,set:e,reset(){e(0)}}},oc=R1(),$1={sortProperty:"id",minScore:0,sortDirection:"desc"},O1=()=>{const{subscribe:t,set:e}=Cp("sort",$1);return{subscribe:t,set:e}},ss=O1();function mu(t){let e,n,s;return{c(){e=_("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-2sq82w")},m(r,i){A(r,e,i),St(e,t[1]),n||(s=[j(e,"input",t[11]),j(e,"keyup",hn(M1)),j(e,"blur",t[12])],n=!0)},p(r,i){i&2&&Du(e.value)!==r[1]&&St(e,r[1])},d(r){r&&k(e),n=!1,Se(s)}}}function P1(t){let e,n,s=Ot(t[3])+"",r,i,o,a,c,l,u,h,d,p,y,g,v,E,L,C,z,N,D,Q,me,Fe,G,lt,J,ae,Ce,le,Gn,xi,cc,Ve=t[0]==="custom"&&mu(t);return{c(){e=_("div"),n=_("span"),r=ue(s),i=ue(" results"),a=R(),c=_("div"),l=_("i"),u=R(),h=_("select"),d=_("option"),d.textContent="Upload",p=_("option"),p.textContent="Score",y=_("option"),y.textContent="Change",g=R(),v=_("div"),E=_("i"),L=R(),C=_("select"),z=_("option"),z.textContent="Desc",N=_("option"),N.textContent="Asc",D=R(),Q=_("div"),me=_("i"),Fe=R(),G=_("select"),lt=_("option"),lt.textContent="Unfiltered",J=_("option"),J.textContent="Score > 10",ae=_("option"),ae.textContent="Score > 100",Ce=_("option"),Ce.textContent="Score > 1K",le=_("option"),le.textContent="Custom",Gn=R(),Ve&&Ve.c(),f(n,"title",o=`${t[3]} results`),f(n,"class","svelte-2sq82w"),f(l,"class","codicon codicon-list-ordered svelte-2sq82w"),d.__value="id",d.value=d.__value,f(d,"class","svelte-2sq82w"),p.__value="score",p.value=p.__value,f(p,"class","svelte-2sq82w"),y.__value="updated",y.value=y.__value,f(y,"class","svelte-2sq82w"),f(h,"class","select-sort-property svelte-2sq82w"),f(h,"title","Sort results by"),t[2].sortProperty===void 0&&In(()=>t[5].call(h)),f(c,"class","group svelte-2sq82w"),f(E,"class","codicon codicon-arrow-swap svelte-2sq82w"),z.__value="desc",z.value=z.__value,f(z,"class","svelte-2sq82w"),N.__value="asc",N.value=N.__value,f(N,"class","svelte-2sq82w"),f(C,"class","select-sort-direction svelte-2sq82w"),f(C,"title","Order ascening or descenfing"),t[2].sortDirection===void 0&&In(()=>t[7].call(C)),f(v,"class","group svelte-2sq82w"),f(me,"class","codicon codicon-filter svelte-2sq82w"),lt.__value=0,lt.value=lt.__value,f(lt,"class","svelte-2sq82w"),J.__value=10,J.value=J.__value,f(J,"class","svelte-2sq82w"),ae.__value=100,ae.value=ae.__value,f(ae,"class","svelte-2sq82w"),Ce.__value=1e3,Ce.value=Ce.__value,f(Ce,"class","svelte-2sq82w"),le.__value="custom",le.value=le.__value,f(le,"class","svelte-2sq82w"),f(G,"title","Filter by score"),f(G,"class","svelte-2sq82w"),t[0]===void 0&&In(()=>t[9].call(G)),f(Q,"class","group svelte-2sq82w"),f(e,"class","container svelte-2sq82w")},m(Ke,bt){A(Ke,e,bt),m(e,n),m(n,r),m(n,i),m(e,a),m(e,c),m(c,l),m(c,u),m(c,h),m(h,d),m(h,p),m(h,y),fn(h,t[2].sortProperty,!0),m(e,g),m(e,v),m(v,E),m(v,L),m(v,C),m(C,z),m(C,N),fn(C,t[2].sortDirection,!0),m(e,D),m(e,Q),m(Q,me),m(Q,Fe),m(Q,G),m(G,lt),m(G,J),m(G,ae),m(G,Ce),m(G,le),fn(G,t[0],!0),m(e,Gn),Ve&&Ve.m(e,null),xi||(cc=[j(h,"change",t[5]),j(h,"change",t[6]),j(C,"change",t[7]),j(C,"change",t[8]),j(G,"change",t[9]),j(G,"change",t[10])],xi=!0)},p(Ke,[bt]){bt&8&&s!==(s=Ot(Ke[3])+"")&&Te(r,s),bt&8&&o!==(o=`${Ke[3]} results`)&&f(n,"title",o),bt&4&&fn(h,Ke[2].sortProperty),bt&4&&fn(C,Ke[2].sortDirection),bt&1&&fn(G,Ke[0]),Ke[0]==="custom"?Ve?Ve.p(Ke,bt):(Ve=mu(Ke),Ve.c(),Ve.m(e,null)):Ve&&(Ve.d(1),Ve=null)},i:S,o:S,d(Ke){Ke&&k(e),Ve&&Ve.d(),xi=!1,Se(cc)}}}const M1=t=>t.target.blur();function L1(t,e,n){let s,r;xe(t,ss,v=>n(2,s=v)),xe(t,oc,v=>n(3,r=v));const i=ze();let o=0,a=0;function c(){s.sortProperty=Ui(this),ss.set(s)}const l=()=>i("configchange");function u(){s.sortDirection=Ui(this),ss.set(s)}const h=()=>i("configchange");function d(){o=Ui(this),n(0,o)}const p=()=>{o!=="custom"&&i("configchange")};function y(){a=Du(this.value),n(1,a)}const g=()=>i("configchange");return t.$$.update=()=>{t.$$.dirty&3&&Fp(ss,s.minScore=o!=="custom"?o:a,s)},[o,a,s,r,i,c,l,u,h,d,p,y,g]}class x1 extends X{constructor(e){super(),Y(this,e,L1,P1,W,{})}}function yu(t,e,n){const s=t.slice();return s[7]=e[n],s}function U1(t){let e,n;return e=new A1({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function F1(t){let e,n,s,r,i,o,a,c;e=new x1({});let l=t[1].pages,u=[];for(let g=0;g<l.length;g+=1)u[g]=vu(yu(t,l,g));const h=g=>I(u[g],1,1,()=>{u[g]=null}),d=[B1,V1],p=[];function y(g,v){return g[3]?0:1}return i=y(t),o=p[i]=d[i](t),{c(){F(e.$$.fragment),n=R(),s=_("ol");for(let g=0;g<u.length;g+=1)u[g].c();r=R(),o.c(),a=ct(),f(s,"class","svelte-dsypei")},m(g,v){x(e,g,v),A(g,n,v),A(g,s,v);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(s,null);A(g,r,v),p[i].m(g,v),A(g,a,v),c=!0},p(g,v){if(v&2){l=g[1].pages;let L;for(L=0;L<l.length;L+=1){const C=yu(g,l,L);u[L]?(u[L].p(C,v),w(u[L],1)):(u[L]=vu(C),u[L].c(),w(u[L],1),u[L].m(s,null))}for(ie(),L=l.length;L<u.length;L+=1)h(L);oe()}let E=i;i=y(g),i===E?p[i].p(g,v):(ie(),I(p[E],1,1,()=>{p[E]=null}),oe(),o=p[i],o?o.p(g,v):(o=p[i]=d[i](g),o.c()),w(o,1),o.m(a.parentNode,a))},i(g){if(!c){w(e.$$.fragment,g);for(let v=0;v<l.length;v+=1)w(u[v]);w(o),c=!0}},o(g){I(e.$$.fragment,g),u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)I(u[v]);I(o),c=!1},d(g){U(e,g),g&&k(n),g&&k(s),rn(u,g),g&&k(r),p[i].d(g),g&&k(a)}}}function vu(t){let e,n;return e=new v1({props:{posts:t[7]}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.posts=s[7]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function V1(t){let e,n;return e=new T1({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function B1(t){let e,n;return e=new b1({}),e.$on("visible",t[6]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function j1(t){let e,n,s,r;const i=[F1,U1],o=[];function a(c,l){return c[0]?0:c[2]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=ct()},m(c,l){~e&&o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ie(),I(o[u],1,1,()=>{o[u]=null}),oe()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){I(n),r=!1},d(c){~e&&o[e].d(c),c&&k(s)}}}function q1(t,e,n){let s,r,i,o,a;xe(t,oc,u=>n(0,o=u)),xe(t,ns,u=>n(1,a=u));const c=ze(),l=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o/Ep),t.$$.dirty&34&&n(3,r=a.pages.length<s),t.$$.dirty&1&&n(2,i=o===0)},[o,a,i,r,c,s,l]}class z1 extends X{constructor(e){super(),Y(this,e,q1,j1,W,{})}}function K1(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),he(e,"visible",t[0])},m(r,i){A(r,e,i),n||(s=j(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&he(e,"visible",r[0])},i:S,o:S,d(r){r&&k(e),n=!1,s()}}}function H1(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Ns(()=>{document.addEventListener("scroll",i,{passive:!0})}),Jr(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class G1 extends X{constructor(e){super(),Y(this,e,H1,K1,W,{})}}function W1(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=_("div"),n=_("div"),s=_("i"),i=R(),o=_("div"),a=_("h3"),c=ue(t[2]),l=R(),u=_("span"),h=ue(t[1]),f(s,"class",r=it(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){A(d,e,p),m(e,n),m(n,s),m(e,i),m(e,o),m(o,a),m(a,c),m(o,l),m(o,u),m(u,h)},p(d,[p]){p&1&&r!==(r=it(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Te(c,d[2]),p&2&&Te(h,d[1])},i:S,o:S,d(d){d&&k(e)}}}function Q1(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Np extends X{constructor(e){super(),Y(this,e,Q1,W1,W,{icon:0,message:1,title:2})}}function Y1(t){let e;return{c(){e=_("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){A(n,e,s)},p:S,i:S,o:S,d(n){n&&k(e)}}}class X1 extends X{constructor(e){super(),Y(this,e,null,Y1,W,{})}}function _u(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function wu(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=bu(_u(t,r,c));const o=c=>I(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&Iu(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=R(),a&&a.c(),n=ct()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);A(c,e,l),a&&a.m(c,l),A(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=_u(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=bu(h),i[u].c(),w(i[u],1),i[u].m(e.parentNode,e))}for(ie(),u=r.length;u<i.length;u+=1)o(u);oe()}c[0].length>1?a?a.p(c,l):(a=Iu(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)I(i[l]);s=!1},d(c){rn(i,c),c&&k(e),a&&a.d(c),c&&k(n)}}}function bu(t){let e,n;function s(){return t[2](t[7])}function r(){return t[3](t[5])}return e=new wp({props:{tag:t[5]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){F(e.$$.fragment)},m(i,o){x(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[5]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){I(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Iu(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1uhy4lk"></i>',f(e,"class","add-supertag svelte-1uhy4lk"),f(e,"title","Click to create a new supertag")},m(r,i){A(r,e,i),n||(s=j(e,"click",t[4]),n=!0)},p:S,d(r){r&&k(e),n=!1,s()}}}function J1(t){let e,n,s=t[0].length&&wu(t);return{c(){e=_("ul"),s&&s.c(),f(e,"class","svelte-1uhy4lk")},m(r,i){A(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&w(s,1)):(s=wu(r),s.c(),w(s,1),s.m(e,null)):s&&(ie(),I(s,1,1,()=>{s=null}),oe())},i(r){n||(w(s),n=!0)},o(r){I(s),n=!1},d(r){r&&k(e),s&&s.d()}}}function Z1(t,e,n){let s;xe(t,gt,c=>n(0,s=c));const r=ze();return[s,r,c=>gt.removeByIndex(c),c=>gt.addOrReplace(new Mi(fp(c.modifier),c.name,c.count,c.type)),()=>r("supertag")]}class ek extends X{constructor(e){super(),Y(this,e,Z1,J1,W,{})}}const Kk=Object.freeze(["Loli","Animal-Related","Non-Consentual"]),tk=Object.freeze({Loli:Object.freeze(["young","younger","younger_*","young_*","lolita_*","loli*"]),"Animal-Related":Object.freeze(["zoophilia","zoo","canine*","equine*","feral_*","*_feral","bestiality*","zoophilia*","animal"]),"Non-Consentual":Object.freeze(["captive","captured","defeated","rape","*_rape","rape_*","*_slave","no_consent","molestation","non-consensual","non-con","scared","forced"])});class nk{constructor(){this.pid=0,this.tags=[],this.blockedContent=[],this.sortProperty="id",this.sortDirection="desc",this.minScore=0,this.tagString=null}withPid(e){return this.pid=e,this}withTags(e){return this.tags=e,this}withSupertags(e){return this.supertags=e,this}withSortProperty(e){return this.sortProperty=e,this}withSortDirection(e){return this.sortDirection=e,this}withMinScore(e){return this.minScore=e,this}withBlockedContent(e){return this.blockedContent=e,this}async getPageAndCount(){return this.tagString=ao(this.tags,this.sortProperty,this.sortDirection,this.minScore,this.blockedContent,this.supertags),Promise.all([this.getPage(),this.getCount()])}async getPage(){return this.tagString||(this.tagString=ao(this.tags,this.sortProperty,this.sortDirection,this.minScore,this.blockedContent,this.supertags)),BE(this.pid,this.tagString)}async getCount(){return this.tagString||(this.tagString=ao(this.tags,this.sortProperty,this.sortDirection,this.minScore,this.blockedContent,this.supertags)),jE(this.tagString)}}const Eu=()=>new nk,ao=(t,e,n,s,r,i)=>{const o=t.filter(u=>u.type==="supertag"),a=t.filter(u=>u.type!=="supertag"),c=[`score:>=${s}`,`sort:${e}:${n}`];if(a.length>0){const u=co(a.map(h=>mp(h)));c.push(u)}if(o.length>0){const u=o.map(h=>i.find(d=>h.name===d.name).tags).map(h=>`${co(h)}`).join("+");c.push(u)}if(r.length>0){const u=r.flatMap(d=>tk[d]).map(d=>new Pi("-",d)),h=co(u);c.push(h)}const l=c.join("+");return console.log("searching for",l),l},co=t=>{const e=sk(t);let n=[...Tu([...e["+"],...e["-"]])];return e["~"].length>0&&n.push(`( ${Tu(e["~"]).join(" ~ ")} )`),n.join("+")},sk=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Tu=t=>t.map(e=>e.serialize()),rk=()=>{const t=[],{subscribe:e,update:n}=Li("blockedContent",t);return{subscribe:e,toggle(s){n(r=>r.includes(s)?r.filter(i=>i!==s):[...r,s])}}},ik=rk();function ok(t){let e,n;return e=new z1({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ak(t){let e,n,s,r;const i=[lk,ck],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=ct()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ie(),I(o[u],1,1,()=>{o[u]=null}),oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function ck(t){let e,n;return e=new Np({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function lk(t){let e,n;return e=new Np({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function ku(t){let e,n;return e=new RE({props:{tags:t[2]}}),e.$on("submit",t[7]),e.$on("close",t[8]),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function uk(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,v,E;n=new X1({}),r=new aT({}),r.$on("pick",t[5]),o=new ek({}),o.$on("supertag",t[6]),l=new vp({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const L=[ak,ok],C=[];function z(D,Q){return D[1]!==void 0?0:1}h=z(t),d=C[h]=L[h](t),y=new G1({});let N=t[0]&&ku(t);return{c(){e=_("div"),F(n.$$.fragment),s=R(),F(r.$$.fragment),i=R(),F(o.$$.fragment),a=R(),c=_("div"),F(l.$$.fragment),u=R(),d.c(),p=R(),F(y.$$.fragment),g=R(),N&&N.c(),v=ct(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,Q){A(D,e,Q),x(n,e,null),m(e,s),x(r,e,null),m(e,i),x(o,e,null),m(e,a),m(e,c),x(l,c,null),A(D,u,Q),C[h].m(D,Q),A(D,p,Q),x(y,D,Q),A(D,g,Q),N&&N.m(D,Q),A(D,v,Q),E=!0},p(D,[Q]){let me=h;h=z(D),h===me?C[h].p(D,Q):(ie(),I(C[me],1,1,()=>{C[me]=null}),oe(),d=C[h],d?d.p(D,Q):(d=C[h]=L[h](D),d.c()),w(d,1),d.m(p.parentNode,p)),D[0]?N?(N.p(D,Q),Q&1&&w(N,1)):(N=ku(D),N.c(),w(N,1),N.m(v.parentNode,v)):N&&(ie(),I(N,1,1,()=>{N=null}),oe())},i(D){E||(w(n.$$.fragment,D),w(r.$$.fragment,D),w(o.$$.fragment,D),w(l.$$.fragment,D),w(d),w(y.$$.fragment,D),w(N),E=!0)},o(D){I(n.$$.fragment,D),I(r.$$.fragment,D),I(o.$$.fragment,D),I(l.$$.fragment,D),I(d),I(y.$$.fragment,D),I(N),E=!1},d(D){D&&k(e),U(n),U(r),U(o),U(l),D&&k(u),C[h].d(D),D&&k(p),U(y,D),D&&k(g),N&&N.d(D),D&&k(v)}}}function hk(t,e,n){let s,r,i,o,a;xe(t,ik,E=>n(10,s=E)),xe(t,ss,E=>n(11,r=E)),xe(t,Ds,E=>n(12,i=E)),xe(t,gt,E=>n(2,o=E)),xe(t,ns,E=>n(13,a=E));let c=!1,l,u=!1;return[c,l,o,async()=>{n(1,l=void 0),u=!0,ns.reset();try{const[E,L]=await Eu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withMinScore(r.minScore).withBlockedContent(s).getPageAndCount();ns.addPage(E),oc.set(L)}catch(E){n(1,l=E),console.warn(E)}finally{u=!1}},async()=>{if(!u){n(1,l=void 0),u=!0;try{const E=await Eu().withPid(a.nextPage).withTags(o).withSupertags(i.supertags).withSortProperty(r.sortProperty).withSortDirection(r.sortDirection).withMinScore(r.minScore).withBlockedContent(s).getPage();ns.addPage(E)}catch(E){n(1,l=E),console.warn(E)}finally{u=!1}}},E=>gt.addOrReplace(E.detail),()=>{n(0,c=!0)},E=>{Ds.addSupertag(E.detail),gt.set([new Mi("+",E.detail.name,E.detail.tags.length,"supertag")])},()=>{n(0,c=!1)}]}class dk extends X{constructor(e){super(),Y(this,e,hk,uk,W,{})}}function fk(t){let e,n;return e=new rc({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:S,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function pk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=uc(r,i())),{c(){e&&F(e.$$.fragment),n=ct()},m(o,a){e&&x(e,o,a),A(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ie();const c=e;I(c.$$.fragment,1,0,()=>{U(c,1)}),oe()}r?(e=uc(r,i()),F(e.$$.fragment),w(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&I(e.$$.fragment,o),s=!1},d(o){o&&k(n),e&&U(e,o)}}}function gk(t){let e,n,s,r;const i=[pk,fk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=ct()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ie(),I(o[u],1,1,()=>{o[u]=null}),oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function mk(t,e,n){let{loadComponent:s}=e,r;return Ns(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class ac extends X{constructor(e){super(),Y(this,e,mk,gk,W,{loadComponent:1})}}function yk(t){let e;return{c(){e=_("p"),e.textContent="You got lost..."},m(n,s){A(n,e,s)},i:S,o:S,d(n){n&&k(e)}}}function vk(t){let e,n;return e=new ac({props:{loadComponent:kk}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function _k(t){let e,n;return e=new ac({props:{loadComponent:Tk}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function wk(t){let e,n;return e=new ac({props:{loadComponent:Ek}}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function bk(t){let e,n;return e=new dk({}),{c(){F(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){U(e,s)}}}function Ik(t){let e,n,s,r;const i=[bk,wk,_k,vk,yk],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=_("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){A(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ie(),I(o[u],1,1,()=>{o[u]=null}),oe(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){I(s),r=!1},d(c){c&&k(e),o[n].d()}}}const Ek=()=>Ri(()=>import("./Account-c933842d.js"),["assets/Account-c933842d.js","assets/Account-529474a3.css"]),Tk=()=>Ri(()=>import("./Preferences-16b86035.js"),["assets/Preferences-16b86035.js","assets/ParagraphHeading-43328f94.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-2a2b934e.css"]),kk=()=>Ri(()=>import("./Help-514fb0ef.js"),["assets/Help-514fb0ef.js","assets/ParagraphHeading-43328f94.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function Sk(t,e,n){let s;return xe(t,Ft,r=>n(0,s=r)),[s]}class Ak extends X{constructor(e){super(),Y(this,e,Sk,Ik,W,{})}}function Ck(t){let e;return{c(){e=_("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){A(n,e,s)},p:S,i:S,o:S,d(n){n&&k(e)}}}class Dk extends X{constructor(e){super(),Y(this,e,null,Ck,W,{})}}const{subscribe:Nk,set:Rk}=Cp("theme","dark"),Su={subscribe:Nk,set(t){Rk(t),$k(t),Ds.setTheme(t)}},$k=t=>{document.documentElement.classList.replace(Ok(t),t)},Ok=t=>t==="dark"?"light":"dark";function Pk(t){let e,n,s,r,i,o;return e=new dE({}),s=new Ak({}),i=new Dk({}),{c(){F(e.$$.fragment),n=R(),F(s.$$.fragment),r=R(),F(i.$$.fragment)},m(a,c){x(e,a,c),A(a,n,c),x(s,a,c),A(a,r,c),x(i,a,c),o=!0},p:S,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){I(e.$$.fragment,a),I(s.$$.fragment,a),I(i.$$.fragment,a),o=!1},d(a){U(e,a),a&&k(n),U(s,a),a&&k(r),U(i,a)}}}function Mk(t){return Su.subscribe(e=>Su.set(e))(),[]}class Lk extends X{constructor(e){super(),Y(this,e,Mk,Pk,W,{})}}function xk(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Ri(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new Lk({target:document.getElementById("app")});xk();export{Mi as $,zo as A,An as B,Fk as C,Uk as D,vp as E,St as F,Yt as G,aE as H,ct as I,xe as J,Ds as K,Bl as L,Gl as M,Cp as N,Mp as O,xp as P,Up as Q,Lp as R,X as S,In as T,fn as U,Ui as V,Su as W,ik as X,Fp as Y,Kk as Z,wp as _,f as a,hT as a0,Wr as a1,G1 as a2,Kl as a3,A as b,m as c,Te as d,_ as e,Ln as f,S as g,k as h,Y as i,R as j,w as k,j as l,ie as m,it as n,hn as o,oe as p,I as q,rn as r,W as s,ue as t,Se as u,ze as v,F as w,x,U as y,he as z};
