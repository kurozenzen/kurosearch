(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function A(){}function If(t,e){for(const n in e)t[n]=e[n];return t}function bf(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Ml(t){return t()}function La(){return Object.create(null)}function Ve(t){t.forEach(Ml)}function Tf(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Bs;function hr(t,e){return Bs||(Bs=document.createElement("a")),Bs.href=e,t===Bs.href}function Ef(t){return Object.keys(t).length===0}function kf(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xe(t,e,n){t.$$.on_destroy.push(kf(e,n))}function Sf(t,e,n,s){if(t){const r=$l(t,e,n,s);return t[0](r)}}function $l(t,e,n,s){return t[1]&&s?If(n.ctx.slice(),t[1](s(e))):n.ctx}function Af(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Cf(t,e,n,s,r,i){if(r){const o=$l(e,n,s,i);t.p(o,r)}}function Df(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function nt(t){return t==null?"":t}function y(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function kn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function sn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function fe(t){return document.createTextNode(t)}function U(){return fe(" ")}function Xt(){return fe("")}function ee(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Mr(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rf(t){return Array.from(t.childNodes)}function Me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function cn(t,e){t.value=e==null?"":e}function js(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Ma(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function je(t,e,n){t.classList[n?"add":"remove"](e)}function Nf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let Yn;function ot(t){Yn=t}function $r(){if(!Yn)throw new Error("Function called outside component initialization");return Yn}function xl(t){$r().$$.on_mount.push(t)}function Of(t){$r().$$.on_destroy.push(t)}function Ke(){const t=$r();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Nf(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Pf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const $n=[],mn=[],Js=[],ji=[],Lf=Promise.resolve();let qi=!1;function Mf(){qi||(qi=!0,Lf.then(Io))}function Xn(t){Js.push(t)}function AE(t){ji.push(t)}const Ii=new Set;let qs=0;function Io(){const t=Yn;do{for(;qs<$n.length;){const e=$n[qs];qs++,ot(e),$f(e.$$)}for(ot(null),$n.length=0,qs=0;mn.length;)mn.pop()();for(let e=0;e<Js.length;e+=1){const n=Js[e];Ii.has(n)||(Ii.add(n),n())}Js.length=0}while($n.length);for(;ji.length;)ji.pop()();qi=!1,Ii.clear(),ot(t)}function $f(t){if(t.fragment!==null){t.update(),Ve(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xn)}}const Zs=new Set;let Ot;function pe(){Ot={r:0,c:[],p:Ot}}function ge(){Ot.r||Ve(Ot.c),Ot=Ot.p}function w(t,e){t&&t.i&&(Zs.delete(t),t.i(e))}function T(t,e,n,s){if(t&&t.o){if(Zs.has(t))return;Zs.add(t),Ot.c.push(()=>{Zs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function $a(t,e){const n=e.token={};function s(r,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(pe(),T(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),ge())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&Io()}if(bf(t)){const r=$r();if(t.then(i=>{ot(r),s(e.then,1,e.value,i),ot(null)},i=>{if(ot(r),s(e.catch,2,e.error,i),ot(null),!e.hasCatch)throw i}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function xf(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function CE(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function z(t){t&&t.c()}function B(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||Xn(()=>{const c=i.map(Ml).filter(Tf);o?o.push(...c):Ve(c),t.$$.on_mount=[]}),a.forEach(Xn)}function j(t,e){const n=t.$$;n.fragment!==null&&(Ve(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Uf(t,e){t.$$.dirty[0]===-1&&($n.push(t),Mf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,s,r,i,o,a=[-1]){const c=Yn;ot(t);const l=t.$$={fragment:null,ctx:null,props:i,update:A,not_equal:r,bound:La(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:La(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[h],l.ctx[h]=g)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](g),u&&Uf(t,h)),d}):[],l.update(),u=!0,Ve(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Rf(e.target);l.fragment&&l.fragment.l(h),h.forEach(D)}else l.fragment&&l.fragment.c();e.intro&&w(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),Io()}ot(c)}class Z{$destroy(){j(this,1),this.$destroy=A}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Ef(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const rn=[];function Sn(t,e=A){let n;const s=new Set;function r(a){if(Y(t,a)&&(t=a,n)){const c=!rn.length;for(const l of s)l[1](),rn.push(l,t);if(c){for(let l=0;l<rn.length;l+=2)rn[l][0](rn[l+1]);rn.length=0}}}function i(a){r(a(t))}function o(a,c=A){const l=[a,c];return s.add(l),s.size===1&&(n=e(r)||A),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const Ff=Object.freeze(["search","account","settings","help"]),Vf=t=>Ff.includes(t),Bf=()=>{const{subscribe:t,set:e}=Sn("search");return{subscribe:t,navigateTo(n){if(!Vf(n))throw new TypeError("Invalid route passed to navigateTo");e(n)}}},Pt=Bf();function jf(t){let e,n,s,r,i,o;return{c(){e=sn("svg"),n=sn("g"),s=sn("path"),r=sn("defs"),i=sn("clipPath"),o=sn("path"),f(s,"d","M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"),f(s,"fill","currentcolor"),f(n,"clip-path","url(#prefix__clip0)"),f(o,"fill","currentcolor"),f(o,"d","M0 0h71v55H0z"),f(i,"id","prefix__clip0"),f(e,"width","16"),f(e,"height","16"),f(e,"viewBox","0 0 71 55"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(a,c){R(a,e,c),y(e,n),y(n,s),y(e,r),y(r,i),y(i,o)},p:A,i:A,o:A,d(a){a&&D(e)}}}class qf extends Z{constructor(e){super(),J(this,e,null,jf,Y,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ul=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},zf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ul(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hf=function(t){const e=Ul(t);return Fl.encodeByteArray(e,!0)},Vl=function(t){return Hf(t).replace(/\./g,"")},Kf=function(t){try{return Fl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Bl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yf(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jl(){return typeof indexedDB=="object"}function ql(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Xf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="FirebaseError";class We extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jf,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new We(r,a,s)}}function Zf(t,e){return t.replace(ep,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ep=/\{\$([^}]+)}/g;function tp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(xa(i)&&xa(o)){if(!Jn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function np(t,e){const n=new sp(t,e);return n.subscribe.bind(n)}class sp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rp(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=bi),r.error===void 0&&(r.error=bi),r.complete===void 0&&(r.complete=bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=1e3,op=2,ap=4*60*60*1e3,cp=.5;function Ua(t,e=ip,n=op){const s=e*Math.pow(n,t),r=Math.round(cp*s*(Math.random()-.5)*2);return Math.min(ap,s+r)}/**
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
 */function Re(t){return t&&t._delegate?t._delegate:t}class Ge{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(t){return t===Rt?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const fp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pp=ne.INFO,gp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},mp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=gp[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xr{constructor(e){this.name=e,this._logLevel=pp,this._logHandler=mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const yp=(t,e)=>e.some(n=>t instanceof n);let Fa,Va;function vp(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,zi=new WeakMap,Hl=new WeakMap,Ti=new WeakMap,bo=new WeakMap;function wp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zl.set(n,t)}).catch(()=>{}),bo.set(e,t),e}function Ip(t){if(zi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zi.set(t,e)}let Hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bp(t){Hi=t(Hi)}function Tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ei(this),e,...n);return Hl.set(s,e.sort?e.sort():[e]),It(s)}:_p().includes(t)?function(...e){return t.apply(Ei(this),e),It(zl.get(this))}:function(...e){return It(t.apply(Ei(this),e))}}function Ep(t){return typeof t=="function"?Tp(t):(t instanceof IDBTransaction&&Ip(t),yp(t,vp())?new Proxy(t,Hi):t)}function It(t){if(t instanceof IDBRequest)return wp(t);if(Ti.has(t))return Ti.get(t);const e=Ep(t);return e!==t&&(Ti.set(t,e),bo.set(e,t)),e}const Ei=t=>bo.get(t);function Kl(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return s&&o.addEventListener("upgradeneeded",c=>{s(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const kp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],ki=new Map;function Ba(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ki.get(e))return ki.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Sp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||kp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ki.set(e,i),i}bp(t=>({...t,get:(e,n,s)=>Ba(e,n)||t.get(e,n,s),has:(e,n)=>!!Ba(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",ja="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new xr("@firebase/app"),Dp="@firebase/app-compat",Rp="@firebase/analytics-compat",Np="@firebase/analytics",Op="@firebase/app-check-compat",Pp="@firebase/app-check",Lp="@firebase/auth",Mp="@firebase/auth-compat",$p="@firebase/database",xp="@firebase/database-compat",Up="@firebase/functions",Fp="@firebase/functions-compat",Vp="@firebase/installations",Bp="@firebase/installations-compat",jp="@firebase/messaging",qp="@firebase/messaging-compat",zp="@firebase/performance",Hp="@firebase/performance-compat",Kp="@firebase/remote-config",Gp="@firebase/remote-config-compat",Wp="@firebase/storage",Qp="@firebase/storage-compat",Yp="@firebase/firestore",Xp="@firebase/firestore-compat",Jp="firebase",Zp="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="[DEFAULT]",eg={[Ki]:"fire-core",[Dp]:"fire-core-compat",[Np]:"fire-analytics",[Rp]:"fire-analytics-compat",[Pp]:"fire-app-check",[Op]:"fire-app-check-compat",[Lp]:"fire-auth",[Mp]:"fire-auth-compat",[$p]:"fire-rtdb",[xp]:"fire-rtdb-compat",[Up]:"fire-fn",[Fp]:"fire-fn-compat",[Vp]:"fire-iid",[Bp]:"fire-iid-compat",[jp]:"fire-fcm",[qp]:"fire-fcm-compat",[zp]:"fire-perf",[Hp]:"fire-perf-compat",[Kp]:"fire-rc",[Gp]:"fire-rc-compat",[Wp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,Gi=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function st(t){const e=t.name;if(Gi.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,t);for(const n of dr.values())tg(n,t);return!0}function Zt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new Jt("app","Firebase",ng);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=Zp;function rg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});const r=dr.get(s);if(r){if(Jn(t,r.options)&&Jn(n,r.config))return r;throw zt.create("duplicate-app",{appName:s})}const i=new dp(s);for(const a of Gi.values())i.addComponent(a);const o=new sg(t,n,i);return dr.set(s,o),o}function To(t=Gl){const e=dr.get(t);if(!e)throw zt.create("no-app",{appName:t});return e}function qe(t,e,n){var s;let r=(s=eg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}st(new Ge(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ig="firebase-heartbeat-database",og=1,Zn="firebase-heartbeat-store";let Si=null;function Wl(){return Si||(Si=Kl(ig,og,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),Si}async function ag(t){var e;try{return(await Wl()).transaction(Zn).objectStore(Zn).get(Ql(t))}catch(n){if(n instanceof We)qt.warn(n.message);else{const s=zt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qt.warn(s.message)}}}async function qa(t,e){var n;try{const r=(await Wl()).transaction(Zn,"readwrite");return await r.objectStore(Zn).put(e,Ql(t)),r.done}catch(s){if(s instanceof We)qt.warn(s.message);else{const r=zt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});qt.warn(r.message)}}}function Ql(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cg=1024,lg=30*24*60*60*1e3;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=lg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=za(),{heartbeatsToSend:n,unsentEntries:s}=hg(this._heartbeatsCache.heartbeats),r=Vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function za(){return new Date().toISOString().substring(0,10)}function hg(t,e=cg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ha(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ha(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?ql().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ag(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ha(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){st(new Ge("platform-logger",e=>new Ap(e),"PRIVATE")),st(new Ge("heartbeat",e=>new ug(e),"PRIVATE")),qe(Ki,ja,t),qe(Ki,ja,"esm2017"),qe("fire-js","")}fg("");function Eo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Yl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pg=Yl,Xl=new Jt("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new xr("@firebase/auth");function er(t,...e){Ka.logLevel<=ne.ERROR&&Ka.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,...e){throw ko(t,...e)}function Je(t,...e){return ko(t,...e)}function Jl(t,e,n){const s=Object.assign(Object.assign({},pg()),{[e]:n});return new Jt("auth","Firebase",s).create(e,{appName:t.name})}function gg(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&He(t,"argument-error"),Jl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ko(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xl.create(t,...e)}function F(t,e,...n){if(!t)throw ko(e,...n)}function at(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function ht(t,e){t||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;function ct(t){ht(t instanceof Function,"Expected a class definition");let e=Ga.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ga.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){const n=Zt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Jn(i,e!=null?e:{}))return r;He(r,"already-initialized")}return n.initialize({options:e})}function yg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vg(){return Wa()==="http:"||Wa()==="https:"}function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vg()||Bl()||"connection"in navigator)?navigator.onLine:!0}function wg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Wf()||Qf()}get(){return _g()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new vs(3e4,6e4);function _s(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,s,r={}){return eu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Zl.fetch()(tu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function eu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ig),e);try{const r=new Tg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zs(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jl(t,u,l);He(t,u)}}catch(r){if(r instanceof We)throw r;He(t,"network-request-failed")}}async function Is(t,e,n,s,r={}){const i=await ws(t,e,n,s,r);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?So(t.config,r):`${t.config.apiScheme}://${r}`}class Tg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),bg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Je(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function kg(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(t,e=!1){const n=Re(t),s=await n.getIdToken(e),r=Ao(s);F(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:qn(Ai(r.auth_time)),issuedAtTime:qn(Ai(r.iat)),expirationTime:qn(Ai(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ai(t){return Number(t)*1e3}function Ao(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kf(s);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Ag(t){const e=Ao(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof We&&Cg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Cg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await es(t,kg(n,{idToken:s}));F(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],a=Ng(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Rg(t){const e=Re(t);await fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ng(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,s=Eo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e){const n=await eu(t,{},async()=>{const s=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=tu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Pg(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ts;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(F(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sg(this,e)}reload(){return Rg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,Eg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:q,isAnonymous:C,providerData:S,stsTokenManager:K}=n;F(I&&K,e,"internal-error");const $e=ts.fromJSON(this.name,K);F(typeof I=="string",e,"internal-error"),mt(h,e.name),mt(d,e.name),F(typeof q=="boolean",e,"internal-error"),F(typeof C=="boolean",e,"internal-error"),mt(p,e.name),mt(g,e.name),mt(m,e.name),mt(E,e.name),mt(k,e.name),mt(N,e.name);const le=new Ft({uid:I,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:C,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:$e,createdAt:k,lastLoginAt:N});return S&&Array.isArray(S)&&(le.providerData=S.map(x=>Object.assign({},x))),E&&(le._redirectEventId=E),le}static async _fromIdTokenResponse(e,n,s=!1){const r=new ts;r.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await fr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}su.type="NONE";const Qa=su;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=tr(this.userKey,r.apiKey,i),this.fullPersistenceKey=tr("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(ct(Qa),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ct(Qa);const o=tr(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ft._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ou(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ru(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cu(e))return"Blackberry";if(lu(e))return"Webos";if(Co(e))return"Safari";if((e.includes("chrome/")||iu(e))&&!e.includes("edge/"))return"Chrome";if(au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ru(t=De()){return/firefox\//i.test(t)}function Co(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iu(t=De()){return/crios\//i.test(t)}function ou(t=De()){return/iemobile/i.test(t)}function au(t=De()){return/android/i.test(t)}function cu(t=De()){return/blackberry/i.test(t)}function lu(t=De()){return/webos/i.test(t)}function Ur(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lg(t=De()){var e;return Ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mg(){return Yf()&&document.documentMode===10}function uu(t=De()){return Ur(t)||au(t)||lu(t)||cu(t)||/windows phone/i.test(t)||ou(t)}function $g(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e=[]){let n;switch(t){case"Browser":n=Ya(De());break;case"Worker":n=`${Ya(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${s}`}/**
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
 */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xa(this),this.idTokenSubscription=new Xa(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await fr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Re(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function bs(t){return Re(t)}class Xa{constructor(e){this.auth=e,this.observer=null,this.addObserver=np(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,n){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function Fg(t,e){return ws(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e){return Is(t,"POST","/v1/accounts:signInWithPassword",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",_s(t,e))}async function jg(t,e){return Is(t,"POST","/v1/accounts:signInWithEmailLink",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Do{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ns(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ns(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Vg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bg(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Fg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jg(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e){return Is(t,"POST","/v1/accounts:signInWithIdp",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="http://localhost";class Ht extends Do{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Eo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ht(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:qg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hg(t){const e=xn(Un(t)).link,n=e?xn(Un(e)).deep_link_id:null,s=xn(Un(t)).deep_link_id;return(s?xn(Un(s)).link:null)||s||n||e||t}class Ro{constructor(e){var n,s,r,i,o,a;const c=xn(Un(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=zg((r=c.mode)!==null&&r!==void 0?r:null);F(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Hg(e);try{return new Ro(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return ns._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ro.parseLink(n);return F(s,"argument-error"),ns._fromEmailAndCode(e,s.code,s.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends No{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Ts{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return it.credential(n,s)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Ts{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Ts{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _t.credential(n,s)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e){return Is(t,"POST","/v1/accounts:signUp",_s(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Ft._fromIdTokenResponse(e,s,r),o=Ja(s);return new Kt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ja(s);return new Kt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ja(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends We{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new pr(e,n,s,r)}}function du(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,s):i})}async function Gg(t,e,n=!1){const s=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await es(t,du(r,i,e,t),n);F(o.idToken,r,"internal-error");const a=Ao(o.idToken);F(a,r,"internal-error");const{sub:c}=a;return F(t.uid===c,r,"user-mismatch"),Kt._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t,e,n=!1){const s="signIn",r=await du(t,s,e),i=await Kt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Qg(t,e){return fu(bs(t),e)}async function Yg(t,e,n){const s=bs(t),r=await Kg(s,{returnSecureToken:!0,email:e,password:n}),i=await Kt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Xg(t,e,n){return Qg(Re(t),An.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){return Re(t).setPersistence(e)}function pu(t,e,n,s){return Re(t).onAuthStateChanged(e,n,s)}function Zg(t){return Re(t).signOut()}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(){const t=De();return Co(t)||Ur(t)}const tm=1e3,nm=10;class mu extends gu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=em()&&$g(),this.fallbackToPolling=uu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Mg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mu.type="LOCAL";const yu=mu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends gu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vu.type="SESSION";const _u=vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Fr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await sm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function im(t){Ze().location.href=t}/**
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
 */function wu(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function om(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function am(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cm(){return wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="firebaseLocalStorageDb",lm=1,mr="firebaseLocalStorage",bu="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function um(){const t=indexedDB.deleteDatabase(Iu);return new Es(t).toPromise()}function Qi(){const t=indexedDB.open(Iu,lm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(mr,{keyPath:bu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(mr)?e(s):(s.close(),await um(),e(await Qi()))})})}async function Za(t,e,n){const s=Vr(t,!0).put({[bu]:e,value:n});return new Es(s).toPromise()}async function hm(t,e){const n=Vr(t,!1).get(e),s=await new Es(n).toPromise();return s===void 0?null:s.value}function ec(t,e){const n=Vr(t,!0).delete(e);return new Es(n).toPromise()}const dm=800,fm=3;class Tu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(cm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await om(),!this.activeServiceWorker)return;this.sender=new rm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await Za(e,gr,"1"),await ec(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Za(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ec(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vr(r,!1).getAll();return new Es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tu.type="LOCAL";const pm=Tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",gm().appendChild(s)})}function ym(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new vs(3e4,6e4);/**
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
 */function Eu(t,e){return e?ct(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Do{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vm(t){return fu(t.auth,new Po(t),t.bypassAuthState)}function _m(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Wg(n,new Po(t),t.bypassAuthState)}async function wm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Gg(n,new Po(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vm;case"linkViaPopup":case"linkViaRedirect":return wm;case"reauthViaPopup":case"reauthViaRedirect":return _m;default:He(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new vs(2e3,1e4);async function bm(t,e,n){const s=bs(t);gg(t,e,No);const r=Eu(s,n);return new Lt(s,"signInViaPopup",e,r).executeNotNull()}class Lt extends ku{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Im.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="pendingRedirect",nr=new Map;class Em extends ku{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const s=await km(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function km(t,e){const n=Cm(e),s=Am(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Sm(t,e){nr.set(t._key(),e)}function Am(t){return ct(t._redirectPersistence)}function Cm(t){return tr(Tm,t.config.apiKey,t.name)}async function Dm(t,e,n=!1){const s=bs(t),r=Eu(s,e),o=await new Em(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*60*1e3;class Nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Om(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Su(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(tc(e))}saveEventToCache(e){this.cachedEventUids.add(tc(e)),this.lastProcessedEventTime=Date.now()}}function tc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Su({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Om(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Su(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mm=/^https?/;async function $m(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pm(t);for(const n of e)try{if(xm(n))return}catch{}He(t,"unauthorized-domain")}function xm(t){const e=Wi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Mm.test(n))return!1;if(Lm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Um=new vs(3e4,6e4);function nc(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fm(t){return new Promise((e,n)=>{var s,r,i;function o(){nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nc(),n(Je(t,"network-request-failed"))},timeout:Um.get()})}if(!((r=(s=Ze().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=ym("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sr=null,e})}let sr=null;function Vm(t){return sr=sr||Fm(t),sr}/**
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
 */const Bm=new vs(5e3,15e3),jm="__/auth/iframe",qm="emulator/auth/iframe",zm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Km(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?So(e,qm):`https://${t.config.authDomain}/${jm}`,s={apiKey:e.apiKey,appName:t.name,v:ys},r=Hm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ms(s).slice(1)}`}async function Gm(t){const e=await Vm(t),n=Ze().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Km(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},Bm.get());function c(){Ze().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Wm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qm=500,Ym=600,Xm="_blank",Jm="http://localhost";class sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zm(t,e,n,s=Qm,r=Ym){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wm),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=iu(l)?Xm:n),ru(l)&&(e=e||Jm,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Lg(l)&&a!=="_self")return ey(e||"",a),new sc(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new sc(h)}function ey(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ty="__/auth/handler",ny="emulator/auth/handler";function rc(t,e,n,s,r,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ys,eventId:r};if(e instanceof No){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ts){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${sy(t)}?${ms(a).slice(1)}`}function sy({config:t}){return t.emulator?So(t,ny):`https://${t.authDomain}/${ty}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="webStorageSupport";class ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Dm,this._overrideRedirectResult=Sm}async _openPopup(e,n,s,r){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rc(e,n,s,Wi(),r);return Zm(e,o,Oo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),im(rc(e,n,s,Wi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ht(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Gm(e),s=new Nm(e);return n.register("authEvent",r=>(F(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ci,{type:Ci},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ci];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$m(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uu()||Co()||Ur()}}const iy=ry;var ic="@firebase/auth",oc="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cy(t){st(new Ge("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hu(t)},u=new Ug(a,c,l);return yg(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),st(new Ge("auth-internal",e=>{const n=bs(e.getProvider("auth").getImmediate());return(s=>new oy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(ic,oc,ay(t)),qe(ic,oc,"esm2017")}/**
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
 */function ly(t=To()){const e=Zt(t,"auth");return e.isInitialized()?e.getImmediate():mg(t,{popupRedirectResolver:iy,persistence:[pm,yu,_u]})}cy("Browser");const Au="@firebase/installations",Lo="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=1e4,Du=`w:${Lo}`,Ru="FIS_v2",uy="https://firebaseinstallations.googleapis.com/v1",hy=60*60*1e3,dy="installations",fy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gt=new Jt(dy,fy,py);function Nu(t){return t instanceof We&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou({projectId:t}){return`${uy}/projects/${t}/installations`}function Pu(t){return{token:t.token,requestStatus:2,expiresIn:my(t.expiresIn),creationTime:Date.now()}}async function Lu(t,e){const s=(await e.json()).error;return Gt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Mu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gy(t,{refreshToken:e}){const n=Mu(t);return n.append("Authorization",yy(e)),n}async function $u(t){const e=await t();return e.status>=500&&e.status<600?t():e}function my(t){return Number(t.replace("s","000"))}function yy(t){return`${Ru} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Ou(t),r=Mu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Ru,appId:t.appId,sdkVersion:Du},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $u(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pu(l.authToken)}}else throw await Lu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^[cdef][\w-]{21}$/,Yi="";function Iy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=by(t);return wy.test(n)?n:Yi}catch{return Yi}}function by(t){return _y(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;function Fu(t,e){const n=Br(t);Vu(n,e),Ty(n,e)}function Vu(t,e){const n=Uu.get(t);if(!!n)for(const s of n)s(e)}function Ty(t,e){const n=Ey();n&&n.postMessage({key:t,fid:e}),ky()}let Mt=null;function Ey(){return!Mt&&"BroadcastChannel"in self&&(Mt=new BroadcastChannel("[Firebase] FID Change"),Mt.onmessage=t=>{Vu(t.data.key,t.data.fid)}),Mt}function ky(){Uu.size===0&&Mt&&(Mt.close(),Mt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebase-installations-database",Ay=1,Wt="firebase-installations-store";let Di=null;function Mo(){return Di||(Di=Kl(Sy,Ay,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wt)}}})),Di}async function yr(t,e){const n=Br(t),r=(await Mo()).transaction(Wt,"readwrite"),i=r.objectStore(Wt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Fu(t,e.fid),e}async function Bu(t){const e=Br(t),s=(await Mo()).transaction(Wt,"readwrite");await s.objectStore(Wt).delete(e),await s.done}async function jr(t,e){const n=Br(t),r=(await Mo()).transaction(Wt,"readwrite"),i=r.objectStore(Wt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Fu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){let e;const n=await jr(t.appConfig,s=>{const r=Cy(s),i=Dy(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Yi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Cy(t){const e=t||{fid:Iy(),registrationStatus:0};return ju(e)}function Dy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Gt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Ry(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ny(t)}:{installationEntry:e}}async function Ry(t,e){try{const n=await vy(t,e);return yr(t.appConfig,n)}catch(n){throw Nu(n)&&n.customData.serverCode===409?await Bu(t.appConfig):await yr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ny(t){let e=await ac(t.appConfig);for(;e.registrationStatus===1;)await xu(100),e=await ac(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $o(t);return s||n}return e}function ac(t){return jr(t,e=>{if(!e)throw Gt.create("installation-not-found");return ju(e)})}function ju(t){return Oy(t)?{fid:t.fid,registrationStatus:0}:t}function Oy(t){return t.registrationStatus===1&&t.registrationTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py({appConfig:t,heartbeatServiceProvider:e},n){const s=Ly(t,n),r=gy(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:Du,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await $u(()=>fetch(s,a));if(c.ok){const l=await c.json();return Pu(l)}else throw await Lu("Generate Auth Token",c)}function Ly(t,{fid:e}){return`${Ou(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e=!1){let n;const s=await jr(t.appConfig,i=>{if(!qu(i))throw Gt.create("not-registered");const o=i.authToken;if(!e&&xy(o))return i;if(o.requestStatus===1)return n=My(t,e),i;{if(!navigator.onLine)throw Gt.create("app-offline");const a=Fy(i);return n=$y(t,a),a}});return n?await n:s.authToken}async function My(t,e){let n=await cc(t.appConfig);for(;n.authToken.requestStatus===1;)await xu(100),n=await cc(t.appConfig);const s=n.authToken;return s.requestStatus===0?xo(t,e):s}function cc(t){return jr(t,e=>{if(!qu(e))throw Gt.create("not-registered");const n=e.authToken;return Vy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $y(t,e){try{const n=await Py(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await yr(t.appConfig,s),n}catch(n){if(Nu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bu(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yr(t.appConfig,s)}throw n}}function qu(t){return t!==void 0&&t.registrationStatus===2}function xy(t){return t.requestStatus===2&&!Uy(t)}function Uy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hy}function Fy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Vy(t){return t.requestStatus===1&&t.requestTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t){const e=t,{installationEntry:n,registrationPromise:s}=await $o(e);return s?s.catch(console.error):xo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy(t,e=!1){const n=t;return await qy(n),(await xo(n,e)).token}async function qy(t){const{registrationPromise:e}=await $o(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){if(!t||!t.options)throw Ri("App Configuration");if(!t.name)throw Ri("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ri(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ri(t){return Gt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="installations",Hy="installations-internal",Ky=t=>{const e=t.getProvider("app").getImmediate(),n=zy(e),s=Zt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Gy=t=>{const e=t.getProvider("app").getImmediate(),n=Zt(e,zu).getImmediate();return{getId:()=>By(n),getToken:r=>jy(n,r)}};function Wy(){st(new Ge(zu,Ky,"PUBLIC")),st(new Ge(Hy,Gy,"PRIVATE"))}Wy();qe(Au,Lo);qe(Au,Lo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="analytics",Qy="firebase_id",Yy="origin",Xy=60*1e3,Jy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new xr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Zy(t,e){const n=document.createElement("script");n.src=`${Hu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ev(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tv(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Ku(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){xe.error(a)}t("config",r,i)}async function nv(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ku(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){xe.error(i)}}function sv(t,e,n,s){async function r(i,o,a){try{i==="event"?await nv(t,e,n,o,a):i==="config"?await tv(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){xe.error(c)}}return r}function rv(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=sv(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function iv(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Hu))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ze=new Jt("analytics","Analytics",ov);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=30,cv=1e3;class lv{constructor(e={},n=cv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gu=new lv;function uv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hv(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:uv(s)},i=Jy.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dv(t,e=Gu,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw ze.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ze.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Xy),Wu({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Wu(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Gu){var i,o;const{appId:a,measurementId:c}=t;try{await fv(s,e)}catch(l){if(c)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await hv(t);return r.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!pv(u)){if(r.deleteThrottleMetadata(a),c)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ua(n,r.intervalMillis,av):Ua(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(a,d),xe.debug(`Calling attemptFetch again in ${h} millis`),Wu(t,d,s,r)}}function fv(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pv(t){if(!(t instanceof We)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mv(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(){var t;if(jl())try{await ql()}catch(e){return xe.warn(ze.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return xe.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vv(t,e,n,s,r,i,o){var a;const c=dv(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>xe.error(p)),e.push(c);const l=yv().then(p=>{if(p)return s.getId()}),[u,h]=await Promise.all([c,l]);iv()||Zy(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Yy]="firebase",d.update=!0,h!=null&&(d[Qy]=h),r("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.app=e}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},lc=[];const uc={};let Ni="dataLayer",wv="gtag",hc,Qu,dc=!1;function Iv(){const t=[];if(Bl()&&t.push("This is a browser extension environment."),Xf()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ze.create("invalid-analytics-context",{errorInfo:e});xe.warn(n.message)}}function bv(t,e,n){Iv();const s=t.options.appId;if(!s)throw ze.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(zn[s]!=null)throw ze.create("already-exists",{id:s});if(!dc){ev(Ni);const{wrappedGtag:i,gtagCore:o}=rv(zn,lc,uc,Ni,wv);Qu=i,hc=o,dc=!0}return zn[s]=vv(t,lc,uc,e,hc,Ni,n),new _v(t)}function Tv(t=To()){t=Re(t);const e=Zt(t,vr);return e.isInitialized()?e.getImmediate():Ev(t)}function Ev(t,e={}){const n=Zt(t,vr);if(n.isInitialized()){const r=n.getImmediate();if(Jn(e,n.getOptions()))return r;throw ze.create("already-initialized")}return n.initialize({options:e})}function kv(t,e,n,s){t=Re(t),mv(Qu,zn[t.app.options.appId],e,n,s).catch(r=>xe.error(r))}const fc="@firebase/analytics",pc="0.8.0";function Sv(){st(new Ge(vr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return bv(s,r,n)},"PUBLIC")),st(new Ge("analytics-internal",t,"PRIVATE")),qe(fc,pc),qe(fc,pc,"esm2017");function t(e){try{const n=e.getProvider(vr).getImmediate();return{logEvent:(s,r,i)=>kv(n,s,r,i)}}catch(n){throw ze.create("interop-component-reg-failed",{reason:n})}}}Sv();var Av="firebase",Cv="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(Av,Cv,"app");var Dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Uo=Uo||{},V=Dv||self;function _r(){}function qr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rv(t){return Object.prototype.hasOwnProperty.call(t,Oi)&&t[Oi]||(t[Oi]=++Nv)}var Oi="closure_uid_"+(1e9*Math.random()>>>0),Nv=0;function Ov(t,e,n){return t.call.apply(t.bind,arguments)}function Pv(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=Ov:Ae=Pv,Ae.apply(null,arguments)}function Hs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function At(){this.s=this.s,this.o=this.o}var Lv=0;At.prototype.s=!1;At.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lv!=0)&&Rv(this)};At.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function gc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ce(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Mv=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",_r,e),V.removeEventListener("test",_r,e)}catch{}return t}();function wr(t){return/^[\s\xa0]*$/.test(t)}var mc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pi(t,e){return t<e?-1:t>e?1:0}function zr(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function Ye(t){return zr().indexOf(t)!=-1}function Vo(t){return Vo[" "](t),t}Vo[" "]=_r;function $v(t){var e=Fv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xv=Ye("Opera"),yn=Ye("Trident")||Ye("MSIE"),Xu=Ye("Edge"),Xi=Xu||yn,Ju=Ye("Gecko")&&!(zr().toLowerCase().indexOf("webkit")!=-1&&!Ye("Edge"))&&!(Ye("Trident")||Ye("MSIE"))&&!Ye("Edge"),Uv=zr().toLowerCase().indexOf("webkit")!=-1&&!Ye("Edge");function Zu(){var t=V.document;return t?t.documentMode:void 0}var Ir;e:{var Li="",Mi=function(){var t=zr();if(Ju)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xu)return/Edge\/([\d\.]+)/.exec(t);if(yn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Uv)return/WebKit\/(\S+)/.exec(t);if(xv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mi&&(Li=Mi?Mi[1]:""),yn){var $i=Zu();if($i!=null&&$i>parseFloat(Li)){Ir=String($i);break e}}Ir=Li}var Fv={};function Vv(){return $v(function(){let t=0;const e=mc(String(Ir)).split("."),n=mc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Pi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Pi(r[2].length==0,i[2].length==0)||Pi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ji;if(V.document&&yn){var yc=Zu();Ji=yc||parseInt(Ir,10)||void 0}else Ji=void 0;var Bv=Ji;function ss(t,e){if(Ce.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ju){e:{try{Vo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ss.X.h.call(this)}}ke(ss,Ce);var jv={2:"touch",3:"pen",4:"mouse"};ss.prototype.h=function(){ss.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),qv=0;function zv(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++qv,this.ba=this.ea=!1}function Hr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Bo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function eh(t){const e={};for(const n in t)e[n]=t[n];return e}const vc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function th(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<vc.length;i++)n=vc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Kr(t){this.src=t,this.g={},this.h=0}Kr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=eo(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new zv(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Zi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Yu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Hr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eo(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),xi={};function nh(t,e,n,s,r){if(s&&s.once)return rh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)nh(t,e[i],n,s,r);return null}return n=Ho(n),t&&t[Ss]?t.N(e,n,ks(s)?!!s.capture:!!s,r):sh(t,e,n,!1,s,r)}function sh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ks(r)?!!r.capture:!!r,a=zo(t);if(a||(t[jo]=a=new Kr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Hv(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Mv||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(oh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hv(){function t(n){return e.call(t.src,t.listener,n)}const e=Kv;return t}function rh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rh(t,e[i],n,s,r);return null}return n=Ho(n),t&&t[Ss]?t.O(e,n,ks(s)?!!s.capture:!!s,r):sh(t,e,n,!0,s,r)}function ih(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ih(t,e[i],n,s,r);else s=ks(s)?!!s.capture:!!s,n=Ho(n),t&&t[Ss]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=eo(i,n,s,r),-1<n&&(Hr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eo(e,n,s,r)),(n=-1<t?e[t]:null)&&qo(n))}function qo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ss])Zi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(oh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zo(e))?(Zi(n,t),n.h==0&&(n.src=null,e[jo]=null)):Hr(t)}}}function oh(t){return t in xi?xi[t]:xi[t]="on"+t}function Kv(t,e){if(t.ba)t=!0;else{e=new ss(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qo(t),t=n.call(s,e)}return t}function zo(t){return t=t[jo],t instanceof Kr?t:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(t){return typeof t=="function"?t:(t[Ui]||(t[Ui]=function(e){return t.handleEvent(e)}),t[Ui])}function we(){At.call(this),this.i=new Kr(this),this.P=this,this.I=null}ke(we,At);we.prototype[Ss]=!0;we.prototype.removeEventListener=function(t,e,n,s){ih(this,t,e,n,s)};function Te(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ce(e,t);else if(e instanceof Ce)e.target=e.target||t;else{var r=e;e=new Ce(s,t),th(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ks(o,s,!0,e)&&r}if(o=e.g=t,r=Ks(o,s,!0,e)&&r,r=Ks(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ks(o,s,!1,e)&&r}we.prototype.M=function(){if(we.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hr(n[s]);delete t.g[e],t.h--}}this.I=null};we.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};we.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ks(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Zi(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ko=V.JSON.stringify;function Gv(){var t=lh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Wv{constructor(){this.h=this.g=null}add(e,n){const s=ah.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ah=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qv,t=>t.reset());class Qv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yv(t){V.setTimeout(()=>{throw t},0)}function ch(t,e){to||Xv(),no||(to(),no=!0),lh.add(t,e)}var to;function Xv(){var t=V.Promise.resolve(void 0);to=function(){t.then(Jv)}}var no=!1,lh=new Wv;function Jv(){for(var t;t=Gv();){try{t.h.call(t.g)}catch(n){Yv(n)}var e=ah;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}no=!1}function Gr(t,e){we.call(this),this.h=t||1,this.g=e||V,this.j=Ae(this.kb,this),this.l=Date.now()}ke(Gr,we);O=Gr.prototype;O.ca=!1;O.R=null;O.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Te(this,"tick"),this.ca&&(Go(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Go(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}O.M=function(){Gr.X.M.call(this),Go(this),delete this.g};function Wo(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function uh(t){t.g=Wo(()=>{t.g=null,t.i&&(t.i=!1,uh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zv extends At{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uh(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(t){At.call(this),this.h=t,this.g={}}ke(rs,At);var _c=[];function hh(t,e,n,s){Array.isArray(n)||(n&&(_c[0]=n.toString()),n=_c);for(var r=0;r<n.length;r++){var i=nh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dh(t){Bo(t.g,function(e,n){this.g.hasOwnProperty(n)&&qo(e)},t),t.g={}}rs.prototype.M=function(){rs.X.M.call(this),dh(this)};rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wr(){this.g=!0}Wr.prototype.Aa=function(){this.g=!1};function e_(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function t_(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ln(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+s_(t,n)+(s?" "+s:"")})}function n_(t,e){t.info(function(){return"TIMEOUT: "+e})}Wr.prototype.info=function(){};function s_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ko(n)}catch{return e}}var en={},wc=null;function Qr(){return wc=wc||new we}en.Oa="serverreachability";function fh(t){Ce.call(this,en.Oa,t)}ke(fh,Ce);function is(t){const e=Qr();Te(e,new fh(e))}en.STAT_EVENT="statevent";function ph(t,e){Ce.call(this,en.STAT_EVENT,t),this.stat=e}ke(ph,Ce);function Oe(t){const e=Qr();Te(e,new ph(e,t))}en.Pa="timingevent";function gh(t,e){Ce.call(this,en.Pa,t),this.size=e}ke(gh,Ce);function As(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Yr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},mh={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qo(){}Qo.prototype.h=null;function Ic(t){return t.h||(t.h=t.i())}function yh(){}var Cs={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Yo(){Ce.call(this,"d")}ke(Yo,Ce);function Xo(){Ce.call(this,"c")}ke(Xo,Ce);var so;function Xr(){}ke(Xr,Qo);Xr.prototype.g=function(){return new XMLHttpRequest};Xr.prototype.i=function(){return{}};so=new Xr;function Ds(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new rs(this),this.O=r_,t=Xi?125:void 0,this.T=new Gr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vh}function vh(){this.i=null,this.g="",this.h=!1}var r_=45e3,ro={},br={};O=Ds.prototype;O.setTimeout=function(t){this.O=t};function io(t,e,n){t.K=1,t.v=Zr(dt(e)),t.s=n,t.P=!0,_h(t,null)}function _h(t,e){t.F=Date.now(),Rs(t),t.A=dt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ah(n.i,"t",s),t.C=0,n=t.l.H,t.h=new vh,t.g=Wh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Zv(Ae(t.Ka,t,t.g),t.N)),hh(t.S,t.g,"readystatechange",t.hb),e=t.H?eh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),is(),e_(t.j,t.u,t.A,t.m,t.U,t.s)}O.hb=function(t){t=t.target;const e=this.L;e&&lt(t)==3?e.l():this.Ka(t)};O.Ka=function(t){try{if(t==this.g)e:{const u=lt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Xi||this.g&&(this.h.h||this.g.fa()||kc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?is(3):is(2)),Jr(this);var n=this.g.aa();this.Y=n;t:if(wh(this)){var s=kc(this.g);t="";var r=s.length,i=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Hn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,t_(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wr(a)){var l=a;break t}}l=null}if(n=l)ln(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oo(this,n);else{this.i=!1,this.o=3,Oe(12),$t(this),Hn(this);break e}}this.P?(Ih(this,u,o),Xi&&this.i&&u==3&&(hh(this.S,this.T,"tick",this.gb),this.T.start())):(ln(this.j,this.m,o,null),oo(this,o)),u==4&&$t(this),this.i&&!this.I&&(u==4?zh(this.l,this):(this.i=!1,Rs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),$t(this),Hn(this)}}}catch{}finally{}};function wh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ih(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=i_(t,n),r==br){e==4&&(t.o=4,Oe(14),s=!1),ln(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ro){t.o=4,Oe(15),ln(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ln(t.j,t.m,r,null),oo(t,r);wh(t)&&r!=br&&r!=ro&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Oe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ra(e),e.K=!0,Oe(11))):(ln(t.j,t.m,n,"[Invalid Chunked Response]"),$t(t),Hn(t))}O.gb=function(){if(this.g){var t=lt(this.g),e=this.g.fa();this.C<e.length&&(Jr(this),Ih(this,t,e),this.i&&t!=4&&Rs(this))}};function i_(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?br:(n=Number(e.substring(n,s)),isNaN(n)?ro:(s+=1,s+n>e.length?br:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,$t(this)};function Rs(t){t.V=Date.now()+t.O,bh(t,t.O)}function bh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=As(Ae(t.fb,t),e)}function Jr(t){t.B&&(V.clearTimeout(t.B),t.B=null)}O.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(n_(this.j,this.A),this.K!=2&&(is(),Oe(17)),$t(this),this.o=2,Hn(this)):bh(this,this.V-t)};function Hn(t){t.l.G==0||t.I||zh(t.l,t)}function $t(t){Jr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Go(t.T),dh(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function oo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ao(n.h,t))){if(!t.J&&ao(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)kr(n),ni(n);else break e;sa(n),Oe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=As(Ae(n.bb,n),6e3));if(1>=Rh(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xt(n,11)}else if((t.J||n.g==t)&&kr(n),!wr(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jo(i,i.h),i.h=null))}if(s.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ae(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gh(s,s.H?s.ka:null,s.V),o.J){Nh(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Jr(a),Rs(a)),s.g=o}else jh(s);0<n.i.length&&si(n)}else l[0]!="stop"&&l[0]!="close"||xt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xt(n,7):na(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}is(4)}catch{}}function o_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function a_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Th(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=a_(t),s=o_(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Vt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vt){this.h=e!==void 0?e:t.h,Tr(this,t.j),this.s=t.s,this.g=t.g,Er(this,t.m),this.l=t.l,e=t.i;var n=new os;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bc(this,n),this.o=t.o}else t&&(n=String(t).match(Eh))?(this.h=!!e,Tr(this,n[1]||"",!0),this.s=Fn(n[2]||""),this.g=Fn(n[3]||"",!0),Er(this,n[4]),this.l=Fn(n[5]||"",!0),bc(this,n[6]||"",!0),this.o=Fn(n[7]||"")):(this.h=!!e,this.i=new os(null,this.h))}Vt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vn(e,Tc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vn(e,Tc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vn(n,n.charAt(0)=="/"?h_:u_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vn(n,f_)),t.join("")};function dt(t){return new Vt(t)}function Tr(t,e,n){t.j=n?Fn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Er(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bc(t,e,n){e instanceof os?(t.i=e,p_(t.i,t.h)):(n||(e=Vn(e,d_)),t.i=new os(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Zr(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,l_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function l_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tc=/[#\/\?@]/g,u_=/[#\?:]/g,h_=/[#\?]/g,d_=/[#\?@]/g,f_=/#/g;function os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ct(t){t.g||(t.g=new Map,t.h=0,t.i&&c_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=os.prototype;O.add=function(t,e){Ct(this),this.i=null,t=Cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kh(t,e){Ct(t),e=Cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sh(t,e){return Ct(t),e=Cn(t,e),t.g.has(e)}O.forEach=function(t,e){Ct(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};O.oa=function(){Ct(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};O.W=function(t){Ct(this);let e=[];if(typeof t=="string")Sh(this,t)&&(e=e.concat(this.g.get(Cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Ct(this),this.i=null,t=Cn(this,t),Sh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ah(t,e,n){kh(t,e),0<n.length&&(t.i=null,t.g.set(Cn(t,e),Fo(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function p_(t,e){e&&!t.j&&(Ct(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(kh(this,s),Ah(this,r,n))},t)),t.j=e}var g_=class{constructor(t,e){this.h=t,this.g=e}};function Ch(t){this.l=t||m_,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var m_=10;function Dh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rh(t){return t.h?1:t.g?t.g.size:0}function ao(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jo(t,e){t.g?t.g.add(e):t.h=e}function Nh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ch.prototype.cancel=function(){if(this.i=Oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Oh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fo(t.i)}function Zo(){}Zo.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Zo.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function y_(){this.g=new Zo}function v_(t,e,n){const s=n||"";try{Th(t,function(r,i){let o=r;ks(r)&&(o=Ko(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function __(t,e){const n=new Wr;if(V.Image){const s=new Image;s.onload=Hs(Gs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hs(Gs,n,s,"TestLoadImage: error",!1,e),s.onabort=Hs(Gs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hs(Gs,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Gs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ns(t){this.l=t.$b||null,this.j=t.ib||!1}ke(Ns,Qo);Ns.prototype.g=function(){return new ei(this.l,this.j)};Ns.prototype.i=function(t){return function(){return t}}({});function ei(t,e){we.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(ei,we);var ea=0;O=ei.prototype;O.open=function(t,e){if(this.readyState!=ea)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,as(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=ea};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ph(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Ph(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Os(this):as(this),this.readyState==3&&Ph(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,Os(this))};O.Ta=function(t){this.g&&(this.response=t,Os(this))};O.ga=function(){this.g&&Os(this)};function Os(t){t.readyState=4,t.l=null,t.j=null,t.A=null,as(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function as(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var w_=V.JSON.parse;function de(t){we.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lh,this.K=this.L=!1}ke(de,we);var Lh="",I_=/^https?$/i,b_=["POST","PUT"];O=de.prototype;O.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():so.g(),this.C=this.u?Ic(this.u):Ic(so),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ec(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=V.FormData&&t instanceof V.FormData,!(0<=Yu(b_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xh(this),0<this.B&&((this.K=T_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Wo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ec(this,i)}};function T_(t){return yn&&Vv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.qa=function(){typeof Uo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function Ec(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mh(t),ti(t)}function Mh(t){t.D||(t.D=!0,Te(t,"complete"),Te(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Te(this,"complete"),Te(this,"abort"),ti(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ti(this,!0)),de.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?$h(this):this.eb())};O.eb=function(){$h(this)};function $h(t){if(t.h&&typeof Uo<"u"&&(!t.C[1]||lt(t)!=4||t.aa()!=2)){if(t.v&&lt(t)==4)Wo(t.Ha,0,t);else if(Te(t,"readystatechange"),lt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Eh)[1]||null;if(!r&&V.self&&V.self.location){var i=V.self.location.protocol;r=i.substr(0,i.length-1)}s=!I_.test(r?r.toLowerCase():"")}n=s}if(n)Te(t,"complete"),Te(t,"success");else{t.m=6;try{var o=2<lt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Mh(t)}}finally{ti(t)}}}}function ti(t,e){if(t.g){xh(t);const n=t.g,s=t.C[0]?_r:null;t.g=null,t.C=null,e||Te(t,"ready");try{n.onreadystatechange=s}catch{}}}function xh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function lt(t){return t.g?t.g.readyState:0}O.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),w_(e)}};function kc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uh(t){let e="";return Bo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ta(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Uh(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Ln(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fh(t){this.Ca=0,this.i=[],this.j=new Wr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Ln("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Ln("baseRetryDelayMs",5e3,t),this.ab=Ln("retryDelaySeedMs",1e4,t),this.Za=Ln("forwardChannelMaxRetries",2,t),this.ta=Ln("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ch(t&&t.concurrentRequestLimit),this.Fa=new y_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=Fh.prototype;O.ma=8;O.G=1;function na(t){if(Vh(t),t.G==3){var e=t.U++,n=dt(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ps(t,n),e=new Ds(t,t.j,e,void 0),e.K=2,e.v=Zr(dt(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Rs(e)}Kh(t)}function ni(t){t.g&&(ra(t),t.g.cancel(),t.g=null)}function Vh(t){ni(t),t.u&&(V.clearTimeout(t.u),t.u=null),kr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function si(t){Dh(t.h)||t.m||(t.m=!0,ch(t.Ja,t),t.C=0)}function E_(t,e){return Rh(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=As(Ae(t.Ja,t,e),Hh(t,t.C)),t.C++,!0)}O.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ds(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=eh(i),th(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bh(this,r,e),n=dt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Ps(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Uh(i)))+"&"+e:this.o&&ta(n,this.o,i)),Jo(this.h,r),this.Xa&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,io(r,n,null)):io(r,n,e),this.G=2}}else this.G==3&&(t?Sc(this,t):this.i.length==0||Dh(this.h)||Sc(this))};function Sc(t,e){var n;e?n=e.m:n=t.U++;const s=dt(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),Ps(t,s),t.o&&t.s&&ta(s,t.o,t.s),n=new Ds(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Bh(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jo(t.h,n),io(n,s,e)}function Ps(t,e){t.ia&&Bo(t.ia,function(n,s){ae(e,s,n)}),t.l&&Th({},function(n,s){ae(e,s,n)})}function Bh(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ae(t.l.Qa,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{v_(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jh(t){t.g||t.u||(t.Z=1,ch(t.Ia,t),t.A=0)}function sa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=As(Ae(t.Ia,t),Hh(t,t.A)),t.A++,!0)}O.Ia=function(){if(this.u=null,qh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=As(Ae(this.cb,this),t)}};O.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Oe(10),ni(this),qh(this))};function ra(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function qh(t){t.g=new Ds(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=dt(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Ps(t,e),t.o&&t.s&&ta(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zr(dt(e)),n.s=null,n.P=!0,_h(n,t)}O.bb=function(){this.v!=null&&(this.v=null,ni(this),sa(this),Oe(19))};function kr(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function zh(t,e){var n=null;if(t.g==e){kr(t),ra(t),t.g=null;var s=2}else if(ao(t.h,e))n=e.D,Nh(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Qr(),Te(s,new gh(s,n)),si(t)}else jh(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&E_(t,e)||s==2&&sa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:xt(t,5);break;case 4:xt(t,10);break;case 3:xt(t,6);break;default:xt(t,2)}}}function Hh(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function xt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ae(t.jb,t);n||(n=new Vt("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Tr(n,"https"),Zr(n)),__(n.toString(),s)}else Oe(2);t.G=0,t.l&&t.l.va(e),Kh(t),Vh(t)}O.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Kh(t){if(t.G=0,t.la=[],t.l){const e=Oh(t.h);(e.length!=0||t.i.length!=0)&&(gc(t.la,e),gc(t.la,t.i),t.h.i.length=0,Fo(t.i),t.i.length=0),t.l.ua()}}function Gh(t,e,n){var s=n instanceof Vt?dt(n):new Vt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Er(s,s.m);else{var r=V.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Vt(null,void 0);s&&Tr(i,s),e&&(i.g=e),r&&Er(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),Ps(t,s),s}function Wh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new Ns({ib:!0})):new de(t.ra),e.L=t.H,e}function Qh(){}O=Qh.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Qa=function(){};function Sr(){if(yn&&!(10<=Number(Bv)))throw Error("Environmental error: no available transport.")}Sr.prototype.g=function(t,e){return new Fe(t,e)};function Fe(t,e){we.call(this),this.g=new Fh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!wr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dn(this)}ke(Fe,we);Fe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Oe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gh(t,null,t.V),si(t)};Fe.prototype.close=function(){na(this.g)};Fe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ko(t),t=n);e.i.push(new g_(e.$a++,t)),e.G==3&&si(e)};Fe.prototype.M=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,Fe.X.M.call(this)};function Yh(t){Yo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(Yh,Yo);function Xh(){Xo.call(this),this.status=1}ke(Xh,Xo);function Dn(t){this.g=t}ke(Dn,Qh);Dn.prototype.xa=function(){Te(this.g,"a")};Dn.prototype.wa=function(t){Te(this.g,new Yh(t))};Dn.prototype.va=function(t){Te(this.g,new Xh)};Dn.prototype.ua=function(){Te(this.g,"b")};Sr.prototype.createWebChannel=Sr.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;Yr.NO_ERROR=0;Yr.TIMEOUT=8;Yr.HTTP_ERROR=6;mh.COMPLETE="complete";yh.EventType=Cs;Cs.OPEN="a";Cs.CLOSE="b";Cs.ERROR="c";Cs.MESSAGE="d";we.prototype.listen=we.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Na;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Ra;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;var k_=function(){return new Sr},S_=function(){return Qr()},Fi=Yr,A_=mh,C_=en,Ac={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},D_=Ns,Ws=yh,R_=de;const Cc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new xr("@firebase/firestore");function Dc(){return Qt.logLevel}function L(t,...e){if(Qt.logLevel<=ne.DEBUG){const n=e.map(ia);Qt.debug(`Firestore (${Rn}): ${t}`,...n)}}function ft(t,...e){if(Qt.logLevel<=ne.ERROR){const n=e.map(ia);Qt.error(`Firestore (${Rn}): ${t}`,...n)}}function Rc(t,...e){if(Qt.logLevel<=ne.WARN){const n=e.map(ia);Qt.warn(`Firestore (${Rn}): ${t}`,...n)}}function ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: `+t;throw ft(e),new Error(e)}function ie(t,e){t||H()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends We{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class P_{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ie(typeof s.accessToken=="string"),new N_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Pe(e)}}class L_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class M_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new L_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.A=n.token,new $_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=U_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function vn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new me(0,0))}static max(){return new W(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends cs{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const F_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends cs{construct(e,n,s){return new Se(e,n,s)}static isValidIdentifier(e){return F_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ce.fromString(e))}static fromName(e){return new M(ce.fromString(e).popFirst(5))}static empty(){return new M(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ce(e.slice()))}}function V_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new me(n+1,0):new me(n,s));return new Tt(r,M.empty(),e)}function B_(t){return new Tt(t.readTime,t.key,-1)}class Tt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(W.min(),M.empty(),-1)}static max(){return new Tt(W.max(),M.empty(),-1)}}function j_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==q_)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,s)=>{n(e)})}static reject(e){return new v((n,s)=>{s(e)})}static waitFor(e){return new v((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=v.resolve(!1);for(const s of e)n=n.next(r=>r?v.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new v((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new v((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oa.at=-1;class ve{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qs(this.root,e,this.comparator,!0)}}class Qs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ie.RED,this.left=r!=null?r:Ie.EMPTY,this.right=i!=null?i:Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ie(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ie.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Oc(this.data.getIterator())}getIteratorFrom(e){return new Oc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Oc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new et([])}unionWith(e){let n=new ye(Se.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ee(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ee(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const H_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(t){if(ie(!!t),typeof t=="string"){let e=0;const n=H_.exec(t);if(ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _n(t){return typeof t=="string"?Ee.fromBase64String(t):Ee.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function td(t){const e=t.mapValue.fields.__previous_value__;return ed(e)?td(e):e}function ls(t){const e=Et(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class us{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}function ri(t){return t==null}function Ar(t){return t===0&&1/t==-1/0}function G_(t){return typeof t=="number"&&Number.isInteger(t)&&!Ar(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ed(t)?4:W_(t)?9007199254740991:10:H()}function rt(t,e){if(t===e)return!0;const n=Yt(t);if(n!==Yt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Et(s.timestampValue),o=Et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return _n(s.bytesValue).isEqual(_n(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return he(s.geoPointValue.latitude)===he(r.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return he(s.integerValue)===he(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=he(s.doubleValue),o=he(r.doubleValue);return i===o?Ar(i)===Ar(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return vn(t.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Nc(i)!==Nc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rt(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function hs(t,e){return(t.values||[]).find(n=>rt(n,e))!==void 0}function wn(t,e){if(t===e)return 0;const n=Yt(t),s=Yt(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=he(r.integerValue||r.doubleValue),a=he(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pc(t.timestampValue,e.timestampValue);case 4:return Pc(ls(t),ls(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=_n(r),a=_n(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=se(o[c],a[c]);if(l!==0)return l}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(he(r.latitude),he(i.latitude));return o!==0?o:se(he(r.longitude),he(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=wn(o[c],a[c]);if(l)return l}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ys.mapValue&&i===Ys.mapValue)return 0;if(r===Ys.mapValue)return 1;if(i===Ys.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=se(a[u],l[u]);if(h!==0)return h;const d=wn(o[a[u]],c[l[u]]);if(d!==0)return d}return se(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function Pc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Et(t),s=Et(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function fn(t){return co(t)}function co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Et(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_n(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=co(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${co(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function lo(t){return!!t&&"integerValue"in t}function aa(t){return!!t&&"arrayValue"in t}function Lc(t){return!!t&&"nullValue"in t}function Mc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rr(t){return!!t&&"mapValue"in t}function Kn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Kn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function W_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!rr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kn(n)}setAll(e){let n=Se.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Kn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];rr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Nn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Be(Kn(this.value))}}function nd(t){const e=[];return Nn(t.fields,(n,s)=>{const r=new Se([n]);if(rr(s)){const i=nd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new be(e,0,W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,n,s){return new be(e,1,n,W.min(),s,0)}static newNoDocument(e,n){return new be(e,2,n,W.min(),Be.empty(),0)}static newUnknownDocument(e,n){return new be(e,3,n,W.min(),Be.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function $c(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Q_(t,e,n,s,r,i,o)}function ca(t){const e=G(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+fn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ri(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fn(s)).join(",")),e.ht=n}return e.ht}function Y_(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${fn(s.value)}`;var s}).join(", ")}]`),ri(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fn(n)).join(",")),`Target(${e})`}function la(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!rw(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!rt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uc(t.startAt,e.startAt)&&Uc(t.endAt,e.endAt)}function uo(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Le extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new X_(e,n,s):n==="array-contains"?new ew(e,s):n==="in"?new tw(e,s):n==="not-in"?new nw(e,s):n==="array-contains-any"?new sw(e,s):new Le(e,n,s)}static lt(e,n,s){return n==="in"?new J_(e,s):new Z_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(wn(n,this.value)):n!==null&&Yt(this.value)===Yt(n)&&this.ft(wn(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class X_ extends Le{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.ft(n)}}class J_ extends Le{constructor(e,n){super(e,"in",n),this.keys=sd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z_ extends Le{constructor(e,n){super(e,"not-in",n),this.keys=sd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class ew extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return aa(n)&&hs(n.arrayValue,this.value)}}class tw extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class nw extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hs(this.value.arrayValue,n)}}class sw extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!aa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>hs(this.value.arrayValue,s))}}class Cr{constructor(e,n){this.position=e,this.inclusive=n}}class Gn{constructor(e,n="asc"){this.field=e,this.dir=n}}function rw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function xc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=wn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Uc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function iw(t,e,n,s,r,i,o,a){return new ii(t,e,n,s,r,i,o,a)}function ua(t){return new ii(t)}function Fc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ow(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function aw(t){for(const e of t.filters)if(e.dt())return e.field;return null}function cw(t){return t.collectionGroup!==null}function ds(t){const e=G(t);if(e._t===null){e._t=[];const n=aw(e),s=ow(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Gn(n)),e._t.push(new Gn(Se.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Gn(Se.keyField(),i))}}}return e._t}function pt(t){const e=G(t);if(!e.wt)if(e.limitType==="F")e.wt=$c(e.path,e.collectionGroup,ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ds(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gn(i.field,o))}const s=e.endAt?new Cr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Cr(e.startAt.position,e.startAt.inclusive):null;e.wt=$c(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function ho(t,e,n){return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oi(t,e){return la(pt(t),pt(e))&&t.limitType===e.limitType}function rd(t){return`${ca(pt(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${Y_(pt(t))}; limitType=${t.limitType})`}function ha(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ds(n),s)||n.endAt&&!function(r,i,o){const a=xc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ds(n),s))}(t,e)}function lw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function id(t){return(e,n)=>{let s=!1;for(const r of ds(t)){const i=uw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function uw(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?wn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(e)?"-0":e}}function ad(t){return{integerValue:""+t}}function hw(t,e){return G_(e)?ad(e):od(t,e)}/**
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
 */class ai{constructor(){this._=void 0}}function dw(t,e,n){return t instanceof Dr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof fs?ld(t,e):t instanceof ps?ud(t,e):function(s,r){const i=cd(s,r),o=Vc(i)+Vc(s.yt);return lo(i)&&lo(s.yt)?ad(o):od(s.It,o)}(t,e)}function fw(t,e,n){return t instanceof fs?ld(t,e):t instanceof ps?ud(t,e):n}function cd(t,e){return t instanceof Rr?lo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Dr extends ai{}class fs extends ai{constructor(e){super(),this.elements=e}}function ld(t,e){const n=hd(e);for(const s of t.elements)n.some(r=>rt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ps extends ai{constructor(e){super(),this.elements=e}}function ud(t,e){let n=hd(e);for(const s of t.elements)n=n.filter(r=>!rt(r,s));return{arrayValue:{values:n}}}class Rr extends ai{constructor(e,n){super(),this.It=e,this.yt=n}}function Vc(t){return he(t.integerValue||t.doubleValue)}function hd(t){return aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof fs&&s instanceof fs||n instanceof ps&&s instanceof ps?vn(n.elements,s.elements,rt):n instanceof Rr&&s instanceof Rr?rt(n.yt,s.yt):n instanceof Dr&&s instanceof Dr}(t.transform,e.transform)}class gw{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ir(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ci{}function dd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new da(t.key,tt.none()):new $s(t.key,t.data,tt.none());{const n=t.data,s=Be.empty();let r=new ye(Se.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new tn(t.key,s,new et(r.toArray()),tt.none())}}function mw(t,e,n){t instanceof $s?function(s,r,i){const o=s.value.clone(),a=jc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof tn?function(s,r,i){if(!ir(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=jc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Wn(t,e,n,s){return t instanceof $s?function(r,i,o,a){if(!ir(r.precondition,i))return o;const c=r.value.clone(),l=qc(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof tn?function(r,i,o,a){if(!ir(r.precondition,i))return o;const c=qc(r.fieldTransforms,a,i),l=i.data;return l.setAll(fd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ir(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function yw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cd(s.transform,r||null);i!=null&&(n===null&&(n=Be.empty()),n.set(s.field,i))}return n||null}function Bc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vn(n,s,(r,i)=>pw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $s extends ci{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tn extends ci{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function jc(t,e,n){const s=new Map;ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,fw(o,a,n[r]))}return s}function qc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,dw(i,o,e))}return s}class da extends ci{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vw extends ci{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,X;function ww(t){switch(t){default:return H();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function pd(t){if(t===void 0)return ft("GRPC error has no .code"),b.UNKNOWN;switch(t){case ue.OK:return b.OK;case ue.CANCELLED:return b.CANCELLED;case ue.UNKNOWN:return b.UNKNOWN;case ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ue.INTERNAL:return b.INTERNAL;case ue.UNAVAILABLE:return b.UNAVAILABLE;case ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ue.NOT_FOUND:return b.NOT_FOUND;case ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ue.ABORTED:return b.ABORTED;case ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ue.DATA_LOSS:return b.DATA_LOSS;default:return H()}}(X=ue||(ue={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Zh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=new ve(M.comparator);function gt(){return Iw}const gd=new ve(M.comparator);function Bn(...t){let e=gd;for(const n of t)e=e.insert(n.key,n);return e}function md(t){let e=gd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ut(){return Qn()}function yd(){return Qn()}function Qn(){return new On(t=>t.toString(),(t,e)=>t.isEqual(e))}const bw=new ve(M.comparator),Tw=new ye(M.comparator);function Q(...t){let e=Tw;for(const n of t)e=e.add(n);return e}const Ew=new ye(se);function vd(){return Ew}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,n)),new li(W.min(),s,vd(),gt(),Q())}}class xs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xs(Ee.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class _d{constructor(e,n){this.targetId=e,this.At=n}}class wd{constructor(e,n,s=Ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class zc{constructor(){this.Rt=0,this.bt=Kc(),this.Pt=Ee.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Q(),n=Q(),s=Q();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new xs(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Kc()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class kw{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=gt(),this.qt=Hc(),this.Kt=new ye(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(uo(i))if(s===0){const o=new M(i.path);this.jt(n,o,be.newNoDocument(o,W.min()))}else ie(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&uo(a.target)){const c=new M(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,be.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=Q();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new li(e,n,this.Kt,this.Ut,s);return this.Ut=gt(),this.qt=Hc(),this.Kt=new ye(se),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new zc,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ye(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new zc),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Hc(){return new ve(M.comparator)}function Kc(){return new ve(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Aw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Cw{constructor(e,n){this.databaseId=e,this.gt=n}}function Nr(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Id(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Dw(t,e){return Nr(t,e.toTimestamp())}function ut(t){return ie(!!t),W.fromTimestamp(function(e){const n=Et(e);return new me(n.seconds,n.nanos)}(t))}function fa(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bd(t){const e=ce.fromString(t);return ie(kd(e)),e}function po(t,e){return fa(t.databaseId,e.path)}function Vi(t,e){const n=bd(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Td(n))}function go(t,e){return fa(t.databaseId,e)}function Rw(t){const e=bd(t);return e.length===4?ce.emptyPath():Td(e)}function mo(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Td(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gc(t,e,n){return{name:po(t,e),fields:n.value.mapValue.fields}}function Nw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(ie(l===void 0||typeof l=="string"),Ee.fromBase64String(l||"")):(ie(l===void 0||l instanceof Uint8Array),Ee.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?b.UNKNOWN:pd(c.code);return new $(l,c.message||"")}(o);n=new wd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vi(t,s.document.name),i=ut(s.document.updateTime),o=new Be({mapValue:{fields:s.document.fields}}),a=be.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new or(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Vi(t,s.document),i=s.readTime?ut(s.readTime):W.min(),o=be.newNoDocument(r,i),a=s.removedTargetIds||[];n=new or([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Vi(t,s.document),i=s.removedTargetIds||[];n=new or([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new _w(r),o=s.targetId;n=new _d(o,i)}}return n}function Ow(t,e){let n;if(e instanceof $s)n={update:Gc(t,e.key,e.value)};else if(e instanceof da)n={delete:po(t,e.key)};else if(e instanceof tn)n={update:Gc(t,e.key,e.data),updateMask:jw(e.fieldMask)};else{if(!(e instanceof vw))return H();n={verify:po(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Dr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ps)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rr)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Dw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function Pw(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ut(s.updateTime):ut(r);return i.isEqual(W.min())&&(i=ut(r)),new gw(i,s.transformResults||[])}(n,e))):[]}function Lw(t,e){return{documents:[go(t,e.path)]}}function Mw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=go(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=go(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Mc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NAN"}};if(Lc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Mc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NOT_NAN"}};if(Lc(h.value))return{unaryFilter:{field:on(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(h.field),op:Fw(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:on(u.field),direction:Uw(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ri(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $w(t){let e=Rw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ed(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Gn(un(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ri(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Cr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Cr(d,h)}(n.endAt)),iw(e,r,o,i,a,"F",c,l)}function xw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ed(t){return t?t.unaryFilter!==void 0?[Bw(t)]:t.fieldFilter!==void 0?[Vw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ed(e)).reduce((e,n)=>e.concat(n)):H():[]}function Uw(t){return Sw[t]}function Fw(t){return Aw[t]}function on(t){return{fieldPath:t.canonicalString()}}function un(t){return Se.fromServerFormat(t.fieldPath)}function Vw(t){return Le.create(un(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}function Bw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=un(t.unaryFilter.field);return Le.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=un(t.unaryFilter.field);return Le.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=un(t.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=un(t.unaryFilter.field);return Le.create(r,"!=",{nullValue:"NULL_VALUE"});default:return H()}}function jw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=yd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&vn(this.mutations,e.mutations,(n,s)=>Bc(n,s))&&vn(this.baseMutations,e.baseMutations,(n,s)=>Bc(n,s))}}class pa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ie(e.mutations.length===s.length);let r=bw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new pa(e,n,s,r)}}/**
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
 */class zw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jt{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.re=e}}function Kw(t){const e=$w({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ho(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.Ye=new Ww}addToCollectionParentIndex(e,n){return this.Ye.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Tt.min())}updateCollectionGroup(e,n,s){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Ww{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ye(ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ye(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new In(0)}static vn(){return new In(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.changes=new On(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?v.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Wn(s.mutation,r,et.empty(),me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Q()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Q()){const r=Ut();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Bn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ut();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Q()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=gt();const o=Qn(),a=Qn();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof tn)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Wn(u.mutation,l,u.mutation.getFieldMask(),me.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Yw(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Qn();let r=new ve((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||et.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||Q()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=yd();u.forEach(d=>{if(!i.has(d)){const p=dd(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):v.resolve(Ut());let a=-1,c=i;return o.next(l=>v.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?v.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Q())).next(u=>({batchId:a,changes:md(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=Bn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Bn();return this.indexManager.getCollectionParents(e,r).next(o=>v.forEach(o,a=>{const c=function(l,u){return new ii(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,be.newInvalidDocument(l)))});let o=Bn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Wn(l.mutation,c,et.empty(),me.now()),ha(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):v.resolve(be.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return v.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ut(s.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Kw(s.bundledQuery),readTime:ut(s.readTime)}}(n)),v.resolve()}}/**
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
 */class Zw{constructor(){this.overlays=new ve(M.comparator),this.es=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ut();return v.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),v.resolve()}getOverlaysForCollection(e,n,s){const r=Ut(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return v.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ut(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ut(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return v.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zw(n,s));let i=this.es.get(n);i===void 0&&(i=Q(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.ns=new ye(_e.ss),this.rs=new ye(_e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new _e(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new _e(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new M(new ce([])),s=new _e(n,e),r=new _e(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new M(new ce([])),s=new _e(n,e),r=new _e(n,e+1);let i=Q();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new _e(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class _e{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return M.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ye(_e.ss)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new _e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new _e(n,0),r=new _e(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ye(se);return n.forEach(r=>{const i=new _e(r,0),o=new _e(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),v.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new _e(new M(i),0);let a=new ye(se);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),v.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ie(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return v.forEach(n.mutations,r=>{const i=new _e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new _e(n,0),r=this.gs.firstAfterOrEqual(s);return v.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.Es=e,this.docs=new ve(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return v.resolve(s?s.document.mutableCopy():be.newInvalidDocument(n))}getEntries(e,n){let s=gt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():be.newInvalidDocument(r))}),v.resolve(s)}getAllFromCollection(e,n,s){let r=gt();const i=new M(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||j_(B_(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(e,n,s,r){H()}As(e,n){return v.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new n0(this)}getSize(e){return v.resolve(this.size)}}class n0 extends Qw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),v.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.persistence=e,this.Rs=new On(n=>ca(n),la),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ga,this.targetCount=0,this.vs=In.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),v.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new In(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Dn(n),v.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),v.waitFor(i).next(()=>r)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return v.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),v.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),v.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return v.resolve(s)}containsKey(e,n){return v.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new oa(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new s0(this),this.indexManager=new Gw,this.remoteDocumentCache=function(s){return new t0(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Hw(n),this.Ns=new Jw(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Zw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new e0(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new i0(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return v.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class i0 extends z_{constructor(e){super(),this.currentSequenceNumber=e}}class ma{constructor(e){this.persistence=e,this.Fs=new ga,this.$s=null}static Bs(e){return new ma(e)}get Ls(){if(this.$s)return this.$s;throw H()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),v.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),v.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ls,s=>{const r=M.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return v.or([()=>v.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Q(),r=Q();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ya(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Mi(e,n,r,s)).next(i=>i||this.Oi(e,n))}ki(e,n){if(Fc(n))return v.resolve(null);let s=pt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ho(n,null,"F"),s=pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Q(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,ho(n,null,"F")):this.Bi(e,l,n,c)}))})))}Mi(e,n,s,r){return Fc(n)||r.isEqual(W.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(e,n):(Dc()<=ne.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fo(n)),this.Bi(e,o,n,V_(r,-1)))})}Fi(e,n){let s=new ye(id(e));return n.forEach((r,i)=>{ha(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Dc()<=ne.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",fo(n)),this.Ni.getDocumentsMatchingQuery(e,n,Tt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new ve(se),this.qi=new On(i=>ca(i),la),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function c0(t,e,n,s){return new a0(t,e,n,s)}async function Sd(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Q();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function l0(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const m=c.docVersions.get(p);ie(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Q();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ad(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function u0(t,e){const n=G(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ee.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(g,m,E){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=gt(),l=Q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(h0(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(W.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=r,i))}function h0(t,e,n){let s=Q(),r=Q();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=gt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function d0(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function f0(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,v.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new jt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function yo(t,e,n){const s=G(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ms(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Wc(t,e,n){const s=G(t);let r=W.min(),i=Q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=G(a),h=u.qi.get(l);return h!==void 0?v.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(s,o,pt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:Q())).next(a=>(p0(s,lw(e),a),{documents:a,Hi:i})))}function p0(t,e,n){let s=W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Qc{constructor(){this.activeTargetIds=vd()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g0{constructor(){this.Lr=new Qc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ao(e,n);L("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw Rc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=y0[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){return new Promise((i,o)=>{const a=new R_;a.listenOnce(A_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fi.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Fi.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(g)>=0?g:b.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(b.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=k_(),o=S_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new D_({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new v0({Hr:g=>{h?L("Connection","Not sending because WebChannel is closed:",g):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,m,E)=>{g.listen(m,k=>{try{E(k)}catch(N){setTimeout(()=>{throw N},0)}})};return p(l,Ws.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),p(l,Ws.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),p(l,Ws.EventType.ERROR,g=>{h||(h=!0,Rc("Connection","WebChannel transport errored:",g),d.io(new $(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ws.EventType.MESSAGE,g=>{var m;if(!h){const E=g.data[0];ie(!!E);const k=E,N=k.error||((m=k[0])===null||m===void 0?void 0:m.error);if(N){L("Connection","WebChannel received error:",N);const I=N.status;let q=function(S){const K=ue[S];if(K!==void 0)return pd(K)}(I),C=N.message;q===void 0&&(q=b.INTERNAL,C="Unknown error status: "+I+" with message "+N.message),h=!0,d.io(new $(q,C)),l.close()}else L("Connection","WebChannel received:",E),d.ro(E)}}),p(o,C_.STAT_EVENT,g=>{g.stat===Ac.PROXY?L("Connection","Detected buffering proxy"):g.stat===Ac.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Bi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return new Cw(t,!0)}class Cd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Cd(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new $(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w0 extends Dd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Nw(this.It,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?ut(i.readTime):W.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=mo(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=uo(a)?{documents:Lw(r,a)}:{query:Mw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Id(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Nr(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=xw(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=mo(this.It),n.removeTarget=e,this.Bo(n)}}class I0 extends Dd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Pw(e.writeResults,e.commitTime),s=ut(e.commitTime);return this.listener.Zo(s,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=mo(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ow(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(b.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class T0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ft(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{nn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c._u.add(4),await Us(c),c.gu.set("Unknown"),c._u.delete(4),await hi(c)}(this))})}),this.gu=new T0(s,r)}}async function hi(t){if(nn(t))for(const e of t.wu)await e(!0)}async function Us(t){for(const e of t.wu)await e(!1)}function Rd(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wa(n)?_a(n):Pn(n).ko()&&va(n,e))}function Nd(t,e){const n=G(t),s=Pn(n);n.du.delete(e),s.ko()&&Od(n,e),n.du.size===0&&(s.ko()?s.Fo():nn(n)&&n.gu.set("Unknown"))}function va(t,e){t.yu.Ot(e.targetId),Pn(t).zo(e)}function Od(t,e){t.yu.Ot(e),Pn(t).Ho(e)}function _a(t){t.yu=new kw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Pn(t).start(),t.gu.uu()}function wa(t){return nn(t)&&!Pn(t).No()&&t.du.size>0}function nn(t){return G(t)._u.size===0}function Pd(t){t.yu=void 0}async function k0(t){t.du.forEach((e,n)=>{va(t,e)})}async function S0(t,e){Pd(t),wa(t)?(t.gu.hu(e),_a(t)):t.gu.set("Unknown")}async function A0(t,e,n){if(t.gu.set("Online"),e instanceof wd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Or(t,s)}else if(e instanceof or?t.yu.Gt(e):e instanceof _d?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(W.min()))try{const s=await Ad(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ee.EMPTY_BYTE_STRING,c.snapshotVersion)),Od(r,a);const l=new jt(c.target,a,1,c.sequenceNumber);va(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await Or(t,s)}}async function Or(t,e,n){if(!Ms(e))throw e;t._u.add(1),await Us(t),t.gu.set("Offline"),n||(n=()=>Ad(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await hi(t)})}function Ld(t,e){return e().catch(n=>Or(t,n,e))}async function di(t){const e=G(t),n=kt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;C0(e);)try{const r=await d0(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,D0(e,r)}catch(r){await Or(e,r)}Md(e)&&$d(e)}function C0(t){return nn(t)&&t.fu.length<10}function D0(t,e){t.fu.push(e);const n=kt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Md(t){return nn(t)&&!kt(t).No()&&t.fu.length>0}function $d(t){kt(t).start()}async function R0(t){kt(t).eu()}async function N0(t){const e=kt(t);for(const n of t.fu)e.Xo(n.mutations)}async function O0(t,e,n){const s=t.fu.shift(),r=pa.from(s,e,n);await Ld(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await di(t)}async function P0(t,e){e&&kt(t).Yo&&await async function(n,s){if(r=s.code,ww(r)&&r!==b.ABORTED){const i=n.fu.shift();kt(n).Oo(),await Ld(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await di(n)}var r}(t,e),Md(t)&&$d(t)}async function Xc(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=nn(n);n._u.add(3),await Us(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await hi(n)}async function L0(t,e){const n=G(t);e?(n._u.delete(2),await hi(n)):e||(n._u.add(2),await Us(n),n.gu.set("Unknown"))}function Pn(t){return t.pu||(t.pu=function(e,n,s){const r=G(e);return r.su(),new w0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:k0.bind(null,t),Zr:S0.bind(null,t),Wo:A0.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),wa(t)?_a(t):t.gu.set("Unknown")):(await t.pu.stop(),Pd(t))})),t.pu}function kt(t){return t.Iu||(t.Iu=function(e,n,s){const r=G(e);return r.su(),new I0(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:R0.bind(null,t),Zr:P0.bind(null,t),tu:N0.bind(null,t),Zo:O0.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await di(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ia(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ba(t,e){if(ft("AsyncQueue",`${e}: ${t}`),Ms(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=Bn(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.Tu=new ve(M.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):H():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new bn(e,n,pn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.Au=void 0,this.listeners=[]}}class $0{constructor(){this.queries=new On(e=>rd(e),oi),this.onlineState="Unknown",this.Ru=new Set}}async function x0(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new M0),r)try{i.Au=await n.onListen(s)}catch(o){const a=ba(o,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Ta(n)}async function U0(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function F0(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Ta(n)}function V0(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ta(t){t.Ru.forEach(e=>{e.next()})}class B0{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.key=e}}class Ud{constructor(e){this.key=e}}class j0{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=Q(),this.mutatedKeys=Q(),this.Ku=id(e),this.Gu=new pn(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new Jc,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=ha(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(s.track({type:3,doc:p}),E=!0):this.zu(d,p)||(s.track({type:2,doc:p}),E=!0,(c&&this.Ku(p,c)>0||l&&this.Ku(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),E=!0):d&&!p&&(s.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=m?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return p(h)-p(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new bn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Jc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Q(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new Ud(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new xd(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=Q();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return bn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class q0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class z0{constructor(e){this.key=e,this.ec=!1}}class H0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new On(a=>rd(a),oi),this.ic=new Map,this.rc=new Set,this.oc=new ve(M.comparator),this.uc=new Map,this.cc=new ga,this.ac={},this.hc=new Map,this.lc=In.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function K0(t,e){const n=nI(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await f0(n.localStore,pt(e));n.isPrimaryClient&&Rd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await G0(n,e,s,a==="current")}return r}async function G0(t,e,n,s){t.dc=(u,h,d)=>async function(p,g,m,E){let k=g.view.ju(m);k.$i&&(k=await Wc(p.localStore,g.query,!1).then(({documents:q})=>g.view.ju(q,k)));const N=E&&E.targetChanges.get(g.targetId),I=g.view.applyChanges(k,p.isPrimaryClient,N);return el(p,g.targetId,I.Yu),I.snapshot}(t,u,h,d);const r=await Wc(t.localStore,e,!0),i=new j0(e,r.Hi),o=i.ju(r.documents),a=xs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);el(t,n,c.Yu);const l=new q0(e,n,i);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function W0(t,e){const n=G(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!oi(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await yo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Nd(n.remoteStore,s.targetId),vo(n,s.targetId)}).catch(Ls)):(vo(n,s.targetId),await yo(n.localStore,s.targetId,!0))}async function Q0(t,e,n){const s=sI(t);try{const r=await function(i,o){const a=G(i),c=me.now(),l=o.reduce((d,p)=>d.add(p.key),Q());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=gt(),g=Q();return a.Gi.getEntries(d,l).next(m=>{p=m,p.forEach((E,k)=>{k.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{u=m;const E=[];for(const k of o){const N=yw(k,u.get(k.key).overlayedDocument);N!=null&&E.push(new tn(k.key,N,nd(N.value.mapValue),tt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(m=>{h=m;const E=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,E)})}).then(()=>({batchId:h.batchId,changes:md(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new ve(se)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await Fs(s,r.changes),await di(s.remoteStore)}catch(r){const i=ba(r,"Failed to persist write");n.reject(i)}}async function Fd(t,e){const n=G(t);try{const s=await u0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?ie(o.ec):r.removedDocuments.size>0&&(ie(o.ec),o.ec=!1))}),await Fs(n,s,e)}catch(s){await Ls(s)}}function Zc(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Ta(a)}(s.eventManager,e),r.length&&s.nc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Y0(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new ve(M.comparator);o=o.insert(i,be.newNoDocument(i,W.min()));const a=Q().add(i),c=new li(W.min(),new Map,new ye(se),o,a);await Fd(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ea(s)}else await yo(s.localStore,e,!1).then(()=>vo(s,e,n)).catch(Ls)}async function X0(t,e){const n=G(t),s=e.batch.batchId;try{const r=await l0(n.localStore,e);Bd(n,s,null),Vd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fs(n,r)}catch(r){await Ls(r)}}async function J0(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Bd(s,e,n),Vd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fs(s,r)}catch(r){await Ls(r)}}function Vd(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Bd(t,e,n){const s=G(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function vo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||jd(t,s)})}function jd(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Nd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ea(t))}function el(t,e,n){for(const s of n)s instanceof xd?(t.cc.addReference(s.key,e),Z0(t,s)):s instanceof Ud?(L("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||jd(t,s.key)):H()}function Z0(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ea(t))}function Ea(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new M(ce.fromString(e)),s=t.lc.next();t.uc.set(s,new z0(n)),t.oc=t.oc.insert(n,s),Rd(t.remoteStore,new jt(pt(ua(n.path)),s,2,oa.at))}}async function Fs(t,e,n){const s=G(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=ya.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const l=G(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>v.forEach(c,h=>v.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>v.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ms(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(h,g)}}}(s.localStore,i))}async function eI(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await Sd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new $(b.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fs(n,s.ji)}}function tI(t,e){const n=G(t),s=n.uc.get(e);if(s&&s.ec)return Q().add(s.key);{let r=Q();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function nI(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Y0.bind(null,e),e.nc.Wo=F0.bind(null,e.eventManager),e.nc._c=V0.bind(null,e.eventManager),e}function sI(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J0.bind(null,e),e}class rI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ui(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return c0(this.persistence,new o0,e.initialUser,this.It)}gc(e){return new r0(ma.Bs,this.It)}mc(e){return new g0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eI.bind(null,this.syncEngine),await L0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $0}createDatastore(e){const n=ui(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new _0(r));var r;return function(i,o,a,c){return new b0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Zc(this.syncEngine,a,0),o=Yc.C()?new Yc:new m0,new E0(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new H0(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Us(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Pe.UNAUTHENTICATED,this.clientId=Jh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ba(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cI(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Sd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uI(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xc(e.remoteStore,i)),t.onlineComponents=e}async function uI(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await cI(t,new rI)),t.offlineComponents}async function qd(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await lI(t,new iI)),t.onlineComponents}function hI(t){return qd(t).then(e=>e.syncEngine)}async function tl(t){const e=await qd(t),n=e.eventManager;return n.onListen=K0.bind(null,e.syncEngine),n.onUnlisten=W0.bind(null,e.syncEngine),n}const nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dI(t,e,n,s){if(e===!0&&s===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sl(t){if(!M.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rl(t){if(M.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ka(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new O_;switch(n.type){case"gapi":const s=n.client;return new M_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nl.get(e);n&&(L("ComponentProvider","Removing Datastore"),nl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class fi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class bt extends fi{constructor(e,n,s){super(e,n,ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new M(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function fI(t,e,...n){if(t=Re(t),zd("collection","path",e),t instanceof Sa){const s=ce.fromString(e,...n);return rl(s),new bt(t,null,s)}{if(!(t instanceof Ue||t instanceof bt))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return rl(s),new bt(t.firestore,null,s)}}function Xs(t,e,...n){if(t=Re(t),arguments.length===1&&(e=Jh.R()),zd("doc","path",e),t instanceof Sa){const s=ce.fromString(e,...n);return sl(s),new Ue(t,null,new M(s))}{if(!(t instanceof Ue||t instanceof bt))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return sl(s),new Ue(t.firestore,t instanceof bt?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Cd(this,"async_queue_retry"),this.jc=()=>{const n=Bi();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Bi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Bi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Bt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Ms(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const r=Ia.createAndSchedule(this,e,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&H()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ol(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends Sa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new pI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kd(this),this._firestoreClient.terminate()}}function gI(t,e){const n=typeof t=="object"?t:To(),s=typeof t=="string"?t:e||"(default)";return Zt(n,"firestore").getImmediate({identifier:s})}function Hd(t){return t._firestoreClient||Kd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new K_(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Ee.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tn(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^__.*__$/;class yI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new tn(e,this.data,this.fieldMask,n,this.fieldTransforms):new $s(e,this.data,n,this.fieldTransforms)}}function Wd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Da{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Da(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.oa(e),r}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Pr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(Wd(this.na)&&mI.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class vI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ui(e)}fa(e,n,s,r=!1){return new Da({na:e,methodName:n,la:s,path:Se.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function _I(t){const e=t._freezeSettings(),n=ui(t._databaseId);return new vI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wI(t,e,n,s,r,i={}){const o=t.fa(i.merge||i.mergeFields?2:0,e,n,r);Jd("Data must be an object, but it was:",o,s);const a=Yd(s,o);let c,l;if(i.merge)c=new et(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=II(e,h,n);if(!o.contains(d))throw new $(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);TI(u,d)||u.push(d)}c=new et(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new yI(new Be(a),c,l)}function Qd(t,e){if(Xd(t=Re(t)))return Jd("Unsupported field value:",e,t),Yd(t,e);if(t instanceof Gd)return function(n,s){if(!Wd(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qd(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hw(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=me.fromDate(n);return{timestampValue:Nr(s.It,r)}}if(n instanceof me){const r=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nr(s.It,r)}}if(n instanceof Ca)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Tn)return{bytesValue:Id(s.It,n._byteString)};if(n instanceof Ue){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${ka(n)}`)}(t,e)}function Yd(t,e){const n={};return Zh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(t,(s,r)=>{const i=Qd(r,e.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof Ca||t instanceof Tn||t instanceof Ue||t instanceof Gd)}function Jd(t,e,n){if(!Xd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ka(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function II(t,e,n){if((e=Re(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return Zd(t,e);throw Pr("Field path arguments must be of type string or ",t,!1,void 0,n)}const bI=new RegExp("[~\\*/\\[\\]]");function Zd(t,e,n){if(e.search(bI)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new $(b.INVALID_ARGUMENT,a+t+c)}function TI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EI extends ef{data(){return super.data()}}function tf(t,e){return typeof e=="string"?Zd(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nf extends ef{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ar extends nf{data(e={}){return super.data(e)}}class kI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new jn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ar(this._firestore,this._userDataWriter,s.key,s,new jn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new jn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:SI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function CI(t,...e){for(const n of e)t=n._apply(t);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{convertValue(e,n="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Nn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ca(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=td(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=Et(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ce.fromString(e);ie(kd(s));const r=new us(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||ft(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class sf extends DI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function al(t,e,n){t=gn(t,Ue);const s=gn(t.firestore,gs),r=RI(t.converter,e,n);return rf(s,[wI(_I(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,tt.none())])}function NI(t){return rf(gn(t.firestore,gs),[new da(t._key,tt.none())])}function cl(t,...e){var n,s,r;t=Re(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ol(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ol(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Ue)l=gn(t.firestore,gs),u=ua(t._key.path),c={next:h=>{e[o]&&e[o](OI(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=gn(t,fi);l=gn(h.firestore,gs),u=h._query;const d=new sf(l);c={next:p=>{e[o]&&e[o](new kI(l,d,h,p))},error:e[o+1],complete:e[o+2]},AI(t._query)}return function(h,d,p,g){const m=new oI(g),E=new B0(d,m,p);return h.asyncQueue.enqueueAndForget(async()=>x0(await tl(h),E)),()=>{m.Rc(),h.asyncQueue.enqueueAndForget(async()=>U0(await tl(h),E))}}(Hd(l),u,a,c)}function rf(t,e){return function(n,s){const r=new Bt;return n.asyncQueue.enqueueAndForget(async()=>Q0(await hI(n),s,r)),r.promise}(Hd(t),e)}function OI(t,e,n){const s=n.docs.get(e._key),r=new sf(t);return new nf(t,r,e._key,s,new jn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rn=n})(ys),st(new Ge("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new gs(new P_(n.getProvider("auth-internal")),new x_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),qe(Cc,"3.5.0",t),qe(Cc,"3.5.0","esm2017")})();const PI={apiKey:"AIzaSyBHdepwE7M4Byu2lFtX2s__9COcMdvXu7Q",authDomain:"r34-react.firebaseapp.com",databaseURL:"https://r34-react.firebaseio.com",projectId:"r34-react",storageBucket:"r34-react.appspot.com",messagingSenderId:"844749417844",appId:"1:844749417844:web:3d1a590b58568e472dd021",measurementId:"G-H9MD9SS1LS"},of=rg(PI),Nt=ly(of);Jg(Nt,yu);const Mn=gI(of);Tv();const LI=new it,MI=()=>{const t={loggedIn:!1,user:null},{subscribe:e,set:n}=Sn(t);return pu(Nt,s=>{n(s?{loggedIn:!0,user:s}:t)}),{subscribe:e,async signUpWithEmail(s,r){return Yg(Nt,s,r)},async signInWithEmail(s,r){return Xg(Nt,s,r)},async signInWithGoogle(){return bm(Nt,LI)},async signOut(){return Zg(Nt)}}},$I=MI(),ll="/assets/default-user.a40c52dd.png";function xI(t){let e;return{c(){e=_("i"),f(e,"class","codicon codicon-account")},m(n,s){R(n,e,s)},p:A,d(n){n&&D(e)}}}function UI(t){let e,n;return{c(){var s;e=_("img"),f(e,"class","profile-picture svelte-1vc9wq2"),hr(e.src,n=(s=t[0].user.photoURL)!=null?s:ll)||f(e,"src",n),f(e,"alt","Account")},m(s,r){R(s,e,r)},p(s,r){var i;r&1&&!hr(e.src,n=(i=s[0].user.photoURL)!=null?i:ll)&&f(e,"src",n)},d(s){s&&D(e)}}}function FI(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,k,N;o=new qf({});function I(S,K){return S[0].loggedIn?UI:xI}let q=I(t),C=q(t);return{c(){e=_("header"),n=_("div"),s=_("a"),s.innerHTML='<i class="codicon codicon-heart"></i>',r=U(),i=_("a"),z(o.$$.fragment),a=U(),c=_("button"),c.innerHTML='<i class="codicon codicon-book"></i>',l=U(),u=_("nav"),h=_("button"),h.innerHTML='<i class="codicon codicon-search"></i>',d=U(),p=_("button"),p.innerHTML='<i class="codicon codicon-settings-gear"></i>',g=U(),m=_("button"),C.c(),f(s,"title","Sponsor"),f(s,"href","https://ko-fi.com/kurozenzen"),f(s,"target","_newtab"),f(s,"class","svelte-1vc9wq2"),f(i,"title","Discord Server"),f(i,"href","https://discord.gg/yyJFG5PVBZ"),f(i,"target","_newtab"),f(i,"class","svelte-1vc9wq2"),f(c,"title","Documentation"),f(c,"class","svelte-1vc9wq2"),f(n,"class","svelte-1vc9wq2"),f(h,"title","Search"),f(h,"class","svelte-1vc9wq2"),f(p,"title","Settings"),f(p,"class","svelte-1vc9wq2"),f(m,"title","Account"),f(m,"class","svelte-1vc9wq2"),f(u,"class","svelte-1vc9wq2"),f(e,"role","navigation"),f(e,"class","svelte-1vc9wq2")},m(S,K){R(S,e,K),y(e,n),y(n,s),y(n,r),y(n,i),B(o,i,null),y(n,a),y(n,c),y(e,l),y(e,u),y(u,h),y(u,d),y(u,p),y(u,g),y(u,m),C.m(m,null),E=!0,k||(N=[ee(c,"click",t[1]),ee(h,"click",t[2]),ee(p,"click",t[3]),ee(m,"click",t[4])],k=!0)},p(S,[K]){q===(q=I(S))&&C?C.p(S,K):(C.d(1),C=q(S),C&&(C.c(),C.m(m,null)))},i(S){E||(w(o.$$.fragment,S),E=!0)},o(S){T(o.$$.fragment,S),E=!1},d(S){S&&D(e),j(o),C.d(),k=!1,Ve(N)}}}function VI(t,e,n){let s;return Xe(t,$I,c=>n(0,s=c)),[s,()=>Pt.navigateTo("help"),()=>Pt.navigateTo("search"),()=>Pt.navigateTo("settings"),()=>Pt.navigateTo("account")]}class BI extends Z{constructor(e){super(),J(this,e,VI,FI,Y,{})}}const jI="modulepreload",qI=function(t){return"/"+t},ul={},pi=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=qI(r),r in ul)return;ul[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":jI,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};let Ra="heroku";const af=Object.freeze({heroku:"https://r34-json.herokuapp.com/v2",adaptable:"https://rule34-json-api.adaptable.app/v2",render:"https://json-api.onrender.com/v2",railway:"https://api-service-production-122b.up.railway.app/v2"}),DE=Object.freeze({heroku:"Heroku",adaptable:"Adaptable",render:"Render",railway:"Railway"}),cf=()=>af[Ra],RE=()=>Ra,NE=t=>{if(!(t in af))throw new TypeError(`Attempted to set unexpected backend: ${t}`);Ra=t},Vs=t=>typeof t=="string"&&t!=="",gi=t=>typeof t=="number"&&t>=0;class mi{constructor(e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,k,N,I,q,C,S,K,$e,le,x){this.preview_url=e,this.sample_url=n,this.file_url=s,this.created_at=r,this.has_children=i,this.md5=o,this.height=a,this.id=c,this.change=l,this.creator_id=u,this.has_notes=h,this.has_comments=d,this.parent_id=p,this.preview_width=g,this.preview_height=m,this.rating=E,this.sample_height=k,this.sample_width=N,this.score=I,this.source=q,this.status=C,this.tags=S,this.width=K,this.comments_url=$e,this.owner_url=le,this.type=x,Object.freeze(this)}static from(e){return new mi(e.preview_url,e.sample_url,e.file_url,e.created_at,e.has_children,e.md5,e.height,e.id,e.change,e.creator_id,e.has_notes,e.has_comments,e.parent_id,e.preview_width,e.preview_height,e.rating,e.sample_height,e.sample_width,e.score,e.source,e.status,e.tags,e.width,e.comments_url,e.owner_url,e.type)}}const zI=t=>Array.isArray(t)&&t.every(e=>e instanceof mi);class HI{constructor(e,n){if(!gi(e))throw new TypeError("Invalid count passed to Page constructor");if(!zI(n))throw new TypeError("Invalid posts passed to Page constructor");this.count=e,this.posts=Object.freeze(n),Object.freeze(this)}}const KI=Object.freeze(["id","score"]),GI=t=>KI.includes(t),cr=Object.freeze(["+","-","~"]),yi=t=>cr.includes(t),lf=t=>{if(!yi(t))throw new TypeError("Invalid modifier passed to getNextModifier");const n=(cr.indexOf(t)+1)%cr.length;return cr[n]},WI=Object.freeze({"+":"","-":"-","~":""}),QI=t=>{if(!yi(t))throw TypeError("Invalid modifier passed to serializeModifier");return WI[t]};class vi{constructor(e,n){if(!yi(e))throw TypeError("Invalid modifier passed to SearchableTag constructor");if(!Vs(n))throw TypeError("Invalid name passed to SearchableTag constructor");this.modifier=e,this.name=n,Object.freeze(this)}serialize(){return`${QI(this.modifier)}${encodeURIComponent(this.name)}`}}const uf=(t,e)=>{if(!hf(t))throw new TypeError("Invalid URL passed to fetchAbortPrevious");if(!YI(e))throw new TypeError("Invalid AbortController passed to fetchAbortPrevious");return e&&e.abort(),e=new AbortController,fetch(t,{signal:e.signal})},hf=t=>{try{return new URL(t),!0}catch{return!1}},YI=t=>t===null||t instanceof AbortController,df=20;let XI=null;const JI=t=>{if(!t.ok)throw new Error(`getPage failed with http status ${t.status}`)},ZI=async(t,e,n,s)=>{eb(t,e,n,s);const r=ib(e,n,s),i=await uf(ob(t,r),XI);JI(i);const o=await i.json();return ab(o),new HI(o.count,o.posts.map(a=>mi.from(a)))},eb=(t,e,n,s)=>{if(!tb(t))throw new TypeError("Invalid pageNumber passed to getPage");if(!nb(e))throw new TypeError("Invalid array of tags passed to getPage");if(!GI(n))throw new TypeError("Invalid sort property passed to getPage");if(!sb(s))throw new TypeError("Invalid minimum score passed to getPage")},tb=t=>typeof t=="number"&&t>=0,nb=t=>Array.isArray(t)&&(t.length===0||t.every(e=>e instanceof vi)),sb=t=>typeof t=="number"&&t>=0,rb=t=>{const e={"+":[],"-":[],"~":[]};return t.forEach(n=>e[n.modifier].push(n)),e},ib=(t,e,n)=>{const s=rb(t),r=[...hl([...s["+"],...s["-"]]),`sort:${e}:desc`,`score:>=${n}`].join("+");return s["~"].length===0?r:`${r}+( ${hl(s["~"]).join(" ~ ")} )`},hl=t=>t.map(e=>e.serialize()),ob=(t,e)=>{const n=`${cf()}/posts?limit=${df}&pid=${t}`;return e===""?n:`${n}&tags=${e}`},ab=t=>{if(typeof t.count!="number"||!Array.isArray(t.posts))throw new Error("Unexpected response received in getPage")},cb=Object.freeze(["ambiguous","artist","character","copyright","general","metadata","rating","source","supertag"]),ff=t=>cb.includes(t);class Lr{constructor(e,n,s,r){if(!yi(e))throw TypeError("Invalid modifier passed to ActiveTag constructor");if(!Vs(n))throw TypeError("Invalid name passed to ActiveTag constructor");if(!gi(s))throw TypeError("Invalid count passed to ActiveTag constructor");if(!ff(r))throw TypeError("Invalid type passed to ActiveTag constructor");this.modifier=e,this.name=n,this.count=s,this.type=r,Object.freeze(this)}toSearchableTag(){return new vi(this.modifier,this.name)}}class pf{constructor(e,n,s){if(!Vs(e))throw TypeError("Invalid name passed to Tag constructor");if(!gi(n))throw TypeError("Invalid count passed to Tag constructor");if(!ff(s))throw TypeError("Invalid type passed to Tag constructor");this.name=e,this.count=n,this.type=s,Object.freeze(this)}toActiveTag(e){return new Lr(e,this.name,this.count,this.type)}}let lb=null;const ub=async(t,e)=>{const n=e?`*${t}*`:t,s=await uf(`${cf()}/tags?limit=20&sort=count&name=${n.replaceAll(" ","_")}`,lb);if(s.ok){const r=await s.json();if(Array.isArray(r)){if(r.length==0)throw new Error("No tags found");return r.map(i=>new pf(i.name,i.count,hb(i.types)))}else throw r.message?new Error(r.message):new Error("Invalid tag suggestions received")}else throw new Error("Failed to get tag suggestions")},hb=t=>{for(const e of t)if(e!=="ambiguous"&&e!=="general")return e;return"general"};class gf{constructor(e,n,s){if(!Vs(e))throw new TypeError("Invalid name passed to Supertag");if(!db(s))throw new TypeError("Invalid description passed to Supertag");this.name=e,this.description=n,this.tags=Object.freeze([...s]),Object.freeze(this)}}const db=t=>Array.isArray(t)&&t.every(e=>e instanceof vi),fb=()=>{const t={preferences:{},supertags:[]},{subscribe:e,update:n}=Sn(t);let s,r=null,i=null;return pu(Nt,async o=>{s=o,o?r=cl(Xs(Mn,"users",o.uid),async a=>{const c=a.data();n(c===void 0?u=>(u.preferences={},u):u=>(u.preferences=c.preferences,u));const l=CI(fI(Mn,`users/${o.uid}/supertags`));i==null||i(),i=cl(l,u=>{const h=[];u.forEach(d=>{const p=d.data();h.push(new gf(d.id,p.description,Object.entries(p.tags).map(g=>new vi(g[1],g[0]))))}),n(d=>(d.supertags=h,d))})}):(r==null||r(),i==null||i(),r=null,i=null)}),{subscribe:e,async addSupertag(o){if(!s)throw new Error("No user");return al(Xs(Mn,`users/${s.uid}/supertags`,o.name),{description:o.description,tags:Object.fromEntries(o.tags.map(a=>[a.name,a.modifier]))})},async deleteSupertag(o){if(!s)throw new Error("No user");return NI(Xs(Mn,`users/${s.uid}/supertags`,o.name))},async setTheme(o){if(!!s)return al(Xs(Mn,"users",s.uid),{preferences:{theme:o}},{merge:!0})}}},_o=fb();function pb(t){let e,n,s,r;return{c(){e=_("button"),n=fe(t[0]),f(e,"title",t[1]),e.disabled=t[2],f(e,"class","svelte-1nifcn1")},m(i,o){R(i,e,o),y(e,n),s||(r=ee(e,"click",t[4]),s=!0)},p(i,[o]){o&1&&Me(n,i[0]),o&2&&f(e,"title",i[1]),o&4&&(e.disabled=i[2])},i:A,o:A,d(i){i&&D(e),s=!1,r()}}}function gb(t,e,n){let{text:s}=e,{title:r}=e,{disabled:i=!1}=e;const o=Ke(),a=()=>o("click");return t.$$set=c=>{"text"in c&&n(0,s=c.text),"title"in c&&n(1,r=c.title),"disabled"in c&&n(2,i=c.disabled)},[s,r,i,o,a]}class mf extends Z{constructor(e){super(),J(this,e,gb,pb,Y,{text:0,title:1,disabled:2})}}function _i(t){return e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.stopPropagation(),t())}}const mb=Intl.NumberFormat("en",{notation:"compact"}),St=t=>{if(!gi(t))throw new TypeError("Invalid value passed to formatCount");return mb.format(t)};function En(t){return t.replace(/_/g," ").replace(/source:/g,"").replace(/rating:/g,"")}const dl=Object.freeze({artist:"edit",character:"person",copyright:"folder",metadata:"info",rating:"unverified",source:"link",supertag:"star-full"});function yb(t){let e,n;return{c(){e=_("i"),f(e,"class",n=`codicon codicon-${dl[t[0]]}`)},m(s,r){R(s,e,r)},p(s,[r]){r&1&&n!==(n=`codicon codicon-${dl[s[0]]}`)&&f(e,"class",n)},i:A,o:A,d(s){s&&D(e)}}}function vb(t,e,n){let{type:s}=e;return t.$$set=r=>{"type"in r&&n(0,s=r.type)},[s]}class yf extends Z{constructor(e){super(),J(this,e,vb,yb,Y,{type:0})}}const fl=Object.freeze({"+":"plus","-":"circle-slash","~":"record"}),pl=Object.freeze({"+":"Included. Tags will be included in the search.","-":"Blocked. Tags will be blocked.","~":"Optional. At least one of all optional tags will on each post."}),gl=Object.freeze({"+":"include","-":"exclude","~":"optional"});function _b(t){let e,n,s,r=En(t[0].name)+"",i,o,a=St(t[0].count)+"",c,l,u,h,d,p;return n=new yf({props:{type:t[0].type}}),{c(){e=_("li"),z(n.$$.fragment),s=U(),i=fe(r),o=fe(`
  (`),c=fe(a),l=fe(")"),f(e,"class",u=nt(gl[t[0].modifier])+" svelte-u5uy3w"),f(e,"tabindex","0"),f(e,"title","Click to remove tag"),je(e,"no-icon",t[0].type==="general")},m(g,m){R(g,e,m),B(n,e,null),y(e,s),y(e,i),y(e,o),y(e,c),y(e,l),h=!0,d||(p=[ee(e,"click",t[2]),ee(e,"contextmenu",Mr(t[3]))],d=!0)},p(g,[m]){const E={};m&1&&(E.type=g[0].type),n.$set(E),(!h||m&1)&&r!==(r=En(g[0].name)+"")&&Me(i,r),(!h||m&1)&&a!==(a=St(g[0].count)+"")&&Me(c,a),(!h||m&1&&u!==(u=nt(gl[g[0].modifier])+" svelte-u5uy3w"))&&f(e,"class",u),(!h||m&1)&&je(e,"no-icon",g[0].type==="general")},i(g){h||(w(n.$$.fragment,g),h=!0)},o(g){T(n.$$.fragment,g),h=!1},d(g){g&&D(e),j(n),d=!1,Ve(p)}}}function wb(t,e,n){let{tag:s}=e;const r=Ke(),i=()=>r("click"),o=()=>r("contextmenu");return t.$$set=a=>{"tag"in a&&n(0,s=a.tag)},[s,r,i,o]}class vf extends Z{constructor(e){super(),J(this,e,wb,_b,Y,{tag:0})}}function ml(t,e,n){const s=t.slice();return s[9]=e[n],s}function yl(t){let e,n;return e=new vf({props:{tag:t[9]}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tag=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Ib(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E,k,N,I,q,C,S,K,$e,le=t[2],x=[];for(let te=0;te<le.length;te+=1)x[te]=yl(ml(t,le,te));const wi=te=>T(x[te],1,1,()=>{x[te]=null});return C=new mf({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",text:"Create supertag",disabled:!t[3]}}),C.$on("click",t[8]),{c(){e=_("dialog"),n=_("h3"),n.textContent="Create Supertag",s=U(),r=_("i"),i=U(),o=_("div"),a=_("label"),a.textContent="Name",c=U(),l=_("input"),u=U(),h=_("div"),d=_("label"),d.textContent="Description",p=U(),g=_("textarea"),m=U(),E=_("div"),k=_("span"),k.textContent="Tags",N=U(),I=_("ol");for(let te=0;te<x.length;te+=1)x[te].c();q=U(),z(C.$$.fragment),f(r,"tabindex","0"),f(r,"class",nt("codicon codicon-close")+" svelte-ax50wm"),f(a,"for","supertag-name"),f(a,"class","svelte-ax50wm"),f(l,"type","text"),f(l,"placeholder","Descriptive name"),f(l,"id","supertag-name"),f(l,"class","svelte-ax50wm"),f(o,"class","svelte-ax50wm"),f(d,"for","supertag-description"),f(d,"class","svelte-ax50wm"),f(g,"type","text"),f(g,"placeholder","Short description"),f(g,"id","supertag-description"),f(g,"class","svelte-ax50wm"),f(h,"class","svelte-ax50wm"),f(k,"class","svelte-ax50wm"),f(I,"class","svelte-ax50wm"),f(E,"class","svelte-ax50wm"),f(e,"class","svelte-ax50wm")},m(te,oe){R(te,e,oe),y(e,n),y(e,s),y(e,r),y(e,i),y(e,o),y(o,a),y(o,c),y(o,l),cn(l,t[0]),y(e,u),y(e,h),y(h,d),y(h,p),y(h,g),cn(g,t[1]),y(e,m),y(e,E),y(E,k),y(E,N),y(E,I);for(let Qe=0;Qe<x.length;Qe+=1)x[Qe].m(I,null);y(e,q),B(C,e,null),S=!0,K||($e=[ee(r,"click",t[5]),ee(r,"keyup",_i(t[5])),ee(l,"input",t[6]),ee(g,"input",t[7])],K=!0)},p(te,[oe]){if(oe&1&&l.value!==te[0]&&cn(l,te[0]),oe&2&&cn(g,te[1]),oe&4){le=te[2];let P;for(P=0;P<le.length;P+=1){const re=ml(te,le,P);x[P]?(x[P].p(re,oe),w(x[P],1)):(x[P]=yl(re),x[P].c(),w(x[P],1),x[P].m(I,null))}for(pe(),P=le.length;P<x.length;P+=1)wi(P);ge()}const Qe={};oe&8&&(Qe.title=te[3]?"Click to create supertag":"Enter a valid name to continue"),oe&8&&(Qe.disabled=!te[3]),C.$set(Qe)},i(te){if(!S){for(let oe=0;oe<le.length;oe+=1)w(x[oe]);w(C.$$.fragment,te),S=!0}},o(te){x=x.filter(Boolean);for(let oe=0;oe<x.length;oe+=1)T(x[oe]);T(C.$$.fragment,te),S=!1},d(te){te&&D(e),kn(x,te),j(C),K=!1,Ve($e)}}}function bb(t,e,n){let s,{name:r=""}=e,{description:i=""}=e,{tags:o}=e;const a=Ke(),c=()=>a("close");function l(){r=this.value,n(0,r)}function u(){i=this.value,n(1,i)}const h=()=>{a("submit",new gf(r,i,o.map(d=>d.toSearchableTag()))),c()};return t.$$set=d=>{"name"in d&&n(0,r=d.name),"description"in d&&n(1,i=d.description),"tags"in d&&n(2,o=d.tags)},t.$$.update=()=>{t.$$.dirty&1&&n(3,s=Vs(r))},[r,i,o,s,a,c,l,u,h]}class Tb extends Z{constructor(e){super(),J(this,e,bb,Ib,Y,{name:0,description:1,tags:2})}}function Eb(t){let e,n,s,r;return{c(){e=_("i"),f(e,"title",t[0]),f(e,"class",n=nt(`codicon codicon-${t[1]}`)+" svelte-ga3rak"),f(e,"tabindex","0"),je(e,"active",t[2])},m(i,o){R(i,e,o),s||(r=[ee(e,"click",t[3]),ee(e,"keyup",_i(t[3])),ee(e,"touchend",Mr(t[3]))],s=!0)},p(i,[o]){o&1&&f(e,"title",i[0]),o&2&&n!==(n=nt(`codicon codicon-${i[1]}`)+" svelte-ga3rak")&&f(e,"class",n),o&6&&je(e,"active",i[2])},i:A,o:A,d(i){i&&D(e),s=!1,Ve(r)}}}function kb(t,e,n){let{title:s=void 0}=e,{icon:r}=e,{active:i}=e;const o=Ke(),a=()=>o("click");return t.$$set=c=>{"title"in c&&n(0,s=c.title),"icon"in c&&n(1,r=c.icon),"active"in c&&n(2,i=c.active)},[s,r,i,a]}class Sb extends Z{constructor(e){super(),J(this,e,kb,Eb,Y,{title:0,icon:1,active:2})}}function Ab(t){let e,n,s,r,i;return{c(){e=_("i"),f(e,"tabindex","0"),f(e,"class",n=nt(`codicon codicon-${fl[t[0]]}`)+" svelte-19rqyrs"),f(e,"title",s=pl[t[0]])},m(o,a){R(o,e,a),r||(i=[ee(e,"click",t[1]),ee(e,"keyup",_i(t[1])),ee(e,"touchend",Mr(t[1]))],r=!0)},p(o,[a]){a&1&&n!==(n=nt(`codicon codicon-${fl[o[0]]}`)+" svelte-19rqyrs")&&f(e,"class",n),a&1&&s!==(s=pl[o[0]])&&f(e,"title",s)},i:A,o:A,d(o){o&&D(e),r=!1,Ve(i)}}}function Cb(t,e,n){let s="+";const r=Ke();return[s,()=>{n(0,s=lf(s)),r("change",s)}]}class Db extends Z{constructor(e){super(),J(this,e,Cb,Ab,Y,{})}}function Rb(t){let e;return{c(){e=_("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20" enable-background="new 0 0 0 0" class="svelte-166gq1d"><circle fill="currentcolor" stroke="none" cx="6" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate></circle><circle fill="currentcolor" stroke="none" cx="25" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate></circle><circle fill="currentcolor" stroke="none" cx="44" cy="10" r="6"><animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate></circle></svg>'},m(n,s){R(n,e,s)},p:A,i:A,o:A,d(n){n&&D(e)}}}class _f extends Z{constructor(e){super(),J(this,e,null,Rb,Y,{})}}function Nb(t){let e,n,s,r,i=En(t[0].name)+"",o,a,c,l=St(t[0].count)+"",u,h,d,p,g;return n=new yf({props:{type:t[0].type}}),{c(){e=_("li"),z(n.$$.fragment),s=U(),r=_("span"),o=fe(i),a=U(),c=_("span"),u=fe(l),f(r,"class","tag-name svelte-14cwkxh"),f(c,"class","tag-count"),f(e,"tabindex","0"),f(e,"title",h=t[0].name),f(e,"class","svelte-14cwkxh")},m(m,E){R(m,e,E),B(n,e,null),y(e,s),y(e,r),y(r,o),y(e,a),y(e,c),y(c,u),d=!0,p||(g=ee(e,"click",t[2]),p=!0)},p(m,[E]){const k={};E&1&&(k.type=m[0].type),n.$set(k),(!d||E&1)&&i!==(i=En(m[0].name)+"")&&Me(o,i),(!d||E&1)&&l!==(l=St(m[0].count)+"")&&Me(u,l),(!d||E&1&&h!==(h=m[0].name))&&f(e,"title",h)},i(m){d||(w(n.$$.fragment,m),d=!0)},o(m){T(n.$$.fragment,m),d=!1},d(m){m&&D(e),j(n),p=!1,g()}}}function Ob(t,e,n){let{tag:s}=e;const r=Ke(),i=()=>r("click",s);return t.$$set=o=>{"tag"in o&&n(0,s=o.tag)},[s,r,i]}class Pb extends Z{constructor(e){super(),J(this,e,Ob,Nb,Y,{tag:0})}}function vl(t,e,n){const s=t.slice();return s[18]=e[n],s}function Lb(t){let e,n,s,r,i=t[21].message+"",o;return{c(){e=_("div"),n=_("i"),s=U(),r=_("span"),o=fe(i),f(n,"class",nt("codicon codicon-error")+" svelte-1yi1z4k"),f(e,"class","suggestion-footer svelte-1yi1z4k")},m(a,c){R(a,e,c),y(e,n),y(e,s),y(e,r),y(r,o)},p(a,c){c&4&&i!==(i=a[21].message+"")&&Me(o,i)},i:A,o:A,d(a){a&&D(e)}}}function Mb(t){let e,n,s,r=t[5],i=[];for(let a=0;a<r.length;a+=1)i[a]=_l(vl(t,r,a));const o=a=>T(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=U(),n=_("div"),f(n,"class","suggestion-footer svelte-1yi1z4k")},m(a,c){for(let l=0;l<i.length;l+=1)i[l].m(a,c);R(a,e,c),R(a,n,c),s=!0},p(a,c){if(c&232){r=a[5];let l;for(l=0;l<r.length;l+=1){const u=vl(a,r,l);i[l]?(i[l].p(u,c),w(i[l],1)):(i[l]=_l(u),i[l].c(),w(i[l],1),i[l].m(e.parentNode,e))}for(pe(),l=r.length;l<i.length;l+=1)o(l);ge()}},i(a){if(!s){for(let c=0;c<r.length;c+=1)w(i[c]);s=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)T(i[c]);s=!1},d(a){kn(i,a),a&&D(e),a&&D(n)}}}function _l(t){let e,n;function s(){return t[14](t[18])}return e=new Pb({props:{tag:t[18]}}),e.$on("click",s),{c(){z(e.$$.fragment)},m(r,i){B(e,r,i),n=!0},p(r,i){t=r;const o={};i&32&&(o.tag=t[18]),e.$set(o)},i(r){n||(w(e.$$.fragment,r),n=!0)},o(r){T(e.$$.fragment,r),n=!1},d(r){j(e,r)}}}function $b(t){let e,n,s;return n=new _f({}),{c(){e=_("div"),z(n.$$.fragment),f(e,"class","suggestion-footer svelte-1yi1z4k")},m(r,i){R(r,e,i),B(n,e,null),s=!0},p:A,i(r){s||(w(n.$$.fragment,r),s=!0)},o(r){T(n.$$.fragment,r),s=!1},d(r){r&&D(e),j(n)}}}function xb(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E;o=new Db({}),o.$on("change",t[10]),c=new Sb({props:{icon:"whole-word",title:"Toggle exact search term matching",active:!t[1]}}),c.$on("click",t[11]);let k={ctx:t,current:null,token:null,hasCatch:!0,pending:$b,then:Mb,catch:Lb,error:21,blocks:[,,,]};return $a(p=t[2],k),{c(){e=_("div"),n=_("i"),s=U(),r=_("input"),i=U(),z(o.$$.fragment),a=U(),z(c.$$.fragment),l=U(),u=_("i"),h=U(),d=_("ol"),k.block.c(),f(n,"class","codicon codicon-search spaced svelte-1yi1z4k"),f(r,"type","text"),f(r,"aria-label","Search for tags."),f(r,"class","svelte-1yi1z4k"),f(u,"tabindex","0"),f(u,"class","codicon codicon-question spaced svelte-1yi1z4k"),f(d,"class","svelte-1yi1z4k"),je(d,"open",t[4]),f(e,"class","searchbar svelte-1yi1z4k"),je(e,"open",t[4])},m(N,I){R(N,e,I),y(e,n),y(e,s),y(e,r),cn(r,t[0]),y(e,i),B(o,e,null),y(e,a),B(c,e,null),y(e,l),y(e,u),y(e,h),y(e,d),k.block.m(d,k.anchor=null),k.mount=()=>d,k.anchor=null,g=!0,m||(E=[ee(r,"input",t[8]),ee(r,"blur",t[9]),ee(u,"click",t[12]),ee(u,"keyup",_i(t[13])),ee(e,"blur",t[15])],m=!0)},p(N,[I]){t=N,I&1&&r.value!==t[0]&&cn(r,t[0]);const q={};I&2&&(q.active=!t[1]),c.$set(q),k.ctx=t,I&4&&p!==(p=t[2])&&$a(p,k)||xf(k,t,I),(!g||I&16)&&je(d,"open",t[4]),(!g||I&16)&&je(e,"open",t[4])},i(N){g||(w(o.$$.fragment,N),w(c.$$.fragment,N),w(k.block),g=!0)},o(N){T(o.$$.fragment,N),T(c.$$.fragment,N);for(let I=0;I<3;I+=1){const q=k.blocks[I];T(q)}g=!1},d(N){N&&D(e),j(o),j(c),k.block.d(),k.token=null,k=null,m=!1,Ve(E)}}}function Ub(t,e,n){let s;Xe(t,_o,C=>n(16,s=C));const r=Ke();let i,o="",a=!0,c="+",l=!1,u=[];async function h(C,S){n(4,l=!0),n(5,u=[...s.supertags.filter(K=>K.name.toLowerCase().includes(S.toLowerCase())).map(K=>new pf(K.name,Object.keys(K.tags).length,"supertag")),...await ub(S,C)])}const d=()=>{n(0,o=""),n(5,u=[]),n(4,l=!1)};function p(){o=this.value,n(0,o)}const g=C=>{(!C.relatedTarget||!C.target.parentNode.contains(C.relatedTarget))&&n(4,l=!1)},m=C=>{n(3,c=C.detail)},E=()=>{n(1,a=!a)},k=()=>Pt.navigateTo("help"),N=()=>Pt.navigateTo("help"),I=C=>{r("pick",C.toActiveTag(c)),d()},q=()=>{n(4,l=!1)};return t.$$.update=()=>{t.$$.dirty&3&&(n(5,u=[]),o!==""&&n(2,i=h(a,o)))},[o,a,i,c,l,u,r,d,p,g,m,E,k,N,I,q]}class Fb extends Z{constructor(e){super(),J(this,e,Ub,xb,Y,{})}}function Vb(){const t=[],{subscribe:e,update:n,set:s}=Sn(t);return{subscribe:e,set:s,addOrReplace:r=>n(i=>{const o=i.findIndex(a=>a.name===r.name);return o===-1?i.push(r):i[o]=r,i}),addByName:r=>n(i=>(i.push(new Lr("+",r,0,"general")),i)),removeByIndex:r=>n(i=>(i.splice(r,1),i))}}const wt=Vb();function Bb(t){let e,n=En(t[0])+"",s,r,i;return{c(){e=_("li"),s=fe(n),f(e,"tabindex","0"),f(e,"title","Click to add tag"),f(e,"class","svelte-e4wl79"),je(e,"active",t[2])},m(o,a){R(o,e,a),y(e,s),r||(i=ee(e,"click",t[4]),r=!0)},p(o,[a]){a&1&&n!==(n=En(o[0])+"")&&Me(s,n),a&4&&je(e,"active",o[2])},i:A,o:A,d(o){o&&D(e),r=!1,i()}}}function jb(t,e,n){let s,r,i;Xe(t,wt,c=>n(3,i=c));let{name:o}=e;const a=()=>r?wt.removeByIndex(s):wt.addByName(o);return t.$$set=c=>{"name"in c&&n(0,o=c.name)},t.$$.update=()=>{t.$$.dirty&9&&n(1,s=i.findIndex(c=>c.name===o)),t.$$.dirty&2&&n(2,r=s>=0)},[o,s,r,i,a]}class qb extends Z{constructor(e){super(),J(this,e,jb,Bb,Y,{name:0})}}function zb(t){let e,n;return{c(){e=_("span"),n=fe(t[0])},m(s,r){R(s,e,r),y(e,n)},p(s,r){r&1&&Me(n,s[0])},d(s){s&&D(e)}}}function Hb(t){let e,n=t[1].hostname+"",s,r;return{c(){e=_("a"),s=fe(n),f(e,"href",r=t[1].toString()),f(e,"target","_newtab"),f(e,"class","svelte-wfhmk4")},m(i,o){R(i,e,o),y(e,s)},p(i,o){o&2&&n!==(n=i[1].hostname+"")&&Me(s,n),o&2&&r!==(r=i[1].toString())&&f(e,"href",r)},d(i){i&&D(e)}}}function Kb(t){let e,n,s;function r(a,c){return a[1]?Hb:zb}let i=r(t),o=i(t);return{c(){e=_("i"),n=U(),o.c(),s=Xt(),f(e,"class","codicon codicon-link")},m(a,c){R(a,e,c),R(a,n,c),o.m(a,c),R(a,s,c)},p(a,[c]){i===(i=r(a))&&o?o.p(a,c):(o.d(1),o=i(a),o&&(o.c(),o.m(s.parentNode,s)))},i:A,o:A,d(a){a&&D(e),a&&D(n),o.d(a),a&&D(s)}}}function Gb(t,e,n){let s,{source:r}=e;return t.$$set=i=>{"source"in i&&n(0,r=i.source)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=hf(r)?new URL(r):null)},[r,s]}class Wb extends Z{constructor(e){super(),J(this,e,Gb,Kb,Y,{source:0})}}function Qb(t){let e,n;const s=t[1].default,r=Sf(s,t,t[0],null);return{c(){e=_("div"),r&&r.c(),f(e,"class","svelte-11wqnx2")},m(i,o){R(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&Cf(r,s,i,i[0],n?Af(s,i[0],o,null):Df(i[0]),null)},i(i){n||(w(r,i),n=!0)},o(i){T(r,i),n=!1},d(i){i&&D(e),r&&r.d(i)}}}function Yb(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class wo extends Z{constructor(e){super(),J(this,e,Yb,Qb,Y,{})}}const wl=6e4,Il=t=>{if(!Xb(t))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(t).getTime()/wl,s=new Date().getTime()/wl-e;if(s<1)return"just now";if(s<60)return an(s,"minute");const r=s/60;if(r<24)return an(r,"hour");const i=r/24;if(i<7)return an(i,"day");if(i<30.5)return an(i/7,"week");if(i<365.25)return an(i/30.5,"month");const o=i/365.25;return an(o,"year")},Xb=t=>typeof t=="string"&&new Date(t).toString()!=="Invalid Date",an=(t,e)=>{const n=t.toFixed();return`${n} ${e}${n==="1"?"":"s"} ago`};function Jb(t){let e,n,s,r=Il(t[0])+"",i;return{c(){e=_("i"),n=U(),s=_("span"),i=fe(r),f(e,"class","codicon codicon-calendar"),f(s,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=Il(o[0])+"")&&Me(i,r)},i:A,o:A,d(o){o&&D(e),o&&D(n),o&&D(s)}}}function Zb(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class eT extends Z{constructor(e){super(),J(this,e,Zb,Jb,Y,{value:0})}}function tT(t){let e,n,s,r=St(t[0])+"",i;return{c(){e=_("i"),n=U(),s=_("span"),i=fe(r),f(e,"class","codicon codicon-heart"),f(s,"class","svelte-1vg7vp7")},m(o,a){R(o,e,a),R(o,n,a),R(o,s,a),y(s,i)},p(o,[a]){a&1&&r!==(r=St(o[0])+"")&&Me(i,r)},i:A,o:A,d(o){o&&D(e),o&&D(n),o&&D(s)}}}function nT(t,e,n){let{value:s}=e;return t.$$set=r=>{"value"in r&&n(0,s=r.value)},[s]}class sT extends Z{constructor(e){super(),J(this,e,nT,tT,Y,{value:0})}}function bl(t,e,n){const s=t.slice();return s[1]=e[n],s}function rT(t){let e,n;return e=new eT({props:{value:t[0].created_at}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].created_at),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function iT(t){let e,n;return e=new sT({props:{value:t[0].score}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.value=s[0].score),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Tl(t){let e,n;return e=new wo({props:{$$slots:{default:[oT]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&17&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function oT(t){let e,n;return e=new Wb({props:{source:t[0].source}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.source=s[0].source),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function El(t){let e,n;return e=new qb({props:{name:t[1]}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function aT(t){let e,n,s,r,i,o,a,c,l;s=new wo({props:{$$slots:{default:[rT]},$$scope:{ctx:t}}}),i=new wo({props:{$$slots:{default:[iT]},$$scope:{ctx:t}}});let u=t[0].source&&Tl(t),h=t[0].tags,d=[];for(let g=0;g<h.length;g+=1)d[g]=El(bl(t,h,g));const p=g=>T(d[g],1,1,()=>{d[g]=null});return{c(){e=_("div"),n=_("div"),z(s.$$.fragment),r=U(),z(i.$$.fragment),o=U(),u&&u.c(),a=U(),c=_("ul");for(let g=0;g<d.length;g+=1)d[g].c();f(n,"class","summary svelte-jhzkkk"),f(c,"class","svelte-jhzkkk"),f(e,"class","details svelte-jhzkkk")},m(g,m){R(g,e,m),y(e,n),B(s,n,null),y(n,r),B(i,n,null),y(n,o),u&&u.m(n,null),y(e,a),y(e,c);for(let E=0;E<d.length;E+=1)d[E].m(c,null);l=!0},p(g,[m]){const E={};m&17&&(E.$$scope={dirty:m,ctx:g}),s.$set(E);const k={};if(m&17&&(k.$$scope={dirty:m,ctx:g}),i.$set(k),g[0].source?u?(u.p(g,m),m&1&&w(u,1)):(u=Tl(g),u.c(),w(u,1),u.m(n,null)):u&&(pe(),T(u,1,1,()=>{u=null}),ge()),m&1){h=g[0].tags;let N;for(N=0;N<h.length;N+=1){const I=bl(g,h,N);d[N]?(d[N].p(I,m),w(d[N],1)):(d[N]=El(I),d[N].c(),w(d[N],1),d[N].m(c,null))}for(pe(),N=h.length;N<d.length;N+=1)p(N);ge()}},i(g){if(!l){w(s.$$.fragment,g),w(i.$$.fragment,g),w(u);for(let m=0;m<h.length;m+=1)w(d[m]);l=!0}},o(g){T(s.$$.fragment,g),T(i.$$.fragment,g),T(u),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)T(d[m]);l=!1},d(g){g&&D(e),j(s),j(i),u&&u.d(),kn(d,g)}}}function cT(t,e,n){let{post:s}=e;return t.$$set=r=>{"post"in r&&n(0,s=r.post)},[s]}class lT extends Z{constructor(e){super(),J(this,e,cT,aT,Y,{post:0})}}const Na=new IntersectionObserver(t=>{for(const e of t)e.target.src!==void 0&&(e.target.src=e.isIntersecting?e.target.getAttribute("data-src"):"")},{rootMargin:"1250px"});function uT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=ee(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&D(e),t[3](null),a=!1,c()}}}function hT(t,e,n){let{post:s}=e;const r=Ke();let i;function o(c){mn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,r,o,a]}class dT extends Z{constructor(e){super(),J(this,e,hT,uT,Y,{post:0})}}function fT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("video"),f(e,"preload","metadata"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),e.controls=!0,f(e,"class","svelte-19kew7t")},m(l,u){R(l,e,u),t[5](e),a||(c=[ee(e,"click",Mr(t[4])),ee(e,"touchstart",t[2],{passive:!0}),ee(e,"touchend",t[3],{passive:!0})],a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&D(e),t[5](null),a=!1,Ve(c)}}}function pT(t,e,n){let{post:s}=e;const r=Ke();let i,o={screenX:0,screenY:0};const a=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o={screenX:d,screenY:p}},c=h=>{const{screenX:d,screenY:p}=h.changedTouches.item(0);o.screenX===d&&o.screenY===p&&r("click")};function l(h){Pf.call(this,t,h)}function u(h){mn[h?"unshift":"push"](()=>{i=h,n(1,i)})}return t.$$set=h=>{"post"in h&&n(0,s=h.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,a,c,l,u]}class gT extends Z{constructor(e){super(),J(this,e,pT,fT,Y,{post:0})}}function mT(t){let e,n,s,r,i,o,a,c;return{c(){e=_("img"),f(e,"loading","lazy"),f(e,"data-src",n=t[0].sample_url.endsWith(".gif")?t[0].sample_url:t[0].file_url),f(e,"alt",s=t[0].id.toString()),f(e,"style",r=`aspect-ratio: ${t[0].width} / ${t[0].height}`),f(e,"width",i=t[0].width),f(e,"height",o=t[0].height),f(e,"class","svelte-4xosj1")},m(l,u){R(l,e,u),t[3](e),a||(c=ee(e,"click",t[4]),a=!0)},p(l,[u]){u&1&&n!==(n=l[0].sample_url.endsWith(".gif")?l[0].sample_url:l[0].file_url)&&f(e,"data-src",n),u&1&&s!==(s=l[0].id.toString())&&f(e,"alt",s),u&1&&r!==(r=`aspect-ratio: ${l[0].width} / ${l[0].height}`)&&f(e,"style",r),u&1&&i!==(i=l[0].width)&&f(e,"width",i),u&1&&o!==(o=l[0].height)&&f(e,"height",o)},i:A,o:A,d(l){l&&D(e),t[3](null),a=!1,c()}}}function yT(t,e,n){let{post:s}=e;const r=Ke();let i;function o(c){mn[c?"unshift":"push"](()=>{i=c,n(1,i)})}const a=()=>r("click");return t.$$set=c=>{"post"in c&&n(0,s=c.post)},t.$$.update=()=>{t.$$.dirty&2&&i&&Na.observe(i)},[s,i,r,o,a]}class vT extends Z{constructor(e){super(),J(this,e,yT,mT,Y,{post:0})}}function _T(t){let e,n;return e=new vT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function wT(t){let e,n;return e=new gT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function IT(t){let e,n;return e=new dT({props:{post:t[0]}}),e.$on("click",t[2]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function kl(t){let e,n;return e=new lT({props:{post:t[0]}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[0]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function bT(t){let e,n,s,r,i;const o=[IT,wT,_T],a=[];function c(u,h){return u[0].type==="image"?0:u[0].type==="video"?1:2}n=c(t),s=a[n]=o[n](t);let l=t[1]&&kl(t);return{c(){e=_("div"),s.c(),r=U(),l&&l.c(),f(e,"class","post svelte-l1b9wk"),f(e,"tabindex","0")},m(u,h){R(u,e,h),a[n].m(e,null),y(e,r),l&&l.m(e,null),i=!0},p(u,[h]){let d=n;n=c(u),n===d?a[n].p(u,h):(pe(),T(a[d],1,1,()=>{a[d]=null}),ge(),s=a[n],s?s.p(u,h):(s=a[n]=o[n](u),s.c()),w(s,1),s.m(e,r)),u[1]?l?(l.p(u,h),h&2&&w(l,1)):(l=kl(u),l.c(),w(l,1),l.m(e,null)):l&&(pe(),T(l,1,1,()=>{l=null}),ge())},i(u){i||(w(s),w(l),i=!0)},o(u){T(s),T(l),i=!1},d(u){u&&D(e),a[n].d(),l&&l.d()}}}function TT(t,e,n){let{post:s}=e,r=!1;const i=()=>{n(1,r=!r)};return t.$$set=o=>{"post"in o&&n(0,s=o.post)},[s,r,i]}class ET extends Z{constructor(e){super(),J(this,e,TT,bT,Y,{post:0})}}function Sl(t,e,n){const s=t.slice();return s[1]=e[n],s}function Al(t){let e,n;return e=new ET({props:{post:t[1]}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.post=s[1]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function kT(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Al(Sl(t,s,o));const i=o=>T(r[o],1,1,()=>{r[o]=null});return{c(){e=_("ol");for(let o=0;o<r.length;o+=1)r[o].c();f(e,"class","page svelte-vcm6im")},m(o,a){R(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const l=Sl(o,s,c);r[c]?(r[c].p(l,a),w(r[c],1)):(r[c]=Al(l),r[c].c(),w(r[c],1),r[c].m(e,null))}for(pe(),c=s.length;c<r.length;c+=1)i(c);ge()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)w(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)T(r[a]);n=!1},d(o){o&&D(e),kn(r,o)}}}function ST(t,e,n){let{posts:s}=e;return t.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class AT extends Z{constructor(e){super(),J(this,e,ST,kT,Y,{posts:0})}}function CT(t){let e;return{c(){e=_("div")},m(n,s){R(n,e,s),t[1](e)},p:A,i:A,o:A,d(n){n&&D(e),t[1](null)}}}function DT(t,e,n){const s=Ke(),r=new IntersectionObserver(a=>{a[0].isIntersecting&&s("visible")},{rootMargin:"1250px"});let i;function o(a){mn[a?"unshift":"push"](()=>{i=a,n(0,i)})}return t.$$.update=()=>{t.$$.dirty&1&&(r.disconnect(),i&&r.observe(i))},[i,o]}class RT extends Z{constructor(e){super(),J(this,e,DT,CT,Y,{})}}const NT="/assets/shironeko-x.c28cad00.png";function OT(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=U(),i=_("span"),i.textContent="You have reached the end",hr(n.src,s=NT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-1rtbqa7"),f(e,"class","svelte-1rtbqa7")},m(o,a){R(o,e,a),y(e,n),y(e,r),y(e,i)},p:A,i:A,o:A,d(o){o&&D(e)}}}class PT extends Z{constructor(e){super(),J(this,e,null,OT,Y,{})}}const LT="/assets/shironeko-confused.4071d5b2.png";function MT(t){let e,n,s,r,i;return{c(){e=_("div"),n=_("img"),r=U(),i=_("span"),i.textContent="No results found",hr(n.src,s=LT)||f(n,"src",s),f(n,"alt","No results."),f(i,"class","svelte-10fem3h"),f(e,"class","svelte-10fem3h")},m(o,a){R(o,e,a),y(e,n),y(e,r),y(e,i)},p:A,i:A,o:A,d(o){o&&D(e)}}}class $T extends Z{constructor(e){super(),J(this,e,null,MT,Y,{})}}const xT=()=>{const t={count:null,pages:[],nextPage:0},{subscribe:e,update:n,set:s}=Sn(t);return{subscribe:e,addPage(r){n(i=>({count:r.count,pages:[...i.pages,r.posts],nextPage:i.nextPage+1}))},reset(){s(t)}}},lr=xT(),UT={sortProperty:"id",minScore:0},FT=()=>{const{subscribe:t,set:e}=Sn(UT);return{subscribe:t,set:e}},ur=FT();function Cl(t,e,n){const s=t.slice();return s[9]=e[n],s}function VT(t){let e,n;return e=new $T({}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function BT(t){let e,n,s=St(t[0].count)+"",r,i,o,a,c,l,u,h,d,p,g,m,E,k,N,I,q,C,S,K,$e,le=t[0].pages,x=[];for(let P=0;P<le.length;P+=1)x[P]=Dl(Cl(t,le,P));const wi=P=>T(x[P],1,1,()=>{x[P]=null}),te=[qT,jT],oe=[];function Qe(P,re){return P[2]?0:1}return I=Qe(t),q=oe[I]=te[I](t),{c(){e=_("div"),n=_("span"),r=fe(s),i=fe(" results"),o=U(),a=_("select"),c=_("option"),c.textContent="Date",l=_("option"),l.textContent="Score",u=U(),h=_("select"),d=_("option"),d.textContent="Any Score",p=_("option"),p.textContent="Score > 10",g=_("option"),g.textContent="Score > 100",m=_("option"),m.textContent="Score > 1K",E=U(),k=_("ol");for(let P=0;P<x.length;P+=1)x[P].c();N=U(),q.c(),C=Xt(),f(n,"class","svelte-18wioru"),c.__value="id",c.value=c.__value,f(c,"class","svelte-18wioru"),l.__value="score",l.value=l.__value,f(l,"class","svelte-18wioru"),f(a,"title","Sort results by"),f(a,"class","svelte-18wioru"),t[3].sortProperty===void 0&&Xn(()=>t[6].call(a)),d.__value=0,d.value=d.__value,f(d,"class","svelte-18wioru"),p.__value=10,p.value=p.__value,f(p,"class","svelte-18wioru"),g.__value=100,g.value=g.__value,f(g,"class","svelte-18wioru"),m.__value=1e3,m.value=m.__value,f(m,"class","svelte-18wioru"),f(h,"class","svelte-18wioru"),t[3].minScore===void 0&&Xn(()=>t[7].call(h)),f(e,"class","header svelte-18wioru"),f(k,"class","svelte-18wioru")},m(P,re){R(P,e,re),y(e,n),y(n,r),y(n,i),y(e,o),y(e,a),y(a,c),y(a,l),js(a,t[3].sortProperty),y(e,u),y(e,h),y(h,d),y(h,p),y(h,g),y(h,m),js(h,t[3].minScore),R(P,E,re),R(P,k,re);for(let Dt=0;Dt<x.length;Dt+=1)x[Dt].m(k,null);R(P,N,re),oe[I].m(P,re),R(P,C,re),S=!0,K||($e=[ee(a,"change",t[6]),ee(h,"change",t[7])],K=!0)},p(P,re){if((!S||re&1)&&s!==(s=St(P[0].count)+"")&&Me(r,s),re&8&&js(a,P[3].sortProperty),re&8&&js(h,P[3].minScore),re&1){le=P[0].pages;let Ne;for(Ne=0;Ne<le.length;Ne+=1){const Pa=Cl(P,le,Ne);x[Ne]?(x[Ne].p(Pa,re),w(x[Ne],1)):(x[Ne]=Dl(Pa),x[Ne].c(),w(x[Ne],1),x[Ne].m(k,null))}for(pe(),Ne=le.length;Ne<x.length;Ne+=1)wi(Ne);ge()}let Dt=I;I=Qe(P),I===Dt?oe[I].p(P,re):(pe(),T(oe[Dt],1,1,()=>{oe[Dt]=null}),ge(),q=oe[I],q?q.p(P,re):(q=oe[I]=te[I](P),q.c()),w(q,1),q.m(C.parentNode,C))},i(P){if(!S){for(let re=0;re<le.length;re+=1)w(x[re]);w(q),S=!0}},o(P){x=x.filter(Boolean);for(let re=0;re<x.length;re+=1)T(x[re]);T(q),S=!1},d(P){P&&D(e),P&&D(E),P&&D(k),kn(x,P),P&&D(N),oe[I].d(P),P&&D(C),K=!1,Ve($e)}}}function Dl(t){let e,n;return e=new AT({props:{posts:t[9]}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.posts=s[9]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function jT(t){let e,n;return e=new PT({}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function qT(t){let e,n;return e=new RT({}),e.$on("visible",t[8]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function zT(t){let e,n,s,r;const i=[BT,VT],o=[];function a(c,l){return c[0].count?0:c[1]?1:-1}return~(e=a(t))&&(n=o[e]=i[e](t)),{c(){n&&n.c(),s=Xt()},m(c,l){~e&&o[e].m(c,l),R(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(n&&(pe(),T(o[u],1,1,()=>{o[u]=null}),ge()),~e?(n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s)):n=null)},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){~e&&o[e].d(c),c&&D(s)}}}function HT(t,e,n){let s,r,i,o,a;Xe(t,lr,d=>n(0,o=d)),Xe(t,ur,d=>n(3,a=d));const c=Ke();function l(){a.sortProperty=Ma(this),ur.set(a)}function u(){a.minScore=Ma(this),ur.set(a)}const h=()=>c("endreached");return t.$$.update=()=>{t.$$.dirty&1&&n(5,s=o.count/df),t.$$.dirty&33&&n(2,r=o.pages.length<s),t.$$.dirty&1&&n(1,i=o.count===0)},[o,i,r,a,c,s,l,u,h]}class KT extends Z{constructor(e){super(),J(this,e,HT,zT,Y,{})}}function GT(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-arrow-up"></i>',f(e,"aria-label","back to top"),f(e,"title","Go back up"),f(e,"class","svelte-87o3ew"),je(e,"visible",t[0])},m(r,i){R(r,e,i),n||(s=ee(e,"click",t[1]),n=!0)},p(r,[i]){i&1&&je(e,"visible",r[0])},i:A,o:A,d(r){r&&D(e),n=!1,s()}}}function WT(t,e,n){let s=0,r=!1;const i=()=>{const a=window.scrollY;n(0,r=a<s&&a>0),s=a};return xl(()=>{document.addEventListener("scroll",i,{passive:!0})}),Of(()=>{document.removeEventListener("scroll",i)}),[r,()=>window.scrollTo(0,0)]}class QT extends Z{constructor(e){super(),J(this,e,WT,GT,Y,{})}}function YT(t){let e,n,s,r,i,o,a,c,l,u,h;return{c(){e=_("div"),n=_("div"),s=_("i"),i=U(),o=_("div"),a=_("h3"),c=fe(t[2]),l=U(),u=_("span"),h=fe(t[1]),f(s,"class",r=nt(`codicon codicon-${t[0]}`)+" svelte-12hjxw5"),f(n,"class","icon svelte-12hjxw5"),f(a,"class","svelte-12hjxw5"),f(e,"class","error svelte-12hjxw5")},m(d,p){R(d,e,p),y(e,n),y(n,s),y(e,i),y(e,o),y(o,a),y(a,c),y(o,l),y(o,u),y(u,h)},p(d,[p]){p&1&&r!==(r=nt(`codicon codicon-${d[0]}`)+" svelte-12hjxw5")&&f(s,"class",r),p&4&&Me(c,d[2]),p&2&&Me(h,d[1])},i:A,o:A,d(d){d&&D(e)}}}function XT(t,e,n){let{icon:s}=e,{message:r}=e,{title:i}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"message"in o&&n(1,r=o.message),"title"in o&&n(2,i=o.title)},[s,r,i]}class wf extends Z{constructor(e){super(),J(this,e,XT,YT,Y,{icon:0,message:1,title:2})}}function JT(t){let e;return{c(){e=_("h1"),e.textContent="kurosearch",f(e,"class","svelte-1qsrrgo")},m(n,s){R(n,e,s)},p:A,i:A,o:A,d(n){n&&D(e)}}}class ZT extends Z{constructor(e){super(),J(this,e,null,JT,Y,{})}}function Rl(t,e,n){const s=t.slice();return s[16]=e[n],s[18]=n,s}function Nl(t){let e,n,s,r=t[2],i=[];for(let c=0;c<r.length;c+=1)i[c]=Ol(Rl(t,r,c));const o=c=>T(i[c],1,1,()=>{i[c]=null});let a=t[2].length>1&&Pl(t);return{c(){e=_("ul");for(let c=0;c<i.length;c+=1)i[c].c();n=U(),a&&a.c(),f(e,"class","svelte-1sws22c")},m(c,l){R(c,e,l);for(let u=0;u<i.length;u+=1)i[u].m(e,null);y(e,n),a&&a.m(e,null),s=!0},p(c,l){if(l&4){r=c[2];let u;for(u=0;u<r.length;u+=1){const h=Rl(c,r,u);i[u]?(i[u].p(h,l),w(i[u],1)):(i[u]=Ol(h),i[u].c(),w(i[u],1),i[u].m(e,n))}for(pe(),u=r.length;u<i.length;u+=1)o(u);ge()}c[2].length>1?a?a.p(c,l):(a=Pl(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(c){if(!s){for(let l=0;l<r.length;l+=1)w(i[l]);s=!0}},o(c){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)T(i[l]);s=!1},d(c){c&&D(e),kn(i,c),a&&a.d()}}}function Ol(t){let e,n;function s(){return t[6](t[18])}function r(){return t[7](t[16])}return e=new vf({props:{tag:t[16]}}),e.$on("click",s),e.$on("contextmenu",r),{c(){z(e.$$.fragment)},m(i,o){B(e,i,o),n=!0},p(i,o){t=i;const a={};o&4&&(a.tag=t[16]),e.$set(a)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){T(e.$$.fragment,i),n=!1},d(i){j(e,i)}}}function Pl(t){let e,n,s;return{c(){e=_("button"),e.innerHTML='<i class="codicon codicon-star-full svelte-1sws22c"></i>',f(e,"class","add-supertag svelte-1sws22c"),f(e,"title","Click to create a new supertag")},m(r,i){R(r,e,i),n||(s=ee(e,"click",t[8]),n=!0)},p:A,d(r){r&&D(e),n=!1,s()}}}function eE(t){let e,n;return e=new KT({}),e.$on("endreached",t[4]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function tE(t){let e,n,s,r;const i=[sE,nE],o=[];function a(c,l){return c[1].message==="Failed to fetch"?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Xt()},m(c,l){o[e].m(c,l),R(c,s,l),r=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(pe(),T(o[u],1,1,()=>{o[u]=null}),ge(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&D(s)}}}function nE(t){let e,n;return e=new wf({props:{title:"Application Error",icon:"error",message:t[1].message}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&2&&(i.message=s[1].message),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function sE(t){let e,n;return e=new wf({props:{title:"Connection Error",icon:"debug-disconnect",message:"Failed to connect to the server. Make sure you have a stable internet connection."}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Ll(t){let e,n;return e=new Tb({props:{tags:t[2]}}),e.$on("submit",t[10]),e.$on("close",t[11]),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.tags=s[2]),e.$set(i)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function rE(t){let e,n,s,r,i,o,a,c,l,u,h,d,p,g,m,E;n=new ZT({}),r=new Fb({}),r.$on("pick",t[5]);let k=t[2].length&&Nl(t);c=new mf({props:{title:"Click to search with active tags",text:"Search"}}),c.$on("click",t[9]);const N=[tE,eE],I=[];function q(S,K){return S[1]!==void 0?0:1}u=q(t),h=I[u]=N[u](t),p=new QT({});let C=t[0]&&Ll(t);return{c(){e=_("div"),z(n.$$.fragment),s=U(),z(r.$$.fragment),i=U(),k&&k.c(),o=U(),a=_("div"),z(c.$$.fragment),l=U(),h.c(),d=U(),z(p.$$.fragment),g=U(),C&&C.c(),m=Xt(),f(a,"class","sort-row svelte-1sws22c"),f(e,"class","search-config svelte-1sws22c")},m(S,K){R(S,e,K),B(n,e,null),y(e,s),B(r,e,null),y(e,i),k&&k.m(e,null),y(e,o),y(e,a),B(c,a,null),R(S,l,K),I[u].m(S,K),R(S,d,K),B(p,S,K),R(S,g,K),C&&C.m(S,K),R(S,m,K),E=!0},p(S,[K]){S[2].length?k?(k.p(S,K),K&4&&w(k,1)):(k=Nl(S),k.c(),w(k,1),k.m(e,o)):k&&(pe(),T(k,1,1,()=>{k=null}),ge());let $e=u;u=q(S),u===$e?I[u].p(S,K):(pe(),T(I[$e],1,1,()=>{I[$e]=null}),ge(),h=I[u],h?h.p(S,K):(h=I[u]=N[u](S),h.c()),w(h,1),h.m(d.parentNode,d)),S[0]?C?(C.p(S,K),K&1&&w(C,1)):(C=Ll(S),C.c(),w(C,1),C.m(m.parentNode,m)):C&&(pe(),T(C,1,1,()=>{C=null}),ge())},i(S){E||(w(n.$$.fragment,S),w(r.$$.fragment,S),w(k),w(c.$$.fragment,S),w(h),w(p.$$.fragment,S),w(C),E=!0)},o(S){T(n.$$.fragment,S),T(r.$$.fragment,S),T(k),T(c.$$.fragment,S),T(h),T(p.$$.fragment,S),T(C),E=!1},d(S){S&&D(e),j(n),j(r),k&&k.d(),j(c),S&&D(l),I[u].d(S),S&&D(d),j(p,S),S&&D(g),C&&C.d(S),S&&D(m)}}}function iE(t,e,n){let s,r,i,o;Xe(t,_o,I=>n(12,s=I)),Xe(t,wt,I=>n(2,r=I)),Xe(t,ur,I=>n(13,i=I)),Xe(t,lr,I=>n(14,o=I));let a=!1,c;const l=async()=>(lr.reset(),u()),u=async()=>{n(1,c=void 0);try{const I=h(),q=await ZI(o.nextPage,I,i.sortProperty,i.minScore);lr.addPage(q)}catch(I){n(1,c=I),console.warn(I)}},h=()=>r.flatMap(I=>I.type==="supertag"?s.supertags.find(q=>q.name===I.name).tags:I.toSearchableTag());return[a,c,r,l,u,I=>wt.addOrReplace(I.detail),I=>wt.removeByIndex(I),I=>wt.addOrReplace(new Lr(lf(I.modifier),I.name,I.count,I.type)),()=>{n(0,a=!0)},()=>l(),I=>{_o.addSupertag(I.detail),wt.set([new Lr("+",I.detail.name,I.detail.tags.length,"supertag")])},()=>{n(0,a=!1)}]}class oE extends Z{constructor(e){super(),J(this,e,iE,rE,Y,{})}}function aE(t){let e,n;return e=new _f({}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},p:A,i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function cE(t){let e,n,s;var r=t[0];function i(o){return{}}return r&&(e=new r(i())),{c(){e&&z(e.$$.fragment),n=Xt()},m(o,a){e&&B(e,o,a),R(o,n,a),s=!0},p(o,a){if(r!==(r=o[0])){if(e){pe();const c=e;T(c.$$.fragment,1,0,()=>{j(c,1)}),ge()}r?(e=new r(i()),z(e.$$.fragment),w(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&T(e.$$.fragment,o),s=!1},d(o){o&&D(n),e&&j(e,o)}}}function lE(t){let e,n,s,r;const i=[cE,aE],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Xt()},m(c,l){o[e].m(c,l),R(c,s,l),r=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(pe(),T(o[u],1,1,()=>{o[u]=null}),ge(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),w(n,1),n.m(s.parentNode,s))},i(c){r||(w(n),r=!0)},o(c){T(n),r=!1},d(c){o[e].d(c),c&&D(s)}}}function uE(t,e,n){let{loadComponent:s}=e,r;return xl(async()=>{n(0,r=(await s()).default)}),t.$$set=i=>{"loadComponent"in i&&n(1,s=i.loadComponent)},[r,s]}class Oa extends Z{constructor(e){super(),J(this,e,uE,lE,Y,{loadComponent:1})}}function hE(t){let e;return{c(){e=_("p"),e.textContent="You got lost..."},m(n,s){R(n,e,s)},i:A,o:A,d(n){n&&D(e)}}}function dE(t){let e,n;return e=new Oa({props:{loadComponent:_E}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function fE(t){let e,n;return e=new Oa({props:{loadComponent:vE}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function pE(t){let e,n;return e=new Oa({props:{loadComponent:yE}}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function gE(t){let e,n;return e=new oE({}),{c(){z(e.$$.fragment)},m(s,r){B(e,s,r),n=!0},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function mE(t){let e,n,s,r;const i=[gE,pE,fE,dE,hE],o=[];function a(c,l){return c[0]==="search"?0:c[0]==="account"?1:c[0]==="settings"?2:c[0]==="help"?3:4}return n=a(t),s=o[n]=i[n](t),{c(){e=_("main"),s.c(),f(e,"class","svelte-628m8p")},m(c,l){R(c,e,l),o[n].m(e,null),r=!0},p(c,[l]){let u=n;n=a(c),n!==u&&(pe(),T(o[u],1,1,()=>{o[u]=null}),ge(),s=o[n],s||(s=o[n]=i[n](c),s.c()),w(s,1),s.m(e,null))},i(c){r||(w(s),r=!0)},o(c){T(s),r=!1},d(c){c&&D(e),o[n].d()}}}const yE=()=>pi(()=>import("./Account.8e69d992.js"),["assets/Account.8e69d992.js","assets/Account.1572ce77.css"]),vE=()=>pi(()=>import("./Preferences.88f01b5a.js"),["assets/Preferences.88f01b5a.js","assets/Preferences.aea2222b.css","assets/ParagraphHeading.23750a7a.js","assets/ParagraphHeading.5a89239e.css"]),_E=()=>pi(()=>import("./Help.c61a6ce3.js"),["assets/Help.c61a6ce3.js","assets/Help.9081c352.css","assets/ParagraphHeading.23750a7a.js","assets/ParagraphHeading.5a89239e.css"]);function wE(t,e,n){let s;return Xe(t,Pt,r=>n(0,s=r)),[s]}class IE extends Z{constructor(e){super(),J(this,e,wE,mE,Y,{})}}function bE(t){let e;return{c(){e=_("footer"),e.innerHTML=`<div><a title="Source Code" href="https://github.com/kurozenzen/kurosearch" target="_newtab" class="svelte-143t5oi"><i class="codicon codicon-github"></i> Github</a></div> 
  <span class="copyright svelte-143t5oi">\xA9 2022 kurozenzen</span> 
  <div></div>`,f(e,"class","svelte-143t5oi")},m(n,s){R(n,e,s)},p:A,i:A,o:A,d(n){n&&D(e)}}}class TE extends Z{constructor(e){super(),J(this,e,null,bE,Y,{})}}function EE(t){let e,n,s,r,i,o;return e=new BI({}),s=new IE({}),i=new TE({}),{c(){z(e.$$.fragment),n=U(),z(s.$$.fragment),r=U(),z(i.$$.fragment)},m(a,c){B(e,a,c),R(a,n,c),B(s,a,c),R(a,r,c),B(i,a,c),o=!0},p:A,i(a){o||(w(e.$$.fragment,a),w(s.$$.fragment,a),w(i.$$.fragment,a),o=!0)},o(a){T(e.$$.fragment,a),T(s.$$.fragment,a),T(i.$$.fragment,a),o=!1},d(a){j(e,a),a&&D(n),j(s,a),a&&D(r),j(i,a)}}}class kE extends Z{constructor(e){super(),J(this,e,null,EE,Y,{})}}function SE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:o}=t;let a,c;const l=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){const{Workbox:h,messageSW:d}=await pi(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",p=>{p.isUpdate?window.location.reload():s==null||s()}),a.register({immediate:e}).then(p=>{i?i("/sw.js",p):r==null||r(p)}).catch(p=>{o==null||o(p)})}}return c=u(),l}new kE({target:document.getElementById("app")});SE();export{fl as $,hr as A,mf as B,$I as C,Xt as D,Xe as E,_o as F,ll as G,Sn as H,Sf as I,Cf as J,Df as K,Af as L,gl as M,Xn as N,js as O,Ma as P,NE as Q,mn as R,Z as S,CE as T,AE as U,RE as V,DE as W,vf as X,Lr as Y,qb as Z,QT as _,f as a,R as b,y as c,Me as d,_ as e,En as f,A as g,D as h,J as i,U as j,w as k,ee as l,pe as m,nt as n,_i as o,ge as p,T as q,kn as r,Y as s,fe as t,Ve as u,Ke as v,z as w,B as x,j as y,cn as z};
