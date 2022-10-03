(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function A(){}function Tf(t,e){for(const n in e)t[n]=e[n];return t}function Ef(t){return t&&typeof t=="object"&&typeof t.then=="function"}function xl(t){return t()}function La(){return Object.create(null)}function qe(t){t.forEach(xl)}function kf(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Hs;function Zn(t,e){return Hs||(Hs=document.createElement("a")),Hs.href=e,t===Hs.href}function Sf(t){return Object.keys(t).length===0}function Af(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ze(t,e,n){t.$$.on_destroy.push(Af(e,n))}function Cf(t,e,n,s){if(t){const r=Ul(t,e,n,s);return t[0](r)}}function Ul(t,e,n,s){return t[1]&&s?Tf(n.ctx.slice(),t[1](s(e))):n.ctx}function Df(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Rf(t,e,n,s,r,i){if(r){const o=Ul(e,n,s,i);t.p(o,r)}}function Nf(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function rt(t){return t==null?"":t}function y(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function An(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function an(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function x(){return fe(" ")}function en(){return fe("")}function Y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Ur(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Of(t){return Array.from(t.childNodes)}function Fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function hn(t,e){t.value=e==null?"":e}function Ks(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function xa(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function He(t,e,n){t.classList[n?"add":"remove"](e)}function Pf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let es;function ct(t){es=t}function Fr(){if(!es)throw new Error("Function called outside component initialization");return es}function Fl(t){Fr().$$.on_mount.push(t)}function $f(t){Fr().$$.on_destroy.push(t)}function Ye(){const t=Fr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Pf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Mf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Un=[],Ht=[],nr=[],zi=[],Lf=Promise.resolve();let Hi=!1;function xf(){Hi||(Hi=!0,Lf.then(To))}function ts(t){nr.push(t)}function Uf(t){zi.push(t)}const Ti=new Set;let Gs=0;function To(){const t=es;do{for(;Gs<Un.length;){const e=Un[Gs];Gs++,ct(e),Ff(e.$$)}for(ct(null),Un.length=0,Gs=0;Ht.length;)Ht.pop()();for(let e=0;e<nr.length;e+=1){const n=nr[e];Ti.has(n)||(Ti.add(n),n())}nr.length=0}while(Un.length);for(;zi.length;)zi.pop()();Hi=!1,Ti.clear(),ct(t)}function Ff(t){if(t.fragment!==null){t.update(),qe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ts)}}const sr=new Set;let $t;function pe(){$t={r:0,c:[],p:$t}}function ge(){$t.r||qe($t.c),$t=$t.p}function _(t,e){t&&t.i&&(sr.delete(t),t.i(e))}function k(t,e,n,s){if(t&&t.o){if(sr.has(t))return;sr.add(t),$t.c.push(()=>{sr.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ua(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(pe(),k(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ge())}):e.block.d(1),l.c(),_(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&To()}if(Ef(t)){const r=Fr();if(t.then(i=>{ct(r),s(e.then,1,e.value,i),ct(null)},i=>{if(ct(r),s(e.catch,2,e.error,i),ct(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Vf(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Bf(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function q(t){t&&t.c()}function F(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||ts(()=>{const c=i.map(xl).filter(kf);o?o.push(...c):qe(c),t.$$.on_mount=[]}),a.forEach(ts)}function V(t,e){const n=t.$$;n.fragment!==null&&(qe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jf(t,e){t.$$.dirty[0]===-1&&(Un.push(t),xf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,s,r,i,o,a=[-1]){const c=es;ct(t);const l=t.$$={fragment:null,ctx:null,props:i,update:A,not_equal:r,bound:La(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:La(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&jf(t,h)),d}):[],l.update(),u=!0,qe(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Of(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&_(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),To()}ct(c)}class J{$destroy(){V(this,1),this.$destroy=A}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Sf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cn=[];function Cn(t,e=A){let n;const s=new Set;function r(a){if(Q(t,a)&&(t=a,n)){const c=!cn.length;for(const l of s)l[1](),cn.push(l,t);if(c){for(let l=0;l<cn.length;l+=2)cn[l][0](cn[l+1]);cn.length=0}}}function i(a){r(a(t))}function o(a,c=A){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||A),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const qf=Object.freeze(["search","account","settings","help"]),zf=t=>qf.includes(t),Hf=()=>{const{subscribe:t,set:e}=Cn("search");return{subscribe:t,navigateTo(n){if(!zf(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Mt=Hf();function Kf(t){let e,n,s,r,i,o;return{c(){e=an("svg"),n=an("g"),s=an("path"),r=an("defs"),i=an("clipPath"),o=an("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){D(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:A,i:A,o:A,d(a){a&&C(e)}}}class Gf extends J{constructor(e){super(),X(this,e,null,Kf,Q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Wf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qf=function(t){const e=Vl(t);return Bl.encodeByteArray(e,!0)},jl=function(t){return Qf(t).replace(/\./g,"")},Yf=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function ql(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zl(){return typeof indexedDB=="object"}function Hl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function tp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="FirebaseError";class Xe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=np,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?sp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xe(r,a,s)}}function sp(t,e){return t.replace(rp,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const rp=/\{\$([^}]+)}/g;function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Fa(i)&&Fa(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Fa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function op(t,e){const n=new ap(t,e);return n.subscribe.bind(n)}class ap{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ei),r.error===void 0&&(r.error=Ei),r.complete===void 0&&(r.complete=Ei);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ei(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=1e3,up=2,hp=4*60*60*1e3,dp=.5;function Va(t,e=lp,n=up){const s=e*Math.pow(n,t),r=Math.round(dp*s*(Math.random()-.5)*2);return Math.min(hp,s+r)}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Qe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gp(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(t){return t===Ot?void 0:t}function gp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const yp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},vp=te.INFO,_p={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},wp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=_p[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vr{constructor(e){this.name=e,this._logLevel=vp,this._logHandler=wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Ip=(t,e)=>e.some(n=>t instanceof n);let Ba,ja;function bp(){return Ba||(Ba=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return ja||(ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kl=new WeakMap,Ki=new WeakMap,Gl=new WeakMap,ki=new WeakMap,Eo=new WeakMap;function Ep(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kl.set(n,t)}).catch(()=>{}),Eo.set(e,t),e}function kp(t){if(Ki.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ki.set(t,e)}let Gi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sp(t){Gi=t(Gi)}function Ap(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Si(this),e,...n);return Gl.set(s,e.sort?e.sort():[e]),Tt(s)}:Tp().includes(t)?function(...e){return t.apply(Si(this),e),Tt(Kl.get(this))}:function(...e){return Tt(t.apply(Si(this),e))}}function Cp(t){return typeof t=="function"?Ap(t):(t instanceof IDBTransaction&&kp(t),Ip(t,bp())?new Proxy(t,Gi):t)}function Tt(t){if(t instanceof IDBRequest)return Ep(t);if(ki.has(t))return ki.get(t);const e=Cp(t);return e!==t&&(ki.set(t,e),Eo.set(e,t)),e}const Si=t=>Eo.get(t);function Wl(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Dp=["get","getKey","getAll","getAllKeys","count"],Rp=["put","add","delete","clear"],Ai=new Map;function qa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ai.get(e))return Ai.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Rp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Dp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ai.set(e,i),i}Sp(t=>({...t,get:(e,n,s)=>qa(e,n)||t.get(e,n,s),has:(e,n)=>!!qa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Op(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Op(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",za="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Vr("@firebase/app"),Pp="@firebase/app-compat",$p="@firebase/analytics-compat",Mp="@firebase/analytics",Lp="@firebase/app-check-compat",xp="@firebase/app-check",Up="@firebase/auth",Fp="@firebase/auth-compat",Vp="@firebase/database",Bp="@firebase/database-compat",jp="@firebase/functions",qp="@firebase/functions-compat",zp="@firebase/installations",Hp="@firebase/installations-compat",Kp="@firebase/messaging",Gp="@firebase/messaging-compat",Wp="@firebase/performance",Qp="@firebase/performance-compat",Yp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Jp="@firebase/storage",Zp="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/firestore-compat",ng="firebase",sg="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="[DEFAULT]",rg={[Wi]:"fire-core",[Pp]:"fire-core-compat",[Mp]:"fire-analytics",[$p]:"fire-analytics-compat",[xp]:"fire-app-check",[Lp]:"fire-app-check-compat",[Up]:"fire-auth",[Fp]:"fire-auth-compat",[Vp]:"fire-rtdb",[Bp]:"fire-rtdb-compat",[jp]:"fire-fn",[qp]:"fire-fn-compat",[zp]:"fire-iid",[Hp]:"fire-iid-compat",[Kp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Wp]:"fire-perf",[Qp]:"fire-perf-compat",[Yp]:"fire-rc",[Xp]:"fire-rc-compat",[Jp]:"fire-gcs",[Zp]:"fire-gcs-compat",[eg]:"fire-fst",[tg]:"fire-fst-compat","fire-js":"fire-js",[ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,Qi=new Map;function ig(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function it(t){const e=t.name;if(Qi.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const n of gr.values())ig(n,t);return!0}function nn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new tn("app","Firebase",og);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=sg;function cg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ql,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});const r=gr.get(s);if(r){if(ns(t,r.options)&&ns(n,r.config))return r;throw Gt.create("duplicate-app",{appName:s})}const i=new mp(s);for(const a of Qi.values())i.addComponent(a);const o=new ag(t,n,i);return gr.set(s,o),o}function ko(t=Ql){const e=gr.get(t);if(!e)throw Gt.create("no-app",{appName:t});return e}function Ke(t,e,n){var s;let r=(s=rg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}it(new Qe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lg="firebase-heartbeat-database",ug=1,ss="firebase-heartbeat-store";let Ci=null;function Yl(){return Ci||(Ci=Wl(lg,ug,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Ci}async function hg(t){var e;try{return(await Yl()).transaction(ss).objectStore(ss).get(Xl(t))}catch(n){if(n instanceof Xe)Kt.warn(n.message);else{const s=Gt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Kt.warn(s.message)}}}async function Ha(t,e){var n;try{const r=(await Yl()).transaction(ss,"readwrite");return await r.objectStore(ss).put(e,Xl(t)),r.done}catch(s){if(s instanceof Xe)Kt.warn(s.message);else{const r=Gt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Kt.warn(r.message)}}}function Xl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dg=1024,fg=30*24*60*60*1e3;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ka();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=fg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ka(),{heartbeatsToSend:n,unsentEntries:s}=gg(this._heartbeatsCache.heartbeats),r=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ka(){return new Date().toISOString().substring(0,10)}function gg(t,e=dg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ga(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ga(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?Hl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ga(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){it(new Qe("platform-logger",e=>new Np(e),"PRIVATE")),it(new Qe("heartbeat",e=>new pg(e),"PRIVATE")),Ke(Wi,za,t),Ke(Wi,za,"esm2017"),Ke("fire-js","")}yg("");function So(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Jl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vg=Jl,Zl=new tn("auth","Firebase",Jl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Vr("@firebase/auth");function rr(t,...e){Wa.logLevel<=te.ERROR&&Wa.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,...e){throw Ao(t,...e)}function et(t,...e){return Ao(t,...e)}function eu(t,e,n){const s=Object.assign(Object.assign({},vg()),{[e]:n});return new tn("auth","Firebase",s).create(e,{appName:t.name})}function _g(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&We(t,"argument-error"),eu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ao(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zl.create(t,...e)}function B(t,e,...n){if(!t)throw Ao(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function ft(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map;function ut(t){ft(t instanceof Function,"Expected a class definition");let e=Qa.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){const n=nn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ns(i,e!=null?e:{}))return r;We(r,"already-initialized")}return n.initialize({options:e})}function Ig(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bg(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bg()||ql()||"connection"in navigator)?navigator.onLine:!0}function Eg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Jf()||Zf()}get(){return Tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new bs(3e4,6e4);function Ts(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,s,r={}){return nu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ws(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),tu.fetch()(su(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function nu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},kg),e);try{const r=new Ag(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ws(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ws(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw eu(t,u,l);We(t,u)}}catch(r){if(r instanceof Xe)throw r;We(t,"network-request-failed")}}async function ks(t,e,n,s,r={}){const i=await Es(t,e,n,s,r);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}function su(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Co(t.config,r):`${t.config.apiScheme}://${r}`}class Ag{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),Sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=et(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function Dg(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rg(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),r=Do(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Kn(Di(r.auth_time)),issuedAtTime:Kn(Di(r.iat)),expirationTime:Kn(Di(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Di(t){return Number(t)*1e3}function Do(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yf(s);return i?JSON.parse(i):(rr("Failed to decode base64 JWT payload"),null)}catch(i){return rr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Ng(t){const e=Do(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xe&&Og(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Og({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await rs(t,Dg(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lg(i.providerUserInfo):[],a=Mg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function $g(t){const e=Pe(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Lg(t){return t.map(e=>{var{providerId:n}=e,s=So(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e){const n=await nu(t,{},async()=>{const s=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=su(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await xg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new is;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=So(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ru(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rg(this,e)}reload(){return $g(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rs(this,Cg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:$,isAnonymous:T,providerData:I,stsTokenManager:L}=n;B(S&&L,e,"internal-error");const Le=is.fromJSON(this.name,L);B(typeof S=="string",e,"internal-error"),vt(h,e.name),vt(d,e.name),B(typeof $=="boolean",e,"internal-error"),B(typeof T=="boolean",e,"internal-error"),vt(p,e.name),vt(g,e.name),vt(m,e.name),vt(E,e.name),vt(R,e.name),vt(P,e.name);const Ae=new Bt({uid:S,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:Le,createdAt:R,lastLoginAt:P});return I&&Array.isArray(I)&&(Ae.providerData=I.map(ee=>Object.assign({},ee))),E&&(Ae._redirectEventId=E),Ae}static async _fromIdTokenResponse(e,n,s=!1){const r=new is;r.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await mr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iu.type="NONE";const Xa=iu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ir(this.userKey,r.apiKey,i),this.fullPersistenceKey=ir("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pn(ut(Xa),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ut(Xa);const o=ir(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Bt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ou(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uu(e))return"Blackberry";if(hu(e))return"Webos";if(Ro(e))return"Safari";if((e.includes("chrome/")||au(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ou(t=Oe()){return/firefox\//i.test(t)}function Ro(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function au(t=Oe()){return/crios\//i.test(t)}function cu(t=Oe()){return/iemobile/i.test(t)}function lu(t=Oe()){return/android/i.test(t)}function uu(t=Oe()){return/blackberry/i.test(t)}function hu(t=Oe()){return/webos/i.test(t)}function Br(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ug(t=Oe()){var e;return Br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fg(){return ep()&&document.documentMode===10}function du(t=Oe()){return Br(t)||lu(t)||hu(t)||uu(t)||/windows phone/i.test(t)||cu(t)}function Vg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e=[]){let n;switch(t){case"Browser":n=Ja(Oe());break;case"Worker":n=`${Ja(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}/**
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
 */class Bg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new Bg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await mr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ss(t){return Pe(t)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=op(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function qg(t,e){return Es(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(t,e){return ks(t,"POST","/v1/accounts:signInWithPassword",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}async function Kg(t,e){return ks(t,"POST","/v1/accounts:signInWithEmailLink",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends No{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new os(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new os(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hg(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kg(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return ks(t,"POST","/v1/accounts:signInWithIdp",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="http://localhost";class Wt extends No{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=So(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:Gg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qg(t){const e=Fn(Vn(t)).link,n=e?Fn(Vn(e)).deep_link_id:null,s=Fn(Vn(t)).deep_link_id;return(s?Fn(Vn(s)).link:null)||s||n||e||t}class Oo{constructor(e){var n,s,r,i,o,a;const c=Fn(Vn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Wg((r=c.mode)!==null&&r!==void 0?r:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qg(e);try{return new Oo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,n){return os._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Oo.parseLink(n);return B(s,"argument-error"),os._fromEmailAndCode(e,s.code,s.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Po{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends As{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return at.credential(n,s)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends As{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends As{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){return ks(t,"POST","/v1/accounts:signUp",Ts(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Bt._fromIdTokenResponse(e,s,r),o=ec(s);return new Qt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ec(s);return new Qt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ec(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Xe{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new yr(e,n,s,r)}}function pu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,i,e,s):i})}async function Xg(t,e,n=!1){const s=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await rs(t,pu(r,i,e,t),n);B(o.idToken,r,"internal-error");const a=Do(o.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(t.uid===c,r,"user-mismatch"),Qt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&We(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t,e,n=!1){const s="signIn",r=await pu(t,s,e),i=await Qt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Zg(t,e){return gu(Ss(t),e)}async function em(t,e,n){const s=Ss(t),r=await Yg(s,{returnSecureToken:!0,email:e,password:n}),i=await Qt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function tm(t,e,n){return Zg(Pe(t),Dn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){return Pe(t).setPersistence(e)}function mu(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function sm(t){return Pe(t).signOut()}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){const t=Oe();return Ro(t)||Br(t)}const im=1e3,om=10;class vu extends yu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rm()&&Vg(),this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Fg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,om):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vu.type="LOCAL";const _u=vu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends yu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wu.type="SESSION";const Iu=wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new jr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await am(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$o("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function lm(t){tt().location.href=t}/**
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
 */function bu(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function um(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dm(){return bu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="firebaseLocalStorageDb",fm=1,_r="firebaseLocalStorage",Eu="fbase_key";class Cs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function pm(){const t=indexedDB.deleteDatabase(Tu);return new Cs(t).toPromise()}function Xi(){const t=indexedDB.open(Tu,fm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_r,{keyPath:Eu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_r)?e(s):(s.close(),await pm(),e(await Xi()))})})}async function tc(t,e,n){const s=qr(t,!0).put({[Eu]:e,value:n});return new Cs(s).toPromise()}async function gm(t,e){const n=qr(t,!1).get(e),s=await new Cs(n).toPromise();return s===void 0?null:s.value}function nc(t,e){const n=qr(t,!0).delete(e);return new Cs(n).toPromise()}const mm=800,ym=3;class ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ym)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(dm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await um(),!this.activeServiceWorker)return;this.sender=new cm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await tc(e,vr,"1"),await nc(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=qr(r,!1).getAll();return new Cs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ku.type="LOCAL";const vm=ku;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=et("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",_m().appendChild(s)})}function Im(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bs(3e4,6e4);/**
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
 */function Su(t,e){return e?ut(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends No{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bm(t){return gu(t.auth,new Mo(t),t.bypassAuthState)}function Tm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Jg(n,new Mo(t),t.bypassAuthState)}async function Em(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Xg(n,new Mo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bm;case"linkViaPopup":case"linkViaRedirect":return Em;case"reauthViaPopup":case"reauthViaRedirect":return Tm;default:We(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new bs(2e3,1e4);async function Sm(t,e,n){const s=Ss(t);_g(t,e,Po);const r=Su(s,n);return new Lt(s,"signInViaPopup",e,r).executeNotNull()}class Lt extends Au{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,km.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="pendingRedirect",or=new Map;class Cm extends Au{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const s=await Dm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dm(t,e){const n=Om(e),s=Nm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Rm(t,e){or.set(t._key(),e)}function Nm(t){return ut(t._redirectPersistence)}function Om(t){return ir(Am,t.config.apiKey,t.name)}async function Pm(t,e,n=!1){const s=Ss(t),r=Su(s,e),o=await new Cm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=10*60*1e3;class Mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$m&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fm=/^https?/;async function Vm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xm(t);for(const n of e)try{if(Bm(n))return}catch{}We(t,"unauthorized-domain")}function Bm(t){const e=Yi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fm.test(n))return!1;if(Um.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const jm=new bs(3e4,6e4);function rc(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qm(t){return new Promise((e,n)=>{var s,r,i;function o(){rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rc(),n(et(t,"network-request-failed"))},timeout:jm.get()})}if(!((r=(s=tt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=Im("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},wm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ar=null,e})}let ar=null;function zm(t){return ar=ar||qm(t),ar}/**
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
 */const Hm=new bs(5e3,15e3),Km="__/auth/iframe",Gm="emulator/auth/iframe",Wm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ym(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Co(e,Gm):`https://${t.config.authDomain}/${Km}`,s={apiKey:e.apiKey,appName:t.name,v:Is},r=Qm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ws(s).slice(1)}`}async function Xm(t){const e=await zm(t),n=tt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Ym(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},Hm.get());function c(){tt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zm=500,ey=600,ty="_blank",ny="http://localhost";class ic{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sy(t,e,n,s=Zm,r=ey){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jm),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=au(l)?ty:n),ou(l)&&(e=e||ny,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Ug(l)&&a!=="_self")return ry(e||"",a),new ic(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new ic(h)}function ry(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const iy="__/auth/handler",oy="emulator/auth/handler";function oc(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Is,eventId:r};if(e instanceof Po){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof As){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ay(t)}?${ws(a).slice(1)}`}function ay({config:t}){return t.emulator?Co(t,oy):`https://${t.authDomain}/${iy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="webStorageSupport";class cy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iu,this._completeRedirectFn=Pm,this._overrideRedirectResult=Rm}async _openPopup(e,n,s,r){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=oc(e,n,s,Yi(),r);return sy(e,o,$o())}async _openRedirect(e,n,s,r){return await this._originValidation(e),lm(oc(e,n,s,Yi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ft(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xm(e),s=new Mm(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ri,{type:Ri},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ri];o!==void 0&&n(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return du()||Ro()||Br()}}const ly=cy;var ac="@firebase/auth",cc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dy(t){it(new Qe("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(t)},u=new jg(a,c,l);return Ig(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),it(new Qe("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(s=>new uy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(ac,cc,hy(t)),Ke(ac,cc,"esm2017")}/**
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
 */function fy(t=ko()){const e=nn(t,"auth");return e.isInitialized()?e.getImmediate():wg(t,{popupRedirectResolver:ly,persistence:[vm,_u,Iu]})}dy("Browser");const Du="@firebase/installations",Lo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=1e4,Nu=`w:${Lo}`,Ou="FIS_v2",py="https://firebaseinstallations.googleapis.com/v1",gy=60*60*1e3,my="installations",yy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Yt=new tn(my,yy,vy);function Pu(t){return t instanceof Xe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u({projectId:t}){return`${py}/projects/${t}/installations`}function Mu(t){return{token:t.token,requestStatus:2,expiresIn:wy(t.expiresIn),creationTime:Date.now()}}async function Lu(t,e){const s=(await e.json()).error;return Yt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _y(t,{refreshToken:e}){const n=xu(t);return n.append("Authorization",Iy(e)),n}async function Uu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wy(t){return Number(t.replace("s","000"))}function Iy(t){return`${Ou} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=$u(t),r=xu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ou,appId:t.appId,sdkVersion:Nu},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Uu(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Mu(l.authToken)}}else throw await Lu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=/^[cdef][\w-]{21}$/,Ji="";function ky(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Sy(t);return Ey.test(n)?n:Ji}catch{return Ji}}function Sy(t){return Ty(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function Bu(t,e){const n=zr(t);ju(n,e),Ay(n,e)}function ju(t,e){const n=Vu.get(t);if(!!n)for(const s of n)s(e)}function Ay(t,e){const n=Cy();n&&n.postMessage({key:t,fid:e}),Dy()}let xt=null;function Cy(){return!xt&&"BroadcastChannel"in self&&(xt=new BroadcastChannel("[Firebase] FID Change"),xt.onmessage=t=>{ju(t.data.key,t.data.fid)}),xt}function Dy(){Vu.size===0&&xt&&(xt.close(),xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="firebase-installations-database",Ny=1,Xt="firebase-installations-store";let Ni=null;function xo(){return Ni||(Ni=Wl(Ry,Ny,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}})),Ni}async function wr(t,e){const n=zr(t),r=(await xo()).transaction(Xt,"readwrite"),i=r.objectStore(Xt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Bu(t,e.fid),e}async function qu(t){const e=zr(t),s=(await xo()).transaction(Xt,"readwrite");await s.objectStore(Xt).delete(e),await s.done}async function Hr(t,e){const n=zr(t),r=(await xo()).transaction(Xt,"readwrite"),i=r.objectStore(Xt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Bu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){let e;const n=await Hr(t.appConfig,s=>{const r=Oy(s),i=Py(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ji?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Oy(t){const e=t||{fid:ky(),registrationStatus:0};return zu(e)}function Py(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Yt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$y(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:My(t)}:{installationEntry:e}}async function $y(t,e){try{const n=await by(t,e);return wr(t.appConfig,n)}catch(n){throw Pu(n)&&n.customData.serverCode===409?await qu(t.appConfig):await wr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function My(t){let e=await lc(t.appConfig);for(;e.registrationStatus===1;)await Fu(100),e=await lc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Uo(t);return s||n}return e}function lc(t){return Hr(t,e=>{if(!e)throw Yt.create("installation-not-found");return zu(e)})}function zu(t){return Ly(t)?{fid:t.fid,registrationStatus:0}:t}function Ly(t){return t.registrationStatus===1&&t.registrationTime+Ru<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy({appConfig:t,heartbeatServiceProvider:e},n){const s=Uy(t,n),r=_y(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Nu,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Uu(()=>fetch(s,a));if(c.ok){const l=await c.json();return Mu(l)}else throw await Lu("Generate Auth Token",c)}function Uy(t,{fid:e}){return`${$u(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t,e=!1){let n;const s=await Hr(t.appConfig,i=>{if(!Hu(i))throw Yt.create("not-registered");const o=i.authToken;if(!e&&By(o))return i;if(o.requestStatus===1)return n=Fy(t,e),i;{if(!navigator.onLine)throw Yt.create("app-offline");const a=qy(i);return n=Vy(t,a),a}});return n?await n:s.authToken}async function Fy(t,e){let n=await uc(t.appConfig);for(;n.authToken.requestStatus===1;)await Fu(100),n=await uc(t.appConfig);const s=n.authToken;return s.requestStatus===0?Fo(t,e):s}function uc(t){return Hr(t,e=>{if(!Hu(e))throw Yt.create("not-registered");const n=e.authToken;return zy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vy(t,e){try{const n=await xy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await wr(t.appConfig,s),n}catch(n){if(Pu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wr(t.appConfig,s)}throw n}}function Hu(t){return t!==void 0&&t.registrationStatus===2}function By(t){return t.requestStatus===2&&!jy(t)}function jy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gy}function qy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zy(t){return t.requestStatus===1&&t.requestTime+Ru<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(t){const e=t,{installationEntry:n,registrationPromise:s}=await Uo(e);return s?s.catch(console.error):Fo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(t,e=!1){const n=t;return await Gy(n),(await Fo(n,e)).token}async function Gy(t){const{registrationPromise:e}=await Uo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){if(!t||!t.options)throw Oi("App Configuration");if(!t.name)throw Oi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oi(t){return Yt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="installations",Qy="installations-internal",Yy=t=>{const e=t.getProvider("app").getImmediate(),n=Wy(e),s=nn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Xy=t=>{const e=t.getProvider("app").getImmediate(),n=nn(e,Ku).getImmediate();return{getId:()=>Hy(n),getToken:r=>Ky(n,r)}};function Jy(){it(new Qe(Ku,Yy,"PUBLIC")),it(new Qe(Qy,Xy,"PRIVATE"))}Jy();Ke(Du,Lo);Ke(Du,Lo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="analytics",Zy="firebase_id",ev="origin",tv=60*1e3,nv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Vr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sv(t,e){const n=document.createElement("script");n.src=`${Gu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function rv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Wu(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ve.error(a)}t("config",r,i)}async function ov(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Wu(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ve.error(i)}}function av(t,e,n,s){async function r(i,o,a){try{i==="event"?await ov(t,e,n,o,a):i==="config"?await iv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ve.error(c)}}return r}function cv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=av(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function lv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Gu))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ge=new tn("analytics","Analytics",uv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=30,dv=1e3;class fv{constructor(e={},n=dv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qu=new fv;function pv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:pv(s)},i=nv.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mv(t,e=Qu,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ge.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ge.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _v;return setTimeout(async()=>{a.abort()},n!==void 0?n:tv),Yu({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Yu(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Qu){var i,o;const{appId:a,measurementId:c}=t;try{await yv(s,e)}catch(l){if(c)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await gv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!vv(u)){if(r.deleteThrottleMetadata(a),c)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Va(n,r.intervalMillis,hv):Va(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Ve.debug(`Calling attemptFetch again in ${h} millis`),Yu(t,d,s,r)}}function yv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vv(t){if(!(t instanceof Xe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _v{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(){var t;if(zl())try{await Hl()}catch(e){return Ve.warn(Ge.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ve.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bv(t,e,n,s,r,i,o){var a;const c=mv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ve.error(p)),e.push(c);const l=Iv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);lv()||sv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[ev]="firebase",d.update=!0,h!=null&&(d[Zy]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},hc=[];const dc={};let Pi="dataLayer",Ev="gtag",fc,Xu,pc=!1;function kv(){const t=[];if(ql()&&t.push("This is a browser extension environment."),tp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ge.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function Sv(t,e,n){kv();const s=t.options.appId;if(!s)throw Ge.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(Gn[s]!=null)throw Ge.create("already-exists",{id:s});if(!pc){rv(Pi);const{wrappedGtag:i,gtagCore:o}=cv(Gn,hc,dc,Pi,Ev);Xu=i,fc=o,pc=!0}return Gn[s]=bv(t,hc,dc,e,fc,Pi,n),new Tv(t)}function Av(t=ko()){t=Pe(t);const e=nn(t,Ir);return e.isInitialized()?e.getImmediate():Cv(t)}function Cv(t,e={}){const n=nn(t,Ir);if(n.isInitialized()){const r=n.getImmediate();if(ns(e,n.getOptions()))return r;throw Ge.create("already-initialized")}return n.initialize({options:e})}function Dv(t,e,n,s){t=Pe(t),wv(Xu,Gn[t.app.options.appId],e,n,s).catch(r=>Ve.error(r))}const gc="@firebase/analytics",mc="0.8.0";function Rv(){it(new Qe(Ir,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Sv(s,r,n)},"PUBLIC")),it(new Qe("analytics-internal",t,"PRIVATE")),Ke(gc,mc),Ke(gc,mc,"esm2017");function t(e){try{const n=e.getProvider(Ir).getImmediate();return{logEvent:(s,r,i)=>Dv(n,s,r,i)}}catch(n){throw Ge.create("interop-component-reg-failed",{reason:n})}}}Rv();var Nv="firebase",Ov="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(Nv,Ov,"app");var Pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Vo=Vo||{},j=Pv||self;function br(){}function Kr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ds(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $v(t){return Object.prototype.hasOwnProperty.call(t,$i)&&t[$i]||(t[$i]=++Mv)}var $i="closure_uid_"+(1e9*Math.random()>>>0),Mv=0;function Lv(t,e,n){return t.call.apply(t.bind,arguments)}function xv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Re(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Re=Lv:Re=xv,Re.apply(null,arguments)}function Qs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var Uv=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Uv!=0)&&$v(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ju=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Fv=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",br,e),j.removeEventListener("test",br,e)}catch{}return t}();function Tr(t){return/^[\s\xa0]*$/.test(t)}var vc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mi(t,e){return t<e?-1:t>e?1:0}function Gr(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Je(t){return Gr().indexOf(t)!=-1}function jo(t){return jo[" "](t),t}jo[" "]=br;function Vv(t){var e=qv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Bv=Je("Opera"),_n=Je("Trident")||Je("MSIE"),Zu=Je("Edge"),Zi=Zu||_n,eh=Je("Gecko")&&!(Gr().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge"))&&!(Je("Trident")||Je("MSIE"))&&!Je("Edge"),jv=Gr().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge");function th(){var t=j.document;return t?t.documentMode:void 0}var Er;e:{var Li="",xi=function(){var t=Gr();if(eh)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zu)return/Edge\/([\d\.]+)/.exec(t);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jv)return/WebKit\/(\S+)/.exec(t);if(Bv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xi&&(Li=xi?xi[1]:""),_n){var Ui=th();if(Ui!=null&&Ui>parseFloat(Li)){Er=String(Ui);break e}}Er=Li}var qv={};function zv(){return Vv(function(){let t=0;const e=vc(String(Er)).split("."),n=vc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Mi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Mi(r[2].length==0,i[2].length==0)||Mi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var eo;if(j.document&&_n){var _c=th();eo=_c||parseInt(Er,10)||void 0}else eo=void 0;var Hv=eo;function as(t,e){if(Ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eh){e:{try{jo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&as.X.h.call(this)}}Se(as,Ne);var Kv={2:"touch",3:"pen",4:"mouse"};as.prototype.h=function(){as.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Rs="closure_listenable_"+(1e6*Math.random()|0),Gv=0;function Wv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Gv,this.ba=this.ea=!1}function Wr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function nh(t){const e={};for(const n in t)e[n]=t[n];return e}const wc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<wc.length;i++)n=wc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Qr(t){this.src=t,this.g={},this.h=0}Qr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=no(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Wv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function to(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ju(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Wr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function no(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var zo="closure_lm_"+(1e6*Math.random()|0),Fi={};function rh(t,e,n,s,r){if(s&&s.once)return oh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rh(t,e[i],n,s,r);return null}return n=Go(n),t&&t[Rs]?t.N(e,n,Ds(s)?!!s.capture:!!s,r):ih(t,e,n,!1,s,r)}function ih(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ds(r)?!!r.capture:!!r,a=Ko(t);if(a||(t[zo]=a=new Qr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Qv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Fv||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ch(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qv(){function t(n){return e.call(t.src,t.listener,n)}const e=Yv;return t}function oh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)oh(t,e[i],n,s,r);return null}return n=Go(n),t&&t[Rs]?t.O(e,n,Ds(s)?!!s.capture:!!s,r):ih(t,e,n,!0,s,r)}function ah(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ah(t,e[i],n,s,r);else s=Ds(s)?!!s.capture:!!s,n=Go(n),t&&t[Rs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=no(i,n,s,r),-1<n&&(Wr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ko(t))&&(e=t.g[e.toString()],t=-1,e&&(t=no(e,n,s,r)),(n=-1<t?e[t]:null)&&Ho(n))}function Ho(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Rs])to(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ch(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ko(e))?(to(n,t),n.h==0&&(n.src=null,e[zo]=null)):Wr(t)}}}function ch(t){return t in Fi?Fi[t]:Fi[t]="on"+t}function Yv(t,e){if(t.ba)t=!0;else{e=new as(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ho(t),t=n.call(s,e)}return t}function Ko(t){return t=t[zo],t instanceof Qr?t:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(t){return typeof t=="function"?t:(t[Vi]||(t[Vi]=function(e){return t.handleEvent(e)}),t[Vi])}function Ie(){Dt.call(this),this.i=new Qr(this),this.P=this,this.I=null}Se(Ie,Dt);Ie.prototype[Rs]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){ah(this,t,e,n,s)};function Ee(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ne(e,t);else if(e instanceof Ne)e.target=e.target||t;else{var r=e;e=new Ne(s,t),sh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ys(o,s,!0,e)&&r}if(o=e.g=t,r=Ys(o,s,!0,e)&&r,r=Ys(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ys(o,s,!1,e)&&r}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Wr(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ys(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&to(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Wo=j.JSON.stringify;function Xv(){var t=hh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jv{constructor(){this.h=this.g=null}add(e,n){const s=lh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zv,t=>t.reset());class Zv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function e_(t){j.setTimeout(()=>{throw t},0)}function uh(t,e){so||t_(),ro||(so(),ro=!0),hh.add(t,e)}var so;function t_(){var t=j.Promise.resolve(void 0);so=function(){t.then(n_)}}var ro=!1,hh=new Jv;function n_(){for(var t;t=Xv();){try{t.h.call(t.g)}catch(n){e_(n)}var e=lh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ro=!1}function Yr(t,e){Ie.call(this),this.h=t||1,this.g=e||j,this.j=Re(this.kb,this),this.l=Date.now()}Se(Yr,Ie);N=Yr.prototype;N.ca=!1;N.R=null;N.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ee(this,"tick"),this.ca&&(Qo(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){Yr.X.M.call(this),Qo(this),delete this.g};function Yo(t,e,n){if(typeof t=="function")n&&(t=Re(t,n));else if(t&&typeof t.handleEvent=="function")t=Re(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function dh(t){t.g=Yo(()=>{t.g=null,t.i&&(t.i=!1,dh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class s_ extends Dt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dh(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(t){Dt.call(this),this.h=t,this.g={}}Se(cs,Dt);var Ic=[];function fh(t,e,n,s){Array.isArray(n)||(n&&(Ic[0]=n.toString()),n=Ic);for(var r=0;r<n.length;r++){var i=rh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ph(t){qo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ho(e)},t),t.g={}}cs.prototype.M=function(){cs.X.M.call(this),ph(this)};cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xr(){this.g=!0}Xr.prototype.Aa=function(){this.g=!1};function r_(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function i_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+a_(t,n)+(s?" "+s:"")})}function o_(t,e){t.info(function(){return"TIMEOUT: "+e})}Xr.prototype.info=function(){};function a_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Wo(n)}catch{return e}}var sn={},bc=null;function Jr(){return bc=bc||new Ie}sn.Oa="serverreachability";function gh(t){Ne.call(this,sn.Oa,t)}Se(gh,Ne);function ls(t){const e=Jr();Ee(e,new gh(e))}sn.STAT_EVENT="statevent";function mh(t,e){Ne.call(this,sn.STAT_EVENT,t),this.stat=e}Se(mh,Ne);function Me(t){const e=Jr();Ee(e,new mh(e,t))}sn.Pa="timingevent";function yh(t,e){Ne.call(this,sn.Pa,t),this.size=e}Se(yh,Ne);function Ns(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Zr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},vh={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xo(){}Xo.prototype.h=null;function Tc(t){return t.h||(t.h=t.i())}function _h(){}var Os={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Jo(){Ne.call(this,"d")}Se(Jo,Ne);function Zo(){Ne.call(this,"c")}Se(Zo,Ne);var io;function ei(){}Se(ei,Xo);ei.prototype.g=function(){return new XMLHttpRequest};ei.prototype.i=function(){return{}};io=new ei;function Ps(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new cs(this),this.O=c_,t=Zi?125:void 0,this.T=new Yr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var c_=45e3,oo={},kr={};N=Ps.prototype;N.setTimeout=function(t){this.O=t};function ao(t,e,n){t.K=1,t.v=ni(pt(e)),t.s=n,t.P=!0,Ih(t,null)}function Ih(t,e){t.F=Date.now(),$s(t),t.A=pt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Dh(n.i,"t",s),t.C=0,n=t.l.H,t.h=new wh,t.g=Yh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new s_(Re(t.Ka,t,t.g),t.N)),fh(t.S,t.g,"readystatechange",t.hb),e=t.H?nh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ls(),r_(t.j,t.u,t.A,t.m,t.U,t.s)}N.hb=function(t){t=t.target;const e=this.L;e&&ht(t)==3?e.l():this.Ka(t)};N.Ka=function(t){try{if(t==this.g)e:{const u=ht(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Zi||this.g&&(this.h.h||this.g.fa()||Ac(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ls(3):ls(2)),ti(this);var n=this.g.aa();this.Y=n;t:if(bh(this)){var s=Ac(this.g);t="";var r=s.length,i=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Wn(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,i_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tr(a)){var l=a;break t}}l=null}if(n=l)dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,co(this,n);else{this.i=!1,this.o=3,Me(12),Ut(this),Wn(this);break e}}this.P?(Th(this,u,o),Zi&&this.i&&u==3&&(fh(this.S,this.T,"tick",this.gb),this.T.start())):(dn(this.j,this.m,o,null),co(this,o)),u==4&&Ut(this),this.i&&!this.I&&(u==4?Kh(this.l,this):(this.i=!1,$s(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Ut(this),Wn(this)}}}catch{}finally{}};function bh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Th(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=l_(t,n),r==kr){e==4&&(t.o=4,Me(14),s=!1),dn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==oo){t.o=4,Me(15),dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else dn(t.j,t.m,r,null),co(t,r);bh(t)&&r!=kr&&r!=oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),oa(e),e.K=!0,Me(11))):(dn(t.j,t.m,n,"[Invalid Chunked Response]"),Ut(t),Wn(t))}N.gb=function(){if(this.g){var t=ht(this.g),e=this.g.fa();this.C<e.length&&(ti(this),Th(this,t,e),this.i&&t!=4&&$s(this))}};function l_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?kr:(n=Number(e.substring(n,s)),isNaN(n)?oo:(s+=1,s+n>e.length?kr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,Ut(this)};function $s(t){t.V=Date.now()+t.O,Eh(t,t.O)}function Eh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ns(Re(t.fb,t),e)}function ti(t){t.B&&(j.clearTimeout(t.B),t.B=null)}N.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(o_(this.j,this.A),this.K!=2&&(ls(),Me(17)),Ut(this),this.o=2,Wn(this)):Eh(this,this.V-t)};function Wn(t){t.l.G==0||t.I||Kh(t.l,t)}function Ut(t){ti(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qo(t.T),ph(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function co(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lo(n.h,t))){if(!t.J&&lo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cr(n),ii(n);else break e;ia(n),Me(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ns(Re(n.bb,n),6e3));if(1>=Oh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ft(n,11)}else if((t.J||n.g==t)&&Cr(n),!Tr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ea(i,i.h),i.h=null))}if(s.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,oe(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Qh(s,s.H?s.ka:null,s.V),o.J){Ph(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ti(a),$s(a)),s.g=o}else zh(s);0<n.i.length&&oi(n)}else l[0]!="stop"&&l[0]!="close"||Ft(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ft(n,7):ra(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ls(4)}catch{}}function u_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function h_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function kh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=h_(t),s=u_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jt){this.h=e!==void 0?e:t.h,Sr(this,t.j),this.s=t.s,this.g=t.g,Ar(this,t.m),this.l=t.l,e=t.i;var n=new us;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ec(this,n),this.o=t.o}else t&&(n=String(t).match(Sh))?(this.h=!!e,Sr(this,n[1]||"",!0),this.s=Bn(n[2]||""),this.g=Bn(n[3]||"",!0),Ar(this,n[4]),this.l=Bn(n[5]||"",!0),Ec(this,n[6]||"",!0),this.o=Bn(n[7]||"")):(this.h=!!e,this.i=new us(null,this.h))}jt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jn(e,kc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jn(e,kc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(jn(n,n.charAt(0)=="/"?g_:p_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jn(n,y_)),t.join("")};function pt(t){return new jt(t)}function Sr(t,e,n){t.j=n?Bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ar(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ec(t,e,n){e instanceof us?(t.i=e,v_(t.i,t.h)):(n||(e=jn(e,m_)),t.i=new us(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function ni(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,f_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function f_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kc=/[#\/\?@]/g,p_=/[#\?:]/g,g_=/[#\?]/g,m_=/[#\?@]/g,y_=/#/g;function us(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rt(t){t.g||(t.g=new Map,t.h=0,t.i&&d_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=us.prototype;N.add=function(t,e){Rt(this),this.i=null,t=Rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ah(t,e){Rt(t),e=Rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ch(t,e){return Rt(t),e=Rn(t,e),t.g.has(e)}N.forEach=function(t,e){Rt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Rt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Rt(this);let e=[];if(typeof t=="string")Ch(this,t)&&(e=e.concat(this.g.get(Rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Rt(this),this.i=null,t=Rn(this,t),Ch(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Dh(t,e,n){Ah(t,e),0<n.length&&(t.i=null,t.g.set(Rn(t,e),Bo(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function v_(t,e){e&&!t.j&&(Rt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ah(this,s),Dh(this,r,n))},t)),t.j=e}var __=class{constructor(t,e){this.h=t,this.g=e}};function Rh(t){this.l=t||w_,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w_=10;function Nh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Oh(t){return t.h?1:t.g?t.g.size:0}function lo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ea(t,e){t.g?t.g.add(e):t.h=e}function Ph(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rh.prototype.cancel=function(){if(this.i=$h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $h(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bo(t.i)}function ta(){}ta.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};ta.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function I_(){this.g=new ta}function b_(t,e,n){const s=n||"";try{kh(t,function(r,i){let o=r;Ds(r)&&(o=Wo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function T_(t,e){const n=new Xr;if(j.Image){const s=new Image;s.onload=Qs(Xs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qs(Xs,n,s,"TestLoadImage: error",!1,e),s.onabort=Qs(Xs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qs(Xs,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ms(t){this.l=t.$b||null,this.j=t.ib||!1}Se(Ms,Xo);Ms.prototype.g=function(){return new si(this.l,this.j)};Ms.prototype.i=function(t){return function(){return t}}({});function si(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=na,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(si,Ie);var na=0;N=si.prototype;N.open=function(t,e){if(this.readyState!=na)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=na};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mh(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Mh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ls(this):hs(this),this.readyState==3&&Mh(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Ls(this))};N.Ta=function(t){this.g&&(this.response=t,Ls(this))};N.ga=function(){this.g&&Ls(this)};function Ls(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var E_=j.JSON.parse;function he(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lh,this.K=this.L=!1}Se(he,Ie);var Lh="",k_=/^https?$/i,S_=["POST","PUT"];N=he.prototype;N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():io.g(),this.C=this.u?Tc(this.u):Tc(io),this.g.onreadystatechange=Re(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Sc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=j.FormData&&t instanceof j.FormData,!(0<=Ju(S_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fh(this),0<this.B&&((this.K=A_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Re(this.qa,this)):this.A=Yo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sc(this,i)}};function A_(t){return _n&&zv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof Vo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function Sc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xh(t),ri(t)}function xh(t){t.D||(t.D=!0,Ee(t,"complete"),Ee(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ee(this,"complete"),Ee(this,"abort"),ri(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ri(this,!0)),he.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?Uh(this):this.eb())};N.eb=function(){Uh(this)};function Uh(t){if(t.h&&typeof Vo<"u"&&(!t.C[1]||ht(t)!=4||t.aa()!=2)){if(t.v&&ht(t)==4)Yo(t.Ha,0,t);else if(Ee(t,"readystatechange"),ht(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Sh)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!k_.test(r?r.toLowerCase():"")}n=s}if(n)Ee(t,"complete"),Ee(t,"success");else{t.m=6;try{var o=2<ht(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",xh(t)}}finally{ri(t)}}}}function ri(t,e){if(t.g){Fh(t);const n=t.g,s=t.C[0]?br:null;t.g=null,t.C=null,e||Ee(t,"ready");try{n.onreadystatechange=s}catch{}}}function Fh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function ht(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),E_(e)}};function Ac(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vh(t){let e="";return qo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function sa(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Vh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Ln(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bh(t){this.Ca=0,this.i=[],this.j=new Xr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Ln("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Ln("baseRetryDelayMs",5e3,t),this.ab=Ln("retryDelaySeedMs",1e4,t),this.Za=Ln("forwardChannelMaxRetries",2,t),this.ta=Ln("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Rh(t&&t.concurrentRequestLimit),this.Fa=new I_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Bh.prototype;N.ma=8;N.G=1;function ra(t){if(jh(t),t.G==3){var e=t.U++,n=pt(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),xs(t,n),e=new Ps(t,t.j,e,void 0),e.K=2,e.v=ni(pt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=Yh(e.l,null),e.g.da(e.v)),e.F=Date.now(),$s(e)}Wh(t)}function ii(t){t.g&&(oa(t),t.g.cancel(),t.g=null)}function jh(t){ii(t),t.u&&(j.clearTimeout(t.u),t.u=null),Cr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function oi(t){Nh(t.h)||t.m||(t.m=!0,uh(t.Ja,t),t.C=0)}function C_(t,e){return Oh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Ns(Re(t.Ja,t,e),Gh(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ps(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=nh(i),sh(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qh(this,r,e),n=pt(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),xs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Vh(i)))+"&"+e:this.o&&sa(n,this.o,i)),ea(this.h,r),this.Xa&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),r.Z=!0,ao(r,n,null)):ao(r,n,e),this.G=2}}else this.G==3&&(t?Cc(this,t):this.i.length==0||Nh(this.h)||Cc(this))};function Cc(t,e){var n;e?n=e.m:n=t.U++;const s=pt(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),xs(t,s),t.o&&t.s&&sa(s,t.o,t.s),n=new Ps(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=qh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ea(t.h,n),ao(n,s,e)}function xs(t,e){t.ia&&qo(t.ia,function(n,s){oe(e,s,n)}),t.l&&kh({},function(n,s){oe(e,s,n)})}function qh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Re(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{b_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function zh(t){t.g||t.u||(t.Z=1,uh(t.Ia,t),t.A=0)}function ia(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ns(Re(t.Ia,t),Gh(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Hh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ns(Re(this.cb,this),t)}};N.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),ii(this),Hh(this))};function oa(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Hh(t){t.g=new Ps(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=pt(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),xs(t,e),t.o&&t.s&&sa(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ni(pt(e)),n.s=null,n.P=!0,Ih(n,t)}N.bb=function(){this.v!=null&&(this.v=null,ii(this),ia(this),Me(19))};function Cr(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Kh(t,e){var n=null;if(t.g==e){Cr(t),oa(t),t.g=null;var s=2}else if(lo(t.h,e))n=e.D,Ph(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Jr(),Ee(s,new yh(s,n)),oi(t)}else zh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&C_(t,e)||s==2&&ia(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ft(t,5);break;case 4:Ft(t,10);break;case 3:Ft(t,6);break;default:Ft(t,2)}}}function Gh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Ft(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Re(t.jb,t);n||(n=new jt("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Sr(n,"https"),ni(n)),T_(n.toString(),s)}else Me(2);t.G=0,t.l&&t.l.va(e),Wh(t),jh(t)}N.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Wh(t){if(t.G=0,t.la=[],t.l){const e=$h(t.h);(e.length!=0||t.i.length!=0)&&(yc(t.la,e),yc(t.la,t.i),t.h.i.length=0,Bo(t.i),t.i.length=0),t.l.ua()}}function Qh(t,e,n){var s=n instanceof jt?pt(n):new jt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ar(s,s.m);else{var r=j.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new jt(null,void 0);s&&Sr(i,s),e&&(i.g=e),r&&Ar(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),xs(t,s),s}function Yh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new he(new Ms({ib:!0})):new he(t.ra),e.L=t.H,e}function Xh(){}N=Xh.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Qa=function(){};function Dr(){if(_n&&!(10<=Number(Hv)))throw Error("Environmental error: no available transport.")}Dr.prototype.g=function(t,e){return new je(t,e)};function je(t,e){Ie.call(this),this.g=new Bh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Tr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nn(this)}Se(je,Ie);je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Qh(t,null,t.V),oi(t)};je.prototype.close=function(){ra(this.g)};je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wo(t),t=n);e.i.push(new __(e.$a++,t)),e.G==3&&oi(e)};je.prototype.M=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,je.X.M.call(this)};function Jh(t){Jo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(Jh,Jo);function Zh(){Zo.call(this),this.status=1}Se(Zh,Zo);function Nn(t){this.g=t}Se(Nn,Xh);Nn.prototype.xa=function(){Ee(this.g,"a")};Nn.prototype.wa=function(t){Ee(this.g,new Jh(t))};Nn.prototype.va=function(t){Ee(this.g,new Zh)};Nn.prototype.ua=function(){Ee(this.g,"b")};Dr.prototype.createWebChannel=Dr.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;Zr.NO_ERROR=0;Zr.TIMEOUT=8;Zr.HTTP_ERROR=6;vh.COMPLETE="complete";_h.EventType=Os;Os.OPEN="a";Os.CLOSE="b";Os.ERROR="c";Os.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.Na;he.prototype.getLastErrorCode=he.prototype.Ea;he.prototype.getStatus=he.prototype.aa;he.prototype.getResponseJson=he.prototype.Ra;he.prototype.getResponseText=he.prototype.fa;he.prototype.send=he.prototype.da;var D_=function(){return new Dr},R_=function(){return Jr()},Bi=Zr,N_=vh,O_=sn,Dc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},P_=Ms,Js=_h,$_=he;const Rc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Vr("@firebase/firestore");function Nc(){return Jt.logLevel}function O(t,...e){if(Jt.logLevel<=te.DEBUG){const n=e.map(aa);Jt.debug(`Firestore (${On}): ${t}`,...n)}}function gt(t,...e){if(Jt.logLevel<=te.ERROR){const n=e.map(aa);Jt.error(`Firestore (${On}): ${t}`,...n)}}function Oc(t,...e){if(Jt.logLevel<=te.WARN){const n=e.map(aa);Jt.warn(`Firestore (${On}): ${t}`,...n)}}function aa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+t;throw gt(e),new Error(e)}function re(t,e){t||H()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Xe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xe.UNAUTHENTICATED))}shutdown(){}}class x_{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new M_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new xe(e)}}class U_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class F_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new U_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new V_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=j_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function wn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new me(0,0))}static max(){return new G(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ds{construct(e,n,s){return new ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const q_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends ds{construct(e,n,s){return new De(e,n,s)}static isValidIdentifier(e){return q_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ae.fromString(e))}static fromName(e){return new M(ae.fromString(e).popFirst(5))}static empty(){return new M(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ae(e.slice()))}}function z_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new me(n+1,0):new me(n,s));return new kt(r,M.empty(),e)}function H_(t){return new kt(t.readTime,t.key,-1)}class kt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new kt(G.min(),M.empty(),-1)}static max(){return new kt(G.max(),M.empty(),-1)}}function K_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==G_)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,s)=>{n(e)})}static reject(e){return new w((n,s)=>{s(e)})}static waitFor(e){return new w((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=w.resolve(!1);for(const s of e)n=n.next(r=>r?w.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new w((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new w((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Fs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ca{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function td(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ca.at=-1;class ve{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:be.RED,this.left=r!=null?r:be.EMPTY,this.right=i!=null?i:be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new be(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $c(this.data.getIterator())}getIteratorFrom(e){return new $c(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class $c{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new nt([])}unionWith(e){let n=new ye(De.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const Q_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(t){if(re(!!t),typeof t=="string"){let e=0;const n=Q_.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function In(t){return typeof t=="string"?ke.fromBase64String(t):ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sd(t){const e=t.mapValue.fields.__previous_value__;return nd(e)?sd(e):e}function fs(t){const e=St(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ps{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}function ai(t){return t==null}function Rr(t){return t===0&&1/t==-1/0}function X_(t){return typeof t=="number"&&Number.isInteger(t)&&!Rr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nd(t)?4:J_(t)?9007199254740991:10:H()}function ot(t,e){if(t===e)return!0;const n=Zt(t);if(n!==Zt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=St(s.timestampValue),o=St(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return In(s.bytesValue).isEqual(In(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ue(s.geoPointValue.latitude)===ue(r.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ue(s.integerValue)===ue(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ue(s.doubleValue),o=ue(r.doubleValue);return i===o?Rr(i)===Rr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return wn(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Pc(i)!==Pc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ot(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function gs(t,e){return(t.values||[]).find(n=>ot(n,e))!==void 0}function bn(t,e){if(t===e)return 0;const n=Zt(t),s=Zt(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ue(r.integerValue||r.doubleValue),a=ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Mc(t.timestampValue,e.timestampValue);case 4:return Mc(fs(t),fs(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=In(r),a=In(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(ue(r.latitude),ue(i.latitude));return o!==0?o:se(ue(r.longitude),ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===er.mapValue&&i===er.mapValue)return 0;if(r===er.mapValue)return 1;if(i===er.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=se(a[u],l[u]);if(h!==0)return h;const d=bn(o[a[u]],c[l[u]]);if(d!==0)return d}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function Mc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=St(t),s=St(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function mn(t){return uo(t)}function uo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=St(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?In(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=uo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${uo(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function ho(t){return!!t&&"integerValue"in t}function la(t){return!!t&&"arrayValue"in t}function Lc(t){return!!t&&"nullValue"in t}function xc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cr(t){return!!t&&"mapValue"in t}function Qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function J_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!cr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(n)}setAll(e){let n=De.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Qn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());cr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];cr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Pn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ze(Qn(this.value))}}function rd(t){const e=[];return Pn(t.fields,(n,s)=>{const r=new De([n]);if(cr(s)){const i=rd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Te(e,0,G.min(),G.min(),ze.empty(),0)}static newFoundDocument(e,n,s){return new Te(e,1,n,G.min(),s,0)}static newNoDocument(e,n){return new Te(e,2,n,G.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new Te(e,3,n,G.min(),ze.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Uc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Z_(t,e,n,s,r,i,o)}function ua(t){const e=K(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+mn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ai(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>mn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>mn(s)).join(",")),e.ht=n}return e.ht}function ew(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${mn(s.value)}`;var s}).join(", ")}]`),ai(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>mn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>mn(n)).join(",")),`Target(${e})`}function ha(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!cw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vc(t.startAt,e.startAt)&&Vc(t.endAt,e.endAt)}function fo(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ue extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new tw(e,n,s):n==="array-contains"?new rw(e,s):n==="in"?new iw(e,s):n==="not-in"?new ow(e,s):n==="array-contains-any"?new aw(e,s):new Ue(e,n,s)}static lt(e,n,s){return n==="in"?new nw(e,s):new sw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bn(n,this.value)):n!==null&&Zt(this.value)===Zt(n)&&this.ft(bn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tw extends Ue{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class nw extends Ue{constructor(e,n){super(e,"in",n),this.keys=id("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sw extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=id("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function id(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class rw extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return la(n)&&gs(n.arrayValue,this.value)}}class iw extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gs(this.value.arrayValue,n)}}class ow extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gs(this.value.arrayValue,n)}}class aw extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!la(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>gs(this.value.arrayValue,s))}}class Nr{constructor(e,n){this.position=e,this.inclusive=n}}class Yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function cw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Fc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function lw(t,e,n,s,r,i,o,a){return new ci(t,e,n,s,r,i,o,a)}function da(t){return new ci(t)}function Bc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function dw(t){return t.collectionGroup!==null}function ms(t){const e=K(t);if(e._t===null){e._t=[];const n=hw(e),s=uw(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Yn(n)),e._t.push(new Yn(De.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yn(De.keyField(),i))}}}return e._t}function mt(t){const e=K(t);if(!e.wt)if(e.limitType==="F")e.wt=Uc(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ms(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Yn(i.field,o))}const s=e.endAt?new Nr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Nr(e.startAt.position,e.startAt.inclusive):null;e.wt=Uc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function po(t,e,n){return new ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function li(t,e){return ha(mt(t),mt(e))&&t.limitType===e.limitType}function od(t){return`${ua(mt(t))}|lt:${t.limitType}`}function go(t){return`Query(target=${ew(mt(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Fc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ms(n),s)||n.endAt&&!function(r,i,o){const a=Fc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ms(n),s))}(t,e)}function fw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ad(t){return(e,n)=>{let s=!1;for(const r of ms(t)){const i=pw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function pw(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(e)?"-0":e}}function ld(t){return{integerValue:""+t}}function gw(t,e){return X_(e)?ld(e):cd(t,e)}/**
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
 */class ui{constructor(){this._=void 0}}function mw(t,e,n){return t instanceof Or?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ys?hd(t,e):t instanceof vs?dd(t,e):function(s,r){const i=ud(s,r),o=jc(i)+jc(s.yt);return ho(i)&&ho(s.yt)?ld(o):cd(s.It,o)}(t,e)}function yw(t,e,n){return t instanceof ys?hd(t,e):t instanceof vs?dd(t,e):n}function ud(t,e){return t instanceof Pr?ho(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Or extends ui{}class ys extends ui{constructor(e){super(),this.elements=e}}function hd(t,e){const n=fd(e);for(const s of t.elements)n.some(r=>ot(r,s))||n.push(s);return{arrayValue:{values:n}}}class vs extends ui{constructor(e){super(),this.elements=e}}function dd(t,e){let n=fd(e);for(const s of t.elements)n=n.filter(r=>!ot(r,s));return{arrayValue:{values:n}}}class Pr extends ui{constructor(e,n){super(),this.It=e,this.yt=n}}function jc(t){return ue(t.integerValue||t.doubleValue)}function fd(t){return la(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ys&&s instanceof ys||n instanceof vs&&s instanceof vs?wn(n.elements,s.elements,ot):n instanceof Pr&&s instanceof Pr?ot(n.yt,s.yt):n instanceof Or&&s instanceof Or}(t.transform,e.transform)}class _w{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hi{}function pd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pa(t.key,st.none()):new Vs(t.key,t.data,st.none());{const n=t.data,s=ze.empty();let r=new ye(De.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rn(t.key,s,new nt(r.toArray()),st.none())}}function ww(t,e,n){t instanceof Vs?function(s,r,i){const o=s.value.clone(),a=zc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rn?function(s,r,i){if(!lr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(gd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xn(t,e,n,s){return t instanceof Vs?function(r,i,o,a){if(!lr(r.precondition,i))return o;const c=r.value.clone(),l=Hc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof rn?function(r,i,o,a){if(!lr(r.precondition,i))return o;const c=Hc(r.fieldTransforms,a,i),l=i.data;return l.setAll(gd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return lr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Iw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ud(s.transform,r||null);i!=null&&(n===null&&(n=ze.empty()),n.set(s.field,i))}return n||null}function qc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wn(n,s,(r,i)=>vw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vs extends hi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rn extends hi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zc(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,yw(o,a,n[r]))}return s}function Hc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,mw(i,o,e))}return s}class pa extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bw extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,Z;function Ew(t){switch(t){default:return H();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function md(t){if(t===void 0)return gt("GRPC error has no .code"),b.UNKNOWN;switch(t){case le.OK:return b.OK;case le.CANCELLED:return b.CANCELLED;case le.UNKNOWN:return b.UNKNOWN;case le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case le.INTERNAL:return b.INTERNAL;case le.UNAVAILABLE:return b.UNAVAILABLE;case le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case le.NOT_FOUND:return b.NOT_FOUND;case le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case le.ABORTED:return b.ABORTED;case le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case le.DATA_LOSS:return b.DATA_LOSS;default:return H()}}(Z=le||(le={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return td(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new ve(M.comparator);function yt(){return kw}const yd=new ve(M.comparator);function qn(...t){let e=yd;for(const n of t)e=e.insert(n.key,n);return e}function vd(t){let e=yd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vt(){return Jn()}function _d(){return Jn()}function Jn(){return new $n(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sw=new ve(M.comparator),Aw=new ye(M.comparator);function W(...t){let e=Aw;for(const n of t)e=e.add(n);return e}const Cw=new ye(se);function wd(){return Cw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,n)),new di(G.min(),s,wd(),yt(),W())}}class Bs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Bs(ke.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Id{constructor(e,n){this.targetId=e,this.At=n}}class bd{constructor(e,n,s=ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kc{constructor(){this.Rt=0,this.bt=Wc(),this.Pt=ke.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=W(),n=W(),s=W();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new Bs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Wc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Dw{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=yt(),this.qt=Gc(),this.Kt=new ye(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(fo(i))if(s===0){const o=new M(i.path);this.jt(n,o,Te.newNoDocument(o,G.min()))}else re(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&fo(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Te.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=W();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new di(e,n,this.Kt,this.Ut,s);return this.Ut=yt(),this.qt=Gc(),this.Kt=new ye(se),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Kc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ye(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Kc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Gc(){return new ve(M.comparator)}function Wc(){return new ve(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Nw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ow{constructor(e,n){this.databaseId=e,this.gt=n}}function $r(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Td(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Pw(t,e){return $r(t,e.toTimestamp())}function dt(t){return re(!!t),G.fromTimestamp(function(e){const n=St(e);return new me(n.seconds,n.nanos)}(t))}function ga(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ed(t){const e=ae.fromString(t);return re(Ad(e)),e}function mo(t,e){return ga(t.databaseId,e.path)}function ji(t,e){const n=Ed(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(kd(n))}function yo(t,e){return ga(t.databaseId,e)}function $w(t){const e=Ed(t);return e.length===4?ae.emptyPath():kd(e)}function vo(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kd(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qc(t,e,n){return{name:mo(t,e),fields:n.value.mapValue.fields}}function Mw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(re(l===void 0||typeof l=="string"),ke.fromBase64String(l||"")):(re(l===void 0||l instanceof Uint8Array),ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:md(c.code);return new U(l,c.message||"")}(o);n=new bd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ji(t,s.document.name),i=dt(s.document.updateTime),o=new ze({mapValue:{fields:s.document.fields}}),a=Te.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ur(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ji(t,s.document),i=s.readTime?dt(s.readTime):G.min(),o=Te.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ur([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ji(t,s.document),i=s.removedTargetIds||[];n=new ur([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Tw(r),o=s.targetId;n=new Id(o,i)}}return n}function Lw(t,e){let n;if(e instanceof Vs)n={update:Qc(t,e.key,e.value)};else if(e instanceof pa)n={delete:mo(t,e.key)};else if(e instanceof rn)n={update:Qc(t,e.key,e.data),updateMask:Kw(e.fieldMask)};else{if(!(e instanceof bw))return H();n={verify:mo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Or)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ys)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Pw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function xw(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?dt(s.updateTime):dt(r);return i.isEqual(G.min())&&(i=dt(r)),new _w(i,s.transformResults||[])}(n,e))):[]}function Uw(t,e){return{documents:[yo(t,e.path)]}}function Fw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=yo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(xc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NAN"}};if(Lc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(xc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NOT_NAN"}};if(Lc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(h.field),op:qw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ln(u.field),direction:jw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ai(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Vw(t){let e=$w(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Sd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Yn(fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ai(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Nr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Nr(d,h)}(n.endAt)),lw(e,r,o,i,a,"F",c,l)}function Bw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sd(t){return t?t.unaryFilter!==void 0?[Hw(t)]:t.fieldFilter!==void 0?[zw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Sd(e)).reduce((e,n)=>e.concat(n)):H():[]}function jw(t){return Rw[t]}function qw(t){return Nw[t]}function ln(t){return{fieldPath:t.canonicalString()}}function fn(t){return De.fromServerFormat(t.fieldPath)}function zw(t){return Ue.create(fn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}function Hw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fn(t.unaryFilter.field);return Ue.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fn(t.unaryFilter.field);return Ue.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fn(t.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fn(t.unaryFilter.field);return Ue.create(r,"!=",{nullValue:"NULL_VALUE"});default:return H()}}function Kw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ad(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ww(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=_d();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=pd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(n,s)=>qc(n,s))&&wn(this.baseMutations,e.baseMutations,(n,s)=>qc(n,s))}}class ma{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=Sw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ma(e,n,s,r)}}/**
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
 */class Ww{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zt{constructor(e,n,s,r,i=G.min(),o=G.min(),a=ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.re=e}}function Yw(t){const e=Vw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?po(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.Ye=new Jw}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(kt.min())}updateCollectionGroup(e,n,s){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Jw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ye(ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Tn(0)}static vn(){return new Tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(){this.changes=new $n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Xn(s.mutation,r,nt.empty(),me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,W()).next(()=>s))}getLocalViewOfDocuments(e,n,s=W()){const r=Vt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=qn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,W()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=yt();const o=Jn(),a=Jn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof rn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Xn(u.mutation,l,u.mutation.getFieldMask(),me.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new e0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Jn();let r=new ve((o,a)=>o-a),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||nt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||W()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=_d();u.forEach(d=>{if(!i.has(d)){const p=pd(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):w.resolve(Vt());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,W())).next(u=>({batchId:a,changes:vd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=qn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=qn();return this.indexManager.getCollectionParents(e,r).next(o=>w.forEach(o,a=>{const c=function(l,u){return new ci(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Te.newInvalidDocument(l)))});let o=qn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Xn(l.mutation,c,nt.empty(),me.now()),fa(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(Te.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:dt(s.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Yw(s.bundledQuery),readTime:dt(s.readTime)}}(n)),w.resolve()}}/**
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
 */class s0{constructor(){this.overlays=new ve(M.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vt();return w.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),w.resolve()}getOverlaysForCollection(e,n,s){const r=Vt(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return w.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Vt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Vt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return w.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ww(n,s));let i=this.es.get(n);i===void 0&&(i=W(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.ns=new ye(we.ss),this.rs=new ye(we.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new we(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new we(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new M(new ae([])),s=new we(n,e),r=new we(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ae([])),s=new we(n,e),r=new we(n,e+1);let i=W();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new we(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class we{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ye(we.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new we(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new we(n,0),r=new we(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(se);return n.forEach(r=>{const i=new we(r,0),o=new we(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),w.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new we(new M(i),0);let a=new ye(se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return w.forEach(n.mutations,r=>{const i=new we(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new we(n,0),r=this.gs.firstAfterOrEqual(s);return w.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.Es=e,this.docs=new ve(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():Te.newInvalidDocument(n))}getEntries(e,n){let s=yt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Te.newInvalidDocument(r))}),w.resolve(s)}getAllFromCollection(e,n,s){let r=yt();const i=new M(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||K_(H_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,s,r){H()}As(e,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new o0(this)}getSize(e){return w.resolve(this.size)}}class o0 extends Zw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.persistence=e,this.Rs=new $n(n=>ua(n),ha),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ya,this.targetCount=0,this.vs=Tn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Tn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),w.waitFor(i).next(()=>r)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return w.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),w.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return w.resolve(s)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ca(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new a0(this),this.indexManager=new Xw,this.remoteDocumentCache=function(s){return new i0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Qw(n),this.Ns=new n0(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new r0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new l0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return w.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class l0 extends W_{constructor(e){super(),this.currentSequenceNumber=e}}class va{constructor(e){this.persistence=e,this.Fs=new ya,this.$s=null}static Bs(e){return new va(e)}get Ls(){if(this.$s)return this.$s;throw H()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),w.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,s=>{const r=M.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=W(),r=W();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new _a(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Bc(n))return w.resolve(null);let s=mt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=po(n,null,"F"),s=mt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=W(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,po(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Bc(n)||r.isEqual(G.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Nc()<=te.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),go(n)),this.Bi(e,o,n,z_(r,-1)))})}Fi(e,n){let s=new ye(ad(e));return n.forEach((r,i)=>{fa(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Nc()<=te.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",go(n)),this.Ni.getDocumentsMatchingQuery(e,n,kt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new ve(se),this.qi=new $n(i=>ua(i),ha),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function d0(t,e,n,s){return new h0(t,e,n,s)}async function Cd(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=W();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function f0(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const m=c.docVersions.get(p);re(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=W();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Dd(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function p0(t,e){const n=K(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ke.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,m,E){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=yt(),l=W();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(g0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(G.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function g0(t,e,n){let s=W(),r=W();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=yt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function m0(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function y0(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,w.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new zt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function _o(t,e,n){const s=K(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Fs(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Yc(t,e,n){const s=K(t);let r=G.min(),i=W();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=K(a),h=u.qi.get(l);return h!==void 0?w.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,mt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:W())).next(a=>(v0(s,fw(e),a),{documents:a,Hi:i})))}function v0(t,e,n){let s=G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Xc{constructor(){this.activeTargetIds=wd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _0{constructor(){this.Lr=new Xc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Xc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);O("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(O("RestConnection","Received: ",c),c),c=>{throw Oc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=I0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new $_;a.listenOnce(N_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bi.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Bi.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Bi.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(g)>=0?g:b.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=D_(),o=R_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new P_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");O("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new b0({Hr:g=>{h?O("Connection","Not sending because WebChannel is closed:",g):(u||(O("Connection","Opening WebChannel transport."),l.open(),u=!0),O("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,m,E)=>{g.listen(m,R=>{try{E(R)}catch(P){setTimeout(()=>{throw P},0)}})};return p(l,Js.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),p(l,Js.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),p(l,Js.EventType.ERROR,g=>{h||(h=!0,Oc("Connection","WebChannel transport errored:",g),d.io(new U(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,Js.EventType.MESSAGE,g=>{var m;if(!h){const E=g.data[0];re(!!E);const R=E,P=R.error||((m=R[0])===null||m===void 0?void 0:m.error);if(P){O("Connection","WebChannel received error:",P);const S=P.status;let $=function(I){const L=le[I];if(L!==void 0)return md(L)}(S),T=P.message;$===void 0&&($=b.INTERNAL,T="Unknown error status: "+S+" with message "+P.message),h=!0,d.io(new U($,T)),l.close()}else O("Connection","WebChannel received:",E),d.ro(E)}}),p(o,O_.STAT_EVENT,g=>{g.stat===Dc.PROXY?O("Connection","Detected buffering proxy"):g.stat===Dc.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function qi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){return new Ow(t,!0)}class Rd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Rd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new U(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E0 extends Nd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Mw(this.It,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?dt(i.readTime):G.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=vo(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=fo(a)?{documents:Uw(r,a)}:{query:Fw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Td(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=$r(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Bw(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=vo(this.It),n.removeTarget=e,this.Bo(n)}}class k0 extends Nd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=xw(e.writeResults,e.commitTime),s=dt(e.commitTime);return this.listener.Zo(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=vo(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Lw(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(b.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class A0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(gt(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{on(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=K(a);c._u.add(4),await js(c),c.gu.set("Unknown"),c._u.delete(4),await pi(c)}(this))})}),this.gu=new A0(s,r)}}async function pi(t){if(on(t))for(const e of t.wu)await e(!0)}async function js(t){for(const e of t.wu)await e(!1)}function Od(t,e){const n=K(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ba(n)?Ia(n):Mn(n).ko()&&wa(n,e))}function Pd(t,e){const n=K(t),s=Mn(n);n.du.delete(e),s.ko()&&$d(n,e),n.du.size===0&&(s.ko()?s.Fo():on(n)&&n.gu.set("Unknown"))}function wa(t,e){t.yu.Ot(e.targetId),Mn(t).zo(e)}function $d(t,e){t.yu.Ot(e),Mn(t).Ho(e)}function Ia(t){t.yu=new Dw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Mn(t).start(),t.gu.uu()}function ba(t){return on(t)&&!Mn(t).No()&&t.du.size>0}function on(t){return K(t)._u.size===0}function Md(t){t.yu=void 0}async function D0(t){t.du.forEach((e,n)=>{wa(t,e)})}async function R0(t,e){Md(t),ba(t)?(t.gu.hu(e),Ia(t)):t.gu.set("Unknown")}async function N0(t,e,n){if(t.gu.set("Online"),e instanceof bd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mr(t,s)}else if(e instanceof ur?t.yu.Gt(e):e instanceof Id?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(G.min()))try{const s=await Dd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ke.EMPTY_BYTE_STRING,c.snapshotVersion)),$d(r,a);const l=new zt(c.target,a,1,c.sequenceNumber);wa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Mr(t,s)}}async function Mr(t,e,n){if(!Fs(e))throw e;t._u.add(1),await js(t),t.gu.set("Offline"),n||(n=()=>Dd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await pi(t)})}function Ld(t,e){return e().catch(n=>Mr(t,n,e))}async function gi(t){const e=K(t),n=At(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;O0(e);)try{const r=await m0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,P0(e,r)}catch(r){await Mr(e,r)}xd(e)&&Ud(e)}function O0(t){return on(t)&&t.fu.length<10}function P0(t,e){t.fu.push(e);const n=At(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function xd(t){return on(t)&&!At(t).No()&&t.fu.length>0}function Ud(t){At(t).start()}async function $0(t){At(t).eu()}async function M0(t){const e=At(t);for(const n of t.fu)e.Xo(n.mutations)}async function L0(t,e,n){const s=t.fu.shift(),r=ma.from(s,e,n);await Ld(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await gi(t)}async function x0(t,e){e&&At(t).Yo&&await async function(n,s){if(r=s.code,Ew(r)&&r!==b.ABORTED){const i=n.fu.shift();At(n).Oo(),await Ld(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gi(n)}var r}(t,e),xd(t)&&Ud(t)}async function Zc(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=on(n);n._u.add(3),await js(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await pi(n)}async function U0(t,e){const n=K(t);e?(n._u.delete(2),await pi(n)):e||(n._u.add(2),await js(n),n.gu.set("Unknown"))}function Mn(t){return t.pu||(t.pu=function(e,n,s){const r=K(e);return r.su(),new E0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:D0.bind(null,t),Zr:R0.bind(null,t),Wo:N0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),ba(t)?Ia(t):t.gu.set("Unknown")):(await t.pu.stop(),Md(t))})),t.pu}function At(t){return t.Iu||(t.Iu=function(e,n,s){const r=K(e);return r.su(),new k0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:$0.bind(null,t),Zr:x0.bind(null,t),tu:M0.bind(null,t),Zo:L0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await gi(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ta(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(t,e){if(gt("AsyncQueue",`${e}: ${t}`),Fs(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=qn(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.Tu=new ve(M.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):H():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class En{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new En(e,n,yn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.Au=void 0,this.listeners=[]}}class V0{constructor(){this.queries=new $n(e=>od(e),li),this.onlineState="Unknown",this.Ru=new Set}}async function B0(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new F0),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ea(o,`Initialization of query '${go(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&ka(n)}async function j0(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function q0(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&ka(n)}function z0(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ka(t){t.Ru.forEach(e=>{e.next()})}class H0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new En(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.key=e}}class Vd{constructor(e){this.key=e}}class K0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=W(),this.mutatedKeys=W(),this.Ku=ad(e),this.Gu=new yn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new el,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=fa(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),E=!0):this.zu(d,p)||(s.track({type:2,doc:p}),E=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),E=!0):d&&!p&&(s.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new En(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new el,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=W(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new Vd(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new Fd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=W();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return En.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class G0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class W0{constructor(e){this.key=e,this.ec=!1}}class Q0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new $n(a=>od(a),li),this.ic=new Map,this.rc=new Set,this.oc=new ve(M.comparator),this.uc=new Map,this.cc=new ya,this.ac={},this.hc=new Map,this.lc=Tn.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Y0(t,e){const n=oI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await y0(n.localStore,mt(e));n.isPrimaryClient&&Od(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await X0(n,e,s,a==="current")}return r}async function X0(t,e,n,s){t.dc=(u,h,d)=>async function(p,g,m,E){let R=g.view.ju(m);R.$i&&(R=await Yc(p.localStore,g.query,!1).then(({documents:$})=>g.view.ju($,R)));const P=E&&E.targetChanges.get(g.targetId),S=g.view.applyChanges(R,p.isPrimaryClient,P);return nl(p,g.targetId,S.Yu),S.snapshot}(t,u,h,d);const r=await Yc(t.localStore,e,!0),i=new K0(e,r.Hi),o=i.ju(r.documents),a=Bs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);nl(t,n,c.Yu);const l=new G0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function J0(t,e){const n=K(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!li(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Pd(n.remoteStore,s.targetId),wo(n,s.targetId)}).catch(Us)):(wo(n,s.targetId),await _o(n.localStore,s.targetId,!0))}async function Z0(t,e,n){const s=aI(t);try{const r=await function(i,o){const a=K(i),c=me.now(),l=o.reduce((d,p)=>d.add(p.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=yt(),g=W();return a.Gi.getEntries(d,l).next(m=>{p=m,p.forEach((E,R)=>{R.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{u=m;const E=[];for(const R of o){const P=Iw(R,u.get(R.key).overlayedDocument);P!=null&&E.push(new rn(R.key,P,rd(P.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(m=>{h=m;const E=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,E)})}).then(()=>({batchId:h.batchId,changes:vd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new ve(se)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await qs(s,r.changes),await gi(s.remoteStore)}catch(r){const i=Ea(r,"Failed to persist write");n.reject(i)}}async function Bd(t,e){const n=K(t);try{const s=await p0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?re(o.ec):r.removedDocuments.size>0&&(re(o.ec),o.ec=!1))}),await qs(n,s,e)}catch(s){await Us(s)}}function tl(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&ka(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eI(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new ve(M.comparator);o=o.insert(i,Te.newNoDocument(i,G.min()));const a=W().add(i),c=new di(G.min(),new Map,new ye(se),o,a);await Bd(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Sa(s)}else await _o(s.localStore,e,!1).then(()=>wo(s,e,n)).catch(Us)}async function tI(t,e){const n=K(t),s=e.batch.batchId;try{const r=await f0(n.localStore,e);qd(n,s,null),jd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qs(n,r)}catch(r){await Us(r)}}async function nI(t,e,n){const s=K(t);try{const r=await function(i,o){const a=K(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);qd(s,e,n),jd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qs(s,r)}catch(r){await Us(r)}}function jd(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function qd(t,e,n){const s=K(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function wo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||zd(t,s)})}function zd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Pd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Sa(t))}function nl(t,e,n){for(const s of n)s instanceof Fd?(t.cc.addReference(s.key,e),sI(t,s)):s instanceof Vd?(O("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||zd(t,s.key)):H()}function sI(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.rc.add(s),Sa(t))}function Sa(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(ae.fromString(e)),s=t.lc.next();t.uc.set(s,new W0(n)),t.oc=t.oc.insert(n,s),Od(t.remoteStore,new zt(mt(da(n.path)),s,2,ca.at))}}async function qs(t,e,n){const s=K(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=_a.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=K(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(c,h=>w.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>w.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Fs(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,g)}}}(s.localStore,i))}async function rI(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await Cd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qs(n,s.ji)}}function iI(t,e){const n=K(t),s=n.uc.get(e);if(s&&s.ec)return W().add(s.key);{let r=W();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function oI(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eI.bind(null,e),e.nc.Wo=q0.bind(null,e.eventManager),e.nc._c=z0.bind(null,e.eventManager),e}function aI(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nI.bind(null,e),e}class cI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=fi(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return d0(this.persistence,new u0,e.initialUser,this.It)}gc(e){return new c0(va.Bs,this.It)}mc(e){return new _0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rI.bind(null,this.syncEngine),await U0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new V0}createDatastore(e){const n=fi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new T0(r));var r;return function(i,o,a,c){return new S0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>tl(this.syncEngine,a,0),o=Jc.C()?new Jc:new w0,new C0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Q0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await js(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=xe.UNAUTHENTICATED,this.clientId=ed.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ea(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function dI(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Cd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function fI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pI(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zc(e.remoteStore,i)),t.onlineComponents=e}async function pI(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await dI(t,new cI)),t.offlineComponents}async function Hd(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await fI(t,new lI)),t.onlineComponents}function gI(t){return Hd(t).then(e=>e.syncEngine)}async function sl(t){const e=await Hd(t),n=e.eventManager;return n.onListen=Y0.bind(null,e.syncEngine),n.onUnlisten=J0.bind(null,e.syncEngine),n}const rl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mI(t,e,n,s){if(e===!0&&s===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function il(t){if(!M.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ol(t){if(M.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Aa(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new L_;switch(n.type){case"gapi":const s=n.client;return new F_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rl.get(e);n&&(O("ComponentProvider","Removing Datastore"),rl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class mi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mi(this.firestore,e,this._query)}}class Et extends mi{constructor(e,n,s){super(e,n,da(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new M(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function yI(t,e,...n){if(t=Pe(t),Kd("collection","path",e),t instanceof Ca){const s=ae.fromString(e,...n);return ol(s),new Et(t,null,s)}{if(!(t instanceof Be||t instanceof Et))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return ol(s),new Et(t.firestore,null,s)}}function tr(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=ed.R()),Kd("doc","path",e),t instanceof Ca){const s=ae.fromString(e,...n);return il(s),new Be(t,null,new M(s))}{if(!(t instanceof Be||t instanceof Et))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return il(s),new Be(t.firestore,t instanceof Et?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Rd(this,"async_queue_retry"),this.jc=()=>{const n=qi();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=qi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new qt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Fs(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Ta.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&H()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function cl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class _s extends Ca{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new vI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wd(this),this._firestoreClient.terminate()}}function _I(t,e){const n=typeof t=="object"?t:ko(),s=typeof t=="string"?t:e||"(default)";return nn(n,"firestore").getImmediate({identifier:s})}function Gd(t){return t._firestoreClient||Wd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Y_(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new hI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Da{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(ke.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kn(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=/^__.*__$/;class II{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vs(e,this.data,n,this.fieldTransforms)}}function Yd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Na{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Lr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(Yd(this.na)&&wI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class bI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||fi(e)}fa(e,n,s,r=!1){return new Na({na:e,methodName:n,la:s,path:De.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function TI(t){const e=t._freezeSettings(),n=fi(t._databaseId);return new bI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EI(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);ef("Data must be an object, but it was:",o,s);const a=Jd(s,o);let c,l;if(i.merge)c=new nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=kI(e,h,n);if(!o.contains(d))throw new U(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);AI(u,d)||u.push(d)}c=new nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new II(new ze(a),c,l)}function Xd(t,e){if(Zd(t=Pe(t)))return ef("Unsupported field value:",e,t),Jd(t,e);if(t instanceof Qd)return function(n,s){if(!Yd(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Xd(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return gw(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=me.fromDate(n);return{timestampValue:$r(s.It,r)}}if(n instanceof me){const r=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$r(s.It,r)}}if(n instanceof Ra)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof kn)return{bytesValue:Td(s.It,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ga(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Aa(n)}`)}(t,e)}function Jd(t,e){const n={};return td(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(t,(s,r)=>{const i=Xd(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Zd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof Ra||t instanceof kn||t instanceof Be||t instanceof Qd)}function ef(t,e,n){if(!Zd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Aa(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function kI(t,e,n){if((e=Pe(e))instanceof Da)return e._internalPath;if(typeof e=="string")return tf(t,e);throw Lr("Field path arguments must be of type string or ",t,!1,void 0,n)}const SI=new RegExp("[~\\*/\\[\\]]");function tf(t,e,n){if(e.search(SI)>=0)throw Lr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Da(...e.split("."))._internalPath}catch{throw Lr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(b.INVALID_ARGUMENT,a+t+c)}function AI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CI extends nf{data(){return super.data()}}function sf(t,e){return typeof e=="string"?tf(t,e):e instanceof Da?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rf extends nf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(sf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class hr extends rf{data(e={}){return super.data(e)}}class DI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new hr(this._firestore,this._userDataWriter,s.key,s,new zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new hr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new hr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:RI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function OI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{convertValue(e,n="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Pn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ra(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=St(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ae.fromString(e);re(Ad(s));const r=new ps(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||gt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class of extends PI{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function ll(t,e,n){t=vn(t,Be);const s=vn(t.firestore,_s),r=$I(t.converter,e,n);return af(s,[EI(TI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,st.none())])}function MI(t){return af(vn(t.firestore,_s),[new pa(t._key,st.none())])}function ul(t,...e){var n,s,r;t=Pe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(cl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=vn(t.firestore,_s),u=da(t._key.path),c={next:h=>{e[o]&&e[o](LI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,mi);l=vn(h.firestore,_s),u=h._query;const d=new of(l);c={next:p=>{e[o]&&e[o](new DI(l,d,h,p))},error:e[o+1],complete:e[o+2]},NI(t._query)}return function(h,d,p,g){const m=new uI(g),E=new H0(d,m,p);return h.asyncQueue.enqueueAndForget(async()=>B0(await sl(h),E)),()=>{m.Rc(),h.asyncQueue.enqueueAndForget(async()=>j0(await sl(h),E))}}(Gd(l),u,a,c)}function af(t,e){return function(n,s){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>Z0(await gI(n),s,r)),r.promise}(Gd(t),e)}function LI(t,e,n){const s=n.docs.get(e._key),r=new of(t);return new rf(t,r,e._key,s,new zn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){On=n})(Is),it(new Qe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new _s(new x_(n.getProvider("auth-internal")),new B_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ke(Rc,"3.5.0",t),Ke(Rc,"3.5.0","esm2017")})();const xI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},cf=cg(xI),Pt=fy(cf);nm(Pt,_u);const xn=_I(cf);Av();const UI=new at,FI=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Cn(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return mu(Pt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return em(Pt,r,i)},async signInWithEmail(r,i){return tm(Pt,r,i)},async signInWithGoogle(){return Sm(Pt,UI)},async signOut(){return sm(Pt)}}},VI=FI(),hl="/assets/default-user.a40c52dd.png";function BI(t){let e;return{c(){e=v("i"),f(e,"class","codicon codicon-account")},m(n,s){D(n,e,s)},p:A,d(n){n&&C(e)}}}function jI(t){let e,n;return{c(){var s;e=v("img"),f(e,"class","profile-picture svelte-likwap"),Zn(e.src,n=(s=t[0].user.photoURL)!=null?s:hl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){D(s,e,r)},p(s,r){var i;r&1&&!Zn(e.src,n=(i=s[0].user.photoURL)!=null?i:hl)&&f(e,"src",n)},d(s){s&&C(e)}}}function qI(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,R,P;o=new Gf({});function S(I,L){return I[0].loggedIn?jI:BI}let $=S(t),T=$(t);return{c(){e=v("header"),n=v("div"),s=v("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=x(),i=v("a"),q(o.$$.fragment),a=x(),c=v("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=x(),u=v("nav"),h=v("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=x(),p=v("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',g=x(),m=v("button"),T.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-likwap"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-likwap"),f(c,"title","Documentation"),f(c,"class","svelte-likwap"),f(n,"class","svelte-likwap"),f(h,"title","Search"),f(h,"class","svelte-likwap"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-likwap"),f(m,"title","Account"),f(m,"class","svelte-likwap"),f(u,"class","svelte-likwap"),f(e,"role","navigation"),f(e,"class","svelte-likwap")},m(I,L){D(I,e,L),y(e,n),y(n,s),y(n,r),y(n,i),F(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,g),y(u,m),T.m(m,null),E=!0,R||(P=[Y(c,"click",t[1]),Y(h,"click",t[2]),Y(p,"click",t[3]),Y(m,"click",t[4])],R=!0)},p(I,[L]){$===($=S(I))&&T?T.p(I,L):(T.d(1),T=$(I),T&&(T.c(),T.m(m,null)))},i(I){E||(_(o.$$.fragment,I),E=!0)},o(I){k(o.$$.fragment,I),E=!1},d(I){I&&C(e),V(o),T.d(),R=!1,qe(P)}}}function zI(t,e,n){let s;return Ze(t,VI,c=>n(0,s=c)),[s,()=>Mt.navigateTo("help"),()=>Mt.navigateTo("search"),()=>Mt.navigateTo("settings"),()=>Mt.navigateTo("account")]}class HI extends J{constructor(e){super(),X(this,e,zI,qI,Q,{})}}const KI="modulepreload",GI=function(t){return"/"+t},dl={},yi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=GI(r),r in dl)return;dl[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":KI,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};let Oa="render";const lf=Object.freeze({heroku:"https://r34-json.herokuapp.com/v2",adaptable:"https://rule34-json-api.adaptable.app/v2",render:"https://json-api.onrender.com/v2",railway:"https://api-service-production-122b.up.railway.app/v2"}),xE=Object.freeze({heroku:"Heroku",adaptable:"Adaptable",render:"Render",railway:"Railway"}),uf=()=>lf[Oa],UE=()=>Oa,FE=t=>{if(!(t in lf))throw new TypeError(`Attempted to set unexpected backend: ${t}`);Oa=t},zs=t=>typeof t=="string"&&t!=="",vi=t=>typeof t=="number"&&t>=0;class _i{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,R,P,S,$,T,I,L,Le,Ae,ee){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=g,this.preview_height=m,this.rating=E,this.sample_height=R,this.sample_width=P,this.score=S,this.source=$,this.status=T,this.tags=I,this.width=L,this.comments_url=Le,this.owner_url=Ae,this.type=ee,Object.freeze(this)}static from(e){return new _i(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const WI=t=>Array.isArray(t)&&t.every(e=>e instanceof _i);class QI{constructor(e,n){if(!vi(e))throw new TypeError("Invalid count passed to Page constructor");if(!WI(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const YI=Object.freeze(["id","score"]),XI=t=>YI.includes(t),dr=Object.freeze(["+","-","~"]),wi=t=>dr.includes(t),hf=t=>{if(!wi(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(dr.indexOf(t)+1)%dr.length;return dr[n]},JI=Object.freeze({"+":"","-":"-","~":""}),ZI=t=>{if(!wi(t))throw TypeError("Invalid modifier passed to serializeModifier");return JI[t]};class Ii{constructor(e,n){if(!wi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!zs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${ZI(this.modifier)}${encodeURIComponent(this.name)}`}}const df=(t,e)=>{if(!ff(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!eb(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},ff=t=>{try{return new URL(t),!0}catch{return!1}},eb=t=>t===null||t instanceof AbortController,pf=20;let tb=null;const nb=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},sb=async(t,e,n,s)=>{rb(t,e,n,s);const r=lb(e,n,s),i=await df(ub(t,r),tb);nb(i);const o=await i.json();return hb(o),new QI(o.count,o.posts.map(a=>_i.from(a)))},rb=(t,e,n,s)=>{if(!ib(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!ob(e))throw new TypeError("Invalid array of tags passed to getPage");if(!XI(n))throw new TypeError("Invalid sort property passed to getPage");if(!ab(s))throw new TypeError("Invalid minimum score passed to getPage")},ib=t=>typeof t=="number"&&t>=0,ob=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Ii)),ab=t=>typeof t=="number"&&t>=0,cb=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},lb=(t,e,n)=>{const s=cb(t),r=[...fl([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${fl(s["~"]).join(" ~ ")} )`},fl=t=>t.map(e=>e.serialize()),ub=(t,e)=>{const n=`${uf()}/posts?limit=${pf}&pid=${t}`;return e===""?n:`${n}&tags=${e}`},hb=t=>{if(typeof t.count!="number"||!Array.isArray(t.posts))throw new Error("Unexpected response received in getPage")},db=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),gf=t=>db.includes(t);class xr{constructor(e,n,s,r){if(!wi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!zs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!vi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!gf(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new Ii(this.modifier,this.name)}}class mf{constructor(e,n,s){if(!zs(e))throw TypeError("Invalid name passed to Tag constructor");if(!vi(n))throw TypeError("Invalid count passed to Tag constructor");if(!gf(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new xr(e,this.name,this.count,this.type)}}let fb=null;const pb=async(t,e)=>{const n=e?t:`*${t}*`,s=await df(`${uf()}/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,fb);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(i=>new mf(i.name,i.count,gb(i.types)))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},gb=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class yf{constructor(e,n,s){if(!zs(e))throw new TypeError("Invalid name passed to Supertag");if(!mb(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const mb=t=>Array.isArray(t)&&t.every(e=>e instanceof Ii),yb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Cn(t);let s,r=null,i=null;return mu(Pt,async o=>{s=o,o?r=ul(tr(xn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=OI(yI(xn,`users/${o.uid}/supertags`));i==null||i(),i=ul(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new yf(d.id,p.description,Object.entries(p.tags).map(g=>new Ii(g[1],g[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return ll(tr(xn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return MI(tr(xn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return ll(tr(xn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},Io=yb();function vb(t){let e,n,s,r;return{c(){e=v("button"),n=fe(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){D(i,e,o),y(e,n),s||(r=Y(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Fe(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:A,o:A,d(i){i&&C(e),s=!1,r()}}}function _b(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ye(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class vf extends J{constructor(e){super(),X(this,e,_b,vb,Q,{text:0,title:1,disabled:2})}}function bi(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}const wb=Intl.NumberFormat("en",{notation:"compact"}),Ct=t=>{if(!vi(t))throw new TypeError("Invalid value passed to formatCount");return wb.format(t)};function Sn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const pl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function Ib(t){let e,n;return{c(){e=v("i"),f(e,"class",n=`codicon codicon-${pl[t[0]]}`)},m(s,r){D(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${pl[s[0]]}`)&&f(e,"class",n)},i:A,o:A,d(s){s&&C(e)}}}function bb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class _f extends J{constructor(e){super(),X(this,e,bb,Ib,Q,{type:0})}}const gl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),ml=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),yl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Tb(t){let e,n,s,r=Sn(t[0].name)+"",i,o,a=Ct(t[0].count)+"",c,l,u,h,d,p;return n=new _f({props:{type:t[0].type}}),{c(){e=v("li"),q(n.$$.fragment),s=x(),i=fe(r),o=fe(`
  (`),c=fe(a),l=fe(")"),f(e,"class",u=rt(yl[t[0].modifier])+" svelte-u5uy3w"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),He(e,"no-icon",t[0].type==="general")},m(g,m){D(g,e,m),F(n,e,null),y(e,s),y(e,i),y(e,o),y(e,c),y(e,l),h=!0,d||(p=[Y(e,"click",t[2]),Y(e,"contextmenu",Ur(t[3]))],d=!0)},p(g,[m]){const E={};m&1&&(E.type=g[0].type),n.$set(E),(!h||m&1)&&r!==(r=Sn(g[0].name)+"")&&Fe(i,r),(!h||m&1)&&a!==(a=Ct(g[0].count)+"")&&Fe(c,a),(!h||m&1&&u!==(u=rt(yl[g[0].modifier])+" svelte-u5uy3w"))&&f(e,"class",u),(!h||m&1)&&He(e,"no-icon",g[0].type==="general")},i(g){h||(_(n.$$.fragment,g),h=!0)},o(g){k(n.$$.fragment,g),h=!1},d(g){g&&C(e),V(n),d=!1,qe(p)}}}function Eb(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class wf extends J{constructor(e){super(),X(this,e,Eb,Tb,Q,{tag:0})}}function vl(t,e,n){const s=t.slice();return s[9]=e[n],s}function _l(t){let e,n;return e=new wf({props:{tag:t[9]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function kb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,R,P,S,$,T,I,L,Le,Ae=t[2],ee=[];for(let ne=0;ne<Ae.length;ne+=1)ee[ne]=_l(vl(t,Ae,ne));const ce=ne=>k(ee[ne],1,1,()=>{ee[ne]=null});return T=new vf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),T.$on("click",t[8]),{c(){e=v("dialog"),n=v("h3"),n.textContent="Create Supertag",s=x(),r=v("i"),i=x(),o=v("div"),a=v("label"),a.textContent="Name",c=x(),l=v("input"),u=x(),h=v("div"),d=v("label"),d.textContent="Description",p=x(),g=v("textarea"),m=x(),E=v("div"),R=v("span"),R.textContent="Tags",P=x(),S=v("ol");for(let ne=0;ne<ee.length;ne+=1)ee[ne].c();$=x(),q(T.$$.fragment),f(r,"tabindex","0"),f(r,"class",rt("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(g,"type","text"),f(g,"placeholder","Short description"),f(g,"id","supertag-description"),f(g,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(R,"class","svelte-ax50wm"),f(S,"class","svelte-ax50wm"),f(E,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ne,de){D(ne,e,de),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),hn(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,g),hn(g,t[1]),y(e,m),y(e,E),y(E,R),y(E,P),y(E,S);for(let Ce=0;Ce<ee.length;Ce+=1)ee[Ce].m(S,null);y(e,$),F(T,e,null),I=!0,L||(Le=[Y(r,"click",t[5]),Y(r,"keyup",bi(t[5])),Y(l,"input",t[6]),Y(g,"input",t[7])],L=!0)},p(ne,[de]){if(de&1&&l.value!==ne[0]&&hn(l,ne[0]),de&2&&hn(g,ne[1]),de&4){Ae=ne[2];let _e;for(_e=0;_e<Ae.length;_e+=1){const z=vl(ne,Ae,_e);ee[_e]?(ee[_e].p(z,de),_(ee[_e],1)):(ee[_e]=_l(z),ee[_e].c(),_(ee[_e],1),ee[_e].m(S,null))}for(pe(),_e=Ae.length;_e<ee.length;_e+=1)ce(_e);ge()}const Ce={};de&8&&(Ce.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),de&8&&(Ce.disabled=!ne[3]),T.$set(Ce)},i(ne){if(!I){for(let de=0;de<Ae.length;de+=1)_(ee[de]);_(T.$$.fragment,ne),I=!0}},o(ne){ee=ee.filter(Boolean);for(let de=0;de<ee.length;de+=1)k(ee[de]);k(T.$$.fragment,ne),I=!1},d(ne){ne&&C(e),An(ee,ne),V(T),L=!1,qe(Le)}}}function Sb(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ye(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new yf(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=zs(r))},[r,i,o,s,a,c,l,u,h]}class Ab extends J{constructor(e){super(),X(this,e,Sb,kb,Q,{name:0,description:1,tags:2})}}function Cb(t){let e,n,s,r;return{c(){e=v("i"),f(e,"title",t[1]),f(e,"class",n=rt(`codicon codicon-${t[2]}`)+" svelte-ga3rak"),f(e,"tabindex","0"),He(e,"active",t[0])},m(i,o){D(i,e,o),s||(r=[Y(e,"click",t[3]),Y(e,"keyup",bi(t[3])),Y(e,"touchend",Ur(t[3]))],s=!0)},p(i,[o]){o&2&&f(e,"title",i[1]),o&4&&n!==(n=rt(`codicon codicon-${i[2]}`)+" svelte-ga3rak")&&f(e,"class",n),o&5&&He(e,"active",i[0])},i:A,o:A,d(i){i&&C(e),s=!1,qe(r)}}}function Db(t,e,n){let{title:s}=e,{icon:r}=e,{active:i}=e;const o=()=>{n(0,i=!i)};return t.$$set=a=>{"title"in a&&n(1,s=a.title),"icon"in a&&n(2,r=a.icon),"active"in a&&n(0,i=a.active)},[i,s,r,o]}class Rb extends J{constructor(e){super(),X(this,e,Db,Cb,Q,{title:1,icon:2,active:0})}}function Nb(t){let e,n,s,r,i;return{c(){e=v("i"),f(e,"tabindex","0"),f(e,"class",n=rt(`codicon codicon-${gl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=ml[t[0]])},m(o,a){D(o,e,a),r||(i=[Y(e,"click",t[1]),Y(e,"keyup",bi(t[1])),Y(e,"touchend",Ur(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=rt(`codicon codicon-${gl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=ml[o[0]])&&f(e,"title",s)},i:A,o:A,d(o){o&&C(e),r=!1,qe(i)}}}function Ob(t,e,n){let s="+";const r=Ye();return[s,()=>{n(0,s=hf(s)),r("change",s)}]}class Pb extends J{constructor(e){super(),X(this,e,Ob,Nb,Q,{})}}function $b(t){let e;return{c(){e=v("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class If extends J{constructor(e){super(),X(this,e,null,$b,Q,{})}}function Mb(t){let e,n,s,r,i=Sn(t[0].name)+"",o,a,c,l=Ct(t[0].count)+"",u,h,d,p,g;return n=new _f({props:{type:t[0].type}}),{c(){e=v("li"),q(n.$$.fragment),s=x(),r=v("span"),o=fe(i),a=x(),c=v("span"),u=fe(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(m,E){D(m,e,E),F(n,e,null),y(e,s),y(e,r),y(r,o),y(e,a),y(e,c),y(c,u),d=!0,p||(g=Y(e,"click",t[2]),p=!0)},p(m,[E]){const R={};E&1&&(R.type=m[0].type),n.$set(R),(!d||E&1)&&i!==(i=Sn(m[0].name)+"")&&Fe(o,i),(!d||E&1)&&l!==(l=Ct(m[0].count)+"")&&Fe(u,l),(!d||E&1&&h!==(h=m[0].name))&&f(e,"title",h)},i(m){d||(_(n.$$.fragment,m),d=!0)},o(m){k(n.$$.fragment,m),d=!1},d(m){m&&C(e),V(n),p=!1,g()}}}function Lb(t,e,n){let{tag:s}=e;const r=Ye(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class xb extends J{constructor(e){super(),X(this,e,Lb,Mb,Q,{tag:0})}}function wl(t,e,n){const s=t.slice();return s[18]=e[n],s}function Ub(t){let e,n,s,r,i=t[21].message+"",o;return{c(){e=v("div"),n=v("i"),s=x(),r=v("span"),o=fe(i),f(n,"class",rt("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){D(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&4&&i!==(i=a[21].message+"")&&Fe(o,i)},i:A,o:A,d(a){a&&C(e)}}}function Fb(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=Il(wl(t,r,a));const o=a=>k(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=x(),n=v("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l].m(a,c);D(a,e,c),D(a,n,c),s=!0},p(a,c){if(c&232){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=wl(a,r,l);i[l]?(i[l].p(u,c),_(i[l],1)):(i[l]=Il(u),i[l].c(),_(i[l],1),i[l].m(e.parentNode,e))}for(pe(),l=r.length;l<i.length;l+=1)o(l);ge()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)_(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)k(i[c]);s=!1},d(a){An(i,a),a&&C(e),a&&C(n)}}}function Il(t){let e,n;function s(){return t[14](t[18])}return e=new xb({props:{tag:t[18]}}),e.$on("click",s),{c(){q(e.$$.fragment)},m(r,i){F(e,r,i),n=!0},p(r,i){t=r;const o={};i&32&&(o.tag=t[18]),e.$set(o)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){V(e,r)}}}function Vb(t){let e,n,s;return n=new If({}),{c(){e=v("div"),q(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){D(r,e,i),F(n,e,null),s=!0},p:A,i(r){s||(_(n.$$.fragment,r),s=!0)},o(r){k(n.$$.fragment,r),s=!1},d(r){r&&C(e),V(n)}}}function Bb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,R;o=new Pb({}),o.$on("change",t[10]);function P(T){t[11](T)}let S={icon:"whole-word",title:"Toggle exact search term matching"};t[1]!==void 0&&(S.active=t[1]),c=new Rb({props:S}),Ht.push(()=>Bf(c,"active",P));let $={ctx:t,current:null,token:null,hasCatch:!0,pending:Vb,then:Fb,catch:Ub,error:21,blocks:[,,,]};return Ua(g=t[2],$),{c(){e=v("div"),n=v("i"),s=x(),r=v("input"),i=x(),q(o.$$.fragment),a=x(),q(c.$$.fragment),u=x(),h=v("i"),d=x(),p=v("ol"),$.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(h,"tabindex","0"),f(h,"class","codicon codicon-question spaced svelte-2fyyfo"),f(p,"class","svelte-2fyyfo"),He(p,"open",t[4]),f(e,"class","searchbar svelte-2fyyfo"),He(e,"open",t[4])},m(T,I){D(T,e,I),y(e,n),y(e,s),y(e,r),hn(r,t[0]),y(e,i),F(o,e,null),y(e,a),F(c,e,null),y(e,u),y(e,h),y(e,d),y(e,p),$.block.m(p,$.anchor=null),$.mount=()=>p,$.anchor=null,m=!0,E||(R=[Y(r,"input",t[8]),Y(r,"blur",t[9]),Y(h,"click",t[12]),Y(h,"keyup",bi(t[13])),Y(e,"blur",t[15])],E=!0)},p(T,[I]){t=T,I&1&&r.value!==t[0]&&hn(r,t[0]);const L={};!l&&I&2&&(l=!0,L.active=t[1],Uf(()=>l=!1)),c.$set(L),$.ctx=t,I&4&&g!==(g=t[2])&&Ua(g,$)||Vf($,t,I),(!m||I&16)&&He(p,"open",t[4]),(!m||I&16)&&He(e,"open",t[4])},i(T){m||(_(o.$$.fragment,T),_(c.$$.fragment,T),_($.block),m=!0)},o(T){k(o.$$.fragment,T),k(c.$$.fragment,T);for(let I=0;I<3;I+=1){const L=$.blocks[I];k(L)}m=!1},d(T){T&&C(e),V(o),V(c),$.block.d(),$.token=null,$=null,E=!1,qe(R)}}}function jb(t,e,n){let s;Ze(t,Io,T=>n(16,s=T));const r=Ye();let i,o="",a=!1,c="+",l=!1,u=[];async function h(T,I){n(4,l=!0),n(5,u=[...s.supertags.filter(L=>L.name.toLowerCase().includes(I.toLowerCase())).map(L=>new mf(L.name,Object.keys(L.tags).length,"supertag")),...await pb(I,T)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function p(){o=this.value,n(0,o)}const g=T=>{(!T.relatedTarget||!T.target.parentNode.contains(T.relatedTarget))&&n(4,l=!1)},m=T=>{n(3,c=T.detail)};function E(T){a=T,n(1,a)}const R=()=>Mt.navigateTo("help"),P=()=>Mt.navigateTo("help"),S=T=>{r("pick",T.toActiveTag(c)),d()},$=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,r,d,p,g,m,E,R,P,S,$]}class qb extends J{constructor(e){super(),X(this,e,jb,Bb,Q,{})}}function zb(){const t=[],{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:r=>n(i=>(i.push(new xr("+",r,0,"general")),i)),removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const bt=zb(),Hb={id:0,width:0,height:0},Kb=[{id:996911,width:300,height:112},{id:996914,width:728,height:102}],Gb=Kb.filter(t=>t.width<window.innerWidth);let Hn=Hb;for(const t of Gb)t.width>(Hn==null?void 0:Hn.width)&&(Hn=t);const Wb=()=>Hn;function Qb(t){let e,n,s,r,i,o;return{c(){e=v("script"),s=v("script"),s.textContent=";(adsbyjuicy = window.adsbyjuicy || []).push({ adzone: window.adZone.id })",r=x(),i=v("div"),o=v("ins"),f(e,"type","text/javascript"),f(e,"data-cfasync","false"),e.async=!0,Zn(e.src,n="https://poweredby.jads.co/js/jads.js")||f(e,"src",n),f(s,"type","text/javascript"),f(s,"data-cfasync","false"),s.async=!0,f(o,"id",window.adZone.id.toString()),f(o,"data-width",window.adZone.width),f(o,"data-height",window.adZone.height),f(i,"style",`height: ${window.adZone.height}px`),f(i,"class","svelte-hntawn")},m(a,c){y(document.head,e),y(document.head,s),D(a,r,c),D(a,i,c),y(i,o)},p:A,i:A,o:A,d(a){C(e),C(s),a&&C(r),a&&C(i)}}}window.adZone=Wb();class Yb extends J{constructor(e){super(),X(this,e,null,Qb,Q,{})}}function Xb(t){let e,n=Sn(t[0])+"",s,r,i;return{c(){e=v("li"),s=fe(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),He(e,"active",t[2])},m(o,a){D(o,e,a),y(e,s),r||(i=Y(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=Sn(o[0])+"")&&Fe(s,n),a&4&&He(e,"active",o[2])},i:A,o:A,d(o){o&&C(e),r=!1,i()}}}function Jb(t,e,n){let s,r,i;Ze(t,bt,c=>n(3,i=c));let{name:o}=e;const a=()=>r?bt.removeByIndex(s):bt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class Zb extends J{constructor(e){super(),X(this,e,Jb,Xb,Q,{name:0})}}function eT(t){let e,n;return{c(){e=v("span"),n=fe(t[0])},m(s,r){D(s,e,r),y(e,n)},p(s,r){r&1&&Fe(n,s[0])},d(s){s&&C(e)}}}function tT(t){let e,n=t[1].hostname+"",s,r;return{c(){e=v("a"),s=fe(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){D(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Fe(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&C(e)}}}function nT(t){let e,n,s;function r(a,c){return a[1]?tT:eT}let i=r(t),o=i(t);return{c(){e=v("i"),n=x(),o.c(),s=en(),f(e,"class","codicon codicon-link")},m(a,c){D(a,e,c),D(a,n,c),o.m(a,c),D(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:A,o:A,d(a){a&&C(e),a&&C(n),o.d(a),a&&C(s)}}}function sT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=ff(r)?new URL(r):null)},[r,s]}class rT extends J{constructor(e){super(),X(this,e,sT,nT,Q,{source:0})}}function iT(t){let e,n;const s=t[1].default,r=Cf(s,t,t[0],null);return{c(){e=v("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){D(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Rf(r,s,i,i[0],n?Df(s,i[0],o,null):Nf(i[0]),null)},i(i){n||(_(r,i),n=!0)},o(i){k(r,i),n=!1},d(i){i&&C(e),r&&r.d(i)}}}function oT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class bo extends J{constructor(e){super(),X(this,e,oT,iT,Q,{})}}const bl=6e4,Tl=t=>{if(!aT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/bl,s=new Date().getTime()/bl-e;if(s<1)return"just now";if(s<60)return un(s,"minute");const r=s/60;if(r<24)return un(r,"hour");const i=r/24;if(i<7)return un(i,"day");if(i<30.5)return un(i/7,"week");if(i<365.25)return un(i/30.5,"month");const o=i/365.25;return un(o,"year")},aT=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",un=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function cT(t){let e,n,s,r=Tl(t[0])+"",i;return{c(){e=v("i"),n=x(),s=v("span"),i=fe(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){D(o,e,a),D(o,n,a),D(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Tl(o[0])+"")&&Fe(i,r)},i:A,o:A,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function lT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class uT extends J{constructor(e){super(),X(this,e,lT,cT,Q,{value:0})}}function hT(t){let e,n,s,r=Ct(t[0])+"",i;return{c(){e=v("i"),n=x(),s=v("span"),i=fe(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){D(o,e,a),D(o,n,a),D(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Ct(o[0])+"")&&Fe(i,r)},i:A,o:A,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function dT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class fT extends J{constructor(e){super(),X(this,e,dT,hT,Q,{value:0})}}function El(t,e,n){const s=t.slice();return s[1]=e[n],s}function pT(t){let e,n;return e=new uT({props:{value:t[0].created_at}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function gT(t){let e,n;return e=new fT({props:{value:t[0].score}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function kl(t){let e,n;return e=new bo({props:{$$slots:{default:[mT]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&17&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function mT(t){let e,n;return e=new rT({props:{source:t[0].source}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Sl(t){let e,n;return e=new Zb({props:{name:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function yT(t){let e,n,s,r,i,o,a,c,l;s=new bo({props:{$$slots:{default:[pT]},$$scope:{ctx:t}}}),i=new bo({props:{$$slots:{default:[gT]},$$scope:{ctx:t}}});let u=t[0].source&&kl(t),h=t[0].tags,d=[];for(let g=0;g<h.length;g+=1)d[g]=Sl(El(t,h,g));const p=g=>k(d[g],1,1,()=>{d[g]=null});return{c(){e=v("div"),n=v("div"),q(s.$$.fragment),r=x(),q(i.$$.fragment),o=x(),u&&u.c(),a=x(),c=v("ul");for(let g=0;g<d.length;g+=1)d[g].c();f(n,"class","summary svelte-jhzkkk"),f(c,"class","svelte-jhzkkk"),f(e,"class","details svelte-jhzkkk")},m(g,m){D(g,e,m),y(e,n),F(s,n,null),y(n,r),F(i,n,null),y(n,o),u&&u.m(n,null),y(e,a),y(e,c);for(let E=0;E<d.length;E+=1)d[E].m(c,null);l=!0},p(g,[m]){const E={};m&17&&(E.$$scope={dirty:m,ctx:g}),s.$set(E);const R={};if(m&17&&(R.$$scope={dirty:m,ctx:g}),i.$set(R),g[0].source?u?(u.p(g,m),m&1&&_(u,1)):(u=kl(g),u.c(),_(u,1),u.m(n,null)):u&&(pe(),k(u,1,1,()=>{u=null}),ge()),m&1){h=g[0].tags;let P;for(P=0;P<h.length;P+=1){const S=El(g,h,P);d[P]?(d[P].p(S,m),_(d[P],1)):(d[P]=Sl(S),d[P].c(),_(d[P],1),d[P].m(c,null))}for(pe(),P=h.length;P<d.length;P+=1)p(P);ge()}},i(g){if(!l){_(s.$$.fragment,g),_(i.$$.fragment,g),_(u);for(let m=0;m<h.length;m+=1)_(d[m]);l=!0}},o(g){k(s.$$.fragment,g),k(i.$$.fragment,g),k(u),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)k(d[m]);l=!1},d(g){g&&C(e),V(s),V(i),u&&u.d(),An(d,g)}}}function vT(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class _T extends J{constructor(e){super(),X(this,e,vT,yT,Q,{post:0})}}const Pa=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function wT(t){let e,n,s,r,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){D(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,c()}}}function IT(t,e,n){let{post:s}=e;const r=Ye();let i;function o(c){Ht[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,r,o,a]}class bT extends J{constructor(e){super(),X(this,e,IT,wT,Q,{post:0})}}function TT(t){let e,n,s,r,i,o,a,c;return{c(){e=v("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-19kew7t")},m(l,u){D(l,e,u),t[5](e),a||(c=[Y(e,"click",Ur(t[4])),Y(e,"touchstart",t[2],{passive:!0}),Y(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[5](null),a=!1,qe(c)}}}function ET(t,e,n){let{post:s}=e;const r=Ye();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};function l(h){Mf.call(this,t,h)}function u(h){Ht[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,a,c,l,u]}class kT extends J{constructor(e){super(),X(this,e,ET,TT,Q,{post:0})}}function ST(t){let e,n,s,r,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){D(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&C(e),t[3](null),a=!1,c()}}}function AT(t,e,n){let{post:s}=e;const r=Ye();let i;function o(c){Ht[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,r,o,a]}class CT extends J{constructor(e){super(),X(this,e,AT,ST,Q,{post:0})}}function DT(t){let e,n;return e=new CT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function RT(t){let e,n;return e=new kT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function NT(t){let e,n;return e=new bT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Al(t){let e,n;return e=new _T({props:{post:t[0]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function OT(t){let e,n,s,r,i;const o=[NT,RT,DT],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&Al(t);return{c(){e=v("div"),s.c(),r=x(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){D(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(pe(),k(a[d],1,1,()=>{a[d]=null}),ge(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),_(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&_(l,1)):(l=Al(u),l.c(),_(l,1),l.m(e,null)):l&&(pe(),k(l,1,1,()=>{l=null}),ge())},i(u){i||(_(s),_(l),i=!0)},o(u){k(s),k(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}function PT(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class $T extends J{constructor(e){super(),X(this,e,PT,OT,Q,{post:0})}}function Cl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Dl(t){let e,n;return e=new $T({props:{post:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function MT(t){let e,n,s,r,i=t[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Dl(Cl(t,i,c));const a=c=>k(o[c],1,1,()=>{o[c]=null});return s=new Yb({}),{c(){e=v("ol");for(let c=0;c<o.length;c+=1)o[c].c();n=x(),q(s.$$.fragment),f(e,"class","page svelte-vcm6im")},m(c,l){D(c,e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);D(c,n,l),F(s,c,l),r=!0},p(c,[l]){if(l&1){i=c[0];let u;for(u=0;u<i.length;u+=1){const h=Cl(c,i,u);o[u]?(o[u].p(h,l),_(o[u],1)):(o[u]=Dl(h),o[u].c(),_(o[u],1),o[u].m(e,null))}for(pe(),u=i.length;u<o.length;u+=1)a(u);ge()}},i(c){if(!r){for(let l=0;l<i.length;l+=1)_(o[l]);_(s.$$.fragment,c),r=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)k(o[l]);k(s.$$.fragment,c),r=!1},d(c){c&&C(e),An(o,c),c&&C(n),V(s,c)}}}function LT(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class xT extends J{constructor(e){super(),X(this,e,LT,MT,Q,{posts:0})}}function UT(t){let e;return{c(){e=v("div")},m(n,s){D(n,e,s),t[1](e)},p:A,i:A,o:A,d(n){n&&C(e),t[1](null)}}}function FT(t,e,n){const s=Ye(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Ht[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class VT extends J{constructor(e){super(),X(this,e,FT,UT,Q,{})}}const BT="/assets/shironeko-x.c28cad00.png";function jT(t){let e,n,s,r,i;return{c(){e=v("div"),n=v("img"),r=x(),i=v("span"),i.textContent="You have reached the end",Zn(n.src,s=BT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){D(o,e,a),y(e,n),y(e,r),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class qT extends J{constructor(e){super(),X(this,e,null,jT,Q,{})}}const zT="/assets/shironeko-confused.4071d5b2.png";function HT(t){let e,n,s,r,i;return{c(){e=v("div"),n=v("img"),r=x(),i=v("span"),i.textContent="No results found",Zn(n.src,s=zT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){D(o,e,a),y(e,n),y(e,r),y(e,i)},p:A,i:A,o:A,d(o){o&&C(e)}}}class KT extends J{constructor(e){super(),X(this,e,null,HT,Q,{})}}const GT=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,addPage(r){n(i=>({count:r.count,pages:[...i.pages,r.posts],nextPage:i.nextPage+1}))},reset(){s(t)}}},fr=GT(),WT={sortProperty:"id",minScore:0},QT=()=>{const{subscribe:t,set:e}=Cn(WT);return{subscribe:t,set:e}},pr=QT();function Rl(t,e,n){const s=t.slice();return s[11]=e[n],s}function YT(t){let e,n;return e=new KT({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function XT(t){let e,n,s=Ct(t[0].count)+"",r,i,o,a,c,l,u,h,d,p,g,m,E,R,P,S,$,T,I,L,Le,Ae,ee=t[0].pages,ce=[];for(let z=0;z<ee.length;z+=1)ce[z]=Nl(Rl(t,ee,z));const ne=z=>k(ce[z],1,1,()=>{ce[z]=null}),de=[ZT,JT],Ce=[];function _e(z,ie){return z[2]?0:1}return $=_e(t),T=Ce[$]=de[$](t),{c(){e=v("div"),n=v("span"),r=fe(s),i=fe(" results"),a=x(),c=v("select"),l=v("option"),l.textContent="Date",u=v("option"),u.textContent="Score",h=x(),d=v("select"),p=v("option"),p.textContent="Any Score",g=v("option"),g.textContent="Score > 10",m=v("option"),m.textContent="Score > 100",E=v("option"),E.textContent="Score > 1K",R=x(),P=v("ol");for(let z=0;z<ce.length;z+=1)ce[z].c();S=x(),T.c(),I=en(),f(n,"title",o=`${t[0].count} results`),f(n,"class","svelte-1npsym2"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1npsym2"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1npsym2"),f(c,"title","Sort results by"),f(c,"class","svelte-1npsym2"),t[3].sortProperty===void 0&&ts(()=>t[6].call(c)),p.__value=0,p.value=p.__value,f(p,"class","svelte-1npsym2"),g.__value=10,g.value=g.__value,f(g,"class","svelte-1npsym2"),m.__value=100,m.value=m.__value,f(m,"class","svelte-1npsym2"),E.__value=1e3,E.value=E.__value,f(E,"class","svelte-1npsym2"),f(d,"title","Filter by score"),f(d,"class","svelte-1npsym2"),t[3].minScore===void 0&&ts(()=>t[8].call(d)),f(e,"class","header svelte-1npsym2"),f(P,"class","svelte-1npsym2")},m(z,ie){D(z,e,ie),y(e,n),y(n,r),y(n,i),y(e,a),y(e,c),y(c,l),y(c,u),Ks(c,t[3].sortProperty),y(e,h),y(e,d),y(d,p),y(d,g),y(d,m),y(d,E),Ks(d,t[3].minScore),D(z,R,ie),D(z,P,ie);for(let Nt=0;Nt<ce.length;Nt+=1)ce[Nt].m(P,null);D(z,S,ie),Ce[$].m(z,ie),D(z,I,ie),L=!0,Le||(Ae=[Y(c,"change",t[6]),Y(c,"change",t[7]),Y(d,"change",t[8]),Y(d,"change",t[9])],Le=!0)},p(z,ie){if((!L||ie&1)&&s!==(s=Ct(z[0].count)+"")&&Fe(r,s),(!L||ie&1&&o!==(o=`${z[0].count} results`))&&f(n,"title",o),ie&8&&Ks(c,z[3].sortProperty),ie&8&&Ks(d,z[3].minScore),ie&1){ee=z[0].pages;let $e;for($e=0;$e<ee.length;$e+=1){const Ma=Rl(z,ee,$e);ce[$e]?(ce[$e].p(Ma,ie),_(ce[$e],1)):(ce[$e]=Nl(Ma),ce[$e].c(),_(ce[$e],1),ce[$e].m(P,null))}for(pe(),$e=ee.length;$e<ce.length;$e+=1)ne($e);ge()}let Nt=$;$=_e(z),$===Nt?Ce[$].p(z,ie):(pe(),k(Ce[Nt],1,1,()=>{Ce[Nt]=null}),ge(),T=Ce[$],T?T.p(z,ie):(T=Ce[$]=de[$](z),T.c()),_(T,1),T.m(I.parentNode,I))},i(z){if(!L){for(let ie=0;ie<ee.length;ie+=1)_(ce[ie]);_(T),L=!0}},o(z){ce=ce.filter(Boolean);for(let ie=0;ie<ce.length;ie+=1)k(ce[ie]);k(T),L=!1},d(z){z&&C(e),z&&C(R),z&&C(P),An(ce,z),z&&C(S),Ce[$].d(z),z&&C(I),Le=!1,qe(Ae)}}}function Nl(t){let e,n;return e=new xT({props:{posts:t[11]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.posts=s[11]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function JT(t){let e,n;return e=new qT({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function ZT(t){let e,n;return e=new VT({}),e.$on("visible",t[10]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function eE(t){let e,n,s,r;const i=[XT,YT],o=[];function a(c,l){return c[0].count?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=en()},m(c,l){~e&&o[e].m(c,l),D(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(pe(),k(o[u],1,1,()=>{o[u]=null}),ge()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(_(n),r=!0)},o(c){k(n),r=!1},d(c){~e&&o[e].d(c),c&&C(s)}}}function tE(t,e,n){let s,r,i,o,a;Ze(t,fr,g=>n(0,o=g)),Ze(t,pr,g=>n(3,a=g));const c=Ye();function l(){a.sortProperty=xa(this),pr.set(a)}const u=()=>c("configchange");function h(){a.minScore=xa(this),pr.set(a)}const d=()=>c("configchange"),p=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o.count/pf),t.$$.dirty&33&&n(2,r=o.pages.length<s),t.$$.dirty&1&&n(1,i=o.count===0)},[o,i,r,a,c,s,l,u,h,d,p]}class nE extends J{constructor(e){super(),X(this,e,tE,eE,Q,{})}}function sE(t){let e,n,s;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),He(e,"visible",t[0])},m(r,i){D(r,e,i),n||(s=Y(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&He(e,"visible",r[0])},i:A,o:A,d(r){r&&C(e),n=!1,s()}}}function rE(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return Fl(()=>{document.addEventListener("scroll",i,{passive:!0})}),$f(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class iE extends J{constructor(e){super(),X(this,e,rE,sE,Q,{})}}function oE(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=v("div"),n=v("div"),s=v("i"),i=x(),o=v("div"),a=v("h3"),c=fe(t[2]),l=x(),u=v("span"),h=fe(t[1]),f(s,"class",r=rt(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){D(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=rt(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Fe(c,d[2]),p&2&&Fe(h,d[1])},i:A,o:A,d(d){d&&C(e)}}}function aE(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class bf extends J{constructor(e){super(),X(this,e,aE,oE,Q,{icon:0,message:1,title:2})}}function cE(t){let e;return{c(){e=v("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class lE extends J{constructor(e){super(),X(this,e,null,cE,Q,{})}}function Ol(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function Pl(t){let e,n,s,r=t[2],i=[];for(let c=0;c<r.length;c+=1)i[c]=$l(Ol(t,r,c));const o=c=>k(i[c],1,1,()=>{i[c]=null});let a=t[2].length>1&&Ml(t);return{c(){e=v("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=x(),a&&a.c(),f(e,"class","svelte-1sws22c")},m(c,l){D(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);y(e,n),a&&a.m(e,null),s=!0},p(c,l){if(l&4){r=c[2];let u;for(u=0;u<r.length;u+=1){const h=Ol(c,r,u);i[u]?(i[u].p(h,l),_(i[u],1)):(i[u]=$l(h),i[u].c(),_(i[u],1),i[u].m(e,n))}for(pe(),u=r.length;u<i.length;u+=1)o(u);ge()}c[2].length>1?a?a.p(c,l):(a=Ml(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)_(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)k(i[l]);s=!1},d(c){c&&C(e),An(i,c),a&&a.d()}}}function $l(t){let e,n;function s(){return t[6](t[18])}function r(){return t[7](t[16])}return e=new wf({props:{tag:t[16]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){q(e.$$.fragment)},m(i,o){F(e,i,o),n=!0},p(i,o){t=i;const a={};o&4&&(a.tag=t[16]),e.$set(a)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){k(e.$$.fragment,i),n=!1},d(i){V(e,i)}}}function Ml(t){let e,n,s;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1sws22c"></i>',f(e,"class","add-supertag svelte-1sws22c"),f(e,"title","Click to create a new supertag")},m(r,i){D(r,e,i),n||(s=Y(e,"click",t[8]),n=!0)},p:A,d(r){r&&C(e),n=!1,s()}}}function uE(t){let e,n;return e=new nE({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function hE(t){let e,n,s,r;const i=[fE,dE],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=en()},m(c,l){o[e].m(c,l),D(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(pe(),k(o[u],1,1,()=>{o[u]=null}),ge(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){k(n),r=!1},d(c){o[e].d(c),c&&C(s)}}}function dE(t){let e,n;return e=new bf({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function fE(t){let e,n;return e=new bf({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Ll(t){let e,n;return e=new Ab({props:{tags:t[2]}}),e.$on("submit",t[10]),e.$on("close",t[11]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function pE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E;n=new lE({}),r=new qb({}),r.$on("pick",t[5]);let R=t[2].length&&Pl(t);c=new vf({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[9]);const P=[hE,uE],S=[];function $(I,L){return I[1]!==void 0?0:1}u=$(t),h=S[u]=P[u](t),p=new iE({});let T=t[0]&&Ll(t);return{c(){e=v("div"),q(n.$$.fragment),s=x(),q(r.$$.fragment),i=x(),R&&R.c(),o=x(),a=v("div"),q(c.$$.fragment),l=x(),h.c(),d=x(),q(p.$$.fragment),g=x(),T&&T.c(),m=en(),f(a,"class","sort-row svelte-1sws22c"),f(e,"class","search-config svelte-1sws22c")},m(I,L){D(I,e,L),F(n,e,null),y(e,s),F(r,e,null),y(e,i),R&&R.m(e,null),y(e,o),y(e,a),F(c,a,null),D(I,l,L),S[u].m(I,L),D(I,d,L),F(p,I,L),D(I,g,L),T&&T.m(I,L),D(I,m,L),E=!0},p(I,[L]){I[2].length?R?(R.p(I,L),L&4&&_(R,1)):(R=Pl(I),R.c(),_(R,1),R.m(e,o)):R&&(pe(),k(R,1,1,()=>{R=null}),ge());let Le=u;u=$(I),u===Le?S[u].p(I,L):(pe(),k(S[Le],1,1,()=>{S[Le]=null}),ge(),h=S[u],h?h.p(I,L):(h=S[u]=P[u](I),h.c()),_(h,1),h.m(d.parentNode,d)),I[0]?T?(T.p(I,L),L&1&&_(T,1)):(T=Ll(I),T.c(),_(T,1),T.m(m.parentNode,m)):T&&(pe(),k(T,1,1,()=>{T=null}),ge())},i(I){E||(_(n.$$.fragment,I),_(r.$$.fragment,I),_(R),_(c.$$.fragment,I),_(h),_(p.$$.fragment,I),_(T),E=!0)},o(I){k(n.$$.fragment,I),k(r.$$.fragment,I),k(R),k(c.$$.fragment,I),k(h),k(p.$$.fragment,I),k(T),E=!1},d(I){I&&C(e),V(n),V(r),R&&R.d(),V(c),I&&C(l),S[u].d(I),I&&C(d),V(p,I),I&&C(g),T&&T.d(I),I&&C(m)}}}function gE(t,e,n){let s,r,i,o;Ze(t,Io,S=>n(12,s=S)),Ze(t,bt,S=>n(2,r=S)),Ze(t,pr,S=>n(13,i=S)),Ze(t,fr,S=>n(14,o=S));let a=!1,c;const l=async()=>(fr.reset(),u()),u=async()=>{n(1,c=void 0);try{const S=h(),$=await sb(o.nextPage,S,i.sortProperty,i.minScore);fr.addPage($)}catch(S){n(1,c=S),console.warn(S)}},h=()=>r.flatMap(S=>S.type==="supertag"?s.supertags.find($=>$.name===S.name).tags:S.toSearchableTag());return[a,c,r,l,u,S=>bt.addOrReplace(S.detail),S=>bt.removeByIndex(S),S=>bt.addOrReplace(new xr(hf(S.modifier),S.name,S.count,S.type)),()=>{n(0,a=!0)},()=>l(),S=>{Io.addSupertag(S.detail),bt.set([new xr("+",S.detail.name,S.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class mE extends J{constructor(e){super(),X(this,e,gE,pE,Q,{})}}function yE(t){let e,n;return e=new If({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:A,i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function vE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&q(e.$$.fragment),n=en()},m(o,a){e&&F(e,o,a),D(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){pe();const c=e;k(c.$$.fragment,1,0,()=>{V(c,1)}),ge()}r?(e=new r(i()),q(e.$$.fragment),_(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}},i(o){s||(e&&_(e.$$.fragment,o),s=!0)},o(o){e&&k(e.$$.fragment,o),s=!1},d(o){o&&C(n),e&&V(e,o)}}}function _E(t){let e,n,s,r;const i=[vE,yE],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=en()},m(c,l){o[e].m(c,l),D(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(pe(),k(o[u],1,1,()=>{o[u]=null}),ge(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),_(n,1),n.m(s.parentNode,s))},i(c){r||(_(n),r=!0)},o(c){k(n),r=!1},d(c){o[e].d(c),c&&C(s)}}}function wE(t,e,n){let{loadComponent:s}=e,r;return Fl(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class $a extends J{constructor(e){super(),X(this,e,wE,_E,Q,{loadComponent:1})}}function IE(t){let e;return{c(){e=v("p"),e.textContent="You got lost..."},m(n,s){D(n,e,s)},i:A,o:A,d(n){n&&C(e)}}}function bE(t){let e,n;return e=new $a({props:{loadComponent:DE}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function TE(t){let e,n;return e=new $a({props:{loadComponent:CE}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function EE(t){let e,n;return e=new $a({props:{loadComponent:AE}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function kE(t){let e,n;return e=new mE({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(_(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function SE(t){let e,n,s,r;const i=[kE,EE,TE,bE,IE],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=v("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){D(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(pe(),k(o[u],1,1,()=>{o[u]=null}),ge(),s=o[n],s||(s=o[n]=i[n](c),s.c()),_(s,1),s.m(e,null))},i(c){r||(_(s),r=!0)},o(c){k(s),r=!1},d(c){c&&C(e),o[n].d()}}}const AE=()=>yi(()=>import("./Account.0477422a.js"),["assets/Account.0477422a.js","assets/Account.ce3782a6.css"]),CE=()=>yi(()=>import("./Preferences.b1ec4593.js"),["assets/Preferences.b1ec4593.js","assets/Preferences.aea2222b.css","assets/ParagraphHeading.62d73836.js","assets/ParagraphHeading.5a89239e.css"]),DE=()=>yi(()=>import("./Help.4da0d59b.js"),["assets/Help.4da0d59b.js","assets/Help.9081c352.css","assets/ParagraphHeading.62d73836.js","assets/ParagraphHeading.5a89239e.css"]);function RE(t,e,n){let s;return Ze(t,Mt,r=>n(0,s=r)),[s]}class NE extends J{constructor(e){super(),X(this,e,RE,SE,Q,{})}}function OE(t){let e;return{c(){e=v("footer"),e.innerHTML=`<div class="flex left svelte-1e56m0a"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1e56m0a">\xA9 2022 kurozenzen</span> 
  <div class="flex right svelte-1e56m0a"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1e56m0a")},m(n,s){D(n,e,s)},p:A,i:A,o:A,d(n){n&&C(e)}}}class PE extends J{constructor(e){super(),X(this,e,null,OE,Q,{})}}function $E(t){let e,n,s,r,i,o;return e=new HI({}),s=new NE({}),i=new PE({}),{c(){q(e.$$.fragment),n=x(),q(s.$$.fragment),r=x(),q(i.$$.fragment)},m(a,c){F(e,a,c),D(a,n,c),F(s,a,c),D(a,r,c),F(i,a,c),o=!0},p:A,i(a){o||(_(e.$$.fragment,a),_(s.$$.fragment,a),_(i.$$.fragment,a),o=!0)},o(a){k(e.$$.fragment,a),k(s.$$.fragment,a),k(i.$$.fragment,a),o=!1},d(a){V(e,a),a&&C(n),V(s,a),a&&C(r),V(i,a)}}}class ME extends J{constructor(e){super(),X(this,e,null,$E,Q,{})}}function LE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await yi(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(p=>{i?i("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=u(),l}new ME({target:document.getElementById("app")});LE();export{Zb as $,Bf as A,Uf as B,vf as C,hn as D,Ur as E,Zn as F,VI as G,en as H,Ze as I,Io as J,hl as K,Cn as L,yl as M,Cf as N,Rf as O,Nf as P,Df as Q,ts as R,J as S,Rb as T,Ks as U,xa as V,FE as W,UE as X,xE as Y,wf as Z,xr as _,f as a,iE as a0,gl as a1,D as b,y as c,Fe as d,v as e,Sn as f,A as g,C as h,X as i,x as j,_ as k,Y as l,pe as m,rt as n,bi as o,ge as p,k as q,An as r,Q as s,fe as t,qe as u,Ye as v,q as w,F as x,V as y,Ht as z};
