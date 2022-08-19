var $f=Object.defineProperty,xf=Object.defineProperties;var Uf=Object.getOwnPropertyDescriptors;var za=Object.getOwnPropertySymbols;var Ff=Object.prototype.hasOwnProperty,Vf=Object.prototype.propertyIsEnumerable;var Ha=(t,e,n)=>e in t?$f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ka=(t,e)=>{for(var n in e||(e={}))Ff.call(e,n)&&Ha(t,n,e[n]);if(za)for(var n of za(e))Vf.call(e,n)&&Ha(t,n,e[n]);return t},Ga=(t,e)=>xf(t,Uf(e));const Bf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Bf();function V(){}function jf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function tu(t){return t()}function Wa(){return Object.create(null)}function We(t){t.forEach(tu)}function nu(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Jr;function kn(t,e){return Jr||(Jr=document.createElement("a")),Jr.href=e,t===Jr.href}function qf(t){return Object.keys(t).length===0}function zf(t,...e){if(t==null)return V;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function et(t,e,n){t.$$.on_destroy.push(zf(e,n))}function pt(t){return t==null?"":t}function Qa(t,e,n){return t.set(n),e}function p(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function dn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function L(){return fe(" ")}function kr(){return fe("")}function re(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Hf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Kf(t){return Array.from(t.childNodes)}function ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function mn(t,e){t.value=e==null?"":e}function yn(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Zi(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Xe(t,e,n){t.classList[n?"add":"remove"](e)}function Gf(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let ar;function ut(t){ar=t}function Ks(){if(!ar)throw new Error("Function called outside component initialization");return ar}function Wf(t){Ks().$$.on_mount.push(t)}function Qf(t){Ks().$$.on_destroy.push(t)}function It(){const t=Ks();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Gf(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const Gn=[],wn=[],ls=[],Xa=[],Xf=Promise.resolve();let eo=!1;function Yf(){eo||(eo=!0,Xf.then(No))}function An(t){ls.push(t)}const ki=new Set;let Zr=0;function No(){const t=ar;do{for(;Zr<Gn.length;){const e=Gn[Zr];Zr++,ut(e),Jf(e.$$)}for(ut(null),Gn.length=0,Zr=0;wn.length;)wn.pop()();for(let e=0;e<ls.length;e+=1){const n=ls[e];ki.has(n)||(ki.add(n),n())}ls.length=0}while(Gn.length);for(;Xa.length;)Xa.pop()();eo=!1,ki.clear(),ut(t)}function Jf(t){if(t.fragment!==null){t.update(),We(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(An)}}const us=new Set;let Ft;function Ne(){Ft={r:0,c:[],p:Ft}}function Oe(){Ft.r||We(Ft.c),Ft=Ft.p}function A(t,e){t&&t.i&&(us.delete(t),t.i(e))}function R(t,e,n,r){if(t&&t.o){if(us.has(t))return;us.add(t),Ft.c.push(()=>{us.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Ya(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Ne(),R(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Oe())}):e.block.d(1),l.c(),A(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&No()}if(jf(t)){const s=Ks();if(t.then(i=>{ut(s),r(e.then,1,e.value,i),ut(null)},i=>{if(ut(s),r(e.catch,2,e.error,i),ut(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Zf(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function se(t){t&&t.c()}function te(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||An(()=>{const c=i.map(tu).filter(nu);o?o.push(...c):We(c),t.$$.on_mount=[]}),a.forEach(An)}function ne(t,e){const n=t.$$;n.fragment!==null&&(We(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function eg(t,e){t.$$.dirty[0]===-1&&(Gn.push(t),Yf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,s,i,o,a=[-1]){const c=ar;ut(t);const l=t.$$={fragment:null,ctx:null,props:i,update:V,not_equal:s,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Wa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&eg(t,h)),d}):[],l.update(),u=!0,We(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Kf(e.target);l.fragment&&l.fragment.l(h),h.forEach($)}else l.fragment&&l.fragment.c();e.intro&&A(t.$$.fragment),te(t,e.target,e.anchor,e.customElement),No()}ut(c)}class he{$destroy(){ne(this,1),this.$destroy=V}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!qf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn=[];function $n(t,e=V){let n;const r=new Set;function s(a){if(le(t,a)&&(t=a,n)){const c=!fn.length;for(const l of r)l[1](),fn.push(l,t);if(c){for(let l=0;l<fn.length;l+=2)fn[l][0](fn[l+1]);fn.length=0}}}function i(a){s(a(t))}function o(a,c=V){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||V),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const tg=Object.freeze(["search","account","settings","help"]),ng=t=>tg.includes(t),rg=()=>{const{subscribe:t,set:e}=$n("search");return{subscribe:t,navigateTo(n){if(!ng(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var Ht=rg();function sg(t){let e,n,r,s,i,o;return{c(){e=dn("svg"),n=dn("g"),r=dn("path"),s=dn("defs"),i=dn("clipPath"),o=dn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){x(a,e,c),p(e,n),p(n,r),p(e,s),p(s,i),p(i,o)},p:V,i:V,o:V,d(a){a&&$(e)}}}class ig extends he{constructor(e){super(),ue(this,e,null,sg,le,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ru=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},og=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ru(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):og(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ag=function(t){const e=ru(t);return su.encodeByteArray(e,!0)},iu=function(t){return ag(t).replace(/\./g,"")},cg=function(t){try{return su.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ou(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Oo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function au(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ug(){return Ae().indexOf("Electron/")>=0}function cu(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hg(){return Ae().indexOf("MSAppHost/")>=0}function lu(){return typeof indexedDB=="object"}function uu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function dg(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="FirebaseError";class nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fg,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nt(s,a,r)}}function gg(t,e){return t.replace(pg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pg=/\{\$([^}]+)}/g;function mg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ja(i)&&Ja(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ja(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yg(t,e){const n=new vg(t,e);return n.subscribe.bind(n)}class vg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_g(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ai),s.error===void 0&&(s.error=Ai),s.complete===void 0&&(s.complete=Ai);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _g(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ai(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=1e3,Ig=2,Eg=4*60*60*1e3,bg=.5;function Za(t,e=wg,n=Ig){const r=e*Math.pow(n,t),s=Math.round(bg*r*(Math.random()-.5)*2);return Math.min(Eg,r+s)}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===xt?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Cg={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Dg=ie.INFO,Rg={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ng=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=Dg,this._logHandler=Ng,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Og=(t,e)=>e.some(n=>t instanceof n);let ec,tc;function Pg(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,to=new WeakMap,du=new WeakMap,Ci=new WeakMap,Po=new WeakMap;function Lg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),Po.set(e,t),e}function $g(t){if(to.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||du.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xg(t){no=t(no)}function Ug(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Di(this),e,...n);return du.set(r,e.sort?e.sort():[e]),At(r)}:Mg().includes(t)?function(...e){return t.apply(Di(this),e),At(hu.get(this))}:function(...e){return At(t.apply(Di(this),e))}}function Fg(t){return typeof t=="function"?Ug(t):(t instanceof IDBTransaction&&$g(t),Og(t,Pg())?new Proxy(t,no):t)}function At(t){if(t instanceof IDBRequest)return Lg(t);if(Ci.has(t))return Ci.get(t);const e=Fg(t);return e!==t&&(Ci.set(t,e),Po.set(e,t)),e}const Di=t=>Po.get(t);function fu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Vg=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],Ri=new Map;function nc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Bg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ri.set(e,i),i}xg(t=>Ga(Ka({},t),{get:(e,n,r)=>nc(e,n)||t.get(e,n,r),has:(e,n)=>!!nc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ro="@firebase/app",rc="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Gs("@firebase/app"),zg="@firebase/app-compat",Hg="@firebase/analytics-compat",Kg="@firebase/analytics",Gg="@firebase/app-check-compat",Wg="@firebase/app-check",Qg="@firebase/auth",Xg="@firebase/auth-compat",Yg="@firebase/database",Jg="@firebase/database-compat",Zg="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",rp="@firebase/messaging",sp="@firebase/messaging-compat",ip="@firebase/performance",op="@firebase/performance-compat",ap="@firebase/remote-config",cp="@firebase/remote-config-compat",lp="@firebase/storage",up="@firebase/storage-compat",hp="@firebase/firestore",dp="@firebase/firestore-compat",fp="firebase",gp="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="[DEFAULT]",pp={[ro]:"fire-core",[zg]:"fire-core-compat",[Kg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Wg]:"fire-app-check",[Gg]:"fire-app-check-compat",[Qg]:"fire-auth",[Xg]:"fire-auth-compat",[Yg]:"fire-rtdb",[Jg]:"fire-rtdb-compat",[Zg]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[rp]:"fire-fcm",[sp]:"fire-fcm-compat",[ip]:"fire-perf",[op]:"fire-perf-compat",[ap]:"fire-rc",[cp]:"fire-rc-compat",[lp]:"fire-gcs",[up]:"fire-gcs-compat",[hp]:"fire-fst",[dp]:"fire-fst-compat","fire-js":"fire-js",[fp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,so=new Map;function mp(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(so.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,t);for(const n of Is.values())mp(n,t);return!0}function cn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xt=new an("app","Firebase",yp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=gp;function _p(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Xt.create("bad-app-name",{appName:String(r)});const s=Is.get(r);if(s){if(cr(t,s.options)&&cr(n,s.config))return s;throw Xt.create("duplicate-app",{appName:r})}const i=new Ag(r);for(const a of so.values())i.addComponent(a);const o=new vp(t,n,i);return Is.set(r,o),o}function Mo(t=gu){const e=Is.get(t);if(!e)throw Xt.create("no-app",{appName:t});return e}function Ye(t,e,n){var r;let s=(r=pp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}at(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wp="firebase-heartbeat-database",Ip=1,lr="firebase-heartbeat-store";let Ni=null;function pu(){return Ni||(Ni=fu(wp,Ip,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw Xt.create("idb-open",{originalErrorMessage:t.message})})),Ni}async function Ep(t){var e;try{return(await pu()).transaction(lr).objectStore(lr).get(mu(t))}catch(n){if(n instanceof nt)Qt.warn(n.message);else{const r=Xt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qt.warn(r.message)}}}async function sc(t,e){var n;try{const s=(await pu()).transaction(lr,"readwrite");return await s.objectStore(lr).put(e,mu(t)),s.done}catch(r){if(r instanceof nt)Qt.warn(r.message);else{const s=Xt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Qt.warn(s.message)}}}function mu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bp=1024,Tp=30*24*60*60*1e3;class Sp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ap(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ic(),{heartbeatsToSend:n,unsentEntries:r}=kp(this._heartbeatsCache.heartbeats),s=iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ic(){return new Date().toISOString().substring(0,10)}function kp(t,e=bp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?uu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ep(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oc(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){at(new tt("platform-logger",e=>new jg(e),"PRIVATE")),at(new tt("heartbeat",e=>new Sp(e),"PRIVATE")),Ye(ro,rc,t),Ye(ro,rc,"esm2017"),Ye("fire-js","")}Cp("");function Lo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dp=yu,vu=new an("auth","Firebase",yu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Gs("@firebase/auth");function hs(t,...e){ac.logLevel<=ie.ERROR&&ac.error(`Auth (${Cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw $o(t,...e)}function rt(t,...e){return $o(t,...e)}function _u(t,e,n){const r=Object.assign(Object.assign({},Dp()),{[e]:n});return new an("auth","Firebase",r).create(e,{appName:t.name})}function Rp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(t,"argument-error"),_u(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vu.create(t,...e)}function H(t,e,...n){if(!t)throw $o(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hs(e),new Error(e)}function mt(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function dt(t){mt(t instanceof Function,"Expected a class definition");let e=cc.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e){const n=cn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cr(i,e!=null?e:{}))return s;Ze(s,"already-initialized")}return n.initialize({options:e})}function Op(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pp(){return lc()==="http:"||lc()==="https:"}function lc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pp()||Oo()||"connection"in navigator)?navigator.onLine:!0}function Lp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=ou()||au()}get(){return Mp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Dr(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,s={}){return Iu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wu.fetch()(Eu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Iu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$p),e);try{const s=new Up(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw es(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw es(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _u(t,u,l);Ze(t,u)}}catch(s){if(s instanceof nt)throw s;Ze(t,"network-request-failed")}}async function Or(t,e,n,r,s={}){const i=await Nr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Eu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xo(t.config,s):`${t.config.apiScheme}://${s}`}class Up{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),xp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function Vp(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bp(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Uo(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zn(Oi(s.auth_time)),issuedAtTime:Zn(Oi(s.iat)),expirationTime:Zn(Oi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oi(t){return Number(t)*1e3}function Uo(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=cg(r);return i?JSON.parse(i):(hs("Failed to decode base64 JWT payload"),null)}catch(i){return hs("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function jp(t){const e=Uo(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nt&&qp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ur(t,Vp(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gp(i.providerUserInfo):[],a=Kp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hp(t){const e=Fe(t);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gp(t){return t.map(e=>{var{providerId:n}=e,r=Lo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t,e){const n=await Iu(t,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Eu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Wp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bp(this,e)}reload(){return Hp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,Fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:O,isAnonymous:y,providerData:U,stsTokenManager:k}=n;H(b&&k,e,"internal-error");const M=hr.fromJSON(this.name,k);H(typeof b=="string",e,"internal-error"),Et(h,e.name),Et(d,e.name),H(typeof O=="boolean",e,"internal-error"),H(typeof y=="boolean",e,"internal-error"),Et(g,e.name),Et(m,e.name),Et(w,e.name),Et(E,e.name),Et(C,e.name),Et(I,e.name);const j=new Kt({uid:b,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:y,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:M,createdAt:C,lastLoginAt:I});return U&&Array.isArray(U)&&(j.providerData=U.map(P=>Object.assign({},P))),E&&(j._redirectEventId=E),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new hr;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Es(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tu.type="NONE";const uc=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t,e,n){return`firebase:${t}:${e}:${n}`}class In{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ds(this.userKey,s.apiKey,i),this.fullPersistenceKey=ds("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new In(dt(uc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(uc);const o=ds(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Kt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new In(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new In(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Du(e))return"Blackberry";if(Ru(e))return"Webos";if(Fo(e))return"Safari";if((e.includes("chrome/")||ku(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Su(t=Ae()){return/firefox\//i.test(t)}function Fo(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ku(t=Ae()){return/crios\//i.test(t)}function Au(t=Ae()){return/iemobile/i.test(t)}function Cu(t=Ae()){return/android/i.test(t)}function Du(t=Ae()){return/blackberry/i.test(t)}function Ru(t=Ae()){return/webos/i.test(t)}function Ws(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qp(t=Ae()){var e;return Ws(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xp(){return cu()&&document.documentMode===10}function Nu(t=Ae()){return Ws(t)||Cu(t)||Ru(t)||Du(t)||/windows phone/i.test(t)||Au(t)}function Yp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e=[]){let n;switch(t){case"Browser":n=hc(Ae());break;case"Worker":n=`${hc(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
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
 */class Jp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new Jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Es(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pr(t){return Fe(t)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=yg(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function em(t,e){return Nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function rm(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Vo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new dr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new dr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nm(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return em(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="http://localhost";class Yt extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Lo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function om(t){const e=Wn(Qn(t)).link,n=e?Wn(Qn(e)).deep_link_id:null,r=Wn(Qn(t)).deep_link_id;return(r?Wn(Qn(r)).link:null)||r||n||e||t}class Bo{constructor(e){var n,r,s,i,o,a;const c=Wn(Qn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=im((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=om(e);try{return new Bo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bo.parseLink(n);return H(r,"argument-error"),dr._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mr extends jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Mr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Mr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Mr{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e){return Or(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=fc(r);return new Jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fc(r);return new Jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bs(e,n,r,s)}}function Pu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(t,i,e,r):i})}async function cm(t,e,n=!1){const r=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await ur(t,Pu(s,i,e,t),n);H(o.idToken,s,"internal-error");const a=Uo(o.idToken);H(a,s,"internal-error");const{sub:c}=a;return H(t.uid===c,s,"user-mismatch"),Jt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t,e,n=!1){const r="signIn",s=await Pu(t,r,e),i=await Jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function um(t,e){return Mu(Pr(t),e)}async function hm(t,e,n){const r=Pr(t),s=await am(r,{returnSecureToken:!0,email:e,password:n}),i=await Jt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function dm(t,e,n){return um(Fe(t),xn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){return Fe(t).setPersistence(e)}function Lu(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function gm(t){return Fe(t).signOut()}const Ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){const t=Ae();return Fo(t)||Ws(t)}const mm=1e3,ym=10;class xu extends $u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pm()&&Yp(),this.fallbackToPolling=Nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ym):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xu.type="LOCAL";const Uu=xu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends $u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fu.type="SESSION";const Vu=Fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=qo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function wm(t){st().location.href=t}/**
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
 */function Bu(){return typeof st().WorkerGlobalScope!="undefined"&&typeof st().importScripts=="function"}async function Im(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Em(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bm(){return Bu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="firebaseLocalStorageDb",Tm=1,Ss="firebaseLocalStorage",qu="fbase_key";class Lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Sm(){const t=indexedDB.deleteDatabase(ju);return new Lr(t).toPromise()}function oo(){const t=indexedDB.open(ju,Tm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ss,{keyPath:qu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await Sm(),e(await oo()))})})}async function gc(t,e,n){const r=Xs(t,!0).put({[qu]:e,value:n});return new Lr(r).toPromise()}async function km(t,e){const n=Xs(t,!1).get(e),r=await new Lr(n).toPromise();return r===void 0?null:r.value}function pc(t,e){const n=Xs(t,!0).delete(e);return new Lr(n).toPromise()}const Am=800,Cm=3;class zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(bm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Im(),!this.activeServiceWorker)return;this.sender=new _m(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Em()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await gc(e,Ts,"1"),await pc(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>km(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xs(s,!1).getAll();return new Lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zu.type="LOCAL";const Dm=zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Nm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rm().appendChild(r)})}function Om(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Dr(3e4,6e4);/**
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
 */function Hu(t,e){return e?dt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pm(t){return Mu(t.auth,new zo(t),t.bypassAuthState)}function Mm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),lm(n,new zo(t),t.bypassAuthState)}async function Lm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),cm(n,new zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pm;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:Ze(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Dr(2e3,1e4);async function xm(t,e,n){const r=Pr(t);Rp(t,e,jo);const s=Hu(r,n);return new Vt(r,"signInViaPopup",e,s).executeNotNull()}class Vt extends Ku{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$m.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="pendingRedirect",fs=new Map;class Fm extends Ku{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await Vm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vm(t,e){const n=qm(e),r=jm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Bm(t,e){fs.set(t._key(),e)}function jm(t){return dt(t._redirectPersistence)}function qm(t){return ds(Um,t.config.apiKey,t.name)}async function zm(t,e,n=!1){const r=Pr(t),s=Hu(r,e),o=await new Fm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=10*60*1e3;class Km{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xm=/^https?/;async function Ym(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wm(t);for(const n of e)try{if(Jm(n))return}catch{}Ze(t,"unauthorized-domain")}function Jm(t){const e=io(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xm.test(n))return!1;if(Qm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Zm=new Dr(3e4,6e4);function yc(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ey(t){return new Promise((e,n)=>{var r,s,i;function o(){yc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yc(),n(rt(t,"network-request-failed"))},timeout:Zm.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=Om("iframefcb");return st()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},Nm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gs=null,e})}let gs=null;function ty(t){return gs=gs||ey(t),gs}/**
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
 */const ny=new Dr(5e3,15e3),ry="__/auth/iframe",sy="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ay(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xo(e,sy):`https://${t.config.authDomain}/${ry}`,r={apiKey:e.apiKey,appName:t.name,v:Cr},s=oy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ar(r).slice(1)}`}async function cy(t){const e=await ty(t),n=st().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:ay(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},ny.get());function c(){st().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uy=500,hy=600,dy="_blank",fy="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gy(t,e,n,r=uy,s=hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ly),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=ku(l)?dy:n),Su(l)&&(e=e||fy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Qp(l)&&a!=="_self")return py(e||"",a),new vc(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new vc(h)}function py(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const my="__/auth/handler",yy="emulator/auth/handler";function _c(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cr,eventId:s};if(e instanceof jo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Mr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vy(t)}?${Ar(a).slice(1)}`}function vy({config:t}){return t.emulator?xo(t,yy):`https://${t.authDomain}/${my}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="webStorageSupport";class _y{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=zm,this._overrideRedirectResult=Bm}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=_c(e,n,r,io(),s);return gy(e,o,qo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),wm(_c(e,n,r,io(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cy(e),r=new Km(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pi,{type:Pi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pi];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ym(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nu()||Fo()||Ws()}}const wy=_y;var wc="@firebase/auth",Ic="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function by(t){at(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(t)},u=new Zp(a,c,l);return Op(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),at(new tt("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new Iy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(wc,Ic,Ey(t)),Ye(wc,Ic,"esm2017")}/**
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
 */function Ty(t=Mo()){const e=cn(t,"auth");return e.isInitialized()?e.getImmediate():Np(t,{popupRedirectResolver:wy,persistence:[Dm,Uu,Vu]})}by("Browser");const Wu="@firebase/installations",Ho="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=1e4,Xu=`w:${Ho}`,Yu="FIS_v2",Sy="https://firebaseinstallations.googleapis.com/v1",ky=60*60*1e3,Ay="installations",Cy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Zt=new an(Ay,Cy,Dy);function Ju(t){return t instanceof nt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu({projectId:t}){return`${Sy}/projects/${t}/installations`}function eh(t){return{token:t.token,requestStatus:2,expiresIn:Ny(t.expiresIn),creationTime:Date.now()}}async function th(t,e){const r=(await e.json()).error;return Zt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ry(t,{refreshToken:e}){const n=nh(t);return n.append("Authorization",Oy(e)),n}async function rh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ny(t){return Number(t.replace("s","000"))}function Oy(t){return`${Yu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zu(t),s=nh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Yu,appId:t.appId,sdkVersion:Xu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await rh(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:eh(l.authToken)}}else throw await th("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=/^[cdef][\w-]{21}$/,ao="";function $y(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xy(t);return Ly.test(n)?n:ao}catch{return ao}}function xy(t){return My(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Map;function oh(t,e){const n=Ys(t);ah(n,e),Uy(n,e)}function ah(t,e){const n=ih.get(t);if(!!n)for(const r of n)r(e)}function Uy(t,e){const n=Fy();n&&n.postMessage({key:t,fid:e}),Vy()}let Bt=null;function Fy(){return!Bt&&"BroadcastChannel"in self&&(Bt=new BroadcastChannel("[Firebase] FID Change"),Bt.onmessage=t=>{ah(t.data.key,t.data.fid)}),Bt}function Vy(){ih.size===0&&Bt&&(Bt.close(),Bt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="firebase-installations-database",jy=1,en="firebase-installations-store";let Mi=null;function Ko(){return Mi||(Mi=fu(By,jy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(en)}}})),Mi}async function ks(t,e){const n=Ys(t),s=(await Ko()).transaction(en,"readwrite"),i=s.objectStore(en),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&oh(t,e.fid),e}async function ch(t){const e=Ys(t),r=(await Ko()).transaction(en,"readwrite");await r.objectStore(en).delete(e),await r.done}async function Js(t,e){const n=Ys(t),s=(await Ko()).transaction(en,"readwrite"),i=s.objectStore(en),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&oh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){let e;const n=await Js(t.appConfig,r=>{const s=qy(r),i=zy(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ao?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qy(t){const e=t||{fid:$y(),registrationStatus:0};return lh(e)}function zy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Zt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Hy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ky(t)}:{installationEntry:e}}async function Hy(t,e){try{const n=await Py(t,e);return ks(t.appConfig,n)}catch(n){throw Ju(n)&&n.customData.serverCode===409?await ch(t.appConfig):await ks(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ky(t){let e=await Ec(t.appConfig);for(;e.registrationStatus===1;)await sh(100),e=await Ec(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Go(t);return r||n}return e}function Ec(t){return Js(t,e=>{if(!e)throw Zt.create("installation-not-found");return lh(e)})}function lh(t){return Gy(t)?{fid:t.fid,registrationStatus:0}:t}function Gy(t){return t.registrationStatus===1&&t.registrationTime+Qu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy({appConfig:t,heartbeatServiceProvider:e},n){const r=Qy(t,n),s=Ry(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await rh(()=>fetch(r,a));if(c.ok){const l=await c.json();return eh(l)}else throw await th("Generate Auth Token",c)}function Qy(t,{fid:e}){return`${Zu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e=!1){let n;const r=await Js(t.appConfig,i=>{if(!uh(i))throw Zt.create("not-registered");const o=i.authToken;if(!e&&Jy(o))return i;if(o.requestStatus===1)return n=Xy(t,e),i;{if(!navigator.onLine)throw Zt.create("app-offline");const a=ev(i);return n=Yy(t,a),a}});return n?await n:r.authToken}async function Xy(t,e){let n=await bc(t.appConfig);for(;n.authToken.requestStatus===1;)await sh(100),n=await bc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Wo(t,e):r}function bc(t){return Js(t,e=>{if(!uh(e))throw Zt.create("not-registered");const n=e.authToken;return tv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Yy(t,e){try{const n=await Wy(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ks(t.appConfig,r),n}catch(n){if(Ju(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ch(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ks(t.appConfig,r)}throw n}}function uh(t){return t!==void 0&&t.registrationStatus===2}function Jy(t){return t.requestStatus===2&&!Zy(t)}function Zy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ky}function ev(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tv(t){return t.requestStatus===1&&t.requestTime+Qu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t){const e=t,{installationEntry:n,registrationPromise:r}=await Go(e);return r?r.catch(console.error):Wo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(t,e=!1){const n=t;return await sv(n),(await Wo(n,e)).token}async function sv(t){const{registrationPromise:e}=await Go(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){if(!t||!t.options)throw Li("App Configuration");if(!t.name)throw Li("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Li(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Li(t){return Zt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="installations",ov="installations-internal",av=t=>{const e=t.getProvider("app").getImmediate(),n=iv(e),r=cn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cv=t=>{const e=t.getProvider("app").getImmediate(),n=cn(e,hh).getImmediate();return{getId:()=>nv(n),getToken:s=>rv(n,s)}};function lv(){at(new tt(hh,av,"PUBLIC")),at(new tt(ov,cv,"PRIVATE"))}lv();Ye(Wu,Ho);Ye(Wu,Ho,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="analytics",uv="firebase_id",hv="origin",dv=60*1e3,fv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Gs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gv(t,e){const n=document.createElement("script");n.src=`${dh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function pv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function mv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await fh(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){He.error(a)}t("config",s,i)}async function yv(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await fh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){He.error(i)}}function vv(t,e,n,r){async function s(i,o,a){try{i==="event"?await yv(t,e,n,o,a):i==="config"?await mv(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){He.error(c)}}return s}function _v(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=vv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function wv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(dh))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Je=new an("analytics","Analytics",Iv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=30,bv=1e3;class Tv{constructor(e={},n=bv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gh=new Tv;function Sv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Sv(r)},i=fv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Av(t,e=gh,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Rv;return setTimeout(async()=>{a.abort()},n!==void 0?n:dv),ph({appId:r,apiKey:s,measurementId:i},o,a,e)}async function ph(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=gh){var i,o;const{appId:a,measurementId:c}=t;try{await Cv(r,e)}catch(l){if(c)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await kv(t);return s.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Dv(u)){if(s.deleteThrottleMetadata(a),c)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Za(n,s.intervalMillis,Ev):Za(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,d),He.debug(`Calling attemptFetch again in ${h} millis`),ph(t,d,r,s)}}function Cv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Dv(t){if(!(t instanceof nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Nv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(){var t;if(lu())try{await uu()}catch(e){return He.warn(Je.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return He.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pv(t,e,n,r,s,i,o){var a;const c=Av(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>He.error(g)),e.push(c);const l=Ov().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);wv()||gv(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[hv]="firebase",d.update=!0,h!=null&&(d[uv]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.app=e}_delete(){return delete er[this.app.options.appId],Promise.resolve()}}let er={},Tc=[];const Sc={};let $i="dataLayer",Lv="gtag",kc,mh,Ac=!1;function $v(){const t=[];if(Oo()&&t.push("This is a browser extension environment."),dg()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function xv(t,e,n){$v();const r=t.options.appId;if(!r)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(er[r]!=null)throw Je.create("already-exists",{id:r});if(!Ac){pv($i);const{wrappedGtag:i,gtagCore:o}=_v(er,Tc,Sc,$i,Lv);mh=i,kc=o,Ac=!0}return er[r]=Pv(t,Tc,Sc,e,kc,$i,n),new Mv(t)}function Uv(t=Mo()){t=Fe(t);const e=cn(t,As);return e.isInitialized()?e.getImmediate():Fv(t)}function Fv(t,e={}){const n=cn(t,As);if(n.isInitialized()){const s=n.getImmediate();if(cr(e,n.getOptions()))return s;throw Je.create("already-initialized")}return n.initialize({options:e})}function Vv(t,e,n,r){t=Fe(t),Nv(mh,er[t.app.options.appId],e,n,r).catch(s=>He.error(s))}const Cc="@firebase/analytics",Dc="0.8.0";function Bv(){at(new tt(As,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xv(r,s,n)},"PUBLIC")),at(new tt("analytics-internal",t,"PRIVATE")),Ye(Cc,Dc),Ye(Cc,Dc,"esm2017");function t(e){try{const n=e.getProvider(As).getImmediate();return{logEvent:(r,s,i)=>Vv(n,r,s,i)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}Bv();var jv="firebase",qv="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(jv,qv,"app");var zv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N,Qo=Qo||{},K=zv||self;function Cs(){}function co(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $r(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Hv(t){return Object.prototype.hasOwnProperty.call(t,xi)&&t[xi]||(t[xi]=++Kv)}var xi="closure_uid_"+(1e9*Math.random()>>>0),Kv=0;function Gv(t,e,n){return t.call.apply(t.bind,arguments)}function Wv(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=Gv:Pe=Wv,Pe.apply(null,arguments)}function ts(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Lt(){this.s=this.s,this.o=this.o}var Qv=0;Lt.prototype.s=!1;Lt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Qv!=0)&&Hv(this)};Lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},vh=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Xv(t){e:{var e=B_;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rc(t){return Array.prototype.concat.apply([],arguments)}function Xo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ds(t){return/^[\s\xa0]*$/.test(t)}var Nc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function Ui(t,e){return t<e?-1:t>e?1:0}var Be;e:{var Oc=K.navigator;if(Oc){var Pc=Oc.userAgent;if(Pc){Be=Pc;break e}}Be=""}function Yo(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _h(t){const e={};for(const n in t)e[n]=t[n];return e}var Mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wh(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Mc.length;i++)n=Mc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Jo(t){return Jo[" "](t),t}Jo[" "]=Cs;function Yv(t){var e=e_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Jv=Ve(Be,"Opera"),Cn=Ve(Be,"Trident")||Ve(Be,"MSIE"),Ih=Ve(Be,"Edge"),lo=Ih||Cn,Eh=Ve(Be,"Gecko")&&!(Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge"))&&!(Ve(Be,"Trident")||Ve(Be,"MSIE"))&&!Ve(Be,"Edge"),Zv=Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge");function bh(){var t=K.document;return t?t.documentMode:void 0}var Rs;e:{var Fi="",Vi=function(){var t=Be;if(Eh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ih)return/Edge\/([\d\.]+)/.exec(t);if(Cn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Zv)return/WebKit\/(\S+)/.exec(t);if(Jv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vi&&(Fi=Vi?Vi[1]:""),Cn){var Bi=bh();if(Bi!=null&&Bi>parseFloat(Fi)){Rs=String(Bi);break e}}Rs=Fi}var e_={};function t_(){return Yv(function(){let t=0;const e=Nc(String(Rs)).split("."),n=Nc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ui(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ui(s[2].length==0,i[2].length==0)||Ui(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var uo;if(K.document&&Cn){var Lc=bh();uo=Lc||parseInt(Rs,10)||void 0}else uo=void 0;var n_=uo,r_=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Cs,e),K.removeEventListener("test",Cs,e)}catch{}return t}();function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};function fr(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Eh){e:{try{Jo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:s_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fr.Z.h.call(this)}}$e(fr,Ue);var s_={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xr="closure_listenable_"+(1e6*Math.random()|0),i_=0;function o_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++i_,this.ca=this.fa=!1}function Zs(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ei(t){this.src=t,this.g={},this.h=0}ei.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=fo(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new o_(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function ho(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=yh(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Zs(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fo(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Zo="closure_lm_"+(1e6*Math.random()|0),ji={};function Th(t,e,n,r,s){if(r&&r.once)return kh(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Th(t,e[i],n,r,s);return null}return n=na(n),t&&t[xr]?t.N(e,n,$r(r)?!!r.capture:!!r,s):Sh(t,e,n,!1,r,s)}function Sh(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=$r(s)?!!s.capture:!!s,a=ta(t);if(a||(t[Zo]=a=new ei(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=a_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)r_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ch(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function a_(){function t(n){return e.call(t.src,t.listener,n)}var e=c_;return t}function kh(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)kh(t,e[i],n,r,s);return null}return n=na(n),t&&t[xr]?t.O(e,n,$r(r)?!!r.capture:!!r,s):Sh(t,e,n,!0,r,s)}function Ah(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ah(t,e[i],n,r,s);else r=$r(r)?!!r.capture:!!r,n=na(n),t&&t[xr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=fo(i,n,r,s),-1<n&&(Zs(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ta(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fo(e,n,r,s)),(n=-1<t?e[t]:null)&&ea(n))}function ea(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xr])ho(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ch(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ta(e))?(ho(n,t),n.h==0&&(n.src=null,e[Zo]=null)):Zs(t)}}}function Ch(t){return t in ji?ji[t]:ji[t]="on"+t}function c_(t,e){if(t.ca)t=!0;else{e=new fr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ea(t),t=n.call(r,e)}return t}function ta(t){return t=t[Zo],t instanceof ei?t:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(t){return typeof t=="function"?t:(t[qi]||(t[qi]=function(e){return t.handleEvent(e)}),t[qi])}function Ce(){Lt.call(this),this.i=new ei(this),this.P=this,this.I=null}$e(Ce,Lt);Ce.prototype[xr]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){Ah(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var s=e;e=new Ue(r,t),wh(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ns(o,r,!0,e)&&s}if(o=e.g=t,s=ns(o,r,!0,e)&&s,s=ns(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ns(o,r,!1,e)&&s}Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zs(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ns(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ho(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ra=K.JSON.stringify;function l_(){var t=Rh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class u_{constructor(){this.h=this.g=null}add(e,n){const r=Dh.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Dh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new h_,t=>t.reset());class h_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function d_(t){K.setTimeout(()=>{throw t},0)}function sa(t,e){go||f_(),po||(go(),po=!0),Rh.add(t,e)}var go;function f_(){var t=K.Promise.resolve(void 0);go=function(){t.then(g_)}}var po=!1,Rh=new u_;function g_(){for(var t;t=l_();){try{t.h.call(t.g)}catch(n){d_(n)}var e=Dh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}po=!1}function ti(t,e){Ce.call(this),this.h=t||1,this.g=e||K,this.j=Pe(this.kb,this),this.l=Date.now()}$e(ti,Ce);N=ti.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(ia(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ia(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){ti.Z.M.call(this),ia(this),delete this.g};function oa(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Nh(t){t.g=oa(()=>{t.g=null,t.i&&(t.i=!1,Nh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class p_ extends Lt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nh(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){Lt.call(this),this.h=t,this.g={}}$e(gr,Lt);var $c=[];function Oh(t,e,n,r){Array.isArray(n)||(n&&($c[0]=n.toString()),n=$c);for(var s=0;s<n.length;s++){var i=Th(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ph(t){Yo(t.g,function(e,n){this.g.hasOwnProperty(n)&&ea(e)},t),t.g={}}gr.prototype.M=function(){gr.Z.M.call(this),Ph(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ni(){this.g=!0}ni.prototype.Aa=function(){this.g=!1};function m_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function y_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+__(t,n)+(r?" "+r:"")})}function v_(t,e){t.info(function(){return"TIMEOUT: "+e})}ni.prototype.info=function(){};function __(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ra(n)}catch{return e}}var ln={},xc=null;function ri(){return xc=xc||new Ce}ln.Ma="serverreachability";function Mh(t){Ue.call(this,ln.Ma,t)}$e(Mh,Ue);function pr(t){const e=ri();Me(e,new Mh(e,t))}ln.STAT_EVENT="statevent";function Lh(t,e){Ue.call(this,ln.STAT_EVENT,t),this.stat=e}$e(Lh,Ue);function je(t){const e=ri();Me(e,new Lh(e,t))}ln.Na="timingevent";function $h(t,e){Ue.call(this,ln.Na,t),this.size=e}$e($h,Ue);function Ur(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var si={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},xh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function aa(){}aa.prototype.h=null;function Uc(t){return t.h||(t.h=t.i())}function Uh(){}var Fr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ca(){Ue.call(this,"d")}$e(ca,Ue);function la(){Ue.call(this,"c")}$e(la,Ue);var mo;function ii(){}$e(ii,aa);ii.prototype.g=function(){return new XMLHttpRequest};ii.prototype.i=function(){return{}};mo=new ii;function Vr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new gr(this),this.P=w_,t=lo?125:void 0,this.W=new ti(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Fh}function Fh(){this.i=null,this.g="",this.h=!1}var w_=45e3,yo={},Ns={};N=Vr.prototype;N.setTimeout=function(t){this.P=t};function vo(t,e,n){t.K=1,t.v=ai(yt(e)),t.s=n,t.U=!0,Vh(t,null)}function Vh(t,e){t.F=Date.now(),Br(t),t.A=yt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Gh(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Fh,t.g=fd(t.l,n?e:null,!t.s),0<t.O&&(t.L=new p_(Pe(t.Ia,t,t.g),t.O)),Oh(t.V,t.g,"readystatechange",t.gb),e=t.H?_h(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),pr(1),m_(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&ft(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const u=ft(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||lo||this.g&&(this.h.h||this.g.ga()||jc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?pr(3):pr(2)),oi(this);var n=this.g.ba();this.N=n;t:if(Bh(this)){var r=jc(this.g);t="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jt(this),tr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,y_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ds(a)){var l=a;break t}}l=null}if(n=l)vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_o(this,n);else{this.i=!1,this.o=3,je(12),jt(this),tr(this);break e}}this.U?(jh(this,u,o),lo&&this.i&&u==3&&(Oh(this.V,this.W,"tick",this.fb),this.W.start())):(vn(this.j,this.m,o,null),_o(this,o)),u==4&&jt(this),this.i&&!this.I&&(u==4?ld(this.l,this):(this.i=!1,Br(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),jt(this),tr(this)}}}catch{}finally{}};function Bh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function jh(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=I_(t,n),s==Ns){e==4&&(t.o=4,je(14),r=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yo){t.o=4,je(15),vn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vn(t.j,t.m,s,null),_o(t,s);Bh(t)&&s!=Ns&&s!=yo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),va(e),e.L=!0,je(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),jt(t),tr(t))}N.fb=function(){if(this.g){var t=ft(this.g),e=this.g.ga();this.C<e.length&&(oi(this),jh(this,t,e),this.i&&t!=4&&Br(this))}};function I_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ns:(n=Number(e.substring(n,r)),isNaN(n)?yo:(r+=1,r+n>e.length?Ns:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.I=!0,jt(this)};function Br(t){t.Y=Date.now()+t.P,qh(t,t.P)}function qh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ur(Pe(t.eb,t),e)}function oi(t){t.B&&(K.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(v_(this.j,this.A),this.K!=2&&(pr(3),je(17)),jt(this),this.o=2,tr(this)):qh(this,this.Y-t)};function tr(t){t.l.G==0||t.I||ld(t.l,t)}function jt(t){oi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ia(t.W),Ph(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _o(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wo(n.i,t))){if(n.I=t.N,!t.J&&wo(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ls(n),ui(n);else break e;ya(n),je(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ur(Pe(n.ab,n),6e3));if(1>=Xh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else qt(n,11)}else if((t.J||n.g==t)&&Ls(n),!Ds(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Ve(m,"spdy")||Ve(m,"quic")||Ve(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(da(i,i.h),i.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,ge(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=dd(r,r.H?r.la:null,r.W),o.J){Yh(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(oi(a),Br(a)),r.g=o}else ad(r);0<n.l.length&&hi(n)}else l[0]!="stop"&&l[0]!="close"||qt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qt(n,7):ma(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}pr(4)}catch{}}function E_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(co(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ua(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(co(t)||typeof t=="string")vh(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(co(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=E_(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Un(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Un)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}N=Un.prototype;N.R=function(){ha(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return ha(this),this.g.concat()};function ha(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];tn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],tn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}N.get=function(t,e){return tn(this.h,t)?this.h[t]:e};N.set=function(t,e){tn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var zh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function b_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function nn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof nn){this.g=e!==void 0?e:t.g,Os(this,t.j),this.s=t.s,Ps(this,t.i),Ms(this,t.m),this.l=t.l,e=t.h;var n=new mr;n.i=e.i,e.g&&(n.g=new Un(e.g),n.h=e.h),Fc(this,n),this.o=t.o}else t&&(n=String(t).match(zh))?(this.g=!!e,Os(this,n[1]||"",!0),this.s=nr(n[2]||""),Ps(this,n[3]||"",!0),Ms(this,n[4]),this.l=nr(n[5]||"",!0),Fc(this,n[6]||"",!0),this.o=nr(n[7]||"")):(this.g=!!e,this.h=new mr(null,this.g))}nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,Vc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,Vc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?C_:A_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,R_)),t.join("")};function yt(t){return new nn(t)}function Os(t,e,n){t.j=n?nr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ps(t,e,n){t.i=n?nr(e,!0):e}function Ms(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fc(t,e,n){e instanceof mr?(t.h=e,N_(t.h,t.g)):(n||(e=Xn(e,D_)),t.h=new mr(e,t.g))}function ge(t,e,n){t.h.set(e,n)}function ai(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function T_(t){return t instanceof nn?yt(t):new nn(t,void 0)}function S_(t,e,n,r){var s=new nn(null,void 0);return t&&Os(s,t),e&&Ps(s,e),n&&Ms(s,n),r&&(s.l=r),s}function nr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vc=/[#\/\?@]/g,A_=/[#\?:]/g,C_=/[#\?]/g,D_=/[#\?@]/g,R_=/#/g;function mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $t(t){t.g||(t.g=new Un,t.h=0,t.i&&b_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=mr.prototype;N.add=function(t,e){$t(this),this.i=null,t=Fn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hh(t,e){$t(t),e=Fn(t,e),tn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,tn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ha(t)))}function Kh(t,e){return $t(t),e=Fn(t,e),tn(t.g.h,e)}N.forEach=function(t,e){$t(this),this.g.forEach(function(n,r){vh(n,function(s){t.call(e,s,r,this)},this)},this)};N.T=function(){$t(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};N.R=function(t){$t(this);var e=[];if(typeof t=="string")Kh(this,t)&&(e=Rc(e,this.g.get(Fn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rc(e,t[n])}return e};N.set=function(t,e){return $t(this),this.i=null,t=Fn(this,t),Kh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Gh(t,e,n){Hh(t,e),0<n.length&&(t.i=null,t.g.set(Fn(t,e),Xo(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Fn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function N_(t,e){e&&!t.j&&($t(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Hh(this,r),Gh(this,s,n))},t)),t.j=e}var O_=class{constructor(t,e){this.h=t,this.g=e}};function Wh(t){this.l=t||P_,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P_=10;function Qh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xh(t){return t.h?1:t.g?t.g.size:0}function wo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function da(t,e){t.g?t.g.add(e):t.h=e}function Yh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Wh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xo(t.i)}function fa(){}fa.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};fa.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function M_(){this.g=new fa}function L_(t,e,n){const r=n||"";try{ua(t,function(s,i){let o=s;$r(s)&&(o=ra(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $_(t,e){const n=new ni;if(K.Image){const r=new Image;r.onload=ts(rs,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ts(rs,n,r,"TestLoadImage: error",!1,e),r.onabort=ts(rs,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ts(rs,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rs(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function jr(t){this.l=t.$b||null,this.j=t.ib||!1}$e(jr,aa);jr.prototype.g=function(){return new ci(this.l,this.j)};jr.prototype.i=function(t){return function(){return t}}({});function ci(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ga,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(ci,Ce);var ga=0;N=ci.prototype;N.open=function(t,e){if(this.readyState!=ga)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=ga};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Zh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qr(this):yr(this),this.readyState==3&&Zh(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,qr(this))};N.Ta=function(t){this.g&&(this.response=t,qr(this))};N.ha=function(){this.g&&qr(this)};function qr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var x_=K.JSON.parse;function _e(t){Ce.call(this),this.headers=new Un,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ed,this.K=this.L=!1}$e(_e,Ce);var ed="",U_=/^https?$/i,F_=["POST","PUT"];N=_e.prototype;N.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mo.g(),this.C=this.u?Uc(this.u):Uc(mo),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bc(this,i);return}t=n||"";const s=new Un(this.headers);r&&ua(r,function(i,o){s.set(o,i)}),r=Xv(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=yh(F_,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rd(this),0<this.B&&((this.K=V_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=oa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bc(this,i)}};function V_(t){return Cn&&t_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function B_(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof Qo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Bc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,td(t),li(t)}function td(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),li(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),li(this,!0)),_e.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?nd(this):this.cb())};N.cb=function(){nd(this)};function nd(t){if(t.h&&typeof Qo!="undefined"&&(!t.C[1]||ft(t)!=4||t.ba()!=2)){if(t.v&&ft(t)==4)oa(t.Fa,0,t);else if(Me(t,"readystatechange"),ft(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(zh)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!U_.test(s?s.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",td(t)}}finally{li(t)}}}}function li(t,e){if(t.g){rd(t);const n=t.g,r=t.C[0]?Cs:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function rd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function ft(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),x_(e)}};function jc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ed:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function j_(t){let e="";return Yo(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pa(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=j_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sd(t){this.za=0,this.l=[],this.h=new ni,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hn("baseRetryDelayMs",5e3,t),this.$a=Hn("retryDelaySeedMs",1e4,t),this.Ya=Hn("forwardChannelMaxRetries",2,t),this.ra=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Wh(t&&t.concurrentRequestLimit),this.Ca=new M_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=sd.prototype;N.ma=8;N.G=1;function ma(t){if(id(t),t.G==3){var e=t.V++,n=yt(t.F);ge(n,"SID",t.J),ge(n,"RID",e),ge(n,"TYPE","terminate"),zr(t,n),e=new Vr(t,t.h,e,void 0),e.K=2,e.v=ai(yt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=fd(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Br(e)}hd(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ui(t){t.g&&(va(t),t.g.cancel(),t.g=null)}function id(t){ui(t),t.u&&(K.clearTimeout(t.u),t.u=null),Ls(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function zi(t,e){t.l.push(new O_(t.Za++,e)),t.G==3&&hi(t)}function hi(t){Qh(t.i)||t.m||(t.m=!0,sa(t.Ha,t),t.C=0)}function q_(t,e){return Xh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ur(Pe(t.Ha,t,e),ud(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Vr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=_h(i),wh(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=od(this,s,e),n=yt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),zr(this,n),this.o&&i&&pa(n,this.o,i),da(this.i,s),this.Ra&&ge(n,"TYPE","init"),this.ja?(ge(n,"$req",e),ge(n,"SID","null"),s.$=!0,vo(s,n,null)):vo(s,n,e),this.G=2}}else this.G==3&&(t?qc(this,t):this.l.length==0||Qh(this.i)||qc(this))};function qc(t,e){var n;e?n=e.m:n=t.V++;const r=yt(t.F);ge(r,"SID",t.J),ge(r,"RID",n),ge(r,"AID",t.U),zr(t,r),t.o&&t.s&&pa(r,t.o,t.s),n=new Vr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=od(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),da(t.i,n),vo(n,r,e)}function zr(t,e){t.j&&ua({},function(n,r){ge(e,r,n)})}function od(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{L_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ad(t){t.g||t.u||(t.Y=1,sa(t.Ga,t),t.A=0)}function ya(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ur(Pe(t.Ga,t),ud(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,cd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ur(Pe(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,je(10),ui(this),cd(this))};function va(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function cd(t){t.g=new Vr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=yt(t.oa);ge(e,"RID","rpc"),ge(e,"SID",t.J),ge(e,"CI",t.N?"0":"1"),ge(e,"AID",t.U),zr(t,e),ge(e,"TYPE","xmlhttp"),t.o&&t.s&&pa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ai(yt(e)),n.s=null,n.U=!0,Vh(n,t)}N.ab=function(){this.v!=null&&(this.v=null,ui(this),ya(this),je(19))};function Ls(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function ld(t,e){var n=null;if(t.g==e){Ls(t),va(t),t.g=null;var r=2}else if(wo(t.i,e))n=e.D,Yh(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ri(),Me(r,new $h(r,n,e,s)),hi(t)}else ad(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&q_(t,e)||r==2&&ya(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:qt(t,5);break;case 4:qt(t,10);break;case 3:qt(t,6);break;default:qt(t,2)}}}function ud(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function qt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new nn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Os(n,"https"),ai(n)),$_(n.toString(),r)}else je(2);t.G=0,t.j&&t.j.va(e),hd(t),id(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),je(2)):(this.h.info("Failed to ping google.com"),je(1))};function hd(t){t.G=0,t.I=-1,t.j&&((Jh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Xo(t.l),t.l.length=0),t.j.ua())}function dd(t,e,n){let r=T_(n);if(r.i!="")e&&Ps(r,e+"."+r.i),Ms(r,r.m);else{const s=K.location;r=S_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Yo(t.aa,function(s,i){ge(r,i,s)}),e=t.D,n=t.sa,e&&n&&ge(r,e,n),ge(r,"VER",t.ma),zr(t,r),r}function fd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new jr({ib:!0})):new _e(t.qa),e.L=t.H,e}function gd(){}N=gd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function $s(){if(Cn&&!(10<=Number(n_)))throw Error("Environmental error: no available transport.")}$s.prototype.g=function(t,e){return new Ge(t,e)};function Ge(t,e){Ce.call(this),this.g=new sd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ds(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ds(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vn(this)}$e(Ge,Ce);Ge.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),sa(Pe(t.hb,t,e))),je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=dd(t,null,t.W),hi(t)};Ge.prototype.close=function(){ma(this.g)};Ge.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,zi(this.g,e)}else this.v?(e={},e.__data__=ra(t),zi(this.g,e)):zi(this.g,t)};Ge.prototype.M=function(){this.g.j=null,delete this.j,ma(this.g),delete this.g,Ge.Z.M.call(this)};function pd(t){ca.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(pd,ca);function md(){la.call(this),this.status=1}$e(md,la);function Vn(t){this.g=t}$e(Vn,gd);Vn.prototype.xa=function(){Me(this.g,"a")};Vn.prototype.wa=function(t){Me(this.g,new pd(t))};Vn.prototype.va=function(t){Me(this.g,new md(t))};Vn.prototype.ua=function(){Me(this.g,"b")};$s.prototype.createWebChannel=$s.prototype.g;Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;si.NO_ERROR=0;si.TIMEOUT=8;si.HTTP_ERROR=6;xh.COMPLETE="complete";Uh.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var z_=function(){return new $s},H_=function(){return ri()},Hi=si,K_=xh,G_=ln,zc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},W_=jr,ss=Uh,Q_=_e;const Hc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Gs("@firebase/firestore");function Kc(){return rn.logLevel}function F(t,...e){if(rn.logLevel<=ie.DEBUG){const n=e.map(_a);rn.debug(`Firestore (${Bn}): ${t}`,...n)}}function vt(t,...e){if(rn.logLevel<=ie.ERROR){const n=e.map(_a);rn.error(`Firestore (${Bn}): ${t}`,...n)}}function Gc(t,...e){if(rn.logLevel<=ie.WARN){const n=e.map(_a);rn.warn(`Firestore (${Bn}): ${t}`,...n)}}function _a(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function de(t,e){t||W()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class J_{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new X_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new qe(e)}}class Z_{constructor(e,n,r){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class ew{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Z_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.p=n.token,new tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Dn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new we(0,0))}static max(){return new J(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends vr{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const sw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends vr{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return sw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(pe.fromString(e))}static fromName(e){return new B(pe.fromString(e).popFirst(5))}static empty(){return new B(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new pe(e.slice()))}}function iw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Dt(s,B.empty(),e)}function ow(t){return new Dt(t.readTime,t.key,-1)}class Dt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dt(J.min(),B.empty(),-1)}static max(){return new Dt(J.max(),B.empty(),-1)}}function aw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==cw)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new T((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new T((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Kr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wa.ot=-1;class Ee{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:De.RED,this.left=s!=null?s:De.EMPTY,this.right=i!=null?i:De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new De(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ie(this.comparator);return n.data=e,n}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new it([])}unionWith(e){let n=new Ie(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new it(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Le(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(t){if(de(!!t),typeof t=="string"){let e=0;const n=uw.exec(t);if(de(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rn(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wd(t){const e=t.mapValue.fields.__previous_value__;return _d(e)?wd(e):e}function _r(t){const e=Rt(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Nn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return t==null}function xs(t){return t===0&&1/t==-1/0}function dw(t){return typeof t=="number"&&Number.isInteger(t)&&!xs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_d(t)?4:fw(t)?9007199254740991:10:W()}function ct(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Rt(r.timestampValue),o=Rt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Rn(r.bytesValue).isEqual(Rn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ve(r.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ve(r.integerValue)===ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ve(r.doubleValue),o=ve(s.doubleValue);return i===o?xs(i)===xs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Dn(t.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wc(i)!==Wc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ct(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function wr(t,e){return(t.values||[]).find(n=>ct(n,e))!==void 0}function On(t,e){if(t===e)return 0;const n=sn(t),r=sn(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ve(s.integerValue||s.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xc(t.timestampValue,e.timestampValue);case 4:return Xc(_r(t),_r(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Rn(s),a=Rn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(ve(s.latitude),ve(i.latitude));return o!==0?o:ce(ve(s.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=On(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===os.mapValue&&i===os.mapValue)return 0;if(s===os.mapValue)return 1;if(i===os.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const d=On(o[a[u]],c[l[u]]);if(d!==0)return d}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Xc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Rt(t),r=Rt(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function bn(t){return Io(t)}function Io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Rt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Io(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Io(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Eo(t){return!!t&&"integerValue"in t}function Ia(t){return!!t&&"arrayValue"in t}function Yc(t){return!!t&&"nullValue"in t}function Jc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ps(t){return!!t&&"mapValue"in t}function rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=rr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ps(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(n)}setAll(e){let n=xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=rr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ps(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qe(rr(this.value))}}function Id(t){const e=[];return jn(t.fields,(n,r)=>{const s=new xe([n]);if(ps(r)){const i=Id(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Re(e,0,J.min(),J.min(),Qe.empty(),0)}static newFoundDocument(e,n,r){return new Re(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new Re(e,2,n,J.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,J.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Zc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gw(t,e,n,r,s,i,o)}function Ea(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+bn(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bn(r)).join(",")),e.ut=n}return e.ut}function pw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${bn(r.value)}`;var r}).join(", ")}]`),di(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bn(n)).join(",")),`Target(${e})`}function ba(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!bw(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ct(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tl(t.startAt,e.startAt)&&tl(t.endAt,e.endAt)}function bo(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ze extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new mw(e,n,r):n==="array-contains"?new _w(e,r):n==="in"?new ww(e,r):n==="not-in"?new Iw(e,r):n==="array-contains-any"?new Ew(e,r):new ze(e,n,r)}static ct(e,n,r){return n==="in"?new yw(e,r):new vw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(On(n,this.value)):n!==null&&sn(this.value)===sn(n)&&this.at(On(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mw extends ze{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class yw extends ze{constructor(e,n){super(e,"in",n),this.keys=Ed("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vw extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Ed("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ed(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class _w extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ia(n)&&wr(n.arrayValue,this.value)}}class ww extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wr(this.value.arrayValue,n)}}class Iw extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wr(this.value.arrayValue,n)}}class Ew extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ia(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wr(this.value.arrayValue,r))}}class Us{constructor(e,n){this.position=e,this.inclusive=n}}class sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function bw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function el(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=On(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ct(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Tw(t,e,n,r,s,i,o,a){return new fi(t,e,n,r,s,i,o,a)}function Ta(t){return new fi(t)}function nl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Aw(t){return t.collectionGroup!==null}function Ir(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=kw(e),r=Sw(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new sr(n)),e.lt.push(new sr(xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new sr(xe.keyField(),i))}}}return e.lt}function _t(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=Zc(e.path,e.collectionGroup,Ir(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ir(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sr(i.field,o))}const r=e.endAt?new Us(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Us(e.startAt.position,e.startAt.inclusive):null;e.ft=Zc(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function To(t,e,n){return new fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gi(t,e){return ba(_t(t),_t(e))&&t.limitType===e.limitType}function bd(t){return`${Ea(_t(t))}|lt:${t.limitType}`}function So(t){return`Query(target=${pw(_t(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):B.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=el(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ir(n),r)||n.endAt&&!function(s,i,o){const a=el(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ir(n),r))}(t,e)}function Cw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Td(t){return(e,n)=>{let r=!1;for(const s of Ir(t)){const i=Dw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Dw(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?On(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function kd(t){return{integerValue:""+t}}function Rw(t,e){return dw(e)?kd(e):Sd(t,e)}/**
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
 */class pi{constructor(){this._=void 0}}function Nw(t,e,n){return t instanceof Fs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Er?Cd(t,e):t instanceof br?Dd(t,e):function(r,s){const i=Ad(r,s),o=rl(i)+rl(r._t);return Eo(i)&&Eo(r._t)?kd(o):Sd(r.wt,o)}(t,e)}function Ow(t,e,n){return t instanceof Er?Cd(t,e):t instanceof br?Dd(t,e):n}function Ad(t,e){return t instanceof Vs?Eo(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fs extends pi{}class Er extends pi{constructor(e){super(),this.elements=e}}function Cd(t,e){const n=Rd(e);for(const r of t.elements)n.some(s=>ct(s,r))||n.push(r);return{arrayValue:{values:n}}}class br extends pi{constructor(e){super(),this.elements=e}}function Dd(t,e){let n=Rd(e);for(const r of t.elements)n=n.filter(s=>!ct(s,r));return{arrayValue:{values:n}}}class Vs extends pi{constructor(e,n){super(),this.wt=e,this._t=n}}function rl(t){return ve(t.integerValue||t.doubleValue)}function Rd(t){return Ia(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Pw(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Er&&r instanceof Er||n instanceof br&&r instanceof br?Dn(n.elements,r.elements,ct):n instanceof Vs&&r instanceof Vs?ct(n._t,r._t):n instanceof Fs&&r instanceof Fs}(t.transform,e.transform)}class Mw{constructor(e,n){this.version=e,this.transformResults=n}}class ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mi{}function Nd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ka(t.key,ot.none()):new Gr(t.key,t.data,ot.none());{const n=t.data,r=Qe.empty();let s=new Ie(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new un(t.key,r,new it(s.toArray()),ot.none())}}function Lw(t,e,n){t instanceof Gr?function(r,s,i){const o=r.value.clone(),a=il(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof un?function(r,s,i){if(!ms(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=il(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Od(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ir(t,e,n,r){return t instanceof Gr?function(s,i,o,a){if(!ms(s.precondition,i))return o;const c=s.value.clone(),l=ol(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof un?function(s,i,o,a){if(!ms(s.precondition,i))return o;const c=ol(s.fieldTransforms,a,i),l=i.data;return l.setAll(Od(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return ms(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function $w(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ad(r.transform,s||null);i!=null&&(n===null&&(n=Qe.empty()),n.set(r.field,i))}return n||null}function sl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Dn(n,r,(s,i)=>Pw(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gr extends mi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends mi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Od(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function il(t,e,n){const r=new Map;de(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ow(o,a,n[s]))}return r}function ol(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Nw(i,o,e))}return r}class ka extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xw extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ee;function Fw(t){switch(t){default:return W();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Pd(t){if(t===void 0)return vt("GRPC error has no .code"),S.UNKNOWN;switch(t){case ye.OK:return S.OK;case ye.CANCELLED:return S.CANCELLED;case ye.UNKNOWN:return S.UNKNOWN;case ye.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ye.INTERNAL:return S.INTERNAL;case ye.UNAVAILABLE:return S.UNAVAILABLE;case ye.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ye.NOT_FOUND:return S.NOT_FOUND;case ye.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ye.ABORTED:return S.ABORTED;case ye.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ye.DATA_LOSS:return S.DATA_LOSS;default:return W()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new Ee(B.comparator);function wt(){return Vw}const Md=new Ee(B.comparator);function Yn(...t){let e=Md;for(const n of t)e=e.insert(n.key,n);return e}function Ld(t){let e=Md;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zt(){return or()}function $d(){return or()}function or(){return new qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bw=new Ee(B.comparator),jw=new Ie(B.comparator);function Z(...t){let e=jw;for(const n of t)e=e.add(n);return e}const qw=new Ie(ce);function xd(){return qw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,n)),new yi(J.min(),r,xd(),wt(),Z())}}class Wr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Wr(Le.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class Ud{constructor(e,n){this.targetId=e,this.It=n}}class Fd{constructor(e,n,r=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class al{constructor(){this.Tt=0,this.Et=ll(),this.At=Le.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),r=Z();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Wr(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=ll()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class zw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=wt(),this.Bt=cl(),this.Lt=new Ie(ce)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(bo(i))if(r===0){const o=new B(i.path);this.Kt(n,o,Re.newNoDocument(o,J.min()))}else de(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&bo(a.target)){const c=new B(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Re.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=Z();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new yi(e,n,this.Lt,this.$t,r);return this.$t=wt(),this.Bt=cl(),this.Lt=new Ie(ce),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new al,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ie(ce),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new al),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function cl(){return new Ee(B.comparator)}function ll(){return new Ee(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Kw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Gw{constructor(e,n){this.databaseId=e,this.dt=n}}function Bs(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ww(t,e){return Bs(t,e.toTimestamp())}function gt(t){return de(!!t),J.fromTimestamp(function(e){const n=Rt(e);return new we(n.seconds,n.nanos)}(t))}function Aa(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Bd(t){const e=pe.fromString(t);return de(zd(e)),e}function ko(t,e){return Aa(t.databaseId,e.path)}function Ki(t,e){const n=Bd(e);if(n.get(1)!==t.databaseId.projectId)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(jd(n))}function Ao(t,e){return Aa(t.databaseId,e)}function Qw(t){const e=Bd(t);return e.length===4?pe.emptyPath():jd(e)}function Co(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jd(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ul(t,e,n){return{name:ko(t,e),fields:n.value.mapValue.fields}}function Xw(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(de(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(de(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Pd(c.code);return new z(l,c.message||"")}(o);n=new Fd(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ki(t,r.document.name),i=gt(r.document.updateTime),o=new Qe({mapValue:{fields:r.document.fields}}),a=Re.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new ys(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ki(t,r.document),i=r.readTime?gt(r.readTime):J.min(),o=Re.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ys([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ki(t,r.document),i=r.removedTargetIds||[];n=new ys([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Uw(s),o=r.targetId;n=new Ud(o,i)}}return n}function Yw(t,e){let n;if(e instanceof Gr)n={update:ul(t,e.key,e.value)};else if(e instanceof ka)n={delete:ko(t,e.key)};else if(e instanceof un)n={update:ul(t,e.key,e.data),updateMask:a0(e.fieldMask)};else{if(!(e instanceof xw))return W();n={verify:ko(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Er)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof br)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ww(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function Jw(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?gt(r.updateTime):gt(s);return i.isEqual(J.min())&&(i=gt(s)),new Mw(i,r.transformResults||[])}(n,e))):[]}function Zw(t,e){return{documents:[Ao(t,e.path)]}}function e0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ao(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ao(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Jc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NAN"}};if(Yc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Jc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NAN"}};if(Yc(h.value))return{unaryFilter:{field:gn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(h.field),op:s0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gn(u.field),direction:r0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||di(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function t0(t){let e=Qw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=qd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new sr(_n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,di(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Us(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Us(d,h)}(n.endAt)),Tw(e,s,o,i,a,"F",c,l)}function n0(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function qd(t){return t?t.unaryFilter!==void 0?[o0(t)]:t.fieldFilter!==void 0?[i0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>qd(e)).reduce((e,n)=>e.concat(n)):W():[]}function r0(t){return Hw[t]}function s0(t){return Kw[t]}function gn(t){return{fieldPath:t.canonicalString()}}function _n(t){return xe.fromServerFormat(t.fieldPath)}function i0(t){return ze.create(_n(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function o0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_n(t.unaryFilter.field);return ze.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_n(t.unaryFilter.field);return ze.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_n(t.unaryFilter.field);return ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=_n(t.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function a0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ir(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ir(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$d();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Nd(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(n,r)=>sl(n,r))&&Dn(this.baseMutations,e.baseMutations,(n,r)=>sl(n,r))}}class Ca{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length);let s=Bw;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ca(e,n,r,s)}}/**
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
 */class l0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wt{constructor(e,n,r,s,i=J.min(),o=J.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.ne=e}}function h0(t){const e=t0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?To(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.ze=new f0}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Dt.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class f0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ie(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class g0{constructor(){this.changes=new qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class p0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&ir(r.mutation,s,it.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const s=zt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Yn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=wt();const o=or(),a=or();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof un)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ir(u.mutation,l,u.mutation.getFieldMask(),we.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new p0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=or();let s=new Ee((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||it.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=$d();u.forEach(d=>{if(!i.has(d)){const g=Nd(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):T.resolve(zt());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:Ld(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=Yn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Yn();return this.indexManager.getCollectionParents(e,s).next(o=>T.forEach(o,a=>{const c=function(l,u){return new fi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Re.newInvalidDocument(l)))});let o=Yn();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ir(l.mutation,c,it.empty(),we.now()),Sa(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(Re.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:gt(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:h0(r.bundledQuery),readTime:gt(r.readTime)}}(n)),T.resolve()}}/**
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
 */class v0{constructor(){this.overlays=new Ee(B.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zt();return T.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const s=zt(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return T.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=zt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=zt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return T.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l0(n,r));let i=this.Xn.get(n);i===void 0&&(i=Z(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.Zn=new Ie(Se.ts),this.es=new Ie(Se.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Se(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Se(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new B(new pe([])),r=new Se(n,e),s=new Se(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new pe([])),r=new Se(n,e),s=new Se(n,e+1);let i=Z();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Se(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||ce(e.ls,n.ls)}static ns(e,n){return ce(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ie(Se.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),s=new Se(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ie(ce);return n.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Se(new B(i),0);let a=new Ie(ce);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){de(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return T.forEach(n.mutations,s=>{const i=new Se(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Se(n,0),s=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.ps=e,this.docs=new Ee(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=wt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),T.resolve(r)}getAllFromCollection(e,n,r){let s=wt();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||aw(ow(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,s){W()}Is(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new I0(this)}getSize(e){return T.resolve(this.size)}}class I0 extends g0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.persistence=e,this.Ts=new qn(n=>Ea(n),ba),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new Da,this.targetCount=0,this.Rs=Pn.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new wa(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new E0(this),this.indexManager=new d0,this.remoteDocumentCache=function(r){return new w0(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new u0(n),this.Ds=new y0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new v0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new _0(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new T0(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class T0 extends lw{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.ks=new Da,this.Ms=null}static Os(e){return new Ra(e)}get Fs(){if(this.Ms)return this.Ms;throw W()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,r=>{const s=B.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Na(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(nl(n))return T.resolve(null);let r=_t(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=To(n,null,"F"),r=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Z(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,To(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,s){return nl(n)||s.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(Kc()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),So(n)),this.Oi(e,o,n,iw(s,-1)))})}ki(e,n){let r=new Ie(Td(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Kc()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",So(n)),this.Di.getDocumentsMatchingQuery(e,n,Dt.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ee(ce),this.Bi=new qn(i=>Ea(i),ba),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function A0(t,e,n,r){return new k0(t,e,n,r)}async function Hd(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function C0(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const w=c.docVersions.get(g);de(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Kd(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function D0(t,e){const n=Q(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Le.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(m,w,E){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=wt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(R0(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(J.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function R0(t,e,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function N0(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function O0(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,T.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Wt(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Do(t,e,n){const r=Q(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Kr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function hl(t,e,n){const r=Q(t);let s=J.min(),i=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.Bi.get(l);return h!==void 0?T.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,_t(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:Z())).next(a=>(P0(r,Cw(e),a),{documents:a,ji:i})))}function P0(t,e,n){let r=J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class dl{constructor(){this.activeTargetIds=xd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M0{constructor(){this.Fr=new dl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new dl,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Gc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=$0[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new Q_;a.listenOnce(K_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hi.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Hi.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new z(S.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new z(d,h.message))}else o(new z(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(S.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=z_(),o=H_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new W_({})),this.uo(a.initMessageHeaders,n,r),ou()||au()||ug()||cu()||hg()||Oo()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new x0({jr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),g=(m,w,E)=>{m.listen(w,C=>{try{E(C)}catch(I){setTimeout(()=>{throw I},0)}})};return g(l,ss.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,ss.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.eo())}),g(l,ss.EventType.ERROR,m=>{h||(h=!0,Gc("Connection","WebChannel transport errored:",m),d.eo(new z(S.UNAVAILABLE,"The operation could not be completed")))}),g(l,ss.EventType.MESSAGE,m=>{var w;if(!h){const E=m.data[0];de(!!E);const C=E,I=C.error||((w=C[0])===null||w===void 0?void 0:w.error);if(I){F("Connection","WebChannel received error:",I);const b=I.status;let O=function(U){const k=ye[U];if(k!==void 0)return Pd(k)}(b),y=I.message;O===void 0&&(O=S.INTERNAL,y="Unknown error status: "+b+" with message "+I.message),h=!0,d.eo(new z(O,y)),l.close()}else F("Connection","WebChannel received:",E),d.no(E)}}),g(o,G_.STAT_EVENT,m=>{m.stat===zc.PROXY?F("Connection","Detected buffering proxy"):m.stat===zc.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Gi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return new Gw(t,!0)}class Gd{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Gd(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new z(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F0 extends Wd{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Xw(this.wt,e),r=function(s){if(!("targetChange"in s))return J.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?gt(i.readTime):J.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Co(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=bo(a)?{documents:Zw(s,a)}:{query:e0(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Vd(s,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Bs(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=n0(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Co(this.wt),n.removeTarget=e,this.Oo(n)}}class V0 extends Wd{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Jw(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.Jo(r,n)}return de(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Co(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Yw(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(S.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class j0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(vt(n),this.su=!1):F("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{hn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.lu.add(4),await Qr(c),c._u.set("Unknown"),c.lu.delete(4),await _i(c)}(this))})}),this._u=new j0(r,s)}}async function _i(t){if(hn(t))for(const e of t.fu)await e(!0)}async function Qr(t){for(const e of t.fu)await e(!1)}function Qd(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ma(n)?Pa(n):zn(n).Co()&&Oa(n,e))}function Xd(t,e){const n=Q(t),r=zn(n);n.hu.delete(e),r.Co()&&Yd(n,e),n.hu.size===0&&(r.Co()?r.ko():hn(n)&&n._u.set("Unknown"))}function Oa(t,e){t.wu.Nt(e.targetId),zn(t).Qo(e)}function Yd(t,e){t.wu.Nt(e),zn(t).jo(e)}function Pa(t){t.wu=new zw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),zn(t).start(),t._u.iu()}function Ma(t){return hn(t)&&!zn(t).Do()&&t.hu.size>0}function hn(t){return Q(t).lu.size===0}function Jd(t){t.wu=void 0}async function z0(t){t.hu.forEach((e,n)=>{Oa(t,e)})}async function H0(t,e){Jd(t),Ma(t)?(t._u.uu(e),Pa(t)):t._u.set("Unknown")}async function K0(t,e,n){if(t._u.set("Online"),e instanceof Fd&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await js(t,r)}else if(e instanceof ys?t.wu.Ut(e):e instanceof Ud?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const r=await Kd(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Yd(s,a);const l=new Wt(c.target,a,1,c.sequenceNumber);Oa(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await js(t,r)}}async function js(t,e,n){if(!Kr(e))throw e;t.lu.add(1),await Qr(t),t._u.set("Offline"),n||(n=()=>Kd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await _i(t)})}function Zd(t,e){return e().catch(n=>js(t,n,e))}async function wi(t){const e=Q(t),n=Nt(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;G0(e);)try{const s=await N0(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,W0(e,s)}catch(s){await js(e,s)}ef(e)&&tf(e)}function G0(t){return hn(t)&&t.au.length<10}function W0(t,e){t.au.push(e);const n=Nt(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ef(t){return hn(t)&&!Nt(t).Do()&&t.au.length>0}function tf(t){Nt(t).start()}async function Q0(t){Nt(t).Xo()}async function X0(t){const e=Nt(t);for(const n of t.au)e.Ho(n.mutations)}async function Y0(t,e,n){const r=t.au.shift(),s=Ca.from(r,e,n);await Zd(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wi(t)}async function J0(t,e){e&&Nt(t).zo&&await async function(n,r){if(s=r.code,Fw(s)&&s!==S.ABORTED){const i=n.au.shift();Nt(n).No(),await Zd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await wi(n)}var s}(t,e),ef(t)&&tf(t)}async function gl(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=hn(n);n.lu.add(3),await Qr(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await _i(n)}async function Z0(t,e){const n=Q(t);e?(n.lu.delete(2),await _i(n)):e||(n.lu.add(2),await Qr(n),n._u.set("Unknown"))}function zn(t){return t.mu||(t.mu=function(e,n,r){const s=Q(e);return s.tu(),new F0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:z0.bind(null,t),Jr:H0.bind(null,t),Go:K0.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ma(t)?Pa(t):t._u.set("Unknown")):(await t.mu.stop(),Jd(t))})),t.mu}function Nt(t){return t.gu||(t.gu=function(e,n,r){const s=Q(e);return s.tu(),new V0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:Q0.bind(null,t),Jr:J0.bind(null,t),Yo:X0.bind(null,t),Jo:Y0.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await wi(t)):(await t.gu.stop(),t.au.length>0&&(F("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new La(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Kr(t))return new z(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Yn(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class pl{constructor(){this.yu=new Ee(B.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mn{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Mn(e,n,Tn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.Iu=void 0,this.listeners=[]}}class tI{constructor(){this.queries=new qn(e=>bd(e),gi),this.onlineState="Unknown",this.Tu=new Set}}async function nI(t,e){const n=Q(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new eI),s)try{i.Iu=await n.onListen(r)}catch(o){const a=$a(o,`Initialization of query '${So(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&xa(n)}async function rI(t,e){const n=Q(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sI(t,e){const n=Q(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&xa(n)}function iI(t,e,n){const r=Q(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function xa(t){t.Tu.forEach(e=>{e.next()})}class oI{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Mn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Mn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.key=e}}class rf{constructor(e){this.key=e}}class aI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=Td(e),this.Uu=new Tn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new pl,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Sa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?m!==w&&(r.track({type:3,doc:g}),E=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),E=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Mn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new pl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new rf(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new nf(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Mn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class cI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lI{constructor(e){this.key=e,this.Xu=!1}}class uI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new qn(a=>bd(a),gi),this.ec=new Map,this.nc=new Set,this.sc=new Ee(B.comparator),this.ic=new Map,this.rc=new Da,this.oc={},this.uc=new Map,this.cc=Pn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function hI(t,e){const n=II(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await O0(n.localStore,_t(e));n.isPrimaryClient&&Qd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await dI(n,e,r,a==="current")}return s}async function dI(t,e,n,r){t.hc=(u,h,d)=>async function(g,m,w,E){let C=m.view.Ku(w);C.Mi&&(C=await hl(g.localStore,m.query,!1).then(({documents:O})=>m.view.Ku(O,C)));const I=E&&E.targetChanges.get(m.targetId),b=m.view.applyChanges(C,g.isPrimaryClient,I);return yl(g,m.targetId,b.zu),b.snapshot}(t,u,h,d);const s=await hl(t.localStore,e,!0),i=new aI(e,s.ji),o=i.Ku(s.documents),a=Wr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);yl(t,n,c.zu);const l=new cI(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function fI(t,e){const n=Q(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!gi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Do(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xd(n.remoteStore,r.targetId),Ro(n,r.targetId)}).catch(Hr)):(Ro(n,r.targetId),await Do(n.localStore,r.targetId,!0))}async function gI(t,e,n){const r=EI(t);try{const s=await function(i,o){const a=Q(i),c=we.now(),l=o.reduce((d,g)=>d.add(g.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=wt(),m=Z();return a.Ui.getEntries(d,l).next(w=>{g=w,g.forEach((E,C)=>{C.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(w=>{u=w;const E=[];for(const C of o){const I=$w(C,u.get(C.key).overlayedDocument);I!=null&&E.push(new un(C.key,I,Id(I.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Ld(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Ee(ce)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Xr(r,s.changes),await wi(r.remoteStore)}catch(s){const i=$a(s,"Failed to persist write");n.reject(i)}}async function sf(t,e){const n=Q(t);try{const r=await D0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?de(o.Xu):s.removedDocuments.size>0&&(de(o.Xu),o.Xu=!1))}),await Xr(n,r,e)}catch(r){await Hr(r)}}function ml(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&xa(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pI(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ee(B.comparator);o=o.insert(i,Re.newNoDocument(i,J.min()));const a=Z().add(i),c=new yi(J.min(),new Map,new Ie(ce),o,a);await sf(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),Ua(r)}else await Do(r.localStore,e,!1).then(()=>Ro(r,e,n)).catch(Hr)}async function mI(t,e){const n=Q(t),r=e.batch.batchId;try{const s=await C0(n.localStore,e);af(n,r,null),of(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(n,s)}catch(s){await Hr(s)}}async function yI(t,e,n){const r=Q(t);try{const s=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(de(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);af(r,e,n),of(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xr(r,s)}catch(s){await Hr(s)}}function of(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function af(t,e,n){const r=Q(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||cf(t,r)})}function cf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Xd(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ua(t))}function yl(t,e,n){for(const r of n)r instanceof nf?(t.rc.addReference(r.key,e),vI(t,r)):r instanceof rf?(F("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||cf(t,r.key)):W()}function vI(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ua(t))}function Ua(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(pe.fromString(e)),r=t.cc.next();t.ic.set(r,new lI(n)),t.sc=t.sc.insert(n,r),Qd(t.remoteStore,new Wt(_t(Ta(n.path)),r,2,wa.ot))}}async function Xr(t,e,n){const r=Q(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Na.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Kr(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,m)}}}(r.localStore,i))}async function _I(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Hd(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new z(S.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xr(n,r.Ki)}}function wI(t,e){const n=Q(t),r=n.ic.get(e);if(r&&r.Xu)return Z().add(r.key);{let s=Z();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function II(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pI.bind(null,e),e.Zu.Go=sI.bind(null,e.eventManager),e.Zu.lc=iI.bind(null,e.eventManager),e}function EI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yI.bind(null,e),e}class bI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=vi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return A0(this.persistence,new S0,e.initialUser,this.wt)}_c(e){return new b0(Ra.Os,this.wt)}dc(e){return new M0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ml(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_I.bind(null,this.syncEngine),await Z0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tI}createDatastore(e){const n=vi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new U0(s));var s;return function(i,o,a,c){return new B0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ml(this.syncEngine,a,0),o=fl.V()?new fl:new L0,new q0(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new uI(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Qr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=yd.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$a(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function AI(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DI(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>gl(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>gl(e.remoteStore,i)),t.onlineComponents=e}async function DI(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await AI(t,new bI)),t.offlineComponents}async function lf(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await CI(t,new TI)),t.onlineComponents}function RI(t){return lf(t).then(e=>e.syncEngine)}async function vl(t){const e=await lf(t),n=e.eventManager;return n.onListen=hI.bind(null,e.syncEngine),n.onUnlisten=fI.bind(null,e.syncEngine),n}const _l=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e,n){if(!n)throw new z(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NI(t,e,n,r){if(e===!0&&r===!0)throw new z(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wl(t){if(!B.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Il(t){if(B.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fa(t);throw new z(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,e instanceof Nn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new z(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(s.options.projectId)}(e))}get app(){if(!this._app)throw new z(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Y_;switch(n.type){case"gapi":const r=n.client;return de(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ew(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new z(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_l.get(e);n&&(F("ComponentProvider","Removing Datastore"),_l.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Ii{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ii(this.firestore,e,this._query)}}class Ct extends Ii{constructor(e,n,r){super(e,n,Ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new B(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function OI(t,e,...n){if(t=Fe(t),uf("collection","path",e),t instanceof Va){const r=pe.fromString(e,...n);return Il(r),new Ct(t,null,r)}{if(!(t instanceof Ke||t instanceof Ct))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Il(r),new Ct(t.firestore,null,r)}}function Wi(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=yd.I()),uf("doc","path",e),t instanceof Va){const r=pe.fromString(e,...n);return wl(r),new Ke(t,null,new B(r))}{if(!(t instanceof Ke||t instanceof Ct))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return wl(r),new Ke(t.firestore,t instanceof Ct?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Gd(this,"async_queue_retry"),this.Kc=()=>{const n=Gi();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Gi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Gi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Gt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Kr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=La.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function bl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tr extends Va{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new PI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||df(this),this._firestoreClient.terminate()}}function MI(t=Mo()){return cn(t,"firestore").getImmediate()}function hf(t){return t._firestoreClient||df(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function df(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new hw(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ba{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Le.fromBase64String(e))}catch(n){throw new z(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ln(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^__.*__$/;class $I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gr(e,this.data,n,this.fieldTransforms)}}function gf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class qa{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return qs(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(gf(this.Zc)&&LI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class xI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||vi(e)}aa(e,n,r,s=!1){return new qa({Zc:e,methodName:n,ca:r,path:xe.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function UI(t){const e=t._freezeSettings(),n=vi(t._databaseId);return new xI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FI(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);vf("Data must be an object, but it was:",o,r);const a=mf(r,o);let c,l;if(i.merge)c=new it(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=VI(e,h,n);if(!o.contains(d))throw new z(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jI(u,d)||u.push(d)}c=new it(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new $I(new Qe(a),c,l)}function pf(t,e){if(yf(t=Fe(t)))return vf("Unsupported field value:",e,t),mf(t,e);if(t instanceof ff)return function(n,r){if(!gf(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=pf(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rw(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=we.fromDate(n);return{timestampValue:Bs(r.wt,s)}}if(n instanceof we){const s=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bs(r.wt,s)}}if(n instanceof ja)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ln)return{bytesValue:Vd(r.wt,n._byteString)};if(n instanceof Ke){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Aa(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Fa(n)}`)}(t,e)}function mf(t,e){const n={};return vd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(r,s)=>{const i=pf(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof ja||t instanceof Ln||t instanceof Ke||t instanceof ff)}function vf(t,e,n){if(!yf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function VI(t,e,n){if((e=Fe(e))instanceof Ba)return e._internalPath;if(typeof e=="string")return _f(t,e);throw qs("Field path arguments must be of type string or ",t,!1,void 0,n)}const BI=new RegExp("[~\\*/\\[\\]]");function _f(t,e,n){if(e.search(BI)>=0)throw qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ba(...e.split("."))._internalPath}catch{throw qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(S.INVALID_ARGUMENT,a+t+c)}function jI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(If("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qI extends wf{data(){return super.data()}}function If(t,e){return typeof e=="string"?_f(t,e):e instanceof Ba?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ef extends wf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(If("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vs extends Ef{data(e={}){return super.data(e)}}class zI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vs(this._firestore,this._userDataWriter,r.key,r,new Jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new vs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new vs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:HI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function GI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{convertValue(e,n="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return jn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ja(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=Rt(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);de(zd(r));const s=new Nn(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||vt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bf extends WI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function XI(t,e,n){t=Sn(t,Ke);const r=Sn(t.firestore,Tr),s=QI(t.converter,e,n);return Tf(r,[FI(UI(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ot.none())])}function YI(t){return Tf(Sn(t.firestore,Tr),[new ka(t._key,ot.none())])}function Tl(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ke)l=Sn(t.firestore,Tr),u=Ta(t._key.path),c={next:h=>{e[o]&&e[o](JI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Sn(t,Ii);l=Sn(h.firestore,Tr),u=h._query;const d=new bf(l);c={next:g=>{e[o]&&e[o](new zI(l,d,h,g))},error:e[o+1],complete:e[o+2]},KI(t._query)}return function(h,d,g,m){const w=new SI(m),E=new oI(d,w,g);return h.asyncQueue.enqueueAndForget(async()=>nI(await vl(h),E)),()=>{w.Tc(),h.asyncQueue.enqueueAndForget(async()=>rI(await vl(h),E))}}(hf(l),u,a,c)}function Tf(t,e){return function(n,r){const s=new Gt;return n.asyncQueue.enqueueAndForget(async()=>gI(await RI(n),r,s)),s.promise}(hf(t),e)}function JI(t,e,n){const r=n.docs.get(e._key),s=new bf(t);return new Ef(t,s,e._key,r,new Jn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Bn=n})(Cr),at(new tt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Tr(s,new J_(n.getProvider("auth-internal")),new nw(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ye(Hc,"3.4.14",t),Ye(Hc,"3.4.14","esm2017")})();const ZI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},Sf=_p(ZI),Ut=Ty(Sf);fm(Ut,Uu);const as=MI(Sf);Uv();const eE=new lt,tE=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=$n(t);return Lu(Ut,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,s){return hm(Ut,r,s)},async signInWithEmail(r,s){return dm(Ut,r,s)},async signInWithGoogle(){return xm(Ut,eE)},async signOut(){return gm(Ut)}}};var _s=tE();function nE(t){let e;return{c(){e=v("i"),f(e,"class","codicon codicon-account")},m(n,r){x(n,e,r)},p:V,d(n){n&&$(e)}}}function rE(t){let e,n;return{c(){e=v("img"),f(e,"class","profile-picture svelte-1rima2j"),kn(e.src,n=t[0].user.photoURL)||f(e,"src",n),f(e,"alt","Account")},m(r,s){x(r,e,s)},p(r,s){s&1&&!kn(e.src,n=r[0].user.photoURL)&&f(e,"src",n)},d(r){r&&$(e)}}}function sE(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,w,E,C,I;c=new ig({});function b(U,k){return U[0].loggedIn?rE:nE}let O=b(t),y=O(t);return{c(){e=v("header"),n=v("div"),r=v("a"),r.innerHTML='<i class="codicon codicon-github"></i>',s=L(),i=v("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=L(),a=v("a"),se(c.$$.fragment),l=L(),u=v("nav"),h=v("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=L(),g=v("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=L(),w=v("button"),y.c(),f(r,"title","Source Code"),f(r,"href","https://github.com/kurozenzen/kurosearch"),f(r,"target","_newtab"),f(r,"class","svelte-1rima2j"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-1rima2j"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-1rima2j"),f(n,"class","svelte-1rima2j"),f(h,"title","Search"),f(h,"class","svelte-1rima2j"),f(g,"title","Settings"),f(g,"class","svelte-1rima2j"),f(w,"title","Account"),f(w,"class","svelte-1rima2j"),f(u,"class","svelte-1rima2j"),f(e,"role","navigation"),f(e,"class","svelte-1rima2j")},m(U,k){x(U,e,k),p(e,n),p(n,r),p(n,s),p(n,i),p(n,o),p(n,a),te(c,a,null),p(e,l),p(e,u),p(u,h),p(u,d),p(u,g),p(u,m),p(u,w),y.m(w,null),E=!0,C||(I=[re(h,"click",t[1]),re(g,"click",t[2]),re(w,"click",t[3])],C=!0)},p(U,[k]){O===(O=b(U))&&y?y.p(U,k):(y.d(1),y=O(U),y&&(y.c(),y.m(w,null)))},i(U){E||(A(c.$$.fragment,U),E=!0)},o(U){R(c.$$.fragment,U),E=!1},d(U){U&&$(e),ne(c),y.d(),C=!1,We(I)}}}function iE(t,e,n){let r;return et(t,_s,a=>n(0,r=a)),[r,()=>Ht.navigateTo("search"),()=>Ht.navigateTo("settings"),()=>Ht.navigateTo("account")]}class oE extends he{constructor(e){super(),ue(this,e,iE,sE,le,{})}}const aE=new IntersectionObserver(t=>{for(const e of t){if(e.target.src===void 0){console.warn("PostObserver is observing an invalid element",e.target);continue}e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):""}},{rootMargin:"1250px"}),Ot=t=>t/1e6>=1?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString();function pn(t,e){const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`}function Sl(t){const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear();if(r)return pn(r,"year");const s=n.getMonth()-e.getMonth();if(s)return pn(s,"month");const i=(n.getTime()-e.getTime())/6e4;if(i===0)return"just now";if(i<60)return pn(i,"minute");const o=i/60;if(o<24)return pn(o,"hour");const a=o/24;if(a<7)return pn(a,"day");const c=a/7;return c<5?pn(c,"week"):"rip"}function Pt(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const ws=Object.freeze(["+","-","~"]),Ei=t=>ws.includes(t),kf=t=>{if(!Ei(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(ws.indexOf(t)+1)%ws.length;return ws[n]},cE=Object.freeze({"+":"","-":"-","~":""}),lE=t=>{if(!Ei(t))throw TypeError("Invalid modifier passed to serializeModifier");return cE[t]},uE=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),Af=t=>uE.includes(t),Yr=t=>typeof t=="string"&&t!=="",Cf=t=>typeof t=="number"&&t>=0;class bi{constructor(e,n){if(!Ei(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Yr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${lE(this.modifier)}${this.name}`}}class zs{constructor(e,n,r,s){if(!Ei(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Yr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Cf(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Af(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}toSearchableTag(){return new bi(this.modifier,this.name)}}function hE(){const t=[],{subscribe:e,update:n,set:r}=$n(t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:s=>n(i=>(i.push(new zs("+",s,0,"general")),i)),removeByIndex:s=>n(i=>(i.splice(s,1),i))}}var kt=hE();function dE(t){let e,n=Pt(t[0])+"",r,s,i;return{c(){e=v("li"),r=fe(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),Xe(e,"active",t[2])},m(o,a){x(o,e,a),p(e,r),s||(i=re(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&n!==(n=Pt(o[0])+"")&&ke(r,n),a&4&&Xe(e,"active",o[2])},i:V,o:V,d(o){o&&$(e),s=!1,i()}}}function fE(t,e,n){let r,s,i;et(t,kt,c=>n(3,i=c));let{name:o}=e;const a=()=>s?kt.removeByIndex(r):kt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,r=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,s=r>=0)},[o,r,s,i,a]}class gE extends he{constructor(e){super(),ue(this,e,fE,dE,le,{name:0})}}const Df=(t,e)=>{if(!Rf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!pE(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Rf=t=>{try{return new URL(t),!0}catch{return!1}},pE=t=>t===null||t instanceof AbortController;function mE(t){let e,n;return{c(){e=v("span"),n=fe(t[0])},m(r,s){x(r,e,s),p(e,n)},p(r,s){s&1&&ke(n,r[0])},d(r){r&&$(e)}}}function yE(t){let e,n=t[1].hostname+"",r,s;return{c(){e=v("a"),r=fe(n),f(e,"href",s=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-1qmyyls")},m(i,o){x(i,e,o),p(e,r)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&ke(r,n),o&2&&s!==(s=i[1].toString())&&f(e,"href",s)},d(i){i&&$(e)}}}function vE(t){let e,n,r;function s(a,c){return a[1]?yE:mE}let i=s(t),o=i(t);return{c(){e=v("i"),n=L(),o.c(),r=kr(),f(e,"class","codicon codicon-link")},m(a,c){x(a,e,c),x(a,n,c),o.m(a,c),x(a,r,c)},p(a,[c]){i===(i=s(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(r.parentNode,r)))},i:V,o:V,d(a){a&&$(e),a&&$(n),o.d(a),a&&$(r)}}}function _E(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(0,s=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Rf(s)?new URL(s):null)},[s,r]}class wE extends he{constructor(e){super(),ue(this,e,_E,vE,le,{source:0})}}function kl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Al(t){let e,n,r;return n=new wE({props:{source:t[0].source}}),{c(){e=v("div"),se(n.$$.fragment),f(e,"class","svelte-5x11c6")},m(s,i){x(s,e,i),te(n,e,null),r=!0},p(s,i){const o={};i&1&&(o.source=s[0].source),n.$set(o)},i(s){r||(A(n.$$.fragment,s),r=!0)},o(s){R(n.$$.fragment,s),r=!1},d(s){s&&$(e),ne(n)}}}function Cl(t){let e,n;return e=new gE({props:{name:t[1]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.name=r[1]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function IE(t){let e,n,r,s,i,o=Sl(t[0].created_at)+"",a,c,l,u,h,d,g=Ot(t[0].score)+"",m,w,E,C,I,b=t[0].source&&Al(t),O=t[0].tags,y=[];for(let k=0;k<O.length;k+=1)y[k]=Cl(kl(t,O,k));const U=k=>R(y[k],1,1,()=>{y[k]=null});return{c(){e=v("div"),n=v("div"),r=v("i"),s=L(),i=v("span"),a=fe(o),c=L(),l=v("div"),u=v("i"),h=L(),d=v("span"),m=fe(g),w=L(),b&&b.c(),E=L(),C=v("ul");for(let k=0;k<y.length;k+=1)y[k].c();f(r,"class","codicon codicon-calendar"),f(i,"class","svelte-5x11c6"),f(n,"class","svelte-5x11c6"),f(u,"class","codicon codicon-heart"),f(d,"class","svelte-5x11c6"),f(l,"class","svelte-5x11c6"),f(e,"class","summary svelte-5x11c6"),f(C,"class","svelte-5x11c6")},m(k,M){x(k,e,M),p(e,n),p(n,r),p(n,s),p(n,i),p(i,a),p(e,c),p(e,l),p(l,u),p(l,h),p(l,d),p(d,m),p(e,w),b&&b.m(e,null),x(k,E,M),x(k,C,M);for(let j=0;j<y.length;j+=1)y[j].m(C,null);I=!0},p(k,[M]){if((!I||M&1)&&o!==(o=Sl(k[0].created_at)+"")&&ke(a,o),(!I||M&1)&&g!==(g=Ot(k[0].score)+"")&&ke(m,g),k[0].source?b?(b.p(k,M),M&1&&A(b,1)):(b=Al(k),b.c(),A(b,1),b.m(e,null)):b&&(Ne(),R(b,1,1,()=>{b=null}),Oe()),M&1){O=k[0].tags;let j;for(j=0;j<O.length;j+=1){const P=kl(k,O,j);y[j]?(y[j].p(P,M),A(y[j],1)):(y[j]=Cl(P),y[j].c(),A(y[j],1),y[j].m(C,null))}for(Ne(),j=O.length;j<y.length;j+=1)U(j);Oe()}},i(k){if(!I){A(b);for(let M=0;M<O.length;M+=1)A(y[M]);I=!0}},o(k){R(b),y=y.filter(Boolean);for(let M=0;M<y.length;M+=1)R(y[M]);I=!1},d(k){k&&$(e),b&&b.d(),k&&$(E),k&&$(C),Mt(y,k)}}}function EE(t,e,n){let{post:r}=e;return t.$$set=s=>{"post"in s&&n(0,r=s.post)},[r]}class bE extends he{constructor(e){super(),ue(this,e,EE,IE,le,{post:0})}}function TE(t){let e,n,r,s,i,o;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){x(a,e,c),t[6](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[6](null)}}}function SE(t){let e,n,r,s,i,o;return{c(){e=v("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-1xnjrgd")},m(a,c){x(a,e,c),t[5](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[5](null)}}}function kE(t){let e,n,r,s,i,o;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){x(a,e,c),t[4](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[4](null)}}}function Dl(t){let e,n;return e=new bE({props:{post:t[0]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function AE(t){let e,n,r,s,i,o;function a(h,d){return h[0].type==="image"?kE:h[0].type==="video"?SE:TE}let c=a(t),l=c(t),u=t[2]&&Dl(t);return{c(){e=v("div"),n=v("div"),l.c(),r=L(),u&&u.c(),f(n,"class","content"),f(e,"class","post svelte-1xnjrgd"),f(e,"tabindex","0")},m(h,d){x(h,e,d),p(e,n),l.m(n,null),p(e,r),u&&u.m(e,null),s=!0,i||(o=re(n,"click",t[3]),i=!0)},p(h,[d]){c===(c=a(h))&&l?l.p(h,d):(l.d(1),l=c(h),l&&(l.c(),l.m(n,null))),h[2]?u?(u.p(h,d),d&4&&A(u,1)):(u=Dl(h),u.c(),A(u,1),u.m(e,null)):u&&(Ne(),R(u,1,1,()=>{u=null}),Oe())},i(h){s||(A(u),s=!0)},o(h){R(u),s=!1},d(h){h&&$(e),l.d(),u&&u.d(),i=!1,o()}}}function CE(t,e,n){let{post:r}=e,s,i=!1;const o=()=>{n(2,i=!i)};function a(u){wn[u?"unshift":"push"](()=>{s=u,n(1,s)})}function c(u){wn[u?"unshift":"push"](()=>{s=u,n(1,s)})}function l(u){wn[u?"unshift":"push"](()=>{s=u,n(1,s)})}return t.$$set=u=>{"post"in u&&n(0,r=u.post)},t.$$.update=()=>{t.$$.dirty&2&&s&&aE.observe(s)},[r,s,i,o,a,c,l]}class DE extends he{constructor(e){super(),ue(this,e,CE,AE,le,{post:0})}}function Rl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nl(t){let e,n;return e=new DE({props:{post:t[1]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function RE(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Nl(Rl(t,r,o));const i=o=>R(s[o],1,1,()=>{s[o]=null});return{c(){e=v("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-5hdzo")},m(o,a){x(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=Rl(o,r,c);s[c]?(s[c].p(l,a),A(s[c],1)):(s[c]=Nl(l),s[c].c(),A(s[c],1),s[c].m(e,null))}for(Ne(),c=r.length;c<s.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)A(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)R(s[a]);n=!1},d(o){o&&$(e),Mt(s,o)}}}function NE(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class OE extends he{constructor(e){super(),ue(this,e,NE,RE,le,{posts:0})}}function PE(t){let e,n,r,s,i,o,a;return{c(){e=v("button"),n=v("i"),s=L(),i=fe(t[1]),f(n,"class",r=`codicon codicon-${t[0]}`),f(e,"title",t[2]),e.disabled=t[3],f(e,"class","svelte-4qhlub")},m(c,l){x(c,e,l),p(e,n),p(e,s),p(e,i),o||(a=re(e,"click",t[5]),o=!0)},p(c,[l]){l&1&&r!==(r=`codicon codicon-${c[0]}`)&&f(n,"class",r),l&2&&ke(i,c[1]),l&4&&f(e,"title",c[2]),l&8&&(e.disabled=c[3])},i:V,o:V,d(c){c&&$(e),o=!1,a()}}}function ME(t,e,n){let{icon:r}=e,{text:s}=e,{title:i}=e,{disabled:o=!1}=e;const a=It(),c=()=>a("click");return t.$$set=l=>{"icon"in l&&n(0,r=l.icon),"text"in l&&n(1,s=l.text),"title"in l&&n(2,i=l.title),"disabled"in l&&n(3,o=l.disabled)},[r,s,i,o,a,c]}class Ti extends he{constructor(e){super(),ue(this,e,ME,PE,le,{icon:0,text:1,title:2,disabled:3})}}function on(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}function LE(t){let e,n,r,s;return{c(){e=v("i"),f(e,"title",t[0]),f(e,"class",n=pt(`codicon codicon-${t[1]}`)+" svelte-htt49j"),f(e,"tabindex","0"),Xe(e,"active",t[2])},m(i,o){x(i,e,o),r||(s=[re(e,"click",t[3]),re(e,"keyup",on(t[3]))],r=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=pt(`codicon codicon-${i[1]}`)+" svelte-htt49j")&&f(e,"class",n),o&6&&Xe(e,"active",i[2])},i:V,o:V,d(i){i&&$(e),r=!1,We(s)}}}function $E(t,e,n){let{title:r=void 0}=e,{icon:s}=e,{active:i}=e;const o=It(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,r=c.title),"icon"in c&&n(1,s=c.icon),"active"in c&&n(2,i=c.active)},[r,s,i,a]}class xE extends he{constructor(e){super(),ue(this,e,$E,LE,le,{title:0,icon:1,active:2})}}const Ol=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Hs=Object.freeze({"+":"include","-":"exclude","~":"optional"});function UE(t){let e,n,r,s,i;return{c(){e=v("i"),f(e,"tabindex","0"),f(e,"class",n=`codicon codicon-${Ol[t[0]]}`),f(e,"title",r=Pl[t[0]])},m(o,a){x(o,e,a),s||(i=[re(e,"click",t[1]),re(e,"keyup",on(t[1]))],s=!0)},p(o,[a]){a&1&&n!==(n=`codicon codicon-${Ol[o[0]]}`)&&f(e,"class",n),a&1&&r!==(r=Pl[o[0]])&&f(e,"title",r)},i:V,o:V,d(o){o&&$(e),s=!1,We(i)}}}function FE(t,e,n){let r="+";const s=It();return[r,()=>{n(0,r=kf(r)),s("change",r)}]}class VE extends he{constructor(e){super(),ue(this,e,FE,UE,le,{})}}function BE(t){let e;return{c(){e=v("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){x(n,e,r)},p:V,i:V,o:V,d(n){n&&$(e)}}}class jE extends he{constructor(e){super(),ue(this,e,null,BE,le,{})}}class Nf{constructor(e,n,r){if(!Yr(e))throw TypeError("Invalid name passed to Tag constructor");if(!Cf(n))throw TypeError("Invalid count passed to Tag constructor");if(!Af(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}toActiveTag(e){return new zs(e,this.name,this.count,this.type)}}let qE=null;const zE=async(t,e)=>{const n=e?`*${t}*`:t,r=await Df(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,qE);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length==0)throw new Error("No tags found");return s.map(o=>new Nf(o.name,o.count,HE(o.types)))}else throw s.message?new Error(s.message):new Error("Cannot display tag suggestions")}else throw new Error("Failed to get tag suggestions")};function HE(t){for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"}class Of{constructor(e,n,r){if(!Yr(e))throw new TypeError("Invalid name passed to Supertag");if(!KE(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const KE=t=>Array.isArray(t)&&t.every(e=>e instanceof bi),Qi=async t=>{const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")},GE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=$n(t);let r,s=null,i=null;return Lu(Ut,async o=>{if(r=o,o){const a=await Qi(o.email);s==null||s(),s=Tl(Wi(as,"users",a),async c=>{const l=c.data();if(l===void 0)n(u=>(u.preferences={},u));else{n(h=>(h.preferences=l.preferences,h));const u=GI(OI(as,`users/${a}/supertags`));i==null||i(),i=Tl(u,h=>{const d=[];h.forEach(g=>{const m=g.data();d.push(new Of(g.id,m.description,Object.entries(m.tags).map(w=>new bi(w[1],w[0]))))}),n(g=>(g.supertags=d,g))})}})}else s==null||s(),i==null||i(),s=null,i=null}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");const a=await Qi(r.email);debugger;return XI(Wi(as,`users/${a}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(c=>[c.name,c.modifier]))})},async deleteSupertag(o){if(!r)throw new Error("No user");const a=await Qi(r.email);return YI(Wi(as,`users/${a}/supertags`,o.name))}}};var Sr=GE();const Ml=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function WE(t){let e,n;return{c(){e=v("i"),f(e,"class",n=`codicon codicon-${Ml[t[0]]}`)},m(r,s){x(r,e,s)},p(r,[s]){s&1&&n!==(n=`codicon codicon-${Ml[r[0]]}`)&&f(e,"class",n)},i:V,o:V,d(r){r&&$(e)}}}function QE(t,e,n){let{type:r}=e;return t.$$set=s=>{"type"in s&&n(0,r=s.type)},[r]}class Pf extends he{constructor(e){super(),ue(this,e,QE,WE,le,{type:0})}}function XE(t){let e,n,r,s,i=Pt(t[0].name)+"",o,a,c,l=Ot(t[0].count)+"",u,h,d,g,m;return n=new Pf({props:{type:t[0].type}}),{c(){e=v("li"),se(n.$$.fragment),r=L(),s=v("span"),o=fe(i),a=L(),c=v("span"),u=fe(l),f(s,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(w,E){x(w,e,E),te(n,e,null),p(e,r),p(e,s),p(s,o),p(e,a),p(e,c),p(c,u),d=!0,g||(m=re(e,"click",t[2]),g=!0)},p(w,[E]){const C={};E&1&&(C.type=w[0].type),n.$set(C),(!d||E&1)&&i!==(i=Pt(w[0].name)+"")&&ke(o,i),(!d||E&1)&&l!==(l=Ot(w[0].count)+"")&&ke(u,l),(!d||E&1&&h!==(h=w[0].name))&&f(e,"title",h)},i(w){d||(A(n.$$.fragment,w),d=!0)},o(w){R(n.$$.fragment,w),d=!1},d(w){w&&$(e),ne(n),g=!1,m()}}}function YE(t,e,n){let{tag:r}=e;const s=It(),i=()=>s("click",r);return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class JE extends he{constructor(e){super(),ue(this,e,YE,XE,le,{tag:0})}}function Ll(t,e,n){const r=t.slice();return r[20]=e[n],r}function ZE(t){let e,n,r,s,i=t[23].message+"",o;return{c(){e=v("div"),n=v("i"),r=L(),s=v("span"),o=fe(i),f(n,"class",pt("codicon codicon-error")+" svelte-1d9l3qv"),f(e,"class","error-container svelte-1d9l3qv")},m(a,c){x(a,e,c),p(e,n),p(e,r),p(e,s),p(s,o)},p(a,c){c&4&&i!==(i=a[23].message+"")&&ke(o,i)},i:V,o:V,d(a){a&&$(e)}}}function eb(t){let e,n,r=t[5],s=[];for(let o=0;o<r.length;o+=1)s[o]=$l(Ll(t,r,o));const i=o=>R(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=kr()},m(o,a){for(let c=0;c<s.length;c+=1)s[c].m(o,a);x(o,e,a),n=!0},p(o,a){if(a&424){r=o[5];let c;for(c=0;c<r.length;c+=1){const l=Ll(o,r,c);s[c]?(s[c].p(l,a),A(s[c],1)):(s[c]=$l(l),s[c].c(),A(s[c],1),s[c].m(e.parentNode,e))}for(Ne(),c=r.length;c<s.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)A(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)R(s[a]);n=!1},d(o){Mt(s,o),o&&$(e)}}}function $l(t){let e,n;function r(){return t[16](t[20])}return e=new JE({props:{tag:t[20]}}),e.$on("click",r),{c(){se(e.$$.fragment)},m(s,i){te(e,s,i),n=!0},p(s,i){t=s;const o={};i&32&&(o.tag=t[20]),e.$set(o)},i(s){n||(A(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function tb(t){let e,n,r;return n=new jE({}),{c(){e=v("div"),se(n.$$.fragment),f(e,"class","hint-container svelte-1d9l3qv")},m(s,i){x(s,e,i),te(n,e,null),r=!0},p:V,i(s){r||(A(n.$$.fragment,s),r=!0)},o(s){R(n.$$.fragment,s),r=!1},d(s){s&&$(e),ne(n)}}}function nb(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,w,E;o=new VE({}),o.$on("change",t[12]),c=new xE({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[13]);let C={ctx:t,current:null,token:null,hasCatch:!0,pending:tb,then:eb,catch:ZE,error:23,blocks:[,,,]};return Ya(g=t[2],C),{c(){e=v("div"),n=v("i"),r=L(),s=v("input"),i=L(),se(o.$$.fragment),a=L(),se(c.$$.fragment),l=L(),u=v("i"),h=L(),d=v("ol"),C.block.c(),f(n,"class","codicon codicon-search"),f(s,"type","text"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-1d9l3qv"),f(u,"tabindex","0"),f(u,"class",pt("codicon codicon-question")+" svelte-1d9l3qv"),f(d,"class","svelte-1d9l3qv"),Xe(d,"open",t[4]),f(e,"class","searchbar svelte-1d9l3qv"),Xe(e,"open",t[4])},m(I,b){x(I,e,b),p(e,n),p(e,r),p(e,s),mn(s,t[0]),p(e,i),te(o,e,null),p(e,a),te(c,e,null),p(e,l),p(e,u),p(e,h),p(e,d),C.block.m(d,C.anchor=null),C.mount=()=>d,C.anchor=null,m=!0,w||(E=[re(s,"input",t[9]),re(s,"blur",t[10]),re(s,"focus",t[11]),re(u,"click",t[14]),re(u,"keyup",function(){nu(on(t[15]))&&on(t[15]).apply(this,arguments)}),re(e,"blur",t[17])],w=!0)},p(I,[b]){t=I,b&1&&s.value!==t[0]&&mn(s,t[0]);const O={};b&2&&(O.active=!t[1]),c.$set(O),C.ctx=t,b&4&&g!==(g=t[2])&&Ya(g,C)||Zf(C,t,b),b&16&&Xe(d,"open",t[4]),b&16&&Xe(e,"open",t[4])},i(I){m||(A(o.$$.fragment,I),A(c.$$.fragment,I),A(C.block),m=!0)},o(I){R(o.$$.fragment,I),R(c.$$.fragment,I);for(let b=0;b<3;b+=1){const O=C.blocks[b];R(O)}m=!1},d(I){I&&$(e),ne(o),ne(c),C.block.d(),C.token=null,C=null,w=!1,We(E)}}}function rb(t,e,n){let r,s;et(t,Sr,k=>n(18,r=k)),et(t,Ht,k=>n(6,s=k));const i=It();let o,a="",c=!0,l="+",u=!1,h=[];async function d(k,M){n(4,u=!0),n(5,h=[...r.supertags.filter(j=>j.name.toLowerCase().includes(M.toLowerCase())).map(j=>new Nf(j.name,Object.keys(j.tags).length,"supertag")),...await zE(M,k)])}const g=()=>{n(0,a=""),n(5,h=[]),n(4,u=!1)};function m(){a=this.value,n(0,a)}const w=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(4,u=!1)},E=()=>{n(4,u=!0)},C=k=>{n(3,l=k.detail)},I=()=>{n(1,c=!c)},b=()=>{Qa(Ht,s="help",s)},O=()=>{Qa(Ht,s="help",s)},y=k=>{i("pick",k.toActiveTag(l)),g()},U=()=>{n(4,u=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,h=[]),a!==""&&n(2,o=d(c,a)))},[a,c,o,l,u,h,s,i,g,m,w,E,C,I,b,O,y,U]}class sb extends he{constructor(e){super(),ue(this,e,rb,nb,le,{})}}function ib(t){let e,n,r,s=Pt(t[0].name)+"",i,o,a=Ot(t[0].count)+"",c,l,u,h,d,g;return n=new Pf({props:{type:t[0].type}}),{c(){e=v("li"),se(n.$$.fragment),r=L(),i=fe(s),o=fe(`
  (`),c=fe(a),l=fe(")"),f(e,"class",u=pt(Hs[t[0].modifier])+" svelte-apze1c"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Xe(e,"no-icon",t[0].type==="general")},m(m,w){x(m,e,w),te(n,e,null),p(e,r),p(e,i),p(e,o),p(e,c),p(e,l),h=!0,d||(g=[re(e,"click",t[2]),re(e,"contextmenu",Hf(t[3]))],d=!0)},p(m,[w]){const E={};w&1&&(E.type=m[0].type),n.$set(E),(!h||w&1)&&s!==(s=Pt(m[0].name)+"")&&ke(i,s),(!h||w&1)&&a!==(a=Ot(m[0].count)+"")&&ke(c,a),(!h||w&1&&u!==(u=pt(Hs[m[0].modifier])+" svelte-apze1c"))&&f(e,"class",u),w&1&&Xe(e,"no-icon",m[0].type==="general")},i(m){h||(A(n.$$.fragment,m),h=!0)},o(m){R(n.$$.fragment,m),h=!1},d(m){m&&$(e),ne(n),d=!1,We(g)}}}function ob(t,e,n){let{tag:r}=e;const s=It(),i=()=>s("click"),o=()=>s("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,r=a.tag)},[r,s,i,o]}class Mf extends he{constructor(e){super(),ue(this,e,ob,ib,le,{tag:0})}}function ab(t){let e;return{c(){e=v("div")},m(n,r){x(n,e,r),t[1](e)},p:V,i:V,o:V,d(n){n&&$(e),t[1](null)}}}function cb(t,e,n){const r=It(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&(console.debug("Triggered infinite loading"),r("visible"))},{rootMargin:"1250px"});let i;function o(a){wn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class lb extends he{constructor(e){super(),ue(this,e,cb,ab,le,{})}}var ub="/assets/shironeko-confused.4071d5b2.png";function hb(t){let e,n,r,s,i;return{c(){e=v("div"),n=v("img"),s=L(),i=v("span"),i.textContent="No results found",kn(n.src,r=ub)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){x(o,e,a),p(e,n),p(e,s),p(e,i)},p:V,i:V,o:V,d(o){o&&$(e)}}}class db extends he{constructor(e){super(),ue(this,e,null,hb,le,{})}}var fb="/assets/shironeko-x.c28cad00.png";function gb(t){let e,n,r,s,i;return{c(){e=v("div"),n=v("img"),s=L(),i=v("span"),i.textContent="You have reached the end",kn(n.src,r=fb)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){x(o,e,a),p(e,n),p(e,s),p(e,i)},p:V,i:V,o:V,d(o){o&&$(e)}}}class pb extends he{constructor(e){super(),ue(this,e,null,gb,le,{})}}class mb{constructor(e,n){this.count=e,this.posts=n,Object.freeze(this)}}class yb{constructor(e,n,r,s,i,o,a,c,l,u,h,d,g,m,w,E,C,I,b,O,y,U,k,M,j,P){this.preview_url=e,this.sample_url=n,this.file_url=r,this.created_at=s,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=g,this.preview_width=m,this.preview_height=w,this.rating=E,this.sample_height=C,this.sample_width=I,this.score=b,this.source=O,this.status=y,this.tags=U,this.width=k,this.comments_url=M,this.owner_url=j,this.type=P,Object.freeze(this)}}const vb=Object.freeze(["id","score"]),_b=t=>vb.includes(t),Lf=20,wb="https://r34-json.herokuapp.com/v2";let Ib=null;const Eb=async(t,e,n,r)=>{if(!bb(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!Tb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!_b(n))throw new TypeError("Invalid sort property passed to getPage");if(!Sb(r))throw new TypeError("Invalid minimum score passed to getPage");const s=kb(e,n,r),i=await Df(Ab(t,s),Ib);if(!i.ok)throw new Error(`getPage failed with http status ${i.status}`);const o=await i.json();if(!Array.isArray(o.posts))throw new Error(o);return new mb(o.count,o.posts.map(a=>new yb(a.preview_url,a.sample_url,a.file_url,a.created_at,a.has_children,a.md5,a.height,a.id,a.change,a.creator_id,a.has_notes,a.has_comments,a.parent_id,a.preview_width,a.preview_height,a.rating,a.sample_height,a.sample_width,a.score,a.source,a.status,a.tags,a.width,a.comments_url,a.owner_url,a.type)))},bb=t=>typeof t=="number"&&t>=0,Tb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof bi)),Sb=t=>typeof t=="number"&&t>=0,kb=(t,e,n)=>{const r=t.reduce((i,o)=>(o.modifier==="~"?i.optional.push(o):i.other.push(o),i),{optional:[],other:[]}),s=[...r.other.map(i=>i.serialize()),`sort:${e}:desc`,`score:>=${n}`].join("+");return r.optional.length==0?s:`${s}+( ${r.optional.map(i=>i.serialize()).join(" ~ ")} )`},Ab=(t,e)=>{const n=`${wb}/posts?limit=${Lf}&pid=${t}`;return e===""?n:`${n}&tags=${e}`};function Cb(t){let e,n,r;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-2tve8k"),Xe(e,"visible",t[0])},m(s,i){x(s,e,i),n||(r=re(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&Xe(e,"visible",s[0])},i:V,o:V,d(s){s&&$(e),n=!1,r()}}}function Db(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>1e3),r=a};return Wf(()=>{document.addEventListener("scroll",i,{passive:!0})}),Qf(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class Rb extends he{constructor(e){super(),ue(this,e,Db,Cb,le,{})}}const Nb=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:r}=$n(t);return{subscribe:e,addPage(s){n(i=>({count:s.count,pages:[...i.pages,s.posts],nextPage:i.nextPage+1}))},reset(){r(t)}}};var Xi=Nb();function xl(t,e,n){const r=t.slice();return r[9]=e[n],r}function Ul(t){let e,n;return e=new Mf({props:{tag:t[9]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Ob(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,w,E,C,I,b,O,y,U,k,M,j=t[2],P=[];for(let D=0;D<j.length;D+=1)P[D]=Ul(xl(t,j,D));const oe=D=>R(P[D],1,1,()=>{P[D]=null});return y=new Ti({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",icon:"plus",text:"Create supertag",disabled:!t[3]}}),y.$on("click",t[8]),{c(){e=v("dialog"),n=v("h3"),n.textContent="Create Supertag",r=L(),s=v("i"),i=L(),o=v("div"),a=v("label"),a.textContent="Name",c=L(),l=v("input"),u=L(),h=v("div"),d=v("label"),d.textContent="Description",g=L(),m=v("textarea"),w=L(),E=v("div"),C=v("span"),C.textContent="Tags",I=L(),b=v("ol");for(let D=0;D<P.length;D+=1)P[D].c();O=L(),se(y.$$.fragment),f(s,"tabindex","0"),f(s,"class",pt("codicon codicon-close")+" svelte-64l7g"),f(a,"for","supertag-name"),f(a,"class","svelte-64l7g"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-64l7g"),f(o,"class","svelte-64l7g"),f(d,"for","supertag-description"),f(d,"class","svelte-64l7g"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-64l7g"),f(h,"class","svelte-64l7g"),f(C,"class","svelte-64l7g"),f(b,"class","svelte-64l7g"),f(E,"class","svelte-64l7g"),f(e,"class","svelte-64l7g")},m(D,ae){x(D,e,ae),p(e,n),p(e,r),p(e,s),p(e,i),p(e,o),p(o,a),p(o,c),p(o,l),mn(l,t[0]),p(e,u),p(e,h),p(h,d),p(h,g),p(h,m),mn(m,t[1]),p(e,w),p(e,E),p(E,C),p(E,I),p(E,b);for(let q=0;q<P.length;q+=1)P[q].m(b,null);p(e,O),te(y,e,null),U=!0,k||(M=[re(s,"click",t[5]),re(s,"keyup",on(t[5])),re(l,"input",t[6]),re(m,"input",t[7])],k=!0)},p(D,[ae]){if(ae&1&&l.value!==D[0]&&mn(l,D[0]),ae&2&&mn(m,D[1]),ae&4){j=D[2];let me;for(me=0;me<j.length;me+=1){const X=xl(D,j,me);P[me]?(P[me].p(X,ae),A(P[me],1)):(P[me]=Ul(X),P[me].c(),A(P[me],1),P[me].m(b,null))}for(Ne(),me=j.length;me<P.length;me+=1)oe(me);Oe()}const q={};ae&8&&(q.title=D[3]?"Click to create supertag":"Enter a valid name to continue"),ae&8&&(q.disabled=!D[3]),y.$set(q)},i(D){if(!U){for(let ae=0;ae<j.length;ae+=1)A(P[ae]);A(y.$$.fragment,D),U=!0}},o(D){P=P.filter(Boolean);for(let ae=0;ae<P.length;ae+=1)R(P[ae]);R(y.$$.fragment,D),U=!1},d(D){D&&$(e),Mt(P,D),ne(y),k=!1,We(M)}}}function Pb(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=It(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Of(s,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=Yr(s))},[s,i,o,r,a,c,l,u,h]}class Mb extends he{constructor(e){super(),ue(this,e,Pb,Ob,le,{name:0,description:1,tags:2})}}function Fl(t,e,n){const r=t.slice();return r[18]=e[n],r}function Vl(t,e,n){const r=t.slice();return r[21]=e[n],r[23]=n,r}function Bl(t){let e,n,r,s=t[3],i=[];for(let c=0;c<s.length;c+=1)i[c]=jl(Vl(t,s,c));const o=c=>R(i[c],1,1,()=>{i[c]=null});let a=t[3].length>1&&ql(t);return{c(){e=v("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=L(),a&&a.c(),f(e,"class","svelte-1toz0qq")},m(c,l){x(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);p(e,n),a&&a.m(e,null),r=!0},p(c,l){if(l&8){s=c[3];let u;for(u=0;u<s.length;u+=1){const h=Vl(c,s,u);i[u]?(i[u].p(h,l),A(i[u],1)):(i[u]=jl(h),i[u].c(),A(i[u],1),i[u].m(e,n))}for(Ne(),u=s.length;u<i.length;u+=1)o(u);Oe()}c[3].length>1?a?a.p(c,l):(a=ql(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)A(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)R(i[l]);r=!1},d(c){c&&$(e),Mt(i,c),a&&a.d()}}}function jl(t){let e,n;function r(){return t[8](t[23])}function s(){return t[9](t[21])}return e=new Mf({props:{tag:t[21]}}),e.$on("click",r),e.$on("contextmenu",s),{c(){se(e.$$.fragment)},m(i,o){te(e,i,o),n=!0},p(i,o){t=i;const a={};o&8&&(a.tag=t[21]),e.$set(a)},i(i){n||(A(e.$$.fragment,i),n=!0)},o(i){R(e.$$.fragment,i),n=!1},d(i){ne(e,i)}}}function ql(t){let e,n,r;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1toz0qq"></i>',f(e,"class","add-supertag svelte-1toz0qq"),f(e,"title","Click to create a new supertag")},m(s,i){x(s,e,i),n||(r=re(e,"click",t[10]),n=!0)},p:V,d(s){s&&$(e),n=!1,r()}}}function Lb(t){let e,n;return e=new db({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:V,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function $b(t){let e,n=Ot(t[4].count)+"",r,s,i,o,a,c,l,u,h,d=t[4].pages,g=[];for(let I=0;I<d.length;I+=1)g[I]=zl(Fl(t,d,I));const m=I=>R(g[I],1,1,()=>{g[I]=null}),w=[Ub,xb],E=[];function C(I,b){return I[4].pages.length<I[4].count/Lf?0:1}return c=C(t),l=E[c]=w[c](t),{c(){e=v("p"),r=fe(n),s=fe(" results"),i=L(),o=v("ol");for(let I=0;I<g.length;I+=1)g[I].c();a=L(),l.c(),u=kr(),f(e,"class","count svelte-1toz0qq"),f(o,"class","svelte-1toz0qq")},m(I,b){x(I,e,b),p(e,r),p(e,s),x(I,i,b),x(I,o,b);for(let O=0;O<g.length;O+=1)g[O].m(o,null);x(I,a,b),E[c].m(I,b),x(I,u,b),h=!0},p(I,b){if((!h||b&16)&&n!==(n=Ot(I[4].count)+"")&&ke(r,n),b&16){d=I[4].pages;let y;for(y=0;y<d.length;y+=1){const U=Fl(I,d,y);g[y]?(g[y].p(U,b),A(g[y],1)):(g[y]=zl(U),g[y].c(),A(g[y],1),g[y].m(o,null))}for(Ne(),y=d.length;y<g.length;y+=1)m(y);Oe()}let O=c;c=C(I),c===O?E[c].p(I,b):(Ne(),R(E[O],1,1,()=>{E[O]=null}),Oe(),l=E[c],l?l.p(I,b):(l=E[c]=w[c](I),l.c()),A(l,1),l.m(u.parentNode,u))},i(I){if(!h){for(let b=0;b<d.length;b+=1)A(g[b]);A(l),h=!0}},o(I){g=g.filter(Boolean);for(let b=0;b<g.length;b+=1)R(g[b]);R(l),h=!1},d(I){I&&$(e),I&&$(i),I&&$(o),Mt(g,I),I&&$(a),E[c].d(I),I&&$(u)}}}function zl(t){let e,n;return e=new OE({props:{posts:t[18]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&16&&(i.posts=r[18]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function xb(t){let e,n;return e=new pb({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:V,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Ub(t){let e,n;return e=new lb({}),e.$on("visible",t[6]),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:V,i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Hl(t){let e,n;return e=new Mb({props:{tags:t[3]}}),e.$on("submit",t[14]),e.$on("close",t[15]),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&8&&(i.tags=r[3]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Fb(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,w,E,C,I,b,O,y,U,k,M,j,P,oe,D,ae;s=new sb({}),s.$on("pick",t[7]);let q=t[3].length&&Bl(t);c=new Ti({props:{title:"Click to search with active tags",icon:"search",text:"Search"}}),c.$on("click",t[11]);const me=[$b,Lb],X=[];function be(G,Te){return G[4].count?0:G[4].count===0?1:-1}~(y=be(t))&&(U=X[y]=me[y](t)),M=new Rb({});let Y=t[2]&&Hl(t);return{c(){e=v("div"),n=v("h1"),n.textContent="kurosearch",r=L(),se(s.$$.fragment),i=L(),q&&q.c(),o=L(),a=v("div"),se(c.$$.fragment),l=L(),u=v("div"),h=v("select"),d=v("option"),d.textContent="New posts",g=v("option"),g.textContent="Popular posts",m=L(),w=v("select"),E=v("option"),E.textContent="No minimum score",C=v("option"),C.textContent="Min 10 likes",I=v("option"),I.textContent="Min 100 likes",b=v("option"),b.textContent="Min 1000 likes",O=L(),U&&U.c(),k=L(),se(M.$$.fragment),j=L(),Y&&Y.c(),P=kr(),f(n,"class","svelte-1toz0qq"),f(a,"class","sort-row svelte-1toz0qq"),d.__value="id",d.value=d.__value,g.__value="score",g.value=g.__value,f(h,"class","svelte-1toz0qq"),t[0]===void 0&&An(()=>t[12].call(h)),E.__value=0,E.value=E.__value,C.__value=10,C.value=C.__value,I.__value=100,I.value=I.__value,b.__value=1e3,b.value=b.__value,f(w,"class","svelte-1toz0qq"),t[1]===void 0&&An(()=>t[13].call(w)),f(u,"class","sort-row svelte-1toz0qq"),f(e,"class","search-config svelte-1toz0qq")},m(G,Te){x(G,e,Te),p(e,n),p(e,r),te(s,e,null),p(e,i),q&&q.m(e,null),p(e,o),p(e,a),te(c,a,null),p(e,l),p(e,u),p(u,h),p(h,d),p(h,g),yn(h,t[0]),p(u,m),p(u,w),p(w,E),p(w,C),p(w,I),p(w,b),yn(w,t[1]),x(G,O,Te),~y&&X[y].m(G,Te),x(G,k,Te),te(M,G,Te),x(G,j,Te),Y&&Y.m(G,Te),x(G,P,Te),oe=!0,D||(ae=[re(h,"change",t[12]),re(w,"change",t[13])],D=!0)},p(G,[Te]){G[3].length?q?(q.p(G,Te),Te&8&&A(q,1)):(q=Bl(G),q.c(),A(q,1),q.m(e,o)):q&&(Ne(),R(q,1,1,()=>{q=null}),Oe()),Te&1&&yn(h,G[0]),Te&2&&yn(w,G[1]);let Si=y;y=be(G),y===Si?~y&&X[y].p(G,Te):(U&&(Ne(),R(X[Si],1,1,()=>{X[Si]=null}),Oe()),~y?(U=X[y],U?U.p(G,Te):(U=X[y]=me[y](G),U.c()),A(U,1),U.m(k.parentNode,k)):U=null),G[2]?Y?(Y.p(G,Te),Te&4&&A(Y,1)):(Y=Hl(G),Y.c(),A(Y,1),Y.m(P.parentNode,P)):Y&&(Ne(),R(Y,1,1,()=>{Y=null}),Oe())},i(G){oe||(A(s.$$.fragment,G),A(q),A(c.$$.fragment,G),A(U),A(M.$$.fragment,G),A(Y),oe=!0)},o(G){R(s.$$.fragment,G),R(q),R(c.$$.fragment,G),R(U),R(M.$$.fragment,G),R(Y),oe=!1},d(G){G&&$(e),ne(s),q&&q.d(),ne(c),G&&$(O),~y&&X[y].d(G),G&&$(k),ne(M,G),G&&$(j),Y&&Y.d(G),G&&$(P),D=!1,We(ae)}}}function Vb(t,e,n){let r,s,i;et(t,Sr,y=>n(16,r=y)),et(t,kt,y=>n(3,s=y)),et(t,Xi,y=>n(4,i=y));let o="id",a=0,c=!1;const l=async()=>(Xi.reset(),u()),u=async()=>{try{const y=h(),U=await Eb(i.nextPage,y,o,a);Xi.addPage(U)}catch(y){console.warn(y)}},h=()=>s.flatMap(y=>y.type==="supertag"?r.supertags.find(U=>U.name===y.name).tags:y.toSearchableTag()),d=y=>kt.addOrReplace(y.detail),g=y=>kt.removeByIndex(y),m=y=>kt.addOrReplace(new zs(kf(y.modifier),y.name,y.count,y.type)),w=()=>{n(2,c=!0)},E=()=>l();function C(){o=Zi(this),n(0,o)}function I(){a=Zi(this),n(1,a)}return[o,a,c,s,i,l,u,d,g,m,w,E,C,I,y=>{Sr.addSupertag(y.detail),kt.set([new zs("+",y.detail.name,y.detail.tags.length,"supertag")])},()=>{n(2,c=!1)}]}class Bb extends he{constructor(e){super(),ue(this,e,Vb,Fb,le,{})}}const{subscribe:jb,set:qb}=$n("dark");var Kl={subscribe:jb,set(t){qb(t),zb(t)}};const zb=t=>{document.documentElement.classList.replace(Hb(t),t)},Hb=t=>t==="dark"?"light":"dark";function Kb(t){let e,n,r,s,i,o,a;return{c(){e=v("label"),n=fe(`Theme:
  `),r=v("select"),s=v("option"),s.textContent="Dark",i=v("option"),i.textContent="Light",s.__value="dark",s.value=s.__value,i.__value="light",i.value=i.__value,t[0]===void 0&&An(()=>t[1].call(r))},m(c,l){x(c,e,l),p(e,n),p(e,r),p(r,s),p(r,i),yn(r,t[0]),o||(a=re(r,"change",t[1]),o=!0)},p(c,[l]){l&1&&yn(r,c[0])},i:V,o:V,d(c){c&&$(e),o=!1,a()}}}function Gb(t,e,n){let r;et(t,Kl,i=>n(0,r=i));function s(){r=Zi(this),Kl.set(r)}return[r,s]}class Wb extends he{constructor(e){super(),ue(this,e,Gb,Kb,le,{})}}function Qb(t){let e;return{c(){e=v("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,f(e,"id","tags")},m(n,r){x(n,e,r)},p:V,i:V,o:V,d(n){n&&$(e)}}}class Xb extends he{constructor(e){super(),ue(this,e,null,Qb,le,{})}}function Yb(t){let e,n=Pt(t[0].name)+"",r,s;return{c(){e=v("li"),r=fe(n),f(e,"class",s=pt(Hs[t[0].modifier])+" svelte-1a1wcxu")},m(i,o){x(i,e,o),p(e,r)},p(i,[o]){o&1&&n!==(n=Pt(i[0].name)+"")&&ke(r,n),o&1&&s!==(s=pt(Hs[i[0].modifier])+" svelte-1a1wcxu")&&f(e,"class",s)},i:V,o:V,d(i){i&&$(e)}}}function Jb(t,e,n){let{tag:r}=e;return t.$$set=s=>{"tag"in s&&n(0,r=s.tag)},[r]}class Zb extends he{constructor(e){super(),ue(this,e,Jb,Yb,le,{tag:0})}}function Gl(t,e,n){const r=t.slice();return r[4]=e[n],r}function Wl(t){let e,n;return e=new Zb({props:{tag:t[4]}}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=r[4]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function eT(t){let e,n,r=t[0].name+"",s,i,o,a=Object.keys(t[0].tags).length+"",c,l,u,h,d,g,m,w,E=t[0].description+"",C,I,b,O,y,U,k=t[0].tags,M=[];for(let P=0;P<k.length;P+=1)M[P]=Wl(Gl(t,k,P));const j=P=>R(M[P],1,1,()=>{M[P]=null});return{c(){e=v("li"),n=v("h3"),s=fe(r),i=L(),o=v("small"),c=fe(a),l=fe(" tags"),u=L(),h=v("i"),d=L(),g=v("i"),m=L(),w=v("span"),C=fe(E),I=L(),b=v("ol");for(let P=0;P<M.length;P+=1)M[P].c();f(n,"class","svelte-h29a8o"),f(o,"class","svelte-h29a8o"),f(h,"tabindex","0"),f(h,"class","codicon codicon-edit svelte-h29a8o"),f(g,"tabindex","0"),f(g,"class","codicon codicon-close svelte-h29a8o"),f(w,"class","svelte-h29a8o"),f(b,"class","svelte-h29a8o"),f(e,"class","svelte-h29a8o")},m(P,oe){x(P,e,oe),p(e,n),p(n,s),p(e,i),p(e,o),p(o,c),p(o,l),p(e,u),p(e,h),p(e,d),p(e,g),p(e,m),p(e,w),p(w,C),p(e,I),p(e,b);for(let D=0;D<M.length;D+=1)M[D].m(b,null);O=!0,y||(U=[re(h,"click",t[2]),re(h,"keyup",on(t[2])),re(g,"click",t[1]),re(g,"keyup",on(t[1]))],y=!0)},p(P,[oe]){if((!O||oe&1)&&r!==(r=P[0].name+"")&&ke(s,r),(!O||oe&1)&&a!==(a=Object.keys(P[0].tags).length+"")&&ke(c,a),(!O||oe&1)&&E!==(E=P[0].description+"")&&ke(C,E),oe&1){k=P[0].tags;let D;for(D=0;D<k.length;D+=1){const ae=Gl(P,k,D);M[D]?(M[D].p(ae,oe),A(M[D],1)):(M[D]=Wl(ae),M[D].c(),A(M[D],1),M[D].m(b,null))}for(Ne(),D=k.length;D<M.length;D+=1)j(D);Oe()}},i(P){if(!O){for(let oe=0;oe<k.length;oe+=1)A(M[oe]);O=!0}},o(P){M=M.filter(Boolean);for(let oe=0;oe<M.length;oe+=1)R(M[oe]);O=!1},d(P){P&&$(e),Mt(M,P),y=!1,We(U)}}}function tT(t,e,n){let{supertag:r}=e;const s=It(),i=()=>s("remove",r),o=()=>s("edit",r);return t.$$set=a=>{"supertag"in a&&n(0,r=a.supertag)},[r,i,o]}class nT extends he{constructor(e){super(),ue(this,e,tT,eT,le,{supertag:0})}}function Ql(t,e,n){const r=t.slice();return r[5]=e[n],r}function rT(t){let e,n,r,s,i,o,a;return o=new Ti({props:{icon:"sign-in",text:"Sign in with Google",title:"Click to sign in with your Google account"}}),o.$on("click",t[4]),{c(){e=v("div"),n=v("p"),n.textContent="You are currently not signed in.",r=L(),s=v("br"),i=L(),se(o.$$.fragment)},m(c,l){x(c,e,l),p(e,n),p(e,r),p(e,s),p(e,i),te(o,e,null),a=!0},p:V,i(c){a||(A(o.$$.fragment,c),a=!0)},o(c){R(o.$$.fragment,c),a=!1},d(c){c&&$(e),ne(o)}}}function sT(t){let e,n,r,s,i,o,a,c,l,u,h=t[0].user.displayName+"",d,g,m,w,E,C=t[0].user.email+"",I,b,O,y,U,k,M,j,P,oe;m=new Ti({props:{icon:"sign-out",text:"Sign out",title:"Click to sign out"}}),m.$on("click",t[2]);let D=t[1].supertags.length===0&&Xl(),ae=t[1].supertags,q=[];for(let X=0;X<ae.length;X+=1)q[X]=Yl(Ql(t,ae,X));const me=X=>R(q[X],1,1,()=>{q[X]=null});return{c(){e=v("div"),n=v("div"),r=v("h2"),r.textContent="Signed in as",s=L(),i=v("div"),o=v("img"),c=L(),l=v("div"),u=v("span"),d=fe(h),g=L(),se(m.$$.fragment),w=L(),E=v("span"),I=fe(C),b=L(),O=v("div"),y=v("h2"),y.textContent="Your supertags",U=L(),k=v("div"),M=L(),D&&D.c(),j=L(),P=v("ul");for(let X=0;X<q.length;X+=1)q[X].c();f(o,"class","profile-picture svelte-6r5uhe"),kn(o.src,a=t[0].user.photoURL)||f(o,"src",a),f(o,"alt","Profile"),f(u,"class","svelte-6r5uhe"),f(l,"class","name-area svelte-6r5uhe"),f(i,"class","overview svelte-6r5uhe"),f(k,"class","supertags"),f(P,"class","svelte-6r5uhe"),f(e,"class","account-view svelte-6r5uhe")},m(X,be){x(X,e,be),p(e,n),p(n,r),p(n,s),p(n,i),p(i,o),p(i,c),p(i,l),p(l,u),p(u,d),p(l,g),te(m,l,null),p(i,w),p(i,E),p(E,I),p(e,b),p(e,O),p(O,y),p(O,U),p(O,k),p(O,M),D&&D.m(O,null),p(O,j),p(O,P);for(let Y=0;Y<q.length;Y+=1)q[Y].m(P,null);oe=!0},p(X,be){if((!oe||be&1&&!kn(o.src,a=X[0].user.photoURL))&&f(o,"src",a),(!oe||be&1)&&h!==(h=X[0].user.displayName+"")&&ke(d,h),(!oe||be&1)&&C!==(C=X[0].user.email+"")&&ke(I,C),X[1].supertags.length===0?D||(D=Xl(),D.c(),D.m(O,j)):D&&(D.d(1),D=null),be&2){ae=X[1].supertags;let Y;for(Y=0;Y<ae.length;Y+=1){const G=Ql(X,ae,Y);q[Y]?(q[Y].p(G,be),A(q[Y],1)):(q[Y]=Yl(G),q[Y].c(),A(q[Y],1),q[Y].m(P,null))}for(Ne(),Y=ae.length;Y<q.length;Y+=1)me(Y);Oe()}},i(X){if(!oe){A(m.$$.fragment,X);for(let be=0;be<ae.length;be+=1)A(q[be]);oe=!0}},o(X){R(m.$$.fragment,X),q=q.filter(Boolean);for(let be=0;be<q.length;be+=1)R(q[be]);oe=!1},d(X){X&&$(e),ne(m),D&&D.d(),Mt(q,X)}}}function Xl(t){let e;return{c(){e=v("span"),e.textContent="You don't have any supertags yet. You can create them when you have more than one tag active."},m(n,r){x(n,e,r)},d(n){n&&$(e)}}}function Yl(t){let e,n;return e=new nT({props:{supertag:t[5]}}),e.$on("remove",t[3]),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.supertag=r[5]),e.$set(i)},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function iT(t){let e,n,r,s;const i=[sT,rT],o=[];function a(c,l){return c[0].loggedIn?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=kr()},m(c,l){o[e].m(c,l),x(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Ne(),R(o[u],1,1,()=>{o[u]=null}),Oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),A(n,1),n.m(r.parentNode,r))},i(c){s||(A(n),s=!0)},o(c){R(n),s=!1},d(c){o[e].d(c),c&&$(r)}}}function oT(t,e,n){let r,s;return et(t,_s,c=>n(0,r=c)),et(t,Sr,c=>n(1,s=c)),[r,s,()=>_s.signOut(),c=>Sr.deleteSupertag(c.detail),()=>_s.signInWithGoogle()]}class aT extends he{constructor(e){super(),ue(this,e,oT,iT,le,{})}}class cT extends he{constructor(e){super(),ue(this,e,null,null,le,{})}}function lT(t){let e;return{c(){e=v("p"),e.textContent="You got lost..."},m(n,r){x(n,e,r)},i:V,o:V,d(n){n&&$(e)}}}function uT(t){let e,n;return e=new Xb({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function hT(t){let e,n;return e=new Wb({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function dT(t){let e,n;return e=new aT({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function fT(t){let e,n;return e=new Bb({}),{c(){se(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(A(e.$$.fragment,r),n=!0)},o(r){R(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function gT(t){let e,n,r,s,i,o,a,c;e=new cT({}),r=new oE({});const l=[fT,dT,hT,uT,lT],u=[];function h(d,g){return d[0]==="search"?0:d[0]==="account"?1:d[0]==="settings"?2:d[0]==="help"?3:4}return o=h(t),a=u[o]=l[o](t),{c(){se(e.$$.fragment),n=L(),se(r.$$.fragment),s=L(),i=v("main"),a.c()},m(d,g){te(e,d,g),x(d,n,g),te(r,d,g),x(d,s,g),x(d,i,g),u[o].m(i,null),c=!0},p(d,[g]){let m=o;o=h(d),o!==m&&(Ne(),R(u[m],1,1,()=>{u[m]=null}),Oe(),a=u[o],a||(a=u[o]=l[o](d),a.c()),A(a,1),a.m(i,null))},i(d){c||(A(e.$$.fragment,d),A(r.$$.fragment,d),A(a),c=!0)},o(d){R(e.$$.fragment,d),R(r.$$.fragment,d),R(a),c=!1},d(d){ne(e,d),d&&$(n),ne(r,d),d&&$(s),d&&$(i),u[o].d()}}}function pT(t,e,n){let r;return et(t,Ht,s=>n(0,r=s)),[r]}class mT extends he{constructor(e){super(),ue(this,e,pT,gT,le,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function Jl(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[r.port2])})}function yT(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Zl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function vT(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,i){if(s){if(typeof s=="string")return Zl(s,i);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Zl(s,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Yi=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Ji(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Kn=function(t,e){this.type=t,Object.assign(this,e)};function cs(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function _T(){}var wT={type:"SKIP_WAITING"};function eu(t,e){if(!e)return t&&t.then?t.then(_T):Promise.resolve()}var IT=function(t){var e,n;function r(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Yi,l.en=new Yi,l.on=new Yi,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!Ji(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,g=h.target,m=g.state,w=g===l.vn,E={sw:g,isExternal:w,originalEvent:h};!w&&l.mn&&(E.isUpdate=!0),l.dispatchEvent(new Kn(m,E)),m==="installed"?l.wn=self.setTimeout(function(){m==="installed"&&d.waiting===g&&l.dispatchEvent(new Kn("waiting",E))},200):m==="activating"&&(clearTimeout(l.wn),w||l.en.resolve(g))},l.dn=function(h){var d=l.hn,g=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Kn("controlling",{isExternal:g,originalEvent:h,sw:d,isUpdate:l.mn})),g||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,g=h.ports,m=h.source;return cs(l.getSW(),function(){l.an.has(m)&&l.dispatchEvent(new Kn("message",{data:d,originalEvent:h,ports:g,sw:m}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(g){return Promise.reject(g)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,i,o=r.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var g=h();return g&&g.then?g.then(d):d(g)}(function(){if(!l&&document.readyState!=="complete")return eu(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),cs(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&Ji(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Kn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?eu(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return cs(this.getSW(),function(c){return Jl(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Jl(this.fn.waiting,wT)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Ji(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return cs(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},s=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&yT(s.prototype,i),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,s=vT(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function ET(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new IT("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),o.register({immediate:e}).then(c=>{s==null||s(c)}).catch(c=>{i==null||i(c)})),a}new mT({target:document.getElementById("app")});ET();
