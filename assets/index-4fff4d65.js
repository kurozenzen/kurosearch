(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function C(){}function Rp(t,e){for(const n in e)t[n]=e[n];return t}function $p(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Tu(t){return t()}function ac(){return Object.create(null)}function je(t){t.forEach(Tu)}function ku(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let er;function Er(t,e){return er||(er=document.createElement("a")),er.href=e,t===er.href}function Op(t){return Object.keys(t).length===0}function Pp(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function He(t,e,n){t.$$.on_destroy.push(Pp(e,n))}function Mp(t,e,n,s){if(t){const r=Su(t,e,n,s);return t[0](r)}}function Su(t,e,n,s){return t[1]&&s?Rp(n.ctx.slice(),t[1](s(e))):n.ctx}function Lp(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function xp(t,e,n,s,r,i){if(r){const o=Su(e,n,s,i);t.p(o,r)}}function Up(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function ot(t){return t??""}function Fp(t,e,n){return t.set(n),e}function m(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function rn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function hn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function P(){return fe(" ")}function lt(){return fe("")}function Y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Fo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Au(t){return t===""?null:+t}function Vp(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e){t.value=e??""}function tr(t,e,n){for(let s=0;s<t.options.length;s+=1){const r=t.options[s];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function cc(t){const e=t.querySelector(":checked");return e&&e.__value}function Pe(t,e,n){t.classList[n?"add":"remove"](e)}function Bp(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function lc(t,e){return new t(e)}let as;function ht(t){as=t}function Yr(){if(!as)throw new Error("Function called outside component initialization");return as}function Ss(t){Yr().$$.on_mount.push(t)}function Xr(t){Yr().$$.on_destroy.push(t)}function Ye(){const t=Yr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Bp(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function jp(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const gn=[],Tn=[];let _n=[];const ro=[],qp=Promise.resolve();let io=!1;function zp(){io||(io=!0,qp.then(Vo))}function cs(t){_n.push(t)}function Ck(t){ro.push(t)}const Li=new Set;let dn=0;function Vo(){if(dn!==0)return;const t=as;do{try{for(;dn<gn.length;){const e=gn[dn];dn++,ht(e),Kp(e.$$)}}catch(e){throw gn.length=0,dn=0,e}for(ht(null),gn.length=0,dn=0;Tn.length;)Tn.pop()();for(let e=0;e<_n.length;e+=1){const n=_n[e];Li.has(n)||(Li.add(n),n())}_n.length=0}while(gn.length);for(;ro.length;)ro.pop()();io=!1,Li.clear(),ht(t)}function Kp(t){if(t.fragment!==null){t.update(),je(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(cs)}}function Hp(t){const e=[],n=[];_n.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),_n=e}const hr=new Set;let Ft;function ue(){Ft={r:0,c:[],p:Ft}}function he(){Ft.r||je(Ft.c),Ft=Ft.p}function v(t,e){t&&t.i&&(hr.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(hr.has(t))return;hr.add(t),Ft.c.push(()=>{hr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Tr(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ue(),I(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),he())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Vo()}if($p(t)){const r=Yr();if(t.then(i=>{ht(r),s(e.then,1,e.value,i),ht(null)},i=>{if(ht(r),s(e.catch,2,e.error,i),ht(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Cu(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Dk(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function U(t){t&&t.c()}function L(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||cs(()=>{const o=t.$$.on_mount.map(Tu).filter(ku);t.$$.on_destroy?t.$$.on_destroy.push(...o):je(o),t.$$.on_mount=[]}),i.forEach(cs)}function x(t,e){const n=t.$$;n.fragment!==null&&(Hp(n.after_update),je(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gp(t,e){t.$$.dirty[0]===-1&&(gn.push(t),zp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,s,r,i,o,a=[-1]){const c=as;ht(t);const l=t.$$={fragment:null,ctx:[],props:i,update:C,not_equal:r,bound:ac(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ac(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Gp(t,h)),d}):[],l.update(),u=!0,je(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Vp(e.target);l.fragment&&l.fragment.l(h),h.forEach(S)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),Vo()}ht(c)}class J{$destroy(){x(this,1),this.$destroy=C}$on(e,n){if(!ku(n))return C;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Op(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn=[];function As(t,e=C){let n;const s=new Set;function r(a){if(Q(t,a)&&(t=a,n)){const c=!fn.length;for(const l of s)l[1](),fn.push(l,t);if(c){for(let l=0;l<fn.length;l+=2)fn[l][0](fn[l+1]);fn.length=0}}}function i(a){r(a(t))}function o(a,c=C){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||C),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Wp=Object.freeze(["search","account","settings","help"]),Qp=t=>Wp.includes(t),Yp=()=>{const{subscribe:t,set:e}=As("search");return{subscribe:t,navigateTo(n){if(!Qp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Vt=Yp();function Xp(t){let e,n,s,r,i,o;return{c(){e=hn("svg"),n=hn("g"),s=hn("path"),r=hn("defs"),i=hn("clipPath"),o=hn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){A(a,e,c),m(e,n),m(n,s),m(e,r),m(r,i),m(i,o)},p:C,i:C,o:C,d(a){a&&S(e)}}}class Jp extends J{constructor(e){super(),X(this,e,null,Xp,Q,{})}}/**
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
 */const Du=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Du(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new eg;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(t){const e=Du(t);return Nu.encodeByteArray(e,!0)},kr=function(t){return tg(t).replace(/\./g,"")},Ru=function(t){try{return Nu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const sg=()=>ng().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ig=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ru(t[1]);return e&&JSON.parse(e)},Bo=()=>{try{return sg()||rg()||ig()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$u=t=>{var e,n;return(n=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},og=t=>{const e=$u(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var t;return(t=Bo())===null||t===void 0?void 0:t.config},Ou=t=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),a].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Pu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mu(){try{return typeof indexedDB=="object"}catch{return!1}}function Lu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function fg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pg="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pg,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new et(r,a,s)}}function gg(t,e){return t.replace(mg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const mg=/\{\$([^}]+)}/g;function yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(uc(i)&&uc(o)){if(!ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function uc(t){return t!==null&&typeof t=="object"}/**
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
 */function Cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vg(t,e){const n=new _g(t,e);return n.subscribe.bind(n)}class _g{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=xi),r.error===void 0&&(r.error=xi),r.complete===void 0&&(r.complete=xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xi(){}/**
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
 */const Ig=1e3,bg=2,Eg=4*60*60*1e3,Tg=.5;function hc(t,e=Ig,n=bg){const s=e*Math.pow(n,t),r=Math.round(Tg*s*(Math.random()-.5)*2);return Math.min(Eg,s+r)}/**
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
 */class kg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===xt?void 0:t}function Ag(t){return t.instantiationMode==="EAGER"}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Dg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Ng=re.INFO,Rg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},$g=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Rg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jr{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Og=(t,e)=>e.some(n=>t instanceof n);let dc,fc;function Pg(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xu=new WeakMap,oo=new WeakMap,Uu=new WeakMap,Ui=new WeakMap,jo=new WeakMap;function Lg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xu.set(n,t)}).catch(()=>{}),jo.set(e,t),e}function xg(t){if(oo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oo.set(t,e)}let ao={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ug(t){ao=t(ao)}function Fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fi(this),e,...n);return Uu.set(s,e.sort?e.sort():[e]),Ct(s)}:Mg().includes(t)?function(...e){return t.apply(Fi(this),e),Ct(xu.get(this))}:function(...e){return Ct(t.apply(Fi(this),e))}}function Vg(t){return typeof t=="function"?Fg(t):(t instanceof IDBTransaction&&xg(t),Og(t,Pg())?new Proxy(t,ao):t)}function Ct(t){if(t instanceof IDBRequest)return Lg(t);if(Ui.has(t))return Ui.get(t);const e=Vg(t);return e!==t&&(Ui.set(t,e),jo.set(e,t)),e}const Fi=t=>jo.get(t);function Fu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Bg=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],Vi=new Map;function pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=jg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Vi.set(e,i),i}Ug(t=>({...t,get:(e,n,s)=>pc(e,n)||t.get(e,n,s),has:(e,n)=>!!pc(e,n)||t.has(e,n)}));/**
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
 */class qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const co="@firebase/app",gc="0.9.5";/**
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
 */const Xt=new Jr("@firebase/app"),Kg="@firebase/app-compat",Hg="@firebase/analytics-compat",Gg="@firebase/analytics",Wg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Xg="@firebase/auth-compat",Jg="@firebase/database",Zg="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",sm="@firebase/installations-compat",rm="@firebase/messaging",im="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",cm="@firebase/remote-config",lm="@firebase/remote-config-compat",um="@firebase/storage",hm="@firebase/storage-compat",dm="@firebase/firestore",fm="@firebase/firestore-compat",pm="firebase",gm="9.18.0";/**
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
 */const lo="[DEFAULT]",mm={[co]:"fire-core",[Kg]:"fire-core-compat",[Gg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Wg]:"fire-app-check-compat",[Yg]:"fire-auth",[Xg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Zg]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[sm]:"fire-iid-compat",[rm]:"fire-fcm",[im]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[cm]:"fire-rc",[lm]:"fire-rc-compat",[um]:"fire-gcs",[hm]:"fire-gcs-compat",[dm]:"fire-fst",[fm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
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
 */const Sr=new Map,uo=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(uo.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,t);for(const n of Sr.values())ym(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new on("app","Firebase",vm);/**
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
 */class _m{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=gm;function Vu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(n||(n=ag()),!n)throw Dt.create("no-options");const i=Sr.get(r);if(i){if(ls(n,i.options)&&ls(s,i.config))return i;throw Dt.create("duplicate-app",{appName:r})}const o=new Cg(r);for(const c of uo.values())o.addComponent(c);const a=new _m(n,s,o);return Sr.set(r,a),a}function qo(t=lo){const e=Sr.get(t);if(!e&&t===lo)return Vu();if(!e)throw Dt.create("no-app",{appName:t});return e}function Ge(t,e,n){var s;let r=(s=mm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}at(new Je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wm="firebase-heartbeat-database",Im=1,us="firebase-heartbeat-store";let Bi=null;function Bu(){return Bi||(Bi=Fu(wm,Im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(us)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Bi}async function bm(t){try{return(await Bu()).transaction(us).objectStore(us).get(ju(t))}catch(e){if(e instanceof et)Xt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function mc(t,e){try{const s=(await Bu()).transaction(us,"readwrite");return await s.objectStore(us).put(e,ju(t)),s.done}catch(n){if(n instanceof et)Xt.warn(n.message);else{const s=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function ju(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Em=1024,Tm=30*24*60*60*1e3;class km{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Am(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Tm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yc(),{heartbeatsToSend:n,unsentEntries:s}=Sm(this._heartbeatsCache.heartbeats),r=kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yc(){return new Date().toISOString().substring(0,10)}function Sm(t,e=Em){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mu()?Lu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vc(t){return kr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cm(t){at(new Je("platform-logger",e=>new qg(e),"PRIVATE")),at(new Je("heartbeat",e=>new km(e),"PRIVATE")),Ge(co,gc,t),Ge(co,gc,"esm2017"),Ge("fire-js","")}Cm("");function zo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function qu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=qu,zu=new on("auth","Firebase",qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Jr("@firebase/auth");function dr(t,...e){_c.logLevel<=re.ERROR&&_c.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw Ko(t,...e)}function nt(t,...e){return Ko(t,...e)}function Ku(t,e,n){const s=Object.assign(Object.assign({},Dm()),{[e]:n});return new on("auth","Firebase",s).create(e,{appName:t.name})}function Nm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qe(t,"argument-error"),Ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ko(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zu.create(t,...e)}function V(t,e,...n){if(!t)throw Ko(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function mt(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Rm(t,e){const n=an(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ls(i,e??{}))return r;Qe(r,"already-initialized")}return n.initialize({options:e})}function $m(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Om(){return Ic()==="http:"||Ic()==="https:"}function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Om()||Pu()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=ug()||hg()}get(){return Pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Ns(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $s(t,e,n,s,r={}){return Gu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Cs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hu.fetch()(Wu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Gu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lm),e);try{const r=new Um(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ku(t,u,l);Qe(t,u)}}catch(r){if(r instanceof et)throw r;Qe(t,"internal-error",{message:String(r)})}}async function Os(t,e,n,s,r={}){const i=await $s(t,e,n,s,r);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ho(t.config,r):`${t.config.apiScheme}://${r}`}class Um{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bm(t,e=!1){const n=we(t),s=await n.getIdToken(e),r=Go(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:es(ji(r.auth_time)),issuedAtTime:es(ji(r.iat)),expirationTime:es(ji(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(t){return Number(t)*1e3}function Go(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ru(n);return r?JSON.parse(r):(dr("Failed to decode base64 JWT payload"),null)}catch(r){return dr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function jm(t){const e=Go(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof et&&qm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ar(t){var e;const n=t.auth,s=await t.getIdToken(),r=await hs(t,Vm(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gm(i.providerUserInfo):[],a=Hm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Km(t){const e=we(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hm(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Gm(t){return t.map(e=>{var{providerId:n}=e,s=zo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e){const n=await Gu(t,{},async()=>{const s=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Wu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Wm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ds;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hs(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hs(this,Fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:j,isAnonymous:$,providerData:D,stsTokenManager:z}=n;V(k&&z,e,"internal-error");const oe=ds.fromJSON(this.name,z);V(typeof k=="string",e,"internal-error"),Et(h,e.name),Et(d,e.name),V(typeof j=="boolean",e,"internal-error"),V(typeof $=="boolean",e,"internal-error"),Et(p,e.name),Et(y,e.name),Et(g,e.name),Et(T,e.name),Et(b,e.name),Et(F,e.name);const Te=new Ht({uid:k,auth:e,email:d,emailVerified:j,displayName:h,isAnonymous:$,photoURL:y,phoneNumber:p,tenantId:g,stsTokenManager:oe,createdAt:b,lastLoginAt:F});return D&&Array.isArray(D)&&(Te.providerData=D.map(te=>Object.assign({},te))),T&&(Te._redirectEventId=T),Te}static async _fromIdTokenResponse(e,n,s=!1){const r=new ds;r.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ar(i),i}}/**
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
 */class Yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yu.type="NONE";const bc=Yu;/**
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
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fr(this.userKey,r.apiKey,i),this.fullPersistenceKey=fr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wn(ft(bc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(bc);const o=fr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ht._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(th(e))return"Blackberry";if(nh(e))return"Webos";if(Wo(e))return"Safari";if((e.includes("chrome/")||Ju(e))&&!e.includes("edge/"))return"Chrome";if(eh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Xu(t=xe()){return/firefox\//i.test(t)}function Wo(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ju(t=xe()){return/crios\//i.test(t)}function Zu(t=xe()){return/iemobile/i.test(t)}function eh(t=xe()){return/android/i.test(t)}function th(t=xe()){return/blackberry/i.test(t)}function nh(t=xe()){return/webos/i.test(t)}function Zr(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qm(t=xe()){var e;return Zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ym(){return dg()&&document.documentMode===10}function sh(t=xe()){return Zr(t)||eh(t)||nh(t)||th(t)||/windows phone/i.test(t)||Zu(t)}function Xm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e=[]){let n;switch(t){case"Browser":n=Ec(xe());break;case"Worker":n=`${Ec(xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${s}`}/**
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
 */class Zm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tc(this),this.idTokenSubscription=new Tc(this),this.beforeStateQueue=new Jm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Mn(t){return we(t)}class Tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=vg(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ey(t,e,n){const s=Mn(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ih(e),{host:o,port:a}=ty(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ny()}function ih(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ty(t){const e=ih(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:kc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:kc(o)}}}function kc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ny(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function sy(t,e){return $s(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(t,e){return Os(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function oy(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Qo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new fs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new fs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ry(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oy(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e){return Os(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="http://localhost";class Jt extends Qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=zo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Jt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,In(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:ay,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(t){const e=Gn(Wn(t)).link,n=e?Gn(Wn(e)).deep_link_id:null,s=Gn(Wn(t)).deep_link_id;return(s?Gn(Wn(s)).link:null)||s||n||e||t}class Yo{constructor(e){var n,s,r,i,o,a;const c=Gn(Wn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=cy((r=c.mode)!==null&&r!==void 0?r:null);V(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ly(e);try{return new Yo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.providerId=Ln.PROVIDER_ID}static credential(e,n){return fs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Yo.parseLink(n);return V(s,"argument-error"),fs._fromEmailAndCode(e,s.code,s.tenantId)}}Ln.PROVIDER_ID="password";Ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tt extends Ps{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ut.credential(n,s)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ps{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ps{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return St.credential(n,s)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e){return Os(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cr extends et{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Cr(e,n,s,r)}}function oh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cr._fromErrorAndOperation(t,i,e,s):i})}async function hy(t,e,n=!1){const s=await hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",s)}/**
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
 */async function dy(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await hs(t,oh(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Go(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Zt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t,e,n=!1){const s="signIn",r=await oh(t,s,e),i=await Zt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function fy(t,e){return ah(Mn(t),e)}async function py(t,e,n){const s=Mn(t),r=await uy(s,{returnSecureToken:!0,email:e,password:n}),i=await Zt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gy(t,e,n){return fy(we(t),Ln.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){return we(t).setPersistence(e)}function yy(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function vy(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function ch(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}function _y(t){return we(t).signOut()}const Dr="__sak";/**
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
 */class lh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){const t=xe();return Wo(t)||Zr(t)}const Iy=1e3,by=10;class uh extends lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wy()&&Xm(),this.fallbackToPolling=sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Ym()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,by):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Iy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uh.type="LOCAL";const hh=uh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dh.type="SESSION";const fh=dh;/**
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
 */function Ey(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ei(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ey(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ty{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Jo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function ky(t){st().location.href=t}/**
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
 */function ph(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ay(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cy(){return ph()?self:null}/**
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
 */const gh="firebaseLocalStorageDb",Dy=1,Nr="firebaseLocalStorage",mh="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ti(t,e){return t.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function Ny(){const t=indexedDB.deleteDatabase(gh);return new Ms(t).toPromise()}function fo(){const t=indexedDB.open(gh,Dy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Nr,{keyPath:mh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Nr)?e(s):(s.close(),await Ny(),e(await fo()))})})}async function Ac(t,e,n){const s=ti(t,!0).put({[mh]:e,value:n});return new Ms(s).toPromise()}async function Ry(t,e){const n=ti(t,!1).get(e),s=await new Ms(n).toPromise();return s===void 0?null:s.value}function Cc(t,e){const n=ti(t,!0).delete(e);return new Ms(n).toPromise()}const $y=800,Oy=3;class yh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Oy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ph()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(Cy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sy(),!this.activeServiceWorker)return;this.sender=new Ty(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ay()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await Ac(e,Dr,"1"),await Cc(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ac(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ry(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ti(r,!1).getAll();return new Ms(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yh.type="LOCAL";const Py=yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ly(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",My().appendChild(s)})}function xy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ns(3e4,6e4);/**
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
 */function vh(t,e){return e?ft(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zo extends Qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uy(t){return ah(t.auth,new Zo(t),t.bypassAuthState)}function Fy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),dy(n,new Zo(t),t.bypassAuthState)}async function Vy(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),hy(n,new Zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uy;case"linkViaPopup":case"linkViaRedirect":return Vy;case"reauthViaPopup":case"reauthViaRedirect":return Fy;default:Qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Ns(2e3,1e4);async function jy(t,e,n){const s=Mn(t);Nm(t,e,Xo);const r=vh(s,n);return new Bt(s,"signInViaPopup",e,r).executeNotNull()}class Bt extends _h{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,By.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="pendingRedirect",pr=new Map;class zy extends _h{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const s=await Ky(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ky(t,e){const n=Wy(e),s=Gy(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Hy(t,e){pr.set(t._key(),e)}function Gy(t){return ft(t._redirectPersistence)}function Wy(t){return fr(qy,t.config.apiKey,t.name)}async function Qy(t,e,n=!1){const s=Mn(t),r=vh(s,e),o=await new zy(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=10*60*1e3;class Xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!wh(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(e))}saveEventToCache(e){this.cachedEventUids.add(Dc(e)),this.lastProcessedEventTime=Date.now()}}function Dc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ev=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tv=/^https?/;async function nv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zy(t);for(const n of e)try{if(sv(n))return}catch{}Qe(t,"unauthorized-domain")}function sv(t){const e=ho(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tv.test(n))return!1;if(ev.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const rv=new Ns(3e4,6e4);function Nc(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iv(t){return new Promise((e,n)=>{var s,r,i;function o(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),n(nt(t,"network-request-failed"))},timeout:rv.get()})}if(!((r=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=xy("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Ly(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gr=null,e})}let gr=null;function ov(t){return gr=gr||iv(t),gr}/**
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
 */const av=new Ns(5e3,15e3),cv="__/auth/iframe",lv="emulator/auth/iframe",uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dv(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ho(e,lv):`https://${t.config.authDomain}/${cv}`,s={apiKey:e.apiKey,appName:t.name,v:Ds},r=hv.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Cs(s).slice(1)}`}async function fv(t){const e=await ov(t),n=st().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:dv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},av.get());function c(){st().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,mv=600,yv="_blank",vv="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _v(t,e,n,s=gv,r=mv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=Ju(l)?yv:n),Xu(l)&&(e=e||vv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Qm(l)&&a!=="_self")return wv(e||"",a),new Rc(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new Rc(h)}function wv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Iv="__/auth/handler",bv="emulator/auth/handler";function $c(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ds,eventId:r};if(e instanceof Xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ps){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ev(t)}?${Cs(a).slice(1)}`}function Ev({config:t}){return t.emulator?Ho(t,bv):`https://${t.authDomain}/${Iv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="webStorageSupport";class Tv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fh,this._completeRedirectFn=Qy,this._overrideRedirectResult=Hy}async _openPopup(e,n,s,r){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=$c(e,n,s,ho(),r);return _v(e,o,Jo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),ky($c(e,n,s,ho(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(mt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fv(e),s=new Xy(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qi,{type:qi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qi];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sh()||Wo()||Zr()}}const kv=Tv;var Oc="@firebase/auth",Pc="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cv(t){at(new Je("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rh(t)},u=new Zm(a,c,l);return $m(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),at(new Je("auth-internal",e=>{const n=Mn(e.getProvider("auth").getImmediate());return(s=>new Sv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Oc,Pc,Av(t)),Ge(Oc,Pc,"esm2017")}/**
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
 */const Dv=5*60,Nv=Ou("authIdTokenMaxAge")||Dv;let Mc=null;const Rv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Nv)return;const r=n==null?void 0:n.token;Mc!==r&&(Mc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $v(t=qo()){const e=an(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rm(t,{popupRedirectResolver:kv,persistence:[Py,hh,fh]}),s=Ou("authTokenSyncURL");if(s){const i=Rv(s);vy(n,i,()=>i(n.currentUser)),yy(n,o=>i(o))}const r=$u("auth");return r&&ey(n,`http://${r}`),n}Cv("Browser");const Ih="@firebase/installations",ea="0.6.4";/**
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
 */const bh=1e4,Eh=`w:${ea}`,Th="FIS_v2",Ov="https://firebaseinstallations.googleapis.com/v1",Pv=60*60*1e3,Mv="installations",Lv="Installations";/**
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
 */const xv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},en=new on(Mv,Lv,xv);function kh(t){return t instanceof et&&t.code.includes("request-failed")}/**
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
 */function Sh({projectId:t}){return`${Ov}/projects/${t}/installations`}function Ah(t){return{token:t.token,requestStatus:2,expiresIn:Fv(t.expiresIn),creationTime:Date.now()}}async function Ch(t,e){const s=(await e.json()).error;return en.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Dh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Uv(t,{refreshToken:e}){const n=Dh(t);return n.append("Authorization",Vv(e)),n}async function Nh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Fv(t){return Number(t.replace("s","000"))}function Vv(t){return`${Th} ${t}`}/**
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
 */async function Bv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Sh(t),r=Dh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Th,appId:t.appId,sdkVersion:Eh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Nh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ah(l.authToken)}}else throw await Ch("Create Installation",c)}/**
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
 */function Rh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qv=/^[cdef][\w-]{21}$/,po="";function zv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Kv(t);return qv.test(n)?n:po}catch{return po}}function Kv(t){return jv(t).substr(0,22)}/**
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
 */function ni(t){return`${t.appName}!${t.appId}`}/**
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
 */const $h=new Map;function Oh(t,e){const n=ni(t);Ph(n,e),Hv(n,e)}function Ph(t,e){const n=$h.get(t);if(n)for(const s of n)s(e)}function Hv(t,e){const n=Gv();n&&n.postMessage({key:t,fid:e}),Wv()}let jt=null;function Gv(){return!jt&&"BroadcastChannel"in self&&(jt=new BroadcastChannel("[Firebase] FID Change"),jt.onmessage=t=>{Ph(t.data.key,t.data.fid)}),jt}function Wv(){$h.size===0&&jt&&(jt.close(),jt=null)}/**
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
 */const Qv="firebase-installations-database",Yv=1,tn="firebase-installations-store";let zi=null;function ta(){return zi||(zi=Fu(Qv,Yv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}})),zi}async function Rr(t,e){const n=ni(t),r=(await ta()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Oh(t,e.fid),e}async function Mh(t){const e=ni(t),s=(await ta()).transaction(tn,"readwrite");await s.objectStore(tn).delete(e),await s.done}async function si(t,e){const n=ni(t),r=(await ta()).transaction(tn,"readwrite"),i=r.objectStore(tn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Oh(t,a.fid),a}/**
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
 */async function na(t){let e;const n=await si(t.appConfig,s=>{const r=Xv(s),i=Jv(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===po?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Xv(t){const e=t||{fid:zv(),registrationStatus:0};return Lh(e)}function Jv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(en.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Zv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:e_(t)}:{installationEntry:e}}async function Zv(t,e){try{const n=await Bv(t,e);return Rr(t.appConfig,n)}catch(n){throw kh(n)&&n.customData.serverCode===409?await Mh(t.appConfig):await Rr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function e_(t){let e=await Lc(t.appConfig);for(;e.registrationStatus===1;)await Rh(100),e=await Lc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await na(t);return s||n}return e}function Lc(t){return si(t,e=>{if(!e)throw en.create("installation-not-found");return Lh(e)})}function Lh(t){return t_(t)?{fid:t.fid,registrationStatus:0}:t}function t_(t){return t.registrationStatus===1&&t.registrationTime+bh<Date.now()}/**
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
 */async function n_({appConfig:t,heartbeatServiceProvider:e},n){const s=s_(t,n),r=Uv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Eh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Nh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Ah(l)}else throw await Ch("Generate Auth Token",c)}function s_(t,{fid:e}){return`${Sh(t)}/${e}/authTokens:generate`}/**
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
 */async function sa(t,e=!1){let n;const s=await si(t.appConfig,i=>{if(!xh(i))throw en.create("not-registered");const o=i.authToken;if(!e&&o_(o))return i;if(o.requestStatus===1)return n=r_(t,e),i;{if(!navigator.onLine)throw en.create("app-offline");const a=c_(i);return n=i_(t,a),a}});return n?await n:s.authToken}async function r_(t,e){let n=await xc(t.appConfig);for(;n.authToken.requestStatus===1;)await Rh(100),n=await xc(t.appConfig);const s=n.authToken;return s.requestStatus===0?sa(t,e):s}function xc(t){return si(t,e=>{if(!xh(e))throw en.create("not-registered");const n=e.authToken;return l_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function i_(t,e){try{const n=await n_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Rr(t.appConfig,s),n}catch(n){if(kh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rr(t.appConfig,s)}throw n}}function xh(t){return t!==void 0&&t.registrationStatus===2}function o_(t){return t.requestStatus===2&&!a_(t)}function a_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Pv}function c_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function l_(t){return t.requestStatus===1&&t.requestTime+bh<Date.now()}/**
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
 */function f_(t){if(!t||!t.options)throw Ki("App Configuration");if(!t.name)throw Ki("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ki(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ki(t){return en.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="installations",p_="installations-internal",g_=t=>{const e=t.getProvider("app").getImmediate(),n=f_(e),s=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},m_=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,Uh).getImmediate();return{getId:()=>u_(n),getToken:r=>h_(n,r)}};function y_(){at(new Je(Uh,g_,"PUBLIC")),at(new Je(p_,m_,"PRIVATE"))}y_();Ge(Ih,ea);Ge(Ih,ea,"esm2017");/**
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
 */const $r="analytics",v_="firebase_id",__="origin",w_=60*1e3,I_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fh="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new Jr("@firebase/analytics");/**
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
 */function Vh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b_(t,e){const n=document.createElement("script");n.src=`${Fh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function E_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function T_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Vh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){qe.error(a)}t("config",r,i)}async function k_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Vh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){qe.error(i)}}function S_(t,e,n,s){async function r(i,o,a){try{i==="event"?await k_(t,e,n,o,a):i==="config"?await T_(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){qe.error(c)}}return r}function A_(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=S_(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function C_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fh)&&n.src.includes(t))return n;return null}/**
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
 */const D_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},We=new on("analytics","Analytics",D_);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=30,R_=1e3;class $_{constructor(e={},n=R_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Bh=new $_;function O_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function P_(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:O_(s)},i=I_.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function M_(t,e=Bh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw We.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw We.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new U_;return setTimeout(async()=>{a.abort()},n!==void 0?n:w_),jh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function jh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Bh){var i;const{appId:o,measurementId:a}=t;try{await L_(s,e)}catch(c){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await P_(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!x_(l)){if(r.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?hc(n,r.intervalMillis,N_):hc(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),qe.debug(`Calling attemptFetch again in ${u} millis`),jh(t,h,s,r)}}function L_(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function x_(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class U_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function F_(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(){if(Mu())try{await Lu()}catch(t){return qe.warn(We.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function B_(t,e,n,s,r,i,o){var a;const c=M_(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>qe.error(p)),e.push(c);const l=V_().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);C_(i)||b_(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[__]="firebase",d.update=!0,h!=null&&(d[v_]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class j_{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},Uc=[];const Fc={};let Hi="dataLayer",q_="gtag",Vc,qh,Bc=!1;function z_(){const t=[];if(Pu()&&t.push("This is a browser extension environment."),fg()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function K_(t,e,n){z_();const s=t.options.appId;if(!s)throw We.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(ts[s]!=null)throw We.create("already-exists",{id:s});if(!Bc){E_(Hi);const{wrappedGtag:i,gtagCore:o}=A_(ts,Uc,Fc,Hi,q_);qh=i,Vc=o,Bc=!0}return ts[s]=B_(t,Uc,Fc,e,Vc,Hi,n),new j_(t)}function H_(t=qo()){t=we(t);const e=an(t,$r);return e.isInitialized()?e.getImmediate():G_(t)}function G_(t,e={}){const n=an(t,$r);if(n.isInitialized()){const r=n.getImmediate();if(ls(e,n.getOptions()))return r;throw We.create("already-initialized")}return n.initialize({options:e})}function W_(t,e,n,s){t=we(t),F_(qh,ts[t.app.options.appId],e,n,s).catch(r=>qe.error(r))}const jc="@firebase/analytics",qc="0.9.4";function Q_(){at(new Je($r,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return K_(s,r,n)},"PUBLIC")),at(new Je("analytics-internal",t,"PRIVATE")),Ge(jc,qc),Ge(jc,qc,"esm2017");function t(e){try{const n=e.getProvider($r).getImmediate();return{logEvent:(s,r,i)=>W_(n,s,r,i)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}Q_();var Y_="firebase",X_="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(Y_,X_,"app");var J_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,ra=ra||{},q=J_||self;function Or(){}function ri(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z_(t){return Object.prototype.hasOwnProperty.call(t,Gi)&&t[Gi]||(t[Gi]=++ew)}var Gi="closure_uid_"+(1e9*Math.random()>>>0),ew=0;function tw(t,e,n){return t.call.apply(t.bind,arguments)}function nw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=tw:Me=nw,Me.apply(null,arguments)}function sr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Mt(){this.s=this.s,this.o=this.o}var sw=0;Mt.prototype.s=!1;Mt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),sw!=0)&&Z_(this)};Mt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ia(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function zc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ri(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var rw=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Or,e),q.removeEventListener("test",Or,e)}catch{}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}var Kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wi(t,e){return t<e?-1:t>e?1:0}function ii(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function tt(t){return ii().indexOf(t)!=-1}function oa(t){return oa[" "](t),t}oa[" "]=Or;function iw(t){var e=cw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ow=tt("Opera"),kn=tt("Trident")||tt("MSIE"),Kh=tt("Edge"),go=Kh||kn,Hh=tt("Gecko")&&!(ii().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge"))&&!(tt("Trident")||tt("MSIE"))&&!tt("Edge"),aw=ii().toLowerCase().indexOf("webkit")!=-1&&!tt("Edge");function Gh(){var t=q.document;return t?t.documentMode:void 0}var Mr;e:{var Qi="",Yi=function(){var t=ii();if(Hh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Kh)return/Edge\/([\d\.]+)/.exec(t);if(kn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aw)return/WebKit\/(\S+)/.exec(t);if(ow)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yi&&(Qi=Yi?Yi[1]:""),kn){var Xi=Gh();if(Xi!=null&&Xi>parseFloat(Qi)){Mr=String(Xi);break e}}Mr=Qi}var cw={};function lw(){return iw(function(){let t=0;const e=Kc(String(Mr)).split("."),n=Kc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wi(r[2].length==0,i[2].length==0)||Wi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var mo;if(q.document&&kn){var Hc=Gh();mo=Hc||parseInt(Mr,10)||void 0}else mo=void 0;var uw=mo;function ps(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hh){e:{try{oa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ps.X.h.call(this)}}Ce(ps,Le);var hw={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xs="closure_listenable_"+(1e6*Math.random()|0),dw=0;function fw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++dw,this.ba=this.ea=!1}function oi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function aa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Wh(t){const e={};for(const n in t)e[n]=t[n];return e}const Gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Gc.length;i++)n=Gc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ai(t){this.src=t,this.g={},this.h=0}ai.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=vo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new fw(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function yo(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=zh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(oi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),Ji={};function Yh(t,e,n,s,r){if(s&&s.once)return Jh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yh(t,e[i],n,s,r);return null}return n=ha(n),t&&t[xs]?t.N(e,n,Ls(s)?!!s.capture:!!s,r):Xh(t,e,n,!1,s,r)}function Xh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ls(r)?!!r.capture:!!r,a=ua(t);if(a||(t[ca]=a=new ai(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=pw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ed(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pw(){function t(n){return e.call(t.src,t.listener,n)}const e=gw;return t}function Jh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jh(t,e[i],n,s,r);return null}return n=ha(n),t&&t[xs]?t.O(e,n,Ls(s)?!!s.capture:!!s,r):Xh(t,e,n,!0,s,r)}function Zh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zh(t,e[i],n,s,r);else s=Ls(s)?!!s.capture:!!s,n=ha(n),t&&t[xs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=vo(i,n,s,r),-1<n&&(oi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ua(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vo(e,n,s,r)),(n=-1<t?e[t]:null)&&la(n))}function la(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xs])yo(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ed(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ua(e))?(yo(n,t),n.h==0&&(n.src=null,e[ca]=null)):oi(t)}}}function ed(t){return t in Ji?Ji[t]:Ji[t]="on"+t}function gw(t,e){if(t.ba)t=!0;else{e=new ps(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&la(t),t=n.call(s,e)}return t}function ua(t){return t=t[ca],t instanceof ai?t:null}var Zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ha(t){return typeof t=="function"?t:(t[Zi]||(t[Zi]=function(e){return t.handleEvent(e)}),t[Zi])}function Ee(){Mt.call(this),this.i=new ai(this),this.P=this,this.I=null}Ce(Ee,Mt);Ee.prototype[xs]=!0;Ee.prototype.removeEventListener=function(t,e,n,s){Zh(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),Qh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=rr(o,s,!0,e)&&r}if(o=e.g=t,r=rr(o,s,!0,e)&&r,r=rr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=rr(o,s,!1,e)&&r}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)oi(n[s]);delete t.g[e],t.h--}}this.I=null};Ee.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ee.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function rr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&yo(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var da=q.JSON.stringify;function mw(){var t=sd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yw{constructor(){this.h=this.g=null}add(e,n){const s=td.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var td=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vw,t=>t.reset());class vw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _w(t){q.setTimeout(()=>{throw t},0)}function nd(t,e){_o||ww(),wo||(_o(),wo=!0),sd.add(t,e)}var _o;function ww(){var t=q.Promise.resolve(void 0);_o=function(){t.then(Iw)}}var wo=!1,sd=new yw;function Iw(){for(var t;t=mw();){try{t.h.call(t.g)}catch(n){_w(n)}var e=td;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wo=!1}function ci(t,e){Ee.call(this),this.h=t||1,this.g=e||q,this.j=Me(this.lb,this),this.l=Date.now()}Ce(ci,Ee);R=ci.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(fa(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){ci.X.M.call(this),fa(this),delete this.g};function pa(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function rd(t){t.g=pa(()=>{t.g=null,t.i&&(t.i=!1,rd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bw extends Mt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rd(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(t){Mt.call(this),this.h=t,this.g={}}Ce(gs,Mt);var Wc=[];function id(t,e,n,s){Array.isArray(n)||(n&&(Wc[0]=n.toString()),n=Wc);for(var r=0;r<n.length;r++){var i=Yh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function od(t){aa(t.g,function(e,n){this.g.hasOwnProperty(n)&&la(e)},t),t.g={}}gs.prototype.M=function(){gs.X.M.call(this),od(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function li(){this.g=!0}li.prototype.Aa=function(){this.g=!1};function Ew(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Tw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sw(t,n)+(s?" "+s:"")})}function kw(t,e){t.info(function(){return"TIMEOUT: "+e})}li.prototype.info=function(){};function Sw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return da(n)}catch{return e}}var cn={},Qc=null;function ui(){return Qc=Qc||new Ee}cn.Pa="serverreachability";function ad(t){Le.call(this,cn.Pa,t)}Ce(ad,Le);function ms(t){const e=ui();Ae(e,new ad(e))}cn.STAT_EVENT="statevent";function cd(t,e){Le.call(this,cn.STAT_EVENT,t),this.stat=e}Ce(cd,Le);function Ve(t){const e=ui();Ae(e,new cd(e,t))}cn.Qa="timingevent";function ld(t,e){Le.call(this,cn.Qa,t),this.size=e}Ce(ld,Le);function Us(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var hi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ud={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ga(){}ga.prototype.h=null;function Yc(t){return t.h||(t.h=t.i())}function hd(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ma(){Le.call(this,"d")}Ce(ma,Le);function ya(){Le.call(this,"c")}Ce(ya,Le);var Io;function di(){}Ce(di,ga);di.prototype.g=function(){return new XMLHttpRequest};di.prototype.i=function(){return{}};Io=new di;function Vs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gs(this),this.O=Aw,t=go?125:void 0,this.T=new ci(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dd}function dd(){this.i=null,this.g="",this.h=!1}var Aw=45e3,bo={},Lr={};R=Vs.prototype;R.setTimeout=function(t){this.O=t};function Eo(t,e,n){t.K=1,t.v=pi(yt(e)),t.s=n,t.P=!0,fd(t,null)}function fd(t,e){t.F=Date.now(),Bs(t),t.A=yt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Id(n.i,"t",s),t.C=0,n=t.l.H,t.h=new dd,t.g=jd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new bw(Me(t.La,t,t.g),t.N)),id(t.S,t.g,"readystatechange",t.ib),e=t.H?Wh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ms(),Ew(t.j,t.u,t.A,t.m,t.U,t.s)}R.ib=function(t){t=t.target;const e=this.L;e&&pt(t)==3?e.l():this.La(t)};R.La=function(t){try{if(t==this.g)e:{const u=pt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||go||this.g&&(this.h.h||this.g.fa()||el(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ms(3):ms(2)),fi(this);var n=this.g.aa();this.Y=n;t:if(pd(this)){var s=el(this.g);t="";var r=s.length,i=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),ns(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Tw(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var l=a;break t}}l=null}if(n=l)vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,To(this,n);else{this.i=!1,this.o=3,Ve(12),qt(this),ns(this);break e}}this.P?(gd(this,u,o),go&&this.i&&u==3&&(id(this.S,this.T,"tick",this.hb),this.T.start())):(vn(this.j,this.m,o,null),To(this,o)),u==4&&qt(this),this.i&&!this.I&&(u==4?Ud(this.l,this):(this.i=!1,Bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),qt(this),ns(this)}}}catch{}finally{}};function pd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Cw(t,n),r==Lr){e==4&&(t.o=4,Ve(14),s=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==bo){t.o=4,Ve(15),vn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vn(t.j,t.m,r,null),To(t,r);pd(t)&&r!=Lr&&r!=bo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ta(e),e.K=!0,Ve(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),qt(t),ns(t))}R.hb=function(){if(this.g){var t=pt(this.g),e=this.g.fa();this.C<e.length&&(fi(this),gd(this,t,e),this.i&&t!=4&&Bs(this))}};function Cw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Lr:(n=Number(e.substring(n,s)),isNaN(n)?bo:(s+=1,s+n>e.length?Lr:(e=e.substr(s,n),t.C=s+n,e)))}R.cancel=function(){this.I=!0,qt(this)};function Bs(t){t.V=Date.now()+t.O,md(t,t.O)}function md(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Us(Me(t.gb,t),e)}function fi(t){t.B&&(q.clearTimeout(t.B),t.B=null)}R.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(kw(this.j,this.A),this.K!=2&&(ms(),Ve(17)),qt(this),this.o=2,ns(this)):md(this,this.V-t)};function ns(t){t.l.G==0||t.I||Ud(t.l,t)}function qt(t){fi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fa(t.T),od(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function To(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ko(n.h,t))){if(!t.J&&ko(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fr(n),yi(n);else break e;Ea(n),Ve(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Us(Me(n.cb,n),6e3));if(1>=Td(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&Fr(n),!Pr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(va(i,i.h),i.h=null))}if(s.D){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.za=g,de(s.F,s.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Bd(s,s.H?s.ka:null,s.V),o.J){kd(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(fi(a),Bs(a)),s.g=o}else Ld(s);0<n.i.length&&vi(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):ba(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ms(4)}catch{}}function Dw(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ri(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Nw(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ri(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function yd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ri(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Nw(t),s=Dw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gt){this.h=e!==void 0?e:t.h,xr(this,t.j),this.s=t.s,this.g=t.g,Ur(this,t.m),this.l=t.l,e=t.i;var n=new ys;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xc(this,n),this.o=t.o}else t&&(n=String(t).match(vd))?(this.h=!!e,xr(this,n[1]||"",!0),this.s=Qn(n[2]||""),this.g=Qn(n[3]||"",!0),Ur(this,n[4]),this.l=Qn(n[5]||"",!0),Xc(this,n[6]||"",!0),this.o=Qn(n[7]||"")):(this.h=!!e,this.i=new ys(null,this.h))}Gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Yn(e,Jc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Yn(e,Jc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Yn(n,n.charAt(0)=="/"?Pw:Ow,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Yn(n,Lw)),t.join("")};function yt(t){return new Gt(t)}function xr(t,e,n){t.j=n?Qn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ur(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xc(t,e,n){e instanceof ys?(t.i=e,xw(t.i,t.h)):(n||(e=Yn(e,Mw)),t.i=new ys(e,t.h))}function de(t,e,n){t.i.set(e,n)}function pi(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Yn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$w),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $w(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jc=/[#\/\?@]/g,Ow=/[#\?:]/g,Pw=/[#\?]/g,Mw=/[#\?@]/g,Lw=/#/g;function ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lt(t){t.g||(t.g=new Map,t.h=0,t.i&&Rw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=ys.prototype;R.add=function(t,e){Lt(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _d(t,e){Lt(t),e=xn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function wd(t,e){return Lt(t),e=xn(t,e),t.g.has(e)}R.forEach=function(t,e){Lt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};R.oa=function(){Lt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};R.W=function(t){Lt(this);let e=[];if(typeof t=="string")wd(this,t)&&(e=e.concat(this.g.get(xn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Lt(this),this.i=null,t=xn(this,t),wd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Id(t,e,n){_d(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),ia(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xw(t,e){e&&!t.j&&(Lt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(_d(this,s),Id(this,r,n))},t)),t.j=e}var Uw=class{constructor(e,n){this.h=e,this.g=n}};function bd(t){this.l=t||Fw,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ga&&q.g.Ga()&&q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fw=10;function Ed(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Td(t){return t.h?1:t.g?t.g.size:0}function ko(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function va(t,e){t.g?t.g.add(e):t.h=e}function kd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bd.prototype.cancel=function(){if(this.i=Sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ia(t.i)}function _a(){}_a.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};_a.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function Vw(){this.g=new _a}function Bw(t,e,n){const s=n||"";try{yd(t,function(r,i){let o=r;Ls(r)&&(o=da(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function jw(t,e){const n=new li;if(q.Image){const s=new Image;s.onload=sr(ir,n,s,"TestLoadImage: loaded",!0,e),s.onerror=sr(ir,n,s,"TestLoadImage: error",!1,e),s.onabort=sr(ir,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=sr(ir,n,s,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ir(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function js(t){this.l=t.ac||null,this.j=t.jb||!1}Ce(js,ga);js.prototype.g=function(){return new gi(this.l,this.j)};js.prototype.i=function(t){return function(){return t}}({});function gi(t,e){Ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(gi,Ee);var wa=0;R=gi.prototype;R.open=function(t,e){if(this.readyState!=wa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vs(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=wa};R.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ad(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ad(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}R.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):vs(this),this.readyState==3&&Ad(this)}};R.Va=function(t){this.g&&(this.response=this.responseText=t,qs(this))};R.Ua=function(t){this.g&&(this.response=t,qs(this))};R.ga=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vs(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qw=q.JSON.parse;function pe(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cd,this.K=this.L=!1}Ce(pe,Ee);var Cd="",zw=/^https?$/i,Kw=["POST","PUT"];R=pe.prototype;R.Ka=function(t){this.L=t};R.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Io.g(),this.C=this.u?Yc(this.u):Yc(Io),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Zc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=q.FormData&&t instanceof q.FormData,!(0<=zh(Kw,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rd(this),0<this.B&&((this.K=Hw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=pa(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Zc(this,i)}};function Hw(t){return kn&&lw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof ra<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Zc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dd(t),mi(t)}function Dd(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),mi(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mi(this,!0)),pe.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?Nd(this):this.fb())};R.fb=function(){Nd(this)};function Nd(t){if(t.h&&typeof ra<"u"&&(!t.C[1]||pt(t)!=4||t.aa()!=2)){if(t.v&&pt(t)==4)pa(t.Ha,0,t);else if(Ae(t,"readystatechange"),pt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(vd)[1]||null;if(!r&&q.self&&q.self.location){var i=q.self.location.protocol;r=i.substr(0,i.length-1)}s=!zw.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<pt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Dd(t)}}finally{mi(t)}}}}function mi(t,e){if(t.g){Rd(t);const n=t.g,s=t.C[0]?Or:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Rd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function pt(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qw(e)}};function el(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $d(t){let e="";return aa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$d(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Od(t){this.Ca=0,this.i=[],this.j=new li,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kn("baseRetryDelayMs",5e3,t),this.bb=Kn("retryDelaySeedMs",1e4,t),this.$a=Kn("forwardChannelMaxRetries",2,t),this.ta=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bd(t&&t.concurrentRequestLimit),this.Fa=new Vw,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=Od.prototype;R.ma=8;R.G=1;function ba(t){if(Pd(t),t.G==3){var e=t.U++,n=yt(t.F);de(n,"SID",t.I),de(n,"RID",e),de(n,"TYPE","terminate"),zs(t,n),e=new Vs(t,t.j,e,void 0),e.K=2,e.v=pi(yt(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=jd(e.l,null),e.g.da(e.v)),e.F=Date.now(),Bs(e)}Vd(t)}function yi(t){t.g&&(Ta(t),t.g.cancel(),t.g=null)}function Pd(t){yi(t),t.u&&(q.clearTimeout(t.u),t.u=null),Fr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function vi(t){Ed(t.h)||t.m||(t.m=!0,nd(t.Ja,t),t.C=0)}function Gw(t,e){return Td(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Us(Me(t.Ja,t,e),Fd(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Vs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Wh(i),Qh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Md(this,r,e),n=yt(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),zs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String($d(i)))+"&"+e:this.o&&Ia(n,this.o,i)),va(this.h,r),this.Ya&&de(n,"TYPE","init"),this.O?(de(n,"$req",e),de(n,"SID","null"),r.Z=!0,Eo(r,n,null)):Eo(r,n,e),this.G=2}}else this.G==3&&(t?tl(this,t):this.i.length==0||Ed(this.h)||tl(this))};function tl(t,e){var n;e?n=e.m:n=t.U++;const s=yt(t.F);de(s,"SID",t.I),de(s,"RID",n),de(s,"AID",t.T),zs(t,s),t.o&&t.s&&Ia(s,t.o,t.s),n=new Vs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Md(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),va(t.h,n),Eo(n,s,e)}function zs(t,e){t.ia&&aa(t.ia,function(n,s){de(e,s,n)}),t.l&&yd({},function(n,s){de(e,s,n)})}function Md(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Bw(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ld(t){t.g||t.u||(t.Z=1,nd(t.Ia,t),t.A=0)}function Ea(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Us(Me(t.Ia,t),Fd(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,xd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Us(Me(this.eb,this),t)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),yi(this),xd(this))};function Ta(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function xd(t){t.g=new Vs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yt(t.sa);de(e,"RID","rpc"),de(e,"SID",t.I),de(e,"CI",t.L?"0":"1"),de(e,"AID",t.T),de(e,"TYPE","xmlhttp"),zs(t,e),t.o&&t.s&&Ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=pi(yt(e)),n.s=null,n.P=!0,fd(n,t)}R.cb=function(){this.v!=null&&(this.v=null,yi(this),Ea(this),Ve(19))};function Fr(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Ud(t,e){var n=null;if(t.g==e){Fr(t),Ta(t),t.g=null;var s=2}else if(ko(t.h,e))n=e.D,kd(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ui(),Ae(s,new ld(s,n)),vi(t)}else Ld(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Gw(t,e)||s==2&&Ea(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function Fd(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new Gt("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||xr(n,"https"),pi(n)),jw(n.toString(),s)}else Ve(2);t.G=0,t.l&&t.l.va(e),Vd(t),Pd(t)}R.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Vd(t){if(t.G=0,t.la=[],t.l){const e=Sd(t.h);(e.length!=0||t.i.length!=0)&&(zc(t.la,e),zc(t.la,t.i),t.h.i.length=0,ia(t.i),t.i.length=0),t.l.ua()}}function Bd(t,e,n){var s=n instanceof Gt?yt(n):new Gt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ur(s,s.m);else{var r=q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Gt(null,void 0);s&&xr(i,s),e&&(i.g=e),r&&Ur(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&de(s,n,e),de(s,"VER",t.ma),zs(t,s),s}function jd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new pe(new js({jb:!0})):new pe(t.ra),e.Ka(t.H),e}function qd(){}R=qd.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function Vr(){if(kn&&!(10<=Number(uw)))throw Error("Environmental error: no available transport.")}Vr.prototype.g=function(t,e){return new ze(t,e)};function ze(t,e){Ee.call(this),this.g=new Od(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Un(this)}Ce(ze,Ee);ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ve(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bd(t,null,t.V),vi(t)};ze.prototype.close=function(){ba(this.g)};ze.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=da(t),t=n);e.i.push(new Uw(e.ab++,t)),e.G==3&&vi(e)};ze.prototype.M=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,ze.X.M.call(this)};function zd(t){ma.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(zd,ma);function Kd(){ya.call(this),this.status=1}Ce(Kd,ya);function Un(t){this.g=t}Ce(Un,qd);Un.prototype.xa=function(){Ae(this.g,"a")};Un.prototype.wa=function(t){Ae(this.g,new zd(t))};Un.prototype.va=function(t){Ae(this.g,new Kd)};Un.prototype.ua=function(){Ae(this.g,"b")};Vr.prototype.createWebChannel=Vr.prototype.g;ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;hi.NO_ERROR=0;hi.TIMEOUT=8;hi.HTTP_ERROR=6;ud.COMPLETE="complete";hd.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.Oa;pe.prototype.getLastErrorCode=pe.prototype.Ea;pe.prototype.getStatus=pe.prototype.aa;pe.prototype.getResponseJson=pe.prototype.Sa;pe.prototype.getResponseText=pe.prototype.fa;pe.prototype.send=pe.prototype.da;pe.prototype.setWithCredentials=pe.prototype.Ka;var Ww=function(){return new Vr},Qw=function(){return ui()},eo=hi,Yw=ud,Xw=cn,nl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Jw=js,or=hd,Zw=pe;const sl="@firebase/firestore";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let Fn="9.18.0";/**
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
 */const nn=new Jr("@firebase/firestore");function rl(){return nn.logLevel}function O(t,...e){if(nn.logLevel<=re.DEBUG){const n=e.map(ka);nn.debug(`Firestore (${Fn}): ${t}`,...n)}}function vt(t,...e){if(nn.logLevel<=re.ERROR){const n=e.map(ka);nn.error(`Firestore (${Fn}): ${t}`,...n)}}function So(t,...e){if(nn.logLevel<=re.WARN){const n=e.map(ka);nn.warn(`Firestore (${Fn}): ${t}`,...n)}}function ka(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function ae(t,e){t||B()}function G(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class e0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class t0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class n0{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new Hd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Re(e)}}class s0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class r0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new s0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class o0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.A=n.token,new i0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=a0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function Sn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _s{constructor(e,n,s){n===void 0?n=0:n>e.length&&B(),s===void 0?s=e.length-n:s>e.length-n&&B(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _s?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends _s{construct(e,n,s){return new le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new le(n)}static emptyPath(){return new le([])}}const c0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends _s{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return c0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new N(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new N(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(le.fromString(e))}static fromName(e){return new M(le.fromString(e).popFirst(5))}static empty(){return new M(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new le(e.slice()))}}function l0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new Rt(r,M.empty(),e)}function u0(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(H.min(),M.empty(),-1)}static max(){return new Rt(H.max(),M.empty(),-1)}}function h0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ks(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==d0)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class p0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ws{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function il(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function _i(t){return t==null}function Br(t){return t===0&&1/t==-1/0}function g0(t){return typeof t=="number"&&Number.isInteger(t)&&!Br(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new m0("Invalid base64 string: "+r):r}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(ae(!!t),typeof t=="string"){let e=0;const n=y0.exec(t);if(ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function An(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yd(t){const e=t.mapValue.fields.__previous_value__;return Qd(e)?Yd(e):e}function Is(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qd(t)?4:v0(t)?9007199254740991:10:B()}function ct(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$t(s.timestampValue),o=$t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return An(s.bytesValue).isEqual(An(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=me(s.doubleValue),o=me(r.doubleValue);return i===o?Br(i)===Br(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Sn(t.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(il(i)!==il(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ct(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function bs(t,e){return(t.values||[]).find(n=>ct(n,e))!==void 0}function Cn(t,e){if(t===e)return 0;const n=sn(t),s=sn(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=me(r.integerValue||r.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ol(t.timestampValue,e.timestampValue);case 4:return ol(Is(t),Is(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=An(r),a=An(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(me(r.latitude),me(i.latitude));return o!==0?o:ie(me(r.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Cn(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ar.mapValue&&i===ar.mapValue)return 0;if(r===ar.mapValue)return 1;if(i===ar.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=Cn(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function ol(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=$t(t),s=$t(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function Dn(t){return Ao(t)}function Ao(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$t(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?An(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ao(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ao(s.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function al(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Co(t){return!!t&&"integerValue"in t}function Aa(t){return!!t&&"arrayValue"in t}function cl(t){return!!t&&"nullValue"in t}function ll(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mr(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ss(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function v0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jr{constructor(e,n){this.position=e,this.inclusive=n}}function ul(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=Cn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ct(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xd{}class ye extends Xd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new w0(e,n,s):n==="array-contains"?new E0(e,s):n==="in"?new T0(e,s):n==="not-in"?new k0(e,s):n==="array-contains-any"?new S0(e,s):new ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new I0(e,s):new b0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cn(n,this.value)):n!==null&&sn(this.value)===sn(n)&&this.matchesComparison(Cn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ze extends Xd{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ze(e,n)}matches(e){return Jd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Jd(t){return t.op==="and"}function Zd(t){return _0(t)&&Jd(t)}function _0(t){for(const e of t.filters)if(e instanceof Ze)return!1;return!0}function Do(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Dn(t.value);if(Zd(t))return t.filters.map(e=>Do(e)).join(",");{const e=t.filters.map(n=>Do(n)).join(",");return`${t.op}(${e})`}}function ef(t,e){return t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.field.isEqual(s.field)&&ct(n.value,s.value)}(t,e):t instanceof Ze?function(n,s){return s instanceof Ze&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ef(i,s.filters[o]),!0):!1}(t,e):void B()}function tf(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Dn(e.value)}`}(t):t instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(tf).join(" ,")+"}"}(t):"Filter"}class w0 extends ye{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class I0 extends ye{constructor(e,n){super(e,"in",n),this.keys=nf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class b0 extends ye{constructor(e,n){super(e,"not-in",n),this.keys=nf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class E0 extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Aa(n)&&bs(n.arrayValue,this.value)}}class T0 extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bs(this.value.arrayValue,n)}}class k0 extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bs(this.value.arrayValue,n)}}class S0 extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Aa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bs(this.value.arrayValue,s))}}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ke.RED,this.left=r??ke.EMPTY,this.right=i??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,s,r){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dl(this.data.getIterator())}getIteratorFrom(e){return new dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Xe([])}unionWith(e){let n=new _e(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=Oe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ss(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());mr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];mr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Vn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(ss(this.value))}}function sf(t){const e=[];return Vn(t.fields,(n,s)=>{const r=new Oe([n]);if(mr(s)){const i=sf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xe(e)}/**
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
 */class $e{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,H.min(),H.min(),H.min(),Ke.empty(),0)}static newFoundDocument(e,n,s,r){return new $e(e,1,n,H.min(),s,r,0)}static newNoDocument(e,n){return new $e(e,2,n,H.min(),H.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,H.min(),H.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class C0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function fl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new C0(t,e,n,s,r,i,o)}function Ca(t){const e=G(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Do(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),_i(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),e._t=n}return e._t}function Da(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ef(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hl(t.startAt,e.startAt)&&hl(t.endAt,e.endAt)}function No(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function D0(t,e,n,s,r,i,o,a){return new Gs(t,e,n,s,r,i,o,a)}function Na(t){return new Gs(t)}function pl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ra(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function of(t){return t.collectionGroup!==null}function bn(t){const e=G(t);if(e.wt===null){e.wt=[];const n=Ra(e),s=rf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new rs(n)),e.wt.push(new rs(Oe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new rs(Oe.keyField(),i))}}}return e.wt}function _t(t){const e=G(t);if(!e.gt)if(e.limitType==="F")e.gt=fl(e.path,e.collectionGroup,bn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of bn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rs(i.field,o))}const s=e.endAt?new jr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new jr(e.startAt.position,e.startAt.inclusive):null;e.gt=fl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Ro(t,e){e.getFirstInequalityField(),Ra(t);const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $o(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wi(t,e){return Da(_t(t),_t(e))&&t.limitType===e.limitType}function af(t){return`${Ca(_t(t))}|lt:${t.limitType}`}function Oo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>tf(s)).join(", ")}]`),_i(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Dn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Dn(s)).join(",")),`Target(${n})`}(_t(t))}; limitType=${t.limitType})`}function Ii(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of bn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ul(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,bn(n),s)||n.endAt&&!function(r,i,o){const a=ul(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,bn(n),s))}(t,e)}function N0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cf(t){return(e,n)=>{let s=!1;for(const r of bn(t)){const i=R0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function R0(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Cn(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function uf(t){return{integerValue:""+t}}function $0(t,e){return g0(e)?uf(e):lf(t,e)}/**
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
 */class bi{constructor(){this._=void 0}}function O0(t,e,n){return t instanceof qr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Es?df(t,e):t instanceof Ts?ff(t,e):function(s,r){const i=hf(s,r),o=gl(i)+gl(s.It);return Co(i)&&Co(s.It)?uf(o):lf(s.Tt,o)}(t,e)}function P0(t,e,n){return t instanceof Es?df(t,e):t instanceof Ts?ff(t,e):n}function hf(t,e){return t instanceof zr?Co(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class qr extends bi{}class Es extends bi{constructor(e){super(),this.elements=e}}function df(t,e){const n=pf(e);for(const s of t.elements)n.some(r=>ct(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ts extends bi{constructor(e){super(),this.elements=e}}function ff(t,e){let n=pf(e);for(const s of t.elements)n=n.filter(r=>!ct(r,s));return{arrayValue:{values:n}}}class zr extends bi{constructor(e,n){super(),this.Tt=e,this.It=n}}function gl(t){return me(t.integerValue||t.doubleValue)}function pf(t){return Aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function M0(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Es&&s instanceof Es||n instanceof Ts&&s instanceof Ts?Sn(n.elements,s.elements,ct):n instanceof zr&&s instanceof zr?ct(n.It,s.It):n instanceof qr&&s instanceof qr}(t.transform,e.transform)}class L0{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ei{}function gf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $a(t.key,rt.none()):new Ws(t.key,t.data,rt.none());{const n=t.data,s=Ke.empty();let r=new _e(Oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ln(t.key,s,new Xe(r.toArray()),rt.none())}}function x0(t,e,n){t instanceof Ws?function(s,r,i){const o=s.value.clone(),a=yl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ln?function(s,r,i){if(!yr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=yl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(mf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function is(t,e,n,s){return t instanceof Ws?function(r,i,o,a){if(!yr(r.precondition,i))return o;const c=r.value.clone(),l=vl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ln?function(r,i,o,a){if(!yr(r.precondition,i))return o;const c=vl(r.fieldTransforms,a,i),l=i.data;return l.setAll(mf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return yr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function U0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=hf(s.transform,r||null);i!=null&&(n===null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function ml(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Sn(n,s,(r,i)=>M0(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ws extends Ei{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ln extends Ei{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function yl(t,e,n){const s=new Map;ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,P0(o,a,n[r]))}return s}function vl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,O0(i,o,e))}return s}class $a extends Ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F0 extends Ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var ge,ee;function B0(t){switch(t){default:return B();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function yf(t){if(t===void 0)return vt("GRPC error has no .code"),w.UNKNOWN;switch(t){case ge.OK:return w.OK;case ge.CANCELLED:return w.CANCELLED;case ge.UNKNOWN:return w.UNKNOWN;case ge.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ge.INTERNAL:return w.INTERNAL;case ge.UNAVAILABLE:return w.UNAVAILABLE;case ge.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ge.NOT_FOUND:return w.NOT_FOUND;case ge.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ge.ABORTED:return w.ABORTED;case ge.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ge.DATA_LOSS:return w.DATA_LOSS;default:return B()}}(ee=ge||(ge={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Bn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wd(this.inner)}size(){return this.innerSize}}/**
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
 */const j0=new Ie(M.comparator);function wt(){return j0}const vf=new Ie(M.comparator);function Xn(...t){let e=vf;for(const n of t)e=e.insert(n.key,n);return e}function _f(t){let e=vf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kt(){return os()}function wf(){return os()}function os(){return new Bn(t=>t.toString(),(t,e)=>t.isEqual(e))}const q0=new Ie(M.comparator),z0=new _e(M.comparator);function Z(...t){let e=z0;for(const n of t)e=e.add(n);return e}const K0=new _e(ie);function If(){return K0}/**
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
 */class Ti{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ti(H.min(),r,If(),wt(),Z())}}class Qs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qs(s,n,Z(),Z(),Z())}}/**
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
 */class vr{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class bf{constructor(e,n){this.targetId=e,this.Rt=n}}class Ef{constructor(e,n,s=Ue.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _l{constructor(){this.Pt=0,this.vt=Il(),this.bt=Ue.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=Z(),n=Z(),s=Z();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:B()}}),new Qs(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Il()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class H0{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=wt(),this.Kt=wl(),this.Gt=new _e(ie)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(No(i))if(s===0){const o=new M(i.path);this.zt(n,o,$e.newNoDocument(o,H.min()))}else ae(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&No(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,$e.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=Z();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Ti(e,n,this.Gt,this.Ut,s);return this.Ut=wt(),this.Kt=wl(),this.Gt=new _e(ie),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new _l,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new _e(ie),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new _l),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function wl(){return new Ie(M.comparator)}function Il(){return new Ie(M.comparator)}/**
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
 */const G0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),W0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Q0=(()=>({and:"AND",or:"OR"}))();class Y0{constructor(e,n){this.databaseId=e,this.yt=n}}function Kr(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tf(t,e){return t.yt?e.toBase64():e.toUint8Array()}function X0(t,e){return Kr(t,e.toTimestamp())}function it(t){return ae(!!t),H.fromTimestamp(function(e){const n=$t(e);return new ve(n.seconds,n.nanos)}(t))}function Oa(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kf(t){const e=le.fromString(t);return ae(Df(e)),e}function Po(t,e){return Oa(t.databaseId,e.path)}function to(t,e){const n=kf(e);if(n.get(1)!==t.databaseId.projectId)throw new N(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Sf(n))}function Mo(t,e){return Oa(t.databaseId,e)}function J0(t){const e=kf(t);return e.length===4?le.emptyPath():Sf(e)}function Lo(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sf(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bl(t,e,n){return{name:Po(t,e),fields:n.value.mapValue.fields}}function Z0(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ae(l===void 0||typeof l=="string"),Ue.fromBase64String(l||"")):(ae(l===void 0||l instanceof Uint8Array),Ue.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:yf(c.code);return new N(l,c.message||"")}(o);n=new Ef(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=to(t,s.document.name),i=it(s.document.updateTime),o=s.document.createTime?it(s.document.createTime):H.min(),a=new Ke({mapValue:{fields:s.document.fields}}),c=$e.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new vr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=to(t,s.document),i=s.readTime?it(s.readTime):H.min(),o=$e.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=to(t,s.document),i=s.removedTargetIds||[];n=new vr([],i,r,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new V0(r),o=s.targetId;n=new bf(o,i)}}return n}function eI(t,e){let n;if(e instanceof Ws)n={update:bl(t,e.key,e.value)};else if(e instanceof $a)n={delete:Po(t,e.key)};else if(e instanceof ln)n={update:bl(t,e.key,e.data),updateMask:lI(e.fieldMask)};else{if(!(e instanceof F0))return B();n={verify:Po(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof qr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Es)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ts)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zr)return{fieldPath:i.field.canonicalString(),increment:o.It};throw B()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:X0(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function tI(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?it(s.updateTime):it(r);return i.isEqual(H.min())&&(i=it(r)),new L0(i,s.transformResults||[])}(n,e))):[]}function nI(t,e){return{documents:[Mo(t,e.path)]}}function sI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Cf(Ze.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:mn(u.field),direction:oI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||_i(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function rI(t){let e=J0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Af(u);return h instanceof Ze&&Zd(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new rs(yn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,_i(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new jr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new jr(d,h)}(n.endAt)),D0(e,r,o,i,a,"F",c,l)}function iI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Af(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yn(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yn(e.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yn(e.unaryFilter.field);return ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(yn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(n=>Af(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function oI(t){return G0[t]}function aI(t){return W0[t]}function cI(t){return Q0[t]}function mn(t){return{fieldPath:t.canonicalString()}}function yn(t){return Oe.fromServerFormat(t.fieldPath)}function Cf(t){return t instanceof ye?function(e){if(e.op==="=="){if(ll(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NAN"}};if(cl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ll(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NAN"}};if(cl(e.value))return{unaryFilter:{field:mn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(e.field),op:aI(e.op),value:e.value}}}(t):t instanceof Ze?function(e){const n=e.getFilters().map(s=>Cf(s));return n.length===1?n[0]:{compositeFilter:{op:cI(e.op),filters:n}}}(t):B()}function lI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Df(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class uI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&x0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=gf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(n,s)=>ml(n,s))&&Sn(this.baseMutations,e.baseMutations,(n,s)=>ml(n,s))}}class Pa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ae(e.mutations.length===s.length);let r=q0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Pa(e,n,s,r)}}/**
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
 */class hI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dI{constructor(e){this.oe=e}}function fI(t){const e=rI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$o(e,e.limit,"L"):e}/**
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
 */class pI{constructor(){this.Ze=new gI}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Rt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class gI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(le.comparator)).toArray()}}/**
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
 */class Nn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Nn(0)}static Sn(){return new Nn(-1)}}/**
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
 */class mI{constructor(){this.changes=new Bn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&is(s.mutation,r,Xe.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=Kt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Xn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=wt();const o=os(),a=os();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ln)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),is(u.mutation,l,u.mutation.getFieldMask(),ve.now())):o.set(l.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new yI(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=os();let r=new Ie((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Xe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wf();u.forEach(d=>{if(!i.has(d)){const p=gf(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):of(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(Kt());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:_f(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=Xn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Xn();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const c=function(l,u){return new Gs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,$e.newInvalidDocument(l)))});let o=Xn();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&is(l.mutation,c,Xe.empty(),ve.now()),Ii(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:it(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:fI(s.bundledQuery),readTime:it(s.readTime)}}(n)),E.resolve()}}/**
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
 */class wI{constructor(){this.overlays=new Ie(M.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kt();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=Kt(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Kt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return E.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new hI(n,s));let i=this.ss.get(n);i===void 0&&(i=Z(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
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
 */class Ma{constructor(){this.rs=new _e(be.os),this.us=new _e(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new M(new le([])),s=new be(n,e),r=new be(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new M(new le([])),s=new be(n,e),r=new be(n,e+1);let i=Z();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return M.comparator(e.key,n.key)||ie(e.gs,n.gs)}static cs(e,n){return ie(e.gs,n.gs)||M.comparator(e.key,n.key)}}/**
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
 */class II{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new _e(be.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),r=new be(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(ie);return n.forEach(r=>{const i=new be(r,0),o=new be(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new be(new M(i),0);let a=new _e(ie);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ae(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,r=>{const i=new be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new be(n,0),r=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bI{constructor(e){this.Rs=e,this.docs=new Ie(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let s=wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$e.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=wt();const o=n.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||h0(u0(u),s)<=0||(r.has(u.key)||Ii(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,s,r){B()}Ps(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new EI(this)}getSize(e){return E.resolve(this.size)}}class EI extends mI{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class TI{constructor(e){this.persistence=e,this.vs=new Bn(n=>Ca(n),Da),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Vs=new Ma,this.targetCount=0,this.Ss=Nn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Nn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
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
 */class kI{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Sa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new TI(this),this.indexManager=new pI,this.remoteDocumentCache=function(s){return new bI(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new dI(n),this.$s=new _I(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new II(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new SI(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class SI extends f0{constructor(e){super(),this.currentSequenceNumber=e}}class La{constructor(e){this.persistence=e,this.Bs=new Ma,this.Ls=null}static qs(e){return new La(e)}get Us(){if(this.Ls)return this.Ls;throw B()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const r=M.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,H.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
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
 */class xa{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xa(e,n.fromCache,s,r)}}/**
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
 */class AI{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(pl(n))return E.resolve(null);let s=_t(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=$o(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Z(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,$o(n,null,"F")):this.qi(e,l,n,c)}))})))}Oi(e,n,s,r){return pl(n)||r.isEqual(H.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(rl()<=re.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Oo(n)),this.qi(e,o,n,l0(r,-1)))})}Bi(e,n){let s=new _e(cf(e));return n.forEach((r,i)=>{Ii(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return rl()<=re.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Oo(n)),this.$i.getDocumentsMatchingQuery(e,n,Rt.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Ie(ie),this.Gi=new Bn(i=>Ca(i),Da),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vI(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function DI(t,e,n,s){return new CI(t,e,n,s)}async function Nf(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function NI(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const g=c.docVersions.get(p);ae(g!==null),y.version.compareTo(g)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Rf(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function RI(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ue.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(y,g,T){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(i,p))});let c=wt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($I(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(H.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function $I(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function OI(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function PI(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Qt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function xo(t,e,n){const s=G(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Hs(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function El(t,e,n){const s=G(t);let r=H.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.Gi.get(l);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_t(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:H.min(),n?i:Z())).next(a=>(MI(s,N0(e),a),{documents:a,Yi:i})))}function MI(t,e,n){let s=t.Qi.get(e)||H.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Tl{constructor(){this.activeTargetIds=If()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LI{constructor(){this.Ur=new Tl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Tl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xI{Gr(e){}shutdown(){}}/**
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
 */class kl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lr=null;function no(){return lr===null?lr=268435456+Math.round(2147483648*Math.random()):lr++,"0x"+lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class FI{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Ne="WebChannelConnection";class VI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=no(),a=this.fo(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(l=>(O("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw So("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Fn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=UI[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=no();return new Promise((o,a)=>{const c=new Zw;c.setWithCredentials(!0),c.listenOnce(Yw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eo.NO_ERROR:const u=c.getResponseJson();O(Ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case eo.TIMEOUT:O(Ne,`RPC '${e}' ${i} timed out`),a(new N(w.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const h=c.getStatus();if(O(Ne,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(g){const T=g.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(T)>=0?T:w.UNKNOWN}(p.status);a(new N(y,p.message))}else a(new N(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new N(w.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{O(Ne,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);O(Ne,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}yo(e,n,s){const r=no(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ww(),a=Qw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Jw({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");O(Ne,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new FI({Yr:g=>{d?O(Ne,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(h||(O(Ne,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),O(Ne,`RPC '${e}' stream ${r} sending:`,g),u.send(g))},Zr:()=>u.close()}),y=(g,T,b)=>{g.listen(T,F=>{try{b(F)}catch(k){setTimeout(()=>{throw k},0)}})};return y(u,or.EventType.OPEN,()=>{d||O(Ne,`RPC '${e}' stream ${r} transport opened.`)}),y(u,or.EventType.CLOSE,()=>{d||(d=!0,O(Ne,`RPC '${e}' stream ${r} transport closed`),p.oo())}),y(u,or.EventType.ERROR,g=>{d||(d=!0,So(Ne,`RPC '${e}' stream ${r} transport errored:`,g),p.oo(new N(w.UNAVAILABLE,"The operation could not be completed")))}),y(u,or.EventType.MESSAGE,g=>{var T;if(!d){const b=g.data[0];ae(!!b);const F=b,k=F.error||((T=F[0])===null||T===void 0?void 0:T.error);if(k){O(Ne,`RPC '${e}' stream ${r} received error:`,k);const j=k.status;let $=function(z){const oe=ge[z];if(oe!==void 0)return yf(oe)}(j),D=k.message;$===void 0&&($=w.INTERNAL,D="Unknown error status: "+j+" with message "+k.message),d=!0,p.oo(new N($,D)),u.close()}else O(Ne,`RPC '${e}' stream ${r} received:`,b),p.uo(b)}}),y(a,Xw.STAT_EVENT,g=>{g.stat===nl.PROXY?O(Ne,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===nl.NOPROXY&&O(Ne,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.ro()},0),p}}function so(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return new Y0(t,!0)}/**
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
 */class $f{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class Of{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new $f(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new N(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BI extends Of{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Z0(this.Tt,e),s=function(r){if(!("targetChange"in r))return H.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?H.min():i.readTime?it(i.readTime):H.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Lo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=No(a)?{documents:nI(r,a)}:{query:sI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Tf(r,i.resumeToken):i.snapshotVersion.compareTo(H.min())>0&&(o.readTime=Kr(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=iI(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Lo(this.Tt),n.removeTarget=e,this.qo(n)}}class jI extends Of{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=tI(e.writeResults,e.commitTime),s=it(e.commitTime);return this.listener.eu(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Lo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eI(this.Tt,s))};this.qo(n)}}/**
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
 */class qI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new N(w.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(w.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(w.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class zI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(vt(n),this.cu=!1):O("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class KI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{un(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.mu.add(4),await Ys(c),c.pu.set("Unknown"),c.mu.delete(4),await Si(c)}(this))})}),this.pu=new zI(s,r)}}async function Si(t){if(un(t))for(const e of t.gu)await e(!0)}async function Ys(t){for(const e of t.gu)await e(!1)}function Pf(t,e){const n=G(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Va(n)?Fa(n):jn(n).Mo()&&Ua(n,e))}function Mf(t,e){const n=G(t),s=jn(n);n.wu.delete(e),s.Mo()&&Lf(n,e),n.wu.size===0&&(s.Mo()?s.Bo():un(n)&&n.pu.set("Unknown"))}function Ua(t,e){t.Iu.Ot(e.targetId),jn(t).Jo(e)}function Lf(t,e){t.Iu.Ot(e),jn(t).Yo(e)}function Fa(t){t.Iu=new H0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),jn(t).start(),t.pu.au()}function Va(t){return un(t)&&!jn(t).$o()&&t.wu.size>0}function un(t){return G(t).mu.size===0}function xf(t){t.Iu=void 0}async function HI(t){t.wu.forEach((e,n)=>{Ua(t,e)})}async function GI(t,e){xf(t),Va(t)?(t.pu.fu(e),Fa(t)):t.pu.set("Unknown")}async function WI(t,e,n){if(t.pu.set("Online"),e instanceof Ef&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Hr(t,s)}else if(e instanceof vr?t.Iu.Qt(e):e instanceof bf?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(H.min()))try{const s=await Rf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Ue.EMPTY_BYTE_STRING,c.snapshotVersion)),Lf(r,a);const l=new Qt(c.target,a,1,c.sequenceNumber);Ua(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Hr(t,s)}}async function Hr(t,e,n){if(!Hs(e))throw e;t.mu.add(1),await Ys(t),t.pu.set("Offline"),n||(n=()=>Rf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Si(t)})}function Uf(t,e){return e().catch(n=>Hr(t,n,e))}async function Ai(t){const e=G(t),n=Ot(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;QI(e);)try{const r=await OI(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,YI(e,r)}catch(r){await Hr(e,r)}Ff(e)&&Vf(e)}function QI(t){return un(t)&&t._u.length<10}function YI(t,e){t._u.push(e);const n=Ot(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Ff(t){return un(t)&&!Ot(t).$o()&&t._u.length>0}function Vf(t){Ot(t).start()}async function XI(t){Ot(t).su()}async function JI(t){const e=Ot(t);for(const n of t._u)e.tu(n.mutations)}async function ZI(t,e,n){const s=t._u.shift(),r=Pa.from(s,e,n);await Uf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ai(t)}async function eb(t,e){e&&Ot(t).Xo&&await async function(n,s){if(r=s.code,B0(r)&&r!==w.ABORTED){const i=n._u.shift();Ot(n).Fo(),await Uf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ai(n)}var r}(t,e),Ff(t)&&Vf(t)}async function Sl(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=un(n);n.mu.add(3),await Ys(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Si(n)}async function tb(t,e){const n=G(t);e?(n.mu.delete(2),await Si(n)):e||(n.mu.add(2),await Ys(n),n.pu.set("Unknown"))}function jn(t){return t.Tu||(t.Tu=function(e,n,s){const r=G(e);return r.ru(),new BI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:HI.bind(null,t),no:GI.bind(null,t),Ho:WI.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Va(t)?Fa(t):t.pu.set("Unknown")):(await t.Tu.stop(),xf(t))})),t.Tu}function Ot(t){return t.Eu||(t.Eu=function(e,n,s){const r=G(e);return r.ru(),new jI(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:XI.bind(null,t),no:eb.bind(null,t),nu:JI.bind(null,t),eu:ZI.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Ai(t)):(await t.Eu.stop(),t._u.length>0&&(O("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Ba{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ba(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ja(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Hs(t))return new N(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class En{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=Xn(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new En(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof En)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Al{constructor(){this.Au=new Ie(M.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):B():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rn(e,n,En.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class nb{constructor(){this.Pu=void 0,this.listeners=[]}}class sb{constructor(){this.queries=new Bn(e=>af(e),wi),this.onlineState="Unknown",this.vu=new Set}}async function rb(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nb),r)try{i.Pu=await n.onListen(s)}catch(o){const a=ja(o,`Initialization of query '${Oo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&qa(n)}async function ib(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ob(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&qa(n)}function ab(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function qa(t){t.vu.forEach(e=>{e.next()})}class cb{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class Bf{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class lb{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Z(),this.mutatedKeys=Z(),this.ju=cf(e),this.zu=new En(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Al,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Ii(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?y!==g&&(s.track({type:3,doc:p}),T=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),T=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),T=!0):d&&!p&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Rn(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Al,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Z(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new jf(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Bf(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Z();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class ub{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hb{constructor(e){this.key=e,this.ic=!1}}class db{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Bn(a=>af(a),wi),this.uc=new Map,this.cc=new Set,this.ac=new Ie(M.comparator),this.hc=new Map,this.lc=new Ma,this.fc={},this.dc=new Map,this._c=Nn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function fb(t,e){const n=Eb(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await PI(n.localStore,_t(e));n.isPrimaryClient&&Pf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await pb(n,e,s,a==="current",o.resumeToken)}return r}async function pb(t,e,n,s,r){t.mc=(h,d,p)=>async function(y,g,T,b){let F=g.view.Hu(T);F.Li&&(F=await El(y.localStore,g.query,!1).then(({documents:$})=>g.view.Hu($,F)));const k=b&&b.targetChanges.get(g.targetId),j=g.view.applyChanges(F,y.isPrimaryClient,k);return Dl(y,g.targetId,j.tc),j.snapshot}(t,h,d,p);const i=await El(t.localStore,e,!0),o=new lb(e,i.Yi),a=o.Hu(i.documents),c=Qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Dl(t,n,l.tc);const u=new ub(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function gb(t,e){const n=G(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!wi(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Mf(n.remoteStore,s.targetId),Uo(n,s.targetId)}).catch(Ks)):(Uo(n,s.targetId),await xo(n.localStore,s.targetId,!0))}async function mb(t,e,n){const s=Tb(t);try{const r=await function(i,o){const a=G(i),c=ve.now(),l=o.reduce((d,p)=>d.add(p.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=wt(),y=Z();return a.ji.getEntries(d,l).next(g=>{p=g,p.forEach((T,b)=>{b.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(g=>{u=g;const T=[];for(const b of o){const F=U0(b,u.get(b.key).overlayedDocument);F!=null&&T.push(new ln(b.key,F,sf(F.value.mapValue),rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(g=>{h=g;const T=g.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,g.batchId,T)})}).then(()=>({batchId:h.batchId,changes:_f(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Ie(ie)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Xs(s,r.changes),await Ai(s.remoteStore)}catch(r){const i=ja(r,"Failed to persist write");n.reject(i)}}async function qf(t,e){const n=G(t);try{const s=await RI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ae(o.ic):r.removedDocuments.size>0&&(ae(o.ic),o.ic=!1))}),await Xs(n,s,e)}catch(s){await Ks(s)}}function Cl(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&qa(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yb(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Ie(M.comparator);o=o.insert(i,$e.newNoDocument(i,H.min()));const a=Z().add(i),c=new Ti(H.min(),new Map,new _e(ie),o,a);await qf(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),za(s)}else await xo(s.localStore,e,!1).then(()=>Uo(s,e,n)).catch(Ks)}async function vb(t,e){const n=G(t),s=e.batch.batchId;try{const r=await NI(n.localStore,e);Kf(n,s,null),zf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xs(n,r)}catch(r){await Ks(r)}}async function _b(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Kf(s,e,n),zf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xs(s,r)}catch(r){await Ks(r)}}function zf(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Kf(t,e,n){const s=G(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Uo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Hf(t,s)})}function Hf(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Mf(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),za(t))}function Dl(t,e,n){for(const s of n)s instanceof Bf?(t.lc.addReference(s.key,e),wb(t,s)):s instanceof jf?(O("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Hf(t,s.key)):B()}function wb(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.cc.add(s),za(t))}function za(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new M(le.fromString(e)),s=t._c.next();t.hc.set(s,new hb(n)),t.ac=t.ac.insert(n,s),Pf(t.remoteStore,new Qt(_t(Na(n.path)),s,2,Sa.at))}}async function Xs(t,e,n){const s=G(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=xa.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Hs(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,i))}async function Ib(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await Nf(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new N(w.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xs(n,s.Wi)}}function bb(t,e){const n=G(t),s=n.hc.get(e);if(s&&s.ic)return Z().add(s.key);{let r=Z();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function Eb(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yb.bind(null,e),e.rc.Ho=ob.bind(null,e.eventManager),e.rc.gc=ab.bind(null,e.eventManager),e}function Tb(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_b.bind(null,e),e}class kb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ki(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return DI(this.persistence,new AI,e.initialUser,this.Tt)}Tc(e){return new kI(La.qs,this.Tt)}Ic(e){return new LI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ib.bind(null,this.syncEngine),await tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sb}createDatastore(e){const n=ki(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new VI(r));var r;return function(i,o,a,c){return new qI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Cl(this.syncEngine,a,0),o=kl.C()?new kl:new xI,new KI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new db(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);O("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ys(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ab{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Cb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=Gd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ja(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Db(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Nf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Nb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Rb(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Sl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Sl(e.remoteStore,i)),t.onlineComponents=e}async function Rb(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await Db(t,new kb)),t.offlineComponents}async function Gf(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await Nb(t,new Sb)),t.onlineComponents}function $b(t){return Gf(t).then(e=>e.syncEngine)}async function Nl(t){const e=await Gf(t),n=e.eventManager;return n.onListen=fb.bind(null,e.syncEngine),n.onUnlisten=gb.bind(null,e.syncEngine),n}const Rl=new Map;/**
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
 */function Wf(t,e,n){if(!n)throw new N(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ob(t,e,n,s){if(e===!0&&s===!0)throw new N(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $l(t){if(!M.isDocumentKey(t))throw new N(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ol(t){if(M.isDocumentKey(t))throw new N(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ci(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ci(t);throw new N(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ob("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new e0;switch(n.type){case"gapi":const s=n.client;return new r0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Rl.get(e);n&&(O("ComponentProvider","Removing Datastore"),Rl.delete(e),n.terminate())}(this),Promise.resolve()}}function Pb(t,e,n,s={}){var r;const i=(t=Yt(t,Di))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&So("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Re.MOCK_USER;else{o=lg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new N(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Re(c)}t._authCredentials=new t0(new Hd(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class qn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qn(this.firestore,e,this._query)}}class Nt extends qn{constructor(e,n,s){super(e,n,Na(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new M(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function Mb(t,e,...n){if(t=we(t),Wf("collection","path",e),t instanceof Di){const s=le.fromString(e,...n);return Ol(s),new Nt(t,null,s)}{if(!(t instanceof Be||t instanceof Nt))throw new N(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return Ol(s),new Nt(t.firestore,null,s)}}function ur(t,e,...n){if(t=we(t),arguments.length===1&&(e=Gd.R()),Wf("doc","path",e),t instanceof Di){const s=le.fromString(e,...n);return $l(s),new Be(t,null,new M(s))}{if(!(t instanceof Be||t instanceof Nt))throw new N(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return $l(s),new Be(t.firestore,t instanceof Nt?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new $f(this,"async_queue_retry"),this.Hc=()=>{const n=so();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=so();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=so();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Wt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Hs(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Ba.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&B()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ml(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ks extends Di{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Lb,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yf(this),this._firestoreClient.terminate()}}function xb(t,e){const n=typeof t=="object"?t:qo(),s=typeof t=="string"?t:e||"(default)",r=an(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=og("firestore");i&&Pb(r,...i)}return r}function Qf(t){return t._firestoreClient||Yf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new p0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Ue.fromBase64String(e))}catch(n){throw new N(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this._methodName=e}}/**
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
 */class Ha{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const Ub=/^__.*__$/;class Fb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ws(e,this.data,n,this.fieldTransforms)}}function Jf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Ga{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Gr(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Jf(this.ra)&&Ub.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ki(e)}wa(e,n,s,r=!1){return new Ga({ra:e,methodName:n,_a:s,path:Oe.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Zf(t){const e=t._freezeSettings(),n=ki(t._databaseId);return new Vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bb(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);np("Data must be an object, but it was:",o,s);const a=ep(s,o);let c,l;if(i.merge)c=new Xe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=qb(e,h,n);if(!o.contains(d))throw new N(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Kb(u,d)||u.push(d)}c=new Xe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Fb(new Ke(a),c,l)}function jb(t,e,n,s=!1){return Wa(n,t.wa(s?4:3,e))}function Wa(t,e){if(tp(t=we(t)))return np("Unsupported field value:",e,t),ep(t,e);if(t instanceof Xf)return function(n,s){if(!Jf(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Wa(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=we(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $0(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:Kr(s.Tt,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Kr(s.Tt,r)}}if(n instanceof Ha)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $n)return{bytesValue:Tf(s.Tt,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Oa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Ci(n)}`)}(t,e)}function ep(t,e){const n={};return Wd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(t,(s,r)=>{const i=Wa(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function tp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Ha||t instanceof $n||t instanceof Be||t instanceof Xf)}function np(t,e,n){if(!tp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ci(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function qb(t,e,n){if((e=we(e))instanceof Ka)return e._internalPath;if(typeof e=="string")return sp(t,e);throw Gr("Field path arguments must be of type string or ",t,!1,void 0,n)}const zb=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(zb)>=0)throw Gr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ka(...e.split("."))._internalPath}catch{throw Gr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new N(w.INVALID_ARGUMENT,a+t+c)}function Kb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ip("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hb extends rp{data(){return super.data()}}function ip(t,e){return typeof e=="string"?sp(t,e):e instanceof Ka?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qa{}class Wb extends Qa{}function Qb(t,e,...n){let s=[];e instanceof Qa&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Xa).length,o=r.filter(a=>a instanceof Ya).length;if(i>1||i>0&&o>0)throw new N(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ya extends Wb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ya(e,n,s)}_apply(e){const n=this._parse(e);return op(e._query,n),new qn(e.firestore,e.converter,Ro(e._query,n))}_parse(e){const n=Zf(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new N(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xl(u,l);const d=[];for(const p of u)d.push(Ll(a,r,p));h={arrayValue:{values:d}}}else h=Ll(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xl(u,l),h=jb(o,i,u,l==="in"||l==="not-in");return ye.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Xa extends Qa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Ze.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)op(i,a),i=Ro(i,a)}(e._query,n),new qn(e.firestore,e.converter,Ro(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ll(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new N(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!of(e)&&n.indexOf("/")!==-1)throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(le.fromString(n));if(!M.isDocumentKey(s))throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return al(t,new M(s))}if(n instanceof Be)return al(t,n._key);throw new N(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ci(n)}.`)}function xl(t,e){if(!Array.isArray(t)||t.length===0)throw new N(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function op(t,e){if(e.isInequality()){const s=Ra(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new N(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=rf(t);i!==null&&Yb(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yb(t,e,n){if(!n.isEqual(e))throw new N(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Xb{convertValue(e,n="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const s={};return Vn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ha(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Yd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=$t(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=le.fromString(e);ae(Df(s));const r=new ws(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ap extends rp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ip("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class _r extends ap{data(e={}){return super.data(e)}}class Zb{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Jn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _r(this._firestore,this._userDataWriter,s.key,s,new Jn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new _r(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new _r(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:eE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}class cp extends Xb{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function Ul(t,e,n){t=Yt(t,Be);const s=Yt(t.firestore,ks),r=Jb(t.converter,e,n);return lp(s,[Bb(Zf(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,rt.none())])}function tE(t){return lp(Yt(t.firestore,ks),[new $a(t._key,rt.none())])}function Fl(t,...e){var n,s,r;t=we(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ml(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ml(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=Yt(t.firestore,ks),u=Na(t._key.path),c={next:h=>{e[o]&&e[o](nE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Yt(t,qn);l=Yt(h.firestore,ks),u=h._query;const d=new cp(l);c={next:p=>{e[o]&&e[o](new Zb(l,d,h,p))},error:e[o+1],complete:e[o+2]},Gb(t._query)}return function(h,d,p,y){const g=new Ab(y),T=new cb(d,g,p);return h.asyncQueue.enqueueAndForget(async()=>rb(await Nl(h),T)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>ib(await Nl(h),T))}}(Qf(l),u,a,c)}function lp(t,e){return function(n,s){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>mb(await $b(n),s,r)),r.promise}(Qf(t),e)}function nE(t,e,n){const s=n.docs.get(e._key),r=new cp(t);return new ap(t,r,e._key,s,new Jn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Fn=n})(Ds),at(new Je("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ks(new n0(n.getProvider("auth-internal")),new o0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ge(sl,"3.9.0",t),Ge(sl,"3.9.0","esm2017")})();const sE={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},up=Vu(sE),Ut=$v(up);my(Ut,hh);const Hn=xb(up);H_();const rE=new ut,iE=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=As(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return ch(Ut,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return py(Ut,r,i)},async signInWithEmail(r,i){return gy(Ut,r,i)},async signInWithGoogle(){return jy(Ut,rE)},async signOut(){return _y(Ut)}}},oE=iE(),Vl="/assets/default-user-a40c52dd.png";function aE(t){let e;return{c(){e=_("i"),f(e,"class","codicon codicon-account")},m(n,s){A(n,e,s)},p:C,d(n){n&&S(e)}}}function cE(t){let e,n;return{c(){e=_("img"),f(e,"class","profile-picture svelte-1m717b8"),Er(e.src,n=t[0].user.photoURL??Vl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){A(s,e,r)},p(s,r){r&1&&!Er(e.src,n=s[0].user.photoURL??Vl)&&f(e,"src",n)},d(s){s&&S(e)}}}function lE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,T,b,F;o=new Jp({});function k(D,z){return D[0].loggedIn?cE:aE}let j=k(t),$=j(t);return{c(){e=_("header"),n=_("div"),s=_("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=P(),i=_("a"),U(o.$$.fragment),a=P(),c=_("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=P(),u=_("nav"),h=_("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=P(),p=_("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',y=P(),g=_("button"),$.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(g,"title","Account"),f(g,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(D,z){A(D,e,z),m(e,n),m(n,s),m(n,r),m(n,i),L(o,i,null),m(n,a),m(n,c),m(e,l),m(e,u),m(u,h),m(u,d),m(u,p),m(u,y),m(u,g),$.m(g,null),T=!0,b||(F=[Y(c,"click",t[1]),Y(h,"click",t[2]),Y(p,"click",t[3]),Y(g,"click",t[4])],b=!0)},p(D,[z]){j===(j=k(D))&&$?$.p(D,z):($.d(1),$=j(D),$&&($.c(),$.m(g,null)))},i(D){T||(v(o.$$.fragment,D),T=!0)},o(D){I(o.$$.fragment,D),T=!1},d(D){D&&S(e),x(o),$.d(),b=!1,je(F)}}}function uE(t,e,n){let s;return He(t,oE,c=>n(0,s=c)),[s,()=>Vt.navigateTo("help"),()=>Vt.navigateTo("search"),()=>Vt.navigateTo("settings"),()=>Vt.navigateTo("account")]}class hE extends J{constructor(e){super(),X(this,e,uE,lE,Q,{})}}const dE="modulepreload",fE=function(t){return"/"+t},Bl={},Ni=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fE(i),i in Bl)return;Bl[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Js=t=>typeof t=="string"&&t!=="",Ri=t=>typeof t=="number"&&t>=0;let pE=class{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,T,b){this.preview_url=e,this.sample_url=n,this.file_url=s,this.comment_count=r,this.height=i,this.id=o,this.change=a,this.parent_id=c,this.rating=l,this.sample_height=u,this.sample_width=h,this.score=d,this.source=p,this.status=y,this.tags=g,this.width=T,this.type=b,Object.freeze(this)}};const gE=Object.freeze(["id","score","updated"]),mE=t=>typeof t=="string"&&gE.includes(t),wr=Object.freeze(["+","-","~"]),$i=t=>wr.includes(t),hp=t=>{if(!$i(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(wr.indexOf(t)+1)%wr.length;return wr[n]},yE=Object.freeze({"+":"","-":"-","~":""}),vE=t=>{if(!$i(t))throw TypeError("Invalid modifier passed to serializeModifier");return yE[t]};class Oi{constructor(e,n){if(!$i(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Js(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${vE(this.modifier)}${encodeURIComponent(this.name)}`}}const Ja=(t,e)=>{if(!dp(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!_E(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},dp=t=>{try{return new URL(t),!0}catch{return!1}},_E=t=>t===null||t instanceof AbortController,fp=Object.freeze(["artist","character","copyright","source","metadata","rating","tag","general","ambiguous","supertag"]),pp=t=>fp.includes(t),jl=t=>{const e=fp.indexOf(t);return e>=0?e:99},wE=Object.freeze(["artist","character","copyright","source","metadata","rating"]),IE=t=>wE.includes(t);let Pi=class{constructor(e,n,s,r){if(!$i(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Js(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Ri(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!pp(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}};const gp=t=>new Oi(t.modifier,t.name);class Za{constructor(e,n,s){if(!Js(e))throw TypeError("Invalid name passed to Tag constructor");if(!Ri(n))throw TypeError("Invalid count passed to Tag constructor");if(!pp(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}}const bE=(t,e)=>new Pi(e,t.name,t.count,t.type);let EE=null;const TE=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await Ja(`${e}${n}`,EE);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length===0)throw new Error("No tags found");return r.map(i=>new Za(mp(i.value),Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},mp=t=>t.replaceAll("&#034;",'"').replaceAll("&#038;","&").replaceAll("&#039;","'"),yp=20;let vp=null;const _p=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},ql=async(t,e,n,s)=>{wp(t,e,n,s);const r=Ip(e,n,s),i=await Ja($E(t,r),vp);_p(i);const a=(await i.json()).map(SE);return PE(a),a},kE=async(t,e,n)=>{wp(0,t,e,n);const s=Ip(t,e,n),r=await Ja(OE(s),vp);_p(r);const i=await r.text(),a=new DOMParser().parseFromString(i,"text/xml"),c=Number(a.getElementsByTagName("posts")[0].getAttribute("count"));return ME(c),c},SE=t=>{const e=t.height,n=t.score,s=t.preview_url,r=t.file_url,i=t.parent_id,o=t.sample_url,a=t.sample_width,c=t.sample_height,l=t.rating,u=t.tag_info,h=t.id,d=t.width,p=t.change,y=t.comment_count,g=t.status,T=t.source;return new pE(s,o,r,Number(y),Number(e),Number(h),Number(p)*1e3,i?Number(i):null,l,Number(c),Number(a),Number(n),T,g,AE(u),Number(d),r.endsWith(".webm")||r.endsWith(".mp4")?"video":r.includes(".gif")?"gif":"image")},AE=t=>t.map(e=>new Za(mp(e.tag),e.count,e.type)).sort((e,n)=>jl(e.type)-jl(n.type)),wp=(t,e,n,s)=>{if(!CE(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!DE(e))throw new TypeError("Invalid array of tags passed to getPage");if(!mE(n))throw new TypeError("Invalid sort property passed to getPage");if(!NE(s))throw new TypeError("Invalid minimum score passed to getPage")},CE=t=>typeof t=="number"&&t>=0,DE=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Oi)),NE=t=>typeof t=="number"&&t>=0,RE=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},Ip=(t,e,n)=>{const s=RE(t),r=[...zl([...s["+"],...s["-"]]),`score:>=${n}`,`sort:${e}:desc`].join("+");return s["~"].length===0?r:`${r}+( ${zl(s["~"]).join(" ~ ")} )`},zl=t=>t.map(e=>e.serialize()),$E=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&fields=tag_info&json=1&limit=${yp}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},OE=t=>{const e="https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=0";return t===""?e:`${e}&tags=${t}`},PE=t=>{if(!Array.isArray(t))throw new Error("Unexpected response received in getPage")},ME=t=>{if(!Ri(t))throw new Error("Unexpected response received in getPage")};let LE=class{constructor(e,n,s){xE(e),FE(n),UE(s),this.author=e,this.createdAt=n,this.content=s,Object.freeze(this)}};const xE=t=>{if(typeof t!="string")throw new TypeError("Invalid author in comment")},UE=t=>{if(typeof t!="string")throw new TypeError("Invalid content in comment")},FE=t=>{if(typeof t!="string")throw new TypeError("Invalid creation date in comment")},Kl="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",Hl=async(t=void 0)=>{if(typeof t!="number"&&t!==void 0)throw new TypeError("Invalid postId");const e=t===void 0?Kl:`${Kl}&post_id=${t}`,n=await fetch(e);if(!n.ok)throw new Error("Failed to get tag suggestions");const s=await n.text(),i=new DOMParser().parseFromString(s,"text/xml"),o=[];for(const a of i.getElementsByTagName("comment"))o.push(VE(a.attributes));return o},VE=t=>{const e=t.getNamedItem("creator"),n=t.getNamedItem("created_at"),s=t.getNamedItem("body");if(e==null||n==null||s==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${n}, ${s}`);return new LE(e.value,n.value,s.value)};class bp{constructor(e,n,s){if(!Js(e))throw new TypeError("Invalid name passed to Supertag");if(!BE(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const BE=t=>Array.isArray(t)&&t.every(e=>e instanceof Oi),jE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=As(t);let s,r=null,i=null;return ch(Ut,async o=>{s=o,o?r=Fl(ur(Hn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=Qb(Mb(Hn,`users/${o.uid}/supertags`));i==null||i(),i=Fl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new bp(d.id,p.description,Object.entries(p.tags).map(y=>new Oi(y[1],y[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Ul(ur(Hn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return tE(ur(Hn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(s)return Ul(ur(Hn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Wr=jE();function qE(t){let e,n,s,r;return{c(){e=_("button"),n=fe(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){A(i,e,o),m(e,n),s||(r=Y(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Se(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:C,o:C,d(i){i&&S(e),s=!1,r()}}}function zE(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ye(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class Ep extends J{constructor(e){super(),X(this,e,zE,qE,Q,{text:0,title:1,disabled:2})}}function Mi(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t(e))}}const KE=Intl.NumberFormat("en",{notation:"compact"}),Pt=t=>{if(!Ri(t))throw new TypeError("Invalid value passed to formatCount");return KE.format(t)};function On(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Gl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function HE(t){let e,n;return{c(){e=_("i"),f(e,"class",n=`codicon codicon-${Gl[t[0]]}`)},m(s,r){A(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${Gl[s[0]]}`)&&f(e,"class",n)},i:C,o:C,d(s){s&&S(e)}}}function GE(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class ec extends J{constructor(e){super(),X(this,e,GE,HE,Q,{type:0})}}const Wl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Ql=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Yl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Xl(t){let e,n;return e=new ec({props:{type:t[0].type}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Jl(t){let e,n=Pt(t[0].count)+"",s,r;return{c(){e=fe("("),s=fe(n),r=fe(")")},m(i,o){A(i,e,o),A(i,s,o),A(i,r,o)},p(i,o){o&1&&n!==(n=Pt(i[0].count)+"")&&Se(s,n)},d(i){i&&S(e),i&&S(s),i&&S(r)}}}function WE(t){let e,n,s=On(t[0].name)+"",r,i,o,a,c,l,u=t[0].type=="supertag"&&Xl(t),h=t[0].count&&Jl(t);return{c(){e=_("li"),u&&u.c(),n=P(),r=fe(s),i=P(),h&&h.c(),f(e,"class",o=ot(Yl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to remove tag"),Pe(e,"no-icon",t[0].type!=="supertag")},m(d,p){A(d,e,p),u&&u.m(e,null),m(e,n),m(e,r),m(e,i),h&&h.m(e,null),a=!0,c||(l=[Y(e,"click",t[2]),Y(e,"contextmenu",Fo(t[3]))],c=!0)},p(d,[p]){d[0].type=="supertag"?u?(u.p(d,p),p&1&&v(u,1)):(u=Xl(d),u.c(),v(u,1),u.m(e,n)):u&&(ue(),I(u,1,1,()=>{u=null}),he()),(!a||p&1)&&s!==(s=On(d[0].name)+"")&&Se(r,s),d[0].count?h?h.p(d,p):(h=Jl(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),(!a||p&1&&o!==(o=ot(Yl[d[0].modifier])+" svelte-13vl0re"))&&f(e,"class",o),(!a||p&1)&&Pe(e,"no-icon",d[0].type!=="supertag")},i(d){a||(v(u),a=!0)},o(d){I(u),a=!1},d(d){d&&S(e),u&&u.d(),h&&h.d(),c=!1,je(l)}}}function QE(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Tp extends J{constructor(e){super(),X(this,e,QE,WE,Q,{tag:0})}}function Zl(t,e,n){const s=t.slice();return s[9]=e[n],s}function eu(t){let e,n;return e=new Tp({props:{tag:t[9]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function YE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,T,b,F,k,j,$,D,z,oe,Te=t[2],te=[];for(let ne=0;ne<Te.length;ne+=1)te[ne]=eu(Zl(t,Te,ne));const zn=ne=>I(te[ne],1,1,()=>{te[ne]=null});return $=new Ep({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),$.$on("click",t[8]),{c(){e=_("dialog"),n=_("h3"),n.textContent="Create Supertag",s=P(),r=_("i"),i=P(),o=_("div"),a=_("label"),a.textContent="Name",c=P(),l=_("input"),u=P(),h=_("div"),d=_("label"),d.textContent="Description",p=P(),y=_("textarea"),g=P(),T=_("div"),b=_("span"),b.textContent="Tags",F=P(),k=_("ol");for(let ne=0;ne<te.length;ne+=1)te[ne].c();j=P(),U($.$$.fragment),f(r,"tabindex","0"),f(r,"role","button"),f(r,"class",ot("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(y,"type","text"),f(y,"placeholder","Short description"),f(y,"id","supertag-description"),f(y,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(b,"class","svelte-ax50wm"),f(k,"class","svelte-ax50wm"),f(T,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ne,se){A(ne,e,se),m(e,n),m(e,s),m(e,r),m(e,i),m(e,o),m(o,a),m(o,c),m(o,l),At(l,t[0]),m(e,u),m(e,h),m(h,d),m(h,p),m(h,y),At(y,t[1]),m(e,g),m(e,T),m(T,b),m(T,F),m(T,k);for(let De=0;De<te.length;De+=1)te[De]&&te[De].m(k,null);m(e,j),L($,e,null),D=!0,z||(oe=[Y(r,"click",t[5]),Y(r,"keyup",Mi(t[5])),Y(l,"input",t[6]),Y(y,"input",t[7])],z=!0)},p(ne,[se]){if(se&1&&l.value!==ne[0]&&At(l,ne[0]),se&2&&At(y,ne[1]),se&4){Te=ne[2];let W;for(W=0;W<Te.length;W+=1){const Zs=Zl(ne,Te,W);te[W]?(te[W].p(Zs,se),v(te[W],1)):(te[W]=eu(Zs),te[W].c(),v(te[W],1),te[W].m(k,null))}for(ue(),W=Te.length;W<te.length;W+=1)zn(W);he()}const De={};se&8&&(De.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),se&8&&(De.disabled=!ne[3]),$.$set(De)},i(ne){if(!D){for(let se=0;se<Te.length;se+=1)v(te[se]);v($.$$.fragment,ne),D=!0}},o(ne){te=te.filter(Boolean);for(let se=0;se<te.length;se+=1)I(te[se]);I($.$$.fragment,ne),D=!1},d(ne){ne&&S(e),rn(te,ne),x($),z=!1,je(oe)}}}function XE(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ye(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new bp(r,i,o.map(gp))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Js(r))},[r,i,o,s,a,c,l,u,h]}class JE extends J{constructor(e){super(),X(this,e,XE,YE,Q,{name:0,description:1,tags:2})}}function ZE(t){let e,n,s,r,i;return{c(){e=_("i"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"class",n=ot(`codicon codicon-${Wl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=Ql[t[0]])},m(o,a){A(o,e,a),r||(i=[Y(e,"click",t[1]),Y(e,"keyup",Mi(t[1])),Y(e,"touchend",Fo(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=ot(`codicon codicon-${Wl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=Ql[o[0]])&&f(e,"title",s)},i:C,o:C,d(o){o&&S(e),r=!1,je(i)}}}function eT(t,e,n){let s="+";const r=Ye();return[s,()=>{n(0,s=hp(s)),r("change",s)}]}class tT extends J{constructor(e){super(),X(this,e,eT,ZE,Q,{})}}function nT(t){let e;return{c(){e=_("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class tc extends J{constructor(e){super(),X(this,e,null,nT,Q,{})}}function sT(t){let e,n,s,r,i=On(t[0].name)+"",o,a,c,l=Pt(t[0].count)+"",u,h,d,p,y;return n=new ec({props:{type:t[0].type}}),{c(){e=_("li"),U(n.$$.fragment),s=P(),r=_("span"),o=fe(i),a=P(),c=_("span"),u=fe(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(g,T){A(g,e,T),L(n,e,null),m(e,s),m(e,r),m(r,o),m(e,a),m(e,c),m(c,u),d=!0,p||(y=Y(e,"click",t[2]),p=!0)},p(g,[T]){const b={};T&1&&(b.type=g[0].type),n.$set(b),(!d||T&1)&&i!==(i=On(g[0].name)+"")&&Se(o,i),(!d||T&1)&&l!==(l=Pt(g[0].count)+"")&&Se(u,l),(!d||T&1&&h!==(h=g[0].name))&&f(e,"title",h)},i(g){d||(v(n.$$.fragment,g),d=!0)},o(g){I(n.$$.fragment,g),d=!1},d(g){g&&S(e),x(n),p=!1,y()}}}function rT(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class iT extends J{constructor(e){super(),X(this,e,rT,sT,Q,{tag:0})}}function tu(t,e,n){const s=t.slice();return s[16]=e[n],s}function oT(t){let e,n,s,r,i=t[19].message+"",o;return{c(){e=_("div"),n=_("i"),s=P(),r=_("span"),o=fe(i),f(n,"class",ot("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){A(a,e,c),m(e,n),m(e,s),m(e,r),m(r,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&Se(o,i)},i:C,o:C,d(a){a&&S(e)}}}function aT(t){let e,n,s,r=t[4],i=[];for(let a=0;a<r.length;a+=1)i[a]=nu(tu(t,r,a));const o=a=>I(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=P(),n=_("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,c);A(a,e,c),A(a,n,c),s=!0},p(a,c){if(c&116){r=a[4];let l;for(l=0;l<r.length;l+=1){const u=tu(a,r,l);i[l]?(i[l].p(u,c),v(i[l],1)):(i[l]=nu(u),i[l].c(),v(i[l],1),i[l].m(e.parentNode,e))}for(ue(),l=r.length;l<i.length;l+=1)o(l);he()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)v(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)I(i[c]);s=!1},d(a){rn(i,a),a&&S(e),a&&S(n)}}}function nu(t){let e,n;function s(){return t[12](t[16])}return e=new iT({props:{tag:t[16]}}),e.$on("click",s),{c(){U(e.$$.fragment)},m(r,i){L(e,r,i),n=!0},p(r,i){t=r;const o={};i&16&&(o.tag=t[16]),e.$set(o)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){I(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function cT(t){let e,n,s;return n=new tc({}),{c(){e=_("div"),U(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){A(r,e,i),L(n,e,null),s=!0},p:C,i(r){s||(v(n.$$.fragment,r),s=!0)},o(r){I(n.$$.fragment,r),s=!1},d(r){r&&S(e),x(n)}}}function lT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y;o=new tT({}),o.$on("change",t[9]);let g={ctx:t,current:null,token:null,hasCatch:!0,pending:cT,then:aT,catch:oT,error:19,blocks:[,,,]};return Tr(h=t[1],g),{c(){e=_("div"),n=_("i"),s=P(),r=_("input"),i=P(),U(o.$$.fragment),a=P(),c=_("i"),l=P(),u=_("ol"),g.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(c,"tabindex","0"),f(c,"role","button"),f(c,"class","codicon codicon-question spaced svelte-2fyyfo"),f(u,"class","svelte-2fyyfo"),Pe(u,"open",t[3]),f(e,"class","searchbar svelte-2fyyfo"),Pe(e,"open",t[3])},m(T,b){A(T,e,b),m(e,n),m(e,s),m(e,r),At(r,t[0]),m(e,i),L(o,e,null),m(e,a),m(e,c),m(e,l),m(e,u),g.block.m(u,g.anchor=null),g.mount=()=>u,g.anchor=null,d=!0,p||(y=[Y(r,"input",t[7]),Y(r,"blur",t[8]),Y(c,"click",t[10]),Y(c,"keyup",Mi(t[11])),Y(e,"blur",t[13])],p=!0)},p(T,[b]){t=T,b&1&&r.value!==t[0]&&At(r,t[0]),g.ctx=t,b&2&&h!==(h=t[1])&&Tr(h,g)||Cu(g,t,b),(!d||b&8)&&Pe(u,"open",t[3]),(!d||b&8)&&Pe(e,"open",t[3])},i(T){d||(v(o.$$.fragment,T),v(g.block),d=!0)},o(T){I(o.$$.fragment,T);for(let b=0;b<3;b+=1){const F=g.blocks[b];I(F)}d=!1},d(T){T&&S(e),x(o),g.block.d(),g.token=null,g=null,p=!1,je(y)}}}function uT(t,e,n){let s;He(t,Wr,k=>n(14,s=k));const r=Ye();let i,o="",a="+",c=!1,l=[];async function u(k){n(3,c=!0),n(4,l=[...s.supertags.filter(j=>j.name.toLowerCase().includes(k.toLowerCase())).map(j=>new Za(j.name,Object.keys(j.tags).length,"supertag")),...await TE(k)])}const h=()=>{n(0,o=""),n(4,l=[]),n(3,c=!1)};function d(){o=this.value,n(0,o)}const p=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(3,c=!1)},y=k=>{n(2,a=k.detail)},g=()=>Vt.navigateTo("help"),T=()=>Vt.navigateTo("help"),b=k=>{r("pick",bE(k,a)),h()},F=()=>{n(3,c=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(4,l=[]),o!==""&&n(1,i=u(o)))},[o,i,a,c,l,r,h,d,p,y,g,T,b,F]}class hT extends J{constructor(e){super(),X(this,e,uT,lT,Q,{})}}const kp=JSON.parse,Sp=JSON.stringify,Ap=(t,e,n=Sp,s=kp)=>{const r=Cp(t,s),i=As(r??e);return i.subscribe(o=>localStorage.setItem(t,n(o))),i},nc=(t,e,n=Sp,s=kp)=>{const i=localStorage.getItem("isPersistedLocally")==="true"?Cp(t,s):null,o=As(i??e);return o.subscribe(a=>localStorage.setItem(t,n(a))),o},Cp=(t,e)=>{try{return e(localStorage.getItem(t))}catch{return null}};function dT(){const t=[],{subscribe:e,update:n,set:s}=nc("activeTags",t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Pi("+",r,0,"general")),i))},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const gt=dT();function su(t){let e,n;return e=new ec({props:{type:t[0].type}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.type=s[0].type),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function fT(t){let e,n,s=On(t[0].name)+"",r,i,o,a,c,l=t[2]&&su(t);return{c(){e=_("li"),l&&l.c(),n=P(),r=fe(s),f(e,"tabindex","0"),f(e,"role","button"),f(e,"title","Click to add tag"),f(e,"class",i=ot(t[0].type)+" svelte-19ya21f"),Pe(e,"active",t[3]),Pe(e,"icon",t[2])},m(u,h){A(u,e,h),l&&l.m(e,null),m(e,n),m(e,r),o=!0,a||(c=Y(e,"click",t[5]),a=!0)},p(u,[h]){u[2]?l?(l.p(u,h),h&4&&v(l,1)):(l=su(u),l.c(),v(l,1),l.m(e,n)):l&&(ue(),I(l,1,1,()=>{l=null}),he()),(!o||h&1)&&s!==(s=On(u[0].name)+"")&&Se(r,s),(!o||h&1&&i!==(i=ot(u[0].type)+" svelte-19ya21f"))&&f(e,"class",i),(!o||h&9)&&Pe(e,"active",u[3]),(!o||h&5)&&Pe(e,"icon",u[2])},i(u){o||(v(l),o=!0)},o(u){I(l),o=!1},d(u){u&&S(e),l&&l.d(),a=!1,c()}}}function pT(t,e,n){let s,r,i,o;He(t,gt,l=>n(4,o=l));let{tag:a}=e;const c=()=>r?gt.removeByIndex(s):gt.addByName(a.name);return t.$$set=l=>{"tag"in l&&n(0,a=l.tag)},t.$$.update=()=>{t.$$.dirty&17&&n(1,s=o.findIndex(l=>l.name===a.name)),t.$$.dirty&2&&n(3,r=s>=0),t.$$.dirty&1&&n(2,i=IE(a.type))},[a,s,i,r,o,c]}class gT extends J{constructor(e){super(),X(this,e,pT,fT,Q,{tag:0})}}function mT(t){let e,n,s,r,i;return{c(){e=_("i"),n=P(),s=_("a"),r=fe(t[1]),f(e,"class","codicon codicon-link"),f(s,"href",i=t[0].toString()),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,r)},p(o,[a]){a&2&&Se(r,o[1]),a&1&&i!==(i=o[0].toString())&&f(s,"href",i)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function yT(t,e,n){let s,{url:r}=e;return t.$$set=i=>{"url"in i&&n(0,r=i.url)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=r.hostname.replace(/^www./,""))},[r,s]}class vT extends J{constructor(e){super(),X(this,e,yT,mT,Q,{url:0})}}function _T(t){let e,n,s,r;return{c(){e=_("i"),n=P(),s=_("span"),r=fe(t[0]),f(e,"class","codicon codicon-link")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),m(s,r)},p(i,o){o&1&&Se(r,i[0])},i:C,o:C,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function wT(t){let e,n;return e=new vT({props:{url:t[1]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.url=s[1]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function IT(t){let e,n,s,r;const i=[wT,_T],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ue(),I(o[u],1,1,()=>{o[u]=null}),he(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function bT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=dp(r)?new URL(r):null)},[r,s]}class ET extends J{constructor(e){super(),X(this,e,bT,IT,Q,{source:0})}}function TT(t){let e,n;const s=t[1].default,r=Mp(s,t,t[0],null);return{c(){e=_("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){A(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&xp(r,s,i,i[0],n?Lp(s,i[0],o,null):Up(i[0]),null)},i(i){n||(v(r,i),n=!0)},o(i){I(r,i),n=!1},d(i){i&&S(e),r&&r.d(i)}}}function kT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Ir extends J{constructor(e){super(),X(this,e,kT,TT,Q,{})}}const ru=6e4,Qr=t=>{if(!ST(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/ru,s=new Date().getTime()/ru-e;if(s<1)return"just now";if(s<60)return pn(s,"minute");const r=s/60;if(r<24)return pn(r,"hour");const i=r/24;if(i<7)return pn(i,"day");if(i<30.5)return pn(i/7,"week");if(i<365.25)return pn(i/30.5,"month");const o=i/365.25;return pn(o,"year")},ST=t=>["number","string"].includes(typeof t)&&new Date(t).toString()!=="Invalid Date",pn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function AT(t){let e,n,s,r=Qr(t[0])+"",i;return{c(){e=_("i"),n=P(),s=_("span"),i=fe(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,i)},p(o,[a]){a&1&&r!==(r=Qr(o[0])+"")&&Se(i,r)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function CT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class DT extends J{constructor(e){super(),X(this,e,CT,AT,Q,{value:0})}}function NT(t){let e,n,s,r=Pt(t[0])+"",i;return{c(){e=_("i"),n=P(),s=_("span"),i=fe(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),m(s,i)},p(o,[a]){a&1&&r!==(r=Pt(o[0])+"")&&Se(i,r)},i:C,o:C,d(o){o&&S(e),o&&S(n),o&&S(s)}}}function RT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class $T extends J{constructor(e){super(),X(this,e,RT,NT,Q,{value:0})}}function OT(t){let e,n,s=t[0].author+"",r,i,o,a=Qr(t[0].createdAt)+"",c,l,u,h=t[0].content+"",d;return{c(){e=_("div"),n=_("span"),r=fe(s),i=P(),o=_("span"),c=fe(a),l=P(),u=_("span"),d=fe(h),f(n,"class","author svelte-18d2c69"),f(o,"class","created-at svelte-18d2c69"),f(u,"class","content svelte-18d2c69"),f(e,"class","svelte-18d2c69")},m(p,y){A(p,e,y),m(e,n),m(n,r),m(e,i),m(e,o),m(o,c),m(e,l),m(e,u),m(u,d)},p(p,[y]){y&1&&s!==(s=p[0].author+"")&&Se(r,s),y&1&&a!==(a=Qr(p[0].createdAt)+"")&&Se(c,a),y&1&&h!==(h=p[0].content+"")&&Se(d,h)},i:C,o:C,d(p){p&&S(e)}}}function PT(t,e,n){let{comment:s}=e;return t.$$set=r=>{"comment"in r&&n(0,s=r.comment)},[s]}class MT extends J{constructor(e){super(),X(this,e,PT,OT,Q,{comment:0})}}function LT(t){let e,n,s,r;return{c(){e=_("i"),n=P(),s=_("a"),r=fe("rule34.xxx"),f(e,"class","codicon codicon-link-external"),f(s,"href",t[0]),f(s,"target","_newtab"),f(s,"class","svelte-wfhmk4")},m(i,o){A(i,e,o),A(i,n,o),A(i,s,o),m(s,r)},p(i,[o]){o&1&&f(s,"href",i[0])},i:C,o:C,d(i){i&&S(e),i&&S(n),i&&S(s)}}}function xT(t,e,n){let{url:s}=e;return t.$$set=r=>{"url"in r&&n(0,s=r.url)},[s]}class UT extends J{constructor(e){super(),X(this,e,xT,LT,Q,{url:0})}}function iu(t,e,n){const s=t.slice();return s[8]=e[n],s}function ou(t,e,n){const s=t.slice();return s[4]=e[n],s}function au(t){let e,n,s,r,i;return{c(){e=_("i"),n=P(),s=_("i"),f(e,"class","codicon codicon-tag svelte-1mq2skj"),Pe(e,"active",t[1]==="tags"),f(s,"class","codicon codicon-comment-discussion svelte-1mq2skj"),Pe(s,"active",t[1]==="comments")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),r||(i=[Y(e,"click",t[2]),Y(s,"click",t[3])],r=!0)},p(o,a){a&2&&Pe(e,"active",o[1]==="tags"),a&2&&Pe(s,"active",o[1]==="comments")},d(o){o&&S(e),o&&S(n),o&&S(s),r=!1,je(i)}}}function FT(t){let e,n;return e=new DT({props:{value:t[0].change}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].change),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function VT(t){let e,n;return e=new $T({props:{value:t[0].score}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function BT(t){let e,n;return e=new UT({props:{url:t[0].file_url}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.url=s[0].file_url),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function cu(t){let e,n;return e=new Ir({props:{$$slots:{default:[jT]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2049&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function jT(t){let e,n;return e=new ET({props:{source:t[0].source}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function qT(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:QT,then:HT,catch:KT,value:7,blocks:[,,,]};return Tr(n=Hl(t[0].id),r),{c(){e=lt(),r.block.c()},m(i,o){A(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,o&1&&n!==(n=Hl(t[0].id))&&Tr(n,r)||Cu(r,t,o)},i(i){s||(v(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];I(a)}s=!1},d(i){i&&S(e),r.block.d(i),r.token=null,r=null}}}function zT(t){let e,n,s=t[0].tags,r=[];for(let o=0;o<s.length;o+=1)r[o]=uu(ou(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","tags svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[0].tags;let c;for(c=0;c<s.length;c+=1){const l=ou(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=uu(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ue(),c=s.length;c<r.length;c+=1)i(c);he()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&S(e),rn(r,o)}}}function KT(t){return{c:C,m:C,p:C,i:C,o:C,d:C}}function HT(t){let e,n,s,r;const i=[WT,GT],o=[];function a(c,l){return c[7].length>0?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ue(),I(o[u],1,1,()=>{o[u]=null}),he(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function GT(t){let e;return{c(){e=_("span"),e.textContent="Comments for this post are no longer available",f(e,"class","no-comments svelte-1mq2skj")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}function WT(t){let e,n,s=t[7],r=[];for(let o=0;o<s.length;o+=1)r[o]=lu(iu(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ul");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","comments svelte-1mq2skj")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,a){if(a&1){s=o[7];let c;for(c=0;c<s.length;c+=1){const l=iu(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=lu(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ue(),c=s.length;c<r.length;c+=1)i(c);he()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&S(e),rn(r,o)}}}function lu(t){let e,n;return e=new MT({props:{comment:t[8]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.comment=s[8]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function QT(t){let e,n;return e=new tc({}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function uu(t){let e,n;return e=new gT({props:{tag:t[4]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function YT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y=t[0].comment_count>0&&au(t);r=new Ir({props:{$$slots:{default:[FT]},$$scope:{ctx:t}}}),o=new Ir({props:{$$slots:{default:[VT]},$$scope:{ctx:t}}}),c=new Ir({props:{$$slots:{default:[BT]},$$scope:{ctx:t}}});let g=t[0].source&&cu(t);const T=[zT,qT],b=[];function F(k,j){return k[1]==="tags"?0:1}return h=F(t),d=b[h]=T[h](t),{c(){e=_("div"),n=_("div"),y&&y.c(),s=P(),U(r.$$.fragment),i=P(),U(o.$$.fragment),a=P(),U(c.$$.fragment),l=P(),g&&g.c(),u=P(),d.c(),f(n,"class","summary svelte-1mq2skj"),f(e,"class","details svelte-1mq2skj")},m(k,j){A(k,e,j),m(e,n),y&&y.m(n,null),m(n,s),L(r,n,null),m(n,i),L(o,n,null),m(n,a),L(c,n,null),m(n,l),g&&g.m(n,null),m(e,u),b[h].m(e,null),p=!0},p(k,[j]){k[0].comment_count>0?y?y.p(k,j):(y=au(k),y.c(),y.m(n,s)):y&&(y.d(1),y=null);const $={};j&2049&&($.$$scope={dirty:j,ctx:k}),r.$set($);const D={};j&2049&&(D.$$scope={dirty:j,ctx:k}),o.$set(D);const z={};j&2049&&(z.$$scope={dirty:j,ctx:k}),c.$set(z),k[0].source?g?(g.p(k,j),j&1&&v(g,1)):(g=cu(k),g.c(),v(g,1),g.m(n,null)):g&&(ue(),I(g,1,1,()=>{g=null}),he());let oe=h;h=F(k),h===oe?b[h].p(k,j):(ue(),I(b[oe],1,1,()=>{b[oe]=null}),he(),d=b[h],d?d.p(k,j):(d=b[h]=T[h](k),d.c()),v(d,1),d.m(e,null))},i(k){p||(v(r.$$.fragment,k),v(o.$$.fragment,k),v(c.$$.fragment,k),v(g),v(d),p=!0)},o(k){I(r.$$.fragment,k),I(o.$$.fragment,k),I(c.$$.fragment,k),I(g),I(d),p=!1},d(k){k&&S(e),y&&y.d(),x(r),x(o),x(c),g&&g.d(),b[h].d()}}}function XT(t,e,n){let{post:s}=e,r="tags";const i=()=>{n(1,r="tags")},o=()=>{n(1,r="comments")};return t.$$set=a=>{"post"in a&&n(0,s=a.post)},[s,r,i,o]}class JT extends J{constructor(e){super(),X(this,e,XT,YT,Q,{post:0})}}const Pn=new IntersectionObserver(t=>{for(const e of t){const n=e.isIntersecting?e.target.getAttribute("data-src"):"";e.target.setAttribute("src",n)}},{rootMargin:"1250px"});function ZT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&S(e),t[3](null),a=!1,c()}}}function e1(t,e,n){let{post:s}=e;const r=Ye();let i;Ss(()=>Pn.observe(i)),Xr(()=>Pn.unobserve(i));function o(c){Tn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},[s,i,r,o,a]}let t1=class extends J{constructor(e){super(),X(this,e,e1,ZT,Q,{post:0})}};function n1(t){let e,n,s,r,i,o,a,c;return{c(){e=_("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].file_url),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",r=t[0].width),f(e,"height",i=t[0].height),e.controls=!0,e.loop=o=t[0].tags.includes("loop"),f(e,"class","svelte-1gwvoya")},m(l,u){A(l,e,u),t[5](e),a||(c=[Y(e,"click",Fo(t[4])),Y(e,"touchstart",t[2],{passive:!0}),Y(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&r!==(r=l[0].width)&&f(e,"width",r),u&1&&i!==(i=l[0].height)&&f(e,"height",i),u&1&&o!==(o=l[0].tags.includes("loop"))&&(e.loop=o)},i:C,o:C,d(l){l&&S(e),t[5](null),a=!1,je(c)}}}function s1(t,e,n){let{post:s}=e;const r=Ye();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};Ss(()=>Pn.observe(i)),Xr(()=>Pn.unobserve(i));function l(h){jp.call(this,t,h)}function u(h){Tn[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},[s,i,a,c,l,u]}class r1 extends J{constructor(e){super(),X(this,e,s1,n1,Q,{post:0})}}function i1(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&S(e),t[3](null),a=!1,c()}}}function o1(t,e,n){let{post:s}=e;const r=Ye();let i;Ss(()=>Pn.observe(i)),Xr(()=>Pn.unobserve(i));function o(c){Tn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},[s,i,r,o,a]}class a1 extends J{constructor(e){super(),X(this,e,o1,i1,Q,{post:0})}}function c1(t){let e,n;return e=new a1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function l1(t){let e,n;return e=new r1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function u1(t){let e,n;return e=new t1({props:{post:t[0]}}),e.$on("click",t[2]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function hu(t){let e,n;return e=new JT({props:{post:t[0]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function h1(t){let e,n,s,r,i;const o=[u1,l1,c1],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&hu(t);return{c(){e=_("div"),s.c(),r=P(),l&&l.c(),f(e,"class","post svelte-1b8286y"),f(e,"tabindex","0")},m(u,h){A(u,e,h),a[n].m(e,null),m(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ue(),I(a[d],1,1,()=>{a[d]=null}),he(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),v(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&v(l,1)):(l=hu(u),l.c(),v(l,1),l.m(e,null)):l&&(ue(),I(l,1,1,()=>{l=null}),he())},i(u){i||(v(s),v(l),i=!0)},o(u){I(s),I(l),i=!1},d(u){u&&S(e),a[n].d(),l&&l.d()}}}function d1(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class f1 extends J{constructor(e){super(),X(this,e,d1,h1,Q,{post:0})}}function du(t,e,n){const s=t.slice();return s[1]=e[n],s}function fu(t){let e,n;return e=new f1({props:{post:t[1]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function p1(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=fu(du(t,s,o));const i=o=>I(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){A(o,e,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=du(o,s,c);r[c]?(r[c].p(l,a),v(r[c],1)):(r[c]=fu(l),r[c].c(),v(r[c],1),r[c].m(e,null))}for(ue(),c=s.length;c<r.length;c+=1)i(c);he()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)v(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)I(r[a]);n=!1},d(o){o&&S(e),rn(r,o)}}}function g1(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class m1 extends J{constructor(e){super(),X(this,e,g1,p1,Q,{posts:0})}}function y1(t){let e;return{c(){e=_("div")},m(n,s){A(n,e,s),t[1](e)},p:C,i:C,o:C,d(n){n&&S(e),t[1](null)}}}function v1(t,e,n){const s=Ye(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Tn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class _1 extends J{constructor(e){super(),X(this,e,v1,y1,Q,{})}}const w1="/assets/shironeko-x-c28cad00.png";function I1(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=P(),i=_("span"),i.textContent="You have reached the end",Er(n.src,s=w1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){A(o,e,a),m(e,n),m(e,r),m(e,i)},p:C,i:C,o:C,d(o){o&&S(e)}}}class b1 extends J{constructor(e){super(),X(this,e,null,I1,Q,{})}}const E1="/assets/shironeko-confused-4071d5b2.png";function T1(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=P(),i=_("span"),i.textContent="No results found",Er(n.src,s=E1)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){A(o,e,a),m(e,n),m(e,r),m(e,i)},p:C,i:C,o:C,d(o){o&&S(e)}}}class k1 extends J{constructor(e){super(),X(this,e,null,T1,Q,{})}}const pu=()=>({pages:[],nextPage:0,ids:new Set}),S1=t=>{const e={pages:t.pages,nextPage:t.nextPage,ids:[...t.ids.values()]};return JSON.stringify(e)},A1=t=>{const e=JSON.parse(t);return{pages:e.pages,nextPage:e.nextPage,ids:new Set(e.ids)}},C1=()=>{const{subscribe:t,update:e,set:n}=nc("results",pu(),S1,A1);return{subscribe:t,addPage(s){e(r=>{const i=s.filter(o=>!r.ids.has(o.id));return i.forEach(o=>r.ids.add(o.id)),{pages:[...r.pages,i],nextPage:r.nextPage+1,ids:r.ids}})},reset(){n(pu())}}},Zn=C1(),D1={sortProperty:"id",minScore:0},N1=()=>{const{subscribe:t,set:e}=Ap("sort",D1);return{subscribe:t,set:e}},br=N1(),R1=()=>{const{subscribe:t,set:e}=nc("count",null);return{subscribe:t,set:e,reset(){e(0)}}},Dp=R1();function gu(t,e,n){const s=t.slice();return s[16]=e[n],s}function $1(t){let e,n;return e=new k1({}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function O1(t){let e,n,s=Pt(t[2])+"",r,i,o,a,c,l,u,h,d,p,y,g,T,b,F,k,j,$,D,z,oe,Te,te,zn,ne,se=t[0]==="custom"&&mu(t),De=t[3].pages,W=[];for(let K=0;K<De.length;K+=1)W[K]=yu(gu(t,De,K));const Zs=K=>I(W[K],1,1,()=>{W[K]=null}),rc=[M1,P1],It=[];function ic(K,ce){return K[5]?0:1}return z=ic(t),oe=It[z]=rc[z](t),{c(){e=_("div"),n=_("span"),r=fe(s),i=fe(" results"),a=P(),c=_("select"),l=_("option"),l.textContent="Date",u=_("option"),u.textContent="Score",h=_("option"),h.textContent="Updated",d=P(),p=_("select"),y=_("option"),y.textContent="Any Score",g=_("option"),g.textContent="Score > 10",T=_("option"),T.textContent="Score > 100",b=_("option"),b.textContent="Score > 1K",F=_("option"),F.textContent="Custom",k=P(),se&&se.c(),j=P(),$=_("ol");for(let K=0;K<W.length;K+=1)W[K].c();D=P(),oe.c(),Te=lt(),f(n,"title",o=`${t[2]} results`),f(n,"class","svelte-1yfgwr6"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1yfgwr6"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1yfgwr6"),h.__value="updated",h.value=h.__value,f(h,"class","svelte-1yfgwr6"),f(c,"title","Sort results by"),f(c,"class","svelte-1yfgwr6"),t[6].sortProperty===void 0&&cs(()=>t[9].call(c)),y.__value=0,y.value=y.__value,f(y,"class","svelte-1yfgwr6"),g.__value=10,g.value=g.__value,f(g,"class","svelte-1yfgwr6"),T.__value=100,T.value=T.__value,f(T,"class","svelte-1yfgwr6"),b.__value=1e3,b.value=b.__value,f(b,"class","svelte-1yfgwr6"),F.__value="custom",F.value=F.__value,f(F,"class","svelte-1yfgwr6"),f(p,"title","Filter by score"),f(p,"class","svelte-1yfgwr6"),t[0]===void 0&&cs(()=>t[11].call(p)),f(e,"class","header svelte-1yfgwr6"),f($,"class","svelte-1yfgwr6")},m(K,ce){A(K,e,ce),m(e,n),m(n,r),m(n,i),m(e,a),m(e,c),m(c,l),m(c,u),m(c,h),tr(c,t[6].sortProperty,!0),m(e,d),m(e,p),m(p,y),m(p,g),m(p,T),m(p,b),m(p,F),tr(p,t[0],!0),m(e,k),se&&se.m(e,null),A(K,j,ce),A(K,$,ce);for(let bt=0;bt<W.length;bt+=1)W[bt]&&W[bt].m($,null);A(K,D,ce),It[z].m(K,ce),A(K,Te,ce),te=!0,zn||(ne=[Y(c,"change",t[9]),Y(c,"change",t[10]),Y(p,"change",t[11]),Y(p,"change",t[12])],zn=!0)},p(K,ce){if((!te||ce&4)&&s!==(s=Pt(K[2])+"")&&Se(r,s),(!te||ce&4&&o!==(o=`${K[2]} results`))&&f(n,"title",o),ce&64&&tr(c,K[6].sortProperty),ce&1&&tr(p,K[0]),K[0]==="custom"?se?se.p(K,ce):(se=mu(K),se.c(),se.m(e,null)):se&&(se.d(1),se=null),ce&8){De=K[3].pages;let Fe;for(Fe=0;Fe<De.length;Fe+=1){const oc=gu(K,De,Fe);W[Fe]?(W[Fe].p(oc,ce),v(W[Fe],1)):(W[Fe]=yu(oc),W[Fe].c(),v(W[Fe],1),W[Fe].m($,null))}for(ue(),Fe=De.length;Fe<W.length;Fe+=1)Zs(Fe);he()}let bt=z;z=ic(K),z===bt?It[z].p(K,ce):(ue(),I(It[bt],1,1,()=>{It[bt]=null}),he(),oe=It[z],oe?oe.p(K,ce):(oe=It[z]=rc[z](K),oe.c()),v(oe,1),oe.m(Te.parentNode,Te))},i(K){if(!te){for(let ce=0;ce<De.length;ce+=1)v(W[ce]);v(oe),te=!0}},o(K){W=W.filter(Boolean);for(let ce=0;ce<W.length;ce+=1)I(W[ce]);I(oe),te=!1},d(K){K&&S(e),se&&se.d(),K&&S(j),K&&S($),rn(W,K),K&&S(D),It[z].d(K),K&&S(Te),zn=!1,je(ne)}}}function mu(t){let e,n,s;return{c(){e=_("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-1yfgwr6")},m(r,i){A(r,e,i),At(e,t[1]),n||(s=[Y(e,"input",t[13]),Y(e,"keyup",Mi(x1)),Y(e,"blur",t[14])],n=!0)},p(r,i){i&2&&Au(e.value)!==r[1]&&At(e,r[1])},d(r){r&&S(e),n=!1,je(s)}}}function yu(t){let e,n;return e=new m1({props:{posts:t[16]}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.posts=s[16]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function P1(t){let e,n;return e=new b1({}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function M1(t){let e,n;return e=new _1({}),e.$on("visible",t[15]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function L1(t){let e,n,s,r;const i=[O1,$1],o=[];function a(c,l){return c[2]?0:c[4]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=lt()},m(c,l){~e&&o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ue(),I(o[u],1,1,()=>{o[u]=null}),he()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(v(n),r=!0)},o(c){I(n),r=!1},d(c){~e&&o[e].d(c),c&&S(s)}}}const x1=t=>t.target.blur();function U1(t,e,n){let s,r,i,o,a,c;He(t,Dp,k=>n(2,o=k)),He(t,Zn,k=>n(3,a=k)),He(t,br,k=>n(6,c=k));const l=Ye();let u=0,h=0;function d(){c.sortProperty=cc(this),br.set(c)}const p=()=>l("configchange");function y(){u=cc(this),n(0,u)}const g=()=>{u!=="custom"&&l("configchange")};function T(){h=Au(this.value),n(1,h)}const b=()=>l("configchange"),F=()=>l("endreached");return t.$$.update=()=>{t.$$.dirty&3&&Fp(br,c.minScore=u!=="custom"?u:h,c),t.$$.dirty&4&&n(8,s=o/yp),t.$$.dirty&264&&n(5,r=a.pages.length<s),t.$$.dirty&4&&n(4,i=o===0)},[u,h,o,a,i,r,c,l,s,d,p,y,g,T,b,F]}class F1 extends J{constructor(e){super(),X(this,e,U1,L1,Q,{})}}function V1(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),Pe(e,"visible",t[0])},m(r,i){A(r,e,i),n||(s=Y(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Pe(e,"visible",r[0])},i:C,o:C,d(r){r&&S(e),n=!1,s()}}}function B1(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Ss(()=>{document.addEventListener("scroll",i,{passive:!0})}),Xr(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class j1 extends J{constructor(e){super(),X(this,e,B1,V1,Q,{})}}function q1(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=_("div"),n=_("div"),s=_("i"),i=P(),o=_("div"),a=_("h3"),c=fe(t[2]),l=P(),u=_("span"),h=fe(t[1]),f(s,"class",r=ot(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){A(d,e,p),m(e,n),m(n,s),m(e,i),m(e,o),m(o,a),m(a,c),m(o,l),m(o,u),m(u,h)},p(d,[p]){p&1&&r!==(r=ot(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Se(c,d[2]),p&2&&Se(h,d[1])},i:C,o:C,d(d){d&&S(e)}}}function z1(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Np extends J{constructor(e){super(),X(this,e,z1,q1,Q,{icon:0,message:1,title:2})}}function K1(t){let e;return{c(){e=_("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class H1 extends J{constructor(e){super(),X(this,e,null,K1,Q,{})}}function vu(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function _u(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=wu(vu(t,r,c));const o=c=>I(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&Iu(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=P(),a&&a.c(),n=lt()},m(c,l){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,l);A(c,e,l),a&&a.m(c,l),A(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=vu(c,r,u);i[u]?(i[u].p(h,l),v(i[u],1)):(i[u]=wu(h),i[u].c(),v(i[u],1),i[u].m(e.parentNode,e))}for(ue(),u=r.length;u<i.length;u+=1)o(u);he()}c[0].length>1?a?a.p(c,l):(a=Iu(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)v(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)I(i[l]);s=!1},d(c){rn(i,c),c&&S(e),a&&a.d(c),c&&S(n)}}}function wu(t){let e,n;function s(){return t[2](t[7])}function r(){return t[3](t[5])}return e=new Tp({props:{tag:t[5]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){U(e.$$.fragment)},m(i,o){L(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[5]),e.$set(a)},i(i){n||(v(e.$$.fragment,i),n=!0)},o(i){I(e.$$.fragment,i),n=!1},d(i){x(e,i)}}}function Iu(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1uhy4lk"></i>',f(e,"class","add-supertag svelte-1uhy4lk"),f(e,"title","Click to create a new supertag")},m(r,i){A(r,e,i),n||(s=Y(e,"click",t[4]),n=!0)},p:C,d(r){r&&S(e),n=!1,s()}}}function G1(t){let e,n,s=t[0].length&&_u(t);return{c(){e=_("ul"),s&&s.c(),f(e,"class","svelte-1uhy4lk")},m(r,i){A(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&v(s,1)):(s=_u(r),s.c(),v(s,1),s.m(e,null)):s&&(ue(),I(s,1,1,()=>{s=null}),he())},i(r){n||(v(s),n=!0)},o(r){I(s),n=!1},d(r){r&&S(e),s&&s.d()}}}function W1(t,e,n){let s;He(t,gt,c=>n(0,s=c));const r=Ye();return[s,r,c=>gt.removeByIndex(c),c=>gt.addOrReplace(new Pi(hp(c.modifier),c.name,c.count,c.type)),()=>r("supertag")]}class Q1 extends J{constructor(e){super(),X(this,e,W1,G1,Q,{})}}function Y1(t){let e,n;return e=new F1({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function X1(t){let e,n,s,r;const i=[Z1,J1],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ue(),I(o[u],1,1,()=>{o[u]=null}),he(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function J1(t){let e,n;return e=new Np({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function Z1(t){let e,n;return e=new Np({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function bu(t){let e,n;return e=new JE({props:{tags:t[2]}}),e.$on("submit",t[7]),e.$on("close",t[8]),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function ek(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,y,g,T,b;n=new H1({}),r=new hT({}),r.$on("pick",t[5]),o=new Q1({}),o.$on("supertag",t[6]),l=new Ep({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[3]);const F=[X1,Y1],k=[];function j(D,z){return D[1]!==void 0?0:1}h=j(t),d=k[h]=F[h](t),y=new j1({});let $=t[0]&&bu(t);return{c(){e=_("div"),U(n.$$.fragment),s=P(),U(r.$$.fragment),i=P(),U(o.$$.fragment),a=P(),c=_("div"),U(l.$$.fragment),u=P(),d.c(),p=P(),U(y.$$.fragment),g=P(),$&&$.c(),T=lt(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(D,z){A(D,e,z),L(n,e,null),m(e,s),L(r,e,null),m(e,i),L(o,e,null),m(e,a),m(e,c),L(l,c,null),A(D,u,z),k[h].m(D,z),A(D,p,z),L(y,D,z),A(D,g,z),$&&$.m(D,z),A(D,T,z),b=!0},p(D,[z]){let oe=h;h=j(D),h===oe?k[h].p(D,z):(ue(),I(k[oe],1,1,()=>{k[oe]=null}),he(),d=k[h],d?d.p(D,z):(d=k[h]=F[h](D),d.c()),v(d,1),d.m(p.parentNode,p)),D[0]?$?($.p(D,z),z&1&&v($,1)):($=bu(D),$.c(),v($,1),$.m(T.parentNode,T)):$&&(ue(),I($,1,1,()=>{$=null}),he())},i(D){b||(v(n.$$.fragment,D),v(r.$$.fragment,D),v(o.$$.fragment,D),v(l.$$.fragment,D),v(d),v(y.$$.fragment,D),v($),b=!0)},o(D){I(n.$$.fragment,D),I(r.$$.fragment,D),I(o.$$.fragment,D),I(l.$$.fragment,D),I(d),I(y.$$.fragment,D),I($),b=!1},d(D){D&&S(e),x(n),x(r),x(o),x(l),D&&S(u),k[h].d(D),D&&S(p),x(y,D),D&&S(g),$&&$.d(D),D&&S(T)}}}function tk(t,e,n){let s,r,i,o;He(t,Wr,b=>n(10,s=b)),He(t,gt,b=>n(2,r=b)),He(t,br,b=>n(11,i=b)),He(t,Zn,b=>n(12,o=b));let a=!1,c,l=!1;const u=async()=>{n(1,c=void 0),l=!0,Zn.reset();try{const b=d(),F=kE(b,i.sortProperty,i.minScore),k=ql(o.nextPage,b,i.sortProperty,i.minScore),[j,$]=await Promise.all([F,k]);Dp.set(j),Zn.addPage($)}catch(b){n(1,c=b),console.warn(b)}finally{l=!1}},h=async()=>{if(!l){n(1,c=void 0),l=!0;try{const b=d(),F=await ql(o.nextPage,b,i.sortProperty,i.minScore);Zn.addPage(F)}catch(b){n(1,c=b),console.warn(b)}finally{l=!1}}},d=()=>r.flatMap(b=>b.type==="supertag"?s.supertags.find(F=>F.name===b.name).tags:gp(b));return[a,c,r,u,h,b=>gt.addOrReplace(b.detail),()=>{n(0,a=!0)},b=>{Wr.addSupertag(b.detail),gt.set([new Pi("+",b.detail.name,b.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class nk extends J{constructor(e){super(),X(this,e,tk,ek,Q,{})}}function sk(t){let e,n;return e=new tc({}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},p:C,i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function rk(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=lc(r,i())),{c(){e&&U(e.$$.fragment),n=lt()},m(o,a){e&&L(e,o,a),A(o,n,a),s=!0},p(o,a){if(a&1&&r!==(r=o[0])){if(e){ue();const c=e;I(c.$$.fragment,1,0,()=>{x(c,1)}),he()}r?(e=lc(r,i()),U(e.$$.fragment),v(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}},i(o){s||(e&&v(e.$$.fragment,o),s=!0)},o(o){e&&I(e.$$.fragment,o),s=!1},d(o){o&&S(n),e&&x(e,o)}}}function ik(t){let e,n,s,r;const i=[rk,sk],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=lt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ue(),I(o[u],1,1,()=>{o[u]=null}),he(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),v(n,1),n.m(s.parentNode,s))},i(c){r||(v(n),r=!0)},o(c){I(n),r=!1},d(c){o[e].d(c),c&&S(s)}}}function ok(t,e,n){let{loadComponent:s}=e,r;return Ss(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class sc extends J{constructor(e){super(),X(this,e,ok,ik,Q,{loadComponent:1})}}function ak(t){let e;return{c(){e=_("p"),e.textContent="You got lost..."},m(n,s){A(n,e,s)},i:C,o:C,d(n){n&&S(e)}}}function ck(t){let e,n;return e=new sc({props:{loadComponent:gk}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function lk(t){let e,n;return e=new sc({props:{loadComponent:pk}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function uk(t){let e,n;return e=new sc({props:{loadComponent:fk}}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function hk(t){let e,n;return e=new nk({}),{c(){U(e.$$.fragment)},m(s,r){L(e,s,r),n=!0},i(s){n||(v(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function dk(t){let e,n,s,r;const i=[hk,uk,lk,ck,ak],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=_("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){A(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ue(),I(o[u],1,1,()=>{o[u]=null}),he(),s=o[n],s||(s=o[n]=i[n](c),s.c()),v(s,1),s.m(e,null))},i(c){r||(v(s),r=!0)},o(c){I(s),r=!1},d(c){c&&S(e),o[n].d()}}}const fk=()=>Ni(()=>import("./Account-5ef9a129.js"),["assets/Account-5ef9a129.js","assets/Account-72046986.css"]),pk=()=>Ni(()=>import("./Preferences-292e83d6.js"),["assets/Preferences-292e83d6.js","assets/ParagraphHeading-8e5787d7.js","assets/ParagraphHeading-5a89239e.css","assets/Preferences-e28acf3d.css"]),gk=()=>Ni(()=>import("./Help-c8812a6a.js"),["assets/Help-c8812a6a.js","assets/ParagraphHeading-8e5787d7.js","assets/ParagraphHeading-5a89239e.css","assets/Help-9081c352.css"]);function mk(t,e,n){let s;return He(t,Vt,r=>n(0,s=r)),[s]}class yk extends J{constructor(e){super(),X(this,e,mk,dk,Q,{})}}function vk(t){let e;return{c(){e=_("footer"),e.innerHTML=`<div class="flex left svelte-1bok05j"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1bok05j">© 2022 kurozenzen</span> 
  <div class="flex right svelte-1bok05j"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1bok05j"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1bok05j")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&S(e)}}}class _k extends J{constructor(e){super(),X(this,e,null,vk,Q,{})}}const{subscribe:wk,set:Ik}=Ap("theme","dark"),Eu={subscribe:wk,set(t){Ik(t),bk(t),Wr.setTheme(t)}},bk=t=>{document.documentElement.classList.replace(Ek(t),t)},Ek=t=>t==="dark"?"light":"dark";function Tk(t){let e,n,s,r,i,o;return e=new hE({}),s=new yk({}),i=new _k({}),{c(){U(e.$$.fragment),n=P(),U(s.$$.fragment),r=P(),U(i.$$.fragment)},m(a,c){L(e,a,c),A(a,n,c),L(s,a,c),A(a,r,c),L(i,a,c),o=!0},p:C,i(a){o||(v(e.$$.fragment,a),v(s.$$.fragment,a),v(i.$$.fragment,a),o=!0)},o(a){I(e.$$.fragment,a),I(s.$$.fragment,a),I(i.$$.fragment,a),o=!1},d(a){x(e,a),a&&S(n),x(s,a),a&&S(r),x(i,a)}}}function kk(t){return Eu.subscribe(e=>Eu.set(e))(),[]}class Sk extends J{constructor(e){super(),X(this,e,kk,Tk,Q,{})}}function Ak(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await Ni(()=>import("./workbox-window.prod.es5-dc90f814.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||s==null||s()}),a.register({immediate:e}).then(d=>{i?i("/sw.js",d):r==null||r(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}new Sk({target:document.getElementById("app")});Ak();export{Za as $,x as A,Tn as B,Dk as C,Ck as D,Ep as E,At as F,Er as G,oE as H,lt as I,He as J,Wr as K,Vl as L,Yl as M,Ap as N,Mp as O,xp as P,Up as Q,Lp as R,J as S,cs as T,tr as U,cc as V,Eu as W,Fp as X,Tp as Y,Pi as Z,gT as _,f as a,j1 as a0,Wl as a1,A as b,C as c,S as d,_ as e,On as f,fe as g,m as h,X as i,Se as j,P as k,Y as l,v as m,ot as n,Mi as o,Fo as p,ue as q,je as r,Q as s,Pe as t,he as u,I as v,rn as w,Ye as x,U as y,L as z};
