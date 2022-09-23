var Vf=Object.defineProperty,Bf=Object.defineProperties;var jf=Object.getOwnPropertyDescriptors;var Ka=Object.getOwnPropertySymbols;var qf=Object.prototype.hasOwnProperty,zf=Object.prototype.propertyIsEnumerable;var Ga=(t,e,n)=>e in t?Vf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Wa=(t,e)=>{for(var n in e||(e={}))qf.call(e,n)&&Ga(t,n,e[n]);if(Ka)for(var n of Ka(e))zf.call(e,n)&&Ga(t,n,e[n]);return t},Qa=(t,e)=>Bf(t,jf(e));const Hf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Hf();function N(){}function Kf(t,e){for(const n in e)t[n]=e[n];return t}function Gf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ru(t){return t()}function Xa(){return Object.create(null)}function Be(t){t.forEach(ru)}function Wf(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Kr;function ys(t,e){return Kr||(Kr=document.createElement("a")),Kr.href=e,t===Kr.href}function Qf(t){return Object.keys(t).length===0}function Xf(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Je(t,e,n){t.$$.on_destroy.push(Xf(e,n))}function Yf(t,e,n,r){if(t){const s=su(t,e,n,r);return t[0](s)}}function su(t,e,n,r){return t[1]&&r?Kf(n.ctx.slice(),t[1](r(e))):n.ctx}function Jf(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function Zf(t,e,n,r,s,i){if(s){const o=su(e,n,r,i);t.p(o,s)}}function ep(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Tt(t){return t==null?"":t}function v(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Dn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function on(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ee(t){return document.createTextNode(t)}function V(){return Ee(" ")}function Zt(){return Ee("")}function J(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function js(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tp(t){return Array.from(t.childNodes)}function Ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function un(t,e){t.value=e==null?"":e}function Gr(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ya(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function qe(t,e,n){t.classList[n?"add":"remove"](e)}function np(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let nr;function at(t){nr=t}function qs(){if(!nr)throw new Error("Function called outside component initialization");return nr}function iu(t){qs().$$.on_mount.push(t)}function rp(t){qs().$$.on_destroy.push(t)}function We(){const t=qs();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=np(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Co(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const jn=[],_n=[],ss=[],Ja=[],sp=Promise.resolve();let Qi=!1;function ip(){Qi||(Qi=!0,sp.then(Do))}function rr(t){ss.push(t)}const Si=new Set;let Wr=0;function Do(){const t=nr;do{for(;Wr<jn.length;){const e=jn[Wr];Wr++,at(e),op(e.$$)}for(at(null),jn.length=0,Wr=0;_n.length;)_n.pop()();for(let e=0;e<ss.length;e+=1){const n=ss[e];Si.has(n)||(Si.add(n),n())}ss.length=0}while(jn.length);for(;Ja.length;)Ja.pop()();Qi=!1,Si.clear(),at(t)}function op(t){if(t.fragment!==null){t.update(),Be(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rr)}}const is=new Set;let $t;function Se(){$t={r:0,c:[],p:$t}}function ke(){$t.r||Be($t.c),$t=$t.p}function b(t,e){t&&t.i&&(is.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(is.has(t))return;is.add(t),$t.c.push(()=>{is.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Za(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Se(),k(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ke())}):e.block.d(1),l.c(),b(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Do()}if(Gf(t)){const s=qs();if(t.then(i=>{at(s),r(e.then,1,e.value,i),at(null)},i=>{if(at(s),r(e.catch,2,e.error,i),at(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ap(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function H(t){t&&t.c()}function j(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||rr(()=>{const c=i.map(ru).filter(Wf);o?o.push(...c):Be(c),t.$$.on_mount=[]}),a.forEach(rr)}function q(t,e){const n=t.$$;n.fragment!==null&&(Be(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function cp(t,e){t.$$.dirty[0]===-1&&(jn.push(t),ip(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,r,s,i,o,a=[-1]){const c=nr;at(t);const l=t.$$={fragment:null,ctx:null,props:i,update:N,not_equal:s,bound:Xa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Xa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...g)=>{const p=g.length?g[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&cp(t,h)),d}):[],l.update(),u=!0,Be(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=tp(e.target);l.fragment&&l.fragment.l(h),h.forEach(D)}else l.fragment&&l.fragment.c();e.intro&&b(t.$$.fragment),j(t,e.target,e.anchor,e.customElement),Do()}at(c)}class ee{$destroy(){q(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Qf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const an=[];function Rn(t,e=N){let n;const r=new Set;function s(a){if(Y(t,a)&&(t=a,n)){const c=!an.length;for(const l of r)l[1](),an.push(l,t);if(c){for(let l=0;l<an.length;l+=2)an[l][0](an[l+1]);an.length=0}}}function i(a){s(a(t))}function o(a,c=N){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||N),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const lp=Object.freeze(["search","account","settings","help"]),up=t=>lp.includes(t),hp=()=>{const{subscribe:t,set:e}=Rn("search");return{subscribe:t,navigateTo(n){if(!up(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var fn=hp();function dp(t){let e,n,r,s,i,o;return{c(){e=on("svg"),n=on("g"),r=on("path"),s=on("defs"),i=on("clipPath"),o=on("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),v(e,n),v(n,r),v(e,s),v(s,i),v(i,o)},p:N,i:N,o:N,d(a){a&&D(e)}}}class fp extends ee{constructor(e){super(),Z(this,e,null,dp,Y,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ou=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ou(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gp=function(t){const e=ou(t);return au.encodeByteArray(e,!0)},cu=function(t){return gp(t).replace(/\./g,"")},mp=function(t){try{return au.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Ro(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){return ve().indexOf("Electron/")>=0}function hu(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _p(){return ve().indexOf("MSAppHost/")>=0}function du(){return typeof indexedDB=="object"}function fu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function wp(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="FirebaseError";class Xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ip,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ep(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xe(s,a,r)}}function Ep(t,e){return t.replace(bp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bp=/\{\$([^}]+)}/g;function Tp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ec(i)&&ec(o)){if(!sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ec(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sp(t,e){const n=new kp(t,e);return n.subscribe.bind(n)}class kp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ap(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ki),s.error===void 0&&(s.error=ki),s.complete===void 0&&(s.complete=ki);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ap(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ki(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=1e3,Dp=2,Rp=4*60*60*1e3,Np=.5;function tc(t,e=Cp,n=Dp){const r=e*Math.pow(n,t),s=Math.round(Np*r*(Math.random()-.5)*2);return Math.min(Rp,r+s)}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Qe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($p(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pp(t){return t===Ot?void 0:t}function $p(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Op(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Lp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},xp=ne.INFO,Up={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Fp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Up[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zs{constructor(e){this.name=e,this._logLevel=xp,this._logHandler=Fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Vp=(t,e)=>e.some(n=>t instanceof n);let nc,rc;function Bp(){return nc||(nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jp(){return rc||(rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,Xi=new WeakMap,gu=new WeakMap,Ai=new WeakMap,No=new WeakMap;function qp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pu.set(n,t)}).catch(()=>{}),No.set(e,t),e}function zp(t){if(Xi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xi.set(t,e)}let Yi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hp(t){Yi=t(Yi)}function Kp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ci(this),e,...n);return gu.set(r,e.sort?e.sort():[e]),Et(r)}:jp().includes(t)?function(...e){return t.apply(Ci(this),e),Et(pu.get(this))}:function(...e){return Et(t.apply(Ci(this),e))}}function Gp(t){return typeof t=="function"?Kp(t):(t instanceof IDBTransaction&&zp(t),Vp(t,Bp())?new Proxy(t,Yi):t)}function Et(t){if(t instanceof IDBRequest)return qp(t);if(Ai.has(t))return Ai.get(t);const e=Gp(t);return e!==t&&(Ai.set(t,e),No.set(e,t)),e}const Ci=t=>No.get(t);function mu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Wp=["get","getKey","getAll","getAllKeys","count"],Qp=["put","add","delete","clear"],Di=new Map;function sc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Qp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Di.set(e,i),i}Hp(t=>Qa(Wa({},t),{get:(e,n,r)=>sc(e,n)||t.get(e,n,r),has:(e,n)=>!!sc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",ic="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new zs("@firebase/app"),Jp="@firebase/app-compat",Zp="@firebase/analytics-compat",eg="@firebase/analytics",tg="@firebase/app-check-compat",ng="@firebase/app-check",rg="@firebase/auth",sg="@firebase/auth-compat",ig="@firebase/database",og="@firebase/database-compat",ag="@firebase/functions",cg="@firebase/functions-compat",lg="@firebase/installations",ug="@firebase/installations-compat",hg="@firebase/messaging",dg="@firebase/messaging-compat",fg="@firebase/performance",pg="@firebase/performance-compat",gg="@firebase/remote-config",mg="@firebase/remote-config-compat",yg="@firebase/storage",vg="@firebase/storage-compat",_g="@firebase/firestore",wg="@firebase/firestore-compat",Ig="firebase",Eg="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="[DEFAULT]",bg={[Ji]:"fire-core",[Jp]:"fire-core-compat",[eg]:"fire-analytics",[Zp]:"fire-analytics-compat",[ng]:"fire-app-check",[tg]:"fire-app-check-compat",[rg]:"fire-auth",[sg]:"fire-auth-compat",[ig]:"fire-rtdb",[og]:"fire-rtdb-compat",[ag]:"fire-fn",[cg]:"fire-fn-compat",[lg]:"fire-iid",[ug]:"fire-iid-compat",[hg]:"fire-fcm",[dg]:"fire-fcm-compat",[fg]:"fire-perf",[pg]:"fire-perf-compat",[gg]:"fire-rc",[mg]:"fire-rc-compat",[yg]:"fire-gcs",[vg]:"fire-gcs-compat",[_g]:"fire-fst",[wg]:"fire-fst-compat","fire-js":"fire-js",[Ig]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Map,Zi=new Map;function Tg(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(Zi.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,t);for(const n of vs.values())Tg(n,t);return!0}function tn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new en("app","Firebase",Sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=Eg;function Ag(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw zt.create("bad-app-name",{appName:String(r)});const s=vs.get(r);if(s){if(sr(t,s.options)&&sr(n,s.config))return s;throw zt.create("duplicate-app",{appName:r})}const i=new Mp(r);for(const a of Zi.values())i.addComponent(a);const o=new kg(t,n,i);return vs.set(r,o),o}function Oo(t=yu){const e=vs.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function ze(t,e,n){var r;let s=(r=bg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}rt(new Qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cg="firebase-heartbeat-database",Dg=1,ir="firebase-heartbeat-store";let Ri=null;function vu(){return Ri||(Ri=mu(Cg,Dg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ir)}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Ri}async function Rg(t){var e;try{return(await vu()).transaction(ir).objectStore(ir).get(_u(t))}catch(n){if(n instanceof Xe)qt.warn(n.message);else{const r=zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qt.warn(r.message)}}}async function oc(t,e){var n;try{const s=(await vu()).transaction(ir,"readwrite");return await s.objectStore(ir).put(e,_u(t)),s.done}catch(r){if(r instanceof Xe)qt.warn(r.message);else{const s=zt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});qt.warn(s.message)}}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ng=1024,Og=30*24*60*60*1e3;class Pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ac(),{heartbeatsToSend:n,unsentEntries:r}=$g(this._heartbeatsCache.heartbeats),s=cu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ac(){return new Date().toISOString().substring(0,10)}function $g(t,e=Ng){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return du()?fu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cc(t){return cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){rt(new Qe("platform-logger",e=>new Xp(e),"PRIVATE")),rt(new Qe("heartbeat",e=>new Pg(e),"PRIVATE")),ze(Ji,ic,t),ze(Ji,ic,"esm2017"),ze("fire-js","")}Lg("");function Po(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xg=wu,Iu=new en("auth","Firebase",wu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new zs("@firebase/auth");function os(t,...e){lc.logLevel<=ne.ERROR&&lc.error(`Auth (${Er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw $o(t,...e)}function Ze(t,...e){return $o(t,...e)}function Eu(t,e,n){const r=Object.assign(Object.assign({},xg()),{[e]:n});return new en("auth","Firebase",r).create(e,{appName:t.name})}function Ug(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(t,"argument-error"),Eu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iu.create(t,...e)}function U(t,e,...n){if(!t)throw $o(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw os(e),new Error(e)}function dt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function lt(t){dt(t instanceof Function,"Expected a class definition");let e=uc.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){const n=tn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sr(i,e!=null?e:{}))return s;Ge(s,"already-initialized")}return n.initialize({options:e})}function Vg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bg(){return hc()==="http:"||hc()==="https:"}function hc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bg()||Ro()||"connection"in navigator)?navigator.onLine:!0}function qg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=lu()||uu()}get(){return jg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new br(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sr(t,e,n,r,s={}){return Tu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ir(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),bu.fetch()(Su(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Tu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zg),e);try{const s=new Kg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Eu(t,u,l);Ge(t,u)}}catch(s){if(s instanceof Xe)throw s;Ge(t,"network-request-failed")}}async function kr(t,e,n,r,s={}){const i=await Sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Su(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Mo(t.config,s):`${t.config.apiScheme}://${s}`}class Kg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),Hg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ze(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e){return Sr(t,"POST","/v1/accounts:delete",e)}async function Wg(t,e){return Sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qg(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=Lo(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Ni(s.auth_time)),issuedAtTime:Wn(Ni(s.iat)),expirationTime:Wn(Ni(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(t){return Number(t)*1e3}function Lo(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return os("JWT malformed, contained fewer than 3 sections"),null;try{const i=mp(r);return i?JSON.parse(i):(os("Failed to decode base64 JWT payload"),null)}catch(i){return os("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Xg(t){const e=Lo(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xe&&Yg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t){var e;const n=t.auth,r=await t.getIdToken(),s=await or(t,Wg(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tm(i.providerUserInfo):[],a=em(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ku(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Zg(t){const e=Ne(t);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function em(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tm(t){return t.map(e=>{var{providerId:n}=e,r=Po(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){const n=await Tu(t,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Su(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ar;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Po(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qg(this,e)}reload(){return Zg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,Gg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:G,isAnonymous:x,providerData:Q,stsTokenManager:oe}=n;U(A&&oe,e,"internal-error");const it=ar.fromJSON(this.name,oe);U(typeof A=="string",e,"internal-error"),yt(h,e.name),yt(d,e.name),U(typeof G=="boolean",e,"internal-error"),U(typeof x=="boolean",e,"internal-error"),yt(g,e.name),yt(p,e.name),yt(y,e.name),yt(w,e.name),yt(S,e.name),yt(m,e.name);const ue=new Vt({uid:A,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:g,tenantId:y,stsTokenManager:it,createdAt:S,lastLoginAt:m});return Q&&Array.isArray(Q)&&(ue.providerData=Q.map(L=>Object.assign({},L))),w&&(ue._redirectEventId=w),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new ar;s.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _s(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Au.type="NONE";const dc=Au;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=as(this.userKey,s.apiKey,i),this.fullPersistenceKey=as("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pn(lt(dc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||lt(dc);const o=as(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Vt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ou(e))return"Blackberry";if(Pu(e))return"Webos";if(xo(e))return"Safari";if((e.includes("chrome/")||Du(e))&&!e.includes("edge/"))return"Chrome";if(Nu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cu(t=ve()){return/firefox\//i.test(t)}function xo(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Du(t=ve()){return/crios\//i.test(t)}function Ru(t=ve()){return/iemobile/i.test(t)}function Nu(t=ve()){return/android/i.test(t)}function Ou(t=ve()){return/blackberry/i.test(t)}function Pu(t=ve()){return/webos/i.test(t)}function Hs(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rm(t=ve()){var e;return Hs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sm(){return hu()&&document.documentMode===10}function $u(t=ve()){return Hs(t)||Nu(t)||Pu(t)||Ou(t)||/windows phone/i.test(t)||Ru(t)}function im(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e=[]){let n;switch(t){case"Browser":n=fc(ve());break;case"Worker":n=`${fc(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
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
 */class om{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pc(this),this.idTokenSubscription=new pc(this),this.beforeStateQueue=new om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await _s(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new en("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ar(t){return Ne(t)}class pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function cm(t,e){return Sr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e){return kr(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function hm(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Uo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new cr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return um(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return kr(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="http://localhost";class Ht extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Po(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ir(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pm(t){const e=qn(zn(t)).link,n=e?qn(zn(e)).deep_link_id:null,r=qn(zn(t)).deep_link_id;return(r?qn(zn(r)).link:null)||r||n||e||t}class Fo{constructor(e){var n,r,s,i,o,a;const c=qn(zn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=fm((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pm(e);try{return new Fo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,n){return cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fo.parseLink(n);return U(r,"argument-error"),cr._fromEmailAndCode(e,r.code,r.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Cr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Cr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Cr{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e){return kr(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),o=gc(r);return new Kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gc(r);return new Kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Xe{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ws(e,n,r,s)}}function Lu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(t,i,e,r):i})}async function mm(t,e,n=!1){const r=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await or(t,Lu(s,i,e,t),n);U(o.idToken,s,"internal-error");const a=Lo(o.idToken);U(a,s,"internal-error");const{sub:c}=a;return U(t.uid===c,s,"user-mismatch"),Kt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ge(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(t,e,n=!1){const r="signIn",s=await Lu(t,r,e),i=await Kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vm(t,e){return xu(Ar(t),e)}async function _m(t,e,n){const r=Ar(t),s=await gm(r,{returnSecureToken:!0,email:e,password:n}),i=await Kt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function wm(t,e,n){return vm(Ne(t),Nn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e){return Ne(t).setPersistence(e)}function Uu(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function Em(t){return Ne(t).signOut()}const Is="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){const t=ve();return xo(t)||Hs(t)}const Tm=1e3,Sm=10;class Vu extends Fu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bm()&&im(),this.fallbackToPolling=$u(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vu.type="LOCAL";const Bu=Vu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Fu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ju.type="SESSION";const qu=ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ks(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await km(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ks.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Bo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function Cm(t){et().location.href=t}/**
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
 */function zu(){return typeof et().WorkerGlobalScope!="undefined"&&typeof et().importScripts=="function"}async function Dm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nm(){return zu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firebaseLocalStorageDb",Om=1,Es="firebaseLocalStorage",Ku="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gs(t,e){return t.transaction([Es],e?"readwrite":"readonly").objectStore(Es)}function Pm(){const t=indexedDB.deleteDatabase(Hu);return new Dr(t).toPromise()}function to(){const t=indexedDB.open(Hu,Om);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Es,{keyPath:Ku})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Es)?e(r):(r.close(),await Pm(),e(await to()))})})}async function mc(t,e,n){const r=Gs(t,!0).put({[Ku]:e,value:n});return new Dr(r).toPromise()}async function $m(t,e){const n=Gs(t,!1).get(e),r=await new Dr(n).toPromise();return r===void 0?null:r.value}function yc(t,e){const n=Gs(t,!0).delete(e);return new Dr(n).toPromise()}const Mm=800,Lm=3;class Gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await to(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(Nm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dm(),!this.activeServiceWorker)return;this.sender=new Am(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await to();return await mc(e,Is,"1"),await yc(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$m(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gs(s,!1).getAll();return new Dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gu.type="LOCAL";const xm=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Um().appendChild(r)})}function Vm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new br(3e4,6e4);/**
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
 */function Wu(t,e){return e?lt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bm(t){return xu(t.auth,new jo(t),t.bypassAuthState)}function jm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ym(n,new jo(t),t.bypassAuthState)}async function qm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),mm(n,new jo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bm;case"linkViaPopup":case"linkViaRedirect":return qm;case"reauthViaPopup":case"reauthViaRedirect":return jm;default:Ge(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new br(2e3,1e4);async function Hm(t,e,n){const r=Ar(t);Ug(t,e,Vo);const s=Wu(r,n);return new Mt(r,"signInViaPopup",e,s).executeNotNull()}class Mt extends Qu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,zm.get())};e()}}Mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="pendingRedirect",cs=new Map;class Gm extends Qu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await Wm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wm(t,e){const n=Ym(e),r=Xm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qm(t,e){cs.set(t._key(),e)}function Xm(t){return lt(t._redirectPersistence)}function Ym(t){return as(Km,t.config.apiKey,t.name)}async function Jm(t,e,n=!1){const r=Ar(t),s=Wu(r,e),o=await new Gm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=10*60*1e3;class ey{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ty(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zm&&this.cachedEventUids.clear(),this.cachedEventUids.has(vc(e))}saveEventToCache(e){this.cachedEventUids.add(vc(e)),this.lastProcessedEventTime=Date.now()}}function vc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ty(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t,e={}){return Sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sy=/^https?/;async function iy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ny(t);for(const n of e)try{if(oy(n))return}catch{}Ge(t,"unauthorized-domain")}function oy(t){const e=eo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sy.test(n))return!1;if(ry.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ay=new br(3e4,6e4);function _c(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cy(t){return new Promise((e,n)=>{var r,s,i;function o(){_c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_c(),n(Ze(t,"network-request-failed"))},timeout:ay.get()})}if(!((s=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=Vm("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Fm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ls=null,e})}let ls=null;function ly(t){return ls=ls||cy(t),ls}/**
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
 */const uy=new br(5e3,15e3),hy="__/auth/iframe",dy="emulator/auth/iframe",fy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},py=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gy(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mo(e,dy):`https://${t.config.authDomain}/${hy}`,r={apiKey:e.apiKey,appName:t.name,v:Er},s=py.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ir(r).slice(1)}`}async function my(t){const e=await ly(t),n=et().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:gy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},uy.get());function c(){et().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vy=500,_y=600,wy="_blank",Iy="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(t,e,n,r=vy,s=_y){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yy),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=Du(l)?wy:n),Cu(l)&&(e=e||Iy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,p])=>`${d}${g}=${p},`,"");if(rm(l)&&a!=="_self")return by(e||"",a),new wc(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new wc(h)}function by(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ty="__/auth/handler",Sy="emulator/auth/handler";function Ic(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:s};if(e instanceof Vo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Cr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ky(t)}?${Ir(a).slice(1)}`}function ky({config:t}){return t.emulator?Mo(t,Sy):`https://${t.authDomain}/${Ty}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="webStorageSupport";class Ay{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qu,this._completeRedirectFn=Jm,this._overrideRedirectResult=Qm}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ic(e,n,r,eo(),s);return Ey(e,o,Bo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Cm(Ic(e,n,r,eo(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await my(e),r=new ey(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oi];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $u()||xo()||Hs()}}const Cy=Ay;var Ec="@firebase/auth",bc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ny(t){rt(new Qe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mu(t)},u=new am(a,c,l);return Vg(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rt(new Qe("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new Dy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Ec,bc,Ry(t)),ze(Ec,bc,"esm2017")}/**
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
 */function Oy(t=Oo()){const e=tn(t,"auth");return e.isInitialized()?e.getImmediate():Fg(t,{popupRedirectResolver:Cy,persistence:[xm,Bu,qu]})}Ny("Browser");const Yu="@firebase/installations",qo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=1e4,Zu=`w:${qo}`,eh="FIS_v2",Py="https://firebaseinstallations.googleapis.com/v1",$y=60*60*1e3,My="installations",Ly="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gt=new en(My,Ly,xy);function th(t){return t instanceof Xe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh({projectId:t}){return`${Py}/projects/${t}/installations`}function rh(t){return{token:t.token,requestStatus:2,expiresIn:Fy(t.expiresIn),creationTime:Date.now()}}async function sh(t,e){const r=(await e.json()).error;return Gt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ih({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Uy(t,{refreshToken:e}){const n=ih(t);return n.append("Authorization",Vy(e)),n}async function oh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Fy(t){return Number(t.replace("s","000"))}function Vy(t){return`${eh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=nh(t),s=ih(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:eh,appId:t.appId,sdkVersion:Zu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await oh(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:rh(l.authToken)}}else throw await sh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=/^[cdef][\w-]{21}$/,no="";function zy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Hy(t);return qy.test(n)?n:no}catch{return no}}function Hy(t){return jy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new Map;function lh(t,e){const n=Ws(t);uh(n,e),Ky(n,e)}function uh(t,e){const n=ch.get(t);if(!!n)for(const r of n)r(e)}function Ky(t,e){const n=Gy();n&&n.postMessage({key:t,fid:e}),Wy()}let Lt=null;function Gy(){return!Lt&&"BroadcastChannel"in self&&(Lt=new BroadcastChannel("[Firebase] FID Change"),Lt.onmessage=t=>{uh(t.data.key,t.data.fid)}),Lt}function Wy(){ch.size===0&&Lt&&(Lt.close(),Lt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="firebase-installations-database",Xy=1,Wt="firebase-installations-store";let Pi=null;function zo(){return Pi||(Pi=mu(Qy,Xy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wt)}}})),Pi}async function bs(t,e){const n=Ws(t),s=(await zo()).transaction(Wt,"readwrite"),i=s.objectStore(Wt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&lh(t,e.fid),e}async function hh(t){const e=Ws(t),r=(await zo()).transaction(Wt,"readwrite");await r.objectStore(Wt).delete(e),await r.done}async function Qs(t,e){const n=Ws(t),s=(await zo()).transaction(Wt,"readwrite"),i=s.objectStore(Wt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&lh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){let e;const n=await Qs(t.appConfig,r=>{const s=Yy(r),i=Jy(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===no?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Yy(t){const e=t||{fid:zy(),registrationStatus:0};return dh(e)}function Jy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Gt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Zy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ev(t)}:{installationEntry:e}}async function Zy(t,e){try{const n=await By(t,e);return bs(t.appConfig,n)}catch(n){throw th(n)&&n.customData.serverCode===409?await hh(t.appConfig):await bs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ev(t){let e=await Tc(t.appConfig);for(;e.registrationStatus===1;)await ah(100),e=await Tc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ho(t);return r||n}return e}function Tc(t){return Qs(t,e=>{if(!e)throw Gt.create("installation-not-found");return dh(e)})}function dh(t){return tv(t)?{fid:t.fid,registrationStatus:0}:t}function tv(t){return t.registrationStatus===1&&t.registrationTime+Ju<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv({appConfig:t,heartbeatServiceProvider:e},n){const r=rv(t,n),s=Uy(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Zu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await oh(()=>fetch(r,a));if(c.ok){const l=await c.json();return rh(l)}else throw await sh("Generate Auth Token",c)}function rv(t,{fid:e}){return`${nh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e=!1){let n;const r=await Qs(t.appConfig,i=>{if(!fh(i))throw Gt.create("not-registered");const o=i.authToken;if(!e&&ov(o))return i;if(o.requestStatus===1)return n=sv(t,e),i;{if(!navigator.onLine)throw Gt.create("app-offline");const a=cv(i);return n=iv(t,a),a}});return n?await n:r.authToken}async function sv(t,e){let n=await Sc(t.appConfig);for(;n.authToken.requestStatus===1;)await ah(100),n=await Sc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ko(t,e):r}function Sc(t){return Qs(t,e=>{if(!fh(e))throw Gt.create("not-registered");const n=e.authToken;return lv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iv(t,e){try{const n=await nv(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bs(t.appConfig,r),n}catch(n){if(th(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hh(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bs(t.appConfig,r)}throw n}}function fh(t){return t!==void 0&&t.registrationStatus===2}function ov(t){return t.requestStatus===2&&!av(t)}function av(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$y}function cv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lv(t){return t.requestStatus===1&&t.requestTime+Ju<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ho(e);return r?r.catch(console.error):Ko(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(t,e=!1){const n=t;return await dv(n),(await Ko(n,e)).token}async function dv(t){const{registrationPromise:e}=await Ho(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){if(!t||!t.options)throw $i("App Configuration");if(!t.name)throw $i("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $i(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $i(t){return Gt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="installations",pv="installations-internal",gv=t=>{const e=t.getProvider("app").getImmediate(),n=fv(e),r=tn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mv=t=>{const e=t.getProvider("app").getImmediate(),n=tn(e,ph).getImmediate();return{getId:()=>uv(n),getToken:s=>hv(n,s)}};function yv(){rt(new Qe(ph,gv,"PUBLIC")),rt(new Qe(pv,mv,"PRIVATE"))}yv();ze(Yu,qo);ze(Yu,qo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="analytics",vv="firebase_id",_v="origin",wv=60*1e3,Iv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new zs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ev(t,e){const n=document.createElement("script");n.src=`${gh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function bv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Tv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await mh(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ue.error(a)}t("config",s,i)}async function Sv(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await mh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ue.error(i)}}function kv(t,e,n,r){async function s(i,o,a){try{i==="event"?await Sv(t,e,n,o,a):i==="config"?await Tv(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ue.error(c)}}return s}function Av(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=kv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Cv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(gh))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},He=new en("analytics","Analytics",Dv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=30,Nv=1e3;class Ov{constructor(e={},n=Nv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yh=new Ov;function Pv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $v(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Pv(r)},i=Iv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Mv(t,e=yh,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw He.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw He.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Uv;return setTimeout(async()=>{a.abort()},n!==void 0?n:wv),vh({appId:r,apiKey:s,measurementId:i},o,a,e)}async function vh(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=yh){var i,o;const{appId:a,measurementId:c}=t;try{await Lv(r,e)}catch(l){if(c)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await $v(t);return s.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!xv(u)){if(s.deleteThrottleMetadata(a),c)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?tc(n,s.intervalMillis,Rv):tc(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,d),Ue.debug(`Calling attemptFetch again in ${h} millis`),vh(t,d,r,s)}}function Lv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xv(t){if(!(t instanceof Xe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Uv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Fv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(){var t;if(du())try{await fu()}catch(e){return Ue.warn(He.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ue.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Bv(t,e,n,r,s,i,o){var a;const c=Mv(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ue.error(g)),e.push(c);const l=Vv().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);Cv()||Ev(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[_v]="firebase",d.update=!0,h!=null&&(d[vv]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.app=e}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},kc=[];const Ac={};let Mi="dataLayer",qv="gtag",Cc,_h,Dc=!1;function zv(){const t=[];if(Ro()&&t.push("This is a browser extension environment."),wp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Ue.warn(n.message)}}function Hv(t,e,n){zv();const r=t.options.appId;if(!r)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(Qn[r]!=null)throw He.create("already-exists",{id:r});if(!Dc){bv(Mi);const{wrappedGtag:i,gtagCore:o}=Av(Qn,kc,Ac,Mi,qv);_h=i,Cc=o,Dc=!0}return Qn[r]=Bv(t,kc,Ac,e,Cc,Mi,n),new jv(t)}function Kv(t=Oo()){t=Ne(t);const e=tn(t,Ts);return e.isInitialized()?e.getImmediate():Gv(t)}function Gv(t,e={}){const n=tn(t,Ts);if(n.isInitialized()){const s=n.getImmediate();if(sr(e,n.getOptions()))return s;throw He.create("already-initialized")}return n.initialize({options:e})}function Wv(t,e,n,r){t=Ne(t),Fv(_h,Qn[t.app.options.appId],e,n,r).catch(s=>Ue.error(s))}const Rc="@firebase/analytics",Nc="0.8.0";function Qv(){rt(new Qe(Ts,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Hv(r,s,n)},"PUBLIC")),rt(new Qe("analytics-internal",t,"PRIVATE")),ze(Rc,Nc),ze(Rc,Nc,"esm2017");function t(e){try{const n=e.getProvider(Ts).getImmediate();return{logEvent:(r,s,i)=>Wv(n,r,s,i)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}Qv();var Xv="firebase",Yv="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Xv,Yv,"app");var Jv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,Go=Go||{},F=Jv||self;function Ss(){}function ro(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Zv(t){return Object.prototype.hasOwnProperty.call(t,Li)&&t[Li]||(t[Li]=++e_)}var Li="closure_uid_"+(1e9*Math.random()>>>0),e_=0;function t_(t,e,n){return t.call.apply(t.bind,arguments)}function n_(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=t_:be=n_,be.apply(null,arguments)}function Xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Dt(){this.s=this.s,this.o=this.o}var r_=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),r_!=0)&&Zv(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ih=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function s_(t){e:{var e=Q_;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Oc(t){return Array.prototype.concat.apply([],arguments)}function Wo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ks(t){return/^[\s\xa0]*$/.test(t)}var Pc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pe(t,e){return t.indexOf(e)!=-1}function xi(t,e){return t<e?-1:t>e?1:0}var $e;e:{var $c=F.navigator;if($c){var Mc=$c.userAgent;if(Mc){$e=Mc;break e}}$e=""}function Qo(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Eh(t){const e={};for(const n in t)e[n]=t[n];return e}var Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bh(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Lc.length;i++)n=Lc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xo(t){return Xo[" "](t),t}Xo[" "]=Ss;function i_(t){var e=c_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var o_=Pe($e,"Opera"),wn=Pe($e,"Trident")||Pe($e,"MSIE"),Th=Pe($e,"Edge"),so=Th||wn,Sh=Pe($e,"Gecko")&&!(Pe($e.toLowerCase(),"webkit")&&!Pe($e,"Edge"))&&!(Pe($e,"Trident")||Pe($e,"MSIE"))&&!Pe($e,"Edge"),a_=Pe($e.toLowerCase(),"webkit")&&!Pe($e,"Edge");function kh(){var t=F.document;return t?t.documentMode:void 0}var As;e:{var Ui="",Fi=function(){var t=$e;if(Sh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Th)return/Edge\/([\d\.]+)/.exec(t);if(wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(a_)return/WebKit\/(\S+)/.exec(t);if(o_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fi&&(Ui=Fi?Fi[1]:""),wn){var Vi=kh();if(Vi!=null&&Vi>parseFloat(Ui)){As=String(Vi);break e}}As=Ui}var c_={};function l_(){return i_(function(){let t=0;const e=Pc(String(As)).split("."),n=Pc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=xi(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||xi(s[2].length==0,i[2].length==0)||xi(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var io;if(F.document&&wn){var xc=kh();io=xc||parseInt(As,10)||void 0}else io=void 0;var u_=io,h_=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Ss,e),F.removeEventListener("test",Ss,e)}catch{}return t}();function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};function lr(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sh){e:{try{Xo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:d_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lr.Z.h.call(this)}}Ce(lr,Re);var d_={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),f_=0;function p_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++f_,this.ca=this.fa=!1}function Xs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ys(t){this.src=t,this.g={},this.h=0}Ys.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ao(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new p_(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function oo(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=wh(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ao(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Yo="closure_lm_"+(1e6*Math.random()|0),Bi={};function Ah(t,e,n,r,s){if(r&&r.once)return Dh(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ah(t,e[i],n,r,s);return null}return n=ea(n),t&&t[Nr]?t.N(e,n,Rr(r)?!!r.capture:!!r,s):Ch(t,e,n,!1,r,s)}function Ch(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Rr(s)?!!s.capture:!!s,a=Zo(t);if(a||(t[Yo]=a=new Ys(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=g_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)h_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Nh(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function g_(){function t(n){return e.call(t.src,t.listener,n)}var e=m_;return t}function Dh(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dh(t,e[i],n,r,s);return null}return n=ea(n),t&&t[Nr]?t.O(e,n,Rr(r)?!!r.capture:!!r,s):Ch(t,e,n,!0,r,s)}function Rh(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rh(t,e[i],n,r,s);else r=Rr(r)?!!r.capture:!!r,n=ea(n),t&&t[Nr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ao(i,n,r,s),-1<n&&(Xs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ao(e,n,r,s)),(n=-1<t?e[t]:null)&&Jo(n))}function Jo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Nr])oo(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Nh(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zo(e))?(oo(n,t),n.h==0&&(n.src=null,e[Yo]=null)):Xs(t)}}}function Nh(t){return t in Bi?Bi[t]:Bi[t]="on"+t}function m_(t,e){if(t.ca)t=!0;else{e=new lr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Jo(t),t=n.call(r,e)}return t}function Zo(t){return t=t[Yo],t instanceof Ys?t:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(t){return typeof t=="function"?t:(t[ji]||(t[ji]=function(e){return t.handleEvent(e)}),t[ji])}function _e(){Dt.call(this),this.i=new Ys(this),this.P=this,this.I=null}Ce(_e,Dt);_e.prototype[Nr]=!0;_e.prototype.removeEventListener=function(t,e,n,r){Rh(this,t,e,n,r)};function Te(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var s=e;e=new Re(r,t),bh(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Yr(o,r,!0,e)&&s}if(o=e.g=t,s=Yr(o,r,!0,e)&&s,s=Yr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Yr(o,r,!1,e)&&s}_e.prototype.M=function(){if(_e.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xs(n[r]);delete t.g[e],t.h--}}this.I=null};_e.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};_e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&oo(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ta=F.JSON.stringify;function y_(){var t=Ph;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class v_{constructor(){this.h=this.g=null}add(e,n){const r=Oh.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Oh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new __,t=>t.reset());class __{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function w_(t){F.setTimeout(()=>{throw t},0)}function na(t,e){co||I_(),lo||(co(),lo=!0),Ph.add(t,e)}var co;function I_(){var t=F.Promise.resolve(void 0);co=function(){t.then(E_)}}var lo=!1,Ph=new v_;function E_(){for(var t;t=y_();){try{t.h.call(t.g)}catch(n){w_(n)}var e=Oh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}lo=!1}function Js(t,e){_e.call(this),this.h=t||1,this.g=e||F,this.j=be(this.kb,this),this.l=Date.now()}Ce(Js,_e);C=Js.prototype;C.da=!1;C.S=null;C.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(ra(this),this.start()))}};C.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ra(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}C.M=function(){Js.Z.M.call(this),ra(this),delete this.g};function sa(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function $h(t){t.g=sa(()=>{t.g=null,t.i&&(t.i=!1,$h(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class b_ extends Dt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$h(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(t){Dt.call(this),this.h=t,this.g={}}Ce(ur,Dt);var Uc=[];function Mh(t,e,n,r){Array.isArray(n)||(n&&(Uc[0]=n.toString()),n=Uc);for(var s=0;s<n.length;s++){var i=Ah(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Lh(t){Qo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jo(e)},t),t.g={}}ur.prototype.M=function(){ur.Z.M.call(this),Lh(this)};ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zs(){this.g=!0}Zs.prototype.Aa=function(){this.g=!1};function T_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function S_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function hn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+A_(t,n)+(r?" "+r:"")})}function k_(t,e){t.info(function(){return"TIMEOUT: "+e})}Zs.prototype.info=function(){};function A_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ta(n)}catch{return e}}var nn={},Fc=null;function ei(){return Fc=Fc||new _e}nn.Ma="serverreachability";function xh(t){Re.call(this,nn.Ma,t)}Ce(xh,Re);function hr(t){const e=ei();Te(e,new xh(e,t))}nn.STAT_EVENT="statevent";function Uh(t,e){Re.call(this,nn.STAT_EVENT,t),this.stat=e}Ce(Uh,Re);function Me(t){const e=ei();Te(e,new Uh(e,t))}nn.Na="timingevent";function Fh(t,e){Re.call(this,nn.Na,t),this.size=e}Ce(Fh,Re);function Or(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var ti={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ia(){}ia.prototype.h=null;function Vc(t){return t.h||(t.h=t.i())}function Bh(){}var Pr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function oa(){Re.call(this,"d")}Ce(oa,Re);function aa(){Re.call(this,"c")}Ce(aa,Re);var uo;function ni(){}Ce(ni,ia);ni.prototype.g=function(){return new XMLHttpRequest};ni.prototype.i=function(){return{}};uo=new ni;function $r(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ur(this),this.P=C_,t=so?125:void 0,this.W=new Js(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var C_=45e3,ho={},Cs={};C=$r.prototype;C.setTimeout=function(t){this.P=t};function fo(t,e,n){t.K=1,t.v=si(ft(e)),t.s=n,t.U=!0,qh(t,null)}function qh(t,e){t.F=Date.now(),Mr(t),t.A=ft(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Xh(n.h,"t",r),t.C=0,n=t.l.H,t.h=new jh,t.g=md(t.l,n?e:null,!t.s),0<t.O&&(t.L=new b_(be(t.Ia,t,t.g),t.O)),Mh(t.V,t.g,"readystatechange",t.gb),e=t.H?Eh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hr(1),T_(t.j,t.u,t.A,t.m,t.X,t.s)}C.gb=function(t){t=t.target;const e=this.L;e&&ut(t)==3?e.l():this.Ia(t)};C.Ia=function(t){try{if(t==this.g)e:{const u=ut(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||so||this.g&&(this.h.h||this.g.ga()||zc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?hr(3):hr(2)),ri(this);var n=this.g.ba();this.N=n;t:if(zh(this)){var r=zc(this.g);t="";var s=r.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){xt(this),Xn(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,S_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ks(a)){var l=a;break t}}l=null}if(n=l)hn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,po(this,n);else{this.i=!1,this.o=3,Me(12),xt(this),Xn(this);break e}}this.U?(Hh(this,u,o),so&&this.i&&u==3&&(Mh(this.V,this.W,"tick",this.fb),this.W.start())):(hn(this.j,this.m,o,null),po(this,o)),u==4&&xt(this),this.i&&!this.I&&(u==4?dd(this.l,this):(this.i=!1,Mr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),xt(this),Xn(this)}}}catch{}finally{}};function zh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Hh(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=D_(t,n),s==Cs){e==4&&(t.o=4,Me(14),r=!1),hn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ho){t.o=4,Me(15),hn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hn(t.j,t.m,s,null),po(t,s);zh(t)&&s!=Cs&&s!=ho&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ma(e),e.L=!0,Me(11))):(hn(t.j,t.m,n,"[Invalid Chunked Response]"),xt(t),Xn(t))}C.fb=function(){if(this.g){var t=ut(this.g),e=this.g.ga();this.C<e.length&&(ri(this),Hh(this,t,e),this.i&&t!=4&&Mr(this))}};function D_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Cs:(n=Number(e.substring(n,r)),isNaN(n)?ho:(r+=1,r+n>e.length?Cs:(e=e.substr(r,n),t.C=r+n,e)))}C.cancel=function(){this.I=!0,xt(this)};function Mr(t){t.Y=Date.now()+t.P,Kh(t,t.P)}function Kh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Or(be(t.eb,t),e)}function ri(t){t.B&&(F.clearTimeout(t.B),t.B=null)}C.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(k_(this.j,this.A),this.K!=2&&(hr(3),Me(17)),xt(this),this.o=2,Xn(this)):Kh(this,this.Y-t)};function Xn(t){t.l.G==0||t.I||dd(t.l,t)}function xt(t){ri(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ra(t.W),Lh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function po(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||go(n.i,t))){if(n.I=t.N,!t.J&&go(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Os(n),ai(n);else break e;ga(n),Me(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Or(be(n.ab,n),6e3));if(1>=Zh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ut(n,11)}else if((t.J||n.g==t)&&Os(n),!ks(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(Pe(p,"spdy")||Pe(p,"quic")||Pe(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ua(i,i.h),i.h=null))}if(r.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,ce(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=gd(r,r.H?r.la:null,r.W),o.J){ed(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ri(a),Mr(a)),r.g=o}else ud(r);0<n.l.length&&ci(n)}else l[0]!="stop"&&l[0]!="close"||Ut(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ut(n,7):pa(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}hr(4)}catch{}}function R_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ro(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ca(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ro(t)||typeof t=="string")Ih(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ro(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=R_(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function On(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof On)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}C=On.prototype;C.R=function(){la(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};C.T=function(){return la(this),this.g.concat()};function la(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Qt(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Qt(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}C.get=function(t,e){return Qt(this.h,t)?this.h[t]:e};C.set=function(t,e){Qt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};C.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Gh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function N_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xt){this.g=e!==void 0?e:t.g,Ds(this,t.j),this.s=t.s,Rs(this,t.i),Ns(this,t.m),this.l=t.l,e=t.h;var n=new dr;n.i=e.i,e.g&&(n.g=new On(e.g),n.h=e.h),Bc(this,n),this.o=t.o}else t&&(n=String(t).match(Gh))?(this.g=!!e,Ds(this,n[1]||"",!0),this.s=Yn(n[2]||""),Rs(this,n[3]||"",!0),Ns(this,n[4]),this.l=Yn(n[5]||"",!0),Bc(this,n[6]||"",!0),this.o=Yn(n[7]||"")):(this.g=!!e,this.h=new dr(null,this.g))}Xt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hn(e,jc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hn(e,jc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Hn(n,n.charAt(0)=="/"?L_:M_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hn(n,U_)),t.join("")};function ft(t){return new Xt(t)}function Ds(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rs(t,e,n){t.i=n?Yn(e,!0):e}function Ns(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bc(t,e,n){e instanceof dr?(t.h=e,F_(t.h,t.g)):(n||(e=Hn(e,x_)),t.h=new dr(e,t.g))}function ce(t,e,n){t.h.set(e,n)}function si(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function O_(t){return t instanceof Xt?ft(t):new Xt(t,void 0)}function P_(t,e,n,r){var s=new Xt(null,void 0);return t&&Ds(s,t),e&&Rs(s,e),n&&Ns(s,n),r&&(s.l=r),s}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jc=/[#\/\?@]/g,M_=/[#\?:]/g,L_=/[#\?]/g,x_=/[#\?@]/g,U_=/#/g;function dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rt(t){t.g||(t.g=new On,t.h=0,t.i&&N_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=dr.prototype;C.add=function(t,e){Rt(this),this.i=null,t=Pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wh(t,e){Rt(t),e=Pn(t,e),Qt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Qt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&la(t)))}function Qh(t,e){return Rt(t),e=Pn(t,e),Qt(t.g.h,e)}C.forEach=function(t,e){Rt(this),this.g.forEach(function(n,r){Ih(n,function(s){t.call(e,s,r,this)},this)},this)};C.T=function(){Rt(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};C.R=function(t){Rt(this);var e=[];if(typeof t=="string")Qh(this,t)&&(e=Oc(e,this.g.get(Pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Oc(e,t[n])}return e};C.set=function(t,e){return Rt(this),this.i=null,t=Pn(this,t),Qh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Xh(t,e,n){Wh(t,e),0<n.length&&(t.i=null,t.g.set(Pn(t,e),Wo(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function F_(t,e){e&&!t.j&&(Rt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Wh(this,r),Xh(this,s,n))},t)),t.j=e}var V_=class{constructor(t,e){this.h=t,this.g=e}};function Yh(t){this.l=t||B_,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var B_=10;function Jh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zh(t){return t.h?1:t.g?t.g.size:0}function go(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ua(t,e){t.g?t.g.add(e):t.h=e}function ed(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yh.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function td(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wo(t.i)}function ha(){}ha.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};ha.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function j_(){this.g=new ha}function q_(t,e,n){const r=n||"";try{ca(t,function(s,i){let o=s;Rr(s)&&(o=ta(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function z_(t,e){const n=new Zs;if(F.Image){const r=new Image;r.onload=Xr(Jr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xr(Jr,n,r,"TestLoadImage: error",!1,e),r.onabort=Xr(Jr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xr(Jr,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Jr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Lr(t){this.l=t.$b||null,this.j=t.ib||!1}Ce(Lr,ia);Lr.prototype.g=function(){return new ii(this.l,this.j)};Lr.prototype.i=function(t){return function(){return t}}({});function ii(t,e){_e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=da,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(ii,_e);var da=0;C=ii.prototype;C.open=function(t,e){if(this.readyState!=da)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fr(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=da};C.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fr(this)),this.g&&(this.readyState=3,fr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function nd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}C.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xr(this):fr(this),this.readyState==3&&nd(this)}};C.Ua=function(t){this.g&&(this.response=this.responseText=t,xr(this))};C.Ta=function(t){this.g&&(this.response=t,xr(this))};C.ha=function(){this.g&&xr(this)};function xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fr(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var H_=F.JSON.parse;function fe(t){_e.call(this),this.headers=new On,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rd,this.K=this.L=!1}Ce(fe,_e);var rd="",K_=/^https?$/i,G_=["POST","PUT"];C=fe.prototype;C.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():uo.g(),this.C=this.u?Vc(this.u):Vc(uo),this.g.onreadystatechange=be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){qc(this,i);return}t=n||"";const s=new On(this.headers);r&&ca(r,function(i,o){s.set(o,i)}),r=s_(s.T()),n=F.FormData&&t instanceof F.FormData,!(0<=wh(G_,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{od(this),0<this.B&&((this.K=W_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.pa,this)):this.A=sa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){qc(this,i)}};function W_(t){return wn&&l_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Q_(t){return t.toLowerCase()=="content-type"}C.pa=function(){typeof Go!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function qc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sd(t),oi(t)}function sd(t){t.D||(t.D=!0,Te(t,"complete"),Te(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Te(this,"complete"),Te(this,"abort"),oi(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oi(this,!0)),fe.Z.M.call(this)};C.Fa=function(){this.s||(this.F||this.v||this.l?id(this):this.cb())};C.cb=function(){id(this)};function id(t){if(t.h&&typeof Go!="undefined"&&(!t.C[1]||ut(t)!=4||t.ba()!=2)){if(t.v&&ut(t)==4)sa(t.Fa,0,t);else if(Te(t,"readystatechange"),ut(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Gh)[1]||null;if(!s&&F.self&&F.self.location){var i=F.self.location.protocol;s=i.substr(0,i.length-1)}r=!K_.test(s?s.toLowerCase():"")}n=r}if(n)Te(t,"complete"),Te(t,"success");else{t.m=6;try{var o=2<ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",sd(t)}}finally{oi(t)}}}}function oi(t,e){if(t.g){od(t);const n=t.g,r=t.C[0]?Ss:null;t.g=null,t.C=null,e||Te(t,"ready");try{n.onreadystatechange=r}catch{}}}function od(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function ut(t){return t.g?t.g.readyState:0}C.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};C.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),H_(e)}};function zc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Da=function(){return this.m};C.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function X_(t){let e="";return Qo(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fa(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=X_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function Fn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ad(t){this.za=0,this.l=[],this.h=new Zs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fn("baseRetryDelayMs",5e3,t),this.$a=Fn("retryDelaySeedMs",1e4,t),this.Ya=Fn("forwardChannelMaxRetries",2,t),this.ra=Fn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Yh(t&&t.concurrentRequestLimit),this.Ca=new j_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}C=ad.prototype;C.ma=8;C.G=1;function pa(t){if(cd(t),t.G==3){var e=t.V++,n=ft(t.F);ce(n,"SID",t.J),ce(n,"RID",e),ce(n,"TYPE","terminate"),Ur(t,n),e=new $r(t,t.h,e,void 0),e.K=2,e.v=si(ft(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=md(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Mr(e)}pd(t)}C.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ai(t){t.g&&(ma(t),t.g.cancel(),t.g=null)}function cd(t){ai(t),t.u&&(F.clearTimeout(t.u),t.u=null),Os(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function qi(t,e){t.l.push(new V_(t.Za++,e)),t.G==3&&ci(t)}function ci(t){Jh(t.i)||t.m||(t.m=!0,na(t.Ha,t),t.C=0)}function Y_(t,e){return Zh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Or(be(t.Ha,t,e),fd(t,t.C)),t.C++,!0)}C.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new $r(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Eh(i),bh(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ld(this,s,e),n=ft(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Ur(this,n),this.o&&i&&fa(n,this.o,i),ua(this.i,s),this.Ra&&ce(n,"TYPE","init"),this.ja?(ce(n,"$req",e),ce(n,"SID","null"),s.$=!0,fo(s,n,null)):fo(s,n,e),this.G=2}}else this.G==3&&(t?Hc(this,t):this.l.length==0||Jh(this.i)||Hc(this))};function Hc(t,e){var n;e?n=e.m:n=t.V++;const r=ft(t.F);ce(r,"SID",t.J),ce(r,"RID",n),ce(r,"AID",t.U),Ur(t,r),t.o&&t.s&&fa(r,t.o,t.s),n=new $r(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ld(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ua(t.i,n),fo(n,r,e)}function Ur(t,e){t.j&&ca({},function(n,r){ce(e,r,n)})}function ld(t,e,n){n=Math.min(t.l.length,n);var r=t.j?be(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{q_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ud(t){t.g||t.u||(t.Y=1,na(t.Ga,t),t.A=0)}function ga(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Or(be(t.Ga,t),fd(t,t.A)),t.A++,!0)}C.Ga=function(){if(this.u=null,hd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Or(be(this.bb,this),t)}};C.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Me(10),ai(this),hd(this))};function ma(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function hd(t){t.g=new $r(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ft(t.oa);ce(e,"RID","rpc"),ce(e,"SID",t.J),ce(e,"CI",t.N?"0":"1"),ce(e,"AID",t.U),Ur(t,e),ce(e,"TYPE","xmlhttp"),t.o&&t.s&&fa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=si(ft(e)),n.s=null,n.U=!0,qh(n,t)}C.ab=function(){this.v!=null&&(this.v=null,ai(this),ga(this),Me(19))};function Os(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function dd(t,e){var n=null;if(t.g==e){Os(t),ma(t),t.g=null;var r=2}else if(go(t.i,e))n=e.D,ed(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ei(),Te(r,new Fh(r,n,e,s)),ci(t)}else ud(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&Y_(t,e)||r==2&&ga(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ut(t,5);break;case 4:Ut(t,10);break;case 3:Ut(t,6);break;default:Ut(t,2)}}}function fd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ut(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=be(t.jb,t);n||(n=new Xt("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ds(n,"https"),si(n)),z_(n.toString(),r)}else Me(2);t.G=0,t.j&&t.j.va(e),pd(t),cd(t)}C.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Me(2)):(this.h.info("Failed to ping google.com"),Me(1))};function pd(t){t.G=0,t.I=-1,t.j&&((td(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Wo(t.l),t.l.length=0),t.j.ua())}function gd(t,e,n){let r=O_(n);if(r.i!="")e&&Rs(r,e+"."+r.i),Ns(r,r.m);else{const s=F.location;r=P_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Qo(t.aa,function(s,i){ce(r,i,s)}),e=t.D,n=t.sa,e&&n&&ce(r,e,n),ce(r,"VER",t.ma),Ur(t,r),r}function md(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new fe(new Lr({ib:!0})):new fe(t.qa),e.L=t.H,e}function yd(){}C=yd.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Oa=function(){};function Ps(){if(wn&&!(10<=Number(u_)))throw Error("Environmental error: no available transport.")}Ps.prototype.g=function(t,e){return new Ve(t,e)};function Ve(t,e){_e.call(this),this.g=new ad(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ks(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ks(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}Ce(Ve,_e);Ve.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),na(be(t.hb,t,e))),Me(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=gd(t,null,t.W),ci(t)};Ve.prototype.close=function(){pa(this.g)};Ve.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,qi(this.g,e)}else this.v?(e={},e.__data__=ta(t),qi(this.g,e)):qi(this.g,t)};Ve.prototype.M=function(){this.g.j=null,delete this.j,pa(this.g),delete this.g,Ve.Z.M.call(this)};function vd(t){oa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(vd,oa);function _d(){aa.call(this),this.status=1}Ce(_d,aa);function $n(t){this.g=t}Ce($n,yd);$n.prototype.xa=function(){Te(this.g,"a")};$n.prototype.wa=function(t){Te(this.g,new vd(t))};$n.prototype.va=function(t){Te(this.g,new _d(t))};$n.prototype.ua=function(){Te(this.g,"b")};Ps.prototype.createWebChannel=Ps.prototype.g;Ve.prototype.send=Ve.prototype.u;Ve.prototype.open=Ve.prototype.m;Ve.prototype.close=Ve.prototype.close;ti.NO_ERROR=0;ti.TIMEOUT=8;ti.HTTP_ERROR=6;Vh.COMPLETE="complete";Bh.EventType=Pr;Pr.OPEN="a";Pr.CLOSE="b";Pr.ERROR="c";Pr.MESSAGE="d";_e.prototype.listen=_e.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.La;fe.prototype.getLastErrorCode=fe.prototype.Da;fe.prototype.getStatus=fe.prototype.ba;fe.prototype.getResponseJson=fe.prototype.Qa;fe.prototype.getResponseText=fe.prototype.ga;fe.prototype.send=fe.prototype.ea;var J_=function(){return new Ps},Z_=function(){return ei()},zi=ti,ew=Vh,tw=nn,Kc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},nw=Lr,Zr=Bh,rw=fe;const Gc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new zs("@firebase/firestore");function Wc(){return Yt.logLevel}function P(t,...e){if(Yt.logLevel<=ne.DEBUG){const n=e.map(ya);Yt.debug(`Firestore (${Mn}): ${t}`,...n)}}function pt(t,...e){if(Yt.logLevel<=ne.ERROR){const n=e.map(ya);Yt.error(`Firestore (${Mn}): ${t}`,...n)}}function Qc(t,...e){if(Yt.logLevel<=ne.WARN){const n=e.map(ya);Yt.warn(`Firestore (${Mn}): ${t}`,...n)}}function ya(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function ie(t,e){t||B()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Xe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class ow{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new sw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Le(e)}}class aw{constructor(e,n,r){this.type="FirstParty",this.user=Le.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class cw{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new aw(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.p=n.token,new lw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function In(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new pe(0,0))}static max(){return new K(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends pr{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new le(n)}static emptyPath(){return new le([])}}const dw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends pr{construct(e,n,r){return new De(e,n,r)}static isValidIdentifier(e){return dw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}function fw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new St(s,$.empty(),e)}function pw(t){return new St(t.readTime,t.key,-1)}class St{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new St(K.min(),$.empty(),-1)}static max(){return new St(K.max(),$.empty(),-1)}}function gw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==mw)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(s=>s?I.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new I((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new I((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Vr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class va{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ln(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */va.ot=-1;class me{constructor(e,n){this.comparator=e,this.root=n||we.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:we.RED,this.left=s!=null?s:we.EMPTY,this.right=i!=null?i:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new we(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,s){return this}insert(t,e,n){return new we(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yc(this.data.getIterator())}getIteratorFrom(e){return new Yc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class Yc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new tt([])}unionWith(e){let n=new ge(De.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ae(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(t){if(ie(!!t),typeof t=="string"){let e=0;const n=vw.exec(t);if(ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function En(t){return typeof t=="string"?Ae.fromBase64String(t):Ae.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bd(t){const e=t.mapValue.fields.__previous_value__;return Ed(e)?bd(e):e}function gr(t){const e=kt(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class bn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return t==null}function $s(t){return t===0&&1/t==-1/0}function ww(t){return typeof t=="number"&&Number.isInteger(t)&&!$s(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ed(t)?4:Iw(t)?9007199254740991:10:B()}function st(t,e){if(t===e)return!0;const n=Jt(t);if(n!==Jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gr(t).isEqual(gr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=kt(r.timestampValue),o=kt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return En(r.bytesValue).isEqual(En(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return de(r.geoPointValue.latitude)===de(s.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return de(r.integerValue)===de(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=de(r.doubleValue),o=de(s.doubleValue);return i===o?$s(i)===$s(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return In(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Xc(i)!==Xc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!st(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function mr(t,e){return(t.values||[]).find(n=>st(n,e))!==void 0}function Tn(t,e){if(t===e)return 0;const n=Jt(t),r=Jt(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=de(s.integerValue||s.doubleValue),a=de(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jc(t.timestampValue,e.timestampValue);case 4:return Jc(gr(t),gr(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,i){const o=En(s),a=En(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=re(o[c],a[c]);if(l!==0)return l}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=re(de(s.latitude),de(i.latitude));return o!==0?o:re(de(s.longitude),de(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Tn(o[c],a[c]);if(l)return l}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ts.mapValue&&i===ts.mapValue)return 0;if(s===ts.mapValue)return 1;if(i===ts.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=re(a[u],l[u]);if(h!==0)return h;const d=Tn(o[a[u]],c[l[u]]);if(d!==0)return d}return re(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function Jc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=kt(t),r=kt(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function mn(t){return mo(t)}function mo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=kt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?En(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=mo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${mo(r.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function yo(t){return!!t&&"integerValue"in t}function _a(t){return!!t&&"arrayValue"in t}function Zc(t){return!!t&&"nullValue"in t}function el(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function us(t){return!!t&&"mapValue"in t}function Jn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ln(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Iw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!us(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jn(n)}setAll(e){let n=De.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Jn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());us(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ln(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(Jn(this.value))}}function Td(t){const e=[];return Ln(t.fields,(n,r)=>{const s=new De([n]);if(us(r)){const i=Td(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ie(e,0,K.min(),K.min(),je.empty(),0)}static newFoundDocument(e,n,r){return new Ie(e,1,n,K.min(),r,0)}static newNoDocument(e,n){return new Ie(e,2,n,K.min(),je.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,K.min(),je.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function tl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ew(t,e,n,r,s,i,o)}function wa(t){const e=z(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+mn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),li(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mn(r)).join(",")),e.ut=n}return e.ut}function bw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${mn(r.value)}`;var r}).join(", ")}]`),li(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>mn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>mn(n)).join(",")),`Target(${e})`}function Ia(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Nw(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!st(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rl(t.startAt,e.startAt)&&rl(t.endAt,e.endAt)}function vo(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new Tw(e,n,r):n==="array-contains"?new Aw(e,r):n==="in"?new Cw(e,r):n==="not-in"?new Dw(e,r):n==="array-contains-any"?new Rw(e,r):new xe(e,n,r)}static ct(e,n,r){return n==="in"?new Sw(e,r):new kw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Tn(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.at(Tn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Tw extends xe{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.at(n)}}class Sw extends xe{constructor(e,n){super(e,"in",n),this.keys=Sd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kw extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Sd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Aw extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _a(n)&&mr(n.arrayValue,this.value)}}class Cw extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mr(this.value.arrayValue,n)}}class Dw extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mr(this.value.arrayValue,n)}}class Rw extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mr(this.value.arrayValue,r))}}class Ms{constructor(e,n){this.position=e,this.inclusive=n}}class Zn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Nw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nl(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Tn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ow(t,e,n,r,s,i,o,a){return new ui(t,e,n,r,s,i,o,a)}function Ea(t){return new ui(t)}function sl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $w(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Mw(t){return t.collectionGroup!==null}function yr(t){const e=z(t);if(e.lt===null){e.lt=[];const n=$w(e),r=Pw(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Zn(n)),e.lt.push(new Zn(De.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Zn(De.keyField(),i))}}}return e.lt}function gt(t){const e=z(t);if(!e.ft)if(e.limitType==="F")e.ft=tl(e.path,e.collectionGroup,yr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of yr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Zn(i.field,o))}const r=e.endAt?new Ms(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ms(e.startAt.position,e.startAt.inclusive):null;e.ft=tl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function _o(t,e,n){return new ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hi(t,e){return Ia(gt(t),gt(e))&&t.limitType===e.limitType}function kd(t){return`${wa(gt(t))}|lt:${t.limitType}`}function wo(t){return`Query(target=${bw(gt(t))}; limitType=${t.limitType})`}function ba(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):$.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=nl(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,yr(n),r)||n.endAt&&!function(s,i,o){const a=nl(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,yr(n),r))}(t,e)}function Lw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ad(t){return(e,n)=>{let r=!1;for(const s of yr(t)){const i=xw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xw(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Tn(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function Dd(t){return{integerValue:""+t}}function Uw(t,e){return ww(e)?Dd(e):Cd(t,e)}/**
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
 */class di{constructor(){this._=void 0}}function Fw(t,e,n){return t instanceof Ls?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof vr?Nd(t,e):t instanceof _r?Od(t,e):function(r,s){const i=Rd(r,s),o=il(i)+il(r._t);return yo(i)&&yo(r._t)?Dd(o):Cd(r.wt,o)}(t,e)}function Vw(t,e,n){return t instanceof vr?Nd(t,e):t instanceof _r?Od(t,e):n}function Rd(t,e){return t instanceof xs?yo(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ls extends di{}class vr extends di{constructor(e){super(),this.elements=e}}function Nd(t,e){const n=Pd(e);for(const r of t.elements)n.some(s=>st(s,r))||n.push(r);return{arrayValue:{values:n}}}class _r extends di{constructor(e){super(),this.elements=e}}function Od(t,e){let n=Pd(e);for(const r of t.elements)n=n.filter(s=>!st(s,r));return{arrayValue:{values:n}}}class xs extends di{constructor(e,n){super(),this.wt=e,this._t=n}}function il(t){return de(t.integerValue||t.doubleValue)}function Pd(t){return _a(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Bw(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vr&&r instanceof vr||n instanceof _r&&r instanceof _r?In(n.elements,r.elements,st):n instanceof xs&&r instanceof xs?st(n._t,r._t):n instanceof Ls&&r instanceof Ls}(t.transform,e.transform)}class jw{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fi{}function $d(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ta(t.key,nt.none()):new Br(t.key,t.data,nt.none());{const n=t.data,r=je.empty();let s=new ge(De.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rn(t.key,r,new tt(s.toArray()),nt.none())}}function qw(t,e,n){t instanceof Br?function(r,s,i){const o=r.value.clone(),a=al(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rn?function(r,s,i){if(!hs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=al(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Md(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function er(t,e,n,r){return t instanceof Br?function(s,i,o,a){if(!hs(s.precondition,i))return o;const c=s.value.clone(),l=cl(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof rn?function(s,i,o,a){if(!hs(s.precondition,i))return o;const c=cl(s.fieldTransforms,a,i),l=i.data;return l.setAll(Md(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return hs(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function zw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rd(r.transform,s||null);i!=null&&(n===null&&(n=je.empty()),n.set(r.field,i))}return n||null}function ol(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&In(n,r,(s,i)=>Bw(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Br extends fi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rn extends fi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Md(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function al(t,e,n){const r=new Map;ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Vw(o,a,n[s]))}return r}function cl(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Fw(i,o,e))}return r}class Ta extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hw extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,X;function Gw(t){switch(t){default:return B();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ld(t){if(t===void 0)return pt("GRPC error has no .code"),E.UNKNOWN;switch(t){case he.OK:return E.OK;case he.CANCELLED:return E.CANCELLED;case he.UNKNOWN:return E.UNKNOWN;case he.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case he.INTERNAL:return E.INTERNAL;case he.UNAVAILABLE:return E.UNAVAILABLE;case he.UNAUTHENTICATED:return E.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case he.NOT_FOUND:return E.NOT_FOUND;case he.ALREADY_EXISTS:return E.ALREADY_EXISTS;case he.PERMISSION_DENIED:return E.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case he.ABORTED:return E.ABORTED;case he.OUT_OF_RANGE:return E.OUT_OF_RANGE;case he.UNIMPLEMENTED:return E.UNIMPLEMENTED;case he.DATA_LOSS:return E.DATA_LOSS;default:return B()}}(X=he||(he={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Id(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new me($.comparator);function mt(){return Ww}const xd=new me($.comparator);function Kn(...t){let e=xd;for(const n of t)e=e.insert(n.key,n);return e}function Ud(t){let e=xd;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ft(){return tr()}function Fd(){return tr()}function tr(){return new xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qw=new me($.comparator),Xw=new ge($.comparator);function W(...t){let e=Xw;for(const n of t)e=e.add(n);return e}const Yw=new ge(re);function Vd(){return Yw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,n)),new pi(K.min(),r,Vd(),mt(),W())}}class jr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new jr(Ae.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class Bd{constructor(e,n){this.targetId=e,this.It=n}}class jd{constructor(e,n,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ll{constructor(){this.Tt=0,this.Et=hl(),this.At=Ae.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=W(),n=W(),r=W();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:B()}}),new jr(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=hl()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Jw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=mt(),this.Bt=ul(),this.Lt=new ge(re)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(vo(i))if(r===0){const o=new $(i.path);this.Kt(n,o,Ie.newNoDocument(o,K.min()))}else ie(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&vo(a.target)){const c=new $(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ie.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=W();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new pi(e,n,this.Lt,this.$t,r);return this.$t=mt(),this.Bt=ul(),this.Lt=new ge(re),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ll,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ge(re),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new ll),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function ul(){return new me($.comparator)}function hl(){return new me($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),e0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class t0{constructor(e,n){this.databaseId=e,this.dt=n}}function Us(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function n0(t,e){return Us(t,e.toTimestamp())}function ht(t){return ie(!!t),K.fromTimestamp(function(e){const n=kt(e);return new pe(n.seconds,n.nanos)}(t))}function Sa(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zd(t){const e=le.fromString(t);return ie(Gd(e)),e}function Io(t,e){return Sa(t.databaseId,e.path)}function Hi(t,e){const n=zd(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Hd(n))}function Eo(t,e){return Sa(t.databaseId,e)}function r0(t){const e=zd(t);return e.length===4?le.emptyPath():Hd(e)}function bo(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hd(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dl(t,e,n){return{name:Io(t,e),fields:n.value.mapValue.fields}}function s0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(ie(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Ld(c.code);return new M(l,c.message||"")}(o);n=new jd(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(t,r.document.name),i=ht(r.document.updateTime),o=new je({mapValue:{fields:r.document.fields}}),a=Ie.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new ds(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(t,r.document),i=r.readTime?ht(r.readTime):K.min(),o=Ie.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(t,r.document),i=r.removedTargetIds||[];n=new ds([],i,s,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Kw(s),o=r.targetId;n=new Bd(o,i)}}return n}function i0(t,e){let n;if(e instanceof Br)n={update:dl(t,e.key,e.value)};else if(e instanceof Ta)n={delete:Io(t,e.key)};else if(e instanceof rn)n={update:dl(t,e.key,e.data),updateMask:g0(e.fieldMask)};else{if(!(e instanceof Hw))return B();n={verify:Io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ls)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _r)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:n0(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function o0(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?ht(r.updateTime):ht(s);return i.isEqual(K.min())&&(i=ht(s)),new jw(i,r.transformResults||[])}(n,e))):[]}function a0(t,e){return{documents:[Eo(t,e.path)]}}function c0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Eo(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Eo(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(el(h.value))return{unaryFilter:{field:cn(h.field),op:"IS_NAN"}};if(Zc(h.value))return{unaryFilter:{field:cn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(el(h.value))return{unaryFilter:{field:cn(h.field),op:"IS_NOT_NAN"}};if(Zc(h.value))return{unaryFilter:{field:cn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(h.field),op:d0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:cn(u.field),direction:h0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||li(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function l0(t){let e=r0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Kd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Zn(dn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,li(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Ms(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Ms(d,h)}(n.endAt)),Ow(e,s,o,i,a,"F",c,l)}function u0(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kd(t){return t?t.unaryFilter!==void 0?[p0(t)]:t.fieldFilter!==void 0?[f0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Kd(e)).reduce((e,n)=>e.concat(n)):B():[]}function h0(t){return Zw[t]}function d0(t){return e0[t]}function cn(t){return{fieldPath:t.canonicalString()}}function dn(t){return De.fromServerFormat(t.fieldPath)}function f0(t){return xe.create(dn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}function p0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=dn(t.unaryFilter.field);return xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=dn(t.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dn(t.unaryFilter.field);return xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=dn(t.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function g0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=er(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=er(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$d(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(n,r)=>ol(n,r))&&In(this.baseMutations,e.baseMutations,(n,r)=>ol(n,r))}}class ka{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ie(e.mutations.length===r.length);let s=Qw;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ka(e,n,r,s)}}/**
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
 */class y0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jt{constructor(e,n,r,s,i=K.min(),o=K.min(),a=Ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.ne=e}}function _0(t){const e=l0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_o(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.ze=new I0}addToCollectionParentIndex(e,n){return this.ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(St.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(St.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class I0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ge(le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Sn(0)}static Rn(){return new Sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.changes=new xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class b0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&er(r.mutation,s,tt.empty(),pe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const s=Ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Kn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ft();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mt();const o=tr(),a=tr();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof rn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),er(u.mutation,l,u.mutation.getFieldMask(),pe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new b0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=tr();let s=new me((o,a)=>o-a),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||tt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||W()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Fd();u.forEach(d=>{if(!i.has(d)){const g=$d(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):I.resolve(Ft());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,W())).next(u=>({batchId:a,changes:Ud(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let s=Kn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Kn();return this.indexManager.getCollectionParents(e,s).next(o=>I.forEach(o,a=>{const c=function(l,u){return new ui(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Ie.newInvalidDocument(l)))});let o=Kn();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&er(l.mutation,c,tt.empty(),pe.now()),ba(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Ie.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return I.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:ht(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:_0(r.bundledQuery),readTime:ht(r.readTime)}}(n)),I.resolve()}}/**
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
 */class k0{constructor(){this.overlays=new me($.comparator),this.Xn=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ft();return I.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const s=Ft(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return I.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ft(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return I.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y0(n,r));let i=this.Xn.get(n);i===void 0&&(i=W(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.Zn=new ge(ye.ts),this.es=new ge(ye.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new ye(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new ye(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new $(new le([])),r=new ye(n,e),s=new ye(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new $(new le([])),r=new ye(n,e),s=new ye(n,e+1);let i=W();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ye(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return $.comparator(e.key,n.key)||re(e.ls,n.ls)}static ns(e,n){return re(e.ls,n.ls)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ge(ye.ts)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new m0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ye(n,0),s=new ye(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(re);return n.forEach(s=>{const i=new ye(s,0),o=new ye(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),I.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new ye(new $(i),0);let a=new ge(re);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),I.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ie(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return I.forEach(n.mutations,s=>{const i=new ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new ye(n,0),s=this.ds.firstAfterOrEqual(r);return I.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.ps=e,this.docs=new me($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=mt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),I.resolve(r)}getAllFromCollection(e,n,r){let s=mt();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gw(pw(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,s){B()}Is(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new D0(this)}getSize(e){return I.resolve(this.size)}}class D0 extends E0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.persistence=e,this.Ts=new xn(n=>wa(n),Ia),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Es=0,this.As=new Aa,this.targetCount=0,this.Rs=Sn.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),I.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Sn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.vn(n),I.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),I.waitFor(i).next(()=>s)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new va(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new R0(this),this.indexManager=new w0,this.remoteDocumentCache=function(r){return new C0(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new v0(n),this.Ds=new S0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new A0(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const s=new O0(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return I.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class O0 extends yw{constructor(e){super(),this.currentSequenceNumber=e}}class Ca{constructor(e){this.persistence=e,this.ks=new Aa,this.Ms=null}static Os(e){return new Ca(e)}get Fs(){if(this.Ms)return this.Ms;throw B()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),I.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Fs,r=>{const s=$.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,K.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return I.or([()=>I.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=W(),s=W();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Da(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(sl(n))return I.resolve(null);let r=gt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_o(n,null,"F"),r=gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=W(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,_o(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,s){return sl(n)||s.isEqual(K.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(Wc()<=ne.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wo(n)),this.Oi(e,o,n,fw(s,-1)))})}ki(e,n){let r=new ge(Ad(e));return n.forEach((s,i)=>{ba(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Wc()<=ne.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",wo(n)),this.Di.getDocumentsMatchingQuery(e,n,St.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new me(re),this.Bi=new xn(i=>wa(i),Ia),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function M0(t,e,n,r){return new $0(t,e,n,r)}async function Wd(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=W();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function L0(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=I.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(p=>{const y=c.docVersions.get(g);ie(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Qd(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function x0(t,e){const n=z(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ae.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=mt(),l=W();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(U0(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(K.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function U0(t,e,n){let r=W(),s=W();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function F0(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function V0(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,I.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new jt(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function To(t,e,n){const r=z(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function fl(t,e,n){const r=z(t);let s=K.min(),i=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=z(a),h=u.Bi.get(l);return h!==void 0?I.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,gt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:K.min(),n?i:W())).next(a=>(B0(r,Lw(e),a),{documents:a,ji:i})))}function B0(t,e,n){let r=K.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class pl{constructor(){this.activeTargetIds=Vd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j0{constructor(){this.Fr=new pl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new pl,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(P("RestConnection","Received: ",c),c),c=>{throw Qc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=z0[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new rw;a.listenOnce(ew.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zi.NO_ERROR:const l=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(l)),i(l);break;case zi.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const u=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(p)>=0?p:E.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=J_(),o=Z_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nw({})),this.uo(a.initMessageHeaders,n,r),lu()||uu()||vp()||hu()||_p()||Ro()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");P("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new H0({jr:p=>{h?P("Connection","Not sending because WebChannel is closed:",p):(u||(P("Connection","Opening WebChannel transport."),l.open(),u=!0),P("Connection","WebChannel sending:",p),l.send(p))},Wr:()=>l.close()}),g=(p,y,w)=>{p.listen(y,S=>{try{w(S)}catch(m){setTimeout(()=>{throw m},0)}})};return g(l,Zr.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),g(l,Zr.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.eo())}),g(l,Zr.EventType.ERROR,p=>{h||(h=!0,Qc("Connection","WebChannel transport errored:",p),d.eo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),g(l,Zr.EventType.MESSAGE,p=>{var y;if(!h){const w=p.data[0];ie(!!w);const S=w,m=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(m){P("Connection","WebChannel received error:",m);const A=m.status;let G=function(Q){const oe=he[Q];if(oe!==void 0)return Ld(oe)}(A),x=m.message;G===void 0&&(G=E.INTERNAL,x="Unknown error status: "+A+" with message "+m.message),h=!0,d.eo(new M(G,x)),l.close()}else P("Connection","WebChannel received:",w),d.no(w)}}),g(o,tw.STAT_EVENT,p=>{p.stat===Kc.PROXY?P("Connection","Detected buffering proxy"):p.stat===Kc.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ki(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){return new t0(t,!0)}class Xd{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Xd(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new M(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G0 extends Yd{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=s0(this.wt,e),r=function(s){if(!("targetChange"in s))return K.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?K.min():i.readTime?ht(i.readTime):K.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=bo(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=vo(a)?{documents:a0(s,a)}:{query:c0(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qd(s,i.resumeToken):i.snapshotVersion.compareTo(K.min())>0&&(o.readTime=Us(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=u0(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=bo(this.wt),n.removeTarget=e,this.Oo(n)}}class W0 extends Yd{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=o0(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.Jo(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=bo(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>i0(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(E.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class X0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(pt(n),this.su=!1):P("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{sn(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=z(a);c.lu.add(4),await qr(c),c._u.set("Unknown"),c.lu.delete(4),await mi(c)}(this))})}),this._u=new X0(r,s)}}async function mi(t){if(sn(t))for(const e of t.fu)await e(!0)}async function qr(t){for(const e of t.fu)await e(!1)}function Jd(t,e){const n=z(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Oa(n)?Na(n):Un(n).Co()&&Ra(n,e))}function Zd(t,e){const n=z(t),r=Un(n);n.hu.delete(e),r.Co()&&ef(n,e),n.hu.size===0&&(r.Co()?r.ko():sn(n)&&n._u.set("Unknown"))}function Ra(t,e){t.wu.Nt(e.targetId),Un(t).Qo(e)}function ef(t,e){t.wu.Nt(e),Un(t).jo(e)}function Na(t){t.wu=new Jw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Un(t).start(),t._u.iu()}function Oa(t){return sn(t)&&!Un(t).Do()&&t.hu.size>0}function sn(t){return z(t).lu.size===0}function tf(t){t.wu=void 0}async function J0(t){t.hu.forEach((e,n)=>{Ra(t,e)})}async function Z0(t,e){tf(t),Oa(t)?(t._u.uu(e),Na(t)):t._u.set("Unknown")}async function eI(t,e,n){if(t._u.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fs(t,r)}else if(e instanceof ds?t.wu.Ut(e):e instanceof Bd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(K.min()))try{const r=await Qd(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(Ae.EMPTY_BYTE_STRING,c.snapshotVersion)),ef(s,a);const l=new jt(c.target,a,1,c.sequenceNumber);Ra(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await Fs(t,r)}}async function Fs(t,e,n){if(!Vr(e))throw e;t.lu.add(1),await qr(t),t._u.set("Offline"),n||(n=()=>Qd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await mi(t)})}function nf(t,e){return e().catch(n=>Fs(t,n,e))}async function yi(t){const e=z(t),n=At(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;tI(e);)try{const s=await F0(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,nI(e,s)}catch(s){await Fs(e,s)}rf(e)&&sf(e)}function tI(t){return sn(t)&&t.au.length<10}function nI(t,e){t.au.push(e);const n=At(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function rf(t){return sn(t)&&!At(t).Do()&&t.au.length>0}function sf(t){At(t).start()}async function rI(t){At(t).Xo()}async function sI(t){const e=At(t);for(const n of t.au)e.Ho(n.mutations)}async function iI(t,e,n){const r=t.au.shift(),s=ka.from(r,e,n);await nf(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yi(t)}async function oI(t,e){e&&At(t).zo&&await async function(n,r){if(s=r.code,Gw(s)&&s!==E.ABORTED){const i=n.au.shift();At(n).No(),await nf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await yi(n)}var s}(t,e),rf(t)&&sf(t)}async function ml(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=sn(n);n.lu.add(3),await qr(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await mi(n)}async function aI(t,e){const n=z(t);e?(n.lu.delete(2),await mi(n)):e||(n.lu.add(2),await qr(n),n._u.set("Unknown"))}function Un(t){return t.mu||(t.mu=function(e,n,r){const s=z(e);return s.tu(),new G0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:J0.bind(null,t),Jr:Z0.bind(null,t),Go:eI.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Oa(t)?Na(t):t._u.set("Unknown")):(await t.mu.stop(),tf(t))})),t.mu}function At(t){return t.gu||(t.gu=function(e,n,r){const s=z(e);return s.tu(),new W0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:rI.bind(null,t),Jr:oI.bind(null,t),Yo:sI.bind(null,t),Jo:iI.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await yi(t)):(await t.gu.stop(),t.au.length>0&&(P("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Pa(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Vr(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Kn(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.yu=new me($.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):B():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class kn{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new kn(e,n,yn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.Iu=void 0,this.listeners=[]}}class lI{constructor(){this.queries=new xn(e=>kd(e),hi),this.onlineState="Unknown",this.Tu=new Set}}async function uI(t,e){const n=z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cI),s)try{i.Iu=await n.onListen(r)}catch(o){const a=$a(o,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Ma(n)}async function hI(t,e){const n=z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function dI(t,e){const n=z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Ma(n)}function fI(t,e,n){const r=z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ma(t){t.Tu.forEach(e=>{e.next()})}class pI{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new kn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.key=e}}class af{constructor(e){this.key=e}}class gI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=W(),this.mutatedKeys=W(),this.Lu=Ad(e),this.Uu=new yn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new yl,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=ba(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?p!==y&&(r.track({type:3,doc:g}),w=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),w=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),w=!0):d&&!g&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(g?(o=o.add(g),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new kn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new yl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=W(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new af(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new of(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=W();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return kn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class mI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yI{constructor(e){this.key=e,this.Xu=!1}}class vI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new xn(a=>kd(a),hi),this.ec=new Map,this.nc=new Set,this.sc=new me($.comparator),this.ic=new Map,this.rc=new Aa,this.oc={},this.uc=new Map,this.cc=Sn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function _I(t,e){const n=DI(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await V0(n.localStore,gt(e));n.isPrimaryClient&&Jd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await wI(n,e,r,a==="current")}return s}async function wI(t,e,n,r){t.hc=(u,h,d)=>async function(g,p,y,w){let S=p.view.Ku(y);S.Mi&&(S=await fl(g.localStore,p.query,!1).then(({documents:G})=>p.view.Ku(G,S)));const m=w&&w.targetChanges.get(p.targetId),A=p.view.applyChanges(S,g.isPrimaryClient,m);return _l(g,p.targetId,A.zu),A.snapshot}(t,u,h,d);const s=await fl(t.localStore,e,!0),i=new gI(e,s.ji),o=i.Ku(s.documents),a=jr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);_l(t,n,c.zu);const l=new mI(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function II(t,e){const n=z(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!hi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await To(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Zd(n.remoteStore,r.targetId),So(n,r.targetId)}).catch(Fr)):(So(n,r.targetId),await To(n.localStore,r.targetId,!0))}async function EI(t,e,n){const r=RI(t);try{const s=await function(i,o){const a=z(i),c=pe.now(),l=o.reduce((d,g)=>d.add(g.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=mt(),p=W();return a.Ui.getEntries(d,l).next(y=>{g=y,g.forEach((w,S)=>{S.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const w=[];for(const S of o){const m=zw(S,u.get(S.key).overlayedDocument);m!=null&&w.push(new rn(S.key,m,Td(m.value.mapValue),nt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Ud(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new me(re)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await zr(r,s.changes),await yi(r.remoteStore)}catch(s){const i=$a(s,"Failed to persist write");n.reject(i)}}async function cf(t,e){const n=z(t);try{const r=await x0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?ie(o.Xu):s.removedDocuments.size>0&&(ie(o.Xu),o.Xu=!1))}),await zr(n,r,e)}catch(r){await Fr(r)}}function vl(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ma(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bI(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new me($.comparator);o=o.insert(i,Ie.newNoDocument(i,K.min()));const a=W().add(i),c=new pi(K.min(),new Map,new ge(re),o,a);await cf(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),La(r)}else await To(r.localStore,e,!1).then(()=>So(r,e,n)).catch(Fr)}async function TI(t,e){const n=z(t),r=e.batch.batchId;try{const s=await L0(n.localStore,e);uf(n,r,null),lf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zr(n,s)}catch(s){await Fr(s)}}async function SI(t,e,n){const r=z(t);try{const s=await function(i,o){const a=z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);uf(r,e,n),lf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zr(r,s)}catch(s){await Fr(s)}}function lf(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function uf(t,e,n){const r=z(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function So(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||hf(t,r)})}function hf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Zd(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),La(t))}function _l(t,e,n){for(const r of n)r instanceof of?(t.rc.addReference(r.key,e),kI(t,r)):r instanceof af?(P("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||hf(t,r.key)):B()}function kI(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.nc.add(r),La(t))}function La(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new $(le.fromString(e)),r=t.cc.next();t.ic.set(r,new yI(n)),t.sc=t.sc.insert(n,r),Jd(t.remoteStore,new jt(gt(Ea(n.path)),r,2,va.ot))}}async function zr(t,e,n){const r=z(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Da.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Vr(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,p)}}}(r.localStore,i))}async function AI(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await Wd(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zr(n,r.Ki)}}function CI(t,e){const n=z(t),r=n.ic.get(e);if(r&&r.Xu)return W().add(r.key);{let s=W();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function DI(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bI.bind(null,e),e.Zu.Go=dI.bind(null,e.eventManager),e.Zu.lc=fI.bind(null,e.eventManager),e}function RI(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SI.bind(null,e),e}class NI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=gi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return M0(this.persistence,new P0,e.initialUser,this.wt)}_c(e){return new N0(Ca.Os,this.wt)}dc(e){return new j0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AI.bind(null,this.syncEngine),await aI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lI}createDatastore(e){const n=gi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new K0(s));var s;return function(i,o,a,c){return new Q0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>vl(this.syncEngine,a,0),o=gl.V()?new gl:new q0,new Y0(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new vI(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);P("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await qr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=wd.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$a(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function MI(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xI(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>ml(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ml(e.remoteStore,i)),t.onlineComponents=e}async function xI(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await MI(t,new NI)),t.offlineComponents}async function df(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await LI(t,new OI)),t.onlineComponents}function UI(t){return df(t).then(e=>e.syncEngine)}async function wl(t){const e=await df(t),n=e.eventManager;return n.onListen=_I.bind(null,e.syncEngine),n.onUnlisten=II.bind(null,e.syncEngine),n}const Il=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FI(t,e,n,r){if(e===!0&&r===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function El(t){if(!$.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bl(t){if($.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,FI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1,e instanceof bn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(s.options.projectId)}(e))}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iw;switch(n.type){case"gapi":const r=n.client;return ie(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new cw(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Il.get(e);n&&(P("ComponentProvider","Removing Datastore"),Il.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}}class vi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vi(this.firestore,e,this._query)}}class bt extends vi{constructor(e,n,r){super(e,n,Ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new $(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function VI(t,e,...n){if(t=Ne(t),ff("collection","path",e),t instanceof Ua){const r=le.fromString(e,...n);return bl(r),new bt(t,null,r)}{if(!(t instanceof Fe||t instanceof bt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return bl(r),new bt(t.firestore,null,r)}}function ns(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=wd.I()),ff("doc","path",e),t instanceof Ua){const r=le.fromString(e,...n);return El(r),new Fe(t,null,new $(r))}{if(!(t instanceof Fe||t instanceof bt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return El(r),new Fe(t.firestore,t instanceof bt?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Xd(this,"async_queue_retry"),this.Kc=()=>{const n=Ki();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ki();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ki();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Bt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Vr(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw pt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=Pa.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&B()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Sl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class wr extends Ua{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new BI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gf(this),this._firestoreClient.terminate()}}function jI(t=Oo()){return tn(t,"firestore").getImmediate()}function pf(t){return t._firestoreClient||gf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gf(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new _w(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $I(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ae.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=/^__.*__$/;class zI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Br(e,this.data,n,this.fieldTransforms)}}function yf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Ba{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Ba(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Vs(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(yf(this.Zc)&&qI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class HI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||gi(e)}aa(e,n,r,s=!1){return new Ba({Zc:e,methodName:n,ca:r,path:De.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function KI(t){const e=t._freezeSettings(),n=gi(t._databaseId);return new HI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GI(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);If("Data must be an object, but it was:",o,r);const a=_f(r,o);let c,l;if(i.merge)c=new tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=WI(e,h,n);if(!o.contains(d))throw new M(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);XI(u,d)||u.push(d)}c=new tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new zI(new je(a),c,l)}function vf(t,e){if(wf(t=Ne(t)))return If("Unsupported field value:",e,t),_f(t,e);if(t instanceof mf)return function(n,r){if(!yf(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=vf(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Uw(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=pe.fromDate(n);return{timestampValue:Us(r.wt,s)}}if(n instanceof pe){const s=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Us(r.wt,s)}}if(n instanceof Va)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof An)return{bytesValue:qd(r.wt,n._byteString)};if(n instanceof Fe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sa(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${xa(n)}`)}(t,e)}function _f(t,e){const n={};return Id(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(t,(r,s)=>{const i=vf(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Va||t instanceof An||t instanceof Fe||t instanceof mf)}function If(t,e,n){if(!wf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=xa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function WI(t,e,n){if((e=Ne(e))instanceof Fa)return e._internalPath;if(typeof e=="string")return Ef(t,e);throw Vs("Field path arguments must be of type string or ",t,!1,void 0,n)}const QI=new RegExp("[~\\*/\\[\\]]");function Ef(t,e,n){if(e.search(QI)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fa(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function XI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YI extends bf{data(){return super.data()}}function Tf(t,e){return typeof e=="string"?Ef(t,e):e instanceof Fa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sf extends bf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fs extends Sf{data(e={}){return super.data(e)}}class JI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fs(this._firestore,this._userDataWriter,r.key,r,new Gn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new fs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Gn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new fs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Gn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ZI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function tE(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{convertValue(e,n="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(En(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return Ln(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Va(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const n=kt(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);ie(Gd(r));const s=new bn(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kf extends nE{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function kl(t,e,n){t=vn(t,Fe);const r=vn(t.firestore,wr),s=rE(t.converter,e,n);return Af(r,[GI(KI(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nt.none())])}function sE(t){return Af(vn(t.firestore,wr),[new Ta(t._key,nt.none())])}function Al(t,...e){var n,r,s;t=Ne(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Sl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Sl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Fe)l=vn(t.firestore,wr),u=Ea(t._key.path),c={next:h=>{e[o]&&e[o](iE(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,vi);l=vn(h.firestore,wr),u=h._query;const d=new kf(l);c={next:g=>{e[o]&&e[o](new JI(l,d,h,g))},error:e[o+1],complete:e[o+2]},eE(t._query)}return function(h,d,g,p){const y=new PI(p),w=new pI(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>uI(await wl(h),w)),()=>{y.Tc(),h.asyncQueue.enqueueAndForget(async()=>hI(await wl(h),w))}}(pf(l),u,a,c)}function Af(t,e){return function(n,r){const s=new Bt;return n.asyncQueue.enqueueAndForget(async()=>EI(await UI(n),r,s)),s.promise}(pf(t),e)}function iE(t,e,n){const r=n.docs.get(e._key),s=new kf(t);return new Sf(t,s,e._key,r,new Gn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Mn=n})(Er),rt(new Qe("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new wr(s,new ow(n.getProvider("auth-internal")),new uw(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),ze(Gc,"3.4.14",t),ze(Gc,"3.4.14","esm2017")})();const oE={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},Cf=Ag(oE),Pt=Oy(Cf);Im(Pt,Bu);const Vn=jI(Cf);Kv();const aE=new ot,cE=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Rn(t);return Uu(Pt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,s){return _m(Pt,r,s)},async signInWithEmail(r,s){return wm(Pt,r,s)},async signInWithGoogle(){return Hm(Pt,aE)},async signOut(){return Em(Pt)}}};var lE=cE(),Cl="/assets/default-user.a40c52dd.png";function uE(t){let e;return{c(){e=T("i"),f(e,"class","codicon codicon-account")},m(n,r){R(n,e,r)},p:N,d(n){n&&D(e)}}}function hE(t){let e,n;return{c(){var r;e=T("img"),f(e,"class","profile-picture svelte-dx2c6r"),ys(e.src,n=(r=t[0].user.photoURL)!=null?r:Cl)||f(e,"src",n),f(e,"alt","Account")},m(r,s){R(r,e,s)},p(r,s){var i;s&1&&!ys(e.src,n=(i=r[0].user.photoURL)!=null?i:Cl)&&f(e,"src",n)},d(r){r&&D(e)}}}function dE(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,p,y,w,S,m;c=new fp({});function A(Q,oe){return Q[0].loggedIn?hE:uE}let G=A(t),x=G(t);return{c(){e=T("header"),n=T("div"),r=T("a"),r.innerHTML='<i class="codicon codicon-github"></i>',s=V(),i=T("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=V(),a=T("a"),H(c.$$.fragment),l=V(),u=T("nav"),h=T("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=V(),g=T("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',p=V(),y=T("button"),x.c(),f(r,"title","Source Code"),f(r,"href","https://github.com/kurozenzen/kurosearch"),f(r,"target","_newtab"),f(r,"class","svelte-dx2c6r"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-dx2c6r"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-dx2c6r"),f(n,"class","svelte-dx2c6r"),f(h,"title","Search"),f(h,"class","svelte-dx2c6r"),f(g,"title","Settings"),f(g,"class","svelte-dx2c6r"),f(y,"title","Account"),f(y,"class","svelte-dx2c6r"),f(u,"class","svelte-dx2c6r"),f(e,"role","navigation"),f(e,"class","svelte-dx2c6r")},m(Q,oe){R(Q,e,oe),v(e,n),v(n,r),v(n,s),v(n,i),v(n,o),v(n,a),j(c,a,null),v(e,l),v(e,u),v(u,h),v(u,d),v(u,g),v(u,p),v(u,y),x.m(y,null),w=!0,S||(m=[J(h,"click",t[1]),J(g,"click",t[2]),J(y,"click",t[3])],S=!0)},p(Q,[oe]){G===(G=A(Q))&&x?x.p(Q,oe):(x.d(1),x=G(Q),x&&(x.c(),x.m(y,null)))},i(Q){w||(b(c.$$.fragment,Q),w=!0)},o(Q){k(c.$$.fragment,Q),w=!1},d(Q){Q&&D(e),q(c),x.d(),S=!1,Be(m)}}}function fE(t,e,n){let r;return Je(t,lE,a=>n(0,r=a)),[r,()=>fn.navigateTo("search"),()=>fn.navigateTo("settings"),()=>fn.navigateTo("account")]}class pE extends ee{constructor(e){super(),Z(this,e,fE,dE,Y,{})}}class gE extends ee{constructor(e){super(),Z(this,e,null,null,Y,{})}}const mE="modulepreload",Dl={},yE="/",ja=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${yE}${r}`,r in Dl)return;Dl[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":mE,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Hr=t=>typeof t=="string"&&t!=="",_i=t=>typeof t=="number"&&t>=0;class wi{constructor(e,n,r,s,i,o,a,c,l,u,h,d,g,p,y,w,S,m,A,G,x,Q,oe,it,ue,L){this.preview_url=e,this.sample_url=n,this.file_url=r,this.created_at=s,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=g,this.preview_width=p,this.preview_height=y,this.rating=w,this.sample_height=S,this.sample_width=m,this.score=A,this.source=G,this.status=x,this.tags=Q,this.width=oe,this.comments_url=it,this.owner_url=ue,this.type=L,Object.freeze(this)}static from(e){return new wi(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const vE=t=>Array.isArray(t)&&t.every(e=>e instanceof wi);class _E{constructor(e,n){if(!_i(e))throw new TypeError("Invalid count passed to Page constructor");if(!vE(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const wE=Object.freeze(["id","score"]),IE=t=>wE.includes(t),ps=Object.freeze(["+","-","~"]),Ii=t=>ps.includes(t),Df=t=>{if(!Ii(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(ps.indexOf(t)+1)%ps.length;return ps[n]},EE=Object.freeze({"+":"","-":"-","~":""}),bE=t=>{if(!Ii(t))throw TypeError("Invalid modifier passed to serializeModifier");return EE[t]};class Ei{constructor(e,n){if(!Ii(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Hr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${bE(this.modifier)}${encodeURIComponent(this.name)}`}}const Rf=(t,e)=>{if(!Nf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!TE(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Nf=t=>{try{return new URL(t),!0}catch{return!1}},TE=t=>t===null||t instanceof AbortController,Of=20,SE="https://r34-json.herokuapp.com/v2";let kE=null;const AE=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},CE=async(t,e,n,r)=>{DE(t,e,n,r);const s=$E(e,n,r),i=await Rf(ME(t,s),kE);AE(i);const o=await i.json();return LE(o),new _E(o.count,o.posts.map(a=>wi.from(a)))},DE=(t,e,n,r)=>{if(!RE(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!NE(e))throw new TypeError("Invalid array of tags passed to getPage");if(!IE(n))throw new TypeError("Invalid sort property passed to getPage");if(!OE(r))throw new TypeError("Invalid minimum score passed to getPage")},RE=t=>typeof t=="number"&&t>=0,NE=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Ei)),OE=t=>typeof t=="number"&&t>=0,PE=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},$E=(t,e,n)=>{const r=PE(t),s=[...Rl([...r["+"],...r["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return r["~"].length===0?s:`${s}+( ${Rl(r["~"]).join(" ~ ")} )`},Rl=t=>t.map(e=>e.serialize()),ME=(t,e)=>{const n=`${SE}/posts?limit=${Of}&pid=${t}`;return e===""?n:`${n}&tags=${e}`},LE=t=>{if(typeof t.count!="number"||!Array.isArray(t.posts))throw new Error("Unexpected response received in getPage")},xE=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),Pf=t=>xE.includes(t);class Bs{constructor(e,n,r,s){if(!Ii(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Hr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!_i(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Pf(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}toSearchableTag(){return new Ei(this.modifier,this.name)}}class $f{constructor(e,n,r){if(!Hr(e))throw TypeError("Invalid name passed to Tag constructor");if(!_i(n))throw TypeError("Invalid count passed to Tag constructor");if(!Pf(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}toActiveTag(e){return new Bs(e,this.name,this.count,this.type)}}let UE=null;const FE=async(t,e)=>{const n=e?`*${t}*`:t,r=await Rf(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,UE);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length==0)throw new Error("No tags found");return s.map(i=>new $f(i.name,i.count,VE(i.types)))}else throw s.message?new Error(s.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},VE=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class Mf{constructor(e,n,r){if(!Hr(e))throw new TypeError("Invalid name passed to Supertag");if(!BE(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const BE=t=>Array.isArray(t)&&t.every(e=>e instanceof Ei),jE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Rn(t);let r,s=null,i=null;return Uu(Pt,async o=>{r=o,o?s=Al(ns(Vn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=tE(VI(Vn,`users/${o.uid}/supertags`));i==null||i(),i=Al(l,u=>{const h=[];u.forEach(d=>{const g=d.data();h.push(new Mf(d.id,g.description,Object.entries(g.tags).map(p=>new Ei(p[1],p[0]))))}),n(d=>(d.supertags=h,d))})}):(s==null||s(),i==null||i(),s=null,i=null)}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");return kl(ns(Vn,`users/${r.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!r)throw new Error("No user");return sE(ns(Vn,`users/${r.uid}/supertags`,o.name))},async setTheme(o){if(!!r)return kl(ns(Vn,"users",r.uid),{preferences:{theme:o}},{merge:!0})}}};var ko=jE();function qE(t){let e,n,r,s;return{c(){e=T("button"),n=Ee(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-b9vfir")},m(i,o){R(i,e,o),v(e,n),r||(s=J(e,"click",t[4]),r=!0)},p(i,[o]){o&1&&Ke(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:N,o:N,d(i){i&&D(e),r=!1,s()}}}function zE(t,e,n){let{text:r}=e,{title:s}=e,{disabled:i=!1}=e;const o=We(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,r=c.text),"title"in c&&n(1,s=c.title),"disabled"in c&&n(2,i=c.disabled)},[r,s,i,o,a]}class Lf extends ee{constructor(e){super(),Z(this,e,zE,qE,Y,{text:0,title:1,disabled:2})}}function bi(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}const HE=Intl.NumberFormat("en",{notation:"compact"}),Ct=t=>{if(!_i(t))throw new TypeError("Invalid value passed to formatCount");return HE.format(t)};function Cn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Nl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function KE(t){let e,n;return{c(){e=T("i"),f(e,"class",n=`codicon codicon-${Nl[t[0]]}`)},m(r,s){R(r,e,s)},p(r,[s]){s&1&&n!==(n=`codicon codicon-${Nl[r[0]]}`)&&f(e,"class",n)},i:N,o:N,d(r){r&&D(e)}}}function GE(t,e,n){let{type:r}=e;return t.$$set=s=>{"type"in s&&n(0,r=s.type)},[r]}class xf extends ee{constructor(e){super(),Z(this,e,GE,KE,Y,{type:0})}}const Ol=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),$l=Object.freeze({"+":"include","-":"exclude","~":"optional"});function WE(t){let e,n,r,s=Cn(t[0].name)+"",i,o,a=Ct(t[0].count)+"",c,l,u,h,d,g;return n=new xf({props:{type:t[0].type}}),{c(){e=T("li"),H(n.$$.fragment),r=V(),i=Ee(s),o=Ee(`
  (`),c=Ee(a),l=Ee(")"),f(e,"class",u=Tt($l[t[0].modifier])+" svelte-apze1c"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),qe(e,"no-icon",t[0].type==="general")},m(p,y){R(p,e,y),j(n,e,null),v(e,r),v(e,i),v(e,o),v(e,c),v(e,l),h=!0,d||(g=[J(e,"click",t[2]),J(e,"contextmenu",js(t[3]))],d=!0)},p(p,[y]){const w={};y&1&&(w.type=p[0].type),n.$set(w),(!h||y&1)&&s!==(s=Cn(p[0].name)+"")&&Ke(i,s),(!h||y&1)&&a!==(a=Ct(p[0].count)+"")&&Ke(c,a),(!h||y&1&&u!==(u=Tt($l[p[0].modifier])+" svelte-apze1c"))&&f(e,"class",u),y&1&&qe(e,"no-icon",p[0].type==="general")},i(p){h||(b(n.$$.fragment,p),h=!0)},o(p){k(n.$$.fragment,p),h=!1},d(p){p&&D(e),q(n),d=!1,Be(g)}}}function QE(t,e,n){let{tag:r}=e;const s=We(),i=()=>s("click"),o=()=>s("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,r=a.tag)},[r,s,i,o]}class Uf extends ee{constructor(e){super(),Z(this,e,QE,WE,Y,{tag:0})}}function Ml(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ll(t){let e,n;return e=new Uf({props:{tag:t[9]}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function XE(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,p,y,w,S,m,A,G,x,Q,oe,it,ue=t[2],L=[];for(let te=0;te<ue.length;te+=1)L[te]=Ll(Ml(t,ue,te));const Ti=te=>k(L[te],1,1,()=>{L[te]=null});return x=new Lf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),x.$on("click",t[8]),{c(){e=T("dialog"),n=T("h3"),n.textContent="Create Supertag",r=V(),s=T("i"),i=V(),o=T("div"),a=T("label"),a.textContent="Name",c=V(),l=T("input"),u=V(),h=T("div"),d=T("label"),d.textContent="Description",g=V(),p=T("textarea"),y=V(),w=T("div"),S=T("span"),S.textContent="Tags",m=V(),A=T("ol");for(let te=0;te<L.length;te+=1)L[te].c();G=V(),H(x.$$.fragment),f(s,"tabindex","0"),f(s,"class",Tt("codicon codicon-close")+" svelte-64l7g"),f(a,"for","supertag-name"),f(a,"class","svelte-64l7g"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-64l7g"),f(o,"class","svelte-64l7g"),f(d,"for","supertag-description"),f(d,"class","svelte-64l7g"),f(p,"type","text"),f(p,"placeholder","Short description"),f(p,"id","supertag-description"),f(p,"class","svelte-64l7g"),f(h,"class","svelte-64l7g"),f(S,"class","svelte-64l7g"),f(A,"class","svelte-64l7g"),f(w,"class","svelte-64l7g"),f(e,"class","svelte-64l7g")},m(te,ae){R(te,e,ae),v(e,n),v(e,r),v(e,s),v(e,i),v(e,o),v(o,a),v(o,c),v(o,l),un(l,t[0]),v(e,u),v(e,h),v(h,d),v(h,g),v(h,p),un(p,t[1]),v(e,y),v(e,w),v(w,S),v(w,m),v(w,A);for(let Ye=0;Ye<L.length;Ye+=1)L[Ye].m(A,null);v(e,G),j(x,e,null),Q=!0,oe||(it=[J(s,"click",t[5]),J(s,"keyup",bi(t[5])),J(l,"input",t[6]),J(p,"input",t[7])],oe=!0)},p(te,[ae]){if(ae&1&&l.value!==te[0]&&un(l,te[0]),ae&2&&un(p,te[1]),ae&4){ue=te[2];let O;for(O=0;O<ue.length;O+=1){const se=Ml(te,ue,O);L[O]?(L[O].p(se,ae),b(L[O],1)):(L[O]=Ll(se),L[O].c(),b(L[O],1),L[O].m(A,null))}for(Se(),O=ue.length;O<L.length;O+=1)Ti(O);ke()}const Ye={};ae&8&&(Ye.title=te[3]?"Click to create supertag":"Enter a valid name to continue"),ae&8&&(Ye.disabled=!te[3]),x.$set(Ye)},i(te){if(!Q){for(let ae=0;ae<ue.length;ae+=1)b(L[ae]);b(x.$$.fragment,te),Q=!0}},o(te){L=L.filter(Boolean);for(let ae=0;ae<L.length;ae+=1)k(L[ae]);k(x.$$.fragment,te),Q=!1},d(te){te&&D(e),Dn(L,te),q(x),oe=!1,Be(it)}}}function YE(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=We(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Mf(s,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=Hr(s))},[s,i,o,r,a,c,l,u,h]}class JE extends ee{constructor(e){super(),Z(this,e,YE,XE,Y,{name:0,description:1,tags:2})}}function ZE(t){let e,n,r,s;return{c(){e=T("i"),f(e,"title",t[0]),f(e,"class",n=Tt(`codicon codicon-${t[1]}`)+" svelte-1cni6tw"),f(e,"tabindex","0"),qe(e,"active",t[2])},m(i,o){R(i,e,o),r||(s=[J(e,"click",t[3]),J(e,"keyup",bi(t[3])),J(e,"touchend",js(t[4]))],r=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=Tt(`codicon codicon-${i[1]}`)+" svelte-1cni6tw")&&f(e,"class",n),o&6&&qe(e,"active",i[2])},i:N,o:N,d(i){i&&D(e),r=!1,Be(s)}}}function eb(t,e,n){let{title:r=void 0}=e,{icon:s}=e,{active:i}=e;const o=We(),a=()=>o("click");function c(l){Co.call(this,t,l)}return t.$$set=l=>{"title"in l&&n(0,r=l.title),"icon"in l&&n(1,s=l.icon),"active"in l&&n(2,i=l.active)},[r,s,i,a,c]}class tb extends ee{constructor(e){super(),Z(this,e,eb,ZE,Y,{title:0,icon:1,active:2})}}function nb(t){let e,n,r,s,i;return{c(){e=T("i"),f(e,"tabindex","0"),f(e,"class",n=Tt(`codicon codicon-${Ol[t[0]]}`)+" svelte-j4hp32"),f(e,"title",r=Pl[t[0]])},m(o,a){R(o,e,a),s||(i=[J(e,"click",t[1]),J(e,"keyup",bi(t[1])),J(e,"touchend",js(t[2]))],s=!0)},p(o,[a]){a&1&&n!==(n=Tt(`codicon codicon-${Ol[o[0]]}`)+" svelte-j4hp32")&&f(e,"class",n),a&1&&r!==(r=Pl[o[0]])&&f(e,"title",r)},i:N,o:N,d(o){o&&D(e),s=!1,Be(i)}}}function rb(t,e,n){let r="+";const s=We(),i=()=>{n(0,r=Df(r)),s("change",r)};function o(a){Co.call(this,t,a)}return[r,i,o]}class sb extends ee{constructor(e){super(),Z(this,e,rb,nb,Y,{})}}function ib(t){let e;return{c(){e=T("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){R(n,e,r)},p:N,i:N,o:N,d(n){n&&D(e)}}}class Ff extends ee{constructor(e){super(),Z(this,e,null,ib,Y,{})}}function ob(t){let e,n,r,s,i=Cn(t[0].name)+"",o,a,c,l=Ct(t[0].count)+"",u,h,d,g,p;return n=new xf({props:{type:t[0].type}}),{c(){e=T("li"),H(n.$$.fragment),r=V(),s=T("span"),o=Ee(i),a=V(),c=T("span"),u=Ee(l),f(s,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(y,w){R(y,e,w),j(n,e,null),v(e,r),v(e,s),v(s,o),v(e,a),v(e,c),v(c,u),d=!0,g||(p=J(e,"click",t[2]),g=!0)},p(y,[w]){const S={};w&1&&(S.type=y[0].type),n.$set(S),(!d||w&1)&&i!==(i=Cn(y[0].name)+"")&&Ke(o,i),(!d||w&1)&&l!==(l=Ct(y[0].count)+"")&&Ke(u,l),(!d||w&1&&h!==(h=y[0].name))&&f(e,"title",h)},i(y){d||(b(n.$$.fragment,y),d=!0)},o(y){k(n.$$.fragment,y),d=!1},d(y){y&&D(e),q(n),g=!1,p()}}}function ab(t,e,n){let{tag:r}=e;const s=We(),i=()=>s("click",r);return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class cb extends ee{constructor(e){super(),Z(this,e,ab,ob,Y,{tag:0})}}function xl(t,e,n){const r=t.slice();return r[18]=e[n],r}function lb(t){let e,n,r,s,i=t[21].message+"",o;return{c(){e=T("div"),n=T("i"),r=V(),s=T("span"),o=Ee(i),f(n,"class",Tt("codicon codicon-error")+" svelte-1hzflr2"),f(e,"class","error-container svelte-1hzflr2")},m(a,c){R(a,e,c),v(e,n),v(e,r),v(e,s),v(s,o)},p(a,c){c&4&&i!==(i=a[21].message+"")&&Ke(o,i)},i:N,o:N,d(a){a&&D(e)}}}function ub(t){let e,n,r=t[5],s=[];for(let o=0;o<r.length;o+=1)s[o]=Ul(xl(t,r,o));const i=o=>k(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Zt()},m(o,a){for(let c=0;c<s.length;c+=1)s[c].m(o,a);R(o,e,a),n=!0},p(o,a){if(a&232){r=o[5];let c;for(c=0;c<r.length;c+=1){const l=xl(o,r,c);s[c]?(s[c].p(l,a),b(s[c],1)):(s[c]=Ul(l),s[c].c(),b(s[c],1),s[c].m(e.parentNode,e))}for(Se(),c=r.length;c<s.length;c+=1)i(c);ke()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)b(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)k(s[a]);n=!1},d(o){Dn(s,o),o&&D(e)}}}function Ul(t){let e,n;function r(){return t[14](t[18])}return e=new cb({props:{tag:t[18]}}),e.$on("click",r),{c(){H(e.$$.fragment)},m(s,i){j(e,s,i),n=!0},p(s,i){t=s;const o={};i&32&&(o.tag=t[18]),e.$set(o)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){q(e,s)}}}function hb(t){let e,n,r;return n=new Ff({}),{c(){e=T("div"),H(n.$$.fragment),f(e,"class","hint-container svelte-1hzflr2")},m(s,i){R(s,e,i),j(n,e,null),r=!0},p:N,i(s){r||(b(n.$$.fragment,s),r=!0)},o(s){k(n.$$.fragment,s),r=!1},d(s){s&&D(e),q(n)}}}function db(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,p,y,w;o=new sb({}),o.$on("change",t[10]),c=new tb({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[11]);let S={ctx:t,current:null,token:null,hasCatch:!0,pending:hb,then:ub,catch:lb,error:21,blocks:[,,,]};return Za(g=t[2],S),{c(){e=T("div"),n=T("i"),r=V(),s=T("input"),i=V(),H(o.$$.fragment),a=V(),H(c.$$.fragment),l=V(),u=T("i"),h=V(),d=T("ol"),S.block.c(),f(n,"class","codicon codicon-search spaced svelte-1hzflr2"),f(s,"type","text"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-1hzflr2"),f(u,"tabindex","0"),f(u,"class","codicon codicon-question spaced svelte-1hzflr2"),f(d,"class","svelte-1hzflr2"),qe(d,"open",t[4]),f(e,"class","searchbar svelte-1hzflr2"),qe(e,"open",t[4])},m(m,A){R(m,e,A),v(e,n),v(e,r),v(e,s),un(s,t[0]),v(e,i),j(o,e,null),v(e,a),j(c,e,null),v(e,l),v(e,u),v(e,h),v(e,d),S.block.m(d,S.anchor=null),S.mount=()=>d,S.anchor=null,p=!0,y||(w=[J(s,"input",t[8]),J(s,"blur",t[9]),J(u,"click",t[12]),J(u,"keyup",bi(t[13])),J(e,"blur",t[15])],y=!0)},p(m,[A]){t=m,A&1&&s.value!==t[0]&&un(s,t[0]);const G={};A&2&&(G.active=!t[1]),c.$set(G),S.ctx=t,A&4&&g!==(g=t[2])&&Za(g,S)||ap(S,t,A),A&16&&qe(d,"open",t[4]),A&16&&qe(e,"open",t[4])},i(m){p||(b(o.$$.fragment,m),b(c.$$.fragment,m),b(S.block),p=!0)},o(m){k(o.$$.fragment,m),k(c.$$.fragment,m);for(let A=0;A<3;A+=1){const G=S.blocks[A];k(G)}p=!1},d(m){m&&D(e),q(o),q(c),S.block.d(),S.token=null,S=null,y=!1,Be(w)}}}function fb(t,e,n){let r;Je(t,ko,x=>n(16,r=x));const s=We();let i,o="",a=!0,c="+",l=!1,u=[];async function h(x,Q){n(4,l=!0),n(5,u=[...r.supertags.filter(oe=>oe.name.toLowerCase().includes(Q.toLowerCase())).map(oe=>new $f(oe.name,Object.keys(oe.tags).length,"supertag")),...await FE(Q,x)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function g(){o=this.value,n(0,o)}const p=x=>{(!x.relatedTarget||!x.target.parentNode.contains(x.relatedTarget))&&n(4,l=!1)},y=x=>{n(3,c=x.detail)},w=()=>{n(1,a=!a)},S=()=>fn.navigateTo("help"),m=()=>fn.navigateTo("help"),A=x=>{s("pick",x.toActiveTag(c)),d()},G=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,s,d,g,p,y,w,S,m,A,G]}class pb extends ee{constructor(e){super(),Z(this,e,fb,db,Y,{})}}function gb(){const t=[],{subscribe:e,update:n,set:r}=Rn(t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:s=>n(i=>(i.push(new Bs("+",s,0,"general")),i)),removeByIndex:s=>n(i=>(i.splice(s,1),i))}}var It=gb();const mb=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:r}=Rn(t);return{subscribe:e,addPage(s){n(i=>({count:s.count,pages:[...i.pages,s.posts],nextPage:i.nextPage+1}))},reset(){r(t)}}};var gs=mb();function yb(t){let e,n=Cn(t[0])+"",r,s,i;return{c(){e=T("li"),r=Ee(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),qe(e,"active",t[2])},m(o,a){R(o,e,a),v(e,r),s||(i=J(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&n!==(n=Cn(o[0])+"")&&Ke(r,n),a&4&&qe(e,"active",o[2])},i:N,o:N,d(o){o&&D(e),s=!1,i()}}}function vb(t,e,n){let r,s,i;Je(t,It,c=>n(3,i=c));let{name:o}=e;const a=()=>s?It.removeByIndex(r):It.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,r=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,s=r>=0)},[o,r,s,i,a]}class _b extends ee{constructor(e){super(),Z(this,e,vb,yb,Y,{name:0})}}function wb(t){let e,n;return{c(){e=T("span"),n=Ee(t[0])},m(r,s){R(r,e,s),v(e,n)},p(r,s){s&1&&Ke(n,r[0])},d(r){r&&D(e)}}}function Ib(t){let e,n=t[1].hostname+"",r,s;return{c(){e=T("a"),r=Ee(n),f(e,"href",s=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-193n8oi")},m(i,o){R(i,e,o),v(e,r)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Ke(r,n),o&2&&s!==(s=i[1].toString())&&f(e,"href",s)},d(i){i&&D(e)}}}function Eb(t){let e,n,r;function s(a,c){return a[1]?Ib:wb}let i=s(t),o=i(t);return{c(){e=T("i"),n=V(),o.c(),r=Zt(),f(e,"class","codicon codicon-link")},m(a,c){R(a,e,c),R(a,n,c),o.m(a,c),R(a,r,c)},p(a,[c]){i===(i=s(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(r.parentNode,r)))},i:N,o:N,d(a){a&&D(e),a&&D(n),o.d(a),a&&D(r)}}}function bb(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(0,s=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Nf(s)?new URL(s):null)},[s,r]}class Tb extends ee{constructor(e){super(),Z(this,e,bb,Eb,Y,{source:0})}}function Sb(t){let e,n;const r=t[1].default,s=Yf(r,t,t[0],null);return{c(){e=T("div"),s&&s.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),s&&s.m(e,null),n=!0},p(i,[o]){s&&s.p&&(!n||o&1)&&Zf(s,r,i,i[0],n?Jf(r,i[0],o,null):ep(i[0]),null)},i(i){n||(b(s,i),n=!0)},o(i){k(s,i),n=!1},d(i){i&&D(e),s&&s.d(i)}}}function kb(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,r]}class Ao extends ee{constructor(e){super(),Z(this,e,kb,Sb,Y,{})}}const Fl=6e4,Vl=t=>{if(!Ab(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Fl,r=new Date().getTime()/Fl-e;if(r<1)return"just now";if(r<60)return ln(r,"minute");const s=r/60;if(s<24)return ln(s,"hour");const i=s/24;if(i<7)return ln(i,"day");if(i<30.5)return ln(i/7,"week");if(i<365.25)return ln(i/30.5,"month");const o=i/365.25;return ln(o,"year")},Ab=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",ln=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function Cb(t){let e,n,r,s=Vl(t[0])+"",i;return{c(){e=T("i"),n=V(),r=T("span"),i=Ee(s),f(e,"class","codicon codicon-calendar"),f(r,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,r,a),v(r,i)},p(o,[a]){a&1&&s!==(s=Vl(o[0])+"")&&Ke(i,s)},i:N,o:N,d(o){o&&D(e),o&&D(n),o&&D(r)}}}function Db(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class Rb extends ee{constructor(e){super(),Z(this,e,Db,Cb,Y,{value:0})}}function Nb(t){let e,n,r,s=Ct(t[0])+"",i;return{c(){e=T("i"),n=V(),r=T("span"),i=Ee(s),f(e,"class","codicon codicon-heart"),f(r,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,r,a),v(r,i)},p(o,[a]){a&1&&s!==(s=Ct(o[0])+"")&&Ke(i,s)},i:N,o:N,d(o){o&&D(e),o&&D(n),o&&D(r)}}}function Ob(t,e,n){let{value:r}=e;return t.$$set=s=>{"value"in s&&n(0,r=s.value)},[r]}class Pb extends ee{constructor(e){super(),Z(this,e,Ob,Nb,Y,{value:0})}}function Bl(t,e,n){const r=t.slice();return r[1]=e[n],r}function $b(t){let e,n;return e=new Rb({props:{value:t[0].created_at}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].created_at),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Mb(t){let e,n;return e=new Pb({props:{value:t[0].score}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.value=r[0].score),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function jl(t){let e,n;return e=new Ao({props:{$$slots:{default:[Lb]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&17&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Lb(t){let e,n;return e=new Tb({props:{source:t[0].source}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.source=r[0].source),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function ql(t){let e,n;return e=new _b({props:{name:t[1]}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.name=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function xb(t){let e,n,r,s,i,o,a,c,l;r=new Ao({props:{$$slots:{default:[$b]},$$scope:{ctx:t}}}),i=new Ao({props:{$$slots:{default:[Mb]},$$scope:{ctx:t}}});let u=t[0].source&&jl(t),h=t[0].tags,d=[];for(let p=0;p<h.length;p+=1)d[p]=ql(Bl(t,h,p));const g=p=>k(d[p],1,1,()=>{d[p]=null});return{c(){e=T("div"),n=T("div"),H(r.$$.fragment),s=V(),H(i.$$.fragment),o=V(),u&&u.c(),a=V(),c=T("ul");for(let p=0;p<d.length;p+=1)d[p].c();f(n,"class","summary svelte-1t6gmcy"),f(c,"class","svelte-1t6gmcy"),f(e,"class","details svelte-1t6gmcy")},m(p,y){R(p,e,y),v(e,n),j(r,n,null),v(n,s),j(i,n,null),v(n,o),u&&u.m(n,null),v(e,a),v(e,c);for(let w=0;w<d.length;w+=1)d[w].m(c,null);l=!0},p(p,[y]){const w={};y&17&&(w.$$scope={dirty:y,ctx:p}),r.$set(w);const S={};if(y&17&&(S.$$scope={dirty:y,ctx:p}),i.$set(S),p[0].source?u?(u.p(p,y),y&1&&b(u,1)):(u=jl(p),u.c(),b(u,1),u.m(n,null)):u&&(Se(),k(u,1,1,()=>{u=null}),ke()),y&1){h=p[0].tags;let m;for(m=0;m<h.length;m+=1){const A=Bl(p,h,m);d[m]?(d[m].p(A,y),b(d[m],1)):(d[m]=ql(A),d[m].c(),b(d[m],1),d[m].m(c,null))}for(Se(),m=h.length;m<d.length;m+=1)g(m);ke()}},i(p){if(!l){b(r.$$.fragment,p),b(i.$$.fragment,p),b(u);for(let y=0;y<h.length;y+=1)b(d[y]);l=!0}},o(p){k(r.$$.fragment,p),k(i.$$.fragment,p),k(u),d=d.filter(Boolean);for(let y=0;y<d.length;y+=1)k(d[y]);l=!1},d(p){p&&D(e),q(r),q(i),u&&u.d(),Dn(d,p)}}}function Ub(t,e,n){let{post:r}=e;return t.$$set=s=>{"post"in s&&n(0,r=s.post)},[r]}class Fb extends ee{constructor(e){super(),Z(this,e,Ub,xb,Y,{post:0})}}const qa=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function Vb(t){let e,n,r,s,i,o,a,c;return{c(){e=T("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=J(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[3](null),a=!1,c()}}}function Bb(t,e,n){let{post:r}=e;const s=We();let i;function o(c){_n[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>s("click");return t.$$set=c=>{"post"in c&&n(0,r=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&qa.observe(i)},[r,i,s,o,a]}class jb extends ee{constructor(e){super(),Z(this,e,Bb,Vb,Y,{post:0})}}function qb(t){let e,n,r,s,i,o,a,c;return{c(){e=T("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-19kew7t")},m(l,u){R(l,e,u),t[5](e),a||(c=[J(e,"click",js(t[4])),J(e,"touchstart",t[2],{passive:!0}),J(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[5](null),a=!1,Be(c)}}}function zb(t,e,n){let{post:r}=e;const s=We();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:g}=h.changedTouches.item(0);o={screenX:d,screenY:g}},c=h=>{const{screenX:d,screenY:g}=h.changedTouches.item(0);o.screenX===d&&o.screenY===g&&s("click")};function l(h){Co.call(this,t,h)}function u(h){_n[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,r=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&qa.observe(i)},[r,i,a,c,l,u]}class Hb extends ee{constructor(e){super(),Z(this,e,zb,qb,Y,{post:0})}}function Kb(t){let e,n,r,s,i,o,a,c;return{c(){e=T("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=J(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&r!==(r=l[0].id.toString())&&f(e,"alt",r),u&1&&s!==(s=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",s),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:N,o:N,d(l){l&&D(e),t[3](null),a=!1,c()}}}function Gb(t,e,n){let{post:r}=e;const s=We();let i;function o(c){_n[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>s("click");return t.$$set=c=>{"post"in c&&n(0,r=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&qa.observe(i)},[r,i,s,o,a]}class Wb extends ee{constructor(e){super(),Z(this,e,Gb,Kb,Y,{post:0})}}function Qb(t){let e,n;return e=new Wb({props:{post:t[0]}}),e.$on("click",t[2]),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Xb(t){let e,n;return e=new Hb({props:{post:t[0]}}),e.$on("click",t[2]),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Yb(t){let e,n;return e=new jb({props:{post:t[0]}}),e.$on("click",t[2]),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function zl(t){let e,n;return e=new Fb({props:{post:t[0]}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function Jb(t){let e,n,r,s,i;const o=[Yb,Xb,Qb],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),r=a[n]=o[n](t);let l=t[1]&&zl(t);return{c(){e=T("div"),r.c(),s=V(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){R(u,e,h),a[n].m(e,null),v(e,s),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(Se(),k(a[d],1,1,()=>{a[d]=null}),ke(),r=a[n],r?r.p(u,h):(r=a[n]=o[n](u),r.c()),b(r,1),r.m(e,s)),u[1]?l?(l.p(u,h),h&2&&b(l,1)):(l=zl(u),l.c(),b(l,1),l.m(e,null)):l&&(Se(),k(l,1,1,()=>{l=null}),ke())},i(u){i||(b(r),b(l),i=!0)},o(u){k(r),k(l),i=!1},d(u){u&&D(e),a[n].d(),l&&l.d()}}}function Zb(t,e,n){let{post:r}=e,s=!1;const i=()=>{n(1,s=!s)};return t.$$set=o=>{"post"in o&&n(0,r=o.post)},[r,s,i]}class eT extends ee{constructor(e){super(),Z(this,e,Zb,Jb,Y,{post:0})}}function Hl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Kl(t){let e,n;return e=new eT({props:{post:t[1]}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function tT(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Kl(Hl(t,r,o));const i=o=>k(s[o],1,1,()=>{s[o]=null});return{c(){e=T("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){R(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=Hl(o,r,c);s[c]?(s[c].p(l,a),b(s[c],1)):(s[c]=Kl(l),s[c].c(),b(s[c],1),s[c].m(e,null))}for(Se(),c=r.length;c<s.length;c+=1)i(c);ke()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)b(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)k(s[a]);n=!1},d(o){o&&D(e),Dn(s,o)}}}function nT(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class rT extends ee{constructor(e){super(),Z(this,e,nT,tT,Y,{posts:0})}}function sT(t){let e;return{c(){e=T("div")},m(n,r){R(n,e,r),t[1](e)},p:N,i:N,o:N,d(n){n&&D(e),t[1](null)}}}function iT(t,e,n){const r=We(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&r("visible")},{rootMargin:"1250px"});let i;function o(a){_n[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class oT extends ee{constructor(e){super(),Z(this,e,iT,sT,Y,{})}}var aT="/assets/shironeko-x.c28cad00.png";function cT(t){let e,n,r,s,i;return{c(){e=T("div"),n=T("img"),s=V(),i=T("span"),i.textContent="You have reached the end",ys(n.src,r=aT)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),v(e,n),v(e,s),v(e,i)},p:N,i:N,o:N,d(o){o&&D(e)}}}class lT extends ee{constructor(e){super(),Z(this,e,null,cT,Y,{})}}var uT="/assets/shironeko-confused.4071d5b2.png";function hT(t){let e,n,r,s,i;return{c(){e=T("div"),n=T("img"),s=V(),i=T("span"),i.textContent="No results found",ys(n.src,r=uT)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),v(e,n),v(e,s),v(e,i)},p:N,i:N,o:N,d(o){o&&D(e)}}}class dT extends ee{constructor(e){super(),Z(this,e,null,hT,Y,{})}}const fT={sortProperty:"id",minScore:0},pT=()=>{const{subscribe:t,set:e}=Rn(fT);return{subscribe:t,set:e}};var ms=pT();function Gl(t,e,n){const r=t.slice();return r[9]=e[n],r}function gT(t){let e,n;return e=new dT({}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function mT(t){let e,n,r=Ct(t[0].count)+"",s,i,o,a,c,l,u,h,d,g,p,y,w,S,m,A,G,x,Q,oe,it,ue=t[0].pages,L=[];for(let O=0;O<ue.length;O+=1)L[O]=Wl(Gl(t,ue,O));const Ti=O=>k(L[O],1,1,()=>{L[O]=null}),te=[vT,yT],ae=[];function Ye(O,se){return O[2]?0:1}return A=Ye(t),G=ae[A]=te[A](t),{c(){e=T("div"),n=T("span"),s=Ee(r),i=Ee(" results"),o=V(),a=T("select"),c=T("option"),c.textContent="Date",l=T("option"),l.textContent="Score",u=V(),h=T("select"),d=T("option"),d.textContent="Any Score",g=T("option"),g.textContent="Score > 10",p=T("option"),p.textContent="Score > 100",y=T("option"),y.textContent="Score > 1K",w=V(),S=T("ol");for(let O=0;O<L.length;O+=1)L[O].c();m=V(),G.c(),x=Zt(),f(n,"class","svelte-1cyq4ol"),c.__value="id",c.value=c.__value,f(c,"class","svelte-1cyq4ol"),l.__value="score",l.value=l.__value,f(l,"class","svelte-1cyq4ol"),f(a,"title","Sort results by"),f(a,"class","svelte-1cyq4ol"),t[3].sortProperty===void 0&&rr(()=>t[6].call(a)),d.__value=0,d.value=d.__value,f(d,"class","svelte-1cyq4ol"),g.__value=10,g.value=g.__value,f(g,"class","svelte-1cyq4ol"),p.__value=100,p.value=p.__value,f(p,"class","svelte-1cyq4ol"),y.__value=1e3,y.value=y.__value,f(y,"class","svelte-1cyq4ol"),f(h,"class","svelte-1cyq4ol"),t[3].minScore===void 0&&rr(()=>t[7].call(h)),f(e,"class","header svelte-1cyq4ol"),f(S,"class","svelte-1cyq4ol")},m(O,se){R(O,e,se),v(e,n),v(n,s),v(n,i),v(e,o),v(e,a),v(a,c),v(a,l),Gr(a,t[3].sortProperty),v(e,u),v(e,h),v(h,d),v(h,g),v(h,p),v(h,y),Gr(h,t[3].minScore),R(O,w,se),R(O,S,se);for(let Nt=0;Nt<L.length;Nt+=1)L[Nt].m(S,null);R(O,m,se),ae[A].m(O,se),R(O,x,se),Q=!0,oe||(it=[J(a,"change",t[6]),J(h,"change",t[7])],oe=!0)},p(O,se){if((!Q||se&1)&&r!==(r=Ct(O[0].count)+"")&&Ke(s,r),se&8&&Gr(a,O[3].sortProperty),se&8&&Gr(h,O[3].minScore),se&1){ue=O[0].pages;let Oe;for(Oe=0;Oe<ue.length;Oe+=1){const Ha=Gl(O,ue,Oe);L[Oe]?(L[Oe].p(Ha,se),b(L[Oe],1)):(L[Oe]=Wl(Ha),L[Oe].c(),b(L[Oe],1),L[Oe].m(S,null))}for(Se(),Oe=ue.length;Oe<L.length;Oe+=1)Ti(Oe);ke()}let Nt=A;A=Ye(O),A===Nt?ae[A].p(O,se):(Se(),k(ae[Nt],1,1,()=>{ae[Nt]=null}),ke(),G=ae[A],G?G.p(O,se):(G=ae[A]=te[A](O),G.c()),b(G,1),G.m(x.parentNode,x))},i(O){if(!Q){for(let se=0;se<ue.length;se+=1)b(L[se]);b(G),Q=!0}},o(O){L=L.filter(Boolean);for(let se=0;se<L.length;se+=1)k(L[se]);k(G),Q=!1},d(O){O&&D(e),O&&D(w),O&&D(S),Dn(L,O),O&&D(m),ae[A].d(O),O&&D(x),oe=!1,Be(it)}}}function Wl(t){let e,n;return e=new rT({props:{posts:t[9]}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.posts=r[9]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function yT(t){let e,n;return e=new lT({}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function vT(t){let e,n;return e=new oT({}),e.$on("visible",t[8]),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function _T(t){let e,n,r,s;const i=[mT,gT],o=[];function a(c,l){return c[0].count?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),r=Zt()},m(c,l){~e&&o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(Se(),k(o[u],1,1,()=>{o[u]=null}),ke()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),b(n,1),n.m(r.parentNode,r)):n=null)},i(c){s||(b(n),s=!0)},o(c){k(n),s=!1},d(c){~e&&o[e].d(c),c&&D(r)}}}function wT(t,e,n){let r,s,i,o,a;Je(t,gs,d=>n(0,o=d)),Je(t,ms,d=>n(3,a=d));const c=We();function l(){a.sortProperty=Ya(this),ms.set(a)}function u(){a.minScore=Ya(this),ms.set(a)}const h=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,r=o.count/Of),t.$$.dirty&33&&n(2,s=o.pages.length<r),t.$$.dirty&1&&n(1,i=o.count===0)},[o,i,s,a,c,r,l,u,h]}class IT extends ee{constructor(e){super(),Z(this,e,wT,_T,Y,{})}}function ET(t){let e,n,r;return{c(){e=T("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-122jee0"),qe(e,"visible",t[0])},m(s,i){R(s,e,i),n||(r=J(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&qe(e,"visible",s[0])},i:N,o:N,d(s){s&&D(e),n=!1,r()}}}function bT(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>0),r=a};return iu(()=>{document.addEventListener("scroll",i,{passive:!0})}),rp(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class TT extends ee{constructor(e){super(),Z(this,e,bT,ET,Y,{})}}function Ql(t,e,n){const r=t.slice();return r[15]=e[n],r[17]=n,r}function Xl(t){let e,n,r,s=t[1],i=[];for(let c=0;c<s.length;c+=1)i[c]=Yl(Ql(t,s,c));const o=c=>k(i[c],1,1,()=>{i[c]=null});let a=t[1].length>1&&Jl(t);return{c(){e=T("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=V(),a&&a.c(),f(e,"class","svelte-102e1ul")},m(c,l){R(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);v(e,n),a&&a.m(e,null),r=!0},p(c,l){if(l&2){s=c[1];let u;for(u=0;u<s.length;u+=1){const h=Ql(c,s,u);i[u]?(i[u].p(h,l),b(i[u],1)):(i[u]=Yl(h),i[u].c(),b(i[u],1),i[u].m(e,n))}for(Se(),u=s.length;u<i.length;u+=1)o(u);ke()}c[1].length>1?a?a.p(c,l):(a=Jl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)b(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)k(i[l]);r=!1},d(c){c&&D(e),Dn(i,c),a&&a.d()}}}function Yl(t){let e,n;function r(){return t[5](t[17])}function s(){return t[6](t[15])}return e=new Uf({props:{tag:t[15]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){H(e.$$.fragment)},m(i,o){j(e,i,o),n=!0},p(i,o){t=i;const a={};o&2&&(a.tag=t[15]),e.$set(a)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){q(e,i)}}}function Jl(t){let e,n,r;return{c(){e=T("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-102e1ul"></i>',f(e,"class","add-supertag svelte-102e1ul"),f(e,"title","Click to create a new supertag")},m(s,i){R(s,e,i),n||(r=J(e,"click",t[7]),n=!0)},p:N,d(s){s&&D(e),n=!1,r()}}}function Zl(t){let e,n;return e=new JE({props:{tags:t[1]}}),e.$on("submit",t[9]),e.$on("close",t[10]),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.tags=r[1]),e.$set(i)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function ST(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,p,y;s=new pb({}),s.$on("pick",t[4]);let w=t[1].length&&Xl(t);c=new Lf({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[8]),u=new IT({}),u.$on("endreached",t[3]),d=new TT({});let S=t[0]&&Zl(t);return{c(){e=T("div"),n=T("h1"),n.textContent="kurosearch",r=V(),H(s.$$.fragment),i=V(),w&&w.c(),o=V(),a=T("div"),H(c.$$.fragment),l=V(),H(u.$$.fragment),h=V(),H(d.$$.fragment),g=V(),S&&S.c(),p=Zt(),f(n,"class","svelte-102e1ul"),f(a,"class","sort-row svelte-102e1ul"),f(e,"class","search-config svelte-102e1ul")},m(m,A){R(m,e,A),v(e,n),v(e,r),j(s,e,null),v(e,i),w&&w.m(e,null),v(e,o),v(e,a),j(c,a,null),R(m,l,A),j(u,m,A),R(m,h,A),j(d,m,A),R(m,g,A),S&&S.m(m,A),R(m,p,A),y=!0},p(m,[A]){m[1].length?w?(w.p(m,A),A&2&&b(w,1)):(w=Xl(m),w.c(),b(w,1),w.m(e,o)):w&&(Se(),k(w,1,1,()=>{w=null}),ke()),m[0]?S?(S.p(m,A),A&1&&b(S,1)):(S=Zl(m),S.c(),b(S,1),S.m(p.parentNode,p)):S&&(Se(),k(S,1,1,()=>{S=null}),ke())},i(m){y||(b(s.$$.fragment,m),b(w),b(c.$$.fragment,m),b(u.$$.fragment,m),b(d.$$.fragment,m),b(S),y=!0)},o(m){k(s.$$.fragment,m),k(w),k(c.$$.fragment,m),k(u.$$.fragment,m),k(d.$$.fragment,m),k(S),y=!1},d(m){m&&D(e),q(s),w&&w.d(),q(c),m&&D(l),q(u,m),m&&D(h),q(d,m),m&&D(g),S&&S.d(m),m&&D(p)}}}function kT(t,e,n){let r,s,i,o;Je(t,ko,m=>n(11,r=m)),Je(t,It,m=>n(1,s=m)),Je(t,ms,m=>n(12,i=m)),Je(t,gs,m=>n(13,o=m));let a=!1;const c=async()=>(gs.reset(),l()),l=async()=>{try{const m=u(),A=await CE(o.nextPage,m,i.sortProperty,i.minScore);gs.addPage(A)}catch(m){console.warn(m)}},u=()=>s.flatMap(m=>m.type==="supertag"?r.supertags.find(A=>A.name===m.name).tags:m.toSearchableTag());return[a,s,c,l,m=>It.addOrReplace(m.detail),m=>It.removeByIndex(m),m=>It.addOrReplace(new Bs(Df(m.modifier),m.name,m.count,m.type)),()=>{n(0,a=!0)},()=>c(),m=>{ko.addSupertag(m.detail),It.set([new Bs("+",m.detail.name,m.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class AT extends ee{constructor(e){super(),Z(this,e,kT,ST,Y,{})}}function CT(t){let e,n;return e=new Ff({}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},p:N,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function DT(t){let e,n,r;var s=t[0];function i(o){return{}}return s&&(e=new s(i())),{c(){e&&H(e.$$.fragment),n=Zt()},m(o,a){e&&j(e,o,a),R(o,n,a),r=!0},p(o,a){if(s!==(s=o[0])){if(e){Se();const c=e;k(c.$$.fragment,1,0,()=>{q(c,1)}),ke()}s?(e=new s(i()),H(e.$$.fragment),b(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}},i(o){r||(e&&b(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){o&&D(n),e&&q(e,o)}}}function RT(t){let e,n,r,s;const i=[DT,CT],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=Zt()},m(c,l){o[e].m(c,l),R(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Se(),k(o[u],1,1,()=>{o[u]=null}),ke(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),b(n,1),n.m(r.parentNode,r))},i(c){s||(b(n),s=!0)},o(c){k(n),s=!1},d(c){o[e].d(c),c&&D(r)}}}function NT(t,e,n){let{loadComponent:r}=e,s;return iu(async()=>{n(0,s=(await r()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,r=i.loadComponent)},[s,r]}class za extends ee{constructor(e){super(),Z(this,e,NT,RT,Y,{loadComponent:1})}}function OT(t){let e;return{c(){e=T("p"),e.textContent="You got lost..."},m(n,r){R(n,e,r)},i:N,o:N,d(n){n&&D(e)}}}function PT(t){let e,n;return e=new za({props:{loadComponent:VT}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function $T(t){let e,n;return e=new za({props:{loadComponent:FT}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function MT(t){let e,n;return e=new za({props:{loadComponent:UT}}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function LT(t){let e,n;return e=new AT({}),{c(){H(e.$$.fragment)},m(r,s){j(e,r,s),n=!0},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){q(e,r)}}}function xT(t){let e,n,r,s;const i=[LT,MT,$T,PT,OT],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),r=o[n]=i[n](t),{c(){e=T("main"),r.c()},m(c,l){R(c,e,l),o[n].m(e,null),s=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(Se(),k(o[u],1,1,()=>{o[u]=null}),ke(),r=o[n],r||(r=o[n]=i[n](c),r.c()),b(r,1),r.m(e,null))},i(c){s||(b(r),s=!0)},o(c){k(r),s=!1},d(c){c&&D(e),o[n].d()}}}const UT=()=>ja(()=>import("./Account.d92afedb.js"),["assets/Account.d92afedb.js","assets/Account.45e11b95.css"]),FT=()=>ja(()=>import("./Preferences.494fb8a7.js"),[]),VT=()=>ja(()=>import("./Help.4c602123.js"),["assets/Help.4c602123.js","assets/Help.8a6e8579.css"]);function BT(t,e,n){let r;return Je(t,fn,s=>n(0,r=s)),[r]}class jT extends ee{constructor(e){super(),Z(this,e,BT,xT,Y,{})}}function qT(t){let e,n,r,s,i,o;return e=new gE({}),r=new pE({}),i=new jT({}),{c(){H(e.$$.fragment),n=V(),H(r.$$.fragment),s=V(),H(i.$$.fragment)},m(a,c){j(e,a,c),R(a,n,c),j(r,a,c),R(a,s,c),j(i,a,c),o=!0},p:N,i(a){o||(b(e.$$.fragment,a),b(r.$$.fragment,a),b(i.$$.fragment,a),o=!0)},o(a){k(e.$$.fragment,a),k(r.$$.fragment,a),k(i.$$.fragment,a),o=!1},d(a){q(e,a),a&&D(n),q(r,a),a&&D(s),q(i,a)}}}class zT extends ee{constructor(e){super(),Z(this,e,null,qT,Y,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function eu(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[r.port2])})}function HT(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function KT(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,i){if(s){if(typeof s=="string")return tu(s,i);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?tu(s,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Gi=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Wi(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Bn=function(t,e){this.type=t,Object.assign(this,e)};function rs(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function GT(){}var WT={type:"SKIP_WAITING"};function nu(t,e){if(!e)return t&&t.then?t.then(GT):Promise.resolve()}var QT=function(t){var e,n;function r(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Gi,l.en=new Gi,l.on=new Gi,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!Wi(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,g=h.target,p=g.state,y=g===l.vn,w={sw:g,isExternal:y,originalEvent:h};!y&&l.mn&&(w.isUpdate=!0),l.dispatchEvent(new Bn(p,w)),p==="installed"?l.wn=self.setTimeout(function(){p==="installed"&&d.waiting===g&&l.dispatchEvent(new Bn("waiting",w))},200):p==="activating"&&(clearTimeout(l.wn),y||l.en.resolve(g))},l.dn=function(h){var d=l.hn,g=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Bn("controlling",{isExternal:g,originalEvent:h,sw:d,isUpdate:l.mn})),g||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,g=h.ports,p=h.source;return rs(l.getSW(),function(){l.an.has(p)&&l.dispatchEvent(new Bn("message",{data:d,originalEvent:h,ports:g,sw:p}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(g){return Promise.reject(g)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,i,o=r.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var g=h();return g&&g.then?g.then(d):d(g)}(function(){if(!l&&document.readyState!=="complete")return nu(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),rs(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&Wi(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Bn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?nu(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return rs(this.getSW(),function(c){return eu(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&eu(this.fn.waiting,WT)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Wi(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return rs(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},s=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&HT(s.prototype,i),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,s=KT(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function XT(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new QT("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),o.register({immediate:e}).then(c=>{s==null||s(c)}).catch(c=>{i==null||i(c)})),a}new zT({target:document.getElementById("app")});XT();export{ys as A,Lf as B,lE as C,Zt as D,Je as E,ko as F,Cl as G,Rn as H,rr as I,Gr as J,Ya as K,Uf as L,$l as M,Bs as N,_b as O,TT as P,Ol as Q,ee as S,f as a,R as b,v as c,Ke as d,T as e,Cn as f,N as g,D as h,Z as i,H as j,b as k,k as l,j as m,Tt as n,q as o,V as p,J as q,bi as r,Y as s,Ee as t,Se as u,ke as v,Dn as w,Be as x,We as y,un as z};
