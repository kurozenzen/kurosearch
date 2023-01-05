(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function D(){}function Af(t,e){for(const n in e)t[n]=e[n];return t}function Cf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Vl(t){return t()}function Ua(){return Object.create(null)}function Fe(t){t.forEach(Vl)}function Df(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Qs;function es(t,e){return Qs||(Qs=document.createElement("a")),Qs.href=e,t===Qs.href}function Nf(t){return Object.keys(t).length===0}function Rf(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Je(t,e,n){t.$$.on_destroy.push(Rf(e,n))}function Of(t,e,n,s){if(t){const r=Bl(t,e,n,s);return t[0](r)}}function Bl(t,e,n,s){return t[1]&&s?Af(n.ctx.slice(),t[1](s(e))):n.ctx}function Pf(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function $f(t,e,n,s,r,i){if(r){const o=Bl(e,n,s,i);t.p(o,r)}}function Mf(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function st(t){return t==null?"":t}function Lf(t,e,n){return t.set(n),e}function y(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function An(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function cn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ge(t){return document.createTextNode(t)}function x(){return ge(" ")}function tn(){return ge("")}function Q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Br(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jl(t){return t===""?null:+t}function xf(t){return Array.from(t.childNodes)}function Ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e){t.value=e==null?"":e}function Ys(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Fa(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ze(t,e,n){t.classList[n?"add":"remove"](e)}function Uf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let ts;function at(t){ts=t}function jr(){if(!ts)throw new Error("Function called outside component initialization");return ts}function ql(t){jr().$$.on_mount.push(t)}function Ff(t){jr().$$.on_destroy.push(t)}function Qe(){const t=jr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Uf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Vf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Fn=[],Kt=[],or=[],Ki=[],Bf=Promise.resolve();let Gi=!1;function jf(){Gi||(Gi=!0,Bf.then(ko))}function ns(t){or.push(t)}function qf(t){Ki.push(t)}const ki=new Set;let Xs=0;function ko(){const t=ts;do{for(;Xs<Fn.length;){const e=Fn[Xs];Xs++,at(e),zf(e.$$)}for(at(null),Fn.length=0,Xs=0;Kt.length;)Kt.pop()();for(let e=0;e<or.length;e+=1){const n=or[e];ki.has(n)||(ki.add(n),n())}or.length=0}while(Fn.length);for(;Ki.length;)Ki.pop()();Gi=!1,ki.clear(),at(t)}function zf(t){if(t.fragment!==null){t.update(),Fe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ns)}}const ar=new Set;let Mt;function me(){Mt={r:0,c:[],p:Mt}}function ye(){Mt.r||Fe(Mt.c),Mt=Mt.p}function w(t,e){t&&t.i&&(ar.delete(t),t.i(e))}function E(t,e,n,s){if(t&&t.o){if(ar.has(t))return;ar.add(t),Mt.c.push(()=>{ar.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Va(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(me(),E(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ye())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&ko()}if(Cf(t)){const r=jr();if(t.then(i=>{at(r),s(e.then,1,e.value,i),at(null)},i=>{if(at(r),s(e.catch,2,e.error,i),at(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Hf(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function Kf(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function q(t){t&&t.c()}function F(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||ns(()=>{const c=i.map(Vl).filter(Df);o?o.push(...c):Fe(c),t.$$.on_mount=[]}),a.forEach(ns)}function V(t,e){const n=t.$$;n.fragment!==null&&(Fe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gf(t,e){t.$$.dirty[0]===-1&&(Fn.push(t),jf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,s,r,i,o,a=[-1]){const c=ts;at(t);const l=t.$$={fragment:null,ctx:null,props:i,update:D,not_equal:r,bound:Ua(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ua(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Gf(t,h)),d}):[],l.update(),u=!0,Fe(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=xf(e.target);l.fragment&&l.fragment.l(h),h.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),ko()}at(c)}class Z{$destroy(){V(this,1),this.$destroy=D}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Nf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ln=[];function Cn(t,e=D){let n;const s=new Set;function r(a){if(X(t,a)&&(t=a,n)){const c=!ln.length;for(const l of s)l[1](),ln.push(l,t);if(c){for(let l=0;l<ln.length;l+=2)ln[l][0](ln[l+1]);ln.length=0}}}function i(a){r(a(t))}function o(a,c=D){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||D),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Wf=Object.freeze(["search","account","settings","help"]),Qf=t=>Wf.includes(t),Yf=()=>{const{subscribe:t,set:e}=Cn("search");return{subscribe:t,navigateTo(n){if(!Qf(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Lt=Yf();function Xf(t){let e,n,s,r,i,o;return{c(){e=cn("svg"),n=cn("g"),s=cn("path"),r=cn("defs"),i=cn("clipPath"),o=cn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){N(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:D,i:D,o:D,d(a){a&&C(e)}}}class Jf extends Z{constructor(e){super(),J(this,e,null,Xf,X,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ep=function(t){const e=zl(t);return Hl.encodeByteArray(e,!0)},Kl=function(t){return ep(t).replace(/\./g,"")},tp=function(t){try{return Hl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Gl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ip(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wl(){return typeof indexedDB=="object"}function Ql(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function op(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="FirebaseError";class Ye extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ap,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ye(r,a,s)}}function cp(t,e){return t.replace(lp,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const lp=/\{\$([^}]+)}/g;function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ba(i)&&Ba(o)){if(!ss(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ba(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hp(t,e){const n=new dp(t,e);return n.subscribe.bind(n)}class dp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Si),r.error===void 0&&(r.error=Si),r.complete===void 0&&(r.complete=Si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Si(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1e3,gp=2,mp=4*60*60*1e3,yp=.5;function ja(t,e=pp,n=gp){const s=e*Math.pow(n,t),r=Math.round(yp*s*(Math.random()-.5)*2);return Math.min(mp,s+r)}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class We{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new np;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wp(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(t){return t===Pt?void 0:t}function wp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const bp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Tp=ne.INFO,Ep={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},kp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ep[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qr{constructor(e){this.name=e,this._logLevel=Tp,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Sp=(t,e)=>e.some(n=>t instanceof n);let qa,za;function Ap(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yl=new WeakMap,Wi=new WeakMap,Xl=new WeakMap,Ai=new WeakMap,So=new WeakMap;function Dp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yl.set(n,t)}).catch(()=>{}),So.set(e,t),e}function Np(t){if(Wi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wi.set(t,e)}let Qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rp(t){Qi=t(Qi)}function Op(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ci(this),e,...n);return Xl.set(s,e.sort?e.sort():[e]),Et(s)}:Cp().includes(t)?function(...e){return t.apply(Ci(this),e),Et(Yl.get(this))}:function(...e){return Et(t.apply(Ci(this),e))}}function Pp(t){return typeof t=="function"?Op(t):(t instanceof IDBTransaction&&Np(t),Sp(t,Ap())?new Proxy(t,Qi):t)}function Et(t){if(t instanceof IDBRequest)return Dp(t);if(Ai.has(t))return Ai.get(t);const e=Pp(t);return e!==t&&(Ai.set(t,e),So.set(e,t)),e}const Ci=t=>So.get(t);function Jl(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const $p=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],Di=new Map;function Ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Mp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$p.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Di.set(e,i),i}Rp(t=>({...t,get:(e,n,s)=>Ha(e,n)||t.get(e,n,s),has:(e,n)=>!!Ha(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yi="@firebase/app",Ka="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new qr("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",Vp="@firebase/analytics",Bp="@firebase/app-check-compat",jp="@firebase/app-check",qp="@firebase/auth",zp="@firebase/auth-compat",Hp="@firebase/database",Kp="@firebase/database-compat",Gp="@firebase/functions",Wp="@firebase/functions-compat",Qp="@firebase/installations",Yp="@firebase/installations-compat",Xp="@firebase/messaging",Jp="@firebase/messaging-compat",Zp="@firebase/performance",eg="@firebase/performance-compat",tg="@firebase/remote-config",ng="@firebase/remote-config-compat",sg="@firebase/storage",rg="@firebase/storage-compat",ig="@firebase/firestore",og="@firebase/firestore-compat",ag="firebase",cg="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="[DEFAULT]",lg={[Yi]:"fire-core",[Up]:"fire-core-compat",[Vp]:"fire-analytics",[Fp]:"fire-analytics-compat",[jp]:"fire-app-check",[Bp]:"fire-app-check-compat",[qp]:"fire-auth",[zp]:"fire-auth-compat",[Hp]:"fire-rtdb",[Kp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Wp]:"fire-fn-compat",[Qp]:"fire-iid",[Yp]:"fire-iid-compat",[Xp]:"fire-fcm",[Jp]:"fire-fcm-compat",[Zp]:"fire-perf",[eg]:"fire-perf-compat",[tg]:"fire-rc",[ng]:"fire-rc-compat",[sg]:"fire-gcs",[rg]:"fire-gcs-compat",[ig]:"fire-fst",[og]:"fire-fst-compat","fire-js":"fire-js",[ag]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Xi=new Map;function ug(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rt(t){const e=t.name;if(Xi.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,t);for(const n of _r.values())ug(n,t);return!0}function sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new nn("app","Firebase",hg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=cg;function fg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zl,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});const r=_r.get(s);if(r){if(ss(t,r.options)&&ss(n,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const i=new Ip(s);for(const a of Xi.values())i.addComponent(a);const o=new dg(t,n,i);return _r.set(s,o),o}function Ao(t=Zl){const e=_r.get(t);if(!e)throw Wt.create("no-app",{appName:t});return e}function He(t,e,n){var s;let r=(s=lg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}rt(new We(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pg="firebase-heartbeat-database",gg=1,rs="firebase-heartbeat-store";let Ni=null;function eu(){return Ni||(Ni=Jl(pg,gg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})})),Ni}async function mg(t){var e;try{return(await eu()).transaction(rs).objectStore(rs).get(tu(t))}catch(n){if(n instanceof Ye)Gt.warn(n.message);else{const s=Wt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Gt.warn(s.message)}}}async function Ga(t,e){var n;try{const r=(await eu()).transaction(rs,"readwrite");return await r.objectStore(rs).put(e,tu(t)),r.done}catch(s){if(s instanceof Ye)Gt.warn(s.message);else{const r=Wt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Gt.warn(r.message)}}}function tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yg=1024,vg=30*24*60*60*1e3;class _g{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ig(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=vg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wa(),{heartbeatsToSend:n,unsentEntries:s}=wg(this._heartbeatsCache.heartbeats),r=Kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wa(){return new Date().toISOString().substring(0,10)}function wg(t,e=yg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Qa(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ig{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wl()?Ql().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qa(t){return Kl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){rt(new We("platform-logger",e=>new Lp(e),"PRIVATE")),rt(new We("heartbeat",e=>new _g(e),"PRIVATE")),He(Yi,Ka,t),He(Yi,Ka,"esm2017"),He("fire-js","")}bg("");function Co(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function nu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tg=nu,su=new nn("auth","Firebase",nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new qr("@firebase/auth");function cr(t,...e){Ya.logLevel<=ne.ERROR&&Ya.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw Do(t,...e)}function Ze(t,...e){return Do(t,...e)}function ru(t,e,n){const s=Object.assign(Object.assign({},Tg()),{[e]:n});return new nn("auth","Firebase",s).create(e,{appName:t.name})}function Eg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ge(t,"argument-error"),ru(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Do(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return su.create(t,...e)}function B(t,e,...n){if(!t)throw Do(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function dt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;function lt(t){dt(t instanceof Function,"Expected a class definition");let e=Xa.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){const n=sn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ss(i,e!=null?e:{}))return r;Ge(r,"already-initialized")}return n.initialize({options:e})}function Sg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ag(){return Ja()==="http:"||Ja()==="https:"}function Ja(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ag()||Gl()||"connection"in navigator)?navigator.onLine:!0}function Dg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=sp()||rp()}get(){return Cg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Es(3e4,6e4);function ks(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ss(t,e,n,s,r={}){return ou(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=bs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),iu.fetch()(au(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ou(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ng),e);try{const r=new Og(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Js(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Js(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Js(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ru(t,u,l);Ge(t,u)}}catch(r){if(r instanceof Ye)throw r;Ge(t,"network-request-failed")}}async function As(t,e,n,s,r={}){const i=await Ss(t,e,n,s,r);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function au(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?No(t.config,r):`${t.config.apiScheme}://${r}`}class Og{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),Rg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ze(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function $g(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mg(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),r=Ro(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Gn(Ri(r.auth_time)),issuedAtTime:Gn(Ri(r.iat)),expirationTime:Gn(Ri(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ri(t){return Number(t)*1e3}function Ro(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const i=tp(s);return i?JSON.parse(i):(cr("Failed to decode base64 JWT payload"),null)}catch(i){return cr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Lg(t){const e=Ro(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ye&&xg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function xg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await is(t,$g(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bg(i.providerUserInfo):[],a=Vg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Fg(t){const e=Pe(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Bg(t){return t.map(e=>{var{providerId:n}=e,s=Co(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e){const n=await ou(t,{},async()=>{const s=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=au(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await jg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new os;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mg(this,e)}reload(){return Fg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await is(this,Pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:L,isAnonymous:k,providerData:v,stsTokenManager:P}=n;B(S&&P,e,"internal-error");const pe=os.fromJSON(this.name,P);B(typeof S=="string",e,"internal-error"),vt(h,e.name),vt(d,e.name),B(typeof L=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),vt(p,e.name),vt(g,e.name),vt(m,e.name),vt(T,e.name),vt(A,e.name),vt(O,e.name);const ue=new jt({uid:S,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:pe,createdAt:A,lastLoginAt:O});return v&&Array.isArray(v)&&(ue.providerData=v.map(te=>Object.assign({},te))),T&&(ue._redirectEventId=T),ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new os;r.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await wr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lu.type="NONE";const Za=lu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=lr(this.userKey,r.apiKey,i),this.fullPersistenceKey=lr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pn(lt(Za),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||lt(Za);const o=lr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=jt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(du(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pu(e))return"Blackberry";if(gu(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||hu(e))&&!e.includes("edge/"))return"Chrome";if(fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function uu(t=Oe()){return/firefox\//i.test(t)}function Oo(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hu(t=Oe()){return/crios\//i.test(t)}function du(t=Oe()){return/iemobile/i.test(t)}function fu(t=Oe()){return/android/i.test(t)}function pu(t=Oe()){return/blackberry/i.test(t)}function gu(t=Oe()){return/webos/i.test(t)}function zr(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qg(t=Oe()){var e;return zr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zg(){return ip()&&document.documentMode===10}function mu(t=Oe()){return zr(t)||fu(t)||gu(t)||pu(t)||/windows phone/i.test(t)||du(t)}function Hg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e=[]){let n;switch(t){case"Browser":n=ec(Oe());break;case"Worker":n=`${ec(Oe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${s}`}/**
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
 */class Kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new Kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await wr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Cs(t){return Pe(t)}class tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function Wg(t,e){return Ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(t,e){return As(t,"POST","/v1/accounts:signInWithPassword",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}async function Xg(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Po{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new as(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Qg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yg(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Wg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return As(t,"POST","/v1/accounts:signInWithIdp",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="http://localhost";class Qt extends Po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Co(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:Jg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function em(t){const e=Vn(Bn(t)).link,n=e?Vn(Bn(e)).deep_link_id:null,s=Vn(Bn(t)).deep_link_id;return(s?Vn(Bn(s)).link:null)||s||n||e||t}class $o{constructor(e){var n,s,r,i,o,a;const c=Vn(Bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Zg((r=c.mode)!==null&&r!==void 0?r:null);B(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=em(e);try{return new $o(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=$o.parseLink(n);return B(s,"argument-error"),as._fromEmailAndCode(e,s.code,s.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Ds{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ot.credential(n,s)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ds{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Ds{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return As(t,"POST","/v1/accounts:signUp",ks(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jt._fromIdTokenResponse(e,s,r),o=nc(s);return new Yt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=nc(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function nc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ye{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ir(e,n,s,r)}}function vu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(t,i,e,s):i})}async function nm(t,e,n=!1){const s=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await is(t,vu(r,i,e,t),n);B(o.idToken,r,"internal-error");const a=Ro(o.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(t.uid===c,r,"user-mismatch"),Yt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e,n=!1){const s="signIn",r=await vu(t,s,e),i=await Yt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function rm(t,e){return _u(Cs(t),e)}async function im(t,e,n){const s=Cs(t),r=await tm(s,{returnSecureToken:!0,email:e,password:n}),i=await Yt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function om(t,e,n){return rm(Pe(t),Dn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t,e){return Pe(t).setPersistence(e)}function wu(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function cm(t){return Pe(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){const t=Oe();return Oo(t)||zr(t)}const um=1e3,hm=10;class bu extends Iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lm()&&Hg(),this.fallbackToPolling=mu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},um)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bu.type="LOCAL";const Tu=bu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eu.type="SESSION";const ku=Eu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await dm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function pm(t){et().location.href=t}/**
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
 */function Su(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function gm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ym(){return Su()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="firebaseLocalStorageDb",vm=1,Tr="firebaseLocalStorage",Cu="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function _m(){const t=indexedDB.deleteDatabase(Au);return new Ns(t).toPromise()}function Zi(){const t=indexedDB.open(Au,vm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Tr,{keyPath:Cu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Tr)?e(s):(s.close(),await _m(),e(await Zi()))})})}async function sc(t,e,n){const s=Kr(t,!0).put({[Cu]:e,value:n});return new Ns(s).toPromise()}async function wm(t,e){const n=Kr(t,!1).get(e),s=await new Ns(n).toPromise();return s===void 0?null:s.value}function rc(t,e){const n=Kr(t,!0).delete(e);return new Ns(n).toPromise()}const Im=800,bm=3;class Du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(ym()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gm(),!this.activeServiceWorker)return;this.sender=new fm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zi();return await sc(e,br,"1"),await rc(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>wm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Kr(r,!1).getAll();return new Ns(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Du.type="LOCAL";const Tm=Du;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function km(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ze("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Em().appendChild(s)})}function Sm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Es(3e4,6e4);/**
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
 */function Nu(t,e){return e?lt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Po{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Am(t){return _u(t.auth,new xo(t),t.bypassAuthState)}function Cm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),sm(n,new xo(t),t.bypassAuthState)}async function Dm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),nm(n,new xo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Am;case"linkViaPopup":case"linkViaRedirect":return Dm;case"reauthViaPopup":case"reauthViaRedirect":return Cm;default:Ge(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Es(2e3,1e4);async function Rm(t,e,n){const s=Cs(t);Eg(t,e,Mo);const r=Nu(s,n);return new xt(s,"signInViaPopup",e,r).executeNotNull()}class xt extends Ru{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,xt.currentPopupAction&&xt.currentPopupAction.cancel(),xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Nm.get())};e()}}xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="pendingRedirect",ur=new Map;class Pm extends Ru{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const s=await $m(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $m(t,e){const n=xm(e),s=Lm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Mm(t,e){ur.set(t._key(),e)}function Lm(t){return lt(t._redirectPersistence)}function xm(t){return lr(Om,t.config.apiKey,t.name)}async function Um(t,e,n=!1){const s=Cs(t),r=Nu(s,e),o=await new Pm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=10*60*1e3;class Vm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ou(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ic(e))}saveEventToCache(e){this.cachedEventUids.add(ic(e)),this.lastProcessedEventTime=Date.now()}}function ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ou({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ou(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zm=/^https?/;async function Hm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jm(t);for(const n of e)try{if(Km(n))return}catch{}Ge(t,"unauthorized-domain")}function Km(t){const e=Ji(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!zm.test(n))return!1;if(qm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Gm=new Es(3e4,6e4);function oc(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wm(t){return new Promise((e,n)=>{var s,r,i;function o(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(Ze(t,"network-request-failed"))},timeout:Gm.get()})}if(!((r=(s=et().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=Sm("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},km(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw hr=null,e})}let hr=null;function Qm(t){return hr=hr||Wm(t),hr}/**
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
 */const Ym=new Es(5e3,15e3),Xm="__/auth/iframe",Jm="emulator/auth/iframe",Zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ty(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?No(e,Jm):`https://${t.config.authDomain}/${Xm}`,s={apiKey:e.apiKey,appName:t.name,v:Ts},r=ey.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bs(s).slice(1)}`}async function ny(t){const e=await Qm(t),n=et().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:ty(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},Ym.get());function c(){et().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ry=500,iy=600,oy="_blank",ay="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cy(t,e,n,s=ry,r=iy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sy),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=hu(l)?oy:n),uu(l)&&(e=e||ay,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(qg(l)&&a!=="_self")return ly(e||"",a),new ac(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new ac(h)}function ly(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const uy="__/auth/handler",hy="emulator/auth/handler";function cc(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ts,eventId:r};if(e instanceof Mo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",up(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ds){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${dy(t)}?${bs(a).slice(1)}`}function dy({config:t}){return t.emulator?No(t,hy):`https://${t.authDomain}/${uy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="webStorageSupport";class fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ku,this._completeRedirectFn=Um,this._overrideRedirectResult=Mm}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=cc(e,n,s,Ji(),r);return cy(e,o,Lo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),pm(cc(e,n,s,Ji(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ny(e),s=new Vm(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oi,{type:Oi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Oi];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mu()||Oo()||zr()}}const py=fy;var lc="@firebase/auth",uc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yy(t){rt(new We("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(t)},u=new Gg(a,c,l);return Sg(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),rt(new We("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(s=>new gy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(lc,uc,my(t)),He(lc,uc,"esm2017")}/**
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
 */function vy(t=Ao()){const e=sn(t,"auth");return e.isInitialized()?e.getImmediate():kg(t,{popupRedirectResolver:py,persistence:[Tm,Tu,ku]})}yy("Browser");const Pu="@firebase/installations",Uo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=1e4,Mu=`w:${Uo}`,Lu="FIS_v2",_y="https://firebaseinstallations.googleapis.com/v1",wy=60*60*1e3,Iy="installations",by="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xt=new nn(Iy,by,Ty);function xu(t){return t instanceof Ye&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu({projectId:t}){return`${_y}/projects/${t}/installations`}function Fu(t){return{token:t.token,requestStatus:2,expiresIn:ky(t.expiresIn),creationTime:Date.now()}}async function Vu(t,e){const s=(await e.json()).error;return Xt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Bu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ey(t,{refreshToken:e}){const n=Bu(t);return n.append("Authorization",Sy(e)),n}async function ju(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ky(t){return Number(t.replace("s","000"))}function Sy(t){return`${Lu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Uu(t),r=Bu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Lu,appId:t.appId,sdkVersion:Mu},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ju(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fu(l.authToken)}}else throw await Vu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^[cdef][\w-]{21}$/,eo="";function Ny(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ry(t);return Dy.test(n)?n:eo}catch{return eo}}function Ry(t){return Cy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map;function Hu(t,e){const n=Gr(t);Ku(n,e),Oy(n,e)}function Ku(t,e){const n=zu.get(t);if(!!n)for(const s of n)s(e)}function Oy(t,e){const n=Py();n&&n.postMessage({key:t,fid:e}),$y()}let Ut=null;function Py(){return!Ut&&"BroadcastChannel"in self&&(Ut=new BroadcastChannel("[Firebase] FID Change"),Ut.onmessage=t=>{Ku(t.data.key,t.data.fid)}),Ut}function $y(){zu.size===0&&Ut&&(Ut.close(),Ut=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebase-installations-database",Ly=1,Jt="firebase-installations-store";let Pi=null;function Fo(){return Pi||(Pi=Jl(My,Ly,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jt)}}})),Pi}async function Er(t,e){const n=Gr(t),r=(await Fo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Hu(t,e.fid),e}async function Gu(t){const e=Gr(t),s=(await Fo()).transaction(Jt,"readwrite");await s.objectStore(Jt).delete(e),await s.done}async function Wr(t,e){const n=Gr(t),r=(await Fo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Hu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){let e;const n=await Wr(t.appConfig,s=>{const r=xy(s),i=Uy(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===eo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xy(t){const e=t||{fid:Ny(),registrationStatus:0};return Wu(e)}function Uy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Xt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Fy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vy(t)}:{installationEntry:e}}async function Fy(t,e){try{const n=await Ay(t,e);return Er(t.appConfig,n)}catch(n){throw xu(n)&&n.customData.serverCode===409?await Gu(t.appConfig):await Er(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Vy(t){let e=await hc(t.appConfig);for(;e.registrationStatus===1;)await qu(100),e=await hc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Vo(t);return s||n}return e}function hc(t){return Wr(t,e=>{if(!e)throw Xt.create("installation-not-found");return Wu(e)})}function Wu(t){return By(t)?{fid:t.fid,registrationStatus:0}:t}function By(t){return t.registrationStatus===1&&t.registrationTime+$u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy({appConfig:t,heartbeatServiceProvider:e},n){const s=qy(t,n),r=Ey(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Mu,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await ju(()=>fetch(s,a));if(c.ok){const l=await c.json();return Fu(l)}else throw await Vu("Generate Auth Token",c)}function qy(t,{fid:e}){return`${Uu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e=!1){let n;const s=await Wr(t.appConfig,i=>{if(!Qu(i))throw Xt.create("not-registered");const o=i.authToken;if(!e&&Ky(o))return i;if(o.requestStatus===1)return n=zy(t,e),i;{if(!navigator.onLine)throw Xt.create("app-offline");const a=Wy(i);return n=Hy(t,a),a}});return n?await n:s.authToken}async function zy(t,e){let n=await dc(t.appConfig);for(;n.authToken.requestStatus===1;)await qu(100),n=await dc(t.appConfig);const s=n.authToken;return s.requestStatus===0?Bo(t,e):s}function dc(t){return Wr(t,e=>{if(!Qu(e))throw Xt.create("not-registered");const n=e.authToken;return Qy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Hy(t,e){try{const n=await jy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Er(t.appConfig,s),n}catch(n){if(xu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Er(t.appConfig,s)}throw n}}function Qu(t){return t!==void 0&&t.registrationStatus===2}function Ky(t){return t.requestStatus===2&&!Gy(t)}function Gy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wy}function Wy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qy(t){return t.requestStatus===1&&t.requestTime+$u<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t){const e=t,{installationEntry:n,registrationPromise:s}=await Vo(e);return s?s.catch(console.error):Bo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(t,e=!1){const n=t;return await Jy(n),(await Bo(n,e)).token}async function Jy(t){const{registrationPromise:e}=await Vo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){if(!t||!t.options)throw $i("App Configuration");if(!t.name)throw $i("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $i(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $i(t){return Xt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="installations",ev="installations-internal",tv=t=>{const e=t.getProvider("app").getImmediate(),n=Zy(e),s=sn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},nv=t=>{const e=t.getProvider("app").getImmediate(),n=sn(e,Yu).getImmediate();return{getId:()=>Yy(n),getToken:r=>Xy(n,r)}};function sv(){rt(new We(Yu,tv,"PUBLIC")),rt(new We(ev,nv,"PRIVATE"))}sv();He(Pu,Uo);He(Pu,Uo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="analytics",rv="firebase_id",iv="origin",ov=60*1e3,av="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new qr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cv(t,e){const n=document.createElement("script");n.src=`${Xu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function lv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function uv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Ju(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Ve.error(a)}t("config",r,i)}async function hv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ju(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Ve.error(i)}}function dv(t,e,n,s){async function r(i,o,a){try{i==="event"?await hv(t,e,n,o,a):i==="config"?await uv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ve.error(c)}}return r}function fv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=dv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function pv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Xu))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ke=new nn("analytics","Analytics",gv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=30,yv=1e3;class vv{constructor(e={},n=yv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zu=new vv;function _v(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function wv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:_v(s)},i=av.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Iv(t,e=Zu,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ke.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ke.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ev;return setTimeout(async()=>{a.abort()},n!==void 0?n:ov),eh({appId:s,apiKey:r,measurementId:i},o,a,e)}async function eh(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Zu){var i,o;const{appId:a,measurementId:c}=t;try{await bv(s,e)}catch(l){if(c)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await wv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Tv(u)){if(r.deleteThrottleMetadata(a),c)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?ja(n,r.intervalMillis,mv):ja(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Ve.debug(`Calling attemptFetch again in ${h} millis`),eh(t,d,s,r)}}function bv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tv(t){if(!(t instanceof Ye)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ev{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(){var t;if(Wl())try{await Ql()}catch(e){return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Av(t,e,n,s,r,i,o){var a;const c=Iv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Ve.error(p)),e.push(c);const l=Sv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);pv()||cv(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[iv]="firebase",d.update=!0,h!=null&&(d[rv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.app=e}_delete(){return delete Wn[this.app.options.appId],Promise.resolve()}}let Wn={},fc=[];const pc={};let Mi="dataLayer",Dv="gtag",gc,th,mc=!1;function Nv(){const t=[];if(Gl()&&t.push("This is a browser extension environment."),op()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function Rv(t,e,n){Nv();const s=t.options.appId;if(!s)throw Ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(Wn[s]!=null)throw Ke.create("already-exists",{id:s});if(!mc){lv(Mi);const{wrappedGtag:i,gtagCore:o}=fv(Wn,fc,pc,Mi,Dv);th=i,gc=o,mc=!0}return Wn[s]=Av(t,fc,pc,e,gc,Mi,n),new Cv(t)}function Ov(t=Ao()){t=Pe(t);const e=sn(t,kr);return e.isInitialized()?e.getImmediate():Pv(t)}function Pv(t,e={}){const n=sn(t,kr);if(n.isInitialized()){const r=n.getImmediate();if(ss(e,n.getOptions()))return r;throw Ke.create("already-initialized")}return n.initialize({options:e})}function $v(t,e,n,s){t=Pe(t),kv(th,Wn[t.app.options.appId],e,n,s).catch(r=>Ve.error(r))}const yc="@firebase/analytics",vc="0.8.0";function Mv(){rt(new We(kr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Rv(s,r,n)},"PUBLIC")),rt(new We("analytics-internal",t,"PRIVATE")),He(yc,vc),He(yc,vc,"esm2017");function t(e){try{const n=e.getProvider(kr).getImmediate();return{logEvent:(s,r,i)=>$v(n,s,r,i)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}Mv();var Lv="firebase",xv="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Lv,xv,"app");var Uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,jo=jo||{},j=Uv||self;function Sr(){}function Qr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Fv(t){return Object.prototype.hasOwnProperty.call(t,Li)&&t[Li]||(t[Li]=++Vv)}var Li="closure_uid_"+(1e9*Math.random()>>>0),Vv=0;function Bv(t,e,n){return t.call.apply(t.bind,arguments)}function jv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ne(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=Bv:Ne=jv,Ne.apply(null,arguments)}function Zs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Nt(){this.s=this.s,this.o=this.o}var qv=0;Nt.prototype.s=!1;Nt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qv!=0)&&Fv(this)};Nt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function _c(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Qr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var zv=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Sr,e),j.removeEventListener("test",Sr,e)}catch{}return t}();function Ar(t){return/^[\s\xa0]*$/.test(t)}var wc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xi(t,e){return t<e?-1:t>e?1:0}function Yr(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Xe(t){return Yr().indexOf(t)!=-1}function zo(t){return zo[" "](t),t}zo[" "]=Sr;function Hv(t){var e=Wv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Kv=Xe("Opera"),_n=Xe("Trident")||Xe("MSIE"),sh=Xe("Edge"),to=sh||_n,rh=Xe("Gecko")&&!(Yr().toLowerCase().indexOf("webkit")!=-1&&!Xe("Edge"))&&!(Xe("Trident")||Xe("MSIE"))&&!Xe("Edge"),Gv=Yr().toLowerCase().indexOf("webkit")!=-1&&!Xe("Edge");function ih(){var t=j.document;return t?t.documentMode:void 0}var Cr;e:{var Ui="",Fi=function(){var t=Yr();if(rh)return/rv:([^\);]+)(\)|;)/.exec(t);if(sh)return/Edge\/([\d\.]+)/.exec(t);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Gv)return/WebKit\/(\S+)/.exec(t);if(Kv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fi&&(Ui=Fi?Fi[1]:""),_n){var Vi=ih();if(Vi!=null&&Vi>parseFloat(Ui)){Cr=String(Vi);break e}}Cr=Ui}var Wv={};function Qv(){return Hv(function(){let t=0;const e=wc(String(Cr)).split("."),n=wc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=xi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||xi(r[2].length==0,i[2].length==0)||xi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var no;if(j.document&&_n){var Ic=ih();no=Ic||parseInt(Cr,10)||void 0}else no=void 0;var Yv=no;function cs(t,e){if(Re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rh){e:{try{zo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Xv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cs.X.h.call(this)}}Ce(cs,Re);var Xv={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),Jv=0;function Zv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Jv,this.ba=this.ea=!1}function Xr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ho(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function oh(t){const e={};for(const n in t)e[n]=t[n];return e}const bc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ah(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<bc.length;i++)n=bc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Jr(t){this.src=t,this.g={},this.h=0}Jr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ro(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Zv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function so(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=nh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Xr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ko="closure_lm_"+(1e6*Math.random()|0),Bi={};function ch(t,e,n,s,r){if(s&&s.once)return uh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ch(t,e[i],n,s,r);return null}return n=Qo(n),t&&t[Os]?t.N(e,n,Rs(s)?!!s.capture:!!s,r):lh(t,e,n,!1,s,r)}function lh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Rs(r)?!!r.capture:!!r,a=Wo(t);if(a||(t[Ko]=a=new Jr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=e_(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)zv||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(dh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function e_(){function t(n){return e.call(t.src,t.listener,n)}const e=t_;return t}function uh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)uh(t,e[i],n,s,r);return null}return n=Qo(n),t&&t[Os]?t.O(e,n,Rs(s)?!!s.capture:!!s,r):lh(t,e,n,!0,s,r)}function hh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)hh(t,e[i],n,s,r);else s=Rs(s)?!!s.capture:!!s,n=Qo(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ro(i,n,s,r),-1<n&&(Xr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,s,r)),(n=-1<t?e[t]:null)&&Go(n))}function Go(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])so(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(dh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wo(e))?(so(n,t),n.h==0&&(n.src=null,e[Ko]=null)):Xr(t)}}}function dh(t){return t in Bi?Bi[t]:Bi[t]="on"+t}function t_(t,e){if(t.ba)t=!0;else{e=new cs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Go(t),t=n.call(s,e)}return t}function Wo(t){return t=t[Ko],t instanceof Jr?t:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(t){return typeof t=="function"?t:(t[ji]||(t[ji]=function(e){return t.handleEvent(e)}),t[ji])}function be(){Nt.call(this),this.i=new Jr(this),this.P=this,this.I=null}Ce(be,Nt);be.prototype[Os]=!0;be.prototype.removeEventListener=function(t,e,n,s){hh(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Re(e,t);else if(e instanceof Re)e.target=e.target||t;else{var r=e;e=new Re(s,t),ah(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=er(o,s,!0,e)&&r}if(o=e.g=t,r=er(o,s,!0,e)&&r,r=er(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=er(o,s,!1,e)&&r}be.prototype.M=function(){if(be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Xr(n[s]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function er(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&so(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Yo=j.JSON.stringify;function n_(){var t=gh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class s_{constructor(){this.h=this.g=null}add(e,n){const s=fh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var fh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new r_,t=>t.reset());class r_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function i_(t){j.setTimeout(()=>{throw t},0)}function ph(t,e){io||o_(),oo||(io(),oo=!0),gh.add(t,e)}var io;function o_(){var t=j.Promise.resolve(void 0);io=function(){t.then(a_)}}var oo=!1,gh=new s_;function a_(){for(var t;t=n_();){try{t.h.call(t.g)}catch(n){i_(n)}var e=fh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1}function Zr(t,e){be.call(this),this.h=t||1,this.g=e||j,this.j=Ne(this.kb,this),this.l=Date.now()}Ce(Zr,be);R=Zr.prototype;R.ca=!1;R.R=null;R.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Xo(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){Zr.X.M.call(this),Xo(this),delete this.g};function Jo(t,e,n){if(typeof t=="function")n&&(t=Ne(t,n));else if(t&&typeof t.handleEvent=="function")t=Ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function mh(t){t.g=Jo(()=>{t.g=null,t.i&&(t.i=!1,mh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class c_ extends Nt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:mh(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){Nt.call(this),this.h=t,this.g={}}Ce(ls,Nt);var Tc=[];function yh(t,e,n,s){Array.isArray(n)||(n&&(Tc[0]=n.toString()),n=Tc);for(var r=0;r<n.length;r++){var i=ch(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function vh(t){Ho(t.g,function(e,n){this.g.hasOwnProperty(n)&&Go(e)},t),t.g={}}ls.prototype.M=function(){ls.X.M.call(this),vh(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ei(){this.g=!0}ei.prototype.Aa=function(){this.g=!1};function l_(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function u_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+d_(t,n)+(s?" "+s:"")})}function h_(t,e){t.info(function(){return"TIMEOUT: "+e})}ei.prototype.info=function(){};function d_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Yo(n)}catch{return e}}var rn={},Ec=null;function ti(){return Ec=Ec||new be}rn.Oa="serverreachability";function _h(t){Re.call(this,rn.Oa,t)}Ce(_h,Re);function us(t){const e=ti();Se(e,new _h(e))}rn.STAT_EVENT="statevent";function wh(t,e){Re.call(this,rn.STAT_EVENT,t),this.stat=e}Ce(wh,Re);function Me(t){const e=ti();Se(e,new wh(e,t))}rn.Pa="timingevent";function Ih(t,e){Re.call(this,rn.Pa,t),this.size=e}Ce(Ih,Re);function Ps(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var ni={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},bh={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zo(){}Zo.prototype.h=null;function kc(t){return t.h||(t.h=t.i())}function Th(){}var $s={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ea(){Re.call(this,"d")}Ce(ea,Re);function ta(){Re.call(this,"c")}Ce(ta,Re);var ao;function si(){}Ce(si,Zo);si.prototype.g=function(){return new XMLHttpRequest};si.prototype.i=function(){return{}};ao=new si;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ls(this),this.O=f_,t=to?125:void 0,this.T=new Zr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Eh}function Eh(){this.i=null,this.g="",this.h=!1}var f_=45e3,co={},Dr={};R=Ms.prototype;R.setTimeout=function(t){this.O=t};function lo(t,e,n){t.K=1,t.v=ii(ft(e)),t.s=n,t.P=!0,kh(t,null)}function kh(t,e){t.F=Date.now(),Ls(t),t.A=ft(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ph(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Eh,t.g=ed(t.l,n?e:null,!t.s),0<t.N&&(t.L=new c_(Ne(t.Ka,t,t.g),t.N)),yh(t.S,t.g,"readystatechange",t.hb),e=t.H?oh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),us(),l_(t.j,t.u,t.A,t.m,t.U,t.s)}R.hb=function(t){t=t.target;const e=this.L;e&&ut(t)==3?e.l():this.Ka(t)};R.Ka=function(t){try{if(t==this.g)e:{const u=ut(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||to||this.g&&(this.h.h||this.g.fa()||Dc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?us(3):us(2)),ri(this);var n=this.g.aa();this.Y=n;t:if(Sh(this)){var s=Dc(this.g);t="";var r=s.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Qn(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,u_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var l=a;break t}}l=null}if(n=l)dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uo(this,n);else{this.i=!1,this.o=3,Me(12),Ft(this),Qn(this);break e}}this.P?(Ah(this,u,o),to&&this.i&&u==3&&(yh(this.S,this.T,"tick",this.gb),this.T.start())):(dn(this.j,this.m,o,null),uo(this,o)),u==4&&Ft(this),this.i&&!this.I&&(u==4?Yh(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Ft(this),Qn(this)}}}catch{}finally{}};function Sh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ah(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=p_(t,n),r==Dr){e==4&&(t.o=4,Me(14),s=!1),dn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==co){t.o=4,Me(15),dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else dn(t.j,t.m,r,null),uo(t,r);Sh(t)&&r!=Dr&&r!=co&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ca(e),e.K=!0,Me(11))):(dn(t.j,t.m,n,"[Invalid Chunked Response]"),Ft(t),Qn(t))}R.gb=function(){if(this.g){var t=ut(this.g),e=this.g.fa();this.C<e.length&&(ri(this),Ah(this,t,e),this.i&&t!=4&&Ls(this))}};function p_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Dr:(n=Number(e.substring(n,s)),isNaN(n)?co:(s+=1,s+n>e.length?Dr:(e=e.substr(s,n),t.C=s+n,e)))}R.cancel=function(){this.I=!0,Ft(this)};function Ls(t){t.V=Date.now()+t.O,Ch(t,t.O)}function Ch(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ps(Ne(t.fb,t),e)}function ri(t){t.B&&(j.clearTimeout(t.B),t.B=null)}R.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(h_(this.j,this.A),this.K!=2&&(us(),Me(17)),Ft(this),this.o=2,Qn(this)):Ch(this,this.V-t)};function Qn(t){t.l.G==0||t.I||Yh(t.l,t)}function Ft(t){ri(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xo(t.T),vh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ho(n.h,t))){if(!t.J&&ho(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Or(n),ci(n);else break e;aa(n),Me(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ps(Ne(n.bb,n),6e3));if(1>=Lh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vt(n,11)}else if((t.J||n.g==t)&&Or(n),!Ar(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(na(i,i.h),i.h=null))}if(s.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ce(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Zh(s,s.H?s.ka:null,s.V),o.J){xh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ri(a),Ls(a)),s.g=o}else Wh(s);0<n.i.length&&li(n)}else l[0]!="stop"&&l[0]!="close"||Vt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vt(n,7):oa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}us(4)}catch{}}function g_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Qr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function m_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Qr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Dh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Qr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=m_(t),s=g_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function y_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qt){this.h=e!==void 0?e:t.h,Nr(this,t.j),this.s=t.s,this.g=t.g,Rr(this,t.m),this.l=t.l,e=t.i;var n=new hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sc(this,n),this.o=t.o}else t&&(n=String(t).match(Nh))?(this.h=!!e,Nr(this,n[1]||"",!0),this.s=jn(n[2]||""),this.g=jn(n[3]||"",!0),Rr(this,n[4]),this.l=jn(n[5]||"",!0),Sc(this,n[6]||"",!0),this.o=jn(n[7]||"")):(this.h=!!e,this.i=new hs(null,this.h))}qt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qn(e,Ac,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qn(e,Ac,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qn(n,n.charAt(0)=="/"?w_:__,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qn(n,b_)),t.join("")};function ft(t){return new qt(t)}function Nr(t,e,n){t.j=n?jn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sc(t,e,n){e instanceof hs?(t.i=e,T_(t.i,t.h)):(n||(e=qn(e,I_)),t.i=new hs(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function ii(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,v_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function v_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ac=/[#\/\?@]/g,__=/[#\?:]/g,w_=/[#\?]/g,I_=/[#\?@]/g,b_=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rt(t){t.g||(t.g=new Map,t.h=0,t.i&&y_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=hs.prototype;R.add=function(t,e){Rt(this),this.i=null,t=Nn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rh(t,e){Rt(t),e=Nn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Oh(t,e){return Rt(t),e=Nn(t,e),t.g.has(e)}R.forEach=function(t,e){Rt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};R.oa=function(){Rt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};R.W=function(t){Rt(this);let e=[];if(typeof t=="string")Oh(this,t)&&(e=e.concat(this.g.get(Nn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Rt(this),this.i=null,t=Nn(this,t),Oh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ph(t,e,n){Rh(t,e),0<n.length&&(t.i=null,t.g.set(Nn(t,e),qo(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Nn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function T_(t,e){e&&!t.j&&(Rt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Rh(this,s),Ph(this,r,n))},t)),t.j=e}var E_=class{constructor(t,e){this.h=t,this.g=e}};function $h(t){this.l=t||k_,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ga&&j.g.Ga()&&j.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var k_=10;function Mh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lh(t){return t.h?1:t.g?t.g.size:0}function ho(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function na(t,e){t.g?t.g.add(e):t.h=e}function xh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$h.prototype.cancel=function(){if(this.i=Uh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qo(t.i)}function sa(){}sa.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};sa.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function S_(){this.g=new sa}function A_(t,e,n){const s=n||"";try{Dh(t,function(r,i){let o=r;Rs(r)&&(o=Yo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function C_(t,e){const n=new ei;if(j.Image){const s=new Image;s.onload=Zs(tr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zs(tr,n,s,"TestLoadImage: error",!1,e),s.onabort=Zs(tr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zs(tr,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function tr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}Ce(xs,Zo);xs.prototype.g=function(){return new oi(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function oi(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ra,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(oi,be);var ra=0;R=oi.prototype;R.open=function(t,e){if(this.readyState!=ra)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ds(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=ra};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fh(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Fh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):ds(this),this.readyState==3&&Fh(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,Us(this))};R.Ta=function(t){this.g&&(this.response=t,Us(this))};R.ga=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ds(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D_=j.JSON.parse;function fe(t){be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vh,this.K=this.L=!1}Ce(fe,be);var Vh="",N_=/^https?$/i,R_=["POST","PUT"];R=fe.prototype;R.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ao.g(),this.C=this.u?kc(this.u):kc(ao),this.g.onreadystatechange=Ne(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Cc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=j.FormData&&t instanceof j.FormData,!(0<=nh(R_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qh(this),0<this.B&&((this.K=O_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.qa,this)):this.A=Jo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Cc(this,i)}};function O_(t){return _n&&Qv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof jo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Cc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bh(t),ai(t)}function Bh(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),ai(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ai(this,!0)),fe.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?jh(this):this.eb())};R.eb=function(){jh(this)};function jh(t){if(t.h&&typeof jo<"u"&&(!t.C[1]||ut(t)!=4||t.aa()!=2)){if(t.v&&ut(t)==4)Jo(t.Ha,0,t);else if(Se(t,"readystatechange"),ut(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Nh)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!N_.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Bh(t)}}finally{ai(t)}}}}function ai(t,e){if(t.g){qh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function qh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function ut(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D_(e)}};function Dc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function zh(t){let e="";return Ho(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hh(t){this.Ca=0,this.i=[],this.j=new ei,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=xn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=xn("baseRetryDelayMs",5e3,t),this.ab=xn("retryDelaySeedMs",1e4,t),this.Za=xn("forwardChannelMaxRetries",2,t),this.ta=xn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $h(t&&t.concurrentRequestLimit),this.Fa=new S_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=Hh.prototype;R.ma=8;R.G=1;function oa(t){if(Kh(t),t.G==3){var e=t.U++,n=ft(t.F);ce(n,"SID",t.I),ce(n,"RID",e),ce(n,"TYPE","terminate"),Fs(t,n),e=new Ms(t,t.j,e,void 0),e.K=2,e.v=ii(ft(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=ed(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ls(e)}Jh(t)}function ci(t){t.g&&(ca(t),t.g.cancel(),t.g=null)}function Kh(t){ci(t),t.u&&(j.clearTimeout(t.u),t.u=null),Or(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function li(t){Mh(t.h)||t.m||(t.m=!0,ph(t.Ja,t),t.C=0)}function P_(t,e){return Lh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Ps(Ne(t.Ja,t,e),Xh(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ms(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=oh(i),ah(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gh(this,r,e),n=ft(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Fs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(zh(i)))+"&"+e:this.o&&ia(n,this.o,i)),na(this.h,r),this.Xa&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",e),ce(n,"SID","null"),r.Z=!0,lo(r,n,null)):lo(r,n,e),this.G=2}}else this.G==3&&(t?Nc(this,t):this.i.length==0||Mh(this.h)||Nc(this))};function Nc(t,e){var n;e?n=e.m:n=t.U++;const s=ft(t.F);ce(s,"SID",t.I),ce(s,"RID",n),ce(s,"AID",t.T),Fs(t,s),t.o&&t.s&&ia(s,t.o,t.s),n=new Ms(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Gh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),na(t.h,n),lo(n,s,e)}function Fs(t,e){t.ia&&Ho(t.ia,function(n,s){ce(e,s,n)}),t.l&&Dh({},function(n,s){ce(e,s,n)})}function Gh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ne(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{A_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Wh(t){t.g||t.u||(t.Z=1,ph(t.Ia,t),t.A=0)}function aa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ps(Ne(t.Ia,t),Xh(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,Qh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ps(Ne(this.cb,this),t)}};R.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),ci(this),Qh(this))};function ca(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Qh(t){t.g=new Ms(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ft(t.sa);ce(e,"RID","rpc"),ce(e,"SID",t.I),ce(e,"CI",t.L?"0":"1"),ce(e,"AID",t.T),ce(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ii(ft(e)),n.s=null,n.P=!0,kh(n,t)}R.bb=function(){this.v!=null&&(this.v=null,ci(this),aa(this),Me(19))};function Or(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Yh(t,e){var n=null;if(t.g==e){Or(t),ca(t),t.g=null;var s=2}else if(ho(t.h,e))n=e.D,xh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ti(),Se(s,new Ih(s,n)),li(t)}else Wh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&P_(t,e)||s==2&&aa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Vt(t,5);break;case 4:Vt(t,10);break;case 3:Vt(t,6);break;default:Vt(t,2)}}}function Xh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Vt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ne(t.jb,t);n||(n=new qt("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Nr(n,"https"),ii(n)),C_(n.toString(),s)}else Me(2);t.G=0,t.l&&t.l.va(e),Jh(t),Kh(t)}R.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Jh(t){if(t.G=0,t.la=[],t.l){const e=Uh(t.h);(e.length!=0||t.i.length!=0)&&(_c(t.la,e),_c(t.la,t.i),t.h.i.length=0,qo(t.i),t.i.length=0),t.l.ua()}}function Zh(t,e,n){var s=n instanceof qt?ft(n):new qt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Rr(s,s.m);else{var r=j.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qt(null,void 0);s&&Nr(i,s),e&&(i.g=e),r&&Rr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ce(s,n,e),ce(s,"VER",t.ma),Fs(t,s),s}function ed(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new fe(new xs({ib:!0})):new fe(t.ra),e.L=t.H,e}function td(){}R=td.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Qa=function(){};function Pr(){if(_n&&!(10<=Number(Yv)))throw Error("Environmental error: no available transport.")}Pr.prototype.g=function(t,e){return new je(t,e)};function je(t,e){be.call(this),this.g=new Hh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rn(this)}Ce(je,be);je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Zh(t,null,t.V),li(t)};je.prototype.close=function(){oa(this.g)};je.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yo(t),t=n);e.i.push(new E_(e.$a++,t)),e.G==3&&li(e)};je.prototype.M=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,je.X.M.call(this)};function nd(t){ea.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(nd,ea);function sd(){ta.call(this),this.status=1}Ce(sd,ta);function Rn(t){this.g=t}Ce(Rn,td);Rn.prototype.xa=function(){Se(this.g,"a")};Rn.prototype.wa=function(t){Se(this.g,new nd(t))};Rn.prototype.va=function(t){Se(this.g,new sd)};Rn.prototype.ua=function(){Se(this.g,"b")};Pr.prototype.createWebChannel=Pr.prototype.g;je.prototype.send=je.prototype.u;je.prototype.open=je.prototype.m;je.prototype.close=je.prototype.close;ni.NO_ERROR=0;ni.TIMEOUT=8;ni.HTTP_ERROR=6;bh.COMPLETE="complete";Th.EventType=$s;$s.OPEN="a";$s.CLOSE="b";$s.ERROR="c";$s.MESSAGE="d";be.prototype.listen=be.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Na;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Ra;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;var $_=function(){return new Pr},M_=function(){return ti()},qi=ni,L_=bh,x_=rn,Rc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},U_=xs,nr=Th,F_=fe;const Oc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zt=new qr("@firebase/firestore");function Pc(){return Zt.logLevel}function $(t,...e){if(Zt.logLevel<=ne.DEBUG){const n=e.map(la);Zt.debug(`Firestore (${On}): ${t}`,...n)}}function pt(t,...e){if(Zt.logLevel<=ne.ERROR){const n=e.map(la);Zt.error(`Firestore (${On}): ${t}`,...n)}}function $c(t,...e){if(Zt.logLevel<=ne.WARN){const n=e.map(la);Zt.warn(`Firestore (${On}): ${t}`,...n)}}function la(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function ie(t,e){t||K()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Ye{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class j_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ie(typeof s.accessToken=="string"),new V_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Le(e)}}class q_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class z_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new q_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.A=n.token,new H_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=G_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function wn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new ve(0,0))}static max(){return new W(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends fs{construct(e,n,s){return new le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new le(n)}static emptyPath(){return new le([])}}const W_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends fs{construct(e,n,s){return new De(e,n,s)}static isValidIdentifier(e){return W_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(le.fromString(e))}static fromName(e){return new M(le.fromString(e).popFirst(5))}static empty(){return new M(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new le(e.slice()))}}function Q_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new St(r,M.empty(),e)}function Y_(t){return new St(t.readTime,t.key,-1)}class St{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new St(W.min(),M.empty(),-1)}static max(){return new St(W.max(),M.empty(),-1)}}function X_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Z_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==J_)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ua.at=-1;class we{constructor(e,n){this.comparator=e,this.root=n||Ee.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sr(this.root,e,this.comparator,!0)}}class sr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ee.RED,this.left=r!=null?r:Ee.EMPTY,this.right=i!=null?i:Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ee(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ee.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ee(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lc(this.data.getIterator())}getIteratorFrom(e){return new Lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Lc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new tt([])}unionWith(e){let n=new _e(De.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ae(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ae(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(t){if(ie(!!t),typeof t=="string"){let e=0;const n=ew.exec(t);if(ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function In(t){return typeof t=="string"?Ae.fromBase64String(t):Ae.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ad(t){const e=t.mapValue.fields.__previous_value__;return od(e)?ad(e):e}function ps(t){const e=At(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}function ui(t){return t==null}function $r(t){return t===0&&1/t==-1/0}function nw(t){return typeof t=="number"&&Number.isInteger(t)&&!$r(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?od(t)?4:sw(t)?9007199254740991:10:K()}function it(t,e){if(t===e)return!0;const n=en(t);if(n!==en(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ps(t).isEqual(ps(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=At(s.timestampValue),o=At(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return In(s.bytesValue).isEqual(In(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=de(s.doubleValue),o=de(r.doubleValue);return i===o?$r(i)===$r(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return wn(t.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Mc(i)!==Mc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!it(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function ms(t,e){return(t.values||[]).find(n=>it(n,e))!==void 0}function bn(t,e){if(t===e)return 0;const n=en(t),s=en(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=de(r.integerValue||r.doubleValue),a=de(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xc(t.timestampValue,e.timestampValue);case 4:return xc(ps(t),ps(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=In(r),a=In(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(de(r.latitude),de(i.latitude));return o!==0?o:se(de(r.longitude),de(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===rr.mapValue&&i===rr.mapValue)return 0;if(r===rr.mapValue)return 1;if(i===rr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=se(a[u],l[u]);if(h!==0)return h;const d=bn(o[a[u]],c[l[u]]);if(d!==0)return d}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function xc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=At(t),s=At(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function mn(t){return fo(t)}function fo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=At(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?In(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=fo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fo(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function po(t){return!!t&&"integerValue"in t}function ha(t){return!!t&&"arrayValue"in t}function Uc(t){return!!t&&"nullValue"in t}function Fc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dr(t){return!!t&&"mapValue"in t}function Yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!dr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(n)}setAll(e){let n=De.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Yn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());dr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];dr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Pn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(Yn(this.value))}}function cd(t){const e=[];return Pn(t.fields,(n,s)=>{const r=new De([n]);if(dr(s)){const i=cd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ke(e,0,W.min(),W.min(),qe.empty(),0)}static newFoundDocument(e,n,s){return new ke(e,1,n,W.min(),s,0)}static newNoDocument(e,n){return new ke(e,2,n,W.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,W.min(),qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Vc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new rw(t,e,n,s,r,i,o)}function da(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+mn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ui(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>mn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>mn(s)).join(",")),e.ht=n}return e.ht}function iw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${mn(s.value)}`;var s}).join(", ")}]`),ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>mn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>mn(n)).join(",")),`Target(${e})`}function fa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!fw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jc(t.startAt,e.startAt)&&jc(t.endAt,e.endAt)}function go(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new ow(e,n,s):n==="array-contains"?new lw(e,s):n==="in"?new uw(e,s):n==="not-in"?new hw(e,s):n==="array-contains-any"?new dw(e,s):new xe(e,n,s)}static lt(e,n,s){return n==="in"?new aw(e,s):new cw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.ft(bn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ow extends xe{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class aw extends xe{constructor(e,n){super(e,"in",n),this.keys=ld("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cw extends xe{constructor(e,n){super(e,"not-in",n),this.keys=ld("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ld(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class lw extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ha(n)&&ms(n.arrayValue,this.value)}}class uw extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class hw extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class dw extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ms(this.value.arrayValue,s))}}class Mr{constructor(e,n){this.position=e,this.inclusive=n}}class Xn{constructor(e,n="asc"){this.field=e,this.dir=n}}function fw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function jc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!it(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function pw(t,e,n,s,r,i,o,a){return new hi(t,e,n,s,r,i,o,a)}function pa(t){return new hi(t)}function qc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function yw(t){return t.collectionGroup!==null}function ys(t){const e=G(t);if(e._t===null){e._t=[];const n=mw(e),s=gw(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Xn(n)),e._t.push(new Xn(De.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Xn(De.keyField(),i))}}}return e._t}function gt(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=Vc(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ys(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xn(i.field,o))}const s=e.endAt?new Mr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Mr(e.startAt.position,e.startAt.inclusive):null;e.wt=Vc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function mo(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function di(t,e){return fa(gt(t),gt(e))&&t.limitType===e.limitType}function ud(t){return`${da(gt(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${iw(gt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Bc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ys(n),s)||n.endAt&&!function(r,i,o){const a=Bc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ys(n),s))}(t,e)}function vw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hd(t){return(e,n)=>{let s=!1;for(const r of ys(t)){const i=_w(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function _w(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bn(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(e)?"-0":e}}function fd(t){return{integerValue:""+t}}function ww(t,e){return nw(e)?fd(e):dd(t,e)}/**
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
 */class fi{constructor(){this._=void 0}}function Iw(t,e,n){return t instanceof Lr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof vs?gd(t,e):t instanceof _s?md(t,e):function(s,r){const i=pd(s,r),o=zc(i)+zc(s.yt);return po(i)&&po(s.yt)?fd(o):dd(s.It,o)}(t,e)}function bw(t,e,n){return t instanceof vs?gd(t,e):t instanceof _s?md(t,e):n}function pd(t,e){return t instanceof xr?po(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Lr extends fi{}class vs extends fi{constructor(e){super(),this.elements=e}}function gd(t,e){const n=yd(e);for(const s of t.elements)n.some(r=>it(r,s))||n.push(s);return{arrayValue:{values:n}}}class _s extends fi{constructor(e){super(),this.elements=e}}function md(t,e){let n=yd(e);for(const s of t.elements)n=n.filter(r=>!it(r,s));return{arrayValue:{values:n}}}class xr extends fi{constructor(e,n){super(),this.It=e,this.yt=n}}function zc(t){return de(t.integerValue||t.doubleValue)}function yd(t){return ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Tw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof vs&&s instanceof vs||n instanceof _s&&s instanceof _s?wn(n.elements,s.elements,it):n instanceof xr&&s instanceof xr?it(n.yt,s.yt):n instanceof Lr&&s instanceof Lr}(t.transform,e.transform)}class Ew{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pi{}function vd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,nt.none()):new js(t.key,t.data,nt.none());{const n=t.data,s=qe.empty();let r=new _e(De.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new on(t.key,s,new tt(r.toArray()),nt.none())}}function kw(t,e,n){t instanceof js?function(s,r,i){const o=s.value.clone(),a=Kc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof on?function(s,r,i){if(!fr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Kc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(_d(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Jn(t,e,n,s){return t instanceof js?function(r,i,o,a){if(!fr(r.precondition,i))return o;const c=r.value.clone(),l=Gc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof on?function(r,i,o,a){if(!fr(r.precondition,i))return o;const c=Gc(r.fieldTransforms,a,i),l=i.data;return l.setAll(_d(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return fr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Sw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=pd(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Hc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wn(n,s,(r,i)=>Tw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends pi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class on extends pi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _d(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Kc(t,e,n){const s=new Map;ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,bw(o,a,n[r]))}return s}function Gc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Iw(i,o,e))}return s}class ma extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aw extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,ee;function Dw(t){switch(t){default:return K();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function wd(t){if(t===void 0)return pt("GRPC error has no .code"),b.UNKNOWN;switch(t){case he.OK:return b.OK;case he.CANCELLED:return b.CANCELLED;case he.UNKNOWN:return b.UNKNOWN;case he.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case he.INTERNAL:return b.INTERNAL;case he.UNAVAILABLE:return b.UNAVAILABLE;case he.UNAUTHENTICATED:return b.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case he.NOT_FOUND:return b.NOT_FOUND;case he.ALREADY_EXISTS:return b.ALREADY_EXISTS;case he.PERMISSION_DENIED:return b.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case he.ABORTED:return b.ABORTED;case he.OUT_OF_RANGE:return b.OUT_OF_RANGE;case he.UNIMPLEMENTED:return b.UNIMPLEMENTED;case he.DATA_LOSS:return b.DATA_LOSS;default:return K()}}(ee=he||(he={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return id(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new we(M.comparator);function mt(){return Nw}const Id=new we(M.comparator);function zn(...t){let e=Id;for(const n of t)e=e.insert(n.key,n);return e}function bd(t){let e=Id;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Bt(){return Zn()}function Td(){return Zn()}function Zn(){return new $n(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rw=new we(M.comparator),Ow=new _e(M.comparator);function Y(...t){let e=Ow;for(const n of t)e=e.add(n);return e}const Pw=new _e(se);function Ed(){return Pw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,n)),new gi(W.min(),s,Ed(),mt(),Y())}}class qs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new qs(Ae.EMPTY_BYTE_STRING,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class kd{constructor(e,n){this.targetId=e,this.At=n}}class Sd{constructor(e,n,s=Ae.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wc{constructor(){this.Rt=0,this.bt=Yc(),this.Pt=Ae.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Y(),n=Y(),s=Y();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new qs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Yc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class $w{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=mt(),this.qt=Qc(),this.Kt=new _e(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(go(i))if(s===0){const o=new M(i.path);this.jt(n,o,ke.newNoDocument(o,W.min()))}else ie(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&go(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,ke.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=Y();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new gi(e,n,this.Kt,this.Ut,s);return this.Ut=mt(),this.qt=Qc(),this.Kt=new _e(se),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Wc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new _e(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Wc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Qc(){return new we(M.comparator)}function Yc(){return new we(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xw{constructor(e,n){this.databaseId=e,this.gt=n}}function Ur(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Uw(t,e){return Ur(t,e.toTimestamp())}function ht(t){return ie(!!t),W.fromTimestamp(function(e){const n=At(e);return new ve(n.seconds,n.nanos)}(t))}function ya(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cd(t){const e=le.fromString(t);return ie(Rd(e)),e}function vo(t,e){return ya(t.databaseId,e.path)}function zi(t,e){const n=Cd(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Dd(n))}function _o(t,e){return ya(t.databaseId,e)}function Fw(t){const e=Cd(t);return e.length===4?le.emptyPath():Dd(e)}function wo(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Dd(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xc(t,e,n){return{name:vo(t,e),fields:n.value.mapValue.fields}}function Vw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(ie(l===void 0||typeof l=="string"),Ae.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Ae.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:wd(c.code);return new U(l,c.message||"")}(o);n=new Sd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=zi(t,s.document.name),i=ht(s.document.updateTime),o=new qe({mapValue:{fields:s.document.fields}}),a=ke.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new pr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=zi(t,s.document),i=s.readTime?ht(s.readTime):W.min(),o=ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new pr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=zi(t,s.document),i=s.removedTargetIds||[];n=new pr([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Cw(r),o=s.targetId;n=new kd(o,i)}}return n}function Bw(t,e){let n;if(e instanceof js)n={update:Xc(t,e.key,e.value)};else if(e instanceof ma)n={delete:vo(t,e.key)};else if(e instanceof on)n={update:Xc(t,e.key,e.data),updateMask:Xw(e.fieldMask)};else{if(!(e instanceof Aw))return K();n={verify:vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Lr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _s)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Uw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function jw(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ht(s.updateTime):ht(r);return i.isEqual(W.min())&&(i=ht(r)),new Ew(i,s.transformResults||[])}(n,e))):[]}function qw(t,e){return{documents:[_o(t,e.path)]}}function zw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Fc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NAN"}};if(Uc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Fc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NOT_NAN"}};if(Uc(h.value))return{unaryFilter:{field:un(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(h.field),op:Ww(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:un(u.field),direction:Gw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ui(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Hw(t){let e=Fw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Nd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xn(fn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ui(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Mr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Mr(d,h)}(n.endAt)),pw(e,r,o,i,a,"F",c,l)}function Kw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nd(t){return t?t.unaryFilter!==void 0?[Yw(t)]:t.fieldFilter!==void 0?[Qw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Nd(e)).reduce((e,n)=>e.concat(n)):K():[]}function Gw(t){return Mw[t]}function Ww(t){return Lw[t]}function un(t){return{fieldPath:t.canonicalString()}}function fn(t){return De.fromServerFormat(t.fieldPath)}function Qw(t){return xe.create(fn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fn(t.unaryFilter.field);return xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fn(t.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fn(t.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fn(t.unaryFilter.field);return xe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function Xw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Jn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Jn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Td();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=vd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(n,s)=>Hc(n,s))&&wn(this.baseMutations,e.baseMutations,(n,s)=>Hc(n,s))}}class va{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ie(e.mutations.length===s.length);let r=Rw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new va(e,n,s,r)}}/**
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
 */class Zw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ht{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.re=e}}function t0(t){const e=Hw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.Ye=new s0}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(St.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(St.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class s0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new _e(le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class r0{constructor(){this.changes=new $n(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class i0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Jn(s.mutation,r,tt.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=Bt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=zn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Bt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=mt();const o=Zn(),a=Zn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof on)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Jn(u.mutation,l,u.mutation.getFieldMask(),ve.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new i0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Zn();let r=new we((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||tt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Y()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Td();u.forEach(d=>{if(!i.has(d)){const p=vd(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(Bt());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Y())).next(u=>({batchId:a,changes:bd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=zn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=zn();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new hi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ke.newInvalidDocument(l)))});let o=zn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Jn(l.mutation,c,tt.empty(),ve.now()),ga(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:t0(s.bundledQuery),readTime:ht(s.readTime)}}(n)),I.resolve()}}/**
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
 */class c0{constructor(){this.overlays=new we(M.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Bt();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=Bt(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Bt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Bt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zw(n,s));let i=this.es.get(n);i===void 0&&(i=Y(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.ns=new _e(Ie.ss),this.rs=new _e(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new M(new le([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new le([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=Y();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(Ie.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(se);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new M(i),0);let a=new _e(se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ie(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.Es=e,this.docs=new we(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let s=mt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=mt();const i=new M(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||X_(Y_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new h0(this)}getSize(e){return I.resolve(this.size)}}class h0 extends r0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.persistence=e,this.Rs=new $n(n=>da(n),fa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _a,this.targetCount=0,this.vs=Tn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Tn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ua(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new d0(this),this.indexManager=new n0,this.remoteDocumentCache=function(s){return new u0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new e0(n),this.Ns=new a0(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new c0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new l0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new p0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class p0 extends Z_{constructor(e){super(),this.currentSequenceNumber=e}}class wa{constructor(e){this.persistence=e,this.Fs=new _a,this.$s=null}static Bs(e){return new wa(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=M.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ia(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(qc(n))return I.resolve(null);let s=gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=mo(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,mo(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return qc(n)||r.isEqual(W.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Pc()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yo(n)),this.Bi(e,o,n,Q_(r,-1)))})}Fi(e,n){let s=new _e(hd(e));return n.forEach((r,i)=>{ga(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Pc()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",yo(n)),this.Ni.getDocumentsMatchingQuery(e,n,St.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new we(se),this.qi=new $n(i=>da(i),fa),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new o0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function y0(t,e,n,s){return new m0(t,e,n,s)}async function Od(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Y();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function v0(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=I.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const m=c.docVersions.get(p);ie(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Pd(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function _0(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ae.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,m,T){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=mt(),l=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(w0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(W.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function w0(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=mt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function I0(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function b0(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Ht(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Io(t,e,n){const s=G(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bs(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Jc(t,e,n){const s=G(t);let r=W.min(),i=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:Y())).next(a=>(T0(s,vw(e),a),{documents:a,Hi:i})))}function T0(t,e,n){let s=W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Zc{constructor(){this.activeTargetIds=Ed()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E0{constructor(){this.Lr=new Zc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Zc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw $c("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=S0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new F_;a.listenOnce(L_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qi.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case qi.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(g)>=0?g:b.UNKNOWN}(h.status);o(new U(d,h.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=$_(),o=M_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new U_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new A0({Hr:g=>{h?$("Connection","Not sending because WebChannel is closed:",g):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,m,T)=>{g.listen(m,A=>{try{T(A)}catch(O){setTimeout(()=>{throw O},0)}})};return p(l,nr.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),p(l,nr.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.io())}),p(l,nr.EventType.ERROR,g=>{h||(h=!0,$c("Connection","WebChannel transport errored:",g),d.io(new U(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,nr.EventType.MESSAGE,g=>{var m;if(!h){const T=g.data[0];ie(!!T);const A=T,O=A.error||((m=A[0])===null||m===void 0?void 0:m.error);if(O){$("Connection","WebChannel received error:",O);const S=O.status;let L=function(v){const P=he[v];if(P!==void 0)return wd(P)}(S),k=O.message;L===void 0&&(L=b.INTERNAL,k="Unknown error status: "+S+" with message "+O.message),h=!0,d.io(new U(L,k)),l.close()}else $("Connection","WebChannel received:",T),d.ro(T)}}),p(o,x_.STAT_EVENT,g=>{g.stat===Rc.PROXY?$("Connection","Detected buffering proxy"):g.stat===Rc.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Hi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return new xw(t,!0)}class $d{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new $d(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new U(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class D0 extends Md{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Vw(this.It,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?ht(i.readTime):W.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=wo(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=go(a)?{documents:qw(r,a)}:{query:zw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ad(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Ur(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=Kw(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=wo(this.It),n.removeTarget=e,this.Bo(n)}}class N0 extends Md{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=jw(e.writeResults,e.commitTime),s=ht(e.commitTime);return this.listener.Zo(s,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=wo(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Bw(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(b.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class O0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(pt(n),this.ou=!1):$("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{an(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c._u.add(4),await zs(c),c.gu.set("Unknown"),c._u.delete(4),await yi(c)}(this))})}),this.gu=new O0(s,r)}}async function yi(t){if(an(t))for(const e of t.wu)await e(!0)}async function zs(t){for(const e of t.wu)await e(!1)}function Ld(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ea(n)?Ta(n):Mn(n).ko()&&ba(n,e))}function xd(t,e){const n=G(t),s=Mn(n);n.du.delete(e),s.ko()&&Ud(n,e),n.du.size===0&&(s.ko()?s.Fo():an(n)&&n.gu.set("Unknown"))}function ba(t,e){t.yu.Ot(e.targetId),Mn(t).zo(e)}function Ud(t,e){t.yu.Ot(e),Mn(t).Ho(e)}function Ta(t){t.yu=new $w({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Mn(t).start(),t.gu.uu()}function Ea(t){return an(t)&&!Mn(t).No()&&t.du.size>0}function an(t){return G(t)._u.size===0}function Fd(t){t.yu=void 0}async function $0(t){t.du.forEach((e,n)=>{ba(t,e)})}async function M0(t,e){Fd(t),Ea(t)?(t.gu.hu(e),Ta(t)):t.gu.set("Unknown")}async function L0(t,e,n){if(t.gu.set("Online"),e instanceof Sd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Fr(t,s)}else if(e instanceof pr?t.yu.Gt(e):e instanceof kd?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(W.min()))try{const s=await Pd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ae.EMPTY_BYTE_STRING,c.snapshotVersion)),Ud(r,a);const l=new Ht(c.target,a,1,c.sequenceNumber);ba(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Fr(t,s)}}async function Fr(t,e,n){if(!Bs(e))throw e;t._u.add(1),await zs(t),t.gu.set("Offline"),n||(n=()=>Pd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await yi(t)})}function Vd(t,e){return e().catch(n=>Fr(t,n,e))}async function vi(t){const e=G(t),n=Ct(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;x0(e);)try{const r=await I0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,U0(e,r)}catch(r){await Fr(e,r)}Bd(e)&&jd(e)}function x0(t){return an(t)&&t.fu.length<10}function U0(t,e){t.fu.push(e);const n=Ct(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Bd(t){return an(t)&&!Ct(t).No()&&t.fu.length>0}function jd(t){Ct(t).start()}async function F0(t){Ct(t).eu()}async function V0(t){const e=Ct(t);for(const n of t.fu)e.Xo(n.mutations)}async function B0(t,e,n){const s=t.fu.shift(),r=va.from(s,e,n);await Vd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await vi(t)}async function j0(t,e){e&&Ct(t).Yo&&await async function(n,s){if(r=s.code,Dw(r)&&r!==b.ABORTED){const i=n.fu.shift();Ct(n).Oo(),await Vd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vi(n)}var r}(t,e),Bd(t)&&jd(t)}async function tl(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=an(n);n._u.add(3),await zs(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await yi(n)}async function q0(t,e){const n=G(t);e?(n._u.delete(2),await yi(n)):e||(n._u.add(2),await zs(n),n.gu.set("Unknown"))}function Mn(t){return t.pu||(t.pu=function(e,n,s){const r=G(e);return r.su(),new D0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:$0.bind(null,t),Zr:M0.bind(null,t),Wo:L0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Ea(t)?Ta(t):t.gu.set("Unknown")):(await t.pu.stop(),Fd(t))})),t.pu}function Ct(t){return t.Iu||(t.Iu=function(e,n,s){const r=G(e);return r.su(),new N0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:F0.bind(null,t),Zr:j0.bind(null,t),tu:V0.bind(null,t),Zo:B0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await vi(t)):(await t.Iu.stop(),t.fu.length>0&&($("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ka(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Bs(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=zn(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class nl{constructor(){this.Tu=new we(M.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class En{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new En(e,n,yn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&di(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.Au=void 0,this.listeners=[]}}class H0{constructor(){this.queries=new $n(e=>ud(e),di),this.onlineState="Unknown",this.Ru=new Set}}async function K0(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new z0),r)try{i.Au=await n.onListen(s)}catch(o){const a=Sa(o,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Aa(n)}async function G0(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function W0(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Aa(n)}function Q0(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Aa(t){t.Ru.forEach(e=>{e.next()})}class Y0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new En(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.key=e}}class zd{constructor(e){this.key=e}}class X0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Y(),this.mutatedKeys=Y(),this.Ku=hd(e),this.Gu=new yn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new nl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ga(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),T=!0):this.zu(d,p)||(s.track({type:2,doc:p}),T=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),T=!0):d&&!p&&(s.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(p?(o=o.add(p),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new En(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new nl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Y(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new zd(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new qd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=Y();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return En.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class J0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Z0{constructor(e){this.key=e,this.ec=!1}}class eI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new $n(a=>ud(a),di),this.ic=new Map,this.rc=new Set,this.oc=new we(M.comparator),this.uc=new Map,this.cc=new _a,this.ac={},this.hc=new Map,this.lc=Tn.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function tI(t,e){const n=hI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await b0(n.localStore,gt(e));n.isPrimaryClient&&Ld(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await nI(n,e,s,a==="current")}return r}async function nI(t,e,n,s){t.dc=(u,h,d)=>async function(p,g,m,T){let A=g.view.ju(m);A.$i&&(A=await Jc(p.localStore,g.query,!1).then(({documents:L})=>g.view.ju(L,A)));const O=T&&T.targetChanges.get(g.targetId),S=g.view.applyChanges(A,p.isPrimaryClient,O);return rl(p,g.targetId,S.Yu),S.snapshot}(t,u,h,d);const r=await Jc(t.localStore,e,!0),i=new X0(e,r.Hi),o=i.ju(r.documents),a=qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);rl(t,n,c.Yu);const l=new J0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function sI(t,e){const n=G(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!di(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Io(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),xd(n.remoteStore,s.targetId),bo(n,s.targetId)}).catch(Vs)):(bo(n,s.targetId),await Io(n.localStore,s.targetId,!0))}async function rI(t,e,n){const s=dI(t);try{const r=await function(i,o){const a=G(i),c=ve.now(),l=o.reduce((d,p)=>d.add(p.key),Y());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=mt(),g=Y();return a.Gi.getEntries(d,l).next(m=>{p=m,p.forEach((T,A)=>{A.isValidDocument()||(g=g.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{u=m;const T=[];for(const A of o){const O=Sw(A,u.get(A.key).overlayedDocument);O!=null&&T.push(new on(A.key,O,cd(O.value.mapValue),nt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,T,o)}).next(m=>{h=m;const T=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,T)})}).then(()=>({batchId:h.batchId,changes:bd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new we(se)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Hs(s,r.changes),await vi(s.remoteStore)}catch(r){const i=Sa(r,"Failed to persist write");n.reject(i)}}async function Hd(t,e){const n=G(t);try{const s=await _0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ie(o.ec):r.removedDocuments.size>0&&(ie(o.ec),o.ec=!1))}),await Hs(n,s,e)}catch(s){await Vs(s)}}function sl(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Aa(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iI(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new we(M.comparator);o=o.insert(i,ke.newNoDocument(i,W.min()));const a=Y().add(i),c=new gi(W.min(),new Map,new _e(se),o,a);await Hd(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ca(s)}else await Io(s.localStore,e,!1).then(()=>bo(s,e,n)).catch(Vs)}async function oI(t,e){const n=G(t),s=e.batch.batchId;try{const r=await v0(n.localStore,e);Gd(n,s,null),Kd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hs(n,r)}catch(r){await Vs(r)}}async function aI(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Gd(s,e,n),Kd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hs(s,r)}catch(r){await Vs(r)}}function Kd(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Gd(t,e,n){const s=G(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||Wd(t,s)})}function Wd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(xd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ca(t))}function rl(t,e,n){for(const s of n)s instanceof qd?(t.cc.addReference(s.key,e),cI(t,s)):s instanceof zd?($("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Wd(t,s.key)):K()}function cI(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||($("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ca(t))}function Ca(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(le.fromString(e)),s=t.lc.next();t.uc.set(s,new Z0(n)),t.oc=t.oc.insert(n,s),Ld(t.remoteStore,new Ht(gt(pa(n.path)),s,2,ua.at))}}async function Hs(t,e,n){const s=G(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ia.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Bs(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,g)}}}(s.localStore,i))}async function lI(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Od(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hs(n,s.ji)}}function uI(t,e){const n=G(t),s=n.uc.get(e);if(s&&s.ec)return Y().add(s.key);{let r=Y();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function hI(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iI.bind(null,e),e.nc.Wo=W0.bind(null,e.eventManager),e.nc._c=Q0.bind(null,e.eventManager),e}function dI(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aI.bind(null,e),e}class fI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=mi(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return y0(this.persistence,new g0,e.initialUser,this.It)}gc(e){return new f0(wa.Bs,this.It)}mc(e){return new E0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lI.bind(null,this.syncEngine),await q0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new H0}createDatastore(e){const n=mi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new C0(r));var r;return function(i,o,a,c){return new R0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>sl(this.syncEngine,a,0),o=el.C()?new el:new k0,new P0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new eI(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);$("RemoteStore","RemoteStore shutting down."),n._u.add(5),await zs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=rd.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yI(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Od(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _I(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>tl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>tl(e.remoteStore,i)),t.onlineComponents=e}async function _I(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await yI(t,new fI)),t.offlineComponents}async function Qd(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await vI(t,new pI)),t.onlineComponents}function wI(t){return Qd(t).then(e=>e.syncEngine)}async function il(t){const e=await Qd(t),n=e.eventManager;return n.onListen=tI.bind(null,e.syncEngine),n.onUnlisten=sI.bind(null,e.syncEngine),n}const ol=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function II(t,e,n,s){if(e===!0&&s===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function al(t){if(!M.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cl(t){if(M.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,II("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ll({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ll(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B_;switch(n.type){case"gapi":const s=n.client;return new z_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ol.get(e);n&&($("ComponentProvider","Removing Datastore"),ol.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class _i{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class kt extends _i{constructor(e,n,s){super(e,n,pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new M(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function bI(t,e,...n){if(t=Pe(t),Yd("collection","path",e),t instanceof Na){const s=le.fromString(e,...n);return cl(s),new kt(t,null,s)}{if(!(t instanceof Be||t instanceof kt))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return cl(s),new kt(t.firestore,null,s)}}function ir(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=rd.R()),Yd("doc","path",e),t instanceof Na){const s=le.fromString(e,...n);return al(s),new Be(t,null,new M(s))}{if(!(t instanceof Be||t instanceof kt))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return al(s),new Be(t.firestore,t instanceof kt?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new $d(this,"async_queue_retry"),this.jc=()=>{const n=Hi();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Hi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Hi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new zt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Bs(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=ka.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&K()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ul(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ws extends Na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new TI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jd(this),this._firestoreClient.terminate()}}function EI(t,e){const n=typeof t=="object"?t:Ao(),s=typeof t=="string"?t:e||"(default)";return sn(n,"firestore").getImmediate({identifier:s})}function Xd(t){return t._firestoreClient||Jd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new tw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new mI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ra{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Ae.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=/^__.*__$/;class SI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}function ef(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Pa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Pa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Vr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(ef(this.na)&&kI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class AI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||mi(e)}fa(e,n,s,r=!1){return new Pa({na:e,methodName:n,la:s,path:De.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function CI(t){const e=t._freezeSettings(),n=mi(t._databaseId);return new AI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DI(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);rf("Data must be an object, but it was:",o,s);const a=nf(s,o);let c,l;if(i.merge)c=new tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=NI(e,h,n);if(!o.contains(d))throw new U(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OI(u,d)||u.push(d)}c=new tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new SI(new qe(a),c,l)}function tf(t,e){if(sf(t=Pe(t)))return rf("Unsupported field value:",e,t),nf(t,e);if(t instanceof Zd)return function(n,s){if(!ef(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=tf(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ww(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:Ur(s.It,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ur(s.It,r)}}if(n instanceof Oa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof kn)return{bytesValue:Ad(s.It,n._byteString)};if(n instanceof Be){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Da(n)}`)}(t,e)}function nf(t,e){const n={};return id(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(t,(s,r)=>{const i=tf(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function sf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Oa||t instanceof kn||t instanceof Be||t instanceof Zd)}function rf(t,e,n){if(!sf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Da(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function NI(t,e,n){if((e=Pe(e))instanceof Ra)return e._internalPath;if(typeof e=="string")return of(t,e);throw Vr("Field path arguments must be of type string or ",t,!1,void 0,n)}const RI=new RegExp("[~\\*/\\[\\]]");function of(t,e,n){if(e.search(RI)>=0)throw Vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ra(...e.split("."))._internalPath}catch{throw Vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(b.INVALID_ARGUMENT,a+t+c)}function OI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PI extends af{data(){return super.data()}}function cf(t,e){return typeof e=="string"?of(t,e):e instanceof Ra?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lf extends af{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gr extends lf{data(e={}){return super.data(e)}}class $I{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Hn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new gr(this._firestore,this._userDataWriter,s.key,s,new Hn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:MI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function MI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function xI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{convertValue(e,n="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return Pn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Oa(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ad(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const n=At(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=le.fromString(e);ie(Rd(s));const r=new gs(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class uf extends UI{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function hl(t,e,n){t=vn(t,Be);const s=vn(t.firestore,ws),r=FI(t.converter,e,n);return hf(s,[DI(CI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,nt.none())])}function VI(t){return hf(vn(t.firestore,ws),[new ma(t._key,nt.none())])}function dl(t,...e){var n,s,r;t=Pe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ul(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ul(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Be)l=vn(t.firestore,ws),u=pa(t._key.path),c={next:h=>{e[o]&&e[o](BI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,_i);l=vn(h.firestore,ws),u=h._query;const d=new uf(l);c={next:p=>{e[o]&&e[o](new $I(l,d,h,p))},error:e[o+1],complete:e[o+2]},LI(t._query)}return function(h,d,p,g){const m=new gI(g),T=new Y0(d,m,p);return h.asyncQueue.enqueueAndForget(async()=>K0(await il(h),T)),()=>{m.Rc(),h.asyncQueue.enqueueAndForget(async()=>G0(await il(h),T))}}(Xd(l),u,a,c)}function hf(t,e){return function(n,s){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>rI(await wI(n),s,r)),r.promise}(Xd(t),e)}function BI(t,e,n){const s=n.docs.get(e._key),r=new uf(t);return new lf(t,r,e._key,s,new Hn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){On=n})(Ts),rt(new We("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ws(new j_(n.getProvider("auth-internal")),new K_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),He(Oc,"3.5.0",t),He(Oc,"3.5.0","esm2017")})();const jI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},df=fg(jI),$t=vy(df);am($t,Tu);const Un=EI(df);Ov();const qI=new ot,zI=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Cn(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return wu($t,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return im($t,r,i)},async signInWithEmail(r,i){return om($t,r,i)},async signInWithGoogle(){return Rm($t,qI)},async signOut(){return cm($t)}}},HI=zI(),fl="/assets/default-user.a40c52dd.png";function KI(t){let e;return{c(){e=_("i"),f(e,"class","codicon codicon-account")},m(n,s){N(n,e,s)},p:D,d(n){n&&C(e)}}}function GI(t){let e,n;return{c(){var s;e=_("img"),f(e,"class","profile-picture svelte-likwap"),es(e.src,n=(s=t[0].user.photoURL)!=null?s:fl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){N(s,e,r)},p(s,r){var i;r&1&&!es(e.src,n=(i=s[0].user.photoURL)!=null?i:fl)&&f(e,"src",n)},d(s){s&&C(e)}}}function WI(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,T,A,O;o=new Jf({});function S(v,P){return v[0].loggedIn?GI:KI}let L=S(t),k=L(t);return{c(){e=_("header"),n=_("div"),s=_("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=x(),i=_("a"),q(o.$$.fragment),a=x(),c=_("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=x(),u=_("nav"),h=_("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=x(),p=_("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',g=x(),m=_("button"),k.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-likwap"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-likwap"),f(c,"title","Documentation"),f(c,"class","svelte-likwap"),f(n,"class","svelte-likwap"),f(h,"title","Search"),f(h,"class","svelte-likwap"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-likwap"),f(m,"title","Account"),f(m,"class","svelte-likwap"),f(u,"class","svelte-likwap"),f(e,"role","navigation"),f(e,"class","svelte-likwap")},m(v,P){N(v,e,P),y(e,n),y(n,s),y(n,r),y(n,i),F(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,g),y(u,m),k.m(m,null),T=!0,A||(O=[Q(c,"click",t[1]),Q(h,"click",t[2]),Q(p,"click",t[3]),Q(m,"click",t[4])],A=!0)},p(v,[P]){L===(L=S(v))&&k?k.p(v,P):(k.d(1),k=L(v),k&&(k.c(),k.m(m,null)))},i(v){T||(w(o.$$.fragment,v),T=!0)},o(v){E(o.$$.fragment,v),T=!1},d(v){v&&C(e),V(o),k.d(),A=!1,Fe(O)}}}function QI(t,e,n){let s;return Je(t,HI,c=>n(0,s=c)),[s,()=>Lt.navigateTo("help"),()=>Lt.navigateTo("search"),()=>Lt.navigateTo("settings"),()=>Lt.navigateTo("account")]}class YI extends Z{constructor(e){super(),J(this,e,QI,WI,X,{})}}const XI="modulepreload",JI=function(t){return"/"+t},pl={},wi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=JI(r),r in pl)return;pl[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":XI,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};let ff="adaptable";const ZI=Object.freeze({adaptable:"https://rule34-json-api.adaptable.app/v2"}),jE=Object.freeze({adaptable:"Adaptable"}),qE=()=>ff,zE=t=>{if(!(t in ZI))throw new TypeError(`Attempted to set unexpected backend: ${t}`);ff=t},Ks=t=>typeof t=="string"&&t!=="",Ii=t=>typeof t=="number"&&t>=0;class bi{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,T,A,O,S,L,k,v,P,pe,ue,te){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=g,this.preview_height=m,this.rating=T,this.sample_height=A,this.sample_width=O,this.score=S,this.source=L,this.status=k,this.tags=v,this.width=P,this.comments_url=pe,this.owner_url=ue,this.type=te,Object.freeze(this)}static from(e){return new bi(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const eb=t=>Array.isArray(t)&&t.every(e=>e instanceof bi);class tb{constructor(e,n){if(!Ii(e))throw new TypeError("Invalid count passed to Page constructor");if(!eb(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const nb=Object.freeze(["id","score"]),sb=t=>nb.includes(t),mr=Object.freeze(["+","-","~"]),Ti=t=>mr.includes(t),pf=t=>{if(!Ti(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(mr.indexOf(t)+1)%mr.length;return mr[n]},rb=Object.freeze({"+":"","-":"-","~":""}),ib=t=>{if(!Ti(t))throw TypeError("Invalid modifier passed to serializeModifier");return rb[t]};class Ei{constructor(e,n){if(!Ti(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Ks(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${ib(this.modifier)}${encodeURIComponent(this.name)}`}}const gf=(t,e)=>{if(!mf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!ob(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},mf=t=>{try{return new URL(t),!0}catch{return!1}},ob=t=>t===null||t instanceof AbortController,yf=20;let ab=null;const cb=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},lb=async(t,e,n,s)=>{hb(t,e,n,s);const r=mb(e,n,s),i=await gf(yb(t,r),ab);cb(i);const o=await i.text(),c=new DOMParser().parseFromString(o,"text/xml"),l=Number(c.getElementsByTagName("posts")[0].getAttribute("count")),u=[];for(const h of c.getElementsByTagName("post"))u.push(ub(h.attributes));return new tb(l,u)},ub=t=>{const e=t.getNamedItem("height").value,n=t.getNamedItem("score").value,s=t.getNamedItem("file_url").value,r=t.getNamedItem("parent_id").value,i=t.getNamedItem("sample_url").value,o=t.getNamedItem("sample_width").value,a=t.getNamedItem("sample_height").value,c=t.getNamedItem("preview_url").value,l=t.getNamedItem("rating").value,u=t.getNamedItem("tags").value,h=t.getNamedItem("id").value,d=t.getNamedItem("width").value,p=t.getNamedItem("change").value,g=t.getNamedItem("md5").value,m=t.getNamedItem("creator_id").value,T=t.getNamedItem("has_children").value,A=t.getNamedItem("created_at").value,O=t.getNamedItem("status").value,S=t.getNamedItem("source").value,L=t.getNamedItem("has_notes").value,k=t.getNamedItem("has_comments").value,v=t.getNamedItem("preview_width").value,P=t.getNamedItem("preview_height").value;return new bi(c,i,s,A,Boolean(T),g,Number(e),Number(h),Number(p),Number(m),Boolean(L),Boolean(k),r?Number(r):null,Number(v),Number(P),l,Number(a),Number(o),Number(n),S,O,u.split(" ").filter((pe,ue,te)=>pe!==""&&te.indexOf(pe)==ue),Number(d),"","",s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},hb=(t,e,n,s)=>{if(!db(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!fb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!sb(n))throw new TypeError("Invalid sort property passed to getPage");if(!pb(s))throw new TypeError("Invalid minimum score passed to getPage")},db=t=>typeof t=="number"&&t>=0,fb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof Ei)),pb=t=>typeof t=="number"&&t>=0,gb=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},mb=(t,e,n)=>{const s=gb(t),r=[...gl([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${gl(s["~"]).join(" ~ ")} )`},gl=t=>t.map(e=>e.serialize()),yb=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=${yf}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},vb=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),vf=t=>vb.includes(t);class Is{constructor(e,n,s,r){if(!Ti(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Ks(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!Ii(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!vf(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new Ei(this.modifier,this.name)}}class _f{constructor(e,n,s){if(!Ks(e))throw TypeError("Invalid name passed to Tag constructor");if(!Ii(n))throw TypeError("Invalid count passed to Tag constructor");if(!vf(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new Is(e,this.name,this.count,this.type)}}let _b=null;const wf=async(t,e,n=20)=>{const s="https://api.rule34.xxx/autocomplete.php?q=",r=t.replaceAll(" ","_"),i=await gf(`${s}${r}`,_b);if(i.ok){const o=await i.json();if(Array.isArray(o)){if(o.length==0)throw new Error("No tags found");return o.map(a=>new _f(a.value,Number(a.label.substring(a.label.lastIndexOf("(")+1,a.label.length-1)),"ambiguous"))}else throw o.message?new Error(o.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")};class If{constructor(e,n,s){if(!Ks(e))throw new TypeError("Invalid name passed to Supertag");if(!wb(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const wb=t=>Array.isArray(t)&&t.every(e=>e instanceof Ei),Ib=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Cn(t);let s,r=null,i=null;return wu($t,async o=>{s=o,o?r=dl(ir(Un,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=xI(bI(Un,`users/${o.uid}/supertags`));i==null||i(),i=dl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new If(d.id,p.description,Object.entries(p.tags).map(g=>new Ei(g[1],g[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return hl(ir(Un,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return VI(ir(Un,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return hl(ir(Un,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},To=Ib();function bb(t){let e,n,s,r;return{c(){e=_("button"),n=ge(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){N(i,e,o),y(e,n),s||(r=Q(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Ue(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:D,o:D,d(i){i&&C(e),s=!1,r()}}}function Tb(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Qe(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class bf extends Z{constructor(e){super(),J(this,e,Tb,bb,X,{text:0,title:1,disabled:2})}}function Gs(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t(e))}}const Eb=Intl.NumberFormat("en",{notation:"compact"}),Dt=t=>{if(!Ii(t))throw new TypeError("Invalid value passed to formatCount");return Eb.format(t)};function Sn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const ml=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function kb(t){let e,n;return{c(){e=_("i"),f(e,"class",n=`codicon codicon-${ml[t[0]]}`)},m(s,r){N(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${ml[s[0]]}`)&&f(e,"class",n)},i:D,o:D,d(s){s&&C(e)}}}function Sb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class Tf extends Z{constructor(e){super(),J(this,e,Sb,kb,X,{type:0})}}const yl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),vl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),_l=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Ab(t){let e,n,s,r=Sn(t[0].name)+"",i,o,a=Dt(t[0].count)+"",c,l,u,h,d,p;return n=new Tf({props:{type:t[0].type}}),{c(){e=_("li"),q(n.$$.fragment),s=x(),i=ge(r),o=ge(`
  (`),c=ge(a),l=ge(")"),f(e,"class",u=st(_l[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),ze(e,"no-icon",t[0].type==="general")},m(g,m){N(g,e,m),F(n,e,null),y(e,s),y(e,i),y(e,o),y(e,c),y(e,l),h=!0,d||(p=[Q(e,"click",t[2]),Q(e,"contextmenu",Br(t[3]))],d=!0)},p(g,[m]){const T={};m&1&&(T.type=g[0].type),n.$set(T),(!h||m&1)&&r!==(r=Sn(g[0].name)+"")&&Ue(i,r),(!h||m&1)&&a!==(a=Dt(g[0].count)+"")&&Ue(c,a),(!h||m&1&&u!==(u=st(_l[g[0].modifier])+" svelte-13vl0re"))&&f(e,"class",u),(!h||m&1)&&ze(e,"no-icon",g[0].type==="general")},i(g){h||(w(n.$$.fragment,g),h=!0)},o(g){E(n.$$.fragment,g),h=!1},d(g){g&&C(e),V(n),d=!1,Fe(p)}}}function Cb(t,e,n){let{tag:s}=e;const r=Qe(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Ef extends Z{constructor(e){super(),J(this,e,Cb,Ab,X,{tag:0})}}function wl(t,e,n){const s=t.slice();return s[9]=e[n],s}function Il(t){let e,n;return e=new Ef({props:{tag:t[9]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Db(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,T,A,O,S,L,k,v,P,pe,ue=t[2],te=[];for(let H=0;H<ue.length;H+=1)te[H]=Il(wl(t,ue,H));const Ws=H=>E(te[H],1,1,()=>{te[H]=null});return k=new bf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),k.$on("click",t[8]),{c(){e=_("dialog"),n=_("h3"),n.textContent="Create Supertag",s=x(),r=_("i"),i=x(),o=_("div"),a=_("label"),a.textContent="Name",c=x(),l=_("input"),u=x(),h=_("div"),d=_("label"),d.textContent="Description",p=x(),g=_("textarea"),m=x(),T=_("div"),A=_("span"),A.textContent="Tags",O=x(),S=_("ol");for(let H=0;H<te.length;H+=1)te[H].c();L=x(),q(k.$$.fragment),f(r,"tabindex","0"),f(r,"class",st("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(g,"type","text"),f(g,"placeholder","Short description"),f(g,"id","supertag-description"),f(g,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(A,"class","svelte-ax50wm"),f(S,"class","svelte-ax50wm"),f(T,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(H,ae){N(H,e,ae),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),Tt(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,g),Tt(g,t[1]),y(e,m),y(e,T),y(T,A),y(T,O),y(T,S);for(let re=0;re<te.length;re+=1)te[re].m(S,null);y(e,L),F(k,e,null),v=!0,P||(pe=[Q(r,"click",t[5]),Q(r,"keyup",Gs(t[5])),Q(l,"input",t[6]),Q(g,"input",t[7])],P=!0)},p(H,[ae]){if(ae&1&&l.value!==H[0]&&Tt(l,H[0]),ae&2&&Tt(g,H[1]),ae&4){ue=H[2];let Te;for(Te=0;Te<ue.length;Te+=1){const Ln=wl(H,ue,Te);te[Te]?(te[Te].p(Ln,ae),w(te[Te],1)):(te[Te]=Il(Ln),te[Te].c(),w(te[Te],1),te[Te].m(S,null))}for(me(),Te=ue.length;Te<te.length;Te+=1)Ws(Te);ye()}const re={};ae&8&&(re.title=H[3]?"Click to create supertag":"Enter a valid name to continue"),ae&8&&(re.disabled=!H[3]),k.$set(re)},i(H){if(!v){for(let ae=0;ae<ue.length;ae+=1)w(te[ae]);w(k.$$.fragment,H),v=!0}},o(H){te=te.filter(Boolean);for(let ae=0;ae<te.length;ae+=1)E(te[ae]);E(k.$$.fragment,H),v=!1},d(H){H&&C(e),An(te,H),V(k),P=!1,Fe(pe)}}}function Nb(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Qe(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new If(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Ks(r))},[r,i,o,s,a,c,l,u,h]}class Rb extends Z{constructor(e){super(),J(this,e,Nb,Db,X,{name:0,description:1,tags:2})}}function Ob(t){let e,n,s,r;return{c(){e=_("i"),f(e,"title",t[1]),f(e,"class",n=st(`codicon codicon-${t[2]}`)+" svelte-ga3rak"),f(e,"tabindex","0"),ze(e,"active",t[0])},m(i,o){N(i,e,o),s||(r=[Q(e,"click",t[3]),Q(e,"keyup",Gs(t[3])),Q(e,"touchend",Br(t[3]))],s=!0)},p(i,[o]){o&2&&f(e,"title",i[1]),o&4&&n!==(n=st(`codicon codicon-${i[2]}`)+" svelte-ga3rak")&&f(e,"class",n),o&5&&ze(e,"active",i[0])},i:D,o:D,d(i){i&&C(e),s=!1,Fe(r)}}}function Pb(t,e,n){let{title:s}=e,{icon:r}=e,{active:i}=e;const o=()=>{n(0,i=!i)};return t.$$set=a=>{"title"in a&&n(1,s=a.title),"icon"in a&&n(2,r=a.icon),"active"in a&&n(0,i=a.active)},[i,s,r,o]}class $b extends Z{constructor(e){super(),J(this,e,Pb,Ob,X,{title:1,icon:2,active:0})}}function Mb(t){let e,n,s,r,i;return{c(){e=_("i"),f(e,"tabindex","0"),f(e,"class",n=st(`codicon codicon-${yl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=vl[t[0]])},m(o,a){N(o,e,a),r||(i=[Q(e,"click",t[1]),Q(e,"keyup",Gs(t[1])),Q(e,"touchend",Br(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=st(`codicon codicon-${yl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=vl[o[0]])&&f(e,"title",s)},i:D,o:D,d(o){o&&C(e),r=!1,Fe(i)}}}function Lb(t,e,n){let s="+";const r=Qe();return[s,()=>{n(0,s=pf(s)),r("change",s)}]}class xb extends Z{constructor(e){super(),J(this,e,Lb,Mb,X,{})}}function Ub(t){let e;return{c(){e=_("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){N(n,e,s)},p:D,i:D,o:D,d(n){n&&C(e)}}}class kf extends Z{constructor(e){super(),J(this,e,null,Ub,X,{})}}function Fb(t){let e,n,s,r,i=Sn(t[0].name)+"",o,a,c,l=Dt(t[0].count)+"",u,h,d,p,g;return n=new Tf({props:{type:t[0].type}}),{c(){e=_("li"),q(n.$$.fragment),s=x(),r=_("span"),o=ge(i),a=x(),c=_("span"),u=ge(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(m,T){N(m,e,T),F(n,e,null),y(e,s),y(e,r),y(r,o),y(e,a),y(e,c),y(c,u),d=!0,p||(g=Q(e,"click",t[2]),p=!0)},p(m,[T]){const A={};T&1&&(A.type=m[0].type),n.$set(A),(!d||T&1)&&i!==(i=Sn(m[0].name)+"")&&Ue(o,i),(!d||T&1)&&l!==(l=Dt(m[0].count)+"")&&Ue(u,l),(!d||T&1&&h!==(h=m[0].name))&&f(e,"title",h)},i(m){d||(w(n.$$.fragment,m),d=!0)},o(m){E(n.$$.fragment,m),d=!1},d(m){m&&C(e),V(n),p=!1,g()}}}function Vb(t,e,n){let{tag:s}=e;const r=Qe(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class Bb extends Z{constructor(e){super(),J(this,e,Vb,Fb,X,{tag:0})}}function bl(t,e,n){const s=t.slice();return s[18]=e[n],s}function jb(t){let e,n,s,r,i=t[21].message+"",o;return{c(){e=_("div"),n=_("i"),s=x(),r=_("span"),o=ge(i),f(n,"class",st("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){N(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&4&&i!==(i=a[21].message+"")&&Ue(o,i)},i:D,o:D,d(a){a&&C(e)}}}function qb(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=Tl(bl(t,r,a));const o=a=>E(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=x(),n=_("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l].m(a,c);N(a,e,c),N(a,n,c),s=!0},p(a,c){if(c&232){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=bl(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=Tl(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(me(),l=r.length;l<i.length;l+=1)o(l);ye()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)E(i[c]);s=!1},d(a){An(i,a),a&&C(e),a&&C(n)}}}function Tl(t){let e,n;function s(){return t[14](t[18])}return e=new Bb({props:{tag:t[18]}}),e.$on("click",s),{c(){q(e.$$.fragment)},m(r,i){F(e,r,i),n=!0},p(r,i){t=r;const o={};i&32&&(o.tag=t[18]),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){V(e,r)}}}function zb(t){let e,n,s;return n=new kf({}),{c(){e=_("div"),q(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){N(r,e,i),F(n,e,null),s=!0},p:D,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){E(n.$$.fragment,r),s=!1},d(r){r&&C(e),V(n)}}}function Hb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,T,A;o=new xb({}),o.$on("change",t[10]);function O(k){t[11](k)}let S={icon:"whole-word",title:"Toggle exact search term matching"};t[1]!==void 0&&(S.active=t[1]),c=new $b({props:S}),Kt.push(()=>Kf(c,"active",O));let L={ctx:t,current:null,token:null,hasCatch:!0,pending:zb,then:qb,catch:jb,error:21,blocks:[,,,]};return Va(g=t[2],L),{c(){e=_("div"),n=_("i"),s=x(),r=_("input"),i=x(),q(o.$$.fragment),a=x(),q(c.$$.fragment),u=x(),h=_("i"),d=x(),p=_("ol"),L.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(h,"tabindex","0"),f(h,"class","codicon codicon-question spaced svelte-2fyyfo"),f(p,"class","svelte-2fyyfo"),ze(p,"open",t[4]),f(e,"class","searchbar svelte-2fyyfo"),ze(e,"open",t[4])},m(k,v){N(k,e,v),y(e,n),y(e,s),y(e,r),Tt(r,t[0]),y(e,i),F(o,e,null),y(e,a),F(c,e,null),y(e,u),y(e,h),y(e,d),y(e,p),L.block.m(p,L.anchor=null),L.mount=()=>p,L.anchor=null,m=!0,T||(A=[Q(r,"input",t[8]),Q(r,"blur",t[9]),Q(h,"click",t[12]),Q(h,"keyup",Gs(t[13])),Q(e,"blur",t[15])],T=!0)},p(k,[v]){t=k,v&1&&r.value!==t[0]&&Tt(r,t[0]);const P={};!l&&v&2&&(l=!0,P.active=t[1],qf(()=>l=!1)),c.$set(P),L.ctx=t,v&4&&g!==(g=t[2])&&Va(g,L)||Hf(L,t,v),(!m||v&16)&&ze(p,"open",t[4]),(!m||v&16)&&ze(e,"open",t[4])},i(k){m||(w(o.$$.fragment,k),w(c.$$.fragment,k),w(L.block),m=!0)},o(k){E(o.$$.fragment,k),E(c.$$.fragment,k);for(let v=0;v<3;v+=1){const P=L.blocks[v];E(P)}m=!1},d(k){k&&C(e),V(o),V(c),L.block.d(),L.token=null,L=null,T=!1,Fe(A)}}}function Kb(t,e,n){let s;Je(t,To,k=>n(16,s=k));const r=Qe();let i,o="",a=!1,c="+",l=!1,u=[];async function h(k,v){n(4,l=!0),n(5,u=[...s.supertags.filter(P=>P.name.toLowerCase().includes(v.toLowerCase())).map(P=>new _f(P.name,Object.keys(P.tags).length,"supertag")),...await wf(v)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function p(){o=this.value,n(0,o)}const g=k=>{(!k.relatedTarget||!k.target.parentNode.contains(k.relatedTarget))&&n(4,l=!1)},m=k=>{n(3,c=k.detail)};function T(k){a=k,n(1,a)}const A=()=>Lt.navigateTo("help"),O=()=>Lt.navigateTo("help"),S=k=>{r("pick",k.toActiveTag(c)),d()},L=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,r,d,p,g,m,T,A,O,S,L]}class Gb extends Z{constructor(e){super(),J(this,e,Kb,Hb,X,{})}}function Wb(){const t=[],{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Is("+",r,0,"general")),i));try{const i=await wf(r,!0,1);if(Array.isArray(i)&&i.length===1){const o=i.at(0);n(a=>{const c=a.findIndex(l=>l.name===o.name);return a[c]=new Is("+",o.name,o.count,o.type),a})}}catch{console.warn("Failed to load type and count for tag.",r)}},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const bt=Wb(),Qb={id:0,width:0,height:0},Yb=[{id:996911,width:300,height:112},{id:996914,width:728,height:102}],Xb=Yb.filter(t=>t.width<window.innerWidth);let Kn=Qb;for(const t of Xb)t.width>(Kn==null?void 0:Kn.width)&&(Kn=t);const Jb=()=>Kn;function Zb(t){let e,n,s,r,i,o;return{c(){e=_("script"),s=_("script"),s.textContent=";(adsbyjuicy = window.adsbyjuicy || []).push({ adzone: window.adZone.id })",r=x(),i=_("div"),o=_("ins"),f(e,"type","text/javascript"),f(e,"data-cfasync","false"),e.async=!0,es(e.src,n="https://poweredby.jads.co/js/jads.js")||f(e,"src",n),f(s,"type","text/javascript"),f(s,"data-cfasync","false"),s.async=!0,f(o,"id",window.adZone.id.toString()),f(o,"data-width",window.adZone.width),f(o,"data-height",window.adZone.height),f(i,"style",`height: ${window.adZone.height}px`),f(i,"class","svelte-hntawn")},m(a,c){y(document.head,e),y(document.head,s),N(a,r,c),N(a,i,c),y(i,o)},p:D,i:D,o:D,d(a){C(e),C(s),a&&C(r),a&&C(i)}}}window.adZone=Jb();class eT extends Z{constructor(e){super(),J(this,e,null,Zb,X,{})}}function tT(t){let e,n=Sn(t[0])+"",s,r,i;return{c(){e=_("li"),s=ge(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),ze(e,"active",t[2])},m(o,a){N(o,e,a),y(e,s),r||(i=Q(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=Sn(o[0])+"")&&Ue(s,n),a&4&&ze(e,"active",o[2])},i:D,o:D,d(o){o&&C(e),r=!1,i()}}}function nT(t,e,n){let s,r,i;Je(t,bt,c=>n(3,i=c));let{name:o}=e;const a=()=>r?bt.removeByIndex(s):bt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class sT extends Z{constructor(e){super(),J(this,e,nT,tT,X,{name:0})}}function rT(t){let e,n;return{c(){e=_("span"),n=ge(t[0])},m(s,r){N(s,e,r),y(e,n)},p(s,r){r&1&&Ue(n,s[0])},d(s){s&&C(e)}}}function iT(t){let e,n=t[1].hostname+"",s,r;return{c(){e=_("a"),s=ge(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){N(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Ue(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&C(e)}}}function oT(t){let e,n,s;function r(a,c){return a[1]?iT:rT}let i=r(t),o=i(t);return{c(){e=_("i"),n=x(),o.c(),s=tn(),f(e,"class","codicon codicon-link")},m(a,c){N(a,e,c),N(a,n,c),o.m(a,c),N(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:D,o:D,d(a){a&&C(e),a&&C(n),o.d(a),a&&C(s)}}}function aT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=mf(r)?new URL(r):null)},[r,s]}class cT extends Z{constructor(e){super(),J(this,e,aT,oT,X,{source:0})}}function lT(t){let e,n;const s=t[1].default,r=Of(s,t,t[0],null);return{c(){e=_("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){N(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&$f(r,s,i,i[0],n?Pf(s,i[0],o,null):Mf(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){E(r,i),n=!1},d(i){i&&C(e),r&&r.d(i)}}}function uT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Eo extends Z{constructor(e){super(),J(this,e,uT,lT,X,{})}}const El=6e4,kl=t=>{if(!hT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/El,s=new Date().getTime()/El-e;if(s<1)return"just now";if(s<60)return hn(s,"minute");const r=s/60;if(r<24)return hn(r,"hour");const i=r/24;if(i<7)return hn(i,"day");if(i<30.5)return hn(i/7,"week");if(i<365.25)return hn(i/30.5,"month");const o=i/365.25;return hn(o,"year")},hT=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",hn=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function dT(t){let e,n,s,r=kl(t[0])+"",i;return{c(){e=_("i"),n=x(),s=_("span"),i=ge(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=kl(o[0])+"")&&Ue(i,r)},i:D,o:D,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function fT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class pT extends Z{constructor(e){super(),J(this,e,fT,dT,X,{value:0})}}function gT(t){let e,n,s,r=Dt(t[0])+"",i;return{c(){e=_("i"),n=x(),s=_("span"),i=ge(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){N(o,e,a),N(o,n,a),N(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Dt(o[0])+"")&&Ue(i,r)},i:D,o:D,d(o){o&&C(e),o&&C(n),o&&C(s)}}}function mT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class yT extends Z{constructor(e){super(),J(this,e,mT,gT,X,{value:0})}}function Sl(t,e,n){const s=t.slice();return s[1]=e[n],s}function vT(t){let e,n;return e=new pT({props:{value:t[0].created_at}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function _T(t){let e,n;return e=new yT({props:{value:t[0].score}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Al(t){let e,n;return e=new Eo({props:{$$slots:{default:[wT]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&17&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function wT(t){let e,n;return e=new cT({props:{source:t[0].source}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Cl(t){let e,n;return e=new sT({props:{name:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function IT(t){let e,n,s,r,i,o,a,c,l;s=new Eo({props:{$$slots:{default:[vT]},$$scope:{ctx:t}}}),i=new Eo({props:{$$slots:{default:[_T]},$$scope:{ctx:t}}});let u=t[0].source&&Al(t),h=t[0].tags,d=[];for(let g=0;g<h.length;g+=1)d[g]=Cl(Sl(t,h,g));const p=g=>E(d[g],1,1,()=>{d[g]=null});return{c(){e=_("div"),n=_("div"),q(s.$$.fragment),r=x(),q(i.$$.fragment),o=x(),u&&u.c(),a=x(),c=_("ul");for(let g=0;g<d.length;g+=1)d[g].c();f(n,"class","summary svelte-jhzkkk"),f(c,"class","svelte-jhzkkk"),f(e,"class","details svelte-jhzkkk")},m(g,m){N(g,e,m),y(e,n),F(s,n,null),y(n,r),F(i,n,null),y(n,o),u&&u.m(n,null),y(e,a),y(e,c);for(let T=0;T<d.length;T+=1)d[T].m(c,null);l=!0},p(g,[m]){const T={};m&17&&(T.$$scope={dirty:m,ctx:g}),s.$set(T);const A={};if(m&17&&(A.$$scope={dirty:m,ctx:g}),i.$set(A),g[0].source?u?(u.p(g,m),m&1&&w(u,1)):(u=Al(g),u.c(),w(u,1),u.m(n,null)):u&&(me(),E(u,1,1,()=>{u=null}),ye()),m&1){h=g[0].tags;let O;for(O=0;O<h.length;O+=1){const S=Sl(g,h,O);d[O]?(d[O].p(S,m),w(d[O],1)):(d[O]=Cl(S),d[O].c(),w(d[O],1),d[O].m(c,null))}for(me(),O=h.length;O<d.length;O+=1)p(O);ye()}},i(g){if(!l){w(s.$$.fragment,g),w(i.$$.fragment,g),w(u);for(let m=0;m<h.length;m+=1)w(d[m]);l=!0}},o(g){E(s.$$.fragment,g),E(i.$$.fragment,g),E(u),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)E(d[m]);l=!1},d(g){g&&C(e),V(s),V(i),u&&u.d(),An(d,g)}}}function bT(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class TT extends Z{constructor(e){super(),J(this,e,bT,IT,X,{post:0})}}const $a=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function ET(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){N(l,e,u),t[3](e),a||(c=Q(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:D,o:D,d(l){l&&C(e),t[3](null),a=!1,c()}}}function kT(t,e,n){let{post:s}=e;const r=Qe();let i;function o(c){Kt[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&$a.observe(i)},[s,i,r,o,a]}class ST extends Z{constructor(e){super(),J(this,e,kT,ET,X,{post:0})}}function AT(t){let e,n,s,r,i,o,a,c,l;return{c(){e=_("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,e.loop=a=t[0].tags.includes("loop"),f(e,"class","svelte-19kew7t")},m(u,h){N(u,e,h),t[5](e),c||(l=[Q(e,"click",Br(t[4])),Q(e,"touchstart",t[2],{passive:!0}),Q(e,"touchend",t[3],{passive:!0})],c=!0)},p(u,[h]){h&1&&n!==(n=u[0].sample_url)&&f(e,"data-src",n),h&1&&s!==(s=u[0].id.toString())&&f(e,"alt",s),h&1&&r!==(r=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&f(e,"style",r),h&1&&i!==(i=u[0].width)&&f(e,"width",i),h&1&&o!==(o=u[0].height)&&f(e,"height",o),h&1&&a!==(a=u[0].tags.includes("loop"))&&(e.loop=a)},i:D,o:D,d(u){u&&C(e),t[5](null),c=!1,Fe(l)}}}function CT(t,e,n){let{post:s}=e;const r=Qe();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};function l(h){Vf.call(this,t,h)}function u(h){Kt[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&$a.observe(i)},[s,i,a,c,l,u]}class DT extends Z{constructor(e){super(),J(this,e,CT,AT,X,{post:0})}}function NT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){N(l,e,u),t[3](e),a||(c=Q(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:D,o:D,d(l){l&&C(e),t[3](null),a=!1,c()}}}function RT(t,e,n){let{post:s}=e;const r=Qe();let i;function o(c){Kt[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&$a.observe(i)},[s,i,r,o,a]}class OT extends Z{constructor(e){super(),J(this,e,RT,NT,X,{post:0})}}function PT(t){let e,n;return e=new OT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function $T(t){let e,n;return e=new DT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function MT(t){let e,n;return e=new ST({props:{post:t[0]}}),e.$on("click",t[2]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Dl(t){let e,n;return e=new TT({props:{post:t[0]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function LT(t){let e,n,s,r,i;const o=[MT,$T,PT],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&Dl(t);return{c(){e=_("div"),s.c(),r=x(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){N(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(me(),E(a[d],1,1,()=>{a[d]=null}),ye(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=Dl(u),l.c(),w(l,1),l.m(e,null)):l&&(me(),E(l,1,1,()=>{l=null}),ye())},i(u){i||(w(s),w(l),i=!0)},o(u){E(s),E(l),i=!1},d(u){u&&C(e),a[n].d(),l&&l.d()}}}function xT(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class UT extends Z{constructor(e){super(),J(this,e,xT,LT,X,{post:0})}}function Nl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Rl(t){let e,n;return e=new UT({props:{post:t[1]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function FT(t){let e,n,s,r,i=t[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Rl(Nl(t,i,c));const a=c=>E(o[c],1,1,()=>{o[c]=null});return s=new eT({}),{c(){e=_("ol");for(let c=0;c<o.length;c+=1)o[c].c();n=x(),q(s.$$.fragment),f(e,"class","page svelte-vcm6im")},m(c,l){N(c,e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);N(c,n,l),F(s,c,l),r=!0},p(c,[l]){if(l&1){i=c[0];let u;for(u=0;u<i.length;u+=1){const h=Nl(c,i,u);o[u]?(o[u].p(h,l),w(o[u],1)):(o[u]=Rl(h),o[u].c(),w(o[u],1),o[u].m(e,null))}for(me(),u=i.length;u<o.length;u+=1)a(u);ye()}},i(c){if(!r){for(let l=0;l<i.length;l+=1)w(o[l]);w(s.$$.fragment,c),r=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)E(o[l]);E(s.$$.fragment,c),r=!1},d(c){c&&C(e),An(o,c),c&&C(n),V(s,c)}}}function VT(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class BT extends Z{constructor(e){super(),J(this,e,VT,FT,X,{posts:0})}}function jT(t){let e;return{c(){e=_("div")},m(n,s){N(n,e,s),t[1](e)},p:D,i:D,o:D,d(n){n&&C(e),t[1](null)}}}function qT(t,e,n){const s=Qe(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){Kt[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class zT extends Z{constructor(e){super(),J(this,e,qT,jT,X,{})}}const HT="/assets/shironeko-x.c28cad00.png";function KT(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=x(),i=_("span"),i.textContent="You have reached the end",es(n.src,s=HT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){N(o,e,a),y(e,n),y(e,r),y(e,i)},p:D,i:D,o:D,d(o){o&&C(e)}}}class GT extends Z{constructor(e){super(),J(this,e,null,KT,X,{})}}const WT="/assets/shironeko-confused.4071d5b2.png";function QT(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=x(),i=_("span"),i.textContent="No results found",es(n.src,s=WT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){N(o,e,a),y(e,n),y(e,r),y(e,i)},p:D,i:D,o:D,d(o){o&&C(e)}}}class YT extends Z{constructor(e){super(),J(this,e,null,QT,X,{})}}const XT=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,addPage(r){n(i=>({count:r.count,pages:[...i.pages,r.posts],nextPage:i.nextPage+1}))},reset(){s(t)}}},yr=XT(),JT={sortProperty:"id",minScore:0},ZT=()=>{const{subscribe:t,set:e}=Cn(JT);return{subscribe:t,set:e}},vr=ZT();function Ol(t,e,n){const s=t.slice();return s[15]=e[n],s}function eE(t){let e,n;return e=new YT({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function tE(t){let e,n,s=Dt(t[2].count)+"",r,i,o,a,c,l,u,h,d,p,g,m,T,A,O,S,L,k,v,P,pe,ue,te,Ws,H=t[0]==="custom"&&Pl(t),ae=t[2].pages,re=[];for(let z=0;z<ae.length;z+=1)re[z]=$l(Ol(t,ae,z));const Te=z=>E(re[z],1,1,()=>{re[z]=null}),Ln=[sE,nE],yt=[];function La(z,oe){return z[4]?0:1}return v=La(t),P=yt[v]=Ln[v](t),{c(){e=_("div"),n=_("span"),r=ge(s),i=ge(" results"),a=x(),c=_("select"),l=_("option"),l.textContent="Date",u=_("option"),u.textContent="Score",h=x(),d=_("select"),p=_("option"),p.textContent="Any Score",g=_("option"),g.textContent="Score > 10",m=_("option"),m.textContent="Score > 100",T=_("option"),T.textContent="Score > 1K",A=_("option"),A.textContent="Custom",O=x(),H&&H.c(),S=x(),L=_("ol");for(let z=0;z<re.length;z+=1)re[z].c();k=x(),P.c(),pe=tn(),f(n,"title",o=`${t[2].count} results`),f(n,"class","svelte-1q1h5qt"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1q1h5qt"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1q1h5qt"),f(c,"title","Sort results by"),f(c,"class","svelte-1q1h5qt"),t[5].sortProperty===void 0&&ns(()=>t[8].call(c)),p.__value=0,p.value=p.__value,f(p,"class","svelte-1q1h5qt"),g.__value=10,g.value=g.__value,f(g,"class","svelte-1q1h5qt"),m.__value=100,m.value=m.__value,f(m,"class","svelte-1q1h5qt"),T.__value=1e3,T.value=T.__value,f(T,"class","svelte-1q1h5qt"),A.__value="custom",A.value=A.__value,f(A,"class","svelte-1q1h5qt"),f(d,"title","Filter by score"),f(d,"class","svelte-1q1h5qt"),t[0]===void 0&&ns(()=>t[10].call(d)),f(e,"class","header svelte-1q1h5qt"),f(L,"class","svelte-1q1h5qt")},m(z,oe){N(z,e,oe),y(e,n),y(n,r),y(n,i),y(e,a),y(e,c),y(c,l),y(c,u),Ys(c,t[5].sortProperty),y(e,h),y(e,d),y(d,p),y(d,g),y(d,m),y(d,T),y(d,A),Ys(d,t[0]),y(e,O),H&&H.m(e,null),N(z,S,oe),N(z,L,oe);for(let Ot=0;Ot<re.length;Ot+=1)re[Ot].m(L,null);N(z,k,oe),yt[v].m(z,oe),N(z,pe,oe),ue=!0,te||(Ws=[Q(c,"change",t[8]),Q(c,"change",t[9]),Q(d,"change",t[10]),Q(d,"change",t[11])],te=!0)},p(z,oe){if((!ue||oe&4)&&s!==(s=Dt(z[2].count)+"")&&Ue(r,s),(!ue||oe&4&&o!==(o=`${z[2].count} results`))&&f(n,"title",o),oe&32&&Ys(c,z[5].sortProperty),oe&1&&Ys(d,z[0]),z[0]==="custom"?H?H.p(z,oe):(H=Pl(z),H.c(),H.m(e,null)):H&&(H.d(1),H=null),oe&4){ae=z[2].pages;let $e;for($e=0;$e<ae.length;$e+=1){const xa=Ol(z,ae,$e);re[$e]?(re[$e].p(xa,oe),w(re[$e],1)):(re[$e]=$l(xa),re[$e].c(),w(re[$e],1),re[$e].m(L,null))}for(me(),$e=ae.length;$e<re.length;$e+=1)Te($e);ye()}let Ot=v;v=La(z),v===Ot?yt[v].p(z,oe):(me(),E(yt[Ot],1,1,()=>{yt[Ot]=null}),ye(),P=yt[v],P?P.p(z,oe):(P=yt[v]=Ln[v](z),P.c()),w(P,1),P.m(pe.parentNode,pe))},i(z){if(!ue){for(let oe=0;oe<ae.length;oe+=1)w(re[oe]);w(P),ue=!0}},o(z){re=re.filter(Boolean);for(let oe=0;oe<re.length;oe+=1)E(re[oe]);E(P),ue=!1},d(z){z&&C(e),H&&H.d(),z&&C(S),z&&C(L),An(re,z),z&&C(k),yt[v].d(z),z&&C(pe),te=!1,Fe(Ws)}}}function Pl(t){let e,n,s;return{c(){e=_("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-1q1h5qt")},m(r,i){N(r,e,i),Tt(e,t[1]),n||(s=[Q(e,"input",t[12]),Q(e,"keyup",Gs(iE)),Q(e,"blur",t[13])],n=!0)},p(r,i){i&2&&jl(e.value)!==r[1]&&Tt(e,r[1])},d(r){r&&C(e),n=!1,Fe(s)}}}function $l(t){let e,n;return e=new BT({props:{posts:t[15]}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.posts=s[15]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function nE(t){let e,n;return e=new GT({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function sE(t){let e,n;return e=new zT({}),e.$on("visible",t[14]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function rE(t){let e,n,s,r;const i=[tE,eE],o=[];function a(c,l){return c[2].count?0:c[3]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=tn()},m(c,l){~e&&o[e].m(c,l),N(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(me(),E(o[u],1,1,()=>{o[u]=null}),ye()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){~e&&o[e].d(c),c&&C(s)}}}const iE=t=>t.target.blur();function oE(t,e,n){let s,r,i,o,a;Je(t,yr,O=>n(2,o=O)),Je(t,vr,O=>n(5,a=O));const c=Qe();let l=0,u=0;function h(){a.sortProperty=Fa(this),vr.set(a)}const d=()=>c("configchange");function p(){l=Fa(this),n(0,l)}const g=()=>{l!=="custom"&&c("configchange")};function m(){u=jl(this.value),n(1,u)}const T=()=>c("configchange"),A=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&3&&Lf(vr,a.minScore=l!=="custom"?l:u,a),t.$$.dirty&4&&n(7,s=o.count/yf),t.$$.dirty&132&&n(4,r=o.pages.length<s),t.$$.dirty&4&&n(3,i=o.count===0)},[l,u,o,i,r,a,c,s,h,d,p,g,m,T,A]}class aE extends Z{constructor(e){super(),J(this,e,oE,rE,X,{})}}function cE(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),ze(e,"visible",t[0])},m(r,i){N(r,e,i),n||(s=Q(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&ze(e,"visible",r[0])},i:D,o:D,d(r){r&&C(e),n=!1,s()}}}function lE(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return ql(()=>{document.addEventListener("scroll",i,{passive:!0})}),Ff(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class uE extends Z{constructor(e){super(),J(this,e,lE,cE,X,{})}}function hE(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=_("div"),n=_("div"),s=_("i"),i=x(),o=_("div"),a=_("h3"),c=ge(t[2]),l=x(),u=_("span"),h=ge(t[1]),f(s,"class",r=st(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){N(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=st(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Ue(c,d[2]),p&2&&Ue(h,d[1])},i:D,o:D,d(d){d&&C(e)}}}function dE(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class Sf extends Z{constructor(e){super(),J(this,e,dE,hE,X,{icon:0,message:1,title:2})}}function fE(t){let e;return{c(){e=_("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){N(n,e,s)},p:D,i:D,o:D,d(n){n&&C(e)}}}class pE extends Z{constructor(e){super(),J(this,e,null,fE,X,{})}}function Ml(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function Ll(t){let e,n,s,r=t[2],i=[];for(let c=0;c<r.length;c+=1)i[c]=xl(Ml(t,r,c));const o=c=>E(i[c],1,1,()=>{i[c]=null});let a=t[2].length>1&&Ul(t);return{c(){e=_("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=x(),a&&a.c(),f(e,"class","svelte-1sws22c")},m(c,l){N(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);y(e,n),a&&a.m(e,null),s=!0},p(c,l){if(l&4){r=c[2];let u;for(u=0;u<r.length;u+=1){const h=Ml(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=xl(h),i[u].c(),w(i[u],1),i[u].m(e,n))}for(me(),u=r.length;u<i.length;u+=1)o(u);ye()}c[2].length>1?a?a.p(c,l):(a=Ul(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)E(i[l]);s=!1},d(c){c&&C(e),An(i,c),a&&a.d()}}}function xl(t){let e,n;function s(){return t[6](t[18])}function r(){return t[7](t[16])}return e=new Ef({props:{tag:t[16]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){q(e.$$.fragment)},m(i,o){F(e,i,o),n=!0},p(i,o){t=i;const a={};o&4&&(a.tag=t[16]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){V(e,i)}}}function Ul(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1sws22c"></i>',f(e,"class","add-supertag svelte-1sws22c"),f(e,"title","Click to create a new supertag")},m(r,i){N(r,e,i),n||(s=Q(e,"click",t[8]),n=!0)},p:D,d(r){r&&C(e),n=!1,s()}}}function gE(t){let e,n;return e=new aE({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function mE(t){let e,n,s,r;const i=[vE,yE],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tn()},m(c,l){o[e].m(c,l),N(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),E(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){o[e].d(c),c&&C(s)}}}function yE(t){let e,n;return e=new Sf({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function vE(t){let e,n;return e=new Sf({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function Fl(t){let e,n;return e=new Rb({props:{tags:t[2]}}),e.$on("submit",t[10]),e.$on("close",t[11]),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function _E(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,T;n=new pE({}),r=new Gb({}),r.$on("pick",t[5]);let A=t[2].length&&Ll(t);c=new bf({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[9]);const O=[mE,gE],S=[];function L(v,P){return v[1]!==void 0?0:1}u=L(t),h=S[u]=O[u](t),p=new uE({});let k=t[0]&&Fl(t);return{c(){e=_("div"),q(n.$$.fragment),s=x(),q(r.$$.fragment),i=x(),A&&A.c(),o=x(),a=_("div"),q(c.$$.fragment),l=x(),h.c(),d=x(),q(p.$$.fragment),g=x(),k&&k.c(),m=tn(),f(a,"class","sort-row svelte-1sws22c"),f(e,"class","search-config svelte-1sws22c")},m(v,P){N(v,e,P),F(n,e,null),y(e,s),F(r,e,null),y(e,i),A&&A.m(e,null),y(e,o),y(e,a),F(c,a,null),N(v,l,P),S[u].m(v,P),N(v,d,P),F(p,v,P),N(v,g,P),k&&k.m(v,P),N(v,m,P),T=!0},p(v,[P]){v[2].length?A?(A.p(v,P),P&4&&w(A,1)):(A=Ll(v),A.c(),w(A,1),A.m(e,o)):A&&(me(),E(A,1,1,()=>{A=null}),ye());let pe=u;u=L(v),u===pe?S[u].p(v,P):(me(),E(S[pe],1,1,()=>{S[pe]=null}),ye(),h=S[u],h?h.p(v,P):(h=S[u]=O[u](v),h.c()),w(h,1),h.m(d.parentNode,d)),v[0]?k?(k.p(v,P),P&1&&w(k,1)):(k=Fl(v),k.c(),w(k,1),k.m(m.parentNode,m)):k&&(me(),E(k,1,1,()=>{k=null}),ye())},i(v){T||(w(n.$$.fragment,v),w(r.$$.fragment,v),w(A),w(c.$$.fragment,v),w(h),w(p.$$.fragment,v),w(k),T=!0)},o(v){E(n.$$.fragment,v),E(r.$$.fragment,v),E(A),E(c.$$.fragment,v),E(h),E(p.$$.fragment,v),E(k),T=!1},d(v){v&&C(e),V(n),V(r),A&&A.d(),V(c),v&&C(l),S[u].d(v),v&&C(d),V(p,v),v&&C(g),k&&k.d(v),v&&C(m)}}}function wE(t,e,n){let s,r,i,o;Je(t,To,S=>n(12,s=S)),Je(t,bt,S=>n(2,r=S)),Je(t,vr,S=>n(13,i=S)),Je(t,yr,S=>n(14,o=S));let a=!1,c;const l=async()=>(yr.reset(),u()),u=async()=>{n(1,c=void 0);try{const S=h(),L=await lb(o.nextPage,S,i.sortProperty,i.minScore);yr.addPage(L)}catch(S){n(1,c=S),console.warn(S)}},h=()=>r.flatMap(S=>S.type==="supertag"?s.supertags.find(L=>L.name===S.name).tags:S.toSearchableTag());return[a,c,r,l,u,S=>bt.addOrReplace(S.detail),S=>bt.removeByIndex(S),S=>bt.addOrReplace(new Is(pf(S.modifier),S.name,S.count,S.type)),()=>{n(0,a=!0)},()=>l(),S=>{To.addSupertag(S.detail),bt.set([new Is("+",S.detail.name,S.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class IE extends Z{constructor(e){super(),J(this,e,wE,_E,X,{})}}function bE(t){let e,n;return e=new kf({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},p:D,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function TE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&q(e.$$.fragment),n=tn()},m(o,a){e&&F(e,o,a),N(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){me();const c=e;E(c.$$.fragment,1,0,()=>{V(c,1)}),ye()}r?(e=new r(i()),q(e.$$.fragment),w(e.$$.fragment,1),F(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&E(e.$$.fragment,o),s=!1},d(o){o&&C(n),e&&V(e,o)}}}function EE(t){let e,n,s,r;const i=[TE,bE],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=tn()},m(c,l){o[e].m(c,l),N(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(me(),E(o[u],1,1,()=>{o[u]=null}),ye(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){o[e].d(c),c&&C(s)}}}function kE(t,e,n){let{loadComponent:s}=e,r;return ql(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class Ma extends Z{constructor(e){super(),J(this,e,kE,EE,X,{loadComponent:1})}}function SE(t){let e;return{c(){e=_("p"),e.textContent="You got lost..."},m(n,s){N(n,e,s)},i:D,o:D,d(n){n&&C(e)}}}function AE(t){let e,n;return e=new Ma({props:{loadComponent:$E}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function CE(t){let e,n;return e=new Ma({props:{loadComponent:PE}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function DE(t){let e,n;return e=new Ma({props:{loadComponent:OE}}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function NE(t){let e,n;return e=new IE({}),{c(){q(e.$$.fragment)},m(s,r){F(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function RE(t){let e,n,s,r;const i=[NE,DE,CE,AE,SE],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=_("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){N(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(me(),E(o[u],1,1,()=>{o[u]=null}),ye(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){E(s),r=!1},d(c){c&&C(e),o[n].d()}}}const OE=()=>wi(()=>import("./Account.a345b1bc.js"),["assets/Account.a345b1bc.js","assets/Account.ce3782a6.css"]),PE=()=>wi(()=>import("./Preferences.4f5f06a3.js"),["assets/Preferences.4f5f06a3.js","assets/Preferences.aea2222b.css","assets/ParagraphHeading.adc41d87.js","assets/ParagraphHeading.5a89239e.css"]),$E=()=>wi(()=>import("./Help.1d110d1e.js"),["assets/Help.1d110d1e.js","assets/Help.9081c352.css","assets/ParagraphHeading.adc41d87.js","assets/ParagraphHeading.5a89239e.css"]);function ME(t,e,n){let s;return Je(t,Lt,r=>n(0,s=r)),[s]}class LE extends Z{constructor(e){super(),J(this,e,ME,RE,X,{})}}function xE(t){let e;return{c(){e=_("footer"),e.innerHTML=`<div class="flex left svelte-1e56m0a"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1e56m0a">\xA9 2022 kurozenzen</span> 
  <div class="flex right svelte-1e56m0a"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1e56m0a")},m(n,s){N(n,e,s)},p:D,i:D,o:D,d(n){n&&C(e)}}}class UE extends Z{constructor(e){super(),J(this,e,null,xE,X,{})}}function FE(t){let e,n,s,r,i,o;return e=new YI({}),s=new LE({}),i=new UE({}),{c(){q(e.$$.fragment),n=x(),q(s.$$.fragment),r=x(),q(i.$$.fragment)},m(a,c){F(e,a,c),N(a,n,c),F(s,a,c),N(a,r,c),F(i,a,c),o=!0},p:D,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){E(e.$$.fragment,a),E(s.$$.fragment,a),E(i.$$.fragment,a),o=!1},d(a){V(e,a),a&&C(n),V(s,a),a&&C(r),V(i,a)}}}class VE extends Z{constructor(e){super(),J(this,e,null,FE,X,{})}}function BE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await wi(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(p=>{i?i("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=u(),l}new VE({target:document.getElementById("app")});BE();export{sT as $,Kf as A,qf as B,bf as C,Tt as D,Br as E,es as F,HI as G,tn as H,Je as I,To as J,fl as K,Cn as L,_l as M,Of as N,$f as O,Mf as P,Pf as Q,ns as R,Z as S,$b as T,Ys as U,Fa as V,zE as W,qE as X,jE as Y,Ef as Z,Is as _,f as a,uE as a0,yl as a1,N as b,y as c,Ue as d,_ as e,Sn as f,D as g,C as h,J as i,x as j,w as k,Q as l,me as m,st as n,Gs as o,ye as p,E as q,An as r,X as s,ge as t,Fe as u,Qe as v,q as w,F as x,V as y,Kt as z};
