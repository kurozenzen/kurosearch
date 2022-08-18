var Lf=Object.defineProperty,$f=Object.defineProperties;var Uf=Object.getOwnPropertyDescriptors;var za=Object.getOwnPropertySymbols;var Ff=Object.prototype.hasOwnProperty,xf=Object.prototype.propertyIsEnumerable;var Ha=(t,e,n)=>e in t?Lf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ka=(t,e)=>{for(var n in e||(e={}))Ff.call(e,n)&&Ha(t,n,e[n]);if(za)for(var n of za(e))xf.call(e,n)&&Ha(t,n,e[n]);return t},Ga=(t,e)=>$f(t,Uf(e));const Vf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Vf();function B(){}function Bf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function nu(t){return t()}function Wa(){return Object.create(null)}function Ze(t){t.forEach(nu)}function ru(t){return typeof t=="function"}function le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Zr;function Sn(t,e){return Zr||(Zr=document.createElement("a")),Zr.href=e,t===Zr.href}function jf(t){return Object.keys(t).length===0}function qf(t,...e){if(t==null)return B;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function et(t,e,n){t.$$.on_destroy.push(qf(e,n))}function Gt(t){return t==null?"":t}function Qa(t,e,n){return t.set(n),e}function p(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function hn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function pe(t){return document.createTextNode(t)}function L(){return pe(" ")}function Ar(){return pe("")}function ie(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zf(t){return Array.from(t.childNodes)}function Re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pn(t,e){t.value=e==null?"":e}function mn(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ji(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Qe(t,e,n){t.classList[n?"add":"remove"](e)}function Hf(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let ar;function ut(t){ar=t}function Hs(){if(!ar)throw new Error("Function called outside component initialization");return ar}function Kf(t){Hs().$$.on_mount.push(t)}function Gf(t){Hs().$$.on_destroy.push(t)}function wt(){const t=Hs();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Hf(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const Gn=[],_n=[],us=[],Xa=[],Wf=Promise.resolve();let Zi=!1;function Qf(){Zi||(Zi=!0,Wf.then(Ro))}function kn(t){us.push(t)}const Si=new Set;let es=0;function Ro(){const t=ar;do{for(;es<Gn.length;){const e=Gn[es];es++,ut(e),Xf(e.$$)}for(ut(null),Gn.length=0,es=0;_n.length;)_n.pop()();for(let e=0;e<us.length;e+=1){const n=us[e];Si.has(n)||(Si.add(n),n())}us.length=0}while(Gn.length);for(;Xa.length;)Xa.pop()();Zi=!1,Si.clear(),ut(t)}function Xf(t){if(t.fragment!==null){t.update(),Ze(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(kn)}}const hs=new Set;let $t;function Ne(){$t={r:0,c:[],p:$t}}function Oe(){$t.r||Ze($t.c),$t=$t.p}function C(t,e){t&&t.i&&(hs.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(hs.has(t))return;hs.add(t),$t.c.push(()=>{hs.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Ya(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(Ne(),N(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),Oe())}):e.block.d(1),l.c(),C(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Ro()}if(Bf(t)){const s=Hs();if(t.then(i=>{ut(s),r(e.then,1,e.value,i),ut(null)},i=>{if(ut(s),r(e.catch,2,e.error,i),ut(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Yf(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function re(t){t&&t.c()}function te(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),r||kn(()=>{const c=i.map(nu).filter(ru);o?o.push(...c):Ze(c),t.$$.on_mount=[]}),a.forEach(kn)}function ne(t,e){const n=t.$$;n.fragment!==null&&(Ze(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jf(t,e){t.$$.dirty[0]===-1&&(Gn.push(t),Qf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,r,s,i,o,a=[-1]){const c=ar;ut(t);const l=t.$$={fragment:null,ctx:null,props:i,update:B,not_equal:s,bound:Wa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Wa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&Jf(t,h)),d}):[],l.update(),u=!0,Ze(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=zf(e.target);l.fragment&&l.fragment.l(h),h.forEach($)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),te(t,e.target,e.anchor,e.customElement),Ro()}ut(c)}class he{$destroy(){ne(this,1),this.$destroy=B}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!jf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dn=[];function $n(t,e=B){let n;const r=new Set;function s(a){if(le(t,a)&&(t=a,n)){const c=!dn.length;for(const l of r)l[1](),dn.push(l,t);if(c){for(let l=0;l<dn.length;l+=2)dn[l][0](dn[l+1]);dn.length=0}}}function i(a){s(a(t))}function o(a,c=B){const l=[a,c];return r.add(l),r.size===1&&(n=e(s)||B),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}const Zf=Object.freeze(["search","account","settings","help"]),eg=t=>Zf.includes(t),tg=()=>{const{subscribe:t,set:e}=$n("search");return{subscribe:t,navigateTo(n){if(!eg(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}};var qt=tg();function ng(t){let e,n,r,s,i,o;return{c(){e=hn("svg"),n=hn("g"),r=hn("path"),s=hn("defs"),i=hn("clipPath"),o=hn("path"),f(r,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(r,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){U(a,e,c),p(e,n),p(n,r),p(e,s),p(s,i),p(i,o)},p:B,i:B,o:B,d(a){a&&$(e)}}}class rg extends he{constructor(e){super(),ue(this,e,null,ng,le,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const su=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(su(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ig=function(t){const e=su(t);return iu.encodeByteArray(e,!0)},ou=function(t){return ig(t).replace(/\./g,"")},og=function(t){try{return iu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function au(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function No(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cg(){return ke().indexOf("Electron/")>=0}function lu(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lg(){return ke().indexOf("MSAppHost/")>=0}function uu(){return typeof indexedDB=="object"}function hu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ug(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="FirebaseError";class nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hg,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nt(s,a,r)}}function dg(t,e){return t.replace(fg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fg=/\{\$([^}]+)}/g;function gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ja(i)&&Ja(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ja(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pg(t,e){const n=new mg(t,e);return n.subscribe.bind(n)}class mg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ki),s.error===void 0&&(s.error=ki),s.complete===void 0&&(s.complete=ki);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ki(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=1e3,_g=2,wg=4*60*60*1e3,Ig=.5;function Za(t,e=vg,n=_g){const r=e*Math.pow(n,t),s=Math.round(Ig*r*(Math.random()-.5)*2);return Math.min(wg,r+s)}/**
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
 */class Eg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ag;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tg(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bg(t){return t===Mt?void 0:t}function Tg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const kg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ag=se.INFO,Cg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Dg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Cg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ks{constructor(e){this.name=e,this._logLevel=Ag,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Rg=(t,e)=>e.some(n=>t instanceof n);let ec,tc;function Ng(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Og(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const du=new WeakMap,eo=new WeakMap,fu=new WeakMap,Ai=new WeakMap,Oo=new WeakMap;function Pg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&du.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function Mg(t){if(eo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});eo.set(t,e)}let to={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lg(t){to=t(to)}function $g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ci(this),e,...n);return fu.set(r,e.sort?e.sort():[e]),St(r)}:Og().includes(t)?function(...e){return t.apply(Ci(this),e),St(du.get(this))}:function(...e){return St(t.apply(Ci(this),e))}}function Ug(t){return typeof t=="function"?$g(t):(t instanceof IDBTransaction&&Mg(t),Rg(t,Ng())?new Proxy(t,to):t)}function St(t){if(t instanceof IDBRequest)return Pg(t);if(Ai.has(t))return Ai.get(t);const e=Ug(t);return e!==t&&(Ai.set(t,e),Oo.set(e,t)),e}const Ci=t=>Oo.get(t);function gu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Fg=["get","getKey","getAll","getAllKeys","count"],xg=["put","add","delete","clear"],Di=new Map;function nc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Di.set(e,i),i}Lg(t=>Ga(Ka({},t),{get:(e,n,r)=>nc(e,n)||t.get(e,n,r),has:(e,n)=>!!nc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",rc="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Ks("@firebase/app"),jg="@firebase/app-compat",qg="@firebase/analytics-compat",zg="@firebase/analytics",Hg="@firebase/app-check-compat",Kg="@firebase/app-check",Gg="@firebase/auth",Wg="@firebase/auth-compat",Qg="@firebase/database",Xg="@firebase/database-compat",Yg="@firebase/functions",Jg="@firebase/functions-compat",Zg="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/firestore-compat",hp="firebase",dp="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="[DEFAULT]",fp={[no]:"fire-core",[jg]:"fire-core-compat",[zg]:"fire-analytics",[qg]:"fire-analytics-compat",[Kg]:"fire-app-check",[Hg]:"fire-app-check-compat",[Gg]:"fire-auth",[Wg]:"fire-auth-compat",[Qg]:"fire-rtdb",[Xg]:"fire-rtdb-compat",[Yg]:"fire-fn",[Jg]:"fire-fn-compat",[Zg]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,ro=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function at(t){const e=t.name;if(ro.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;ro.set(e,t);for(const n of Es.values())gp(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new on("app","Firebase",pp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=dp;function yp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});const s=Es.get(r);if(s){if(cr(t,s.options)&&cr(n,s.config))return s;throw Qt.create("duplicate-app",{appName:r})}const i=new Sg(r);for(const a of ro.values())i.addComponent(a);const o=new mp(t,n,i);return Es.set(r,o),o}function Po(t=pu){const e=Es.get(t);if(!e)throw Qt.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let s=(r=fp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}at(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",_p=1,lr="firebase-heartbeat-store";let Ri=null;function mu(){return Ri||(Ri=gu(vp,_p,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),Ri}async function wp(t){var e;try{return(await mu()).transaction(lr).objectStore(lr).get(yu(t))}catch(n){if(n instanceof nt)Wt.warn(n.message);else{const r=Qt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Wt.warn(r.message)}}}async function sc(t,e){var n;try{const s=(await mu()).transaction(lr,"readwrite");return await s.objectStore(lr).put(e,yu(t)),s.done}catch(r){if(r instanceof nt)Wt.warn(r.message);else{const s=Qt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Wt.warn(s.message)}}}function yu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ip=1024,Ep=30*24*60*60*1e3;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ic(),{heartbeatsToSend:n,unsentEntries:r}=Tp(this._heartbeatsCache.heartbeats),s=ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ic(){return new Date().toISOString().substring(0,10)}function Tp(t,e=Ip){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?hu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oc(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){at(new tt("platform-logger",e=>new Vg(e),"PRIVATE")),at(new tt("heartbeat",e=>new bp(e),"PRIVATE")),Xe(no,rc,t),Xe(no,rc,"esm2017"),Xe("fire-js","")}kp("");function Mo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=vu,_u=new on("auth","Firebase",vu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Ks("@firebase/auth");function ds(t,...e){ac.logLevel<=se.ERROR&&ac.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,...e){throw Lo(t,...e)}function rt(t,...e){return Lo(t,...e)}function wu(t,e,n){const r=Object.assign(Object.assign({},Ap()),{[e]:n});return new on("auth","Firebase",r).create(e,{appName:t.name})}function Cp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(t,"argument-error"),wu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _u.create(t,...e)}function H(t,e,...n){if(!t)throw Lo(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ds(e),new Error(e)}function pt(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function dt(t){pt(t instanceof Function,"Expected a class definition");let e=cc.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e){const n=an(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cr(i,e!=null?e:{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function Rp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Np(){return lc()==="http:"||lc()==="https:"}function lc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Np()||No()||"connection"in navigator)?navigator.onLine:!0}function Pp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=au()||cu()}get(){return Op()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Rr(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,s={}){return Eu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Cr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Iu.fetch()(bu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Eu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mp),e);try{const s=new $p(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ts(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ts(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ts(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wu(t,u,l);Je(t,u)}}catch(s){if(s instanceof nt)throw s;Je(t,"network-request-failed")}}async function Pr(t,e,n,r,s={}){const i=await Or(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$o(t.config,s):`${t.config.apiScheme}://${s}`}class $p{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),Lp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ts(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xp(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=Uo(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zn(Ni(s.auth_time)),issuedAtTime:Zn(Ni(s.iat)),expirationTime:Zn(Ni(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(t){return Number(t)*1e3}function Uo(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=og(r);return i?JSON.parse(i):(ds("Failed to decode base64 JWT payload"),null)}catch(i){return ds("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Vp(t){const e=Uo(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nt&&Bp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zn(this.lastLoginAt),this.creationTime=Zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ur(t,Fp(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hp(i.providerUserInfo):[],a=zp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qp(t){const e=xe(t);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hp(t){return t.map(e=>{var{providerId:n}=e,r=Mo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e){const n=await Eu(t,{},async()=>{const r=Cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Iu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Mo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xp(this,e)}reload(){return qp(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,Up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:k,isAnonymous:E,providerData:x,stsTokenManager:A}=n;H(b&&A,e,"internal-error");const M=hr.fromJSON(this.name,A);H(typeof b=="string",e,"internal-error"),It(h,e.name),It(d,e.name),H(typeof k=="boolean",e,"internal-error"),H(typeof E=="boolean",e,"internal-error"),It(g,e.name),It(m,e.name),It(v,e.name),It(I,e.name),It(D,e.name),It(w,e.name);const j=new zt({uid:b,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:E,photoURL:m,phoneNumber:g,tenantId:v,stsTokenManager:M,createdAt:D,lastLoginAt:w});return x&&Array.isArray(x)&&(j.providerData=x.map(P=>Object.assign({},P))),I&&(j._redirectEventId=I),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new hr;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bs(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Su.type="NONE";const uc=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=fs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wn(dt(uc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(uc);const o=fs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ru(e))return"Blackberry";if(Nu(e))return"Webos";if(Fo(e))return"Safari";if((e.includes("chrome/")||Au(e))&&!e.includes("edge/"))return"Chrome";if(Du(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(t=ke()){return/firefox\//i.test(t)}function Fo(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Au(t=ke()){return/crios\//i.test(t)}function Cu(t=ke()){return/iemobile/i.test(t)}function Du(t=ke()){return/android/i.test(t)}function Ru(t=ke()){return/blackberry/i.test(t)}function Nu(t=ke()){return/webos/i.test(t)}function Gs(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gp(t=ke()){var e;return Gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wp(){return lu()&&document.documentMode===10}function Ou(t=ke()){return Gs(t)||Du(t)||Nu(t)||Ru(t)||/windows phone/i.test(t)||Cu(t)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e=[]){let n;switch(t){case"Browser":n=hc(ke());break;case"Worker":n=`${hc(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class Xp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new Xp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await bs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new on("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mr(t){return xe(t)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=pg(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function Jp(t,e){return Or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function tm(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends xo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new dr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new dr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Zp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return em(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tm(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="http://localhost";class Xt extends xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Mo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sm(t){const e=Wn(Qn(t)).link,n=e?Wn(Qn(e)).deep_link_id:null,r=Wn(Qn(t)).deep_link_id;return(r?Wn(Qn(r)).link:null)||r||n||e||t}class Vo{constructor(e){var n,r,s,i,o,a;const c=Wn(Qn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=rm((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sm(e);try{return new Vo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(e,n){return dr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vo.parseLink(n);return H(r,"argument-error"),dr._fromEmailAndCode(e,r.code,r.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Bo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Lr{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Lr{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e){return Pr(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=fc(r);return new Yt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fc(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ts(e,n,r,s)}}function Mu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(t,i,e,r):i})}async function om(t,e,n=!1){const r=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await ur(t,Mu(s,i,e,t),n);H(o.idToken,s,"internal-error");const a=Uo(o.idToken);H(a,s,"internal-error");const{sub:c}=a;return H(t.uid===c,s,"user-mismatch"),Yt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Je(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t,e,n=!1){const r="signIn",s=await Mu(t,r,e),i=await Yt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cm(t,e){return Lu(Mr(t),e)}async function lm(t,e,n){const r=Mr(t),s=await im(r,{returnSecureToken:!0,email:e,password:n}),i=await Yt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function um(t,e,n){return cm(xe(t),Un.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e){return xe(t).setPersistence(e)}function $u(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function dm(t){return xe(t).signOut()}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){const t=ke();return Fo(t)||Gs(t)}const gm=1e3,pm=10;class Fu extends Uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fm()&&Qp(),this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fu.type="LOCAL";const xu=Fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vu.type="SESSION";const Bu=Vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ws(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await mm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=jo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function vm(t){st().location.href=t}/**
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
 */function ju(){return typeof st().WorkerGlobalScope!="undefined"&&typeof st().importScripts=="function"}async function _m(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Im(){return ju()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="firebaseLocalStorageDb",Em=1,ks="firebaseLocalStorage",zu="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qs(t,e){return t.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function bm(){const t=indexedDB.deleteDatabase(qu);return new $r(t).toPromise()}function io(){const t=indexedDB.open(qu,Em);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ks,{keyPath:zu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ks)?e(r):(r.close(),await bm(),e(await io()))})})}async function gc(t,e,n){const r=Qs(t,!0).put({[zu]:e,value:n});return new $r(r).toPromise()}async function Tm(t,e){const n=Qs(t,!1).get(e),r=await new $r(n).toPromise();return r===void 0?null:r.value}function pc(t,e){const n=Qs(t,!0).delete(e);return new $r(n).toPromise()}const Sm=800,km=3;class Hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await io(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Im()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _m(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await io();return await gc(e,Ss,"1"),await pc(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qs(s,!1).getAll();return new $r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hu.type="LOCAL";const Am=Hu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cm().appendChild(r)})}function Rm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rr(3e4,6e4);/**
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
 */function Ku(t,e){return e?dt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nm(t){return Lu(t.auth,new qo(t),t.bypassAuthState)}function Om(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),am(n,new qo(t),t.bypassAuthState)}async function Pm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),om(n,new qo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nm;case"linkViaPopup":case"linkViaRedirect":return Pm;case"reauthViaPopup":case"reauthViaRedirect":return Om;default:Je(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Rr(2e3,1e4);async function Lm(t,e,n){const r=Mr(t);Cp(t,e,Bo);const s=Ku(r,n);return new Ut(r,"signInViaPopup",e,s).executeNotNull()}class Ut extends Gu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="pendingRedirect",gs=new Map;class Um extends Gu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gs.get(this.auth._key());if(!e){try{const r=await Fm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gs.set(this.auth._key(),e)}return this.bypassAuthState||gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fm(t,e){const n=Bm(e),r=Vm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xm(t,e){gs.set(t._key(),e)}function Vm(t){return dt(t._redirectPersistence)}function Bm(t){return fs($m,t.config.apiKey,t.name)}async function jm(t,e,n=!1){const r=Mr(t),s=Ku(r,e),o=await new Um(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=10*60*1e3;class zm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qm&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wm=/^https?/;async function Qm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Km(t);for(const n of e)try{if(Xm(n))return}catch{}Je(t,"unauthorized-domain")}function Xm(t){const e=so(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wm.test(n))return!1;if(Gm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ym=new Rr(3e4,6e4);function yc(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jm(t){return new Promise((e,n)=>{var r,s,i;function o(){yc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yc(),n(rt(t,"network-request-failed"))},timeout:Ym.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=Rm("iframefcb");return st()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},Dm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ps=null,e})}let ps=null;function Zm(t){return ps=ps||Jm(t),ps}/**
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
 */const ey=new Rr(5e3,15e3),ty="__/auth/iframe",ny="emulator/auth/iframe",ry={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iy(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$o(e,ny):`https://${t.config.authDomain}/${ty}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=sy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Cr(r).slice(1)}`}async function oy(t){const e=await Zm(t),n=st().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:iy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ry,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},ey.get());function c(){st().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ay={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cy=500,ly=600,uy="_blank",hy="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dy(t,e,n,r=cy,s=ly){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ay),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=Au(l)?uy:n),ku(l)&&(e=e||hy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Gp(l)&&a!=="_self")return fy(e||"",a),new vc(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new vc(h)}function fy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gy="__/auth/handler",py="emulator/auth/handler";function _c(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Bo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Lr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${my(t)}?${Cr(a).slice(1)}`}function my({config:t}){return t.emulator?$o(t,py):`https://${t.authDomain}/${gy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="webStorageSupport";class yy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bu,this._completeRedirectFn=jm,this._overrideRedirectResult=xm}async _openPopup(e,n,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=_c(e,n,r,so(),s);return dy(e,o,jo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),vm(_c(e,n,r,so(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oy(e),r=new zm(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oi];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ou()||Fo()||Gs()}}const vy=yy;var wc="@firebase/auth",Ic="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Iy(t){at(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pu(t)},u=new Yp(a,c,l);return Rp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),at(new tt("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new _y(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(wc,Ic,wy(t)),Xe(wc,Ic,"esm2017")}/**
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
 */function Ey(t=Po()){const e=an(t,"auth");return e.isInitialized()?e.getImmediate():Dp(t,{popupRedirectResolver:vy,persistence:[Am,xu,Bu]})}Iy("Browser");const Qu="@firebase/installations",zo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=1e4,Yu=`w:${zo}`,Ju="FIS_v2",by="https://firebaseinstallations.googleapis.com/v1",Ty=60*60*1e3,Sy="installations",ky="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jt=new on(Sy,ky,Ay);function Zu(t){return t instanceof nt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh({projectId:t}){return`${by}/projects/${t}/installations`}function th(t){return{token:t.token,requestStatus:2,expiresIn:Dy(t.expiresIn),creationTime:Date.now()}}async function nh(t,e){const r=(await e.json()).error;return Jt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function rh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cy(t,{refreshToken:e}){const n=rh(t);return n.append("Authorization",Ry(e)),n}async function sh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Dy(t){return Number(t.replace("s","000"))}function Ry(t){return`${Ju} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=eh(t),s=rh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ju,appId:t.appId,sdkVersion:Yu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await sh(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:th(l.authToken)}}else throw await nh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=/^[cdef][\w-]{21}$/,oo="";function My(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ly(t);return Py.test(n)?n:oo}catch{return oo}}function Ly(t){return Oy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;function ah(t,e){const n=Xs(t);ch(n,e),$y(n,e)}function ch(t,e){const n=oh.get(t);if(!!n)for(const r of n)r(e)}function $y(t,e){const n=Uy();n&&n.postMessage({key:t,fid:e}),Fy()}let Ft=null;function Uy(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=t=>{ch(t.data.key,t.data.fid)}),Ft}function Fy(){oh.size===0&&Ft&&(Ft.close(),Ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firebase-installations-database",Vy=1,Zt="firebase-installations-store";let Pi=null;function Ho(){return Pi||(Pi=gu(xy,Vy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zt)}}})),Pi}async function As(t,e){const n=Xs(t),s=(await Ho()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ah(t,e.fid),e}async function lh(t){const e=Xs(t),r=(await Ho()).transaction(Zt,"readwrite");await r.objectStore(Zt).delete(e),await r.done}async function Ys(t,e){const n=Xs(t),s=(await Ho()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ah(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){let e;const n=await Ys(t.appConfig,r=>{const s=By(r),i=jy(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===oo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function By(t){const e=t||{fid:My(),registrationStatus:0};return uh(e)}function jy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zy(t)}:{installationEntry:e}}async function qy(t,e){try{const n=await Ny(t,e);return As(t.appConfig,n)}catch(n){throw Zu(n)&&n.customData.serverCode===409?await lh(t.appConfig):await As(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zy(t){let e=await Ec(t.appConfig);for(;e.registrationStatus===1;)await ih(100),e=await Ec(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ko(t);return r||n}return e}function Ec(t){return Ys(t,e=>{if(!e)throw Jt.create("installation-not-found");return uh(e)})}function uh(t){return Hy(t)?{fid:t.fid,registrationStatus:0}:t}function Hy(t){return t.registrationStatus===1&&t.registrationTime+Xu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky({appConfig:t,heartbeatServiceProvider:e},n){const r=Gy(t,n),s=Cy(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Yu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await sh(()=>fetch(r,a));if(c.ok){const l=await c.json();return th(l)}else throw await nh("Generate Auth Token",c)}function Gy(t,{fid:e}){return`${eh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t,e=!1){let n;const r=await Ys(t.appConfig,i=>{if(!hh(i))throw Jt.create("not-registered");const o=i.authToken;if(!e&&Xy(o))return i;if(o.requestStatus===1)return n=Wy(t,e),i;{if(!navigator.onLine)throw Jt.create("app-offline");const a=Jy(i);return n=Qy(t,a),a}});return n?await n:r.authToken}async function Wy(t,e){let n=await bc(t.appConfig);for(;n.authToken.requestStatus===1;)await ih(100),n=await bc(t.appConfig);const r=n.authToken;return r.requestStatus===0?Go(t,e):r}function bc(t){return Ys(t,e=>{if(!hh(e))throw Jt.create("not-registered");const n=e.authToken;return Zy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Qy(t,e){try{const n=await Ky(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await As(t.appConfig,r),n}catch(n){if(Zu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lh(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await As(t.appConfig,r)}throw n}}function hh(t){return t!==void 0&&t.registrationStatus===2}function Xy(t){return t.requestStatus===2&&!Yy(t)}function Yy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ty}function Jy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Zy(t){return t.requestStatus===1&&t.requestTime+Xu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ko(e);return r?r.catch(console.error):Go(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e=!1){const n=t;return await nv(n),(await Go(n,e)).token}async function nv(t){const{registrationPromise:e}=await Ko(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){if(!t||!t.options)throw Mi("App Configuration");if(!t.name)throw Mi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Mi(t){return Jt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="installations",sv="installations-internal",iv=t=>{const e=t.getProvider("app").getImmediate(),n=rv(e),r=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ov=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,dh).getImmediate();return{getId:()=>ev(n),getToken:s=>tv(n,s)}};function av(){at(new tt(dh,iv,"PUBLIC")),at(new tt(sv,ov,"PRIVATE"))}av();Xe(Qu,zo);Xe(Qu,zo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="analytics",cv="firebase_id",lv="origin",uv=60*1e3,hv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ks("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function dv(t,e){const n=document.createElement("script");n.src=`${fh}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function fv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function gv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await gh(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){He.error(a)}t("config",s,i)}async function pv(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await gh(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){He.error(i)}}function mv(t,e,n,r){async function s(i,o,a){try{i==="event"?await pv(t,e,n,o,a):i==="config"?await gv(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){He.error(c)}}return s}function yv(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=mv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function vv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(fh))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ye=new on("analytics","Analytics",_v);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=30,Iv=1e3;class Ev{constructor(e={},n=Iv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ph=new Ev;function bv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Tv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:bv(r)},i=hv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Sv(t,e=ph,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Cv;return setTimeout(async()=>{a.abort()},n!==void 0?n:uv),mh({appId:r,apiKey:s,measurementId:i},o,a,e)}async function mh(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=ph){var i,o;const{appId:a,measurementId:c}=t;try{await kv(r,e)}catch(l){if(c)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await Tv(t);return s.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Av(u)){if(s.deleteThrottleMetadata(a),c)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Za(n,s.intervalMillis,wv):Za(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,d),He.debug(`Calling attemptFetch again in ${h} millis`),mh(t,d,r,s)}}function kv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Av(t){if(!(t instanceof nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Cv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(){var t;if(uu())try{await hu()}catch(e){return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nv(t,e,n,r,s,i,o){var a;const c=Sv(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>He.error(g)),e.push(c);const l=Rv().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([c,l]);vv()||dv(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[lv]="firebase",d.update=!0,h!=null&&(d[cv]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.app=e}_delete(){return delete er[this.app.options.appId],Promise.resolve()}}let er={},Tc=[];const Sc={};let Li="dataLayer",Pv="gtag",kc,yh,Ac=!1;function Mv(){const t=[];if(No()&&t.push("This is a browser extension environment."),ug()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function Lv(t,e,n){Mv();const r=t.options.appId;if(!r)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(er[r]!=null)throw Ye.create("already-exists",{id:r});if(!Ac){fv(Li);const{wrappedGtag:i,gtagCore:o}=yv(er,Tc,Sc,Li,Pv);yh=i,kc=o,Ac=!0}return er[r]=Nv(t,Tc,Sc,e,kc,Li,n),new Ov(t)}function $v(t=Po()){t=xe(t);const e=an(t,Cs);return e.isInitialized()?e.getImmediate():Uv(t)}function Uv(t,e={}){const n=an(t,Cs);if(n.isInitialized()){const s=n.getImmediate();if(cr(e,n.getOptions()))return s;throw Ye.create("already-initialized")}return n.initialize({options:e})}function Fv(t,e,n,r){t=xe(t),Dv(yh,er[t.app.options.appId],e,n,r).catch(s=>He.error(s))}const Cc="@firebase/analytics",Dc="0.8.0";function xv(){at(new tt(Cs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Lv(r,s,n)},"PUBLIC")),at(new tt("analytics-internal",t,"PRIVATE")),Xe(Cc,Dc),Xe(Cc,Dc,"esm2017");function t(e){try{const n=e.getProvider(Cs).getImmediate();return{logEvent:(r,s,i)=>Fv(n,r,s,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}xv();var Vv="firebase",Bv="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(Vv,Bv,"app");var jv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Wo=Wo||{},K=jv||self;function Ds(){}function ao(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ur(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qv(t){return Object.prototype.hasOwnProperty.call(t,$i)&&t[$i]||(t[$i]=++zv)}var $i="closure_uid_"+(1e9*Math.random()>>>0),zv=0;function Hv(t,e,n){return t.call.apply(t.bind,arguments)}function Kv(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=Hv:Pe=Kv,Pe.apply(null,arguments)}function ns(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var Gv=0;Ot.prototype.s=!1;Ot.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Gv!=0)&&qv(this)};Ot.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_h=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Wv(t){e:{var e=x_;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rc(t){return Array.prototype.concat.apply([],arguments)}function Qo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rs(t){return/^[\s\xa0]*$/.test(t)}var Nc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function Ui(t,e){return t<e?-1:t>e?1:0}var Be;e:{var Oc=K.navigator;if(Oc){var Pc=Oc.userAgent;if(Pc){Be=Pc;break e}}Be=""}function Xo(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wh(t){const e={};for(const n in t)e[n]=t[n];return e}var Mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ih(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Mc.length;i++)n=Mc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yo(t){return Yo[" "](t),t}Yo[" "]=Ds;function Qv(t){var e=Jv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Xv=Ve(Be,"Opera"),An=Ve(Be,"Trident")||Ve(Be,"MSIE"),Eh=Ve(Be,"Edge"),co=Eh||An,bh=Ve(Be,"Gecko")&&!(Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge"))&&!(Ve(Be,"Trident")||Ve(Be,"MSIE"))&&!Ve(Be,"Edge"),Yv=Ve(Be.toLowerCase(),"webkit")&&!Ve(Be,"Edge");function Th(){var t=K.document;return t?t.documentMode:void 0}var Ns;e:{var Fi="",xi=function(){var t=Be;if(bh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Eh)return/Edge\/([\d\.]+)/.exec(t);if(An)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Yv)return/WebKit\/(\S+)/.exec(t);if(Xv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xi&&(Fi=xi?xi[1]:""),An){var Vi=Th();if(Vi!=null&&Vi>parseFloat(Fi)){Ns=String(Vi);break e}}Ns=Fi}var Jv={};function Zv(){return Qv(function(){let t=0;const e=Nc(String(Ns)).split("."),n=Nc("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Ui(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ui(s[2].length==0,i[2].length==0)||Ui(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var lo;if(K.document&&An){var Lc=Th();lo=Lc||parseInt(Ns,10)||void 0}else lo=void 0;var e_=lo,t_=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ds,e),K.removeEventListener("test",Ds,e)}catch{}return t}();function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};function fr(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bh){e:{try{Yo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:n_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fr.Z.h.call(this)}}$e(fr,Fe);var n_={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fr="closure_listenable_"+(1e6*Math.random()|0),r_=0;function s_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++r_,this.ca=this.fa=!1}function Js(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zs(t){this.src=t,this.g={},this.h=0}Zs.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ho(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new s_(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function uo(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=vh(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Js(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ho(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Jo="closure_lm_"+(1e6*Math.random()|0),Bi={};function Sh(t,e,n,r,s){if(r&&r.once)return Ah(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sh(t,e[i],n,r,s);return null}return n=ta(n),t&&t[Fr]?t.N(e,n,Ur(r)?!!r.capture:!!r,s):kh(t,e,n,!1,r,s)}function kh(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ur(s)?!!s.capture:!!s,a=ea(t);if(a||(t[Jo]=a=new Zs(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=i_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)t_||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Dh(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function i_(){function t(n){return e.call(t.src,t.listener,n)}var e=o_;return t}function Ah(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ah(t,e[i],n,r,s);return null}return n=ta(n),t&&t[Fr]?t.O(e,n,Ur(r)?!!r.capture:!!r,s):kh(t,e,n,!0,r,s)}function Ch(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ch(t,e[i],n,r,s);else r=Ur(r)?!!r.capture:!!r,n=ta(n),t&&t[Fr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ho(i,n,r,s),-1<n&&(Js(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ea(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ho(e,n,r,s)),(n=-1<t?e[t]:null)&&Zo(n))}function Zo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Fr])uo(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dh(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ea(e))?(uo(n,t),n.h==0&&(n.src=null,e[Jo]=null)):Js(t)}}}function Dh(t){return t in Bi?Bi[t]:Bi[t]="on"+t}function o_(t,e){if(t.ca)t=!0;else{e=new fr(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Zo(t),t=n.call(r,e)}return t}function ea(t){return t=t[Jo],t instanceof Zs?t:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(t){return typeof t=="function"?t:(t[ji]||(t[ji]=function(e){return t.handleEvent(e)}),t[ji])}function Ae(){Ot.call(this),this.i=new Zs(this),this.P=this,this.I=null}$e(Ae,Ot);Ae.prototype[Fr]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){Ch(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var s=e;e=new Fe(r,t),Ih(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=rs(o,r,!0,e)&&s}if(o=e.g=t,s=rs(o,r,!0,e)&&s,s=rs(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=rs(o,r,!1,e)&&s}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Js(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&uo(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var na=K.JSON.stringify;function a_(){var t=Nh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class c_{constructor(){this.h=this.g=null}add(e,n){const r=Rh.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new l_,t=>t.reset());class l_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function u_(t){K.setTimeout(()=>{throw t},0)}function ra(t,e){fo||h_(),go||(fo(),go=!0),Nh.add(t,e)}var fo;function h_(){var t=K.Promise.resolve(void 0);fo=function(){t.then(d_)}}var go=!1,Nh=new c_;function d_(){for(var t;t=a_();){try{t.h.call(t.g)}catch(n){u_(n)}var e=Rh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}go=!1}function ei(t,e){Ae.call(this),this.h=t||1,this.g=e||K,this.j=Pe(this.kb,this),this.l=Date.now()}$e(ei,Ae);O=ei.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(sa(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sa(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){ei.Z.M.call(this),sa(this),delete this.g};function ia(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Oh(t){t.g=ia(()=>{t.g=null,t.i&&(t.i=!1,Oh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class f_ extends Ot{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Oh(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){Ot.call(this),this.h=t,this.g={}}$e(gr,Ot);var $c=[];function Ph(t,e,n,r){Array.isArray(n)||(n&&($c[0]=n.toString()),n=$c);for(var s=0;s<n.length;s++){var i=Sh(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Mh(t){Xo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zo(e)},t),t.g={}}gr.prototype.M=function(){gr.Z.M.call(this),Mh(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ti(){this.g=!0}ti.prototype.Aa=function(){this.g=!1};function g_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function p_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function yn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+y_(t,n)+(r?" "+r:"")})}function m_(t,e){t.info(function(){return"TIMEOUT: "+e})}ti.prototype.info=function(){};function y_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return na(n)}catch{return e}}var cn={},Uc=null;function ni(){return Uc=Uc||new Ae}cn.Ma="serverreachability";function Lh(t){Fe.call(this,cn.Ma,t)}$e(Lh,Fe);function pr(t){const e=ni();Me(e,new Lh(e,t))}cn.STAT_EVENT="statevent";function $h(t,e){Fe.call(this,cn.STAT_EVENT,t),this.stat=e}$e($h,Fe);function je(t){const e=ni();Me(e,new $h(e,t))}cn.Na="timingevent";function Uh(t,e){Fe.call(this,cn.Na,t),this.size=e}$e(Uh,Fe);function xr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var ri={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function oa(){}oa.prototype.h=null;function Fc(t){return t.h||(t.h=t.i())}function xh(){}var Vr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function aa(){Fe.call(this,"d")}$e(aa,Fe);function ca(){Fe.call(this,"c")}$e(ca,Fe);var po;function si(){}$e(si,oa);si.prototype.g=function(){return new XMLHttpRequest};si.prototype.i=function(){return{}};po=new si;function Br(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new gr(this),this.P=v_,t=co?125:void 0,this.W=new ei(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var v_=45e3,mo={},Os={};O=Br.prototype;O.setTimeout=function(t){this.P=t};function yo(t,e,n){t.K=1,t.v=oi(mt(e)),t.s=n,t.U=!0,Bh(t,null)}function Bh(t,e){t.F=Date.now(),jr(t),t.A=mt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Wh(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Vh,t.g=gd(t.l,n?e:null,!t.s),0<t.O&&(t.L=new f_(Pe(t.Ia,t,t.g),t.O)),Ph(t.V,t.g,"readystatechange",t.gb),e=t.H?wh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),pr(1),g_(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&ft(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=ft(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||co||this.g&&(this.h.h||this.g.ga()||jc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?pr(3):pr(2)),ii(this);var n=this.g.ba();this.N=n;t:if(jh(this)){var r=jc(this.g);t="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){xt(this),tr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,p_(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rs(a)){var l=a;break t}}l=null}if(n=l)yn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vo(this,n);else{this.i=!1,this.o=3,je(12),xt(this),tr(this);break e}}this.U?(qh(this,u,o),co&&this.i&&u==3&&(Ph(this.V,this.W,"tick",this.fb),this.W.start())):(yn(this.j,this.m,o,null),vo(this,o)),u==4&&xt(this),this.i&&!this.I&&(u==4?ud(this.l,this):(this.i=!1,jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),xt(this),tr(this)}}}catch{}finally{}};function jh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function qh(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=__(t,n),s==Os){e==4&&(t.o=4,je(14),r=!1),yn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==mo){t.o=4,je(15),yn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else yn(t.j,t.m,s,null),vo(t,s);jh(t)&&s!=Os&&s!=mo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ya(e),e.L=!0,je(11))):(yn(t.j,t.m,n,"[Invalid Chunked Response]"),xt(t),tr(t))}O.fb=function(){if(this.g){var t=ft(this.g),e=this.g.ga();this.C<e.length&&(ii(this),qh(this,t,e),this.i&&t!=4&&jr(this))}};function __(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Os:(n=Number(e.substring(n,r)),isNaN(n)?mo:(r+=1,r+n>e.length?Os:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.I=!0,xt(this)};function jr(t){t.Y=Date.now()+t.P,zh(t,t.P)}function zh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xr(Pe(t.eb,t),e)}function ii(t){t.B&&(K.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(m_(this.j,this.A),this.K!=2&&(pr(3),je(17)),xt(this),this.o=2,tr(this)):zh(this,this.Y-t)};function tr(t){t.l.G==0||t.I||ud(t.l,t)}function xt(t){ii(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sa(t.W),Mh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_o(n.i,t))){if(n.I=t.N,!t.J&&_o(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)$s(n),li(n);else break e;ma(n),je(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=xr(Pe(n.ab,n),6e3));if(1>=Yh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vt(n,11)}else if((t.J||n.g==t)&&$s(n),!Rs(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Ve(m,"spdy")||Ve(m,"quic")||Ve(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ha(i,i.h),i.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,fe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=fd(r,r.H?r.la:null,r.W),o.J){Jh(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ii(a),jr(a)),r.g=o}else cd(r);0<n.l.length&&ui(n)}else l[0]!="stop"&&l[0]!="close"||Vt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vt(n,7):pa(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}pr(4)}catch{}}function w_(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ao(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function la(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ao(t)||typeof t=="string")_h(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ao(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=w_(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Fn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Fn)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}O=Fn.prototype;O.R=function(){ua(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return ua(this),this.g.concat()};function ua(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];en(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],en(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}O.get=function(t,e){return en(this.h,t)?this.h[t]:e};O.set=function(t,e){en(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Hh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function tn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof tn){this.g=e!==void 0?e:t.g,Ps(this,t.j),this.s=t.s,Ms(this,t.i),Ls(this,t.m),this.l=t.l,e=t.h;var n=new mr;n.i=e.i,e.g&&(n.g=new Fn(e.g),n.h=e.h),xc(this,n),this.o=t.o}else t&&(n=String(t).match(Hh))?(this.g=!!e,Ps(this,n[1]||"",!0),this.s=nr(n[2]||""),Ms(this,n[3]||"",!0),Ls(this,n[4]),this.l=nr(n[5]||"",!0),xc(this,n[6]||"",!0),this.o=nr(n[7]||"")):(this.g=!!e,this.h=new mr(null,this.g))}tn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,Vc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,Vc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?k_:S_,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,C_)),t.join("")};function mt(t){return new tn(t)}function Ps(t,e,n){t.j=n?nr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ms(t,e,n){t.i=n?nr(e,!0):e}function Ls(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xc(t,e,n){e instanceof mr?(t.h=e,D_(t.h,t.g)):(n||(e=Xn(e,A_)),t.h=new mr(e,t.g))}function fe(t,e,n){t.h.set(e,n)}function oi(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function E_(t){return t instanceof tn?mt(t):new tn(t,void 0)}function b_(t,e,n,r){var s=new tn(null,void 0);return t&&Ps(s,t),e&&Ms(s,e),n&&Ls(s,n),r&&(s.l=r),s}function nr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,T_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vc=/[#\/\?@]/g,S_=/[#\?:]/g,k_=/[#\?]/g,A_=/[#\?@]/g,C_=/#/g;function mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pt(t){t.g||(t.g=new Fn,t.h=0,t.i&&I_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=mr.prototype;O.add=function(t,e){Pt(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kh(t,e){Pt(t),e=xn(t,e),en(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,en(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ua(t)))}function Gh(t,e){return Pt(t),e=xn(t,e),en(t.g.h,e)}O.forEach=function(t,e){Pt(this),this.g.forEach(function(n,r){_h(n,function(s){t.call(e,s,r,this)},this)},this)};O.T=function(){Pt(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};O.R=function(t){Pt(this);var e=[];if(typeof t=="string")Gh(this,t)&&(e=Rc(e,this.g.get(xn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rc(e,t[n])}return e};O.set=function(t,e){return Pt(this),this.i=null,t=xn(this,t),Gh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Wh(t,e,n){Kh(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),Qo(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function D_(t,e){e&&!t.j&&(Pt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Kh(this,r),Wh(this,s,n))},t)),t.j=e}var R_=class{constructor(t,e){this.h=t,this.g=e}};function Qh(t){this.l=t||N_,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var N_=10;function Xh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yh(t){return t.h?1:t.g?t.g.size:0}function _o(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ha(t,e){t.g?t.g.add(e):t.h=e}function Jh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qo(t.i)}function da(){}da.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};da.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function O_(){this.g=new da}function P_(t,e,n){const r=n||"";try{la(t,function(s,i){let o=s;Ur(s)&&(o=na(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function M_(t,e){const n=new ti;if(K.Image){const r=new Image;r.onload=ns(ss,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ns(ss,n,r,"TestLoadImage: error",!1,e),r.onabort=ns(ss,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ns(ss,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ss(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function qr(t){this.l=t.$b||null,this.j=t.ib||!1}$e(qr,oa);qr.prototype.g=function(){return new ai(this.l,this.j)};qr.prototype.i=function(t){return function(){return t}}({});function ai(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(ai,Ae);var fa=0;O=ai.prototype;O.open=function(t,e){if(this.readyState!=fa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=fa};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ed(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ed(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zr(this):yr(this),this.readyState==3&&ed(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,zr(this))};O.Ta=function(t){this.g&&(this.response=t,zr(this))};O.ha=function(){this.g&&zr(this)};function zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var L_=K.JSON.parse;function _e(t){Ae.call(this),this.headers=new Fn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=td,this.K=this.L=!1}$e(_e,Ae);var td="",$_=/^https?$/i,U_=["POST","PUT"];O=_e.prototype;O.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():po.g(),this.C=this.u?Fc(this.u):Fc(po),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bc(this,i);return}t=n||"";const s=new Fn(this.headers);r&&la(r,function(i,o){s.set(o,i)}),r=Wv(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=vh(U_,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sd(this),0<this.B&&((this.K=F_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=ia(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bc(this,i)}};function F_(t){return An&&Zv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function x_(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Wo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Bc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nd(t),ci(t)}function nd(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),ci(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),_e.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?rd(this):this.cb())};O.cb=function(){rd(this)};function rd(t){if(t.h&&typeof Wo!="undefined"&&(!t.C[1]||ft(t)!=4||t.ba()!=2)){if(t.v&&ft(t)==4)ia(t.Fa,0,t);else if(Me(t,"readystatechange"),ft(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Hh)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!$_.test(s?s.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",nd(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){sd(t);const n=t.g,r=t.C[0]?Ds:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function sd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function ft(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),L_(e)}};function jc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case td:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function V_(t){let e="";return Xo(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ga(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=V_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function id(t){this.za=0,this.l=[],this.h=new ti,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hn("baseRetryDelayMs",5e3,t),this.$a=Hn("retryDelaySeedMs",1e4,t),this.Ya=Hn("forwardChannelMaxRetries",2,t),this.ra=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Qh(t&&t.concurrentRequestLimit),this.Ca=new O_,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=id.prototype;O.ma=8;O.G=1;function pa(t){if(od(t),t.G==3){var e=t.V++,n=mt(t.F);fe(n,"SID",t.J),fe(n,"RID",e),fe(n,"TYPE","terminate"),Hr(t,n),e=new Br(t,t.h,e,void 0),e.K=2,e.v=oi(mt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=gd(e.l,null),e.g.ea(e.v)),e.F=Date.now(),jr(e)}dd(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function li(t){t.g&&(ya(t),t.g.cancel(),t.g=null)}function od(t){li(t),t.u&&(K.clearTimeout(t.u),t.u=null),$s(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function qi(t,e){t.l.push(new R_(t.Za++,e)),t.G==3&&ui(t)}function ui(t){Xh(t.i)||t.m||(t.m=!0,ra(t.Ha,t),t.C=0)}function B_(t,e){return Yh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=xr(Pe(t.Ha,t,e),hd(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Br(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=wh(i),Ih(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ad(this,s,e),n=mt(this.F),fe(n,"RID",t),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),Hr(this,n),this.o&&i&&ga(n,this.o,i),ha(this.i,s),this.Ra&&fe(n,"TYPE","init"),this.ja?(fe(n,"$req",e),fe(n,"SID","null"),s.$=!0,yo(s,n,null)):yo(s,n,e),this.G=2}}else this.G==3&&(t?qc(this,t):this.l.length==0||Xh(this.i)||qc(this))};function qc(t,e){var n;e?n=e.m:n=t.V++;const r=mt(t.F);fe(r,"SID",t.J),fe(r,"RID",n),fe(r,"AID",t.U),Hr(t,r),t.o&&t.s&&ga(r,t.o,t.s),n=new Br(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ad(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ha(t.i,n),yo(n,r,e)}function Hr(t,e){t.j&&la({},function(n,r){fe(e,r,n)})}function ad(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{P_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function cd(t){t.g||t.u||(t.Y=1,ra(t.Ga,t),t.A=0)}function ma(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=xr(Pe(t.Ga,t),hd(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,ld(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xr(Pe(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,je(10),li(this),ld(this))};function ya(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function ld(t){t.g=new Br(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=mt(t.oa);fe(e,"RID","rpc"),fe(e,"SID",t.J),fe(e,"CI",t.N?"0":"1"),fe(e,"AID",t.U),Hr(t,e),fe(e,"TYPE","xmlhttp"),t.o&&t.s&&ga(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=oi(mt(e)),n.s=null,n.U=!0,Bh(n,t)}O.ab=function(){this.v!=null&&(this.v=null,li(this),ma(this),je(19))};function $s(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function ud(t,e){var n=null;if(t.g==e){$s(t),ya(t),t.g=null;var r=2}else if(_o(t.i,e))n=e.D,Jh(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ni(),Me(r,new Uh(r,n,e,s)),ui(t)}else cd(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&B_(t,e)||r==2&&ma(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Vt(t,5);break;case 4:Vt(t,10);break;case 3:Vt(t,6);break;default:Vt(t,2)}}}function hd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new tn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Ps(n,"https"),oi(n)),M_(n.toString(),r)}else je(2);t.G=0,t.j&&t.j.va(e),dd(t),od(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),je(2)):(this.h.info("Failed to ping google.com"),je(1))};function dd(t){t.G=0,t.I=-1,t.j&&((Zh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qo(t.l),t.l.length=0),t.j.ua())}function fd(t,e,n){let r=E_(n);if(r.i!="")e&&Ms(r,e+"."+r.i),Ls(r,r.m);else{const s=K.location;r=b_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Xo(t.aa,function(s,i){fe(r,i,s)}),e=t.D,n=t.sa,e&&n&&fe(r,e,n),fe(r,"VER",t.ma),Hr(t,r),r}function gd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new qr({ib:!0})):new _e(t.qa),e.L=t.H,e}function pd(){}O=pd.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function Us(){if(An&&!(10<=Number(e_)))throw Error("Environmental error: no available transport.")}Us.prototype.g=function(t,e){return new Ge(t,e)};function Ge(t,e){Ae.call(this),this.g=new id(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vn(this)}$e(Ge,Ae);Ge.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ra(Pe(t.hb,t,e))),je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=fd(t,null,t.W),ui(t)};Ge.prototype.close=function(){pa(this.g)};Ge.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,qi(this.g,e)}else this.v?(e={},e.__data__=na(t),qi(this.g,e)):qi(this.g,t)};Ge.prototype.M=function(){this.g.j=null,delete this.j,pa(this.g),delete this.g,Ge.Z.M.call(this)};function md(t){aa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(md,aa);function yd(){ca.call(this),this.status=1}$e(yd,ca);function Vn(t){this.g=t}$e(Vn,pd);Vn.prototype.xa=function(){Me(this.g,"a")};Vn.prototype.wa=function(t){Me(this.g,new md(t))};Vn.prototype.va=function(t){Me(this.g,new yd(t))};Vn.prototype.ua=function(){Me(this.g,"b")};Us.prototype.createWebChannel=Us.prototype.g;Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;ri.NO_ERROR=0;ri.TIMEOUT=8;ri.HTTP_ERROR=6;Fh.COMPLETE="complete";xh.EventType=Vr;Vr.OPEN="a";Vr.CLOSE="b";Vr.ERROR="c";Vr.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var j_=function(){return new Us},q_=function(){return ni()},zi=ri,z_=Fh,H_=cn,zc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},K_=qr,is=xh,G_=_e;const Hc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const nn=new Ks("@firebase/firestore");function Kc(){return nn.logLevel}function F(t,...e){if(nn.logLevel<=se.DEBUG){const n=e.map(va);nn.debug(`Firestore (${Bn}): ${t}`,...n)}}function yt(t,...e){if(nn.logLevel<=se.ERROR){const n=e.map(va);nn.error(`Firestore (${Bn}): ${t}`,...n)}}function Gc(t,...e){if(nn.logLevel<=se.WARN){const n=e.map(va);nn.warn(`Firestore (${Bn}): ${t}`,...n)}}function va(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: `+t;throw yt(e),new Error(e)}function de(t,e){t||W()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class X_{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new W_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new qe(e)}}class Y_{constructor(e,n,r){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class J_{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Y_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ew{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.p=n.token,new Z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Cn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vr{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends vr{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends vr{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return nw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ge.fromString(e))}static fromName(e){return new V(ge.fromString(e).popFirst(5))}static empty(){return new V(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ge(e.slice()))}}function rw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new At(s,V.empty(),e)}function sw(t){return new At(t.readTime,t.key,-1)}class At{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new At(J.min(),V.empty(),-1)}static max(){return new At(J.max(),V.empty(),-1)}}function iw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==ow)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new T((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new T((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Gr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _a{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_a.ot=-1;class Ee{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new os(this.root,e,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new os(this.root,e,this.comparator,!0)}}class os{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ce.RED,this.left=s!=null?s:Ce.EMPTY,this.right=i!=null?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ce(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class it{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new it([])}unionWith(e){let n=new Ie(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new it(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Le(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const cw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(t){if(de(!!t),typeof t=="string"){let e=0;const n=cw.exec(t);if(de(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dn(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Id(t){const e=t.mapValue.fields.__previous_value__;return wd(e)?Id(e):e}function _r(t){const e=Ct(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Rn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return t==null}function Fs(t){return t===0&&1/t==-1/0}function uw(t){return typeof t=="number"&&Number.isInteger(t)&&!Fs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wd(t)?4:hw(t)?9007199254740991:10:W()}function ct(t,e){if(t===e)return!0;const n=rn(t);if(n!==rn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Ct(r.timestampValue),o=Ct(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Dn(r.bytesValue).isEqual(Dn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ve(r.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ve(r.integerValue)===ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ve(r.doubleValue),o=ve(s.doubleValue);return i===o?Fs(i)===Fs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Cn(t.arrayValue.values||[],e.arrayValue.values||[],ct);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wc(i)!==Wc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ct(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function wr(t,e){return(t.values||[]).find(n=>ct(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=rn(t),r=rn(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ve(s.integerValue||s.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xc(t.timestampValue,e.timestampValue);case 4:return Xc(_r(t),_r(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Dn(s),a=Dn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(ve(s.latitude),ve(i.latitude));return o!==0?o:ce(ve(s.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nn(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===as.mapValue&&i===as.mapValue)return 0;if(s===as.mapValue)return 1;if(i===as.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const d=Nn(o[a[u]],c[l[u]]);if(d!==0)return d}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Xc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ct(t),r=Ct(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function En(t){return wo(t)}function wo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Ct(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=wo(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${wo(r.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Io(t){return!!t&&"integerValue"in t}function wa(t){return!!t&&"arrayValue"in t}function Yc(t){return!!t&&"nullValue"in t}function Jc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ms(t){return!!t&&"mapValue"in t}function rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=rr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ms(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(n)}setAll(e){let n=Ue.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=rr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ms(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ms(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new We(rr(this.value))}}function Ed(t){const e=[];return jn(t.fields,(n,r)=>{const s=new Ue([n]);if(ms(r)){const i=Ed(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new De(e,0,J.min(),J.min(),We.empty(),0)}static newFoundDocument(e,n,r){return new De(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new De(e,2,n,J.min(),We.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,J.min(),We.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Zc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dw(t,e,n,r,s,i,o)}function Ia(t){const e=Q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+En(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>En(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>En(r)).join(",")),e.ut=n}return e.ut}function fw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${En(r.value)}`;var r}).join(", ")}]`),hi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>En(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>En(n)).join(",")),`Target(${e})`}function Ea(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Iw(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ct(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tl(t.startAt,e.startAt)&&tl(t.endAt,e.endAt)}function Eo(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ze extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new gw(e,n,r):n==="array-contains"?new yw(e,r):n==="in"?new vw(e,r):n==="not-in"?new _w(e,r):n==="array-contains-any"?new ww(e,r):new ze(e,n,r)}static ct(e,n,r){return n==="in"?new pw(e,r):new mw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Nn(n,this.value)):n!==null&&rn(this.value)===rn(n)&&this.at(Nn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class gw extends ze{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.at(n)}}class pw extends ze{constructor(e,n){super(e,"in",n),this.keys=bd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mw extends ze{constructor(e,n){super(e,"not-in",n),this.keys=bd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class yw extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wa(n)&&wr(n.arrayValue,this.value)}}class vw extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wr(this.value.arrayValue,n)}}class _w extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wr(this.value.arrayValue,n)}}class ww extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wr(this.value.arrayValue,r))}}class xs{constructor(e,n){this.position=e,this.inclusive=n}}class sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Iw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function el(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Nn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ct(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Ew(t,e,n,r,s,i,o,a){return new di(t,e,n,r,s,i,o,a)}function ba(t){return new di(t)}function nl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tw(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Sw(t){return t.collectionGroup!==null}function Ir(t){const e=Q(t);if(e.lt===null){e.lt=[];const n=Tw(e),r=bw(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new sr(n)),e.lt.push(new sr(Ue.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new sr(Ue.keyField(),i))}}}return e.lt}function vt(t){const e=Q(t);if(!e.ft)if(e.limitType==="F")e.ft=Zc(e.path,e.collectionGroup,Ir(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ir(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sr(i.field,o))}const r=e.endAt?new xs(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new xs(e.startAt.position,e.startAt.inclusive):null;e.ft=Zc(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function bo(t,e,n){return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fi(t,e){return Ea(vt(t),vt(e))&&t.limitType===e.limitType}function Td(t){return`${Ia(vt(t))}|lt:${t.limitType}`}function To(t){return`Query(target=${fw(vt(t))}; limitType=${t.limitType})`}function Ta(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):V.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=el(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ir(n),r)||n.endAt&&!function(s,i,o){const a=el(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ir(n),r))}(t,e)}function kw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sd(t){return(e,n)=>{let r=!1;for(const s of Ir(t)){const i=Aw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Aw(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Nn(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function Ad(t){return{integerValue:""+t}}function Cw(t,e){return uw(e)?Ad(e):kd(t,e)}/**
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
 */class gi{constructor(){this._=void 0}}function Dw(t,e,n){return t instanceof Vs?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Er?Dd(t,e):t instanceof br?Rd(t,e):function(r,s){const i=Cd(r,s),o=rl(i)+rl(r._t);return Io(i)&&Io(r._t)?Ad(o):kd(r.wt,o)}(t,e)}function Rw(t,e,n){return t instanceof Er?Dd(t,e):t instanceof br?Rd(t,e):n}function Cd(t,e){return t instanceof Bs?Io(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vs extends gi{}class Er extends gi{constructor(e){super(),this.elements=e}}function Dd(t,e){const n=Nd(e);for(const r of t.elements)n.some(s=>ct(s,r))||n.push(r);return{arrayValue:{values:n}}}class br extends gi{constructor(e){super(),this.elements=e}}function Rd(t,e){let n=Nd(e);for(const r of t.elements)n=n.filter(s=>!ct(s,r));return{arrayValue:{values:n}}}class Bs extends gi{constructor(e,n){super(),this.wt=e,this._t=n}}function rl(t){return ve(t.integerValue||t.doubleValue)}function Nd(t){return wa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Nw(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Er&&r instanceof Er||n instanceof br&&r instanceof br?Cn(n.elements,r.elements,ct):n instanceof Bs&&r instanceof Bs?ct(n._t,r._t):n instanceof Vs&&r instanceof Vs}(t.transform,e.transform)}class Ow{constructor(e,n){this.version=e,this.transformResults=n}}class ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ys(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pi{}function Od(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sa(t.key,ot.none()):new Wr(t.key,t.data,ot.none());{const n=t.data,r=We.empty();let s=new Ie(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ln(t.key,r,new it(s.toArray()),ot.none())}}function Pw(t,e,n){t instanceof Wr?function(r,s,i){const o=r.value.clone(),a=il(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ln?function(r,s,i){if(!ys(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=il(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Pd(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ir(t,e,n,r){return t instanceof Wr?function(s,i,o,a){if(!ys(s.precondition,i))return o;const c=s.value.clone(),l=ol(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ln?function(s,i,o,a){if(!ys(s.precondition,i))return o;const c=ol(s.fieldTransforms,a,i),l=i.data;return l.setAll(Pd(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return ys(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Mw(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Cd(r.transform,s||null);i!=null&&(n===null&&(n=We.empty()),n.set(r.field,i))}return n||null}function sl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Cn(n,r,(s,i)=>Nw(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wr extends pi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends pi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function il(t,e,n){const r=new Map;de(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Rw(o,a,n[s]))}return r}function ol(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Dw(i,o,e))}return r}class Sa extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lw extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,ee;function Uw(t){switch(t){default:return W();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Md(t){if(t===void 0)return yt("GRPC error has no .code"),S.UNKNOWN;switch(t){case ye.OK:return S.OK;case ye.CANCELLED:return S.CANCELLED;case ye.UNKNOWN:return S.UNKNOWN;case ye.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ye.INTERNAL:return S.INTERNAL;case ye.UNAVAILABLE:return S.UNAVAILABLE;case ye.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ye.NOT_FOUND:return S.NOT_FOUND;case ye.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ye.ABORTED:return S.ABORTED;case ye.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ye.DATA_LOSS:return S.DATA_LOSS;default:return W()}}(ee=ye||(ye={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _d(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new Ee(V.comparator);function _t(){return Fw}const Ld=new Ee(V.comparator);function Yn(...t){let e=Ld;for(const n of t)e=e.insert(n.key,n);return e}function $d(t){let e=Ld;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bt(){return or()}function Ud(){return or()}function or(){return new qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const xw=new Ee(V.comparator),Vw=new Ie(V.comparator);function Z(...t){let e=Vw;for(const n of t)e=e.add(n);return e}const Bw=new Ie(ce);function Fd(){return Bw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,n)),new mi(J.min(),r,Fd(),_t(),Z())}}class Qr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qr(Le.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class xd{constructor(e,n){this.targetId=e,this.It=n}}class Vd{constructor(e,n,r=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class al{constructor(){this.Tt=0,this.Et=ll(),this.At=Le.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),r=Z();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Qr(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=ll()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class jw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=_t(),this.Bt=cl(),this.Lt=new Ie(ce)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(Eo(i))if(r===0){const o=new V(i.path);this.Kt(n,o,De.newNoDocument(o,J.min()))}else de(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Eo(a.target)){const c=new V(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,De.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=Z();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new mi(e,n,this.Lt,this.$t,r);return this.$t=_t(),this.Bt=cl(),this.Lt=new Ie(ce),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new al,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ie(ce),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new al),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function cl(){return new Ee(V.comparator)}function ll(){return new Ee(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Hw{constructor(e,n){this.databaseId=e,this.dt=n}}function js(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Kw(t,e){return js(t,e.toTimestamp())}function gt(t){return de(!!t),J.fromTimestamp(function(e){const n=Ct(e);return new we(n.seconds,n.nanos)}(t))}function ka(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jd(t){const e=ge.fromString(t);return de(Hd(e)),e}function So(t,e){return ka(t.databaseId,e.path)}function Hi(t,e){const n=jd(e);if(n.get(1)!==t.databaseId.projectId)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(qd(n))}function ko(t,e){return ka(t.databaseId,e)}function Gw(t){const e=jd(t);return e.length===4?ge.emptyPath():qd(e)}function Ao(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qd(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ul(t,e,n){return{name:So(t,e),fields:n.value.mapValue.fields}}function Ww(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(de(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(de(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:Md(c.code);return new z(l,c.message||"")}(o);n=new Vd(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hi(t,r.document.name),i=gt(r.document.updateTime),o=new We({mapValue:{fields:r.document.fields}}),a=De.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new vs(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hi(t,r.document),i=r.readTime?gt(r.readTime):J.min(),o=De.newNoDocument(s,i),a=r.removedTargetIds||[];n=new vs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hi(t,r.document),i=r.removedTargetIds||[];n=new vs([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new $w(s),o=r.targetId;n=new xd(o,i)}}return n}function Qw(t,e){let n;if(e instanceof Wr)n={update:ul(t,e.key,e.value)};else if(e instanceof Sa)n={delete:So(t,e.key)};else if(e instanceof ln)n={update:ul(t,e.key,e.data),updateMask:i0(e.fieldMask)};else{if(!(e instanceof Lw))return W();n={verify:So(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Vs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Er)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof br)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Bs)return{fieldPath:i.field.canonicalString(),increment:o._t};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Kw(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function Xw(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?gt(r.updateTime):gt(s);return i.isEqual(J.min())&&(i=gt(s)),new Ow(i,r.transformResults||[])}(n,e))):[]}function Yw(t,e){return{documents:[ko(t,e.path)]}}function Jw(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ko(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ko(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Jc(h.value))return{unaryFilter:{field:fn(h.field),op:"IS_NAN"}};if(Yc(h.value))return{unaryFilter:{field:fn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Jc(h.value))return{unaryFilter:{field:fn(h.field),op:"IS_NOT_NAN"}};if(Yc(h.value))return{unaryFilter:{field:fn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(h.field),op:n0(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:fn(u.field),direction:t0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||hi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Zw(t){let e=Gw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=zd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new sr(vn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,hi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new xs(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new xs(d,h)}(n.endAt)),Ew(e,s,o,i,a,"F",c,l)}function e0(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function zd(t){return t?t.unaryFilter!==void 0?[s0(t)]:t.fieldFilter!==void 0?[r0(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>zd(e)).reduce((e,n)=>e.concat(n)):W():[]}function t0(t){return qw[t]}function n0(t){return zw[t]}function fn(t){return{fieldPath:t.canonicalString()}}function vn(t){return Ue.fromServerFormat(t.fieldPath)}function r0(t){return ze.create(vn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function s0(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vn(t.unaryFilter.field);return ze.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vn(t.unaryFilter.field);return ze.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vn(t.unaryFilter.field);return ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vn(t.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function i0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Pw(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ir(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ir(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ud();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Od(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Cn(this.mutations,e.mutations,(n,r)=>sl(n,r))&&Cn(this.baseMutations,e.baseMutations,(n,r)=>sl(n,r))}}class Aa{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length);let s=xw;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Aa(e,n,r,s)}}/**
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
 */class a0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kt{constructor(e,n,r,s,i=J.min(),o=J.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.ne=e}}function l0(t){const e=Zw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.ze=new h0}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(At.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(At.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class h0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ie(ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new On(0)}static Rn(){return new On(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.changes=new qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class f0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&ir(r.mutation,s,it.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const s=Bt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Yn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_t();const o=or(),a=or();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ln)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ir(u.mutation,l,u.mutation.getFieldMask(),we.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new f0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=or();let s=new Ee((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||it.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ud();u.forEach(d=>{if(!i.has(d)){const g=Od(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return V.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):T.resolve(Bt());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:$d(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let s=Yn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Yn();return this.indexManager.getCollectionParents(e,s).next(o=>T.forEach(o,a=>{const c=function(l,u){return new di(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,De.newInvalidDocument(l)))});let o=Yn();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ir(l.mutation,c,it.empty(),we.now()),Ta(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(De.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:gt(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:l0(r.bundledQuery),readTime:gt(r.readTime)}}(n)),T.resolve()}}/**
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
 */class m0{constructor(){this.overlays=new Ee(V.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bt();return T.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const s=Bt(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return T.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Bt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Bt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return T.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a0(n,r));let i=this.Xn.get(n);i===void 0&&(i=Z(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.Zn=new Ie(Se.ts),this.es=new Ie(Se.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Se(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Se(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new V(new ge([])),r=new Se(n,e),s=new Se(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new V(new ge([])),r=new Se(n,e),s=new Se(n,e+1);let i=Z();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Se(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return V.comparator(e.key,n.key)||ce(e.ls,n.ls)}static ns(e,n){return ce(e.ls,n.ls)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ie(Se.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o0(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),s=new Se(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ie(ce);return n.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;V.isDocumentKey(i)||(i=i.child(""));const o=new Se(new V(i),0);let a=new Ie(ce);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){de(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return T.forEach(n.mutations,s=>{const i=new Se(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Se(n,0),s=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.ps=e,this.docs=new Ee(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let r=_t();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():De.newInvalidDocument(s))}),T.resolve(r)}getAllFromCollection(e,n,r){let s=_t();const i=new V(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||iw(sw(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,s){W()}Is(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _0(this)}getSize(e){return T.resolve(this.size)}}class _0 extends d0{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.persistence=e,this.Ts=new qn(n=>Ia(n),Ea),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Es=0,this.As=new Ca,this.targetCount=0,this.Rs=On.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new On(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.bs={},this.overlays={},this.Ps=new _a(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new w0(this),this.indexManager=new u0,this.remoteDocumentCache=function(r){return new v0(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new c0(n),this.Ds=new p0(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new m0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new y0(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new E0(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class E0 extends aw{constructor(e){super(),this.currentSequenceNumber=e}}class Da{constructor(e){this.persistence=e,this.ks=new Ca,this.Ms=null}static Os(e){return new Da(e)}get Fs(){if(this.Ms)return this.Ms;throw W()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,r=>{const s=V.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ra(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(nl(n))return T.resolve(null);let r=vt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bo(n,null,"F"),r=vt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Z(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,bo(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,s){return nl(n)||s.isEqual(J.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(Kc()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),To(n)),this.Oi(e,o,n,rw(s,-1)))})}ki(e,n){let r=new Ie(Sd(e));return n.forEach((s,i)=>{Ta(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return Kc()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",To(n)),this.Di.getDocumentsMatchingQuery(e,n,At.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ee(ce),this.Bi=new qn(i=>Ia(i),Ea),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g0(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function S0(t,e,n,r){return new T0(t,e,n,r)}async function Kd(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function k0(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const v=c.docVersions.get(g);de(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Gd(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function A0(t,e){const n=Q(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Le.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(m,v,I){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,g,u)&&a.push(n.Vs.updateTargetData(i,g))});let c=_t(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(C0(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(J.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=s,i))}function C0(t,e,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_t();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function D0(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function R0(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,T.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Kt(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Co(t,e,n){const r=Q(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function hl(t,e,n){const r=Q(t);let s=J.min(),i=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.Bi.get(l);return h!==void 0?T.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,vt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:Z())).next(a=>(N0(r,kw(e),a),{documents:a,ji:i})))}function N0(t,e,n){let r=J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class dl{constructor(){this.activeTargetIds=Fd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O0{constructor(){this.Fr=new dl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new dl,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const M0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Gc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=M0[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new G_;a.listenOnce(z_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zi.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case zi.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new z(S.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new z(d,h.message))}else o(new z(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(S.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=j_(),o=q_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new K_({})),this.uo(a.initMessageHeaders,n,r),au()||cu()||cg()||lu()||lg()||No()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new L0({jr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),g=(m,v,I)=>{m.listen(v,D=>{try{I(D)}catch(w){setTimeout(()=>{throw w},0)}})};return g(l,is.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,is.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.eo())}),g(l,is.EventType.ERROR,m=>{h||(h=!0,Gc("Connection","WebChannel transport errored:",m),d.eo(new z(S.UNAVAILABLE,"The operation could not be completed")))}),g(l,is.EventType.MESSAGE,m=>{var v;if(!h){const I=m.data[0];de(!!I);const D=I,w=D.error||((v=D[0])===null||v===void 0?void 0:v.error);if(w){F("Connection","WebChannel received error:",w);const b=w.status;let k=function(x){const A=ye[x];if(A!==void 0)return Md(A)}(b),E=w.message;k===void 0&&(k=S.INTERNAL,E="Unknown error status: "+b+" with message "+w.message),h=!0,d.eo(new z(k,E)),l.close()}else F("Connection","WebChannel received:",I),d.no(I)}}),g(o,H_.STAT_EVENT,m=>{m.stat===zc.PROXY?F("Connection","Detected buffering proxy"):m.stat===zc.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ki(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return new Hw(t,!0)}class Wd{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Wd(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new z(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U0 extends Qd{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Ww(this.wt,e),r=function(s){if(!("targetChange"in s))return J.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?gt(i.readTime):J.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Ao(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=Eo(a)?{documents:Yw(s,a)}:{query:Jw(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Bd(s,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=js(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=e0(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Ao(this.wt),n.removeTarget=e,this.Oo(n)}}class F0 extends Qd{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Xw(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.Jo(r,n)}return de(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ao(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qw(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(S.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(S.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class V0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(yt(n),this.su=!1):F("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{un(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.lu.add(4),await Xr(c),c._u.set("Unknown"),c.lu.delete(4),await vi(c)}(this))})}),this._u=new V0(r,s)}}async function vi(t){if(un(t))for(const e of t.fu)await e(!0)}async function Xr(t){for(const e of t.fu)await e(!1)}function Xd(t,e){const n=Q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Pa(n)?Oa(n):zn(n).Co()&&Na(n,e))}function Yd(t,e){const n=Q(t),r=zn(n);n.hu.delete(e),r.Co()&&Jd(n,e),n.hu.size===0&&(r.Co()?r.ko():un(n)&&n._u.set("Unknown"))}function Na(t,e){t.wu.Nt(e.targetId),zn(t).Qo(e)}function Jd(t,e){t.wu.Nt(e),zn(t).jo(e)}function Oa(t){t.wu=new jw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),zn(t).start(),t._u.iu()}function Pa(t){return un(t)&&!zn(t).Do()&&t.hu.size>0}function un(t){return Q(t).lu.size===0}function Zd(t){t.wu=void 0}async function j0(t){t.hu.forEach((e,n)=>{Na(t,e)})}async function q0(t,e){Zd(t),Pa(t)?(t._u.uu(e),Oa(t)):t._u.set("Unknown")}async function z0(t,e,n){if(t._u.set("Online"),e instanceof Vd&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qs(t,r)}else if(e instanceof vs?t.wu.Ut(e):e instanceof xd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(J.min()))try{const r=await Gd(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.hu.get(c);l&&s.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),Jd(s,a);const l=new Kt(c.target,a,1,c.sequenceNumber);Na(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await qs(t,r)}}async function qs(t,e,n){if(!Gr(e))throw e;t.lu.add(1),await Xr(t),t._u.set("Offline"),n||(n=()=>Gd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await vi(t)})}function ef(t,e){return e().catch(n=>qs(t,n,e))}async function _i(t){const e=Q(t),n=Dt(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;H0(e);)try{const s=await D0(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,K0(e,s)}catch(s){await qs(e,s)}tf(e)&&nf(e)}function H0(t){return un(t)&&t.au.length<10}function K0(t,e){t.au.push(e);const n=Dt(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function tf(t){return un(t)&&!Dt(t).Do()&&t.au.length>0}function nf(t){Dt(t).start()}async function G0(t){Dt(t).Xo()}async function W0(t){const e=Dt(t);for(const n of t.au)e.Ho(n.mutations)}async function Q0(t,e,n){const r=t.au.shift(),s=Aa.from(r,e,n);await ef(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _i(t)}async function X0(t,e){e&&Dt(t).zo&&await async function(n,r){if(s=r.code,Uw(s)&&s!==S.ABORTED){const i=n.au.shift();Dt(n).No(),await ef(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _i(n)}var s}(t,e),tf(t)&&nf(t)}async function gl(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=un(n);n.lu.add(3),await Xr(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await vi(n)}async function Y0(t,e){const n=Q(t);e?(n.lu.delete(2),await vi(n)):e||(n.lu.add(2),await Xr(n),n._u.set("Unknown"))}function zn(t){return t.mu||(t.mu=function(e,n,r){const s=Q(e);return s.tu(),new U0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:j0.bind(null,t),Jr:q0.bind(null,t),Go:z0.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Pa(t)?Oa(t):t._u.set("Unknown")):(await t.mu.stop(),Zd(t))})),t.mu}function Dt(t){return t.gu||(t.gu=function(e,n,r){const s=Q(e);return s.tu(),new F0(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:G0.bind(null,t),Jr:X0.bind(null,t),Yo:W0.bind(null,t),Jo:Q0.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await _i(t)):(await t.gu.stop(),t.au.length>0&&(F("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ma(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function La(t,e){if(yt("AsyncQueue",`${e}: ${t}`),Gr(t))return new z(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Yn(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.yu=new Ee(V.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Pn{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Pn(e,n,bn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.Iu=void 0,this.listeners=[]}}class Z0{constructor(){this.queries=new qn(e=>Td(e),fi),this.onlineState="Unknown",this.Tu=new Set}}async function eI(t,e){const n=Q(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new J0),s)try{i.Iu=await n.onListen(r)}catch(o){const a=La(o,`Initialization of query '${To(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&$a(n)}async function tI(t,e){const n=Q(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function nI(t,e){const n=Q(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&$a(n)}function rI(t,e,n){const r=Q(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function $a(t){t.Tu.forEach(e=>{e.next()})}class sI{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.key=e}}class sf{constructor(e){this.key=e}}class iI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=Sd(e),this.Uu=new bn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new pl,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Ta(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?m!==v&&(r.track({type:3,doc:g}),I=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),I=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),I=!0):d&&!g&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Pn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new pl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new sf(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new rf(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Pn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class oI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aI{constructor(e){this.key=e,this.Xu=!1}}class cI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new qn(a=>Td(a),fi),this.ec=new Map,this.nc=new Set,this.sc=new Ee(V.comparator),this.ic=new Map,this.rc=new Ca,this.oc={},this.uc=new Map,this.cc=On.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function lI(t,e){const n=_I(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await R0(n.localStore,vt(e));n.isPrimaryClient&&Xd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await uI(n,e,r,a==="current")}return s}async function uI(t,e,n,r){t.hc=(u,h,d)=>async function(g,m,v,I){let D=m.view.Ku(v);D.Mi&&(D=await hl(g.localStore,m.query,!1).then(({documents:k})=>m.view.Ku(k,D)));const w=I&&I.targetChanges.get(m.targetId),b=m.view.applyChanges(D,g.isPrimaryClient,w);return yl(g,m.targetId,b.zu),b.snapshot}(t,u,h,d);const s=await hl(t.localStore,e,!0),i=new iI(e,s.ji),o=i.Ku(s.documents),a=Qr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);yl(t,n,c.zu);const l=new oI(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function hI(t,e){const n=Q(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!fi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Co(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Yd(n.remoteStore,r.targetId),Do(n,r.targetId)}).catch(Kr)):(Do(n,r.targetId),await Co(n.localStore,r.targetId,!0))}async function dI(t,e,n){const r=wI(t);try{const s=await function(i,o){const a=Q(i),c=we.now(),l=o.reduce((d,g)=>d.add(g.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=_t(),m=Z();return a.Ui.getEntries(d,l).next(v=>{g=v,g.forEach((I,D)=>{D.isValidDocument()||(m=m.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{u=v;const I=[];for(const D of o){const w=Mw(D,u.get(D.key).overlayedDocument);w!=null&&I.push(new ln(D.key,w,Ed(w.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:$d(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Ee(ce)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Yr(r,s.changes),await _i(r.remoteStore)}catch(s){const i=La(s,"Failed to persist write");n.reject(i)}}async function of(t,e){const n=Q(t);try{const r=await A0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?de(o.Xu):s.removedDocuments.size>0&&(de(o.Xu),o.Xu=!1))}),await Yr(n,r,e)}catch(r){await Kr(r)}}function ml(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&$a(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fI(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ee(V.comparator);o=o.insert(i,De.newNoDocument(i,J.min()));const a=Z().add(i),c=new mi(J.min(),new Map,new Ie(ce),o,a);await of(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),Ua(r)}else await Co(r.localStore,e,!1).then(()=>Do(r,e,n)).catch(Kr)}async function gI(t,e){const n=Q(t),r=e.batch.batchId;try{const s=await k0(n.localStore,e);cf(n,r,null),af(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(n,s)}catch(s){await Kr(s)}}async function pI(t,e,n){const r=Q(t);try{const s=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(de(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);cf(r,e,n),af(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yr(r,s)}catch(s){await Kr(s)}}function af(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function cf(t,e,n){const r=Q(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Do(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||lf(t,r)})}function lf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Yd(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Ua(t))}function yl(t,e,n){for(const r of n)r instanceof rf?(t.rc.addReference(r.key,e),mI(t,r)):r instanceof sf?(F("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||lf(t,r.key)):W()}function mI(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.nc.add(r),Ua(t))}function Ua(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new V(ge.fromString(e)),r=t.cc.next();t.ic.set(r,new aI(n)),t.sc=t.sc.insert(n,r),Xd(t.remoteStore,new Kt(vt(ba(n.path)),r,2,_a.ot))}}async function Yr(t,e,n){const r=Q(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Ra.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Gr(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.$i=l.$i.insert(h,m)}}}(r.localStore,i))}async function yI(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await Kd(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new z(S.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yr(n,r.Ki)}}function vI(t,e){const n=Q(t),r=n.ic.get(e);if(r&&r.Xu)return Z().add(r.key);{let s=Z();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function _I(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=of.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fI.bind(null,e),e.Zu.Go=nI.bind(null,e.eventManager),e.Zu.lc=rI.bind(null,e.eventManager),e}function wI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pI.bind(null,e),e}class II{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=yi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return S0(this.persistence,new b0,e.initialUser,this.wt)}_c(e){return new I0(Da.Os,this.wt)}dc(e){return new O0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ml(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await Y0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Z0}createDatastore(e){const n=yi(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new $0(s));var s;return function(i,o,a,c){return new x0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ml(this.syncEngine,a,0),o=fl.V()?new fl:new P0,new B0(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new cI(r,s,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Xr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=vd.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=La(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function SI(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AI(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>gl(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>gl(e.remoteStore,i)),t.onlineComponents=e}async function AI(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await SI(t,new II)),t.offlineComponents}async function uf(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await kI(t,new EI)),t.onlineComponents}function CI(t){return uf(t).then(e=>e.syncEngine)}async function vl(t){const e=await uf(t),n=e.eventManager;return n.onListen=lI.bind(null,e.syncEngine),n.onUnlisten=hI.bind(null,e.syncEngine),n}const _l=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e,n){if(!n)throw new z(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DI(t,e,n,r){if(e===!0&&r===!0)throw new z(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wl(t){if(!V.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Il(t){if(V.isDocumentKey(t))throw new z(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fa(t);throw new z(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,DI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,e instanceof Rn?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new z(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(s.options.projectId)}(e))}get app(){if(!this._app)throw new z(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Q_;switch(n.type){case"gapi":const r=n.client;return de(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new J_(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new z(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_l.get(e);n&&(F("ComponentProvider","Removing Datastore"),_l.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class wi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class kt extends wi{constructor(e,n,r){super(e,n,ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new V(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function RI(t,e,...n){if(t=xe(t),hf("collection","path",e),t instanceof xa){const r=ge.fromString(e,...n);return Il(r),new kt(t,null,r)}{if(!(t instanceof Ke||t instanceof kt))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Il(r),new kt(t.firestore,null,r)}}function Gi(t,e,...n){if(t=xe(t),arguments.length===1&&(e=vd.I()),hf("doc","path",e),t instanceof xa){const r=ge.fromString(e,...n);return wl(r),new Ke(t,null,new V(r))}{if(!(t instanceof Ke||t instanceof kt))throw new z(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return wl(r),new Ke(t.firestore,t instanceof kt?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Wd(this,"async_queue_retry"),this.Kc=()=>{const n=Ki();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ki();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ki();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Ht;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Gr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw yt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=Ma.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function bl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tr extends xa{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new NI,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ff(this),this._firestoreClient.terminate()}}function OI(t=Po()){return an(t,"firestore").getImmediate()}function df(t){return t._firestoreClient||ff(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ff(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new lw(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new TI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Va{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(Le.fromBase64String(e))}catch(n){throw new z(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=/^__.*__$/;class MI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wr(e,this.data,n,this.fieldTransforms)}}function pf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class ja{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ja(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return zs(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(pf(this.Zc)&&PI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class LI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||yi(e)}aa(e,n,r,s=!1){return new ja({Zc:e,methodName:n,ca:r,path:Ue.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function $I(t){const e=t._freezeSettings(),n=yi(t._databaseId);return new LI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UI(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);_f("Data must be an object, but it was:",o,r);const a=yf(r,o);let c,l;if(i.merge)c=new it(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=FI(e,h,n);if(!o.contains(d))throw new z(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);VI(u,d)||u.push(d)}c=new it(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new MI(new We(a),c,l)}function mf(t,e){if(vf(t=xe(t)))return _f("Unsupported field value:",e,t),yf(t,e);if(t instanceof gf)return function(n,r){if(!pf(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=mf(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cw(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=we.fromDate(n);return{timestampValue:js(r.wt,s)}}if(n instanceof we){const s=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:js(r.wt,s)}}if(n instanceof Ba)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:Bd(r.wt,n._byteString)};if(n instanceof Ke){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ka(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Fa(n)}`)}(t,e)}function yf(t,e){const n={};return _d(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(r,s)=>{const i=mf(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Ba||t instanceof Mn||t instanceof Ke||t instanceof gf)}function _f(t,e,n){if(!vf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fa(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function FI(t,e,n){if((e=xe(e))instanceof Va)return e._internalPath;if(typeof e=="string")return wf(t,e);throw zs("Field path arguments must be of type string or ",t,!1,void 0,n)}const xI=new RegExp("[~\\*/\\[\\]]");function wf(t,e,n){if(e.search(xI)>=0)throw zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Va(...e.split("."))._internalPath}catch{throw zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(S.INVALID_ARGUMENT,a+t+c)}function VI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ef("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BI extends If{data(){return super.data()}}function Ef(t,e){return typeof e=="string"?wf(t,e):e instanceof Va?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bf extends If{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ef("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _s extends bf{data(e={}){return super.data(e)}}class jI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _s(this._firestore,this._userDataWriter,r.key,r,new Jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new _s(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new _s(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:qI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function HI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{convertValue(e,n="none"){switch(rn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return jn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ba(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Id(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=Ct(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);de(Hd(r));const s=new Rn(r.get(1),r.get(3)),i=new V(r.popFirst(5));return s.isEqual(n)||yt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Tf extends KI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function WI(t,e,n){t=Tn(t,Ke);const r=Tn(t.firestore,Tr),s=GI(t.converter,e,n);return Sf(r,[UI($I(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ot.none())])}function QI(t){return Sf(Tn(t.firestore,Tr),[new Sa(t._key,ot.none())])}function Tl(t,...e){var n,r,s;t=xe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof Ke)l=Tn(t.firestore,Tr),u=ba(t._key.path),c={next:h=>{e[o]&&e[o](XI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Tn(t,wi);l=Tn(h.firestore,Tr),u=h._query;const d=new Tf(l);c={next:g=>{e[o]&&e[o](new jI(l,d,h,g))},error:e[o+1],complete:e[o+2]},zI(t._query)}return function(h,d,g,m){const v=new bI(m),I=new sI(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>eI(await vl(h),I)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>tI(await vl(h),I))}}(df(l),u,a,c)}function Sf(t,e){return function(n,r){const s=new Ht;return n.asyncQueue.enqueueAndForget(async()=>dI(await CI(n),r,s)),s.promise}(df(t),e)}function XI(t,e,n){const r=n.docs.get(e._key),s=new Tf(t);return new bf(t,s,e._key,r,new Jn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Bn=n})(Dr),at(new tt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Tr(s,new X_(n.getProvider("auth-internal")),new ew(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Xe(Hc,"3.4.14",t),Xe(Hc,"3.4.14","esm2017")})();const YI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},kf=yp(YI),Lt=Ey(kf);hm(Lt,xu);const cs=OI(kf);$v();const JI=new lt,ZI=()=>{const t={loggedIn:!1,user:null},{subscribe:e,update:n}=$n(t);return $u(Lt,r=>{n(r?s=>(s.loggedIn=!0,s.user=r,s):s=>(s.loggedIn=!1,s.user=null,s))}),{subscribe:e,async signUpWithEmail(r,s){return lm(Lt,r,s)},async signInWithEmail(r,s){return um(Lt,r,s)},async signInWithGoogle(){return Lm(Lt,JI)},async signOut(){return dm(Lt)}}};var ws=ZI();function eE(t){let e;return{c(){e=y("i"),f(e,"class","codicon codicon-account")},m(n,r){U(n,e,r)},p:B,d(n){n&&$(e)}}}function tE(t){let e,n;return{c(){e=y("img"),f(e,"class","profile-picture svelte-1rima2j"),Sn(e.src,n=t[0].user.photoURL)||f(e,"src",n),f(e,"alt","Account")},m(r,s){U(r,e,s)},p(r,s){s&1&&!Sn(e.src,n=r[0].user.photoURL)&&f(e,"src",n)},d(r){r&&$(e)}}}function nE(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,v,I,D,w;c=new rg({});function b(x,A){return x[0].loggedIn?tE:eE}let k=b(t),E=k(t);return{c(){e=y("header"),n=y("div"),r=y("a"),r.innerHTML='<i class="codicon codicon-github"></i>',s=L(),i=y("a"),i.innerHTML='<i class="codicon codicon-heart"></i>',o=L(),a=y("a"),re(c.$$.fragment),l=L(),u=y("nav"),h=y("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=L(),g=y("button"),g.innerHTML='<i class="codicon codicon-settings-gear"></i>',m=L(),v=y("button"),E.c(),f(r,"title","Source Code"),f(r,"href","https://github.com/kurozenzen/kurosearch"),f(r,"target","_newtab"),f(r,"class","svelte-1rima2j"),f(i,"title","Sponsor"),f(i,"href","https://ko-fi.com/kurozenzen"),f(i,"target","_newtab"),f(i,"class","svelte-1rima2j"),f(a,"title","Discord Server"),f(a,"href","https://discord.gg/yyJFG5PVBZ"),f(a,"target","_newtab"),f(a,"class","svelte-1rima2j"),f(n,"class","svelte-1rima2j"),f(h,"title","Search"),f(h,"class","svelte-1rima2j"),f(g,"title","Settings"),f(g,"class","svelte-1rima2j"),f(v,"title","Account"),f(v,"class","svelte-1rima2j"),f(u,"class","svelte-1rima2j"),f(e,"role","navigation"),f(e,"class","svelte-1rima2j")},m(x,A){U(x,e,A),p(e,n),p(n,r),p(n,s),p(n,i),p(n,o),p(n,a),te(c,a,null),p(e,l),p(e,u),p(u,h),p(u,d),p(u,g),p(u,m),p(u,v),E.m(v,null),I=!0,D||(w=[ie(h,"click",t[1]),ie(g,"click",t[2]),ie(v,"click",t[3])],D=!0)},p(x,[A]){k===(k=b(x))&&E?E.p(x,A):(E.d(1),E=k(x),E&&(E.c(),E.m(v,null)))},i(x){I||(C(c.$$.fragment,x),I=!0)},o(x){N(c.$$.fragment,x),I=!1},d(x){x&&$(e),ne(c),E.d(),D=!1,Ze(w)}}}function rE(t,e,n){let r;return et(t,ws,a=>n(0,r=a)),[r,()=>qt.navigateTo("search"),()=>qt.navigateTo("settings"),()=>qt.navigateTo("account")]}class sE extends he{constructor(e){super(),ue(this,e,rE,nE,le,{})}}const iE=new IntersectionObserver(t=>{for(const e of t){if(e.target.src===void 0){console.warn("PostObserver is observing an invalid element",e.target);continue}e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):""}},{rootMargin:"1250px"}),Rt=t=>t/1e6>=1?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString();function gn(t,e){const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`}function Sl(t){const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear();if(r)return gn(r,"year");const s=n.getMonth()-e.getMonth();if(s)return gn(s,"month");const i=(n.getTime()-e.getTime())/6e4;if(i===0)return"just now";if(i<60)return gn(i,"minute");const o=i/60;if(o<24)return gn(o,"hour");const a=o/24;if(a<7)return gn(a,"day");const c=a/7;return c<5?gn(c,"week"):"rip"}function Ln(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const Is=Object.freeze(["+","-","~"]),Ii=t=>Is.includes(t),oE=t=>{if(!Ii(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(Is.indexOf(t)+1)%Is.length;return Is[n]},aE=Object.freeze({"+":"","-":"-","~":""}),cE=t=>{if(!Ii(t))throw TypeError("Invalid modifier passed to serializeModifier");return aE[t]},lE=Object.freeze(["general","character","ambiguous","artist","copyright","rating","source","metadata","supertag"]),Af=t=>lE.includes(t),Jr=t=>typeof t=="string"&&t!=="",Cf=t=>typeof t=="number"&&t>=0;class Ei{constructor(e,n){if(!Ii(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Jr(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${cE(this.modifier)}${this.name}`}}class Sr{constructor(e,n,r,s){if(!Ii(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Jr(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Cf(r))throw TypeError("Invalid count passed to ActiveTag constructor");if(!Af(s))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=r,this.type=s,Object.freeze(this)}toSearchableTag(){return new Ei(this.modifier,this.name)}}function uE(){const t=[],{subscribe:e,update:n,set:r}=$n(t);return{subscribe:e,set:r,addOrReplace:s=>n(i=>{const o=i.findIndex(a=>a.name===s.name);return o===-1?i.push(s):i[o]=s,i}),addByName:s=>n(i=>(i.push(new Sr("+",s,0,"general")),i)),removeByIndex:s=>n(i=>(i.splice(s,1),i))}}var jt=uE();function hE(t){let e,n=Ln(t[0])+"",r,s,i;return{c(){e=y("li"),r=pe(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-1r7mf3i"),Qe(e,"active",t[2])},m(o,a){U(o,e,a),p(e,r),s||(i=ie(e,"click",t[4]),s=!0)},p(o,[a]){a&1&&n!==(n=Ln(o[0])+"")&&Re(r,n),a&4&&Qe(e,"active",o[2])},i:B,o:B,d(o){o&&$(e),s=!1,i()}}}function dE(t,e,n){let r,s,i;et(t,jt,c=>n(3,i=c));let{name:o}=e;const a=()=>s?jt.removeByIndex(r):jt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,r=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,s=r>=0)},[o,r,s,i,a]}class fE extends he{constructor(e){super(),ue(this,e,dE,hE,le,{name:0})}}const Df=(t,e)=>{if(!Rf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!gE(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},Rf=t=>{try{return new URL(t),!0}catch{return!1}},gE=t=>t===null||t instanceof AbortController;function pE(t){let e,n;return{c(){e=y("span"),n=pe(t[0])},m(r,s){U(r,e,s),p(e,n)},p(r,s){s&1&&Re(n,r[0])},d(r){r&&$(e)}}}function mE(t){let e,n=t[1].hostname+"",r,s;return{c(){e=y("a"),r=pe(n),f(e,"href",s=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-1qmyyls")},m(i,o){U(i,e,o),p(e,r)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Re(r,n),o&2&&s!==(s=i[1].toString())&&f(e,"href",s)},d(i){i&&$(e)}}}function yE(t){let e,n,r;function s(a,c){return a[1]?mE:pE}let i=s(t),o=i(t);return{c(){e=y("i"),n=L(),o.c(),r=Ar(),f(e,"class","codicon codicon-link")},m(a,c){U(a,e,c),U(a,n,c),o.m(a,c),U(a,r,c)},p(a,[c]){i===(i=s(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(r.parentNode,r)))},i:B,o:B,d(a){a&&$(e),a&&$(n),o.d(a),a&&$(r)}}}function vE(t,e,n){let r,{source:s}=e;return t.$$set=i=>{"source"in i&&n(0,s=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Rf(s)?new URL(s):null)},[s,r]}class _E extends he{constructor(e){super(),ue(this,e,vE,yE,le,{source:0})}}function kl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Al(t){let e,n,r;return n=new _E({props:{source:t[0].source}}),{c(){e=y("div"),re(n.$$.fragment),f(e,"class","svelte-5x11c6")},m(s,i){U(s,e,i),te(n,e,null),r=!0},p(s,i){const o={};i&1&&(o.source=s[0].source),n.$set(o)},i(s){r||(C(n.$$.fragment,s),r=!0)},o(s){N(n.$$.fragment,s),r=!1},d(s){s&&$(e),ne(n)}}}function Cl(t){let e,n;return e=new fE({props:{name:t[1]}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.name=r[1]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function wE(t){let e,n,r,s,i,o=Sl(t[0].created_at)+"",a,c,l,u,h,d,g=Rt(t[0].score)+"",m,v,I,D,w,b=t[0].source&&Al(t),k=t[0].tags,E=[];for(let A=0;A<k.length;A+=1)E[A]=Cl(kl(t,k,A));const x=A=>N(E[A],1,1,()=>{E[A]=null});return{c(){e=y("div"),n=y("div"),r=y("i"),s=L(),i=y("span"),a=pe(o),c=L(),l=y("div"),u=y("i"),h=L(),d=y("span"),m=pe(g),v=L(),b&&b.c(),I=L(),D=y("ul");for(let A=0;A<E.length;A+=1)E[A].c();f(r,"class","codicon codicon-calendar"),f(i,"class","svelte-5x11c6"),f(n,"class","svelte-5x11c6"),f(u,"class","codicon codicon-heart"),f(d,"class","svelte-5x11c6"),f(l,"class","svelte-5x11c6"),f(e,"class","summary svelte-5x11c6"),f(D,"class","svelte-5x11c6")},m(A,M){U(A,e,M),p(e,n),p(n,r),p(n,s),p(n,i),p(i,a),p(e,c),p(e,l),p(l,u),p(l,h),p(l,d),p(d,m),p(e,v),b&&b.m(e,null),U(A,I,M),U(A,D,M);for(let j=0;j<E.length;j+=1)E[j].m(D,null);w=!0},p(A,[M]){if((!w||M&1)&&o!==(o=Sl(A[0].created_at)+"")&&Re(a,o),(!w||M&1)&&g!==(g=Rt(A[0].score)+"")&&Re(m,g),A[0].source?b?(b.p(A,M),M&1&&C(b,1)):(b=Al(A),b.c(),C(b,1),b.m(e,null)):b&&(Ne(),N(b,1,1,()=>{b=null}),Oe()),M&1){k=A[0].tags;let j;for(j=0;j<k.length;j+=1){const P=kl(A,k,j);E[j]?(E[j].p(P,M),C(E[j],1)):(E[j]=Cl(P),E[j].c(),C(E[j],1),E[j].m(D,null))}for(Ne(),j=k.length;j<E.length;j+=1)x(j);Oe()}},i(A){if(!w){C(b);for(let M=0;M<k.length;M+=1)C(E[M]);w=!0}},o(A){N(b),E=E.filter(Boolean);for(let M=0;M<E.length;M+=1)N(E[M]);w=!1},d(A){A&&$(e),b&&b.d(),A&&$(I),A&&$(D),Nt(E,A)}}}function IE(t,e,n){let{post:r}=e;return t.$$set=s=>{"post"in s&&n(0,r=s.post)},[r]}class EE extends he{constructor(e){super(),ue(this,e,IE,wE,le,{post:0})}}function bE(t){let e,n,r,s,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){U(a,e,c),t[6](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[6](null)}}}function TE(t){let e,n,r,s,i,o;return{c(){e=y("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-1xnjrgd")},m(a,c){U(a,e,c),t[5](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[5](null)}}}function SE(t){let e,n,r,s,i,o;return{c(){e=y("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",r=t[0].id.toString()),f(e,"style",s=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-1xnjrgd")},m(a,c){U(a,e,c),t[4](e)},p(a,c){c&1&&n!==(n=a[0].sample_url)&&f(e,"data-src",n),c&1&&r!==(r=a[0].id.toString())&&f(e,"alt",r),c&1&&s!==(s=`aspect-ratio: ${a[0].width} / ${a[0].height}`)&&f(e,"style",s),c&1&&i!==(i=a[0].width)&&f(e,"width",i),c&1&&o!==(o=a[0].height)&&f(e,"height",o)},d(a){a&&$(e),t[4](null)}}}function Dl(t){let e,n;return e=new EE({props:{post:t[0]}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[0]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function kE(t){let e,n,r,s,i,o;function a(h,d){return h[0].type==="image"?SE:h[0].type==="video"?TE:bE}let c=a(t),l=c(t),u=t[2]&&Dl(t);return{c(){e=y("div"),n=y("div"),l.c(),r=L(),u&&u.c(),f(n,"class","content"),f(e,"class","post svelte-1xnjrgd"),f(e,"tabindex","0")},m(h,d){U(h,e,d),p(e,n),l.m(n,null),p(e,r),u&&u.m(e,null),s=!0,i||(o=ie(n,"click",t[3]),i=!0)},p(h,[d]){c===(c=a(h))&&l?l.p(h,d):(l.d(1),l=c(h),l&&(l.c(),l.m(n,null))),h[2]?u?(u.p(h,d),d&4&&C(u,1)):(u=Dl(h),u.c(),C(u,1),u.m(e,null)):u&&(Ne(),N(u,1,1,()=>{u=null}),Oe())},i(h){s||(C(u),s=!0)},o(h){N(u),s=!1},d(h){h&&$(e),l.d(),u&&u.d(),i=!1,o()}}}function AE(t,e,n){let{post:r}=e,s,i=!1;const o=()=>{n(2,i=!i)};function a(u){_n[u?"unshift":"push"](()=>{s=u,n(1,s)})}function c(u){_n[u?"unshift":"push"](()=>{s=u,n(1,s)})}function l(u){_n[u?"unshift":"push"](()=>{s=u,n(1,s)})}return t.$$set=u=>{"post"in u&&n(0,r=u.post)},t.$$.update=()=>{t.$$.dirty&2&&s&&iE.observe(s)},[r,s,i,o,a,c,l]}class CE extends he{constructor(e){super(),ue(this,e,AE,kE,le,{post:0})}}function Rl(t,e,n){const r=t.slice();return r[1]=e[n],r}function Nl(t){let e,n;return e=new CE({props:{post:t[1]}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.post=r[1]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function DE(t){let e,n,r=t[0],s=[];for(let o=0;o<r.length;o+=1)s[o]=Nl(Rl(t,r,o));const i=o=>N(s[o],1,1,()=>{s[o]=null});return{c(){e=y("ol");for(let o=0;o<s.length;o+=1)s[o].c();f(e,"class","page svelte-5hdzo")},m(o,a){U(o,e,a);for(let c=0;c<s.length;c+=1)s[c].m(e,null);n=!0},p(o,[a]){if(a&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const l=Rl(o,r,c);s[c]?(s[c].p(l,a),C(s[c],1)):(s[c]=Nl(l),s[c].c(),C(s[c],1),s[c].m(e,null))}for(Ne(),c=r.length;c<s.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)C(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)N(s[a]);n=!1},d(o){o&&$(e),Nt(s,o)}}}function RE(t,e,n){let{posts:r}=e;return t.$$set=s=>{"posts"in s&&n(0,r=s.posts)},[r]}class NE extends he{constructor(e){super(),ue(this,e,RE,DE,le,{posts:0})}}function OE(t){let e,n,r,s,i,o,a;return{c(){e=y("button"),n=y("i"),s=L(),i=pe(t[1]),f(n,"class",r=`codicon codicon-${t[0]}`),f(e,"title",t[2]),e.disabled=t[3],f(e,"class","svelte-4qhlub")},m(c,l){U(c,e,l),p(e,n),p(e,s),p(e,i),o||(a=ie(e,"click",t[5]),o=!0)},p(c,[l]){l&1&&r!==(r=`codicon codicon-${c[0]}`)&&f(n,"class",r),l&2&&Re(i,c[1]),l&4&&f(e,"title",c[2]),l&8&&(e.disabled=c[3])},i:B,o:B,d(c){c&&$(e),o=!1,a()}}}function PE(t,e,n){let{icon:r}=e,{text:s}=e,{title:i}=e,{disabled:o=!1}=e;const a=wt(),c=()=>a("click");return t.$$set=l=>{"icon"in l&&n(0,r=l.icon),"text"in l&&n(1,s=l.text),"title"in l&&n(2,i=l.title),"disabled"in l&&n(3,o=l.disabled)},[r,s,i,o,a,c]}class bi extends he{constructor(e){super(),ue(this,e,PE,OE,le,{icon:0,text:1,title:2,disabled:3})}}function sn(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}function ME(t){let e,n,r,s;return{c(){e=y("i"),f(e,"title",t[0]),f(e,"class",n=Gt(`codicon codicon-${t[1]}`)+" svelte-htt49j"),f(e,"tabindex","0"),Qe(e,"active",t[2])},m(i,o){U(i,e,o),r||(s=[ie(e,"click",t[3]),ie(e,"keyup",sn(t[3]))],r=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=Gt(`codicon codicon-${i[1]}`)+" svelte-htt49j")&&f(e,"class",n),o&6&&Qe(e,"active",i[2])},i:B,o:B,d(i){i&&$(e),r=!1,Ze(s)}}}function LE(t,e,n){let{title:r=void 0}=e,{icon:s}=e,{active:i}=e;const o=wt(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,r=c.title),"icon"in c&&n(1,s=c.icon),"active"in c&&n(2,i=c.active)},[r,s,i,a]}class $E extends he{constructor(e){super(),ue(this,e,LE,ME,le,{title:0,icon:1,active:2})}}const Ol=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),Pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),Ml=Object.freeze({"+":"include","-":"exclude","~":"optional"});function UE(t){let e,n,r,s,i;return{c(){e=y("i"),f(e,"tabindex","0"),f(e,"class",n=`codicon codicon-${Ol[t[0]]}`),f(e,"title",r=Pl[t[0]])},m(o,a){U(o,e,a),s||(i=[ie(e,"click",t[1]),ie(e,"keyup",sn(t[1]))],s=!0)},p(o,[a]){a&1&&n!==(n=`codicon codicon-${Ol[o[0]]}`)&&f(e,"class",n),a&1&&r!==(r=Pl[o[0]])&&f(e,"title",r)},i:B,o:B,d(o){o&&$(e),s=!1,Ze(i)}}}function FE(t,e,n){let r="+";const s=wt();return[r,()=>{n(0,r=oE(r)),s("change",r)}]}class xE extends he{constructor(e){super(),ue(this,e,FE,UE,le,{})}}function VE(t){let e;return{c(){e=y("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,r){U(n,e,r)},p:B,i:B,o:B,d(n){n&&$(e)}}}class BE extends he{constructor(e){super(),ue(this,e,null,VE,le,{})}}class Nf{constructor(e,n,r){if(!Jr(e))throw TypeError("Invalid name passed to Tag constructor");if(!Cf(n))throw TypeError("Invalid count passed to Tag constructor");if(!Af(r))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=r,Object.freeze(this)}toActiveTag(e){return new Sr(e,this.name,this.count,this.type)}}let jE=null;const qE=async(t,e)=>{const n=e?`*${t}*`:t,r=await Df(`https://r34-json.herokuapp.com/v2/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,jE);if(r.ok){const s=await r.json();if(Array.isArray(s)){if(s.length==0)throw new Error("No tags found");return s.map(o=>new Nf(o.name,o.count,zE(o.types)))}else throw s.message?new Error(s.message):new Error("Cannot display tag suggestions")}else throw new Error("Failed to get tag suggestions")};function zE(t){for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"}class Of{constructor(e,n,r){if(!Jr(e))throw new TypeError("Invalid name passed to Supertag");if(!HE(r))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...r]),Object.freeze(this)}}const HE=t=>Array.isArray(t)&&t.every(e=>e instanceof Ei),Wi=async t=>{const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")},KE=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=$n(t);let r,s=null,i=null;return $u(Lt,async o=>{if(r=o,o){const a=await Wi(o.email);s==null||s(),s=Tl(Gi(cs,"users",a),async c=>{const l=c.data();if(l===void 0)n(u=>(u.preferences={},u));else{n(h=>(h.preferences=l.preferences,h));const u=HI(RI(cs,`users/${a}/supertags`));i==null||i(),i=Tl(u,h=>{const d=[];h.forEach(g=>{const m=g.data();d.push(new Of(g.id,m.description,Object.entries(m.tags).map(v=>new Ei(v[1],v[0]))))}),n(g=>(g.supertags=d,g))})}})}else s==null||s(),i==null||i(),s=null,i=null}),{subscribe:e,async addSupertag(o){if(!r)throw new Error("No user");const a=await Wi(r.email);debugger;return WI(Gi(cs,`users/${a}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(c=>[c.name,c.modifier]))})},async deleteSupertag(o){if(!r)throw new Error("No user");const a=await Wi(r.email);return QI(Gi(cs,`users/${a}/supertags`,o.name))}}};var kr=KE();const Ll=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function GE(t){let e,n;return{c(){e=y("i"),f(e,"class",n=`codicon codicon-${Ll[t[0]]}`)},m(r,s){U(r,e,s)},p(r,[s]){s&1&&n!==(n=`codicon codicon-${Ll[r[0]]}`)&&f(e,"class",n)},i:B,o:B,d(r){r&&$(e)}}}function WE(t,e,n){let{type:r}=e;return t.$$set=s=>{"type"in s&&n(0,r=s.type)},[r]}class Pf extends he{constructor(e){super(),ue(this,e,WE,GE,le,{type:0})}}function QE(t){let e,n,r,s,i=Ln(t[0].name)+"",o,a,c,l=Rt(t[0].count)+"",u,h,d,g,m;return n=new Pf({props:{type:t[0].type}}),{c(){e=y("li"),re(n.$$.fragment),r=L(),s=y("span"),o=pe(i),a=L(),c=y("span"),u=pe(l),f(s,"class","tag-name svelte-18s3mn"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-18s3mn")},m(v,I){U(v,e,I),te(n,e,null),p(e,r),p(e,s),p(s,o),p(e,a),p(e,c),p(c,u),d=!0,g||(m=ie(e,"click",t[2]),g=!0)},p(v,[I]){const D={};I&1&&(D.type=v[0].type),n.$set(D),(!d||I&1)&&i!==(i=Ln(v[0].name)+"")&&Re(o,i),(!d||I&1)&&l!==(l=Rt(v[0].count)+"")&&Re(u,l),(!d||I&1&&h!==(h=v[0].name))&&f(e,"title",h)},i(v){d||(C(n.$$.fragment,v),d=!0)},o(v){N(n.$$.fragment,v),d=!1},d(v){v&&$(e),ne(n),g=!1,m()}}}function XE(t,e,n){let{tag:r}=e;const s=wt(),i=()=>s("click",r);return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class YE extends he{constructor(e){super(),ue(this,e,XE,QE,le,{tag:0})}}function $l(t,e,n){const r=t.slice();return r[20]=e[n],r}function JE(t){let e,n,r,s,i=t[23].message+"",o;return{c(){e=y("div"),n=y("i"),r=L(),s=y("span"),o=pe(i),f(n,"class",Gt("codicon codicon-error")+" svelte-1d9l3qv"),f(e,"class","error-container svelte-1d9l3qv")},m(a,c){U(a,e,c),p(e,n),p(e,r),p(e,s),p(s,o)},p(a,c){c&4&&i!==(i=a[23].message+"")&&Re(o,i)},i:B,o:B,d(a){a&&$(e)}}}function ZE(t){let e,n,r=t[5],s=[];for(let o=0;o<r.length;o+=1)s[o]=Ul($l(t,r,o));const i=o=>N(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Ar()},m(o,a){for(let c=0;c<s.length;c+=1)s[c].m(o,a);U(o,e,a),n=!0},p(o,a){if(a&424){r=o[5];let c;for(c=0;c<r.length;c+=1){const l=$l(o,r,c);s[c]?(s[c].p(l,a),C(s[c],1)):(s[c]=Ul(l),s[c].c(),C(s[c],1),s[c].m(e.parentNode,e))}for(Ne(),c=r.length;c<s.length;c+=1)i(c);Oe()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)C(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)N(s[a]);n=!1},d(o){Nt(s,o),o&&$(e)}}}function Ul(t){let e,n;function r(){return t[16](t[20])}return e=new YE({props:{tag:t[20]}}),e.$on("click",r),{c(){re(e.$$.fragment)},m(s,i){te(e,s,i),n=!0},p(s,i){t=s;const o={};i&32&&(o.tag=t[20]),e.$set(o)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function eb(t){let e,n,r;return n=new BE({}),{c(){e=y("div"),re(n.$$.fragment),f(e,"class","hint-container svelte-1d9l3qv")},m(s,i){U(s,e,i),te(n,e,null),r=!0},p:B,i(s){r||(C(n.$$.fragment,s),r=!0)},o(s){N(n.$$.fragment,s),r=!1},d(s){s&&$(e),ne(n)}}}function tb(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,v,I;o=new xE({}),o.$on("change",t[12]),c=new $E({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[13]);let D={ctx:t,current:null,token:null,hasCatch:!0,pending:eb,then:ZE,catch:JE,error:23,blocks:[,,,]};return Ya(g=t[2],D),{c(){e=y("div"),n=y("i"),r=L(),s=y("input"),i=L(),re(o.$$.fragment),a=L(),re(c.$$.fragment),l=L(),u=y("i"),h=L(),d=y("ol"),D.block.c(),f(n,"class","codicon codicon-search"),f(s,"type","text"),f(s,"aria-label","Search for tags."),f(s,"class","svelte-1d9l3qv"),f(u,"tabindex","0"),f(u,"class",Gt("codicon codicon-question")+" svelte-1d9l3qv"),f(d,"class","svelte-1d9l3qv"),Qe(d,"open",t[4]),f(e,"class","searchbar svelte-1d9l3qv"),Qe(e,"open",t[4])},m(w,b){U(w,e,b),p(e,n),p(e,r),p(e,s),pn(s,t[0]),p(e,i),te(o,e,null),p(e,a),te(c,e,null),p(e,l),p(e,u),p(e,h),p(e,d),D.block.m(d,D.anchor=null),D.mount=()=>d,D.anchor=null,m=!0,v||(I=[ie(s,"input",t[9]),ie(s,"blur",t[10]),ie(s,"focus",t[11]),ie(u,"click",t[14]),ie(u,"keyup",function(){ru(sn(t[15]))&&sn(t[15]).apply(this,arguments)}),ie(e,"blur",t[17])],v=!0)},p(w,[b]){t=w,b&1&&s.value!==t[0]&&pn(s,t[0]);const k={};b&2&&(k.active=!t[1]),c.$set(k),D.ctx=t,b&4&&g!==(g=t[2])&&Ya(g,D)||Yf(D,t,b),b&16&&Qe(d,"open",t[4]),b&16&&Qe(e,"open",t[4])},i(w){m||(C(o.$$.fragment,w),C(c.$$.fragment,w),C(D.block),m=!0)},o(w){N(o.$$.fragment,w),N(c.$$.fragment,w);for(let b=0;b<3;b+=1){const k=D.blocks[b];N(k)}m=!1},d(w){w&&$(e),ne(o),ne(c),D.block.d(),D.token=null,D=null,v=!1,Ze(I)}}}function nb(t,e,n){let r,s;et(t,kr,A=>n(18,r=A)),et(t,qt,A=>n(6,s=A));const i=wt();let o,a="",c=!0,l="+",u=!1,h=[];async function d(A,M){n(4,u=!0),n(5,h=[...r.supertags.filter(j=>j.name.toLowerCase().includes(M.toLowerCase())).map(j=>new Nf(j.name,Object.keys(j.tags).length,"supertag")),...await qE(M,A)])}const g=()=>{n(0,a=""),n(5,h=[]),n(4,u=!1)};function m(){a=this.value,n(0,a)}const v=A=>{(!A.relatedTarget||!A.target.parentNode.contains(A.relatedTarget))&&n(4,u=!1)},I=()=>{n(4,u=!0)},D=A=>{n(3,l=A.detail)},w=()=>{n(1,c=!c)},b=()=>{Qa(qt,s="help",s)},k=()=>{Qa(qt,s="help",s)},E=A=>{i("pick",A.toActiveTag(l)),g()},x=()=>{n(4,u=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,h=[]),a!==""&&n(2,o=d(c,a)))},[a,c,o,l,u,h,s,i,g,m,v,I,D,w,b,k,E,x]}class rb extends he{constructor(e){super(),ue(this,e,nb,tb,le,{})}}function sb(t){let e,n,r,s=Ln(t[0].name)+"",i,o,a=Rt(t[0].count)+"",c,l,u,h,d,g;return n=new Pf({props:{type:t[0].type}}),{c(){e=y("li"),re(n.$$.fragment),r=L(),i=pe(s),o=pe(`
  (`),c=pe(a),l=pe(")"),f(e,"class",u=Gt(Ml[t[0].modifier])+" svelte-apze1c"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Qe(e,"no-icon",t[0].type==="general")},m(m,v){U(m,e,v),te(n,e,null),p(e,r),p(e,i),p(e,o),p(e,c),p(e,l),h=!0,d||(g=ie(e,"click",t[2]),d=!0)},p(m,[v]){const I={};v&1&&(I.type=m[0].type),n.$set(I),(!h||v&1)&&s!==(s=Ln(m[0].name)+"")&&Re(i,s),(!h||v&1)&&a!==(a=Rt(m[0].count)+"")&&Re(c,a),(!h||v&1&&u!==(u=Gt(Ml[m[0].modifier])+" svelte-apze1c"))&&f(e,"class",u),v&1&&Qe(e,"no-icon",m[0].type==="general")},i(m){h||(C(n.$$.fragment,m),h=!0)},o(m){N(n.$$.fragment,m),h=!1},d(m){m&&$(e),ne(n),d=!1,g()}}}function ib(t,e,n){let{tag:r}=e;const s=wt(),i=()=>s("click");return t.$$set=o=>{"tag"in o&&n(0,r=o.tag)},[r,s,i]}class qa extends he{constructor(e){super(),ue(this,e,ib,sb,le,{tag:0})}}function ob(t){let e;return{c(){e=y("div")},m(n,r){U(n,e,r),t[1](e)},p:B,i:B,o:B,d(n){n&&$(e),t[1](null)}}}function ab(t,e,n){const r=wt(),s=new IntersectionObserver(a=>{a[0].isIntersecting&&(console.debug("Triggered infinite loading"),r("visible"))},{rootMargin:"1250px"});let i;function o(a){_n[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(s.disconnect(),i&&s.observe(i))},[i,o]}class cb extends he{constructor(e){super(),ue(this,e,ab,ob,le,{})}}var lb="/kurosearch/assets/shironeko-confused.4071d5b2.png";function ub(t){let e,n,r,s,i;return{c(){e=y("div"),n=y("img"),s=L(),i=y("span"),i.textContent="No results found",Sn(n.src,r=lb)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){U(o,e,a),p(e,n),p(e,s),p(e,i)},p:B,i:B,o:B,d(o){o&&$(e)}}}class hb extends he{constructor(e){super(),ue(this,e,null,ub,le,{})}}var db="/kurosearch/assets/shironeko-x.c28cad00.png";function fb(t){let e,n,r,s,i;return{c(){e=y("div"),n=y("img"),s=L(),i=y("span"),i.textContent="You have reached the end",Sn(n.src,r=db)||f(n,"src",r),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){U(o,e,a),p(e,n),p(e,s),p(e,i)},p:B,i:B,o:B,d(o){o&&$(e)}}}class gb extends he{constructor(e){super(),ue(this,e,null,fb,le,{})}}class pb{constructor(e,n){this.count=e,this.posts=n,Object.freeze(this)}}class mb{constructor(e,n,r,s,i,o,a,c,l,u,h,d,g,m,v,I,D,w,b,k,E,x,A,M,j,P){this.preview_url=e,this.sample_url=n,this.file_url=r,this.created_at=s,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=g,this.preview_width=m,this.preview_height=v,this.rating=I,this.sample_height=D,this.sample_width=w,this.score=b,this.source=k,this.status=E,this.tags=x,this.width=A,this.comments_url=M,this.owner_url=j,this.type=P,Object.freeze(this)}}const yb=Object.freeze(["id","score"]),vb=t=>yb.includes(t),Mf=20,_b="https://r34-json.herokuapp.com/v2";let wb=null;const Ib=async(t,e,n,r)=>{if(!Eb(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!bb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!vb(n))throw new TypeError("Invalid sort property passed to getPage");if(!Tb(r))throw new TypeError("Invalid minimum score passed to getPage");const s=Sb(e,n,r),i=await Df(kb(t,s),wb);if(!i.ok)throw new Error(`getPage failed with http status ${i.status}`);const o=await i.json();if(!Array.isArray(o.posts))throw new Error(o);return new pb(o.count,o.posts.map(a=>new mb(a.preview_url,a.sample_url,a.file_url,a.created_at,a.has_children,a.md5,a.height,a.id,a.change,a.creator_id,a.has_notes,a.has_comments,a.parent_id,a.preview_width,a.preview_height,a.rating,a.sample_height,a.sample_width,a.score,a.source,a.status,a.tags,a.width,a.comments_url,a.owner_url,a.type)))},Eb=t=>typeof t=="number"&&t>=0,bb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Ei)),Tb=t=>typeof t=="number"&&t>=0,Sb=(t,e,n)=>{const r=t.reduce((i,o)=>(o.modifier==="~"?i.optional.push(o):i.other.push(o),i),{optional:[],other:[]}),s=[...r.other.map(i=>i.serialize()),`sort:${e}:desc`,`score:>=${n}`].join("+");return r.optional.length==0?s:`${s}+( ${r.optional.map(i=>i.serialize()).join(" ~ ")} )`},kb=(t,e)=>{const n=`${_b}/posts?limit=${Mf}&pid=${t}`;return e===""?n:`${n}&tags=${e}`};function Ab(t){let e,n,r;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-2tve8k"),Qe(e,"visible",t[0])},m(s,i){U(s,e,i),n||(r=ie(e,"click",t[1]),n=!0)},p(s,[i]){i&1&&Qe(e,"visible",s[0])},i:B,o:B,d(s){s&&$(e),n=!1,r()}}}function Cb(t,e,n){let r=0,s=!1;const i=()=>{const a=window.scrollY;n(0,s=a<r&&a>1e3),r=a};return Kf(()=>{document.addEventListener("scroll",i,{passive:!0})}),Gf(()=>{document.removeEventListener("scroll",i)}),[s,()=>window.scrollTo(0,0)]}class Db extends he{constructor(e){super(),ue(this,e,Cb,Ab,le,{})}}const Rb=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:r}=$n(t);return{subscribe:e,addPage(s){n(i=>(i.count=s.count,i.pages.push(s.posts),i.nextPage=i.nextPage+1,i))},reset(){r(t)}}};var Qi=Rb();function Fl(t,e,n){const r=t.slice();return r[9]=e[n],r}function xl(t){let e,n;return e=new qa({props:{tag:t[9]}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&4&&(i.tag=r[9]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Nb(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,v,I,D,w,b,k,E,x,A,M,j=t[2],P=[];for(let R=0;R<j.length;R+=1)P[R]=xl(Fl(t,j,R));const oe=R=>N(P[R],1,1,()=>{P[R]=null});return E=new bi({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",icon:"plus",text:"Create supertag",disabled:!t[3]}}),E.$on("click",t[8]),{c(){e=y("dialog"),n=y("h3"),n.textContent="Create Supertag",r=L(),s=y("i"),i=L(),o=y("div"),a=y("label"),a.textContent="Name",c=L(),l=y("input"),u=L(),h=y("div"),d=y("label"),d.textContent="Description",g=L(),m=y("textarea"),v=L(),I=y("div"),D=y("span"),D.textContent="Tags",w=L(),b=y("ol");for(let R=0;R<P.length;R+=1)P[R].c();k=L(),re(E.$$.fragment),f(s,"tabindex","0"),f(s,"class",Gt("codicon codicon-close")+" svelte-64l7g"),f(a,"for","supertag-name"),f(a,"class","svelte-64l7g"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-64l7g"),f(o,"class","svelte-64l7g"),f(d,"for","supertag-description"),f(d,"class","svelte-64l7g"),f(m,"type","text"),f(m,"placeholder","Short description"),f(m,"id","supertag-description"),f(m,"class","svelte-64l7g"),f(h,"class","svelte-64l7g"),f(D,"class","svelte-64l7g"),f(b,"class","svelte-64l7g"),f(I,"class","svelte-64l7g"),f(e,"class","svelte-64l7g")},m(R,ae){U(R,e,ae),p(e,n),p(e,r),p(e,s),p(e,i),p(e,o),p(o,a),p(o,c),p(o,l),pn(l,t[0]),p(e,u),p(e,h),p(h,d),p(h,g),p(h,m),pn(m,t[1]),p(e,v),p(e,I),p(I,D),p(I,w),p(I,b);for(let q=0;q<P.length;q+=1)P[q].m(b,null);p(e,k),te(E,e,null),x=!0,A||(M=[ie(s,"click",t[5]),ie(s,"keyup",sn(t[5])),ie(l,"input",t[6]),ie(m,"input",t[7])],A=!0)},p(R,[ae]){if(ae&1&&l.value!==R[0]&&pn(l,R[0]),ae&2&&pn(m,R[1]),ae&4){j=R[2];let me;for(me=0;me<j.length;me+=1){const X=Fl(R,j,me);P[me]?(P[me].p(X,ae),C(P[me],1)):(P[me]=xl(X),P[me].c(),C(P[me],1),P[me].m(b,null))}for(Ne(),me=j.length;me<P.length;me+=1)oe(me);Oe()}const q={};ae&8&&(q.title=R[3]?"Click to create supertag":"Enter a valid name to continue"),ae&8&&(q.disabled=!R[3]),E.$set(q)},i(R){if(!x){for(let ae=0;ae<j.length;ae+=1)C(P[ae]);C(E.$$.fragment,R),x=!0}},o(R){P=P.filter(Boolean);for(let ae=0;ae<P.length;ae+=1)N(P[ae]);N(E.$$.fragment,R),x=!1},d(R){R&&$(e),Nt(P,R),ne(E),A=!1,Ze(M)}}}function Ob(t,e,n){let r,{name:s=""}=e,{description:i=""}=e,{tags:o}=e;const a=wt(),c=()=>a("close");function l(){s=this.value,n(0,s)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new Of(s,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,s=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=Jr(s))},[s,i,o,r,a,c,l,u,h]}class Pb extends he{constructor(e){super(),ue(this,e,Ob,Nb,le,{name:0,description:1,tags:2})}}function Vl(t,e,n){const r=t.slice();return r[17]=e[n],r}function Bl(t,e,n){const r=t.slice();return r[20]=e[n],r[22]=n,r}function jl(t){let e,n,r,s=t[3],i=[];for(let c=0;c<s.length;c+=1)i[c]=ql(Bl(t,s,c));const o=c=>N(i[c],1,1,()=>{i[c]=null});let a=t[3].length>1&&zl(t);return{c(){e=y("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=L(),a&&a.c(),f(e,"class","svelte-1toz0qq")},m(c,l){U(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);p(e,n),a&&a.m(e,null),r=!0},p(c,l){if(l&8){s=c[3];let u;for(u=0;u<s.length;u+=1){const h=Bl(c,s,u);i[u]?(i[u].p(h,l),C(i[u],1)):(i[u]=ql(h),i[u].c(),C(i[u],1),i[u].m(e,n))}for(Ne(),u=s.length;u<i.length;u+=1)o(u);Oe()}c[3].length>1?a?a.p(c,l):(a=zl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!r){for(let l=0;l<s.length;l+=1)C(i[l]);r=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)N(i[l]);r=!1},d(c){c&&$(e),Nt(i,c),a&&a.d()}}}function ql(t){let e,n;function r(){return t[8](t[22])}return e=new qa({props:{tag:t[20]}}),e.$on("click",r),{c(){re(e.$$.fragment)},m(s,i){te(e,s,i),n=!0},p(s,i){t=s;const o={};i&8&&(o.tag=t[20]),e.$set(o)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){N(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function zl(t){let e,n,r;return{c(){e=y("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1toz0qq"></i>',f(e,"class","add-supertag svelte-1toz0qq"),f(e,"title","Click to create a new supertag")},m(s,i){U(s,e,i),n||(r=ie(e,"click",t[9]),n=!0)},p:B,d(s){s&&$(e),n=!1,r()}}}function Mb(t){let e,n;return e=new hb({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:B,i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Lb(t){let e,n=Rt(t[4].count)+"",r,s,i,o,a,c,l,u,h,d=t[4].pages,g=[];for(let w=0;w<d.length;w+=1)g[w]=Hl(Vl(t,d,w));const m=w=>N(g[w],1,1,()=>{g[w]=null}),v=[Ub,$b],I=[];function D(w,b){return w[4].pages.length<w[4].count/Mf?0:1}return c=D(t),l=I[c]=v[c](t),{c(){e=y("p"),r=pe(n),s=pe(" results"),i=L(),o=y("ol");for(let w=0;w<g.length;w+=1)g[w].c();a=L(),l.c(),u=Ar(),f(e,"class","count svelte-1toz0qq"),f(o,"class","svelte-1toz0qq")},m(w,b){U(w,e,b),p(e,r),p(e,s),U(w,i,b),U(w,o,b);for(let k=0;k<g.length;k+=1)g[k].m(o,null);U(w,a,b),I[c].m(w,b),U(w,u,b),h=!0},p(w,b){if((!h||b&16)&&n!==(n=Rt(w[4].count)+"")&&Re(r,n),b&16){d=w[4].pages;let E;for(E=0;E<d.length;E+=1){const x=Vl(w,d,E);g[E]?(g[E].p(x,b),C(g[E],1)):(g[E]=Hl(x),g[E].c(),C(g[E],1),g[E].m(o,null))}for(Ne(),E=d.length;E<g.length;E+=1)m(E);Oe()}let k=c;c=D(w),c===k?I[c].p(w,b):(Ne(),N(I[k],1,1,()=>{I[k]=null}),Oe(),l=I[c],l?l.p(w,b):(l=I[c]=v[c](w),l.c()),C(l,1),l.m(u.parentNode,u))},i(w){if(!h){for(let b=0;b<d.length;b+=1)C(g[b]);C(l),h=!0}},o(w){g=g.filter(Boolean);for(let b=0;b<g.length;b+=1)N(g[b]);N(l),h=!1},d(w){w&&$(e),w&&$(i),w&&$(o),Nt(g,w),w&&$(a),I[c].d(w),w&&$(u)}}}function Hl(t){let e,n;return e=new NE({props:{posts:t[17]}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&16&&(i.posts=r[17]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function $b(t){let e,n;return e=new gb({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:B,i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Ub(t){let e,n;return e=new cb({}),e.$on("visible",t[6]),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p:B,i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Kl(t){let e,n;return e=new Pb({props:{tags:t[3]}}),e.$on("submit",t[13]),e.$on("close",t[14]),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&8&&(i.tags=r[3]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Fb(t){let e,n,r,s,i,o,a,c,l,u,h,d,g,m,v,I,D,w,b,k,E,x,A,M,j,P,oe,R,ae;s=new rb({}),s.$on("pick",t[7]);let q=t[3].length&&jl(t);c=new bi({props:{title:"Click to search with active tags",icon:"search",text:"Search"}}),c.$on("click",t[10]);const me=[Lb,Mb],X=[];function be(G,Te){return G[4].count?0:G[4].count===0?1:-1}~(E=be(t))&&(x=X[E]=me[E](t)),M=new Db({});let Y=t[2]&&Kl(t);return{c(){e=y("div"),n=y("h1"),n.textContent="kurosearch",r=L(),re(s.$$.fragment),i=L(),q&&q.c(),o=L(),a=y("div"),re(c.$$.fragment),l=L(),u=y("div"),h=y("select"),d=y("option"),d.textContent="New posts",g=y("option"),g.textContent="Popular posts",m=L(),v=y("select"),I=y("option"),I.textContent="No minimum score",D=y("option"),D.textContent="Min 10 likes",w=y("option"),w.textContent="Min 100 likes",b=y("option"),b.textContent="Min 1000 likes",k=L(),x&&x.c(),A=L(),re(M.$$.fragment),j=L(),Y&&Y.c(),P=Ar(),f(n,"class","svelte-1toz0qq"),f(a,"class","sort-row svelte-1toz0qq"),d.__value="id",d.value=d.__value,g.__value="score",g.value=g.__value,f(h,"class","svelte-1toz0qq"),t[0]===void 0&&kn(()=>t[11].call(h)),I.__value=0,I.value=I.__value,D.__value=10,D.value=D.__value,w.__value=100,w.value=w.__value,b.__value=1e3,b.value=b.__value,f(v,"class","svelte-1toz0qq"),t[1]===void 0&&kn(()=>t[12].call(v)),f(u,"class","sort-row svelte-1toz0qq"),f(e,"class","search-config svelte-1toz0qq")},m(G,Te){U(G,e,Te),p(e,n),p(e,r),te(s,e,null),p(e,i),q&&q.m(e,null),p(e,o),p(e,a),te(c,a,null),p(e,l),p(e,u),p(u,h),p(h,d),p(h,g),mn(h,t[0]),p(u,m),p(u,v),p(v,I),p(v,D),p(v,w),p(v,b),mn(v,t[1]),U(G,k,Te),~E&&X[E].m(G,Te),U(G,A,Te),te(M,G,Te),U(G,j,Te),Y&&Y.m(G,Te),U(G,P,Te),oe=!0,R||(ae=[ie(h,"change",t[11]),ie(v,"change",t[12])],R=!0)},p(G,[Te]){G[3].length?q?(q.p(G,Te),Te&8&&C(q,1)):(q=jl(G),q.c(),C(q,1),q.m(e,o)):q&&(Ne(),N(q,1,1,()=>{q=null}),Oe()),Te&1&&mn(h,G[0]),Te&2&&mn(v,G[1]);let Ti=E;E=be(G),E===Ti?~E&&X[E].p(G,Te):(x&&(Ne(),N(X[Ti],1,1,()=>{X[Ti]=null}),Oe()),~E?(x=X[E],x?x.p(G,Te):(x=X[E]=me[E](G),x.c()),C(x,1),x.m(A.parentNode,A)):x=null),G[2]?Y?(Y.p(G,Te),Te&4&&C(Y,1)):(Y=Kl(G),Y.c(),C(Y,1),Y.m(P.parentNode,P)):Y&&(Ne(),N(Y,1,1,()=>{Y=null}),Oe())},i(G){oe||(C(s.$$.fragment,G),C(q),C(c.$$.fragment,G),C(x),C(M.$$.fragment,G),C(Y),oe=!0)},o(G){N(s.$$.fragment,G),N(q),N(c.$$.fragment,G),N(x),N(M.$$.fragment,G),N(Y),oe=!1},d(G){G&&$(e),ne(s),q&&q.d(),ne(c),G&&$(k),~E&&X[E].d(G),G&&$(A),ne(M,G),G&&$(j),Y&&Y.d(G),G&&$(P),R=!1,Ze(ae)}}}function xb(t,e,n){let r,s,i;et(t,kr,k=>n(15,r=k)),et(t,jt,k=>n(3,s=k)),et(t,Qi,k=>n(4,i=k));let o="id",a=0,c=!1;const l=async()=>(Qi.reset(),u()),u=async()=>{try{const k=h(),E=await Ib(i.nextPage,k,o,a);Qi.addPage(E)}catch(k){console.warn(k)}},h=()=>s.flatMap(k=>k.type==="supertag"?r.supertags.find(E=>E.name===k.name).tags:k.toSearchableTag()),d=k=>jt.addOrReplace(k.detail),g=k=>jt.removeByIndex(k),m=()=>{n(2,c=!0)},v=()=>l();function I(){o=Ji(this),n(0,o)}function D(){a=Ji(this),n(1,a)}return[o,a,c,s,i,l,u,d,g,m,v,I,D,k=>{kr.addSupertag(k.detail),jt.set([new Sr("+",k.detail.name,k.detail.tags.length,"supertag")])},()=>{n(2,c=!1)}]}class Vb extends he{constructor(e){super(),ue(this,e,xb,Fb,le,{})}}const{subscribe:Bb,set:jb}=$n("dark");var Gl={subscribe:Bb,set(t){jb(t),qb(t)}};const qb=t=>{document.documentElement.classList.replace(zb(t),t)},zb=t=>t==="dark"?"light":"dark";function Hb(t){let e,n,r,s,i;return{c(){e=y("select"),n=y("option"),n.textContent="Dark",r=y("option"),r.textContent="Light",n.__value="dark",n.value=n.__value,r.__value="light",r.value=r.__value,t[0]===void 0&&kn(()=>t[1].call(e))},m(o,a){U(o,e,a),p(e,n),p(e,r),mn(e,t[0]),s||(i=ie(e,"change",t[1]),s=!0)},p(o,[a]){a&1&&mn(e,o[0])},i:B,o:B,d(o){o&&$(e),s=!1,i()}}}function Kb(t,e,n){let r;et(t,Gl,i=>n(0,r=i));function s(){r=Ji(this),Gl.set(r)}return[r,s]}class Gb extends he{constructor(e){super(),ue(this,e,Kb,Hb,le,{})}}function Wb(t){let e;return{c(){e=y("section"),e.innerHTML=`<h2>Tags</h2> 

  <p>All search functionality in this app is based on tags.</p> 

  <p>TODO: add more explanation here...</p>`,f(e,"id","tags")},m(n,r){U(n,e,r)},p:B,i:B,o:B,d(n){n&&$(e)}}}class Qb extends he{constructor(e){super(),ue(this,e,null,Wb,le,{})}}function Wl(t,e,n){const r=t.slice();return r[4]=e[n],r}function Ql(t){let e,n;return e=new qa({props:{tag:new Sr(t[4].modifier,t[4].name,0,"general")}}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&1&&(i.tag=new Sr(r[4].modifier,r[4].name,0,"general")),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function Xb(t){let e,n,r=t[0].name+"",s,i,o,a=Object.keys(t[0].tags).length+"",c,l,u,h,d,g,m,v,I=t[0].description+"",D,w,b,k,E,x,A=t[0].tags,M=[];for(let P=0;P<A.length;P+=1)M[P]=Ql(Wl(t,A,P));const j=P=>N(M[P],1,1,()=>{M[P]=null});return{c(){e=y("li"),n=y("h3"),s=pe(r),i=L(),o=y("small"),c=pe(a),l=pe(" tags"),u=L(),h=y("i"),d=L(),g=y("i"),m=L(),v=y("span"),D=pe(I),w=L(),b=y("ol");for(let P=0;P<M.length;P+=1)M[P].c();f(n,"class","svelte-136f827"),f(o,"class","svelte-136f827"),f(h,"tabindex","0"),f(h,"class","codicon codicon-edit svelte-136f827"),f(g,"tabindex","0"),f(g,"class","codicon codicon-close svelte-136f827"),f(v,"class","svelte-136f827"),f(b,"class","svelte-136f827"),f(e,"class","svelte-136f827")},m(P,oe){U(P,e,oe),p(e,n),p(n,s),p(e,i),p(e,o),p(o,c),p(o,l),p(e,u),p(e,h),p(e,d),p(e,g),p(e,m),p(e,v),p(v,D),p(e,w),p(e,b);for(let R=0;R<M.length;R+=1)M[R].m(b,null);k=!0,E||(x=[ie(h,"click",t[2]),ie(h,"keyup",sn(t[2])),ie(g,"click",t[1]),ie(g,"keyup",sn(t[1]))],E=!0)},p(P,[oe]){if((!k||oe&1)&&r!==(r=P[0].name+"")&&Re(s,r),(!k||oe&1)&&a!==(a=Object.keys(P[0].tags).length+"")&&Re(c,a),(!k||oe&1)&&I!==(I=P[0].description+"")&&Re(D,I),oe&1){A=P[0].tags;let R;for(R=0;R<A.length;R+=1){const ae=Wl(P,A,R);M[R]?(M[R].p(ae,oe),C(M[R],1)):(M[R]=Ql(ae),M[R].c(),C(M[R],1),M[R].m(b,null))}for(Ne(),R=A.length;R<M.length;R+=1)j(R);Oe()}},i(P){if(!k){for(let oe=0;oe<A.length;oe+=1)C(M[oe]);k=!0}},o(P){M=M.filter(Boolean);for(let oe=0;oe<M.length;oe+=1)N(M[oe]);k=!1},d(P){P&&$(e),Nt(M,P),E=!1,Ze(x)}}}function Yb(t,e,n){let{supertag:r}=e;const s=wt(),i=()=>s("remove",r),o=()=>s("edit",r);return t.$$set=a=>{"supertag"in a&&n(0,r=a.supertag)},[r,i,o]}class Jb extends he{constructor(e){super(),ue(this,e,Yb,Xb,le,{supertag:0})}}function Xl(t,e,n){const r=t.slice();return r[5]=e[n],r}function Zb(t){let e,n,r,s,i,o,a;return o=new bi({props:{icon:"sign-in",text:"Sign in with Google",title:"Click to sign in with your Google account"}}),o.$on("click",t[4]),{c(){e=y("div"),n=y("p"),n.textContent="You are currently not signed in.",r=L(),s=y("br"),i=L(),re(o.$$.fragment)},m(c,l){U(c,e,l),p(e,n),p(e,r),p(e,s),p(e,i),te(o,e,null),a=!0},p:B,i(c){a||(C(o.$$.fragment,c),a=!0)},o(c){N(o.$$.fragment,c),a=!1},d(c){c&&$(e),ne(o)}}}function eT(t){let e,n,r,s,i,o,a,c,l,u,h=t[0].user.displayName+"",d,g,m,v,I,D=t[0].user.email+"",w,b,k,E,x,A,M,j,P,oe;m=new bi({props:{icon:"sign-out",text:"Sign out",title:"Click to sign out"}}),m.$on("click",t[2]);let R=t[1].supertags.length===0&&Yl(),ae=t[1].supertags,q=[];for(let X=0;X<ae.length;X+=1)q[X]=Jl(Xl(t,ae,X));const me=X=>N(q[X],1,1,()=>{q[X]=null});return{c(){e=y("div"),n=y("div"),r=y("h2"),r.textContent="Signed in as",s=L(),i=y("div"),o=y("img"),c=L(),l=y("div"),u=y("span"),d=pe(h),g=L(),re(m.$$.fragment),v=L(),I=y("span"),w=pe(D),b=L(),k=y("div"),E=y("h2"),E.textContent="Your supertags",x=L(),A=y("div"),M=L(),R&&R.c(),j=L(),P=y("ul");for(let X=0;X<q.length;X+=1)q[X].c();f(o,"class","profile-picture svelte-6r5uhe"),Sn(o.src,a=t[0].user.photoURL)||f(o,"src",a),f(o,"alt","Profile"),f(u,"class","svelte-6r5uhe"),f(l,"class","name-area svelte-6r5uhe"),f(i,"class","overview svelte-6r5uhe"),f(A,"class","supertags"),f(P,"class","svelte-6r5uhe"),f(e,"class","account-view svelte-6r5uhe")},m(X,be){U(X,e,be),p(e,n),p(n,r),p(n,s),p(n,i),p(i,o),p(i,c),p(i,l),p(l,u),p(u,d),p(l,g),te(m,l,null),p(i,v),p(i,I),p(I,w),p(e,b),p(e,k),p(k,E),p(k,x),p(k,A),p(k,M),R&&R.m(k,null),p(k,j),p(k,P);for(let Y=0;Y<q.length;Y+=1)q[Y].m(P,null);oe=!0},p(X,be){if((!oe||be&1&&!Sn(o.src,a=X[0].user.photoURL))&&f(o,"src",a),(!oe||be&1)&&h!==(h=X[0].user.displayName+"")&&Re(d,h),(!oe||be&1)&&D!==(D=X[0].user.email+"")&&Re(w,D),X[1].supertags.length===0?R||(R=Yl(),R.c(),R.m(k,j)):R&&(R.d(1),R=null),be&2){ae=X[1].supertags;let Y;for(Y=0;Y<ae.length;Y+=1){const G=Xl(X,ae,Y);q[Y]?(q[Y].p(G,be),C(q[Y],1)):(q[Y]=Jl(G),q[Y].c(),C(q[Y],1),q[Y].m(P,null))}for(Ne(),Y=ae.length;Y<q.length;Y+=1)me(Y);Oe()}},i(X){if(!oe){C(m.$$.fragment,X);for(let be=0;be<ae.length;be+=1)C(q[be]);oe=!0}},o(X){N(m.$$.fragment,X),q=q.filter(Boolean);for(let be=0;be<q.length;be+=1)N(q[be]);oe=!1},d(X){X&&$(e),ne(m),R&&R.d(),Nt(q,X)}}}function Yl(t){let e;return{c(){e=y("span"),e.textContent="You don't have any supertags yet. You can create them when you have more than one tag active."},m(n,r){U(n,e,r)},d(n){n&&$(e)}}}function Jl(t){let e,n;return e=new Jb({props:{supertag:t[5]}}),e.$on("remove",t[3]),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},p(r,s){const i={};s&2&&(i.supertag=r[5]),e.$set(i)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function tT(t){let e,n,r,s;const i=[eT,Zb],o=[];function a(c,l){return c[0].loggedIn?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=Ar()},m(c,l){o[e].m(c,l),U(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Ne(),N(o[u],1,1,()=>{o[u]=null}),Oe(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),C(n,1),n.m(r.parentNode,r))},i(c){s||(C(n),s=!0)},o(c){N(n),s=!1},d(c){o[e].d(c),c&&$(r)}}}function nT(t,e,n){let r,s;return et(t,ws,c=>n(0,r=c)),et(t,kr,c=>n(1,s=c)),[r,s,()=>ws.signOut(),c=>kr.deleteSupertag(c.detail),()=>ws.signInWithGoogle()]}class rT extends he{constructor(e){super(),ue(this,e,nT,tT,le,{})}}class sT extends he{constructor(e){super(),ue(this,e,null,null,le,{})}}function iT(t){let e;return{c(){e=y("p"),e.textContent="You got lost..."},m(n,r){U(n,e,r)},i:B,o:B,d(n){n&&$(e)}}}function oT(t){let e,n;return e=new Qb({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function aT(t){let e,n;return e=new Gb({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function cT(t){let e,n;return e=new rT({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function lT(t){let e,n;return e=new Vb({}),{c(){re(e.$$.fragment)},m(r,s){te(e,r,s),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){N(e.$$.fragment,r),n=!1},d(r){ne(e,r)}}}function uT(t){let e,n,r,s,i,o,a,c;e=new sT({}),r=new sE({});const l=[lT,cT,aT,oT,iT],u=[];function h(d,g){return d[0]==="search"?0:d[0]==="account"?1:d[0]==="settings"?2:d[0]==="help"?3:4}return o=h(t),a=u[o]=l[o](t),{c(){re(e.$$.fragment),n=L(),re(r.$$.fragment),s=L(),i=y("main"),a.c()},m(d,g){te(e,d,g),U(d,n,g),te(r,d,g),U(d,s,g),U(d,i,g),u[o].m(i,null),c=!0},p(d,[g]){let m=o;o=h(d),o!==m&&(Ne(),N(u[m],1,1,()=>{u[m]=null}),Oe(),a=u[o],a||(a=u[o]=l[o](d),a.c()),C(a,1),a.m(i,null))},i(d){c||(C(e.$$.fragment,d),C(r.$$.fragment,d),C(a),c=!0)},o(d){N(e.$$.fragment,d),N(r.$$.fragment,d),N(a),c=!1},d(d){ne(e,d),d&&$(n),ne(r,d),d&&$(s),d&&$(i),u[o].d()}}}function hT(t,e,n){let r;return et(t,qt,s=>n(0,r=s)),[r]}class dT extends he{constructor(e){super(),ue(this,e,hT,uT,le,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function Zl(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(s){n(s.data)},t.postMessage(e,[r.port2])})}function fT(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function eu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gT(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(s,i){if(s){if(typeof s=="string")return eu(s,i);var o=Object.prototype.toString.call(s).slice(8,-1);return o==="Object"&&s.constructor&&(o=s.constructor.name),o==="Map"||o==="Set"?Array.from(s):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?eu(s,i):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.2"]&&_()}catch{}var Xi=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function Yi(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Kn=function(t,e){this.type=t,Object.assign(this,e)};function ls(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function pT(){}var mT={type:"SKIP_WAITING"};function tu(t,e){if(!e)return t&&t.then?t.then(pT):Promise.resolve()}var yT=function(t){var e,n;function r(a,c){var l,u;return c===void 0&&(c={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new Xi,l.en=new Xi,l.on=new Xi,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!Yi(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,g=h.target,m=g.state,v=g===l.vn,I={sw:g,isExternal:v,originalEvent:h};!v&&l.mn&&(I.isUpdate=!0),l.dispatchEvent(new Kn(m,I)),m==="installed"?l.wn=self.setTimeout(function(){m==="installed"&&d.waiting===g&&l.dispatchEvent(new Kn("waiting",I))},200):m==="activating"&&(clearTimeout(l.wn),v||l.en.resolve(g))},l.dn=function(h){var d=l.hn,g=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Kn("controlling",{isExternal:g,originalEvent:h,sw:d,isUpdate:l.mn})),g||l.on.resolve(d)},l.gn=(u=function(h){var d=h.data,g=h.ports,m=h.source;return ls(l.getSW(),function(){l.an.has(m)&&l.dispatchEvent(new Kn("message",{data:d,originalEvent:h,ports:g,sw:m}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(u.apply(this,h))}catch(g){return Promise.reject(g)}}),l.sn=a,l.nn=c,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s,i,o=r.prototype;return o.register=function(a){var c=(a===void 0?{}:a).immediate,l=c!==void 0&&c;try{var u=this;return function(h,d){var g=h();return g&&g.then?g.then(d):d(g)}(function(){if(!l&&document.readyState!=="complete")return tu(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return u.mn=Boolean(navigator.serviceWorker.controller),u.yn=u.pn(),ls(u.bn(),function(h){u.fn=h,u.yn&&(u.hn=u.yn,u.en.resolve(u.yn),u.on.resolve(u.yn),u.yn.addEventListener("statechange",u.ln,{once:!0}));var d=u.fn.waiting;return d&&Yi(d.scriptURL,u.sn.toString())&&(u.hn=d,Promise.resolve().then(function(){u.dispatchEvent(new Kn("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.hn&&(u.rn.resolve(u.hn),u.an.add(u.hn)),u.fn.addEventListener("updatefound",u.cn),navigator.serviceWorker.addEventListener("controllerchange",u.dn),u.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?tu(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return ls(this.getSW(),function(c){return Zl(c,a)})}catch(c){return Promise.reject(c)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Zl(this.fn.waiting,mT)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&Yi(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(c,l){try{var u=c()}catch(h){return l(h)}return u&&u.then?u.then(void 0,l):u}(function(){return ls(navigator.serviceWorker.register(a.sn,a.nn),function(c){return a.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},s=r,(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&fT(s.prototype,i),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,s=gT(this.Sn(n.type));!(r=s()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function vT(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisterError:i}=t;let o;const a=async(c=!0)=>{};return"serviceWorker"in navigator&&(o=new yT("/kurosearch/sw.js",{scope:"/kurosearch/",type:"classic"}),o.addEventListener("activated",c=>{c.isUpdate?window.location.reload():r==null||r()}),o.register({immediate:e}).then(c=>{s==null||s(c)}).catch(c=>{i==null||i(c)})),a}new dT({target:document.getElementById("app")});vT();
