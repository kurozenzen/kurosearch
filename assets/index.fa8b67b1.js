var xf=Object.defineProperty,Vf=Object.defineProperties;var Bf=Object.getOwnPropertyDescriptors;var Ha=Object.getOwnPropertySymbols;var jf=Object.prototype.hasOwnProperty,qf=Object.prototype.propertyIsEnumerable;var Ka=(t,e,n)=>e in t?xf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ga=(t,e)=>{for(var n in e||(e={}))jf.call(e,n)&&Ka(t,n,e[n]);if(Ha)for(var n of Ha(e))qf.call(e,n)&&Ka(t,n,e[n]);return t},Wa=(t,e)=>Vf(t,Bf(e));const zf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};zf();function x(){}function Hf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ru(t){return t()}function Qa(){return Object.create(null)}function Ke(t){t.forEach(ru)}function iu(t){return typeof t=="function"}function re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let tr;function Yt(t,e){return tr||(tr=document.createElement("a")),tr.href=e,t===tr.href}function Kf(t){return Object.keys(t).length===0}function Gf(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tt(t,e,n){t.$$.on_destroy.push(Gf(e,n))}function vt(t){return t==null?"":t}function Xa(t,e,n){return t.set(n),e}function g(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function $t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function gn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function de(t){return document.createTextNode(t)}function R(){return de(" ")}function Ds(){return de("")}function ne(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Wf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qf(t){return Array.from(t.childNodes)}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function it(t,e){t.value=e==null?"":e}function _n(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Zi(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ye(t,e,n){t.classList[n?"add":"remove"](e)}function Xf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let hs;function ft(t){hs=t}function Qr(){if(!hs)throw new Error("Function called outside component initialization");return hs}function Yf(t){Qr().$$.on_mount.push(t)}function Jf(t){Qr().$$.on_destroy.push(t)}function st(){const t=Qr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Xf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const Yn=[],bn=[],dr=[],Ya=[],Zf=Promise.resolve();let eo=!1;function ep(){eo||(eo=!0,Zf.then(No))}function Dn(t){dr.push(t)}const Ci=new Set;let nr=0;function No(){const t=hs;do{for(;nr<Yn.length;){const e=Yn[nr];nr++,ft(e),tp(e.$$)}for(ft(null),Yn.length=0,nr=0;bn.length;)bn.pop()();for(let e=0;e<dr.length;e+=1){const n=dr[e];Ci.has(n)||(Ci.add(n),n())}dr.length=0}while(Yn.length);for(;Ya.length;)Ya.pop()();eo=!1,Ci.clear(),ft(t)}function tp(t){if(t.fragment!==null){t.update(),Ke(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Dn)}}const fr=new Set;let Bt;function Ne(){Bt={r:0,c:[],p:Bt}}function Oe(){Bt.r||Ke(Bt.c),Bt=Bt.p}function k(t,e){t&&t.i&&(fr.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(fr.has(t))return;fr.add(t),Bt.c.push(()=>{fr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function Ja(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Ne(),D(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Oe())}):e.block.d(1),l.c(),k(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&No()}if(Hf(t)){const r=Qr();if(t.then(i=>{ft(r),s(e.then,1,e.value,i),ft(null)},i=>{if(ft(r),s(e.catch,2,e.error,i),ft(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function np(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function ee(t){t&&t.c()}function J(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||Dn(()=>{const c=i.map(ru).filter(iu);o?o.push(...c):Ke(c),t.$$.on_mount=[]}),a.forEach(Dn)}function Z(t,e){const n=t.$$;n.fragment!==null&&(Ke(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function sp(t,e){t.$$.dirty[0]===-1&&(Yn.push(t),ep(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,s,r,i,o,a=[-1]){const c=hs;ft(t);const l=t.$$={fragment:null,ctx:null,props:i,update:x,not_equal:r,bound:Qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Qa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&sp(t,h)),d}):[],l.update(),u=!0,Ke(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Qf(e.target);l.fragment&&l.fragment.l(h),h.forEach(L)}else l.fragment&&l.fragment.c();e.intro&&k(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),No()}ft(c)}class oe{$destroy(){Z(this,1),this.$destroy=x}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Kf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mn=[];function xn(t,e=x){let n;const s=new Set;function r(a){if(re(t,a)&&(t=a,n)){const c=!mn.length;for(const l of s)l[1](),mn.push(l,t);if(c){for(let l=0;l<mn.length;l+=2)mn[l][0](mn[l+1]);mn.length=0}}}function i(a){r(a(t))}function o(a,c=x){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||x),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const rp=Object.freeze(["search","account","settings","help"]),ip=t=>rp.includes(t),op=()=>{const{subscribe:t,set:e}=xn("search");return{subscribe:t,navigateTo(n){if(!ip(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var Gt=op();function ap(t){let e,n,s,r,i,o;return{c(){e=gn("svg"),n=gn("g"),s=gn("path"),r=gn("defs"),i=gn("clipPath"),o=gn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){$(a,e,c),g(e,n),g(n,s),g(e,r),g(r,i),g(i,o)},p:x,i:x,o:x,d(a){a&&L(e)}}}class cp extends oe{constructor(e){super(),ie(this,e,null,ap,re,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ou=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},lp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ou(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},up=function(t){const e=ou(t);return au.encodeByteArray(e,!0)},cu=function(t){return up(t).replace(/\./g,"")},hp=function(t){try{return au.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Oo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fp(){return Ae().indexOf("Electron/")>=0}function hu(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pp(){return Ae().indexOf("MSAppHost/")>=0}function du(){return typeof indexedDB=="object"}function fu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function gp(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="FirebaseError";class rt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mp,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?yp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rt(r,a,s)}}function yp(t,e){return t.replace(vp,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vp=/\{\$([^}]+)}/g;function _p(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Za(i)&&Za(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Zn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wp(t,e){const n=new Ip(t,e);return n.subscribe.bind(n)}class Ip{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Di),r.error===void 0&&(r.error=Di),r.complete===void 0&&(r.complete=Di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1e3,Tp=2,Sp=4*60*60*1e3,kp=.5;function ec(t,e=Ep,n=Tp){const s=e*Math.pow(n,t),r=Math.round(kp*s*(Math.random()-.5)*2);return Math.min(Sp,s+r)}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cp(t){return t===xt?void 0:t}function Dp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Np={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Op=ae.INFO,Pp={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Mp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Pp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xr{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Lp=(t,e)=>e.some(n=>t instanceof n);let tc,nc;function $p(){return tc||(tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return nc||(nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,to=new WeakMap,gu=new WeakMap,Ri=new WeakMap,Po=new WeakMap;function Fp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pu.set(n,t)}).catch(()=>{}),Po.set(e,t),e}function xp(t){if(to.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vp(t){no=t(no)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ni(this),e,...n);return gu.set(s,e.sort?e.sort():[e]),Dt(s)}:Up().includes(t)?function(...e){return t.apply(Ni(this),e),Dt(pu.get(this))}:function(...e){return Dt(t.apply(Ni(this),e))}}function jp(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&xp(t),Lp(t,$p())?new Proxy(t,no):t)}function Dt(t){if(t instanceof IDBRequest)return Fp(t);if(Ri.has(t))return Ri.get(t);const e=jp(t);return e!==t&&(Ri.set(t,e),Po.set(e,t)),e}const Ni=t=>Po.get(t);function mu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qp=["get","getKey","getAll","getAllKeys","count"],zp=["put","add","delete","clear"],Oi=new Map;function sc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oi.get(e))return Oi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Oi.set(e,i),i}Vp(t=>Wa(Ga({},t),{get:(e,n,s)=>sc(e,n)||t.get(e,n,s),has:(e,n)=>!!sc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",rc="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Xr("@firebase/app"),Gp="@firebase/app-compat",Wp="@firebase/analytics-compat",Qp="@firebase/analytics",Xp="@firebase/app-check-compat",Yp="@firebase/app-check",Jp="@firebase/auth",Zp="@firebase/auth-compat",eg="@firebase/database",tg="@firebase/database-compat",ng="@firebase/functions",sg="@firebase/functions-compat",rg="@firebase/installations",ig="@firebase/installations-compat",og="@firebase/messaging",ag="@firebase/messaging-compat",cg="@firebase/performance",lg="@firebase/performance-compat",ug="@firebase/remote-config",hg="@firebase/remote-config-compat",dg="@firebase/storage",fg="@firebase/storage-compat",pg="@firebase/firestore",gg="@firebase/firestore-compat",mg="firebase",yg="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="[DEFAULT]",vg={[so]:"fire-core",[Gp]:"fire-core-compat",[Qp]:"fire-analytics",[Wp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Xp]:"fire-app-check-compat",[Jp]:"fire-auth",[Zp]:"fire-auth-compat",[eg]:"fire-rtdb",[tg]:"fire-rtdb-compat",[ng]:"fire-fn",[sg]:"fire-fn-compat",[rg]:"fire-iid",[ig]:"fire-iid-compat",[og]:"fire-fcm",[ag]:"fire-fcm-compat",[cg]:"fire-perf",[lg]:"fire-perf-compat",[ug]:"fire-rc",[hg]:"fire-rc-compat",[dg]:"fire-gcs",[fg]:"fire-gcs-compat",[pg]:"fire-fst",[gg]:"fire-fst-compat","fire-js":"fire-js",[mg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,ro=new Map;function _g(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ro.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;ro.set(e,t);for(const n of Er.values())_g(n,t);return!0}function hn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new un("app","Firebase",wg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=yg;function bg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});const r=Er.get(s);if(r){if(ds(t,r.options)&&ds(n,r.config))return r;throw Zt.create("duplicate-app",{appName:s})}const i=new Rp(s);for(const a of ro.values())i.addComponent(a);const o=new Ig(t,n,i);return Er.set(s,o),o}function Mo(t=yu){const e=Er.get(t);if(!e)throw Zt.create("no-app",{appName:t});return e}function Je(t,e,n){var s;let r=(s=vg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}ut(new nt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Eg="firebase-heartbeat-database",Tg=1,fs="firebase-heartbeat-store";let Pi=null;function vu(){return Pi||(Pi=mu(Eg,Tg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fs)}}}).catch(t=>{throw Zt.create("idb-open",{originalErrorMessage:t.message})})),Pi}async function Sg(t){var e;try{return(await vu()).transaction(fs).objectStore(fs).get(_u(t))}catch(n){if(n instanceof rt)Jt.warn(n.message);else{const s=Zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Jt.warn(s.message)}}}async function ic(t,e){var n;try{const r=(await vu()).transaction(fs,"readwrite");return await r.objectStore(fs).put(e,_u(t)),r.done}catch(s){if(s instanceof rt)Jt.warn(s.message);else{const r=Zt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Jt.warn(r.message)}}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kg=1024,Ag=30*24*60*60*1e3;class Cg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ag}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oc(),{heartbeatsToSend:n,unsentEntries:s}=Dg(this._heartbeatsCache.heartbeats),r=cu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function oc(){return new Date().toISOString().substring(0,10)}function Dg(t,e=kg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ac(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ac(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return du()?fu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ac(t){return cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){ut(new nt("platform-logger",e=>new Hp(e),"PRIVATE")),ut(new nt("heartbeat",e=>new Cg(e),"PRIVATE")),Je(so,rc,t),Je(so,rc,"esm2017"),Je("fire-js","")}Ng("");function Lo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function wu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Og=wu,Iu=new un("auth","Firebase",wu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Xr("@firebase/auth");function pr(t,...e){cc.logLevel<=ae.ERROR&&cc.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw $o(t,...e)}function ot(t,...e){return $o(t,...e)}function bu(t,e,n){const s=Object.assign(Object.assign({},Og()),{[e]:n});return new un("auth","Firebase",s).create(e,{appName:t.name})}function Pg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&et(t,"argument-error"),bu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Iu.create(t,...e)}function K(t,e,...n){if(!t)throw $o(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pr(e),new Error(e)}function _t(t,e){t||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map;function gt(t){_t(t instanceof Function,"Expected a class definition");let e=lc.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){const n=hn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ds(i,e!=null?e:{}))return r;et(r,"already-initialized")}return n.initialize({options:e})}function Lg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $g(){return uc()==="http:"||uc()==="https:"}function uc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||Oo()||"connection"in navigator)?navigator.onLine:!0}function Fg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=lu()||uu()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Os(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,s,r={}){return Tu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Rs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Eu.fetch()(Su(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Tu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},xg),e);try{const r=new Bg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bu(t,u,l);et(t,u)}}catch(r){if(r instanceof rt)throw r;et(t,"network-request-failed")}}async function Ls(t,e,n,s,r={}){const i=await Ms(t,e,n,s,r);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Su(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Uo(t.config,r):`${t.config.apiScheme}://${r}`}class Bg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ot(this.auth,"network-request-failed")),Vg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=ot(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function qg(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zg(t,e=!1){const n=xe(t),s=await n.getIdToken(e),r=Fo(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ss(Mi(r.auth_time)),issuedAtTime:ss(Mi(r.iat)),expirationTime:ss(Mi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mi(t){return Number(t)*1e3}function Fo(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=hp(s);return i?JSON.parse(i):(pr("Failed to decode base64 JWT payload"),null)}catch(i){return pr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Hg(t){const e=Fo(t);return K(e,"internal-error"),K(typeof e.exp!="undefined","internal-error"),K(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rt&&Kg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ps(t,qg(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xg(i.providerUserInfo):[],a=Qg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ku(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Wg(t){const e=xe(t);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xg(t){return t.map(e=>{var{providerId:n}=e,s=Lo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){const n=await Tu(t,{},async()=>{const s=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Su(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Eu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken!="undefined","internal-error"),K(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Yg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new gs;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){K(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zg(this,e)}reload(){return Wg(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Tr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ps(this,jg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:P,isAnonymous:v,providerData:F,stsTokenManager:C}=n;K(E&&C,e,"internal-error");const U=gs.fromJSON(this.name,C);K(typeof E=="string",e,"internal-error"),Tt(h,e.name),Tt(d,e.name),K(typeof P=="boolean",e,"internal-error"),K(typeof v=="boolean",e,"internal-error"),Tt(p,e.name),Tt(m,e.name),Tt(I,e.name),Tt(b,e.name),Tt(A,e.name),Tt(w,e.name);const j=new Wt({uid:E,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:v,photoURL:m,phoneNumber:p,tenantId:I,stsTokenManager:U,createdAt:A,lastLoginAt:w});return F&&Array.isArray(F)&&(j.providerData=F.map(M=>Object.assign({},M))),b&&(j._redirectEventId=b),j}static async _fromIdTokenResponse(e,n,s=!1){const r=new gs;r.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Tr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Au.type="NONE";const hc=Au;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gr(this.userKey,r.apiKey,i),this.fullPersistenceKey=gr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new En(gt(hc),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||gt(hc);const o=gr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Wt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ou(e))return"Blackberry";if(Pu(e))return"Webos";if(xo(e))return"Safari";if((e.includes("chrome/")||Du(e))&&!e.includes("edge/"))return"Chrome";if(Nu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cu(t=Ae()){return/firefox\//i.test(t)}function xo(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Du(t=Ae()){return/crios\//i.test(t)}function Ru(t=Ae()){return/iemobile/i.test(t)}function Nu(t=Ae()){return/android/i.test(t)}function Ou(t=Ae()){return/blackberry/i.test(t)}function Pu(t=Ae()){return/webos/i.test(t)}function Yr(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jg(t=Ae()){var e;return Yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zg(){return hu()&&document.documentMode===10}function Mu(t=Ae()){return Yr(t)||Nu(t)||Pu(t)||Ou(t)||/windows phone/i.test(t)||Ru(t)}function em(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t,e=[]){let n;switch(t){case"Browser":n=dc(Ae());break;case"Worker":n=`${dc(Ae())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${s}`}/**
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
 */class tm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Tr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new un("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function $s(t){return xe(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function sm(t,e){return Ms(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(t,e){return Ls(t,"POST","/v1/accounts:signInWithPassword",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}async function om(t,e){return Ls(t,"POST","/v1/accounts:signInWithEmailLink",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Vo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ms(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return im(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return om(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(t,e){return Ls(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="http://localhost";class en extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Lo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new en(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Tn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tn(e,n)}buildRequest(){const e={requestUri:am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lm(t){const e=Jn(Zn(t)).link,n=e?Jn(Zn(e)).deep_link_id:null,s=Jn(Zn(t)).deep_link_id;return(s?Jn(Zn(s)).link:null)||s||n||e||t}class Bo{constructor(e){var n,s,r,i,o,a;const c=Jn(Zn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=cm((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lm(e);try{return new Bo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.providerId=Vn.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bo.parseLink(n);return K(s,"argument-error"),ms._fromEmailAndCode(e,s.code,s.tenantId)}}Vn.PROVIDER_ID="password";Vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Us{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dt.credential(n,s)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Us{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Us{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return At.credential(n,s)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e){return Ls(t,"POST","/v1/accounts:signUp",Ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wt._fromIdTokenResponse(e,s,r),o=pc(s);return new tn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=pc(s);return new tn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function pc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends rt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Sr(e,n,s,r)}}function $u(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,i,e,s):i})}async function hm(t,e,n=!1){const s=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await ps(t,$u(r,i,e,t),n);K(o.idToken,r,"internal-error");const a=Fo(o.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(t.uid===c,r,"user-mismatch"),tn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(t,e,n=!1){const s="signIn",r=await $u(t,s,e),i=await tn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function fm(t,e){return Uu($s(t),e)}async function pm(t,e,n){const s=$s(t),r=await um(s,{returnSecureToken:!0,email:e,password:n}),i=await tn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function gm(t,e,n){return fm(xe(t),Vn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){return xe(t).setPersistence(e)}function Fu(t,e,n,s){return xe(t).onAuthStateChanged(e,n,s)}function ym(t){return xe(t).signOut()}const kr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kr,"1"),this.storage.removeItem(kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){const t=Ae();return xo(t)||Yr(t)}const _m=1e3,wm=10;class Vu extends xu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vm()&&em(),this.fallbackToPolling=Mu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vu.type="LOCAL";const Bu=Vu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends xu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ju.type="SESSION";const qu=ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Im(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=qo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function Em(t){at().location.href=t}/**
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
 */function zu(){return typeof at().WorkerGlobalScope!="undefined"&&typeof at().importScripts=="function"}async function Tm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function km(){return zu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firebaseLocalStorageDb",Am=1,Ar="firebaseLocalStorage",Ku="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(t,e){return t.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function Cm(){const t=indexedDB.deleteDatabase(Hu);return new Fs(t).toPromise()}function oo(){const t=indexedDB.open(Hu,Am);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ar,{keyPath:Ku})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ar)?e(s):(s.close(),await Cm(),e(await oo()))})})}async function gc(t,e,n){const s=Zr(t,!0).put({[Ku]:e,value:n});return new Fs(s).toPromise()}async function Dm(t,e){const n=Zr(t,!1).get(e),s=await new Fs(n).toPromise();return s===void 0?null:s.value}function mc(t,e){const n=Zr(t,!0).delete(e);return new Fs(n).toPromise()}const Rm=800,Nm=3;class Gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Nm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jr._getInstance(km()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tm(),!this.activeServiceWorker)return;this.sender=new bm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await gc(e,kr,"1"),await mc(e,kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Dm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Zr(r,!1).getAll();return new Fs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gu.type="LOCAL";const Om=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=ot("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Pm().appendChild(s)})}function Lm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Os(3e4,6e4);/**
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
 */function Wu(t,e){return e?gt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $m(t){return Uu(t.auth,new zo(t),t.bypassAuthState)}function Um(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),dm(n,new zo(t),t.bypassAuthState)}async function Fm(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hm(n,new zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $m;case"linkViaPopup":case"linkViaRedirect":return Fm;case"reauthViaPopup":case"reauthViaRedirect":return Um;default:et(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Os(2e3,1e4);async function Vm(t,e,n){const s=$s(t);Pg(t,e,jo);const r=Wu(s,n);return new jt(s,"signInViaPopup",e,r).executeNotNull()}class jt extends Qu{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xm.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="pendingRedirect",mr=new Map;class jm extends Qu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const s=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(t,e){const n=Km(e),s=Hm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function zm(t,e){mr.set(t._key(),e)}function Hm(t){return gt(t._redirectPersistence)}function Km(t){return gr(Bm,t.config.apiKey,t.name)}async function Gm(t,e,n=!1){const s=$s(t),r=Wu(s,e),o=await new jm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=10*60*1e3;class Qm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wm&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zm=/^https?/;async function ey(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ym(t);for(const n of e)try{if(ty(n))return}catch{}et(t,"unauthorized-domain")}function ty(t){const e=io(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Zm.test(n))return!1;if(Jm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ny=new Os(3e4,6e4);function vc(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sy(t){return new Promise((e,n)=>{var s,r,i;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),n(ot(t,"network-request-failed"))},timeout:ny.get()})}if(!((r=(s=at().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=Lm("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},Mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yr=null,e})}let yr=null;function ry(t){return yr=yr||sy(t),yr}/**
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
 */const iy=new Os(5e3,15e3),oy="__/auth/iframe",ay="emulator/auth/iframe",cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uy(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uo(e,ay):`https://${t.config.authDomain}/${oy}`,s={apiKey:e.apiKey,appName:t.name,v:Ns},r=ly.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Rs(s).slice(1)}`}async function hy(t){const e=await ry(t),n=at().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:uy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=at().setTimeout(()=>{i(o)},iy.get());function c(){at().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fy=500,py=600,gy="_blank",my="http://localhost";class _c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yy(t,e,n,s=fy,r=py){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dy),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=Du(l)?gy:n),Cu(l)&&(e=e||my,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Jg(l)&&a!=="_self")return vy(e||"",a),new _c(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new _c(h)}function vy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const _y="__/auth/handler",wy="emulator/auth/handler";function wc(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ns,eventId:r};if(e instanceof jo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_p(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Us){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Iy(t)}?${Rs(a).slice(1)}`}function Iy({config:t}){return t.emulator?Uo(t,wy):`https://${t.authDomain}/${_y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="webStorageSupport";class by{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qu,this._completeRedirectFn=Gm,this._overrideRedirectResult=zm}async _openPopup(e,n,s,r){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wc(e,n,s,io(),r);return yy(e,o,qo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Em(wc(e,n,s,io(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(_t(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hy(e),s=new Qm(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Li,{type:Li},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Li];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ey(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mu()||xo()||Yr()}}const Ey=by;var Ic="@firebase/auth",bc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ky(t){ut(new nt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lu(t)},u=new nm(a,c,l);return Lg(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ut(new nt("auth-internal",e=>{const n=$s(e.getProvider("auth").getImmediate());return(s=>new Ty(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Ic,bc,Sy(t)),Je(Ic,bc,"esm2017")}/**
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
 */function Ay(t=Mo()){const e=hn(t,"auth");return e.isInitialized()?e.getImmediate():Mg(t,{popupRedirectResolver:Ey,persistence:[Om,Bu,qu]})}ky("Browser");const Yu="@firebase/installations",Ho="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=1e4,Zu=`w:${Ho}`,eh="FIS_v2",Cy="https://firebaseinstallations.googleapis.com/v1",Dy=60*60*1e3,Ry="installations",Ny="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},nn=new un(Ry,Ny,Oy);function th(t){return t instanceof rt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh({projectId:t}){return`${Cy}/projects/${t}/installations`}function sh(t){return{token:t.token,requestStatus:2,expiresIn:My(t.expiresIn),creationTime:Date.now()}}async function rh(t,e){const s=(await e.json()).error;return nn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ih({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Py(t,{refreshToken:e}){const n=ih(t);return n.append("Authorization",Ly(e)),n}async function oh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function My(t){return Number(t.replace("s","000"))}function Ly(t){return`${eh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=nh(t),r=ih(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:eh,appId:t.appId,sdkVersion:Zu},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await oh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:sh(l.authToken)}}else throw await rh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Uy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=/^[cdef][\w-]{21}$/,ao="";function xy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Vy(t);return Fy.test(n)?n:ao}catch{return ao}}function Vy(t){return Uy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ch=new Map;function lh(t,e){const n=ei(t);uh(n,e),By(n,e)}function uh(t,e){const n=ch.get(t);if(!!n)for(const s of n)s(e)}function By(t,e){const n=jy();n&&n.postMessage({key:t,fid:e}),qy()}let qt=null;function jy(){return!qt&&"BroadcastChannel"in self&&(qt=new BroadcastChannel("[Firebase] FID Change"),qt.onmessage=t=>{uh(t.data.key,t.data.fid)}),qt}function qy(){ch.size===0&&qt&&(qt.close(),qt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="firebase-installations-database",Hy=1,sn="firebase-installations-store";let $i=null;function Ko(){return $i||($i=mu(zy,Hy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sn)}}})),$i}async function Cr(t,e){const n=ei(t),r=(await Ko()).transaction(sn,"readwrite"),i=r.objectStore(sn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&lh(t,e.fid),e}async function hh(t){const e=ei(t),s=(await Ko()).transaction(sn,"readwrite");await s.objectStore(sn).delete(e),await s.done}async function ti(t,e){const n=ei(t),r=(await Ko()).transaction(sn,"readwrite"),i=r.objectStore(sn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&lh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){let e;const n=await ti(t.appConfig,s=>{const r=Ky(s),i=Gy(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===ao?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Ky(t){const e=t||{fid:xy(),registrationStatus:0};return dh(e)}function Gy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Wy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Qy(t)}:{installationEntry:e}}async function Wy(t,e){try{const n=await $y(t,e);return Cr(t.appConfig,n)}catch(n){throw th(n)&&n.customData.serverCode===409?await hh(t.appConfig):await Cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Qy(t){let e=await Ec(t.appConfig);for(;e.registrationStatus===1;)await ah(100),e=await Ec(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Go(t);return s||n}return e}function Ec(t){return ti(t,e=>{if(!e)throw nn.create("installation-not-found");return dh(e)})}function dh(t){return Xy(t)?{fid:t.fid,registrationStatus:0}:t}function Xy(t){return t.registrationStatus===1&&t.registrationTime+Ju<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy({appConfig:t,heartbeatServiceProvider:e},n){const s=Jy(t,n),r=Py(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Zu,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await oh(()=>fetch(s,a));if(c.ok){const l=await c.json();return sh(l)}else throw await rh("Generate Auth Token",c)}function Jy(t,{fid:e}){return`${nh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e=!1){let n;const s=await ti(t.appConfig,i=>{if(!fh(i))throw nn.create("not-registered");const o=i.authToken;if(!e&&tv(o))return i;if(o.requestStatus===1)return n=Zy(t,e),i;{if(!navigator.onLine)throw nn.create("app-offline");const a=sv(i);return n=ev(t,a),a}});return n?await n:s.authToken}async function Zy(t,e){let n=await Tc(t.appConfig);for(;n.authToken.requestStatus===1;)await ah(100),n=await Tc(t.appConfig);const s=n.authToken;return s.requestStatus===0?Wo(t,e):s}function Tc(t){return ti(t,e=>{if(!fh(e))throw nn.create("not-registered");const n=e.authToken;return rv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ev(t,e){try{const n=await Yy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Cr(t.appConfig,s),n}catch(n){if(th(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hh(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cr(t.appConfig,s)}throw n}}function fh(t){return t!==void 0&&t.registrationStatus===2}function tv(t){return t.requestStatus===2&&!nv(t)}function nv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Dy}function sv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function rv(t){return t.requestStatus===1&&t.requestTime+Ju<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t){const e=t,{installationEntry:n,registrationPromise:s}=await Go(e);return s?s.catch(console.error):Wo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t,e=!1){const n=t;return await av(n),(await Wo(n,e)).token}async function av(t){const{registrationPromise:e}=await Go(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t){if(!t||!t.options)throw Ui("App Configuration");if(!t.name)throw Ui("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ui(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ui(t){return nn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="installations",lv="installations-internal",uv=t=>{const e=t.getProvider("app").getImmediate(),n=cv(e),s=hn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hv=t=>{const e=t.getProvider("app").getImmediate(),n=hn(e,ph).getImmediate();return{getId:()=>iv(n),getToken:r=>ov(n,r)}};function dv(){ut(new nt(ph,uv,"PUBLIC")),ut(new nt(lv,hv,"PRIVATE"))}dv();Je(Yu,Ho);Je(Yu,Ho,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="analytics",fv="firebase_id",pv="origin",gv=60*1e3,mv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Xr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yv(t,e){const n=document.createElement("script");n.src=`${gh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function vv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _v(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await mh(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ge.error(a)}t("config",r,i)}async function wv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await mh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ge.error(i)}}function Iv(t,e,n,s){async function r(i,o,a){try{i==="event"?await wv(t,e,n,o,a):i==="config"?await _v(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ge.error(c)}}return r}function bv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Iv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Ev(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(gh))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ze=new un("analytics","Analytics",Tv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=30,kv=1e3;class Av{constructor(e={},n=kv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yh=new Av;function Cv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Dv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Cv(s)},i=mv.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Rv(t,e=yh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ze.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ze.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Pv;return setTimeout(async()=>{a.abort()},n!==void 0?n:gv),vh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function vh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=yh){var i,o;const{appId:a,measurementId:c}=t;try{await Nv(s,e)}catch(l){if(c)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Dv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Ov(u)){if(r.deleteThrottleMetadata(a),c)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?ec(n,r.intervalMillis,Sv):ec(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Ge.debug(`Calling attemptFetch again in ${h} millis`),vh(t,d,s,r)}}function Nv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ov(t){if(!(t instanceof rt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Pv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Mv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(){var t;if(du())try{await fu()}catch(e){return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ge.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $v(t,e,n,s,r,i,o){var a;const c=Rv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ge.error(p)),e.push(c);const l=Lv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);Ev()||yv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[pv]="firebase",d.update=!0,h!=null&&(d[fv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.app=e}_delete(){return delete rs[this.app.options.appId],Promise.resolve()}}let rs={},Sc=[];const kc={};let Fi="dataLayer",Fv="gtag",Ac,_h,Cc=!1;function xv(){const t=[];if(Oo()&&t.push("This is a browser extension environment."),gp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function Vv(t,e,n){xv();const s=t.options.appId;if(!s)throw Ze.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(rs[s]!=null)throw Ze.create("already-exists",{id:s});if(!Cc){vv(Fi);const{wrappedGtag:i,gtagCore:o}=bv(rs,Sc,kc,Fi,Fv);_h=i,Ac=o,Cc=!0}return rs[s]=$v(t,Sc,kc,e,Ac,Fi,n),new Uv(t)}function Bv(t=Mo()){t=xe(t);const e=hn(t,Dr);return e.isInitialized()?e.getImmediate():jv(t)}function jv(t,e={}){const n=hn(t,Dr);if(n.isInitialized()){const r=n.getImmediate();if(ds(e,n.getOptions()))return r;throw Ze.create("already-initialized")}return n.initialize({options:e})}function qv(t,e,n,s){t=xe(t),Mv(_h,rs[t.app.options.appId],e,n,s).catch(r=>Ge.error(r))}const Dc="@firebase/analytics",Rc="0.8.0";function zv(){ut(new nt(Dr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Vv(s,r,n)},"PUBLIC")),ut(new nt("analytics-internal",t,"PRIVATE")),Je(Dc,Rc),Je(Dc,Rc,"esm2017");function t(e){try{const n=e.getProvider(Dr).getImmediate();return{logEvent:(s,r,i)=>qv(n,s,r,i)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}zv();var Hv="firebase",Kv="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(Hv,Kv,"app");var Gv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Qo=Qo||{},G=Gv||self;function Rr(){}function co(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wv(t){return Object.prototype.hasOwnProperty.call(t,xi)&&t[xi]||(t[xi]=++Qv)}var xi="closure_uid_"+(1e9*Math.random()>>>0),Qv=0;function Xv(t,e,n){return t.call.apply(t.bind,arguments)}function Yv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=Xv:Pe=Yv,Pe.apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ut(){this.s=this.s,this.o=this.o}var Jv=0;Ut.prototype.s=!1;Ut.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Jv!=0)&&Wv(this)};Ut.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ih=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Zv(t){e:{var e=z_;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Nc(t){return Array.prototype.concat.apply([],arguments)}function Xo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Nr(t){return/^[\s\xa0]*$/.test(t)}var Oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function Vi(t,e){return t<e?-1:t>e?1:0}var Be;e:{var Pc=G.navigator;if(Pc){var Mc=Pc.userAgent;if(Mc){Be=Mc;break e}}Be=""}function Yo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function bh(t){const e={};for(const n in t)e[n]=t[n];return e}var Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Lc.length;i++)n=Lc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Jo(t){return Jo[" "](t),t}Jo[" "]=Rr;function e_(t){var e=s_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var t_=Ve(Be,"Opera"),Rn=Ve(Be,"Trident")||Ve(Be,"MSIE"),Th=Ve(Be,"Edge"),lo=Th||Rn,Sh=Ve(Be,"Gecko")&&!(Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge"))&&!(Ve(Be,"Trident")||Ve(Be,"MSIE"))&&!Ve(Be,"Edge"),n_=Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge");function kh(){var t=G.document;return t?t.documentMode:void 0}var Or;e:{var Bi="",ji=function(){var t=Be;if(Sh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Th)return/Edge\/([\d\.]+)/.exec(t);if(Rn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(n_)return/WebKit\/(\S+)/.exec(t);if(t_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ji&&(Bi=ji?ji[1]:""),Rn){var qi=kh();if(qi!=null&&qi>parseFloat(Bi)){Or=String(qi);break e}}Or=Bi}var s_={};function r_(){return e_(function(){let t=0;const e=Oc(String(Or)).split("."),n=Oc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Vi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Vi(r[2].length==0,i[2].length==0)||Vi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var uo;if(G.document&&Rn){var $c=kh();uo=$c||parseInt(Or,10)||void 0}else uo=void 0;var i_=uo,o_=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Rr,e),G.removeEventListener("test",Rr,e)}catch{}return t}();function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};function ys(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sh){e:{try{Jo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:a_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ys.Z.h.call(this)}}$e(ys,Fe);var a_={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),c_=0;function l_(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++c_,this.ca=this.fa=!1}function ni(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function si(t){this.src=t,this.g={},this.h=0}si.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=fo(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new l_(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function ho(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=wh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ni(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Zo="closure_lm_"+(1e6*Math.random()|0),zi={};function Ah(t,e,n,s,r){if(s&&s.once)return Dh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ah(t,e[i],n,s,r);return null}return n=na(n),t&&t[Vs]?t.N(e,n,xs(s)?!!s.capture:!!s,r):Ch(t,e,n,!1,s,r)}function Ch(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xs(r)?!!r.capture:!!r,a=ta(t);if(a||(t[Zo]=a=new si(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=u_(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)o_||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Nh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function u_(){function t(n){return e.call(t.src,t.listener,n)}var e=h_;return t}function Dh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dh(t,e[i],n,s,r);return null}return n=na(n),t&&t[Vs]?t.O(e,n,xs(s)?!!s.capture:!!s,r):Ch(t,e,n,!0,s,r)}function Rh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rh(t,e[i],n,s,r);else s=xs(s)?!!s.capture:!!s,n=na(n),t&&t[Vs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=fo(i,n,s,r),-1<n&&(ni(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ta(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fo(e,n,s,r)),(n=-1<t?e[t]:null)&&ea(n))}function ea(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Vs])ho(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Nh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ta(e))?(ho(n,t),n.h==0&&(n.src=null,e[Zo]=null)):ni(t)}}}function Nh(t){return t in zi?zi[t]:zi[t]="on"+t}function h_(t,e){if(t.ca)t=!0;else{e=new ys(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ea(t),t=n.call(s,e)}return t}function ta(t){return t=t[Zo],t instanceof si?t:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(t){return typeof t=="function"?t:(t[Hi]||(t[Hi]=function(e){return t.handleEvent(e)}),t[Hi])}function Ce(){Ut.call(this),this.i=new si(this),this.P=this,this.I=null}$e(Ce,Ut);Ce.prototype[Vs]=!0;Ce.prototype.removeEventListener=function(t,e,n,s){Rh(this,t,e,n,s)};function Me(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var r=e;e=new Fe(s,t),Eh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ir(o,s,!0,e)&&r}if(o=e.g=t,r=ir(o,s,!0,e)&&r,r=ir(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ir(o,s,!1,e)&&r}Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ni(n[s]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ce.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ir(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ho(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var sa=G.JSON.stringify;function d_(){var t=Ph;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class f_{constructor(){this.h=this.g=null}add(e,n){const s=Oh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Oh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new p_,t=>t.reset());class p_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g_(t){G.setTimeout(()=>{throw t},0)}function ra(t,e){po||m_(),go||(po(),go=!0),Ph.add(t,e)}var po;function m_(){var t=G.Promise.resolve(void 0);po=function(){t.then(y_)}}var go=!1,Ph=new f_;function y_(){for(var t;t=d_();){try{t.h.call(t.g)}catch(n){g_(n)}var e=Oh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}go=!1}function ri(t,e){Ce.call(this),this.h=t||1,this.g=e||G,this.j=Pe(this.kb,this),this.l=Date.now()}$e(ri,Ce);O=ri.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(ia(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ia(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){ri.Z.M.call(this),ia(this),delete this.g};function oa(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function Mh(t){t.g=oa(()=>{t.g=null,t.i&&(t.i=!1,Mh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class v_ extends Ut{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mh(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(t){Ut.call(this),this.h=t,this.g={}}$e(vs,Ut);var Uc=[];function Lh(t,e,n,s){Array.isArray(n)||(n&&(Uc[0]=n.toString()),n=Uc);for(var r=0;r<n.length;r++){var i=Ah(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $h(t){Yo(t.g,function(e,n){this.g.hasOwnProperty(n)&&ea(e)},t),t.g={}}vs.prototype.M=function(){vs.Z.M.call(this),$h(this)};vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ii(){this.g=!0}ii.prototype.Aa=function(){this.g=!1};function __(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function w_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function wn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+b_(t,n)+(s?" "+s:"")})}function I_(t,e){t.info(function(){return"TIMEOUT: "+e})}ii.prototype.info=function(){};function b_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return sa(n)}catch{return e}}var dn={},Fc=null;function oi(){return Fc=Fc||new Ce}dn.Ma="serverreachability";function Uh(t){Fe.call(this,dn.Ma,t)}$e(Uh,Fe);function _s(t){const e=oi();Me(e,new Uh(e,t))}dn.STAT_EVENT="statevent";function Fh(t,e){Fe.call(this,dn.STAT_EVENT,t),this.stat=e}$e(Fh,Fe);function je(t){const e=oi();Me(e,new Fh(e,t))}dn.Na="timingevent";function xh(t,e){Fe.call(this,dn.Na,t),this.size=e}$e(xh,Fe);function Bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ai={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function aa(){}aa.prototype.h=null;function xc(t){return t.h||(t.h=t.i())}function Bh(){}var js={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ca(){Fe.call(this,"d")}$e(ca,Fe);function la(){Fe.call(this,"c")}$e(la,Fe);var mo;function ci(){}$e(ci,aa);ci.prototype.g=function(){return new XMLHttpRequest};ci.prototype.i=function(){return{}};mo=new ci;function qs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new vs(this),this.P=E_,t=lo?125:void 0,this.W=new ri(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var E_=45e3,yo={},Pr={};O=qs.prototype;O.setTimeout=function(t){this.P=t};function vo(t,e,n){t.K=1,t.v=ui(wt(e)),t.s=n,t.U=!0,qh(t,null)}function qh(t,e){t.F=Date.now(),zs(t),t.A=wt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Xh(n.h,"t",s),t.C=0,n=t.l.H,t.h=new jh,t.g=md(t.l,n?e:null,!t.s),0<t.O&&(t.L=new v_(Pe(t.Ia,t,t.g),t.O)),Lh(t.V,t.g,"readystatechange",t.gb),e=t.H?bh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),_s(1),__(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&mt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=mt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||lo||this.g&&(this.h.h||this.g.ga()||qc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?_s(3):_s(2)),li(this);var n=this.g.ba();this.N=n;t:if(zh(this)){var s=qc(this.g);t="";var r=s.length,i=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){zt(this),is(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,w_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nr(a)){var l=a;break t}}l=null}if(n=l)wn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_o(this,n);else{this.i=!1,this.o=3,je(12),zt(this),is(this);break e}}this.U?(Hh(this,u,o),lo&&this.i&&u==3&&(Lh(this.V,this.W,"tick",this.fb),this.W.start())):(wn(this.j,this.m,o,null),_o(this,o)),u==4&&zt(this),this.i&&!this.I&&(u==4?dd(this.l,this):(this.i=!1,zs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),zt(this),is(this)}}}catch{}finally{}};function zh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Hh(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=T_(t,n),r==Pr){e==4&&(t.o=4,je(14),s=!1),wn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==yo){t.o=4,je(15),wn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else wn(t.j,t.m,r,null),_o(t,r);zh(t)&&r!=Pr&&r!=yo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),va(e),e.L=!0,je(11))):(wn(t.j,t.m,n,"[Invalid Chunked Response]"),zt(t),is(t))}O.fb=function(){if(this.g){var t=mt(this.g),e=this.g.ga();this.C<e.length&&(li(this),Hh(this,t,e),this.i&&t!=4&&zs(this))}};function T_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Pr:(n=Number(e.substring(n,s)),isNaN(n)?yo:(s+=1,s+n>e.length?Pr:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,zt(this)};function zs(t){t.Y=Date.now()+t.P,Kh(t,t.P)}function Kh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bs(Pe(t.eb,t),e)}function li(t){t.B&&(G.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(I_(this.j,this.A),this.K!=2&&(_s(3),je(17)),zt(this),this.o=2,is(this)):Kh(this,this.Y-t)};function is(t){t.l.G==0||t.I||dd(t.l,t)}function zt(t){li(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ia(t.W),$h(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _o(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wo(n.i,t))){if(n.I=t.N,!t.J&&wo(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ur(n),fi(n);else break e;ya(n),je(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Bs(Pe(n.ab,n),6e3));if(1>=Zh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ht(n,11)}else if((t.J||n.g==t)&&Ur(n),!Nr(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(Ve(m,"spdy")||Ve(m,"quic")||Ve(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(da(i,i.h),i.h=null))}if(s.D){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.sa=I,pe(s.F,s.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=gd(s,s.H?s.la:null,s.W),o.J){ed(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(li(a),zs(a)),s.g=o}else ud(s);0<n.l.length&&pi(n)}else l[0]!="stop"&&l[0]!="close"||Ht(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ht(n,7):ma(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}_s(4)}catch{}}function S_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(co(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ua(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(co(t)||typeof t=="string")Ih(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(co(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=S_(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Bn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Bn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Bn.prototype;O.R=function(){ha(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return ha(this),this.g.concat()};function ha(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];rn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],rn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return rn(this.h,t)?this.h[t]:e};O.set=function(t,e){rn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function rn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Gh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function k_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function on(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof on){this.g=e!==void 0?e:t.g,Mr(this,t.j),this.s=t.s,Lr(this,t.i),$r(this,t.m),this.l=t.l,e=t.h;var n=new ws;n.i=e.i,e.g&&(n.g=new Bn(e.g),n.h=e.h),Vc(this,n),this.o=t.o}else t&&(n=String(t).match(Gh))?(this.g=!!e,Mr(this,n[1]||"",!0),this.s=os(n[2]||""),Lr(this,n[3]||"",!0),$r(this,n[4]),this.l=os(n[5]||"",!0),Vc(this,n[6]||"",!0),this.o=os(n[7]||"")):(this.g=!!e,this.h=new ws(null,this.g))}on.prototype.toString=function(){var t=[],e=this.j;e&&t.push(es(e,Bc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(es(e,Bc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(es(n,n.charAt(0)=="/"?N_:R_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",es(n,P_)),t.join("")};function wt(t){return new on(t)}function Mr(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lr(t,e,n){t.i=n?os(e,!0):e}function $r(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vc(t,e,n){e instanceof ws?(t.h=e,M_(t.h,t.g)):(n||(e=es(e,O_)),t.h=new ws(e,t.g))}function pe(t,e,n){t.h.set(e,n)}function ui(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function A_(t){return t instanceof on?wt(t):new on(t,void 0)}function C_(t,e,n,s){var r=new on(null,void 0);return t&&Mr(r,t),e&&Lr(r,e),n&&$r(r,n),s&&(r.l=s),r}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,D_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function D_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bc=/[#\/\?@]/g,R_=/[#\?:]/g,N_=/[#\?]/g,O_=/[#\?@]/g,P_=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ft(t){t.g||(t.g=new Bn,t.h=0,t.i&&k_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ws.prototype;O.add=function(t,e){Ft(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wh(t,e){Ft(t),e=jn(t,e),rn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,rn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ha(t)))}function Qh(t,e){return Ft(t),e=jn(t,e),rn(t.g.h,e)}O.forEach=function(t,e){Ft(this),this.g.forEach(function(n,s){Ih(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){Ft(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){Ft(this);var e=[];if(typeof t=="string")Qh(this,t)&&(e=Nc(e,this.g.get(jn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Nc(e,t[n])}return e};O.set=function(t,e){return Ft(this),this.i=null,t=jn(this,t),Qh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Xh(t,e,n){Wh(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),Xo(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function M_(t,e){e&&!t.j&&(Ft(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wh(this,s),Xh(this,r,n))},t)),t.j=e}var L_=class{constructor(t,e){this.h=t,this.g=e}};function Yh(t){this.l=t||$_,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $_=10;function Jh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zh(t){return t.h?1:t.g?t.g.size:0}function wo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function da(t,e){t.g?t.g.add(e):t.h=e}function ed(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yh.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function td(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xo(t.i)}function fa(){}fa.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};fa.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function U_(){this.g=new fa}function F_(t,e,n){const s=n||"";try{ua(t,function(r,i){let o=r;xs(r)&&(o=sa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function x_(t,e){const n=new ii;if(G.Image){const s=new Image;s.onload=rr(or,n,s,"TestLoadImage: loaded",!0,e),s.onerror=rr(or,n,s,"TestLoadImage: error",!1,e),s.onabort=rr(or,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=rr(or,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function or(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hs(t){this.l=t.$b||null,this.j=t.ib||!1}$e(Hs,aa);Hs.prototype.g=function(){return new hi(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function hi(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(hi,Ce);var pa=0;O=hi.prototype;O.open=function(t,e){if(this.readyState!=pa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Is(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=pa};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function nd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):Is(this),this.readyState==3&&nd(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};O.Ta=function(t){this.g&&(this.response=t,Ks(this))};O.ha=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Is(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var V_=G.JSON.parse;function we(t){Ce.call(this),this.headers=new Bn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sd,this.K=this.L=!1}$e(we,Ce);var sd="",B_=/^https?$/i,j_=["POST","PUT"];O=we.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mo.g(),this.C=this.u?xc(this.u):xc(mo),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){jc(this,i);return}t=n||"";const r=new Bn(this.headers);s&&ua(s,function(i,o){r.set(o,i)}),s=Zv(r.T()),n=G.FormData&&t instanceof G.FormData,!(0<=wh(j_,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{od(this),0<this.B&&((this.K=q_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=oa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){jc(this,i)}};function q_(t){return Rn&&r_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function z_(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Qo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function jc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rd(t),di(t)}function rd(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),di(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),di(this,!0)),we.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?id(this):this.cb())};O.cb=function(){id(this)};function id(t){if(t.h&&typeof Qo!="undefined"&&(!t.C[1]||mt(t)!=4||t.ba()!=2)){if(t.v&&mt(t)==4)oa(t.Fa,0,t);else if(Me(t,"readystatechange"),mt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Gh)[1]||null;if(!r&&G.self&&G.self.location){var i=G.self.location.protocol;r=i.substr(0,i.length-1)}s=!B_.test(r?r.toLowerCase():"")}n=s}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<mt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",rd(t)}}finally{di(t)}}}}function di(t,e){if(t.g){od(t);const n=t.g,s=t.C[0]?Rr:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=s}catch{}}}function od(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function mt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),V_(e)}};function qc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function H_(t){let e="";return Yo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ga(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=H_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function Wn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ad(t){this.za=0,this.l=[],this.h=new ii,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wn("baseRetryDelayMs",5e3,t),this.$a=Wn("retryDelaySeedMs",1e4,t),this.Ya=Wn("forwardChannelMaxRetries",2,t),this.ra=Wn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Yh(t&&t.concurrentRequestLimit),this.Ca=new U_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=ad.prototype;O.ma=8;O.G=1;function ma(t){if(cd(t),t.G==3){var e=t.V++,n=wt(t.F);pe(n,"SID",t.J),pe(n,"RID",e),pe(n,"TYPE","terminate"),Gs(t,n),e=new qs(t,t.h,e,void 0),e.K=2,e.v=ui(wt(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=md(e.l,null),e.g.ea(e.v)),e.F=Date.now(),zs(e)}pd(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function fi(t){t.g&&(va(t),t.g.cancel(),t.g=null)}function cd(t){fi(t),t.u&&(G.clearTimeout(t.u),t.u=null),Ur(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Ki(t,e){t.l.push(new L_(t.Za++,e)),t.G==3&&pi(t)}function pi(t){Jh(t.i)||t.m||(t.m=!0,ra(t.Ha,t),t.C=0)}function K_(t,e){return Zh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Bs(Pe(t.Ha,t,e),fd(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new qs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=bh(i),Eh(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ld(this,r,e),n=wt(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),Gs(this,n),this.o&&i&&ga(n,this.o,i),da(this.i,r),this.Ra&&pe(n,"TYPE","init"),this.ja?(pe(n,"$req",e),pe(n,"SID","null"),r.$=!0,vo(r,n,null)):vo(r,n,e),this.G=2}}else this.G==3&&(t?zc(this,t):this.l.length==0||Jh(this.i)||zc(this))};function zc(t,e){var n;e?n=e.m:n=t.V++;const s=wt(t.F);pe(s,"SID",t.J),pe(s,"RID",n),pe(s,"AID",t.U),Gs(t,s),t.o&&t.s&&ga(s,t.o,t.s),n=new qs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ld(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),da(t.i,n),vo(n,s,e)}function Gs(t,e){t.j&&ua({},function(n,s){pe(e,s,n)})}function ld(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Pe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{F_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ud(t){t.g||t.u||(t.Y=1,ra(t.Ga,t),t.A=0)}function ya(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Bs(Pe(t.Ga,t),fd(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,hd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Bs(Pe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,je(10),fi(this),hd(this))};function va(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function hd(t){t.g=new qs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=wt(t.oa);pe(e,"RID","rpc"),pe(e,"SID",t.J),pe(e,"CI",t.N?"0":"1"),pe(e,"AID",t.U),Gs(t,e),pe(e,"TYPE","xmlhttp"),t.o&&t.s&&ga(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ui(wt(e)),n.s=null,n.U=!0,qh(n,t)}O.ab=function(){this.v!=null&&(this.v=null,fi(this),ya(this),je(19))};function Ur(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function dd(t,e){var n=null;if(t.g==e){Ur(t),va(t),t.g=null;var s=2}else if(wo(t.i,e))n=e.D,ed(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=oi(),Me(s,new xh(s,n,e,r)),pi(t)}else ud(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&K_(t,e)||s==2&&ya(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ht(t,5);break;case 4:Ht(t,10);break;case 3:Ht(t,6);break;default:Ht(t,2)}}}function fd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ht(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Pe(t.jb,t);n||(n=new on("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Mr(n,"https"),ui(n)),x_(n.toString(),s)}else je(2);t.G=0,t.j&&t.j.va(e),pd(t),cd(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),je(2)):(this.h.info("Failed to ping google.com"),je(1))};function pd(t){t.G=0,t.I=-1,t.j&&((td(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Xo(t.l),t.l.length=0),t.j.ua())}function gd(t,e,n){let s=A_(n);if(s.i!="")e&&Lr(s,e+"."+s.i),$r(s,s.m);else{const r=G.location;s=C_(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Yo(t.aa,function(r,i){pe(s,i,r)}),e=t.D,n=t.sa,e&&n&&pe(s,e,n),pe(s,"VER",t.ma),Gs(t,s),s}function md(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new Hs({ib:!0})):new we(t.qa),e.L=t.H,e}function yd(){}O=yd.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Fr(){if(Rn&&!(10<=Number(i_)))throw Error("Environmental error: no available transport.")}Fr.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Ce.call(this),this.g=new ad(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Nr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qn(this)}$e(Qe,Ce);Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ra(Pe(t.hb,t,e))),je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=gd(t,null,t.W),pi(t)};Qe.prototype.close=function(){ma(this.g)};Qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ki(this.g,e)}else this.v?(e={},e.__data__=sa(t),Ki(this.g,e)):Ki(this.g,t)};Qe.prototype.M=function(){this.g.j=null,delete this.j,ma(this.g),delete this.g,Qe.Z.M.call(this)};function vd(t){ca.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(vd,ca);function _d(){la.call(this),this.status=1}$e(_d,la);function qn(t){this.g=t}$e(qn,yd);qn.prototype.xa=function(){Me(this.g,"a")};qn.prototype.wa=function(t){Me(this.g,new vd(t))};qn.prototype.va=function(t){Me(this.g,new _d(t))};qn.prototype.ua=function(){Me(this.g,"b")};Fr.prototype.createWebChannel=Fr.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;ai.NO_ERROR=0;ai.TIMEOUT=8;ai.HTTP_ERROR=6;Vh.COMPLETE="complete";Bh.EventType=js;js.OPEN="a";js.CLOSE="b";js.ERROR="c";js.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var G_=function(){return new Fr},W_=function(){return oi()},Gi=ai,Q_=Vh,X_=dn,Hc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Y_=Hs,ar=Bh,J_=we;const Kc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const an=new Xr("@firebase/firestore");function Gc(){return an.logLevel}function V(t,...e){if(an.logLevel<=ae.DEBUG){const n=e.map(_a);an.debug(`Firestore (${zn}): ${t}`,...n)}}function It(t,...e){if(an.logLevel<=ae.ERROR){const n=e.map(_a);an.error(`Firestore (${zn}): ${t}`,...n)}}function Wc(t,...e){if(an.logLevel<=ae.WARN){const n=e.map(_a);an.warn(`Firestore (${zn}): ${t}`,...n)}}function _a(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function fe(t,e){t||W()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ew{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class tw{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fe(typeof s.accessToken=="string"),new Z_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ze(e)}}class nw{constructor(e,n,s){this.type="FirstParty",this.user=ze.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class sw{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new nw(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.p=n.token,new rw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ow(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Nn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ee(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ee(0,0))}static max(){return new Y(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends bs{construct(e,n,s){return new ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends bs{construct(e,n,s){return new Ue(e,n,s)}static isValidIdentifier(e){return aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ge.fromString(e))}static fromName(e){return new B(ge.fromString(e).popFirst(5))}static empty(){return new B(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ge(e.slice()))}}function cw(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Ee(n+1,0):new Ee(n,s));return new Nt(r,B.empty(),e)}function lw(t){return new Nt(t.readTime,t.key,-1)}class Nt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Nt(Y.min(),B.empty(),-1)}static max(){return new Nt(Y.max(),B.empty(),-1)}}function uw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==hw)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wa.ot=-1;class Se{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:De.RED,this.left=r!=null?r:De.EMPTY,this.right=i!=null?i:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new De(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Te(this.comparator);return n.data=e,n}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new ct([])}unionWith(e){let n=new Te(Ue.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Le(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const fw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(t){if(fe(!!t),typeof t=="string"){let e=0;const n=fw.exec(t);if(fe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function On(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ed(t){const e=t.mapValue.fields.__previous_value__;return bd(e)?Ed(e):e}function Es(t){const e=Ot(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Pn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){return t==null}function xr(t){return t===0&&1/t==-1/0}function gw(t){return typeof t=="number"&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bd(t)?4:mw(t)?9007199254740991:10:W()}function ht(t,e){if(t===e)return!0;const n=cn(t);if(n!==cn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Es(t).isEqual(Es(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ot(s.timestampValue),o=Ot(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return On(s.bytesValue).isEqual(On(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=_e(s.doubleValue),o=_e(r.doubleValue);return i===o?xr(i)===xr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Nn(t.arrayValue.values||[],e.arrayValue.values||[],ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Qc(i)!==Qc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ht(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Ts(t,e){return(t.values||[]).find(n=>ht(n,e))!==void 0}function Mn(t,e){if(t===e)return 0;const n=cn(t),s=cn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=_e(r.integerValue||r.doubleValue),a=_e(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yc(t.timestampValue,e.timestampValue);case 4:return Yc(Es(t),Es(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=On(r),a=On(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(_e(r.latitude),_e(i.latitude));return o!==0?o:ue(_e(r.longitude),_e(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Mn(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===lr.mapValue&&i===lr.mapValue)return 0;if(r===lr.mapValue)return 1;if(i===lr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=Mn(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Yc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Ot(t),s=Ot(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Sn(t){return Io(t)}function Io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ot(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?On(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Io(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Io(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function bo(t){return!!t&&"integerValue"in t}function Ia(t){return!!t&&"arrayValue"in t}function Jc(t){return!!t&&"nullValue"in t}function Zc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vr(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.value=e}static empty(){return new Xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Ue.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());vr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];vr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Hn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Xe(as(this.value))}}function Td(t){const e=[];return Hn(t.fields,(n,s)=>{const r=new Ue([n]);if(vr(s)){const i=Td(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Re(e,0,Y.min(),Y.min(),Xe.empty(),0)}static newFoundDocument(e,n,s){return new Re(e,1,n,Y.min(),s,0)}static newNoDocument(e,n){return new Re(e,2,n,Y.min(),Xe.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,Y.min(),Xe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function el(t,e=null,n=[],s=[],r=null,i=null,o=null){return new yw(t,e,n,s,r,i,o)}function ba(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Sn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),gi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Sn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Sn(s)).join(",")),e.ut=n}return e.ut}function vw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Sn(s.value)}`;var s}).join(", ")}]`),gi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Sn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Sn(n)).join(",")),`Target(${e})`}function Ea(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!kw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nl(t.startAt,e.startAt)&&nl(t.endAt,e.endAt)}function Eo(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class He extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new _w(e,n,s):n==="array-contains"?new bw(e,s):n==="in"?new Ew(e,s):n==="not-in"?new Tw(e,s):n==="array-contains-any"?new Sw(e,s):new He(e,n,s)}static ct(e,n,s){return n==="in"?new ww(e,s):new Iw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Mn(n,this.value)):n!==null&&cn(this.value)===cn(n)&&this.at(Mn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class _w extends He{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class ww extends He{constructor(e,n){super(e,"in",n),this.keys=Sd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Iw extends He{constructor(e,n){super(e,"not-in",n),this.keys=Sd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class bw extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ia(n)&&Ts(n.arrayValue,this.value)}}class Ew extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ts(this.value.arrayValue,n)}}class Tw extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ts(this.value.arrayValue,n)}}class Sw extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ia(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ts(this.value.arrayValue,s))}}class Vr{constructor(e,n){this.position=e,this.inclusive=n}}class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function kw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Mn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Aw(t,e,n,s,r,i,o,a){return new mi(t,e,n,s,r,i,o,a)}function Ta(t){return new mi(t)}function sl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Dw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Rw(t){return t.collectionGroup!==null}function Ss(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=Dw(e),s=Cw(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new cs(n)),e.lt.push(new cs(Ue.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new cs(Ue.keyField(),i))}}}return e.lt}function bt(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=el(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ss(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cs(i.field,o))}const s=e.endAt?new Vr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vr(e.startAt.position,e.startAt.inclusive):null;e.ft=el(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function To(t,e,n){return new mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yi(t,e){return Ea(bt(t),bt(e))&&t.limitType===e.limitType}function kd(t){return`${ba(bt(t))}|lt:${t.limitType}`}function So(t){return`Query(target=${vw(bt(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=tl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ss(n),s)||n.endAt&&!function(r,i,o){const a=tl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ss(n),s))}(t,e)}function Nw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ad(t){return(e,n)=>{let s=!1;for(const r of Ss(t)){const i=Ow(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ow(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Mn(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function Dd(t){return{integerValue:""+t}}function Pw(t,e){return gw(e)?Dd(e):Cd(t,e)}/**
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
 */class vi{constructor(){this._=void 0}}function Mw(t,e,n){return t instanceof Br?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ks?Nd(t,e):t instanceof As?Od(t,e):function(s,r){const i=Rd(s,r),o=rl(i)+rl(s._t);return bo(i)&&bo(s._t)?Dd(o):Cd(s.wt,o)}(t,e)}function Lw(t,e,n){return t instanceof ks?Nd(t,e):t instanceof As?Od(t,e):n}function Rd(t,e){return t instanceof jr?bo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Br extends vi{}class ks extends vi{constructor(e){super(),this.elements=e}}function Nd(t,e){const n=Pd(e);for(const s of t.elements)n.some(r=>ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class As extends vi{constructor(e){super(),this.elements=e}}function Od(t,e){let n=Pd(e);for(const s of t.elements)n=n.filter(r=>!ht(r,s));return{arrayValue:{values:n}}}class jr extends vi{constructor(e,n){super(),this.wt=e,this._t=n}}function rl(t){return _e(t.integerValue||t.doubleValue)}function Pd(t){return Ia(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $w(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof As&&s instanceof As?Nn(n.elements,s.elements,ht):n instanceof jr&&s instanceof jr?ht(n._t,s._t):n instanceof Br&&s instanceof Br}(t.transform,e.transform)}class Uw{constructor(e,n){this.version=e,this.transformResults=n}}class lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _i{}function Md(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ka(t.key,lt.none()):new Xs(t.key,t.data,lt.none());{const n=t.data,s=Xe.empty();let r=new Te(Ue.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new fn(t.key,s,new ct(r.toArray()),lt.none())}}function Fw(t,e,n){t instanceof Xs?function(s,r,i){const o=s.value.clone(),a=ol(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fn?function(s,r,i){if(!_r(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ol(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ld(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof Xs?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=r.value.clone(),l=al(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof fn?function(r,i,o,a){if(!_r(r.precondition,i))return o;const c=al(r.fieldTransforms,a,i),l=i.data;return l.setAll(Ld(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _r(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Rd(s.transform,r||null);i!=null&&(n===null&&(n=Xe.empty()),n.set(s.field,i))}return n||null}function il(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Nn(n,s,(r,i)=>$w(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xs extends _i{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fn extends _i{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ld(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ol(t,e,n){const s=new Map;fe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Lw(o,a,n[r]))}return s}function al(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Mw(i,o,e))}return s}class ka extends _i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vw extends _i{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,se;function jw(t){switch(t){default:return W();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function $d(t){if(t===void 0)return It("GRPC error has no .code"),S.UNKNOWN;switch(t){case ve.OK:return S.OK;case ve.CANCELLED:return S.CANCELLED;case ve.UNKNOWN:return S.UNKNOWN;case ve.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ve.INTERNAL:return S.INTERNAL;case ve.UNAVAILABLE:return S.UNAVAILABLE;case ve.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ve.NOT_FOUND:return S.NOT_FOUND;case ve.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ve.ABORTED:return S.ABORTED;case ve.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ve.DATA_LOSS:return S.DATA_LOSS;default:return W()}}(se=ve||(ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Id(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Se(B.comparator);function Et(){return qw}const Ud=new Se(B.comparator);function ts(...t){let e=Ud;for(const n of t)e=e.insert(n.key,n);return e}function Fd(t){let e=Ud;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Kt(){return us()}function xd(){return us()}function us(){return new Kn(t=>t.toString(),(t,e)=>t.isEqual(e))}const zw=new Se(B.comparator),Hw=new Te(B.comparator);function te(...t){let e=Hw;for(const n of t)e=e.add(n);return e}const Kw=new Te(ue);function Vd(){return Kw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,n)),new wi(Y.min(),s,Vd(),Et(),te())}}class Ys{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ys(Le.EMPTY_BYTE_STRING,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class Bd{constructor(e,n){this.targetId=e,this.It=n}}class jd{constructor(e,n,s=Le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class cl{constructor(){this.Tt=0,this.Et=ul(),this.At=Le.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=te(),n=te(),s=te();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new Ys(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=ul()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Gw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Et(),this.Bt=ll(),this.Lt=new Te(ue)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Eo(i))if(s===0){const o=new B(i.path);this.Kt(n,o,Re.newNoDocument(o,Y.min()))}else fe(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Eo(a.target)){const c=new B(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Re.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=te();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new wi(e,n,this.Lt,this.$t,s);return this.$t=Et(),this.Bt=ll(),this.Lt=new Te(ue),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new cl,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Te(ue),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new cl),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function ll(){return new Se(B.comparator)}function ul(){return new Se(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Xw{constructor(e,n){this.databaseId=e,this.dt=n}}function qr(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Yw(t,e){return qr(t,e.toTimestamp())}function yt(t){return fe(!!t),Y.fromTimestamp(function(e){const n=Ot(e);return new Ee(n.seconds,n.nanos)}(t))}function Aa(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zd(t){const e=ge.fromString(t);return fe(Gd(e)),e}function ko(t,e){return Aa(t.databaseId,e.path)}function Wi(t,e){const n=zd(e);if(n.get(1)!==t.databaseId.projectId)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Hd(n))}function Ao(t,e){return Aa(t.databaseId,e)}function Jw(t){const e=zd(t);return e.length===4?ge.emptyPath():Hd(e)}function Co(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hd(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hl(t,e,n){return{name:ko(t,e),fields:n.value.mapValue.fields}}function Zw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(fe(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(fe(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:$d(c.code);return new H(l,c.message||"")}(o);n=new jd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wi(t,s.document.name),i=yt(s.document.updateTime),o=new Xe({mapValue:{fields:s.document.fields}}),a=Re.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new wr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wi(t,s.document),i=s.readTime?yt(s.readTime):Y.min(),o=Re.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wi(t,s.document),i=s.removedTargetIds||[];n=new wr([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Bw(r),o=s.targetId;n=new Bd(o,i)}}return n}function e0(t,e){let n;if(e instanceof Xs)n={update:hl(t,e.key,e.value)};else if(e instanceof ka)n={delete:ko(t,e.key)};else if(e instanceof fn)n={update:hl(t,e.key,e.data),updateMask:u0(e.fieldMask)};else{if(!(e instanceof Vw))return W();n={verify:ko(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Br)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Yw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function t0(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?yt(s.updateTime):yt(r);return i.isEqual(Y.min())&&(i=yt(r)),new Uw(i,s.transformResults||[])}(n,e))):[]}function n0(t,e){return{documents:[Ao(t,e.path)]}}function s0(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ao(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ao(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Zc(h.value))return{unaryFilter:{field:yn(h.field),op:"IS_NAN"}};if(Jc(h.value))return{unaryFilter:{field:yn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Zc(h.value))return{unaryFilter:{field:yn(h.field),op:"IS_NOT_NAN"}};if(Jc(h.value))return{unaryFilter:{field:yn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(h.field),op:a0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:yn(u.field),direction:o0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||gi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function r0(t){let e=Jw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){fe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Kd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cs(In(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,gi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Vr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Vr(d,h)}(n.endAt)),Aw(e,r,o,i,a,"F",c,l)}function i0(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kd(t){return t?t.unaryFilter!==void 0?[l0(t)]:t.fieldFilter!==void 0?[c0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Kd(e)).reduce((e,n)=>e.concat(n)):W():[]}function o0(t){return Ww[t]}function a0(t){return Qw[t]}function yn(t){return{fieldPath:t.canonicalString()}}function In(t){return Ue.fromServerFormat(t.fieldPath)}function c0(t){return He.create(In(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function l0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=In(t.unaryFilter.field);return He.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=In(t.unaryFilter.field);return He.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(t.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=In(t.unaryFilter.field);return He.create(r,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function u0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Fw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=xd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Md(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(n,s)=>il(n,s))&&Nn(this.baseMutations,e.baseMutations,(n,s)=>il(n,s))}}class Ca{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){fe(e.mutations.length===s.length);let r=zw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ca(e,n,s,r)}}/**
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
 */class d0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xt{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.ne=e}}function p0(t){const e=r0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?To(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.ze=new m0}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Nt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Nt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class m0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Te(ge.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Te(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ln(0)}static Rn(){return new Ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.changes=new Kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class v0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&ls(s.mutation,r,ct.empty(),Ee.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Kt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ts();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Kt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Et();const o=us(),a=us();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof fn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ls(u.mutation,l,u.mutation.getFieldMask(),Ee.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new v0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=us();let r=new Se((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ct.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=xd();u.forEach(d=>{if(!i.has(d)){const p=Md(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Kt());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:Fd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=ts();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ts();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new mi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Re.newInvalidDocument(l)))});let o=ts();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ls(l.mutation,c,ct.empty(),Ee.now()),Sa(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(Re.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:p0(s.bundledQuery),readTime:yt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class I0{constructor(){this.overlays=new Se(B.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Kt();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Kt(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Kt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new d0(n,s));let i=this.Xn.get(n);i===void 0&&(i=te(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.Zn=new Te(ke.ts),this.es=new Te(ke.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new ke(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new ke(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new B(new ge([])),s=new ke(n,e),r=new ke(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new ge([])),s=new ke(n,e),r=new ke(n,e+1);let i=te();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ke(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||ue(e.ls,n.ls)}static ns(e,n){return ue(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Te(ke.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ke(n,0),r=new ke(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Te(ue);return n.forEach(r=>{const i=new ke(r,0),o=new ke(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),T.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new ke(new B(i),0);let a=new Te(ue);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){fe(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return T.forEach(n.mutations,r=>{const i=new ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new ke(n,0),r=this.ds.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.ps=e,this.docs=new Se(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=Et();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=Et();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||uw(lw(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){W()}Is(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new T0(this)}getSize(e){return T.resolve(this.size)}}class T0 extends y0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.persistence=e,this.Ts=new Kn(n=>ba(n),Ea),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Es=0,this.As=new Da,this.targetCount=0,this.Rs=Ln.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ln(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new wa(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new S0(this),this.indexManager=new g0,this.remoteDocumentCache=function(s){return new E0(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new f0(n),this.Ds=new w0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new b0(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new A0(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class A0 extends dw{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.ks=new Da,this.Ms=null}static Os(e){return new Ra(e)}get Fs(){if(this.Ms)return this.Ms;throw W()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,s=>{const r=B.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Na(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(sl(n))return T.resolve(null);let s=bt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=To(n,null,"F"),s=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,To(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,s,r){return sl(n)||r.isEqual(Y.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(e,n):(Gc()<=ae.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),So(n)),this.Oi(e,o,n,cw(r,-1)))})}ki(e,n){let s=new Te(Ad(e));return n.forEach((r,i)=>{Sa(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Gc()<=ae.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",So(n)),this.Di.getDocumentsMatchingQuery(e,n,Nt.min())}Oi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new Se(ue),this.Bi=new Kn(i=>ba(i),Ea),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function R0(t,e,n,s){return new D0(t,e,n,s)}async function Wd(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function N0(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const I=c.docVersions.get(p);fe(I!==null),m.version.compareTo(I)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Qd(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function O0(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Le.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,I,b){return m.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Vs.updateTargetData(i,p))});let c=Et(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(P0(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(Y.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=r,i))}function P0(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Et();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function M0(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function L0(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new Xt(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Do(t,e,n){const s=Q(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Qs(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function dl(t,e,n){const s=Q(t);let r=Y.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.Bi.get(l);return h!==void 0?T.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,bt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:te())).next(a=>($0(s,Nw(e),a),{documents:a,ji:i})))}function $0(t,e,n){let s=Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class fl{constructor(){this.activeTargetIds=Vd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U0{constructor(){this.Fr=new fl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new fl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Wc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=x0[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new J_;a.listenOnce(Q_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gi.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Gi.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new H(S.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new H(d,h.message))}else o(new H(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new H(S.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=G_(),o=W_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Y_({})),this.uo(a.initMessageHeaders,n,s),lu()||uu()||fp()||hu()||pp()||Oo()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new V0({jr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),p=(m,I,b)=>{m.listen(I,A=>{try{b(A)}catch(w){setTimeout(()=>{throw w},0)}})};return p(l,ar.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,ar.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.eo())}),p(l,ar.EventType.ERROR,m=>{h||(h=!0,Wc("Connection","WebChannel transport errored:",m),d.eo(new H(S.UNAVAILABLE,"The operation could not be completed")))}),p(l,ar.EventType.MESSAGE,m=>{var I;if(!h){const b=m.data[0];fe(!!b);const A=b,w=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(w){V("Connection","WebChannel received error:",w);const E=w.status;let P=function(F){const C=ve[F];if(C!==void 0)return $d(C)}(E),v=w.message;P===void 0&&(P=S.INTERNAL,v="Unknown error status: "+E+" with message "+w.message),h=!0,d.eo(new H(P,v)),l.close()}else V("Connection","WebChannel received:",b),d.no(b)}}),p(o,X_.STAT_EVENT,m=>{m.stat===Hc.PROXY?V("Connection","Detected buffering proxy"):m.stat===Hc.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Qi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return new Xw(t,!0)}class Xd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Xd(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new H(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j0 extends Yd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Zw(this.wt,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?yt(i.readTime):Y.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Co(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Eo(a)?{documents:n0(r,a)}:{query:s0(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qd(r,i.resumeToken):i.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=qr(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=i0(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=Co(this.wt),n.removeTarget=e,this.Oo(n)}}class q0 extends Yd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=t0(e.writeResults,e.commitTime),s=yt(e.commitTime);return this.listener.Jo(s,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Co(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>e0(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(S.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class H0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(It(n),this.su=!1):V("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{pn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.lu.add(4),await Js(c),c._u.set("Unknown"),c.lu.delete(4),await bi(c)}(this))})}),this._u=new H0(s,r)}}async function bi(t){if(pn(t))for(const e of t.fu)await e(!0)}async function Js(t){for(const e of t.fu)await e(!1)}function Jd(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ma(n)?Pa(n):Gn(n).Co()&&Oa(n,e))}function Zd(t,e){const n=Q(t),s=Gn(n);n.hu.delete(e),s.Co()&&ef(n,e),n.hu.size===0&&(s.Co()?s.ko():pn(n)&&n._u.set("Unknown"))}function Oa(t,e){t.wu.Nt(e.targetId),Gn(t).Qo(e)}function ef(t,e){t.wu.Nt(e),Gn(t).jo(e)}function Pa(t){t.wu=new Gw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Gn(t).start(),t._u.iu()}function Ma(t){return pn(t)&&!Gn(t).Do()&&t.hu.size>0}function pn(t){return Q(t).lu.size===0}function tf(t){t.wu=void 0}async function G0(t){t.hu.forEach((e,n)=>{Oa(t,e)})}async function W0(t,e){tf(t),Ma(t)?(t._u.uu(e),Pa(t)):t._u.set("Unknown")}async function Q0(t,e,n){if(t._u.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zr(t,s)}else if(e instanceof wr?t.wu.Ut(e):e instanceof Bd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Y.min()))try{const s=await Qd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),ef(r,a);const l=new Xt(c.target,a,1,c.sequenceNumber);Oa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await zr(t,s)}}async function zr(t,e,n){if(!Qs(e))throw e;t.lu.add(1),await Js(t),t._u.set("Offline"),n||(n=()=>Qd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await bi(t)})}function nf(t,e){return e().catch(n=>zr(t,n,e))}async function Ei(t){const e=Q(t),n=Pt(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;X0(e);)try{const r=await M0(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,Y0(e,r)}catch(r){await zr(e,r)}sf(e)&&rf(e)}function X0(t){return pn(t)&&t.au.length<10}function Y0(t,e){t.au.push(e);const n=Pt(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function sf(t){return pn(t)&&!Pt(t).Do()&&t.au.length>0}function rf(t){Pt(t).start()}async function J0(t){Pt(t).Xo()}async function Z0(t){const e=Pt(t);for(const n of t.au)e.Ho(n.mutations)}async function eI(t,e,n){const s=t.au.shift(),r=Ca.from(s,e,n);await nf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ei(t)}async function tI(t,e){e&&Pt(t).zo&&await async function(n,s){if(r=s.code,jw(r)&&r!==S.ABORTED){const i=n.au.shift();Pt(n).No(),await nf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ei(n)}var r}(t,e),sf(t)&&rf(t)}async function gl(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=pn(n);n.lu.add(3),await Js(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await bi(n)}async function nI(t,e){const n=Q(t);e?(n.lu.delete(2),await bi(n)):e||(n.lu.add(2),await Js(n),n._u.set("Unknown"))}function Gn(t){return t.mu||(t.mu=function(e,n,s){const r=Q(e);return r.tu(),new j0(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:G0.bind(null,t),Jr:W0.bind(null,t),Go:Q0.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ma(t)?Pa(t):t._u.set("Unknown")):(await t.mu.stop(),tf(t))})),t.mu}function Pt(t){return t.gu||(t.gu=function(e,n,s){const r=Q(e);return r.tu(),new q0(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:J0.bind(null,t),Jr:tI.bind(null,t),Yo:Z0.bind(null,t),Jo:eI.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ei(t)):(await t.gu.stop(),t.au.length>0&&(V("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new La(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(t,e){if(It("AsyncQueue",`${e}: ${t}`),Qs(t))return new H(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=ts(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new kn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.yu=new Se(B.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $n{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new $n(e,n,kn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.Iu=void 0,this.listeners=[]}}class rI{constructor(){this.queries=new Kn(e=>kd(e),yi),this.onlineState="Unknown",this.Tu=new Set}}async function iI(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new sI),r)try{i.Iu=await n.onListen(s)}catch(o){const a=$a(o,`Initialization of query '${So(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Ua(n)}async function oI(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function aI(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Ua(n)}function cI(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ua(t){t.Tu.forEach(e=>{e.next()})}class lI{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.key=e}}class af{constructor(e){this.key=e}}class uI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=te(),this.mutatedKeys=te(),this.Lu=Ad(e),this.Uu=new kn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new ml,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Sa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?m!==I&&(s.track({type:3,doc:p}),b=!0):this.Qu(d,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),b=!0):d&&!p&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return p(h)-p(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new $n(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new ml,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=te(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new af(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new of(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=te();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return $n.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class hI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dI{constructor(e){this.key=e,this.Xu=!1}}class fI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Kn(a=>kd(a),yi),this.ec=new Map,this.nc=new Set,this.sc=new Se(B.comparator),this.ic=new Map,this.rc=new Da,this.oc={},this.uc=new Map,this.cc=Ln.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function pI(t,e){const n=TI(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await L0(n.localStore,bt(e));n.isPrimaryClient&&Jd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await gI(n,e,s,a==="current")}return r}async function gI(t,e,n,s){t.hc=(u,h,d)=>async function(p,m,I,b){let A=m.view.Ku(I);A.Mi&&(A=await dl(p.localStore,m.query,!1).then(({documents:P})=>m.view.Ku(P,A)));const w=b&&b.targetChanges.get(m.targetId),E=m.view.applyChanges(A,p.isPrimaryClient,w);return vl(p,m.targetId,E.zu),E.snapshot}(t,u,h,d);const r=await dl(t.localStore,e,!0),i=new uI(e,r.ji),o=i.Ku(r.documents),a=Ys.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);vl(t,n,c.zu);const l=new hI(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function mI(t,e){const n=Q(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!yi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Do(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zd(n.remoteStore,s.targetId),Ro(n,s.targetId)}).catch(Ws)):(Ro(n,s.targetId),await Do(n.localStore,s.targetId,!0))}async function yI(t,e,n){const s=SI(t);try{const r=await function(i,o){const a=Q(i),c=Ee.now(),l=o.reduce((d,p)=>d.add(p.key),te());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Et(),m=te();return a.Ui.getEntries(d,l).next(I=>{p=I,p.forEach((b,A)=>{A.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(I=>{u=I;const b=[];for(const A of o){const w=xw(A,u.get(A.key).overlayedDocument);w!=null&&b.push(new fn(A.key,w,Td(w.value.mapValue),lt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(I=>{h=I;const b=I.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,I.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Fd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Se(ue)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Zs(s,r.changes),await Ei(s.remoteStore)}catch(r){const i=$a(r,"Failed to persist write");n.reject(i)}}async function cf(t,e){const n=Q(t);try{const s=await O0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?fe(o.Xu):r.removedDocuments.size>0&&(fe(o.Xu),o.Xu=!1))}),await Zs(n,s,e)}catch(s){await Ws(s)}}function yl(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ua(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vI(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new Se(B.comparator);o=o.insert(i,Re.newNoDocument(i,Y.min()));const a=te().add(i),c=new wi(Y.min(),new Map,new Te(ue),o,a);await cf(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),Fa(s)}else await Do(s.localStore,e,!1).then(()=>Ro(s,e,n)).catch(Ws)}async function _I(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await N0(n.localStore,e);uf(n,s,null),lf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zs(n,r)}catch(r){await Ws(r)}}async function wI(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(fe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);uf(s,e,n),lf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zs(s,r)}catch(r){await Ws(r)}}function lf(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function uf(t,e,n){const s=Q(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||hf(t,s)})}function hf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Zd(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Fa(t))}function vl(t,e,n){for(const s of n)s instanceof of?(t.rc.addReference(s.key,e),II(t,s)):s instanceof af?(V("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||hf(t,s.key)):W()}function II(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.nc.add(s),Fa(t))}function Fa(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(ge.fromString(e)),s=t.cc.next();t.ic.set(s,new dI(n)),t.sc=t.sc.insert(n,s),Jd(t.remoteStore,new Xt(bt(Ta(n.path)),s,2,wa.ot))}}async function Zs(t,e,n){const s=Q(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Na.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Qs(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,m)}}}(s.localStore,i))}async function bI(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Wd(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new H(S.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zs(n,s.Ki)}}function EI(t,e){const n=Q(t),s=n.ic.get(e);if(s&&s.Xu)return te().add(s.key);{let r=te();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function TI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vI.bind(null,e),e.Zu.Go=aI.bind(null,e.eventManager),e.Zu.lc=cI.bind(null,e.eventManager),e}function SI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_I.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wI.bind(null,e),e}class kI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ii(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return R0(this.persistence,new C0,e.initialUser,this.wt)}_c(e){return new k0(Ra.Os,this.wt)}dc(e){return new U0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bI.bind(null,this.syncEngine),await nI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rI}createDatastore(e){const n=Ii(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new B0(r));var r;return function(i,o,a,c){return new z0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>yl(this.syncEngine,a,0),o=pl.V()?new pl:new F0,new K0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new fI(s,r,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);V("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Js(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):It("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ze.UNAUTHENTICATED,this.clientId=wd.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$a(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function RI(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Wd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function NI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OI(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>gl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>gl(e.remoteStore,i)),t.onlineComponents=e}async function OI(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await RI(t,new kI)),t.offlineComponents}async function df(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await NI(t,new AI)),t.onlineComponents}function PI(t){return df(t).then(e=>e.syncEngine)}async function _l(t){const e=await df(t),n=e.eventManager;return n.onListen=pI.bind(null,e.syncEngine),n.onUnlisten=mI.bind(null,e.syncEngine),n}const wl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e,n){if(!n)throw new H(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MI(t,e,n,s){if(e===!0&&s===!0)throw new H(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Il(t){if(!B.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bl(t){if(B.isDocumentKey(t))throw new H(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new H(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,MI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,e instanceof Pn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new H(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pn(r.options.projectId)}(e))}get app(){if(!this._app)throw new H(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ew;switch(n.type){case"gapi":const s=n.client;return fe(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new sw(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new H(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wl.get(e);n&&(V("ComponentProvider","Removing Datastore"),wl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class Ti{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class Rt extends Ti{constructor(e,n,s){super(e,n,Ta(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new B(e))}withConverter(e){return new Rt(this.firestore,e,this._path)}}function LI(t,e,...n){if(t=xe(t),ff("collection","path",e),t instanceof Va){const s=ge.fromString(e,...n);return bl(s),new Rt(t,null,s)}{if(!(t instanceof We||t instanceof Rt))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return bl(s),new Rt(t.firestore,null,s)}}function ur(t,e,...n){if(t=xe(t),arguments.length===1&&(e=wd.I()),ff("doc","path",e),t instanceof Va){const s=ge.fromString(e,...n);return Il(s),new We(t,null,new B(s))}{if(!(t instanceof We||t instanceof Rt))throw new H(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return Il(s),new We(t.firestore,t instanceof Rt?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Xd(this,"async_queue_retry"),this.Kc=()=>{const n=Qi();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Qt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Qs(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=La.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Tl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Cs extends Va{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new $I,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gf(this),this._firestoreClient.terminate()}}function UI(t=Mo()){return hn(t,"firestore").getImmediate()}function pf(t){return t._firestoreClient||gf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new pw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new DI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Le.fromBase64String(e))}catch(n){throw new H(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ja{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/^__.*__$/;class xI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xs(e,this.data,n,this.fieldTransforms)}}function yf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class qa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Hr(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(yf(this.Zc)&&FI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class VI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||Ii(e)}aa(e,n,s,r=!1){return new qa({Zc:e,methodName:n,ca:s,path:Ue.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function BI(t){const e=t._freezeSettings(),n=Ii(t._databaseId);return new VI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jI(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);If("Data must be an object, but it was:",o,s);const a=_f(s,o);let c,l;if(i.merge)c=new ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=qI(e,h,n);if(!o.contains(d))throw new H(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HI(u,d)||u.push(d)}c=new ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new xI(new Xe(a),c,l)}function vf(t,e){if(wf(t=xe(t)))return If("Unsupported field value:",e,t),_f(t,e);if(t instanceof mf)return function(n,s){if(!yf(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=vf(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Pw(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ee.fromDate(n);return{timestampValue:qr(s.wt,r)}}if(n instanceof Ee){const r=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qr(s.wt,r)}}if(n instanceof ja)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:qd(s.wt,n._byteString)};if(n instanceof We){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Aa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${xa(n)}`)}(t,e)}function _f(t,e){const n={};return Id(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(t,(s,r)=>{const i=vf(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function wf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof ja||t instanceof Un||t instanceof We||t instanceof mf)}function If(t,e,n){if(!wf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=xa(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function qI(t,e,n){if((e=xe(e))instanceof Ba)return e._internalPath;if(typeof e=="string")return bf(t,e);throw Hr("Field path arguments must be of type string or ",t,!1,void 0,n)}const zI=new RegExp("[~\\*/\\[\\]]");function bf(t,e,n){if(e.search(zI)>=0)throw Hr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ba(...e.split("."))._internalPath}catch{throw Hr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new H(S.INVALID_ARGUMENT,a+t+c)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KI extends Ef{data(){return super.data()}}function Tf(t,e){return typeof e=="string"?bf(t,e):e instanceof Ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sf extends Ef{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Tf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ir extends Sf{data(e={}){return super.data(e)}}class GI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ns(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ir(this._firestore,this._userDataWriter,s.key,s,new ns(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ir(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ir(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ns(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:WI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function XI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{convertValue(e,n="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const s={};return Hn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ja(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ed(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const n=Ot(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ge.fromString(e);fe(Gd(s));const r=new Pn(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class kf extends YI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function Sl(t,e,n){t=An(t,We);const s=An(t.firestore,Cs),r=JI(t.converter,e,n);return Af(s,[jI(BI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,lt.none())])}function ZI(t){return Af(An(t.firestore,Cs),[new ka(t._key,lt.none())])}function kl(t,...e){var n,s,r;t=xe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Tl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Tl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof We)l=An(t.firestore,Cs),u=Ta(t._key.path),c={next:h=>{e[o]&&e[o](eb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=An(t,Ti);l=An(h.firestore,Cs),u=h._query;const d=new kf(l);c={next:p=>{e[o]&&e[o](new GI(l,d,h,p))},error:e[o+1],complete:e[o+2]},QI(t._query)}return function(h,d,p,m){const I=new CI(m),b=new lI(d,I,p);return h.asyncQueue.enqueueAndForget(async()=>iI(await _l(h),b)),()=>{I.Tc(),h.asyncQueue.enqueueAndForget(async()=>oI(await _l(h),b))}}(pf(l),u,a,c)}function Af(t,e){return function(n,s){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>yI(await PI(n),s,r)),r.promise}(pf(t),e)}function eb(t,e,n){const s=n.docs.get(e._key),r=new kf(t);return new Sf(t,r,e._key,s,new ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zn=n})(Ns),ut(new nt("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Cs(r,new tw(n.getProvider("auth-internal")),new iw(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Je(Kc,"3.4.14",t),Je(Kc,"3.4.14","esm2017")})();const tb={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},Cf=bg(tb),Vt=Ay(Cf);mm(Vt,Bu);const Qn=UI(Cf);Bv();const nb=new dt,sb=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=xn(t);return Fu(Vt,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,r){return pm(Vt,s,r)},async signInWithEmail(s,r){return gm(Vt,s,r)},async signInWithGoogle(){return Vm(Vt,nb)},async signOut(){return ym(Vt)}}};var Cn=sb(),Kr="/assets/default-user.a40c52dd.png";function rb(t){let e;return{c(){e=y("i"),f(e,"class","codicon codicon-account")},m(n,s){$(n,e,s)},p:x,d(n){n&&L(e)}}}function ib(t){let e,n;return{c(){var s;e=y("img"),f(e,"class","profile-picture svelte-1rima2j"),Yt(e.src,n=(s=t[0].user.photoURL)!=null?s:Kr)||f(e,"src",n),f(e,"alt","Account")},m(s,r){$(s,e,r)},p(s,r){var i;r&1&&!Yt(e.src,n=(i=s[0].user.photoURL)!=null?i:Kr)&&f(e,"src",n)},d(s){s&&L(e)}}}function ob(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b,A,w;c=new cp({});function E(F,C){return F[0].loggedIn?ib:rb}let P=E(t),v=P(t);return{c(){e=y("header"),n=y("div"),s=y("a"),s.innerHTML='<i class="codicon codicon-github"></i>',r=R(),i=y("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=R(),a=y("a"),ee(c.$$.fragment),l=R(),u=y("nav"),h=y("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=R(),p=y("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=R(),I=y("button"),v.c(),f(s,"title","Source Code"),f(s,"href","https://github.com/kurozenzen/kurosearch"),f(s,"target","_newtab"),f(s,"class","svelte-1rima2j"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-1rima2j"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-1rima2j"),f(n,"class","svelte-1rima2j"),f(h,"title","Search"),f(h,"class","svelte-1rima2j"),f(p,"title","Settings"),f(p,"class","svelte-1rima2j"),f(I,"title","Account"),f(I,"class","svelte-1rima2j"),f(u,"class","svelte-1rima2j"),f(e,"role","navigation"),f(e,"class","svelte-1rima2j")},m(F,C){$(F,e,C),g(e,n),g(n,s),g(n,r),g(n,i),g(n,o),g(n,a),J(c,a,null),g(e,l),g(e,u),g(u,h),g(u,d),g(u,p),g(u,m),g(u,I),v.m(I,null),b=!0,A||(w=[ne(h,"click",t[1]),ne(p,"click",t[2]),ne(I,"click",t[3])],A=!0)},p(F,[C]){P===(P=E(F))&&v?v.p(F,C):(v.d(1),v=P(F),v&&(v.c(),v.m(I,null)))},i(F){b||(k(c.$$.fragment,F),b=!0)},o(F){D(c.$$.fragment,F),b=!1},d(F){F&&L(e),Z(c),v.d(),A=!1,Ke(w)}}}function ab(t,e,n){let s;return tt(t,Cn,a=>n(0,s=a)),[s,()=>Gt.navigateTo("search"),()=>Gt.navigateTo("settings"),()=>Gt.navigateTo("account")]}class cb extends oe{constructor(e){super(),ie(this,e,ab,ob,re,{})}}const lb=new IntersectionObserver(t=>{for(const e of t){if(e.target.src===void 0){console.warn("PostObserver is observing an invalid element",e.target);continue}e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):""}},{rootMargin:"1250px"}),Mt=t=>t/1e6>=1?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString();function vn(t,e){const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`}function Al(t){const e=new Date(t),n=new Date,s=n.getFullYear()-e.getFullYear();if(s)return vn(s,"year");const r=n.getMonth()-e.getMonth();if(r)return vn(r,"month");const i=(n.getTime()-e.getTime())/6e4;if(i===0)return"just now";if(i<60)return vn(i,"minute");const o=i/60;if(o<24)return vn(o,"hour");const a=o/24;if(a<7)return vn(a,"day");const c=a/7;return c<5?vn(c,"week"):"rip"}function Lt(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const br=Object.freeze(["+","-","~"]),Si=t=>br.includes(t),Df=t=>{if(!Si(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(br.indexOf(t)+1)%br.length;return br[n]},ub=Object.freeze({"+":"","-":"-","~":""}),hb=t=>{if(!Si(t))throw TypeError("Invalid modifier passed to serializeModifier");return ub[t]},db=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),Rf=t=>db.includes(t),er=t=>typeof t=="string"&&t!=="",Nf=t=>typeof t=="number"&&t>=0;class ki{constructor(e,n){if(!Si(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!er(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${hb(this.modifier)}${this.name}`}}class Gr{constructor(e,n,s,r){if(!Si(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!er(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Nf(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Rf(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new ki(this.modifier,this.name)}}function fb(){const t=[],{subscribe:e,update:n,set:s}=xn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:r=>n(i=>(i.push(new Gr("+",r,0,"general")),i)),removeByIndex:r=>n(i=>(i.splice(r,1),i))}}var Ct=fb();function pb(t){let e,n=Lt(t[0])+"",s,r,i;return{c(){e=y("li"),s=de(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),Ye(e,"active",t[2])},m(o,a){$(o,e,a),g(e,s),r||(i=ne(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=Lt(o[0])+"")&&be(s,n),a&4&&Ye(e,"active",o[2])},i:x,o:x,d(o){o&&L(e),r=!1,i()}}}function gb(t,e,n){let s,r,i;tt(t,Ct,c=>n(3,i=c));let{name:o}=e;const a=()=>r?Ct.removeByIndex(s):Ct.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class mb extends oe{constructor(e){super(),ie(this,e,gb,pb,re,{name:0})}}const Of=(t,e)=>{if(!Pf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!yb(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Pf=t=>{try{return new URL(t),!0}catch{return!1}},yb=t=>t===null||t instanceof AbortController;function vb(t){let e,n;return{c(){e=y("span"),n=de(t[0])},m(s,r){$(s,e,r),g(e,n)},p(s,r){r&1&&be(n,s[0])},d(s){s&&L(e)}}}function _b(t){let e,n=t[1].hostname+"",s,r;return{c(){e=y("a"),s=de(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-1qmyyls")},m(i,o){$(i,e,o),g(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&be(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&L(e)}}}function wb(t){let e,n,s;function r(a,c){return a[1]?_b:vb}let i=r(t),o=i(t);return{c(){e=y("i"),n=R(),o.c(),s=Ds(),f(e,"class","codicon codicon-link")},m(a,c){$(a,e,c),$(a,n,c),o.m(a,c),$(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:x,o:x,d(a){a&&L(e),a&&L(n),o.d(a),a&&L(s)}}}function Ib(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=Pf(r)?new URL(r):null)},[r,s]}class bb extends oe{constructor(e){super(),ie(this,e,Ib,wb,re,{source:0})}}function Cl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Dl(t){let e,n,s;return n=new bb({props:{source:t[0].source}}),{c(){e=y("div"),ee(n.$$.fragment),f(e,"class","svelte-5x11c6")},m(r,i){$(r,e,i),J(n,e,null),s=!0},p(r,i){const o={};i&1&&(o.source=r[0].source),n.$set(o)},i(r){s||(k(n.$$.fragment,r),s=!0)},o(r){D(n.$$.fragment,r),s=!1},d(r){r&&L(e),Z(n)}}}function Rl(t){let e,n;return e=new mb({props:{name:t[1]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function Eb(t){let e,n,s,r,i,o=Al(t[0].created_at)+"",a,c,l,u,h,d,p=Mt(t[0].score)+"",m,I,b,A,w,E=t[0].source&&Dl(t),P=t[0].tags,v=[];for(let C=0;C<P.length;C+=1)v[C]=Rl(Cl(t,P,C));const F=C=>D(v[C],1,1,()=>{v[C]=null});return{c(){e=y("div"),n=y("div"),s=y("i"),r=R(),i=y("span"),a=de(o),c=R(),l=y("div"),u=y("i"),h=R(),d=y("span"),m=de(p),I=R(),E&&E.c(),b=R(),A=y("ul");for(let C=0;C<v.length;C+=1)v[C].c();f(s,"class","codicon codicon-calendar"),f(i,"class","svelte-5x11c6"),f(n,"class","svelte-5x11c6"),f(u,"class","codicon codicon-heart"),f(d,"class","svelte-5x11c6"),f(l,"class","svelte-5x11c6"),f(e,"class","summary svelte-5x11c6"),f(A,"class","svelte-5x11c6")},m(C,U){$(C,e,U),g(e,n),g(n,s),g(n,r),g(n,i),g(i,a),g(e,c),g(e,l),g(l,u),g(l,h),g(l,d),g(d,m),g(e,I),E&&E.m(e,null),$(C,b,U),$(C,A,U);for(let j=0;j<v.length;j+=1)v[j].m(A,null);w=!0},p(C,[U]){if((!w||U&1)&&o!==(o=Al(C[0].created_at)+"")&&be(a,o),(!w||U&1)&&p!==(p=Mt(C[0].score)+"")&&be(m,p),C[0].source?E?(E.p(C,U),U&1&&k(E,1)):(E=Dl(C),E.c(),k(E,1),E.m(e,null)):E&&(Ne(),D(E,1,1,()=>{E=null}),Oe()),U&1){P=C[0].tags;let j;for(j=0;j<P.length;j+=1){const M=Cl(C,P,j);v[j]?(v[j].p(M,U),k(v[j],1)):(v[j]=Rl(M),v[j].c(),k(v[j],1),v[j].m(A,null))}for(Ne(),j=P.length;j<v.length;j+=1)F(j);Oe()}},i(C){if(!w){k(E);for(let U=0;U<P.length;U+=1)k(v[U]);w=!0}},o(C){D(E),v=v.filter(Boolean);for(let U=0;U<v.length;U+=1)D(v[U]);w=!1},d(C){C&&L(e),E&&E.d(),C&&L(b),C&&L(A),$t(v,C)}}}function Tb(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class Sb extends oe{constructor(e){super(),ie(this,e,Tb,Eb,re,{post:0})}}function kb(t){let e,n,s,r,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[6](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&s!==(s=a[0].id.toString())&&f(e,"alt",s),c&1&&r!==(r=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",r),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&L(e),t[6](null)}}}function Ab(t){let e,n,s,r,i,o;return{c(){e=y("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[5](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&s!==(s=a[0].id.toString())&&f(e,"alt",s),c&1&&r!==(r=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",r),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&L(e),t[5](null)}}}function Cb(t){let e,n,s,r,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){$(a,e,c),t[4](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&s!==(s=a[0].id.toString())&&f(e,"alt",s),c&1&&r!==(r=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",r),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&L(e),t[4](null)}}}function Nl(t){let e,n;return e=new Sb({props:{post:t[0]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function Db(t){let e,n,s,r,i,o;function a(h,d){return h[0].type==="image"?Cb:h[0].type==="video"?Ab:kb}let c=a(t),l=c(t),u=t[2]&&Nl(t);return{c(){e=y("div"),n=y("div"),l.c(),s=R(),u&&u.c(),f(n,"class","content"),f(e,"class","post svelte-1xnjrgd"),f(e,"tabindex","0")},m(h,d){$(h,e,d),g(e,n),l.m(n,null),g(e,s),u&&u.m(e,null),r=!0,i||(o=ne(n,"click",t[3]),i=!0)},p(h,[d]){c===(c=a(h))&&l?l.p(h,d):(l.d(1),l=c(h),l&&(l.c(),l.m(n,null))),h[2]?u?(u.p(h,d),d&4&&k(u,1)):(u=Nl(h),u.c(),k(u,1),u.m(e,null)):u&&(Ne(),D(u,1,1,()=>{u=null}),Oe())},i(h){r||(k(u),r=!0)},o(h){D(u),r=!1},d(h){h&&L(e),l.d(),u&&u.d(),i=!1,o()}}}function Rb(t,e,n){let{post:s}=e,r,i=!1;const o=()=>{n(2,i=!i)};function a(u){bn[u?"unshift":"push"](()=>{r=u,n(1,r)})}function c(u){bn[u?"unshift":"push"](()=>{r=u,n(1,r)})}function l(u){bn[u?"unshift":"push"](()=>{r=u,n(1,r)})}return t.$$set=u=>{"post"in u&&n(0,s=u.post)},t.$$.update=()=>{t.$$.dirty&2&&r&&lb.observe(r)},[s,r,i,o,a,c,l]}class Nb extends oe{constructor(e){super(),ie(this,e,Rb,Db,re,{post:0})}}function Ol(t,e,n){const s=t.slice();return s[1]=e[n],s}function Pl(t){let e,n;return e=new Nb({props:{post:t[1]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function Ob(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Pl(Ol(t,s,o));const i=o=>D(r[o],1,1,()=>{r[o]=null});return{c(){e=y("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-5hdzo")},m(o,a){$(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=Ol(o,s,c);r[c]?(r[c].p(l,a),k(r[c],1)):(r[c]=Pl(l),r[c].c(),k(r[c],1),r[c].m(e,null))}for(Ne(),c=s.length;c<r.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)k(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)D(r[a]);n=!1},d(o){o&&L(e),$t(r,o)}}}function Pb(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class Mb extends oe{constructor(e){super(),ie(this,e,Pb,Ob,re,{posts:0})}}function Lb(t){let e,n,s,r,i,o,a;return{c(){e=y("button"),n=y("i"),r=R(),i=de(t[1]),f(n,"class",s=`codicon codicon-${t[0]}`),f(e,"title",t[2]),e.disabled=t[3],f(e,"class","svelte-wokneo")},m(c,l){$(c,e,l),g(e,n),g(e,r),g(e,i),o||(a=ne(e,"click",t[5]),o=!0)},p(c,[l]){l&1&&s!==(s=`codicon codicon-${c[0]}`)&&f(n,"class",s),l&2&&be(i,c[1]),l&4&&f(e,"title",c[2]),l&8&&(e.disabled=c[3])},i:x,o:x,d(c){c&&L(e),o=!1,a()}}}function $b(t,e,n){let{icon:s}=e,{text:r}=e,{title:i}=e,{disabled:o=!1}=e;const a=st(),c=()=>a("click");return t.$$set=l=>{"icon"in l&&n(0,s=l.icon),"text"in l&&n(1,r=l.text),"title"in l&&n(2,i=l.title),"disabled"in l&&n(3,o=l.disabled)},[s,r,i,o,a,c]}class Ai extends oe{constructor(e){super(),ie(this,e,$b,Lb,re,{icon:0,text:1,title:2,disabled:3})}}function ln(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}function Ub(t){let e,n,s,r;return{c(){e=y("i"),f(e,"title",t[0]),f(e,"class",n=vt(`codicon codicon-${t[1]}`)+" svelte-htt49j"),f(e,"tabindex","0"),Ye(e,"active",t[2])},m(i,o){$(i,e,o),s||(r=[ne(e,"click",t[3]),ne(e,"keyup",ln(t[3]))],s=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=vt(`codicon codicon-${i[1]}`)+" svelte-htt49j")&&f(e,"class",n),o&6&&Ye(e,"active",i[2])},i:x,o:x,d(i){i&&L(e),s=!1,Ke(r)}}}function Fb(t,e,n){let{title:s=void 0}=e,{icon:r}=e,{active:i}=e;const o=st(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,s=c.title),"icon"in c&&n(1,r=c.icon),"active"in c&&n(2,i=c.active)},[s,r,i,a]}class xb extends oe{constructor(e){super(),ie(this,e,Fb,Ub,re,{title:0,icon:1,active:2})}}const Ml=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Ll=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Wr=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Vb(t){let e,n,s,r,i;return{c(){e=y("i"),f(e,"tabindex","0"),f(e,"class",n=`codicon codicon-${Ml[t[0]]}`),f(e,"title",s=Ll[t[0]])},m(o,a){$(o,e,a),r||(i=[ne(e,"click",t[1]),ne(e,"keyup",ln(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=`codicon codicon-${Ml[o[0]]}`)&&f(e,"class",n),a&1&&s!==(s=Ll[o[0]])&&f(e,"title",s)},i:x,o:x,d(o){o&&L(e),r=!1,Ke(i)}}}function Bb(t,e,n){let s="+";const r=st();return[s,()=>{n(0,s=Df(s)),r("change",s)}]}class jb extends oe{constructor(e){super(),ie(this,e,Bb,Vb,re,{})}}function qb(t){let e;return{c(){e=y("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){$(n,e,s)},p:x,i:x,o:x,d(n){n&&L(e)}}}class zb extends oe{constructor(e){super(),ie(this,e,null,qb,re,{})}}class Mf{constructor(e,n,s){if(!er(e))throw TypeError("Invalid name passed to Tag constructor");if(!Nf(n))throw TypeError("Invalid count passed to Tag constructor");if(!Rf(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new Gr(e,this.name,this.count,this.type)}}let Hb=null;const Kb=async(t,e)=>{const n=e?`*${t}*`:t,s=await Of(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,Hb);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(o=>new Mf(o.name,o.count,Gb(o.types)))}else throw r.message?new Error(r.message):new Error("Cannot display tag suggestions")}else throw new Error("Failed to get tag suggestions")},Gb=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class Lf{constructor(e,n,s){if(!er(e))throw new TypeError("Invalid name passed to Supertag");if(!Wb(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const Wb=t=>Array.isArray(t)&&t.every(e=>e instanceof ki),Qb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=xn(t);let s,r=null,i=null;return Fu(Vt,async o=>{s=o,o?(console.log(o),r=kl(ur(Qn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=XI(LI(Qn,`users/${o.uid}/supertags`));i==null||i(),i=kl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new Lf(d.id,p.description,Object.entries(p.tags).map(m=>new ki(m[1],m[0]))))}),n(d=>(d.supertags=h,d))})})):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return Sl(ur(Qn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return ZI(ur(Qn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return Sl(ur(Qn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}};var Fn=Qb();const $l=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function Xb(t){let e,n;return{c(){e=y("i"),f(e,"class",n=`codicon codicon-${$l[t[0]]}`)},m(s,r){$(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${$l[s[0]]}`)&&f(e,"class",n)},i:x,o:x,d(s){s&&L(e)}}}function Yb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class $f extends oe{constructor(e){super(),ie(this,e,Yb,Xb,re,{type:0})}}function Jb(t){let e,n,s,r,i=Lt(t[0].name)+"",o,a,c,l=Mt(t[0].count)+"",u,h,d,p,m;return n=new $f({props:{type:t[0].type}}),{c(){e=y("li"),ee(n.$$.fragment),s=R(),r=y("span"),o=de(i),a=R(),c=y("span"),u=de(l),f(r,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(I,b){$(I,e,b),J(n,e,null),g(e,s),g(e,r),g(r,o),g(e,a),g(e,c),g(c,u),d=!0,p||(m=ne(e,"click",t[2]),p=!0)},p(I,[b]){const A={};b&1&&(A.type=I[0].type),n.$set(A),(!d||b&1)&&i!==(i=Lt(I[0].name)+"")&&be(o,i),(!d||b&1)&&l!==(l=Mt(I[0].count)+"")&&be(u,l),(!d||b&1&&h!==(h=I[0].name))&&f(e,"title",h)},i(I){d||(k(n.$$.fragment,I),d=!0)},o(I){D(n.$$.fragment,I),d=!1},d(I){I&&L(e),Z(n),p=!1,m()}}}function Zb(t,e,n){let{tag:s}=e;const r=st(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class eE extends oe{constructor(e){super(),ie(this,e,Zb,Jb,re,{tag:0})}}function Ul(t,e,n){const s=t.slice();return s[20]=e[n],s}function tE(t){let e,n,s,r,i=t[23].message+"",o;return{c(){e=y("div"),n=y("i"),s=R(),r=y("span"),o=de(i),f(n,"class",vt("codicon codicon-error")+" svelte-1d9l3qv"),f(e,"class","error-container svelte-1d9l3qv")},m(a,c){$(a,e,c),g(e,n),g(e,s),g(e,r),g(r,o)},p(a,c){c&4&&i!==(i=a[23].message+"")&&be(o,i)},i:x,o:x,d(a){a&&L(e)}}}function nE(t){let e,n,s=t[5],r=[];for(let o=0;o<s.length;o+=1)r[o]=Fl(Ul(t,s,o));const i=o=>D(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Ds()},m(o,a){for(let c=0;c<r.length;c+=1)r[c].m(o,a);$(o,e,a),n=!0},p(o,a){if(a&424){s=o[5];let c;for(c=0;c<s.length;c+=1){const l=Ul(o,s,c);r[c]?(r[c].p(l,a),k(r[c],1)):(r[c]=Fl(l),r[c].c(),k(r[c],1),r[c].m(e.parentNode,e))}for(Ne(),c=s.length;c<r.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)k(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)D(r[a]);n=!1},d(o){$t(r,o),o&&L(e)}}}function Fl(t){let e,n;function s(){return t[16](t[20])}return e=new eE({props:{tag:t[20]}}),e.$on("click",s),{c(){ee(e.$$.fragment)},m(r,i){J(e,r,i),n=!0},p(r,i){t=r;const o={};i&32&&(o.tag=t[20]),e.$set(o)},i(r){n||(k(e.$$.fragment,r),n=!0)},o(r){D(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function sE(t){let e,n,s;return n=new zb({}),{c(){e=y("div"),ee(n.$$.fragment),f(e,"class","hint-container svelte-1d9l3qv")},m(r,i){$(r,e,i),J(n,e,null),s=!0},p:x,i(r){s||(k(n.$$.fragment,r),s=!0)},o(r){D(n.$$.fragment,r),s=!1},d(r){r&&L(e),Z(n)}}}function rE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b;o=new jb({}),o.$on("change",t[12]),c=new xb({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[13]);let A={ctx:t,current:null,token:null,hasCatch:!0,pending:sE,then:nE,catch:tE,error:23,blocks:[,,,]};return Ja(p=t[2],A),{c(){e=y("div"),n=y("i"),s=R(),r=y("input"),i=R(),ee(o.$$.fragment),a=R(),ee(c.$$.fragment),l=R(),u=y("i"),h=R(),d=y("ol"),A.block.c(),f(n,"class","codicon codicon-search"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-1d9l3qv"),f(u,"tabindex","0"),f(u,"class",vt("codicon codicon-question")+" svelte-1d9l3qv"),f(d,"class","svelte-1d9l3qv"),Ye(d,"open",t[4]),f(e,"class","searchbar svelte-1d9l3qv"),Ye(e,"open",t[4])},m(w,E){$(w,e,E),g(e,n),g(e,s),g(e,r),it(r,t[0]),g(e,i),J(o,e,null),g(e,a),J(c,e,null),g(e,l),g(e,u),g(e,h),g(e,d),A.block.m(d,A.anchor=null),A.mount=()=>d,A.anchor=null,m=!0,I||(b=[ne(r,"input",t[9]),ne(r,"blur",t[10]),ne(r,"focus",t[11]),ne(u,"click",t[14]),ne(u,"keyup",function(){iu(ln(t[15]))&&ln(t[15]).apply(this,arguments)}),ne(e,"blur",t[17])],I=!0)},p(w,[E]){t=w,E&1&&r.value!==t[0]&&it(r,t[0]);const P={};E&2&&(P.active=!t[1]),c.$set(P),A.ctx=t,E&4&&p!==(p=t[2])&&Ja(p,A)||np(A,t,E),E&16&&Ye(d,"open",t[4]),E&16&&Ye(e,"open",t[4])},i(w){m||(k(o.$$.fragment,w),k(c.$$.fragment,w),k(A.block),m=!0)},o(w){D(o.$$.fragment,w),D(c.$$.fragment,w);for(let E=0;E<3;E+=1){const P=A.blocks[E];D(P)}m=!1},d(w){w&&L(e),Z(o),Z(c),A.block.d(),A.token=null,A=null,I=!1,Ke(b)}}}function iE(t,e,n){let s,r;tt(t,Fn,C=>n(18,s=C)),tt(t,Gt,C=>n(6,r=C));const i=st();let o,a="",c=!0,l="+",u=!1,h=[];async function d(C,U){n(4,u=!0),n(5,h=[...s.supertags.filter(j=>j.name.toLowerCase().includes(U.toLowerCase())).map(j=>new Mf(j.name,Object.keys(j.tags).length,"supertag")),...await Kb(U,C)])}const p=()=>{n(0,a=""),n(5,h=[]),n(4,u=!1)};function m(){a=this.value,n(0,a)}const I=C=>{(!C.relatedTarget||!C.target.parentNode.contains(C.relatedTarget))&&n(4,u=!1)},b=()=>{n(4,u=!0)},A=C=>{n(3,l=C.detail)},w=()=>{n(1,c=!c)},E=()=>{Xa(Gt,r="help",r)},P=()=>{Xa(Gt,r="help",r)},v=C=>{i("pick",C.toActiveTag(l)),p()},F=()=>{n(4,u=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,h=[]),a!==""&&n(2,o=d(c,a)))},[a,c,o,l,u,h,r,i,p,m,I,b,A,w,E,P,v,F]}class oE extends oe{constructor(e){super(),ie(this,e,iE,rE,re,{})}}function aE(t){let e,n,s,r=Lt(t[0].name)+"",i,o,a=Mt(t[0].count)+"",c,l,u,h,d,p;return n=new $f({props:{type:t[0].type}}),{c(){e=y("li"),ee(n.$$.fragment),s=R(),i=de(r),o=de(`
  (`),c=de(a),l=de(")"),f(e,"class",u=vt(Wr[t[0].modifier])+" svelte-apze1c"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Ye(e,"no-icon",t[0].type==="general")},m(m,I){$(m,e,I),J(n,e,null),g(e,s),g(e,i),g(e,o),g(e,c),g(e,l),h=!0,d||(p=[ne(e,"click",t[2]),ne(e,"contextmenu",Wf(t[3]))],d=!0)},p(m,[I]){const b={};I&1&&(b.type=m[0].type),n.$set(b),(!h||I&1)&&r!==(r=Lt(m[0].name)+"")&&be(i,r),(!h||I&1)&&a!==(a=Mt(m[0].count)+"")&&be(c,a),(!h||I&1&&u!==(u=vt(Wr[m[0].modifier])+" svelte-apze1c"))&&f(e,"class",u),I&1&&Ye(e,"no-icon",m[0].type==="general")},i(m){h||(k(n.$$.fragment,m),h=!0)},o(m){D(n.$$.fragment,m),h=!1},d(m){m&&L(e),Z(n),d=!1,Ke(p)}}}function cE(t,e,n){let{tag:s}=e;const r=st(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Uf extends oe{constructor(e){super(),ie(this,e,cE,aE,re,{tag:0})}}function lE(t){let e;return{c(){e=y("div")},m(n,s){$(n,e,s),t[1](e)},p:x,i:x,o:x,d(n){n&&L(e),t[1](null)}}}function uE(t,e,n){const s=st(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&(console.debug("Triggered infinite loading"),s("visible"))},{rootMargin:"1250px"});let i;function o(a){bn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class hE extends oe{constructor(e){super(),ie(this,e,uE,lE,re,{})}}var dE="/assets/shironeko-confused.4071d5b2.png";function fE(t){let e,n,s,r,i;return{c(){e=y("div"),n=y("img"),r=R(),i=y("span"),i.textContent="No results found",Yt(n.src,s=dE)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){$(o,e,a),g(e,n),g(e,r),g(e,i)},p:x,i:x,o:x,d(o){o&&L(e)}}}class pE extends oe{constructor(e){super(),ie(this,e,null,fE,re,{})}}var gE="/assets/shironeko-x.c28cad00.png";function mE(t){let e,n,s,r,i;return{c(){e=y("div"),n=y("img"),r=R(),i=y("span"),i.textContent="You have reached the end",Yt(n.src,s=gE)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){$(o,e,a),g(e,n),g(e,r),g(e,i)},p:x,i:x,o:x,d(o){o&&L(e)}}}class yE extends oe{constructor(e){super(),ie(this,e,null,mE,re,{})}}class vE{constructor(e,n){this.count=e,this.posts=n,Object.freeze(this)}}class _E{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b,A,w,E,P,v,F,C,U,j,M){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=m,this.preview_height=I,this.rating=b,this.sample_height=A,this.sample_width=w,this.score=E,this.source=P,this.status=v,this.tags=F,this.width=C,this.comments_url=U,this.owner_url=j,this.type=M,Object.freeze(this)}}const wE=Object.freeze(["id","score"]),IE=t=>wE.includes(t),Ff=20,bE="https://r34-json.herokuapp.com/v2";let EE=null;const TE=async(t,e,n,s)=>{if(!SE(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!kE(e))throw new TypeError("Invalid array of tags passed to getPage");if(!IE(n))throw new TypeError("Invalid sort property passed to getPage");if(!AE(s))throw new TypeError("Invalid minimum score passed to getPage");const r=CE(e,n,s),i=await Of(DE(t,r),EE);if(!i.ok)throw new Error(`getPage failed with http status ${i.status}`);const o=await i.json();if(!Array.isArray(o.posts))throw new Error(o);return new vE(o.count,o.posts.map(a=>new _E(a.preview_url,a.sample_url,a.file_url,a.created_at,a.has_children,a.md5,a.height,a.id,a.change,a.creator_id,a.has_notes,a.has_comments,a.parent_id,a.preview_width,a.preview_height,a.rating,a.sample_height,a.sample_width,a.score,a.source,a.status,a.tags,a.width,a.comments_url,a.owner_url,a.type)))},SE=t=>typeof t=="number"&&t>=0,kE=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof ki)),AE=t=>typeof t=="number"&&t>=0,CE=(t,e,n)=>{const s=t.reduce((i,o)=>(o.modifier==="~"?i.optional.push(o):i.other.push(o),i),{optional:[],other:[]}),r=[...s.other.map(i=>i.serialize()),`sort:${e}:desc`,`score:>=${n}`].join("+");return s.optional.length==0?r:`${r}+( ${s.optional.map(i=>i.serialize()).join(" ~ ")} )`},DE=(t,e)=>{const n=`${bE}/posts?limit=${Ff}&pid=${t}`;return e===""?n:`${n}&tags=${e}`};function RE(t){let e,n,s;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-2tve8k"),Ye(e,"visible",t[0])},m(r,i){$(r,e,i),n||(s=ne(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Ye(e,"visible",r[0])},i:x,o:x,d(r){r&&L(e),n=!1,s()}}}function NE(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>1e3),s=a};return Yf(()=>{document.addEventListener("scroll",i,{passive:!0})}),Jf(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class OE extends oe{constructor(e){super(),ie(this,e,NE,RE,re,{})}}const PE=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:s}=xn(t);return{subscribe:e,addPage(r){n(i=>({count:r.count,pages:[...i.pages,r.posts],nextPage:i.nextPage+1}))},reset(){s(t)}}};var Xi=PE();function xl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Vl(t){let e,n;return e=new Uf({props:{tag:t[9]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function ME(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b,A,w,E,P,v,F,C,U,j=t[2],M=[];for(let N=0;N<j.length;N+=1)M[N]=Vl(xl(t,j,N));const ce=N=>D(M[N],1,1,()=>{M[N]=null});return v=new Ai({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",icon:"plus",text:"Create supertag",disabled:!t[3]}}),v.$on("click",t[8]),{c(){e=y("dialog"),n=y("h3"),n.textContent="Create Supertag",s=R(),r=y("i"),i=R(),o=y("div"),a=y("label"),a.textContent="Name",c=R(),l=y("input"),u=R(),h=y("div"),d=y("label"),d.textContent="Description",p=R(),m=y("textarea"),I=R(),b=y("div"),A=y("span"),A.textContent="Tags",w=R(),E=y("ol");for(let N=0;N<M.length;N+=1)M[N].c();P=R(),ee(v.$$.fragment),f(r,"tabindex","0"),f(r,"class",vt("codicon codicon-close")+" svelte-64l7g"),f(a,"for","supertag-name"),f(a,"class","svelte-64l7g"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-64l7g"),f(o,"class","svelte-64l7g"),f(d,"for","supertag-description"),f(d,"class","svelte-64l7g"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-64l7g"),f(h,"class","svelte-64l7g"),f(A,"class","svelte-64l7g"),f(E,"class","svelte-64l7g"),f(b,"class","svelte-64l7g"),f(e,"class","svelte-64l7g")},m(N,le){$(N,e,le),g(e,n),g(e,s),g(e,r),g(e,i),g(e,o),g(o,a),g(o,c),g(o,l),it(l,t[0]),g(e,u),g(e,h),g(h,d),g(h,p),g(h,m),it(m,t[1]),g(e,I),g(e,b),g(b,A),g(b,w),g(b,E);for(let q=0;q<M.length;q+=1)M[q].m(E,null);g(e,P),J(v,e,null),F=!0,C||(U=[ne(r,"click",t[5]),ne(r,"keyup",ln(t[5])),ne(l,"input",t[6]),ne(m,"input",t[7])],C=!0)},p(N,[le]){if(le&1&&l.value!==N[0]&&it(l,N[0]),le&2&&it(m,N[1]),le&4){j=N[2];let ye;for(ye=0;ye<j.length;ye+=1){const qe=xl(N,j,ye);M[ye]?(M[ye].p(qe,le),k(M[ye],1)):(M[ye]=Vl(qe),M[ye].c(),k(M[ye],1),M[ye].m(E,null))}for(Ne(),ye=j.length;ye<M.length;ye+=1)ce(ye);Oe()}const q={};le&8&&(q.title=N[3]?"Click to create supertag":"Enter a valid name to continue"),le&8&&(q.disabled=!N[3]),v.$set(q)},i(N){if(!F){for(let le=0;le<j.length;le+=1)k(M[le]);k(v.$$.fragment,N),F=!0}},o(N){M=M.filter(Boolean);for(let le=0;le<M.length;le+=1)D(M[le]);D(v.$$.fragment,N),F=!1},d(N){N&&L(e),$t(M,N),Z(v),C=!1,Ke(U)}}}function LE(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=st(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Lf(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=er(r))},[r,i,o,s,a,c,l,u,h]}class $E extends oe{constructor(e){super(),ie(this,e,LE,ME,re,{name:0,description:1,tags:2})}}function Bl(t,e,n){const s=t.slice();return s[18]=e[n],s}function jl(t,e,n){const s=t.slice();return s[21]=e[n],s[23]=n,s}function ql(t){let e,n,s,r=t[3],i=[];for(let c=0;c<r.length;c+=1)i[c]=zl(jl(t,r,c));const o=c=>D(i[c],1,1,()=>{i[c]=null});let a=t[3].length>1&&Hl(t);return{c(){e=y("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=R(),a&&a.c(),f(e,"class","svelte-1toz0qq")},m(c,l){$(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);g(e,n),a&&a.m(e,null),s=!0},p(c,l){if(l&8){r=c[3];let u;for(u=0;u<r.length;u+=1){const h=jl(c,r,u);i[u]?(i[u].p(h,l),k(i[u],1)):(i[u]=zl(h),i[u].c(),k(i[u],1),i[u].m(e,n))}for(Ne(),u=r.length;u<i.length;u+=1)o(u);Oe()}c[3].length>1?a?a.p(c,l):(a=Hl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)k(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)D(i[l]);s=!1},d(c){c&&L(e),$t(i,c),a&&a.d()}}}function zl(t){let e,n;function s(){return t[8](t[23])}function r(){return t[9](t[21])}return e=new Uf({props:{tag:t[21]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){ee(e.$$.fragment)},m(i,o){J(e,i,o),n=!0},p(i,o){t=i;const a={};o&8&&(a.tag=t[21]),e.$set(a)},i(i){n||(k(e.$$.fragment,i),n=!0)},o(i){D(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function Hl(t){let e,n,s;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1toz0qq"></i>',f(e,"class","add-supertag svelte-1toz0qq"),f(e,"title","Click to create a new supertag")},m(r,i){$(r,e,i),n||(s=ne(e,"click",t[10]),n=!0)},p:x,d(r){r&&L(e),n=!1,s()}}}function UE(t){let e,n;return e=new pE({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p:x,i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function FE(t){let e,n=Mt(t[4].count)+"",s,r,i,o,a,c,l,u,h,d=t[4].pages,p=[];for(let w=0;w<d.length;w+=1)p[w]=Kl(Bl(t,d,w));const m=w=>D(p[w],1,1,()=>{p[w]=null}),I=[VE,xE],b=[];function A(w,E){return w[4].pages.length<w[4].count/Ff?0:1}return c=A(t),l=b[c]=I[c](t),{c(){e=y("p"),s=de(n),r=de(" results"),i=R(),o=y("ol");for(let w=0;w<p.length;w+=1)p[w].c();a=R(),l.c(),u=Ds(),f(e,"class","count svelte-1toz0qq"),f(o,"class","svelte-1toz0qq")},m(w,E){$(w,e,E),g(e,s),g(e,r),$(w,i,E),$(w,o,E);for(let P=0;P<p.length;P+=1)p[P].m(o,null);$(w,a,E),b[c].m(w,E),$(w,u,E),h=!0},p(w,E){if((!h||E&16)&&n!==(n=Mt(w[4].count)+"")&&be(s,n),E&16){d=w[4].pages;let v;for(v=0;v<d.length;v+=1){const F=Bl(w,d,v);p[v]?(p[v].p(F,E),k(p[v],1)):(p[v]=Kl(F),p[v].c(),k(p[v],1),p[v].m(o,null))}for(Ne(),v=d.length;v<p.length;v+=1)m(v);Oe()}let P=c;c=A(w),c===P?b[c].p(w,E):(Ne(),D(b[P],1,1,()=>{b[P]=null}),Oe(),l=b[c],l?l.p(w,E):(l=b[c]=I[c](w),l.c()),k(l,1),l.m(u.parentNode,u))},i(w){if(!h){for(let E=0;E<d.length;E+=1)k(p[E]);k(l),h=!0}},o(w){p=p.filter(Boolean);for(let E=0;E<p.length;E+=1)D(p[E]);D(l),h=!1},d(w){w&&L(e),w&&L(i),w&&L(o),$t(p,w),w&&L(a),b[c].d(w),w&&L(u)}}}function Kl(t){let e,n;return e=new Mb({props:{posts:t[18]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&16&&(i.posts=s[18]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function xE(t){let e,n;return e=new yE({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p:x,i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function VE(t){let e,n;return e=new hE({}),e.$on("visible",t[6]),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p:x,i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function Gl(t){let e,n;return e=new $E({props:{tags:t[3]}}),e.$on("submit",t[14]),e.$on("close",t[15]),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.tags=s[3]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function BE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b,A,w,E,P,v,F,C,U,j,M,ce,N,le;r=new oE({}),r.$on("pick",t[7]);let q=t[3].length&&ql(t);c=new Ai({props:{title:"Click to search with active tags",icon:"search",text:"Search"}}),c.$on("click",t[11]);const ye=[FE,UE],qe=[];function he(z,me){return z[4].count?0:z[4].count===0?1:-1}~(v=he(t))&&(F=qe[v]=ye[v](t)),U=new OE({});let X=t[2]&&Gl(t);return{c(){e=y("div"),n=y("h1"),n.textContent="kurosearch",s=R(),ee(r.$$.fragment),i=R(),q&&q.c(),o=R(),a=y("div"),ee(c.$$.fragment),l=R(),u=y("div"),h=y("select"),d=y("option"),d.textContent="New posts",p=y("option"),p.textContent="Popular posts",m=R(),I=y("select"),b=y("option"),b.textContent="No minimum score",A=y("option"),A.textContent="Min 10 likes",w=y("option"),w.textContent="Min 100 likes",E=y("option"),E.textContent="Min 1000 likes",P=R(),F&&F.c(),C=R(),ee(U.$$.fragment),j=R(),X&&X.c(),M=Ds(),f(n,"class","svelte-1toz0qq"),f(a,"class","sort-row svelte-1toz0qq"),d.__value="id",d.value=d.__value,p.__value="score",p.value=p.__value,f(h,"class","svelte-1toz0qq"),t[0]===void 0&&Dn(()=>t[12].call(h)),b.__value=0,b.value=b.__value,A.__value=10,A.value=A.__value,w.__value=100,w.value=w.__value,E.__value=1e3,E.value=E.__value,f(I,"class","svelte-1toz0qq"),t[1]===void 0&&Dn(()=>t[13].call(I)),f(u,"class","sort-row svelte-1toz0qq"),f(e,"class","search-config svelte-1toz0qq")},m(z,me){$(z,e,me),g(e,n),g(e,s),J(r,e,null),g(e,i),q&&q.m(e,null),g(e,o),g(e,a),J(c,a,null),g(e,l),g(e,u),g(u,h),g(h,d),g(h,p),_n(h,t[0]),g(u,m),g(u,I),g(I,b),g(I,A),g(I,w),g(I,E),_n(I,t[1]),$(z,P,me),~v&&qe[v].m(z,me),$(z,C,me),J(U,z,me),$(z,j,me),X&&X.m(z,me),$(z,M,me),ce=!0,N||(le=[ne(h,"change",t[12]),ne(I,"change",t[13])],N=!0)},p(z,[me]){z[3].length?q?(q.p(z,me),me&8&&k(q,1)):(q=ql(z),q.c(),k(q,1),q.m(e,o)):q&&(Ne(),D(q,1,1,()=>{q=null}),Oe()),me&1&&_n(h,z[0]),me&2&&_n(I,z[1]);let Ie=v;v=he(z),v===Ie?~v&&qe[v].p(z,me):(F&&(Ne(),D(qe[Ie],1,1,()=>{qe[Ie]=null}),Oe()),~v?(F=qe[v],F?F.p(z,me):(F=qe[v]=ye[v](z),F.c()),k(F,1),F.m(C.parentNode,C)):F=null),z[2]?X?(X.p(z,me),me&4&&k(X,1)):(X=Gl(z),X.c(),k(X,1),X.m(M.parentNode,M)):X&&(Ne(),D(X,1,1,()=>{X=null}),Oe())},i(z){ce||(k(r.$$.fragment,z),k(q),k(c.$$.fragment,z),k(F),k(U.$$.fragment,z),k(X),ce=!0)},o(z){D(r.$$.fragment,z),D(q),D(c.$$.fragment,z),D(F),D(U.$$.fragment,z),D(X),ce=!1},d(z){z&&L(e),Z(r),q&&q.d(),Z(c),z&&L(P),~v&&qe[v].d(z),z&&L(C),Z(U,z),z&&L(j),X&&X.d(z),z&&L(M),N=!1,Ke(le)}}}function jE(t,e,n){let s,r,i;tt(t,Fn,v=>n(16,s=v)),tt(t,Ct,v=>n(3,r=v)),tt(t,Xi,v=>n(4,i=v));let o="id",a=0,c=!1;const l=async()=>(Xi.reset(),u()),u=async()=>{try{const v=h(),F=await TE(i.nextPage,v,o,a);Xi.addPage(F)}catch(v){console.warn(v)}},h=()=>r.flatMap(v=>v.type==="supertag"?s.supertags.find(F=>F.name===v.name).tags:v.toSearchableTag()),d=v=>Ct.addOrReplace(v.detail),p=v=>Ct.removeByIndex(v),m=v=>Ct.addOrReplace(new Gr(Df(v.modifier),v.name,v.count,v.type)),I=()=>{n(2,c=!0)},b=()=>l();function A(){o=Zi(this),n(0,o)}function w(){a=Zi(this),n(1,a)}return[o,a,c,r,i,l,u,d,p,m,I,b,A,w,v=>{Fn.addSupertag(v.detail),Ct.set([new Gr("+",v.detail.name,v.detail.tags.length,"supertag")])},()=>{n(2,c=!1)}]}class qE extends oe{constructor(e){super(),ie(this,e,jE,BE,re,{})}}const{subscribe:zE,set:HE}=xn("dark");var Wl={subscribe:zE,set(t){HE(t),KE(t),Fn.setTheme(t)}};const KE=t=>{document.documentElement.classList.replace(GE(t),t)},GE=t=>t==="dark"?"light":"dark";function WE(t){let e,n,s,r,i,o,a;return{c(){e=y("label"),n=de(`Theme:
  `),s=y("select"),r=y("option"),r.textContent="Dark",i=y("option"),i.textContent="Light",r.__value="dark",r.value=r.__value,i.__value="light",i.value=i.__value,t[0]===void 0&&Dn(()=>t[1].call(s))},m(c,l){$(c,e,l),g(e,n),g(e,s),g(s,r),g(s,i),_n(s,t[0]),o||(a=ne(s,"change",t[1]),o=!0)},p(c,[l]){l&1&&_n(s,c[0])},i:x,o:x,d(c){c&&L(e),o=!1,a()}}}function QE(t,e,n){let s;tt(t,Wl,i=>n(0,s=i));function r(){s=Zi(this),Wl.set(s)}return[s,r]}class XE extends oe{constructor(e){super(),ie(this,e,QE,WE,re,{})}}function YE(t){let e;return{c(){e=y("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,f(e,"id","tags")},m(n,s){$(n,e,s)},p:x,i:x,o:x,d(n){n&&L(e)}}}class JE extends oe{constructor(e){super(),ie(this,e,null,YE,re,{})}}function ZE(t){let e,n=Lt(t[0].name)+"",s,r;return{c(){e=y("li"),s=de(n),f(e,"class",r=vt(Wr[t[0].modifier])+" svelte-1a1wcxu")},m(i,o){$(i,e,o),g(e,s)},p(i,[o]){o&1&&n!==(n=Lt(i[0].name)+"")&&be(s,n),o&1&&r!==(r=vt(Wr[i[0].modifier])+" svelte-1a1wcxu")&&f(e,"class",r)},i:x,o:x,d(i){i&&L(e)}}}function eT(t,e,n){let{tag:s}=e;return t.$$set=r=>{"tag"in r&&n(0,s=r.tag)},[s]}class tT extends oe{constructor(e){super(),ie(this,e,eT,ZE,re,{tag:0})}}function Ql(t,e,n){const s=t.slice();return s[4]=e[n],s}function Xl(t){let e,n;return e=new tT({props:{tag:t[4]}}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.tag=s[4]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function nT(t){let e,n,s=t[0].name+"",r,i,o,a=Object.keys(t[0].tags).length+"",c,l,u,h,d,p,m,I,b=t[0].description+"",A,w,E,P,v,F,C=t[0].tags,U=[];for(let M=0;M<C.length;M+=1)U[M]=Xl(Ql(t,C,M));const j=M=>D(U[M],1,1,()=>{U[M]=null});return{c(){e=y("li"),n=y("h3"),r=de(s),i=R(),o=y("small"),c=de(a),l=de(" tags"),u=R(),h=y("i"),d=R(),p=y("i"),m=R(),I=y("span"),A=de(b),w=R(),E=y("ol");for(let M=0;M<U.length;M+=1)U[M].c();f(n,"class","svelte-h29a8o"),f(o,"class","svelte-h29a8o"),f(h,"tabindex","0"),f(h,"class","codicon codicon-edit svelte-h29a8o"),f(p,"tabindex","0"),f(p,"class","codicon codicon-close svelte-h29a8o"),f(I,"class","svelte-h29a8o"),f(E,"class","svelte-h29a8o"),f(e,"class","svelte-h29a8o")},m(M,ce){$(M,e,ce),g(e,n),g(n,r),g(e,i),g(e,o),g(o,c),g(o,l),g(e,u),g(e,h),g(e,d),g(e,p),g(e,m),g(e,I),g(I,A),g(e,w),g(e,E);for(let N=0;N<U.length;N+=1)U[N].m(E,null);P=!0,v||(F=[ne(h,"click",t[2]),ne(h,"keyup",ln(t[2])),ne(p,"click",t[1]),ne(p,"keyup",ln(t[1]))],v=!0)},p(M,[ce]){if((!P||ce&1)&&s!==(s=M[0].name+"")&&be(r,s),(!P||ce&1)&&a!==(a=Object.keys(M[0].tags).length+"")&&be(c,a),(!P||ce&1)&&b!==(b=M[0].description+"")&&be(A,b),ce&1){C=M[0].tags;let N;for(N=0;N<C.length;N+=1){const le=Ql(M,C,N);U[N]?(U[N].p(le,ce),k(U[N],1)):(U[N]=Xl(le),U[N].c(),k(U[N],1),U[N].m(E,null))}for(Ne(),N=C.length;N<U.length;N+=1)j(N);Oe()}},i(M){if(!P){for(let ce=0;ce<C.length;ce+=1)k(U[ce]);P=!0}},o(M){U=U.filter(Boolean);for(let ce=0;ce<U.length;ce+=1)D(U[ce]);P=!1},d(M){M&&L(e),$t(U,M),v=!1,Ke(F)}}}function sT(t,e,n){let{supertag:s}=e;const r=st(),i=()=>r("remove",s),o=()=>r("edit",s);return t.$$set=a=>{"supertag"in a&&n(0,s=a.supertag)},[s,i,o]}class rT extends oe{constructor(e){super(),ie(this,e,sT,nT,re,{supertag:0})}}function iT(t){let e,n,s,r,i,o,a,c,l;return o=new Ai({props:{icon:"sign-in",text:t[0],title:"Click to sign in",disabled:t[3]}}),o.$on("click",t[4]),{c(){e=y("div"),n=y("input"),s=R(),r=y("input"),i=R(),ee(o.$$.fragment),f(n,"type","text"),f(n,"placeholder","Email"),f(n,"autocomplete","email"),f(n,"class","svelte-14kdiag"),f(r,"type","password"),f(r,"placeholder","Password"),f(r,"autocomplete","current-password"),f(r,"class","svelte-14kdiag"),f(e,"class","svelte-14kdiag")},m(u,h){$(u,e,h),g(e,n),it(n,t[1]),g(e,s),g(e,r),it(r,t[2]),g(e,i),J(o,e,null),a=!0,c||(l=[ne(n,"input",t[5]),ne(r,"input",t[6])],c=!0)},p(u,[h]){h&2&&n.value!==u[1]&&it(n,u[1]),h&4&&r.value!==u[2]&&it(r,u[2]);const d={};h&1&&(d.text=u[0]),h&8&&(d.disabled=u[3]),o.$set(d)},i(u){a||(k(o.$$.fragment,u),a=!0)},o(u){D(o.$$.fragment,u),a=!1},d(u){u&&L(e),Z(o),c=!1,Ke(l)}}}function oT(t,e,n){let s;const r=st();let{submitLabel:i}=e,o="",a="";const c=()=>{s||r("submit",{email:o,password:a})};function l(){o=this.value,n(1,o)}function u(){a=this.value,n(2,a)}return t.$$set=h=>{"submitLabel"in h&&n(0,i=h.submitLabel)},t.$$.update=()=>{t.$$.dirty&6&&n(3,s=!o||!a)},[i,o,a,s,c,l,u]}class Yl extends oe{constructor(e){super(),ie(this,e,oT,iT,re,{submitLabel:0})}}function aT(t){let e,n;return{c(){e=y("img"),Yt(e.src,n="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png")||f(e,"src",n),f(e,"alt","Google"),f(e,"class","svelte-1yxzjhb")},m(s,r){$(s,e,r)},p:x,i:x,o:x,d(s){s&&L(e)}}}class cT extends oe{constructor(e){super(),ie(this,e,null,aT,re,{})}}function lT(t){let e,n,s,r,i,o,a,c;return n=new cT({}),{c(){e=y("button"),ee(n.$$.fragment),s=R(),r=y("span"),i=de(t[0]),f(r,"class","svelte-1vuspa7"),f(e,"class","svelte-1vuspa7")},m(l,u){$(l,e,u),J(n,e,null),g(e,s),g(e,r),g(r,i),o=!0,a||(c=ne(e,"click",t[2]),a=!0)},p(l,[u]){(!o||u&1)&&be(i,l[0])},i(l){o||(k(n.$$.fragment,l),o=!0)},o(l){D(n.$$.fragment,l),o=!1},d(l){l&&L(e),Z(n),a=!1,c()}}}function uT(t,e,n){let{content:s}=e;const r=st(),i=()=>r("click");return t.$$set=o=>{"content"in o&&n(0,s=o.content)},[s,r,i]}class hT extends oe{constructor(e){super(),ie(this,e,uT,lT,re,{content:0})}}function dT(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,m,I,b,A;return i=new Yl({props:{submitLabel:"Sign In"}}),i.$on("submit",t[0]),l=new hT({props:{content:"Sign in With Google"}}),l.$on("click",t[1]),b=new Yl({props:{submitLabel:"Create Account"}}),b.$on("submit",t[2]),{c(){e=y("div"),n=y("div"),s=y("h3"),s.textContent="Sign In",r=R(),ee(i.$$.fragment),o=R(),a=y("p"),a.textContent="or",c=R(),ee(l.$$.fragment),u=R(),h=y("div"),d=R(),p=y("div"),m=y("h3"),m.textContent="Sign Up",I=R(),ee(b.$$.fragment),f(a,"class","svelte-1cfcs5s"),f(n,"class","providerlist svelte-1cfcs5s"),f(h,"class","divider svelte-1cfcs5s"),f(p,"class","providerlist svelte-1cfcs5s"),f(e,"class","container svelte-1cfcs5s")},m(w,E){$(w,e,E),g(e,n),g(n,s),g(n,r),J(i,n,null),g(n,o),g(n,a),g(n,c),J(l,n,null),g(e,u),g(e,h),g(e,d),g(e,p),g(p,m),g(p,I),J(b,p,null),A=!0},p:x,i(w){A||(k(i.$$.fragment,w),k(l.$$.fragment,w),k(b.$$.fragment,w),A=!0)},o(w){D(i.$$.fragment,w),D(l.$$.fragment,w),D(b.$$.fragment,w),A=!1},d(w){w&&L(e),Z(i),Z(l),Z(b)}}}function fT(t){return[r=>Cn.signInWithEmail(r.detail.email,r.detail.password),()=>Cn.signInWithGoogle(),r=>Cn.signUpWithEmail(r.detail.email,r.detail.password)]}class pT extends oe{constructor(e){super(),ie(this,e,fT,dT,re,{})}}function Jl(t,e,n){const s=t.slice();return s[4]=e[n],s}function gT(t){let e,n;return e=new pT({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p:x,i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function mT(t){var qe;let e,n,s,r,i,o,a,c,l,u,h=((qe=t[0].user.displayName)!=null?qe:"Anonymous")+"",d,p,m,I,b,A=t[0].user.email+"",w,E,P,v,F,C,U,j,M,ce;m=new Ai({props:{icon:"sign-out",text:"Sign out",title:"Click to sign out"}}),m.$on("click",t[2]);let N=t[1].supertags.length===0&&Zl(),le=t[1].supertags,q=[];for(let he=0;he<le.length;he+=1)q[he]=eu(Jl(t,le,he));const ye=he=>D(q[he],1,1,()=>{q[he]=null});return{c(){var he;e=y("div"),n=y("div"),s=y("h2"),s.textContent="Signed in as",r=R(),i=y("div"),o=y("img"),c=R(),l=y("div"),u=y("span"),d=de(h),p=R(),ee(m.$$.fragment),I=R(),b=y("span"),w=de(A),E=R(),P=y("div"),v=y("h2"),v.textContent="Your supertags",F=R(),C=y("div"),U=R(),N&&N.c(),j=R(),M=y("ul");for(let X=0;X<q.length;X+=1)q[X].c();f(o,"class","profile-picture svelte-6r5uhe"),Yt(o.src,a=(he=t[0].user.photoURL)!=null?he:Kr)||f(o,"src",a),f(o,"alt","Profile"),f(u,"class","svelte-6r5uhe"),f(l,"class","name-area svelte-6r5uhe"),f(i,"class","overview svelte-6r5uhe"),f(C,"class","supertags"),f(M,"class","svelte-6r5uhe"),f(e,"class","account-view svelte-6r5uhe")},m(he,X){$(he,e,X),g(e,n),g(n,s),g(n,r),g(n,i),g(i,o),g(i,c),g(i,l),g(l,u),g(u,d),g(l,p),J(m,l,null),g(i,I),g(i,b),g(b,w),g(e,E),g(e,P),g(P,v),g(P,F),g(P,C),g(P,U),N&&N.m(P,null),g(P,j),g(P,M);for(let z=0;z<q.length;z+=1)q[z].m(M,null);ce=!0},p(he,X){var z,me;if((!ce||X&1&&!Yt(o.src,a=(z=he[0].user.photoURL)!=null?z:Kr))&&f(o,"src",a),(!ce||X&1)&&h!==(h=((me=he[0].user.displayName)!=null?me:"Anonymous")+"")&&be(d,h),(!ce||X&1)&&A!==(A=he[0].user.email+"")&&be(w,A),he[1].supertags.length===0?N||(N=Zl(),N.c(),N.m(P,j)):N&&(N.d(1),N=null),X&2){le=he[1].supertags;let Ie;for(Ie=0;Ie<le.length;Ie+=1){const za=Jl(he,le,Ie);q[Ie]?(q[Ie].p(za,X),k(q[Ie],1)):(q[Ie]=eu(za),q[Ie].c(),k(q[Ie],1),q[Ie].m(M,null))}for(Ne(),Ie=le.length;Ie<q.length;Ie+=1)ye(Ie);Oe()}},i(he){if(!ce){k(m.$$.fragment,he);for(let X=0;X<le.length;X+=1)k(q[X]);ce=!0}},o(he){D(m.$$.fragment,he),q=q.filter(Boolean);for(let X=0;X<q.length;X+=1)D(q[X]);ce=!1},d(he){he&&L(e),Z(m),N&&N.d(),$t(q,he)}}}function Zl(t){let e;return{c(){e=y("span"),e.textContent="You don't have any supertags yet. You can create them when you have more than one tag active."},m(n,s){$(n,e,s)},d(n){n&&L(e)}}}function eu(t){let e,n;return e=new rT({props:{supertag:t[4]}}),e.$on("remove",t[3]),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.supertag=s[4]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function yT(t){let e,n,s,r;const i=[mT,gT],o=[];function a(c,l){return c[0].loggedIn?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ds()},m(c,l){o[e].m(c,l),$(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Ne(),D(o[u],1,1,()=>{o[u]=null}),Oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),k(n,1),n.m(s.parentNode,s))},i(c){r||(k(n),r=!0)},o(c){D(n),r=!1},d(c){o[e].d(c),c&&L(s)}}}function vT(t,e,n){let s,r;return tt(t,Cn,a=>n(0,s=a)),tt(t,Fn,a=>n(1,r=a)),[s,r,()=>Cn.signOut(),a=>Fn.deleteSupertag(a.detail)]}class _T extends oe{constructor(e){super(),ie(this,e,vT,yT,re,{})}}class wT extends oe{constructor(e){super(),ie(this,e,null,null,re,{})}}function IT(t){let e;return{c(){e=y("p"),e.textContent="You got lost..."},m(n,s){$(n,e,s)},i:x,o:x,d(n){n&&L(e)}}}function bT(t){let e,n;return e=new JE({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function ET(t){let e,n;return e=new XE({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function TT(t){let e,n;return e=new _T({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function ST(t){let e,n;return e=new qE({}),{c(){ee(e.$$.fragment)},m(s,r){J(e,s,r),n=!0},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){D(e.$$.fragment,s),n=!1},d(s){Z(e,s)}}}function kT(t){let e,n,s,r,i,o,a,c;e=new wT({}),s=new cb({});const l=[ST,TT,ET,bT,IT],u=[];function h(d,p){return d[0]==="search"?0:d[0]==="account"?1:d[0]==="settings"?2:d[0]==="help"?3:4}return o=h(t),a=u[o]=l[o](t),{c(){ee(e.$$.fragment),n=R(),ee(s.$$.fragment),r=R(),i=y("main"),a.c()},m(d,p){J(e,d,p),$(d,n,p),J(s,d,p),$(d,r,p),$(d,i,p),u[o].m(i,null),c=!0},p(d,[p]){let m=o;o=h(d),o!==m&&(Ne(),D(u[m],1,1,()=>{u[m]=null}),Oe(),a=u[o],a||(a=u[o]=l[o](d),a.c()),k(a,1),a.m(i,null))},i(d){c||(k(e.$$.fragment,d),k(s.$$.fragment,d),k(a),c=!0)},o(d){D(e.$$.fragment,d),D(s.$$.fragment,d),D(a),c=!1},d(d){Z(e,d),d&&L(n),Z(s,d),d&&L(r),d&&L(i),u[o].d()}}}function AT(t,e,n){let s;return tt(t,Gt,r=>n(0,s=r)),[s]}class CT extends oe{constructor(e){super(),ie(this,e,AT,kT,re,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function tu(t,e){return new Promise(function(n){var s=new MessageChannel;s.port1.onmessage=function(r){n(r.data)},t.postMessage(e,[s.port2])})}function DT(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function nu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function RT(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(r,i){if(r){if(typeof r=="string")return nu(r,i);var o=Object.prototype.toString.call(r).slice(8,-1);return o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set"?Array.from(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?nu(r,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Yi=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Ji(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Xn=function(t,e){this.type=t,Object.assign(this,e)};function hr(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function NT(){}var OT={type:"SKIP_WAITING"};function su(t,e){if(!e)return t&&t.then?t.then(NT):Promise.resolve()}var PT=function(t){var e,n;function s(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Yi,l.en=new Yi,l.on=new Yi,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!Ji(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,p=h.target,m=p.state,I=p===l.vn,b={sw:p,isExternal:I,originalEvent:h};!I&&l.mn&&(b.isUpdate=!0),l.dispatchEvent(new Xn(m,b)),m==="installed"?l.wn=self.setTimeout(function(){m==="installed"&&d.waiting===p&&l.dispatchEvent(new Xn("waiting",b))},200):m==="activating"&&(clearTimeout(l.wn),I||l.en.resolve(p))},l.dn=function(h){var d=l.hn,p=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Xn("controlling",{isExternal:p,originalEvent:h,sw:d,isUpdate:l.mn})),p||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,p=h.ports,m=h.source;return hr(l.getSW(),function(){l.an.has(m)&&l.dispatchEvent(new Xn("message",{data:d,originalEvent:h,ports:p,sw:m}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(p){return Promise.reject(p)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r,i,o=s.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var p=h();return p&&p.then?p.then(d):d(p)}(function(){if(!l&&document.readyState!=="complete")return su(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),hr(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&Ji(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Xn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?su(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return hr(this.getSW(),function(c){return tu(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&tu(this.fn.waiting,OT)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Ji(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return hr(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},r=s,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&DT(r.prototype,i),s}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,s){this.Sn(n).add(s)},e.removeEventListener=function(n,s){this.Sn(n).delete(s)},e.dispatchEvent=function(n){n.target=this;for(var s,r=RT(this.Sn(n.type));!(s=r()).done;)(0,s.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function MT(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new PT("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():s==null||s()}),o.register({immediate:e}).then(c=>{r==null||r(c)}).catch(c=>{i==null||i(c)})),a}new CT({target:document.getElementById("app")});MT();
