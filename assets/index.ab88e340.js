(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function C(){}function Af(t,e){for(const n in e)t[n]=e[n];return t}function Cf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Bl(t){return t()}function Fa(){return Object.create(null)}function je(t){t.forEach(Bl)}function Df(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ws;function es(t,e){return Ws||(Ws=document.createElement("a")),Ws.href=e,t===Ws.href}function Nf(t){return Object.keys(t).length===0}function Rf(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function We(t,e,n){t.$$.on_destroy.push(Rf(e,n))}function Of(t,e,n,s){if(t){const r=jl(t,e,n,s);return t[0](r)}}function jl(t,e,n,s){return t[1]&&s?Af(n.ctx.slice(),t[1](s(e))):n.ctx}function $f(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Pf(t,e,n,s,r,i){if(r){const o=jl(e,n,s,i);t.p(o,r)}}function Mf(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function St(t){return t==null?"":t}function Lf(t,e,n){return t.set(n),e}function y(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function An(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function an(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ge(t){return document.createTextNode(t)}function M(){return ge(" ")}function Nt(){return ge("")}function Y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Eo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ql(t){return t===""?null:+t}function xf(t){return Array.from(t.childNodes)}function Ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bt(t,e){t.value=e==null?"":e}function Qs(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Va(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Je(t,e,n){t.classList[n?"add":"remove"](e)}function Uf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let ts;function ot(t){ts=t}function Vr(){if(!ts)throw new Error("Function called outside component initialization");return ts}function zl(t){Vr().$$.on_mount.push(t)}function Ff(t){Vr().$$.on_destroy.push(t)}function Ke(){const t=Vr();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Uf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Vf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Fn=[],vn=[],ir=[],Hi=[],Bf=Promise.resolve();let Gi=!1;function jf(){Gi||(Gi=!0,Bf.then(So))}function ns(t){ir.push(t)}function FE(t){Hi.push(t)}const Ei=new Set;let Ys=0;function So(){const t=ts;do{for(;Ys<Fn.length;){const e=Fn[Ys];Ys++,ot(e),qf(e.$$)}for(ot(null),Fn.length=0,Ys=0;vn.length;)vn.pop()();for(let e=0;e<ir.length;e+=1){const n=ir[e];Ei.has(n)||(Ei.add(n),n())}ir.length=0}while(Fn.length);for(;Hi.length;)Hi.pop()();Gi=!1,Ei.clear(),ot(t)}function qf(t){if(t.fragment!==null){t.update(),je(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ns)}}const or=new Set;let Lt;function ve(){Lt={r:0,c:[],p:Lt}}function _e(){Lt.r||je(Lt.c),Lt=Lt.p}function w(t,e){t&&t.i&&(or.delete(t),t.i(e))}function E(t,e,n,s){if(t&&t.o){if(or.has(t))return;or.add(t),Lt.c.push(()=>{or.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Ba(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(ve(),E(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),_e())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&So()}if(Cf(t)){const r=Vr();if(t.then(i=>{ot(r),s(e.then,1,e.value,i),ot(null)},i=>{if(ot(r),s(e.catch,2,e.error,i),ot(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function zf(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function VE(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function j(t){t&&t.c()}function U(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||ns(()=>{const c=i.map(Bl).filter(Df);o?o.push(...c):je(c),t.$$.on_mount=[]}),a.forEach(ns)}function F(t,e){const n=t.$$;n.fragment!==null&&(je(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Hf(t,e){t.$$.dirty[0]===-1&&(Fn.push(t),jf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,s,r,i,o,a=[-1]){const c=ts;ot(t);const l=t.$$={fragment:null,ctx:null,props:i,update:C,not_equal:r,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Fa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Hf(t,h)),d}):[],l.update(),u=!0,je(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=xf(e.target);l.fragment&&l.fragment.l(h),h.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),So()}ot(c)}class J{$destroy(){F(this,1),this.$destroy=C}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Nf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cn=[];function Cn(t,e=C){let n;const s=new Set;function r(a){if(Q(t,a)&&(t=a,n)){const c=!cn.length;for(const l of s)l[1](),cn.push(l,t);if(c){for(let l=0;l<cn.length;l+=2)cn[l][0](cn[l+1]);cn.length=0}}}function i(a){r(a(t))}function o(a,c=C){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||C),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Gf=Object.freeze(["search","account","settings","help"]),Kf=t=>Gf.includes(t),Wf=()=>{const{subscribe:t,set:e}=Cn("search");return{subscribe:t,navigateTo(n){if(!Kf(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},xt=Wf();function Qf(t){let e,n,s,r,i,o;return{c(){e=an("svg"),n=an("g"),s=an("path"),r=an("defs"),i=an("clipPath"),o=an("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){A(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:C,i:C,o:C,d(a){a&&k(e)}}}class Yf extends J{constructor(e){super(),X(this,e,null,Qf,Q,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Hl=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Xf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Jf=function(t){const e=Hl(t);return Gl.encodeByteArray(e,!0)},Kl=function(t){return Jf(t).replace(/\./g,"")},Zf=function(t){try{return Gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Wl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sp(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ql(){return typeof indexedDB=="object"}function Yl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function rp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="FirebaseError";class Ye extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ip,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?op(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ye(r,a,s)}}function op(t,e){return t.replace(ap,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ap=/\{\$([^}]+)}/g;function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ja(i)&&ja(o)){if(!ss(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ja(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lp(t,e){const n=new up(t,e);return n.subscribe.bind(n)}class up{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Si),r.error===void 0&&(r.error=Si),r.complete===void 0&&(r.complete=Si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Si(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=1e3,fp=2,pp=4*60*60*1e3,gp=.5;function qa(t,e=dp,n=fp){const s=e*Math.pow(n,t),r=Math.round(gp*s*(Math.random()-.5)*2);return Math.min(pp,s+r)}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Qe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ep;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vp(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yp(t){return t===Pt?void 0:t}function vp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const wp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Ip=re.INFO,bp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Tp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=bp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=Ip,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Ep=(t,e)=>e.some(n=>t instanceof n);let za,Ha;function Sp(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kp(){return Ha||(Ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xl=new WeakMap,Ki=new WeakMap,Jl=new WeakMap,ki=new WeakMap,ko=new WeakMap;function Ap(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xl.set(n,t)}).catch(()=>{}),ko.set(e,t),e}function Cp(t){if(Ki.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ki.set(t,e)}let Wi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dp(t){Wi=t(Wi)}function Np(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ai(this),e,...n);return Jl.set(s,e.sort?e.sort():[e]),Tt(s)}:kp().includes(t)?function(...e){return t.apply(Ai(this),e),Tt(Xl.get(this))}:function(...e){return Tt(t.apply(Ai(this),e))}}function Rp(t){return typeof t=="function"?Np(t):(t instanceof IDBTransaction&&Cp(t),Ep(t,Sp())?new Proxy(t,Wi):t)}function Tt(t){if(t instanceof IDBRequest)return Ap(t);if(ki.has(t))return ki.get(t);const e=Rp(t);return e!==t&&(ki.set(t,e),ko.set(e,t)),e}const Ai=t=>ko.get(t);function Zl(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Op=["get","getKey","getAll","getAllKeys","count"],$p=["put","add","delete","clear"],Ci=new Map;function Ga(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$p.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Op.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ci.set(e,i),i}Dp(t=>({...t,get:(e,n,s)=>Ga(e,n)||t.get(e,n,s),has:(e,n)=>!!Ga(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Mp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qi="@firebase/app",Ka="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Br("@firebase/app"),Lp="@firebase/app-compat",xp="@firebase/analytics-compat",Up="@firebase/analytics",Fp="@firebase/app-check-compat",Vp="@firebase/app-check",Bp="@firebase/auth",jp="@firebase/auth-compat",qp="@firebase/database",zp="@firebase/database-compat",Hp="@firebase/functions",Gp="@firebase/functions-compat",Kp="@firebase/installations",Wp="@firebase/installations-compat",Qp="@firebase/messaging",Yp="@firebase/messaging-compat",Xp="@firebase/performance",Jp="@firebase/performance-compat",Zp="@firebase/remote-config",eg="@firebase/remote-config-compat",tg="@firebase/storage",ng="@firebase/storage-compat",sg="@firebase/firestore",rg="@firebase/firestore-compat",ig="firebase",og="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]",ag={[Qi]:"fire-core",[Lp]:"fire-core-compat",[Up]:"fire-analytics",[xp]:"fire-analytics-compat",[Vp]:"fire-app-check",[Fp]:"fire-app-check-compat",[Bp]:"fire-auth",[jp]:"fire-auth-compat",[qp]:"fire-rtdb",[zp]:"fire-rtdb-compat",[Hp]:"fire-fn",[Gp]:"fire-fn-compat",[Kp]:"fire-iid",[Wp]:"fire-iid-compat",[Qp]:"fire-fcm",[Yp]:"fire-fcm-compat",[Xp]:"fire-perf",[Jp]:"fire-perf-compat",[Zp]:"fire-rc",[eg]:"fire-rc-compat",[tg]:"fire-gcs",[ng]:"fire-gcs-compat",[sg]:"fire-fst",[rg]:"fire-fst-compat","fire-js":"fire-js",[ig]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,Yi=new Map;function cg(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function st(t){const e=t.name;if(Yi.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,t);for(const n of vr.values())cg(n,t);return!0}function nn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new tn("app","Firebase",lg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=og;function hg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:eu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});const r=vr.get(s);if(r){if(ss(t,r.options)&&ss(n,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const i=new _p(s);for(const a of Yi.values())i.addComponent(a);const o=new ug(t,n,i);return vr.set(s,o),o}function Ao(t=eu){const e=vr.get(t);if(!e)throw Wt.create("no-app",{appName:t});return e}function ze(t,e,n){var s;let r=(s=ag[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}st(new Qe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const dg="firebase-heartbeat-database",fg=1,rs="firebase-heartbeat-store";let Di=null;function tu(){return Di||(Di=Zl(dg,fg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}}).catch(t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})})),Di}async function pg(t){var e;try{return(await tu()).transaction(rs).objectStore(rs).get(nu(t))}catch(n){if(n instanceof Ye)Kt.warn(n.message);else{const s=Wt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Kt.warn(s.message)}}}async function Wa(t,e){var n;try{const r=(await tu()).transaction(rs,"readwrite");return await r.objectStore(rs).put(e,nu(t)),r.done}catch(s){if(s instanceof Ye)Kt.warn(s.message);else{const r=Wt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Kt.warn(r.message)}}}function nu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gg=1024,mg=30*24*60*60*1e3;class yg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _g(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qa(),{heartbeatsToSend:n,unsentEntries:s}=vg(this._heartbeatsCache.heartbeats),r=Kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qa(){return new Date().toISOString().substring(0,10)}function vg(t,e=gg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ya(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ya(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ql()?Yl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ya(t){return Kl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){st(new Qe("platform-logger",e=>new Pp(e),"PRIVATE")),st(new Qe("heartbeat",e=>new yg(e),"PRIVATE")),ze(Qi,Ka,t),ze(Qi,Ka,"esm2017"),ze("fire-js","")}wg("");function Co(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function su(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ig=su,ru=new tn("auth","Firebase",su());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Br("@firebase/auth");function ar(t,...e){Xa.logLevel<=re.ERROR&&Xa.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,...e){throw Do(t,...e)}function Ze(t,...e){return Do(t,...e)}function iu(t,e,n){const s=Object.assign(Object.assign({},Ig()),{[e]:n});return new tn("auth","Firebase",s).create(e,{appName:t.name})}function bg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ge(t,"argument-error"),iu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Do(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ru.create(t,...e)}function V(t,e,...n){if(!t)throw Do(e,...n)}function at(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function dt(t,e){t||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;function ct(t){dt(t instanceof Function,"Expected a class definition");let e=Ja.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ja.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){const n=nn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ss(i,e!=null?e:{}))return r;Ge(r,"already-initialized")}return n.initialize({options:e})}function Eg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sg(){return Za()==="http:"||Za()==="https:"}function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sg()||Wl()||"connection"in navigator)?navigator.onLine:!0}function Ag(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=tp()||np()}get(){return kg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ou{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Es(3e4,6e4);function Ss(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,s,r={}){return au(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=bs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ou.fetch()(cu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function au(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Cg),e);try{const r=new Ng(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw iu(t,u,l);Ge(t,u)}}catch(r){if(r instanceof Ye)throw r;Ge(t,"network-request-failed")}}async function As(t,e,n,s,r={}){const i=await ks(t,e,n,s,r);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function cu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?No(t.config,r):`${t.config.apiScheme}://${r}`}class Ng{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ze(this.auth,"network-request-failed")),Dg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ze(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function Og(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $g(t,e=!1){const n=Oe(t),s=await n.getIdToken(e),r=Ro(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Kn(Ni(r.auth_time)),issuedAtTime:Kn(Ni(r.iat)),expirationTime:Kn(Ni(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(t){return Number(t)*1e3}function Ro(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zf(s);return i?JSON.parse(i):(ar("Failed to decode base64 JWT payload"),null)}catch(i){return ar("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Pg(t){const e=Ro(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ye&&Mg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Mg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t){var e;const n=t.auth,s=await t.getIdToken(),r=await is(t,Og(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fg(i.providerUserInfo):[],a=Ug(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xg(t){const e=Oe(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ug(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Fg(t){return t.map(e=>{var{providerId:n}=e,s=Co(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e){const n=await au(t,{},async()=>{const s=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=cu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ou.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Vg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new os;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $g(this,e)}reload(){return xg(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await is(this,Rg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:te,isAnonymous:O,providerData:S,stsTokenManager:x}=n;V(P&&x,e,"internal-error");const ae=os.fromJSON(this.name,x);V(typeof P=="string",e,"internal-error"),vt(h,e.name),vt(d,e.name),V(typeof te=="boolean",e,"internal-error"),V(typeof O=="boolean",e,"internal-error"),vt(p,e.name),vt(g,e.name),vt(m,e.name),vt(_,e.name),vt(b,e.name),vt(D,e.name);const he=new qt({uid:P,auth:e,email:d,emailVerified:te,displayName:h,isAnonymous:O,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:ae,createdAt:b,lastLoginAt:D});return S&&Array.isArray(S)&&(he.providerData=S.map(Z=>Object.assign({},Z))),_&&(he._redirectEventId=_),he}static async _fromIdTokenResponse(e,n,s=!1){const r=new os;r.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await _r(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uu.type="NONE";const ec=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e,n){return`firebase:${t}:${e}:${n}`}class fn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=cr(this.userKey,r.apiKey,i),this.fullPersistenceKey=cr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fn(ct(ec),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ct(ec);const o=cr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=qt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gu(e))return"Blackberry";if(mu(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||du(e))&&!e.includes("edge/"))return"Chrome";if(pu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hu(t=Re()){return/firefox\//i.test(t)}function Oo(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function du(t=Re()){return/crios\//i.test(t)}function fu(t=Re()){return/iemobile/i.test(t)}function pu(t=Re()){return/android/i.test(t)}function gu(t=Re()){return/blackberry/i.test(t)}function mu(t=Re()){return/webos/i.test(t)}function jr(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bg(t=Re()){var e;return jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jg(){return sp()&&document.documentMode===10}function yu(t=Re()){return jr(t)||pu(t)||mu(t)||gu(t)||/windows phone/i.test(t)||fu(t)}function qg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e=[]){let n;switch(t){case"Browser":n=tc(Re());break;case"Worker":n=`${tc(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${s}`}/**
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
 */class zg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nc(this),this.idTokenSubscription=new nc(this),this.beforeStateQueue=new zg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ru,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await _r(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ag()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Cs(t){return Oe(t)}class nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=lp(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,n){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function Gg(t,e){return ks(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e){return As(t,"POST","/v1/accounts:signInWithPassword",Ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",Ss(t,e))}async function Qg(t,e){return As(t,"POST","/v1/accounts:signInWithEmailLink",Ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends $o{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new as(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Kg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wg(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Gg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return As(t,"POST","/v1/accounts:signInWithIdp",Ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="http://localhost";class Qt extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Co(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:Yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jg(t){const e=Vn(Bn(t)).link,n=e?Vn(Bn(e)).deep_link_id:null,s=Vn(Bn(t)).deep_link_id;return(s?Vn(Bn(s)).link:null)||s||n||e||t}class Po{constructor(e){var n,s,r,i,o,a;const c=Vn(Bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Xg((r=c.mode)!==null&&r!==void 0?r:null);V(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jg(e);try{return new Po(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Po.parseLink(n);return V(s,"argument-error"),as._fromEmailAndCode(e,s.code,s.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class it extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return it.credential(n,s)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Zg(t,e){return As(t,"POST","/v1/accounts:signUp",Ss(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),o=sc(s);return new Yt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=sc(s);return new Yt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ye{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,wr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new wr(e,n,s,r)}}function _u(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wr._fromErrorAndOperation(t,i,e,s):i})}async function em(t,e,n=!1){const s=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await is(t,_u(r,i,e,t),n);V(o.idToken,r,"internal-error");const a=Ro(o.idToken);V(a,r,"internal-error");const{sub:c}=a;return V(t.uid===c,r,"user-mismatch"),Yt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t,e,n=!1){const s="signIn",r=await _u(t,s,e),i=await Yt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function nm(t,e){return wu(Cs(t),e)}async function sm(t,e,n){const s=Cs(t),r=await Zg(s,{returnSecureToken:!0,email:e,password:n}),i=await Yt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function rm(t,e,n){return nm(Oe(t),Dn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e){return Oe(t).setPersistence(e)}function Iu(t,e,n,s){return Oe(t).onAuthStateChanged(e,n,s)}function om(t){return Oe(t).signOut()}const Ir="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ir,"1"),this.storage.removeItem(Ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){const t=Re();return Oo(t)||jr(t)}const cm=1e3,lm=10;class Tu extends bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=am()&&qg(),this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tu.type="LOCAL";const Eu=Tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Su.type="SESSION";const ku=Su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new qr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await um(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function dm(t){et().location.href=t}/**
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
 */function Au(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function fm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gm(){return Au()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="firebaseLocalStorageDb",mm=1,br="firebaseLocalStorage",Du="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zr(t,e){return t.transaction([br],e?"readwrite":"readonly").objectStore(br)}function ym(){const t=indexedDB.deleteDatabase(Cu);return new Ns(t).toPromise()}function Ji(){const t=indexedDB.open(Cu,mm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(br,{keyPath:Du})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(br)?e(s):(s.close(),await ym(),e(await Ji()))})})}async function rc(t,e,n){const s=zr(t,!0).put({[Du]:e,value:n});return new Ns(s).toPromise()}async function vm(t,e){const n=zr(t,!1).get(e),s=await new Ns(n).toPromise();return s===void 0?null:s.value}function ic(t,e){const n=zr(t,!0).delete(e);return new Ns(n).toPromise()}const _m=800,wm=3;class Nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ji(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Au()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qr._getInstance(gm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fm(),!this.activeServiceWorker)return;this.sender=new hm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ji();return await rc(e,Ir,"1"),await ic(e,Ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zr(r,!1).getAll();return new Ns(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nu.type="LOCAL";const Im=Nu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ze("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",bm().appendChild(s)})}function Em(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Es(3e4,6e4);/**
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
 */function Ru(t,e){return e?ct(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sm(t){return wu(t.auth,new xo(t),t.bypassAuthState)}function km(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),tm(n,new xo(t),t.bypassAuthState)}async function Am(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),em(n,new xo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sm;case"linkViaPopup":case"linkViaRedirect":return Am;case"reauthViaPopup":case"reauthViaRedirect":return km;default:Ge(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Es(2e3,1e4);async function Dm(t,e,n){const s=Cs(t);bg(t,e,Mo);const r=Ru(s,n);return new Ut(s,"signInViaPopup",e,r).executeNotNull()}class Ut extends Ou{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cm.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="pendingRedirect",lr=new Map;class Rm extends Ou{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await Om(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Om(t,e){const n=Mm(e),s=Pm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function $m(t,e){lr.set(t._key(),e)}function Pm(t){return ct(t._redirectPersistence)}function Mm(t){return cr(Nm,t.config.apiKey,t.name)}async function Lm(t,e,n=!1){const s=Cs(t),r=Ru(s,e),o=await new Rm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=10*60*1e3;class Um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!$u(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xm&&this.cachedEventUids.clear(),this.cachedEventUids.has(oc(e))}saveEventToCache(e){this.cachedEventUids.add(oc(e)),this.lastProcessedEventTime=Date.now()}}function oc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $u({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $u(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jm=/^https?/;async function qm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vm(t);for(const n of e)try{if(zm(n))return}catch{}Ge(t,"unauthorized-domain")}function zm(t){const e=Xi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!jm.test(n))return!1;if(Bm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Hm=new Es(3e4,6e4);function ac(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gm(t){return new Promise((e,n)=>{var s,r,i;function o(){ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ac(),n(Ze(t,"network-request-failed"))},timeout:Hm.get()})}if(!((r=(s=et().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=Em("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},Tm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ur=null,e})}let ur=null;function Km(t){return ur=ur||Gm(t),ur}/**
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
 */const Wm=new Es(5e3,15e3),Qm="__/auth/iframe",Ym="emulator/auth/iframe",Xm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zm(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?No(e,Ym):`https://${t.config.authDomain}/${Qm}`,s={apiKey:e.apiKey,appName:t.name,v:Ts},r=Jm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${bs(s).slice(1)}`}async function ey(t){const e=await Km(t),n=et().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Zm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},Wm.get());function c(){et().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ny=500,sy=600,ry="_blank",iy="http://localhost";class cc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oy(t,e,n,s=ny,r=sy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ty),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=du(l)?ry:n),hu(l)&&(e=e||iy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Bg(l)&&a!=="_self")return ay(e||"",a),new cc(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new cc(h)}function ay(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cy="__/auth/handler",ly="emulator/auth/handler";function lc(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ts,eventId:r};if(e instanceof Mo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ds){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uy(t)}?${bs(a).slice(1)}`}function uy({config:t}){return t.emulator?No(t,ly):`https://${t.authDomain}/${cy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="webStorageSupport";class hy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ku,this._completeRedirectFn=Lm,this._overrideRedirectResult=$m}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=lc(e,n,s,Xi(),r);return oy(e,o,Lo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),dm(lc(e,n,s,Xi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ey(e),s=new Um(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ri,{type:Ri},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ri];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yu()||Oo()||jr()}}const dy=hy;var uc="@firebase/auth",hc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gy(t){st(new Qe("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vu(t)},u=new Hg(a,c,l);return Eg(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),st(new Qe("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(s=>new fy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(uc,hc,py(t)),ze(uc,hc,"esm2017")}/**
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
 */function my(t=Ao()){const e=nn(t,"auth");return e.isInitialized()?e.getImmediate():Tg(t,{popupRedirectResolver:dy,persistence:[Im,Eu,ku]})}gy("Browser");const Pu="@firebase/installations",Uo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=1e4,Lu=`w:${Uo}`,xu="FIS_v2",yy="https://firebaseinstallations.googleapis.com/v1",vy=60*60*1e3,_y="installations",wy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xt=new tn(_y,wy,Iy);function Uu(t){return t instanceof Ye&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu({projectId:t}){return`${yy}/projects/${t}/installations`}function Vu(t){return{token:t.token,requestStatus:2,expiresIn:Ty(t.expiresIn),creationTime:Date.now()}}async function Bu(t,e){const s=(await e.json()).error;return Xt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ju({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function by(t,{refreshToken:e}){const n=ju(t);return n.append("Authorization",Ey(e)),n}async function qu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ty(t){return Number(t.replace("s","000"))}function Ey(t){return`${xu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Fu(t),r=ju(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:xu,appId:t.appId,sdkVersion:Lu},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await qu(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Vu(l.authToken)}}else throw await Bu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=/^[cdef][\w-]{21}$/,Zi="";function Cy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Dy(t);return Ay.test(n)?n:Zi}catch{return Zi}}function Dy(t){return ky(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map;function Gu(t,e){const n=Hr(t);Ku(n,e),Ny(n,e)}function Ku(t,e){const n=Hu.get(t);if(!!n)for(const s of n)s(e)}function Ny(t,e){const n=Ry();n&&n.postMessage({key:t,fid:e}),Oy()}let Ft=null;function Ry(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=t=>{Ku(t.data.key,t.data.fid)}),Ft}function Oy(){Hu.size===0&&Ft&&(Ft.close(),Ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="firebase-installations-database",Py=1,Jt="firebase-installations-store";let Oi=null;function Fo(){return Oi||(Oi=Zl($y,Py,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jt)}}})),Oi}async function Tr(t,e){const n=Hr(t),r=(await Fo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Gu(t,e.fid),e}async function Wu(t){const e=Hr(t),s=(await Fo()).transaction(Jt,"readwrite");await s.objectStore(Jt).delete(e),await s.done}async function Gr(t,e){const n=Hr(t),r=(await Fo()).transaction(Jt,"readwrite"),i=r.objectStore(Jt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Gu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){let e;const n=await Gr(t.appConfig,s=>{const r=My(s),i=Ly(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Zi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function My(t){const e=t||{fid:Cy(),registrationStatus:0};return Qu(e)}function Ly(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Xt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=xy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Uy(t)}:{installationEntry:e}}async function xy(t,e){try{const n=await Sy(t,e);return Tr(t.appConfig,n)}catch(n){throw Uu(n)&&n.customData.serverCode===409?await Wu(t.appConfig):await Tr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Uy(t){let e=await dc(t.appConfig);for(;e.registrationStatus===1;)await zu(100),e=await dc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Vo(t);return s||n}return e}function dc(t){return Gr(t,e=>{if(!e)throw Xt.create("installation-not-found");return Qu(e)})}function Qu(t){return Fy(t)?{fid:t.fid,registrationStatus:0}:t}function Fy(t){return t.registrationStatus===1&&t.registrationTime+Mu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy({appConfig:t,heartbeatServiceProvider:e},n){const s=By(t,n),r=by(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Lu,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await qu(()=>fetch(s,a));if(c.ok){const l=await c.json();return Vu(l)}else throw await Bu("Generate Auth Token",c)}function By(t,{fid:e}){return`${Fu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e=!1){let n;const s=await Gr(t.appConfig,i=>{if(!Yu(i))throw Xt.create("not-registered");const o=i.authToken;if(!e&&zy(o))return i;if(o.requestStatus===1)return n=jy(t,e),i;{if(!navigator.onLine)throw Xt.create("app-offline");const a=Gy(i);return n=qy(t,a),a}});return n?await n:s.authToken}async function jy(t,e){let n=await fc(t.appConfig);for(;n.authToken.requestStatus===1;)await zu(100),n=await fc(t.appConfig);const s=n.authToken;return s.requestStatus===0?Bo(t,e):s}function fc(t){return Gr(t,e=>{if(!Yu(e))throw Xt.create("not-registered");const n=e.authToken;return Ky(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qy(t,e){try{const n=await Vy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Tr(t.appConfig,s),n}catch(n){if(Uu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tr(t.appConfig,s)}throw n}}function Yu(t){return t!==void 0&&t.registrationStatus===2}function zy(t){return t.requestStatus===2&&!Hy(t)}function Hy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+vy}function Gy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ky(t){return t.requestStatus===1&&t.requestTime+Mu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(t){const e=t,{installationEntry:n,registrationPromise:s}=await Vo(e);return s?s.catch(console.error):Bo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(t,e=!1){const n=t;return await Yy(n),(await Bo(n,e)).token}async function Yy(t){const{registrationPromise:e}=await Vo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){if(!t||!t.options)throw $i("App Configuration");if(!t.name)throw $i("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $i(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $i(t){return Xt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="installations",Jy="installations-internal",Zy=t=>{const e=t.getProvider("app").getImmediate(),n=Xy(e),s=nn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ev=t=>{const e=t.getProvider("app").getImmediate(),n=nn(e,Xu).getImmediate();return{getId:()=>Wy(n),getToken:r=>Qy(n,r)}};function tv(){st(new Qe(Xu,Zy,"PUBLIC")),st(new Qe(Jy,ev,"PRIVATE"))}tv();ze(Pu,Uo);ze(Pu,Uo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="analytics",nv="firebase_id",sv="origin",rv=60*1e3,iv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ju="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Br("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ov(t,e){const n=document.createElement("script");n.src=`${Ju}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function av(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function cv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Zu(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Fe.error(a)}t("config",r,i)}async function lv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Zu(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Fe.error(i)}}function uv(t,e,n,s){async function r(i,o,a){try{i==="event"?await lv(t,e,n,o,a):i==="config"?await cv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Fe.error(c)}}return r}function hv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=uv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function dv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ju))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},He=new tn("analytics","Analytics",fv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=30,gv=1e3;class mv{constructor(e={},n=gv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eh=new mv;function yv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:yv(s)},i=iv.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function _v(t,e=eh,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw He.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw He.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bv;return setTimeout(async()=>{a.abort()},n!==void 0?n:rv),th({appId:s,apiKey:r,measurementId:i},o,a,e)}async function th(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=eh){var i,o;const{appId:a,measurementId:c}=t;try{await wv(s,e)}catch(l){if(c)return Fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await vv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!Iv(u)){if(r.deleteThrottleMetadata(a),c)return Fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?qa(n,r.intervalMillis,pv):qa(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),Fe.debug(`Calling attemptFetch again in ${h} millis`),th(t,d,s,r)}}function wv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Iv(t){if(!(t instanceof Ye)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Tv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(){var t;if(Ql())try{await Yl()}catch(e){return Fe.warn(He.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Fe.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sv(t,e,n,s,r,i,o){var a;const c=_v(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Fe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Fe.error(p)),e.push(c);const l=Ev().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);dv()||ov(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[sv]="firebase",d.update=!0,h!=null&&(d[nv]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.app=e}_delete(){return delete Wn[this.app.options.appId],Promise.resolve()}}let Wn={},pc=[];const gc={};let Pi="dataLayer",Av="gtag",mc,nh,yc=!1;function Cv(){const t=[];if(Wl()&&t.push("This is a browser extension environment."),rp()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Fe.warn(n.message)}}function Dv(t,e,n){Cv();const s=t.options.appId;if(!s)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(Wn[s]!=null)throw He.create("already-exists",{id:s});if(!yc){av(Pi);const{wrappedGtag:i,gtagCore:o}=hv(Wn,pc,gc,Pi,Av);nh=i,mc=o,yc=!0}return Wn[s]=Sv(t,pc,gc,e,mc,Pi,n),new kv(t)}function Nv(t=Ao()){t=Oe(t);const e=nn(t,Er);return e.isInitialized()?e.getImmediate():Rv(t)}function Rv(t,e={}){const n=nn(t,Er);if(n.isInitialized()){const r=n.getImmediate();if(ss(e,n.getOptions()))return r;throw He.create("already-initialized")}return n.initialize({options:e})}function Ov(t,e,n,s){t=Oe(t),Tv(nh,Wn[t.app.options.appId],e,n,s).catch(r=>Fe.error(r))}const vc="@firebase/analytics",_c="0.8.0";function $v(){st(new Qe(Er,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Dv(s,r,n)},"PUBLIC")),st(new Qe("analytics-internal",t,"PRIVATE")),ze(vc,_c),ze(vc,_c,"esm2017");function t(e){try{const n=e.getProvider(Er).getImmediate();return{logEvent:(s,r,i)=>Ov(n,s,r,i)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}$v();var Pv="firebase",Mv="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Pv,Mv,"app");var Lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,jo=jo||{},B=Lv||self;function Sr(){}function Kr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xv(t){return Object.prototype.hasOwnProperty.call(t,Mi)&&t[Mi]||(t[Mi]=++Uv)}var Mi="closure_uid_"+(1e9*Math.random()>>>0),Uv=0;function Fv(t,e,n){return t.call.apply(t.bind,arguments)}function Vv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=Fv:De=Vv,De.apply(null,arguments)}function Js(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Rt(){this.s=this.s,this.o=this.o}var Bv=0;Rt.prototype.s=!1;Rt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Bv!=0)&&xv(this)};Rt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Kr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var jv=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",Sr,e),B.removeEventListener("test",Sr,e)}catch{}return t}();function kr(t){return/^[\s\xa0]*$/.test(t)}var Ic=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Li(t,e){return t<e?-1:t>e?1:0}function Wr(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Xe(t){return Wr().indexOf(t)!=-1}function zo(t){return zo[" "](t),t}zo[" "]=Sr;function qv(t){var e=Gv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zv=Xe("Opera"),_n=Xe("Trident")||Xe("MSIE"),rh=Xe("Edge"),eo=rh||_n,ih=Xe("Gecko")&&!(Wr().toLowerCase().indexOf("webkit")!=-1&&!Xe("Edge"))&&!(Xe("Trident")||Xe("MSIE"))&&!Xe("Edge"),Hv=Wr().toLowerCase().indexOf("webkit")!=-1&&!Xe("Edge");function oh(){var t=B.document;return t?t.documentMode:void 0}var Ar;e:{var xi="",Ui=function(){var t=Wr();if(ih)return/rv:([^\);]+)(\)|;)/.exec(t);if(rh)return/Edge\/([\d\.]+)/.exec(t);if(_n)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Hv)return/WebKit\/(\S+)/.exec(t);if(zv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ui&&(xi=Ui?Ui[1]:""),_n){var Fi=oh();if(Fi!=null&&Fi>parseFloat(xi)){Ar=String(Fi);break e}}Ar=xi}var Gv={};function Kv(){return qv(function(){let t=0;const e=Ic(String(Ar)).split("."),n=Ic("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Li(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Li(r[2].length==0,i[2].length==0)||Li(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var to;if(B.document&&_n){var bc=oh();to=bc||parseInt(Ar,10)||void 0}else to=void 0;var Wv=to;function cs(t,e){if(Ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ih){e:{try{zo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cs.X.h.call(this)}}Ae(cs,Ne);var Qv={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),Yv=0;function Xv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Yv,this.ba=this.ea=!1}function Qr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ho(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ah(t){const e={};for(const n in t)e[n]=t[n];return e}const Tc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ch(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Tc.length;i++)n=Tc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Yr(t){this.src=t,this.g={},this.h=0}Yr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=so(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Xv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function no(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=sh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Qr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function so(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Go="closure_lm_"+(1e6*Math.random()|0),Vi={};function lh(t,e,n,s,r){if(s&&s.once)return hh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lh(t,e[i],n,s,r);return null}return n=Qo(n),t&&t[Os]?t.N(e,n,Rs(s)?!!s.capture:!!s,r):uh(t,e,n,!1,s,r)}function uh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Rs(r)?!!r.capture:!!r,a=Wo(t);if(a||(t[Go]=a=new Yr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Jv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jv||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(fh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Jv(){function t(n){return e.call(t.src,t.listener,n)}const e=Zv;return t}function hh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hh(t,e[i],n,s,r);return null}return n=Qo(n),t&&t[Os]?t.O(e,n,Rs(s)?!!s.capture:!!s,r):uh(t,e,n,!0,s,r)}function dh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)dh(t,e[i],n,s,r);else s=Rs(s)?!!s.capture:!!s,n=Qo(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=so(i,n,s,r),-1<n&&(Qr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=so(e,n,s,r)),(n=-1<t?e[t]:null)&&Ko(n))}function Ko(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])no(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wo(e))?(no(n,t),n.h==0&&(n.src=null,e[Go]=null)):Qr(t)}}}function fh(t){return t in Vi?Vi[t]:Vi[t]="on"+t}function Zv(t,e){if(t.ba)t=!0;else{e=new cs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ko(t),t=n.call(s,e)}return t}function Wo(t){return t=t[Go],t instanceof Yr?t:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(t){return typeof t=="function"?t:(t[Bi]||(t[Bi]=function(e){return t.handleEvent(e)}),t[Bi])}function be(){Rt.call(this),this.i=new Yr(this),this.P=this,this.I=null}Ae(be,Rt);be.prototype[Os]=!0;be.prototype.removeEventListener=function(t,e,n,s){dh(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ne(e,t);else if(e instanceof Ne)e.target=e.target||t;else{var r=e;e=new Ne(s,t),ch(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Zs(o,s,!0,e)&&r}if(o=e.g=t,r=Zs(o,s,!0,e)&&r,r=Zs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Zs(o,s,!1,e)&&r}be.prototype.M=function(){if(be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qr(n[s]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&no(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Yo=B.JSON.stringify;function e_(){var t=mh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class t_{constructor(){this.h=this.g=null}add(e,n){const s=ph.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ph=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new n_,t=>t.reset());class n_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function s_(t){B.setTimeout(()=>{throw t},0)}function gh(t,e){ro||r_(),io||(ro(),io=!0),mh.add(t,e)}var ro;function r_(){var t=B.Promise.resolve(void 0);ro=function(){t.then(i_)}}var io=!1,mh=new t_;function i_(){for(var t;t=e_();){try{t.h.call(t.g)}catch(n){s_(n)}var e=ph;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function Xr(t,e){be.call(this),this.h=t||1,this.g=e||B,this.j=De(this.kb,this),this.l=Date.now()}Ae(Xr,be);N=Xr.prototype;N.ca=!1;N.R=null;N.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(Xo(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){Xr.X.M.call(this),Xo(this),delete this.g};function Jo(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function yh(t){t.g=Jo(()=>{t.g=null,t.i&&(t.i=!1,yh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class o_ extends Rt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yh(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){Rt.call(this),this.h=t,this.g={}}Ae(ls,Rt);var Ec=[];function vh(t,e,n,s){Array.isArray(n)||(n&&(Ec[0]=n.toString()),n=Ec);for(var r=0;r<n.length;r++){var i=lh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _h(t){Ho(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ko(e)},t),t.g={}}ls.prototype.M=function(){ls.X.M.call(this),_h(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jr(){this.g=!0}Jr.prototype.Aa=function(){this.g=!1};function a_(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function c_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function hn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+u_(t,n)+(s?" "+s:"")})}function l_(t,e){t.info(function(){return"TIMEOUT: "+e})}Jr.prototype.info=function(){};function u_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Yo(n)}catch{return e}}var sn={},Sc=null;function Zr(){return Sc=Sc||new be}sn.Oa="serverreachability";function wh(t){Ne.call(this,sn.Oa,t)}Ae(wh,Ne);function us(t){const e=Zr();Se(e,new wh(e))}sn.STAT_EVENT="statevent";function Ih(t,e){Ne.call(this,sn.STAT_EVENT,t),this.stat=e}Ae(Ih,Ne);function Me(t){const e=Zr();Se(e,new Ih(e,t))}sn.Pa="timingevent";function bh(t,e){Ne.call(this,sn.Pa,t),this.size=e}Ae(bh,Ne);function $s(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var ei={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Th={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zo(){}Zo.prototype.h=null;function kc(t){return t.h||(t.h=t.i())}function Eh(){}var Ps={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ea(){Ne.call(this,"d")}Ae(ea,Ne);function ta(){Ne.call(this,"c")}Ae(ta,Ne);var oo;function ti(){}Ae(ti,Zo);ti.prototype.g=function(){return new XMLHttpRequest};ti.prototype.i=function(){return{}};oo=new ti;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ls(this),this.O=h_,t=eo?125:void 0,this.T=new Xr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Sh}function Sh(){this.i=null,this.g="",this.h=!1}var h_=45e3,ao={},Cr={};N=Ms.prototype;N.setTimeout=function(t){this.O=t};function co(t,e,n){t.K=1,t.v=si(ft(e)),t.s=n,t.P=!0,kh(t,null)}function kh(t,e){t.F=Date.now(),Ls(t),t.A=ft(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ph(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Sh,t.g=td(t.l,n?e:null,!t.s),0<t.N&&(t.L=new o_(De(t.Ka,t,t.g),t.N)),vh(t.S,t.g,"readystatechange",t.hb),e=t.H?ah(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),us(),a_(t.j,t.u,t.A,t.m,t.U,t.s)}N.hb=function(t){t=t.target;const e=this.L;e&&lt(t)==3?e.l():this.Ka(t)};N.Ka=function(t){try{if(t==this.g)e:{const u=lt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||eo||this.g&&(this.h.h||this.g.fa()||Nc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?us(3):us(2)),ni(this);var n=this.g.aa();this.Y=n;t:if(Ah(this)){var s=Nc(this.g);t="";var r=s.length,i=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vt(this),Qn(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,c_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kr(a)){var l=a;break t}}l=null}if(n=l)hn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lo(this,n);else{this.i=!1,this.o=3,Me(12),Vt(this),Qn(this);break e}}this.P?(Ch(this,u,o),eo&&this.i&&u==3&&(vh(this.S,this.T,"tick",this.gb),this.T.start())):(hn(this.j,this.m,o,null),lo(this,o)),u==4&&Vt(this),this.i&&!this.I&&(u==4?Xh(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),Vt(this),Qn(this)}}}catch{}finally{}};function Ah(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ch(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=d_(t,n),r==Cr){e==4&&(t.o=4,Me(14),s=!1),hn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ao){t.o=4,Me(15),hn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hn(t.j,t.m,r,null),lo(t,r);Ah(t)&&r!=Cr&&r!=ao&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ca(e),e.K=!0,Me(11))):(hn(t.j,t.m,n,"[Invalid Chunked Response]"),Vt(t),Qn(t))}N.gb=function(){if(this.g){var t=lt(this.g),e=this.g.fa();this.C<e.length&&(ni(this),Ch(this,t,e),this.i&&t!=4&&Ls(this))}};function d_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Cr:(n=Number(e.substring(n,s)),isNaN(n)?ao:(s+=1,s+n>e.length?Cr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,Vt(this)};function Ls(t){t.V=Date.now()+t.O,Dh(t,t.O)}function Dh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$s(De(t.fb,t),e)}function ni(t){t.B&&(B.clearTimeout(t.B),t.B=null)}N.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(l_(this.j,this.A),this.K!=2&&(us(),Me(17)),Vt(this),this.o=2,Qn(this)):Dh(this,this.V-t)};function Qn(t){t.l.G==0||t.I||Xh(t.l,t)}function Vt(t){ni(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xo(t.T),_h(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||uo(n.h,t))){if(!t.J&&uo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Rr(n),oi(n);else break e;aa(n),Me(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=$s(De(n.bb,n),6e3));if(1>=xh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bt(n,11)}else if((t.J||n.g==t)&&Rr(n),!kr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(na(i,i.h),i.h=null))}if(s.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,le(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ed(s,s.H?s.ka:null,s.V),o.J){Uh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ni(a),Ls(a)),s.g=o}else Qh(s);0<n.i.length&&ai(n)}else l[0]!="stop"&&l[0]!="close"||Bt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bt(n,7):oa(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}us(4)}catch{}}function f_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function p_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=p_(t),s=f_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zt){this.h=e!==void 0?e:t.h,Dr(this,t.j),this.s=t.s,this.g=t.g,Nr(this,t.m),this.l=t.l,e=t.i;var n=new hs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ac(this,n),this.o=t.o}else t&&(n=String(t).match(Rh))?(this.h=!!e,Dr(this,n[1]||"",!0),this.s=jn(n[2]||""),this.g=jn(n[3]||"",!0),Nr(this,n[4]),this.l=jn(n[5]||"",!0),Ac(this,n[6]||"",!0),this.o=jn(n[7]||"")):(this.h=!!e,this.i=new hs(null,this.h))}zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qn(e,Cc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qn(e,Cc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qn(n,n.charAt(0)=="/"?v_:y_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qn(n,w_)),t.join("")};function ft(t){return new zt(t)}function Dr(t,e,n){t.j=n?jn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ac(t,e,n){e instanceof hs?(t.i=e,I_(t.i,t.h)):(n||(e=qn(e,__)),t.i=new hs(e,t.h))}function le(t,e,n){t.i.set(e,n)}function si(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,m_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function m_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cc=/[#\/\?@]/g,y_=/[#\?:]/g,v_=/[#\?]/g,__=/[#\?@]/g,w_=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ot(t){t.g||(t.g=new Map,t.h=0,t.i&&g_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=hs.prototype;N.add=function(t,e){Ot(this),this.i=null,t=Nn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Oh(t,e){Ot(t),e=Nn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $h(t,e){return Ot(t),e=Nn(t,e),t.g.has(e)}N.forEach=function(t,e){Ot(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Ot(this);let e=[];if(typeof t=="string")$h(this,t)&&(e=e.concat(this.g.get(Nn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Ot(this),this.i=null,t=Nn(this,t),$h(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ph(t,e,n){Oh(t,e),0<n.length&&(t.i=null,t.g.set(Nn(t,e),qo(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Nn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function I_(t,e){e&&!t.j&&(Ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Oh(this,s),Ph(this,r,n))},t)),t.j=e}var b_=class{constructor(t,e){this.h=t,this.g=e}};function Mh(t){this.l=t||T_,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var T_=10;function Lh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xh(t){return t.h?1:t.g?t.g.size:0}function uo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function na(t,e){t.g?t.g.add(e):t.h=e}function Uh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mh.prototype.cancel=function(){if(this.i=Fh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Fh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qo(t.i)}function sa(){}sa.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};sa.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function E_(){this.g=new sa}function S_(t,e,n){const s=n||"";try{Nh(t,function(r,i){let o=r;Rs(r)&&(o=Yo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function k_(t,e){const n=new Jr;if(B.Image){const s=new Image;s.onload=Js(er,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Js(er,n,s,"TestLoadImage: error",!1,e),s.onabort=Js(er,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Js(er,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function er(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}Ae(xs,Zo);xs.prototype.g=function(){return new ri(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function ri(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ra,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(ri,be);var ra=0;N=ri.prototype;N.open=function(t,e){if(this.readyState!=ra)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ds(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=ra};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vh(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Vh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):ds(this),this.readyState==3&&Vh(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Us(this))};N.Ta=function(t){this.g&&(this.response=t,Us(this))};N.ga=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ds(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var A_=B.JSON.parse;function pe(t){be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bh,this.K=this.L=!1}Ae(pe,be);var Bh="",C_=/^https?$/i,D_=["POST","PUT"];N=pe.prototype;N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oo.g(),this.C=this.u?kc(this.u):kc(oo),this.g.onreadystatechange=De(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Dc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=B.FormData&&t instanceof B.FormData,!(0<=sh(D_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zh(this),0<this.B&&((this.K=N_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.qa,this)):this.A=Jo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dc(this,i)}};function N_(t){return _n&&Kv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof jo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function Dc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jh(t),ii(t)}function jh(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),ii(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ii(this,!0)),pe.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?qh(this):this.eb())};N.eb=function(){qh(this)};function qh(t){if(t.h&&typeof jo<"u"&&(!t.C[1]||lt(t)!=4||t.aa()!=2)){if(t.v&&lt(t)==4)Jo(t.Ha,0,t);else if(Se(t,"readystatechange"),lt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Rh)[1]||null;if(!r&&B.self&&B.self.location){var i=B.self.location.protocol;r=i.substr(0,i.length-1)}s=!C_.test(r?r.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<lt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",jh(t)}}finally{ii(t)}}}}function ii(t,e){if(t.g){zh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function zh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function lt(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),A_(e)}};function Nc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hh(t){let e="";return Ho(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Hh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gh(t){this.Ca=0,this.i=[],this.j=new Jr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=xn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=xn("baseRetryDelayMs",5e3,t),this.ab=xn("retryDelaySeedMs",1e4,t),this.Za=xn("forwardChannelMaxRetries",2,t),this.ta=xn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Mh(t&&t.concurrentRequestLimit),this.Fa=new E_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Gh.prototype;N.ma=8;N.G=1;function oa(t){if(Kh(t),t.G==3){var e=t.U++,n=ft(t.F);le(n,"SID",t.I),le(n,"RID",e),le(n,"TYPE","terminate"),Fs(t,n),e=new Ms(t,t.j,e,void 0),e.K=2,e.v=si(ft(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=td(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ls(e)}Zh(t)}function oi(t){t.g&&(ca(t),t.g.cancel(),t.g=null)}function Kh(t){oi(t),t.u&&(B.clearTimeout(t.u),t.u=null),Rr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function ai(t){Lh(t.h)||t.m||(t.m=!0,gh(t.Ja,t),t.C=0)}function R_(t,e){return xh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=$s(De(t.Ja,t,e),Jh(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ms(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ah(i),ch(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wh(this,r,e),n=ft(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),Fs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Hh(i)))+"&"+e:this.o&&ia(n,this.o,i)),na(this.h,r),this.Xa&&le(n,"TYPE","init"),this.O?(le(n,"$req",e),le(n,"SID","null"),r.Z=!0,co(r,n,null)):co(r,n,e),this.G=2}}else this.G==3&&(t?Rc(this,t):this.i.length==0||Lh(this.h)||Rc(this))};function Rc(t,e){var n;e?n=e.m:n=t.U++;const s=ft(t.F);le(s,"SID",t.I),le(s,"RID",n),le(s,"AID",t.T),Fs(t,s),t.o&&t.s&&ia(s,t.o,t.s),n=new Ms(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Wh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),na(t.h,n),co(n,s,e)}function Fs(t,e){t.ia&&Ho(t.ia,function(n,s){le(e,s,n)}),t.l&&Nh({},function(n,s){le(e,s,n)})}function Wh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?De(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{S_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Qh(t){t.g||t.u||(t.Z=1,gh(t.Ia,t),t.A=0)}function aa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=$s(De(t.Ia,t),Jh(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,Yh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=$s(De(this.cb,this),t)}};N.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),oi(this),Yh(this))};function ca(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function Yh(t){t.g=new Ms(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ft(t.sa);le(e,"RID","rpc"),le(e,"SID",t.I),le(e,"CI",t.L?"0":"1"),le(e,"AID",t.T),le(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=si(ft(e)),n.s=null,n.P=!0,kh(n,t)}N.bb=function(){this.v!=null&&(this.v=null,oi(this),aa(this),Me(19))};function Rr(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function Xh(t,e){var n=null;if(t.g==e){Rr(t),ca(t),t.g=null;var s=2}else if(uo(t.h,e))n=e.D,Uh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Zr(),Se(s,new bh(s,n)),ai(t)}else Qh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&R_(t,e)||s==2&&aa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bt(t,5);break;case 4:Bt(t,10);break;case 3:Bt(t,6);break;default:Bt(t,2)}}}function Jh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Bt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=De(t.jb,t);n||(n=new zt("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Dr(n,"https"),si(n)),k_(n.toString(),s)}else Me(2);t.G=0,t.l&&t.l.va(e),Zh(t),Kh(t)}N.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Zh(t){if(t.G=0,t.la=[],t.l){const e=Fh(t.h);(e.length!=0||t.i.length!=0)&&(wc(t.la,e),wc(t.la,t.i),t.h.i.length=0,qo(t.i),t.i.length=0),t.l.ua()}}function ed(t,e,n){var s=n instanceof zt?ft(n):new zt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Nr(s,s.m);else{var r=B.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new zt(null,void 0);s&&Dr(i,s),e&&(i.g=e),r&&Nr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&le(s,n,e),le(s,"VER",t.ma),Fs(t,s),s}function td(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new pe(new xs({ib:!0})):new pe(t.ra),e.L=t.H,e}function nd(){}N=nd.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Qa=function(){};function Or(){if(_n&&!(10<=Number(Wv)))throw Error("Environmental error: no available transport.")}Or.prototype.g=function(t,e){return new Be(t,e)};function Be(t,e){be.call(this),this.g=new Gh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!kr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!kr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rn(this)}Ae(Be,be);Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Me(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ed(t,null,t.V),ai(t)};Be.prototype.close=function(){oa(this.g)};Be.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yo(t),t=n);e.i.push(new b_(e.$a++,t)),e.G==3&&ai(e)};Be.prototype.M=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,Be.X.M.call(this)};function sd(t){ea.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(sd,ea);function rd(){ta.call(this),this.status=1}Ae(rd,ta);function Rn(t){this.g=t}Ae(Rn,nd);Rn.prototype.xa=function(){Se(this.g,"a")};Rn.prototype.wa=function(t){Se(this.g,new sd(t))};Rn.prototype.va=function(t){Se(this.g,new rd)};Rn.prototype.ua=function(){Se(this.g,"b")};Or.prototype.createWebChannel=Or.prototype.g;Be.prototype.send=Be.prototype.u;Be.prototype.open=Be.prototype.m;Be.prototype.close=Be.prototype.close;ei.NO_ERROR=0;ei.TIMEOUT=8;ei.HTTP_ERROR=6;Th.COMPLETE="complete";Eh.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";be.prototype.listen=be.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.Na;pe.prototype.getLastErrorCode=pe.prototype.Ea;pe.prototype.getStatus=pe.prototype.aa;pe.prototype.getResponseJson=pe.prototype.Ra;pe.prototype.getResponseText=pe.prototype.fa;pe.prototype.send=pe.prototype.da;var O_=function(){return new Or},$_=function(){return Zr()},ji=ei,P_=Th,M_=sn,Oc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},L_=xs,tr=Eh,x_=pe;const $c="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zt=new Br("@firebase/firestore");function Pc(){return Zt.logLevel}function R(t,...e){if(Zt.logLevel<=re.DEBUG){const n=e.map(la);Zt.debug(`Firestore (${On}): ${t}`,...n)}}function pt(t,...e){if(Zt.logLevel<=re.ERROR){const n=e.map(la);Zt.error(`Firestore (${On}): ${t}`,...n)}}function Mc(t,...e){if(Zt.logLevel<=re.WARN){const n=e.map(la);Zt.warn(`Firestore (${On}): ${t}`,...n)}}function la(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+t;throw pt(e),new Error(e)}function oe(t,e){t||z()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ye{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class V_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new U_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Le(e)}}class B_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class j_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new B_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new q_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=H_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function wn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fs{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends fs{construct(e,n,s){return new ue(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const G_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends fs{construct(e,n,s){return new Ce(e,n,s)}static isValidIdentifier(e){return G_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(n)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ue.fromString(e))}static fromName(e){return new $(ue.fromString(e).popFirst(5))}static empty(){return new $(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ue(e.slice()))}}function K_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new me(n+1,0):new me(n,s));return new kt(r,$.empty(),e)}function W_(t){return new kt(t.readTime,t.key,-1)}class kt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new kt(G.min(),$.empty(),-1)}static max(){return new kt(G.max(),$.empty(),-1)}}function Q_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Y_)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,s)=>{n(e)})}static reject(e){return new I((n,s)=>{s(e)})}static waitFor(e){return new I((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=I.resolve(!1);for(const s of e)n=n.next(r=>r?I.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new I((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new I((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function Lc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ua.at=-1;class we{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nr(this.root,e,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nr(this.root,e,this.comparator,!0)}}class nr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Te.RED,this.left=r!=null?r:Te.EMPTY,this.right=i!=null?i:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Te(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Te.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xc(this.data.getIterator())}getIteratorFrom(e){return new xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new tt([])}unionWith(e){let n=new ye(Ce.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const J_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(t){if(oe(!!t),typeof t=="string"){let e=0;const n=J_.exec(t);if(oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function In(t){return typeof t=="string"?ke.fromBase64String(t):ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cd(t){const e=t.mapValue.fields.__previous_value__;return ad(e)?cd(e):e}function ps(t){const e=At(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class gs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}function ci(t){return t==null}function $r(t){return t===0&&1/t==-1/0}function ew(t){return typeof t=="number"&&Number.isInteger(t)&&!$r(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ad(t)?4:tw(t)?9007199254740991:10:z()}function rt(t,e){if(t===e)return!0;const n=en(t);if(n!==en(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ps(t).isEqual(ps(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=At(s.timestampValue),o=At(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return In(s.bytesValue).isEqual(In(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return fe(s.geoPointValue.latitude)===fe(r.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return fe(s.integerValue)===fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=fe(s.doubleValue),o=fe(r.doubleValue);return i===o?$r(i)===$r(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return wn(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Lc(i)!==Lc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rt(i[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ms(t,e){return(t.values||[]).find(n=>rt(n,e))!==void 0}function bn(t,e){if(t===e)return 0;const n=en(t),s=en(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=fe(r.integerValue||r.doubleValue),a=fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Uc(t.timestampValue,e.timestampValue);case 4:return Uc(ps(t),ps(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=In(r),a=In(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ie(o[c],a[c]);if(l!==0)return l}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(fe(r.latitude),fe(i.latitude));return o!==0?o:ie(fe(r.longitude),fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bn(o[c],a[c]);if(l)return l}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===sr.mapValue&&i===sr.mapValue)return 0;if(r===sr.mapValue)return 1;if(i===sr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ie(a[u],l[u]);if(h!==0)return h;const d=bn(o[a[u]],c[l[u]]);if(d!==0)return d}return ie(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function Uc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=At(t),s=At(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function gn(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=At(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?In(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ho(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ho(s.fields[a])}`;return i+"}"}(t.mapValue):z();var e,n}function fo(t){return!!t&&"integerValue"in t}function ha(t){return!!t&&"arrayValue"in t}function Fc(t){return!!t&&"nullValue"in t}function Vc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hr(t){return!!t&&"mapValue"in t}function Yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $n(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Yn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!hr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(n)}setAll(e){let n=Ce.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Yn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());hr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];hr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){$n(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(Yn(this.value))}}function ld(t){const e=[];return $n(t.fields,(n,s)=>{const r=new Ce([n]);if(hr(s)){const i=ld(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ee(e,0,G.min(),G.min(),qe.empty(),0)}static newFoundDocument(e,n,s){return new Ee(e,1,n,G.min(),s,0)}static newNoDocument(e,n){return new Ee(e,2,n,G.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,G.min(),qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Bc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nw(t,e,n,s,r,i,o)}function da(t){const e=H(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+gn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ci(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>gn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>gn(s)).join(",")),e.ht=n}return e.ht}function sw(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${gn(s.value)}`;var s}).join(", ")}]`),ci(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>gn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>gn(n)).join(",")),`Target(${e})`}function fa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!hw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qc(t.startAt,e.startAt)&&qc(t.endAt,e.endAt)}function po(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new rw(e,n,s):n==="array-contains"?new aw(e,s):n==="in"?new cw(e,s):n==="not-in"?new lw(e,s):n==="array-contains-any"?new uw(e,s):new xe(e,n,s)}static lt(e,n,s){return n==="in"?new iw(e,s):new ow(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(bn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.ft(bn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rw extends xe{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.ft(n)}}class iw extends xe{constructor(e,n){super(e,"in",n),this.keys=ud("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ow extends xe{constructor(e,n){super(e,"not-in",n),this.keys=ud("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ud(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class aw extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ha(n)&&ms(n.arrayValue,this.value)}}class cw extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class lw extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class uw extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ms(this.value.arrayValue,s))}}class Pr{constructor(e,n){this.position=e,this.inclusive=n}}class Xn{constructor(e,n="asc"){this.field=e,this.dir=n}}function hw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function dw(t,e,n,s,r,i,o,a){return new li(t,e,n,s,r,i,o,a)}function pa(t){return new li(t)}function zc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function gw(t){return t.collectionGroup!==null}function ys(t){const e=H(t);if(e._t===null){e._t=[];const n=pw(e),s=fw(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Xn(n)),e._t.push(new Xn(Ce.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Xn(Ce.keyField(),i))}}}return e._t}function gt(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=Bc(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ys(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xn(i.field,o))}const s=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e.wt=Bc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function go(t,e,n){return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ui(t,e){return fa(gt(t),gt(e))&&t.limitType===e.limitType}function hd(t){return`${da(gt(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${sw(gt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=jc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ys(n),s)||n.endAt&&!function(r,i,o){const a=jc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ys(n),s))}(t,e)}function mw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dd(t){return(e,n)=>{let s=!1;for(const r of ys(t)){const i=yw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yw(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bn(a,c):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(e)?"-0":e}}function pd(t){return{integerValue:""+t}}function vw(t,e){return ew(e)?pd(e):fd(t,e)}/**
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
 */class hi{constructor(){this._=void 0}}function _w(t,e,n){return t instanceof Mr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof vs?md(t,e):t instanceof _s?yd(t,e):function(s,r){const i=gd(s,r),o=Hc(i)+Hc(s.yt);return fo(i)&&fo(s.yt)?pd(o):fd(s.It,o)}(t,e)}function ww(t,e,n){return t instanceof vs?md(t,e):t instanceof _s?yd(t,e):n}function gd(t,e){return t instanceof Lr?fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Mr extends hi{}class vs extends hi{constructor(e){super(),this.elements=e}}function md(t,e){const n=vd(e);for(const s of t.elements)n.some(r=>rt(r,s))||n.push(s);return{arrayValue:{values:n}}}class _s extends hi{constructor(e){super(),this.elements=e}}function yd(t,e){let n=vd(e);for(const s of t.elements)n=n.filter(r=>!rt(r,s));return{arrayValue:{values:n}}}class Lr extends hi{constructor(e,n){super(),this.It=e,this.yt=n}}function Hc(t){return fe(t.integerValue||t.doubleValue)}function vd(t){return ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Iw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof vs&&s instanceof vs||n instanceof _s&&s instanceof _s?wn(n.elements,s.elements,rt):n instanceof Lr&&s instanceof Lr?rt(n.yt,s.yt):n instanceof Mr&&s instanceof Mr}(t.transform,e.transform)}class bw{constructor(e,n){this.version=e,this.transformResults=n}}class nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class di{}function _d(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,nt.none()):new js(t.key,t.data,nt.none());{const n=t.data,s=qe.empty();let r=new ye(Ce.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rn(t.key,s,new tt(r.toArray()),nt.none())}}function Tw(t,e,n){t instanceof js?function(s,r,i){const o=s.value.clone(),a=Kc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rn?function(s,r,i){if(!dr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Kc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(wd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Jn(t,e,n,s){return t instanceof js?function(r,i,o,a){if(!dr(r.precondition,i))return o;const c=r.value.clone(),l=Wc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof rn?function(r,i,o,a){if(!dr(r.precondition,i))return o;const c=Wc(r.fieldTransforms,a,i),l=i.data;return l.setAll(wd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return dr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Ew(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=gd(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Gc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&wn(n,s,(r,i)=>Iw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class js extends di{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rn extends di{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Kc(t,e,n){const s=new Map;oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ww(o,a,n[r]))}return s}function Wc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_w(i,o,e))}return s}class ma extends di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sw extends di{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,ee;function Aw(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Id(t){if(t===void 0)return pt("GRPC error has no .code"),T.UNKNOWN;switch(t){case de.OK:return T.OK;case de.CANCELLED:return T.CANCELLED;case de.UNKNOWN:return T.UNKNOWN;case de.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case de.INTERNAL:return T.INTERNAL;case de.UNAVAILABLE:return T.UNAVAILABLE;case de.UNAUTHENTICATED:return T.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case de.NOT_FOUND:return T.NOT_FOUND;case de.ALREADY_EXISTS:return T.ALREADY_EXISTS;case de.PERMISSION_DENIED:return T.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case de.ABORTED:return T.ABORTED;case de.OUT_OF_RANGE:return T.OUT_OF_RANGE;case de.UNIMPLEMENTED:return T.UNIMPLEMENTED;case de.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ee=de||(de={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$n(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return od(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new we($.comparator);function mt(){return Cw}const bd=new we($.comparator);function zn(...t){let e=bd;for(const n of t)e=e.insert(n.key,n);return e}function Td(t){let e=bd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function jt(){return Zn()}function Ed(){return Zn()}function Zn(){return new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dw=new we($.comparator),Nw=new ye($.comparator);function W(...t){let e=Nw;for(const n of t)e=e.add(n);return e}const Rw=new ye(ie);function Sd(){return Rw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,qs.createSynthesizedTargetChangeForCurrentChange(e,n)),new fi(G.min(),s,Sd(),mt(),W())}}class qs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new qs(ke.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class kd{constructor(e,n){this.targetId=e,this.At=n}}class Ad{constructor(e,n,s=ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Qc{constructor(){this.Rt=0,this.bt=Xc(),this.Pt=ke.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=W(),n=W(),s=W();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:z()}}),new qs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Xc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ow{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=mt(),this.qt=Yc(),this.Kt=new ye(ie)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(po(i))if(s===0){const o=new $(i.path);this.jt(n,o,Ee.newNoDocument(o,G.min()))}else oe(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&po(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ee.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=W();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new fi(e,n,this.Kt,this.Ut,s);return this.Ut=mt(),this.qt=Yc(),this.Kt=new ye(ie),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Qc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ye(ie),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Qc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Yc(){return new we($.comparator)}function Xc(){return new we($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Mw{constructor(e,n){this.databaseId=e,this.gt=n}}function xr(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cd(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Lw(t,e){return xr(t,e.toTimestamp())}function ut(t){return oe(!!t),G.fromTimestamp(function(e){const n=At(e);return new me(n.seconds,n.nanos)}(t))}function ya(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Dd(t){const e=ue.fromString(t);return oe(Od(e)),e}function yo(t,e){return ya(t.databaseId,e.path)}function qi(t,e){const n=Dd(e);if(n.get(1)!==t.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Nd(n))}function vo(t,e){return ya(t.databaseId,e)}function xw(t){const e=Dd(t);return e.length===4?ue.emptyPath():Nd(e)}function _o(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nd(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jc(t,e,n){return{name:yo(t,e),fields:n.value.mapValue.fields}}function Uw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(oe(l===void 0||typeof l=="string"),ke.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),ke.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Id(c.code);return new L(l,c.message||"")}(o);n=new Ad(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=qi(t,s.document.name),i=ut(s.document.updateTime),o=new qe({mapValue:{fields:s.document.fields}}),a=Ee.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new fr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=qi(t,s.document),i=s.readTime?ut(s.readTime):G.min(),o=Ee.newNoDocument(r,i),a=s.removedTargetIds||[];n=new fr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=qi(t,s.document),i=s.removedTargetIds||[];n=new fr([],i,r,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new kw(r),o=s.targetId;n=new kd(o,i)}}return n}function Fw(t,e){let n;if(e instanceof js)n={update:Jc(t,e.key,e.value)};else if(e instanceof ma)n={delete:yo(t,e.key)};else if(e instanceof rn)n={update:Jc(t,e.key,e.data),updateMask:Qw(e.fieldMask)};else{if(!(e instanceof Sw))return z();n={verify:yo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof vs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _s)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Lw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:z()}(t,e.precondition)),n}function Vw(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ut(s.updateTime):ut(r);return i.isEqual(G.min())&&(i=ut(r)),new bw(i,s.transformResults||[])}(n,e))):[]}function Bw(t,e){return{documents:[vo(t,e.path)]}}function jw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=vo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Vc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NAN"}};if(Fc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Vc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NOT_NAN"}};if(Fc(h.value))return{unaryFilter:{field:ln(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(h.field),op:Gw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ln(u.field),direction:Hw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ci(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function qw(t){let e=xw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){oe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Rd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Xn(dn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ci(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Pr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Pr(d,h)}(n.endAt)),dw(e,r,o,i,a,"F",c,l)}function zw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rd(t){return t?t.unaryFilter!==void 0?[Ww(t)]:t.fieldFilter!==void 0?[Kw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Rd(e)).reduce((e,n)=>e.concat(n)):z():[]}function Hw(t){return $w[t]}function Gw(t){return Pw[t]}function ln(t){return{fieldPath:t.canonicalString()}}function dn(t){return Ce.fromServerFormat(t.fieldPath)}function Kw(t){return xe.create(dn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ww(t){switch(t.unaryFilter.op){case"IS_NAN":const e=dn(t.unaryFilter.field);return xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=dn(t.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=dn(t.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=dn(t.unaryFilter.field);return xe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function Qw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Od(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Tw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Jn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Jn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ed();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=_d(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&wn(this.mutations,e.mutations,(n,s)=>Gc(n,s))&&wn(this.baseMutations,e.baseMutations,(n,s)=>Gc(n,s))}}class va{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){oe(e.mutations.length===s.length);let r=Dw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new va(e,n,s,r)}}/**
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
 */class Xw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gt{constructor(e,n,s,r,i=G.min(),o=G.min(),a=ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.re=e}}function Zw(t){const e=qw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?go(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.Ye=new t0}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(kt.min())}updateCollectionGroup(e,n,s){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class t0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ye(ue.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n0{constructor(){this.changes=new Pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?I.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class s0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Jn(s.mutation,r,tt.empty(),me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,W()).next(()=>s))}getLocalViewOfDocuments(e,n,s=W()){const r=jt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=zn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=jt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,W()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=mt();const o=Zn(),a=Zn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof rn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Jn(u.mutation,l,u.mutation.getFieldMask(),me.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new s0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Zn();let r=new we((o,a)=>o-a),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||tt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||W()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ed();u.forEach(d=>{if(!i.has(d)){const p=_d(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):I.resolve(jt());let a=-1,c=i;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?I.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,W())).next(u=>({batchId:a,changes:Td(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=zn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=zn();return this.indexManager.getCollectionParents(e,r).next(o=>I.forEach(o,a=>{const c=function(l,u){return new li(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ee.newInvalidDocument(l)))});let o=zn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Jn(l.mutation,c,tt.empty(),me.now()),ga(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Ee.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ut(s.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Zw(s.bundledQuery),readTime:ut(s.readTime)}}(n)),I.resolve()}}/**
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
 */class o0{constructor(){this.overlays=new we($.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const s=jt();return I.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),I.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),I.resolve()}getOverlaysForCollection(e,n,s){const r=jt(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return I.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=jt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return I.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Xw(n,s));let i=this.es.get(n);i===void 0&&(i=W(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.ns=new ye(Ie.ss),this.rs=new ye(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new ue([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new ue([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=W();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||ie(e._s,n._s)}static os(e,n){return ie(e._s,n._s)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ye(Ie.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return I.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),I.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(ie);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),I.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new $(i),0);let a=new ye(ie);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return I.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Ie(n,0),r=this.gs.firstAfterOrEqual(s);return I.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.Es=e,this.docs=new we($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return I.resolve(s?s.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let s=mt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ee.newInvalidDocument(r))}),I.resolve(s)}getAllFromCollection(e,n,s){let r=mt();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Q_(W_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return I.resolve(r)}getAllFromCollectionGroup(e,n,s,r){z()}As(e,n){return I.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new l0(this)}getSize(e){return I.resolve(this.size)}}class l0 extends n0{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.persistence=e,this.Rs=new Pn(n=>da(n),fa),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _a,this.targetCount=0,this.vs=Tn.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Tn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),I.waitFor(i).next(()=>r)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return I.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),I.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),I.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return I.resolve(s)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ua(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new u0(this),this.indexManager=new e0,this.remoteDocumentCache=function(s){return new c0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Jw(n),this.Ns=new i0(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new a0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){R("MemoryPersistence","Starting transaction:",e);const r=new d0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return I.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class d0 extends X_{constructor(e){super(),this.currentSequenceNumber=e}}class wa{constructor(e){this.persistence=e,this.Fs=new _a,this.$s=null}static Bs(e){return new wa(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),I.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=W(),r=W();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ia(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(zc(n))return I.resolve(null);let s=gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=go(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=W(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,go(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return zc(n)||r.isEqual(G.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Pc()<=re.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mo(n)),this.Bi(e,o,n,K_(r,-1)))})}Fi(e,n){let s=new ye(dd(e));return n.forEach((r,i)=>{ga(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Pc()<=re.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",mo(n)),this.Ni.getDocumentsMatchingQuery(e,n,kt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new we(ie),this.qi=new Pn(i=>da(i),fa),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r0(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function g0(t,e,n,s){return new p0(t,e,n,s)}async function $d(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=W();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function m0(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=I.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const m=c.docVersions.get(p);oe(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=W();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Pd(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function y0(t,e){const n=H(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ke.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,m,_){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=mt(),l=W();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(v0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(G.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return I.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function v0(t,e,n){let s=W(),r=W();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=mt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function _0(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function w0(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,I.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Gt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function wo(t,e,n){const s=H(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bs(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Zc(t,e,n){const s=H(t);let r=G.min(),i=W();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=H(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:W())).next(a=>(I0(s,mw(e),a),{documents:a,Hi:i})))}function I0(t,e,n){let s=G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class el{constructor(){this.activeTargetIds=Sd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b0{constructor(){this.Lr=new el,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new el,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);R("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Mc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=E0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new x_;a.listenOnce(P_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ji.NO_ERROR:const l=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(l)),i(l);break;case ji.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const u=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(h.status);o(new L(d,h.message))}else o(new L(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=O_(),o=$_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new L_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");R("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new S0({Hr:g=>{h?R("Connection","Not sending because WebChannel is closed:",g):(u||(R("Connection","Opening WebChannel transport."),l.open(),u=!0),R("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,m,_)=>{g.listen(m,b=>{try{_(b)}catch(D){setTimeout(()=>{throw D},0)}})};return p(l,tr.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),p(l,tr.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.io())}),p(l,tr.EventType.ERROR,g=>{h||(h=!0,Mc("Connection","WebChannel transport errored:",g),d.io(new L(T.UNAVAILABLE,"The operation could not be completed")))}),p(l,tr.EventType.MESSAGE,g=>{var m;if(!h){const _=g.data[0];oe(!!_);const b=_,D=b.error||((m=b[0])===null||m===void 0?void 0:m.error);if(D){R("Connection","WebChannel received error:",D);const P=D.status;let te=function(S){const x=de[S];if(x!==void 0)return Id(x)}(P),O=D.message;te===void 0&&(te=T.INTERNAL,O="Unknown error status: "+P+" with message "+D.message),h=!0,d.io(new L(te,O)),l.close()}else R("Connection","WebChannel received:",_),d.ro(_)}}),p(o,M_.STAT_EVENT,g=>{g.stat===Oc.PROXY?R("Connection","Detected buffering proxy"):g.stat===Oc.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){return new Mw(t,!0)}class Md{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Md(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new L(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A0 extends Ld{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Uw(this.It,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?ut(i.readTime):G.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=_o(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=po(a)?{documents:Bw(r,a)}:{query:jw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Cd(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=xr(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=zw(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=_o(this.It),n.removeTarget=e,this.Bo(n)}}class C0 extends Ld{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Vw(e.writeResults,e.commitTime),s=ut(e.commitTime);return this.listener.Zo(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=_o(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Fw(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(T.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class N0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(pt(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{on(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=H(a);c._u.add(4),await zs(c),c.gu.set("Unknown"),c._u.delete(4),await gi(c)}(this))})}),this.gu=new N0(s,r)}}async function gi(t){if(on(t))for(const e of t.wu)await e(!0)}async function zs(t){for(const e of t.wu)await e(!1)}function xd(t,e){const n=H(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ea(n)?Ta(n):Mn(n).ko()&&ba(n,e))}function Ud(t,e){const n=H(t),s=Mn(n);n.du.delete(e),s.ko()&&Fd(n,e),n.du.size===0&&(s.ko()?s.Fo():on(n)&&n.gu.set("Unknown"))}function ba(t,e){t.yu.Ot(e.targetId),Mn(t).zo(e)}function Fd(t,e){t.yu.Ot(e),Mn(t).Ho(e)}function Ta(t){t.yu=new Ow({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Mn(t).start(),t.gu.uu()}function Ea(t){return on(t)&&!Mn(t).No()&&t.du.size>0}function on(t){return H(t)._u.size===0}function Vd(t){t.yu=void 0}async function O0(t){t.du.forEach((e,n)=>{ba(t,e)})}async function $0(t,e){Vd(t),Ea(t)?(t.gu.hu(e),Ta(t)):t.gu.set("Unknown")}async function P0(t,e,n){if(t.gu.set("Online"),e instanceof Ad&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ur(t,s)}else if(e instanceof fr?t.yu.Gt(e):e instanceof kd?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(G.min()))try{const s=await Pd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ke.EMPTY_BYTE_STRING,c.snapshotVersion)),Fd(r,a);const l=new Gt(c.target,a,1,c.sequenceNumber);ba(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await Ur(t,s)}}async function Ur(t,e,n){if(!Bs(e))throw e;t._u.add(1),await zs(t),t.gu.set("Offline"),n||(n=()=>Pd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await gi(t)})}function Bd(t,e){return e().catch(n=>Ur(t,n,e))}async function mi(t){const e=H(t),n=Ct(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;M0(e);)try{const r=await _0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,L0(e,r)}catch(r){await Ur(e,r)}jd(e)&&qd(e)}function M0(t){return on(t)&&t.fu.length<10}function L0(t,e){t.fu.push(e);const n=Ct(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function jd(t){return on(t)&&!Ct(t).No()&&t.fu.length>0}function qd(t){Ct(t).start()}async function x0(t){Ct(t).eu()}async function U0(t){const e=Ct(t);for(const n of t.fu)e.Xo(n.mutations)}async function F0(t,e,n){const s=t.fu.shift(),r=va.from(s,e,n);await Bd(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await mi(t)}async function V0(t,e){e&&Ct(t).Yo&&await async function(n,s){if(r=s.code,Aw(r)&&r!==T.ABORTED){const i=n.fu.shift();Ct(n).Oo(),await Bd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mi(n)}var r}(t,e),jd(t)&&qd(t)}async function nl(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=on(n);n._u.add(3),await zs(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await gi(n)}async function B0(t,e){const n=H(t);e?(n._u.delete(2),await gi(n)):e||(n._u.add(2),await zs(n),n.gu.set("Unknown"))}function Mn(t){return t.pu||(t.pu=function(e,n,s){const r=H(e);return r.su(),new A0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:O0.bind(null,t),Zr:$0.bind(null,t),Wo:P0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Ea(t)?Ta(t):t.gu.set("Unknown")):(await t.pu.stop(),Vd(t))})),t.pu}function Ct(t){return t.Iu||(t.Iu=function(e,n,s){const r=H(e);return r.su(),new C0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:x0.bind(null,t),Zr:V0.bind(null,t),tu:U0.bind(null,t),Zo:F0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await mi(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Sa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(t,e){if(pt("AsyncQueue",`${e}: ${t}`),Bs(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=zn(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new mn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.Tu=new we($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class En{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new En(e,n,mn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.Au=void 0,this.listeners=[]}}class q0{constructor(){this.queries=new Pn(e=>hd(e),ui),this.onlineState="Unknown",this.Ru=new Set}}async function z0(t,e){const n=H(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new j0),r)try{i.Au=await n.onListen(s)}catch(o){const a=ka(o,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Aa(n)}async function H0(t,e){const n=H(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function G0(t,e){const n=H(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Aa(n)}function K0(t,e,n){const s=H(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Aa(t){t.Ru.forEach(e=>{e.next()})}class W0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new En(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.key=e}}class Hd{constructor(e){this.key=e}}class Q0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=W(),this.mutatedKeys=W(),this.Ku=dd(e),this.Gu=new mn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new sl,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ga(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),_=!0):this.zu(d,p)||(s.track({type:2,doc:p}),_=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),_=!0):d&&!p&&(s.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new En(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new sl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=W(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new Hd(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new zd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=W();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return En.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Y0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class X0{constructor(e){this.key=e,this.ec=!1}}class J0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Pn(a=>hd(a),ui),this.ic=new Map,this.rc=new Set,this.oc=new we($.comparator),this.uc=new Map,this.cc=new _a,this.ac={},this.hc=new Map,this.lc=Tn.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Z0(t,e){const n=lI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await w0(n.localStore,gt(e));n.isPrimaryClient&&xd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await eI(n,e,s,a==="current")}return r}async function eI(t,e,n,s){t.dc=(u,h,d)=>async function(p,g,m,_){let b=g.view.ju(m);b.$i&&(b=await Zc(p.localStore,g.query,!1).then(({documents:te})=>g.view.ju(te,b)));const D=_&&_.targetChanges.get(g.targetId),P=g.view.applyChanges(b,p.isPrimaryClient,D);return il(p,g.targetId,P.Yu),P.snapshot}(t,u,h,d);const r=await Zc(t.localStore,e,!0),i=new Q0(e,r.Hi),o=i.ju(r.documents),a=qs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);il(t,n,c.Yu);const l=new Y0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function tI(t,e){const n=H(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!ui(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ud(n.remoteStore,s.targetId),Io(n,s.targetId)}).catch(Vs)):(Io(n,s.targetId),await wo(n.localStore,s.targetId,!0))}async function nI(t,e,n){const s=uI(t);try{const r=await function(i,o){const a=H(i),c=me.now(),l=o.reduce((d,p)=>d.add(p.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=mt(),g=W();return a.Gi.getEntries(d,l).next(m=>{p=m,p.forEach((_,b)=>{b.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{u=m;const _=[];for(const b of o){const D=Ew(b,u.get(b.key).overlayedDocument);D!=null&&_.push(new rn(b.key,D,ld(D.value.mapValue),nt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(m=>{h=m;const _=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Td(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new we(ie)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Hs(s,r.changes),await mi(s.remoteStore)}catch(r){const i=ka(r,"Failed to persist write");n.reject(i)}}async function Gd(t,e){const n=H(t);try{const s=await y0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?oe(o.ec):r.removedDocuments.size>0&&(oe(o.ec),o.ec=!1))}),await Hs(n,s,e)}catch(s){await Vs(s)}}function rl(t,e,n){const s=H(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=H(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Aa(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sI(t,e,n){const s=H(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new we($.comparator);o=o.insert(i,Ee.newNoDocument(i,G.min()));const a=W().add(i),c=new fi(G.min(),new Map,new ye(ie),o,a);await Gd(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ca(s)}else await wo(s.localStore,e,!1).then(()=>Io(s,e,n)).catch(Vs)}async function rI(t,e){const n=H(t),s=e.batch.batchId;try{const r=await m0(n.localStore,e);Wd(n,s,null),Kd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hs(n,r)}catch(r){await Vs(r)}}async function iI(t,e,n){const s=H(t);try{const r=await function(i,o){const a=H(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Wd(s,e,n),Kd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hs(s,r)}catch(r){await Vs(r)}}function Kd(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Wd(t,e,n){const s=H(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||Qd(t,s)})}function Qd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ud(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ca(t))}function il(t,e,n){for(const s of n)s instanceof zd?(t.cc.addReference(s.key,e),oI(t,s)):s instanceof Hd?(R("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Qd(t,s.key)):z()}function oI(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(R("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ca(t))}function Ca(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new $(ue.fromString(e)),s=t.lc.next();t.uc.set(s,new X0(n)),t.oc=t.oc.insert(n,s),xd(t.remoteStore,new Gt(gt(pa(n.path)),s,2,ua.at))}}async function Hs(t,e,n){const s=H(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ia.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=H(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Bs(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,g)}}}(s.localStore,i))}async function aI(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await $d(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(T.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hs(n,s.ji)}}function cI(t,e){const n=H(t),s=n.uc.get(e);if(s&&s.ec)return W().add(s.key);{let r=W();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function lI(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sI.bind(null,e),e.nc.Wo=G0.bind(null,e.eventManager),e.nc._c=K0.bind(null,e.eventManager),e}function uI(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iI.bind(null,e),e}class hI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=pi(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return g0(this.persistence,new f0,e.initialUser,this.It)}gc(e){return new h0(wa.Bs,this.It)}mc(e){return new b0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aI.bind(null,this.syncEngine),await B0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new q0}createDatastore(e){const n=pi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new k0(r));var r;return function(i,o,a,c){return new D0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>rl(this.syncEngine,a,0),o=tl.C()?new tl:new T0,new R0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new J0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await zs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):pt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Le.UNAUTHENTICATED,this.clientId=id.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ka(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gI(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await $d(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function mI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yI(t);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>nl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>nl(e.remoteStore,i)),t.onlineComponents=e}async function yI(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await gI(t,new hI)),t.offlineComponents}async function Yd(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await mI(t,new dI)),t.onlineComponents}function vI(t){return Yd(t).then(e=>e.syncEngine)}async function ol(t){const e=await Yd(t),n=e.eventManager;return n.onListen=Z0.bind(null,e.syncEngine),n.onUnlisten=tI.bind(null,e.syncEngine),n}const al=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _I(t,e,n,s){if(e===!0&&s===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cl(t){if(!$.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ll(t){if($.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ul({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ul(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new F_;switch(n.type){case"gapi":const s=n.client;return new j_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=al.get(e);n&&(R("ComponentProvider","Removing Datastore"),al.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class yi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class Et extends yi{constructor(e,n,s){super(e,n,pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new $(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function wI(t,e,...n){if(t=Oe(t),Xd("collection","path",e),t instanceof Na){const s=ue.fromString(e,...n);return ll(s),new Et(t,null,s)}{if(!(t instanceof Ve||t instanceof Et))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ue.fromString(e,...n));return ll(s),new Et(t.firestore,null,s)}}function rr(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=id.R()),Xd("doc","path",e),t instanceof Na){const s=ue.fromString(e,...n);return cl(s),new Ve(t,null,new $(s))}{if(!(t instanceof Ve||t instanceof Et))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ue.fromString(e,...n));return cl(s),new Ve(t.firestore,t instanceof Et?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Md(this,"async_queue_retry"),this.jc=()=>{const n=zi();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=zi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Ht;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Bs(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw pt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Sa.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&z()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function hl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ws extends Na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new II,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zd(this),this._firestoreClient.terminate()}}function bI(t,e){const n=typeof t=="object"?t:Ao(),s=typeof t=="string"?t:e||"(default)";return nn(n,"firestore").getImmediate({identifier:s})}function Jd(t){return t._firestoreClient||Zd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Z_(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ra{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(ke.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^__.*__$/;class EI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new js(e,this.data,n,this.fieldTransforms)}}function tf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class $a{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new $a(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Fr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(tf(this.na)&&TI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class SI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||pi(e)}fa(e,n,s,r=!1){return new $a({na:e,methodName:n,la:s,path:Ce.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function kI(t){const e=t._freezeSettings(),n=pi(t._databaseId);return new SI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AI(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);of("Data must be an object, but it was:",o,s);const a=sf(s,o);let c,l;if(i.merge)c=new tt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=CI(e,h,n);if(!o.contains(d))throw new L(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);NI(u,d)||u.push(d)}c=new tt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new EI(new qe(a),c,l)}function nf(t,e){if(rf(t=Oe(t)))return of("Unsupported field value:",e,t),sf(t,e);if(t instanceof ef)return function(n,s){if(!tf(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=nf(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vw(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=me.fromDate(n);return{timestampValue:xr(s.It,r)}}if(n instanceof me){const r=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xr(s.It,r)}}if(n instanceof Oa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:Cd(s.It,n._byteString)};if(n instanceof Ve){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${Da(n)}`)}(t,e)}function sf(t,e){const n={};return od(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$n(t,(s,r)=>{const i=nf(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function rf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof Oa||t instanceof Sn||t instanceof Ve||t instanceof ef)}function of(t,e,n){if(!rf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Da(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function CI(t,e,n){if((e=Oe(e))instanceof Ra)return e._internalPath;if(typeof e=="string")return af(t,e);throw Fr("Field path arguments must be of type string or ",t,!1,void 0,n)}const DI=new RegExp("[~\\*/\\[\\]]");function af(t,e,n){if(e.search(DI)>=0)throw Fr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ra(...e.split("."))._internalPath}catch{throw Fr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(T.INVALID_ARGUMENT,a+t+c)}function NI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RI extends cf{data(){return super.data()}}function lf(t,e){return typeof e=="string"?af(t,e):e instanceof Ra?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uf extends cf{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(lf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class pr extends uf{data(e={}){return super.data(e)}}class OI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Hn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new pr(this._firestore,this._userDataWriter,s.key,s,new Hn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:$I(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $I(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function MI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{convertValue(e,n="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return $n(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Oa(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=cd(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ps(e));default:return null}}convertTimestamp(e){const n=At(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ue.fromString(e);oe(Od(s));const r=new gs(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||pt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class hf extends LI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function dl(t,e,n){t=yn(t,Ve);const s=yn(t.firestore,ws),r=xI(t.converter,e,n);return df(s,[AI(kI(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,nt.none())])}function UI(t){return df(yn(t.firestore,ws),[new ma(t._key,nt.none())])}function fl(t,...e){var n,s,r;t=Oe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(hl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ve)l=yn(t.firestore,ws),u=pa(t._key.path),c={next:h=>{e[o]&&e[o](FI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yn(t,yi);l=yn(h.firestore,ws),u=h._query;const d=new hf(l);c={next:p=>{e[o]&&e[o](new OI(l,d,h,p))},error:e[o+1],complete:e[o+2]},PI(t._query)}return function(h,d,p,g){const m=new fI(g),_=new W0(d,m,p);return h.asyncQueue.enqueueAndForget(async()=>z0(await ol(h),_)),()=>{m.Rc(),h.asyncQueue.enqueueAndForget(async()=>H0(await ol(h),_))}}(Jd(l),u,a,c)}function df(t,e){return function(n,s){const r=new Ht;return n.asyncQueue.enqueueAndForget(async()=>nI(await vI(n),s,r)),r.promise}(Jd(t),e)}function FI(t,e,n){const s=n.docs.get(e._key),r=new hf(t);return new uf(t,r,e._key,s,new Hn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){On=n})(Ts),st(new Qe("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ws(new V_(n.getProvider("auth-internal")),new z_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ze($c,"3.5.0",t),ze($c,"3.5.0","esm2017")})();const VI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},ff=hg(VI),Mt=my(ff);im(Mt,Eu);const Un=bI(ff);Nv();const BI=new it,jI=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Cn(t);class s extends Error{constructor(i,o){super(o),this.code=i}}return Iu(Mt,r=>{n(r?{loggedIn:!0,user:r}:t)}),{subscribe:e,async signUpWithEmail(r,i){if((i==null?void 0:i.length)<8)throw new s("auth/password-too-short");return sm(Mt,r,i)},async signInWithEmail(r,i){return rm(Mt,r,i)},async signInWithGoogle(){return Dm(Mt,BI)},async signOut(){return om(Mt)}}},qI=jI(),pl="/assets/default-user.a40c52dd.png";function zI(t){let e;return{c(){e=v("i"),f(e,"class","codicon codicon-account")},m(n,s){A(n,e,s)},p:C,d(n){n&&k(e)}}}function HI(t){let e,n;return{c(){var s;e=v("img"),f(e,"class","profile-picture svelte-1m717b8"),es(e.src,n=(s=t[0].user.photoURL)!=null?s:pl)||f(e,"src",n),f(e,"alt","Account")},m(s,r){A(s,e,r)},p(s,r){var i;r&1&&!es(e.src,n=(i=s[0].user.photoURL)!=null?i:pl)&&f(e,"src",n)},d(s){s&&k(e)}}}function GI(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,_,b,D;o=new Yf({});function P(S,x){return S[0].loggedIn?HI:zI}let te=P(t),O=te(t);return{c(){e=v("header"),n=v("div"),s=v("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=M(),i=v("a"),j(o.$$.fragment),a=M(),c=v("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=M(),u=v("nav"),h=v("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=M(),p=v("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',g=M(),m=v("button"),O.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1m717b8"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1m717b8"),f(c,"title","Documentation"),f(c,"class","svelte-1m717b8"),f(n,"class","svelte-1m717b8"),f(h,"title","Search"),f(h,"class","svelte-1m717b8"),f(p,"title","Settings"),f(p,"id","settings-gear"),f(p,"class","svelte-1m717b8"),f(m,"title","Account"),f(m,"class","svelte-1m717b8"),f(u,"class","svelte-1m717b8"),f(e,"role","navigation"),f(e,"class","svelte-1m717b8")},m(S,x){A(S,e,x),y(e,n),y(n,s),y(n,r),y(n,i),U(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,g),y(u,m),O.m(m,null),_=!0,b||(D=[Y(c,"click",t[1]),Y(h,"click",t[2]),Y(p,"click",t[3]),Y(m,"click",t[4])],b=!0)},p(S,[x]){te===(te=P(S))&&O?O.p(S,x):(O.d(1),O=te(S),O&&(O.c(),O.m(m,null)))},i(S){_||(w(o.$$.fragment,S),_=!0)},o(S){E(o.$$.fragment,S),_=!1},d(S){S&&k(e),F(o),O.d(),b=!1,je(D)}}}function KI(t,e,n){let s;return We(t,qI,c=>n(0,s=c)),[s,()=>xt.navigateTo("help"),()=>xt.navigateTo("search"),()=>xt.navigateTo("settings"),()=>xt.navigateTo("account")]}class WI extends J{constructor(e){super(),X(this,e,KI,GI,Q,{})}}const QI="modulepreload",YI=function(t){return"/"+t},gl={},vi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=YI(r),r in gl)return;gl[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":QI,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Gs=t=>typeof t=="string"&&t!=="",_i=t=>typeof t=="number"&&t>=0;class wi{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,_,b,D,P,te,O,S,x,ae,he,Z){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=g,this.preview_height=m,this.rating=_,this.sample_height=b,this.sample_width=D,this.score=P,this.source=te,this.status=O,this.tags=S,this.width=x,this.comments_url=ae,this.owner_url=he,this.type=Z,Object.freeze(this)}static from(e){return new wi(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const XI=t=>Array.isArray(t)&&t.every(e=>e instanceof wi);class JI{constructor(e,n){if(!_i(e))throw new TypeError("Invalid count passed to Page constructor");if(!XI(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const ZI=Object.freeze(["id","score","updated"]),eb=t=>ZI.includes(t),gr=Object.freeze(["+","-","~"]),Ii=t=>gr.includes(t),pf=t=>{if(!Ii(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(gr.indexOf(t)+1)%gr.length;return gr[n]},tb=Object.freeze({"+":"","-":"-","~":""}),nb=t=>{if(!Ii(t))throw TypeError("Invalid modifier passed to serializeModifier");return tb[t]};class bi{constructor(e,n){if(!Ii(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Gs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${nb(this.modifier)}${encodeURIComponent(this.name)}`}}const gf=(t,e)=>{if(!mf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!sb(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},mf=t=>{try{return new URL(t),!0}catch{return!1}},sb=t=>t===null||t instanceof AbortController,yf=20;let rb=null;const ib=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},ob=async(t,e,n,s)=>{cb(t,e,n,s);const r=fb(e,n,s),i=await gf(pb(t,r),rb);ib(i);const o=await i.text(),c=new DOMParser().parseFromString(o,"text/xml"),l=Number(c.getElementsByTagName("posts")[0].getAttribute("count")),u=[];for(const h of c.getElementsByTagName("post"))u.push(ab(h.attributes));return new JI(l,u)},ab=t=>{const e=t.getNamedItem("height").value,n=t.getNamedItem("score").value,s=t.getNamedItem("file_url").value,r=t.getNamedItem("parent_id").value,i=t.getNamedItem("sample_url").value,o=t.getNamedItem("sample_width").value,a=t.getNamedItem("sample_height").value,c=t.getNamedItem("preview_url").value,l=t.getNamedItem("rating").value,u=t.getNamedItem("tags").value,h=t.getNamedItem("id").value,d=t.getNamedItem("width").value,p=t.getNamedItem("change").value,g=t.getNamedItem("md5").value,m=t.getNamedItem("creator_id").value,_=t.getNamedItem("has_children").value,b=t.getNamedItem("created_at").value,D=t.getNamedItem("status").value,P=t.getNamedItem("source").value,te=t.getNamedItem("has_notes").value,O=t.getNamedItem("has_comments").value,S=t.getNamedItem("preview_width").value,x=t.getNamedItem("preview_height").value;return new wi(c,i,s,b,Boolean(_),g,Number(e),Number(h),Number(p),Number(m),Boolean(te),Boolean(O),r?Number(r):null,Number(S),Number(x),l,Number(a),Number(o),Number(n),P,D,u.split(" ").filter((ae,he,Z)=>ae!==""&&Z.indexOf(ae)==he),Number(d),"","",s.endsWith(".webm")||s.endsWith(".mp4")?"video":s.includes(".gif")?"gif":"image")},cb=(t,e,n,s)=>{if(!lb(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!ub(e))throw new TypeError("Invalid array of tags passed to getPage");if(!eb(n))throw new TypeError("Invalid sort property passed to getPage");if(!hb(s))throw new TypeError("Invalid minimum score passed to getPage")},lb=t=>typeof t=="number"&&t>=0,ub=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof bi)),hb=t=>typeof t=="number"&&t>=0,db=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},fb=(t,e,n)=>{const s=db(t),r=[...ml([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${ml(s["~"]).join(" ~ ")} )`},ml=t=>t.map(e=>e.serialize()),pb=(t,e)=>{const s=`https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=${yf}&pid=${t}`;return e===""?s:`${s}&tags=${e}`},gb=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),vf=t=>gb.includes(t);class Is{constructor(e,n,s,r){if(!Ii(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Gs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!_i(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!vf(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new bi(this.modifier,this.name)}}class _f{constructor(e,n,s){if(!Gs(e))throw TypeError("Invalid name passed to Tag constructor");if(!_i(n))throw TypeError("Invalid count passed to Tag constructor");if(!vf(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new Is(e,this.name,this.count,this.type)}}let mb=null;const wf=async t=>{const e="https://api.rule34.xxx/autocomplete.php?q=",n=t.replaceAll(" ","_"),s=await gf(`${e}${n}`,mb);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(i=>new _f(i.value,Number(i.label.substring(i.label.lastIndexOf("(")+1,i.label.length-1)),"ambiguous"))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")};class If{constructor(e,n,s){if(!Gs(e))throw new TypeError("Invalid name passed to Supertag");if(!yb(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const yb=t=>Array.isArray(t)&&t.every(e=>e instanceof bi),vb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Cn(t);let s,r=null,i=null;return Iu(Mt,async o=>{s=o,o?r=fl(rr(Un,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=MI(wI(Un,`users/${o.uid}/supertags`));i==null||i(),i=fl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new If(d.id,p.description,Object.entries(p.tags).map(g=>new bi(g[1],g[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return dl(rr(Un,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return UI(rr(Un,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return dl(rr(Un,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},bo=vb();function _b(t){let e,n,s,r;return{c(){e=v("button"),n=ge(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){A(i,e,o),y(e,n),s||(r=Y(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Ue(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:C,o:C,d(i){i&&k(e),s=!1,r()}}}function wb(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ke(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class bf extends J{constructor(e){super(),X(this,e,wb,_b,Q,{text:0,title:1,disabled:2})}}function Ti(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t(e))}}const Ib=Intl.NumberFormat("en",{notation:"compact"}),Dt=t=>{if(!_i(t))throw new TypeError("Invalid value passed to formatCount");return Ib.format(t)};function kn(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const yl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function bb(t){let e,n;return{c(){e=v("i"),f(e,"class",n=`codicon codicon-${yl[t[0]]}`)},m(s,r){A(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${yl[s[0]]}`)&&f(e,"class",n)},i:C,o:C,d(s){s&&k(e)}}}function Tb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class Tf extends J{constructor(e){super(),X(this,e,Tb,bb,Q,{type:0})}}const vl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),_l=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),wl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function Eb(t){let e,n,s,r=kn(t[0].name)+"",i,o,a=Dt(t[0].count)+"",c,l,u,h,d,p;return n=new Tf({props:{type:t[0].type}}),{c(){e=v("li"),j(n.$$.fragment),s=M(),i=ge(r),o=ge(`
  (`),c=ge(a),l=ge(")"),f(e,"class",u=St(wl[t[0].modifier])+" svelte-13vl0re"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),Je(e,"no-icon",t[0].type==="general")},m(g,m){A(g,e,m),U(n,e,null),y(e,s),y(e,i),y(e,o),y(e,c),y(e,l),h=!0,d||(p=[Y(e,"click",t[2]),Y(e,"contextmenu",Eo(t[3]))],d=!0)},p(g,[m]){const _={};m&1&&(_.type=g[0].type),n.$set(_),(!h||m&1)&&r!==(r=kn(g[0].name)+"")&&Ue(i,r),(!h||m&1)&&a!==(a=Dt(g[0].count)+"")&&Ue(c,a),(!h||m&1&&u!==(u=St(wl[g[0].modifier])+" svelte-13vl0re"))&&f(e,"class",u),(!h||m&1)&&Je(e,"no-icon",g[0].type==="general")},i(g){h||(w(n.$$.fragment,g),h=!0)},o(g){E(n.$$.fragment,g),h=!1},d(g){g&&k(e),F(n),d=!1,je(p)}}}function Sb(t,e,n){let{tag:s}=e;const r=Ke(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class Ef extends J{constructor(e){super(),X(this,e,Sb,Eb,Q,{tag:0})}}function Il(t,e,n){const s=t.slice();return s[9]=e[n],s}function bl(t){let e,n;return e=new Ef({props:{tag:t[9]}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function kb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,_,b,D,P,te,O,S,x,ae,he=t[2],Z=[];for(let ne=0;ne<he.length;ne+=1)Z[ne]=bl(Il(t,he,ne));const Ln=ne=>E(Z[ne],1,1,()=>{Z[ne]=null});return O=new bf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),O.$on("click",t[8]),{c(){e=v("dialog"),n=v("h3"),n.textContent="Create Supertag",s=M(),r=v("i"),i=M(),o=v("div"),a=v("label"),a.textContent="Name",c=M(),l=v("input"),u=M(),h=v("div"),d=v("label"),d.textContent="Description",p=M(),g=v("textarea"),m=M(),_=v("div"),b=v("span"),b.textContent="Tags",D=M(),P=v("ol");for(let ne=0;ne<Z.length;ne+=1)Z[ne].c();te=M(),j(O.$$.fragment),f(r,"tabindex","0"),f(r,"class",St("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(g,"type","text"),f(g,"placeholder","Short description"),f(g,"id","supertag-description"),f(g,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(b,"class","svelte-ax50wm"),f(P,"class","svelte-ax50wm"),f(_,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(ne,se){A(ne,e,se),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),bt(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,g),bt(g,t[1]),y(e,m),y(e,_),y(_,b),y(_,D),y(_,P);for(let $e=0;$e<Z.length;$e+=1)Z[$e].m(P,null);y(e,te),U(O,e,null),S=!0,x||(ae=[Y(r,"click",t[5]),Y(r,"keyup",Ti(t[5])),Y(l,"input",t[6]),Y(g,"input",t[7])],x=!0)},p(ne,[se]){if(se&1&&l.value!==ne[0]&&bt(l,ne[0]),se&2&&bt(g,ne[1]),se&4){he=ne[2];let K;for(K=0;K<he.length;K+=1){const Ks=Il(ne,he,K);Z[K]?(Z[K].p(Ks,se),w(Z[K],1)):(Z[K]=bl(Ks),Z[K].c(),w(Z[K],1),Z[K].m(P,null))}for(ve(),K=he.length;K<Z.length;K+=1)Ln(K);_e()}const $e={};se&8&&($e.title=ne[3]?"Click to create supertag":"Enter a valid name to continue"),se&8&&($e.disabled=!ne[3]),O.$set($e)},i(ne){if(!S){for(let se=0;se<he.length;se+=1)w(Z[se]);w(O.$$.fragment,ne),S=!0}},o(ne){Z=Z.filter(Boolean);for(let se=0;se<Z.length;se+=1)E(Z[se]);E(O.$$.fragment,ne),S=!1},d(ne){ne&&k(e),An(Z,ne),F(O),x=!1,je(ae)}}}function Ab(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ke(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new If(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Gs(r))},[r,i,o,s,a,c,l,u,h]}class Cb extends J{constructor(e){super(),X(this,e,Ab,kb,Q,{name:0,description:1,tags:2})}}function Db(t){let e,n,s,r,i;return{c(){e=v("i"),f(e,"tabindex","0"),f(e,"class",n=St(`codicon codicon-${vl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=_l[t[0]])},m(o,a){A(o,e,a),r||(i=[Y(e,"click",t[1]),Y(e,"keyup",Ti(t[1])),Y(e,"touchend",Eo(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=St(`codicon codicon-${vl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=_l[o[0]])&&f(e,"title",s)},i:C,o:C,d(o){o&&k(e),r=!1,je(i)}}}function Nb(t,e,n){let s="+";const r=Ke();return[s,()=>{n(0,s=pf(s)),r("change",s)}]}class Rb extends J{constructor(e){super(),X(this,e,Nb,Db,Q,{})}}function Ob(t){let e;return{c(){e=v("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&k(e)}}}class Sf extends J{constructor(e){super(),X(this,e,null,Ob,Q,{})}}function $b(t){let e,n,s,r,i=kn(t[0].name)+"",o,a,c,l=Dt(t[0].count)+"",u,h,d,p,g;return n=new Tf({props:{type:t[0].type}}),{c(){e=v("li"),j(n.$$.fragment),s=M(),r=v("span"),o=ge(i),a=M(),c=v("span"),u=ge(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(m,_){A(m,e,_),U(n,e,null),y(e,s),y(e,r),y(r,o),y(e,a),y(e,c),y(c,u),d=!0,p||(g=Y(e,"click",t[2]),p=!0)},p(m,[_]){const b={};_&1&&(b.type=m[0].type),n.$set(b),(!d||_&1)&&i!==(i=kn(m[0].name)+"")&&Ue(o,i),(!d||_&1)&&l!==(l=Dt(m[0].count)+"")&&Ue(u,l),(!d||_&1&&h!==(h=m[0].name))&&f(e,"title",h)},i(m){d||(w(n.$$.fragment,m),d=!0)},o(m){E(n.$$.fragment,m),d=!1},d(m){m&&k(e),F(n),p=!1,g()}}}function Pb(t,e,n){let{tag:s}=e;const r=Ke(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class Mb extends J{constructor(e){super(),X(this,e,Pb,$b,Q,{tag:0})}}function Tl(t,e,n){const s=t.slice();return s[16]=e[n],s}function Lb(t){let e,n,s,r,i=t[19].message+"",o;return{c(){e=v("div"),n=v("i"),s=M(),r=v("span"),o=ge(i),f(n,"class",St("codicon codicon-error")+" svelte-2fyyfo"),f(e,"class","suggestion-footer svelte-2fyyfo")},m(a,c){A(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&2&&i!==(i=a[19].message+"")&&Ue(o,i)},i:C,o:C,d(a){a&&k(e)}}}function xb(t){let e,n,s,r=t[4],i=[];for(let a=0;a<r.length;a+=1)i[a]=El(Tl(t,r,a));const o=a=>E(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=M(),n=v("div"),f(n,"class","suggestion-footer svelte-2fyyfo")},m(a,c){for(let l=0;l<i.length;l+=1)i[l].m(a,c);A(a,e,c),A(a,n,c),s=!0},p(a,c){if(c&116){r=a[4];let l;for(l=0;l<r.length;l+=1){const u=Tl(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=El(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(ve(),l=r.length;l<i.length;l+=1)o(l);_e()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)E(i[c]);s=!1},d(a){An(i,a),a&&k(e),a&&k(n)}}}function El(t){let e,n;function s(){return t[12](t[16])}return e=new Mb({props:{tag:t[16]}}),e.$on("click",s),{c(){j(e.$$.fragment)},m(r,i){U(e,r,i),n=!0},p(r,i){t=r;const o={};i&16&&(o.tag=t[16]),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){E(e.$$.fragment,r),n=!1},d(r){F(e,r)}}}function Ub(t){let e,n,s;return n=new Sf({}),{c(){e=v("div"),j(n.$$.fragment),f(e,"class","suggestion-footer svelte-2fyyfo")},m(r,i){A(r,e,i),U(n,e,null),s=!0},p:C,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){E(n.$$.fragment,r),s=!1},d(r){r&&k(e),F(n)}}}function Fb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g;o=new Rb({}),o.$on("change",t[9]);let m={ctx:t,current:null,token:null,hasCatch:!0,pending:Ub,then:xb,catch:Lb,error:19,blocks:[,,,]};return Ba(h=t[1],m),{c(){e=v("div"),n=v("i"),s=M(),r=v("input"),i=M(),j(o.$$.fragment),a=M(),c=v("i"),l=M(),u=v("ol"),m.block.c(),f(n,"class","codicon codicon-search spaced svelte-2fyyfo"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-2fyyfo"),f(c,"tabindex","0"),f(c,"class","codicon codicon-question spaced svelte-2fyyfo"),f(u,"class","svelte-2fyyfo"),Je(u,"open",t[3]),f(e,"class","searchbar svelte-2fyyfo"),Je(e,"open",t[3])},m(_,b){A(_,e,b),y(e,n),y(e,s),y(e,r),bt(r,t[0]),y(e,i),U(o,e,null),y(e,a),y(e,c),y(e,l),y(e,u),m.block.m(u,m.anchor=null),m.mount=()=>u,m.anchor=null,d=!0,p||(g=[Y(r,"input",t[7]),Y(r,"blur",t[8]),Y(c,"click",t[10]),Y(c,"keyup",Ti(t[11])),Y(e,"blur",t[13])],p=!0)},p(_,[b]){t=_,b&1&&r.value!==t[0]&&bt(r,t[0]),m.ctx=t,b&2&&h!==(h=t[1])&&Ba(h,m)||zf(m,t,b),(!d||b&8)&&Je(u,"open",t[3]),(!d||b&8)&&Je(e,"open",t[3])},i(_){d||(w(o.$$.fragment,_),w(m.block),d=!0)},o(_){E(o.$$.fragment,_);for(let b=0;b<3;b+=1){const D=m.blocks[b];E(D)}d=!1},d(_){_&&k(e),F(o),m.block.d(),m.token=null,m=null,p=!1,je(g)}}}function Vb(t,e,n){let s;We(t,bo,P=>n(14,s=P));const r=Ke();let i,o="",a="+",c=!1,l=[];async function u(P){n(3,c=!0),n(4,l=[...s.supertags.filter(te=>te.name.toLowerCase().includes(P.toLowerCase())).map(te=>new _f(te.name,Object.keys(te.tags).length,"supertag")),...await wf(P)])}const h=()=>{n(0,o=""),n(4,l=[]),n(3,c=!1)};function d(){o=this.value,n(0,o)}const p=P=>{(!P.relatedTarget||!P.target.parentNode.contains(P.relatedTarget))&&n(3,c=!1)},g=P=>{n(2,a=P.detail)},m=()=>xt.navigateTo("help"),_=()=>xt.navigateTo("help"),b=P=>{r("pick",P.toActiveTag(a)),h()},D=()=>{n(3,c=!1)};return t.$$.update=()=>{t.$$.dirty&1&&(n(4,l=[]),o!==""&&n(1,i=u(o)))},[o,i,a,c,l,r,h,d,p,g,m,_,b,D]}class Bb extends J{constructor(e){super(),X(this,e,Vb,Fb,Q,{})}}function jb(){const t=[],{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:async r=>{n(i=>(i.push(new Is("+",r,0,"general")),i));try{const i=await wf(r,!0,1);if(Array.isArray(i)&&i.length===1){const o=i.at(0);n(a=>{const c=a.findIndex(l=>l.name===o.name);return a[c]=new Is("+",o.name,o.count,o.type),a})}}catch{console.warn("Failed to load type and count for tag.",r)}},removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const ht=jb(),qb={id:0,width:0,height:0},zb=[{id:996911,width:300,height:112},{id:996914,width:728,height:102}],Hb=zb.filter(t=>t.width<window.innerWidth);let Gn=qb;for(const t of Hb)t.width>(Gn==null?void 0:Gn.width)&&(Gn=t);const Gb=()=>Gn;function Kb(t){let e,n,s,r,i,o;return{c(){e=v("script"),s=v("script"),s.textContent=";(adsbyjuicy = window.adsbyjuicy || []).push({ adzone: window.adZone.id })",r=M(),i=v("div"),o=v("ins"),f(e,"type","text/javascript"),f(e,"data-cfasync","false"),e.async=!0,es(e.src,n="https://poweredby.jads.co/js/jads.js")||f(e,"src",n),f(s,"type","text/javascript"),f(s,"data-cfasync","false"),s.async=!0,f(o,"id",window.adZone.id.toString()),f(o,"data-width",window.adZone.width),f(o,"data-height",window.adZone.height),f(i,"style",`height: ${window.adZone.height}px`),f(i,"class","svelte-hntawn")},m(a,c){y(document.head,e),y(document.head,s),A(a,r,c),A(a,i,c),y(i,o)},p:C,i:C,o:C,d(a){k(e),k(s),a&&k(r),a&&k(i)}}}window.adZone=Gb();class Wb extends J{constructor(e){super(),X(this,e,null,Kb,Q,{})}}function Qb(t){let e,n=kn(t[0])+"",s,r,i;return{c(){e=v("li"),s=ge(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),Je(e,"active",t[2])},m(o,a){A(o,e,a),y(e,s),r||(i=Y(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=kn(o[0])+"")&&Ue(s,n),a&4&&Je(e,"active",o[2])},i:C,o:C,d(o){o&&k(e),r=!1,i()}}}function Yb(t,e,n){let s,r,i;We(t,ht,c=>n(3,i=c));let{name:o}=e;const a=()=>r?ht.removeByIndex(s):ht.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class Xb extends J{constructor(e){super(),X(this,e,Yb,Qb,Q,{name:0})}}function Jb(t){let e,n;return{c(){e=v("span"),n=ge(t[0])},m(s,r){A(s,e,r),y(e,n)},p(s,r){r&1&&Ue(n,s[0])},d(s){s&&k(e)}}}function Zb(t){let e,n=t[1].hostname+"",s,r;return{c(){e=v("a"),s=ge(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){A(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Ue(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&k(e)}}}function eT(t){let e,n,s;function r(a,c){return a[1]?Zb:Jb}let i=r(t),o=i(t);return{c(){e=v("i"),n=M(),o.c(),s=Nt(),f(e,"class","codicon codicon-link")},m(a,c){A(a,e,c),A(a,n,c),o.m(a,c),A(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:C,o:C,d(a){a&&k(e),a&&k(n),o.d(a),a&&k(s)}}}function tT(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=mf(r)?new URL(r):null)},[r,s]}class nT extends J{constructor(e){super(),X(this,e,tT,eT,Q,{source:0})}}function sT(t){let e,n;const s=t[1].default,r=Of(s,t,t[0],null);return{c(){e=v("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){A(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Pf(r,s,i,i[0],n?$f(s,i[0],o,null):Mf(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){E(r,i),n=!1},d(i){i&&k(e),r&&r.d(i)}}}function rT(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class To extends J{constructor(e){super(),X(this,e,rT,sT,Q,{})}}const Sl=6e4,kl=t=>{if(!iT(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/Sl,s=new Date().getTime()/Sl-e;if(s<1)return"just now";if(s<60)return un(s,"minute");const r=s/60;if(r<24)return un(r,"hour");const i=r/24;if(i<7)return un(i,"day");if(i<30.5)return un(i/7,"week");if(i<365.25)return un(i/30.5,"month");const o=i/365.25;return un(o,"year")},iT=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",un=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function oT(t){let e,n,s,r=kl(t[0])+"",i;return{c(){e=v("i"),n=M(),s=v("span"),i=ge(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=kl(o[0])+"")&&Ue(i,r)},i:C,o:C,d(o){o&&k(e),o&&k(n),o&&k(s)}}}function aT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class cT extends J{constructor(e){super(),X(this,e,aT,oT,Q,{value:0})}}function lT(t){let e,n,s,r=Dt(t[0])+"",i;return{c(){e=v("i"),n=M(),s=v("span"),i=ge(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){A(o,e,a),A(o,n,a),A(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Dt(o[0])+"")&&Ue(i,r)},i:C,o:C,d(o){o&&k(e),o&&k(n),o&&k(s)}}}function uT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class hT extends J{constructor(e){super(),X(this,e,uT,lT,Q,{value:0})}}function Al(t,e,n){const s=t.slice();return s[1]=e[n],s}function dT(t){let e,n;return e=new cT({props:{value:t[0].created_at}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function fT(t){let e,n;return e=new hT({props:{value:t[0].score}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Cl(t){let e,n;return e=new To({props:{$$slots:{default:[pT]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&17&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function pT(t){let e,n;return e=new nT({props:{source:t[0].source}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Dl(t){let e,n;return e=new Xb({props:{name:t[1]}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function gT(t){let e,n,s,r,i,o,a,c,l;s=new To({props:{$$slots:{default:[dT]},$$scope:{ctx:t}}}),i=new To({props:{$$slots:{default:[fT]},$$scope:{ctx:t}}});let u=t[0].source&&Cl(t),h=t[0].tags,d=[];for(let g=0;g<h.length;g+=1)d[g]=Dl(Al(t,h,g));const p=g=>E(d[g],1,1,()=>{d[g]=null});return{c(){e=v("div"),n=v("div"),j(s.$$.fragment),r=M(),j(i.$$.fragment),o=M(),u&&u.c(),a=M(),c=v("ul");for(let g=0;g<d.length;g+=1)d[g].c();f(n,"class","summary svelte-jhzkkk"),f(c,"class","svelte-jhzkkk"),f(e,"class","details svelte-jhzkkk")},m(g,m){A(g,e,m),y(e,n),U(s,n,null),y(n,r),U(i,n,null),y(n,o),u&&u.m(n,null),y(e,a),y(e,c);for(let _=0;_<d.length;_+=1)d[_].m(c,null);l=!0},p(g,[m]){const _={};m&17&&(_.$$scope={dirty:m,ctx:g}),s.$set(_);const b={};if(m&17&&(b.$$scope={dirty:m,ctx:g}),i.$set(b),g[0].source?u?(u.p(g,m),m&1&&w(u,1)):(u=Cl(g),u.c(),w(u,1),u.m(n,null)):u&&(ve(),E(u,1,1,()=>{u=null}),_e()),m&1){h=g[0].tags;let D;for(D=0;D<h.length;D+=1){const P=Al(g,h,D);d[D]?(d[D].p(P,m),w(d[D],1)):(d[D]=Dl(P),d[D].c(),w(d[D],1),d[D].m(c,null))}for(ve(),D=h.length;D<d.length;D+=1)p(D);_e()}},i(g){if(!l){w(s.$$.fragment,g),w(i.$$.fragment,g),w(u);for(let m=0;m<h.length;m+=1)w(d[m]);l=!0}},o(g){E(s.$$.fragment,g),E(i.$$.fragment,g),E(u),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)E(d[m]);l=!1},d(g){g&&k(e),F(s),F(i),u&&u.d(),An(d,g)}}}function mT(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class yT extends J{constructor(e){super(),X(this,e,mT,gT,Q,{post:0})}}const Pa=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function vT(t){let e,n,s,r,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&k(e),t[3](null),a=!1,c()}}}function _T(t,e,n){let{post:s}=e;const r=Ke();let i;function o(c){vn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,r,o,a]}class wT extends J{constructor(e){super(),X(this,e,_T,vT,Q,{post:0})}}function IT(t){let e,n,s,r,i,o,a,c,l;return{c(){e=v("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,e.loop=a=t[0].tags.includes("loop"),f(e,"class","svelte-6lp82s")},m(u,h){A(u,e,h),t[5](e),c||(l=[Y(e,"click",Eo(t[4])),Y(e,"touchstart",t[2],{passive:!0}),Y(e,"touchend",t[3],{passive:!0})],c=!0)},p(u,[h]){h&1&&n!==(n=u[0].sample_url)&&f(e,"data-src",n),h&1&&s!==(s=u[0].id.toString())&&f(e,"alt",s),h&1&&r!==(r=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&f(e,"style",r),h&1&&i!==(i=u[0].width)&&f(e,"width",i),h&1&&o!==(o=u[0].height)&&f(e,"height",o),h&1&&a!==(a=u[0].tags.includes("loop"))&&(e.loop=a)},i:C,o:C,d(u){u&&k(e),t[5](null),c=!1,je(l)}}}function bT(t,e,n){let{post:s}=e;const r=Ke();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};function l(h){Vf.call(this,t,h)}function u(h){vn[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,a,c,l,u]}class TT extends J{constructor(e){super(),X(this,e,bT,IT,Q,{post:0})}}function ET(t){let e,n,s,r,i,o,a,c;return{c(){e=v("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){A(l,e,u),t[3](e),a||(c=Y(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:C,o:C,d(l){l&&k(e),t[3](null),a=!1,c()}}}function ST(t,e,n){let{post:s}=e;const r=Ke();let i;function o(c){vn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Pa.observe(i)},[s,i,r,o,a]}class kT extends J{constructor(e){super(),X(this,e,ST,ET,Q,{post:0})}}function AT(t){let e,n;return e=new kT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function CT(t){let e,n;return e=new TT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function DT(t){let e,n;return e=new wT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Nl(t){let e,n;return e=new yT({props:{post:t[0]}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function NT(t){let e,n,s,r,i;const o=[DT,CT,AT],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&Nl(t);return{c(){e=v("div"),s.c(),r=M(),l&&l.c(),f(e,"class","post svelte-1b8286y"),f(e,"tabindex","0")},m(u,h){A(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(ve(),E(a[d],1,1,()=>{a[d]=null}),_e(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=Nl(u),l.c(),w(l,1),l.m(e,null)):l&&(ve(),E(l,1,1,()=>{l=null}),_e())},i(u){i||(w(s),w(l),i=!0)},o(u){E(s),E(l),i=!1},d(u){u&&k(e),a[n].d(),l&&l.d()}}}function RT(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class OT extends J{constructor(e){super(),X(this,e,RT,NT,Q,{post:0})}}function Rl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Ol(t){let e,n;return e=new OT({props:{post:t[1]}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function $T(t){let e,n,s,r,i=t[0],o=[];for(let c=0;c<i.length;c+=1)o[c]=Ol(Rl(t,i,c));const a=c=>E(o[c],1,1,()=>{o[c]=null});return s=new Wb({}),{c(){e=v("ol");for(let c=0;c<o.length;c+=1)o[c].c();n=M(),j(s.$$.fragment),f(e,"class","page svelte-vcm6im")},m(c,l){A(c,e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);A(c,n,l),U(s,c,l),r=!0},p(c,[l]){if(l&1){i=c[0];let u;for(u=0;u<i.length;u+=1){const h=Rl(c,i,u);o[u]?(o[u].p(h,l),w(o[u],1)):(o[u]=Ol(h),o[u].c(),w(o[u],1),o[u].m(e,null))}for(ve(),u=i.length;u<o.length;u+=1)a(u);_e()}},i(c){if(!r){for(let l=0;l<i.length;l+=1)w(o[l]);w(s.$$.fragment,c),r=!0}},o(c){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)E(o[l]);E(s.$$.fragment,c),r=!1},d(c){c&&k(e),An(o,c),c&&k(n),F(s,c)}}}function PT(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class MT extends J{constructor(e){super(),X(this,e,PT,$T,Q,{posts:0})}}function LT(t){let e;return{c(){e=v("div")},m(n,s){A(n,e,s),t[1](e)},p:C,i:C,o:C,d(n){n&&k(e),t[1](null)}}}function xT(t,e,n){const s=Ke(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){vn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class UT extends J{constructor(e){super(),X(this,e,xT,LT,Q,{})}}const FT="/assets/shironeko-x.c28cad00.png";function VT(t){let e,n,s,r,i;return{c(){e=v("div"),n=v("img"),r=M(),i=v("span"),i.textContent="You have reached the end",es(n.src,s=FT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){A(o,e,a),y(e,n),y(e,r),y(e,i)},p:C,i:C,o:C,d(o){o&&k(e)}}}class BT extends J{constructor(e){super(),X(this,e,null,VT,Q,{})}}const jT="/assets/shironeko-confused.4071d5b2.png";function qT(t){let e,n,s,r,i;return{c(){e=v("div"),n=v("img"),r=M(),i=v("span"),i.textContent="No results found",es(n.src,s=jT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){A(o,e,a),y(e,n),y(e,r),y(e,i)},p:C,i:C,o:C,d(o){o&&k(e)}}}class zT extends J{constructor(e){super(),X(this,e,null,qT,Q,{})}}const HT=()=>{const t={count:null,pages:[],nextPage:0,ids:new Set},{subscribe:e,update:n,set:s}=Cn(t);return{subscribe:e,addPage(r){n(i=>{const o=r.posts.filter(a=>!i.ids.has(a.id));return o.forEach(a=>i.ids.add(a.id)),{count:r.count,pages:[...i.pages,o],nextPage:i.nextPage+1,ids:i.ids}})},reset(){s(t)}}},mr=HT(),GT={sortProperty:"id",minScore:0},KT=()=>{const{subscribe:t,set:e}=Cn(GT);return{subscribe:t,set:e}},yr=KT();function $l(t,e,n){const s=t.slice();return s[15]=e[n],s}function WT(t){let e,n;return e=new zT({}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function QT(t){let e,n,s=Dt(t[2].count)+"",r,i,o,a,c,l,u,h,d,p,g,m,_,b,D,P,te,O,S,x,ae,he,Z,Ln,ne,se=t[0]==="custom"&&Pl(t),$e=t[2].pages,K=[];for(let q=0;q<$e.length;q+=1)K[q]=Ml($l(t,$e,q));const Ks=q=>E(K[q],1,1,()=>{K[q]=null}),La=[XT,YT],yt=[];function xa(q,ce){return q[4]?0:1}return x=xa(t),ae=yt[x]=La[x](t),{c(){e=v("div"),n=v("span"),r=ge(s),i=ge(" results"),a=M(),c=v("select"),l=v("option"),l.textContent="Date",u=v("option"),u.textContent="Score",h=v("option"),h.textContent="Updated",d=M(),p=v("select"),g=v("option"),g.textContent="Any Score",m=v("option"),m.textContent="Score > 10",_=v("option"),_.textContent="Score > 100",b=v("option"),b.textContent="Score > 1K",D=v("option"),D.textContent="Custom",P=M(),se&&se.c(),te=M(),O=v("ol");for(let q=0;q<K.length;q+=1)K[q].c();S=M(),ae.c(),he=Nt(),f(n,"title",o=`${t[2].count} results`),f(n,"class","svelte-1yfgwr6"),l.__value="id",l.value=l.__value,f(l,"class","svelte-1yfgwr6"),u.__value="score",u.value=u.__value,f(u,"class","svelte-1yfgwr6"),h.__value="updated",h.value=h.__value,f(h,"class","svelte-1yfgwr6"),f(c,"title","Sort results by"),f(c,"class","svelte-1yfgwr6"),t[5].sortProperty===void 0&&ns(()=>t[8].call(c)),g.__value=0,g.value=g.__value,f(g,"class","svelte-1yfgwr6"),m.__value=10,m.value=m.__value,f(m,"class","svelte-1yfgwr6"),_.__value=100,_.value=_.__value,f(_,"class","svelte-1yfgwr6"),b.__value=1e3,b.value=b.__value,f(b,"class","svelte-1yfgwr6"),D.__value="custom",D.value=D.__value,f(D,"class","svelte-1yfgwr6"),f(p,"title","Filter by score"),f(p,"class","svelte-1yfgwr6"),t[0]===void 0&&ns(()=>t[10].call(p)),f(e,"class","header svelte-1yfgwr6"),f(O,"class","svelte-1yfgwr6")},m(q,ce){A(q,e,ce),y(e,n),y(n,r),y(n,i),y(e,a),y(e,c),y(c,l),y(c,u),y(c,h),Qs(c,t[5].sortProperty),y(e,d),y(e,p),y(p,g),y(p,m),y(p,_),y(p,b),y(p,D),Qs(p,t[0]),y(e,P),se&&se.m(e,null),A(q,te,ce),A(q,O,ce);for(let $t=0;$t<K.length;$t+=1)K[$t].m(O,null);A(q,S,ce),yt[x].m(q,ce),A(q,he,ce),Z=!0,Ln||(ne=[Y(c,"change",t[8]),Y(c,"change",t[9]),Y(p,"change",t[10]),Y(p,"change",t[11])],Ln=!0)},p(q,ce){if((!Z||ce&4)&&s!==(s=Dt(q[2].count)+"")&&Ue(r,s),(!Z||ce&4&&o!==(o=`${q[2].count} results`))&&f(n,"title",o),ce&32&&Qs(c,q[5].sortProperty),ce&1&&Qs(p,q[0]),q[0]==="custom"?se?se.p(q,ce):(se=Pl(q),se.c(),se.m(e,null)):se&&(se.d(1),se=null),ce&4){$e=q[2].pages;let Pe;for(Pe=0;Pe<$e.length;Pe+=1){const Ua=$l(q,$e,Pe);K[Pe]?(K[Pe].p(Ua,ce),w(K[Pe],1)):(K[Pe]=Ml(Ua),K[Pe].c(),w(K[Pe],1),K[Pe].m(O,null))}for(ve(),Pe=$e.length;Pe<K.length;Pe+=1)Ks(Pe);_e()}let $t=x;x=xa(q),x===$t?yt[x].p(q,ce):(ve(),E(yt[$t],1,1,()=>{yt[$t]=null}),_e(),ae=yt[x],ae?ae.p(q,ce):(ae=yt[x]=La[x](q),ae.c()),w(ae,1),ae.m(he.parentNode,he))},i(q){if(!Z){for(let ce=0;ce<$e.length;ce+=1)w(K[ce]);w(ae),Z=!0}},o(q){K=K.filter(Boolean);for(let ce=0;ce<K.length;ce+=1)E(K[ce]);E(ae),Z=!1},d(q){q&&k(e),se&&se.d(),q&&k(te),q&&k(O),An(K,q),q&&k(S),yt[x].d(q),q&&k(he),Ln=!1,je(ne)}}}function Pl(t){let e,n,s;return{c(){e=v("input"),f(e,"type","number"),f(e,"min","0"),f(e,"max","100000"),f(e,"step","1"),f(e,"class","svelte-1yfgwr6")},m(r,i){A(r,e,i),bt(e,t[1]),n||(s=[Y(e,"input",t[12]),Y(e,"keyup",Ti(ZT)),Y(e,"blur",t[13])],n=!0)},p(r,i){i&2&&ql(e.value)!==r[1]&&bt(e,r[1])},d(r){r&&k(e),n=!1,je(s)}}}function Ml(t){let e,n;return e=new MT({props:{posts:t[15]}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.posts=s[15]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function YT(t){let e,n;return e=new BT({}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function XT(t){let e,n;return e=new UT({}),e.$on("visible",t[14]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function JT(t){let e,n,s,r;const i=[QT,WT],o=[];function a(c,l){return c[2].count?0:c[3]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Nt()},m(c,l){~e&&o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(ve(),E(o[u],1,1,()=>{o[u]=null}),_e()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){~e&&o[e].d(c),c&&k(s)}}}const ZT=t=>t.target.blur();function eE(t,e,n){let s,r,i,o,a;We(t,mr,D=>n(2,o=D)),We(t,yr,D=>n(5,a=D));const c=Ke();let l=0,u=0;function h(){a.sortProperty=Va(this),yr.set(a)}const d=()=>c("configchange");function p(){l=Va(this),n(0,l)}const g=()=>{l!=="custom"&&c("configchange")};function m(){u=ql(this.value),n(1,u)}const _=()=>c("configchange"),b=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&3&&Lf(yr,a.minScore=l!=="custom"?l:u,a),t.$$.dirty&4&&n(7,s=o.count/yf),t.$$.dirty&132&&n(4,r=o.pages.length<s),t.$$.dirty&4&&n(3,i=o.count===0)},[l,u,o,i,r,a,c,s,h,d,p,g,m,_,b]}class tE extends J{constructor(e){super(),X(this,e,eE,JT,Q,{})}}function nE(t){let e,n,s;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-ysmhyu"),Je(e,"visible",t[0])},m(r,i){A(r,e,i),n||(s=Y(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&Je(e,"visible",r[0])},i:C,o:C,d(r){r&&k(e),n=!1,s()}}}function sE(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0||window.innerHeight+a>=document.body.scrollHeight),s=a};return zl(()=>{document.addEventListener("scroll",i,{passive:!0})}),Ff(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class rE extends J{constructor(e){super(),X(this,e,sE,nE,Q,{})}}function iE(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=v("div"),n=v("div"),s=v("i"),i=M(),o=v("div"),a=v("h3"),c=ge(t[2]),l=M(),u=v("span"),h=ge(t[1]),f(s,"class",r=St(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){A(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=St(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Ue(c,d[2]),p&2&&Ue(h,d[1])},i:C,o:C,d(d){d&&k(e)}}}function oE(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class kf extends J{constructor(e){super(),X(this,e,oE,iE,Q,{icon:0,message:1,title:2})}}function aE(t){let e;return{c(){e=v("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&k(e)}}}class cE extends J{constructor(e){super(),X(this,e,null,aE,Q,{})}}function Ll(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function xl(t){let e,n,s,r=t[0],i=[];for(let c=0;c<r.length;c+=1)i[c]=Ul(Ll(t,r,c));const o=c=>E(i[c],1,1,()=>{i[c]=null});let a=t[0].length>1&&Fl(t);return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=M(),a&&a.c(),n=Nt()},m(c,l){for(let u=0;u<i.length;u+=1)i[u].m(c,l);A(c,e,l),a&&a.m(c,l),A(c,n,l),s=!0},p(c,l){if(l&1){r=c[0];let u;for(u=0;u<r.length;u+=1){const h=Ll(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=Ul(h),i[u].c(),w(i[u],1),i[u].m(e.parentNode,e))}for(ve(),u=r.length;u<i.length;u+=1)o(u);_e()}c[0].length>1?a?a.p(c,l):(a=Fl(c),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)E(i[l]);s=!1},d(c){An(i,c),c&&k(e),a&&a.d(c),c&&k(n)}}}function Ul(t){let e,n;function s(){return t[2](t[7])}function r(){return t[3](t[5])}return e=new Ef({props:{tag:t[5]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){j(e.$$.fragment)},m(i,o){U(e,i,o),n=!0},p(i,o){t=i;const a={};o&1&&(a.tag=t[5]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){F(e,i)}}}function Fl(t){let e,n,s;return{c(){e=v("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1uhy4lk"></i>',f(e,"class","add-supertag svelte-1uhy4lk"),f(e,"title","Click to create a new supertag")},m(r,i){A(r,e,i),n||(s=Y(e,"click",t[4]),n=!0)},p:C,d(r){r&&k(e),n=!1,s()}}}function lE(t){let e,n,s=t[0].length&&xl(t);return{c(){e=v("ul"),s&&s.c(),f(e,"class","svelte-1uhy4lk")},m(r,i){A(r,e,i),s&&s.m(e,null),n=!0},p(r,[i]){r[0].length?s?(s.p(r,i),i&1&&w(s,1)):(s=xl(r),s.c(),w(s,1),s.m(e,null)):s&&(ve(),E(s,1,1,()=>{s=null}),_e())},i(r){n||(w(s),n=!0)},o(r){E(s),n=!1},d(r){r&&k(e),s&&s.d()}}}function uE(t,e,n){let s;We(t,ht,c=>n(0,s=c));const r=Ke();return[s,r,c=>ht.removeByIndex(c),c=>ht.addOrReplace(new Is(pf(c.modifier),c.name,c.count,c.type)),()=>r("supertag")]}class hE extends J{constructor(e){super(),X(this,e,uE,lE,Q,{})}}function dE(t){let e,n;return e=new tE({}),e.$on("endreached",t[4]),e.$on("configchange",t[3]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function fE(t){let e,n,s,r;const i=[gE,pE],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Nt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(ve(),E(o[u],1,1,()=>{o[u]=null}),_e(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function pE(t){let e,n;return e=new kf({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function gE(t){let e,n;return e=new kf({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function Vl(t){let e,n;return e=new Cb({props:{tags:t[2]}}),e.$on("submit",t[8]),e.$on("close",t[9]),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function mE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,_,b;n=new cE({}),r=new Bb({}),r.$on("pick",t[5]),o=new hE({}),o.$on("supertag",t[6]),l=new bf({props:{title:"Click to search with active tags",text:"Search"}}),l.$on("click",t[7]);const D=[fE,dE],P=[];function te(S,x){return S[1]!==void 0?0:1}h=te(t),d=P[h]=D[h](t),g=new rE({});let O=t[0]&&Vl(t);return{c(){e=v("div"),j(n.$$.fragment),s=M(),j(r.$$.fragment),i=M(),j(o.$$.fragment),a=M(),c=v("div"),j(l.$$.fragment),u=M(),d.c(),p=M(),j(g.$$.fragment),m=M(),O&&O.c(),_=Nt(),f(c,"class","sort-row svelte-1lt5aa2"),f(e,"class","search-config svelte-1lt5aa2")},m(S,x){A(S,e,x),U(n,e,null),y(e,s),U(r,e,null),y(e,i),U(o,e,null),y(e,a),y(e,c),U(l,c,null),A(S,u,x),P[h].m(S,x),A(S,p,x),U(g,S,x),A(S,m,x),O&&O.m(S,x),A(S,_,x),b=!0},p(S,[x]){let ae=h;h=te(S),h===ae?P[h].p(S,x):(ve(),E(P[ae],1,1,()=>{P[ae]=null}),_e(),d=P[h],d?d.p(S,x):(d=P[h]=D[h](S),d.c()),w(d,1),d.m(p.parentNode,p)),S[0]?O?(O.p(S,x),x&1&&w(O,1)):(O=Vl(S),O.c(),w(O,1),O.m(_.parentNode,_)):O&&(ve(),E(O,1,1,()=>{O=null}),_e())},i(S){b||(w(n.$$.fragment,S),w(r.$$.fragment,S),w(o.$$.fragment,S),w(l.$$.fragment,S),w(d),w(g.$$.fragment,S),w(O),b=!0)},o(S){E(n.$$.fragment,S),E(r.$$.fragment,S),E(o.$$.fragment,S),E(l.$$.fragment,S),E(d),E(g.$$.fragment,S),E(O),b=!1},d(S){S&&k(e),F(n),F(r),F(o),F(l),S&&k(u),P[h].d(S),S&&k(p),F(g,S),S&&k(m),O&&O.d(S),S&&k(_)}}}function yE(t,e,n){let s,r,i,o;We(t,bo,b=>n(10,s=b)),We(t,ht,b=>n(2,r=b)),We(t,yr,b=>n(11,i=b)),We(t,mr,b=>n(12,o=b));let a=!1,c;const l=async()=>(mr.reset(),u()),u=async()=>{n(1,c=void 0);try{const b=h(),D=await ob(o.nextPage,b,i.sortProperty,i.minScore);mr.addPage(D)}catch(b){n(1,c=b),console.warn(b)}},h=()=>r.flatMap(b=>b.type==="supertag"?s.supertags.find(D=>D.name===b.name).tags:b.toSearchableTag());return[a,c,r,l,u,b=>ht.addOrReplace(b.detail),()=>{n(0,a=!0)},()=>l(),b=>{bo.addSupertag(b.detail),ht.set([new Is("+",b.detail.name,b.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class vE extends J{constructor(e){super(),X(this,e,yE,mE,Q,{})}}function _E(t){let e,n;return e=new Sf({}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},p:C,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function wE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&j(e.$$.fragment),n=Nt()},m(o,a){e&&U(e,o,a),A(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){ve();const c=e;E(c.$$.fragment,1,0,()=>{F(c,1)}),_e()}r?(e=new r(i()),j(e.$$.fragment),w(e.$$.fragment,1),U(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&E(e.$$.fragment,o),s=!1},d(o){o&&k(n),e&&F(e,o)}}}function IE(t){let e,n,s,r;const i=[wE,_E],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Nt()},m(c,l){o[e].m(c,l),A(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(ve(),E(o[u],1,1,()=>{o[u]=null}),_e(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){E(n),r=!1},d(c){o[e].d(c),c&&k(s)}}}function bE(t,e,n){let{loadComponent:s}=e,r;return zl(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class Ma extends J{constructor(e){super(),X(this,e,bE,IE,Q,{loadComponent:1})}}function TE(t){let e;return{c(){e=v("p"),e.textContent="You got lost..."},m(n,s){A(n,e,s)},i:C,o:C,d(n){n&&k(e)}}}function EE(t){let e,n;return e=new Ma({props:{loadComponent:RE}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function SE(t){let e,n;return e=new Ma({props:{loadComponent:NE}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function kE(t){let e,n;return e=new Ma({props:{loadComponent:DE}}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function AE(t){let e,n;return e=new vE({}),{c(){j(e.$$.fragment)},m(s,r){U(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){E(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function CE(t){let e,n,s,r;const i=[AE,kE,SE,EE,TE],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=v("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){A(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(ve(),E(o[u],1,1,()=>{o[u]=null}),_e(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){E(s),r=!1},d(c){c&&k(e),o[n].d()}}}const DE=()=>vi(()=>import("./Account.bb681cd9.js"),["assets/Account.bb681cd9.js","assets/Account.ce3782a6.css"]),NE=()=>vi(()=>import("./Preferences.93df45e1.js"),["assets/Preferences.93df45e1.js","assets/Preferences.aea2222b.css","assets/ParagraphHeading.e6049e71.js","assets/ParagraphHeading.5a89239e.css"]),RE=()=>vi(()=>import("./Help.6d7c1370.js"),["assets/Help.6d7c1370.js","assets/Help.9081c352.css","assets/ParagraphHeading.e6049e71.js","assets/ParagraphHeading.5a89239e.css"]);function OE(t,e,n){let s;return We(t,xt,r=>n(0,s=r)),[s]}class $E extends J{constructor(e){super(),X(this,e,OE,CE,Q,{})}}function PE(t){let e;return{c(){e=v("footer"),e.innerHTML=`<div class="flex left svelte-1e56m0a"><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-1e56m0a">\xA9 2022 kurozenzen</span> 
  <div class="flex right svelte-1e56m0a"><a title="Application Status" href="https://stats.uptimerobot.com/EZVwES34jJ" target="_newtab" class="svelte-1e56m0a"><i class="codicon codicon-zap"></i> Status</a></div>`,f(e,"class","svelte-1e56m0a")},m(n,s){A(n,e,s)},p:C,i:C,o:C,d(n){n&&k(e)}}}class ME extends J{constructor(e){super(),X(this,e,null,PE,Q,{})}}function LE(t){let e,n,s,r,i,o;return e=new WI({}),s=new $E({}),i=new ME({}),{c(){j(e.$$.fragment),n=M(),j(s.$$.fragment),r=M(),j(i.$$.fragment)},m(a,c){U(e,a,c),A(a,n,c),U(s,a,c),A(a,r,c),U(i,a,c),o=!0},p:C,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){E(e.$$.fragment,a),E(s.$$.fragment,a),E(i.$$.fragment,a),o=!1},d(a){F(e,a),a&&k(n),F(s,a),a&&k(r),F(i,a)}}}class xE extends J{constructor(e){super(),X(this,e,null,LE,Q,{})}}function UE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await vi(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(p=>{i?i("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=u(),l}new xE({target:document.getElementById("app")});UE();export{F as A,vn as B,VE as C,FE as D,bf as E,bt as F,es as G,qI as H,Nt as I,We as J,bo as K,pl as L,wl as M,Cn as N,Of as O,Pf as P,Mf as Q,$f as R,J as S,ns as T,Qs as U,Va as V,Ef as W,Is as X,Xb as Y,rE as Z,vl as _,f as a,A as b,C as c,k as d,v as e,kn as f,ge as g,y as h,X as i,Ue as j,M as k,Y as l,w as m,St as n,Ti as o,Eo as p,ve as q,je as r,Q as s,Je as t,_e as u,E as v,An as w,Ke as x,j as y,U as z};
