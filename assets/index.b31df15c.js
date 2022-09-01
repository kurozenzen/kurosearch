var Hf=Object.defineProperty,Kf=Object.defineProperties;var Gf=Object.getOwnPropertyDescriptors;var Xa=Object.getOwnPropertySymbols;var Wf=Object.prototype.hasOwnProperty,Qf=Object.prototype.propertyIsEnumerable;var Ya=(t,e,n)=>e in t?Hf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ja=(t,e)=>{for(var n in e||(e={}))Wf.call(e,n)&&Ya(t,n,e[n]);if(Xa)for(var n of Xa(e))Qf.call(e,n)&&Ya(t,n,e[n]);return t},Za=(t,e)=>Kf(t,Gf(e));const Xf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Xf();function N(){}function Yf(t,e){for(const n in e)t[n]=e[n];return t}function Jf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function uu(t){return t()}function ec(){return Object.create(null)}function je(t){t.forEach(uu)}function Zf(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let es;function Qt(t,e){return es||(es=document.createElement("a")),es.href=e,t===es.href}function ep(t){return Object.keys(t).length===0}function tp(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ke(t,e,n){t.$$.on_destroy.push(tp(e,n))}function np(t,e,n,r){if(t){const s=hu(t,e,n,r);return t[0](s)}}function hu(t,e,n,r){return t[1]&&r?Yf(n.ctx.slice(),t[1](r(e))):n.ctx}function rp(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function sp(t,e,n,r,s,i){if(s){const o=hu(e,n,r,i);t.p(o,s)}}function ip(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ct(t){return t==null?"":t}function m(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function fn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function O(){return fe(" ")}function Fn(){return fe("")}function Y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function du(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function op(t){return Array.from(t.childNodes)}function we(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rt(t,e){t.value=e==null?"":e}function yn(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function to(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ye(t,e,n){t.classList[n?"add":"remove"](e)}function ap(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let hr;function ft(t){hr=t}function Xs(){if(!hr)throw new Error("Function called outside component initialization");return hr}function cp(t){Xs().$$.on_mount.push(t)}function lp(t){Xs().$$.on_destroy.push(t)}function qe(){const t=Xs();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=ap(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function up(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Yn=[],An=[],hs=[],tc=[],hp=Promise.resolve();let no=!1;function dp(){no||(no=!0,hp.then(Po))}function Cn(t){hs.push(t)}const Ni=new Set;let ts=0;function Po(){const t=hr;do{for(;ts<Yn.length;){const e=Yn[ts];ts++,ft(e),fp(e.$$)}for(ft(null),Yn.length=0,ts=0;An.length;)An.pop()();for(let e=0;e<hs.length;e+=1){const n=hs[e];Ni.has(n)||(Ni.add(n),n())}hs.length=0}while(Yn.length);for(;tc.length;)tc.pop()();no=!1,Ni.clear(),ft(t)}function fp(t){if(t.fragment!==null){t.update(),je(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Cn)}}const ds=new Set;let Vt;function Se(){Vt={r:0,c:[],p:Vt}}function ke(){Vt.r||je(Vt.c),Vt=Vt.p}function b(t,e){t&&t.i&&(ds.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(ds.has(t))return;ds.add(t),Vt.c.push(()=>{ds.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function nc(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Se(),k(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ke())}):e.block.d(1),l.c(),b(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Po()}if(Jf(t)){const s=Xs();if(t.then(i=>{ft(s),r(e.then,1,e.value,i),ft(null)},i=>{if(ft(s),r(e.catch,2,e.error,i),ft(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function pp(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function q(t){t&&t.c()}function B(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||Cn(()=>{const c=i.map(uu).filter(Zf);o?o.push(...c):je(c),t.$$.on_mount=[]}),a.forEach(Cn)}function j(t,e){const n=t.$$;n.fragment!==null&&(je(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gp(t,e){t.$$.dirty[0]===-1&&(Yn.push(t),dp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,r,s,i,o,a=[-1]){const c=hr;ft(t);const l=t.$$={fragment:null,ctx:null,props:i,update:N,not_equal:s,bound:ec(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ec(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&gp(t,h)),d}):[],l.update(),u=!0,je(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=op(e.target);l.fragment&&l.fragment.l(h),h.forEach(D)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Po()}ft(c)}class Z{$destroy(){j(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ep(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pn=[];function an(t,e=N){let n;const r=new Set;function s(a){if(Q(t,a)&&(t=a,n)){const c=!pn.length;for(const l of r)l[1](),pn.push(l,t);if(c){for(let l=0;l<pn.length;l+=2)pn[l][0](pn[l+1]);pn.length=0}}}function i(a){s(a(t))}function o(a,c=N){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||N),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const mp=Object.freeze(["search","account","settings","help"]),yp=t=>mp.includes(t),vp=()=>{const{subscribe:t,set:e}=an("search");return{subscribe:t,navigateTo(n){if(!yp(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var wn=vp();function _p(t){let e,n,r,s,i,o;return{c(){e=fn("svg"),n=fn("g"),r=fn("path"),s=fn("defs"),i=fn("clipPath"),o=fn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),m(e,n),m(n,r),m(e,s),m(s,i),m(i,o)},p:N,i:N,o:N,d(a){a&&D(e)}}}class wp extends Z{constructor(e){super(),J(this,e,null,_p,Q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ip=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ip(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bp=function(t){const e=fu(t);return pu.encodeByteArray(e,!0)},gu=function(t){return bp(t).replace(/\./g,"")},Ep=function(t){try{return pu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Mo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sp(){return Ae().indexOf("Electron/")>=0}function vu(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kp(){return Ae().indexOf("MSAppHost/")>=0}function _u(){return typeof indexedDB=="object"}function wu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ap(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="FirebaseError";class nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cp,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nt(s,a,r)}}function Dp(t,e){return t.replace(Rp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rp=/\{\$([^}]+)}/g;function Np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rc(i)&&rc(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Op(t,e){const n=new $p(t,e);return n.subscribe.bind(n)}class $p{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oi),s.error===void 0&&(s.error=Oi),s.complete===void 0&&(s.complete=Oi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oi(){}/**
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
 */const Mp=1e3,Lp=2,xp=4*60*60*1e3,Up=.5;function sc(t,e=Mp,n=Lp){const r=e*Math.pow(n,t),s=Math.round(Up*r*(Math.random()-.5)*2);return Math.min(xp,r+s)}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class Fp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bp(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vp(t){return t===Ut?void 0:t}function Bp(t){return t.instantiationMode==="EAGER"}/**
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
 */class jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const qp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},zp=ce.INFO,Hp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Kp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ys{constructor(e){this.name=e,this._logLevel=zp,this._logHandler=Kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Gp=(t,e)=>e.some(n=>t instanceof n);let ic,oc;function Wp(){return ic||(ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iu=new WeakMap,ro=new WeakMap,bu=new WeakMap,$i=new WeakMap,Lo=new WeakMap;function Xp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iu.set(n,t)}).catch(()=>{}),Lo.set(e,t),e}function Yp(t){if(ro.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ro.set(t,e)}let so={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ro.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jp(t){so=t(so)}function Zp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pi(this),e,...n);return bu.set(r,e.sort?e.sort():[e]),Ct(r)}:Qp().includes(t)?function(...e){return t.apply(Pi(this),e),Ct(Iu.get(this))}:function(...e){return Ct(t.apply(Pi(this),e))}}function eg(t){return typeof t=="function"?Zp(t):(t instanceof IDBTransaction&&Yp(t),Gp(t,Wp())?new Proxy(t,so):t)}function Ct(t){if(t instanceof IDBRequest)return Xp(t);if($i.has(t))return $i.get(t);const e=eg(t);return e!==t&&($i.set(t,e),Lo.set(e,t)),e}const Pi=t=>Lo.get(t);function Eu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const tg=["get","getKey","getAll","getAllKeys","count"],ng=["put","add","delete","clear"],Mi=new Map;function ac(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ng.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Mi.set(e,i),i}Jp(t=>Za(Ja({},t),{get:(e,n,r)=>ac(e,n)||t.get(e,n,r),has:(e,n)=>!!ac(e,n)||t.has(e,n)}));/**
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
 */class rg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const io="@firebase/app",cc="0.7.30";/**
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
 */const Xt=new Ys("@firebase/app"),ig="@firebase/app-compat",og="@firebase/analytics-compat",ag="@firebase/analytics",cg="@firebase/app-check-compat",lg="@firebase/app-check",ug="@firebase/auth",hg="@firebase/auth-compat",dg="@firebase/database",fg="@firebase/database-compat",pg="@firebase/functions",gg="@firebase/functions-compat",mg="@firebase/installations",yg="@firebase/installations-compat",vg="@firebase/messaging",_g="@firebase/messaging-compat",wg="@firebase/performance",Ig="@firebase/performance-compat",bg="@firebase/remote-config",Eg="@firebase/remote-config-compat",Tg="@firebase/storage",Sg="@firebase/storage-compat",kg="@firebase/firestore",Ag="@firebase/firestore-compat",Cg="firebase",Dg="9.9.2";/**
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
 */const Tu="[DEFAULT]",Rg={[io]:"fire-core",[ig]:"fire-core-compat",[ag]:"fire-analytics",[og]:"fire-analytics-compat",[lg]:"fire-app-check",[cg]:"fire-app-check-compat",[ug]:"fire-auth",[hg]:"fire-auth-compat",[dg]:"fire-rtdb",[fg]:"fire-rtdb-compat",[pg]:"fire-fn",[gg]:"fire-fn-compat",[mg]:"fire-iid",[yg]:"fire-iid-compat",[vg]:"fire-fcm",[_g]:"fire-fcm-compat",[wg]:"fire-perf",[Ig]:"fire-perf-compat",[bg]:"fire-rc",[Eg]:"fire-rc-compat",[Tg]:"fire-gcs",[Sg]:"fire-gcs-compat",[kg]:"fire-fst",[Ag]:"fire-fst-compat","fire-js":"fire-js",[Cg]:"fire-js-all"};/**
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
 */const Ts=new Map,oo=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(oo.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;oo.set(e,t);for(const n of Ts.values())Ng(n,t);return!0}function ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Og={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new cn("app","Firebase",Og);/**
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
 */class $g{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=Dg;function Pg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Tu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});const s=Ts.get(r);if(s){if(dr(t,s.options)&&dr(n,s.config))return s;throw Yt.create("duplicate-app",{appName:r})}const i=new jp(r);for(const a of oo.values())i.addComponent(a);const o=new $g(t,n,i);return Ts.set(r,o),o}function xo(t=Tu){const e=Ts.get(t);if(!e)throw Yt.create("no-app",{appName:t});return e}function Je(t,e,n){var r;let s=(r=Rg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}lt(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Mg="firebase-heartbeat-database",Lg=1,fr="firebase-heartbeat-store";let Li=null;function Su(){return Li||(Li=Eu(Mg,Lg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),Li}async function xg(t){var e;try{return(await Su()).transaction(fr).objectStore(fr).get(ku(t))}catch(n){if(n instanceof nt)Xt.warn(n.message);else{const r=Yt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Xt.warn(r.message)}}}async function lc(t,e){var n;try{const s=(await Su()).transaction(fr,"readwrite");return await s.objectStore(fr).put(e,ku(t)),s.done}catch(r){if(r instanceof nt)Xt.warn(r.message);else{const s=Yt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Xt.warn(s.message)}}}function ku(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ug=1024,Fg=30*24*60*60*1e3;class Vg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uc(),{heartbeatsToSend:n,unsentEntries:r}=Bg(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uc(){return new Date().toISOString().substring(0,10)}function Bg(t,e=Ug){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?wu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hc(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qg(t){lt(new tt("platform-logger",e=>new rg(e),"PRIVATE")),lt(new tt("heartbeat",e=>new Vg(e),"PRIVATE")),Je(io,cc,t),Je(io,cc,"esm2017"),Je("fire-js","")}qg("");function Uo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Au(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zg=Au,Cu=new cn("auth","Firebase",Au());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Ys("@firebase/auth");function fs(t,...e){dc.logLevel<=ce.ERROR&&dc.error(`Auth (${Rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Fo(t,...e)}function st(t,...e){return Fo(t,...e)}function Du(t,e,n){const r=Object.assign(Object.assign({},zg()),{[e]:n});return new cn("auth","Firebase",r).create(e,{appName:t.name})}function Hg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),Du(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cu.create(t,...e)}function z(t,e,...n){if(!t)throw Fo(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function vt(t,e){t||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map;function gt(t){vt(t instanceof Function,"Expected a class definition");let e=fc.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){const n=ln(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e!=null?e:{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function Gg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wg(){return pc()==="http:"||pc()==="https:"}function pc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wg()||Mo()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=mu()||yu()}get(){return Qg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Nr(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,s={}){return Nu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ru.fetch()(Ou(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yg),e);try{const s=new Zg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ns(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Du(t,u,l);et(t,u)}}catch(s){if(s instanceof nt)throw s;et(t,"network-request-failed")}}async function Pr(t,e,n,r,s={}){const i=await $r(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ou(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vo(t.config,s):`${t.config.apiScheme}://${s}`}class Zg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),Jg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=st(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function tm(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nm(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=Bo(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:rr(xi(s.auth_time)),issuedAtTime:rr(xi(s.iat)),expirationTime:rr(xi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xi(t){return Number(t)*1e3}function Bo(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ep(r);return i?JSON.parse(i):(fs("Failed to decode base64 JWT payload"),null)}catch(i){return fs("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function rm(t){const e=Bo(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nt&&sm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ss(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pr(t,tm(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cm(i.providerUserInfo):[],a=am(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function om(t){const e=xe(t);await Ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function am(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cm(t){return t.map(e=>{var{providerId:n}=e,r=Uo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e){const n=await Nu(t,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ou(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ru.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gr;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new im(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $u(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nm(this,e)}reload(){return om(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pr(this,em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:L,isAnonymous:K,providerData:F,stsTokenManager:re}=n;z(A&&re,e,"internal-error");const X=gr.fromJSON(this.name,re);z(typeof A=="string",e,"internal-error"),Et(h,e.name),Et(d,e.name),z(typeof L=="boolean",e,"internal-error"),z(typeof K=="boolean",e,"internal-error"),Et(p,e.name),Et(g,e.name),Et(w,e.name),Et(I,e.name),Et(E,e.name),Et(y,e.name);const he=new Kt({uid:A,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:p,tenantId:w,stsTokenManager:X,createdAt:E,lastLoginAt:y});return F&&Array.isArray(F)&&(he.providerData=F.map(C=>Object.assign({},C))),I&&(he._redirectEventId=I),he}static async _fromIdTokenResponse(e,n,r=!1){const s=new gr;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ss(i),i}}/**
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
 */class Pu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pu.type="NONE";const gc=Pu;/**
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
 */function ps(t,e,n){return`firebase:${t}:${e}:${n}`}class In{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ps(this.userKey,s.apiKey,i),this.fullPersistenceKey=ps("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new In(gt(gc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||gt(gc);const o=ps(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new In(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new In(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fu(e))return"Blackberry";if(Vu(e))return"Webos";if(jo(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Uu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mu(t=Ae()){return/firefox\//i.test(t)}function jo(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(t=Ae()){return/crios\//i.test(t)}function xu(t=Ae()){return/iemobile/i.test(t)}function Uu(t=Ae()){return/android/i.test(t)}function Fu(t=Ae()){return/blackberry/i.test(t)}function Vu(t=Ae()){return/webos/i.test(t)}function Js(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function um(t=Ae()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hm(){return vu()&&document.documentMode===10}function Bu(t=Ae()){return Js(t)||Uu(t)||Vu(t)||Fu(t)||/windows phone/i.test(t)||xu(t)}function dm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e=[]){let n;switch(t){case"Browser":n=mc(Ae());break;case"Worker":n=`${mc(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}/**
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
 */class fm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yc(this),this.idTokenSubscription=new yc(this),this.beforeStateQueue=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ss(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ju(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mr(t){return xe(t)}class yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Op(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function gm(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function vm(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends qo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return mm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ym(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vm(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="http://localhost";class Jt extends qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:_m,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Im(t){const e=Jn(Zn(t)).link,n=e?Jn(Zn(e)).deep_link_id:null,r=Jn(Zn(t)).deep_link_id;return(r?Jn(Zn(r)).link:null)||r||n||e||t}class zo{constructor(e){var n,r,s,i,o,a;const c=Jn(Zn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=wm((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Im(e);try{return new zo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zo.parseLink(n);return z(r,"argument-error"),mr._fromEmailAndCode(e,r.code,r.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends Ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Lr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Lr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e){return Pr(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=vc(r);return new Zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vc(r);return new Zt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ks(e,n,r,s)}}function qu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,i,e,r):i})}async function Em(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}/**
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
 */async function Tm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await pr(t,qu(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=Bo(o.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(t.uid===c,s,"user-mismatch"),Zt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&et(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t,e,n=!1){const r="signIn",s=await qu(t,r,e),i=await Zt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Sm(t,e){return zu(Mr(t),e)}async function km(t,e,n){const r=Mr(t),s=await bm(r,{returnSecureToken:!0,email:e,password:n}),i=await Zt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Am(t,e,n){return Sm(xe(t),Vn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){return xe(t).setPersistence(e)}function Hu(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function Dm(t){return xe(t).signOut()}const As="__sak";/**
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
 */class Ku{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){const t=Ae();return jo(t)||Js(t)}const Nm=1e3,Om=10;class Gu extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rm()&&dm(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Om):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gu.type="LOCAL";const Wu=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qu.type="SESSION";const Xu=Qu;/**
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
 */function $m(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $m(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ko("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function Mm(t){it().location.href=t}/**
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
 */function Yu(){return typeof it().WorkerGlobalScope!="undefined"&&typeof it().importScripts=="function"}async function Lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Um(){return Yu()?self:null}/**
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
 */const Ju="firebaseLocalStorageDb",Fm=1,Cs="firebaseLocalStorage",Zu="fbase_key";class xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ei(t,e){return t.transaction([Cs],e?"readwrite":"readonly").objectStore(Cs)}function Vm(){const t=indexedDB.deleteDatabase(Ju);return new xr(t).toPromise()}function co(){const t=indexedDB.open(Ju,Fm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cs,{keyPath:Zu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cs)?e(r):(r.close(),await Vm(),e(await co()))})})}async function _c(t,e,n){const r=ei(t,!0).put({[Zu]:e,value:n});return new xr(r).toPromise()}async function Bm(t,e){const n=ei(t,!1).get(e),r=await new xr(n).toPromise();return r===void 0?null:r.value}function wc(t,e){const n=ei(t,!0).delete(e);return new xr(n).toPromise()}const jm=800,qm=3;class eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await co(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lm(),!this.activeServiceWorker)return;this.sender=new Pm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await co();return await _c(e,As,"1"),await wc(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_c(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ei(s,!1).getAll();return new xr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eh.type="LOCAL";const zm=eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Km(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=st("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hm().appendChild(r)})}function Gm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
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
 */function th(t,e){return e?gt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Go extends qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wm(t){return zu(t.auth,new Go(t),t.bypassAuthState)}function Qm(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Tm(n,new Go(t),t.bypassAuthState)}async function Xm(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Em(n,new Go(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wm;case"linkViaPopup":case"linkViaRedirect":return Xm;case"reauthViaPopup":case"reauthViaRedirect":return Qm;default:et(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Nr(2e3,1e4);async function Jm(t,e,n){const r=Mr(t);Hg(t,e,Ho);const s=th(r,n);return new Bt(r,"signInViaPopup",e,s).executeNotNull()}class Bt extends nh{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ym.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="pendingRedirect",gs=new Map;class ey extends nh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gs.get(this.auth._key());if(!e){try{const r=await ty(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gs.set(this.auth._key(),e)}return this.bypassAuthState||gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ty(t,e){const n=sy(e),r=ry(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ny(t,e){gs.set(t._key(),e)}function ry(t){return gt(t._redirectPersistence)}function sy(t){return ps(Zm,t.config.apiKey,t.name)}async function iy(t,e,n=!1){const r=Mr(t),s=th(r,e),o=await new ey(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=10*60*1e3;class ay{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hy=/^https?/;async function dy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ly(t);for(const n of e)try{if(fy(n))return}catch{}et(t,"unauthorized-domain")}function fy(t){const e=ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hy.test(n))return!1;if(uy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const py=new Nr(3e4,6e4);function bc(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gy(t){return new Promise((e,n)=>{var r,s,i;function o(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(st(t,"network-request-failed"))},timeout:py.get()})}if(!((s=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const a=Gm("iframefcb");return it()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},Km(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ms=null,e})}let ms=null;function my(t){return ms=ms||gy(t),ms}/**
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
 */const yy=new Nr(5e3,15e3),vy="__/auth/iframe",_y="emulator/auth/iframe",wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function by(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vo(e,_y):`https://${t.config.authDomain}/${vy}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},s=Iy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Dr(r).slice(1)}`}async function Ey(t){const e=await my(t),n=it().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:by(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=it().setTimeout(()=>{i(o)},yy.get());function c(){it().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sy=500,ky=600,Ay="_blank",Cy="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dy(t,e,n,r=Sy,s=ky){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ty),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=Lu(l)?Ay:n),Mu(l)&&(e=e||Cy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(um(l)&&a!=="_self")return Ry(e||"",a),new Ec(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Ec(h)}function Ry(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ny="__/auth/handler",Oy="emulator/auth/handler";function Tc(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:s};if(e instanceof Ho){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Np(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Lr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$y(t)}?${Dr(a).slice(1)}`}function $y({config:t}){return t.emulator?Vo(t,Oy):`https://${t.authDomain}/${Ny}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class Py{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xu,this._completeRedirectFn=iy,this._overrideRedirectResult=ny}async _openPopup(e,n,r,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Tc(e,n,r,ao(),s);return Dy(e,o,Ko())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Mm(Tc(e,n,r,ao(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ey(e),r=new ay(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ui,{type:Ui},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ui];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bu()||jo()||Js()}}const My=Py;var Sc="@firebase/auth",kc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uy(t){lt(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ju(t)},u=new pm(a,c,l);return Gg(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lt(new tt("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new Ly(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Sc,kc,xy(t)),Je(Sc,kc,"esm2017")}/**
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
 */function Fy(t=xo()){const e=ln(t,"auth");return e.isInitialized()?e.getImmediate():Kg(t,{popupRedirectResolver:My,persistence:[zm,Wu,Xu]})}Uy("Browser");const sh="@firebase/installations",Wo="0.5.12";/**
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
 */const ih=1e4,oh=`w:${Wo}`,ah="FIS_v2",Vy="https://firebaseinstallations.googleapis.com/v1",By=60*60*1e3,jy="installations",qy="Installations";/**
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
 */const zy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},en=new cn(jy,qy,zy);function ch(t){return t instanceof nt&&t.code.includes("request-failed")}/**
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
 */function lh({projectId:t}){return`${Vy}/projects/${t}/installations`}function uh(t){return{token:t.token,requestStatus:2,expiresIn:Ky(t.expiresIn),creationTime:Date.now()}}async function hh(t,e){const r=(await e.json()).error;return en.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Hy(t,{refreshToken:e}){const n=dh(t);return n.append("Authorization",Gy(e)),n}async function fh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ky(t){return Number(t.replace("s","000"))}function Gy(t){return`${ah} ${t}`}/**
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
 */async function Wy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lh(t),s=dh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:ah,appId:t.appId,sdkVersion:oh},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await fh(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:uh(l.authToken)}}else throw await hh("Create Installation",c)}/**
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
 */function ph(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Qy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Xy=/^[cdef][\w-]{21}$/,lo="";function Yy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Jy(t);return Xy.test(n)?n:lo}catch{return lo}}function Jy(t){return Qy(t).substr(0,22)}/**
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
 */function ti(t){return`${t.appName}!${t.appId}`}/**
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
 */const gh=new Map;function mh(t,e){const n=ti(t);yh(n,e),Zy(n,e)}function yh(t,e){const n=gh.get(t);if(!!n)for(const r of n)r(e)}function Zy(t,e){const n=ev();n&&n.postMessage({key:t,fid:e}),tv()}let jt=null;function ev(){return!jt&&"BroadcastChannel"in self&&(jt=new BroadcastChannel("[Firebase] FID Change"),jt.onmessage=t=>{yh(t.data.key,t.data.fid)}),jt}function tv(){gh.size===0&&jt&&(jt.close(),jt=null)}/**
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
 */const nv="firebase-installations-database",rv=1,tn="firebase-installations-store";let Fi=null;function Qo(){return Fi||(Fi=Eu(nv,rv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}})),Fi}async function Ds(t,e){const n=ti(t),s=(await Qo()).transaction(tn,"readwrite"),i=s.objectStore(tn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&mh(t,e.fid),e}async function vh(t){const e=ti(t),r=(await Qo()).transaction(tn,"readwrite");await r.objectStore(tn).delete(e),await r.done}async function ni(t,e){const n=ti(t),s=(await Qo()).transaction(tn,"readwrite"),i=s.objectStore(tn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&mh(t,a.fid),a}/**
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
 */async function Xo(t){let e;const n=await ni(t.appConfig,r=>{const s=sv(r),i=iv(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===lo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sv(t){const e=t||{fid:Yy(),registrationStatus:0};return _h(e)}function iv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(en.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ov(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:av(t)}:{installationEntry:e}}async function ov(t,e){try{const n=await Wy(t,e);return Ds(t.appConfig,n)}catch(n){throw ch(n)&&n.customData.serverCode===409?await vh(t.appConfig):await Ds(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function av(t){let e=await Ac(t.appConfig);for(;e.registrationStatus===1;)await ph(100),e=await Ac(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xo(t);return r||n}return e}function Ac(t){return ni(t,e=>{if(!e)throw en.create("installation-not-found");return _h(e)})}function _h(t){return cv(t)?{fid:t.fid,registrationStatus:0}:t}function cv(t){return t.registrationStatus===1&&t.registrationTime+ih<Date.now()}/**
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
 */async function lv({appConfig:t,heartbeatServiceProvider:e},n){const r=uv(t,n),s=Hy(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:oh,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await fh(()=>fetch(r,a));if(c.ok){const l=await c.json();return uh(l)}else throw await hh("Generate Auth Token",c)}function uv(t,{fid:e}){return`${lh(t)}/${e}/authTokens:generate`}/**
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
 */async function Yo(t,e=!1){let n;const r=await ni(t.appConfig,i=>{if(!wh(i))throw en.create("not-registered");const o=i.authToken;if(!e&&fv(o))return i;if(o.requestStatus===1)return n=hv(t,e),i;{if(!navigator.onLine)throw en.create("app-offline");const a=gv(i);return n=dv(t,a),a}});return n?await n:r.authToken}async function hv(t,e){let n=await Cc(t.appConfig);for(;n.authToken.requestStatus===1;)await ph(100),n=await Cc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Yo(t,e):r}function Cc(t){return ni(t,e=>{if(!wh(e))throw en.create("not-registered");const n=e.authToken;return mv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dv(t,e){try{const n=await lv(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ds(t.appConfig,r),n}catch(n){if(ch(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vh(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ds(t.appConfig,r)}throw n}}function wh(t){return t!==void 0&&t.registrationStatus===2}function fv(t){return t.requestStatus===2&&!pv(t)}function pv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+By}function gv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mv(t){return t.requestStatus===1&&t.requestTime+ih<Date.now()}/**
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
 */async function yv(t){const e=t,{installationEntry:n,registrationPromise:r}=await Xo(e);return r?r.catch(console.error):Yo(e).catch(console.error),n.fid}/**
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
 */async function vv(t,e=!1){const n=t;return await _v(n),(await Yo(n,e)).token}async function _v(t){const{registrationPromise:e}=await Xo(t);e&&await e}/**
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
 */function wv(t){if(!t||!t.options)throw Vi("App Configuration");if(!t.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vi(t){return en.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="installations",Iv="installations-internal",bv=t=>{const e=t.getProvider("app").getImmediate(),n=wv(e),r=ln(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ev=t=>{const e=t.getProvider("app").getImmediate(),n=ln(e,Ih).getImmediate();return{getId:()=>yv(n),getToken:s=>vv(n,s)}};function Tv(){lt(new tt(Ih,bv,"PUBLIC")),lt(new tt(Iv,Ev,"PRIVATE"))}Tv();Je(sh,Wo);Je(sh,Wo,"esm2017");/**
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
 */const Rs="analytics",Sv="firebase_id",kv="origin",Av=60*1e3,Cv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ge=new Ys("@firebase/analytics");/**
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
 */function Eh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Dv(t,e){const n=document.createElement("script");n.src=`${bh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Rv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Nv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Eh(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",s,i)}async function Ov(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Eh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ge.error(i)}}function $v(t,e,n,r){async function s(i,o,a){try{i==="event"?await Ov(t,e,n,o,a):i==="config"?await Nv(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ge.error(c)}}return s}function Pv(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=$v(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Mv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(bh))return e;return null}/**
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
 */const Lv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ze=new cn("analytics","Analytics",Lv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=30,Uv=1e3;class Fv{constructor(e={},n=Uv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Th=new Fv;function Vv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Vv(r)},i=Cv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function jv(t,e=Th,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ze.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ze.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Hv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Av),Sh({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Sh(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Th){var i,o;const{appId:a,measurementId:c}=t;try{await qv(r,e)}catch(l){if(c)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Bv(t);return s.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!zv(u)){if(s.deleteThrottleMetadata(a),c)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?sc(n,s.intervalMillis,xv):sc(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,d),Ge.debug(`Calling attemptFetch again in ${h} millis`),Sh(t,d,r,s)}}function qv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zv(t){if(!(t instanceof nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Hv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Kv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(){var t;if(_u())try{await wu()}catch(e){return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wv(t,e,n,r,s,i,o){var a;const c=jv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ge.error(p)),e.push(c);const l=Gv().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);Mv()||Dv(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[kv]="firebase",d.update=!0,h!=null&&(d[Sv]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class Qv{constructor(e){this.app=e}_delete(){return delete sr[this.app.options.appId],Promise.resolve()}}let sr={},Dc=[];const Rc={};let Bi="dataLayer",Xv="gtag",Nc,kh,Oc=!1;function Yv(){const t=[];if(Mo()&&t.push("This is a browser extension environment."),Ap()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function Jv(t,e,n){Yv();const r=t.options.appId;if(!r)throw Ze.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(sr[r]!=null)throw Ze.create("already-exists",{id:r});if(!Oc){Rv(Bi);const{wrappedGtag:i,gtagCore:o}=Pv(sr,Dc,Rc,Bi,Xv);kh=i,Nc=o,Oc=!0}return sr[r]=Wv(t,Dc,Rc,e,Nc,Bi,n),new Qv(t)}function Zv(t=xo()){t=xe(t);const e=ln(t,Rs);return e.isInitialized()?e.getImmediate():e_(t)}function e_(t,e={}){const n=ln(t,Rs);if(n.isInitialized()){const s=n.getImmediate();if(dr(e,n.getOptions()))return s;throw Ze.create("already-initialized")}return n.initialize({options:e})}function t_(t,e,n,r){t=xe(t),Kv(kh,sr[t.app.options.appId],e,n,r).catch(s=>Ge.error(s))}const $c="@firebase/analytics",Pc="0.8.0";function n_(){lt(new tt(Rs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Jv(r,s,n)},"PUBLIC")),lt(new tt("analytics-internal",t,"PRIVATE")),Je($c,Pc),Je($c,Pc,"esm2017");function t(e){try{const n=e.getProvider(Rs).getImmediate();return{logEvent:(r,s,i)=>t_(n,r,s,i)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}n_();var r_="firebase",s_="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(r_,s_,"app");var i_=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Jo=Jo||{},H=i_||self;function Ns(){}function uo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ur(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o_(t){return Object.prototype.hasOwnProperty.call(t,ji)&&t[ji]||(t[ji]=++a_)}var ji="closure_uid_"+(1e9*Math.random()>>>0),a_=0;function c_(t,e,n){return t.call.apply(t.bind,arguments)}function l_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ne(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=c_:Ne=l_,Ne.apply(null,arguments)}function rs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Lt(){this.s=this.s,this.o=this.o}var u_=0;Lt.prototype.s=!1;Lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),u_!=0)&&o_(this)};Lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ah=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ch=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function h_(t){e:{var e=nw;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Mc(t){return Array.prototype.concat.apply([],arguments)}function Zo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Os(t){return/^[\s\xa0]*$/.test(t)}var Lc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fe(t,e){return t.indexOf(e)!=-1}function qi(t,e){return t<e?-1:t>e?1:0}var Ve;e:{var xc=H.navigator;if(xc){var Uc=xc.userAgent;if(Uc){Ve=Uc;break e}}Ve=""}function ea(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dh(t){const e={};for(const n in t)e[n]=t[n];return e}var Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rh(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Fc.length;i++)n=Fc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ta(t){return ta[" "](t),t}ta[" "]=Ns;function d_(t){var e=g_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var f_=Fe(Ve,"Opera"),Dn=Fe(Ve,"Trident")||Fe(Ve,"MSIE"),Nh=Fe(Ve,"Edge"),ho=Nh||Dn,Oh=Fe(Ve,"Gecko")&&!(Fe(Ve.toLowerCase(),"webkit")&&!Fe(Ve,"Edge"))&&!(Fe(Ve,"Trident")||Fe(Ve,"MSIE"))&&!Fe(Ve,"Edge"),p_=Fe(Ve.toLowerCase(),"webkit")&&!Fe(Ve,"Edge");function $h(){var t=H.document;return t?t.documentMode:void 0}var $s;e:{var zi="",Hi=function(){var t=Ve;if(Oh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Nh)return/Edge\/([\d\.]+)/.exec(t);if(Dn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(p_)return/WebKit\/(\S+)/.exec(t);if(f_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hi&&(zi=Hi?Hi[1]:""),Dn){var Ki=$h();if(Ki!=null&&Ki>parseFloat(zi)){$s=String(Ki);break e}}$s=zi}var g_={};function m_(){return d_(function(){let t=0;const e=Lc(String($s)).split("."),n=Lc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=qi(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||qi(s[2].length==0,i[2].length==0)||qi(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var fo;if(H.document&&Dn){var Vc=$h();fo=Vc||parseInt($s,10)||void 0}else fo=void 0;var y_=fo,v_=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Ns,e),H.removeEventListener("test",Ns,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function yr(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Oh){e:{try{ta(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:__[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yr.Z.h.call(this)}}Pe(yr,Le);var __={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),w_=0;function I_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++w_,this.ca=this.fa=!1}function ri(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function si(t){this.src=t,this.g={},this.h=0}si.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=go(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new I_(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function po(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ah(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ri(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function go(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var na="closure_lm_"+(1e6*Math.random()|0),Gi={};function Ph(t,e,n,r,s){if(r&&r.once)return Lh(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ph(t,e[i],n,r,s);return null}return n=ia(n),t&&t[Fr]?t.N(e,n,Ur(r)?!!r.capture:!!r,s):Mh(t,e,n,!1,r,s)}function Mh(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ur(s)?!!s.capture:!!s,a=sa(t);if(a||(t[na]=a=new si(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=b_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)v_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Uh(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function b_(){function t(n){return e.call(t.src,t.listener,n)}var e=E_;return t}function Lh(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lh(t,e[i],n,r,s);return null}return n=ia(n),t&&t[Fr]?t.O(e,n,Ur(r)?!!r.capture:!!r,s):Mh(t,e,n,!0,r,s)}function xh(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)xh(t,e[i],n,r,s);else r=Ur(r)?!!r.capture:!!r,n=ia(n),t&&t[Fr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=go(i,n,r,s),-1<n&&(ri(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=sa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=go(e,n,r,s)),(n=-1<t?e[t]:null)&&ra(n))}function ra(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Fr])po(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Uh(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=sa(e))?(po(n,t),n.h==0&&(n.src=null,e[na]=null)):ri(t)}}}function Uh(t){return t in Gi?Gi[t]:Gi[t]="on"+t}function E_(t,e){if(t.ca)t=!0;else{e=new yr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ra(t),t=n.call(r,e)}return t}function sa(t){return t=t[na],t instanceof si?t:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(t){return typeof t=="function"?t:(t[Wi]||(t[Wi]=function(e){return t.handleEvent(e)}),t[Wi])}function Ce(){Lt.call(this),this.i=new si(this),this.P=this,this.I=null}Pe(Ce,Lt);Ce.prototype[Fr]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){xh(this,t,e,n,r)};function Oe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var s=e;e=new Le(r,t),Rh(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ss(o,r,!0,e)&&s}if(o=e.g=t,s=ss(o,r,!0,e)&&s,s=ss(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ss(o,r,!1,e)&&s}Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ri(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ss(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&po(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var oa=H.JSON.stringify;function T_(){var t=Vh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class S_{constructor(){this.h=this.g=null}add(e,n){const r=Fh.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new k_,t=>t.reset());class k_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function A_(t){H.setTimeout(()=>{throw t},0)}function aa(t,e){mo||C_(),yo||(mo(),yo=!0),Vh.add(t,e)}var mo;function C_(){var t=H.Promise.resolve(void 0);mo=function(){t.then(D_)}}var yo=!1,Vh=new S_;function D_(){for(var t;t=T_();){try{t.h.call(t.g)}catch(n){A_(n)}var e=Fh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yo=!1}function ii(t,e){Ce.call(this),this.h=t||1,this.g=e||H,this.j=Ne(this.kb,this),this.l=Date.now()}Pe(ii,Ce);$=ii.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(ca(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ca(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){ii.Z.M.call(this),ca(this),delete this.g};function la(t,e,n){if(typeof t=="function")n&&(t=Ne(t,n));else if(t&&typeof t.handleEvent=="function")t=Ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Bh(t){t.g=la(()=>{t.g=null,t.i&&(t.i=!1,Bh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class R_ extends Lt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bh(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(t){Lt.call(this),this.h=t,this.g={}}Pe(vr,Lt);var Bc=[];function jh(t,e,n,r){Array.isArray(n)||(n&&(Bc[0]=n.toString()),n=Bc);for(var s=0;s<n.length;s++){var i=Ph(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qh(t){ea(t.g,function(e,n){this.g.hasOwnProperty(n)&&ra(e)},t),t.g={}}vr.prototype.M=function(){vr.Z.M.call(this),qh(this)};vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oi(){this.g=!0}oi.prototype.Aa=function(){this.g=!1};function N_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function O_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+P_(t,n)+(r?" "+r:"")})}function $_(t,e){t.info(function(){return"TIMEOUT: "+e})}oi.prototype.info=function(){};function P_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return oa(n)}catch{return e}}var un={},jc=null;function ai(){return jc=jc||new Ce}un.Ma="serverreachability";function zh(t){Le.call(this,un.Ma,t)}Pe(zh,Le);function _r(t){const e=ai();Oe(e,new zh(e,t))}un.STAT_EVENT="statevent";function Hh(t,e){Le.call(this,un.STAT_EVENT,t),this.stat=e}Pe(Hh,Le);function Be(t){const e=ai();Oe(e,new Hh(e,t))}un.Na="timingevent";function Kh(t,e){Le.call(this,un.Na,t),this.size=e}Pe(Kh,Le);function Vr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var ci={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Gh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ua(){}ua.prototype.h=null;function qc(t){return t.h||(t.h=t.i())}function Wh(){}var Br={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ha(){Le.call(this,"d")}Pe(ha,Le);function da(){Le.call(this,"c")}Pe(da,Le);var vo;function li(){}Pe(li,ua);li.prototype.g=function(){return new XMLHttpRequest};li.prototype.i=function(){return{}};vo=new li;function jr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new vr(this),this.P=M_,t=ho?125:void 0,this.W=new ii(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Qh}function Qh(){this.i=null,this.g="",this.h=!1}var M_=45e3,_o={},Ps={};$=jr.prototype;$.setTimeout=function(t){this.P=t};function wo(t,e,n){t.K=1,t.v=hi(_t(e)),t.s=n,t.U=!0,Xh(t,null)}function Xh(t,e){t.F=Date.now(),qr(t),t.A=_t(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),rd(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Qh,t.g=Ed(t.l,n?e:null,!t.s),0<t.O&&(t.L=new R_(Ne(t.Ia,t,t.g),t.O)),jh(t.V,t.g,"readystatechange",t.gb),e=t.H?Dh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),_r(1),N_(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&mt(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const u=mt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ho||this.g&&(this.h.h||this.g.ga()||Gc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_r(3):_r(2)),ui(this);var n=this.g.ba();this.N=n;t:if(Yh(this)){var r=Gc(this.g);t="";var s=r.length,i=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){qt(this),ir(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,O_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Os(a)){var l=a;break t}}l=null}if(n=l)vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Io(this,n);else{this.i=!1,this.o=3,Be(12),qt(this),ir(this);break e}}this.U?(Jh(this,u,o),ho&&this.i&&u==3&&(jh(this.V,this.W,"tick",this.fb),this.W.start())):(vn(this.j,this.m,o,null),Io(this,o)),u==4&&qt(this),this.i&&!this.I&&(u==4?_d(this.l,this):(this.i=!1,qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),qt(this),ir(this)}}}catch{}finally{}};function Yh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Jh(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=L_(t,n),s==Ps){e==4&&(t.o=4,Be(14),r=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==_o){t.o=4,Be(15),vn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vn(t.j,t.m,s,null),Io(t,s);Yh(t)&&s!=Ps&&s!=_o&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ia(e),e.L=!0,Be(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),qt(t),ir(t))}$.fb=function(){if(this.g){var t=mt(this.g),e=this.g.ga();this.C<e.length&&(ui(this),Jh(this,t,e),this.i&&t!=4&&qr(this))}};function L_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ps:(n=Number(e.substring(n,r)),isNaN(n)?_o:(r+=1,r+n>e.length?Ps:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,qt(this)};function qr(t){t.Y=Date.now()+t.P,Zh(t,t.P)}function Zh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vr(Ne(t.eb,t),e)}function ui(t){t.B&&(H.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($_(this.j,this.A),this.K!=2&&(_r(3),Be(17)),qt(this),this.o=2,ir(this)):Zh(this,this.Y-t)};function ir(t){t.l.G==0||t.I||_d(t.l,t)}function qt(t){ui(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ca(t.W),qh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Io(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bo(n.i,t))){if(n.I=t.N,!t.J&&bo(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Us(n),pi(n);else break e;wa(n),Be(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Vr(Ne(n.ab,n),6e3));if(1>=od(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&Us(n),!Os(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;!i.g&&(Fe(g,"spdy")||Fe(g,"quic")||Fe(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ga(i,i.h),i.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,ge(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=bd(r,r.H?r.la:null,r.W),o.J){ad(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ui(a),qr(a)),r.g=o}else yd(r);0<n.l.length&&gi(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):_a(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}_r(4)}catch{}}function x_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(uo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function fa(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uo(t)||typeof t=="string")Ch(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(uo(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=x_(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Bn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Bn)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=Bn.prototype;$.R=function(){pa(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return pa(this),this.g.concat()};function pa(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];nn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],nn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}$.get=function(t,e){return nn(this.h,t)?this.h[t]:e};$.set=function(t,e){nn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ed=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function U_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function rn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof rn){this.g=e!==void 0?e:t.g,Ms(this,t.j),this.s=t.s,Ls(this,t.i),xs(this,t.m),this.l=t.l,e=t.h;var n=new wr;n.i=e.i,e.g&&(n.g=new Bn(e.g),n.h=e.h),zc(this,n),this.o=t.o}else t&&(n=String(t).match(ed))?(this.g=!!e,Ms(this,n[1]||"",!0),this.s=or(n[2]||""),Ls(this,n[3]||"",!0),xs(this,n[4]),this.l=or(n[5]||"",!0),zc(this,n[6]||"",!0),this.o=or(n[7]||"")):(this.g=!!e,this.h=new wr(null,this.g))}rn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(er(e,Hc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(er(e,Hc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(er(n,n.charAt(0)=="/"?q_:j_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",er(n,H_)),t.join("")};function _t(t){return new rn(t)}function Ms(t,e,n){t.j=n?or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ls(t,e,n){t.i=n?or(e,!0):e}function xs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zc(t,e,n){e instanceof wr?(t.h=e,K_(t.h,t.g)):(n||(e=er(e,z_)),t.h=new wr(e,t.g))}function ge(t,e,n){t.h.set(e,n)}function hi(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function F_(t){return t instanceof rn?_t(t):new rn(t,void 0)}function V_(t,e,n,r){var s=new rn(null,void 0);return t&&Ms(s,t),e&&Ls(s,e),n&&xs(s,n),r&&(s.l=r),s}function or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,B_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function B_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hc=/[#\/\?@]/g,j_=/[#\?:]/g,q_=/[#\?]/g,z_=/[#\?@]/g,H_=/#/g;function wr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xt(t){t.g||(t.g=new Bn,t.h=0,t.i&&U_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=wr.prototype;$.add=function(t,e){xt(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function td(t,e){xt(t),e=jn(t,e),nn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,nn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pa(t)))}function nd(t,e){return xt(t),e=jn(t,e),nn(t.g.h,e)}$.forEach=function(t,e){xt(this),this.g.forEach(function(n,r){Ch(n,function(s){t.call(e,s,r,this)},this)},this)};$.T=function(){xt(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};$.R=function(t){xt(this);var e=[];if(typeof t=="string")nd(this,t)&&(e=Mc(e,this.g.get(jn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Mc(e,t[n])}return e};$.set=function(t,e){return xt(this),this.i=null,t=jn(this,t),nd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function rd(t,e,n){td(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),Zo(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function K_(t,e){e&&!t.j&&(xt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(td(this,r),rd(this,s,n))},t)),t.j=e}var G_=class{constructor(t,e){this.h=t,this.g=e}};function sd(t){this.l=t||W_,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var W_=10;function id(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function od(t){return t.h?1:t.g?t.g.size:0}function bo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ga(t,e){t.g?t.g.add(e):t.h=e}function ad(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sd.prototype.cancel=function(){if(this.i=cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zo(t.i)}function ma(){}ma.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};ma.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function Q_(){this.g=new ma}function X_(t,e,n){const r=n||"";try{fa(t,function(s,i){let o=s;Ur(s)&&(o=oa(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Y_(t,e){const n=new oi;if(H.Image){const r=new Image;r.onload=rs(is,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rs(is,n,r,"TestLoadImage: error",!1,e),r.onabort=rs(is,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rs(is,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function is(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zr(t){this.l=t.$b||null,this.j=t.ib||!1}Pe(zr,ua);zr.prototype.g=function(){return new di(this.l,this.j)};zr.prototype.i=function(t){return function(){return t}}({});function di(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ya,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(di,Ce);var ya=0;$=di.prototype;$.open=function(t,e){if(this.readyState!=ya)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ir(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=ya};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof H.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ld(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ld(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hr(this):Ir(this),this.readyState==3&&ld(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,Hr(this))};$.Ta=function(t){this.g&&(this.response=t,Hr(this))};$.ha=function(){this.g&&Hr(this)};function Hr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ir(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ir(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var J_=H.JSON.parse;function _e(t){Ce.call(this),this.headers=new Bn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ud,this.K=this.L=!1}Pe(_e,Ce);var ud="",Z_=/^https?$/i,ew=["POST","PUT"];$=_e.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vo.g(),this.C=this.u?qc(this.u):qc(vo),this.g.onreadystatechange=Ne(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Kc(this,i);return}t=n||"";const s=new Bn(this.headers);r&&fa(r,function(i,o){s.set(o,i)}),r=h_(s.T()),n=H.FormData&&t instanceof H.FormData,!(0<=Ah(ew,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fd(this),0<this.B&&((this.K=tw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.pa,this)):this.A=la(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Kc(this,i)}};function tw(t){return Dn&&m_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function nw(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof Jo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))};function Kc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hd(t),fi(t)}function hd(t){t.D||(t.D=!0,Oe(t,"complete"),Oe(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Oe(this,"complete"),Oe(this,"abort"),fi(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fi(this,!0)),_e.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?dd(this):this.cb())};$.cb=function(){dd(this)};function dd(t){if(t.h&&typeof Jo!="undefined"&&(!t.C[1]||mt(t)!=4||t.ba()!=2)){if(t.v&&mt(t)==4)la(t.Fa,0,t);else if(Oe(t,"readystatechange"),mt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(ed)[1]||null;if(!s&&H.self&&H.self.location){var i=H.self.location.protocol;s=i.substr(0,i.length-1)}r=!Z_.test(s?s.toLowerCase():"")}n=r}if(n)Oe(t,"complete"),Oe(t,"success");else{t.m=6;try{var o=2<mt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",hd(t)}}finally{fi(t)}}}}function fi(t,e){if(t.g){fd(t);const n=t.g,r=t.C[0]?Ns:null;t.g=null,t.C=null,e||Oe(t,"ready");try{n.onreadystatechange=r}catch{}}}function fd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function mt(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),J_(e)}};function Gc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ud:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function rw(t){let e="";return ea(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function va(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pd(t){this.za=0,this.l=[],this.h=new oi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wn("baseRetryDelayMs",5e3,t),this.$a=Wn("retryDelaySeedMs",1e4,t),this.Ya=Wn("forwardChannelMaxRetries",2,t),this.ra=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new sd(t&&t.concurrentRequestLimit),this.Ca=new Q_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=pd.prototype;$.ma=8;$.G=1;function _a(t){if(gd(t),t.G==3){var e=t.V++,n=_t(t.F);ge(n,"SID",t.J),ge(n,"RID",e),ge(n,"TYPE","terminate"),Kr(t,n),e=new jr(t,t.h,e,void 0),e.K=2,e.v=hi(_t(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ed(e.l,null),e.g.ea(e.v)),e.F=Date.now(),qr(e)}Id(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function pi(t){t.g&&(Ia(t),t.g.cancel(),t.g=null)}function gd(t){pi(t),t.u&&(H.clearTimeout(t.u),t.u=null),Us(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Qi(t,e){t.l.push(new G_(t.Za++,e)),t.G==3&&gi(t)}function gi(t){id(t.i)||t.m||(t.m=!0,aa(t.Ha,t),t.C=0)}function sw(t,e){return od(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Vr(Ne(t.Ha,t,e),wd(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new jr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Dh(i),Rh(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=md(this,s,e),n=_t(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Kr(this,n),this.o&&i&&va(n,this.o,i),ga(this.i,s),this.Ra&&ge(n,"TYPE","init"),this.ja?(ge(n,"$req",e),ge(n,"SID","null"),s.$=!0,wo(s,n,null)):wo(s,n,e),this.G=2}}else this.G==3&&(t?Wc(this,t):this.l.length==0||id(this.i)||Wc(this))};function Wc(t,e){var n;e?n=e.m:n=t.V++;const r=_t(t.F);ge(r,"SID",t.J),ge(r,"RID",n),ge(r,"AID",t.U),Kr(t,r),t.o&&t.s&&va(r,t.o,t.s),n=new jr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=md(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ga(t.i,n),wo(n,r,e)}function Kr(t,e){t.j&&fa({},function(n,r){ge(e,r,n)})}function md(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ne(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{X_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function yd(t){t.g||t.u||(t.Y=1,aa(t.Ga,t),t.A=0)}function wa(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Vr(Ne(t.Ga,t),wd(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,vd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vr(Ne(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Be(10),pi(this),vd(this))};function Ia(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function vd(t){t.g=new jr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=_t(t.oa);ge(e,"RID","rpc"),ge(e,"SID",t.J),ge(e,"CI",t.N?"0":"1"),ge(e,"AID",t.U),Kr(t,e),ge(e,"TYPE","xmlhttp"),t.o&&t.s&&va(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=hi(_t(e)),n.s=null,n.U=!0,Xh(n,t)}$.ab=function(){this.v!=null&&(this.v=null,pi(this),wa(this),Be(19))};function Us(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function _d(t,e){var n=null;if(t.g==e){Us(t),Ia(t),t.g=null;var r=2}else if(bo(t.i,e))n=e.D,ad(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ai(),Oe(r,new Kh(r,n,e,s)),gi(t)}else yd(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&sw(t,e)||r==2&&wa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function wd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ne(t.jb,t);n||(n=new rn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Ms(n,"https"),hi(n)),Y_(n.toString(),r)}else Be(2);t.G=0,t.j&&t.j.va(e),Id(t),gd(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Be(2)):(this.h.info("Failed to ping google.com"),Be(1))};function Id(t){t.G=0,t.I=-1,t.j&&((cd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Zo(t.l),t.l.length=0),t.j.ua())}function bd(t,e,n){let r=F_(n);if(r.i!="")e&&Ls(r,e+"."+r.i),xs(r,r.m);else{const s=H.location;r=V_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&ea(t.aa,function(s,i){ge(r,i,s)}),e=t.D,n=t.sa,e&&n&&ge(r,e,n),ge(r,"VER",t.ma),Kr(t,r),r}function Ed(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new zr({ib:!0})):new _e(t.qa),e.L=t.H,e}function Td(){}$=Td.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function Fs(){if(Dn&&!(10<=Number(y_)))throw Error("Environmental error: no available transport.")}Fs.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Ce.call(this),this.g=new pd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Os(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Os(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}Pe(Qe,Ce);Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),aa(Ne(t.hb,t,e))),Be(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bd(t,null,t.W),gi(t)};Qe.prototype.close=function(){_a(this.g)};Qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Qi(this.g,e)}else this.v?(e={},e.__data__=oa(t),Qi(this.g,e)):Qi(this.g,t)};Qe.prototype.M=function(){this.g.j=null,delete this.j,_a(this.g),delete this.g,Qe.Z.M.call(this)};function Sd(t){ha.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(Sd,ha);function kd(){da.call(this),this.status=1}Pe(kd,da);function qn(t){this.g=t}Pe(qn,Td);qn.prototype.xa=function(){Oe(this.g,"a")};qn.prototype.wa=function(t){Oe(this.g,new Sd(t))};qn.prototype.va=function(t){Oe(this.g,new kd(t))};qn.prototype.ua=function(){Oe(this.g,"b")};Fs.prototype.createWebChannel=Fs.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;ci.NO_ERROR=0;ci.TIMEOUT=8;ci.HTTP_ERROR=6;Gh.COMPLETE="complete";Wh.EventType=Br;Br.OPEN="a";Br.CLOSE="b";Br.ERROR="c";Br.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var iw=function(){return new Fs},ow=function(){return ai()},Xi=ci,aw=Gh,cw=un,Qc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},lw=zr,os=Wh,uw=_e;const Xc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Ys("@firebase/firestore");function Yc(){return sn.logLevel}function x(t,...e){if(sn.logLevel<=ce.DEBUG){const n=e.map(ba);sn.debug(`Firestore (${zn}): ${t}`,...n)}}function wt(t,...e){if(sn.logLevel<=ce.ERROR){const n=e.map(ba);sn.error(`Firestore (${zn}): ${t}`,...n)}}function Jc(t,...e){if(sn.logLevel<=ce.WARN){const n=e.map(ba);sn.warn(`Firestore (${zn}): ${t}`,...n)}}function ba(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw wt(e),new Error(e)}function pe(t,e){t||G()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class fw{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ze(e)}}class pw{constructor(e,n,r){this.type="FirstParty",this.user=ze.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class gw{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pw(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.p=n.token,new mw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ie(0,0))}static max(){return new ee(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return br.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof br?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends br{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const _w=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends br{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return _w.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(me.fromString(e))}static fromName(e){return new U(me.fromString(e).popFirst(5))}static empty(){return new U(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new me(e.slice()))}}function ww(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Rt(s,U.empty(),e)}function Iw(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rt(ee.min(),U.empty(),-1)}static max(){return new Rt(ee.max(),U.empty(),-1)}}function bw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Ew)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new T((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new T((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Wr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ea.ot=-1;class Ee{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new as(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new as(this.root,e,this.comparator,!1)}getReverseIterator(){return new as(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new as(this.root,e,this.comparator,!0)}}class as{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:De.RED,this.left=s!=null?s:De.EMPTY,this.right=i!=null?i:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new De(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new el(this.data.getIterator())}getIteratorFrom(e){return new el(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class el{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new ot([])}unionWith(e){let n=new be(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new $e(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const Sw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(t){if(pe(!!t),typeof t=="string"){let e=0;const n=Sw.exec(t);if(pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nn(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rd(t){const e=t.mapValue.fields.__previous_value__;return Dd(e)?Rd(e):e}function Er(t){const e=Nt(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class On{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new On("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof On&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return t==null}function Vs(t){return t===0&&1/t==-1/0}function Aw(t){return typeof t=="number"&&Number.isInteger(t)&&!Vs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function on(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dd(t)?4:Cw(t)?9007199254740991:10:G()}function ut(t,e){if(t===e)return!0;const n=on(t);if(n!==on(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Nt(r.timestampValue),o=Nt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Nn(r.bytesValue).isEqual(Nn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ve(r.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ve(r.integerValue)===ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ve(r.doubleValue),o=ve(s.doubleValue);return i===o?Vs(i)===Vs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Zc(i)!==Zc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ut(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Tr(t,e){return(t.values||[]).find(n=>ut(n,e))!==void 0}function $n(t,e){if(t===e)return 0;const n=on(t),r=on(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ve(s.integerValue||s.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tl(t.timestampValue,e.timestampValue);case 4:return tl(Er(t),Er(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Nn(s),a=Nn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=le(ve(s.latitude),ve(i.latitude));return o!==0?o:le(ve(s.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=$n(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===cs.mapValue&&i===cs.mapValue)return 0;if(s===cs.mapValue)return 1;if(i===cs.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=$n(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function tl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Nt(t),r=Nt(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function En(t){return Eo(t)}function Eo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Nt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Nn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Eo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Eo(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function To(t){return!!t&&"integerValue"in t}function Ta(t){return!!t&&"arrayValue"in t}function nl(t){return!!t&&"nullValue"in t}function rl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ys(t){return!!t&&"mapValue"in t}function ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ar(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ys(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(n)}setAll(e){let n=Me.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ar(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ys(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xe(ar(this.value))}}function Nd(t){const e=[];return Hn(t.fields,(n,r)=>{const s=new Me([n]);if(ys(r)){const i=Nd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Re(e,0,ee.min(),ee.min(),Xe.empty(),0)}static newFoundDocument(e,n,r){return new Re(e,1,n,ee.min(),r,0)}static newNoDocument(e,n){return new Re(e,2,n,ee.min(),Xe.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,ee.min(),Xe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dw{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function sl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Dw(t,e,n,r,s,i,o)}function Sa(t){const e=W(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+En(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>En(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>En(r)).join(",")),e.ut=n}return e.ut}function Rw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${En(r.value)}`;var r}).join(", ")}]`),mi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>En(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>En(n)).join(",")),`Target(${e})`}function ka(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Uw(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ut(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ol(t.startAt,e.startAt)&&ol(t.endAt,e.endAt)}function So(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class He extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new Nw(e,n,r):n==="array-contains"?new Pw(e,r):n==="in"?new Mw(e,r):n==="not-in"?new Lw(e,r):n==="array-contains-any"?new xw(e,r):new He(e,n,r)}static ct(e,n,r){return n==="in"?new Ow(e,r):new $w(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at($n(n,this.value)):n!==null&&on(this.value)===on(n)&&this.at($n(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Nw extends He{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.at(n)}}class Ow extends He{constructor(e,n){super(e,"in",n),this.keys=Od("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $w extends He{constructor(e,n){super(e,"not-in",n),this.keys=Od("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Od(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class Pw extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ta(n)&&Tr(n.arrayValue,this.value)}}class Mw extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class Lw extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class xw extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ta(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tr(this.value.arrayValue,r))}}class Bs{constructor(e,n){this.position=e,this.inclusive=n}}class cr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function il(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=$n(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ol(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Fw(t,e,n,r,s,i,o,a){return new yi(t,e,n,r,s,i,o,a)}function Aa(t){return new yi(t)}function al(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function jw(t){return t.collectionGroup!==null}function Sr(t){const e=W(t);if(e.lt===null){e.lt=[];const n=Bw(e),r=Vw(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new cr(n)),e.lt.push(new cr(Me.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new cr(Me.keyField(),i))}}}return e.lt}function It(t){const e=W(t);if(!e.ft)if(e.limitType==="F")e.ft=sl(e.path,e.collectionGroup,Sr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Sr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cr(i.field,o))}const r=e.endAt?new Bs(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Bs(e.startAt.position,e.startAt.inclusive):null;e.ft=sl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function ko(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vi(t,e){return ka(It(t),It(e))&&t.limitType===e.limitType}function $d(t){return`${Sa(It(t))}|lt:${t.limitType}`}function Ao(t){return`Query(target=${Rw(It(t))}; limitType=${t.limitType})`}function Ca(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):U.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=il(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Sr(n),r)||n.endAt&&!function(s,i,o){const a=il(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Sr(n),r))}(t,e)}function qw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pd(t){return(e,n)=>{let r=!1;for(const s of Sr(t)){const i=zw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zw(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?$n(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function Ld(t){return{integerValue:""+t}}function Hw(t,e){return Aw(e)?Ld(e):Md(t,e)}/**
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
 */class _i{constructor(){this._=void 0}}function Kw(t,e,n){return t instanceof js?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof kr?Ud(t,e):t instanceof Ar?Fd(t,e):function(r,s){const i=xd(r,s),o=cl(i)+cl(r._t);return To(i)&&To(r._t)?Ld(o):Md(r.wt,o)}(t,e)}function Gw(t,e,n){return t instanceof kr?Ud(t,e):t instanceof Ar?Fd(t,e):n}function xd(t,e){return t instanceof qs?To(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class js extends _i{}class kr extends _i{constructor(e){super(),this.elements=e}}function Ud(t,e){const n=Vd(e);for(const r of t.elements)n.some(s=>ut(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ar extends _i{constructor(e){super(),this.elements=e}}function Fd(t,e){let n=Vd(e);for(const r of t.elements)n=n.filter(s=>!ut(s,r));return{arrayValue:{values:n}}}class qs extends _i{constructor(e,n){super(),this.wt=e,this._t=n}}function cl(t){return ve(t.integerValue||t.doubleValue)}function Vd(t){return Ta(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ww(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof kr&&r instanceof kr||n instanceof Ar&&r instanceof Ar?Rn(n.elements,r.elements,ut):n instanceof qs&&r instanceof qs?ut(n._t,r._t):n instanceof js&&r instanceof js}(t.transform,e.transform)}class Qw{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wi{}function Bd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Da(t.key,at.none()):new Qr(t.key,t.data,at.none());{const n=t.data,r=Xe.empty();let s=new be(Me.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hn(t.key,r,new ot(s.toArray()),at.none())}}function Xw(t,e,n){t instanceof Qr?function(r,s,i){const o=r.value.clone(),a=ul(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hn?function(r,s,i){if(!vs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=ul(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(jd(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function lr(t,e,n,r){return t instanceof Qr?function(s,i,o,a){if(!vs(s.precondition,i))return o;const c=s.value.clone(),l=hl(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hn?function(s,i,o,a){if(!vs(s.precondition,i))return o;const c=hl(s.fieldTransforms,a,i),l=i.data;return l.setAll(jd(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return vs(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Yw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xd(r.transform,s||null);i!=null&&(n===null&&(n=Xe.empty()),n.set(r.field,i))}return n||null}function ll(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Rn(n,r,(s,i)=>Ww(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qr extends wi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hn extends wi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ul(t,e,n){const r=new Map;pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Gw(o,a,n[s]))}return r}function hl(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Kw(i,o,e))}return r}class Da extends wi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jw extends wi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,oe;function e0(t){switch(t){default:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function qd(t){if(t===void 0)return wt("GRPC error has no .code"),S.UNKNOWN;switch(t){case ye.OK:return S.OK;case ye.CANCELLED:return S.CANCELLED;case ye.UNKNOWN:return S.UNKNOWN;case ye.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ye.INTERNAL:return S.INTERNAL;case ye.UNAVAILABLE:return S.UNAVAILABLE;case ye.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ye.NOT_FOUND:return S.NOT_FOUND;case ye.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ye.ABORTED:return S.ABORTED;case ye.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ye.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(oe=ye||(ye={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new Ee(U.comparator);function bt(){return t0}const zd=new Ee(U.comparator);function tr(...t){let e=zd;for(const n of t)e=e.insert(n.key,n);return e}function Hd(t){let e=zd;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ht(){return ur()}function Kd(){return ur()}function ur(){return new Kn(t=>t.toString(),(t,e)=>t.isEqual(e))}const n0=new Ee(U.comparator),r0=new be(U.comparator);function ne(...t){let e=r0;for(const n of t)e=e.add(n);return e}const s0=new be(le);function Gd(){return s0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Xr.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ii(ee.min(),r,Gd(),bt(),ne())}}class Xr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Xr($e.EMPTY_BYTE_STRING,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class Wd{constructor(e,n){this.targetId=e,this.It=n}}class Qd{constructor(e,n,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dl{constructor(){this.Tt=0,this.Et=pl(),this.At=$e.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ne(),n=ne(),r=ne();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Xr(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=pl()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class i0{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=bt(),this.Bt=fl(),this.Lt=new be(le)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(So(i))if(r===0){const o=new U(i.path);this.Kt(n,o,Re.newNoDocument(o,ee.min()))}else pe(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&So(a.target)){const c=new U(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Re.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=ne();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new Ii(e,n,this.Lt,this.$t,r);return this.$t=bt(),this.Bt=fl(),this.Lt=new be(le),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new dl,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new be(le),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new dl),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function fl(){return new Ee(U.comparator)}function pl(){return new Ee(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),a0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class c0{constructor(e,n){this.databaseId=e,this.dt=n}}function zs(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function l0(t,e){return zs(t,e.toTimestamp())}function yt(t){return pe(!!t),ee.fromTimestamp(function(e){const n=Nt(e);return new Ie(n.seconds,n.nanos)}(t))}function Ra(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Yd(t){const e=me.fromString(t);return pe(ef(e)),e}function Co(t,e){return Ra(t.databaseId,e.path)}function Yi(t,e){const n=Yd(e);if(n.get(1)!==t.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(Jd(n))}function Do(t,e){return Ra(t.databaseId,e)}function u0(t){const e=Yd(t);return e.length===4?me.emptyPath():Jd(e)}function Ro(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jd(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gl(t,e,n){return{name:Co(t,e),fields:n.value.mapValue.fields}}function h0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(pe(l===void 0||typeof l=="string"),$e.fromBase64String(l||"")):(pe(l===void 0||l instanceof Uint8Array),$e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:qd(c.code);return new V(l,c.message||"")}(o);n=new Qd(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yi(t,r.document.name),i=yt(r.document.updateTime),o=new Xe({mapValue:{fields:r.document.fields}}),a=Re.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new _s(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yi(t,r.document),i=r.readTime?yt(r.readTime):ee.min(),o=Re.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _s([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yi(t,r.document),i=r.removedTargetIds||[];n=new _s([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Zw(s),o=r.targetId;n=new Wd(o,i)}}return n}function d0(t,e){let n;if(e instanceof Qr)n={update:gl(t,e.key,e.value)};else if(e instanceof Da)n={delete:Co(t,e.key)};else if(e instanceof hn)n={update:gl(t,e.key,e.data),updateMask:b0(e.fieldMask)};else{if(!(e instanceof Jw))return G();n={verify:Co(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof js)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ar)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:l0(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function f0(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?yt(r.updateTime):yt(s);return i.isEqual(ee.min())&&(i=yt(s)),new Qw(i,r.transformResults||[])}(n,e))):[]}function p0(t,e){return{documents:[Do(t,e.path)]}}function g0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Do(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Do(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(rl(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NAN"}};if(nl(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(rl(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NAN"}};if(nl(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(h.field),op:_0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gn(u.field),direction:v0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||mi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function m0(t){let e=u0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Zd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cr(_n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,mi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Bs(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Bs(d,h)}(n.endAt)),Fw(e,s,o,i,a,"F",c,l)}function y0(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zd(t){return t?t.unaryFilter!==void 0?[I0(t)]:t.fieldFilter!==void 0?[w0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Zd(e)).reduce((e,n)=>e.concat(n)):G():[]}function v0(t){return o0[t]}function _0(t){return a0[t]}function gn(t){return{fieldPath:t.canonicalString()}}function _n(t){return Me.fromServerFormat(t.fieldPath)}function w0(t){return He.create(_n(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function I0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_n(t.unaryFilter.field);return He.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_n(t.unaryFilter.field);return He.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_n(t.unaryFilter.field);return He.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_n(t.unaryFilter.field);return He.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function b0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ef(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Xw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Bd(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,r)=>ll(n,r))&&Rn(this.baseMutations,e.baseMutations,(n,r)=>ll(n,r))}}class Na{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length);let s=n0;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Na(e,n,r,s)}}/**
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
 */class T0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=$e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.ne=e}}function k0(t){const e=m0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ko(e,e.limit,"L"):e}/**
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
 */class A0{constructor(){this.ze=new C0}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Rt.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class C0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new be(me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Pn(0)}static Rn(){return new Pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.changes=new Kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&lr(r.mutation,s,ot.empty(),Ie.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Ht();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=tr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ht();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bt();const o=ur(),a=ur();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof hn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),lr(u.mutation,l,u.mutation.getFieldMask(),Ie.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new R0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ur();let s=new Ee((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ne()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Kd();u.forEach(d=>{if(!i.has(d)){const p=Bd(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return U.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):T.resolve(Ht());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ne())).next(u=>({batchId:a,changes:Hd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let s=tr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=tr();return this.indexManager.getCollectionParents(e,s).next(o=>T.forEach(o,a=>{const c=function(l,u){return new yi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Re.newInvalidDocument(l)))});let o=tr();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&lr(l.mutation,c,ot.empty(),Ie.now()),Ca(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(Re.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:yt(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:k0(r.bundledQuery),readTime:yt(r.readTime)}}(n)),T.resolve()}}/**
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
 */class $0{constructor(){this.overlays=new Ee(U.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ht();return T.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const s=Ht(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return T.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ht(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ht(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return T.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new T0(n,r));let i=this.Xn.get(n);i===void 0&&(i=ne(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.Zn=new be(Te.ts),this.es=new be(Te.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Te(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Te(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new me([])),r=new Te(n,e),s=new Te(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new U(new me([])),r=new Te(n,e),s=new Te(n,e+1);let i=ne();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Te(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return U.comparator(e.key,n.key)||le(e.ls,n.ls)}static ns(e,n){return le(e.ls,n.ls)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new be(Te.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new E0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),s=new Te(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(le);return n.forEach(s=>{const i=new Te(s,0),o=new Te(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const o=new Te(new U(i),0);let a=new be(le);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return T.forEach(n.mutations,s=>{const i=new Te(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Te(n,0),s=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.ps=e,this.docs=new Ee(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=bt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),T.resolve(r)}getAllFromCollection(e,n,r){let s=bt();const i=new U(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||bw(Iw(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,s){G()}Is(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new L0(this)}getSize(e){return T.resolve(this.size)}}class L0 extends D0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.persistence=e,this.Ts=new Kn(n=>Sa(n),ka),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Es=0,this.As=new Oa,this.targetCount=0,this.Rs=Pn.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Ea(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new x0(this),this.indexManager=new A0,this.remoteDocumentCache=function(r){return new M0(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new S0(n),this.Ds=new O0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new P0(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const s=new F0(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class F0 extends Tw{constructor(e){super(),this.currentSequenceNumber=e}}class $a{constructor(e){this.persistence=e,this.ks=new Oa,this.Ms=null}static Os(e){return new $a(e)}get Fs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,r=>{const s=U.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pa(e,n.fromCache,r,s)}}/**
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
 */class V0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(al(n))return T.resolve(null);let r=It(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ko(n,null,"F"),r=It(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,ko(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,s){return al(n)||s.isEqual(ee.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(Yc()<=ce.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ao(n)),this.Oi(e,o,n,ww(s,-1)))})}ki(e,n){let r=new be(Pd(e));return n.forEach((s,i)=>{Ca(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Yc()<=ce.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ao(n)),this.Di.getDocumentsMatchingQuery(e,n,Rt.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ee(le),this.Bi=new Kn(i=>Sa(i),ka),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function j0(t,e,n,r){return new B0(t,e,n,r)}async function tf(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ne();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function q0(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const w=c.docVersions.get(p);pe(w!==null),g.version.compareTo(w)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nf(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function z0(t,e){const n=W(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken($e.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(g,w,I){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,u)&&a.push(n.Vs.updateTargetData(i,p))});let c=bt(),l=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(H0(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(ee.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function H0(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function K0(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function G0(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,T.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Wt(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function No(t,e,n){const r=W(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wr(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function ml(t,e,n){const r=W(t);let s=ee.min(),i=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=W(a),h=u.Bi.get(l);return h!==void 0?T.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,It(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ne())).next(a=>(W0(r,qw(e),a),{documents:a,ji:i})))}function W0(t,e,n){let r=ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class yl{constructor(){this.activeTargetIds=Gd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q0{constructor(){this.Fr=new yl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new yl,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X0{Br(e){}shutdown(){}}/**
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
 */class vl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(x("RestConnection","Received: ",c),c),c=>{throw Jc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=Y0[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new uw;a.listenOnce(aw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xi.NO_ERROR:const l=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Xi.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case Xi.HTTP_ERROR:const u=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(g)>=0?g:S.UNKNOWN}(h.status);o(new V(d,h.message))}else o(new V(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=iw(),o=ow(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lw({})),this.uo(a.initMessageHeaders,n,r),mu()||yu()||Sp()||vu()||kp()||Mo()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");x("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new J0({jr:g=>{h?x("Connection","Not sending because WebChannel is closed:",g):(u||(x("Connection","Opening WebChannel transport."),l.open(),u=!0),x("Connection","WebChannel sending:",g),l.send(g))},Wr:()=>l.close()}),p=(g,w,I)=>{g.listen(w,E=>{try{I(E)}catch(y){setTimeout(()=>{throw y},0)}})};return p(l,os.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),p(l,os.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.eo())}),p(l,os.EventType.ERROR,g=>{h||(h=!0,Jc("Connection","WebChannel transport errored:",g),d.eo(new V(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,os.EventType.MESSAGE,g=>{var w;if(!h){const I=g.data[0];pe(!!I);const E=I,y=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(y){x("Connection","WebChannel received error:",y);const A=y.status;let L=function(F){const re=ye[F];if(re!==void 0)return qd(re)}(A),K=y.message;L===void 0&&(L=S.INTERNAL,K="Unknown error status: "+A+" with message "+y.message),h=!0,d.eo(new V(L,K)),l.close()}else x("Connection","WebChannel received:",I),d.no(I)}}),p(o,cw.STAT_EVENT,g=>{g.stat===Qc.PROXY?x("Connection","Detected buffering proxy"):g.stat===Qc.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ji(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return new c0(t,!0)}class rf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new rf(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eI extends sf{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=h0(this.wt,e),r=function(s){if(!("targetChange"in s))return ee.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?yt(i.readTime):ee.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Ro(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=So(a)?{documents:p0(s,a)}:{query:g0(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Xd(s,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=zs(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=y0(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Ro(this.wt),n.removeTarget=e,this.Oo(n)}}class tI extends sf{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=f0(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.Jo(r,n)}return pe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ro(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>d0(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(S.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class rI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(wt(n),this.su=!1):x("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{dn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=W(a);c.lu.add(4),await Yr(c),c._u.set("Unknown"),c.lu.delete(4),await Ei(c)}(this))})}),this._u=new rI(r,s)}}async function Ei(t){if(dn(t))for(const e of t.fu)await e(!0)}async function Yr(t){for(const e of t.fu)await e(!1)}function of(t,e){const n=W(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),xa(n)?La(n):Gn(n).Co()&&Ma(n,e))}function af(t,e){const n=W(t),r=Gn(n);n.hu.delete(e),r.Co()&&cf(n,e),n.hu.size===0&&(r.Co()?r.ko():dn(n)&&n._u.set("Unknown"))}function Ma(t,e){t.wu.Nt(e.targetId),Gn(t).Qo(e)}function cf(t,e){t.wu.Nt(e),Gn(t).jo(e)}function La(t){t.wu=new i0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gn(t).start(),t._u.iu()}function xa(t){return dn(t)&&!Gn(t).Do()&&t.hu.size>0}function dn(t){return W(t).lu.size===0}function lf(t){t.wu=void 0}async function iI(t){t.hu.forEach((e,n)=>{Ma(t,e)})}async function oI(t,e){lf(t),xa(t)?(t._u.uu(e),La(t)):t._u.set("Unknown")}async function aI(t,e,n){if(t._u.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(t,r)}else if(e instanceof _s?t.wu.Ut(e):e instanceof Wd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ee.min()))try{const r=await nf(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),cf(s,a);const l=new Wt(c.target,a,1,c.sequenceNumber);Ma(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Hs(t,r)}}async function Hs(t,e,n){if(!Wr(e))throw e;t.lu.add(1),await Yr(t),t._u.set("Offline"),n||(n=()=>nf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ei(t)})}function uf(t,e){return e().catch(n=>Hs(t,n,e))}async function Ti(t){const e=W(t),n=Ot(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;cI(e);)try{const s=await K0(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,lI(e,s)}catch(s){await Hs(e,s)}hf(e)&&df(e)}function cI(t){return dn(t)&&t.au.length<10}function lI(t,e){t.au.push(e);const n=Ot(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function hf(t){return dn(t)&&!Ot(t).Do()&&t.au.length>0}function df(t){Ot(t).start()}async function uI(t){Ot(t).Xo()}async function hI(t){const e=Ot(t);for(const n of t.au)e.Ho(n.mutations)}async function dI(t,e,n){const r=t.au.shift(),s=Na.from(r,e,n);await uf(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ti(t)}async function fI(t,e){e&&Ot(t).zo&&await async function(n,r){if(s=r.code,e0(s)&&s!==S.ABORTED){const i=n.au.shift();Ot(n).No(),await uf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ti(n)}var s}(t,e),hf(t)&&df(t)}async function _l(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=dn(n);n.lu.add(3),await Yr(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ei(n)}async function pI(t,e){const n=W(t);e?(n.lu.delete(2),await Ei(n)):e||(n.lu.add(2),await Yr(n),n._u.set("Unknown"))}function Gn(t){return t.mu||(t.mu=function(e,n,r){const s=W(e);return s.tu(),new eI(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:iI.bind(null,t),Jr:oI.bind(null,t),Go:aI.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),xa(t)?La(t):t._u.set("Unknown")):(await t.mu.stop(),lf(t))})),t.mu}function Ot(t){return t.gu||(t.gu=function(e,n,r){const s=W(e);return s.tu(),new tI(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:uI.bind(null,t),Jr:fI.bind(null,t),Yo:hI.bind(null,t),Jo:dI.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ti(t)):(await t.gu.stop(),t.au.length>0&&(x("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ua(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(t,e){if(wt("AsyncQueue",`${e}: ${t}`),Wr(t))return new V(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=tr(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.yu=new Ee(U.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mn{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Mn(e,n,Tn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.Iu=void 0,this.listeners=[]}}class mI{constructor(){this.queries=new Kn(e=>$d(e),vi),this.onlineState="Unknown",this.Tu=new Set}}async function yI(t,e){const n=W(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new gI),s)try{i.Iu=await n.onListen(r)}catch(o){const a=Fa(o,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Va(n)}async function vI(t,e){const n=W(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function _I(t,e){const n=W(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Va(n)}function wI(t,e,n){const r=W(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Va(t){t.Tu.forEach(e=>{e.next()})}class II{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.key=e}}class pf{constructor(e){this.key=e}}class bI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ne(),this.mutatedKeys=ne(),this.Lu=Pd(e),this.Uu=new Tn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new wl,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Ca(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?g!==w&&(r.track({type:3,doc:p}),I=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(p?(o=o.add(p),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Mn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new wl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ne(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new pf(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new ff(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=ne();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Mn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class EI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TI{constructor(e){this.key=e,this.Xu=!1}}class SI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Kn(a=>$d(a),vi),this.ec=new Map,this.nc=new Set,this.sc=new Ee(U.comparator),this.ic=new Map,this.rc=new Oa,this.oc={},this.uc=new Map,this.cc=Pn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function kI(t,e){const n=LI(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await G0(n.localStore,It(e));n.isPrimaryClient&&of(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await AI(n,e,r,a==="current")}return s}async function AI(t,e,n,r){t.hc=(u,h,d)=>async function(p,g,w,I){let E=g.view.Ku(w);E.Mi&&(E=await ml(p.localStore,g.query,!1).then(({documents:L})=>g.view.Ku(L,E)));const y=I&&I.targetChanges.get(g.targetId),A=g.view.applyChanges(E,p.isPrimaryClient,y);return bl(p,g.targetId,A.zu),A.snapshot}(t,u,h,d);const s=await ml(t.localStore,e,!0),i=new bI(e,s.ji),o=i.Ku(s.documents),a=Xr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);bl(t,n,c.zu);const l=new EI(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function CI(t,e){const n=W(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!vi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await No(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),af(n.remoteStore,r.targetId),Oo(n,r.targetId)}).catch(Gr)):(Oo(n,r.targetId),await No(n.localStore,r.targetId,!0))}async function DI(t,e,n){const r=xI(t);try{const s=await function(i,o){const a=W(i),c=Ie.now(),l=o.reduce((d,p)=>d.add(p.key),ne());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=bt(),g=ne();return a.Ui.getEntries(d,l).next(w=>{p=w,p.forEach((I,E)=>{E.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{u=w;const I=[];for(const E of o){const y=Yw(E,u.get(E.key).overlayedDocument);y!=null&&I.push(new hn(E.key,y,Nd(y.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(w=>{h=w;const I=w.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,I)})}).then(()=>({batchId:h.batchId,changes:Hd(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Ee(le)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Jr(r,s.changes),await Ti(r.remoteStore)}catch(s){const i=Fa(s,"Failed to persist write");n.reject(i)}}async function gf(t,e){const n=W(t);try{const r=await z0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?pe(o.Xu):s.removedDocuments.size>0&&(pe(o.Xu),o.Xu=!1))}),await Jr(n,r,e)}catch(r){await Gr(r)}}function Il(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=W(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Va(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RI(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ee(U.comparator);o=o.insert(i,Re.newNoDocument(i,ee.min()));const a=ne().add(i),c=new Ii(ee.min(),new Map,new be(le),o,a);await gf(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),Ba(r)}else await No(r.localStore,e,!1).then(()=>Oo(r,e,n)).catch(Gr)}async function NI(t,e){const n=W(t),r=e.batch.batchId;try{const s=await q0(n.localStore,e);yf(n,r,null),mf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jr(n,s)}catch(s){await Gr(s)}}async function OI(t,e,n){const r=W(t);try{const s=await function(i,o){const a=W(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);yf(r,e,n),mf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jr(r,s)}catch(s){await Gr(s)}}function mf(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function yf(t,e,n){const r=W(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||vf(t,r)})}function vf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(af(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ba(t))}function bl(t,e,n){for(const r of n)r instanceof ff?(t.rc.addReference(r.key,e),$I(t,r)):r instanceof pf?(x("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||vf(t,r.key)):G()}function $I(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ba(t))}function Ba(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new U(me.fromString(e)),r=t.cc.next();t.ic.set(r,new TI(n)),t.sc=t.sc.insert(n,r),of(t.remoteStore,new Wt(It(Aa(n.path)),r,2,Ea.ot))}}async function Jr(t,e,n){const r=W(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Pa.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=W(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Wr(u))throw u;x("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,g)}}}(r.localStore,i))}async function PI(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await tf(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new V(S.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jr(n,r.Ki)}}function MI(t,e){const n=W(t),r=n.ic.get(e);if(r&&r.Xu)return ne().add(r.key);{let s=ne();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function LI(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RI.bind(null,e),e.Zu.Go=_I.bind(null,e.eventManager),e.Zu.lc=wI.bind(null,e.eventManager),e}function xI(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OI.bind(null,e),e}class UI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=bi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return j0(this.persistence,new V0,e.initialUser,this.wt)}_c(e){return new U0($a.Os,this.wt)}dc(e){return new Q0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Il(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PI.bind(null,this.syncEngine),await pI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mI}createDatastore(e){const n=bi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Z0(s));var s;return function(i,o,a,c){return new nI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Il(this.syncEngine,a,0),o=vl.V()?new vl:new X0,new sI(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new SI(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);x("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Yr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=Ad.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jI(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zI(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>_l(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>_l(e.remoteStore,i)),t.onlineComponents=e}async function zI(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await jI(t,new UI)),t.offlineComponents}async function _f(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await qI(t,new FI)),t.onlineComponents}function HI(t){return _f(t).then(e=>e.syncEngine)}async function El(t){const e=await _f(t),n=e.eventManager;return n.onListen=kI.bind(null,e.syncEngine),n.onUnlisten=CI.bind(null,e.syncEngine),n}const Tl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e,n){if(!n)throw new V(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KI(t,e,n,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sl(t){if(!U.isDocumentKey(t))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kl(t){if(U.isDocumentKey(t))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ja(t);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Al({}),this._settingsFrozen=!1,e instanceof On?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new On(s.options.projectId)}(e))}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Al(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dw;switch(n.type){case"gapi":const r=n.client;return pe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new gw(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tl.get(e);n&&(x("ComponentProvider","Removing Datastore"),Tl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class Si{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Si(this.firestore,e,this._query)}}class Dt extends Si{constructor(e,n,r){super(e,n,Aa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new U(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function GI(t,e,...n){if(t=xe(t),wf("collection","path",e),t instanceof qa){const r=me.fromString(e,...n);return kl(r),new Dt(t,null,r)}{if(!(t instanceof We||t instanceof Dt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return kl(r),new Dt(t.firestore,null,r)}}function ls(t,e,...n){if(t=xe(t),arguments.length===1&&(e=Ad.I()),wf("doc","path",e),t instanceof qa){const r=me.fromString(e,...n);return Sl(r),new We(t,null,new U(r))}{if(!(t instanceof We||t instanceof Dt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Sl(r),new We(t.firestore,t instanceof Dt?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new rf(this,"async_queue_retry"),this.Kc=()=>{const n=Ji();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ji();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ji();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Gt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Wr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=Ua.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Cl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cr extends qa{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new WI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bf(this),this._firestoreClient.terminate()}}function QI(t=xo()){return ln(t,"firestore").getImmediate()}function If(t){return t._firestoreClient||bf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bf(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new kw(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln($e.fromBase64String(e))}catch(n){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=/^__.*__$/;class YI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qr(e,this.data,n,this.fieldTransforms)}}function Tf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Ka{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ks(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Tf(this.Zc)&&XI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class JI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||bi(e)}aa(e,n,r,s=!1){return new Ka({Zc:e,methodName:n,ca:r,path:Me.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ZI(t){const e=t._freezeSettings(),n=bi(t._databaseId);return new JI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eb(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Cf("Data must be an object, but it was:",o,r);const a=kf(r,o);let c,l;if(i.merge)c=new ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=tb(e,h,n);if(!o.contains(d))throw new V(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rb(u,d)||u.push(d)}c=new ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new YI(new Xe(a),c,l)}function Sf(t,e){if(Af(t=xe(t)))return Cf("Unsupported field value:",e,t),kf(t,e);if(t instanceof Ef)return function(n,r){if(!Tf(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Sf(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hw(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ie.fromDate(n);return{timestampValue:zs(r.wt,s)}}if(n instanceof Ie){const s=new Ie(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zs(r.wt,s)}}if(n instanceof Ha)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ln)return{bytesValue:Xd(r.wt,n._byteString)};if(n instanceof We){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ra(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${ja(n)}`)}(t,e)}function kf(t,e){const n={};return Cd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(t,(r,s)=>{const i=Sf(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Af(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof Ha||t instanceof Ln||t instanceof We||t instanceof Ef)}function Cf(t,e,n){if(!Af(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ja(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function tb(t,e,n){if((e=xe(e))instanceof za)return e._internalPath;if(typeof e=="string")return Df(t,e);throw Ks("Field path arguments must be of type string or ",t,!1,void 0,n)}const nb=new RegExp("[~\\*/\\[\\]]");function Df(t,e,n){if(e.search(nb)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new za(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ks(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(S.INVALID_ARGUMENT,a+t+c)}function rb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sb extends Rf{data(){return super.data()}}function Nf(t,e){return typeof e=="string"?Df(t,e):e instanceof za?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Of extends Rf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ws extends Of{data(e={}){return super.data(e)}}class ib{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new nr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ws(this._firestore,this._userDataWriter,r.key,r,new nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ws(r._firestore,r._userDataWriter,o.doc.key,o.doc,new nr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ws(r._firestore,r._userDataWriter,o.doc.key,o.doc,new nr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ob(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ob(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function cb(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{convertValue(e,n="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Hn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ha(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=Nt(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);pe(ef(r));const s=new On(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(n)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $f extends lb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function Dl(t,e,n){t=Sn(t,We);const r=Sn(t.firestore,Cr),s=ub(t.converter,e,n);return Pf(r,[eb(ZI(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,at.none())])}function hb(t){return Pf(Sn(t.firestore,Cr),[new Da(t._key,at.none())])}function Rl(t,...e){var n,r,s;t=xe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Cl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Cl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof We)l=Sn(t.firestore,Cr),u=Aa(t._key.path),c={next:h=>{e[o]&&e[o](db(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Sn(t,Si);l=Sn(h.firestore,Cr),u=h._query;const d=new $f(l);c={next:p=>{e[o]&&e[o](new ib(l,d,h,p))},error:e[o+1],complete:e[o+2]},ab(t._query)}return function(h,d,p,g){const w=new VI(g),I=new II(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>yI(await El(h),I)),()=>{w.Tc(),h.asyncQueue.enqueueAndForget(async()=>vI(await El(h),I))}}(If(l),u,a,c)}function Pf(t,e){return function(n,r){const s=new Gt;return n.asyncQueue.enqueueAndForget(async()=>DI(await HI(n),r,s)),s.promise}(If(t),e)}function db(t,e,n){const r=n.docs.get(e._key),s=new $f(t);return new Of(t,s,e._key,r,new nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zn=n})(Rr),lt(new tt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Cr(s,new fw(n.getProvider("auth-internal")),new yw(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Je(Xc,"3.4.14",t),Je(Xc,"3.4.14","esm2017")})();const fb={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},Mf=Pg(fb),Ft=Fy(Mf);Cm(Ft,Wu);const Qn=QI(Mf);Zv();const pb=new dt,gb=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=an(t);return Hu(Ft,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,s){return km(Ft,r,s)},async signInWithEmail(r,s){return Am(Ft,r,s)},async signInWithGoogle(){return Jm(Ft,pb)},async signOut(){return Dm(Ft)}}};var kn=gb(),Gs="/assets/default-user.a40c52dd.png";function mb(t){let e;return{c(){e=v("i"),f(e,"class","codicon codicon-account")},m(n,r){R(n,e,r)},p:N,d(n){n&&D(e)}}}function yb(t){let e,n;return{c(){var r;e=v("img"),f(e,"class","profile-picture svelte-dx2c6r"),Qt(e.src,n=(r=t[0].user.photoURL)!=null?r:Gs)||f(e,"src",n),f(e,"alt","Account")},m(r,s){R(r,e,s)},p(r,s){var i;s&1&&!Qt(e.src,n=(i=r[0].user.photoURL)!=null?i:Gs)&&f(e,"src",n)},d(r){r&&D(e)}}}function vb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,g,w,I,E,y;c=new wp({});function A(F,re){return F[0].loggedIn?yb:mb}let L=A(t),K=L(t);return{c(){e=v("header"),n=v("div"),r=v("a"),r.innerHTML='<i class="codicon codicon-github"></i>',s=O(),i=v("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=O(),a=v("a"),q(c.$$.fragment),l=O(),u=v("nav"),h=v("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=O(),p=v("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',g=O(),w=v("button"),K.c(),f(r,"title","Source Code"),f(r,"href","https://github.com/kurozenzen/kurosearch"),f(r,"target","_newtab"),f(r,"class","svelte-dx2c6r"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-dx2c6r"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-dx2c6r"),f(n,"class","svelte-dx2c6r"),f(h,"title","Search"),f(h,"class","svelte-dx2c6r"),f(p,"title","Settings"),f(p,"class","svelte-dx2c6r"),f(w,"title","Account"),f(w,"class","svelte-dx2c6r"),f(u,"class","svelte-dx2c6r"),f(e,"role","navigation"),f(e,"class","svelte-dx2c6r")},m(F,re){R(F,e,re),m(e,n),m(n,r),m(n,s),m(n,i),m(n,o),m(n,a),B(c,a,null),m(e,l),m(e,u),m(u,h),m(u,d),m(u,p),m(u,g),m(u,w),K.m(w,null),I=!0,E||(y=[Y(h,"click",t[1]),Y(p,"click",t[2]),Y(w,"click",t[3])],E=!0)},p(F,[re]){L===(L=A(F))&&K?K.p(F,re):(K.d(1),K=L(F),K&&(K.c(),K.m(w,null)))},i(F){I||(b(c.$$.fragment,F),I=!0)},o(F){k(c.$$.fragment,F),I=!1},d(F){F&&D(e),j(c),K.d(),E=!1,je(y)}}}function _b(t,e,n){let r;return Ke(t,kn,a=>n(0,r=a)),[r,()=>wn.navigateTo("search"),()=>wn.navigateTo("settings"),()=>wn.navigateTo("account")]}class wb extends Z{constructor(e){super(),J(this,e,_b,vb,Q,{})}}const Zr=t=>typeof t=="string"&&t!=="",ki=t=>typeof t=="number"&&t>=0;class Ai{constructor(e,n,r,s,i,o,a,c,l,u,h,d,p,g,w,I,E,y,A,L,K,F,re,X,he,C){this.preview_url=e,this.sample_url=n,this.file_url=r,this.created_at=s,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=g,this.preview_height=w,this.rating=I,this.sample_height=E,this.sample_width=y,this.score=A,this.source=L,this.status=K,this.tags=F,this.width=re,this.comments_url=X,this.owner_url=he,this.type=C,Object.freeze(this)}static from(e){return new Ai(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const Ib=t=>Array.isArray(t)&&t.every(e=>e instanceof Ai);class bb{constructor(e,n){if(!ki(e))throw new TypeError("Invalid count passed to Page constructor");if(!Ib(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const Eb=Object.freeze(["id","score"]),Tb=t=>Eb.includes(t),Is=Object.freeze(["+","-","~"]),Ci=t=>Is.includes(t),Lf=t=>{if(!Ci(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Is.indexOf(t)+1)%Is.length;return Is[n]},Sb=Object.freeze({"+":"","-":"-","~":""}),kb=t=>{if(!Ci(t))throw TypeError("Invalid modifier passed to serializeModifier");return Sb[t]};class Di{constructor(e,n){if(!Ci(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Zr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${kb(this.modifier)}${encodeURIComponent(this.name)}`}}const xf=(t,e)=>{if(!Uf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!Ab(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Uf=t=>{try{return new URL(t),!0}catch{return!1}},Ab=t=>t===null||t instanceof AbortController,Ff=20,Cb="https://r34-json.herokuapp.com/v2";let Db=null;const Rb=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},Nb=async(t,e,n,r)=>{Ob(t,e,n,r);const s=xb(e,n,r),i=await xf(Ub(t,s),Db);Rb(i);const o=await i.json();return Fb(o),new bb(o.count,o.posts.map(a=>Ai.from(a)))},Ob=(t,e,n,r)=>{if(!$b(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!Pb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!Tb(n))throw new TypeError("Invalid sort property passed to getPage");if(!Mb(r))throw new TypeError("Invalid minimum score passed to getPage")},$b=t=>typeof t=="number"&&t>=0,Pb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Di)),Mb=t=>typeof t=="number"&&t>=0,Lb=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},xb=(t,e,n)=>{const r=Lb(t),s=[...Nl([...r["+"],...r["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return r["~"].length===0?s:`${s}+( ${Nl(r["~"]).join(" ~ ")} )`},Nl=t=>t.map(e=>e.serialize()),Ub=(t,e)=>{const n=`${Cb}/posts?limit=${Ff}&pid=${t}`;return e===""?n:`${n}&tags=${e}`},Fb=t=>{if(typeof t.count!="number"||!Array.isArray(t.posts))throw new Error("Unexpected response received in getPage")},Vb=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),Vf=t=>Vb.includes(t);class Ws{constructor(e,n,r,s){if(!Ci(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Zr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!ki(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Vf(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}toSearchableTag(){return new Di(this.modifier,this.name)}}class Bf{constructor(e,n,r){if(!Zr(e))throw TypeError("Invalid name passed to Tag constructor");if(!ki(n))throw TypeError("Invalid count passed to Tag constructor");if(!Vf(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}toActiveTag(e){return new Ws(e,this.name,this.count,this.type)}}let Bb=null;const jb=async(t,e)=>{const n=e?`*${t}*`:t,r=await xf(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,Bb);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length==0)throw new Error("No tags found");return s.map(i=>new Bf(i.name,i.count,qb(i.types)))}else throw s.message?new Error(s.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},qb=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class jf{constructor(e,n,r){if(!Zr(e))throw new TypeError("Invalid name passed to Supertag");if(!zb(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const zb=t=>Array.isArray(t)&&t.every(e=>e instanceof Di),Hb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=an(t);let r,s=null,i=null;return Hu(Ft,async o=>{r=o,o?s=Rl(ls(Qn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=cb(GI(Qn,`users/${o.uid}/supertags`));i==null||i(),i=Rl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new jf(d.id,p.description,Object.entries(p.tags).map(g=>new Di(g[1],g[0]))))}),n(d=>(d.supertags=h,d))})}):(s==null||s(),i==null||i(),s=null,i=null)}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");return Dl(ls(Qn,`users/${r.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!r)throw new Error("No user");return hb(ls(Qn,`users/${r.uid}/supertags`,o.name))},async setTheme(o){if(!!r)return Dl(ls(Qn,"users",r.uid),{preferences:{theme:o}},{merge:!0})}}};var xn=Hb();function Kb(t){let e,n,r,s;return{c(){e=v("button"),n=fe(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-b9vfir")},m(i,o){R(i,e,o),m(e,n),r||(s=Y(e,"click",t[4]),r=!0)},p(i,[o]){o&1&&we(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:N,o:N,d(i){i&&D(e),r=!1,s()}}}function Gb(t,e,n){let{text:r}=e,{title:s}=e,{disabled:i=!1}=e;const o=qe(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,r=c.text),"title"in c&&n(1,s=c.title),"disabled"in c&&n(2,i=c.disabled)},[r,s,i,o,a]}class Ri extends Z{constructor(e){super(),J(this,e,Gb,Kb,Q,{text:0,title:1,disabled:2})}}function Un(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}const $t=t=>{if(!ki(t))throw new TypeError("Invalid value passed to formatCount");return t>=1e6?`${Math.trunc(t/1e5)/10}M`:t>=1e3?`${Math.trunc(t/100)/10}K`:t.toString()};function Pt(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Ol=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function Wb(t){let e,n;return{c(){e=v("i"),f(e,"class",n=`codicon codicon-${Ol[t[0]]}`)},m(r,s){R(r,e,s)},p(r,[s]){s&1&&n!==(n=`codicon codicon-${Ol[r[0]]}`)&&f(e,"class",n)},i:N,o:N,d(r){r&&D(e)}}}function Qb(t,e,n){let{type:r}=e;return t.$$set=s=>{"type"in s&&n(0,r=s.type)},[r]}class qf extends Z{constructor(e){super(),J(this,e,Qb,Wb,Q,{type:0})}}const $l=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Qs=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Xb(t){let e,n,r,s=Pt(t[0].name)+"",i,o,a=$t(t[0].count)+"",c,l,u,h,d,p;return n=new qf({props:{type:t[0].type}}),{c(){e=v("li"),q(n.$$.fragment),r=O(),i=fe(s),o=fe(`
  (`),c=fe(a),l=fe(")"),f(e,"class",u=ct(Qs[t[0].modifier])+" svelte-apze1c"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Ye(e,"no-icon",t[0].type==="general")},m(g,w){R(g,e,w),B(n,e,null),m(e,r),m(e,i),m(e,o),m(e,c),m(e,l),h=!0,d||(p=[Y(e,"click",t[2]),Y(e,"contextmenu",du(t[3]))],d=!0)},p(g,[w]){const I={};w&1&&(I.type=g[0].type),n.$set(I),(!h||w&1)&&s!==(s=Pt(g[0].name)+"")&&we(i,s),(!h||w&1)&&a!==(a=$t(g[0].count)+"")&&we(c,a),(!h||w&1&&u!==(u=ct(Qs[g[0].modifier])+" svelte-apze1c"))&&f(e,"class",u),w&1&&Ye(e,"no-icon",g[0].type==="general")},i(g){h||(b(n.$$.fragment,g),h=!0)},o(g){k(n.$$.fragment,g),h=!1},d(g){g&&D(e),j(n),d=!1,je(p)}}}function Yb(t,e,n){let{tag:r}=e;const s=qe(),i=()=>s("click"),o=()=>s("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,r=a.tag)},[r,s,i,o]}class zf extends Z{constructor(e){super(),J(this,e,Yb,Xb,Q,{tag:0})}}function Ml(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ll(t){let e,n;return e=new zf({props:{tag:t[9]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function Jb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,g,w,I,E,y,A,L,K,F,re,X,he=t[2],C=[];for(let P=0;P<he.length;P+=1)C[P]=Ll(Ml(t,he,P));const de=P=>k(C[P],1,1,()=>{C[P]=null});return K=new Ri({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),K.$on("click",t[8]),{c(){e=v("dialog"),n=v("h3"),n.textContent="Create Supertag",r=O(),s=v("i"),i=O(),o=v("div"),a=v("label"),a.textContent="Name",c=O(),l=v("input"),u=O(),h=v("div"),d=v("label"),d.textContent="Description",p=O(),g=v("textarea"),w=O(),I=v("div"),E=v("span"),E.textContent="Tags",y=O(),A=v("ol");for(let P=0;P<C.length;P+=1)C[P].c();L=O(),q(K.$$.fragment),f(s,"tabindex","0"),f(s,"class",ct("codicon codicon-close")+" svelte-64l7g"),f(a,"for","supertag-name"),f(a,"class","svelte-64l7g"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-64l7g"),f(o,"class","svelte-64l7g"),f(d,"for","supertag-description"),f(d,"class","svelte-64l7g"),f(g,"type","text"),f(g,"placeholder","Short description"),f(g,"id","supertag-description"),f(g,"class","svelte-64l7g"),f(h,"class","svelte-64l7g"),f(E,"class","svelte-64l7g"),f(A,"class","svelte-64l7g"),f(I,"class","svelte-64l7g"),f(e,"class","svelte-64l7g")},m(P,te){R(P,e,te),m(e,n),m(e,r),m(e,s),m(e,i),m(e,o),m(o,a),m(o,c),m(o,l),rt(l,t[0]),m(e,u),m(e,h),m(h,d),m(h,p),m(h,g),rt(g,t[1]),m(e,w),m(e,I),m(I,E),m(I,y),m(I,A);for(let ae=0;ae<C.length;ae+=1)C[ae].m(A,null);m(e,L),B(K,e,null),F=!0,re||(X=[Y(s,"click",t[5]),Y(s,"keyup",Un(t[5])),Y(l,"input",t[6]),Y(g,"input",t[7])],re=!0)},p(P,[te]){if(te&1&&l.value!==P[0]&&rt(l,P[0]),te&2&&rt(g,P[1]),te&4){he=P[2];let M;for(M=0;M<he.length;M+=1){const ue=Ml(P,he,M);C[M]?(C[M].p(ue,te),b(C[M],1)):(C[M]=Ll(ue),C[M].c(),b(C[M],1),C[M].m(A,null))}for(Se(),M=he.length;M<C.length;M+=1)de(M);ke()}const ae={};te&8&&(ae.title=P[3]?"Click to create supertag":"Enter a valid name to continue"),te&8&&(ae.disabled=!P[3]),K.$set(ae)},i(P){if(!F){for(let te=0;te<he.length;te+=1)b(C[te]);b(K.$$.fragment,P),F=!0}},o(P){C=C.filter(Boolean);for(let te=0;te<C.length;te+=1)k(C[te]);k(K.$$.fragment,P),F=!1},d(P){P&&D(e),Mt(C,P),j(K),re=!1,je(X)}}}function Zb(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=qe(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new jf(s,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=Zr(s))},[s,i,o,r,a,c,l,u,h]}class eE extends Z{constructor(e){super(),J(this,e,Zb,Jb,Q,{name:0,description:1,tags:2})}}function tE(t){let e,n,r,s;return{c(){e=v("i"),f(e,"title",t[0]),f(e,"class",n=ct(`codicon codicon-${t[1]}`)+" svelte-1cni6tw"),f(e,"tabindex","0"),Ye(e,"active",t[2])},m(i,o){R(i,e,o),r||(s=[Y(e,"click",t[3]),Y(e,"keyup",Un(t[3]))],r=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=ct(`codicon codicon-${i[1]}`)+" svelte-1cni6tw")&&f(e,"class",n),o&6&&Ye(e,"active",i[2])},i:N,o:N,d(i){i&&D(e),r=!1,je(s)}}}function nE(t,e,n){let{title:r=void 0}=e,{icon:s}=e,{active:i}=e;const o=qe(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,r=c.title),"icon"in c&&n(1,s=c.icon),"active"in c&&n(2,i=c.active)},[r,s,i,a]}class rE extends Z{constructor(e){super(),J(this,e,nE,tE,Q,{title:0,icon:1,active:2})}}function sE(t){let e,n,r,s,i;return{c(){e=v("i"),f(e,"tabindex","0"),f(e,"class",n=ct(`codicon codicon-${$l[t[0]]}`)+" svelte-j4hp32"),f(e,"title",r=Pl[t[0]])},m(o,a){R(o,e,a),s||(i=[Y(e,"click",t[1]),Y(e,"keyup",Un(t[1]))],s=!0)},p(o,[a]){a&1&&n!==(n=ct(`codicon codicon-${$l[o[0]]}`)+" svelte-j4hp32")&&f(e,"class",n),a&1&&r!==(r=Pl[o[0]])&&f(e,"title",r)},i:N,o:N,d(o){o&&D(e),s=!1,je(i)}}}function iE(t,e,n){let r="+";const s=qe();return[r,()=>{n(0,r=Lf(r)),s("change",r)}]}class oE extends Z{constructor(e){super(),J(this,e,iE,sE,Q,{})}}function aE(t){let e;return{c(){e=v("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){R(n,e,r)},p:N,i:N,o:N,d(n){n&&D(e)}}}class cE extends Z{constructor(e){super(),J(this,e,null,aE,Q,{})}}function lE(t){let e,n,r,s,i=Pt(t[0].name)+"",o,a,c,l=$t(t[0].count)+"",u,h,d,p,g;return n=new qf({props:{type:t[0].type}}),{c(){e=v("li"),q(n.$$.fragment),r=O(),s=v("span"),o=fe(i),a=O(),c=v("span"),u=fe(l),f(s,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(w,I){R(w,e,I),B(n,e,null),m(e,r),m(e,s),m(s,o),m(e,a),m(e,c),m(c,u),d=!0,p||(g=Y(e,"click",t[2]),p=!0)},p(w,[I]){const E={};I&1&&(E.type=w[0].type),n.$set(E),(!d||I&1)&&i!==(i=Pt(w[0].name)+"")&&we(o,i),(!d||I&1)&&l!==(l=$t(w[0].count)+"")&&we(u,l),(!d||I&1&&h!==(h=w[0].name))&&f(e,"title",h)},i(w){d||(b(n.$$.fragment,w),d=!0)},o(w){k(n.$$.fragment,w),d=!1},d(w){w&&D(e),j(n),p=!1,g()}}}function uE(t,e,n){let{tag:r}=e;const s=qe(),i=()=>s("click",r);return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class hE extends Z{constructor(e){super(),J(this,e,uE,lE,Q,{tag:0})}}function xl(t,e,n){const r=t.slice();return r[19]=e[n],r}function dE(t){let e,n,r,s,i=t[22].message+"",o;return{c(){e=v("div"),n=v("i"),r=O(),s=v("span"),o=fe(i),f(n,"class",ct("codicon codicon-error")+" svelte-1hzflr2"),f(e,"class","error-container svelte-1hzflr2")},m(a,c){R(a,e,c),m(e,n),m(e,r),m(e,s),m(s,o)},p(a,c){c&4&&i!==(i=a[22].message+"")&&we(o,i)},i:N,o:N,d(a){a&&D(e)}}}function fE(t){let e,n,r=t[5],s=[];for(let o=0;o<r.length;o+=1)s[o]=Ul(xl(t,r,o));const i=o=>k(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Fn()},m(o,a){for(let c=0;c<s.length;c+=1)s[c].m(o,a);R(o,e,a),n=!0},p(o,a){if(a&232){r=o[5];let c;for(c=0;c<r.length;c+=1){const l=xl(o,r,c);s[c]?(s[c].p(l,a),b(s[c],1)):(s[c]=Ul(l),s[c].c(),b(s[c],1),s[c].m(e.parentNode,e))}for(Se(),c=r.length;c<s.length;c+=1)i(c);ke()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)b(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)k(s[a]);n=!1},d(o){Mt(s,o),o&&D(e)}}}function Ul(t){let e,n;function r(){return t[15](t[19])}return e=new hE({props:{tag:t[19]}}),e.$on("click",r),{c(){q(e.$$.fragment)},m(s,i){B(e,s,i),n=!0},p(s,i){t=s;const o={};i&32&&(o.tag=t[19]),e.$set(o)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function pE(t){let e,n,r;return n=new cE({}),{c(){e=v("div"),q(n.$$.fragment),f(e,"class","hint-container svelte-1hzflr2")},m(s,i){R(s,e,i),B(n,e,null),r=!0},p:N,i(s){r||(b(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){s&&D(e),j(n)}}}function gE(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,g,w,I;o=new oE({}),o.$on("change",t[11]),c=new rE({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[12]);let E={ctx:t,current:null,token:null,hasCatch:!0,pending:pE,then:fE,catch:dE,error:22,blocks:[,,,]};return nc(p=t[2],E),{c(){e=v("div"),n=v("i"),r=O(),s=v("input"),i=O(),q(o.$$.fragment),a=O(),q(c.$$.fragment),l=O(),u=v("i"),h=O(),d=v("ol"),E.block.c(),f(n,"class","codicon codicon-search spaced svelte-1hzflr2"),f(s,"type","text"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-1hzflr2"),f(u,"tabindex","0"),f(u,"class","codicon codicon-question spaced svelte-1hzflr2"),f(d,"class","svelte-1hzflr2"),Ye(d,"open",t[4]),f(e,"class","searchbar svelte-1hzflr2"),Ye(e,"open",t[4])},m(y,A){R(y,e,A),m(e,n),m(e,r),m(e,s),rt(s,t[0]),m(e,i),B(o,e,null),m(e,a),B(c,e,null),m(e,l),m(e,u),m(e,h),m(e,d),E.block.m(d,E.anchor=null),E.mount=()=>d,E.anchor=null,g=!0,w||(I=[Y(s,"input",t[8]),Y(s,"blur",t[9]),Y(s,"focus",t[10]),Y(u,"click",t[13]),Y(u,"keyup",Un(t[14])),Y(e,"blur",t[16])],w=!0)},p(y,[A]){t=y,A&1&&s.value!==t[0]&&rt(s,t[0]);const L={};A&2&&(L.active=!t[1]),c.$set(L),E.ctx=t,A&4&&p!==(p=t[2])&&nc(p,E)||pp(E,t,A),A&16&&Ye(d,"open",t[4]),A&16&&Ye(e,"open",t[4])},i(y){g||(b(o.$$.fragment,y),b(c.$$.fragment,y),b(E.block),g=!0)},o(y){k(o.$$.fragment,y),k(c.$$.fragment,y);for(let A=0;A<3;A+=1){const L=E.blocks[A];k(L)}g=!1},d(y){y&&D(e),j(o),j(c),E.block.d(),E.token=null,E=null,w=!1,je(I)}}}function mE(t,e,n){let r;Ke(t,xn,F=>n(17,r=F));const s=qe();let i,o="",a=!0,c="+",l=!1,u=[];async function h(F,re){n(4,l=!0),n(5,u=[...r.supertags.filter(X=>X.name.toLowerCase().includes(re.toLowerCase())).map(X=>new Bf(X.name,Object.keys(X.tags).length,"supertag")),...await jb(re,F)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function p(){o=this.value,n(0,o)}const g=F=>{(!F.relatedTarget||!F.target.parentNode.contains(F.relatedTarget))&&n(4,l=!1)},w=()=>{n(4,l=!0)},I=F=>{n(3,c=F.detail)},E=()=>{n(1,a=!a)},y=()=>wn.navigateTo("help"),A=()=>wn.navigateTo("help"),L=F=>{s("pick",F.toActiveTag(c)),d()},K=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,s,d,p,g,w,I,E,y,A,L,K]}class yE extends Z{constructor(e){super(),J(this,e,mE,gE,Q,{})}}function vE(){const t=[],{subscribe:e,update:n,set:r}=an(t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:s=>n(i=>(i.push(new Ws("+",s,0,"general")),i)),removeByIndex:s=>n(i=>(i.splice(s,1),i))}}var At=vE();const _E=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:r}=an(t);return{subscribe:e,addPage(s){n(i=>({count:s.count,pages:[...i.pages,s.posts],nextPage:i.nextPage+1}))},reset(){r(t)}}};var bs=_E();function wE(t){let e,n=Pt(t[0])+"",r,s,i;return{c(){e=v("li"),r=fe(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),Ye(e,"active",t[2])},m(o,a){R(o,e,a),m(e,r),s||(i=Y(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&n!==(n=Pt(o[0])+"")&&we(r,n),a&4&&Ye(e,"active",o[2])},i:N,o:N,d(o){o&&D(e),s=!1,i()}}}function IE(t,e,n){let r,s,i;Ke(t,At,c=>n(3,i=c));let{name:o}=e;const a=()=>s?At.removeByIndex(r):At.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,r=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,s=r>=0)},[o,r,s,i,a]}class bE extends Z{constructor(e){super(),J(this,e,IE,wE,Q,{name:0})}}function EE(t){let e,n;return{c(){e=v("span"),n=fe(t[0])},m(r,s){R(r,e,s),m(e,n)},p(r,s){s&1&&we(n,r[0])},d(r){r&&D(e)}}}function TE(t){let e,n=t[1].hostname+"",r,s;return{c(){e=v("a"),r=fe(n),f(e,"href",s=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-193n8oi")},m(i,o){R(i,e,o),m(e,r)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&we(r,n),o&2&&s!==(s=i[1].toString())&&f(e,"href",s)},d(i){i&&D(e)}}}function SE(t){let e,n,r;function s(a,c){return a[1]?TE:EE}let i=s(t),o=i(t);return{c(){e=v("i"),n=O(),o.c(),r=Fn(),f(e,"class","codicon codicon-link")},m(a,c){R(a,e,c),R(a,n,c),o.m(a,c),R(a,r,c)},p(a,[c]){i===(i=s(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(r.parentNode,r)))},i:N,o:N,d(a){a&&D(e),a&&D(n),o.d(a),a&&D(r)}}}function kE(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(0,s=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Uf(s)?new URL(s):null)},[s,r]}class AE extends Z{constructor(e){super(),J(this,e,kE,SE,Q,{source:0})}}function CE(t){let e,n;const r=t[1].default,s=np(r,t,t[0],null);return{c(){e=v("div"),s&&s.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),s&&s.m(e,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&sp(s,r,i,i[0],n?rp(r,i[0],o,null):ip(i[0]),null)},i(i){n||(b(s,i),n=!0)},o(i){k(s,i),n=!1},d(i){i&&D(e),s&&s.d(i)}}}function DE(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class $o extends Z{constructor(e){super(),J(this,e,DE,CE,Q,{})}}const Fl=6e4,Vl=t=>{if(!RE(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Fl,r=new Date().getTime()/Fl-e;if(r<1)return"just now";if(r<60)return mn(r,"minute");const s=r/60;if(s<24)return mn(s,"hour");const i=s/24;if(i<7)return mn(i,"day");if(i<30.5)return mn(i/7,"week");if(i<365.25)return mn(i/30.5,"month");const o=i/365.25;return mn(o,"year")},RE=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",mn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function NE(t){let e,n,r,s=Vl(t[0])+"",i;return{c(){e=v("i"),n=O(),r=v("span"),i=fe(s),f(e,"class","codicon codicon-calendar"),f(r,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,r,a),m(r,i)},p(o,[a]){a&1&&s!==(s=Vl(o[0])+"")&&we(i,s)},i:N,o:N,d(o){o&&D(e),o&&D(n),o&&D(r)}}}function OE(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class $E extends Z{constructor(e){super(),J(this,e,OE,NE,Q,{value:0})}}function PE(t){let e,n,r,s=$t(t[0])+"",i;return{c(){e=v("i"),n=O(),r=v("span"),i=fe(s),f(e,"class","codicon codicon-heart"),f(r,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,r,a),m(r,i)},p(o,[a]){a&1&&s!==(s=$t(o[0])+"")&&we(i,s)},i:N,o:N,d(o){o&&D(e),o&&D(n),o&&D(r)}}}function ME(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class LE extends Z{constructor(e){super(),J(this,e,ME,PE,Q,{value:0})}}function Bl(t,e,n){const r=t.slice();return r[1]=e[n],r}function xE(t){let e,n;return e=new $E({props:{value:t[0].created_at}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].created_at),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function UE(t){let e,n;return e=new LE({props:{value:t[0].score}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].score),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function jl(t){let e,n;return e=new $o({props:{$$slots:{default:[FE]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&17&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function FE(t){let e,n;return e=new AE({props:{source:t[0].source}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.source=r[0].source),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function ql(t){let e,n;return e=new bE({props:{name:t[1]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.name=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function VE(t){let e,n,r,s,i,o,a,c,l;r=new $o({props:{$$slots:{default:[xE]},$$scope:{ctx:t}}}),i=new $o({props:{$$slots:{default:[UE]},$$scope:{ctx:t}}});let u=t[0].source&&jl(t),h=t[0].tags,d=[];for(let g=0;g<h.length;g+=1)d[g]=ql(Bl(t,h,g));const p=g=>k(d[g],1,1,()=>{d[g]=null});return{c(){e=v("div"),n=v("div"),q(r.$$.fragment),s=O(),q(i.$$.fragment),o=O(),u&&u.c(),a=O(),c=v("ul");for(let g=0;g<d.length;g+=1)d[g].c();f(n,"class","summary svelte-1t6gmcy"),f(c,"class","svelte-1t6gmcy"),f(e,"class","details svelte-1t6gmcy")},m(g,w){R(g,e,w),m(e,n),B(r,n,null),m(n,s),B(i,n,null),m(n,o),u&&u.m(n,null),m(e,a),m(e,c);for(let I=0;I<d.length;I+=1)d[I].m(c,null);l=!0},p(g,[w]){const I={};w&17&&(I.$$scope={dirty:w,ctx:g}),r.$set(I);const E={};if(w&17&&(E.$$scope={dirty:w,ctx:g}),i.$set(E),g[0].source?u?(u.p(g,w),w&1&&b(u,1)):(u=jl(g),u.c(),b(u,1),u.m(n,null)):u&&(Se(),k(u,1,1,()=>{u=null}),ke()),w&1){h=g[0].tags;let y;for(y=0;y<h.length;y+=1){const A=Bl(g,h,y);d[y]?(d[y].p(A,w),b(d[y],1)):(d[y]=ql(A),d[y].c(),b(d[y],1),d[y].m(c,null))}for(Se(),y=h.length;y<d.length;y+=1)p(y);ke()}},i(g){if(!l){b(r.$$.fragment,g),b(i.$$.fragment,g),b(u);for(let w=0;w<h.length;w+=1)b(d[w]);l=!0}},o(g){k(r.$$.fragment,g),k(i.$$.fragment,g),k(u),d=d.filter(Boolean);for(let w=0;w<d.length;w+=1)k(d[w]);l=!1},d(g){g&&D(e),j(r),j(i),u&&u.d(),Mt(d,g)}}}function BE(t,e,n){let{post:r}=e;return t.$$set=s=>{"post"in s&&n(0,r=s.post)},[r]}class jE extends Z{constructor(e){super(),J(this,e,BE,VE,Q,{post:0})}}const Ga=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function qE(t){let e,n,r,s,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[3](null),a=!1,c()}}}function zE(t,e,n){let{post:r}=e;const s=qe();let i;function o(c){An[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>s("click");return t.$$set=c=>{"post"in c&&n(0,r=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ga.observe(i)},[r,i,s,o,a]}class HE extends Z{constructor(e){super(),J(this,e,zE,qE,Q,{post:0})}}function KE(t){let e,n,r,s,i,o,a,c;return{c(){e=v("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-19kew7t")},m(l,u){R(l,e,u),t[5](e),a||(c=[Y(e,"click",du(t[4])),Y(e,"touchstart",t[2],{passive:!0}),Y(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[5](null),a=!1,je(c)}}}function GE(t,e,n){let{post:r}=e;const s=qe();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&s("click")};function l(h){up.call(this,t,h)}function u(h){An[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,r=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ga.observe(i)},[r,i,a,c,l,u]}class WE extends Z{constructor(e){super(),J(this,e,GE,KE,Q,{post:0})}}function QE(t){let e,n,r,s,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[3](null),a=!1,c()}}}function XE(t,e,n){let{post:r}=e;const s=qe();let i;function o(c){An[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>s("click");return t.$$set=c=>{"post"in c&&n(0,r=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Ga.observe(i)},[r,i,s,o,a]}class YE extends Z{constructor(e){super(),J(this,e,XE,QE,Q,{post:0})}}function JE(t){let e,n;return e=new YE({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function ZE(t){let e,n;return e=new WE({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function eT(t){let e,n;return e=new HE({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function zl(t){let e,n;return e=new jE({props:{post:t[0]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function tT(t){let e,n,r,s,i;const o=[eT,ZE,JE],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),r=a[n]=o[n](t);let l=t[1]&&zl(t);return{c(){e=v("div"),r.c(),s=O(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){R(u,e,h),a[n].m(e,null),m(e,s),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(Se(),k(a[d],1,1,()=>{a[d]=null}),ke(),r=a[n],r?r.p(u,h):(r=a[n]=o[n](u),r.c()),b(r,1),r.m(e,s)),u[1]?l?(l.p(u,h),h&2&&b(l,1)):(l=zl(u),l.c(),b(l,1),l.m(e,null)):l&&(Se(),k(l,1,1,()=>{l=null}),ke())},i(u){i||(b(r),b(l),i=!0)},o(u){k(r),k(l),i=!1},d(u){u&&D(e),a[n].d(),l&&l.d()}}}function nT(t,e,n){let{post:r}=e,s=!1;const i=()=>{n(1,s=!s)};return t.$$set=o=>{"post"in o&&n(0,r=o.post)},[r,s,i]}class rT extends Z{constructor(e){super(),J(this,e,nT,tT,Q,{post:0})}}function Hl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Kl(t){let e,n;return e=new rT({props:{post:t[1]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function sT(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Kl(Hl(t,r,o));const i=o=>k(s[o],1,1,()=>{s[o]=null});return{c(){e=v("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-5hdzo")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=Hl(o,r,c);s[c]?(s[c].p(l,a),b(s[c],1)):(s[c]=Kl(l),s[c].c(),b(s[c],1),s[c].m(e,null))}for(Se(),c=r.length;c<s.length;c+=1)i(c);ke()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)b(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)k(s[a]);n=!1},d(o){o&&D(e),Mt(s,o)}}}function iT(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class oT extends Z{constructor(e){super(),J(this,e,iT,sT,Q,{posts:0})}}function aT(t){let e;return{c(){e=v("div")},m(n,r){R(n,e,r),t[1](e)},p:N,i:N,o:N,d(n){n&&D(e),t[1](null)}}}function cT(t,e,n){const r=qe(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&r("visible")},{rootMargin:"1250px"});let i;function o(a){An[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class lT extends Z{constructor(e){super(),J(this,e,cT,aT,Q,{})}}var uT="/assets/shironeko-x.c28cad00.png";function hT(t){let e,n,r,s,i;return{c(){e=v("div"),n=v("img"),s=O(),i=v("span"),i.textContent="You have reached the end",Qt(n.src,r=uT)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),m(e,n),m(e,s),m(e,i)},p:N,i:N,o:N,d(o){o&&D(e)}}}class dT extends Z{constructor(e){super(),J(this,e,null,hT,Q,{})}}var fT="/assets/shironeko-confused.4071d5b2.png";function pT(t){let e,n,r,s,i;return{c(){e=v("div"),n=v("img"),s=O(),i=v("span"),i.textContent="No results found",Qt(n.src,r=fT)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),m(e,n),m(e,s),m(e,i)},p:N,i:N,o:N,d(o){o&&D(e)}}}class gT extends Z{constructor(e){super(),J(this,e,null,pT,Q,{})}}const mT={sortProperty:"id",minScore:0},yT=()=>{const{subscribe:t,set:e}=an(mT);return{subscribe:t,set:e}};var Es=yT();function Gl(t,e,n){const r=t.slice();return r[9]=e[n],r}function vT(t){let e,n;return e=new gT({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function _T(t){let e,n,r=$t(t[0].count)+"",s,i,o,a,c,l,u,h,d,p,g,w,I,E,y,A,L,K,F,re,X,he=t[0].pages,C=[];for(let M=0;M<he.length;M+=1)C[M]=Wl(Gl(t,he,M));const de=M=>k(C[M],1,1,()=>{C[M]=null}),P=[IT,wT],te=[];function ae(M,ue){return M[2]?0:1}return A=ae(t),L=te[A]=P[A](t),{c(){e=v("div"),n=v("span"),s=fe(r),i=fe(" results"),o=O(),a=v("select"),c=v("option"),c.textContent="Date",l=v("option"),l.textContent="Score",u=O(),h=v("select"),d=v("option"),d.textContent="Any Score",p=v("option"),p.textContent="Score > 10",g=v("option"),g.textContent="Score > 100",w=v("option"),w.textContent="Score > 1K",I=O(),E=v("ol");for(let M=0;M<C.length;M+=1)C[M].c();y=O(),L.c(),K=Fn(),f(n,"class","svelte-1cyq4ol"),c.__value="id",c.value=c.__value,f(c,"class","svelte-1cyq4ol"),l.__value="score",l.value=l.__value,f(l,"class","svelte-1cyq4ol"),f(a,"title","Sort results by"),f(a,"class","svelte-1cyq4ol"),t[3].sortProperty===void 0&&Cn(()=>t[6].call(a)),d.__value=0,d.value=d.__value,f(d,"class","svelte-1cyq4ol"),p.__value=10,p.value=p.__value,f(p,"class","svelte-1cyq4ol"),g.__value=100,g.value=g.__value,f(g,"class","svelte-1cyq4ol"),w.__value=1e3,w.value=w.__value,f(w,"class","svelte-1cyq4ol"),f(h,"class","svelte-1cyq4ol"),t[3].minScore===void 0&&Cn(()=>t[7].call(h)),f(e,"class","header svelte-1cyq4ol"),f(E,"class","svelte-1cyq4ol")},m(M,ue){R(M,e,ue),m(e,n),m(n,s),m(n,i),m(e,o),m(e,a),m(a,c),m(a,l),yn(a,t[3].sortProperty),m(e,u),m(e,h),m(h,d),m(h,p),m(h,g),m(h,w),yn(h,t[3].minScore),R(M,I,ue),R(M,E,ue);for(let ie=0;ie<C.length;ie+=1)C[ie].m(E,null);R(M,y,ue),te[A].m(M,ue),R(M,K,ue),F=!0,re||(X=[Y(a,"change",t[6]),Y(h,"change",t[7])],re=!0)},p(M,ue){if((!F||ue&1)&&r!==(r=$t(M[0].count)+"")&&we(s,r),ue&8&&yn(a,M[3].sortProperty),ue&8&&yn(h,M[3].minScore),ue&1){he=M[0].pages;let se;for(se=0;se<he.length;se+=1){const ht=Gl(M,he,se);C[se]?(C[se].p(ht,ue),b(C[se],1)):(C[se]=Wl(ht),C[se].c(),b(C[se],1),C[se].m(E,null))}for(Se(),se=he.length;se<C.length;se+=1)de(se);ke()}let ie=A;A=ae(M),A===ie?te[A].p(M,ue):(Se(),k(te[ie],1,1,()=>{te[ie]=null}),ke(),L=te[A],L?L.p(M,ue):(L=te[A]=P[A](M),L.c()),b(L,1),L.m(K.parentNode,K))},i(M){if(!F){for(let ue=0;ue<he.length;ue+=1)b(C[ue]);b(L),F=!0}},o(M){C=C.filter(Boolean);for(let ue=0;ue<C.length;ue+=1)k(C[ue]);k(L),F=!1},d(M){M&&D(e),M&&D(I),M&&D(E),Mt(C,M),M&&D(y),te[A].d(M),M&&D(K),re=!1,je(X)}}}function Wl(t){let e,n;return e=new oT({props:{posts:t[9]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.posts=r[9]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function wT(t){let e,n;return e=new dT({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function IT(t){let e,n;return e=new lT({}),e.$on("visible",t[8]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function bT(t){let e,n,r,s;const i=[_T,vT],o=[];function a(c,l){return c[0].count?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),r=Fn()},m(c,l){~e&&o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(Se(),k(o[u],1,1,()=>{o[u]=null}),ke()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),b(n,1),n.m(r.parentNode,r)):n=null)},i(c){s||(b(n),s=!0)},o(c){k(n),s=!1},d(c){~e&&o[e].d(c),c&&D(r)}}}function ET(t,e,n){let r,s,i,o,a;Ke(t,bs,d=>n(0,o=d)),Ke(t,Es,d=>n(3,a=d));const c=qe();function l(){a.sortProperty=to(this),Es.set(a)}function u(){a.minScore=to(this),Es.set(a)}const h=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,r=o.count/Ff),t.$$.dirty&33&&n(2,s=o.pages.length<r),t.$$.dirty&1&&n(1,i=o.count===0)},[o,i,s,a,c,r,l,u,h]}class TT extends Z{constructor(e){super(),J(this,e,ET,bT,Q,{})}}function ST(t){let e,n,r;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-122jee0"),Ye(e,"visible",t[0])},m(s,i){R(s,e,i),n||(r=Y(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&Ye(e,"visible",s[0])},i:N,o:N,d(s){s&&D(e),n=!1,r()}}}function kT(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>0),r=a};return cp(()=>{document.addEventListener("scroll",i,{passive:!0})}),lp(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class AT extends Z{constructor(e){super(),J(this,e,kT,ST,Q,{})}}function Ql(t,e,n){const r=t.slice();return r[15]=e[n],r[17]=n,r}function Xl(t){let e,n,r,s=t[1],i=[];for(let c=0;c<s.length;c+=1)i[c]=Yl(Ql(t,s,c));const o=c=>k(i[c],1,1,()=>{i[c]=null});let a=t[1].length>1&&Jl(t);return{c(){e=v("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=O(),a&&a.c(),f(e,"class","svelte-102e1ul")},m(c,l){R(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);m(e,n),a&&a.m(e,null),r=!0},p(c,l){if(l&2){s=c[1];let u;for(u=0;u<s.length;u+=1){const h=Ql(c,s,u);i[u]?(i[u].p(h,l),b(i[u],1)):(i[u]=Yl(h),i[u].c(),b(i[u],1),i[u].m(e,n))}for(Se(),u=s.length;u<i.length;u+=1)o(u);ke()}c[1].length>1?a?a.p(c,l):(a=Jl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)b(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)k(i[l]);r=!1},d(c){c&&D(e),Mt(i,c),a&&a.d()}}}function Yl(t){let e,n;function r(){return t[5](t[17])}function s(){return t[6](t[15])}return e=new zf({props:{tag:t[15]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){q(e.$$.fragment)},m(i,o){B(e,i,o),n=!0},p(i,o){t=i;const a={};o&2&&(a.tag=t[15]),e.$set(a)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){j(e,i)}}}function Jl(t){let e,n,r;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-102e1ul"></i>',f(e,"class","add-supertag svelte-102e1ul"),f(e,"title","Click to create a new supertag")},m(s,i){R(s,e,i),n||(r=Y(e,"click",t[7]),n=!0)},p:N,d(s){s&&D(e),n=!1,r()}}}function Zl(t){let e,n;return e=new eE({props:{tags:t[1]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.tags=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function CT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,g,w;s=new yE({}),s.$on("pick",t[4]);let I=t[1].length&&Xl(t);c=new Ri({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[8]),u=new TT({}),u.$on("endreached",t[3]),d=new AT({});let E=t[0]&&Zl(t);return{c(){e=v("div"),n=v("h1"),n.textContent="kurosearch",r=O(),q(s.$$.fragment),i=O(),I&&I.c(),o=O(),a=v("div"),q(c.$$.fragment),l=O(),q(u.$$.fragment),h=O(),q(d.$$.fragment),p=O(),E&&E.c(),g=Fn(),f(n,"class","svelte-102e1ul"),f(a,"class","sort-row svelte-102e1ul"),f(e,"class","search-config svelte-102e1ul")},m(y,A){R(y,e,A),m(e,n),m(e,r),B(s,e,null),m(e,i),I&&I.m(e,null),m(e,o),m(e,a),B(c,a,null),R(y,l,A),B(u,y,A),R(y,h,A),B(d,y,A),R(y,p,A),E&&E.m(y,A),R(y,g,A),w=!0},p(y,[A]){y[1].length?I?(I.p(y,A),A&2&&b(I,1)):(I=Xl(y),I.c(),b(I,1),I.m(e,o)):I&&(Se(),k(I,1,1,()=>{I=null}),ke()),y[0]?E?(E.p(y,A),A&1&&b(E,1)):(E=Zl(y),E.c(),b(E,1),E.m(g.parentNode,g)):E&&(Se(),k(E,1,1,()=>{E=null}),ke())},i(y){w||(b(s.$$.fragment,y),b(I),b(c.$$.fragment,y),b(u.$$.fragment,y),b(d.$$.fragment,y),b(E),w=!0)},o(y){k(s.$$.fragment,y),k(I),k(c.$$.fragment,y),k(u.$$.fragment,y),k(d.$$.fragment,y),k(E),w=!1},d(y){y&&D(e),j(s),I&&I.d(),j(c),y&&D(l),j(u,y),y&&D(h),j(d,y),y&&D(p),E&&E.d(y),y&&D(g)}}}function DT(t,e,n){let r,s,i,o;Ke(t,xn,y=>n(11,r=y)),Ke(t,At,y=>n(1,s=y)),Ke(t,Es,y=>n(12,i=y)),Ke(t,bs,y=>n(13,o=y));let a=!1;const c=async()=>(bs.reset(),l()),l=async()=>{try{const y=u(),A=await Nb(o.nextPage,y,i.sortProperty,i.minScore);bs.addPage(A)}catch(y){console.warn(y)}},u=()=>s.flatMap(y=>y.type==="supertag"?r.supertags.find(A=>A.name===y.name).tags:y.toSearchableTag());return[a,s,c,l,y=>At.addOrReplace(y.detail),y=>At.removeByIndex(y),y=>At.addOrReplace(new Ws(Lf(y.modifier),y.name,y.count,y.type)),()=>{n(0,a=!0)},()=>c(),y=>{xn.addSupertag(y.detail),At.set([new Ws("+",y.detail.name,y.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class RT extends Z{constructor(e){super(),J(this,e,DT,CT,Q,{})}}const{subscribe:NT,set:OT}=an("dark");var eu={subscribe:NT,set(t){OT(t),$T(t),xn.setTheme(t)}};const $T=t=>{document.documentElement.classList.replace(PT(t),t)},PT=t=>t==="dark"?"light":"dark";function MT(t){let e,n,r,s,i,o,a;return{c(){e=v("label"),n=fe(`Theme:
  `),r=v("select"),s=v("option"),s.textContent="Dark",i=v("option"),i.textContent="Light",s.__value="dark",s.value=s.__value,i.__value="light",i.value=i.__value,t[0]===void 0&&Cn(()=>t[1].call(r))},m(c,l){R(c,e,l),m(e,n),m(e,r),m(r,s),m(r,i),yn(r,t[0]),o||(a=Y(r,"change",t[1]),o=!0)},p(c,[l]){l&1&&yn(r,c[0])},i:N,o:N,d(c){c&&D(e),o=!1,a()}}}function LT(t,e,n){let r;Ke(t,eu,i=>n(0,r=i));function s(){r=to(this),eu.set(r)}return[r,s]}class xT extends Z{constructor(e){super(),J(this,e,LT,MT,Q,{})}}function UT(t){let e;return{c(){e=v("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,f(e,"id","tags")},m(n,r){R(n,e,r)},p:N,i:N,o:N,d(n){n&&D(e)}}}class FT extends Z{constructor(e){super(),J(this,e,null,UT,Q,{})}}function VT(t){let e,n=Pt(t[0].name)+"",r,s;return{c(){e=v("li"),r=fe(n),f(e,"class",s=ct(Qs[t[0].modifier])+" svelte-1a1wcxu")},m(i,o){R(i,e,o),m(e,r)},p(i,[o]){o&1&&n!==(n=Pt(i[0].name)+"")&&we(r,n),o&1&&s!==(s=ct(Qs[i[0].modifier])+" svelte-1a1wcxu")&&f(e,"class",s)},i:N,o:N,d(i){i&&D(e)}}}function BT(t,e,n){let{tag:r}=e;return t.$$set=s=>{"tag"in s&&n(0,r=s.tag)},[r]}class jT extends Z{constructor(e){super(),J(this,e,BT,VT,Q,{tag:0})}}function tu(t,e,n){const r=t.slice();return r[4]=e[n],r}function nu(t){let e,n;return e=new jT({props:{tag:t[4]}}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=r[4]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function qT(t){let e,n,r=t[0].name+"",s,i,o,a=Object.keys(t[0].tags).length+"",c,l,u,h,d,p,g,w,I=t[0].description+"",E,y,A,L,K,F,re=t[0].tags,X=[];for(let C=0;C<re.length;C+=1)X[C]=nu(tu(t,re,C));const he=C=>k(X[C],1,1,()=>{X[C]=null});return{c(){e=v("li"),n=v("h3"),s=fe(r),i=O(),o=v("small"),c=fe(a),l=fe(" tags"),u=O(),h=v("i"),d=O(),p=v("i"),g=O(),w=v("span"),E=fe(I),y=O(),A=v("ol");for(let C=0;C<X.length;C+=1)X[C].c();f(n,"class","svelte-h29a8o"),f(o,"class","svelte-h29a8o"),f(h,"tabindex","0"),f(h,"class","codicon codicon-edit svelte-h29a8o"),f(p,"tabindex","0"),f(p,"class","codicon codicon-close svelte-h29a8o"),f(w,"class","svelte-h29a8o"),f(A,"class","svelte-h29a8o"),f(e,"class","svelte-h29a8o")},m(C,de){R(C,e,de),m(e,n),m(n,s),m(e,i),m(e,o),m(o,c),m(o,l),m(e,u),m(e,h),m(e,d),m(e,p),m(e,g),m(e,w),m(w,E),m(e,y),m(e,A);for(let P=0;P<X.length;P+=1)X[P].m(A,null);L=!0,K||(F=[Y(h,"click",t[2]),Y(h,"keyup",Un(t[2])),Y(p,"click",t[1]),Y(p,"keyup",Un(t[1]))],K=!0)},p(C,[de]){if((!L||de&1)&&r!==(r=C[0].name+"")&&we(s,r),(!L||de&1)&&a!==(a=Object.keys(C[0].tags).length+"")&&we(c,a),(!L||de&1)&&I!==(I=C[0].description+"")&&we(E,I),de&1){re=C[0].tags;let P;for(P=0;P<re.length;P+=1){const te=tu(C,re,P);X[P]?(X[P].p(te,de),b(X[P],1)):(X[P]=nu(te),X[P].c(),b(X[P],1),X[P].m(A,null))}for(Se(),P=re.length;P<X.length;P+=1)he(P);ke()}},i(C){if(!L){for(let de=0;de<re.length;de+=1)b(X[de]);L=!0}},o(C){X=X.filter(Boolean);for(let de=0;de<X.length;de+=1)k(X[de]);L=!1},d(C){C&&D(e),Mt(X,C),K=!1,je(F)}}}function zT(t,e,n){let{supertag:r}=e;const s=qe(),i=()=>s("remove",r),o=()=>s("edit",r);return t.$$set=a=>{"supertag"in a&&n(0,r=a.supertag)},[r,i,o]}class HT extends Z{constructor(e){super(),J(this,e,zT,qT,Q,{supertag:0})}}function KT(t){let e,n,r,s,i,o,a,c,l;return o=new Ri({props:{text:t[0],title:"Click to sign in",disabled:t[3]}}),o.$on("click",t[4]),{c(){e=v("div"),n=v("input"),r=O(),s=v("input"),i=O(),q(o.$$.fragment),f(n,"type","text"),f(n,"placeholder","Email"),f(n,"autocomplete","email"),f(n,"class","svelte-17i24u0"),f(s,"type","password"),f(s,"placeholder","Password"),f(s,"autocomplete","current-password"),f(s,"class","svelte-17i24u0"),f(e,"class","svelte-17i24u0")},m(u,h){R(u,e,h),m(e,n),rt(n,t[1]),m(e,r),m(e,s),rt(s,t[2]),m(e,i),B(o,e,null),a=!0,c||(l=[Y(n,"input",t[5]),Y(s,"input",t[6])],c=!0)},p(u,[h]){h&2&&n.value!==u[1]&&rt(n,u[1]),h&4&&s.value!==u[2]&&rt(s,u[2]);const d={};h&1&&(d.text=u[0]),h&8&&(d.disabled=u[3]),o.$set(d)},i(u){a||(b(o.$$.fragment,u),a=!0)},o(u){k(o.$$.fragment,u),a=!1},d(u){u&&D(e),j(o),c=!1,je(l)}}}function GT(t,e,n){let r;const s=qe();let{submitLabel:i}=e,o="",a="";const c=()=>{r||s("submit",{email:o,password:a})};function l(){o=this.value,n(1,o)}function u(){a=this.value,n(2,a)}return t.$$set=h=>{"submitLabel"in h&&n(0,i=h.submitLabel)},t.$$.update=()=>{t.$$.dirty&6&&n(3,r=!o||!a)},[i,o,a,r,c,l,u]}class ru extends Z{constructor(e){super(),J(this,e,GT,KT,Q,{submitLabel:0})}}function WT(t){let e,n;return{c(){e=v("img"),Qt(e.src,n="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png")||f(e,"src",n),f(e,"alt","Google"),f(e,"class","svelte-1daylrb")},m(r,s){R(r,e,s)},p:N,i:N,o:N,d(r){r&&D(e)}}}class QT extends Z{constructor(e){super(),J(this,e,null,WT,Q,{})}}function XT(t){let e,n,r,s,i,o,a,c;return n=new QT({}),{c(){e=v("button"),q(n.$$.fragment),r=O(),s=v("span"),i=fe(t[0]),f(s,"class","svelte-w5bo0p"),f(e,"class","svelte-w5bo0p")},m(l,u){R(l,e,u),B(n,e,null),m(e,r),m(e,s),m(s,i),o=!0,a||(c=Y(e,"click",t[2]),a=!0)},p(l,[u]){(!o||u&1)&&we(i,l[0])},i(l){o||(b(n.$$.fragment,l),o=!0)},o(l){k(n.$$.fragment,l),o=!1},d(l){l&&D(e),j(n),a=!1,c()}}}function YT(t,e,n){let{content:r}=e;const s=qe(),i=()=>s("click");return t.$$set=o=>{"content"in o&&n(0,r=o.content)},[r,s,i]}class JT extends Z{constructor(e){super(),J(this,e,YT,XT,Q,{content:0})}}function ZT(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,g,w,I,E;return i=new ru({props:{submitLabel:"Sign In"}}),i.$on("submit",t[0]),l=new JT({props:{content:"Sign in With Google"}}),l.$on("click",t[1]),I=new ru({props:{submitLabel:"Create Account"}}),I.$on("submit",t[2]),{c(){e=v("div"),n=v("div"),r=v("h3"),r.textContent="Sign In",s=O(),q(i.$$.fragment),o=O(),a=v("p"),a.textContent="or",c=O(),q(l.$$.fragment),u=O(),h=v("div"),d=O(),p=v("div"),g=v("h3"),g.textContent="Sign Up",w=O(),q(I.$$.fragment),f(a,"class","svelte-vfla8u"),f(n,"class","providerlist svelte-vfla8u"),f(h,"class","divider svelte-vfla8u"),f(p,"class","providerlist svelte-vfla8u"),f(e,"class","container svelte-vfla8u")},m(y,A){R(y,e,A),m(e,n),m(n,r),m(n,s),B(i,n,null),m(n,o),m(n,a),m(n,c),B(l,n,null),m(e,u),m(e,h),m(e,d),m(e,p),m(p,g),m(p,w),B(I,p,null),E=!0},p:N,i(y){E||(b(i.$$.fragment,y),b(l.$$.fragment,y),b(I.$$.fragment,y),E=!0)},o(y){k(i.$$.fragment,y),k(l.$$.fragment,y),k(I.$$.fragment,y),E=!1},d(y){y&&D(e),j(i),j(l),j(I)}}}function e1(t){return[s=>kn.signInWithEmail(s.detail.email,s.detail.password),()=>kn.signInWithGoogle(),s=>kn.signUpWithEmail(s.detail.email,s.detail.password)]}class t1 extends Z{constructor(e){super(),J(this,e,e1,ZT,Q,{})}}function su(t,e,n){const r=t.slice();return r[4]=e[n],r}function n1(t){let e,n;return e=new t1({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function r1(t){var ue;let e,n,r,s,i,o,a,c,l,u=((ue=t[0].user.displayName)!=null?ue:"Anonymous")+"",h,d,p,g,w,I,E=t[0].user.email+"",y,A,L,K,F,re,X,he,C,de;g=new Ri({props:{text:"Sign out",title:"Click to sign out"}}),g.$on("click",t[2]);let P=t[1].supertags.length===0&&iu(),te=t[1].supertags,ae=[];for(let ie=0;ie<te.length;ie+=1)ae[ie]=ou(su(t,te,ie));const M=ie=>k(ae[ie],1,1,()=>{ae[ie]=null});return{c(){var ie;e=v("div"),n=v("div"),r=v("h2"),r.textContent="Signed in as",s=O(),i=v("div"),o=v("img"),c=O(),l=v("span"),h=fe(u),d=O(),p=v("div"),q(g.$$.fragment),w=O(),I=v("span"),y=fe(E),A=O(),L=v("div"),K=v("h2"),K.textContent="Your supertags",F=O(),re=v("div"),X=O(),P&&P.c(),he=O(),C=v("ul");for(let se=0;se<ae.length;se+=1)ae[se].c();f(o,"class","profile-picture svelte-1x2vtkq"),Qt(o.src,a=(ie=t[0].user.photoURL)!=null?ie:Gs)||f(o,"src",a),f(o,"alt","Profile"),f(l,"class","name svelte-1x2vtkq"),f(p,"class","actions svelte-1x2vtkq"),f(i,"class","overview svelte-1x2vtkq"),f(re,"class","supertags"),f(C,"class","svelte-1x2vtkq"),f(e,"class","account-view svelte-1x2vtkq")},m(ie,se){R(ie,e,se),m(e,n),m(n,r),m(n,s),m(n,i),m(i,o),m(i,c),m(i,l),m(l,h),m(i,d),m(i,p),B(g,p,null),m(i,w),m(i,I),m(I,y),m(e,A),m(e,L),m(L,K),m(L,F),m(L,re),m(L,X),P&&P.m(L,null),m(L,he),m(L,C);for(let ht=0;ht<ae.length;ht+=1)ae[ht].m(C,null);de=!0},p(ie,se){var ht,Wa;if((!de||se&1&&!Qt(o.src,a=(ht=ie[0].user.photoURL)!=null?ht:Gs))&&f(o,"src",a),(!de||se&1)&&u!==(u=((Wa=ie[0].user.displayName)!=null?Wa:"Anonymous")+"")&&we(h,u),(!de||se&1)&&E!==(E=ie[0].user.email+"")&&we(y,E),ie[1].supertags.length===0?P||(P=iu(),P.c(),P.m(L,he)):P&&(P.d(1),P=null),se&2){te=ie[1].supertags;let Ue;for(Ue=0;Ue<te.length;Ue+=1){const Qa=su(ie,te,Ue);ae[Ue]?(ae[Ue].p(Qa,se),b(ae[Ue],1)):(ae[Ue]=ou(Qa),ae[Ue].c(),b(ae[Ue],1),ae[Ue].m(C,null))}for(Se(),Ue=te.length;Ue<ae.length;Ue+=1)M(Ue);ke()}},i(ie){if(!de){b(g.$$.fragment,ie);for(let se=0;se<te.length;se+=1)b(ae[se]);de=!0}},o(ie){k(g.$$.fragment,ie),ae=ae.filter(Boolean);for(let se=0;se<ae.length;se+=1)k(ae[se]);de=!1},d(ie){ie&&D(e),j(g),P&&P.d(),Mt(ae,ie)}}}function iu(t){let e;return{c(){e=v("span"),e.textContent="You don't have any supertags yet. You can create them when you have more than one tag active."},m(n,r){R(n,e,r)},d(n){n&&D(e)}}}function ou(t){let e,n;return e=new HT({props:{supertag:t[4]}}),e.$on("remove",t[3]),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.supertag=r[4]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function s1(t){let e,n,r,s;const i=[r1,n1],o=[];function a(c,l){return c[0].loggedIn?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=Fn()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Se(),k(o[u],1,1,()=>{o[u]=null}),ke(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),b(n,1),n.m(r.parentNode,r))},i(c){s||(b(n),s=!0)},o(c){k(n),s=!1},d(c){o[e].d(c),c&&D(r)}}}function i1(t,e,n){let r,s;return Ke(t,kn,a=>n(0,r=a)),Ke(t,xn,a=>n(1,s=a)),[r,s,()=>kn.signOut(),a=>xn.deleteSupertag(a.detail)]}class o1 extends Z{constructor(e){super(),J(this,e,i1,s1,Q,{})}}class a1 extends Z{constructor(e){super(),J(this,e,null,null,Q,{})}}function c1(t){let e;return{c(){e=v("p"),e.textContent="You got lost..."},m(n,r){R(n,e,r)},i:N,o:N,d(n){n&&D(e)}}}function l1(t){let e,n;return e=new FT({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function u1(t){let e,n;return e=new xT({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function h1(t){let e,n;return e=new o1({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function d1(t){let e,n;return e=new RT({}),{c(){q(e.$$.fragment)},m(r,s){B(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function f1(t){let e,n,r,s,i,o,a,c;e=new a1({}),r=new wb({});const l=[d1,h1,u1,l1,c1],u=[];function h(d,p){return d[0]==="search"?0:d[0]==="account"?1:d[0]==="settings"?2:d[0]==="help"?3:4}return o=h(t),a=u[o]=l[o](t),{c(){q(e.$$.fragment),n=O(),q(r.$$.fragment),s=O(),i=v("main"),a.c()},m(d,p){B(e,d,p),R(d,n,p),B(r,d,p),R(d,s,p),R(d,i,p),u[o].m(i,null),c=!0},p(d,[p]){let g=o;o=h(d),o!==g&&(Se(),k(u[g],1,1,()=>{u[g]=null}),ke(),a=u[o],a||(a=u[o]=l[o](d),a.c()),b(a,1),a.m(i,null))},i(d){c||(b(e.$$.fragment,d),b(r.$$.fragment,d),b(a),c=!0)},o(d){k(e.$$.fragment,d),k(r.$$.fragment,d),k(a),c=!1},d(d){j(e,d),d&&D(n),j(r,d),d&&D(s),d&&D(i),u[o].d()}}}function p1(t,e,n){let r;return Ke(t,wn,s=>n(0,r=s)),[r]}class g1 extends Z{constructor(e){super(),J(this,e,p1,f1,Q,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function au(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[r.port2])})}function m1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function cu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y1(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,i){if(s){if(typeof s=="string")return cu(s,i);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?cu(s,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Zi=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function eo(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Xn=function(t,e){this.type=t,Object.assign(this,e)};function us(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function v1(){}var _1={type:"SKIP_WAITING"};function lu(t,e){if(!e)return t&&t.then?t.then(v1):Promise.resolve()}var w1=function(t){var e,n;function r(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Zi,l.en=new Zi,l.on=new Zi,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!eo(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,p=h.target,g=p.state,w=p===l.vn,I={sw:p,isExternal:w,originalEvent:h};!w&&l.mn&&(I.isUpdate=!0),l.dispatchEvent(new Xn(g,I)),g==="installed"?l.wn=self.setTimeout(function(){g==="installed"&&d.waiting===p&&l.dispatchEvent(new Xn("waiting",I))},200):g==="activating"&&(clearTimeout(l.wn),w||l.en.resolve(p))},l.dn=function(h){var d=l.hn,p=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Xn("controlling",{isExternal:p,originalEvent:h,sw:d,isUpdate:l.mn})),p||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,p=h.ports,g=h.source;return us(l.getSW(),function(){l.an.has(g)&&l.dispatchEvent(new Xn("message",{data:d,originalEvent:h,ports:p,sw:g}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(p){return Promise.reject(p)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,i,o=r.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var p=h();return p&&p.then?p.then(d):d(p)}(function(){if(!l&&document.readyState!=="complete")return lu(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),us(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&eo(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Xn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?lu(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return us(this.getSW(),function(c){return au(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&au(this.fn.waiting,_1)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&eo(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return us(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},s=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&m1(s.prototype,i),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,s=y1(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function I1(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new w1("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),o.register({immediate:e}).then(c=>{s==null||s(c)}).catch(c=>{i==null||i(c)})),a}new g1({target:document.getElementById("app")});I1();
